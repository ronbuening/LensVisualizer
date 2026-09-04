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
  it("contains the current shifted/tilted lens without reserving every authored extreme", () => {
    const imagePlaneZ = 100;
    const movement = { shiftMm: 6, tiltDeg: 4 };
    const extent = computePerspectiveMovementViewportExtent({
      zPos: [5, 80],
      maxSemiDiameterMm: 20,
      imagePlaneZ,
      config: CONFIG,
      movement,
    });

    expect(extent).not.toBeNull();
    const pose = createPerspectivePose({
      movement,
      sensorPlane: { point: [0, 0, imagePlaneZ], normal: [0, 0, 1], label: "IMG" },
      tiltPivot: CONFIG.tiltPivot,
    });
    for (const z of [5, 80]) {
      for (const y of [-20, 20]) {
        const point = pose.lensToCameraPoint([0, y, z]);
        expect(point[2]).toBeGreaterThanOrEqual(extent!.z.min - 1e-12);
        expect(point[2]).toBeLessThanOrEqual(extent!.z.max + 1e-12);
        expect(point[1]).toBeGreaterThanOrEqual(extent!.y.min - 1e-12);
        expect(point[1]).toBeLessThanOrEqual(extent!.y.max + 1e-12);
      }
    }

    const oppositeExtreme = createPerspectivePose({
      movement: { shiftMm: -10, tiltDeg: -5 },
      sensorPlane: { point: [0, 0, imagePlaneZ], normal: [0, 0, 1], label: "IMG" },
      tiltPivot: CONFIG.tiltPivot,
    });
    expect(
      [5, 80].some((z) =>
        [-20, 20].some((y) => {
          const point = oppositeExtreme.lensToCameraPoint([0, y, z]);
          return point[1] < extent!.y.min || point[1] > extent!.y.max;
        }),
      ),
    ).toBe(true);

    expect(extent!.z.max).toBeLessThan(imagePlaneZ);
  });

  it("omits the movement envelope at the centered identity pose", () => {
    expect(
      computePerspectiveMovementViewportExtent({
        zPos: [5, 80],
        maxSemiDiameterMm: 20,
        imagePlaneZ: 100,
        config: CONFIG,
        movement: { shiftMm: 0, tiltDeg: 0 },
      }),
    ).toBeNull();
  });

  it("omits a perspective envelope when the lens has no movement config", () => {
    expect(
      computePerspectiveMovementViewportExtent({
        zPos: [5, 80],
        maxSemiDiameterMm: 20,
        imagePlaneZ: 100,
        config: null,
        movement: { shiftMm: 4, tiltDeg: 3 },
      }),
    ).toBeNull();
  });
});
