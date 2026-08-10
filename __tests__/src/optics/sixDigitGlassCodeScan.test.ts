/**
 * Six-digit glass-code scanner.
 *
 * Finds element glass annotations that still identify the material only by a
 * six-digit Schott-style code instead of by a concrete catalog glass type. It
 * emits two authoring reports:
 *
 *   1. all code-only elements, regardless of whether the code currently
 *      resolves to trusted catalog Sellmeier data;
 *   2. the subset that does not have trusted Sellmeier data in the runtime
 *      dispersion cascade.
 *
 * Always passes — its job is to surface the data, not gate CI.
 *
 * Regenerate: `npm test -- sixDigitGlassCodeScan`
 *
 * The reports embed match statuses against the untracked local `patents/` PDF
 * inventory, so the rewrite is skipped when that inventory is empty (fresh
 * worktrees, CI); the checked-in reports stay authoritative there.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { evaluateSellmeier, LINE_NM, resolveCompatibleGlass, resolveGlass } from "../../../src/optics/glassCatalog.js";
import type { DispersionQuality } from "../../../src/optics/dispersion.js";
import {
  extractPatentNumber,
  type PatentMatch,
  extractSixDigitCodes,
  findLocalPatent,
  isCodeOnlyGlassAnnotation,
  isExplicitlyUnmatched,
  patentInventory,
  walkLensSurfaces,
} from "./glassScanLib.js";
import type { LensData, RefractiveIndexReferenceLine } from "../../../src/types/optics.js";

const modules = import.meta.glob<{ default: LensData }>("../../../src/lens-data/**/*.data.ts", { eager: true });
const REPORT_DIR = "agent_docs/generated";
const REVIEWED_SIDECAR = "agent_docs/generated/six-digit-glass-codes-missing-sellmeier-reviewed.md";
const MAX_RELEVANT_PATENTS = 4;

interface SurfaceRef {
  label: string;
  quality: DispersionQuality;
}

interface CodeOnlyElement {
  lensKey: string;
  lensName: string;
  visible: boolean;
  patentNumber: string | null;
  filePath: string;
  elementId: number;
  elementName: string;
  elementLabel: string;
  surfaceRefs: SurfaceRef[];
  glassString: string;
  codes: string[];
  storedNd: number;
  storedVd: number | undefined;
  indexReference: RefractiveIndexReferenceLine;
  catalogName: string | null;
  catalogNd: number | null;
  ndDiff: number | null;
  hasSellmeier: boolean;
  lensNonAirSurfaces: number;
  lensSellmeierSurfaces: number;
  explicitlyUnmatched: boolean;
  localPatent: PatentMatch;
  reviewedStatus: string;
  auditReviewed: boolean;
}

interface PrioritizedCode {
  code: string;
  tier: "A" | "B" | "C" | "D" | "E";
  rows: CodeOnlyElement[];
  lensCount: number;
  visibleLensCount: number;
  localPatentLensCount: number;
  strictSurfaceGain: number;
  completionCandidates: string[];
  nearCompleteCandidates: string[];
}

function formatNdDiff(diff: number | null): string {
  if (diff === null) return "";
  const sign = diff >= 0 ? "+" : "";
  return `${sign}${diff.toFixed(4)}`;
}

function qualitySummary(row: CodeOnlyElement): string {
  const qualities = [...new Set(row.surfaceRefs.map((surface) => surface.quality))];
  return qualities.length > 0 ? qualities.join(", ") : "no traced surfaces";
}

function catalogStatus(row: CodeOnlyElement): string {
  if (row.catalogName === null) return "No catalog entry";
  if (row.hasSellmeier) return `${row.catalogName} (trusted Sellmeier)`;
  if (row.indexReference === "e") return `${row.catalogName} context only (e-line prescription)`;
  return `${row.catalogName} rejected (Δnd=${formatNdDiff(row.ndDiff)})`;
}

function sortRows(rows: readonly CodeOnlyElement[]): CodeOnlyElement[] {
  return [...rows].sort((a, b) => {
    const nameDiff = a.lensName.localeCompare(b.lensName);
    if (nameDiff !== 0) return nameDiff;
    return a.elementId - b.elementId;
  });
}

