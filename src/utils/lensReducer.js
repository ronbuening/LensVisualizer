/**
 * Pure reducer for LensViewer state management.
 *
 * Organizes 24 formerly-independent useState values into 7 logical slices.
 * No React dependencies — all functions are pure and testable.
 */

import { ENABLE_EDGE_PROJECTION, DEFAULT_COLOR_TRACING } from "./featureFlags.js";

/* ── Action type constants ── */
export const SET_LENS_A = "SET_LENS_A";
export const SET_LENS_B = "SET_LENS_B";
export const SET_SCALE_MODE = "SET_SCALE_MODE";
export const SET_DARK = "SET_DARK";
export const SET_HIGH_CONTRAST = "SET_HIGH_CONTRAST";
export const SET_MOBILE_VIEW = "SET_MOBILE_VIEW";
export const SET_DESKTOP_VIEW = "SET_DESKTOP_VIEW";
export const SET_RAY_TOGGLE = "SET_RAY_TOGGLE";
export const SET_FOCUS_T = "SET_FOCUS_T";
export const SET_ZOOM_T = "SET_ZOOM_T";
export const SET_STOPDOWN_T = "SET_STOPDOWN_T";
export const SET_SHARED_FOCUS_T = "SET_SHARED_FOCUS_T";
export const SET_SHARED_STOPDOWN_T = "SET_SHARED_STOPDOWN_T";
export const SET_SHARED_ZOOM_T = "SET_SHARED_ZOOM_T";
export const RESET_SLIDERS = "RESET_SLIDERS";
export const SET_PANEL_EXPANDED = "SET_PANEL_EXPANDED";
export const SET_OVERLAY = "SET_OVERLAY";
export const CLOSE_ALL_OVERLAYS = "CLOSE_ALL_OVERLAYS";
export const ENTER_COMPARE = "ENTER_COMPARE";
export const EXIT_COMPARE = "EXIT_COMPARE";

/* ── Valid fields for generic actions ── */
const RAY_FIELDS = new Set(["showOnAxis", "showOffAxis", "rayTracksF", "showChromatic", "chromR", "chromG", "chromB"]);
const PANEL_FIELDS = new Set([
  "focusExpanded",
  "apertureExpanded",
  "headerControlsExpanded",
  "legendExpanded",
  "headerInfoExpanded",
]);
const OVERLAY_FIELDS = new Set(["showAbout", "showAboutSite"]);

/**
 * Build the initial state by merging URL > prefs > defaults.
 *
 * @param {Object}   prefs       — sanitized localStorage preferences
 * @param {Object}   urlState    — parsed URL parameters
 * @param {boolean}  isWide      — initial media query result
 * @param {string[]} catalogKeys — valid lens keys from the catalog
 * @returns {Object} complete initial state
 */
export function createInitialState(prefs, urlState, isWide, catalogKeys) {
  const showOffAxisRaw = prefs.showOffAxis ?? "off";
  const showOffAxis = !ENABLE_EDGE_PROJECTION && showOffAxisRaw === "edge" ? "trueAngle" : showOffAxisRaw;

  return {
    lens: {
      lensKeyA: urlState.singleLens || urlState.lensKeyA || prefs.lensKeyA || catalogKeys[0],
      lensKeyB: urlState.lensKeyB || prefs.lensKeyB || catalogKeys[Math.min(1, catalogKeys.length - 1)],
      comparing: urlState.comparing || prefs.comparing || false,
      scaleMode: prefs.scaleMode || "independent",
    },
    display: {
      dark:
        prefs.dark ??
        (typeof window !== "undefined" ? window.matchMedia("(prefers-color-scheme: dark)").matches : true),
      highContrast:
        prefs.highContrast ??
        (typeof window !== "undefined" ? window.matchMedia("(prefers-contrast: more)").matches : false),
      mobileView: "diagram",
      desktopView: prefs.desktopView || "both",
    },
    rays: {
      showOnAxis: prefs.showOnAxis ?? true,
      showOffAxis,
      rayTracksF: prefs.rayTracksF ?? false,
      showChromatic: prefs.showChromatic ?? DEFAULT_COLOR_TRACING,
      chromR: prefs.chromR ?? true,
      chromG: prefs.chromG ?? true,
      chromB: prefs.chromB ?? true,
    },
    sliders: {
      focusT: urlState.focus ?? 0,
      zoomT: 0,
      stopdownT: urlState.aperture ?? 0,
    },
    sharedSliders: {
      sharedFocusT: urlState.comparing ? (urlState.focus ?? 0) : 0,
      sharedStopdownT: urlState.comparing ? (urlState.aperture ?? 0) : 0,
      sharedZoomT: 0,
    },
    panels: {
      focusExpanded: prefs.focusExpanded ?? isWide,
      apertureExpanded: prefs.apertureExpanded ?? isWide,
      headerControlsExpanded: prefs.headerControlsExpanded ?? false,
      legendExpanded: prefs.legendExpanded ?? false,
      headerInfoExpanded: prefs.headerInfoExpanded ?? true,
    },
    overlays: {
      showAbout: false,
      showAboutSite: false,
    },
  };
}

