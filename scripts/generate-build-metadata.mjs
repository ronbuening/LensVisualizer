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
 *   - updateMonths: months with a changelog entry or published lens (one /updates/<month> archive page each)
 *   - routes: flat array of all concrete URL paths to pre-render
 *
 * This is the single source of truth for route enumeration. Downstream scripts
 * (prerender, sitemap, seo-audit) read this JSON instead of scanning the
 * filesystem independently.
 *
 * Also emits client-metadata.json, a public display projection without build-only Git details,
 * teleconverter-summaries.json, which pairs each teleconverter with the visible lenses it can mount on, and
 * changelog.json, the validated changelog compiled from the entry files under src/content/changelog/.
 *
 * Run before `vite build` so the generated file is available to the bundler.
 */

import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
import { pathToFileURL } from "node:url";
import {
  assertFreshnessDiversity,
  assertFullGitHistory,
  buildRouteFreshness,
  collectArticles,
  comparePublicationEntries,
  gitHistory,
  projectClientMetadata,
} from "./build-metadata-lib.mjs";
import { collectChangelog } from "./changelog-lib.mjs";
import { assertV2Catalog, collectLensDataAsync } from "./lens-data-lib.mjs";
import { lensSummary, teleconverterSummary, canonicalPrescription } from "./lens-summaries.mjs";
import { MAKER_PREFIXES } from "./maker-prefixes.mjs";
import { buildUpdateMonths } from "../src/utils/content/updateMonths.ts";
import { buildAuthorMetadata, buildAssigneeMetadata } from "./author-metadata.mjs";
import { assertPatentAssigneeValidity } from "./patent-assignee-validity.mjs";

const ROOT = join(import.meta.dirname, "..");
const README_FILE = join(ROOT, "README.md");
const LENS_DATA_DIR = join(ROOT, "src", "lens-data");
const CONTENT_DIR = join(ROOT, "src", "content");
const CHANGELOG_DIR = join(CONTENT_DIR, "changelog");
const OUT_DIR = join(ROOT, "src", "generated");
const OUT_FILE = join(OUT_DIR, "build-metadata.json");
const CLIENT_FILE = join(OUT_DIR, "client-metadata.json");
const MAKER_PREFIXES_FILE = join(OUT_DIR, "maker-prefixes.json");
const MAKER_DETAILS_FILE = join(ROOT, "src", "utils", "catalog", "makerDetails.ts");
const ASSIGNEE_CORPORATE_HISTORY_FILE = join(ROOT, "src", "utils", "catalog", "assigneeCorporateHistory.ts");
const LENS_SUMMARIES_FILE = join(OUT_DIR, "lens-summaries.json");
const TELECONVERTER_SUMMARIES_FILE = join(OUT_DIR, "teleconverter-summaries.json");
const CHANGELOG_FILE = join(OUT_DIR, "changelog.json");
/* The fit predicate is import-free TypeScript, so plain Node's type stripping loads the same code the viewer runs. */
const TELECONVERTER_COMPATIBILITY_FILE = join(ROOT, "src", "optics", "prescription", "teleconverterCompatibility.ts");

/* ── Lens summaries ───────────────────────────────────────────────────── */

/**
 * Evaluate every default-exported data module under src/lens-data whose file name ends with `suffix`, as canonical
 * prescriptions.
 */
async function importDataModules(suffix) {
  const dataFiles = readdirSync(LENS_DATA_DIR, { recursive: true })
    .filter((file) => typeof file === "string" && file.endsWith(suffix))
    .map((file) => file.replace(/\\/g, "/"))
    .sort();

  const modules = [];
  for (const relativePath of dataFiles) {
    const filePath = join(LENS_DATA_DIR, relativePath);
    const file = (await import(pathToFileURL(filePath).href))?.default;
    if (!file?.key) continue;
    const kind = suffix === ".data.ts" ? "lens" : "teleconverter";
    modules.push({
      data: await canonicalPrescription(file, kind, relative(ROOT, filePath).replaceAll("\\", "/")),
      filePath,
    });
  }
  return modules;
}

/**
 * Evaluate every lens data module and extract the lightweight summary fields.
 *
 * Lens `*.data.ts` files only have type-only imports, so Node's native type
 * stripping can import them directly — no bundler needed. The resulting JSON
 * lets index-style pages render without shipping full prescriptions. The
 * modules are returned too, as canonical prescriptions, because teleconverter fit needs
 * full prescriptions.
 */
