/**
 * Surface sag math — shared spherical and conic-polynomial formulas for optical surfaces.
 *
 * Provides the sign-convention-sensitive sag and slope primitives used by layout, validation, and
 * exact surface intersection.
 */

import type { AsphericCoefficients } from "../../types/optics.js";

/** Radius magnitude above which the engine treats a surface as optically flat. */
export const FLAT_R_THRESHOLD = 1e10;
/** tan(64.16 deg): default rim-slope cap for rejecting unrealistic authored apertures. */
export const MAX_RIM_SLOPE_TAN = 0.9 / Math.sqrt(1 - 0.9 ** 2);
export const DEFAULT_MAX_RIM_ANGLE_DEG = (Math.atan(MAX_RIM_SLOPE_TAN) * 180) / Math.PI;

/**
 * Compute spherical surface sag at radial height h.
 *
 * Uses the standard sag equation z = c*h^2 / (1 + sqrt(1 - c^2*h^2)),
 * where c = 1/R. Positive z follows the image-side optical axis.
 *
 * @param h - radial ray height in mm
 * @param R - signed radius of curvature in mm
 * @returns axial sag in mm, or 0 for an optically flat surface
 */
export function sag(h: number, R: number): number {
  if (Math.abs(R) > FLAT_R_THRESHOLD) return 0;
  const c = 1 / R;
  const h2 = h * h;
  const d = 1 - c * c * h2;
  return (c * h2) / (1 + Math.sqrt(d > 0 ? d : 0));
}

/**
 * Compute conic-plus-polynomial aspheric sag at radial height h.
 *
 * Applies the even-order asphere convention used by lens patents:
 * z = conic(K, R, h) + A4*h^4 + A6*h^6 + ...
 *
 * @param h - radial ray height in mm
 * @param R - signed base radius in mm
 * @param asph - optional conic constant and polynomial coefficients
 * @returns axial sag in mm using the image-side-positive z convention
 */
export function conicPolySag(h: number, R: number, asph: AsphericCoefficients | undefined): number {
  if (Math.abs(R) > FLAT_R_THRESHOLD && !asph) return 0;
  const c = Math.abs(R) > FLAT_R_THRESHOLD ? 0 : 1.0 / R;
  const K = asph ? asph.K : 0;
  const h2 = h * h;
  const d = 1 - (1 + K) * c * c * h2;
  const conic = (c * h2) / (1 + Math.sqrt(d > 0 ? d : 1e-12));
  if (!asph) return conic;
  const poly =
    asph.A4 * h2 * h2 +
    asph.A6 * h2 ** 3 +
    asph.A8 * h2 ** 4 +
    asph.A10 * h2 ** 5 +
    asph.A12 * h2 ** 6 +
    asph.A14 * h2 ** 7 +
    (asph.A16 ?? 0) * h2 ** 8 +
    (asph.A18 ?? 0) * h2 ** 9 +
    (asph.A20 ?? 0) * h2 ** 10;
  return conic + poly;
}

/**
 * Compute dz/dh for spherical or conic-polynomial sag.
 *
 * The derivative feeds exact surface normals; near-invalid conic domains clamp
 * the denominator so tracing reports a finite miss instead of exploding.
 *
 * @param h - radial ray height in mm
 * @param R - signed base radius in mm
 * @param asph - optional conic constant and polynomial coefficients
 * @returns radial sag slope dz/dh
 */
export function sagSlopeRaw(h: number, R: number, asph: AsphericCoefficients | undefined): number {
  if (Math.abs(R) > FLAT_R_THRESHOLD && !asph) return 0;
  const c = Math.abs(R) > FLAT_R_THRESHOLD ? 0 : 1.0 / R;
  const K = asph ? asph.K : 0;
  const h2 = h * h;
  const denom2 = 1 - (1 + K) * c * c * h2;
  const conicSlope = (c * h) / Math.sqrt(denom2 > 0 ? denom2 : 1e-12);
  if (!asph) return conicSlope;
  const polySlope =
    h *
    (4 * asph.A4 * h2 +
      6 * asph.A6 * h2 * h2 +
      8 * asph.A8 * h2 ** 3 +
      10 * asph.A10 * h2 ** 4 +
      12 * asph.A12 * h2 ** 5 +
      14 * asph.A14 * h2 ** 6 +
      16 * (asph.A16 ?? 0) * h2 ** 7 +
      18 * (asph.A18 ?? 0) * h2 ** 8 +
      20 * (asph.A20 ?? 0) * h2 ** 9);
  return conicSlope + polySlope;
}
