// @vitest-environment jsdom

import { describe, it, expect, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useDispatchAdapters from "../src/components/hooks/useDispatchAdapters.js";
import {
  SET_FOCUS_T,
  SET_ZOOM_T,
  SET_STOPDOWN_T,
  SET_SHIFT_MM,
  SET_TILT_DEG,
  SET_RAY_TOGGLE,
  SET_PANEL_EXPANDED,
  SET_ANALYSIS_TAB,
} from "../src/utils/lensReducer.js";
import { renderWithLensContext } from "./testUtils.js";
import { createInitialState } from "../src/utils/lensReducer.js";
import type { LensState } from "../src/types/state.js";

function makeState(): LensState {
  return createInitialState({}, {}, true, ["test-lens-a", "test-lens-b"]);
}

function renderAdapters(dispatch = vi.fn(), updateURLWithSliders = vi.fn()) {
  const state = makeState();
  let result: ReturnType<typeof useDispatchAdapters>;
  function TestComponent() {
    result = useDispatchAdapters();
    return null;
  }
  renderWithLensContext(<TestComponent />, { state, dispatch, updateURLWithSliders });
  return { adapters: result!, dispatch, updateURLWithSliders };
}

describe("useDispatchAdapters", () => {
  it("returns an object with all expected adapter keys", () => {
    const { adapters } = renderAdapters();
    const expectedKeys = [
      "onFocusChange",
      "onZoomChange",
      "onStopdownChange",
      "onShiftChange",
      "onTiltChange",
      "onSliderPointerUp",
      "onShowOnAxisChange",
      "onShowOffAxisChange",
      "onRayTracksFChange",
      "onShowChromaticChange",
      "onChromRChange",
      "onChromGChange",
      "onChromBChange",
      "onShowPupilsChange",
      "onShowCardinalsChange",
      "onShowCardinalDimensionsChange",
      "onFocusExpandedChange",
      "onApertureExpandedChange",
      "onHeaderControlsExpandedChange",
      "onLegendExpandedChange",
      "onHeaderInfoExpandedChange",
      "onAbbeShowGlassTypeChange",
      "onEffectiveApertureChange",
      "onAberrationsExpandedChange",
      "onAnalysisDrawerToggle",
      "onAnalysisTabChange",
      "onZoomPanToggle",
      "onBokehPreviewToggle",
    ];
    for (const key of expectedKeys) {
      expect(typeof adapters[key as keyof typeof adapters]).toBe("function");
    }
  });

  /* ── Slider dispatches ── */

  it("onFocusChange dispatches SET_FOCUS_T", () => {
    const { adapters, dispatch } = renderAdapters();
    adapters.onFocusChange(0.5);
    expect(dispatch).toHaveBeenCalledWith({ type: SET_FOCUS_T, value: 0.5 });
  });

  it("onZoomChange dispatches SET_ZOOM_T", () => {
    const { adapters, dispatch } = renderAdapters();
    adapters.onZoomChange(0.75);
    expect(dispatch).toHaveBeenCalledWith({ type: SET_ZOOM_T, value: 0.75 });
  });

  it("onStopdownChange dispatches SET_STOPDOWN_T", () => {
    const { adapters, dispatch } = renderAdapters();
    adapters.onStopdownChange(1.0);
    expect(dispatch).toHaveBeenCalledWith({ type: SET_STOPDOWN_T, value: 1.0 });
  });

  it("onShiftChange dispatches SET_SHIFT_MM", () => {
    const { adapters, dispatch } = renderAdapters();
    adapters.onShiftChange(-5.5);
    expect(dispatch).toHaveBeenCalledWith({ type: SET_SHIFT_MM, value: -5.5 });
  });

  it("onTiltChange dispatches SET_TILT_DEG", () => {
    const { adapters, dispatch } = renderAdapters();
    adapters.onTiltChange(3.5);
    expect(dispatch).toHaveBeenCalledWith({ type: SET_TILT_DEG, value: 3.5 });
  });

  it("onSliderPointerUp calls updateURLWithSliders", () => {
    const { adapters, updateURLWithSliders } = renderAdapters();
    adapters.onSliderPointerUp();
    expect(updateURLWithSliders).toHaveBeenCalled();
  });

  /* ── Ray toggle dispatches ── */

  it("onShowOnAxisChange dispatches SET_RAY_TOGGLE for showOnAxis", () => {
    const { adapters, dispatch } = renderAdapters();
    adapters.onShowOnAxisChange(false);
    expect(dispatch).toHaveBeenCalledWith({ type: SET_RAY_TOGGLE, field: "showOnAxis", value: false });
  });

  it("onShowOffAxisChange dispatches SET_RAY_TOGGLE for showOffAxis", () => {
    const { adapters, dispatch } = renderAdapters();
    adapters.onShowOffAxisChange("trueAngle");
    expect(dispatch).toHaveBeenCalledWith({ type: SET_RAY_TOGGLE, field: "showOffAxis", value: "trueAngle" });
  });

  it("onRayTracksFChange dispatches SET_RAY_TOGGLE for rayTracksF", () => {
    const { adapters, dispatch } = renderAdapters();
    adapters.onRayTracksFChange(true);
    expect(dispatch).toHaveBeenCalledWith({ type: SET_RAY_TOGGLE, field: "rayTracksF", value: true });
  });

  it("onShowChromaticChange dispatches SET_RAY_TOGGLE for showChromatic", () => {
    const { adapters, dispatch } = renderAdapters();
    adapters.onShowChromaticChange(true);
    expect(dispatch).toHaveBeenCalledWith({ type: SET_RAY_TOGGLE, field: "showChromatic", value: true });
  });

  it("onChromRChange dispatches SET_RAY_TOGGLE for chromR", () => {
    const { adapters, dispatch } = renderAdapters();
    adapters.onChromRChange(false);
    expect(dispatch).toHaveBeenCalledWith({ type: SET_RAY_TOGGLE, field: "chromR", value: false });
  });

  it("onChromGChange dispatches SET_RAY_TOGGLE for chromG", () => {
    const { adapters, dispatch } = renderAdapters();
    adapters.onChromGChange(false);
    expect(dispatch).toHaveBeenCalledWith({ type: SET_RAY_TOGGLE, field: "chromG", value: false });
  });

  it("onChromBChange dispatches SET_RAY_TOGGLE for chromB", () => {
    const { adapters, dispatch } = renderAdapters();
    adapters.onChromBChange(false);
    expect(dispatch).toHaveBeenCalledWith({ type: SET_RAY_TOGGLE, field: "chromB", value: false });
  });

  it("onShowPupilsChange dispatches SET_RAY_TOGGLE for showPupils", () => {
    const { adapters, dispatch } = renderAdapters();
    adapters.onShowPupilsChange(true);
    expect(dispatch).toHaveBeenCalledWith({ type: SET_RAY_TOGGLE, field: "showPupils", value: true });
  });

  it("onShowCardinalsChange dispatches SET_RAY_TOGGLE for showCardinals", () => {
    const { adapters, dispatch } = renderAdapters();
    adapters.onShowCardinalsChange(true);
    expect(dispatch).toHaveBeenCalledWith({ type: SET_RAY_TOGGLE, field: "showCardinals", value: true });
  });

  it("onShowCardinalDimensionsChange dispatches SET_RAY_TOGGLE for showCardinalDimensions", () => {
    const { adapters, dispatch } = renderAdapters();
    adapters.onShowCardinalDimensionsChange(true);
    expect(dispatch).toHaveBeenCalledWith({ type: SET_RAY_TOGGLE, field: "showCardinalDimensions", value: true });
  });

  it("cardinal sub-layer adapters dispatch SET_RAY_TOGGLE actions", () => {
    const { adapters, dispatch } = renderAdapters();
    adapters.onShowCardinalFocalChange(false);
    adapters.onShowCardinalEflChange(false);

    expect(dispatch).toHaveBeenCalledWith({ type: SET_RAY_TOGGLE, field: "showCardinalFocal", value: false });
    expect(dispatch).toHaveBeenCalledWith({ type: SET_RAY_TOGGLE, field: "showCardinalEfl", value: false });
  });

  /* ── Panel expanded dispatches ── */

  it("onFocusExpandedChange dispatches SET_PANEL_EXPANDED for focusExpanded", () => {
    const { adapters, dispatch } = renderAdapters();
    adapters.onFocusExpandedChange(true);
    expect(dispatch).toHaveBeenCalledWith({ type: SET_PANEL_EXPANDED, panel: "focusExpanded", expanded: true });
  });

  it("onApertureExpandedChange dispatches SET_PANEL_EXPANDED for apertureExpanded", () => {
    const { adapters, dispatch } = renderAdapters();
    adapters.onApertureExpandedChange(false);
    expect(dispatch).toHaveBeenCalledWith({ type: SET_PANEL_EXPANDED, panel: "apertureExpanded", expanded: false });
  });

  it("onHeaderControlsExpandedChange dispatches SET_PANEL_EXPANDED for headerControlsExpanded", () => {
    const { adapters, dispatch } = renderAdapters();
    adapters.onHeaderControlsExpandedChange(true);
    expect(dispatch).toHaveBeenCalledWith({
      type: SET_PANEL_EXPANDED,
      panel: "headerControlsExpanded",
      expanded: true,
    });
  });

  it("onLegendExpandedChange dispatches SET_PANEL_EXPANDED for legendExpanded", () => {
    const { adapters, dispatch } = renderAdapters();
    adapters.onLegendExpandedChange(true);
    expect(dispatch).toHaveBeenCalledWith({ type: SET_PANEL_EXPANDED, panel: "legendExpanded", expanded: true });
  });

  it("onHeaderInfoExpandedChange dispatches SET_PANEL_EXPANDED for headerInfoExpanded", () => {
    const { adapters, dispatch } = renderAdapters();
    adapters.onHeaderInfoExpandedChange(false);
    expect(dispatch).toHaveBeenCalledWith({ type: SET_PANEL_EXPANDED, panel: "headerInfoExpanded", expanded: false });
  });

  it("onAbbeShowGlassTypeChange dispatches SET_PANEL_EXPANDED for abbeShowGlassType", () => {
    const { adapters, dispatch } = renderAdapters();
    adapters.onAbbeShowGlassTypeChange(false);
    expect(dispatch).toHaveBeenCalledWith({ type: SET_PANEL_EXPANDED, panel: "abbeShowGlassType", expanded: false });
  });

  it("onEffectiveApertureChange dispatches SET_PANEL_EXPANDED for showEffectiveAperture", () => {
    const { adapters, dispatch } = renderAdapters();
    adapters.onEffectiveApertureChange(true);
    expect(dispatch).toHaveBeenCalledWith({
      type: SET_PANEL_EXPANDED,
      panel: "showEffectiveAperture",
      expanded: true,
    });
  });

  it("onAberrationsExpandedChange dispatches SET_PANEL_EXPANDED for aberrationsExpanded", () => {
    const { adapters, dispatch } = renderAdapters();
    adapters.onAberrationsExpandedChange(false);
    expect(dispatch).toHaveBeenCalledWith({
      type: SET_PANEL_EXPANDED,
      panel: "aberrationsExpanded",
      expanded: false,
    });
  });

  it("onAnalysisDrawerToggle dispatches SET_PANEL_EXPANDED for analysisDrawerOpen", () => {
    const { adapters, dispatch } = renderAdapters();
    adapters.onAnalysisDrawerToggle(true);
    expect(dispatch).toHaveBeenCalledWith({ type: SET_PANEL_EXPANDED, panel: "analysisDrawerOpen", expanded: true });
  });

  it("onZoomPanToggle dispatches SET_PANEL_EXPANDED for zoomPanActive", () => {
    const { adapters, dispatch } = renderAdapters();
    adapters.onZoomPanToggle(true);
    expect(dispatch).toHaveBeenCalledWith({ type: SET_PANEL_EXPANDED, panel: "zoomPanActive", expanded: true });
  });

  it("onBokehPreviewToggle dispatches SET_PANEL_EXPANDED for bokehPreviewOpen", () => {
    const { adapters, dispatch } = renderAdapters();
    adapters.onBokehPreviewToggle(true);
    expect(dispatch).toHaveBeenCalledWith({ type: SET_PANEL_EXPANDED, panel: "bokehPreviewOpen", expanded: true });
  });

  /* ── Analysis tab ── */

  it("onAnalysisTabChange dispatches SET_ANALYSIS_TAB", () => {
    const { adapters, dispatch } = renderAdapters();
    adapters.onAnalysisTabChange("distortion");
    expect(dispatch).toHaveBeenCalledWith({ type: SET_ANALYSIS_TAB, tab: "distortion" });
  });
});
