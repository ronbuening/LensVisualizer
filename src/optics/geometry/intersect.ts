/**
 * Surface-profile intersection solver — finds exact ray hits on sag and tilted-plane surfaces.
 *
 * Planes solve analytically. A sphere, and an asphere with no polynomial term, is solved in closed form
 * (`intersectConic.ts`) and the root is accepted by evaluating the profile at it. Every other curved solve, and
 * every closed-form root that cannot be accepted that way, takes the iterative path: a bracketed root search with
 * safeguarded Newton refinement, so trace modules can distinguish aperture misses from true intersection failures.
 */

import {
  INTERSECTION_BRACKET_SAMPLES,
  INTERSECTION_MAX_ITERATIONS,
  INTERSECTION_TOLERANCE,
  VECTOR_EPSILON,
} from "../constants.js";
import type { Ray3, SagSlope, SurfaceProfile, Vec3 } from "../types.js";
import { clamp } from "../math/numerics.js";
import { dot, normalize, subtract } from "../math/vector.js";
import { intersectConicClosedForm } from "./intersectConic.js";
import { planeResidualRoundoff, sagResidualRoundoff } from "./intersectTolerance.js";
import type {
  ClosedFormFallbackReason,
  ParameterInterval,
  SurfaceIntersectionFailure,
  SurfaceIntersectionFailureReason,
  SurfaceIntersectionOptions,
  SurfaceIntersectionResult,
  SurfaceIntersectionSuccess,
} from "./intersectTypes.js";

export type {
  ClosedFormFallbackReason,
  SurfaceIntersectionFailure,
  SurfaceIntersectionFailureReason,
  SurfaceIntersectionOptions,
  SurfaceIntersectionResult,
  SurfaceIntersectionSuccess,
} from "./intersectTypes.js";

/** Bisections that locate where a ray crosses the edge of a surface's domain (~1e-12 of the sample spacing). */
const DOMAIN_EDGE_BISECTIONS = 40;

interface SurfaceEvaluation {
  t: number;
  point: Vec3;
  radius: number;
  /** Profile sag and slope at `radius`; NaN outside the surface's domain, where the profile is not evaluated. */
  sag: number;
  slope: number;
  value: number;
  derivative: number;
}

/**
 * Intersect a normalized ray with a surface profile at a vertex plane.
 *
 * Flat and tilted planes solve analytically. Curved profiles solve
 * f(t) = ray.z(t) - surface.z(ray.x(t), ray.y(t)). A sphere and a polynomial-free conic take the closed-form
 * root when the profile evaluates within the raw residual target at it; the rest, and every closed-form root that
 * does not, use a safeguarded Newton iteration inside a sign-changing bracket, so grazing and steep-rim roots
 * remain bounded and cannot stall. The result says which through `closedFormFallback`.
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
  options: SurfaceIntersectionOptions = {},
): SurfaceIntersectionResult {
  const closedForm = solveClosedForm(ray, profile, vertexZ, options);
  if (closedForm !== null && typeof closedForm !== "string") return closedForm;
  // The iterative path takes the caller's inputs and nothing from the closed form: no seed and no bracket.
  const result = solveIteratively(ray, profile, vertexZ, options);
  return closedForm === null ? result : { ...result, closedFormFallback: closedForm };
}

/**
 * Try the closed form, on the profiles and calls it serves.
 *
 * @returns its hit or miss, the reason it falls back, or null when it does not apply
 */
function solveClosedForm(
  ray: Ray3,
  profile: SurfaceProfile,
  vertexZ: number,
  options: SurfaceIntersectionOptions,
): SurfaceIntersectionResult | ClosedFormFallbackReason | null {
  // An iteration budget or a scan density describes the iterative path, so a caller that sets one gets that path.
  if (options.maxIterations !== undefined || options.bracketSamples !== undefined) return null;
  // The four kinds stay: a conic is an aspheric profile without a polynomial term.
  if (profile.kind !== "spherical" && !(profile.kind === "aspheric" && !profile.hasPolynomial)) return null;
  const { minT = 0, maxT = Infinity, tolerance = INTERSECTION_TOLERANCE } = options;
  const direction = options.directionNormalized ? ray.direction : normalize(ray.direction);
  // Input the iterative path rejects goes to it, so the failure it reports stays the one reported.
  if (!direction || !isValidBounds(minT, maxT) || !Number.isFinite(maxT)) return null;
  // Spheres get no cap selection, whatever their clear radius.
  const cap = profile.kind === "aspheric" ? capInterval(ray.origin, direction, options.clearRadius, minT, maxT) : null;
  return intersectConicClosedForm(
    ray.origin,
    direction,
    profile,
    vertexZ,
    minT,
    maxT,
    tolerance,
    cap,
    options.refractiveIndex,
  );
}

