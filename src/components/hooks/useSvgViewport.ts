import { useCallback, useEffect, useLayoutEffect, useState, type RefObject } from "react";
import { visibleSvgBounds, type SvgBounds } from "../../utils/svgCoordinates.js";

/** Measure the rendered viewport without recomputing its diagram layout. */
export default function useSvgViewport(svgRef: RefObject<SVGSVGElement | null>, viewBox: string) {
  const [viewport, setViewport] = useState<{ width: number; height: number; bounds: SvgBounds | null }>({
    width: 0,
    height: 0,
    bounds: null,
  });
  const measure = useCallback(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const { width, height } = svg.getBoundingClientRect();
    const bounds = visibleSvgBounds(svg);
    setViewport((previous) =>
      previous.width === width &&
      previous.height === height &&
      previous.bounds?.x === bounds?.x &&
      previous.bounds?.y === bounds?.y &&
      previous.bounds?.width === bounds?.width &&
      previous.bounds?.height === bounds?.height
        ? previous
        : { width, height, bounds },
    );
  }, [svgRef]);

  useLayoutEffect(measure, [measure, viewBox]);
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const observer = typeof ResizeObserver === "undefined" ? undefined : new ResizeObserver(measure);
    observer?.observe(svg);
    window.addEventListener("resize", measure);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure, svgRef]);
  return viewport;
}
