/**
 * Element focal-length report.
 *
 * Classifies elements before comparing authored refractive focal lengths with
 * the thick-lens formula in air. Mirrors, flat plates, and elements without
 * authored values are listed separately.
 *
 * S2.P6.T4 / C0 gate: report only.
 *
 * Runs only via `npm run generate:reports`, never in `npm test`.
 *
 * Regenerate: `npm run generate:reports -- elementFocalLengths`
 */
import { describe, expect, it } from "vitest";
import { mkdirSync, writeFileSync } from "node:fs";
import { buildLens } from "../src/optics/buildLens.js";
import { computeElementFocalLength } from "../src/optics/optics.js";
import { FLAT_R_THRESHOLD } from "../src/optics/geometry.js";
import { LENS_CATALOG } from "../src/utils/catalog/lensCatalog.js";
import type { ElementData, RuntimeLens } from "../src/types/optics.js";

const REPORT_DIR = "agent_docs/generated";
const REPORT_PATH = `${REPORT_DIR}/element-focal-lengths.generated.md`;

const modules = import.meta.glob<{ default: unknown }>("../src/lens-data/**/*.data.ts", { eager: true });

function toRepoRelativeLensPath(modulePath: string): string {
  const lensDataIndex = modulePath.indexOf("src/lens-data/");
  return lensDataIndex >= 0 ? modulePath.slice(lensDataIndex) : modulePath.replace(/^(\.\.\/)+/, "");
}

function buildLensFilePathByKey(): Map<string, string> {
  const paths = new Map<string, string>();
  for (const [modulePath, mod] of Object.entries(modules)) {
    const data = mod.default as { key?: string } | undefined;
    if (data?.key) paths.set(data.key, toRepoRelativeLensPath(modulePath));
  }
  return paths;
}

interface ElementRow {
  key: string;
  lensName: string;
  filePath: string;
  elemId: number;
  elemName: string;
  elemType: string;
}

interface ExcludedElementRow extends ElementRow {
  authoredFl: number | undefined;
  convention: string;
}

interface ComparedElementRow extends ElementRow {
  authoredFl: number;
  computedFl: number;
  diffMm: number | null;
  diffPct: number | null;
  absDiffPct: number;
  flag: "> 5%" | "> 1%" | "—";
}

interface MissingElementRow extends ElementRow {
  elemRole: string;
  computedFl: number;
}

// Physical classes take precedence over missing authored values, so each element appears once.
function classifyElement(element: ElementData, L: RuntimeLens): "mirror" | "plate" | "refractive" {
  const span = L.ES?.find(([id]) => id === element.id);
  if (!span) throw new Error(`Unresolved element span: ${element.id} / ${element.name}`);
  const [, s1, s2] = span;
  const front = L.S[s1];
  const rear = L.S[s2];
  // Clear central plugs can span annular mirrors owned by a different element.
  const surfaces = L.S.slice(s1, s2 + 1).filter(
    (surface) => surface === front || surface === rear || surface.elemId === element.id,
  );
  if (surfaces.some((surface) => surface.interaction?.type === "reflect")) return "mirror";
  if (Math.abs(front.R) >= FLAT_R_THRESHOLD && Math.abs(rear.R) >= FLAT_R_THRESHOLD) return "plate";
  if (
    element.nd > 1 &&
    (front.interaction?.type ?? "refract") === "refract" &&
    (rear.interaction?.type ?? "refract") === "refract"
  )
    return "refractive";
  throw new Error(`Unsupported element class: ${element.id} / ${element.name}`);
}

function compareIdentity(a: ElementRow, b: ElementRow): number {
  // Explicit locale and key tie-break keep equal differences deterministic, including infinities.
  return a.lensName.localeCompare(b.lensName, "en") || a.key.localeCompare(b.key, "en") || a.elemId - b.elemId;
}

function formatAuthored(value: number | undefined): string {
  if (value === undefined) return "absent";
  if (value === 1e15) return "1e15";
  return Number.isFinite(value) ? String(value) : "∞";
}

function zeroPowerConvention(value: number | undefined): string {
  if (value === undefined) return "absent (no authored focal length)";
  if (value === 0) return "0 (zero-power sentinel)";
  if (value === 1e15) return "1e15 (infinity sentinel)";
  if (value === Infinity) return "∞ (explicit infinity)";
  return "No zero-power convention; authored power is not modeled by the refractive formula";
}

