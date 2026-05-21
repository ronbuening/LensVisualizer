import type { AsphericCoefficients } from "../../types/optics.js";
import { FLAT_R_THRESHOLD, conicPolySag } from "./surfaceMath.js";
import {
  intersectSagSurface,
  surfaceNormalAtHit,
  type SurfaceIntersectionFailureReason,
  type SurfaceIntersectionRay,
  type Vector3,
} from "./surfaceIntersection.js";

export type { Vector3 } from "./surfaceIntersection.js";

export interface ExactTraceSurface {
  R: number;
  nd: number;
  d: number;
  sd?: number;
}

export interface ExactTraceLens {
  S: readonly ExactTraceSurface[];
  asphByIdx: Record<number, AsphericCoefficients>;
  stopIdx?: number;
  clipMargin?: number;
}

export interface ExactSurfaceTraceInput {
  x0?: number;
  y0: number;
  ux0?: number;
  uy0: number;
}

/**
 * Vector-native ray input for the exact surface tracer. Use this when the caller
 * already has a 3D ray (origin + normalized direction) and wants to bypass the
 * slope-based `[ux, uy, 1] / ||·||` construction.
 *
 * Direction must be normalized. For rays outside the forward cone
 * (`direction[2] ≤ 0`), callers must pass `launchBoundT` so the per-surface
 * intersection search has a finite parametric bound — the z-projected bound is
 * meaningless for grazing or backward rays.
 */
export interface VectorRayInput {
  origin: Vector3;
  direction: Vector3;
}

export interface ExactSurfaceTraceOptions {
  zPos?: readonly number[];
  stopAt?: number;
  skipLastTransfer?: boolean;
  recordHeights?: boolean;
  checkSemiDiameter?: boolean;
  stopSemiDiameter?: number;
  ghost?: boolean;
  stopOnClip?: boolean;
  /** Slope-entry only: distance to back-project the origin behind the first surface vertex. Ignored by `traceExactSurfaceStackVector`. */
  leadDistance?: number;
  /**
   * Parametric bound for per-surface intersection search when `direction[2]` is
   * too small for the z-projected bound to be meaningful (bounding-sphere launch
   * for past-cap fisheye fields). Typically `2 × launchRadiusMm`. Ignored on
   * forward-cone rays where the z-projected bound is tighter.
   */
  launchBoundT?: number;
  indexAtSurface?: (surfaceIdx: number, nd: number) => number;
}

export interface ExactSurfaceTraceHit {
  surfaceIdx: number;
  point: Vector3;
  normal: Vector3;
  radius: number;
  clipped: boolean;
  fallback: boolean;
  failureReason: SurfaceIntersectionFailureReason | "totalInternalReflection" | null;
}

export interface ExactSurfaceTraceResult {
  x: number;
  y: number;
  ux: number;
  uy: number;
  n: number;
  clipped: boolean;
  heights: number[] | null;
  hits: ExactSurfaceTraceHit[];
  terminalPoint: Vector3;
  terminalDirection: Vector3;
  terminalSurfaceIdx: number;
  returnVertexIdx: number;
  failureReason: SurfaceIntersectionFailureReason | "totalInternalReflection" | null;
}

const TRACE_CLIP_ABS_TOLERANCE = 1e-9;

export function buildSurfaceZPositions(surfaces: readonly Pick<ExactTraceSurface, "d">[]): number[] {
  const z = [0];
  for (let i = 0; i < surfaces.length - 1; i++) z.push(z[i] + surfaces[i].d);
  return z;
}

export function normalizeDirection(ux: number, uy: number): Vector3 {
  const invMag = 1 / Math.hypot(ux, uy, 1);
  return [ux * invMag, uy * invMag, invMag];
}

export function projectCoordinateToZ(
  coordinate: number,
  pointZ: number,
  directionCoordinate: number,
  directionZ: number,
  z: number,
): number {
  if (Math.abs(directionZ) <= 1e-12) return coordinate;
  return coordinate + ((z - pointZ) * directionCoordinate) / directionZ;
}

