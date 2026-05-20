/**
 * Sellmeier coverage scanner.
 *
 * Walks every lens in the catalog and reports how completely each lens is
 * backed by the strict runtime Sellmeier path. This uses the same safety net as
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
  nonAirSurfaces: number;
  sellmeierSurfaces: number;
  missingSurfaces: MissingSurface[];
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
  const aRatio = a.nonAirSurfaces === 0 ? 1 : a.sellmeierSurfaces / a.nonAirSurfaces;
  const bRatio = b.nonAirSurfaces === 0 ? 1 : b.sellmeierSurfaces / b.nonAirSurfaces;
  if (aRatio !== bRatio) return bRatio - aRatio;

  const missingDiff = a.missingSurfaces.length - b.missingSurfaces.length;
  if (missingDiff !== 0) return missingDiff;

  const sellmeierDiff = b.sellmeierSurfaces - a.sellmeierSurfaces;
  if (sellmeierDiff !== 0) return sellmeierDiff;

  return a.name.localeCompare(b.name);
}

function coverageRatio(row: CoverageRow): number {
  return row.nonAirSurfaces === 0 ? 1 : row.sellmeierSurfaces / row.nonAirSurfaces;
}

function coverageBucketLabel(row: CoverageRow): string {
  const percent = coverageRatio(row) * 100;
  const lower = Math.floor(percent / COVERAGE_BUCKET_SIZE) * COVERAGE_BUCKET_SIZE;
  const upper = lower + COVERAGE_BUCKET_SIZE;
  if (lower >= 95) return "95-99.9%";
  return `${lower}-${upper - 0.1}%`;
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
      let nonAirSurfaces = 0;
      let sellmeierSurfaces = 0;

      for (let i = 0; i < L.S.length; i++) {
        const surface = L.S[i];
        if (surface.nd === 1) continue;
        nonAirSurfaces++;

        const quality = L.indexByIdx?.[i]?.quality ?? "missing";
        if (quality === "sellmeier") {
          sellmeierSurfaces++;
          continue;
        }

        const element = surface.elemId ? elementById.get(surface.elemId) : undefined;
        missingSurfaces.push({
          label: surface.label ?? `surface[${i}]`,
          elementLabel: element?.label || element?.name || "element",
          glassString: element?.glass ?? "",
          quality,
          reason: describeMissingSurface(surface.nd, element),
        });
      }

      const glassElements = L.elements.filter((element) => element.glass).length;
      const fullySellmeierElements = L.elements.filter((element) => {
        if (!element.glass) return false;
        const elementSurfaces = L.S.map((surface, index) => ({ surface, index })).filter(
          ({ surface }) => surface.nd !== 1 && surface.elemId === element.id,
        );
        return (
          elementSurfaces.length > 0 &&
          elementSurfaces.every(({ index }) => L.indexByIdx?.[index]?.quality === "sellmeier")
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
        nonAirSurfaces,
        sellmeierSurfaces,
        missingSurfaces,
      });
    }

    const sortedRows = [...rows].sort(compareCoverage);
    const completeRows = sortedRows.filter((row) => row.nonAirSurfaces > 0 && row.missingSurfaces.length === 0);
    const visibleRows = sortedRows.filter((row) => row.visible);
    const visibleCompleteRows = completeRows.filter((row) => row.visible);
    const incompleteRows = sortedRows.filter((row) => row.missingSurfaces.length > 0);
    const visibleIncompleteRows = visibleRows.filter((row) => row.missingSurfaces.length > 0);
    const totalNonAirSurfaces = rows.reduce((sum, row) => sum + row.nonAirSurfaces, 0);
    const totalSellmeierSurfaces = rows.reduce((sum, row) => sum + row.sellmeierSurfaces, 0);

    const lines: string[] = [];
    lines.push("# Sellmeier Coverage by Lens (auto-generated)");
    lines.push("");
    lines.push("Completeness-ranked view of the lens catalog using the strict runtime Sellmeier path.");
    lines.push("A surface counts as covered only when its element's `glass` annotation resolves to a catalog entry");
    lines.push(`and the catalog d-line index agrees with the stored \`surface.nd\` within ${MISMATCH_TOLERANCE}.`);
    lines.push("");
    lines.push("**Regenerate this file** by running `npm test -- sellmeierCoverageScan`.");
    lines.push("Regenerate the full glass report set with `npm run generate:glass-reports`.");
    lines.push("");
    lines.push("## Summary");
    lines.push("");
    lines.push(`- **${rows.length}** lenses scanned`);
    lines.push(`- **${visibleRows.length}** visible lenses scanned`);
    lines.push(`- **${completeRows.length}** lenses fully covered`);
    lines.push(`- **${visibleCompleteRows.length}** visible lenses fully covered`);
    lines.push(`- **${totalSellmeierSurfaces} / ${totalNonAirSurfaces}** non-air surfaces use trusted Sellmeier data`);
    lines.push(`- **${formatPercent(totalSellmeierSurfaces, totalNonAirSurfaces)}** surface coverage overall`);
    lines.push("");

    lines.push("## Fully Covered Lenses");
    lines.push("");
    lines.push("| Lens | Glass elements | Non-air surfaces |");
    lines.push("|---|---:|---:|");
    for (const row of completeRows) {
      const hidden = row.visible ? "" : " *(hidden)*";
      lines.push(`| [${row.name}](../../${row.filePath})${hidden} | ${row.glassElements} | ${row.nonAirSurfaces} |`);
    }
    lines.push("");

    lines.push("## Incomplete Lenses by Completeness");
    lines.push("");
    lines.push("Fully covered lenses are listed above; this table focuses on the remaining catalog work.");
    lines.push("");
    lines.push(
      "| Rank | Lens | Coverage | Sellmeier surfaces | Elements covered | Missing surfaces | Missing quality mix |",
    );
    lines.push("|---:|---|---:|---:|---:|---:|---|");
    let previousBucket = "";
    for (const [index, row] of incompleteRows.entries()) {
      const bucket = coverageBucketLabel(row);
      if (bucket !== previousBucket) {
        lines.push(`|  | **${bucket} coverage** |  |  |  |  |  |`);
        previousBucket = bucket;
      }
      const hidden = row.visible ? "" : " *(hidden)*";
      lines.push(
        `| ${index + 1} | [${row.name}](../../${row.filePath})${hidden} | ${formatPercent(row.sellmeierSurfaces, row.nonAirSurfaces)} | ${row.sellmeierSurfaces}/${row.nonAirSurfaces} | ${row.fullySellmeierElements}/${row.glassElements} | ${row.missingSurfaces.length} | ${formatQualityCounts(row.missingSurfaces)} |`,
      );
    }
    lines.push("");

    lines.push("## Missing Surface Details");
    lines.push("");
    lines.push("Incomplete visible lenses, still ordered by descending completeness.");
    lines.push("");
    for (const row of visibleIncompleteRows) {
      const patentSuffix = row.patentNumber ? ` - ${row.patentNumber}` : "";
      lines.push(
        `### [${row.name}](../../${row.filePath}) - ${formatPercent(row.sellmeierSurfaces, row.nonAirSurfaces)} (${row.sellmeierSurfaces}/${row.nonAirSurfaces})${patentSuffix}`,
      );
      lines.push("");
      lines.push("| Surface | Element | Runtime quality | Glass annotation | Reason |");
      lines.push("|---|---|---|---|---|");
      for (const surface of row.missingSurfaces.slice(0, MAX_MISSING_DETAILS)) {
        lines.push(
          `| ${surface.label} | ${surface.elementLabel} | ${surface.quality} | \`${surface.glassString || "(none)"}\` | ${surface.reason} |`,
        );
      }
      if (row.missingSurfaces.length > MAX_MISSING_DETAILS) {
        const hiddenCount = row.missingSurfaces.length - MAX_MISSING_DETAILS;
        lines.push(`| ... | ... | ... | ... | ${hiddenCount} more missing surface${hiddenCount === 1 ? "" : "s"} |`);
      }
      lines.push("");
    }

    mkdirSync(REPORT_DIR, { recursive: true });
    writeFileSync(`${REPORT_DIR}/sellmeier-coverage.generated.md`, lines.join("\n") + "\n");

    expect(rows.length).toBeGreaterThan(0);
  });
});
