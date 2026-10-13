/**
 * Surface-profile intersection solver — finds exact ray hits on sag and tilted-plane surfaces.
 *
 * Planes solve analytically. A sphere, and an asphere with no polynomial term, is solved in closed form
 * (`intersectConic.ts`) and the root is accepted by evaluating the profile at it. A polynomial asphere with an
 * authored cap first tries a Newton iteration from the root of its base conic (`seedAsphereSolve`), whose point is
 * returned only under a certificate that the iterative path returns the same root. Every other curved solve, every
 * closed-form root that cannot be accepted, and every seeded solve that is refused takes the iterative path: a
 * bracketed root search with safeguarded Newton refinement, so trace modules can distinguish aperture misses from
 * true intersection failures. That path takes nothing from the two in front of it.
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
import { MAX_NORMAL_MOVE, MAX_ROOT_MOVE, baseConicRoot, intersectConicClosedForm } from "./intersectConic.js";
import { capCoordinateTolerance, planeResidualRoundoff, sagResidualRoundoff } from "./intersectTolerance.js";
import type {
  ClosedFormFallbackReason,
  ParameterInterval,
  SeedRefusal,
  SurfaceIntersectionFailure,
  SurfaceIntersectionFailureReason,
  SurfaceIntersectionOptions,
  SurfaceIntersectionResult,
  SurfaceIntersectionSuccess,
} from "./intersectTypes.js";
import { MAX_TERM_POWER, normalFromSlope } from "./surfaceProfile.js";

export type {
  ClosedFormFallbackReason,
  SeedRefusal,
  SurfaceIntersectionFailure,
  SurfaceIntersectionFailureReason,
  SurfaceIntersectionOptions,
  SurfaceIntersectionResult,
  SurfaceIntersectionSuccess,
} from "./intersectTypes.js";

/** Bisections that locate where a ray crosses the edge of a surface's domain (~1e-12 of the sample spacing). */
const DOMAIN_EDGE_BISECTIONS = 40;

/**
 * Most profile evaluations the seeded Newton iteration may spend. A solve that needs more is the iterative path's,
 * with that path's whole budget: these are not charged to it. Like that path's cap it is a measured margin, not a
 * convergence guarantee: the most a certified solve of the catalog needs, where three is usual.
 */
const SEED_MAX_EVALUATIONS = 6;

/**
 * Share of the residual target that the rounding of the residual may take at a seeded point.
 *
 * Two adjacent floats about a root are at most ε|t| apart, so the nearer one has a true residual within
 * ε|t| max|f'| / 2. The envelope (`sagResidualRoundoff`) is at least 16 ε|t| max|f'|, so that is 1/32 of it. With
 * the envelope within 31/32 of the target, one of the two floats therefore evaluates inside the target: the
 * iterative path accepts at the raw target before its bracket can collapse, and a Newton correction too small to
 * move t leaves a residual that is already inside it.
 */
const SEED_ENVELOPE_SHARE = 31 / 32;

/** Smallest normal double. A square below it has lost digits, and is zero for an operand under about 1.5e-162. */
const SMALLEST_NORMAL = 2 ** -1022;

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
 * root when the profile evaluates within the raw residual target at it, and the result says how that went through
 * `closedFormFallback`. A polynomial asphere with a clear radius takes the point of the conic-seeded route where
 * that route certifies it. The rest, and every solve those two hand back, use a safeguarded Newton iteration
 * inside a sign-changing bracket, so grazing and steep-rim roots remain bounded and cannot stall.
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
  // A closed form that fell back has its reason to report, and its solve is the iterative path's.
  const seeded = closedForm === null ? seedAsphereSolve(ray, profile, vertexZ, options) : null;
  if (seeded !== null && typeof seeded !== "string") return seeded;
  // The iterative path takes the caller's inputs and nothing from the closed form or the seeded route: no seed
  // and no bracket.
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

