/**
 * Type definitions specific to comparison mode.
 *
 * SharedSlidersSlice and comparison-specific action variants live here,
 * keeping the core state types focused on single-lens concerns.
 */

import type { LensSourceState } from "../types/optics.js";

export interface PaneCoordinates {
  focusT: number;
  zoomT: number;
}

export interface ComparisonPositions {
  a: PaneCoordinates;
  b: PaneCoordinates;
}

/** Linked positions are derived; independent positions are retained exactly per pane. */
export type ComparisonFocusZoomState = { mode: "linked" } | ({ mode: "independent" } & ComparisonPositions);

export interface SharedSlidersSlice {
  focusZoom: ComparisonFocusZoomState;
  sharedFocusT: number;
  sharedStopdownT: number;
  sharedZoomT: number;
  sharedShiftMm: number;
  sharedTiltDeg: number;
}

/** Comparison-specific action variants. */
export type ComparisonAction =
  | {
      type: "SELECT_PANE_SOURCE_STATE";
      pane: "a" | "b";
      lensKey: string;
      sourceState: LensSourceState;
      positions: ComparisonPositions;
    }
  | { type: "SET_COMPARISON_FOCUS_ZOOM"; focusZoom: ComparisonFocusZoomState }
  | { type: "SET_PANE_COORDINATES"; pane: "a" | "b"; lensKey: string; coordinates: PaneCoordinates }
  | { type: "SET_SCALE_MODE"; scaleMode: "independent" | "normalized" }
  | { type: "SET_SHARED_FOCUS_T"; value: number }
  | { type: "SET_SHARED_STOPDOWN_T"; value: number }
  | { type: "SET_SHARED_ZOOM_T"; value: number }
  | { type: "SET_SHARED_SHIFT_MM"; value: number }
  | { type: "SET_SHARED_TILT_DEG"; value: number }
  | { type: "ENTER_COMPARE"; catalogKeys?: string[] }
  | { type: "EXIT_COMPARE"; focusA?: number; stopdownA?: number; shiftA?: number; tiltA?: number };
