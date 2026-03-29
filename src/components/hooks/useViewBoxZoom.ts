/**
 * useViewBoxZoom — Manages SVG viewBox state for zoom/pan interactions.
 *
 * Tracks zoom level and pan offset, providing event handlers for mouse wheel
 * zoom (cursor-centered), pointer drag pan, and touch pinch-to-zoom. The
 * viewBox string is derived from the current zoom and pan state, giving
 * infinite-resolution SVG zoom with crisp rendering at any magnification.
 */

import { useCallback, useRef, useState } from "react";

/* ── Constants ── */
const MIN_ZOOM = 1;
const MAX_ZOOM = 50;
/** Multiplicative zoom step per wheel tick */
const WHEEL_ZOOM_STEP = 1.15;
/** Keep at least this fraction of the diagram visible when panning */
const PAN_VISIBLE_FRACTION = 0.25;

export interface ViewBoxState {
  /** ViewBox x origin (SVG units) */
  vbX: number;
  /** ViewBox y origin (SVG units) */
  vbY: number;
  /** ViewBox width (SVG units) */
  vbW: number;
  /** ViewBox height (SVG units) */
  vbH: number;
  /** Current zoom multiplier (1 = default) */
  zoom: number;
}

export interface ViewBoxZoomResult {
  /** Current viewBox state */
  state: ViewBoxState;
  /** Formatted viewBox string for SVG */
  viewBox: string;
  /** Whether a drag pan is in progress */
  isPanning: boolean;
  /** Reset to default 1x zoom, centered */
  reset: () => void;
  /** Mouse wheel handler — zoom centered on cursor */
  handleWheel: (e: React.WheelEvent<SVGSVGElement>) => void;
  /** Pointer down — begin drag pan */
  handlePointerDown: (e: React.PointerEvent<SVGSVGElement>) => void;
  /** Pointer move — continue drag pan */
  handlePointerMove: (e: React.PointerEvent<SVGSVGElement>) => void;
  /** Pointer up/cancel — end drag pan */
  handlePointerUp: (e: React.PointerEvent<SVGSVGElement>) => void;
  /** Touch start — begin pinch-to-zoom or touch pan */
  handleTouchStart: (e: React.TouchEvent<SVGSVGElement>) => void;
  /** Touch move — pinch-to-zoom or touch pan */
  handleTouchMove: (e: React.TouchEvent<SVGSVGElement>) => void;
  /** Touch end — end touch interaction */
  handleTouchEnd: (e: React.TouchEvent<SVGSVGElement>) => void;
  /** Zoom in by one step, centered on viewport middle */
  zoomIn: () => void;
  /** Zoom out by one step, centered on viewport middle */
  zoomOut: () => void;
  /** Pan by a delta in SVG units */
  panBy: (dx: number, dy: number) => void;
}

/** Clamp pan so at least PAN_VISIBLE_FRACTION of the diagram remains in view */
function clampPan(vbX: number, vbY: number, vbW: number, vbH: number, svgW: number, svgH: number) {
  const minVisible = PAN_VISIBLE_FRACTION;
  const minX = -(vbW * (1 - minVisible));
  const maxX = svgW - vbW * minVisible;
  const minY = -(vbH * (1 - minVisible));
  const maxY = svgH - vbH * minVisible;
  return {
    vbX: Math.max(minX, Math.min(maxX, vbX)),
    vbY: Math.max(minY, Math.min(maxY, vbY)),
  };
}

function defaultState(svgW: number, svgH: number): ViewBoxState {
  return { vbX: 0, vbY: 0, vbW: svgW, vbH: svgH, zoom: 1 };
}

