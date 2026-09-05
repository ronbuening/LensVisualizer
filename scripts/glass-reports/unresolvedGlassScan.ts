import assert from "node:assert/strict";
/**
 * Unresolved-glass scanner.
 *
 * Companion to catalogMismatchScan: where that report starts with glass strings
 * that resolve to the catalog but fail the nd safety net, this report starts
 * with non-explicit-unmatched glass strings that do not resolve at all. It keeps
 * the glass-catalog priority queue honest as new lens files are added.
 *
 * Rendered by the explicit glass-report command; regression tests compare the output.
 */

import { glassTokens, resolveGlass } from "../../src/optics/glassCatalog.js";
import { isExplicitlyUnmatched, walkLensSurfaces } from "./glassScanLib.js";

const REPORT_DIR = "agent_docs/generated";

interface Occurrence {
  filePath: string;
  lensName: string;
  surfaceLabels: string[];
  glassString: string;
}

function candidateTokens(glassString: string): string[] {
  // Tokenize with the resolver's own tokenizer, then keep every digit-bearing
  // token that itself fails to resolve. No vendor-prefix whitelist: the old
  // list predated the Hikari-era expansion and silently hid unresolved J-/Q-/
  // M-/MC-/D-/PBH/TAC-style tokens from the catalog-expansion queue.
  return glassTokens(glassString)
    .map((token) => token.toUpperCase())
    .filter((token) => /\d/.test(token) && !resolveGlass(token));
}

import type { GlassLensModules } from "./glassScanLib.js";

export function renderUnresolvedGlassScan(modules: GlassLensModules) {
  const reports: Record<string, string> = {};
  const emitReport = (path: string, text: string) => {
    reports[path] = text;
  };

  const byToken = new Map<string, Occurrence[]>();
  let totalLenses = 0;
  let totalSurfaces = 0;
  let totalGlassDeclarations = 0;
  let totalUnresolvedAnnotations = 0;

  totalLenses = walkLensSurfaces(modules, ({ filePath, data, L }) => {
    const elementById = new Map(L.elements.map((element) => [element.id, element]));
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
  });

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
  lines.push("**Regenerate this file** by running `npm run generate:glass-reports`.");
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

  emitReport(`${REPORT_DIR}/unresolved-glass.generated.md`, lines.join("\n") + "\n");
  assert(totalLenses > 0);

  return reports;
}
