/** Bokeh preview hook shares request identity across deferred controls and aperture changes. */

import { useMemo } from "react";
import {
  createAnalysisRequest,
  createAnalysisComputationContext,
  type AnalysisComputationContext,
} from "../../../optics/analysis.js";
import { probe } from "../../../utils/perfProbe.js";
import type { PreparedOpticalState } from "../../../optics/types.js";

/**
 * Reuse the deferred context or snapshot standalone bokeh inputs.
 * @param preparedState - geometry owning focus, zoom and aberration controls
 * @param currentEPSD - entrance-pupil semi-diameter in mm
 * @param currentPhysStopSD - physical stop semi-diameter in mm
 * @param analysisContext - optional shared drawer context
 * @returns cached infinity and near-focus previews
 */
export default function useBokehPreviewData(
  preparedState: PreparedOpticalState,
  currentEPSD: number,
  currentPhysStopSD: number,
  analysisContext?: AnalysisComputationContext,
) {
  const request = useMemo(
    () =>
      analysisContext?.request ??
      createAnalysisRequest({
        preparedState,
        dynamicEFL: 0,
        currentEPSD,
        currentPhysStopSD,
      }),
    [analysisContext, preparedState, currentEPSD, currentPhysStopSD],
  );
  const context = useMemo(
    () => analysisContext ?? createAnalysisComputationContext(request),
    [analysisContext, request],
  );
  return useMemo(() => probe("computeBokehPreviewPair", () => context.computeBokehPreviewPair()), [context]);
}
