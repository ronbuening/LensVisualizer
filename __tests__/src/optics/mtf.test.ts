import { constructionFixtureData } from "./constructionFixtures.js";
import { mtfInputs } from "./testLensFixtures.js";
import { createTraceGeometry } from "../../../src/optics/trace/geometry.js";
import { describe, expect, it, vi } from "vitest";
import {
  build,
  buildChromaticPositiveElementLens,
  buildFacingFlatMirrorsLens,
  buildRearPlateLens,
  buildSimplePositiveElementLens,
  buildVariableStopGapLens,
  REAR_PLATE_FIXTURE,
  sharedApoLanthar50f2,
  sharedNikkor105f14,
  sharedNikkorZ50f18,
  sharedNikkorZ70200,
  sharedNokton50f1,
  sharedSonnar50f15,
  analysisRequestAt,
  apertureAt,
  teleconverterFixture,
  teleconverterHostData,
} from "./testLensFixtures.js";
import { prepareRuntimeState } from "../../../src/optics/state/runtimeAdapters.js";
import {
  assessMtfSupport,
  MTF_PHOTOPIC_LINES,
  mtfPrescriptionScale,
} from "../../../src/optics/analysis/mtf/mtfSupport.js";
import type { MtfGridCap, MtfOptions } from "../../../src/types/mtf.js";
import type { FiniteConjugate, RuntimeLens, SourceOmission } from "../../../src/types/optics.js";
import { LINE_NM } from "../../../src/optics/chromatic/spectralLines.js";
import { geometricOtf, otfMagnitude } from "../../../src/optics/analysis/mtf/mtfMath.js";
import { assessMtfDataLimitations } from "../../../src/optics/analysis/mtf/mtfDataLimitations.js";
import { computeMtf, computeMtfSteps } from "../../../src/optics/analysis/mtf/mtf.js";
import { attachFixtureTeleconverter as attachTeleconverter } from "./constructionFixtures.js";
import {
  findMtfFieldFootprint,
  mtfImagePoint,
  prepareMtfFieldLaunch,
  traceMtfFieldPupil,
  traceMtfLaunchPlaneBundle,
} from "../../../src/optics/analysis/mtf/mtfTracing.js";
import { shearedOtf } from "../../../src/optics/analysis/mtf/mtfShearedOtf.js";
import { traceRayClassification } from "../../../src/optics/trace/rayClassification.js";
import type { MtfBundle } from "../../../src/optics/analysis/mtf/mtfTracing.js";
import { assessUnresolvedFlux, emptyMtfField, refineMtfField } from "../../../src/optics/analysis/mtf/mtf.js";
import type { MtfGridOutcome } from "../../../src/optics/analysis/mtf/mtf.js";
import {
  mtfBeamHeight,
  mtfChiefHeight,
  mtfFieldProcessingOrder,
  resolveMtfFieldGeometry,
} from "../../../src/optics/analysis/mtf/mtfFields.js";
import { computeWorkingFNumber } from "../../../src/optics/analysis/summary/fNumbers.js";
import {
  findAxialBestFocus,
  landingPoints,
  mtfImagePlaneOffset,
  mtfNearestImagePlaneZ,
} from "../../../src/optics/analysis/mtf/mtfFocus.js";
import { findMtfFootprint } from "../../../src/optics/analysis/mtf/mtfFootprint.js";
import type { TraceRayClass } from "../../../src/optics/trace/rayClassification.js";
import { MTF_FREQUENCIES, MTF_MAX_UNKNOWN_FLUX } from "../../../src/optics/analysis/mtf/mtfConstants.js";
import type { EngineTraceResult } from "../../../src/optics/trace/types.js";
import { traceEngineRay } from "../../../src/optics/trace/rayAdapters.js";
import { createImageSurfaceShape } from "../../../src/optics/geometry/imageSurface.js";
import { stopLattice } from "../../../src/optics/analysis/pupils/stopLattice.js";
import { mtfIncidentFluxWeights } from "../../../src/optics/analysis/mtf/mtfIncidentFlux.js";
import { FIXTURE_PAIRS } from "./prescription/ingestV2Fixtures.js";

/*
 * Stop-lattice cells the aimed launch returns unaimed, by normalised stop position: the real aim leaves no cell inside
 * an ordinary beam unaimed, so the MTF's handling of one is tested on cells named here. Inactive while the list is empty.
 */
const unaimedCells = vi.hoisted(() => ({
  at: [] as (readonly [number, number])[],
  where: null as ((x: number, y: number, cellsAcross: number) => boolean) | null,
  wavelengthNm: null as number | null,
}));
vi.mock("../../../src/optics/analysis/pupils/aimedPupil.js", async (importOriginal) => {
  const original = await importOriginal<typeof import("../../../src/optics/analysis/pupils/aimedPupil.js")>();
  return {
    ...original,
    prepareAimedStopLatticeForState: (...args: Parameters<typeof original.prepareAimedStopLatticeForState>) => {
      const lattice = original.prepareAimedStopLatticeForState(...args);
      if (!lattice || (unaimedCells.at.length === 0 && !unaimedCells.where)) return lattice;
      const spectrum = args[4];
      if (
        unaimedCells.wavelengthNm !== null &&
        (typeof spectrum !== "object" || spectrum.wavelengthNm !== unaimedCells.wavelengthNm)
      )
        return lattice;
      const named = (x: number, y: number) =>
        unaimedCells.at.some(([u, v]) => u === x && v === y) ||
        (unaimedCells.where?.(x, y, lattice.cellsAcross) ?? false);
      const rays = lattice.rays.map((ray): typeof ray =>
        named(ray.xFraction, ray.yFraction)
          ? { ...ray, status: "unaimed", reason: "aim-not-converged", origin: null, direction: null }
          : ray,
      );
      const unaimed = rays.filter((ray) => ray.status === "unaimed").length;
      return {
        ...lattice,
        rays,
        aimedCount: rays.filter((ray) => ray.status === "aimed").length,
        blockedCount: rays.filter((ray) => ray.status === "blocked").length,
        unaimedCount: unaimed,
        unaimedByReason: {
          ...lattice.unaimedByReason,
          "aim-not-converged": lattice.unaimedByReason["aim-not-converged"] + unaimed - lattice.unaimedCount,
        },
      };
    },
  };
});

/** Lattice positions of the cells `column` places right of the centre and their mirror images, in the row above it. */
function namedPairs(columns: readonly number[], sizes: readonly number[]): (readonly [number, number])[] {
  return sizes.flatMap((n) =>
    columns.flatMap((offset) => {
      const x = (2 * (n / 2 + offset) + 1 - n) / n;
      return [[x, 1 / n] as const, [-x, 1 / n] as const];
    }),
  );
}

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

describe("MTF on curved image surfaces", () => {
  const base = buildSimplePositiveElementLens();
  const original = prepareRuntimeState(base, 0, 0);
  const offset = mtfImagePlaneOffset(original, assessMtfSupport(...mtfInputs(original, mtfTestOptions)))!.offsetMm;
  const focusedData = {
    ...constructionFixtureData(base),
    imageCircleMm: 20,
    surfaces: constructionFixtureData(base).surfaces.map((s, i) => (i === 2 ? { ...s, d: s.d + offset } : s)),
  };
  const options = { ...mtfTestOptions, fieldFractions: [0, 0.5], maxGridSize: 64 as const };
  const stateFor = (R?: number, cylindrical?: true) =>
    prepareRuntimeState(
      build({
        ...focusedData,
        ...(R === undefined ? {} : { imageSurface: { R, sd: 10, cylindrical } }),
        /* A cylinder's sections follow the frame; a 1-inch frame keeps it inside the 10 mm drawn half-height. */
        ...(cylindrical ? { imageFormat: "1-inch-type" } : {}),
      }),
      0,
      0,
    );

  it.each([
    [-1e7, "geometric"],
    [1e7, "geometric"],
    [-1e7, "diffraction"],
    [1e7, "diffraction"],
  ] as const)("approaches the flat MTF for radius %s mm (%s)", (R, method) => {
    const request = { ...options, method, fieldFractions: [0, 0.2] };
    const flat = computeMtf(...mtfInputs(stateFor(), request));
    const curved = computeMtf(...mtfInputs(stateFor(R), request));
    expect(curved.support.available).toBe(true);
    curved.fields.forEach((field, i) => {
      expect(field.sagittal).not.toHaveLength(0);
      field.sagittal.forEach((value, j) => expect(Math.abs(value - flat.fields[i].sagittal[j])).toBeLessThan(1e-6));
      field.tangential.forEach((value, j) => expect(Math.abs(value - flat.fields[i].tangential[j])).toBeLessThan(1e-6));
    });
  });

  it("improves off-axis MTF on a Petzval-matched singlet at the same vertex", () => {
    // Petzval radius is negative for the positive singlet in the imageward +z convention.
    const flat = computeMtf(...mtfInputs(stateFor(), options));
    const curved = computeMtf(...mtfInputs(stateFor(-1 / base.petzvalSum), options));
    expect(curved.focus!.appliedShiftMm).toBe(0);
    expect(flat.focus!.appliedShiftMm).toBe(0);
    expect(curved.fields[1].sagittal[2]).toBeGreaterThan(flat.fields[1].sagittal[2]);
    expect(curved.fields[1].tangential[2]).toBeGreaterThan(flat.fields[1].tangential[2]);
    expect(Math.abs(curved.fields[1].imageHeightMm! - 5)).toBeLessThan(1e-4);
  });

  it.each([undefined, true] as const)(
    "re-lands best-focus rays on the translated surface (cylinder: %s)",
    (cylinder) => {
      const state = stateFor(-1 / base.petzvalSum, cylinder);
      const support = assessMtfSupport(...mtfInputs(state, options));
      const bundle = traceMtfFieldPupil(state, options, support, 0, 64, support.spectralLines[0])!;
      const bundles = [{ bundle, weight: 1 }];
      const best = findAxialBestFocus(
        bundles,
        state.imgZ,
        [10, 20, 30, 40, 50],
        mtfNearestImagePlaneZ(state, bundles),
      )!;
      expect(Math.abs(best.shiftMm)).toBeGreaterThan(1e-6);
      const vertexZ = state.imgZ + best.shiftMm;
      const offAxis = traceMtfFieldPupil(state, options, support, 5, 32, support.spectralLines[0])!;
      // Off-axis sag is appreciable, so projecting onto the vertex plane cannot pass this residual check.
      expect(Math.abs(state.lens.imageSurface!.sagAt(offAxis.chief.x, offAxis.chief.y))).toBeGreaterThan(0.01);
      for (const field of [bundle, offAxis]) {
        const points = landingPoints(field, vertexZ);
        expect(points).toHaveLength(field.rays.length);
        points.forEach((point, i) => {
          const { terminalPoint: p, terminalDirection: d } = field.rays[i].trace;
          /* Landings are image coordinates; on a cylinder they lie along the unrolled film. */
          const [x, y] = state.lens.imageSurface!.fromImageCoordinates(point.x, point.y);
          const t = Math.abs(d[0]) > Math.abs(d[1]) ? (x - p[0]) / d[0] : (y - p[1]) / d[1];
          const z = p[2] + t * d[2];
          expect(Math.abs(z - vertexZ - state.lens.imageSurface!.sagAt(x, y))).toBeLessThan(1e-9);
        });
      }
      const result = computeMtf(...mtfInputs(state, { ...options, focus: "best-axial" }));
      expect(result.focus!.appliedShiftMm).toBeCloseTo(best.shiftMm, 5);
      expect(result.support.limitations.join(" ")).toContain(
        cylinder ? "measured on the unrolled film" : "field heights are lateral heights",
      );
    },
  );

  it("accounts for both sags when keeping the translated image behind the last cap", () => {
    const state = prepareRuntimeState(
      build({
        ...focusedData,
        imageSurface: { R: -30, sd: 10 },
        surfaces: focusedData.surfaces.map((s, i) => (i === 2 ? { ...s, R: 100 } : s)),
      }),
      0,
      0,
    );
    const shape = state.lens.imageSurface!;
    const last = state.surfaces.at(-1)!;
    const ray = { x: 0, y: 4, trace: { terminalPoint: [0, 4, last.z] } };
    const bundle = { rays: [ray], imageSurface: shape } as unknown as MtfBundle;
    const nearest = mtfNearestImagePlaneZ(state, [{ bundle, weight: 1 }]);
    expect(nearest + shape.sagAt(0, 4)).toBeCloseTo(last.z + last.profile.sag(last.sd), 12);
    expect(nearest).toBeGreaterThan(last.z + last.profile.sag(last.sd));
  });

  it("rejects backward curved landings and leaves flat bundle records unchanged", () => {
    const state = stateFor(-30);
    const trace = traceEngineRay(state, { origin: [0, 0, -10], direction: [0, 0, 1] });
    expect(mtfImagePoint(state, trace, trace.terminalPoint[2] - 2e-9)).toBeNull();
    expect(mtfImagePoint(state, trace, trace.terminalPoint[2] - 0.5e-9)).not.toBeNull();
    const flatState = stateFor();
    const support = assessMtfSupport(...mtfInputs(flatState, options));
    const bundle = traceMtfFieldPupil(flatState, options, support, 0, 16, support.spectralLines[0])!;
    expect(bundle).not.toHaveProperty("imageSurface");
    expect(support.limitations.join(" ")).not.toContain("Curved image surface");
    expect(landingPoints({ ...bundle, imageSurface: createImageSurfaceShape({ R: -30, sd: 10 }) }, -100)).toEqual([]);
  });
});

