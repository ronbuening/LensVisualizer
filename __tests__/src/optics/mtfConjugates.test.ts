import { deriveSourceDistance } from "../../../src/optics/analysis/sourceStateAudit.js";
import { mtfImagePlaneOffset } from "../../../src/optics/analysis/mtfFocus.js";
import { prepareSourceFieldLaunch, sourceLaunchRay } from "../../../src/optics/field/sourceLaunch.js";
import { traceEngineRay2 } from "../../../src/optics/trace/rayAdapters.js";
import { describe, expect, it } from "vitest";
import { build, buildSimplePositiveElementLens, buildVariableStopGapLens } from "./testLensFixtures.js";
import { prepareRuntimeState } from "../../../src/optics/compat.js";
import { assessMtfSupport } from "../../../src/optics/analysis/mtfSupport.js";
import { mtfFiniteObjectPoint } from "../../../src/optics/analysis/mtfConjugates.js";
import { traceMtfFieldPupil } from "../../../src/optics/analysis/mtfTracing.js";
import { computeMtf } from "../../../src/optics/mtf.js";
import { sampleReferenceWavefront } from "../../../src/optics/analysis/mtfWavefront.js";
import type { MtfOptions } from "../../../src/types/mtf.js";
import type { FiniteConjugate } from "../../../src/types/optics.js";

