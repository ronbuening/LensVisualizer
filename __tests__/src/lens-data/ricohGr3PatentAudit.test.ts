import { describe, expect, it } from "vitest";
import data from "../../../src/lens-data/ricoh/RicohGR328f28.data.js";
import defaults from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { anchorLayoutToCamera, doLayout } from "../../../src/optics/optics.js";
import { computeElementRenderDiagnostics } from "../../../src/optics/diagramGeometry.js";
import type { LensData } from "../../../src/types/optics.js";

const L = buildLens({ ...defaults, ...data } as LensData);

describe("Ricoh GR III: US20190154946A1 Example 5", () => {
  it("uses the legible front-asphere exponent and labels the inferred filter gap", () => {
    expect(data.asph["2A"].A6).toBe(5.30767e-7);
    expect(data.var["11A"][0]).toBeCloseTo(12.807 + 1.4 / 1.51633 + 0.7, 10);
    expect(data.focusDescription).toContain("inferred");
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

  it("moves every optical surface and stop equally toward the object", () => {
    const reference = doLayout(0, 0, L);
    const extension = data.var["11A"][1] - data.var["11A"][0];
    for (const focusT of [0.5, 1]) {
      const current = anchorLayoutToCamera(reference, doLayout(focusT, 0, L));
      L.S.forEach((s, i) => {
        expect(current.z[i] - reference.z[i], s.label).toBeCloseTo(-extension * focusT, 8);
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
