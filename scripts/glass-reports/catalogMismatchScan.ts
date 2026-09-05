import assert from "node:assert/strict";
/**
 * Catalog-mismatch scanner.
 *
 * Walks every lens in the catalog and identifies surfaces where the element's
 * `glass` string resolves to a known catalog entry but its published (nd, νd)
 * or (ne, νe)
 * coordinates disagree with the authored prescription beyond the safety-net
 * tolerances used in src/optics/dispersion.ts. These mismatches
 * indicate either:
 *
 *   (a) a speculative glass identification in the lens data that turned out to
 *       be wrong (e.g. "S-LAH79 (OHARA) probable" with a stored nd that doesn't
 *       match real S-LAH79), or
 *   (b) a legitimate catalog entry whose vendor-published nd differs from the
 *       lens-data-stored value due to a melt variant.
 *
 * In either case the dispersion cascade rejects the catalog entry and falls
 * through to the Abbe approximation. This test outputs a report to
 * `agent_docs/generated/catalog-mismatches.generated.md` so the team can decide
 * per-case whether to relabel the glass or update the stored `nd`.
 * Native e-line coordinates are compared at C′/e/F′. Their six-digit-looking
 * tokens are never treated as catalog codes because those encode nd/νd.
 *
 * Rendered by the explicit glass-report command; regression tests compare the output.
 */

import {
  assessCatalogGlassCompatibility,
  evaluateCatalogAbbeNumber,
  GLASS_ND_TOLERANCE,
  GLASS_VD_TOLERANCE,
  resolveCompatibleGlass,
  resolveGlass,
} from "../../src/optics/glassCatalog.js";
import { extractPatentNumber, walkLensSurfaces } from "./glassScanLib.js";

const REPORT_DIR = "agent_docs/generated";

interface Mismatch {
  lensKey: string;
  lensName: string;
  patentNumber: string | null;
  filePath: string;
  surfaceLabel: string;
  surfaceIdx: number;
  glassString: string;
  catalogName: string;
  referenceLine: "d" | "e";
  storedNd: number;
  storedVd: number | undefined;
  catalogNd: number;
  catalogVd: number;
  ndDiff: number;
  vdDiff: number | null;
}

import type { GlassLensModules } from "./glassScanLib.js";

