import type {
  AsphericCoefficients,
  ResolvedImagePlane,
  ResolvedOpticalPath,
  SurfaceInteraction,
} from "../../types/optics.js";
import { FLAT_R_THRESHOLD, conicPolySag } from "./surfaceMath.js";
import {
  intersectSagSurface,
  surfaceNormalAtHit,
  type SurfaceIntersectionFailureReason,
  type SurfaceIntersectionOptions,
  type SurfaceIntersectionRay,
  type SurfaceIntersectionResult,
  type Vector3,
} from "./surfaceIntersection.js";

export type { Vector3 } from "./surfaceIntersection.js";

export interface ExactTraceSurface {
  R: number;
  nd: number;
  d: number;
  sd?: number;
  innerSd?: number;
  interaction?: SurfaceInteraction;
}

export interface ExactTraceLens {
  S: readonly ExactTraceSurface[];
  asphByIdx: Record<number, AsphericCoefficients>;
  stopIdx?: number;
  clipMargin?: number;
  opticalPath?: ResolvedOpticalPath;
  imagePlane?: ResolvedImagePlane;
  isFoldedOptics?: boolean;
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
  reachedImagePlane?: boolean;
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
  if (shouldUseGeneralizedTrace(lens, stopAt)) {
    return traceGeneralizedSurfaceStackVector(
      lens,
      { origin: originIn, direction: directionIn },
      {
        zPos,
        stopAt,
        recordHeights,
        checkSemiDiameter,
        stopSemiDiameter,
        ghost,
        stopOnClip,
        launchBoundT,
        indexAtSurface,
      },
    );
  }

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
    if (checkSemiDiameter && apertureClip !== null && !radiusWithinTraceAperture(radius, surface, apertureClip)) {
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
    reachedImagePlane: false,
  };
}

interface GeneralizedTraceOptions {
  zPos: readonly number[];
  stopAt?: number;
  recordHeights: boolean;
  checkSemiDiameter: boolean;
  stopSemiDiameter?: number;
  ghost: boolean;
  stopOnClip: boolean;
  launchBoundT?: number;
  indexAtSurface?: (surfaceIdx: number, nd: number) => number;
}

interface ImagePlaneIntersection {
  point: Vector3;
  t: number;
}

function shouldUseGeneralizedTrace(lens: ExactTraceLens, stopAt: number | undefined): boolean {
  if (!lens.isFoldedOptics && !lens.opticalPath && !lens.imagePlane) return false;
  if (stopAt !== undefined) return false;
  return (
    Boolean(lens.isFoldedOptics) ||
    Boolean(lens.opticalPath?.surfaceOrder?.length) ||
    lens.opticalPath?.mode === "auto" ||
    lens.S.some((surface) => surface.interaction && surface.interaction.type !== "refract")
  );
}

