import { describe, expect, it } from "vitest";
import { doLayout, traceRay, traceSkewRay } from "../../../src/optics/optics.js";
import { bulkTransmissionForTrace } from "../../../src/optics/trace/bulkAbsorption.js";
import type { RuntimeLens } from "../../../src/types/optics.js";
import { build, buildSimplePositiveElementLens } from "./testLensFixtures.js";

describe("bulkTransmissionForTrace", () => {
  it("applies Beer-Lambert attenuation to the exact path inside an absorbing element", () => {
    const L = {
      isFoldedOptics: false,
      elements: [{ id: 5, absorptionCoefficientPerMm: 0.5 }],
      S: [{ elemId: 5 }, { elemId: 0 }],
    } as unknown as RuntimeLens;
    const hits = [
      { surfaceIdx: 0, point: [0, 0, 1] as const },
      { surfaceIdx: 1, point: [0, 0, 3] as const },
    ];

    expect(bulkTransmissionForTrace(L, hits)).toBeCloseTo(Math.exp(-1), 12);
  });

  it("keeps transparent traces at unit transmission and defensively ignores unsupported folded absorption", () => {
    const transparent = {
      isFoldedOptics: false,
      elements: [{ id: 1 }],
      S: [{ elemId: 1 }, { elemId: 0 }],
    } as unknown as RuntimeLens;
    const folded = {
      ...transparent,
      isFoldedOptics: true,
      elements: [{ id: 1, absorptionCoefficientPerMm: 0.5 }],
    } as unknown as RuntimeLens;
    const hits = [
      { surfaceIndex: 0, point: [0, 0, 0] as const },
      { surfaceIndex: 1, point: [0, 0, 10] as const },
    ];

    expect(bulkTransmissionForTrace(transparent, hits)).toBe(1);
    expect(bulkTransmissionForTrace(folded, hits)).toBe(1);
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
