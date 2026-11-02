import { describe, expect, it } from "vitest";
import { intersectRayPlane } from "../../../../src/optics/geometry/intersectPlane.js";
import { planeResidualRoundoff } from "../../../../src/optics/geometry/intersectTolerance.js";
import type { Plane3, Ray3 } from "../../../../src/optics/types.js";

describe("ray-plane intersection", () => {
  it("extracts generic forward plane intersections and rejects parallel or rearward rays", () => {
    const plane: Plane3 = { point: [0, 0, 10], normal: [0, 0, 1], label: "fixed" };

    expect(intersectRayPlane({ origin: [1, 2, 0], direction: [0, 0, 2] }, plane)).toEqual({
      point: [1, 2, 10],
      t: 5,
    });
    expect(intersectRayPlane({ origin: [0, 0, 0], direction: [1, 0, 0] }, plane)).toBeNull();
    expect(intersectRayPlane({ origin: [0, 0, 20], direction: [0, 0, 1] }, plane)).toBeNull();
  });
});

/* The landing is held to the contract of a surface plane (architecture/optics-engine.md, Exact Surface Trace): the
 * raw residual target first, then the operand roundoff envelope. */
describe("ray-plane landing validation", () => {
  const tilted: Plane3 = { point: [0, 0, 10], normal: [0, 0.6, 0.8], label: "tilted" };
  const residualOf = (point: readonly number[], plane: Plane3): number =>
    plane.normal[0] * (point[0] - plane.point[0]) +
    plane.normal[1] * (point[1] - plane.point[1]) +
    plane.normal[2] * (point[2] - plane.point[2]);

  it("returns a landing that meets the raw target as it did, with no member added", () => {
    const hit = intersectRayPlane({ origin: [1, -2, 0], direction: [0.1, 0.2, 1] }, tilted);
    expect(hit).not.toBeNull();
    // The perspective results hand this object on as `sensorIntersection`, so its shape is part of their records.
    expect(Object.keys(hit!).sort()).toEqual(["point", "t"]);
    expect(Math.abs(residualOf(hit!.point, tilted))).toBeLessThanOrEqual(1e-12);
  });

  it("accepts a landing only the roundoff envelope covers", () => {
    // Launched 5e8 mm away, the landing is quantized far above the raw target.
    const ray: Ray3 = { origin: [0, 3e8, -4e8], direction: [0, -0.6, 0.8] };
    const hit = intersectRayPlane(ray, tilted);
    expect(hit).not.toBeNull();
    const residual = Math.abs(residualOf(hit!.point, tilted));
    expect(residual).toBeGreaterThan(1e-12);
    expect(residual).toBeLessThanOrEqual(
      planeResidualRoundoff(ray.origin, ray.direction, hit!.t, tilted.point, tilted.normal),
    );
  });

  it("returns no landing when a coordinate overflowed", () => {
    // t = 5 is finite, but x = -5e308 is not, so no residual can be formed and none is accepted.
    const flat: Plane3 = { point: [0, 0, 5], normal: [0, 0, 1], label: "flat" };
    expect(intersectRayPlane({ origin: [0, 0, 0], direction: [-1e308, 0, 1] }, flat)).toBeNull();
    expect(intersectRayPlane({ origin: [0, 0, 0], direction: [-1e307, 0, 1] }, flat)).toEqual({
      t: 5,
      point: [-5e307, 0, 5],
    });
  });
});
