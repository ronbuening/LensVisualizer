/**
 * useDispatchAdapters — Bridges context dispatch to named callback props
 * for LensDiagramPanel's child components.
 *
 * Reads useLensDispatch() and useLensCtx() internally. Returns a stable
 * object of 18 dispatch adapter callbacks for sliders, ray toggles,
 * display toggles, and panel-expanded toggles.
 */

import { useMemo } from "react";
import { useLensCtx, useLensDispatch } from "../../utils/LensContext.js";
import {
  SET_FOCUS_T,
  SET_ZOOM_T,
  SET_STOPDOWN_T,
  SET_RAY_TOGGLE,
  SET_DARK,
  SET_HIGH_CONTRAST,
  SET_PANEL_EXPANDED,
} from "../../utils/lensReducer.js";

export interface DispatchAdapters {
  onFocusChange: (v: number) => void;
  onZoomChange: (v: number) => void;
  onStopdownChange: (v: number) => void;
  onSliderPointerUp: () => void;
  onShowOnAxisChange: (v: boolean) => void;
  onShowOffAxisChange: (v: string) => void;
  onRayTracksFChange: (v: boolean) => void;
  onShowChromaticChange: (v: boolean) => void;
  onChromRChange: (v: boolean) => void;
  onChromGChange: (v: boolean) => void;
  onChromBChange: (v: boolean) => void;
  onShowPupilsChange: (v: boolean) => void;
  onDarkChange: (v: boolean) => void;
  onHighContrastChange: (v: boolean) => void;
  onFocusExpandedChange: (v: boolean) => void;
  onApertureExpandedChange: (v: boolean) => void;
  onHeaderControlsExpandedChange: (v: boolean) => void;
  onLegendExpandedChange: (v: boolean) => void;
  onHeaderInfoExpandedChange: (v: boolean) => void;
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
      onSliderPointerUp: updateURLWithSliders,
      onShowOnAxisChange: (v: boolean) => dispatch({ type: SET_RAY_TOGGLE, field: "showOnAxis", value: v }),
      onShowOffAxisChange: (v: string) => dispatch({ type: SET_RAY_TOGGLE, field: "showOffAxis", value: v }),
      onRayTracksFChange: (v: boolean) => dispatch({ type: SET_RAY_TOGGLE, field: "rayTracksF", value: v }),
      onShowChromaticChange: (v: boolean) => dispatch({ type: SET_RAY_TOGGLE, field: "showChromatic", value: v }),
      onChromRChange: (v: boolean) => dispatch({ type: SET_RAY_TOGGLE, field: "chromR", value: v }),
      onChromGChange: (v: boolean) => dispatch({ type: SET_RAY_TOGGLE, field: "chromG", value: v }),
      onChromBChange: (v: boolean) => dispatch({ type: SET_RAY_TOGGLE, field: "chromB", value: v }),
      onShowPupilsChange: (v: boolean) => dispatch({ type: SET_RAY_TOGGLE, field: "showPupils", value: v }),
      onDarkChange: (v: boolean) => dispatch({ type: SET_DARK, dark: v }),
      onHighContrastChange: (v: boolean) => dispatch({ type: SET_HIGH_CONTRAST, highContrast: v }),
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
    }),
    [dispatch, updateURLWithSliders],
  );
}
