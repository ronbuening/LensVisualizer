import { describe, expect, it } from "vitest";
import zoom80200 from "../../../src/lens-data/nikon/NikonAISZoomNikkor80200mmf28ED.data.js";
import nikkor200 from "../../../src/lens-data/nikon/NikonAiNikkor200mmf2IFED.data.js";
import nikkor300 from "../../../src/lens-data/nikon/NikonAiSNikkor300mmf2IFED.data.js";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { resolveCompatibleGlass } from "../../../src/optics/glassCatalog.js";
import { computeGroupMovementProfile, getGroupMovementAvailability } from "../../../src/optics/groupMovement.js";
import type { LensData, LensDataInput } from "../../../src/types/optics.js";

const lenses = [nikkor200, zoom80200, nikkor300];

function runtimeLens(lens: LensDataInput) {
  return buildLens({ ...LENS_DEFAULTS, ...lens } as LensData);
}

function selectedSds(lens: LensDataInput, labels: string[]) {
  return lens.surfaces.filter(({ label }) => labels.includes(label)).map(({ sd }) => sd);
}

describe("2026-09-03 Nikon legacy-lens batch metadata", () => {
  it("keeps the Nikon display names and source-oriented element labels", () => {
    expect(lenses.map(({ name }) => name)).toEqual([
      "NIKON AI NIKKOR ED 200mm f/2S IF",
      "NIKON AI-S ZOOM-NIKKOR 80-200mm f/2.8 ED",
      "NIKON NIKKOR 300mm f/2S IF-ED",
    ]);

    expect(nikkor200.elements.map(({ diagramLabel }) => diagramLabel)).toEqual([
      "L11 / ED",
      "L12 / ED",
      "L13",
      "L21a",
      "L21b",
      "L22",
      "L31",
      "L32a",
      "L32b",
      "L33",
    ]);
    expect(zoom80200.elements.map(({ diagramLabel }) => diagramLabel)).toEqual([
      "L1a",
      "L1b / ED",
      "L2 / ED",
      "L3a",
      "L3b",
      "L3c",
      "L4",
      "L5a",
      "L5b",
      "L6",
      "L7",
      "L8",
      "L9",
      "L10",
      "L11",
    ]);
    expect(nikkor300.elements.map(({ diagramLabel }) => diagramLabel)).toEqual([
      "L1 / ED",
      "L2 / ED",
      "L3",
      "L4 / ED",
      "L5",
      "L6",
      "L7",
      "L8",
      "L9",
      "L10",
      "L11",
    ]);

    expect(nikkor200.elements.filter((element) => element.apd).map(({ name, apd }) => ({ name, apd }))).toEqual([
      { name: "L11", apd: "inferred" },
      { name: "L12", apd: "inferred" },
    ]);
    expect(zoom80200.elements.filter((element) => element.apd).map(({ name, apd }) => ({ name, apd }))).toEqual([
      { name: "L1b", apd: "inferred" },
      { name: "L2", apd: "inferred" },
    ]);
    expect(nikkor300.elements.filter((element) => element.apd).map(({ name, apd }) => ({ name, apd }))).toEqual([
      { name: "L1", apd: "inferred" },
      { name: "L2", apd: "inferred" },
      { name: "L4", apd: "inferred" },
    ]);
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
      nikkor200.elements.map((element) => resolveCompatibleGlass(element.glass, element.nd, element.vd)?.name),
    ).toEqual(["J-FKH1", "J-FKH1", "E-FD4", "J-LAFH3", "FK3", "FK3", "H-LaK6A", "FF5", "K-LaK14", "FK3"]);
    expect(
      zoom80200.elements.map((element) => resolveCompatibleGlass(element.glass, element.nd, element.vd)?.name),
    ).toEqual([
      "SF4",
      "J-FKH1",
      "J-FKH1",
      "TAF4",
      "SF4",
      "PBL25",
      "S-BAL35",
      "J-LAK02",
      "S-TIH6",
      "TAF4",
      "TAF4",
      "SF4",
      "K-SK18",
      "J-LAK8",
      "E-F3",
    ]);
    expect(
      nikkor300.elements.map((element) => resolveCompatibleGlass(element.glass, element.nd, element.vd)?.name),
    ).toEqual([
      "J-FKH1",
      "J-FKH1",
      "J-LAF7",
      "J-FKH1",
      "J-LAFH3",
      "KF3",
      "FK3",
      "S-TIM28",
      "H-LaK6A",
      "S-TIM35",
      "K-LaK14",
    ]);
  });

  it("pins the reviewed patent-figure rim decisions", () => {
    expect(selectedSds(nikkor200, ["1", "3", "5", "7", "10", "12", "14", "17"])).toEqual([
      55, 53, 49, 44, 38, 30.5, 30, 19,
    ]);
    expect(selectedSds(zoom80200, ["1", "4", "6", "10", "12", "15", "17", "19", "21", "23", "25"])).toEqual([
      40.5, 37, 24.8, 21.8, 24.5, 23.5, 21.5, 20.5, 15.5, 20, 21,
    ]);
    expect(selectedSds(nikkor300, ["1", "3", "5", "7", "9", "12", "14", "17"])).toEqual([
      82, 81.5, 80, 78.5, 46, 37.5, 31.5, 33,
    ]);
  });

  it("keeps focus and wide-to-tele zoom travel ordered in fixed-image-plane coordinates", () => {
    const runtime200 = runtimeLens(nikkor200);
    expect(getGroupMovementAvailability(runtime200)).toEqual({ focus: true, zoom: false, combined: false });
    expect(nikkor200.groups.map(({ text }) => text)).toEqual([
      "G1 (+) / FIXED",
      "G2 (−) / FOCUS → IMG",
      "G3 (+) / FIXED",
    ]);
    expect(
      computeGroupMovementProfile(runtime200, "focus", { focusT: 0, zoomT: 0 }).series.map(
        ({ samples }) => samples.at(-1)?.shiftMm,
      ),
    ).toEqual([expect.closeTo(0, 8), expect.closeTo(17, 8), expect.closeTo(0, 8)]);
    expect(nikkor200.closeFocusM).toBeCloseTo(2.331245683, 9);

    const runtimeZoom = runtimeLens(zoom80200);
    expect(getGroupMovementAvailability(runtimeZoom)).toEqual({ focus: true, zoom: true, combined: true });
    expect(zoom80200.groups.map(({ text }) => text)).toEqual([
      "G1 (+) / FOCUS → OBJ",
      "G2 (−) / ZOOM → IMG",
      "G3 (+) / ZOOM / REVERSES",
      "G4 (+) / FIXED",
    ]);
    expect(
      computeGroupMovementProfile(runtimeZoom, "focus", { focusT: 0, zoomT: 0 }).series.map(
        ({ samples }) => samples.at(-1)?.shiftMm,
      ),
    ).toEqual([expect.closeTo(-17.844342033, 9), expect.closeTo(0, 8), expect.closeTo(0, 8), expect.closeTo(0, 8)]);
    const zoomProfile = computeGroupMovementProfile(runtimeZoom, "zoom", { focusT: 0, zoomT: 0 });
    expect(zoomProfile.series.map(({ samples }) => samples.at(-1)?.shiftMm)).toEqual([
      expect.closeTo(-0.0003, 7),
      expect.closeTo(65.5472, 7),
      expect.closeTo(15.984, 7),
      expect.closeTo(0, 8),
    ]);
    // The patent fixes the sampled middle position, not the precise extremum
    // of the inferred cam curve between the published zoom states.
    const middle = zoomProfile.series[2].samples.find(({ zoomT }) => zoomT === 0.5)!;
    expect(middle.shiftMm).toBeCloseTo(22.038, 7);
    expect(middle.shiftMm).toBeGreaterThan(zoomProfile.series[2].samples.at(-1)!.shiftMm);

    const runtime300 = runtimeLens(nikkor300);
    expect(getGroupMovementAvailability(runtime300)).toEqual({ focus: true, zoom: false, combined: false });
    expect(nikkor300.groups.map(({ text }) => text)).toEqual([
      "G1 (+) / FIXED",
      "G2 (−) / FOCUS → IMG",
      "G3 (+) / FIXED",
    ]);
    expect(
      computeGroupMovementProfile(runtime300, "focus", { focusT: 0, zoomT: 0 }).series.map(
        ({ samples }) => samples.at(-1)?.shiftMm,
      ),
    ).toEqual([expect.closeTo(0, 8), expect.closeTo(21, 8), expect.closeTo(0, 8)]);
  });
});
