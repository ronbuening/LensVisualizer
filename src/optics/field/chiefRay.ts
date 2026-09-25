/**
 * Chief-ray and field geometry solver — projection-aware launch, pupil, and image-height helpers.
 *
 * Owns the state-aware bridge between RuntimeLens controls and exact tracing, including fisheye
 * bounding-sphere launches and fallback diagnostics.
 */

import { wideOpenStopAtZoom } from "../apertureStop.js";

import type { ParaxialTraceResult, RayTraceResult, RuntimeLens } from "../../types/optics.js";
import { resolveImageFormatMetadata } from "../../utils/catalog/lensTaxonomy.js";
import { normalizeRuntimeLens } from "../prescription/normalizeLensData.js";
import { prepareState } from "../state/prepareState.js";
import type { Plane3, PreparedOpticalState, Ray3, Vec3 } from "../types.js";
import { traceParaxialSurfaces2 } from "../math/paraxial.js";
import { traceEngineRay2, traceRay2, traceRayVector2 } from "../trace/rayAdapters.js";
import { traceToStopViaGeneralized2 } from "../trace/stopTrace.js";
import type { TraceOptions } from "../trace/types.js";
import { obstructionAwareRayFractionsForDensity } from "../raySampling.js";
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
/** Step bounds, in degrees, for walking the real chief ray out toward the format corner. */
const ANALYSIS_FIELD_MIN_STEP_DEG = 0.25;
const ANALYSIS_FIELD_MAX_STEP_DEG = 5;
/** Aim a little past the linear corner prediction: image height grows faster than linearly with field. */
const ANALYSIS_FIELD_STEP_OVERSHOOT = 1.1;
/** Bisections that settle where a clear aperture first clips the real chief ray (~0.02° on a 5° step). */
const ANALYSIS_FIELD_CLIP_BISECTIONS = 8;
/** Regula falsi limit and image-height tolerance (mm) for the corner field found by the walk. */
const ANALYSIS_FIELD_CORNER_ITERATIONS = 12;
const ANALYSIS_FIELD_CORNER_TOLERANCE_MM = 1e-4;
/** Margin under the proportional estimate when stepping down to bracket the corner from a field past it. */
const CORNER_BRACKET_STEP_DOWN = 0.98;
/** Times the bracket around a seeded launch height grows (×4 each) before the full solve takes over. */
const SEEDED_CHIEF_RAY_BRACKET_ATTEMPTS = 4;

/** Entrance-pupil geometry for current focus/zoom state. */
export interface EntrancePupilState2 {
  epSD: number;
  yRatio: number;
  b: number;
  epRatio: number;
}

/**
 * Chief-ray solve result for one signed field angle.
 *
 * `yLaunch` is kept for scalar compatibility at z=0. Vector-aware callers should
 * prefer `vectorLaunch` when present, especially for fisheye/bounding-sphere fields.
 */
export interface ChiefRaySolveResult2 {
  yLaunch: number;
  uField: number;
  status: "converged" | "paraxial-fallback" | "bracket-failed" | "out-of-domain";
  iterations: number;
  launchSurface: LaunchSurface2;
  vectorLaunch?: VectorFieldRayLaunch2;
}

export type { FieldGeometryState2, OffsetVectorFieldRay2, VectorFieldRayLaunch2 };

/**
 * Compute current-state field geometry from paraxial and real stop traces.
 *
 * The returned ratios express how marginal and chief rays reach the stop and are
 * used to seed chief-ray solving for the current focus/zoom/aberration state.
 *
 * @param focusT - normalized focus position, 0 at infinity
 * @param zoomT - normalized zoom position, 0 at wide
 * @param L - runtime lens prescription
 * @param aberrationT - normalized aberration control position
 * @returns field half-angle and entrance-pupil ratios for this state
 */
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

  /* The paraxial aperture estimate can overstate the real field. Bisect it down
   * until an exact chief ray reaches the image side without clipping. */
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

