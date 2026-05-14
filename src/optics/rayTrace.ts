import type { ChromaticChannel, ChromaticSpread, RayTraceResult, RuntimeLens } from "../types/optics.js";
import type { SurfaceTraceMode } from "./traceMode.js";
import { FLAT_R_THRESHOLD } from "./internal/surfaceMath.js";
import { intersectSagSurface, type SurfaceIntersectionRay, type Vector3 } from "./internal/surfaceIntersection.js";
import { traceSurfacesParaxial } from "./internal/traceSurfaces.js";
import { resolveSurfaceTraceMode } from "./traceMode.js";
import { renderSag, sagSlope, stateSurfaces, thick } from "./layout.js";

export interface RayTraceOptions {
  mode?: SurfaceTraceMode;
}

export interface SkewRayTraceResult {
  x: number;
  y: number;
  ux: number;
  uy: number;
  clipped: boolean;
}

export interface SkewImagePlaneIntercept {
  x: number;
  y: number;
}

export interface OrthogonalPupilSample {
  index: number;
  pupilFraction: number;
  xFraction: number;
  yFraction: number;
}

export interface CircularPupilSample {
  index: number;
  xFraction: number;
  yFraction: number;
  radiusFraction: number;
  azimuthRad: number;
  weight: number;
}

export const DEFAULT_ORTHOGONAL_PUPIL_FAN_SAMPLE_COUNT = 51;
export const DEFAULT_CIRCULAR_PUPIL_RING_SAMPLES = [1, 6, 12, 18, 24] as const;
const TRACE_CLIP_ABS_TOLERANCE = 1e-9;

export function wavelengthNd(nd: number, vd: number | undefined, channel: ChromaticChannel): number {
  if (nd === 1.0) return 1.0;
  if (!vd || channel === "G") return nd;
  const delta = (nd - 1) / (2 * vd);
  if (channel === "R") return nd - delta;
  if (channel === "B") return nd + delta;
  const nC = nd - delta;
  const nF = nd + delta;
  const PgF = 0.6438 - 0.001682 * vd;
  return nF + PgF * (nF - nC);
}

function traceRayLegacyCore(
  y0: number,
  u0: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  channel: ChromaticChannel | undefined,
  aberrationT = 0,
): RayTraceResult {
  const pts: number[][] = [];
  const ghostPts: number[][] = [];
  pts.push([zPos[0] - L.rayLead, y0 - u0 * L.rayLead]);
  let y = y0;
  let n = 1.0;
  let U = Math.atan(u0);
  let clipped = false;
  for (let i = 0; i < L.N; i++) {
    const { nd, sd } = L.S[i];
    const z = zPos[i];
    const isStop = i === L.stopIdx;
    const clip = isStop && stopSD !== undefined ? stopSD : sd * L.clipMargin;
    if (!clipped && exceedsTraceAperture(Math.abs(y), clip)) {
      clipped = true;
      if (!ghost) break;
    }
    const pt = [z + renderSag(Math.abs(y), i, L), y];
    if (clipped) ghostPts.push(pt);
    else pts.push(pt);
    const nn = channel
      ? (L.indexByIdx?.[i]?.fn(channel) ?? wavelengthNd(nd, L.vdByIdx[i], channel))
      : nd === 1
        ? 1
        : nd;
    if (nn !== n) {
      const absY = Math.abs(y);
      const R = L.S[i].R;
      if (clipped && Math.abs(R) < FLAT_R_THRESHOLD && absY * absY > R * R) {
        // Ghost ray beyond sphere extent: propagate straight, no refraction.
      } else {
        const slope = sagSlope(absY, i, L);
        const alpha = y >= 0 ? -Math.atan(slope) : Math.atan(slope);
        const I = U - alpha;
        const sinIp = (n / nn) * Math.sin(I);
        if (Math.abs(sinIp) > 1.0) {
          clipped = true;
          if (!ghost) break;
        } else {
          U = alpha + Math.asin(sinIp);
        }
      }
    }
    n = nn;
    if (i < L.N - 1) y += thick(i, focusT, zoomT, L, aberrationT) * Math.tan(U);
  }
  return { pts, ghostPts, y, u: Math.tan(U), clipped };
}

