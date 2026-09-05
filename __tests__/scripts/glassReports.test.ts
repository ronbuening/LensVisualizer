import { renderSixDigitGlassCodeScan } from "../../scripts/glass-reports/sixDigitGlassCodeScan.js";
import { renderGlassCoverageOpportunitiesScan } from "../../scripts/glass-reports/glassCoverageOpportunitiesScan.js";
import { describe, expect, it, vi } from "vitest";
import { readFileSync, writeFileSync } from "node:fs";
import { generateGlassReports } from "../../scripts/glass-reports/generateGlassReports.js";
import { patentInventory, walkLensSurfaces } from "../../scripts/glass-reports/glassScanLib.js";
import type { LensWalkContext } from "../../scripts/glass-reports/glassScanLib.js";
import { buildSimplePositiveElementLens } from "../src/optics/testLensFixtures.js";

vi.mock("node:fs", async (importOriginal) => ({
  ...(await importOriginal<typeof import("node:fs")>()),
  writeFileSync: vi.fn(() => {
    throw new Error("Report regression checks must not write files");
  }),
  mkdirSync: vi.fn(() => {
    throw new Error("Report regression checks must not create directories");
  }),
}));

const common = [
  "catalog-mismatches",
  "glass-ambiguities",
  "glass-relabel-by-lens",
  "glass-relabel-candidates",
  "sellmeier-coverage",
  "unresolved-glass",
];
const patentDependent = [
  "six-digit-glass-codes",
  "six-digit-glass-codes-missing-sellmeier",
  "glass-coverage-opportunities",
];

describe("glass report regression checks", () => {
  it("renders every available report exactly without writing tracked output", () => {
    const names = [...common, ...(patentInventory().length ? patentDependent : [])];
    const paths = names.map((name) => `agent_docs/generated/${name}.generated.md`).sort();
    const before = Object.fromEntries(paths.map((path) => [path, readFileSync(path, "utf8")]));
    const reports = generateGlassReports();
    expect(Object.keys(reports).sort()).toEqual(paths);
    expect(writeFileSync).not.toHaveBeenCalled();
    for (const path of paths) {
      expect(reports[path], `${path} is stale; run npm run generate:glass-reports`).toBe(before[path]);
      expect(readFileSync(path, "utf8"), `${path} must not be written during tests`).toBe(before[path]);
    }
  });
  it("reuses a single prepared inventory and separates replaced module identities", () => {
    const lens = buildSimplePositiveElementLens();
    const modules = { "../../../src/lens-data/reference/fixture.data.ts": { default: lens.data } };
    const contexts: LensWalkContext[] = [];
    expect(walkLensSurfaces(modules, (c) => contexts.push(c))).toBe(1);
    walkLensSurfaces(modules, (c) => contexts.push(c));
    expect(contexts[1]).toBe(contexts[0]);
    expect(contexts[0].filePath).toBe("src/lens-data/reference/fixture.data.ts");
    walkLensSurfaces({ ...modules }, (c) => contexts.push(c));
    expect(contexts[2]).not.toBe(contexts[0]);
    expect(contexts[2].L.S).toEqual(contexts[0].L.S);
  });
});

it("preserves patent-dependent reports when local source PDFs are absent", () => {
  const modules = { fixture: { default: buildSimplePositiveElementLens().data } };
  const warnings = vi.spyOn(console, "warn").mockImplementation(() => undefined);
  try {
    expect(renderSixDigitGlassCodeScan(modules, [])).toBeUndefined();
    expect(renderGlassCoverageOpportunitiesScan(modules, [])).toBeUndefined();
    expect(warnings).toHaveBeenCalledTimes(2);
    expect(warnings.mock.calls.every(([message]) => String(message).includes("no local patents"))).toBe(true);
  } finally {
    warnings.mockRestore();
  }
});
