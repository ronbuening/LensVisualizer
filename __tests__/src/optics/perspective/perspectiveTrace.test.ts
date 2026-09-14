import { describe, expect, it } from "vitest";
import buildLens from "../../../../src/optics/buildLens.js";
import { prepareRuntimeState } from "../../../../src/optics/compat.js";
import { intersectRayPlane } from "../../../../src/optics/math/plane.js";
import {
  createPerspectiveTraceContext,
  type PerspectiveTraceContext,
} from "../../../../src/optics/perspective/trace.js";
import { createSensorBasis } from "../../../../src/optics/perspective/sensorBasis.js";
import { traceEngineRay2 } from "../../../../src/optics/trace/rayAdapters.js";
import type { Plane3, Ray3, Vec3 } from "../../../../src/optics/types.js";
import type { TiltPivot } from "../../../../src/types/optics.js";
import { LENS_CATALOG } from "../../../../src/utils/catalog/lensCatalog.js";
import { buildChromaticPositiveElementLens, buildSimplePositiveElementLens } from "../testLensFixtures.js";

const ZERO_MOVEMENT = { shiftMm: 0, tiltDeg: 0 } as const;

function rearVertexPivot(context: Pick<PerspectiveTraceContext, "state">): TiltPivot {
  return {
    frame: "camera",
    basis: "rear-vertex-fallback",
    zOffsetFromImagePlaneMm: (context.state.z.at(-1) ?? context.state.imgZ) - context.state.imgZ,
  };
}

function expectVec(actual: Vec3, expected: Vec3, precision = 10): void {
  for (let index = 0; index < 3; index++) expect(actual[index]).toBeCloseTo(expected[index], precision);
}

function axialInput(firstZ: number): Ray3 {
  return { origin: [0, 0, firstZ - 5], direction: [0, 0, 1] };
}