describe("MTF support", () => {
  const L = buildSimplePositiveElementLens();
  const state = prepareRuntimeState(L, 0, 0);
  const fisheye = prepareRuntimeState(
    build({
      ...constructionFixtureData(L),
      projection: { kind: "fisheye-equidistant", focalLengthMm: 50, fullFieldDeg: 180 },
    }),
    0,
    0,
  );
  const folded = prepareRuntimeState(buildFacingFlatMirrorsLens(), 0, 0);
  const diffractive = prepareRuntimeState(build(FIXTURE_PAIRS.find((pair) => pair.family === "diffractive")!.v2), 0, 0);
  const pathCases = [
    { reason: "fisheye-projection", state: fisheye, message: /fisheye projections;.*projection mapping/i },
    { reason: "folded-path", state: folded, message: /folded or mirror paths;.*optical-path lengths/i },
    {
      reason: "annular-aperture",
      state: { ...state, surfaces: state.surfaces.map((s, i) => (i === 1 ? { ...s, innerSd: 1 } : s)) },
      message: /annular apertures;.*optical-path differences.*central obstruction/i,
    },
    {
      reason: "diffractive-surface",
      state: diffractive,
      message: /diffractive surfaces;.*wavelength-dependent.*order/i,
    },
    {
      reason: "blocking-surface",
      state: {
        ...state,
        surfaces: state.surfaces.map((s, i) =>
          i === 1 ? { ...s, interaction: { ...s.interaction, type: "block" as const } } : s,
        ),
      },
      message: /blocking surfaces;.*pupil model.*sequential refractive path/i,
    },
    {
      reason: "tilted-image-plane",
      state: { ...state, imagePlane: { ...state.imagePlane, normal: [0, 0.1, 1] as const } },
      message: /perpendicular.*optical axis;.*direction cosines.*not modeled/i,
    },
    {
      reason: "non-forward-image-plane",
      state: { ...state, imagePlane: { ...state.imagePlane, normal: [0, 0, -1] as const } },
      message: /forward-facing image plane;.*positive axial normal/i,
    },
  ];

  // These gates qualify the model, so neither MTF method can silently approximate a missing prerequisite.
  it.each(pathCases)("names the missing prerequisite for $reason", ({ reason, state: target, message }) => {
    for (const method of ["geometric", "diffraction"] as const) {
      const support = assessMtfSupport(...mtfInputs(target, { ...mtfTestOptions, method }));
      expect(support).toMatchObject({ available: false, reason: "unsupported-path", pathReasons: [reason] });
      expect(support.message).toMatch(message);
      expect(support.message.length).toBeLessThan(160);
      expect(computeMtf(...mtfInputs(target, { ...mtfTestOptions, method })).fields).toEqual([]);
    }
  });

  it("lists every missing path prerequisite once in a stable order", () => {
    const combined = {
      ...folded,
      lens: { ...folded.lens, source: fisheye.lens.source },
      surfaces: folded.surfaces.map((s, i) =>
        i === 0
          ? { ...s, interaction: { ...s.interaction, type: "block" as const } }
          : { ...s, innerSd: 1, diffractive: diffractive.surfaces.find((surface) => surface.diffractive)!.diffractive },
      ),
      imagePlane: { ...folded.imagePlane, normal: [0, 0.1, -1] as const },
    };
    const support = assessMtfSupport(...mtfInputs(combined, { ...mtfTestOptions, movementActive: true }));
    expect(support).toMatchObject({
      available: false,
      reason: "unsupported-path",
      pathReasons: pathCases.map(({ reason }) => reason),
    });
    expect(support.message).toBe(
      pathCases.map(({ state: target }) => assessMtfSupport(...mtfInputs(target, mtfTestOptions)).message).join(" "),
    );
  });

  it("keeps movement precedence for an otherwise sequential lens with a tilted image plane", () => {
    const tilted = pathCases.find(({ reason }) => reason === "tilted-image-plane")!.state;
    const support = assessMtfSupport(...mtfInputs(tilted, { ...mtfTestOptions, movementActive: true }));
    expect(support.reason).toBe("active-movement");
    expect(support).not.toHaveProperty("pathReasons");
    expect(assessMtfSupport(...mtfInputs(state, mtfTestOptions))).not.toHaveProperty("pathReasons");
  });

  it("uses authored reference indices without requiring a spectral glass identity", () => {
    expect(assessMtfSupport(...mtfInputs(state, mtfTestOptions))).toMatchObject({
      available: true,
      referenceWavelengthNm: LINE_NM.d,
    });
    const e = build({
      ...constructionFixtureData(L),
      elements: L.elements.map((element) => ({ ...element, indexReference: "e" })),
    });
    expect(assessMtfSupport(...mtfInputs(prepareRuntimeState(e, 0, 0), mtfTestOptions)).referenceWavelengthNm).toBe(
      LINE_NM.e,
    );
  });
  it("rejects active movement, finite focus and invalid physical requests", () => {
    expect(assessMtfSupport(...mtfInputs(state, { ...mtfTestOptions, movementActive: true })).reason).toBe(
      "active-movement",
    );
    expect(assessMtfSupport(...mtfInputs(prepareRuntimeState(L, 1, 0), mtfTestOptions)).reason).toBe(
      "finite-conjugate-unavailable",
    );
    expect(assessMtfSupport(...mtfInputs(state, { ...mtfTestOptions, pupilSemiDiameterMm: NaN })).reason).toBe(
      "invalid-input",
    );
    // A retired method name from an untyped caller is refused, not computed as something else.
    const retired = { ...mtfTestOptions, method: "geometric-dl" } as unknown as MtfOptions;
    expect(assessMtfSupport(...mtfInputs(state, retired)).reason).toBe("invalid-input");
    expect(computeMtf(...mtfInputs(state, retired)).fields).toEqual([]);
  });
  it("rejects unverified normalized prescription scale", () => {
    const normalized = build({
      ...constructionFixtureData(L),
      focalLengthDesign: 1,
      focalLengthMarketing: 50,
      surfaces: constructionFixtureData(L).surfaces.map((s) => ({ ...s, R: s.R / 50, d: s.d / 50, sd: s.sd / 50 })),
    });
    expect(assessMtfSupport(...mtfInputs(prepareRuntimeState(normalized, 0, 0), mtfTestOptions)).reason).toBe(
      "unverified-scale",
    );
  });
  it("rejects mixed reference glasses without physical wavelength conversion", () => {
    const mixed = build({
      ...constructionFixtureData(L),
      elements: [...L.elements, { ...L.elements[0], id: 2, nd: 1.6, indexReference: "e" }],
      surfaces: constructionFixtureData(L).surfaces.map((s, i) => (i === 2 ? { ...s, nd: 1.6, elemId: 2 } : s)),
    });
    expect(assessMtfSupport(...mtfInputs(prepareRuntimeState(mixed, 0, 0), mtfTestOptions)).reason).toBe(
      "mixed-reference",
    );
  });
});

