/**
 * Aberration analysis — pure functions for computing monochromatic aberration
 * metrics from the current lens state.
 *
 * All functions accept the runtime lens object L and current slider-derived
 * parameters as explicit arguments. No React dependencies — fully testable
 * in isolation.
 *
 * These computations are slider-state-dependent and must NOT be placed in
 * buildLens(). They should be memoized from current state in a React hook.
 */

import { traceParaxialRay, traceRay } from "./optics.js";
import type { RuntimeLens } from "../types/optics.js";

/** One sample point on the longitudinal SA profile curve. */
export interface SAProfilePoint {
  /** Normalised pupil zone fraction (0 = paraxial axis, 1 = full entrance-pupil edge). */
  fraction: number;
  /** SA at this zone in mm (real axial intercept − paraxial intercept). */
  saMm: number;
}

/** Result of a spherical aberration computation. */
export interface SphericalAberrationResult {
  /** Longitudinal SA in mm (real marginal intercept − paraxial intercept). */
  saMm: number;
  /** Longitudinal SA in µm (saMm × 1000). */
  saUm: number;
  /** Axial intercept of the real marginal ray (mm, absolute z). */
  realIntercept: number;
  /** Axial intercept of the paraxial reference ray (mm, absolute z). */
  paraxialIntercept: number;
}

/**
 * Candidate fractions of the entrance pupil for the marginal ray sample,
 * tried in descending order.  The first unclipped pair wins.
 *
 * 0.95 is ideal (closest to the true marginal) but some fast lenses clip
 * there due to non-linear pupil mapping (spherical aberration of the pupil
 * itself).  The fallbacks ensure we always get a usable measurement while
 * staying well outside the paraxial zone.
 */
const MARGINAL_FRACS = [0.95, 0.9, 0.85, 0.8] as const;

/**
/** Reference ray height in mm for the true paraxial baseline trace. */
const PARAXIAL_REFERENCE_HEIGHT_MM = 1;

/** Legacy near-axis real-ray fraction retained for regression tests/documentation. */
export const LEGACY_NEAR_AXIS_REAL_FRAC = 0.001;

/** Minimum |u| (exit slope) to consider a ray's axial intercept valid. */
const MIN_SLOPE = 1e-12;

/**
 * Compute the axial intercept of a ray from its exit state.
 *
 * The intercept is the z-position where the ray crosses the optical axis:
 *   z_intercept = lastSurfZ - y / u
 *
 * Returns null if the slope is too small (ray nearly parallel to axis).
 */
function axialIntercept(y: number, u: number, lastSurfZ: number): number | null {
  if (Math.abs(u) < MIN_SLOPE) return null;
  return lastSurfZ - y / u;
}

function computeParaxialReferenceIntercept(
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  lastSurfZ: number,
): number | null {
  const paraxial = traceParaxialRay(PARAXIAL_REFERENCE_HEIGHT_MM, 0, focusT, zoomT, L);
  return axialIntercept(paraxial.y, paraxial.u, lastSurfZ);
}

function computeSymmetricRealIntercept(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  lastSurfZ: number,
  fraction: number,
): number | null {
  const h = fraction * currentEPSD;
  const plusY = traceRay(h, 0, zPos, focusT, zoomT, currentPhysStopSD, true, L);
  const minusY = traceRay(-h, 0, zPos, focusT, zoomT, currentPhysStopSD, true, L);

  if (plusY.clipped || minusY.clipped) return null;

  const interceptPlus = axialIntercept(plusY.y, plusY.u, lastSurfZ);
  const interceptMinus = axialIntercept(minusY.y, minusY.u, lastSurfZ);
  if (interceptPlus === null || interceptMinus === null) return null;

  return (interceptPlus + interceptMinus) / 2;
}

