import { describe, expect, it } from "vitest";
import data from "../../../src/lens-data/nikon/NikonZ58f095SNoct.data.js";
import defaults from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { doLayout, anchorLayoutToCamera } from "../../../src/optics/optics.js";
import { computeElementRenderDiagnostics } from "../../../src/optics/diagramGeometry.js";
import type { LensData } from "../../../src/types/optics.js";
const L = buildLens({ ...defaults, ...data } as LensData);

describe("Noct: WO2019229849 Example 1", () => {
  it("excludes the separate filter while retaining equivalent propagation", () => {
    expect(data.surfaces).toHaveLength(28);
    expect(data.elements).toHaveLength(17);
    expect(data.surfaces.at(-1)!.d).toBeCloseTo(14.5 + 1.6 / 1.5168 + 1, 10);
    expect(L.FOPEN).toBeCloseTo(0.98, 12);
    for (const t of [0, 1]) {
      const rays = [
        [1, 0],
        [0, 1],
      ];
      let n = 1,
        track = 0;
      for (const s of data.surfaces) {
        const gap = s.label === "22" ? data.var["22"][t] : s.d;
        for (const r of rays) {
          r[1] -= ((s.nd - n) / s.R) * r[0];
          r[0] += (gap / s.nd) * r[1];
        }
        n = s.nd;
        track += gap;
      }
      if (!t) expect(-1 / rays[0][1]).toBeCloseTo(59.62, 2);
      else {
        expect(rays[0][0]).toBeCloseTo(-0.194, 3);
        expect((-rays[1][0] / rays[0][0] + track) / 1000).toBeCloseTo(data.closeFocusM, 10);
      }
    }
  });

  it("recovers the five source partial-dispersion rows from runtime deviations", () => {
    for (const [name, pgf] of [
      ["L12", 0.54467],
      ["L13", 0.56396],
      ["L24", 0.58997],
      ["L25", 0.56396],
      ["L29", 0.58997],
    ] as const) {
      const e = data.elements.find((e) => e.name === name)!;
      expect(0.6438 - 0.001682 * e.vd + e.dPgF!).toBeCloseTo(pgf, 10);
      expect(e.apd).toBe(name === "L24" || name === "L29" ? false : "patent");
    }
  });

  it("moves all of GF including the stop while keeping the rear doublets fixed", () => {
    const reference = doLayout(0, 0, L);
    for (const t of [0, 0.5, 1]) {
      const layout = anchorLayoutToCamera(reference, doLayout(t, 0, L));
      L.S.forEach((s, i) => {
        const shift = parseInt(s.label) >= 23 ? 0 : -18.61;
        expect(layout.z[i] - reference.z[i]).toBeCloseTo(shift * t, 8);
      });
      for (const e of computeElementRenderDiagnostics(L, layout.z)) {
        expect(e.front.trimAmount).toBeLessThan(0.01);
        expect(e.rear.trimAmount).toBeLessThan(0.01);
      }
    }
  });
});
