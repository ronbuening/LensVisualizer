/**
 * Lens catalog — auto-registered from lens-data/*.data.js
 *
 * Shared by LensViewer and LensDiagramPanel so the import.meta.glob
 * calls are not duplicated.
 */

import LENS_DEFAULTS from '../lens-data/defaults.js';

/* Eagerly import all *.data.js files — Vite resolves the glob at build time.
 * Each module's default export is a LENS_DATA object; defaults are merged
 * underneath so per-lens values take precedence. */
const _modules = import.meta.glob('../lens-data/*.data.js', { eager: true });
const LENS_CATALOG = {};
for (const [path, mod] of Object.entries(_modules)) {
  const data = mod.default;
  if (data?.key) {
    LENS_CATALOG[data.key] = { ...LENS_DEFAULTS, ...data };
  } else {
    console.warn(`[LensVisualizer] Skipped ${path}: no "key" field in default export`);
  }
}
/* Visible lenses sorted alphabetically by display name */
const CATALOG_KEYS = Object.keys(LENS_CATALOG)
  .filter(k => LENS_CATALOG[k].visible !== false)
  .sort((a, b) => LENS_CATALOG[a].name.localeCompare(LENS_CATALOG[b].name));

const _mdModules = import.meta.glob('../lens-data/*.analysis.md', { eager: true, query: '?raw', import: 'default' });
const MD_BY_STEM = {};
for (const [path, raw] of Object.entries(_mdModules)) {
  const stem = path.replace('../lens-data/', '').replace('.analysis.md', '');
  MD_BY_STEM[stem] = raw;
}

/* Map lens key → data file stem so we can find the matching .analysis.md */
const KEY_TO_STEM = {};
for (const [path, mod] of Object.entries(_modules)) {
  const stem = path.replace('../lens-data/', '').replace('.data.js', '').replace('.js', '');
  if (mod.default?.key) KEY_TO_STEM[mod.default.key] = stem;
}

/**
 * Look up the raw markdown analysis content for a lens key.
 *
 * @param {string} key  — lens catalog key (e.g. "nikon-z-50-f12")
 * @returns {string|null}  raw markdown string, or null if no analysis file exists
 */
function mdForKey(key) {
  const stem = KEY_TO_STEM[key];
  return stem ? (MD_BY_STEM[stem] || null) : null;
}

export { LENS_CATALOG, CATALOG_KEYS, mdForKey };
