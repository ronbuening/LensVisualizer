/**
 * Six-digit glass-code scanner.
 *
 * Finds element glass annotations that still identify the material only by a
 * six-digit Schott-style code instead of by a concrete catalog glass type. It
 * emits two authoring reports:
 *
 *   1. all code-only elements, regardless of whether the code currently
 *      resolves to trusted catalog Sellmeier data;
 *   2. the subset that does not have trusted Sellmeier data in the runtime
 *      dispersion cascade.
 *
 * Always passes — its job is to surface the data, not gate CI.
 *
 * Regenerate: `npm test -- sixDigitGlassCodeScan`
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import buildLens from "../src/optics/buildLens.js";
import { evaluateSellmeier, LINE_NM, resolveGlass } from "../src/optics/glassCatalog.js";
import type { DispersionQuality } from "../src/optics/dispersion.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import type { LensData } from "../src/types/optics.js";

const modules = import.meta.glob<{ default: LensData }>("../src/lens-data/**/*.data.ts", { eager: true });
const REPORT_DIR = "agent_docs/generated";

interface SurfaceRef {
  label: string;
  quality: DispersionQuality;
}

interface CodeOnlyElement {
  lensKey: string;
  lensName: string;
  patentNumber: string | null;
  filePath: string;
  elementId: number;
  elementName: string;
  elementLabel: string;
  surfaceRefs: SurfaceRef[];
  glassString: string;
  codes: string[];
  storedNd: number;
  storedVd: number | undefined;
  catalogName: string | null;
  catalogNd: number | null;
  ndDiff: number | null;
  hasSellmeier: boolean;
}

function extractPatentNumber(subtitle: string | undefined): string | null {
  const match = subtitle?.match(
    /\b(?:Patent\s+)?((?:JPWO|WO|US|JP|DE|GB|FR|CH)\s*\d[\d,./-]*(?:\s*(?:A1|A|B2|B1|B|C\d?))?)/i,
  );
  return match?.[1].replace(/\s+/g, " ").trim() ?? null;
}

function extractSixDigitCodes(glassString: string): string[] {
  const codes = new Set<string>();
  const codePattern = /(?<![\d.])(\d{3})[/\-\s]?(\d{3})(?![\d.])/g;
  for (const match of glassString.matchAll(codePattern)) {
    codes.add(`${match[1]}${match[2]}`);
  }
  return [...codes];
}

function hasActualGlassTypeToken(glassString: string): boolean {
  const tokens = glassString.match(/[A-Za-z][A-Za-z0-9-]*\d[A-Za-z0-9]*/g) ?? [];
  return tokens.some((tokenRaw) => {
    const token = tokenRaw.toUpperCase();
    if (/^L\d+$/.test(token)) return false;
    if (/^S\d+$/.test(token)) return false;
    if (/^D\d+$/.test(token)) return false;
    if (/^G\d+$/.test(token)) return false;
    if (/^A\d+$/.test(token)) return false;
    if (/^F\d+$/.test(token)) return true;
    return (token.match(/[A-Z]/g) ?? []).length >= 2;
  });
}

function isCodeOnlyGlassAnnotation(glassString: string): boolean {
  return extractSixDigitCodes(glassString).length > 0 && !hasActualGlassTypeToken(glassString);
}

function formatNdDiff(diff: number | null): string {
  if (diff === null) return "";
  const sign = diff >= 0 ? "+" : "";
  return `${sign}${diff.toFixed(4)}`;
}

function qualitySummary(row: CodeOnlyElement): string {
  const qualities = [...new Set(row.surfaceRefs.map((surface) => surface.quality))];
  return qualities.length > 0 ? qualities.join(", ") : "no traced surfaces";
}

function catalogStatus(row: CodeOnlyElement): string {
  if (row.catalogName === null) return "No catalog entry";
  if (row.hasSellmeier) return `${row.catalogName} (trusted Sellmeier)`;
  return `${row.catalogName} rejected (Δnd=${formatNdDiff(row.ndDiff)})`;
}

function sortRows(rows: readonly CodeOnlyElement[]): CodeOnlyElement[] {
  return [...rows].sort((a, b) => {
    const nameDiff = a.lensName.localeCompare(b.lensName);
    if (nameDiff !== 0) return nameDiff;
    return a.elementId - b.elementId;
  });
}

function codeFrequency(rows: readonly CodeOnlyElement[]): [string, number, number][] {
  const byCode = new Map<string, CodeOnlyElement[]>();
  for (const row of rows) {
    for (const code of row.codes) {
      const list = byCode.get(code) ?? [];
      list.push(row);
      byCode.set(code, list);
    }
  }
  return [...byCode.entries()]
    .map<[string, number, number]>(([code, codeRows]) => [
      code,
      codeRows.length,
      new Set(codeRows.map((row) => row.filePath)).size,
    ])
    .sort((a, b) => {
      const countDiff = b[1] - a[1];
      if (countDiff !== 0) return countDiff;
      return a[0].localeCompare(b[0]);
    });
}

