import { useMemo } from "react";
import { prepareRuntimeState } from "../../../optics/compat.js";
import type { PreparedOpticalState } from "../../../optics/types.js";
import type { RuntimeLens } from "../../../types/optics.js";

interface PreparedAnalysisStateParams {
  L: RuntimeLens;
  focusT: number;
  zoomT: number;
  aberrationT?: number;
  preparedState?: PreparedOpticalState | null;
}

export default function usePreparedAnalysisState({
  L,
  focusT,
  zoomT,
  aberrationT = 0,
  preparedState,
}: PreparedAnalysisStateParams): PreparedOpticalState {
  return useMemo(
    () => preparedState ?? prepareRuntimeState(L, focusT, zoomT, aberrationT),
    [L, focusT, zoomT, aberrationT, preparedState],
  );
}
