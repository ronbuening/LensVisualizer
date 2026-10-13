/**
 * Pre-build metadata generator.
 *
 * Produces src/generated/build-metadata.json with:
 *   - lensFreshness: mapping of lens catalog key → git freshness + commit-aware publication order
 *   - articles: array of frontmatter + git freshness metadata in commit-aware publication order
 *   - lensKeys: sorted array of all visible lens catalog keys
 *   - makerSlugs: sorted array of unique maker URL slugs
 *   - mountIds / formatIds: sorted arrays of used taxonomy ids
 *   - teleconverterKeys: sorted array of published teleconverter keys (hidden test models excluded)
 *   - authors: inventor names, stable slugs, and related lens/patent counts
 *   - assignees: names, stable slugs, lens/patent counts, and dated corporate history
 *   - routes: flat array of all concrete URL paths to pre-render
 *
 * This is the single source of truth for route enumeration. Downstream scripts
 * (prerender, sitemap, seo-audit) read this JSON instead of scanning the
 * filesystem independently.
 *
 * Also emits client-metadata.json, a public display projection without build-only Git details, and
 * teleconverter-summaries.json, which pairs each teleconverter with the visible lenses it can mount on.
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
  projectClientMetadata,
  getGitFileFreshnessAsync,
} from "./build-metadata-lib.mjs";
import { collectLensDataAsync } from "./lens-data-lib.mjs";
import { MAKER_PREFIXES } from "./maker-prefixes.mjs";
import { buildAuthorMetadata, buildAssigneeMetadata } from "./author-metadata.mjs";
import { assertPatentAssigneeValidity } from "./patent-assignee-validity.mjs";

const ROOT = join(import.meta.dirname, "..");
const README_FILE = join(ROOT, "README.md");
const LENS_DATA_DIR = join(ROOT, "src", "lens-data");
const CONTENT_DIR = join(ROOT, "src", "content");
const OUT_DIR = join(ROOT, "src", "generated");
const OUT_FILE = join(OUT_DIR, "build-metadata.json");
const CLIENT_FILE = join(OUT_DIR, "client-metadata.json");
const MAKER_PREFIXES_FILE = join(OUT_DIR, "maker-prefixes.json");
const MAKER_DETAILS_FILE = join(ROOT, "src", "utils", "catalog", "makerDetails.ts");
const ASSIGNEE_CORPORATE_HISTORY_FILE = join(ROOT, "src", "utils", "catalog", "assigneeCorporateHistory.ts");
const LENS_SUMMARIES_FILE = join(OUT_DIR, "lens-summaries.json");
const TELECONVERTER_SUMMARIES_FILE = join(OUT_DIR, "teleconverter-summaries.json");
/* The fit predicate is import-free TypeScript, so plain Node's type stripping loads the same code the viewer runs. */
const TELECONVERTER_COMPATIBILITY_FILE = join(ROOT, "src", "optics", "prescription", "teleconverterCompatibility.ts");
const GIT_FRESHNESS_CONCURRENCY = 8;

/* ── Lens summaries ───────────────────────────────────────────────────── */

/* Fields consumed by non-viewer pages (lens index, maker/mount/format pages,
 * updates, homepage cards). Keep in sync with the LensSummary type in
 * src/utils/catalog/lensSummaries.ts. */
