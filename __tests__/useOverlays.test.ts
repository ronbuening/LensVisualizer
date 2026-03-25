// @vitest-environment jsdom

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useOverlays from "../src/components/hooks/useOverlays.js";
import { SET_OVERLAY, CLOSE_ALL_OVERLAYS } from "../src/utils/lensReducer.js";
import type { LensAction } from "../src/types/state.js";
import type { Dispatch } from "react";

function makeParams(overrides: Record<string, unknown> = {}) {
  return {
    showAbout: false,
    showAboutSite: false,
    showOpticsPrimer: false,
    dispatch: vi.fn() as unknown as Dispatch<LensAction>,
    ...overrides,
  };
}

describe("useOverlays", () => {
  it("returns expected interface shape", () => {
    const { result } = renderHook(() => useOverlays(makeParams()));
    expect(result.current.primerLevel).toBe("simple");
    expect(typeof result.current.togglePrimerLevel).toBe("function");
    expect(typeof result.current.openAboutSite).toBe("function");
    expect(typeof result.current.openAboutAuthor).toBe("function");
    expect(typeof result.current.openOpticsPrimer).toBe("function");
    expect(typeof result.current.closeAboutSite).toBe("function");
    expect(typeof result.current.closeAboutAuthor).toBe("function");
    expect(typeof result.current.closeOpticsPrimer).toBe("function");
  });

  it("togglePrimerLevel cycles between simple and intermediate", () => {
    const { result } = renderHook(() => useOverlays(makeParams()));
    expect(result.current.primerLevel).toBe("simple");

    act(() => result.current.togglePrimerLevel());
    expect(result.current.primerLevel).toBe("intermediate");

    act(() => result.current.togglePrimerLevel());
    expect(result.current.primerLevel).toBe("simple");
  });

  it("openAboutSite dispatches SET_OVERLAY with showAboutSite", () => {
    const dispatch = vi.fn();
    const { result } = renderHook(() => useOverlays(makeParams({ dispatch })));
    act(() => result.current.openAboutSite());
    expect(dispatch).toHaveBeenCalledWith({ type: SET_OVERLAY, overlay: "showAboutSite", visible: true });
  });

  it("openAboutAuthor dispatches SET_OVERLAY with showAbout", () => {
    const dispatch = vi.fn();
    const { result } = renderHook(() => useOverlays(makeParams({ dispatch })));
    act(() => result.current.openAboutAuthor());
    expect(dispatch).toHaveBeenCalledWith({ type: SET_OVERLAY, overlay: "showAbout", visible: true });
  });

  it("openOpticsPrimer dispatches SET_OVERLAY with showOpticsPrimer", () => {
    const dispatch = vi.fn();
    const { result } = renderHook(() => useOverlays(makeParams({ dispatch })));
    act(() => result.current.openOpticsPrimer());
    expect(dispatch).toHaveBeenCalledWith({ type: SET_OVERLAY, overlay: "showOpticsPrimer", visible: true });
  });

  it("closeAboutSite dispatches SET_OVERLAY with visible false", () => {
    const dispatch = vi.fn();
    const { result } = renderHook(() => useOverlays(makeParams({ dispatch })));
    act(() => result.current.closeAboutSite());
    expect(dispatch).toHaveBeenCalledWith({ type: SET_OVERLAY, overlay: "showAboutSite", visible: false });
  });

  it("closeOpticsPrimer dispatches and resets primerLevel", () => {
    const dispatch = vi.fn();
    const { result } = renderHook(() => useOverlays(makeParams({ dispatch, showOpticsPrimer: true })));

    /* Set primer to intermediate first */
    act(() => result.current.togglePrimerLevel());
    expect(result.current.primerLevel).toBe("intermediate");

    /* Close should reset to simple */
    act(() => result.current.closeOpticsPrimer());
    expect(dispatch).toHaveBeenCalledWith({ type: SET_OVERLAY, overlay: "showOpticsPrimer", visible: false });
    expect(result.current.primerLevel).toBe("simple");
  });

  describe("Escape key handler", () => {
    beforeEach(() => vi.useFakeTimers());
    afterEach(() => vi.useRealTimers());

    it("dispatches CLOSE_ALL_OVERLAYS on Escape when overlay is open", () => {
      const dispatch = vi.fn();
      renderHook(() => useOverlays(makeParams({ dispatch, showAboutSite: true })));

      const event = new KeyboardEvent("keydown", { key: "Escape" });
      window.dispatchEvent(event);

      expect(dispatch).toHaveBeenCalledWith({ type: CLOSE_ALL_OVERLAYS });
    });

    it("resets primerLevel to simple on Escape", () => {
      const dispatch = vi.fn();
      const { result } = renderHook(() => useOverlays(makeParams({ dispatch, showOpticsPrimer: true })));

      act(() => result.current.togglePrimerLevel());
      expect(result.current.primerLevel).toBe("intermediate");

      act(() => {
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
      });
      expect(result.current.primerLevel).toBe("simple");
    });

    it("does not add listener when no overlay is open", () => {
      const dispatch = vi.fn();
      renderHook(() => useOverlays(makeParams({ dispatch })));

      window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
