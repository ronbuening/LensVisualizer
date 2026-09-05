import { hasReviewRecord } from "./glassScanLib.js";
import assert from "node:assert/strict";
/**
 * Consolidated glass-coverage opportunity scanner.
 *
 * This authoring report ranks the three active glass-coverage sweeps:
 *   1. catalog-mismatch relabels, with local untracked patent PDF status;
 *   2. high-frequency six-digit code-only rows missing strict catalog Sellmeier data;
 *   3. proprietary glasses where line-index backfill is the likely upgrade path.
 *
 * Rendered by the explicit glass-report command; regression tests compare the output.
 *
 * Regenerate: `npm run generate:glass-reports`
 *
 * The report embeds match statuses against the untracked local `patents/` PDF
 * inventory and sorts Sweep 1 by them, so the rewrite is skipped when that
 * inventory is empty (fresh worktrees, CI); the checked-in report stays
 * authoritative there.
 */
import { existsSync, readFileSync } from "node:fs";
import type { DispersionQuality } from "../../src/optics/dispersion.js";
import { allEntries, resolveCompatibleGlass, resolveGlass, decodeCode6 } from "../../src/optics/glassCatalog.js";
import {
  extractPatentNumber,
  findCandidates,
  findLocalPatent,
  extractSixDigitCodes,
  isCodeOnlyGlassAnnotation,
  isExplicitlyUnmatched,
  patentInventory,
  walkLensSurfaces,
  type EmbeddedCode,
  type GlassScanCandidate,
  type PatentMatch,
} from "./glassScanLib.js";
import type { RefractiveIndexReferenceLine } from "../../src/types/optics.js";

const REPORT_DIR = "agent_docs/generated";
const REVIEWED_SIDECAR = "agent_docs/generated/six-digit-glass-codes-missing-sellmeier-reviewed.md";
const TOP_CODE_COUNT = 25;
const TOP_NAMED_TOKEN_COUNT = 25;
const MAX_RELEVANT_PATENTS = 4;

type Candidate = GlassScanCandidate;

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
  referenceLine: RefractiveIndexReferenceLine;
  catalogName: string;
  candidates: Candidate[];
  localPatent: PatentMatch;
}

interface MissingSurface {
  label: string;
  elementLabel: string;
  glassString: string;
  quality: DispersionQuality | "missing";
  materialKind: MissingMaterialKind;
}

type MissingMaterialKind = "glass" | "resin" | "cement" | "plastic" | "other";

