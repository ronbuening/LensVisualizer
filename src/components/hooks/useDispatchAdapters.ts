/**
 * useDispatchAdapters — Bridges context dispatch to named callback props
 * for LensDiagramPanel's child components.
 *
 * Reads useLensDispatch() and useLensCtx() internally. Returns a stable
 * object of named dispatch adapter callbacks for sliders, ray toggles,
 * display toggles, and panel-expanded toggles.
 */

import { useMemo } from "react";
import { useLensCtx, useLensDispatch } from "../../utils/LensContext.js";
import {
  SET_FOCUS_T,
  SET_ZOOM_T,
  SET_STOPDOWN_T,
  SET_SHIFT_MM,
  SET_TILT_DEG,
  SET_RAY_TOGGLE,
  SET_PANEL_EXPANDED,
  SET_ANALYSIS_TAB,
} from "../../utils/lensReducer.js";
import type { AnalysisTabId, OffAxisMode, RayDensity } from "../../types/state.js";

export interface DispatchAdapters {
  onFocusChange: (v: number) => void;
  onZoomChange: (v: number) => void;
  onStopdownChange: (v: number) => void;
  onShiftChange: (v: number) => void;
  onTiltChange: (v: number) => void;
  onSliderPointerUp: () => void;
  onShowOnAxisChange: (v: boolean) => void;
  onShowOffAxisChange: (v: OffAxisMode) => void;
  onRayDensityChange: (v: RayDensity) => void;
  onRayTracksFChange: (v: boolean) => void;
  onShowChromaticChange: (v: boolean) => void;
  onChromRChange: (v: boolean) => void;
  onChromGChange: (v: boolean) => void;
  onChromBChange: (v: boolean) => void;
  onShowPupilsChange: (v: boolean) => void;
  onShowCardinalsChange: (v: boolean) => void;
  onShowCardinalDimensionsChange: (v: boolean) => void;
  onFocusExpandedChange: (v: boolean) => void;
  onApertureExpandedChange: (v: boolean) => void;
  onHeaderControlsExpandedChange: (v: boolean) => void;
  onLegendExpandedChange: (v: boolean) => void;
  onHeaderInfoExpandedChange: (v: boolean) => void;
  onAbbeShowGlassTypeChange: (v: boolean) => void;
  onEffectiveApertureChange: (v: boolean) => void;
  onAberrationsExpandedChange: (v: boolean) => void;
  onAnalysisDrawerToggle: (v: boolean) => void;
  onAnalysisTabChange: (tab: AnalysisTabId) => void;
  onZoomPanToggle: (v: boolean) => void;
  onBokehPreviewToggle: (v: boolean) => void;
  onGlassMapOpenChange: (v: boolean) => void;
  onLcaOverlayChange: (v: boolean) => void;
  onPetzvalOverlayChange: (v: boolean) => void;
}

