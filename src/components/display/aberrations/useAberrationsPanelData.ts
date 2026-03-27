import { useMemo } from "react";
import {
  computeEstimatedComaPreview,
  computeMeridionalComa,
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
    const comaPreviewResult = computeEstimatedComaPreview(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);

    return {
      saResult,
      saProfile,
      comaResult,
      comaPreviewResult,
    };
  }, [L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD]);
}