interface CoverageOpportunity {
  lensName: string;
  visible: boolean;
  patentNumber: string | null;
  localPatent: PatentMatch;
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
  explicitlyUnmatched: boolean;
  localPatent: PatentMatch;
  reviewedStatus: string;
  auditReviewed: boolean;
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

function escapeTableCell(value: string): string {
  return value.replace(/\|/g, "\\|").replace(/\r?\n/g, " ");
}

function missingSurfaceSummary(rows: readonly MissingSurface[]): string {
  return rows
    .map(
      (row) =>
        `${escapeTableCell(row.label)} [${row.materialKind}] (${escapeTableCell(row.elementLabel)}: \`${escapeTableCell(row.glassString || "no glass annotation")}\`)`,
    )
    .join("<br>");
}

function localPatentSummary(match: PatentMatch): string {
  return match.path ? `[PDF](../../${match.path})` : escapeTableCell(match.status);
}

function extractGlassCode(annotation: string): EmbeddedCode | null {
  const match = annotation.match(/\b(\d{3})[/\-\s](\d{3})\b/) ?? annotation.match(/\b(\d{3})(\d{3})\b/);
  if (!match) return null;
  const { nd, vd } = decodeCode6(`${match[1]}${match[2]}`);
  // Sanity-check: plausible refractive-index range for optical glass. The
  // shared decoder handles the <300 → nd ≥ 2.0 wrap the old local decoders
  // rejected outright.
  if (nd < 1.4 || nd > 2.15) return null;
  return { raw: `${match[1]}/${match[2]}`, nd, vd };
}

export function classifyMissingMaterial(elementLabel: string, glassString: string): MissingMaterialKind {
  const description = `${elementLabel} ${glassString}`;
  if (/\b(?:cement|cemented layer|adhesive|bond layer|bonding layer)\b/i.test(description)) return "cement";
  if (/\b(?:plastic|pmma|polycarbonate)\b/i.test(description)) return "plastic";
  if (/\b(?:resin|polymer|organic|replica layer)\b/i.test(description)) return "resin";
  if (/\b(?:water|liquid|fluid)\b/i.test(description) || !glassString.trim()) return "other";
  return "glass";
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
  const vdPart = candidate.vdDiff === null ? "" : `, Δν=${vdSign}${candidate.vdDiff.toFixed(2)}`;
  return `${candidate.name} (Δn=${ndSign}${candidate.ndDiff.toFixed(4)}${vdPart})`;
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

function hasAuditRecord(filePath: string, codes: readonly string[]): boolean {
  const auditPath = filePath.replace(/\.data\.ts$/, ".audit.md");
  if (!existsSync(auditPath)) return false;
  const auditText = readFileSync(auditPath, "utf8");
  return codes.some((code) => auditText.includes(code));
}

function summarizePatentStatus(rows: readonly { localPatent: PatentMatch }[]): string {
  const paths = [...new Set(rows.map((row) => row.localPatent.path).filter((path): path is string => path !== null))];
  if (paths.length > 0) return paths.slice(0, MAX_RELEVANT_PATENTS).join("<br>");
  const statuses = [...new Set(rows.map((row) => row.localPatent.status))];
  return statuses.slice(0, MAX_RELEVANT_PATENTS).join("<br>");
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

import type { GlassLensModules } from "./glassScanLib.js";

export function renderGlassCoverageOpportunitiesScan(modules: GlassLensModules, patentFiles = patentInventory()) {
  const reports: Record<string, string> = {};
  const emitReport = (path: string, text: string) => {
    reports[path] = text;
  };

  const entries = allEntries();

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

  totalLenses = walkLensSurfaces(modules, ({ filePath, data, L }) => {
    const visible = data.visible !== false;
    const patentNumber = extractPatentNumber(data.patentNumber, data.subtitle);
    const localPatent = findLocalPatent(patentNumber, patentFiles);
    if (visible) visibleLenses++;

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
      const compatibleEntry = resolveCompatibleGlass(element?.glass, surface.nd, element?.vd, element?.indexReference);
      const entry = element?.glass ? resolveGlass(element.glass) : null;
      const sellmeierEligible = compatibleEntry !== null;
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
        const elementLabel = element?.label || element?.name || "element";
        const glassString = element?.glass ?? "";
        missingSurfaces.push({
          label: surface.label ?? `surface[${i}]`,
          elementLabel,
          glassString,
          quality,
          materialKind: classifyMissingMaterial(elementLabel, glassString),
        });
      }
      if (!trustedChromatic) {
        const elementLabel = element?.label || element?.name || "element";
        const glassString = element?.glass ?? "";
        const missingSurface: MissingSurface = {
          label: surface.label ?? `surface[${i}]`,
          elementLabel,
          glassString,
          quality,
          materialKind: classifyMissingMaterial(elementLabel, glassString),
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
        referenceLine: element.indexReference ?? "d",
        catalogName: entry.name,
        candidates: findCandidates(
          entries,
          surface.nd,
          element.vd,
          element.dPgF,
          element.indexReference === "e" ? null : extractGlassCode(element.glass),
          element.indexReference ?? "d",
        ),
        localPatent,
      });
    }

    coverageRows.push({
      lensName: data.name ?? data.key,
      visible,
      patentNumber,
      localPatent,
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
      const hasSellmeierEligibleSurface = elementSurfaces.some(
        ({ surface }) => resolveCompatibleGlass(element.glass, surface.nd, element.vd, element.indexReference) !== null,
      );

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
          explicitlyUnmatched: isExplicitlyUnmatched(element.glass),
          localPatent,
          reviewedStatus: reviewedSidecarStatus(filePath, codes, reviewedSidecarText),
          auditReviewed: hasAuditRecord(filePath, codes),
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
  });

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

  const activeUnreviewedCodeRows = codeRows.filter((row) => !hasReviewRecord(row));
  const explicitCodeDispositions = codeRows.filter((row) => row.explicitlyUnmatched);
  const dispositionsWithoutReviewRecord = explicitCodeDispositions.filter((row) => !hasReviewRecord(row));
  const visibleNearCompleteGlass = visibleNearComplete.filter((row) =>
    row.missingTrustedSurfaces.every((surface) => surface.materialKind === "glass"),
  );
  const visibleNearCompleteNonGlass = visibleNearComplete.filter((row) =>
    row.missingTrustedSurfaces.some((surface) => surface.materialKind !== "glass"),
  );
  const codeFrequency = new Map<string, CodeOpportunity[]>();
  for (const row of activeUnreviewedCodeRows) {
    for (const code of row.codes) {
      const list = codeFrequency.get(code) ?? [];
      list.push(row);
      codeFrequency.set(code, list);
    }
  }
  const sortedCodeFrequency = [...codeFrequency.entries()].sort((a, b) => {
    const localPatentDiff =
      Number(b[1].some((row) => row.localPatent.path !== null)) -
      Number(a[1].some((row) => row.localPatent.path !== null));
    if (localPatentDiff !== 0) return localPatentDiff;
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
  const namedElementCount = new Set(
    namedTokenRows.map(
      (row) => `${row.filePath}|${row.elementName}|${row.glassString}|${row.storedNd}|${row.storedVd ?? ""}`,
    ),
  ).size;

  // Without the untracked local patents/ inventory, a rewrite would replace every
  // localPatentStatus with environment-dependent "Missing ..." churn and reorder
  // Sweep 1; keep the checked-in report (generated where patents/ is populated)
  // untouched instead.
  if (patentFiles.length === 0) {
    console.warn(
      "glassCoverageOpportunitiesScan: no local patents/*.pdf references found; skipping patent-dependent report output.",
    );
    assert(totalLenses > 0);
    return;
  }

  const lines: string[] = [];
  lines.push("# Glass Coverage Opportunities (auto-generated)");
  lines.push("");
  lines.push("Consolidated work queue for the three planned glass-coverage sweeps.");
  lines.push("Rows that cite `patents/` refer to ignored/untracked local PDF files used as source references only.");
  lines.push("Do not add, stage, or commit those patent files.");
  lines.push("");
  lines.push("**Regenerate this file** by running `npm run generate:glass-reports`.");
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
  lines.push(
    `- **${codeRows.length}** code-only missing-Sellmeier elements in Sweep 2: **${activeUnreviewedCodeRows.length}** active unreviewed, **${explicitCodeDispositions.length}** self-recording explicit dispositions, **${dispositionsWithoutReviewRecord.length}** dispositions missing any review record`,
  );
  lines.push(
    `- **${namedElementCount}** unresolved named-token elements in Sweep 2B, producing **${namedTokenRows.length}** token occurrences across **${namedTokenFrequency.size}** distinct tokens`,
  );
  lines.push(`- **${proprietaryRows.length}** Tier A proprietary backfill rows in Sweep 3`);
  lines.push("");

  lines.push("## Sweep 1 - Relabel Mismatches");
  lines.push("");
  lines.push(
    "Patent PDFs under `patents/` are untracked local references. A missing local patent status is a source blocker for the requested first sweep.",
  );
  lines.push("");
  lines.push(
    "| Lens | Patent | Surface | Ref | Current label | Stored n/ν | Best candidate(s) | localPatentPath | localPatentStatus |",
  );
  lines.push("|---|---|---|---|---|---|---|---|---|");
  for (const row of relabels.sort((a, b) => {
    const localDiff = Number(Boolean(b.localPatent.path)) - Number(Boolean(a.localPatent.path));
    if (localDiff !== 0) return localDiff;
    const candidateDiff = b.candidates.length - a.candidates.length;
    if (candidateDiff !== 0) return candidateDiff;
    return a.lensName.localeCompare(b.lensName);
  })) {
    const vd = row.storedVd === undefined ? "?" : row.storedVd.toFixed(2);
    lines.push(
      `| [${row.lensName}](../../${row.filePath})${row.visible ? "" : " *(hidden)*"} | ${row.patentNumber ?? ""} | ${row.surfaceLabel} | ${row.referenceLine} | \`${row.glassString}\` | ${row.storedNd.toFixed(5)} / ${vd} | ${candidateSummary(row.candidates)} | ${row.localPatent.path ?? ""} | ${row.localPatent.status} |`,
    );
  }
  lines.push("");

  lines.push("## Near-Complete Visible Lenses - Glass Opportunities");
  lines.push("");
  lines.push(
    "These lenses are missing trusted chromatic data only on glass elements. One or two source-verified glass upgrades can make each lens fully trusted. Strict Sellmeier coverage remains shown separately.",
  );
  lines.push("");
  lines.push(
    "| Lens | Patent | Local source | Trusted chromatic coverage | Strict Sellmeier coverage | Missing trusted surfaces | Missing surface details | Missing quality mix |",
  );
  lines.push("|---|---|---|---:|---:|---:|---|---|");
  for (const row of visibleNearCompleteGlass) {
    lines.push(
      `| [${row.lensName}](../../${row.filePath}) | ${row.patentNumber ?? ""} | ${localPatentSummary(row.localPatent)} | ${formatPercent(row.trustedChromaticSurfaces, row.nonAirSurfaces)} (${row.trustedChromaticSurfaces}/${row.nonAirSurfaces}) | ${formatPercent(row.sellmeierSurfaces, row.nonAirSurfaces)} (${row.sellmeierSurfaces}/${row.nonAirSurfaces}) | ${row.missingTrustedSurfaces.length} | ${missingSurfaceSummary(row.missingTrustedSurfaces)} | ${qualityMix(row.missingTrustedSurfaces)} |`,
    );
  }
  lines.push("");

  lines.push("## Near-Complete Visible Lenses - Non-Glass or Mixed-Material Gaps");
  lines.push("");
  lines.push(
    "These rows contain resin, cement, plastic, liquid, or unclassified optical media. They are excluded from the glass-catalog priority list and need material-specific dispersion data.",
  );
  lines.push("");
  lines.push(
    "| Lens | Patent | Local source | Trusted chromatic coverage | Strict Sellmeier coverage | Missing trusted surfaces | Missing material details | Missing quality mix |",
  );
  lines.push("|---|---|---|---:|---:|---:|---|---|");
  for (const row of visibleNearCompleteNonGlass) {
    lines.push(
      `| [${row.lensName}](../../${row.filePath}) | ${row.patentNumber ?? ""} | ${localPatentSummary(row.localPatent)} | ${formatPercent(row.trustedChromaticSurfaces, row.nonAirSurfaces)} (${row.trustedChromaticSurfaces}/${row.nonAirSurfaces}) | ${formatPercent(row.sellmeierSurfaces, row.nonAirSurfaces)} (${row.sellmeierSurfaces}/${row.nonAirSurfaces}) | ${row.missingTrustedSurfaces.length} | ${missingSurfaceSummary(row.missingTrustedSurfaces)} | ${qualityMix(row.missingTrustedSurfaces)} |`,
    );
  }
  lines.push("");

  lines.push("## Sweep 2 - Active Unreviewed Code-Only Rows");
  lines.push("");
  lines.push(
    "Sidecar/audit-log review hits and explicit unmatched/proprietary dispositions are excluded. The dedicated six-digit missing-Sellmeier report provides the full impact-ranked A-E queue.",
  );
  lines.push(
    "Add catalog entries only when public coefficient-backed vendor data is available and `assertCatalogConsistent` passes.",
  );
  lines.push("");
  lines.push("| Code | Active elements | Lens files | localPatentStatus | Representative rows |");
  lines.push("|---|---:|---:|---|---|");
  for (const [code, rows] of sortedCodeFrequency.slice(0, TOP_CODE_COUNT)) {
    const lensCount = new Set(rows.map((row) => row.filePath)).size;
    const reps = rows
      .slice(0, 3)
      .map(
        (row) =>
          `[${escapeTableCell(row.lensName)}](../../${row.filePath}) ${escapeTableCell(row.elementName)} (${row.storedNd.toFixed(5)} / ${row.storedVd?.toFixed(2) ?? "?"})`,
      )
      .join("<br>");
    lines.push(`| ${code} | ${rows.length} | ${lensCount} | ${summarizePatentStatus(rows)} | ${reps} |`);
  }
  if (sortedCodeFrequency.length > TOP_CODE_COUNT) {
    lines.push("");
    lines.push(
      `Showing the top ${TOP_CODE_COUNT} of ${sortedCodeFrequency.length} distinct codes; use the dedicated six-digit reports for the complete queue.`,
    );
  }
  lines.push("");

  lines.push("## Sweep 2B - Named Tokens Missing Catalog Resolution");
  lines.push("");
  lines.push(
    "These unresolved catalog-style labels are often better first catalog targets than already-reviewed proprietary six-digit rows.",
  );
  lines.push("");
  lines.push("| Token | Token occurrences | Lens files | localPatentStatus | Representative rows |");
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
  if (sortedNamedTokenFrequency.length > TOP_NAMED_TOKEN_COUNT) {
    lines.push("");
    lines.push(
      `Showing the top ${TOP_NAMED_TOKEN_COUNT} of ${sortedNamedTokenFrequency.length} distinct named tokens.`,
    );
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

  emitReport(`${REPORT_DIR}/glass-coverage-opportunities.generated.md`, lines.join("\n") + "\n");

  assert(totalLenses > 0);

  return reports;
}
