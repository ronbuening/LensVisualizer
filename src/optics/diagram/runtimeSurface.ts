/**
 * Runtime layout helpers — state-aware surface positions, sag, zoom, and first-order values.
 *
 * Adapts the prepared optics-engine state back to the legacy RuntimeLens helper names used by
 * diagram rendering and analysis panels.
 */

import type { RuntimeLens } from "../../types/optics.js";
import { conicPolySag, sag, sagSlopeRaw } from "../geometry/surfaceProfile.js";

const BISECT_ITERATIONS: number = 30;

/**
 * Compute rendered sag for a RuntimeLens surface.
 *
 * @param h - radial surface height in mm
 * @param surfIdx - zero-based physical surface index
 * @param L - runtime lens object
 * @returns spherical or aspheric sag in mm, positive toward image space
 */
export function renderSag(h: number, surfIdx: number, L: RuntimeLens): number {
  const R = L.S[surfIdx].R;
  const a = L.asphByIdx[surfIdx];
  if (!a) return sag(h, R);
  return conicPolySag(h, R, a);
}

/**
 * Compute radial sag slope for a RuntimeLens surface.
 *
 * @param h - radial surface height in mm
 * @param surfIdx - zero-based physical surface index
 * @param L - runtime lens object
 * @returns dz/dh at the requested height
 */
export function sagSlope(h: number, surfIdx: number, L: RuntimeLens): number {
  return sagSlopeRaw(h, L.S[surfIdx].R, L.asphByIdx[surfIdx]);
}

/**
 * Trim a surface semi-diameter until sag intrusion fits an allowed air gap.
 *
 * This is a display safeguard only; tracing still uses authored apertures.
 *
 * @param surfIdx - zero-based physical surface index
 * @param sd - declared semi-diameter in mm
 * @param maxSag - maximum allowed absolute sag intrusion in mm
 * @param L - runtime lens object
 * @returns display semi-diameter in mm
 */
export function gapTrimHeight(surfIdx: number, sd: number, maxSag: number, L: RuntimeLens): number {
  if (maxSag <= 0 || L.gapSagFrac <= 0) return sd;
  if (Math.abs(renderSag(sd, surfIdx, L)) <= maxSag) return sd;
  let lo = 0;
  let hi = sd;
  for (let j = 0; j < BISECT_ITERATIONS; j++) {
    const mid = (lo + hi) / 2;
    if (Math.abs(renderSag(mid, surfIdx, L)) > maxSag) hi = mid;
    else lo = mid;
  }
  return (lo + hi) / 2;
}

/**
 * Trim a display semi-diameter to keep rim slope below a tangent threshold.
 *
 * @param surfIdx - zero-based physical surface index
 * @param sd - declared semi-diameter in mm
 * @param maxSlopeTan - maximum allowed `|dz/dh|`
 * @param L - runtime lens object
 * @returns display semi-diameter in mm
 */
export function slopeTrimHeight(surfIdx: number, sd: number, maxSlopeTan: number, L: RuntimeLens): number {
  if (maxSlopeTan <= 0) return sd;
  if (Math.abs(sagSlope(sd, surfIdx, L)) <= maxSlopeTan) return sd;
  let lo = 0;
  let hi = sd;
  for (let j = 0; j < BISECT_ITERATIONS; j++) {
    const mid = (lo + hi) / 2;
    if (Math.abs(sagSlope(mid, surfIdx, L)) > maxSlopeTan) hi = mid;
    else lo = mid;
  }
  return (lo + hi) / 2;
}

/** A rim extension's flat land on a face beside the aperture stop, in mm. */
export interface StopSideRimLand {
  /** Axial position of the land plane at the current surface positions. */
  z: number;
  /** Outer drawn semi-diameter of the land (`rimExtensionSd`). */
  outerSD: number;
}

/**
 * Locate rim-extension lands on the two faces bordering the stop, so the STO label can clear them.
 *
 * A land stands square to the axis at the face's edge sag and reaches past its clear `sd` to `rimExtensionSd`;
 * rim cuts never draw beyond `sd` and are left out.
 *
 * @param L - runtime lens object
 * @param zPos - current surface vertex positions in mm
 * @returns lands on the faces just before and after the stop; empty when neither face has an extension
 */
export function stopSideRimLands(L: RuntimeLens, zPos: readonly number[]): StopSideRimLand[] {
  const lands: StopSideRimLand[] = [];
  for (const surfIdx of [L.stopIdx - 1, L.stopIdx + 1]) {
    const surface = L.S[surfIdx];
    const outerSD = surface?.rimExtensionSd;
    if (outerSD === undefined || !(outerSD > surface.sd)) continue;
    const z = zPos[surfIdx] + renderSag(surface.sd, surfIdx, L);
    if (Number.isFinite(z)) lands.push({ z, outerSD });
  }
  return lands;
}
