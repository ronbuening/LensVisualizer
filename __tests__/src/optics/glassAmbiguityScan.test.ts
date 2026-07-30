/**
 * Coordinate-compatible glass ambiguity scanner.
 *
 * Finds lens elements whose annotation names or encodes more than one catalog
 * row inside the runtime nd/vd guard. The generated report records the selected
 * row, every compatible alternative, and the exact resolver criterion that
 * broke the tie.
 *
 * Always passes after asserting that the diagnostic explanation and runtime
 * resolver choose the same row.
 *
 * Regenerate: `npm test -- glassAmbiguityScan`
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import {
  explainCompatibleGlassResolution,
  GLASS_ND_TOLERANCE,
  GLASS_VD_TOLERANCE,
  resolveCompatibleGlass,
  type CompatibleGlassCandidate,
  type GlassResolutionCriterion,
} from "../../../src/optics/glassCatalog.js";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import type { LensData } from "../../../src/types/optics.js";

const REPORT_DIR = "agent_docs/generated";
const modules = import.meta.glob<{ default: LensData }>("../../../src/lens-data/**/*.data.ts", { eager: true });

interface AmbiguousElement {
  lensName: string;
  filePath: string;
  elementId: number;
  elementName: string;
  elementLabel: string;
  surfaces: string[];
  glassString: string;
  storedNd: number;
  storedVd: number | undefined;
  selectedName: string;
  criterion: GlassResolutionCriterion;
  reason: string;
  candidates: readonly CompatibleGlassCandidate[];
}

const CRITERION_LABELS: Readonly<Record<GlassResolutionCriterion, string>> = {
  none: "No compatible candidate",
  "only-compatible": "Only compatible candidate",
  "source-priority": "Evidence-source priority",
  "vendor-context": "Vendor context",
  "index-residual": "Smallest reference-index residual",
  "abbe-residual": "Smallest Abbe residual",
  "token-order": "Annotation token order",
  "duplicate-code-precedence": "Duplicate-code precedence",
  "canonical-name-order": "Stable canonical-name order",
};

function toRepoRelativeLensPath(modulePath: string): string {
  const lensDataIndex = modulePath.indexOf("src/lens-data/");
  return lensDataIndex >= 0 ? modulePath.slice(lensDataIndex) : modulePath.replace(/^(\.\.\/)+/, "");
}

function escapeMarkdownCell(value: string): string {
  return value.replace(/\|/g, "\\|").replace(/\r?\n/g, " ");
}

function formatSigned(value: number, digits: number): string {
  return `${value >= 0 ? "+" : ""}${value.toFixed(digits)}`;
}

function sourceLabel(candidate: CompatibleGlassCandidate): string {
  if (candidate.source === "name") return "direct name";
  if (candidate.source === "alias") return "alias";
  return "six-digit code";
}

function vendorContextLabel(candidate: CompatibleGlassCandidate): string {
  if (candidate.vendorMatch === null) return "vendor not specified";
  return candidate.vendorMatch ? "vendor matches annotation" : "vendor conflicts with annotation";
}

function candidateDescription(candidate: CompatibleGlassCandidate): string {
  const abbeDiff =
    candidate.compatibility.abbeDiff === null ? "n/a" : formatSigned(candidate.compatibility.abbeDiff, 4);
  const referenceLine = candidate.compatibility.referenceLine;
  const legacyCode =
    candidate.legacyCodePreferred === null
      ? ""
      : candidate.legacyCodePreferred
        ? "; preferred duplicate-code row"
        : "; alternate duplicate-code row";
  return (
    `**${candidate.entry.name}** (${candidate.entry.vendor}; ${sourceLabel(candidate)} ` +
    `\`${candidate.matchedToken}\`; ${vendorContextLabel(candidate)}; ` +
    `Δn${referenceLine}=${formatSigned(candidate.compatibility.indexDiff, 9)}; ` +
    `Δν${referenceLine}=${abbeDiff}${legacyCode})`
  );
}

function criterionLabel(row: AmbiguousElement): string {
  if (row.criterion !== "index-residual") return CRITERION_LABELS[row.criterion];
  return row.candidates[0]?.compatibility.referenceLine === "d"
    ? "Smallest d-line residual"
    : "Smallest e-line index residual";
}

