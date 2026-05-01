// @vitest-environment jsdom

/**
 * useComparisonOrchestration tests.
 *
 * Covers compare-mode entry and exit behavior plus the shared-aperture
 * initialization effect so the LensViewer shell keeps real behavior
 * protection at the orchestration layer.
 */

import { act, renderHook, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import useComparisonOrchestration from "../src/comparison/useComparisonOrchestration.js";
import { ENTER_COMPARE, EXIT_COMPARE, SET_SHARED_STOPDOWN_T } from "../src/comparison/comparisonReducer.js";
import type { LensState } from "../src/types/state.js";

const useComparisonModeMock = vi.fn();
const useStickySlidersMock = vi.fn();

vi.mock("../src/comparison/useComparisonMode.js", () => ({
  default: (params: unknown) => useComparisonModeMock(params),
  isComparisonOk: (result: { error?: unknown } | null) => result !== null && !result.error,
}));

vi.mock("../src/comparison/useStickySliders.js", () => ({
  default: (...args: unknown[]) => useStickySlidersMock(...args),
}));

function buildState(overrides?: Partial<LensState["lens"]>): LensState {
  return {
    lens: {
      lensKeyA: "lens-a",
      lensKeyB: "lens-b",
      comparing: false,
      scaleMode: "independent",
      ...overrides,
    },
    display: {
      dark: null,
      highContrast: false,
      mobileView: "diagram",
      desktopView: "both",
    },
    rays: {
      showOnAxis: true,
      showOffAxis: "off",
      rayDensity: "normal",
      rayTracksF: false,
      showChromatic: false,
      chromR: true,
      chromG: true,
      chromB: true,
      chromV: false,
      showPupils: false,
      showCardinals: false,
      showCardinalFocal: true,
      showCardinalPrincipal: true,
      showCardinalNodal: true,
      showCardinalDimensions: false,
      showCardinalEfl: true,
      showCardinalBfd: true,
      showCardinalFfd: true,
      showCardinalHiatus: true,
      showCardinalTotalTrack: true,
    },
    sliders: {
      focusT: 0,
      zoomT: 0,
      stopdownT: 0,
      shiftMm: 0,
      tiltDeg: 0,
    },
    sharedSliders: {
      sharedFocusT: 0,
      sharedStopdownT: 0,
      sharedZoomT: 0,
      sharedShiftMm: 0,
      sharedTiltDeg: 0,
    },
    panels: {
      focusExpanded: true,
      apertureExpanded: true,
      headerControlsExpanded: false,
      legendExpanded: false,
      headerInfoExpanded: true,
      abbeShowGlassType: true,
      glassMapOpen: false,
      lcaOverlayOpen: false,
      petzvalOverlayOpen: false,
      showEffectiveAperture: false,
      aberrationsExpanded: true,
      analysisDrawerOpen: false,
      analysisDrawerTab: "aberrations",
      zoomPanActive: false,
      bokehPreviewOpen: false,
      selectedElementId: null,
      selectedElementIdA: null,
      selectedElementIdB: null,
    },
    overlays: {
      showAbout: false,
      showAboutSite: false,
      showOpticsPrimer: false,
      showAberrationsPrimer: false,
    },
  };
}

describe("useComparisonOrchestration", () => {
  beforeEach(() => {
    useComparisonModeMock.mockReset();
    useStickySlidersMock.mockReset();
  });

  it("enters comparison mode, auto-selects a second lens, and initializes the shared aperture", async () => {
    const dispatch = vi.fn();
    const navigate = vi.fn();
    const resetSticky = vi.fn();
    const prevStopdownT = { current: 0 };

    const comparisonLenses = {
      LA: { FOPEN: 1.4, maxFstop: 16 },
      LB: { FOPEN: 2.8, maxFstop: 22 },
    };

    useComparisonModeMock.mockImplementation(({ comparing }: { comparing: boolean }) => ({
      comparisonLenses: comparing ? comparisonLenses : null,
      scaleRatios: null,
      focusPair: null,
      aperturePair: null,
      zoomPair: null,
      movementPair: null,
      handleHeaderHeight: vi.fn(),
      maxHeaderHeight: 0,
    }));

    useStickySlidersMock.mockReturnValue({
      handleSharedFocusChange: vi.fn(),
      handleSharedStopdownChange: vi.fn(),
      handleFocusPointerDown: vi.fn(),
      handleAperturePointerDown: vi.fn(),
      flashPanel: null,
      resetSticky,
      prevStopdownT,
    });

    const { result, rerender } = renderHook(
      ({ state }) =>
        useComparisonOrchestration({
          state,
          dispatch,
          navigate,
          catalogKeys: ["lens-a", "lens-b", "lens-c"],
        }),
      {
        initialProps: {
          state: buildState({ comparing: false, lensKeyA: "lens-a", lensKeyB: "lens-a" }),
        },
      },
    );

    act(() => {
      result.current.toggleCompare();
    });

    expect(dispatch).toHaveBeenCalledWith({ type: ENTER_COMPARE, catalogKeys: ["lens-a", "lens-b", "lens-c"] });
    expect(resetSticky).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith("/compare/lens-a/lens-b", { replace: false });

    rerender({
      state: buildState({ comparing: true, lensKeyA: "lens-a", lensKeyB: "lens-b" }),
    });

    const expectedCommonPoint = Math.log(2.8 / 1.4) / Math.log(22 / 1.4);

    await waitFor(() => {
      expect(dispatch).toHaveBeenCalledWith({ type: SET_SHARED_STOPDOWN_T, value: expectedCommonPoint });
    });

    expect(prevStopdownT.current).toBe(expectedCommonPoint);
  });

  it("exits comparison mode and restores lens A slider values", () => {
    const dispatch = vi.fn();
    const navigate = vi.fn();

    useComparisonModeMock.mockReturnValue({
      comparisonLenses: { LA: { FOPEN: 1.4, maxFstop: 16 }, LB: { FOPEN: 2, maxFstop: 16 } },
      scaleRatios: null,
      focusPair: { focusA: 0.3, focusB: 0.6, commonPoint: 0.5, minCloseFocus: 0.4, maxCloseFocus: 0.8 },
      aperturePair: {
        stopdownA: 0.2,
        stopdownB: 0.4,
        commonPoint: 0.5,
        widerFOPEN: 1.4,
        narrowerFOPEN: 2,
        sharedMaxFstop: 16,
      },
      zoomPair: null,
      movementPair: { showMovement: true, shiftA: 4, shiftB: 0, tiltA: -3, tiltB: 0 },
      handleHeaderHeight: vi.fn(),
      maxHeaderHeight: 0,
    });

    useStickySlidersMock.mockReturnValue({
      handleSharedFocusChange: vi.fn(),
      handleSharedStopdownChange: vi.fn(),
      handleFocusPointerDown: vi.fn(),
      handleAperturePointerDown: vi.fn(),
      flashPanel: null,
      resetSticky: vi.fn(),
      prevStopdownT: { current: 0 },
    });

    const { result } = renderHook(() =>
      useComparisonOrchestration({
        state: buildState({ comparing: true }),
        dispatch,
        navigate,
        catalogKeys: ["lens-a", "lens-b"],
      }),
    );

    act(() => {
      result.current.toggleCompare();
    });

    expect(dispatch).toHaveBeenCalledWith({
      type: EXIT_COMPARE,
      focusA: 0.3,
      stopdownA: 0.2,
      shiftA: 4,
      tiltA: -3,
    });
    expect(navigate).toHaveBeenCalledWith("/lens/lens-a", { replace: false });
  });
});
