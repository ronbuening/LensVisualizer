/**
 * Radial aperture/material band helpers shared by validation and diagram rendering.
 *
 * A solid surface owns material from the optical axis to `sd`; an annular surface
 * with `innerSd` owns only the ring from `innerSd` to `sd`. Mirror lenses use this
 * distinction heavily: a rear corrector can sit inside the clear center of an
 * annular primary without physically sharing glass or an air gap with the primary
 * mirror shell.
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

/**
 * Convert a surface aperture into its physical radial material band.
 *
 * The helper intentionally ignores ray behavior (`reflect`, `block`, etc.). It
 * answers only the geometry question: which meridional radii are occupied by a
 * visible surface region?
 */
export function materialBandForSurface(surface: ApertureBandSurface): ApertureBand | null {
  if (typeof surface.sd !== "number" || !Number.isFinite(surface.sd) || surface.sd <= 0) return null;
  const inner =
    surface.innerSd !== undefined && surface.innerSd !== null && Number.isFinite(surface.innerSd)
      ? Math.max(0, surface.innerSd)
      : 0;
  if (inner >= surface.sd - BAND_EPSILON) return null;
  return { inner, outer: surface.sd };
}

/**
 * Return the radial overlap where two surfaces both have material.
 *
 * Validators and render diagnostics use the outer edge of this shared band for
 * sag-gap tests. If this returns `null`, the two surfaces are radially disjoint,
 * so annular mirror shells should not trim or fail against central correctors.
 */
export function sharedMaterialBand(a: ApertureBandSurface, b: ApertureBandSurface): ApertureBand | null {
  const bandA = materialBandForSurface(a);
  const bandB = materialBandForSurface(b);
  if (!bandA || !bandB) return null;

  const inner = Math.max(bandA.inner, bandB.inner);
  const outer = Math.min(bandA.outer, bandB.outer);
  return outer > inner + BAND_EPSILON ? { inner, outer } : null;
}

/** Return the clear center radius of an annular surface, or `null` for a solid aperture. */
export function centralOpeningSemiDiameter(surface: ApertureBandSurface): number | null {
  const inner = surface.innerSd;
  if (inner === undefined || inner === null || !Number.isFinite(inner) || inner <= 0) return null;
  return inner;
}

/** True when a surface is fully contained by an annular surface's central opening. */
export function surfaceFitsInsideCentralOpening(surface: ApertureBandSurface, openingSemiDiameter: number): boolean {
  return (
    typeof surface.sd === "number" && Number.isFinite(surface.sd) && surface.sd <= openingSemiDiameter + BAND_EPSILON
  );
}
