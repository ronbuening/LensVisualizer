import { describe, expect, it } from "vitest";
import { build, buildSimplePositiveElementLens, buildVariableStopGapLens } from "./testLensFixtures.js";
import { prepareRuntimeState } from "../../../src/optics/compat.js";
import { assessMtfSupport } from "../../../src/optics/analysis/mtfSupport.js";
import { mtfFiniteObjectPoint } from "../../../src/optics/analysis/mtfConjugates.js";
import { traceMtfPupil } from "../../../src/optics/analysis/mtfTracing.js";
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
  it("uses a common point source and reproduces paraxial focus and magnification", () => {
    const support = assessMtfSupport(state, options);
    const bundle = traceMtfPupil(state, options, support, 0, 32)!;
    expect(bundle).not.toBeNull();
    for (const ray of bundle.rays) {
      const { origin, direction } = ray.trace.input;
      const distance = (origin[2] - bundle.objectPoint![2]) / direction[2];
      expect(origin[0] - distance * direction[0]).toBeCloseTo(bundle.objectPoint![0], 10);
      expect(origin[1] - distance * direction[1]).toBeCloseTo(bundle.objectPoint![1], 10);
      expect(Math.hypot(ray.x, ray.y)).toBeLessThan(0.00001);
    }
    const offAxis = traceMtfPupil(state, options, support, 0.001, 32)!;
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
    const finite = traceMtfPupil(finiteState, options, assessMtfSupport(finiteState, options), 0.01, 32)!;
    const infinite = traceMtfPupil(infiniteState, options, assessMtfSupport(infiniteState, options), 0.01, 32)!;
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
    const bundle = traceMtfPupil(state, options, assessMtfSupport(state, options), 0, 32)!;
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
