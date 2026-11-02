/**
 * Chief-relative scalar launches for off-axis analysis on the prepared trace stack.
 *
 * Keeps pupil offsets in the first-vertex plane; the production skew adapters own
 * preparation, ray lead, clipping, and transmission.
 */

import type { ChromaticChannel, RuntimeLens } from "../../types/optics.js";
import type { RuntimeSkewRayTraceResult } from "./runtimeRayResult.js";
import { traceSkewRay, traceSkewRayChromatic } from "./rayAdapters.js";

/**
 * Trace a skew ray launched relative to the solved chief ray.
 *
 * @param xFraction - sagittal pupil fraction
 * @param yFraction - meridional pupil fraction
 * @param chiefLaunchHeight - chief-ray launch height in mm
 * @param fieldSlope - field slope dy/dz
 * @param entrancePupilSemiDiameter - entrance-pupil semi-diameter in mm
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param stopSD - current physical stop semi-diameter in mm
 * @param ghost - whether clipped hits should be retained
 * @param L - runtime lens object
 * @param aberrationT - normalized aberration spacing slider
 * @returns final skew ray relative to the selected off-axis field
 */
export function traceChiefRelativeSkewRay(
  xFraction: number,
  yFraction: number,
  chiefLaunchHeight: number,
  fieldSlope: number,
  entrancePupilSemiDiameter: number,
  focusT: number,
  zoomT: number,
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  aberrationT = 0,
): RuntimeSkewRayTraceResult {
  return traceSkewRay(
    xFraction * entrancePupilSemiDiameter,
    chiefLaunchHeight + yFraction * entrancePupilSemiDiameter,
    0,
    fieldSlope,
    focusT,
    zoomT,
    stopSD,
    ghost,
    L,
    aberrationT,
  );
}

/**
 * Trace a chromatic skew ray launched relative to the solved chief ray.
 *
 * @param xFraction - sagittal pupil fraction
 * @param yFraction - meridional pupil fraction
 * @param chiefLaunchHeight - chief-ray launch height in mm
 * @param fieldSlope - field slope dy/dz
 * @param entrancePupilSemiDiameter - entrance-pupil semi-diameter in mm
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param stopSD - current physical stop semi-diameter in mm
 * @param ghost - whether clipped hits should be retained
 * @param L - runtime lens object
 * @param channel - chromatic channel selecting per-surface indices
 * @param aberrationT - normalized aberration spacing slider
 * @returns final skew ray relative to the selected off-axis field
 */
export function traceChiefRelativeSkewRayChromatic(
  xFraction: number,
  yFraction: number,
  chiefLaunchHeight: number,
  fieldSlope: number,
  entrancePupilSemiDiameter: number,
  focusT: number,
  zoomT: number,
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  channel: ChromaticChannel,
  aberrationT = 0,
): RuntimeSkewRayTraceResult {
  return traceSkewRayChromatic(
    xFraction * entrancePupilSemiDiameter,
    chiefLaunchHeight + yFraction * entrancePupilSemiDiameter,
    0,
    fieldSlope,
    focusT,
    zoomT,
    stopSD,
    ghost,
    L,
    channel,
    aberrationT,
  );
}
