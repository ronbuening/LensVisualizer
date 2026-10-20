/**
 * Chief-ray solves — object-plane and bounding-sphere launches on prepared geometry.
 *
 * Keeps the existing bracket scans and residual rules; memoization belongs to the geometry.
 */

import { prepareEngineTrace } from "../trace/rayAdapters.js";
import { traceToStopViaGeneralized } from "../trace/stopTrace.js";
import type { PreparedGeometry, Ray3, Vec3 } from "../types.js";
import { chiefRayCacheKey, getCachedChiefRaySolve, setCachedChiefRaySolve } from "./chiefRayCache.js";
import { computeBoundingSphereVectorFieldLaunch } from "./launch.js";
import type { FieldGeometryState, VectorFieldRayLaunch } from "./launch.js";
import { launchSurfaceForFieldDeg, projectionLaunchSlopeForField } from "./projection.js";
import type { LaunchSurface } from "./projection.js";
import type { ChromaticChannel } from "../../types/optics.js";
import { CHROMATIC_CHANNEL_WAVELENGTH_NM } from "../chromatic/channels.js";
import { reportChiefRayFallback } from "../diagnostics/chiefRay.js";
import type { TraceOptions } from "../trace/types.js";
import { computeFieldGeometry, prepareStateSurfacesReal } from "./geometry.js";

const CHIEF_RAY_MAX_ITERATIONS = 30;
const CHIEF_RAY_BRACKET_EPSILON = 1e-9;
const CHIEF_RAY_RESIDUAL_TOLERANCE = 1e-7;
const OBJECT_PLANE_BRACKET_SCAN_SAMPLES = 96;
const BOUNDING_SPHERE_BRACKET_SCAN_SAMPLES = 96;

/** Times the bracket around a seeded launch height grows (×4 each) before the full solve takes over. */
const SEEDED_CHIEF_RAY_BRACKET_ATTEMPTS = 4;

/**
 * Chief-ray solve result for one signed field angle.
 *
 * `yLaunch` is kept for scalar compatibility at z=0. Vector-aware callers should
 * prefer `vectorLaunch` when present, especially for fisheye/bounding-sphere fields.
 */
export interface ChiefRaySolveResult {
  yLaunch: number;
  uField: number;
  status: "converged" | "paraxial-fallback" | "bracket-failed" | "out-of-domain";
  iterations: number;
  launchSurface: LaunchSurface;
  vectorLaunch?: VectorFieldRayLaunch;
}

interface ChiefRayBracket {
  lo: number;
  hi: number;
  yLo: number;
  yHi: number;
}

/**
 * Refine the legacy bracket, retaining its first midpoint and selected half.
 * Illinois weighting prevents a secant endpoint from sticking. A failed secant
 * trace replays bisection from the original bracket to retain its fallback result.
 */
function refineChiefRayBracket(
  heightAtStop: (launch: number) => number | null,
  bracket: ChiefRayBracket,
  paraxialLaunch: number,
): Pick<ChiefRaySolveResult, "yLaunch" | "status" | "iterations"> {
  const refine = (secant: boolean): Pick<ChiefRaySolveResult, "yLaunch" | "status" | "iterations"> => {
    let { lo, hi, yLo: fLo, yHi: fHi } = bracket;
    let side = 0;
    for (let i = 0; i < CHIEF_RAY_MAX_ITERATIONS; i++) {
      const candidate = secant && i > 0 ? hi - (fHi * (hi - lo)) / (fHi - fLo) : NaN;
      const mid = candidate > lo && candidate < hi ? candidate : (lo + hi) / 2;
      const yMid = heightAtStop(mid);
      if (yMid === null) {
        if (secant && i > 0) return refine(false);
        return { yLaunch: paraxialLaunch, status: "paraxial-fallback", iterations: i + 1 };
      }
      if (Math.abs(yMid) < CHIEF_RAY_RESIDUAL_TOLERANCE) {
        return { yLaunch: mid, status: "converged", iterations: i + 1 };
      }
      if (yMid < 0 === fLo < 0) {
        lo = mid;
        fLo = yMid;
        if (secant && side === -1) fHi /= 2;
        side = -1;
      } else {
        hi = mid;
        fHi = yMid;
        if (secant && side === 1) fLo /= 2;
        side = 1;
      }
      if (Math.abs(hi - lo) < CHIEF_RAY_BRACKET_EPSILON) {
        return { yLaunch: (lo + hi) / 2, status: "converged", iterations: i + 1 };
      }
    }
    return { yLaunch: (lo + hi) / 2, status: "converged", iterations: CHIEF_RAY_MAX_ITERATIONS };
  };
  return refine(true);
}

