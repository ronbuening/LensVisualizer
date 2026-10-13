/**
 * Legacy sag-surface intersection — exact ray/surface solver over RuntimeLens-shaped data.
 *
 * Supports the internal exact trace path that predates EngineLens profiles while preserving detailed
 * failure reasons for regression tests and diagnostics.
 */

import { selectAsphericCapHit } from "../math/intersection.js";
import { INTERSECTION_BRACKET_SAMPLES, INTERSECTION_MAX_ITERATIONS, INTERSECTION_TOLERANCE } from "../constants.js";
import { planeResidualRoundoff, sagResidualRoundoff } from "../math/intersectionTolerance.js";
import { createAsphericProfile } from "../math/surfaceProfile.js";
import type { AsphericCoefficients } from "../../types/optics.js";
import { FLAT_R_THRESHOLD, conicPolySag, sagSlopeRaw } from "./surfaceMath.js";

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

const MIN_DZ = 1e-12;

interface SurfaceEvaluation {
  t: number;
  x: number;
  y: number;
  z: number;
  radius: number;
  sag: number;
  slope: number;
  value: number;
  derivative: number;
}

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
 * Compute the outward normal for a sag-surface hit.
 *
 * The normal is built from dz/dx and dz/dy so spherical and aspheric surfaces
 * share the same sign convention used by vector Snell/reflection.
 *
 * @param x - sagittal hit coordinate in mm
 * @param y - meridional hit coordinate in mm
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
 * Intersect a ray with one spherical or aspheric sag surface.
 *
 * Solves f(t) = z_ray(t) - (vertexZ + sag(r(t))) with a safeguarded Newton
 * iteration inside a sign-changing bracket, so grazing and steep-rim roots
 * cannot stall; flat surfaces fall back to an analytic plane intersection.
 *
 * @param ray - origin and direction in engine coordinates
 * @param surfaceIdx - zero-based surface index
 * @param vertexZ - surface vertex position in mm
 * @param L - RuntimeLens-shaped surface/asphere lookup
 * @param options - search bounds, tolerances, and optional optical-path index
 * @returns hit geometry or typed failure diagnostics
 */
export function intersectSagSurface(
  ray: SurfaceIntersectionRay,
  surfaceIdx: number,
  vertexZ: number,
  L: SurfaceIntersectionLens,
  options: SurfaceIntersectionOptions = {},
): SurfaceIntersectionResult {
  const hit = intersectUnboundedSagSurface(ray, surfaceIdx, vertexZ, L, options);
  const surface = L.S[surfaceIdx];
  const asphere = L.asphByIdx[surfaceIdx];
  if (!hit.ok || !asphere || surface.sd === undefined) return hit;
  // Runtime builder/validator and legacy vector/folded callers use the same cap selection as prepared traces.
  const physical = selectAsphericCapHit(
    ray,
    createAsphericProfile(surface.R, asphere),
    vertexZ,
    {
      ...options,
      clearRadius: surface.sd,
    },
    hit,
  );
  if (!physical.ok) {
    if (physical.failureReason === "noBracket") return hit;
    return failure(
      surfaceIdx,
      physical.failureReason === "invalidDirection" ? "invalidRayDirection" : physical.failureReason,
      physical.residual,
      physical.iterations,
    );
  }
  // The shared selector already retains an exterior hit when the authored cap is missed.
  if (physical === hit) return hit;
  return { ...physical, surfaceIdx, point: [...physical.point], normal: [...physical.normal] };
}

