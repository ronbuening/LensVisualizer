/**
 * Persistent preferences — localStorage read/write for user settings.
 */

import { CATALOG_KEYS } from './catalog.js';

export const PREFS_KEY = 'lensvis:prefs';

export function loadPrefs() {
  try {
    const raw = localStorage.getItem(PREFS_KEY);
    if (!raw) return {};
    const p = JSON.parse(raw);
    if (!p || typeof p !== 'object') return {};
    const out = {};
    if (typeof p.dark === 'boolean') out.dark = p.dark;
    if (typeof p.highContrast === 'boolean') out.highContrast = p.highContrast;
    if (typeof p.showOnAxis === 'boolean') out.showOnAxis = p.showOnAxis;
    if (typeof p.showOffAxis === 'boolean') out.showOffAxis = p.showOffAxis;
    if (typeof p.rayTracksF === 'boolean') out.rayTracksF = p.rayTracksF;
    if (typeof p.showChromatic === 'boolean') out.showChromatic = p.showChromatic;
    if (typeof p.chromR === 'boolean') out.chromR = p.chromR;
    if (typeof p.chromG === 'boolean') out.chromG = p.chromG;
    if (typeof p.chromB === 'boolean') out.chromB = p.chromB;
    if (typeof p.lensKey === 'string' && CATALOG_KEYS.includes(p.lensKey)) out.lensKey = p.lensKey;
    return out;
  } catch { return {}; }
}
