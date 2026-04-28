/**
 * Type definitions specific to comparison mode.
 *
 * SharedSlidersSlice and comparison-specific action variants live here,
 * keeping the core state types focused on single-lens concerns.
 */

export interface SharedSlidersSlice {
  sharedFocusT: number;
  sharedStopdownT: number;
  sharedZoomT: number;
  sharedShiftMm: number;
  sharedTiltDeg: number;
}

/** Comparison-specific action variants. */
export type ComparisonAction =
  | { type: "SET_SCALE_MODE"; scaleMode: "independent" | "normalized" }
  | { type: "SET_SHARED_FOCUS_T"; value: number }
  | { type: "SET_SHARED_STOPDOWN_T"; value: number }
  | { type: "SET_SHARED_ZOOM_T"; value: number }
  | { type: "SET_SHARED_SHIFT_MM"; value: number }
  | { type: "SET_SHARED_TILT_DEG"; value: number }
  | { type: "ENTER_COMPARE"; catalogKeys?: string[] }
  | { type: "EXIT_COMPARE"; focusA?: number; stopdownA?: number; shiftA?: number; tiltA?: number };
