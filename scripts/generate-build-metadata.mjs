/**
 * Pre-build metadata generator.
 *
 * Produces src/generated/build-metadata.json with:
 *   - lensFreshness: mapping of lens catalog key → git freshness + commit-aware publication order
 *   - articles: array of frontmatter + git freshness metadata in commit-aware publication order
 *   - lensKeys: sorted array of all visible lens catalog keys
 *   - makerSlugs: sorted array of unique maker URL slugs
 *   - mountIds / formatIds: sorted arrays of used taxonomy ids
 *   - authors: inventor names, stable slugs, and related lens/patent counts
 *   - assignees: names, stable slugs, lens/patent counts, and dated corporate history
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
import { pathToFileURL } from "node:url";
import {
  assertFreshnessDiversity,
  assertFullGitHistory,
  buildRouteFreshness,
  collectArticles,
  comparePublicationEntries,
  getGitFileFreshnessAsync,
} from "./build-metadata-lib.mjs";
import { collectLensDataAsync, deriveMakerSlug } from "./lens-data-lib.mjs";
import { MAKER_PREFIXES } from "./maker-prefixes.mjs";
import { buildAuthorMetadata, buildAssigneeMetadata } from "./author-metadata.mjs";
import { assertPatentAssigneeValidity } from "./patent-assignee-validity.mjs";
import { assertLensRelationshipValidity, relationshipRouteMetadata } from "./lens-relationship-validity.mjs";
import { LENS_MOUNTS } from "../src/utils/catalog/lensTaxonomy.ts";

const ROOT = join(import.meta.dirname, "..");
const README_FILE = join(ROOT, "README.md");
const LENS_DATA_DIR = join(ROOT, "src", "lens-data");
const CONTENT_DIR = join(ROOT, "src", "content");
const OUT_DIR = join(ROOT, "src", "generated");
const OUT_FILE = join(OUT_DIR, "build-metadata.json");
const MAKER_PREFIXES_FILE = join(OUT_DIR, "maker-prefixes.json");
const MAKER_DETAILS_FILE = join(ROOT, "src", "utils", "catalog", "makerDetails.ts");
const ASSIGNEE_CORPORATE_HISTORY_FILE = join(ROOT, "src", "utils", "catalog", "assigneeCorporateHistory.ts");
const LENS_SUMMARIES_FILE = join(OUT_DIR, "lens-summaries.json");
const GIT_FRESHNESS_CONCURRENCY = 8;

/* ── Lens summaries ───────────────────────────────────────────────────── */

/* Fields consumed by non-viewer pages (lens index, maker/mount/format pages,
 * updates, homepage cards). Keep in sync with the LensSummary type in
 * src/utils/catalog/lensSummaries.ts. */
const SUMMARY_FIELDS = [
  "key",
  "name",
  "maker",
  "aliases",
  "manufacturedBy",
  "specs",
  "focalLengthMarketing",
  "apertureMarketing",
  "apertureDesign",
  "nominalFno",
  "patentNumber",
  "patentAuthors",
  "patentAssignees",
  "patentYear",
  "lensMounts",
  "imageFormat",
  "opticalConfiguration",
];

/**
 * Evaluate every lens data module and extract the lightweight summary fields.
 *
 * Lens `*.data.ts` files only have type-only imports, so Node's native type
 * stripping can import them directly — no bundler needed. The resulting JSON
 * lets index-style pages render without shipping full prescriptions.
 */
async function collectLensSummaries() {
  const dataFiles = readdirSync(LENS_DATA_DIR, { recursive: true })
    .filter((file) => typeof file === "string" && file.endsWith(".data.ts"))
    .map((file) => file.replace(/\\/g, "/"))
    .sort();

  const summaries = [];
  for (const relativePath of dataFiles) {
    const mod = await import(pathToFileURL(join(LENS_DATA_DIR, relativePath)).href);
    const data = mod?.default;
    if (!data?.key) continue;
    const summary = {};
    for (const field of SUMMARY_FIELDS) {
      if (data[field] !== undefined) summary[field] = data[field];
    }
    /* Mirror the runtime defaults merge for the one summary-relevant default */
    summary.visible = data.visible !== false;
    summaries.push(summary);
  }
  /* Match the catalog's display ordering (sorted by name) */
  return summaries.sort((a, b) => a.name.localeCompare(b.name));
}

/* ── Route collection ────────────────────────────────────────────────── */

/** Build the flat array of all concrete routes to pre-render. */
function collectRoutes(lenses, articles, makerSlugs, mountIds, formatIds, authors) {
  return [
    "/",
    "/search",
    "/lenses",
    "/makers",
    "/authors",
    "/patents",
    "/mounts",
    "/formats",
    "/articles",
    "/updates",
    "/relationships",
    "/relationships/universal",
    ...articles.map((a) => `/articles/${a.slug}`),
    ...lenses.map((l) => `/lens/${l.key}`),
    ...makerSlugs.map((s) => `/makers/${s}`),
    ...mountIds.map((id) => `/mounts/${id}`),
    ...formatIds.map((id) => `/formats/${id}`),
    ...authors.map((author) => `/authors/${author.slug}`),
  ];
}

