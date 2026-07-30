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
 * Coverage status: current source count 434 entries. See agent_docs/glass-catalog-buildout.md
 * for the addition history and sourcing playbook.
 *
 * All coefficients are vendor-published physical measurements. Each entry
 * cites its source. Catalog validation checks d-line index, Abbe number,
 * spectral ordering, and the encoded coordinate when a six-digit code exists.
 */

import { ALIASES } from "./glassCatalogAliases.js";
import { DUPLICATE_CODE6_PRECEDENCE, RAW_CATALOG } from "./glassCatalogData.js";
import type { GlassEntry } from "./glassCatalogTypes.js";
import { LINE_NM } from "./spectralLines.js";
import type { RefractiveIndexReferenceLine } from "../types/optics.js";

export type { GlassEntry } from "./glassCatalogTypes.js";
export { LINE_NM } from "./spectralLines.js";

/** Maximum accepted d- or e-line index delta between authored lens data and a catalog entry. */
export const GLASS_ND_TOLERANCE = 3e-3;

/** Maximum accepted catalog d-line round-trip error. */
export const GLASS_CATALOG_ND_TOLERANCE = 1e-4;

/** Maximum accepted catalog Abbe-number round-trip error. */
export const GLASS_CATALOG_VD_TOLERANCE = 0.15;

/**
 * Maximum accepted Abbe-number delta between authored lens data and a catalog entry.
 *
 * Patent tables commonly round Abbe numbers more heavily than reference indices. A two-point window still
 * accommodates ordinary tabular rounding while rejecting nearby glasses from
 * meaningfully different dispersion families.
 */
export const GLASS_VD_TOLERANCE = 2;

export interface CatalogGlassCompatibility {
  readonly compatible: boolean;
  readonly referenceLine: RefractiveIndexReferenceLine;
  /** Catalog index evaluated at the authored d or e reference line. */
  readonly catalogIndex: number;
  /** Catalog index minus the authored reference index. */
  readonly indexDiff: number;
  /** Catalog Abbe number minus the authored vd or ve. */
  readonly abbeDiff: number | null;
  /** @deprecated Use catalogIndex. Kept for report compatibility. */
  readonly catalogNd: number;
  /** @deprecated Use indexDiff. Kept for report compatibility. */
  readonly ndDiff: number;
  /** @deprecated Use abbeDiff. Kept for report compatibility. */
  readonly vdDiff: number | null;
}

export type GlassResolutionMatchSource = "name" | "alias" | "code";
export type GlassResolutionCriterion =
  | "none"
  | "only-compatible"
  | "source-priority"
  | "vendor-context"
  | "index-residual"
  | "abbe-residual"
  | "token-order"
  | "duplicate-code-precedence"
  | "canonical-name-order";

/** One coordinate-compatible resolver candidate with its diagnostic ranking evidence. */
export interface CompatibleGlassCandidate {
  readonly entry: GlassEntry;
  readonly compatibility: CatalogGlassCompatibility;
  readonly source: GlassResolutionMatchSource;
  readonly matchedToken: string;
  readonly tokenRank: number;
  /** `null` means the annotation did not name any catalog vendor. */
  readonly vendorMatch: boolean | null;
  /** Only meaningful for duplicate six-digit-code candidates. */
  readonly legacyCodePreferred: boolean | null;
}

/** Full diagnostic explanation for coordinate-aware glass resolution. */
export interface CompatibleGlassResolution {
  readonly selected: GlassEntry | null;
  readonly candidates: readonly CompatibleGlassCandidate[];
  readonly criterion: GlassResolutionCriterion;
  readonly reason: string;
}

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

interface ReferenceCoordinateWavelengths {
  readonly reference: number;
  readonly red: number;
  readonly blue: number;
}

const REFERENCE_COORDINATE_WAVELENGTHS: Readonly<Record<RefractiveIndexReferenceLine, ReferenceCoordinateWavelengths>> =
  {
    d: { reference: LINE_NM.d, red: LINE_NM.C, blue: LINE_NM.F },
    e: { reference: LINE_NM.e, red: LINE_NM.CPrime, blue: LINE_NM.FPrime },
  };

