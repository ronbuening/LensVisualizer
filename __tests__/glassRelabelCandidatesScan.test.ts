/**
 * Glass-relabel candidate scanner.
 *
 * Companion to __tests__/catalogMismatchScan.test.ts. Where that scan reports
 * the *raw* mismatches (surfaces whose glass annotation resolves to a catalog
 * entry but disagrees with stored nd by more than 5e-3), this scan goes one
 * step further: for each mismatch, it searches the catalog for a *better*
 * candidate whose nd AND vd both match the stored values within tolerance.
 *
 * Three sources of evidence drive the candidate ranking:
 *   1. Stored (nd, vd) match within tolerance.
 *   2. Embedded six-digit Schott-style code in the annotation (e.g.
 *      "(903/313)"). When present, the code is independent ground truth and
 *      ranks candidates by code distance.
 *   3. Partial dispersion ΔPgF when the element has dPgF populated. Distinguishes
 *      between candidates that tie on (nd, vd) but differ in secondary spectrum.
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
const PGF_TOLERANCE = 0.02; // ΔPgF spread that's plausible across melt variants

/**
 * Extract a Schott-style six-digit glass code from a glass annotation.
 * Matches "903313", "903/313", "903 313", "903-313" patterns. Reads the first
 * three digits as floor(nd*1000-1000), the last three as round(vd*10).
 * Returns null when no code-shaped substring is present.
 */
function extractGlassCode(annotation: string): { raw: string; nd: number; vd: number } | null {
  // Order matters — try with separators first to avoid catching, e.g., a 6-digit
  // count from a longer numeric string in the annotation.
  const match = annotation.match(/\b(\d{3})[/\-\s](\d{3})\b/) ?? annotation.match(/\b(\d{3})(\d{3})\b/);
  if (!match) return null;
  const ndCode = parseInt(match[1], 10);
  const vdCode = parseInt(match[2], 10);
  // Sanity-check: nd code should map to plausible refractive index (1.4–2.1)
  if (ndCode < 400 || ndCode > 1100) return null;
  return { raw: `${match[1]}/${match[2]}`, nd: 1 + ndCode / 1000, vd: vdCode / 10 };
}

