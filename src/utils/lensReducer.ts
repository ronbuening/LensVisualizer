/**
 * Pure reducer for LensViewer state management.
 *
 * Organizes 24 formerly-independent useState values into 7 logical slices.
 * No React dependencies — all functions are pure and testable.
 *
 * Comparison-specific actions are delegated to comparisonReducer.
 */

import { ENABLE_EDGE_PROJECTION } from "./featureFlags.js";
import { DEFAULT_COLOR_TRACING } from "./appConfig.js";
import { readSystemThemePreferences } from "./themePreferences.js";
import {
  isAnalysisTabId,
  isDesktopView,
  isOffAxisMode,
  selectedElementKeyForPanel,
  type LensState,
  type LensAction,
  type Preferences,
  type URLState,
} from "../types/state.js";
import comparisonReducer from "../comparison/comparisonReducer.js";
import { VIEW_STATE_FIELDS } from "./lensViewUrlState.js";

/* ── Action type constants ── */
export const SET_LENS_A = "SET_LENS_A";
export const SET_LENS_B = "SET_LENS_B";
export const SWAP_LENSES = "SWAP_LENSES";
export const SET_DARK = "SET_DARK";
export const SET_HIGH_CONTRAST = "SET_HIGH_CONTRAST";
export const SET_MOBILE_VIEW = "SET_MOBILE_VIEW";
export const SET_DESKTOP_VIEW = "SET_DESKTOP_VIEW";
export const SET_RAY_TOGGLE = "SET_RAY_TOGGLE";
export const SET_FOCUS_T = "SET_FOCUS_T";
export const SET_ZOOM_T = "SET_ZOOM_T";
export const SET_STOPDOWN_T = "SET_STOPDOWN_T";
export const SET_SHIFT_MM = "SET_SHIFT_MM";
export const SET_TILT_DEG = "SET_TILT_DEG";
export const RESET_SLIDERS = "RESET_SLIDERS";
export const SET_PANEL_EXPANDED = "SET_PANEL_EXPANDED";
export const SET_ANALYSIS_TAB = "SET_ANALYSIS_TAB";
export const SET_SELECTED_ELEMENT = "SET_SELECTED_ELEMENT";
export const APPLY_URL_VIEW_STATE = "APPLY_URL_VIEW_STATE";
export const SET_OVERLAY = "SET_OVERLAY";
export const CLOSE_ALL_OVERLAYS = "CLOSE_ALL_OVERLAYS";

/* Re-export comparison action constants for backward compatibility */
export {
  SET_SCALE_MODE,
  SET_SHARED_FOCUS_T,
  SET_SHARED_STOPDOWN_T,
  SET_SHARED_ZOOM_T,
  SET_SHARED_SHIFT_MM,
  SET_SHARED_TILT_DEG,
  ENTER_COMPARE,
  EXIT_COMPARE,
} from "../comparison/comparisonReducer.js";

/* ── Valid fields for generic actions (runtime guards for JS consumers) ── */
const RAY_FIELDS = new Set([
  "showOnAxis",
  "showOffAxis",
  "rayTracksF",
  "showChromatic",
  "chromR",
  "chromG",
  "chromB",
  "showPupils",
]);
const PANEL_FIELDS = new Set([
  "focusExpanded",
  "apertureExpanded",
  "headerControlsExpanded",
  "legendExpanded",
  "headerInfoExpanded",
  "abbeShowGlassType",
  "glassMapOpen",
  "lcaOverlayOpen",
  "petzvalOverlayOpen",
  "showEffectiveAperture",
  "aberrationsExpanded",
  "analysisDrawerOpen",
  "zoomPanActive",
  "bokehPreviewOpen",
]);
const OVERLAY_FIELDS = new Set(["showAbout", "showAboutSite", "showOpticsPrimer", "showAberrationsPrimer"]);

/**
 * Build the initial state by merging URL > prefs > defaults.
 */