/**
 * Lens state reducer.
 *
 * @param {Object} state   — current state
 * @param {Object} action  — { type, ...payload }
 * @returns {Object} next state
 */
export default function lensReducer(state, action) {
  switch (action.type) {
    /* ── Lens selection ── */
    case SET_LENS_A: {
      const next = { ...state, lens: { ...state.lens, lensKeyA: action.key } };
      /* In single mode, reset sliders when switching lenses */
      if (!state.lens.comparing) {
        next.sliders = { focusT: 0, zoomT: 0, stopdownT: 0 };
      }
      return next;
    }
    case SET_LENS_B:
      return { ...state, lens: { ...state.lens, lensKeyB: action.key } };
    case SET_SCALE_MODE:
      return { ...state, lens: { ...state.lens, scaleMode: action.scaleMode } };

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
    case RESET_SLIDERS:
      return { ...state, sliders: { focusT: 0, zoomT: 0, stopdownT: 0 } };

    /* ── Shared sliders (comparison mode) ── */
    case SET_SHARED_FOCUS_T:
      return { ...state, sharedSliders: { ...state.sharedSliders, sharedFocusT: action.value } };
    case SET_SHARED_STOPDOWN_T:
      return { ...state, sharedSliders: { ...state.sharedSliders, sharedStopdownT: action.value } };
    case SET_SHARED_ZOOM_T:
      return { ...state, sharedSliders: { ...state.sharedSliders, sharedZoomT: action.value } };

    /* ── Panel expand/collapse (generic) ── */
    case SET_PANEL_EXPANDED:
      if (!PANEL_FIELDS.has(action.panel)) return state;
      return { ...state, panels: { ...state.panels, [action.panel]: action.expanded } };

    /* ── Overlays ── */
    case SET_OVERLAY:
      if (!OVERLAY_FIELDS.has(action.overlay)) return state;
      return { ...state, overlays: { ...state.overlays, [action.overlay]: action.visible } };
    case CLOSE_ALL_OVERLAYS:
      return { ...state, overlays: { showAbout: false, showAboutSite: false } };

    /* ── Comparison mode transitions ── */
    case ENTER_COMPARE: {
      const lens = { ...state.lens, comparing: true };
      /* Pick next lens if A===B */
      if (state.lens.lensKeyA === state.lens.lensKeyB && action.catalogKeys?.length > 1) {
        const idx = action.catalogKeys.indexOf(state.lens.lensKeyA);
        lens.lensKeyB = action.catalogKeys[(idx + 1) % action.catalogKeys.length];
      }
      return {
        ...state,
        lens,
        sharedSliders: { sharedFocusT: 0, sharedStopdownT: 0, sharedZoomT: 0 },
      };
    }
    case EXIT_COMPARE:
      return {
        ...state,
        lens: { ...state.lens, comparing: false },
        sliders: {
          ...state.sliders,
          focusT: action.focusA ?? state.sliders.focusT,
          stopdownT: action.stopdownA ?? state.sliders.stopdownT,
        },
      };

    default:
      return state;
  }
}
