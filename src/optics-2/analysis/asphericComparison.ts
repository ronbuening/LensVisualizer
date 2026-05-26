import type { AsphericCoefficients } from "../../types/optics.js";
import { FLAT_R_THRESHOLD } from "../constants.js";
import { createAsphericProfile, createSphericalProfile } from "../math/surfaceProfile.js";

export interface DepartureSample2 {
  h: number;
  delta: number;
}

export function computeAsphericDeparture2(
  h: number,
  R_sphere: number,
  R_aspheric: number,
  asph: AsphericCoefficients | undefined,
): number {
  const asphericProfile = asph ? createAsphericProfile(R_aspheric, asph) : createSphericalProfile(R_aspheric);
  return asphericProfile.sag(h) - createSphericalProfile(R_sphere).sag(h);
}

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

export function peakAbsDeparture2(profile: DepartureSample2[]): number {
  let peak = 0;
  for (const s of profile) {
    const a = Math.abs(s.delta);
    if (a > peak) peak = a;
  }
  return peak;
}

export function rmsDeparture2(profile: DepartureSample2[]): number {
  if (profile.length === 0) return 0;
  let sum = 0;
  for (const s of profile) sum += s.delta * s.delta;
  return Math.sqrt(sum / profile.length);
}

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