function intersectUnboundedSagSurface(
  ray: SurfaceIntersectionRay,
  surfaceIdx: number,
  vertexZ: number,
  L: SurfaceIntersectionLens,
  {
    minT = 0,
    maxT = Infinity,
    tolerance = INTERSECTION_TOLERANCE,
    maxIterations = INTERSECTION_MAX_ITERATIONS,
    bracketSamples = INTERSECTION_BRACKET_SAMPLES,
    refractiveIndex,
  }: SurfaceIntersectionOptions = {},
): SurfaceIntersectionResult {
  const direction = normalizeVector3(ray.direction);
  if (direction === null) {
    return failure(surfaceIdx, "invalidRayDirection", null, 0);
  }
  if (!isFinite(minT) || minT < 0 || maxT < minT || (!isFinite(maxT) && maxT !== Infinity)) {
    return failure(surfaceIdx, "invalidBounds", null, 0);
  }

  const { R } = L.S[surfaceIdx];
  const asph = L.asphByIdx[surfaceIdx];
  if (Math.abs(R) > FLAT_R_THRESHOLD && !asph) {
    return intersectFlatSurface(ray.origin, direction, surfaceIdx, vertexZ, minT, maxT, tolerance, refractiveIndex);
  }

  const evalAt = (t: number): SurfaceEvaluation => evaluateSurface(ray.origin, direction, surfaceIdx, vertexZ, L, t);
  const bracket = findBracket(evalAt, minT, maxT, tolerance, bracketSamples);
  if (bracket.kind === "success") {
    return makeSuccess(bracket.value, surfaceIdx, L, tolerance, refractiveIndex, bracket.iterations);
  }
  if (bracket.kind === "failure") {
    return failure(surfaceIdx, bracket.failureReason, bracket.residual, bracket.iterations);
  }

  let { lo, hi, fLo } = bracket;
  // Z-projected seed is meaningless when direction[2] ≈ 0 (bounding-sphere
  // launch). Fall back to the bracket midpoint, which is a slower but always
  // valid starting guess for the Newton iteration below.
  const zProjectedSeed = Math.abs(direction[2]) > MIN_DZ ? (vertexZ - ray.origin[2]) / direction[2] : NaN;
  const initialSeed =
    isFinite(zProjectedSeed) && zProjectedSeed > lo && zProjectedSeed < hi ? zProjectedSeed : (lo + hi) / 2;
  let t = clamp(initialSeed, lo, hi);
  /* Safeguarded Newton (rtsafe): a Newton step must stay inside the sign-changing
   * bracket and be at most half the step before last; otherwise bisect. Without the
   * halving rule, a seed on a sphere's steep continuation beyond |R| (slope ~1e6)
   * creeps through the bracket in micrometer steps and never reaches a
   * well-conditioned rim root elsewhere in it. */
  let stepBeforeLast = hi - lo;
  let lastStep = stepBeforeLast;
  const roundoffTolerance = (value: SurfaceEvaluation): number => {
    const slopeMagnitude = asph ? createAsphericProfile(R, asph).maxAbsSlope!(value.radius) : Math.abs(value.slope);
    return Math.max(
      tolerance,
      sagResidualRoundoff(ray.origin, direction, value.t, vertexZ, value.radius, value.sag, slopeMagnitude),
    );
  };

  for (let iterations = 1; iterations <= maxIterations; iterations++) {
    const current = evalAt(t);
    if (!isFiniteValueEvaluation(current)) return failure(surfaceIdx, "noConvergedIntersection", null, iterations);
    if (Math.abs(current.value) <= tolerance) {
      return makeSuccess(current, surfaceIdx, L, tolerance, refractiveIndex, iterations);
    }

    if (sameSign(current.value, fLo)) {
      lo = t;
      fLo = current.value;
    } else {
      hi = t;
    }

    const newtonT = isFiniteEvaluation(current) ? t - current.value / current.derivative : NaN;
    // Preserve the requested target until the Newton correction cannot change t.
    if (newtonT === t) {
      const effectiveTolerance = roundoffTolerance(current);
      if (Math.abs(current.value) <= effectiveTolerance) {
        return makeSuccess(current, surfaceIdx, L, effectiveTolerance, refractiveIndex, iterations);
      }
    }
    const acceptNewton =
      isFinite(newtonT) && newtonT > lo && newtonT < hi && Math.abs(newtonT - t) <= Math.abs(stepBeforeLast) / 2;
    const nextT = acceptNewton ? newtonT : lo + (hi - lo) / 2;
    // The safeguarded midpoint can round to this endpoint even when the raw
    // Newton correction differs: an adjacent-float bracket cannot shrink further.
    if (nextT === t) {
      const effectiveTolerance = roundoffTolerance(current);
      if (Math.abs(current.value) <= effectiveTolerance) {
        return makeSuccess(current, surfaceIdx, L, effectiveTolerance, refractiveIndex, iterations);
      }
    }
    stepBeforeLast = lastStep;
    lastStep = acceptNewton ? newtonT - t : (hi - lo) / 2;
    t = nextT;
  }

  // Evaluate the pending step; discarding it can lose the last Newton improvement.
  const finalEval = evalAt(t);
  if (isFiniteValueEvaluation(finalEval) && Math.abs(finalEval.value) <= tolerance) {
    return makeSuccess(finalEval, surfaceIdx, L, tolerance, refractiveIndex, maxIterations);
  }
  if (isFiniteEvaluation(finalEval) && t - finalEval.value / finalEval.derivative === t) {
    const effectiveTolerance = roundoffTolerance(finalEval);
    if (Math.abs(finalEval.value) <= effectiveTolerance) {
      return makeSuccess(finalEval, surfaceIdx, L, effectiveTolerance, refractiveIndex, maxIterations);
    }
  }

  return failure(
    surfaceIdx,
    "noConvergedIntersection",
    isFiniteEvaluation(finalEval) ? finalEval.value : null,
    maxIterations,
  );
}