export function renderCatalogMismatchScan(modules: GlassLensModules) {
  const reports: Record<string, string> = {};
  const emitReport = (path: string, text: string) => {
    reports[path] = text;
  };

  const mismatches: Mismatch[] = [];
  let totalLenses = 0;
  let totalSurfaces = 0;
  let totalGlassDeclarations = 0;
  let totalCatalogResolved = 0;
  let eLineSurfaces = 0;
  let eLineCatalogResolved = 0;

  totalLenses = walkLensSurfaces(modules, ({ filePath, data, L }) => {
    const patentNumber = extractPatentNumber(data.patentNumber, data.subtitle);
    const elementById = new Map(L.elements.map((e) => [e.id, e]));

    for (let i = 0; i < L.S.length; i++) {
      const surface = L.S[i];
      if (surface.nd === 1.0) continue; // Air interface
      totalSurfaces++;

      const element = surface.elemId ? elementById.get(surface.elemId) : undefined;
      if (!element?.glass) continue;
      totalGlassDeclarations++;
      const referenceLine = element.indexReference ?? "d";
      if (referenceLine === "e") eLineSurfaces++;

      const compatibleEntry = resolveCompatibleGlass(element.glass, surface.nd, element.vd, element.indexReference);
      if (compatibleEntry) {
        totalCatalogResolved++;
        if (referenceLine === "e") eLineCatalogResolved++;
        continue;
      }

      const entry = resolveGlass(element.glass);
      if (!entry) continue;
      totalCatalogResolved++;

      const compatibility = assessCatalogGlassCompatibility(entry, surface.nd, element.vd, element.indexReference);
      if (!compatibility.compatible) {
        mismatches.push({
          lensKey: data.key,
          lensName: data.name ?? data.key,
          patentNumber,
          filePath,
          surfaceLabel: surface.label ?? `surface[${i}]`,
          surfaceIdx: i,
          glassString: element.glass,
          catalogName: entry.name,
          referenceLine,
          storedNd: surface.nd,
          storedVd: element.vd,
          catalogNd: compatibility.catalogIndex,
          catalogVd: evaluateCatalogAbbeNumber(entry, referenceLine),
          ndDiff: compatibility.indexDiff,
          vdDiff: compatibility.abbeDiff,
        });
      }
    }
  });

  // Group mismatches by lens for the report
  const byLens = new Map<string, Mismatch[]>();
  for (const m of mismatches) {
    const list = byLens.get(m.lensKey) ?? [];
    list.push(m);
    byLens.set(m.lensKey, list);
  }

  // Tally most-frequent catalog targets — useful for spotting patterns
  // (e.g. lots of "S-LAH79 probable" tags that should be re-identified).
  const byCatalogTarget = new Map<string, number>();
  for (const m of mismatches) {
    byCatalogTarget.set(m.catalogName, (byCatalogTarget.get(m.catalogName) ?? 0) + 1);
  }
  const targetTally = [...byCatalogTarget.entries()].sort((a, b) => b[1] - a[1]);

  const lines: string[] = [];
  lines.push("# Catalog Mismatches (auto-generated)");
  lines.push("");
  lines.push("Surfaces where the element's `glass` string resolves to a vendor catalog entry");
  lines.push(
    `but its published coordinates disagree with the stored prescription beyond Δn ±${GLASS_ND_TOLERANCE} or Δν ±${GLASS_VD_TOLERANCE}.`,
  );
  lines.push("D-line rows compare C/d/F coordinates; native e-line rows compare C′/e/F′ coordinates.");
  lines.push("");
  lines.push(
    "These are rejected by the safety net in [src/optics/dispersion.ts](../../src/optics/dispersion.ts) — the",
  );
  lines.push("dispersion cascade falls through to Abbe rather than trust a misidentified glass label. This");
  lines.push("report exists so the team can decide per-case whether to relabel the glass, update the stored `nd`,");
  lines.push("or accept the mismatch (some glass annotations in lens-data files are explicitly marked as guesses");
  lines.push('with words like "probable" or "approx").');
  lines.push("");
  lines.push("**Regenerate this file** by running `npm run generate:glass-reports`.");
  lines.push("");
  lines.push(`## Summary`);
  lines.push("");
  lines.push(`- **${totalLenses}** lenses scanned`);
  lines.push(`- **${totalSurfaces}** glass surfaces examined`);
  lines.push(`- **${totalGlassDeclarations}** surfaces with non-empty \`glass\` strings`);
  lines.push(
    `- **${eLineCatalogResolved} / ${eLineSurfaces}** native e-line surfaces resolve by explicit name or alias`,
  );
  lines.push(`- **${totalCatalogResolved}** of those resolved to a catalog entry`);
  lines.push(
    `- **${mismatches.length}** mismatches found (${((mismatches.length / Math.max(1, totalCatalogResolved)) * 100).toFixed(1)}% of resolved surfaces)`,
  );
  lines.push(`- **${byLens.size}** distinct lens files affected`);
  lines.push("");

  if (targetTally.length > 0) {
    lines.push("## Most-frequent mismatched catalog targets");
    lines.push("");
    lines.push("Glass labels that get rejected most often. A high count here often points to a single glass");
    lines.push("annotation pattern (e.g. an obsolete name, a `probable` guess) that's used across many lenses.");
    lines.push("");
    lines.push("| Catalog entry | Rejected surfaces | Notes |");
    lines.push("|---|---|---|");
    for (const [name, count] of targetTally) {
      lines.push(`| ${name} | ${count} | |`);
    }
    lines.push("");
  }

  if (mismatches.length === 0) {
    lines.push("## No mismatches");
    lines.push("");
    lines.push("Every catalog-resolved surface agrees with its stored reference index and Abbe number. ✓");
  } else {
    lines.push("## Mismatches by lens");
    lines.push("");
    const sortedKeys = [...byLens.keys()].sort((a, b) => {
      const aList = byLens.get(a)!;
      const bList = byLens.get(b)!;
      const countDiff = bList.length - aList.length;
      if (countDiff !== 0) return countDiff;

      const nameDiff = aList[0].lensName.localeCompare(bList[0].lensName);
      if (nameDiff !== 0) return nameDiff;

      return a.localeCompare(b);
    });
    for (const key of sortedKeys) {
      const list = byLens.get(key)!;
      const first = list[0];
      const patentSuffix = first.patentNumber ? ` — ${first.patentNumber}` : "";
      lines.push(`### [${first.lensName}](../../${first.filePath})${patentSuffix}`);
      lines.push("");
      lines.push("| Surface | Ref | Glass annotation | Catalog match | Stored n/ν | Catalog n/ν | Δn | Δν |");
      lines.push("|---|---|---|---|---|---|---|---|");
      for (const m of list) {
        const ndSign = m.ndDiff >= 0 ? "+" : "";
        const vdSign = m.vdDiff !== null && m.vdDiff >= 0 ? "+" : "";
        lines.push(
          `| ${m.surfaceLabel} | ${m.referenceLine} | \`${m.glassString}\` | ${m.catalogName} | ${m.storedNd.toFixed(5)} / ${m.storedVd?.toFixed(2) ?? "—"} | ${m.catalogNd.toFixed(5)} / ${m.catalogVd.toFixed(2)} | ${ndSign}${m.ndDiff.toFixed(4)} | ${m.vdDiff === null ? "—" : `${vdSign}${m.vdDiff.toFixed(2)}`} |`,
        );
      }
      lines.push("");
    }
  }

  // Vitest runs from the project root; this relative path is resolved against cwd.

  const reportPath = `${REPORT_DIR}/catalog-mismatches.generated.md`;
  emitReport(reportPath, `${lines.join("\n").trimEnd()}\n`);

  // Test always passes — this scan is observational, not a CI gate.
  assert(totalLenses > 0);

  return reports;
}
