/**
 * Shared harness for the glass report scans (precedent: `testLensFixtures.ts`,
 * `__tests__/testUtils.tsx`).
 *
 * Eight scan files under `__tests__/src/optics/` previously re-implemented the
 * same helpers — the lens-module walk, repo-relative paths, patent-number
 * extraction, the patent-PDF inventory matcher, six-digit code helpers, and
 * the candidate ranking — with drift already visible between copies. Each
 * helper here is the canonical implementation; scans import it and keep only
 * their report-specific logic. Runtime primitives (`decodeCode6`,
 * `UNRESOLVED_MARKER`, `glassTokens`, `normalLinePgF`) come from the engine.
 */
import { existsSync, readdirSync } from "node:fs";
import validateLensData from "../../../src/optics/validateLensData.js";
import { buildSpectralIndex } from "../../../src/optics/internal/lensState.js";
import {
  assessCatalogGlassCompatibility,
  evaluateCatalogAbbeNumber,
  GLASS_ND_TOLERANCE,
  GLASS_VD_TOLERANCE,
  UNRESOLVED_MARKER,
  type GlassEntry,
} from "../../../src/optics/glassCatalog.js";
import { buildSurfaceDispersionIndex, normalLinePgF, type SurfaceDispersion } from "../../../src/optics/dispersion.js";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import type { ElementData, LensData, RefractiveIndexReferenceLine, SurfaceData } from "../../../src/types/optics.js";

/** ΔPgF spread that's plausible across melt variants. */
export const PGF_TOLERANCE = 0.02;

const PATENTS_DIR = "patents";
const MAX_RELEVANT_PATENTS = 4;

/* ── Lens-module walk ─────────────────────────────────────────────────── */

/**
 * Glass-relevant subset of `RuntimeLens`, built without the full `buildLens`
 * pipeline. The scans only read surfaces, element metadata, and per-surface
 * dispersion, so the walk skips the expensive first-order/pupil/layout
 * derivation — a full build per catalog lens per scan file dominated suite
 * time. Each field uses the same source `buildLens` does: `S` is the cloned
 * authored surface list, `elements` is the authored array `RuntimeLens.elements`
 * exposes, and `indexByIdx` comes from `buildSurfaceDispersionIndex`.
 */
export interface ScanLens {
  S: SurfaceData[];
  elements: ElementData[];
  indexByIdx: Record<number, SurfaceDispersion>;
}

/** Context handed to the per-lens visitor: glass-scan lens view plus source metadata. */
export interface LensWalkContext {
  /** Vite module path of the lens data file. */
  modulePath: string;
  /** Repo-relative lens file path for report links. */
  filePath: string;
  /** Defaults-merged authored lens data. */
  data: LensData;
  /** Glass-relevant lens view (see {@link ScanLens}). */
  L: ScanLens;
}

/**
 * Walk every registered lens data module: merge defaults, normalize the
 * glass-relevant fields, and visit. Lenses that fail validation are skipped,
 * matching the previous behavior where a throwing `buildLens` skipped the
 * lens (build correctness is tested elsewhere). Returns the number of lenses
 * visited.
 */
export function walkLensSurfaces(
  modules: Record<string, { default: LensData }>,
  visitor: (context: LensWalkContext) => void,
): number {
  let totalLenses = 0;
  for (const [modulePath, mod] of Object.entries(modules)) {
    const raw = mod.default;
    if (!raw?.key) continue;
    const data: LensData = { ...LENS_DEFAULTS, ...raw } as LensData;
    totalLenses++;

    if (validateLensData(data).length > 0) continue;
    const S: SurfaceData[] = data.surfaces.map((s) => ({ ...s }));
    const indexByIdx = buildSurfaceDispersionIndex(S, data.elements, buildSpectralIndex(S, data.elements));
    visitor({
      modulePath,
      filePath: toRepoRelativeLensPath(modulePath),
      data,
      L: { S, elements: data.elements, indexByIdx },
    });
  }
  return totalLenses;
}

/** Convert a Vite module path into the repo-relative `src/lens-data/...` path. */
export function toRepoRelativeLensPath(modulePath: string): string {
  const lensDataIndex = modulePath.indexOf("src/lens-data/");
  return lensDataIndex >= 0 ? modulePath.slice(lensDataIndex) : modulePath.replace(/^(\.\.\/)+/, "");
}

/** True when an annotation explicitly declares "no catalog match". */
export function isExplicitlyUnmatched(glassString: string | undefined): boolean {
  return UNRESOLVED_MARKER.test(glassString ?? "");
}

/* ── Patent references and the untracked local PDF inventory ──────────── */

