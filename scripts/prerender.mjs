import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "vite";

const root = process.cwd();
const distDir = path.join(root, "dist");
const serverDir = path.join(root, "dist-server");

const routes = [
  "/blog",
  "/blog/top-8-digital-marketing-agencies-in-ahmedabad",
  "/blog/digital-marketing-packages-in-ahmedabad",
  "/blog/google-ads-vs-meta-ads-ahmedabad",
  "/blog/seo-for-real-estate-businesses-in-ahmedabad",
  "/blog/how-to-read-google-analytics-search-console-without-an-agency",
  "/blog/smart-objectives-competitive-benchmarking",
  "/blog/first-year-startup-marketing-budget",
];

await build({
  build: {
    ssr: "src/entry-server.tsx",
    outDir: serverDir,
    emptyOutDir: true,
  },
});

const serverEntry = path.join(serverDir, "entry-server.js");
const { render } = await import(pathToFileURL(serverEntry).href);
const templatePath = path.join(distDir, "index.html");
let template = await fs.readFile(templatePath, "utf8");

function cleanTemplate(source) {
  return source
    .replace(/\s*<title>[\s\S]*?<\/title>/i, "")
    .replace(/\s*<meta\s+name=["']description["'][^>]*>/i, "")
    .replace(/\s*<meta\s+name=["']author["'][^>]*>/i, "")
    .replace(/\s*<meta\s+name=["']robots["'][^>]*>/i, "")
    .replace(/\s*<script\s+type=["']application\/ld\+json["']>[\s\S]*?<\/script>/i, "")
    .replace(/<div id=["']root["']><\/div>/i, "<!--__PRERENDERED_ROOT__-->");
}

function helmetToHead(helmet) {
  return [
    helmet?.base?.toString?.() || "",
    helmet?.title?.toString?.() || "",
    helmet?.meta?.toString?.() || "",
    helmet?.link?.toString?.() || "",
    helmet?.style?.toString?.() || "",
    helmet?.script?.toString?.() || "",
    helmet?.noscript?.toString?.() || "",
  ].filter(Boolean).join("\n");
}

template = cleanTemplate(template);

for (const route of routes) {
  const { html, helmet } = render(route);
  const head = helmetToHead(helmet);
  const page = template
    .replace("<!--__PRERENDERED_ROOT__-->", `<div id="root">${html}</div>`)
    .replace("</head>", `${head}\n</head>`);

  const outputDir = path.join(distDir, route.replace(/^\//, ""));
  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(path.join(outputDir, "index.html"), page, "utf8");
  console.log(`Prerendered ${route}`);
}

await fs.rm(serverDir, { recursive: true, force: true });