/**
 * Bound field geometry by the real chief ray and the declared image format.
 *
 * `computeFieldGeometryAtState2` returns a paraxial vignetting estimate checked against a ray aimed at the paraxial
 * entrance pupil. Pupil aberration and distortion move real chief rays away from both, in either direction, so the
 * analysis field follows the chief ray solved through the stop centre instead: it reaches the format corner unless
 * a clear aperture clips that chief ray first. Declared-coverage projections and folded paths keep the raw field,
 * capped to the format. A missing format is treated as full-frame.
 *
 * @param focusT - normalized focus position
 * @param zoomT - normalized zoom position
 * @param L - runtime lens prescription
 * @param aberrationT - normalized aberration control position
 * @returns field geometry whose half-field ends at the format corner or at the real chief ray's clipping field
 */
export function computeAnalysisFieldGeometryAtState2(
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  aberrationT = 0,
): FieldGeometryState2 {
  const geometry = computeFieldGeometryAtState2(focusT, zoomT, L, aberrationT);
  if (!Number.isFinite(geometry.halfFieldDeg) || geometry.halfFieldDeg <= 0 || L.N < 1) return geometry;

  const format = resolveImageFormatMetadata(L.data?.imageFormat);
  const maxImageHeight = (L.data?.imageCircleMm ?? format.diagonalMm) / 2;
  if (!Number.isFinite(maxImageHeight) || maxImageHeight <= 0) return geometry;

  const followsRealChiefRay =
    !L.isFoldedOptics &&
    !isFisheyeProjection2(L.projection) &&
    rectilinearProjectionMaxTraceField2(L.projection) === undefined;
  let limit = followsRealChiefRay
    ? realChiefRayFieldLimit2(focusT, zoomT, L, geometry, aberrationT, maxImageHeight, true)
    : null;
  /* Seeded probes can converge past the field where the full solve the analyses use gives up; walk again unseeded. */
  if (limit?.settled && !solvesChiefRay2(limit.fieldDeg, focusT, zoomT, L, geometry, aberrationT)) {
    limit = realChiefRayFieldLimit2(focusT, zoomT, L, geometry, aberrationT, maxImageHeight, false);
  }
  if (limit?.settled) return { ...geometry, halfFieldDeg: limit.fieldDeg };
  const bounded = limit ? { ...geometry, halfFieldDeg: limit.fieldDeg } : geometry;

  const zPos = zPositionsForState(focusT, zoomT, L, aberrationT);
  const edgeImageHeight = chiefRayImageHeightAccurate2(
    bounded.halfFieldDeg,
    zPos,
    focusT,
    zoomT,
    L,
    bounded,
    aberrationT,
  );
  if (!Number.isFinite(edgeImageHeight) || Math.abs(edgeImageHeight) <= maxImageHeight + 1e-9) return bounded;

  const formatHalfFieldDeg = solveFieldAngleForImageHeightAccurate2(
    maxImageHeight,
    zPos,
    focusT,
    zoomT,
    L,
    bounded,
    aberrationT,
  );
  if (formatHalfFieldDeg === null || !Number.isFinite(formatHalfFieldDeg)) return bounded;

  return { ...bounded, halfFieldDeg: Math.min(bounded.halfFieldDeg, Math.max(0, formatHalfFieldDeg)) };
}

interface RealChiefRayProbe2 {
  clears: boolean;
  height: number;
}

/**
 * Walk the real chief ray from the raw half-field toward the format corner.
 *
 * An edge whose chief ray clips steps down until it clears; a clear edge short of the corner steps up, and one past it
 * steps down. Where a clear aperture starts clipping is settled by bisection, and the corner, once bracketed by clear
 * fields, by regula falsi on image height. Past the field where image height stops growing, larger fields fold back
 * inside the image and add nothing. Probes after the first re-solve from their converged neighbour.
 *
 * @param focusT - normalized focus position
 * @param zoomT - normalized zoom position
 * @param L - runtime lens prescription
 * @param geometry - raw field geometry for this state
 * @param aberrationT - normalized aberration control position
 * @param cornerHeight - format corner image height in mm
 * @param seeded - re-solve each probe from its converged neighbour instead of running the full solve every time
 * @returns `settled` with the analysis half-field, or unsettled with a clear field already past the corner that the
 *   caller caps to the format; null when no clear chief ray is found
 */
