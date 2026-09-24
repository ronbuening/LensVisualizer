import { describe, expect, it } from "vitest";
import { build, buildRearPlateLens, buildSimplePositiveElementLens, REAR_PLATE_FIXTURE } from "./testLensFixtures.js";
import { prepareRuntimeState } from "../../../src/optics/compat.js";
import { assessMtfSupport } from "../../../src/optics/analysis/mtfSupport.js";
import type { MtfOptions } from "../../../src/types/mtf.js";
import { LINE_NM } from "../../../src/optics/spectralLines.js";
import { geometricOtf, otfMagnitude } from "../../../src/optics/analysis/mtfMath.js";
import { computeMtf } from "../../../src/optics/mtf.js";
import { mtfHalfField, mtfTraceClassification, traceMtfPupil } from "../../../src/optics/analysis/mtfTracing.js";
import type { EngineTraceResult } from "../../../src/optics/trace/types.js";
import { traceEngineRay2 } from "../../../src/optics/trace/rayAdapters.js";

export const mtfTestOptions: MtfOptions = {
  method: "geometric",
  spectrum: "reference",
  pupilSemiDiameterMm: 1,
  stopSemiDiameterMm: 1,
  fieldFractions: [0],
  frequenciesPerMm: [0, 10, 20, 40],
  maxGridSize: 32,
};

describe("MTF support", () => {
  const L = buildSimplePositiveElementLens();
  const state = prepareRuntimeState(L, 0, 0);
  it("uses authored reference indices without requiring a spectral glass identity", () => {
    expect(assessMtfSupport(state, mtfTestOptions)).toMatchObject({
      available: true,
      referenceWavelengthNm: LINE_NM.d,
    });
    const e = build({ ...L.data, elements: L.elements.map((element) => ({ ...element, indexReference: "e" })) });
    expect(assessMtfSupport(prepareRuntimeState(e, 0, 0), mtfTestOptions).referenceWavelengthNm).toBe(LINE_NM.e);
  });
  it("rejects active movement, finite focus and invalid physical requests", () => {
    expect(assessMtfSupport(state, { ...mtfTestOptions, movementActive: true }).reason).toBe("active-movement");
    expect(assessMtfSupport(prepareRuntimeState(L, 1, 0), mtfTestOptions).reason).toBe("finite-conjugate-unavailable");
    expect(assessMtfSupport(state, { ...mtfTestOptions, pupilSemiDiameterMm: NaN }).reason).toBe("invalid-input");
  });
  it("rejects unverified normalized prescription scale", () => {
    const normalized = build({
      ...L.data,
      focalLengthDesign: 1,
      focalLengthMarketing: 50,
      surfaces: L.data.surfaces.map((s) => ({ ...s, R: s.R / 50, d: s.d / 50, sd: s.sd / 50 })),
    });
    expect(assessMtfSupport(prepareRuntimeState(normalized, 0, 0), mtfTestOptions).reason).toBe("unverified-scale");
  });
  it("rejects mixed reference glasses without physical wavelength conversion", () => {
    const mixed = build({
      ...L.data,
      elements: [...L.elements, { ...L.elements[0], id: 2, indexReference: "e" }],
      surfaces: L.data.surfaces.map((s, i) => (i === 2 ? { ...s, nd: 1.6, elemId: 2 } : s)),
    });
    expect(assessMtfSupport(prepareRuntimeState(mixed, 0, 0), mtfTestOptions).reason).toBe("mixed-reference");
  });
});