function intersectFlatSurface(
  origin: Vector3,
  direction: Vector3,
  surfaceIdx: number,
  vertexZ: number,
  minT: number,
  maxT: number,
  tolerance: number,
  refractiveIndex: number | undefined,
): SurfaceIntersectionResult {
  const t = (vertexZ - origin[2]) / direction[2];
  if (!isFinite(t) || t < minT - tolerance || t > maxT + tolerance) {
    return failure(surfaceIdx, "noBracket", null, 0);
  }

  const clampedT = clamp(t, minT, maxT);
  const point: Vector3 = [
    origin[0] + direction[0] * clampedT,
    origin[1] + direction[1] * clampedT,
    origin[2] + direction[2] * clampedT,
  ];
  const residual = point[2] - vertexZ;
  const effectiveTolerance =
    Math.abs(residual) <= tolerance
      ? tolerance
      : Math.max(tolerance, planeResidualRoundoff(origin, direction, clampedT, [0, 0, vertexZ], [0, 0, 1]));
  if (!Number.isFinite(residual) || !(Math.abs(residual) <= effectiveTolerance)) {
    return failure(surfaceIdx, "noConvergedIntersection", residual, 0);
  }

  return {
    ok: true,
    surfaceIdx,
    t: clampedT,
    point,
    radius: Math.hypot(point[0], point[1]),
    normal: [0, 0, 1],
    residual,
    effectiveTolerance,
    iterations: 0,
    segmentLength: clampedT,
    opticalPathLength: refractiveIndex === undefined ? null : refractiveIndex * clampedT,
  };
}

function evaluateSurface(
  origin: Vector3,
  direction: Vector3,
  surfaceIdx: number,
  vertexZ: number,
  L: SurfaceIntersectionLens,
  t: number,
): SurfaceEvaluation {
  const x = origin[0] + direction[0] * t;
  const y = origin[1] + direction[1] * t;
  const z = origin[2] + direction[2] * t;
  const radius = Math.hypot(x, y);
  const sag = conicPolySag(radius, L.S[surfaceIdx].R, L.asphByIdx[surfaceIdx]);
  const slope = sagSlopeRaw(radius, L.S[surfaceIdx].R, L.asphByIdx[surfaceIdx]);
  /* Chain rule for the sag equation:
   * f(t) = z_ray - z_surface, df/dt = dz/dt - (dz/dr)*(dr/dt). */
  const drdt = radius > 1e-12 ? (x * direction[0] + y * direction[1]) / radius : 0;
  const value = z - (vertexZ + sag);
  const derivative = direction[2] - slope * drdt;

  return { t, x, y, z, radius, sag, slope, value, derivative };
}

type BracketResult =
  | { kind: "success"; value: SurfaceEvaluation; iterations: number }
  | { kind: "failure"; failureReason: SurfaceIntersectionFailureReason; residual: number | null; iterations: number }
  | { kind: "bracket"; lo: number; hi: number; fLo: number };

