/**
 * Rim cut — a flat land square to the axis that trims the long rim "finger" of a deeply curved surface.
 *
 * A surface whose rim bends into the air beside it carries glass past its vertex plane there. `rimCutDepthMm` cuts
 * that glass at a plane `depth` mm from the vertex: the cap stops at the radius where its sag reaches the plane, and
 * a flat, opaque land runs from there out to `sd`. Tracing clips a ray beyond the cut radius, as it does at a rim;
 * drawing follows the land. Validation, compilation and drawing share these helpers so the three agree.
 */

import type { Vec3 } from "../types.js";

/** A resolved rim cut on one surface, in mm. */
export interface RimCut {
  /** Authored depth of the land from the vertex: positive. */
  depthMm: number;
  /** Signed axial offset of the land from the vertex: the depth with the sign of the cap's sag at the rim. */
  sag: number;
  /** Radius where the cap meets the land: the surface's clear radius for tracing. */
  radius: number;
}

const SCAN_STEPS = 256;
const BISECTIONS = 60;

/**
 * Resolve a cut depth against a cap: the signed land offset and the first radius at which the cap's sag reaches it.
 *
 * @param sag - signed sag of the surface at a radius, in mm
 * @param sd - clear semi-diameter in mm
 * @param depthMm - authored cut depth in mm
 * @returns the cut, or null when the depth is not positive or the cap does not reach it inside `sd`
 */
export function resolveRimCut(sag: (radius: number) => number, sd: number, depthMm: number): RimCut | null {
  if (!(depthMm > 0) || !(sd > 0)) return null;
  const rimSag = sag(sd);
  if (!(Math.abs(rimSag) > depthMm)) return null;
  const sign = Math.sign(rimSag);
  const reaches = (radius: number) => sign * sag(radius) >= depthMm;
  let inside = 0;
  let outside = sd;
  for (let step = 1; step <= SCAN_STEPS; step++) {
    const radius = (sd * step) / SCAN_STEPS;
    if (reaches(radius)) {
      outside = radius;
      break;
    }
    inside = radius;
  }
  for (let i = 0; i < BISECTIONS; i++) {
    const middle = (inside + outside) / 2;
    if (reaches(middle)) outside = middle;
    else inside = middle;
  }
  return { depthMm, sag: sign * depthMm, radius: outside };
}

/**
 * Radius a surface passes rays to: its `sd`, or the cut radius where a rim cut ends the cap inside it.
 *
 * @param sd - clear semi-diameter in mm
 * @param cut - resolved cut, or null for an uncut surface
 * @returns clear radius in mm
 */
export function clearSemiDiameter(sd: number, cut: RimCut | null): number {
  return cut ? Math.min(sd, cut.radius) : sd;
}

/**
 * Sag of the cut outline: the cap inside the cut radius, the land beyond it.
 *
 * @param sag - signed sag of the uncut surface, in mm
 * @param cut - resolved cut, or null for an uncut surface
 * @param radius - radial coordinate in mm
 * @returns signed sag in mm
 */
export function cutOutlineSag(sag: (radius: number) => number, cut: RimCut | null, radius: number): number {
  return cut && Math.abs(radius) > cut.radius ? cut.sag : sag(radius);
}

/**
 * Check that the cap stays at or beyond the land from the cut radius out to `sd`, so the land is the whole
 * boundary there. An asphere that turns back toward its vertex plane inside `sd` would leave air between the two.
 *
 * @param sag - signed sag of the uncut surface, in mm
 * @param sd - clear semi-diameter in mm
 * @param cut - resolved cut
 * @returns the first radius where the cap comes back inside the land, or null when it never does
 */
export function rimCutReentryRadius(sag: (radius: number) => number, sd: number, cut: RimCut): number | null {
  const sign = Math.sign(cut.sag);
  for (let step = 0; step <= SCAN_STEPS; step++) {
    const radius = cut.radius + ((sd - cut.radius) * step) / SCAN_STEPS;
    if (sign * sag(radius) < cut.depthMm * (1 - 1e-9)) return radius;
  }
  return null;
}

/**
 * Where a ray that a rim cut clips meets the land, for drawing.
 *
 * The tracer clips such a ray at its hit on the uncut cap beyond the cut radius, inside glass the cut removed; the
 * ray itself stops on the land. A hit outside `sd`, or one the cut did not clip, has no land point.
 *
 * @param surface - compiled surface with its profile and cut
 * @param hit - clipped surface hit with the direction it arrived along
 * @returns the land point in mm, or null
 */
export function rimCutLandPoint(
  surface: { profile: { sag(radius: number): number }; rimCut: RimCut | null; sd: number },
  hit: { point: Vec3; radius: number; incidentDirection?: Vec3 },
): Vec3 | null {
  const cut = surface.rimCut;
  const direction = hit.incidentDirection;
  if (!cut || !direction || hit.radius <= cut.radius || hit.radius > surface.sd) return null;
  if (Math.abs(direction[2]) < 1e-12) return null;
  const t = (cut.sag - surface.profile.sag(hit.radius)) / direction[2];
  return [hit.point[0] + t * direction[0], hit.point[1] + t * direction[1], hit.point[2] + t * direction[2]];
}
