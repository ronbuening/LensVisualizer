import { describe, expect, it } from "vitest";
import a005 from "../../../src/lens-data/tamron/TamronA00570300mmf456VC.data.js";
import a007 from "../../../src/lens-data/tamron/TamronSPA0072470mmf28VC.data.js";
import a010 from "../../../src/lens-data/tamron/TamronA01028300mmf3563.data.js";
import a001 from "../../../src/lens-data/tamron/TamronA00170200mmf28.data.js";
import a03 from "../../../src/lens-data/tamron/TamronA0328200mmf3856.data.js";
import a061 from "../../../src/lens-data/tamron/TamronA06128300mmf3563.data.js";
import a08 from "../../../src/lens-data/tamron/TamronA08200500mmf563.data.js";
import a056 from "../../../src/lens-data/tamron/TamronA05670180mmf28.data.js";
import a069 from "../../../src/lens-data/tamron/TamronA06950300mmf4563.data.js";
import a009 from "../../../src/lens-data/tamron/TamronSPA00970200mmf28VC.data.js";
import a011 from "../../../src/lens-data/tamron/TamronSPA011150600mmf563VC.data.js";
import a09 from "../../../src/lens-data/tamron/TamronSPA092875mmf28.data.js";
import b011 from "../../../src/lens-data/tamron/TamronB01118200mmf3563VC.data.js";
import b028 from "../../../src/lens-data/tamron/TamronB02818400mmf3563.data.js";
import c001 from "../../../src/lens-data/tamron/TamronC00114150mmf3558.data.js";

function displayedElementLabels(lens: { elements: readonly { id: number; diagramLabel?: string }[] }): string[] {
  return lens.elements.map((element) => element.diagramLabel ?? String(element.id));
}

function inferredApdNames(lens: { elements: readonly { name: string; apd?: string | boolean }[] }): string[] {
  return lens.elements.filter(({ apd }) => apd === "inferred").map(({ name }) => name);
}

