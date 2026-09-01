import { describe, expect, it } from "vitest";
import fl300 from "../../../src/lens-data/konica/KonicaFLHexanonAR300mmf63.data.js";
import hexanon135 from "../../../src/lens-data/konica/KonicaHexanon135mmf35.data.js";
import hexanon60 from "../../../src/lens-data/konica/KonicaHexanon60mmf12.data.js";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { resolveCompatibleGlass } from "../../../src/optics/glassCatalog.js";
import { computeGroupMovementProfile, getGroupMovementAvailability } from "../../../src/optics/groupMovement.js";
import type { LensData, LensDataInput } from "../../../src/types/optics.js";

const lenses = [fl300, hexanon135, hexanon60];

function runtimeLens(lens: LensDataInput) {
  return buildLens({ ...LENS_DEFAULTS, ...lens } as LensData);
}

describe("Konica 2026-08-31 prime batch diagram metadata", () => {
  it("uses the production display names", () => {
    expect(lenses.map(({ name }) => name)).toEqual([
      "KONICA FL-HEXANON AR 300mm f/6.3",
      "KONICA HEXANON 135mm f/3.5",
      "KONICA HEXANON 60mm f/1.2 L",
    ]);
  });

  it("maps every physical element to a compatible spectral curve", () => {
    for (const lens of lenses) {
      for (const element of lens.elements) {
        expect(
          resolveCompatibleGlass(element.glass, element.nd, element.vd),
          `${lens.name}: ${element.name}`,
        ).not.toBeNull();
      }
    }

    expect(
      fl300.elements.map((element) => resolveCompatibleGlass(element.glass, element.nd, element.vd)?.name),
    ).toEqual(["CaF2", "CaF2", "S-LAH63Q", "KF8", "BSL3", "YGH52", "FF5", "FF5", "TAFD10"]);
    expect(
      hexanon60.elements.map((element) => resolveCompatibleGlass(element.glass, element.nd, element.vd)?.name),
    ).toEqual(["J-LASF016", "J-LASF016", "J-LASF016", "J-SF03", "E-FD15", "S-LAH63Q", "P-LASF47"]);
  });

  it("labels the 300mm fluorite elements and group powers", () => {
    expect(fl300.elements.slice(0, 2).map(({ label, apd }) => ({ label, apd }))).toEqual([
      { label: "Element 1 — FLUORITE", apd: "inferred" },
      { label: "Element 2 — FLUORITE", apd: "inferred" },
    ]);
    expect(fl300.groups.map(({ text }) => text)).toEqual(["G1 (+)", "G2 (+)", "G3 (−)", "G4 (−)", "G5 (+)"]);
  });

  it("preserves the patent-figure semi-diameter decisions", () => {
    expect(fl300.surfaces.filter(({ label }) => ["9", "10", "11"].includes(label)).map(({ sd }) => sd)).toEqual([
      13.2, 13.2, 13.2,
    ]);
    expect(hexanon135.surfaces.filter(({ label }) => ["1", "3", "5", "7"].includes(label)).map(({ sd }) => sd)).toEqual(
      [22.5, 21.5, 16, 12.5],
    );
    expect(
      hexanon60.surfaces.filter(({ label }) => ["1", "3", "5", "7", "10", "13"].includes(label)).map(({ sd }) => sd),
    ).toEqual([27, 25, 21.65, 16.55, 14.5, 16]);
  });

  it("preserves objectward floating focus and keeps all three primes zoom-free", () => {
    const runtimes = lenses.map(runtimeLens);
    expect(runtimes.map(({ isZoom }) => isZoom)).toEqual([false, false, false]);
    expect(runtimes.map((lens) => getGroupMovementAvailability(lens))).toEqual([
      { focus: false, zoom: false, combined: false },
      { focus: false, zoom: false, combined: false },
      { focus: true, zoom: false, combined: false },
    ]);

    const focusProfile = computeGroupMovementProfile(runtimes[2], "focus", { focusT: 1, zoomT: 0 });
    expect(
      Object.fromEntries(focusProfile.series.map(({ group, currentPoint }) => [group.label, currentPoint.shiftMm])),
    ).toEqual({
      "FRONT (+ / OBJECTWARD FOCUS)": expect.closeTo(-5.86997349, 8),
      "REAR (+ / OBJECTWARD FOCUS)": expect.closeTo(-4.66997349, 8),
    });
  });
});
