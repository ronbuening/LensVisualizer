/**
 * Pre-build metadata generator.
 *
 * Produces src/generated/build-metadata.json with:
 *   - lensDates: mapping of lens catalog key → ISO date first committed
 *   - articles: array of article metadata extracted from markdown frontmatter + git dates
 *   - lensKeys: sorted array of all lens catalog keys
 *   - makerSlugs: sorted array of unique maker URL slugs
 *   - routes: flat array of all concrete URL paths to pre-render
 *
 * This is the single source of truth for route enumeration. Downstream scripts
 * (prerender, sitemap, seo-audit) read this JSON instead of scanning the
 * filesystem independently.
 *
 * Run before `vite build` so the generated file is available to the bundler.
 */

import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { buildRouteFreshness, combineFreshnessEntries, getGitFileFreshness } from "./build-metadata-lib.mjs";

const ROOT = join(import.meta.dirname, "..");
const README_FILE = join(ROOT, "README.md");
const LENS_DATA_DIR = join(ROOT, "src", "lens-data");
const CONTENT_DIR = join(ROOT, "src", "content");
const OUT_DIR = join(ROOT, "src", "generated");
const OUT_FILE = join(OUT_DIR, "build-metadata.json");
const MAKER_DETAILS_FILE = join(ROOT, "src", "utils", "makerDetails.ts");

/* ── Maker derivation ────────────────────────────────────────────────── */

/* Keep in sync with src/utils/lensMetadata.ts MAKER_PREFIXES */
const MAKER_PREFIXES = [
  { prefix: "CANON", slug: "canon" },
  { prefix: "CARL ZEISS", slug: "carl-zeiss" },
  { prefix: "FUJIFILM", slug: "fujifilm" },
  { prefix: "FUJINON", slug: "fujifilm" },
  { prefix: "LEICA", slug: "leica" },
  { prefix: "VOIGTLÄNDER", slug: "voigtlander" },
  { prefix: "NIKON", slug: "nikon" },
  { prefix: "RICOH", slug: "ricoh" },
  { prefix: "VIVITAR", slug: "vivitar" },
];

/** Derive a URL-safe maker slug from a lens display name. */
function deriveMakerSlug(name) {
  const upper = name.toUpperCase();
  for (const { prefix, slug } of MAKER_PREFIXES) {
    if (upper.startsWith(prefix)) return slug;
  }
  return name.split(/\s+/)[0].toLowerCase();
}

/* ── Helpers ──────────────────────────────────────────────────────────── */

/** Extract the `key` value from a lens data file using a regex. */
function extractLensKey(filePath) {
  const content = readFileSync(filePath, "utf-8");
  const match = content.match(/key:\s*"([^"]+)"/);
  return match ? match[1] : null;
}

/** Extract the `name` value from a lens data file using a regex. */
function extractLensName(filePath) {
  const content = readFileSync(filePath, "utf-8");
  const match = content.match(/name:\s*"([^"]+)"/);
  return match ? match[1] : null;
}

/** Extract the `maker` value from a lens data file using a regex. */
function extractLensMaker(filePath) {
  const content = readFileSync(filePath, "utf-8");
  const match = content.match(/maker:\s*"([^"]+)"/);
  return match ? match[1] : null;
}

/** Parse simple YAML frontmatter from a markdown file. */
function parseFrontmatter(filePath) {
  const content = readFileSync(filePath, "utf-8");
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;

  const meta = {};
  for (const line of match[1].split("\n")) {
    const m = line.match(/^(\w+):\s*(.+)$/);
    if (m) {
      let value = m[2].trim();
      // Strip surrounding quotes if present (e.g., "value" → value)
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      meta[m[1]] = value;
    }
  }
  return meta;
}

/* ── Lens data collection ─────────────────────────────────────────────── */

/**
 * Scan all lens data files and return freshness, keys, and names.
 * Single filesystem pass — avoids redundant reads by downstream scripts.
 */
