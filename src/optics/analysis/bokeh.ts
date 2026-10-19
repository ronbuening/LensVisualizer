/**
 * Bokeh analysis adapter — prepared-state and RuntimeLens wrappers for defocus footprint previews.
 *
 * Allows state-aware callers to reuse the current bokeh implementation while preserving legacy exports.
 */

import { runtimeView } from "../prescription/runtimeView.js";
import {
  buildBokehDensityGrid,
  computeBokehPreview,
  computeBokehPreviewPair,
  describeBokehDefocusSide,
} from "../aberration/bokeh.js";
import { buildBokehRadialProfile, classifyBokehBrightnessCharacter } from "./aberration/radialProfile.js";
import type { PreparedOpticalState } from "../types.js";
import type { AnalysisSamplingOptions } from "./analysisQuality.js";

/**
 * Compute paired foreground/background bokeh previews for a prepared state.
 *
 * @param state - prepared optical state for current focus/zoom/aberration sliders
 * @param currentEPSD - entrance-pupil semi-diameter in mm
 * @param currentPhysStopSD - physical stop semi-diameter in mm
 * @returns two defocus footprints around best focus for display comparison
 */
export function computeBokehPreviewPairForState2(
  state: PreparedOpticalState,
  currentEPSD: number,
  currentPhysStopSD: number,
  sampling?: AnalysisSamplingOptions,
) {
  return computeBokehPreviewPair(
    runtimeView(state.lens),
    state.focusT,
    state.zoomT,
    currentEPSD,
    currentPhysStopSD,
    state.aberrationT,
    sampling,
  );
}

/**
 * Compatibility wrapper for a single bokeh preview footprint.
 *
 * @param args - same arguments as `computeBokehPreview`
 * @returns sampled defocus footprint for the requested side of focus
 */
export function computeBokehPreview2(...args: Parameters<typeof computeBokehPreview>) {
  return computeBokehPreview(...args);
}

/**
 * Compatibility wrapper for paired foreground/background bokeh previews.
 *
 * @param args - same arguments as `computeBokehPreviewPair`
 * @returns paired defocus-footprint previews
 */
export function computeBokehPreviewPair2(...args: Parameters<typeof computeBokehPreviewPair>) {
  return computeBokehPreviewPair(...args);
}

export {
  buildBokehDensityGrid as buildBokehDensityGrid2,
  buildBokehRadialProfile as buildBokehRadialProfile2,
  classifyBokehBrightnessCharacter as classifyBokehBrightnessCharacter2,
  describeBokehDefocusSide as describeBokehDefocusSide2,
};
