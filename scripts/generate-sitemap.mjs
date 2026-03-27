/**
 * Build-time sitemap.xml generator.
 *
 * Reads route data from src/generated/build-metadata.json (produced by
 * generate-build-metadata.mjs) and writes sitemap.xml to dist/.
 *
 * Run after `vite build` + `prerender.mjs` via the build pipeline.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const SITE_URL = "https://opticalbench.net";
const META_PATH = join(import.meta.dirname, "..", "src", "generated", "build-metadata.json");
const DIST_DIR = join(import.meta.dirname, "..", "dist");

/** Assign sitemap priority based on route path prefix. */
function routePriority(route) {
  if (route === "/") return "1.0";
  if (route === "/lenses") return "0.9";
  if (route.startsWith("/lens/")) return "0.8";
  if (route === "/makers" || route === "/articles") return "0.7";
  if (route.startsWith("/makers/") || route.startsWith("/articles/")) return "0.6";
  return "0.5";
}

function generateSitemap() {
  if (!existsSync(DIST_DIR)) {
    console.error("dist/ directory not found. Run `vite build` first.");
    process.exit(1);
  }
  if (!existsSync(META_PATH)) {
    console.error("build-metadata.json not found. Run generate-build-metadata.mjs first.");
    process.exit(1);
  }

  const buildMeta = JSON.parse(readFileSync(META_PATH, "utf-8"));
  const routes = buildMeta.routes;
  const routeFreshness = buildMeta.routeFreshness || {};

  const urls = routes.map((route) => ({
    loc: `${SITE_URL}${route}`,
    lastmod: routeFreshness[route]?.lastModified || new Date().toISOString().split("T")[0],
    priority: routePriority(route),
  }));

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(
      ({ loc, lastmod, priority }) =>
        `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${priority}</priority>\n  </url>`,
    ),
    "</urlset>",
    "",
  ].join("\n");

  const outPath = join(DIST_DIR, "sitemap.xml");
  writeFileSync(outPath, xml, "utf-8");
  console.log(`Sitemap written to ${outPath} (${urls.length} URLs)`);
}

generateSitemap();
