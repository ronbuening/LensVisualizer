import { useDeferredValue, useEffect, useMemo, useRef, type ReactNode } from "react";
import { ANALYSIS_TAB_RENDERERS } from "./analysisTabRenderers.js";
import type { RuntimeLens } from "../../../types/optics.js";
import type { Theme } from "../../../types/theme.js";
import type { FieldGeometryState } from "../../../optics/optics.js";
import { isFisheyeProjection, projectionValueAtZoom } from "../../../optics/projection.js";
import type { AnalysisTabId } from "../../../types/state.js";

interface AnalysisDrawerContentProps {
  activeTab: AnalysisTabId;
  L: RuntimeLens;
  t: Theme;
  zPos: number[];
  focusT: number;
  zoomT: number;
  aberrationT?: number;
  dynamicEFL: number;
  currentEPSD: number;
  currentPhysStopSD: number;
  fNumber: number;
  fieldGeometry?: FieldGeometryState | null;
  movementActive?: boolean;
  sliderInteracting?: boolean;
  aberrationsExpanded: boolean;
  onAberrationsExpandedChange: (expanded: boolean) => void;
}

export default function AnalysisDrawerContent({
  activeTab,
  L,
  t,
  zPos,
  focusT,
  zoomT,
  aberrationT = 0,
  dynamicEFL,
  currentEPSD,
  currentPhysStopSD,
  fNumber,
  fieldGeometry = null,
  movementActive = false,
  sliderInteracting = false,
  aberrationsExpanded,
  onAberrationsExpandedChange,
}: AnalysisDrawerContentProps) {
  // Defer all slider-derived inputs so analysis tabs only recompute when React
  // has idle time, keeping the main viewport responsive during drag.
  const dFocusT = useDeferredValue(focusT);
  const dZoomT = useDeferredValue(zoomT);
  const dAberrationT = useDeferredValue(aberrationT);
  const dEPSD = useDeferredValue(currentEPSD);
  const dStopSD = useDeferredValue(currentPhysStopSD);
  const dDynamicEFL = useDeferredValue(dynamicEFL);
  const dFNumber = useDeferredValue(fNumber);
  const dFieldGeometry = useDeferredValue(fieldGeometry);
  const deferredInputs = useMemo(
    () => ({
      focusT: dFocusT,
      zoomT: dZoomT,
      aberrationT: dAberrationT,
      currentEPSD: dEPSD,
      currentPhysStopSD: dStopSD,
      dynamicEFL: dDynamicEFL,
      fNumber: dFNumber,
      fieldGeometry: dFieldGeometry,
    }),
    [dFocusT, dZoomT, dAberrationT, dEPSD, dStopSD, dDynamicEFL, dFNumber, dFieldGeometry],
  );
  const lastSettledInputsRef = useRef(deferredInputs);

  useEffect(() => {
    if (sliderInteracting) return;
    lastSettledInputsRef.current = deferredInputs;
  }, [sliderInteracting, deferredInputs]);

  const analysisInputs = sliderInteracting ? lastSettledInputsRef.current : deferredInputs;
  const projection = L.projection ?? { kind: "rectilinear" };
  const fisheyeProjectionText = (() => {
    if (!isFisheyeProjection(projection)) return null;
    const fullFieldDeg = projectionValueAtZoom(projection.fullFieldDeg, analysisInputs.zoomT);
    const imageCircleMm = projectionValueAtZoom(projection.imageCircleMm, analysisInputs.zoomT);
    return `Circular fisheye projection (${projection.kind === "fisheye-equisolid" ? "equisolid" : "equidistant"}): ${fullFieldDeg?.toFixed(0) ?? "unknown"}° field${
      imageCircleMm ? ` over a ${imageCircleMm.toFixed(1)} mm image circle` : ""
    }. Analysis tabs use the central forward-traced cone; the full field is projection metadata, not a rectilinear trace.`;
  })();
  const withAnalysisNotices = (content: ReactNode) => (
    <>
      {fisheyeProjectionText && (
        <div
          style={{
            margin: "0 0 12px",
            padding: "8px 10px",
            border: `1px solid ${t.panelDivider}`,
            borderRadius: 6,
            color: t.desc,
            background: t.panelBg,
            fontSize: 10,
            lineHeight: 1.5,
          }}
        >
          {fisheyeProjectionText}
        </div>
      )}
      {movementActive && (
        <div
          style={{
            margin: "0 0 12px",
            padding: "8px 10px",
            border: `1px solid ${t.panelDivider}`,
            borderRadius: 6,
            color: t.desc,
            background: t.panelBg,
            fontSize: 10,
            lineHeight: 1.5,
          }}
        >
          Tilt/shift is active. Analysis tabs use the centered-lens diagnostics in this first movement pass.
        </div>
      )}
      {content}
    </>
  );

  return withAnalysisNotices(
    ANALYSIS_TAB_RENDERERS[activeTab]({
      L,
      t,
      zPos,
      inputs: analysisInputs,
      aberrationsExpanded,
      onAberrationsExpandedChange,
    }),
  );
}
