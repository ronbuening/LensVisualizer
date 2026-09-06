import { describe, expect, it } from "vitest";
import ef35 from "../../../src/lens-data/canon/CanonEF35mmf2ISUSM.data.js";
import ef70 from "../../../src/lens-data/canon/CanonEF70300mmf456ISIIUSM.data.js";
import efm from "../../../src/lens-data/canon/CanonEFM1545mmf3563ISSTM.data.js";
import efs from "../../../src/lens-data/canon/CanonEFS18135mmf3556ISSTM.data.js";
import g3 from "../../../src/lens-data/canon/CanonPowerShotG3X.data.js";
import g9 from "../../../src/lens-data/canon/CanonPowerShotG9X.data.js";
import defaults from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { computeElementRenderDiagnostics } from "../../../src/optics/diagramGeometry.js";
import { computeGroupMovementProfile, getGroupMovementAvailability } from "../../../src/optics/groupMovement.js";
import { doLayout, solveChiefRay, traceRay } from "../../../src/optics/optics.js";
import type { LensData, LensDataInput } from "../../../src/types/optics.js";

function runtime(data: LensDataInput) {
  return buildLens({ ...defaults, ...data } as LensData);
}

// Camera-fixed shifts from the published infinity gap tables, in object-to-image group order.
// Positive is imageward. The middle rows preserve reversals hidden by endpoint-only checks.
const zoomCases: [LensDataInput, number[][]][] = [
  [
    ef70,
    [
      [-39.83, -0.01, -0.01, -11.68, -23.99, -30.11, 0],
      [-70, 0, 0, -26.78, -42.26, -51.69, 0],
    ],
  ],
  [
    efm,
    [
      [5.28, -12.11, -12.11, -10.96, -12.11, 0],
      [-2.17, -25, -25, -23.46, -25, 0],
    ],
  ],
  [
    efs,
    [
      [-20.99, 0.7, -17.46, -16.02, -17.46, -20.29],
      [-49.44, -8.24, -32.18, -26.98, -32.18, -36.1],
    ],
  ],
  [
    g3,
    [
      [-14.93, 1.18, -11.27, -5.79, -11.27, -15.03],
      [-51.1, 6.95, -21.03, -12.38, -21.03, -24.79],
    ],
  ],
  [
    g9,
    [
      [2.63, -9.36, 1.76],
      [-1.61, -18.74, 2.4],
    ],
  ],
];

describe("September Canon patent and diagram audit", () => {
  it("preserves published zoom station order and camera-fixed travel", () => {
    for (const [data, rows] of zoomCases) {
      const L = runtime(data);
      for (const [j, zoomT] of [0.5, 1].entries()) {
        const shifts = computeGroupMovementProfile(L, "zoom", { focusT: 0, zoomT }).series;
        expect(shifts).toHaveLength(rows[j].length);
        shifts.forEach((series, i) =>
          expect(series.currentPoint.shiftMm, `${data.key} ${series.group.label}`).toBeCloseTo(rows[j][i], 2),
        );
      }
    }
  });

  it("moves only the designated focus unit in the source direction", () => {
    const cases: [LensDataInput, number, number][] = [
      [ef35, 1, -1],
      [ef70, 5, 1],
      [efm, 3, 1],
      [efs, 3, -1],
    ];
    for (const [data, movingIndex, sign] of cases) {
      const L = runtime(data);
      for (const zoomT of [0, 0.5, 1]) {
        const profile = computeGroupMovementProfile(L, "focus", { focusT: 1, zoomT });
        profile.series.forEach((series, i) => {
          if (i === movingIndex) expect(series.currentPoint.shiftMm * sign).toBeGreaterThan(0.4);
          else expect(series.currentPoint.shiftMm).toBeCloseTo(0, 8);
        });
      }
    }
    for (const data of [g3, g9]) expect(getGroupMovementAvailability(runtime(data)).focus).toBe(false);
  });

  it("uses the G9 X published partial dispersion at the violet line", () => {
    const L = runtime(g9);
    for (const [id, pgf] of [
      [1, 0.5769],
      [3, 0.5694],
      [4, 0.582],
      [5, 0.6176],
      [7, 0.582],
    ]) {
      const index = L.S.findIndex((surface) => surface.elemId === id);
      const dispersion = L.indexByIdx[index];
      expect(dispersion).toBeDefined();
      expect((dispersion.fn("V") - dispersion.fn("B")) / (dispersion.fn("B") - dispersion.fn("R"))).toBeCloseTo(
        pgf,
        10,
      );
    }
    expect(g9.elements[4].apd).toBe("patent");
    for (const element of [ef70.elements[2], efs.elements[1], g3.elements[1], g3.elements[2]])
      expect(element.apd).toBe("inferred");
  });

  it("keeps the revised EF 35mm default field fan clear and avoids hidden rim trims", () => {
    const L = runtime(ef35);
    const { z } = doLayout(0, 0, L);
    for (const field of [0, 0.6 * L.halfField]) {
      const chief = solveChiefRay(field, 0, 0, L);
      for (const fraction of [-0.75, 0, 0.75]) {
        expect(
          traceRay(chief.yLaunch + fraction * L.EP.epSD, chief.uField, z, 0, 0, L.stopPhysSD, true, L).clipped,
        ).toBe(false);
      }
    }
    for (const data of [ef35, ...zoomCases.map(([data]) => data)]) {
      const model = runtime(data);
      for (const focusT of [0, 0.5, 1])
        for (const zoomT of [0, 0.25, 0.5, 0.75, 1]) {
          for (const element of computeElementRenderDiagnostics(model, doLayout(focusT, zoomT, model).z)) {
            expect(element.front.trimAmount).toBeLessThan(0.25);
            expect(element.rear.trimAmount).toBeLessThan(0.25);
          }
        }
    }
  });
});
