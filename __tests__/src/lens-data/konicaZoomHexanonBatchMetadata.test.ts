import { describe, expect, it } from "vitest";
import zoom3570 from "../../../src/lens-data/konica/KonicaZoomHexanonAR3570mmf35.data.js";
import zoom65135 from "../../../src/lens-data/konica/KonicaZoomHexanonAR65135mmf4.data.js";
import zoom70150 from "../../../src/lens-data/konica/KonicaZoomHexanonAR70150mmf4.data.js";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { resolveCompatibleGlass } from "../../../src/optics/glassCatalog.js";
import { computeGroupMovementProfile, getGroupMovementAvailability } from "../../../src/optics/groupMovement.js";
import type { LensData, LensDataInput } from "../../../src/types/optics.js";

const lenses = [zoom3570, zoom65135, zoom70150];

function runtimeLens(lens: LensDataInput) {
  return buildLens({ ...LENS_DEFAULTS, ...lens } as LensData);
}

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

  it("keeps the reviewed element, group, doublet, and dispersion tags concise", () => {
    for (const lens of lenses) {
      expect(lens.elements.map(({ diagramLabel }) => diagramLabel)).toEqual(
        Array.from({ length: lens.elements.length }, (_, index) => `L${index + 1}`),
      );
      expect(lens.elements.every((element) => !("apd" in element) || element.apd === false)).toBe(true);
    }
    expect(zoom3570.groups.map(({ text }) => text)).toEqual(["C1 − ZOOM / REVERSES", "C2 + ZOOM / OBJECTWARD"]);
    expect(zoom65135.groups.map(({ text }) => text)).toEqual(["G1 +", "G2 −", "G3 +", "G4 +"]);
    expect(zoom70150.groups.map(({ text }) => text)).toEqual([
      "G1 + FIXED",
      "G2 − VARIATOR",
      "G3 + COMP.",
      "G4 FRONT",
      "L12 − FOCUS",
      "G4 REAR",
    ]);
    expect(zoom3570.doublets).toEqual([]);
    expect(zoom65135.doublets.map(({ text }) => text)).toEqual(["D1", "D2", "D3", "D4"]);
    expect(zoom70150.doublets.map(({ text }) => text)).toEqual(["D1", "D2", "D3"]);
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

  it("keeps the published zoom and focus travel ordered in fixed-image-plane coordinates", () => {
    const runtime3570 = runtimeLens(zoom3570);
    const zoom3570Profile = computeGroupMovementProfile(runtime3570, "zoom", { focusT: 0, zoomT: 0 });
    const [front3570, rear3570] = zoom3570Profile.series;
    const front3570Mid = front3570.samples.find(({ focalLengthMm }) => focalLengthMm === 50.16);
    const rear3570Mid = rear3570.samples.find(({ focalLengthMm }) => focalLengthMm === 50.16);
    expect(getGroupMovementAvailability(runtime3570).focus).toBe(false);
    expect(front3570Mid?.shiftMm).toBeCloseTo(8.578, 3);
    expect(front3570.samples.at(-1)?.shiftMm).toBeCloseTo(6.798, 3);
    expect(rear3570Mid?.shiftMm).toBeCloseTo(-11.734, 3);
    expect(rear3570.samples.at(-1)?.shiftMm).toBeCloseTo(-26.564, 3);

    const runtime65135 = runtimeLens(zoom65135);
    const zoom65135Profile = computeGroupMovementProfile(runtime65135, "zoom", { focusT: 0, zoomT: 0 });
    expect(zoom65135Profile.series.map(({ samples }) => samples.at(-1)?.shiftMm)).toEqual([
      expect.closeTo(-22.221, 3),
      expect.closeTo(0.251, 3),
      expect.closeTo(-22.221, 3),
      expect.closeTo(0.251, 3),
    ]);
    const focus65135Travel = [0, 0.5, 1].map((zoomT) => {
      const profile = computeGroupMovementProfile(runtime65135, "focus", { focusT: 0, zoomT });
      return profile.series.map(({ samples }) => samples.at(-1)?.shiftMm ?? Number.NaN);
    });
    expect(focus65135Travel.map(([g1]) => g1)).toEqual([
      expect.closeTo(-4.694, 3),
      expect.closeTo(-9.45872, 3),
      expect.closeTo(-22.04, 3),
    ]);
    for (const [g1, g2, g3, g4] of focus65135Travel) {
      expect(g2).toBeCloseTo(g1, 8);
      expect(g3).toBeCloseTo(g1, 8);
      expect(g4).toBeCloseTo(0, 8);
    }

    const runtime70150 = runtimeLens(zoom70150);
    const zoom70150Profile = computeGroupMovementProfile(runtime70150, "zoom", { focusT: 0, zoomT: 0 });
    const [g1, variator, compensator, g4Front, focusElement, g4Rear] = zoom70150Profile.series;
    expect(g1.samples.at(-1)?.shiftMm).toBeCloseTo(0.008, 3);
    expect(variator.samples.at(-1)?.shiftMm).toBeCloseTo(21.668, 3);
    expect(compensator.samples.find(({ focalLengthMm }) => focalLengthMm === 97.746)?.shiftMm).toBeCloseTo(3.718, 3);
    expect(compensator.samples.at(-1)?.shiftMm).toBeCloseTo(0, 8);
    for (const fixedGroup of [g4Front, focusElement, g4Rear]) {
      expect(fixedGroup.samples.at(-1)?.shiftMm).toBeCloseTo(0, 8);
    }
    const focus70150Travel = [0, 0.5, 1].map((zoomT) => {
      const profile = computeGroupMovementProfile(runtime70150, "focus", { focusT: 0, zoomT });
      return profile.series.map(({ samples }) => samples.at(-1)?.shiftMm ?? Number.NaN);
    });
    expect(focus70150Travel.map((shifts) => shifts[4])).toEqual([
      expect.closeTo(1.223080314, 6),
      expect.closeTo(2.244087999, 6),
      expect.closeTo(5.264790649, 6),
    ]);
    for (const shifts of focus70150Travel) {
      expect(shifts.filter((_, index) => index !== 4)).toEqual(Array(5).fill(expect.closeTo(0, 8)));
    }
  });
});
