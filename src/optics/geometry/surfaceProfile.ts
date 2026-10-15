/**
 * Surface geometry — the one implementation of surface sag, slope and profiles.
 *
 * Production tracing, validation, layout, the diagram and the audit scripts read a surface's sag and slope from this
 * module. The positional functions (`sag`, `conicPolySag`, `sagSlopeRaw`) serve callers that hold a radius and
 * coefficients; profile objects serve callers that hold a prepared surface, and add the normal, the domain radius and
 * the slope bound. Validation and render diagnostics also compute a conic limit, and the MTF ray classifier
 * samples a slope bound.
 *
 * One arithmetic is used throughout, so `evaluate(r)` equals `sag(r)` and `slope(r)` bit for bit, and a positional
 * function equals the profile method of the same surface:
 *
 *   h2    = h * h
 *   c     = |R| > FLAT_R_THRESHOLD ? 0 : 1 / R
 *   d     = 1 - (1 + K) * c * c * h2        multiplied left to right
 *   root  = sqrt(d > 0 ? d : 1e-12)
 *   sag   = (c * h2) / (1 + root) + evenSag + oddSag
 *   slope = (c * h) / root + evenSlope + oddSlope
 *
 * The conic term and the two polynomial sums are separate addends, added left to right in that order. The clamp
 * touches only the square-root argument and stays apart from the polynomial (agent_docs/decisions.md, 2026-08-04),
 * so beyond the conic domain the result is a finite continuation, never NaN. Rejecting that region is the
 * intersection kernel's job. A plain sphere through `sag(h, R)` clamps the argument to 0 instead of 1e-12; the two
 * clamps differ wherever the argument is not positive, which is at |R| and beyond it.
 *
 * Each polynomial sum is one Horner chain in h2 over a dense vector `a` indexed by the power of h2:
 *
 *   P(a) = (...((a[top] * h2 + a[top-1]) * h2 + a[top-2]) ...) * h2 + a[0]
 *
 * `top` is the highest nonzero slot, and P = 0 when there is none, so a zero coefficient never multiplies an
 * overflowed h2 into NaN. Every slot below `top` is visited, zero or not.
 * A term A_n * h^n fills one slot of a sag vector and one of a slope vector:
 *
 *   evenSag   = P(a)        a[n/2]     = A_n
 *   oddSag    = h * P(a)    a[(n-1)/2] = A_n
 *   evenSlope = h * P(a)    a[n/2 - 1] = n * A_n
 *   oddSlope  = P(a)        a[(n-1)/2] = n * A_n
 *
 * Slots come from each term's power in the shared schema, so the schema's list order does not affect the result.
 */

import type { AsphericCoefficients, SurfaceData } from "../../types/optics.js";
import { ASPHERIC_POLYNOMIAL_TERMS } from "../../types/asphericSchema.js";
import type { AsphericPolynomialDescriptor } from "../../types/asphericSchema.js";
import { VECTOR_EPSILON } from "../constants.js";
import { normalize } from "../math/vector.js";
import type { SagSlope, SurfaceProfile, Vec3 } from "../types.js";

/* ── Constants ── */

/** Radius magnitude above which the engine treats a surface as optically flat. */
export const FLAT_R_THRESHOLD = 1e10;
/** tan(64.16 deg): default rim-slope cap for rejecting unrealistic authored apertures. */
export const MAX_RIM_SLOPE_TAN = 0.9 / Math.sqrt(1 - 0.9 ** 2);
/** Default maximum rim slope expressed as an angle in degrees for validation messages. */
export const DEFAULT_MAX_RIM_ANGLE_DEG = (Math.atan(MAX_RIM_SLOPE_TAN) * 180) / Math.PI;

/** Floor for the conic square-root argument: keeps sag and slope finite beyond the conic domain. */
const CONIC_ROOT_FLOOR = 1e-12;

/* ── Polynomial terms ── */

/** Where one schema term lands: the power of h² it multiplies in its parity's sag sum and slope sum. */
interface TermSlot {
  readonly key: AsphericPolynomialDescriptor["key"];
  readonly power: number;
  readonly even: boolean;
  readonly sagSlot: number;
  readonly slopeSlot: number;
}

