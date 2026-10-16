/**
 * Station tables — focus keyframes and uniformly spaced zoom tables for state and first-order consumers.
 *
 * Callers retain control clamping and table fallbacks; interpolation preserves zoom-before-focus arithmetic.
 */

import type { AberrationPositionRange, AberrationVarRange, VarRange, RuntimeLens } from "../../types/optics.js";
import { lerp } from "../math/numerics.js";

/** Implicit focus control positions for legacy infinity/close ranges. */
export const DEFAULT_FOCUS_POSITIONS: readonly number[] = Object.freeze([0, 1]);

/**
 * Clamp a zoom-table control, retaining the historical non-finite fallback to wide.
 * @param controlT - proposed normalized station control
 * @returns finite control in [0, 1]
 */
export function clampStationControl(controlT: number): number {
  return Math.max(0, Math.min(1, Number.isFinite(controlT) ? controlT : 0));
}

/**
 * Locate a uniform station interval without changing the caller's control policy.
 * @param controlT - station control, normally in [0, 1]
 * @param count - number of stations, at least two
 * @param endpoint - use the preceding interval or the final node at control 1
 * @returns adjacent indices and local interpolation fraction
 */
export function stationSegment(controlT: number, count: number, endpoint: "previous" | "last" = "previous") {
  const position = controlT * (count - 1);
  const fromIndex = Math.min(Math.floor(position), count - (endpoint === "last" ? 1 : 2));
  return { fromIndex, toIndex: Math.min(fromIndex + 1, count - 1), fraction: position - fromIndex };
}

/**
 * Read a uniform station table with the caller's existing endpoint arithmetic.
 * @param controlT - station control, clamped by the caller when required
 * @param values - station values; a singleton is constant
 * @param endpoint - preceding interval for derived tables, final node for projection tables
 * @returns interpolated value
 */
export function interpolateStationTable(
  controlT: number,
  values: readonly number[],
  endpoint: "previous" | "last" = "previous",
): number {
  if (values.length === 1) return values[0];
  const { fromIndex, toIndex, fraction } = stationSegment(controlT, values.length, endpoint);
  return lerp(values[fromIndex], values[toIndex], fraction);
}

/**
 * Resolve a variable gap at normalized focus and zoom controls.
 *
 * @param baseThickness - authored default thickness in mm
 * @param range - optional variable range
 * @param isZoom - whether the lens uses zoom-indexed ranges
 * @param controlT - normalized focus control
 * @param zoomT - normalized zoom control
 * @param focusPositions - normalized focus coordinates aligned with each thickness vector
 * @returns current axial thickness in mm
 */
export function resolveVariableThickness(
  baseThickness: number,
  range: VarRange | undefined,
  isZoom: boolean,
  controlT: number,
  zoomT: number,
  focusPositions: readonly number[] = DEFAULT_FOCUS_POSITIONS,
): number {
  if (!range) return baseThickness;
  if (!isZoom) {
    return interpolateFocusThickness(range as readonly number[], focusPositions, controlT);
  }

  const zoomRanges = range as readonly (readonly number[])[];
  if (zoomRanges.length === 0) return baseThickness;
  if (zoomRanges.length === 1) {
    return interpolateFocusThickness(zoomRanges[0], focusPositions, controlT);
  }

  const { fromIndex: index, fraction } = stationSegment(zoomT, zoomRanges.length);
  if (focusPositions.length === 2) {
    const dInfinity = lerp(zoomRanges[index][0], zoomRanges[index + 1][0], fraction);
    const dClose = lerp(zoomRanges[index][1], zoomRanges[index + 1][1], fraction);
    return lerp(dInfinity, dClose, controlT);
  }
  const { fromIndex, toIndex, fraction: focusFraction } = focusInterpolationSegment(focusPositions, controlT);
  const fromThickness = lerp(zoomRanges[index][fromIndex], zoomRanges[index + 1][fromIndex], fraction);
  const toThickness = lerp(zoomRanges[index][toIndex], zoomRanges[index + 1][toIndex], fraction);
  return lerp(fromThickness, toThickness, focusFraction);
}

/**
 * Resolve an aberration-controlled gap at the current control and zoom positions.
 *
 * Legacy two-position controls use normalized `0..1` travel. Three-position controls
 * use signed `-1..1` travel so their center position remains the universal default `0`.
 *
 * @param baseThickness - authored default thickness in mm
 * @param range - optional two- or three-position aberration range
 * @param isZoom - whether the lens uses zoom-indexed ranges
 * @param controlT - normalized or signed aberration control
 * @param zoomT - normalized zoom control
 * @returns current aberration-controlled thickness in mm
 */
export function resolveAberrationThickness(
  baseThickness: number,
  range: AberrationVarRange | undefined,
  isZoom: boolean,
  controlT: number,
  zoomT: number,
): number {
  if (!range) return baseThickness;
  const positions = isZoom
    ? interpolateAberrationPositionsAtZoom(range as AberrationPositionRange[], zoomT)
    : (range as AberrationPositionRange);
  if (positions.length === 2) return lerp(positions[0], positions[1], controlT);
  return controlT <= 0 ? lerp(positions[1], positions[0], -controlT) : lerp(positions[1], positions[2], controlT);
}