function codeFrequency(rows: readonly CodeOnlyElement[]): [string, number, number][] {
  const byCode = new Map<string, CodeOnlyElement[]>();
  for (const row of rows) {
    for (const code of row.codes) {
      const list = byCode.get(code) ?? [];
      list.push(row);
      byCode.set(code, list);
    }
  }
  return [...byCode.entries()]
    .map<[string, number, number]>(([code, codeRows]) => [
      code,
      codeRows.length,
      new Set(codeRows.map((row) => row.filePath)).size,
    ])
    .sort((a, b) => {
      const countDiff = b[1] - a[1];
      if (countDiff !== 0) return countDiff;
      return a[0].localeCompare(b[0]);
    });
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

type ReviewRecordFields = Pick<CodeOnlyElement, "explicitlyUnmatched" | "reviewedStatus" | "auditReviewed">;

function hasReviewRecord(row: ReviewRecordFields): boolean {
  return row.explicitlyUnmatched || row.reviewedStatus === "Reviewed sidecar hit" || row.auditReviewed;
}

function reviewRecordStatus(row: ReviewRecordFields): string {
  if (row.explicitlyUnmatched) return "Explicit disposition in data";
  if (row.reviewedStatus === "Reviewed sidecar hit") return row.reviewedStatus;
  if (row.auditReviewed) return "Audit-log hit";
  return "No review-record hit";
}

function summarizePatentStatus(rows: readonly CodeOnlyElement[]): string {
  const paths = [...new Set(rows.map((row) => row.localPatent.path).filter((path): path is string => path !== null))];
  if (paths.length > 0) return paths.slice(0, MAX_RELEVANT_PATENTS).join("<br>");
  const statuses = [...new Set(rows.map((row) => row.localPatent.status))];
  return statuses.slice(0, MAX_RELEVANT_PATENTS).join("<br>");
}

function summarizeReviewedStatus(rows: readonly CodeOnlyElement[]): string {
  const reviewed = rows.filter(hasReviewRecord).length;
  const explicit = rows.filter((row) => row.explicitlyUnmatched).length;
  if (explicit === rows.length) return "All rows explicitly disposed";
  if (reviewed === rows.length) return "All rows have review records";
  if (reviewed > 0) return `${reviewed}/${rows.length} rows have review records`;
  return "No review-record hit";
}

function prioritizedUnreviewedCodes(rows: readonly CodeOnlyElement[]): PrioritizedCode[] {
  const activeRows = rows.filter((row) => !hasReviewRecord(row));
  const byCode = new Map<string, CodeOnlyElement[]>();
  for (const row of activeRows) {
    for (const code of row.codes) {
      const codeRows = byCode.get(code) ?? [];
      codeRows.push(row);
      byCode.set(code, codeRows);
    }
  }

  return [...byCode.entries()]
    .map<PrioritizedCode>(([code, codeRows]) => {
      const byLens = new Map<string, CodeOnlyElement[]>();
      for (const row of codeRows) {
        const lensRows = byLens.get(row.filePath) ?? [];
        lensRows.push(row);
        byLens.set(row.filePath, lensRows);
      }

      let visibleLensCount = 0;
      let localPatentLensCount = 0;
      let strictSurfaceGain = 0;
      const completionCandidates: string[] = [];
      const nearCompleteCandidates: string[] = [];
      for (const lensRows of byLens.values()) {
        const first = lensRows[0];
        const lensStrictGain = lensRows.reduce(
          (count, row) => count + row.surfaceRefs.filter((surface) => surface.quality !== "sellmeier").length,
          0,
        );
        strictSurfaceGain += lensStrictGain;
        if (first.localPatent.path !== null) localPatentLensCount++;
        if (!first.visible) continue;
        visibleLensCount++;

        const missingSellmeier = first.lensNonAirSurfaces - first.lensSellmeierSurfaces;
        const currentCoverage = first.lensSellmeierSurfaces / Math.max(1, first.lensNonAirSurfaces);
        if (lensStrictGain >= missingSellmeier) {
          completionCandidates.push(first.lensName);
        } else if (missingSellmeier <= 2 && currentCoverage >= 0.8) {
          nearCompleteCandidates.push(first.lensName);
        }
      }

      const tier: PrioritizedCode["tier"] =
        localPatentLensCount > 0 && completionCandidates.length > 0
          ? "A"
          : localPatentLensCount > 0 && nearCompleteCandidates.length > 0
            ? "B"
            : localPatentLensCount > 0 && (codeRows.length > 1 || byLens.size > 1)
              ? "C"
              : localPatentLensCount > 0
                ? "D"
                : "E";
      return {
        code,
        tier,
        rows: codeRows,
        lensCount: byLens.size,
        visibleLensCount,
        localPatentLensCount,
        strictSurfaceGain,
        completionCandidates: completionCandidates.sort((a, b) => a.localeCompare(b)),
        nearCompleteCandidates: nearCompleteCandidates.sort((a, b) => a.localeCompare(b)),
      };
    })
    .sort(
      (a, b) =>
        a.tier.localeCompare(b.tier) ||
        b.completionCandidates.length - a.completionCandidates.length ||
        b.nearCompleteCandidates.length - a.nearCompleteCandidates.length ||
        b.localPatentLensCount - a.localPatentLensCount ||
        b.strictSurfaceGain - a.strictSurfaceGain ||
        b.lensCount - a.lensCount ||
        a.code.localeCompare(b.code),
    );
}

function summarizeLensNames(names: readonly string[]): string {
  if (names.length === 0) return "—";
  const shown = names.slice(0, 3).map((name) => name.replace(/\|/g, "\\|"));
  const suffix = names.length > shown.length ? `<br>+${names.length - shown.length} more` : "";
  return shown.join("<br>") + suffix;
}

function representativeRows(rows: readonly CodeOnlyElement[]): string {
  return rows
    .slice()
    .sort((a, b) => a.lensName.localeCompare(b.lensName) || a.elementId - b.elementId)
    .slice(0, 3)
    .map(
      (row) =>
        `[${row.lensName.replace(/\|/g, "\\|")}](../../${row.filePath}) ${(row.elementLabel || row.elementName).replace(/\|/g, "\\|")} ` +
        `(${row.storedNd.toFixed(5)} / ${row.storedVd?.toFixed(2) ?? "?"})`,
    )
    .join("<br>");
}

function renderReport(options: {
  title: string;
  description: string[];
  regenerateCommand: string;
  rows: readonly CodeOnlyElement[];
  totalLenses: number;
  totalCodeOnlyElements: number;
  includePrioritizedUnreviewedQueue?: boolean;
}): string {
  const sortedRows = sortRows(options.rows);
  const affectedLenses = new Set(sortedRows.map((row) => row.filePath));
  const lines: string[] = [];

  lines.push(`# ${options.title} (auto-generated)`);
  lines.push("");
  lines.push(...options.description);
  lines.push("");
  lines.push(`**Regenerate this file** by running \`${options.regenerateCommand}\`.`);
  lines.push("Regenerate the full glass report set with `npm run generate:glass-reports`.");
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- **${options.totalLenses}** lenses scanned`);
  lines.push(`- **${options.totalCodeOnlyElements}** total code-only elements found`);
  lines.push(`- **${sortedRows.length}** elements in this report`);
  lines.push(`- **${affectedLenses.size}** distinct lens files affected`);
  if (options.includePrioritizedUnreviewedQueue) {
    const activeUnreviewed = sortedRows.filter((row) => !hasReviewRecord(row));
    const explicitDispositions = sortedRows.filter((row) => row.explicitlyUnmatched);
    const dispositionsWithoutReviewRecord = explicitDispositions.filter((row) => !hasReviewRecord(row));
    lines.push(
      `- **${activeUnreviewed.length}** active unreviewed elements have no review-record hit or explicit disposition`,
    );
    lines.push(
      `- **${explicitDispositions.length}** explicitly unmatched/unknown/proprietary/unidentified elements are self-recording review dispositions`,
    );
    lines.push(`- **${dispositionsWithoutReviewRecord.length}** dispositions lack any review record`);
  }
  lines.push("");

  if (sortedRows.length === 0) {
    lines.push("## No matching elements");
    lines.push("");
    lines.push("No element glass annotations match this report's criteria.");
    return lines.join("\n") + "\n";
  }

  if (options.includePrioritizedUnreviewedQueue) {
    const priorityRows = prioritizedUnreviewedCodes(sortedRows);
    lines.push("## Prioritized Unreviewed Queue");
    lines.push("");
    lines.push(
      "This queue excludes sidecar/audit-log review hits and annotations already marked unmatched, unknown, proprietary, or unidentified.",
    );
    lines.push(
      "Tiers are deterministic: A has a local patent and could complete a visible lens; B has a local patent and affects a near-complete visible lens;",
    );
    lines.push(
      "C has a local patent plus repeated impact; D has one local-patent-backed row; E is blocked on a local patent source.",
    );
    lines.push(
      "Completion counts are conditional on finding a source-verified catalog identity or measured line data for every listed occurrence of that code.",
    );
    lines.push("");
    lines.push(
      "| Tier | Code | Active elements / lens files | Visible lenses | Strict surfaces | Completion candidates | Near-complete candidates | Local patent lenses | Representative rows |",
    );
    lines.push("|---|---|---:|---:|---:|---|---|---:|---|");
    for (const row of priorityRows) {
      lines.push(
        `| ${row.tier} | ${row.code} | ${row.rows.length} / ${row.lensCount} | ${row.visibleLensCount} | ${row.strictSurfaceGain} | ${summarizeLensNames(row.completionCandidates)} | ${summarizeLensNames(row.nearCompleteCandidates)} | ${row.localPatentLensCount}/${row.lensCount} | ${representativeRows(row.rows)} |`,
      );
    }
    lines.push("");
  }

  const frequency = codeFrequency(sortedRows);
  lines.push("## Codes by Frequency");
  lines.push("");
  lines.push("| Code | Elements | Lens files | localPatentStatus | reviewRecordStatus |");
  lines.push("|---|---:|---:|---|---|");
  for (const [code, elementCount, lensCount] of frequency) {
    const rowsForCode = sortedRows.filter((row) => row.codes.includes(code));
    lines.push(
      `| ${code} | ${elementCount} | ${lensCount} | ${summarizePatentStatus(rowsForCode)} | ${summarizeReviewedStatus(rowsForCode)} |`,
    );
  }
  lines.push("");

  const byLens = new Map<string, CodeOnlyElement[]>();
  for (const row of sortedRows) {
    const list = byLens.get(row.lensKey) ?? [];
    list.push(row);
    byLens.set(row.lensKey, list);
  }

  lines.push("## Elements by Lens");
  lines.push("");
  for (const [_lensKey, lensRows] of [...byLens.entries()].sort(
    (a, b) => a[1][0].lensName.localeCompare(b[1][0].lensName) || a[0].localeCompare(b[0]),
  )) {
    const first = lensRows[0];
    const patentSuffix = first.patentNumber ? ` - ${first.patentNumber}` : "";
    lines.push(`### [${first.lensName}](../../${first.filePath})${patentSuffix}`);
    lines.push("");
    lines.push(
      "| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality | localPatentStatus | reviewRecordStatus |",
    );
    lines.push("|---|---|---|---|---|---|---|---|");
    for (const row of lensRows) {
      const vd = row.storedVd === undefined ? "?" : row.storedVd.toFixed(2);
      const surfaces = row.surfaceRefs.map((surface) => surface.label).join(", ") || "element";
      const elementName = row.elementLabel ? `${row.elementName} (${row.elementLabel})` : row.elementName;
      lines.push(
        `| ${elementName} | ${surfaces} | \`${row.glassString}\` | ${row.storedNd.toFixed(5)} / ${vd} | ${catalogStatus(row)} | ${qualitySummary(row)} | ${row.localPatent.path ?? row.localPatent.status} | ${reviewRecordStatus(row)} |`,
      );
    }
    lines.push("");
  }

  return lines.join("\n") + "\n";
}

