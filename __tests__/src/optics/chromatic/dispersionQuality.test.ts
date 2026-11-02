import { describe, expect, it } from "vitest";
import {
  summarizeDispersionQuality,
  summarizeDispersionQualityForLens,
  summarizeDispersionQualityForState,
} from "../../../../src/optics/chromatic/dispersionQuality.js";

import type { RuntimeLens } from "../../../../src/types/optics.js";
import type { CompiledLens, PreparedOpticalState } from "../../../../src/optics/types.js";
import { buildChromaticPositiveElementLens, buildSimplePositiveElementLens } from "../testLensFixtures.js";

function lensWithQualities(qualities: Array<"air" | "sellmeier" | "lineIndices" | "abbe" | "constant">): CompiledLens {
  return {
    dispersion: qualities.map((quality) => ({ quality })),
  } as unknown as CompiledLens;
}

describe("dispersion quality summaries", () => {
  it("reports the weakest non-air quality in ordering used by UI badges", () => {
    expect(summarizeDispersionQualityForLens(lensWithQualities(["air", "sellmeier", "lineIndices"]))).toBe(
      "lineIndices",
    );
    expect(summarizeDispersionQualityForLens(lensWithQualities(["sellmeier", "abbe", "lineIndices"]))).toBe("abbe");
    expect(summarizeDispersionQualityForLens(lensWithQualities(["sellmeier", "constant", "abbe"]))).toBe("constant");
  });

  it("preserves sparse runtime tables and ignores entries beyond the surface count", () => {
    const runtime = {
      N: 3,
      indexByIdx: { 0: { quality: "air" }, 2: { quality: "lineIndices" }, 3: { quality: "constant" } },
    } as unknown as RuntimeLens;
    expect(summarizeDispersionQuality(runtime)).toBe("lineIndices");
  });

  it("treats all-air or empty lenses as sellmeier-quality by default", () => {
    expect(summarizeDispersionQualityForLens(lensWithQualities([]))).toBe("sellmeier");
    expect(summarizeDispersionQualityForLens(lensWithQualities(["air", "air"]))).toBe("sellmeier");
  });

  it("accepts prepared optical states", () => {
    const state = { lens: lensWithQualities(["sellmeier", "abbe"]) } as PreparedOpticalState;
    expect(summarizeDispersionQualityForState(state)).toBe("abbe");
  });

  it("shares the public runtime summary and reads table quality without resolving materials", () => {
    expect(summarizeDispersionQuality).toBe(summarizeDispersionQuality);
    const catalogLens = buildChromaticPositiveElementLens("test-dispersion-quality-catalog");
    const fallbackLens = buildSimplePositiveElementLens("test-dispersion-quality-fallback");

    expect(summarizeDispersionQuality(catalogLens)).toBe("sellmeier");
    expect(summarizeDispersionQuality(fallbackLens)).toBe("abbe");
    expect(summarizeDispersionQuality(fallbackLens)).toBe("abbe");
  });
});
