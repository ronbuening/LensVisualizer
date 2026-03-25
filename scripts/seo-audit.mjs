/**
 * SEO audit script — validates prerendered output.
 *
 * Checks:
 * - All lens pages have unique titles and descriptions
 * - All pages have canonical URLs
 * - Sitemap lists all expected URLs
 * - robots.txt is valid
 * - Prerendered HTML contains meaningful text
 * - No broken internal links
 *
 * Run after `npm run build` to verify SEO quality.
 */

import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const DIST_DIR = join(ROOT, "dist");
const LENS_DATA_DIR = join(ROOT, "src", "lens-data");

let errors = 0;
let warnings = 0;

function error(msg) {
  errors++;
  console.error(`  ERROR: ${msg}`);
}

function warn(msg) {
  warnings++;
  console.warn(`  WARN: ${msg}`);
}

function ok(msg) {
  console.log(`  OK: ${msg}`);
}

/** Extract all lens keys from data files. */
function getLensKeys() {
  const files = readdirSync(LENS_DATA_DIR).filter((f) => f.endsWith(".data.ts"));
  const keys = [];
  for (const file of files) {
    const content = readFileSync(join(LENS_DATA_DIR, file), "utf-8");
    const match = content.match(/key:\s*"([^"]+)"/);
    if (match) keys.push(match[1]);
  }
  return keys.sort();
}

function auditRobotsTxt() {
  console.log("\n[robots.txt]");
  const path = join(DIST_DIR, "robots.txt");
  if (!existsSync(path)) {
    error("robots.txt not found in dist/");
    return;
  }
  const content = readFileSync(path, "utf-8");
  if (!content.includes("Sitemap:")) {
    error("robots.txt missing Sitemap directive");
  } else {
    ok("robots.txt exists with Sitemap directive");
  }
}

function auditSitemap(lensKeys) {
  console.log("\n[sitemap.xml]");
  const path = join(DIST_DIR, "sitemap.xml");
  if (!existsSync(path)) {
    error("sitemap.xml not found in dist/");
    return;
  }
  const content = readFileSync(path, "utf-8");

  if (!content.includes('<?xml version="1.0"')) {
    error("sitemap.xml is not valid XML");
  }

  for (const key of lensKeys) {
    const url = `https://opticalbench.net/lens/${key}`;
    if (!content.includes(url)) {
      error(`sitemap.xml missing lens URL: ${url}`);
    }
  }

  if (content.includes("opticalbench.net/lenses")) {
    ok(`sitemap.xml contains all ${lensKeys.length} lens URLs + index pages`);
  } else {
    error("sitemap.xml missing /lenses index URL");
  }
}

function auditPrerenderedPages(lensKeys) {
  console.log("\n[Prerendered pages]");
  const titles = new Set();
  const descriptions = new Set();

  for (const key of lensKeys) {
    const pagePath = join(DIST_DIR, "lens", key, "index.html");
    if (!existsSync(pagePath)) {
      error(`Missing prerendered page: /lens/${key}`);
      continue;
    }

    const html = readFileSync(pagePath, "utf-8");

    /* Check title */
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/);
    if (!titleMatch) {
      error(`/lens/${key}: No <title> tag`);
    } else {
      const title = titleMatch[1];
      if (titles.has(title)) {
        error(`/lens/${key}: Duplicate title "${title}"`);
      }
      titles.add(title);
    }

    /* Check meta description */
    const descMatch = html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/);
    if (!descMatch) {
      error(`/lens/${key}: No meta description`);
    } else {
      const desc = descMatch[1];
      if (descriptions.has(desc)) {
        warn(`/lens/${key}: Duplicate description`);
      }
      descriptions.add(desc);
    }

    /* Check canonical */
    if (!html.includes(`rel="canonical"`)) {
      error(`/lens/${key}: No canonical URL`);
    }

    /* Check H1 */
    if (!html.includes("<h1")) {
      error(`/lens/${key}: No <h1> tag`);
    }

    /* Check meaningful content (at least 500 chars in root div) */
    const rootMatch = html.match(/<div id="root">([\s\S]*?)<\/div>\s*<\/body>/);
    if (rootMatch && rootMatch[1].length < 500) {
      warn(`/lens/${key}: Thin content (${rootMatch[1].length} chars in root)`);
    }

    /* Check JSON-LD */
    if (!html.includes("application/ld+json")) {
      warn(`/lens/${key}: No JSON-LD structured data`);
    }
  }

  ok(`Checked ${lensKeys.length} lens pages: ${titles.size} unique titles, ${descriptions.size} unique descriptions`);
}

function auditInternalLinks(lensKeys) {
  console.log("\n[Internal links]");
  const lensesPage = join(DIST_DIR, "lenses", "index.html");
  if (!existsSync(lensesPage)) {
    error("Missing /lenses/index.html");
    return;
  }

  const html = readFileSync(lensesPage, "utf-8");
  let foundLinks = 0;
  for (const key of lensKeys) {
    if (html.includes(`href="/lens/${key}"`)) {
      foundLinks++;
    } else {
      error(`/lenses page missing link to /lens/${key}`);
    }
  }
  ok(`/lenses page has ${foundLinks}/${lensKeys.length} lens links as <a href>`);
}

function audit404() {
  console.log("\n[404.html]");
  const path = join(DIST_DIR, "404.html");
  if (!existsSync(path)) {
    error("404.html not found in dist/");
  } else {
    ok("404.html exists (GitHub Pages SPA fallback)");
  }
}

/* Run audit */
console.log("SEO Audit — OpticalBench.net");
console.log("============================");

if (!existsSync(DIST_DIR)) {
  console.error("dist/ not found. Run `npm run build` first.");
  process.exit(1);
}

const lensKeys = getLensKeys();
console.log(`Found ${lensKeys.length} lens data files.`);

auditRobotsTxt();
auditSitemap(lensKeys);
auditPrerenderedPages(lensKeys);
auditInternalLinks(lensKeys);
audit404();

console.log("\n============================");
console.log(`Result: ${errors} errors, ${warnings} warnings`);
if (errors > 0) {
  process.exit(1);
}
