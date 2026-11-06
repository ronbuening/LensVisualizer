/** Synthetic image-surface contracts, checked against independent sag formulas and bracketed landings. */

import { describe, expect, it } from "vitest";
import {
  createImageSurfaceShape,
  imageSurfaceLocalFrame,
  intersectImageSurface,
  landImageSurfaceLine,
  landImageSurfaceMeridional,
  landImageSurfaceSkew,
  meridionalImageHeight,
} from "../../../../src/optics/geometry/imageSurface.js";
import type { ImageSurfaceShape, Plane3, Vec3 } from "../../../../src/optics/types.js";
import type { ResolvedImageSurfaceData } from "../../../../src/types/optics.js";

const sphereSag = (r: number, R: number): number => (r * r) / (R * (1 + Math.sqrt(1 - (r / R) ** 2)));
const pointAt = (origin: Vec3, direction: Vec3, t: number): Vec3 =>
  origin.map((value, i) => value + direction[i] * t) as unknown as Vec3;

function expectVector(actual: Vec3, expected: Vec3, tolerance = 1e-12): void {
  actual.forEach((value, i) => expect(Math.abs(value - expected[i])).toBeLessThanOrEqual(tolerance));
}

function bisect(sag: (x: number, y: number) => number, origin: Vec3, direction: Vec3, lo = 0, hi = 40): number {
  const f = (t: number): number => {
    const [x, y, z] = pointAt(origin, direction, t);
    return z - sag(x, y);
  };
  expect(f(lo) * f(hi)).toBeLessThan(0);
  for (let i = 0; i < 100; i++) {
    const mid = lo + (hi - lo) / 2;
    if (mid === lo || mid === hi) break;
    if (f(mid) === 0) return mid;
    if (f(mid) < 0 === f(lo) < 0) lo = mid;
    else hi = mid;
  }
  return lo + (hi - lo) / 2;
}

function expectLanding(
  shape: ImageSurfaceShape,
  origin: Vec3,
  direction: Vec3,
  sag: (x: number, y: number) => number,
  tolerance = 1e-12,
): void {
  const hit = landImageSurfaceLine(shape, origin, direction);
  expect(hit).not.toBeNull();
  const t = bisect(sag, origin, direction);
  expect(Math.abs(hit!.t - t)).toBeLessThanOrEqual(tolerance);
  expectVector(hit!.point, pointAt(origin, direction, t), tolerance);
  expect(Math.abs(hit!.point[2] - shape.sagAt(hit!.point[0], hit!.point[1]))).toBeLessThanOrEqual(tolerance);
}

