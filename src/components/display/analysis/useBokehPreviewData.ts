import { useMemo } from "react";
import { analysisJobsForState2 } from "../../../optics/compat.js";
import { probe } from "../../../utils/perfProbe.js";
import type { PreparedOpticalState } from "../../../optics/types.js";
import type { AnalysisComputationContext } from "../../../optics/compat.js";

export default function useBokehPreviewData(
  preparedState: PreparedOpticalState,
  currentEPSD: number,
  currentPhysStopSD: number,
  analysisContext?: AnalysisComputationContext,
) {
  return useMemo(
    () =>
      probe(
        "computeBokehPreviewPair",
        () =>
          analysisContext?.computeBokehPreviewPair() ??
          analysisJobsForState2.computeBokehPreviewPair(preparedState, currentEPSD, currentPhysStopSD),
      ),
    [analysisContext, preparedState, currentEPSD, currentPhysStopSD],
  );
}
