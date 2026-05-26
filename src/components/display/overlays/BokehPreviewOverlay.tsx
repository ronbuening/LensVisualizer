/**
 * BokehPreviewOverlay — Panel overlay showing bokeh ball density heatmaps
 * at four field positions for both infinity and near-focus source distances.
 *
 * The overlay responds in real time to the focus and aperture sliders.
 * At the lens's current focus setting, the infinity grid shows how far
 * objects at infinity are defocused and the near-focus grid shows the same
 * for objects at the minimum focus distance.
 */

import { useDeferredValue } from "react";
import type { RuntimeLens } from "../../../types/optics.js";
import type { Theme } from "../../../types/theme.js";
import BokehPreviewContent from "../analysis/BokehPreviewContent.js";
import useBokehPreviewData from "../analysis/useBokehPreviewData.js";
import usePreparedAnalysisState from "../analysis/usePreparedAnalysisState.js";

interface BokehPreviewOverlayProps {
  L: RuntimeLens;
  focusT: number;
  zoomT: number;
  aberrationT?: number;
  currentEPSD: number;
  currentPhysStopSD: number;
  t: Theme;
}

export default function BokehPreviewOverlay({
  L,
  focusT,
  zoomT,
  aberrationT = 0,
  currentEPSD,
  currentPhysStopSD,
  t,
}: BokehPreviewOverlayProps) {
  const dFocusT = useDeferredValue(focusT);
  const dZoomT = useDeferredValue(zoomT);
  const dAberrationT = useDeferredValue(aberrationT);
  const dEPSD = useDeferredValue(currentEPSD);
  const dStopSD = useDeferredValue(currentPhysStopSD);

  const preparedState = usePreparedAnalysisState({ L, focusT: dFocusT, zoomT: dZoomT, aberrationT: dAberrationT });
  const pair = useBokehPreviewData(preparedState, dEPSD, dStopSD);

  const isStale =
    dFocusT !== focusT ||
    dZoomT !== zoomT ||
    dAberrationT !== aberrationT ||
    dEPSD !== currentEPSD ||
    dStopSD !== currentPhysStopSD;

  return (
    <div
      style={{ padding: "8px 16px 16px", overflow: "auto", opacity: isStale ? 0.5 : 1, transition: "opacity 0.15s" }}
    >
      <BokehPreviewContent pair={pair} t={t} />
    </div>
  );
}
