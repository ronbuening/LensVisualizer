import { describe, expect, it } from "vitest";
import LENS_DEFAULTS from "../../../../src/lens-data/defaults.js";
import PortraitHeliarRaw from "../../../../src/lens-data/voigtlander/VoigtlanderPortraitHeliar75mmf18.data.js";
import buildLens from "../../../../src/optics/buildLens.js";
import { thick } from "../../../../src/optics/optics.js";
import type { LensData } from "../../../../src/types/optics.js";

describe("Voigtländer Portrait Heliar 75mm f/1.8 aberration control", () => {
  it("matches the production Over-Sharp-Under ring direction", () => {
    const L = buildLens({ ...LENS_DEFAULTS, ...PortraitHeliarRaw } as LensData);
    const u3 = L.S.findIndex((surface) => surface.label === "3");

    expect(u3).toBeGreaterThanOrEqual(0);
    expect(L.aberrationControl).toMatchObject({
      minLabel: "OVER",
      centerLabel: "SHARP",
      maxLabel: "UNDER",
    });
    expect(thick(u3, 0, 0, L, -1)).toBeCloseTo(11.73, 8);
    expect(thick(u3, 0, 0, L, 0)).toBeCloseTo(8.73, 8);
    expect(thick(u3, 0, 0, L, 1)).toBeCloseTo(5.73, 8);
  });
});
