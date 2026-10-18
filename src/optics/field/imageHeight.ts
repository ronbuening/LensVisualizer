/**
 * Image heights — traced chief heights, inversion and the format-bounded analysis field.
 *
 * Builds on raw field geometry and chief solves without changing their sampling or solve order.
 */

import type { RayTraceResult } from "../../types/optics.js";
import { resolveImageFormatMetadata } from "../../utils/catalog/lensTaxonomy.js";
import { stateWithZ } from "../state/preparedGeometry.js";
import { prepareRayTraceForState, type PreparedRayTrace } from "../trace/rayAdapters.js";
import type { PreparedGeometry } from "../types.js";
import type { FieldGeometryState2 } from "./launch.js";
import {
  isFisheyeProjection2,
  MAX_FIELD_LAUNCH_DEG,
  projectionLaunchSlopeForField2,
  rectilinearProjectionMaxTraceField2,
} from "./projection.js";
import {
  computeChiefRaySolve,
  solveChiefRay,
  solveChiefRayFromSeed,
  solvesChiefRay,
  type ChiefRaySolveResult2,
} from "./chiefRaySolve.js";
import { computeFieldGeometry, prepareStateSurfacesReal } from "./fieldGeometry.js";

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

interface RealChiefRayProbe2 {
  clears: boolean;
  height: number;
}

/** Each target is validated independently; earlier failed samples do not exclude later fields. */
export type ImageHeightInversionResult =
  | { status: "reached"; fieldAngleDeg: number }
  | { status: "unreachable"; reason: "trace-failure" | "height-miss" | "field-limit"; fieldAngleDeg?: number };

interface AccurateFieldHeightLookup2 {
  segmentAngles: number[];
  segmentHeights: number[];
  imageHeightAt: (fieldAngleDeg: number) => number;
  lastRay: () => { fieldAngleDeg: number; imageHeight: number; failed: boolean };
  hasTraceFailure: () => boolean;
}

/**
 * Bound field geometry by the real chief ray and the declared image format.
 *
 * `computeFieldGeometry` returns a paraxial vignetting estimate checked against a ray aimed at the paraxial
 * entrance pupil. Pupil aberration and distortion move real chief rays away from both, in either direction, so the
 * analysis field follows the chief ray solved through the stop centre instead: it reaches the format corner unless
 * a clear aperture clips that chief ray first. Declared-coverage projections and folded paths keep the raw field,
 * capped to the format. A missing format is treated as full-frame.
 *
 * @param state - prepared geometry for the current controls
 * @returns field geometry whose half-field ends at the format corner or at the real chief ray's clipping field
 */
export function computeAnalysisFieldGeometry(state: PreparedGeometry): FieldGeometryState2 {
  const geometry = computeFieldGeometry(state);
  if (!Number.isFinite(geometry.halfFieldDeg) || geometry.halfFieldDeg <= 0 || state.surfaces.length < 1)
    return geometry;

  const format = resolveImageFormatMetadata(state.lens.source?.imageFormat);
  const maxImageHeight = (state.lens.source?.imageCircleMm ?? format.diagonalMm) / 2;
  if (!Number.isFinite(maxImageHeight) || maxImageHeight <= 0) return geometry;

  const followsRealChiefRay =
    !state.lens.flags.isFoldedOptics &&
    !isFisheyeProjection2(state.lens.projection.config) &&
    rectilinearProjectionMaxTraceField2(state.lens.projection.config) === undefined;
  let limit = followsRealChiefRay
    ? realChiefRayFieldLimit(state, { geometry, cornerHeight: maxImageHeight, seeded: true })
    : null;
  /* Seeded probes can converge past the field where the full solve the analyses use gives up; walk again unseeded. */
  if (limit?.settled && !solvesChiefRay(state, { fieldAngleDeg: limit.fieldDeg, geometry })) {
    limit = realChiefRayFieldLimit(state, { geometry, cornerHeight: maxImageHeight, seeded: false });
  }
  if (limit?.settled) return { ...geometry, halfFieldDeg: limit.fieldDeg };
  const bounded = limit ? { ...geometry, halfFieldDeg: limit.fieldDeg } : geometry;

  const zPos = zPositionsForState(state);
  const edgeImageHeight = chiefRayImageHeightAccurate(state, {
    fieldAngleDeg: bounded.halfFieldDeg,
    zPos,
    geometry: bounded,
  });
  if (!Number.isFinite(edgeImageHeight) || Math.abs(edgeImageHeight) <= maxImageHeight + 1e-9) return bounded;

  // Field geometry retains its historic inversion; distortion validates individual
  // rays later without changing the geometry or target heights of other analyses.
  const formatHalfFieldDeg = solveFieldAngleForImageHeightLookup2(
    maxImageHeight,
    buildAccurateFieldHeightLookup(state, { zPos, geometry: bounded }),
  );
  if (formatHalfFieldDeg === null || !Number.isFinite(formatHalfFieldDeg)) return bounded;

  return { ...bounded, halfFieldDeg: Math.min(bounded.halfFieldDeg, Math.max(0, formatHalfFieldDeg)) };
}

