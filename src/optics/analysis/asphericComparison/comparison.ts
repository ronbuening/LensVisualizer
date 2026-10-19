/**
 * Aspheric comparison kernels — departure, best-fit sphere and click reductions.
 *
 * Sampling and minimization are shared. The overlay and profile callers retain distinct
 * sag evaluators: without coefficients, their spherical-rim clamps differ.
 */

import type { AsphericCoefficients } from "../../../types/optics.js";
import {
  FLAT_R_THRESHOLD,
  conicPolySag,
  sag,
  createAsphericProfile,
  createSphericalProfile,
} from "../../geometry/surfaceProfile.js";

/** One sampled asphere-vs-sphere sag difference at radial height `h` in mm. */
export interface DepartureSample {
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
export function computeAsphericDepartureFromProfiles(
  h: number,
  R_sphere: number,
  R_aspheric: number,
  asph: AsphericCoefficients | undefined,
): number {
  const asphericProfile = asph ? createAsphericProfile(R_aspheric, asph) : createSphericalProfile(R_aspheric);
  return asphericProfile.sag(h) - createSphericalProfile(R_sphere).sag(h);
}

/**
 * Compute the overlay's conic-polynomial sag minus its comparison sphere.
 * @param h - radial aperture height in mm
 * @param R_sphere - signed comparison radius in mm
 * @param R_aspheric - signed aspheric base radius in mm
 * @param asph - optional conic/polynomial coefficients
 * @returns signed departure in mm, preserving the overlay's conic-root clamp
 */
export function computeAsphericDeparture(
  h: number,
  R_sphere: number,
  R_aspheric: number,
  asph: AsphericCoefficients | undefined,
): number {
  return conicPolySag(h, R_aspheric, asph) - sag(h, R_sphere);
}

/**
 * Sample the overlay's departure, including both h=0 and h=sd.
 * @param R_sphere - signed comparison radius in mm
 * @param R_aspheric - signed aspheric base radius in mm
 * @param asph - optional conic/polynomial coefficients
 * @param sd - clear semi-diameter in mm
 * @param samples - radial sample count (at least two)
 * @returns inclusive radial departure profile in mm
 */
export function computeDepartureProfile(
  R_sphere: number,
  R_aspheric: number,
  asph: AsphericCoefficients | undefined,
  sd: number,
  samples = 96,
): DepartureSample[] {
  return departureProfile(sd, samples, (h) => computeAsphericDeparture(h, R_sphere, R_aspheric, asph));
}

/**
 * Fit the overlay's comparison sphere with its original sag arithmetic.
 * @param R_base - signed base radius in mm
 * @param asph - optional conic/polynomial coefficients
 * @param sd - clear semi-diameter in mm
 * @param samples - radial samples in the least-squares objective
 * @returns signed fitted radius, or the base radius for flat/degenerate inputs
 */
export function computeBestFitSphereR(
  R_base: number,
  asph: AsphericCoefficients | undefined,
  sd: number,
  samples = 64,
): number {
  return bestFitSphereR(R_base, sd, (R_sphere) =>
    sumSquaredResiduals(sd, samples, (h) => computeAsphericDeparture(h, R_sphere, R_base, asph)),
  );
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
export function computeDepartureProfileFromProfiles(
  R_sphere: number,
  R_aspheric: number,
  asph: AsphericCoefficients | undefined,
  sd: number,
  samples = 96,
): DepartureSample[] {
  return departureProfile(sd, samples, (h) => computeAsphericDepartureFromProfiles(h, R_sphere, R_aspheric, asph));
}

function departureProfile(sd: number, samples: number, departureAt: (h: number) => number): DepartureSample[] {
  const n = Math.max(2, samples);
  const out: DepartureSample[] = new Array(n);
  for (let i = 0; i < n; i++) {
    const h = (sd * i) / (n - 1);
    out[i] = { h, delta: departureAt(h) };
  }
  return out;
}

function sumSquaredResiduals(sd: number, samples: number, departureAt: (h: number) => number): number {
  let sum = 0;
  for (let i = 0; i < samples; i++) {
    const h = (sd * i) / (samples - 1);
    const d = departureAt(h);
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
export function computeBestFitSphereRFromProfiles(
  R_base: number,
  asph: AsphericCoefficients | undefined,
  sd: number,
  samples = 64,
): number {
  return bestFitSphereR(R_base, sd, (R_sphere) => {
    const sphere = createSphericalProfile(R_sphere);
    const aspheric = asph ? createAsphericProfile(R_base, asph) : createSphericalProfile(R_base);
    return sumSquaredResiduals(sd, samples, (h) => aspheric.sag(h) - sphere.sag(h));
  });
}

function bestFitSphereR(R_base: number, sd: number, costAt: (R_sphere: number) => number): number {
  if (Math.abs(R_base) > FLAT_R_THRESHOLD || sd <= 0) return R_base;
  const sign = R_base < 0 ? -1 : 1;
  const absR = Math.abs(R_base);
  let lo = absR * 0.5;
  let hi = absR * 2.0;
  const minSafe = sd * 1.001;
  if (lo < minSafe) lo = Math.min(minSafe, hi);

  const cost = (R_abs: number) => costAt(sign * R_abs);
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
export function peakAbsDeparture(profile: DepartureSample[]): number {
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
export function rmsDeparture(profile: DepartureSample[]): number {
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
