import { describe, expect, it } from "vitest";
import canonEf from "../../../src/mount-data/records/canon-ef.json";
import {
  clockwiseSweepDeg,
  mirrorLensRearAngleDeg,
  normalizeAngleDeg,
  sortFeaturesByAngle,
  viewBoxForDiameter,
} from "../../../src/mount-data/geometry.js";
import type { LensMountSpec } from "../../../src/mount-data/types.js";

describe("mount SVG geometry helpers", () => {
  it("normalizes stored angles and mirrors lens-rear views", () => {
    expect(normalizeAngleDeg(-30)).toBe(330);
    expect(normalizeAngleDeg(390)).toBe(30);
    expect(mirrorLensRearAngleDeg(30)).toBe(330);
    expect(mirrorLensRearAngleDeg(0)).toBe(0);
  });

  it("uses clockwise wraparound spans", () => {
    expect(clockwiseSweepDeg(350, 10)).toBe(20);
    expect(clockwiseSweepDeg(10, 350)).toBe(340);
    expect(clockwiseSweepDeg(0, 360)).toBe(360);
  });

  it("expands deterministic viewBoxes by the configured margin", () => {
    expect(viewBoxForDiameter(54)).toBe("-33 -33 66 66");
  });

  it("sorts known-angle features before unknown placeholders", () => {
    const spec = canonEf as LensMountSpec;
    const sorted = sortFeaturesByAngle(spec.cameraSideFeatures);
    expect(sorted[0].featureId).toBe("body-throat");
    expect(sorted.at(-1)?.featureId).toBe("body-lock-pin");
  });
});
