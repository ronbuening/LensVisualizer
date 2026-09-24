import { describe, expect, it } from "vitest";
import { build, buildRearPlateLens, buildSimplePositiveElementLens, REAR_PLATE_FIXTURE } from "./testLensFixtures.js";
import { prepareRuntimeState } from "../../../src/optics/compat.js";
import { assessMtfSupport } from "../../../src/optics/analysis/mtfSupport.js";
import type { MtfOptions } from "../../../src/types/mtf.js";
import { LINE_NM } from "../../../src/optics/spectralLines.js";
import { geometricOtf, otfMagnitude } from "../../../src/optics/analysis/mtfMath.js";
import { computeMtf } from "../../../src/optics/mtf.js";
import {
  findMtfFieldFootprint,
  mtfLaunchGrid,
  mtfLaunchRay,
  mtfTraceClassification,
  mtfTraceOptions,
  prepareMtfFieldLaunch,
  traceMtfBundle,
  traceMtfFieldPupil,
  type MtfBundle,
} from "../../../src/optics/analysis/mtfTracing.js";
import {
  assessUnresolvedFlux,
  emptyMtfField,
  refineMtfField,
  type MtfGridOutcome,
} from "../../../src/optics/analysis/mtf.js";
import { mtfFieldProcessingOrder } from "../../../src/optics/analysis/mtfFields.js";
import { findAxialBestFocus } from "../../../src/optics/analysis/mtfFocus.js";
import { MTF_MAX_UNKNOWN_FLUX } from "../../../src/optics/analysis/mtfConstants.js";
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
  it("measures fields in image height to the declared format corner, or to the modelled edge", () => {
    const base = buildSimplePositiveElementLens();
    const fieldFractions = [0, 0.5, 1];
    const options = { ...mtfTestOptions, fieldFractions, pupilSemiDiameterMm: 0.1 };
    const unformatted = computeMtf(prepareRuntimeState(base, 0, 0), options);
    expect(unformatted.geometry).toMatchObject({ basis: "modeled-edge" });
    expect(unformatted.geometry!.referenceHeightMm).toBe(unformatted.geometry!.modeledEdgeHeightMm);
    const lens = build({ ...base.data, imageCircleMm: 4 });
    const result = computeMtf(prepareRuntimeState(lens, 0, 0), options);
    expect(result.geometry).toMatchObject({ basis: "format-corner", referenceHeightMm: 2, modeledEdgeHeightMm: 2 });
    result.fields.forEach((field, i) => {
      expect(field.targetImageHeightMm).toBeCloseTo(fieldFractions[i] * 2, 12);
      expect(field.imageHeightMm).toBeCloseTo(field.targetImageHeightMm!, 3);
      expect(field.failedRays).toBe(0);
    });
  });
  it("marks format heights beyond the modelled edge instead of tracing them", () => {
    const base = buildSimplePositiveElementLens();
    const options = { ...mtfTestOptions, fieldFractions: [0.5, 1], pupilSemiDiameterMm: 0.1 };
    const edge = computeMtf(prepareRuntimeState(base, 0, 0), options).geometry!.modeledEdgeHeightMm;
    const lens = build({ ...base.data, imageCircleMm: 3 * edge });
    const result = computeMtf(prepareRuntimeState(lens, 0, 0), options);
    expect(result.geometry!.modeledEdgeHeightMm).toBeCloseTo(edge, 9);
    expect(result.fields[0].reason).toBeNull();
    expect(result.fields[1]).toMatchObject({ status: "unavailable", reason: "outside-modeled-field", gridSize: 0 });
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
    const bundle = traceMtfFieldPupil(state, options, assessMtfSupport(state, options), 20, 32)!;
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

/** Negative front meniscus ahead of the stop: the off-axis beam outgrows the axial one on the launch plane. */
function buildRetrofocusLens() {
  const base = buildSimplePositiveElementLens();
  const element = base.elements[0];
  return build({
    ...base.data,
    elements: [
      { ...element, id: 1, name: "Front", label: "L1", type: "negative", nd: 1.6, vd: 50 },
      { ...element, id: 2, name: "Rear", label: "L2", type: "positive", nd: 1.6, vd: 50 },
    ],
    surfaces: [
      { label: "1", R: 40, nd: 1.6, sd: 12, d: 1.5, elemId: 1 },
      { label: "2", R: 12, nd: 1, sd: 9, d: 12, elemId: 1 },
      { label: "STO", R: 1e15, nd: 1, sd: 3, d: 2, elemId: 0 },
      { label: "3", R: 20, nd: 1.6, sd: 6, d: 4, elemId: 2 },
      { label: "4", R: -20, nd: 1, sd: 6, d: 30, elemId: 2 },
    ],
  });
}

describe("MTF pupil footprint", () => {
  it("reproduces the entrance-pupil lattice for a stop-at-lens beam on axis", () => {
    const state = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
    const bundle = traceMtfFieldPupil(state, mtfTestOptions, assessMtfSupport(state, mtfTestOptions), 0, 32)!;
    // A 32-cell entrance-pupil grid keeps 812 cell centres inside its circle.
    expect(bundle.rays).toHaveLength(812);
    expect(bundle.launchStepMm).toBeCloseTo(2 / 32, 12);
  });
  it("samples the whole transmitted beam where it outgrows the axial entrance pupil", () => {
    const state = prepareRuntimeState(buildRetrofocusLens(), 0, 0);
    const options = { ...mtfTestOptions, pupilSemiDiameterMm: 2.2, stopSemiDiameterMm: 3 };
    const support = assessMtfSupport(state, options);
    const area = (bundle: MtfBundle) => bundle.rays.length * bundle.launchStepMm ** 2;
    const axial = area(traceMtfFieldPupil(state, options, support, 0, 32)!);
    const launch = prepareMtfFieldLaunch(state, options, support, 50)!;
    const footprint = findMtfFieldFootprint(state, options, support, launch)!;
    const bundle = traceMtfBundle(state, options, support, launch, footprint, 32, support.spectralLines[0])!;
    // Dense reference on the same lattice, extended three entrance-pupil radii beyond the footprint.
    const grid = mtfLaunchGrid(footprint, 32);
    const pad = Math.ceil((3 * options.pupilSemiDiameterMm) / grid.step);
    const traceOptions = mtfTraceOptions(state, options, support, support.spectralLines[0]);
    let reference = 0;
    for (let row = -pad; row < grid.rows + pad; row++)
      for (let column = -pad; column < grid.columns + pad; column++) {
        const ray = mtfLaunchRay(launch, grid.x0 + (column + 0.5) * grid.step, grid.y0 + (row + 0.5) * grid.step);
        const trace = traceEngineRay2(state, ray, traceOptions);
        if (mtfTraceClassification(trace, state, options.stopSemiDiameterMm) === "valid") reference++;
      }
    expect(reference * grid.step ** 2).toBeGreaterThan(1.1 * axial);
    expect(bundle.rays.length / reference).toBeGreaterThan(0.99);
    expect(bundle.openBorders).toEqual({ x: false, y0: false, y1: false });
  });
});

describe("MTF refinement and focus", () => {
  it("keeps the last successful grid when finer sampling fails", () => {
    const curves = (value: number): MtfGridOutcome => ({
      kind: "curves",
      field: { ...emptyMtfField(0), sagittal: [1, value], tangential: [1, value] },
    });
    const failure = (refine: boolean): MtfGridOutcome => ({
      kind: "unavailable",
      field: { ...emptyMtfField(0), status: "unavailable", reason: "diffraction-domain" },
      refine,
    });
    const run = (outcomes: MtfGridOutcome[]) =>
      [
        ...refineMtfField(
          [16, 32, 64, 128].slice(0, outcomes.length),
          (size) => outcomes[Math.log2(size) - 4],
          [0, 10],
        ),
      ].at(-1)!;
    const kept = run([curves(0.5), curves(0.53), failure(false)]);
    expect(kept).toMatchObject({ status: "unconverged", sagittal: [1, 0.53] });
    expect(kept.maxDelta).toBeCloseTo(0.03, 12);
    // A failure that asks for finer sampling continues, and the next grid is judged against the last good one.
    expect(run([curves(0.5), failure(true), curves(0.505)])).toMatchObject({
      status: "converged",
      sagittal: [1, 0.505],
    });
    expect(run([failure(false), curves(0.5)]).status).toBe("unavailable");
  });
  it("reports unresolved flux with its error bound and rejects it beyond the cap", () => {
    expect(assessUnresolvedFlux(0, 0)).toEqual({ acceptable: true, note: null });
    const small = assessUnresolvedFlux(3, 0.002);
    expect(small.acceptable).toBe(true);
    expect(small.note).toContain("≤ 0.004");
    expect(assessUnresolvedFlux(40, MTF_MAX_UNKNOWN_FLUX * 1.01).acceptable).toBe(false);
  });
  it("orders field requests coarse to fine, centre and corner first", () => {
    const tenths = Array.from({ length: 11 }, (_, i) => i / 10);
    expect(mtfFieldProcessingOrder(tenths)).toEqual([0, 10, 5, 2, 7, 1, 3, 4, 6, 8, 9]);
    const percent = Array.from({ length: 101 }, (_, i) => i / 100);
    const order = mtfFieldProcessingOrder(percent);
    expect(order.slice(0, 5)).toEqual([0, 100, 50, 25, 75]);
    expect([...order].sort((a, b) => a - b)).toEqual(percent.map((_, i) => i));
  });
  it("recovers the axial best-focus shift from re-projected rays", () => {
    // A perfect cone converging 0.2 mm behind the authored plane.
    const rays = [];
    for (let row = 0; row < 16; row++)
      for (let column = 0; column < 16; column++) {
        const x = ((column + 0.5) / 16 - 0.5) * 0.2;
        const y = ((row + 0.5) / 16 - 0.5) * 0.2;
        if (x * x + y * y > 0.01) continue;
        const length = Math.hypot(x, y, 1.2);
        rays.push({
          x,
          y,
          weight: 1,
          column,
          row,
          trace: { terminalPoint: [x, y, -1], terminalDirection: [-x / length, -y / length, 1.2 / length] },
        });
      }
    const bundle = { rays } as unknown as MtfBundle;
    const best = findAxialBestFocus([{ bundle, weight: 1 }], 0, [10, 20, 30, 40, 50])!;
    expect(best.shiftMm).toBeCloseTo(0.2, 2);
    expect(best.bestScore).toBeGreaterThan(best.designScore);
  });
  it("moves every field to the axial best focus only when requested", () => {
    const state = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
    const options = { ...mtfTestOptions, fieldFractions: [0, 0.5], pupilSemiDiameterMm: 2, stopSemiDiameterMm: 2 };
    const design = computeMtf(state, options);
    const refocused = computeMtf(state, { ...options, focus: "best-axial" });
    expect(design.focus).toMatchObject({ mode: "design", appliedShiftMm: 0 });
    expect(design.focus!.bestAxialShiftMm).not.toBe(0);
    expect(refocused.focus!.appliedShiftMm).toBe(refocused.focus!.bestAxialShiftMm);
    expect(refocused.fields[0].sagittal[1]).toBeGreaterThan(design.fields[0].sagittal[1]);
  });
});
