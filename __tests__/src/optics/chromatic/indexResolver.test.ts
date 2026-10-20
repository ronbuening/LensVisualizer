import { describe, expect, it } from "vitest";
import { CHROMATIC_CHANNEL_WAVELENGTH_NM as CHANNEL_WAVELENGTH_NM } from "../../../../src/optics/chromatic/channels.js";
import {
  CHROMATIC_CHANNELS,
  channelIndexResolverForState,
  indexAtPreparedSurface,
  indexAtRuntimeSurface,
  wavelengthNd,
} from "../../../../src/optics/chromatic/indexResolver.js";
import { LINE_NM } from "../../../../src/optics/chromatic/spectralLines.js";
import type { PreparedOpticalState } from "../../../../src/optics/types.js";
import type { ChromaticChannel } from "../../../../src/types/optics.js";
import { buildSimplePositiveElementLens } from "../testLensFixtures.js";

describe("chromatic index resolver", () => {
  it("defines stable channel ordering and wavelength mapping", () => {
    expect(CHROMATIC_CHANNELS).toEqual(["R", "G", "B", "V"]);
    expect(CHANNEL_WAVELENGTH_NM).toEqual({
      R: LINE_NM.C,
      G: LINE_NM.d,
      B: LINE_NM.F,
      V: LINE_NM.g,
    });
  });

  it("falls back from d-line index and Abbe number when catalog data is unavailable", () => {
    const nd = 1.5168;
    const vd = 64.17;
    const red = wavelengthNd(nd, vd, "R");
    const green = wavelengthNd(nd, vd, "G");
    const blue = wavelengthNd(nd, vd, "B");
    const violet = wavelengthNd(nd, vd, "V");

    expect(wavelengthNd(1, vd, "B")).toBe(1);
    expect(wavelengthNd(nd, undefined, "B")).toBe(nd);
    expect(wavelengthNd(nd, 0, "B")).toBe(nd);
    // BK7-like glass: the C-F spread approximates the Abbe definition (nd - 1) / vd.
    expect(blue - red).toBeCloseTo((nd - 1) / vd, 4);
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

    expect(indexAtPreparedSurface(state, -1, "B")).toBe(1);
    expect(indexAtPreparedSurface(state, 0, undefined)).toBe(1);
    expect(indexAtPreparedSurface(state, 1, undefined)).toBe(1.5);
    expect(indexAtPreparedSurface(state, 1, "R")).toBe(1.49);
    expect(indexAtPreparedSurface(state, 2, "B")).toBe(1.6);

    const resolver = channelIndexResolverForState(state, "B");
    expect(resolver?.(1, 1.5)).toBe(1.51);
    expect(resolver?.(2, 1.6)).toBe(1.6);
    expect(channelIndexResolverForState(state, undefined)).toBeUndefined();
  });

  it("resolves runtime-lens indices and reuses the normalized runtime cache", () => {
    const lens = buildSimplePositiveElementLens("test-chromatic-index-runtime");
    const green = indexAtRuntimeSurface(lens, 1, "G");
    const blue = indexAtRuntimeSurface(lens, 1, "B");

    expect(indexAtRuntimeSurface(lens, 100, "B")).toBe(1);
    expect(indexAtRuntimeSurface(lens, 0, undefined)).toBe(1);
    expect(indexAtRuntimeSurface(lens, 1, undefined)).toBeCloseTo(lens.S[1].nd, 10);
    expect(green).toBeCloseTo(lens.S[1].nd, 10);
    expect(blue).toBeGreaterThan(green);
    expect(indexAtRuntimeSurface(lens, 1, "B")).toBeCloseTo(blue, 12);
  });
});
