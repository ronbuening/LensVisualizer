/**
 * Finite-only focus: coordinate 0 names an authored finite object, never infinity. A synthetic singlet stands in
 * because no catalog lens opts in yet; the catalog sweeps cover each one that does.
 */
import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import {
  focusDistanceAt,
  halfFieldAtZoom,
  prepareRuntimeState,
  traceFiniteFocusFan,
} from "../../../src/optics/optics.js";
import { paraxialObjectVergence } from "../../../src/optics/field/geometry.js";
import { conjugateKForRuntimeLens, modeledFocusDistanceAt } from "../../../src/optics/state/fieldAdapters.js";
import { createAnalysisComputationContext } from "../../../src/optics/analysis/analysisContext.js";
import { assessMtfSupport } from "../../../src/optics/analysis/mtf/mtfSupport.js";
import { resolveMtfFieldGeometry } from "../../../src/optics/analysis/mtf/mtfFields.js";
import { validateFiniteOnlyStates } from "../../../src/optics/validation.js";
import type { LensDataV2Input } from "../../../src/types/lensDataV2.js";
import { finiteOnlyFixture } from "./finiteOnlyFixture.js";

/** The fixture's objects measured from the image plane: the first-surface distance plus each state's track. */
function imagePlaneFixture(): LensDataV2Input {
  const file = finiteOnlyFixture();
  const L = buildLens(file);
  file.focus.conjugates = file.focus.conjugates!.map((conjugate) => {
    const state = prepareRuntimeState(L, file.focus.keyframes![conjugate.keyframe], 0);
    return {
      ...conjugate,
      objectDistanceMm: conjugate.objectDistanceMm + state.imgZ - state.z[0],
      distanceReference: "image-plane",
    };
  });
  return file;
}

/** The fixture with one edit, for the validator's refusals. */
function edited(edit: (file: LensDataV2Input) => void): LensDataV2Input {
  const file = finiteOnlyFixture();
  edit(file);
  return file;
}

describe("finite-only focus states", () => {
  it.each([
    ["first-surface", finiteOnlyFixture],
    ["image-plane", imagePlaneFixture],
  ])("launch, label and image the same object from a %s distance", (_, fixture) => {
    const L = buildLens(fixture());
    expect(validateFiniteOnlyStates(L)).toEqual([]);
    for (const [focusT, objectMm] of [
      [0, 99],
      [1, 199],
    ]) {
      const state = prepareRuntimeState(L, focusT, 0);
      expect(paraxialObjectVergence(state)).toBeCloseTo(1 / objectMm, 9);
      expect(focusDistanceAt(focusT, L)).toBeCloseTo((objectMm + state.imgZ - state.z[0]) / 1000, 9);
      // No collimated tracks-focus correction and no interpolated row label applies to a finite-only state.
      expect(conjugateKForRuntimeLens(focusT, 0, L)).toBe(0);
      expect(modeledFocusDistanceAt(focusT, L)).toBeNull();
      for (const fieldAngleDeg of [0, halfFieldAtZoom(0, L) * L.offAxisFieldFrac]) {
        const rays = traceFiniteFocusFan(L, {
          focusT,
          stopSemiDiameterMm: 2,
          entrancePupilSemiDiameterMm: L.EP.epSD,
          fieldAngleDeg,
          fractions: [-0.01, 0, 0.01],
        });
        const heights = rays.map((ray) => ray.y + (state.imgZ - ray.pts.at(-1)![0]) * ray.u);
        expect(rays.every((ray) => !ray.clipped)).toBe(true);
        // Near-axis rays from one object point meet on the authored image plane.
        expect(Math.max(...heights) - Math.min(...heights)).toBeLessThan(1e-4);
        if (fieldAngleDeg === 0) expect(Math.abs(heights[1])).toBeLessThan(1e-9);
      }
    }
  });

  it.each<[string, (file: LensDataV2Input) => void, RegExp]>([
    [
      "an object the prescription does not focus",
      (file) => (file.focus.conjugates![1].objectDistanceMm = 5000),
      /keyframe 1: the prescription does not image/,
    ],
    [
      "a distance measured from the other reference",
      (file) => (file.focus.conjugates![0].distanceReference = "image-plane"),
      /keyframe 0: .*other distanceReference/,
    ],
    ["a close focus that names no state", (file) => (file.focus.closeFocusM = 0.271), /closeFocusM 0.271 m must be/],
  ])("reports %s", (_, edit, issue) => {
    expect(validateFiniteOnlyStates(buildLens(edited(edit))).join("\n")).toMatch(issue);
  });

  it("keeps unvalidated analyses unavailable and bounds MTF to the modeled field", () => {
    const L = buildLens(finiteOnlyFixture());
    const context = createAnalysisComputationContext({
      preparedState: prepareRuntimeState(L, 0, 0),
      dynamicEFL: L.EFL,
      currentEPSD: L.EP.epSD,
      currentPhysStopSD: 2,
    });
    expect(context.sectionAvailability("mtf").available).toBe(true);
    expect(context.sectionAvailability("summary").available).toBe(true);
    expect(context.sectionAvailability("distortion")).toMatchObject({ available: false, reason: /finite-only/ });
    expect(() => context.computeDistortionCurve()).toThrow(/finite-only/);
    expect(context.computeOpticalSummary().infinityEFLMm).toBeNull();
    const support = assessMtfSupport(context.request, { method: "geometric", spectrum: "reference", focus: "design" });
    expect(support.conjugate?.objectDistanceMm).toBe(99);
    const field = resolveMtfFieldGeometry(prepareRuntimeState(L, 0, 0), 2, (angle) => angle * 10);
    expect(field!.chiefEdgeAngleDeg).toBeLessThanOrEqual(2 + 1e-6);
  });
});