/**
 * Solve the launch height that makes a chief ray pass through the stop center.
 *
 * Results are cached per prepared geometry because distortion, vignetting, and
 * off-axis analyses repeatedly ask for the same field solves.
 *
 * @param state - prepared geometry for the current controls
 * @param fieldAngleDeg - signed field angle in degrees
 * @param geometry - optional precomputed field geometry
 * @returns chief-ray solve result including fallback status and launch surface
 */
export function solveChiefRay(
  state: PreparedGeometry,
  { fieldAngleDeg, geometry, channel }: ChiefRayRequest,
): ChiefRaySolveResult {
  const cacheKey = chiefRayCacheKey(
    fieldAngleDeg,
    launchSurfaceForFieldDeg(fieldAngleDeg, state.lens.projection.config),
    channel,
  );
  const cached = getCachedChiefRaySolve(state, cacheKey);
  if (cached) return cached;

  const result = computeChiefRaySolve(state, { fieldAngleDeg, geometry, channel });
  setCachedChiefRaySolve(state, cacheKey, result);
  reportChiefRayFallback(state, fieldAngleDeg, result.status);
  return result;
}

/**
 * Solve a chief ray by sliding a vector launch across the entrance-pupil tangent.
 *
 * This handles fisheye/past-cap fields where a scalar object-plane slope would hit
 * tan(theta)'s singularity before the physical field edge.
 *
 * @param state - prepared geometry for the current controls
 * @param fieldAngleDeg - signed meridional field angle in degrees
 * @param geometry - optional current-state field geometry
 * @returns vector chief-ray solve result with projected yLaunch for legacy callers
 */
