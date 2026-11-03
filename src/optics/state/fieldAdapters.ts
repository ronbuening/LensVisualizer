/** Runtime field adapters — resolve controls once before entering prepared-geometry field modules. */

import type { ParaxialTraceResult, RayTraceResult, RuntimeLens } from "../../types/optics.js";
import type { FieldGeometryState, VectorFieldRayLaunch } from "../field/launch.js";
import { FOCUS_INFINITY_CUTOFF } from "./focusDistance.js";
import { compiledLensFromRuntime, findCompiledLens } from "../prescription/identity.js";
import { prepareState, prepareStateUncached } from "./preparedGeometry.js";
import { clampStationControl, focusInterpolationSegment, stationSegment } from "./stationTables.js";
import type { CompiledLens } from "../types.js";
import type { PreparedRayTrace } from "../trace/rayAdapters.js";
import type { ChiefRaySolveResult } from "../field/chiefRaySolve.js";
import { solveChiefRay, solveChiefRayBoundingSphere } from "../field/chiefRaySolve.js";
import type { EntrancePupilState } from "../field/geometry.js";
import {
  computeFieldGeometry,
  conjugateK,
  entrancePupil,
  paraxialInFocusVergence,
  paraxialObjectVergence,
  traceParaxialRay,
} from "../field/geometry.js";
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
export function computeFieldGeometryAtState(
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  aberrationT = 0,
): FieldGeometryState {
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
export function computeAnalysisFieldGeometryAtState(
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  aberrationT = 0,
): FieldGeometryState {
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
export function traceChiefRayAtAngleForRuntimeLens(
  fieldAngleDeg: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry?: FieldGeometryState,
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
export function traceParaxialRayForRuntimeLens(
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
export function chiefRayImageHeightForRuntimeLens(
  fieldAngleDeg: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry?: FieldGeometryState,
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
export function solveChiefRayForRuntimeLens(
  fieldAngleDeg: number,
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry?: FieldGeometryState,
  aberrationT = 0,
): ChiefRaySolveResult {
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
export function solveChiefRayBoundingSphereForRuntimeLens(
  fieldAngleDeg: number,
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry: FieldGeometryState | undefined,
  aberrationT: number,
): ChiefRaySolveResult {
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
export function chiefRayImageHeightAccurateForRuntimeLens(
  fieldAngleDeg: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry?: FieldGeometryState,
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
export function solveFieldAngleForImageHeightAccurateForRuntimeLens(
  targetImageHeight: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry?: FieldGeometryState,
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
export function solveFieldAnglesForImageHeightsAccurateForRuntimeLens(
  targetImageHeights: readonly number[],
  zPos: number[],
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry?: FieldGeometryState,
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
  geometry?: FieldGeometryState,
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
export function solveFieldAngleForImageHeightForRuntimeLens(
  targetImageHeight: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry?: FieldGeometryState,
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
export function entrancePupilAtState(
  stopSD: number,
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  geometry?: FieldGeometryState,
  aberrationT = 0,
): EntrancePupilState {
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
export function conjugateKForRuntimeLens(focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0): number {
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
export function paraxialObjectVergenceForRuntimeLens(
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  aberrationT = 0,
): number {
  if (focusT < FOCUS_INFINITY_CUTOFF) return 0;
  return paraxialObjectVergence(prepareState(compiledLensFromRuntime(L), focusT, zoomT, aberrationT));
}

/**
 * Inverse object-to-image distance, in 1/m, at which each authored row focuses: `[station][keyframe]`, keyframe 0
 * (infinity) included as 0. `null` marks a row whose spacings equal its station's infinity row. Computed once per
 * compiled lens.
 */
const ROW_FOCUS_VERGENCE = new WeakMap<CompiledLens, (number | null)[][]>();

function rowFocusVergences(compiled: CompiledLens): (number | null)[][] {
  const cached = ROW_FOCUS_VERGENCE.get(compiled);
  if (cached) return cached;
  const keyframes = compiled.variables.focusPositions;
  const stations = compiled.flags.isZoom ? (compiled.source.zoom?.stations.length ?? 1) : 1;
  const rows = Array.from({ length: stations }, (_, station) => {
    const zoomT = stations > 1 ? station / (stations - 1) : 0;
    const infinity = prepareStateUncached(compiled, 0, zoomT, 0);
    return keyframes.map((focusT, keyframe) => {
      if (keyframe === 0) return 0;
      const state = prepareStateUncached(compiled, focusT, zoomT, 0);
      if (state.surfaces.every((surface, index) => surface.d === infinity.surfaces[index].d)) return null;
      const vergence = paraxialInFocusVergence(state);
      // At or beyond infinity a row adds no inverse distance; a real object adds the inverse of its distance.
      return vergence > 0 ? 1000 / (1 / vergence + state.totalTrack) : 0;
    });
  });
  ROW_FOCUS_VERGENCE.set(compiled, rows);
  return rows;
}

/**
 * Object-to-image distance, in metres, the focus labels report: the distance each authored row actually focuses at,
 * interpolated in inverse distance between rows.
 *
 * The slider convention (`focusDistanceAt`: closeFocus / focusT) interpolates inverse distance too, but anchors every
 * row at `closeFocusM / keyframe`, which holds only where the spacings were solved for it. Here each row (zoom station
 * and focus keyframe) is anchored at its own paraxial in-focus distance with the image plane fixed; infinity is
 * infinity. Between rows, inverse distance follows the same bilinear interpolation as the gaps. Reading the blended
 * state's own focus instead would carry its interpolation residual: near infinity a few micrometres of defocus move an
 * in-focus distance by tens of metres, so a label would jump between neighbouring slider steps.
 *
 * @param focusT - normalized focus position
 * @param L - runtime lens prescription
 * @param zoomT - normalized zoom position
 * @returns metres; `Infinity` below the infinity cutoff or at or beyond infinity; `null` on a folded path, where the
 *   focus control moves no gap at the bracketing stations, or for a runtime the canonical compiler did not build, so
 *   the caller keeps the slider convention
 */
export function modeledFocusDistanceAt(focusT: number, L: RuntimeLens, zoomT = 0): number | null {
  if (focusT < FOCUS_INFINITY_CUTOFF) return Infinity;
  if (L.isFoldedOptics) return null;
  const compiled = findCompiledLens(L);
  if (!compiled) return null;
  const rows = rowFocusVergences(compiled);
  const zoom =
    rows.length > 1
      ? stationSegment(clampStationControl(zoomT), rows.length)
      : { fromIndex: 0, toIndex: 0, fraction: 0 };
  const focus = focusInterpolationSegment(compiled.variables.focusPositions, clampStationControl(focusT));
  // Bilinear weights of the four bracketing rows; a row with zero weight may lack focus travel without effect.
  const corners: [number, number, number][] = [
    [zoom.fromIndex, focus.fromIndex, (1 - zoom.fraction) * (1 - focus.fraction)],
    [zoom.fromIndex, focus.toIndex, (1 - zoom.fraction) * focus.fraction],
    [zoom.toIndex, focus.fromIndex, zoom.fraction * (1 - focus.fraction)],
    [zoom.toIndex, focus.toIndex, zoom.fraction * focus.fraction],
  ];
  let inverse = 0;
  for (const [station, keyframe, weight] of corners) {
    if (weight === 0) continue;
    const value = rows[station][keyframe];
    if (value === null) return null;
    inverse += weight * value;
  }
  return inverse > 0 ? 1 / inverse : Infinity;
}

export { type ChiefRaySolveResult } from "../field/chiefRaySolve.js";
export { type EntrancePupilState } from "../field/geometry.js";
export { type ImageHeightInversionResult } from "../field/imageHeight.js";
export {
  offsetVectorFieldRay,
  type FieldGeometryState,
  type OffsetVectorFieldRay,
  type VectorFieldRayLaunch,
} from "../field/launch.js";

/** Preserve the baseline prescription envelope for legacy launch callers. */
export function computeBoundingSphereLaunchRadiusMmForRuntimeLens(L: RuntimeLens, chiefB: number): number {
  return computeBoundingSphereLaunchRadiusMm(prepareState(compiledLensFromRuntime(L), 0, 0), chiefB);
}
/** Resolve the prepared owner for legacy vector field launches. */
export function computeBoundingSphereVectorFieldLaunchForRuntimeLens(
  L: RuntimeLens,
  geometry: FieldGeometryState,
  fieldAngleXDeg: number,
  fieldAngleYDeg: number,
  aberrationT = 0,
): VectorFieldRayLaunch | null {
  void aberrationT;
  return computeBoundingSphereVectorFieldLaunch(prepareState(compiledLensFromRuntime(L), 0, 0), {
    geometry,
    fieldAngleXDeg,
    fieldAngleYDeg,
  });
}