function traceRayExactCore(
  y0: number,
  u0: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  channel: ChromaticChannel | undefined,
  aberrationT = 0,
): RayTraceResult {
  const pts: number[][] = [];
  const ghostPts: number[][] = [];
  const leadZ = zPos[0] - L.rayLead;
  const leadY = y0 - u0 * L.rayLead;
  pts.push([leadZ, leadY]);

  let origin: Vector3 = [0, leadY, leadZ];
  let direction: Vector3 = normalizeDirection(0, u0);
  let n = 1.0;
  let clipped = false;
  let lastPoint: Vector3 = origin;
  let lastSurfaceIdx = -1;

  for (let i = 0; i < L.N; i++) {
    const { nd, sd } = L.S[i];
    const z = zPos[i];
    const maxT = surfaceIntersectionMaxT(i, origin, direction, zPos, focusT, zoomT, L, aberrationT);
    const hit = intersectSagSurface({ origin, direction } satisfies SurfaceIntersectionRay, i, z, L, {
      maxT,
      refractiveIndex: n,
    });

    let point: Vector3;
    let normal: Vector3;
    let radius: number;
    if (hit.ok) {
      point = hit.point;
      normal = hit.normal;
      radius = hit.radius;
    } else {
      clipped = true;
      const fallback = fallbackSurfacePoint(origin, direction, z, i, L);
      if (fallback === null) {
        if (!ghost) break;
        continue;
      }
      point = fallback.point;
      normal = fallback.normal;
      radius = Math.abs(fallback.point[1]);
    }

    lastPoint = point;
    lastSurfaceIdx = i;

    const isStop = i === L.stopIdx;
    const clip = isStop && stopSD !== undefined ? stopSD : sd * L.clipMargin;
    if (!clipped && exceedsTraceAperture(radius, clip)) {
      clipped = true;
      if (!ghost) break;
    }

    const pt = [point[2], point[1]];
    if (clipped) ghostPts.push(pt);
    else pts.push(pt);

    const nn = channel
      ? (L.indexByIdx?.[i]?.fn(channel) ?? wavelengthNd(nd, L.vdByIdx[i], channel))
      : nd === 1
        ? 1
        : nd;
    if (nn !== n) {
      const R = L.S[i].R;
      if (clipped && Math.abs(R) < FLAT_R_THRESHOLD && radius * radius > R * R) {
        // Ghost ray beyond sphere extent: propagate straight, no refraction.
      } else {
        const refracted = refractDirection(direction, normal, n, nn);
        if (refracted === null) {
          clipped = true;
          if (!ghost) break;
        } else {
          direction = refracted;
        }
      }
    }
    n = nn;
    origin = point;
  }

  const u = directionToSlope(direction);
  const returnSurfaceIdx = lastSurfaceIdx >= 0 ? lastSurfaceIdx : 0;
  const y = projectPointToZ(lastPoint, direction, zPos[returnSurfaceIdx]);
  return { pts, ghostPts, y, u, clipped };
}

function exceedsTraceAperture(radius: number, semiDiameter: number): boolean {
  const tolerance = Math.max(TRACE_CLIP_ABS_TOLERANCE, Math.abs(semiDiameter) * 1e-12);
  return radius > semiDiameter + tolerance;
}

function normalizeDirection(ux: number, uy: number): [number, number, number] {
  const invMag = 1 / Math.hypot(ux, uy, 1);
  return [ux * invMag, uy * invMag, invMag];
}

function directionToSlope(direction: Vector3): number {
  return Math.abs(direction[2]) > 1e-12 ? direction[1] / direction[2] : Infinity;
}

function projectPointToZ(point: Vector3, direction: Vector3, z: number): number {
  if (Math.abs(direction[2]) <= 1e-12) return point[1];
  return point[1] + ((z - point[2]) * direction[1]) / direction[2];
}

