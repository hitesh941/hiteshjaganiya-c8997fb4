import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const serverEntry = path.join(root, "dist-server", "prerender-entry.js");
const route = "/blog/smart-objectives-competitive-benchmarking";

const template = await readFile(path.join(distDir, "index.html"), "utf8");
const { renderRoute } = await import(pathToFileURL(serverEntry).href);
const { html, head } = renderRoute(route);

let document = template;

document = document.replace(/\s*<title>[\s\S]*?<\/title>/i, "");
document = document.replace(/\s*<meta\s+name=["']description["'][^>]*>/i, "");
document = document.replace("</head>", `${head}\n  </head>`);
document = document.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

const output = path.join(distDir, route.slice(1), "index.html");
await mkdir(path.dirname(output), { recursive: true });
await writeFile(output, document, "utf8");
console.log(`Prerendered ${route} -> ${output}`);
