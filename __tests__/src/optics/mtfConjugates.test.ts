import { CATALOG_CONSTRUCTION_FIXTURES, constructionFixtureData } from "./constructionFixtures.js";
import { analysisRequestAt, apertureAt, mtfInputs } from "./testLensFixtures.js";
import { createTraceGeometry } from "../../../src/optics/trace/geometry.js";
import { describe, expect, it } from "vitest";
import { build, buildSimplePositiveElementLens, buildVariableStopGapLens } from "./testLensFixtures.js";
import { prepareRuntimeState } from "../../../src/optics/state/runtimeAdapters.js";
import { assessMtfSupport, resolveMtfOptions } from "../../../src/optics/analysis/mtf/mtfSupport.js";
import { mtfFiniteObjectPoint } from "../../../src/optics/analysis/mtf/mtfConjugates.js";
import { assessMtfConjugateConsistency } from "../../../src/optics/analysis/mtf/mtfConjugateConsistency.js";
import {
  aimMtfStopLattice,
  mtfAimSpectrum,
  prepareMtfFieldLaunch,
  traceMtfFieldPupil,
} from "../../../src/optics/analysis/mtf/mtfTracing.js";
import { spectralTraceOptions } from "../../../src/optics/analysis/pupils/aimedPupil.js";
import { publishedFocusStations, publishedZoomStations } from "../../../src/optics/state/publishedStations.js";
import { prepareEngineTrace } from "../../../src/optics/trace/rayAdapters.js";
import { computeMtf } from "../../../src/optics/analysis/mtf/mtf.js";
import { computeWorkingFNumber } from "../../../src/optics/analysis/summary/fNumbers.js";
import { shearedOtf } from "../../../src/optics/analysis/mtf/mtfShearedOtf.js";
import {
  mtfWaveLattice,
  rayOpticalPathToImageMm,
  waveLatticeOtf,
  waveLatticePhaseStep,
} from "../../../src/optics/analysis/mtf/mtfWavefront.js";
import type { MtfOptions } from "../../../src/types/mtf.js";
import type { FiniteConjugate } from "../../../src/types/optics.js";

const options: MtfOptions = {
  method: "diffraction",
  spectrum: "reference",
  focus: "design",
  pupilSemiDiameterMm: 0.1,
  stopSemiDiameterMm: 0.1,
  fieldFractions: [0],
  frequenciesPerMm: [0, 1, 2],
  maxGridSize: 64,
};
const conjugate: FiniteConjugate = {
  focusT: 1,
  zoomT: 0,
  objectDistanceMm: 1000,
  distanceReference: "first-surface",
  source: "Synthetic thick-lens conjugate",
};

// Independent ABCD calculation: stop-to-glass air=1 mm, n=1.5168, radii +50/-50, glass=5 mm.
function atRear(y: number, u: number, imageN = 1) {
  y += u;
  u = (u - (y * (1.5168 - 1)) / 50) / 1.5168;
  y += 5 * u;
  u = (1.5168 * u - (y * (imageN - 1.5168)) / -50) / imageN;
  return { y, u };
}

// The angular ABCD basis starts at the stop centre; its axial crossing is the exit pupil.
function pupilDefocus(radius: number, distance: number, authoredGap: number, imageN = 1) {
  const marginal = atRear(radius, radius / distance, imageN);
  const chief = atRear(0, 1, imageN);
  const pupilGap = -chief.y / chief.u;
  const rim = marginal.y + marginal.u * pupilGap;
  const authoredRadius = authoredGap - pupilGap;
  const imageRadius = -rim / marginal.u;
  return {
    wavefrontMm: ((imageN * rim ** 2) / 2) * (1 / authoredRadius - 1 / imageRadius),
    authoredN: Math.abs(authoredRadius / rim) / (2 * imageN),
  };
}