/** The bracketed search with Newton refinement, then cap selection on an aspheric profile. */
function solveIteratively(
  ray: Ray3,
  profile: SurfaceProfile,
  vertexZ: number,
  options: SurfaceIntersectionOptions,
): SurfaceIntersectionResult {
  const hit = intersectProfile(ray, profile, vertexZ, options);
  if (hit.ok) return selectAsphericCapHit(ray, profile, vertexZ, options, hit);
  if (hit.failureReason !== "noConvergedIntersection") return hit;
  /* The unbounded solve found a bracket and ran out of iterations on it: a numerical failure, usually on the
   * polynomial continuation outside the cap. It says nothing about the cap, so a root inside it is still looked
   * for, in ray order. With none found the failure stands. */
  const direction = options.directionNormalized ? ray.direction : normalize(ray.direction);
  const cap =
    profile.kind === "aspheric" && direction
      ? capInterval(ray.origin, direction, options.clearRadius, options.minT ?? 0, options.maxT ?? Infinity)
      : null;
  if (cap === null) return hit;
  const capHit = intersectProfile(ray, profile, vertexZ, { ...options, minT: cap.minT, maxT: cap.maxT }, "ordered");
  return capHit.ok ? capHit : hit;
}

/**
 * Cut a ray's search bounds to the authored cap, the cylinder r <= clearRadius around the axis.
 *
 * @param origin - ray origin in mm
 * @param direction - ray direction as the solve holds it
 * @param clearRadius - authored cap radius in mm
 * @param minT - lower parametric bound of the search
 * @param maxT - upper parametric bound of the search
 * @returns the bounds inside the cap; null without a usable radius, when the ray never enters the cap, or when
 *   nothing of the bounds is inside it
 */
function capInterval(
  origin: Vec3,
  direction: Vec3,
  clearRadius: number | undefined,
  minT: number,
  maxT: number,
): ParameterInterval | null {
  if (!(clearRadius !== undefined && Number.isFinite(clearRadius) && clearRadius > 0)) return null;
  const speed2 = direction[0] ** 2 + direction[1] ** 2;
  const dotXY = origin[0] * direction[0] + origin[1] * direction[1];
  const offset = origin[0] ** 2 + origin[1] ** 2 - clearRadius ** 2;
  if (speed2 === 0) {
    if (offset > 0) return null;
  } else {
    const discriminant = dotXY ** 2 - speed2 * offset;
    if (discriminant < 0) return null;
    const root = Math.sqrt(discriminant);
    minT = Math.max(minT, (-dotXY - root) / speed2);
    maxT = Math.min(maxT, (-dotXY + root) / speed2);
  }
  if (!isValidBounds(minT, maxT) || !Number.isFinite(maxT)) return null;
  return { minT, maxT };
}

