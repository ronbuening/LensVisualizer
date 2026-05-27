/**
 * Legacy sag-surface intersection — exact ray/surface solver over RuntimeLens-shaped data.
 *
 * Supports the internal exact trace path that predates EngineLens profiles while preserving detailed
 * failure reasons for regression tests and diagnostics.
 */

import type { AsphericCoefficients } from "../../types/optics.js";
import { FLAT_R_THRESHOLD, conicPolySag, sagSlopeRaw } from "./surfaceMath.js";

export type SurfaceIntersectionFailureReason =
  | "invalidRayDirection"
  | "invalidBounds"
  | "noBracket"
  | "noConvergedIntersection";

export type Vector3 = [number, number, number];

export interface SurfaceIntersectionRay {
  origin: Vector3;
  direction: Vector3;
}

export interface SurfaceIntersectionOptions {
  minT?: number;
  maxT?: number;
  tolerance?: number;
  maxIterations?: number;
  bracketSamples?: number;
  refractiveIndex?: number;
}

export interface SurfaceIntersectionLens {
  S: readonly { R: number }[];
  asphByIdx: Record<number, AsphericCoefficients>;
}

export interface SurfaceIntersectionSuccess {
  ok: true;
  surfaceIdx: number;
  t: number;
  point: Vector3;
  radius: number;
  normal: Vector3;
  residual: number;
  iterations: number;
  segmentLength: number;
  opticalPathLength: number | null;
}

export interface SurfaceIntersectionFailure {
  ok: false;
  surfaceIdx: number;
  failureReason: SurfaceIntersectionFailureReason;
  residual: number | null;
  iterations: number;
}

export type SurfaceIntersectionResult = SurfaceIntersectionSuccess | SurfaceIntersectionFailure;

const DEFAULT_TOLERANCE = 1e-9;
const DEFAULT_MAX_ITERATIONS = 32;
const DEFAULT_BRACKET_SAMPLES = 24;
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
 * Solves f(t) = z_ray(t) - (vertexZ + sag(r(t))) with bracketed Newton
 * iteration; flat surfaces fall back to an analytic plane intersection.
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
  {
    minT = 0,
    maxT = Infinity,
    tolerance = DEFAULT_TOLERANCE,
    maxIterations = DEFAULT_MAX_ITERATIONS,
    bracketSamples = DEFAULT_BRACKET_SAMPLES,
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

  for (let iterations = 1; iterations <= maxIterations; iterations++) {
    const current = evalAt(t);
    if (!isFiniteEvaluation(current)) return failure(surfaceIdx, "noConvergedIntersection", null, iterations);
    if (Math.abs(current.value) <= tolerance) {
      return makeSuccess(current, surfaceIdx, L, tolerance, refractiveIndex, iterations);
    }

    if (sameSign(current.value, fLo)) {
      lo = t;
      fLo = current.value;
    } else {
      hi = t;
    }

    const newtonT = t - current.value / current.derivative;
    t = isFinite(newtonT) && newtonT > lo && newtonT < hi ? newtonT : (lo + hi) / 2;
  }

  const finalEval = evalAt((lo + hi) / 2);
  if (isFiniteEvaluation(finalEval) && Math.abs(finalEval.value) <= tolerance * 10) {
    return makeSuccess(finalEval, surfaceIdx, L, tolerance, refractiveIndex, maxIterations);
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

  return {
    ok: true,
    surfaceIdx,
    t: clampedT,
    point,
    radius: Math.hypot(point[0], point[1]),
    normal: [0, 0, 1],
    residual: point[2] - vertexZ,
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
  tolerance: number,
  refractiveIndex: number | undefined,
  iterations: number,
): SurfaceIntersectionSuccess {
  const t = Math.abs(evaluation.value) <= tolerance ? evaluation.t : evaluation.t;
  return {
    ok: true,
    surfaceIdx,
    t,
    point: [evaluation.x, evaluation.y, evaluation.z],
    radius: evaluation.radius,
    normal: surfaceNormalAtHit(evaluation.x, evaluation.y, surfaceIdx, L),
    residual: evaluation.value,
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
