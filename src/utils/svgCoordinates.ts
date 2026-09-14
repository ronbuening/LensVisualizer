export interface SvgBounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

function inverseScreenMatrix(svg: SVGSVGElement) {
  try {
    return svg.getScreenCTM?.()?.inverse() ?? null;
  } catch {
    // A detached, hidden, or singularly transformed SVG cannot receive a camera target.
    return null;
  }
}

/** Account for preserveAspectRatio letterboxing and any ancestor transforms. */
export function clientPointToSvg(svg: SVGSVGElement, clientX: number, clientY: number) {
  const matrix = inverseScreenMatrix(svg);
  if (!matrix) return null;
  const x = matrix.a * clientX + matrix.c * clientY + matrix.e;
  const y = matrix.b * clientX + matrix.d * clientY + matrix.f;
  return Number.isFinite(x) && Number.isFinite(y) ? { x, y } : null;
}

/** The visible SVG area can extend beyond its viewBox when its aspect ratio differs. */
export function visibleSvgBounds(svg: SVGSVGElement): SvgBounds | null {
  const matrix = inverseScreenMatrix(svg);
  const rect = svg.getBoundingClientRect();
  if (!matrix || rect.width <= 0 || rect.height <= 0) return null;
  const corners = [
    [rect.left, rect.top],
    [rect.left + rect.width, rect.top],
    [rect.left, rect.top + rect.height],
    [rect.left + rect.width, rect.top + rect.height],
  ];
  const xs = corners.map(([x, y]) => matrix.a * x + matrix.c * y + matrix.e);
  const ys = corners.map(([x, y]) => matrix.b * x + matrix.d * y + matrix.f);
  if (![...xs, ...ys].every(Number.isFinite)) return null;
  const x = Math.min(...xs);
  const y = Math.min(...ys);
  return { x, y, width: Math.max(...xs) - x, height: Math.max(...ys) - y };
}
