/**
 * Focus-breathing helper — current-state effective focal length for focus/zoom positions.
 *
 * Shares the first-order EFL calculation between prepared requests and compatibility callers.
 */

import { interpolateStationTable, clampStationControl } from "../state/stationTables.js";
import type { RuntimeLens } from "../../types/optics.js";
import { FOCUS_INFINITY_CUTOFF } from "../state/focusDistance.js";
import { compiledLensFromRuntime } from "../prescription/identity.js";
import { prepareState } from "../state/preparedGeometry.js";
import type { PreparedGeometry } from "../types.js";
import { runtimeView } from "../prescription/runtimeView.js";
import { traceParaxialSurfaces } from "../math/paraxial.js";

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
export function eflAtFocus(focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0): number {
  if (focusT < FOCUS_INFINITY_CUTOFF && aberrationT === 0) {
    return L.isZoom && L.zoomEFLs ? interpolateStationTable(clampStationControl(zoomT), L.zoomEFLs) : L.EFL;
  }
  const state = prepareState(compiledLensFromRuntime(L), focusT, zoomT, aberrationT);
  return eflFromPreparedSurfaces(state, L);
}

/**
 * Compute current EFL from prepared geometry while retaining cached infinity values.
 * @param state - prepared focus/zoom/aberration geometry
 * @returns effective focal length in mm
 */
export function eflAtPreparedState(state: PreparedGeometry): number {
  const L = runtimeView(state.lens);
  const { focusT, zoomT, aberrationT } = state;
  if (focusT < FOCUS_INFINITY_CUTOFF && aberrationT === 0) {
    return L.isZoom && L.zoomEFLs ? interpolateStationTable(clampStationControl(zoomT), L.zoomEFLs) : L.EFL;
  }
  return eflFromPreparedSurfaces(state, L);
}

function eflFromPreparedSurfaces(state: PreparedGeometry, L: RuntimeLens): number {
  const { zoomT } = state;
  const efl = eflFromSurfaces(state.surfaces);
  if (efl === null)
    return L.isZoom && L.zoomEFLs ? interpolateStationTable(clampStationControl(zoomT), L.zoomEFLs) : L.EFL;
  return efl;
}

function eflFromSurfaces(surfaces: Parameters<typeof traceParaxialSurfaces>[0]): number | null {
  const trace = traceParaxialSurfaces(surfaces, 1, 0, { skipLastTransfer: true });
  // Paraxial power: EFL = -1 / u' for a unit-height collimated basis ray.
  return Math.abs(trace.u) < 1e-15 ? null : -1 / trace.u;
}