function realChiefRayFieldLimit2(
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry: FieldGeometryState2,
  aberrationT: number,
  cornerHeight: number,
  seeded: boolean,
): { fieldDeg: number; settled: boolean } | null {
  const state = prepareState(normalizeRuntimeLens(L), focusT, zoomT, aberrationT);
  const imageTransfer = state.surfaces[state.surfaces.length - 1]?.d ?? 0;
  let seed: ChiefRaySolveResult2 | null = null;
  const probe = (deg: number): RealChiefRayProbe2 | null => {
    const solve =
      (seeded && seed && solveChiefRayFromSeed2(deg, state, L, seed)) ||
      computeChiefRaySolve2(deg, focusT, zoomT, L, geometry, aberrationT);
    if (solve.status !== "converged" || solve.vectorLaunch) return null;
    seed = solve;
    const trace = traceStateSurfacesReal2(state, solve.yLaunch, solve.uField, { checkSemiDiameter: true });
    if (!Number.isFinite(trace.y) || !Number.isFinite(trace.u)) return null;
    return { clears: !trace.clipped, height: Math.abs(trace.y + trace.u * imageTransfer) };
  };
  const clears = (sample: RealChiefRayProbe2 | null): sample is RealChiefRayProbe2 => sample?.clears === true;

  /* Image height is short of the corner at lo and past it at hi, both clear: Illinois regula falsi. */
  const cornerField = (lo: number, loHeight: number, hi: number, hiHeight: number) => {
    let fLo = loHeight - cornerHeight;
    let fHi = hiHeight - cornerHeight;
    let side = 0;
    for (let i = 0; i < ANALYSIS_FIELD_CORNER_ITERATIONS && hi - lo > 1e-9; i++) {
      const mid = hi - (fHi * (hi - lo)) / (fHi - fLo);
      const sample = probe(mid);
      if (!clears(sample)) break;
      const fMid = sample.height - cornerHeight;
      if (Math.abs(fMid) < ANALYSIS_FIELD_CORNER_TOLERANCE_MM) return { fieldDeg: mid, settled: true };
      if (fMid < 0) {
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
    }
    return { fieldDeg: lo, settled: true };
  };

  /* Clear chief ray at lo, none at hi: settle where a clear aperture starts clipping it. */
  const lastClear = (lo: number, loSample: RealChiefRayProbe2, hi: number) => {
    let sample = loSample;
    for (let i = 0; i < ANALYSIS_FIELD_CLIP_BISECTIONS; i++) {
      const mid = (lo + hi) / 2;
      const midSample = probe(mid);
      if (clears(midSample)) {
        lo = mid;
        sample = midSample;
      } else {
        hi = mid;
      }
    }
    return { fieldDeg: lo, sample };
  };

  /* Clear chief ray past the corner at hi: step down in proportion to image height until a clear field falls short of
   * the corner, then settle the corner between them. Unsettled when a step clips, which leaves the caller's cap. */
  const cornerBelow = (hi: number, hiSample: RealChiefRayProbe2) => {
    for (let i = 0; i < ANALYSIS_FIELD_CORNER_ITERATIONS && hi > 0; i++) {
      const lo = hi * (cornerHeight / hiSample.height) * CORNER_BRACKET_STEP_DOWN;
      const loSample = probe(lo);
      if (!clears(loSample)) break;
      if (loSample.height < cornerHeight) return cornerField(lo, loSample.height, hi, hiSample.height);
      hi = lo;
      hiSample = loSample;
    }
    return { fieldDeg: hi, settled: false };
  };

  let fieldDeg = geometry.halfFieldDeg;
  let sample = probe(fieldDeg);
  if (!clears(sample)) {
    let hi = fieldDeg;
    let step = ANALYSIS_FIELD_MIN_STEP_DEG;
    let lo = Math.max(0, hi - step);
    let loSample = probe(lo);
    while (!clears(loSample) && lo > 0) {
      hi = lo;
      step *= 2;
      lo = Math.max(0, lo - step);
      loSample = probe(lo);
    }
    if (!clears(loSample)) return null;
    const clip = lastClear(lo, loSample, hi);
    return clip.sample.height < cornerHeight
      ? { fieldDeg: clip.fieldDeg, settled: true }
      : cornerBelow(clip.fieldDeg, clip.sample);
  }
  if (sample.height >= cornerHeight) return cornerBelow(fieldDeg, sample);

  const ceilingDeg = MAX_FIELD_LAUNCH_DEG - 1e-3;
  let heightSlope = sample.height / fieldDeg;
  while (fieldDeg < ceilingDeg) {
    const predictedDeg =
      heightSlope > 0 ? (ANALYSIS_FIELD_STEP_OVERSHOOT * (cornerHeight - sample.height)) / heightSlope : Infinity;
    const nextDeg = Math.min(
      fieldDeg + Math.min(Math.max(predictedDeg, ANALYSIS_FIELD_MIN_STEP_DEG), ANALYSIS_FIELD_MAX_STEP_DEG),
      ceilingDeg,
    );
    const next = probe(nextDeg);
    if (!clears(next)) {
      const clip = lastClear(fieldDeg, sample, nextDeg);
      return clip.sample.height >= cornerHeight
        ? cornerField(fieldDeg, sample.height, clip.fieldDeg, clip.sample.height)
        : { fieldDeg: clip.fieldDeg, settled: true };
    }
    if (next.height >= cornerHeight) return cornerField(fieldDeg, sample.height, nextDeg, next.height);
    if (next.height <= sample.height) return { fieldDeg, settled: true };
    heightSlope = (next.height - sample.height) / (nextDeg - fieldDeg);
    fieldDeg = nextDeg;
    sample = next;
  }
  return { fieldDeg, settled: true };
}

/**
 * Whether the full chief-ray solve, the one the analyses use, converges on an object-plane launch at this field.
 *
 * @param fieldAngleDeg - field angle in degrees
 * @param focusT - normalized focus position
 * @param zoomT - normalized zoom position
 * @param L - runtime lens prescription
 * @param geometry - raw field geometry for this state
 * @param aberrationT - normalized aberration control position
 * @returns true when the solve converges without a vector launch
 */
function solvesChiefRay2(
  fieldAngleDeg: number,
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry: FieldGeometryState2,
  aberrationT: number,
): boolean {
  const solve = computeChiefRaySolve2(fieldAngleDeg, focusT, zoomT, L, geometry, aberrationT);
  return solve.status === "converged" && !solve.vectorLaunch;
}

/**
 * Re-solve an object-plane chief ray next to a converged neighbour.
 *
 * Launch height scales almost linearly with launch slope, so the neighbour predicts the root closely: a narrow bracket
 * around that prediction converges by Illinois regula falsi in a handful of stop traces, where the full solve scans
 * outward from the paraxial seed. The field walk probes a sequence of nearby fields, so this carries most of its cost.
 *
 * @param fieldAngleDeg - field angle to solve
 * @param state - prepared optical state for the current controls
 * @param L - runtime lens prescription
 * @param seed - converged chief ray at a neighbouring field
 * @returns converged solve, or null when no bracket forms and the caller should run the full solve
 */
function solveChiefRayFromSeed2(
  fieldAngleDeg: number,
  state: PreparedOpticalState,
  L: RuntimeLens,
  seed: ChiefRaySolveResult2,
): ChiefRaySolveResult2 | null {
  if (Math.abs(fieldAngleDeg) < 1 || launchSurfaceForFieldDeg2(fieldAngleDeg, L.projection) !== "object-plane")
    return null;
  const launch = projectionLaunchSlopeForField2(L, fieldAngleDeg);
  if (launch.status === "out-of-domain" || !(Math.abs(seed.uField) > 0)) return null;
  const uField = launch.uField;
  const stopIndex = state.lens.stop.surfaceIndex;
  const heightAtStop = (yLaunch: number): number | null => {
    const result = traceStateSurfacesReal2(state, yLaunch, uField, { stopAt: stopIndex });
    return Number.isFinite(result.y) ? result.y : null;
  };
  const converged = (yLaunch: number, iterations: number): ChiefRaySolveResult2 => ({
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
 * Trace the chief ray for a meridional field angle using current-state geometry.
 *
 * @param fieldAngleDeg - signed field angle in degrees
 * @param zPos - current surface vertex positions in mm
 * @param focusT - normalized focus position
 * @param zoomT - normalized zoom position
 * @param L - runtime lens prescription
 * @param geometry - optional precomputed field geometry
 * @param aberrationT - normalized aberration control position
 * @returns runtime ray trace result for the chief ray
 */
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

/**
 * Trace a paraxial reference ray through the current prepared state.
 *
 * @param y0 - launch height in mm
 * @param u0 - paraxial launch slope
 * @param focusT - normalized focus position
 * @param zoomT - normalized zoom position
 * @param L - runtime lens prescription
 * @returns paraxial image-side height and slope before final transfer
 */
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

/**
 * Compute chief-ray image height with the scalar slope-launch solver.
 *
 * @param fieldAngleDeg - signed field angle in degrees
 * @param zPos - current surface vertex positions in mm
 * @param focusT - normalized focus position
 * @param zoomT - normalized zoom position
 * @param L - runtime lens prescription
 * @param geometry - optional precomputed field geometry
 * @param aberrationT - normalized aberration control position
 * @returns signed image height in mm, or NaN when tracing fails
 */
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

/**
 * Solve the launch height that makes a chief ray pass through the stop center.
 *
 * Results are cached per RuntimeLens and state because distortion, vignetting, and
 * off-axis analyses repeatedly ask for the same field solves.
 *
 * @param fieldAngleDeg - signed field angle in degrees
 * @param focusT - normalized focus position
 * @param zoomT - normalized zoom position
 * @param L - runtime lens prescription
 * @param geometry - optional precomputed field geometry
 * @param aberrationT - normalized aberration control position
 * @returns chief-ray solve result including fallback status and launch surface
 */
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

/**
 * Solve a chief ray by sliding a vector launch across the entrance-pupil tangent.
 *
 * This handles fisheye/past-cap fields where a scalar object-plane slope would hit
 * tan(theta)'s singularity before the physical field edge.
 *
 * @param fieldAngleDeg - signed meridional field angle in degrees
 * @param focusT - normalized focus position
 * @param zoomT - normalized zoom position
 * @param L - runtime lens prescription
 * @param geometry - optional current-state field geometry
 * @param aberrationT - normalized aberration control position
 * @returns vector chief-ray solve result with projected yLaunch for legacy callers
 */
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

  /* yLaunch remains a legacy scalar at z=0. Vector callers should consume
   * vectorLaunch directly; projection keeps logs and old displays comparable. */
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

  /* The solve variable yEP moves the launch origin along the field-radial pupil
   * axis. A sign change in stop height brackets the true chief ray. */
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

/**
 * Compute chief-ray image height using scalar or vector launch as required.
 *
 * @param fieldAngleDeg - signed field angle in degrees
 * @param zPos - current surface vertex positions in mm
 * @param focusT - normalized focus position
 * @param zoomT - normalized zoom position
 * @param L - runtime lens prescription
 * @param geometry - optional precomputed field geometry
 * @param aberrationT - normalized aberration control position
 * @returns signed image height in mm, or NaN when the trace clips
 */
export function chiefRayImageHeightAccurate2(
  fieldAngleDeg: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry?: FieldGeometryState2,
  aberrationT = 0,
): number {
  return chiefRayImageHeightAccurateWithTransfer2(
    fieldAngleDeg,
    zPos,
    focusT,
    zoomT,
    L,
    geometry,
    aberrationT,
    lastThicknessAtState(focusT, zoomT, L, aberrationT),
  );
}

function chiefRayImageHeightAccurateWithTransfer2(
  fieldAngleDeg: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry: FieldGeometryState2 | undefined,
  aberrationT: number,
  imagePlaneTransfer: number,
): number {
  const launch = projectionLaunchSlopeForField2(L, fieldAngleDeg);
  const solve = solveChiefRay2(fieldAngleDeg, focusT, zoomT, L, geometry, aberrationT);
  if (solve.vectorLaunch) {
    const trace = traceRayVector2(solve.vectorLaunch, zPos, undefined, false, L, focusT, zoomT, aberrationT);
    if (trace.clipped) return NaN;
    if (L.isFoldedOptics && trace.reachedImagePlane) return foldedRayImagePlaneCoordinate2(trace, L);
    return trace.y + trace.u * imagePlaneTransfer;
  }
  const trace = traceRay2(solve.yLaunch, launch.uField, zPos, focusT, zoomT, undefined, true, L, aberrationT);
  if (L.isFoldedOptics && trace.reachedImagePlane) return foldedRayImagePlaneCoordinate2(trace, L);
  return trace.y + trace.u * imagePlaneTransfer;
}

/**
 * Invert traced image height to field angle using the accurate chief-ray path.
 *
 * @param targetImageHeight - unsigned or signed image height in mm
 * @param zPos - current surface vertex positions in mm
 * @param focusT - normalized focus position
 * @param zoomT - normalized zoom position
 * @param L - runtime lens prescription
 * @param geometry - optional precomputed field geometry
 * @param aberrationT - normalized aberration control position
 * @returns field angle in degrees, or null when no monotonic bracket is found
 */
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

/**
 * Invert several traced image heights against one shared accurate chief-ray field table.
 *
 * This preserves the `solveFieldAngleForImageHeightAccurate2` bisection path
 * but avoids rebuilding the same bracket scan for every target height.
 */
export function solveFieldAnglesForImageHeightsAccurate2(
  targetImageHeights: readonly number[],
  zPos: number[],
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry?: FieldGeometryState2,
  aberrationT = 0,
): Array<number | null> {
  const geom = geometry ?? computeFieldGeometryAtState2(focusT, zoomT, L, aberrationT);
  if (!Number.isFinite(geom.halfFieldDeg) || geom.halfFieldDeg <= 0) {
    return targetImageHeights.map(solveTrivialImageHeightTarget2);
  }

  const lookup = buildAccurateFieldHeightLookup2(zPos, focusT, zoomT, L, geom, aberrationT);
  return targetImageHeights.map((targetImageHeight) => solveFieldAngleForImageHeightLookup2(targetImageHeight, lookup));
}

interface AccurateFieldHeightLookup2 {
  segmentAngles: number[];
  segmentHeights: number[];
  imageHeightAt: (fieldAngleDeg: number) => number;
}

function buildAccurateFieldHeightLookup2(
  zPos: number[],
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry: FieldGeometryState2,
  aberrationT: number,
): AccurateFieldHeightLookup2 {
  const imagePlaneTransfer = lastThicknessAtState(focusT, zoomT, L, aberrationT);
  const imageHeightAt = (fieldAngleDeg: number): number =>
    chiefRayImageHeightAccurateWithTransfer2(
      fieldAngleDeg,
      zPos,
      focusT,
      zoomT,
      L,
      geometry,
      aberrationT,
      imagePlaneTransfer,
    );
  const bracketSegments = Math.max(Math.ceil(geometry.halfFieldDeg), 20);
  const segmentAngles: number[] = [];
  const segmentHeights: number[] = [];

  for (let i = 0; i <= bracketSegments; i++) {
    const angleDeg = (i / bracketSegments) * geometry.halfFieldDeg;
    const height = imageHeightAt(angleDeg);
    if (!Number.isFinite(height)) continue;
    segmentAngles.push(angleDeg);
    segmentHeights.push(height);
  }

  return { segmentAngles, segmentHeights, imageHeightAt };
}

function solveFieldAngleForImageHeightLookup2(
  targetImageHeight: number,
  lookup: AccurateFieldHeightLookup2,
): number | null {
  const trivial = solveTrivialImageHeightTarget2(targetImageHeight);
  if (trivial !== null) return trivial;

  const target = -Math.abs(targetImageHeight);
  let lo = -1;
  let hi = -1;
  for (let i = 0; i < lookup.segmentAngles.length - 1; i++) {
    const hLo = lookup.segmentHeights[i];
    const hHi = lookup.segmentHeights[i + 1];
    if ((hLo >= target && hHi <= target) || (hLo <= target && hHi >= target)) {
      lo = i;
      hi = i + 1;
      break;
    }
  }
  if (lo < 0) return null;

  let loAngle = lookup.segmentAngles[lo];
  let hiAngle = lookup.segmentAngles[hi];
  let loHeight = lookup.segmentHeights[lo];
  for (let i = 0; i < 40; i++) {
    const mid = (loAngle + hiAngle) / 2;
    const yMid = lookup.imageHeightAt(mid);
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

function solveTrivialImageHeightTarget2(targetImageHeight: number): number | null {
  return !Number.isFinite(targetImageHeight) || Math.abs(targetImageHeight) < 1e-12 ? 0 : null;
}

/**
 * Invert image height to field angle using the scalar chief-ray approximation.
 *
 * @param targetImageHeight - unsigned or signed image height in mm
 * @param zPos - current surface vertex positions in mm
 * @param focusT - normalized focus position
 * @param zoomT - normalized zoom position
 * @param L - runtime lens prescription
 * @param geometry - optional precomputed field geometry
 * @returns field angle in degrees, or null when the target is outside the field
 */
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

/**
 * Compute entrance-pupil diameter and ratios for the current state.
 *
 * @param stopSD - current physical stop semi-diameter in mm
 * @param focusT - normalized focus position
 * @param zoomT - normalized zoom position
 * @param L - runtime lens prescription
 * @param geometry - optional precomputed field geometry
 * @param aberrationT - normalized aberration control position
 * @returns entrance-pupil state used by UI readouts and analysis
 */
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

/**
 * Estimate focus-dependent conjugate correction from exact real-ray sensitivity.
 *
 * @param focusT - normalized focus position
 * @param zoomT - normalized zoom position
 * @param L - runtime lens prescription
 * @param aberrationT - normalized aberration control position
 * @returns relative conjugate correction, zero at infinity focus
 */
export function conjugateK2(focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0): number {
  if (focusT < FOCUS_INFINITY_THRESHOLD) return 0;
  const du = 1e-5;
  const currentEP = entrancePupilAtState2(wideOpenStopAtZoom(zoomT, L), focusT, zoomT, L, undefined, aberrationT).epSD;
  const infinityEP = entrancePupilAtState2(wideOpenStopAtZoom(zoomT, L), 0, zoomT, L, undefined, 0).epSD;
  const yRefCurrent = currentEP * conjugateReferencePupilFraction2(L, currentEP);
  const yRefInfinity = infinityEP * conjugateReferencePupilFraction2(L, infinityEP);
  const kt = realK2(yRefCurrent, du, focusT, zoomT, L, aberrationT);
  const k0 = realK2(yRefInfinity, du, 0, zoomT, L, 0);
  if (Number.isNaN(kt) || Number.isNaN(k0)) return 0;
  return kt - k0;
}

function conjugateReferencePupilFraction2(L: RuntimeLens, entrancePupilSemiDiameter: number): number {
  if (!L.isFoldedOptics || entrancePupilSemiDiameter <= 0) return CONJUGATE_REFERENCE_PUPIL_FRACTION;

  const defaultReference = CONJUGATE_REFERENCE_PUPIL_FRACTION;
  const blockedFraction = foldedCentralObstructionFraction2(L, entrancePupilSemiDiameter);
  if (blockedFraction <= defaultReference) return defaultReference;

  const usableFractions = obstructionAwareRayFractionsForDensity(
    L,
    L.rayFractions,
    "diagnostic",
    entrancePupilSemiDiameter,
  )
    .map((fraction) => Math.abs(fraction))
    .filter((fraction) => fraction >= blockedFraction - 1e-9)
    .sort((a, b) => a - b);

  return usableFractions[0] ?? Math.min(1, blockedFraction + 0.1 * (1 - blockedFraction));
}

function foldedCentralObstructionFraction2(L: RuntimeLens, entrancePupilSemiDiameter: number): number {
  if (entrancePupilSemiDiameter <= 0) return 0;
  const blockedRadius = L.S.reduce((max, surface) => {
    const centralBlocker =
      surface.interaction?.type === "block" ||
      (surface.interaction?.type === "reflect" && surface.interaction.inactiveSide === "block");
    if (centralBlocker && (surface.innerSd ?? 0) <= 0) return Math.max(max, surface.sd);
    if (surface.interaction?.type === "reflect" && (surface.innerSd ?? 0) > 0) return Math.max(max, surface.innerSd!);
    return max;
  }, 0);
  return blockedRadius / entrancePupilSemiDiameter;
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

  /* Object-plane solves vary launch height until the exact stop trace crosses
   * y=0. The paraxial chief ray is only the seed, not the final answer. */
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
  reachedImagePlane: boolean;
  terminalPoint: Vec3;
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
      reachedImagePlane: false,
      terminalPoint: stop.point ?? [0, stop.y, 0],
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
    reachedImagePlane: result.reachedImagePlane,
    terminalPoint: result.terminalPoint,
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
  if (!Number.isFinite(trace.y) || trace.clipped) return NaN;
  if (state.lens.flags.isFoldedOptics && trace.reachedImagePlane) {
    return imagePlaneCoordinate2(trace.terminalPoint, state.imagePlane);
  }
  return trace.y + (state.surfaces[state.surfaces.length - 1]?.d ?? 0) * trace.u;
}

function imagePlaneCoordinate2(point: Vec3, imagePlane: Plane3): number {
  const tangentX: Vec3 = [1, 0, 0];
  const tangentY: Vec3 = [
    imagePlane.normal[1] * tangentX[2] - imagePlane.normal[2] * tangentX[1],
    imagePlane.normal[2] * tangentX[0] - imagePlane.normal[0] * tangentX[2],
    imagePlane.normal[0] * tangentX[1] - imagePlane.normal[1] * tangentX[0],
  ];
  const tangentLength = Math.hypot(tangentY[0], tangentY[1], tangentY[2]);
  if (tangentLength <= 1e-12) return point[1] - imagePlane.point[1];
  return (
    ((point[0] - imagePlane.point[0]) * tangentY[0] +
      (point[1] - imagePlane.point[1]) * tangentY[1] +
      (point[2] - imagePlane.point[2]) * tangentY[2]) /
    tangentLength
  );
}

function realK2(yRef: number, du: number, focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0): number {
  const y0 = traceToImageReal2(yRef, 0, focusT, zoomT, L, aberrationT);
  const y1 = traceToImageReal2(yRef, du, focusT, zoomT, L, aberrationT);
  if (Number.isNaN(y0) || Number.isNaN(y1)) return NaN;
  const dydu = (y1 - y0) / du;
  if (Math.abs(dydu) < 1e-15) return NaN;
  return -y0 / dydu / yRef;
}
