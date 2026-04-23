import { useDeferredValue } from "react";
import AberrationsPanel from "../../display/AberrationsPanel.js";
import ComaTab from "../../display/ComaTab.js";
import DistortionTab from "../../display/DistortionTab.js";
import FocusBreathingTab from "../../display/FocusBreathingTab.js";
import PupilAberrationTab from "../../display/PupilAberrationTab.js";
import VignettingTab from "../../display/VignettingTab.js";
import type { RuntimeLens } from "../../../types/optics.js";
import type { Theme } from "../../../types/theme.js";

interface AnalysisDrawerContentProps {
  activeTab: string;
  L: RuntimeLens;
  t: Theme;
  zPos: number[];
  focusT: number;
  zoomT: number;
  dynamicEFL: number;
  currentEPSD: number;
  currentPhysStopSD: number;
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

  if (activeTab === "aberrations") {
    return (
      <AberrationsPanel
        L={L}
        t={t}
        zPos={zPos}
        focusT={dFocusT}
        zoomT={dZoomT}
        currentEPSD={dEPSD}
        currentPhysStopSD={dStopSD}
        expanded={aberrationsExpanded}
        onExpandedChange={onAberrationsExpandedChange}
      />
    );
  }

  if (activeTab === "coma") {
    return (
      <ComaTab
        L={L}
        t={t}
        zPos={zPos}
        focusT={dFocusT}
        zoomT={dZoomT}
        currentEPSD={dEPSD}
        currentPhysStopSD={dStopSD}
      />
    );
  }

  if (activeTab === "distortion") {
    return (
      <DistortionTab
        L={L}
        t={t}
        zPos={zPos}
        focusT={dFocusT}
        zoomT={dZoomT}
        dynamicEFL={dDynamicEFL}
        currentPhysStopSD={dStopSD}
      />
    );
  }

  if (activeTab === "breathing") {
    return <FocusBreathingTab L={L} t={t} focusT={dFocusT} zoomT={dZoomT} dynamicEFL={dDynamicEFL} />;
  }

  if (activeTab === "vignetting") {
    return (
      <VignettingTab
        L={L}
        t={t}
        zPos={zPos}
        focusT={dFocusT}
        zoomT={dZoomT}
        currentEPSD={dEPSD}
        currentPhysStopSD={dStopSD}
      />
    );
  }

  if (activeTab === "pupils") {
    return <PupilAberrationTab L={L} t={t} focusT={dFocusT} zoomT={dZoomT} />;
  }

  return null;
}
