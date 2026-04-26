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
  selectedElementA?: number;
  selectedElementB?: number;
  glassMapOpen?: boolean;
  bokehPreviewOpen?: boolean;
  analysisDrawerOpen?: boolean;
  analysisDrawerTab?: string;
}

export interface BuildURLSliders {
  zoom?: number | null;
  focus?: number | null;
  aperture?: number | null;
  selectedElementA?: number | null;
  selectedElementB?: number | null;
  glassMapOpen?: boolean;
  bokehPreviewOpen?: boolean;
  analysisDrawerOpen?: boolean;
  analysisDrawerTab?: string;
}

const VALID_ANALYSIS_TABS = new Set(["aberrations", "coma", "distortion", "breathing", "vignetting", "pupils"]);

function parseBool01(value: string | null): boolean | undefined {
  if (value === "1") return true;
  if (value === "0") return false;
  return undefined;
}

function parseElementId(value: string | null): number | null {
  if (value == null || value === "") return null;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
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

  const selectedElementSingle = parseElementId(params.get("el"));
  const selectedElementA = parseElementId(params.get("ael"));
  const selectedElementB = parseElementId(params.get("bel"));
  const glassMapOpen = parseBool01(params.get("gm"));
  const bokehPreviewOpen = parseBool01(params.get("bo"));
  const analysisDrawerOpen = parseBool01(params.get("ad"));
  const analysisDrawerTabRaw = params.get("tab");
  const analysisDrawerTab =
    analysisDrawerTabRaw && VALID_ANALYSIS_TABS.has(analysisDrawerTabRaw) ? analysisDrawerTabRaw : undefined;

  const sharedViewState = {
    ...(glassMapOpen !== undefined ? { glassMapOpen } : {}),
    ...(bokehPreviewOpen !== undefined ? { bokehPreviewOpen } : {}),
    ...(analysisDrawerOpen !== undefined ? { analysisDrawerOpen } : {}),
    ...(analysisDrawerTab ? { analysisDrawerTab } : {}),
  };

  if (a && b && catalogKeys.includes(a) && catalogKeys.includes(b)) {
    return {
      comparing: true,
      lensKeyA: a,
      lensKeyB: b,
      ...sliders,
      ...sharedViewState,
      ...(selectedElementA != null ? { selectedElementA } : {}),
      ...(selectedElementB != null ? { selectedElementB } : {}),
    };
  }
  const single: string | null = params.get("lens");
  if (single && catalogKeys.includes(single)) {
    return {
      comparing: false,
      singleLens: single,
      ...sliders,
      ...sharedViewState,
      ...(selectedElementSingle != null ? { selectedElementA: selectedElementSingle } : {}),
    };
  }
  return {
    comparing: false,
    ...sliders,
    ...sharedViewState,
    ...(selectedElementSingle != null ? { selectedElementA: selectedElementSingle } : {}),
  };
}

/**
 * Encode slider values into URLSearchParams.
 *
 * Shared encoding logic used by buildComparisonURL, buildComparePath,
 * and the debounced URL updater in useURLSync.
 */
export function encodeSliderParams({ zoom, focus, aperture }: BuildURLSliders): URLSearchParams {
  const params = new URLSearchParams();
  if (zoom != null && zoom > 0) params.set("zoom", String(zoom));
  if (focus != null && focus > 0) params.set("focus", focus.toFixed(3));
  if (aperture != null && aperture > 0) params.set("aperture", aperture.toFixed(3));
  return params;
}

export function encodeAnalysisViewParams({
  selectedElementA,
  selectedElementB,
  glassMapOpen,
  bokehPreviewOpen,
  analysisDrawerOpen,
  analysisDrawerTab,
}: BuildURLSliders): URLSearchParams {
  const params = new URLSearchParams();
  if (selectedElementA != null && selectedElementA > 0) params.set("ael", String(selectedElementA));
  if (selectedElementB != null && selectedElementB > 0) params.set("bel", String(selectedElementB));
  if (glassMapOpen) params.set("gm", "1");
  if (bokehPreviewOpen) params.set("bo", "1");
  if (analysisDrawerOpen) params.set("ad", "1");
  if (analysisDrawerTab && VALID_ANALYSIS_TABS.has(analysisDrawerTab) && analysisDrawerTab !== "aberrations") {
    params.set("tab", analysisDrawerTab);
  }
  return params;
}

function mergeParams(base: URLSearchParams, extras: URLSearchParams): URLSearchParams {
  const merged = new URLSearchParams(base);
  extras.forEach((value, key) => merged.set(key, value));
  return merged;
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
  const sliderParams = encodeSliderParams(sliders);
  const viewParams = encodeAnalysisViewParams(sliders);
  const params = mergeParams(sliderParams, viewParams);
  const suffix = params.toString();
  if (suffix) url += `&${suffix}`;

  if (!comparing && lensKeyA) {
    const singleElement = params.get("ael");
    if (singleElement) {
      params.delete("ael");
      params.set("el", singleElement);
      url = `?lens=${encodeURIComponent(lensKeyA)}`;
      const singleSuffix = params.toString();
      if (singleSuffix) url += `&${singleSuffix}`;
    }
  }

  return url;
}
