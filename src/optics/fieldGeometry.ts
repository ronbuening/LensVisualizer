import type { ParaxialTraceResult, RayTraceResult, RuntimeLens } from "../types/optics.js";
import { resolveImageFormatMetadata } from "../utils/catalog/lensTaxonomy.js";
import { stateSurfaces, thick, FOCUS_INFINITY_THRESHOLD } from "./layout.js";
import {
  traceSurfacesParaxial,
  traceSurfacesVertexReal,
  type RealSurfaceTraceOptions,
  type RealSurfaceTraceResult,
} from "./internal/traceSurfaces.js";
import { traceExactSurfaceStack } from "./internal/exactSurfaceTrace.js";
import { traceRay, type RayTraceOptions } from "./rayTrace.js";
import { resolveSurfaceTraceMode } from "./traceMode.js";

const CONJUGATE_REFERENCE_PUPIL_FRACTION = 0.1;

export interface FieldGeometryState {
  halfFieldDeg: number;
  yRatio: number;
  b: number;
  epRatio: number;
}

export interface EntrancePupilState {
  epSD: number;
  yRatio: number;
  b: number;
  epRatio: number;
}

export function computeFieldGeometryAtState(
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  aberrationT = 0,
  options?: RayTraceOptions,
): FieldGeometryState {
  const S = stateSurfaces(focusT, zoomT, L, aberrationT);
  const stopIdx = L.stopIdx;
  const delta = 1e-4;

  const paraxMarg = traceSurfacesParaxial(S, 1, 0, { stopAt: stopIdx });
  const paraxChief = traceSurfacesParaxial(S, 0, 1, { stopAt: stopIdx });
  const realMarg = traceStateSurfacesReal(S, L, delta, 0, { stopAt: stopIdx }, options);
  const realChief = traceStateSurfacesReal(S, L, 0, delta, { stopAt: stopIdx }, options);

  const yRatio = isFinite(realMarg.y) ? realMarg.y / delta : paraxMarg.y;
  const b = isFinite(realChief.y) ? realChief.y / delta : paraxChief.y;
  const epRatio = Math.abs(yRatio) > 1e-9 ? b / yRatio : 0;

  const hA = traceSurfacesParaxial(S, 1, 0, { skipLastTransfer: true, recordHeights: true }).heights!;
  const hB = traceSurfacesParaxial(S, 0, 1, { skipLastTransfer: true, recordHeights: true }).heights!;
  const r = Math.abs(hA[stopIdx]) > 1e-15 ? hB[stopIdx] / hA[stopIdx] : 0;
  let minU = Infinity;
  for (let i = 0; i < L.N; i++) {
    if (i === stopIdx) continue;
    const coeff = Math.abs(hB[i] - r * hA[i]);
    if (coeff > 1e-8) {
      const uMax = S[i].sd / coeff;
      if (uMax < minU) minU = uMax;
    }
  }
  let halfFieldDeg = (Math.atan(minU) * 180) / Math.PI;

  const testChief = (deg: number): boolean => {
    const uField = -Math.tan((deg * Math.PI) / 180);
    const yChiefIn = -epRatio * uField;
    const trace = traceStateSurfacesReal(S, L, yChiefIn, uField, { checkSemiDiameter: true }, options);
    return isFinite(trace.y) && !trace.clipped;
  };

  if (isFinite(halfFieldDeg) && halfFieldDeg > 0 && !testChief(halfFieldDeg)) {
    let lo = 0;
    let hi = halfFieldDeg;
    for (let i = 0; i < 20; i++) {
      const mid = (lo + hi) / 2;
      if (testChief(mid)) lo = mid;
      else hi = mid;
    }
    halfFieldDeg = lo;
  }

  return { halfFieldDeg, yRatio, b, epRatio };
}

