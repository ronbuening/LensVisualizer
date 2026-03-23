/**
 * URL parameter parsing/encoding for lens state.
 *
 * Supports:
 *   ?a=KEY&b=KEY           — comparison mode (two lenses)
 *   ?lens=KEY              — single lens deep link
 *   &zoom=50               — focal length in mm (zoom lenses)
 *   &focus=0.3             — focusT 0-1
 *   &aperture=0.5          — stopdownT 0-1
 */

/**
 * Parse URL search string into lens + slider state.
 *
 * @param {string}   search      — window.location.search
 * @param {string[]} catalogKeys — valid lens keys (used to reject stale URLs)
 * @returns {Object} parsed state with { comparing, lensKeyA?, lensKeyB?,
 *   singleLens?, zoom?, focus?, aperture? }
 */
export function parseComparisonParams(search, catalogKeys) {
  const params = new URLSearchParams(search);
  const a = params.get("a");
  const b = params.get("b");

  const zoom = parseFloat(params.get("zoom"));
  const focus = parseFloat(params.get("focus"));
  const aperture = parseFloat(params.get("aperture"));

  const sliders = {
    zoom: isFinite(zoom) && zoom > 0 ? zoom : null,
    focus: isFinite(focus) ? Math.max(0, Math.min(1, focus)) : null,
    aperture: isFinite(aperture) ? Math.max(0, Math.min(1, aperture)) : null,
  };

  if (a && b && catalogKeys.includes(a) && catalogKeys.includes(b)) {
    return { comparing: true, lensKeyA: a, lensKeyB: b, ...sliders };
  }
  const single = params.get("lens");
  if (single && catalogKeys.includes(single)) {
    return { comparing: false, singleLens: single, ...sliders };
  }
  return { comparing: false, ...sliders };
}

/**
 * Build a URL search string from lens + slider state.
 *
 * @param {boolean} comparing  — true for comparison mode (?a=...&b=...)
 * @param {string}  lensKeyA   — first lens key
 * @param {string}  lensKeyB   — second lens key (comparison mode only)
 * @param {Object}  [sliders]  — optional slider values { zoom, focus, aperture }
 * @returns {string}             URL search string (e.g. "?a=...&b=...&focus=0.300")
 */
export function buildComparisonURL(comparing, lensKeyA, lensKeyB, { zoom, focus, aperture } = {}) {
  let url;
  if (comparing && lensKeyA && lensKeyB) {
    url = `?a=${encodeURIComponent(lensKeyA)}&b=${encodeURIComponent(lensKeyB)}`;
  } else if (lensKeyA) {
    url = `?lens=${encodeURIComponent(lensKeyA)}`;
  } else {
    return "";
  }
  if (zoom != null && zoom > 0) url += `&zoom=${zoom}`;
  if (focus != null && focus > 0) url += `&focus=${focus.toFixed(3)}`;
  if (aperture != null && aperture > 0) url += `&aperture=${aperture.toFixed(3)}`;
  return url;
}

/**
 * Convert a focal length in mm to normalized zoomT [0..1].
 *
 * Performs piecewise-linear inverse interpolation across the lens's
 * zoomPositions array.  Clamps to [0, 1] for out-of-range values.
 *
 * @param {number} fl  — focal length in mm
 * @param {Object} L   — runtime lens object (needs isZoom, zoomPositions)
 * @returns {number}     normalized zoom position [0..1]
 */
export function focalLengthToZoomT(fl, L) {
  if (!L.isZoom) return 0;
  const zp = L.zoomPositions;
  if (fl <= zp[0]) return 0;
  if (fl >= zp[zp.length - 1]) return 1;
  for (let i = 0; i < zp.length - 1; i++) {
    if (fl >= zp[i] && fl <= zp[i + 1]) {
      return (i + (fl - zp[i]) / (zp[i + 1] - zp[i])) / (zp.length - 1);
    }
  }
  return 0;
}

/**
 * Convert normalized zoomT [0..1] to focal length in mm.
 *
 * @param {number} zoomT  — normalized zoom position [0..1]
 * @param {Object} L      — runtime lens object (needs isZoom, zoomPositions)
 * @returns {number|null}    focal length in mm, or null for prime lenses
 */
export function zoomTToFocalLength(zoomT, L) {
  if (!L.isZoom) return null;
  const zp = L.zoomPositions;
  const pos = zoomT * (zp.length - 1);
  const idx = Math.min(Math.floor(pos), zp.length - 2);
  const frac = pos - idx;
  return zp[idx] + (zp[idx + 1] - zp[idx]) * frac;
}