function escapeTableCell(value: string): string {
  return value.replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function formatFocalLength(value: number): string {
  if (!Number.isFinite(value) || Math.abs(value) >= 1e10) return "∞";
  return value.toFixed(2);
}

function formatDiffMm(diff: number | null): string {
  if (diff === null || !Number.isFinite(diff)) return "—";
  if (Math.abs(diff) < 0.005) return "0.00";
  const sign = diff > 0 ? "+" : "";
  return `${sign}${diff.toFixed(2)}`;
}

function formatDiffPct(diffPct: number | null): string {
  if (diffPct === null || !Number.isFinite(diffPct)) return "—";
  if (Math.abs(diffPct) < 0.005) return "0.00%";
  const sign = diffPct > 0 ? "+" : "";
  return `${sign}${diffPct.toFixed(2)}%`;
}

function isAuthoredFlat(fl: number): boolean {
  return Math.abs(fl) >= 1e10;
}

function isComputedFlat(fl: number): boolean {
  return !Number.isFinite(fl) || Math.abs(fl) >= 1e10;
}

describe("element focal lengths report", () => {
  it("emits a report comparing authored vs thick-lens computed focal lengths", () => {
    const pathsByKey = buildLensFilePathByKey();
    const comparedRows: ComparedElementRow[] = [];
    const missingRows: MissingElementRow[] = [];
    const mirrorRows: ExcludedElementRow[] = [];
    const plateRows: ExcludedElementRow[] = [];
    let totalMissing = 0;
    let totalElements = 0;
    let diffOver1Pct = 0;
    let diffOver5Pct = 0;

    const catalogKeys = Object.keys(LENS_CATALOG).sort();
    for (const key of catalogKeys) {
      const data = LENS_CATALOG[key];
      const L = buildLens(data);
      const filePath = pathsByKey.get(key) ?? `src/lens-data/${key}.data.ts`;
      const lensName = data.name ?? key;

      for (const elem of L.elements) {
        totalElements++;
        const authoredFl = (elem as ElementData & { focalLengthMm?: number }).focalLengthMm ?? elem.fl;
        const kind = classifyElement(elem, L);
        const identity = { key, lensName, filePath, elemId: elem.id, elemName: elem.name, elemType: elem.type };
        if (authoredFl === undefined) totalMissing++;
        if (kind === "mirror") {
          mirrorRows.push({
            ...identity,
            authoredFl,
            convention: "Reflective or catadioptric focal length; not modeled",
          });
          continue;
        }
        if (kind === "plate") {
          plateRows.push({ ...identity, authoredFl, convention: zeroPowerConvention(authoredFl) });
          continue;
        }
        const computed = computeElementFocalLength(elem, L);
        if (computed === null) throw new Error(`Unresolved focal length: ${key} / ${elem.name}`);

        if (authoredFl !== undefined) {
          const bothFlat = isAuthoredFlat(authoredFl) && isComputedFlat(computed);
          let diffMm: number | null;
          let diffPct: number | null;
          let absDiffPct: number;
          let flag: "> 5%" | "> 1%" | "—";

          if (bothFlat) {
            diffMm = 0;
            diffPct = 0;
            absDiffPct = 0;
            flag = "—";
          } else if (!Number.isFinite(computed) || isAuthoredFlat(authoredFl) || authoredFl === 0) {
            diffMm = null;
            diffPct = null;
            absDiffPct = Infinity;
            flag = "> 5%";
            diffOver1Pct++;
            diffOver5Pct++;
          } else {
            diffMm = computed - authoredFl;
            diffPct = (diffMm / Math.abs(authoredFl)) * 100;
            absDiffPct = Math.abs(diffPct);
            if (absDiffPct > 5.0) {
              flag = "> 5%";
              diffOver1Pct++;
              diffOver5Pct++;
            } else if (absDiffPct > 1.0) {
              flag = "> 1%";
              diffOver1Pct++;
            } else {
              flag = "—";
            }
          }

          comparedRows.push({
            key,
            lensName,
            filePath,
            elemId: elem.id,
            elemName: elem.name,
            elemType: elem.type,
            authoredFl,
            computedFl: computed,
            diffMm,
            diffPct,
            absDiffPct,
            flag,
          });
        } else {
          missingRows.push({
            key,
            lensName,
            filePath,
            elemId: elem.id,
            elemName: elem.name,
            elemType: elem.type,
            elemRole: elem.role ?? "",
            computedFl: computed,
          });
        }
      }
    }

    comparedRows.sort((a, b) => {
      if (a.absDiffPct !== b.absDiffPct) return a.absDiffPct > b.absDiffPct ? -1 : 1;
      return compareIdentity(a, b);
    });
    mirrorRows.sort(compareIdentity);
    plateRows.sort(compareIdentity);
    missingRows.sort(compareIdentity);

    const lines: string[] = [];
    lines.push("# Element Focal Lengths (auto-generated)");
    lines.push("");
    lines.push("Compares authored refractive element focal lengths (`focalLengthMm` / `fl`) with the thick-lens");
    lines.push("value in air at the reference line. Mirrors and flat plates are classified before comparison.");
    lines.push("");
    lines.push("## Summary");
    lines.push("");
    lines.push(`- **${catalogKeys.length}** lenses scanned`);
    lines.push(`- **${totalElements}** total elements examined`);
    lines.push(`- **${comparedRows.length}** refractive lens elements with authored focal length compared`);
    lines.push(`- **${mirrorRows.length}** mirrors and Mangin mirrors (not compared)`);
    lines.push(`- **${plateRows.length}** plane-parallel plates and prisms (not compared)`);
    lines.push(`- **${missingRows.length}** remaining elements with no authored focal length (not compared)`);
    lines.push(`- **${totalMissing}** elements with no authored focal length across all classes (included above)`);
    lines.push(
      `- **${diffOver1Pct}** refractive elements differ by more than 1% (${((diffOver1Pct / comparedRows.length) * 100).toFixed(1)}% of compared)`,
    );
    lines.push(
      `- **${diffOver5Pct}** refractive elements differ by more than 5% (${((diffOver5Pct / comparedRows.length) * 100).toFixed(1)}% of compared)`,
    );
    lines.push("");
    lines.push("The four sections are disjoint: mirrors first, then both-flat plates/prisms, then remaining");
    lines.push(
      "refractive elements split by presence of an authored value. Missing mirror/plate values stay in their physical class.",
    );
    lines.push("");
    lines.push("## Formula and Method");
    lines.push("");
    lines.push("The thick-lens focal length in air is computed using the Gullstrand thick-lens equation:");
    lines.push("");
    lines.push("$$\\Phi_1 = \\frac{n - 1}{R_1}, \\quad \\Phi_2 = \\frac{1 - n}{R_2}$$");
    lines.push("");
    lines.push("$$\\Phi = \\Phi_1 + \\Phi_2 - \\frac{d}{n} \\Phi_1 \\Phi_2, \\quad f = \\frac{1}{\\Phi}$$");
    lines.push("");
    lines.push("where:");
    lines.push("- $R_1$ is the front surface radius of curvature in mm;");
    lines.push("- $R_2$ is the rear surface radius of curvature in mm;");
    lines.push("- $d$ is the axial centre thickness in mm;");
    lines.push(
      "- $n$ is the refractive index of the element medium in air at the reference line (helium d line, 587.56 nm, or",
    );
    lines.push("  mercury e line, 546.07 nm).");
    lines.push("");
    lines.push("Key rules:");
    lines.push(
      '- **Flat surfaces**: surfaces with $|R| \\ge 10^{10}$ mm or authored `"flat"` contribute zero power ($\\Phi_i = 0$).',
    );
    lines.push(
      "- **Zero power**: systems with total power $\\Phi = 0$ (e.g. plane-parallel plates) have $f = \\infty$.",
    );
    lines.push(
      "- **Cemented groups**: each member element is evaluated using its own bounding surfaces, its own centre",
    );
    lines.push("  thickness, and its own medium index in air.");
    lines.push(
      '- **Internal stops / spans**: where an element spans an embedded stop (`stopPlacement: "inside-element"`),',
    );
    lines.push("  centre thickness $d$ is the cumulative axial distance between its front and rear surfaces.");
    lines.push(
      "- **Refractive index**: use the front surface's authored `nd` (`L.S[s1].nd`), matching monochromatic tracing",
    );
    lines.push('  at the reference line (helium d, or mercury e when the element\'s `indexReference` is `"e"`).');
    lines.push("");
    lines.push("**Regenerate this file** by running `npm run generate:reports -- elementFocalLengths`.");
    lines.push("");
    lines.push("## Refractive Lens Elements");
    lines.push("");
    lines.push(
      "Elements with two refracting bounding surfaces and a glass medium, evaluated as isolated elements in air.",
    );
    lines.push("Sorted by absolute percentage difference, largest first.");
    lines.push("");
    lines.push("| Lens | Element | Type | Authored (mm) | Computed (mm) | Δ (mm) | Δ (%) | Flag |");
    lines.push("|---|---|---|---|---|---|---|---|");

    for (const row of comparedRows) {
      const lensLink = `[${escapeTableCell(row.lensName)}](../../${row.filePath})`;
      const elemCell = escapeTableCell(row.elemName);
      const typeCell = escapeTableCell(row.elemType);
      const authoredCell = formatFocalLength(row.authoredFl);
      const computedCell = formatFocalLength(row.computedFl);
      const diffMmCell = formatDiffMm(row.diffMm);
      const diffPctCell = formatDiffPct(row.diffPct);
      lines.push(
        `| ${lensLink} | ${elemCell} | ${typeCell} | ${authoredCell} | ${computedCell} | ${diffMmCell} | ${diffPctCell} | ${row.flag} |`,
      );
    }

    lines.push("");
    lines.push("## Mirrors and Mangin Mirrors");
    lines.push("");
    lines.push(
      "Any element containing a reflecting surface, including index-1 media bounded by reflectors, is excluded",
    );
    lines.push("from the refractive comparison. Its authored value is a reflective or catadioptric focal length that");
    lines.push("the thick-lens formula does not model. No refractive focal length is computed for these elements.");
    lines.push("");
    lines.push("| Lens | Element | Type | Authored (mm) |");
    lines.push("|---|---|---|---|");
    for (const row of mirrorRows) {
      const lensLink = `[${escapeTableCell(row.lensName)}](../../${row.filePath})`;
      lines.push(
        `| ${lensLink} | ${escapeTableCell(row.elemName)} | ${escapeTableCell(row.elemType)} | ${formatAuthored(row.authoredFl)} |`,
      );
    }
    lines.push("");
    lines.push("## Plane-Parallel Plates and Prisms");
    lines.push("");
    lines.push("Both bounding surfaces are flat: computed refractive $f = \\infty$. Authored zero-power conventions");
    lines.push("are preserved below. A diffractive phase plate can have a nonzero authored focal length; this formula");
    lines.push(
      "omits its phase power, so it is not a refractive mismatch. This geometric class also includes the flat",
    );
    lines.push("hidden blocker fixture, whose blocking behavior is outside the focal-length formula.");
    lines.push("");
    lines.push("| Lens | Element | Type | Authored (mm) | Computed (mm) | Zero-power convention |");
    lines.push("|---|---|---|---|---|---|");
    for (const row of plateRows) {
      const lensLink = `[${escapeTableCell(row.lensName)}](../../${row.filePath})`;
      lines.push(
        `| ${lensLink} | ${escapeTableCell(row.elemName)} | ${escapeTableCell(row.elemType)} | ${formatAuthored(row.authoredFl)} | ∞ | ${row.convention} |`,
      );
    }
    lines.push("");
    lines.push("## Elements with No Authored Focal Length");
    lines.push("");
    lines.push(
      "Remaining refractive elements that declare no authored `focalLengthMm` or `fl`; mirrors and plates are listed above.",
    );
    lines.push("");
    lines.push("| Lens | Element | Type | Computed (mm) | Role |");
    lines.push("|---|---|---|---|---|");

    for (const row of missingRows) {
      const lensLink = `[${escapeTableCell(row.lensName)}](../../${row.filePath})`;
      const elemCell = escapeTableCell(row.elemName);
      const typeCell = escapeTableCell(row.elemType);
      const computedCell = formatFocalLength(row.computedFl);
      const roleCell = escapeTableCell(row.elemRole);
      lines.push(`| ${lensLink} | ${elemCell} | ${typeCell} | ${computedCell} | ${roleCell} |`);
    }

    mkdirSync(REPORT_DIR, { recursive: true });
    writeFileSync(REPORT_PATH, `${lines.join("\n").trimEnd()}\n`);

    expect(comparedRows.length + mirrorRows.length + plateRows.length + missingRows.length).toBe(totalElements);
    expect(catalogKeys.length).toBeGreaterThan(0);
    expect(comparedRows.length).toBeGreaterThan(0);
    expect(missingRows.length).toBeGreaterThan(0);
  });
});