export function refractDirection(direction: Vector3, normal: Vector3, n: number, nn: number): Vector3 | null {
  const eta = n / nn;
  const cosIncident = direction[0] * normal[0] + direction[1] * normal[1] + direction[2] * normal[2];
  const tangentX = direction[0] - cosIncident * normal[0];
  const tangentY = direction[1] - cosIncident * normal[1];
  const tangentZ = direction[2] - cosIncident * normal[2];
  const tangentSq = tangentX * tangentX + tangentY * tangentY + tangentZ * tangentZ;
  const scaledTangentSq = eta * eta * tangentSq;
  if (scaledTangentSq > 1 + 1e-12) return null;

  const normalScale = Math.sqrt(Math.max(0, 1 - scaledTangentSq));
  const transmitted: Vector3 = [
    eta * tangentX + normalScale * normal[0],
    eta * tangentY + normalScale * normal[1],
    eta * tangentZ + normalScale * normal[2],
  ];
  const invMag = 1 / Math.hypot(transmitted[0], transmitted[1], transmitted[2]);
  return [transmitted[0] * invMag, transmitted[1] * invMag, transmitted[2] * invMag];
}

export function traceExactSurfaceStack(
  lens: ExactTraceLens,
  { x0 = 0, y0, ux0 = 0, uy0 }: ExactSurfaceTraceInput,
  options: ExactSurfaceTraceOptions = {},
): ExactSurfaceTraceResult {
  const zPos = options.zPos ?? buildSurfaceZPositions(lens.S);
  const lead = Math.max(0, options.leadDistance ?? inferLeadDistance(lens));
  const origin: Vector3 = [x0 - ux0 * lead, y0 - uy0 * lead, (zPos[0] ?? 0) - lead];
  const direction = normalizeDirection(ux0, uy0);
  return traceExactSurfaceStackVector(lens, { origin, direction }, { ...options, zPos, leadDistance: 0 });
}

