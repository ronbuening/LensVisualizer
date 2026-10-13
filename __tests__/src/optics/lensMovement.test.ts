import { describe, expect, it } from "vitest";
import {
  clampLensMovement,
  createLensMovementTransform,
  isMovementAxisEnabled,
  isIdentityLensMovement,
  transformMovedPoint,
  transformMovedSlope,
} from "../../../src/optics/lensMovement.js";
import { createPerspectivePose } from "../../../src/optics/perspective/index.js";
import type { RuntimeLens } from "../../../src/types/optics.js";

const pcLens = {
  perspectiveControl: {
    shiftRangeMm: [-11.5, 11.5],
    tiltRangeDeg: [-8.5, 8.5],
    tiltPivot: {
      frame: "camera",
      basis: "rear-vertex-fallback",
      zOffsetFromImagePlaneMm: -10,
    },
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

  it("forces values on unsupported movement axes to zero", () => {
    const shiftOnly = {
      perspectiveControl: { shiftRangeMm: [-11, 11], tiltRangeDeg: [0, 0] },
    } as unknown as RuntimeLens;
    const tiltOnly = {
      perspectiveControl: {
        shiftRangeMm: [0, 0],
        tiltRangeDeg: [-5, 5],
        tiltPivot: pcLens.perspectiveControl!.tiltPivot,
      },
    } as unknown as RuntimeLens;

    expect(clampLensMovement(shiftOnly, { shiftMm: 8, tiltDeg: 4 })).toMatchObject({
      shiftMm: 8,
      tiltDeg: 0,
    });
    expect(clampLensMovement(tiltOnly, { shiftMm: -7, tiltDeg: -3 })).toMatchObject({
      shiftMm: 0,
      tiltDeg: -3,
    });
  });

  it("detects identity movement", () => {
    expect(isIdentityLensMovement({ shiftMm: 0, tiltDeg: 0 })).toBe(true);
    expect(isIdentityLensMovement({ shiftMm: 0.01, tiltDeg: 0 })).toBe(false);
  });

  it("distinguishes enabled axes from an explicitly unsupported axis", () => {
    expect(isMovementAxisEnabled([-11, 11])).toBe(true);
    expect(isMovementAxisEnabled([0, 0])).toBe(false);
  });

  it("uses the standard right-handed tilt sign for display points and slopes", () => {
    expect(transformMovedPoint(0, 2, 100, { shiftMm: 5, tiltDeg: 0 })).toEqual([0, -3]);
    expect(transformMovedSlope(0.25, { shiftMm: 5, tiltDeg: 0 })).toBeCloseTo(0.25);

    const [z, y] = transformMovedPoint(90, 0, 100, { shiftMm: 0, tiltDeg: 10 });
    expect(z).toBeCloseTo(90.151922);
    expect(y).toBeCloseTo(1.736482);
    expect(transformMovedSlope(0, { shiftMm: 0, tiltDeg: 10 })).toBeCloseTo(-Math.tan((10 * Math.PI) / 180));
  });

  it("matches the shared perspective pose around the configured camera pivot before applying shift", () => {
    const resolved = {
      shiftMm: 5,
      tiltDeg: 8,
      active: true,
      config: pcLens.perspectiveControl,
    };
    const transform = createLensMovementTransform(100, resolved);
    const pose = createPerspectivePose({
      movement: resolved,
      sensorPlane: { point: [0, 0, 100], normal: [0, 0, 1], label: "IMG" },
      tiltPivot: pcLens.perspectiveControl!.tiltPivot,
    });

    for (const [z, y] of [
      [80, -3],
      [90, 0],
      [100, 4],
    ] as const) {
      const moved = pose.lensToCameraPoint([0, y, z]);
      expect(transform.point(z, y)).toEqual([moved[2], moved[1]]);
    }
    expect(transform.point(90, 0)).toEqual([90, -5]);
    expect(transform.axis(80, 100)[0][1]).toBeGreaterThan(transform.axis(80, 100)[1][1]);
  });
});
