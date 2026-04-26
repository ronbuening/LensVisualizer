import { isAnalysisTabId, type AnalysisTabId, type URLState } from "../types/state.js";

export interface LensViewQueryState {
  focus?: number | null;
  aperture?: number | null;
  zoom?: number | null;
  selectedElementId?: number | null;
  selectedElementIdA?: number | null;
  selectedElementIdB?: number | null;
  glassMapOpen?: boolean;
  bokehPreviewOpen?: boolean;
  analysisDrawerOpen?: boolean;
  analysisDrawerTab?: AnalysisTabId;
}

export interface BuildLensViewQueryOptions extends LensViewQueryState {
  comparing?: boolean;
}

function parseNumberParam(params: URLSearchParams, key: string): number | null {
  const value = params.get(key);
  if (value == null || value.trim() === "") return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function parseUnitParam(params: URLSearchParams, key: string): number | null {
  const parsed = parseNumberParam(params, key);
  if (parsed == null) return null;
  return Math.max(0, Math.min(1, parsed));
}

function parseZoomParam(params: URLSearchParams): number | null {
  const parsed = parseNumberParam(params, "zoom");
  return parsed != null && parsed > 0 ? parsed : null;
}

function parseElementId(params: URLSearchParams, key: string): number | null {
  const parsed = parseNumberParam(params, key);
  if (parsed == null || !Number.isInteger(parsed) || parsed <= 0) return null;
  return parsed;
}

function parseBooleanParam(params: URLSearchParams, key: string): boolean | undefined {
  const value = params.get(key);
  if (value === "1") return true;
  if (value === "0" || value == null) return false;
  return undefined;
}

export function parseLensViewQuery(search: string): LensViewQueryState {
  const params = new URLSearchParams(search);
  const state: LensViewQueryState = {
    focus: parseUnitParam(params, "focus"),
    aperture: parseUnitParam(params, "aperture"),
    zoom: parseZoomParam(params),
  };

  const version = params.get("v");
  if (version != null && version !== "1") return state;

  const selectedElementId = parseElementId(params, "el");
  const selectedElementIdA = parseElementId(params, "a_el");
  const selectedElementIdB = parseElementId(params, "b_el");
  const glassMapOpen = parseBooleanParam(params, "gm");
  const bokehPreviewOpen = parseBooleanParam(params, "bo");
  const analysisDrawerOpen = parseBooleanParam(params, "ad");
  const tab = params.get("tab");

  if (selectedElementId != null) state.selectedElementId = selectedElementId;
  if (selectedElementIdA != null) state.selectedElementIdA = selectedElementIdA;
  if (selectedElementIdB != null) state.selectedElementIdB = selectedElementIdB;
  if (glassMapOpen !== undefined) state.glassMapOpen = glassMapOpen;
  if (bokehPreviewOpen !== undefined) state.bokehPreviewOpen = bokehPreviewOpen;
  if (analysisDrawerOpen !== undefined) state.analysisDrawerOpen = analysisDrawerOpen;
  if (isAnalysisTabId(tab)) state.analysisDrawerTab = tab;

  return state;
}

export function buildLensViewQuery({
  comparing = false,
  zoom,
  focus,
  aperture,
  selectedElementId,
  selectedElementIdA,
  selectedElementIdB,
  glassMapOpen,
  bokehPreviewOpen,
  analysisDrawerOpen,
  analysisDrawerTab,
}: BuildLensViewQueryOptions): URLSearchParams {
  const params = new URLSearchParams();
  let usesV1ViewState = false;

  if (zoom != null && zoom > 0) params.set("zoom", String(zoom));
  if (focus != null && focus > 0) params.set("focus", focus.toFixed(3));
  if (aperture != null && aperture > 0) params.set("aperture", aperture.toFixed(3));

  if (comparing) {
    if (selectedElementIdA != null) {
      params.set("a_el", String(selectedElementIdA));
      usesV1ViewState = true;
    }
    if (selectedElementIdB != null) {
      params.set("b_el", String(selectedElementIdB));
      usesV1ViewState = true;
    }
  } else if (selectedElementId != null) {
    params.set("el", String(selectedElementId));
    usesV1ViewState = true;
  }

  if (glassMapOpen) {
    params.set("gm", "1");
    usesV1ViewState = true;
  }
  if (bokehPreviewOpen) {
    params.set("bo", "1");
    usesV1ViewState = true;
  }
  if (analysisDrawerOpen) {
    params.set("ad", "1");
    usesV1ViewState = true;
  }
  if (analysisDrawerOpen && analysisDrawerTab && analysisDrawerTab !== "aberrations") {
    params.set("tab", analysisDrawerTab);
    usesV1ViewState = true;
  }

  if (usesV1ViewState) {
    const ordered = new URLSearchParams();
    ordered.set("v", "1");
    params.forEach((value, key) => ordered.set(key, value));
    return ordered;
  }
  return params;
}

export function lensViewQueryToUrlState(state: LensViewQueryState, includeViewDefaults = false): Partial<URLState> {
  const urlState: Partial<URLState> = {};
  if ("focus" in state && state.focus != null) {
    urlState.focus = state.focus;
  } else if (includeViewDefaults) {
    urlState.focus = 0;
  }
  if ("aperture" in state && state.aperture != null) {
    urlState.aperture = state.aperture;
  } else if (includeViewDefaults) {
    urlState.aperture = 0;
  }
  if ("zoom" in state && state.zoom != null) {
    urlState.zoom = state.zoom;
  } else if (includeViewDefaults) {
    urlState.zoom = 0;
  }
  if (includeViewDefaults || "selectedElementId" in state) urlState.selectedElementId = state.selectedElementId ?? null;
  if (includeViewDefaults || "selectedElementIdA" in state)
    urlState.selectedElementIdA = state.selectedElementIdA ?? null;
  if (includeViewDefaults || "selectedElementIdB" in state)
    urlState.selectedElementIdB = state.selectedElementIdB ?? null;
  if (includeViewDefaults || "glassMapOpen" in state) urlState.glassMapOpen = state.glassMapOpen ?? false;
  if (includeViewDefaults || "bokehPreviewOpen" in state) urlState.bokehPreviewOpen = state.bokehPreviewOpen ?? false;
  if (includeViewDefaults || "analysisDrawerOpen" in state)
    urlState.analysisDrawerOpen = state.analysisDrawerOpen ?? false;
  if (state.analysisDrawerTab) {
    urlState.analysisDrawerTab = state.analysisDrawerTab;
  } else if (includeViewDefaults) {
    urlState.analysisDrawerTab = "aberrations";
  }
  return urlState;
}