export function traceExactSurfaceStackVector(
  lens: ExactTraceLens,
  { origin: originIn, direction: directionIn }: VectorRayInput,
  {
    zPos = buildSurfaceZPositions(lens.S),
    stopAt,
    skipLastTransfer = false,
    recordHeights = false,
    checkSemiDiameter = false,
    stopSemiDiameter,
    ghost = false,
    stopOnClip = false,
    launchBoundT,
    indexAtSurface,
  }: ExactSurfaceTraceOptions = {},
): ExactSurfaceTraceResult {
  const total = lens.S.length;
  const tracedCount = clampTraceCount(stopAt ?? total, total);
  const heights: number[] | null = recordHeights ? [] : null;
  const hits: ExactSurfaceTraceHit[] = [];
  let origin: Vector3 = [originIn[0], originIn[1], originIn[2]];
  let direction: Vector3 = [directionIn[0], directionIn[1], directionIn[2]];
  let n = 1.0;
  let clipped = false;
  let terminalPoint: Vector3 = origin;
  let terminalSurfaceIdx = -1;
  let failureReason: ExactSurfaceTraceResult["failureReason"] = null;

  for (let i = 0; i < tracedCount; i++) {
    const surface = lens.S[i];
    const vertexZ = zPos[i] ?? 0;
    const maxT = surfaceIntersectionMaxT(i, origin, direction, zPos, lens, launchBoundT);
    const hit = intersectSagSurface({ origin, direction } satisfies SurfaceIntersectionRay, i, vertexZ, lens, {
      maxT,
      refractiveIndex: n,
    });

    let point: Vector3;
    let normal: Vector3;
    let radius: number;
    let fallback = false;
    let hitFailure: ExactSurfaceTraceHit["failureReason"] = null;

    if (hit.ok) {
      point = hit.point;
      normal = hit.normal;
      radius = hit.radius;
    } else {
      clipped = true;
      failureReason = hit.failureReason;
      if (!ghost) break;

      const fallbackPoint = fallbackSurfacePoint(origin, direction, vertexZ, i, lens, maxT);
      if (fallbackPoint === null) continue;
      point = fallbackPoint.point;
      normal = fallbackPoint.normal;
      radius = Math.hypot(point[0], point[1]);
      fallback = true;
      hitFailure = hit.failureReason;
    }

    terminalPoint = point;
    terminalSurfaceIdx = i;
    if (recordHeights) {
      heights!.push(projectCoordinateToZ(point[1], point[2], direction[1], direction[2], vertexZ));
    }

    const apertureClip = apertureSemiDiameter(i, surface, lens, stopSemiDiameter);
    if (checkSemiDiameter && apertureClip !== null && exceedsTraceAperture(radius, apertureClip)) {
      clipped = true;
    }

    const hitClipped = clipped;
    hits.push({
      surfaceIdx: i,
      point,
      normal,
      radius,
      clipped: hitClipped,
      fallback,
      failureReason: hitFailure,
    });

    if (hitClipped && stopOnClip && !ghost) break;

    const nn = indexAtSurface ? indexAtSurface(i, surface.nd) : surface.nd === 1.0 ? 1.0 : surface.nd;
    if (nn !== n) {
      if (hitClipped && Math.abs(surface.R) < FLAT_R_THRESHOLD && radius * radius > surface.R * surface.R) {
        // Ghost ray beyond the mathematical sphere extent: propagate straight.
      } else {
        const refracted = refractDirection(direction, normal, n, nn);
        if (refracted === null) {
          clipped = true;
          failureReason = "totalInternalReflection";
          hits[hits.length - 1] = { ...hits[hits.length - 1], clipped: true, failureReason };
          if (!ghost) break;
        } else {
          direction = refracted;
        }
      }
    }

    n = nn;
    origin = point;
  }

  const returnVertexIdx = resolveReturnVertexIdx(stopAt, skipLastTransfer, terminalSurfaceIdx, total);
  const returnZ = zPos[returnVertexIdx] ?? zPos[zPos.length - 1] ?? 0;
  const directionZ = direction[2];
  const invDz = Math.abs(directionZ) > 1e-12 ? 1 / directionZ : Infinity;
  const x = projectCoordinateToZ(terminalPoint[0], terminalPoint[2], direction[0], directionZ, returnZ);
  const y = projectCoordinateToZ(terminalPoint[1], terminalPoint[2], direction[1], directionZ, returnZ);

  return {
    x,
    y,
    ux: direction[0] * invDz,
    uy: direction[1] * invDz,
    n,
    clipped,
    heights,
    hits,
    terminalPoint,
    terminalDirection: direction,
    terminalSurfaceIdx,
    returnVertexIdx,
    failureReason,
  };
}

function clampTraceCount(value: number, total: number): number {
  if (!isFinite(value)) return total;
  return Math.min(total, Math.max(0, Math.round(value)));
}

function resolveReturnVertexIdx(
  stopAt: number | undefined,
  skipLastTransfer: boolean,
  terminalSurfaceIdx: number,
  total: number,
): number {
  if (total <= 0) return 0;
  if (stopAt !== undefined) {
    const tracedCount = clampTraceCount(stopAt, total);
    if (tracedCount <= 0) return 0;
    return skipLastTransfer ? Math.min(tracedCount - 1, total - 1) : Math.min(tracedCount, total - 1);
  }
  return terminalSurfaceIdx >= 0 ? terminalSurfaceIdx : 0;
}

function apertureSemiDiameter(
  surfaceIdx: number,
  surface: ExactTraceSurface,
  lens: ExactTraceLens,
  stopSemiDiameter: number | undefined,
): number | null {
  if (surfaceIdx === lens.stopIdx && stopSemiDiameter !== undefined) return stopSemiDiameter;
  if (typeof surface.sd !== "number") return null;
  return surface.sd * (lens.clipMargin ?? 1);
}

