/**
 * Bounding-box accumulation and deterministic viewBox computation (package Section 9.1).
 *
 * 1 SVG user unit = 1 mm, with no per-mount rescaling, so real size differences between mounts stay
 * visible. Each view's viewBox is the feature bounding box (in mm) expanded by a margin of
 * 0.1·max(width, height) and rounded outward to whole millimetres, which keeps the viewBox integer
 * and stable across regenerations.
 */

export interface BBox {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}

export const MOUNT_MARGIN_FRACTION = 0.1;

/** An empty bounding box that absorbs the first point/box merged into it. */
export function emptyBBox(): BBox {
  return { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };
}

/** Expand a bbox in place to include a point. */
export function includePoint(box: BBox, x: number, y: number): void {
  if (x < box.minX) box.minX = x;
  if (y < box.minY) box.minY = y;
  if (x > box.maxX) box.maxX = x;
  if (y > box.maxY) box.maxY = y;
}

/** Expand a bbox in place to include a circle (center ± radius). */
export function includeCircle(box: BBox, cx: number, cy: number, radiusMm: number): void {
  includePoint(box, cx - radiusMm, cy - radiusMm);
  includePoint(box, cx + radiusMm, cy + radiusMm);
}

/** True when the box never absorbed any geometry. */
export function isEmptyBBox(box: BBox): boolean {
  return !isFinite(box.minX) || !isFinite(box.minY) || !isFinite(box.maxX) || !isFinite(box.maxY);
}

/**
 * Compute an SVG viewBox string from a bounding box, with the fixed margin and outward rounding.
 *
 * @param box — accumulated feature bounds in mm
 * @returns "minX minY width height" with integer components, or "unknown" for an empty box
 */
export function computeViewBox(box: BBox): string {
  if (isEmptyBBox(box)) return "unknown";
  const width = box.maxX - box.minX;
  const height = box.maxY - box.minY;
  const margin = MOUNT_MARGIN_FRACTION * Math.max(width, height);
  const minX = Math.floor(box.minX - margin);
  const minY = Math.floor(box.minY - margin);
  const maxX = Math.ceil(box.maxX + margin);
  const maxY = Math.ceil(box.maxY + margin);
  return `${minX} ${minY} ${maxX - minX} ${maxY - minY}`;
}