interface Mismatch {
  filePath: string;
  lensName: string;
  surfaceLabel: string;
  glassString: string;
  catalogName: string;
  storedNd: number;
  storedVd: number | undefined;
  storedDPgF: number | undefined;
  embeddedCode: { raw: string; nd: number; vd: number } | null;
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

const modules = import.meta.glob<{ default: LensData }>("../src/lens-data/**/*.data.ts", { eager: true });

function partialDispersionPgF(vd: number, dPgF: number): number {
  return 0.6438 - 0.001682 * vd + dPgF;
}

function findCandidates(
  entries: readonly GlassEntry[],
  entryNd: Map<string, number>,
  storedNd: number,
  storedVd: number | undefined,
  storedDPgF: number | undefined,
  embeddedCode: { nd: number; vd: number } | null,
): Candidate[] {
  const lensPgF =
    storedVd !== undefined && storedDPgF !== undefined ? partialDispersionPgF(storedVd, storedDPgF) : null;
  const ranked = entries.map<Candidate>((e) => {
    const candNd = entryNd.get(e.name)!;
    const ndDiff = candNd - storedNd;
    const vdDiff = storedVd === undefined ? null : e.vd - storedVd;
    const pgfDiff = lensPgF !== null && e.PgF !== undefined ? e.PgF - lensPgF : null;
    let codeDistance: number | null = null;
    if (embeddedCode !== null) {
      // Distance combines |Δnd|*1000 (3-digit precision) + |Δvd|*10 (1-digit precision)
      // so each axis contributes proportionally to its code resolution.
      codeDistance = Math.abs(candNd - embeddedCode.nd) * 1000 + Math.abs(e.vd - embeddedCode.vd) * 10;
    }
    return { name: e.name, nd: candNd, vd: e.vd, pgf: e.PgF, ndDiff, vdDiff, pgfDiff, codeDistance };
  });

  return ranked
    .filter((c) => Math.abs(c.ndDiff) <= ND_TOLERANCE && (c.vdDiff === null || Math.abs(c.vdDiff) <= VD_TOLERANCE))
    .filter((c) => c.pgfDiff === null || Math.abs(c.pgfDiff) <= PGF_TOLERANCE)
    .sort((a, b) => {
      // When an embedded code is present, code distance wins — it's ground truth
      // and the stored (nd, vd) might have melt-variant rounding.
      if (a.codeDistance !== null && b.codeDistance !== null) return a.codeDistance - b.codeDistance;
      return Math.abs(a.ndDiff) - Math.abs(b.ndDiff);
    })
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
          storedDPgF: element.dPgF,
          embeddedCode: extractGlassCode(element.glass),
        });
      }
    }

    // Group by (storedNd, storedVd) — same physical glass should share both.
    // Group key also includes the embedded code so different annotations don't
    // collapse into the same group when they actually point to different glasses.
    const byStored = new Map<string, Mismatch[]>();
    for (const m of mismatches) {
      const codeKey = m.embeddedCode?.raw ?? "-";
      const key = `${m.storedNd.toFixed(5)}|${m.storedVd?.toFixed(2) ?? "?"}|${codeKey}`;
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
    lines.push("  When ΔPgF is shown, prefer the candidate with the smallest |ΔPgF| — partial");
    lines.push("  dispersion distinguishes glasses that tie on (nd, vd).");
    lines.push("- **Embedded code in annotation** (e.g. `(903/313)`): when present, candidates are");
    lines.push("  ranked by code distance — the code is independent ground truth.");
    lines.push("- **No candidate**: relabel as `Unmatched (...reason)` and add a row to");
    lines.push("  [glass-relabel-followup.md](glass-relabel-followup.md) for per-lens patent verification.");
    lines.push("");
    lines.push(`**Scope**: ${mismatches.length} mismatched surfaces across ${byStored.size} unique groups.`);
    lines.push("");

    for (const key of sortedKeys) {
      const group = byStored.get(key)!;
      const storedNd = group[0].storedNd;
      const storedVd = group[0].storedVd;
      const storedDPgF = group[0].storedDPgF;
      const embeddedCode = group[0].embeddedCode;
      const candidates = findCandidates(entries, entryNd, storedNd, storedVd, storedDPgF, embeddedCode);
      const rejected = group[0].catalogName;

      const lensPgF =
        storedVd !== undefined && storedDPgF !== undefined ? partialDispersionPgF(storedVd, storedDPgF) : null;

      const headingExtras: string[] = [];
      if (embeddedCode !== null) headingExtras.push(`code=${embeddedCode.raw}`);
      if (lensPgF !== null) headingExtras.push(`PgF=${lensPgF.toFixed(4)} (dPgF=${storedDPgF!.toFixed(4)})`);
      const headingExtra = headingExtras.length > 0 ? ` [${headingExtras.join(", ")}]` : "";

      lines.push(
        `## stored (nd=${storedNd.toFixed(5)}, vd=${storedVd?.toFixed(2) ?? "?"})${headingExtra}  ` +
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
          let pgfPart = "";
          if (c.pgfDiff !== null) {
            const pgfSign = c.pgfDiff >= 0 ? "+" : "";
            pgfPart = `, ΔPgF=${pgfSign}${c.pgfDiff.toFixed(4)}`;
          }
          let codePart = "";
          if (c.codeDistance !== null) {
            codePart = `, codeΔ=${c.codeDistance.toFixed(1)}`;
          }
          lines.push(
            `- **${c.name}** (nd=${c.nd.toFixed(5)}, vd=${c.vd.toFixed(2)}, Δnd=${ndSign}${c.ndDiff.toFixed(4)}${vdPart}${pgfPart}${codePart})`,
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
