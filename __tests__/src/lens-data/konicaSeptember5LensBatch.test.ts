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
import {
  computeFieldGeometryAtState,
  doLayout,
  entrancePupilAtState,
  solveChiefRay,
  traceRay,
} from "../../../src/optics/optics.js";
import { computeGroupMovementProfile, getGroupMovementAvailability } from "../../../src/optics/groupMovement.js";
import { isPatentPublicationNumber, patentJurisdiction } from "../../../src/utils/catalog/patentRecords.js";
import type { LensData } from "../../../src/types/optics.js";

const lenses = [prime21, prime24, prime40, prime50, prime135, zoom3570];

describe("September 5 Konica patent-lens audit", () => {
  it("exposes all six patent links under the Japanese publication authority", () => {
    for (const lens of lenses) {
      expect(isPatentPublicationNumber(lens.patentNumber), lens.name).toBe(true);
      expect(patentJurisdiction(lens.patentNumber).code, lens.name).toBe("JP");
    }
  });

  it("orders zoom and focus travel in the fixed camera frame", () => {
    for (const data of lenses.slice(0, -1)) {
      const L = buildLens({ ...defaults, ...data } as LensData);
      expect(getGroupMovementAvailability(L)).toEqual({ focus: false, zoom: false, combined: false });
    }
    const L = buildLens({ ...defaults, ...zoom3570 } as LensData);
    for (const t of [0, 0.5, 1]) {
      for (const mode of ["focus", "zoom"] as const) {
        const profile = computeGroupMovementProfile(L, mode, { focusT: t, zoomT: t });
        const [front, rear] = profile.series;
        for (let i = 1; i < front.samples.length; i++) {
          const frontStep = front.samples[i].positionMm - front.samples[i - 1].positionMm;
          const rearStep = rear.samples[i].positionMm - rear.samples[i - 1].positionMm;
          if (mode === "focus") {
            expect(frontStep).toBeLessThan(0);
            expect(rearStep).toBeCloseTo(0, 10);
          } else {
            expect(frontStep).toBeGreaterThan(0);
            expect(rearStep).toBeLessThan(0);
            expect(front.samples[i].focalLengthMm!).toBeGreaterThan(front.samples[i - 1].focalLengthMm!);
          }
        }
      }
    }
    const wideFocus = computeGroupMovementProfile(L, "focus", { focusT: 0, zoomT: 0 });
    expect(wideFocus.series[0].samples.at(-1)!.shiftMm).toBeCloseTo(-5.49075346, 7);
    const infinityZoom = computeGroupMovementProfile(L, "zoom", { focusT: 0, zoomT: 0 });
    expect(infinityZoom.series[0].samples.at(-1)!.shiftMm).toBeCloseTo(13.21096193, 7);
    expect(infinityZoom.series[1].samples.at(-1)!.shiftMm).toBeCloseTo(-19.86903807, 7);
  });

  it("keeps the refined zoom rims clear throughout zoom and focus", () => {
    const L = buildLens({ ...defaults, ...zoom3570 } as LensData);
    for (const zoomT of [0, 0.25, 0.5, 0.75, 1]) {
      for (const focusT of [0, 0.5, 1]) {
        const { z } = doLayout(focusT, zoomT, L);
        const halfField = computeFieldGeometryAtState(focusT, zoomT, L).halfFieldDeg;
        const ep = entrancePupilAtState(L.stopPhysSD, focusT, zoomT, L);
        for (const field of [0, -0.6 * halfField, 0.6 * halfField]) {
          const chief = solveChiefRay(field, focusT, zoomT, L);
          expect(chief.status).toBe("converged");
          for (const fraction of [-0.75, -0.375, 0, 0.375, 0.75]) {
            const ray = traceRay(
              chief.yLaunch + fraction * ep.epSD,
              chief.uField,
              z,
              focusT,
              zoomT,
              L.stopPhysSD,
              true,
              L,
            );
            expect(ray.clipped, `zoom ${zoomT}, focus ${focusT}, field ${field}, pupil ${fraction}`).toBe(false);
          }
        }
      }
    }
  });

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