describe("geometric MTF", () => {
  it.each([1, 0.55])("reproduces the signed defocus-disc transform with y/x radius ratio %s", (ratio) => {
    // Uniform defocus discs and astigmatic ellipses have OTF 2 J1(2πνr) / (2πνr) on each principal cut.
    const radius = 0.02;
    const products = [0, 0.15, 0.4, 0.6098349456, 0.8, 1.1, 1.3];
    const frequencies = products.map((s) => s / radius);
    const points = stopLattice(128).map((cell) => ({
      x: radius * cell.xFraction,
      y: radius * ratio * cell.yFraction,
      weight: cell.weight,
    }));
    // The Bessel power series evaluates 2 J1(z)/z directly, including its finite DC limit.
    const discOtf = (nuR: number) => {
      let term = 1,
        sum = 1;
      for (let k = 1; k < 40; k++) {
        term *= -((Math.PI * nuR) ** 2) / (k * (k + 1));
        sum += term;
      }
      return sum;
    };
    for (const axis of ["x", "y"] as const) {
      const otf = geometricOtf(points, frequencies, axis);
      const magnitude = otfMagnitude(otf);
      products.forEach((s, i) => {
        const expected = discOtf(s * (axis === "x" ? 1 : ratio));
        // 128 midpoint cells resolve ≥49 cells/cycle here; the hard rim sets a 0.002 absolute quadrature bound.
        expect(Math.abs(otf.real[i] - expected)).toBeLessThan(0.002);
        expect(Math.abs(magnitude[i] - Math.abs(expected))).toBeLessThan(0.002);
        expect(Math.abs(otf.imaginary[i])).toBeLessThan(1e-12);
      });
    }
  });
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
    expect(traceRayClassification({ status: "failed", failureReason: "noBracket" } as EngineTraceResult)).toBe(
      "failed",
    );
    expect(traceRayClassification({ status: "clipped", failureReason: null } as EngineTraceResult)).toBe("blocked");
  });
  it("proves spherical, flat and aspheric cap misses without hiding in-aperture failures", () => {
    const base = buildSimplePositiveElementLens();
    const lens = build({
      ...constructionFixtureData(base),
      surfaces: [
        { label: "1", R: 10, d: 1, nd: 1.5168, elemId: 1, sd: 3 },
        { label: "2", R: -10, d: 1, nd: 1, elemId: 0, sd: 3 },
        { label: "STO", R: 1e15, d: 10, nd: 1, elemId: 0, sd: 3 },
      ],
    });
    const state = prepareRuntimeState(lens, 0, 0);
    const miss = traceEngineRay(
      state,
      { origin: [8, 0, -10], direction: [0, 0, 1] },
      {
        checkSemiDiameter: true,
        stopOnClip: true,
      },
    );
    expect(miss.failureReason).toBe("noBracket");
    expect(traceRayClassification(miss, state)).toBe("blocked");
    expect(traceRayClassification({ ...miss, terminalPoint: [0, 0, -10] }, state)).toBe("failed");
    // The analytic cap test is independent of the solver's failure label.
    expect(traceRayClassification({ ...miss, failureReason: "noConvergedIntersection" }, state)).toBe("blocked");
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
    aspheric.traceGeometry = createTraceGeometry({
      ...state.traceGeometry,
      surfaces: aspheric.surfaces,
      isFoldedOptics: state.lens.flags.isFoldedOptics,
    });
    // Aspheric caps use the Lipschitz interval proof: outside the aperture cylinder is a miss, a real rim hit is not.
    expect(traceRayClassification(miss, aspheric)).toBe("blocked");
    expect(traceRayClassification({ ...miss, terminalPoint: [2.5, 0, -10] }, aspheric)).toBe("failed");
    const apertureState = {
      ...aspheric,
      traceGeometry: { ...aspheric.traceGeometry, stopSurfaceIndex: 0 },
    };
    // Revisit the same surface after replacing its one bounds record with smaller caps.
    for (const aperture of [3, 1, 2, 3]) {
      expect(traceRayClassification({ ...miss, terminalPoint: [2.5, 0, -10] }, apertureState, aperture)).toBe(
        aperture < 2.5 ? "blocked" : "failed",
      );
    }
    const result = computeMtf(
      ...mtfInputs(state, { ...mtfTestOptions, pupilSemiDiameterMm: 8, stopSemiDiameterMm: 3 }),
    );
    expect(result.fields[0].failedRays).toBe(0);
    expect(result.fields[0].blockedRays).toBeGreaterThan(0);
    expect(result.fields[0].sagittal[0]).toBeCloseTo(1, 12);
  });
  it("reports converged curves or explicit sampling limitations on a real optical state", () => {
    const result = computeMtf(
      ...mtfInputs(prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0), mtfTestOptions),
    );
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
    const unformatted = computeMtf(...mtfInputs(prepareRuntimeState(base, 0, 0), options));
    expect(unformatted.geometry).toMatchObject({ basis: "modeled-edge" });
    expect(unformatted.geometry!.referenceHeightMm).toBe(unformatted.geometry!.modeledEdgeHeightMm);
    const lens = build({ ...constructionFixtureData(base), imageCircleMm: 4 });
    const state = prepareRuntimeState(lens, 0, 0);
    const result = computeMtf(...mtfInputs(state, options));
    expect(result.geometry).toMatchObject({ basis: "format-corner", referenceHeightMm: 2, modeledEdgeHeightMm: 2 });
    // The edge angle is solved to the corner, not left at the outward walk's overshoot.
    const chiefHeight = mtfChiefHeight(state, options, assessMtfSupport(...mtfInputs(state, options)));
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
    const edge = computeMtf(...mtfInputs(prepareRuntimeState(base, 0, 0), options)).geometry!.modeledEdgeHeightMm;
    const lens = build({ ...constructionFixtureData(base), imageCircleMm: 3 * edge });
    const result = computeMtf(...mtfInputs(prepareRuntimeState(lens, 0, 0), options));
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
    const [stop, ...lens] = constructionFixtureData(base).surfaces;
    const surfaces = [{ ...stop, d: 1 }, { label: "B", R: 1e15, nd: 1, sd: 0.3, d: 0.5, elemId: 0 }, ...lens];
    const data = {
      ...constructionFixtureData(base),
      surfaces,
      ...(conjugate ? { finiteConjugates: [conjugate] } : {}),
    };
    const prepare = (imageCircleMm?: number) =>
      prepareRuntimeState(build(imageCircleMm ? { ...data, imageCircleMm } : data), conjugate ? 1 : 0, 0);
    const options = { ...mtfTestOptions, fieldFractions: [0.5, 0.9, 1] };
    const unformatted = prepare();
    const support = assessMtfSupport(...mtfInputs(unformatted, options));
    // Without a declared format the reference stays the chief's own edge.
    const chiefEdge = computeMtf(...mtfInputs(unformatted, options)).geometry!;
    expect(chiefEdge.basis).toBe("modeled-edge");
    expect(Math.abs(chiefEdge.modeledEdgeAngleDeg - (Math.atan(0.3) * 180) / Math.PI)).toBeLessThan(0.5);
    expect(mtfChiefHeight(unformatted, options, support)(chiefEdge.modeledEdgeAngleDeg + 0.1)).toBeNaN();
    expect(mtfBeamHeight(unformatted, options, support)(chiefEdge.modeledEdgeAngleDeg + 0.1)).toBeGreaterThan(
      chiefEdge.modeledEdgeHeightMm,
    );
    // A format corner 30 % beyond that edge is still lit by the lower part of the beam.
    const cornerMm = 1.3 * chiefEdge.modeledEdgeHeightMm;
    const result = computeMtf(...mtfInputs(prepare(2 * cornerMm), options));
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
    const dark = computeMtf(...mtfInputs(prepare(600), options));
    expect(dark.geometry!.modeledEdgeHeightMm).toBeGreaterThan(cornerMm);
    expect(dark.geometry!.modeledEdgeHeightMm).toBeLessThan(300);
    expect(dark.fields[2]).toMatchObject({ status: "unavailable", reason: "outside-modeled-field" });
  });
  it("keeps an edge extension only while the unchecked chief's height keeps rising", () => {
    const state = { lens: { source: { catalog: { imageCircleMm: 60 } } } } as unknown as Parameters<
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
      { lens: { source: { catalog: { imageCircleMm: 30 } } } } as unknown as typeof state,
      8,
      chief,
      { reference: rising, beam: lit(rising) },
    )!;
    expect(corner).toMatchObject({ modeledEdgeHeightMm: 15, basis: "format-corner" });
    expect(corner.modeledEdgeAngleDeg).toBeCloseTo(15, 3);
  });
});

describe("MTF result invariants", () => {
  it.each([
    ["singlet", buildSimplePositiveElementLens],
    ["chromatic singlet", buildChromaticPositiveElementLens],
    ["APO-Lanthar", sharedApoLanthar50f2],
    ["Nikkor 105", sharedNikkor105f14],
    ["Nikkor Z 50", sharedNikkorZ50f18],
    ["Nikkor Z 70-200", sharedNikkorZ70200],
    ["Nokton", sharedNokton50f1],
    ["Sonnar", sharedSonnar50f15],
  ] as const)("normalizes flux, bounds diffraction and preserves axial symmetry: %s", (_name, makeLens) => {
    // Normalized incoherent images conserve DC; pupil phase cannot beat zero phase, and axial rotations exchange S/T.
    const lens = makeLens();
    const request = analysisRequestAt(lens, { ...apertureAt(lens, 0) });
    for (const method of ["geometric", "diffraction"] as const) {
      const result = computeMtf(request, {
        method,
        spectrum: "reference",
        focus: "design",
        fieldFractions: [0],
        frequenciesPerMm: [0, 10, 30, 50, 100],
        maxGridSize: 32,
      });
      expect(result.support.available).toBe(true);
      expect(result.fields).toHaveLength(1);
      const field = result.fields[0];
      expect(field.reason).toBeNull();
      expect(field.sagittal).toHaveLength(result.frequenciesPerMm.length);
      // DC and the triangle-inequality limit allow only 1e-10 summation noise.
      for (const cut of ["sagittal", "tangential"] as const) {
        expect(Math.abs(field[cut][0] - 1)).toBeLessThan(1e-10);
        if (method === "diffraction") {
          expect(field.diffractionLimit).toBeDefined();
          field[cut].forEach((value, i) => expect(value - field.diffractionLimit![cut][i]).toBeLessThanOrEqual(1e-10));
        }
      }
      // Stop aims end at a relative 1e-7 residual; the propagated S/T error is bounded here by 1e-6 MTF.
      field.sagittal.forEach((value, i) => expect(Math.abs(value - field.tangential[i])).toBeLessThan(1e-6));
    }
  });
});