/* ── Main ─────────────────────────────────────────────────────────────── */

async function main() {
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });
  assertFullGitHistory({ cwd: ROOT });
  const fallbackDate = new Date().toISOString().slice(0, 10);

  writeFileSync(MAKER_PREFIXES_FILE, JSON.stringify(MAKER_PREFIXES, null, 2) + "\n", "utf-8");

  const [allLenses, articles, makerDetailsFreshness, assigneeCorporateHistoryFreshness, lensSummaries] =
    await Promise.all([
      collectLensDataAsync({
        rootDir: ROOT,
        lensDataDir: LENS_DATA_DIR,
        fallbackDate,
        concurrency: GIT_FRESHNESS_CONCURRENCY,
      }),
      collectArticles({
        contentDir: CONTENT_DIR,
        cwd: ROOT,
        fallbackDate,
        concurrency: GIT_FRESHNESS_CONCURRENCY,
      }),
      getGitFileFreshnessAsync(MAKER_DETAILS_FILE, { cwd: ROOT, fallbackDate }),
      getGitFileFreshnessAsync(ASSIGNEE_CORPORATE_HISTORY_FILE, { cwd: ROOT, fallbackDate }),
      collectLensSummaries(),
    ]);

  assertPatentAssigneeValidity(lensSummaries);
  assertLensRelationshipValidity(lensSummaries, {
    knownMountIds: new Set(LENS_MOUNTS.map((mount) => mount.id)),
  });
  const summaryByKey = new Map(lensSummaries.map((summary) => [summary.key, summary]));
  const lenses = allLenses
    .filter((lens) => lens.visible !== false)
    .map((lens) => ({
      ...lens,
      ...relationshipRouteMetadata(summaryByKey.get(lens.key) ?? lens, lens.makerSlug, deriveMakerSlug),
    }));
  assertFreshnessDiversity({ lenses, articles });
  const lensKeys = lenses.map((l) => l.key).sort();
  const makerSlugs = [...new Set(lenses.flatMap((l) => l.makerSlugs))].sort();
  const mountIds = [...new Set(lenses.flatMap((l) => l.lensMountIds ?? []))].sort();
  const formatIds = [...new Set(lenses.flatMap((l) => (l.imageFormatId ? [l.imageFormatId] : [])))].sort();
  const authors = buildAuthorMetadata(lensSummaries);
  const assignees = buildAssigneeMetadata(lensSummaries);
  const routes = collectRoutes(lenses, articles, makerSlugs, mountIds, formatIds, authors);
  const routeFreshness = buildRouteFreshness({
    lenses,
    articles,
    makerSlugs,
    mountIds,
    formatIds,
    authors,
    makerDetailsFreshness,
    assigneeCorporateHistoryFreshness,
    fallbackDate,
  });
  const lensPublicationOrder = new Map(
    [...lenses]
      .sort((a, b) => comparePublicationEntries({ ...a.freshness, ...a }, { ...b.freshness, ...b }))
      .map((lens, index) => [lens.key, index]),
  );
  const lensFreshness = Object.fromEntries(
    lenses.map((lens) => [lens.key, { ...lens.freshness, publicationOrder: lensPublicationOrder.get(lens.key) }]),
  );
  const metadata = {
    lensFreshness,
    articles,
    lensKeys,
    makerSlugs,
    mountIds,
    formatIds,
    authors,
    assignees,
    routes,
    routeFreshness,
  };
  writeFileSync(OUT_FILE, JSON.stringify(metadata, null, 2) + "\n", "utf-8");

  writeFileSync(LENS_SUMMARIES_FILE, JSON.stringify(lensSummaries) + "\n", "utf-8");
  console.log(`Lens summaries written to ${LENS_SUMMARIES_FILE} (${lensSummaries.length} lenses)`);

  // Keep the README public lens count in sync automatically
  const readme = readFileSync(README_FILE, "utf-8");
  const updatedReadme = readme.replace(
    /^(- )`\d+`( visible lens pages are currently published)/m,
    `$1\`${lensKeys.length}\`$2`,
  );
  if (updatedReadme !== readme) {
    writeFileSync(README_FILE, updatedReadme, "utf-8");
    console.log(`README.md lens count updated to ${lensKeys.length}.`);
  }

  console.log(
    `Build metadata written to ${OUT_FILE} (${lensKeys.length} lenses, ${articles.length} articles, ${makerSlugs.length} makers, ${authors.length} authors, ${assignees.length} assignees, ${mountIds.length} mounts, ${formatIds.length} formats, ${routes.length} routes)`,
  );
}

await main();
