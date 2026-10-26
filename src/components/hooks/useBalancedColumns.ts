/**
 * useBalancedColumns — Chooses a column count for a wrapping row of equal items so that
 * every row holds as nearly the same number of items as the measured width allows.
 *
 * Eight buttons that fit five to a row become 4 + 4 rather than 5 + 3; seven cards that fit
 * seven to a row stay on one row. Pair it with `balancedRowStyle` / `balancedItemStyle`:
 * items share one width and a short last row is centered.
 */

import { useLayoutEffect, useRef, useState, type CSSProperties, type RefObject } from "react";

/** Column count for `count` items of at least `minItemWidth` px in `width` px with `gap` px gutters. */
export function balancedColumns(count: number, width: number, minItemWidth: number, gap: number): number {
  if (count <= 1) return Math.max(count, 1);
  const fit = Math.max(1, Math.floor((width + gap) / (minItemWidth + gap)));
  const rows = Math.ceil(count / Math.min(fit, count));
  return Math.ceil(count / rows);
}

export type WidthClass = "phone" | "tablet" | "desktop";

/** Container-width classes for pages laid out in the site's 912 px content column. */
export function widthClass(width: number): WidthClass {
  return width < 560 ? "phone" : width < 860 ? "tablet" : "desktop";
}

export function balancedRowStyle(gap: number): CSSProperties {
  return { display: "flex", flexWrap: "wrap", justifyContent: "center", gap };
}

export function balancedItemStyle(columns: number, gap: number): CSSProperties {
  const basis = `calc((100% - ${(columns - 1) * gap}px) / ${columns})`;
  return { flex: `0 0 ${basis}`, maxWidth: basis, minWidth: 0, boxSizing: "border-box" };
}

/**
 * `initialWidth` is used for the server render and first client render (the page's desktop
 * content width), so prerendered markup matches hydration before the container is measured.
 */
export default function useBalancedColumns(
  count: number,
  minItemWidth: number,
  gap: number,
  initialWidth = 912,
): { ref: RefObject<HTMLDivElement>; columns: number; width: number } {
  const ref = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;
  const [width, setWidth] = useState(initialWidth);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setWidth(el.clientWidth || initialWidth);
    measure();
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [initialWidth]);

  return { ref, columns: balancedColumns(count, width, minItemWidth, gap), width };
}
