import { describe, expect, it } from "vitest";
import {
  solvePerspectiveSensorBestFocus,
  summarizePerspectiveSensorSpot,
  type PerspectiveAffineSensorRay,
} from "../../../../../src/optics/perspective/analysis/imageSpace.js";
import type { PerspectiveTraceResult } from "../../../../../src/optics/perspective/trace.js";

function affineRay(
  sourceIndex: number,
  sensorUMm: number,
  slopeUPerNormal: number,
  photometricWeight = 1,
): PerspectiveAffineSensorRay {
  return {
    sourceIndex,
    pupilUv: { u: 0, v: sourceIndex },
    status: "usable",
    sensorPoint: [sensorUMm, 0, 0],
    sensorUMm,
    sensorVMm: 0,
    slopeUPerNormal,
    slopeVPerNormal: 0,
    mechanicalWeight: 1,
    photometricWeight,
    transmission: photometricWeight,
    trace: null as unknown as PerspectiveTraceResult,
  };
}

describe("perspective fixed-sensor image-space reductions", () => {
  it("solves a signed sensor-normal least-confusion plane", () => {
    const rays = [affineRay(0, -2, 1), affineRay(1, 2, -1)];
    const sensorSpot = summarizePerspectiveSensorSpot(rays);
    const focus = solvePerspectiveSensorBestFocus(rays, [{ u: 1, v: 0 }]);

    expect(sensorSpot?.centroidUMm).toBeCloseTo(0, 12);
    expect(sensorSpot?.rmsRadiusMm).toBeCloseTo(2, 12);
    expect(sensorSpot?.spanUMm).toBeCloseTo(4, 12);
    expect(focus?.normalOffsetMm).toBeCloseTo(2, 12);
    expect(focus?.rmsMm).toBeCloseTo(0, 12);

    const lensward = solvePerspectiveSensorBestFocus([affineRay(0, -2, -1), affineRay(1, 2, 1)], [{ u: 1, v: 0 }]);
    expect(lensward?.normalOffsetMm).toBeCloseTo(-2, 12);
  });

  it("uses transmitted weights and excludes unavailable affine rays", () => {
    const dark = affineRay(0, -10, 1, 0);
    const left = affineRay(1, -1, 1, 1);
    const right = affineRay(2, 3, -1, 3);
    const clipped = { ...affineRay(3, 100, 0, 1), status: "clipped" as const };
    const spot = summarizePerspectiveSensorSpot([dark, left, right, clipped]);

    expect(spot?.usedRayCount).toBe(2);
    expect(spot?.usedWeight).toBe(4);
    expect(spot?.centroidUMm).toBeCloseTo(2, 12);
    expect(spot?.spanUMm).toBeCloseTo(4, 12);
  });
});
