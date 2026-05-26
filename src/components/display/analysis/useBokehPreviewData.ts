import { useMemo } from "react";
import { analysisJobsForState2 } from "../../../optics/compat.js";
import { probe } from "../../../utils/perfProbe.js";
import type { PreparedOpticalState } from "../../../optics/types.js";

export default function useBokehPreviewData(
  preparedState: PreparedOpticalState,
  currentEPSD: number,
  currentPhysStopSD: number,
) {
  return useMemo(
    () =>
      probe("computeBokehPreviewPair", () =>
        analysisJobsForState2.computeBokehPreviewPair(preparedState, currentEPSD, currentPhysStopSD),
      ),
    [preparedState, currentEPSD, currentPhysStopSD],
  );
}
