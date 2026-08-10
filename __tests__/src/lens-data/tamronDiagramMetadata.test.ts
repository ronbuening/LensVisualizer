import { describe, expect, it } from "vitest";
import a005 from "../../../src/lens-data/tamron/TamronA00570300mmf456VC.data.js";
import a007 from "../../../src/lens-data/tamron/TamronSPA0072470mmf28VC.data.js";
import a010 from "../../../src/lens-data/tamron/TamronA01028300mmf3563.data.js";
import a056 from "../../../src/lens-data/tamron/TamronA05670180mmf28.data.js";
import a069 from "../../../src/lens-data/tamron/TamronA06950300mmf4563.data.js";
import b028 from "../../../src/lens-data/tamron/TamronB02818400mmf3563.data.js";

function displayedElementLabels(lens: { elements: readonly { id: number; diagramLabel?: string }[] }): string[] {
  return lens.elements.map((element) => element.diagramLabel ?? String(element.id));
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
});
