/**
 * Per-lens glass-relabel work queue.
 *
 * Companion to catalogMismatchScan and glassRelabelCandidatesScan. This report
 * keeps the raw mismatch ordering by lens, but adds the same candidate search
 * used by the candidate report so patent-audit work can proceed one lens at a
 * time.
 *
 * Always passes — its job is to surface the data, not gate CI.
 *
 * Regenerate: `npm test -- glassRelabelByLensScan`
 */
import { describe, expect, it } from "vitest";
import { mkdirSync, writeFileSync } from "node:fs";
import {
  allEntries,
  assessCatalogGlassCompatibility,
  decodeCode6,
  resolveCompatibleGlass,
  resolveGlass,
} from "../../../src/optics/glassCatalog.js";
import {
  extractPatentNumber,
  findCandidates,
  walkLensSurfaces,
  type EmbeddedCode,
  type GlassScanCandidate,
} from "./glassScanLib.js";
import type { LensData, RefractiveIndexReferenceLine } from "../../../src/types/optics.js";

const REPORT_DIR = "agent_docs/generated";

type Candidate = GlassScanCandidate;

interface RelabelRow {
  lensKey: string;
  lensName: string;
  patentNumber: string | null;
  filePath: string;
  surfaceLabel: string;
  glassString: string;
  catalogName: string;
  referenceLine: RefractiveIndexReferenceLine;
  storedNd: number;
  storedVd: number | undefined;
  storedDPgF: number | undefined;
  catalogNd: number;
  catalogDiff: number;
  embeddedCode: EmbeddedCode | null;
  candidates: Candidate[];
}

const modules = import.meta.glob<{ default: LensData }>("../../../src/lens-data/**/*.data.ts", { eager: true });

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

function candidateSummary(candidates: readonly Candidate[]): string {
  if (candidates.length === 0) return "No catalog candidate";
  return candidates
    .slice(0, 3)
    .map((candidate) => {
      const ndSign = candidate.ndDiff >= 0 ? "+" : "";
      const vdSign = candidate.vdDiff !== null && candidate.vdDiff >= 0 ? "+" : "";
      const vdPart = candidate.vdDiff === null ? "" : `, Δν=${vdSign}${candidate.vdDiff.toFixed(2)}`;
      const codePart = candidate.codeDistance === null ? "" : `, codeΔ=${candidate.codeDistance.toFixed(1)}`;
      return `${candidate.name} (Δn=${ndSign}${candidate.ndDiff.toFixed(4)}${vdPart}${codePart})`;
    })
    .join("<br>");
}

function confidenceLabel(candidates: readonly Candidate[]): string {
  if (candidates.length === 0) return "Patent review";
  const first = candidates[0];
  if (candidates.length === 1 && first.vdDiff !== null && Math.abs(first.vdDiff) <= 0.25) return "High";
  if (first.codeDistance !== null && first.codeDistance <= 2) return "High";
  if (candidates.length <= 2) return "Medium";
  return "Choose by context";
}

function auditNeedLabel(candidates: readonly Candidate[]): string {
  if (candidates.length === 0) return "Yes - no catalog match";
  if (confidenceLabel(candidates) === "High") return "Check lens notes";
  return "Yes - choose candidate";
}

function sortRowsByLens(rows: readonly RelabelRow[]): string[] {
  const byLens = new Map<string, RelabelRow[]>();
  for (const row of rows) {
    const list = byLens.get(row.lensKey) ?? [];
    list.push(row);
    byLens.set(row.lensKey, list);
  }

  return [...byLens.keys()].sort((a, b) => {
    const aRows = byLens.get(a)!;
    const bRows = byLens.get(b)!;
    const actionableDiff =
      bRows.filter((row) => row.candidates.length > 0).length - aRows.filter((row) => row.candidates.length > 0).length;
    if (actionableDiff !== 0) return actionableDiff;

    const countDiff = bRows.length - aRows.length;
    if (countDiff !== 0) return countDiff;

    return aRows[0].lensName.localeCompare(bRows[0].lensName);
  });
}

