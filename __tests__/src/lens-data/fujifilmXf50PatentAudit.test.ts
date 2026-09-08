import { describe, expect, it } from "vitest";
import data from "../../../src/lens-data/fujifilm/FujifilmXF50f1.data.js";
import defaults from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { anchorLayoutToCamera, doLayout } from "../../../src/optics/optics.js";
import { computeElementRenderDiagnostics } from "../../../src/optics/diagramGeometry.js";
import type { LensData } from "../../../src/types/optics.js";

const L = buildLens({ ...defaults, ...data } as LensData);

describe("Fujifilm XF50: US 2021/0231927 A1 Example 3", () => {
  it("recovers every Table 9 partial-dispersion ratio at the runtime g-line", () => {
    const theta = [
      0.5678, 0.54414, 0.54414, 0.65993, 0.55545, 0.63944, 0.63073, 0.60109, 0.57295, 0.60174, 0.57295, 0.58602,
    ];
    data.elements.forEach((element, i) => {
      const idx = L.S.findIndex((s) => s.elemId === element.id);
      const { fn } = L.indexByIdx[idx];
      expect((fn("V") - fn("B")) / (fn("B") - fn("R"))).toBeCloseTo(theta[i], 7);
    });
  });

  it("preserves source paraxial propagation when omitting the sensor plate", () => {
    const track = doLayout(0, 0, L).imgZ;
    expect(data.var["22"][0]).toBeCloseTo(17.27995569620253, 9);
    expect(data.closeFocusM * 1000 - track).toBeCloseTo(700 - 111.268, 6);
    expect(data.nominalFno).toBe(1.03);
    const reference = doLayout(0, 0, L);
    for (const focusT of [0.5, 1]) {
      const current = anchorLayoutToCamera(reference, doLayout(focusT, 0, L));
      L.S.forEach((s, i) => {
        expect(current.z[i] - reference.z[i], s.label).toBeCloseTo(i < 14 ? 0 : -4.441 * focusT, 8);
      });
    }
  });

  it("keeps Figure 7 aspheric rims and doublets free of hidden trimming", () => {
    for (const focusT of [0, 0.5, 1]) {
      for (const element of computeElementRenderDiagnostics(L, doLayout(focusT, 0, L).z)) {
        expect(element.front.trimAmount).toBeLessThan(0.25);
        expect(element.rear.trimAmount).toBeLessThan(0.25);
      }
    }
  });
});
