import { useMemo } from "react";
import {
  computeComaPointCloudPreview,
  computeFieldCurvature,
  computeMeridionalComa,
  computeSagittalComa,
  computeSphericalAberration,
  computeSAProfile,
} from "../../../optics/aberrationAnalysis.js";
import type { RuntimeLens } from "../../../types/optics.js";

interface UseAberrationsPanelDataParams {
  L: RuntimeLens;
  zPos: number[];
  focusT: number;
  zoomT: number;
  currentEPSD: number;
  currentPhysStopSD: number;
}

export default function useAberrationsPanelData({
  L,
  zPos,
  focusT,
  zoomT,
  currentEPSD,
  currentPhysStopSD,
}: UseAberrationsPanelDataParams) {
  return useMemo(() => {
    const saResult = computeSphericalAberration(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);
    const saProfile = computeSAProfile(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);
    const comaResult = computeMeridionalComa(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);
    const sagittalComaResult = computeSagittalComa(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);
    const comaPreviewResult = computeComaPointCloudPreview(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);
    const fieldCurvatureResult = computeFieldCurvature(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);
    const chromaticFieldCurvatureResult = computeFieldCurvature(
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      true,
    );

    return {
      saResult,
      saProfile,
      comaResult,
      sagittalComaResult,
      comaPreviewResult,
      fieldCurvatureResult,
      chromaticFieldCurvatureResult,
    };
  }, [L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD]);
}