describe("Tamron patent diagram metadata", () => {
  it("keeps the production display names and model-family marks", () => {
    expect([a005.name, a007.name, a010.name, a056.name, a069.name, b028.name]).toEqual([
      "TAMRON SP 70-300mm f/4-5.6 Di VC USD",
      "TAMRON SP 24-70mm f/2.8 Di VC USD",
      "TAMRON 28-300mm f/3.5-6.3 Di VC PZD",
      "TAMRON 70-180mm f/2.8 Di III VXD",
      "TAMRON 50-300mm f/4.5-6.3 Di III VC VXD",
      "TAMRON 18-400mm f/3.5-6.3 Di II VC HLD",
    ]);
  });

  it("keeps the nine August 17 production display names", () => {
    expect([a001.name, a03.name, a061.name, a08.name, b011.name, c001.name, a009.name, a011.name, a09.name]).toEqual([
      "TAMRON SP AF 70-200mm f/2.8 Di LD [IF] MACRO",
      "TAMRON AF 28-200mm SUPER XR f/3.8-5.6 Aspherical [IF] MACRO",
      "TAMRON AF 28-300mm f/3.5-6.3 XR Di LD Aspherical [IF] MACRO",
      "TAMRON SP AF 200-500mm f/5-6.3 Di LD [IF]",
      "TAMRON 18-200mm f/3.5-6.3 Di III VC (B011)",
      "TAMRON 14-150mm f/3.5-5.8 Di III (C001)",
      "TAMRON SP 70-200mm f/2.8 Di VC USD",
      "TAMRON SP 150-600mm f/5-6.3 Di VC USD (A011)",
      "TAMRON SP AF 28-75mm f/2.8 XR Di LD Aspherical [IF] MACRO",
    ]);
  });

  it("uses source element numbering when a physical element has multiple modeled media", () => {
    expect(displayedElementLabels(a005)).toEqual([
      "101",
      "102",
      "103",
      "104",
      "105",
      "106",
      "107",
      "109",
      "110",
      "111",
      "112",
      "113",
      "114",
      "115",
      "116",
      "117",
      "118",
    ]);
    expect(displayedElementLabels(a007)).toEqual([
      "1",
      "2",
      "3",
      "4r",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
    ]);
    expect(displayedElementLabels(a010).slice(-3)).toEqual(["18r", "18", "19"]);
    expect(displayedElementLabels(a056).slice(7)).toEqual([
      "8a",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17a",
      "17",
      "18",
      "19",
    ]);
    expect(displayedElementLabels(b028).slice(3)).toEqual([
      "4a",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
    ]);
    expect(displayedElementLabels(a03).slice(3)).toEqual([
      "4r",
      "4",
      "5",
      "6",
      "7",
      "8r",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "13r",
      "14",
      "15",
    ]);
    expect(displayedElementLabels(a061).slice(3)).toEqual([
      "4r",
      "4",
      "5",
      "6",
      "7",
      "8r",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14r",
      "14",
      "15",
    ]);
    expect(displayedElementLabels(b011).slice(3)).toEqual([
      "4r",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
    ]);
    expect(displayedElementLabels(c001).slice(3)).toEqual([
      "4r",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
    ]);
    expect(displayedElementLabels(a09).slice(3)).toEqual([
      "4r",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10r",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "15r",
      "16",
      "16r",
    ]);
  });

  it("uses the patent's concise group and subgroup tags", () => {
    expect(a005.groups.map(({ text }) => text)).toEqual(["I", "II", "III", "IV", "141", "142", "143"]);
    expect(a007.groups.map(({ text }) => text)).toEqual(["LG1", "LG2", "LG3", "LG4"]);
    expect(a010.groups.map(({ text }) => text)).toEqual(["G1", "G2", "G3", "G4", "G5"]);
    expect(a056.groups.map(({ text }) => text)).toEqual(["G1", "G2", "G3", "G4", "Gf", "G6", "G7"]);
    expect(a069.groups.map(({ text }) => text)).toEqual(["G1", "G2", "G3", "G4", "G5"]);
    expect(a069.doublets.map(({ text }) => text)).toEqual(["D1", "G2V", "3A", "3B"]);
    expect(b028.groups.map(({ text }) => text)).toEqual(["G1", "G2", "G3", "G4", "G5"]);
  });

  it("keeps the August 17 group tags concise and separates A001's focus subgroup", () => {
    expect(a001.groups.map(({ text }) => text)).toEqual(["G1F", "G1R", "G2", "G3", "G4"]);
    expect(a001.groups.slice(0, 2)).toMatchObject([
      { fromSurface: "1", toSurface: "3" },
      { fromSurface: "4", toSurface: "8" },
    ]);
    expect(a03.groups.map(({ text }) => text)).toEqual(["G1", "G2", "G3", "G4"]);
    expect(a061.groups.map(({ text }) => text)).toEqual(["G1", "G2", "G3", "G4"]);
    expect(a08.groups.map(({ text }) => text)).toEqual(["L1", "L2", "L3", "L4", "L6"]);
    expect(c001.groups.map(({ text }) => text)).toEqual(["G1", "G2", "G3", "G4", "G5", "G6"]);
    expect(a009.groups.map(({ text }) => text)).toEqual(["LG1", "LG2", "LG3", "LG4", "LG5"]);
    expect(a011.groups.map(({ text }) => text)).toEqual(["G1", "G2", "G3", "G4", "G5"]);
    expect(a09.groups.map(({ text }) => text)).toEqual(["G1", "G2", "G3", "G4"]);
  });

  it("records only the production-correlated low-dispersion positions as inferred APD", () => {
    expect(inferredApdNames(a001)).toEqual(["L5", "L12", "L14"]);
    expect(inferredApdNames(a061)).toEqual(["L2", "L9"]);
    expect(inferredApdNames(a08)).toEqual(["E3", "E8"]);
    expect(inferredApdNames(a009)).toEqual(["L2", "L3", "L4", "L15", "L17"]);
    expect(inferredApdNames(a011)).toEqual(["L2", "L3", "L9"]);
    expect(inferredApdNames(a03)).toEqual([]);
    expect(inferredApdNames(c001)).toEqual([]);
    expect(inferredApdNames(a09)).toEqual([]);
  });

  it("uses the new Sumita equivalent for B011 without asserting its production supplier", () => {
    expect(b011.elements.find(({ name }) => name === "L2")).toMatchObject({
      glass: "K-CaFK95 (Sumita catalog equivalent; production supplier unspecified)",
      apd: "inferred",
    });
    expect(a001.specs).toContain("18 ELEMENTS / 13 GROUPS");
  });
});
