/**
 * Runtime layout helpers — state-aware surface positions, sag, zoom, and first-order values.
 *
 * Adapts the prepared optics-engine state back to the legacy RuntimeLens helper names used by
 * diagram rendering and analysis panels.
 */

import type { RuntimeLens } from "../types/optics.js";
import { conicPolySag, sag, sagSlopeRaw } from "./geometry/surfaceProfile.js";

/** Number of straight SVG segments used when rendering one surface profile. */
export const SVG_PATH_SUBDIVISIONS: number = 96;
const BISECT_ITERATIONS: number = 30;
export { FOCUS_REPORTING_INFINITY_THRESHOLD } from "./focusDistance.js";

/**
 * Compute rendered sag for a RuntimeLens surface.
 *
 * @param h - radial surface height in mm
 * @param surfIdx - zero-based physical surface index
 * @param L - runtime lens object
 * @returns spherical or aspheric sag in mm, positive toward image space
 */
export function renderSag(h: number, surfIdx: number, L: RuntimeLens): number {
  const R = L.S[surfIdx].R;
  const a = L.asphByIdx[surfIdx];
  if (!a) return sag(h, R);
  return conicPolySag(h, R, a);
}

/**
 * Compute radial sag slope for a RuntimeLens surface.
 *
 * @param h - radial surface height in mm
 * @param surfIdx - zero-based physical surface index
 * @param L - runtime lens object
 * @returns dz/dh at the requested height
 */
export function sagSlope(h: number, surfIdx: number, L: RuntimeLens): number {
  return sagSlopeRaw(h, L.S[surfIdx].R, L.asphByIdx[surfIdx]);
}

/**
 * Trim a surface semi-diameter until sag intrusion fits an allowed air gap.
 *
 * This is a display safeguard only; tracing still uses authored apertures.
 *
 * @param surfIdx - zero-based physical surface index
 * @param sd - declared semi-diameter in mm
 * @param maxSag - maximum allowed absolute sag intrusion in mm
 * @param L - runtime lens object
 * @returns display semi-diameter in mm
 */
export function gapTrimHeight(surfIdx: number, sd: number, maxSag: number, L: RuntimeLens): number {
  if (maxSag <= 0 || L.gapSagFrac <= 0) return sd;
  if (Math.abs(renderSag(sd, surfIdx, L)) <= maxSag) return sd;
  let lo = 0;
  let hi = sd;
  for (let j = 0; j < BISECT_ITERATIONS; j++) {
    const mid = (lo + hi) / 2;
    if (Math.abs(renderSag(mid, surfIdx, L)) > maxSag) hi = mid;
    else lo = mid;
  }
  return (lo + hi) / 2;
}

/**
 * Trim a display semi-diameter to keep rim slope below a tangent threshold.
 *
 * @param surfIdx - zero-based physical surface index
 * @param sd - declared semi-diameter in mm
 * @param maxSlopeTan - maximum allowed `|dz/dh|`
 * @param L - runtime lens object
 * @returns display semi-diameter in mm
 */
export function slopeTrimHeight(surfIdx: number, sd: number, maxSlopeTan: number, L: RuntimeLens): number {
  if (maxSlopeTan <= 0) return sd;
  if (Math.abs(sagSlope(sd, surfIdx, L)) <= maxSlopeTan) return sd;
  let lo = 0;
  let hi = sd;
  for (let j = 0; j < BISECT_ITERATIONS; j++) {
    const mid = (lo + hi) / 2;
    if (Math.abs(sagSlope(mid, surfIdx, L)) > maxSlopeTan) hi = mid;
    else lo = mid;
  }
  return (lo + hi) / 2;
}

export { thick, doLayout, stateSurfaces } from "./state/layout.js";
export {
  eflAtZoom,
  epAtZoom,
  fopenAtZoom,
  halfFieldAtZoom,
  tracingHalfFieldAtZoom,
  yRatioAtZoom,
  bAtZoom,
  xpAtZoom,
  epZRelStopAtZoom,
  xpZRelLastSurfAtZoom,
} from "./state/stationTables.js";

export { eflAtFocus2 as eflAtFocus } from "./first-order/focusBreathing.js";
export { effectiveFNumber2 as effectiveFNumber } from "./first-order/fNumber.js";
