import { describe, expect, it } from "vitest";
import ef400 from "../../../src/lens-data/canon/CanonEF400mmf28LISIIIUSM.data.js";
import rf600 from "../../../src/lens-data/canon/CanonRF600mmf11ISSTM.data.js";
import rf800 from "../../../src/lens-data/canon/CanonRF800mmf11ISSTM.data.js";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { resolveCompatibleGlass } from "../../../src/optics/glassCatalog.js";
import { computeGroupMovementProfile } from "../../../src/optics/groupMovement.js";
import type { LensData } from "../../../src/types/optics.js";

const lenses = [ef400, rf600, rf800];

function runtimeLens(lens: (typeof lenses)[number]) {
  return buildLens({ ...LENS_DEFAULTS, ...lens } as LensData);
}

function focusShifts(lens: (typeof lenses)[number]): Record<string, number> {
  const profile = computeGroupMovementProfile(runtimeLens(lens), "focus", { focusT: 1, zoomT: 0 });
  return Object.fromEntries(profile.series.map(({ group, currentPoint }) => [group.label, currentPoint.shiftMm]));
}

describe("Canon 2026-08-20 telephoto batch diagram metadata", () => {
  it("uses the exact production display names", () => {
    expect(lenses.map(({ name }) => name)).toEqual([
      "CANON EF 400mm f/2.8 L IS III USM",
      "CANON RF 600mm f/11 IS STM",
      "CANON RF 800mm f/11 IS STM",
    ]);
  });

  it("maps every physical glass element to the intended compatible spectral proxy", () => {
    for (const lens of lenses) {
      for (const element of lens.elements) {
        expect(
          resolveCompatibleGlass(element.glass, element.nd, element.vd),
          `${lens.name}: ${element.name}`,
        ).not.toBeNull();
      }
    }

    expect(
      rf600.elements.map((element) => resolveCompatibleGlass(element.glass, element.nd, element.vd)?.name),
    ).toEqual(["S-FSL5", "E-F8", "S-LAH55", "S-FSL5", "TAFD37A", "N-KZFS5", "N-KZFS5", "FCD515", "TAF3D", "E-F8"]);
    expect(
      rf800.elements.map((element) => resolveCompatibleGlass(element.glass, element.nd, element.vd)?.name),
    ).toEqual([
      "S-FSL5",
      "S-FSL5",
      "J-LAF2",
      "J-LAK14",
      "S-FSL5",
      "TAFD37A",
      "N-KZFS5",
      "N-KZFS5",
      "FCD515",
      "TAF3D",
      "E-F8",
    ]);
  });

  it("uses source-faithful DOE and focus-direction labels", () => {
    expect(rf600.doublets.map(({ text }) => text)).toEqual(["DOE", "D2", "D3"]);
    expect(rf800.doublets.map(({ text }) => text)).toEqual(["DOE", "D2", "D3"]);
    expect(rf600.elements.slice(0, 2).map(({ cemented }) => cemented)).toEqual(["DOE", "DOE"]);
    expect(rf800.elements.slice(1, 3).map(({ cemented }) => cemented)).toEqual(["DOE", "DOE"]);
    expect(ef400.specs).toContain("Imageward L2 inner focus; transverse L3B image-stabilization group");
    expect(rf600.specs).toContain("OBJECTWARD SINGLE-ELEMENT INNER FOCUS");
    expect(rf800.specs).toContain("OBJECTWARD SINGLE-ELEMENT INNER FOCUS");
  });

  it("preserves the patent-figure semi-diameter corrections", () => {
    expect(rf600.surfaces.filter(({ label }) => ["4", "5"].includes(label)).map(({ sd }) => sd)).toEqual([12.2, 12.2]);
    expect(rf600.surfaces.filter(({ label }) => ["6", "7"].includes(label)).map(({ sd }) => sd)).toEqual([12.7, 12.7]);
    expect(rf800.surfaces.filter(({ label }) => ["8", "9"].includes(label)).map(({ sd }) => sd)).toEqual([16.1, 16.1]);
  });

  it("preserves focus direction and keeps all three prime lenses zoom-free", () => {
    expect(focusShifts(ef400)["L2 (FOCUS)"]).toBeCloseTo(19.078267603, 8);
    expect(focusShifts(rf600)["L2 (+) FOCUS"]).toBeCloseTo(-14.94, 8);
    expect(focusShifts(rf800)["L2 FOCUS (+)"]).toBeCloseTo(-17.17721463, 8);
    expect(lenses.map((lens) => runtimeLens(lens).isZoom)).toEqual([false, false, false]);
  });
});
