import { describe, expect, it } from "vitest";
import data from "../../../src/lens-data/nikon/NikonZ135f18.data.js";
import defaults from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { doLayout, anchorLayoutToCamera } from "../../../src/optics/optics.js";
import { normalLinePgF } from "../../../src/optics/dispersion.js";
import { computeElementRenderDiagnostics } from "../../../src/optics/diagramGeometry.js";
import type { LensData } from "../../../src/types/optics.js";
const L = buildLens({ ...defaults, ...data } as LensData);

describe("Plena: WO2024147268 Example 1", () => {
  it("reproduces the source f/1.85 prescription and finite conjugate with the omitted filter", () => {
    expect(data.asph["11A"].K).toBe(0);
    expect(data.surfaces.at(-1)!.d).toBeCloseTo(11.4681 + 1.6 / 1.5168 + 1.3712, 10);
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
        expect(-1 / rays[0][1]).toBeCloseTo(132.3, 2);
        expect(Math.abs(rays[0][0])).toBeLessThan(0.00002);
      } else {
        expect(rays[0][0]).toBeCloseTo(-0.2, 4);
        expect(data.closeFocusM * 1000).toBeCloseTo(-rays[1][0] / rays[0][0] + track + 1.6 - 1.6 / 1.5168, 8);
      }
    }
    expect(data.fstopSeries[0]).toBe(data.nominalFno);
  });

  it("preserves the source's rounded partial dispersions across normal-line conversion", () => {
    for (const id of [1, 5, 9]) {
      const e = data.elements.find((e) => e.id === id)!;
      const departure = id === 1 ? 0.035 : 0.01;
      expect(normalLinePgF(e.vd, e.dPgF)).toBeCloseTo(departure + 0.6415 - 0.00162 * e.vd, 7);
    }
  });

  it("moves the two focus singlets in opposite directions while fixing other groups", () => {
    const reference = doLayout(0, 0, L);
    const current = anchorLayoutToCamera(reference, doLayout(1, 0, L));
    L.S.forEach((s, i) => {
      const movement = current.z[i] - reference.z[i];
      if (["13", "14"].includes(s.label)) expect(movement).toBeCloseTo(13.597, 3);
      else if (["24", "25"].includes(s.label)) expect(movement).toBeCloseTo(-6.184, 3);
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
});
