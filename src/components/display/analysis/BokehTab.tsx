import type { PreparedOpticalState } from "../../../optics/types.js";
import type { RuntimeLens } from "../../../types/optics.js";
import type { Theme } from "../../../types/theme.js";
import BokehPreviewContent from "./BokehPreviewContent.js";
import useBokehPreviewData from "./useBokehPreviewData.js";
import usePreparedAnalysisState from "./usePreparedAnalysisState.js";

interface BokehTabProps {
  L: RuntimeLens;
  t: Theme;
  focusT: number;
  zoomT: number;
  aberrationT?: number;
  currentEPSD: number;
  currentPhysStopSD: number;
  preparedState?: PreparedOpticalState | null;
}

export default function BokehTab({
  L,
  t,
  focusT,
  zoomT,
  aberrationT = 0,
  currentEPSD,
  currentPhysStopSD,
  preparedState: preparedStateProp,
}: BokehTabProps) {
  const preparedState = usePreparedAnalysisState({ L, focusT, zoomT, aberrationT, preparedState: preparedStateProp });
  const pair = useBokehPreviewData(preparedState, currentEPSD, currentPhysStopSD);

  return (
    <div style={{ padding: "8px 0" }}>
      <BokehPreviewContent pair={pair} t={t} title="Bokeh / Defocused Point Image" />
    </div>
  );
}
