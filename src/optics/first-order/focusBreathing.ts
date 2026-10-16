/**
 * Focus-breathing helper — current-state effective focal length for focus/zoom positions.
 *
 * Exposes the first-order EFL calculation through a RuntimeLens-friendly signature.
 */

import { interpolateStationTable, clampStationControl } from "../state/stationTables.js";
import type { RuntimeLens } from "../../types/optics.js";
import { FOCUS_INFINITY_CUTOFF } from "../focusDistance.js";
import { compiledLensFromRuntime } from "../prescription/compile.js";
import { prepareState } from "../state/preparedGeometry.js";
import { traceParaxialSurfaces2 } from "../math/paraxial.js";

/**
 * Compute effective focal length for the current focus and zoom state.
 *
 * At infinity/default aberration state this returns the cached build-time EFL so
 * display values stay identical to the authored prescription. Otherwise it traces
 * a unit-height paraxial ray and uses `EFL = -1 / u'` in image space.
 *
 * @param focusT - normalized focus slider, 0=infinity and 1=close focus
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @param aberrationT - normalized aberration spacing slider
 * @returns current effective focal length in mm
 */
export function eflAtFocus2(focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0): number {
  if (focusT < FOCUS_INFINITY_CUTOFF && aberrationT === 0) {
    return L.isZoom && L.zoomEFLs ? interpolateStationTable(clampStationControl(zoomT), L.zoomEFLs) : L.EFL;
  }
  const state = prepareState(compiledLensFromRuntime(L), focusT, zoomT, aberrationT);
  const efl = eflFromSurfaces(state.surfaces);
  if (efl === null)
    return L.isZoom && L.zoomEFLs ? interpolateStationTable(clampStationControl(zoomT), L.zoomEFLs) : L.EFL;
  return efl;
}

function eflFromSurfaces(surfaces: Parameters<typeof traceParaxialSurfaces2>[0]): number | null {
  const trace = traceParaxialSurfaces2(surfaces, 1, 0, { skipLastTransfer: true });
  // Paraxial power: EFL = -1 / u' for a unit-height collimated basis ray.
  return Math.abs(trace.u) < 1e-15 ? null : -1 / trace.u;
}
