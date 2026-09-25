import type { ReactNode } from "react";
import MtfTab from "../../display/analysis/MtfTab.js";
import AberrationsPanel from "../../display/analysis/AberrationsPanel.js";
import BokehTab from "../../display/analysis/BokehTab.js";
import ChromaticTab from "../../display/analysis/ChromaticTab.js";
import ComaTab from "../../display/analysis/ComaTab.js";
import DistortionTab from "../../display/analysis/DistortionTab.js";
import FocusBreathingTab from "../../display/analysis/FocusBreathingTab.js";
import OpticalSummaryTab from "../../display/analysis/OpticalSummaryTab.js";
import PupilAberrationTab from "../../display/analysis/PupilAberrationTab.js";
import VignettingTab from "../../display/analysis/VignettingTab.js";
import type { PreparedOpticalState } from "../../../optics/types.js";
import type { AnalysisComputationContext } from "../../../optics/compat.js";
import type { FieldGeometryState } from "../../../optics/optics.js";
import type { LensSourceState, RuntimeLens } from "../../../types/optics.js";
import type { AnalysisTabId } from "../../../types/state.js";
import type { Theme } from "../../../types/theme.js";

export interface AnalysisDrawerInputs {
  focusT: number;
  zoomT: number;
  aberrationT: number;
  currentEPSD: number;
  currentPhysStopSD: number;
  dynamicEFL: number;
  /** Selected working f-number, when the host knows it. */
  fNumber?: number;
  fieldGeometry?: FieldGeometryState | null;
}

export interface AnalysisTabRendererContext {
  L: RuntimeLens;
  t: Theme;
  zPos: number[];
  preparedState: PreparedOpticalState;
  analysisContext?: AnalysisComputationContext;
  inputs: AnalysisDrawerInputs;
  aberrationsExpanded: boolean;
  onAberrationsExpandedChange: (expanded: boolean) => void;
  onSelectSourceState?: (lensKey: string, sourceState: LensSourceState) => void;
}

type AnalysisTabRenderer = (context: AnalysisTabRendererContext) => ReactNode;

export const ANALYSIS_TAB_RENDERERS: Record<AnalysisTabId, AnalysisTabRenderer> = {
  mtf: ({ L, t, preparedState, analysisContext, inputs, onSelectSourceState }) => (
    <MtfTab
      L={L}
      t={t}
      preparedState={preparedState}
      currentEPSD={inputs.currentEPSD}
      currentPhysStopSD={inputs.currentPhysStopSD}
      fNumber={inputs.fNumber}
      focalLengthMm={inputs.dynamicEFL}
      movementActive={analysisContext?.movementActive}
      onSelectSourceState={onSelectSourceState}
    />
  ),
  summary: ({ L, t, preparedState, analysisContext, inputs }) => (
    <OpticalSummaryTab
      L={L}
      t={t}
      focusT={inputs.focusT}
      zoomT={inputs.zoomT}
      aberrationT={inputs.aberrationT}
      dynamicEFL={inputs.dynamicEFL}
      currentEPSD={inputs.currentEPSD}
      currentPhysStopSD={inputs.currentPhysStopSD}
      fieldGeometry={inputs.fieldGeometry}
      preparedState={preparedState}
      analysisContext={analysisContext}
    />
  ),
  aberrations: ({
    L,
    t,
    zPos,
    preparedState,
    analysisContext,
    inputs,
    aberrationsExpanded,
    onAberrationsExpandedChange,
  }) => (
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
      analysisContext={analysisContext}
      expanded={aberrationsExpanded}
      onExpandedChange={onAberrationsExpandedChange}
    />
  ),
  chromatic: ({ L, t, preparedState, analysisContext, inputs }) => (
    <ChromaticTab
      L={L}
      t={t}
      focusT={inputs.focusT}
      zoomT={inputs.zoomT}
      aberrationT={inputs.aberrationT}
      currentEPSD={inputs.currentEPSD}
      currentPhysStopSD={inputs.currentPhysStopSD}
      fieldGeometry={inputs.fieldGeometry}
      preparedState={preparedState}
      analysisContext={analysisContext}
    />
  ),
  coma: ({ L, t, zPos, preparedState, analysisContext, inputs }) => (
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
      analysisContext={analysisContext}
    />
  ),
  bokeh: ({ L, t, preparedState, analysisContext, inputs }) => (
    <BokehTab
      L={L}
      t={t}
      focusT={inputs.focusT}
      zoomT={inputs.zoomT}
      aberrationT={inputs.aberrationT}
      currentEPSD={inputs.currentEPSD}
      currentPhysStopSD={inputs.currentPhysStopSD}
      preparedState={preparedState}
      analysisContext={analysisContext}
    />
  ),
  distortion: ({ L, t, preparedState, analysisContext, inputs }) => (
    <DistortionTab
      L={L}
      t={t}
      focusT={inputs.focusT}
      zoomT={inputs.zoomT}
      aberrationT={inputs.aberrationT}
      dynamicEFL={inputs.dynamicEFL}
      currentPhysStopSD={inputs.currentPhysStopSD}
      fieldGeometry={inputs.fieldGeometry}
      preparedState={preparedState}
      analysisContext={analysisContext}
    />
  ),
  breathing: ({ L, t, inputs }) => (
    <FocusBreathingTab L={L} t={t} focusT={inputs.focusT} zoomT={inputs.zoomT} dynamicEFL={inputs.dynamicEFL} />
  ),
  vignetting: ({ L, t, preparedState, analysisContext, inputs }) => (
    <VignettingTab
      L={L}
      t={t}
      focusT={inputs.focusT}
      zoomT={inputs.zoomT}
      aberrationT={inputs.aberrationT}
      currentEPSD={inputs.currentEPSD}
      currentPhysStopSD={inputs.currentPhysStopSD}
      fieldGeometry={inputs.fieldGeometry}
      preparedState={preparedState}
      analysisContext={analysisContext}
    />
  ),
  pupils: ({ L, t, preparedState, analysisContext, inputs }) => (
    <PupilAberrationTab
      L={L}
      t={t}
      focusT={inputs.focusT}
      zoomT={inputs.zoomT}
      aberrationT={inputs.aberrationT}
      fieldGeometry={inputs.fieldGeometry}
      preparedState={preparedState}
      analysisContext={analysisContext}
    />
  ),
};
