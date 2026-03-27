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
import { execSync } from "node:child_process";

const ROOT = join(import.meta.dirname, "..");
const LENS_DATA_DIR = join(ROOT, "src", "lens-data");
const CONTENT_DIR = join(ROOT, "src", "content");
const OUT_DIR = join(ROOT, "src", "generated");
const OUT_FILE = join(OUT_DIR, "build-metadata.json");

/* ── Maker derivation ────────────────────────────────────────────────── */

/* Keep in sync with src/utils/lensMetadata.ts MAKER_PREFIXES */
const MAKER_PREFIXES = [
  { prefix: "CANON", slug: "canon" },
  { prefix: "CARL ZEISS", slug: "carl-zeiss" },
  { prefix: "FUJIFILM", slug: "fujifilm" },
  { prefix: "FUJINON", slug: "fujifilm" },
  { prefix: "VOIGTLÄNDER", slug: "voigtlander" },
  { prefix: "NIKON", slug: "nikon" },
  { prefix: "RICOH", slug: "ricoh" },
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

/** Get the ISO date a file was first committed (--diff-filter=A). */
function getFirstCommitDate(filePath) {
  try {
    const raw = execSync(`git log --diff-filter=A --follow --format=%aI -- "${filePath}"`, {
      cwd: ROOT,
      encoding: "utf-8",
    }).trim();
    // git log may return multiple lines if file was re-added; take the oldest (last line)
    const lines = raw.split("\n").filter(Boolean);
    if (lines.length === 0) return null;
    const iso = lines[lines.length - 1];
    return iso.slice(0, 10); // YYYY-MM-DD
  } catch {
    return null;
  }
}

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

/** Parse simple YAML frontmatter from a markdown file. */
function parseFrontmatter(filePath) {
  const content = readFileSync(filePath, "utf-8");
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;

  const meta = {};
  for (const line of match[1].split("\n")) {
    const m = line.match(/^(\w+):\s*(.+)$/);
    if (m) meta[m[1]] = m[2].trim();
  }
  return meta;
}

/* ── Lens data collection ─────────────────────────────────────────────── */

/**
 * Scan all lens data files and return dates, keys, and names.
 * Single filesystem pass — avoids redundant reads by downstream scripts.
 */
function collectLensData() {
  const dataFiles = readdirSync(LENS_DATA_DIR).filter((f) => f.endsWith(".data.ts"));
  const dates = {};
  const lenses = []; // { key, name }

  for (const file of dataFiles) {
    const filePath = join(LENS_DATA_DIR, file);
    const key = extractLensKey(filePath);
    if (!key) continue;
    const name = extractLensName(filePath);
    lenses.push({ key, name });
    const date = getFirstCommitDate(filePath);
    if (date) dates[key] = date;
  }

  return { dates, lenses };
}

/* ── Route collection ────────────────────────────────────────────────── */

/** Build the flat array of all concrete routes to pre-render. */
function collectRoutes(lenses, articles, makerSlugs) {
  return [
    "/",
    "/lenses",
    "/makers",
    "/articles",
    ...articles.map((a) => `/articles/${a.slug}`),
    ...lenses.map((l) => `/lens/${l.key}`),
    ...makerSlugs.map((s) => `/makers/${s}`),
  ];
}

/* ── Article metadata ─────────────────────────────────────────────────── */

function collectArticles() {
  const mdFiles = readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));
  const articles = [];

  for (const file of mdFiles) {
    const filePath = join(CONTENT_DIR, file);
    const meta = parseFrontmatter(filePath);
    if (!meta || !meta.slug || !meta.title) continue;

    const date = getFirstCommitDate(filePath);
    articles.push({
      slug: meta.slug,
      title: meta.title,
      summary: meta.summary || "",
      tag: meta.tag || undefined,
      date: date || new Date().toISOString().slice(0, 10),
      file,
    });
  }

  // Sort newest-first by date
  articles.sort((a, b) => b.date.localeCompare(a.date));
  return articles;
}

/* ── Main ─────────────────────────────────────────────────────────────── */

function main() {
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

  const { dates: lensDates, lenses } = collectLensData();
  const articles = collectArticles();

  const lensKeys = lenses.map((l) => l.key).sort();
  const makerSlugs = [...new Set(lenses.map((l) => deriveMakerSlug(l.name || l.key)))].sort();
  const routes = collectRoutes(lenses, articles, makerSlugs);

  const metadata = { lensDates, articles, lensKeys, makerSlugs, routes };
  writeFileSync(OUT_FILE, JSON.stringify(metadata, null, 2) + "\n", "utf-8");

  console.log(
    `Build metadata written to ${OUT_FILE} (${lensKeys.length} lenses, ${articles.length} articles, ${makerSlugs.length} makers, ${routes.length} routes)`,
  );
}

main();
