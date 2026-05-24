import type { ChromaticChannel, ChromaticSpread, RayTraceResult, RuntimeLens } from "../types/optics.js";
import {
  traceExactSurfaceStack,
  traceExactSurfaceStackVector,
  type ExactSurfaceTraceHit,
  type Vector3,
} from "./internal/exactSurfaceTrace.js";
import { traceSurfacesParaxial } from "./internal/traceSurfaces.js";
import { stateSurfaces, thick } from "./layout.js";

export interface SkewRayTraceResult {
  x: number;
  y: number;
  ux: number;
  uy: number;
  clipped: boolean;
}

export interface VectorRayTraceInput {
  origin: Vector3;
  direction: Vector3;
  launchBoundT?: number;
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
  void focusT;
  void zoomT;
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

function appendExactTracePoints(
  hits: readonly ExactSurfaceTraceHit[],
  pts: number[][],
  ghostPts: number[][],
  ghost: boolean,
): void {
  for (const hit of hits) {
    const pt = [hit.point[2], hit.point[1]];
    if (!isFinite(pt[0]) || !isFinite(pt[1])) continue;
    if (hit.clipped) {
      if (ghost) ghostPts.push(pt);
    } else {
      pts.push(pt);
    }
  }
}

function vectorLeadPoint(
  input: VectorRayTraceInput,
  firstHit: ExactSurfaceTraceHit | undefined,
  leadDistance: number,
): [number, number] {
  const reference = firstHit?.point ?? input.origin;
  const lead = Math.max(0, leadDistance);
  const z = reference[2] - input.direction[2] * lead;
  const y = reference[1] - input.direction[1] * lead;
  return isFinite(z) && isFinite(y) ? [z, y] : [input.origin[2], input.origin[1]];
}

function surfaceZPositions(focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0): number[] {
  const z = [0];
  for (let i = 0; i < L.N - 1; i++) z.push(z[i] + thick(i, focusT, zoomT, L, aberrationT));
  return z;
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

function traceSkewRayVectorExactCore(
  input: VectorRayTraceInput,
  zPos: number[],
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  channel: ChromaticChannel | undefined,
): SkewRayTraceResult {
  const result = traceExactSurfaceStackVector(
    L,
    { origin: input.origin, direction: input.direction },
    {
      zPos,
      checkSemiDiameter: true,
      stopSemiDiameter: stopSD,
      ghost,
      stopOnClip: true,
      launchBoundT: input.launchBoundT,
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
): SkewRayTraceResult {
  return traceSkewRayExactCore(x0, y0, ux0, uy0, focusT, zoomT, stopSD, ghost, L, undefined, aberrationT);
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
  return traceSkewRayExactCore(x0, y0, ux0, uy0, focusT, zoomT, stopSD, ghost, L, channel, aberrationT);
}

export function traceSkewRayVector(
  input: VectorRayTraceInput,
  zPos: number[],
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
): SkewRayTraceResult {
  return traceSkewRayVectorExactCore(input, zPos, stopSD, ghost, L, undefined);
}

export function traceSkewRayVectorChromatic(
  input: VectorRayTraceInput,
  zPos: number[],
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  channel: ChromaticChannel,
): SkewRayTraceResult {
  return traceSkewRayVectorExactCore(input, zPos, stopSD, ghost, L, channel);
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
): RayTraceResult {
  return traceRayExactCore(y0, u0, zPos, focusT, zoomT, stopSD, ghost, L, undefined, aberrationT);
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
): RayTraceResult {
  return traceRayExactCore(y0, u0, zPos, focusT, zoomT, stopSD, ghost, L, channel, aberrationT);
}

function traceRayVectorExactCore(
  input: VectorRayTraceInput,
  zPos: number[],
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  channel: ChromaticChannel | undefined,
): RayTraceResult {
  const result = traceExactSurfaceStackVector(
    L,
    { origin: input.origin, direction: input.direction },
    {
      zPos,
      checkSemiDiameter: true,
      stopSemiDiameter: stopSD,
      ghost,
      stopOnClip: true,
      launchBoundT: input.launchBoundT,
      indexAtSurface: channel
        ? (i, nd) => L.indexByIdx?.[i]?.fn(channel) ?? wavelengthNd(nd, L.vdByIdx[i], channel)
        : undefined,
    },
  );

  const pts: number[][] = [];
  const ghostPts: number[][] = [];
  const lead = L.rayLead ?? 0;
  pts.push(vectorLeadPoint(input, result.hits[0], lead));
  appendExactTracePoints(result.hits, pts, ghostPts, ghost);
  return { pts, ghostPts, y: result.y, u: result.uy, clipped: result.clipped };
}

export function traceRayVector(
  input: VectorRayTraceInput,
  zPos: number[],
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
): RayTraceResult {
  return traceRayVectorExactCore(input, zPos, stopSD, ghost, L, undefined);
}

export function traceRayVectorChromatic(
  input: VectorRayTraceInput,
  zPos: number[],
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  channel: ChromaticChannel,
): RayTraceResult {
  return traceRayVectorExactCore(input, zPos, stopSD, ghost, L, channel);
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
  const trace = traceSurfacesParaxial(S, y0, u0, { traceSequence: L.traceSequence ?? null });
  return trace.y + S[S.length - 1].d * trace.u;
}
