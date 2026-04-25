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
  ) {
    return computeDistortionCurve(L, zPos, focusT, zoomT, dynamicEFL, currentPhysStopSD, fieldGeometry);
  },

  computeDistortionFieldGrid(
    L: RuntimeLens,
    zPos: number[],
    focusT: number,
    zoomT: number,
    currentPhysStopSD: number,
    fieldGeometry?: FieldGeometryState,
  ) {
    return computeDistortionFieldGrid(L, zPos, focusT, zoomT, currentPhysStopSD, fieldGeometry);
  },

  computeVignettingCurve(
    L: RuntimeLens,
    zPos: number[],
    focusT: number,
    zoomT: number,
    currentEPSD: number,
    currentPhysStopSD: number,
    fieldGeometry?: FieldGeometryState,
  ) {
    return computeVignettingCurve(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, fieldGeometry);
  },
};
