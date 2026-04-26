/**
 * asphericComparison — Pure helpers for comparing an aspheric surface against
 * its spherical cousin. Used by the aspheric deviation inspector overlay to
 * compute departure (Δsag) curves, fit a least-squares best-fit sphere, and
 * pick the surface nearest a click point when an element has multiple
 * aspheric surfaces.
 */

import type { AsphericCoefficients } from "../types/optics.js";
import { sag, conicPolySag, FLAT_R_THRESHOLD } from "./internal/surfaceMath.js";

export interface DepartureSample {
  h: number;
  delta: number;
}

/** Aspheric departure at radius h: asphericSag − sphericalSag. */
export function computeAsphericDeparture(
  h: number,
  R_sphere: number,
  R_aspheric: number,
  asph: AsphericCoefficients | undefined,
): number {
  return conicPolySag(h, R_aspheric, asph) - sag(h, R_sphere);
}

/**
 * Sample the departure profile across the clear aperture.
 * Samples include h=0 and h=sd (inclusive endpoints).
 */
export function computeDepartureProfile(
  R_sphere: number,
  R_aspheric: number,
  asph: AsphericCoefficients | undefined,
  sd: number,
  samples = 96,
): DepartureSample[] {
  const n = Math.max(2, samples);
  const out: DepartureSample[] = new Array(n);
  for (let i = 0; i < n; i++) {
    const h = (sd * i) / (n - 1);
    out[i] = { h, delta: computeAsphericDeparture(h, R_sphere, R_aspheric, asph) };
  }
  return out;
}

/** Sum of squared (asph − sphere) sag residuals at evenly-spaced h ∈ [0, sd]. */
function sumSquaredResiduals(
  R_sphere: number,
  R_aspheric: number,
  asph: AsphericCoefficients | undefined,
  sd: number,
  samples: number,
): number {
  let sum = 0;
  for (let i = 0; i < samples; i++) {
    const h = (sd * i) / (samples - 1);
    const d = conicPolySag(h, R_aspheric, asph) - sag(h, R_sphere);
    sum += d * d;
  }
  return sum;
}

/**
 * Find the spherical radius R* that minimizes Σ(asphSag − sphereSag)² across
 * the clear aperture. Uses golden-section search bracketed around the base R
 * (preserves sign). When R is effectively flat or sd is degenerate, returns
 * the base R unchanged.
 */
export function computeBestFitSphereR(
  R_base: number,
  asph: AsphericCoefficients | undefined,
  sd: number,
  samples = 64,
): number {
  if (Math.abs(R_base) > FLAT_R_THRESHOLD || sd <= 0) return R_base;
  const sign = R_base < 0 ? -1 : 1;
  const absR = Math.abs(R_base);
  /* Bracket around |R_base|. Aspheric base radii from real prescriptions
   * sit close to the best-fit; widen with care so the conic stays valid
   * (need 1 − (1+K)(h/R)² > 0 at h = sd). */
  let lo = absR * 0.5;
  let hi = absR * 2.0;
  /* Tighten lower bound away from sd to keep the conic real for K ≥ 0. */
  const minSafe = sd * 1.001;
  if (lo < minSafe) lo = Math.min(minSafe, hi);

  const cost = (R_abs: number) => sumSquaredResiduals(sign * R_abs, R_base, asph, sd, samples);

  /* Golden-section minimization. */
  const phi = (Math.sqrt(5) - 1) / 2;
  let a = lo;
  let b = hi;
  let c = b - phi * (b - a);
  let d = a + phi * (b - a);
  let fc = cost(c);
  let fd = cost(d);
  for (let iter = 0; iter < 60; iter++) {
    if (Math.abs(b - a) < 1e-7 * Math.max(1, absR)) break;
    if (fc < fd) {
      b = d;
      d = c;
      fd = fc;
      c = b - phi * (b - a);
      fc = cost(c);
    } else {
      a = c;
      c = d;
      fc = fd;
      d = a + phi * (b - a);
      fd = cost(d);
    }
  }
  return sign * (a + b) * 0.5;
}

/** Peak |delta| in a sampled profile, for auto-exaggeration scaling. */
export function peakAbsDeparture(profile: DepartureSample[]): number {
  let peak = 0;
  for (const s of profile) {
    const a = Math.abs(s.delta);
    if (a > peak) peak = a;
  }
  return peak;
}

/** RMS departure across a sampled profile. */
export function rmsDeparture(profile: DepartureSample[]): number {
  if (profile.length === 0) return 0;
  let sum = 0;
  for (const s of profile) sum += s.delta * s.delta;
  return Math.sqrt(sum / profile.length);
}

/** Pick the surface whose vertex z is nearest the click's z-coordinate. */
export function nearestSurfaceForClick(clickZ: number, surfaces: { surfIdx: number; z: number }[]): number | null {
  if (surfaces.length === 0) return null;
  let bestIdx = surfaces[0].surfIdx;
  let bestDist = Math.abs(clickZ - surfaces[0].z);
  for (let i = 1; i < surfaces.length; i++) {
    const d = Math.abs(clickZ - surfaces[i].z);
    if (d < bestDist) {
      bestDist = d;
      bestIdx = surfaces[i].surfIdx;
    }
  }
  return bestIdx;
}
