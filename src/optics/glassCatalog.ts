/**
 * Optical glass catalog — Sellmeier dispersion coefficients keyed by glass name.
 *
 * Most entries hold the 6 Sellmeier coefficients (B1..B3, C1..C3) plus reference
 * d-line index and Abbe number. Some Hoya/Sumita/Hikari catalog glasses are
 * published only in Zemax polynomial or explicit power-series form; those
 * entries store the vendor coefficients exactly instead of fitting fake
 * Sellmeier coefficients.
 *
 * Sellmeier dispersion formula (vendor standard form):
 *   n²(λ) = 1 + B1·λ²/(λ²−C1) + B2·λ²/(λ²−C2) + B3·λ²/(λ²−C3)
 *   where λ is in micrometres and C1..C3 are in micrometres².
 *
 * Coverage status: current source count 339 entries. See agent_docs/glass-catalog-buildout.md
 * for the addition history and sourcing playbook.
 *
 * All coefficients are vendor-published physical measurements. Each entry
 * cites its source. Verify by computing n at 587.5618 nm (d-line) and checking
 * agreement with the listed `nd` to within ~1e-5.
 */

import { ALIASES } from "./glassCatalogAliases.js";
import { DUPLICATE_CODE6_PRECEDENCE, RAW_CATALOG } from "./glassCatalogData.js";
import type { GlassEntry } from "./glassCatalogTypes.js";
import { LINE_NM } from "./spectralLines.js";

export type { GlassEntry } from "./glassCatalogTypes.js";
export { LINE_NM } from "./spectralLines.js";

/**
 * Evaluate the Sellmeier formula at wavelength λ (nm) for a catalog entry.
 * Returns the refractive index n(λ).
 */
export function evaluateSellmeier(entry: GlassEntry, lambdaNm: number): number {
  const lUm = lambdaNm / 1000;
  const l2 = lUm * lUm;
  if (entry.polynomial) {
    const [a0, a1, a2, a3, a4, a5] = entry.polynomial;
    const inv2 = 1 / l2;
    const n2 = a0 + a1 * l2 + a2 * inv2 + a3 * inv2 * inv2 + a4 * inv2 ** 3 + a5 * inv2 ** 4;
    return Math.sqrt(n2);
  }
  if (entry.powerSeries) {
    const n2 = entry.powerSeries.reduce((sum, [coefficient, exponent]) => sum + coefficient * lUm ** exponent, 0);
    return Math.sqrt(n2);
  }
  if (!entry.B || !entry.C) {
    throw new Error(`Glass catalog entry ${entry.name} has no supported dispersion coefficients.`);
  }
  const [B1, B2, B3] = entry.B;
  const [C1, C2, C3] = entry.C;
  const n2 = 1 + (B1 * l2) / (l2 - C1) + (B2 * l2) / (l2 - C2) + (B3 * l2) / (l2 - C3);
  return Math.sqrt(n2);
}

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

/** Map of 6-digit Schott codes to canonical names. */
const CODE6_INDEX: ReadonlyMap<string, string> = (() => {
  const map = new Map<string, string>(DUPLICATE_CODE6_PRECEDENCE);
  for (const entry of RAW_CATALOG) {
    if (entry.code6 && !map.has(entry.code6)) map.set(entry.code6, entry.name);
  }
  return map;
})();

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Resolve a real-world `glass` string from a lens-data file to a catalog entry.
 *
 * Lens-data glass strings are messy. Examples we handle:
 *   "N-BK7"
 *   "S-LAH79 (OHARA) probable"
 *   "BK7 (Schott) / S-BSL7 (OHARA)"
 *   "851408 — S-LAH65V (OHARA)"
 *   "517642 — N-BK7 (Schott)"
 *   "Dense flint (770/297)"
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
  const tokens: string[] = [...(glassString.match(/[A-Za-z][A-Za-z0-9-]*\d[A-Za-z0-9]*|\d{6}/g) ?? [])];
  for (const match of glassString.matchAll(/(^|[^\d])(\d{3})\s*[/-]\s*(\d{3})(?!\d)/g)) {
    tokens.push(`${match[2]}${match[3]}`);
  }
  const upperGlassString = glassString.toUpperCase();
  for (const alias of ALIASES.keys()) {
    if (tokens.some((token) => token.toUpperCase() === alias)) continue;
    if (new RegExp(`(^|[^A-Z0-9-])${escapeRegExp(alias)}(?=$|[^A-Z0-9-])`).test(upperGlassString)) {
      tokens.push(alias);
    }
  }
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
