import { describe, expect, it } from "vitest";
import data from "../../../src/lens-data/nikon/NikonZ26f28.data.js";
import defaults from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { doLayout, anchorLayoutToCamera, conicPolySag } from "../../../src/optics/optics.js";
import { computeElementRenderDiagnostics } from "../../../src/optics/diagramGeometry.js";
import { resolveCompatibleGlass } from "../../../src/optics/glassCatalog.js";
import type { LensData } from "../../../src/types/optics.js";
const L = buildLens({ ...defaults, ...data } as LensData);

describe("Z26: WO2023190222 Example 1", () => {
  it("evaluates source equation (a) including the previously omitted high-order terms", () => {
    const h = 7;
    const r = -9.52831;
    const sourceSag =
      (h * h) / r / (1 + Math.sqrt(1 - (0.2964 * h * h) / (r * r))) -
      1.07e-4 * h ** 4 +
      1.09e-5 * h ** 6 -
      1.04e-7 * h ** 8 -
      6.74e-9 * h ** 10 +
      1.76e-10 * h ** 12 +
      8.59e-14 * h ** 14 -
      9.66e-14 * h ** 16 +
      1.31e-15 * h ** 18;
    expect(conicPolySag(h, r, data.asph["10A"])).toBeCloseTo(sourceSag, 10);
    for (const label of ["1A", "11A", "14A"] as const) expect(data.asph[label].K).toBe(0);
  });

  it("reproduces the source focal length and approximately 0.20 m near conjugate", () => {
    for (const station of [0, 1]) {
      const rays = [
        [1, 0],
        [0, 1],
      ];
      let index = 1,
        track = 0;
      for (const s of data.surfaces) {
        const gap = s.label === "16" ? data.var[16][station] : s.d;
        for (const ray of rays) {
          ray[1] -= ((s.nd - index) / s.R) * ray[0];
          ray[0] += (gap / s.nd) * ray[1];
        }
        index = s.nd;
        track += gap;
      }
      expect(-1 / rays[0][1]).toBeCloseTo(26.78, 2);
      if (station === 0) expect(Math.abs(rays[0][0])).toBeLessThan(0.00002);
      else expect((-rays[1][0] / rays[0][0] + track) / 1000).toBeCloseTo(data.closeFocusM, 10);
    }
    expect(data.nominalFno).toBe(2.9);
  });

  it("moves every refracting surface and the stop together by the source 5.113 mm", () => {
    const reference = doLayout(0, 0, L);
    for (const focusT of [0.5, 1]) {
      const current = anchorLayoutToCamera(reference, doLayout(focusT, 0, L));
      L.S.forEach((_, i) => expect(current.z[i] - reference.z[i]).toBeCloseTo(-5.113 * focusT, 8));
    }
  });

  it("retains the composite resin as a lens medium and renders its source-derived rim", () => {
    expect(data.elementCount).toBe(8);
    expect(data.groupCount).toBe(6);
    expect(data.elements).toHaveLength(9);
    for (const focusT of [0, 0.5, 1]) {
      for (const e of computeElementRenderDiagnostics(L, doLayout(focusT, 0, L).z)) {
        expect(e.front.trimAmount).toBeLessThan(0.25);
        expect(e.rear.trimAmount).toBeLessThan(0.25);
      }
    }
  });
  it("uses a coordinate-compatible aspherical glass counterpart", () => {
    const e = data.elements.find((e) => e.id === 6)!;
    expect(resolveCompatibleGlass(e.glass, e.nd, e.vd)?.name).toBe("M-BACD12");
  });
});
