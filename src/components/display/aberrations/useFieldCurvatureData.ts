import { useMemo } from "react";
import { computeFieldCurvature } from "../../../optics/aberrationAnalysis.js";
import type { FieldGeometryState } from "../../../optics/optics.js";
import type { RuntimeLens } from "../../../types/optics.js";

interface Params {
  L: RuntimeLens;
  zPos: number[];
  focusT: number;
  zoomT: number;
  aberrationT?: number;
  currentEPSD: number;
  currentPhysStopSD: number;
  fieldGeometry?: FieldGeometryState | null;
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
}: Params) {
  return useMemo(() => {
    const fieldCurvatureResult = computeFieldCurvature(
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      false,
      aberrationT,
      fieldGeometry ?? undefined,
    );
    const chromaticFieldCurvatureResult = computeFieldCurvature(
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      true,
      aberrationT,
      fieldGeometry ?? undefined,
    );
    return { fieldCurvatureResult, chromaticFieldCurvatureResult };
  }, [L, zPos, focusT, zoomT, aberrationT, currentEPSD, currentPhysStopSD, fieldGeometry]);
}
