/**
 * Legacy URL parameter parsing/encoding for lens state. Kept for backward
 * compatibility with the pre-route comparison query (`?a=KEY&b=KEY` /
 * `?lens=KEY`) and for callers that want lens-key resolution alongside
 * sliders. Newer code should prefer `lensViewUrlState.ts` for view-state
 * parsing and `parseLensKeysFromSearch` (below) for lens-key-only resolution.
 *
 * Supports:
 *   ?a=KEY&b=KEY           — comparison mode (two lenses)
 *   ?lens=KEY              — single lens deep link
 *   &zoom=50               — focal length in mm (zoom lenses)
 *   &focus=0.3             — focusT 0-1
 *   &aperture=0.5          — stopdownT 0-1
 */

import { buildLensViewQuery, parseLensViewQuery } from "./lensViewUrlState.js";

/* Re-export zoom utilities (moved to dedicated module) for backward compatibility */
export { focalLengthToZoomT, zoomTToFocalLength } from "./zoomConversion.js";

/* Re-export buildComparePath (moved to comparison module) for backward compatibility */
export { buildComparePath } from "../comparison/comparisonURLSync.js";

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

export interface BuildURLSliders {
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
interface ParsedLensKeys {
  comparing: boolean;
  lensKeyA?: string;
  lensKeyB?: string;
  singleLens?: string;
}

/**
 * Resolve lens key(s) from a search string against the catalog. Cheap and
 * independent of slider/view-state parsing — callers that have already
 * parsed `parseLensViewQuery` use this to avoid re-parsing query params
 * via the heavier `parseComparisonParams`.
 */
export function parseLensKeysFromSearch(search: string, catalogKeys: string[]): ParsedLensKeys {
  const params = new URLSearchParams(search);
  const a = params.get("a");
  const b = params.get("b");
  if (a && b && catalogKeys.includes(a) && catalogKeys.includes(b)) {
    return { comparing: true, lensKeyA: a, lensKeyB: b };
  }
  const single = params.get("lens");
  if (single && catalogKeys.includes(single)) {
    return { comparing: false, singleLens: single };
  }
  return { comparing: false };
}

export function parseComparisonParams(search: string, catalogKeys: string[]): ParsedComparisonParams {
  const viewState = parseLensViewQuery(search);
  const sliders: ParsedSliders = {
    zoom: viewState.zoom ?? null,
    focus: viewState.focus ?? null,
    aperture: viewState.aperture ?? null,
  };
  return { ...parseLensKeysFromSearch(search, catalogKeys), ...sliders };
}

/**
 * Encode slider values into URLSearchParams.
 *
 * Shared encoding logic used by buildComparisonURL, buildComparePath,
 * and the debounced URL updater in useURLSync.
 */
export function encodeSliderParams({ zoom, focus, aperture }: BuildURLSliders): URLSearchParams {
  return buildLensViewQuery({ zoom, focus, aperture });
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
  sliders: BuildURLSliders = {},
): string {
  let url: string;
  if (comparing && lensKeyA && lensKeyB) {
    url = `?a=${encodeURIComponent(lensKeyA)}&b=${encodeURIComponent(lensKeyB)}`;
  } else if (lensKeyA) {
    url = `?lens=${encodeURIComponent(lensKeyA)}`;
  } else {
    return "";
  }
  const params = encodeSliderParams(sliders);
  const suffix = params.toString();
  if (suffix) url += `&${suffix}`;
  return url;
}
