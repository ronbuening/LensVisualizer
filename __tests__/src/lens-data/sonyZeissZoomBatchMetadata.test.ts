import { describe, expect, it } from "vitest";
import sony1680 from "../../../src/lens-data/sony/SonyVarioSonnarTDT1680mmf3545ZA.data.js";
import sony1670 from "../../../src/lens-data/sony/SonyVarioTessarTE1670mmf4ZAOSS.data.js";
import sony1635 from "../../../src/lens-data/sony/SonyVarioTessarTFE1635mmf4ZAOSS.data.js";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { resolveCompatibleGlass } from "../../../src/optics/glassCatalog.js";
import { computeGroupMovementProfile } from "../../../src/optics/groupMovement.js";
import type { LensData, LensDataInput } from "../../../src/types/optics.js";

const lenses = [sony1680, sony1670, sony1635];

function runtimeLens(lens: LensDataInput) {
  return buildLens({ ...LENS_DEFAULTS, ...lens } as LensData);
}

function shifts(lens: LensDataInput, mode: "focus" | "zoom", focusT: number, zoomT: number): Record<string, number> {
  const profile = computeGroupMovementProfile(runtimeLens(lens), mode, { focusT, zoomT });
  return Object.fromEntries(profile.series.map(({ group, currentPoint }) => [group.label, currentPoint.shiftMm]));
}

function displayedElementLabels(lens: { elements: readonly { id: number; diagramLabel?: string }[] }): string[] {
  return lens.elements.map((element) => element.diagramLabel ?? String(element.id));
}

describe("Sony ZEISS zoom diagram metadata", () => {
  it("keeps the reviewed production display names", () => {
    expect(lenses.map(({ name }) => name)).toEqual([
      "SONY VARIO-SONNAR T* DT 16-80mm f/3.5-4.5 ZA",
      "SONY VARIO-TESSAR T* E 16-70mm f/4 ZA OSS",
      "SONY VARIO-TESSAR T* FE 16-35mm f/4 ZA OSS",
    ]);
  });

  it("uses the patent element identifiers instead of array indexes", () => {
    expect(displayedElementLabels(sony1680)).toEqual(Array.from({ length: 14 }, (_, index) => `L${index + 1}`));
    expect(displayedElementLabels(sony1670)).toEqual([
      "L11",
      "L12",
      "L13",
      "L21",
      "L22",
      "L23",
      "L24",
      "L31",
      "L32",
      "L33",
      "L41",
      "L42",
      "L43",
      "L44",
      "L51",
      "L61",
    ]);
    expect(displayedElementLabels(sony1635)).toEqual([
      "L11",
      "L12",
      "L12r",
      "L13",
      "L14",
      "L21",
      "L22",
      "L23",
      "L31",
      "L41",
      "L42",
      "L43",
      "L44",
    ]);
  });

  it("shows focus, stabilization, cemented-unit, and subgroup roles", () => {
    expect(sony1680.groups.map(({ text }) => text)).toContain("GR2 (− / FOCUS)");
    expect(sony1670.groups.map(({ text }) => text)).toContain("GR5 (− / FOCUS)");
    expect(sony1670.doublets.map(({ text }) => text)).toEqual(["J1", "J2", "J3", "J4 / GR4f", "GR4r / OSS"]);
    expect(sony1635.groups.map(({ text }) => text)).toContain("GR3 (+ / FOCUS)");
    expect(sony1635.doublets.map(({ text }) => text)).toEqual(["H1", "L21 / OSS", "D1", "D2"]);
  });

  it("preserves the patent zoom and focus travel directions", () => {
    const sony1680Mid = shifts(sony1680, "zoom", 0, 0.5);
    const sony1680Tele = shifts(sony1680, "zoom", 0, 1);
    expect(sony1680Mid["GR2 (− / FOCUS)"]).toBeCloseTo(0.904002, 6);
    expect(sony1680Tele["GR2 (− / FOCUS)"]).toBeCloseTo(-10.126323, 6);
    expect(shifts(sony1680, "focus", 1, 0)["GR2 (− / FOCUS)"]).toBeCloseTo(-1.169292, 6);

    const sony1670Tele = shifts(sony1670, "zoom", 0, 1);
    expect(Object.values(sony1670Tele).every((shift) => shift < 0)).toBe(true);
    expect(shifts(sony1670, "focus", 1, 0)["GR5 (− / FOCUS)"]).toBeCloseTo(0.437716838, 8);

    const sony1635Tele = shifts(sony1635, "zoom", 0, 1);
    expect(sony1635Tele["GR1 (−)"]).toBeCloseTo(15.083, 6);
    expect(sony1635Tele["GR2 (+)"]).toBeCloseTo(-17.922, 6);
    expect(sony1635Tele["GR3 (+ / FOCUS)"]).toBeCloseTo(-18.71, 6);
    expect(sony1635Tele["GR4 (−)"]).toBeCloseTo(-17.923, 6);
    expect(shifts(sony1635, "focus", 1, 0)["GR3 (+ / FOCUS)"]).toBeCloseTo(-1.025012691, 8);
  });

  it("keeps the Figure 1 rear-rim refinement inside the validated geometry", () => {
    const sdByLabel = Object.fromEntries(sony1670.surfaces.map(({ label, sd }) => [label, sd]));
    expect(sdByLabel).toMatchObject({
      "19A": 10.4,
      "21": 9.6,
      "24": 12,
      "26A": 10.5,
      "28": 12.5,
    });
  });

  it("backfills only d-line-compatible 16-35mm coefficient proxies", () => {
    expect(
      sony1635.elements.map((element) => resolveCompatibleGlass(element.glass, element.nd, element.vd)?.name ?? null),
    ).toEqual(["M-TAF1", null, null, null, null, "BAC4", null, "S-FPL51", "J-FK5", null, "S-FPL51", "S-FPL51", null]);
  });
});
