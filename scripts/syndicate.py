#!/usr/bin/env python3
"""
Short-post syndication: new blog post in your RSS feed -> Blogger, Tumblr, Pinterest.

Only a short excerpt + "Read Full Post" link + home link + source link is posted
(never the full article). posted.json remembers what was already posted.

First run (no posted.json yet) only SEEDS the file with the posts that already exist,
so your old posts are NOT re-posted.
"""
import json
import os
import sys
import time
from pathlib import Path
from urllib.parse import urlencode

import feedparser
import requests
from bs4 import BeautifulSoup
from requests_oauthlib import OAuth1

SITE_URL = os.environ.get("SITE_URL", "").strip().rstrip("/")
SITE_NAME = os.environ.get("SITE_NAME", "").strip() or "My Site"
FEED_URL = os.environ.get("FEED_URL", "").strip() or (SITE_URL + "/rss.xml")
DEFAULT_IMAGE = os.environ.get("DEFAULT_IMAGE", "").strip()
STATE_FILE = Path("posted.json")
EXCERPT_WORDS = int(os.environ.get("EXCERPT_WORDS", "70"))
MAX_PER_RUN = int(os.environ.get("MAX_PER_RUN", "3"))
FEED_WAIT_SECONDS = int(os.environ.get("FEED_WAIT_SECONDS", "480"))
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
def absolute(url):
    if url and url.startswith("/"):
        return SITE_URL + url
    return url


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


def fetch_feed():
    r = requests.get(FEED_URL, headers=UA, timeout=30)
    r.raise_for_status()
    feed = feedparser.parse(r.content)
    if feed.bozo and not feed.entries:
        raise RuntimeError(f"Could not parse feed at {FEED_URL}: {feed.bozo_exception}")
    return feed.entries


def find_image(entry, url):
    for key in ("media_content", "media_thumbnail"):
        for m in entry.get(key, []) or []:
            if m.get("url"):
                return absolute(m["url"])
    for enc in entry.get("enclosures", []) or []:
        if enc.get("type", "").startswith("image") and enc.get("href"):
            return absolute(enc["href"])

    html = entry.get("summary", "") or ""
    for c in entry.get("content", []) or []:
        html += c.get("value", "")
    img = BeautifulSoup(html, "html.parser").find("img")
    if img and img.get("src"):
        return absolute(img["src"])

    try:
        page = requests.get(url, headers=UA, timeout=20)
        soup = BeautifulSoup(page.text, "html.parser")
        tag = soup.find("meta", attrs={"property": "og:image"}) or soup.find(
            "meta", attrs={"name": "twitter:image"}
        )
        if tag and tag.get("content"):
            return absolute(tag["content"].strip())
    except requests.RequestException:
        pass
    return DEFAULT_IMAGE


def entry_to_post(entry):
    url = entry.get("link", "").strip()
    raw = entry.get("summary", "") or entry.get("description", "")
    return {
        "title": plain(entry.get("title", "")),
        "excerpt": shorten(plain(raw), EXCERPT_WORDS),
        "url": url,
        "image": find_image(entry, url),
        "tags": [t.get("term", "").strip() for t in entry.get("tags", []) if t.get("term")][:8],
    }


def wait_until_live(url, timeout=600):
    """Avoid posting a link that still 404s because Vercel is mid-deploy."""
    end = time.time() + timeout
    while time.time() < end:
        try:
            if requests.get(url, headers=UA, timeout=15, allow_redirects=True).status_code == 200:
                return True
        except requests.RequestException:
            pass
        time.sleep(15)
    return False


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
    img = (
        f'<p><img src="{post["image"]}" alt="{post["title"]}" style="max-width:100%"></p>'
        if post["image"]
        else ""
    )
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
        raise RuntimeError("Pinterest needs an image (set DEFAULT_IMAGE or add one to the feed/page)")
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
def find_new(entries, state):
    new = []
    for e in entries:
        url = e.get("link", "").strip()
        if not url:
            continue
        entry = state.get(url)
        if entry is None:
            new.append(e)
        elif not entry.get("seeded") and any(p not in entry["platforms"] for p in PLATFORMS):
            new.append(e)  # retry platforms that failed earlier
    return list(reversed(new))  # oldest first


def main():
    if not SITE_URL:
        sys.exit("SITE_URL is not set (repo Variables).")

    manual = os.environ.get("GITHUB_EVENT_NAME") == "workflow_dispatch"
    first_run = not STATE_FILE.exists()
    state = load_state()

    deadline = time.time() + (0 if (manual or first_run) else FEED_WAIT_SECONDS)
    while True:
        entries = fetch_feed()
        if first_run:
            for e in entries:
                url = e.get("link", "").strip()
                if url:
                    state[url] = {"seeded": True, "platforms": {}}
            save_state(state)
            print(f"[seed] Marked {len(state)} existing posts as already handled. Nothing posted.")
            return 0
        new = find_new(entries, state)
        if new or time.time() >= deadline:
            break
        print("[wait] new post not in feed yet (deploy still running?), retrying in 30s...")
        time.sleep(30)

    if not new:
        print("[done] Nothing new to post.")
        return 0

    failures = 0
    for entry in new[:MAX_PER_RUN]:
        post = entry_to_post(entry)
        rec = state.setdefault(post["url"], {"platforms": {}})
        rec.pop("seeded", None)
        rec["title"] = post["title"]
        pending = [p for p in PLATFORMS if p not in rec["platforms"]]

        print(f"[post] {post['title']} -> {post['url']}")
        if not wait_until_live(post["url"]):
            print("  [error] URL not live after timeout, will retry next run")
            failures += 1
            continue

        for name in pending:
            needed, fn = PLATFORMS[name]
            if not all(env(k) for k in needed):
                print(f"  [{name}] secrets missing, skipped")
                rec["platforms"][name] = "skipped"
                continue
            try:
                rec["platforms"][name] = fn(post)
                print(f"  [{name}] ok")
            except Exception as ex:  # keep going with other platforms
                failures += 1
                detail = getattr(getattr(ex, "response", None), "text", "")
                print(f"  [{name}] FAILED: {ex} {detail[:300]}")
        save_state(state)

    if len(new) > MAX_PER_RUN:
        print(f"[note] {len(new) - MAX_PER_RUN} more post(s) pending; they go out on the next run.")
    save_state(state)
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
