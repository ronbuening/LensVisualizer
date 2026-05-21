import type { ParaxialTraceResult, RayTraceResult, RuntimeLens } from "../types/optics.js";
import { resolveImageFormatMetadata } from "../utils/catalog/lensTaxonomy.js";
import { stateSurfaces, thick, FOCUS_INFINITY_THRESHOLD } from "./layout.js";
import {
  traceSurfacesParaxial,
  traceSurfacesVertexReal,
  type RealSurfaceTraceOptions,
  type RealSurfaceTraceResult,
} from "./internal/traceSurfaces.js";
import { traceExactSurfaceStack, traceExactSurfaceStackVector } from "./internal/exactSurfaceTrace.js";
import type { Vector3 } from "./internal/exactSurfaceTrace.js";
import {
  ABSOLUTE_HALF_FIELD_CEILING,
  boundingSphereLaunchVector,
  fisheyeProjectionMaxTraceFieldAtZoom,
  isFisheyeProjection,
  launchSurfaceForFieldDeg,
  MAX_FIELD_LAUNCH_DEG,
  projectionLaunchSlopeForField,
  rectilinearProjectionMaxTraceField,
  type LaunchSurface,
} from "./projection.js";
import { traceRay, traceRayVector, type RayTraceOptions } from "./rayTrace.js";
import { resolveSurfaceTraceMode } from "./traceMode.js";
import { recordChiefRayStatus } from "./chiefRayDiagnostics.js";

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

export interface ChiefRaySolveResult {
  yLaunch: number;
  uField: number;
  status: "converged" | "paraxial-fallback" | "bracket-failed" | "out-of-domain";
  iterations: number;
  launchSurface: LaunchSurface;
  vectorLaunch?: VectorFieldRayLaunch;
}

export interface VectorFieldRayLaunch {
  origin: Vector3;
  direction: Vector3;
  launchBoundT: number;
  launchRadiusMm: number;
  fieldAngleXDeg: number;
  fieldAngleYDeg: number;
  totalFieldDeg: number;
  radialPupilAxis: Vector3;
  sagittalPupilAxis: Vector3;
  launchSurface: "bounding-sphere";
}

export interface OffsetVectorFieldRay {
  origin: Vector3;
  direction: Vector3;
  launchBoundT: number;
}

const CHIEF_RAY_MAX_ITERATIONS = 30;
const CHIEF_RAY_BRACKET_EPSILON = 1e-9;
const CHIEF_RAY_RESIDUAL_TOLERANCE = 1e-7;
const OBJECT_PLANE_BRACKET_SCAN_SAMPLES = 96;
const BOUNDING_SPHERE_BRACKET_SCAN_SAMPLES = 96;

const chiefRaySolveCache: WeakMap<RuntimeLens, Map<string, ChiefRaySolveResult>> = new WeakMap();

function chiefRaySolveCacheKey(
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  aberrationT: number,
  fieldAngleDeg: number,
  options: RayTraceOptions | undefined,
): string {
  const mode = options?.mode ?? "default";
  const launchSurface = launchSurfaceForFieldDeg(fieldAngleDeg, L.projection);
  return `${focusT}|${zoomT}|${aberrationT}|${fieldAngleDeg}|${mode}|${launchSurface}`;
}

