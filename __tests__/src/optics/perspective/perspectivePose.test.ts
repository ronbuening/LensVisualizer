import { describe, expect, it } from "vitest";
import { createPerspectivePose, PerspectivePoseError } from "../../../../src/optics/perspective/pose.js";
import type { Plane3, Ray3, Vec3 } from "../../../../src/optics/types.js";
import type { TiltPivot } from "../../../../src/types/optics.js";

const SENSOR: Plane3 = { point: [0, 0, 100], normal: [0, 0, 1], label: "IMG" };
const REAR_VERTEX_PIVOT: TiltPivot = {
  frame: "camera",
  basis: "rear-vertex-fallback",
  zOffsetFromImagePlaneMm: -20,
};

function expectVec(actual: Vec3, expected: Vec3, precision = 11): void {
  for (let index = 0; index < 3; index++) expect(actual[index]).toBeCloseTo(expected[index], precision);
}

describe("createPerspectivePose", () => {
  it("uses reference-preserving transform functions for the identity fast path", () => {
    const pose = createPerspectivePose({ movement: { shiftMm: 0, tiltDeg: 0 }, sensorPlane: SENSOR });
    const point: Vec3 = [1, 2, 3];
    const direction: Vec3 = [0, 0, 1];
    const ray: Ray3 = { origin: point, direction };
    const plane: Plane3 = { point, normal: direction, label: "test" };

    expect(pose.active).toBe(false);
    expect(pose.lensToCameraPoint(point)).toBe(point);
    expect(pose.cameraToLensPoint(point)).toBe(point);
    expect(pose.lensToCameraDirection(direction)).toBe(direction);
    expect(pose.cameraToLensDirection(direction)).toBe(direction);
    expect(pose.lensToCameraRay(ray)).toBe(ray);
    expect(pose.cameraToLensRay(ray)).toBe(ray);
    expect(pose.lensToCameraPlane(plane)).toBe(plane);
    expect(pose.cameraToLensPlane(plane)).toBe(plane);
  });

  it("applies standard right-handed Rx tilt about the declared camera pivot, then shift", () => {
    const pose = createPerspectivePose({
      movement: { shiftMm: 3, tiltDeg: 90 },
      sensorPlane: SENSOR,
      tiltPivot: REAR_VERTEX_PIVOT,
    });

    expectVec(pose.pivotPoint, [0, 0, 80]);
    expectVec(pose.lensToCameraPoint([2, 0, 90]), [2, -13, 80]);
    expectVec(pose.lensToCameraDirection([0, 0, 1]), [0, -1, 0]);
    // The rotation axis stays fixed under tilt; camera-frame shift is applied afterward.
    expectVec(pose.lensToCameraPoint(pose.pivotPoint), [0, -3, 80]);
  });

  it("round-trips points, directions, rays, and planes", () => {
    const pose = createPerspectivePose({
      movement: { shiftMm: -4.5, tiltDeg: 7.25 },
      sensorPlane: SENSOR,
      tiltPivot: REAR_VERTEX_PIVOT,
    });
    const point: Vec3 = [2.25, -5.5, 17.75];
    const direction: Vec3 = [0.2, -0.3, Math.sqrt(0.87)];
    const ray: Ray3 = { origin: point, direction };
    const plane: Plane3 = { point: [1, -2, 55], normal: [0, 0, 1], label: "plane" };

    expectVec(pose.cameraToLensPoint(pose.lensToCameraPoint(point)), point);
    expectVec(pose.cameraToLensDirection(pose.lensToCameraDirection(direction)), direction);
    const roundTripRay = pose.cameraToLensRay(pose.lensToCameraRay(ray));
    expectVec(roundTripRay.origin, ray.origin);
    expectVec(roundTripRay.direction, ray.direction);
    const roundTripPlane = pose.cameraToLensPlane(pose.lensToCameraPlane(plane));
    const movedPlane = pose.lensToCameraPlane(plane);
    expectVec(roundTripPlane.point, plane.point);
    expectVec(roundTripPlane.normal, plane.normal);
    expect(Math.hypot(...movedPlane.normal)).toBeCloseTo(1, 12);
    expect(Math.hypot(...pose.lensToCameraDirection(direction))).toBeCloseTo(Math.hypot(...direction), 12);
  });

  it("keeps the camera-frame pivot invariant when focus moves the rear lens vertex", () => {
    const pose = createPerspectivePose({
      movement: { shiftMm: 0, tiltDeg: 5 },
      sensorPlane: SENSOR,
      tiltPivot: REAR_VERTEX_PIVOT,
    });
    const referenceRearVertex: Vec3 = [0, 0, 80];
    const closeFocusRearVertex: Vec3 = [0, 0, 67.5];

    expectVec(pose.pivotPoint, [0, 0, 80]);
    expectVec(pose.lensToCameraPoint(referenceRearVertex), [0, 0, 80]);
    expect(pose.lensToCameraPoint(closeFocusRearVertex)[2]).not.toBeCloseTo(pose.pivotPoint[2], 8);
    expectVec(pose.pivotPoint, [0, 0, 80]);
  });

  it("freezes resolved geometry and keys movement, pivot basis, and fixed sensor", () => {
    const mechanicalPivot: TiltPivot = { ...REAR_VERTEX_PIVOT, basis: "mechanical-axis" };
    const fallback = createPerspectivePose({
      movement: { shiftMm: 1, tiltDeg: 2 },
      sensorPlane: SENSOR,
      tiltPivot: REAR_VERTEX_PIVOT,
    });
    const mechanical = createPerspectivePose({
      movement: { shiftMm: 1, tiltDeg: 2 },
      sensorPlane: SENSOR,
      tiltPivot: mechanicalPivot,
    });
    const movedSensor = createPerspectivePose({
      movement: { shiftMm: 1, tiltDeg: 2 },
      sensorPlane: { ...SENSOR, point: [0, 0, 101] },
      tiltPivot: REAR_VERTEX_PIVOT,
    });

    expect(Object.isFrozen(fallback)).toBe(true);
    expect(Object.isFrozen(fallback.movement)).toBe(true);
    expect(Object.isFrozen(fallback.tiltPivot)).toBe(true);
    expect(Object.isFrozen(fallback.sensorPlane)).toBe(true);
    expect(Object.isFrozen(fallback.sensorPlane.point)).toBe(true);
    expect(Object.isFrozen(fallback.pivotPoint)).toBe(true);
    expect(fallback.cacheKey).not.toBe(mechanical.cacheKey);
    expect(fallback.cacheKey).not.toBe(movedSensor.cacheKey);
  });

  it("rejects non-finite movement and non-zero tilt without a pivot", () => {
    expect(() => createPerspectivePose({ movement: { shiftMm: 0, tiltDeg: 1 }, sensorPlane: SENSOR })).toThrow(
      PerspectivePoseError,
    );
    expect(() => createPerspectivePose({ movement: { shiftMm: Number.NaN, tiltDeg: 0 }, sensorPlane: SENSOR })).toThrow(
      PerspectivePoseError,
    );
    expect(() =>
      createPerspectivePose({
        movement: { shiftMm: 0, tiltDeg: 0 },
        sensorPlane: { ...SENSOR, normal: [0, 0, 0] },
      }),
    ).toThrow(PerspectivePoseError);
  });
});
