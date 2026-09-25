import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "vite";

const root = process.cwd();
const distDir = path.join(root, "dist");
const serverDir = path.join(root, "dist-server");

const routes = [
  "/",
  "/blog",
  "/thank-you",
  "/blog/top-8-digital-marketing-agencies-in-ahmedabad",
  "/blog/digital-marketing-packages-in-ahmedabad",
  "/blog/google-ads-vs-meta-ads-ahmedabad",
  "/blog/seo-for-real-estate-businesses-in-ahmedabad",
  "/blog/how-to-read-google-analytics-search-console-without-an-agency",
  "/blog/smart-objectives-competitive-benchmarking",
  "/blog/first-year-startup-marketing-budget",
  "/blog/google-ads-optimization-moves-experts",
  "/blog/business-not-showing-google-maps-ahmedabad",
  "/blog/can-ai-content-rank-on-google",
  "/blog/what-is-competitive-benchmarking-beginners-guide",
  "/blog/why-is-google-ads-cpc-high",
  "/blog/seo-strategy-2027",
];

const seoOverrides = {
  "/": {
    title: "Hitesh Jaganiya | Digital Marketing Consultant in Ahmedabad",
    description: "Hitesh Jaganiya, Digital Marketing Consultant in Ahmedabad, offering SEO, Google Ads, and performance-focused digital marketing strategies.",
  },
  "/blog/top-8-digital-marketing-agencies-in-ahmedabad": {
    title: "Top 8 Digital Marketing Agencies in Ahmedabad",
    description: "An independent guide to 8 digital marketing agencies in Ahmedabad, including who each agency suits, what to ask before hiring, and how to compare them.",
    alt: "Top 8 Digital Marketing Agencies in Ahmedabad — independent guide",
  },
  "/blog/digital-marketing-packages-in-ahmedabad": {
    title: "Digital Marketing Packages Ahmedabad: ₹15K vs ₹50K vs ₹1L+",
    description: "Compare digital marketing packages in Ahmedabad from ₹15K to ₹1L+, including SEO, ad spend, deliverables, pricing, and how to choose the right tier.",
    alt: "Digital marketing packages in Ahmedabad — ₹15K, ₹50K and ₹1L+",
  },
  "/blog/google-ads-vs-meta-ads-ahmedabad": {
    title: "Google Ads vs Meta Ads for Ahmedabad Businesses",
    description: "A practical comparison of Google Ads and Meta Ads for Ahmedabad businesses deciding where to spend their first advertising rupee.",
    alt: "Google Ads vs Meta Ads for Ahmedabad businesses",
  },
  "/blog/seo-for-real-estate-businesses-in-ahmedabad": {
    title: "SEO for Real Estate Businesses in Ahmedabad: Practical Guide",
    description: "Practical SEO guide for Ahmedabad real estate businesses covering local keywords, project pages, Google Business Profile, technical SEO and content.",
    alt: "SEO for real estate businesses in Ahmedabad — practical guide",
  },
  "/blog/how-to-read-google-analytics-search-console-without-an-agency": {
    title: "How to Read Google Analytics and Search Console Yourself",
    description: "A practical guide to reading Google Analytics 4 and Search Console yourself, with the key numbers business owners should understand.",
    h1: "How to Read Google Analytics and Search Console Yourself",
    alt: "How to read Google Analytics and Search Console without an agency",
  },
  "/blog/smart-objectives-competitive-benchmarking": {
    title: "Benchmarking Marketing KPIs: What the Research Says",
    description: "Research-led guide to benchmarking marketing KPIs against competitors, including benchmark selection, capability benchmarking and target setting.",
    h1: "What Research Says About Benchmarking KPIs Against Competitors",
    alt: "Research on benchmarking KPIs against competitors",
  },
  "/blog/first-year-startup-marketing-budget": {
    title: "First-Year Startup Marketing Budget: How Much to Spend",
    description: "First-year startup marketing budget guide covering foundation costs, testing spend, scaling, customer value, runway and when to hire outside help.",
    alt: "First-year startup marketing budget guide",
  },
  "/blog/google-ads-optimization-moves-experts": {
    title: "10 Google Ads Optimization Moves Most Accounts Miss",
    description: "Ten practical Google Ads optimization moves that experienced account managers use to reduce wasted spend, improve relevance, and find missed opportunities inside active campaigns.",
    h1: "10 Google Ads Optimization Moves Most Accounts Miss",
    alt: "10 Google Ads Optimization Moves Every Expert Makes — practical account audit guide",
  },
  "/blog/business-not-showing-google-maps-ahmedabad": {
    title: "Business Not Showing on Google Maps in Ahmedabad? 7 Fixes",
    description: "A practical troubleshooting guide for Ahmedabad business owners whose business is not appearing on Google Maps, covering verification, NAP consistency, categories, reviews, service areas, duplicates and suspensions.",
    h1: "Business Not Showing on Google Maps in Ahmedabad? 7 Fixes",
    alt: "Business not showing on Google Maps in Ahmedabad — local SEO troubleshooting guide",
  },
  "/blog/can-ai-content-rank-on-google": {
    title: "Can AI Content Rank on Google? Honest Answer for 2026",
    description: "Can AI content rank on Google in 2026? An honest, data-backed breakdown covering Google's position, ranking data, common AI-content failures, and how to use AI without replacing expertise.",
    h1: "Can AI Content Rank on Google? A Consultant's Honest Answer for 2026",
    alt: "Share of AI-generated content in Google's top 20 search results, 2019 to 2025",
  },
  "/blog/what-is-competitive-benchmarking-beginners-guide": {
    title: "What Is Competitive Benchmarking? A Beginner's Guide",
    description: "What is competitive benchmarking? Learn how to compare competitors, choose useful KPIs, run a benchmarking analysis, and avoid common mistakes.",
    h1: "What Is Competitive Benchmarking? A Beginner's Guide",
  },
  "/blog/seo-strategy-2027": {
    title: "The 5 SEO Shifts That Will Matter Most in 2027 | Hitesh Jaganiya",
    description: "Five SEO strategy shifts for 2027 — human-first content, commodity keywords, bottom-of-funnel intent, content with multiple jobs, and original data — applied to Indian businesses.",
    h1: "The 5 SEO Shifts That Will Matter Most in 2027 (And What They Mean for Indian Businesses)",
    alt: "The 5 SEO Shifts That Will Matter Most in 2027 — practical SEO strategy guide for Indian businesses",
  },
  "/blog/why-is-google-ads-cpc-high": {
    title: "Why Is My Google Ads Cost Per Click So High? 8 Causes and Fixes",
    description: "Why is Google Ads CPC so high? Learn 8 common causes — Quality Score signals, broad ad groups, auction competition, match types, landing pages, competitor terms, bidding and conversion tracking — plus practical fixes.",
    h1: "Why Is My Google Ads Cost Per Click So High? 8 Causes and Fixes",
    alt: "Why Is My Google Ads Cost Per Click So High? Eight causes and fixes for high CPC",
  },
};

