/**
 * useSideLayoutDetection — Detects when the panel content overflows the
 * viewport and switches to side-by-side layout with hysteresis.
 *
 * Uses ResizeObserver to monitor the panel container. Switches to side
 * layout when content overflows by >10px, switches back when there's
 * >200px of spare room.
 */
import { useState, useLayoutEffect, useRef } from "react";
import type { RefObject } from "react";

interface UseSideLayoutDetectionParams {
  enabled: boolean;
  containerRef: RefObject<HTMLDivElement | null>;
  /** Dependencies that may change the content height */
  deps: unknown[];
}

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
      const available = window.innerHeight - rect.top;
      if (!sideLayoutRef.current) {
        if (el.scrollHeight > available + 10) setUseSideLayout(true);
      } else {
        if (available > el.scrollHeight + 200) setUseSideLayout(false);
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
