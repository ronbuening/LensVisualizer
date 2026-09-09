import { describe, expect, it } from "vitest";
import data from "../../../src/lens-data/nikon/NikonZ2470f28.data.js";
import validateLensData from "../../../src/optics/validateLensData.js";
import defaults from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { doLayout, anchorLayoutToCamera, formatDist } from "../../../src/optics/optics.js";
import { computeElementRenderDiagnostics } from "../../../src/optics/diagramGeometry.js";
import { computeFocusPair } from "../../../src/comparison/comparisonSliders.js";
import type { LensData } from "../../../src/types/optics.js";

const L = buildLens({ ...defaults, ...data } as LensData);

describe("NIKKOR Z 24–70: WO2020136749 Example 1", () => {
  it("reproduces all three infinity focal lengths and the near-state conjugates", () => {
    const gaps = data.var as Record<string, number[][]>;
    for (let station = 0; station < 3; station++) {
      for (const focus of [0, 1]) {
        const rays = [
          [1, 0],
          [0, 1],
        ];
        let index = 1;
        let track = 0;
        for (const s of data.surfaces) {
          const gap = gaps[s.label]?.[station][focus] ?? s.d;
          for (const ray of rays) {
            ray[1] -= ((s.nd - index) / s.R) * ray[0];
            ray[0] += (gap / s.nd) * ray[1];
          }
          index = s.nd;
          track += gap;
        }
        if (focus === 0) {
          expect(Math.abs(-1 / rays[0][1] - data.zoomPositions[station])).toBeLessThan(0.06);
          expect(Math.abs(rays[0][0])).toBeLessThan(0.0002);
        } else {
          expect(Math.abs(rays[0][0] + 1 / 30)).toBeLessThan(0.0001);
          expect((-rays[1][0] / rays[0][0] + track) / 1000).toBeCloseTo(data.zoomCloseFocusM[station], 8);
        }
      }
    }
  });

  it("rejects malformed zoom endpoint and aperture declarations", () => {
    const base = { ...defaults, ...data };
    for (const zoomCloseFocusM of [[1], [1, -1, 2], [1, Infinity, 2]]) {
      expect(validateLensData({ ...base, zoomCloseFocusM }).some((error) => error.includes("zoomCloseFocusM"))).toBe(
        true,
      );
    }
    expect(
      validateLensData({ ...base, zoomApertureModel: "unknown" }).some((error) => error.includes("zoomApertureModel")),
    ).toBe(true);
  });

  it("keeps five groups fixed during focusing and moves G5 and G6 objectward", () => {
    for (const zoomT of [0, 0.5, 1]) {
      const reference = doLayout(0, zoomT, L);
      const close = anchorLayoutToCamera(reference, doLayout(1, zoomT, L));
      L.S.forEach((s, i) => {
        const movement = close.z[i] - reference.z[i];
        if (["22", "23", "24", "25", "26", "27A"].includes(s.label)) expect(movement).toBeLessThan(0);
        else expect(Math.abs(movement)).toBeLessThan(0.0011);
      });
    }
  });

  it("uses current zoom distances in labels and shared comparison focus", () => {
    expect(formatDist(1, L, 0)).toBe("84 cm");
    expect(formatDist(1, L, 0.5)).toBe("1.58 m");
    expect(formatDist(1, L, 1)).toBe("2.10 m");
    const prime = { ...L, isZoom: false, closeFocusM: 1 };
    const pair = computeFocusPair(0.5, L, prime, 1, 0);
    expect(pair.focusA).toBe(1);
    expect(pair.focusB).toBe(0.5);
    const unclamped = computeFocusPair(0.2, L, prime, 1, 0);
    expect(formatDist(unclamped.focusA, L, 1)).toBe(formatDist(unclamped.focusB, prime));
  });

  it("renders source spherical-base aspheres and revised rims across zoom and focus", () => {
    for (const asphere of Object.values(data.asph)) expect(asphere.K).toBe(0);
    for (const zoomT of [0, 0.25, 0.5, 0.75, 1]) {
      for (const focusT of [0, 0.5, 1]) {
        const layout = doLayout(focusT, zoomT, L);
        for (const element of computeElementRenderDiagnostics(L, layout.z)) {
          expect(element.front.trimAmount).toBeLessThan(0.25);
          expect(element.rear.trimAmount).toBeLessThan(0.25);
        }
      }
    }
  });
});
