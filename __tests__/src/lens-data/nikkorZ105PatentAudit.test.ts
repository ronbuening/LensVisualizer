import { describe, expect, it } from "vitest";
import data from "../../../src/lens-data/nikon/NikonZ105f28.data.js";
import defaults from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { doLayout, anchorLayoutToCamera, formatDist } from "../../../src/optics/optics.js";
import { normalLinePgF } from "../../../src/optics/dispersion.js";
import { computeElementRenderDiagnostics } from "../../../src/optics/diagramGeometry.js";
import type { LensData } from "../../../src/types/optics.js";
const L = buildLens({ ...defaults, ...data } as LensData);

describe("NIKKOR Z MC 105: WO2022097401 Example 1", () => {
  it("reproduces the source half-life-size and life-size conjugates", () => {
    const gaps = data.var as Record<string, number[]>;
    for (const station of [1, 2]) {
      const rays = [
        [1, 0],
        [0, 1],
      ];
      let index = 1;
      let track = 0;
      for (const s of data.surfaces) {
        const gap = gaps[s.label]?.[station] ?? s.d;
        for (const ray of rays) {
          ray[1] -= ((s.nd - index) / s.R) * ray[0];
          ray[0] += (gap / s.nd) * ray[1];
        }
        index = s.nd;
        track += gap;
      }
      expect(rays[0][0]).toBeCloseTo(station === 1 ? -0.5 : -1, 4);
      const sourceD0 = station === 1 ? 226.746 : 138.188;
      expect(Math.abs(-rays[1][0] / rays[0][0] - sourceD0)).toBeLessThan(0.003);
      expect(data.closeFocusM / data.focusPositions[station]).toBeCloseTo((sourceD0 + track) / 1000, 8);
    }
    expect(formatDist(1, L)).toBe("29 cm");
  });

  it("preserves measured partial dispersion across the normal-line conversion", () => {
    for (const id of [2, 9]) {
      const e = data.elements.find((element) => element.id === id)!;
      expect(normalLinePgF(e.vd, e.dPgF)).toBeCloseTo(0.6103, 8);
    }
    expect(data.elements.find((e) => e.id === 14)?.apd).toBe(false);
  });

  it("keeps G1, stop and G4 fixed while G2 and G3 approach the stop", () => {
    const reference = doLayout(0, 0, L);
    for (const focusT of data.focusPositions.slice(1)) {
      const current = anchorLayoutToCamera(reference, doLayout(focusT, 0, L));
      L.S.forEach((s, i) => {
        const movement = current.z[i] - reference.z[i];
        if (["8", "9", "10", "11", "12"].includes(s.label)) expect(movement).toBeGreaterThan(0);
        else if (["14", "15", "16", "17", "18"].includes(s.label)) expect(movement).toBeLessThan(0);
        else expect(Math.abs(movement)).toBeLessThan(0.0011);
      });
    }
  });

  it("renders the source-derived rims without hidden clipping through macro focus", () => {
    for (const focusT of [0, 0.25, 0.5, ...data.focusPositions.slice(1)]) {
      const layout = doLayout(focusT, 0, L);
      for (const e of computeElementRenderDiagnostics(L, layout.z)) {
        expect(e.front.trimAmount).toBeLessThan(0.25);
        expect(e.rear.trimAmount).toBeLessThan(0.25);
      }
    }
  });
});
