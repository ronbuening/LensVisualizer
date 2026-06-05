/**
 * Runtime ray-trace facade — legacy meridional, skew, vector, and chromatic trace helpers.
 *
 * Converts RuntimeLens calls into prepared engine traces while keeping the public trace API used
 * by diagram layers and analysis modules stable.
 */

import type { ChromaticChannel, ChromaticSpread, RayTraceResult, RuntimeLens } from "../types/optics.js";
import {
  traceExactSurfaceStack,
  traceExactSurfaceStackVector,
  type ExactSurfaceTraceHit,
  type Vector3,
} from "./internal/exactSurfaceTrace.js";
import { traceSurfacesParaxial } from "./internal/traceSurfaces.js";
import { stateSurfaces, thick } from "./layout.js";

/** Public skew-ray result at the return/image plane. */
export interface SkewRayTraceResult {
  x: number;
  y: number;
  ux: number;
  uy: number;
  clipped: boolean;
}

/** Vector-native ray launch input for fisheye and wide-field tracing. */
export interface VectorRayTraceInput {
  origin: Vector3;
  direction: Vector3;
  launchBoundT?: number;
}

/** Image-plane intercept for a skew ray in sagittal/meridional millimeters. */
export interface SkewImagePlaneIntercept {
  x: number;
  y: number;
}

/** One sample in a tangential or sagittal orthogonal pupil fan. */
export interface OrthogonalPupilSample {
  index: number;
  pupilFraction: number;
  xFraction: number;
  yFraction: number;
}

/** One area-weighted sample in a circular pupil pattern. */
export interface CircularPupilSample {
  index: number;
  xFraction: number;
  yFraction: number;
  radiusFraction: number;
  azimuthRad: number;
  weight: number;
}

/** Default odd sample count for tangential/sagittal pupil fans. */
export const DEFAULT_ORTHOGONAL_PUPIL_FAN_SAMPLE_COUNT = 51;
/** Default circular point-cloud ring population from center to rim. */
export const DEFAULT_CIRCULAR_PUPIL_RING_SAMPLES = [1, 6, 12, 18, 24] as const;

/**
 * Approximate refractive index for a chromatic channel from nd/Vd data.
 *
 * Used as the fallback when no Sellmeier or patent line-index data exists. The
 * violet channel uses the same partial-dispersion approximation as the chromatic
 * index resolver.
 *
 * @param nd - d-line refractive index
 * @param vd - Abbe Vd number, if available
 * @param channel - chromatic channel to evaluate
 * @returns estimated channel refractive index
 */
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
  appendImagePlanePoint(result, pts);
  return {
    pts,
    ghostPts,
    y: result.y,
    u: result.uy,
    clipped: result.clipped,
    reachedImagePlane: result.reachedImagePlane,
    diagnostics: result.diagnostics,
  };
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

