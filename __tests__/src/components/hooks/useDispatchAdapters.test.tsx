// @vitest-environment jsdom

import { describe, it, expect, vi } from "vitest";
import useDispatchAdapters from "../../../../src/components/hooks/useDispatchAdapters.js";
import {
  SET_FOCUS_T,
  SET_ZOOM_T,
  SET_STOPDOWN_T,
  SET_SHIFT_MM,
  SET_TILT_DEG,
  SET_RAY_TOGGLE,
  SET_PANEL_EXPANDED,
  SET_ANALYSIS_TAB,
  SET_GROUP_MOVEMENT,
} from "../../../../src/utils/state/lensReducer.js";
import { renderWithLensContext } from "../../../testUtils.js";
import { createInitialState } from "../../../../src/utils/state/lensReducer.js";
import type { LensState } from "../../../../src/types/state.js";

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

type AdapterName = keyof ReturnType<typeof useDispatchAdapters>;

/**
 * Every adapter that maps a single call straight onto one dispatched action:
 * call the adapter with `args`, expect `dispatch` to receive `expected`.
 */
const DISPATCH_CASES: Array<{ adapter: AdapterName; args: unknown[]; expected: Record<string, unknown> }> = [
  /* ── Sliders ── */
  { adapter: "onFocusChange", args: [0.5], expected: { type: SET_FOCUS_T, value: 0.5 } },
  { adapter: "onZoomChange", args: [0.75], expected: { type: SET_ZOOM_T, value: 0.75 } },
  { adapter: "onStopdownChange", args: [1.0], expected: { type: SET_STOPDOWN_T, value: 1.0 } },
  { adapter: "onShiftChange", args: [-5.5], expected: { type: SET_SHIFT_MM, value: -5.5 } },
  { adapter: "onTiltChange", args: [3.5], expected: { type: SET_TILT_DEG, value: 3.5 } },
  /* ── Ray toggles ── */
  {
    adapter: "onShowOnAxisChange",
    args: [false],
    expected: { type: SET_RAY_TOGGLE, field: "showOnAxis", value: false },
  },
  {
    adapter: "onShowOffAxisChange",
    args: ["trueAngle"],
    expected: { type: SET_RAY_TOGGLE, field: "showOffAxis", value: "trueAngle" },
  },
  { adapter: "onRayTracksFChange", args: [true], expected: { type: SET_RAY_TOGGLE, field: "rayTracksF", value: true } },
  {
    adapter: "onShowChromaticChange",
    args: [true],
    expected: { type: SET_RAY_TOGGLE, field: "showChromatic", value: true },
  },
  { adapter: "onChromRChange", args: [false], expected: { type: SET_RAY_TOGGLE, field: "chromR", value: false } },
  { adapter: "onChromGChange", args: [false], expected: { type: SET_RAY_TOGGLE, field: "chromG", value: false } },
  { adapter: "onChromBChange", args: [false], expected: { type: SET_RAY_TOGGLE, field: "chromB", value: false } },
  { adapter: "onShowPupilsChange", args: [true], expected: { type: SET_RAY_TOGGLE, field: "showPupils", value: true } },
  {
    adapter: "onShowCardinalsChange",
    args: [true],
    expected: { type: SET_RAY_TOGGLE, field: "showCardinals", value: true },
  },
  {
    adapter: "onShowCardinalDimensionsChange",
    args: [true],
    expected: { type: SET_RAY_TOGGLE, field: "showCardinalDimensions", value: true },
  },
  {
    adapter: "onShowCardinalFocalChange",
    args: [false],
    expected: { type: SET_RAY_TOGGLE, field: "showCardinalFocal", value: false },
  },
  {
    adapter: "onShowCardinalEflChange",
    args: [false],
    expected: { type: SET_RAY_TOGGLE, field: "showCardinalEfl", value: false },
  },
  /* ── Panel expand/collapse ── */
  {
    adapter: "onFocusExpandedChange",
    args: [true],
    expected: { type: SET_PANEL_EXPANDED, panel: "focusExpanded", expanded: true },
  },
  {
    adapter: "onApertureExpandedChange",
    args: [false],
    expected: { type: SET_PANEL_EXPANDED, panel: "apertureExpanded", expanded: false },
  },
  {
    adapter: "onHeaderControlsExpandedChange",
    args: [true],
    expected: { type: SET_PANEL_EXPANDED, panel: "headerControlsExpanded", expanded: true },
  },
  {
    adapter: "onLegendExpandedChange",
    args: [true],
    expected: { type: SET_PANEL_EXPANDED, panel: "legendExpanded", expanded: true },
  },
  {
    adapter: "onHeaderInfoExpandedChange",
    args: [false],
    expected: { type: SET_PANEL_EXPANDED, panel: "headerInfoExpanded", expanded: false },
  },
  {
    adapter: "onAbbeShowGlassTypeChange",
    args: [false],
    expected: { type: SET_PANEL_EXPANDED, panel: "abbeShowGlassType", expanded: false },
  },
  {
    adapter: "onEffectiveApertureChange",
    args: [true],
    expected: { type: SET_PANEL_EXPANDED, panel: "showEffectiveAperture", expanded: true },
  },
  {
    adapter: "onEffectiveFocalLengthChange",
    args: [true],
    expected: { type: SET_PANEL_EXPANDED, panel: "showEffectiveFocalLength", expanded: true },
  },
  {
    adapter: "onAberrationsExpandedChange",
    args: [false],
    expected: { type: SET_PANEL_EXPANDED, panel: "aberrationsExpanded", expanded: false },
  },
  {
    adapter: "onAnalysisDrawerToggle",
    args: [true],
    expected: { type: SET_PANEL_EXPANDED, panel: "analysisDrawerOpen", expanded: true },
  },
  {
    adapter: "onZoomPanToggle",
    args: [true],
    expected: { type: SET_PANEL_EXPANDED, panel: "zoomPanActive", expanded: true },
  },
  /* ── Analysis tab ── */
  { adapter: "onAnalysisTabChange", args: ["distortion"], expected: { type: SET_ANALYSIS_TAB, tab: "distortion" } },
];

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
      "onEffectiveFocalLengthChange",
      "onEffectiveApertureChange",
      "onAberrationsExpandedChange",
      "onAnalysisDrawerToggle",
      "onAnalysisTabChange",
      "onGroupMovementOpen",
      "onGroupMovementClose",
      "onGroupMovementModeChange",
      "onZoomPanToggle",
    ];
    for (const key of expectedKeys) {
      expect(typeof adapters[key as keyof typeof adapters]).toBe("function");
    }
  });

  it.each(DISPATCH_CASES)("$adapter dispatches $expected.type", ({ adapter, args, expected }) => {
    const { adapters, dispatch } = renderAdapters();
    (adapters[adapter] as unknown as (...fnArgs: unknown[]) => void)(...args);
    expect(dispatch).toHaveBeenCalledWith(expected);
  });

  /* Only non-dispatch adapter: pushes the debounced slider URL write instead */
  it("onSliderPointerUp calls updateURLWithSliders", () => {
    const { adapters, updateURLWithSliders } = renderAdapters();
    adapters.onSliderPointerUp();
    expect(updateURLWithSliders).toHaveBeenCalled();
  });

  it("group movement adapters dispatch SET_GROUP_MOVEMENT", () => {
    const { adapters, dispatch } = renderAdapters();
    adapters.onGroupMovementOpen("focus");
    adapters.onGroupMovementModeChange("combined");
    adapters.onGroupMovementClose();
    expect(dispatch).toHaveBeenCalledWith({ type: SET_GROUP_MOVEMENT, open: true, mode: "focus" });
    expect(dispatch).toHaveBeenCalledWith({ type: SET_GROUP_MOVEMENT, open: true, mode: "combined" });
    expect(dispatch).toHaveBeenCalledWith({ type: SET_GROUP_MOVEMENT, open: false });
  });
});
