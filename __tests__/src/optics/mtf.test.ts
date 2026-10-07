import { describe, expect, it } from "vitest";
import {
  build,
  buildChromaticPositiveElementLens,
  buildRearPlateLens,
  buildSimplePositiveElementLens,
  REAR_PLATE_FIXTURE,
  teleconverterFixture,
  teleconverterHostData,
} from "./testLensFixtures.js";
import { prepareRuntimeState } from "../../../src/optics/compat.js";
import { assessMtfSupport } from "../../../src/optics/analysis/mtfSupport.js";
import type { MtfOptions } from "../../../src/types/mtf.js";
import type { FiniteConjugate } from "../../../src/types/optics.js";
import { LINE_NM } from "../../../src/optics/spectralLines.js";
import { geometricOtf, otfMagnitude } from "../../../src/optics/analysis/mtfMath.js";
import { assessMtfDataLimitations, computeMtf } from "../../../src/optics/mtf.js";
import { attachTeleconverter } from "../../../src/optics/prescription/teleconverter.js";
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
import {
  mtfBeamHeight,
  mtfChiefHeight,
  mtfFieldProcessingOrder,
  resolveMtfFieldGeometry,
} from "../../../src/optics/analysis/mtfFields.js";
import { resolveMtfAperture } from "../../../src/optics/analysis/mtfAperture.js";
import {
  findAxialBestFocus,
  mtfImagePlaneOffset,
  mtfNearestImagePlaneZ,
} from "../../../src/optics/analysis/mtfFocus.js";
import { findMtfFootprint } from "../../../src/optics/analysis/mtfFootprint.js";
import type { MtfRayClass } from "../../../src/optics/analysis/mtfRayClassification.js";
import { MTF_MAX_UNKNOWN_FLUX } from "../../../src/optics/analysis/mtfConstants.js";
import type { EngineTraceResult } from "../../../src/optics/trace/types.js";
import { traceEngineRay2 } from "../../../src/optics/trace/rayAdapters.js";

const FINITE_CONJUGATE: FiniteConjugate = {
  focusT: 1,
  zoomT: 0,
  objectDistanceMm: 1000,
  distanceReference: "first-surface",
  source: "Synthetic thick-lens conjugate",
};

