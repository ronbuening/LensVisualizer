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
import { basename, join } from "node:path";
import { ARTICLE_FEED_PATH, CHANGELOG_FEED_PATH, LENS_FEED_PATH } from "../src/utils/content/feedMetadata.ts";
import { buildChangelogFeedItems } from "./generate-rss-feeds.mjs";
import { SITE_URL, canonicalPagePath, canonicalPageUrl } from "./site-url.mjs";
import { htmlHasNoindexDirective } from "./sitemap-lib.mjs";

const ROOT = join(import.meta.dirname, "..");
const DIST_DIR = join(ROOT, "dist");
const META_PATH = join(ROOT, "src", "generated", "build-metadata.json");
const FEED_LIMIT = 50;
const FEEDS = [
  { name: "lens", path: LENS_FEED_PATH },
  { name: "article", path: ARTICLE_FEED_PATH },
  { name: "changelog", path: CHANGELOG_FEED_PATH },
].map(({ name, path }) => ({
  name,
  file: basename(path),
  url: `${SITE_URL}${path}`,
}));

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
  if (content.includes(`${SITE_URL}/feeds/`)) {
    error("sitemap.xml should not include RSS feed URLs");
  }

  const indexableRoutes = [];
  const noindexRoutes = [];
  for (const route of routes) {
    const html = readFileSync(routeToFile(route), "utf-8");
    (htmlHasNoindexDirective(html) ? noindexRoutes : indexableRoutes).push(route);
  }

  /* Verify every indexable route, and no noindex route, appears in the sitemap. */
  let missing = 0;
  for (const route of indexableRoutes) {
    const url = canonicalPageUrl(route);
    if (!content.includes(url)) {
      error(`sitemap.xml missing URL: ${url}`);
      missing++;
    }
  }
  if (missing === 0) {
    ok(`sitemap.xml contains all ${indexableRoutes.length} indexable URLs`);
  }

  let includedNoindex = 0;
  for (const route of noindexRoutes) {
    const url = canonicalPageUrl(route);
    if (content.includes(url)) {
      error(`sitemap.xml includes noindex URL: ${url}`);
      includedNoindex++;
    }
  }
  if (includedNoindex === 0) {
    ok(`sitemap.xml excludes all ${noindexRoutes.length} noindex URLs`);
  }

  const routeFreshness = buildMeta.routeFreshness || {};
  const sitemapBlocks = [...content.matchAll(/<url>\s*<loc>(.*?)<\/loc>\s*<lastmod>(.*?)<\/lastmod>[\s\S]*?<\/url>/g)];
  const lastmodByLoc = Object.fromEntries(sitemapBlocks.map(([, loc, lastmod]) => [loc, lastmod]));
  for (const [, loc] of sitemapBlocks) {
    if (loc.includes("?")) {
      error(`sitemap.xml URL should not include query params: ${loc}`);
    }
  }
  let lastmodMismatches = 0;

  if (sitemapBlocks.length !== indexableRoutes.length) {
    error(`sitemap.xml contains ${sitemapBlocks.length} URLs; expected ${indexableRoutes.length}`);
  }

  for (const route of indexableRoutes) {
    const loc = canonicalPageUrl(route);
    const expectedLastmod = routeFreshness[route]?.lastModified;
    if (!expectedLastmod) {
      error(`routeFreshness missing lastModified for ${route}`);
      lastmodMismatches++;
      continue;
    }
    if (lastmodByLoc[loc] !== expectedLastmod) {
      error(
        `sitemap.xml lastmod mismatch for ${route}: expected ${expectedLastmod}, found ${lastmodByLoc[loc] || "missing"}`,
      );
      lastmodMismatches++;
    }
  }

  if (lastmodMismatches === 0) {
    ok("sitemap.xml lastmod values match build metadata");
  }
}

