import { describe, expect, it } from "vitest";
import {
  doLayout,
  skewImagePlaneIntercept,
  traceChiefRelativeSkewRay,
  traceRay,
  traceSkewRay,
} from "../../../src/optics/optics.js";
import { bulkTransmissionForTrace } from "../../../src/optics/trace/bulkAbsorption.js";
import type { EngineLens } from "../../../src/optics/types.js";
import { normalizeRuntimeLens } from "../../../src/optics/prescription/normalizeLensData.js";
import { transmissionTraceCapture } from "../../../src/optics/trace/bulkAbsorption.js";
import { build, buildSimplePositiveElementLens } from "./testLensFixtures.js";

describe("bulkTransmissionForTrace", () => {
  it("applies Beer-Lambert attenuation to the exact path inside an absorbing element", () => {
    const L = {
      flags: { isFoldedOptics: false },
      elements: [{ id: 5, absorptionCoefficientPerMm: 0.5 }],
      surfaces: [{ elemId: 5 }, { elemId: 0 }],
    } as unknown as EngineLens;
    const hits = [
      { surfaceIdx: 0, point: [0, 0, 1] as const },
      { surfaceIdx: 1, point: [0, 0, 3] as const },
    ];

    expect(bulkTransmissionForTrace(L, hits)).toBeCloseTo(Math.exp(-1), 12);
  });

  it("keeps transparent traces at unit transmission and defensively ignores unsupported folded absorption", () => {
    const transparent = {
      flags: { isFoldedOptics: false },
      elements: [{ id: 1 }],
      surfaces: [{ elemId: 1 }, { elemId: 0 }],
    } as unknown as EngineLens;
    const folded = {
      ...transparent,
      flags: { isFoldedOptics: true },
      elements: [{ id: 1, absorptionCoefficientPerMm: 0.5 }],
    } as unknown as EngineLens;
    const hits = [
      { surfaceIndex: 0, point: [0, 0, 0] as const },
      { surfaceIndex: 1, point: [0, 0, 10] as const },
    ];

    expect(bulkTransmissionForTrace(transparent, hits)).toBe(1);
    expect(bulkTransmissionForTrace(folded, hits)).toBe(1);
  });

  it("uses compiled media without consulting the RuntimeLens bridge or source records", () => {
    const base = buildSimplePositiveElementLens();
    const runtime = build({
      ...base.data,
      elements: base.data.elements.map((element) => ({ ...element, absorptionCoefficientPerMm: 0.5 })),
    });
    const compiled = normalizeRuntimeLens(runtime);
    const lens = {
      ...compiled,
      get runtime(): never {
        throw new Error("RuntimeLens read");
      },
      get source(): never {
        throw new Error("source read");
      },
      elements: compiled.elements.map((element) => ({
        ...element,
        get source(): never {
          throw new Error("element source read");
        },
      })),
    };
    const front = runtime.labelIdx["1"];
    const rear = runtime.labelIdx["2"];
    const hits = [
      { surfaceIndex: front, point: [0, 0, 1] as const },
      { surfaceIndex: rear, point: [0, 0, 3] as const },
    ];
    expect(transmissionTraceCapture(lens)).toBe("hits");
    expect(bulkTransmissionForTrace(lens, hits)).toBe(Math.exp(-1));
    expect(bulkTransmissionForTrace(lens, hits)).toBe(Math.exp(-1));
    expect(() => bulkTransmissionForTrace(lens, undefined)).toThrow("requires hit capture");
  });

  it("propagates absorption along the exact in-glass path through both public trace adapters", () => {
    const base = buildSimplePositiveElementLens("test-absorbing-positive-element");
    const alpha = 0.2;
    const L = build({
      ...base.data,
      elements: base.data.elements.map((element) => ({ ...element, absorptionCoefficientPerMm: alpha })),
    });
    const layout = doLayout(0, 0, L);
    const front = L.labelIdx["1"];
    const rear = L.labelIdx["2"];

    const meridional = traceRay(0, 0, layout.z, 0, 0, L.stopPhysSD, true, L);
    const skew = traceSkewRay(0, 0, 0, 0, 0, 0, L.stopPhysSD, true, L);
    expect(meridional.clipped).toBe(false);
    expect(skew.clipped).toBe(false);
    expect(meridional.transmission).toBeCloseTo(Math.exp(-alpha * L.S[front].d), 12);
    expect(skew.transmission).toBeCloseTo(meridional.transmission!, 12);

    // Off axis the path through the element is longer than its center thickness.
    const ray = traceRay(L.EP.epSD * 0.5, 0, layout.z, 0, 0, L.stopPhysSD, true, L);
    const entry = ray.pts[front + 1];
    const exit = ray.pts[rear + 1];
    const pathLength = Math.hypot(exit[0] - entry[0], exit[1] - entry[1]);
    expect(ray.clipped).toBe(false);
    expect(pathLength).not.toBeCloseTo(L.S[front].d, 6);
    expect(ray.transmission).toBeCloseTo(Math.exp(-alpha * pathLength), 12);
  });
});

describe("chief-relative plate transmission", () => {
  it("matches analytic Snell transfer and Beer-Lambert loss, including stop rims", () => {
    const base = buildSimplePositiveElementLens();
    const alpha = 0.2;
    const n = 1.5;
    // The builder rejects afocal plates; retain its complete runtime shape for this transfer-only fixture.
    const elements = [{ ...base.data.elements[0], nd: n, absorptionCoefficientPerMm: alpha }];
    const surfaces = [
      { label: "STO", R: 1e15, nd: 1, sd: 15, d: 1, elemId: 0 },
      { label: "1", R: 1e15, nd: n, sd: 15, d: 5, elemId: 1 },
      { label: "2", R: 1e15, nd: 1, sd: 15, d: 20, elemId: 0 },
    ];
    const L = { ...base, S: surfaces, elements, data: { ...base.data, surfaces, elements } };
    const slope = -0.1;
    const sinGlass = slope / Math.hypot(slope, 1) / n;
    const glassSlope = sinGlass / Math.sqrt(1 - sinGlass * sinGlass);
    const ray = traceChiefRelativeSkewRay(0.2, 0.3, 1, slope, 2, 0, 0, 15, false, L);
    expect(ray.clipped).toBe(false);
    expect(ray.x).toBeCloseTo(0.4, 12);
    expect(ray.y).toBeCloseTo(1 + 0.3 * 2 + slope + 5 * glassSlope, 12);
    expect(ray.ux).toBe(0);
    expect(ray.uy).toBeCloseTo(slope, 12);
    expect(ray.transmission).toBeCloseTo(Math.exp(-alpha * 5 * Math.sqrt(1 + glassSlope ** 2)), 12);
    const image = skewImagePlaneIntercept(ray.x, ray.y, ray.ux, ray.uy, 6, 26);
    expect(image!.y).toBeCloseTo(ray.y + 20 * slope, 12);
    for (const ghost of [false, true]) {
      for (const offset of [-1e-5, 1e-5]) {
        const rim = traceChiefRelativeSkewRay(1 + offset, 0, 0, 0, 1, 0, 0, 1, ghost, L);
        expect(rim.clipped).toBe(offset > 0);
      }
    }
  });
});