export default function useViewBoxZoom(svgW: number, svgH: number, active: boolean): ViewBoxZoomResult {
  const [state, setState] = useState<ViewBoxState>(() => defaultState(svgW, svgH));
  const [isPanning, setIsPanning] = useState(false);

  /* Refs for drag tracking */
  const dragStart = useRef<{ x: number; y: number; vbX: number; vbY: number } | null>(null);

  /* Refs for pinch tracking */
  const pinchStart = useRef<{ dist: number; zoom: number; midX: number; midY: number } | null>(null);

  const reset = useCallback(() => {
    setState(defaultState(svgW, svgH));
    setIsPanning(false);
    dragStart.current = null;
    pinchStart.current = null;
  }, [svgW, svgH]);

  /** Convert client coords to SVG viewBox coords using the SVG element's bounding rect */
  const clientToSvg = useCallback((clientX: number, clientY: number, svgEl: SVGSVGElement, vb: ViewBoxState) => {
    const rect = svgEl.getBoundingClientRect();
    const fracX = (clientX - rect.left) / rect.width;
    const fracY = (clientY - rect.top) / rect.height;
    return {
      svgX: vb.vbX + fracX * vb.vbW,
      svgY: vb.vbY + fracY * vb.vbH,
    };
  }, []);

  const handleWheel = useCallback(
    (e: React.WheelEvent<SVGSVGElement>) => {
      if (!active) return;
      e.preventDefault();

      const svgEl = e.currentTarget;

      setState((prev) => {
        const direction = e.deltaY < 0 ? 1 : -1;
        const factor = direction > 0 ? WHEEL_ZOOM_STEP : 1 / WHEEL_ZOOM_STEP;
        const newZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, prev.zoom * factor));

        /* Zoom centered on cursor position */
        const { svgX, svgY } = clientToSvg(e.clientX, e.clientY, svgEl, prev);

        const newVbW = svgW / newZoom;
        const newVbH = svgH / newZoom;

        /* Keep the point under cursor at the same screen position */
        const fracX = (svgX - prev.vbX) / prev.vbW;
        const fracY = (svgY - prev.vbY) / prev.vbH;
        const rawVbX = svgX - fracX * newVbW;
        const rawVbY = svgY - fracY * newVbH;

        const clamped = clampPan(rawVbX, rawVbY, newVbW, newVbH, svgW, svgH);
        return { vbX: clamped.vbX, vbY: clamped.vbY, vbW: newVbW, vbH: newVbH, zoom: newZoom };
      });
    },
    [active, svgW, svgH, clientToSvg],
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<SVGSVGElement>) => {
      if (!active || e.button !== 0) return;
      e.currentTarget.setPointerCapture(e.pointerId);
      setIsPanning(true);
      setState((prev) => {
        dragStart.current = { x: e.clientX, y: e.clientY, vbX: prev.vbX, vbY: prev.vbY };
        return prev;
      });
    },
    [active],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<SVGSVGElement>) => {
      if (!active || !dragStart.current) return;

      const svgEl = e.currentTarget;
      const rect = svgEl.getBoundingClientRect();

      setState((prev) => {
        const ds = dragStart.current!;
        /* Convert pixel delta to SVG coordinate delta */
        const dxPx = e.clientX - ds.x;
        const dyPx = e.clientY - ds.y;
        const dxSvg = (dxPx / rect.width) * prev.vbW;
        const dySvg = (dyPx / rect.height) * prev.vbH;

        const rawVbX = ds.vbX - dxSvg;
        const rawVbY = ds.vbY - dySvg;
        const clamped = clampPan(rawVbX, rawVbY, prev.vbW, prev.vbH, svgW, svgH);
        return { ...prev, vbX: clamped.vbX, vbY: clamped.vbY };
      });
    },
    [active, svgW, svgH],
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent<SVGSVGElement>) => {
      if (!active) return;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        /* pointer capture may already be released */
      }
      dragStart.current = null;
      setIsPanning(false);
    },
    [active],
  );

  /* ── Touch handlers (pinch-to-zoom) ── */

  const touchDist = (t1: React.Touch, t2: React.Touch) => Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent<SVGSVGElement>) => {
      if (!active) return;
      if (e.touches.length === 2) {
        const dist = touchDist(e.touches[0], e.touches[1]);
        pinchStart.current = {
          dist,
          zoom: state.zoom,
          midX: (e.touches[0].clientX + e.touches[1].clientX) / 2,
          midY: (e.touches[0].clientY + e.touches[1].clientY) / 2,
        };
      } else if (e.touches.length === 1) {
        setIsPanning(true);
        setState((prev) => {
          dragStart.current = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY,
            vbX: prev.vbX,
            vbY: prev.vbY,
          };
          return prev;
        });
      }
    },
    [active, state.zoom],
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<SVGSVGElement>) => {
      if (!active) return;
      e.preventDefault();

      if (e.touches.length === 2 && pinchStart.current) {
        const dist = touchDist(e.touches[0], e.touches[1]);
        const scale = dist / pinchStart.current.dist;
        const newZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, pinchStart.current.zoom * scale));

        const svgEl = e.currentTarget;
        const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2;

        setState((prev) => {
          const { svgX, svgY } = clientToSvg(midX, midY, svgEl, prev);
          const newVbW = svgW / newZoom;
          const newVbH = svgH / newZoom;
          const fracX = (svgX - prev.vbX) / prev.vbW;
          const fracY = (svgY - prev.vbY) / prev.vbH;
          const rawVbX = svgX - fracX * newVbW;
          const rawVbY = svgY - fracY * newVbH;
          const clamped = clampPan(rawVbX, rawVbY, newVbW, newVbH, svgW, svgH);
          return { vbX: clamped.vbX, vbY: clamped.vbY, vbW: newVbW, vbH: newVbH, zoom: newZoom };
        });
      } else if (e.touches.length === 1 && dragStart.current) {
        const svgEl = e.currentTarget;
        const rect = svgEl.getBoundingClientRect();

        setState((prev) => {
          const ds = dragStart.current!;
          const dxPx = e.touches[0].clientX - ds.x;
          const dyPx = e.touches[0].clientY - ds.y;
          const dxSvg = (dxPx / rect.width) * prev.vbW;
          const dySvg = (dyPx / rect.height) * prev.vbH;
          const rawVbX = ds.vbX - dxSvg;
          const rawVbY = ds.vbY - dySvg;
          const clamped = clampPan(rawVbX, rawVbY, prev.vbW, prev.vbH, svgW, svgH);
          return { ...prev, vbX: clamped.vbX, vbY: clamped.vbY };
        });
      }
    },
    [active, svgW, svgH, clientToSvg],
  );

  const handleTouchEnd = useCallback(
    (_e: React.TouchEvent<SVGSVGElement>) => {
      if (!active) return;
      pinchStart.current = null;
      dragStart.current = null;
      setIsPanning(false);
    },
    [active],
  );

  /* ── Programmatic zoom/pan (for keyboard + buttons) ── */

  const zoomIn = useCallback(() => {
    setState((prev) => {
      const newZoom = Math.min(MAX_ZOOM, prev.zoom * WHEEL_ZOOM_STEP);
      const newVbW = svgW / newZoom;
      const newVbH = svgH / newZoom;
      /* Zoom toward center of current view */
      const cx = prev.vbX + prev.vbW / 2;
      const cy = prev.vbY + prev.vbH / 2;
      const rawVbX = cx - newVbW / 2;
      const rawVbY = cy - newVbH / 2;
      const clamped = clampPan(rawVbX, rawVbY, newVbW, newVbH, svgW, svgH);
      return { vbX: clamped.vbX, vbY: clamped.vbY, vbW: newVbW, vbH: newVbH, zoom: newZoom };
    });
  }, [svgW, svgH]);

  const zoomOut = useCallback(() => {
    setState((prev) => {
      const newZoom = Math.max(MIN_ZOOM, prev.zoom / WHEEL_ZOOM_STEP);
      const newVbW = svgW / newZoom;
      const newVbH = svgH / newZoom;
      const cx = prev.vbX + prev.vbW / 2;
      const cy = prev.vbY + prev.vbH / 2;
      const rawVbX = cx - newVbW / 2;
      const rawVbY = cy - newVbH / 2;
      const clamped = clampPan(rawVbX, rawVbY, newVbW, newVbH, svgW, svgH);
      return { vbX: clamped.vbX, vbY: clamped.vbY, vbW: newVbW, vbH: newVbH, zoom: newZoom };
    });
  }, [svgW, svgH]);

  const panBy = useCallback(
    (dx: number, dy: number) => {
      setState((prev) => {
        const clamped = clampPan(prev.vbX + dx, prev.vbY + dy, prev.vbW, prev.vbH, svgW, svgH);
        return { ...prev, vbX: clamped.vbX, vbY: clamped.vbY };
      });
    },
    [svgW, svgH],
  );

  const viewBox = `${state.vbX} ${state.vbY} ${state.vbW} ${state.vbH}`;

  return {
    state,
    viewBox,
    isPanning,
    reset,
    handleWheel,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    zoomIn,
    zoomOut,
    panBy,
  };
}