describe("perspective trace foundation", () => {
  it("preserves the exact engine result by reference in the identity fast path", () => {
    const L = buildSimplePositiveElementLens();
    const state = prepareRuntimeState(L, 0, 0);
    const context = createPerspectiveTraceContext({ preparedState: state, movement: ZERO_MOVEMENT });
    const input = axialInput(state.z[0]);
    const options = { checkSemiDiameter: true, stopSemiDiameter: L.stopPhysSD, stopOnClip: true } as const;
    const direct = traceEngineRay2(state, input, options);
    const result = context.traceRay(input, options);

    expect(result.localTrace.status).toBe("ok");
    expect(result.cameraTrace).toBe(result.localTrace);
    expect(result.localTrace.hits).toEqual(direct.hits);
    expect(result.sensorIntersection).not.toBeNull();
    expect(result.reachedSensor).toBe(true);
    expect(result.sensorIntersection!.point[2]).toBeCloseTo(state.imgZ, 12);
    expect(result.transmission).toBe(1);
  });

  it("reuses camera-anchored surface vertices without mutating the intrinsic prepared state", () => {
    const L = buildSimplePositiveElementLens("perspective-anchored-state");
    const preparedState = prepareRuntimeState(L, 0.25, 0.5, 0.75);
    const cameraZPos = preparedState.z.map((z) => z + 12);
    const fixedSensor: Plane3 = {
      ...preparedState.imagePlane,
      point: [0, 0, preparedState.imgZ + 12],
    };
    const context = createPerspectiveTraceContext({
      preparedState,
      cameraZPos,
      sensorPlane: fixedSensor,
      movement: ZERO_MOVEMENT,
    });
    const unanchored = createPerspectiveTraceContext({ preparedState, movement: ZERO_MOVEMENT });

    expect(context.state).not.toBe(preparedState);
    expect(context.state.z).toEqual(cameraZPos);
    expect(context.state.imgZ).toBeCloseTo(fixedSensor.point[2], 12);
    expect(preparedState.z[0]).toBe(0);
    expect(preparedState.imgZ).toBeCloseTo(fixedSensor.point[2] - 12, 12);
    expect(context.cacheKey).not.toBe(unanchored.cacheKey);
    expect(Object.isFrozen(context)).toBe(true);
    expect(Object.isFrozen(context.sensorPlane)).toBe(true);
  });

  it("inverse-transforms the launch before tracing, then returns camera-space physical hits", () => {
    const L = buildSimplePositiveElementLens("perspective-moved-trace");
    const state = prepareRuntimeState(L, 0, 0);
    const base = createPerspectiveTraceContext({ preparedState: state, movement: ZERO_MOVEMENT });
    const context = createPerspectiveTraceContext({
      preparedState: state,
      movement: { shiftMm: 2.5, tiltDeg: 3 },
      tiltPivot: rearVertexPivot(base),
    });
    const input = axialInput(state.z[0]);
    const options = { checkSemiDiameter: true, stopSemiDiameter: L.stopPhysSD } as const;
    const result = context.traceRay(input, options);
    const directLocal = traceEngineRay2(state, context.pose.cameraToLensRay(input), options);
    const centered = traceEngineRay2(state, input, options);

    expect(result.localTrace.hits).toEqual(directLocal.hits);
    expect(result.localTrace.hits[0].radius).not.toBeCloseTo(centered.hits[0].radius, 4);
    expectVec(result.cameraTrace.hits[0].point, context.pose.lensToCameraPoint(directLocal.hits[0].point));
    expectVec(result.cameraTrace.hits[0].normal, context.pose.lensToCameraDirection(directLocal.hits[0].normal));
    expect(result.cameraTrace).not.toBe(result.localTrace);
    expect(result.sensorIntersection).not.toBeNull();
    expect(result.sensorIntersection!.point[2]).toBeCloseTo(context.sensorPlane.point[2], 10);
  });

  it("returns a full camera-space return point for partial stop-style traces without projecting to the sensor", () => {
    const L = buildSimplePositiveElementLens("perspective-partial-trace");
    const state = prepareRuntimeState(L, 0, 0);
    const base = createPerspectiveTraceContext({ preparedState: state, movement: ZERO_MOVEMENT });
    const context = createPerspectiveTraceContext({
      preparedState: state,
      movement: { shiftMm: -1.5, tiltDeg: 4 },
      tiltPivot: rearVertexPivot(base),
    });
    const result = context.traceRay(axialInput(state.z[0]), {
      stopAt: 2,
      projectToSensor: true,
      recordHeights: true,
    });

    expect(result.localTrace.hits).toHaveLength(2);
    expect(result.localTrace.returnVertexIndex).toBe(2);
    expect(result.sensorIntersection).toBeNull();
    expect(result.reachedSensor).toBe(false);
    expectVec(result.cameraReturnPoint, context.pose.lensToCameraPoint(result.localReturnPoint));
    expect(result.cameraTrace.x).toBeCloseTo(result.cameraReturnPoint[0], 12);
    expect(result.cameraTrace.y).toBeCloseTo(result.cameraReturnPoint[1], 12);
    expect(result.cameraTrace.heights).toHaveLength(2);
  });

  it("supports skew and chromatic entry through the shared per-trace options", () => {
    const L = buildChromaticPositiveElementLens();
    const state = prepareRuntimeState(L, 0, 0);
    const context = createPerspectiveTraceContext({
      preparedState: state,
      movement: { shiftMm: 1, tiltDeg: 0 },
    });
    const red = context.traceSkew(0.5, 5, 0.01, 0, {
      channel: "R",
      checkSemiDiameter: true,
      stopSemiDiameter: L.stopPhysSD,
    });
    const blue = context.traceSkew(0.5, 5, 0.01, 0, {
      channel: "B",
      checkSemiDiameter: true,
      stopSemiDiameter: L.stopPhysSD,
    });

    expect(red.localTrace.status).toBe("ok");
    expect(blue.localTrace.status).toBe("ok");
    expect(red.sensorIntersection).not.toBeNull();
    expect(blue.sensorIntersection).not.toBeNull();
    expect(red.sensorIntersection!.point[1]).not.toBeCloseTo(blue.sensorIntersection!.point[1], 8);
    expect(Number.isFinite(red.sensorIntersection!.point[0])).toBe(true);
  });

  it("marks aperture clipping and does not claim that a blocked ray reached the sensor", () => {
    const L = buildSimplePositiveElementLens("perspective-clipped-trace");
    const state = prepareRuntimeState(L, 0, 0);
    const context = createPerspectiveTraceContext({
      preparedState: state,
      movement: { shiftMm: 1, tiltDeg: 0 },
    });
    const result = context.traceRay(
      { origin: [0, 30, state.z[0] - 5], direction: [0, 0, 1] },
      { checkSemiDiameter: true, stopSemiDiameter: L.stopPhysSD, stopOnClip: true },
    );

    expect(result.localTrace.status).toBe("clipped");
    expect(result.cameraTrace.hits[0].clipped).toBe(true);
    expect(result.sensorIntersection).toBeNull();
    expect(result.reachedSensor).toBe(false);
  });

  it("preserves +/- symmetry for combined shift and tilt", () => {
    const L = buildSimplePositiveElementLens("perspective-movement-symmetry");
    const state = prepareRuntimeState(L, 0, 0);
    const base = createPerspectiveTraceContext({ preparedState: state, movement: ZERO_MOVEMENT });
    const tiltPivot = rearVertexPivot(base);
    const positive = createPerspectiveTraceContext({
      preparedState: state,
      movement: { shiftMm: 2, tiltDeg: 3 },
      tiltPivot,
    }).traceRay(axialInput(state.z[0]));
    const negative = createPerspectiveTraceContext({
      preparedState: state,
      movement: { shiftMm: -2, tiltDeg: -3 },
      tiltPivot,
    }).traceRay(axialInput(state.z[0]));

    expect(positive.localTrace.status).toBe("ok");
    expect(negative.localTrace.status).toBe("ok");
    expect(positive.sensorIntersection).not.toBeNull();
    expect(negative.sensorIntersection).not.toBeNull();
    expect(positive.sensorIntersection!.point[0]).toBeCloseTo(negative.sensorIntersection!.point[0], 10);
    expect(positive.sensorIntersection!.point[1]).toBeCloseTo(-negative.sensorIntersection!.point[1], 9);
  });

  it("handles real Nikon dual-axis combined extrema and shift-only movement", () => {
    const dualAxis = buildLens(LENS_CATALOG["nikon-pc-e-nikkor-24-f35d-ed"]);
    const shiftOnly = buildLens(LENS_CATALOG["nikon-pc-nikkor-35mm-f28"]);

    for (const L of [dualAxis, shiftOnly]) {
      const state = prepareRuntimeState(L, 0, 0);
      const config = L.perspectiveControl!;
      const context = createPerspectiveTraceContext({
        preparedState: state,
        movement: { shiftMm: config.shiftRangeMm[1], tiltDeg: config.tiltRangeDeg[1] },
        tiltPivot: config.tiltPivot,
      });
      const movedAxisInput = context.pose.lensToCameraRay(axialInput(state.z[0]));
      const partial = context.traceRay(movedAxisInput, {
        stopAt: state.lens.stop.surfaceIndex,
        checkSemiDiameter: false,
        projectToSensor: false,
      });
      const full = context.traceRay(movedAxisInput, {
        checkSemiDiameter: true,
        stopSemiDiameter: state.lens.stop.physicalSemiDiameter,
        ghost: true,
        stopOnClip: false,
      });

      expect(partial.localTrace.status).not.toBe("failed");
      expect(partial.cameraReturnPoint.every(Number.isFinite)).toBe(true);
      expect(full.cameraTrace.hits.length).toBeGreaterThan(0);
      expect(full.cameraTrace.hits.every((hit) => hit.point.every(Number.isFinite))).toBe(true);
      if (full.reachedSensor) {
        expect(full.sensorIntersection!.point[2]).toBeCloseTo(context.sensorPlane.point[2], 8);
      }
    }

    expect(dualAxis.perspectiveControl?.tiltPivot?.basis).toBe("rear-vertex-fallback");
    expect(shiftOnly.perspectiveControl?.tiltPivot).toBeUndefined();
  });

  it("extracts generic forward plane intersections and rejects parallel or rearward rays", () => {
    const plane: Plane3 = { point: [0, 0, 10], normal: [0, 0, 1], label: "fixed" };

    expect(intersectRayPlane({ origin: [1, 2, 0], direction: [0, 0, 2] }, plane)).toEqual({
      point: [1, 2, 10],
      t: 5,
    });
    expect(intersectRayPlane({ origin: [0, 0, 0], direction: [1, 0, 0] }, plane)).toBeNull();
    expect(intersectRayPlane({ origin: [0, 0, 20], direction: [0, 0, 1] }, plane)).toBeNull();
  });

  it("derives a deterministic orthonormal right/down basis for either sensor-normal sign", () => {
    const positive = createSensorBasis({ point: [0, 0, 10], normal: [0, 0, 1], label: "IMG" });
    const negative = createSensorBasis({ point: [0, 0, 10], normal: [0, 0, -1], label: "IMG" });
    const tilted = createSensorBasis({ point: [0, 0, 10], normal: [0, 0.6, 0.8], label: "IMG" });

    expect(positive).toEqual({ u: [1, 0, 0], v: [0, 1, 0], normal: [0, 0, 1] });
    expect(negative).toEqual(positive);
    expect(Math.hypot(...tilted.u)).toBeCloseTo(1, 12);
    expect(Math.hypot(...tilted.v)).toBeCloseTo(1, 12);
    expect(Math.hypot(...tilted.normal)).toBeCloseTo(1, 12);
    expect(tilted.u[0] * tilted.v[0] + tilted.u[1] * tilted.v[1] + tilted.u[2] * tilted.v[2]).toBeCloseTo(0, 12);
    expect(Object.isFrozen(tilted)).toBe(true);
    expect(Object.isFrozen(tilted.u)).toBe(true);
  });

  it("keys focus, zoom, aberration, movement, pivot basis, and sensor/camera geometry", () => {
    const L = buildSimplePositiveElementLens("perspective-context-cache-key");
    const first = prepareRuntimeState(L, 0, 0, 0);
    const controls = prepareRuntimeState(L, 0.2, 0.3, 0.4);
    const fallbackPivot: TiltPivot = {
      frame: "camera",
      basis: "rear-vertex-fallback",
      zOffsetFromImagePlaneMm: -80,
    };
    const common = {
      movement: { shiftMm: 1, tiltDeg: 2 },
      tiltPivot: fallbackPivot,
    } as const;
    const baseline = createPerspectiveTraceContext({ preparedState: first, ...common });
    const changedControls = createPerspectiveTraceContext({ preparedState: controls, ...common });
    const changedMovement = createPerspectiveTraceContext({
      preparedState: first,
      ...common,
      movement: { shiftMm: 2, tiltDeg: 2 },
    });
    const changedBasis = createPerspectiveTraceContext({
      preparedState: first,
      ...common,
      tiltPivot: { ...fallbackPivot, basis: "mechanical-axis" },
    });
    const changedSensor = createPerspectiveTraceContext({
      preparedState: first,
      ...common,
      sensorPlane: { ...first.imagePlane, point: [0, 0, first.imgZ + 1] },
    });

    expect(
      new Set([
        baseline.cacheKey,
        changedControls.cacheKey,
        changedMovement.cacheKey,
        changedBasis.cacheKey,
        changedSensor.cacheKey,
      ]).size,
    ).toBe(5);
  });
});
