/**
 * Bokeh analysis adapter — prepared-state and RuntimeLens wrappers for defocus footprint previews.
 *
 * Allows state-aware callers to reuse the current bokeh implementation while preserving legacy exports.
 */

import {
  buildBokehDensityGrid,
  buildBokehRadialProfile,
  classifyBokehBrightnessCharacter,
  computeBestFocusZ,
  computeBokehPreview,
  computeBokehPreviewPair,
  describeBokehDefocusSide,
} from "../aberration/bokeh.js";
import type { PreparedOpticalState } from "../types.js";
import type { AnalysisSamplingOptions } from "./analysisQuality.js";

/**
 * Compute the best-focus image plane for bokeh sampling from a prepared state.
 *
 * @param state - prepared optical state for current focus/zoom/aberration sliders
 * @param currentEPSD - entrance-pupil semi-diameter in mm
 * @param currentPhysStopSD - physical stop semi-diameter in mm
 * @returns best-focus z coordinate in mm, or the nominal image plane when solving is unavailable
 */
export function computeBestFocusZForState2(
  state: PreparedOpticalState,
  currentEPSD: number,
  currentPhysStopSD: number,
) {
  return computeBestFocusZ(
    state.lens.runtime,
    state.focusT,
    state.zoomT,
    currentEPSD,
    currentPhysStopSD,
    state.aberrationT,
  );
}

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
    state.lens.runtime,
    state.focusT,
    state.zoomT,
    currentEPSD,
    currentPhysStopSD,
    state.aberrationT,
    sampling,
  );
}

/**
 * Compatibility wrapper for best-focus solving.
 *
 * @param args - same arguments as `computeBestFocusZ`
 * @returns best-focus z coordinate in mm
 */
export function computeBestFocusZ2(...args: Parameters<typeof computeBestFocusZ>) {
  return computeBestFocusZ(...args);
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
