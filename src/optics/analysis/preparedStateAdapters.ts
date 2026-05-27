/**
 * Prepared-state adapter helpers for legacy analysis functions.
 */

import type { PreparedOpticalState } from "../types.js";

export function zPosForPreparedAnalysis2(state: PreparedOpticalState): number[] {
  return state.z as number[];
}
