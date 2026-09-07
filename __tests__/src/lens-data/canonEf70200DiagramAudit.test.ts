import { describe, expect, it } from "vitest";
import fast from "../../../src/lens-data/canon/CanonEF70200mmf28LISUSM.data.js";
import stabilized from "../../../src/lens-data/canon/CanonEF70200mmf4LISUSM.data.js";
import compact from "../../../src/lens-data/canon/CanonEF70200mmf4LUSM.data.js";
import defaults from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { evaluateSellmeier, LINE_NM, resolveCompatibleGlass } from "../../../src/optics/glassCatalog.js";
import { computeGroupMovementProfile } from "../../../src/optics/groupMovement.js";
import type { LensData, LensDataInput } from "../../../src/types/optics.js";

const build = (data: LensDataInput) => buildLens({ ...defaults, ...data } as LensData);
const zoomProfile = (data: LensDataInput) => computeGroupMovementProfile(build(data), "zoom", { focusT: 0, zoomT: 0 });

describe("Canon EF 70-200 diagram audit", () => {
  it.each([fast, stabilized, compact])(
    "uses catalog curves without falsely marking surrogate indices measured: $name",
    (data) => {
      const glass = Object.values(build(data).indexByIdx).filter((entry) => entry.quality !== "air");
      expect(glass).toHaveLength(data.elementCount);
      expect(glass.every((entry) => entry.quality === "sellmeier")).toBe(true);
    },
  );

  it.each([
    [8, "LAFN7", 1.74319, 1.76464, 1.77713],
    [13, "J-LASF013", 1.798372, 1.818682, 1.830298],
  ] as const)("selects E%i's stated surrogate and reproduces its vendor spectral lines", (id, name, nC, nF, ng) => {
    const e = compact.elements.find((element) => element.id === id)!;
    const entry = resolveCompatibleGlass(e.glass, e.nd, e.vd)!;
    expect(entry.name).toBe(name);
    expect(evaluateSellmeier(entry, LINE_NM.C)).toBeCloseTo(nC, 5);
    expect(evaluateSellmeier(entry, LINE_NM.F)).toBeCloseTo(nF, 5);
    expect(evaluateSellmeier(entry, LINE_NM.g)).toBeCloseTo(ng, 5);
  });

  it("distinguishes production-inferred fluorite/UD coloring from patent-listed APD", () => {
    const ids = (data: LensDataInput) => data.elements.filter((e) => e.apd === "inferred").map((e) => e.id);
    expect(ids(compact)).toEqual([3, 4, 12]);
    expect(ids(stabilized)).toEqual([3, 4, 13]);
    expect(ids(fast)).toEqual([]);
    for (const data of [compact, stabilized, fast] as LensDataInput[]) {
      expect(data.elements.some((e) => e.apd === "patent")).toBe(false);
    }
  });

  it("shows the complete objectward L1b focus travel independently of fixed L1a", () => {
    const L = build(compact);
    for (const zoomT of [0, 0.5, 1]) {
      const profile = computeGroupMovementProfile(L, "focus", { focusT: 0, zoomT });
      for (const series of profile.series) {
        const end = series.samples.at(-1)!;
        if (series.group.label === "L1b FOCUS") {
          expect(end.shiftMm).toBeLessThan(-13.53);
          expect(end.shiftMm).toBeGreaterThan(-13.55);
          expect(end.positionMm).toBeLessThan(series.samples[0].positionMm);
        } else expect(end.shiftMm).toBeCloseTo(0, 8);
      }
      expect(profile.maxAbsShiftMm).toBeGreaterThan(13.53);
    }
  });

  it.each([
    [compact, 0.33],
    [stabilized, 6.854],
  ] as const)("preserves the middle-to-tele compensator reversal: $0.name", (data, reversal) => {
    const profile = zoomProfile(data);
    const compensator = profile.series.find((s) => s.group.label.startsWith("L3"))!;
    const middle = compensator.samples.find((p) => p.zoomT === 0.5)!;
    expect(middle.shiftMm).toBeGreaterThan(0);
    expect(middle.shiftMm - compensator.samples.at(-1)!.shiftMm).toBeCloseTo(reversal, 6);
    const variator = profile.series.find((s) => s.group.label.startsWith("L2"))!;
    expect(variator.samples.at(-1)!.shiftMm).toBeGreaterThan(variator.samples.find((p) => p.zoomT === 0.5)!.shiftMm);
  });

  it("keeps the f/2.8 source zoom groups ordered and the unsupported IS focus controls unavailable", () => {
    const profile = zoomProfile(fast);
    expect(profile.groups.map((g) => g.label)).toEqual([
      "g1 +",
      "g2 FOCUS +",
      "g3 -",
      "g4 +",
      "g5A +",
      "g5B IS -",
      "g5C +",
    ]);
    for (const series of profile.series) {
      const end = series.samples.at(-1)!.shiftMm;
      if (/^g[234] /.test(series.group.label)) expect(end).toBeGreaterThan(11);
      else expect(Math.abs(end)).toBeLessThan(0.014); // Published prescription rounding/BFD residual.
    }
    expect(profile.availability.focus).toBe(false);
    expect(zoomProfile(stabilized).availability.focus).toBe(false);
  });
});
