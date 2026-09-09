import { describe, expect, it } from "vitest";
import data from "../../../src/lens-data/nikon/NikonAF28f14D.data.js";
import defaults from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { doLayout, anchorLayoutToCamera, conicPolySag } from "../../../src/optics/optics.js";
import { computeElementRenderDiagnostics } from "../../../src/optics/diagramGeometry.js";
import type { LensData } from "../../../src/types/optics.js";
const L = buildLens({ ...defaults, ...data } as LensData);

describe("AF28D: US5315441 Embodiment 1", () => {
  it("evaluates the printed kappa sag equation rather than treating kappa as standard K", () => {
    for (const h of [5, 10, 16.4]) {
      const r = -46.473;
      const source =
        (h * h) / r / (1 + Math.sqrt(1 - (1.974 * h * h) / (r * r))) +
        1.644e-5 * h ** 4 +
        1.61e-8 * h ** 6 +
        1.721e-11 * h ** 8 -
        6.229e-14 * h ** 10;
      expect(conicPolySag(h, r, data.asph["16A"])).toBeCloseTo(source, 10);
    }
  });

  it("preserves the source magnification and derives its distance label", () => {
    for (const t of [0, 1]) {
      const rays = [
        [1, 0],
        [0, 1],
      ];
      let n = 1,
        track = 0;
      for (const s of data.surfaces) {
        const gap = data.var[s.label as keyof typeof data.var]?.[t] ?? s.d;
        for (const ray of rays) {
          ray[1] -= ((s.nd - n) / s.R) * ray[0];
          ray[0] += (gap / s.nd) * ray[1];
        }
        n = s.nd;
        track += gap;
      }
      expect(track).toBeCloseTo(120.8531, 8);
      if (!t) expect(-1 / rays[0][1]).toBeCloseTo(28.6208, 3);
      else {
        expect(rays[0][0]).toBeCloseTo(-0.1, 4);
        expect((-rays[1][0] / rays[0][0] + track) / 1000).toBeCloseTo(data.closeFocusM, 10);
      }
    }
    expect(L.FOPEN).toBeCloseTo(1.41, 12);
    expect(data.varLabels[1]).toEqual(["STO", "Stop–G3"]);
  });

  it("keeps G1 fixed and preserves the three moving assemblies without hidden rim trimming", () => {
    const reference = doLayout(0, 0, L);
    for (const t of [0, 0.5, 1]) {
      const layout = anchorLayoutToCamera(reference, doLayout(t, 0, L));
      L.S.forEach((s, i) => {
        const label = parseInt(s.label);
        const shift = label <= 2 ? 0 : label >= 12 && label <= 16 ? -3.8773 : -3.5248;
        expect(layout.z[i] - reference.z[i]).toBeCloseTo(shift * t, 8);
      });
      for (const e of computeElementRenderDiagnostics(L, layout.z)) {
        expect(e.front.trimAmount).toBeLessThan(0.01);
        expect(e.rear.trimAmount).toBeLessThan(0.01);
      }
    }
    expect(data.surfaces.find((s) => s.label === "11")!.d + data.var.STO[0]).toBeCloseTo(12.55, 8);
    expect(data.surfaces.find((s) => s.label === "11")!.d + data.var.STO[1]).toBeCloseTo(12.1975, 8);
  });
});