function compareStrings(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

function expectedFeedUrls(buildMeta, feedName) {
  if (feedName === "changelog") {
    return buildChangelogFeedItems(undefined, FEED_LIMIT).map((entry) => entry.url);
  }

  const entries =
    feedName === "lens"
      ? Object.entries(buildMeta.lensFreshness).map(([key, freshness]) => ({
          url: canonicalPageUrl(`/lens/${key}`),
          publishedOn: freshness.publishedOn,
          publishedAt: freshness.publishedAt,
          publicationOrder: freshness.publicationOrder,
        }))
      : buildMeta.articles.map((article) => ({
          url: canonicalPageUrl(`/articles/${article.slug}`),
          publishedOn: article.publishedOn,
          publishedAt: article.publishedAt,
          publicationOrder: article.publicationOrder,
        }));

  return entries
    .sort(
      (a, b) =>
        (a.publicationOrder ?? Number.MAX_SAFE_INTEGER) - (b.publicationOrder ?? Number.MAX_SAFE_INTEGER) ||
        compareStrings(b.publishedAt ?? b.publishedOn, a.publishedAt ?? a.publishedOn) ||
        compareStrings(a.url, b.url),
    )
    .slice(0, FEED_LIMIT)
    .map((entry) => entry.url);
}

function auditRssFeeds(buildMeta) {
  console.log("\n[RSS feeds]");

  for (const feed of FEEDS) {
    const path = join(DIST_DIR, "feeds", feed.file);
    if (!existsSync(path)) {
      error(`${feed.file} not found in dist/feeds/`);
      continue;
    }

    const xml = readFileSync(path, "utf-8");
    if (!xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>')) {
      error(`${feed.file} is missing its XML declaration`);
    }
    if (!xml.includes('<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">')) {
      error(`${feed.file} is missing its RSS 2.0 root or Atom namespace`);
    }
    if (!xml.includes(`<atom:link href="${feed.url}" rel="self" type="application/rss+xml"/>`)) {
      error(`${feed.file} is missing its canonical Atom self-link`);
    }

    const itemBlocks = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((match) => match[1]);
    const itemUrls = itemBlocks.map((block) => block.match(/<link>(.*?)<\/link>/)?.[1] ?? "");
    const guidUrls = itemBlocks.map((block) => block.match(/<guid isPermaLink="true">(.*?)<\/guid>/)?.[1] ?? "");
    const expectedUrls = expectedFeedUrls(buildMeta, feed.name);

    if (JSON.stringify(itemUrls) !== JSON.stringify(expectedUrls)) {
      error(`${feed.file} items do not match the expected newest ${expectedUrls.length} canonical URLs`);
    }
    if (JSON.stringify(guidUrls) !== JSON.stringify(itemUrls)) {
      error(`${feed.file} GUIDs must match their canonical item links`);
    }
    if (new Set(itemUrls).size !== itemUrls.length) {
      error(`${feed.file} contains duplicate item links`);
    }
    if (itemBlocks.some((block) => !/<pubDate>[^<]+<\/pubDate>/.test(block))) {
      error(`${feed.file} contains an item without a publication date`);
    }

    ok(`${feed.file} contains ${itemUrls.length} unique, correctly ordered items`);
  }
}

function auditFeedDiscovery() {
  console.log("\n[RSS discovery]");
  const homepagePath = join(DIST_DIR, "index.html");
  if (!existsSync(homepagePath)) {
    error("Homepage missing; cannot audit RSS discovery");
    return;
  }

  const html = readFileSync(homepagePath, "utf-8");
  for (const feed of FEEDS) {
    const escapedUrl = feed.url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const discoveryPattern = new RegExp(
      `<link[^>]*rel="alternate"[^>]*type="application/rss\\+xml"[^>]*href="${escapedUrl}"[^>]*>`,
    );
    if (!discoveryPattern.test(html)) {
      error(`Homepage is missing autodiscovery for ${feed.url}`);
    }
  }
  ok(`Homepage advertises all ${FEEDS.length} RSS feeds`);
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
    const expectedCanonical = canonicalPageUrl(route);
    if (!html.includes('rel="canonical"')) {
      error(`${route}: No canonical URL`);
    } else {
      const canonicalMatch = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/);
      if (canonicalMatch?.[1] !== expectedCanonical) {
        error(`${route}: Canonical URL should be ${expectedCanonical}, found ${canonicalMatch?.[1] || "missing"}`);
      }
    }

    const ogUrlMatch = html.match(/<meta[^>]*property="og:url"[^>]*content="([^"]+)"/);
    if (ogUrlMatch?.[1] !== expectedCanonical) {
      error(`${route}: og:url should be ${expectedCanonical}, found ${ogUrlMatch?.[1] || "missing"}`);
    }

    for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
      let schema;
      try {
        schema = JSON.parse(match[1]);
      } catch {
        error(`${route}: JSON-LD is not valid JSON`);
        continue;
      }
      const pending = [schema];
      while (pending.length > 0) {
        const value = pending.pop();
        if (typeof value === "string" && value.startsWith(`${SITE_URL}/`)) {
          const path = value.slice(SITE_URL.length);
          if (canonicalPagePath(path) !== path) {
            error(`${route}: JSON-LD contains a redirecting same-site URL: ${value}`);
          }
        } else if (Array.isArray(value)) {
          pending.push(...value);
        } else if (value && typeof value === "object") {
          pending.push(...Object.values(value));
        }
      }
    }

    const socialImageMatch = html.match(/<meta[^>]*property="og:image"[^>]*content="([^"]+)"/);
    if (!socialImageMatch) {
      error(`${route}: No og:image URL`);
    } else if (socialImageMatch[1].endsWith(".svg")) {
      error(`${route}: og:image should use a raster format, found ${socialImageMatch[1]}`);
    }

    if (!html.match(/<meta[^>]*property="og:image:type"[^>]*content="image\/png"/)) {
      error(`${route}: Missing og:image:type image/png`);
    }

    checked++;
  }

  ok(`Checked ${checked}/${routes.length} pages for metadata and deployment-canonical URLs`);
}

