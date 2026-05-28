/**
 * Diagram surface outlines — SVG path generation for spherical, aspheric, flat, and tilted surfaces.
 *
 * Samples optical sag in millimetres and delegates coordinate mapping to diagram transforms so SVG rendering
 * stays separate from trace geometry.
 */

import type { CompiledStateSurface, PreparedOpticalState } from "../types.js";

/** Number of straight SVG segments used per rendered surface curve. */
export const SVG_PATH_SUBDIVISIONS_2 = 96;

/**
 * Optional optical-space transform applied before SVG scaling.
 *
 * @param z - optical z coordinate in mm
 * @param y - optical height in mm
 * @returns transformed optical z/y pair in mm
 */
export type DiagramPointTransform2 = (z: number, y: number) => [number, number];

/**
 * Evaluate display sag magnitude for a prepared surface.
 *
 * @param surface - current prepared surface
 * @param height - signed meridional height in mm
 * @returns sag in mm relative to the surface vertex
 */
export function surfaceSag2(surface: CompiledStateSurface, height: number): number {
  return surface.profile.sag(Math.abs(height));
}

/**
 * Compute the rendered z coordinate of a point on a surface.
 *
 * Tilted mirror planes and image-plane-like profiles can change z/y together, so
 * callers must ask the profile for a point instead of adding sag to `surface.z`.
 *
 * @param surface - current prepared surface
 * @param y - signed meridional height in mm
 * @returns optical z coordinate in mm
 */
export function renderedSurfaceZ2(surface: CompiledStateSurface, y: number): number {
  return surface.profile.pointAt(surface.z, 0, y)[2];
}

/**
 * Build an SVG path for one visible surface curve.
 *
 * Samples signed y from `-trim` to `+trim` in optical millimeters, optionally
 * applies a display transform, then converts the result through `sx`/`sy`.
 *
 * @param state - prepared optical state
 * @param surfaceIndex - physical surface index to render
 * @param trim - display semi-diameter in mm
 * @param sx - optical z-mm to SVG x-coordinate mapper
 * @param sy - optical y-mm to SVG y-coordinate mapper
 * @param pointTransform - optional optical-space display transform
 * @returns SVG path `d` string, or an empty string for invalid surface indices
 */
export function surfacePathD2(
  state: PreparedOpticalState,
  surfaceIndex: number,
  trim: number,
  sx: (z: number) => number,
  sy: (y: number) => number,
  pointTransform?: DiagramPointTransform2,
): string {
  const surface = state.surfaces[surfaceIndex];
  if (!surface) return "";

  const pathPoint = (z: number, y: number): string => {
    const [zz, yy] = pointTransform ? pointTransform(z, y) : [z, y];
    return `${sx(zz)},${sy(yy)}`;
  };

  let path = "";
  for (let i = 0; i <= SVG_PATH_SUBDIVISIONS_2; i++) {
    const y = -trim + (2 * trim * i) / SVG_PATH_SUBDIVISIONS_2;
    path += `${i ? "L" : "M"}${pathPoint(renderedSurfaceZ2(surface, y), y)} `;
  }
  return path;
}
