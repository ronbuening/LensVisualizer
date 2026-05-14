import type { ChromaticChannel, ChromaticSpread, RayTraceResult, RuntimeLens } from "../types/optics.js";
import type { SurfaceTraceMode } from "./traceMode.js";
import { FLAT_R_THRESHOLD } from "./internal/surfaceMath.js";
import {
  normalizeDirection,
  refractDirection,
  traceExactSurfaceStack,
  type ExactSurfaceTraceHit,
} from "./internal/exactSurfaceTrace.js";
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
  _aberrationT = 0,
): RayTraceResult {
  const pts: number[][] = [];
  const ghostPts: number[][] = [];
  const rayLead = L.rayLead ?? 0;
  const leadZ = zPos[0] - rayLead;
  const leadY = y0 - u0 * rayLead;
  pts.push([leadZ, leadY]);

  const result = traceExactSurfaceStack(
    L,
    { y0, uy0: u0 },
    {
      zPos,
      checkSemiDiameter: true,
      stopSemiDiameter: stopSD,
      ghost,
      stopOnClip: true,
      leadDistance: rayLead,
      indexAtSurface: channel
        ? (i, nd) => L.indexByIdx?.[i]?.fn(channel) ?? wavelengthNd(nd, L.vdByIdx[i], channel)
        : undefined,
    },
  );

  appendExactTracePoints(result.hits, pts, ghostPts, ghost);
  return { pts, ghostPts, y: result.y, u: result.uy, clipped: result.clipped };
}

function exceedsTraceAperture(radius: number, semiDiameter: number): boolean {
  const tolerance = Math.max(TRACE_CLIP_ABS_TOLERANCE, Math.abs(semiDiameter) * 1e-12);
  return radius > semiDiameter + tolerance;
}

function appendExactTracePoints(
  hits: readonly ExactSurfaceTraceHit[],
  pts: number[][],
  ghostPts: number[][],
  ghost: boolean,
): void {
  for (const hit of hits) {
    const pt = [hit.point[2], hit.point[1]];
    if (hit.clipped) {
      if (ghost) ghostPts.push(pt);
    } else {
      pts.push(pt);
    }
  }
}

function surfaceZPositions(focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0): number[] {
  const z = [0];
  for (let i = 0; i < L.N - 1; i++) z.push(z[i] + thick(i, focusT, zoomT, L, aberrationT));
  return z;
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

function traceSkewRayLegacyCore(
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

function traceSkewRayExactCore(
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
  const zPos = surfaceZPositions(focusT, zoomT, L, aberrationT);
  const result = traceExactSurfaceStack(
    L,
    { x0, y0, ux0, uy0 },
    {
      zPos,
      checkSemiDiameter: true,
      stopSemiDiameter: stopSD,
      ghost,
      stopOnClip: true,
      leadDistance: L.rayLead ?? 0,
      indexAtSurface: channel
        ? (i, nd) => L.indexByIdx?.[i]?.fn(channel) ?? wavelengthNd(nd, L.vdByIdx[i], channel)
        : undefined,
    },
  );

  return {
    x: result.x,
    y: result.y,
    ux: result.ux,
    uy: result.uy,
    clipped: result.clipped,
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
  options?: RayTraceOptions,
): SkewRayTraceResult {
  const mode = resolveSurfaceTraceMode(L, options?.mode);
  return mode === "exact"
    ? traceSkewRayExactCore(x0, y0, ux0, uy0, focusT, zoomT, stopSD, ghost, L, undefined, aberrationT)
    : traceSkewRayLegacyCore(x0, y0, ux0, uy0, focusT, zoomT, stopSD, ghost, L, undefined, aberrationT);
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
  options?: RayTraceOptions,
): SkewRayTraceResult {
  const mode = resolveSurfaceTraceMode(L, options?.mode);
  return mode === "exact"
    ? traceSkewRayExactCore(x0, y0, ux0, uy0, focusT, zoomT, stopSD, ghost, L, channel, aberrationT)
    : traceSkewRayLegacyCore(x0, y0, ux0, uy0, focusT, zoomT, stopSD, ghost, L, channel, aberrationT);
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
  options?: RayTraceOptions,
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
    options,
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
  options?: RayTraceOptions,
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
    options,
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
