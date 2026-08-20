import { describe, expect, it } from "vitest";
import rf14 from "../../../src/lens-data/canon/CanonRF14mmF14LVCM.data.js";
import rf24 from "../../../src/lens-data/canon/CanonRF24mmF14LVCM.data.js";
import rf35 from "../../../src/lens-data/canon/CanonRF35mmF14LVCM.data.js";
import { resolveCompatibleGlass } from "../../../src/optics/glassCatalog.js";

function displayedElementLabels(lens: { elements: readonly { id: number; diagramLabel?: string }[] }): string[] {
  return lens.elements.map((element) => element.diagramLabel ?? String(element.id));
}

function apdNames(
  lens: { elements: readonly { name: string; apd?: string | boolean }[] },
  provenance: "patent" | "inferred",
): string[] {
  return lens.elements.filter(({ apd }) => apd === provenance).map(({ name }) => name);
}

function resolvedGlassCount(lens: { elements: readonly { glass: string; nd: number; vd: number }[] }): number {
  return lens.elements.filter((element) => resolveCompatibleGlass(element.glass, element.nd, element.vd)).length;
}

describe("Canon RF VCM prime diagram metadata", () => {
  it("keeps the repository-normalized production display names", () => {
    expect([rf14.name, rf24.name, rf35.name]).toEqual([
      "CANON RF 14mm f/1.4 L VCM",
      "CANON RF 24mm f/1.4 L VCM",
      "CANON RF 35mm f/1.4 L VCM",
    ]);
  });

  it("uses the 14 mm patent element and functional-group labels", () => {
    expect(displayedElementLabels(rf14)).toEqual(Array.from({ length: 18 }, (_, index) => `G${index + 1}`));
    expect(rf14.groups.map(({ text }) => text)).toEqual(["L1 (FIXED)", "L2 (OBJECTWARD FOCUS)", "L3 (FIXED)"]);
  });

  it("states the published focus directions on the 24 mm and 35 mm groups", () => {
    expect(rf24.groups.map(({ text }) => text)).toEqual([
      "L1 (+)",
      "L2 (-) IMAGEWARD FOCUS",
      "L3 (+)",
      "L4 (+) OBJECTWARD FOCUS",
      "L5 (-)",
    ]);
    expect(rf35.groups.map(({ text }) => text)).toEqual([
      "B1",
      "B2 (OBJECTWARD FOCUS)",
      "B3",
      "B4 (OBJECTWARD FOCUS)",
      "B5",
    ]);
  });

  it("keeps patent-backed and production-inferred dispersion tags distinct", () => {
    expect(apdNames(rf14, "patent")).toEqual(["L9", "L11", "L12", "L14"]);
    expect(apdNames(rf14, "inferred")).toEqual(["L2", "L5"]);
    expect(apdNames(rf24, "inferred")).toEqual(["E9", "E11"]);
    expect(apdNames(rf35, "inferred")).toEqual(["L8", "L10"]);
  });

  it("retains the audited chromatic-model coverage", () => {
    expect(resolvedGlassCount(rf14)).toBe(17);
    expect(resolvedGlassCount(rf24)).toBe(15);
    expect(resolvedGlassCount(rf35)).toBe(14);
  });
});
