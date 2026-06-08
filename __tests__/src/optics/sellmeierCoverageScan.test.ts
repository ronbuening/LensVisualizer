/**
 * Sellmeier coverage scanner.
 *
 * Walks every lens in the catalog and reports how completely each lens is
 * backed by strict catalog Sellmeier data. This uses the same safety net as
 * src/optics/dispersion.ts: a glass annotation must resolve to a catalog entry
 * and the catalog d-line index must agree with the stored surface.nd closely
 * enough for the runtime to trust it.
 *
 * Always passes — its job is to emit an authoring report, not to gate CI.
 *
 * Regenerate: `npm test -- sellmeierCoverageScan`
 */
import { describe, expect, it } from "vitest";
import { mkdirSync, writeFileSync } from "node:fs";
import buildLens from "../../../src/optics/buildLens.js";
import { evaluateSellmeier, LINE_NM, resolveGlass } from "../../../src/optics/glassCatalog.js";
import type { DispersionQuality } from "../../../src/optics/dispersion.js";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import type { ElementData, LensData } from "../../../src/types/optics.js";

const modules = import.meta.glob<{ default: LensData }>("../../../src/lens-data/**/*.data.ts", { eager: true });

const REPORT_DIR = "agent_docs/generated";
const MISMATCH_TOLERANCE = 5e-3;
const MAX_MISSING_DETAILS = 8;
const COVERAGE_BUCKET_SIZE = 5;

interface MissingSurface {
  label: string;
  elementLabel: string;
  glassString: string;
  quality: DispersionQuality | "missing";
  reason: string;
}

interface CoverageRow {
  key: string;
  name: string;
  visible: boolean;
  patentNumber: string | null;
  filePath: string;
  glassElements: number;
  fullySellmeierElements: number;
  fullyTrustedChromaticElements: number;
  nonAirSurfaces: number;
  sellmeierSurfaces: number;
  trustedChromaticSurfaces: number;
  missingSurfaces: MissingSurface[];
  missingTrustedSurfaces: MissingSurface[];
}

function toRepoRelativeLensPath(modulePath: string): string {
  const lensDataIndex = modulePath.indexOf("src/lens-data/");
  return lensDataIndex >= 0 ? modulePath.slice(lensDataIndex) : modulePath.replace(/^(\.\.\/)+/, "");
}

function extractPatentNumber(subtitle: string | undefined): string | null {
  const match = subtitle?.match(
    /\b(?:Patent\s+)?((?:JPWO|WO|US|JP|DE|GB|FR|CH)\s*\d[\d,./-]*(?:\s*(?:A1|A|B2|B1|B|C\d?))?)/i,
  );
  return match?.[1].replace(/\s+/g, " ").trim() ?? null;
}

function isExplicitlyUnmatched(glassString: string | undefined): boolean {
  return /\b(unmatched|unknown|proprietary|unidentified)\b/i.test(glassString ?? "");
}

function formatPercent(numerator: number, denominator: number): string {
  if (denominator === 0) return "100.0%";
  return `${((numerator / denominator) * 100).toFixed(1)}%`;
}

function formatQualityCounts(missingSurfaces: readonly MissingSurface[]): string {
  if (missingSurfaces.length === 0) return "";
  const byQuality = new Map<string, number>();
  for (const surface of missingSurfaces) {
    byQuality.set(surface.quality, (byQuality.get(surface.quality) ?? 0) + 1);
  }
  return [...byQuality.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([quality, count]) => `${quality}: ${count}`)
    .join(", ");
}

function describeMissingSurface(surfaceNd: number, element: ElementData | undefined): string {
  if (!element?.glass) return "No glass annotation";

  const entry = resolveGlass(element.glass);
  if (!entry) {
    return isExplicitlyUnmatched(element.glass) ? "Explicit unmatched/proprietary annotation" : "No catalog match";
  }

  const catalogNd = evaluateSellmeier(entry, LINE_NM.d);
  const diff = catalogNd - surfaceNd;
  if (Math.abs(diff) > MISMATCH_TOLERANCE) {
    const sign = diff >= 0 ? "+" : "";
    return `${entry.name} rejected by nd safety net (Δnd=${sign}${diff.toFixed(4)})`;
  }

  return "Resolved catalog entry did not reach Sellmeier runtime path";
}

function compareCoverage(a: CoverageRow, b: CoverageRow): number {
  const aRatio = a.nonAirSurfaces === 0 ? 1 : a.trustedChromaticSurfaces / a.nonAirSurfaces;
  const bRatio = b.nonAirSurfaces === 0 ? 1 : b.trustedChromaticSurfaces / b.nonAirSurfaces;
  if (aRatio !== bRatio) return bRatio - aRatio;

  const missingDiff = a.missingTrustedSurfaces.length - b.missingTrustedSurfaces.length;
  if (missingDiff !== 0) return missingDiff;

  const sellmeierDiff = b.sellmeierSurfaces - a.sellmeierSurfaces;
  if (sellmeierDiff !== 0) return sellmeierDiff;

  return a.name.localeCompare(b.name);
}

