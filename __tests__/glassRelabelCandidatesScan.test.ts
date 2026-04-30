/**
 * Glass-relabel candidate scanner.
 *
 * Companion to __tests__/catalogMismatchScan.test.ts. Where that scan reports
 * the *raw* mismatches (surfaces whose glass annotation resolves to a catalog
 * entry but disagrees with stored nd by more than 5e-3), this scan goes one
 * step further: for each mismatch, it searches the catalog for a *better*
 * candidate whose nd AND vd both match the stored values within tolerance.
 *
 * The output drives the verified mismatch sweep documented in the plan and in
 * agent_docs/proprietary-glass-backfill.md. For each unique stored (nd, vd)
 * pair, the report tells you:
 *   - "1+ candidate, vd matches": high-confidence relabel target.
 *   - "Multiple candidates": pick by family/annotation context.
 *   - "No candidate": the stored values don't match any catalog glass — relabel
 *     as Unmatched and record in agent_docs/glass-relabel-followup.md for
 *     per-lens patent verification.
 *
 * Always passes — its job is to surface the data, not gate CI.
 *
 * Regenerate: `npm test -- glassRelabelCandidatesScan`
 */
import { describe, it, expect } from "vitest";
import { writeFileSync } from "node:fs";
import buildLens from "../src/optics/buildLens.js";
import { allEntries, evaluateSellmeier, LINE_NM, resolveGlass, type GlassEntry } from "../src/optics/glassCatalog.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import type { LensData } from "../src/types/optics.js";

const ND_TOLERANCE = 5e-3; // matches dispersion safety net
const VD_TOLERANCE = 3.0; // absolute Abbe units; loose enough to allow melt variants

interface Mismatch {
  filePath: string;
  lensName: string;
  surfaceLabel: string;
  glassString: string;
  catalogName: string;
  storedNd: number;
  storedVd: number | undefined;
}

interface Candidate {
  name: string;
  nd: number;
  vd: number;
  ndDiff: number;
  vdDiff: number | null;
}

const modules = import.meta.glob<{ default: LensData }>("../src/lens-data/**/*.data.ts", { eager: true });

function findCandidates(
  entries: readonly GlassEntry[],
  entryNd: Map<string, number>,
  storedNd: number,
  storedVd: number | undefined,
): Candidate[] {
  return entries
    .map<Candidate>((e) => ({
      name: e.name,
      nd: entryNd.get(e.name)!,
      vd: e.vd,
      ndDiff: entryNd.get(e.name)! - storedNd,
      vdDiff: storedVd === undefined ? null : e.vd - storedVd,
    }))
    .filter((c) => Math.abs(c.ndDiff) <= ND_TOLERANCE && (c.vdDiff === null || Math.abs(c.vdDiff) <= VD_TOLERANCE))
    .sort((a, b) => Math.abs(a.ndDiff) - Math.abs(b.ndDiff))
    .slice(0, 5);
}

