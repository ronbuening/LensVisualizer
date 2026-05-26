import type { FoldedPathAutoCandidateSkip } from "../../types/optics.js";
import { intersectSurfaceProfile, type SurfaceIntersectionResult } from "../math/intersection.js";
import type { PreparedOpticalState, Ray3, Vec3 } from "../types.js";
import { evaluateAperture } from "./aperture.js";
import { incidentSideFor, resolvedNextIndex } from "./interactions.js";
import { surfaceLabel } from "./foldedDiagnostics.js";

export interface SurfaceHitCandidate {
  surfaceIndex: number | null;
  hit: SurfaceIntersectionResult | null;
  skippedCandidates: FoldedPathAutoCandidateSkip[];
}

export interface ImagePlaneIntersection {
  point: Vec3;
  t: number;
}

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
  return intersectSurfaceProfile(ray, surface.profile, surface.z, options);
}

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

export function generalizedHitTolerance(t: number): number {
  return Math.max(1e-7, Math.abs(t) * 1e-9);
}

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

export function fallbackSurfacePoint(
  origin: Vec3,
  direction: Vec3,
  state: PreparedOpticalState,
  surfaceIndex: number,
  maxT: number,
): { point: Vec3; normal: Vec3 } | null {
  const surface = state.surfaces[surfaceIndex];
  const projectedT = Math.abs(direction[2]) > 1e-12 ? (surface.z - origin[2]) / direction[2] : NaN;
  let t =
    Number.isFinite(projectedT) && projectedT >= 0 && (!Number.isFinite(maxT) || projectedT <= maxT) ? projectedT : NaN;

  if (!Number.isFinite(t)) {
    if (!Number.isFinite(maxT) || maxT <= 0) return null;
    const samples = 32;
    let bestT = NaN;
    let bestResidual = Infinity;
    for (let i = 0; i <= samples; i++) {
      const candidateT = (maxT * i) / samples;
      const point: Vec3 = [
        origin[0] + direction[0] * candidateT,
        origin[1] + direction[1] * candidateT,
        origin[2] + direction[2] * candidateT,
      ];
      const surfaceZ = surface.profile.pointAt(surface.z, point[0], point[1])[2];
      const residual = Math.abs(point[2] - surfaceZ);
      if (Number.isFinite(residual) && residual < bestResidual) {
        bestResidual = residual;
        bestT = candidateT;
      }
    }
    if (!Number.isFinite(bestT)) return null;
    t = bestT;
  }

  const x = origin[0] + direction[0] * t;
  const y = origin[1] + direction[1] * t;
  const point = surface.profile.pointAt(surface.z, x, y);
  return { point, normal: surface.profile.normalAt(point, surface.z) };
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
