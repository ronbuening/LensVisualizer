import { useMemo } from "react";
import { createAnalysisRequest, createAnalysisComputationContext } from "../../../../optics/analysis.js";
import { stateWithZ } from "../../../../optics/optics.js";
import usePreparedAnalysisState from "../usePreparedAnalysisState.js";
import type { PreparedOpticalState } from "../../../../optics/types.js";
import type { AnalysisComputationContext } from "../../../../optics/analysis.js";
import type { FieldGeometryState } from "../../../../optics/fieldGeometry.js";
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
  const state = usePreparedAnalysisState({
    L,
    focusT,
    zoomT,
    aberrationT,
    preparedState: analysisContext?.preparedState ?? preparedState,
  });
  const request = useMemo(
    () =>
      analysisContext?.request ??
      createAnalysisRequest({
        preparedState: preparedState ? state : stateWithZ(state, zPos),
        dynamicEFL: L.EFL,
        currentEPSD,
        currentPhysStopSD,
        fieldGeometry,
      }),
    [analysisContext, preparedState, state, zPos, L, currentEPSD, currentPhysStopSD, fieldGeometry],
  );
  const context = useMemo(
    () => analysisContext ?? createAnalysisComputationContext(request),
    [analysisContext, request],
  );
  return useMemo(() => {
    const bundle = context.computeFieldCurvatureBundle();
    return {
      fieldCurvatureResult: bundle.fieldCurvature,
      chromaticFieldCurvatureResult: bundle.chromaticFieldCurvature,
    };
  }, [context]);
}