function surfaceIntersectionMaxT(
  surfIdx: number,
  origin: Vector3,
  direction: Vector3,
  zPos: number[],
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  aberrationT: number,
): number {
  if (direction[2] <= 1e-12) return 0;

  const vertexZ = zPos[surfIdx];
  const nextZ =
    surfIdx < L.N - 1 ? zPos[surfIdx + 1] : vertexZ + Math.abs(thick(surfIdx, focusT, zoomT, L, aberrationT));
  const surfaceSag = Math.abs(renderSag(L.S[surfIdx].sd, surfIdx, L));
  const boundZ = Math.max(vertexZ + surfaceSag + 1, nextZ, origin[2] + 1e-6);
  return Math.max(1e-6, (boundZ - origin[2]) / direction[2]);
}

function fallbackSurfacePoint(
  origin: Vector3,
  direction: Vector3,
  vertexZ: number,
  surfIdx: number,
  L: RuntimeLens,
): { point: Vector3; normal: Vector3 } | null {
  if (Math.abs(direction[2]) <= 1e-12) return null;
  const t = (vertexZ - origin[2]) / direction[2];
  if (!isFinite(t) || t < 0) return null;

  const y = origin[1] + direction[1] * t;
  const surfaceZ = vertexZ + renderSag(Math.abs(y), surfIdx, L);
  return {
    point: [0, y, surfaceZ],
    normal: surfaceNormalAtPoint(0, y, surfIdx, L),
  };
}

function surfaceNormalAtPoint(x: number, y: number, surfIdx: number, L: RuntimeLens): [number, number, number] {
  const radius = Math.hypot(x, y);
  if (radius < 1e-12) return [0, 0, 1];

  const radialSlope = sagSlope(radius, surfIdx, L);
  const invRadius = 1 / radius;
  const dzdx = radialSlope * x * invRadius;
  const dzdy = radialSlope * y * invRadius;
  const invMag = 1 / Math.hypot(dzdx, dzdy, 1);
  return [-dzdx * invMag, -dzdy * invMag, invMag];
}

function refractDirection(
  direction: [number, number, number],
  normal: [number, number, number],
  n: number,
  nn: number,
): [number, number, number] | null {
  const eta = n / nn;
  const cosIncident = direction[0] * normal[0] + direction[1] * normal[1] + direction[2] * normal[2];
  const tangentX = direction[0] - cosIncident * normal[0];
  const tangentY = direction[1] - cosIncident * normal[1];
  const tangentZ = direction[2] - cosIncident * normal[2];
  const tangentSq = tangentX * tangentX + tangentY * tangentY + tangentZ * tangentZ;
  const scaledTangentSq = eta * eta * tangentSq;
  if (scaledTangentSq > 1 + 1e-12) return null;

  const normalScale = Math.sqrt(Math.max(0, 1 - scaledTangentSq));
  const transmitted: [number, number, number] = [
    eta * tangentX + normalScale * normal[0],
    eta * tangentY + normalScale * normal[1],
    eta * tangentZ + normalScale * normal[2],
  ];
  const invMag = 1 / Math.hypot(transmitted[0], transmitted[1], transmitted[2]);
  return [transmitted[0] * invMag, transmitted[1] * invMag, transmitted[2] * invMag];
}

function traceSkewRayCore(
  x0: number,
  y0: number,
  ux0: number,
  uy0: number,
  focusT: number,
  zoomT: number,
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  channel: ChromaticChannel | undefined,
  aberrationT = 0,
): SkewRayTraceResult {
  let x = x0;
  let y = y0;
  let n = 1.0;
  let direction = normalizeDirection(ux0, uy0);
  let clipped = false;

  for (let i = 0; i < L.N; i++) {
    const { nd, sd } = L.S[i];
    const isStop = i === L.stopIdx;
    const clip = isStop && stopSD !== undefined ? stopSD : sd * L.clipMargin;
    const radius = Math.hypot(x, y);
    if (!clipped && exceedsTraceAperture(radius, clip)) {
      clipped = true;
      if (!ghost) break;
    }

    const nn = channel
      ? (L.indexByIdx?.[i]?.fn(channel) ?? wavelengthNd(nd, L.vdByIdx[i], channel))
      : nd === 1
        ? 1
        : nd;
    if (nn !== n) {
      const R = L.S[i].R;
      if (!(clipped && Math.abs(R) < FLAT_R_THRESHOLD && radius * radius > R * R)) {
        const normal = surfaceNormalAtPoint(x, y, i, L);
        const refracted = refractDirection(direction, normal, n, nn);
        if (refracted === null) {
          clipped = true;
          if (!ghost) break;
        } else {
          direction = refracted;
        }
      }
    }
    n = nn;

    if (i < L.N - 1) {
      const dz = thick(i, focusT, zoomT, L, aberrationT);
      const invDz = Math.abs(direction[2]) > 1e-12 ? 1 / direction[2] : 0;
      x += dz * direction[0] * invDz;
      y += dz * direction[1] * invDz;
    }
  }

  const invDz = Math.abs(direction[2]) > 1e-12 ? 1 / direction[2] : Infinity;
  return {
    x,
    y,
    ux: direction[0] * invDz,
    uy: direction[1] * invDz,
    clipped,
  };
}

