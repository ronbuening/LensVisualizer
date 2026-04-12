// @vitest-environment jsdom

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useFlashOverlay from "../src/components/hooks/useFlashOverlay.js";

describe("useFlashOverlay", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it("starts with flash hidden", () => {
    const { result } = renderHook(() => useFlashOverlay(false));
    expect(result.current.flashVisible).toBe(false);
    expect(result.current.flashFading).toBe(false);
    expect(result.current.flashKey).toBe(0);
  });

  it("shows flash when flashOverlay becomes true", () => {
    const { result, rerender } = renderHook(({ flash }) => useFlashOverlay(flash), {
      initialProps: { flash: false },
    });
    rerender({ flash: true });
    expect(result.current.flashVisible).toBe(true);
    expect(result.current.flashFading).toBe(false);
    expect(result.current.flashKey).toBe(1);
  });

  it("transitions to fading after two animation frames", () => {
    const rafCallbacks: FrameRequestCallback[] = [];
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
      rafCallbacks.push(cb);
      return rafCallbacks.length;
    });

    const { result, rerender } = renderHook(({ flash }) => useFlashOverlay(flash), {
      initialProps: { flash: false },
    });
    rerender({ flash: true });

    // First RAF
    act(() => {
      if (rafCallbacks[0]) rafCallbacks[0](0);
    });
    // Second RAF
    act(() => {
      if (rafCallbacks[1]) rafCallbacks[1](0);
    });

    expect(result.current.flashFading).toBe(true);
    expect(result.current.flashVisible).toBe(true);
  });

  it("hides flash after timeout completes", () => {
    const rafCallbacks: FrameRequestCallback[] = [];
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
      rafCallbacks.push(cb);
      return rafCallbacks.length;
    });

    const { result, rerender } = renderHook(({ flash }) => useFlashOverlay(flash), {
      initialProps: { flash: false },
    });
    rerender({ flash: true });

    // Trigger both RAFs
    act(() => {
      if (rafCallbacks[0]) rafCallbacks[0](0);
    });
    act(() => {
      if (rafCallbacks[1]) rafCallbacks[1](0);
    });

    // Advance past the 500ms fade timer
    act(() => vi.advanceTimersByTime(500));
    expect(result.current.flashVisible).toBe(false);
  });
});
