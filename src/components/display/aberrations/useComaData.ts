import { useMemo } from "react";
import { computeComaAnalysis } from "../../../optics/aberrationAnalysis.js";
import { probe } from "../../../utils/perfProbe.js";
import type { RuntimeLens } from "../../../types/optics.js";
import type { FieldGeometryState } from "../../../optics/optics.js";

interface Params {
  L: RuntimeLens;
  zPos: number[];
  focusT: number;
  zoomT: number;
  aberrationT?: number;
  currentEPSD: number;
  currentPhysStopSD: number;
  fieldGeometry?: FieldGeometryState | null;
}

export default function useComaData({
  L,
  zPos,
  focusT,
  zoomT,
  aberrationT = 0,
  currentEPSD,
  currentPhysStopSD,
  fieldGeometry,
}: Params) {
  return useMemo(() => {
    const {
      meridionalComa: comaResult,
      sagittalComa: sagittalComaResult,
      pointCloudPreview: comaPreviewResult,
    } = probe("computeComaAnalysis", () =>
      computeComaAnalysis(
        L,
        zPos,
        focusT,
        zoomT,
        currentEPSD,
        currentPhysStopSD,
        aberrationT,
        fieldGeometry ?? undefined,
      ),
    );
    return { comaResult, sagittalComaResult, comaPreviewResult };
  }, [L, zPos, focusT, zoomT, aberrationT, currentEPSD, currentPhysStopSD, fieldGeometry]);
}
