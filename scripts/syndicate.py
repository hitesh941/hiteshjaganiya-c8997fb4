#!/usr/bin/env python3
"""
Short-post syndication: new blog post -> Blogger, Tumblr, Pinterest.

Where new posts come from:
  1. the "routes" list in scripts/prerender.mjs  (every /blog/... route)
  2. the RSS feed (optional extra source, failures are ignored)

For each NEW post the script waits until the live page is deployed on Vercel,
reads title / description / image from that page, and posts ONLY a short excerpt
+ "Read Full Post" link + home link + source link (never the full article).

posted.json remembers what was already handled.

Modes (set by the workflow):
  - normal run : post every post that is not in posted.json yet
  - SEED=true  : mark every post that exists right now as "already done", post nothing
                 (also happens automatically when posted.json does not exist)
  - POST_URL=  : force-post that one URL now (for testing / re-posting)
"""
import json
import os
import re
import sys
import time
from pathlib import Path
from urllib.parse import urlencode, urlparse

import feedparser
import requests
from bs4 import BeautifulSoup
from requests_oauthlib import OAuth1

SITE_URL = os.environ.get("SITE_URL", "").strip().rstrip("/")
SITE_NAME = os.environ.get("SITE_NAME", "").strip() or "My Site"
FEED_URL = os.environ.get("FEED_URL", "").strip() or (SITE_URL + "/feed.xml")
DEFAULT_IMAGE = os.environ.get("DEFAULT_IMAGE", "").strip()
ROUTES_FILE = os.environ.get("ROUTES_FILE", "scripts/prerender.mjs")
STATE_FILE = Path("posted.json")
EXCERPT_WORDS = int(os.environ.get("EXCERPT_WORDS", "70"))
MAX_PER_RUN = int(os.environ.get("MAX_PER_RUN", "3"))
PAGE_WAIT_SECONDS = int(os.environ.get("PAGE_WAIT_SECONDS", "900"))
UA = {"User-Agent": "Mozilla/5.0 (compatible; BlogSyndicator/1.0)"}


def env(name):
    return os.environ.get(name, "").strip()


# ------------------------------------------------------------------ state
def load_state():
    if STATE_FILE.exists():
        return json.loads(STATE_FILE.read_text(encoding="utf-8"))
    return {}


def save_state(state):
    STATE_FILE.write_text(json.dumps(state, indent=2, ensure_ascii=False), encoding="utf-8")


# ---------------------------------------------------------------- helpers
def normalize(url):
    p = urlparse(url.strip())
    path = p.path.rstrip("/") or "/"
    return f"{p.scheme}://{p.netloc}{path}"


def absolute(url):
    if url and url.startswith("/"):
        return SITE_URL + url
    return url


def usable(url):
    """Pinterest/Tumblr reject SVG, so only accept raster formats there."""
    return bool(url) and not url.lower().split("?")[0].endswith(".svg")


def with_utm(url, source):
    sep = "&" if "?" in url else "?"
    return url + sep + urlencode(
        {"utm_source": source, "utm_medium": "syndication", "utm_campaign": "blog"}
    )


def plain(text):
    return BeautifulSoup(text or "", "html.parser").get_text(" ", strip=True)


def shorten(text, words):
    parts = text.split()
    if len(parts) <= words:
        return text.strip()
    return " ".join(parts[:words]).rstrip(".,;:") + "..."


# -------------------------------------------------------------- discovery
def routes_from_prerender():
    p = Path(ROUTES_FILE)
    if not p.exists():
        print(f"[warn] {ROUTES_FILE} not found, skipping routes source")
        return []
    m = re.search(r"const\s+routes\s*=\s*\[(.*?)\]\s*;", p.read_text(encoding="utf-8"), re.S)
    if not m:
        print(f"[warn] could not find the routes list in {ROUTES_FILE}")
        return []
    found = re.findall(r'["\'](/blog/[^"\'\s?#]+)["\']', m.group(1))
    return [normalize(SITE_URL + r) for r in found]


def urls_from_feed():
    try:
        r = requests.get(FEED_URL, headers=UA, timeout=30)
        r.raise_for_status()
        return [normalize(e["link"]) for e in feedparser.parse(r.content).entries if e.get("link")]
    except Exception as ex:
        print(f"[warn] feed not used ({ex})")
        return []


def discover():
    seen, ordered = set(), []
    for u in urls_from_feed() + routes_from_prerender():
        if u not in seen:
            seen.add(u)
            ordered.append(u)
    return ordered


