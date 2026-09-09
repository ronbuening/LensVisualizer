import { describe, expect, it } from "vitest";
import data from "../../../src/lens-data/nikon/NikonAFSMicroNikkor60f28G.data.js";
import defaults from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { doLayout, anchorLayoutToCamera, conicPolySag } from "../../../src/optics/optics.js";
import { computeElementRenderDiagnostics } from "../../../src/optics/diagramGeometry.js";
import type { LensData } from "../../../src/types/optics.js";
const L = buildLens({ ...defaults, ...data } as LensData);

describe("Micro-Nikkor 60: US7898744 Example 2", () => {
  it("evaluates the original column 6 conic convention at both aspheres", () => {
    for (const [label, r, kappa, coefficients] of [
      ["2A", 25.1596, -5.3148, [5.5804e-5, -1.4307e-7, 5.0263e-10, -7.7598e-13]],
      ["8A", 21.4584, 2.1218, [-2.6928e-5, -9.4708e-8, 9.7003e-11, -2.5636e-12]],
    ] as const) {
      for (const h of [4, 8, 10]) {
        const expected =
          (h * h) / r / (1 + Math.sqrt(1 - (kappa * h * h) / (r * r))) +
          coefficients.reduce((sum, c, i) => sum + c * h ** (4 + 2 * i), 0);
        expect(conicPolySag(h, r, data.asph[label])).toBeCloseTo(expected, 10);
      }
    }
  });

  it("reproduces source magnifications and derives the slider's object-to-image distances", () => {
    for (const station of [0, 1, 2]) {
      const rays = [
        [1, 0],
        [0, 1],
      ];
      let index = 1,
        track = 0;
      for (const s of data.surfaces) {
        const gaps = data.var[s.label as unknown as keyof typeof data.var];
        const gap = gaps ? gaps[station] : s.d;
        for (const ray of rays) {
          ray[1] -= ((s.nd - index) / s.R) * ray[0];
          ray[0] += (gap / s.nd) * ray[1];
        }
        index = s.nd;
        track += gap;
      }
      if (station === 0) {
        expect(-1 / rays[0][1]).toBeCloseTo(58.0, 1);
        expect(Math.abs(rays[0][0])).toBeLessThan(0.00005);
      } else {
        expect(rays[0][0]).toBeCloseTo(-station / 2, 3);
        const distance = (-rays[1][0] / rays[0][0] + track) / 1000;
        expect(data.closeFocusM / data.focusPositions[station]).toBeCloseTo(distance, 9);
      }
    }
  });

  it("moves the two focusing groups in source directions and preserves the small printed discrepancy", () => {
    const reference = doLayout(0, 0, L);
    const end = anchorLayoutToCamera(reference, doLayout(1, 0, L));
    L.S.forEach((s, i) => {
      const label = s.label;
      const expected = ["7", "8A", "9", "10", "11"].includes(label)
        ? 11.2078
        : ["13", "14", "15", "16", "17"].includes(label)
          ? -21.40042
          : 0;
      expect(end.z[i] - reference.z[i]).toBeCloseTo(expected, 8);
    });
    expect(data.var.STO[1] + data.var[17][1] - data.var.STO[0] - data.var[17][0]).toBeCloseTo(0.00137, 8);
  });

  it("renders the conservative optical rims without silently trimming surfaces", () => {
    for (const t of [0, 0.5, data.focusPositions[1], 1]) {
      for (const e of computeElementRenderDiagnostics(L, doLayout(t, 0, L).z)) {
        expect(e.front.trimAmount).toBeLessThan(0.01);
        expect(e.rear.trimAmount).toBeLessThan(0.01);
      }
    }
  });
});
