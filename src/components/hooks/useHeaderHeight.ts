/**
 * useHeaderHeight — Tracks header element height via ResizeObserver
 * and reports it to a parent callback for multi-panel alignment.
 *
 * Returns a ref to attach to the header element and the current
 * measured height (avoids stale ref reads in render).
 */

import { useRef, useState, useLayoutEffect } from "react";
import type { RefObject } from "react";

interface UseHeaderHeightParams {
  panelId: string;
  lensKey: string;
  onHeaderHeight?: (panelId: string, height: number) => void;
  enabled?: boolean;
}

interface UseHeaderHeightResult {
  headerRef: RefObject<HTMLDivElement>;
  headerHeight: number;
}

export default function useHeaderHeight({
  panelId,
  lensKey,
  onHeaderHeight,
  enabled = true,
}: UseHeaderHeightParams): UseHeaderHeightResult {
  const headerRef = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;
  const [headerHeight, setHeaderHeight] = useState(80);

  useLayoutEffect(() => {
    if (!enabled || !headerRef.current) return;
    const el = headerRef.current;
    const report = () => {
      // Measure the natural inner header, not the comparison alignment spacer.
      const h = Math.ceil(el.getBoundingClientRect().height);
      setHeaderHeight(h);
      onHeaderHeight?.(panelId, h);
    };
    report();
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(report);
    ro.observe(el);
    return () => ro.disconnect();
  }, [onHeaderHeight, panelId, lensKey, enabled]);

  return { headerRef, headerHeight };
}
