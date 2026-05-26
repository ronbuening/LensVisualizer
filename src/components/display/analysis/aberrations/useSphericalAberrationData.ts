import { useMemo } from "react";
import {
  computeSAProfileForState2,
  computeSphericalAberrationBlurCharacterForState2,
  computeSphericalAberrationForState2,
} from "../../../../optics/compat.js";
import {
  computeSphericalAberration,
  computeSphericalAberrationBlurCharacter,
  computeSAProfile,
} from "../../../../optics/aberrationAnalysis.js";
import { probe } from "../../../../utils/perfProbe.js";
import type { PreparedOpticalState } from "../../../../optics/types.js";
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
}: Params) {
  return useMemo(() => {
    const saResult = preparedState
      ? probe("computeSphericalAberration", () =>
          computeSphericalAberrationForState2(preparedState, currentEPSD, currentPhysStopSD),
        )
      : probe("computeSphericalAberration", () =>
          computeSphericalAberration(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, aberrationT),
        );
    const saProfile = preparedState
      ? computeSAProfileForState2(preparedState, currentEPSD, currentPhysStopSD)
      : computeSAProfile(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, aberrationT);
    const saBlurCharacter = preparedState
      ? computeSphericalAberrationBlurCharacterForState2(preparedState, currentEPSD, currentPhysStopSD, saResult)
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
  }, [L, zPos, focusT, zoomT, aberrationT, currentEPSD, currentPhysStopSD, preparedState]);
}