function traceGeneralizedSurfaceStackVector(
  lens: ExactTraceLens,
  { origin: originIn, direction: directionIn }: VectorRayInput,
  {
    zPos,
    recordHeights,
    checkSemiDiameter,
    stopSemiDiameter,
    ghost,
    stopOnClip,
    launchBoundT,
    indexAtSurface,
  }: GeneralizedTraceOptions,
): ExactSurfaceTraceResult {
  const path = lens.opticalPath;
  const explicitOrder = path?.surfaceOrder ?? null;
  const maxInteractions = path?.maxInteractions ?? Math.max(lens.S.length + 1, 1);
  const heights: number[] | null = recordHeights ? [] : null;
  const hits: ExactSurfaceTraceHit[] = [];
  let origin: Vector3 = [originIn[0], originIn[1], originIn[2]];
  let direction: Vector3 = [directionIn[0], directionIn[1], directionIn[2]];
  let n = 1.0;
  let clipped = false;
  let terminalPoint: Vector3 = origin;
  let terminalSurfaceIdx = -1;
  let failureReason: ExactSurfaceTraceResult["failureReason"] = null;
  let reachedImagePlane = false;
  let explicitCursor = 0;

  for (let interactionCount = 0; interactionCount < maxInteractions; interactionCount++) {
    const imageHit =
      !explicitOrder || explicitCursor >= explicitOrder.length
        ? intersectImagePlane(origin, direction, lens.imagePlane)
        : null;
    let nextSurfaceIdx: number | null = null;
    let nextSurfaceHit: SurfaceIntersectionResult | null = null;

    if (explicitOrder && explicitCursor < explicitOrder.length) {
      nextSurfaceIdx = explicitOrder[explicitCursor++];
      const maxT = surfaceIntersectionMaxTForTarget(nextSurfaceIdx, origin, direction, zPos, lens, launchBoundT);
      nextSurfaceHit = intersectGeneralizedSurface(
        { origin, direction } satisfies SurfaceIntersectionRay,
        nextSurfaceIdx,
        zPos[nextSurfaceIdx] ?? 0,
        lens,
        { maxT, refractiveIndex: n },
      );
    } else if (path?.mode === "auto") {
      const next = findNearestGeneralizedSurfaceHit(origin, direction, zPos, lens, launchBoundT, n, indexAtSurface);
      nextSurfaceIdx = next?.surfaceIdx ?? null;
      nextSurfaceHit = next?.hit ?? null;
    }

    if (
      imageHit &&
      (!nextSurfaceHit?.ok || imageHit.t <= Math.max(0, nextSurfaceHit.t - generalizedHitTolerance(nextSurfaceHit.t)))
    ) {
      terminalPoint = imageHit.point;
      reachedImagePlane = true;
      break;
    }

    if (nextSurfaceIdx === null || nextSurfaceHit === null) {
      if (imageHit) {
        terminalPoint = imageHit.point;
        reachedImagePlane = true;
      }
      break;
    }

    if (!nextSurfaceHit.ok) {
      clipped = true;
      failureReason = nextSurfaceHit.failureReason;
      if (!ghost) break;

      const fallbackPoint = fallbackSurfacePoint(
        origin,
        direction,
        zPos[nextSurfaceIdx] ?? 0,
        nextSurfaceIdx,
        lens,
        surfaceIntersectionMaxTForTarget(nextSurfaceIdx, origin, direction, zPos, lens, launchBoundT),
      );
      if (fallbackPoint === null) continue;
      const radius = Math.hypot(fallbackPoint.point[0], fallbackPoint.point[1]);
      hits.push({
        surfaceIdx: nextSurfaceIdx,
        point: fallbackPoint.point,
        normal: fallbackPoint.normal,
        radius,
        clipped: true,
        fallback: true,
        failureReason: nextSurfaceHit.failureReason,
      });
      terminalPoint = fallbackPoint.point;
      terminalSurfaceIdx = nextSurfaceIdx;
      if (stopOnClip) break;
      continue;
    }

    const surface = lens.S[nextSurfaceIdx];
    const point = nextSurfaceHit.point;
    const normal = nextSurfaceHit.normal;
    const radius = nextSurfaceHit.radius;
    terminalPoint = point;
    terminalSurfaceIdx = nextSurfaceIdx;
    if (recordHeights) {
      heights!.push(projectCoordinateToZ(point[1], point[2], direction[1], direction[2], zPos[nextSurfaceIdx] ?? 0));
    }

    const interaction = surface.interaction ?? { type: "refract" as const };
    const incidentSide = incidentSideFor(direction, normal);
    const sideActive =
      interaction.incidentSide === undefined ||
      interaction.incidentSide === "both" ||
      interaction.incidentSide === incidentSide;
    const apertureClip = apertureSemiDiameter(nextSurfaceIdx, surface, lens, stopSemiDiameter);
    const withinAperture = apertureClip === null || radiusWithinTraceAperture(radius, surface, apertureClip);

    if (!sideActive) {
      if (interaction.inactiveSide === "block") clipped = true;
      if (clipped) {
        hits.push({
          surfaceIdx: nextSurfaceIdx,
          point,
          normal,
          radius,
          clipped: true,
          fallback: false,
          failureReason: null,
        });
        if (stopOnClip && !ghost) break;
      }
      origin = advanceOrigin(point, direction);
      continue;
    }

    if (interaction.type === "block") {
      if (withinAperture) {
        clipped = true;
        hits.push({
          surfaceIdx: nextSurfaceIdx,
          point,
          normal,
          radius,
          clipped: true,
          fallback: false,
          failureReason: null,
        });
        if (stopOnClip && !ghost) break;
      }
      origin = advanceOrigin(point, direction);
      continue;
    }

    if (checkSemiDiameter && !withinAperture) clipped = true;
    hits.push({
      surfaceIdx: nextSurfaceIdx,
      point,
      normal,
      radius,
      clipped,
      fallback: false,
      failureReason: null,
    });
    if (clipped && stopOnClip && !ghost) break;

    if (interaction.type === "reflect") {
      direction = reflectDirection(direction, normal);
    } else {
      const nn = resolvedNextIndex(nextSurfaceIdx, incidentSide, surface, lens, indexAtSurface);
      if (nn !== n) {
        const orientedNormal = incidentSide === "front" ? normal : ([-normal[0], -normal[1], -normal[2]] as Vector3);
        const refracted = refractDirection(direction, orientedNormal, n, nn);
        if (refracted === null) {
          clipped = true;
          failureReason = "totalInternalReflection";
          hits[hits.length - 1] = { ...hits[hits.length - 1], clipped: true, failureReason };
          if (!ghost) break;
        } else {
          direction = refracted;
        }
      }
      n = nn;
    }

    origin = advanceOrigin(point, direction);
  }

  const returnVertexIdx = terminalSurfaceIdx >= 0 ? terminalSurfaceIdx : 0;
  const returnZ = reachedImagePlane ? terminalPoint[2] : (zPos[returnVertexIdx] ?? 0);
  const directionZ = direction[2];
  const invDz = Math.abs(directionZ) > 1e-12 ? 1 / directionZ : Infinity;
  const x = reachedImagePlane
    ? terminalPoint[0]
    : projectCoordinateToZ(terminalPoint[0], terminalPoint[2], direction[0], directionZ, returnZ);
  const y = reachedImagePlane
    ? terminalPoint[1]
    : projectCoordinateToZ(terminalPoint[1], terminalPoint[2], direction[1], directionZ, returnZ);

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
    reachedImagePlane,
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

function radiusWithinTraceAperture(radius: number, surface: ExactTraceSurface, semiDiameter: number): boolean {
  if (exceedsTraceAperture(radius, semiDiameter)) return false;
  const inner = surface.innerSd ?? 0;
  if (inner <= 0) return true;
  const tolerance = Math.max(TRACE_CLIP_ABS_TOLERANCE, Math.abs(inner) * 1e-12);
  return radius >= inner - tolerance;
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

function generalizedHitTolerance(t: number): number {
  return Math.max(1e-7, Math.abs(t) * 1e-9);
}

function surfaceIntersectionMaxTForTarget(
  surfIdx: number,
  origin: Vector3,
  direction: Vector3,
  zPos: readonly number[],
  lens: ExactTraceLens,
  launchBoundT: number | undefined,
): number {
  const vertexZ = zPos[surfIdx] ?? 0;
  const surfaceSag = Math.abs(conicPolySag(lens.S[surfIdx]?.sd ?? 0, lens.S[surfIdx]?.R ?? 0, lens.asphByIdx[surfIdx]));
  const hasTiltedPlaneNormal = Boolean(lens.S[surfIdx]?.interaction?.normal);
  if (!hasTiltedPlaneNormal && Math.abs(direction[2]) > 1e-12) {
    const projectedT = (vertexZ - origin[2]) / direction[2];
    if (isFinite(projectedT) && projectedT > 0) {
      return Math.max(1e-6, projectedT + (surfaceSag + 2) / Math.abs(direction[2]));
    }
  }
  if (launchBoundT && launchBoundT > 0) return launchBoundT;
  const extent = lens.S.reduce((sum, surface) => sum + Math.abs(surface.d ?? 0), 0);
  const maxSD = lens.S.reduce((max, surface) => Math.max(max, surface.sd ?? 0), 0);
  return Math.max(10, extent + 4 * maxSD + surfaceSag);
}

function findNearestGeneralizedSurfaceHit(
  origin: Vector3,
  direction: Vector3,
  zPos: readonly number[],
  lens: ExactTraceLens,
  launchBoundT: number | undefined,
  refractiveIndex: number,
  indexAtSurface: ((surfaceIdx: number, nd: number) => number) | undefined,
): { surfaceIdx: number; hit: SurfaceIntersectionResult } | null {
  let best: { surfaceIdx: number; hit: SurfaceIntersectionResult } | null = null;
  for (let i = 0; i < lens.S.length; i++) {
    const maxT = surfaceIntersectionMaxTForTarget(i, origin, direction, zPos, lens, launchBoundT);
    const hit = intersectGeneralizedSurface(
      { origin, direction } satisfies SurfaceIntersectionRay,
      i,
      zPos[i] ?? 0,
      lens,
      {
        minT: 1e-6,
        maxT,
        refractiveIndex,
      },
    );
    if (!hit.ok) continue;
    if (isPassiveAutoSurface(i, hit, direction, lens, refractiveIndex, indexAtSurface)) continue;
    if (!best || hit.t < (best.hit.ok ? best.hit.t : Infinity)) {
      best = { surfaceIdx: i, hit };
    }
  }
  return best;
}

function isPassiveAutoSurface(
  surfaceIdx: number,
  hit: SurfaceIntersectionResult,
  direction: Vector3,
  lens: ExactTraceLens,
  refractiveIndex: number,
  indexAtSurface: ((surfaceIdx: number, nd: number) => number) | undefined,
): boolean {
  if (!hit.ok) return true;
  const surface = lens.S[surfaceIdx];
  if (surface.interaction && surface.interaction.type !== "refract") return false;
  const incidentSide = incidentSideFor(direction, hit.normal);
  const nextIndex = resolvedNextIndex(surfaceIdx, incidentSide, surface, lens, indexAtSurface);
  return Math.abs(nextIndex - refractiveIndex) <= 1e-12;
}

function intersectGeneralizedSurface(
  ray: SurfaceIntersectionRay,
  surfaceIdx: number,
  vertexZ: number,
  lens: ExactTraceLens,
  options: SurfaceIntersectionOptions = {},
): SurfaceIntersectionResult {
  const normal = lens.S[surfaceIdx]?.interaction?.normal;
  if (!normal) return intersectSagSurface(ray, surfaceIdx, vertexZ, lens, options);
  return intersectTiltedMeridionalPlane(ray, surfaceIdx, vertexZ, normal, options);
}

function intersectTiltedMeridionalPlane(
  ray: SurfaceIntersectionRay,
  surfaceIdx: number,
  vertexZ: number,
  normal: { z: number; y: number },
  {
    minT = 0,
    maxT = Infinity,
    tolerance = 1e-9,
    refractiveIndex,
  }: Pick<SurfaceIntersectionOptions, "minT" | "maxT" | "tolerance" | "refractiveIndex"> = {},
): SurfaceIntersectionResult {
  const directionLength = Math.hypot(ray.direction[0], ray.direction[1], ray.direction[2]);
  if (!isFinite(directionLength) || directionLength <= 0) {
    return surfaceIntersectionFailure(surfaceIdx, "invalidRayDirection", null, 0);
  }
  if (!isFinite(minT) || minT < 0 || maxT < minT || (!isFinite(maxT) && maxT !== Infinity)) {
    return surfaceIntersectionFailure(surfaceIdx, "invalidBounds", null, 0);
  }

  const normalLength = Math.hypot(normal.z, normal.y);
  if (!isFinite(normalLength) || normalLength <= 1e-12) {
    return surfaceIntersectionFailure(surfaceIdx, "invalidRayDirection", null, 0);
  }
  const normalY = normal.y / normalLength;
  const normalZ = normal.z / normalLength;
  const direction: Vector3 = [
    ray.direction[0] / directionLength,
    ray.direction[1] / directionLength,
    ray.direction[2] / directionLength,
  ];
  const denom = normalY * direction[1] + normalZ * direction[2];
  if (Math.abs(denom) <= 1e-12) return surfaceIntersectionFailure(surfaceIdx, "noBracket", null, 0);

  const numer = normalY * ray.origin[1] + normalZ * (ray.origin[2] - vertexZ);
  const t = -numer / denom;
  if (!isFinite(t) || t < minT - tolerance || t > maxT + tolerance) {
    return surfaceIntersectionFailure(surfaceIdx, "noBracket", null, 0);
  }

  const clampedT = Math.min(Math.max(t, minT), maxT);
  const point: Vector3 = [
    ray.origin[0] + direction[0] * clampedT,
    ray.origin[1] + direction[1] * clampedT,
    ray.origin[2] + direction[2] * clampedT,
  ];
  const residual = normalY * point[1] + normalZ * (point[2] - vertexZ);
  return {
    ok: true,
    surfaceIdx,
    t: clampedT,
    point,
    radius: Math.hypot(point[0], point[1]),
    normal: [0, normalY, normalZ],
    residual,
    iterations: 0,
    segmentLength: clampedT,
    opticalPathLength: refractiveIndex === undefined ? null : refractiveIndex * clampedT,
  };
}

function surfaceIntersectionFailure(
  surfaceIdx: number,
  failureReason: SurfaceIntersectionFailureReason,
  residual: number | null,
  iterations: number,
): SurfaceIntersectionResult {
  return { ok: false, surfaceIdx, failureReason, residual, iterations };
}

function intersectImagePlane(
  origin: Vector3,
  direction: Vector3,
  imagePlane: ResolvedImagePlane | undefined,
): ImagePlaneIntersection | null {
  if (!imagePlane) return null;
  const normalY = imagePlane.normal.y;
  const normalZ = imagePlane.normal.z;
  const denom = normalY * direction[1] + normalZ * direction[2];
  if (Math.abs(denom) <= 1e-12) return null;
  const numer = normalY * (origin[1] - imagePlane.y) + normalZ * (origin[2] - imagePlane.z);
  const t = -numer / denom;
  if (!isFinite(t) || t <= 1e-7) return null;
  return {
    t,
    point: [origin[0] + direction[0] * t, origin[1] + direction[1] * t, origin[2] + direction[2] * t],
  };
}

function incidentSideFor(direction: Vector3, normal: Vector3): "front" | "rear" {
  const dot = direction[0] * normal[0] + direction[1] * normal[1] + direction[2] * normal[2];
  return dot >= 0 ? "front" : "rear";
}

function advanceOrigin(point: Vector3, direction: Vector3): Vector3 {
  const eps = 1e-7;
  return [point[0] + direction[0] * eps, point[1] + direction[1] * eps, point[2] + direction[2] * eps];
}

function reflectDirection(direction: Vector3, normal: Vector3): Vector3 {
  const dot = direction[0] * normal[0] + direction[1] * normal[1] + direction[2] * normal[2];
  const reflected: Vector3 = [
    direction[0] - 2 * dot * normal[0],
    direction[1] - 2 * dot * normal[1],
    direction[2] - 2 * dot * normal[2],
  ];
  const invMag = 1 / Math.hypot(reflected[0], reflected[1], reflected[2]);
  return [reflected[0] * invMag, reflected[1] * invMag, reflected[2] * invMag];
}

function resolvedNextIndex(
  surfaceIdx: number,
  incidentSide: "front" | "rear",
  surface: ExactTraceSurface,
  lens: ExactTraceLens,
  indexAtSurface: ((surfaceIdx: number, nd: number) => number) | undefined,
): number {
  const physicalNextNd = incidentSide === "front" ? surface.nd : surfaceIdx > 0 ? lens.S[surfaceIdx - 1].nd : 1.0;
  if (!indexAtSurface) return physicalNextNd === 1.0 ? 1.0 : physicalNextNd;
  return physicalNextNd === 1.0 ? 1.0 : indexAtSurface(surfaceIdx, physicalNextNd);
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
