import { describe, expect, it } from "vitest";
import prime28 from "../../../src/lens-data/konica/KonicaUCHexanonAR28mmf18.data.js";
import zoom45100 from "../../../src/lens-data/konica/KonicaUCZoomHexanonAR45100mmf35.data.js";
import zoom80200 from "../../../src/lens-data/konica/KonicaUCZoomHexanonAR80200mmf4.data.js";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { resolveCompatibleGlass } from "../../../src/optics/glassCatalog.js";
import { computeGroupMovementProfile } from "../../../src/optics/groupMovement.js";
import type { LensData, LensDataInput } from "../../../src/types/optics.js";

const lenses = [prime28, zoom45100, zoom80200];

function resolvedGlassNames(lens: (typeof lenses)[number]): string[] {
  return lens.elements.map((element) => {
    const match = resolveCompatibleGlass(element.glass, element.nd, element.vd);
    expect(match, `${lens.name}: ${element.name}`).not.toBeNull();
    return match!.name;
  });
}

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

  it("uses source-correlated element labels and component roles on the diagrams", () => {
    expect(displayedElementLabels(prime28)).toEqual(Array.from({ length: 8 }, (_, index) => `L${index + 1}`));
    expect(displayedElementLabels(zoom45100)).toEqual(Array.from({ length: 11 }, (_, index) => `L${index + 1}`));
    expect(displayedElementLabels(zoom80200)).toEqual([
      "L1a",
      "L1b",
      "L2",
      "L3",
      "L4a",
      "L4b",
      "L5a",
      "L5b",
      "L6",
      "L7a",
      "L7b",
      "L8",
      "L9",
      "L10",
    ]);

    expect(prime28.groups.map(({ text }) => text)).toEqual([
      "L1 (− / FIXED)",
      "L2–L4 (+ / FLOAT → IMG)",
      "L5–L8 (+ / FIXED)",
    ]);
    expect(zoom45100.groups.map(({ text }) => text)).toEqual([
      "C1 (+ / FIXED)",
      "C2 (− / ZOOM)",
      "C3 (+ / COMP)",
      "C4 (+ / FIXED)",
    ]);
    expect(zoom80200.groups.map(({ text }) => text)).toEqual([
      "F1 (+ / FOCUS)",
      "F2 (− / ZOOM)",
      "F3 (+ / COMP)",
      "F4 (+ / FIXED)",
      "F5 (NUM. − / FIXED)",
    ]);
    expect(prime28.doublets).toEqual([]);
    expect(zoom45100.doublets.map(({ text }) => text)).toEqual(["D1"]);
    expect(zoom80200.doublets.map(({ text }) => text)).toEqual(["D1", "D2", "D3", "D4"]);
    expect(
      lenses.flatMap(({ elements }) => elements).every((element) => !("apd" in element) || element.apd === false),
    ).toBe(true);
  });

  it("preserves the published zoom ordering and focus directions", () => {
    expect(prime28.focusDescription).toContain("L2–L4 shifts 0.9996 mm imageward");
    expect(prime28.var).toEqual({});

    const mid45100 = shifts(zoom45100, "zoom", 0, 0.5);
    const tele45100 = shifts(zoom45100, "zoom", 0, 1);
    expect(mid45100["C2 (− / ZOOM)"]).toBeCloseTo(13.2, 6);
    expect(mid45100["C3 (+ / COMP)"]).toBeCloseTo(4.0, 6);
    expect(tele45100["C2 (− / ZOOM)"]).toBeCloseTo(22.8, 6);
    expect(tele45100["C3 (+ / COMP)"]).toBeCloseTo(-0.6, 6);

    const tele80200 = shifts(zoom80200, "zoom", 0, 1);
    const baseShift80200 = tele80200["F1 (+ / FOCUS)"];
    expect(tele80200["F2 (− / ZOOM)"] - baseShift80200).toBeCloseTo(33.84, 6);
    expect(tele80200["F3 (+ / COMP)"] - baseShift80200).toBeCloseTo(0.375, 6);
    expect(tele80200["F4 (+ / FIXED)"] - baseShift80200).toBeCloseTo(0, 6);
    expect(shifts(zoom80200, "focus", 1, 0)["F1 (+ / FOCUS)"]).toBeCloseTo(-27.690051647, 8);
  });

  it("preserves the patent-figure semi-diameter refinements", () => {
    const sd28 = Object.fromEntries(prime28.surfaces.map(({ label, sd }) => [label, sd]));
    expect(sd28).toMatchObject({
      "3": 15.4,
      "4": 15.4,
      "5": 13.1,
      "6": 13.1,
      "7": 10.2,
      "8": 10.2,
      "11": 9.6,
      "12": 9.6,
      "13": 9.6,
      "14": 9.6,
      "15": 13.3,
      "16": 13.3,
    });

    const sd45100 = Object.fromEntries(zoom45100.surfaces.map(({ label, sd }) => [label, sd]));
    expect(sd45100).toMatchObject({ "1": 19.5, "2": 19.5, "3": 19.5, "14": 13, "15": 13, "16": 13, "17": 13 });

    const sd80200 = Object.fromEntries(zoom80200.surfaces.map(({ label, sd }) => [label, sd]));
    expect(sd80200).toMatchObject({
      "4": 25,
      "5": 25,
      "11": 18.5,
      "12": 18.5,
      "13": 18.5,
      "14": 18.5,
      "15": 18.5,
      "16": 18.5,
      "17": 18.5,
      "18": 18.5,
      "19": 14.2,
      "20": 14.2,
      "21": 15.5,
      "22": 15.5,
      "23": 15.5,
      "24": 15.5,
    });
  });
});
