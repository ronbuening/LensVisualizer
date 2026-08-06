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
import {
  explainCompatibleGlassResolution,
  GLASS_ND_TOLERANCE,
  GLASS_VD_TOLERANCE,
  resolveCompatibleGlass,
  type CompatibleGlassCandidate,
  type GlassResolutionCriterion,
} from "../../../src/optics/glassCatalog.js";
import { walkLensSurfaces } from "./glassScanLib.js";
import type { LensData, RefractiveIndexReferenceLine } from "../../../src/types/optics.js";

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
  indexReference: RefractiveIndexReferenceLine;
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

function escapeMarkdownCell(value: string): string {
  return value.replace(/\|/g, "\\|").replace(/\r?\n/g, " ");
}

function ambiguityGroupKey(
  row: Pick<AmbiguousElement, "glassString" | "storedNd" | "storedVd" | "indexReference">,
): string {
  return JSON.stringify([row.glassString, row.storedNd, row.storedVd ?? null, row.indexReference]);
}

function sourceLabel(candidate: CompatibleGlassCandidate): string {
  if (candidate.source === "name") return "name";
  if (candidate.source === "alias") return "alias";
  return "code";
}

/* Compact candidate summary: name, vendor, evidence source, vendor-context
 * flag, and duplicate-code standing. The per-candidate Δn/Δν residuals are
 * deliberately omitted from the committed report — the deciding residual
 * appears in the selection reason, and the full numbers are one
 * `explainCompatibleGlassResolution` call away. */
function candidateDescription(candidate: CompatibleGlassCandidate): string {
  const vendor = candidate.vendorMatch === null ? "" : candidate.vendorMatch ? ", vendor ✓" : ", vendor ✗";
  const legacyCode =
    candidate.legacyCodePreferred === null
      ? ""
      : candidate.legacyCodePreferred
        ? ", preferred code row"
        : ", alternate code row";
  return `${candidate.entry.name} (${candidate.entry.vendor}, ${sourceLabel(candidate)}${vendor}${legacyCode})`;
}

describe("glass ambiguity scan", () => {
  it("keeps d-line and e-line resolutions in separate report groups", () => {
    const coordinates = { glassString: "example", storedNd: 1.5, storedVd: 50 };

    expect(ambiguityGroupKey({ ...coordinates, indexReference: "d" })).not.toBe(
      ambiguityGroupKey({ ...coordinates, indexReference: "e" }),
    );
  });

  it("emits every multi-candidate compatible resolution with its selection reasoning", () => {
    const rows: AmbiguousElement[] = [];
    let totalLenses = 0;
    let totalGlassElements = 0;

    totalLenses = walkLensSurfaces(modules, ({ filePath, data, L: lens }) => {
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
          indexReference: element.indexReference ?? "d",
          selectedName: explanation.selected.name,
          criterion: explanation.criterion,
          reason: explanation.reason,
          candidates: explanation.candidates,
        });
      }
    });

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
    // Resolution is a pure function of (annotation, reference line, stored coordinates), so
    // per-element repetition collapses into one rollup row per distinct
    // ambiguity with an occurrence count and one example locator.
    const groups = new Map<string, AmbiguousElement[]>();
    for (const row of rows) {
      const key = ambiguityGroupKey(row);
      const list = groups.get(key) ?? [];
      list.push(row);
      groups.set(key, list);
    }

    lines.push("## Ambiguous Annotations");
    lines.push("");
    lines.push(
      "One row per distinct (annotation, reference line, stored coordinates) ambiguity; the count spans every element it",
    );
    lines.push("resolves for. Per-candidate residuals are one `explainCompatibleGlassResolution` call away.");
    lines.push("");
    lines.push(
      "| Annotation | Stored n / ν (line) | Selected and reason | Runners-up in resolver order | Elements | Example |",
    );
    lines.push("|---|---:|---|---|---:|---|");
    for (const group of groups.values()) {
      const row = group[0];
      const storedVd = row.storedVd === undefined ? "?" : row.storedVd.toFixed(2);
      const runnersUp = row.candidates.slice(1).map(candidateDescription).join("<br>");
      const files = new Set(group.map((entry) => entry.filePath));
      const suffix = files.size > 1 ? ` +${files.size - 1} files` : "";
      // Residual comparisons compress to two-significant-digit magnitudes;
      // the full-precision numbers come from explainCompatibleGlassResolution.
      const reasonText =
        row.criterion === "index-residual" && row.candidates.length >= 2
          ? `smallest ${row.candidates[0].compatibility.referenceLine}-line |Δn| (${Math.abs(
              row.candidates[0].compatibility.indexDiff,
            ).toExponential(1)} vs ${Math.abs(row.candidates[1].compatibility.indexDiff).toExponential(1)})`
          : row.reason;
      lines.push(
        `| \`${escapeMarkdownCell(row.glassString)}\` | ${row.storedNd.toFixed(5)} / ${storedVd} (${row.indexReference}) | ${row.selectedName} — ${escapeMarkdownCell(reasonText)} | ${runnersUp} | ${group.length} | [${escapeMarkdownCell(row.lensName)}](../../${row.filePath}) ${escapeMarkdownCell(row.elementName)}${suffix} |`,
      );
    }
    lines.push("");

    mkdirSync(REPORT_DIR, { recursive: true });
    writeFileSync(`${REPORT_DIR}/glass-ambiguities.generated.md`, lines.join("\n") + "\n");

    expect(totalLenses).toBeGreaterThan(0);
    expect(rows.length).toBeGreaterThan(0);
  });
});
