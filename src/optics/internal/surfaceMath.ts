/**
 * Surface sag math — shared spherical and conic-polynomial formulas for optical surfaces.
 *
 * Provides the sign-convention-sensitive sag and slope primitives used by layout, validation, and
 * exact surface intersection.
 */

import type { AsphericCoefficients } from "../../types/optics.js";
import { ASPHERIC_POLYNOMIAL_TERMS } from "../../types/asphericSchema.js";
import type { AsphericPolynomialDescriptor } from "../../types/asphericSchema.js";

/* Sag/slope evaluation plans derived from the shared schema. Terms keep the
 * schema's accumulation order within each parity; even and odd sums stay
 * separate so even-only surfaces remain bit-identical to the pre-odd-order
 * engine (the odd sum is exactly 0 for them). */
interface AsphericTermPlan {
  readonly key: AsphericPolynomialDescriptor["key"];
  readonly power: number;
  /** Exponent applied to h² when evaluating this term's sag contribution. */
  readonly sagExponent: number;
  /** Exponent applied to h² inside this term's slope sum. */
  readonly slopeExponent: number;
}

function termPlans(parity: "even" | "odd"): readonly AsphericTermPlan[] {
  return ASPHERIC_POLYNOMIAL_TERMS.filter((term) => term.parity === parity).map((term) => ({
    key: term.key,
    power: term.power,
    // Even sag terms are A_n·(h²)^(n/2); odd sag terms are h·A_n·(h²)^((n-1)/2).
    sagExponent: parity === "even" ? term.power / 2 : (term.power - 1) / 2,
    // d/dh gives n·A_n·h^(n-1): h·(h²)^(n/2-1) for even n, (h²)^((n-1)/2) for odd n.
    slopeExponent: parity === "even" ? term.power / 2 - 1 : (term.power - 1) / 2,
  }));
}

const EVEN_TERM_PLANS = termPlans("even");
const ODD_TERM_PLANS = termPlans("odd");

const EVEN_POWER = Float64Array.from(EVEN_TERM_PLANS, (term) => term.power);
const EVEN_SAG_EXP = Float64Array.from(EVEN_TERM_PLANS, (term) => term.sagExponent);
const EVEN_SLOPE_EXP = Float64Array.from(EVEN_TERM_PLANS, (term) => term.slopeExponent);
const ODD_POWER = Float64Array.from(ODD_TERM_PLANS, (term) => term.power);
const ODD_SAG_EXP = Float64Array.from(ODD_TERM_PLANS, (term) => term.sagExponent);
const ODD_SLOPE_EXP = Float64Array.from(ODD_TERM_PLANS, (term) => term.slopeExponent);

function coefficientOf(asph: AsphericCoefficients, key: AsphericPolynomialDescriptor["key"]): number {
  return (asph as Partial<Record<typeof key, number>>)[key] ?? 0;
}

/* Coefficient vectors compiled once per asphere object (schema order within
 * each parity), so the hot sag/slope loops read dense arrays instead of doing
 * 18 string-keyed lookups per evaluation. Keyed by object identity — asphere
 * objects are immutable once authored/compiled. */
interface CompiledAsphereCoefficients {
  readonly even: Float64Array;
  readonly odd: Float64Array;
}

const COMPILED_ASPHERES = new WeakMap<AsphericCoefficients, CompiledAsphereCoefficients>();

function compiledCoefficients(asph: AsphericCoefficients): CompiledAsphereCoefficients {
  const cached = COMPILED_ASPHERES.get(asph);
  if (cached) return cached;
  const compiled = {
    even: Float64Array.from(EVEN_TERM_PLANS, (term) => coefficientOf(asph, term.key)),
    odd: Float64Array.from(ODD_TERM_PLANS, (term) => coefficientOf(asph, term.key)),
  };
  COMPILED_ASPHERES.set(asph, compiled);
  return compiled;
}

/** Radius magnitude above which the engine treats a surface as optically flat. */
export const FLAT_R_THRESHOLD = 1e10;
/** tan(64.16 deg): default rim-slope cap for rejecting unrealistic authored apertures. */
export const MAX_RIM_SLOPE_TAN = 0.9 / Math.sqrt(1 - 0.9 ** 2);
/** Default maximum rim slope expressed as an angle in degrees for validation messages. */
export const DEFAULT_MAX_RIM_ANGLE_DEG = (Math.atan(MAX_RIM_SLOPE_TAN) * 180) / Math.PI;

