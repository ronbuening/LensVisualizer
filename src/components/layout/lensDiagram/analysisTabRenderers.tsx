import type { ReactNode } from "react";
import AberrationsPanel from "../../display/analysis/AberrationsPanel.js";
import BokehTab from "../../display/analysis/BokehTab.js";
import ComaTab from "../../display/analysis/ComaTab.js";
import DistortionTab from "../../display/analysis/DistortionTab.js";
import FocusBreathingTab from "../../display/analysis/FocusBreathingTab.js";
import PupilAberrationTab from "../../display/analysis/PupilAberrationTab.js";
import VignettingTab from "../../display/analysis/VignettingTab.js";
import type { PreparedOpticalState } from "../../../optics/types.js";
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
  fieldGeometry?: FieldGeometryState | null;
}

export interface AnalysisTabRendererContext {
  L: RuntimeLens;
  t: Theme;
  zPos: number[];
  preparedState: PreparedOpticalState;
  inputs: AnalysisDrawerInputs;
  aberrationsExpanded: boolean;
  onAberrationsExpandedChange: (expanded: boolean) => void;
}

type AnalysisTabRenderer = (context: AnalysisTabRendererContext) => ReactNode;

export const ANALYSIS_TAB_RENDERERS: Record<AnalysisTabId, AnalysisTabRenderer> = {
  aberrations: ({ L, t, zPos, preparedState, inputs, aberrationsExpanded, onAberrationsExpandedChange }) => (
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
      preparedState={preparedState}
      expanded={aberrationsExpanded}
      onExpandedChange={onAberrationsExpandedChange}
    />
  ),
  coma: ({ L, t, zPos, preparedState, inputs }) => (
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
      preparedState={preparedState}
    />
  ),
  bokeh: ({ L, t, preparedState, inputs }) => (
    <BokehTab
      L={L}
      t={t}
      focusT={inputs.focusT}
      zoomT={inputs.zoomT}
      aberrationT={inputs.aberrationT}
      currentEPSD={inputs.currentEPSD}
      currentPhysStopSD={inputs.currentPhysStopSD}
      preparedState={preparedState}
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
