/**
 * Analysis job facade — stable synchronous analysis registry for RuntimeLens callers.
 *
 * Re-exports the engine job table while leaving room for future worker-backed execution behind the same API.
 */

import { computeDistortionCurve, computeDistortionFieldGrid } from "./distortionAnalysis.js";
import { computeVignettingCurve } from "./vignetteAnalysis.js";
import type { FieldGeometryState } from "./optics.js";
import type { RuntimeLens } from "../types/optics.js";

export const analysisJobs = {
  computeDistortionCurve(
    L: RuntimeLens,
    zPos: number[],
    focusT: number,
    zoomT: number,
    dynamicEFL: number,
    currentPhysStopSD: number,
    fieldGeometry?: FieldGeometryState,
    aberrationT = 0,
  ) {
    return computeDistortionCurve(L, zPos, focusT, zoomT, dynamicEFL, currentPhysStopSD, fieldGeometry, aberrationT);
  },

  computeDistortionFieldGrid(
    L: RuntimeLens,
    zPos: number[],
    focusT: number,
    zoomT: number,
    currentPhysStopSD: number,
    fieldGeometry?: FieldGeometryState,
    aberrationT = 0,
  ) {
    return computeDistortionFieldGrid(L, zPos, focusT, zoomT, currentPhysStopSD, fieldGeometry, aberrationT);
  },

  computeVignettingCurve(
    L: RuntimeLens,
    zPos: number[],
    focusT: number,
    zoomT: number,
    currentEPSD: number,
    currentPhysStopSD: number,
    fieldGeometry?: FieldGeometryState,
    aberrationT = 0,
  ) {
    return computeVignettingCurve(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, fieldGeometry, aberrationT);
  },
};
