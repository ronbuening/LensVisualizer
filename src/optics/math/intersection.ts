/**
 * Surface-profile intersection solver — finds exact ray hits on sag and tilted-plane surfaces.
 *
 * Combines bracketed root search with Newton refinement so trace modules can distinguish
 * aperture misses from true intersection failures.
 */

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

/** Bisections that locate where a ray crosses the edge of a surface's domain (~1e-12 of the sample spacing). */
const DOMAIN_EDGE_BISECTIONS = 40;

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
 * f(t) = ray.z(t) - surface.z(ray.x(t), ray.y(t)) with a safeguarded Newton
 * iteration inside a sign-changing bracket, so grazing and steep-rim roots
 * remain bounded and cannot stall.
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
  /* A conic's sag is real only inside its domain radius; beyond it the sag is clamped into a fake extension that
   * no glass occupies. Points out there evaluate as no surface, so a ray passing outside the domain finds the real
   * surface instead of a root on the extension. Along a straight ray the in-domain span is one interval. */
  const domainRadius = profile.finiteRadiusLimit();
  const evalAt = (t: number): SurfaceEvaluation =>
    evaluateProfile(ray.origin, direction, profile, vertexZ, t, domainRadius);
  const bracket = findBracket(evalAt, minT, maxT, tolerance, bracketSamples);
  if (bracket.kind === "success")
    return makeSuccess(bracket.value, profile, vertexZ, tolerance, refractiveIndex, bracket.iterations);
  if (bracket.kind === "failure") return failure(bracket.failureReason, bracket.residual, bracket.iterations);

  let { lo, hi, fLo } = bracket;
  /* Seed Newton from the vertex-plane projection when possible; curved or tilted
   * profiles can move the real hit away from that plane, so the seed stays clamped
   * inside the bracket. */
  const zProjectedSeed = Math.abs(direction[2]) > VECTOR_EPSILON ? (vertexZ - ray.origin[2]) / direction[2] : NaN;
  let t = isFinite(zProjectedSeed) && zProjectedSeed > lo && zProjectedSeed < hi ? zProjectedSeed : (lo + hi) / 2;
  t = clamp(t, lo, hi);
  /* Safeguarded Newton (rtsafe): a Newton step must stay inside the sign-changing
   * bracket and be at most half the step before last; otherwise bisect. Without the
   * halving rule, a seed on a sphere's steep continuation beyond |R| (slope ~1e6)
   * creeps through the bracket in micrometer steps and never reaches a
   * well-conditioned rim root elsewhere in it. */
  let stepBeforeLast = hi - lo;
  let lastStep = stepBeforeLast;

  for (let iterations = 1; iterations <= maxIterations; iterations++) {
    const current = evalAt(t);
    if (!isFiniteValueEvaluation(current)) return failure("noConvergedIntersection", null, iterations);
    if (Math.abs(current.value) <= tolerance) {
      return makeSuccess(current, profile, vertexZ, tolerance, refractiveIndex, iterations);
    }

    if (sameSign(current.value, fLo)) {
      lo = t;
      fLo = current.value;
    } else {
      hi = t;
    }

    const newtonT = isFiniteEvaluation(current) ? t - current.value / current.derivative : NaN;
    const acceptNewton =
      isFinite(newtonT) && newtonT > lo && newtonT < hi && Math.abs(newtonT - t) <= Math.abs(stepBeforeLast) / 2;
    stepBeforeLast = lastStep;
    lastStep = acceptNewton ? newtonT - t : (hi - lo) / 2;
    t = acceptNewton ? newtonT : lo + lastStep;
  }

  const finalEval = evalAt((lo + hi) / 2);
  if (isFiniteEvaluation(finalEval) && Math.abs(finalEval.value) <= tolerance * 10) {
    return makeSuccess(finalEval, profile, vertexZ, tolerance, refractiveIndex, maxIterations);
  }

  return failure("noConvergedIntersection", isFiniteValueEvaluation(finalEval) ? finalEval.value : null, maxIterations);
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
  domainRadius: number | null,
): SurfaceEvaluation {
  const point = addRay(origin, direction, t);
  const radius = Math.hypot(point[0], point[1]);
  if (domainRadius !== null && radius > domainRadius) return { t, point, radius, value: NaN, derivative: NaN };
  const slope = profile.slope(radius);
  /* Chain rule for f(t) = z_ray(t) - z_surface(r(t)):
   * df/dt = dz/dt - (dz/dr) * dr/dt. */
  const drdt = radius > VECTOR_EPSILON ? (point[0] * direction[0] + point[1] * direction[1]) / radius : 0;
  const value = point[2] - profile.pointAt(vertexZ, point[0], point[1])[2];
  const derivative = direction[2] - slope * drdt;
  return { t, point, radius, value, derivative };
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
  const loEval = evalAt(minT);
  const loValid = isFiniteValueEvaluation(loEval);
  if (loValid && Math.abs(loEval.value) <= tolerance) return { kind: "success", value: loEval, iterations: 0 };

  const hiEval = evalAt(maxT);
  const hiValid = isFiniteValueEvaluation(hiEval);
  if (hiValid && Math.abs(hiEval.value) <= tolerance) return { kind: "success", value: hiEval, iterations: 0 };
  if (loValid && hiValid && !sameSign(loEval.value, hiEval.value))
    return { kind: "bracket", lo: minT, hi: maxT, fLo: loEval.value };

  /* Scan for the first sign change between surface points. Points outside the surface's domain are skipped, but
   * the domain edge itself joins the scan: a steep near-hemispherical rim is crossed in the sliver between that
   * edge and the nearest sample. */
  const samples = Math.max(2, Math.round(bracketSamples));
  let previous: SurfaceEvaluation | null = loValid ? loEval : null;
  let best: SurfaceEvaluation | null = previous;
  if (hiValid && (best === null || Math.abs(hiEval.value) < Math.abs(best.value))) best = hiEval;
  let lastT = minT;
  let lastValid = loValid;
  const visit = (current: SurfaceEvaluation, iterations: number): BracketResult | null => {
    if (best === null || Math.abs(current.value) < Math.abs(best.value)) best = current;
    if (Math.abs(current.value) <= tolerance) return { kind: "success", value: current, iterations };
    if (previous !== null && !sameSign(previous.value, current.value)) {
      return { kind: "bracket", lo: previous.t, hi: current.t, fLo: previous.value };
    }
    previous = current;
    return null;
  };
  for (let i = 1; i <= samples; i++) {
    const t = minT + ((maxT - minT) * i) / samples;
    const current = evalAt(t);
    const currentValid = isFiniteValueEvaluation(current);
    if (currentValid !== lastValid) {
      const edge = currentValid ? domainEdge(evalAt, lastT, t) : domainEdge(evalAt, t, lastT);
      const found = edge && visit(edge, i);
      if (found) return found;
    }
    lastT = t;
    lastValid = currentValid;
    if (!currentValid) continue;
    const found = visit(current, i);
    if (found) return found;
  }

  return { kind: "failure", failureReason: "noBracket", residual: best?.value ?? null, iterations: samples };
}

/**
 * Last surface point before the ray leaves the surface's domain, between a point outside it and one inside.
 *
 * @param evalAt - surface evaluation along the ray
 * @param outsideT - parameter of a point outside the domain
 * @param insideT - parameter of a point inside the domain
 * @returns the inside evaluation nearest the domain edge, or null when none is valid
 */
function domainEdge(
  evalAt: (t: number) => SurfaceEvaluation,
  outsideT: number,
  insideT: number,
): SurfaceEvaluation | null {
  for (let i = 0; i < DOMAIN_EDGE_BISECTIONS; i++) {
    const mid = (outsideT + insideT) / 2;
    if (isFiniteValueEvaluation(evalAt(mid))) insideT = mid;
    else outsideT = mid;
  }
  const edge = evalAt(insideT);
  return isFiniteValueEvaluation(edge) ? edge : null;
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

function sameSign(a: number, b: number): boolean {
  return a < 0 === b < 0;
}

function addRay(origin: Vec3, direction: Vec3, t: number): Vec3 {
  return [origin[0] + direction[0] * t, origin[1] + direction[1] * t, origin[2] + direction[2] * t];
}
