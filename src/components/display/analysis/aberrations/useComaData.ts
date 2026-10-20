/**
 * Coma data hook — reuses deferred requests and isolates detail-field variants.
 * The context owns caching and centered/movement availability assertions.
 */

import { useMemo } from "react";
import { createAnalysisRequest, createAnalysisComputationContext, stateWithZ } from "../../../../optics/analysis.js";
import usePreparedAnalysisState from "../usePreparedAnalysisState.js";
import { probe } from "../../../../utils/perfProbe.js";
import type { PreparedOpticalState } from "../../../../optics/types.js";
import type { AnalysisComputationContext } from "../../../../optics/analysis.js";
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
  const state = usePreparedAnalysisState({
    L,
    focusT,
    zoomT,
    aberrationT,
    preparedState: analysisContext?.preparedState ?? preparedState,
  });
  const request = useMemo(() => {
    if (analysisContext && detailFieldFraction === undefined) return analysisContext.request;
    // A detail field is its own request; retain the override path's supplied aperture/field.
    return createAnalysisRequest({
      preparedState: analysisContext || preparedState ? state : stateWithZ(state, zPos),
      dynamicEFL: L.EFL,
      currentEPSD,
      currentPhysStopSD,
      fieldGeometry,
      sampling: detailFieldFraction === undefined ? undefined : { comaDetailFieldFraction: detailFieldFraction },
      perspectiveTraceContext: analysisContext?.request.perspectiveTraceContext,
    });
  }, [
    analysisContext,
    detailFieldFraction,
    preparedState,
    state,
    zPos,
    L,
    currentEPSD,
    currentPhysStopSD,
    fieldGeometry,
  ]);
  const context = useMemo(
    () =>
      analysisContext && detailFieldFraction === undefined
        ? analysisContext
        : createAnalysisComputationContext(request),
    [analysisContext, detailFieldFraction, request],
  );
  return useMemo(() => {
    const {
      meridionalComa: comaResult,
      sagittalComa: sagittalComaResult,
      pointCloudPreview: comaPreviewResult,
    } = probe("computeComaAnalysis", () => context.computeComaAnalysis());
    return { comaResult, sagittalComaResult, comaPreviewResult };
  }, [context]);
}
