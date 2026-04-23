import { useMemo } from "react";
import {
  computeComaAnalysis,
  computeFieldCurvature,
  computeSphericalAberration,
  computeSphericalAberrationBlurCharacter,
  computeSAProfile,
} from "../../../optics/aberrationAnalysis.js";
import { probe } from "../../../utils/perfProbe.js";
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
    const saResult = probe("computeSphericalAberration", () =>
      computeSphericalAberration(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD),
    );
    const saProfile = computeSAProfile(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);
    const saBlurCharacter = computeSphericalAberrationBlurCharacter(
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      saResult,
    );
    const {
      meridionalComa: comaResult,
      sagittalComa: sagittalComaResult,
      pointCloudPreview: comaPreviewResult,
    } = probe("computeComaAnalysis", () => computeComaAnalysis(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD));
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
      saBlurCharacter,
      comaResult,
      sagittalComaResult,
      comaPreviewResult,
      fieldCurvatureResult,
      chromaticFieldCurvatureResult,
    };
  }, [L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD]);
}
