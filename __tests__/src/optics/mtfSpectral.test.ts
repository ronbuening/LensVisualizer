import { constructionFixtureData } from "./constructionFixtures.js";
import { mtfInputs } from "./testLensFixtures.js";
import { runtimeView } from "../../../src/optics/prescription/runtimeView.js";
import { describe, expect, it } from "vitest";
import {
  build,
  buildChromaticPositiveElementLens,
  buildSimplePositiveElementLens,
  REAR_PLATE_FIXTURE,
} from "./testLensFixtures.js";
import { prepareRuntimeState } from "../../../src/optics/state/runtimeAdapters.js";
import {
  assessMtfSupport,
  MTF_CDF_LINES,
  MTF_PHOTOPIC_LINES,
  resolveMtfSpectrum,
} from "../../../src/optics/analysis/mtf/mtfSupport.js";
import { combineOtfs, geometricOtf, otfMagnitude } from "../../../src/optics/analysis/mtf/mtfMath.js";
import { shearedOtf } from "../../../src/optics/analysis/mtf/mtfShearedOtf.js";
import { mtfIndexResolver, traceMtfFieldPupil } from "../../../src/optics/analysis/mtf/mtfTracing.js";
import { computeMtf } from "../../../src/optics/analysis/mtf/mtf.js";
import {
  evaluateCatalogAbbeNumber,
  evaluateSellmeier,
  resolveGlass,
} from "../../../src/optics/chromatic/glassCatalog.js";
import { LINE_NM } from "../../../src/optics/chromatic/spectralLines.js";
import { assessMtfDataLimitations } from "../../../src/optics/analysis/mtf/mtfDataLimitations.js";
import { anchoredIndexAtWavelength } from "../../../src/optics/chromatic/indexResolver.js";
import type { MtfOptions } from "../../../src/types/mtf.js";

// CIE 1924 V(λ), 470:5:650 nm (DOI 10.25039/CIE.DS.dktna2s3).
// Linear interpolation supplies both the quadrature control and the dense integral.
const PHOTOPIC_V = [
  0.09098, 0.1126, 0.13902, 0.1693, 0.20802, 0.2586, 0.323, 0.4073, 0.503, 0.6082, 0.71, 0.7932, 0.862, 0.91485, 0.954,
  0.9803, 0.99495, 1, 0.995, 0.9786, 0.952, 0.9154, 0.87, 0.8163, 0.757, 0.6949, 0.631, 0.5668, 0.503, 0.4412, 0.381,
  0.321, 0.265, 0.217, 0.175, 0.1382, 0.107,
];

function photopicV(wavelengthNm: number): number {
  const position = (wavelengthNm - 470) / 5;
  const lower = Math.min(PHOTOPIC_V.length - 2, Math.floor(position));
  return PHOTOPIC_V[lower] + (position - lower) * (PHOTOPIC_V[lower + 1] - PHOTOPIC_V[lower]);
}