# ------------------------------------------------------------ page parsing
def parse_page(url, html):
    """Return post data from a PRERENDERED page, or None if it is not live yet."""
    soup = BeautifulSoup(html, "html.parser")

    canon = soup.find("link", rel="canonical")
    canon_path = urlparse(canon["href"]).path.rstrip("/") if canon and canon.get("href") else ""
    if canon_path != urlparse(url).path.rstrip("/"):
        return None  # still the old deploy / SPA fallback page

    def meta(*names):
        for n in names:
            tag = soup.find("meta", attrs={"property": n}) or soup.find("meta", attrs={"name": n})
            if tag and tag.get("content"):
                return tag["content"].strip()
        return ""

    title = meta("og:title") or (soup.title.get_text(strip=True) if soup.title else "")
    if not title:
        return None
    description = meta("description", "og:description")
    if not description:
        p = soup.find("article") or soup
        para = p.find("p")
        description = para.get_text(" ", strip=True) if para else ""

    candidates = [meta("og:image"), meta("twitter:image")]
    scope = soup.find("article") or soup.find("main") or soup
    for img in scope.find_all("img"):
        src = img.get("src") or ""
        if src and not re.search(r"profile|logo|avatar|icon", src, re.I):
            candidates.append(src)
    candidates = [absolute(c) for c in candidates if c]
    raster = next((c for c in candidates if usable(c)), "") or DEFAULT_IMAGE
    any_img = next(iter(candidates), "") or raster

    tags = [t.strip() for t in meta("keywords").split(",") if t.strip()]
    if not tags:
        tags = [t.get("content", "").strip() for t in soup.find_all("meta", attrs={"property": "article:tag"}) if t.get("content")]

    return {
        "title": plain(title),
        "excerpt": shorten(plain(description), EXCERPT_WORDS),
        "url": url,
        "image": raster,
        "image_any": any_img,
        "tags": tags[:8],
    }


def load_post(url, timeout):
    """Wait until Vercel serves the prerendered page, then read it."""
    end = time.time() + timeout
    while True:
        try:
            r = requests.get(url, headers=UA, timeout=20, allow_redirects=True)
            if r.status_code == 200:
                post = parse_page(url, r.text)
                if post:
                    return post
        except requests.RequestException:
            pass
        if time.time() >= end:
            return None
        print("  [wait] page not live yet (deploy running?), retrying in 20s...")
        time.sleep(20)


# ---------------------------------------------------------------- Blogger
def post_blogger(post):
    token_resp = requests.post(
        "https://oauth2.googleapis.com/token",
        data={
            "client_id": env("BLOGGER_CLIENT_ID"),
            "client_secret": env("BLOGGER_CLIENT_SECRET"),
            "refresh_token": env("BLOGGER_REFRESH_TOKEN"),
            "grant_type": "refresh_token",
        },
        timeout=30,
    )
    token_resp.raise_for_status()
    access = token_resp.json()["access_token"]

    url = with_utm(post["url"], "blogger")
    home = with_utm(SITE_URL, "blogger")
    pic = post.get("image_any") or post["image"]
    img = f'<p><img src="{pic}" alt="{post["title"]}" style="max-width:100%"></p>' if pic else ""
    html = (
        f"{img}"
        f"<p>{post['excerpt']}</p>"
        f'<p><a href="{url}">Read Full Post: {post["title"]}</a></p>'
        f'<p>More articles: <a href="{home}">{SITE_NAME}</a></p>'
        f'<p><em>Source: <a href="{url}">{SITE_NAME}</a></em></p>'
    )
    r = requests.post(
        f"https://www.googleapis.com/blogger/v3/blogs/{env('BLOGGER_BLOG_ID')}/posts/",
        headers={"Authorization": f"Bearer {access}"},
        json={"kind": "blogger#post", "title": post["title"], "content": html, "labels": post["tags"]},
        timeout=30,
    )
    r.raise_for_status()
    return r.json().get("url", "ok")


# ----------------------------------------------------------------- Tumblr
def post_tumblr(post):
    auth = OAuth1(
        env("TUMBLR_CONSUMER_KEY"),
        env("TUMBLR_CONSUMER_SECRET"),
        env("TUMBLR_TOKEN"),
        env("TUMBLR_TOKEN_SECRET"),
    )
    url = with_utm(post["url"], "tumblr")
    home = with_utm(SITE_URL, "tumblr")
    content = []
    if post["image"]:
        content.append({"type": "image", "media": [{"url": post["image"]}], "alt_text": post["title"]})
    content += [
        {"type": "text", "subtype": "heading1", "text": post["title"]},
        {"type": "text", "text": post["excerpt"]},
        {"type": "link", "url": url, "title": f"Read Full Post: {post['title']}"},
        {"type": "link", "url": home, "title": f"More from {SITE_NAME}"},
        {
            "type": "text",
            "text": f"Source: {SITE_NAME}",
            "formatting": [{"start": 8, "end": 8 + len(SITE_NAME), "type": "link", "url": url}],
        },
    ]
    r = requests.post(
        f"https://api.tumblr.com/v2/blog/{env('TUMBLR_BLOG')}/posts",
        auth=auth,
        json={"content": content, "tags": ",".join(post["tags"]), "source_url": url},
        timeout=30,
    )
    r.raise_for_status()
    return str(r.json().get("response", {}).get("id", "ok"))


