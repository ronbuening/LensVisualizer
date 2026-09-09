import { describe, expect, it } from "vitest";
import data from "../../../src/lens-data/fujifilm/FujifilmXF80f28.data.js";
import defaults from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { doLayout, anchorLayoutToCamera } from "../../../src/optics/optics.js";
import { computeElementRenderDiagnostics } from "../../../src/optics/diagramGeometry.js";
import { resolveCompatibleGlass } from "../../../src/optics/glassCatalog.js";
import type { LensData } from "../../../src/types/optics.js";
const L = buildLens({ ...defaults, ...data } as LensData);

describe("XF80 macro: US20180246292 Example 1", () => {
  it("reproduces the source f/2.88 prescription and finite conjugate with the omitted filter", () => {
    expect(data.asph["7A"].K).toBe(0);
    expect(data.surfaces.at(-1)!.d).toBeCloseTo(27.42 + 2.85 / 1.5168 + 1, 10);
    for (const station of [0, 1]) {
      const rays = [
        [1, 0],
        [0, 1],
      ];
      let index = 1;
      let track = 0;
      for (const s of data.surfaces) {
        const gap = (data.var as Record<string, number[]>)[s.label]?.[station] ?? s.d;
        for (const ray of rays) {
          ray[1] -= ((s.nd - index) / s.R) * ray[0];
          ray[0] += (gap / s.nd) * ray[1];
        }
        index = s.nd;
        track += gap;
      }
      if (station === 0) {
        expect(-1 / rays[0][1]).toBeCloseTo(78.79, 2);
        expect(Math.abs(rays[0][0])).toBeLessThan(0.00004);
      } else {
        expect(Math.abs(rays[0][0] + 1)).toBeLessThan(0.0011);
        expect(data.closeFocusM * 1000).toBeCloseTo(-rays[1][0] / rays[0][0] + track + 2.85 - 2.85 / 1.5168, 8);
      }
    }
    expect(data.fstopSeries[0]).toBe(data.nominalFno);
  });

  it("moves the two focus groups in opposite directions while fixing other groups", () => {
    const reference = doLayout(0, 0, L);
    const current = anchorLayoutToCamera(reference, doLayout(1, 0, L));
    L.S.forEach((s, i) => {
      const movement = current.z[i] - reference.z[i];
      if (["9", "10", "11", "12", "13"].includes(s.label)) expect(movement).toBeCloseTo(15.35, 3);
      else if (["15", "16", "17", "18", "19"].includes(s.label)) expect(movement).toBeCloseTo(-15.95, 3);
      else expect(Math.abs(movement)).toBeLessThan(0.0011);
    });
  });

  it("renders the inferred optical rims without hidden clipping across focus", () => {
    for (const focusT of [0, 0.25, 0.5, 0.75, 1]) {
      const layout = doLayout(focusT, 0, L);
      for (const e of computeElementRenderDiagnostics(L, layout.z)) {
        expect(e.front.trimAmount).toBeLessThan(0.25);
        expect(e.rear.trimAmount).toBeLessThan(0.25);
      }
    }
  });
  it("uses a coordinate-compatible aspherical glass counterpart", () => {
    const e = data.elements.find((e) => e.id === 4)!;
    expect(resolveCompatibleGlass(e.glass, e.nd, e.vd)?.name).toBe("M-BACD12");
  });
});
