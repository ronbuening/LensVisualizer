/** Focus-distance endpoints follow the same normalized station coordinates as zoom gaps. */
import type { RuntimeLens } from "../../types/optics.js";
import { mtfFiniteConjugate } from "../analysis/mtf/mtfConjugates.js";
import { compiledLensFromRuntime } from "../prescription/identity.js";
import { prepareState } from "./preparedGeometry.js";
import { closeFocusAtZoom } from "./stationTables.js";

/**
 * On an ordinary lens, treat focus below this control as infinity for distance labels and remapping, EFL
 * (including perspective field scale), f-number and magnification summaries,
 * pupil-aberration paraxial baselines, and the traced conjugate correction. Test it through `isInfinityFocus`.
 */
export const FOCUS_INFINITY_CUTOFF = 0.003;

/**
 * Whether a focus coordinate stands for an object at infinity.
 *
 * @param focusT - normalized focus coordinate
 * @param finiteOnly - the lens declares `focus.finiteOnly`, whose coordinate 0 is an authored finite state
 * @returns true below `FOCUS_INFINITY_CUTOFF` on an ordinary lens; never on a finite-only lens
 */
export function isInfinityFocus(focusT: number, finiteOnly = false): boolean {
  return !finiteOnly && focusT < FOCUS_INFINITY_CUTOFF;
}

/**
 * Slider-convention focus distance in metres; null at infinity or for an invalid distance. A finite-only state reports
 * its authored object-to-image distance instead, because its coordinate carries no distance.
 */
export function focusDistanceAt(focusT: number, L: RuntimeLens, zoomT = 0): number | null {
  if (L.isFiniteOnly) {
    const state = prepareState(compiledLensFromRuntime(L), focusT, zoomT);
    const conjugate = mtfFiniteConjugate(state);
    if (!conjugate) return null;
    const firstSurfaceToImage = conjugate.distanceReference === "first-surface" ? state.imgZ - state.z[0] : 0;
    return (conjugate.objectDistanceMm + firstSurfaceToImage) / 1000;
  }
  if (focusT < FOCUS_INFINITY_CUTOFF) return null;
  const distance = closeFocusAtZoom(zoomT, L) / focusT;
  return Number.isFinite(distance) && distance > 0 ? distance : null;
}

/** Preserve object distance when the modeled close-focus endpoint changes. */
export function remapFocusDistance(focusT: number, previousCloseM: number, nextCloseM: number): number {
  if (focusT < FOCUS_INFINITY_CUTOFF || previousCloseM <= 0 || nextCloseM <= 0) return 0;
  return Math.min(1, (focusT * nextCloseM) / previousCloseM);
}

export { closeFocusAtZoom } from "./stationTables.js";
