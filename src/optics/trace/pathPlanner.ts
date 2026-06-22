/**
 * Trace path planning — surface and image-plane intersection selection for exact tracing.
 *
 * Supplies bounded hit searches, nearest-surface selection, and loop guards
 * used by sequential and generalized paths.
 */

import type { FoldedPathAutoCandidateSkip } from "../../types/optics.js";
import { intersectSurfaceProfile, type SurfaceIntersectionResult } from "../math/intersection.js";
import type { PreparedOpticalState, Ray3, Vec3 } from "../types.js";
import { evaluateAperture } from "./aperture.js";
import { incidentSideFor, resolvedNextIndex } from "./interactions.js";
import { surfaceLabel } from "./foldedDiagnostics.js";

/** Candidate hit selected or skipped during generalized surface search. */
export interface SurfaceHitCandidate {
  surfaceIndex: number | null;
  hit: SurfaceIntersectionResult | null;
  skippedCandidates: FoldedPathAutoCandidateSkip[];
}

/** Intersection of a ray with the current image plane. */
export interface ImagePlaneIntersection {
  point: Vec3;
  t: number;
}

/**
 * Compute the bounded search length for the next sequential surface.
 *
 * @param state - prepared optical state
 * @param surfaceIndex - surface being targeted
 * @param origin - current ray origin
 * @param direction - normalized ray direction
 * @param launchBoundT - optional caller-provided bound for grazing/vector launches
 * @returns positive parametric maxT for intersection search, or 0 when unbounded search is unsafe
 */
export function sequentialSurfaceMaxT(
  state: PreparedOpticalState,
  surfaceIndex: number,
  origin: Vec3,
  direction: Vec3,
  launchBoundT?: number,
): number {
  const surface = state.surfaces[surfaceIndex];
  if (direction[2] > 1e-12) {
    const vertexZ = surface.z;
    const nextZ =
      surfaceIndex < state.surfaces.length - 1
        ? state.surfaces[surfaceIndex + 1].z
        : vertexZ + Math.abs(surface.d ?? 0);
    const surfaceSag = Math.abs(surface.profile.sag(surface.sd ?? 0));
    const boundZ = Math.max(vertexZ + surfaceSag + 1, nextZ, origin[2] + 1e-6);
    return Math.max(1e-6, (boundZ - origin[2]) / direction[2]);
  }
  return launchBoundT && launchBoundT > 0 ? launchBoundT : 0;
}

/**
 * Compute a bounded search length for an explicitly targeted surface.
 *
 * Tilted planes and grazing vector launches cannot rely on z projection alone,
 * so the fallback bound includes total lens extent and clear aperture margins.
 *
 * @param state - prepared optical state
 * @param surfaceIndex - surface being targeted
 * @param origin - current ray origin
 * @param direction - normalized ray direction
 * @param launchBoundT - optional caller-provided vector-launch bound
 * @returns positive parametric maxT for the surface intersection search
 */
export function targetedSurfaceMaxT(
  state: PreparedOpticalState,
  surfaceIndex: number,
  origin: Vec3,
  direction: Vec3,
  launchBoundT?: number,
): number {
  const surface = state.surfaces[surfaceIndex];
  const vertexZ = surface.z;
  const surfaceSag = Math.abs(surface.profile.sag(surface.sd ?? 0));
  const hasTiltedPlaneNormal = surface.interaction.normal !== null;
  if (!hasTiltedPlaneNormal && Math.abs(direction[2]) > 1e-12) {
    const projectedT = (vertexZ - origin[2]) / direction[2];
    if (Number.isFinite(projectedT) && projectedT > 0) {
      return Math.max(1e-6, projectedT + (surfaceSag + 2) / Math.abs(direction[2]));
    }
  }
  if (launchBoundT && launchBoundT > 0) return launchBoundT;
  const extent = state.surfaces.reduce((sum, item) => sum + Math.abs(item.d ?? 0), 0);
  const maxSD = state.surfaces.reduce((max, item) => Math.max(max, item.sd ?? 0), 0);
  return Math.max(10, extent + 4 * maxSD + surfaceSag);
}

/**
 * Intersect the current ray with a prepared surface profile.
 *
 * @param ray - current ray origin and normalized direction
 * @param state - prepared optical state
 * @param surfaceIndex - surface index to test
 * @param options - search bounds and current refractive index
 * @returns surface intersection result with typed failure reason
 */
export function intersectStateSurface(
  ray: Ray3,
  state: PreparedOpticalState,
  surfaceIndex: number,
  options: {
    minT?: number;
    maxT?: number;
    refractiveIndex?: number;
  } = {},
): SurfaceIntersectionResult {
  const surface = state.surfaces[surfaceIndex];
  return intersectSurfaceProfile(ray, surface.profile, surface.z, { ...options, directionNormalized: true });
}

/**
 * Intersect a ray with the current image plane.
 *
 * @param origin - current ray origin
 * @param direction - normalized ray direction
 * @param state - prepared optical state carrying the image plane
 * @returns image-plane hit, or null when the ray is parallel/behind the origin
 */