describe("curved image shape", () => {
  const sphere = createImageSurfaceShape({ R: -50, sd: 20 });
  const frame = { widthMm: 36, heightMm: 24 };

  it("freezes authored geometry and matches the analytic sphere sag and positive-z normal", () => {
    expect(Object.isFrozen(sphere)).toBe(true);
    expect(sphere).toMatchObject({
      kind: "spherical",
      radius: -50,
      curvature: -0.02,
      conic: 0,
      semiDiameter: 20,
      cylinderAngle: null,
      xSymmetric: true,
    });
    const [x, y] = [6, 8];
    const z = sphereSag(10, -50);
    expect(Math.abs(sphere.sagAt(x, y) - z)).toBeLessThanOrEqual(1e-12);
    const normal = sphere.normalAt(x, y);
    expect(Math.hypot(...normal)).toBeCloseTo(1, 15);
    expect(normal[2]).toBeGreaterThan(0);
    // For negative R the shared positive-z normal is opposite the vector toward the centre at z = R.
    expectVector(normal, [x / 50, y / 50, (z + 50) / 50]);
    expect(sphere.normalAt(0, 0)).toEqual([0, 0, 1]);
  });

  it("lands an axial ray at the sag rather than the sphere's far hemisphere", () => {
    const hit = landImageSurfaceLine(sphere, [0, 10, -30], [0, 0, 1]);
    expect(hit).not.toBeNull();
    expectVector(hit!.point, [0, 10, sphereSag(10, -50)]);
    expect(hit!.t).toBeCloseTo(30 + sphereSag(10, -50), 12);
  });

  it.each([1, 2, 0.25, -1])("keeps signed t with direction scale %s", (speed) => {
    const hit = landImageSurfaceLine(sphere, [0, 10, 5], [0, 0, speed]);
    expect(hit).not.toBeNull();
    expect(Math.abs(hit!.t - (sphereSag(10, -50) - 5) / speed)).toBeLessThanOrEqual(1e-12);
    expectVector(hit!.point, [0, 10, sphereSag(10, -50)]);
  });

  it.each([-50, 50])("matches bisection for a slanted sphere ray, R = %s", (R) => {
    expectLanding(createImageSurfaceShape({ R, sd: 20 }), [1, 10, -30], [0.08, -0.04, 1], (x, y) =>
      sphereSag(Math.hypot(x, y), R),
    );
  });

  it("does not clip landings at the drawn semi-diameter", () => {
    const hit = landImageSurfaceLine(sphere, [0, 25, -30], [0, 0, 1]);
    expect(hit).not.toBeNull();
    expectVector(hit!.point, [0, 25, sphereSag(25, -50)]);
  });

  it("retains a double root at an interior tangent", () => {
    expect(landImageSurfaceLine(sphere, [-5, 0, 0], [1, 0, 0])).toEqual({ point: [0, 0, 0], t: 5 });
  });

  it("handles a paraboloid's linear axial solve and its slanted quadratic", () => {
    const shape = createImageSurfaceShape({ R: -50, asphere: { K: -1 }, sd: 20 });
    const sag = (x: number, y: number): number => -(x * x + y * y) / 100;
    expect(shape.kind).toBe("aspheric");
    expect(shape.conic).toBe(-1);
    expectLanding(shape, [0, 10, -30], [0, 0, 1], sag);
    expectLanding(shape, [2, 10, -30], [0.1, -0.03, 1], sag);
  });

  it.each([-0.5, -2])("lands a polynomial-free conic K = %s on its vertex sheet", (K) => {
    const shape = createImageSurfaceShape({ R: -50, asphere: { K }, sd: 20 });
    expectLanding(shape, [1, 10, -30], [0.08, -0.04, 1], (x, y) => {
      const r2 = x * x + y * y;
      return -r2 / (50 * (1 + Math.sqrt(1 - ((1 + K) * r2) / 2500)));
    });
  });

  it("expands sparse polynomial coefficients and converges against independent bisection", () => {
    const data = { R: -50, sd: 20, asphere: { K: -1, A4: 2e-6, A3: 1e-7 } };
    const shape = createImageSurfaceShape(data);
    const sag = (x: number, y: number): number => {
      const r = Math.hypot(x, y);
      return -(r * r) / 100 + 2e-6 * r ** 4 + 1e-7 * r ** 3;
    };
    expectLanding(shape, [2, 10, -30], [0.1, -0.03, 1], sag, 1e-9);
    const before = shape.sagAt(2, 10);
    data.asphere.A4 = 1;
    expect(shape.sagAt(2, 10)).toBe(before);
  });

  it("returns null when a polynomial has no real landing", () => {
    const shape = createImageSurfaceShape({ R: -50, sd: 20, asphere: { K: -1, A4: 1 } });
    expect(landImageSurfaceLine(shape, [0, 0, -1], [1, 0, 0])).toBeNull();
  });

  it.each(["long", "short"] as const)("lands skew rays on a cylinder viewed along its %s section", (section) => {
    const shape = createImageSurfaceShape({ R: -40, sd: 20, cylindrical: true, section });
    const flat = section === "short";
    expect(shape).toMatchObject({ kind: "cylindrical", conic: 0, cylinderAngle: flat ? Math.PI / 2 : 0 });
    expect(shape.sagAt(flat ? 0 : 15, flat ? 15 : 0)).toBeCloseTo(0, 15);
    expect(shape.sagAt(flat ? 15 : 0, flat ? 0 : 15)).toBeCloseTo(sphereSag(15, -40), 14);
    const normal = shape.normalAt(6, 8);
    expect(Math.abs(normal[flat ? 1 : 0])).toBe(0);
    expect(normal[2]).toBeGreaterThan(0);
    expect(Math.hypot(...normal)).toBeCloseTo(1, 15);
    expectLanding(shape, [4, 10, -30], [0.1, -0.04, 1], (x, y) => sphereSag(flat ? x : y, -40));
    expect(Number.isFinite(shape.sagAt(flat ? 1 : 1000, flat ? 1000 : 1))).toBe(true);
  });

  it("turns a cylinder obliquely toward the frame corner and lands on it", () => {
    const shape = createImageSurfaceShape({ R: -40, sd: 20, cylindrical: true, section: "corner" }, frame);
    const angle = Math.atan2(24, 36);
    expect(shape.cylinderAngle).toBeCloseTo(angle, 15);
    expect(shape.xSymmetric).toBe(false);
    const curved = (x: number, y: number) => x * Math.sin(angle) + y * Math.cos(angle);
    expect(shape.sagAt(6, 8)).toBeCloseTo(sphereSag(curved(6, 8), -40), 13);
    expect(shape.sagAt(6, 8)).not.toBeCloseTo(shape.sagAt(-6, 8), 6);
    expectLanding(shape, [4, 10, -30], [0.1, -0.04, 1], (x, y) => sphereSag(curved(x, y), -40));
  });

  it("gives image coordinates along the unrolled film of a cylinder, and lateral ones otherwise", () => {
    expect(sphere.toImageCoordinates(6, 8)).toEqual([6, 8]);
    expect(sphere.fromImageCoordinates(6, 8)).toEqual([6, 8]);
    const gate = createImageSurfaceShape({ R: -90, sd: 22, cylindrical: true }, frame);
    /* Arc length across the curve, R·asin(y/R); unchanged along the straight direction. */
    const [u, v] = gate.toImageCoordinates(5, 18);
    expect(u).toBe(5);
    expect(v).toBeCloseTo(-90 * Math.asin(18 / -90), 13);
    expect(v).toBeGreaterThan(18);
    expect(meridionalImageHeight(gate, 18)).toBe(v);
    for (const section of ["long", "short", "corner"] as const) {
      const shape = createImageSurfaceShape({ R: -90, sd: 22, cylindrical: true, section }, frame);
      const [back0, back1] = shape.fromImageCoordinates(...shape.toImageCoordinates(7, -11));
      expect(back0).toBeCloseTo(7, 12);
      expect(back1).toBeCloseTo(-11, 12);
    }
    /* Viewed toward the corner, a meridional landing unrolls off the meridian; its height is its distance on film. */
    const corner = createImageSurfaceShape({ R: -90, sd: 22, cylindrical: true, section: "corner" }, frame);
    const [cu, cv] = corner.toImageCoordinates(0, 18);
    expect(cu).not.toBe(0);
    expect(meridionalImageHeight(corner, 18)).toBeCloseTo(Math.hypot(cu, cv), 13);
  });

  it("sets a cylinder's field extent from the frame half-length along the viewed section", () => {
    const along = (section: "long" | "short" | "corner", curvedAlong?: "long" | "short") =>
      createImageSurfaceShape({ R: -90, sd: 22, cylindrical: true, section, curvedAlong }, frame);
    expect(along("long").fieldExtentMm).toBe(18);
    expect(along("short").fieldExtentMm).toBe(12);
    expect(along("corner").fieldExtentMm).toBeCloseTo(Math.hypot(36, 24) / 2, 12);
    /* A gate curved along the short side is curved in the short section and straight in the long one. */
    expect(along("short", "short").cylinderAngle).toBe(0);
    expect(along("long", "short").cylinderAngle).toBe(Math.PI / 2);
    expect(createImageSurfaceShape({ R: -90, sd: 22, cylindrical: true }).fieldExtentMm).toBeNull();
    expect(sphere.fieldExtentMm).toBeNull();
  });

  const symmetricData: ResolvedImageSurfaceData[] = [
    { R: -50, sd: 20 },
    { R: -50, sd: 20, asphere: { K: -1, A4: 2e-6, A3: 1e-7 } },
    { R: -40, sd: 20, cylindrical: true },
    { R: -40, sd: 20, cylindrical: true, section: "short" },
  ];
  it.each(symmetricData)("preserves bitwise x/y mirror symmetry: %j", (data) => {
    const shape = createImageSurfaceShape(data);
    for (const [x, y] of [
      [6, 8],
      [0, 3],
      [4, 0],
      [0, 0],
    ]) {
      expect(Object.is(shape.sagAt(x, y), shape.sagAt(-x, y))).toBe(true);
      expect(Object.is(shape.sagAt(x, y), shape.sagAt(x, -y))).toBe(true);
    }
  });

  it.each([
    [{ R: -50, sd: 20 }, [0, 50]],
    [{ R: -50, sd: 20 }, [51, 0]],
    [{ R: -50, sd: 20, asphere: { K: 3 } }, [0, 26]],
    [{ R: -40, sd: 20, cylindrical: true }, [0, 40]],
    [{ R: -40, sd: 20, cylindrical: true }, [0, 41]],
    [{ R: -40, sd: 20, cylindrical: true, section: "short" }, [41, 0]],
  ] satisfies [ResolvedImageSurfaceData, [number, number]][])(
    "rejects the domain edge and beyond: %j at %j",
    (data, [x, y]) => {
      const shape = createImageSurfaceShape(data);
      expect(shape.sagAt(x, y)).toBeNaN();
      expect(landImageSurfaceLine(shape, [x, y, -30], [0, 0, 1])).toBeNull();
    },
  );

  it.each([
    [
      [NaN, 0, -30],
      [0, 0, 1],
    ],
    [
      [0, Infinity, -30],
      [0, 0, 1],
    ],
    [
      [0, 0, -30],
      [0, NaN, 1],
    ],
    [
      [0, 0, -30],
      [0, 0, Infinity],
    ],
    [
      [0, 0, -30],
      [0, 0, 0],
    ],
    [
      [0, 0, 5],
      [1, 0, 0],
    ],
  ] satisfies [Vec3, Vec3][])("rejects invalid or missing intersections: %j along %j", (origin, direction) => {
    expect(landImageSurfaceLine(sphere, origin, direction)).toBeNull();
  });

  it.each([10, -25])("agrees across line and slope wrappers from global z = %s", (fromZ) => {
    const vertexZ = 7;
    const hit = landImageSurfaceLine(sphere, [2, 10, fromZ - vertexZ], [0.08, -0.04, 1]);
    expect(hit).not.toBeNull();
    expectVector(landImageSurfaceSkew(sphere, 2, 10, 0.08, -0.04, fromZ, vertexZ)!, [
      hit!.point[0],
      hit!.point[1],
      hit!.point[2] + vertexZ,
    ]);
    const skew = landImageSurfaceSkew(sphere, 0, 10, 0, -0.04, fromZ, vertexZ)!;
    expect(landImageSurfaceMeridional(sphere, 10, -0.04, fromZ, vertexZ)).toEqual({ y: skew[1], z: skew[2] });
    expect(landImageSurfaceMeridional(sphere, 60, 0, fromZ, vertexZ)).toBeNull();
  });
});