/** What one slope-bound call shows about a stretch of the ray, for the seeded route. */
interface SeedCertificate {
  /** Bound on the rounding of a transverse coordinate on the stretch, and of the cap interval's ends, in mm. */
  coordinateRoundoff: number;
  /** Bound on |sag'| over the radii of the stretch. */
  slopeBound: number;
  /** Least |f'| that bound leaves on the stretch. It is positive, so f is strictly monotone there. */
  margin: number;
  /** Bound on how far the unit normal turns per mm of radius on the stretch. */
  normalTurn: number;
  /**
   * The ray starts inside the cap and the stretch's largest radius is at that start. A certificate about any other
   * point of the ray then starts at the same point and covers a radius at least as large, so none is tighter, but
   * for the last bits of its coordinate rounding: there a refusal that is taken as final is conservative.
   */
  settled: boolean;
}

/**
 * Try the conic-seeded route: a plain Newton iteration from the root of the base conic, on a polynomial asphere
 * with an authored cap, returned only where the iterative path is shown to return the same root.
 *
 * The route decides nothing but such a hit. Its point is returned at the raw target, and only when a certificate
 * computed here, from the slope bound and the operands of the ray, establishes all of:
 *
 * - One root, and the first. Over a stretch of the ray that holds every cap point from the lower bound to one
 *   step of the bracket scan past the point, |f'| stays above zero. The residual is then strictly monotone there,
 *   so the point's root is the first inside the cap, and the two scan samples about it are inside the stretch,
 *   so the scan resolves it. A root the scan does not resolve stays that path's miss.
 * - Coordinates. The rounding of a transverse coordinate, with that of the ends of the cap interval, is within
 *   the cap's clip tolerance (`capCoordinateTolerance`), and is added to every radius the certificate compares.
 * - The raw target. The rounding of the residual at the point is within `SEED_ENVELOPE_SHARE` of the target, so
 *   the iterative path reports the target too, not its envelope.
 * - The same point, within budget. Two points of the stretch that both meet the target lie within
 *   2 (target + rounding) / min|f'| of each other. That is held to `MAX_ROOT_MOVE` along the ray and, times the
 *   turn of the normal, to `MAX_NORMAL_MOVE`; and the two are not on either side of the radius at which a normal
 *   becomes the axis', unless the normal steps there by no more than that.
 * - No rule of the iterative path's own. The point is farther than that move from both bounds and from the rim,
 *   and is not within twice the target of the vertex plane unless it is the vertex-plane crossing, the point
 *   that path stops on there. One step of that path's scan is longer than the tolerance, the distance along the
 *   ray within which its cap selection takes two hits for one.
 *
 * Anything else is refused with a reason, and the caller runs the iterative path with its own inputs: nothing
 * computed here is passed on. Exported for tests: nothing in `src/` calls it but `intersectSurfaceProfile`.
 *
 * @param ray - origin and direction in engine coordinates
 * @param profile - surface sag/normal evaluator
 * @param vertexZ - axial vertex position in mm
 * @param options - search bounds, tolerance, clear radius, and optional optical-path index
 * @returns the hit; the reason the route leaves this solve to the iterative path; or null where the route does
 *   not apply: an explicit budget, another kind of profile, rejected input, or a ray with no span inside the cap
 */
