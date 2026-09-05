/**
 * Surface-profile intersection solver — finds exact ray hits on sag and tilted-plane surfaces.
 *
 * Combines bracketed root search with Newton refinement so trace modules can distinguish
 * aperture misses from true intersection failures.
 */

import { solveBracketedRoot } from "./bracketedRoot.js";
import {
  INTERSECTION_BRACKET_SAMPLES,
  INTERSECTION_MAX_ITERATIONS,
  INTERSECTION_TOLERANCE,
  VECTOR_EPSILON,
} from "../constants.js";
import type { Ray3, SurfaceProfile, Vec3 } from "../types.js";
import { clamp } from "./numerics.js";
import { dot, normalize, subtract } from "./vector.js";

/** Typed reason for an exact surface-intersection failure. */
export type SurfaceIntersectionFailureReason =
  | "invalidDirection"
  | "invalidBounds"
  | "noBracket"
  | "noConvergedIntersection";

/**
 * Search and reporting options for intersecting a ray with one surface profile.
 *
 * Bounds are parametric ray distances in millimeters because ray directions are
 * normalized. `refractiveIndex`, when supplied, also reports optical path length.
 */
export interface SurfaceIntersectionOptions {
  minT?: number;
  maxT?: number;
  tolerance?: number;
  maxIterations?: number;
  bracketSamples?: number;
  refractiveIndex?: number;
  directionNormalized?: boolean;
}

/** Successful ray/surface intersection with geometry at the hit point. */
export interface SurfaceIntersectionSuccess {
  ok: true;
  t: number;
  point: Vec3;
  radius: number;
  normal: Vec3;
  residual: number;
  iterations: number;
  segmentLength: number;
  opticalPathLength: number | null;
}

/** Failed ray/surface intersection with the best residual when available. */
export interface SurfaceIntersectionFailure {
  ok: false;
  failureReason: SurfaceIntersectionFailureReason;
  residual: number | null;
  iterations: number;
}

/** Union result for exact surface-profile intersection. */
export type SurfaceIntersectionResult = SurfaceIntersectionSuccess | SurfaceIntersectionFailure;

interface SurfaceEvaluation {
  t: number;
  point: Vec3;
  radius: number;
  value: number;
  derivative: number;
}

/**
 * Intersect a normalized ray with a surface profile at a vertex plane.
 *
 * Flat and tilted planes solve analytically. Curved profiles solve
 * f(t) = ray.z(t) - surface.z(ray.x(t), ray.y(t)) with a bracketed
 * Newton iteration so grazing roots remain bounded.
 *
 * @param ray - origin and direction in engine coordinates
 * @param profile - surface sag/normal evaluator
 * @param vertexZ - axial vertex position in mm
 * @param options - search bounds, tolerances, and optional optical-path index
 * @returns success with hit geometry or a typed failure reason
 */
export function intersectSurfaceProfile(
  ray: Ray3,
  profile: SurfaceProfile,
  vertexZ: number,
  {
    minT = 0,
    maxT = Infinity,
    tolerance = INTERSECTION_TOLERANCE,
    maxIterations = INTERSECTION_MAX_ITERATIONS,
    bracketSamples = INTERSECTION_BRACKET_SAMPLES,
    refractiveIndex,
    directionNormalized = false,
  }: SurfaceIntersectionOptions = {},
): SurfaceIntersectionResult {
  const direction = directionNormalized ? ray.direction : normalize(ray.direction);
  if (!direction) return failure("invalidDirection", null, 0);
  if (!isValidBounds(minT, maxT)) return failure("invalidBounds", null, 0);

  if (profile.kind === "flat" || profile.kind === "tilted-plane") {
    return intersectProfilePlane(ray.origin, direction, profile, vertexZ, minT, maxT, tolerance, refractiveIndex);
  }

  if (!Number.isFinite(maxT)) return failure("invalidBounds", null, 0);
  const evalAt = (t: number): SurfaceEvaluation => evaluateProfile(ray.origin, direction, profile, vertexZ, t);
  const root = solveBracketedRoot(evalAt, {
    minT,
    maxT,
    tolerance,
    maxIterations,
    bracketSamples,
    seed: Math.abs(direction[2]) > VECTOR_EPSILON ? (vertexZ - ray.origin[2]) / direction[2] : NaN,
    validValue: isFiniteValueEvaluation,
    validNewton: isFiniteEvaluation,
  });
  return root.kind === "success"
    ? makeSuccess(root.value, profile, vertexZ, tolerance, refractiveIndex, root.iterations)
    : failure(root.failureReason, root.residual, root.iterations);
}