/** Compute vd or ve directly from an entry's published dispersion coefficients. */
export function evaluateCatalogAbbeNumber(
  entry: GlassEntry,
  referenceLine: RefractiveIndexReferenceLine = "d",
): number {
  const wavelengths = REFERENCE_COORDINATE_WAVELENGTHS[referenceLine];
  const nRed = evaluateSellmeier(entry, wavelengths.red);
  const nReference = evaluateSellmeier(entry, wavelengths.reference);
  const nBlue = evaluateSellmeier(entry, wavelengths.blue);
  return (nReference - 1) / (nBlue - nRed);
}

/**
 * Check whether a catalog glass is compatible with an authored refractive-index pair.
 *
 * Catalog entries store d-line summary coordinates, but their published
 * coefficients can also reproduce native e-line coordinates. Compatibility
 * therefore compares nd/vd at C/d/F or ne/ve at C′/e/F′ as authored.
 *
 * A reference index alone is not enough to identify a dispersion curve: different glass
 * families can share nearly the same d-line index while having very different
 * Abbe numbers. When the lens data includes an Abbe number, require both
 * coordinates at the same reference line.
 */
export function assessCatalogGlassCompatibility(
  entry: GlassEntry,
  storedNd: number,
  storedVd: number | undefined,
  referenceLine: RefractiveIndexReferenceLine = "d",
): CatalogGlassCompatibility {
  const wavelengths = REFERENCE_COORDINATE_WAVELENGTHS[referenceLine];
  const catalogIndex = evaluateSellmeier(entry, wavelengths.reference);
  const catalogAbbe = referenceLine === "d" ? entry.vd : evaluateCatalogAbbeNumber(entry, "e");
  const indexDiff = catalogIndex - storedNd;
  const abbeDiff = storedVd === undefined ? null : catalogAbbe - storedVd;
  return {
    compatible:
      Math.abs(indexDiff) <= GLASS_ND_TOLERANCE && (abbeDiff === null || Math.abs(abbeDiff) <= GLASS_VD_TOLERANCE),
    referenceLine,
    catalogIndex,
    indexDiff,
    abbeDiff,
    catalogNd: catalogIndex,
    ndDiff: indexDiff,
    vdDiff: abbeDiff,
  };
}

/**
 * Validate that every catalog entry's coefficients reproduce the stated nd and
 * νd, produce normally ordered visible-line indices, and agree with any listed
 * six-digit coordinate. Throws on the first failure with a diagnostic message
 * naming the offending entry.
 *
 * Run from a unit test (and optionally at module-load in development) so a bad
 * transcription is caught immediately rather than silently distorting traces.
 */
