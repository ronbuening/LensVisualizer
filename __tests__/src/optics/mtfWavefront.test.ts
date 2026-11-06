import { constructionFixtureData } from "./constructionFixtures.js";
import { describe, expect, it } from "vitest";
import { build, buildSimplePositiveElementLens, mtfInputs } from "./testLensFixtures.js";
import { prepareRuntimeState } from "../../../src/optics/state/runtimeAdapters.js";
import { traceEngineRay } from "../../../src/optics/trace/rayAdapters.js";
import {
  launchPhaseMm,
  mtfWaveLattice,
  rayOpticalPathToImageMm,
} from "../../../src/optics/analysis/mtf/mtfWavefront.js";
import { assessMtfSupport } from "../../../src/optics/analysis/mtf/mtfSupport.js";
import { traceMtfFieldPupil } from "../../../src/optics/analysis/mtf/mtfTracing.js";
import type { MtfOptions } from "../../../src/types/mtf.js";
import type { Ray3 } from "../../../src/optics/types.js";

describe("sequential optical path capture", () => {
  const base = buildSimplePositiveElementLens();
  const plate = build({
    ...constructionFixtureData(base),
    elements: [...base.elements, { ...base.elements[0], id: 2 }],
    surfaces: [
      { label: "STO", R: 1e15, d: 2, nd: 1, sd: 10, elemId: 0 },
      { label: "1", R: 1e15, d: 5, nd: 1.5168, sd: 10, elemId: 1 },
      { label: "2", R: 1e15, d: 20, nd: 1, sd: 10, elemId: 0 },
      { label: "3", R: 50, d: 5, nd: 1.5168, sd: 10, elemId: 2 },
      { label: "4", R: -50, d: 50, nd: 1, sd: 10, elemId: 0 },
    ],
  });
  const state = prepareRuntimeState(plate, 0, 0);
  it("accumulates path in the incident medium and leaves ordinary trace results unchanged", () => {
    const input: Ray3 = { origin: [0, 0, -10], direction: [0, 0, 1] };
    const plain = traceEngineRay(state, input, { stopAt: 3 });
    const captured = traceEngineRay(state, input, { stopAt: 3, recordOpticalPath: true });
    expect(captured.opticalPathLengthMm).toBeCloseTo(12 + 5 * 1.5168, 12);
    const { opticalPathLengthMm: _path, ...unchanged } = captured;
    expect(unchanged).toEqual(plain);
    expect(
      traceEngineRay(state, input, { stopAt: 3, recordOpticalPath: true, indexAtSurface: (i) => (i === 1 ? 1.6 : 1) })
        .opticalPathLengthMm,
    ).toBeCloseTo(20, 12);
  });
  it("preserves reference phase when the input plane moves along the incident wave", () => {
    const values = [-10, -100].map((z) => {
      const trace = traceEngineRay(
        state,
        { origin: [0, 0, z], direction: [0, 0, 1] },
        { stopAt: 3, recordOpticalPath: true },
      );
      return rayOpticalPathToImageMm(trace, [0, 0, 27])!;
    });
    expect(values[0]).toBeCloseTo(values[1], 11);
  });
  it("uses the actual path of oblique rays, not axial thickness", () => {
    const direction = [0.1, 0, Math.sqrt(0.99)] as const;
    const trace = traceEngineRay(state, { origin: [0, 0, -10], direction }, { stopAt: 3, recordOpticalPath: true });
    const expected = 12 / direction[2] + (5 * 1.5168) / Math.sqrt(1 - (0.1 / 1.5168) ** 2);
    expect(trace.opticalPathLengthMm).toBeCloseTo(expected, 10);
    expect(launchPhaseMm(trace)).toBeCloseTo(-10 * direction[2], 12);
  });
  it("rejects rays without captured phase and accounts for a finite source", () => {
    const trace = traceEngineRay(state, { origin: [0, 0, -10], direction: [0, 0, 1] });
    expect(rayOpticalPathToImageMm(trace, [0, 0, 27])).toBeNull();
    expect(launchPhaseMm(trace, [0, 0, -100])).toBe(90);
  });
});

describe("curved MTF wavefront reference", () => {
  it.each([undefined, true] as const)(
    "uses the chief's surface sag at each translated vertex (cylinder: %s)",
    (cylindrical) => {
      const lens = build({
        ...constructionFixtureData(buildSimplePositiveElementLens()),
        imageSurface: { R: -70, sd: 15, cylindrical },
        ...(cylindrical ? { imageFormat: "1-inch-type" } : {}),
      });
      const state = prepareRuntimeState(lens, 0, 0);
      const options: MtfOptions = {
        method: "geometric",
        spectrum: "reference",
        focus: "design",
        pupilSemiDiameterMm: 1,
        stopSemiDiameterMm: 1,
        fieldFractions: [0.5],
        frequenciesPerMm: [0, 20],
        maxGridSize: 32,
      };
      const support = assessMtfSupport(...mtfInputs(state, options));
      for (const shift of [0, 0.2]) {
        const vertexZ = state.imgZ + shift;
        const bundle = traceMtfFieldPupil(state, options, support, 5, 16, support.spectralLines[0], vertexZ, true)!;
        const reference = bundle.chief;
        /* The chief is in image coordinates; the wavefront reference is the point on the surface. */
        const [x, y] = lens.imageSurface!.fromImageCoordinates(reference.x, reference.y);
        const sag = lens.imageSurface!.sagAt(x, y);
        expect(Math.abs(sag)).toBeGreaterThan(0.01);
        const wave = mtfWaveLattice(bundle, reference, vertexZ)!;
        const paths = bundle.rays.map((ray) => rayOpticalPathToImageMm(ray.trace, [x, y, vertexZ + sag]));
        bundle.rays.forEach((ray, i) => {
          expect(wave.pathMm[ray.row * bundle.columns + ray.column]).toBeCloseTo(paths[i]! - paths[0]!, 12);
        });
        const { imageSurface: _shape, ...flatBundle } = bundle;
        const flat = mtfWaveLattice(flatBundle, reference, vertexZ)!;
        expect(Math.max(...wave.pathMm.map((path, i) => Math.abs(path - flat.pathMm[i])))).toBeGreaterThan(1e-7);
      }
    },
  );
});