function intersectProfilePlane(
  origin: Vec3,
  direction: Vec3,
  profile: SurfaceProfile,
  vertexZ: number,
  minT: number,
  maxT: number,
  tolerance: number,
  refractiveIndex: number | undefined,
): SurfaceIntersectionResult {
  const planePoint = profile.pointAt(vertexZ, 0, 0);
  const normal = profile.normalAt(planePoint, vertexZ);
  const denom = dot(normal, direction);
  if (Math.abs(denom) <= VECTOR_EPSILON) return failure("noBracket", null, 0);

  const t = dot(subtract(planePoint, origin), normal) / denom;
  if (!Number.isFinite(t) || t < minT - tolerance || t > maxT + tolerance) {
    return failure("noBracket", null, 0);
  }

  const clampedT = clamp(t, minT, maxT);
  const point = addRay(origin, direction, clampedT);
  const residual = dot(normal, subtract(point, planePoint));
  return {
    ok: true,
    t: clampedT,
    point,
    radius: Math.hypot(point[0], point[1]),
    normal,
    residual,
    iterations: 0,
    segmentLength: clampedT,
    opticalPathLength: refractiveIndex === undefined ? null : refractiveIndex * clampedT,
  };
}

function evaluateProfile(
  origin: Vec3,
  direction: Vec3,
  profile: SurfaceProfile,
  vertexZ: number,
  t: number,
): SurfaceEvaluation {
  const point = addRay(origin, direction, t);
  const radius = Math.hypot(point[0], point[1]);
  const slope = profile.slope(radius);
  /* Chain rule for f(t) = z_ray(t) - z_surface(r(t)):
   * df/dt = dz/dt - (dz/dr) * dr/dt. */
  const drdt = radius > VECTOR_EPSILON ? (point[0] * direction[0] + point[1] * direction[1]) / radius : 0;
  const value = point[2] - profile.pointAt(vertexZ, point[0], point[1])[2];
  const derivative = direction[2] - slope * drdt;
  return { t, point, radius, value, derivative };
}

function makeSuccess(
  evaluation: SurfaceEvaluation,
  profile: SurfaceProfile,
  vertexZ: number,
  _tolerance: number,
  refractiveIndex: number | undefined,
  iterations: number,
): SurfaceIntersectionSuccess {
  return {
    ok: true,
    t: evaluation.t,
    point: evaluation.point,
    radius: evaluation.radius,
    normal: profile.normalAt(evaluation.point, vertexZ),
    residual: evaluation.value,
    iterations,
    segmentLength: evaluation.t,
    opticalPathLength: refractiveIndex === undefined ? null : refractiveIndex * evaluation.t,
  };
}

function failure(
  failureReason: SurfaceIntersectionFailureReason,
  residual: number | null,
  iterations: number,
): SurfaceIntersectionFailure {
  return { ok: false, failureReason, residual, iterations };
}

function isValidBounds(minT: number, maxT: number): boolean {
  return Number.isFinite(minT) && minT >= 0 && maxT >= minT && (Number.isFinite(maxT) || maxT === Infinity);
}

function isFiniteValueEvaluation(evaluation: SurfaceEvaluation): boolean {
  return (
    Number.isFinite(evaluation.t) &&
    Number.isFinite(evaluation.point[0]) &&
    Number.isFinite(evaluation.point[1]) &&
    Number.isFinite(evaluation.point[2]) &&
    Number.isFinite(evaluation.radius) &&
    Number.isFinite(evaluation.value)
  );
}

function isFiniteEvaluation(evaluation: SurfaceEvaluation): boolean {
  return (
    isFiniteValueEvaluation(evaluation) &&
    Number.isFinite(evaluation.derivative) &&
    Math.abs(evaluation.derivative) > 1e-14
  );
}

function addRay(origin: Vec3, direction: Vec3, t: number): Vec3 {
  return [origin[0] + direction[0] * t, origin[1] + direction[1] * t, origin[2] + direction[2] * t];
}