/** Simple fixture lens with its single glass's data replaced. */
function withGlass(patch: { nd?: number; vd?: number; dPgF?: number }) {
  const L = buildSimplePositiveElementLens();
  const nd = patch.nd ?? L.elements[0].nd;
  return prepareRuntimeState(
    build({
      ...constructionFixtureData(L),
      elements: L.elements.map((e) => ({ ...e, ...patch, nd })),
      surfaces: constructionFixtureData(L).surfaces.map((s) => ({ ...s, nd: s.nd === 1 ? 1 : nd })),
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
  it("derives the nine photopic weights from Gauss-Legendre weights and tabulated V(λ)", () => {
    // Positive abscissae and weights on [-1, 1]; symmetry supplies the other half.
    const gauss = [
      [0, 0.3302393550012598],
      [0.3242534234038089, 0.3123470770400029],
      [0.6133714327005904, 0.2606106964029354],
      [0.8360311073266358, 0.1806481606948574],
      [0.9681602395076261, 0.0812743883615744],
    ];
    const expected = gauss.flatMap(([node, weight]) =>
      (node === 0 ? [0] : [-node, node]).map((x) => {
        const wavelengthNm = 560 + 90 * x;
        return {
          wavelengthNm: Number(wavelengthNm.toFixed(2)),
          weight: Number((90 * weight * photopicV(wavelengthNm)).toPrecision(5)),
        };
      }),
    );
    expect(MTF_PHOTOPIC_LINES).toEqual(expected);
    for (const { wavelengthNm, weight } of MTF_PHOTOPIC_LINES) {
      expect(wavelengthNm).toBeGreaterThan(470);
      expect(wavelengthNm).toBeLessThan(650);
      expect(weight).toBeGreaterThan(0);
    }
  });

  it.each(["geometric", "diffraction"] as const)(
    "integrates chromatic blur against a dense equal-energy photopic control (%s)",
    (method) => {
      // A near-focused catalog-proxy singlet retains longitudinal color without severe defocus.
      const data = constructionFixtureData(buildChromaticPositiveElementLens());
      const state = prepareRuntimeState(
        build({ ...data, surfaces: data.surfaces.map((s) => ({ ...s, d: s.label === "2" ? 47.4 : s.d })) }),
        0,
        0,
      );
      const request: MtfOptions = {
        ...options,
        method,
        spectrum: "photopic",
        pupilSemiDiameterMm: 3,
        stopSemiDiameterMm: 3,
        fieldFractions: [0],
        frequenciesPerMm: [10, 30, 50],
      };
      const support = assessMtfSupport(...mtfInputs(state, request));
      const field = computeMtf(...mtfInputs(state, request)).fields[0];
      expect(field.reason).toBeNull();
      // Composite trapezoid at 2.5 nm; the half-width endpoint weights keep the band exactly 470-650 nm.
      const dense = Array.from({ length: 73 }, (_, i) => {
        const wavelengthNm = 470 + 2.5 * i;
        const line = { wavelengthNm, weight: photopicV(wavelengthNm) * (i === 0 || i === 72 ? 1.25 : 2.5) };
        const bundle = traceMtfFieldPupil(state, request, support, field.fieldAngleDeg!, field.gridSize, line)!;
        expect(bundle.failed + bundle.unaimed).toBe(0);
        const weight = line.weight * bundle.rays.reduce((sum, ray) => sum + ray.weight, 0);
        // On axis every wavelength's chief lands at the origin, so both estimators share that reference.
        const otf =
          method === "geometric"
            ? geometricOtf(bundle.rays, request.frequenciesPerMm!, "x")
            : shearedOtf(bundle, { x: 0, y: 0, weight: 1 }, wavelengthNm * 1e-6, request.frequenciesPerMm!).sagittal;
        return { otf, weight };
      });
      const expected = otfMagnitude(combineOtfs(dense));
      const errors = field.sagittal.map((value, i) => Math.abs(value - expected[i]));
      errors.forEach((error) => expect(error).toBeLessThan(0.001));
    },
  );

  it("recomputes identical index bytes after a long wavelength sweep without invalidating a live resolver", () => {
    const state = prepareRuntimeState(buildChromaticPositiveElementLens(), 0, 0);
    const support = assessMtfSupport(...mtfInputs(state, options));
    const retained = mtfIndexResolver(state, support, LINE_NM.d)!;
    const bytes = (resolve: typeof retained) =>
      new Uint8Array(new Float64Array(state.surfaces.map((surface, i) => resolve(i, surface.nd))).buffer);
    const expected = bytes(retained);
    for (let wavelength = 400; wavelength < 480; wavelength++) mtfIndexResolver(state, support, wavelength);
    expect(bytes(mtfIndexResolver(state, support, LINE_NM.d)!)).toEqual(expected);
    expect(bytes(retained)).toEqual(expected);
  });

  it("anchors catalog dispersion to the authored index so spectral runs keep the design's focus", () => {
    const base = buildChromaticPositiveElementLens();
    // N-BK7 stays a compatible catalog proxy for an authored index 1e-3 above its catalog nd.
    const authored = 1.5178;
    const L = build({
      ...constructionFixtureData(base),
      elements: base.elements.map((e) => ({ ...e, nd: authored })),
      surfaces: constructionFixtureData(base).surfaces.map((s) => ({ ...s, nd: s.nd === 1 ? 1 : authored })),
    });
    const state = prepareRuntimeState(L, 0, 0);
    expect(state.lens.dispersion[1].quality).toBe("sellmeier");
    const glass = state.lens.dispersion[1].glassEntry!;
    expect(evaluateSellmeier(glass, LINE_NM.d)).not.toBeCloseTo(authored, 6);
    expect(anchoredIndexAtWavelength(state, 1, LINE_NM.d)).toBeCloseTo(authored, 14);
    expect(anchoredIndexAtWavelength(state, 1, LINE_NM.F) - authored).toBeCloseTo(
      evaluateSellmeier(glass, LINE_NM.F) - evaluateSellmeier(glass, LINE_NM.d),
      14,
    );
    const reference = assessMtfSupport(...mtfInputs(state, { ...options, spectrum: "reference" }));
    const cdf = assessMtfSupport(...mtfInputs(state, options));
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
      ...constructionFixtureData(runtimeView(state.lens)),
      elements: runtimeView(state.lens).elements.map((e) => ({
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
    const support = assessMtfSupport(...mtfInputs(lineState, { ...options, spectrum: "photopic" }));
    expect(support.available).toBe(true);
    for (const line of support.spectralLines) {
      const index = mtfIndexResolver(lineState, support, line.wavelengthNm)!(1, channels.d);
      expect(index).toBeGreaterThan(channels.C);
      expect(index).toBeLessThan(channels.g);
    }
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
    expect(assessMtfSupport(...mtfInputs(estimated, options)).limitations.join(" ")).toContain(
      "One glass has only nd and νd",
    );
    expect(resolveMtfSpectrum(estimated, "photopic")).toEqual({
      spectrum: "photopic",
      note: "Dispersion of one glass is estimated from nd and νd.",
    });
    const resolved = prepareRuntimeState(buildChromaticPositiveElementLens(), 0, 0);
    const support = assessMtfSupport(...mtfInputs(resolved, options));
    expect(support.available).toBe(true);
    expect(support.spectralLines.map((line) => line.weight)).toEqual([1 / 3, 1 / 3, 1 / 3]);
    expect(support.limitations.join(" ")).toContain("spectral proxies");
    const estimatedSupport = assessMtfSupport(...mtfInputs(estimated, { ...options, spectrum: "photopic" }));
    expect(estimatedSupport.available).toBe(true);
    for (const line of estimatedSupport.spectralLines)
      expect(mtfIndexResolver(estimated, estimatedSupport, line.wavelengthNm)!(1, 1.5168)).toBeGreaterThan(1);
  });
  it("blocks glasses whose dispersion cannot be estimated", () => {
    expect(assessMtfSupport(...mtfInputs(withGlass({ vd: undefined }), options)).reason).toBe(
      "spectral-data-unavailable",
    );
    const fluoriteLike = withGlass({ nd: 1.497, vd: 81.6 });
    expect(assessMtfSupport(...mtfInputs(fluoriteLike, options)).message).toContain("low-dispersion glass (νd 81.6)");
    expect(assessMtfSupport(...mtfInputs(fluoriteLike, { ...options, spectrum: "reference" })).available).toBe(true);
    expect(assessMtfSupport(...mtfInputs(withGlass({ nd: 1.497, vd: 81.6, dPgF: 0.03 }), options)).available).toBe(
      true,
    );
  });
  it("checks hidden rear plates as well as visible elements", () => {
    const base = buildChromaticPositiveElementLens();
    const unknownPlate = { ...REAR_PLATE_FIXTURE, glass: undefined, nd: 1.497, vd: 81.6 };
    const unresolved = build({ ...constructionFixtureData(base), rearPlates: [unknownPlate] });
    const state = prepareRuntimeState(unresolved, 0, 0);
    expect(unresolved.elements).toHaveLength(base.elements.length);
    expect(assessMtfSupport(...mtfInputs(state, options)).reason).toBe("spectral-data-unavailable");
    expect(assessMtfSupport(...mtfInputs(state, { ...options, spectrum: "reference" })).available).toBe(true);
    const resolved = build({ ...constructionFixtureData(base), rearPlates: [REAR_PLATE_FIXTURE] });
    expect(assessMtfSupport(...mtfInputs(prepareRuntimeState(resolved, 0, 0), options)).available).toBe(true);
  });
  it("does not label a native e reference as a physical d index", () => {
    const L = buildSimplePositiveElementLens();
    const glass = resolveGlass("N-BK7")!;
    const ne = evaluateSellmeier(glass, LINE_NM.e);
    const native = build({
      ...constructionFixtureData(L),
      elements: L.elements.map((e) => ({
        ...e,
        nd: ne,
        vd: evaluateCatalogAbbeNumber(glass, "e"),
        indexReference: "e",
        glass: undefined,
      })),
      surfaces: constructionFixtureData(L).surfaces.map((s) => ({ ...s, nd: s.nd === 1 ? 1 : ne })),
    });
    const state = prepareRuntimeState(native, 0, 0);
    expect(assessMtfSupport(...mtfInputs(state, { ...options, spectrum: "reference" })).referenceWavelengthNm).toBe(
      LINE_NM.e,
    );
    expect(assessMtfSupport(...mtfInputs(state, options)).available).toBe(false);
    // The e-reference Cauchy route extrapolates beyond C′ without clamping, but is blocked for spectral MTF.
    // The reddest photopic node is closer to C′ than the band endpoint and stays inside its index interval.
    const redNode = MTF_PHOTOPIC_LINES.at(-1)!.wavelengthNm;
    const atRedNode = anchoredIndexAtWavelength(state, 1, redNode);
    expect(redNode).toBeGreaterThan(LINE_NM.CPrime);
    expect(atRedNode).toBeGreaterThan(anchoredIndexAtWavelength(state, 1, 650));
    expect(atRedNode).toBeLessThan(anchoredIndexAtWavelength(state, 1, LINE_NM.CPrime));
    expect(assessMtfSupport(...mtfInputs(state, { ...options, spectrum: "photopic" })).reason).toBe(
      "spectral-data-unavailable",
    );
    const resolved = build({
      ...constructionFixtureData(native),
      elements: native.elements.map((e) => ({ ...e, glass: "N-BK7" })),
    });
    expect(assessMtfSupport(...mtfInputs(prepareRuntimeState(resolved, 0, 0), options))).toMatchObject({
      available: true,
      referenceWavelengthNm: LINE_NM.d,
    });
    const resolvedState = prepareRuntimeState(resolved, 0, 0);
    const photopicSupport = assessMtfSupport(...mtfInputs(resolvedState, { ...options, spectrum: "photopic" }));
    expect(photopicSupport.available).toBe(true);
    expect(mtfIndexResolver(resolvedState, photopicSupport, redNode)!(1, ne)).toBeCloseTo(
      ne + evaluateSellmeier(glass, redNode) - evaluateSellmeier(glass, LINE_NM.e),
      14,
    );
  });
  it("matches the combined image-plane ray distribution without wavelength recentering or refocus", () => {
    const state = prepareRuntimeState(buildChromaticPositiveElementLens(), 0, 0);
    const support = assessMtfSupport(...mtfInputs(state, options));
    const result = computeMtf(...mtfInputs(state, options)).fields[0];
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
    const support = assessMtfSupport(...mtfInputs(state, request));
    const result = computeMtf(...mtfInputs(state, request)).fields[0];
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
  it("uses photopic quadrature weights and anchors lateral color at 560 nm", () => {
    const state = prepareRuntimeState(buildChromaticPositiveElementLens(), 0, 0);
    const photopic = { ...options, spectrum: "photopic" as const };
    const support = assessMtfSupport(...mtfInputs(state, photopic));
    expect(support).toMatchObject({ available: true, referenceWavelengthNm: 560, useResolvedReference: true });
    expect(support.spectralLines).toEqual(MTF_PHOTOPIC_LINES);
    expect(support.limitations.join(" ")).toContain("V(λ)");
    // Every photopic line lies inside the C-g range that line-index glasses tabulate.
    for (const line of MTF_PHOTOPIC_LINES) {
      expect(line.wavelengthNm).toBeGreaterThanOrEqual(LINE_NM.g);
      expect(line.wavelengthNm).toBeLessThanOrEqual(LINE_NM.C);
    }
    const field = computeMtf(...mtfInputs(state, photopic)).fields[0];
    expect(field.reason).toBeNull();
    expect(field.sagittal[0]).toBeCloseTo(1, 12);
  });
  it("falls back to the reference wavelength when glass data cannot support a spectrum", () => {
    const unresolved = withGlass({ vd: undefined });
    for (const spectrum of ["photopic", "cdf"] as const) {
      const choice = resolveMtfSpectrum(unresolved, spectrum);
      expect(choice.spectrum).toBe("reference");
      expect(choice.note).toContain("because a glass has no Abbe number; showing the reference wavelength");
      expect(assessMtfSupport(...mtfInputs(unresolved, { ...options, spectrum })).reason).toBe(
        "spectral-data-unavailable",
      );
    }
    const resolved = prepareRuntimeState(buildChromaticPositiveElementLens(), 0, 0);
    expect(resolveMtfSpectrum(resolved, "photopic")).toEqual({ spectrum: "photopic", note: null });
    expect(resolveMtfSpectrum(resolved, "reference")).toEqual({ spectrum: "reference", note: null });
  });
});

describe("native sodium D", () => {
  it("uses D for native reference MTF and physical d for an explicitly C/d/F spectrum", () => {
    const L = buildSimplePositiveElementLens();
    const entry = resolveGlass("N-BK7")!;
    const nD = evaluateSellmeier(entry, LINE_NM.D);
    const data = constructionFixtureData(L);
    const native = build({
      ...data,
      elements: data.elements.map((e) => ({
        ...e,
        nd: nD,
        vd: evaluateCatalogAbbeNumber(entry, "D"),
        indexReference: "D",
        glass: undefined,
      })),
      surfaces: data.surfaces.map((s) => ({ ...s, nd: s.nd === 1 ? 1 : nD })),
    });
    const state = prepareRuntimeState(native, 0, 0);
    expect(assessMtfSupport(...mtfInputs(state, { ...options, spectrum: "reference" }))).toMatchObject({
      available: true,
      referenceWavelengthNm: LINE_NM.D,
      useResolvedReference: false,
    });
    expect(assessMtfSupport(...mtfInputs(state, options))).toMatchObject({
      available: true,
      referenceWavelengthNm: LINE_NM.d,
      useResolvedReference: true,
    });
  });

  it("qualifies the estimated g node in a historical C/D/F table", () => {
    const L = buildSimplePositiveElementLens(),
      data = constructionFixtureData(L);
    const native = build({
      ...data,
      elements: data.elements.map((e) => ({ ...e, indexReference: "D", glass: undefined, nC: 1.514, nF: 1.523 })),
    });
    const state = prepareRuntimeState(native, 0, 0);
    expect(resolveMtfSpectrum(state, "photopic").note).toContain("measured red/blue indices with an estimated g index");
    const support = assessMtfSupport(...mtfInputs(state, { ...options, spectrum: "photopic" }));
    expect(support.available).toBe(true);
    for (const line of support.spectralLines) {
      const index = mtfIndexResolver(state, support, line.wavelengthNm)!(1, state.surfaces[1].nd);
      expect(index).toBeGreaterThan(1.514);
      expect(index).toBeLessThan(anchoredIndexAtWavelength(state, 1, LINE_NM.g));
    }
    const notes = assessMtfDataLimitations(state, {
      preferredSpectrum: "photopic",
      spectrum: "photopic",
      referenceWavelengthNm: 560,
      result: null,
    });
    expect(notes[0]).toMatchObject({ kind: "estimated-dispersion", blocking: true });
    expect(notes[0].text).toContain("no measured g index");
    expect(notes[0].text).not.toContain("only by nd and νd");
  });
});

describe("partial measured dispersion", () => {
  it.each(["d", "D"] as const)(
    "guards the measured span at %s independently of the printed Abbe value",
    (reference) => {
      for (const vd of [undefined, 30, 100]) {
        const base = constructionFixtureData(buildSimplePositiveElementLens());
        const state = prepareRuntimeState(
          build({
            ...base,
            elements: base.elements.map((e) => ({
              ...e,
              indexReference: reference,
              glass: undefined,
              vd,
              nC: e.nd - 0.002,
              nF: e.nd + 0.004,
            })),
          }),
          0,
          0,
        );
        expect(assessMtfSupport(...mtfInputs(state, options)).message).toContain("low-dispersion glass");
        const allowed = prepareRuntimeState(
          build({
            ...base,
            elements: base.elements.map((e) => ({
              ...e,
              indexReference: reference,
              glass: undefined,
              vd,
              nC: e.nd - 0.003,
              nF: e.nd + 0.007,
            })),
          }),
          0,
          0,
        );
        expect(assessMtfSupport(...mtfInputs(allowed, options)).available).toBe(true);
      }
    },
  );
  it("retains the all-glass warning for sodium Abbe-only models", () => {
    const base = constructionFixtureData(buildSimplePositiveElementLens());
    const state = prepareRuntimeState(
      build({ ...base, elements: base.elements.map((e) => ({ ...e, indexReference: "D" })) }),
      0,
      0,
    );
    const notes = assessMtfDataLimitations(state, {
      preferredSpectrum: "photopic",
      spectrum: "photopic",
      referenceWavelengthNm: 560,
      result: null,
    });
    expect(notes[0].text).toContain("Every glass is known only by nD and νD, so all dispersion is estimated.");
  });
});