export function createInitialState(
  prefs: Partial<Preferences>,
  urlState: Partial<URLState>,
  isWide: boolean,
  catalogKeys: string[],
): LensState {
  const showOffAxisRaw = isOffAxisMode(prefs.showOffAxis) ? prefs.showOffAxis : "off";
  const showOffAxis = !ENABLE_EDGE_PROJECTION && showOffAxisRaw === "edge" ? "trueAngle" : showOffAxisRaw;
  const systemThemePrefs = readSystemThemePreferences();

  return {
    lens: {
      lensKeyA: urlState.singleLens || urlState.lensKeyA || catalogKeys[0],
      lensKeyB: urlState.lensKeyB || catalogKeys[Math.min(1, catalogKeys.length - 1)],
      comparing: urlState.comparing || false,
      scaleMode: prefs.scaleMode || "independent",
    },
    display: {
      /* null = "auto" (follow system preference). Only a stored boolean overrides. */
      dark: prefs.dark !== undefined ? prefs.dark : null,
      highContrast: prefs.highContrast ?? systemThemePrefs.highContrast,
      mobileView: "diagram",
      desktopView: isDesktopView(prefs.desktopView) ? prefs.desktopView : "both",
    },
    rays: {
      showOnAxis: prefs.showOnAxis ?? true,
      showOffAxis,
      rayTracksF: prefs.rayTracksF ?? false,
      showChromatic: prefs.showChromatic ?? DEFAULT_COLOR_TRACING,
      chromR: prefs.chromR ?? true,
      chromG: prefs.chromG ?? true,
      chromB: prefs.chromB ?? true,
      showPupils: prefs.showPupils ?? false,
    },
    sliders: {
      focusT: urlState.focus ?? 0,
      zoomT: 0,
      stopdownT: urlState.aperture ?? 0,
      shiftMm: urlState.shift ?? 0,
      tiltDeg: urlState.tilt ?? 0,
    },
    sharedSliders: {
      sharedFocusT: urlState.comparing ? (urlState.focus ?? 0) : 0,
      sharedStopdownT: urlState.comparing ? (urlState.aperture ?? 0) : 0,
      sharedZoomT: 0,
      sharedShiftMm: urlState.comparing ? (urlState.shift ?? 0) : 0,
      sharedTiltDeg: urlState.comparing ? (urlState.tilt ?? 0) : 0,
    },
    panels: {
      focusExpanded: prefs.focusExpanded ?? isWide,
      apertureExpanded: prefs.apertureExpanded ?? isWide,
      headerControlsExpanded: prefs.headerControlsExpanded ?? false,
      legendExpanded: prefs.legendExpanded ?? false,
      headerInfoExpanded: prefs.headerInfoExpanded ?? true,
      abbeShowGlassType: prefs.abbeShowGlassType ?? true,
      glassMapOpen: urlState.glassMapOpen ?? false,
      lcaOverlayOpen: urlState.lcaOverlayOpen ?? false,
      petzvalOverlayOpen: urlState.petzvalOverlayOpen ?? false,
      showEffectiveAperture: prefs.showEffectiveAperture ?? false,
      aberrationsExpanded: prefs.aberrationsExpanded ?? true,
      analysisDrawerOpen: urlState.analysisDrawerOpen ?? false,
      analysisDrawerTab:
        urlState.analysisDrawerTab ??
        (isAnalysisTabId(prefs.analysisDrawerTab) ? prefs.analysisDrawerTab : "aberrations"),
      zoomPanActive: false,
      bokehPreviewOpen: urlState.bokehPreviewOpen ?? false,
      selectedElementId: urlState.selectedElementId ?? null,
      selectedElementIdA: urlState.selectedElementIdA ?? null,
      selectedElementIdB: urlState.selectedElementIdB ?? null,
    },
    overlays: {
      showAbout: false,
      showAboutSite: false,
      showOpticsPrimer: false,
      showAberrationsPrimer: false,
    },
  };
}

/**
 * Lens state reducer.
 *
 * Comparison-specific actions are delegated to comparisonReducer.
 */
