/**
 * lensViewUrlState — single source of truth for parsing and building the
 * shareable lens-view query string.
 *
 * Stable params (`focus`, `aperture`, `zoom`) are parsed regardless of the
 * `v` version param. v1-gated params (selection, overlay open-state,
 * analysis tab) are only honored when `v=1`; unknown versions silently
 * drop them so older clients do not misread future schemas.
 */

import { isAnalysisTabId, type LensState, type URLState } from "../types/state.js";

type LensViewQueryKey =
  | "focus"
  | "aperture"
  | "zoom"
  | "selectedElementId"
  | "selectedElementIdA"
  | "selectedElementIdB"
  | "glassMapOpen"
  | "bokehPreviewOpen"
  | "analysisDrawerOpen"
  | "analysisDrawerTab";
type NullableLensViewQueryKey = "focus" | "aperture" | "zoom";

export type LensViewQueryState = Partial<
  Omit<Pick<URLState, LensViewQueryKey>, NullableLensViewQueryKey> & {
    [K in NullableLensViewQueryKey]: URLState[K] | null;
  }
>;

export interface BuildLensViewQueryOptions extends LensViewQueryState {
  comparing?: boolean;
}

/**
 * Canonical list of v1 view-state fields shared by parsing, hydration, and
 * the reducer. To add a new shareable field: extend this list, add the
 * matching `URLState` / `PanelsSlice` entry, and wire build/parse keys.
 */
export const VIEW_STATE_FIELDS = [
  { key: "selectedElementId", default: null as number | null },
  { key: "selectedElementIdA", default: null as number | null },
  { key: "selectedElementIdB", default: null as number | null },
  { key: "glassMapOpen", default: false },
  { key: "bokehPreviewOpen", default: false },
  { key: "analysisDrawerOpen", default: false },
] as const;

export type ViewStateField = (typeof VIEW_STATE_FIELDS)[number];
export type ViewStateFieldKey = ViewStateField["key"];

const DEFAULT_URL_STATE: Partial<URLState> = {
  focus: 0,
  aperture: 0,
  zoom: 0,
  selectedElementId: null,
  selectedElementIdA: null,
  selectedElementIdB: null,
  glassMapOpen: false,
  bokehPreviewOpen: false,
  analysisDrawerOpen: false,
  analysisDrawerTab: "aberrations",
};

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
  const usesV1ViewState =
    (comparing ? selectedElementIdA != null || selectedElementIdB != null : selectedElementId != null) ||
    Boolean(glassMapOpen) ||
    Boolean(bokehPreviewOpen) ||
    Boolean(analysisDrawerOpen);

  const params = new URLSearchParams();
  if (usesV1ViewState) params.set("v", "1");
  if (zoom != null && zoom > 0) params.set("zoom", String(zoom));
  if (focus != null && focus > 0) params.set("focus", focus.toFixed(3));
  if (aperture != null && aperture > 0) params.set("aperture", aperture.toFixed(3));

  if (comparing) {
    if (selectedElementIdA != null) params.set("a_el", String(selectedElementIdA));
    if (selectedElementIdB != null) params.set("b_el", String(selectedElementIdB));
  } else if (selectedElementId != null) {
    params.set("el", String(selectedElementId));
  }

  if (glassMapOpen) params.set("gm", "1");
  if (bokehPreviewOpen) params.set("bo", "1");
  if (analysisDrawerOpen) params.set("ad", "1");
  if (analysisDrawerOpen && analysisDrawerTab && analysisDrawerTab !== "aberrations") {
    params.set("tab", analysisDrawerTab);
  }

  return params;
}

export function buildLensViewQueryFromState(state: LensState, zoom: number | null | undefined): URLSearchParams {
  const { comparing } = state.lens;
  const sliders = comparing
    ? { focus: state.sharedSliders.sharedFocusT, aperture: state.sharedSliders.sharedStopdownT }
    : { focus: state.sliders.focusT, aperture: state.sliders.stopdownT };

  return buildLensViewQuery({
    comparing,
    ...sliders,
    zoom,
    selectedElementId: state.panels.selectedElementId,
    selectedElementIdA: state.panels.selectedElementIdA,
    selectedElementIdB: state.panels.selectedElementIdB,
    glassMapOpen: state.panels.glassMapOpen,
    bokehPreviewOpen: state.panels.bokehPreviewOpen,
    analysisDrawerOpen: state.panels.analysisDrawerOpen,
    analysisDrawerTab: state.panels.analysisDrawerTab,
  });
}

export function lensViewQueryToUrlState(state: LensViewQueryState, includeViewDefaults = false): Partial<URLState> {
  const urlState: Partial<URLState> = includeViewDefaults ? { ...DEFAULT_URL_STATE } : {};
  if (state.focus != null) urlState.focus = state.focus;
  if (state.aperture != null) urlState.aperture = state.aperture;
  if (state.zoom != null) urlState.zoom = state.zoom;
  for (const { key, default: fallback } of VIEW_STATE_FIELDS) {
    if (includeViewDefaults || key in state) {
      (urlState as Record<string, unknown>)[key] = state[key] ?? fallback;
    }
  }
  if (state.analysisDrawerTab) urlState.analysisDrawerTab = state.analysisDrawerTab;
  return urlState;
}