describe("geometric MTF", () => {
  it("has unity response for a point and is translation invariant", () => {
    for (const x of [0, 1.234]) {
      expect(otfMagnitude(geometricOtf([{ x, y: 0, weight: 1 }], [0, 10, 100], "x"))).toEqual([1, 1, 1]);
    }
  });
  it("reproduces an anisotropic Gaussian and weights transmitted intensity", () => {
    const points = Array.from({ length: 801 }, (_, i) => {
      const x = (i - 400) * 0.0001;
      return { x, y: 0, weight: Math.exp((-x * x) / (2 * 0.005 ** 2)) };
    });
    const frequencies = [0, 10, 20, 40];
    const values = otfMagnitude(geometricOtf(points, frequencies, "x"));
    values.forEach((v, i) => expect(v).toBeCloseTo(Math.exp(-2 * Math.PI ** 2 * 0.005 ** 2 * frequencies[i] ** 2), 6));
    otfMagnitude(geometricOtf(points, frequencies, "y")).forEach((v) => expect(v).toBeCloseTo(1, 12));
    expect(geometricOtf([], frequencies, "x").real).toEqual([]);
  });
  it("does not treat failed intersections as physical vignetting", () => {
    expect(mtfTraceClassification({ status: "failed", failureReason: "noBracket" } as EngineTraceResult)).toBe(
      "failed",
    );
    expect(mtfTraceClassification({ status: "clipped", failureReason: null } as EngineTraceResult)).toBe("blocked");
  });
  it("proves spherical, flat and aspheric cap misses without hiding in-aperture failures", () => {
    const base = buildSimplePositiveElementLens();
    const lens = build({
      ...base.data,
      surfaces: [
        { label: "1", R: 10, d: 1, nd: 1.5168, elemId: 1, sd: 3 },
        { label: "2", R: -10, d: 1, nd: 1, elemId: 0, sd: 3 },
        { label: "STO", R: 1e15, d: 10, nd: 1, elemId: 0, sd: 3 },
      ],
    });
    const state = prepareRuntimeState(lens, 0, 0);
    const miss = traceEngineRay2(
      state,
      { origin: [8, 0, -10], direction: [0, 0, 1] },
      {
        checkSemiDiameter: true,
        stopOnClip: true,
      },
    );
    expect(miss.failureReason).toBe("noBracket");
    expect(mtfTraceClassification(miss, state)).toBe("blocked");
    expect(mtfTraceClassification({ ...miss, terminalPoint: [0, 0, -10] }, state)).toBe("failed");
    // The analytic cap test is independent of the solver's failure label.
    expect(mtfTraceClassification({ ...miss, failureReason: "noConvergedIntersection" }, state)).toBe("blocked");
    const aspheric = {
      ...state,
      surfaces: state.surfaces.map((s, i) =>
        i === 0
          ? {
              ...s,
              profile: { ...s.profile, kind: "aspheric" as const },
            }
          : s,
      ),
    };
    // Aspheric caps use the Lipschitz interval proof: outside the aperture cylinder is a miss, a real rim hit is not.
    expect(mtfTraceClassification(miss, aspheric)).toBe("blocked");
    expect(mtfTraceClassification({ ...miss, terminalPoint: [2.5, 0, -10] }, aspheric)).toBe("failed");
    const result = computeMtf(state, { ...mtfTestOptions, pupilSemiDiameterMm: 8, stopSemiDiameterMm: 3 });
    expect(result.fields[0].failedRays).toBe(0);
    expect(result.fields[0].blockedRays).toBeGreaterThan(0);
    expect(result.fields[0].sagittal[0]).toBeCloseTo(1, 12);
  });
  it("reports converged curves or explicit sampling limitations on a real optical state", () => {
    const result = computeMtf(prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0), mtfTestOptions);
    const field = result.fields[0];
    expect(field.reason).toBeNull();
    expect(field.sagittal[0]).toBeCloseTo(1, 12);
    field.tangential.forEach((value, i) => expect(value).toBeCloseTo(field.sagittal[i], 12));
    expect(field.maxDelta).not.toBeNull();
    expect(field.gridSize).toBe(32);
  });
  it("caps infinity sampling to a declared image circle while retaining unformatted models", () => {
    const base = buildSimplePositiveElementLens();
    const options = { ...mtfTestOptions, fieldFractions: [0, 1], pupilSemiDiameterMm: 0.1 };
    const unformatted = computeMtf(prepareRuntimeState(base, 0, 0), options);
    expect(unformatted.support.available).toBe(true);
    expect(mtfHalfField(prepareRuntimeState(base, 0, 0))).toBe(base.halfField);
    const lens = build({ ...base.data, imageCircleMm: 4 });
    const result = computeMtf(prepareRuntimeState(lens, 0, 0), options);
    expect(Math.abs(result.fields[1].imageHeightMm!)).toBeCloseTo(2, 4);
    expect(result.fields[1].failedRays).toBe(0);
  });
});

describe("MTF at awkward geometry", () => {
  it("lands rays on an image plane that coincides with the last plate surface", () => {
    const L = buildRearPlateLens({ plates: [{ ...REAR_PLATE_FIXTURE, gapAfterMm: 0 }] });
    const state = prepareRuntimeState(L, 0, 0);
    expect(state.surfaces.at(-1)!.d).toBe(0);
    const field = computeMtf(state, mtfTestOptions).fields[0];
    expect(field.reason).toBeNull();
    expect(field.sagittal[0]).toBeCloseTo(1, 12);
  });
  it("keeps a clipped chief ray as the geometric reference while pupil rays transmit", () => {
    const base = buildSimplePositiveElementLens();
    // One millimetre behind the stop, a 0.3 mm air baffle clips the 20° chief but passes part of the beam.
    const [stop, ...lens] = base.data.surfaces;
    const L = build({
      ...base.data,
      surfaces: [{ ...stop, d: 1 }, { label: "B", R: 1e15, nd: 1, sd: 0.3, d: 0.5, elemId: 0 }, ...lens],
    });
    const state = prepareRuntimeState(L, 0, 0);
    const options = { ...mtfTestOptions, fieldFractions: [1] };
    const bundle = traceMtfPupil(state, options, assessMtfSupport(state, options), 1, 32, undefined, 20)!;
    expect(bundle).not.toBeNull();
    expect(bundle.chiefClipped).toBe(true);
    expect(bundle.rays.length).toBeGreaterThan(16);
  });
  it("judges convergence within the reporting band and reports where stability ends", () => {
    const state = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
    const options = { ...mtfTestOptions, pupilSemiDiameterMm: 10, stopSemiDiameterMm: 10, maxGridSize: 64 as const };
    const band = computeMtf(state, { ...options, frequenciesPerMm: [0, 10, 20, 40] }).fields[0];
    const wide = computeMtf(state, { ...options, frequenciesPerMm: [0, 10, 20, 40, 900] }).fields[0];
    expect(wide.maxDelta).toBeCloseTo(band.maxDelta!, 12);
    expect(wide.status).toBe(band.status);
    expect([0, 10, 20, 40, 900, null]).toContain(wide.convergedThroughLpMm);
  });
});
