import { describe, expect, it } from "vitest";
import buildLens from "../../../../src/optics/buildLens.js";
import { prepareRuntimeState } from "../../../../src/optics/compat.js";
import { chiefRayImageHeightAccurate2 } from "../../../../src/optics/field/chiefRay.js";
import { solvePerspectiveChiefRay } from "../../../../src/optics/perspective/chiefRay.js";
import {
  createPerspectiveTraceContext,
  type PerspectiveTraceContext,
} from "../../../../src/optics/perspective/trace.js";
import type { Vec3 } from "../../../../src/optics/types.js";
import { LENS_CATALOG } from "../../../../src/utils/catalog/lensCatalog.js";

const L = buildLens(LENS_CATALOG["nikon-pc-nikkor-19mm-f4e-ed"]);
const STATE = prepareRuntimeState(L, 0, 0);

function context(shiftMm = 0, tiltDeg = 0): PerspectiveTraceContext {
  return createPerspectiveTraceContext({
    preparedState: STATE,
    movement: { shiftMm, tiltDeg },
    tiltPivot: L.perspectiveControl?.tiltPivot,
  });
}

function sceneDirection(fieldXDeg: number, fieldYDeg: number): Vec3 {
  const x = Math.tan((fieldXDeg * Math.PI) / 180);
  const y = -Math.tan((fieldYDeg * Math.PI) / 180);
  const length = Math.hypot(x, y, 1);
  return [x / length, y / length, 1 / length];
}

describe("perspective chief-ray solve", () => {
  it("preserves the zero-movement exact chief image height", () => {
    const fieldDeg = 5;
    const solved = solvePerspectiveChiefRay(context(), sceneDirection(0, fieldDeg));
    const legacy = chiefRayImageHeightAccurate2(fieldDeg, [...STATE.z], 0, 0, L);

    expect(solved.status).toBe("usable");
    expect(solved.rootSolve?.status).toBe("converged");
    expect(solved.stopResidualMm).toBeLessThan(1e-6);
    expect(Math.abs(solved.chiefTrace!.sensorIntersection!.point[1])).toBeCloseTo(Math.abs(legacy), 4);
  });

  it("solves the moved stop for arbitrary skew directions", () => {
    const solved = solvePerspectiveChiefRay(context(4, 3), sceneDirection(4, 6));

    expect(solved.status).toBe("usable");
    expect(solved.rootSolve?.status).toBe("converged");
    expect(solved.stopResidualMm).toBeLessThan(1e-6);
    expect(solved.stopPointCamera).not.toBeNull();
    expect(solved.sceneDirectionLens).not.toEqual(solved.sceneDirectionCamera);
  });

  it("preserves signed movement symmetry", () => {
    const positive = solvePerspectiveChiefRay(context(3, 2), [0, 0, 1]);
    const negative = solvePerspectiveChiefRay(context(-3, -2), [0, 0, 1]);

    expect(positive.status).toBe("usable");
    expect(negative.status).toBe("usable");
    expect(positive.stopResidualMm).toBeLessThan(1e-6);
    expect(negative.stopResidualMm).toBeLessThan(1e-6);
    expect(positive.chiefTrace!.sensorIntersection!.point[0]).toBeCloseTo(
      negative.chiefTrace!.sensorIntersection!.point[0],
      8,
    );
    expect(positive.chiefTrace!.sensorIntersection!.point[1]).toBeCloseTo(
      -negative.chiefTrace!.sensorIntersection!.point[1],
      7,
    );
  });

  it("solves the moved stop at the requested chromatic channel", () => {
    const camera = context(2, 1);
    const red = solvePerspectiveChiefRay(camera, sceneDirection(0, 8), { channel: "R" });
    const blue = solvePerspectiveChiefRay(camera, sceneDirection(0, 8), { channel: "B" });

    expect(red.status).toBe("usable");
    expect(blue.status).toBe("usable");
    expect(red.stopResidualMm).toBeLessThan(1e-6);
    expect(blue.stopResidualMm).toBeLessThan(1e-6);
    expect(red.chiefTrace!.sensorIntersection!.point[1]).not.toBeCloseTo(
      blue.chiefTrace!.sensorIntersection!.point[1],
      7,
    );
  });

  it("reports projection-domain and unreachable failures explicitly", () => {
    const outside = solvePerspectiveChiefRay(context(), [0, 1, 0]);
    const invalid = solvePerspectiveChiefRay(context(), [Number.NaN, 0, 1]);

    expect(outside.status).toBe("outside-projection-domain");
    expect(outside.chiefTrace).toBeNull();
    expect(invalid.status).toBe("outside-projection-domain");
    expect(invalid.rootSolve).toBeNull();
  });
});
