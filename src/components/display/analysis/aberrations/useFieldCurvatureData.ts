import { useMemo } from "react";
import { analysisJobsForState2 } from "../../../../optics/compat.js";
import { computeFieldCurvatureBundle } from "../../../../optics/aberrationAnalysis.js";
import type { PreparedOpticalState } from "../../../../optics/types.js";
import type { AnalysisComputationContext } from "../../../../optics/compat.js";
import type { FieldGeometryState } from "../../../../optics/optics.js";
import type { RuntimeLens } from "../../../../types/optics.js";

interface Params {
  L: RuntimeLens;
  zPos: number[];
  focusT: number;
  zoomT: number;
  aberrationT?: number;
  currentEPSD: number;
  currentPhysStopSD: number;
  fieldGeometry?: FieldGeometryState | null;
  preparedState?: PreparedOpticalState | null;
  analysisContext?: AnalysisComputationContext;
}

export default function useFieldCurvatureData({
  L,
  zPos,
  focusT,
  zoomT,
  aberrationT = 0,
  currentEPSD,
  currentPhysStopSD,
  fieldGeometry,
  preparedState,
  analysisContext,
}: Params) {
  return useMemo(() => {
    const bundle = analysisContext
      ? analysisContext.computeFieldCurvatureBundle()
      : preparedState
        ? analysisJobsForState2.computeFieldCurvatureBundle(
            preparedState,
            currentEPSD,
            currentPhysStopSD,
            fieldGeometry ?? undefined,
          )
        : computeFieldCurvatureBundle(
            L,
            zPos,
            focusT,
            zoomT,
            currentEPSD,
            currentPhysStopSD,
            aberrationT,
            fieldGeometry ?? undefined,
          );
    return {
      fieldCurvatureResult: bundle.fieldCurvature,
      chromaticFieldCurvatureResult: bundle.chromaticFieldCurvature,
    };
  }, [
    L,
    zPos,
    focusT,
    zoomT,
    aberrationT,
    currentEPSD,
    currentPhysStopSD,
    fieldGeometry,
    preparedState,
    analysisContext,
  ]);
}
