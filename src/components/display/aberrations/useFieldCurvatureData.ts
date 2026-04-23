import { useMemo } from "react";
import { computeFieldCurvature } from "../../../optics/aberrationAnalysis.js";
import type { RuntimeLens } from "../../../types/optics.js";

interface Params {
  L: RuntimeLens;
  zPos: number[];
  focusT: number;
  zoomT: number;
  currentEPSD: number;
  currentPhysStopSD: number;
}

export default function useFieldCurvatureData({ L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD }: Params) {
  return useMemo(() => {
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
    return { fieldCurvatureResult, chromaticFieldCurvatureResult };
  }, [L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD]);
}