function appendImagePlanePoint(
  result: { reachedImagePlane?: boolean; terminalPoint: Vector3; clipped: boolean },
  pts: number[][],
): void {
  if (!result.reachedImagePlane || result.clipped) return;
  const point = [result.terminalPoint[2], result.terminalPoint[1]];
  if (!isFinite(point[0]) || !isFinite(point[1])) return;
  const last = pts[pts.length - 1];
  if (last && Math.hypot(last[0] - point[0], last[1] - point[1]) < 1e-9) return;
  pts.push(point);
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

/**
 * Trace a skew ray through the exact RuntimeLens surface stack.
 *
 * @param x0 - sagittal launch coordinate in mm
 * @param y0 - meridional launch coordinate in mm
 * @param ux0 - sagittal slope dx/dz
 * @param uy0 - meridional slope dy/dz
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param stopSD - current physical stop semi-diameter in mm
 * @param ghost - whether clipped hits should be retained
 * @param L - runtime lens object
 * @param aberrationT - normalized aberration spacing slider
 * @returns final skew-ray position, slopes, and clipping state
 */
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

/**
 * Trace a chromatic skew ray through the exact RuntimeLens surface stack.
 *
 * @param x0 - sagittal launch coordinate in mm
 * @param y0 - meridional launch coordinate in mm
 * @param ux0 - sagittal slope dx/dz
 * @param uy0 - meridional slope dy/dz
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param stopSD - current physical stop semi-diameter in mm
 * @param ghost - whether clipped hits should be retained
 * @param L - runtime lens object
 * @param channel - chromatic channel selecting per-surface indices
 * @param aberrationT - normalized aberration spacing slider
 * @returns final skew-ray position, slopes, and clipping state
 */
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

/**
 * Trace a vector-launched skew ray.
 *
 * @param input - vector origin/direction and optional launch bound
 * @param zPos - current surface vertex positions in mm
 * @param stopSD - current physical stop semi-diameter in mm
 * @param ghost - whether clipped hits should be retained
 * @param L - runtime lens object
 * @returns final skew-ray position, slopes, and clipping state
 */
export function traceSkewRayVector(
  input: VectorRayTraceInput,
  zPos: number[],
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
): SkewRayTraceResult {
  return traceSkewRayVectorExactCore(input, zPos, stopSD, ghost, L, undefined);
}

/**
 * Trace a chromatic vector-launched skew ray.
 *
 * @param input - vector origin/direction and optional launch bound
 * @param zPos - current surface vertex positions in mm
 * @param stopSD - current physical stop semi-diameter in mm
 * @param ghost - whether clipped hits should be retained
 * @param L - runtime lens object
 * @param channel - chromatic channel selecting per-surface indices
 * @returns final skew-ray position, slopes, and clipping state
 */
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

/**
 * Project a skew ray from the last surface to the image plane.
 *
 * @param x - sagittal coordinate at the last surface in mm
 * @param y - meridional coordinate at the last surface in mm
 * @param ux - sagittal slope dx/dz
 * @param uy - meridional slope dy/dz
 * @param lastSurfZ - last surface vertex z coordinate in mm
 * @param imagePlaneZ - image-plane z coordinate in mm
 * @returns image-plane intercept, or null for non-finite projection
 */
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

/**
 * Build an odd tangential or sagittal pupil fan.
 *
 * @param sampleCount - requested number of pupil samples
 * @param orientation - fan direction across the pupil
 * @returns samples with normalized pupil fractions in `[-1, 1]`
 */
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

/**
 * Build an area-weighted circular pupil sample pattern.
 *
 * Ring populations approximate equal-area annuli. Weights sum to one when all
 * samples survive clipping.
 *
 * @param ringSamples - number of angular samples per radial ring
 * @returns circular pupil samples with normalized x/y fractions and weights
 */
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

/**
 * Trace a skew ray launched relative to the solved chief ray.
 *
 * @param xFraction - sagittal pupil fraction
 * @param yFraction - meridional pupil fraction
 * @param chiefLaunchHeight - chief-ray launch height in mm
 * @param fieldSlope - field slope dy/dz
 * @param entrancePupilSemiDiameter - entrance-pupil semi-diameter in mm
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param stopSD - current physical stop semi-diameter in mm
 * @param ghost - whether clipped hits should be retained
 * @param L - runtime lens object
 * @param aberrationT - normalized aberration spacing slider
 * @returns final skew ray relative to the selected off-axis field
 */
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

/**
 * Trace a chromatic skew ray launched relative to the solved chief ray.
 *
 * @param xFraction - sagittal pupil fraction
 * @param yFraction - meridional pupil fraction
 * @param chiefLaunchHeight - chief-ray launch height in mm
 * @param fieldSlope - field slope dy/dz
 * @param entrancePupilSemiDiameter - entrance-pupil semi-diameter in mm
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param stopSD - current physical stop semi-diameter in mm
 * @param ghost - whether clipped hits should be retained
 * @param L - runtime lens object
 * @param channel - chromatic channel selecting per-surface indices
 * @param aberrationT - normalized aberration spacing slider
 * @returns final skew ray relative to the selected off-axis field
 */
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

/**
 * Trace a meridional ray through the exact RuntimeLens surface stack.
 *
 * @param y0 - launch height in mm
 * @param u0 - meridional slope dy/dz
 * @param zPos - current surface vertex positions in mm
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param stopSD - current physical stop semi-diameter in mm
 * @param ghost - whether clipped hits should be retained as ghost points
 * @param L - runtime lens object
 * @param aberrationT - normalized aberration spacing slider
 * @returns public meridional ray trace result
 */
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

/**
 * Trace a chromatic meridional ray through the exact RuntimeLens surface stack.
 *
 * @param y0 - launch height in mm
 * @param u0 - meridional slope dy/dz
 * @param zPos - current surface vertex positions in mm
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param stopSD - current physical stop semi-diameter in mm
 * @param ghost - whether clipped hits should be retained as ghost points
 * @param L - runtime lens object
 * @param channel - chromatic channel selecting per-surface indices
 * @param aberrationT - normalized aberration spacing slider
 * @returns public meridional ray trace result
 */
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
  appendImagePlanePoint(result, pts);
  return {
    pts,
    ghostPts,
    y: result.y,
    u: result.uy,
    clipped: result.clipped,
    reachedImagePlane: result.reachedImagePlane,
    diagnostics: result.diagnostics,
  };
}

