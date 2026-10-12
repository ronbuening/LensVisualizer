import { describe, expect, it } from "vitest";
import { intersectRayPlane } from "../../../../src/optics/geometry/intersectPlane.js";
import type { Plane3 } from "../../../../src/optics/types.js";

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
