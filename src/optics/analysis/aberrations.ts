/**
 * Aberration analysis adapter — prepared-state wrappers for coma helpers.
 *
 * Bridges engine-native PreparedOpticalState calls to the existing RuntimeLens analysis implementations.
 */

import { runtimeView } from "../prescription/runtimeView.js";
import {
  computeComaAnalysis,
  computeComaPointCloudPreview,
  computeComaPreview,
  computeMeridionalComa,
  computeSagittalComa,
} from "../aberrationAnalysis.js";
import type { FieldGeometryState } from "../optics.js";
import type { PreparedOpticalState } from "../types.js";
import type { AnalysisSamplingOptions } from "./analysisQuality.js";
import { zPosForPreparedAnalysis2 } from "./preparedStateAdapters.js";

function zPosFromState(state: PreparedOpticalState): number[] {
  return zPosForPreparedAnalysis2(state);
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
    runtimeView(state.lens),
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