export const mtfTestOptions: MtfOptions = {
  method: "geometric",
  spectrum: "reference",
  focus: "design",
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
    // A retired method name from an untyped caller is refused, not computed as something else.
    const retired = { ...mtfTestOptions, method: "geometric-dl" } as unknown as MtfOptions;
    expect(assessMtfSupport(state, retired).reason).toBe("invalid-input");
    expect(computeMtf(state, retired).fields).toEqual([]);
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
  it("measures fields in image height to the declared format corner, or to the modeled edge", () => {
    const base = buildSimplePositiveElementLens();
    const fieldFractions = [0, 0.5, 1];
    const options = { ...mtfTestOptions, fieldFractions, pupilSemiDiameterMm: 0.1 };
    const unformatted = computeMtf(prepareRuntimeState(base, 0, 0), options);
    expect(unformatted.geometry).toMatchObject({ basis: "modeled-edge" });
    expect(unformatted.geometry!.referenceHeightMm).toBe(unformatted.geometry!.modeledEdgeHeightMm);
    const lens = build({ ...base.data, imageCircleMm: 4 });
    const state = prepareRuntimeState(lens, 0, 0);
    const result = computeMtf(state, options);
    expect(result.geometry).toMatchObject({ basis: "format-corner", referenceHeightMm: 2, modeledEdgeHeightMm: 2 });
    // The edge angle is solved to the corner, not left at the outward walk's overshoot.
    const chiefHeight = mtfChiefHeight(state, options, assessMtfSupport(state, options));
    expect(Math.abs(chiefHeight(result.geometry!.modeledEdgeAngleDeg) - 2)).toBeLessThan(1e-4);
    result.fields.forEach((field, i) => {
      expect(field.targetImageHeightMm).toBeCloseTo(fieldFractions[i] * 2, 12);
      expect(field.imageHeightMm).toBeCloseTo(field.targetImageHeightMm!, 3);
      expect(field.failedRays).toBe(0);
    });
  });
  it("marks format heights beyond the modeled edge instead of tracing them", () => {
    const base = buildSimplePositiveElementLens();
    const options = { ...mtfTestOptions, fieldFractions: [0.5, 1], pupilSemiDiameterMm: 0.1 };
    const edge = computeMtf(prepareRuntimeState(base, 0, 0), options).geometry!.modeledEdgeHeightMm;
    const lens = build({ ...base.data, imageCircleMm: 3 * edge });
    const result = computeMtf(prepareRuntimeState(lens, 0, 0), options);
    expect(result.geometry!.modeledEdgeHeightMm).toBeCloseTo(edge, 9);
    expect(result.fields[0].reason).toBeNull();
    expect(result.fields[1]).toMatchObject({ status: "unavailable", reason: "outside-modeled-field", gridSize: 0 });
  });
  it.each([
    ["at infinity", undefined],
    ["at a documented finite conjugate", FINITE_CONJUGATE],
  ])("charts a declared format corner whose chief ray is clipped while part of the beam passes, %s", (_, conjugate) => {
    const base = buildSimplePositiveElementLens();
    // One millimetre behind the stop, a 0.3 mm air baffle clips every chief beyond about 16.7°.
    const [stop, ...lens] = base.data.surfaces;
    const surfaces = [{ ...stop, d: 1 }, { label: "B", R: 1e15, nd: 1, sd: 0.3, d: 0.5, elemId: 0 }, ...lens];
    const data = { ...base.data, surfaces, ...(conjugate ? { finiteConjugates: [conjugate] } : {}) };
    const prepare = (imageCircleMm?: number) =>
      prepareRuntimeState(build(imageCircleMm ? { ...data, imageCircleMm } : data), conjugate ? 1 : 0, 0);
    const options = { ...mtfTestOptions, fieldFractions: [0.5, 0.9, 1] };
    const unformatted = prepare();
    const support = assessMtfSupport(unformatted, options);
    // Without a declared format the reference stays the chief's own edge.
    const chiefEdge = computeMtf(unformatted, options).geometry!;
    expect(chiefEdge.basis).toBe("modeled-edge");
    expect(Math.abs(chiefEdge.modeledEdgeAngleDeg - (Math.atan(0.3) * 180) / Math.PI)).toBeLessThan(0.5);
    expect(mtfChiefHeight(unformatted, options, support)(chiefEdge.modeledEdgeAngleDeg + 0.1)).toBeNaN();
    expect(mtfBeamHeight(unformatted, options, support)(chiefEdge.modeledEdgeAngleDeg + 0.1)).toBeGreaterThan(
      chiefEdge.modeledEdgeHeightMm,
    );
    // A format corner 30 % beyond that edge is still lit by the lower part of the beam.
    const cornerMm = 1.3 * chiefEdge.modeledEdgeHeightMm;
    const result = computeMtf(prepare(2 * cornerMm), options);
    expect(result.geometry).toMatchObject({ basis: "format-corner" });
    expect(result.geometry!.modeledEdgeHeightMm).toBeCloseTo(cornerMm, 9);
    const [inside, between, corner] = result.fields;
    expect(inside.notes).toEqual([]);
    // 90 % of the corner lies past the chief's edge: its angle is solved on the chief traced through the baffle,
    // which still defines the height the curve is plotted at.
    for (const [field, fraction] of [
      [between, 0.9],
      [corner, 1],
    ] as const) {
      expect(field.reason).toBeNull();
      expect(field.validRays).toBeGreaterThan(16);
      expect(field.imageHeightMm).toBeCloseTo(fraction * cornerMm, 3);
      expect(field.notes.join(" ")).toContain("chief ray");
    }
    // Past the last transmitted ray the field is outside the model, as before.
    const dark = computeMtf(prepare(600), options);
    expect(dark.geometry!.modeledEdgeHeightMm).toBeGreaterThan(cornerMm);
    expect(dark.geometry!.modeledEdgeHeightMm).toBeLessThan(300);
    expect(dark.fields[2]).toMatchObject({ status: "unavailable", reason: "outside-modeled-field" });
  });
  it("keeps an edge extension only while the unchecked chief's height keeps rising", () => {
    const state = { lens: { source: { imageCircleMm: 60 } } } as unknown as Parameters<
      typeof resolveMtfFieldGeometry
    >[0];
    // Heights in mm equal the field angle in degrees: the chief clips at 10°, the beam goes dark at 20°.
    const chief = (angle: number) => (angle <= 10 ? angle : NaN);
    const lit = (height: (angle: number) => number) => (angle: number) => (angle <= 20 ? height(angle) : NaN);
    const rising = (angle: number) => angle;
    const extended = resolveMtfFieldGeometry(state, 8, chief, { reference: rising, beam: lit(rising) })!;
    expect(extended.modeledEdgeHeightMm).toBeCloseTo(20, 2);
    expect(extended.modeledEdgeAngleDeg).toBeCloseTo(20, 2);
    // A reference height that turns back at 15° is the chief on surface zones beyond their rims: no extension.
    const folding = (angle: number) => (angle <= 15 ? angle : 30 - angle);
    const kept = resolveMtfFieldGeometry(state, 8, chief, { reference: folding, beam: lit(folding) })!;
    expect(kept.modeledEdgeHeightMm).toBeCloseTo(10, 6);
    expect(resolveMtfFieldGeometry(state, 8, chief)!.modeledEdgeHeightMm).toBeCloseTo(10, 6);
    // The extension stops at the format corner like the chief's own edge does.
    const corner = resolveMtfFieldGeometry(
      { lens: { source: { imageCircleMm: 30 } } } as unknown as typeof state,
      8,
      chief,
      { reference: rising, beam: lit(rising) },
    )!;
    expect(corner).toMatchObject({ modeledEdgeHeightMm: 15, basis: "format-corner" });
    expect(corner.modeledEdgeAngleDeg).toBeCloseTo(15, 3);
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
    // A 32-cell entrance-pupil grid keeps 812 cell centers inside its circle.
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
  it("fits the footprint to a slit beam thinner than the coarse scan when the chief transmits", () => {
    // A 0.1 mm slit through the chief: the scan of a 10 mm pupil samples y every 1.25 mm and misses it.
    const slit = (x: number, y: number): MtfRayClass =>
      Math.abs(x) < 3 && Math.abs(y - 0.02) < 0.05 ? "valid" : "blocked";
    const footprint = findMtfFootprint(slit, 10, true)!;
    expect(footprint).not.toBeNull();
    expect(footprint.y0).toBeLessThan(-0.03);
    expect(footprint.y1).toBeGreaterThan(0.07);
    expect(footprint.x1).toBeGreaterThanOrEqual(3);
    expect(footprint.beamHeightMm).toBeLessThan(0.2);
    // Without a transmitted chief there is no seed: a missed beam stays unavailable rather than invented.
    const offset = (_x: number, y: number): MtfRayClass => (Math.abs(y - 0.3) < 0.05 ? "valid" : "blocked");
    expect(findMtfFootprint(offset, 10, true)).toBeNull();
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
      field: { ...emptyMtfField(0), status: "unavailable", reason: "empty-pupil" },
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
  it("orders field requests coarse to fine, center and corner first", () => {
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
  it("bounds the focus search by where most of the flux crosses the axis", () => {
    // An f/1 cone focused 3.2 mm behind the authored plane, sampled on a sunflower spiral: a regular lattice
    // far out of focus lands as a grating whose harmonics would pose as sharp focus.
    const cone = (stray: number[] = []) => {
      const rays: unknown[] = [];
      const add = (x: number, y: number, crossingZ: number) => {
        const length = Math.hypot(x, y, crossingZ + 20);
        rays.push({
          x,
          y,
          weight: 1,
          trace: {
            terminalPoint: [x, y, -20],
            terminalDirection: [-x / length, -y / length, (crossingZ + 20) / length],
          },
        });
      };
      for (let i = 0; i < 600; i++) {
        const radius = 11.6 * Math.sqrt((i + 0.5) / 600);
        add(radius * Math.cos(i * 2.399963), radius * Math.sin(i * 2.399963), 3.2);
      }
      stray.forEach((crossingZ) => add(11.6, 0, crossingZ));
      return [{ bundle: { rays } as unknown as MtfBundle, weight: 1 }];
    };
    const frequencies = [10, 20, 30, 40, 50];
    const clean = findAxialBestFocus(cone(), 0, frequencies)!;
    expect(clean.shiftMm).toBeCloseTo(3.2, 3);
    // Two stray crossings hundreds of millimetres away must not stretch the scan until its steps miss the focus.
    const stray = findAxialBestFocus(cone([400, -300]), 0, frequencies)!;
    expect(stray.shiftMm).toBeCloseTo(3.2, 2);
    expect(stray.bestScore).toBeGreaterThan(0.9);
  });
  it("never moves the image plane in front of the last surface", () => {
    // Rays already past their focus: a cone whose apex lies 0.2 mm in front of the plane, leaving a last
    // surface 0.05 mm in front of it. The search reaches toward the apex but stops at the surface.
    const rays = [];
    for (let row = 0; row < 16; row++)
      for (let column = 0; column < 16; column++) {
        const x = ((column + 0.5) / 16 - 0.5) * 0.03;
        const y = ((row + 0.5) / 16 - 0.5) * 0.03;
        if (x * x + y * y > 0.015 ** 2) continue;
        const length = Math.hypot(x, y, 0.15);
        rays.push({
          x,
          y,
          weight: 1,
          trace: { terminalPoint: [x, y, -0.05], terminalDirection: [x / length, y / length, 0.15 / length] },
        });
      }
    const bundles = [{ bundle: { rays } as unknown as MtfBundle, weight: 1 }];
    expect(findAxialBestFocus(bundles, 0, [10, 20, 30, 40, 50])!.shiftMm).toBeCloseTo(-0.2, 3);
    expect(findAxialBestFocus(bundles, 0, [10, 20, 30, 40, 50], -0.05)!.shiftMm).toBeCloseTo(-0.05, 9);
    // On a real state: the beam focuses inside a cover plate whose rear face is 0.02 mm from the image.
    const plates = [{ ...REAR_PLATE_FIXTURE, gapAfterMm: 0.02 }];
    const probe = prepareRuntimeState(buildRearPlateLens({ plates }), 0, 0);
    const offset = mtfImagePlaneOffset(probe, assessMtfSupport(probe, mtfTestOptions))!.offsetMm;
    const state = prepareRuntimeState(buildRearPlateLens({ plates, gapBefore: 44 + offset + 1 }), 0, 0);
    expect(mtfNearestImagePlaneZ(state)).toBeCloseTo(state.imgZ - 0.02, 12);
    const result = computeMtf(state, { ...mtfTestOptions, focus: "best-axial", fieldFractions: [0, 1] });
    expect(result.focus!.appliedShiftMm).toBeCloseTo(-0.02, 9);
    result.fields.forEach((field) => expect(field.reason).toBeNull());
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
  it("refocuses automatically only when the authored plane contradicts the paraxial focus", () => {
    const base = buildSimplePositiveElementLens();
    const options = { ...mtfTestOptions, fieldFractions: [0], pupilSemiDiameterMm: 2, stopSemiDiameterMm: 2 };
    const state = prepareRuntimeState(base, 0, 0);
    // The fixture's 80 mm last gap sits far behind its own paraxial focus.
    const offset = mtfImagePlaneOffset(state, assessMtfSupport(state, options))!;
    expect(offset.inconsistent).toBe(true);
    const auto = computeMtf(state, { ...options, focus: "auto" }).focus!;
    expect(auto).toMatchObject({ requestedMode: "auto", mode: "best-axial", imagePlaneInconsistent: true });
    expect(auto.appliedShiftMm).toBe(auto.bestAxialShiftMm);
    expect(auto.imagePlaneOffsetMm).toBeCloseTo(offset.offsetMm, 12);
    expect(computeMtf(state, { ...options, focus: "design" }).focus).toMatchObject({
      mode: "design",
      appliedShiftMm: 0,
      imagePlaneInconsistent: true,
    });
    const surfaces = base.data.surfaces.map((s, i, all) =>
      i === all.length - 1 ? { ...s, d: s.d + offset.offsetMm } : s,
    );
    const focused = computeMtf(prepareRuntimeState(build({ ...base.data, surfaces }), 0, 0), {
      ...options,
      focus: "auto",
    });
    expect(focused.focus).toMatchObject({ mode: "design", appliedShiftMm: 0, imagePlaneInconsistent: false });
    expect(Math.abs(focused.focus!.imagePlaneOffsetMm!)).toBeLessThan(1e-9);
  });
});

describe("MTF traced aperture", () => {
  const base = buildSimplePositiveElementLens();
  const tracedAperture = (lens = base, stopSemiDiameterMm = 1) => {
    const state = prepareRuntimeState(lens, 0, 0);
    const options = { ...mtfTestOptions, stopSemiDiameterMm };
    const support = assessMtfSupport(state, options);
    const launch = prepareMtfFieldLaunch(state, options, support, 0)!;
    return resolveMtfAperture(state, options, support, launch, findMtfFieldFootprint(state, options, support, launch)!);
  };
  it("reports the working f-number of the axial rim ray when the iris limits the beam", () => {
    // The fixture's stop is its entrance pupil, so a slow beam traces at f / (2 × stop radius).
    const aperture = tracedAperture()!;
    expect(aperture.limitingSurfaceLabel).toBeNull();
    expect(Math.abs(aperture.tracedFNumber / (base.EFL / 2) - 1)).toBeLessThan(0.005);
    expect(computeMtf(prepareRuntimeState(base, 0, 0), mtfTestOptions).aperture).toEqual(aperture);
  });
  it("names the clear aperture that stops the axial beam before the iris does", () => {
    // The element rims (6 mm) are smaller than the iris (8 mm), so the first rim sets the beam, not the label.
    const rimmed = build({
      ...base.data,
      surfaces: base.data.surfaces.map((surface) => (surface.label === "STO" ? surface : { ...surface, sd: 6 })),
    });
    const aperture = tracedAperture(rimmed, 8)!;
    expect(aperture.limitingSurfaceLabel).toBe("1");
    expect(Math.abs(aperture.tracedFNumber / (rimmed.EFL / 12) - 1)).toBeLessThan(0.05);
    expect(tracedAperture(base, 8)!.limitingSurfaceLabel).toBeNull();
  });
  it("is absent when no ray can be traced and survives a JSON round trip otherwise", () => {
    const unsupported = computeMtf(prepareRuntimeState(base, 0, 0), { ...mtfTestOptions, movementActive: true });
    expect(unsupported.aperture).toBeNull();
    const aperture = tracedAperture()!;
    expect(JSON.parse(JSON.stringify(aperture))).toEqual(aperture);
  });
});

describe("MTF data limitations", () => {
  const base = buildSimplePositiveElementLens();
  const state = prepareRuntimeState(base, 0, 0);
  const photopic = {
    preferredSpectrum: "photopic",
    spectrum: "photopic",
    referenceWavelengthNm: 555,
    result: null,
  } as const;
  const reference = {
    preferredSpectrum: "reference",
    spectrum: "reference",
    referenceWavelengthNm: LINE_NM.d,
  } as const;
  it("ties glass gaps to the charted spectrum and names the estimated glasses", () => {
    // An nd/νd-only glass is a gap in a spectral chart, not in a single-wavelength chart the reader asked for.
    const [estimated] = assessMtfDataLimitations(state, photopic);
    expect(estimated.kind).toBe("estimated-dispersion");
    expect(estimated.text).toContain("Every glass is known only by nd and νd");
    expect(assessMtfDataLimitations(state, { ...reference, result: null })).toEqual([]);
    // A glass that blocks spectral sampling leaves the reference line alone on the chart.
    const noAbbe = build({ ...base.data, elements: base.elements.map((e) => ({ ...e, vd: undefined })) });
    const [fallback] = assessMtfDataLimitations(prepareRuntimeState(noAbbe, 0, 0), {
      ...reference,
      preferredSpectrum: "photopic",
      result: null,
    });
    expect(fallback.kind).toBe("reference-only");
    expect(fallback.text).toContain("a glass has no Abbe number. The chart shows the 587.6 nm reference wavelength");
    // An estimated rear plate is not a gap; an estimated converter glass is named as the converter's.
    const resolved = buildChromaticPositiveElementLens();
    const plated = build({ ...resolved.data, rearPlates: [{ ...REAR_PLATE_FIXTURE, glass: undefined }] });
    const platedState = prepareRuntimeState(plated, 0, 0);
    expect(platedState.lens.dispersion.map((d) => d.quality)).toContain("abbe");
    expect(assessMtfDataLimitations(platedState, photopic)).toEqual([]);
    const host = teleconverterHostData();
    const hostData = { ...host, elements: host.elements.map((e) => ({ ...e, glass: "N-BK7" })) };
    const composed = build(attachTeleconverter(hostData, teleconverterFixture()));
    const [converter] = assessMtfDataLimitations(prepareRuntimeState(composed, 0, 0), photopic);
    expect(converter.text).toContain("1 of 2 glasses (TL1 in the converter) is known only by nd and νd");
  });
  it("reports the image plane, the field and the scale only where the chart depends on them", () => {
    const options = { ...mtfTestOptions, fieldFractions: [0, 1], pupilSemiDiameterMm: 0.1, stopSemiDiameterMm: 0.1 };
    const gaps = (target: typeof state, focus: MtfOptions["focus"]) =>
      assessMtfDataLimitations(target, { ...reference, result: computeMtf(target, { ...options, focus }) });
    // The fixture's image plane contradicts its paraxial focus: a gap unless best axial focus was requested.
    expect(gaps(state, "best-axial")).toEqual([]);
    expect(gaps(state, "auto")[0].text).toContain("refocused to best axial focus");
    expect(gaps(state, "design")[0]).toMatchObject({ kind: "image-plane" });
    expect(gaps(state, "design")[0].text).toContain("out of focus");
    // Format heights beyond the modeled edge are counted, and a rescaled prescription is flagged.
    const edge = computeMtf(state, options).geometry!.modeledEdgeHeightMm;
    const wide = build({ ...base.data, imageCircleMm: 3 * edge, focalLengthDesign: 50, focalLengthMarketing: 58 });
    const [field, scale] = gaps(prepareRuntimeState(wide, 0, 0), "best-axial");
    expect(field.kind).toBe("short-field");
    expect(field.text).toContain("1 of 2 field positions lies beyond it and is not charted");
    expect(scale.kind).toBe("scale");
    expect(scale.text).toContain("differs from the marketed 58 mm by 14%");
  });
  it("discloses authored source errata as notes that never block the chart", () => {
    // A corrected printed value and an unresolved contradiction each give one note; gaps stay blocking.
    const front = base.data.surfaces.find((surface) => surface.label === "1")!;
    const noted = build({
      ...base.data,
      sourceErrata: [
        {
          status: "corrected",
          surface: "1",
          field: "R",
          printed: -front.R,
          applied: front.R,
          evidence: ["source-summary", "sibling-example"],
          note: "Printed sign contradicts the stated focal length.",
        },
        { status: "unresolved", note: "The table traces to a shorter focal length than the summary states." },
      ],
    });
    const notes = assessMtfDataLimitations(prepareRuntimeState(noted, 0, 0), { ...reference, result: null });
    expect(notes.map(({ kind, blocking }) => [kind, blocking])).toEqual([
      ["source-erratum", false],
      ["source-inconsistent", false],
    ]);
    expect(notes[0].text).toContain(`surface 1, R) contradicts the source's own data`);
    expect(notes[0].text).toContain(`the source prints ${-front.R}, this prescription uses ${front.R}`);
    expect(notes[1].text).toContain("these curves describe the printed table: The table traces to a shorter");
    expect(assessMtfDataLimitations(state, photopic).every(({ blocking }) => blocking)).toBe(true);
  });
});
