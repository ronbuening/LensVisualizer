/**
 * Rim lands — flat, opaque boundaries square to the axis, shared by rim cuts and vertical rim extensions.
 *
 * A surface whose rim bends into the air beside it carries glass past its vertex plane there. `rimCutDepthMm` cuts
 * that glass at a plane `depth` mm from the vertex: the cap stops at the radius where its sag reaches the plane, and
 * a flat, opaque land runs from there out to `sd`. Tracing clips a ray beyond the cut radius, as it does at a rim;
 * drawing follows the land. `rimExtensionSd` instead adds a land from the existing cap's edge at `sd` to a larger
 * drawn rim without enlarging the clear aperture. Validation, compilation and drawing share the land geometry.
 */

import type { Vec3 } from "../types.js";

/** A resolved flat land on one surface, in mm. */
export interface RimLand {
  /** Signed axial offset of the land from the vertex. */
  sag: number;
  /** Radius where the cap meets the land: the surface's clear radius for tracing. */
  radius: number;
  /** Outer drawn radius of the land. */
  outerRadius: number;
}

/** A cut additionally retains its authored depth for clearance diagnostics. */
export interface RimCut extends RimLand {
  depthMm: number;
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
  return { depthMm, sag: sign * depthMm, radius: outside, outerRadius: sd };
}

/**
 * Resolve a vertical extension from the cap's existing edge to a taller drawn rim.
 *
 * @param sag - signed sag of the optical cap in mm
 * @param sd - unchanged clear semi-diameter in mm
 * @param outerSd - authored outer drawn semi-diameter in mm
 * @returns the land, or null for a non-finite height, a non-extension or an invalid cap edge
 */
export function resolveRimExtension(sag: (radius: number) => number, sd: number, outerSd: number): RimLand | null {
  if (!Number.isFinite(outerSd) || !(sd > 0) || !(outerSd > sd)) return null;
  const edgeSag = sag(sd);
  return Number.isFinite(edgeSag) ? { sag: edgeSag, radius: sd, outerRadius: outerSd } : null;
}

/**
 * Radius occupied by a drawn face, including any opaque land beyond the optical cap.
 *
 * @param surface - compiled surface with its clear aperture and resolved land
 * @returns drawn semi-diameter in mm
 */
export function outlineSemiDiameter(surface: { sd: number; rimLand: RimLand | null }): number {
  return surface.rimLand?.outerRadius ?? surface.sd;
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
 * Sag of the drawn outline: the cap inside the land's start radius, the land beyond it.
 *
 * @param sag - signed sag of the uncut surface, in mm
 * @param land - resolved cut or extension, or null for an ordinary surface
 * @param radius - radial coordinate in mm
 * @returns signed sag in mm
 */
export function rimOutlineSag(sag: (radius: number) => number, land: RimLand | null, radius: number): number {
  return land && Math.abs(radius) > land.radius ? land.sag : sag(radius);
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
 * Where a ray clipped beyond the optical cap meets a cut or extension's land, for drawing.
 *
 * The tracer keeps its hit on the optical profile beyond the clear aperture; drawing moves that hit to the land.
 * A hit outside the drawn rim, or one inside the clear aperture, has no land point.
 *
 * @param surface - compiled surface with its optical profile and resolved land
 * @param hit - clipped surface hit with the direction it arrived along
 * @returns the land point in mm, or null
 */
export function rimLandPoint(
  surface: { profile: { sag(radius: number): number }; rimLand: RimLand | null },
  hit: { point: Vec3; radius: number; incidentDirection?: Vec3 },
): Vec3 | null {
  const land = surface.rimLand;
  const direction = hit.incidentDirection;
  if (!land || !direction || hit.radius <= land.radius || hit.radius > land.outerRadius) return null;
  if (Math.abs(direction[2]) < 1e-12) return null;
  const t = (land.sag - surface.profile.sag(hit.radius)) / direction[2];
  return [hit.point[0] + t * direction[0], hit.point[1] + t * direction[1], hit.point[2] + t * direction[2]];
}