/**
 * Compute on-axis longitudinal spherical aberration for the current lens state.
 *
 * Traces a marginal ray near the entrance pupil edge (0.95× preferred, with
 * fallbacks to 0.90/0.85/0.80 if clipped) using exact Snell's law, and
 * compares its axial intercept against a true paraxial reference ray.
 *
 * Sign convention: negative SA means the real marginal intercept lies closer
 * to the lens than the paraxial intercept (undercorrected). Positive SA means
 * the marginal focus falls beyond the paraxial focus (overcorrected).
 *
 * The +Y and −Y marginal rays are averaged to enforce symmetry and cancel
 * any residual sign noise from asymmetric surface interactions.
 *
 * @param L                  — runtime lens object (frozen, from buildLens)
 * @param zPos               — surface z-positions for current focus/zoom state
 * @param focusT             — focus slider [0..1]
 * @param zoomT              — zoom slider [0..1]
 * @param currentEPSD        — current entrance pupil semi-diameter (mm)
 * @param currentPhysStopSD  — current physical stop semi-diameter (mm)
 * @returns                    SA result, or null if marginal ray is clipped/invalid
 */
export function computeSphericalAberration(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
): SphericalAberrationResult | null {
  if (currentEPSD <= 0 || L.N < 1) return null;

  const lastSurfZ = zPos[L.N - 1];
  const paraxialIntercept = computeParaxialReferenceIntercept(L, focusT, zoomT, lastSurfZ);
  if (paraxialIntercept === null) return null;

  /* ── Real marginal rays (±Y, averaged for symmetry) ──
   * ghost=true so the trace runs through all surfaces and reliably reports
   * clipped=true when the ray exceeds any aperture.  With ghost=false the
   * trace breaks early without setting the clipped flag, making clip
   * detection unreliable.
   *
   * Try descending marginal fractions — fast lenses can clip at 0.95× EP
   * due to spherical aberration of the entrance pupil mapping itself. */
  let realIntercept: number | null = null;

  for (const frac of MARGINAL_FRACS) {
    realIntercept = computeSymmetricRealIntercept(
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      lastSurfZ,
      frac,
    );
    if (realIntercept !== null) break;
  }

  if (realIntercept === null) return null;

  const saMm = realIntercept - paraxialIntercept;
  return {
    saMm,
    saUm: saMm * 1000,
    realIntercept,
    paraxialIntercept,
  };
}

/**
 * Pupil zone fractions sampled for the longitudinal SA profile curve.
 * Spans the aperture from near-paraxial to the marginal zone.
 */
const PROFILE_FRACS = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95] as const;

/**
 * Compute the longitudinal SA profile across the pupil aperture.
 *
 * Traces ±Y rays at each PROFILE_FRACS fraction of the entrance pupil and
 * returns the focus shift relative to the true paraxial reference at each
 * zone. Points where the ray is clipped by the aperture stop are silently
 * omitted, so the returned array may be shorter than PROFILE_FRACS.
 *
 * Returns an empty array when the paraxial reference cannot be traced or
 * when fewer than two valid zone samples are available.
 *
 * @param L                  — runtime lens object (frozen, from buildLens)
 * @param zPos               — surface z-positions for current focus/zoom state
 * @param focusT             — focus slider [0..1]
 * @param zoomT              — zoom slider [0..1]
 * @param currentEPSD        — current entrance pupil semi-diameter (mm)
 * @param currentPhysStopSD  — current physical stop semi-diameter (mm)
 * @returns                    Array of {fraction, saMm} profile points, or [] on failure
 */
export function computeSAProfile(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
): SAProfilePoint[] {
  if (currentEPSD <= 0 || L.N < 1) return [];

  const lastSurfZ = zPos[L.N - 1];

  /* ── Paraxial reference intercept (computed once) ── */
  const paraxialIntercept = computeParaxialReferenceIntercept(L, focusT, zoomT, lastSurfZ);
  if (paraxialIntercept === null) return [];

  /* ── Sample each zone fraction ── */
  const points: SAProfilePoint[] = [];

  for (const fraction of PROFILE_FRACS) {
    const realIntercept = computeSymmetricRealIntercept(
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      lastSurfZ,
      fraction,
    );
    if (realIntercept === null) continue;

    points.push({ fraction, saMm: realIntercept - paraxialIntercept });
  }

  return points.length >= 2 ? points : [];
}
