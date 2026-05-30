/**
 * Aberration analysis adapter — prepared-state wrappers for spherical, field-curvature, and coma helpers.
 *
 * Bridges engine-native PreparedOpticalState calls to the existing RuntimeLens analysis implementations.
 */

import {
  computeComaAnalysis,
  computeComaPointCloudPreview,
  computeComaPreview,
  computeFieldCurvature,
  computeFieldCurvatureBundle,
  computeMeridionalComa,
  computeSAProfile,
  computeSagittalComa,
  computeSphericalAberration,
  computeSphericalAberrationBlurCharacter,
} from "../aberrationAnalysis.js";
import type { FieldGeometryState } from "../optics.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { PreparedOpticalState } from "../types.js";
import type { AnalysisSamplingOptions } from "./analysisQuality.js";
import { zPosForPreparedAnalysis2 } from "./preparedStateAdapters.js";

function zPosFromState(state: PreparedOpticalState): number[] {
  return zPosForPreparedAnalysis2(state);
}

/**
 * Compute current-state spherical aberration from a prepared optical state.
 *
 * The prepared state supplies focus, zoom, aberration spacing, and current vertex
 * positions; aperture inputs stay explicit because the analysis drawer derives them
 * from stopdown state rather than from build-time lens constants.
 *
 * @param state - prepared optical state for the current sliders
 * @param currentEPSD - entrance-pupil semi-diameter in mm
 * @param currentPhysStopSD - physical stop semi-diameter in mm
 * @returns longitudinal/transverse spherical-aberration summary
 */
export function computeSphericalAberrationForState2(
  state: PreparedOpticalState,
  currentEPSD: number,
  currentPhysStopSD: number,
) {
  return computeSphericalAberration(
    state.lens.runtime,
    zPosFromState(state),
    state.focusT,
    state.zoomT,
    currentEPSD,
    currentPhysStopSD,
    state.aberrationT,
  );
}

/**
 * Build the sampled real-ray spherical-aberration profile for a prepared state.
 *
 * @param state - prepared optical state for the current sliders
 * @param currentEPSD - entrance-pupil semi-diameter in mm
 * @param currentPhysStopSD - physical stop semi-diameter in mm
 * @returns sampled marginal-to-paraxial focus offsets used by the SA chart
 */
export function computeSAProfileForState2(state: PreparedOpticalState, currentEPSD: number, currentPhysStopSD: number) {
  return computeSAProfile(
    state.lens.runtime,
    zPosFromState(state),
    state.focusT,
    state.zoomT,
    currentEPSD,
    currentPhysStopSD,
    state.aberrationT,
  );
}

/**
 * Classify blur behavior around the current image plane for prepared-state SA.
 *
 * Passing an existing spherical-aberration result avoids repeating the same on-axis
 * real-ray sweep when the summary and blur character are rendered together.
 *
 * @param state - prepared optical state for the current sliders
 * @param currentEPSD - entrance-pupil semi-diameter in mm
 * @param currentPhysStopSD - physical stop semi-diameter in mm
 * @param baseResult - optional precomputed SA result for the same state/aperture
 * @returns foreground/background blur character and confidence metrics
 */
export function computeSphericalAberrationBlurCharacterForState2(
  state: PreparedOpticalState,
  currentEPSD: number,
  currentPhysStopSD: number,
  baseResult: Parameters<typeof computeSphericalAberrationBlurCharacter>[6] = null,
  sampling?: AnalysisSamplingOptions,
) {
  return computeSphericalAberrationBlurCharacter(
    state.lens.runtime,
    zPosFromState(state),
    state.focusT,
    state.zoomT,
    currentEPSD,
    currentPhysStopSD,
    baseResult,
    state.aberrationT,
    sampling,
  );
}

/**
 * Compute tangential/sagittal field curvature for a prepared state.
 *
 * Field geometry may be supplied by the caller so distortion, vignetting, and
 * aberration panels share the same solved-chief-ray convention for current focus.
 *
 * @param state - prepared optical state for the current sliders
 * @param currentEPSD - entrance-pupil semi-diameter in mm
 * @param currentPhysStopSD - physical stop semi-diameter in mm
 * @param chromatic - when true, include RGB focus-shift samples
 * @param fieldGeometry - optional current-state chief-ray field geometry
 * @returns field-curvature traces in mm relative to the image plane
 */
export function computeFieldCurvatureForState2(
  state: PreparedOpticalState,
  currentEPSD: number,
  currentPhysStopSD: number,
  chromatic = false,
  fieldGeometry?: FieldGeometryState,
  sampling?: AnalysisSamplingOptions,
) {
  return computeFieldCurvature(
    state.lens.runtime,
    zPosFromState(state),
    state.focusT,
    state.zoomT,
    currentEPSD,
    currentPhysStopSD,
    chromatic,
    state.aberrationT,
    fieldGeometry,
    sampling,
  );
}

/**
 * Compute the full field-curvature bundle for prepared-state analysis tabs.
 *
 * The bundle includes real-ray tangential/sagittal data plus the paraxial/Petzval
 * companions used for comparison overlays.
 *
 * @param state - prepared optical state for the current sliders
 * @param currentEPSD - entrance-pupil semi-diameter in mm
 * @param currentPhysStopSD - physical stop semi-diameter in mm
 * @param fieldGeometry - optional current-state chief-ray field geometry
 * @returns grouped field-curvature and astigmatism data for display
 */