export function assertCatalogConsistent(
  ndTolerance = GLASS_CATALOG_ND_TOLERANCE,
  vdTolerance = GLASS_CATALOG_VD_TOLERANCE,
): void {
  for (const entry of RAW_CATALOG) {
    const nC = evaluateSellmeier(entry, LINE_NM.C);
    const nd = evaluateSellmeier(entry, LINE_NM.d);
    const nF = evaluateSellmeier(entry, LINE_NM.F);
    const ng = evaluateSellmeier(entry, LINE_NM.g);
    const indices = [nC, nd, nF, ng];
    if (!indices.every((value) => Number.isFinite(value) && value > 1) || !(nC < nd && nd < nF && nF < ng)) {
      throw new Error(
        `Glass catalog inconsistency: ${entry.name} (${entry.vendor}) does not produce finite, normally ordered ` +
          `C/d/F/g indices. Re-check the coefficient formula and wavelength units: ${entry.source}`,
      );
    }

    const ndDiff = nd - entry.nd;
    if (Math.abs(ndDiff) > ndTolerance) {
      throw new Error(
        `Glass catalog inconsistency: ${entry.name} (${entry.vendor}) — computed nd=${nd.toFixed(6)} ` +
          `disagrees with listed nd=${entry.nd} by ${ndDiff.toExponential(2)} (tolerance ${ndTolerance}). ` +
          `Either the coefficients or the listed nd is wrong; re-check the source: ${entry.source}`,
      );
    }

    const computedVd = (nd - 1) / (nF - nC);
    const vdDiff = computedVd - entry.vd;
    if (Math.abs(vdDiff) > vdTolerance) {
      throw new Error(
        `Glass catalog inconsistency: ${entry.name} (${entry.vendor}) — computed vd=${computedVd.toFixed(4)} ` +
          `disagrees with listed vd=${entry.vd} by ${vdDiff.toFixed(4)} (tolerance ${vdTolerance}). ` +
          `Either the coefficients or the listed vd is wrong; re-check the source: ${entry.source}`,
      );
    }

    if (entry.code6) {
      const encodedIndex = Number(entry.code6.slice(0, 3));
      const encodedNd = (encodedIndex < 300 ? 2 : 1) + encodedIndex / 1000;
      const encodedVd = Number(entry.code6.slice(3)) / 10;
      if (Math.abs(entry.nd - encodedNd) > 0.0015 || Math.abs(entry.vd - encodedVd) > 0.15) {
        throw new Error(
          `Glass catalog inconsistency: ${entry.name} (${entry.vendor}) — code ${entry.code6} encodes ` +
            `approximately ${encodedNd.toFixed(3)} / ${encodedVd.toFixed(1)}, not listed ${entry.nd} / ${entry.vd}. ` +
            `Re-check the code or catalog coordinates: ${entry.source}`,
        );
      }
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

/** All vendor rows for each six-digit coordinate, including intentional cross-vendor duplicates. */
const CODE6_CANDIDATES: ReadonlyMap<string, readonly GlassEntry[]> = (() => {
  const map = new Map<string, GlassEntry[]>();
  for (const entry of RAW_CATALOG) {
    if (!entry.code6) continue;
    map.set(entry.code6, [...(map.get(entry.code6) ?? []), entry]);
  }
  return map;
})();

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function glassTokens(glassString: string): string[] {
  const tokens = [...(glassString.match(/[A-Za-z][A-Za-z0-9-]*\d[A-Za-z0-9-]*|\d{6}/g) ?? [])];
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
  return tokens;
}

interface GlassCandidateMatch {
  readonly entry: GlassEntry;
  readonly source: GlassResolutionMatchSource;
  readonly matchedToken: string;
  readonly sourceRank: number;
  readonly tokenRank: number;
  readonly vendorRank: number;
  readonly vendorMatch: boolean | null;
  readonly legacyPreferenceRank: number;
}

const GLASS_MATCH_SOURCE_RANK: Readonly<Record<GlassResolutionMatchSource, number>> = {
  name: 0,
  alias: 1,
  code: 2,
};

function candidateMatches(glassString: string): GlassCandidateMatch[] {
  if (/\b(unmatched|unknown|proprietary|unidentified)\b/i.test(glassString)) return [];

  const upperGlassString = glassString.toUpperCase();
  const mentionedVendors = new Set(
    RAW_CATALOG.map((entry) => entry.vendor).filter((vendor) => upperGlassString.includes(vendor.toUpperCase())),
  );
  const bestByName = new Map<string, GlassCandidateMatch>();
  const add = (
    entry: GlassEntry,
    source: GlassResolutionMatchSource,
    matchedToken: string,
    tokenRank: number,
    legacyPreferenceRank = 0,
  ): void => {
    const vendorMatch = mentionedVendors.size === 0 ? null : mentionedVendors.has(entry.vendor);
    const match: GlassCandidateMatch = {
      entry,
      source,
      matchedToken,
      sourceRank: GLASS_MATCH_SOURCE_RANK[source],
      tokenRank,
      vendorRank: vendorMatch === false ? 1 : 0,
      vendorMatch,
      legacyPreferenceRank,
    };
    const existing = bestByName.get(entry.name);
    if (
      !existing ||
      match.sourceRank < existing.sourceRank ||
      (match.sourceRank === existing.sourceRank && match.vendorRank < existing.vendorRank) ||
      (match.sourceRank === existing.sourceRank &&
        match.vendorRank === existing.vendorRank &&
        match.tokenRank < existing.tokenRank) ||
      (match.sourceRank === existing.sourceRank &&
        match.vendorRank === existing.vendorRank &&
        match.tokenRank === existing.tokenRank &&
        match.legacyPreferenceRank < existing.legacyPreferenceRank)
    ) {
      bestByName.set(entry.name, match);
    }
  };

  for (const [tokenRank, tokRaw] of glassTokens(glassString).entries()) {
    const tok = tokRaw.toUpperCase();
    const candidates = [tok];
    for (let hyphen = tok.lastIndexOf("-"); hyphen > 0; hyphen = tok.lastIndexOf("-", hyphen - 1)) {
      candidates.push(tok.slice(0, hyphen));
    }
    for (const candidate of candidates) {
      const direct = CATALOG.get(candidate);
      if (direct) add(direct, "name", candidate, tokenRank);
      const aliased = ALIASES.get(candidate);
      if (aliased) {
        const entry = CATALOG.get(aliased.toUpperCase());
        if (entry) add(entry, "alias", candidate, tokenRank);
      }
    }
    if (/^\d{6}$/.test(tok)) {
      const codeEntries = CODE6_CANDIDATES.get(tok) ?? [];
      const preferredName = CODE6_INDEX.get(tok);
      for (const entry of codeEntries) {
        add(entry, "code", tok, tokenRank, entry.name === preferredName ? 0 : 1);
      }
    }
  }

  return [...bestByName.values()];
}

/**
 * Resolve every catalog candidate named or encoded by a real-world glass string.
 *
 * This is useful for diagnostics that need to explain ambiguity. Runtime callers
 * should normally use `resolveCompatibleGlass`, which also considers authored
 * optical coordinates.
 */
export function resolveGlassCandidates(glassString: string | undefined): readonly GlassEntry[] {
  if (!glassString) return [];
  return candidateMatches(glassString)
    .sort(
      (a, b) =>
        a.sourceRank - b.sourceRank ||
        a.vendorRank - b.vendorRank ||
        a.tokenRank - b.tokenRank ||
        a.legacyPreferenceRank - b.legacyPreferenceRank ||
        a.entry.name.localeCompare(b.entry.name),
    )
    .map(({ entry }) => entry);
}

interface RankedCompatibleGlassCandidate extends GlassCandidateMatch {
  readonly compatibility: CatalogGlassCompatibility;
}

function compatibleCandidateMatches(
  glassString: string,
  storedNd: number,
  storedVd: number | undefined,
  referenceLine: RefractiveIndexReferenceLine,
): RankedCompatibleGlassCandidate[] {
  return candidateMatches(glassString)
    .filter((match) => referenceLine === "d" || match.source !== "code")
    .map((match) => ({
      ...match,
      compatibility: assessCatalogGlassCompatibility(match.entry, storedNd, storedVd, referenceLine),
    }))
    .filter(({ compatibility }) => compatibility.compatible)
    .sort(
      (a, b) =>
        a.sourceRank - b.sourceRank ||
        a.vendorRank - b.vendorRank ||
        Math.abs(a.compatibility.indexDiff) - Math.abs(b.compatibility.indexDiff) ||
        Math.abs(a.compatibility.abbeDiff ?? 0) - Math.abs(b.compatibility.abbeDiff ?? 0) ||
        a.tokenRank - b.tokenRank ||
        a.legacyPreferenceRank - b.legacyPreferenceRank ||
        a.entry.name.localeCompare(b.entry.name),
    );
}

function glassMatchSourceLabel(source: GlassResolutionMatchSource): string {
  if (source === "name") return "direct name";
  if (source === "alias") return "alias";
  return "six-digit code";
}

function candidateSelectionReason(candidates: readonly RankedCompatibleGlassCandidate[]): {
  criterion: GlassResolutionCriterion;
  reason: string;
} {
  const selected = candidates[0];
  if (!selected) return { criterion: "none", reason: "No coordinate-compatible catalog candidate." };
  if (candidates.length === 1) {
    return { criterion: "only-compatible", reason: "Only coordinate-compatible catalog candidate." };
  }

  const runnerUp = candidates[1];
  if (selected.sourceRank !== runnerUp.sourceRank) {
    return {
      criterion: "source-priority",
      reason: `${glassMatchSourceLabel(selected.source)} evidence outranks ${glassMatchSourceLabel(runnerUp.source)} evidence.`,
    };
  }
  if (selected.vendorRank !== runnerUp.vendorRank) {
    return { criterion: "vendor-context", reason: `Annotation vendor context matches ${selected.entry.vendor}.` };
  }

  const selectedIndexResidual = Math.abs(selected.compatibility.indexDiff);
  const runnerUpIndexResidual = Math.abs(runnerUp.compatibility.indexDiff);
  if (selectedIndexResidual !== runnerUpIndexResidual) {
    const referenceLine = selected.compatibility.referenceLine;
    return {
      criterion: "index-residual",
      reason:
        (referenceLine === "d" ? "Smallest d-line residual " : `Smallest ${referenceLine}-line index residual `) +
        `(${selectedIndexResidual.toFixed(9)} vs ${runnerUpIndexResidual.toFixed(9)}).`,
    };
  }

  const selectedAbbeResidual = Math.abs(selected.compatibility.abbeDiff ?? 0);
  const runnerUpAbbeResidual = Math.abs(runnerUp.compatibility.abbeDiff ?? 0);
  if (selectedAbbeResidual !== runnerUpAbbeResidual) {
    return {
      criterion: "abbe-residual",
      reason: `Smallest Abbe-number residual (${selectedAbbeResidual.toFixed(4)} vs ${runnerUpAbbeResidual.toFixed(4)}).`,
    };
  }
  if (selected.tokenRank !== runnerUp.tokenRank) {
    return {
      criterion: "token-order",
      reason: `Earlier annotation token (${selected.matchedToken} before ${runnerUp.matchedToken}).`,
    };
  }
  if (selected.legacyPreferenceRank !== runnerUp.legacyPreferenceRank) {
    return {
      criterion: "duplicate-code-precedence",
      reason: "Configured duplicate-code precedence breaks an otherwise equal match.",
    };
  }
  return {
    criterion: "canonical-name-order",
    reason: `Stable canonical-name ordering breaks an otherwise equal match (${selected.entry.name} before ${runnerUp.entry.name}).`,
  };
}

/**
 * Explain every coordinate-compatible candidate and why the resolver selected the first one.
 *
 * Generated audits use this rather than duplicating runtime ranking rules.
 */
export function explainCompatibleGlassResolution(
  glassString: string | undefined,
  storedNd: number,
  storedVd: number | undefined,
  referenceLine: RefractiveIndexReferenceLine = "d",
): CompatibleGlassResolution {
  if (!glassString) {
    return { selected: null, candidates: [], criterion: "none", reason: "No glass annotation." };
  }
  const ranked = compatibleCandidateMatches(glassString, storedNd, storedVd, referenceLine);
  const selection = candidateSelectionReason(ranked);
  return {
    selected: ranked[0]?.entry ?? null,
    candidates: ranked.map((candidate) => ({
      entry: candidate.entry,
      compatibility: candidate.compatibility,
      source: candidate.source,
      matchedToken: candidate.matchedToken,
      tokenRank: candidate.tokenRank,
      vendorMatch: candidate.vendorMatch,
      legacyCodePreferred: candidate.source === "code" ? candidate.legacyPreferenceRank === 0 : null,
    })),
    criterion: selection.criterion,
    reason: selection.reason,
  };
}

/**
 * Resolve the best catalog row that is compatible with the authored d- or e-line coordinates.
 *
 * Unlike `resolveGlass`, this checks every explicit name, alias, and duplicate
 * six-digit-code candidate for d-line prescriptions. E-line prescriptions use
 * only explicit names and aliases because catalog six-digit codes encode d-line
 * coordinates. The resolver therefore avoids discarding a valid later token
 * merely because an earlier equivalent or class label is incompatible.
 */
export function resolveCompatibleGlass(
  glassString: string | undefined,
  storedNd: number,
  storedVd: number | undefined,
  referenceLine: RefractiveIndexReferenceLine = "d",
): GlassEntry | null {
  if (!glassString) return null;
  return compatibleCandidateMatches(glassString, storedNd, storedVd, referenceLine)[0]?.entry ?? null;
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
  const tokens = glassTokens(glassString);
  for (const tokRaw of tokens) {
    const tok = tokRaw.toUpperCase();
    const candidates = [tok];
    for (let hyphen = tok.lastIndexOf("-"); hyphen > 0; hyphen = tok.lastIndexOf("-", hyphen - 1)) {
      candidates.push(tok.slice(0, hyphen));
    }
    for (const candidate of candidates) {
      // Direct canonical match. Progressive suffix trimming preserves support
      // for prose such as "S-FPL51-class" without losing real names such as
      // "TAFD40L-W" and "MP-FCD500-20".
      const direct = CATALOG.get(candidate);
      if (direct) return direct;
      // Alias to canonical.
      const aliased = ALIASES.get(candidate);
      if (aliased) {
        const e = CATALOG.get(aliased.toUpperCase());
        if (e) return e;
      }
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
