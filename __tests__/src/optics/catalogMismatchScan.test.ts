/**
 * Catalog-mismatch scanner.
 *
 * Walks every lens in the catalog and identifies surfaces where the element's
 * `glass` string resolves to a known catalog entry but its published (nd, νd)
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
 *
 * Always passes — its job is to surface the data, not to gate CI.
 */
import { describe, it, expect } from "vitest";
import { mkdirSync, writeFileSync } from "node:fs";
import buildLens from "../../../src/optics/buildLens.js";
import {
  assessCatalogGlassCompatibility,
  GLASS_ND_TOLERANCE,
  GLASS_VD_TOLERANCE,
  resolveCompatibleGlass,
  resolveGlass,
} from "../../../src/optics/glassCatalog.js";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import type { LensData } from "../../../src/types/optics.js";

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
  storedNd: number;
  storedVd: number | undefined;
  catalogNd: number;
  catalogVd: number;
  ndDiff: number;
  vdDiff: number | null;
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

const modules = import.meta.glob<{ default: LensData }>("../../../src/lens-data/**/*.data.ts", { eager: true });

describe("catalog-mismatch scan", () => {
  it("emits a report of catalog mismatches across the entire lens library", () => {
    const mismatches: Mismatch[] = [];
    let totalLenses = 0;
    let totalSurfaces = 0;
    let totalGlassDeclarations = 0;
    let totalCatalogResolved = 0;

    for (const [path, mod] of Object.entries(modules)) {
      const raw = mod.default;
      if (!raw?.key) continue;
      const data: LensData = { ...LENS_DEFAULTS, ...raw } as LensData;
      const patentNumber = extractPatentNumber(data.subtitle);
      totalLenses++;

      let L;
      try {
        L = buildLens(data);
      } catch {
        // Skip lenses that fail to build (test elsewhere covers build correctness).
        continue;
      }

      const elementById = new Map(L.elements.map((e) => [e.id, e]));
      const filePath = toRepoRelativeLensPath(path);

      for (let i = 0; i < L.S.length; i++) {
        const surface = L.S[i];
        if (surface.nd === 1.0) continue; // Air interface
        totalSurfaces++;

        const element = surface.elemId ? elementById.get(surface.elemId) : undefined;
        if (!element?.glass) continue;
        totalGlassDeclarations++;

        const compatibleEntry = resolveCompatibleGlass(element.glass, surface.nd, element.vd);
        if (compatibleEntry) {
          totalCatalogResolved++;
          continue;
        }

        const entry = resolveGlass(element.glass);
        if (!entry) continue;
        totalCatalogResolved++;

        const compatibility = assessCatalogGlassCompatibility(entry, surface.nd, element.vd);
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
            storedNd: surface.nd,
            storedVd: element.vd,
            catalogNd: compatibility.catalogNd,
            catalogVd: entry.vd,
            ndDiff: compatibility.ndDiff,
            vdDiff: compatibility.vdDiff,
          });
        }
      }
    }

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
      `but its published coordinates disagree with the stored prescription beyond nd ±${GLASS_ND_TOLERANCE} or νd ±${GLASS_VD_TOLERANCE}.`,
    );
    lines.push("");
    lines.push(
      "These are rejected by the safety net in [src/optics/dispersion.ts](../../src/optics/dispersion.ts) — the",
    );
    lines.push("dispersion cascade falls through to Abbe rather than trust a misidentified glass label. This");
    lines.push("report exists so the team can decide per-case whether to relabel the glass, update the stored `nd`,");
    lines.push("or accept the mismatch (some glass annotations in lens-data files are explicitly marked as guesses");
    lines.push('with words like "probable" or "approx").');
    lines.push("");
    lines.push("**Regenerate this file** by running `npm test -- catalogMismatchScan`.");
    lines.push("");
    lines.push(`## Summary`);
    lines.push("");
    lines.push(`- **${totalLenses}** lenses scanned`);
    lines.push(`- **${totalSurfaces}** glass surfaces examined`);
    lines.push(`- **${totalGlassDeclarations}** surfaces with non-empty \`glass\` strings`);
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
      lines.push("Every catalog-resolved surface agrees with its stored `nd` and `νd` within tolerance. ✓");
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
        lines.push("| Surface | Glass annotation | Catalog match | Stored nd/νd | Catalog nd/νd | Δnd | Δνd |");
        lines.push("|---|---|---|---|---|---|---|");
        for (const m of list) {
          const ndSign = m.ndDiff >= 0 ? "+" : "";
          const vdSign = m.vdDiff !== null && m.vdDiff >= 0 ? "+" : "";
          lines.push(
            `| ${m.surfaceLabel} | \`${m.glassString}\` | ${m.catalogName} | ${m.storedNd.toFixed(5)} / ${m.storedVd?.toFixed(2) ?? "—"} | ${m.catalogNd.toFixed(5)} / ${m.catalogVd.toFixed(2)} | ${ndSign}${m.ndDiff.toFixed(4)} | ${m.vdDiff === null ? "—" : `${vdSign}${m.vdDiff.toFixed(2)}`} |`,
          );
        }
        lines.push("");
      }
    }

    // Vitest runs from the project root; this relative path is resolved against cwd.
    mkdirSync(REPORT_DIR, { recursive: true });
    const reportPath = `${REPORT_DIR}/catalog-mismatches.generated.md`;
    writeFileSync(reportPath, `${lines.join("\n").trimEnd()}\n`);

    // Test always passes — this scan is observational, not a CI gate.
    expect(totalLenses).toBeGreaterThan(0);
  });
});
