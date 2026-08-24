import { describe, expect, it } from "vitest";
import ef100400 from "../../../src/lens-data/canon/CanonEF100400mmf4556LISUSM.data.js";
import ef300 from "../../../src/lens-data/canon/CanonEF300mmf28LISUSM.data.js";
import ef35 from "../../../src/lens-data/canon/CanonEF35mmf14LUSM.data.js";
import ef400 from "../../../src/lens-data/canon/CanonEF400mmf28LISUSM.data.js";
import ef400do from "../../../src/lens-data/canon/CanonEF400mmf4DOISUSM.data.js";
import ef500 from "../../../src/lens-data/canon/CanonEF500mmf4LISUSM.data.js";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { resolveCompatibleGlass } from "../../../src/optics/glassCatalog.js";
import { computeGroupMovementProfile, getGroupMovementAvailability } from "../../../src/optics/groupMovement.js";
import type { LensData, LensDataInput } from "../../../src/types/optics.js";

const lenses = [ef100400, ef300, ef35, ef400, ef400do, ef500];

function runtimeLens(lens: LensDataInput) {
  return buildLens({ ...LENS_DEFAULTS, ...lens } as LensData);
}

function shifts(lens: LensDataInput, mode: "focus" | "zoom", focusT = 1): Record<string, number> {
  const profile = computeGroupMovementProfile(runtimeLens(lens), mode, {
    focusT,
    zoomT: mode === "zoom" ? 1 : 0,
  });
  return Object.fromEntries(profile.series.map(({ group, currentPoint }) => [group.label, currentPoint.shiftMm]));
}

describe("Canon 2026-08-24 EF batch diagram metadata", () => {
  it("uses the reviewed production display names", () => {
    expect(lenses.map(({ name }) => name)).toEqual([
      "CANON EF 100-400mm f/4.5-5.6 L IS USM",
      "CANON EF 300mm f/2.8 L IS USM",
      "CANON EF 35mm f/1.4 L USM",
      "CANON EF 400mm f/2.8 L IS USM",
      "CANON EF 400mm f/4 DO IS USM",
      "CANON EF 500mm f/4 L IS USM",
    ]);
  });

  it("maps every physical element to a compatible spectral proxy", () => {
    for (const lens of lenses) {
      for (const element of lens.elements) {
        expect(
          resolveCompatibleGlass(element.glass, element.nd, element.vd),
          `${lens.name}: ${element.name}`,
        ).not.toBeNull();
      }
    }

    expect(resolveCompatibleGlass(ef100400.elements[8].glass, 1.62012, 49.5)?.name).toBe("K-SSK9");
  });

  it("uses the parent and subgroup labels printed in the patent figures", () => {
    expect(ef100400.groups.map(({ text }) => text)).toEqual(["L1", "L2 IS", "L3", "L4", "L5", "L6"]);
    expect(ef100400.doublets).toEqual([]);
    expect(ef35.doublets.map(({ text }) => text)).toEqual(["L1a", "L1b", "L2a", "L2b", "L3a", "L3b"]);
    expect(ef300.groups.map(({ text }) => text)).toEqual(["L1", "L2 FOCUS", "L3"]);
    expect(ef300.doublets.map(({ text }) => text)).toEqual(["L2", "L31", "L32 IS", "L33"]);
    expect(ef400.doublets.map(({ text }) => text)).toEqual(["L1a", "L1b", "L1c", "L2", "L3a", "L3b IS", "L3c"]);
    expect(ef400.groups.map(({ text }) => text)).toEqual(["HG", "L1", "L2 / FOCUS", "L3"]);
    expect(ef400do.groups.map(({ text }) => text)).toEqual(["DO"]);
    expect(ef400do.doublets).toEqual([]);
    expect(ef500.groups.map(({ text }) => text)).toEqual(["L1", "L2 FOCUS", "L3"]);
    expect(ef500.doublets.map(({ text }) => text)).toEqual(["L1a", "L1b", "L1c", "L2", "L3a", "L3b IS", "L3c"]);
  });

  it("preserves the patent-consistent focus directions", () => {
    expect(shifts(ef100400, "focus")["L4"]).toBeCloseTo(-3.962865689, 8);
    expect(shifts(ef100400, "focus")["L6"]).toBeCloseTo(1.719138512, 8);
    expect(shifts(ef300, "focus")["L2 FOCUS"]).toBeCloseTo(14.743206096, 8);
    expect(shifts(ef35, "focus")["L2"]).toBeCloseTo(-4.77, 8);
    expect(shifts(ef35, "focus")["L3"]).toBeCloseTo(-6.41, 8);
    expect(shifts(ef400, "focus")["L2 / FOCUS"]).toBeCloseTo(18.794827332, 8);
    expect(shifts(ef500, "focus")["L2 FOCUS"]).toBeCloseTo(16.833981615, 8);
    expect(getGroupMovementAvailability(runtimeLens(ef400do))).toEqual({
      focus: false,
      zoom: false,
      combined: false,
    });
  });

  it("orders the 100-400 states wide to tele without a group reversal", () => {
    expect(ef100400.zoomPositions).toEqual([102.68, 161.53, 389.19]);
    const zoomShifts = shifts(ef100400, "zoom", 0);
    expect(zoomShifts["L2 IS"]).toBeCloseTo(0, 1);
    for (const label of ["L1", "L3", "L4", "L5", "L6"]) {
      expect(zoomShifts[label], label).toBeLessThan(0);
    }
    expect(lenses.slice(1).map((lens) => runtimeLens(lens).isZoom)).toEqual([false, false, false, false, false]);
  });
});
