import { describe, expect, it } from "vitest";
import { prepareRuntimeState } from "../../../src/optics/compat.js";
import { prepareRuntimeState as prepareShared } from "../../../src/optics/state/runtimeState.js";
import { createPreparedStateCache } from "../../../src/optics/state/cache.js";
import { computeSystemMatrix2 } from "../../../src/optics/first-order/systemMatrix.js";
import { computeHuygensPsf, huygensIntensity } from "../../../src/optics/math/huygens.js";
import { buildSimplePositiveElementLens } from "./testLensFixtures.js";
import type { HuygensWavelet } from "../../../src/types/imageQuality.js";

describe("bounded optical reuse", () => {
  it("shares runtime state, separates lens identities and every control, and evicts old states", () => {
    const L = buildSimplePositiveElementLens("same-key");
    const first = prepareRuntimeState(L, 0.25, 0.5, 0.1);
    expect(prepareShared(L, 0.25, 0.5, 0.1)).toBe(first);
    expect(prepareShared(buildSimplePositiveElementLens("same-key"), 0.25, 0.5, 0.1)).not.toBe(first);
    for (const controls of [
      [0.25000000000000006, 0.5, 0.1],
      [0.25, 0.6, 0.1],
      [0.25, 0.5, 0.2],
    ])
      expect(prepareShared(L, ...(controls as [number, number, number]))).not.toBe(first);
    expect(prepareShared(L, 2, 0)).toBe(prepareShared(L, 1, 0));
    expect(() => prepareShared(L, NaN, 0)).toThrow();
    for (let i = 0; i < 100; i++) prepareShared(L, i / 101, 0);
    expect(prepareShared(L, 0.25, 0.5, 0.1)).not.toBe(first);
  });
  it("refreshes bounded cache recency and caches immutable first-order matrices per state", () => {
    const state = prepareShared(buildSimplePositiveElementLens(), 0, 0);
    const cache = createPreparedStateCache(2);
    cache.set("a", state);
    cache.set("b", state);
    cache.get("a");
    cache.set("c", state);
    expect(cache.get("b")).toBeUndefined();
    expect(cache.get("a")).toBe(state);
    cache.clear();
    expect(cache.get("a")).toBeUndefined();
    expect(() => createPreparedStateCache(0)).toThrow();
    const matrix = computeSystemMatrix2(state);
    expect(computeSystemMatrix2(state)).toBe(matrix);
    expect(Object.isFrozen(matrix)).toBe(true);
    expect(computeSystemMatrix2(prepareShared(buildSimplePositiveElementLens(), 0, 0))).not.toBe(matrix);
  });
  it("matches the point-by-point Huygens reference without assuming a symmetric pupil", () => {
    const wavelets: HuygensWavelet[] = Array.from({ length: 17 }, (_, i) => ({
      point: [Math.sin(i) * 2, Math.cos(i * 3), i / 10],
      opdMm: Math.sin(i) * 0.0003,
      amplitudeAreaMm2: (i + 1) / 17,
      directionCosine: 0.9 + i / 170,
    }));
    const reference = [0.1, -0.2, 20] as const;
    const psf = computeHuygensPsf(wavelets, 486.1327, reference, 9, 0.004);
    const peak = huygensIntensity(wavelets, 486.1327, reference, reference, true);
    psf.intensity.forEach((value, i) => {
      const expected =
        huygensIntensity(wavelets, 486.1327, reference, [
          reference[0] + ((i % 9) - 4) * 0.004,
          reference[1] + (Math.floor(i / 9) - 4) * 0.004,
          20,
        ]) / peak;
      expect(Math.abs(value - expected)).toBeLessThan(1e-8);
    });
  });
});
