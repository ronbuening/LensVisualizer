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
