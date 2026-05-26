import type { ParaxialTraceResult, RayTraceResult, RuntimeLens } from "../../types/optics.js";
import { resolveImageFormatMetadata } from "../../utils/catalog/lensTaxonomy.js";
import { normalizeRuntimeLens } from "../prescription/normalizeLensData.js";
import { prepareState } from "../state/prepareState.js";
import type { PreparedOpticalState, Ray3, Vec3 } from "../types.js";
import { traceParaxialSurfaces2 } from "../math/paraxial.js";
import { traceEngineRay2, traceRay2, traceRayVector2 } from "../trace/rayAdapters.js";
import { traceToStopViaGeneralized2 } from "../trace/stopTrace.js";
import type { TraceOptions } from "../trace/types.js";
import {
  ABSOLUTE_HALF_FIELD_CEILING,
  fisheyeProjectionMaxTraceFieldAtZoom2,
  isFisheyeProjection2,
  launchSurfaceForFieldDeg2,
  MAX_FIELD_LAUNCH_DEG,
  projectionLaunchSlopeForField2,
  rectilinearProjectionMaxTraceField2,
  type LaunchSurface2,
} from "./projection.js";
import {
  computeBoundingSphereVectorFieldLaunch2,
  type FieldGeometryState2,
  type OffsetVectorFieldRay2,
  type VectorFieldRayLaunch2,
} from "./launch.js";
import {
  chiefRayCacheKey2,
  getCachedChiefRaySolve2,
  recordChiefRayStatus2,
  setCachedChiefRaySolve2,
} from "./chiefRayCache.js";

const CHIEF_RAY_MAX_ITERATIONS = 30;
const CHIEF_RAY_BRACKET_EPSILON = 1e-9;
const CHIEF_RAY_RESIDUAL_TOLERANCE = 1e-7;
const OBJECT_PLANE_BRACKET_SCAN_SAMPLES = 96;
const BOUNDING_SPHERE_BRACKET_SCAN_SAMPLES = 96;
const CONJUGATE_REFERENCE_PUPIL_FRACTION = 0.1;
const FOCUS_INFINITY_THRESHOLD = 0.0001;

export interface EntrancePupilState2 {
  epSD: number;
  yRatio: number;
  b: number;
  epRatio: number;
}

export interface ChiefRaySolveResult2 {
  yLaunch: number;
  uField: number;
  status: "converged" | "paraxial-fallback" | "bracket-failed" | "out-of-domain";
  iterations: number;
  launchSurface: LaunchSurface2;
  vectorLaunch?: VectorFieldRayLaunch2;
}

export type { FieldGeometryState2, OffsetVectorFieldRay2, VectorFieldRayLaunch2 };

export function computeFieldGeometryAtState2(
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  aberrationT = 0,
): FieldGeometryState2 {
  const state = prepareState(normalizeRuntimeLens(L), focusT, zoomT, aberrationT);
  const stopIndex = state.lens.stop.surfaceIndex;
  const delta = 1e-4;

  const paraxMarg = traceParaxialSurfaces2(state.surfaces, 1, 0, { stopAt: stopIndex });
  const paraxChief = traceParaxialSurfaces2(state.surfaces, 0, 1, { stopAt: stopIndex });
  const realMarg = traceStateSurfacesReal2(state, delta, 0, { stopAt: stopIndex });
  const realChief = traceStateSurfacesReal2(state, 0, delta, { stopAt: stopIndex });

  const yRatio = Number.isFinite(realMarg.y) ? realMarg.y / delta : paraxMarg.y;
  const b = Number.isFinite(realChief.y) ? realChief.y / delta : paraxChief.y;
  const epRatio = Math.abs(yRatio) > 1e-9 ? b / yRatio : 0;

  const hA = traceParaxialSurfaces2(state.surfaces, 1, 0, { skipLastTransfer: true, recordHeights: true }).heights!;
  const hB = traceParaxialSurfaces2(state.surfaces, 0, 1, { skipLastTransfer: true, recordHeights: true }).heights!;
  const r = Math.abs(hA[stopIndex]) > 1e-15 ? hB[stopIndex] / hA[stopIndex] : 0;
  let minU = Infinity;
  for (let i = 0; i < state.surfaces.length; i++) {
    if (i === stopIndex) continue;
    const coeff = Math.abs(hB[i] - r * hA[i]);
    if (coeff > 1e-8) {
      const uMax = state.surfaces[i].sd / coeff;
      if (uMax < minU) minU = uMax;
    }
  }
  let halfFieldDeg = (Math.atan(minU) * 180) / Math.PI;

  if (isFisheyeProjection2(L.projection)) {
    halfFieldDeg = Math.min(
      fisheyeProjectionMaxTraceFieldAtZoom2(L.projection, zoomT) ?? halfFieldDeg,
      ABSOLUTE_HALF_FIELD_CEILING,
    );
    return { halfFieldDeg, yRatio, b, epRatio };
  }

  const testChief = (deg: number): boolean => {
    const launch = projectionLaunchSlopeForField2(L, deg);
    if (launch.status === "out-of-domain") return false;
    const yChiefIn = -epRatio * launch.uField;
    const trace = traceStateSurfacesReal2(state, yChiefIn, launch.uField, { checkSemiDiameter: true });
    return Number.isFinite(trace.y) && !trace.clipped;
  };

  if (Number.isFinite(halfFieldDeg) && halfFieldDeg > 0 && !testChief(halfFieldDeg)) {
    let lo = 0;
    let hi = halfFieldDeg;
    for (let i = 0; i < 20; i++) {
      const mid = (lo + hi) / 2;
      if (testChief(mid)) lo = mid;
      else hi = mid;
    }
    halfFieldDeg = lo;
  }

  halfFieldDeg = rectilinearProjectionMaxTraceField2(L.projection) ?? halfFieldDeg;
  halfFieldDeg = Math.min(halfFieldDeg, MAX_FIELD_LAUNCH_DEG - 1e-3);
  return { halfFieldDeg, yRatio, b, epRatio };
}

