/**
 * Unresolved-glass scanner.
 *
 * Companion to catalogMismatchScan: where that report starts with glass strings
 * that resolve to the catalog but fail the nd safety net, this report starts
 * with non-explicit-unmatched glass strings that do not resolve at all. It keeps
 * the glass-catalog priority queue honest as new lens files are added.
 *
 * Always passes — its job is to emit an authoring report, not to gate CI.
 */
import { describe, expect, it } from "vitest";
import { mkdirSync, writeFileSync } from "node:fs";
import buildLens from "../src/optics/buildLens.js";
import { resolveGlass } from "../src/optics/glassCatalog.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import type { LensData } from "../src/types/optics.js";

const modules = import.meta.glob<{ default: LensData }>("../src/lens-data/**/*.data.ts", { eager: true });
const REPORT_DIR = "agent_docs/generated";

interface Occurrence {
  filePath: string;
  lensName: string;
  surfaceLabels: string[];
  glassString: string;
}

function isExplicitlyUnmatched(glassString: string): boolean {
  return /\b(unmatched|unknown|proprietary|unidentified)\b/i.test(glassString);
}

function candidateTokens(glassString: string): string[] {
  const tokens = glassString.match(/[A-Za-z][A-Za-z0-9-]*\d[A-Za-z0-9]*|\d{6}/g) ?? [];
  return tokens
    .map((token) => token.toUpperCase())
    .filter((token) => {
      if (/^\d{6}$/.test(token)) return true;
      return /^(S-|N-|L-|H-|K-|TAF|TAFD|NBFD|FCD|FC|BACD|BSC|E-FD|E-F|SF\d|BK\d|F\d|CAF2|CAFD|FK|SK)/.test(token);
    });
}

describe("unresolved glass scan", () => {
  it("emits a report of unresolved glass tokens across the lens library", () => {
    const byToken = new Map<string, Occurrence[]>();
    let totalLenses = 0;
    let totalSurfaces = 0;
    let totalGlassDeclarations = 0;
    let totalUnresolvedAnnotations = 0;

    for (const [path, mod] of Object.entries(modules)) {
      const raw = mod.default;
      if (!raw?.key) continue;
      const data: LensData = { ...LENS_DEFAULTS, ...raw } as LensData;
      totalLenses++;

      let L;
      try {
        L = buildLens(data);
      } catch {
        continue;
      }

      const elementById = new Map(L.elements.map((element) => [element.id, element]));
      const filePath = path.replace("../", "");
      totalSurfaces += L.S.filter((surface) => surface.nd !== 1.0).length;

      for (const element of L.elements) {
        if (!element.glass) continue;
        totalGlassDeclarations++;
        if (resolveGlass(element.glass) || isExplicitlyUnmatched(element.glass)) continue;

        const surfaceLabels = L.S.filter(
          (surface) => surface.elemId && elementById.get(surface.elemId)?.id === element.id,
        )
          .map((surface) => surface.label ?? `surface[${L.S.indexOf(surface)}]`)
          .filter(Boolean);
        totalUnresolvedAnnotations++;

        for (const token of candidateTokens(element.glass)) {
          const occurrences = byToken.get(token) ?? [];
          occurrences.push({
            filePath,
            lensName: data.name ?? data.key,
            surfaceLabels,
            glassString: element.glass,
          });
          byToken.set(token, occurrences);
        }
      }
    }

    const sorted = [...byToken.entries()].sort((a, b) => {
      const countDiff = b[1].length - a[1].length;
      if (countDiff !== 0) return countDiff;
      return a[0].localeCompare(b[0]);
    });

    const lines: string[] = [];
    lines.push("# Unresolved Glass Tokens (auto-generated)");
    lines.push("");
    lines.push("Glass-like tokens from non-explicit-unmatched `glass` annotations that do not resolve");
    lines.push("through `resolveGlass`. Use this report to prioritize catalog additions, aliases,");
    lines.push("or per-lens patent backfills.");
    lines.push("");
    lines.push("**Regenerate this file** by running `npm test -- unresolvedGlassScan`.");
    lines.push("");
    lines.push("## Summary");
    lines.push("");
    lines.push(`- **${totalLenses}** lenses scanned`);
    lines.push(`- **${totalSurfaces}** non-air surfaces examined`);
    lines.push(`- **${totalGlassDeclarations}** element glass declarations examined`);
    lines.push(`- **${totalUnresolvedAnnotations}** non-explicit-unmatched annotations did not resolve`);
    lines.push(`- **${sorted.length}** distinct unresolved glass-like tokens found`);
    lines.push("");

    if (sorted.length === 0) {
      lines.push("## No unresolved tokens");
      lines.push("");
      lines.push("Every non-explicit-unmatched glass annotation resolves to the catalog.");
    } else {
      lines.push("## Tokens by Frequency");
      lines.push("");
      lines.push("| Token | Occurrences | Lens files | Notes |");
      lines.push("|---|---:|---:|---|");
      for (const [token, occurrences] of sorted) {
        const fileCount = new Set(occurrences.map((occurrence) => occurrence.filePath)).size;
        lines.push(`| ${token} | ${occurrences.length} | ${fileCount} | |`);
      }
      lines.push("");

      lines.push("## Occurrences");
      lines.push("");
      for (const [token, occurrences] of sorted) {
        lines.push(`### ${token} — ${occurrences.length} occurrence${occurrences.length === 1 ? "" : "s"}`);
        lines.push("");
        for (const occurrence of occurrences) {
          const surfaceList = occurrence.surfaceLabels.join(", ") || "element";
          lines.push(
            `- [${occurrence.lensName}](../../${occurrence.filePath}) ${surfaceList}: \`${occurrence.glassString}\``,
          );
        }
        lines.push("");
      }
    }

    mkdirSync(REPORT_DIR, { recursive: true });
    writeFileSync(`${REPORT_DIR}/unresolved-glass.generated.md`, lines.join("\n") + "\n");
    expect(totalLenses).toBeGreaterThan(0);
  });
});
