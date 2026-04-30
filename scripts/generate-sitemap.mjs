import fs from "node:fs/promises";
import path from "node:path";

const cwd = process.cwd();
const distDir = path.join(cwd, "dist");
const siteUrl = (
  process.env.VITE_SITE_URL ?? "https://prash-u.github.io/persona-hub/"
).replace(/\/$/, "");
const basePath = (process.env.VITE_BASE_PATH ?? "/").replace(/\/$/, "");

const routes = ["/", "/photos", "/biotech", "/projects", "/cv", "/contact", "/offline"];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    const loc = `${siteUrl}${basePath}${route === "/" ? "/" : route}`;
    return `<url><loc>${loc}</loc></url>`;
  })
  .join("\n")}
</urlset>
`;

await fs.writeFile(path.join(distDir, "sitemap.xml"), xml, "utf8");