# -------------------------------------------------------------- Pinterest
def post_pinterest(post):
    if not post["image"]:
        raise RuntimeError("Pinterest needs a PNG/JPG image (set the DEFAULT_IMAGE variable)")
    base = env("PINTEREST_API_BASE") or "https://api.pinterest.com"
    desc = shorten(post["excerpt"], 40) + f" Source: {SITE_NAME}"
    r = requests.post(
        f"{base}/v5/pins",
        headers={"Authorization": f"Bearer {env('PINTEREST_ACCESS_TOKEN')}"},
        json={
            "board_id": env("PINTEREST_BOARD_ID"),
            "title": post["title"][:100],
            "description": desc[:500],
            "link": with_utm(post["url"], "pinterest"),
            "media_source": {"source_type": "image_url", "url": post["image"]},
        },
        timeout=30,
    )
    r.raise_for_status()
    return r.json().get("id", "ok")


PLATFORMS = {
    "blogger": (
        ["BLOGGER_CLIENT_ID", "BLOGGER_CLIENT_SECRET", "BLOGGER_REFRESH_TOKEN", "BLOGGER_BLOG_ID"],
        post_blogger,
    ),
    "tumblr": (
        ["TUMBLR_CONSUMER_KEY", "TUMBLR_CONSUMER_SECRET", "TUMBLR_TOKEN", "TUMBLR_TOKEN_SECRET", "TUMBLR_BLOG"],
        post_tumblr,
    ),
    "pinterest": (["PINTEREST_ACCESS_TOKEN", "PINTEREST_BOARD_ID"], post_pinterest),
}


# ------------------------------------------------------------------- main
def needs_posting(state, url):
    rec = state.get(url)
    if rec is None:
        return True
    if rec.get("seeded"):
        return False
    return any(p not in rec["platforms"] for p in PLATFORMS)  # retry earlier failures


def main():
    if not SITE_URL:
        sys.exit("SITE_URL is not set (repo Variables).")

    forced = env("POST_URL")
    seed = env("SEED").lower() == "true" or not STATE_FILE.exists()
    state = load_state()

    if seed and not forced:
        added = 0
        for u in discover():
            if u not in state:
                state[u] = {"seeded": True, "platforms": {}}
                added += 1
        save_state(state)
        print(f"[seed] Marked {added} existing post(s) as already handled ({len(state)} total). Nothing posted.")
        return 0

    if forced:
        targets = [normalize(forced)]
        wait = min(PAGE_WAIT_SECONDS, 120)
    else:
        targets = [u for u in discover() if needs_posting(state, u)]
        wait = PAGE_WAIT_SECONDS

    if not targets:
        print("[done] Nothing new to post.")
        return 0

    failures = 0
    for url in targets[:MAX_PER_RUN]:
        print(f"[post] {url}")
        post = load_post(url, wait)
        if not post:
            print("  [error] page not live / not readable in time, will retry on the next run")
            failures += 1
            continue

        rec = {"platforms": {}} if forced else state.setdefault(url, {"platforms": {}})
        rec.pop("seeded", None)
        rec["title"] = post["title"]
        state[url] = rec

        for name in PLATFORMS:
            if name in rec["platforms"]:
                continue
            needed, fn = PLATFORMS[name]
            if not all(env(k) for k in needed):
                print(f"  [{name}] secrets missing, skipped")
                rec["platforms"][name] = "skipped"
                continue
            try:
                rec["platforms"][name] = fn(post)
                print(f"  [{name}] ok")
            except Exception as ex:  # keep going with the other platforms
                failures += 1
                detail = getattr(getattr(ex, "response", None), "text", "")
                print(f"  [{name}] FAILED: {ex} {detail[:300]}")
        save_state(state)

    if len(targets) > MAX_PER_RUN:
        print(f"[note] {len(targets) - MAX_PER_RUN} more post(s) pending; they go out on the next run.")
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
