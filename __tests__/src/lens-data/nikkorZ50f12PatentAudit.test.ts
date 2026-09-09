import { describe, expect, it } from "vitest";
import data from "../../../src/lens-data/nikon/NikonNikkorZ50f12.data.js";
import defaults from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { anchorLayoutToCamera, conicPolySag, doLayout } from "../../../src/optics/optics.js";
import { computeElementRenderDiagnostics } from "../../../src/optics/diagramGeometry.js";
import { resolveCompatibleGlass } from "../../../src/optics/glassCatalog.js";
import type { LensData } from "../../../src/types/optics.js";

const L = buildLens({ ...defaults, ...data } as LensData);

describe("Z 50mm f1.2: WO2021241230A1 Example 1", () => {
  it("reproduces the printed kappa equation with every published polynomial term", () => {
    // Independent evaluation of equation (a), p26, and Table 1, p30 at h=18 mm.
    expect(conicPolySag(18, -165, data.asph["24A"])).toBeCloseTo(-2.13106971132985, 10);
    expect(conicPolySag(18, 71, data.asph["25A"])).toBeCloseTo(1.00564682664984, 10);
    expect(conicPolySag(18, -64.58764, data.asph["32A"])).toBeCloseTo(-2.95639165022963, 10);
  });

  it("preserves the source object leg after the sensor filter is omitted", () => {
    const close = doLayout(1, 0, L);
    expect(data.closeFocusM * 1000 - close.imgZ).toBeCloseTo(467.5, 8);
    expect(data.var[33][0]).toBeCloseTo(10.81 + 1.6 / 1.5168 + 0.702, 10);
    let height = 467.5;
    let reducedAngle = 1;
    let index = 1;
    for (const s of data.surfaces) {
      reducedAngle -= ((s.nd - index) / s.R) * height;
      index = s.nd;
      const variable = (data.var as Record<string, readonly number[]>)[s.label];
      height += ((variable?.[1] ?? s.d) / index) * reducedAngle;
    }
    // Published radii/gaps are rounded; keep the station instead of fitting it.
    expect(Math.abs(height)).toBeLessThan(0.005);
  });

  it("keeps the two source focusing movements distinct in a fixed camera frame", () => {
    const reference = doLayout(0, 0, L);
    for (const t of [0.5, 1]) {
      const current = anchorLayoutToCamera(reference, doLayout(t, 0, L));
      for (const [label, travel] of [
        ["1", 0],
        ["19", -7.727],
        ["23", -6.143],
        ["27", 0],
      ] as const) {
        const i = L.S.findIndex((s) => s.label === label);
        // Source d36 shrinks 0.001 mm, shifting all groups relative to the image.
        expect(current.z[i] - reference.z[i]).toBeCloseTo((travel + 0.001) * t, 8);
      }
    }
  });

  it("uses compatible catalog counterparts without the former FCD505 mismatch", () => {
    for (const id of [4, 5, 6, 7, 8, 11, 12]) {
      const element = data.elements.find((e) => e.id === id)!;
      expect(resolveCompatibleGlass(element.glass, element.nd, element.vd)?.name).toBe(
        id === 8 || id === 11 ? "J-PSKH1" : "J-PSKH4",
      );
    }
  });

  it("renders constrained figure rims without hidden trimming", () => {
    for (const t of [0, 0.5, 1]) {
      for (const element of computeElementRenderDiagnostics(L, doLayout(t, 0, L).z)) {
        expect(element.front.trimAmount).toBeLessThan(0.25);
        expect(element.rear.trimAmount).toBeLessThan(0.25);
      }
    }
  });
});
