import type { AsphericCoefficients } from "../../types/optics.js";

export const FLAT_R_THRESHOLD = 1e10;

export function sag(h: number, R: number): number {
  if (Math.abs(R) > FLAT_R_THRESHOLD) return 0;
  const c = 1 / R;
  const h2 = h * h;
  const d = 1 - c * c * h2;
  return (c * h2) / (1 + Math.sqrt(d > 0 ? d : 0));
}

export function conicPolySag(h: number, R: number, asph: AsphericCoefficients | undefined): number {
  if (Math.abs(R) > FLAT_R_THRESHOLD && !asph) return 0;
  const c = Math.abs(R) > FLAT_R_THRESHOLD ? 0 : 1.0 / R;
  const K = asph ? asph.K : 0;
  const h2 = h * h;
  const d = 1 - (1 + K) * c * c * h2;
  const conic = (c * h2) / (1 + Math.sqrt(d > 0 ? d : 1e-12));
  if (!asph) return conic;
  const poly =
    asph.A4 * h2 * h2 +
    asph.A6 * h2 ** 3 +
    asph.A8 * h2 ** 4 +
    asph.A10 * h2 ** 5 +
    asph.A12 * h2 ** 6 +
    asph.A14 * h2 ** 7;
  return conic + poly;
}

export function sagSlopeRaw(h: number, R: number, asph: AsphericCoefficients | undefined): number {
  if (Math.abs(R) > FLAT_R_THRESHOLD && !asph) return 0;
  const c = Math.abs(R) > FLAT_R_THRESHOLD ? 0 : 1.0 / R;
  const K = asph ? asph.K : 0;
  const h2 = h * h;
  const denom2 = 1 - (1 + K) * c * c * h2;
  const conicSlope = (c * h) / Math.sqrt(denom2 > 0 ? denom2 : 1e-12);
  if (!asph) return conicSlope;
  const polySlope =
    h *
    (4 * asph.A4 * h2 +
      6 * asph.A6 * h2 * h2 +
      8 * asph.A8 * h2 ** 3 +
      10 * asph.A10 * h2 ** 4 +
      12 * asph.A12 * h2 ** 5 +
      14 * asph.A14 * h2 ** 6);
  return conicSlope + polySlope;
}