export function intersectImagePlane(
  origin: Vec3,
  direction: Vec3,
  state: PreparedOpticalState,
): ImagePlaneIntersection | null {
  const imagePlane = state.imagePlane;
  const denom =
    imagePlane.normal[0] * direction[0] + imagePlane.normal[1] * direction[1] + imagePlane.normal[2] * direction[2];
  if (Math.abs(denom) <= 1e-12) return null;
  const numer =
    imagePlane.normal[0] * (origin[0] - imagePlane.point[0]) +
    imagePlane.normal[1] * (origin[1] - imagePlane.point[1]) +
    imagePlane.normal[2] * (origin[2] - imagePlane.point[2]);
  const t = -numer / denom;
  if (!Number.isFinite(t) || t <= 1e-7) return null;
  return {
    t,
    point: [origin[0] + direction[0] * t, origin[1] + direction[1] * t, origin[2] + direction[2] * t],
  };
}

/**
 * Find the nearest valid generalized-trace surface hit.
 *
 * Auto-mode folded tracing scans all candidate surfaces, skipping self-hits,
 * inactive annular zones, and passive same-index refractive surfaces.
 *
 * @param origin - current ray origin
 * @param direction - normalized ray direction
 * @param state - prepared optical state
 * @param launchBoundT - optional bound for grazing/vector launches
 * @param refractiveIndex - current medium index
 * @param indexAtSurface - optional chromatic index resolver
 * @param previousSurfaceIndex - last hit surface, used to suppress self-hits
 * @param allowedSurfaceIndexes - optional explicit candidate set
 * @returns nearest valid candidate and diagnostics for skipped candidates
 */
export function findNearestGeneralizedSurfaceHit(
  origin: Vec3,
  direction: Vec3,
  state: PreparedOpticalState,
  launchBoundT: number | undefined,
  refractiveIndex: number,
  indexAtSurface: ((surfaceIndex: number, nd: number) => number) | undefined,
  previousSurfaceIndex: number,
  allowedSurfaceIndexes?: ReadonlySet<number>,
): SurfaceHitCandidate {
  let best: { surfaceIndex: number; hit: SurfaceIntersectionResult } | null = null;
  const skippedCandidates: FoldedPathAutoCandidateSkip[] = [];

  for (let i = 0; i < state.surfaces.length; i++) {
    if (allowedSurfaceIndexes && !allowedSurfaceIndexes.has(i)) continue;
    const maxT = targetedSurfaceMaxT(state, i, origin, direction, launchBoundT);
    const hit = intersectStateSurface({ origin, direction }, state, i, {
      minT: 1e-6,
      maxT,
      refractiveIndex,
    });

    if (!hit.ok) {
      skippedCandidates.push({
        surfaceIdx: i,
        surfaceLabel: surfaceLabel(state, i),
        reason: "intersection-failed",
        failureReason: hit.failureReason,
      });
      continue;
    }
    if (hit.t <= 0) {
      skippedCandidates.push({
        surfaceIdx: i,
        surfaceLabel: surfaceLabel(state, i),
        reason: "non-forward-hit",
        t: hit.t,
      });
      continue;
    }
    if (i === previousSurfaceIndex && hit.t <= selfHitTolerance(hit.t)) {
      skippedCandidates.push({ surfaceIdx: i, surfaceLabel: surfaceLabel(state, i), reason: "self-hit", t: hit.t });
      continue;
    }
    if (isPassiveAutoSurface(i, hit, direction, state, refractiveIndex, indexAtSurface)) {
      skippedCandidates.push({
        surfaceIdx: i,
        surfaceLabel: surfaceLabel(state, i),
        reason: "passive-same-index",
        t: hit.t,
      });
      continue;
    }
    if (!best || hit.t < (best.hit.ok ? best.hit.t : Infinity)) best = { surfaceIndex: i, hit };
  }

  return { surfaceIndex: best?.surfaceIndex ?? null, hit: best?.hit ?? null, skippedCandidates };
}

/**
 * Compute a tolerance for repeated-hit suppression.
 *
 * @param t - parametric hit distance
 * @returns absolute tolerance scaled to the current ray step
 */
export function generalizedHitTolerance(t: number): number {
  return Math.max(1e-7, Math.abs(t) * 1e-9);
}

/**
 * Bucket ray state for generalized-trace loop detection.
 *
 * @param surfaceIndex - current surface index
 * @param point - current hit point
 * @param direction - outgoing direction
 * @param n - current refractive index
 * @returns stable coarse key for repeated-state detection
 */
export function loopStateKey(surfaceIndex: number, point: Vec3, direction: Vec3, n: number): string {
  const bucket = (value: number, scale: number) => Math.round(value / scale);
  return [
    surfaceIndex,
    bucket(point[0], 1e-5),
    bucket(point[1], 1e-5),
    bucket(point[2], 1e-5),
    bucket(direction[0], 1e-7),
    bucket(direction[1], 1e-7),
    bucket(direction[2], 1e-7),
    bucket(n, 1e-9),
  ].join(":");
}

function isPassiveAutoSurface(
  surfaceIndex: number,
  hit: SurfaceIntersectionResult,
  direction: Vec3,
  state: PreparedOpticalState,
  refractiveIndex: number,
  indexAtSurface: ((surfaceIndex: number, nd: number) => number) | undefined,
): boolean {
  if (!hit.ok) return true;
  const surface = state.surfaces[surfaceIndex];
  if (surface.interaction.type !== "refract") return false;
  const side = incidentSideFor(direction, hit.normal);
  const nextIndex = resolvedNextIndex(surfaceIndex, side, surface, state.surfaces, indexAtSurface);
  const aperture = evaluateAperture(state, surface, hit.radius);
  return aperture.state !== "inside" || Math.abs(nextIndex - refractiveIndex) <= 1e-12;
}

function selfHitTolerance(t: number): number {
  return Math.max(1e-5, Math.abs(t) * 1e-7);
}