describe("six-digit glass-code scan", () => {
  it("treats explicit unmatched annotations as self-recording review dispositions", () => {
    expect(
      hasReviewRecord({
        explicitlyUnmatched: true,
        reviewedStatus: "No reviewed-sidecar hit",
        auditReviewed: false,
      }),
    ).toBe(true);
    expect(
      reviewRecordStatus({
        explicitlyUnmatched: true,
        reviewedStatus: "No reviewed-sidecar hit",
        auditReviewed: false,
      }),
    ).toBe("Explicit disposition in data");
  });

  it("emits reports for code-only glass annotations", () => {
    const rows: CodeOnlyElement[] = [];
    const patentFiles = patentInventory();
    const reviewedSidecarText = existsSync(REVIEWED_SIDECAR) ? readFileSync(REVIEWED_SIDECAR, "utf8") : "";
    let totalLenses = 0;

    totalLenses = walkLensSurfaces(modules, ({ filePath, data, L }) => {
      const visible = data.visible !== false;
      const patentNumber = extractPatentNumber(data.subtitle);
      const localPatent = findLocalPatent(patentNumber, patentFiles);
      const lensNonAirSurfaces = L.S.filter((surface) => surface.nd !== 1.0).length;
      const lensSellmeierSurfaces = L.S.filter(
        (surface, index) => surface.nd !== 1.0 && L.indexByIdx?.[index]?.quality === "sellmeier",
      ).length;

      for (const element of L.elements) {
        if (!element.glass || !isCodeOnlyGlassAnnotation(element.glass)) continue;

        const surfaceRefs: SurfaceRef[] = [];
        for (let i = 0; i < L.S.length; i++) {
          const surface = L.S[i];
          if (surface.nd === 1.0 || surface.elemId !== element.id) continue;
          surfaceRefs.push({
            label: surface.label ?? `surface[${i}]`,
            quality: L.indexByIdx?.[i]?.quality ?? "constant",
          });
        }

        const catalogEntry =
          resolveCompatibleGlass(element.glass, element.nd, element.vd, element.indexReference) ??
          resolveGlass(element.glass);
        const catalogNd = catalogEntry ? evaluateSellmeier(catalogEntry, LINE_NM.d) : null;
        const hasSellmeier = L.S.some(
          (surface) =>
            surface.nd !== 1.0 &&
            surface.elemId === element.id &&
            resolveCompatibleGlass(element.glass, surface.nd, element.vd, element.indexReference) !== null,
        );
        rows.push({
          lensKey: data.key,
          lensName: data.name ?? data.key,
          visible,
          patentNumber,
          filePath,
          elementId: element.id,
          elementName: element.name,
          elementLabel: element.label,
          surfaceRefs,
          glassString: element.glass,
          codes: extractSixDigitCodes(element.glass),
          storedNd: element.nd,
          storedVd: element.vd,
          indexReference: element.indexReference ?? "d",
          catalogName: catalogEntry?.name ?? null,
          catalogNd,
          ndDiff: catalogNd === null ? null : catalogNd - element.nd,
          hasSellmeier,
          lensNonAirSurfaces,
          lensSellmeierSurfaces,
          explicitlyUnmatched: isExplicitlyUnmatched(element.glass),
          localPatent,
          reviewedStatus: reviewedSidecarStatus(filePath, extractSixDigitCodes(element.glass), reviewedSidecarText),
          auditReviewed: hasAuditRecord(filePath, extractSixDigitCodes(element.glass)),
        });
      }
    });

    const noSellmeierRows = rows.filter((row) => !row.hasSellmeier);

    // Without the untracked local patents/ inventory, a rewrite would replace every
    // localPatentStatus with environment-dependent "Missing ..." churn; keep the
    // checked-in reports (generated where patents/ is populated) untouched instead.
    if (patentFiles.length === 0) {
      console.warn("sixDigitGlassCodeScan: no local patents/*.pdf references found; skipping report rewrite.");
      expect(totalLenses).toBeGreaterThan(0);
      return;
    }

    mkdirSync(REPORT_DIR, { recursive: true });

    writeFileSync(
      `${REPORT_DIR}/six-digit-glass-codes.generated.md`,
      renderReport({
        title: "Six-Digit Glass Code Elements",
        description: [
          "Elements whose `glass` annotation contains a six-digit glass code but no catalog-like glass type token.",
          "This is the broad inventory: some rows may already resolve to trusted Sellmeier data by code,",
          "but the lens data still lacks a human-readable glass type.",
        ],
        regenerateCommand: "npm test -- sixDigitGlassCodeScan",
        rows,
        totalLenses,
        totalCodeOnlyElements: rows.length,
      }),
    );

    writeFileSync(
      `${REPORT_DIR}/six-digit-glass-codes-missing-sellmeier.generated.md`,
      renderReport({
        title: "Six-Digit Glass Code Elements Missing Sellmeier Data",
        description: [
          "Subset of [six-digit-glass-codes.generated.md](six-digit-glass-codes.generated.md) where no associated",
          "element surface resolves to trusted catalog Sellmeier data through the reference-line safety net.",
          "These are the highest-priority code-only rows for catalog additions, aliases, or explicit `Unmatched` notes.",
        ],
        regenerateCommand: "npm test -- sixDigitGlassCodeScan",
        rows: noSellmeierRows,
        totalLenses,
        totalCodeOnlyElements: rows.length,
        includePrioritizedUnreviewedQueue: true,
      }),
    );

    const prioritized = prioritizedUnreviewedCodes(noSellmeierRows);
    expect(prioritized.every((group) => group.rows.every((row) => !row.explicitlyUnmatched))).toBe(true);
    expect(prioritized.every((group) => group.rows.every((row) => !hasReviewRecord(row)))).toBe(true);
    expect(prioritized.map((group) => group.tier).join("")).toMatch(/^A*B*C*D*E*$/);
    expect(totalLenses).toBeGreaterThan(0);
  });
});
