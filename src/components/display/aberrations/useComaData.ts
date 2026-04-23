import { useMemo } from "react";
import { computeComaAnalysis } from "../../../optics/aberrationAnalysis.js";
import { probe } from "../../../utils/perfProbe.js";
import type { RuntimeLens } from "../../../types/optics.js";

interface Params {
  L: RuntimeLens;
  zPos: number[];
  focusT: number;
  zoomT: number;
  currentEPSD: number;
  currentPhysStopSD: number;
}

export default function useComaData({ L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD }: Params) {
  return useMemo(() => {
    const {
      meridionalComa: comaResult,
      sagittalComa: sagittalComaResult,
      pointCloudPreview: comaPreviewResult,
    } = probe("computeComaAnalysis", () => computeComaAnalysis(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD));
    return { comaResult, sagittalComaResult, comaPreviewResult };
  }, [L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD]);
}
