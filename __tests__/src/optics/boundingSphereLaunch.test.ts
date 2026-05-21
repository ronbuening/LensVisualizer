import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import { solveChiefRay } from "../../../src/optics/fieldGeometry.js";
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

  it("reports bounding-sphere launch for past-cap fields (currently still out-of-domain)", () => {
    const L = buildLens(LENS_CATALOG[FISHEYE_FIXTURE]);
    const result = solveChiefRay(MAX_FIELD_LAUNCH_DEG + 5, 0, 0, L);
    expect(result.launchSurface).toBe("bounding-sphere");
    expect(result.status).toBe("out-of-domain");
  });

  it("caches object-plane and bounding-sphere solves independently for the same field magnitude", () => {
    const L = buildLens(LENS_CATALOG[FISHEYE_FIXTURE]);
    const below = solveChiefRay(MAX_FIELD_LAUNCH_DEG - 1, 0, 0, L);
    const above = solveChiefRay(MAX_FIELD_LAUNCH_DEG + 1, 0, 0, L);
    expect(below.launchSurface).toBe("object-plane");
    expect(above.launchSurface).toBe("bounding-sphere");
  });
});