function coverageRatio(row: CoverageRow): number {
  return row.nonAirSurfaces === 0 ? 1 : row.trustedChromaticSurfaces / row.nonAirSurfaces;
}

function coverageBucketLabel(row: CoverageRow): string {
  const percent = coverageRatio(row) * 100;
  const lower = Math.floor(percent / COVERAGE_BUCKET_SIZE) * COVERAGE_BUCKET_SIZE;
  const upper = lower + COVERAGE_BUCKET_SIZE;
  if (lower >= 95) return "95-99.9%";
  return `${lower}-${upper - 0.1}%`;
}

function lineIndexSurfaceCount(row: CoverageRow): number {
  return row.trustedChromaticSurfaces - row.sellmeierSurfaces;
}

describe("Sellmeier coverage scan", () => {
  it("emits a completeness-ordered report for the lens catalog", () => {
    const rows: CoverageRow[] = [];

    for (const [path, mod] of Object.entries(modules)) {
      const raw = mod.default;
      if (!raw?.key) continue;

      const data: LensData = { ...LENS_DEFAULTS, ...raw } as LensData;
      const L = buildLens(data);
      const elementById = new Map(L.elements.map((element) => [element.id, element]));

      const missingSurfaces: MissingSurface[] = [];
      const missingTrustedSurfaces: MissingSurface[] = [];
      let nonAirSurfaces = 0;
      let sellmeierSurfaces = 0;
      let trustedChromaticSurfaces = 0;

      for (let i = 0; i < L.S.length; i++) {
        const surface = L.S[i];
        if (surface.nd === 1) continue;
        nonAirSurfaces++;

        const element = surface.elemId ? elementById.get(surface.elemId) : undefined;
        const catalogEntry = element?.glass ? resolveGlass(element.glass) : null;
        const catalogNd = catalogEntry ? evaluateSellmeier(catalogEntry, LINE_NM.d) : null;
        const sellmeierEligible = catalogNd !== null && Math.abs(catalogNd - surface.nd) <= MISMATCH_TOLERANCE;
        const quality = L.indexByIdx?.[i]?.quality ?? "missing";
        const trustedChromatic = sellmeierEligible || quality === "lineIndices";

        if (sellmeierEligible) {
          sellmeierSurfaces++;
        }
        if (trustedChromatic) {
          trustedChromaticSurfaces++;
        }
        if (!sellmeierEligible) {
          missingSurfaces.push({
            label: surface.label ?? `surface[${i}]`,
            elementLabel: element?.label || element?.name || "element",
            glassString: element?.glass ?? "",
            quality,
            reason: describeMissingSurface(surface.nd, element),
          });
        }
        if (!trustedChromatic) {
          missingTrustedSurfaces.push({
            label: surface.label ?? `surface[${i}]`,
            elementLabel: element?.label || element?.name || "element",
            glassString: element?.glass ?? "",
            quality,
            reason: describeMissingSurface(surface.nd, element),
          });
        }
      }

      const glassElements = L.elements.filter((element) => element.glass).length;
      const fullySellmeierElements = L.elements.filter((element) => {
        if (!element.glass) return false;
        const catalogEntry = resolveGlass(element.glass);
        if (!catalogEntry) return false;
        const catalogNd = evaluateSellmeier(catalogEntry, LINE_NM.d);
        const elementSurfaces = L.S.map((surface, index) => ({ surface, index })).filter(
          ({ surface }) => surface.nd !== 1 && surface.elemId === element.id,
        );
        return (
          elementSurfaces.length > 0 &&
          elementSurfaces.every(({ surface }) => Math.abs(catalogNd - surface.nd) <= MISMATCH_TOLERANCE)
        );
      }).length;
      const fullyTrustedChromaticElements = L.elements.filter((element) => {
        if (!element.glass) return false;
        const catalogEntry = resolveGlass(element.glass);
        const catalogNd = catalogEntry ? evaluateSellmeier(catalogEntry, LINE_NM.d) : null;
        const elementSurfaces = L.S.map((surface, index) => ({ surface, index })).filter(
          ({ surface }) => surface.nd !== 1 && surface.elemId === element.id,
        );
        return (
          elementSurfaces.length > 0 &&
          elementSurfaces.every(({ surface, index }) => {
            const sellmeierEligible = catalogNd !== null && Math.abs(catalogNd - surface.nd) <= MISMATCH_TOLERANCE;
            return sellmeierEligible || L.indexByIdx?.[index]?.quality === "lineIndices";
          })
        );
      }).length;

      rows.push({
        key: data.key,
        name: data.name ?? data.key,
        visible: data.visible !== false,
        patentNumber: extractPatentNumber(data.subtitle),
        filePath: toRepoRelativeLensPath(path),
        glassElements,
        fullySellmeierElements,
        fullyTrustedChromaticElements,
        nonAirSurfaces,
        sellmeierSurfaces,
        trustedChromaticSurfaces,
        missingSurfaces,
        missingTrustedSurfaces,
      });
    }

    const sortedRows = [...rows].sort(compareCoverage);
    const completeRows = sortedRows.filter((row) => row.nonAirSurfaces > 0 && row.missingTrustedSurfaces.length === 0);
    const sellmeierCompleteRows = sortedRows.filter(
      (row) => row.nonAirSurfaces > 0 && row.missingSurfaces.length === 0,
    );
    const lineIndexCompleteRows = completeRows.filter((row) => row.missingSurfaces.length > 0);
    const visibleRows = sortedRows.filter((row) => row.visible);
    const visibleCompleteRows = completeRows.filter((row) => row.visible);
    const visibleSellmeierCompleteRows = sellmeierCompleteRows.filter((row) => row.visible);
    const visibleLineIndexCompleteRows = lineIndexCompleteRows.filter((row) => row.visible);
    const incompleteRows = sortedRows.filter((row) => row.missingTrustedSurfaces.length > 0);
    const visibleIncompleteRows = visibleRows.filter((row) => row.missingTrustedSurfaces.length > 0);
    const totalNonAirSurfaces = rows.reduce((sum, row) => sum + row.nonAirSurfaces, 0);
    const totalSellmeierSurfaces = rows.reduce((sum, row) => sum + row.sellmeierSurfaces, 0);
    const totalTrustedChromaticSurfaces = rows.reduce((sum, row) => sum + row.trustedChromaticSurfaces, 0);

    const lines: string[] = [];
    lines.push("# Sellmeier Coverage by Lens (auto-generated)");
    lines.push("");
    lines.push("Completeness-ranked view of the lens catalog using trusted chromatic coverage.");
    lines.push(
      "Strict Sellmeier coverage is still reported: a surface counts when its `glass` annotation resolves to a catalog entry",
    );
    lines.push(`and the catalog d-line index agrees with the stored \`surface.nd\` within ${MISMATCH_TOLERANCE}.`);
    lines.push("Trusted chromatic coverage additionally counts measured C/F/g line-index surfaces.");
    lines.push("");
    lines.push("**Regenerate this file** by running `npm test -- sellmeierCoverageScan`.");
    lines.push("Regenerate the full glass report set with `npm run generate:glass-reports`.");
    lines.push("");
    lines.push("## Summary");
    lines.push("");
    lines.push(`- **${rows.length}** lenses scanned`);
    lines.push(`- **${visibleRows.length}** visible lenses scanned`);
    lines.push(`- **${completeRows.length}** lenses fully covered by trusted chromatic data`);
    lines.push(`- **${visibleCompleteRows.length}** visible lenses fully covered by trusted chromatic data`);
    lines.push(`- **${sellmeierCompleteRows.length}** lenses fully covered by strict Sellmeier data`);
    lines.push(`- **${visibleSellmeierCompleteRows.length}** visible lenses fully covered by strict Sellmeier data`);
    lines.push(`- **${lineIndexCompleteRows.length}** lenses fully covered only after measured line-index data`);
    lines.push(
      `- **${visibleLineIndexCompleteRows.length}** visible lenses fully covered only after measured line-index data`,
    );
    lines.push(
      `- **${totalSellmeierSurfaces} / ${totalNonAirSurfaces}** non-air surfaces use strict catalog Sellmeier data`,
    );
    lines.push(
      `- **${formatPercent(totalSellmeierSurfaces, totalNonAirSurfaces)}** strict Sellmeier surface coverage overall`,
    );
    lines.push(
      `- **${totalTrustedChromaticSurfaces} / ${totalNonAirSurfaces}** non-air surfaces use trusted chromatic data`,
    );
    lines.push(
      `- **${formatPercent(totalTrustedChromaticSurfaces, totalNonAirSurfaces)}** trusted chromatic coverage overall`,
    );
    lines.push("");

    lines.push("## Fully Strict Sellmeier Lenses");
    lines.push("");
    lines.push("| Lens | Elements Sellmeier | Non-air surfaces | Strict Sellmeier surfaces |");
    lines.push("|---|---:|---:|---:|");
    for (const row of sellmeierCompleteRows) {
      const hidden = row.visible ? "" : " *(hidden)*";
      lines.push(
        `| [${row.name}](../../${row.filePath})${hidden} | ${row.fullySellmeierElements}/${row.glassElements} | ${row.nonAirSurfaces} | ${row.sellmeierSurfaces}/${row.nonAirSurfaces} |`,
      );
    }
    lines.push("");

    lines.push("## Fully Trusted Through Measured Line Indices");
    lines.push("");
    lines.push(
      "These lenses are complete for chromatic tracing but not strict catalog-Sellmeier complete. Their aggregate LCA/TCA dispersion badge should read `Line indices`.",
    );
    lines.push("");
    lines.push(
      "| Lens | Elements trusted | Elements Sellmeier | Non-air surfaces | Strict Sellmeier surfaces | Line-index surfaces | LCA/TCA badge |",
    );
    lines.push("|---|---:|---:|---:|---:|---:|---|");
    for (const row of lineIndexCompleteRows) {
      const hidden = row.visible ? "" : " *(hidden)*";
      lines.push(
        `| [${row.name}](../../${row.filePath})${hidden} | ${row.fullyTrustedChromaticElements}/${row.glassElements} | ${row.fullySellmeierElements}/${row.glassElements} | ${row.nonAirSurfaces} | ${row.sellmeierSurfaces}/${row.nonAirSurfaces} | ${lineIndexSurfaceCount(row)} | Line indices |`,
      );
    }
    if (lineIndexCompleteRows.length === 0) {
      lines.push("| _None_ |  |  |  |  |  |  |");
    }
    lines.push("");

    lines.push("## Incomplete Lenses by Completeness");
    lines.push("");
    lines.push(
      "Fully strict and line-index-complete trusted lenses are listed above; this table focuses on remaining chromatic gaps.",
    );
    lines.push("");
    lines.push(
      "| Rank | Lens | Trusted chromatic coverage | Strict Sellmeier coverage | Elements trusted | Elements Sellmeier | Missing trusted surfaces | Missing quality mix |",
    );
    lines.push("|---:|---|---:|---:|---:|---:|---:|---|");
    let previousBucket = "";
    for (const [index, row] of incompleteRows.entries()) {
      const bucket = coverageBucketLabel(row);
      if (bucket !== previousBucket) {
        lines.push(`|  | **${bucket} coverage** |  |  |  |  |  |  |`);
        previousBucket = bucket;
      }
      const hidden = row.visible ? "" : " *(hidden)*";
      lines.push(
        `| ${index + 1} | [${row.name}](../../${row.filePath})${hidden} | ${formatPercent(row.trustedChromaticSurfaces, row.nonAirSurfaces)} | ${formatPercent(row.sellmeierSurfaces, row.nonAirSurfaces)} | ${row.fullyTrustedChromaticElements}/${row.glassElements} | ${row.fullySellmeierElements}/${row.glassElements} | ${row.missingTrustedSurfaces.length} | ${formatQualityCounts(row.missingTrustedSurfaces)} |`,
      );
    }
    lines.push("");

    lines.push("## Missing Surface Details");
    lines.push("");
    lines.push("Incomplete visible lenses, still ordered by descending trusted chromatic completeness.");
    lines.push("");
    for (const row of visibleIncompleteRows) {
      const patentSuffix = row.patentNumber ? ` - ${row.patentNumber}` : "";
      lines.push(
        `### [${row.name}](../../${row.filePath}) - ${formatPercent(row.trustedChromaticSurfaces, row.nonAirSurfaces)} trusted (${row.trustedChromaticSurfaces}/${row.nonAirSurfaces}); ${formatPercent(row.sellmeierSurfaces, row.nonAirSurfaces)} Sellmeier (${row.sellmeierSurfaces}/${row.nonAirSurfaces})${patentSuffix}`,
      );
      lines.push("");
      lines.push("| Surface | Element | Runtime quality | Glass annotation | Reason |");
      lines.push("|---|---|---|---|---|");
      for (const surface of row.missingTrustedSurfaces.slice(0, MAX_MISSING_DETAILS)) {
        lines.push(
          `| ${surface.label} | ${surface.elementLabel} | ${surface.quality} | \`${surface.glassString || "(none)"}\` | ${surface.reason} |`,
        );
      }
      if (row.missingTrustedSurfaces.length > MAX_MISSING_DETAILS) {
        const hiddenCount = row.missingTrustedSurfaces.length - MAX_MISSING_DETAILS;
        lines.push(`| ... | ... | ... | ... | ${hiddenCount} more missing surface${hiddenCount === 1 ? "" : "s"} |`);
      }
      lines.push("");
    }

    mkdirSync(REPORT_DIR, { recursive: true });
    writeFileSync(`${REPORT_DIR}/sellmeier-coverage.generated.md`, lines.join("\n") + "\n");

    expect(rows.length).toBeGreaterThan(0);
  });
});
