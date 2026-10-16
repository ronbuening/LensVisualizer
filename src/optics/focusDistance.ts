/** Focus-distance endpoints follow the same normalized station coordinates as zoom gaps. */

/**
 * Treat focus below this control as infinity for distance labels and remapping, EFL
 * (including perspective field scale), f-number and magnification summaries,
 * pupil-aberration paraxial baselines, and the traced conjugate correction.
 */
export const FOCUS_INFINITY_CUTOFF = 0.003;

/** Preserve object distance when the modeled close-focus endpoint changes. */
export function remapFocusDistance(focusT: number, previousCloseM: number, nextCloseM: number): number {
  if (focusT < FOCUS_INFINITY_CUTOFF || previousCloseM <= 0 || nextCloseM <= 0) return 0;
  return Math.min(1, (focusT * nextCloseM) / previousCloseM);
}

export { closeFocusAtZoom } from "./state/stationTables.js";