function reportChiefRayFallback(
  L: RuntimeLens,
  fieldAngleDeg: number,
  focusT: number,
  zoomT: number,
  status: ChiefRaySolveResult["status"],
): void {
  const key = L.data?.key ?? "<unknown-lens>";
  recordChiefRayStatus(key, status);
  if (status === "converged" || status === "paraxial-fallback") return;
  if (typeof import.meta === "undefined") return;
  const env = (import.meta as { env?: { DEV?: boolean } }).env;
  if (!env?.DEV) return;
  console.warn(
    `[chiefRaySolver] ${status} key=${key} field=${fieldAngleDeg.toFixed(3)}° focus=${focusT.toFixed(4)} zoom=${zoomT.toFixed(4)}`,
  );
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

  const fisheye = isFisheyeProjection(L.projection);

  if (fisheye) {
    // Fisheye lenses don't use the paraxial-chief-ray bisection. Their real
    // chief rays are far from paraxial (they enter through the highly-curved
    // front element at angles where slope-launch is meaningless), so the
    // paraxial testChief drastically undercounts the lens's true coverage —
    // e.g., the Nikon Fisheye-Nikkor 6mm has a 110° patent-declared half-field
    // but a paraxial-chief-ray bisection narrows to ~32°. The declared
    // `maxTraceFieldDeg` is the source of truth; individual rays in the
    // diagram or analysis tabs that don't trace at extreme angles get
    // filtered out per-ray via the tracer's `clipped` flag.
    halfFieldDeg = Math.min(
      fisheyeProjectionMaxTraceFieldAtZoom(L.projection, zoomT) ?? halfFieldDeg,
      ABSOLUTE_HALF_FIELD_CEILING,
    );
    return { halfFieldDeg, yRatio, b, epRatio };
  }

  const testChief = (deg: number): boolean => {
    const launch = projectionLaunchSlopeForField(L, deg);
    if (launch.status === "out-of-domain") return false;
    const uField = launch.uField;
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

  halfFieldDeg = rectilinearProjectionMaxTraceField(L.projection) ?? halfFieldDeg;
  halfFieldDeg = Math.min(halfFieldDeg, MAX_FIELD_LAUNCH_DEG - 1e-3);

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
  const launch = projectionLaunchSlopeForField(L, fieldAngleDeg);
  const uField = launch.uField;
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

export function solveChiefRay(
  fieldAngleDeg: number,
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry?: FieldGeometryState,
  aberrationT = 0,
  options?: RayTraceOptions,
): ChiefRaySolveResult {
  let perLensCache = chiefRaySolveCache.get(L);
  if (!perLensCache) {
    perLensCache = new Map();
    chiefRaySolveCache.set(L, perLensCache);
  }
  const cacheKey = chiefRaySolveCacheKey(L, focusT, zoomT, aberrationT, fieldAngleDeg, options);
  const cached = perLensCache.get(cacheKey);
  if (cached) return cached;

  const result = computeChiefRaySolve(fieldAngleDeg, focusT, zoomT, L, geometry, aberrationT, options);
  perLensCache.set(cacheKey, result);
  reportChiefRayFallback(L, fieldAngleDeg, focusT, zoomT, result.status);
  return result;
}

function computeChiefRaySolve(
  fieldAngleDeg: number,
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry: FieldGeometryState | undefined,
  aberrationT: number,
  options: RayTraceOptions | undefined,
): ChiefRaySolveResult {
  const launchSurface = launchSurfaceForFieldDeg(fieldAngleDeg, L.projection);
  if (launchSurface === "bounding-sphere") {
    return solveChiefRayBoundingSphere(fieldAngleDeg, focusT, zoomT, L, geometry, aberrationT, options);
  }
  const launch = projectionLaunchSlopeForField(L, fieldAngleDeg);
  if (launch.status === "out-of-domain") {
    return { yLaunch: NaN, uField: NaN, status: "out-of-domain", iterations: 0, launchSurface };
  }

  const geom = geometry ?? computeFieldGeometryAtState(focusT, zoomT, L, aberrationT, options);
  const uField = launch.uField;
  const paraxialYChief = -geom.epRatio * uField;

  if (Math.abs(fieldAngleDeg) < 1) {
    return { yLaunch: paraxialYChief, uField, status: "converged", iterations: 0, launchSurface };
  }

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

// Launch-sphere radius for bounding-sphere chief-ray launches. Must be large
// enough that the launch origin is unambiguously outside the lens for any
// reasonable field direction, but small enough that the per-surface bracket
// finder doesn't waste samples sweeping empty space. Takes the paraxial chief
// b-factor directly so it can be called from inside `computeFieldGeometryAtState`
// (where the geometry struct isn't yet assembled) as well as from
// `solveChiefRayBoundingSphere` (with a full `FieldGeometryState`).
export function computeBoundingSphereLaunchRadiusMm(L: RuntimeLens, chiefB: number): number {
  let totalThickness = 0;
  let maxSD = 0;
  for (const s of L.S) {
    totalThickness += Math.abs(s.d ?? 0);
    if (s.sd && s.sd > maxSD) maxSD = s.sd;
  }
  return Math.max(2 * maxSD, totalThickness + Math.abs(chiefB) + 5);
}

function normalizeVector([x, y, z]: Vector3): Vector3 {
  const length = Math.hypot(x, y, z);
  if (!isFinite(length) || length <= 0) return [NaN, NaN, NaN];
  return [x / length, y / length, z / length];
}

function addScaledVector(a: Vector3, b: Vector3, scale: number): Vector3 {
  return [a[0] + b[0] * scale, a[1] + b[1] * scale, a[2] + b[2] * scale];
}

function vectorFieldAxes(
  fieldAngleXDeg: number,
  fieldAngleYDeg: number,
): {
  radialPupilAxis: Vector3;
  sagittalPupilAxis: Vector3;
  totalFieldDeg: number;
} {
  const totalFieldDeg = Math.hypot(fieldAngleXDeg, fieldAngleYDeg);
  if (totalFieldDeg < 1e-12) {
    return {
      radialPupilAxis: [0, 1, 0],
      sagittalPupilAxis: [1, 0, 0],
      totalFieldDeg,
    };
  }

  const thetaRad = (totalFieldDeg * Math.PI) / 180;
  const cosTheta = Math.cos(thetaRad);
  const sinTheta = Math.sin(thetaRad);
  const cosAz = fieldAngleXDeg / totalFieldDeg;
  const sinAz = fieldAngleYDeg / totalFieldDeg;

  return {
    radialPupilAxis: normalizeVector([cosTheta * cosAz, cosTheta * sinAz, sinTheta]),
    sagittalPupilAxis: normalizeVector([-sinAz, cosAz, 0]),
    totalFieldDeg,
  };
}

export function computeBoundingSphereVectorFieldLaunch(
  L: RuntimeLens,
  geometry: FieldGeometryState,
  fieldAngleXDeg: number,
  fieldAngleYDeg: number,
  aberrationT = 0,
): VectorFieldRayLaunch | null {
  void aberrationT;
  const launchRadius = computeBoundingSphereLaunchRadiusMm(L, geometry.b);
  const launch = boundingSphereLaunchVector(geometry.epRatio, fieldAngleXDeg, fieldAngleYDeg, launchRadius);
  if (launch.status !== "ok") return null;

  const axes = vectorFieldAxes(fieldAngleXDeg, fieldAngleYDeg);
  return {
    origin: launch.origin,
    direction: launch.direction,
    launchBoundT: 2 * launchRadius,
    launchRadiusMm: launchRadius,
    fieldAngleXDeg,
    fieldAngleYDeg,
    totalFieldDeg: axes.totalFieldDeg,
    radialPupilAxis: axes.radialPupilAxis,
    sagittalPupilAxis: axes.sagittalPupilAxis,
    launchSurface: "bounding-sphere",
  };
}

export function offsetVectorFieldRay(
  launch: VectorFieldRayLaunch,
  sagittalOffsetMm: number,
  radialOffsetMm: number,
  radialDirectionDelta = 0,
): OffsetVectorFieldRay {
  let origin = addScaledVector(launch.origin, launch.sagittalPupilAxis, sagittalOffsetMm);
  origin = addScaledVector(origin, launch.radialPupilAxis, radialOffsetMm);

  const direction =
    Math.abs(radialDirectionDelta) > 1e-15
      ? normalizeVector(addScaledVector(launch.direction, launch.radialPupilAxis, radialDirectionDelta))
      : launch.direction;

  return { origin, direction, launchBoundT: launch.launchBoundT };
}

export function solveChiefRayBoundingSphere(
  fieldAngleDeg: number,
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry: FieldGeometryState | undefined,
  aberrationT: number,
  options: RayTraceOptions | undefined,
): ChiefRaySolveResult {
  const launchSurface: LaunchSurface = "bounding-sphere";
  const geom = geometry ?? computeFieldGeometryAtState(focusT, zoomT, L, aberrationT, options);

  // Paraxial entrance pupil z relative to the front vertex. Derived from the
  // identity `yLaunch(z=0) = -epRatio · uField` that drives the object-plane
  // bisection: a ray launched at `(y = -epRatio·u, slope = u)` from z=0 passes
  // through `(y=0, z=epRatio)` for any u, which is the paraxial EP definition.
  const epZ = geom.epRatio;
  // Meridional convention: object-plane bisection slope-launches along the
  // y axis (uy0 = -tan θ), so the bounding-sphere meridional direction lives
  // in the y-z plane. Pass `fieldAngleDeg` as θ_y, not θ_x.
  const baseLaunch = computeBoundingSphereVectorFieldLaunch(L, { ...geom, epRatio: epZ }, 0, fieldAngleDeg);
  if (baseLaunch === null) {
    return { yLaunch: NaN, uField: NaN, status: "out-of-domain", iterations: 0, launchSurface };
  }

  // Perpendicular to direction in the (y, z) plane, used as the bisection
  // free-parameter axis. Offsetting the origin by `yEP` along this axis sweeps
  // the chief-ray candidate through the entrance-pupil plane in object-space y.
  const thetaRad = (fieldAngleDeg * Math.PI) / 180;
  const sinTheta = Math.sin(thetaRad);
  const cosTheta = Math.cos(thetaRad);
  const perpY = cosTheta;
  const perpZ = sinTheta;
  const direction = baseLaunch.direction;
  const baseOrigin = baseLaunch.origin;

  // The slope-launch equivalent uField, finite only for forward-cone fields.
  // Past 89° the consumer can't legitimately use this as a slope anyway; the
  // launchSurface tag tells callers to consult the vector geometry instead.
  const uFieldEquivalent = Math.abs(cosTheta) > 1e-9 ? -sinTheta / cosTheta : NaN;

  // Project the bounding-sphere ray (offset by yEP) back to z=0 so the
  // returned `yLaunch` keeps the same geometric meaning as the object-plane
  // path: "y where the chief ray crosses the z=0 plane." Pathological when
  // direction[2] ≈ 0, hence the cosTheta guard.
  const projectYLaunchToZ0 = (yEP: number): number => {
    if (Math.abs(direction[2]) < 1e-12) return NaN;
    const oy = baseOrigin[1] + yEP * perpY;
    const oz = baseOrigin[2] + yEP * perpZ;
    const t = (0 - oz) / direction[2];
    return oy + t * direction[1];
  };

  const S = stateSurfaces(focusT, zoomT, L, aberrationT);
  const stopIdx = L.stopIdx;
  const launchBoundT = baseLaunch.launchBoundT;

  const heightAtStop = (yEP: number): number | null => {
    const origin: Vector3 = [baseOrigin[0], baseOrigin[1] + yEP * perpY, baseOrigin[2] + yEP * perpZ];
    const result = traceExactSurfaceStackVector(
      { S, asphByIdx: L.asphByIdx, stopIdx: L.stopIdx },
      { origin, direction },
      { stopAt: stopIdx, launchBoundT, checkSemiDiameter: true },
    );
    if (result.failureReason !== null || result.clipped) return null;
    return result.y;
  };

  const launchAtYEP = (yEP: number): VectorFieldRayLaunch => ({
    ...baseLaunch,
    origin: [baseOrigin[0], baseOrigin[1] + yEP * perpY, baseOrigin[2] + yEP * perpZ],
  });

  // Paraxial seed for yEP: with origin already centered such that yEP=0 passes
  // through the paraxial EP center `(0, 0, epRatio)`, the paraxial chief ray
  // sits at yEP = 0 by construction. Bracket width mirrors the existing
  // object-plane formula `max(|paraxialYChief|·0.5, 0.5)`, converted to yEP
  // space via `· cos(θ)`. Equivalently: `0.5 · epRatio · |sin θ|`.
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
      return {
        yLaunch: projectYLaunchToZ0((lo + hi) / 2),
        uField: uFieldEquivalent,
        status: "converged",
        iterations: i + 1,
        launchSurface,
        vectorLaunch: launchAtYEP((lo + hi) / 2),
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
  const launch = projectionLaunchSlopeForField(L, fieldAngleDeg);
  const solve = solveChiefRay(fieldAngleDeg, focusT, zoomT, L, geometry, aberrationT, options);
  if (solve.vectorLaunch) {
    const trace = traceRayVector(solve.vectorLaunch, zPos, undefined, false, L, options);
    if (trace.clipped) return NaN;
    return trace.y + trace.u * thick(L.N - 1, focusT, zoomT, L, aberrationT);
  }
  const uField = launch.uField;
  const yChief = solve.yLaunch;
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
