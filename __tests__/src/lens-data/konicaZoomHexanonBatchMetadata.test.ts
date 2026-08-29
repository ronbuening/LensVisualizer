import { describe, expect, it } from "vitest";
import zoom3570 from "../../../src/lens-data/konica/KonicaZoomHexanonAR3570mmf35.data.js";
import zoom65135 from "../../../src/lens-data/konica/KonicaZoomHexanonAR65135mmf4.data.js";
import zoom70150 from "../../../src/lens-data/konica/KonicaZoomHexanonAR70150mmf4.data.js";
import { resolveCompatibleGlass } from "../../../src/optics/glassCatalog.js";

const lenses = [zoom3570, zoom65135, zoom70150];

describe("Konica Zoom-Hexanon AR patent-lens batch metadata", () => {
  it("keeps the reviewed manufacturer display names", () => {
    expect(lenses.map(({ name }) => name)).toEqual([
      "KONICA ZOOM-HEXANON AR 35–70mm f/3.5",
      "KONICA ZOOM-HEXANON AR 65–135mm f/4",
      "KONICA ZOOM-HEXANON AR 70–150mm f/4",
    ]);
  });

  it("maps every physical glass to a coordinate-compatible catalog curve", () => {
    for (const lens of lenses) {
      for (const element of lens.elements) {
        expect(
          resolveCompatibleGlass(element.glass, element.nd, element.vd),
          `${lens.name}: ${element.name}`,
        ).not.toBeNull();
      }
    }
    expect(resolveCompatibleGlass(zoom65135.elements[11].glass, 1.55671, 58.7)?.name).toBe("BAL15Y");
  });

  it("pins the reviewed figure-relative rim changes", () => {
    expect(
      zoom3570.surfaces
        .filter(({ label }) => ["7", "8", "9", "10", "11", "12", "15", "16"].includes(label))
        .map(({ sd }) => sd),
    ).toEqual([14.5, 14, 12.5, 12.5, 11.5, 11.5, 12.5, 12]);
    expect(zoom70150.surfaces.filter(({ label }) => ["4", "5"].includes(label)).map(({ sd }) => sd)).toEqual([
      14.5, 14,
    ]);
  });
});
