/**
 * Mirror fixture authoring report.
 *
 * Scans hidden/reference mirror fixtures and emits a markdown checklist for
 * optical-path, mirror, blocker, annular, and image-plane metadata.
 *
 * Always passes - its job is to emit an authoring report, not to gate CI.
 *
 * Regenerate: `npm test -- mirrorFixtureAuthoringReport`
 */
import { describe, expect, it } from "vitest";
import { mkdirSync, writeFileSync } from "node:fs";
import buildLens from "../../../src/optics/buildLens.js";
import { foldedHitOrderLabelsForDisplay } from "../../../src/optics/foldedPathDisplay.js";
import { doLayout } from "../../../src/optics/optics.js";
import validateLensData from "../../../src/optics/validateLensData.js";
import type { LensData, RuntimeLens, SurfaceData } from "../../../src/types/optics.js";
import { LENS_CATALOG, isDebugLensKey } from "../../../src/utils/catalog/lensCatalog.js";

const modules = import.meta.glob<{ default: LensData }>("../../../src/lens-data/**/*.data.ts", { eager: true });

const REPORT_DIR = "agent_docs/generated";
const REPORT_PATH = `${REPORT_DIR}/mirror-fixtures.generated.md`;

interface FixtureRow {
  key: string;
  name: string;
  filePath: string;
  pathMode: string;
  hitOrder: string[];
  imagePlane: string;
  reflectLabels: string[];
  blockLabels: string[];
  annularLabels: string[];
  secondSurfaceLabels: string[];
  tiltedLabels: string[];
  validationErrors: string[];
}

function toRepoRelativeLensPath(modulePath: string): string {
  const lensDataIndex = modulePath.indexOf("src/lens-data/");
  return lensDataIndex >= 0 ? modulePath.slice(lensDataIndex) : modulePath.replace(/^(\.\.\/)+/, "");
}

function buildLensFilePathByKey(): Map<string, string> {
  const paths = new Map<string, string>();
  for (const [modulePath, mod] of Object.entries(modules)) {
    if (mod.default?.key) paths.set(mod.default.key, toRepoRelativeLensPath(modulePath));
  }
  return paths;
}

function hasMirrorFixtureMetadata(data: LensData): boolean {
  return (
    Boolean(data.opticalPath) ||
    data.surfaces.some(
      (surface) =>
        surface.innerSd !== undefined ||
        surface.interaction?.type === "reflect" ||
        surface.interaction?.type === "block" ||
        surface.interaction?.normal !== undefined,
    )
  );
}

function surfaceLabels(L: RuntimeLens, predicate: (surface: SurfaceData) => boolean): string[] {
  return L.S.filter(predicate).map((surface) => surface.label);
}

function formatNumber(value: number): string {
  return Number.isInteger(value) ? value.toFixed(0) : value.toFixed(2);
}

function describeImagePlane(L: RuntimeLens): string {
  const plane = L.imagePlane;
  return `${plane.label}: z=${formatNumber(plane.z)}, y=${formatNumber(plane.y)}, n=(${formatNumber(
    plane.normal.z,
  )}, ${formatNumber(plane.normal.y)})`;
}

function describePathMode(L: RuntimeLens): string {
  if (L.opticalPath.surfaceLabels) return "explicit";
  return L.opticalPath.mode;
}

function formatLabels(labels: readonly string[]): string {
  return labels.length > 0 ? labels.map((label) => `\`${label}\``).join(" -> ") : "None";
}

function escapeTableCell(value: string): string {
  return value.replace(/\|/g, "\\|").replace(/\n/g, "<br>");
}