describe("documented finite MTF", () => {
  const base = buildSimplePositiveElementLens();
  const axial = atRear(1, 1 / conjugate.objectDistanceMm);
  const imageGap = -axial.y / axial.u;
  const L = build({
    ...constructionFixtureData(base),
    surfaces: constructionFixtureData(base).surfaces.map((s, i) => (i === 2 ? { ...s, d: imageGap } : s)),
    finiteConjugates: [conjugate],
  });
  const state = prepareRuntimeState(L, 1, 0);
  // A fast aperture makes the two distance conventions distinguishable in diffraction depths.
  const auditOptions = { ...options, pupilSemiDiameterMm: 12, stopSemiDiameterMm: 12 };
  it("certifies the independently solved paraxial image and magnification", () => {
    const report = assessMtfConjugateConsistency(mtfInputs(state, auditOptions)[0])!;
    const parallel = atRear(1, 0);
    expect(report.verdict).toBe("consistent");
    expect(report.objectZMm).toBe(-1000);
    expect(report.paraxialImageZMm).toBeCloseTo(6 + imageGap, 12);
    expect(report.paraxialOffsetMm).toBeCloseTo(0, 12);
    expect(report.paraxialMagnification).toBeCloseTo(parallel.y + imageGap * parallel.u, 12);
    // Paraxial Snell steps give the marginal slope independently of clear-aperture clips.
    const marginal = atRear(auditOptions.stopSemiDiameterMm, auditOptions.stopSemiDiameterMm / 1000);
    const paraxialN = 1 / (2 * Math.abs(marginal.u));
    expect(report.paraxialWorkingFNumber).toBeCloseTo(paraxialN, 12);
    expect(report.authoredPlaneWorkingFNumber).toBeCloseTo(paraxialN, 12);
    expect(report.diffractionDepthMm).toBeCloseTo(2 * report.referenceWavelengthNm * 1e-6 * paraxialN ** 2, 12);
    expect(report.referenceDiscriminated).toBe(true);
    expect(report.realRayBestFocusOffsetMm).not.toBeNull();
    // The helper uses the chart's real marginal ray, rather than the inferred Summary conjugate.
    const result = computeMtf(...mtfInputs(state, { ...auditOptions, maxGridSize: 32 }));
    expect(report.realRayWorkingFNumber).toBe(result.workingFNumber);
    expect(result.focus!.appliedShiftMm).toBe(0);
  });
  it("recognizes the other distance reference without changing the declared object", () => {
    const wrongReference = prepareRuntimeState(
      build({
        ...constructionFixtureData(L),
        finiteConjugates: [{ ...conjugate, distanceReference: "image-plane" }],
      }),
      1,
      0,
    );
    const report = assessMtfConjugateConsistency(mtfInputs(wrongReference, auditOptions)[0])!;
    const wrongAxial = atRear(1, 1 / (1000 - state.imgZ));
    expect(report.verdict).toBe("other-reference");
    expect(report.objectZMm).toBeCloseTo(state.imgZ - 1000, 12);
    expect(report.paraxialOffsetMm).toBeCloseTo(-wrongAxial.y / wrongAxial.u - imageGap, 12);
    expect(report.otherReference.distanceReference).toBe("first-surface");
    expect(report.otherReference.paraxialOffsetMm).toBeCloseTo(0, 12);
  });
  it("flags a perturbed focus gap with the independently known signed residual", () => {
    const perturbed = prepareRuntimeState(
      build({
        ...constructionFixtureData(L),
        surfaces: constructionFixtureData(L).surfaces.map((s, i) => (i === 2 ? { ...s, d: imageGap + 2 } : s)),
      }),
      1,
      0,
    );
    const report = assessMtfConjugateConsistency(mtfInputs(perturbed, auditOptions)[0])!;
    expect(report.verdict).toBe("inconsistent");
    expect(report.paraxialOffsetMm).toBeCloseTo(-2, 12);
    const { wavefrontMm } = pupilDefocus(12, 1000, imageGap + 2);
    expect(report.offsetDepths).toBeCloseTo(wavefrontMm / ((report.referenceWavelengthNm * 1e-6) / 4), 10);
    expect(Math.abs(report.otherReference.offsetDepths!)).toBeGreaterThan(report.thresholdDepths);
  });
  // Independent conjugate magnification of an object at `distance`: the parallel ray's height at that image.
  function magnificationAt(distance: number) {
    const ray = atRear(1, 1 / distance);
    const parallel = atRear(1, 0);
    return Math.abs(parallel.y - (ray.y / ray.u) * parallel.u);
  }
  function magnificationReport(objectDistanceMm: number, sourceMagnification: string) {
    const solved = prepareRuntimeState(
      build({
        ...constructionFixtureData(L),
        finiteConjugates: [{ ...conjugate, objectDistanceMm, sourceMagnification }],
      }),
      1,
      0,
    );
    return assessMtfConjugateConsistency(mtfInputs(solved, auditOptions)[0])!;
  }
  it("solves a printed magnification to the in-focus distance when the trace rounds to it", () => {
    const inFocus = magnificationAt(1000);
    // The provisional distance is wrong on purpose: the solve reads the prescription, not the declaration.
    const provisional = magnificationReport(900, inFocus.toFixed(4));
    expect(provisional.magnification!.inFocusMagnification).toBeCloseTo(inFocus, 12);
    expect(provisional.magnification!.inFocusObjectDistanceMm).toBeCloseTo(1000, 8);
    expect(provisional.magnification!.solvedObjectDistanceMm).toBeCloseTo(1000, 8);
    expect(provisional.magnification!.atDeclaredDistance).toBeCloseTo(magnificationAt(900), 12);
    expect(provisional.magnification!.withinPrint).toBe(false);
    expect(provisional.magnification!.solvedOffsetDepths).toBeCloseTo(0, 8);
    expect(provisional.magnification!.matchesSolve).toBe(false);
    expect(provisional.verdict).toBe("inconsistent");
    const declared = magnificationReport(1000, inFocus.toFixed(4));
    expect(declared.magnification!.withinPrint).toBe(true);
    expect(declared.magnification!.matchesSolve).toBe(true);
    expect(declared.verdict).toBe("consistent");
    // One decimal fewer widens the print enough to hold a distance that is not the solved one.
    const loose = magnificationReport(990, inFocus.toFixed(3));
    expect(loose.magnification!.withinPrint).toBe(true);
    expect(Math.abs(loose.offsetDepths!)).toBeLessThan(loose.thresholdDepths);
    expect(loose.magnification!.matchesSolve).toBe(false);
    expect(loose.verdict).toBe("inconsistent");
    expect(assessMtfConjugateConsistency(mtfInputs(state, auditOptions)[0])!.magnification).toBeNull();
  });
  it("holds a print the prescription misses at its nearest rounding bound", () => {
    // 12% above the in-focus magnification, so the bound nearest focus is the print minus half its last digit.
    const printed = (magnificationAt(1000) * 1.12).toFixed(4);
    const bound = Number(printed) - 0.00005;
    let near = 500;
    let far = 1000;
    for (let i = 0; i < 80; i++) {
      const middle = (near + far) / 2;
      if (magnificationAt(middle) > bound) near = middle;
      else far = middle;
    }
    const provisional = magnificationReport(1000, printed);
    expect(provisional.magnification!.solvedObjectDistanceMm).toBeCloseTo(near, 8);
    expect(provisional.magnification!.withinPrint).toBe(false);
    const declared = magnificationReport(Number(near.toFixed(2)), printed);
    expect(declared.magnification!.withinPrint).toBe(true);
    expect(declared.magnification!.matchesSolve).toBe(true);
    // The miss stays visible as defocus instead of being absorbed by the solve.
    const { wavefrontMm } = pupilDefocus(12, Number(near.toFixed(2)), imageGap);
    expect(declared.offsetDepths).toBeCloseTo(wavefrontMm / ((declared.referenceWavelengthNm * 1e-6) / 4), 8);
    expect(Math.abs(declared.offsetDepths!)).toBeGreaterThan(declared.thresholdDepths);
    expect(declared.verdict).toBe("inconsistent");
    // A ratio carries no rounding interval, so the distance sits at exactly that magnification.
    const ratio = magnificationReport(1000, "1/20");
    expect(magnificationAt(ratio.magnification!.solvedObjectDistanceMm!)).toBeCloseTo(0.05, 12);
  });
  it("holds a solved distance to its 0.01 mm rounding, however little defocus a larger miss costs", () => {
    const solved = magnificationReport(1000, "1/20").magnification!.solvedObjectDistanceMm!;
    // At a twentieth life size 0.02 mm of object distance is a negligible defocus, and still not the solve.
    const off = magnificationReport(solved + 0.02, "1/20");
    expect(Math.abs(off.offsetDepths! - off.magnification!.solvedOffsetDepths!)).toBeLessThan(0.01);
    expect(off.magnification!.matchesSolve).toBe(false);
    expect(off.verdict).toBe("inconsistent");
    // Twenty times life size puts the object 2.5 mm beyond the front focus, where a first-order allowance for
    // the rounding falls short and half a rounding step is several quarter waves.
    const close = magnificationReport(1000, "20").magnification!.solvedObjectDistanceMm!;
    expect(magnificationAt(close)).toBeCloseTo(20, 9);
    for (const [offset, matches] of [
      [0.0049, true],
      [-0.0049, true],
      [0.0051, false],
      [-0.0051, false],
    ] as const) {
      const rounded = magnificationReport(close + offset, "20");
      expect(Math.abs(rounded.offsetDepths! - rounded.magnification!.solvedOffsetDepths!)).toBeGreaterThan(1);
      expect(rounded.magnification!.matchesSolve).toBe(matches);
      expect(rounded.magnification!.withinPrint).toBe(matches);
    }
  });
  it("solves a print for the real object when the in-focus conjugate is virtual", () => {
    // Half a millimetre inside infinity focus, only a virtual object focuses on the plane.
    const parallel = atRear(1, 0);
    const short = prepareRuntimeState(
      build({
        ...constructionFixtureData(L),
        surfaces: constructionFixtureData(L).surfaces.map((s, i) =>
          i === 2 ? { ...s, d: -parallel.y / parallel.u - 0.5 } : s,
        ),
        finiteConjugates: [{ ...conjugate, sourceMagnification: "0.50" }],
      }),
      1,
      0,
    );
    const report = assessMtfConjugateConsistency(mtfInputs(short, auditOptions)[0])!;
    let near = 100;
    let far = 300;
    for (let i = 0; i < 80; i++) {
      const middle = (near + far) / 2;
      if (magnificationAt(middle) > 0.495) near = middle;
      else far = middle;
    }
    expect(report.magnification!.inFocusObjectDistanceMm).toBeNull();
    expect(report.magnification!.inFocusMagnification).toBeNull();
    expect(report.magnification!.solvedObjectDistanceMm).toBeCloseTo(near, 8);
    // Above life size the upright orientation has a real object too, inside the front focus, but its image is
    // virtual: the solve must return the inverted conjugate at the print's lower bound.
    const magnified = (lens: typeof L, focusState: typeof short) => {
      const data = constructionFixtureData(lens);
      const image = focusState.imgZ - focusState.surfaces.at(-1)!.z;
      const surfaces = data.surfaces.map((s, i) => (i === 2 ? { ...s, d: image } : s));
      const built = build({ ...data, surfaces, finiteConjugates: [{ ...conjugate, sourceMagnification: "2.0" }] });
      return assessMtfConjugateConsistency(mtfInputs(prepareRuntimeState(built, 1, 0), auditOptions)[0])!;
    };
    near = 60;
    far = 100;
    for (let i = 0; i < 80; i++) {
      const middle = (near + far) / 2;
      if (magnificationAt(middle) > 1.95) near = middle;
      else far = middle;
    }
    expect(magnified(L, short).magnification!.solvedObjectDistanceMm).toBeCloseTo(near, 8);
    expect(magnified(L, state).magnification!.solvedObjectDistanceMm).toBeCloseTo(near, 8);
  });
  it("keeps defocus invariant when a dummy surface is inserted just before the image", () => {
    // An index-matched plane changes no optical power or pupil, only the final trace reference.
    const authoredGap = imageGap + 0.2;
    const lastGap = 0.3;
    const data = constructionFixtureData(L);
    const defocused = build({
      ...data,
      surfaces: data.surfaces.map((s, i) => (i === 2 ? { ...s, d: authoredGap } : s)),
    });
    const withDummy = build({
      ...data,
      surfaces: [
        ...data.surfaces.map((s, i) => (i === 2 ? { ...s, d: authoredGap - lastGap } : s)),
        { label: "dummy", R: 1e15, d: lastGap, nd: 1, sd: 50, elemId: 0 },
      ],
    });
    // A plate may also end on the image plane itself (zero final gap).
    const onImage = build({
      ...data,
      surfaces: [
        ...data.surfaces.map((s, i) => (i === 2 ? { ...s, d: authoredGap } : s)),
        { label: "dummy", R: 1e15, d: 0, nd: 1, sd: 50, elemId: 0 },
      ],
    });
    const reports = [defocused, withDummy, onImage].map(
      (lens) => assessMtfConjugateConsistency(mtfInputs(prepareRuntimeState(lens, 1, 0), auditOptions)[0])!,
    );
    const expected = pupilDefocus(12, 1000, authoredGap).wavefrontMm / (587.5618e-6 / 4);
    expect(Math.abs(expected)).toBeGreaterThan(25);
    for (const report of reports) {
      expect(Math.abs(report.offsetDepths! / expected - 1)).toBeLessThan(1e-6);
      expect(report.unavailableReason).toBeNull();
      // The image 0.2 mm short of the plane is real even when a flat face sits behind it.
      expect(report.paraxialImageUnavailableReason).toBeNull();
      expect(report.paraxialOffsetMm).toBeCloseTo(-0.2, 9);
    }
    for (const report of reports.slice(1)) {
      expect(Math.abs(report.offsetDepths! / reports[0].offsetDepths! - 1)).toBeLessThan(1e-6);
      expect(report.authoredPlaneWorkingFNumber).toBeCloseTo(reports[0].authoredPlaneWorkingFNumber!, 10);
    }
    // A last-surface sag measure instead scales by L_i/L_a and loses two thirds here.
    const lastSurfaceRatio = (lastGap - 0.2) / lastGap / (imageGap / authoredGap);
    expect(Math.abs(lastSurfaceRatio - 1)).toBeGreaterThan(0.6);
  });
  it("keeps a virtual image inside a thick flat-backed element from certifying", () => {
    // 32 mm from the stop is inside the front focal length (about 124 mm), so the beam diverges through
    // 256 mm of glass and leaves the flat back still diverging: its axis crossing is virtual, in the glass.
    const data = constructionFixtureData(base);
    const thick = build({
      ...data,
      surfaces: data.surfaces.map((s, i) =>
        i === 1 ? { ...s, R: 64, d: 256 } : i === 2 ? { ...s, R: 1e15, d: 1 } : s,
      ),
      finiteConjugates: [{ ...conjugate, objectDistanceMm: 32 }],
    });
    const report = assessMtfConjugateConsistency(mtfInputs(prepareRuntimeState(thick, 1, 0), options)[0])!;
    // The 0.1 mm stop keeps the wavefront measure itself inside the limit.
    expect(Math.abs(report.offsetDepths!)).toBeLessThan(report.thresholdDepths);
    expect(report.paraxialImageUnavailableReason).toContain("virtual");
    expect(report.paraxialImageZMm).toBeNull();
    expect(report.verdict).toBe("inconsistent");
  });
  it("uses a finite defocus value for an image-space telecentric pupil", () => {
    // Air=64 mm before an n=1→2, R=64 face: a stop-centre ray exits with u_c=0.
    // The stop-rim ray exits with u=−r/128, independently of the finite object distance.
    const radius = 12;
    const n = 2;
    const offset = 1e-4;
    const imageGap = 128 * (1 + 64 / 1000) - 5;
    const telecentric = prepareRuntimeState(
      build({
        ...constructionFixtureData(L),
        elements: L.elements.map((e) => ({ ...e, nd: n })),
        surfaces: [
          { label: "STO", R: 1e15, d: 64, nd: 1, sd: 15, elemId: 0 },
          { label: "1", R: 64, d: 5, nd: n, sd: 15, elemId: 1 },
          { label: "2", R: 1e15, d: imageGap - offset, nd: n, sd: 15, elemId: 1 },
        ],
      }),
      1,
      0,
    );
    const report = assessMtfConjugateConsistency(mtfInputs(telecentric, auditOptions)[0])!;
    const workingN = 1 / (2 * n * (radius / 128));
    const depth = 2 * 587.5618e-6 * n * workingN ** 2;
    expect(report.unavailableReason).toBeNull();
    expect(report.paraxialOffsetMm).toBeCloseTo(offset, 10);
    expect(report.authoredPlaneWorkingFNumber).toBeCloseTo(workingN, 12);
    expect(report.diffractionDepthMm).toBeCloseTo(depth, 12);
    expect(report.offsetDepths).toBeCloseTo(offset / depth, 9);
  });
  it("certifies paraxial conjugacy when the real working-aperture ray clips", () => {
    const report = assessMtfConjugateConsistency(
      mtfInputs(state, { ...auditOptions, pupilSemiDiameterMm: 20, stopSemiDiameterMm: 20 })[0],
    )!;
    const marginal = atRear(20, 20 / 1000);
    expect(report.verdict).toBe("consistent");
    expect(report.paraxialOffsetMm).toBeCloseTo(0, 12);
    expect(report.paraxialWorkingFNumber).toBeCloseTo(1 / (2 * Math.abs(marginal.u)), 12);
    expect(report.realRayWorkingFNumber).toBeNull();
    expect(report.offsetDepths).toBeCloseTo(0, 10);
    expect(report.unavailableReason).toBeNull();
    expect(report.realRayUnavailableReason).toContain("Working f-number ray");
  });
  it("discriminates two passing references only with a substantial relative residual", () => {
    // The independent ABCD solve gives the alternate cone's wavefront at the authored plane.
    // A 6 mm stop puts that residual between one and 25 depths, below the rejection threshold.
    const stop = 6;
    const other = atRear(1, 1 / (1000 - state.imgZ));
    const otherGap = -other.y / other.u;
    const { wavefrontMm } = pupilDefocus(stop, 1000 - state.imgZ, imageGap);
    const report = assessMtfConjugateConsistency(
      mtfInputs(state, { ...auditOptions, pupilSemiDiameterMm: stop, stopSemiDiameterMm: stop })[0],
    )!;
    expect(report.otherReference.paraxialOffsetMm).toBeCloseTo(otherGap - imageGap, 12);
    expect(report.otherReference.offsetDepths).toBeCloseTo(wavefrontMm / (587.5618e-6 / 4), 10);
    expect(Math.abs(report.otherReference.offsetDepths!)).toBeGreaterThan(1);
    expect(Math.abs(report.otherReference.offsetDepths!)).toBeLessThan(report.thresholdDepths);
    expect(report.referenceDiscriminated).toBe(true);
    expect(report.verdict).toBe("consistent");
  });
  it("reports ambiguity when both references fit without a tenfold separation above one depth", () => {
    // At the exact image a tiny stop makes even the alternate residual less than one depth.
    const unresolved = assessMtfConjugateConsistency(mtfInputs(state, options)[0])!;
    expect(Math.abs(unresolved.otherReference.offsetDepths!)).toBeLessThan(1);
    expect(unresolved.referenceDiscriminated).toBe(false);
    expect(unresolved.verdict).toBe("ambiguous-reference");

    // Move the plane to share the independently calculated convention residual between both.
    const other = atRear(1, 1 / (1000 - state.imgZ));
    const sharedGap = (imageGap - other.y / other.u) / 2;
    const shared = prepareRuntimeState(
      build({
        ...constructionFixtureData(L),
        surfaces: constructionFixtureData(L).surfaces.map((s, i) => (i === 2 ? { ...s, d: sharedGap } : s)),
      }),
      1,
      0,
    );
    const report = assessMtfConjugateConsistency(mtfInputs(shared, auditOptions)[0])!;
    expect(report.paraxialOffsetMm).toBeCloseTo(imageGap - sharedGap, 12);
    for (const check of [report, report.otherReference]) {
      expect(Math.abs(check.offsetDepths!)).toBeGreaterThan(1);
      expect(Math.abs(check.offsetDepths!)).toBeLessThan(report.thresholdDepths);
    }
    expect(Math.abs(report.otherReference.offsetDepths! / report.offsetDepths!)).toBeLessThan(10);
    expect(report.referenceDiscriminated).toBe(false);
    expect(report.verdict).toBe("ambiguous-reference");
  });
  it("treats an alternate object behind the first surface as discriminating the reference", () => {
    // 60 mm from the first surface images about 250 mm away, so 60 mm from the image lies inside the system.
    const near = atRear(1, 1 / 60);
    const nearGap = -near.y / near.u;
    const close = prepareRuntimeState(
      build({
        ...constructionFixtureData(base),
        surfaces: constructionFixtureData(base).surfaces.map((s, i) => (i === 2 ? { ...s, d: nearGap } : s)),
        finiteConjugates: [{ ...conjugate, objectDistanceMm: 60 }],
      }),
      1,
      0,
    );
    expect(close.imgZ).toBeGreaterThan(60);
    const report = assessMtfConjugateConsistency(mtfInputs(close, options)[0])!;
    expect(report.paraxialOffsetMm).toBeCloseTo(0, 9);
    expect(report.otherReference.unavailableReason).toContain("not in front");
    expect(report.otherReference.offsetDepths).toBeNull();
    expect(report.referenceDiscriminated).toBe(true);
    expect(report.verdict).toBe("consistent");
  });
  it("does not certify infinity or interpolated focus states", () => {
    for (const focusT of [0, 0.5])
      expect(assessMtfConjugateConsistency(mtfInputs(prepareRuntimeState(L, focusT, 0), auditOptions)[0])).toBeNull();
  });
  // The image-side cone must not hide a wrong object by becoming arbitrarily slow.
  it.each([1e-5, -1e-5])("rejects an object %s mm from the front focal point", (offset) => {
    const frontFocus = -atRear(0, 1).u / atRear(1, 0).u;
    const distance = frontFocus + offset;
    const near = prepareRuntimeState(
      build({ ...constructionFixtureData(L), finiteConjugates: [{ ...conjugate, objectDistanceMm: distance }] }),
      1,
      0,
    );
    const report = assessMtfConjugateConsistency(mtfInputs(near, auditOptions)[0])!;
    const { wavefrontMm } = pupilDefocus(12, distance, imageGap);
    expect(report.verdict).toBe("inconsistent");
    expect(report.offsetDepths).toBeCloseTo(wavefrontMm / ((report.referenceWavelengthNm * 1e-6) / 4), 7);
    expect(report.offsetDepths).toBeGreaterThan(1000);
    expect(report.unavailableReason).toBeNull();
    if (offset < 0) {
      expect(report.paraxialImageZMm).toBeNull();
      expect(report.paraxialOffsetMm).toBeNull();
      expect(report.paraxialMagnification).toBeNull();
      expect(report.paraxialWorkingFNumber).toBeNull();
      expect(report.paraxialImageUnavailableReason).toContain("No finite real paraxial image");
      // A tiny test aperture can make the wavefront pass; a virtual image still cannot certify focus.
      const slow = assessMtfConjugateConsistency(mtfInputs(near, options)[0])!;
      expect(Math.abs(slow.offsetDepths!)).toBeLessThan(slow.thresholdDepths);
      expect(slow.verdict).toBe("inconsistent");
    } else expect(report.paraxialImageZMm).toBeGreaterThan(1e8);
  });
  it("retains finite defocus when a collimated exit has no finite real image", () => {
    // A single n=1→2, R=64 mm refracting face collimates an axial object 64 mm away exactly.
    const collimated = prepareRuntimeState(
      build({
        ...constructionFixtureData(L),
        elements: L.elements.map((e) => ({ ...e, nd: 2 })),
        surfaces: [
          { label: "STO", R: 1e15, d: 0, nd: 1, sd: 15, elemId: 0 },
          { label: "1", R: 64, d: 5, nd: 2, sd: 15, elemId: 1 },
          { label: "2", R: 1e15, d: 64, nd: 2, sd: 15, elemId: 1 },
        ],
        finiteConjugates: [{ ...conjugate, objectDistanceMm: 64 }],
      }),
      1,
      0,
    );
    const report = assessMtfConjugateConsistency(mtfInputs(collimated, auditOptions)[0])!;
    expect(report.paraxialImageZMm).toBeNull();
    expect(report.paraxialOffsetMm).toBeNull();
    expect(report.paraxialMagnification).toBeNull();
    expect(report.paraxialWorkingFNumber).toBeNull();
    expect(report.paraxialImageUnavailableReason).toContain("No finite real paraxial image");
    expect(report.unavailableReason).toBeNull();
    // The stop and refracting face coincide, 5 mm before the last surface: R_a = 64 + 5.
    expect(report.offsetDepths).toBeCloseTo((2 * 12 ** 2) / (2 * 69) / (587.5618e-6 / 4), 9);
    expect(report.verdict).toBe("inconsistent");
  });
  it("rejects a reference that puts the object at front focus while the other reference focuses", () => {
    const parallel = atRear(1, 0);
    const angular = atRear(0, 1);
    const frontFocus = -angular.u / parallel.u;
    // Solve S - frontFocus = authored z = 6 + imageGap(S) using the independent ABCD matrix.
    const q = 6 - parallel.y / parallel.u;
    const planeZ = (q + Math.sqrt(q ** 2 - (4 * (parallel.y * frontFocus + angular.y)) / parallel.u)) / 2;
    const wrong = prepareRuntimeState(
      build({
        ...constructionFixtureData(L),
        surfaces: constructionFixtureData(L).surfaces.map((s, i) => (i === 2 ? { ...s, d: planeZ - 6 } : s)),
        finiteConjugates: [{ ...conjugate, objectDistanceMm: frontFocus + planeZ, distanceReference: "image-plane" }],
      }),
      1,
      0,
    );
    const report = assessMtfConjugateConsistency(mtfInputs(wrong, auditOptions)[0])!;
    expect(-report.objectZMm).toBeCloseTo(frontFocus, 12);
    expect(report.offsetDepths).toBeGreaterThan(1000);
    expect(report.otherReference.offsetDepths).toBeCloseTo(0, 8);
    expect(report.verdict).toBe("other-reference");
  });
  it("uses the image medium index in quarter-wave defocus and authored-plane depth", () => {
    const n = 1.333;
    const marginal = atRear(12, 12 / 1000, n);
    const lambda = 587.5618e-6;
    // Set 22.5 quarter waves by solving the pupil-sphere vergence difference independently.
    const chief = atRear(0, 1, n);
    const pupilGap = -chief.y / chief.u;
    const rim = marginal.y + marginal.u * pupilGap;
    const authoredGap = pupilGap + 1 / (-marginal.u / rim + (22.5 * lambda) / (2 * n * rim ** 2));
    const immersed = prepareRuntimeState(
      build({
        ...constructionFixtureData(L),
        elements: [...L.elements, { ...L.elements[0], id: 2, nd: n }],
        surfaces: constructionFixtureData(L).surfaces.map((s, i) =>
          i === 2 ? { ...s, nd: n, elemId: 2, d: authoredGap } : s,
        ),
      }),
      1,
      0,
    );
    const report = assessMtfConjugateConsistency(mtfInputs(immersed, auditOptions)[0])!;
    const { authoredN } = pupilDefocus(12, 1000, authoredGap, n);
    expect(report.authoredPlaneWorkingFNumber).toBeCloseTo(authoredN, 12);
    expect(report.diffractionDepthMm).toBeCloseTo(2 * lambda * n * authoredN ** 2, 12);
    expect(report.limitMm).toBe(report.thresholdDepths * report.diffractionDepthMm!);
    expect(report.offsetDepths).toBeCloseTo(22.5, 9);
  });
  it("approaches offset / (2 lambda n N squared) for a small image offset", () => {
    const offset = 1e-7;
    const shifted = prepareRuntimeState(
      build({
        ...constructionFixtureData(L),
        surfaces: constructionFixtureData(L).surfaces.map((s, i) => (i === 2 ? { ...s, d: imageGap - offset } : s)),
      }),
      1,
      0,
    );
    const report = assessMtfConjugateConsistency(mtfInputs(shifted, auditOptions)[0])!;
    const marginal = atRear(12, 12 / 1000);
    const n = 1;
    const conjugateN = 1 / (2 * n * Math.abs(marginal.u));
    const oldDepths = offset / (2 * report.referenceWavelengthNm * 1e-6 * n * conjugateN ** 2);
    expect(report.offsetDepths).toBeGreaterThan(0);
    expect(report.offsetDepths! / oldDepths).toBeCloseTo(1, 7);
  });
  it("checks the same axial source on a fisheye while preserving its MTF support boundary", () => {
    const fisheye = prepareRuntimeState(
      build({
        ...constructionFixtureData(L),
        projection: { kind: "fisheye-equidistant", focalLengthMm: 50, fullFieldDeg: 180 },
      }),
      1,
      0,
    );
    const report = assessMtfConjugateConsistency(mtfInputs(fisheye, auditOptions)[0])!;
    const axial = assessMtfConjugateConsistency(mtfInputs(state, auditOptions)[0])!;
    expect(report.verdict).toBe("consistent");
    expect(report.paraxialImageZMm).toBe(axial.paraxialImageZMm);
    expect(report.paraxialWorkingFNumber).toBe(axial.paraxialWorkingFNumber);
    expect(report.realRayWorkingFNumber).toBe(axial.realRayWorkingFNumber);
    expect(report.realRayBestFocusOffsetMm).toBe(axial.realRayBestFocusOffsetMm);
    expect(assessMtfSupport(...mtfInputs(fisheye, auditOptions)).reason).toBe("unsupported-path");
  });
  it("keeps mixed-reference and physical eligibility checks on a fisheye axial audit", () => {
    const imageN = 1.6;
    const axial = atRear(1, 1 / 1000, imageN);
    const mixed = prepareRuntimeState(
      build({
        ...constructionFixtureData(L),
        projection: { kind: "fisheye-equidistant", focalLengthMm: 50, fullFieldDeg: 180 },
        elements: [...L.elements, { ...L.elements[0], id: 2, nd: imageN, glass: undefined, indexReference: "e" }],
        surfaces: constructionFixtureData(L).surfaces.map((s, i) =>
          i === 2 ? { ...s, nd: imageN, elemId: 2, d: -axial.y / axial.u } : s,
        ),
      }),
      1,
      0,
    );
    const report = assessMtfConjugateConsistency(mtfInputs(mixed, auditOptions)[0])!;
    expect(report.verdict).toBe("inconsistent");
    expect(report.unavailableReason).toContain("Mixed d/D/e indices");
    expect(report.offsetDepths).toBeNull();
    const invalid = assessMtfConjugateConsistency(mtfInputs(mixed, { ...auditOptions, stopSemiDiameterMm: NaN })[0])!;
    expect(invalid.unavailableReason).toContain("finite physical apertures");
  });
  it("sets the finite-conjugate diffraction cutoff from the independent marginal angle", () => {
    // A nearly stigmatic finite image has the circular-pupil MTF at cutoff 2 sin U′ / λ in air.
    const radius = options.stopSemiDiameterMm;
    const marginal = atRear(radius, radius / conjugate.objectDistanceMm);
    const na = Math.abs(marginal.u) / Math.hypot(1, marginal.u);
    const workingN = 1 / (2 * na);
    const support = assessMtfSupport(...mtfInputs(state, options));
    const lambda = support.spectralLines[0].wavelengthNm * 1e-6;
    const cutoff = 1 / (lambda * workingN);
    const fractions = [0, 0.2, 0.5, 0.9, 1.1];
    const request = { ...options, frequenciesPerMm: fractions.map((s) => s * cutoff) };
    const bundle = traceMtfFieldPupil(state, request, support, 0, 64)!;
    // At this 0.1 mm stop, residual spherical aberration leaves less than 10 nm transverse blur.
    for (const ray of bundle.rays) expect(Math.hypot(ray.x, ray.y)).toBeLessThan(1e-5);
    const result = computeMtf(...mtfInputs(state, request));
    expect(result.conjugate).toEqual({
      kind: "finite",
      objectDistanceMm: conjugate.objectDistanceMm,
      distanceReference: "first-surface",
    });
    // The hand calculation is paraxial; the real 0.1 mm marginal ray agrees within 10 ppm.
    expect(Math.abs(result.workingFNumber! / workingN - 1)).toBeLessThan(1e-5);
    expect(result.axialVignetting).toBeNull();
    const field = result.fields[0];
    expect(field.reason).toBeNull();
    expect(result.focus!.appliedShiftMm).toBe(0);
    expect(workingN).toBeGreaterThan(1.04 / (2 * Math.abs(atRear(radius, 0).u)));
    expect(field.sagittal).toHaveLength(fractions.length);
    fractions.forEach((s, i) => {
      const expected = s >= 1 ? 0 : (2 / Math.PI) * (Math.acos(s) - s * Math.sqrt(1 - s * s));
      for (const cut of ["sagittal", "tangential"] as const) {
        // A 64-cell hard pupil rim dominates the paraxial/residual-aberration error here.
        expect(Math.abs(field[cut][i] - expected)).toBeLessThan(0.004);
        if (s > 1) expect(field[cut][i]).toBe(0);
      }
    });
  });
  it("uses a common point source and reproduces paraxial focus and magnification", () => {
    const support = assessMtfSupport(...mtfInputs(state, options));
    const bundle = traceMtfFieldPupil(state, options, support, 0, 32)!;
    expect(bundle).not.toBeNull();
    for (const ray of bundle.rays) {
      const { origin, direction } = ray.trace.input;
      const distance = (origin[2] - bundle.objectPoint![2]) / direction[2];
      expect(origin[0] - distance * direction[0]).toBeCloseTo(bundle.objectPoint![0], 10);
      expect(origin[1] - distance * direction[1]).toBeCloseTo(bundle.objectPoint![1], 10);
      expect(Math.hypot(ray.x, ray.y)).toBeLessThan(0.00001);
    }
    const offAxis = traceMtfFieldPupil(state, options, support, 0.001 * L.halfField, 32)!;
    const parallel = atRear(1, 0),
      magnification = parallel.y + imageGap * parallel.u;
    expect(offAxis.chief.y / offAxis.objectPoint![1]).toBeCloseTo(magnification, 5);
    const result = computeMtf(...mtfInputs(state, options));
    expect(result.magnification).toBeCloseTo(magnification, 4);
    expect(result.fields[0].status).toBe("converged");
    expect(result.fields[0].sagittal[0]).toBeCloseTo(1, 12);
  });
  it("reads the infinity marginal angle without a finite magnification", () => {
    const infinite = prepareRuntimeState(L, 0, 0);
    const marginal = atRear(options.stopSemiDiameterMm, 0);
    const na = Math.abs(marginal.u) / Math.hypot(1, marginal.u);
    const result = computeMtf(...mtfInputs(infinite, options));
    expect(result.conjugate).toEqual({ kind: "infinity" });
    expect(Math.abs(result.workingFNumber! * 2 * na - 1)).toBeLessThan(1e-5);
    expect(result.magnification).toBeNull();
  });
  it("traces magnification onto the applied held plane", () => {
    const shift = 2;
    // Unit object height, chief through the stop centre: u = −1 / object distance.
    const chief = atRear(0, -1 / conjugate.objectDistanceMm);
    const result = computeMtf(...mtfInputs(state, { ...options, heldFocusShiftMm: shift }));
    expect(result.magnification).toBeCloseTo(chief.y + (imageGap + shift) * chief.u, 4);
  });
  it("keeps the certified object when the authored plane implies a different paraxial conjugate", () => {
    const shifted = prepareRuntimeState(
      build({
        ...constructionFixtureData(L),
        surfaces: constructionFixtureData(L).surfaces.map((s, i) => (i === 2 ? { ...s, d: imageGap + 20 } : s)),
      }),
      1,
      0,
    );
    const inputs = mtfInputs(shifted, options);
    const result = computeMtf(...inputs);
    const summary = computeWorkingFNumber(inputs[0]);
    expect(summary.status).toBe("traced");
    if (summary.status !== "traced") throw new Error("Expected a paraxial-object marginal ray");
    expect(Math.abs(summary.value - result.workingFNumber!)).toBeGreaterThan(1);
    const marginal = atRear(options.stopSemiDiameterMm, options.stopSemiDiameterMm / conjugate.objectDistanceMm);
    const na = Math.abs(marginal.u) / Math.hypot(1, marginal.u);
    expect(Math.abs(result.workingFNumber! * 2 * na - 1)).toBeLessThan(1e-5);
  });
  it("retains an image-plane distance reference in the serializable chart state", () => {
    const distance = conjugate.objectDistanceMm + state.imgZ;
    const referenced = prepareRuntimeState(
      build({
        ...constructionFixtureData(L),
        finiteConjugates: [{ ...conjugate, objectDistanceMm: distance, distanceReference: "image-plane" }],
      }),
      1,
      0,
    );
    const result = computeMtf(...mtfInputs(referenced, options));
    const firstSurface = computeMtf(...mtfInputs(state, options));
    expect(result.conjugate).toEqual({ kind: "finite", objectDistanceMm: distance, distanceReference: "image-plane" });
    expect(result.workingFNumber).toBeCloseTo(firstSurface.workingFNumber!, 10);
    expect(result.magnification).toBeCloseTo(firstSurface.magnification!, 10);
    expect(JSON.parse(JSON.stringify(result))).toEqual(result);
  });
  it("distinguishes first-surface and image-plane distances and rejects unverified states", () => {
    expect(mtfFiniteObjectPoint(state, conjugate, 0)![2]).toBe(-1000);
    expect(
      mtfFiniteObjectPoint(
        state,
        { ...conjugate, distanceReference: "image-plane", objectDistanceMm: 1000 + state.imgZ },
        0,
      )![2],
    ).toBeCloseTo(-1000, 12);
    expect(
      mtfFiniteObjectPoint(state, { ...conjugate, distanceReference: "image-plane", objectDistanceMm: 1 }, 0),
    ).toBeNull();
    for (const [focus, zoom] of [
      [0.5, 0],
      [1, 0.5],
    ]) {
      expect(assessMtfSupport(...mtfInputs(prepareRuntimeState(L, focus, zoom), options)).reason).toBe(
        "finite-conjugate-unavailable",
      );
    }
    expect(assessMtfSupport(...mtfInputs({ ...state, aberrationT: 0.5 }, options)).reason).toBe(
      "finite-conjugate-unavailable",
    );
    const imagePlane = { ...state.imagePlane, normal: [0, 0.1, 1] as const };
    const tilted = {
      ...state,
      imagePlane,
      traceGeometry: createTraceGeometry({
        ...state.traceGeometry,
        imagePlane,
        isFoldedOptics: state.lens.flags.isFoldedOptics,
      }),
    };
    expect(assessMtfSupport(...mtfInputs(tilted, options)).reason).toBe("unsupported-path");
  });
  it("approaches the infinity bundle at large object distance", () => {
    const far = build({
      ...constructionFixtureData(base),
      finiteConjugates: [{ ...conjugate, objectDistanceMm: 1e9 }],
    });
    const finiteState = prepareRuntimeState(far, 1, 0),
      infiniteState = prepareRuntimeState(far, 0, 0);
    const angle = 0.01 * far.halfField;
    const finite = traceMtfFieldPupil(
      finiteState,
      options,
      assessMtfSupport(...mtfInputs(finiteState, options)),
      angle,
      32,
    )!;
    const infinite = traceMtfFieldPupil(
      infiniteState,
      options,
      assessMtfSupport(...mtfInputs(infiniteState, options)),
      angle,
      32,
    )!;
    expect(finite.rays.length).toBe(infinite.rays.length);
    finite.rays.forEach((r, i) => {
      expect(r.x).toBeCloseTo(infinite.rays[i].x, 6);
      expect(r.y).toBeCloseTo(infinite.rays[i].y, 6);
    });
  });
  it("uses the authored zoom station and rejects neighboring interpolated geometry", () => {
    const zoom = buildVariableStopGapLens([
      [1, 2],
      [1.5, 2.5],
      [2, 3],
    ]);
    const lens = build({ ...constructionFixtureData(zoom), finiteConjugates: [{ ...conjugate, zoomT: 0.5 }] });
    const documented = prepareRuntimeState(lens, 1, 0.5);
    expect(documented.surfaces[0].d).toBe(2.5);
    expect(assessMtfSupport(...mtfInputs(documented, options)).available).toBe(true);
    expect(assessMtfSupport(...mtfInputs(prepareRuntimeState(lens, 1, 0.49), options)).reason).toBe(
      "finite-conjugate-unavailable",
    );
  });
  it("reads the same OTF from ray landings and from optical path with a spherical incident wave", () => {
    // f/8 from 1 m: a plane-wave launch phase would put a metre-scale sphere error on the wavefront.
    const request: MtfOptions = { ...options, pupilSemiDiameterMm: 3, stopSemiDiameterMm: 3 };
    const support = assessMtfSupport(...mtfInputs(state, request));
    const line = support.spectralLines[0];
    const lambda = line.wavelengthNm * 1e-6;
    const frequencies = [10, 30, 60];
    for (const fieldAngleDeg of [0, 4]) {
      const bundle = traceMtfFieldPupil(state, request, support, fieldAngleDeg, 128, line, state.imgZ, true)!;
      const lattice = mtfWaveLattice(bundle, bundle.chief, state.imgZ)!;
      expect(waveLatticePhaseStep(lattice, lambda)).toBeLessThan(0.25);
      const landings = shearedOtf(bundle, bundle.chief, lambda, frequencies);
      const paths = waveLatticeOtf(lattice, lambda, frequencies);
      frequencies.forEach((_, i) => {
        for (const cut of ["sagittal", "tangential"] as const) {
          expect(Math.abs(landings[cut].real[i] - paths[cut].real[i])).toBeLessThan(0.004);
          expect(Math.abs(landings[cut].imaginary[i] - paths[cut].imaginary[i])).toBeLessThan(0.004);
        }
      });
    }
  });
  it("keeps spherical launch phase invariant when moving the input plane along a ray", () => {
    const support = assessMtfSupport(...mtfInputs(state, options));
    const bundle = traceMtfFieldPupil(state, options, support, 0, 32, support.spectralLines[0], state.imgZ, true)!;
    const ray = bundle.rays[0].trace;
    const image = [0, 0, state.imgZ] as const;
    const before = rayOpticalPathToImageMm(ray, image, bundle.objectPoint)!;
    const moved = {
      ...ray,
      opticalPathLengthMm: ray.opticalPathLengthMm! - 1,
      input: {
        ...ray.input,
        origin: ray.input.origin.map((v, i) => v + ray.input.direction[i]) as [number, number, number],
      },
    };
    expect(rayOpticalPathToImageMm(moved, image, bundle.objectPoint)).toBeCloseTo(before, 10);
  });
});

