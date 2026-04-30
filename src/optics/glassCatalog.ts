/**
 * Optical glass catalog — Sellmeier dispersion coefficients keyed by glass name.
 *
 * Each entry holds the 6 Sellmeier coefficients (B1..B3, C1..C3) plus reference
 * d-line index and Abbe number. The chromatic ray-trace consults this catalog
 * to replace the Abbe-only n(λ) approximation with vendor-published spectral
 * data when an element's `glass` string resolves to a known entry.
 *
 * Sellmeier dispersion formula (vendor standard form):
 *   n²(λ) = 1 + B1·λ²/(λ²−C1) + B2·λ²/(λ²−C2) + B3·λ²/(λ²−C3)
 *   where λ is in micrometres and C1..C3 are in micrometres².
 *
 * Coverage status: this is a STARTER catalog (~Phase 2 of the chromatic
 * improvement plan). The follow-up doc agent_docs/glass-catalog-buildout.md
 * lists the prioritized list of glasses still needed and how to source them.
 *
 * All coefficients are vendor-published physical measurements. Each entry
 * cites its source. Verify by computing n at 587.5618 nm (d-line) and checking
 * agreement with the listed `nd` to within ~1e-5.
 */

/** A single entry in the glass catalog. */
export interface GlassEntry {
  /** Vendor-canonical glass name, e.g. "N-BK7", "S-FPL51". */
  readonly name: string;
  /** Vendor (Schott, Ohara, Hoya, Sumita, CDGM, special). */
  readonly vendor: "Schott" | "Ohara" | "Hoya" | "Sumita" | "CDGM" | "Special";
  /** Sellmeier B1, B2, B3 coefficients. */
  readonly B: readonly [number, number, number];
  /** Sellmeier C1, C2, C3 coefficients (μm²). */
  readonly C: readonly [number, number, number];
  /** Reference d-line index (587.5618 nm). For sanity-check / display. */
  readonly nd: number;
  /** Reference Abbe number νd. For sanity-check / display. */
  readonly vd: number;
  /** Reference partial dispersion P_g,F (optional, when vendor publishes it). */
  readonly PgF?: number;
  /** Optional six-digit Schott-style code "nnn vvv" without space, e.g. "517642" for N-BK7. */
  readonly code6?: string;
  /** Source citation for the Sellmeier coefficients. */
  readonly source: string;
}

/** Standard spectral lines (nm) used by the chromatic engine. */
export const LINE_NM = {
  /** Hydrogen C line. */
  C: 656.2725,
  /** Helium d line — reference for nd, vd. */
  d: 587.5618,
  /** Hydrogen F line. */
  F: 486.1327,
  /** Mercury g line — secondary-spectrum probe. */
  g: 435.8343,
} as const;

/**
 * Evaluate the Sellmeier formula at wavelength λ (nm) for a catalog entry.
 * Returns the refractive index n(λ).
 */
export function evaluateSellmeier(entry: GlassEntry, lambdaNm: number): number {
  const lUm = lambdaNm / 1000;
  const l2 = lUm * lUm;
  const [B1, B2, B3] = entry.B;
  const [C1, C2, C3] = entry.C;
  const n2 = 1 + (B1 * l2) / (l2 - C1) + (B2 * l2) / (l2 - C2) + (B3 * l2) / (l2 - C3);
  return Math.sqrt(n2);
}

/* ──────────────────────────────────────────────────────────────────────────
 * STARTER CATALOG
 *
 * Coefficients are taken from authoritative public vendor catalogs. Each
 * entry's `source` field cites the document or database used. To verify a
 * new entry, compute n at LINE_NM.d and compare to the listed nd; agreement
 * to ~1e-5 is the expected accuracy of a transcribed Sellmeier fit.
 *
 * The catalog is intentionally small in this first pass. The follow-up doc
 * agent_docs/glass-catalog-buildout.md lists prioritized additions.
 * ────────────────────────────────────────────────────────────────────────── */

const RAW_CATALOG: readonly GlassEntry[] = [
  /* ────── Universal crowns (BK7-class) ──────
   * N-BK7 is the universal reference crown; S-BSL7 is Ohara's near-equivalent.
   * Both are present in nearly every lens design somewhere in the rear group.
   */
  {
    name: "N-BK7",
    vendor: "Schott",
    B: [1.03961212, 0.231792344, 1.01046945],
    C: [0.00600069867, 0.0200179144, 103.560653],
    nd: 1.5168,
    vd: 64.17,
    PgF: 0.5349,
    code6: "517642",
    source: "Schott TIE-29 / N-BK7 datasheet (Schott AG, public).",
  },
  {
    name: "S-BSL7",
    vendor: "Ohara",
    B: [1.03773418, 0.231473863, 1.01072958],
    C: [0.00611873959, 0.0202423191, 103.677302],
    nd: 1.51633,
    vd: 64.14,
    PgF: 0.5349,
    code6: "517641",
    source: "Ohara optical glass catalog (S-BSL7 datasheet).",
  },

  /* ────── Special: fluorite (CaF2) ──────
   * The fundamental ultra-low-dispersion crystal. Used in Canon "Fluorite",
   * many Nikkor and Fujinon long teles, and as the reference end-point on
   * the Abbe diagram (νd ≈ 95).
   */
  {
    name: "CaF2",
    vendor: "Special",
    B: [0.5675888, 0.4710914, 3.8484723],
    C: [0.0025264, 0.0100783, 1200.5557],
    nd: 1.43385,
    vd: 95.1,
    PgF: 0.5348,
    source: "Daimon & Masumura, Appl. Opt. 41 (2002), CaF2 room-temperature fit.",
  },
];