export function computeAnalysisFieldGeometryAtState2(
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  aberrationT = 0,
): FieldGeometryState2 {
  const geometry = computeFieldGeometryAtState2(focusT, zoomT, L, aberrationT);
  if (!Number.isFinite(geometry.halfFieldDeg) || geometry.halfFieldDeg <= 0 || L.N < 1) return geometry;

  const format = resolveImageFormatMetadata(L.data?.imageFormat);
  const maxImageHeight = format.diagonalMm / 2;
  if (!Number.isFinite(maxImageHeight) || maxImageHeight <= 0) return geometry;

  const zPos = zPositionsForState(focusT, zoomT, L, aberrationT);
  const edgeImageHeight = chiefRayImageHeightAccurate2(
    geometry.halfFieldDeg,
    zPos,
    focusT,
    zoomT,
    L,
    geometry,
    aberrationT,
  );
  if (!Number.isFinite(edgeImageHeight) || Math.abs(edgeImageHeight) <= maxImageHeight + 1e-9) return geometry;

  const formatHalfFieldDeg = solveFieldAngleForImageHeightAccurate2(
    maxImageHeight,
    zPos,
    focusT,
    zoomT,
    L,
    geometry,
    aberrationT,
  );
  if (formatHalfFieldDeg === null || !Number.isFinite(formatHalfFieldDeg)) return geometry;

  return { ...geometry, halfFieldDeg: Math.min(geometry.halfFieldDeg, Math.max(0, formatHalfFieldDeg)) };
}

export function traceChiefRayAtAngle2(
  fieldAngleDeg: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry?: FieldGeometryState2,
  aberrationT = 0,
): RayTraceResult {
  const geom = geometry ?? computeFieldGeometryAtState2(focusT, zoomT, L, aberrationT);
  const launch = projectionLaunchSlopeForField2(L, fieldAngleDeg);
  const uField = launch.uField;
  const yChief = -geom.epRatio * uField;
  return traceRay2(yChief, uField, zPos, focusT, zoomT, undefined, true, L, aberrationT);
}

export function traceParaxialRay2(
  y0: number,
  u0: number,
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
): Pick<ParaxialTraceResult, "y" | "u"> {
  const state = prepareState(normalizeRuntimeLens(L), focusT, zoomT, 0);
  const result = traceParaxialSurfaces2(state.surfaces, y0, u0, { skipLastTransfer: true });
  return { y: result.y, u: result.u };
}

export function chiefRayImageHeight2(
  fieldAngleDeg: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry?: FieldGeometryState2,
  aberrationT = 0,
): number {
  const trace = traceChiefRayAtAngle2(fieldAngleDeg, zPos, focusT, zoomT, L, geometry, aberrationT);
  if (L.isFoldedOptics && trace.reachedImagePlane) return foldedRayImagePlaneCoordinate2(trace, L);
  return trace.y + trace.u * lastThicknessAtState(focusT, zoomT, L, aberrationT);
}