function auditCanonicalInternalLinks(routes) {
  console.log("\n[Deployment-canonical internal links]");
  let checked = 0;

  for (const route of routes) {
    const pagePath = routeToFile(route);
    if (!existsSync(pagePath)) continue;
    const html = readFileSync(pagePath, "utf-8");

    for (const match of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
      const href = match[1];
      if (!href.startsWith("/") || href.startsWith("//")) continue;
      checked++;

      if (canonicalPagePath(href) !== href) {
        error(`${route}: Internal link would redirect on Cloudflare Pages: ${href}`);
      }

      const url = new URL(href, SITE_URL);
      if (url.searchParams.has("from") || url.searchParams.has("returnTo")) {
        error(`${route}: Internal link exposes navigation-only query state: ${href}`);
      }
      if (url.pathname === "/relationships/" && url.searchParams.has("focus")) {
        error(`${route}: Relationship focus should use a fragment, not a query param: ${href}`);
      }
    }
  }

  ok(`Checked ${checked} same-site link occurrences for direct 200 URL forms`);
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

function auditInternalLinks(lensKeys, articleSlugs, makerSlugs, mountIds = [], formatIds = [], authors = []) {
  console.log("\n[Internal links]");

  /* /lenses → all lens pages */
  const lensesPage = join(DIST_DIR, "lenses", "index.html");
  if (!existsSync(lensesPage)) {
    error("Missing /lenses/index.html");
  } else {
    const html = readFileSync(lensesPage, "utf-8");
    let foundLinks = 0;
    for (const key of lensKeys) {
      if (html.includes(`href="/lens/${key}/"`)) {
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
      if (html.includes(`href="/articles/${slug}/"`)) {
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
      if (html.includes(`href="/makers/${slug}/"`)) {
        foundLinks++;
      } else {
        error(`/makers page missing link to /makers/${slug}`);
      }
    }
    ok(`/makers page has ${foundLinks}/${makerSlugs.length} maker links`);
  }

  /* /mounts → all mount pages */
  const mountsPage = join(DIST_DIR, "mounts", "index.html");
  if (!existsSync(mountsPage)) {
    error("Missing /mounts/index.html");
  } else {
    const html = readFileSync(mountsPage, "utf-8");
    let foundLinks = 0;
    for (const id of mountIds) {
      if (html.includes(`href="/mounts/${id}/"`)) {
        foundLinks++;
      } else {
        error(`/mounts page missing link to /mounts/${id}`);
      }
    }
    ok(`/mounts page has ${foundLinks}/${mountIds.length} mount links`);
  }

  /* /formats → all format pages */
  const formatsPage = join(DIST_DIR, "formats", "index.html");
  if (!existsSync(formatsPage)) {
    error("Missing /formats/index.html");
  } else {
    const html = readFileSync(formatsPage, "utf-8");
    let foundLinks = 0;
    for (const id of formatIds) {
      if (html.includes(`href="/formats/${id}/"`)) {
        foundLinks++;
      } else {
        error(`/formats page missing link to /formats/${id}`);
      }
    }
    ok(`/formats page has ${foundLinks}/${formatIds.length} format links`);
  }

  /* /authors → all author pages */
  const authorsPage = join(DIST_DIR, "authors", "index.html");
  if (!existsSync(authorsPage)) {
    error("Missing /authors/index.html");
  } else {
    const html = readFileSync(authorsPage, "utf-8");
    let foundLinks = 0;
    for (const author of authors) {
      if (html.includes(`href="/authors/${author.slug}/"`)) {
        foundLinks++;
      } else {
        error(`/authors page missing link to /authors/${author.slug}`);
      }
    }
    ok(`/authors page has ${foundLinks}/${authors.length} author links`);
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

console.log("SEO Audit — SurfaceAndStop.com");
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
const { routes, lensKeys, makerSlugs, mountIds = [], formatIds = [], authors = [] } = buildMeta;
const articleSlugs = buildMeta.articles.map((a) => a.slug);

console.log(
  `Found ${lensKeys.length} lenses, ${articleSlugs.length} articles, ${makerSlugs.length} makers, ${authors.length} authors, ${mountIds.length} mounts, ${formatIds.length} formats (${routes.length} routes).`,
);

auditRobotsTxt();
auditSitemap(routes);
auditRssFeeds(buildMeta);
auditFeedDiscovery();
auditAllPrerenderedPages(routes);
auditCanonicalInternalLinks(routes);
auditLensPages(lensKeys);
auditInternalLinks(lensKeys, articleSlugs, makerSlugs, mountIds, formatIds, authors);
audit404();

console.log("\n============================");
console.log(`Result: ${errors} errors, ${warnings} warnings`);
if (errors > 0) {
  process.exit(1);
}
