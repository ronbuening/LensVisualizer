/**
 * Lens catalog — auto-registered from nested lens-data data files
 *
 * Shared by LensViewer and LensDiagramPanel so the import.meta.glob
 * calls are not duplicated.
 */

import { ingestLens, isV1File, toLensData } from "../../optics/buildLens.js";
import { loadChunkWithReload } from "../chunkLoadRetry.js";
import type { LensDataV2Input } from "../../types/lensDataV2.js";
import type { LensData, LensDataInput } from "../../types/optics.js";
import { catalogCollator } from "./collation.js";

export interface OpticalConfigurationOption {
  key: string;
  label: string;
  order: number;
}

/* Eagerly import all lens data files under src/lens-data/ — Vite resolves the glob at build time.
 * Each module's default export is a file as authored. A catalog entry is that file read through canonical ingest,
 * whose V1 view applies the schema defaults. Ingest runs the first time an entry is read and the entry is kept, so a
 * page pays only for the lenses it shows and every read of a key returns the same object, which caches key on. The
 * key lists below read only identity fields, from the files as authored, in either version. */
const _modules = import.meta.glob<{ default: LensDataInput | LensDataV2Input }>("../../lens-data/**/*.data.ts", {
  eager: true,
});

/** The fields the key lists read. V2 files keep them where V1 does, but for `catalog.opticalConfiguration`. */
type LensIdentity = Pick<LensData, "key" | "name" | "visible" | "maker" | "opticalConfiguration">;

function identityOfFile(data: LensDataInput | LensDataV2Input): LensIdentity {
  const opticalConfiguration = isV1File(data) ? data.opticalConfiguration : data.catalog?.opticalConfiguration;
  return { key: data.key, name: data.name, visible: data.visible, maker: data.maker, opticalConfiguration };
}

const AUTHORED: Record<string, LensIdentity> = {};
const LENS_CATALOG: Record<string, LensData> = {};
const PATH_BY_KEY: Record<string, string> = {};
for (const [path, mod] of Object.entries(_modules)) {
  const data = mod.default;
  if (data?.key) {
    if (Object.hasOwn(PATH_BY_KEY, data.key)) {
      throw new Error(`Two lens-data files share the key "${data.key}": ${PATH_BY_KEY[data.key]} and ${path}`);
    }
    PATH_BY_KEY[data.key] = path;
    AUTHORED[data.key] = identityOfFile(data);
    let entry: LensData | undefined;
    Object.defineProperty(LENS_CATALOG, data.key, {
      enumerable: true,
      get: () => (entry ??= toLensData(ingestLens(data))),
    });
  } else {
    console.warn(`[LensVisualizer] Skipped ${path}: no "key" field in default export`);
  }
}
function sortLensKeysByName(keys: string[]): string[] {
  return keys.sort((a, b) => catalogCollator.compare(AUTHORED[a].name, AUTHORED[b].name));
}

/** A key's identity fields, read without ingesting the lens; an entry added at run time is read as it is. */
function identityOf(key: string): LensIdentity | undefined {
  return AUTHORED[key] ?? LENS_CATALOG[key];
}

/** A catalog key's display name, read from its file as authored, so a list of names ingests no lens. */
function lensNameForKey(key: string): string {
  return identityOf(key)?.name ?? key;
}

function isDebugLensKey(key: string): boolean {
  const data = identityOf(key)!;
  if (data.visible === false && data.opticalConfiguration !== undefined) return false;
  return (
    data.visible === false ||
    key.startsWith("reference-") ||
    data.maker === "Reference" ||
    data.name.startsWith("REFERENCE ")
  );
}

/* All lenses sorted alphabetically by display name, including hidden fixtures. */
const ALL_CATALOG_KEYS: string[] = sortLensKeysByName(Object.keys(LENS_CATALOG));

/* Visible lenses sorted alphabetically by display name */
const CATALOG_KEYS: string[] = ALL_CATALOG_KEYS.filter((k) => AUTHORED[k].visible !== false).sort((a, b) =>
  catalogCollator.compare(AUTHORED[a].name, AUTHORED[b].name),
);

/* Debug/reference lenses sorted alphabetically by display name. */
const DEBUG_CATALOG_KEYS: string[] = ALL_CATALOG_KEYS.filter(isDebugLensKey);