const TERM_SLOTS: readonly TermSlot[] = ASPHERIC_POLYNOMIAL_TERMS.map((term) => {
  const even = term.parity === "even";
  return {
    key: term.key,
    power: term.power,
    even,
    // Even sag terms are A_n·(h²)^(n/2); odd sag terms are h·A_n·(h²)^((n-1)/2).
    sagSlot: even ? term.power / 2 : (term.power - 1) / 2,
    // d/dh gives n·A_n·h^(n-1): h·(h²)^(n/2-1) for even n, (h²)^((n-1)/2) for odd n.
    slopeSlot: even ? term.power / 2 - 1 : (term.power - 1) / 2,
  };
});

/** Length of the dense vector that holds one parity's terms for one sum. */
function vectorLength(even: boolean, slotOf: (term: TermSlot) => number): number {
  return TERM_SLOTS.reduce((length, term) => (term.even === even ? Math.max(length, slotOf(term) + 1) : length), 0);
}

const EVEN_SAG_LENGTH = vectorLength(true, (term) => term.sagSlot);
const ODD_SAG_LENGTH = vectorLength(false, (term) => term.sagSlot);
const EVEN_SLOPE_LENGTH = vectorLength(true, (term) => term.slopeSlot);
const ODD_SLOPE_LENGTH = vectorLength(false, (term) => term.slopeSlot);
/** Highest power of h in the schema; the slope bound holds one coefficient per power of h below it. */
export const MAX_TERM_POWER = ASPHERIC_POLYNOMIAL_TERMS.reduce((power, term) => Math.max(power, term.power), 0);

/** The four Horner vectors of one coefficient object, each with its highest nonzero slot (-1 when all zero). */
interface HornerTerms {
  readonly evenSag: Float64Array;
  readonly evenSagTop: number;
  readonly oddSag: Float64Array;
  readonly oddSagTop: number;
  readonly evenSlope: Float64Array;
  readonly evenSlopeTop: number;
  readonly oddSlope: Float64Array;
  readonly oddSlopeTop: number;
}

function coefficientOf(asph: AsphericCoefficients, key: AsphericPolynomialDescriptor["key"]): number {
  return (asph as Partial<Record<typeof key, number>>)[key] ?? 0;
}

function highestNonzeroSlot(vector: Float64Array): number {
  let slot = vector.length - 1;
  while (slot >= 0 && vector[slot] === 0) slot--;
  return slot;
}

function compileHornerTerms(asph: AsphericCoefficients): HornerTerms {
  const evenSag = new Float64Array(EVEN_SAG_LENGTH);
  const oddSag = new Float64Array(ODD_SAG_LENGTH);
  const evenSlope = new Float64Array(EVEN_SLOPE_LENGTH);
  const oddSlope = new Float64Array(ODD_SLOPE_LENGTH);
  for (const term of TERM_SLOTS) {
    const coefficient = coefficientOf(asph, term.key);
    (term.even ? evenSag : oddSag)[term.sagSlot] = coefficient;
    (term.even ? evenSlope : oddSlope)[term.slopeSlot] = term.power * coefficient;
  }
  return {
    evenSag,
    evenSagTop: highestNonzeroSlot(evenSag),
    oddSag,
    oddSagTop: highestNonzeroSlot(oddSag),
    evenSlope,
    evenSlopeTop: highestNonzeroSlot(evenSlope),
    oddSlope,
    oddSlopeTop: highestNonzeroSlot(oddSlope),
  };
}

/** Horner vectors compiled once per frozen coefficient object. */
const COMPILED_ASPHERES = new WeakMap<AsphericCoefficients, HornerTerms>();

/**
 * Horner vectors for a coefficient object. A mutable object is recompiled on every call, so a caller that edits a
 * coefficient never reads a stale value.
 */
function hornerTerms(asph: AsphericCoefficients): HornerTerms {
  if (!Object.isFrozen(asph)) return compileHornerTerms(asph);
  let terms = COMPILED_ASPHERES.get(asph);
  if (!terms) {
    terms = compileHornerTerms(asph);
    COMPILED_ASPHERES.set(asph, terms);
  }
  return terms;
}

/* ── Shared arithmetic (module header) ── */

/** P(a): Horner chain in h² from the highest nonzero slot down to slot 0. */
function horner(a: Float64Array, top: number, h2: number): number {
  if (top < 0) return 0;
  let sum = a[top];
  for (let slot = top - 1; slot >= 0; slot--) sum = sum * h2 + a[slot];
  return sum;
}

/** Base curvature c = 1/R; a flat base has no conic term. */
function baseCurvature(R: number): number {
  return Math.abs(R) > FLAT_R_THRESHOLD ? 0 : 1.0 / R;
}

