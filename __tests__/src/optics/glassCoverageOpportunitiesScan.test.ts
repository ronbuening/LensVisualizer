/**
 * Consolidated glass-coverage opportunity scanner.
 *
 * This authoring report ranks the three active glass-coverage sweeps:
 *   1. catalog-mismatch relabels, with local untracked patent PDF status;
 *   2. high-frequency six-digit code-only rows missing strict catalog Sellmeier data;
 *   3. proprietary glasses where line-index backfill is the likely upgrade path.
 *
 * Always passes — its job is to emit a planning report, not gate CI.
 *
 * Regenerate: `npm test -- glassCoverageOpportunitiesScan`
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import type { DispersionQuality } from "../../../src/optics/dispersion.js";
import {
  allEntries,
  evaluateSellmeier,
  LINE_NM,
  resolveGlass,
  type GlassEntry,
} from "../../../src/optics/glassCatalog.js";
import type { LensData } from "../../../src/types/optics.js";

const modules = import.meta.glob<{ default: LensData }>("../../../src/lens-data/**/*.data.ts", { eager: true });

const REPORT_DIR = "agent_docs/generated";
const PATENTS_DIR = "patents";
const REVIEWED_SIDECAR = "agent_docs/generated/six-digit-glass-codes-missing-sellmeier-reviewed.md";
const ND_TOLERANCE = 5e-3;
const VD_TOLERANCE = 3.0;
const PGF_TOLERANCE = 0.02;
const TOP_CODE_COUNT = 25;
const TOP_NAMED_TOKEN_COUNT = 25;
const MAX_RELEVANT_PATENTS = 4;

interface EmbeddedCode {
  raw: string;
  nd: number;
  vd: number;
}

interface Candidate {
  name: string;
  ndDiff: number;
  vdDiff: number | null;
  pgfDiff: number | null;
  codeDistance: number | null;
}

interface PatentMatch {
  path: string | null;
  status: string;
}

interface RelabelOpportunity {
  lensKey: string;
  lensName: string;
  visible: boolean;
  patentNumber: string | null;
  filePath: string;
  surfaceLabel: string;
  glassString: string;
  storedNd: number;
  storedVd: number | undefined;
  catalogName: string;
  candidates: Candidate[];
  localPatent: PatentMatch;
}

interface MissingSurface {
  label: string;
  elementLabel: string;
  glassString: string;
  quality: DispersionQuality | "missing";
}

interface CoverageOpportunity {
  lensName: string;
  visible: boolean;
  patentNumber: string | null;
  filePath: string;
  sellmeierSurfaces: number;
  trustedChromaticSurfaces: number;
  nonAirSurfaces: number;
  missingSurfaces: MissingSurface[];
  missingTrustedSurfaces: MissingSurface[];
}

interface CodeOpportunity {
  lensName: string;
  visible: boolean;
  patentNumber: string | null;
  filePath: string;
  elementName: string;
  glassString: string;
  codes: string[];
  storedNd: number;
  storedVd: number | undefined;
  quality: string;
  localPatent: PatentMatch;
  reviewedStatus: string;
}

interface NamedTokenOpportunity {
  token: string;
  lensName: string;
  visible: boolean;
  patentNumber: string | null;
  filePath: string;
  elementName: string;
  glassString: string;
  storedNd: number;
  storedVd: number | undefined;
  quality: string;
  localPatent: PatentMatch;
}

interface ProprietaryOpportunity {
  lens: string;
  dataPath: string;
  patentReference: string;
  elements: string;
  notes: string;
  localPatent: PatentMatch;
}

function toRepoRelativeLensPath(modulePath: string): string {
  const lensDataIndex = modulePath.indexOf("src/lens-data/");
  return lensDataIndex >= 0 ? modulePath.slice(lensDataIndex) : modulePath.replace(/^(\.\.\/)+/, "");
}

function extractPatentNumber(subtitle: string | undefined): string | null {
  const match = subtitle?.match(patentReferencePattern);
  return match?.[1].replace(/\s+/g, " ").trim() ?? null;
}

