/**
 * URL parameter parsing/encoding for lens comparison mode.
 *
 * Supports:
 *   ?a=KEY&b=KEY   — comparison mode (two lenses)
 *   ?lens=KEY      — single lens deep link
 */

/**
 * Parse URL search string into comparison state.
 * @param {string} search - window.location.search
 * @param {string[]} catalogKeys - valid lens keys
 * @returns {{ comparing: boolean, lensKeyA?: string, lensKeyB?: string, singleLens?: string }}
 */
export function parseComparisonParams(search, catalogKeys) {
  const params = new URLSearchParams(search);
  const a = params.get('a');
  const b = params.get('b');
  if (a && b && catalogKeys.includes(a) && catalogKeys.includes(b)) {
    return { comparing: true, lensKeyA: a, lensKeyB: b };
  }
  const single = params.get('lens');
  if (single && catalogKeys.includes(single)) {
    return { comparing: false, singleLens: single };
  }
  return { comparing: false };
}

/**
 * Build a URL search string from comparison state.
 * @param {boolean} comparing
 * @param {string} lensKeyA
 * @param {string} [lensKeyB]
 * @returns {string} - e.g. "?a=NikkorZ50&b=Nokton50" or "?lens=NikkorZ50" or ""
 */
export function buildComparisonURL(comparing, lensKeyA, lensKeyB) {
  if (comparing && lensKeyA && lensKeyB) {
    return `?a=${encodeURIComponent(lensKeyA)}&b=${encodeURIComponent(lensKeyB)}`;
  }
  if (lensKeyA) {
    return `?lens=${encodeURIComponent(lensKeyA)}`;
  }
  return '';
}
