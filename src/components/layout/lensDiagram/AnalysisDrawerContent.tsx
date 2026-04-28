import { useDeferredValue, useEffect, useMemo, useRef, type ReactNode } from "react";
import AberrationsPanel from "../../display/AberrationsPanel.js";
import ComaTab from "../../display/ComaTab.js";
import DistortionTab from "../../display/DistortionTab.js";
import FocusBreathingTab from "../../display/FocusBreathingTab.js";
import PupilAberrationTab from "../../display/PupilAberrationTab.js";
import VignettingTab from "../../display/VignettingTab.js";
import type { RuntimeLens } from "../../../types/optics.js";
import type { Theme } from "../../../types/theme.js";
import type { FieldGeometryState } from "../../../optics/optics.js";
import type { AnalysisTabId } from "../../../types/state.js";

interface AnalysisDrawerContentProps {
  activeTab: AnalysisTabId;
  L: RuntimeLens;
  t: Theme;
  zPos: number[];
  focusT: number;
  zoomT: number;
  dynamicEFL: number;
  currentEPSD: number;
  currentPhysStopSD: number;
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
  dynamicEFL,
  currentEPSD,
  currentPhysStopSD,
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
  const dEPSD = useDeferredValue(currentEPSD);
  const dStopSD = useDeferredValue(currentPhysStopSD);
  const dDynamicEFL = useDeferredValue(dynamicEFL);
  const dFieldGeometry = useDeferredValue(fieldGeometry);
  const deferredInputs = useMemo(
    () => ({
      focusT: dFocusT,
      zoomT: dZoomT,
      currentEPSD: dEPSD,
      currentPhysStopSD: dStopSD,
      dynamicEFL: dDynamicEFL,
      fieldGeometry: dFieldGeometry,
    }),
    [dFocusT, dZoomT, dEPSD, dStopSD, dDynamicEFL, dFieldGeometry],
  );
  const lastSettledInputsRef = useRef(deferredInputs);

  useEffect(() => {
    if (sliderInteracting) return;
    lastSettledInputsRef.current = deferredInputs;
  }, [sliderInteracting, deferredInputs]);

  const analysisInputs = sliderInteracting ? lastSettledInputsRef.current : deferredInputs;
  const withMovementNotice = (content: ReactNode) => (
    <>
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

  if (activeTab === "aberrations") {
    return withMovementNotice(
      <AberrationsPanel
        L={L}
        t={t}
        zPos={zPos}
        focusT={analysisInputs.focusT}
        zoomT={analysisInputs.zoomT}
        currentEPSD={analysisInputs.currentEPSD}
        currentPhysStopSD={analysisInputs.currentPhysStopSD}
        expanded={aberrationsExpanded}
        onExpandedChange={onAberrationsExpandedChange}
      />,
    );
  }

  if (activeTab === "coma") {
    return withMovementNotice(
      <ComaTab
        L={L}
        t={t}
        zPos={zPos}
        focusT={analysisInputs.focusT}
        zoomT={analysisInputs.zoomT}
        currentEPSD={analysisInputs.currentEPSD}
        currentPhysStopSD={analysisInputs.currentPhysStopSD}
      />,
    );
  }

  if (activeTab === "distortion") {
    return withMovementNotice(
      <DistortionTab
        L={L}
        t={t}
        zPos={zPos}
        focusT={analysisInputs.focusT}
        zoomT={analysisInputs.zoomT}
        dynamicEFL={analysisInputs.dynamicEFL}
        currentPhysStopSD={analysisInputs.currentPhysStopSD}
        fieldGeometry={analysisInputs.fieldGeometry}
      />,
    );
  }

  if (activeTab === "breathing") {
    return withMovementNotice(
      <FocusBreathingTab
        L={L}
        t={t}
        focusT={analysisInputs.focusT}
        zoomT={analysisInputs.zoomT}
        dynamicEFL={analysisInputs.dynamicEFL}
      />,
    );
  }

  if (activeTab === "vignetting") {
    return withMovementNotice(
      <VignettingTab
        L={L}
        t={t}
        zPos={zPos}
        focusT={analysisInputs.focusT}
        zoomT={analysisInputs.zoomT}
        currentEPSD={analysisInputs.currentEPSD}
        currentPhysStopSD={analysisInputs.currentPhysStopSD}
        fieldGeometry={analysisInputs.fieldGeometry}
      />,
    );
  }

  if (activeTab === "pupils") {
    return withMovementNotice(
      <PupilAberrationTab
        L={L}
        t={t}
        focusT={analysisInputs.focusT}
        zoomT={analysisInputs.zoomT}
        fieldGeometry={analysisInputs.fieldGeometry}
      />,
    );
  }

  return null;
}
