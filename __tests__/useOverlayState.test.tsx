// @vitest-environment jsdom

import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import useOverlayState from "../src/components/hooks/useOverlayState.js";

describe("useOverlayState", () => {
  it("opens and closes the bokeh preview overlay", () => {
    const { result } = renderHook(({ lensKey }: { lensKey: string }) => useOverlayState(lensKey), {
      initialProps: { lensKey: "lens-a" },
    });

    expect(result.current.showBokehPreview).toBe(false);

    act(() => {
      result.current.openBokehPreview();
    });

    expect(result.current.showBokehPreview).toBe(true);

    act(() => {
      result.current.closeBokehPreview();
    });

    expect(result.current.showBokehPreview).toBe(false);
  });

  it("resets all diagram overlays when the lens key changes", () => {
    const { result, rerender } = renderHook(({ lensKey }: { lensKey: string }) => useOverlayState(lensKey), {
      initialProps: { lensKey: "lens-a" },
    });

    act(() => {
      result.current.openAbbeDiagram();
      result.current.openBokehPreview();
      result.current.openLcaOverlay();
      result.current.openPetzvalOverlay();
    });

    expect(result.current.showAbbeDiagram).toBe(true);
    expect(result.current.showBokehPreview).toBe(true);
    expect(result.current.showLcaOverlay).toBe(true);
    expect(result.current.showPetzvalOverlay).toBe(true);

    rerender({ lensKey: "lens-b" });

    expect(result.current.showAbbeDiagram).toBe(false);
    expect(result.current.showBokehPreview).toBe(false);
    expect(result.current.showLcaOverlay).toBe(false);
    expect(result.current.showPetzvalOverlay).toBe(false);
  });
});