const options: MtfOptions = {
  method: "diffraction",
  spectrum: "reference",
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
function atRear(y: number, u: number) {
  y += u;
  u = (u - (y * (1.5168 - 1)) / 50) / 1.5168;
  y += 5 * u;
  u = 1.5168 * u - (y * (1 - 1.5168)) / -50;
  return { y, u };
}

describe("documented finite MTF", () => {
  const base = buildSimplePositiveElementLens();
  const axial = atRear(1, 1 / conjugate.objectDistanceMm);
  const imageGap = -axial.y / axial.u;
  const L = build({
    ...base.data,
    surfaces: base.data.surfaces.map((s, i) => (i === 2 ? { ...s, d: imageGap } : s)),
    finiteConjugates: [conjugate],
  });
  const state = prepareRuntimeState(L, 1, 0);
  it("derives fixed finite distance independently of declarations and verifies exact rays and published magnification", () => {
    const report = deriveSourceDistance(prepareRuntimeState(build({ ...L.data, finiteConjugates: undefined }), 0, 0));
    expect(report.status).toBe("consistent");
    expect(report.derived!.firstSurfaceDistanceMm).toBeCloseTo(1000, 7);
    expect(report.derived!.imagePlaneDistanceMm).toBeCloseTo(1000 + state.imgZ, 7);
    const parallel = atRear(1, 0);
    const magnification = parallel.y + imageGap * parallel.u;
    expect(report.derived!.magnification).toBeCloseTo(magnification, 12);
    for (const sample of report.exactSamples) {
      expect(sample.exactDistanceMm!).toBeCloseTo(1000, 1);
      expect(sample.exactMagnification!).toBeCloseTo(magnification, 6);
      expect(Math.abs(sample.axialResidualMm!)).toBeLessThan(1e-7);
    }
    for (const distanceReference of ["first-surface", "image-plane"] as const) {
      const checked = deriveSourceDistance(state, {
        publishedDistance: {
          distanceReference,
          objectDistanceMm: 1000 + (distanceReference === "image-plane" ? state.imgZ : 0),
        },
        publishedMagnification: Math.abs(magnification),
      });
      expect(checked.status).toBe("consistent");
      expect(checked.publishedChecks).toHaveLength(2);
    }
    expect(L.data.finiteConjugates).toEqual([conjugate]);
    expect(report.qualification).toContain("does not certify");
  });
  it("retains rounded authored geometry and detects failed independent exact-ray checks", () => {
    const rounded = build({
      ...L.data,
      surfaces: L.data.surfaces.map((s, i) => (i === 2 ? { ...s, d: Number(imageGap.toFixed(3)) } : s)),
    });
    const checked = deriveSourceDistance(prepareRuntimeState(rounded, 0, 0), {
      publishedDistance: { distanceReference: "first-surface", objectDistanceMm: 1000 },
    });
    expect(checked.status).toBe("consistent");
    expect(checked.publishedChecks[0].relativeError).toBeGreaterThan(0);
    expect(rounded.data.surfaces[2].d).toBe(Number(imageGap.toFixed(3)));
    const clipped = { ...state, surfaces: state.surfaces.map((s) => ({ ...s, sd: 1e-8 })) };
    const failed = deriveSourceDistance(clipped);
    expect(failed.status).toBe("inconsistent");
    expect(failed.exactSamples.every((s) => s.exactDistanceMm === null)).toBe(true);
  });
  it("separates rounded evidence, inconsistent evidence, and failure to establish a finite source", () => {
    expect(
      deriveSourceDistance(state, { publishedDistance: { distanceReference: "first-surface", objectDistanceMm: 1004 } })
        .status,
    ).toBe("consistent");
    const inconsistent = deriveSourceDistance(state, { publishedMagnification: 0.5 });
    expect(inconsistent.status).toBe("inconsistent");
    expect(inconsistent.blockers.join(" ")).toContain("Published magnification");
    expect(deriveSourceDistance(state, { publishedRelativeTolerance: NaN }).status).toBe("unavailable");
    const axialInfinity = atRear(1, 0);
    const infinity = build({
      ...base.data,
      surfaces: base.data.surfaces.map((s, i) => (i === 2 ? { ...s, d: -axialInfinity.y / axialInfinity.u } : s)),
    });
    const report = deriveSourceDistance(prepareRuntimeState(infinity, 0, 0));
    expect(report.status).toBe("unavailable");
    expect(report.derived).toBeUndefined();
    expect(report.blockers.join(" ")).toContain("No finite real object");
    expect(deriveSourceDistance({ ...state, aberrationT: 0.1 }).status).toBe("unavailable");
    expect(deriveSourceDistance({ ...state, imgZ: state.surfaces.at(-1)!.z - 1 }).status).toBe("unavailable");
  });
  it("traces a fixed finite source at coordinate zero and skips infinity diagnostics", () => {
    const fixed = build({
      ...L.data,
      finiteConjugates: undefined,
      sourceStates: [
        {
          id: "fixed",
          label: "Fixed conjugate",
          source: conjugate.source,
          focusT: 0,
          zoomT: 0,
          conjugate: {
            kind: "finite",
            objectDistanceMm: conjugate.objectDistanceMm,
            distanceReference: conjugate.distanceReference,
            distanceProvenance: "published",
          },
        },
      ],
    });
    const fixedState = prepareRuntimeState(fixed, 0, 0);
    const support = assessMtfSupport(fixedState, options);
    expect(support.available).toBe(true);
    expect(support.conjugate?.objectDistanceMm).toBe(conjugate.objectDistanceMm);
    expect(mtfImagePlaneOffset(fixedState, support)).toBeNull();
    expect(computeMtf(fixedState, options).fields).toEqual(computeMtf(state, options).fields);
    expect(assessMtfSupport({ ...fixedState, aberrationT: 0.1 }, options).reason).toBe("finite-conjugate-unavailable");
    expect(assessMtfSupport(fixedState, { ...options, movementActive: true }).reason).toBe("active-movement");
  });
  it("accepts explicit infinity at a nonzero authored coordinate", () => {
    const infinite = build({
      ...base.data,
      sourceStates: [
        {
          id: "infinity",
          label: "Infinity",
          source: "Synthetic fixed geometry",
          focusT: 1,
          zoomT: 0,
          conjugate: { kind: "infinity" },
        },
      ],
    });
    const explicit = prepareRuntimeState(infinite, 1, 0);
    expect(assessMtfSupport(explicit, options).available).toBe(true);
    expect(assessMtfSupport(explicit, options).conjugate).toBeUndefined();
    expect(computeMtf(explicit, options).fields).toEqual(
      computeMtf(prepareRuntimeState(infinite, 0, 0), options).fields,
    );
  });
  it("aims the shared finite-source chief at the physical stop", () => {
    const launch = prepareSourceFieldLaunch(state, 0.1, options.pupilSemiDiameterMm, conjugate)!;
    expect(launch).not.toBeNull();
    const chief = traceEngineRay2(state, sourceLaunchRay(launch, 0, 0), {
      stopAt: state.lens.stop.surfaceIndex + 1,
      checkSemiDiameter: false,
      directionNormalized: true,
    });
    expect(chief.status).toBe("ok");
    expect(chief.terminalPoint[1]).toBeCloseTo(0, 8);
    expect(
      prepareSourceFieldLaunch(state, 0, 1, {
        ...conjugate,
        objectDistanceMm: 1,
        distanceReference: "image-plane",
      }),
    ).toBeNull();
  });
  it("uses a common point source and reproduces paraxial focus and magnification", () => {
    const support = assessMtfSupport(state, options);
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
    const result = computeMtf(state, options).fields[0];
    expect(result.status).toBe("converged");
    expect(result.sagittal[0]).toBeCloseTo(1, 12);
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
      expect(assessMtfSupport(prepareRuntimeState(L, focus, zoom), options).reason).toBe(
        "finite-conjugate-unavailable",
      );
    }
    expect(assessMtfSupport({ ...state, aberrationT: 0.5 }, options).reason).toBe("finite-conjugate-unavailable");
    expect(
      assessMtfSupport({ ...state, imagePlane: { ...state.imagePlane, normal: [0, 0.1, 1] } }, options).reason,
    ).toBe("unsupported-path");
  });
  it("approaches the infinity bundle at large object distance", () => {
    const far = build({ ...base.data, finiteConjugates: [{ ...conjugate, objectDistanceMm: 1e9 }] });
    const finiteState = prepareRuntimeState(far, 1, 0),
      infiniteState = prepareRuntimeState(far, 0, 0);
    const angle = 0.01 * far.halfField;
    const finite = traceMtfFieldPupil(finiteState, options, assessMtfSupport(finiteState, options), angle, 32)!;
    const infinite = traceMtfFieldPupil(infiniteState, options, assessMtfSupport(infiniteState, options), angle, 32)!;
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
    const lens = build({ ...zoom.data, finiteConjugates: [{ ...conjugate, zoomT: 0.5 }] });
    const documented = prepareRuntimeState(lens, 1, 0.5);
    expect(documented.surfaces[0].d).toBe(2.5);
    expect(assessMtfSupport(documented, options).available).toBe(true);
    expect(assessMtfSupport(prepareRuntimeState(lens, 1, 0.49), options).reason).toBe("finite-conjugate-unavailable");
  });
  it("keeps spherical launch phase invariant when moving the input plane along a ray", () => {
    const bundle = traceMtfFieldPupil(state, options, assessMtfSupport(state, options), 0, 32)!;
    const ray = bundle.rays[0].trace;
    const image = [0, 0, state.imgZ] as const;
    const before = sampleReferenceWavefront(ray, image, imageGap, bundle.objectPoint)!;
    const moved = {
      ...ray,
      opticalPathLengthMm: ray.opticalPathLengthMm! - 1,
      input: {
        ...ray.input,
        origin: ray.input.origin.map((v, i) => v + ray.input.direction[i]) as [number, number, number],
      },
    };
    expect(sampleReferenceWavefront(moved, image, imageGap, bundle.objectPoint)!.opticalPathMm).toBeCloseTo(
      before.opticalPathMm,
      10,
    );
  });
});