const patentReferencePattern =
  /\b(?:Patent\s+)?((?:JPWO|WO|US|JP|DE|GB|FR|CH|CN)\s*\d[\d,./-]*(?:\s*(?:A1|A|B2|B1|B|C\d?|U))?)/i;

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

function patentSearchTokens(patentNumber: string | null): string[] {
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

function patentInventory(): string[] {
  if (!existsSync(PATENTS_DIR)) return [];
  return readdirSync(PATENTS_DIR)
    .filter((name) => name.toLowerCase().endsWith(".pdf"))
    .sort((a, b) => a.localeCompare(b));
}

function findLocalPatent(patentNumber: string | null, files: readonly string[]): PatentMatch {
  const tokens = patentSearchTokens(patentNumber);
  if (tokens.length === 0) {
    return { path: null, status: "No patent number parsed from lens metadata/reference" };
  }

  const scored = files
    .map((file) => {
      const normalizedFile = normalizePatentToken(file.replace(/\.pdf$/i, ""));
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

function extractGlassCode(annotation: string): EmbeddedCode | null {
  const match = annotation.match(/\b(\d{3})[/\-\s](\d{3})\b/) ?? annotation.match(/\b(\d{3})(\d{3})\b/);
  if (!match) return null;
  const ndCode = parseInt(match[1], 10);
  const vdCode = parseInt(match[2], 10);
  if (ndCode < 400 || ndCode > 1100) return null;
  return { raw: `${match[1]}/${match[2]}`, nd: 1 + ndCode / 1000, vd: vdCode / 10 };
}

function partialDispersionPgF(vd: number, dPgF: number): number {
  return 0.6438 - 0.001682 * vd + dPgF;
}

function findCandidates(
  entries: readonly GlassEntry[],
  entryNd: ReadonlyMap<string, number>,
  storedNd: number,
  storedVd: number | undefined,
  storedDPgF: number | undefined,
  embeddedCode: EmbeddedCode | null,
): Candidate[] {
  const lensPgF =
    storedVd !== undefined && storedDPgF !== undefined ? partialDispersionPgF(storedVd, storedDPgF) : null;

  return entries
    .map<Candidate>((entry) => {
      const nd = entryNd.get(entry.name)!;
      const ndDiff = nd - storedNd;
      const vdDiff = storedVd === undefined ? null : entry.vd - storedVd;
      const pgfDiff = lensPgF !== null && entry.PgF !== undefined ? entry.PgF - lensPgF : null;
      const codeDistance =
        embeddedCode === null
          ? null
          : Math.abs(nd - embeddedCode.nd) * 1000 + Math.abs(entry.vd - embeddedCode.vd) * 10;
      return { name: entry.name, ndDiff, vdDiff, pgfDiff, codeDistance };
    })
    .filter(
      (candidate) =>
        Math.abs(candidate.ndDiff) <= ND_TOLERANCE &&
        (candidate.vdDiff === null || Math.abs(candidate.vdDiff) <= VD_TOLERANCE),
    )
    .filter((candidate) => candidate.pgfDiff === null || Math.abs(candidate.pgfDiff) <= PGF_TOLERANCE)
    .sort((a, b) => {
      if (a.codeDistance !== null && b.codeDistance !== null) return a.codeDistance - b.codeDistance;
      return Math.abs(a.ndDiff) - Math.abs(b.ndDiff);
    })
    .slice(0, 5);
}

function extractSixDigitCodes(glassString: string): string[] {
  const codes = new Set<string>();
  const codePattern = /(?<![\d.])(\d{3})[/\-\s]?(\d{3})(?![\d.])/g;
  for (const match of glassString.matchAll(codePattern)) {
    codes.add(`${match[1]}${match[2]}`);
  }
  return [...codes];
}

function hasActualGlassTypeToken(glassString: string): boolean {
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

function isCodeOnlyGlassAnnotation(glassString: string): boolean {
  return extractSixDigitCodes(glassString).length > 0 && !hasActualGlassTypeToken(glassString);
}

function isExplicitlyUnmatched(glassString: string | undefined): boolean {
  return /\b(unmatched|unknown|proprietary|unidentified)\b/i.test(glassString ?? "");
}

function namedOpportunityTokens(glassString: string): string[] {
  const tokens = glassString.match(/[A-Za-z][A-Za-z0-9-]*\d[A-Za-z0-9]*/g) ?? [];
  return [
    ...new Set(
      tokens
        .map((token) => token.toUpperCase())
        .filter((token) => {
          if (/^\d{6}$/.test(token)) return false;
          if (/^[LSGDFA]\d+$/.test(token)) return false;
          return /^(S-|N-|L-|H-|K-|TAF|TAFD|NBFD|FCD|FC|BACD|BSC|E-FD|E-F|SF\d|BK\d|F\d|CAF2|CAFD|FK|SK)/.test(token);
        }),
    ),
  ];
}

function formatPercent(numerator: number, denominator: number): string {
  if (denominator === 0) return "100.0%";
  return `${((numerator / denominator) * 100).toFixed(1)}%`;
}

function formatCandidate(candidate: Candidate): string {
  const ndSign = candidate.ndDiff >= 0 ? "+" : "";
  const vdSign = candidate.vdDiff !== null && candidate.vdDiff >= 0 ? "+" : "";
  const vdPart = candidate.vdDiff === null ? "" : `, Δvd=${vdSign}${candidate.vdDiff.toFixed(2)}`;
  return `${candidate.name} (Δnd=${ndSign}${candidate.ndDiff.toFixed(4)}${vdPart})`;
}

function candidateSummary(candidates: readonly Candidate[]): string {
  if (candidates.length === 0) return "No catalog candidate";
  return candidates.slice(0, 3).map(formatCandidate).join("<br>");
}

function qualityMix(surfaces: readonly MissingSurface[]): string {
  const counts = new Map<string, number>();
  for (const surface of surfaces) {
    counts.set(surface.quality, (counts.get(surface.quality) ?? 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([quality, count]) => `${quality}: ${count}`)
    .join(", ");
}

function reviewedSidecarStatus(filePath: string, codes: readonly string[], sidecarText: string): string {
  if (!sidecarText) return "No reviewed sidecar found";
  const basename = filePath.split("/").at(-1) ?? filePath;
  const hits = sidecarText
    .split("\n")
    .filter((line) => line.includes(basename) && codes.some((code) => line.includes(code)));
  return hits.length > 0 ? "Reviewed sidecar hit" : "No reviewed-sidecar hit";
}

function summarizePatentStatus(rows: readonly { localPatent: PatentMatch }[]): string {
  const paths = [...new Set(rows.map((row) => row.localPatent.path).filter((path): path is string => path !== null))];
  if (paths.length > 0) return paths.slice(0, MAX_RELEVANT_PATENTS).join("<br>");
  const statuses = [...new Set(rows.map((row) => row.localPatent.status))];
  return statuses.slice(0, MAX_RELEVANT_PATENTS).join("<br>");
}

function summarizeReviewedStatus(rows: readonly CodeOpportunity[]): string {
  const reviewed = rows.filter((row) => row.reviewedStatus === "Reviewed sidecar hit").length;
  if (reviewed === rows.length) return "All representative rows reviewed";
  if (reviewed > 0) return `${reviewed}/${rows.length} representative rows reviewed`;
  return "No reviewed-sidecar hit";
}

function parseTierAProprietaryRows(patentFiles: readonly string[]): ProprietaryOpportunity[] {
  const path = "agent_docs/proprietary-glass-backfill.md";
  if (!existsSync(path)) return [];
  const text = readFileSync(path, "utf8");
  const tierA = text.match(/## Tier A[\s\S]*?(?=\n## Tier B)/)?.[0] ?? "";
  const rows: ProprietaryOpportunity[] = [];
  for (const line of tierA.split("\n")) {
    if (!line.startsWith("| [")) continue;
    const cells = line
      .slice(1, line.endsWith("|") ? -1 : undefined)
      .split("|")
      .map((cell) => cell.trim());
    const link = cells[0]?.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!link || cells.length < 4) continue;
    const [, lensFile, dataPathRaw] = link;
    const [patentReferenceRaw, elementsRaw, notesRaw] = cells.slice(1);
    const patentReference = patentReferenceRaw.trim();
    rows.push({
      lens: lensFile.trim(),
      dataPath: dataPathRaw.replace(/^\.\.\//, "").trim(),
      patentReference,
      elements: elementsRaw.trim(),
      notes: notesRaw?.trim() ?? "",
      localPatent: findLocalPatent(patentReference, patentFiles),
    });
  }
  return rows;
}

describe("glass coverage opportunities scan", () => {
  it("emits a consolidated three-sweep opportunity report", () => {
    const entries = allEntries();
    const entryNd = new Map(entries.map((entry) => [entry.name, evaluateSellmeier(entry, LINE_NM.d)]));
    const patentFiles = patentInventory();

    const relabels: RelabelOpportunity[] = [];
    const coverageRows: CoverageOpportunity[] = [];
    const codeRows: CodeOpportunity[] = [];
    const namedTokenRows: NamedTokenOpportunity[] = [];
    const reviewedSidecarText = existsSync(REVIEWED_SIDECAR) ? readFileSync(REVIEWED_SIDECAR, "utf8") : "";
    let totalLenses = 0;
    let visibleLenses = 0;
    let totalNonAirSurfaces = 0;
    let totalSellmeierSurfaces = 0;
    let totalTrustedChromaticSurfaces = 0;

    for (const [path, mod] of Object.entries(modules)) {
      const raw = mod.default;
      if (!raw?.key) continue;
      const data: LensData = { ...LENS_DEFAULTS, ...raw } as LensData;
      const visible = data.visible !== false;
      const patentNumber = extractPatentNumber(data.subtitle);
      const localPatent = findLocalPatent(patentNumber, patentFiles);
      totalLenses++;
      if (visible) visibleLenses++;

      let L;
      try {
        L = buildLens(data);
      } catch {
        continue;
      }

      const filePath = toRepoRelativeLensPath(path);
      const elementById = new Map(L.elements.map((element) => [element.id, element]));
      const missingSurfaces: MissingSurface[] = [];
      const missingTrustedSurfaces: MissingSurface[] = [];
      let nonAirSurfaces = 0;
      let sellmeierSurfaces = 0;
      let trustedChromaticSurfaces = 0;

      for (let i = 0; i < L.S.length; i++) {
        const surface = L.S[i];
        if (surface.nd === 1.0) continue;
        nonAirSurfaces++;
        totalNonAirSurfaces++;

        const element = surface.elemId ? elementById.get(surface.elemId) : undefined;
        const entry = element?.glass ? resolveGlass(element.glass) : null;
        const catalogNd = entry ? evaluateSellmeier(entry, LINE_NM.d) : null;
        const sellmeierEligible = catalogNd !== null && Math.abs(catalogNd - surface.nd) <= ND_TOLERANCE;
        const quality = L.indexByIdx?.[i]?.quality ?? "missing";
        const trustedChromatic = sellmeierEligible || quality === "lineIndices";

        if (sellmeierEligible) {
          sellmeierSurfaces++;
          totalSellmeierSurfaces++;
        }
        if (trustedChromatic) {
          trustedChromaticSurfaces++;
          totalTrustedChromaticSurfaces++;
        }
        if (!sellmeierEligible) {
          missingSurfaces.push({
            label: surface.label ?? `surface[${i}]`,
            elementLabel: element?.label || element?.name || "element",
            glassString: element?.glass ?? "",
            quality,
          });
        }
        if (!trustedChromatic) {
          const missingSurface: MissingSurface = {
            label: surface.label ?? `surface[${i}]`,
            elementLabel: element?.label || element?.name || "element",
            glassString: element?.glass ?? "",
            quality,
          };
          missingTrustedSurfaces.push(missingSurface);
        }

        if (!element?.glass) continue;
        if (!entry) continue;

        if (sellmeierEligible) continue;

        relabels.push({
          lensKey: data.key,
          lensName: data.name ?? data.key,
          visible,
          patentNumber,
          filePath,
          surfaceLabel: surface.label ?? `surface[${i}]`,
          glassString: element.glass,
          storedNd: surface.nd,
          storedVd: element.vd,
          catalogName: entry.name,
          candidates: findCandidates(
            entries,
            entryNd,
            surface.nd,
            element.vd,
            element.dPgF,
            extractGlassCode(element.glass),
          ),
          localPatent,
        });
      }

      coverageRows.push({
        lensName: data.name ?? data.key,
        visible,
        patentNumber,
        filePath,
        sellmeierSurfaces,
        trustedChromaticSurfaces,
        nonAirSurfaces,
        missingSurfaces,
        missingTrustedSurfaces,
      });

      for (const element of L.elements) {
        if (!element.glass) continue;
        const elementSurfaces = L.S.map((surface, index) => ({ surface, index })).filter(
          ({ surface }) => surface.nd !== 1.0 && surface.elemId === element.id,
        );
        const qualities = elementSurfaces.map(({ index }) => L.indexByIdx?.[index]?.quality ?? "constant");
        const quality = [...new Set(qualities)].join(", ") || "no traced surfaces";
        const catalogEntry = resolveGlass(element.glass);
        const hasSellmeierEligibleSurface =
          catalogEntry !== null &&
          elementSurfaces.some(({ surface }) => {
            const catalogNd = evaluateSellmeier(catalogEntry, LINE_NM.d);
            return Math.abs(catalogNd - surface.nd) <= ND_TOLERANCE;
          });

        if (isCodeOnlyGlassAnnotation(element.glass)) {
          if (hasSellmeierEligibleSurface) continue;
          const codes = extractSixDigitCodes(element.glass);
          codeRows.push({
            lensName: data.name ?? data.key,
            visible,
            patentNumber,
            filePath,
            elementName: element.label || element.name,
            glassString: element.glass,
            codes,
            storedNd: element.nd,
            storedVd: element.vd,
            quality,
            localPatent,
            reviewedStatus: reviewedSidecarStatus(filePath, codes, reviewedSidecarText),
          });
          continue;
        }

        if (catalogEntry || isExplicitlyUnmatched(element.glass)) continue;
        for (const token of namedOpportunityTokens(element.glass)) {
          namedTokenRows.push({
            token,
            lensName: data.name ?? data.key,
            visible,
            patentNumber,
            filePath,
            elementName: element.label || element.name,
            glassString: element.glass,
            storedNd: element.nd,
            storedVd: element.vd,
            quality,
            localPatent,
          });
        }
      }
    }

    const visibleNearComplete = coverageRows
      .filter(
        (row) =>
          row.visible &&
          row.missingTrustedSurfaces.length > 0 &&
          row.missingTrustedSurfaces.length <= 2 &&
          row.trustedChromaticSurfaces / Math.max(1, row.nonAirSurfaces) >= 0.8,
      )
      .sort((a, b) => {
        const coverageDiff =
          b.trustedChromaticSurfaces / Math.max(1, b.nonAirSurfaces) -
          a.trustedChromaticSurfaces / Math.max(1, a.nonAirSurfaces);
        if (coverageDiff !== 0) return coverageDiff;
        return a.missingTrustedSurfaces.length - b.missingTrustedSurfaces.length;
      });

    const codeFrequency = new Map<string, CodeOpportunity[]>();
    for (const row of codeRows) {
      for (const code of row.codes) {
        const list = codeFrequency.get(code) ?? [];
        list.push(row);
        codeFrequency.set(code, list);
      }
    }
    const sortedCodeFrequency = [...codeFrequency.entries()].sort((a, b) => {
      const countDiff = b[1].length - a[1].length;
      if (countDiff !== 0) return countDiff;
      const lensDiff = new Set(b[1].map((row) => row.filePath)).size - new Set(a[1].map((row) => row.filePath)).size;
      if (lensDiff !== 0) return lensDiff;
      return a[0].localeCompare(b[0]);
    });

    const namedTokenFrequency = new Map<string, NamedTokenOpportunity[]>();
    for (const row of namedTokenRows) {
      const list = namedTokenFrequency.get(row.token) ?? [];
      list.push(row);
      namedTokenFrequency.set(row.token, list);
    }
    const sortedNamedTokenFrequency = [...namedTokenFrequency.entries()].sort((a, b) => {
      const countDiff = b[1].length - a[1].length;
      if (countDiff !== 0) return countDiff;
      const lensDiff = new Set(b[1].map((row) => row.filePath)).size - new Set(a[1].map((row) => row.filePath)).size;
      if (lensDiff !== 0) return lensDiff;
      return a[0].localeCompare(b[0]);
    });

    const proprietaryRows = parseTierAProprietaryRows(patentFiles);
    const matchedRelabels = relabels.filter((row) => row.localPatent.path !== null).length;

    const lines: string[] = [];
    lines.push("# Glass Coverage Opportunities (auto-generated)");
    lines.push("");
    lines.push("Consolidated work queue for the three planned glass-coverage sweeps.");
    lines.push("Rows that cite `patents/` refer to ignored/untracked local PDF files used as source references only.");
    lines.push("Do not add, stage, or commit those patent files.");
    lines.push("");
    lines.push("**Regenerate this file** by running `npm test -- glassCoverageOpportunitiesScan`.");
    lines.push("Regenerate the full glass report set with `npm run generate:glass-reports`.");
    lines.push("");
    lines.push("## Summary");
    lines.push("");
    lines.push(`- **${totalLenses}** lenses scanned (**${visibleLenses}** visible)`);
    lines.push(
      `- **${totalSellmeierSurfaces} / ${totalNonAirSurfaces}** non-air surfaces use strict catalog Sellmeier data (${formatPercent(totalSellmeierSurfaces, totalNonAirSurfaces)})`,
    );
    lines.push(
      `- **${totalTrustedChromaticSurfaces} / ${totalNonAirSurfaces}** non-air surfaces use trusted chromatic data (Sellmeier or measured line indices, ${formatPercent(totalTrustedChromaticSurfaces, totalNonAirSurfaces)})`,
    );
    lines.push(
      `- **${relabels.length}** mismatch surfaces in Sweep 1 across **${new Set(relabels.map((row) => row.filePath)).size}** lens files`,
    );
    lines.push(`- **${matchedRelabels}** Sweep 1 surfaces have a matching untracked local patent PDF`);
    lines.push(`- **${codeRows.length}** code-only missing-Sellmeier elements in Sweep 2`);
    lines.push(`- **${namedTokenRows.length}** unresolved named-token elements in Sweep 2B`);
    lines.push(`- **${proprietaryRows.length}** Tier A proprietary backfill rows in Sweep 3`);
    lines.push("");

    lines.push("## Sweep 1 - Relabel Mismatches");
    lines.push("");
    lines.push(
      "Patent PDFs under `patents/` are untracked local references. A missing local patent status is a source blocker for the requested first sweep.",
    );
    lines.push("");
    lines.push(
      "| Lens | Patent | Surface | Current label | Stored nd/vd | Best candidate(s) | localPatentPath | localPatentStatus |",
    );
    lines.push("|---|---|---|---|---|---|---|---|");
    for (const row of relabels.sort((a, b) => {
      const localDiff = Number(Boolean(b.localPatent.path)) - Number(Boolean(a.localPatent.path));
      if (localDiff !== 0) return localDiff;
      const candidateDiff = b.candidates.length - a.candidates.length;
      if (candidateDiff !== 0) return candidateDiff;
      return a.lensName.localeCompare(b.lensName);
    })) {
      const vd = row.storedVd === undefined ? "?" : row.storedVd.toFixed(2);
      lines.push(
        `| [${row.lensName}](../../${row.filePath})${row.visible ? "" : " *(hidden)*"} | ${row.patentNumber ?? ""} | ${row.surfaceLabel} | \`${row.glassString}\` | ${row.storedNd.toFixed(5)} / ${vd} | ${candidateSummary(row.candidates)} | ${row.localPatent.path ?? ""} | ${row.localPatent.status} |`,
      );
    }
    lines.push("");

    lines.push("## Near-Complete Visible Lenses");
    lines.push("");
    lines.push(
      "These are efficient follow-up targets after mismatch blockers because one or two surfaces can make the whole lens chromatically trusted. Strict Sellmeier coverage remains shown separately.",
    );
    lines.push("");
    lines.push(
      "| Lens | Trusted chromatic coverage | Strict Sellmeier coverage | Missing trusted surfaces | Missing quality mix |",
    );
    lines.push("|---|---:|---:|---:|---|");
    for (const row of visibleNearComplete) {
      lines.push(
        `| [${row.lensName}](../../${row.filePath}) | ${formatPercent(row.trustedChromaticSurfaces, row.nonAirSurfaces)} (${row.trustedChromaticSurfaces}/${row.nonAirSurfaces}) | ${formatPercent(row.sellmeierSurfaces, row.nonAirSurfaces)} (${row.sellmeierSurfaces}/${row.nonAirSurfaces}) | ${row.missingTrustedSurfaces.length} | ${qualityMix(row.missingTrustedSurfaces)} |`,
      );
    }
    lines.push("");

    lines.push("## Sweep 2 - Code-Only Missing Sellmeier");
    lines.push("");
    lines.push(
      "Add catalog entries only when public coefficient-backed vendor data is available and `assertCatalogConsistent` passes.",
    );
    lines.push("");
    lines.push("| Code | Elements | Lens files | localPatentStatus | reviewedSidecarStatus | Representative rows |");
    lines.push("|---|---:|---:|---|---|---|");
    for (const [code, rows] of sortedCodeFrequency.slice(0, TOP_CODE_COUNT)) {
      const lensCount = new Set(rows.map((row) => row.filePath)).size;
      const reps = rows
        .slice(0, 3)
        .map(
          (row) =>
            `[${row.lensName}](../../${row.filePath}) ${row.elementName} (${row.storedNd.toFixed(5)} / ${row.storedVd?.toFixed(2) ?? "?"})`,
        )
        .join("<br>");
      lines.push(
        `| ${code} | ${rows.length} | ${lensCount} | ${summarizePatentStatus(rows)} | ${summarizeReviewedStatus(rows)} | ${reps} |`,
      );
    }
    lines.push("");

    lines.push("## Sweep 2B - Named Tokens Missing Catalog Resolution");
    lines.push("");
    lines.push(
      "These unresolved catalog-style labels are often better first catalog targets than already-reviewed proprietary six-digit rows.",
    );
    lines.push("");
    lines.push("| Token | Elements | Lens files | localPatentStatus | Representative rows |");
    lines.push("|---|---:|---:|---|---|");
    for (const [token, rows] of sortedNamedTokenFrequency.slice(0, TOP_NAMED_TOKEN_COUNT)) {
      const lensCount = new Set(rows.map((row) => row.filePath)).size;
      const reps = rows
        .slice(0, 3)
        .map(
          (row) =>
            `[${row.lensName}](../../${row.filePath}) ${row.elementName} (${row.storedNd.toFixed(5)} / ${row.storedVd?.toFixed(2) ?? "?"}; ${row.quality})`,
        )
        .join("<br>");
      lines.push(`| ${token} | ${rows.length} | ${lensCount} | ${summarizePatentStatus(rows)} | ${reps} |`);
    }
    lines.push("");

    lines.push("## Sweep 3 - Proprietary Line-Index Backfill");
    lines.push("");
    lines.push(
      "Use local untracked patents first. Populate patent-listed `nC`, `nF`, `ng`, and `dPgF` when Sellmeier data is unavailable.",
    );
    lines.push("");
    lines.push("| Lens | Patent reference | Elements | localPatentPath | localPatentStatus | Notes |");
    lines.push("|---|---|---|---|---|---|");
    for (const row of proprietaryRows) {
      lines.push(
        `| [${row.lens}](../../${row.dataPath}) | ${row.patentReference} | ${row.elements} | ${row.localPatent.path ?? ""} | ${row.localPatent.status} | ${row.notes} |`,
      );
    }
    lines.push("");

    mkdirSync(REPORT_DIR, { recursive: true });
    writeFileSync(`${REPORT_DIR}/glass-coverage-opportunities.generated.md`, lines.join("\n") + "\n");

    expect(totalLenses).toBeGreaterThan(0);
  });
});
