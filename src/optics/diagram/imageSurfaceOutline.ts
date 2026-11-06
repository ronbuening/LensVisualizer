/**
 * Image-surface outline — the drawn (y–z) section of a curved image surface about its placed vertex.
 */

import type { ImageSurfaceShape } from "../types.js";

/** Segments across the drawn section; the surface is smooth, so a fixed count is enough at every scale. */
const IMAGE_SURFACE_SEGMENTS = 64;

/** Placement of an image surface in the meridional section: vertex and unit normal, as on `ResolvedImagePlane`. */
export interface ImageSurfacePlacement {
  z: number;
  y: number;
  normal: { z: number; y: number };
}

/**
 * Optical-space point of the surface's drawn section at a signed height along the plane tangent.
 *
 * The tangent is n̂ × x̂ in the meridional section, the local y axis of `imageSurfaceLocalFrame`.
 *
 * @param shape - curved image surface
 * @param placement - vertex and normal in the meridional section
 * @param height - signed height along the plane tangent in mm
 * @returns [z, y] in mm, or null where the surface is not single-valued
 */
export function imageSurfacePoint(
  shape: ImageSurfaceShape,
  placement: ImageSurfacePlacement,
  height: number,
): [number, number] | null {
  const sag = shape.sagAt(0, height);
  if (!Number.isFinite(sag)) return null;
  const { normal } = placement;
  return [placement.z - normal.y * height + normal.z * sag, placement.y + normal.z * height + normal.y * sag];
}

/**
 * SVG path of the surface's drawn section over ±`halfHeight`; a cylinder seen along its straight direction is a line.
 *
 * @param shape - curved image surface
 * @param placement - vertex and normal in the meridional section
 * @param halfHeight - drawn half-height in mm
 * @param sx - optical z to SVG x
 * @param sy - optical y to SVG y
 * @returns path data, empty when no point is drawable
 */
export function imageSurfacePathD(
  shape: ImageSurfaceShape,
  placement: ImageSurfacePlacement,
  halfHeight: number,
  sx: (z: number) => number,
  sy: (y: number) => number,
): string {
  const commands: string[] = [];
  for (let i = 0; i <= IMAGE_SURFACE_SEGMENTS; i++) {
    const point = imageSurfacePoint(shape, placement, -halfHeight + (2 * halfHeight * i) / IMAGE_SURFACE_SEGMENTS);
    if (point === null) continue;
    commands.push(`${commands.length === 0 ? "M" : "L"}${sx(point[0]).toFixed(2)},${sy(point[1]).toFixed(2)}`);
  }
  return commands.join(" ");
}
