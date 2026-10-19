import { useMemo } from "react";
import { createAnalysisRequest, createAnalysisComputationContext, stateWithZ } from "../../../../optics/analysis.js";
import usePreparedAnalysisState from "../usePreparedAnalysisState.js";
import { probe } from "../../../../utils/perfProbe.js";
import type { PreparedOpticalState } from "../../../../optics/types.js";
import type { AnalysisComputationContext } from "../../../../optics/analysis.js";
import type { RuntimeLens } from "../../../../types/optics.js";

interface Params {
  L: RuntimeLens;
  zPos: number[];
  focusT: number;
  zoomT: number;
  aberrationT?: number;
  currentEPSD: number;
  currentPhysStopSD: number;
  preparedState?: PreparedOpticalState | null;
  analysisContext?: AnalysisComputationContext;
}

export default function useSphericalAberrationData({
  L,
  zPos,
  focusT,
  zoomT,
  aberrationT = 0,
  currentEPSD,
  currentPhysStopSD,
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
      }),
    [analysisContext, preparedState, state, zPos, L, currentEPSD, currentPhysStopSD],
  );
  const context = useMemo(
    () => analysisContext ?? createAnalysisComputationContext(request),
    [analysisContext, request],
  );
  return useMemo(() => {
    const saResult = probe("computeSphericalAberration", () => context.computeSphericalAberration());
    const saProfile = context.computeSAProfile();
    const saBlurCharacter = context.computeSphericalAberrationBlurCharacter();
    return { saResult, saProfile, saBlurCharacter };
  }, [context]);
}
