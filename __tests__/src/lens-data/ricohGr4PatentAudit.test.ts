import { describe, expect, it } from "vitest";
import data from "../../../src/lens-data/ricoh/RicohGR428f28.data.js";
import defaults from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { anchorLayoutToCamera, doLayout } from "../../../src/optics/optics.js";
import { computeElementRenderDiagnostics } from "../../../src/optics/diagramGeometry.js";
import type { LensData } from "../../../src/types/optics.js";

const L = buildLens({ ...defaults, ...data } as LensData);

describe("Ricoh GR IV: JP2025069516A Example 2", () => {
  it("retains the source conic and equivalent plate propagation", () => {
    const rear = data.surfaces.find((s) => s.label === "13A")!;
    expect(rear.d).toBeCloseTo(6.976 + 0.77 / 1.562 + 0.3 + 0.7 / 1.5 + 0.7, 10);
    expect(data.nominalFno).toBe(data.apertureDesign);
    expect(data.asph["12A"].K).toBe(8.82985);
  });

  it("images the labeled close object distance in the inferred paraxial unit model", () => {
    const close = doLayout(1, 0, L);
    // Independent reduced-angle propagation, including the finite object leg.
    let height = data.closeFocusM * 1000 - close.imgZ;
    let reducedAngle = 1;
    let index = 1;
    for (const s of data.surfaces) {
      reducedAngle -= ((s.nd - index) / s.R) * height;
      index = s.nd;
      const gap = s.label === "11A" ? data.var["11A"][1] : s.d;
      height += (gap / index) * reducedAngle;
    }
    expect(height).toBeCloseTo(0, 8);
  });

  it("moves G1/G2 and the stop toward the object while G3 stays fixed", () => {
    const reference = doLayout(0, 0, L);
    const extension = data.var["11A"][1] - data.var["11A"][0];
    for (const focusT of [0.5, 1]) {
      const current = anchorLayoutToCamera(reference, doLayout(focusT, 0, L));
      L.S.forEach((s, i) => {
        expect(current.z[i] - reference.z[i], s.label).toBeCloseTo(i < 11 ? -extension * focusT : 0, 8);
      });
    }
  });

  it("renders the inferred patent rims without hidden trimming", () => {
    for (const focusT of [0, 0.5, 1]) {
      for (const element of computeElementRenderDiagnostics(L, doLayout(focusT, 0, L).z)) {
        expect(element.front.trimAmount).toBeLessThan(0.25);
        expect(element.rear.trimAmount).toBeLessThan(0.25);
      }
    }
  });
});
