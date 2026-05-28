/**
 * Aspheric comparison analysis adapter — v2-named departure, best-fit sphere, and click helpers.
 *
 * Mirrors the public asphericComparison utilities for callers that import through the engine analysis namespace.
 */

import type { AsphericCoefficients } from "../../types/optics.js";
import { FLAT_R_THRESHOLD } from "../constants.js";
import { createAsphericProfile, createSphericalProfile } from "../math/surfaceProfile.js";

/** One sampled asphere-vs-sphere sag difference at radial height `h` in mm. */
export interface DepartureSample2 {
  h: number;
  delta: number;
}

/**
 * Compute aspheric departure from a comparison sphere at a single aperture height.
 *
 * Positive departure means the aspheric surface sag is farther toward +z/image
 * than the comparison spherical profile at the same radial height.
 *
 * @param h - radial aperture height in mm
 * @param R_sphere - signed radius of the comparison sphere in mm
 * @param R_aspheric - signed base radius of the aspheric surface in mm
 * @param asph - optional conic/polynomial coefficients for the aspheric surface
 * @returns sag departure in mm, aspheric minus comparison sphere
 */
export function computeAsphericDeparture2(
  h: number,
  R_sphere: number,
  R_aspheric: number,
  asph: AsphericCoefficients | undefined,
): number {
  const asphericProfile = asph ? createAsphericProfile(R_aspheric, asph) : createSphericalProfile(R_aspheric);
  return asphericProfile.sag(h) - createSphericalProfile(R_sphere).sag(h);
}

/**
 * Sample aspheric departure from axis to the declared semi-diameter.
 *
 * @param R_sphere - signed radius of the comparison sphere in mm
 * @param R_aspheric - signed base radius of the aspheric surface in mm
 * @param asph - optional conic/polynomial coefficients for the aspheric surface
 * @param sd - semi-diameter limit in mm
 * @param samples - number of evenly spaced radial samples
 * @returns departure profile in mm over `h ∈ [0, sd]`
 */
export function computeDepartureProfile2(
  R_sphere: number,
  R_aspheric: number,
  asph: AsphericCoefficients | undefined,
  sd: number,
  samples = 96,
): DepartureSample2[] {
  const n = Math.max(2, samples);
  const out: DepartureSample2[] = new Array(n);
  for (let i = 0; i < n; i++) {
    const h = (sd * i) / (n - 1);
    out[i] = { h, delta: computeAsphericDeparture2(h, R_sphere, R_aspheric, asph) };
  }
  return out;
}

function sumSquaredResiduals2(
  R_sphere: number,
  R_aspheric: number,
  asph: AsphericCoefficients | undefined,
  sd: number,
  samples: number,
): number {
  let sum = 0;
  const sphere = createSphericalProfile(R_sphere);
  const aspheric = asph ? createAsphericProfile(R_aspheric, asph) : createSphericalProfile(R_aspheric);
  for (let i = 0; i < samples; i++) {
    const h = (sd * i) / (samples - 1);
    const d = aspheric.sag(h) - sphere.sag(h);
    sum += d * d;
  }
  return sum;
}

/**
 * Solve the least-squares best-fit spherical radius for an aspheric surface.
 *
 * Uses golden-section minimization over positive radius magnitude while preserving
 * the sign of the base radius. Flat surfaces and zero apertures return the base R.
 *
 * @param R_base - signed base radius of the aspheric surface in mm
 * @param asph - optional conic/polynomial coefficients
 * @param sd - semi-diameter over which residuals are minimized in mm
 * @param samples - number of radial samples in the least-squares objective
 * @returns signed best-fit sphere radius in mm
 */
export function computeBestFitSphereR2(
  R_base: number,
  asph: AsphericCoefficients | undefined,
  sd: number,
  samples = 64,
): number {
  if (Math.abs(R_base) > FLAT_R_THRESHOLD || sd <= 0) return R_base;
  const sign = R_base < 0 ? -1 : 1;
  const absR = Math.abs(R_base);
  let lo = absR * 0.5;
  let hi = absR * 2.0;
  const minSafe = sd * 1.001;
  if (lo < minSafe) lo = Math.min(minSafe, hi);

  const cost = (R_abs: number) => sumSquaredResiduals2(sign * R_abs, R_base, asph, sd, samples);
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

/**
 * Find the maximum absolute departure in a sampled profile.
 *
 * @param profile - departure samples in mm
 * @returns peak absolute sag difference in mm
 */
export function peakAbsDeparture2(profile: DepartureSample2[]): number {
  let peak = 0;
  for (const s of profile) {
    const a = Math.abs(s.delta);
    if (a > peak) peak = a;
  }
  return peak;
}

/**
 * Compute RMS aspheric departure across sampled aperture heights.
 *
 * @param profile - departure samples in mm
 * @returns root-mean-square sag difference in mm
 */
export function rmsDeparture2(profile: DepartureSample2[]): number {
  if (profile.length === 0) return 0;
  let sum = 0;
  for (const s of profile) sum += s.delta * s.delta;
  return Math.sqrt(sum / profile.length);
}

/**
 * Select the surface whose rendered vertex is nearest a diagram click.
 *
 * @param clickZ - click position in optical-space z millimeters
 * @param surfaces - candidate surface indices and current vertex positions in mm
 * @returns selected surface index, or null when no candidates are provided
 */
export function nearestSurfaceForClick2(clickZ: number, surfaces: { surfIdx: number; z: number }[]): number | null {
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
