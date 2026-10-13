/**
 * Intersection kernel types — the options and results of `intersect.ts`, shared with `intersectConic.ts`.
 *
 * They sit apart from both so that neither solver file imports the other for a type. `intersect.ts` re-exports the
 * ones its callers use.
 */

import type { Vec3 } from "../types.js";

/** Typed reason for an exact surface-intersection failure. */
export type SurfaceIntersectionFailureReason =
  | "invalidDirection"
  | "invalidBounds"
  | "noBracket"
  | "noConvergedIntersection";

/**
 * Why a closed-form solve was handed to the iterative path.
 *
 * - `failedValidation`: the proposed root, at the point that would be returned, does not evaluate within the raw
 *   residual target, or the quadratic's coefficients are not finite.
 * - `nearTangency`: the ray grazes the surface, so the sign of the discriminant, a touch without a crossing, or the
 *   position of the root or of the normal there is inside rounding.
 * - `domainEdge`: a root lies on a point the iterative path has a rule of its own for, and that rule decides the
 *   answer: the edge of the conic's domain; the cap's rim; or, for the later of two roots, the upper bound or a
 *   sample of the bracket scan, which that path tests before it has found the earlier root.
 */
export type ClosedFormFallbackReason = "failedValidation" | "nearTangency" | "domainEdge";

/**
 * Why the conic-seeded route of a polynomial asphere left a solve to the iterative path.
 *
 * It is what `seedAsphereSolve` returns in place of a hit, and it is on no result: a refused solve returns exactly
 * what the iterative path returns for the same call. "The stretch" is the part of the ray the route's slope
 * certificate covers: every cap point from the lower bound to one step of the bracket scan past the point.
 *
 * - `noSeed`: the base conic has no root on its sag sheet inside the cap interval.
 * - `coordinateRoundoff`: the rounding of a transverse coordinate over the stretch, with that of the cap interval's
 *   ends, is not finite or is above the cap's clip tolerance; or the square of the transverse speed, from which
 *   the cap interval is solved, underflows.
 * - `shortBounds`: one step of the bracket scan of the bounds is not longer than the tolerance, the distance along
 *   the ray within which the iterative path's cap selection takes two hits for one root.
 * - `slopeBound`: the slope bound over the stretch is unusable, or does not leave |f'| above 1e-10, so the residual
 *   is not shown to be strictly monotone there.
 * - `farEnvelope`: a cap point beyond the stretch could be accepted by the iterative path under one of its own
 *   certificates.
 * - `roundoff`: the rounding of the residual is above 31/32 of the target, where the iterative path can stall and
 *   report its envelope.
 * - `nearTangency`: |f'| is so low that the iterative path's point could lie more than 5e-10 mm from the seeded
 *   one, or its normal more than 5e-11 from its normal.
 * - `axisNormal`: the two points could lie on either side of the radius under which a normal is the axis', and
 *   the normal steps there by more than 5e-11.
 * - `notConverged`: the seeded Newton iteration left the cap interval or the conic's domain, met an unusable
 *   derivative, could not move, or did not meet the target within its evaluations.
 * - `vertexPlane`: the point is within twice the target of the vertex plane without being the vertex-plane
 *   crossing, the point the iterative path accepts there.
 * - `atBound`: the point is within that move of a search bound, where the iterative path tests the bound itself.
 * - `atRim`: the point is within that move, and the rounding of its radius, of the cap's rim.
 */
export type SeedRefusal =
  | "noSeed"
  | "coordinateRoundoff"
  | "shortBounds"
  | "slopeBound"
  | "farEnvelope"
  | "roundoff"
  | "nearTangency"
  | "axisNormal"
  | "notConverged"
  | "vertexPlane"
  | "atBound"
  | "atRim";

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
  /** Iteration budget of the iterative path. Setting it, or `bracketSamples`, asks for that path alone. */
  maxIterations?: number;
  bracketSamples?: number;
  refractiveIndex?: number;
  directionNormalized?: boolean;
  /** Authored asphere radius; exterior hits remain diagnostic when the ray misses the cap. */
  clearRadius?: number;
}

/** Successful ray/surface intersection with geometry at the hit point. */
export interface SurfaceIntersectionSuccess {
  ok: true;
  t: number;
  point: Vec3;
  radius: number;
  normal: Vec3;
  residual: number;
  /** Accepted residual bound in mm; larger than requested only for coordinate roundoff. */
  effectiveTolerance: number;
  iterations: number;
  segmentLength: number;
  opticalPathLength: number | null;
  /**
   * How the closed form fared on this solve. `intersectSurfaceProfile` alone sets it: null when the closed form
   * gave this result, the reason when it handed the solve to the iterative path, and absent when it was not
   * tried. It is the kernel's own diagnostic; the tracers do not copy it into a hit record.
   */
  closedFormFallback?: ClosedFormFallbackReason | null;
}

/** Failed ray/surface intersection with the best residual when available. */
export interface SurfaceIntersectionFailure {
  ok: false;
  failureReason: SurfaceIntersectionFailureReason;
  residual: number | null;
  iterations: number;
  /** As on a success: null for a closed-form miss, the reason after a fallback, absent when it was not tried. */
  closedFormFallback?: ClosedFormFallbackReason | null;
}

/** Union result for exact surface-profile intersection. */
export type SurfaceIntersectionResult = SurfaceIntersectionSuccess | SurfaceIntersectionFailure;

/** A span of ray parameters. */
export interface ParameterInterval {
  minT: number;
  maxT: number;
}