/** Clamped conic root sqrt(1 - (1+K)·c²·h²), shared by the conic sag and slope terms. */
function conicRoot(c: number, K: number, h2: number): number {
  const d = 1 - (1 + K) * c * c * h2;
  return Math.sqrt(d > 0 ? d : CONIC_ROOT_FLOOR);
}

function conicPolySagAt(h: number, c: number, K: number, terms: HornerTerms | null): number {
  const h2 = h * h;
  const conic = (c * h2) / (1 + conicRoot(c, K, h2));
  if (!terms) return conic;
  return conic + horner(terms.evenSag, terms.evenSagTop, h2) + h * horner(terms.oddSag, terms.oddSagTop, h2);
}

function conicPolySlopeAt(h: number, c: number, K: number, terms: HornerTerms | null): number {
  const h2 = h * h;
  const conic = (c * h) / conicRoot(c, K, h2);
  if (!terms) return conic;
  return conic + h * horner(terms.evenSlope, terms.evenSlopeTop, h2) + horner(terms.oddSlope, terms.oddSlopeTop, h2);
}

/** Sag and slope from one conic root; each field repeats the expression of the function above it. */
function conicPolyEvaluateAt(h: number, c: number, K: number, terms: HornerTerms, out: SagSlope): SagSlope {
  const h2 = h * h;
  const root = conicRoot(c, K, h2);
  const conicSag = (c * h2) / (1 + root);
  const conicSlope = (c * h) / root;
  out.sag = conicSag + horner(terms.evenSag, terms.evenSagTop, h2) + h * horner(terms.oddSag, terms.oddSagTop, h2);
  out.slope =
    conicSlope + h * horner(terms.evenSlope, terms.evenSlopeTop, h2) + horner(terms.oddSlope, terms.oddSlopeTop, h2);
  return out;
}

/**
 * Sphere sag and slope from one pass. Where the root argument is positive, inside |R|, the two sphere clamps agree
 * and one root serves both. At |R| and beyond it `sag` floors the argument at 0 and `sagSlopeRaw` at 1e-12, and each
 * field keeps its own.
 */
function sphereEvaluateAt(h: number, R: number, out: SagSlope): SagSlope {
  if (Math.abs(R) > FLAT_R_THRESHOLD) {
    out.sag = 0;
    out.slope = 0;
    return out;
  }
  const c = 1 / R;
  const h2 = h * h;
  const d = 1 - c * c * h2;
  const root = Math.sqrt(d > 0 ? d : 0);
  out.sag = (c * h2) / (1 + root);
  out.slope = (c * h) / (d > 0 ? root : Math.sqrt(CONIC_ROOT_FLOOR));
  return out;
}

/* ── Positional sag and slope ── */

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
  return conicPolySagAt(h, baseCurvature(R), asph ? asph.K : 0, asph ? hornerTerms(asph) : null);
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
  return conicPolySlopeAt(h, baseCurvature(R), asph ? asph.K : 0, asph ? hornerTerms(asph) : null);
}

/* ── Normal and domain ── */

/**
 * Unit surface normal of a rotationally symmetric sag surface, from its radial slope at a point.
 *
 * @param x - sagittal coordinate of the point in mm
 * @param y - meridional coordinate of the point in mm
 * @param radius - radial height of the point, `Math.hypot(x, y)`, in mm
 * @param slope - radial sag slope dz/dr at that radius
 * @returns unit normal with a positive z component; +z on the axis or for a non-finite slope
 */
export function normalFromSlope(x: number, y: number, radius: number, slope: number): Vec3 {
  if (radius < VECTOR_EPSILON) return [0, 0, 1];
  const dzdx = (slope * x) / radius;
  const dzdy = (slope * y) / radius;
  return normalize([-dzdx, -dzdy, 1]) ?? [0, 0, 1];
}

/**
 * Radius at which the conic term stops being real: 1 / sqrt((1 + K) * c^2).
 *
 * @param R - signed base radius in mm
 * @param K - conic constant
 * @returns domain radius in mm, or null for a flat base or a conic that is real everywhere (K <= -1)
 */
export function conicFiniteRadiusLimit(R: number, K: number): number | null {
  if (Math.abs(R) > FLAT_R_THRESHOLD) return null;
  const c = 1 / R;
  const factor = (1 + K) * c * c;
  if (factor <= 0) return null;
  return 1 / Math.sqrt(factor);
}

/* ── Profiles ── */