function fixtureRows(): FixtureRow[] {
  const filePathByKey = buildLensFilePathByKey();
  return Object.entries(LENS_CATALOG)
    .filter(([key, data]) => data.visible === false && isDebugLensKey(key) && hasMirrorFixtureMetadata(data))
    .map(([key, data]) => {
      const validationErrors = validateLensData(data as unknown as Record<string, unknown>);
      const L = buildLens(data);
      const layout = doLayout(0, 0, L);
      const hitOrder = foldedHitOrderLabelsForDisplay({
        L,
        zPos: layout.z,
        focusT: 0,
        zoomT: 0,
        aberrationT: 0,
        currentPhysStopSD: L.stopPhysSD,
        currentEPSD: L.EP.epSD,
      });

      return {
        key,
        name: data.name ?? key,
        filePath: filePathByKey.get(key) ?? `src/lens-data/${key}.data.ts`,
        pathMode: describePathMode(L),
        hitOrder,
        imagePlane: describeImagePlane(L),
        reflectLabels: surfaceLabels(L, (surface) => surface.interaction?.type === "reflect"),
        blockLabels: surfaceLabels(L, (surface) => surface.interaction?.type === "block"),
        annularLabels: surfaceLabels(L, (surface) => surface.innerSd !== undefined),
        secondSurfaceLabels: surfaceLabels(L, (surface) => surface.interaction?.mirrorKind === "second-surface"),
        tiltedLabels: surfaceLabels(L, (surface) => surface.interaction?.normal !== undefined),
        validationErrors,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

function buildReport(rows: FixtureRow[]): string {
  const validationIssueCount = rows.filter((row) => row.validationErrors.length > 0).length;
  const secondSurfaceCount = rows.filter((row) => row.secondSurfaceLabels.length > 0).length;
  const tiltedCount = rows.filter((row) => row.tiltedLabels.length > 0).length;
  const annularCount = rows.filter((row) => row.annularLabels.length > 0).length;

  const lines: string[] = [];
  lines.push("# Mirror Fixture Authoring Report (auto-generated)");
  lines.push("");
  lines.push(
    "Hidden/reference fixtures that exercise mirror, folded-path, annular, blocker, and image-plane metadata.",
  );
  lines.push("");
  lines.push("**Regenerate this file** by running `npm test -- mirrorFixtureAuthoringReport`.");
  lines.push("Regenerate the mirror report set with `npm run generate:mirror-reports`.");
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- **${rows.length}** hidden/reference fixtures scanned`);
  lines.push(`- **${secondSurfaceCount}** fixtures include second-surface mirror metadata`);
  lines.push(`- **${tiltedCount}** fixtures include tilted meridional plane metadata`);
  lines.push(`- **${annularCount}** fixtures include annular aperture or obstruction metadata`);
  lines.push(`- **${validationIssueCount}** fixtures currently report validation errors`);
  lines.push("");
  lines.push("## Fixture Matrix");
  lines.push("");
  lines.push("| Fixture | Path | Hit order | Image plane | Reflect | Block | Annular | Second surface | Validation |");
  lines.push("|---|---|---|---|---|---|---|---|---|");
  for (const row of rows) {
    const validation = row.validationErrors.length > 0 ? `${row.validationErrors.length} issue(s)` : "OK";
    lines.push(
      `| [${escapeTableCell(row.name)}](../../${row.filePath}) | ${row.pathMode} | ${escapeTableCell(
        formatLabels(row.hitOrder),
      )} | ${escapeTableCell(row.imagePlane)} | ${escapeTableCell(formatLabels(row.reflectLabels))} | ${escapeTableCell(
        formatLabels(row.blockLabels),
      )} | ${escapeTableCell(formatLabels(row.annularLabels))} | ${escapeTableCell(
        formatLabels(row.secondSurfaceLabels),
      )} | ${validation} |`,
    );
  }
  lines.push("");
  lines.push("## Fixture Details");
  lines.push("");
  for (const row of rows) {
    lines.push(`### [${row.name}](../../${row.filePath})`);
    lines.push("");
    lines.push(`- Key: \`${row.key}\``);
    lines.push(`- Path mode: ${row.pathMode}`);
    lines.push(`- Hit order: ${formatLabels(row.hitOrder)}`);
    lines.push(`- Image plane: ${row.imagePlane}`);
    lines.push(`- Reflective surfaces: ${formatLabels(row.reflectLabels)}`);
    lines.push(`- Blocking surfaces: ${formatLabels(row.blockLabels)}`);
    lines.push(`- Annular surfaces: ${formatLabels(row.annularLabels)}`);
    lines.push(`- Second-surface coatings: ${formatLabels(row.secondSurfaceLabels)}`);
    lines.push(`- Tilted planes: ${formatLabels(row.tiltedLabels)}`);
    if (row.validationErrors.length > 0) {
      lines.push("- Validation:");
      for (const error of row.validationErrors) lines.push(`  - ${error}`);
    } else {
      lines.push("- Validation: OK");
    }
    lines.push("");
  }
  return `${lines.join("\n")}\n`;
}

describe("mirror fixture authoring report", () => {
  it("emits a hidden/reference mirror fixture report", () => {
    const rows = fixtureRows();
    const report = buildReport(rows);

    mkdirSync(REPORT_DIR, { recursive: true });
    writeFileSync(REPORT_PATH, report);

    expect(rows.length).toBeGreaterThan(0);
    expect(rows.some((row) => row.key === "reference-mangin-second-surface-mirror")).toBe(true);
    expect(report).toContain("Second-surface coatings");
  });
});
