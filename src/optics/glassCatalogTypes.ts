/**
 * Shared optical glass catalog data types.
 */

/** A single entry in the glass catalog. */
export interface GlassEntry {
  /** Vendor-canonical glass name, e.g. "N-BK7", "S-FPL51". */
  readonly name: string;
  /** Vendor (Schott, Ohara, Hoya, Hikari, Sumita, CDGM, NHG, special). */
  readonly vendor: "Schott" | "Ohara" | "Hoya" | "Hikari" | "Sumita" | "CDGM" | "NHG" | "Special";
  /** Sellmeier B1, B2, B3 coefficients. */
  readonly B?: readonly [number, number, number];
  /** Sellmeier C1, C2, C3 coefficients (micrometers squared). */
  readonly C?: readonly [number, number, number];
  /**
   * Zemax formula 3 polynomial coefficients:
   * n² = a0 + a1·λ² + a2·λ⁻² + a3·λ⁻⁴ + a4·λ⁻⁶ + a5·λ⁻⁸.
   */
  readonly polynomial?: readonly [number, number, number, number, number, number];
  /**
   * Explicit power-series terms for formula-3 entries whose published exponents
   * do not fit the fixed six-slot polynomial shorthand.
   */
  readonly powerSeries?: readonly (readonly [coefficient: number, exponent: number])[];
  /** Reference d-line index (587.5618 nm). For sanity-check / display. */
  readonly nd: number;
  /** Reference Abbe number vd. For sanity-check / display. */
  readonly vd: number;
  /** Reference partial dispersion P_g,F (optional, when vendor publishes it). */
  readonly PgF?: number;
  /** Optional six-digit Schott-style code "nnn vvv" without space, e.g. "517642" for N-BK7. */
  readonly code6?: string;
  /** Source citation for the dispersion coefficients. */
  readonly source: string;
}
