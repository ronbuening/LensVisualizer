// @vitest-environment jsdom

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useInteractionSignal from "../src/components/hooks/useInteractionSignal.js";

describe("useInteractionSignal", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it("starts in non-interacting state", () => {
    const { result } = renderHook(() => useInteractionSignal());
    expect(result.current.interacting).toBe(false);
  });

  it("beginInteraction sets interacting to true", () => {
    const { result } = renderHook(() => useInteractionSignal());
    act(() => result.current.beginInteraction());
    expect(result.current.interacting).toBe(true);
  });

  it("endInteraction sets interacting to false", () => {
    const { result } = renderHook(() => useInteractionSignal());
    act(() => result.current.beginInteraction());
    act(() => result.current.endInteraction());
    expect(result.current.interacting).toBe(false);
  });

  it("onChangeActivity sets interacting to true", () => {
    const { result } = renderHook(() => useInteractionSignal());
    act(() => result.current.onChangeActivity());
    expect(result.current.interacting).toBe(true);
  });

  it("onChangeActivity resets to false after 150 ms safety timeout", () => {
    const { result } = renderHook(() => useInteractionSignal());
    act(() => result.current.onChangeActivity());
    expect(result.current.interacting).toBe(true);
    act(() => vi.advanceTimersByTime(150));
    expect(result.current.interacting).toBe(false);
  });

  it("onChangeActivity does not reset before 150 ms", () => {
    const { result } = renderHook(() => useInteractionSignal());
    act(() => result.current.onChangeActivity());
    act(() => vi.advanceTimersByTime(149));
    expect(result.current.interacting).toBe(true);
  });

  it("repeated onChangeActivity calls extend the timeout", () => {
    const { result } = renderHook(() => useInteractionSignal());
    act(() => result.current.onChangeActivity());
    act(() => vi.advanceTimersByTime(100));
    act(() => result.current.onChangeActivity()); // reset the 150 ms window
    act(() => vi.advanceTimersByTime(100));
    // only 100 ms since last onChangeActivity — should still be true
    expect(result.current.interacting).toBe(true);
    act(() => vi.advanceTimersByTime(50));
    expect(result.current.interacting).toBe(false);
  });

  it("endInteraction cancels the safety timeout", () => {
    const { result } = renderHook(() => useInteractionSignal());
    act(() => result.current.onChangeActivity());
    act(() => result.current.endInteraction()); // cancels pending timeout
    act(() => vi.advanceTimersByTime(300));
    // interacting was set false by endInteraction; timeout should not flip it back
    expect(result.current.interacting).toBe(false);
  });

  it("beginInteraction cancels the safety timeout so it does not switch off", () => {
    const { result } = renderHook(() => useInteractionSignal());
    act(() => result.current.onChangeActivity()); // starts 150 ms safety timer
    act(() => result.current.beginInteraction()); // cancels timer, stays true
    act(() => vi.advanceTimersByTime(300));
    expect(result.current.interacting).toBe(true);
  });

  it("endInteraction after beginInteraction is a no-op on pending timers", () => {
    const { result } = renderHook(() => useInteractionSignal());
    act(() => result.current.beginInteraction());
    act(() => result.current.endInteraction());
    act(() => vi.advanceTimersByTime(300));
    expect(result.current.interacting).toBe(false);
  });
});
