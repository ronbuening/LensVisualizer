import { describe, expect, it } from "vitest";
import ef200400 from "../../../src/lens-data/canon/CanonEF200400mmf4LISUSMExtender14x.data.js";
import ef200400In from "../../../src/lens-data/canon/CanonEF200400mmf4LISUSMExtender14xExtenderIn.data.js";
import efm1122 from "../../../src/lens-data/canon/CanonEFM1122mmf456ISSTM.data.js";
import efm1855 from "../../../src/lens-data/canon/CanonEFM1855mmf3556ISSTM.data.js";
import efs1785 from "../../../src/lens-data/canon/CanonEFS1785mmf456ISUSM.data.js";
import efs55250 from "../../../src/lens-data/canon/CanonEFS55250mmf456IS.data.js";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { resolveCompatibleGlass } from "../../../src/optics/glassCatalog.js";
import { computeGroupMovementProfile, getGroupMovementAvailability } from "../../../src/optics/groupMovement.js";
import type { LensData, LensDataInput } from "../../../src/types/optics.js";

const lenses = [ef200400, ef200400In, efm1122, efm1855, efs1785, efs55250];

function runtimeLens(lens: LensDataInput) {
  return buildLens({ ...LENS_DEFAULTS, ...lens } as LensData);
}

function shifts(lens: LensDataInput, mode: "focus" | "zoom", focusT: number, zoomT: number): Record<string, number> {
  const profile = computeGroupMovementProfile(runtimeLens(lens), mode, { focusT, zoomT });
  return Object.fromEntries(profile.series.map(({ group, currentPoint }) => [group.label, currentPoint.shiftMm]));
}