/**
 * Create the geometric profile used by exact tracing for one prepared surface.
 *
 * Tilted interaction normals take precedence because folded flat mirrors are
 * planes even when their authored radius is flat-like.
 *
 * @param surface - authored radius and optional interaction normal
 * @param asphere - optional aspheric coefficients for this surface
 * @returns immutable profile with sag, slope, normal, and point evaluators
 */
export function createSurfaceProfile(
  surface: Pick<SurfaceData, "R" | "interaction">,
  asphere?: AsphericCoefficients,
): SurfaceProfile {
  if (surface.interaction?.normal) {
    return createTiltedPlaneProfile(surface.interaction.normal);
  }
  if (Math.abs(surface.R) > FLAT_R_THRESHOLD && !asphere) {
    return createFlatProfile();
  }
  if (asphere) {
    return createAsphericProfile(surface.R, asphere);
  }
  return createSphericalProfile(surface.R);
}

/**
 * Create a z-normal flat profile.
 *
 * @returns profile with zero sag and a +z surface normal
 */
export function createFlatProfile(): SurfaceProfile {
  return Object.freeze({
    kind: "flat" as const,
    sag: () => 0,
    slope: () => 0,
    evaluate: (_radius: number, out: SagSlope = { sag: 0, slope: 0 }) => {
      out.sag = 0;
      out.slope = 0;
      return out;
    },
    normalAt: () => [0, 0, 1] as Vec3,
    pointAt: (vertexZ: number, x: number, y: number) => [x, y, vertexZ] as Vec3,
    finiteRadiusLimit: () => null,
    curvature: 0,
    conic: 0,
    hasPolynomial: false,
    planeNormal: null,
  });
}

/**
 * Create a spherical surface profile.
 *
 * @param R - signed radius of curvature in mm
 * @returns sag profile using the shared spherical sag equation
 */
export function createSphericalProfile(R: number): SurfaceProfile {
  return Object.freeze({
    kind: "spherical" as const,
    sag: (radius: number) => sag(radius, R),
    slope: (radius: number) => sagSlopeRaw(radius, R, undefined),
    evaluate: (radius: number, out: SagSlope = { sag: 0, slope: 0 }) => sphereEvaluateAt(radius, R, out),
    normalAt: (point: Vec3) => {
      const radius = Math.hypot(point[0], point[1]);
      return normalFromSlope(point[0], point[1], radius, sagSlopeRaw(radius, R, undefined));
    },
    pointAt: (vertexZ: number, x: number, y: number) => [x, y, vertexZ + sag(Math.hypot(x, y), R)] as Vec3,
    finiteRadiusLimit: () => Math.abs(R),
    curvature: baseCurvature(R),
    conic: 0,
    hasPolynomial: false,
    planeNormal: null,
  });
}

/** A cached aspheric profile and the base radius it was built for. */
interface CachedAsphericProfile {
  readonly R: number;
  readonly profile: SurfaceProfile;
}

/**
 * The profile last built for each frozen coefficient object. One entry per object is enough: a surface's
 * coefficients belong to one base radius, and a call with another radius replaces the entry.
 */
const IMMUTABLE_ASPHERIC_PROFILES = new WeakMap<AsphericCoefficients, CachedAsphericProfile>();

/**
 * Create a conic-polynomial aspheric surface profile.
 *
 * Frozen coefficient objects reuse one cached profile, with its Horner vectors and slope bound compiled once;
 * mutable ones get a fresh profile that re-reads the coefficients on every call.
 *
 * @param R - signed base radius in mm
 * @param asphere - conic constant and polynomial coefficients (even A4–A20 plus optional odd A3–A19)
 * @returns sag profile with finite-radius limits derived from the conic domain
 */