async function collectLensSummaries() {
  const lensModules = await importDataModules(".data.ts");
  const summaries = lensModules.map(({ data }) => lensSummary(data));
  /* Match the catalog's display ordering (sorted by name) */
  return { lensModules, lensSummaries: summaries.sort((a, b) => a.name.localeCompare(b.name)) };
}

/* ── Teleconverter summaries ──────────────────────────────────────────── */

/**
 * Evaluate every teleconverter module and pair it with the visible lenses it can mount on.
 *
 * Fit depends on each host's back focus and rear plates, which lens summaries do not carry, so the host list is
 * resolved here with the runtime predicate and shipped as `compatibleLensKeys`. Hidden test models keep a summary
 * (`visible: false`) so their page resolves from a hand-typed URL; the caller leaves them out of routes.
 */
async function collectTeleconverters(lensModules, history, fallbackDate) {
  const { teleconverterCompatibility } = await import(pathToFileURL(TELECONVERTER_COMPATIBILITY_FILE).href);
  const visibleLenses = lensModules
    .map(({ data }) => data)
    .filter((data) => data.visible !== false)
    .sort((a, b) => a.name.localeCompare(b.name));

  const teleconverters = [];
  for (const { data, filePath } of await importDataModules(".teleconverter.ts")) {
    const summary = teleconverterSummary(data, visibleLenses, teleconverterCompatibility);
    teleconverters.push({
      key: data.key,
      summary,
      freshness: history.fileFreshness(filePath, { fallbackDate }),
    });
  }
  /* Weakest converter first, then by name — the order the runtime catalog uses. */
  return teleconverters.sort(
    (a, b) => a.summary.magnification - b.summary.magnification || a.summary.name.localeCompare(b.summary.name),
  );
}

/* ── Route collection ────────────────────────────────────────────────── */

/** Build the flat array of all concrete routes to pre-render. */
function collectRoutes(lenses, articles, makerSlugs, mountIds, formatIds, authors, teleconverterKeys, updateMonths) {
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
    ...updateMonths.map(({ month }) => `/updates/${month}`),
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
  await assertV2Catalog(LENS_DATA_DIR);
  /* Validated first: a malformed entry file fails the run before the slower lens and git work. */
  const changelog = collectChangelog({ changelogDir: CHANGELOG_DIR });
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });
  assertFullGitHistory({ cwd: ROOT });
  /* Every dated file is looked up in this one read of the history, made after any unshallowing above. */
  const history = gitHistory({ cwd: ROOT });
  const fallbackDate = new Date().toISOString().slice(0, 10);

  writeFileSync(MAKER_PREFIXES_FILE, JSON.stringify(MAKER_PREFIXES, null, 2) + "\n", "utf-8");
  writeFileSync(CHANGELOG_FILE, JSON.stringify(changelog) + "\n", "utf-8");
  console.log(`Changelog written to ${CHANGELOG_FILE} (${changelog.length} entries)`);

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
      getFreshness: history.firstFileFreshness,
    }),
    collectArticles({
      contentDir: CONTENT_DIR,
      cwd: ROOT,
      fallbackDate,
      getFreshness: history.firstFileFreshness,
    }),
    history.fileFreshness(MAKER_DETAILS_FILE, { fallbackDate }),
    history.fileFreshness(ASSIGNEE_CORPORATE_HISTORY_FILE, { fallbackDate }),
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
  const teleconverters = await collectTeleconverters(lensModules, history, fallbackDate);
  const publishedTeleconverters = teleconverters.filter((teleconverter) => teleconverter.summary.visible);
  const teleconverterKeys = publishedTeleconverters.map((teleconverter) => teleconverter.key).sort();
  const updateMonths = buildUpdateMonths(
    changelog.map((entry) => entry.date),
    lenses.map((lens) => lens.freshness.publishedOn),
  );
  const routes = collectRoutes(
    lenses,
    articles,
    makerSlugs,
    mountIds,
    formatIds,
    authors,
    teleconverterKeys,
    updateMonths,
  );
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
    changelog,
    updateMonths,
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
    updateMonths,
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