export function traceSkewRay(
  x0: number,
  y0: number,
  ux0: number,
  uy0: number,
  focusT: number,
  zoomT: number,
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  aberrationT = 0,
): SkewRayTraceResult {
  return traceSkewRayCore(x0, y0, ux0, uy0, focusT, zoomT, stopSD, ghost, L, undefined, aberrationT);
}

export function traceSkewRayChromatic(
  x0: number,
  y0: number,
  ux0: number,
  uy0: number,
  focusT: number,
  zoomT: number,
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  channel: ChromaticChannel,
  aberrationT = 0,
): SkewRayTraceResult {
  return traceSkewRayCore(x0, y0, ux0, uy0, focusT, zoomT, stopSD, ghost, L, channel, aberrationT);
}

export function skewImagePlaneIntercept(
  x: number,
  y: number,
  ux: number,
  uy: number,
  lastSurfZ: number,
  imagePlaneZ: number,
): SkewImagePlaneIntercept | null {
  const dz = imagePlaneZ - lastSurfZ;
  const imagePoint = {
    x: x + ux * dz,
    y: y + uy * dz,
  };
  return isFinite(imagePoint.x) && isFinite(imagePoint.y) ? imagePoint : null;
}

export function sampleOrthogonalPupilFan(
  sampleCount: number = DEFAULT_ORTHOGONAL_PUPIL_FAN_SAMPLE_COUNT,
  orientation: "tangential" | "sagittal",
): OrthogonalPupilSample[] {
  const roundedCount = Math.max(1, Math.round(sampleCount));
  const oddCount = roundedCount % 2 === 0 ? roundedCount + 1 : roundedCount;

  return Array.from({ length: oddCount }, (_, index) => {
    const pupilFraction = oddCount === 1 ? 0 : -1 + (2 * index) / (oddCount - 1);
    return {
      index,
      pupilFraction,
      xFraction: orientation === "sagittal" ? pupilFraction : 0,
      yFraction: orientation === "tangential" ? pupilFraction : 0,
    };
  });
}

export function sampleCircularPupil(
  ringSamples: readonly number[] = DEFAULT_CIRCULAR_PUPIL_RING_SAMPLES,
): CircularPupilSample[] {
  const normalizedRingSamples = ringSamples
    .map((count) => Math.max(1, Math.round(count)))
    .filter((count) => Number.isFinite(count) && count > 0);
  if (normalizedRingSamples.length === 0) return [];

  const totalSamples = normalizedRingSamples.reduce((sum, count) => sum + count, 0);
  const weight = 1 / totalSamples;
  const samples: CircularPupilSample[] = [];
  let cumulative = 0;

  normalizedRingSamples.forEach((count, ringIndex) => {
    const innerRadiusSq = cumulative / totalSamples;
    const outerRadiusSq = (cumulative + count) / totalSamples;
    const radiusFraction = count === 1 && ringIndex === 0 ? 0 : Math.sqrt((innerRadiusSq + outerRadiusSq) / 2);
    const phaseOffset = count === 1 ? 0 : ((ringIndex % 2) * Math.PI) / count;

    for (let sampleIndex = 0; sampleIndex < count; sampleIndex++) {
      const azimuthRad = count === 1 ? 0 : phaseOffset + (2 * Math.PI * sampleIndex) / count;
      samples.push({
        index: samples.length,
        xFraction: radiusFraction * Math.cos(azimuthRad),
        yFraction: radiusFraction * Math.sin(azimuthRad),
        radiusFraction,
        azimuthRad,
        weight,
      });
    }

    cumulative += count;
  });

  return samples;
}

