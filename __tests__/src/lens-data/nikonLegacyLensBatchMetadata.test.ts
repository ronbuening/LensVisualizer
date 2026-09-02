import { describe, expect, it } from "vitest";
import zoom50300 from "../../../src/lens-data/nikon/NikonAiZoomNikkorED50300mmf45.data.js";
import pc35 from "../../../src/lens-data/nikon/NikonPCNikkor35mmf28.data.js";
import seriesE3672 from "../../../src/lens-data/nikon/NikonSeriesEZoom3672mmf35.data.js";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { resolveCompatibleGlass } from "../../../src/optics/glassCatalog.js";
import { computeGroupMovementProfile, getGroupMovementAvailability } from "../../../src/optics/groupMovement.js";
import type { LensData, LensDataInput } from "../../../src/types/optics.js";

const lenses = [zoom50300, pc35, seriesE3672];

function runtimeLens(lens: LensDataInput) {
  return buildLens({ ...LENS_DEFAULTS, ...lens } as LensData);
}

describe("2026-09-02 Nikon legacy-lens batch metadata", () => {
  it("keeps the Nikon display names and source-oriented element labels", () => {
    expect(lenses.map(({ name }) => name)).toEqual([
      "NIKON AI ZOOM-NIKKOR ED 50-300mm f/4.5",
      "NIKON PC-NIKKOR 35mm f/2.8",
      "NIKON SERIES E ZOOM 36-72mm f/3.5",
    ]);

    expect(zoom50300.elements.map(({ diagramLabel }) => diagramLabel)).toEqual([
      "L1",
      "L2 / ED",
      ...Array.from({ length: 13 }, (_, index) => `L${index + 3}`),
    ]);
    for (const lens of [pc35, seriesE3672]) {
      expect(lens.elements.map(({ diagramLabel }) => diagramLabel)).toEqual(
        Array.from({ length: 8 }, (_, index) => `L${index + 1}`),
      );
    }
    expect(
      zoom50300.elements
        .filter((element) => "apd" in element && element.apd)
        .map((element) => ({ name: element.name, apd: "apd" in element ? element.apd : undefined })),
    ).toEqual([{ name: "L2", apd: "inferred" }]);
    expect([...pc35.elements, ...seriesE3672.elements].every((element) => !("apd" in element) || !element.apd)).toBe(
      true,
    );
  });

  it("maps every physical element to a coordinate-compatible catalog curve", () => {
    for (const lens of lenses) {
      for (const element of lens.elements) {
        expect(
          resolveCompatibleGlass(element.glass, element.nd, element.vd),
          `${lens.name}: ${element.name}`,
        ).not.toBeNull();
      }
    }

    expect(
      zoom50300.elements.map((element) => resolveCompatibleGlass(element.glass, element.nd, element.vd)?.name),
    ).toEqual([
      "H-LaF4",
      "J-FKH1",
      "J-PKH1",
      "LAC8",
      "S-BAH32",
      "N-SK11",
      "J-SF6",
      "J-PKH1",
      "J-PKH1",
      "J-PKH1",
      "J-SF6",
      "LAC8",
      "S-TIL26",
      "J-LASFH2",
      "S-NSL3",
    ]);
    expect(pc35.elements.map((element) => resolveCompatibleGlass(element.glass, element.nd, element.vd)?.name)).toEqual(
      ["N-LAK7", "SSK2", "SF5", "LAC10", "K10", "SF10", "LAC8", "N-LAK7"],
    );
    expect(
      seriesE3672.elements.map((element) => resolveCompatibleGlass(element.glass, element.nd, element.vd)?.name),
    ).toEqual(["NBFD3", "H-LaF3B", "J-LAFH3", "J-SK16", "J-SK16", "J-LAFH3", "NBFD2", "NBFD2"]);
  });

  it("pins the reviewed patent-figure rim decisions", () => {
    expect(
      zoom50300.surfaces
        .filter(({ label }) => ["1", "2", "3", "4", "5", "21", "22", "23", "24", "25", "26"].includes(label))
        .map(({ sd }) => sd),
    ).toEqual([35, 35, 34, 34, 33, 14, 14, 15.5, 15.5, 15.5, 15.5]);
    expect(
      pc35.surfaces.filter(({ label }) => ["1", "3", "5", "7", "10", "12", "14"].includes(label)).map(({ sd }) => sd),
    ).toEqual([17, 14.5, 13.5, 12.8, 9, 9.3, 9.8]);
    expect(
      seriesE3672.surfaces
        .filter(({ label }) => ["1", "3", "5", "7", "9", "11", "13", "15"].includes(label))
        .map(({ sd }) => sd),
    ).toEqual([24, 18.6, 19.8, 13.2, 12, 9.6, 10, 9]);
  });

  it("keeps focus and wide-to-tele zoom travel ordered in fixed-image-plane coordinates", () => {
    const runtime50300 = runtimeLens(zoom50300);
    expect(getGroupMovementAvailability(runtime50300)).toEqual({ focus: true, zoom: true, combined: true });
    expect(zoom50300.groups.map(({ text }) => text)).toEqual([
      "G1 (+) / FOCUS → OBJ",
      "G2 (−) / ZOOM → IMG",
      "G3 (+) / ZOOM → OBJ",
      "G4 (−) / FIXED",
      "G5 (+) / FIXED",
    ]);
    const zoom50300Profile = computeGroupMovementProfile(runtime50300, "zoom", { focusT: 0, zoomT: 0 });
    expect(zoom50300Profile.series.map(({ samples }) => samples.at(-1)?.shiftMm)).toEqual([
      expect.closeTo(0.002, 3),
      expect.closeTo(64.822, 3),
      expect.closeTo(-36.862, 3),
      expect.closeTo(0, 8),
      expect.closeTo(0, 8),
    ]);
    const focus50300Profile = computeGroupMovementProfile(runtime50300, "focus", { focusT: 0, zoomT: 0 });
    expect(focus50300Profile.series.map(({ samples }) => samples.at(-1)?.shiftMm)).toEqual([
      expect.closeTo(-13.184948, 6),
      expect.closeTo(0, 8),
      expect.closeTo(0, 8),
      expect.closeTo(0, 8),
      expect.closeTo(0, 8),
    ]);

    expect(getGroupMovementAvailability(runtimeLens(pc35))).toEqual({ focus: false, zoom: false, combined: false });

    const runtime3672 = runtimeLens(seriesE3672);
    expect(getGroupMovementAvailability(runtime3672)).toEqual({ focus: false, zoom: true, combined: false });
    expect(seriesE3672.groups.map(({ text }) => text)).toEqual(["G1 (−) / ZOOM → IMG", "G2 (+) / ZOOM → OBJ"]);
    const zoom3672Profile = computeGroupMovementProfile(runtime3672, "zoom", { focusT: 0, zoomT: 0 });
    expect(zoom3672Profile.series.map(({ samples }) => samples.at(-1)?.shiftMm)).toEqual([
      expect.closeTo(24.990261, 6),
      expect.closeTo(-16.309739, 6),
    ]);
  });
});