export function computeAnalysisFieldGeometryAtState(
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  aberrationT = 0,
  options?: RayTraceOptions,
): FieldGeometryState {
  const geometry = computeFieldGeometryAtState(focusT, zoomT, L, aberrationT, options);
  if (!isFinite(geometry.halfFieldDeg) || geometry.halfFieldDeg <= 0 || L.N < 1) return geometry;

  const format = resolveImageFormatMetadata(L.data?.imageFormat);
  const maxImageHeight = format.diagonalMm / 2;
  if (!isFinite(maxImageHeight) || maxImageHeight <= 0) return geometry;

  const zPos = [0];
  for (let i = 0; i < L.N - 1; i++) zPos.push(zPos[i] + thick(i, focusT, zoomT, L, aberrationT));

  const edgeImageHeight = chiefRayImageHeightAccurate(
    geometry.halfFieldDeg,
    zPos,
    focusT,
    zoomT,
    L,
    geometry,
    aberrationT,
    options,
  );
  if (!isFinite(edgeImageHeight) || Math.abs(edgeImageHeight) <= maxImageHeight + 1e-9) return geometry;

  const formatHalfFieldDeg = solveFieldAngleForImageHeightAccurate(
    maxImageHeight,
    zPos,
    focusT,
    zoomT,
    L,
    geometry,
    aberrationT,
    options,
  );
  if (formatHalfFieldDeg === null || !isFinite(formatHalfFieldDeg)) return geometry;

  return {
    ...geometry,
    halfFieldDeg: Math.min(geometry.halfFieldDeg, Math.max(0, formatHalfFieldDeg)),
  };
}

export function traceChiefRayAtAngle(
  fieldAngleDeg: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry?: FieldGeometryState,
  aberrationT = 0,
  options?: RayTraceOptions,
): RayTraceResult {
  const geom = geometry ?? computeFieldGeometryAtState(focusT, zoomT, L, aberrationT, options);
  const thetaRad = (fieldAngleDeg * Math.PI) / 180;
  const uField = -Math.tan(thetaRad);
  const yChief = -geom.epRatio * uField;
  return traceRay(yChief, uField, zPos, focusT, zoomT, undefined, true, L, aberrationT, options);
}

export function traceParaxialRay(
  y0: number,
  u0: number,
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
): Pick<ParaxialTraceResult, "y" | "u"> {
  const S = stateSurfaces(focusT, zoomT, L);
  const result = traceSurfacesParaxial(S, y0, u0, { skipLastTransfer: true });
  return { y: result.y, u: result.u };
}

export function chiefRayImageHeight(
  fieldAngleDeg: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry?: FieldGeometryState,
  aberrationT = 0,
  options?: RayTraceOptions,
): number {
  const trace = traceChiefRayAtAngle(fieldAngleDeg, zPos, focusT, zoomT, L, geometry, aberrationT, options);
  return trace.y + trace.u * thick(L.N - 1, focusT, zoomT, L, aberrationT);
}

