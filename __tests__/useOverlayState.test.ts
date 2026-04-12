// @vitest-environment jsdom

import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useOverlayState from "../src/components/hooks/useOverlayState.js";

describe("useOverlayState", () => {
  it("all overlays start closed", () => {
    const { result } = renderHook(() => useOverlayState("lens-a"));
    expect(result.current.showAbbeDiagram).toBe(false);
    expect(result.current.showLcaOverlay).toBe(false);
    expect(result.current.showPetzvalOverlay).toBe(false);
  });

  it("opens and closes Abbe diagram", () => {
    const { result } = renderHook(() => useOverlayState("lens-a"));
    act(() => result.current.openAbbeDiagram());
    expect(result.current.showAbbeDiagram).toBe(true);
    act(() => result.current.closeAbbeDiagram());
    expect(result.current.showAbbeDiagram).toBe(false);
  });

  it("opens and closes LCA overlay", () => {
    const { result } = renderHook(() => useOverlayState("lens-a"));
    act(() => result.current.openLcaOverlay());
    expect(result.current.showLcaOverlay).toBe(true);
    act(() => result.current.closeLcaOverlay());
    expect(result.current.showLcaOverlay).toBe(false);
  });

  it("opens and closes Petzval overlay", () => {
    const { result } = renderHook(() => useOverlayState("lens-a"));
    act(() => result.current.openPetzvalOverlay());
    expect(result.current.showPetzvalOverlay).toBe(true);
    act(() => result.current.closePetzvalOverlay());
    expect(result.current.showPetzvalOverlay).toBe(false);
  });

  it("resets all overlays when lensKey changes", () => {
    const { result, rerender } = renderHook(({ key }) => useOverlayState(key), {
      initialProps: { key: "lens-a" },
    });
    act(() => {
      result.current.openAbbeDiagram();
      result.current.openLcaOverlay();
      result.current.openPetzvalOverlay();
    });
    expect(result.current.showAbbeDiagram).toBe(true);
    expect(result.current.showLcaOverlay).toBe(true);
    expect(result.current.showPetzvalOverlay).toBe(true);

    rerender({ key: "lens-b" });
    expect(result.current.showAbbeDiagram).toBe(false);
    expect(result.current.showLcaOverlay).toBe(false);
    expect(result.current.showPetzvalOverlay).toBe(false);
  });

  it("overlays are independent of each other", () => {
    const { result } = renderHook(() => useOverlayState("lens-a"));
    act(() => result.current.openAbbeDiagram());
    expect(result.current.showAbbeDiagram).toBe(true);
    expect(result.current.showLcaOverlay).toBe(false);
    expect(result.current.showPetzvalOverlay).toBe(false);
  });
});