describe("glass ambiguity scan", () => {
  it("emits every multi-candidate compatible resolution with its selection reasoning", () => {
    const rows: AmbiguousElement[] = [];
    let totalLenses = 0;
    let totalGlassElements = 0;

    for (const [path, mod] of Object.entries(modules)) {
      const raw = mod.default;
      if (!raw?.key) continue;
      const data: LensData = { ...LENS_DEFAULTS, ...raw } as LensData;
      totalLenses++;

      let lens;
      try {
        lens = buildLens(data);
      } catch {
        continue;
      }

      const filePath = toRepoRelativeLensPath(path);
      for (const element of lens.elements) {
        if (!element.glass || element.nd === 1) continue;
        totalGlassElements++;
        const explanation = explainCompatibleGlassResolution(
          element.glass,
          element.nd,
          element.vd,
          element.indexReference,
        );
        if (explanation.candidates.length < 2 || !explanation.selected) continue;

        const runtimeSelection = resolveCompatibleGlass(element.glass, element.nd, element.vd, element.indexReference);
        expect(explanation.selected.name).toBe(runtimeSelection?.name);

        rows.push({
          lensName: data.name ?? data.key,
          filePath,
          elementId: element.id,
          elementName: element.name,
          elementLabel: element.label,
          surfaces: lens.S.filter((surface) => surface.nd !== 1 && surface.elemId === element.id).map(
            (surface, index) => surface.label ?? `surface[${index}]`,
          ),
          glassString: element.glass,
          storedNd: element.nd,
          storedVd: element.vd,
          selectedName: explanation.selected.name,
          criterion: explanation.criterion,
          reason: explanation.reason,
          candidates: explanation.candidates,
        });
      }
    }

    rows.sort(
      (a, b) =>
        a.lensName.localeCompare(b.lensName) || a.filePath.localeCompare(b.filePath) || a.elementId - b.elementId,
    );
    const affectedFiles = new Set(rows.map((row) => row.filePath));
    const criterionCounts = new Map<GlassResolutionCriterion, number>();
    for (const row of rows) {
      criterionCounts.set(row.criterion, (criterionCounts.get(row.criterion) ?? 0) + 1);
    }

    const lines: string[] = [];
    lines.push("# Coordinate-Compatible Glass Ambiguities (auto-generated)");
    lines.push("");
    lines.push(
      "Lens elements whose annotation produces two or more catalog candidates inside the runtime compatibility guard.",
    );
    lines.push(
      `All candidates agree with the authored d- or e-line coordinates within Δn ±${GLASS_ND_TOLERANCE} and Δν ±${GLASS_VD_TOLERANCE};`,
    );
    lines.push("the selected row follows the same ordering used by `resolveCompatibleGlass`.");
    lines.push("");
    lines.push("Resolver priority is: direct name before alias before six-digit code; matching vendor context;");
    lines.push(
      "smallest reference-index residual; smallest Abbe residual; annotation token order; duplicate-code precedence; canonical name.",
    );
    lines.push("");
    lines.push("**Regenerate this file** by running `npm test -- glassAmbiguityScan`.");
    lines.push("Regenerate the full glass report set with `npm run generate:glass-reports`.");
    lines.push("");
    lines.push("## Summary");
    lines.push("");
    lines.push(`- **${totalLenses}** lenses scanned`);
    lines.push(`- **${totalGlassElements}** glass elements examined`);
    lines.push(`- **${rows.length}** elements have multiple coordinate-compatible candidates`);
    lines.push(`- **${affectedFiles.size}** lens files are affected`);
    lines.push("");
    lines.push("| Selection criterion | Elements |");
    lines.push("|---|---:|");
    for (const [criterion, count] of [...criterionCounts.entries()].sort(
      (a, b) => b[1] - a[1] || CRITERION_LABELS[a[0]].localeCompare(CRITERION_LABELS[b[0]]),
    )) {
      lines.push(`| ${CRITERION_LABELS[criterion]} | ${count} |`);
    }
    lines.push("");
    lines.push("## Ambiguous Elements");
    lines.push("");
    lines.push(
      "| Lens / element | Annotation | Stored reference n / ν | Selected and reason | Compatible candidates in resolver order |",
    );
    lines.push("|---|---|---:|---|---|");
    for (const row of rows) {
      const elementLabel = row.elementLabel ? `${row.elementName} (${row.elementLabel})` : row.elementName;
      const storedVd = row.storedVd === undefined ? "?" : row.storedVd.toFixed(2);
      const surfaces = row.surfaces.join(", ") || "none";
      const candidates = row.candidates.map(candidateDescription).join("<br>");
      lines.push(
        `| [${escapeMarkdownCell(row.lensName)}](../../${row.filePath})<br>${escapeMarkdownCell(elementLabel)}; surfaces ${surfaces} | \`${escapeMarkdownCell(row.glassString)}\` | ${row.storedNd.toFixed(5)} / ${storedVd} | **${row.selectedName}**<br>${criterionLabel(row)}: ${row.reason} | ${candidates} |`,
      );
    }
    lines.push("");

    mkdirSync(REPORT_DIR, { recursive: true });
    writeFileSync(`${REPORT_DIR}/glass-ambiguities.generated.md`, lines.join("\n") + "\n");

    expect(totalLenses).toBeGreaterThan(0);
    expect(rows.length).toBeGreaterThan(0);
  });
});
