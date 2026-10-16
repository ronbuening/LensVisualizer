/** Focus-distance endpoints follow the same normalized station coordinates as zoom gaps. */
import type { RuntimeLens } from "../types/optics.js";
import { closeFocusAtZoom } from "./state/stationTables.js";

/**
 * Treat focus below this control as infinity for distance labels and remapping, EFL
 * (including perspective field scale), f-number and magnification summaries,
 * pupil-aberration paraxial baselines, and the traced conjugate correction.
 */
export const FOCUS_INFINITY_CUTOFF = 0.003;

/** Slider-convention focus distance in metres; null at infinity or for an invalid distance. */
export function focusDistanceAt(focusT: number, L: RuntimeLens, zoomT = 0): number | null {
  if (focusT < FOCUS_INFINITY_CUTOFF) return null;
  const distance = closeFocusAtZoom(zoomT, L) / focusT;
  return Number.isFinite(distance) && distance > 0 ? distance : null;
}

/** Preserve object distance when the modeled close-focus endpoint changes. */
export function remapFocusDistance(focusT: number, previousCloseM: number, nextCloseM: number): number {
  if (focusT < FOCUS_INFINITY_CUTOFF || previousCloseM <= 0 || nextCloseM <= 0) return 0;
  return Math.min(1, (focusT * nextCloseM) / previousCloseM);
}

export { closeFocusAtZoom } from "./state/stationTables.js";
