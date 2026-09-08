import { describe, expect, it } from "vitest";
import data from "../../../src/lens-data/carl-zeiss-jena/ZeissSonnar50f15.data.js";
import defaults from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { anchorLayoutToCamera, doLayout, traceRay } from "../../../src/optics/optics.js";
import { computeElementRenderDiagnostics } from "../../../src/optics/diagramGeometry.js";
import type { LensData } from "../../../src/types/optics.js";

const L = buildLens({ ...defaults, ...data } as LensData);

describe("Sonnar f1.5: US1975678 image plane", () => {
  it("images the labeled close object distance in the inferred paraxial unit model", () => {
    const close = doLayout(1, 0, L);
    // Independent reduced-angle propagation, including the finite object leg.
    let height = data.closeFocusM * 1000 - close.imgZ;
    let reducedAngle = 1;
    let index = 1;
    for (const s of data.surfaces) {
      reducedAngle -= ((s.nd - index) / s.R) * height;
      index = s.nd;
      const gap = s.label === "10" ? data.var["10"][1] : s.d;
      height += (gap / index) * reducedAngle;
    }
    expect(height).toBeCloseTo(0, 8);
  });

  it("moves every optical surface and stop equally toward the object", () => {
    const reference = doLayout(0, 0, L);
    const extension = data.var["10"][1] - data.var["10"][0];
    for (const focusT of [0.5, 1]) {
      const current = anchorLayoutToCamera(reference, doLayout(focusT, 0, L));
      L.S.forEach((s, i) => {
        expect(current.z[i] - reference.z[i], s.label).toBeCloseTo(-extension * focusT, 8);
      });
    }
  });

  it("keeps the inferred stop ahead of the curved exit and transmits interior pupil rays", () => {
    const rear = data.surfaces.find((s) => s.label === "6")!;
    const rimSag = rear.R - Math.sqrt(rear.R ** 2 - rear.sd ** 2);
    expect(rear.d).toBeGreaterThan(rimSag);
    for (const fraction of [0.25, 0.5, 0.75]) {
      const ray = traceRay(L.EP.epSD * fraction, 0, doLayout(0, 0, L).z, 0, 0, L.stopPhysSD, false, L);
      expect(ray.clipped).toBe(false);
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