const SUMMARY_FIELDS = [
  "key",
  "name",
  "maker",
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

/** Evaluate every default-exported data module under src/lens-data whose file name ends with `suffix`. */
async function importDataModules(suffix) {
  const dataFiles = readdirSync(LENS_DATA_DIR, { recursive: true })
    .filter((file) => typeof file === "string" && file.endsWith(suffix))
    .map((file) => file.replace(/\\/g, "/"))
    .sort();

  const modules = [];
  for (const relativePath of dataFiles) {
    const filePath = join(LENS_DATA_DIR, relativePath);
    const data = (await import(pathToFileURL(filePath).href))?.default;
    if (data?.key) modules.push({ data, filePath });
  }
  return modules;
}

/**
 * Evaluate every lens data module and extract the lightweight summary fields.
 *
 * Lens `*.data.ts` files only have type-only imports, so Node's native type
 * stripping can import them directly — no bundler needed. The resulting JSON
 * lets index-style pages render without shipping full prescriptions. The raw
 * modules are returned too, because teleconverter fit needs full prescriptions.
 */
async function collectLensSummaries() {
  const lensModules = await importDataModules(".data.ts");
  const summaries = lensModules.map(({ data }) => {
    const summary = {};
    for (const field of SUMMARY_FIELDS) {
      if (data[field] !== undefined) summary[field] = data[field];
    }
    /* Mirror the runtime defaults merge for the one summary-relevant default */
    summary.visible = data.visible !== false;
    return summary;
  });
  /* Match the catalog's display ordering (sorted by name) */
  return { lensModules, lensSummaries: summaries.sort((a, b) => a.name.localeCompare(b.name)) };
}

/* ── Teleconverter summaries ──────────────────────────────────────────── */

/* Fields consumed by the teleconverter pages and search. Keep in sync with the
 * TeleconverterSummary type in src/utils/catalog/teleconverterSummaries.ts. */
const TELECONVERTER_SUMMARY_FIELDS = [
  "key",
  "name",
  "maker",
  "subtitle",
  "specs",
  "magnification",
  "lensMounts",
  "universal",
  "minHostFno",
  "patentNumber",
  "patentAuthors",
  "patentAssignees",
  "patentYear",
  "elementCount",
  "groupCount",
];

/**
 * Evaluate every teleconverter module and pair it with the visible lenses it can mount on.
 *
 * Fit depends on each host's back focus and rear plates, which lens summaries do not carry, so the host list is
 * resolved here with the runtime predicate and shipped as `compatibleLensKeys`. Hidden test models keep a summary
 * (`visible: false`) so their page resolves from a hand-typed URL; the caller leaves them out of routes.
 */
async function collectTeleconverters(lensModules, fallbackDate) {
  const { teleconverterCompatibility } = await import(pathToFileURL(TELECONVERTER_COMPATIBILITY_FILE).href);
  const visibleLenses = lensModules
    .map(({ data }) => data)
    .filter((data) => data.visible !== false)
    .sort((a, b) => a.name.localeCompare(b.name));

  const teleconverters = [];
  for (const { data, filePath } of await importDataModules(".teleconverter.ts")) {
    const summary = {};
    for (const field of TELECONVERTER_SUMMARY_FIELDS) {
      if (data[field] !== undefined) summary[field] = data[field];
    }
    summary.visible = data.visible !== false;
    summary.compatibleLensKeys = visibleLenses
      .filter((lens) => teleconverterCompatibility(lens, data).ok)
      .map((lens) => lens.key);
    teleconverters.push({
      key: data.key,
      summary,
      freshness: await getGitFileFreshnessAsync(filePath, { cwd: ROOT, fallbackDate }),
    });
  }
  /* Weakest converter first, then by name — the order the runtime catalog uses. */
  return teleconverters.sort(
    (a, b) => a.summary.magnification - b.summary.magnification || a.summary.name.localeCompare(b.summary.name),
  );
}

/* ── Route collection ────────────────────────────────────────────────── */

/** Build the flat array of all concrete routes to pre-render. */
function collectRoutes(lenses, articles, makerSlugs, mountIds, formatIds, authors, teleconverterKeys) {
  return [
    "/",
    "/search",
    "/lenses",
    "/makers",
    "/authors",
    "/patents",
    "/mounts",
    "/formats",
    /* The section is published once it holds a converter that is not a hidden test model. */
    ...(teleconverterKeys.length > 0 ? ["/teleconverters"] : []),
    "/articles",
    "/updates",
    "/relationships",
    "/relationships/universal",
    ...articles.map((a) => `/articles/${a.slug}`),
    ...lenses.map((l) => `/lens/${l.key}`),
    ...makerSlugs.map((s) => `/makers/${s}`),
    ...mountIds.map((id) => `/mounts/${id}`),
    ...formatIds.map((id) => `/formats/${id}`),
    ...teleconverterKeys.map((key) => `/teleconverters/${key}`),
    ...authors.map((author) => `/authors/${author.slug}`),
  ];
}

/* ── Main ─────────────────────────────────────────────────────────────── */

async function main() {
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });
  assertFullGitHistory({ cwd: ROOT });
  const fallbackDate = new Date().toISOString().slice(0, 10);

  writeFileSync(MAKER_PREFIXES_FILE, JSON.stringify(MAKER_PREFIXES, null, 2) + "\n", "utf-8");

  const [
    allLenses,
    articles,
    makerDetailsFreshness,
    assigneeCorporateHistoryFreshness,
    { lensModules, lensSummaries },
  ] = await Promise.all([
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
  const lenses = allLenses.filter((lens) => lens.visible !== false);
  assertFreshnessDiversity({ lenses, articles });
  const lensKeys = lenses.map((l) => l.key).sort();
  const makerSlugs = [...new Set(lenses.map((l) => l.makerSlug))].sort();
  const mountIds = [...new Set(lenses.flatMap((l) => l.lensMountIds ?? []))].sort();
  const formatIds = [...new Set(lenses.flatMap((l) => (l.imageFormatId ? [l.imageFormatId] : [])))].sort();
  const authors = buildAuthorMetadata(lensSummaries);
  const assignees = buildAssigneeMetadata(lensSummaries);
  const teleconverters = await collectTeleconverters(lensModules, fallbackDate);
  const publishedTeleconverters = teleconverters.filter((teleconverter) => teleconverter.summary.visible);
  const teleconverterKeys = publishedTeleconverters.map((teleconverter) => teleconverter.key).sort();
  const routes = collectRoutes(lenses, articles, makerSlugs, mountIds, formatIds, authors, teleconverterKeys);
  const routeFreshness = buildRouteFreshness({
    lenses,
    articles,
    makerSlugs,
    mountIds,
    formatIds,
    authors,
    teleconverters: publishedTeleconverters.map(({ key, freshness, summary }) => ({
      key,
      freshness,
      compatibleLensKeys: summary.compatibleLensKeys,
    })),
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
    teleconverterKeys,
    authors,
    assignees,
    routes,
    routeFreshness,
  };
  writeFileSync(OUT_FILE, JSON.stringify(metadata, null, 2) + "\n", "utf-8");
  writeFileSync(CLIENT_FILE, JSON.stringify(projectClientMetadata(metadata)) + "\n", "utf-8");

  writeFileSync(LENS_SUMMARIES_FILE, JSON.stringify(lensSummaries) + "\n", "utf-8");
  console.log(`Lens summaries written to ${LENS_SUMMARIES_FILE} (${lensSummaries.length} lenses)`);

  writeFileSync(
    TELECONVERTER_SUMMARIES_FILE,
    JSON.stringify(teleconverters.map((teleconverter) => teleconverter.summary)) + "\n",
    "utf-8",
  );
  console.log(
    `Teleconverter summaries written to ${TELECONVERTER_SUMMARIES_FILE} (${teleconverters.length} teleconverters, ` +
      `${teleconverters.length - publishedTeleconverters.length} hidden)`,
  );

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
