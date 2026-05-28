/**
 * First-order pupil helpers — paraxial entrance-pupil geometry derived from stop traces.
 *
 * Supplies lightweight pupil references for chief-ray solving and first-order display calculations.
 */

import type { PreparedOpticalState } from "../types.js";
import { traceParaxialSurfaces2 } from "../math/paraxial.js";

/**
 * First-order entrance-pupil geometry relative to the stop.
 *
 * `yRatio` maps entrance-pupil marginal height to stop height; `b` maps chief-ray
 * input angle to stop height; `epRatio = b / yRatio` is used for chief-ray launches.
 */
export interface FirstOrderPupilState {
  epSD: number;
  yRatio: number;
  b: number;
  epRatio: number;
}

/**
 * Convert stop semi-diameter and pupil transfer coefficients into EP geometry.
 *
 * @param stopSemiDiameter - current physical stop semi-diameter in mm
 * @param geometry - paraxial transfer coefficients excluding the derived EP size
 * @returns entrance-pupil semi-diameter and transfer ratios
 */
export function entrancePupilFromStop2(
  stopSemiDiameter: number,
  geometry: Omit<FirstOrderPupilState, "epSD">,
): FirstOrderPupilState {
  const epSD = Math.abs(geometry.yRatio) > 1e-9 ? Math.abs(stopSemiDiameter / geometry.yRatio) : 0;
  return { epSD, ...geometry };
}

/**
 * Compute paraxial pupil transfer coefficients for a prepared state.
 *
 * The stop is traced from the object side using both normalized basis rays and a
 * small finite delta; the finite basis avoids pathological zero-height behavior
 * while preserving the paraxial interpretation.
 *
 * @param state - prepared optical state with stop surface index
 * @returns paraxial stop-transfer ratios used for entrance-pupil estimates
 */
export function paraxialPupilGeometry2(state: PreparedOpticalState): Omit<FirstOrderPupilState, "epSD"> {
  const stopIndex = state.lens.stop.surfaceIndex;
  const delta = 1e-4;
  const marginal = traceParaxialSurfaces2(state.surfaces, 1, 0, { stopAt: stopIndex });
  const chief = traceParaxialSurfaces2(state.surfaces, 0, 1, { stopAt: stopIndex });
  const realMarginal = traceParaxialSurfaces2(state.surfaces, delta, 0, { stopAt: stopIndex });
  const realChief = traceParaxialSurfaces2(state.surfaces, 0, delta, { stopAt: stopIndex });
  const yRatio = Number.isFinite(realMarginal.y) ? realMarginal.y / delta : marginal.y;
  const b = Number.isFinite(realChief.y) ? realChief.y / delta : chief.y;
  const epRatio = Math.abs(yRatio) > 1e-9 ? b / yRatio : 0;
  return { yRatio, b, epRatio };
}