/** Select an authored cap after an established successful solve, avoiding a second old solve. */
export function selectAsphericCapHit(
  ray: Ray3,
  profile: SurfaceProfile,
  vertexZ: number,
  options: SurfaceIntersectionOptions,
  hit: SurfaceIntersectionSuccess,
): SurfaceIntersectionResult {
  const radius = options.clearRadius;
  if (profile.kind !== "aspheric" || !(radius !== undefined && Number.isFinite(radius) && radius > 0)) return hit;

  // Only the authored cap contains optical material. Retain the exterior hit if no cap hit exists,
  // so ordinary aperture misses still report their first clip instead of becoming transmitted rays.
  const direction = options.directionNormalized ? ray.direction : normalize(ray.direction);
  if (!direction) return hit;
  const cap = capInterval(ray.origin, direction, radius, options.minT ?? 0, options.maxT ?? Infinity);
  if (cap === null) return hit;
  const { minT, maxT } = cap;
  const speed2 = direction[0] ** 2 + direction[1] ** 2;
  const transverseSpeed = Math.sqrt(speed2);
  const axialSpeed = Math.abs(direction[2]);
  const requestedMinT = options.minT ?? 0;
  // Absolute operand scale matters when origin + direction*t nearly cancels.
  // Refuse the certificate when coordinate roundoff can exceed solver tolerance.
  const geometryError =
    16 *
    Number.EPSILON *
    (Math.abs(ray.origin[0]) +
      Math.abs(ray.origin[1]) +
      transverseSpeed * Math.max(Math.abs(requestedMinT), Math.abs(hit.t), Math.abs(maxT)));
  const geometryCertain =
    Number.isFinite(geometryError) && geometryError <= (options.tolerance ?? INTERSECTION_TOLERANCE);
  const monotoneWithinRadius = (radialBound: number): boolean => {
    if (!geometryCertain) return false;
    const conservativeRadius = radialBound * (1 + 1e-12) + geometryError + 1e-12;
    const slopeBound = profile.maxAbsSlope?.(conservativeRadius) ?? Infinity;
    // |d sag/dt| <= max|sag'| * transverseSpeed, so f' has one strict sign.
    // Unknown, nonfinite and conic-edge bounds cannot certify uniqueness.
    return Number.isFinite(slopeBound) && slopeBound >= 0 && axialSpeed > slopeBound * transverseSpeed + 1e-10;
  };
  const domainRadius = profile.finiteRadiusLimit();
  const constantRadiusUnique =
    geometryCertain &&
    speed2 === 0 &&
    axialSpeed > 1e-10 &&
    (domainRadius === null ||
      (Number.isFinite(domainRadius) && hit.radius + geometryError < domainRadius * (1 - 1e-12)));
  if (hit.t >= minT && hit.t <= maxT && hit.radius + geometryError <= radius) {
    const startX = ray.origin[0] + direction[0] * requestedMinT;
    const startY = ray.origin[1] + direction[1] * requestedMinT;
    const startRadius = Math.sqrt(startX * startX + startY * startY);
    // Radius is convex along the ray, so {t >= requestedMinT : r(t) <= rho} is one interval containing hit.t.
    // With rho = max(start, hit) it covers all of [requestedMinT, hit.t]; capped at the authored radius it still
    // covers every cap point. A strictly monotone f on that interval leaves hit as the only cap root after minT.
    if (constantRadiusUnique || monotoneWithinRadius(Math.min(Math.max(startRadius, hit.radius), radius))) return hit;
  }
  // A whole-cap certificate uses the full authored radius, not rounded interval endpoints.
  // Every real physical cap point is covered, including any entry-edge sliver.
  const uniqueCapRoot = constantRadiusUnique || monotoneWithinRadius(radius);
  const capHit = intersectProfile(
    ray,
    profile,
    vertexZ,
    { ...options, minT, maxT },
    uniqueCapRoot ? "monotone" : "ordered",
  );
  // A numerical failure inside the cap is unresolved, not proof that only the exterior root exists.
  if (!capHit.ok && capHit.failureReason === "noBracket") return hit;
  // Keep established numerics when the ordered cap search confirms the same root.
  if (capHit.ok && Math.abs(capHit.t - hit.t) <= (options.tolerance ?? INTERSECTION_TOLERANCE)) return hit;
  return capHit;
}

function intersectProfile(
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
  scan: BracketScan = "default",
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
  // One scratch pair per solve: each evaluation copies its sag and slope out before the next overwrites them.
  const sagSlope: SagSlope = { sag: 0, slope: 0 };
  const evalAt = (t: number): SurfaceEvaluation =>
    evaluateProfile(ray.origin, direction, profile, vertexZ, t, domainRadius, sagSlope);
  const bracket = findBracket(evalAt, minT, maxT, tolerance, bracketSamples, scan);
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
  // The envelope reads the sag and slope the stalled evaluation already holds: same radius, same bits.
  const roundoffTolerance = (value: SurfaceEvaluation): number => {
    const slopeMagnitude =
      profile.kind === "aspheric" ? (profile.maxAbsSlope?.(value.radius) ?? NaN) : Math.abs(value.slope);
    return Math.max(
      tolerance,
      sagResidualRoundoff(ray.origin, direction, value.t, vertexZ, value.radius, value.sag, slopeMagnitude),
    );
  };

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
    // A correction smaller than one representable t cannot improve this point.
    // Try the raw target first; use the operand-based envelope only at a stall.
    if (newtonT === t) {
      const effectiveTolerance = roundoffTolerance(current);
      if (Math.abs(current.value) <= effectiveTolerance) {
        return makeSuccess(current, profile, vertexZ, effectiveTolerance, refractiveIndex, iterations);
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
        return makeSuccess(current, profile, vertexZ, effectiveTolerance, refractiveIndex, iterations);
      }
    }
    stepBeforeLast = lastStep;
    lastStep = acceptNewton ? newtonT - t : (hi - lo) / 2;
    t = nextT;
  }

  // Evaluate the pending step; discarding it can lose the last Newton improvement.
  const finalEval = evalAt(t);
  if (isFiniteValueEvaluation(finalEval) && Math.abs(finalEval.value) <= tolerance) {
    return makeSuccess(finalEval, profile, vertexZ, tolerance, refractiveIndex, maxIterations);
  }
  if (isFiniteEvaluation(finalEval) && t - finalEval.value / finalEval.derivative === t) {
    const effectiveTolerance = roundoffTolerance(finalEval);
    if (Math.abs(finalEval.value) <= effectiveTolerance) {
      return makeSuccess(finalEval, profile, vertexZ, effectiveTolerance, refractiveIndex, maxIterations);
    }
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
  const effectiveTolerance =
    Math.abs(residual) <= tolerance
      ? tolerance
      : Math.max(tolerance, planeResidualRoundoff(origin, direction, clampedT, planePoint, normal));
  if (!Number.isFinite(residual) || !(Math.abs(residual) <= effectiveTolerance)) {
    return failure("noConvergedIntersection", residual, 0);
  }
  return {
    ok: true,
    t: clampedT,
    point,
    radius: Math.hypot(point[0], point[1]),
    normal,
    residual,
    effectiveTolerance,
    iterations: 0,
    segmentLength: clampedT,
    opticalPathLength: refractiveIndex === undefined ? null : refractiveIndex * clampedT,
  };
}