describe("MTF at awkward geometry", () => {
  it("lands rays on an image plane that coincides with the last plate surface", () => {
    const L = buildRearPlateLens({ plates: [{ ...REAR_PLATE_FIXTURE, gapAfterMm: 0 }] });
    const state = prepareRuntimeState(L, 0, 0);
    expect(state.surfaces.at(-1)!.d).toBe(0);
    const field = computeMtf(...mtfInputs(state, mtfTestOptions)).fields[0];
    expect(field.reason).toBeNull();
    expect(field.sagittal[0]).toBeCloseTo(1, 12);
  });
  it("keeps a clipped chief ray as the geometric reference while pupil rays transmit", () => {
    const base = buildSimplePositiveElementLens();
    // One millimetre behind the stop, a 0.3 mm air baffle clips the 20° chief but passes part of the beam.
    const [stop, ...lens] = constructionFixtureData(base).surfaces;
    const L = build({
      ...constructionFixtureData(base),
      surfaces: [{ ...stop, d: 1 }, { label: "B", R: 1e15, nd: 1, sd: 0.3, d: 0.5, elemId: 0 }, ...lens],
    });
    const state = prepareRuntimeState(L, 0, 0);
    const options = { ...mtfTestOptions, fieldFractions: [1] };
    const bundle = traceMtfFieldPupil(state, options, assessMtfSupport(...mtfInputs(state, options)), 20, 32)!;
    expect(bundle).not.toBeNull();
    expect(bundle.chiefClipped).toBe(true);
    expect(bundle.rays.length).toBeGreaterThan(16);
  });
  it("judges convergence within the reporting band and reports where stability ends", () => {
    const state = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
    const options = { ...mtfTestOptions, pupilSemiDiameterMm: 10, stopSemiDiameterMm: 10, maxGridSize: 64 as const };
    const band = computeMtf(...mtfInputs(state, { ...options, frequenciesPerMm: [0, 10, 20, 40] })).fields[0];
    const wide = computeMtf(...mtfInputs(state, { ...options, frequenciesPerMm: [0, 10, 20, 40, 900] })).fields[0];
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
    ...constructionFixtureData(base),
    elements: [
      { ...element, id: 1, name: "Front", label: "L1", type: "negative", nd: 1.6, vd: 50 },
      { ...element, id: 2, name: "Rear", label: "L2", type: "positive", nd: 1.6, vd: 50 },
    ],
    surfaces: [
      { label: "1", R: 40, nd: 1.6, sd: 12, d: 1.5, elemId: 1 },
      { label: "2", R: 12, nd: 1, sd: 9, d: 12, elemId: 0 },
      { label: "STO", R: 1e15, nd: 1, sd: 3, d: 2, elemId: 0 },
      { label: "3", R: 20, nd: 1.6, sd: 6, d: 4, elemId: 2 },
      { label: "4", R: -20, nd: 1, sd: 6, d: 30, elemId: 0 },
    ],
  });
}

describe("MTF pupil sampling", () => {
  it("matches uniform incident flux through an aberrated off-axis pupil", () => {
    // The negative front meniscus produces pupil aberration at 35°. Launch-plane quadrature is independent of
    // the stop map and its finite-difference Jacobian. The low frequencies resolve this fixture's millimetre blur.
    const state = prepareRuntimeState(buildRetrofocusLens(), 0, 0);
    const options = { ...mtfTestOptions, pupilSemiDiameterMm: 2.2, stopSemiDiameterMm: 3 };
    const support = assessMtfSupport(...mtfInputs(state, options));
    const launch = prepareMtfFieldLaunch(state, options, support, 35)!;
    const footprint = findMtfFieldFootprint(state, options, support, launch)!;
    const frequencies = [0.1, 0.3];
    const stop = traceMtfFieldPupil(state, options, support, 35, 256)!;
    const weights = mtfIncidentFluxWeights(stop);
    expect(Array.from(weights).every((w) => Number.isFinite(w) && w > 0)).toBe(true);
    const flux = stop.rays.map((ray, i) => ({ ...ray, weight: ray.weight * weights[i] }));
    const plane = (n: number) =>
      traceMtfLaunchPlaneBundle(state, options, support, launch, footprint, n, support.spectralLines[0])!;
    const reference = plane(1024);
    const coarseReference = plane(512);
    for (const bundle of [stop, reference, coarseReference]) {
      expect([bundle.failed, bundle.unaimed]).toEqual([0, 0]);
      expect(Object.values(bundle.openBorders)).toEqual([false, false, false]);
    }
    // T=5e-4 allows the stop disc's boundary quadrature error; the independently doubled launch grid must move
    // by less than T/2 in complex OTF. Stop-uniform weighting misses by more than ten times T on the T cut.
    const tolerance = 5e-4;
    for (const axis of ["x", "y"] as const) {
      const control = geometricOtf(reference.rays, frequencies, axis);
      const coarser = geometricOtf(coarseReference.rays, frequencies, axis);
      const weighted = geometricOtf(flux, frequencies, axis);
      for (let i = 0; i < frequencies.length; i++) {
        const error = (otf: typeof control) =>
          Math.hypot(otf.real[i] - control.real[i], otf.imaginary[i] - control.imaginary[i]);
        expect(error(coarser)).toBeLessThan(tolerance / 2);
        expect(error(weighted)).toBeLessThan(tolerance);
      }
      if (axis === "y") {
        const uniform = geometricOtf(stop.rays, frequencies, axis);
        expect(
          Math.hypot(uniform.real[1] - control.real[1], uniform.imaginary[1] - control.imaginary[1]),
        ).toBeGreaterThan(10 * tolerance);
      }
    }
  });
  it("integrates launch area and Lambertian solid angle, including mirrored rim stencils", () => {
    const state = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
    const support = assessMtfSupport(...mtfInputs(state, mtfTestOptions));
    const bundle = traceMtfFieldPupil(state, mtfTestOptions, support, 0, 16)!;
    const lattice = bundle.lattice!;
    const area = bundle.stepMm ** 2;
    for (const weight of mtfIncidentFluxWeights(bundle)) expect(weight).toBeCloseTo(area, 14);
    // The stop is the first surface: its inverse map is the identity even at the rim. Keep only the +x launch
    // geometry to exercise the same reflection used when a symmetric bundle traces half its pupil.
    const half = {
      ...lattice,
      rays: lattice.rays.map((ray) =>
        ray.origin && ray.origin[0] < 0
          ? { ...ray, status: "unaimed" as const, reason: "aim-not-converged" as const, origin: null, direction: null }
          : ray,
      ),
    };
    expect(mtfIncidentFluxWeights({ ...bundle, lattice: half })).toEqual(mtfIncidentFluxWeights(bundle));
    const objectPoint = [0, 0, lattice.chief.origin![2] - 10] as const;
    const finite = {
      ...lattice,
      rays: lattice.rays.map((ray) => {
        if (!ray.origin) return ray;
        const [x, y, z] = ray.origin;
        const length = Math.hypot(x, y, z - objectPoint[2]);
        return { ...ray, direction: [x / length, y / length, 10 / length] as const };
      }),
    };
    const weights = mtfIncidentFluxWeights({ ...bundle, lattice: finite, objectPoint });
    bundle.rays.forEach((ray, i) => {
      const x = ((2 * ray.column + 1 - bundle.columns) / bundle.columns) * lattice.stopSemiDiameterMm;
      const y = ((2 * ray.row + 1 - bundle.rows) / bundle.rows) * lattice.stopSemiDiameterMm;
      // dΩ = dz dA/r³ and cos(emission)=dz/r: the planar Lambertian source gives dz² dA/r⁴.
      expect(weights[i]).toBeCloseTo((100 * area) / (100 + x * x + y * y) ** 2, 14);
    });
    expect(() => mtfIncidentFluxWeights({ ...bundle, sampling: "launch-plane" })).toThrow(RangeError);
  });
  it("reproduces the launch-plane lattice on the axis of a lens without pupil aberration", () => {
    // The stop is the first surface and the axial beam is collimated, so a ray crosses the stop where it was launched:
    // the stop lattice and the launch-plane lattice over the same beam are the same cells, and so are their OTFs.
    const state = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
    const support = assessMtfSupport(...mtfInputs(state, mtfTestOptions));
    const line = support.spectralLines[0];
    const stop = traceMtfFieldPupil(state, mtfTestOptions, support, 0, 32)!;
    expect(stop.sampling).toBe("stop");
    // A 32-cell lattice keeps 812 cell centres inside the stop's circle, 2 R / 32 apart.
    expect(stop.rays).toHaveLength(812);
    expect(stop.stepMm).toBeCloseTo(2 / 32, 12);
    const launch = prepareMtfFieldLaunch(state, mtfTestOptions, support, 0)!;
    const footprint = findMtfFieldFootprint(state, mtfTestOptions, support, launch)!;
    const plane = traceMtfLaunchPlaneBundle(state, mtfTestOptions, support, launch, footprint, 32, line)!;
    expect(plane.sampling).toBe("launch-plane");
    expect(plane.rays).toHaveLength(812);
    expect(plane.stepMm).toBeCloseTo(2 / 32, 12);
    const frequencies = [10, 20, 40, 80];
    const wavelengthMm = line.wavelengthNm * 1e-6;
    for (const axis of ["x", "y"] as const) {
      const fromStop = otfMagnitude(geometricOtf(stop.rays, frequencies, axis));
      const fromPlane = otfMagnitude(geometricOtf(plane.rays, frequencies, axis));
      fromStop.forEach((value, i) => expect(value).toBeCloseTo(fromPlane[i], 9));
    }
    const shearedStop = shearedOtf(stop, stop.chief, wavelengthMm, frequencies);
    const shearedPlane = shearedOtf(plane, plane.chief, wavelengthMm, frequencies);
    for (const cut of ["sagittal", "tangential"] as const) {
      const a = otfMagnitude(shearedStop[cut]);
      const b = otfMagnitude(shearedPlane[cut]);
      a.forEach((value, i) => expect(value).toBeCloseTo(b[i], 9));
    }
  });
  it("samples an off-axis field of a wide angle evenly on the stop, with equal weights", () => {
    // At 50° the retrofocus front group images the stop large and off axis. Every cell's ray, traced on its own to the
    // stop without apertures, crosses it at the cell's lattice position ((2k + 1 − n) / n) R within the aim's
    // tolerance; equal launch-plane cells over the same beam land on the stop unevenly.
    const state = prepareRuntimeState(buildRetrofocusLens(), 0, 0);
    const options = { ...mtfTestOptions, pupilSemiDiameterMm: 2.2, stopSemiDiameterMm: 3 };
    const support = assessMtfSupport(...mtfInputs(state, options));
    const line = support.spectralLines[0];
    const n = 32;
    const R = options.stopSemiDiameterMm;
    const bundle = traceMtfFieldPupil(state, options, support, 50, n)!;
    expect(bundle.sampling).toBe("stop");
    expect([bundle.unaimed, bundle.failed]).toEqual([0, 0]);
    const toStop = (ray: { origin: readonly number[]; direction: readonly number[] }) => {
      const trace = traceEngineRay(state, ray as never, {
        capture: "terminal",
        stopAt: state.lens.stop.surfaceIndex + 1,
        checkSemiDiameter: false,
        directionNormalized: true,
      });
      return [trace.terminalPoint[0], trace.terminalPoint[1]];
    };
    for (const ray of bundle.rays) {
      const [x, y] = toStop(ray.trace.input);
      expect(Math.abs(x - ((2 * ray.column + 1 - n) / n) * R)).toBeLessThanOrEqual(1e-7 * R + 1e-12);
      expect(Math.abs(y - ((2 * ray.row + 1 - n) / n) * R)).toBeLessThanOrEqual(1e-7 * R + 1e-12);
      // The fixture's glasses carry no absorption data: every lit cell carries the same weight.
      expect(ray.weight).toBe(1);
    }
    // The launch-plane lattice over the same beam: its neighbouring cells cross the stop up to tens of percent apart.
    const launch = prepareMtfFieldLaunch(state, options, support, 50)!;
    const footprint = findMtfFieldFootprint(state, options, support, launch)!;
    const plane = traceMtfLaunchPlaneBundle(state, options, support, launch, footprint, n, line)!;
    const byCell = new Map(plane.rays.map((ray) => [`${ray.row},${ray.column}`, toStop(ray.trace.input)]));
    const pitches = plane.rays.flatMap((ray) => {
      const next = byCell.get(`${ray.row + 1},${ray.column}`);
      return next ? [next[1] - byCell.get(`${ray.row},${ray.column}`)![1]] : [];
    });
    expect(Math.max(...pitches) / Math.min(...pitches)).toBeGreaterThan(1.1);
  });
  it("reports unaimed cells inside the beam, and returns no number where they could move it", () => {
    // Every cell of this axial beam transmits. Name a +x cell and its mirror image on the 32-cell lattice, the ladder's
    // last: the bundle counts both, beside lit neighbours, and neither estimator returns a curve without saying so.
    // Three pairs carry more than 0.5 % of the flux: the 32-cell grid has no curve, and the 16-cell one stands, saying
    // why no finer grid gave one. Named on both lattices, they leave the field no curve at all.
    const state = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
    const fieldWith = (
      columns: readonly number[],
      method: MtfOptions["method"],
      sizes = [32],
      maxGridSize: MtfGridCap = 32,
    ) => {
      unaimedCells.at = namedPairs(columns, sizes);
      try {
        return computeMtf(...mtfInputs(state, { ...mtfTestOptions, method, maxGridSize })).fields[0];
      } finally {
        unaimedCells.at = [];
      }
    };
    for (const method of ["geometric", "diffraction"] as const) {
      const one = fieldWith([1], method);
      expect(one.gridSize).toBe(32);
      expect(one.unaimedRays).toBe(2);
      expect(one.unresolvedInBeamRays).toBe(2);
      // 2 of the 812 cells, each counted at full transmission.
      expect(one.unknownFluxFraction).toBeCloseTo(2 / 812, 12);
      expect(one.sagittal.length).toBeGreaterThan(0);
      expect(one.notes).toContain(
        method === "geometric"
          ? "2 pupil samples could not be aimed or traced: 2 beside the transmitted beam carry 0.25% of flux and are omitted; MTF error ≤ 0.005."
          : "2 pupil samples could not be aimed or traced: 2 beside the transmitted beam carry 0.25% of flux and are omitted; the diffraction estimate does not account for this flux.",
      );
      const stopped = fieldWith([1, 2, 3], method);
      expect(stopped.status).toBe("unconverged");
      expect(stopped.gridSize).toBe(16);
      expect([stopped.unaimedRays, stopped.unresolvedInBeamRays]).toEqual([0, 0]);
      expect(
        stopped.notes.some((note) =>
          /^No grid finer than 16 cells gave a curve; at 32 cells: 6 pupil samples beside the transmitted beam/.test(
            note,
          ),
        ),
      ).toBe(true);
      const none = fieldWith([1, 2, 3], method, [16, 32]);
      expect(none.status).toBe("unavailable");
      expect(none.reason).toBe("trace-failed");
      expect(none.sagittal).toEqual([]);
      expect(none.message).toMatch(/^6 pupil samples beside the transmitted beam could not be aimed or traced/);
      // Failing the share on the coarsest grid only, the field refines past it and converges (at 128 cells, as it does
      // with no unaimed cell at all).
      const refined = fieldWith([1, 2, 3], method, [16], 128);
      expect(refined.status).toBe("converged");
      expect(refined.gridSize).toBe(128);
      expect([refined.unaimedRays, refined.unresolvedInBeamRays]).toEqual([0, 0]);
      expect(refined.notes).toEqual([]);
    }
    // A bundle traced directly carries the same counts.
    unaimedCells.at = namedPairs([1], [32]);
    try {
      const support = assessMtfSupport(...mtfInputs(state, mtfTestOptions));
      const bundle = traceMtfFieldPupil(state, mtfTestOptions, support, 0, 32)!;
      expect([bundle.unaimed, bundle.failed, bundle.unresolvedInBeam, bundle.unresolvedWeight]).toEqual([2, 0, 2, 2]);
      expect(bundle.unresolvedInBeamWeight).toBe(2);
      expect(bundle.rays).toHaveLength(810);
    } finally {
      unaimedCells.at = [];
    }
  });
  it("weights unresolved flux by the incident spectrum when applying the flux cap", () => {
    // Only the strongest photopic line loses sixteen cells beside the beam. Weighted by the lines, they carry more than
    // 0.5 % of the flux; pooling the lattices as equals would hide them below the cap. Ray counts stay sample counts.
    const state = prepareRuntimeState(buildChromaticPositiveElementLens(), 0, 0);
    const strongest = MTF_PHOTOPIC_LINES[0];
    const totalWeight = MTF_PHOTOPIC_LINES.reduce((sum, line) => sum + line.weight, 0);
    const cells = 16;
    unaimedCells.at = namedPairs([1, 2, 3, 4, 5, 6, 7, 8], [16, 32]);
    unaimedCells.wavelengthNm = strongest.wavelengthNm;
    try {
      for (const method of ["geometric", "diffraction"] as const) {
        const field = computeMtf(...mtfInputs(state, { ...mtfTestOptions, method, spectrum: "photopic" })).fields[0];
        // Each full 32-cell disc carries 812 units; the unresolved cells of the strongest line keep full transmission.
        const expectedShare = (cells * strongest.weight) / (812 * totalWeight);
        expect(field.gridSize).toBe(32);
        expect(field.unknownFluxFraction).toBeCloseTo(expectedShare, 12);
        expect(expectedShare).toBeGreaterThan(MTF_MAX_UNKNOWN_FLUX);
        expect(cells / (812 * MTF_PHOTOPIC_LINES.length)).toBeLessThan(MTF_MAX_UNKNOWN_FLUX);
        expect([field.validRays, field.failedRays, field.unaimedRays, field.unresolvedInBeamRays]).toEqual([
          MTF_PHOTOPIC_LINES.length * 812 - cells,
          0,
          cells,
          cells,
        ]);
        expect(field.status).toBe("unavailable");
        expect(field.reason).toBe("trace-failed");
        expect(field.sagittal).toEqual([]);
        expect(field.tangential).toEqual([]);
      }
    } finally {
      unaimedCells.at = [];
      unaimedCells.wavelengthNm = null;
    }
  });
  it("counts unaimed samples away from the beam and names them, but keeps the curve", () => {
    // The 3 mm element rims 1 mm behind a 5 mm stop transmit only the stop's inner zone; the cells past 0.9 R are dark
    // and none of them is a row or column neighbour of a lit cell. Returned unaimed, they are counted and named but
    // withhold nothing, however many: about a fifth of the lattice here.
    const state = prepareRuntimeState(
      buildSimplePositiveElementLens("test-mtf-away-from-beam", { elementSd: 3 }),
      0,
      0,
    );
    const options = { ...mtfTestOptions, pupilSemiDiameterMm: 5, stopSemiDiameterMm: 5 };
    const clean = computeMtf(...mtfInputs(state, options)).fields[0];
    unaimedCells.where = (x, y) => Math.hypot(x, y) > 0.9;
    try {
      for (const method of ["geometric", "diffraction"] as const) {
        const field = computeMtf(...mtfInputs(state, { ...options, method })).fields[0];
        expect(field.status).not.toBe("unavailable");
        expect(field.gridSize).toBe(clean.gridSize);
        expect(field.unaimedRays).toBeGreaterThan(0.1 * field.validRays);
        expect([field.unresolvedInBeamRays, field.unknownFluxFraction]).toEqual([0, 0]);
        expect(field.notes).toContain(
          `${field.unaimedRays} pupil samples could not be aimed or traced: ${field.unaimedRays} touch no transmitted cell and are not counted.`,
        );
        if (method === "geometric") expect(field.sagittal).toEqual(clean.sagittal);
      }
    } finally {
      unaimedCells.where = null;
    }
  });
  it("says why when the aim finds no ray on the stop, and stops refining", () => {
    // Every cell unaimed: a finer lattice solves its cells alike, so the coarsest grid ends the ladder with the aimer's
    // reasons instead of passing for a thin beam.
    const state = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
    unaimedCells.where = () => true;
    try {
      for (const method of ["geometric", "diffraction"] as const) {
        const field = computeMtf(...mtfInputs(state, { ...mtfTestOptions, method })).fields[0];
        expect([field.status, field.reason, field.gridSize, field.validRays]).toEqual([
          "unavailable",
          "aim-failed",
          16,
          0,
        ]);
        expect(field.unaimedRays).toBeGreaterThan(0);
        expect(field.sagittal).toEqual([]);
        expect(field.message).toBe(
          `No sample of the 16-cell stop lattice could be aimed at 587.6 nm (${field.unaimedRays} aim-not-converged).`,
        );
      }
    } finally {
      unaimedCells.where = null;
    }
  });
  it("fits the footprint to a slit beam thinner than the coarse scan when the chief transmits", () => {
    // A 0.1 mm slit through the chief: the scan of a 10 mm pupil samples y every 1.25 mm and misses it.
    const slit = (x: number, y: number): TraceRayClass =>
      Math.abs(x) < 3 && Math.abs(y - 0.02) < 0.05 ? "valid" : "blocked";
    const footprint = findMtfFootprint(slit, 10, true)!;
    expect(footprint).not.toBeNull();
    expect(footprint.y0).toBeLessThan(-0.03);
    expect(footprint.y1).toBeGreaterThan(0.07);
    expect(footprint.x1).toBeGreaterThanOrEqual(3);
    expect(footprint.beamHeightMm).toBeLessThan(0.2);
    // Without a transmitted chief there is no seed: a missed beam stays unavailable rather than invented.
    const offset = (_x: number, y: number): TraceRayClass => (Math.abs(y - 0.3) < 0.05 ? "valid" : "blocked");
    expect(findMtfFootprint(offset, 10, true)).toBeNull();
  });
});

describe("MTF refinement and focus", () => {
  // Prescribed successive curves isolate convergence from optical tracing and sampling.
  const refineCurves = (frequencies: readonly number[], previous: number[], current: number[]) => [
    ...refineMtfField(
      [16, 32],
      (size) => {
        const values = size === 16 ? previous : current;
        return { kind: "curves", field: { ...emptyMtfField(0), sagittal: values, tangential: values } };
      },
      frequencies,
    ),
  ];

  it.each([{ frequencies: [0, 100] }, { frequencies: [100] }])(
    "judges positive frequencies above the band for $frequencies lp/mm",
    ({ frequencies }) => {
      const field = refineCurves(
        frequencies,
        frequencies.map((f) => (f === 0 ? 1 : 0.1)),
        frequencies.map((f) => (f === 0 ? 1 : 0.9)),
      ).at(-1)!;
      expect(field.status).toBe("unconverged");
      expect(field.maxDelta).toBeCloseTo(0.8, 12);
      expect(field.convergedThroughLpMm).toBe(frequencies.includes(0) ? 0 : null);
    },
  );

  it("keeps DC-only requests converged after two successful grids", () => {
    const fields = refineCurves([0], [1], [1]);
    expect(fields[0].status).toBe("unconverged");
    expect(fields[1]).toMatchObject({ status: "converged", maxDelta: 0, convergedThroughLpMm: 0 });
  });

  it.each([1 / 128, 1 / 32])("preserves default-grid convergence for an in-band change of %j", (delta) => {
    const field = refineCurves(
      MTF_FREQUENCIES,
      MTF_FREQUENCIES.map((f) => (f === 0 ? 1 : 0.5)),
      MTF_FREQUENCIES.map((f) => (f === 0 ? 1 : 0.5 + (f <= 50 ? delta : 0.125))),
    ).at(-1)!;
    expect(field).toMatchObject({
      status: delta <= 0.01 ? "converged" : "unconverged",
      maxDelta: delta,
      convergedThroughLpMm: delta <= 0.01 ? 50 : 0,
    });
  });

  it.each([20, 100])("reports stability in frequency order when the first unstable frequency is %j", (unstable) => {
    const frequencies = [40, 0, 100, 20];
    const field = refineCurves(
      frequencies,
      frequencies.map((f) => (f === 0 ? 1 : 0.5)),
      frequencies.map((f) => (f === 0 ? 1 : 0.5 + (f >= unstable ? 0.125 : 1 / 128))),
    ).at(-1)!;
    expect(field.convergedThroughLpMm).toBe(unstable === 20 ? 0 : 40);
    expect(frequencies).toEqual([40, 0, 100, 20]);
  });

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
  it.each(["geometric", "diffraction"] as const)(
    "reports unresolved flux for %s and rejects it beyond the cap",
    (method) => {
      expect(assessUnresolvedFlux(0, 0, method)).toEqual({ acceptable: true, note: null });
      const qualification =
        method === "geometric" ? "MTF error ≤ 0.004" : "the diffraction estimate does not account for this flux";
      expect(assessUnresolvedFlux(3, 0.002, method)).toEqual({
        acceptable: true,
        note: `3 pupil samples that could not be aimed or traced (0.20% of flux) are omitted; ${qualification}.`,
      });
      expect(assessUnresolvedFlux(5, 0.002, method, 3)).toEqual({
        acceptable: true,
        note: `5 pupil samples could not be aimed or traced: 3 beside the transmitted beam carry 0.20% of flux and are omitted; ${qualification}. 2 touch no transmitted cell and are not counted.`,
      });
      expect(assessUnresolvedFlux(3, MTF_MAX_UNKNOWN_FLUX, method).acceptable).toBe(true);
      expect(assessUnresolvedFlux(40, MTF_MAX_UNKNOWN_FLUX * 1.01, method).acceptable).toBe(false);
    },
  );
  it("does not transfer the geometric omission bound to scalar pupil autocorrelation", () => {
    // Scalar pupil autocorrelation can exceed the geometric 2ε omission bound.
    const pupil = Array.from({ length: 16 }, () => Array<number>(16).fill(1));
    pupil[8][8] = -1;
    const autocorrelation = (rows: readonly (readonly number[])[]) => {
      let overlap = 0;
      let energy = 0;
      for (const row of rows)
        for (let column = 0; column < row.length; column++) {
          energy += row[column] ** 2;
          if (column + 1 < row.length) overlap += row[column] * row[column + 1];
        }
      return overlap / energy;
    };
    const full = autocorrelation(pupil);
    const fullFlattened = autocorrelation([pupil.flat()]);
    pupil[8][8] = 0;
    const omitted = autocorrelation(pupil);
    const omittedFlattened = autocorrelation([pupil.flat()]);
    const epsilon = 1 / 256;
    expect(full).toBeCloseTo(0.921875, 12);
    expect(omitted).toBeCloseTo(0.933333333333, 12);
    expect(fullFlattened).toBeCloseTo(0.98046875, 12);
    expect(omittedFlattened).toBeCloseTo(0.992156862745, 12);
    expect(epsilon).toBeLessThan(MTF_MAX_UNKNOWN_FLUX);
    expect(Math.abs(omitted - full)).toBeGreaterThan(2 * epsilon);
    expect(Math.abs(omittedFlattened - fullFlattened)).toBeGreaterThan(2 * epsilon);
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
    const offset = mtfImagePlaneOffset(probe, assessMtfSupport(...mtfInputs(probe, mtfTestOptions)))!.offsetMm;
    const state = prepareRuntimeState(buildRearPlateLens({ plates, gapBefore: 44 + offset + 1 }), 0, 0);
    expect(mtfNearestImagePlaneZ(state)).toBeCloseTo(state.imgZ - 0.02, 12);
    const result = computeMtf(...mtfInputs(state, { ...mtfTestOptions, focus: "best-axial", fieldFractions: [0, 1] }));
    expect(result.focus!.appliedShiftMm).toBeCloseTo(-0.02, 9);
    result.fields.forEach((field) => expect(field.reason).toBeNull());
  });
  it("moves every field to the axial best focus only when requested", () => {
    const state = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
    const options = { ...mtfTestOptions, fieldFractions: [0, 0.5], pupilSemiDiameterMm: 2, stopSemiDiameterMm: 2 };
    const design = computeMtf(...mtfInputs(state, options));
    const refocused = computeMtf(...mtfInputs(state, { ...options, focus: "best-axial" }));
    expect(design.focus).toMatchObject({ mode: "design", appliedShiftMm: 0 });
    expect(design.focus!.bestAxialShiftMm).not.toBe(0);
    expect(refocused.focus!.appliedShiftMm).toBe(refocused.focus!.bestAxialShiftMm);
    expect(refocused.fields[0].sagittal[1]).toBeGreaterThan(design.fields[0].sagittal[1]);
  });
  it("holds one explicit plane for every field while retaining the independent best-focus diagnostic", () => {
    const state = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
    const options = { ...mtfTestOptions, fieldFractions: [0, 0.5] };
    const design = computeMtf(...mtfInputs(state, options));
    const shift = 0.25;
    const held = computeMtf(...mtfInputs(state, { ...options, focus: "best-axial", heldFocusShiftMm: shift }));
    expect(held.focus).toMatchObject({
      requestedMode: "best-axial",
      mode: "held",
      appliedShiftMm: shift,
      bestAxialShiftMm: design.focus!.bestAxialShiftMm,
      designScore: design.focus!.designScore,
      bestScore: design.focus!.bestScore,
    });
    expect(Math.abs(held.focus!.bestAxialShiftMm! - shift)).toBeGreaterThan(0.1);
    for (const [i, field] of held.fields.entries()) {
      // Targets remain on the authored plane. Independent ray transfer and a direct Fourier sum
      // distinguish applying the held plane from merely labelling an independently refocused result.
      expect(field.targetImageHeightMm).toBe(design.fields[i].targetImageHeightMm);
      expect(field.fieldAngleDeg).toBe(design.fields[i].fieldAngleDeg);
      expect(field.reason).toBeNull();
      const bundle = traceMtfFieldPupil(state, options, held.support, field.fieldAngleDeg!, field.gridSize)!;
      for (const [axis, coordinate] of [
        ["sagittal", 0],
        ["tangential", 1],
      ] as const) {
        const points = bundle.rays.map((ray) => {
          const p = ray.trace.terminalPoint;
          const d = ray.trace.terminalDirection;
          return { x: p[coordinate] + ((state.imgZ + shift - p[2]) / d[2]) * d[coordinate], weight: ray.weight };
        });
        const flux = points.reduce((sum, p) => sum + p.weight, 0);
        held.frequenciesPerMm.forEach((frequency, j) => {
          const real = points.reduce((sum, p) => sum + p.weight * Math.cos(2 * Math.PI * frequency * p.x), 0);
          const imaginary = points.reduce((sum, p) => sum + p.weight * Math.sin(2 * Math.PI * frequency * p.x), 0);
          expect(field[axis][j]).toBeCloseTo(Math.hypot(real, imaginary) / flux, 10);
        });
      }
    }
    const heldDesign = computeMtf(...mtfInputs(state, { ...options, focus: "best-axial", heldFocusShiftMm: 0 }));
    expect(heldDesign.focus).toMatchObject({ mode: "held", appliedShiftMm: 0 });
    expect(heldDesign.fields).toEqual(design.fields);
  });
  it("refuses nonfinite held shifts and held planes ahead of the last surface", () => {
    const state = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
    for (const heldFocusShiftMm of [NaN, Infinity, -Infinity])
      expect(() => computeMtf(...mtfInputs(state, { ...mtfTestOptions, heldFocusShiftMm }))).toThrow(/must be finite/);
    const nearest = mtfNearestImagePlaneZ(state) - state.imgZ;
    expect(() => computeMtf(...mtfInputs(state, { ...mtfTestOptions, heldFocusShiftMm: nearest - 0.001 }))).toThrow(
      /in front of the last surface/,
    );
    expect(computeMtf(...mtfInputs(state, { ...mtfTestOptions, heldFocusShiftMm: nearest }))).toMatchObject({
      focus: { mode: "held", appliedShiftMm: nearest },
    });
  });
  it("refocuses automatically only when the authored plane contradicts the paraxial focus", () => {
    const base = buildSimplePositiveElementLens();
    const options = { ...mtfTestOptions, fieldFractions: [0], pupilSemiDiameterMm: 2, stopSemiDiameterMm: 2 };
    const state = prepareRuntimeState(base, 0, 0);
    // The fixture's 80 mm last gap sits far behind its own paraxial focus.
    const offset = mtfImagePlaneOffset(state, assessMtfSupport(...mtfInputs(state, options)))!;
    expect(offset.inconsistent).toBe(true);
    const auto = computeMtf(...mtfInputs(state, { ...options, focus: "auto" })).focus!;
    expect(auto).toMatchObject({ requestedMode: "auto", mode: "best-axial", imagePlaneInconsistent: true });
    expect(auto.appliedShiftMm).toBe(auto.bestAxialShiftMm);
    expect(auto.imagePlaneOffsetMm).toBeCloseTo(offset.offsetMm, 12);
    expect(computeMtf(...mtfInputs(state, { ...options, focus: "design" })).focus).toMatchObject({
      mode: "design",
      appliedShiftMm: 0,
      imagePlaneInconsistent: true,
    });
    const surfaces = constructionFixtureData(base).surfaces.map((s, i, all) =>
      i === all.length - 1 ? { ...s, d: s.d + offset.offsetMm } : s,
    );
    const focused = computeMtf(
      ...mtfInputs(prepareRuntimeState(build({ ...constructionFixtureData(base), surfaces }), 0, 0), {
        ...options,
        focus: "auto",
      }),
    );
    expect(focused.focus).toMatchObject({ mode: "design", appliedShiftMm: 0, imagePlaneInconsistent: false });
    expect(Math.abs(focused.focus!.imagePlaneOffsetMm!)).toBeLessThan(1e-9);
  });
});

describe("MTF axial vignetting", () => {
  const base = buildSimplePositiveElementLens();
  // The fixture's stop is its first surface, so the entrance pupil is the stop.
  const inputs = (lens: RuntimeLens, radius: number, extra = {}) =>
    mtfInputs(prepareRuntimeState(lens, 0, 0), {
      ...mtfTestOptions,
      pupilSemiDiameterMm: radius,
      stopSemiDiameterMm: radius,
      ...extra,
    });
  const mtfAt = (lens: RuntimeLens, radius: number, extra = {}) => computeMtf(...inputs(lens, radius, extra));
  it("is null when the iris limits the axial beam", () => {
    expect(mtfAt(base, 8).axialVignetting).toBeNull();
  });
  it("names the clear aperture that clips the axial marginal ray, as the Summary's working f-number does", () => {
    // The element rims (6 mm) are smaller than the iris (8 mm) in front of them, so the first rim clips the rim ray.
    const rimmed = build({
      ...constructionFixtureData(base),
      surfaces: constructionFixtureData(base).surfaces.map((surface) =>
        surface.label === "STO" ? surface : { ...surface, sd: 6 },
      ),
    });
    const result = mtfAt(rimmed, 8);
    expect(result.axialVignetting).toEqual({ surfaceLabel: "1", beforeStop: false });
    expect(result.workingFNumber).toBeNull();
    expect(computeWorkingFNumber(inputs(rimmed, 8)[0])).toEqual({
      status: "vignetted",
      surfaceLabel: "1",
      beforeStop: false,
    });
    expect(JSON.parse(JSON.stringify(result.axialVignetting))).toEqual(result.axialVignetting);
  });
  it("is null when the request is unsupported", () => {
    const result = mtfAt(base, 1, { movementActive: true });
    expect(result.axialVignetting).toBeNull();
    expect(result.workingFNumber).toBeNull();
    expect(result.conjugate).toBeNull();
    expect(result.magnification).toBeNull();
  });
});

describe("MTF data limitations", () => {
  const base = buildSimplePositiveElementLens();
  const state = prepareRuntimeState(base, 0, 0);
  const photopic = {
    preferredSpectrum: "photopic",
    spectrum: "photopic",
    referenceWavelengthNm: 560,
    result: null,
  } as const;
  const reference = {
    preferredSpectrum: "reference",
    spectrum: "reference",
    referenceWavelengthNm: LINE_NM.d,
  } as const;
  it.each([
    {
      kind: "asphere-coefficients",
      note: "No coefficients are published; the model traces a sphere.",
      blocking: true,
      description: "The source omits aspheric coefficients",
      consequence: "These curves describe the modeled stand-in, not the lens itself.",
    },
    {
      kind: "asphere-term",
      note: "A10 and A12 are blank; the model takes both terms as zero.",
      blocking: false,
      description: "The source leaves individual aspheric terms blank",
      consequence: "These curves rest on taking those terms as zero.",
    },
    {
      kind: "asphere-equation",
      note: "The model uses the sibling patent's documented equation.",
      blocking: false,
      description: "The source's aspheric equation is absent or ambiguous",
      consequence: "These curves rest on that documented interpretation.",
    },
  ] as const)(
    "grades a declared $kind omission and names its assumption",
    ({ kind, note, blocking, description, consequence }) => {
      const declared = build({
        ...constructionFixtureData(base),
        sourceOmissions: [
          {
            kind,
            surfaces: ["1", "2"],
            note,
          },
        ],
      });
      expect(assessMtfDataLimitations(prepareRuntimeState(declared, 0, 0), { ...reference, result: null })).toEqual([
        {
          kind: "incomplete-prescription",
          blocking,
          text: `${description} for surfaces 1, 2: ${note} ${consequence}`,
        },
      ]);
    },
  );
  it("does not infer omissions from spherical terms", () => {
    expect(assessMtfDataLimitations(state, { ...reference, result: null })).toEqual([]);
  });
  it.each([false, true])("combines omissions in one entry with stand-in blocking=%s", (blocking) => {
    const sourceOmissions: SourceOmission[] = [
      { kind: "asphere-term", surfaces: ["1"], note: "A10 is blank and taken as zero." },
      { kind: "asphere-equation", surfaces: ["2"], note: "The sibling patent supplies the interpreted equation." },
    ];
    if (blocking)
      sourceOmissions.push({ kind: "asphere-coefficients", surfaces: ["2"], note: "A spherical stand-in is traced." });
    const lens = build({ ...constructionFixtureData(base), sourceOmissions });
    const notes = assessMtfDataLimitations(prepareRuntimeState(lens, 0, 0), { ...reference, result: null });
    expect(notes).toEqual([{ kind: "incomplete-prescription", blocking, text: expect.any(String) }]);
    for (const omission of sourceOmissions)
      expect(notes[0].text).toContain(`surface ${omission.surfaces[0]}: ${omission.note}`);
    expect(notes[0].text).toContain("These curves rest on taking those terms as zero.");
    expect(notes[0].text).toContain("These curves rest on that documented interpretation.");
    expect(notes[0].text.includes("These curves describe the modeled stand-in, not the lens itself.")).toBe(blocking);
  });
  it.each([undefined, "source-table", "figure-measured", "heuristic"] as const)(
    "qualifies clear apertures only when their declared source is %s",
    (sdSource) => {
      const lens = build({ ...constructionFixtureData(base), sdSource });
      const notes = assessMtfDataLimitations(prepareRuntimeState(lens, 0, 0), { ...reference, result: null });
      if (sdSource === undefined || sdSource === "source-table") expect(notes).toEqual([]);
      else {
        expect(notes).toEqual([{ kind: "estimated-apertures", blocking: false, text: expect.any(String) }]);
        expect(notes[0].text).toContain(
          sdSource === "heuristic" ? "estimated or reconstructed" : "measurement uncertainty",
        );
      }
    },
  );
  it("carries converter omissions and aperture uncertainty into the single system warning", () => {
    const host = teleconverterHostData();
    const converter = teleconverterFixture();
    const lens = build(
      attachTeleconverter(
        { ...host, sdSource: "source-table" },
        {
          ...converter,
          sdSource: "heuristic",
          sourceOmissions: [
            {
              kind: "asphere-coefficients",
              surfaces: [converter.surfaces[0].label],
              note: "A spherical stand-in is traced.",
            },
          ],
        },
      ),
    );
    const notes = assessMtfDataLimitations(prepareRuntimeState(lens, 0, 0), { ...reference, result: null });
    expect(notes.map(({ kind, blocking }) => [kind, blocking])).toEqual([
      ["incomplete-prescription", true],
      ["estimated-apertures", false],
    ]);
    expect(notes[0].text).toContain(`surface ${lens.attachedTeleconverter!.firstSurfaceLabel}:`);
  });
  it.each([
    [undefined, undefined, undefined],
    ["source-table", undefined, undefined],
    ["source-table", "source-table", "source-table"],
    ["figure-measured", "source-table", "figure-measured"],
    [undefined, "figure-measured", "figure-measured"],
    ["heuristic", "figure-measured", "heuristic"],
    ["figure-measured", "heuristic", "heuristic"],
  ] as const)("combines aperture provenance %s / %s as %s", (hostSource, converterSource, expected) => {
    const lens = build(
      attachTeleconverter(
        { ...teleconverterHostData(), sdSource: hostSource },
        { ...teleconverterFixture(), sdSource: converterSource },
      ),
    );
    expect(lens.source.source.sdSource).toBe(expected);
  });
  it("ties glass gaps to the charted spectrum and names the estimated glasses", () => {
    // An nd/νd-only glass is a gap in a spectral chart, not in a single-wavelength chart the reader asked for.
    const [estimated] = assessMtfDataLimitations(state, photopic);
    expect(estimated.kind).toBe("estimated-dispersion");
    expect(estimated.text).toContain("Every glass is known only by nd and νd");
    expect(assessMtfDataLimitations(state, { ...reference, result: null })).toEqual([]);
    // A glass that blocks spectral sampling leaves the reference line alone on the chart.
    const noAbbe = build({
      ...constructionFixtureData(base),
      elements: base.elements.map((e) => ({ ...e, vd: undefined })),
    });
    const [fallback] = assessMtfDataLimitations(prepareRuntimeState(noAbbe, 0, 0), {
      ...reference,
      preferredSpectrum: "photopic",
      result: null,
    });
    expect(fallback.kind).toBe("reference-only");
    expect(fallback.text).toContain("a glass has no Abbe number. The chart shows the 587.6 nm reference wavelength");
    // An estimated rear plate is not a gap; an estimated converter glass is named as the converter's.
    const resolved = buildChromaticPositiveElementLens();
    const plated = build({
      ...constructionFixtureData(resolved),
      rearPlates: [{ ...REAR_PLATE_FIXTURE, glass: undefined }],
    });
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
      assessMtfDataLimitations(target, {
        ...reference,
        result: computeMtf(...mtfInputs(target, { ...options, focus })),
      });
    // The fixture's image plane contradicts its paraxial focus: a gap unless best axial focus was requested.
    expect(gaps(state, "best-axial")).toEqual([]);
    expect(gaps(state, "auto")[0].text).toContain("refocused to best axial focus");
    expect(gaps(state, "design")[0]).toMatchObject({ kind: "image-plane" });
    expect(gaps(state, "design")[0].text).toContain("out of focus");
    // Format heights beyond the modeled edge are counted, and a rescaled prescription is flagged.
    const edge = computeMtf(...mtfInputs(state, options)).geometry!.modeledEdgeHeightMm;
    const wide = build({
      ...constructionFixtureData(base),
      imageCircleMm: 3 * edge,
      focalLengthDesign: 50,
      focalLengthMarketing: 58,
    });
    const [field, scale] = gaps(prepareRuntimeState(wide, 0, 0), "best-axial");
    expect(field.kind).toBe("short-field");
    expect(field.text).toContain("1 of 2 field positions lies beyond it and is not charted");
    expect(scale.kind).toBe("scale");
    expect(scale.text).toContain("differs from the marketed 58 mm by 14%");
  });
  it.each([
    { edge: 9.606291, uncharted: 1 },
    { edge: 10, uncharted: 0 },
    { edge: 10 - 5e-9, uncharted: 0 },
    { edge: 10 - 5e-8, uncharted: 1 },
  ])(
    "assesses ordinary field coverage from geometry when results restrict fields (edge $edge)",
    ({ edge, uncharted }) => {
      // Coverage follows the ordinary chart's reference grid, even when a sweep traces only inner fields.
      const result = computeMtf(...mtfInputs(state, { ...mtfTestOptions, focus: "best-axial", fieldFractions: [0] }));
      const geometry = {
        ...result.geometry!,
        referenceHeightMm: 10,
        modeledEdgeHeightMm: edge,
        basis: "format-corner" as const,
      };
      const fieldFractions = Array.from({ length: 11 }, (_, i) => i / 10);
      const restricted = { ...result, geometry };
      const notes = assessMtfDataLimitations(state, { ...reference, result: restricted, fieldFractions });
      if (uncharted) {
        expect(notes).toMatchObject([{ kind: "short-field", blocking: true }]);
        expect(notes[0].text).toContain("1 of 11 field positions lies beyond it and is not charted");
        const ordinary = {
          ...result,
          geometry,
          fields: fieldFractions.map((fieldFraction) => ({
            ...result.fields[0],
            fieldFraction,
            ...(fieldFraction === 1 ? { reason: "outside-modeled-field" as const } : {}),
          })),
        };
        expect(notes).toEqual(assessMtfDataLimitations(state, { ...reference, result: ordinary }));
      } else expect(notes).toEqual([]);
    },
  );
  it.each(["auto", "design", "best-axial"] as const)(
    "does not claim a shifted held plane is authored or best axial with a %s request",
    (focus) => {
      // A held override can coincide with best focus or select another plane, independently of the requested policy.
      const options = { ...mtfTestOptions, pupilSemiDiameterMm: 0.1, stopSemiDiameterMm: 0.1 };
      const best = computeMtf(...mtfInputs(state, { ...options, focus: "best-axial" })).focus!;
      expect(best.imagePlaneInconsistent).toBe(true);
      expect(Math.abs(best.appliedShiftMm)).toBeGreaterThan(1);
      for (const heldFocusShiftMm of [best.appliedShiftMm, best.appliedShiftMm / 2]) {
        const result = computeMtf(...mtfInputs(state, { ...options, focus, heldFocusShiftMm }));
        expect(result.focus).toMatchObject({ requestedMode: focus, mode: "held", appliedShiftMm: heldFocusShiftMm });
        expect(assessMtfDataLimitations(state, { ...reference, result })).toEqual([]);
      }
    },
  );
  it.each(["auto", "design", "best-axial"] as const)(
    "warns when a held plane is the inconsistent authored plane with a %s request",
    (focus) => {
      const result = computeMtf(...mtfInputs(state, { ...mtfTestOptions, focus, heldFocusShiftMm: 0 }));
      expect(result.focus).toMatchObject({ mode: "held", appliedShiftMm: 0, imagePlaneInconsistent: true });
      const [note] = assessMtfDataLimitations(state, { ...reference, result });
      expect(note).toMatchObject({ kind: "image-plane", blocking: true });
      expect(note.text).toContain("These curves are taken at the authored plane and are out of focus.");
    },
  );
  it("compares the charted zoom endpoint for scale notes and the extreme-scale guard", () => {
    // Hold the traced geometry fixed while varying only the metadata the scale checks compare.
    const zoom = buildVariableStopGapLens([
      [1, 1],
      [1, 1],
      [1, 1],
    ]);
    for (const [design, marketing, warned, rejected] of [
      [
        [50, 70],
        [50, 100],
        [false, true],
        [false, false],
      ],
      [
        [35, 100],
        [50, 100],
        [true, false],
        [false, false],
      ],
      [
        [20, 100],
        [50, 100],
        [true, false],
        [true, false],
      ],
      [
        [50, 250],
        [50, 100],
        [false, true],
        [false, true],
      ],
    ] as const) {
      for (const zoomT of [0, 0.5, 0.5001, 1]) {
        const prepared = prepareRuntimeState(zoom, 0, zoomT);
        const target: typeof prepared = {
          ...prepared,
          lens: {
            ...prepared.lens,
            source: {
              ...prepared.lens.source,
              catalog: {
                ...prepared.lens.source.catalog,
                focalLengthMm: { design: [...design], marketing: [...marketing] },
              },
            },
          },
        };
        const endpoint = zoomT <= 0.5 ? 0 : 1;
        const notes = assessMtfDataLimitations(target, { ...reference, result: null });
        const scale = notes.find((note) => note.kind === "scale");
        expect(!!scale).toBe(warned[endpoint]);
        if (scale) {
          expect(scale.blocking).toBe(true);
          expect(scale.text).toContain(`(${design[endpoint].toFixed(1)} mm)`);
          expect(scale.text).toContain(`marketed ${marketing[endpoint]} mm`);
        }
        const support = assessMtfSupport(...mtfInputs(target, mtfTestOptions));
        expect(support.available).toBe(!rejected[endpoint]);
        if (rejected[endpoint]) expect(support.reason).toBe("unverified-scale");
        else {
          const note = support.limitations.find((text) => text.includes("prescription focal length"));
          expect(!!note).toBe(warned[endpoint]);
          if (note) {
            expect(note).toContain(`(${design[endpoint].toFixed(1)} mm)`);
            expect(note).toContain(`marketed ${marketing[endpoint]} mm`);
          }
        }
      }
    }
  });
  it("uses the nearest listed focal-length pair, with midpoint ties going wider", () => {
    // Longer lists represent evenly spaced authored stations, never interpolated marketed values.
    const source = { focalLengthDesign: [50, 70, 100], focalLengthMarketing: [50, 100, 100] };
    for (const [zoomT, designMm, marketingMm] of [
      [0, 50, 50],
      [0.25, 50, 50],
      [0.2501, 70, 100],
      [0.5, 70, 100],
      [0.75, 70, 100],
      [0.7501, 100, 100],
      [1, 100, 100],
    ]) {
      expect(mtfPrescriptionScale(source, zoomT)).toMatchObject({ designMm, marketingMm });
    }
    for (const zoomT of [0, 0.5, 1]) {
      expect(mtfPrescriptionScale({ focalLengthDesign: 50, focalLengthMarketing: 100 }, zoomT)).toEqual({
        designMm: 50,
        marketingMm: 100,
        fraction: 0.5,
      });
      expect(mtfPrescriptionScale({ focalLengthDesign: 50 }, zoomT)).toBeNull();
    }
  });
  it("discloses authored source errata as notes that never block the chart", () => {
    // A corrected printed value and an unresolved contradiction each give one note; gaps stay blocking.
    const front = constructionFixtureData(base).surfaces.find((surface) => surface.label === "1")!;
    const noted = build({
      ...constructionFixtureData(base),
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

describe("cooperative MTF steps", () => {
  it.each([
    ["geometric", "reference"],
    ["diffraction", "reference"],
    ["geometric", "photopic"],
    ["diffraction", "photopic"],
  ] as const)("returns exactly the synchronous %s / %s result", (method, spectrum) => {
    const lens = buildChromaticPositiveElementLens();
    const state = prepareRuntimeState(lens, 0, 0);
    const options = { ...mtfTestOptions, method, spectrum, fieldFractions: [0, 0.5] };
    const expected = computeMtf(...mtfInputs(state, options));
    const steps = computeMtfSteps(...mtfInputs(state, options));
    const phases = [];
    let next = steps.next();
    while (!next.done) {
      const progress = next.value;
      phases.push(progress.phase);
      if (progress.result) {
        expect(progress.result.focus).not.toBeNull();
        for (const field of progress.result.fields)
          expect(field.sagittal.length).toBe(field.status === "pending" ? 0 : expected.frequenciesPerMm.length);
      } else {
        expect(Object.keys(progress)).toEqual(["phase"]);
      }
      next = steps.next();
    }
    expect(next.value).toStrictEqual(expected);
    const lineCount = spectrum === "photopic" ? 9 : 1;
    expect(phases.filter((phase) => phase.kind === "focus").map((phase) => phase.lineIndex)).toEqual(
      Array.from({ length: lineCount + 1 }, (_, index) => index),
    );
    expect(phases.slice(0, 2)).toEqual([{ kind: "geometry" }, { kind: "geometry" }]);
    expect(phases).toContainEqual({
      kind: "field",
      fieldIndex: 1,
      fieldCount: 2,
      gridSize: 16,
      lineIndex: 1,
      lineCount,
    });
    expect(phases).toContainEqual({
      kind: "field",
      fieldIndex: 2,
      fieldCount: 2,
      gridSize: 32,
      lineIndex: lineCount,
      lineCount,
    });
  });
});
