/** Focus-distance endpoints follow the same normalized station coordinates as zoom gaps. */

/** Display and exposure summaries suppress finite-distance effects below this focus control. */
export const FOCUS_REPORTING_INFINITY_THRESHOLD = 0.003;

/** Preserve object distance when the modeled close-focus endpoint changes. */
export function remapFocusDistance(focusT: number, previousCloseM: number, nextCloseM: number): number {
  if (focusT < FOCUS_REPORTING_INFINITY_THRESHOLD || previousCloseM <= 0 || nextCloseM <= 0) return 0;
  return Math.min(1, (focusT * nextCloseM) / previousCloseM);
}

export { closeFocusAtZoom } from "./state/stationTables.js";

export { FOCUS_REPORTING_INFINITY_THRESHOLD as FOCUS_INFINITY_THRESHOLD };
