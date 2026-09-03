import { describe, expect, it } from "vitest";
import { createPerspectivePose } from "../../../../src/optics/perspective/pose.js";
import { computePerspectiveMovementViewportExtent } from "../../../../src/optics/perspective/viewport.js";
import type { PerspectiveControlConfig } from "../../../../src/types/optics.js";

const CONFIG: PerspectiveControlConfig = {
  shiftRangeMm: [-10, 10],
  tiltRangeDeg: [-5, 5],
  tiltPivot: {
    frame: "camera",
    basis: "rear-vertex-fallback",
    zOffsetFromImagePlaneMm: -20,
  },
};

describe("computePerspectiveMovementViewportExtent", () => {
  it("contains every authored shift/tilt extreme while leaving the sensor out of the moved envelope", () => {
    const imagePlaneZ = 100;
    const extent = computePerspectiveMovementViewportExtent({
      zPos: [5, 80],
      maxSemiDiameterMm: 20,
      rayLeadMm: 10,
      imagePlaneZ,
      config: CONFIG,
    });

    expect(extent).not.toBeNull();
    for (const shiftMm of [-10, 0, 10]) {
      for (const tiltDeg of [-5, 0, 5]) {
        const pose = createPerspectivePose({
          movement: { shiftMm, tiltDeg },
          sensorPlane: { point: [0, 0, imagePlaneZ], normal: [0, 0, 1], label: "IMG" },
          tiltPivot: CONFIG.tiltPivot,
        });
        for (const z of [-5, 80]) {
          for (const y of [-20, 20]) {
            const point = pose.lensToCameraPoint([0, y, z]);
            expect(point[2]).toBeGreaterThanOrEqual(extent!.z.min - 1e-12);
            expect(point[2]).toBeLessThanOrEqual(extent!.z.max + 1e-12);
            expect(point[1]).toBeGreaterThanOrEqual(extent!.y.min - 1e-12);
            expect(point[1]).toBeLessThanOrEqual(extent!.y.max + 1e-12);
          }
        }
      }
    }

    expect(extent!.z.max).toBeLessThan(imagePlaneZ);
  });

  it("omits a perspective envelope when the lens has no movement config", () => {
    expect(
      computePerspectiveMovementViewportExtent({
        zPos: [5, 80],
        maxSemiDiameterMm: 20,
        imagePlaneZ: 100,
        config: null,
      }),
    ).toBeNull();
  });
});
