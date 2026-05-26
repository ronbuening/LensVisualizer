import type { FieldGeometryState } from "../../optics/optics.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { PreparedOpticalState } from "../types.js";
import {
  computeDistortionCurve2,
  computeDistortionCurveForState2,
  computeDistortionFieldGrid2,
  computeDistortionFieldGridForState2,
} from "./distortion.js";
import { computeVignettingCurve2, computeVignettingCurveForState2 } from "./vignetting.js";

export const analysisJobs2 = {
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
    return computeDistortionCurve2(L, zPos, focusT, zoomT, dynamicEFL, currentPhysStopSD, fieldGeometry, aberrationT);
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
    return computeDistortionFieldGrid2(L, zPos, focusT, zoomT, currentPhysStopSD, fieldGeometry, aberrationT);
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
    return computeVignettingCurve2(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, fieldGeometry, aberrationT);
  },
};

export const analysisJobsForState2 = {
  computeDistortionCurve(
    state: PreparedOpticalState,
    dynamicEFL: number,
    currentPhysStopSD: number,
    fieldGeometry?: FieldGeometryState,
  ) {
    return computeDistortionCurveForState2(state, dynamicEFL, currentPhysStopSD, fieldGeometry);
  },

  computeDistortionFieldGrid(
    state: PreparedOpticalState,
    currentPhysStopSD: number,
    fieldGeometry?: FieldGeometryState,
  ) {
    return computeDistortionFieldGridForState2(state, currentPhysStopSD, fieldGeometry);
  },

  computeVignettingCurve(
    state: PreparedOpticalState,
    currentEPSD: number,
    currentPhysStopSD: number,
    fieldGeometry?: FieldGeometryState,
  ) {
    return computeVignettingCurveForState2(state, currentEPSD, currentPhysStopSD, fieldGeometry);
  },
};
