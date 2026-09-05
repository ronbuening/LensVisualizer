import { describe, expect, it } from "vitest";
import prime21 from "../../../src/lens-data/konica/KonicaHexanonAR21mmf28.data.js";
import prime24 from "../../../src/lens-data/konica/KonicaHexanonAR24mmf28.data.js";
import prime40 from "../../../src/lens-data/konica/KonicaHexanonAR40mmf18.data.js";
import prime50 from "../../../src/lens-data/konica/KonicaHexanonAR50mmf18.data.js";
import prime135 from "../../../src/lens-data/konica/KonicaHexanonAR135mmf35.data.js";
import zoom3570 from "../../../src/lens-data/konica/KonicaZoomHexanonAR3570mmf4.data.js";
import defaults from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { resolveCompatibleGlass } from "../../../src/optics/glassCatalog.js";
import { doLayout, entrancePupilAtState, solveChiefRay, traceRay } from "../../../src/optics/optics.js";
import type { LensData } from "../../../src/types/optics.js";

const lenses = [prime21, prime24, prime40, prime50, prime135, zoom3570];

describe("September 5 Konica patent-lens audit", () => {
  it("resolves every physical glass without changing the patent coordinates", () => {
    for (const lens of lenses) {
      for (const element of lens.elements) {
        expect(
          resolveCompatibleGlass(element.glass, element.nd, element.vd),
          `${lens.name}: ${element.name}`,
        ).not.toBeNull();
      }
    }
    expect(prime24.elements.filter(({ id }) => [2, 3, 4, 7].includes(id)).map(({ nd, vd }) => [nd, vd])).toEqual([
      [1.58913, 61.1],
      [1.58913, 61.1],
      [1.7847, 26.2],
      [1.6516, 58.6],
    ]);
    const denseFlint = prime24.elements[3];
    expect(resolveCompatibleGlass(denseFlint.glass, denseFlint.nd, denseFlint.vd)?.name).toBe("PBH23");
  });

  it("keeps the figure-refined singlets clear for the default off-axis fan", () => {
    for (const [data, halfField] of [
      [prime40, 28],
      [prime135, 9],
    ] as const) {
      const L = buildLens({ ...defaults, ...data } as LensData);
      const { z } = doLayout(0, 0, L);
      const ep = entrancePupilAtState(L.stopPhysSD, 0, 0, L);
      for (const field of [0, -0.6 * halfField, 0.6 * halfField]) {
        const chief = solveChiefRay(field, 0, 0, L);
        expect(chief.status).toBe("converged");
        for (const fraction of [-0.75, -0.375, 0, 0.375, 0.75]) {
          const ray = traceRay(chief.yLaunch + fraction * ep.epSD, chief.uField, z, 0, 0, L.stopPhysSD, true, L);
          expect(ray.clipped, `${data.name}: field ${field}, pupil ${fraction}`).toBe(false);
        }
      }
    }
  });
});
