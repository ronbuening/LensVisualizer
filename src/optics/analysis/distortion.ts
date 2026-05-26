import { computeDistortionCurve, computeDistortionFieldGrid } from "../distortionAnalysis.js";
import type { FieldGeometryState } from "../optics.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { PreparedOpticalState } from "../types.js";

export function computeDistortionCurveForState2(
  state: PreparedOpticalState,
  dynamicEFL: number,
  currentPhysStopSD: number,
  fieldGeometry?: FieldGeometryState,
) {
  return computeDistortionCurve(
    state.lens.runtime,
    [...state.z],
    state.focusT,
    state.zoomT,
    dynamicEFL,
    currentPhysStopSD,
    fieldGeometry,
    state.aberrationT,
  );
}

export function computeDistortionFieldGridForState2(
  state: PreparedOpticalState,
  currentPhysStopSD: number,
  fieldGeometry?: FieldGeometryState,
) {
  return computeDistortionFieldGrid(
    state.lens.runtime,
    [...state.z],
    state.focusT,
    state.zoomT,
    currentPhysStopSD,
    fieldGeometry,
    state.aberrationT,
  );
}

export function computeDistortionCurve2(
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
}

export function computeDistortionFieldGrid2(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentPhysStopSD: number,
  fieldGeometry?: FieldGeometryState,
  aberrationT = 0,
) {
  return computeDistortionFieldGrid(L, zPos, focusT, zoomT, currentPhysStopSD, fieldGeometry, aberrationT);
}