export default function lensReducer(state: LensState, action: LensAction): LensState {
  /* Try comparison sub-reducer first */
  const comparisonResult = comparisonReducer(state, action);
  if (comparisonResult !== null) return comparisonResult;

  switch (action.type) {
    /* ── Lens selection ── */
    case SET_LENS_A: {
      const next = { ...state, lens: { ...state.lens, lensKeyA: action.key } };
      /* In single mode, reset sliders and close analysis drawer when switching lenses */
      if (!state.lens.comparing) {
        next.sliders = { focusT: 0, zoomT: 0, stopdownT: 0, shiftMm: 0, tiltDeg: 0 };
        next.panels = {
          ...state.panels,
          analysisDrawerOpen: false,
          zoomPanActive: false,
          bokehPreviewOpen: false,
          glassMapOpen: false,
          lcaOverlayOpen: false,
          petzvalOverlayOpen: false,
          selectedElementId: null,
        };
      } else {
        next.panels = { ...state.panels, selectedElementIdA: null };
      }
      return next;
    }
    case SET_LENS_B:
      return {
        ...state,
        lens: { ...state.lens, lensKeyB: action.key },
        panels: { ...state.panels, selectedElementIdB: null },
      };
    case SWAP_LENSES:
      return { ...state, lens: { ...state.lens, lensKeyA: state.lens.lensKeyB, lensKeyB: state.lens.lensKeyA } };

    /* ── Display ── */
    case SET_DARK:
      return { ...state, display: { ...state.display, dark: action.dark } };
    case SET_HIGH_CONTRAST:
      return { ...state, display: { ...state.display, highContrast: action.highContrast } };
    case SET_MOBILE_VIEW:
      return { ...state, display: { ...state.display, mobileView: action.mobileView } };
    case SET_DESKTOP_VIEW:
      return { ...state, display: { ...state.display, desktopView: action.desktopView } };

    /* ── Ray toggles (generic) ── */
    case SET_RAY_TOGGLE:
      if (!RAY_FIELDS.has(action.field)) return state;
      return { ...state, rays: { ...state.rays, [action.field]: action.value } };

    /* ── Single-lens sliders ── */
    case SET_FOCUS_T:
      return { ...state, sliders: { ...state.sliders, focusT: action.value } };
    case SET_ZOOM_T:
      return { ...state, sliders: { ...state.sliders, zoomT: action.value } };
    case SET_STOPDOWN_T:
      return { ...state, sliders: { ...state.sliders, stopdownT: action.value } };
    case SET_SHIFT_MM:
      return { ...state, sliders: { ...state.sliders, shiftMm: action.value } };
    case SET_TILT_DEG:
      return { ...state, sliders: { ...state.sliders, tiltDeg: action.value } };
    case RESET_SLIDERS:
      return { ...state, sliders: { focusT: 0, zoomT: 0, stopdownT: 0, shiftMm: 0, tiltDeg: 0 } };

    /* ── Panel expand/collapse (generic) ── */
    case SET_PANEL_EXPANDED:
      if (!PANEL_FIELDS.has(action.panel)) return state;
      return { ...state, panels: { ...state.panels, [action.panel]: action.expanded } };

    /* ── Analysis drawer tab selection ── */
    case SET_ANALYSIS_TAB:
      if (!isAnalysisTabId(action.tab)) return state;
      return { ...state, panels: { ...state.panels, analysisDrawerTab: action.tab } };

    case SET_SELECTED_ELEMENT: {
      const key = selectedElementKeyForPanel(action.panelId);
      return { ...state, panels: { ...state.panels, [key]: action.elementId } };
    }

    case APPLY_URL_VIEW_STATE: {
      const urlState = action.state;
      const panels = { ...state.panels };
      for (const { key, default: fallback } of VIEW_STATE_FIELDS) {
        if (key in urlState) {
          (panels as Record<string, unknown>)[key] = urlState[key] ?? fallback;
        }
      }
      if (urlState.analysisDrawerTab) panels.analysisDrawerTab = urlState.analysisDrawerTab;

      const sliders = { ...state.sliders };
      const sharedSliders = { ...state.sharedSliders };
      if ("focus" in urlState) {
        if (state.lens.comparing) sharedSliders.sharedFocusT = urlState.focus ?? 0;
        else sliders.focusT = urlState.focus ?? 0;
      }
      if ("aperture" in urlState) {
        if (state.lens.comparing) sharedSliders.sharedStopdownT = urlState.aperture ?? 0;
        else sliders.stopdownT = urlState.aperture ?? 0;
      }
      if ("shift" in urlState) {
        if (state.lens.comparing) sharedSliders.sharedShiftMm = urlState.shift ?? 0;
        else sliders.shiftMm = urlState.shift ?? 0;
      }
      if ("tilt" in urlState) {
        if (state.lens.comparing) sharedSliders.sharedTiltDeg = urlState.tilt ?? 0;
        else sliders.tiltDeg = urlState.tilt ?? 0;
      }

      return { ...state, panels, sliders, sharedSliders };
    }

    /* ── Overlays ── */
    case SET_OVERLAY:
      if (!OVERLAY_FIELDS.has(action.overlay)) return state;
      return { ...state, overlays: { ...state.overlays, [action.overlay]: action.visible } };
    case CLOSE_ALL_OVERLAYS:
      return {
        ...state,
        overlays: { showAbout: false, showAboutSite: false, showOpticsPrimer: false, showAberrationsPrimer: false },
      };

    default:
      return state;
  }
}
