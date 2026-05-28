/**
 * Prepared-state adapter helpers for RuntimeLens-shaped analysis functions.
 *
 * Older public analysis helpers expect a mutable-looking `number[]` z-position array,
 * while PreparedOpticalState stores the same current-state vertex positions as readonly
 * engine data. This file centralizes that compatibility cast.
 */

import type { PreparedOpticalState } from "../types.js";

/**
 * Return current-state surface vertex positions for compatibility analysis calls.
 *
 * The returned array is the prepared state's z-position sequence in mm, measured along
 * the optical axis from the first surface. Callers must treat it as read-only even though
 * the legacy RuntimeLens helper signatures accept `number[]`.
 *
 * @param state - prepared optical state for the current focus/zoom/aberration sliders
 * @returns surface vertex z positions in mm
 */
export function zPosForPreparedAnalysis2(state: PreparedOpticalState): number[] {
  return state.z as number[];
}