export function solveChiefRay2(
  fieldAngleDeg: number,
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry?: FieldGeometryState2,
  aberrationT = 0,
): ChiefRaySolveResult2 {
  const cacheKey = chiefRayCacheKey2(L, focusT, zoomT, aberrationT, fieldAngleDeg);
  const cached = getCachedChiefRaySolve2(L, cacheKey);
  if (cached) return cached;

  const result = computeChiefRaySolve2(fieldAngleDeg, focusT, zoomT, L, geometry, aberrationT);
  setCachedChiefRaySolve2(L, cacheKey, result);
  reportChiefRayFallback2(L, fieldAngleDeg, focusT, zoomT, result.status);
  return result;
}

export function solveChiefRayBoundingSphere2(
  fieldAngleDeg: number,
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry: FieldGeometryState2 | undefined,
  aberrationT: number,
): ChiefRaySolveResult2 {
  const launchSurface: LaunchSurface2 = "bounding-sphere";
  const geom = geometry ?? computeFieldGeometryAtState2(focusT, zoomT, L, aberrationT);
  const epZ = geom.epRatio;
  const baseLaunch = computeBoundingSphereVectorFieldLaunch2(L, { ...geom, epRatio: epZ }, 0, fieldAngleDeg);
  if (baseLaunch === null) {
    return { yLaunch: NaN, uField: NaN, status: "out-of-domain", iterations: 0, launchSurface };
  }

  const thetaRad = (fieldAngleDeg * Math.PI) / 180;
  const sinTheta = Math.sin(thetaRad);
  const cosTheta = Math.cos(thetaRad);
  const perpY = cosTheta;
  const perpZ = sinTheta;
  const direction = baseLaunch.direction;
  const baseOrigin = baseLaunch.origin;
  const uFieldEquivalent = Math.abs(cosTheta) > 1e-9 ? -sinTheta / cosTheta : NaN;
  const state = prepareState(normalizeRuntimeLens(L), focusT, zoomT, aberrationT);
  const stopIndex = state.lens.stop.surfaceIndex;
  const launchBoundT = baseLaunch.launchBoundT;

  const projectYLaunchToZ0 = (yEP: number): number => {
    if (Math.abs(direction[2]) < 1e-12) return NaN;
    const oy = baseOrigin[1] + yEP * perpY;
    const oz = baseOrigin[2] + yEP * perpZ;
    const t = (0 - oz) / direction[2];
    return oy + t * direction[1];
  };

  const heightAtStop = (yEP: number): number | null => {
    const origin: Vec3 = [baseOrigin[0], baseOrigin[1] + yEP * perpY, baseOrigin[2] + yEP * perpZ];
    const ray: Ray3 = { origin, direction };
    if (L.isFoldedOptics) {
      const result = traceToStopViaGeneralized2(state, ray, stopIndex, { launchBoundT, checkSemiDiameter: true });
      if (!result.found) return null;
      return result.y;
    }
    const result = traceEngineRay2(state, ray, { stopAt: stopIndex, launchBoundT, checkSemiDiameter: true });
    if (result.failureReason !== null || result.status !== "ok") return null;
    return result.y;
  };

  const launchAtYEP = (yEP: number): VectorFieldRayLaunch2 => ({
    ...baseLaunch,
    origin: [baseOrigin[0], baseOrigin[1] + yEP * perpY, baseOrigin[2] + yEP * perpZ],
  });

  const paraxialYEP = 0;
  if (Math.abs(fieldAngleDeg) < 1) {
    return {
      yLaunch: projectYLaunchToZ0(paraxialYEP),
      uField: uFieldEquivalent,
      status: "converged",
      iterations: 0,
      launchSurface,
      vectorLaunch: launchAtYEP(paraxialYEP),
    };
  }

  const bracketHalf = Math.max(0.5 * Math.abs(geom.epRatio * sinTheta), 0.5);
  let bracket: { lo: number; hi: number; yLo: number } | null = null;
  let nearestYEP = paraxialYEP;
  let nearestAbsHeight = Infinity;

  for (let attempt = 0; attempt < 4 && bracket === null; attempt++) {
    const scanHalf = bracketHalf * (2 << attempt);
    const scanLo = paraxialYEP - scanHalf;
    const scanHi = paraxialYEP + scanHalf;
    let prev: { yEP: number; height: number } | null = null;

    for (let i = 0; i <= BOUNDING_SPHERE_BRACKET_SCAN_SAMPLES; i++) {
      const yEP = scanLo + ((scanHi - scanLo) * i) / BOUNDING_SPHERE_BRACKET_SCAN_SAMPLES;
      const height = heightAtStop(yEP);
      if (height === null) {
        prev = null;
        continue;
      }

      const absHeight = Math.abs(height);
      if (absHeight < nearestAbsHeight) {
        nearestAbsHeight = absHeight;
        nearestYEP = yEP;
      }
      if (absHeight < CHIEF_RAY_RESIDUAL_TOLERANCE) {
        return {
          yLaunch: projectYLaunchToZ0(yEP),
          uField: uFieldEquivalent,
          status: "converged",
          iterations: 0,
          launchSurface,
          vectorLaunch: launchAtYEP(yEP),
        };
      }
      if (prev !== null && prev.height * height <= 0) {
        bracket = { lo: prev.yEP, hi: yEP, yLo: prev.height };
        break;
      }
      prev = { yEP, height };
    }
  }

  if (bracket === null) {
    return {
      yLaunch: projectYLaunchToZ0(nearestYEP),
      uField: uFieldEquivalent,
      status: "bracket-failed",
      iterations: 0,
      launchSurface,
      vectorLaunch: launchAtYEP(nearestYEP),
    };
  }

  let { lo, hi } = bracket;
  let fLo = bracket.yLo;
  for (let i = 0; i < CHIEF_RAY_MAX_ITERATIONS; i++) {
    const mid = (lo + hi) / 2;
    const yMid = heightAtStop(mid);
    if (yMid === null) {
      return {
        yLaunch: projectYLaunchToZ0(paraxialYEP),
        uField: uFieldEquivalent,
        status: "paraxial-fallback",
        iterations: i + 1,
        launchSurface,
        vectorLaunch: launchAtYEP(paraxialYEP),
      };
    }
    if (Math.abs(yMid) < CHIEF_RAY_RESIDUAL_TOLERANCE) {
      return {
        yLaunch: projectYLaunchToZ0(mid),
        uField: uFieldEquivalent,
        status: "converged",
        iterations: i + 1,
        launchSurface,
        vectorLaunch: launchAtYEP(mid),
      };
    }
    if (yMid < 0 === fLo < 0) {
      lo = mid;
      fLo = yMid;
    } else {
      hi = mid;
    }
    if (Math.abs(hi - lo) < CHIEF_RAY_BRACKET_EPSILON) {
      const solved = (lo + hi) / 2;
      return {
        yLaunch: projectYLaunchToZ0(solved),
        uField: uFieldEquivalent,
        status: "converged",
        iterations: i + 1,
        launchSurface,
        vectorLaunch: launchAtYEP(solved),
      };
    }
  }
  const solvedYEP = (lo + hi) / 2;
  return {
    yLaunch: projectYLaunchToZ0(solvedYEP),
    uField: uFieldEquivalent,
    status: "converged",
    iterations: CHIEF_RAY_MAX_ITERATIONS,
    launchSurface,
    vectorLaunch: launchAtYEP(solvedYEP),
  };
}