/**
 * Compute spherical surface sag at radial height h.
 *
 * Uses the standard sag equation z = c*h^2 / (1 + sqrt(1 - c^2*h^2)),
 * where c = 1/R. Positive z follows the image-side optical axis.
 *
 * @param h - radial ray height in mm
 * @param R - signed radius of curvature in mm
 * @returns axial sag in mm, or 0 for an optically flat surface
 */
export function sag(h: number, R: number): number {
  if (Math.abs(R) > FLAT_R_THRESHOLD) return 0;
  const c = 1 / R;
  const h2 = h * h;
  const d = 1 - c * c * h2;
  return (c * h2) / (1 + Math.sqrt(d > 0 ? d : 0));
}

/**
 * Compute conic-plus-polynomial aspheric sag at radial height h.
 *
 * Applies the polynomial asphere convention used by lens patents:
 * z = conic(K, R, h) + A4*h^4 + A6*h^6 + ... plus optional odd orders
 * A3*h^3 + A5*h^5 + ... in the radial height h >= 0, so odd terms remain
 * rotationally symmetric.
 *
 * @param h - radial ray height in mm
 * @param R - signed base radius in mm
 * @param asph - optional conic constant and polynomial coefficients
 * @returns axial sag in mm using the image-side-positive z convention
 */
export function conicPolySag(h: number, R: number, asph: AsphericCoefficients | undefined): number {
  if (Math.abs(R) > FLAT_R_THRESHOLD && !asph) return 0;
  const c = Math.abs(R) > FLAT_R_THRESHOLD ? 0 : 1.0 / R;
  const K = asph ? asph.K : 0;
  const h2 = h * h;
  const d = 1 - (1 + K) * c * c * h2;
  const conic = (c * h2) / (1 + Math.sqrt(d > 0 ? d : 1e-12));
  if (!asph) return conic;
  const { even, odd } = compiledCoefficients(asph);
  let poly = 0;
  for (let t = 0; t < even.length; t++) {
    poly += even[t] * h2 ** EVEN_SAG_EXP[t];
  }
  // Odd orders stay a separate additive sum: it is exactly 0 for even-only
  // surfaces, keeping their sag bit-identical to the pre-odd-order engine.
  let oddSum = 0;
  for (let t = 0; t < odd.length; t++) {
    oddSum += odd[t] * h2 ** ODD_SAG_EXP[t];
  }
  const oddPoly = h * oddSum;
  return conic + poly + oddPoly;
}

/**
 * Compute dz/dh for spherical or conic-polynomial sag.
 *
 * The derivative feeds exact surface normals; near-invalid conic domains clamp
 * the denominator so tracing reports a finite miss instead of exploding.
 *
 * @param h - radial ray height in mm
 * @param R - signed base radius in mm
 * @param asph - optional conic constant and polynomial coefficients
 * @returns radial sag slope dz/dh
 */
export function sagSlopeRaw(h: number, R: number, asph: AsphericCoefficients | undefined): number {
  if (Math.abs(R) > FLAT_R_THRESHOLD && !asph) return 0;
  const c = Math.abs(R) > FLAT_R_THRESHOLD ? 0 : 1.0 / R;
  const K = asph ? asph.K : 0;
  const h2 = h * h;
  const denom2 = 1 - (1 + K) * c * c * h2;
  const conicSlope = (c * h) / Math.sqrt(denom2 > 0 ? denom2 : 1e-12);
  if (!asph) return conicSlope;
  const { even, odd } = compiledCoefficients(asph);
  let evenSum = 0;
  for (let t = 0; t < even.length; t++) {
    evenSum += EVEN_POWER[t] * even[t] * h2 ** EVEN_SLOPE_EXP[t];
  }
  const polySlope = h * evenSum;
  // d/dh of an odd term A_n*h^n is n*A_n*h^(n-1), an even power of h; kept as a
  // separate sum so even-only surfaces remain bit-identical (see conicPolySag).
  let oddSlope = 0;
  for (let t = 0; t < odd.length; t++) {
    oddSlope += ODD_POWER[t] * odd[t] * h2 ** ODD_SLOPE_EXP[t];
  }
  return conicSlope + polySlope + oddSlope;
}
