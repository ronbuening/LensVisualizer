import { describe, expect, it } from "vitest";
import { eflAtFocus } from "../../../src/optics/optics.js";
import { eflAtFocus as layoutEflAtFocus } from "../../../src/optics/layout.js";
import { computeOpticalSummaryForState2, prepareRuntimeState } from "../../../src/optics/compat.js";
import Nikon200 from "../../../src/lens-data/nikon/NikonAiNikkor200mmf2IFED.data.js";
import PrimaryMirror from "../../../src/lens-data/reference/ReferenceSphericalPrimaryMirror.data.js";
import { build, buildSimplePositiveElementLens, buildVariableStopGapLens } from "./testLensFixtures.js";

describe("calculated focal length", () => {
  it("uses lensmaker power even when the authored label differs", () => {
    const base = buildSimplePositiveElementLens();
    const L = { ...base, EFL: 999 };
    const power = (1.5168 - 1) * (2 / 50 - ((1.5168 - 1) * 5) / (1.5168 * 50 ** 2));
    for (const focusT of [0, 0.001, 0.002999, 0.003001, 1]) {
      expect(eflAtFocus(focusT, 0, L)).toBeCloseTo(1 / power, 10);
      expect(layoutEflAtFocus(focusT, 0, L)).toBeCloseTo(1 / power, 10);
    }
    expect(L.EFL).toBe(999);
  });

  it("is continuous across the former infinity reporting threshold", () => {
    const L = build(Nikon200);
    expect(Math.abs(eflAtFocus(0.003001, 0, L) - eflAtFocus(0.002999, 0, L))).toBeLessThan(0.0001);
  });

  it("keeps power unchanged when only a free-space gap moves at any zoom state", () => {
    const L = buildVariableStopGapLens([
      [1, 3],
      [2, 4],
      [3, 5],
    ]);
    const reference = eflAtFocus(0, 0, L);
    for (const zoomT of [0, 0.23, 0.5, 0.77, 1]) {
      expect(eflAtFocus(0.65, zoomT, L)).toBeCloseTo(reference, 10);
    }
  });

  it("reports the primary mirror power through the reflective cardinal path", () => {
    const L = build(PrimaryMirror);
    const summary = computeOpticalSummaryForState2(prepareRuntimeState(L, 0, 0), 999, L.EP.epSD, L.stopPhysSD);
    expect(summary.currentEFLMm).toBeCloseTo(summary.cardinalEFLMm!, 10);
    expect(summary.currentEFLMm).not.toBe(999);
    expect(summary.breathingPercent).toBeCloseTo(0, 10);
  });

  it("does not substitute an authored focal length for afocal surfaces", () => {
    const base = buildSimplePositiveElementLens();
    const L = { ...base, S: base.S.map((s) => ({ ...s, R: 1e15 })), EFL: 999 };
    expect(eflAtFocus(0, 0, L)).toBeNaN();
    const summary = computeOpticalSummaryForState2(prepareRuntimeState(L, 0, 0), 999, 5, 5);
    expect(summary.currentEFLMm).toBeNull();
    expect(summary.infinityEFLMm).toBeNull();
    expect(summary.breathingPercent).toBeNull();
  });
});
