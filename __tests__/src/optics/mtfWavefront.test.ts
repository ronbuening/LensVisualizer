import { describe, expect, it } from "vitest";
import { build, buildSimplePositiveElementLens } from "./testLensFixtures.js";
import { prepareRuntimeState } from "../../../src/optics/compat.js";
import { traceEngineRay2 } from "../../../src/optics/trace/rayAdapters.js";
import { launchPhaseMm, sampleReferenceWavefront } from "../../../src/optics/analysis/mtfWavefront.js";
import type { Ray3 } from "../../../src/optics/types.js";

describe("sequential optical path capture", () => {
  const base = buildSimplePositiveElementLens();
  const plate = build({
    ...base.data,
    elements: [...base.elements, { ...base.elements[0], id: 2 }],
    surfaces: [
      { label: "STO", R: 1e15, d: 2, nd: 1, sd: 10, elemId: 0 },
      { label: "1", R: 1e15, d: 5, nd: 1.5168, sd: 10, elemId: 1 },
      { label: "2", R: 1e15, d: 20, nd: 1, sd: 10, elemId: 1 },
      { label: "3", R: 50, d: 5, nd: 1.5168, sd: 10, elemId: 2 },
      { label: "4", R: -50, d: 50, nd: 1, sd: 10, elemId: 2 },
    ],
  });
  const state = prepareRuntimeState(plate, 0, 0);
  it("accumulates path in the incident medium and leaves ordinary trace results unchanged", () => {
    const input: Ray3 = { origin: [0, 0, -10], direction: [0, 0, 1] };
    const plain = traceEngineRay2(state, input, { stopAt: 3 });
    const captured = traceEngineRay2(state, input, { stopAt: 3, recordOpticalPath: true });
    expect(captured.opticalPathLengthMm).toBeCloseTo(12 + 5 * 1.5168, 12);
    const { opticalPathLengthMm: _path, ...unchanged } = captured;
    expect(unchanged).toEqual(plain);
    expect(
      traceEngineRay2(state, input, { stopAt: 3, recordOpticalPath: true, indexAtSurface: (i) => (i === 1 ? 1.6 : 1) })
        .opticalPathLengthMm,
    ).toBeCloseTo(20, 12);
  });
  it("preserves reference phase when the input plane moves along the incident wave", () => {
    const values = [-10, -100].map((z) => {
      const trace = traceEngineRay2(
        state,
        { origin: [0, 0, z], direction: [0, 0, 1] },
        { stopAt: 3, recordOpticalPath: true },
      );
      return sampleReferenceWavefront(trace, [0, 0, 27], 20)!.opticalPathMm;
    });
    expect(values[0]).toBeCloseTo(values[1], 11);
  });
  it("uses the actual path of oblique rays, not axial thickness", () => {
    const direction = [0.1, 0, Math.sqrt(0.99)] as const;
    const trace = traceEngineRay2(state, { origin: [0, 0, -10], direction }, { stopAt: 3, recordOpticalPath: true });
    const expected = 12 / direction[2] + (5 * 1.5168) / Math.sqrt(1 - (0.1 / 1.5168) ** 2);
    expect(trace.opticalPathLengthMm).toBeCloseTo(expected, 10);
    expect(launchPhaseMm(trace)).toBeCloseTo(-10 * direction[2], 12);
  });
  it("rejects rays without captured phase and accounts for a finite source", () => {
    const trace = traceEngineRay2(state, { origin: [0, 0, -10], direction: [0, 0, 1] });
    expect(sampleReferenceWavefront(trace, [0, 0, 27], 20)).toBeNull();
    expect(launchPhaseMm(trace, [0, 0, -100])).toBe(90);
  });
});
