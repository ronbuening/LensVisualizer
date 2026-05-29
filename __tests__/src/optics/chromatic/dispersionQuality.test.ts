import { describe, expect, it } from "vitest";
import {
  summarizeDispersionQuality2,
  summarizeDispersionQualityForLens2,
  summarizeDispersionQualityForState2,
} from "../../../../src/optics/chromatic/dispersionQuality.js";
import type { EngineLens, PreparedOpticalState } from "../../../../src/optics/types.js";
import { buildChromaticPositiveElementLens, buildSimplePositiveElementLens } from "../testLensFixtures.js";

function lensWithQualities(qualities: Array<"air" | "sellmeier" | "lineIndices" | "abbe" | "constant">): EngineLens {
  return {
    dispersion: qualities.map((quality) => ({ quality })),
  } as unknown as EngineLens;
}

describe("dispersion quality summaries", () => {
  it("reports the weakest non-air quality in ordering used by UI badges", () => {
    expect(summarizeDispersionQualityForLens2(lensWithQualities(["air", "sellmeier", "lineIndices"]))).toBe(
      "lineIndices",
    );
    expect(summarizeDispersionQualityForLens2(lensWithQualities(["sellmeier", "abbe", "lineIndices"]))).toBe("abbe");
    expect(summarizeDispersionQualityForLens2(lensWithQualities(["sellmeier", "constant", "abbe"]))).toBe("constant");
  });

  it("treats all-air or empty lenses as sellmeier-quality by default", () => {
    expect(summarizeDispersionQualityForLens2(lensWithQualities([]))).toBe("sellmeier");
    expect(summarizeDispersionQualityForLens2(lensWithQualities(["air", "air"]))).toBe("sellmeier");
  });

  it("accepts prepared optical states", () => {
    const state = { lens: lensWithQualities(["sellmeier", "abbe"]) } as PreparedOpticalState;
    expect(summarizeDispersionQualityForState2(state)).toBe("abbe");
  });

  it("summarizes runtime lenses and caches their normalized engine lens", () => {
    const catalogLens = buildChromaticPositiveElementLens("test-dispersion-quality-catalog");
    const fallbackLens = buildSimplePositiveElementLens("test-dispersion-quality-fallback");

    expect(summarizeDispersionQuality2(catalogLens)).toBe("sellmeier");
    expect(summarizeDispersionQuality2(fallbackLens)).toBe("abbe");
    expect(summarizeDispersionQuality2(fallbackLens)).toBe("abbe");
  });
});
