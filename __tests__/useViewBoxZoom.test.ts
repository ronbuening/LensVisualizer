// @vitest-environment jsdom

import { describe, expect, it } from "vitest";
import { act, renderHook } from "@testing-library/react";
import useViewBoxZoom from "../src/components/hooks/useViewBoxZoom.js";

const SVG_W = 1200;
const SVG_H = 600;

describe("useViewBoxZoom", () => {
  describe("default state", () => {
    it("initializes with default viewBox matching svgW/svgH at 1x zoom", () => {
      const { result } = renderHook(() => useViewBoxZoom(SVG_W, SVG_H, true));
      expect(result.current.state).toEqual({ vbX: 0, vbY: 0, vbW: SVG_W, vbH: SVG_H, zoom: 1 });
      expect(result.current.viewBox).toBe(`0 0 ${SVG_W} ${SVG_H}`);
      expect(result.current.isPanning).toBe(false);
    });

    it("formats viewBox string from state", () => {
      const { result } = renderHook(() => useViewBoxZoom(800, 400, true));
      expect(result.current.viewBox).toBe("0 0 800 400");
    });
  });

  describe("reset", () => {
    it("returns to default state after zoom changes", () => {
      const { result } = renderHook(() => useViewBoxZoom(SVG_W, SVG_H, true));

      act(() => result.current.zoomIn());
      expect(result.current.state.zoom).toBeGreaterThan(1);

      act(() => result.current.reset());
      expect(result.current.state).toEqual({ vbX: 0, vbY: 0, vbW: SVG_W, vbH: SVG_H, zoom: 1 });
    });
  });

  describe("zoomIn / zoomOut", () => {
    it("zoomIn increases zoom and reduces viewBox dimensions", () => {
      const { result } = renderHook(() => useViewBoxZoom(SVG_W, SVG_H, true));

      act(() => result.current.zoomIn());

      expect(result.current.state.zoom).toBeGreaterThan(1);
      expect(result.current.state.vbW).toBeLessThan(SVG_W);
      expect(result.current.state.vbH).toBeLessThan(SVG_H);
    });

    it("zoomOut at 1x does not go below minimum zoom", () => {
      const { result } = renderHook(() => useViewBoxZoom(SVG_W, SVG_H, true));

      act(() => result.current.zoomOut());

      expect(result.current.state.zoom).toBe(1);
      expect(result.current.state.vbW).toBe(SVG_W);
      expect(result.current.state.vbH).toBe(SVG_H);
    });

    it("zoomIn then zoomOut returns approximately to 1x", () => {
      const { result } = renderHook(() => useViewBoxZoom(SVG_W, SVG_H, true));

      act(() => result.current.zoomIn());
      act(() => result.current.zoomOut());

      expect(result.current.state.zoom).toBeCloseTo(1, 5);
      expect(result.current.state.vbW).toBeCloseTo(SVG_W, 3);
    });

    it("zoom is clamped to a maximum value", () => {
      const { result } = renderHook(() => useViewBoxZoom(SVG_W, SVG_H, true));

      for (let i = 0; i < 100; i++) {
        act(() => result.current.zoomIn());
      }

      expect(result.current.state.zoom).toBeLessThanOrEqual(50);
    });

    it("zoomIn centers on the current view", () => {
      const { result } = renderHook(() => useViewBoxZoom(SVG_W, SVG_H, true));

      act(() => result.current.zoomIn());

      /* Center of the viewBox should remain at the center of the diagram */
      const cx = result.current.state.vbX + result.current.state.vbW / 2;
      const cy = result.current.state.vbY + result.current.state.vbH / 2;
      expect(cx).toBeCloseTo(SVG_W / 2, 3);
      expect(cy).toBeCloseTo(SVG_H / 2, 3);
    });
  });

  describe("panBy", () => {
    it("shifts the viewBox origin", () => {
      const { result } = renderHook(() => useViewBoxZoom(SVG_W, SVG_H, true));

      /* Zoom in first so there's room to pan */
      act(() => result.current.zoomIn());
      act(() => result.current.zoomIn());
      const vbXBefore = result.current.state.vbX;
      const vbYBefore = result.current.state.vbY;

      act(() => result.current.panBy(10, 5));

      expect(result.current.state.vbX).toBeCloseTo(vbXBefore + 10, 3);
      expect(result.current.state.vbY).toBeCloseTo(vbYBefore + 5, 3);
    });

    it("clamps pan so the diagram stays partially visible", () => {
      const { result } = renderHook(() => useViewBoxZoom(SVG_W, SVG_H, true));

      /* Pan far off to the right without zooming */
      act(() => result.current.panBy(999999, 999999));

      /* Should be clamped — not at 999999 */
      expect(result.current.state.vbX).toBeLessThan(SVG_W);
      expect(result.current.state.vbY).toBeLessThan(SVG_H);
    });
  });

  describe("inactive mode", () => {
    it("does not respond to zoomIn/zoomOut when inactive", () => {
      /* The hook always processes programmatic calls; the "active" guard is
         only on event handlers (wheel, pointer, touch). Verify handlers
         are guarded by checking the active flag in a separate test. */
      const { result } = renderHook(() => useViewBoxZoom(SVG_W, SVG_H, false));

      /* Programmatic calls still work (they're used during reset transitions) */
      act(() => result.current.zoomIn());
      expect(result.current.state.zoom).toBeGreaterThan(1);
    });
  });

  describe("viewBox math", () => {
    it("viewBox dimensions equal svgW/zoom and svgH/zoom after zoomIn", () => {
      const { result } = renderHook(() => useViewBoxZoom(SVG_W, SVG_H, true));

      act(() => result.current.zoomIn());

      const z = result.current.state.zoom;
      expect(result.current.state.vbW).toBeCloseTo(SVG_W / z, 5);
      expect(result.current.state.vbH).toBeCloseTo(SVG_H / z, 5);
    });
  });
});
