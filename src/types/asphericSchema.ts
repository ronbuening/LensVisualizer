/**
 * Aspheric coefficient schema — the single source of truth for which
 * conic/polynomial coefficients exist, their sag powers, and whether lens
 * data must author them.
 *
 * The `AsphericCoefficients` type, `validateLensData`'s required/optional/
 * known-key checks, the sag/slope evaluation in `internal/surfaceMath.ts`,
 * and the descriptor-driven term-isolation tests all derive from this list.
 * Adding a coefficient here is the only step needed to extend the schema
 * everywhere at once.
 *
 * Odd-order coefficients apply in the radial height h >= 0, so they stay
 * rotationally symmetric. They are optional — omitted when the patent does
 * not list them.
 */

/** One coefficient in the aspheric schema. */
export interface AsphericCoefficientDescriptor {
  /** Field name in lens data, e.g. "K" or "A4". */
  readonly key: string;
  /** "conic" for K (handled outside polynomial evaluation), else "polynomial". */
  readonly kind: "conic" | "polynomial";
  /** Power of h this term multiplies in the sag polynomial (0 for the conic K). */
  readonly power: number;
  /** Term parity; even and odd terms accumulate in separate sums. */
  readonly parity: "even" | "odd";
  /** Whether lens data must author the field explicitly. */
  readonly required: boolean;
}

/**
 * Ordered coefficient descriptors. Within each parity, list order IS the
 * accumulation order used by `conicPolySag` / `sagSlopeRaw` — do not reorder
 * without re-verifying the golden trace suite, because float addition is not
 * associative.
 */
export const ASPHERIC_COEFFICIENT_SCHEMA = [
  { key: "K", kind: "conic", power: 0, parity: "even", required: true },
  { key: "A4", kind: "polynomial", power: 4, parity: "even", required: true },
  { key: "A6", kind: "polynomial", power: 6, parity: "even", required: true },
  { key: "A8", kind: "polynomial", power: 8, parity: "even", required: true },
  { key: "A10", kind: "polynomial", power: 10, parity: "even", required: true },
  { key: "A12", kind: "polynomial", power: 12, parity: "even", required: true },
  { key: "A14", kind: "polynomial", power: 14, parity: "even", required: true },
  { key: "A16", kind: "polynomial", power: 16, parity: "even", required: false },
  { key: "A18", kind: "polynomial", power: 18, parity: "even", required: false },
  { key: "A20", kind: "polynomial", power: 20, parity: "even", required: false },
  { key: "A3", kind: "polynomial", power: 3, parity: "odd", required: false },
  { key: "A5", kind: "polynomial", power: 5, parity: "odd", required: false },
  { key: "A7", kind: "polynomial", power: 7, parity: "odd", required: false },
  { key: "A9", kind: "polynomial", power: 9, parity: "odd", required: false },
  { key: "A11", kind: "polynomial", power: 11, parity: "odd", required: false },
  { key: "A13", kind: "polynomial", power: 13, parity: "odd", required: false },
  { key: "A15", kind: "polynomial", power: 15, parity: "odd", required: false },
  { key: "A17", kind: "polynomial", power: 17, parity: "odd", required: false },
  { key: "A19", kind: "polynomial", power: 19, parity: "odd", required: false },
] as const;

type SchemaEntry = (typeof ASPHERIC_COEFFICIENT_SCHEMA)[number];

/** Polynomial-only descriptors in accumulation order (excludes the conic K). */
export type AsphericPolynomialDescriptor = Extract<SchemaEntry, { kind: "polynomial" }>;

/** Polynomial descriptors in accumulation order (excludes the conic K). */
export const ASPHERIC_POLYNOMIAL_TERMS: readonly AsphericPolynomialDescriptor[] = ASPHERIC_COEFFICIENT_SCHEMA.filter(
  (descriptor): descriptor is AsphericPolynomialDescriptor => descriptor.kind === "polynomial",
);

type RequiredAsphericKey = Extract<SchemaEntry, { required: true }>["key"];
type OptionalAsphericKey = Extract<SchemaEntry, { required: false }>["key"];

/**
 * Conic constant plus polynomial coefficients for one aspheric surface.
 * Required/optional membership is derived from the schema list above.
 */
export type AsphericCoefficients = Record<RequiredAsphericKey, number> & Partial<Record<OptionalAsphericKey, number>>;
