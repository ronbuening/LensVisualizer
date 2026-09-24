import { describe, expect, it } from "vitest";
import {
  build,
  buildChromaticPositiveElementLens,
  buildSimplePositiveElementLens,
  REAR_PLATE_FIXTURE,
} from "./testLensFixtures.js";
import { prepareRuntimeState } from "../../../src/optics/compat.js";
import {
  assessMtfSupport,
  MTF_CDF_LINES,
  MTF_PHOTOPIC_LINES,
  resolveMtfSpectrum,
} from "../../../src/optics/analysis/mtfSupport.js";
import { combineOtfs, geometricOtf, otfMagnitude, translateOtf } from "../../../src/optics/analysis/mtfMath.js";
import { traceMtfFieldPupil } from "../../../src/optics/analysis/mtfTracing.js";
import { computeMtf } from "../../../src/optics/mtf.js";
import { evaluateCatalogAbbeNumber, evaluateSellmeier, resolveGlass } from "../../../src/optics/glassCatalog.js";
import { LINE_NM } from "../../../src/optics/spectralLines.js";
import { anchoredIndexAtWavelength } from "../../../src/optics/chromatic/indexResolver.js";
import type { MtfOptions } from "../../../src/types/mtf.js";

const options: MtfOptions = {
  method: "geometric",
  spectrum: "cdf",
  pupilSemiDiameterMm: 0.1,
  stopSemiDiameterMm: 0.1,
  fieldFractions: [0.15],
  frequenciesPerMm: [0, 1, 2, 10, 40],
  maxGridSize: 32,
};