export function computeFieldCurvatureBundleForState2(
  state: PreparedOpticalState,
  currentEPSD: number,
  currentPhysStopSD: number,
  fieldGeometry?: FieldGeometryState,
  sampling?: AnalysisSamplingOptions,
) {
  return computeFieldCurvatureBundle(
    state.lens.runtime,
    zPosFromState(state),
    state.focusT,
    state.zoomT,
    currentEPSD,
    currentPhysStopSD,
    state.aberrationT,
    fieldGeometry,
    sampling,
  );
}

/**
 * Compute all coma diagnostics for a prepared state.
 *
 * Uses the same aperture and field geometry inputs as visible off-axis rays so
 * meridional, sagittal, and point-cloud coma stay aligned with the diagram.
 *
 * @param state - prepared optical state for the current sliders
 * @param currentEPSD - entrance-pupil semi-diameter in mm
 * @param currentPhysStopSD - physical stop semi-diameter in mm
 * @param fieldGeometry - optional current-state chief-ray field geometry
 * @returns combined coma fan, preview, and point-cloud diagnostics
 */
export function computeComaAnalysisForState2(
  state: PreparedOpticalState,
  currentEPSD: number,
  currentPhysStopSD: number,
  fieldGeometry?: FieldGeometryState,
  sampling?: AnalysisSamplingOptions,
) {
  return computeComaAnalysis(
    state.lens.runtime,
    zPosFromState(state),
    state.focusT,
    state.zoomT,
    currentEPSD,
    currentPhysStopSD,
    state.aberrationT,
    fieldGeometry,
    sampling,
  );
}

/**
 * Compatibility wrapper for the RuntimeLens spherical-aberration profile helper.
 *
 * @param L - runtime lens object
 * @param zPos - current surface vertex positions in mm
 * @param focusT - normalized focus slider, 0=infinity and 1=close focus
 * @param zoomT - normalized zoom slider, ignored by prime lenses
 * @param currentEPSD - entrance-pupil semi-diameter in mm
 * @param currentPhysStopSD - physical stop semi-diameter in mm
 * @param aberrationT - normalized aberration spacing slider
 * @returns sampled spherical-aberration profile
 */
export function computeSAProfile2(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  aberrationT = 0,
) {
  return computeSAProfile(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, aberrationT);
}

/**
 * Compatibility wrapper for the RuntimeLens spherical-aberration summary helper.
 *
 * @param L - runtime lens object
 * @param zPos - current surface vertex positions in mm
 * @param focusT - normalized focus slider, 0=infinity and 1=close focus
 * @param zoomT - normalized zoom slider, ignored by prime lenses
 * @param currentEPSD - entrance-pupil semi-diameter in mm
 * @param currentPhysStopSD - physical stop semi-diameter in mm
 * @param aberrationT - normalized aberration spacing slider
 * @returns longitudinal/transverse spherical-aberration summary
 */
export function computeSphericalAberration2(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  aberrationT = 0,
) {
  return computeSphericalAberration(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, aberrationT);
}

/**
 * Compatibility wrapper for spherical-aberration blur-character classification.
 *
 * @param args - same arguments as `computeSphericalAberrationBlurCharacter`
 * @returns blur character for near/far defocus sides
 */
export function computeSphericalAberrationBlurCharacter2(
  ...args: Parameters<typeof computeSphericalAberrationBlurCharacter>
): ReturnType<typeof computeSphericalAberrationBlurCharacter> {
  return computeSphericalAberrationBlurCharacter(...args);
}

/**
 * Compatibility wrapper for field-curvature sampling.
 *
 * @param args - same arguments as `computeFieldCurvature`
 * @returns tangential/sagittal curvature data for the supplied runtime state
 */
export function computeFieldCurvature2(...args: Parameters<typeof computeFieldCurvature>) {
  return computeFieldCurvature(...args);
}

/**
 * Compatibility wrapper for the full field-curvature bundle.
 *
 * @param args - same arguments as `computeFieldCurvatureBundle`
 * @returns grouped curvature, astigmatism, and comparison traces
 */
export function computeFieldCurvatureBundle2(...args: Parameters<typeof computeFieldCurvatureBundle>) {
  return computeFieldCurvatureBundle(...args);
}

/**
 * Compatibility wrapper for combined coma diagnostics.
 *
 * @param args - same arguments as `computeComaAnalysis`
 * @returns meridional, sagittal, preview, and point-cloud coma data
 */
export function computeComaAnalysis2(...args: Parameters<typeof computeComaAnalysis>) {
  return computeComaAnalysis(...args);
}

/**
 * Compatibility wrapper for meridional coma sampling.
 *
 * @param args - same arguments as `computeMeridionalComa`
 * @returns meridional fan asymmetry at the selected off-axis field
 */
export function computeMeridionalComa2(...args: Parameters<typeof computeMeridionalComa>) {
  return computeMeridionalComa(...args);
}

/**
 * Compatibility wrapper for sagittal coma sampling.
 *
 * @param args - same arguments as `computeSagittalComa`
 * @returns sagittal fan spread at the selected off-axis field
 */
export function computeSagittalComa2(...args: Parameters<typeof computeSagittalComa>) {
  return computeSagittalComa(...args);
}

/**
 * Compatibility wrapper for compact coma preview data.
 *
 * @param args - same arguments as `computeComaPreview`
 * @returns traced preview spot data for the current state
 */
export function computeComaPreview2(...args: Parameters<typeof computeComaPreview>) {
  return computeComaPreview(...args);
}

/**
 * Compatibility wrapper for the 2D coma point-cloud preview.
 *
 * @param args - same arguments as `computeComaPointCloudPreview`
 * @returns chief-ray-centered sagittal/tangential point cloud
 */
export function computeComaPointCloudPreview2(...args: Parameters<typeof computeComaPointCloudPreview>) {
  return computeComaPointCloudPreview(...args);
}
