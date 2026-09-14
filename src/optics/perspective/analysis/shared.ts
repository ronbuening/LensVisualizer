/**
 * Shared camera/sensor-frame helpers for movement-aware optical analyses.
 *
 * These utilities keep displacement signs and zero-movement references
 * consistent across distortion, vignetting, and pupil calculations.
 */

import { ZERO_LENS_MOVEMENT } from "../../lensMovement.js";
import { add, dot, length, scale, subtract } from "../../math/vector.js";
import type { Vec3 } from "../../types.js";
import { IMAGE_FORMAT_BY_ID, isImageFormatId } from "../../../utils/catalog/lensTaxonomy.js";
import type { SensorUv } from "../fieldSampling.js";
import { createPerspectiveTraceContext, type PerspectiveTraceContext } from "../trace.js";

/** Displacement resolved in the fixed sensor's right/down/normal basis. */
export interface SensorFrameDisplacement {
  /** Positive toward the sensor's right edge. */
  uMm: number;
  /** Positive toward the sensor's down/meridional edge. */
  vMm: number;
  /** Positive along the canonical sensor normal. */
  normalMm: number;
  magnitudeMm: number;
}

/**
 * Resolve a point-to-point displacement in the context's fixed sensor basis.
 *
 * @param context - perspective trace context owning the fixed sensor basis
 * @param from - displacement origin in camera coordinates (mm)
 * @param to - displacement destination in camera coordinates (mm)
 * @returns signed sensor-basis components and Euclidean magnitude in mm
 */
export function sensorFrameDisplacement(
  context: Pick<PerspectiveTraceContext, "sensorBasis">,
  from: Vec3,
  to: Vec3,
): SensorFrameDisplacement {
  const delta = subtract(to, from);
  return {
    uMm: dot(delta, context.sensorBasis.u),
    vMm: dot(delta, context.sensorBasis.v),
    normalMm: dot(delta, context.sensorBasis.normal),
    magnitudeMm: length(delta),
  };
}

/**
 * Bind the same camera-anchored prepared state and fixed sensor to zero movement.
 *
 * @param context - active context whose intrinsic state and sensor stay fixed
 * @returns an identity-pose trace context for matched-reference calculations
 */
export function createZeroMovementPerspectiveContext(context: PerspectiveTraceContext): PerspectiveTraceContext {
  return createPerspectiveTraceContext({
    preparedState: context.state,
    sensorPlane: context.sensorPlane,
    movement: ZERO_LENS_MOVEMENT,
    tiltPivot: context.pose.tiltPivot,
  });
}

/**
 * Resolve a normalized format coordinate to the fixed sensor plane.
 *
 * @param context - trace context carrying format metadata and sensor basis
 * @param sensorUv - normalized coordinate where ±1 reaches each format edge
 * @returns camera-space sensor point, or null for invalid/out-of-bounds input
 */
export function sensorPointForUv(context: PerspectiveTraceContext, sensorUv: SensorUv): Vec3 | null {
  const imageFormat = context.state.lens.source.imageFormat;
  if (!isImageFormatId(imageFormat) || !sensorUvInsideFormat(sensorUv)) return null;
  const format = IMAGE_FORMAT_BY_ID[imageFormat];
  return add(
    context.sensorPlane.point,
    add(
      scale(context.sensorBasis.u, sensorUv.u * (format.widthMm / 2)),
      scale(context.sensorBasis.v, sensorUv.v * (format.heightMm / 2)),
    ),
  );
}

/**
 * Test a finite normalized coordinate against the rectangular active format.
 *
 * @param sensorUv - normalized fixed-sensor coordinate
 * @returns true when both coordinates lie on or inside the format bounds
 */
export function sensorUvInsideFormat(sensorUv: SensorUv): boolean {
  return (
    Number.isFinite(sensorUv.u) &&
    Number.isFinite(sensorUv.v) &&
    Math.abs(sensorUv.u) <= 1 + 1e-9 &&
    Math.abs(sensorUv.v) <= 1 + 1e-9
  );
}

/**
 * Compute a finite ratio without manufacturing values for a zero denominator.
 *
 * @param numerator - finite measured quantity
 * @param denominator - finite non-zero reference quantity
 * @returns numerator / denominator, or null when the ratio is undefined
 */
export function finiteRatio(numerator: number, denominator: number): number | null {
  if (!Number.isFinite(numerator) || !Number.isFinite(denominator) || Math.abs(denominator) <= 1e-15) return null;
  const ratio = numerator / denominator;
  return Number.isFinite(ratio) ? ratio : null;
}
