import { describe, expect, it } from "vitest";
import data from "../../../src/lens-data/nikon/Nikon85f14AIS.data.js";
import defaults from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { doLayout, anchorLayoutToCamera } from "../../../src/optics/optics.js";
import { computeElementRenderDiagnostics } from "../../../src/optics/diagramGeometry.js";
import type { LensData } from "../../../src/types/optics.js";
const L = buildLens({ ...defaults, ...data } as LensData);

describe("AI-S85: US4396256 Embodiment 1", () => {
  it("retains the normalized prescription scale and images the reconstructed 0.85m object", () => {
    expect(data.surfaces[0].R).toBeCloseTo(0.7816 * 85, 3);
    expect(data.surfaces.find((s) => s.label === "12")!.d).toBeCloseTo(0.5015 * 85, 2);
    const layout = doLayout(1, 0, L);
    let height = data.closeFocusM * 1000 - layout.imgZ,
      reducedAngle = 1,
      n = 1;
    for (const s of data.surfaces) {
      const gaps = data.var[s.label as unknown as keyof typeof data.var];
      const gap = gaps ? gaps[1] : s.d;
      reducedAngle -= ((s.nd - n) / s.R) * height;
      height += (gap / s.nd) * reducedAngle;
      n = s.nd;
    }
    expect(height).toBeCloseTo(0, 8);
  });

  it("represents both floating bodies separately and moves the front body farther", () => {
    const reference = doLayout(0, 0, L),
      last = L.S.findIndex((s) => s.label === "11");
    const rearTravel = data.var[12][1] - data.var[12][0];
    expect(data.groups[0].toSurface).toBe("10");
    expect(data.groups[1].fromSurface).toBe("11");
    for (const t of [0, 0.5, 1]) {
      const layout = anchorLayoutToCamera(reference, doLayout(t, 0, L));
      L.S.forEach((_, i) =>
        expect(layout.z[i] - reference.z[i]).toBeCloseTo(-(rearTravel + (i < last ? 2 : 0)) * t, 8),
      );
      for (const e of computeElementRenderDiagnostics(L, layout.z)) {
        expect(e.front.trimAmount).toBeLessThan(0.01);
        expect(e.rear.trimAmount).toBeLessThan(0.01);
      }
    }
  });

  it("reports each element's recalculated isolated-in-air focal length", () => {
    for (const e of data.elements) {
      const i = data.surfaces.findIndex((s) => s.elemId === e.id),
        a = data.surfaces[i],
        b = data.surfaces[i + 1];
      const f = 1 / ((e.nd - 1) * (1 / a.R - 1 / b.R + ((e.nd - 1) * a.d) / (e.nd * a.R * b.R)));
      expect(Math.abs(e.fl - f)).toBeLessThan(0.051);
    }
  });
});
