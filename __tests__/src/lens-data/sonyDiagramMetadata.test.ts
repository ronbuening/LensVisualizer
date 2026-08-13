import { describe, expect, it } from "vitest";
import dt1650 from "../../../src/lens-data/sony/SonyDT1650mmf28SSM.data.js";
import e18200 from "../../../src/lens-data/sony/SonyE18200mmf3563OSSLE.data.js";
import e50 from "../../../src/lens-data/sony/SonyE50mmf18OSS.data.js";
import { resolveCompatibleGlass } from "../../../src/optics/glassCatalog.js";

function displayedElementLabels(lens: { elements: readonly { id: number; diagramLabel?: string }[] }): string[] {
  return lens.elements.map((element) => element.diagramLabel ?? String(element.id));
}

describe("Sony patent diagram metadata", () => {
  it("keeps the production display names", () => {
    expect([dt1650.name, e18200.name, e50.name]).toEqual([
      "SONY DT 16-50mm f/2.8 SSM",
      "SONY E 18-200mm f/3.5-6.3 OSS LE",
      "SONY E 50mm f/1.8 OSS",
    ]);
  });

  it("uses source identifiers instead of optical-media array indexes", () => {
    expect(displayedElementLabels(dt1650)).toEqual([
      "G1",
      "G2",
      "G3",
      "G4r",
      "G4",
      "G5",
      "G6",
      "G7",
      "G8",
      "G9",
      "G10",
      "G11",
      "G12",
      "G13",
      "G13r",
      "G14",
      "G15",
      "G16",
    ]);
    expect(displayedElementLabels(e18200)).toEqual([
      "L1",
      "L2",
      "L3",
      "L4r",
      "L4",
      "L5",
      "L6",
      "L7",
      "L8",
      "L9",
      "L10",
      "L11",
      "L12",
      "L13",
      "L14",
      "L15",
      "L15r",
      "L16",
      "L17",
    ]);
    expect(displayedElementLabels(e50)).toEqual([
      "L211",
      "L212",
      "L213",
      "L214",
      "L215",
      "L216",
      "L221",
      "L231",
      "L232",
    ]);
  });

  it("preserves the patent subgroup and stabilization tags", () => {
    expect(e18200.groups.map(({ text }) => text)).toEqual([
      "G1 (+)",
      "G2 (−)",
      "G3A",
      "G3B OSS",
      "G3C",
      "G4 FOCUS (−)",
      "G5 (+)",
    ]);
    expect(e50.doublets.map(({ text }) => text)).toEqual(["OSS", "D1"]);
  });

  it("maps every specified glass medium to a catalog dispersion curve", () => {
    for (const lens of [dt1650, e18200, e50]) {
      for (const element of lens.elements) {
        if (element.glass.startsWith("Unmatched")) continue;
        expect(
          resolveCompatibleGlass(element.glass, element.nd, element.vd),
          `${lens.name}: ${element.name}`,
        ).not.toBeNull();
      }
    }
  });

  it("marks only the production-count-correlated ED positions as inferred", () => {
    expect(dt1650.elements.filter(({ apd }) => apd === "inferred").map(({ name }) => name)).toEqual([
      "G10",
      "G12",
      "G15",
    ]);
    expect(e18200.elements.filter(({ apd }) => apd === "inferred").map(({ name }) => name)).toEqual(["L2", "L16"]);
    for (const element of [...dt1650.elements, ...e18200.elements]) {
      expect("dPgF" in element).toBe(false);
    }
  });
});
