/**
 * Shared ray-segment compilation utilities used by the on-axis, off-axis,
 * and chromatic ray-tracing hooks.
 *
 * Pure functions — no React dependencies.
 */

import type { RaySegment } from "./useOnAxisRays.js";
import type { ChromaticChannel } from "../../types/optics.js";

/**
 * Compile traced ray points into a RaySegment with solid (sp) and ghost (gp) polylines.
 *
 * @param pts           — traced surface intersection points [[z, y], ...]
 * @param ghostPts      — extrapolated points beyond the clipping surface
 * @param u             — exit slope of the ray
 * @param clipped       — true if the ray was clipped by the aperture stop
 * @param sx            — z → SVG-x coordinate transform
 * @param sy            — y → SVG-y coordinate transform
 * @param clampedRayEnd — projects a ray to a target z, clamped to viewport
 * @param IMG_MM        — image plane z-position (mm)
 * @param endOverride   — if provided, used instead of clampedRayEnd for the final point
 *                        (e.g. edge-projection endpoint in off-axis mode)
 */
export function compileRaySegment(
  pts: number[][],
  ghostPts: number[][],
  u: number,
  clipped: boolean,
  sx: (z: number) => number,
  sy: (y: number) => number,
  clampedRayEnd: (lastZ: number, lastY: number, u: number, targetZ: number) => [number, number],
  IMG_MM: number,
  endOverride?: number[],
): RaySegment {
  const sp: number[][] = pts.map(([z, yy]) => [sx(z), sy(yy)]);
  let gp: number[][] = [];

  if (clipped && ghostPts.length > 0) {
    const lastSolid = pts[pts.length - 1];
    if (lastSolid) gp.push([sx(lastSolid[0]), sy(lastSolid[1])]);
    gp = gp.concat(ghostPts.map(([z, yy]) => [sx(z), sy(yy)]));
    const lastGhost = ghostPts[ghostPts.length - 1];
    if (lastGhost) {
      gp.push(endOverride ?? clampedRayEnd(lastGhost[0], lastGhost[1], u, IMG_MM));
    }
  }
  if (!clipped) {
    const last = pts[pts.length - 1];
    if (last) {
      sp.push(endOverride ?? clampedRayEnd(last[0], last[1], u, IMG_MM));
    }
  }

  return { sp, gp };
}

/**
 * Build an array of active chromatic channels from individual toggle flags.
 */
export function filterChannels(chromR: boolean, chromG: boolean, chromB: boolean, chromV: boolean): ChromaticChannel[] {
  const channels: ChromaticChannel[] = [];
  if (chromR) channels.push("R");
  if (chromG) channels.push("G");
  if (chromB) channels.push("B");
  if (chromV) channels.push("V");
  return channels;
}
