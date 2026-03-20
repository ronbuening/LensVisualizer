/**
 * Lens catalog — auto-registers all lens data files under ./lens-data/
 *
 * Exports:
 *   LENS_CATALOG  — { key: mergedLensData } for every lens
 *   CATALOG_KEYS  — visible lens keys (in file-discovery order)
 *   mdForKey(key) — returns the matching .analysis.md content, or null
 */

import LENS_DEFAULTS from './lens-data/defaults.js';

const _modules = import.meta.glob('./lens-data/*.data.js', { eager: true });
const LENS_CATALOG = {};
for (const mod of Object.values(_modules)) {
  const data = mod.default;
  if (data?.key) LENS_CATALOG[data.key] = { ...LENS_DEFAULTS, ...data };
}
const CATALOG_KEYS = Object.keys(LENS_CATALOG).filter(k => LENS_CATALOG[k].visible !== false);

const _mdModules = import.meta.glob('./lens-data/*.analysis.md', { eager: true, query: '?raw', import: 'default' });
const MD_BY_STEM = {};
for (const [path, raw] of Object.entries(_mdModules)) {
  const stem = path.replace('./lens-data/', '').replace('.analysis.md', '');
  MD_BY_STEM[stem] = raw;
}

/* Map lens key → data file stem so we can find the matching .analysis.md */
const KEY_TO_STEM = {};
for (const [path, mod] of Object.entries(_modules)) {
  const stem = path.replace('./lens-data/', '').replace('.data.js', '').replace('.js', '');
  if (mod.default?.key) KEY_TO_STEM[mod.default.key] = stem;
}

function mdForKey(key) {
  const stem = KEY_TO_STEM[key];
  return stem ? (MD_BY_STEM[stem] || null) : null;
}

export { LENS_CATALOG, CATALOG_KEYS, mdForKey };
