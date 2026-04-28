import { describe, expect, it } from "vitest";
import { snapToStop, snapToZeroStop } from "../src/utils/sliderStops.js";

describe("sliderStops", () => {
  it("snaps values within the configured stop range", () => {
    expect(snapToStop(0.09, 0, 0.15)).toBe(0);
    expect(snapToStop(-0.09, 0, 0.15)).toBe(0);
  });

  it("leaves values outside the configured stop range untouched", () => {
    expect(snapToStop(0.2, 0, 0.15)).toBe(0.2);
  });

  it("uses the slider step to create a natural zero stop", () => {
    expect(snapToZeroStop(0.1, 0.1)).toBe(0);
    expect(snapToZeroStop(-0.1, 0.1)).toBe(0);
    expect(snapToZeroStop(0.2, 0.1)).toBe(0.2);
  });
});