export function solveChiefRayBoundingSphere(
  state: PreparedGeometry,
  { fieldAngleDeg, geometry, channel }: ChiefRayRequest,
): ChiefRaySolveResult {
  const launchSurface: LaunchSurface = "bounding-sphere";
  const geom = geometry ?? computeFieldGeometry(state);
  const epZ = geom.epRatio;
  const baseLaunch = computeBoundingSphereVectorFieldLaunch(state, {
    geometry: { ...geom, epRatio: epZ },
    fieldAngleXDeg: 0,
    fieldAngleYDeg: fieldAngleDeg,
  });
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
  const stopIndex = state.lens.stop.surfaceIndex;
  const launchBoundT = baseLaunch.launchBoundT;

  /* yLaunch remains a legacy scalar at z=0. Vector callers should consume
   * vectorLaunch directly; projection keeps logs and old displays comparable. */
  const projectYLaunchToZ0 = (yEP: number): number => {
    if (Math.abs(direction[2]) < 1e-12) return NaN;
    const oy = baseOrigin[1] + yEP * perpY;
    const oz = baseOrigin[2] + yEP * perpZ;
    const t = (0 - oz) / direction[2];
    return oy + t * direction[1];
  };

  const stopOptions = { launchBoundT, checkSemiDiameter: true, ...channelTraceOptions(state, channel) };
  const traceStop = prepareEngineTrace(state, { capture: "terminal", stopAt: stopIndex, ...stopOptions });
  const heightAtStop = (yEP: number): number | null => {
    const origin: Vec3 = [baseOrigin[0], baseOrigin[1] + yEP * perpY, baseOrigin[2] + yEP * perpZ];
    const ray: Ray3 = { origin, direction };
    if (state.lens.flags.isFoldedOptics) {
      const result = traceToStopViaGeneralized(state, ray, stopIndex, stopOptions);
      if (!result.found) return null;
      return result.y;
    }
    const result = traceStop(ray);
    if (result.failureReason !== null || result.status !== "ok") return null;
    return result.y;
  };

  const launchAtYEP = (yEP: number): VectorFieldRayLaunch => ({
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

  /* The solve variable yEP moves the launch origin along the field-radial pupil
   * axis. A sign change in stop height brackets the true chief ray. */
  const bracketHalf = Math.max(0.5 * Math.abs(geom.epRatio * sinTheta), 0.5);
  let bracket: ChiefRayBracket | null = null;
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
        bracket = { lo: prev.yEP, hi: yEP, yLo: prev.height, yHi: height };
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

  const solved = refineChiefRayBracket(heightAtStop, bracket, paraxialYEP);
  return {
    ...solved,
    yLaunch: projectYLaunchToZ0(solved.yLaunch),
    uField: uFieldEquivalent,
    launchSurface,
    vectorLaunch: launchAtYEP(solved.yLaunch),
  };
}

/**
 * Solve without memoization for the analysis field walk's probes.
 * @param state - prepared geometry for the current controls
 * @param request - signed field, optional pupil seed and spectral channel
 * @returns solved launch and its status
 */
export function computeChiefRaySolve(
  state: PreparedGeometry,
  { fieldAngleDeg, geometry, channel }: ChiefRayRequest,
): ChiefRaySolveResult {
  const launchSurface = launchSurfaceForFieldDeg(fieldAngleDeg, state.lens.projection.config);
  if (launchSurface === "bounding-sphere") {
    return solveChiefRayBoundingSphere(state, { fieldAngleDeg, geometry, channel });
  }
  const launch = projectionLaunchSlopeForField({ projection: state.lens.projection.config }, fieldAngleDeg);
  if (launch.status === "out-of-domain") {
    return { yLaunch: NaN, uField: NaN, status: "out-of-domain", iterations: 0, launchSurface };
  }

  const geom = geometry ?? computeFieldGeometry(state);
  const uField = launch.uField;
  const paraxialYChief = -geom.epRatio * uField;
  if (Math.abs(fieldAngleDeg) < 1) {
    return { yLaunch: paraxialYChief, uField, status: "converged", iterations: 0, launchSurface };
  }

  const stopIndex = state.lens.stop.surfaceIndex;
  const traceStop = prepareStateSurfacesReal(state, { stopAt: stopIndex, ...channelTraceOptions(state, channel) });
  const heightAtStop = (yLaunch: number): number | null => {
    const result = traceStop(yLaunch, uField);
    return Number.isFinite(result.y) ? result.y : null;
  };

  /* Object-plane solves vary launch height until the exact stop trace crosses
   * y=0. The paraxial chief ray is only the seed, not the final answer. */
  const bracketHalf = Math.max(Math.abs(paraxialYChief) * 0.5, 0.5);
  let lo = paraxialYChief - bracketHalf;
  let hi = paraxialYChief + bracketHalf;
  const yLo = heightAtStop(lo);
  const yHi = heightAtStop(hi);
  let fLo: number;
  let fHi: number;
  if (yLo !== null && yHi !== null && yLo * yHi <= 0) {
    fLo = yLo;
    fHi = yHi;
  } else {
    let bracket: ChiefRayBracket | null = null;
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
          bracket = { lo: prev.yLaunch, hi: yLaunch, yLo: prev.height, yHi: height };
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
    fHi = bracket.yHi;
  }

  return {
    ...refineChiefRayBracket(heightAtStop, { lo, hi, yLo: fLo, yHi: fHi }, paraxialYChief),
    uField,
    launchSurface,
  };
}

/**
 * Re-solve an object-plane chief ray next to a converged neighbour.
 *
 * Launch height scales almost linearly with launch slope, so the neighbour predicts the root closely: a narrow bracket
 * around that prediction converges by Illinois regula falsi in a handful of stop traces, where the full solve scans
 * outward from the paraxial seed. The field walk probes a sequence of nearby fields, so this carries most of its cost.
 *
 * @param state - prepared geometry for the current controls
 * @param fieldAngleDeg - field angle to solve
 * @param state - prepared optical state for the current controls
 * @param seed - converged chief ray at a neighbouring field
 * @returns converged solve, or null when no bracket forms and the caller should run the full solve
 */
export function solveChiefRayFromSeed(
  state: PreparedGeometry,
  { fieldAngleDeg, seed }: { fieldAngleDeg: number; seed: ChiefRaySolveResult },
): ChiefRaySolveResult | null {
  if (
    Math.abs(fieldAngleDeg) < 1 ||
    launchSurfaceForFieldDeg(fieldAngleDeg, state.lens.projection.config) !== "object-plane"
  )
    return null;
  const launch = projectionLaunchSlopeForField({ projection: state.lens.projection.config }, fieldAngleDeg);
  if (launch.status === "out-of-domain" || !(Math.abs(seed.uField) > 0)) return null;
  const uField = launch.uField;
  const stopIndex = state.lens.stop.surfaceIndex;
  const traceStop = prepareStateSurfacesReal(state, { stopAt: stopIndex });
  const heightAtStop = (yLaunch: number): number | null => {
    const result = traceStop(yLaunch, uField);
    return Number.isFinite(result.y) ? result.y : null;
  };
  const converged = (yLaunch: number, iterations: number): ChiefRaySolveResult => ({
    yLaunch,
    uField,
    status: "converged",
    iterations,
    launchSurface: "object-plane",
  });

  const guess = (seed.yLaunch * uField) / seed.uField;
  let half = Math.max(Math.abs(guess - seed.yLaunch) * 0.25, 1e-3);
  for (let attempt = 0; attempt < SEEDED_CHIEF_RAY_BRACKET_ATTEMPTS; attempt++, half *= 4) {
    let lo = guess - half;
    let hi = guess + half;
    let fLo = heightAtStop(lo);
    let fHi = heightAtStop(hi);
    if (fLo === null || fHi === null) return null;
    if (Math.abs(fLo) < CHIEF_RAY_RESIDUAL_TOLERANCE) return converged(lo, 0);
    if (Math.abs(fHi) < CHIEF_RAY_RESIDUAL_TOLERANCE) return converged(hi, 0);
    if (fLo < 0 === fHi < 0) continue;
    let side = 0;
    for (let i = 0; i < CHIEF_RAY_MAX_ITERATIONS; i++) {
      const mid = hi - (fHi * (hi - lo)) / (fHi - fLo);
      const fMid = heightAtStop(mid);
      if (fMid === null) return null;
      if (Math.abs(fMid) < CHIEF_RAY_RESIDUAL_TOLERANCE) return converged(mid, i + 1);
      if (fMid < 0 === fLo < 0) {
        lo = mid;
        fLo = fMid;
        if (side === -1) fHi /= 2;
        side = -1;
      } else {
        hi = mid;
        fHi = fMid;
        if (side === 1) fLo /= 2;
        side = 1;
      }
      if (Math.abs(hi - lo) < CHIEF_RAY_BRACKET_EPSILON) return converged((lo + hi) / 2, i + 1);
    }
    return null;
  }
  return null;
}

/**
 * Whether the full chief-ray solve, the one the analyses use, converges on an object-plane launch at this field.
 *
 * @param state - prepared geometry for the current controls
 * @param fieldAngleDeg - field angle in degrees
 * @param geometry - raw field geometry for this state
 * @returns true when the solve converges without a vector launch
 */
export function solvesChiefRay(
  state: PreparedGeometry,
  { fieldAngleDeg, geometry }: { fieldAngleDeg: number; geometry: FieldGeometryState },
): boolean {
  const solve = computeChiefRaySolve(state, { fieldAngleDeg, geometry });
  return solve.status === "converged" && !solve.vectorLaunch;
}

/** Controls that vary between chief solves on one prepared geometry. */
export interface ChiefRayRequest {
  fieldAngleDeg: number;
  geometry?: FieldGeometryState;
  channel?: ChromaticChannel;
}

function channelTraceOptions(state: PreparedGeometry, channel?: ChromaticChannel): TraceOptions {
  return channel
    ? {
        indexAtSurface: (i, nd) => state.lens.dispersion[i]?.indexAt(channel) ?? nd,
        wavelengthNm: CHROMATIC_CHANNEL_WAVELENGTH_NM[channel],
      }
    : {};
}
