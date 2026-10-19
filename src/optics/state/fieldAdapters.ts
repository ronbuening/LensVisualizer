/** Runtime field adapters — resolve controls once before entering prepared-geometry field modules. */

import type { ParaxialTraceResult, RayTraceResult, RuntimeLens } from "../../types/optics.js";
import { type FieldGeometryState2, type VectorFieldRayLaunch2 } from "../field/launch.js";
import { FOCUS_INFINITY_CUTOFF } from "../focusDistance.js";
import { compiledLensFromRuntime } from "../prescription/compile.js";
import { prepareState } from "../state/preparedGeometry.js";
import type { PreparedRayTrace } from "../trace/rayAdapters.js";
import type { ChiefRaySolveResult2 } from "../field/chiefRaySolve.js";
import { solveChiefRay, solveChiefRayBoundingSphere } from "../field/chiefRaySolve.js";
import type { EntrancePupilState2 } from "../field/fieldGeometry.js";
import {
  computeFieldGeometry,
  conjugateK,
  entrancePupil,
  paraxialObjectVergence,
  traceParaxialRay,
} from "../field/fieldGeometry.js";
import type { ImageHeightInversionResult } from "../field/imageHeight.js";
import {
  chiefRayImageHeight,
  chiefRayImageHeightAccurate,
  computeAnalysisFieldGeometry,
  invertChiefRayImageHeights as preparedInvertChiefRayImageHeights,
  solveFieldAngleForImageHeight,
  solveFieldAngleForImageHeightAccurate,
  solveFieldAnglesForImageHeightsAccurate,
  traceChiefRayAtAngle,
} from "../field/imageHeight.js";
import { computeBoundingSphereLaunchRadiusMm, computeBoundingSphereVectorFieldLaunch } from "../field/launch.js";

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
  return computeFieldGeometry(prepareState(compiledLensFromRuntime(L), focusT, zoomT, aberrationT));
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
  return computeAnalysisFieldGeometry(prepareState(compiledLensFromRuntime(L), focusT, zoomT, aberrationT));
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
  prepared?: PreparedRayTrace,
): RayTraceResult {
  return traceChiefRayAtAngle(prepareState(compiledLensFromRuntime(L), focusT, zoomT, aberrationT), {
    fieldAngleDeg,
    zPos,
    geometry,
    prepared,
  });
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
  return traceParaxialRay(prepareState(compiledLensFromRuntime(L), focusT, zoomT, 0), { y0, u0 });
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
  prepared?: PreparedRayTrace,
): number {
  return chiefRayImageHeight(prepareState(compiledLensFromRuntime(L), focusT, zoomT, aberrationT), {
    fieldAngleDeg,
    zPos,
    geometry,
    prepared,
  });
}

/**
 * Solve the launch height that makes a chief ray pass through the stop center.
 *
 * Results are cached per prepared geometry because distortion, vignetting, and
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
  return solveChiefRay(prepareState(compiledLensFromRuntime(L), focusT, zoomT, aberrationT), {
    fieldAngleDeg,
    geometry,
  });
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
  return solveChiefRayBoundingSphere(prepareState(compiledLensFromRuntime(L), focusT, zoomT, aberrationT), {
    fieldAngleDeg,
    geometry,
  });
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
  return chiefRayImageHeightAccurate(prepareState(compiledLensFromRuntime(L), focusT, zoomT, aberrationT), {
    fieldAngleDeg,
    zPos,
    geometry,
  });
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
  return solveFieldAngleForImageHeightAccurate(prepareState(compiledLensFromRuntime(L), focusT, zoomT, aberrationT), {
    targetImageHeight,
    zPos,
    geometry,
  });
}

/**
 * Invert several traced image heights against one shared accurate chief-ray field table.
 *
 * This preserves the `solveFieldAngleForImageHeightAccurate` bisection path
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
  return solveFieldAnglesForImageHeightsAccurate(prepareState(compiledLensFromRuntime(L), focusT, zoomT, aberrationT), {
    targetImageHeights,
    zPos,
    geometry,
  });
}

/** Preserve the original inversion path, then check its own ray against the existing height tolerance. */
export function invertChiefRayImageHeights(
  targetImageHeights: readonly number[],
  zPos: number[],
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry?: FieldGeometryState2,
  aberrationT = 0,
): ImageHeightInversionResult[] {
  return preparedInvertChiefRayImageHeights(prepareState(compiledLensFromRuntime(L), focusT, zoomT, aberrationT), {
    targetImageHeights,
    zPos,
    geometry,
  });
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
  return solveFieldAngleForImageHeight(prepareState(compiledLensFromRuntime(L), focusT, zoomT, 0), {
    targetImageHeight,
    zPos,
    geometry,
  });
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
  return entrancePupil(prepareState(compiledLensFromRuntime(L), focusT, zoomT, aberrationT), { stopSD, geometry });
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
  // Infinity never inspected the runtime lens; keep that short circuit before preparation.
  if (focusT < FOCUS_INFINITY_CUTOFF) return 0;
  return conjugateK(prepareState(compiledLensFromRuntime(L), focusT, zoomT, aberrationT));
}

/**
 * Reciprocal distance from the first vertex to the paraxial object plane imaged onto the current image plane.
 *
 * @param focusT - normalized focus position
 * @param zoomT - normalized zoom position
 * @param L - runtime lens prescription
 * @param aberrationT - normalized aberration control position
 * @returns 1/s in 1/mm, positive for a real object; 0 at infinity focus and for folded paths
 */
export function paraxialObjectVergence2(focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0): number {
  if (focusT < FOCUS_INFINITY_CUTOFF) return 0;
  return paraxialObjectVergence(prepareState(compiledLensFromRuntime(L), focusT, zoomT, aberrationT));
}

export { type ChiefRaySolveResult2 } from "../field/chiefRaySolve.js";
export { type EntrancePupilState2 } from "../field/fieldGeometry.js";
export { type ImageHeightInversionResult } from "../field/imageHeight.js";
export {
  offsetVectorFieldRay2,
  type FieldGeometryState2,
  type OffsetVectorFieldRay2,
  type VectorFieldRayLaunch2,
} from "../field/launch.js";

/** Preserve the baseline prescription envelope for legacy launch callers. */
export function computeBoundingSphereLaunchRadiusMm2(L: RuntimeLens, chiefB: number): number {
  return computeBoundingSphereLaunchRadiusMm(prepareState(compiledLensFromRuntime(L), 0, 0), chiefB);
}
/** Resolve the prepared owner for legacy vector field launches. */
export function computeBoundingSphereVectorFieldLaunch2(
  L: RuntimeLens,
  geometry: FieldGeometryState2,
  fieldAngleXDeg: number,
  fieldAngleYDeg: number,
  aberrationT = 0,
): VectorFieldRayLaunch2 | null {
  void aberrationT;
  return computeBoundingSphereVectorFieldLaunch(prepareState(compiledLensFromRuntime(L), 0, 0), {
    geometry,
    fieldAngleXDeg,
    fieldAngleYDeg,
  });
}