describe("glass relabel by lens scan", () => {
  it("emits a per-lens glass-relabel work queue", () => {
    const entries = allEntries();
    const rows: RelabelRow[] = [];

    walkLensSurfaces(modules, ({ filePath, data, L }) => {
      const patentNumber = extractPatentNumber(data.patentNumber, data.subtitle);
      const elementById = new Map(L.elements.map((element) => [element.id, element]));

      for (let i = 0; i < L.S.length; i++) {
        const surface = L.S[i];
        if (surface.nd === 1.0) continue;

        const element = surface.elemId ? elementById.get(surface.elemId) : undefined;
        if (!element?.glass) continue;
        if (resolveCompatibleGlass(element.glass, surface.nd, element.vd, element.indexReference)) continue;

        const entry = resolveGlass(element.glass);
        if (!entry) continue;

        const compatibility = assessCatalogGlassCompatibility(entry, surface.nd, element.vd, element.indexReference);
        const catalogNd = compatibility.catalogIndex;
        const catalogDiff = compatibility.indexDiff;

        const embeddedCode = extractGlassCode(element.glass);
        rows.push({
          lensKey: data.key,
          lensName: data.name ?? data.key,
          patentNumber,
          filePath,
          surfaceLabel: surface.label ?? `surface[${i}]`,
          glassString: element.glass,
          catalogName: entry.name,
          referenceLine: element.indexReference ?? "d",
          storedNd: surface.nd,
          storedVd: element.vd,
          storedDPgF: element.dPgF,
          catalogNd,
          catalogDiff,
          embeddedCode: element.indexReference === "e" ? null : embeddedCode,
          candidates: findCandidates(
            entries,
            surface.nd,
            element.vd,
            element.dPgF,
            element.indexReference === "e" ? null : embeddedCode,
            element.indexReference ?? "d",
          ),
        });
      }
    });

    const lensKeys = sortRowsByLens(rows);
    const actionableSurfaceCount = rows.filter((row) => row.candidates.length > 0).length;
    const noCandidateSurfaceCount = rows.length - actionableSurfaceCount;
    const highConfidenceSurfaceCount = rows.filter((row) => confidenceLabel(row.candidates) === "High").length;

    const lines: string[] = [];
    lines.push("# Glass Relabels by Lens (auto-generated)");
    lines.push("");
    lines.push("Per-lens work queue combining raw catalog mismatches with candidate relabel targets.");
    lines.push("Use this when auditing a patent lens-by-lens: review all rows for a lens together,");
    lines.push("then update the lens data, companion analysis/audit notes, and regenerate the glass reports.");
    lines.push("");
    lines.push("**Regenerate this file** by running `npm test -- glassRelabelByLensScan`.");
    lines.push("Regenerate the full glass report set with `npm run generate:glass-reports`.");
    lines.push("");
    lines.push("## Summary");
    lines.push("");
    lines.push(`- **${rows.length}** mismatched surfaces across **${lensKeys.length}** lens files`);
    lines.push(`- **${actionableSurfaceCount}** surfaces have at least one candidate`);
    lines.push(`- **${highConfidenceSurfaceCount}** surfaces have high-confidence candidate ranking`);
    lines.push(`- **${noCandidateSurfaceCount}** surfaces have no catalog candidate and need patent review`);
    lines.push("");

    if (rows.length === 0) {
      lines.push("## No Relabel Work");
      lines.push("");
      lines.push("Every catalog-resolved surface agrees with its stored reference coordinates.");
    } else {
      lines.push("## Relabels by Lens");
      lines.push("");
      for (const lensKey of lensKeys) {
        const lensRows = rows.filter((row) => row.lensKey === lensKey);
        const first = lensRows[0];
        const patentSuffix = first.patentNumber ? ` - ${first.patentNumber}` : "";
        lines.push(`### [${first.lensName}](../../${first.filePath})${patentSuffix}`);
        lines.push("");
        lines.push(
          "| Surface | Ref | Current label | Stored n/ν | Rejected as | Best candidate(s) | Confidence | Patent review |",
        );
        lines.push("|---|---|---|---|---|---|---|---|");
        for (const row of lensRows) {
          const vd = row.storedVd === undefined ? "?" : row.storedVd.toFixed(2);
          const sign = row.catalogDiff >= 0 ? "+" : "";
          const rejected = `${row.catalogName} (Δn${row.referenceLine}=${sign}${row.catalogDiff.toFixed(4)})`;
          lines.push(
            `| ${row.surfaceLabel} | ${row.referenceLine} | \`${row.glassString}\` | ${row.storedNd.toFixed(5)} / ${vd} | ${rejected} | ${candidateSummary(row.candidates)} | ${confidenceLabel(row.candidates)} | ${auditNeedLabel(row.candidates)} |`,
          );
        }
        lines.push("");
      }
    }

    mkdirSync(REPORT_DIR, { recursive: true });
    writeFileSync(`${REPORT_DIR}/glass-relabel-by-lens.generated.md`, `${lines.join("\n").trimEnd()}\n`);

    expect(lensKeys.length).toBeGreaterThanOrEqual(0);
  });
});