function renderReport(options: {
  title: string;
  description: string[];
  regenerateCommand: string;
  rows: readonly CodeOnlyElement[];
  totalLenses: number;
  totalCodeOnlyElements: number;
}): string {
  const sortedRows = sortRows(options.rows);
  const affectedLenses = new Set(sortedRows.map((row) => row.filePath));
  const lines: string[] = [];

  lines.push(`# ${options.title} (auto-generated)`);
  lines.push("");
  lines.push(...options.description);
  lines.push("");
  lines.push(`**Regenerate this file** by running \`${options.regenerateCommand}\`.`);
  lines.push("Regenerate the full glass report set with `npm run generate:glass-reports`.");
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- **${options.totalLenses}** lenses scanned`);
  lines.push(`- **${options.totalCodeOnlyElements}** total code-only elements found`);
  lines.push(`- **${sortedRows.length}** elements in this report`);
  lines.push(`- **${affectedLenses.size}** distinct lens files affected`);
  lines.push("");

  if (sortedRows.length === 0) {
    lines.push("## No matching elements");
    lines.push("");
    lines.push("No element glass annotations match this report's criteria.");
    return lines.join("\n") + "\n";
  }

  const frequency = codeFrequency(sortedRows);
  lines.push("## Codes by Frequency");
  lines.push("");
  lines.push("| Code | Elements | Lens files |");
  lines.push("|---|---:|---:|");
  for (const [code, elementCount, lensCount] of frequency) {
    lines.push(`| ${code} | ${elementCount} | ${lensCount} |`);
  }
  lines.push("");

  const byLens = new Map<string, CodeOnlyElement[]>();
  for (const row of sortedRows) {
    const list = byLens.get(row.lensKey) ?? [];
    list.push(row);
    byLens.set(row.lensKey, list);
  }

  lines.push("## Elements by Lens");
  lines.push("");
  for (const [_lensKey, lensRows] of [...byLens.entries()].sort(
    (a, b) => a[1][0].lensName.localeCompare(b[1][0].lensName) || a[0].localeCompare(b[0]),
  )) {
    const first = lensRows[0];
    const patentSuffix = first.patentNumber ? ` - ${first.patentNumber}` : "";
    lines.push(`### [${first.lensName}](../../${first.filePath})${patentSuffix}`);
    lines.push("");
    lines.push(
      "| Element | Surfaces | Code-only annotation | Stored nd/vd | Catalog/Sellmeier status | Dispersion quality |",
    );
    lines.push("|---|---|---|---|---|---|");
    for (const row of lensRows) {
      const vd = row.storedVd === undefined ? "?" : row.storedVd.toFixed(2);
      const surfaces = row.surfaceRefs.map((surface) => surface.label).join(", ") || "element";
      const elementName = row.elementLabel ? `${row.elementName} (${row.elementLabel})` : row.elementName;
      lines.push(
        `| ${elementName} | ${surfaces} | \`${row.glassString}\` | ${row.storedNd.toFixed(5)} / ${vd} | ${catalogStatus(row)} | ${qualitySummary(row)} |`,
      );
    }
    lines.push("");
  }

  return lines.join("\n") + "\n";
}

describe("six-digit glass-code scan", () => {
  it("emits reports for code-only glass annotations", () => {
    const rows: CodeOnlyElement[] = [];
    let totalLenses = 0;

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
        continue;
      }

      const filePath = path.replace("../", "");

      for (const element of L.elements) {
        if (!element.glass || !isCodeOnlyGlassAnnotation(element.glass)) continue;

        const surfaceRefs: SurfaceRef[] = [];
        for (let i = 0; i < L.S.length; i++) {
          const surface = L.S[i];
          if (surface.nd === 1.0 || surface.elemId !== element.id) continue;
          surfaceRefs.push({
            label: surface.label ?? `surface[${i}]`,
            quality: L.indexByIdx?.[i]?.quality ?? "constant",
          });
        }

        const catalogEntry = resolveGlass(element.glass);
        const catalogNd = catalogEntry ? evaluateSellmeier(catalogEntry, LINE_NM.d) : null;
        rows.push({
          lensKey: data.key,
          lensName: data.name ?? data.key,
          patentNumber,
          filePath,
          elementId: element.id,
          elementName: element.name,
          elementLabel: element.label,
          surfaceRefs,
          glassString: element.glass,
          codes: extractSixDigitCodes(element.glass),
          storedNd: element.nd,
          storedVd: element.vd,
          catalogName: catalogEntry?.name ?? null,
          catalogNd,
          ndDiff: catalogNd === null ? null : catalogNd - element.nd,
          hasSellmeier: surfaceRefs.some((surface) => surface.quality === "sellmeier"),
        });
      }
    }

    const noSellmeierRows = rows.filter((row) => !row.hasSellmeier);
    mkdirSync(REPORT_DIR, { recursive: true });

    writeFileSync(
      `${REPORT_DIR}/six-digit-glass-codes.generated.md`,
      renderReport({
        title: "Six-Digit Glass Code Elements",
        description: [
          "Elements whose `glass` annotation contains a six-digit glass code but no catalog-like glass type token.",
          "This is the broad inventory: some rows may already resolve to trusted Sellmeier data by code,",
          "but the lens data still lacks a human-readable glass type.",
        ],
        regenerateCommand: "npm test -- sixDigitGlassCodeScan",
        rows,
        totalLenses,
        totalCodeOnlyElements: rows.length,
      }),
    );

    writeFileSync(
      `${REPORT_DIR}/six-digit-glass-codes-missing-sellmeier.generated.md`,
      renderReport({
        title: "Six-Digit Glass Code Elements Missing Sellmeier Data",
        description: [
          "Subset of [six-digit-glass-codes.generated.md](six-digit-glass-codes.generated.md) where no associated",
          "element surface uses trusted catalog Sellmeier data in the runtime dispersion cascade.",
          "These are the highest-priority code-only rows for catalog additions, aliases, or explicit `Unmatched` notes.",
        ],
        regenerateCommand: "npm test -- sixDigitGlassCodeScan",
        rows: noSellmeierRows,
        totalLenses,
        totalCodeOnlyElements: rows.length,
      }),
    );

    expect(totalLenses).toBeGreaterThan(0);
  });
});
