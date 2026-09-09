import { describe, expect, it } from "vitest";
import data from "../../../src/lens-data/nikon/NikonNikkorZ70200f28.data.js";
import defaults from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { doLayout, anchorLayoutToCamera } from "../../../src/optics/optics.js";
import { computeElementRenderDiagnostics } from "../../../src/optics/diagramGeometry.js";
import type { LensData } from "../../../src/types/optics.js";

const L = buildLens({ ...defaults, ...data } as LensData);

describe("NIKKOR Z 70–200: WO2020105104 Example 1", () => {
  it("converts the source paraboloid convention at both aspheres", () => {
    expect(data.asph["26A"].K).toBe(-1);
    expect(data.asph["37A"].K).toBe(-1);
  });

  it("reproduces the published finite magnifications at the labeled approximate one metre conjugate", () => {
    const expected = [-0.08318, -0.14416, -0.19832];
    const gaps = data.var as Record<string, number[][]>;
    for (let station = 0; station < 3; station++) {
      const rays = [
        [1, 0],
        [0, 1],
      ];
      let index = 1;
      let track = 0;
      for (const s of data.surfaces) {
        const gap = gaps[s.label]?.[station][1] ?? s.d;
        for (const ray of rays) {
          ray[1] -= ((s.nd - index) / s.R) * ray[0];
          ray[0] += (gap / s.nd) * ray[1];
        }
        index = s.nd;
        track += gap;
      }
      const distance = -rays[1][0] / rays[0][0] + track;
      expect(rays[0][0]).toBeCloseTo(expected[station], 5);
      // Source tele rounding leaves about 0.54 mm at the one-metre station.
      expect(Math.abs(distance - data.closeFocusM * 1000)).toBeLessThan(0.6);
    }
  });

  it("keeps non-focusing groups fixed while the focus groups move in opposite directions", () => {
    for (const zoomT of [0, 0.5, 1]) {
      const reference = doLayout(0, zoomT, L);
      const close = anchorLayoutToCamera(reference, doLayout(1, zoomT, L));
      L.S.forEach((s, i) => {
        const movement = close.z[i] - reference.z[i];
        if (["31", "32", "33", "34"].includes(s.label)) expect(movement).toBeGreaterThan(0);
        else if (["35", "36"].includes(s.label)) expect(movement).toBeLessThan(0);
        else expect(Math.abs(movement)).toBeLessThan(0.001);
      });
    }
  });

  it("renders the revised rims across zoom and focus without hidden clipping", () => {
    for (const zoomT of [0, 0.25, 0.5, 0.75, 1]) {
      for (const focusT of [0, 0.5, 1]) {
        const layout = doLayout(focusT, zoomT, L);
        for (const element of computeElementRenderDiagnostics(L, layout.z)) {
          expect(element.front.trimAmount).toBeLessThan(0.25);
          expect(element.rear.trimAmount).toBeLessThan(0.25);
        }
      }
    }
  });
});
