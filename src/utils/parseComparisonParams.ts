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
export function parseComparisonParams(search: string, catalogKeys: string[]): ParsedComparisonParams {
  const params: URLSearchParams = new URLSearchParams(search);
  const a: string | null = params.get("a");
  const b: string | null = params.get("b");

  const viewState = parseLensViewQuery(search);

  const sliders: ParsedSliders = {
    zoom: viewState.zoom ?? null,
    focus: viewState.focus ?? null,
    aperture: viewState.aperture ?? null,
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