function collectLensData(fallbackDate) {
  const dataFiles = readdirSync(LENS_DATA_DIR).filter((f) => f.endsWith(".data.ts"));
  const lenses = []; // { key, name, makerSlug, freshness }

  for (const file of dataFiles) {
    const filePath = join(LENS_DATA_DIR, file);
    const key = extractLensKey(filePath);
    if (!key) continue;
    const name = extractLensName(filePath);
    const maker = extractLensMaker(filePath);
    const stem = file.replace(".data.ts", "");
    const analysisPath = join(LENS_DATA_DIR, `${stem}.analysis.md`);
    const dataFreshness = getGitFileFreshness(filePath, { cwd: ROOT, fallbackDate });
    const analysisFreshness = existsSync(analysisPath)
      ? getGitFileFreshness(analysisPath, { cwd: ROOT, fallbackDate })
      : null;
    lenses.push({
      key,
      name,
      makerSlug: deriveMakerSlug(maker || name || key),
      freshness: combineFreshnessEntries([dataFreshness, analysisFreshness], fallbackDate),
    });
  }

  return lenses;
}

/* ── Route collection ────────────────────────────────────────────────── */

/** Build the flat array of all concrete routes to pre-render. */
function collectRoutes(lenses, articles, makerSlugs) {
  return [
    "/",
    "/lenses",
    "/makers",
    "/articles",
    "/updates",
    ...articles.map((a) => `/articles/${a.slug}`),
    ...lenses.map((l) => `/lens/${l.key}`),
    ...makerSlugs.map((s) => `/makers/${s}`),
  ];
}

/* ── Article metadata ─────────────────────────────────────────────────── */

function collectArticles(fallbackDate) {
  const mdFiles = readdirSync(CONTENT_DIR, { recursive: true })
    .filter((f) => typeof f === "string" && f.endsWith(".md"))
    .map((f) => f.replace(/\\/g, "/"));
  const articles = [];

  for (const file of mdFiles) {
    const filePath = join(CONTENT_DIR, file);
    const meta = parseFrontmatter(filePath);
    if (!meta || !meta.slug || !meta.title) continue;

    const freshness = getGitFileFreshness(filePath, { cwd: ROOT, fallbackDate });
    const seriesOrder = meta.seriesOrder !== undefined ? Number.parseInt(meta.seriesOrder, 10) : undefined;
    articles.push({
      slug: meta.slug,
      title: meta.title,
      summary: meta.summary || "",
      tag: meta.tag || undefined,
      series: meta.series || undefined,
      seriesOrder: Number.isFinite(seriesOrder) ? seriesOrder : undefined,
      toc: meta.toc === "true" || undefined,
      publishedOn: freshness.publishedOn,
      lastModified: freshness.lastModified,
      file,
    });
  }

  // Sort newest-first by date
  articles.sort((a, b) => b.publishedOn.localeCompare(a.publishedOn));
  return articles;
}

/* ── Main ─────────────────────────────────────────────────────────────── */

function main() {
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });
  const fallbackDate = new Date().toISOString().slice(0, 10);

  const lenses = collectLensData(fallbackDate);
  const articles = collectArticles(fallbackDate);

  const lensKeys = lenses.map((l) => l.key).sort();
  const makerSlugs = [...new Set(lenses.map((l) => l.makerSlug))].sort();
  const routes = collectRoutes(lenses, articles, makerSlugs);
  const makerDetailsFreshness = getGitFileFreshness(MAKER_DETAILS_FILE, { cwd: ROOT, fallbackDate });
  const routeFreshness = buildRouteFreshness({
    lenses,
    articles,
    makerSlugs,
    makerDetailsFreshness,
    fallbackDate,
  });
  const lensFreshness = Object.fromEntries(lenses.map((lens) => [lens.key, lens.freshness]));
  const metadata = { lensFreshness, articles, lensKeys, makerSlugs, routes, routeFreshness };
  writeFileSync(OUT_FILE, JSON.stringify(metadata, null, 2) + "\n", "utf-8");

  // Keep the README lens count in sync automatically
  const readme = readFileSync(README_FILE, "utf-8");
  const updatedReadme = readme.replace(
    /^(- )`\d+`( lens data files are currently included)/m,
    `$1\`${lensKeys.length}\`$2`,
  );
  if (updatedReadme !== readme) {
    writeFileSync(README_FILE, updatedReadme, "utf-8");
    console.log(`README.md lens count updated to ${lensKeys.length}.`);
  }

  console.log(
    `Build metadata written to ${OUT_FILE} (${lensKeys.length} lenses, ${articles.length} articles, ${makerSlugs.length} makers, ${routes.length} routes)`,
  );
}

main();