function exceedsTraceAperture(radius: number, semiDiameter: number): boolean {
  const tolerance = Math.max(TRACE_CLIP_ABS_TOLERANCE, Math.abs(semiDiameter) * 1e-12);
  return radius > semiDiameter + tolerance;
}

function inferLeadDistance(lens: ExactTraceLens): number {
  const first = lens.S[0];
  if (!first) return 0;
  const firstSag = Math.abs(conicPolySag(first.sd ?? 0, first.R, lens.asphByIdx[0]));
  return Math.max(1, firstSag + 1);
}

function surfaceIntersectionMaxT(
  surfIdx: number,
  origin: Vector3,
  direction: Vector3,
  zPos: readonly number[],
  lens: ExactTraceLens,
  launchBoundT: number | undefined,
): number {
  if (direction[2] > 1e-12) {
    const vertexZ = zPos[surfIdx] ?? 0;
    const nextZ =
      surfIdx < lens.S.length - 1 ? (zPos[surfIdx + 1] ?? vertexZ) : vertexZ + Math.abs(lens.S[surfIdx]?.d ?? 0);
    const surfaceSag = Math.abs(
      conicPolySag(lens.S[surfIdx]?.sd ?? 0, lens.S[surfIdx]?.R ?? 0, lens.asphByIdx[surfIdx]),
    );
    const boundZ = Math.max(vertexZ + surfaceSag + 1, nextZ, origin[2] + 1e-6);
    return Math.max(1e-6, (boundZ - origin[2]) / direction[2]);
  }
  // Grazing or backward ray (bounding-sphere launch). The z-projected bound is
  // meaningless; fall back to the caller-supplied launch bound. Returning 0 when
  // unset preserves the original reject-and-fail behavior.
  return launchBoundT && launchBoundT > 0 ? launchBoundT : 0;
}

// Only reached on the ghost-render path for grazing or backward rays from
// bounding-sphere launches (forward production rays never trip the
// `|direction[2]| < 1e-12` brute-force scan).
function fallbackSurfacePoint(
  origin: Vector3,
  direction: Vector3,
  vertexZ: number,
  surfIdx: number,
  lens: ExactTraceLens,
  maxT: number,
): { point: Vector3; normal: Vector3 } | null {
  const projectedT = Math.abs(direction[2]) > 1e-12 ? (vertexZ - origin[2]) / direction[2] : NaN;
  let t = isFinite(projectedT) && projectedT >= 0 && (!isFinite(maxT) || projectedT <= maxT) ? projectedT : NaN;

  if (!isFinite(t)) {
    if (!isFinite(maxT) || maxT <= 0) return null;
    const samples = 32;
    let bestT = NaN;
    let bestResidual = Infinity;
    for (let i = 0; i <= samples; i++) {
      const candidateT = (maxT * i) / samples;
      const x = origin[0] + direction[0] * candidateT;
      const y = origin[1] + direction[1] * candidateT;
      const z = origin[2] + direction[2] * candidateT;
      const surfaceZ = vertexZ + conicPolySag(Math.hypot(x, y), lens.S[surfIdx].R, lens.asphByIdx[surfIdx]);
      const residual = Math.abs(z - surfaceZ);
      if (isFinite(residual) && residual < bestResidual) {
        bestResidual = residual;
        bestT = candidateT;
      }
    }
    if (!isFinite(bestT)) return null;
    t = bestT;
  }

  const x = origin[0] + direction[0] * t;
  const y = origin[1] + direction[1] * t;
  const surfaceZ = vertexZ + conicPolySag(Math.hypot(x, y), lens.S[surfIdx].R, lens.asphByIdx[surfIdx]);
  return {
    point: [x, y, surfaceZ],
    normal: surfaceNormalAtHit(x, y, surfIdx, lens),
  };
}
