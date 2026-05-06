import { useMemo } from "react";
import { computeFieldCurvature } from "../../../optics/aberrationAnalysis.js";
import type { RuntimeLens } from "../../../types/optics.js";

interface Params {
  L: RuntimeLens;
  zPos: number[];
  focusT: number;
  zoomT: number;
  aberrationT?: number;
  currentEPSD: number;
  currentPhysStopSD: number;
}

export default function useFieldCurvatureData({
  L,
  zPos,
  focusT,
  zoomT,
  aberrationT = 0,
  currentEPSD,
  currentPhysStopSD,
}: Params) {
  return useMemo(() => {
    const fieldCurvatureResult = computeFieldCurvature(
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      false,
      aberrationT,
    );
    const chromaticFieldCurvatureResult = computeFieldCurvature(
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      true,
      aberrationT,
    );
    return { fieldCurvatureResult, chromaticFieldCurvatureResult };
  }, [L, zPos, focusT, zoomT, aberrationT, currentEPSD, currentPhysStopSD]);
}
