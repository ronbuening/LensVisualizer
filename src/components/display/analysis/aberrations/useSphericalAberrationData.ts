import { useMemo } from "react";
import {
  computeSphericalAberration,
  computeSphericalAberrationBlurCharacter,
  computeSAProfile,
} from "../../../../optics/aberrationAnalysis.js";
import { probe } from "../../../../utils/perfProbe.js";
import type { RuntimeLens } from "../../../../types/optics.js";

interface Params {
  L: RuntimeLens;
  zPos: number[];
  focusT: number;
  zoomT: number;
  aberrationT?: number;
  currentEPSD: number;
  currentPhysStopSD: number;
}

export default function useSphericalAberrationData({
  L,
  zPos,
  focusT,
  zoomT,
  aberrationT = 0,
  currentEPSD,
  currentPhysStopSD,
}: Params) {
  return useMemo(() => {
    const saResult = probe("computeSphericalAberration", () =>
      computeSphericalAberration(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, aberrationT),
    );
    const saProfile = computeSAProfile(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, aberrationT);
    const saBlurCharacter = computeSphericalAberrationBlurCharacter(
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
  }, [L, zPos, focusT, zoomT, aberrationT, currentEPSD, currentPhysStopSD]);
}