await build({
  build: { ssr: "src/entry-server.tsx", outDir: serverDir, emptyOutDir: true },
});

const serverEntry = path.join(serverDir, "entry-server.js");
const { render } = await import(pathToFileURL(serverEntry).href);
const templatePath = path.join(distDir, "index.html");
let template = await fs.readFile(templatePath, "utf8");

function cleanTemplate(source) {
  return source
    .replace(/\s*<title\b[^>]*>[\s\S]*?<\/title>/i, "")
    .replace(/\s*<meta\s+name=["']description["'][^>]*>/i, "")
    .replace(/\s*<meta\s+name=["']author["'][^>]*>/i, "")
    .replace(/\s*<meta\s+name=["']robots["'][^>]*>/i, "")
    .replace(/\s*<script\s+type=["']application\/ld\+json["']>[\s\S]*?<\/script>/gi, "")
    .replace(/<div id=["']root["']><\/div>/i, "<!--__PRERENDERED_ROOT__-->");
}

function helmetToHead(helmet) {
  return [helmet?.base?.toString?.() || "", helmet?.title?.toString?.() || "", helmet?.meta?.toString?.() || "", helmet?.link?.toString?.() || "", helmet?.style?.toString?.() || "", helmet?.script?.toString?.() || "", helmet?.noscript?.toString?.() || ""].filter(Boolean).join("\n");
}

function addImageDimensions(page) {
  return page.replace(/<img\b([^>]*?)>/gi, (match, attrs) => {
    if (/\bwidth\s*=|\bheight\s*=/i.test(attrs)) return match;
    const src = (attrs.match(/\bsrc=["']([^"']+)["']/i) || [])[1] || "";
    const className = (attrs.match(/\bclass=["']([^"']+)["']/i) || [])[1] || "";
    let dimensions = null;
    if (/blog-top-8|digital-marketing-packages|google-ads-vs-meta-ads|seo-real-estate|google-analytics-search-console|smart-objectives-competitive-benchmarking|first-year-startup-marketing-budget|google-ads-optimization-moves-experts|google-ads-optimization-workflow|business-not-showing-google-maps-ahmedabad|business-not-showing-google-maps-workflow|ai-content-google-rankings-chart|competitive-benchmarking-beginners-guide|competitive-benchmarking-framework|competitive-benchmarking-scorecard|google-ads-high-cpc-cover|google-ads-cpc-diagnosis/i.test(src)) {
      dimensions = /google-ads-optimization-workflow|business-not-showing-google-maps-workflow|google-ads-cpc-diagnosis/i.test(src) ? [1200, 675] : /ai-content-google-rankings-chart/i.test(src) ? [1600, 900] : [1200, 630];
    } else if (/hitesh-new-profile/i.test(src) && /rounded-full/i.test(className)) {
      dimensions = [96, 96];
    } else if (/hitesh-new-profile/i.test(src)) {
      dimensions = [450, 580];
    }
    if (!dimensions) return match;
    return `<img${attrs} width="${dimensions[0]}" height="${dimensions[1]}">`;
  });
}

function applySeoOverrides(page, route) {
  const override = seoOverrides[route];
  let output = addImageDimensions(page);
  const canonicalMatch = output.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["'][^>]*>/i);
  if (canonicalMatch && !/hreflang=["']x-default["']/i.test(output)) output = output.replace("</head>", `<link rel="alternate" hrefLang="x-default" href="${canonicalMatch[1]}">\n</head>`);
  if (!override) return output;
  output = output.replace(/<title\b[^>]*>[\s\S]*?<\/title>/i, `<title>${override.title}</title>`);
  output = output.replace(/<meta\s+name=["']description["'][^>]*>/i, `<meta name="description" content="${override.description}">`);
  output = output.replace(/<meta\s+property=["']og:title["'][^>]*>/i, `<meta property="og:title" content="${override.title}">`);
  output = output.replace(/<meta\s+property=["']og:description["'][^>]*>/i, `<meta property="og:description" content="${override.description}">`);
  output = output.replace(/<meta\s+name=["']twitter:title["'][^>]*>/i, `<meta name="twitter:title" content="${override.title}">`);
  output = output.replace(/<meta\s+name=["']twitter:description["'][^>]*>/i, `<meta name="twitter:description" content="${override.description}">`);
  if (override.h1) output = output.replace(/<h1\b([^>]*)>[\s\S]*?<\/h1>/i, `<h1$1>${override.h1}</h1>`);
  if (override.alt) output = output.replace(/<img\b([^>]*?)alt=["'][^"']*["']([^>]*)>/gi, `<img$1alt="${override.alt}"$2>`);
  return output;
}

template = cleanTemplate(template);

for (const route of routes) {
  const { html, helmet } = render(route);
  const head = helmetToHead(helmet);
  const page = applySeoOverrides(template.replace("<!--__PRERENDERED_ROOT__-->", `<div id="root">${html}</div>`).replace("</head>", `${head}\n</head>`), route);
  const outputDir = path.join(distDir, route.replace(/^\//, ""));
  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(path.join(outputDir, "index.html"), page, "utf8");
  if (route === "/blog/top-8-digital-marketing-agencies-in-ahmedabad") {
    await fs.writeFile(path.join(distDir, "top-8-digital-marketing-agencies-in-ahmedabad.html"), page, "utf8");
    await fs.writeFile(path.join(distDir, "agency-guide-ahmedabad.html"), page, "utf8");
  }
  console.log(`Prerendered ${route}`);
}

await fs.rm(serverDir, { recursive: true, force: true });
