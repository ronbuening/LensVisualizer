/**
 * Intersection roundoff envelopes — coordinate-aware limits for otherwise stalled exact solves.
 *
 * The requested residual remains the normal stopping criterion. These bounds account for
 * cancellation in origin + direction*t and amplification of transverse error by a steep sag.
 */

import type { Vec3 } from "../types.js";

/**
 * Bound residual roundoff in a radial sag equation, in axial millimeters.
 *
 * Absolute ray operands survive even when the returned coordinate nearly cancels.
 * radius*slopeMagnitude bounds the absolute conic/polynomial sag terms, including
 * cancellation between aspheric coefficients. The caller supplies the sum-of-absolute-
 * terms slope bound for aspheres, not their potentially cancelling local derivative.
 * The 16-epsilon allowance covers coordinate operations, radius, sag and subtraction;
 * the power factor in the slope bound also covers polynomial power evaluation.
 *
 * @param origin - ray origin in mm
 * @param direction - unit ray direction
 * @param t - ray distance in mm
 * @param vertexZ - surface vertex in mm
 * @param radius - evaluated radial coordinate in mm
 * @param sag - evaluated axial sag in mm
 * @param slopeMagnitude - conservative absolute radial slope bound
 * @returns finite roundoff allowance, or NaN when no useful bound exists
 */
export function sagResidualRoundoff(
  origin: Vec3,
  direction: Vec3,
  t: number,
  vertexZ: number,
  radius: number,
  sag: number,
  slopeMagnitude: number,
): number {
  if (!(Number.isFinite(slopeMagnitude) && slopeMagnitude >= 0)) return NaN;
  const transverseScale =
    Math.abs(origin[0]) + Math.abs(direction[0] * t) + Math.abs(origin[1]) + Math.abs(direction[1] * t);
  const scale =
    Math.abs(origin[2]) +
    Math.abs(direction[2] * t) +
    Math.abs(vertexZ) +
    Math.max(Math.abs(sag), radius * slopeMagnitude) +
    slopeMagnitude * transverseScale;
  return Number.isFinite(scale) ? 16 * Number.EPSILON * Math.max(1, scale) : NaN;
}

/**
 * Bound analytic plane residual roundoff in normal-distance millimeters.
 *
 * Weighted absolute operands cover coordinate cancellation and the final dot product.
 * This convention remains well-conditioned for vertical planes: never divide by n.z.
 *
 * @param origin - ray origin in mm
 * @param direction - unit ray direction
 * @param t - ray distance in mm
 * @param planePoint - any point on the plane in mm
 * @param normal - unit plane normal
 * @returns normal-distance roundoff allowance in mm
 */
export function planeResidualRoundoff(
  origin: Vec3,
  direction: Vec3,
  t: number,
  planePoint: Vec3,
  normal: Vec3,
): number {
  let scale = 0;
  for (let axis = 0; axis < 3; axis++) {
    scale +=
      Math.abs(normal[axis]) * (Math.abs(origin[axis]) + Math.abs(direction[axis] * t) + Math.abs(planePoint[axis]));
  }
  return Number.isFinite(scale) ? 16 * Number.EPSILON * Math.max(1, scale) : NaN;
}
