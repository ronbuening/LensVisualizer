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
}

interface UseHeaderHeightResult {
  headerRef: RefObject<HTMLDivElement | null>;
  headerHeight: number;
}

export default function useHeaderHeight({
  panelId,
  lensKey,
  onHeaderHeight,
}: UseHeaderHeightParams): UseHeaderHeightResult {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState(80);

  useLayoutEffect(() => {
    if (!headerRef.current) return;
    const el = headerRef.current;
    const report = () => {
      const h = el.scrollHeight;
      setHeaderHeight(h);
      onHeaderHeight?.(panelId, h);
    };
    report();
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(report);
    ro.observe(el);
    return () => ro.disconnect();
  }, [onHeaderHeight, panelId, lensKey]);

  return { headerRef, headerHeight };
}
