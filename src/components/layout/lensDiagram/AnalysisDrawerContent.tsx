import AberrationsPanel from "../../display/AberrationsPanel.js";
import DistortionTab from "../../display/DistortionTab.js";
import FocusBreathingTab from "../../display/FocusBreathingTab.js";
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
  if (activeTab === "aberrations") {
    return (
      <AberrationsPanel
        L={L}
        t={t}
        zPos={zPos}
        focusT={focusT}
        zoomT={zoomT}
        currentEPSD={currentEPSD}
        currentPhysStopSD={currentPhysStopSD}
        expanded={aberrationsExpanded}
        onExpandedChange={onAberrationsExpandedChange}
      />
    );
  }

  if (activeTab === "distortion") {
    return (
      <DistortionTab
        L={L}
        t={t}
        zPos={zPos}
        focusT={focusT}
        zoomT={zoomT}
        dynamicEFL={dynamicEFL}
        currentPhysStopSD={currentPhysStopSD}
      />
    );
  }

  if (activeTab === "breathing") {
    return <FocusBreathingTab L={L} t={t} focusT={focusT} zoomT={zoomT} dynamicEFL={dynamicEFL} />;
  }

  if (activeTab === "vignetting") {
    return (
      <VignettingTab
        L={L}
        t={t}
        zPos={zPos}
        focusT={focusT}
        zoomT={zoomT}
        currentEPSD={currentEPSD}
        currentPhysStopSD={currentPhysStopSD}
      />
    );
  }

  return null;
}
