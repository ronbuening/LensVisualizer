/**
 * Build-time sitemap.xml generator.
 *
 * Reads all lens data files, extracts keys, and writes sitemap.xml to dist/.
 * Run after `vite build` via the `build:sitemap` npm script.
 */

import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const SITE_URL = "https://opticalbench.net";
const LENS_DATA_DIR = join(import.meta.dirname, "..", "src", "lens-data");
const DIST_DIR = join(import.meta.dirname, "..", "dist");

/** Extract the `key` value from a lens data file using a regex. */
function extractKey(filePath) {
  const content = readFileSync(filePath, "utf-8");
  const match = content.match(/key:\s*"([^"]+)"/);
  return match ? match[1] : null;
}

/** Extract the `name` value from a lens data file using a regex. */
function extractName(filePath) {
  const content = readFileSync(filePath, "utf-8");
  const match = content.match(/name:\s*"([^"]+)"/);
  return match ? match[1] : null;
}

/** Known maker prefixes in lens names, mapped to URL-safe slugs. */
const MAKER_PREFIXES = [
  { prefix: "CARL ZEISS", slug: "carl-zeiss" },
  { prefix: "VOIGTLÄNDER", slug: "voigtlander" },
  { prefix: "NIKON", slug: "nikon" },
  { prefix: "RICOH", slug: "ricoh" },
];

/** Derive maker slug from lens name using known prefixes. */
function deriveMaker(name) {
  if (!name) return null;
  const upper = name.toUpperCase();
  for (const { prefix, slug } of MAKER_PREFIXES) {
    if (upper.startsWith(prefix)) return slug;
  }
  return name.split(/\s+/)[0].toLowerCase();
}

function generateSitemap() {
  if (!existsSync(DIST_DIR)) {
    console.error("dist/ directory not found. Run `vite build` first.");
    process.exit(1);
  }

  const dataFiles = readdirSync(LENS_DATA_DIR).filter((f) => f.endsWith(".data.js"));
  const lensKeys = [];
  const makers = new Set();

  for (const file of dataFiles) {
    const filePath = join(LENS_DATA_DIR, file);
    const key = extractKey(filePath);
    const name = extractName(filePath);
    if (key) {
      lensKeys.push(key);
      const maker = deriveMaker(name);
      if (maker) makers.add(maker);
    }
  }

  lensKeys.sort();
  const today = new Date().toISOString().split("T")[0];

  const urls = [
    { loc: `${SITE_URL}/`, priority: "1.0" },
    { loc: `${SITE_URL}/lenses`, priority: "0.9" },
    { loc: `${SITE_URL}/makers`, priority: "0.7" },
    ...Array.from(makers)
      .sort()
      .map((maker) => ({ loc: `${SITE_URL}/makers/${maker}`, priority: "0.6" })),
    ...lensKeys.map((key) => ({ loc: `${SITE_URL}/lens/${key}`, priority: "0.8" })),
  ];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(
      ({ loc, priority }) =>
        `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`,
    ),
    "</urlset>",
    "",
  ].join("\n");

  const outPath = join(DIST_DIR, "sitemap.xml");
  writeFileSync(outPath, xml, "utf-8");
  console.log(`Sitemap written to ${outPath} (${urls.length} URLs)`);
}

generateSitemap();
