import { useMemo } from "react";
import { computeBokehPreviewPairForState2 } from "../../../optics/compat.js";
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
        computeBokehPreviewPairForState2(preparedState, currentEPSD, currentPhysStopSD),
      ),
    [preparedState, currentEPSD, currentPhysStopSD],
  );
}
