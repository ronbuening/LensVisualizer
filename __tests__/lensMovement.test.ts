import { describe, expect, it } from "vitest";
import {
  clampLensMovement,
  createLensMovementTransform,
  isIdentityLensMovement,
  projectMovedRayToFixedImagePlane,
  transformMovedPoint,
  transformMovedSlope,
  transformRayTraceResult,
} from "../src/optics/lensMovement.js";
import type { RayTraceResult, RuntimeLens } from "../src/types/optics.js";

const pcLens = {
  perspectiveControl: {
    shiftRangeMm: [-11.5, 11.5],
    tiltRangeDeg: [-8.5, 8.5],
  },
} as unknown as RuntimeLens;

describe("lensMovement", () => {
  it("defaults to disabled zero movement when a lens has no perspectiveControl config", () => {
    const resolved = clampLensMovement({ perspectiveControl: null } as RuntimeLens, { shiftMm: 99, tiltDeg: 99 });

    expect(resolved).toMatchObject({ shiftMm: 0, tiltDeg: 0, active: false, config: null });
  });

  it("clamps shift and tilt to the lens-declared movement ranges", () => {
    expect(clampLensMovement(pcLens, { shiftMm: 20, tiltDeg: -20 })).toMatchObject({
      shiftMm: 11.5,
      tiltDeg: -8.5,
      active: true,
    });
  });

  it("detects identity movement", () => {
    expect(isIdentityLensMovement({ shiftMm: 0, tiltDeg: 0 })).toBe(true);
    expect(isIdentityLensMovement({ shiftMm: 0.01, tiltDeg: 0 })).toBe(false);
  });

  it("transforms points and slopes around the fixed image plane", () => {
    expect(transformMovedPoint(0, 2, 100, { shiftMm: 5, tiltDeg: 0 })).toEqual([0, -3]);
    expect(transformMovedSlope(0.25, { shiftMm: 5, tiltDeg: 0 })).toBeCloseTo(0.25);

    const [z, y] = transformMovedPoint(90, 0, 100, { shiftMm: 0, tiltDeg: 10 });
    expect(z).toBeCloseTo(90.151922);
    expect(y).toBeCloseTo(-1.736482);
    expect(transformMovedSlope(0, { shiftMm: 0, tiltDeg: 10 })).toBeCloseTo(Math.tan((10 * Math.PI) / 180));
  });

  it("projects moved rays back to the fixed image plane", () => {
    expect(projectMovedRayToFixedImagePlane(80, 4, 0.2, 100)).toEqual([100, 8]);
  });

  it("returns the original ray result object for zero movement", () => {
    const result: RayTraceResult = { pts: [[0, 0]], ghostPts: [], y: 0, u: 0, clipped: false };
    expect(transformRayTraceResult(result, 20, { shiftMm: 0, tiltDeg: 0 })).toBe(result);
  });

  it("moves traced ray coordinates while preserving the fixed image plane target", () => {
    const result: RayTraceResult = {
      pts: [
        [0, 0],
        [10, 1],
      ],
      ghostPts: [],
      y: 1,
      u: 0.1,
      clipped: false,
    };
    const transform = createLensMovementTransform(20, {
      shiftMm: 5,
      tiltDeg: 0,
      active: true,
      config: pcLens.perspectiveControl,
    });
    const moved = transform.trace(result);

    expect(moved.pts).toEqual([
      [0, -5],
      [10, -4],
    ]);
    expect(moved.y).toBe(-4);
    expect(moved.u).toBe(0.1);
    expect(transform.rayEnd(10, -4, moved.u, 20)).toEqual([20, -3]);
  });
});
