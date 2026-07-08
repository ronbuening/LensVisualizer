/**
 * Lens catalog — auto-registered from nested lens-data data files
 *
 * Shared by LensViewer and LensDiagramPanel so the import.meta.glob
 * calls are not duplicated.
 */

import LENS_DEFAULTS from "../../lens-data/defaults.js";
import { loadChunkWithReload } from "../chunkLoadRetry.js";
import type { LensData } from "../../types/optics.js";

/* Eagerly import all lens data files under src/lens-data/ — Vite resolves the glob at build time.
 * Each module's default export is a LENS_DATA object; defaults are merged
 * underneath so per-lens values take precedence. */
const _modules = import.meta.glob<{ default: LensData }>("../../lens-data/**/*.data.ts", { eager: true });
const LENS_CATALOG: Record<string, LensData> = {};
for (const [path, mod] of Object.entries(_modules)) {
  const data = mod.default;
  if (data?.key) {
    LENS_CATALOG[data.key] = { ...LENS_DEFAULTS, ...data } as LensData;
  } else {
    console.warn(`[LensVisualizer] Skipped ${path}: no "key" field in default export`);
  }
}
function sortLensKeysByName(keys: string[]): string[] {
  return keys.sort((a, b) => LENS_CATALOG[a].name.localeCompare(LENS_CATALOG[b].name));
}

function isDebugLensKey(key: string): boolean {
  const data = LENS_CATALOG[key];
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
const CATALOG_KEYS: string[] = ALL_CATALOG_KEYS.filter((k) => LENS_CATALOG[k].visible !== false).sort((a, b) =>
  LENS_CATALOG[a].name.localeCompare(LENS_CATALOG[b].name),
);

/* Debug/reference lenses sorted alphabetically by display name. */
const DEBUG_CATALOG_KEYS: string[] = ALL_CATALOG_KEYS.filter(isDebugLensKey);

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
  ALL_CATALOG_KEYS,
  CATALOG_KEYS,
  DEBUG_CATALOG_KEYS,
  isDebugLensKey,
  hasMdForKey,
  cachedMdForKey,
  loadMdForKey,
};
