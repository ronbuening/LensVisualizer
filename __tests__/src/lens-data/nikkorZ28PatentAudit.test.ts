import { describe, expect, it } from "vitest";
import data from "../../../src/lens-data/nikon/NikonZ28f28.data.js";
import defaults from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { doLayout, anchorLayoutToCamera } from "../../../src/optics/optics.js";
import { computeElementRenderDiagnostics } from "../../../src/optics/diagramGeometry.js";
import type { LensData } from "../../../src/types/optics.js";
const L = buildLens({ ...defaults, ...data } as LensData);

describe("Z28: WO2022071249 Example 2", () => {
  it("omits the separate filter but preserves compound resin and equivalent image distance", () => {
    expect(data.surfaces).toHaveLength(19);
    expect(data.elements).toHaveLength(10);
    expect(data.surfaces.find((s) => s.label === "12")).toMatchObject({ d: 0.14, nd: 1.56093, elemId: 7 });
    expect(data.surfaces.at(-1)!.d).toBeCloseTo(11.223 + 1.6 / 1.5168 + 0.86, 10);
    expect(data.surfaces.at(-1)!.d).toBeCloseTo(13.138, 3);
    expect(L.FOPEN).toBe(2.909);
    expect(data.asph["14A"].A8).toBe(-6.64821e-10);
    expect(Object.values(data.asph).every((a) => a.K === 0)).toBe(true);
  });

  it("reproduces source power and magnification while preserving both internal group motions", () => {
    for (const t of [0, 1]) {
      const rays = [
        [1, 0],
        [0, 1],
      ];
      let n = 1;
      for (const s of data.surfaces) {
        const gap = data.var[s.label as keyof typeof data.var]?.[t] ?? s.d;
        for (const r of rays) {
          r[1] -= ((s.nd - n) / s.R) * r[0];
          r[0] += (gap / s.nd) * r[1];
        }
        n = s.nd;
      }
      if (!t) expect(-1 / rays[0][1]).toBeCloseTo(28.824, 3);
      else {
        expect(rays[0][0]).toBeCloseTo(-0.203, 3);
        expect(-rays[1][0] / rays[0][0]).toBeCloseTo(135.39, 2);
      }
    }
    expect(data.varLabels.at(-1)).toEqual(["17", "D17"]);
    const reference = doLayout(0, 0, L);
    for (const t of [0, 0.5, 1]) {
      const layout = anchorLayoutToCamera(reference, doLayout(t, 0, L));
      L.S.forEach((s, i) => {
        const label = parseInt(s.label);
        const shift = label >= 6 && label <= 13 ? -1.681 : label >= 14 && label <= 17 ? -4.792 : 0;
        expect(layout.z[i] - reference.z[i]).toBeCloseTo(shift * t, 8);
      });
      for (const e of computeElementRenderDiagnostics(L, layout.z)) {
        expect(e.front.trimAmount).toBeLessThan(0.01);
        expect(e.rear.trimAmount).toBeLessThan(0.01);
      }
    }
  });

  it("uses isolated thick-element focal lengths including the resin layer", () => {
    for (const e of data.elements) {
      const i = data.surfaces.findIndex((s) => s.elemId === e.id),
        a = data.surfaces[i],
        b = data.surfaces[i + 1];
      const f = 1 / ((e.nd - 1) * (1 / a.R - 1 / b.R + ((e.nd - 1) * a.d) / (e.nd * a.R * b.R)));
      expect(Math.abs(e.fl - f)).toBeLessThan(0.006);
    }
  });
});
