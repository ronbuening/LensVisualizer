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

import type { RuntimeLens } from "../types/optics.js";

interface ParsedSliders {
  zoom: number | null;
  focus: number | null;
  aperture: number | null;
}

interface ParsedComparisonParams extends ParsedSliders {
  comparing: boolean;
  lensKeyA?: string;
  lensKeyB?: string;
  singleLens?: string;
}

interface BuildURLSliders {
  zoom?: number | null;
  focus?: number | null;
  aperture?: number | null;
}

/**
 * Parse URL search string into lens + slider state.
 *
 * @param search      — window.location.search
 * @param catalogKeys — valid lens keys (used to reject stale URLs)
 * @returns parsed state
 */
export function parseComparisonParams(search: string, catalogKeys: string[]): ParsedComparisonParams {
  const params: URLSearchParams = new URLSearchParams(search);
  const a: string | null = params.get("a");
  const b: string | null = params.get("b");

  const zoom: number = parseFloat(params.get("zoom") as string);
  const focus: number = parseFloat(params.get("focus") as string);
  const aperture: number = parseFloat(params.get("aperture") as string);

  const sliders: ParsedSliders = {
    zoom: isFinite(zoom) && zoom > 0 ? zoom : null,
    focus: isFinite(focus) ? Math.max(0, Math.min(1, focus)) : null,
    aperture: isFinite(aperture) ? Math.max(0, Math.min(1, aperture)) : null,
  };

  if (a && b && catalogKeys.includes(a) && catalogKeys.includes(b)) {
    return { comparing: true, lensKeyA: a, lensKeyB: b, ...sliders };
  }
  const single: string | null = params.get("lens");
  if (single && catalogKeys.includes(single)) {
    return { comparing: false, singleLens: single, ...sliders };
  }
  return { comparing: false, ...sliders };
}

/**
 * Build a URL search string from lens + slider state.
 *
 * @param comparing — true for comparison mode (?a=...&b=...)
 * @param lensKeyA  — first lens key
 * @param lensKeyB  — second lens key (comparison mode only)
 * @param sliders   — optional slider values { zoom, focus, aperture }
 * @returns URL search string (e.g. "?a=...&b=...&focus=0.300")
 */
export function buildComparisonURL(
  comparing: boolean,
  lensKeyA: string,
  lensKeyB: string,
  { zoom, focus, aperture }: BuildURLSliders = {},
): string {
  let url: string;
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
 * @param fl — focal length in mm
 * @param L  — runtime lens object (needs isZoom, zoomPositions)
 * @returns normalized zoom position [0..1]
 */
export function focalLengthToZoomT(fl: number, L: RuntimeLens): number {
  if (!L.isZoom) return 0;
  const zp: number[] = L.zoomPositions!;
  if (fl <= zp[0]) return 0;
  if (fl >= zp[zp.length - 1]) return 1;
  for (let i: number = 0; i < zp.length - 1; i++) {
    if (fl >= zp[i] && fl <= zp[i + 1]) {
      return (i + (fl - zp[i]) / (zp[i + 1] - zp[i])) / (zp.length - 1);
    }
  }
  return 0;
}

/**
 * Convert normalized zoomT [0..1] to focal length in mm.
 *
 * @param zoomT — normalized zoom position [0..1]
 * @param L     — runtime lens object (needs isZoom, zoomPositions)
 * @returns focal length in mm, or null for prime lenses
 */
/**
 * Build a pathname-based comparison URL.
 *
 * @param slugA   — first lens key
 * @param slugB   — second lens key
 * @param sliders — optional slider values { zoom, focus, aperture }
 * @returns URL path (e.g. "/compare/slugA/slugB?focus=0.300")
 */
export function buildComparePath(slugA: string, slugB: string, sliders: BuildURLSliders = {}): string {
  const { zoom, focus, aperture } = sliders;
  const params = new URLSearchParams();
  if (zoom != null && zoom > 0) params.set("zoom", String(zoom));
  if (focus != null && focus > 0) params.set("focus", focus.toFixed(3));
  if (aperture != null && aperture > 0) params.set("aperture", aperture.toFixed(3));
  const search = params.toString() ? `?${params.toString()}` : "";
  return `/compare/${encodeURIComponent(slugA)}/${encodeURIComponent(slugB)}${search}`;
}

export function zoomTToFocalLength(zoomT: number, L: RuntimeLens): number | null {
  if (!L.isZoom) return null;
  const zp: number[] = L.zoomPositions!;
  const pos: number = zoomT * (zp.length - 1);
  const idx: number = Math.min(Math.floor(pos), zp.length - 2);
  const frac: number = pos - idx;
  return zp[idx] + (zp[idx + 1] - zp[idx]) * frac;
}
