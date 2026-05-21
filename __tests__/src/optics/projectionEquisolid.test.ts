import { describe, expect, it } from "vitest";
import {
  projectionFieldAngleForImageHeight,
  projectionImageHeightForAngle,
  type ProjectionReference,
} from "../../../src/optics/projection.js";

const EQUISOLID: ProjectionReference = {
  kind: "fisheye-equisolid",
  label: "Equisolid-angle projection residual",
  shortLabel: "equisolid",
  focalScaleMm: 15,
};

describe("fisheye-equisolid projection", () => {
  it("forward maps r = 2f·sin(θ/2) at canonical angles", () => {
    expect(projectionImageHeightForAngle(EQUISOLID, 0)).toBe(0);
    expect(projectionImageHeightForAngle(EQUISOLID, Math.PI / 2)).toBeCloseTo(
      2 * EQUISOLID.focalScaleMm * Math.sin(Math.PI / 4),
      10,
    );
    expect(projectionImageHeightForAngle(EQUISOLID, Math.PI)).toBeCloseTo(2 * EQUISOLID.focalScaleMm, 10);
  });

  it("round-trips forward then inverse within tolerance", () => {
    for (const thetaDeg of [5, 30, 60, 90, 120, 170]) {
      const thetaRad = (thetaDeg * Math.PI) / 180;
      const r = projectionImageHeightForAngle(EQUISOLID, thetaRad);
      const back = projectionFieldAngleForImageHeight(EQUISOLID, r);
      expect(back).toBeCloseTo(thetaRad, 10);
    }
  });

  it("inverse returns NaN for radii outside the projection's domain (r > 2f)", () => {
    expect(projectionFieldAngleForImageHeight(EQUISOLID, 2 * EQUISOLID.focalScaleMm + 1e-6)).toBeNaN();
  });
});
