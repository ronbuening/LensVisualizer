import { useMemo } from "react";
import { analysisJobsForState2 } from "../../../../optics/compat.js";
import {
  computeSphericalAberration,
  computeSphericalAberrationBlurCharacter,
  computeSAProfile,
} from "../../../../optics/aberrationAnalysis.js";
import { probe } from "../../../../utils/perfProbe.js";
import type { PreparedOpticalState } from "../../../../optics/types.js";
import type { AnalysisComputationContext } from "../../../../optics/compat.js";
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
  return useMemo(() => {
    const saResult = analysisContext
      ? probe("computeSphericalAberration", () => analysisContext.computeSphericalAberration())
      : preparedState
        ? probe("computeSphericalAberration", () =>
            analysisJobsForState2.computeSphericalAberration(preparedState, currentEPSD, currentPhysStopSD),
          )
        : probe("computeSphericalAberration", () =>
            computeSphericalAberration(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, aberrationT),
          );
    const saProfile = analysisContext
      ? analysisContext.computeSAProfile()
      : preparedState
        ? analysisJobsForState2.computeSAProfile(preparedState, currentEPSD, currentPhysStopSD)
        : computeSAProfile(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, aberrationT);
    const saBlurCharacter = analysisContext
      ? analysisContext.computeSphericalAberrationBlurCharacter()
      : preparedState
        ? analysisJobsForState2.computeSphericalAberrationBlurCharacter(
            preparedState,
            currentEPSD,
            currentPhysStopSD,
            saResult,
          )
        : computeSphericalAberrationBlurCharacter(
            L,
            zPos,
            focusT,
            zoomT,
            currentEPSD,
            currentPhysStopSD,
            saResult,
            aberrationT,
          );
    return { saResult, saProfile, saBlurCharacter };
  }, [L, zPos, focusT, zoomT, aberrationT, currentEPSD, currentPhysStopSD, preparedState, analysisContext]);
}
