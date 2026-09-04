import { describe, expect, it } from "vitest";
import zoom80200 from "../../../src/lens-data/nikon/NikonAFZoomNikkor80200mmf28ED.data.js";
import nikkor50 from "../../../src/lens-data/nikon/NikonAINikkor50mmf18S.data.js";
import dc105 from "../../../src/lens-data/nikon/NikonAiAFDCNikkor105mmf2D.data.js";
import micro105 from "../../../src/lens-data/nikon/NikonAiAFMicroNikkor105mmf28S.data.js";
import nikkor85 from "../../../src/lens-data/nikon/NikonAiAFNikkor85mmf18S.data.js";
import micro55 from "../../../src/lens-data/nikon/NikonAiMicroNikkor55mmf28.data.js";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { resolveCompatibleGlass } from "../../../src/optics/glassCatalog.js";
import { computeGroupMovementProfile, getGroupMovementAvailability } from "../../../src/optics/groupMovement.js";
import type { LensData, LensDataInput } from "../../../src/types/optics.js";

const lenses = [nikkor50, micro55, zoom80200, nikkor85, micro105, dc105];

function runtimeLens(lens: LensDataInput) {
  return buildLens({ ...LENS_DEFAULTS, ...lens } as LensData);
}

function endpointShifts(lens: LensDataInput, mode: "focus" | "zoom") {
  return computeGroupMovementProfile(runtimeLens(lens), mode, { focusT: 0, zoomT: 0 }).series.map(
    ({ samples }) => samples.at(-1)?.shiftMm,
  );
}

