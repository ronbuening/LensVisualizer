/**
 * SEO audit script — validates prerendered output.
 *
 * Reads route data from src/generated/build-metadata.json and validates:
 * - All prerendered pages have titles, descriptions, canonical URLs
 * - Lens pages have JSON-LD, H1 tags, and meaningful content
 * - Sitemap lists all expected URLs
 * - robots.txt is valid
 * - Index pages link to all child pages
 * - 404.html exists
 *
 * Run after `npm run build` to verify SEO quality.
 */

import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const DIST_DIR = join(ROOT, "dist");
const META_PATH = join(ROOT, "src", "generated", "build-metadata.json");

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

/** Resolve a route path to the expected file in dist/. */
function routeToFile(route) {
  return route === "/" ? join(DIST_DIR, "index.html") : join(DIST_DIR, route.slice(1), "index.html");
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

function auditSitemap(routes) {
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

  /* Verify every route appears in the sitemap */
  let missing = 0;
  for (const route of routes) {
    const url = `https://opticalbench.net${route}`;
    if (!content.includes(url)) {
      error(`sitemap.xml missing URL: ${url}`);
      missing++;
    }
  }
  if (missing === 0) {
    ok(`sitemap.xml contains all ${routes.length} URLs`);
  }
}

function auditAllPrerenderedPages(routes) {
  console.log("\n[Prerendered pages — all routes]");
  let checked = 0;

  for (const route of routes) {
    const pagePath = routeToFile(route);
    if (!existsSync(pagePath)) {
      error(`Missing prerendered page: ${route}`);
      continue;
    }

    const html = readFileSync(pagePath, "utf-8");

    /* Title */
    if (!html.match(/<title[^>]*>[^<]+<\/title>/)) {
      error(`${route}: No <title> tag`);
    }

    /* Meta description */
    if (!html.match(/<meta[^>]*name="description"[^>]*content="[^"]+"/)) {
      error(`${route}: No meta description`);
    }

    /* Canonical URL */
    if (!html.includes('rel="canonical"')) {
      error(`${route}: No canonical URL`);
    }

    checked++;
  }

  ok(`Checked ${checked}/${routes.length} pages for title, description, canonical`);
}

function auditLensPages(lensKeys) {
  console.log("\n[Lens pages — deep checks]");
  const titles = new Set();
  const descriptions = new Set();

  for (const key of lensKeys) {
    const pagePath = join(DIST_DIR, "lens", key, "index.html");
    if (!existsSync(pagePath)) continue; // already reported by auditAllPrerenderedPages

    const html = readFileSync(pagePath, "utf-8");

    /* Unique title */
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/);
    if (titleMatch) {
      const title = titleMatch[1];
      if (titles.has(title)) {
        error(`/lens/${key}: Duplicate title "${title}"`);
      }
      titles.add(title);
    }

    /* Unique description */
    const descMatch = html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/);
    if (descMatch) {
      const desc = descMatch[1];
      if (descriptions.has(desc)) {
        warn(`/lens/${key}: Duplicate description`);
      }
      descriptions.add(desc);
    }

    /* H1 */
    if (!html.includes("<h1")) {
      error(`/lens/${key}: No <h1> tag`);
    }

    /* Meaningful content (at least 500 chars in root div) */
    const rootMatch = html.match(/<div id="root">([\s\S]*?)<\/div>\s*<\/body>/);
    if (rootMatch && rootMatch[1].length < 500) {
      warn(`/lens/${key}: Thin content (${rootMatch[1].length} chars in root)`);
    }

    /* JSON-LD */
    if (!html.includes("application/ld+json")) {
      warn(`/lens/${key}: No JSON-LD structured data`);
    }
  }

  ok(
    `Deep-checked ${lensKeys.length} lens pages: ${titles.size} unique titles, ${descriptions.size} unique descriptions`,
  );
}

function auditInternalLinks(lensKeys, articleSlugs, makerSlugs) {
  console.log("\n[Internal links]");

  /* /lenses → all lens pages */
  const lensesPage = join(DIST_DIR, "lenses", "index.html");
  if (!existsSync(lensesPage)) {
    error("Missing /lenses/index.html");
  } else {
    const html = readFileSync(lensesPage, "utf-8");
    let foundLinks = 0;
    for (const key of lensKeys) {
      if (html.includes(`href="/lens/${key}"`)) {
        foundLinks++;
      } else {
        error(`/lenses page missing link to /lens/${key}`);
      }
    }
    ok(`/lenses page has ${foundLinks}/${lensKeys.length} lens links`);
  }

  /* /articles → all article pages */
  const articlesPage = join(DIST_DIR, "articles", "index.html");
  if (!existsSync(articlesPage)) {
    error("Missing /articles/index.html");
  } else {
    const html = readFileSync(articlesPage, "utf-8");
    let foundLinks = 0;
    for (const slug of articleSlugs) {
      if (html.includes(`href="/articles/${slug}"`)) {
        foundLinks++;
      } else {
        error(`/articles page missing link to /articles/${slug}`);
      }
    }
    ok(`/articles page has ${foundLinks}/${articleSlugs.length} article links`);
  }

  /* /makers → all maker pages */
  const makersPage = join(DIST_DIR, "makers", "index.html");
  if (!existsSync(makersPage)) {
    error("Missing /makers/index.html");
  } else {
    const html = readFileSync(makersPage, "utf-8");
    let foundLinks = 0;
    for (const slug of makerSlugs) {
      if (html.includes(`href="/makers/${slug}"`)) {
        foundLinks++;
      } else {
        error(`/makers page missing link to /makers/${slug}`);
      }
    }
    ok(`/makers page has ${foundLinks}/${makerSlugs.length} maker links`);
  }
}

function audit404() {
  console.log("\n[404.html]");
  const path = join(DIST_DIR, "404.html");
  if (!existsSync(path)) {
    error("404.html not found in dist/");
  } else {
    const html = readFileSync(path, "utf-8");
    if (!html.includes("Page Not Found")) {
      error("404.html does not contain 404 metadata/content");
    }
    if (html.includes('rel="canonical"')) {
      error("404.html should not emit a canonical URL");
    }
    if (!html.includes('name="robots" content="noindex,follow"')) {
      error("404.html missing noindex robots directive");
    }
    if (html.includes("Interactive Lens Cross-Section Visualizer")) {
      warn("404.html still contains home page branding copy; verify fallback metadata");
    }
    ok("404.html exists with real 404 metadata and noindex policy");
  }
}

/* ── Run audit ───────────────────────────────────────────────────────── */

console.log("SEO Audit — OpticalBench.net");
console.log("============================");

if (!existsSync(DIST_DIR)) {
  console.error("dist/ not found. Run `npm run build` first.");
  process.exit(1);
}
if (!existsSync(META_PATH)) {
  console.error("build-metadata.json not found. Run generate-build-metadata.mjs first.");
  process.exit(1);
}

const buildMeta = JSON.parse(readFileSync(META_PATH, "utf-8"));
const { routes, lensKeys, makerSlugs } = buildMeta;
const articleSlugs = buildMeta.articles.map((a) => a.slug);

console.log(
  `Found ${lensKeys.length} lenses, ${articleSlugs.length} articles, ${makerSlugs.length} makers (${routes.length} routes).`,
);

auditRobotsTxt();
auditSitemap(routes);
auditAllPrerenderedPages(routes);
auditLensPages(lensKeys);
auditInternalLinks(lensKeys, articleSlugs, makerSlugs);
audit404();

console.log("\n============================");
console.log(`Result: ${errors} errors, ${warnings} warnings`);
if (errors > 0) {
  process.exit(1);
}
