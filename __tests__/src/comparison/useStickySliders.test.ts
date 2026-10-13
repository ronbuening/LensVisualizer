// @vitest-environment jsdom

import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useStickySliders from "../../../src/comparison/useStickySliders.js";
import { SET_SHARED_FOCUS_T, SET_SHARED_STOPDOWN_T } from "../../../src/comparison/comparisonReducer.js";
import type { LensAction } from "../../../src/types/state.js";
import type { FocusPairResult, AperturePairResult } from "../../../src/comparison/comparisonSliders.js";
import { computeAperturePair } from "../../../src/comparison/comparisonSliders.js";
import type { RuntimeLens } from "../../../src/types/optics.js";
import type { Dispatch } from "react";

/* ── Mock helpers ── */

function makeFocusPair(commonPoint: number | null): FocusPairResult {
  return { commonPoint, focusTForA: 0, focusTForB: 0 } as unknown as FocusPairResult;
}

function makeAperturePair(commonPoint: number | null): AperturePairResult {
  return { commonPoint, stopdownTForA: 0, stopdownTForB: 0, limitingPanel: "b" } as unknown as AperturePairResult;
}

describe("useStickySliders", () => {
  let dispatch: Dispatch<LensAction>;
  let dispatchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    dispatchMock = vi.fn();
    dispatch = dispatchMock as unknown as Dispatch<LensAction>;
  });

  it("dispatches SET_SHARED_FOCUS_T on focus change without sticky", () => {
    const focusPair = makeFocusPair(null);
    const { result } = renderHook(() => useStickySliders(dispatch, focusPair, null));
    act(() => {
      result.current.handleSharedFocusChange(0.5);
    });
    expect(dispatchMock).toHaveBeenCalledWith({ type: SET_SHARED_FOCUS_T, value: expect.any(Number) });
  });

  it("dispatches SET_SHARED_STOPDOWN_T on stopdown change without sticky", () => {
    const aperturePair = makeAperturePair(null);
    const { result } = renderHook(() => useStickySliders(dispatch, null, aperturePair));
    act(() => {
      result.current.handleSharedStopdownChange(0.3);
    });
    expect(dispatchMock).toHaveBeenCalledWith({ type: SET_SHARED_STOPDOWN_T, value: expect.any(Number) });
  });

  it("sticks at focus common point when crossing it", () => {
    const focusPair = makeFocusPair(0.5);
    const { result } = renderHook(() => useStickySliders(dispatch, focusPair, null));

    /* Move from below CP to above it — should stick */
    act(() => {
      result.current.handleSharedFocusChange(0.3); // below CP, sets prevT
    });
    dispatchMock.mockClear();

    act(() => {
      result.current.handleSharedFocusChange(0.6); // crosses 0.5
    });
    expect(dispatchMock).toHaveBeenCalledWith({ type: SET_SHARED_FOCUS_T, value: 0.5 });
  });

  it("stays stuck after crossing focus common point until pointerDown", () => {
    const focusPair = makeFocusPair(0.5);
    const { result } = renderHook(() => useStickySliders(dispatch, focusPair, null));

    /* Cross the CP to get stuck */
    act(() => result.current.handleSharedFocusChange(0.3));
    act(() => result.current.handleSharedFocusChange(0.6));
    dispatchMock.mockClear();

    /* While stuck, further moves are rejected (held at CP) */
    act(() => result.current.handleSharedFocusChange(0.8));
    expect(dispatchMock).toHaveBeenCalledWith({ type: SET_SHARED_FOCUS_T, value: 0.5 });
    dispatchMock.mockClear();

    /* pointerDown releases the stick */
    act(() => result.current.handleFocusPointerDown());
    act(() => result.current.handleSharedFocusChange(0.8));
    expect(dispatchMock).toHaveBeenCalledWith({ type: SET_SHARED_FOCUS_T, value: expect.any(Number) });
    /* Should NOT be held at 0.5 anymore */
    const lastCall = dispatchMock.mock.calls[dispatchMock.mock.calls.length - 1][0];
    expect(lastCall.value).not.toBe(0.5);
  });

  it("sticks at aperture common point when crossing it", () => {
    const aperturePair = makeAperturePair(0.4);
    const { result } = renderHook(() => useStickySliders(dispatch, null, aperturePair));

    act(() => result.current.handleSharedStopdownChange(0.2));
    dispatchMock.mockClear();

    act(() => result.current.handleSharedStopdownChange(0.5));
    expect(dispatchMock).toHaveBeenCalledWith({ type: SET_SHARED_STOPDOWN_T, value: 0.4 });
  });

  it("flashes the current-zoom limiting lens after its aperture schedule crosses the other lens", () => {
    const a = { FOPEN: 2, maxFstop: 16, isZoom: true, zoomFOPENs: [2, 8] } as unknown as RuntimeLens;
    const b = { FOPEN: 4, maxFstop: 16 } as unknown as RuntimeLens;
    const { result, rerender } = renderHook(
      ({ zoom }) => useStickySliders(dispatch, null, computeAperturePair(0, a, b, zoom, 0)),
      { initialProps: { zoom: 0 } },
    );
    rerender({ zoom: 1 });
    act(() => result.current.handleSharedStopdownChange(0.9));
    expect(dispatchMock).toHaveBeenLastCalledWith({
      type: SET_SHARED_STOPDOWN_T,
      value: Math.log(8 / 2) / Math.log(16 / 2),
    });
    expect(result.current.flashPanel).toBe("a");
  });

  it("direct selections clear an existing detent and do not snap nearby values", () => {
    const { result } = renderHook(() => useStickySliders(dispatch, makeFocusPair(0.5), makeAperturePair(0.5)));
    act(() => result.current.handleSharedStopdownChange(0.7));
    act(() => result.current.handleSharedStopdownChange(0.504, true));
    expect(dispatchMock).toHaveBeenLastCalledWith({ type: SET_SHARED_STOPDOWN_T, value: 0.504 });
    act(() => result.current.handleSharedFocusChange(0.7));
    act(() => result.current.handleSharedFocusChange(0.504, true));
    expect(dispatchMock).toHaveBeenLastCalledWith({ type: SET_SHARED_FOCUS_T, value: 0.504 });
  });

  it("starts a new drag from the displayed value after zoom or URL changes", () => {
    const { result } = renderHook(() => useStickySliders(dispatch, makeFocusPair(0.5), makeAperturePair(0.5)));
    act(() => result.current.handleFocusPointerDown(0.8));
    act(() => result.current.handleSharedFocusChange(0.9));
    expect(dispatchMock).toHaveBeenLastCalledWith({ type: SET_SHARED_FOCUS_T, value: 0.9 });
    act(() => result.current.handleSharedFocusChange(0.4));
    expect(dispatchMock).toHaveBeenLastCalledWith({ type: SET_SHARED_FOCUS_T, value: 0.5 });
  });

  it("resetSticky clears stuck state", () => {
    const focusPair = makeFocusPair(0.5);
    const { result } = renderHook(() => useStickySliders(dispatch, focusPair, null));

    /* Get stuck */
    act(() => result.current.handleSharedFocusChange(0.3));
    act(() => result.current.handleSharedFocusChange(0.6));
    dispatchMock.mockClear();

    /* Reset sticky */
    act(() => result.current.resetSticky());

    /* Should move freely now (prevT reset to 0, stuck=false) */
    act(() => result.current.handleSharedFocusChange(0.8));
    const lastCall = dispatchMock.mock.calls[dispatchMock.mock.calls.length - 1][0];
    expect(lastCall.type).toBe(SET_SHARED_FOCUS_T);
  });

  it("dispatches the raw focus value (never NaN) when there is no focus pair", () => {
    const { result } = renderHook(() => useStickySliders(dispatch, null, null));
    act(() => {
      result.current.handleSharedFocusChange(0.42);
    });
    expect(dispatchMock).toHaveBeenCalledWith({ type: SET_SHARED_FOCUS_T, value: 0.42 });
  });

  it("dispatches the raw stopdown value (never NaN) when there is no aperture pair", () => {
    const { result } = renderHook(() => useStickySliders(dispatch, null, null));
    act(() => {
      result.current.handleSharedStopdownChange(0.37);
    });
    expect(dispatchMock).toHaveBeenCalledWith({ type: SET_SHARED_STOPDOWN_T, value: 0.37 });
  });

  it("dispatches the raw value (never NaN) when the pair has a null commonPoint", () => {
    const focusPair = makeFocusPair(null);
    const aperturePair = makeAperturePair(null);
    const { result } = renderHook(() => useStickySliders(dispatch, focusPair, aperturePair));
    act(() => {
      result.current.handleSharedFocusChange(0.42);
      result.current.handleSharedStopdownChange(0.37);
    });
    expect(dispatchMock).toHaveBeenCalledWith({ type: SET_SHARED_FOCUS_T, value: 0.42 });
    expect(dispatchMock).toHaveBeenCalledWith({ type: SET_SHARED_STOPDOWN_T, value: 0.37 });
  });

  it("clears the pending flash timer on unmount", () => {
    vi.useFakeTimers();
    try {
      const focusPair = makeFocusPair(0.5);
      const { result, unmount } = renderHook(() => useStickySliders(dispatch, focusPair, null));

      /* Cross the CP to trigger the 400ms flash timer */
      act(() => result.current.handleSharedFocusChange(0.3));
      act(() => result.current.handleSharedFocusChange(0.6));
      expect(result.current.flashPanel).not.toBeNull();
      expect(vi.getTimerCount()).toBeGreaterThan(0);

      unmount();
      expect(vi.getTimerCount()).toBe(0);
    } finally {
      vi.useRealTimers();
    }
  });

  it("does not stick when commonPoint is near 0 or 1", () => {
    /* CP at 0.005 (< 0.01) — sticky should not activate.
     * The slider should still dispatch normally without entering the stuck state.
     * Move well past the CP to avoid snapToCommon's snap range. */
    const focusPair = makeFocusPair(0.005);
    const { result } = renderHook(() => useStickySliders(dispatch, focusPair, null));

    act(() => result.current.handleSharedFocusChange(0.001));
    dispatchMock.mockClear();

    /* Move well beyond CP — should NOT get stuck */
    act(() => result.current.handleSharedFocusChange(0.5));
    expect(dispatchMock).toHaveBeenCalled();
    /* Verify it dispatched the value directly (not stuck at CP) */
    const lastCall = dispatchMock.mock.calls[dispatchMock.mock.calls.length - 1][0];
    expect(lastCall.value).toBe(0.5);

    /* Further moves should work freely (not stuck) */
    dispatchMock.mockClear();
    act(() => result.current.handleSharedFocusChange(0.8));
    expect(dispatchMock).toHaveBeenCalled();
    const nextCall = dispatchMock.mock.calls[dispatchMock.mock.calls.length - 1][0];
    expect(nextCall.value).toBe(0.8);
  });
});