export function seedAsphereSolve(
  ray: Ray3,
  profile: SurfaceProfile,
  vertexZ: number,
  options: SurfaceIntersectionOptions = {},
): SurfaceIntersectionSuccess | SeedRefusal | null {
  // An iteration budget or a scan density describes the iterative path, so a caller that sets one gets that path.
  if (options.maxIterations !== undefined || options.bracketSamples !== undefined) return null;
  if (profile.kind !== "aspheric" || profile.maxAbsSlope === undefined || !profile.hasPolynomial) return null;
  const { minT = 0, maxT = Infinity, tolerance = INTERSECTION_TOLERANCE, clearRadius } = options;
  const direction = options.directionNormalized ? ray.direction : normalize(ray.direction);
  // Input the iterative path rejects goes to it, so the failure it reports stays the one reported.
  if (!direction || !isValidBounds(minT, maxT) || !Number.isFinite(maxT)) return null;
  // Only a hit inside the cap is certified, so a ray with no span inside the cap has nothing to try.
  const cap = capInterval(ray.origin, direction, clearRadius, minT, maxT);
  if (cap === null || clearRadius === undefined) return null;

  /* ── Seed ── */

  const origin = ray.origin;
  const conicRoot = baseConicRoot(origin, direction, profile.curvature, profile.conic, vertexZ, cap.minT, cap.maxT);
  if (conicRoot === null) return "noSeed";
  /* The iterative path seeds from the vertex-plane crossing and accepts it when the sag there is within the
   * target. Where the base conic puts the hit within twice the target of that plane, the route starts from the
   * same float, in that path's own expression, so that it can return that path's own point. */
  const vertexPlaneT = Math.abs(direction[2]) > VECTOR_EPSILON ? (vertexZ - origin[2]) / direction[2] : NaN;
  const seed =
    Math.abs(conicRoot.sag) <= 2 * tolerance && vertexPlaneT >= cap.minT && vertexPlaneT <= cap.maxT
      ? vertexPlaneT
      : conicRoot.t;

  /* ── Lengths along the ray ── */

  const speed2 = direction[0] ** 2 + direction[1] ** 2;
  /* The cap interval is solved from this square, and the transverse speed is its root. Where the square underflows
   * neither is the ray's, and a ray that is not axial can be held as axial. */
  if (speed2 < SMALLEST_NORMAL && (direction[0] !== 0 || direction[1] !== 0)) return "coordinateRoundoff";
  const transverseSpeed = Math.sqrt(speed2);
  const axialSpeed = Math.abs(direction[2]);
  const length = Math.sqrt(speed2 + direction[2] ** 2);
  const radiusAt = (t: number): number => Math.hypot(origin[0] + direction[0] * t, origin[1] + direction[1] * t);
  const originSum = Math.abs(origin[0]) + Math.abs(origin[1]);
  /* The ends of the cap interval are roots of a quadratic solved from the origin, whose discriminant loses digits
   * as (originSum / clearRadius)². The coordinate sum below holds no such term; this adds it. */
  const rimRoundoff = (16 * Number.EPSILON * originSum * originSum) / clearRadius;
  const coordinateLimit = capCoordinateTolerance(clearRadius);
  // One step of the iterative path's scan of the bounds, with the rounding of a sample's position.
  const scanStep = (maxT - minT) / INTERSECTION_BRACKET_SAMPLES + 4 * Number.EPSILON * maxT;
  /* Cap selection takes two hits for one root when their parameters differ by no more than the tolerance, which is
   * a length only on a unit direction. Any other root is more than one scan step from the point's, so a step
   * longer than the tolerance keeps that rule from returning another root in the point's place. */
  if (!(scanStep > tolerance)) return "shortBounds";
  // ... and the farthest apart two points of one root may lie.
  const step = scanStep + MAX_ROOT_MOVE / length;
  const curvature = profile.curvature;

  /* ── Certificate ── */

  /** Certify the stretch that reaches one step past [from, to], or give the reason it cannot be certified. */
  const certify = (from: number, to: number): SeedCertificate | SeedRefusal => {
    /* A ray that starts inside the cap is covered from its lower bound. One that enters it later is covered from
     * a step before `from`, and never from later than its entry, so every cap point before the stretch's end is
     * inside the stretch's largest radius: the radius is convex along a ray. */
    const start = cap.minT > minT ? Math.min(cap.minT, Math.max(minT, from - step)) : minT;
    const end = Math.min(maxT, to + step);
    const coordinateRoundoff =
      16 * Number.EPSILON * (originSum + transverseSpeed * Math.max(cap.maxT, end)) + rimRoundoff;
    if (!(Number.isFinite(coordinateRoundoff) && coordinateRoundoff <= coordinateLimit)) return "coordinateRoundoff";
    const startRadius = radiusAt(start);
    const endRadius = radiusAt(end);
    // The margins of the cap-selection certificate, on a radius that also carries the coordinate rounding.
    const conservativeRadius = Math.max(startRadius, endRadius) * (1 + 1e-12) + coordinateRoundoff + 1e-12;
    const slopeBound = profile.maxAbsSlope?.(conservativeRadius) ?? Infinity;
    // Unknown, nonfinite and conic-edge bounds certify nothing.
    if (!(Number.isFinite(slopeBound) && slopeBound >= 0)) return "slopeBound";
    // |d sag/dt| <= max|sag'| * transverseSpeed, so |f'| is at least this.
    const margin = axialSpeed - slopeBound * transverseSpeed;
    if (!(margin > 1e-10)) return "slopeBound";
    let normalTurn = 0;
    if (transverseSpeed > 0) {
      /* Per mm of radius the unit normal turns by at most |sag''| in the meridional plane and |sag'| / r about
       * the axis. The conic's part of both is within |c| max(1, w⁻³) for its conic root w, and each polynomial
       * term of the slope bound, p |A_p| r^(p−1), differentiates to at most (p − 1) / r of itself. The whole slope
       * bound stands in for its polynomial part here, the conic's slope and the bound's slack with it, which
       * only raises the bound. All of it grows with r, so the stretch's largest radius bounds it. */
      const w2 = 1 - (1 + profile.conic) * curvature * curvature * conservativeRadius * conservativeRadius;
      const conicTurn =
        curvature === 0 ? 0 : w2 > 0 ? Math.abs(curvature) * Math.max(1, 1 / (w2 * Math.sqrt(w2))) : Infinity;
      normalTurn = conicTurn + ((MAX_TERM_POWER - 1) * slopeBound) / conservativeRadius;
      /* Beyond the stretch nothing is known of the surface. The iterative path's own certificates hold there only
       * where the slope bound is under |dz| / |dxy|, which bounds its envelope at a cap point there. A cap point
       * that such a certificate covers together with the root has a true residual of at least the margin times
       * one scan step, and that path accepts a point only when its true residual is within the target plus twice
       * its envelope. Past this gate it accepts none there. */
      if (end < maxT) {
        const farEnvelope = sagResidualRoundoff(
          origin,
          direction,
          maxT,
          vertexZ,
          clearRadius + coordinateLimit,
          0,
          axialSpeed / transverseSpeed,
        );
        if (!(margin * scanStep > tolerance + 2 * farEnvelope)) return "farEnvelope";
      }
    }
    return {
      coordinateRoundoff,
      slopeBound,
      margin,
      normalTurn,
      settled: cap.minT === minT && startRadius >= endRadius,
    };
  };

  /**
   * How far apart, in t, two points of a stretch that both meet the target can lie, from the rounding of the
   * residual there and the least |f'|; or the reason the two paths' points are not shown to agree within budget.
   */
  const moveOf = (envelope: number, margin: number, normalTurn: number): number | SeedRefusal => {
    if (!(envelope <= tolerance * SEED_ENVELOPE_SHARE)) return "roundoff";
    const move = (2 * (tolerance + envelope)) / margin;
    if (!(move * length <= MAX_ROOT_MOVE)) return "nearTangency";
    if (transverseSpeed > 0 && !(move * transverseSpeed * normalTurn <= MAX_NORMAL_MOVE)) return "nearTangency";
    return move;
  };

  /** The reason a point may not be returned under a certificate that covers it, or null when it may. */
  const refusalAt = (certificate: SeedCertificate, at: SurfaceEvaluation): SeedRefusal | null => {
    // The iterative path's envelope at the point, under the stretch's slope bound.
    const envelope = sagResidualRoundoff(origin, direction, at.t, vertexZ, at.radius, at.sag, certificate.slopeBound);
    const move = moveOf(envelope, certificate.margin, certificate.normalTurn);
    if (typeof move === "string") return move;
    // Inside the target of the vertex plane the iterative path stops on its seed there, not on the surface.
    if (Math.abs(at.sag) <= 2 * tolerance && at.t !== vertexPlaneT) return "vertexPlane";
    // That path tests each bound before it looks between them, and returns a bound that passes.
    if (!(at.t - minT > move && maxT - at.t > move)) return "atBound";
    // The two paths' radii differ by no more than the move between their points and the rounding of both.
    const radiusSlack = 2 * certificate.coordinateRoundoff + transverseSpeed * move;
    // Both paths' points are inside the cap: this one by that much.
    if (!(at.radius + radiusSlack <= clearRadius)) return "atRim";
    /* Under VECTOR_EPSILON of radius a normal is the axis' (`normalFromSlope`), and from there on the surface's,
     * so it steps there by the slope. The turn of the normal bounds a smooth normal only: where the two points
     * can lie on either side of that radius, the slope at the outer one bounds how far their normals differ. */
    if (
      Math.abs(at.radius - VECTOR_EPSILON) <= radiusSlack &&
      !((profile.maxAbsSlope?.(VECTOR_EPSILON + radiusSlack) ?? Infinity) <= MAX_NORMAL_MOVE)
    ) {
      return "axisNormal";
    }
    return null;
  };

  const windowLo = Math.max(cap.minT, seed - step);
  const windowHi = Math.min(cap.maxT, seed + step);
  const windowCertificate = certify(windowLo, windowHi);
  if (typeof windowCertificate === "string") return windowCertificate;
  /* What no certificate can better is refused before anything is evaluated. Every point of the cap interval has
   * at least the operands of its start. A settled certificate's slope bound, margin and normal turn are the best
   * any has; otherwise the bound is taken as 0, the margin as |dz| and the turn as 0. */
  const { settled } = windowCertificate;
  const earliest = moveOf(
    sagResidualRoundoff(origin, direction, cap.minT, vertexZ, 0, 0, settled ? windowCertificate.slopeBound : 0),
    settled ? windowCertificate.margin : axialSpeed,
    settled ? windowCertificate.normalTurn : 0,
  );
  if (typeof earliest === "string") return earliest;

  /* ── Newton from the seed ── */

  /* No bracket, no bisection and no envelope: the iteration either meets the raw target inside the cap interval
   * within its evaluations, or the solve is the iterative path's. The evaluation is that path's own, domain rule
   * included. */
  const domainRadius = profile.finiteRadiusLimit();
  const sagSlope: SagSlope = { sag: 0, slope: 0 };
  let t = seed;
  let found: SurfaceEvaluation | null = null;
  let evaluations = 0;
  while (evaluations < SEED_MAX_EVALUATIONS) {
    evaluations++;
    const current = evaluateProfile(origin, direction, profile, vertexZ, t, domainRadius, sagSlope);
    if (!isFiniteValueEvaluation(current)) return "notConverged";
    if (Math.abs(current.value) <= tolerance) {
      found = current;
      break;
    }
    if (!isFiniteEvaluation(current)) return "notConverged";
    const next = t - current.value / current.derivative;
    // A correction that cannot move t is a stall, and a stall is the iterative path's to judge.
    if (next === t || !(next >= cap.minT && next <= cap.maxT)) return "notConverged";
    t = next;
  }
  if (found === null) return "notConverged";

  /* ── Acceptance ── */

  /* The window's certificate covers a point inside the window. Where it does not serve, one about the point
   * itself may: its stretch is shorter, so its slope bound can be lower. A settled certificate that covers the
   * point is already the tightest about it but for the rounding of its coordinate bound, and its refusal stands. */
  const inWindow = found.t >= windowLo && found.t <= windowHi;
  const windowRefusal = inWindow ? refusalAt(windowCertificate, found) : null;
  if (!inWindow || windowRefusal !== null) {
    if (windowRefusal !== null && settled) return windowRefusal;
    const pointCertificate = certify(found.t, found.t);
    if (typeof pointCertificate === "string") return pointCertificate;
    const pointRefusal = refusalAt(pointCertificate, found);
    if (pointRefusal !== null) return pointRefusal;
  }

  return {
    ok: true,
    t: found.t,
    point: found.point,
    radius: found.radius,
    // The slope of the same evaluation: bit for bit the normal `profile.normalAt` builds from its own.
    normal: normalFromSlope(found.point[0], found.point[1], found.radius, found.slope),
    residual: found.value,
    effectiveTolerance: tolerance,
    iterations: evaluations,
    segmentLength: found.t,
    opticalPathLength: options.refractiveIndex === undefined ? null : options.refractiveIndex * found.t,
  };
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
