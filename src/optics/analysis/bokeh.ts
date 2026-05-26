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

export function computeBokehPreviewPairForState2(
  state: PreparedOpticalState,
  currentEPSD: number,
  currentPhysStopSD: number,
) {
  return computeBokehPreviewPair(
    state.lens.runtime,
    state.focusT,
    state.zoomT,
    currentEPSD,
    currentPhysStopSD,
    state.aberrationT,
  );
}

export function computeBestFocusZ2(...args: Parameters<typeof computeBestFocusZ>) {
  return computeBestFocusZ(...args);
}

export function computeBokehPreview2(...args: Parameters<typeof computeBokehPreview>) {
  return computeBokehPreview(...args);
}

export function computeBokehPreviewPair2(...args: Parameters<typeof computeBokehPreviewPair>) {
  return computeBokehPreviewPair(...args);
}

export {
  buildBokehDensityGrid as buildBokehDensityGrid2,
  buildBokehRadialProfile as buildBokehRadialProfile2,
  classifyBokehBrightnessCharacter as classifyBokehBrightnessCharacter2,
  describeBokehDefocusSide as describeBokehDefocusSide2,
};