describe("placed image surface", () => {
  const angle = Math.PI / 6;
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  const plane: Plane3 = { point: [2, 3, 7], normal: [0, s, c], label: "tilted image" };
  const rotate = ([x, y, z]: Vec3): Vec3 => [x, c * y + s * z, -s * y + c * z];
  const globalPoint = (p: Vec3): Vec3 => {
    const v = rotate(p);
    return [v[0] + 2, v[1] + 3, v[2] + 7];
  };
  const shape = createImageSurfaceShape({ R: -50, sd: 20 });

  it("builds an orthonormal frame from a non-unit meridional normal", () => {
    const frame = imageSurfaceLocalFrame({ ...plane, normal: [0, 3 * s, 3 * c] });
    expect(frame).not.toBeNull();
    expectVector(frame!.ex, [1, 0, 0]);
    expectVector(frame!.ey, [0, c, -s]);
    expectVector(frame!.ez, [0, s, c]);
  });

  it("matches a hand-transformed local landing, parameter and normal", () => {
    const origin: Vec3 = [2, 10, -30];
    const direction: Vec3 = [0.1, -0.03, 2];
    const local = landImageSurfaceLine(shape, origin, direction)!;
    const hit = intersectImageSurface(shape, plane, { origin: globalPoint(origin), direction: rotate(direction) });
    expect(hit).not.toBeNull();
    expect(Math.abs(hit!.t - local.t)).toBeLessThanOrEqual(1e-12);
    expectVector(hit!.point, globalPoint(local.point));
    expectVector(hit!.normal, rotate(shape.normalAt(local.point[0], local.point[1])));
  });

  it.each([-1, 0, 1e-7])("rejects t = %s at or behind the default forward threshold", (t) => {
    const axial: Plane3 = { point: [0, 0, 0], normal: [0, 0, 1], label: "axial" };
    expect(intersectImageSurface(shape, axial, { origin: [0, 0, -t], direction: [0, 0, 1] })).toBeNull();
  });

  it("uses the caller's exclusive minT without changing the direction scale", () => {
    const ray = { origin: globalPoint([0, 0, -10]), direction: rotate([0, 0, 2]) };
    expect(intersectImageSurface(shape, plane, ray, 6)).toBeNull();
    expect(intersectImageSurface(shape, plane, ray, 4)!.t).toBeCloseTo(5, 14);
  });

  it("rejects an undefined frame or a non-finite ray", () => {
    for (const normal of [
      [0, 0, 0],
      [1, 0, 0],
      [0, NaN, 1],
    ] satisfies Vec3[]) {
      expect(imageSurfaceLocalFrame({ ...plane, normal })).toBeNull();
    }
    expect(imageSurfaceLocalFrame({ ...plane, point: [0, Infinity, 0] })).toBeNull();
    expect(intersectImageSurface(shape, plane, { origin: [0, NaN, 0], direction: [0, 0, 1] })).toBeNull();
  });
});
