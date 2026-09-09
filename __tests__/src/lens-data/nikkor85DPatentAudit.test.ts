import { describe, expect, it } from "vitest";
import data from "../../../src/lens-data/nikon/Nikon85f14D.data.js";
import defaults from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { doLayout, anchorLayoutToCamera } from "../../../src/optics/optics.js";
import { computeElementRenderDiagnostics } from "../../../src/optics/diagramGeometry.js";
import { resolveCompatibleGlass } from "../../../src/optics/glassCatalog.js";
import type { LensData } from "../../../src/types/optics.js";
const L = buildLens({ ...defaults, ...data } as LensData);

describe("85D candidate: US5640277 Example 2", () => {
  it("reproduces source magnification and its inferred near distance", () => {
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
      expect(track).toBeCloseTo(118.1188, 8);
      if (!station) expect(-1 / rays[0][1]).toBeCloseTo(85, 3);
      else {
        expect(rays[0][0]).toBeCloseTo(-0.1, 5);
        expect((-rays[1][0] / rays[0][0] + track) / 1000).toBeCloseTo(data.closeFocusM, 9);
      }
    }
    expect(L.FOPEN).toBe(1.43);
  });

  it("counts both split front singlets and the cemented pair, and computes their own powers", () => {
    expect(data.elementCount).toBe(10);
    expect(data.groupCount).toBe(9);
    for (const e of data.elements) {
      const i = data.surfaces.findIndex((s) => s.elemId === e.id);
      const a = data.surfaces[i],
        b = data.surfaces[i + 1];
      const power = (e.nd - 1) * (1 / a.R - 1 / b.R + ((e.nd - 1) * a.d) / (e.nd * a.R * b.R));
      expect(Math.abs(e.fl - 1 / power)).toBeLessThan(0.051);
      expect(resolveCompatibleGlass(e.glass, e.nd, e.vd)).toBeTruthy();
    }
  });

  it("moves only G2 including the stop by the source travel", () => {
    const reference = doLayout(0, 0, L);
    const first = L.S.findIndex((s) => s.label === "9"),
      last = L.S.findIndex((s) => s.label === "18");
    for (const t of [0, 0.5, 1]) {
      const layout = anchorLayoutToCamera(reference, doLayout(t, 0, L));
      L.S.forEach((_, i) =>
        expect(layout.z[i] - reference.z[i]).toBeCloseTo(i >= first && i <= last ? -10.3438 * t : 0, 8),
      );
      for (const e of computeElementRenderDiagnostics(L, layout.z)) {
        expect(e.front.trimAmount).toBeLessThan(0.01);
        expect(e.rear.trimAmount).toBeLessThan(0.01);
      }
    }
  });
});