const patentReferencePattern =
  /\b(?:Patent\s+)?((?:JPWO|WO|US|JP|DE|GB|FR|CH|CN)\s*\d(?:[\d,./-]|\s+(?=\d))*(?:\s*(?:A1|A|B2|B1|B|C\d?|U))?)/i;

/** Extract a display-form patent number from a lens subtitle. */
export function extractPatentNumber(subtitle: string | undefined): string | null {
  const match = subtitle?.match(patentReferencePattern);
  return match?.[1].replace(/\s+/g, " ").trim() ?? null;
}

function extractPatentReference(value: string): string | null {
  const match = value.match(patentReferencePattern);
  return match?.[1].replace(/\s+/g, " ").trim() ?? null;
}

function normalizePatentToken(value: string): string {
  return value.toUpperCase().replace(/[^A-Z0-9]/g, "");
}

function stripPatentKind(value: string): string {
  return value.replace(/(?:A1|A|B2|B1|B|C\d?|U)$/i, "");
}

/** Normalized search tokens for matching a patent number against filenames. */
export function patentSearchTokens(patentNumber: string | null): string[] {
  if (!patentNumber) return [];
  const patentReference = extractPatentReference(patentNumber);
  if (!patentReference) return [];
  const normalized = normalizePatentToken(patentReference);
  const stripped = stripPatentKind(normalized);
  const noCountry = stripped.replace(/^(?:JPWO|WO|US|JP|DE|GB|FR|CH|CN)/, "");
  const tokens = [normalized, stripped, noCountry];

  for (const token of [normalized, stripped]) {
    const publicationMatch = token.match(/^(JP|CN)(\d{4})(\d{1,5})((?:A1|A|B2|B1|B|C\d?|U)?)$/);
    if (!publicationMatch) continue;
    const [, country, year, serial, kind] = publicationMatch;
    const padded = `${country}${year}${serial.padStart(6, "0")}${kind}`;
    tokens.push(padded, stripPatentKind(padded), stripPatentKind(padded).replace(/^(?:JP|CN)/, ""));
  }

  return [...new Set(tokens)];
}

/** Result of matching a patent number against the local PDF inventory. */
export interface PatentMatch {
  path: string | null;
  status: string;
}

/** Sorted PDF filenames from the untracked local `patents/` directory. */
export function patentInventory(): string[] {
  if (!existsSync(PATENTS_DIR)) return [];
  return readdirSync(PATENTS_DIR)
    .filter((name) => name.toLowerCase().endsWith(".pdf"))
    .sort((a, b) => a.localeCompare(b));
}

/* Scans call findLocalPatent once per catalog lens against the same inventory
 * array, so the per-file normalization is cached by array identity. */
const normalizedInventoryByFiles = new WeakMap<readonly string[], string[]>();

function normalizedInventory(files: readonly string[]): string[] {
  let normalized = normalizedInventoryByFiles.get(files);
  if (!normalized) {
    normalized = files.map((file) => normalizePatentToken(file.replace(/\.pdf$/i, "")));
    normalizedInventoryByFiles.set(files, normalized);
  }
  return normalized;
}

/** Match one patent number against the local PDF inventory with scoring. */
export function findLocalPatent(patentNumber: string | null, files: readonly string[]): PatentMatch {
  const tokens = patentSearchTokens(patentNumber);
  if (tokens.length === 0) {
    return { path: null, status: "No patent number parsed from lens metadata" };
  }

  const normalizedFiles = normalizedInventory(files);
  const scored = files
    .map((file, fileIndex) => {
      const normalizedFile = normalizedFiles[fileIndex];
      let score = 0;
      for (const token of tokens) {
        if (normalizedFile === token) score = Math.max(score, 100);
        else if (normalizedFile.includes(token)) score = Math.max(score, 75);
        else if (token.includes(normalizedFile)) score = Math.max(score, 60);
      }
      return { file, score };
    })
    .filter((match) => match.score > 0)
    .sort((a, b) => b.score - a.score || a.file.localeCompare(b.file));

  if (scored.length === 0) {
    return {
      path: null,
      status: `Missing from untracked local ${PATENTS_DIR}/ references (${tokens.join(", ")})`,
    };
  }

  const best = scored[0];
  if (scored.length > 1 && scored[1].score === best.score) {
    return {
      path: `${PATENTS_DIR}/${best.file}`,
      status: `Ambiguous untracked local match; also see ${scored
        .slice(1, MAX_RELEVANT_PATENTS)
        .map((match) => `${PATENTS_DIR}/${match.file}`)
        .join(", ")}`,
    };
  }

  return {
    path: `${PATENTS_DIR}/${best.file}`,
    status: "Matched untracked local patent PDF",
  };
}