export function createAsphericProfile(R: number, asphere: AsphericCoefficients): SurfaceProfile {
  const immutable = Object.isFrozen(asphere);
  const cached = immutable ? IMMUTABLE_ASPHERIC_PROFILES.get(asphere) : undefined;
  if (cached && cached.R === R) return cached.profile;
  const curvature = baseCurvature(R);
  const frozenTerms = immutable ? hornerTerms(asphere) : null;
  const terms = (): HornerTerms => frozenTerms ?? compileHornerTerms(asphere);
  // Nonnegative coefficients of sum |A_p| * p * r^(p-1), indexed by exponent, so the bound is one Horner pass.
  // Mutable coefficient objects are re-read on every call so a bound can never go stale.
  const compileBound = (): Float64Array => {
    const coefficients = new Float64Array(MAX_TERM_POWER);
    for (const term of ASPHERIC_POLYNOMIAL_TERMS) {
      coefficients[term.power - 1] += Math.abs(asphere[term.key] ?? 0) * term.power;
    }
    return coefficients;
  };
  const frozenBound = immutable ? compileBound() : null;
  const slopeBound = (radius: number): number => {
    if (!(Number.isFinite(radius) && radius >= 0)) return Infinity;
    let bound = 0;
    if (Math.abs(R) <= FLAT_R_THRESHOLD) {
      const q = 1 - (1 + asphere.K) * (radius / R) ** 2;
      if (!(q > 1e-12)) return Infinity;
      // |r/R| / sqrt(1-(1+K)(r/R)^2) is increasing for all real conic branches.
      bound = Math.abs(radius / R) / Math.sqrt(q);
    }
    // Horner over nonnegative terms: relative roundoff is far below the 1e-12 slack below.
    const coefficients = frozenBound ?? compileBound();
    let poly = 0;
    for (let exponent = coefficients.length - 1; exponent >= 0; exponent--)
      poly = poly * radius + coefficients[exponent];
    bound += poly;
    // Deliberate floating-point safety slack; doubtful/tangent/domain-edge cases fall back.
    return bound * (1 + 1e-12) + 1e-12;
  };
  const slope = (radius: number): number => conicPolySlopeAt(radius, curvature, asphere.K, terms());
  const profile: SurfaceProfile = Object.freeze({
    kind: "aspheric" as const,
    sag: (radius: number) => conicPolySagAt(radius, curvature, asphere.K, terms()),
    slope,
    evaluate: (radius: number, out: SagSlope = { sag: 0, slope: 0 }) =>
      conicPolyEvaluateAt(radius, curvature, asphere.K, terms(), out),
    normalAt: (point: Vec3) => {
      const radius = Math.hypot(point[0], point[1]);
      return normalFromSlope(point[0], point[1], radius, slope(radius));
    },
    pointAt: (vertexZ: number, x: number, y: number) =>
      [x, y, vertexZ + conicPolySagAt(Math.hypot(x, y), curvature, asphere.K, terms())] as Vec3,
    finiteRadiusLimit: () => conicFiniteRadiusLimit(R, asphere.K),
    maxAbsSlope: slopeBound,
    curvature,
    // Read through, like the evaluators, so this profile never holds stale data. A spread copy can (SurfaceProfile).
    get conic() {
      return asphere.K;
    },
    get hasPolynomial() {
      const { evenSagTop, oddSagTop } = terms();
      return evenSagTop >= 0 || oddSagTop >= 0;
    },
    planeNormal: null,
  });
  if (immutable) IMMUTABLE_ASPHERIC_PROFILES.set(asphere, { R, profile });
  return profile;
}

/**
 * Create a tilted meridional plane profile for fold mirrors and image-plane-like surfaces.
 *
 * The engine stores tilted normals as y/z pairs because current folded fixtures
 * tilt only in the meridional section drawn by the SVG diagram.
 *
 * @param normal - meridional plane normal components
 * @returns plane profile whose sag is solved from n·(p - p0) = 0, as a function of signed y
 */
export function createTiltedPlaneProfile(normal: { z: number; y: number }): SurfaceProfile {
  const unit = normalize([0, normal.y, normal.z]);
  const planeNormal = unit ?? ([0, 0, 1] as Vec3);
  const normalY = planeNormal[1];
  const normalZ = planeNormal[2];
  const zFromY = (vertexZ: number, y: number): number => {
    if (Math.abs(normalZ) <= VECTOR_EPSILON) return vertexZ;
    return vertexZ - (normalY * y) / normalZ;
  };
  const slope = (): number => (Math.abs(normalZ) <= VECTOR_EPSILON ? 0 : -normalY / normalZ);

  return Object.freeze({
    kind: "tilted-plane" as const,
    sag: (radius: number) => zFromY(0, radius),
    slope,
    evaluate: (radius: number, out: SagSlope = { sag: 0, slope: 0 }) => {
      out.sag = zFromY(0, radius);
      out.slope = slope();
      return out;
    },
    normalAt: () => planeNormal,
    pointAt: (vertexZ: number, x: number, y: number) =>
      Math.abs(normalZ) <= VECTOR_EPSILON ? ([x, 0, vertexZ] as Vec3) : ([x, y, zFromY(vertexZ, y)] as Vec3),
    finiteRadiusLimit: () => null,
    curvature: 0,
    conic: 0,
    hasPolynomial: false,
    planeNormal,
  });
}
