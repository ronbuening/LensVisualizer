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
import useComparisonOrchestration from "../../../src/comparison/useComparisonOrchestration.js";
import { ENTER_COMPARE, EXIT_COMPARE, SET_SHARED_STOPDOWN_T } from "../../../src/comparison/comparisonReducer.js";
import { makeTestLensState } from "../../testUtils.js";
import type { LensState } from "../../../src/types/state.js";

const useComparisonModeMock = vi.fn();
const useStickySlidersMock = vi.fn();

vi.mock("../../../src/comparison/useComparisonMode.js", () => ({
  default: (params: unknown) => useComparisonModeMock(params),
  isComparisonOk: (result: { error?: unknown } | null) => result !== null && !result.error,
}));

vi.mock("../../../src/comparison/useStickySliders.js", () => ({
  default: (...args: unknown[]) => useStickySlidersMock(...args),
}));

function buildState(overrides?: Partial<LensState["lens"]>): LensState {
  return makeTestLensState({
    lens: {
      ...overrides,
      selectedConfigurationKey: overrides?.selectedConfigurationKey ?? overrides?.lensKeyA ?? "lens-a",
    },
  });
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
    expect(navigate).toHaveBeenCalledWith("/compare/lens-a/lens-b/", { replace: false });

    rerender({
      state: buildState({ comparing: true, lensKeyA: "lens-a", lensKeyB: "lens-b" }),
    });

    const expectedCommonPoint = Math.log(2.8 / 1.4) / Math.log(22 / 1.4);

    await waitFor(() => {
      expect(dispatch).toHaveBeenCalledWith({ type: SET_SHARED_STOPDOWN_T, value: expectedCommonPoint });
    });

    expect(prevStopdownT.current).toBe(expectedCommonPoint);
  });

  it("enters comparison with the active optical configuration in the route", () => {
    const dispatch = vi.fn();
    const navigate = vi.fn();

    useComparisonModeMock.mockReturnValue({
      comparisonLenses: null,
      scaleRatios: null,
      focusPair: null,
      aperturePair: null,
      zoomPair: null,
      movementPair: null,
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

    const state = buildState({
      lensKeyA: "lens-a",
      lensKeyB: "lens-b",
      selectedConfigurationKey: "lens-a-variant",
    });
    const { result } = renderHook(() =>
      useComparisonOrchestration({
        state,
        dispatch,
        navigate,
        catalogKeys: ["lens-a", "lens-a-variant", "lens-b"],
      }),
    );

    act(() => result.current.toggleCompare());
    expect(navigate).toHaveBeenCalledWith("/compare/lens-a-variant/lens-b/", { replace: false });
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
    expect(navigate).toHaveBeenCalledWith("/lens/lens-a/", { replace: false });
  });
});
