/**
 * Lens catalog — auto-registered from lens-data/*.data.ts
 *
 * Shared by LensViewer and LensDiagramPanel so the import.meta.glob
 * calls are not duplicated.
 */

import LENS_DEFAULTS from "../lens-data/defaults.js";
import type { LensData } from "../types/optics.js";

/* Eagerly import all *.data.ts files — Vite resolves the glob at build time.
 * Each module's default export is a LENS_DATA object; defaults are merged
 * underneath so per-lens values take precedence. */
const _modules = import.meta.glob<{ default: LensData }>("../lens-data/*.data.ts", { eager: true });
const LENS_CATALOG: Record<string, LensData> = {};
for (const [path, mod] of Object.entries(_modules)) {
  const data = mod.default;
  if (data?.key) {
    LENS_CATALOG[data.key] = { ...LENS_DEFAULTS, ...data } as LensData;
  } else {
    console.warn(`[LensVisualizer] Skipped ${path}: no "key" field in default export`);
  }
}
/* Visible lenses sorted alphabetically by display name */
const CATALOG_KEYS: string[] = Object.keys(LENS_CATALOG)
  .filter((k) => LENS_CATALOG[k].visible !== false)
  .sort((a, b) => LENS_CATALOG[a].name.localeCompare(LENS_CATALOG[b].name));

const _mdModules = import.meta.glob<string>("../lens-data/*.analysis.md", {
  eager: true,
  query: "?raw",
  import: "default",
});
const MD_BY_STEM: Record<string, string> = {};
for (const [path, raw] of Object.entries(_mdModules)) {
  const stem = path.replace("../lens-data/", "").replace(".analysis.md", "");
  MD_BY_STEM[stem] = raw;
}

/* Map lens key → data file stem so we can find the matching .analysis.md */
const KEY_TO_STEM: Record<string, string> = {};
for (const [path, mod] of Object.entries(_modules)) {
  const stem = path.replace("../lens-data/", "").replace(".data.ts", "");
  if (mod.default?.key) KEY_TO_STEM[mod.default.key] = stem;
}

/**
 * Look up the raw markdown analysis content for a lens key.
 */
function mdForKey(key: string): string | null {
  const stem = KEY_TO_STEM[key];
  return stem ? MD_BY_STEM[stem] || null : null;
}

/* ── Recent lenses (derived from build-time git dates) ─────────────── */

import buildMeta from "../generated/build-metadata.json";

interface RecentLensEntry {
  key: string;
  date: string;
}

/** Up to 5 most recently added lenses, newest-first. */
const RECENT_LENS_KEYS: RecentLensEntry[] = Object.entries(
  buildMeta.lensFreshness as Record<string, { publishedOn: string; lastModified: string }>,
)
  .filter(([key]) => CATALOG_KEYS.includes(key))
  .sort(([, a], [, b]) => b.publishedOn.localeCompare(a.publishedOn))
  .slice(0, 5)
  .map(([key, freshness]) => ({ key, date: freshness.publishedOn }));

export { LENS_CATALOG, CATALOG_KEYS, mdForKey, RECENT_LENS_KEYS };
export type { RecentLensEntry };
