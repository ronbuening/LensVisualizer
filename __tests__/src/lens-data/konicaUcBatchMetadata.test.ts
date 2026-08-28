import { describe, expect, it } from "vitest";
import prime28 from "../../../src/lens-data/konica/KonicaUCHexanonAR28mmf18.data.js";
import zoom45100 from "../../../src/lens-data/konica/KonicaUCZoomHexanonAR45100mmf35.data.js";
import zoom80200 from "../../../src/lens-data/konica/KonicaUCZoomHexanonAR80200mmf4.data.js";
import { resolveCompatibleGlass } from "../../../src/optics/glassCatalog.js";

const lenses = [prime28, zoom45100, zoom80200];

function resolvedGlassNames(lens: (typeof lenses)[number]): string[] {
  return lens.elements.map((element) => {
    const match = resolveCompatibleGlass(element.glass, element.nd, element.vd);
    expect(match, `${lens.name}: ${element.name}`).not.toBeNull();
    return match!.name;
  });
}

describe("Konica UC patent-lens batch metadata", () => {
  it("keeps the reviewed manufacturer display names", () => {
    expect(lenses.map(({ name }) => name)).toEqual([
      "KONICA UC HEXANON AR 28mm f/1.8",
      "KONICA UC ZOOM HEXANON AR 45–100mm f/3.5",
      "KONICA UC ZOOM HEXANON AR 80–200mm f/4",
    ]);
  });

  it("maps every physical glass to its reviewed compatible coefficient proxy", () => {
    expect(resolvedGlassNames(prime28)).toEqual([
      "S-BAL35",
      "E-FD2",
      "S-BAL35",
      "LAC10",
      "LAC8",
      "S-TIH6",
      "K-LaK14",
      "S-LAH51",
    ]);
    expect(resolvedGlassNames(zoom45100)).toEqual([
      "S-TIH6",
      "S-BSM15",
      "S-BSM15",
      "S-BSM15",
      "S-BSM15",
      "S-TIH6",
      "S-BSM15",
      "E-C3",
      "E-FD15",
      "K-BK7",
      "S-TIL26",
    ]);
    expect(resolvedGlassNames(zoom80200)).toEqual([
      "S-TIH6",
      "S-BSM15",
      "S-BSM15",
      "S-BSM15",
      "S-BSM15",
      "S-TIH6",
      "S-BSM15",
      "S-TIH6",
      "S-TIL2",
      "S-TIL6",
      "E-FD4",
      "S-TIL6",
      "S-LAM60",
      "S-TIL26",
    ]);
  });

  it("preserves the patent-figure semi-diameter refinements", () => {
    const sd28 = Object.fromEntries(prime28.surfaces.map(({ label, sd }) => [label, sd]));
    expect(sd28).toMatchObject({ "7": 10.6, "8": 10.6, "13": 11.2, "14": 11.2, "15": 13.8, "16": 13.8 });

    const sd45100 = Object.fromEntries(zoom45100.surfaces.map(({ label, sd }) => [label, sd]));
    expect(sd45100).toMatchObject({ "1": 19.5, "2": 19.5, "3": 19.5, "14": 13, "15": 13, "16": 13, "17": 13 });

    const sd80200 = Object.fromEntries(zoom80200.surfaces.map(({ label, sd }) => [label, sd]));
    expect(sd80200).toMatchObject({ "19": 11.5, "20": 11.5 });
  });
});
