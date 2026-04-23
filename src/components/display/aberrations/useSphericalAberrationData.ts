import { useMemo } from "react";
import {
  computeSphericalAberration,
  computeSphericalAberrationBlurCharacter,
  computeSAProfile,
} from "../../../optics/aberrationAnalysis.js";
import { probe } from "../../../utils/perfProbe.js";
import type { RuntimeLens } from "../../../types/optics.js";

interface Params {
  L: RuntimeLens;
  zPos: number[];
  focusT: number;
  zoomT: number;
  currentEPSD: number;
  currentPhysStopSD: number;
}

export default function useSphericalAberrationData({ L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD }: Params) {
  return useMemo(() => {
    const saResult = probe("computeSphericalAberration", () =>
      computeSphericalAberration(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD),
    );
    const saProfile = computeSAProfile(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);
    const saBlurCharacter = computeSphericalAberrationBlurCharacter(
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      saResult,
    );
    return { saResult, saProfile, saBlurCharacter };
  }, [L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD]);
}
