import { describe, expect, it } from "vitest";
import {
  CHANNEL_WAVELENGTH_NM_2,
  CHROMATIC_CHANNELS_2,
  channelIndexResolverForState2,
  indexAtPreparedSurface2,
  indexAtRuntimeSurface2,
  wavelengthNd2,
} from "../../../../src/optics/chromatic/indexResolver.js";
import { LINE_NM } from "../../../../src/optics/glassCatalog.js";
import type { PreparedOpticalState } from "../../../../src/optics/types.js";
import type { ChromaticChannel } from "../../../../src/types/optics.js";
import { buildSimplePositiveElementLens } from "../testLensFixtures.js";

describe("chromatic index resolver", () => {
  it("defines stable channel ordering and wavelength mapping", () => {
    expect(CHROMATIC_CHANNELS_2).toEqual(["R", "G", "B", "V"]);
    expect(CHANNEL_WAVELENGTH_NM_2).toEqual({
      R: LINE_NM.C,
      G: LINE_NM.d,
      B: LINE_NM.F,
      V: LINE_NM.g,
    });
  });

  it("falls back from d-line index and Abbe number when catalog data is unavailable", () => {
    const nd = 1.5168;
    const vd = 64.17;
    const red = wavelengthNd2(nd, vd, "R");
    const green = wavelengthNd2(nd, vd, "G");
    const blue = wavelengthNd2(nd, vd, "B");
    const violet = wavelengthNd2(nd, vd, "V");

    expect(wavelengthNd2(1, vd, "B")).toBe(1);
    expect(wavelengthNd2(nd, undefined, "B")).toBe(nd);
    expect(red).toBeLessThan(green);
    expect(green).toBe(nd);
    expect(blue).toBeGreaterThan(green);
    expect(violet).toBeGreaterThan(blue);
  });

  it("resolves prepared-state indices with air, invalid surface, d-line, and channel branches", () => {
    const state = {
      surfaces: [{ nd: 1 }, { nd: 1.5 }, { nd: 1.6 }],
      lens: {
        dispersion: [undefined, { indexAt: (channel: ChromaticChannel) => (channel === "R" ? 1.49 : 1.51) }, undefined],
      },
    } as unknown as PreparedOpticalState;

    expect(indexAtPreparedSurface2(state, -1, "B")).toBe(1);
    expect(indexAtPreparedSurface2(state, 0, undefined)).toBe(1);
    expect(indexAtPreparedSurface2(state, 1, undefined)).toBe(1.5);
    expect(indexAtPreparedSurface2(state, 1, "R")).toBe(1.49);
    expect(indexAtPreparedSurface2(state, 2, "B")).toBe(1.6);

    const resolver = channelIndexResolverForState2(state, "B");
    expect(resolver?.(1, 1.5)).toBe(1.51);
    expect(resolver?.(2, 1.6)).toBe(1.6);
    expect(channelIndexResolverForState2(state, undefined)).toBeUndefined();
  });

  it("resolves runtime-lens indices and reuses the normalized runtime cache", () => {
    const lens = buildSimplePositiveElementLens("test-chromatic-index-runtime");
    const green = indexAtRuntimeSurface2(lens, 1, "G");
    const blue = indexAtRuntimeSurface2(lens, 1, "B");

    expect(indexAtRuntimeSurface2(lens, 100, "B")).toBe(1);
    expect(indexAtRuntimeSurface2(lens, 0, undefined)).toBe(1);
    expect(indexAtRuntimeSurface2(lens, 1, undefined)).toBeCloseTo(lens.S[1].nd, 10);
    expect(green).toBeCloseTo(lens.S[1].nd, 10);
    expect(blue).toBeGreaterThan(green);
    expect(indexAtRuntimeSurface2(lens, 1, "B")).toBeCloseTo(blue, 12);
  });
});