interface FocusInterpolationSegment {
  fromIndex: number;
  toIndex: number;
  fraction: number;
}

function focusInterpolationSegment(focusPositions: readonly number[], controlT: number): FocusInterpolationSegment {
  if (focusPositions.length <= 1) return { fromIndex: 0, toIndex: 0, fraction: 0 };

  let toIndex = 1;
  while (toIndex < focusPositions.length - 1 && controlT > focusPositions[toIndex]) toIndex++;
  if (controlT > focusPositions[focusPositions.length - 1]) toIndex = focusPositions.length - 1;

  const fromIndex = toIndex - 1;
  const fromPosition = focusPositions[fromIndex];
  const toPosition = focusPositions[toIndex];
  return {
    fromIndex,
    toIndex,
    fraction: (controlT - fromPosition) / (toPosition - fromPosition),
  };
}

function interpolateFocusThickness(
  thicknesses: readonly number[],
  focusPositions: readonly number[],
  controlT: number,
): number {
  if (thicknesses.length === 0) return 0;
  if (thicknesses.length === 1) return thicknesses[0];
  if (thicknesses.length === 2) return lerp(thicknesses[0], thicknesses[1], controlT);
  const { fromIndex, toIndex, fraction } = focusInterpolationSegment(focusPositions, controlT);
  return lerp(thicknesses[fromIndex], thicknesses[toIndex], fraction);
}

function interpolateAberrationPositionsAtZoom(
  zoomRanges: AberrationPositionRange[],
  zoomT: number,
): AberrationPositionRange {
  if (zoomRanges.length === 0) return [0, 0];
  if (zoomRanges.length === 1) return zoomRanges[0];
  const { fromIndex: index, fraction } = stationSegment(zoomT, zoomRanges.length);
  const from = zoomRanges[index];
  const to = zoomRanges[index + 1];
  if (from.length === 3 && to.length === 3) {
    return [lerp(from[0], to[0], fraction), lerp(from[1], to[1], fraction), lerp(from[2], to[2], fraction)];
  }
  return [lerp(from[0], to[0], fraction), lerp(from[1], to[1], fraction)];
}

/**
 * Locate an authored zoom station in normalized control coordinates.
 * @param zoomIndex - zero-based station index
 * @param zoomCount - authored station count
 * @returns station control in [0, 1], or zero for a prime
 */
export function zoomIndexToT(zoomIndex: number, zoomCount: number): number {
  if (zoomCount <= 1) return 0;
  return zoomIndex / (zoomCount - 1);
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
  return interpolateStationTable(zoomT, L.zoomEFLs!);
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
  return interpolateStationTable(zoomT, L.zoomEPs!);
}

/**
 * Interpolate wide-open f-number for a zoom state.
 *
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @returns wide-open f-number
 */
export function fopenAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom || !L.zoomFOPENs) return L.FOPEN;
  return interpolateStationTable(zoomT, L.zoomFOPENs);
}

/**
 * Interpolate declared display half-field for a zoom state.
 *
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @returns half field angle in degrees
 */
export function halfFieldAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.halfField;
  return interpolateStationTable(zoomT, L.zoomHalfFields!);
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
  return interpolateStationTable(zoomT, L.zoomTracingHalfFields!);
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
  return interpolateStationTable(zoomT, L.zoomYRatios!);
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
  return interpolateStationTable(zoomT, L.zoomBs!);
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
  return interpolateStationTable(zoomT, arr);
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
  return interpolateStationTable(zoomT, L.zoomEpZRelStops!);
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
  return interpolateStationTable(zoomT, arr);
}

/**
 * Read the close-focus endpoint under the historical zoom-control clamp.
 * @param zoomT - normalized zoom control
 * @param L - runtime lens with an optional distance schedule
 * @returns close-focus distance in metres
 */
export function closeFocusAtZoom(zoomT: number, L: RuntimeLens): number {
  const values = L.zoomCloseFocusM;
  if (!L.isZoom || !values || values.length < 2) return L.closeFocusM;
  return interpolateStationTable(clampStationControl(zoomT), values);
}

/**
 * Read the physical iris schedule under the historical zoom-control clamp.
 * @param zoomT - normalized zoom control
 * @param L - physical stop and optional zoom schedule
 * @returns wide-open stop semi-diameter in mm
 */
export function wideOpenStopAtZoom(
  zoomT: number,
  L: Pick<RuntimeLens, "zoomStopSDs" | "isZoom" | "stopPhysSD">,
): number {
  const values = L.zoomStopSDs;
  if (!L.isZoom || !values || values.length < 2) return L.stopPhysSD;
  return interpolateStationTable(clampStationControl(zoomT), values);
}