/**
 * Trace a vector-launched meridional ray.
 *
 * @param input - vector origin/direction and optional launch bound
 * @param zPos - current surface vertex positions in mm
 * @param stopSD - current physical stop semi-diameter in mm
 * @param ghost - whether clipped hits should be retained as ghost points
 * @param L - runtime lens object
 * @returns public meridional ray trace result
 */
export function traceRayVector(
  input: VectorRayTraceInput,
  zPos: number[],
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
): RayTraceResult {
  return traceRayVectorExactCore(input, zPos, stopSD, ghost, L, undefined);
}

/**
 * Trace a chromatic vector-launched meridional ray.
 *
 * @param input - vector origin/direction and optional launch bound
 * @param zPos - current surface vertex positions in mm
 * @param stopSD - current physical stop semi-diameter in mm
 * @param ghost - whether clipped hits should be retained as ghost points
 * @param L - runtime lens object
 * @param channel - chromatic channel selecting per-surface indices
 * @returns public meridional ray trace result
 */
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
  z?: number;
}

function spanOf(values: number[]): number {
  if (values.length < 2) return 0;
  return Math.max(...values) - Math.min(...values);
}

/**
 * Measure longitudinal and transverse chromatic spread from marginal rays.
 *
 * Longitudinal spread is the span of axial intercepts; transverse spread is the
 * span of image heights at `imgZ`. Clipped channels are omitted.
 *
 * @param marginalRays - per-channel marginal ray state after the last surface
 * @param imgZ - image-plane z coordinate in mm
 * @param lastSurfZ - final surface vertex z coordinate in mm
 * @returns LCA/TCA spans plus per-channel intercepts and image heights in mm
 */
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
    const rayZ = Number.isFinite(ray.z) ? ray.z! : lastSurfZ;
    if (Math.abs(ray.u) > 1e-15) {
      intercepts[ch] = rayZ - ray.y / ray.u;
    }
    const dz = imgZ - rayZ;
    imgHeights[ch] = ray.y + dz * ray.u;
  }

  const lcaMm = spanOf(Object.values(intercepts));
  const tcaMm = spanOf(Object.values(imgHeights));
  return { lcaMm, tcaMm, intercepts, imgHeights };
}

/**
 * Trace a paraxial ray to the current image plane.
 *
 * @param y0 - launch height in mm
 * @param u0 - paraxial slope
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param L - runtime lens object
 * @param aberrationT - normalized aberration spacing slider
 * @returns paraxial image height in mm
 */
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
