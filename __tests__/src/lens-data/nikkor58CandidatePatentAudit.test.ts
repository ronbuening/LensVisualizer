import { describe, expect, it } from "vitest";
import data from "../../../src/lens-data/nikon/Nikon58f14GDesignCandidate.data.js";
import defaults from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { doLayout, anchorLayoutToCamera, conicPolySag } from "../../../src/optics/optics.js";
import { computeElementRenderDiagnostics } from "../../../src/optics/diagramGeometry.js";
import { resolveCompatibleGlass } from "../../../src/optics/glassCatalog.js";
import type { LensData } from "../../../src/types/optics.js";
const L = buildLens({ ...defaults, ...data } as LensData);

describe("58mm candidate: JP2013019993 Example 2", () => {
  it("retains the correctly converted source conics and polynomial terms", () => {
    for (const [label, r, kappa, coefficients] of [
      ["1A", 52.8577, 0.5721, [1.10084e-7, 6.21998e-10, -4.25694e-13, 0]],
      ["15A", -77.2943, 14.1597, [8.65514e-6, 4.15194e-9, 1.25812e-11, 1.22728e-14]],
    ] as const) {
      for (const h of [5, 10, 16]) {
        const expected =
          (h * h) / r / (1 + Math.sqrt(1 - (kappa * h * h) / (r * r))) +
          coefficients.reduce<number>((sum, c, i) => sum + c * h ** (4 + i * 2), 0);
        expect(conicPolySag(h, r, data.asph[label])).toBeCloseTo(expected, 10);
      }
    }
  });

  it("reproduces the source EFL and the explicitly reconstructed finite endpoint", () => {
    for (const station of [0, 1]) {
      const rays = [
        [1, 0],
        [0, 1],
      ];
      let index = 1,
        track = 0;
      for (const s of data.surfaces) {
        const gap = s.label === "15A" ? data.var["15A"][station] : s.d;
        for (const ray of rays) {
          ray[1] -= ((s.nd - index) / s.R) * ray[0];
          ray[0] += (gap / s.nd) * ray[1];
        }
        index = s.nd;
        track += gap;
      }
      expect(-1 / rays[0][1]).toBeCloseTo(58.0216, 4);
      if (station) expect(Math.abs((-rays[1][0] / rays[0][0] + track) / 1000 - data.closeFocusM)).toBeLessThan(0.00003);
    }
    expect(L.FOPEN).toBe(1.45);
  });

  it("moves the cemented assemblies and stop together without hidden rim trimming", () => {
    const reference = doLayout(0, 0, L);
    for (const t of [0, 0.5, 1]) {
      const layout = anchorLayoutToCamera(reference, doLayout(t, 0, L));
      L.S.forEach((_, i) => expect(layout.z[i] - reference.z[i]).toBeCloseTo(-7.303 * t, 8));
      for (const e of computeElementRenderDiagnostics(L, layout.z)) {
        expect(e.front.trimAmount).toBeLessThan(0.01);
        expect(e.rear.trimAmount).toBeLessThan(0.01);
      }
    }
  });

  it("resolves the formerly unmatched central triplet medium without a patent APD claim", () => {
    const e = data.elements.find((e) => e.name === "Ldn")!;
    expect(resolveCompatibleGlass(e.glass, e.nd, e.vd)?.name).toBe("J-LLF6");
    expect(e.apd).toBe(false);
  });
});
