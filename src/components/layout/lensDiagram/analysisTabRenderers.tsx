import type { ReactNode } from "react";
import AberrationsPanel from "../../display/analysis/AberrationsPanel.js";
import ComaTab from "../../display/analysis/ComaTab.js";
import DistortionTab from "../../display/analysis/DistortionTab.js";
import FocusBreathingTab from "../../display/analysis/FocusBreathingTab.js";
import MTFTab from "../../display/analysis/MTFTab.js";
import PupilAberrationTab from "../../display/analysis/PupilAberrationTab.js";
import VignettingTab from "../../display/analysis/VignettingTab.js";
import type { FieldGeometryState } from "../../../optics/optics.js";
import type { RuntimeLens } from "../../../types/optics.js";
import type { AnalysisTabId } from "../../../types/state.js";
import type { Theme } from "../../../types/theme.js";

export interface AnalysisDrawerInputs {
  focusT: number;
  zoomT: number;
  aberrationT: number;
  currentEPSD: number;
  currentPhysStopSD: number;
  dynamicEFL: number;
  fNumber: number;
  fieldGeometry?: FieldGeometryState | null;
}

export interface AnalysisTabRendererContext {
  L: RuntimeLens;
  t: Theme;
  zPos: number[];
  inputs: AnalysisDrawerInputs;
  aberrationsExpanded: boolean;
  onAberrationsExpandedChange: (expanded: boolean) => void;
}

type AnalysisTabRenderer = (context: AnalysisTabRendererContext) => ReactNode;

export const ANALYSIS_TAB_RENDERERS: Record<AnalysisTabId, AnalysisTabRenderer> = {
  aberrations: ({ L, t, zPos, inputs, aberrationsExpanded, onAberrationsExpandedChange }) => (
    <AberrationsPanel
      L={L}
      t={t}
      zPos={zPos}
      focusT={inputs.focusT}
      zoomT={inputs.zoomT}
      aberrationT={inputs.aberrationT}
      currentEPSD={inputs.currentEPSD}
      currentPhysStopSD={inputs.currentPhysStopSD}
      fieldGeometry={inputs.fieldGeometry}
      expanded={aberrationsExpanded}
      onExpandedChange={onAberrationsExpandedChange}
    />
  ),
  coma: ({ L, t, zPos, inputs }) => (
    <ComaTab
      L={L}
      t={t}
      zPos={zPos}
      focusT={inputs.focusT}
      zoomT={inputs.zoomT}
      aberrationT={inputs.aberrationT}
      currentEPSD={inputs.currentEPSD}
      currentPhysStopSD={inputs.currentPhysStopSD}
      fieldGeometry={inputs.fieldGeometry}
    />
  ),
  distortion: ({ L, t, zPos, inputs }) => (
    <DistortionTab
      L={L}
      t={t}
      zPos={zPos}
      focusT={inputs.focusT}
      zoomT={inputs.zoomT}
      aberrationT={inputs.aberrationT}
      dynamicEFL={inputs.dynamicEFL}
      currentPhysStopSD={inputs.currentPhysStopSD}
      fieldGeometry={inputs.fieldGeometry}
    />
  ),
  breathing: ({ L, t, inputs }) => (
    <FocusBreathingTab L={L} t={t} focusT={inputs.focusT} zoomT={inputs.zoomT} dynamicEFL={inputs.dynamicEFL} />
  ),
  vignetting: ({ L, t, zPos, inputs }) => (
    <VignettingTab
      L={L}
      t={t}
      zPos={zPos}
      focusT={inputs.focusT}
      zoomT={inputs.zoomT}
      aberrationT={inputs.aberrationT}
      currentEPSD={inputs.currentEPSD}
      currentPhysStopSD={inputs.currentPhysStopSD}
      fieldGeometry={inputs.fieldGeometry}
    />
  ),
  mtf: ({ L, t, inputs }) => <MTFTab L={L} t={t} fNumber={inputs.fNumber} />,
  pupils: ({ L, t, inputs }) => (
    <PupilAberrationTab
      L={L}
      t={t}
      focusT={inputs.focusT}
      zoomT={inputs.zoomT}
      aberrationT={inputs.aberrationT}
      fieldGeometry={inputs.fieldGeometry}
    />
  ),
};
