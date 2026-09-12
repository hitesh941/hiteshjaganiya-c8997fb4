import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const serverEntry = path.join(root, "dist-server", "prerender-entry.js");

const routes = [
  "/",
  "/blog",
  "/blog/top-8-digital-marketing-agencies-in-ahmedabad",
  "/blog/digital-marketing-packages-in-ahmedabad",
  "/blog/google-ads-vs-meta-ads-ahmedabad",
  "/blog/seo-for-real-estate-businesses-in-ahmedabad",
  "/blog/how-to-read-google-analytics-search-console-without-an-agency",
  "/blog/smart-objectives-competitive-benchmarking",
];

const template = await readFile(path.join(distDir, "index.html"), "utf8");
const { renderRoute } = await import(pathToFileURL(serverEntry).href);

for (const route of routes) {
  const { html, head } = renderRoute(route);
  let document = template;

  // Keep the global Person / Organization / WebSite graph from index.html,
  // but replace the generic title/description with the route-specific Helmet output.
  document = document.replace(/\s*<title>[\s\S]*?<\/title>/i, "");
  document = document.replace(/\s*<meta\s+name=["']description["'][^>]*>/i, "");
  document = document.replace("</head>", `${head}\n  </head>`);
  document = document.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  const relative = route === "/" ? "index.html" : path.join(route.slice(1), "index.html");
  const output = path.join(distDir, relative);
  await mkdir(path.dirname(output), { recursive: true });
  await writeFile(output, document, "utf8");
  console.log(`Prerendered ${route} -> ${relative}`);
}
