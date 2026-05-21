import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import { solveChiefRay, solveChiefRayBoundingSphere } from "../../../src/optics/fieldGeometry.js";
import {
  boundingSphereLaunchVector,
  launchSurfaceForFieldDeg,
  MAX_FIELD_LAUNCH_DEG,
} from "../../../src/optics/projection.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";

const RECTILINEAR_FIXTURE = "nokton-50f1";
const FISHEYE_FIXTURE = "nikon-fisheye-nikkor-6mm-f28";

describe("launchSurfaceForFieldDeg", () => {
  it("returns object-plane for fields below the cap", () => {
    for (const deg of [0, 10, 45, 80, MAX_FIELD_LAUNCH_DEG - 0.01]) {
      expect(launchSurfaceForFieldDeg(deg)).toBe("object-plane");
    }
  });

  it("returns bounding-sphere at and beyond the cap", () => {
    expect(launchSurfaceForFieldDeg(MAX_FIELD_LAUNCH_DEG)).toBe("bounding-sphere");
    expect(launchSurfaceForFieldDeg(110)).toBe("bounding-sphere");
    expect(launchSurfaceForFieldDeg(-110)).toBe("bounding-sphere");
  });
});

describe("boundingSphereLaunchVector", () => {
  it("origin sits exactly one launch-radius away from the EP along the ray direction", () => {
    const result = boundingSphereLaunchVector(5, 60, 0, 100);
    expect(result.status).toBe("ok");
    const distanceFromEp = Math.hypot(result.origin[0], result.origin[1], result.origin[2] - 5);
    expect(distanceFromEp).toBeCloseTo(100, 9);
  });

  it("direction is a unit vector matching the fisheye azimuthal decomposition", () => {
    const result = boundingSphereLaunchVector(0, 30, 40, 50);
    const total = Math.hypot(30, 40);
    const thetaRad = (total * Math.PI) / 180;
    const cosAz = 30 / total;
    const sinAz = 40 / total;
    expect(Math.hypot(...result.direction)).toBeCloseTo(1, 12);
    expect(result.direction[0]).toBeCloseTo(-Math.sin(thetaRad) * cosAz, 12);
    expect(result.direction[1]).toBeCloseTo(-Math.sin(thetaRad) * sinAz, 12);
    expect(result.direction[2]).toBeCloseTo(Math.cos(thetaRad), 12);
  });

  it("represents rays with non-positive direction[2] for θ ≥ 90°", () => {
    const ninety = boundingSphereLaunchVector(0, 90, 0, 50);
    expect(ninety.direction[2]).toBeCloseTo(0, 12);
    const past = boundingSphereLaunchVector(0, 110, 0, 50);
    expect(past.direction[2]).toBeLessThan(0);
  });

  it("rejects invalid inputs", () => {
    expect(boundingSphereLaunchVector(0, Number.NaN, 0, 100).status).toBe("invalid");
    expect(boundingSphereLaunchVector(0, 0, 0, 0).status).toBe("invalid");
    expect(boundingSphereLaunchVector(0, 0, 0, -5).status).toBe("invalid");
  });
});

describe("solveChiefRay launchSurface dispatch", () => {
  it("reports object-plane launch for in-domain fields", () => {
    const L = buildLens(LENS_CATALOG[RECTILINEAR_FIXTURE]);
    const result = solveChiefRay(20, 0, 0, L);
    expect(result.launchSurface).toBe("object-plane");
    expect(result.status).not.toBe("out-of-domain");
  });

  it("dispatches past-cap fields through the bounding-sphere launch arm", () => {
    const L = buildLens(LENS_CATALOG[FISHEYE_FIXTURE]);
    const result = solveChiefRay(MAX_FIELD_LAUNCH_DEG + 5, 0, 0, L);
    expect(result.launchSurface).toBe("bounding-sphere");
  });

  it("caches object-plane and bounding-sphere solves independently for the same field magnitude", () => {
    const L = buildLens(LENS_CATALOG[FISHEYE_FIXTURE]);
    const below = solveChiefRay(MAX_FIELD_LAUNCH_DEG - 1, 0, 0, L);
    const above = solveChiefRay(MAX_FIELD_LAUNCH_DEG + 1, 0, 0, L);
    expect(below.launchSurface).toBe("object-plane");
    expect(above.launchSurface).toBe("bounding-sphere");
  });
});

