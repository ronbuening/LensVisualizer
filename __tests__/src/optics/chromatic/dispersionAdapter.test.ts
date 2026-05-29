import { describe, expect, it } from "vitest";
import {
  compileSurfaceDispersions,
  dispersionTableFromRuntime2,
  makeSurfaceDispersion2,
} from "../../../../src/optics/chromatic/dispersionAdapter.js";
import { buildChromaticPositiveElementLens } from "../testLensFixtures.js";

describe("chromatic dispersion adapter", () => {
  it("creates per-surface dispersion descriptors through the v2 wrapper", () => {
    const descriptor = makeSurfaceDispersion2(
      { R: 0, d: 0, sd: 0, label: "1", nd: 1.5168, elemId: 1 },
      { id: 1, name: "L1", label: "L1", type: "positive", nd: 1.5168, vd: 64.17, glass: "N-BK7" },
      undefined,
    );

    expect(descriptor.quality).toBe("sellmeier");
    expect(descriptor.fn("R")).toBeLessThan(descriptor.fn("B"));
  });

  it("compiles a runtime lens dispersion table with one descriptor per surface", () => {
    const lens = buildChromaticPositiveElementLens("test-dispersion-adapter");
    const fromRuntime = dispersionTableFromRuntime2(lens);

    expect(fromRuntime.map((entry) => entry.quality)).toEqual(
      compileSurfaceDispersions(lens.S, lens.data.elements, lens.spectralByIdx).map((entry) => entry.quality),
    );
    expect(fromRuntime).toHaveLength(lens.S.length);
    expect(fromRuntime.some((entry) => entry.quality === "sellmeier")).toBe(true);
  });
});
