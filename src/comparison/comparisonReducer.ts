/**
 * Comparison-mode sub-reducer.
 *
 * Handles all comparison-specific actions: shared slider updates,
 * scale mode, and enter/exit comparison transitions.
 *
 * Returns the new state if the action was handled, or null if
 * the action is not comparison-related (caller falls through).
 */

import type { PaneCoordinates } from "./comparisonTypes.js";
import type { LensState, LensAction } from "../types/state.js";

/* ── Action type constants ── */
export const RELINK_COMPARISON = "RELINK_COMPARISON";
export const SELECT_PANE_SOURCE_STATE = "SELECT_PANE_SOURCE_STATE";
export const SET_COMPARISON_FOCUS_ZOOM = "SET_COMPARISON_FOCUS_ZOOM";
export const SET_PANE_COORDINATES = "SET_PANE_COORDINATES";
export const SET_SCALE_MODE = "SET_SCALE_MODE";
export const SET_SHARED_FOCUS_T = "SET_SHARED_FOCUS_T";
export const SET_SHARED_STOPDOWN_T = "SET_SHARED_STOPDOWN_T";
export const SET_SHARED_ZOOM_T = "SET_SHARED_ZOOM_T";
export const SET_SHARED_SHIFT_MM = "SET_SHARED_SHIFT_MM";
export const SET_SHARED_TILT_DEG = "SET_SHARED_TILT_DEG";
export const ENTER_COMPARE = "ENTER_COMPARE";
export const EXIT_COMPARE = "EXIT_COMPARE";

/**
 * Handle comparison-specific actions.
 *
 * @returns new state if handled, null otherwise
 */
export default function comparisonReducer(state: LensState, action: LensAction): LensState | null {
  switch (action.type) {
    case RELINK_COMPARISON:
      if (!state.lens.comparing || !validCoordinates({ focusT: action.sharedFocusT, zoomT: action.sharedZoomT }))
        return state;
      return {
        ...state,
        sharedSliders: {
          ...state.sharedSliders,
          focusZoom: { mode: "linked" },
          sharedFocusT: action.sharedFocusT,
          sharedZoomT: action.sharedZoomT,
        },
      };
    case SELECT_PANE_SOURCE_STATE: {
      if (!state.lens.comparing || action.lensKey !== (action.pane === "a" ? state.lens.lensKeyA : state.lens.lensKeyB))
        return state;
      const current = state.sharedSliders.focusZoom;
      const positions = current.mode === "independent" ? current : action.positions;
      const { focusT, zoomT } = action.sourceState;
      if (!validCoordinates(positions.a) || !validCoordinates(positions.b) || !validCoordinates({ focusT, zoomT }))
        return state;
      return {
        ...state,
        rays: { ...state.rays, rayTracksF: true },
        sharedSliders: {
          ...state.sharedSliders,
          focusZoom: {
            mode: "independent",
            a: { ...positions.a },
            b: { ...positions.b },
            [action.pane]: { focusT, zoomT },
          },
        },
      };
    }
    case SET_COMPARISON_FOCUS_ZOOM: {
      if (!state.lens.comparing) return state;
      const value = action.focusZoom;
      if (value.mode === "linked")
        return { ...state, sharedSliders: { ...state.sharedSliders, focusZoom: { mode: "linked" } } };
      if (value.mode !== "independent" || !validCoordinates(value.a) || !validCoordinates(value.b)) return state;
      return {
        ...state,
        sharedSliders: {
          ...state.sharedSliders,
          focusZoom: {
            mode: "independent",
            a: { ...value.a },
            b: { ...value.b },
          },
        },
      };
    }
    case SET_PANE_COORDINATES: {
      const current = state.sharedSliders.focusZoom;
      if (
        !state.lens.comparing ||
        current.mode !== "independent" ||
        action.lensKey !== (action.pane === "a" ? state.lens.lensKeyA : state.lens.lensKeyB) ||
        !validCoordinates(action.coordinates)
      )
        return state;
      return {
        ...state,
        sharedSliders: {
          ...state.sharedSliders,
          focusZoom: {
            ...current,
            [action.pane]: { ...action.coordinates },
          },
        },
      };
    }
    case SET_SCALE_MODE:
      return { ...state, lens: { ...state.lens, scaleMode: action.scaleMode } };

    /* ── Shared sliders (comparison mode) ── */
    case SET_SHARED_FOCUS_T:
      return { ...state, sharedSliders: { ...state.sharedSliders, sharedFocusT: action.value } };
    case SET_SHARED_STOPDOWN_T:
      return { ...state, sharedSliders: { ...state.sharedSliders, sharedStopdownT: action.value } };
    case SET_SHARED_ZOOM_T:
      return { ...state, sharedSliders: { ...state.sharedSliders, sharedZoomT: action.value } };
    case SET_SHARED_SHIFT_MM:
      return { ...state, sharedSliders: { ...state.sharedSliders, sharedShiftMm: action.value } };
    case SET_SHARED_TILT_DEG:
      return { ...state, sharedSliders: { ...state.sharedSliders, sharedTiltDeg: action.value } };

    /* ── Comparison mode transitions ── */
    case ENTER_COMPARE: {
      const lens = {
        ...state.lens,
        lensKeyA: state.lens.selectedConfigurationKey,
        comparing: true as const,
      };
      /* Pick next lens if A===B */
      if (lens.lensKeyA === lens.lensKeyB && action.catalogKeys && action.catalogKeys.length > 1) {
        const idx = action.catalogKeys.indexOf(lens.lensKeyA);
        lens.lensKeyB = action.catalogKeys[(idx + 1) % action.catalogKeys.length];
      }
      return {
        ...state,
        lens,
        panels: { ...state.panels, analysisDrawerOpen: false },
        sharedSliders: {
          focusZoom: { mode: "linked" },
          sharedFocusT: 0,
          sharedStopdownT: 0,
          sharedZoomT: 0,
          sharedShiftMm: 0,
          sharedTiltDeg: 0,
        },
      };
    }
    case EXIT_COMPARE:
      return {
        ...state,
        lens: { ...state.lens, comparing: false, selectedConfigurationKey: state.lens.lensKeyA },
        sliders: {
          ...state.sliders,
          focusT:
            state.sharedSliders.focusZoom.mode === "independent"
              ? state.sharedSliders.focusZoom.a.focusT
              : (action.focusA ?? state.sliders.focusT),
          zoomT:
            state.sharedSliders.focusZoom.mode === "independent"
              ? state.sharedSliders.focusZoom.a.zoomT
              : (action.zoomA ?? state.sliders.zoomT),
          aberrationT: 0,
          stopdownT: action.stopdownA ?? state.sliders.stopdownT,
          shiftMm: action.shiftA ?? state.sliders.shiftMm,
          tiltDeg: action.tiltA ?? state.sliders.tiltDeg,
        },
      };

    default:
      return null;
  }
}

function validCoordinates(value: PaneCoordinates): boolean {
  return [value.focusT, value.zoomT].every((n) => Number.isFinite(n) && n >= 0 && n <= 1);
}
