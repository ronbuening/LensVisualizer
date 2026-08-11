import { describe, expect, it } from "vitest";
import MinoltaSTFRaw from "../../../src/lens-data/minolta/MinoltaSTF135mmf28T45.data.js";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { doLayout, traceRay, traceSkewRay } from "../../../src/optics/optics.js";
import { bulkTransmissionForTrace } from "../../../src/optics/trace/bulkAbsorption.js";
import type { LensData, RuntimeLens } from "../../../src/types/optics.js";

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

  it("propagates the Minolta STF axial absorption through both public trace adapters", () => {
    const L = buildLens({ ...LENS_DEFAULTS, ...MinoltaSTFRaw } as LensData);
    const layout = doLayout(0, 0, L);
    const expected = Math.exp(-0.55 * 0.3);

    const meridional = traceRay(0, 0, layout.z, 0, 0, L.stopPhysSD, true, L);
    const skew = traceSkewRay(0, 0, 0, 0, 0, 0, L.stopPhysSD, true, L);

    expect(meridional.clipped).toBe(false);
    expect(skew.clipped).toBe(false);
    expect(meridional.transmission).toBeCloseTo(expected, 12);
    expect(skew.transmission).toBeCloseTo(expected, 12);
  });

  it("uses the exact off-axis STF segment length between the apodizer surfaces", () => {
    const L = buildLens({ ...LENS_DEFAULTS, ...MinoltaSTFRaw } as LensData);
    const layout = doLayout(0, 0, L);
    const ray = traceRay(L.EP.epSD * 0.5, 0, layout.z, 0, 0, L.stopPhysSD, true, L);
    const entryPoint = ray.pts[L.labelIdx["9"] + 1];
    const exitPoint = ray.pts[L.labelIdx["10"] + 1];
    const exactPathLength = Math.hypot(exitPoint[0] - entryPoint[0], exitPoint[1] - entryPoint[1]);

    expect(ray.clipped).toBe(false);
    expect(exactPathLength).toBeGreaterThan(0.3);
    expect(ray.transmission).toBeCloseTo(Math.exp(-0.55 * exactPathLength), 12);
  });
});