export function chiefRayImageHeightAccurate2(
  fieldAngleDeg: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry?: FieldGeometryState2,
  aberrationT = 0,
): number {
  const launch = projectionLaunchSlopeForField2(L, fieldAngleDeg);
  const solve = solveChiefRay2(fieldAngleDeg, focusT, zoomT, L, geometry, aberrationT);
  if (solve.vectorLaunch) {
    const trace = traceRayVector2(solve.vectorLaunch, zPos, undefined, false, L);
    if (trace.clipped) return NaN;
    if (L.isFoldedOptics && trace.reachedImagePlane) return foldedRayImagePlaneCoordinate2(trace, L);
    return trace.y + trace.u * lastThicknessAtState(focusT, zoomT, L, aberrationT);
  }
  const trace = traceRay2(solve.yLaunch, launch.uField, zPos, focusT, zoomT, undefined, true, L, aberrationT);
  if (L.isFoldedOptics && trace.reachedImagePlane) return foldedRayImagePlaneCoordinate2(trace, L);
  return trace.y + trace.u * lastThicknessAtState(focusT, zoomT, L, aberrationT);
}

export function solveFieldAngleForImageHeightAccurate2(
  targetImageHeight: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry?: FieldGeometryState2,
  aberrationT = 0,
): number | null {
  if (!Number.isFinite(targetImageHeight) || Math.abs(targetImageHeight) < 1e-12) return 0;
  const geom = geometry ?? computeFieldGeometryAtState2(focusT, zoomT, L, aberrationT);
  if (!Number.isFinite(geom.halfFieldDeg) || geom.halfFieldDeg <= 0) return null;
  const target = -Math.abs(targetImageHeight);
  const imageHeightAt = (deg: number) => chiefRayImageHeightAccurate2(deg, zPos, focusT, zoomT, L, geom, aberrationT);
  const bracketSegments = Math.max(Math.ceil(geom.halfFieldDeg), 20);
  const segmentAngles: number[] = [];
  const segmentHeights: number[] = [];
  for (let i = 0; i <= bracketSegments; i++) {
    const angleDeg = (i / bracketSegments) * geom.halfFieldDeg;
    const height = imageHeightAt(angleDeg);
    if (!Number.isFinite(height)) continue;
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
    if (!Number.isFinite(yMid)) return null;
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

export function solveFieldAngleForImageHeight2(
  targetImageHeight: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry?: FieldGeometryState2,
): number | null {
  if (!Number.isFinite(targetImageHeight) || Math.abs(targetImageHeight) < 1e-12) return 0;
  const geom = geometry ?? computeFieldGeometryAtState2(focusT, zoomT, L, 0);
  if (!Number.isFinite(geom.halfFieldDeg) || geom.halfFieldDeg <= 0) return null;
  const target = -Math.abs(targetImageHeight);
  let lo = 0;
  let hi = geom.halfFieldDeg;
  const yLo = chiefRayImageHeight2(lo, zPos, focusT, zoomT, L, geom, 0);
  const yHi = chiefRayImageHeight2(hi, zPos, focusT, zoomT, L, geom, 0);
  if (!Number.isFinite(yLo) || !Number.isFinite(yHi)) return null;
  if (target > yLo || target < yHi) return null;
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    const yMid = chiefRayImageHeight2(mid, zPos, focusT, zoomT, L, geom, 0);
    if (!Number.isFinite(yMid)) return null;
    if (Math.abs(yMid - target) < 1e-4) return mid;
    if (yMid > target) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

export function entrancePupilAtState2(
  stopSD: number,
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry?: FieldGeometryState2,
  aberrationT = 0,
): EntrancePupilState2 {
  const geom = geometry ?? computeFieldGeometryAtState2(focusT, zoomT, L, aberrationT);
  const epSD = Math.abs(geom.yRatio) > 1e-9 ? Math.abs(stopSD / geom.yRatio) : 0;
  return { epSD, yRatio: geom.yRatio, b: geom.b, epRatio: geom.epRatio };
}

export function conjugateK2(focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0): number {
  if (focusT < FOCUS_INFINITY_THRESHOLD) return 0;
  const du = 1e-5;
  const currentEP = entrancePupilAtState2(L.stopPhysSD, focusT, zoomT, L, undefined, aberrationT).epSD;
  const infinityEP = entrancePupilAtState2(L.stopPhysSD, 0, zoomT, L, undefined, 0).epSD;
  const yRefCurrent = currentEP * CONJUGATE_REFERENCE_PUPIL_FRACTION;
  const yRefInfinity = infinityEP * CONJUGATE_REFERENCE_PUPIL_FRACTION;
  const kt = realK2(yRefCurrent, du, focusT, zoomT, L, aberrationT);
  const k0 = realK2(yRefInfinity, du, 0, zoomT, L, 0);
  if (Number.isNaN(kt) || Number.isNaN(k0)) return 0;
  return kt - k0;
}

function computeChiefRaySolve2(
  fieldAngleDeg: number,
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry: FieldGeometryState2 | undefined,
  aberrationT: number,
): ChiefRaySolveResult2 {
  const launchSurface = launchSurfaceForFieldDeg2(fieldAngleDeg, L.projection);
  if (launchSurface === "bounding-sphere") {
    return solveChiefRayBoundingSphere2(fieldAngleDeg, focusT, zoomT, L, geometry, aberrationT);
  }
  const launch = projectionLaunchSlopeForField2(L, fieldAngleDeg);
  if (launch.status === "out-of-domain") {
    return { yLaunch: NaN, uField: NaN, status: "out-of-domain", iterations: 0, launchSurface };
  }

  const geom = geometry ?? computeFieldGeometryAtState2(focusT, zoomT, L, aberrationT);
  const uField = launch.uField;
  const paraxialYChief = -geom.epRatio * uField;
  if (Math.abs(fieldAngleDeg) < 1) {
    return { yLaunch: paraxialYChief, uField, status: "converged", iterations: 0, launchSurface };
  }

  const state = prepareState(normalizeRuntimeLens(L), focusT, zoomT, aberrationT);
  const stopIndex = state.lens.stop.surfaceIndex;
  const heightAtStop = (yLaunch: number): number | null => {
    const result = traceStateSurfacesReal2(state, yLaunch, uField, { stopAt: stopIndex });
    return Number.isFinite(result.y) ? result.y : null;
  };

  const bracketHalf = Math.max(Math.abs(paraxialYChief) * 0.5, 0.5);
  let lo = paraxialYChief - bracketHalf;
  let hi = paraxialYChief + bracketHalf;
  const yLo = heightAtStop(lo);
  const yHi = heightAtStop(hi);
  let fLo: number;
  if (yLo !== null && yHi !== null && yLo * yHi <= 0) {
    fLo = yLo;
  } else {
    let bracket: { lo: number; hi: number; yLo: number } | null = null;
    let nearestYLaunch = paraxialYChief;
    let nearestAbsHeight = Infinity;
    for (let attempt = 0; attempt < 4 && bracket === null; attempt++) {
      const scanHalf = bracketHalf * (2 << attempt);
      const scanLo = paraxialYChief - scanHalf;
      const scanHi = paraxialYChief + scanHalf;
      let prev: { yLaunch: number; height: number } | null = null;
      for (let i = 0; i <= OBJECT_PLANE_BRACKET_SCAN_SAMPLES; i++) {
        const yLaunch = scanLo + ((scanHi - scanLo) * i) / OBJECT_PLANE_BRACKET_SCAN_SAMPLES;
        const height = heightAtStop(yLaunch);
        if (height === null) {
          prev = null;
          continue;
        }
        const absHeight = Math.abs(height);
        if (absHeight < nearestAbsHeight) {
          nearestAbsHeight = absHeight;
          nearestYLaunch = yLaunch;
        }
        if (absHeight < CHIEF_RAY_RESIDUAL_TOLERANCE) {
          return { yLaunch, uField, status: "converged", iterations: 0, launchSurface };
        }
        if (prev !== null && prev.height * height <= 0) {
          bracket = { lo: prev.yLaunch, hi: yLaunch, yLo: prev.height };
          break;
        }
        prev = { yLaunch, height };
      }
    }
    if (bracket === null) {
      return { yLaunch: nearestYLaunch, uField, status: "bracket-failed", iterations: 0, launchSurface };
    }
    lo = bracket.lo;
    hi = bracket.hi;
    fLo = bracket.yLo;
  }

  for (let i = 0; i < CHIEF_RAY_MAX_ITERATIONS; i++) {
    const mid = (lo + hi) / 2;
    const yMid = heightAtStop(mid);
    if (yMid === null) {
      return { yLaunch: paraxialYChief, uField, status: "paraxial-fallback", iterations: i + 1, launchSurface };
    }
    if (Math.abs(yMid) < CHIEF_RAY_RESIDUAL_TOLERANCE) {
      return { yLaunch: mid, uField, status: "converged", iterations: i + 1, launchSurface };
    }
    if (yMid < 0 === fLo < 0) {
      lo = mid;
      fLo = yMid;
    } else {
      hi = mid;
    }
    if (Math.abs(hi - lo) < CHIEF_RAY_BRACKET_EPSILON) {
      return { yLaunch: (lo + hi) / 2, uField, status: "converged", iterations: i + 1, launchSurface };
    }
  }
  return {
    yLaunch: (lo + hi) / 2,
    uField,
    status: "converged",
    iterations: CHIEF_RAY_MAX_ITERATIONS,
    launchSurface,
  };
}

interface RealSurfaceTraceResult2 {
  y: number;
  u: number;
  n: number;
  clipped: boolean;
  heights: readonly number[] | null;
}

function traceStateSurfacesReal2(
  state: PreparedOpticalState,
  y0: number,
  u0: number,
  traceOptions: TraceOptions = {},
): RealSurfaceTraceResult2 {
  const ray = slopeRayForState(state, y0, u0);
  if (state.lens.flags.isFoldedOptics && traceOptions.stopAt !== undefined) {
    const stop = traceToStopViaGeneralized2(state, ray, traceOptions.stopAt, {
      checkSemiDiameter: traceOptions.checkSemiDiameter,
    });
    return {
      y: stop.found ? stop.y : NaN,
      u: stop.found ? stop.uy : NaN,
      n: stop.n,
      clipped: !stop.found,
      heights: null,
    };
  }

  const result = traceEngineRay2(state, ray, traceOptions);
  const failed = result.failureReason !== null;
  return {
    y: failed ? NaN : result.y,
    u: failed ? NaN : result.uy,
    n: result.finalMedium,
    clipped: result.status !== "ok",
    heights: result.heights,
  };
}

function slopeRayForState(state: PreparedOpticalState, y0: number, u0: number): Ray3 {
  const lead = inferLeadDistance2(state);
  const invMag = 1 / Math.hypot(0, u0, 1);
  return {
    origin: [0, y0 - u0 * lead, (state.z[0] ?? 0) - lead],
    direction: [0, u0 * invMag, invMag],
  };
}

function inferLeadDistance2(state: PreparedOpticalState): number {
  const first = state.surfaces[0];
  if (!first) return 0;
  const normal = first.interaction.normal;
  if (normal) {
    const sd = first.sd ?? 0;
    if (Math.abs(normal[2]) > 1e-12) return Math.max(1, Math.abs((sd * normal[1]) / normal[2]) + 1);
    return Math.max(1, 2 * sd + 1);
  }
  const firstSag = Math.abs(first.profile.sag(first.sd ?? 0));
  return Math.max(1, firstSag + 1);
}

function reportChiefRayFallback2(
  L: RuntimeLens,
  fieldAngleDeg: number,
  focusT: number,
  zoomT: number,
  status: ChiefRaySolveResult2["status"],
): void {
  const key = L.data?.key ?? "<unknown-lens>";
  recordChiefRayStatus2(key, status);
  if (status === "converged" || status === "paraxial-fallback") return;
  if (typeof import.meta === "undefined") return;
  const env = (import.meta as { env?: { DEV?: boolean } }).env;
  if (!env?.DEV) return;
  console.warn(
    `[chiefRaySolver2] ${status} key=${key} field=${fieldAngleDeg.toFixed(3)} focus=${focusT.toFixed(4)} zoom=${zoomT.toFixed(4)}`,
  );
}

function foldedRayImagePlaneCoordinate2(trace: RayTraceResult, L: RuntimeLens): number {
  const point = trace.pts[trace.pts.length - 1];
  if (!point) return NaN;
  const [z, y] = point;
  const tangentZ = -L.imagePlane.normal.y;
  const tangentY = L.imagePlane.normal.z;
  return (z - L.imagePlane.z) * tangentZ + (y - L.imagePlane.y) * tangentY;
}

function zPositionsForState(focusT: number, zoomT: number, L: RuntimeLens, aberrationT: number): number[] {
  const state = prepareState(normalizeRuntimeLens(L), focusT, zoomT, aberrationT);
  return [...state.z];
}

function lastThicknessAtState(focusT: number, zoomT: number, L: RuntimeLens, aberrationT: number): number {
  const state = prepareState(normalizeRuntimeLens(L), focusT, zoomT, aberrationT);
  return state.surfaces[state.surfaces.length - 1]?.d ?? 0;
}

function traceToImageReal2(
  y0: number,
  u0: number,
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  aberrationT = 0,
): number {
  const state = prepareState(normalizeRuntimeLens(L), focusT, zoomT, aberrationT);
  const trace = traceStateSurfacesReal2(state, y0, u0, {});
  if (!Number.isFinite(trace.y)) return NaN;
  return trace.y + (state.surfaces[state.surfaces.length - 1]?.d ?? 0) * trace.u;
}

function realK2(yRef: number, du: number, focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0): number {
  const y0 = traceToImageReal2(yRef, 0, focusT, zoomT, L, aberrationT);
  const y1 = traceToImageReal2(yRef, du, focusT, zoomT, L, aberrationT);
  if (Number.isNaN(y0) || Number.isNaN(y1)) return NaN;
  const dydu = (y1 - y0) / du;
  if (Math.abs(dydu) < 1e-15) return NaN;
  return -y0 / dydu / yRef;
}
