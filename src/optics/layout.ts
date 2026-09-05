/**
 * Runtime layout helpers — state-aware surface positions, sag, zoom, and first-order values.
 *
 * Adapts the prepared optics-engine state back to the legacy RuntimeLens helper names used by
 * diagram rendering and analysis panels.
 */

import { interpolateUniformSchedule } from "./math/uniformInterpolation.js";
import type { LayoutResult, RuntimeLens } from "../types/optics.js";
import { prepareRuntimeState } from "./state/runtimeState.js";
import { conicPolySag, sag, sagSlopeRaw } from "./internal/surfaceMath.js";

/** Number of straight SVG segments used when rendering one surface profile. */
export const SVG_PATH_SUBDIVISIONS: number = 96;
const BISECT_ITERATIONS: number = 30;
/** Focus slider values below this threshold are treated as infinity. */
export { FOCUS_INFINITY_THRESHOLD } from "./constants.js";

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

/**
 * Resolve current axial thickness after a surface.
 *
 * @param i - zero-based physical surface index
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param L - runtime lens object
 * @param aberrationT - normalized aberration spacing slider
 * @returns current thickness in mm
 */
export function thick(i: number, focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0): number {
  return prepareRuntimeState(L, focusT, zoomT, aberrationT).surfaces[i]?.d ?? 0;
}

/**
 * Compute current RuntimeLens layout positions.
 *
 * Surface vertices start at z=0 and accumulate current thicknesses. Folded systems
 * use an authored explicit image plane when present; otherwise their image plane
 * tracks the current last-surface-plus-BFD position like ordinary prescriptions.
 *
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param L - runtime lens object
 * @param aberrationT - normalized aberration spacing slider
 * @returns surface z positions, current thicknesses, and image-plane z in mm
 */
export function doLayout(focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0): LayoutResult {
  const state = prepareRuntimeState(L, focusT, zoomT, aberrationT);
  const explicitFoldedPlane =
    L.isFoldedOptics && (L.data?.opticalPath === undefined || L.data.opticalPath.imagePlane !== undefined);
  return {
    z: [...state.z],
    th: state.surfaces.map((s) => s.d),
    imgZ: explicitFoldedPlane ? L.imagePlane.z : state.imgZ,
  };
}

/**
 * Return RuntimeLens surfaces with state-adjusted thickness values.
 *
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param L - runtime lens object
 * @param aberrationT - normalized aberration spacing slider
 * @returns copied surface records with current `d` values
 */
export function stateSurfaces(focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0) {
  const state = prepareRuntimeState(L, focusT, zoomT, aberrationT);
  return L.S.map((surface, i) => ({ ...surface, d: state.surfaces[i].d }));
}

/**
 * Interpolate EFL for a zoom state.
 *
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @returns effective focal length in mm
 */
export function eflAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.EFL;
  return interpolateUniformSchedule(L.zoomEFLs!, zoomT);
}

/**
 * Interpolate entrance-pupil semi-diameter for a zoom state.
 *
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @returns entrance-pupil semi-diameter in mm
 */
export function epAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.EP.epSD;
  return interpolateUniformSchedule(L.zoomEPs!, zoomT);
}

export { fopenAtZoom } from "./prescription/zoomMetadata.js";

/**
 * Interpolate declared display half-field for a zoom state.
 *
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @returns half field angle in degrees
 */
export function halfFieldAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.halfField;
  return interpolateUniformSchedule(L.zoomHalfFields!, zoomT);
}

/**
 * Interpolate trace-safe half-field for a zoom state.
 *
 * Fisheyes may have a declared half field wider than scalar slope launches can
 * trace; this value is the narrower field used for visible ray bundles.
 *
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @returns trace-safe half field angle in degrees
 */
export function tracingHalfFieldAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.tracingHalfField;
  return interpolateUniformSchedule(L.zoomTracingHalfFields!, zoomT);
}

/**
 * Interpolate entrance-pupil stop height ratio for a zoom state.
 *
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @returns paraxial marginal-ray stop-height ratio
 */
export function yRatioAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.EP.yRatio;
  return interpolateUniformSchedule(L.zoomYRatios!, zoomT);
}

/**
 * Interpolate paraxial chief-ray stop coefficient for a zoom state.
 *
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @returns chief-ray stop-height coefficient in mm per unit slope
 */
export function bAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.B;
  return interpolateUniformSchedule(L.zoomBs!, zoomT);
}

/**
 * Interpolate exit-pupil semi-diameter for a zoom state.
 *
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @returns exit-pupil semi-diameter in mm, or Infinity when any zoom entry is non-finite
 */
export function xpAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.xpSD;
  const arr = L.zoomXpSDs!;
  if (arr.some((v) => !isFinite(v))) return Infinity;
  return interpolateUniformSchedule(arr, zoomT);
}

/**
 * Interpolate entrance-pupil z offset relative to the stop for a zoom state.
 *
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @returns entrance-pupil axial offset from stop in mm
 */
export function epZRelStopAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.epZRelStop;
  return interpolateUniformSchedule(L.zoomEpZRelStops!, zoomT);
}

/**
 * Interpolate exit-pupil z offset relative to the last surface for a zoom state.
 *
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @returns exit-pupil axial offset from last surface in mm
 */
export function xpZRelLastSurfAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.xpZRelLastSurf;
  const arr = L.zoomXpZRelLastSurfs!;
  if (arr.some((v) => !isFinite(v))) return Infinity;
  return interpolateUniformSchedule(arr, zoomT);
}

export { eflAtFocus2 as eflAtFocus } from "./first-order/focusBreathing.js";

export { effectiveFNumber2 as effectiveFNumber } from "./first-order/fNumber.js";
