import { useMemo } from "react";
import { computeFieldCurvatureForState2 } from "../../../../optics/compat.js";
import { computeFieldCurvature } from "../../../../optics/aberrationAnalysis.js";
import type { PreparedOpticalState } from "../../../../optics/types.js";
import type { FieldGeometryState } from "../../../../optics/optics.js";
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
}: Params) {
  return useMemo(() => {
    const fieldCurvatureResult = preparedState
      ? computeFieldCurvatureForState2(preparedState, currentEPSD, currentPhysStopSD, false, fieldGeometry ?? undefined)
      : computeFieldCurvature(
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
    const chromaticFieldCurvatureResult = preparedState
      ? computeFieldCurvatureForState2(preparedState, currentEPSD, currentPhysStopSD, true, fieldGeometry ?? undefined)
      : computeFieldCurvature(
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
  }, [L, zPos, focusT, zoomT, aberrationT, currentEPSD, currentPhysStopSD, fieldGeometry, preparedState]);
}