export default function useDispatchAdapters(): DispatchAdapters {
  const { updateURLWithSliders } = useLensCtx();
  const dispatch = useLensDispatch();

  /* dispatch and updateURLWithSliders are stable refs, so the memo never recomputes */
  return useMemo(
    () => ({
      onFocusChange: (v: number) => dispatch({ type: SET_FOCUS_T, value: v }),
      onZoomChange: (v: number) => dispatch({ type: SET_ZOOM_T, value: v }),
      onStopdownChange: (v: number) => dispatch({ type: SET_STOPDOWN_T, value: v }),
      onShiftChange: (v: number) => dispatch({ type: SET_SHIFT_MM, value: v }),
      onTiltChange: (v: number) => dispatch({ type: SET_TILT_DEG, value: v }),
      onSliderPointerUp: updateURLWithSliders,
      onShowOnAxisChange: (v: boolean) => dispatch({ type: SET_RAY_TOGGLE, field: "showOnAxis", value: v }),
      onShowOffAxisChange: (v: OffAxisMode) => dispatch({ type: SET_RAY_TOGGLE, field: "showOffAxis", value: v }),
      onRayDensityChange: (v: RayDensity) => dispatch({ type: SET_RAY_TOGGLE, field: "rayDensity", value: v }),
      onRayTracksFChange: (v: boolean) => dispatch({ type: SET_RAY_TOGGLE, field: "rayTracksF", value: v }),
      onShowChromaticChange: (v: boolean) => dispatch({ type: SET_RAY_TOGGLE, field: "showChromatic", value: v }),
      onChromRChange: (v: boolean) => dispatch({ type: SET_RAY_TOGGLE, field: "chromR", value: v }),
      onChromGChange: (v: boolean) => dispatch({ type: SET_RAY_TOGGLE, field: "chromG", value: v }),
      onChromBChange: (v: boolean) => dispatch({ type: SET_RAY_TOGGLE, field: "chromB", value: v }),
      onShowPupilsChange: (v: boolean) => dispatch({ type: SET_RAY_TOGGLE, field: "showPupils", value: v }),
      onShowCardinalsChange: (v: boolean) => dispatch({ type: SET_RAY_TOGGLE, field: "showCardinals", value: v }),
      onShowCardinalDimensionsChange: (v: boolean) =>
        dispatch({ type: SET_RAY_TOGGLE, field: "showCardinalDimensions", value: v }),
      onFocusExpandedChange: (v: boolean) =>
        dispatch({ type: SET_PANEL_EXPANDED, panel: "focusExpanded", expanded: v }),
      onApertureExpandedChange: (v: boolean) =>
        dispatch({ type: SET_PANEL_EXPANDED, panel: "apertureExpanded", expanded: v }),
      onHeaderControlsExpandedChange: (v: boolean) =>
        dispatch({ type: SET_PANEL_EXPANDED, panel: "headerControlsExpanded", expanded: v }),
      onLegendExpandedChange: (v: boolean) =>
        dispatch({ type: SET_PANEL_EXPANDED, panel: "legendExpanded", expanded: v }),
      onHeaderInfoExpandedChange: (v: boolean) =>
        dispatch({ type: SET_PANEL_EXPANDED, panel: "headerInfoExpanded", expanded: v }),
      onAbbeShowGlassTypeChange: (v: boolean) =>
        dispatch({ type: SET_PANEL_EXPANDED, panel: "abbeShowGlassType", expanded: v }),
      onEffectiveApertureChange: (v: boolean) =>
        dispatch({ type: SET_PANEL_EXPANDED, panel: "showEffectiveAperture", expanded: v }),
      onAberrationsExpandedChange: (v: boolean) =>
        dispatch({ type: SET_PANEL_EXPANDED, panel: "aberrationsExpanded", expanded: v }),
      onAnalysisDrawerToggle: (v: boolean) =>
        dispatch({ type: SET_PANEL_EXPANDED, panel: "analysisDrawerOpen", expanded: v }),
      onAnalysisTabChange: (tab: AnalysisTabId) => dispatch({ type: SET_ANALYSIS_TAB, tab }),
      onZoomPanToggle: (v: boolean) => dispatch({ type: SET_PANEL_EXPANDED, panel: "zoomPanActive", expanded: v }),
      onBokehPreviewToggle: (v: boolean) =>
        dispatch({ type: SET_PANEL_EXPANDED, panel: "bokehPreviewOpen", expanded: v }),
      onGlassMapOpenChange: (v: boolean) => dispatch({ type: SET_PANEL_EXPANDED, panel: "glassMapOpen", expanded: v }),
      onLcaOverlayChange: (v: boolean) => dispatch({ type: SET_PANEL_EXPANDED, panel: "lcaOverlayOpen", expanded: v }),
      onPetzvalOverlayChange: (v: boolean) =>
        dispatch({ type: SET_PANEL_EXPANDED, panel: "petzvalOverlayOpen", expanded: v }),
    }),
    [dispatch, updateURLWithSliders],
  );
}
