/**
 * Radial aperture/material band helpers shared by validation and diagram rendering.
 *
 * A solid surface owns material from the optical axis to `sd`; an annular surface
 * with `innerSd` owns only the ring from `innerSd` to `sd`.
 */

export interface ApertureBandSurface {
  sd?: number;
  innerSd?: number | null;
}

export interface ApertureBand {
  inner: number;
  outer: number;
}

const BAND_EPSILON = 1e-9;

export function materialBandForSurface(surface: ApertureBandSurface): ApertureBand | null {
  if (typeof surface.sd !== "number" || !Number.isFinite(surface.sd) || surface.sd <= 0) return null;
  const inner =
    surface.innerSd !== undefined && surface.innerSd !== null && Number.isFinite(surface.innerSd)
      ? Math.max(0, surface.innerSd)
      : 0;
  if (inner >= surface.sd - BAND_EPSILON) return null;
  return { inner, outer: surface.sd };
}

export function sharedMaterialBand(a: ApertureBandSurface, b: ApertureBandSurface): ApertureBand | null {
  const bandA = materialBandForSurface(a);
  const bandB = materialBandForSurface(b);
  if (!bandA || !bandB) return null;

  const inner = Math.max(bandA.inner, bandB.inner);
  const outer = Math.min(bandA.outer, bandB.outer);
  return outer > inner + BAND_EPSILON ? { inner, outer } : null;
}

export function centralOpeningSemiDiameter(surface: ApertureBandSurface): number | null {
  const inner = surface.innerSd;
  if (inner === undefined || inner === null || !Number.isFinite(inner) || inner <= 0) return null;
  return inner;
}

export function surfaceFitsInsideCentralOpening(surface: ApertureBandSurface, openingSemiDiameter: number): boolean {
  return (
    typeof surface.sd === "number" && Number.isFinite(surface.sd) && surface.sd <= openingSemiDiameter + BAND_EPSILON
  );
}
