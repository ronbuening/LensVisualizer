import { describe, expect, it } from "vitest";
import zoom100300 from "../../../src/lens-data/nikon/NikonAISZoomNikkor100300mmf56.data.js";
import zoom200400 from "../../../src/lens-data/nikon/NikonAISZoomNikkorED200400mmf4.data.js";
import medical120 from "../../../src/lens-data/nikon/NikonMedicalNikkor120mmf4IF.data.js";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { resolveCompatibleGlass } from "../../../src/optics/glassCatalog.js";
import { computeGroupMovementProfile, getGroupMovementAvailability } from "../../../src/optics/groupMovement.js";
import type { LensData, LensDataInput } from "../../../src/types/optics.js";

const lenses = [medical120, zoom100300, zoom200400];

function runtimeLens(lens: LensDataInput) {
  return buildLens({ ...LENS_DEFAULTS, ...lens } as LensData);
}

describe("2026-09-02 Nikon patent-lens batch metadata", () => {
  it("keeps the reviewed display names and source-oriented diagram labels", () => {
    expect(lenses.map(({ name }) => name)).toEqual([
      "NIKON MEDICAL-NIKKOR 120mm f/4 IF",
      "NIKON ZOOM-NIKKOR 100-300mm f/5.6",
      "NIKON ZOOM-NIKKOR ED 200-400mm f/4",
    ]);

    for (const lens of lenses) {
      expect(lens.elements.map(({ diagramLabel }) => diagramLabel)).toEqual(lens.elements.map(({ name }) => name));
      expect(lens.elements.every((element) => !("apd" in element) || element.apd === false)).toBe(true);
    }

    expect(medical120.groups.map(({ text }) => text)).toEqual(["G1 (+)", "G2 (−) / FOCUS", "G3 (+)"]);
    expect(zoom100300.groups.map(({ text }) => text)).toEqual([
      "G1 (+) / FOCUS",
      "G2 (−) / VARIATOR",
      "G3 (+) / COMPENSATOR",
      "G4 (+) / RELAY",
    ]);
    expect(zoom200400.groups.map(({ text }) => text)).toEqual([
      "G1 (+) / OBJECTWARD FOCUS",
      "G2 (−) / VARIATOR",
      "G3 (+) / COMPENSATOR",
      "G4 (+) / RELAY",
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

    expect(resolveCompatibleGlass(zoom100300.elements[1].glass, 1.48749, 70.24)?.name).toBe("S-FSL5");
    expect(resolveCompatibleGlass(zoom100300.elements[5].glass, 1.713, 53.97)?.name).toBe("J-LAK8");
    expect(resolveCompatibleGlass(zoom200400.elements[4].glass, 1.7552, 27.6)?.name).toBe("SF4");
    expect(resolveCompatibleGlass(zoom200400.elements[13].glass, 1.7335, 51.1)?.name).toBe("TAC4");
    expect(resolveCompatibleGlass(zoom200400.elements[14].glass, 1.58144, 40.8)?.name).toBe("PBL25");
    expect(resolveCompatibleGlass(medical120.elements[3].glass, 1.7847, 26.1)?.name).toBe("SF56A");
    expect(resolveCompatibleGlass(medical120.elements[4].glass, 1.6968, 55.6)?.name).toBe("K-LaK14");
    expect(resolveCompatibleGlass(medical120.elements[6].glass, 1.72342, 38)?.name).toBe("S-BAH28");
  });

  it("pins the figure-reviewed clear-aperture changes", () => {
    expect(
      zoom100300.surfaces.filter(({ label }) => ["4", "5", "12", "13", "14"].includes(label)).map(({ sd }) => sd),
    ).toEqual([30, 30, 13.5, 13.5, 13.5]);
    expect(
      medical120.surfaces
        .filter(({ label }) => ["6", "7", "8", "9", "10", "11", "12", "13"].includes(label))
        .map(({ sd }) => sd),
    ).toEqual([13.82, 13.8, 13.7, 18, 18, 18, 14.2, 14.2]);
    expect(
      zoom200400.surfaces
        .filter(({ label }) => ["6", "9", "10", "12", "15", "18", "20", "21", "23"].includes(label))
        .map(({ sd }) => sd),
    ).toEqual([30, 30, 26.7, 30.8, 31, 32, 32, 19.5, 19.5]);
  });

  it("keeps published focus and zoom travel ordered in fixed-image-plane coordinates", () => {
    const runtimeMedical = runtimeLens(medical120);
    const medicalFocus = computeGroupMovementProfile(runtimeMedical, "focus", { focusT: 0, zoomT: 0 });
    expect(medicalFocus.series.map(({ samples }) => samples.at(-1)?.shiftMm)).toEqual([
      expect.closeTo(0, 8),
      expect.closeTo(30.242, 3),
      expect.closeTo(0, 8),
    ]);

    const runtime100300 = runtimeLens(zoom100300);
    const zoom100300Profile = computeGroupMovementProfile(runtime100300, "zoom", { focusT: 0, zoomT: 0 });
    expect(zoom100300Profile.series.map(({ samples }) => samples.at(-1)?.shiftMm)).toEqual([
      expect.closeTo(0, 8),
      expect.closeTo(52.3, 3),
      expect.closeTo(15.898, 3),
      expect.closeTo(0, 8),
    ]);
    expect(getGroupMovementAvailability(runtime100300).focus).toBe(false);

    const runtime200400 = runtimeLens(zoom200400);
    const zoom200400Profile = computeGroupMovementProfile(runtime200400, "zoom", { focusT: 0, zoomT: 0 });
    expect(zoom200400Profile.series.map(({ samples }) => samples.at(-1)?.shiftMm)).toEqual([
      expect.closeTo(-0.001, 3),
      expect.closeTo(60.631, 3),
      expect.closeTo(7.489, 3),
      expect.closeTo(0, 8),
    ]);
    const focus200400 = computeGroupMovementProfile(runtime200400, "focus", { focusT: 0, zoomT: 0 });
    expect(focus200400.series.map(({ samples }) => samples.at(-1)?.shiftMm)).toEqual([
      expect.closeTo(-22.538873, 6),
      expect.closeTo(0, 8),
      expect.closeTo(0, 8),
      expect.closeTo(0, 8),
    ]);
  });
});
