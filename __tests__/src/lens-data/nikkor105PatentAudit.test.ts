import { describe, expect, it } from "vitest";
import data from "../../../src/lens-data/nikon/NikonNikkor105f14E.data.js";
import defaults from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { anchorLayoutToCamera, doLayout } from "../../../src/optics/optics.js";
import { computeElementRenderDiagnostics } from "../../../src/optics/diagramGeometry.js";
import type { LensData } from "../../../src/types/optics.js";

const L = buildLens({ ...defaults, ...data } as LensData);

describe("NIKKOR 105: WO2019116563 Example 3", () => {
  it("recovers every Table 3 partial-dispersion ratio", () => {
    const theta = [0.537, 0.539, 0.539, 0.583, 0.633, 0.536, 0.599, 0.543, 0.604, 0.539, 0.583, 0.558, 0.576, 0.599];
    data.elements.forEach((element, i) => {
      const idx = L.S.findIndex((s) => s.elemId === element.id);
      const { fn } = L.indexByIdx[idx];
      expect((fn("V") - fn("B")) / (fn("B") - fn("R"))).toBeCloseTo(theta[i], 7);
    });
    expect(data.nominalFno).toBe(1.45);
  });

  it("moves only the G2 doublet imageward through the source travel", () => {
    const reference = doLayout(0, 0, L);
    for (const focusT of [0.5, 1]) {
      const current = anchorLayoutToCamera(reference, doLayout(focusT, 0, L));
      L.S.forEach((s, i) => {
        const moving = ["8", "9", "10"].includes(s.label);
        expect(current.z[i] - reference.z[i], s.label).toBeCloseTo(moving ? 12 * focusT : 0, 8);
      });
    }
  });

  it("keeps Figure 5 rims free of hidden trimming", () => {
    for (const focusT of [0, 0.5, 1]) {
      computeElementRenderDiagnostics(L, doLayout(focusT, 0, L).z).forEach((e) => {
        expect(e.front.trimAmount).toBeLessThan(0.25);
        expect(e.rear.trimAmount).toBeLessThan(0.25);
      });
    }
  });
});