export function traceChiefRelativeSkewRay(
  xFraction: number,
  yFraction: number,
  chiefLaunchHeight: number,
  fieldSlope: number,
  entrancePupilSemiDiameter: number,
  focusT: number,
  zoomT: number,
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  aberrationT = 0,
): SkewRayTraceResult {
  return traceSkewRay(
    xFraction * entrancePupilSemiDiameter,
    chiefLaunchHeight + yFraction * entrancePupilSemiDiameter,
    0,
    fieldSlope,
    focusT,
    zoomT,
    stopSD,
    ghost,
    L,
    aberrationT,
  );
}

export function traceChiefRelativeSkewRayChromatic(
  xFraction: number,
  yFraction: number,
  chiefLaunchHeight: number,
  fieldSlope: number,
  entrancePupilSemiDiameter: number,
  focusT: number,
  zoomT: number,
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  channel: ChromaticChannel,
  aberrationT = 0,
): SkewRayTraceResult {
  return traceSkewRayChromatic(
    xFraction * entrancePupilSemiDiameter,
    chiefLaunchHeight + yFraction * entrancePupilSemiDiameter,
    0,
    fieldSlope,
    focusT,
    zoomT,
    stopSD,
    ghost,
    L,
    channel,
    aberrationT,
  );
}

export function traceRay(
  y0: number,
  u0: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  aberrationT = 0,
  options?: RayTraceOptions,
): RayTraceResult {
  const mode = resolveSurfaceTraceMode(L, options?.mode);
  return mode === "exact"
    ? traceRayExactCore(y0, u0, zPos, focusT, zoomT, stopSD, ghost, L, undefined, aberrationT)
    : traceRayLegacyCore(y0, u0, zPos, focusT, zoomT, stopSD, ghost, L, undefined, aberrationT);
}

export function traceRayChromatic(
  y0: number,
  u0: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  channel: ChromaticChannel,
  aberrationT = 0,
  options?: RayTraceOptions,
): RayTraceResult {
  const mode = resolveSurfaceTraceMode(L, options?.mode);
  return mode === "exact"
    ? traceRayExactCore(y0, u0, zPos, focusT, zoomT, stopSD, ghost, L, channel, aberrationT)
    : traceRayLegacyCore(y0, u0, zPos, focusT, zoomT, stopSD, ghost, L, channel, aberrationT);
}

interface MarginalRayData {
  y: number;
  u: number;
  clipped: boolean;
}

function spanOf(values: number[]): number {
  if (values.length < 2) return 0;
  return Math.max(...values) - Math.min(...values);
}

export function computeChromaticSpread(
  marginalRays: Partial<Record<ChromaticChannel, MarginalRayData>>,
  imgZ: number,
  lastSurfZ: number,
): ChromaticSpread {
  const intercepts: Partial<Record<ChromaticChannel, number>> = {};
  const imgHeights: Partial<Record<ChromaticChannel, number>> = {};
  for (const ch of ["R", "G", "B", "V"] as ChromaticChannel[]) {
    const ray = marginalRays[ch];
    if (!ray || ray.clipped) continue;
    if (Math.abs(ray.u) > 1e-15) {
      intercepts[ch] = lastSurfZ - ray.y / ray.u;
    }
    const dz = imgZ - lastSurfZ;
    imgHeights[ch] = ray.y + dz * ray.u;
  }

  const lcaMm = spanOf(Object.values(intercepts));
  const tcaMm = spanOf(Object.values(imgHeights));
  return { lcaMm, tcaMm, intercepts, imgHeights };
}

export function traceToImage(
  y0: number,
  u0: number,
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  aberrationT = 0,
): number {
  const S = stateSurfaces(focusT, zoomT, L, aberrationT);
  const trace = traceSurfacesParaxial(S, y0, u0);
  return trace.y + S[S.length - 1].d * trace.u;
}
