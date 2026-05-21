import { describe, expect, it } from "vitest";
import {
  MAX_FIELD_LAUNCH_DEG,
  projectionLaunchVectorForFieldAngles,
  type ProjectionReference,
} from "../../../src/optics/projection.js";

const RECTILINEAR_REFERENCE: ProjectionReference = {
  kind: "rectilinear",
  label: "Rectilinear distortion",
  shortLabel: "rectilinear",
  focalScaleMm: 50,
};

const FISHEYE_REFERENCE: ProjectionReference = {
  kind: "fisheye-equidistant",
  label: "Equidistant projection residual",
  shortLabel: "equidistant",
  focalScaleMm: 6,
};

const EQUISOLID_REFERENCE: ProjectionReference = {
  kind: "fisheye-equisolid",
  label: "Equisolid-angle projection residual",
  shortLabel: "equisolid",
  focalScaleMm: 15,
};

describe("projectionLaunchVectorForFieldAngles", () => {
  it("returns on-axis at (0, 0)", () => {
    const r = projectionLaunchVectorForFieldAngles(RECTILINEAR_REFERENCE, 0, 0);
    expect(r.status).toBe("on-axis");
    expect(r.fieldSlopeX).toBe(0);
    expect(r.fieldSlopeY).toBe(0);
    expect(r.idealImageX).toBe(0);
    expect(r.idealImageY).toBe(0);
    expect(r.totalFieldDeg).toBe(0);
  });

  it("rectilinear: on-axis meridional sample matches tan(theta)", () => {
    const r = projectionLaunchVectorForFieldAngles(RECTILINEAR_REFERENCE, 30, 0);
    expect(r.status).toBe("ok");
    expect(r.fieldSlopeX).toBeCloseTo(Math.tan((30 * Math.PI) / 180), 12);
    expect(r.fieldSlopeY).toBeCloseTo(0, 12);
    expect(r.idealImageX).toBeCloseTo(RECTILINEAR_REFERENCE.focalScaleMm * Math.tan((30 * Math.PI) / 180), 10);
    expect(r.idealImageY).toBeCloseTo(0, 12);
    expect(r.totalFieldDeg).toBeCloseTo(30, 12);
  });

  it("fisheye-equidistant: angular Cartesian samples map to Cartesian image points", () => {
    const r = projectionLaunchVectorForFieldAngles(FISHEYE_REFERENCE, 60, 60);
    expect(r.status).toBe("ok");
    expect(r.totalFieldDeg).toBeCloseTo(Math.hypot(60, 60), 12);
    // Equidistant collapse: image at (f·θ_x_rad, f·θ_y_rad).
    expect(r.idealImageX).toBeCloseTo((FISHEYE_REFERENCE.focalScaleMm * (60 * Math.PI)) / 180, 10);
    expect(r.idealImageY).toBeCloseTo((FISHEYE_REFERENCE.focalScaleMm * (60 * Math.PI)) / 180, 10);
  });

  it("returns out-of-domain when total angle hits the slope-launch cap", () => {
    const r = projectionLaunchVectorForFieldAngles(FISHEYE_REFERENCE, 70, 70);
    expect(r.totalFieldDeg).toBeGreaterThan(MAX_FIELD_LAUNCH_DEG);
    expect(r.status).toBe("out-of-domain");
    expect(Number.isNaN(r.fieldSlopeX)).toBe(true);
    expect(Number.isNaN(r.fieldSlopeY)).toBe(true);
    // Ideal image coordinates remain finite — forward-map is well-defined past the cap.
    expect(Number.isFinite(r.idealImageX)).toBe(true);
    expect(Number.isFinite(r.idealImageY)).toBe(true);
  });

  it("rejects non-finite inputs", () => {
    expect(projectionLaunchVectorForFieldAngles(RECTILINEAR_REFERENCE, Number.NaN, 0).status).toBe("out-of-domain");
    expect(projectionLaunchVectorForFieldAngles(RECTILINEAR_REFERENCE, 0, Number.POSITIVE_INFINITY).status).toBe(
      "out-of-domain",
    );
  });

  it("fisheye: azimuthal slope decomposition is consistent", () => {
    const r = projectionLaunchVectorForFieldAngles(FISHEYE_REFERENCE, 40, 30);
    const total = Math.hypot(40, 30);
    const slopeMag = Math.tan((total * Math.PI) / 180);
    expect(r.fieldSlopeX).toBeCloseTo((40 / total) * slopeMag, 12);
    expect(r.fieldSlopeY).toBeCloseTo(-(30 / total) * slopeMag, 12);
  });

  it("fisheye-equisolid: image radius follows r = 2f·sin(θ/2)", () => {
    const r = projectionLaunchVectorForFieldAngles(EQUISOLID_REFERENCE, 60, 0);
    expect(r.status).toBe("ok");
    const expectedRadius = 2 * EQUISOLID_REFERENCE.focalScaleMm * Math.sin((60 * Math.PI) / 180 / 2);
    expect(r.idealImageX).toBeCloseTo(expectedRadius, 10);
    expect(r.idealImageY).toBeCloseTo(0, 12);
  });

  it("fisheye-equisolid: 60°/60° corner is out-of-domain but image point remains finite", () => {
    const r = projectionLaunchVectorForFieldAngles(EQUISOLID_REFERENCE, 70, 70);
    expect(r.status).toBe("out-of-domain");
    expect(Number.isFinite(r.idealImageX)).toBe(true);
    expect(Number.isFinite(r.idealImageY)).toBe(true);
  });
});