describe("qualified spectral MTF", () => {
  it("anchors catalog dispersion to the authored index so spectral runs keep the design's focus", () => {
    const base = buildChromaticPositiveElementLens();
    // N-BK7 stays a compatible catalog proxy for an authored index 1e-3 above its catalog nd.
    const authored = 1.5178;
    const L = build({
      ...base.data,
      elements: base.elements.map((e) => ({ ...e, nd: authored })),
      surfaces: base.data.surfaces.map((s) => ({ ...s, nd: s.nd === 1 ? 1 : authored })),
    });
    const state = prepareRuntimeState(L, 0, 0);
    expect(state.lens.dispersion[1].quality).toBe("sellmeier");
    expect(state.lens.dispersion[1].indexAt("G")).not.toBeCloseTo(authored, 6);
    expect(anchoredIndexAtWavelength(state, 1, LINE_NM.d)).toBeCloseTo(authored, 14);
    const glass = state.lens.dispersion[1].glassEntry!;
    expect(anchoredIndexAtWavelength(state, 1, LINE_NM.F) - authored).toBeCloseTo(
      evaluateSellmeier(glass, LINE_NM.F) - evaluateSellmeier(glass, LINE_NM.d),
      14,
    );
    const reference = assessMtfSupport(state, { ...options, spectrum: "reference" });
    const cdf = assessMtfSupport(state, options);
    const angle = 0.15 * L.halfField;
    const plain = traceMtfFieldPupil(state, { ...options, spectrum: "reference" }, reference, angle, 16)!;
    const dLine = traceMtfFieldPupil(state, options, cdf, angle, 16, cdf.spectralLines[0])!;
    expect(dLine.rays.length).toBe(plain.rays.length);
    dLine.rays.forEach((ray, i) => {
      expect(ray.x).toBeCloseTo(plain.rays[i].x, 12);
      expect(ray.y).toBeCloseTo(plain.rays[i].y, 12);
    });
  });
  it("interpolates line-index glass exactly through its measured C/d/F/g channels", () => {
    const state = prepareRuntimeState(buildChromaticPositiveElementLens(), 0, 0);
    const lineLens = build({
      ...state.lens.runtime.data,
      elements: state.lens.runtime.elements.map((e) => ({
        ...e,
        glass: undefined,
        nC: 1.5143,
        nF: 1.5224,
        ng: 1.5267,
      })),
    });
    const lineState = prepareRuntimeState(lineLens, 0, 0);
    expect(lineState.lens.dispersion[1].quality).toBe("lineIndices");
    const channels = { C: 1.5143, d: lineState.surfaces[1].nd, F: 1.5224, g: 1.5267 } as const;
    for (const [line, value] of Object.entries(channels))
      expect(anchoredIndexAtWavelength(lineState, 1, LINE_NM[line as keyof typeof channels])).toBeCloseTo(value, 12);
    const mid = anchoredIndexAtWavelength(lineState, 1, 540);
    expect(mid).toBeGreaterThan(channels.d);
    expect(mid).toBeLessThan(channels.F);
  });
  it("combines complex OTFs before magnitude, preserving lateral color and throughput", () => {
    const base = { real: [1, 1], imaginary: [0, 0] };
    const shifted = translateOtf(base, [0, 10], 0.05);
    expect(
      otfMagnitude(
        combineOtfs([
          { otf: base, weight: 1 },
          { otf: shifted, weight: 1 },
        ]),
      )[1],
    ).toBeCloseTo(0, 12);
    expect(
      otfMagnitude(
        combineOtfs([
          { otf: base, weight: 3 },
          { otf: shifted, weight: 1 },
        ]),
      )[1],
    ).toBeCloseTo(0.5, 12);
    expect(otfMagnitude(shifted)[1]).toBeCloseTo(1, 12);
    expect(combineOtfs([]).real).toEqual([]);
  });
  it("requires physical spectral data and identifies compatible catalog substitution", () => {
    const unresolved = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
    expect(assessMtfSupport(unresolved, options).reason).toBe("spectral-data-unavailable");
    expect(assessMtfSupport(unresolved, { ...options, spectrum: "reference" }).available).toBe(true);
    const resolved = prepareRuntimeState(buildChromaticPositiveElementLens(), 0, 0);
    const support = assessMtfSupport(resolved, options);
    expect(support.available).toBe(true);
    expect(support.spectralLines.map((line) => line.weight)).toEqual([1 / 3, 1 / 3, 1 / 3]);
    expect(support.limitations.join(" ")).toContain("spectral proxies");
  });
  it("requires physical dispersion for hidden rear plates as well as visible elements", () => {
    const base = buildChromaticPositiveElementLens();
    const unknownPlate = { ...REAR_PLATE_FIXTURE, glass: undefined };
    const unresolved = build({ ...base.data, rearPlates: [unknownPlate] });
    const state = prepareRuntimeState(unresolved, 0, 0);
    expect(unresolved.elements).toHaveLength(base.elements.length);
    expect(assessMtfSupport(state, options).reason).toBe("spectral-data-unavailable");
    expect(assessMtfSupport(state, { ...options, spectrum: "reference" }).available).toBe(true);
    const resolved = build({ ...base.data, rearPlates: [REAR_PLATE_FIXTURE] });
    expect(assessMtfSupport(prepareRuntimeState(resolved, 0, 0), options).available).toBe(true);
  });
  it("does not label a native e reference as a physical d index", () => {
    const L = buildSimplePositiveElementLens();
    const glass = resolveGlass("N-BK7")!;
    const ne = evaluateSellmeier(glass, LINE_NM.e);
    const native = build({
      ...L.data,
      elements: L.elements.map((e) => ({
        ...e,
        nd: ne,
        vd: evaluateCatalogAbbeNumber(glass, "e"),
        indexReference: "e",
        glass: undefined,
      })),
      surfaces: L.data.surfaces.map((s) => ({ ...s, nd: s.nd === 1 ? 1 : ne })),
    });
    const state = prepareRuntimeState(native, 0, 0);
    expect(assessMtfSupport(state, { ...options, spectrum: "reference" }).referenceWavelengthNm).toBe(LINE_NM.e);
    expect(assessMtfSupport(state, options).available).toBe(false);
    const resolved = build({ ...native.data, elements: native.elements.map((e) => ({ ...e, glass: "N-BK7" })) });
    expect(assessMtfSupport(prepareRuntimeState(resolved, 0, 0), options)).toMatchObject({
      available: true,
      referenceWavelengthNm: LINE_NM.d,
    });
  });
  it("matches the combined image-plane ray distribution without wavelength recentering or refocus", () => {
    const state = prepareRuntimeState(buildChromaticPositiveElementLens(), 0, 0);
    const support = assessMtfSupport(state, options);
    const result = computeMtf(state, options).fields[0];
    expect(result.reason).toBeNull();
    const bundles = MTF_CDF_LINES.map(
      (line) => traceMtfFieldPupil(state, options, support, result.fieldAngleDeg!, result.gridSize, line)!,
    );
    expect(bundles[0].rays[0].trace.input.origin).toEqual(bundles[1].rays[0].trace.input.origin);
    expect(Math.abs(bundles[0].chief.y - bundles[1].chief.y)).toBeGreaterThan(0.0001);
    const all = bundles.flatMap((bundle) => bundle.rays);
    for (const [axis, values] of [
      ["x", result.sagittal],
      ["y", result.tangential],
    ] as const) {
      otfMagnitude(geometricOtf(all, options.frequenciesPerMm!, axis)).forEach((v, i) =>
        expect(values[i]).toBeCloseTo(v, 11),
      );
    }
    const diffraction = computeMtf(state, { ...options, method: "diffraction", fieldFractions: [0] });
    expect(diffraction.fields[0].reason).toBeNull();
    expect(diffraction.fields[0].sagittal[0]).toBeCloseTo(1, 12);
  });
  it("weights five photopic lines by V(λ) and anchors lateral colour at 555 nm", () => {
    const state = prepareRuntimeState(buildChromaticPositiveElementLens(), 0, 0);
    const photopic = { ...options, spectrum: "photopic" as const };
    const support = assessMtfSupport(state, photopic);
    expect(support).toMatchObject({ available: true, referenceWavelengthNm: 555, useResolvedReference: true });
    expect(support.spectralLines).toEqual(MTF_PHOTOPIC_LINES);
    expect(support.limitations.join(" ")).toContain("V(λ)");
    // Every photopic line lies inside the C-g range that line-index glasses tabulate.
    for (const line of MTF_PHOTOPIC_LINES) {
      expect(line.wavelengthNm).toBeGreaterThanOrEqual(LINE_NM.g);
      expect(line.wavelengthNm).toBeLessThanOrEqual(LINE_NM.C);
    }
    const field = computeMtf(state, photopic).fields[0];
    expect(field.reason).toBeNull();
    expect(field.sagittal[0]).toBeCloseTo(1, 12);
  });
  it("falls back to the reference wavelength when glass data cannot support a spectrum", () => {
    const unresolved = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
    for (const spectrum of ["photopic", "cdf"] as const) {
      const choice = resolveMtfSpectrum(unresolved, spectrum);
      expect(choice.spectrum).toBe("reference");
      expect(choice.note).toContain("reference wavelength");
      expect(assessMtfSupport(unresolved, { ...options, spectrum }).reason).toBe("spectral-data-unavailable");
    }
    const resolved = prepareRuntimeState(buildChromaticPositiveElementLens(), 0, 0);
    expect(resolveMtfSpectrum(resolved, "photopic")).toEqual({ spectrum: "photopic", note: null });
    expect(resolveMtfSpectrum(resolved, "reference")).toEqual({ spectrum: "reference", note: null });
  });
});
