import { describe, expect, it } from "vitest";
import data from "../../../src/lens-data/nikon/NikonNikkor85f14G.data.js";
import defaults from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { doLayout, anchorLayoutToCamera } from "../../../src/optics/optics.js";
import { computeElementRenderDiagnostics } from "../../../src/optics/diagramGeometry.js";
import { resolveCompatibleGlass } from "../../../src/optics/glassCatalog.js";
import type { LensData } from "../../../src/types/optics.js";
const L = buildLens({ ...defaults, ...data } as LensData);

describe("Nikkor85G: US8767319 Example 1", () => {
  it("reproduces the published infinity EFL and near magnification", () => {
    for (const station of [0, 1]) {
      const rays = [
        [1, 0],
        [0, 1],
      ];
      let index = 1,
        track = 0;
      for (const s of data.surfaces) {
        const gaps = data.var[s.label as unknown as keyof typeof data.var];
        const gap = gaps ? gaps[station] : s.d;
        for (const ray of rays) {
          ray[1] -= ((s.nd - index) / s.R) * ray[0];
          ray[0] += (gap / s.nd) * ray[1];
        }
        index = s.nd;
        track += gap;
      }
      expect(track).toBeCloseTo(126.37, 8);
      if (!station) expect(-1 / rays[0][1]).toBeCloseTo(85, 3);
      else {
        expect(rays[0][0]).toBeCloseTo(-0.1175, 4);
        expect(Math.abs(-rays[1][0] / rays[0][0] - 719)).toBeLessThan(0.06);
      }
    }
    expect(data.closeFocusM).toBeCloseTo((719 + 126.37) / 1000, 9);
    expect(L.FOPEN).toBe(1.45);
  });

  it("moves Gr2 including the stop and fixes both outer groups", () => {
    const reference = doLayout(0, 0, L);
    const first = L.S.findIndex((s) => s.label === "7");
    const last = L.S.findIndex((s) => s.label === "15");
    for (const t of [0.5, 1]) {
      const layout = anchorLayoutToCamera(reference, doLayout(t, 0, L));
      L.S.forEach((_, i) =>
        expect(layout.z[i] - reference.z[i]).toBeCloseTo(i >= first && i <= last ? -9.6 * t : 0, 8),
      );
    }
  });

  it("retains compatible inferred glasses and untrimmed working apertures", () => {
    for (const e of data.elements) expect(resolveCompatibleGlass(e.glass, e.nd, e.vd)).toBeTruthy();
    for (const t of [0, 0.5, 1]) {
      for (const e of computeElementRenderDiagnostics(L, doLayout(t, 0, L).z)) {
        expect(e.front.trimAmount).toBeLessThan(0.01);
        expect(e.rear.trimAmount).toBeLessThan(0.01);
      }
    }
  });
});
