/** Focus-distance endpoints follow the same normalized station coordinates as zoom gaps. */

/**
 * Infinity cutoff for distance labels/remapping, EFL (including perspective field scale), pupil-aberration
 * paraxial baselines and exposure/magnification summaries. Its split from the conjugate cutoff is an open C3
 * decision: controls between them can report infinity while tracing a nonzero conjugate correction.
 */
export const FOCUS_REPORTING_INFINITY_THRESHOLD = 0.003;

/** Preserve object distance when the modeled close-focus endpoint changes. */
export function remapFocusDistance(focusT: number, previousCloseM: number, nextCloseM: number): number {
  if (focusT < FOCUS_REPORTING_INFINITY_THRESHOLD || previousCloseM <= 0 || nextCloseM <= 0) return 0;
  return Math.min(1, (focusT * nextCloseM) / previousCloseM);
}

export { closeFocusAtZoom } from "./state/stationTables.js";