describe("2026-09-04 Nikon lens batch diagram metadata", () => {
  it("keeps the reviewed Nikon display names and source-oriented element labels", () => {
    expect(lenses.map(({ name }) => name)).toEqual([
      "NIKON AI NIKKOR 50mm f/1.8 S",
      "NIKON AI MICRO-NIKKOR 55mm f/2.8",
      "NIKON AI AF ZOOM-NIKKOR 80-200mm f/2.8 ED",
      "NIKON AI AF NIKKOR 85mm f/1.8 S",
      "NIKON AI AF MICRO-NIKKOR 105mm f/2.8 S",
      "NIKON AI AF DC-NIKKOR 105mm f/2 D",
    ]);

    expect(nikkor50.elements.map(({ diagramLabel }) => diagramLabel)).toEqual(["L1", "L2", "L3", "L4a", "L4b", "L5"]);
    expect(micro55.elements.map(({ diagramLabel }) => diagramLabel)).toEqual(["L1", "L2", "L3", "L4a", "L4b", "L5"]);
    expect(zoom80200.elements.map(({ diagramLabel }) => diagramLabel)).toEqual([
      "L11",
      "L12 / ED",
      "L13 / ED",
      "L21",
      "L22",
      "L23",
      "L24",
      "L25",
      "L31",
      "L32",
      "L33",
      "L41 / ED",
      "L42a",
      "L42b",
      "L43",
      "L44",
    ]);
    expect(nikkor85.elements.map(({ diagramLabel }) => diagramLabel)).toEqual(["L1", "L2", "L3", "L4", "L5", "L6"]);
    expect(micro105.elements.map(({ diagramLabel }) => diagramLabel)).toEqual([
      "L1",
      "L2",
      "L3",
      "L4",
      "L5",
      "L6",
      "L7",
      "L8",
      "L9",
    ]);
    expect(dc105.elements.map(({ diagramLabel }) => diagramLabel)).toEqual(["L1", "L2", "L3", "L4", "L5", "L6"]);
  });

  it("attributes each selected patent to its complete cover-sheet inventor list", () => {
    expect(lenses.map(({ patentAuthors }) => patentAuthors)).toEqual([
      ["Soichi Nakamura"],
      ["Yoshinari Hamanishi"],
      ["Yoshinori Hamanishi"],
      ["Masaaki Yanagisawa"],
      ["Keiji Moriyama"],
      ["Masaaki Yanagisawa"],
    ]);
  });

  it("marks the production-correlated three-ED placement without asserting a supplier identity", () => {
    expect(zoom80200.elements.filter((element) => element.apd).map(({ name, apd }) => ({ name, apd }))).toEqual([
      { name: "L12", apd: "inferred" },
      { name: "L13", apd: "inferred" },
      { name: "L41", apd: "inferred" },
    ]);
    expect(zoom80200.elements.filter((element) => element.apd).every(({ apdNote }) => apdNote?.includes("proxy"))).toBe(
      true,
    );
  });

  it("maps every physical element to the intended coordinate-compatible catalog curve", () => {
    for (const lens of lenses) {
      for (const element of lens.elements) {
        expect(
          resolveCompatibleGlass(element.glass, element.nd, element.vd),
          `${lens.name}: ${element.name}`,
        ).not.toBeNull();
      }
    }

    expect(
      nikkor50.elements.map((element) => resolveCompatibleGlass(element.glass, element.nd, element.vd)?.name),
    ).toEqual(["J-LASFH2", "J-LASF017", "SF1", "SF2", "J-LASFH2", "LAC8"]);
    expect(
      micro55.elements.map((element) => resolveCompatibleGlass(element.glass, element.nd, element.vd)?.name),
    ).toEqual(["M-TAF1", "LAC8", "F3", "SF15", "M-NBF1", "J-LASF017"]);
    expect(
      zoom80200.elements.map((element) => resolveCompatibleGlass(element.glass, element.nd, element.vd)?.name),
    ).toEqual([
      "H-ZF7LA",
      "J-FKH1",
      "J-FKH1",
      "F1",
      "N-SK11",
      "N-BK7",
      "H-ZF7LA",
      "J-LAK8",
      "BALK3",
      "N-SK11",
      "E-LAF11",
      "J-FKH1",
      "FK5",
      "H-ZF7LA",
      "J-LAF2",
      "J-BASF6",
    ]);
    expect(
      nikkor85.elements.map((element) => resolveCompatibleGlass(element.glass, element.nd, element.vd)?.name),
    ).toEqual(["J-LASFH2", "J-LAK10", "SF56A", "F1", "H-LaK6A", "J-LASFH2"]);
    expect(
      micro105.elements.map((element) => resolveCompatibleGlass(element.glass, element.nd, element.vd)?.name),
    ).toEqual(["H-LaK6A", "LAF3", "H-ZF2", "E-F1", "H-LaK6A", "H-LaK6A", "H-ZF7LA", "NBFD3", "J-BK7A"]);
    expect(
      dc105.elements.map((element) => resolveCompatibleGlass(element.glass, element.nd, element.vd)?.name),
    ).toEqual(["J-LAK02", "H-LaK6A", "S-TIM28", "SF1", "J-LASFH2", "J-LASF017"]);
  });

  it("pins the patent-figure rim refinements", () => {
    expect(nikkor50.surfaces.filter(({ label }) => ["3", "4"].includes(label)).map(({ sd }) => sd)).toEqual([
      14.5, 14.5,
    ]);
    expect(micro55.surfaces.filter(({ label }) => ["5", "6", "7", "8"].includes(label)).map(({ sd }) => sd)).toEqual([
      11, 11, 10.5, 10.5,
    ]);
  });

  it("keeps focus and wide-to-tele zoom travel ordered in fixed-image-plane coordinates", () => {
    expect(getGroupMovementAvailability(runtimeLens(nikkor50))).toEqual({ focus: true, zoom: false, combined: false });
    expect(endpointShifts(nikkor50, "focus")).toEqual([expect.closeTo(-7.2095518, 8), expect.closeTo(-7.2095518, 8)]);

    expect(endpointShifts(micro55, "focus")).toEqual([
      expect.closeTo(-28.924698706, 9),
      expect.closeTo(-27.466176601, 9),
    ]);

    expect(getGroupMovementAvailability(runtimeLens(zoom80200))).toEqual({ focus: true, zoom: true, combined: true });
    expect(zoom80200.zoomPositions).toEqual([80, 196]);
    expect(endpointShifts(zoom80200, "focus")).toEqual([
      expect.closeTo(-10.496, 9),
      expect.closeTo(0, 8),
      expect.closeTo(0, 8),
      expect.closeTo(0, 8),
    ]);
    expect(endpointShifts(zoom80200, "zoom")).toEqual([
      expect.closeTo(0, 8),
      expect.closeTo(40.601, 9),
      expect.closeTo(15.956, 9),
      expect.closeTo(0, 8),
    ]);

    expect(endpointShifts(nikkor85, "focus")).toEqual([expect.closeTo(0, 8), expect.closeTo(-12.6617, 9)]);
    expect(endpointShifts(micro105, "focus")).toEqual([
      expect.closeTo(-47.702, 9),
      expect.closeTo(-53.002, 9),
      expect.closeTo(0, 8),
      expect.closeTo(0, 8),
    ]);
    expect(endpointShifts(dc105, "focus")).toEqual([
      expect.closeTo(0, 8),
      expect.closeTo(0, 8),
      expect.closeTo(-4.7911, 9),
    ]);
  });
});
