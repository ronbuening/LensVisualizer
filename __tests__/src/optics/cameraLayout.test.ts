import { describe, expect, it } from "vitest";
import { anchorLayoutToCamera } from "../../../src/optics/cameraLayout.js";
import type { LayoutResult } from "../../../src/types/optics.js";

describe("camera-anchored layout", () => {
  it("translates current vertices while preserving the reference image plane and current spacings", () => {
    const reference: LayoutResult = { z: [0, 4], th: [4, 10], imgZ: 14 };
    const current: LayoutResult = { z: [0, 5], th: [5, 12], imgZ: 17 };

    const anchored = anchorLayoutToCamera(reference, current);

    expect(anchored).toEqual({ z: [-3, 2], th: current.th, imgZ: 14, axialShiftMm: -3 });
    expect(reference).toEqual({ z: [0, 4], th: [4, 10], imgZ: 14 });
    expect(current).toEqual({ z: [0, 5], th: [5, 12], imgZ: 17 });
  });

  it("is identity at the reference state without reusing the input vertex array", () => {
    const reference: LayoutResult = { z: [0, 4], th: [4, 10], imgZ: 14 };

    const anchored = anchorLayoutToCamera(reference, reference);

    expect(anchored.z).toEqual(reference.z);
    expect(anchored.z).not.toBe(reference.z);
    expect(anchored.imgZ).toBe(reference.imgZ);
    expect(anchored.axialShiftMm).toBe(0);
  });
});