describe("glass-relabel candidate scan", () => {
  it("emits a report of catalog-relabel candidates for every mismatched surface", () => {
    const entries = allEntries();
    const entryNd = new Map(entries.map((e) => [e.name, evaluateSellmeier(e, LINE_NM.d)]));

    const mismatches: Mismatch[] = [];
    for (const [path, mod] of Object.entries(modules)) {
      const raw = mod.default;
      if (!raw?.key) continue;
      const data: LensData = { ...LENS_DEFAULTS, ...raw } as LensData;
      let L;
      try {
        L = buildLens(data);
      } catch {
        continue;
      }
      const elementById = new Map(L.elements.map((e) => [e.id, e]));
      const filePath = path.replace("../", "");

      for (let i = 0; i < L.S.length; i++) {
        const surface = L.S[i];
        if (surface.nd === 1.0) continue;
        const element = surface.elemId ? elementById.get(surface.elemId) : undefined;
        if (!element?.glass) continue;
        const entry = resolveGlass(element.glass);
        if (!entry) continue;
        const catalogNd = evaluateSellmeier(entry, LINE_NM.d);
        if (Math.abs(catalogNd - surface.nd) <= ND_TOLERANCE) continue;
        mismatches.push({
          filePath,
          lensName: data.name ?? data.key,
          surfaceLabel: surface.label ?? `surface[${i}]`,
          glassString: element.glass,
          catalogName: entry.name,
          storedNd: surface.nd,
          storedVd: element.vd,
        });
      }
    }

    // Group by (storedNd, storedVd) — same physical glass should share both.
    const byStored = new Map<string, Mismatch[]>();
    for (const m of mismatches) {
      const key = `${m.storedNd.toFixed(5)}|${m.storedVd?.toFixed(2) ?? "?"}`;
      const list = byStored.get(key) ?? [];
      list.push(m);
      byStored.set(key, list);
    }

    const sortedKeys = [...byStored.keys()].sort((a, b) => parseFloat(a) - parseFloat(b));

    let withCandidates = 0;
    let withoutCandidates = 0;
    let totalSurfacesWithCandidate = 0;
    let totalSurfacesWithoutCandidate = 0;

    const lines: string[] = [];
    lines.push("# Glass Relabel Candidates (auto-generated)");
    lines.push("");
    lines.push("Companion to [catalog-mismatches.generated.md](catalog-mismatches.generated.md). For each rejected");
    lines.push("catalog mismatch, this report searches the catalog for a *better* candidate whose nd AND vd");
    lines.push(`both match the stored values within tolerance (nd ±${ND_TOLERANCE}, vd ±${VD_TOLERANCE}).`);
    lines.push("");
    lines.push("**Regenerate** with `npm test -- glassRelabelCandidatesScan`.");
    lines.push("");
    lines.push("## How to use this report");
    lines.push("");
    lines.push("- **One candidate, vd matches closely**: high-confidence relabel target.");
    lines.push("  Edit the `glass:` string in the lens-data file to the candidate name.");
    lines.push("- **Multiple candidates**: choose by family hint in the original annotation");
    lines.push("  (e.g. an `S-LAH...` annotation with three S-LAH candidates picks the closest LAH).");
    lines.push("- **No candidate**: relabel as `Unmatched (...reason)` and add a row to");
    lines.push("  [glass-relabel-followup.md](glass-relabel-followup.md) for per-lens patent verification.");
    lines.push("");
    lines.push(`**Scope**: ${mismatches.length} mismatched surfaces across ${byStored.size} unique (nd, vd) groups.`);
    lines.push("");

    for (const key of sortedKeys) {
      const group = byStored.get(key)!;
      const storedNd = group[0].storedNd;
      const storedVd = group[0].storedVd;
      const candidates = findCandidates(entries, entryNd, storedNd, storedVd);
      const rejected = group[0].catalogName;

      lines.push(
        `## stored (nd=${storedNd.toFixed(5)}, vd=${storedVd?.toFixed(2) ?? "?"})  ` +
          `— ${group.length} surface${group.length > 1 ? "s" : ""}, current label resolves to ${rejected}`,
      );
      lines.push("");
      if (candidates.length === 0) {
        lines.push("**No catalog candidate within tolerance** — needs per-lens follow-up.");
        withoutCandidates++;
        totalSurfacesWithoutCandidate += group.length;
      } else {
        withCandidates++;
        totalSurfacesWithCandidate += group.length;
        lines.push("Candidates:");
        for (const c of candidates) {
          const ndSign = c.ndDiff >= 0 ? "+" : "";
          const vdSign = c.vdDiff !== null && c.vdDiff >= 0 ? "+" : "";
          const vdPart = c.vdDiff === null ? "" : `, Δvd=${vdSign}${c.vdDiff.toFixed(2)}`;
          lines.push(
            `- **${c.name}** (nd=${c.nd.toFixed(5)}, vd=${c.vd.toFixed(2)}, Δnd=${ndSign}${c.ndDiff.toFixed(4)}${vdPart})`,
          );
        }
      }
      lines.push("");
      lines.push("Surfaces:");
      const shown = group.slice(0, 8);
      for (const m of shown) {
        lines.push(`- [${m.lensName}](../${m.filePath}) \`${m.surfaceLabel}\`: \`${m.glassString}\``);
      }
      if (group.length > shown.length) lines.push(`- ... and ${group.length - shown.length} more`);
      lines.push("");
    }

    lines.push("---");
    lines.push("");
    lines.push("## Summary");
    lines.push("");
    lines.push(
      `- **${withCandidates}** (nd, vd) groups have at least one candidate (${totalSurfacesWithCandidate} surfaces) — actionable relabels.`,
    );
    lines.push(
      `- **${withoutCandidates}** (nd, vd) groups have NO candidate (${totalSurfacesWithoutCandidate} surfaces) — needs patent verification or Unmatched relabeling.`,
    );

    writeFileSync("agent_docs/glass-relabel-candidates.generated.md", lines.join("\n") + "\n");

    expect(byStored.size).toBeGreaterThanOrEqual(0); // observational test
  });
});