describe("Canon 2026-08-25 zoom batch diagram metadata", () => {
  it("keeps the reviewed product and supplemental-configuration display names", () => {
    expect(lenses.map(({ name }) => name)).toEqual([
      "CANON EF 200-400mm f/4 L IS USM EXTENDER 1.4×",
      "CANON EF 200-400mm f/4 L IS USM EXTENDER 1.4× — EXT IN",
      "CANON EF-M 11-22mm f/4-5.6 IS STM",
      "CANON EF-M 18-55mm f/3.5-5.6 IS STM",
      "CANON EF-S 17-85mm f/4-5.6 IS USM",
      "CANON EF-S 55-250mm f/4-5.6 IS",
    ]);
  });

  it("shows source roles and unit powers without assigning singlet IS motion to a whole group", () => {
    expect(ef200400.groups.map(({ text }) => text)).toEqual([
      "L1 (+ / FOCUS)",
      "L2 (-)",
      "L3 (+)",
      "L41 (+)",
      "L42 (- / IS)",
      "L43 (+)",
      "L44 (+)",
    ]);
    expect(ef200400In.groups.map(({ text }) => text)).toEqual([
      "L1 (+ / FOCUS)",
      "L2 (-)",
      "L3 (+)",
      "L41 (+)",
      "L42 (- / IS)",
      "L43 (+)",
      "EXTa (+)",
      "EXTb (-)",
      "L44 (+)",
    ]);
    expect(efm1122.elements[3].diagramLabel).toBe("LS");
    expect(efm1122.groups.map(({ text }) => text)).toEqual(["U1 (-)", "U2 (+)", "U3 (- / FOCUS)", "U4 (+)"]);
    expect(efm1855.groups.map(({ text }) => text)).toEqual([
      "L1 (+)",
      "L2 (-)",
      "L3 (+)",
      "L4 (- / FOCUS)",
      "LRa (+)",
      "LRb (- / IS)",
      "LRc (+)",
    ]);
    expect(efs55250.groups.map(({ text }) => text)).toEqual(["L1 (+ / FOCUS)", "L2 (- / IS)", "L3 (+)"]);
  });

  it("preserves the published and reconstructed focus directions", () => {
    expect(getGroupMovementAvailability(runtimeLens(ef200400)).focus).toBe(false);
    expect(getGroupMovementAvailability(runtimeLens(ef200400In)).focus).toBe(false);

    expect(shifts(efm1122, "focus", 1, 0)["U3 (- / FOCUS)"]).toBeCloseTo(1.449508604, 8);
    expect(shifts(efm1122, "focus", 1, 1)["U3 (- / FOCUS)"]).toBeCloseTo(3.466318872, 8);
    expect(shifts(efm1855, "focus", 1, 0)["L4 (- / FOCUS)"]).toBeCloseTo(-1.155132965, 8);
    expect(shifts(efm1855, "focus", 1, 1)["L4 (- / FOCUS)"]).toBeCloseTo(-2.408447075, 8);
    expect(shifts(efs1785, "focus", 1, 0)["L2 (- / FOCUS)"]).toBeCloseTo(-1.101221852, 8);
    expect(shifts(efs1785, "focus", 1, 1)["L2 (- / FOCUS)"]).toBeCloseTo(-4.86800496, 8);
    expect(shifts(efs55250, "focus", 1, 0)["L1 (+ / FOCUS)"]).toBeCloseTo(-15.563067201, 8);
    expect(shifts(efs55250, "focus", 1, 1)["L1 (+ / FOCUS)"]).toBeCloseTo(-16.393674791, 8);
  });

  it("keeps the wide-middle-tele zoom ordering and the two source reversals", () => {
    expect(shifts(ef200400, "zoom", 0, 1)).toMatchObject({
      "L1 (+ / FOCUS)": expect.closeTo(0, 8),
      "L2 (-)": expect.closeTo(35, 8),
      "L3 (+)": expect.closeTo(12.53, 8),
    });
    expect(shifts(ef200400In, "zoom", 0, 1)).toMatchObject({
      "L2 (-)": expect.closeTo(35, 8),
      "L3 (+)": expect.closeTo(12.53, 8),
      "EXTa (+)": expect.closeTo(0, 8),
      "EXTb (-)": expect.closeTo(0, 8),
    });

    const efm1122Middle = shifts(efm1122, "zoom", 0, 0.5);
    const efm1122Tele = shifts(efm1122, "zoom", 0, 1);
    expect(efm1122Middle["U1 (-)"]).toBeCloseTo(3.58, 8);
    expect(efm1122Tele["U1 (-)"]).toBeCloseTo(1.69, 8);
    expect(efm1122Tele).toMatchObject({
      "U2 (+)": expect.closeTo(-14.96, 8),
      "U3 (- / FOCUS)": expect.closeTo(-14.51, 8),
      "U4 (+)": expect.closeTo(-14.96, 8),
    });

    expect(shifts(efm1855, "zoom", 0, 1)).toMatchObject({
      "L1 (+)": expect.closeTo(-26.57, 8),
      "L2 (-)": expect.closeTo(-6.97, 8),
      "L3 (+)": expect.closeTo(-19.31, 8),
      "L4 (- / FOCUS)": expect.closeTo(-17.85, 8),
    });
    expect(shifts(efs1785, "zoom", 0, 1)).toMatchObject({
      "L1 (+)": expect.closeTo(-26.503352217, 8),
      "L2 (- / FOCUS)": expect.closeTo(1.086647783, 8),
      "L3 (+)": expect.closeTo(-12.783352217, 8),
      "L4 (- / IS)": expect.closeTo(-4.863352217, 8),
      "L5 (+)": expect.closeTo(-12.783352217, 8),
    });

    const efs55250Middle = shifts(efs55250, "zoom", 0, 0.5);
    const efs55250Tele = shifts(efs55250, "zoom", 0, 1);
    expect(efs55250Middle["L2 (- / IS)"]).toBeCloseTo(4.900652984, 8);
    expect(efs55250Tele["L2 (- / IS)"]).toBeCloseTo(0.089240101, 8);
    expect(efs55250Tele).toMatchObject({
      "L1 (+ / FOCUS)": expect.closeTo(-40.665849899, 8),
      "L3 (+)": expect.closeTo(-30.119281899, 8),
    });
  });

  it("resolves the 55-250mm L23 annotation to its official CDGM curve", () => {
    const element = efs55250.elements[5];
    expect(resolveCompatibleGlass(element.glass, element.nd, element.vd)?.name).toBe("H-ZLaF50E");
  });
});
