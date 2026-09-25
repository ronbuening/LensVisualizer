/**
 * lensViewUrlState — single source of truth for parsing and building the
 * shareable lens-view query string.
 *
 * Stable params (`focus`, `aberration`, `aperture`, `zoom`, `shift`, `tilt`) are parsed regardless of the
 * `v` version param. v1-gated params (selection, overlay open-state,
 * analysis tab) are only honored when `v=1`; unknown versions silently
 * drop them so older clients do not misread future schemas.
 */

import { isAnalysisTabId, type LensState, type URLState } from "../../types/state.js";
import { isGroupMovementMode } from "../../types/groupMovement.js";
import { MOVEMENT_SHIFT_ENVELOPE_MM, MOVEMENT_TILT_ENVELOPE_DEG } from "../../optics/lensMovement.js";
import { LENS_KEY_PATTERN } from "../../optics/validateLensData.js";

type LensViewQueryKey =
  | "focus"
  | "aberration"
  | "aperture"
  | "zoom"
  | "shift"
  | "tilt"
  | "configurationKey"
  | "sourceStateId"
  | "comparisonFocusZoom"
  | "sourceStateIdA"
  | "sourceStateIdB"
  | "selectedElementId"
  | "selectedElementIdA"
  | "selectedElementIdB"
  | "glassMapOpen"
  | "chromaticOverlayOpen"
  | "petzvalOverlayOpen"
  | "analysisDrawerOpen"
  | "analysisDrawerTab"
  | "groupMovementOpen"
  | "groupMovementMode";
type NullableLensViewQueryKey = "focus" | "aberration" | "aperture" | "zoom" | "shift" | "tilt";

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
  { key: "chromaticOverlayOpen", default: false },
  { key: "petzvalOverlayOpen", default: false },
  { key: "analysisDrawerOpen", default: false },
  { key: "groupMovementOpen", default: false },
] as const;

export type ViewStateField = (typeof VIEW_STATE_FIELDS)[number];
export type ViewStateFieldKey = ViewStateField["key"];

