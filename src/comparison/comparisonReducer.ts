/**
 * Comparison-mode sub-reducer.
 *
 * Handles all comparison-specific actions: shared slider updates,
 * scale mode, and enter/exit comparison transitions.
 *
 * Returns the new state if the action was handled, or null if
 * the action is not comparison-related (caller falls through).
 */

import type { LensState, LensAction } from "../types/state.js";

/* ── Action type constants ── */
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
    case SET_SCALE_MODE:
      return { ...state, lens: { ...state.lens, scaleMode: action.scaleMode } };

    /* ── Shared sliders (comparison mode) ── */
    case SET_SHARED_FOCUS_T:
      return { ...state, sharedSliders: { ...state.sharedSliders, sharedFocusT: action.value } };
    case SET_SHARED_STOPDOWN_T:
      return { ...state, sharedSliders: { ...state.sharedSliders, sharedStopdownT: action.value } };
    case SET_SHARED_ZOOM_T:
      return {
        ...state,
        sharedSliders: {
          ...state.sharedSliders,
          sharedZoomT: action.value,
          sharedFocusT: action.focusT ?? state.sharedSliders.sharedFocusT,
        },
      };
    case SET_SHARED_SHIFT_MM:
      return { ...state, sharedSliders: { ...state.sharedSliders, sharedShiftMm: action.value } };
    case SET_SHARED_TILT_DEG:
      return { ...state, sharedSliders: { ...state.sharedSliders, sharedTiltDeg: action.value } };

    /* ── Comparison mode transitions ── */
    case ENTER_COMPARE: {
      const lens = {
        ...state.lens,
        lensKeyA: state.lens.selectedConfigurationKey,
        teleconverterKeyB: null,
        comparing: true as const,
      };
      /* With a converter mounted the natural comparison is the same lens without it: pane A keeps the
         converter and pane B becomes the bare host. Otherwise pick the next lens if A===B. */
      if (lens.teleconverterKeyA !== null) {
        lens.lensKeyB = lens.lensKeyA;
      } else if (lens.lensKeyA === lens.lensKeyB && action.catalogKeys && action.catalogKeys.length > 1) {
        const idx = action.catalogKeys.indexOf(lens.lensKeyA);
        lens.lensKeyB = action.catalogKeys[(idx + 1) % action.catalogKeys.length];
      }
      return {
        ...state,
        lens,
        panels: { ...state.panels, analysisDrawerOpen: false },
        sharedSliders: { sharedFocusT: 0, sharedStopdownT: 0, sharedZoomT: 0, sharedShiftMm: 0, sharedTiltDeg: 0 },
      };
    }
    case EXIT_COMPARE:
      return {
        ...state,
        /* Pane A becomes the single-lens view and keeps its converter; pane B's has nowhere to go. */
        lens: { ...state.lens, comparing: false, teleconverterKeyB: null },
        sliders: {
          ...state.sliders,
          focusT: action.focusA ?? state.sliders.focusT,
          stopdownT: action.stopdownA ?? state.sliders.stopdownT,
          shiftMm: action.shiftA ?? state.sliders.shiftMm,
          tiltDeg: action.tiltA ?? state.sliders.tiltDeg,
        },
      };

    default:
      return null;
  }
}
