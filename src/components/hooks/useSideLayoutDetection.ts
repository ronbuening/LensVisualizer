/**
 * useSideLayoutDetection — Detects when a panel is wide enough to place
 * controls beside the diagram, with width hysteresis.
 *
 * Uses ResizeObserver to monitor the panel container. The decision is based
 * only on width so focus/zoom changes cannot cause vertical reflow loops, and
 * it survives the container unmounting and returning.
 */
import { useState, useLayoutEffect, useRef } from "react";
import type { RefObject } from "react";

interface UseSideLayoutDetectionParams {
  enabled: boolean;
  containerRef: RefObject<HTMLDivElement>;
  /** Dependencies that may change available control/layout affordances. */
  deps: unknown[];
}

const SIDE_LAYOUT_ENTER_WIDTH = 860;
const SIDE_LAYOUT_EXIT_WIDTH = 760;

export default function useSideLayoutDetection({ enabled, containerRef, deps }: UseSideLayoutDetectionParams): boolean {
  const [useSideLayout, setUseSideLayout] = useState(false);
  const sideLayoutRef = useRef(false);
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    sideLayoutRef.current = useSideLayout;
  }, [useSideLayout]);

  // The panel unmounts its container while it shows an error state. Track the element itself so
  // detection re-attaches when the content returns, even if no dependency changed meanwhile.
  // Runs after every commit on purpose: a ref change is not observable, and setting the same element is a no-op.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(() => {
    setContainer(containerRef.current);
  });

  useLayoutEffect(() => {
    if (!enabled) {
      setUseSideLayout(false);
      return;
    }
    // Keep the last decision while the container is absent; nothing is laid out until it returns.
    if (!container) return;
    const el = container;
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
  }, [enabled, container, ...deps]);

  return useSideLayout;
}