/* ── Six-digit code annotation helpers ────────────────────────────────── */

/** Distinct six-digit codes embedded in an annotation ("903313", "903/313", …). */
export function extractSixDigitCodes(glassString: string): string[] {
  const codes = new Set<string>();
  const codePattern = /(?<![\d.])(\d{3})[/\-\s]?(\d{3})(?![\d.])/g;
  for (const match of glassString.matchAll(codePattern)) {
    codes.add(`${match[1]}${match[2]}`);
  }
  return [...codes];
}

/** True when the annotation names an actual glass type (not just labels/codes). */
export function hasActualGlassTypeToken(glassString: string): boolean {
  const tokens = glassString.match(/[A-Za-z][A-Za-z0-9-]*\d[A-Za-z0-9]*/g) ?? [];
  return tokens.some((tokenRaw) => {
    const token = tokenRaw.toUpperCase();
    if (/^L\d+$/.test(token)) return false;
    if (/^S\d+$/.test(token)) return false;
    if (/^D\d+$/.test(token)) return false;
    if (/^G\d+$/.test(token)) return false;
    if (/^A\d+$/.test(token)) return false;
    if (/^F\d+$/.test(token)) return true;
    return (token.match(/[A-Z]/g) ?? []).length >= 2;
  });
}

/** True for annotations that carry only a six-digit code, no glass name. */
export function isCodeOnlyGlassAnnotation(glassString: string): boolean {
  return extractSixDigitCodes(glassString).length > 0 && !hasActualGlassTypeToken(glassString);
}

/* ── Candidate ranking ────────────────────────────────────────────────── */

/** A six-digit code decoded into approximate optical coordinates. */
export interface EmbeddedCode {
  raw: string;
  nd: number;
  vd: number;
}

/** One ranked catalog candidate for a stored (nd, vd[, ΔPgF]) coordinate. */
export interface GlassScanCandidate {
  name: string;
  nd: number;
  vd: number;
  pgf: number | undefined;
  ndDiff: number;
  vdDiff: number | null;
  pgfDiff: number | null;
  codeDistance: number | null;
}

/**
 * Rank catalog entries against stored optical coordinates: filter to the
 * engine nd/vd tolerances (plus ΔPgF plausibility when known), then order by
 * embedded-code distance when a code exists — it's ground truth while stored
 * (nd, vd) may carry melt-variant rounding — else by |Δnd|. Top five.
 */
export function findCandidates(
  entries: readonly GlassEntry[],
  storedNd: number,
  storedVd: number | undefined,
  storedDPgF: number | undefined,
  embeddedCode: EmbeddedCode | null,
  referenceLine: RefractiveIndexReferenceLine,
): GlassScanCandidate[] {
  const lensPgF =
    referenceLine === "d" && storedVd !== undefined && storedDPgF !== undefined
      ? normalLinePgF(storedVd, storedDPgF)
      : null;

  return entries
    .map<GlassScanCandidate>((entry) => {
      const compatibility = assessCatalogGlassCompatibility(entry, storedNd, storedVd, referenceLine);
      const nd = compatibility.catalogIndex;
      const candidateAbbe = referenceLine === "d" ? entry.vd : evaluateCatalogAbbeNumber(entry, "e");
      const ndDiff = compatibility.indexDiff;
      const vdDiff = compatibility.abbeDiff;
      const pgfDiff = lensPgF !== null && entry.PgF !== undefined ? entry.PgF - lensPgF : null;
      // Distance combines |Δnd|*1000 (3-digit precision) + |Δvd|*10 (1-digit
      // precision) so each axis contributes proportionally to its resolution.
      const codeDistance =
        referenceLine === "e" || embeddedCode === null
          ? null
          : Math.abs(nd - embeddedCode.nd) * 1000 + Math.abs(candidateAbbe - embeddedCode.vd) * 10;

      return { name: entry.name, nd, vd: candidateAbbe, pgf: entry.PgF, ndDiff, vdDiff, pgfDiff, codeDistance };
    })
    .filter(
      (candidate) =>
        Math.abs(candidate.ndDiff) <= GLASS_ND_TOLERANCE &&
        (candidate.vdDiff === null || Math.abs(candidate.vdDiff) <= GLASS_VD_TOLERANCE),
    )
    .filter((candidate) => candidate.pgfDiff === null || Math.abs(candidate.pgfDiff) <= PGF_TOLERANCE)
    .sort((a, b) => {
      if (a.codeDistance !== null && b.codeDistance !== null) return a.codeDistance - b.codeDistance;
      return Math.abs(a.ndDiff) - Math.abs(b.ndDiff);
    })
    .slice(0, 5);
}
