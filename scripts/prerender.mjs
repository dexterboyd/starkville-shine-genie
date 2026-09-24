// Build-time pre-rendering: writes dist/<route>/index.html with full content + head tags, plus sitemap.xml.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const SITE_URL = "https://www.pressureproscleaningsolutions.com";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf-8");

if (!template.includes('<div id="root"></div>')) throw new Error('index.html is missing <div id="root"></div>');
if (!template.includes("</head>")) throw new Error("index.html is missing </head>");

const { render, prerenderRoutes } = await import(
  pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href
);

// Remove template tags that Helmet provides per page so nothing is duplicated.
const stripped = template
  .replace(/<title>[\s\S]*?<\/title>/, () => "")
  .replace(/<meta\s+(name|property)="(description|og:title|og:description|og:url|og:type|twitter:title|twitter:description|twitter:card|og:image|twitter:image)"[^>]*>\s*/g, () => "")
  .replace(/<link\s+rel="canonical"[^>]*>\s*/g, () => "");

function page(url, markAs) {
  const { html, head } = render(url);
  const attr = markAs ? ` data-prerendered="${markAs}"` : "";
  return {
    html,
    doc: stripped
      .replace("</head>", () => `${head}\n</head>`)
      .replace('<div id="root"></div>', () => `<div id="root"${attr}>${html}</div>`),
  };
}

for (const url of prerenderRoutes) {
  const { html, doc } = page(url, url);
  if (!/<h1[\s>]/.test(html)) throw new Error(`Route ${url} rendered without an <h1>`);
  const out = url === "/" ? path.join(dist, "index.html") : path.join(dist, url.slice(1), "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, doc);
  console.log("prerendered", url);
}

// 404 fallback: shows the Not Found page, then the app re-renders for the real URL.
fs.writeFileSync(path.join(dist, "404.html"), page("/__not-found__", null).doc);
console.log("prerendered 404.html");

// Sitemap from the same route list (trailing slash on every URL except the homepage).
const urls = prerenderRoutes
  .map((u) => `  <url><loc>${SITE_URL}${u === "/" ? "/" : `${u}/`}</loc></url>`)
  .join("\n");
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
console.log(`sitemap.xml written (${prerenderRoutes.length} URLs)`);

fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