const OPTICAL_CONFIGURATION_OPTIONS_BY_GROUP = new Map<string, OpticalConfigurationOption[]>();
for (const key of ALL_CATALOG_KEYS) {
  const config = AUTHORED[key].opticalConfiguration;
  if (!config) continue;
  const options = OPTICAL_CONFIGURATION_OPTIONS_BY_GROUP.get(config.groupKey) ?? [];
  options.push({ key, label: config.label, order: config.order });
  OPTICAL_CONFIGURATION_OPTIONS_BY_GROUP.set(config.groupKey, options);
}
for (const options of OPTICAL_CONFIGURATION_OPTIONS_BY_GROUP.values()) {
  options.sort(
    (a, b) => a.order - b.order || catalogCollator.compare(a.label, b.label) || catalogCollator.compare(a.key, b.key),
  );
}

/** Ordered alternate prescriptions available for the supplied catalog key. */
function opticalConfigurationOptionsForKey(key: string): ReadonlyArray<OpticalConfigurationOption> {
  const groupKey = identityOf(key)?.opticalConfiguration?.groupKey;
  if (!groupKey) return [];
  return OPTICAL_CONFIGURATION_OPTIONS_BY_GROUP.get(groupKey) ?? [];
}

/** Resolve a requested configuration within the canonical lens's group. */
function resolveOpticalConfigurationKey(key: string, requestedKey: string | undefined): string {
  if (!requestedKey) return key;
  return opticalConfigurationOptionsForKey(key).some((option) => option.key === requestedKey) ? requestedKey : key;
}

/** Visible catalog keys plus hidden prescriptions belonging to their configuration groups. */
function catalogKeysWithOpticalConfigurations(keys: readonly string[]): string[] {
  const expanded = new Set(keys);
  for (const key of keys) {
    for (const option of opticalConfigurationOptionsForKey(key)) expanded.add(option.key);
  }
  return sortLensKeysByName([...expanded]);
}

const COMPARISON_CATALOG_KEYS = catalogKeysWithOpticalConfigurations(CATALOG_KEYS);

/* Analysis markdown is code-split: the non-eager glob maps each file to a
 * dynamic importer, so ~10 MB of prose is fetched per lens on demand instead
 * of shipping inside the main bundle. */
const _mdLoaders = import.meta.glob<string>("../../lens-data/**/*.analysis.md", {
  query: "?raw",
  import: "default",
});
const MD_LOADER_BY_STEM: Record<string, () => Promise<string>> = {};
for (const [path, loader] of Object.entries(_mdLoaders)) {
  const stem = path.replace("../../lens-data", "").replace(".analysis.md", "");
  MD_LOADER_BY_STEM[stem] = loader;
}

/* Map lens key → data file stem so we can find the matching .analysis.md */
const KEY_TO_STEM: Record<string, string> = {};
for (const [path, mod] of Object.entries(_modules)) {
  const stem = path.replace("../../lens-data", "").replace(".data.ts", "");
  if (mod.default?.key) KEY_TO_STEM[mod.default.key] = stem;
}

/**
 * Whether a lens key has a companion `.analysis.md` file.
 *
 * Synchronous (the glob's key set is known at build time), so SSR and the
 * prerender pass can gate analysis sections without loading the content.
 */
function hasMdForKey(key: string): boolean {
  const stem = KEY_TO_STEM[key];
  return stem !== undefined && stem in MD_LOADER_BY_STEM;
}

const MD_CACHE = new Map<string, string>();

/**
 * Return the already-fetched markdown for a lens key, or null when it has
 * not been loaded (or does not exist). Lets the UI render instantly when
 * revisiting a lens without an async round trip.
 */
function cachedMdForKey(key: string): string | null {
  return MD_CACHE.get(key) ?? null;
}

/**
 * Fetch the raw markdown analysis content for a lens key.
 *
 * @returns the markdown string, or null when the lens has no analysis file
 */
async function loadMdForKey(key: string): Promise<string | null> {
  const stem = KEY_TO_STEM[key];
  const loader = stem ? MD_LOADER_BY_STEM[stem] : undefined;
  if (!loader) return null;
  const cached = MD_CACHE.get(key);
  if (cached !== undefined) return cached;
  const raw = await loadChunkWithReload(loader);
  MD_CACHE.set(key, raw);
  return raw;
}

/* Recent-lens lists and other index-page metadata live in lensSummaries.ts,
 * which non-viewer pages use so they don't pull the full prescription data. */

export {
  LENS_CATALOG,
  lensNameForKey,
  ALL_CATALOG_KEYS,
  CATALOG_KEYS,
  COMPARISON_CATALOG_KEYS,
  DEBUG_CATALOG_KEYS,
  isDebugLensKey,
  opticalConfigurationOptionsForKey,
  resolveOpticalConfigurationKey,
  catalogKeysWithOpticalConfigurations,
  hasMdForKey,
  cachedMdForKey,
  loadMdForKey,
};
