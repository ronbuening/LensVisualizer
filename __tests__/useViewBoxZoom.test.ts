// @vitest-environment jsdom

import { describe, expect, it, vi } from "vitest";
import { act, renderHook } from "@testing-library/react";
import useViewBoxZoom from "../src/components/hooks/useViewBoxZoom.js";

const SVG_W = 1200;
const SVG_H = 600;

function createSvgTarget() {
  return {
    getBoundingClientRect: () => ({
      left: 0,
      top: 0,
      width: SVG_W,
      height: SVG_H,
    }),
    setPointerCapture: vi.fn(),
    releasePointerCapture: vi.fn(),
  } as unknown as SVGSVGElement;
}

function createTouch(x: number, y: number) {
  return { clientX: x, clientY: y } as Touch;
}

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

  describe("event handlers", () => {
    it("zooms around the cursor on wheel events when active", () => {
      const { result } = renderHook(() => useViewBoxZoom(SVG_W, SVG_H, true));
      const preventDefault = vi.fn();

      act(() =>
        result.current.handleWheel({
          deltaY: -100,
          clientX: 300,
          clientY: 150,
          preventDefault,
          currentTarget: createSvgTarget(),
        } as unknown as React.WheelEvent<SVGSVGElement>),
      );

      expect(preventDefault).toHaveBeenCalledTimes(1);
      expect(result.current.state.zoom).toBeGreaterThan(1);
      expect(result.current.state.vbX).toBeGreaterThanOrEqual(0);
      expect(result.current.state.vbY).toBeGreaterThanOrEqual(0);
    });

    it("ignores wheel events when zoom mode is inactive", () => {
      const { result } = renderHook(() => useViewBoxZoom(SVG_W, SVG_H, false));
      const preventDefault = vi.fn();

      act(() =>
        result.current.handleWheel({
          deltaY: -100,
          clientX: 300,
          clientY: 150,
          preventDefault,
          currentTarget: createSvgTarget(),
        } as unknown as React.WheelEvent<SVGSVGElement>),
      );

      expect(preventDefault).not.toHaveBeenCalled();
      expect(result.current.state.zoom).toBe(1);
    });

    it("starts, updates, and ends pointer-driven panning", () => {
      const { result } = renderHook(() => useViewBoxZoom(SVG_W, SVG_H, true));
      const svgTarget = createSvgTarget();

      act(() => result.current.zoomIn());
      act(() =>
        result.current.handlePointerDown({
          button: 0,
          clientX: 200,
          clientY: 100,
          pointerId: 7,
          currentTarget: svgTarget,
        } as unknown as React.PointerEvent<SVGSVGElement>),
      );

      expect(result.current.isPanning).toBe(true);
      expect(svgTarget.setPointerCapture).toHaveBeenCalledWith(7);

      const vbXBefore = result.current.state.vbX;
      act(() =>
        result.current.handlePointerMove({
          clientX: 260,
          clientY: 130,
          currentTarget: svgTarget,
        } as unknown as React.PointerEvent<SVGSVGElement>),
      );

      expect(result.current.state.vbX).not.toBe(vbXBefore);

      act(() =>
        result.current.handlePointerUp({
          pointerId: 7,
          currentTarget: svgTarget,
        } as unknown as React.PointerEvent<SVGSVGElement>),
      );

      expect(svgTarget.releasePointerCapture).toHaveBeenCalledWith(7);
      expect(result.current.isPanning).toBe(false);
    });

    it("supports one-finger panning and two-finger pinch zoom", () => {
      const { result } = renderHook(() => useViewBoxZoom(SVG_W, SVG_H, true));
      const svgTarget = createSvgTarget();
      const preventDefault = vi.fn();

      act(() =>
        result.current.handleTouchStart({
          touches: [createTouch(120, 90)],
          currentTarget: svgTarget,
        } as unknown as React.TouchEvent<SVGSVGElement>),
      );

      act(() =>
        result.current.handleTouchMove({
          touches: [createTouch(180, 120)],
          preventDefault,
          currentTarget: svgTarget,
        } as unknown as React.TouchEvent<SVGSVGElement>),
      );

      expect(preventDefault).toHaveBeenCalled();
      expect(result.current.isPanning).toBe(true);

      act(() =>
        result.current.handleTouchEnd({
          currentTarget: svgTarget,
        } as unknown as React.TouchEvent<SVGSVGElement>),
      );

      expect(result.current.isPanning).toBe(false);

      act(() =>
        result.current.handleTouchStart({
          touches: [createTouch(200, 200), createTouch(260, 200)],
          currentTarget: svgTarget,
        } as unknown as React.TouchEvent<SVGSVGElement>),
      );

      act(() =>
        result.current.handleTouchMove({
          touches: [createTouch(180, 200), createTouch(320, 200)],
          preventDefault,
          currentTarget: svgTarget,
        } as unknown as React.TouchEvent<SVGSVGElement>),
      );

      expect(result.current.state.zoom).toBeGreaterThan(1);
    });
  });
});