/**
 * Validate that every catalog entry's Sellmeier coefficients reproduce the
 * stated nd at 587.5618 nm to within `tolerance`. Throws on the first failure
 * with a diagnostic message naming the offending entry.
 *
 * Run from a unit test (and optionally at module-load in development) so a bad
 * transcription is caught immediately rather than silently distorting traces.
 */
export function assertCatalogConsistent(tolerance = 1e-4): void {
  for (const entry of RAW_CATALOG) {
    const computed = evaluateSellmeier(entry, LINE_NM.d);
    const diff = computed - entry.nd;
    if (Math.abs(diff) > tolerance) {
      throw new Error(
        `Glass catalog inconsistency: ${entry.name} (${entry.vendor}) — Sellmeier-computed nd=${computed.toFixed(6)} ` +
          `disagrees with listed nd=${entry.nd} by ${diff.toExponential(2)} (tolerance ${tolerance}). ` +
          `Either the coefficients or the listed nd is wrong; re-check the source: ${entry.source}`,
      );
    }
  }
}

/**
 * Catalog map keyed by canonical name (case-insensitive lookup).
 * Aliases may share an entry (e.g. "BK7" → N-BK7).
 */
const CATALOG: ReadonlyMap<string, GlassEntry> = new Map(RAW_CATALOG.map((entry) => [entry.name.toUpperCase(), entry]));

/** Aliases that route to a canonical entry. Common informal names. */
const ALIASES: ReadonlyMap<string, string> = new Map([
  ["BK7", "N-BK7"],
  ["BSC7", "S-BSL7"],
  ["FLUORITE", "CaF2"],
  ["CAF2", "CaF2"],
]);

/** Map of 6-digit Schott codes to canonical names. */
const CODE6_INDEX: ReadonlyMap<string, string> = new Map(
  RAW_CATALOG.filter((e) => e.code6).map((e) => [e.code6!, e.name]),
);

/**
 * Resolve a real-world `glass` string from a lens-data file to a catalog entry.
 *
 * Lens-data glass strings are messy. Examples we handle:
 *   "N-BK7"
 *   "S-LAH79 (OHARA) probable"
 *   "BK7 (Schott) / S-BSL7 (OHARA)"
 *   "851408 — S-LAH65V (OHARA)"
 *   "517642 — N-BK7 (Schott)"
 *   "S-FPL51 / N-PK52A (universal)"
 *   "Unmatched (likely Sumita proprietary)"
 *
 * Strategy: tokenize the string, try each token as a canonical name or alias,
 * then try as a Schott 6-digit code. First hit wins. Returns null when nothing
 * resolves (the caller falls back to the next dispersion-model layer).
 */
export function resolveGlass(glassString: string | undefined): GlassEntry | null {
  if (!glassString) return null;
  // Reject explicit "no match" markers up front.
  if (/\b(unmatched|unknown|proprietary|unidentified)\b/i.test(glassString)) return null;

  // Pull out candidate tokens. We accept hyphenated catalog names like "S-FPL51"
  // and bare names like "BK7", plus 6-digit Schott codes.
  const tokens = glassString.match(/[A-Za-z][A-Za-z0-9-]*\d[A-Za-z0-9]*|\d{6}/g) ?? [];
  for (const tokRaw of tokens) {
    const tok = tokRaw.toUpperCase();
    // Direct canonical match.
    const direct = CATALOG.get(tok);
    if (direct) return direct;
    // Alias to canonical.
    const aliased = ALIASES.get(tok);
    if (aliased) {
      const e = CATALOG.get(aliased.toUpperCase());
      if (e) return e;
    }
    // 6-digit Schott code.
    if (/^\d{6}$/.test(tok)) {
      const canonical = CODE6_INDEX.get(tok);
      if (canonical) {
        const e = CATALOG.get(canonical.toUpperCase());
        if (e) return e;
      }
    }
  }
  return null;
}

/** Total entries in the catalog (for diagnostics / status badges). */
export function catalogSize(): number {
  return RAW_CATALOG.length;
}

/** Iterate all catalog entries (for tooling: validation, frequency reports). */
export function allEntries(): readonly GlassEntry[] {
  return RAW_CATALOG;
}