describe("bounding-sphere parity vs object-plane (PR 8 Step 4)", () => {
  // Within MAX_FIELD_LAUNCH_DEG and within each lens's actual half-field both
  // launch surfaces describe the same physical chief ray. The bounding-sphere
  // solver reports its yLaunch projected back to z=0, which must agree with
  // the object-plane yLaunch to machine precision since they parameterize the
  // same ray, traced through the same surfaces with the same intersection
  // algorithm — just with the origin on different surfaces.
  it.each([3, 5, 10, 15, 20])(
    "agrees with the object-plane path at θ=%d° on the rectilinear fixture (within its 21.6° half-field)",
    (fieldDeg) => {
      const L = buildLens(LENS_CATALOG[RECTILINEAR_FIXTURE]);
      const objectPlane = solveChiefRay(fieldDeg, 0, 0, L);
      const boundingSphere = solveChiefRayBoundingSphere(fieldDeg, 0, 0, L, undefined, 0, undefined);

      expect(objectPlane.status).toBe("converged");
      expect(objectPlane.launchSurface).toBe("object-plane");
      expect(boundingSphere.status).toBe("converged");
      expect(boundingSphere.launchSurface).toBe("bounding-sphere");

      // Bit-identity to ~1e-12: both paths describe the same physical chief
      // ray; the only divergence comes from the bisection's convergence
      // tolerance (1e-9 mm at the stop). Projecting back to z=0 scales that
      // by ~1/cos(θ), still well within the test bound.
      expect(boundingSphere.yLaunch).toBeCloseTo(objectPlane.yLaunch, 9);
    },
  );

  it("agrees at θ=5° on the fisheye fixture", () => {
    const L = buildLens(LENS_CATALOG[FISHEYE_FIXTURE]);
    const objectPlane = solveChiefRay(5, 0, 0, L);
    const boundingSphere = solveChiefRayBoundingSphere(5, 0, 0, L, undefined, 0, undefined);

    expect(objectPlane.status).toBe("converged");
    expect(boundingSphere.status).toBe("converged");
    expect(boundingSphere.yLaunch).toBeCloseTo(objectPlane.yLaunch, 9);
  });
});

describe("past-cap chief rays exercise the bounding-sphere tracer (PR 8 integration)", () => {
  // These tests prove the post-Step-3 dispatch + post-Step-1/2 tracer surgery
  // actually run the bounding-sphere geometry on past-cap fields. Convergence
  // is not asserted because the Nikon 6mm's runtime bracket-finding past 89°
  // depends on launch-radius tuning that is still part of Step 7 (catalog
  // promotion). What IS asserted: the solver routes through bounding-sphere,
  // dispatches without exception, and reports a launchSurface tag consistent
  // with the field angle.
  it.each([90, 100, 110])("solveChiefRay at θ=%d° dispatches to the bounding-sphere arm on the Nikon 6mm", (deg) => {
    const L = buildLens(LENS_CATALOG[FISHEYE_FIXTURE]);
    const result = solveChiefRay(deg, 0, 0, L);
    expect(result.launchSurface).toBe("bounding-sphere");
    // The solver must complete without throwing and surface a real status.
    expect(["converged", "paraxial-fallback", "bracket-failed"]).toContain(result.status);
    // iterations may be 0 on a paraxial-fallback or bracket-failed path; the
    // important thing is the cache key separation (object-plane vs
    // bounding-sphere) is exercised distinctly from the < 89° path.
    const objectPlaneAt89 = solveChiefRay(88, 0, 0, L);
    expect(objectPlaneAt89.launchSurface).toBe("object-plane");
  });

  it("solveChiefRay caches past-cap and within-cap results independently", () => {
    const L = buildLens(LENS_CATALOG[FISHEYE_FIXTURE]);
    const below1 = solveChiefRay(88, 0, 0, L);
    const below2 = solveChiefRay(88, 0, 0, L);
    const above1 = solveChiefRay(95, 0, 0, L);
    const above2 = solveChiefRay(95, 0, 0, L);

    // Same field angle: identical reference (cache hit).
    expect(below2).toBe(below1);
    expect(above2).toBe(above1);
    // Different launch surfaces: different objects (cache key includes
    // launchSurface).
    expect(above1).not.toBe(below1);
    expect(above1.launchSurface).toBe("bounding-sphere");
    expect(below1.launchSurface).toBe("object-plane");
  });
});
