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
import { combineOtfs, geometricOtf, otfMagnitude } from "../../../src/optics/analysis/mtfMath.js";
import { shearedOtf } from "../../../src/optics/analysis/mtfShearedOtf.js";
import { traceMtfFieldPupil } from "../../../src/optics/analysis/mtfTracing.js";
import { computeMtf } from "../../../src/optics/mtf.js";
import { evaluateCatalogAbbeNumber, evaluateSellmeier, resolveGlass } from "../../../src/optics/glassCatalog.js";
import { LINE_NM } from "../../../src/optics/spectralLines.js";
import { anchoredIndexAtWavelength } from "../../../src/optics/chromatic/indexResolver.js";
import type { MtfOptions } from "../../../src/types/mtf.js";

/** Simple fixture lens with its single glass's data replaced. */
function withGlass(patch: { nd?: number; vd?: number; dPgF?: number }) {
  const L = buildSimplePositiveElementLens();
  const nd = patch.nd ?? L.elements[0].nd;
  return prepareRuntimeState(
    build({
      ...L.data,
      elements: L.elements.map((e) => ({ ...e, ...patch, nd })),
      surfaces: L.data.surfaces.map((s) => ({ ...s, nd: s.nd === 1 ? 1 : nd })),
    }),
    0,
    0,
  );
}

const options: MtfOptions = {
  method: "geometric",
  spectrum: "cdf",
  focus: "design",
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
    // The same point image 0.05 mm away: half a cycle out of phase at 10 lp/mm.
    const shifted = geometricOtf([{ x: 0.05, y: 0, weight: 1 }], [0, 10], "x");
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
  it("estimates nd/νd-only glass dispersion, says so, and identifies compatible catalog substitution", () => {
    const estimated = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
    expect(estimated.lens.dispersion[1].quality).toBe("abbe");
    expect(assessMtfSupport(estimated, options).limitations.join(" ")).toContain("One glass has only nd and νd");
    expect(resolveMtfSpectrum(estimated, "photopic")).toEqual({
      spectrum: "photopic",
      note: "Dispersion of one glass is estimated from nd and νd.",
    });
    const resolved = prepareRuntimeState(buildChromaticPositiveElementLens(), 0, 0);
    const support = assessMtfSupport(resolved, options);
    expect(support.available).toBe(true);
    expect(support.spectralLines.map((line) => line.weight)).toEqual([1 / 3, 1 / 3, 1 / 3]);
    expect(support.limitations.join(" ")).toContain("spectral proxies");
  });
  it("blocks glasses whose dispersion cannot be estimated", () => {
    expect(assessMtfSupport(withGlass({ vd: undefined }), options).reason).toBe("spectral-data-unavailable");
    const fluoriteLike = withGlass({ nd: 1.497, vd: 81.6 });
    expect(assessMtfSupport(fluoriteLike, options).message).toContain("low-dispersion glass (νd 81.6)");
    expect(assessMtfSupport(fluoriteLike, { ...options, spectrum: "reference" }).available).toBe(true);
    expect(assessMtfSupport(withGlass({ nd: 1.497, vd: 81.6, dPgF: 0.03 }), options).available).toBe(true);
  });
  it("checks hidden rear plates as well as visible elements", () => {
    const base = buildChromaticPositiveElementLens();
    const unknownPlate = { ...REAR_PLATE_FIXTURE, glass: undefined, nd: 1.497, vd: 81.6 };
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
  });
  it("sums each wavelength's sheared OTF as a complex number about one image reference", () => {
    // f/8 off axis: lateral color and coma give every line its own image shift, which only a complex sum keeps.
    const request: MtfOptions = { ...options, method: "diffraction", pupilSemiDiameterMm: 3, stopSemiDiameterMm: 3 };
    const state = prepareRuntimeState(buildChromaticPositiveElementLens(), 0, 0);
    const support = assessMtfSupport(state, request);
    const result = computeMtf(state, request).fields[0];
    expect(result.reason).toBeNull();
    const frequencies = request.frequenciesPerMm!;
    const bundles = MTF_CDF_LINES.map(
      (line) => traceMtfFieldPupil(state, request, support, result.fieldAngleDeg!, result.gridSize, line)!,
    );
    // Every line is sheared on its own lattice but referred to the first line's chief.
    const lines = bundles.map((bundle, i) => ({
      weight: MTF_CDF_LINES[i].weight * bundle.rays.reduce((sum, ray) => sum + ray.weight, 0),
      sheared: shearedOtf(bundle, bundles[0].chief, MTF_CDF_LINES[i].wavelengthNm * 1e-6, frequencies),
      own: shearedOtf(bundle, bundle.chief, MTF_CDF_LINES[i].wavelengthNm * 1e-6, frequencies),
    }));
    const total = lines.reduce((sum, line) => sum + line.weight, 0);
    const complexSum = otfMagnitude(
      combineOtfs(lines.map(({ sheared, weight }) => ({ otf: sheared.tangential, weight }))),
    );
    const ownReferences = otfMagnitude(combineOtfs(lines.map(({ own, weight }) => ({ otf: own.tangential, weight }))));
    frequencies.forEach((_, i) => {
      expect(result.tangential[i]).toBeCloseTo(complexSum[i], 11);
      const limit = lines.reduce((sum, line) => sum + line.weight * line.sheared.limit.tangential[i], 0) / total;
      expect(result.diffractionLimit!.tangential[i]).toBeCloseTo(limit, 11);
    });
    // Neither a sum of moduli nor per-line references gives the same curve.
    const moduli = frequencies.map(
      (_, i) => lines.reduce((sum, line) => sum + line.weight * otfMagnitude(line.sheared.tangential)[i], 0) / total,
    );
    const largest = (other: number[]) => Math.max(...other.map((value, i) => Math.abs(value - result.tangential[i])));
    expect(largest(moduli)).toBeGreaterThan(0.001);
    expect(largest(ownReferences)).toBeGreaterThan(0.001);
    expect(result.diffractionLimit!.tangential[1]).not.toBeCloseTo(lines[0].sheared.limit.tangential[1], 6);
  });
  it("weights five photopic lines by V(λ) and anchors lateral color at 555 nm", () => {
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
    const unresolved = withGlass({ vd: undefined });
    for (const spectrum of ["photopic", "cdf"] as const) {
      const choice = resolveMtfSpectrum(unresolved, spectrum);
      expect(choice.spectrum).toBe("reference");
      expect(choice.note).toContain("because a glass has no Abbe number; showing the reference wavelength");
      expect(assessMtfSupport(unresolved, { ...options, spectrum }).reason).toBe("spectral-data-unavailable");
    }
    const resolved = prepareRuntimeState(buildChromaticPositiveElementLens(), 0, 0);
    expect(resolveMtfSpectrum(resolved, "photopic")).toEqual({ spectrum: "photopic", note: null });
    expect(resolveMtfSpectrum(resolved, "reference")).toEqual({ spectrum: "reference", note: null });
  });
});
