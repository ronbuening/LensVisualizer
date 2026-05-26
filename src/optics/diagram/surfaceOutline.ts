import type { CompiledStateSurface, PreparedOpticalState } from "../types.js";

export const SVG_PATH_SUBDIVISIONS_2 = 96;

export type DiagramPointTransform2 = (z: number, y: number) => [number, number];

export function surfaceSag2(surface: CompiledStateSurface, height: number): number {
  return surface.profile.sag(Math.abs(height));
}

export function renderedSurfaceZ2(surface: CompiledStateSurface, y: number): number {
  return surface.profile.pointAt(surface.z, 0, y)[2];
}

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
