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
import buildLens from "../../../src/optics/buildLens.js";
import {
  allEntries,
  evaluateSellmeier,
  LINE_NM,
  resolveGlass,
  type GlassEntry,
} from "../../../src/optics/glassCatalog.js";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import type { LensData } from "../../../src/types/optics.js";

const ND_TOLERANCE = 5e-3;
const VD_TOLERANCE = 3.0;
const PGF_TOLERANCE = 0.02;
const REPORT_DIR = "agent_docs/generated";

interface EmbeddedCode {
  raw: string;
  nd: number;
  vd: number;
}

interface Candidate {
  name: string;
  nd: number;
  vd: number;
  pgf: number | undefined;
  ndDiff: number;
  vdDiff: number | null;
  pgfDiff: number | null;
  codeDistance: number | null;
}

interface RelabelRow {
  lensKey: string;
  lensName: string;
  patentNumber: string | null;
  filePath: string;
  surfaceLabel: string;
  glassString: string;
  catalogName: string;
  storedNd: number;
  storedVd: number | undefined;
  storedDPgF: number | undefined;
  catalogNd: number;
  catalogDiff: number;
  embeddedCode: EmbeddedCode | null;
  candidates: Candidate[];
}

const modules = import.meta.glob<{ default: LensData }>("../../../src/lens-data/**/*.data.ts", { eager: true });

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
  entryNd: Map<string, number>,
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

      return { name: entry.name, nd, vd: entry.vd, pgf: entry.PgF, ndDiff, vdDiff, pgfDiff, codeDistance };
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

function candidateSummary(candidates: readonly Candidate[]): string {
  if (candidates.length === 0) return "No catalog candidate";
  return candidates
    .slice(0, 3)
    .map((candidate) => {
      const ndSign = candidate.ndDiff >= 0 ? "+" : "";
      const vdSign = candidate.vdDiff !== null && candidate.vdDiff >= 0 ? "+" : "";
      const vdPart = candidate.vdDiff === null ? "" : `, Δvd=${vdSign}${candidate.vdDiff.toFixed(2)}`;
      const codePart = candidate.codeDistance === null ? "" : `, codeΔ=${candidate.codeDistance.toFixed(1)}`;
      return `${candidate.name} (Δnd=${ndSign}${candidate.ndDiff.toFixed(4)}${vdPart}${codePart})`;
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
    const entryNd = new Map(entries.map((entry) => [entry.name, evaluateSellmeier(entry, LINE_NM.d)]));
    const rows: RelabelRow[] = [];

    for (const [path, mod] of Object.entries(modules)) {
      const raw = mod.default;
      if (!raw?.key) continue;
      const data: LensData = { ...LENS_DEFAULTS, ...raw } as LensData;
      const patentNumber = extractPatentNumber(data.subtitle);

      let L;
      try {
        L = buildLens(data);
      } catch {
        continue;
      }

      const filePath = toRepoRelativeLensPath(path);
      const elementById = new Map(L.elements.map((element) => [element.id, element]));

      for (let i = 0; i < L.S.length; i++) {
        const surface = L.S[i];
        if (surface.nd === 1.0) continue;

        const element = surface.elemId ? elementById.get(surface.elemId) : undefined;
        if (!element?.glass) continue;

        const entry = resolveGlass(element.glass);
        if (!entry) continue;

        const catalogNd = evaluateSellmeier(entry, LINE_NM.d);
        const catalogDiff = catalogNd - surface.nd;
        if (Math.abs(catalogDiff) <= ND_TOLERANCE) continue;

        const embeddedCode = extractGlassCode(element.glass);
        rows.push({
          lensKey: data.key,
          lensName: data.name ?? data.key,
          patentNumber,
          filePath,
          surfaceLabel: surface.label ?? `surface[${i}]`,
          glassString: element.glass,
          catalogName: entry.name,
          storedNd: surface.nd,
          storedVd: element.vd,
          storedDPgF: element.dPgF,
          catalogNd,
          catalogDiff,
          embeddedCode,
          candidates: findCandidates(entries, entryNd, surface.nd, element.vd, element.dPgF, embeddedCode),
        });
      }
    }

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
      lines.push("Every catalog-resolved surface agrees with stored `nd` within tolerance.");
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
          "| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |",
        );
        lines.push("|---|---|---|---|---|---|---|");
        for (const row of lensRows) {
          const vd = row.storedVd === undefined ? "?" : row.storedVd.toFixed(2);
          const sign = row.catalogDiff >= 0 ? "+" : "";
          const rejected = `${row.catalogName} (Δnd=${sign}${row.catalogDiff.toFixed(4)})`;
          lines.push(
            `| ${row.surfaceLabel} | \`${row.glassString}\` | ${row.storedNd.toFixed(5)} / ${vd} | ${rejected} | ${candidateSummary(row.candidates)} | ${confidenceLabel(row.candidates)} | ${auditNeedLabel(row.candidates)} |`,
          );
        }
        lines.push("");
      }
    }

    mkdirSync(REPORT_DIR, { recursive: true });
    writeFileSync(`${REPORT_DIR}/glass-relabel-by-lens.generated.md`, lines.join("\n") + "\n");

    expect(lensKeys.length).toBeGreaterThanOrEqual(0);
  });
});