/**
 * Evaluate f(t) = z_ray(t) - z_surface(r(t)) and df/dt at one ray parameter.
 *
 * One `profile.evaluate` call supplies the sag and the slope, bit for bit what `profile.sag` and `profile.slope`
 * return, and the evaluation keeps both for the roundoff envelope. Beyond `domainRadius` the profile is not called.
 *
 * @param scratch - pair the profile may fill instead of allocating, reused across the evaluations of one solve
 * @returns the evaluation, with NaN sag, slope, value and derivative beyond the domain radius
 */
function evaluateProfile(
  origin: Vec3,
  direction: Vec3,
  profile: SurfaceProfile,
  vertexZ: number,
  t: number,
  domainRadius: number | null,
  scratch: SagSlope,
): SurfaceEvaluation {
  const point = addRay(origin, direction, t);
  const radius = Math.hypot(point[0], point[1]);
  if (domainRadius !== null && radius > domainRadius) {
    return { t, point, radius, sag: NaN, slope: NaN, value: NaN, derivative: NaN };
  }
  // Read the returned pair, not the scratch: a wrapped profile may answer with an object of its own.
  const { sag, slope } = profile.evaluate(radius, scratch);
  /* Chain rule for f(t) = z_ray(t) - z_surface(r(t)):
   * df/dt = dz/dt - (dz/dr) * dr/dt. */
  const drdt = radius > VECTOR_EPSILON ? (point[0] * direction[0] + point[1] * direction[1]) / radius : 0;
  const value = point[2] - (vertexZ + sag);
  const derivative = direction[2] - slope * drdt;
  return { t, point, radius, sag, slope, value, derivative };
}

/**
 * Bracket search mode: `ordered` refuses whole-interval shortcuts so the first root wins; `monotone` is for a
 * caller-certified strictly monotone f, where same-signed valid endpoints prove that no root exists.
 */
type BracketScan = "default" | "ordered" | "monotone";

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
  scan: BracketScan,
): BracketResult {
  const ordered = scan === "ordered";
  const loEval = evalAt(minT);
  const loValid = isFiniteValueEvaluation(loEval);
  if (loValid && Math.abs(loEval.value) <= tolerance) return { kind: "success", value: loEval, iterations: 0 };

  const hiEval = evalAt(maxT);
  const hiValid = isFiniteValueEvaluation(hiEval);
  if (!ordered && hiValid && Math.abs(hiEval.value) <= tolerance)
    return { kind: "success", value: hiEval, iterations: 0 };
  if (!ordered && loValid && hiValid && !sameSign(loEval.value, hiEval.value))
    return { kind: "bracket", lo: minT, hi: maxT, fLo: loEval.value };
  // A strictly monotone f with same-signed endpoints has no interior root; sampling could only rediscover that.
  if (scan === "monotone" && loValid && hiValid) {
    const residual = Math.abs(loEval.value) < Math.abs(hiEval.value) ? loEval.value : hiEval.value;
    return { kind: "failure", failureReason: "noBracket", residual, iterations: 0 };
  }

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
  effectiveTolerance: number,
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
    effectiveTolerance,
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