function findBracket(
  evalAt: (t: number) => SurfaceEvaluation,
  minT: number,
  maxT: number,
  tolerance: number,
  bracketSamples: number,
): BracketResult {
  if (!isFinite(maxT)) return { kind: "failure", failureReason: "invalidBounds", residual: null, iterations: 0 };

  const loEval = evalAt(minT);
  if (!isFiniteValueEvaluation(loEval))
    return { kind: "failure", failureReason: "noBracket", residual: null, iterations: 0 };
  if (Math.abs(loEval.value) <= tolerance) return { kind: "success", value: loEval, iterations: 0 };

  const hiEval = evalAt(maxT);
  if (!isFiniteValueEvaluation(hiEval))
    return { kind: "failure", failureReason: "noBracket", residual: null, iterations: 0 };
  if (Math.abs(hiEval.value) <= tolerance) return { kind: "success", value: hiEval, iterations: 0 };
  if (!sameSign(loEval.value, hiEval.value)) {
    return { kind: "bracket", lo: minT, hi: maxT, fLo: loEval.value };
  }

  const samples = Math.max(2, Math.round(bracketSamples));
  let prev = loEval;
  let best = Math.abs(loEval.value) <= Math.abs(hiEval.value) ? loEval : hiEval;
  for (let i = 1; i <= samples; i++) {
    const t = minT + ((maxT - minT) * i) / samples;
    const current = evalAt(t);
    if (!isFiniteValueEvaluation(current)) continue;
    if (Math.abs(current.value) < Math.abs(best.value)) best = current;
    if (Math.abs(current.value) <= tolerance) return { kind: "success", value: current, iterations: i };
    if (!sameSign(prev.value, current.value)) {
      return { kind: "bracket", lo: prev.t, hi: current.t, fLo: prev.value };
    }
    prev = current;
  }

  return { kind: "failure", failureReason: "noBracket", residual: best.value, iterations: samples };
}

function makeSuccess(
  evaluation: SurfaceEvaluation,
  surfaceIdx: number,
  L: SurfaceIntersectionLens,
  effectiveTolerance: number,
  refractiveIndex: number | undefined,
  iterations: number,
): SurfaceIntersectionSuccess {
  const t = evaluation.t;
  return {
    ok: true,
    surfaceIdx,
    t,
    point: [evaluation.x, evaluation.y, evaluation.z],
    radius: evaluation.radius,
    normal: surfaceNormalAtHit(evaluation.x, evaluation.y, surfaceIdx, L),
    residual: evaluation.value,
    effectiveTolerance,
    iterations,
    segmentLength: t,
    opticalPathLength: refractiveIndex === undefined ? null : refractiveIndex * t,
  };
}

function failure(
  surfaceIdx: number,
  failureReason: SurfaceIntersectionFailureReason,
  residual: number | null,
  iterations: number,
): SurfaceIntersectionFailure {
  return { ok: false, surfaceIdx, failureReason, residual, iterations };
}

function sameSign(a: number, b: number): boolean {
  return a < 0 === b < 0;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function isFiniteValueEvaluation(evaluation: SurfaceEvaluation): boolean {
  return (
    isFinite(evaluation.t) &&
    isFinite(evaluation.x) &&
    isFinite(evaluation.y) &&
    isFinite(evaluation.z) &&
    isFinite(evaluation.radius) &&
    isFinite(evaluation.sag) &&
    isFinite(evaluation.slope) &&
    isFinite(evaluation.value)
  );
}

// Newton iteration divides by `derivative`; reject evaluations where it would
// blow up. Endpoint and bracket-sample checks should use `isFiniteValueEvaluation`
// instead — a vanishing derivative (e.g., a grazing meridional ray at the
// optical axis where `slope = drdt = 0`) is geometrically meaningful even when
// it's useless for stepping.
function isFiniteEvaluation(evaluation: SurfaceEvaluation): boolean {
  return (
    isFiniteValueEvaluation(evaluation) && isFinite(evaluation.derivative) && Math.abs(evaluation.derivative) > 1e-14
  );
}