describe("finite MTF at close focus", () => {
  // A wide lens focused close keeps its entrance pupil far ahead of its stop, where the straight line from an off-axis
  // object point to the stop centre misses its front surfaces. No synthetic fixture has such a pupil, so these catalog
  // stations, whose off-axis fields once had every stop cell unaimed, guard the aim from the MTF's solved chief.
  const STATIONS = [
    ["panasonic-lumix-g-vario-12-60mm-f35-56", 0, 1],
    ["samyang-af-14mm-f28-ef", 0, 1],
    ["sigma-12mm-f14-dc-contemporary", 0, 1],
    ["hasselblad-xcd-25mm-f25-v", 0, 1],
  ] as const;
  it.each(STATIONS)(
    "aims every default field on the real stop: %s, zoom %i, focus %i",
    (key, zoomIndex, focusIndex) => {
      const L = build(CATALOG_CONSTRUCTION_FIXTURES[key]);
      const zoomT = publishedZoomStations(L).find((station) => station.index === zoomIndex)!.zoomT;
      const focusT = publishedFocusStations(L, zoomIndex).find((station) => station.index === focusIndex)!.focusT;
      const request = analysisRequestAt(L, { focusT, zoomT, ...apertureAt(L, zoomT) });
      const settings = { method: "diffraction", spectrum: "reference", focus: "design", maxGridSize: 32 } as const;
      const result = computeMtf(request, settings);
      expect(result.support.conjugate).toBeDefined();
      expect(result.fields).toHaveLength(5);
      for (const field of result.fields) {
        expect(field.pupilSampling).toBe("stop");
        expect(field.validRays).toBeGreaterThan(0);
        expect(field.unaimedRays).toBe(0);
        expect(field.sagittal.length).toBeGreaterThan(0);
      }
      // Each aimed ray, traced to the stop on its own, crosses within the aim's tolerance of its target.
      const state = request.preparedGeometry;
      const options = resolveMtfOptions(request, settings);
      const line = result.support.spectralLines[0];
      const toStop = prepareEngineTrace(state, {
        capture: "terminal",
        stopAt: state.lens.stop.surfaceIndex + 1,
        checkSemiDiameter: false,
        directionNormalized: true,
        ...spectralTraceOptions(state, mtfAimSpectrum(state, result.support, line)),
      });
      for (const field of result.fields.slice(1)) {
        const launch = prepareMtfFieldLaunch(state, options, result.support, field.fieldAngleDeg!)!;
        const lattice = aimMtfStopLattice(state, options, result.support, launch, 16, line)!;
        expect(lattice.unaimedCount).toBe(0);
        expect(lattice.aimedCount).toBeGreaterThan(0);
        for (const ray of [lattice.chief, ...lattice.rays]) {
          if (ray.status !== "aimed") continue;
          const crossing = toStop(ray).terminalPoint;
          const miss = Math.hypot(crossing[0] - ray.targetStopMm[0], crossing[1] - ray.targetStopMm[1]);
          expect(miss).toBeLessThanOrEqual(lattice.residualToleranceMm);
        }
      }
    },
  );
});