const DEFAULT_URL_STATE: Partial<URLState> = {
  comparisonFocusZoom: { mode: "linked" },
  focus: 0,
  aberration: 0,
  aperture: 0,
  zoom: 0,
  shift: 0,
  tilt: 0,
  selectedElementId: null,
  selectedElementIdA: null,
  selectedElementIdB: null,
  glassMapOpen: false,
  chromaticOverlayOpen: false,
  petzvalOverlayOpen: false,
  analysisDrawerOpen: false,
  analysisDrawerTab: "aberrations",
  groupMovementOpen: false,
  groupMovementMode: "focus",
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

function parseClampedParam(params: URLSearchParams, key: string, [min, max]: [number, number]): number | null {
  const parsed = parseNumberParam(params, key);
  if (parsed == null) return null;
  return Math.max(min, Math.min(max, parsed));
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

/* Syntactic bound only — catalog-aware validation happens at the lens-aware
   boundaries. The shape is the validator's LENS_KEY_PATTERN, so every key
   validateLensData accepts is representable as a cfg value. */
const CONFIGURATION_KEY_MAX_LENGTH = 128;

function parseConfigurationKey(params: URLSearchParams): string | undefined {
  const key = params.get("cfg");
  if (!key || key.length > CONFIGURATION_KEY_MAX_LENGTH || !LENS_KEY_PATTERN.test(key)) return undefined;
  return key;
}

function parseSourceStateId(params: URLSearchParams, key: string): string | undefined {
  const id = params.get(key);
  return id && /^[a-z0-9][a-z0-9-]{0,127}:[a-z0-9][a-z0-9-]{0,63}$/.test(id) ? id : undefined;
}

export function parseLensViewQuery(search: string): LensViewQueryState {
  const params = new URLSearchParams(search);
  const state: LensViewQueryState = {
    focus: parseUnitParam(params, "focus"),
    aberration: parseClampedParam(params, "aberration", [-1, 1]),
    aperture: parseUnitParam(params, "aperture"),
    zoom: parseZoomParam(params),
  };
  const shift = parseClampedParam(params, "shift", MOVEMENT_SHIFT_ENVELOPE_MM);
  const tilt = parseClampedParam(params, "tilt", MOVEMENT_TILT_ENVELOPE_DEG);
  if (shift != null) state.shift = shift;
  if (tilt != null) state.tilt = tilt;

  const version = params.get("v");
  if (version != null && version !== "1") return state;

  const selectedElementId = parseElementId(params, "el");
  const selectedElementIdA = parseElementId(params, "a_el");
  const selectedElementIdB = parseElementId(params, "b_el");
  const glassMapOpen = parseBooleanParam(params, "gm");
  const chromaticOverlayOpen = parseBooleanParam(params, "chr");
  const petzvalOverlayOpen = parseBooleanParam(params, "ptz");
  const analysisDrawerOpen = parseBooleanParam(params, "ad");
  const movementMode = params.get("mv");
  const tab = params.get("tab");
  const configurationKey = version === "1" ? parseConfigurationKey(params) : undefined;

  if (selectedElementId != null) state.selectedElementId = selectedElementId;
  if (selectedElementIdA != null) state.selectedElementIdA = selectedElementIdA;
  if (selectedElementIdB != null) state.selectedElementIdB = selectedElementIdB;
  if (glassMapOpen !== undefined) state.glassMapOpen = glassMapOpen;
  if (chromaticOverlayOpen !== undefined) state.chromaticOverlayOpen = chromaticOverlayOpen;
  if (petzvalOverlayOpen !== undefined) state.petzvalOverlayOpen = petzvalOverlayOpen;
  if (analysisDrawerOpen !== undefined) state.analysisDrawerOpen = analysisDrawerOpen;
  if (configurationKey) state.configurationKey = configurationKey;
  if (version === "1") {
    const sourceStateId = parseSourceStateId(params, "ss");
    if (sourceStateId) state.sourceStateId = sourceStateId;
    if (params.get("fz") === "independent") {
      state.comparisonFocusZoom = {
        mode: "independent",
        a: { focusT: parseUnitParam(params, "a_focus") ?? 0, zoomT: parseUnitParam(params, "a_zoom") ?? 0 },
        b: { focusT: parseUnitParam(params, "b_focus") ?? 0, zoomT: parseUnitParam(params, "b_zoom") ?? 0 },
      };
      const a = parseSourceStateId(params, "a_ss");
      const b = parseSourceStateId(params, "b_ss");
      if (a) state.sourceStateIdA = a;
      if (b) state.sourceStateIdB = b;
    }
  }
  if (isAnalysisTabId(tab)) state.analysisDrawerTab = tab;
  if (isGroupMovementMode(movementMode)) {
    state.groupMovementOpen = true;
    state.groupMovementMode = movementMode;
  }

  return state;
}

export function buildLensViewQuery({
  comparing = false,
  zoom,
  focus,
  aperture,
  aberration,
  shift,
  tilt,
  configurationKey,
  sourceStateId,
  comparisonFocusZoom,
  sourceStateIdA,
  sourceStateIdB,
  selectedElementId,
  selectedElementIdA,
  selectedElementIdB,
  glassMapOpen,
  chromaticOverlayOpen,
  petzvalOverlayOpen,
  analysisDrawerOpen,
  analysisDrawerTab,
  groupMovementOpen,
  groupMovementMode,
}: BuildLensViewQueryOptions): URLSearchParams {
  const usesV1ViewState =
    (comparing ? selectedElementIdA != null || selectedElementIdB != null : selectedElementId != null) ||
    (comparing && comparisonFocusZoom?.mode === "independent") ||
    Boolean(glassMapOpen) ||
    Boolean(chromaticOverlayOpen) ||
    Boolean(petzvalOverlayOpen) ||
    Boolean(analysisDrawerOpen) ||
    Boolean(groupMovementOpen) ||
    (!comparing && (Boolean(configurationKey) || Boolean(sourceStateId)));

  const params = new URLSearchParams();
  if (usesV1ViewState) params.set("v", "1");
  if (zoom != null && zoom > 0) params.set("zoom", String(zoom));
  if (focus != null && focus > 0)
    params.set("focus", comparing && Number(focus.toFixed(3)) !== focus ? String(focus) : focus.toFixed(3));
  if (!comparing && aberration != null && Math.abs(aberration) > 1e-9) params.set("aberration", aberration.toFixed(3));
  if (aperture != null && aperture > 0) params.set("aperture", aperture.toFixed(3));
  if (shift != null && Math.abs(shift) > 1e-9) params.set("shift", shift.toFixed(2));
  if (tilt != null && Math.abs(tilt) > 1e-9) params.set("tilt", tilt.toFixed(2));
  if (!comparing && configurationKey) params.set("cfg", configurationKey);
  if (!comparing && sourceStateId) params.set("ss", sourceStateId);

  if (comparing && comparisonFocusZoom?.mode === "independent") {
    params.set("fz", "independent");
    for (const pane of ["a", "b"] as const) {
      const coordinates = comparisonFocusZoom[pane];
      if (coordinates.focusT > 0) params.set(`${pane}_focus`, String(coordinates.focusT));
      if (coordinates.zoomT > 0) params.set(`${pane}_zoom`, String(coordinates.zoomT));
    }
    if (sourceStateIdA) params.set("a_ss", sourceStateIdA);
    if (sourceStateIdB) params.set("b_ss", sourceStateIdB);
  }
  if (comparing) {
    if (selectedElementIdA != null) params.set("a_el", String(selectedElementIdA));
    if (selectedElementIdB != null) params.set("b_el", String(selectedElementIdB));
  } else if (selectedElementId != null) {
    params.set("el", String(selectedElementId));
  }

  if (glassMapOpen) params.set("gm", "1");
  if (chromaticOverlayOpen) params.set("chr", "1");
  if (petzvalOverlayOpen) params.set("ptz", "1");
  if (analysisDrawerOpen) params.set("ad", "1");
  if (analysisDrawerOpen && analysisDrawerTab && analysisDrawerTab !== "aberrations") {
    params.set("tab", analysisDrawerTab);
  }
  if (groupMovementOpen) params.set("mv", groupMovementMode ?? "focus");

  return params;
}

export function buildLensViewQueryFromState(
  state: LensState,
  zoom: number | null | undefined,
  sourceStateId?: string,
  paneSourceIds: { a?: string; b?: string } = {},
): URLSearchParams {
  const { comparing } = state.lens;
  const sliders = comparing
    ? {
        focus: state.sharedSliders.sharedFocusT,
        aperture: state.sharedSliders.sharedStopdownT,
        shift: state.sharedSliders.sharedShiftMm,
        tilt: state.sharedSliders.sharedTiltDeg,
      }
    : {
        focus: state.sliders.focusT,
        aberration: state.sliders.aberrationT,
        aperture: state.sliders.stopdownT,
        shift: state.sliders.shiftMm,
        tilt: state.sliders.tiltDeg,
      };

  return buildLensViewQuery({
    comparing,
    ...sliders,
    zoom,
    sourceStateId,
    comparisonFocusZoom: state.sharedSliders.focusZoom,
    sourceStateIdA: paneSourceIds.a,
    sourceStateIdB: paneSourceIds.b,
    configurationKey:
      !comparing && state.lens.selectedConfigurationKey !== state.lens.lensKeyA
        ? state.lens.selectedConfigurationKey
        : undefined,
    selectedElementId: state.panels.selectedElementId,
    selectedElementIdA: state.panels.selectedElementIdA,
    selectedElementIdB: state.panels.selectedElementIdB,
    glassMapOpen: state.panels.glassMapOpen,
    chromaticOverlayOpen: state.panels.chromaticOverlayOpen,
    petzvalOverlayOpen: state.panels.petzvalOverlayOpen,
    analysisDrawerOpen: state.panels.analysisDrawerOpen,
    analysisDrawerTab: state.panels.analysisDrawerTab,
    groupMovementOpen: state.panels.groupMovementOpen,
    groupMovementMode: state.panels.groupMovementMode,
  });
}

export function lensViewQueryToUrlState(state: LensViewQueryState, includeViewDefaults = false): Partial<URLState> {
  const urlState: Partial<URLState> = includeViewDefaults ? { ...DEFAULT_URL_STATE } : {};
  if (state.focus != null) urlState.focus = state.focus;
  if (state.aberration != null) urlState.aberration = state.aberration;
  if (state.aperture != null) urlState.aperture = state.aperture;
  if (state.zoom != null) urlState.zoom = state.zoom;
  if (state.shift != null) urlState.shift = state.shift;
  if (state.tilt != null) urlState.tilt = state.tilt;
  if (state.configurationKey) urlState.configurationKey = state.configurationKey;
  if (state.sourceStateId) urlState.sourceStateId = state.sourceStateId;
  if (state.comparisonFocusZoom) urlState.comparisonFocusZoom = state.comparisonFocusZoom;
  if (state.sourceStateIdA) urlState.sourceStateIdA = state.sourceStateIdA;
  if (state.sourceStateIdB) urlState.sourceStateIdB = state.sourceStateIdB;
  for (const { key, default: fallback } of VIEW_STATE_FIELDS) {
    if (includeViewDefaults || key in state) {
      (urlState as Record<string, unknown>)[key] = state[key] ?? fallback;
    }
  }
  if (state.analysisDrawerTab) urlState.analysisDrawerTab = state.analysisDrawerTab;
  if (state.groupMovementMode) urlState.groupMovementMode = state.groupMovementMode;
  return urlState;
}
