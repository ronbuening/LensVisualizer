import { describe, expect, it } from "vitest";
import data from "../../../src/lens-data/nikon/NikonZ85f18S.data.js";
import defaults from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { doLayout, anchorLayoutToCamera } from "../../../src/optics/optics.js";
import { computeElementRenderDiagnostics } from "../../../src/optics/diagramGeometry.js";
import { resolveCompatibleGlass } from "../../../src/optics/glassCatalog.js";
import type { LensData } from "../../../src/types/optics.js";
const L = buildLens({ ...defaults, ...data } as LensData);

describe("Z85: JP2020173366 Example 3", () => {
  it("omits PT while preserving its reduced-angle transfer distance", () => {
    expect(data.surfaces).toHaveLength(21);
    expect(data.surfaces.at(-1)!.label).toBe("21");
    expect(data.surfaces.at(-1)!.d).toBeCloseTo(11 + 1.6 / 1.5168 + 0.92, 10);
    for (const t of [0, 1]) {
      const rays = [
        [1, 0],
        [0, 1],
      ];
      let n = 1,
        track = 0;
      for (const s of data.surfaces) {
        const gap = data.var[s.label as unknown as keyof typeof data.var]?.[t] ?? s.d;
        for (const ray of rays) {
          ray[1] -= ((s.nd - n) / s.R) * ray[0];
          ray[0] += (gap / s.nd) * ray[1];
        }
        track += gap;
        n = s.nd;
      }
      if (!t) {
        // Published FL83 and TL111.35 conflict with the printed rows; do not hide that discrepancy.
        expect(-1 / rays[0][1]).toBeCloseTo(82.222194, 5);
        expect(rays[0][0]).toBeCloseTo(0, 4);
      } else expect((-rays[1][0] / rays[0][0] + track) / 1000).toBeCloseTo(0.802896514, 8);
    }
    expect(L.FOPEN).toBe(1.85);
    expect(data.closeFocusM).toBe(0.8);
    expect(data.varLabels.at(-1)).toEqual(["13", "D13"]);
  });

  it("preserves opposed source motion and untrimmed figure rims", () => {
    const reference = doLayout(0, 0, L);
    for (const t of [0, 0.5, 1]) {
      const layout = anchorLayoutToCamera(reference, doLayout(t, 0, L));
      L.S.forEach((s, i) => {
        const label = Number(s.label);
        const shift = label >= 8 && label <= 10 ? 3.839 : label >= 12 && label <= 13 ? -6.762 : 0;
        // Source d7+d10 differs by 0.001mm; permit only that published residual.
        expect(Math.abs(layout.z[i] - reference.z[i] - shift * t)).toBeLessThan(0.00101);
      });
      for (const e of computeElementRenderDiagnostics(L, layout.z)) {
        expect(e.front.trimAmount).toBeLessThan(0.01);
        expect(e.rear.trimAmount).toBeLessThan(0.01);
      }
    }
  });

  it("keeps catalog proxies compatible without claiming source APD", () => {
    for (const e of data.elements) {
      expect(resolveCompatibleGlass(e.glass, e.nd, e.vd)).toBeTruthy();
      expect(e.apd).toBe(false);
      const i = data.surfaces.findIndex((s) => s.elemId === e.id),
        a = data.surfaces[i],
        b = data.surfaces[i + 1];
      const f = 1 / ((e.nd - 1) * (1 / a.R - 1 / b.R + ((e.nd - 1) * a.d) / (e.nd * a.R * b.R)));
      expect(Math.abs(e.fl - f)).toBeLessThan(0.051);
    }
  });
});
