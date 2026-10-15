/**
 * Legacy sag-surface intersection — the stack tracer's entry to the intersection kernel.
 *
 * The stack tracer (`exactSurfaceTrace.ts`) names a surface by its index into a RuntimeLens-shaped object and reads a
 * hit as mutable tuples with a `surfaceIdx` and its own failure names. This module turns that call into one
 * `intersectSurfaceProfile` call and its result back. It finds no root of its own: the routes, the bounds, the
 * residual rule, the conic domain and cap selection are the kernel's (`geometry/intersect.ts`). It is deleted with the
 * stack tracer (S4.P2.T4).
 */

import { intersectSurfaceProfile } from "../geometry/intersect.js";
import { createSurfaceProfile, sagSlopeRaw } from "../geometry/surfaceProfile.js";
import type { AsphericCoefficients } from "../../types/optics.js";

/** Typed failure reason from the RuntimeLens-shaped sag-surface intersection solver. */
export type SurfaceIntersectionFailureReason =
  | "invalidRayDirection"
  | "invalidBounds"
  | "noBracket"
  | "noConvergedIntersection";

/** 3D vector tuple in engine coordinates: x sagittal, y meridional, z axial millimeters. */
export type Vector3 = [number, number, number];

/** Ray input for the legacy exact tracer; direction is normalized by the solver. */
export interface SurfaceIntersectionRay {
  origin: Vector3;
  direction: Vector3;
}

/** Search controls for intersecting a ray with one RuntimeLens sag surface. */
export interface SurfaceIntersectionOptions {
  minT?: number;
  maxT?: number;
  tolerance?: number;
  maxIterations?: number;
  bracketSamples?: number;
  refractiveIndex?: number;
}

/** Minimal RuntimeLens-shaped surface/asphere lookup needed by the solver. */
export interface SurfaceIntersectionLens {
  S: readonly { R: number; sd?: number }[];
  asphByIdx: Record<number, AsphericCoefficients>;
}

/** Successful RuntimeLens sag-surface hit with geometry and residual diagnostics. */
export interface SurfaceIntersectionSuccess {
  ok: true;
  surfaceIdx: number;
  t: number;
  point: Vector3;
  radius: number;
  normal: Vector3;
  residual: number;
  /** Accepted residual bound in mm; larger than requested only for coordinate roundoff. */
  effectiveTolerance: number;
  iterations: number;
  segmentLength: number;
  opticalPathLength: number | null;
}

/** Failed RuntimeLens sag-surface hit with a typed reason and optional residual. */
export interface SurfaceIntersectionFailure {
  ok: false;
  surfaceIdx: number;
  failureReason: SurfaceIntersectionFailureReason;
  residual: number | null;
  iterations: number;
}

/** Union result for RuntimeLens sag-surface intersection. */
export type SurfaceIntersectionResult = SurfaceIntersectionSuccess | SurfaceIntersectionFailure;

/**
 * Normalize a 3D direction vector for the legacy exact tracer.
 *
 * @param vector - x/y/z direction components
 * @returns unit vector, or null when the input has no finite direction
 */
export function normalizeVector3([x, y, z]: Vector3): Vector3 | null {
  const length = Math.hypot(x, y, z);
  if (!isFinite(length) || length <= 0) return null;
  return [x / length, y / length, z / length];
}

/**
 * Compute the outward normal of a sag surface at a transverse position.
 *
 * A hit carries the kernel's normal. This one serves the stack tracer's ghost fallback point, which lies on the
 * clamped continuation of the sag and is no hit of any solver.
 *
 * @param x - sagittal coordinate in mm
 * @param y - meridional coordinate in mm
 * @param surfaceIdx - zero-based surface index
 * @param L - RuntimeLens-shaped surface/asphere lookup
 * @returns normalized surface normal
 */
export function surfaceNormalAtHit(x: number, y: number, surfaceIdx: number, L: SurfaceIntersectionLens): Vector3 {
  const radius = Math.hypot(x, y);
  if (radius < 1e-12) return [0, 0, 1];

  const slope = sagSlopeRaw(radius, L.S[surfaceIdx].R, L.asphByIdx[surfaceIdx]);
  const invRadius = 1 / radius;
  const dzdx = slope * x * invRadius;
  const dzdy = slope * y * invRadius;
  const invMag = 1 / Math.hypot(dzdx, dzdy, 1);
  return [-dzdx * invMag, -dzdy * invMag, invMag];
}

/**
 * Intersect a ray with one flat, spherical or aspheric sag surface, through the intersection kernel.
 *
 * The surface's profile is the one `createSurfaceProfile` builds from its radius and asphere entry, so the solve is
 * the prepared tracer's for the same surface: closed form on a sphere or a polynomial-free conic, the conic-seeded
 * route or the bracketed iteration on a polynomial asphere, an analytic plane. The surface's `sd` is the authored
 * cap of an asphere. A point beyond the conic domain is no surface, so a ray that only meets the clamped
 * continuation there is a `noBracket` miss.
 *
 * @param ray - origin and direction in engine coordinates
 * @param surfaceIdx - zero-based surface index
 * @param vertexZ - surface vertex position in mm
 * @param L - RuntimeLens-shaped surface/asphere lookup
 * @param options - search bounds, tolerances, and optional optical-path index; an iteration budget or a scan
 *   density selects the kernel's iterative path, as it does there
 * @returns hit geometry or typed failure diagnostics
 */
export function intersectSagSurface(
  ray: SurfaceIntersectionRay,
  surfaceIdx: number,
  vertexZ: number,
  L: SurfaceIntersectionLens,
  options: SurfaceIntersectionOptions = {},
): SurfaceIntersectionResult {
  const surface = L.S[surfaceIdx];
  // Radius and coefficients alone: a tilted interaction normal is the tracer's to solve, never this entry's.
  const profile = createSurfaceProfile({ R: surface.R }, L.asphByIdx[surfaceIdx]);
  const hit = intersectSurfaceProfile(ray, profile, vertexZ, { ...options, clearRadius: surface.sd });
  if (!hit.ok) {
    return {
      ok: false,
      surfaceIdx,
      failureReason: hit.failureReason === "invalidDirection" ? "invalidRayDirection" : hit.failureReason,
      residual: hit.residual,
      iterations: hit.iterations,
    };
  }
  // Named members: the kernel's `closedFormFallback` stays the kernel's, and the tuples are the caller's to keep.
  return {
    ok: true,
    surfaceIdx,
    t: hit.t,
    point: [hit.point[0], hit.point[1], hit.point[2]],
    radius: hit.radius,
    normal: [hit.normal[0], hit.normal[1], hit.normal[2]],
    residual: hit.residual,
    effectiveTolerance: hit.effectiveTolerance,
    iterations: hit.iterations,
    segmentLength: hit.segmentLength,
    opticalPathLength: hit.opticalPathLength,
  };
}
