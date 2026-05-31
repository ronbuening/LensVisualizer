/**
 * useSideLayoutDetection — Detects when a panel is wide enough to place
 * controls beside the diagram, with width hysteresis.
 *
 * Uses ResizeObserver to monitor the panel container. The decision is based
 * only on width so focus/zoom changes cannot cause vertical reflow loops.
 */
import { useState, useLayoutEffect, useRef } from "react";
import type { RefObject } from "react";

interface UseSideLayoutDetectionParams {
  enabled: boolean;
  containerRef: RefObject<HTMLDivElement | null>;
  /** Dependencies that may change available control/layout affordances. */
  deps: unknown[];
}

const SIDE_LAYOUT_ENTER_WIDTH = 860;
const SIDE_LAYOUT_EXIT_WIDTH = 760;

export default function useSideLayoutDetection({ enabled, containerRef, deps }: UseSideLayoutDetectionParams): boolean {
  const [useSideLayout, setUseSideLayout] = useState(false);
  const sideLayoutRef = useRef(false);

  useLayoutEffect(() => {
    sideLayoutRef.current = useSideLayout;
  }, [useSideLayout]);

  useLayoutEffect(() => {
    if (!enabled || !containerRef.current) {
      setUseSideLayout(false);
      return;
    }
    const el = containerRef.current;
    const check = () => {
      const rect = el.getBoundingClientRect();
      if (!sideLayoutRef.current) {
        if (rect.width >= SIDE_LAYOUT_ENTER_WIDTH) setUseSideLayout(true);
      } else {
        if (rect.width <= SIDE_LAYOUT_EXIT_WIDTH) setUseSideLayout(false);
      }
    };
    check();
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(check);
    ro.observe(el);
    window.addEventListener("resize", check);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", check);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, ...deps]);

  return useSideLayout;
}
