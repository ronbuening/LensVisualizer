import {
  computeComaAnalysis,
  computeComaPointCloudPreview,
  computeComaPreview,
  computeFieldCurvature,
  computeMeridionalComa,
  computeSAProfile,
  computeSagittalComa,
  computeSphericalAberration,
  computeSphericalAberrationBlurCharacter,
} from "../aberrationAnalysis.js";
import type { FieldGeometryState } from "../optics.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { PreparedOpticalState } from "../types.js";

function zPosFromState(state: PreparedOpticalState): number[] {
  return [...state.z];
}

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

export function computeSphericalAberrationBlurCharacterForState2(
  state: PreparedOpticalState,
  currentEPSD: number,
  currentPhysStopSD: number,
  baseResult: Parameters<typeof computeSphericalAberrationBlurCharacter>[6] = null,
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
  );
}

export function computeFieldCurvatureForState2(
  state: PreparedOpticalState,
  currentEPSD: number,
  currentPhysStopSD: number,
  chromatic = false,
  fieldGeometry?: FieldGeometryState,
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
  );
}

export function computeComaAnalysisForState2(
  state: PreparedOpticalState,
  currentEPSD: number,
  currentPhysStopSD: number,
  fieldGeometry?: FieldGeometryState,
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
  );
}

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

export function computeSphericalAberrationBlurCharacter2(
  ...args: Parameters<typeof computeSphericalAberrationBlurCharacter>
): ReturnType<typeof computeSphericalAberrationBlurCharacter> {
  return computeSphericalAberrationBlurCharacter(...args);
}

export function computeFieldCurvature2(...args: Parameters<typeof computeFieldCurvature>) {
  return computeFieldCurvature(...args);
}

export function computeComaAnalysis2(...args: Parameters<typeof computeComaAnalysis>) {
  return computeComaAnalysis(...args);
}

export function computeMeridionalComa2(...args: Parameters<typeof computeMeridionalComa>) {
  return computeMeridionalComa(...args);
}

export function computeSagittalComa2(...args: Parameters<typeof computeSagittalComa>) {
  return computeSagittalComa(...args);
}

export function computeComaPreview2(...args: Parameters<typeof computeComaPreview>) {
  return computeComaPreview(...args);
}

export function computeComaPointCloudPreview2(...args: Parameters<typeof computeComaPointCloudPreview>) {
  return computeComaPointCloudPreview(...args);
}
