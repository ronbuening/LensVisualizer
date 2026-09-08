import { describe, expect, it } from "vitest";
import data from "../../../src/lens-data/nikon/NikonNikkorAuto24f28.data.js";
import defaults from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { anchorLayoutToCamera, doLayout } from "../../../src/optics/optics.js";
import { computeElementRenderDiagnostics } from "../../../src/optics/diagramGeometry.js";
import type { LensData } from "../../../src/types/optics.js";

const L = buildLens({ ...defaults, ...data } as LensData);

describe("Nikkor24: US3622227 CRC model", () => {
  it("images the labeled close object distance in the inferred paraxial unit model", () => {
    const close = doLayout(1, 0, L);
    // Independent reduced-angle propagation, including the finite object leg.
    let height = data.closeFocusM * 1000 - close.imgZ;
    let reducedAngle = 1;
    let index = 1;
    for (const s of data.surfaces) {
      reducedAngle -= ((s.nd - index) / s.R) * height;
      index = s.nd;
      const gap = s.label === "16" ? data.var["16"][1] : s.label === "11" ? data.var["11"][1] : s.d;
      height += (gap / index) * reducedAngle;
    }
    expect(height).toBeCloseTo(0, 8);
  });

  it("moves the rear CRC assembly farther than the front assembly", () => {
    const reference = doLayout(0, 0, L);
    const extension = data.var["16"][1] - data.var["16"][0];
    for (const focusT of [0.5, 1]) {
      const current = anchorLayoutToCamera(reference, doLayout(focusT, 0, L));
      L.S.forEach((s, i) => {
        const contraction = data.var["11"][0] - data.var["11"][1];
        const travel = i <= L.labelIdx["11"] ? extension - contraction : extension;
        expect(current.z[i] - reference.z[i], s.label).toBeCloseTo(-travel * focusT, 8);
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