/**
 * Walk the real chief ray from the raw half-field toward the format corner.
 *
 * An edge whose chief ray clips steps down until it clears; a clear edge short of the corner steps up, and one past it
 * steps down. Where a clear aperture starts clipping is settled by bisection, and the corner, once bracketed by clear
 * fields, by regula falsi on image height. Past the field where image height stops growing, larger fields fold back
 * inside the image and add nothing. Probes after the first re-solve from their converged neighbour.
 *
 * @param state - prepared geometry for the current controls
 * @param geometry - raw field geometry for this state
 * @param cornerHeight - format corner image height in mm
 * @param seeded - re-solve each probe from its converged neighbour instead of running the full solve every time
 * @returns `settled` with the analysis half-field, or unsettled with a clear field already past the corner that the
 *   caller caps to the format; null when no clear chief ray is found
 */
function realChiefRayFieldLimit(
  state: PreparedGeometry,
  { geometry, cornerHeight, seeded }: { geometry: FieldGeometryState2; cornerHeight: number; seeded: boolean },
): { fieldDeg: number; settled: boolean } | null {
  const imageTransfer = state.surfaces[state.surfaces.length - 1]?.d ?? 0;
  const traceChief = prepareStateSurfacesReal(state, { checkSemiDiameter: true });
  let seed: ChiefRaySolveResult2 | null = null;
  const probe = (deg: number): RealChiefRayProbe2 | null => {
    const solve =
      (seeded && seed && solveChiefRayFromSeed(state, { fieldAngleDeg: deg, seed })) ||
      computeChiefRaySolve(state, { fieldAngleDeg: deg, geometry });
    if (solve.status !== "converged" || solve.vectorLaunch) return null;
    seed = solve;
    const trace = traceChief(solve.yLaunch, solve.uField);
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
 * Trace the chief ray for a meridional field angle using current-state geometry.
 *
 * @param state - prepared geometry for the current controls
 * @param fieldAngleDeg - signed field angle in degrees
 * @param zPos - current surface vertex positions in mm
 * @param geometry - optional precomputed field geometry
 * @returns runtime ray trace result for the chief ray
 */
export function traceChiefRayAtAngle(
  state: PreparedGeometry,
  {
    fieldAngleDeg,
    zPos,
    geometry,
    prepared,
  }: { fieldAngleDeg: number; zPos: readonly number[]; geometry?: FieldGeometryState2; prepared?: PreparedRayTrace },
): RayTraceResult {
  const geom = geometry ?? computeFieldGeometry(state);
  const launch = projectionLaunchSlopeForField2({ projection: state.lens.projection.config }, fieldAngleDeg);
  const uField = launch.uField;
  const yChief = -geom.epRatio * uField;
  return prepared
    ? prepared.ray(yChief, uField)
    : prepareRayTraceForState(stateWithZ(state, zPos), { ghost: true }).ray(yChief, uField);
}

/**
 * Compute chief-ray image height with the scalar slope-launch solver.
 *
 * @param state - prepared geometry for the current controls
 * @param fieldAngleDeg - signed field angle in degrees
 * @param zPos - current surface vertex positions in mm
 * @param geometry - optional precomputed field geometry
 * @returns signed image height in mm, or NaN when tracing fails
 */
export function chiefRayImageHeight(
  state: PreparedGeometry,
  {
    fieldAngleDeg,
    zPos,
    geometry,
    prepared,
  }: { fieldAngleDeg: number; zPos: readonly number[]; geometry?: FieldGeometryState2; prepared?: PreparedRayTrace },
): number {
  const trace = traceChiefRayAtAngle(state, { fieldAngleDeg, zPos, geometry, prepared });
  if (state.lens.flags.isFoldedOptics && trace.reachedImagePlane)
    return foldedRayImagePlaneCoordinate(state, { trace });
  return trace.y + trace.u * lastThicknessAtState(state);
}

/**
 * Compute chief-ray image height using scalar or vector launch as required.
 *
 * @param state - prepared geometry for the current controls
 * @param fieldAngleDeg - signed field angle in degrees
 * @param zPos - current surface vertex positions in mm
 * @param geometry - optional precomputed field geometry
 * @returns signed image height in mm, or NaN when the trace clips
 */
export function chiefRayImageHeightAccurate(
  state: PreparedGeometry,
  { fieldAngleDeg, zPos, geometry }: { fieldAngleDeg: number; zPos: readonly number[]; geometry?: FieldGeometryState2 },
): number {
  return chiefRayImageHeightAccurateWithTransfer(state, {
    fieldAngleDeg,
    zPos,
    geometry,
    imagePlaneTransfer: lastThicknessAtState(state),
  });
}

function chiefRayImageHeightAccurateWithTransfer(
  state: PreparedGeometry,
  {
    fieldAngleDeg,
    zPos,
    geometry,
    imagePlaneTransfer,
    onFailure,
    prepared,
    vectorAdapter,
  }: {
    fieldAngleDeg: number;
    zPos: readonly number[];
    geometry: FieldGeometryState2 | undefined;
    imagePlaneTransfer: number;
    onFailure?: () => void;
    prepared?: PreparedRayTrace;
    vectorAdapter?: (bound: number) => PreparedRayTrace;
  },
): number {
  const launch = projectionLaunchSlopeForField2({ projection: state.lens.projection.config }, fieldAngleDeg);
  const solve = solveChiefRay(state, { fieldAngleDeg, geometry });
  if (solve.vectorLaunch) {
    const trace = vectorAdapter
      ? vectorAdapter(solve.vectorLaunch.launchBoundT).vector(solve.vectorLaunch)
      : prepareRayTraceForState(stateWithZ(state, zPos), {
          ghost: false,
          launchBoundT: solve.vectorLaunch.launchBoundT,
        }).vector(solve.vectorLaunch);
    if (
      !state.lens.flags.isFoldedOptics &&
      (trace.diagnostics?.failureReason || trace.diagnostics?.terminalSurfaceIndex !== state.surfaces.length - 1)
    )
      onFailure?.();
    if (trace.clipped) return NaN;
    if (state.lens.flags.isFoldedOptics && trace.reachedImagePlane)
      return foldedRayImagePlaneCoordinate(state, { trace });
    return trace.y + trace.u * imagePlaneTransfer;
  }
  const trace = prepared
    ? prepared.ray(solve.yLaunch, launch.uField)
    : prepareRayTraceForState(stateWithZ(state, zPos), { ghost: true }).ray(solve.yLaunch, launch.uField);
  if (
    !state.lens.flags.isFoldedOptics &&
    (trace.diagnostics?.failureReason || trace.diagnostics?.terminalSurfaceIndex !== state.surfaces.length - 1)
  ) {
    onFailure?.();
  }
  if (state.lens.flags.isFoldedOptics && trace.reachedImagePlane)
    return foldedRayImagePlaneCoordinate(state, { trace });
  return trace.y + trace.u * imagePlaneTransfer;
}

/**
 * Invert traced image height to field angle using the accurate chief-ray path.
 *
 * @param state - prepared geometry for the current controls
 * @param targetImageHeight - unsigned or signed image height in mm
 * @param zPos - current surface vertex positions in mm
 * @param geometry - optional precomputed field geometry
 * @returns field angle in degrees, or null when no monotonic bracket is found
 */
export function solveFieldAngleForImageHeightAccurate(
  state: PreparedGeometry,
  {
    targetImageHeight,
    zPos,
    geometry,
  }: { targetImageHeight: number; zPos: readonly number[]; geometry?: FieldGeometryState2 },
): number | null {
  if (solveTrivialImageHeightTarget2(targetImageHeight) === 0) return 0;
  const [result] = invertChiefRayImageHeights(state, { targetImageHeights: [targetImageHeight], zPos, geometry });
  return result.status === "reached" ? result.fieldAngleDeg : null;
}

/**
 * Invert several traced image heights against one shared accurate chief-ray field table.
 *
 * This preserves the `solveFieldAngleForImageHeightAccurate` bisection path
 * but avoids rebuilding the same bracket scan for every target height.
 *
 * @param state - prepared geometry for the current controls
 * @param options - target heights in mm, trace vertices and optional raw field geometry
 * @returns solved angles in degrees, or null for individual unreachable targets
 */
export function solveFieldAnglesForImageHeightsAccurate(
  state: PreparedGeometry,
  {
    targetImageHeights,
    zPos,
    geometry,
  }: { targetImageHeights: readonly number[]; zPos: readonly number[]; geometry?: FieldGeometryState2 },
): Array<number | null> {
  return invertChiefRayImageHeights(state, { targetImageHeights, zPos, geometry }).map((result) =>
    result.status === "reached" ? result.fieldAngleDeg : null,
  );
}

/**
 * Preserve the original inversion path, then check its own ray against the existing height tolerance.
 * @param state - prepared geometry for the current controls
 * @param options - target heights in mm, trace vertices and optional raw field geometry
 * @returns one reached angle or explicit unreachable result per target
 */
export function invertChiefRayImageHeights(
  state: PreparedGeometry,
  {
    targetImageHeights,
    zPos,
    geometry,
  }: { targetImageHeights: readonly number[]; zPos: readonly number[]; geometry?: FieldGeometryState2 },
): ImageHeightInversionResult[] {
  const geom = geometry ?? computeFieldGeometry(state);
  if (!Number.isFinite(geom.halfFieldDeg) || geom.halfFieldDeg <= 0) {
    return targetImageHeights.map((target) =>
      solveTrivialImageHeightTarget2(target) === 0
        ? { status: "reached", fieldAngleDeg: 0 }
        : { status: "unreachable", reason: "field-limit" },
    );
  }
  const lookup = buildAccurateFieldHeightLookup(state, { zPos, geometry: geom });
  return targetImageHeights.map((target) => {
    if (solveTrivialImageHeightTarget2(target) === 0) return { status: "reached", fieldAngleDeg: 0 };
    const angle = solveFieldAngleForImageHeightLookup2(target, lookup);
    if (angle === null)
      return { status: "unreachable", reason: lookup.hasTraceFailure() ? "trace-failure" : "field-limit" };
    // Folded distortion stays guarded in the UI; retain its existing inversion fallback.
    if (state.lens.flags.isFoldedOptics) return { status: "reached", fieldAngleDeg: angle };
    // Successful bisections already traced this exact angle. Only the exhausted 40-step
    // fallback needs another ray, so ordinary samples keep their exact floats and ray work.
    const ray = lookup.lastRay();
    const height = ray.fieldAngleDeg === angle ? ray.imageHeight : lookup.imageHeightAt(angle);
    if (lookup.lastRay().failed) return { status: "unreachable", reason: "trace-failure", fieldAngleDeg: angle };
    if (!Number.isFinite(height) || Math.abs(height + Math.abs(target)) >= 1e-4)
      return { status: "unreachable", reason: "height-miss", fieldAngleDeg: angle };
    return { status: "reached", fieldAngleDeg: angle };
  });
}

function buildAccurateFieldHeightLookup(
  state: PreparedGeometry,
  { zPos, geometry }: { zPos: readonly number[]; geometry: FieldGeometryState2 },
): AccurateFieldHeightLookup2 {
  const imagePlaneTransfer = lastThicknessAtState(state);
  const prepared = prepareRayTraceForState(stateWithZ(state, zPos), { ghost: true });
  let vectorTrace: PreparedRayTrace | undefined;
  const vectorAdapter = (launchBoundT: number): PreparedRayTrace =>
    (vectorTrace ??= prepareRayTraceForState(stateWithZ(state, zPos), { ghost: false, launchBoundT }));
  let lastRay = { fieldAngleDeg: NaN, imageHeight: NaN, failed: false };
  let hasTraceFailure = false;
  const imageHeightAt = (fieldAngleDeg: number): number => {
    let failed = false;
    const imageHeight = chiefRayImageHeightAccurateWithTransfer(state, {
      fieldAngleDeg,
      zPos,
      geometry,
      imagePlaneTransfer,
      onFailure: () => {
        failed = true;
      },
      prepared,
      vectorAdapter,
    });
    lastRay = { fieldAngleDeg, imageHeight, failed };
    hasTraceFailure ||= failed;
    return imageHeight;
  };
  const bracketSegments = Math.max(Math.ceil(geometry.halfFieldDeg), 20);
  const segmentAngles: number[] = [];
  const segmentHeights: number[] = [];
  // Keep even finite partial-trace heights in the historic bracket table. Removing
  // them would change the bisection path (and floats) of otherwise valid targets.
  for (let i = 0; i <= bracketSegments; i++) {
    const angleDeg = (i / bracketSegments) * geometry.halfFieldDeg;
    const height = imageHeightAt(angleDeg);
    if (!Number.isFinite(height)) continue;
    segmentAngles.push(angleDeg);
    segmentHeights.push(height);
  }
  return {
    segmentAngles,
    segmentHeights,
    imageHeightAt,
    lastRay: () => lastRay,
    hasTraceFailure: () => hasTraceFailure,
  };
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
 * @param state - prepared geometry for the current controls
 * @param targetImageHeight - unsigned or signed image height in mm
 * @param zPos - current surface vertex positions in mm
 * @param geometry - optional precomputed field geometry
 * @returns field angle in degrees, or null when the target is outside the field
 */
export function solveFieldAngleForImageHeight(
  state: PreparedGeometry,
  {
    targetImageHeight,
    zPos,
    geometry,
  }: { targetImageHeight: number; zPos: readonly number[]; geometry?: FieldGeometryState2 },
): number | null {
  if (!Number.isFinite(targetImageHeight) || Math.abs(targetImageHeight) < 1e-12) return 0;
  const geom = geometry ?? computeFieldGeometry(state);
  if (!Number.isFinite(geom.halfFieldDeg) || geom.halfFieldDeg <= 0) return null;
  const prepared = prepareRayTraceForState(stateWithZ(state, zPos), { ghost: true });
  const target = -Math.abs(targetImageHeight);
  let lo = 0;
  let hi = geom.halfFieldDeg;
  const yLo = chiefRayImageHeight(state, { fieldAngleDeg: lo, zPos, geometry: geom, prepared });
  const yHi = chiefRayImageHeight(state, { fieldAngleDeg: hi, zPos, geometry: geom, prepared });
  if (!Number.isFinite(yLo) || !Number.isFinite(yHi)) return null;
  if (target > yLo || target < yHi) return null;
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    const yMid = chiefRayImageHeight(state, { fieldAngleDeg: mid, zPos, geometry: geom, prepared });
    if (!Number.isFinite(yMid)) return null;
    if (Math.abs(yMid - target) < 1e-4) return mid;
    if (yMid > target) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

function foldedRayImagePlaneCoordinate(state: PreparedGeometry, { trace }: { trace: RayTraceResult }): number {
  const point = trace.pts[trace.pts.length - 1];
  if (!point) return NaN;
  const [z, y] = point;
  const tangentZ = -state.lens.constants.imagePlane.normal.y;
  const tangentY = state.lens.constants.imagePlane.normal.z;
  return (z - state.lens.constants.imagePlane.z) * tangentZ + (y - state.lens.constants.imagePlane.y) * tangentY;
}

function zPositionsForState(state: PreparedGeometry): number[] {
  return [...state.z];
}

function lastThicknessAtState(state: PreparedGeometry): number {
  return state.surfaces[state.surfaces.length - 1]?.d ?? 0;
}
