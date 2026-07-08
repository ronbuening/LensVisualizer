import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

/**
 * Structural floor for lens analysis files, per src/lens-data/LENS_ANALYSIS_SPEC.md.
 *
 * The spec allows adapted section titles, so this asserts the invariants that
 * hold for every authored file rather than exact heading text: a non-empty
 * body, the bold-label patent metadata block (patent number, one
 * ownership/authorship line, one date line), and enough H2/H3 sections to
 * carry the required skeleton.
 */

const lensDataRoot = fileURLToPath(new URL("../../../src/lens-data", import.meta.url));

function collectAnalysisFiles(dir: string): string[] {
  const found: string[] = [];
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) found.push(...collectAnalysisFiles(path));
    else if (name.endsWith(".analysis.md")) found.push(path);
  }
  return found;
}

const FILES = collectAnalysisFiles(lensDataRoot);

const CHECKS: { label: string; ok: (text: string) => boolean }[] = [
  { label: "non-empty body", ok: (text) => text.trim().length > 0 },
  { label: "**Patent:** metadata line", ok: (text) => /^\*\*Patent/m.test(text) },
  {
    label: "ownership line (**Inventor/Applicant/Assignee/Designer**)",
    ok: (text) => /^\*\*(Inventor|Applicant|Assignee|Designer)/m.test(text),
  },
  {
    label: "date line (**Filed/Filing/Published/Granted/Priority/Issued**)",
    ok: (text) => /^\*\*(Filed|Filing|Published|Granted|Priority|Issued)/m.test(text),
  },
  { label: "at least 5 H2/H3 sections", ok: (text) => (text.match(/^#{2,3} /gm) ?? []).length >= 5 },
];

describe("lens analysis files", () => {
  it("found the analysis corpus", () => {
    expect(FILES.length).toBeGreaterThan(300);
  });

  for (const { label, ok } of CHECKS) {
    it(`every analysis file has: ${label}`, () => {
      const offenders = FILES.filter((path) => !ok(readFileSync(path, "utf-8"))).map((path) =>
        relative(lensDataRoot, path),
      );
      expect(offenders, `see the Required Section Skeleton in src/lens-data/LENS_ANALYSIS_SPEC.md`).toEqual([]);
    });
  }
});
