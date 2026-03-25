// @vitest-environment jsdom

import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useStickySliders from "../src/utils/useStickySliders.js";
import { SET_SHARED_FOCUS_T, SET_SHARED_STOPDOWN_T } from "../src/utils/lensReducer.js";
import type { RuntimeLens } from "../src/types/optics.js";
import type { FocusPairResult, AperturePairResult } from "../src/utils/comparisonSliders.js";

/* ── Mock helpers ── */

function makeLens(closeFocusM: number, FOPEN: number): RuntimeLens {
  return { closeFocusM, FOPEN } as unknown as RuntimeLens;
}

function makeFocusPair(commonPoint: number | null): FocusPairResult {
  return { commonPoint, focusTForA: 0, focusTForB: 0 } as unknown as FocusPairResult;
}

function makeAperturePair(commonPoint: number | null): AperturePairResult {
  return { commonPoint, stopdownTForA: 0, stopdownTForB: 0 } as unknown as AperturePairResult;
}

const LA = makeLens(0.3, 1.4);
const LB = makeLens(0.5, 2.0);

describe("useStickySliders", () => {
  let dispatch: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    dispatch = vi.fn();
  });

  it("returns expected interface shape", () => {
    const { result } = renderHook(() => useStickySliders(dispatch, null, null, null));
    expect(typeof result.current.handleSharedFocusChange).toBe("function");
    expect(typeof result.current.handleSharedStopdownChange).toBe("function");
    expect(typeof result.current.handleFocusPointerDown).toBe("function");
    expect(typeof result.current.handleAperturePointerDown).toBe("function");
    expect(typeof result.current.resetSticky).toBe("function");
    expect(result.current.flashPanel).toBeNull();
  });

  it("dispatches SET_SHARED_FOCUS_T on focus change without sticky", () => {
    const focusPair = makeFocusPair(null);
    const { result } = renderHook(() => useStickySliders(dispatch, focusPair, null, { LA, LB }));
    act(() => {
      result.current.handleSharedFocusChange(0.5);
    });
    expect(dispatch).toHaveBeenCalledWith({ type: SET_SHARED_FOCUS_T, value: expect.any(Number) });
  });

  it("dispatches SET_SHARED_STOPDOWN_T on stopdown change without sticky", () => {
    const aperturePair = makeAperturePair(null);
    const { result } = renderHook(() => useStickySliders(dispatch, null, aperturePair, { LA, LB }));
    act(() => {
      result.current.handleSharedStopdownChange(0.3);
    });
    expect(dispatch).toHaveBeenCalledWith({ type: SET_SHARED_STOPDOWN_T, value: expect.any(Number) });
  });

  it("sticks at focus common point when crossing it", () => {
    const focusPair = makeFocusPair(0.5);
    const { result } = renderHook(() => useStickySliders(dispatch, focusPair, null, { LA, LB }));

    /* Move from below CP to above it — should stick */
    act(() => {
      result.current.handleSharedFocusChange(0.3); // below CP, sets prevT
    });
    dispatch.mockClear();

    act(() => {
      result.current.handleSharedFocusChange(0.6); // crosses 0.5
    });
    expect(dispatch).toHaveBeenCalledWith({ type: SET_SHARED_FOCUS_T, value: 0.5 });
  });

  it("stays stuck after crossing focus common point until pointerDown", () => {
    const focusPair = makeFocusPair(0.5);
    const { result } = renderHook(() => useStickySliders(dispatch, focusPair, null, { LA, LB }));

    /* Cross the CP to get stuck */
    act(() => result.current.handleSharedFocusChange(0.3));
    act(() => result.current.handleSharedFocusChange(0.6));
    dispatch.mockClear();

    /* While stuck, further moves are rejected (held at CP) */
    act(() => result.current.handleSharedFocusChange(0.8));
    expect(dispatch).toHaveBeenCalledWith({ type: SET_SHARED_FOCUS_T, value: 0.5 });
    dispatch.mockClear();

    /* pointerDown releases the stick */
    act(() => result.current.handleFocusPointerDown());
    act(() => result.current.handleSharedFocusChange(0.8));
    expect(dispatch).toHaveBeenCalledWith({ type: SET_SHARED_FOCUS_T, value: expect.any(Number) });
    /* Should NOT be held at 0.5 anymore */
    const lastCall = dispatch.mock.calls[dispatch.mock.calls.length - 1][0];
    expect(lastCall.value).not.toBe(0.5);
  });

  it("sticks at aperture common point when crossing it", () => {
    const aperturePair = makeAperturePair(0.4);
    const { result } = renderHook(() => useStickySliders(dispatch, null, aperturePair, { LA, LB }));

    act(() => result.current.handleSharedStopdownChange(0.2));
    dispatch.mockClear();

    act(() => result.current.handleSharedStopdownChange(0.5));
    expect(dispatch).toHaveBeenCalledWith({ type: SET_SHARED_STOPDOWN_T, value: 0.4 });
  });

  it("resetSticky clears stuck state", () => {
    const focusPair = makeFocusPair(0.5);
    const { result } = renderHook(() => useStickySliders(dispatch, focusPair, null, { LA, LB }));

    /* Get stuck */
    act(() => result.current.handleSharedFocusChange(0.3));
    act(() => result.current.handleSharedFocusChange(0.6));
    dispatch.mockClear();

    /* Reset sticky */
    act(() => result.current.resetSticky());

    /* Should move freely now (prevT reset to 0, stuck=false) */
    act(() => result.current.handleSharedFocusChange(0.8));
    const lastCall = dispatch.mock.calls[dispatch.mock.calls.length - 1][0];
    expect(lastCall.type).toBe(SET_SHARED_FOCUS_T);
  });

  it("does not stick when commonPoint is near 0 or 1", () => {
    /* CP at 0.005 (< 0.01) — sticky should not activate.
     * The slider should still dispatch normally without entering the stuck state.
     * Move well past the CP to avoid snapToCommon's snap range. */
    const focusPair = makeFocusPair(0.005);
    const { result } = renderHook(() => useStickySliders(dispatch, focusPair, null, { LA, LB }));

    act(() => result.current.handleSharedFocusChange(0.001));
    dispatch.mockClear();

    /* Move well beyond CP — should NOT get stuck */
    act(() => result.current.handleSharedFocusChange(0.5));
    expect(dispatch).toHaveBeenCalled();
    /* Verify it dispatched the value directly (not stuck at CP) */
    const lastCall = dispatch.mock.calls[dispatch.mock.calls.length - 1][0];
    expect(lastCall.value).toBe(0.5);

    /* Further moves should work freely (not stuck) */
    dispatch.mockClear();
    act(() => result.current.handleSharedFocusChange(0.8));
    expect(dispatch).toHaveBeenCalled();
    const nextCall = dispatch.mock.calls[dispatch.mock.calls.length - 1][0];
    expect(nextCall.value).toBe(0.8);
  });
});
