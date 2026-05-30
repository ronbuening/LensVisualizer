import { useMemo } from "react";
import { analysisJobsForState2 } from "../../../../optics/compat.js";
import { computeComaAnalysis } from "../../../../optics/aberrationAnalysis.js";
import { probe } from "../../../../utils/perfProbe.js";
import type { PreparedOpticalState } from "../../../../optics/types.js";
import type { AnalysisComputationContext } from "../../../../optics/compat.js";
import type { RuntimeLens } from "../../../../types/optics.js";
import type { FieldGeometryState } from "../../../../optics/optics.js";

interface Params {
  L: RuntimeLens;
  zPos: number[];
  focusT: number;
  zoomT: number;
  aberrationT?: number;
  currentEPSD: number;
  currentPhysStopSD: number;
  detailFieldFraction?: number;
  fieldGeometry?: FieldGeometryState | null;
  preparedState?: PreparedOpticalState | null;
  analysisContext?: AnalysisComputationContext;
}

export default function useComaData({
  L,
  zPos,
  focusT,
  zoomT,
  aberrationT = 0,
  currentEPSD,
  currentPhysStopSD,
  detailFieldFraction,
  fieldGeometry,
  preparedState,
  analysisContext,
}: Params) {
  return useMemo(() => {
    const comaSampling =
      detailFieldFraction === undefined ? undefined : { comaDetailFieldFraction: detailFieldFraction };
    const contextState = analysisContext?.preparedState ?? preparedState;
    const {
      meridionalComa: comaResult,
      sagittalComa: sagittalComaResult,
      pointCloudPreview: comaPreviewResult,
    } = analysisContext && comaSampling === undefined
      ? probe("computeComaAnalysis", () => analysisContext.computeComaAnalysis())
      : contextState
        ? probe("computeComaAnalysis", () =>
            comaSampling === undefined
              ? analysisJobsForState2.computeComaAnalysis(
                  contextState,
                  currentEPSD,
                  currentPhysStopSD,
                  fieldGeometry ?? undefined,
                )
              : analysisJobsForState2.computeComaAnalysis(
                  contextState,
                  currentEPSD,
                  currentPhysStopSD,
                  fieldGeometry ?? undefined,
                  comaSampling,
                ),
          )
        : probe("computeComaAnalysis", () =>
            comaSampling === undefined
              ? computeComaAnalysis(
                  L,
                  zPos,
                  focusT,
                  zoomT,
                  currentEPSD,
                  currentPhysStopSD,
                  aberrationT,
                  fieldGeometry ?? undefined,
                )
              : computeComaAnalysis(
                  L,
                  zPos,
                  focusT,
                  zoomT,
                  currentEPSD,
                  currentPhysStopSD,
                  aberrationT,
                  fieldGeometry ?? undefined,
                  comaSampling,
                ),
          );
    return { comaResult, sagittalComaResult, comaPreviewResult };
  }, [
    L,
    zPos,
    focusT,
    zoomT,
    aberrationT,
    currentEPSD,
    currentPhysStopSD,
    detailFieldFraction,
    fieldGeometry,
    preparedState,
    analysisContext,
  ]);
}