export function solveChiefRayLaunchHeight(
  fieldAngleDeg: number,
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry?: FieldGeometryState,
  aberrationT = 0,
  options?: RayTraceOptions,
): number {
  const geom = geometry ?? computeFieldGeometryAtState(focusT, zoomT, L, aberrationT, options);
  const thetaRad = (fieldAngleDeg * Math.PI) / 180;
  const uField = -Math.tan(thetaRad);
  const paraxialYChief = -geom.epRatio * uField;

  if (Math.abs(fieldAngleDeg) < 1) return paraxialYChief;

  const S = stateSurfaces(focusT, zoomT, L, aberrationT);
  const stopIdx = L.stopIdx;

  const heightAtStop = (yLaunch: number): number | null => {
    const result = traceStateSurfacesReal(S, L, yLaunch, uField, { stopAt: stopIdx }, options);
    return isFinite(result.y) ? result.y : null;
  };

  const bracketHalf = Math.max(Math.abs(paraxialYChief) * 0.5, 0.5);
  let lo = paraxialYChief - bracketHalf;
  let hi = paraxialYChief + bracketHalf;

  const yLo = heightAtStop(lo);
  const yHi = heightAtStop(hi);
  if (yLo === null || yHi === null) return paraxialYChief;
  if (yLo * yHi > 0) return paraxialYChief;

  for (let i = 0; i < 30; i++) {
    const mid = (lo + hi) / 2;
    const yMid = heightAtStop(mid);
    if (yMid === null) return paraxialYChief;
    if (Math.abs(yMid) < 1e-6) return mid;
    if (yMid < 0 === yLo < 0) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

export function chiefRayImageHeightAccurate(
  fieldAngleDeg: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry?: FieldGeometryState,
  aberrationT = 0,
  options?: RayTraceOptions,
): number {
  const thetaRad = (fieldAngleDeg * Math.PI) / 180;
  const uField = -Math.tan(thetaRad);
  const yChief = solveChiefRayLaunchHeight(fieldAngleDeg, focusT, zoomT, L, geometry, aberrationT, options);
  const trace = traceRay(yChief, uField, zPos, focusT, zoomT, undefined, true, L, aberrationT, options);
  return trace.y + trace.u * thick(L.N - 1, focusT, zoomT, L, aberrationT);
}

export function solveFieldAngleForImageHeightAccurate(
  targetImageHeight: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry?: FieldGeometryState,
  aberrationT = 0,
  options?: RayTraceOptions,
): number | null {
  if (!isFinite(targetImageHeight) || Math.abs(targetImageHeight) < 1e-12) return 0;
  const geom = geometry ?? computeFieldGeometryAtState(focusT, zoomT, L, aberrationT, options);
  if (!isFinite(geom.halfFieldDeg) || geom.halfFieldDeg <= 0) return null;

  const target = -Math.abs(targetImageHeight);
  const imageHeightAt = (deg: number) =>
    chiefRayImageHeightAccurate(deg, zPos, focusT, zoomT, L, geom, aberrationT, options);

  const bracketSegments = Math.max(Math.ceil(geom.halfFieldDeg), 20);
  const segmentAngles: number[] = [];
  const segmentHeights: number[] = [];
  for (let i = 0; i <= bracketSegments; i++) {
    const angleDeg = (i / bracketSegments) * geom.halfFieldDeg;
    const height = imageHeightAt(angleDeg);
    if (!isFinite(height)) continue;
    segmentAngles.push(angleDeg);
    segmentHeights.push(height);
  }

  let lo = -1;
  let hi = -1;
  for (let i = 0; i < segmentAngles.length - 1; i++) {
    const hLo = segmentHeights[i];
    const hHi = segmentHeights[i + 1];
    if ((hLo >= target && hHi <= target) || (hLo <= target && hHi >= target)) {
      lo = i;
      hi = i + 1;
      break;
    }
  }
  if (lo < 0) return null;

  let loAngle = segmentAngles[lo];
  let hiAngle = segmentAngles[hi];
  let loHeight = segmentHeights[lo];

  for (let i = 0; i < 40; i++) {
    const mid = (loAngle + hiAngle) / 2;
    const yMid = imageHeightAt(mid);
    if (!isFinite(yMid)) return null;
    if (Math.abs(yMid - target) < 1e-4) return mid;
    if ((loHeight >= target && yMid <= target) || (loHeight <= target && yMid >= target)) {
      hiAngle = mid;
    } else {
      loAngle = mid;
      loHeight = yMid;
    }
  }
  return (loAngle + hiAngle) / 2;
}

export function solveFieldAngleForImageHeight(
  targetImageHeight: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry?: FieldGeometryState,
  options?: RayTraceOptions,
): number | null {
  if (!isFinite(targetImageHeight) || Math.abs(targetImageHeight) < 1e-12) return 0;
  const geom = geometry ?? computeFieldGeometryAtState(focusT, zoomT, L, 0, options);
  if (!isFinite(geom.halfFieldDeg) || geom.halfFieldDeg <= 0) return null;

  const target = -Math.abs(targetImageHeight);
  let lo = 0;
  let hi = geom.halfFieldDeg;
  const yLo = chiefRayImageHeight(lo, zPos, focusT, zoomT, L, geom, 0, options);
  const yHi = chiefRayImageHeight(hi, zPos, focusT, zoomT, L, geom, 0, options);
  if (!isFinite(yLo) || !isFinite(yHi)) return null;
  if (target > yLo || target < yHi) return null;

  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    const yMid = chiefRayImageHeight(mid, zPos, focusT, zoomT, L, geom, 0, options);
    if (!isFinite(yMid)) return null;
    if (Math.abs(yMid - target) < 1e-4) return mid;
    if (yMid > target) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

export function entrancePupilAtState(
  stopSD: number,
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry?: FieldGeometryState,
  aberrationT = 0,
  options?: RayTraceOptions,
): EntrancePupilState {
  const geom = geometry ?? computeFieldGeometryAtState(focusT, zoomT, L, aberrationT, options);
  const yRatio = geom.yRatio;
  const epSD = Math.abs(yRatio) > 1e-9 ? Math.abs(stopSD / yRatio) : 0;
  return {
    epSD,
    yRatio,
    b: geom.b,
    epRatio: geom.epRatio,
  };
}

function traceToImageReal(
  y0: number,
  u0: number,
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  aberrationT = 0,
  options?: RayTraceOptions,
): number {
  const S = stateSurfaces(focusT, zoomT, L, aberrationT);
  const trace = traceStateSurfacesReal(S, L, y0, u0, {}, options);
  if (!isFinite(trace.y)) return NaN;
  return trace.y + S[S.length - 1].d * trace.u;
}

function realK(
  yRef: number,
  du: number,
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  aberrationT = 0,
  options?: RayTraceOptions,
): number {
  const y0 = traceToImageReal(yRef, 0, focusT, zoomT, L, aberrationT, options);
  const y1 = traceToImageReal(yRef, du, focusT, zoomT, L, aberrationT, options);
  if (isNaN(y0) || isNaN(y1)) return NaN;
  const dydu = (y1 - y0) / du;
  if (Math.abs(dydu) < 1e-15) return NaN;
  return -y0 / dydu / yRef;
}

export function conjugateK(
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  aberrationT = 0,
  options?: RayTraceOptions,
): number {
  if (focusT < FOCUS_INFINITY_THRESHOLD) return 0;
  const du = 1e-5;
  const currentEP = entrancePupilAtState(L.stopPhysSD, focusT, zoomT, L, undefined, aberrationT, options).epSD;
  const infinityEP = entrancePupilAtState(L.stopPhysSD, 0, zoomT, L, undefined, 0, options).epSD;
  const yRefCurrent = currentEP * CONJUGATE_REFERENCE_PUPIL_FRACTION;
  const yRefInfinity = infinityEP * CONJUGATE_REFERENCE_PUPIL_FRACTION;
  const Kt = realK(yRefCurrent, du, focusT, zoomT, L, aberrationT, options);
  const K0 = realK(yRefInfinity, du, 0, zoomT, L, 0, options);
  if (isNaN(Kt) || isNaN(K0)) return 0;
  return Kt - K0;
}

function traceStateSurfacesReal(
  S: ReturnType<typeof stateSurfaces>,
  L: RuntimeLens,
  y0: number,
  u0: number,
  traceOptions: RealSurfaceTraceOptions = {},
  options?: RayTraceOptions,
): RealSurfaceTraceResult {
  const mode = resolveSurfaceTraceMode(L, options?.mode);
  if (mode === "legacy") return traceSurfacesVertexReal(S, L.asphByIdx, y0, u0, traceOptions);

  const result = traceExactSurfaceStack(
    { S, asphByIdx: L.asphByIdx, stopIdx: L.stopIdx },
    { y0, uy0: u0 },
    {
      stopAt: traceOptions.stopAt,
      skipLastTransfer: traceOptions.skipLastTransfer,
      recordHeights: traceOptions.recordHeights,
      checkSemiDiameter: traceOptions.checkSemiDiameter,
    },
  );
  const failed = result.failureReason !== null;
  return {
    y: failed ? NaN : result.y,
    u: failed ? NaN : result.uy,
    n: result.n,
    clipped: result.clipped,
    heights: result.heights,
  };
}
