import { describe, expect, it } from "vitest";
import { build, buildSimplePositiveElementLens } from "./testLensFixtures.js";
import { prepareRuntimeState } from "../../../src/optics/compat.js";
import { assessMtfSupport } from "../../../src/optics/analysis/mtfSupport.js";
import type { MtfOptions } from "../../../src/types/mtf.js";
import { LINE_NM } from "../../../src/optics/spectralLines.js";

export const mtfTestOptions: MtfOptions = {
  method: "geometric",
  spectrum: "reference",
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
