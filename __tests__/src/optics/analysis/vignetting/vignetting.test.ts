import { constructionFixtureData } from "../../constructionFixtures.js";
import { registerRuntimeFixture } from "../../testLensFixtures.js";
import { describe, it, expect } from "vitest";
import { computeVignettingCurve as computeVignettingCurveBase } from "../../../../../src/optics/analysis/vignetting/vignetting.js";
import { computeAnalysisFieldGeometryAtState } from "../../../../../src/optics/state/fieldAdapters.js";
import { doLayoutForRuntimeLens as doLayout } from "../../../../../src/optics/state/runtimeAdapters.js";
import type { FieldGeometryState } from "../../../../../src/optics/field/launch.js";
import MinoltaSTFRaw from "../../../../../src/lens-data/minolta/MinoltaSTF135mmf28T45.data.js";
import CanonEF135Raw from "../../../../../src/lens-data/canon/CanonEF135mmf2LUSM.data.js";
import FisheyeRaw from "../../../../../src/lens-data/olympus/OlympusMZuiko8mmf18FisheyePRO.data.js";
import SonyFE20Raw from "../../../../../src/lens-data/sony/SonyFE20mmf18G.data.js";
import { evenlySpacedSigned } from "../../../../../src/optics/analysis/sampling.js";
import { prepareRayTrace } from "../../../../../src/optics/trace/rayAdapters.js";
import { solveChiefRayForRuntimeLens } from "../../../../../src/optics/state/fieldAdapters.js";
import {
  analysisRequestAt,
  apertureAt,
  build,
  buildSimplePositiveElementLens,
  sharedNikkorZ70200,
  sharedSonnar50f15,
} from "../../testLensFixtures.js";
import type { RuntimeLens, LensData } from "../../../../../src/types/optics.js";

/* ── Helpers ── */

function withImageFormat(L: RuntimeLens, imageFormat: LensData["imageFormat"]): RuntimeLens {
  return registerRuntimeFixture({
    ...L,
    data: {
      ...constructionFixtureData(L),
      imageFormat,
    },
  } as RuntimeLens);
}

function computeVignettingCurve(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  fieldGeometry?: FieldGeometryState,
  aberrationT = 0,
) {
  return computeVignettingCurveBase(
    analysisRequestAt(L, { zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, fieldGeometry, aberrationT }),
  );
}

describe("computeVignettingCurve", () => {
  /* ── Basic curve shape ── */

  it("returns at least 7 samples for Sonnar 50/1.5", () => {
    const L = sharedSonnar50f15();
    const { z: zPos } = doLayout(0, 0, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, 0, 0);

    const samples = computeVignettingCurve(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    /* Adaptive field sampling: ~3° spacing, minimum 7 samples */
    expect(samples.length).toBeGreaterThanOrEqual(7);
  });

  it("on-axis geometricTransmission is 1.0", () => {
    const L = sharedSonnar50f15();
    const { z: zPos } = doLayout(0, 0, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, 0, 0);

    const samples = computeVignettingCurve(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(samples[0].geometricTransmission).toBeCloseTo(1.0, 5);
  });

  it("on-axis relativeIllumination is 1.0", () => {
    const L = sharedSonnar50f15();
    const { z: zPos } = doLayout(0, 0, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, 0, 0);

    const samples = computeVignettingCurve(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(samples[0].relativeIllumination).toBeCloseTo(1.0, 5);
  });

  it("geometricTransmission does not significantly exceed 1.0 at any sample", () => {
    const L = sharedSonnar50f15();
    const { z: zPos } = doLayout(0, 0, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, 0, 0);

    // The Sonnar's stop image barely grows off axis, so its 2D beam stays within
    // a few percent of the axis's until rim vignetting sets in. (A retrofocus
    // wide-angle's does grow: see the Sony FE 20 mm case below.)
    const samples = computeVignettingCurve(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    for (const s of samples) {
      expect(s.geometricTransmission).toBeLessThanOrEqual(1.05);
    }
  });

  it("relativeIllumination ≤ geometricTransmission at all non-axis samples", () => {
    const L = sharedSonnar50f15();
    const { z: zPos } = doLayout(0, 0, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, 0, 0);

    const samples = computeVignettingCurve(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    for (let i = 1; i < samples.length; i++) {
      /* Per unit of transmitted area the image is dimmer off axis: cos θ over a growing image area per solid angle */
      expect(samples[i].relativeIllumination).toBeLessThanOrEqual(samples[i].geometricTransmission + 1e-9);
    }
  });

  it("all values are finite", () => {
    const L = sharedSonnar50f15();
    const { z: zPos } = doLayout(0, 0, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, 0, 0);

    const samples = computeVignettingCurve(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    for (const s of samples) {
      expect(isFinite(s.fieldAngleDeg)).toBe(true);
      expect(isFinite(s.geometricTransmission)).toBe(true);
      expect(isFinite(s.relativeIllumination)).toBe(true);
    }
  });

  it("applies the Minolta STF apodizer to relative illumination without changing geometric transmission", () => {
    const stf = build(MinoltaSTFRaw);
    const transparent = build({
      ...MinoltaSTFRaw,
      elements: MinoltaSTFRaw.elements.map((element) =>
        element.id === 5 ? { ...element, absorptionCoefficientPerMm: undefined } : element,
      ),
    });

    const curveFor = (L: RuntimeLens) => {
      const { z } = doLayout(0, 0, L);
      const { currentPhysStopSD, currentEPSD } = apertureAt(L, 0, 0);
      return computeVignettingCurve(L, z, 0, 0, currentEPSD, currentPhysStopSD);
    };
    const absorbed = curveFor(stf);
    const clear = curveFor(transparent);

    expect(absorbed).toHaveLength(clear.length);
    for (let i = 0; i < absorbed.length; i++) {
      expect(absorbed[i].geometricTransmission).toBeCloseTo(clear[i].geometricTransmission, 12);
    }
    expect(
      Math.max(
        ...absorbed
          .slice(1)
          .map((sample, index) => Math.abs(sample.relativeIllumination - clear[index + 1].relativeIllumination)),
      ),
    ).toBeGreaterThan(1e-3);
  });

  it("returns finite non-negative samples in exact mode when Sonnar rays survive", () => {
    const L = sharedSonnar50f15();
    const { z: zPos } = doLayout(0, 0, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, 0, 0);

    const samples = computeVignettingCurve(L, zPos, 0, 0, currentEPSD, currentPhysStopSD, undefined, 0);

    for (const sample of samples) {
      expect(isFinite(sample.fieldAngleDeg)).toBe(true);
      expect(isFinite(sample.geometricTransmission)).toBe(true);
      expect(isFinite(sample.relativeIllumination)).toBe(true);
      expect(sample.geometricTransmission).toBeGreaterThanOrEqual(0);
      expect(sample.relativeIllumination).toBeGreaterThanOrEqual(0);
    }
  });

  it("first sample field angle is 0°", () => {
    const L = sharedSonnar50f15();
    const { z: zPos } = doLayout(0, 0, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, 0, 0);

    const samples = computeVignettingCurve(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(samples[0].fieldAngleDeg).toBe(0);
  });

  /* ── Edge cases ── */

  it.each([
    [
      "computeVignettingCurve (currentEPSD zero or negative)",
      () => {
        const L = sharedSonnar50f15();
        const { z: zPos } = doLayout(0, 0, L);
        const { currentPhysStopSD } = apertureAt(L, 0, 0);
        return [
          computeVignettingCurve(L, zPos, 0, 0, 0, currentPhysStopSD),
          computeVignettingCurve(L, zPos, 0, 0, -1, currentPhysStopSD),
        ];
      },
    ],
    [
      "computeVignettingCurve (degenerate lens, L.N < 1)",
      () => [computeVignettingCurve(registerRuntimeFixture({ ...sharedSonnar50f15(), N: 0 }), [], 0, 0, 1, 1)],
    ],
  ])("%s returns an empty array", (_name, run) => {
    for (const samples of run()) {
      expect(samples).toEqual([]);
    }
  });

  it("stays aligned when using precomputed field geometry", () => {
    const L = sharedSonnar50f15();
    const focusT = 0.25;
    const zoomT = 0;
    const { z: zPos } = doLayout(focusT, zoomT, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, zoomT, 0.2);
    const geometry = computeAnalysisFieldGeometryAtState(focusT, zoomT, L);

    const withGeometry = computeVignettingCurve(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, geometry);
    const withoutGeometry = computeVignettingCurve(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);

    expect(withGeometry).toHaveLength(withoutGeometry.length);
    expect(withGeometry.at(-1)?.fieldAngleDeg).toBeCloseTo(withoutGeometry.at(-1)?.fieldAngleDeg ?? 0, 1);
  });

  it("samples to the analysis-limited image-format edge", () => {
    const L = withImageFormat(sharedSonnar50f15(), "aps-c");
    const { z: zPos } = doLayout(0, 0, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, 0, 0);
    const geometry = computeAnalysisFieldGeometryAtState(0, 0, L);

    const samples = computeVignettingCurve(L, zPos, 0, 0, currentEPSD, currentPhysStopSD, geometry);

    expect(samples.length).toBeGreaterThan(1);
    expect(samples[samples.length - 1].fieldAngleDeg).toBeCloseTo(geometry.halfFieldDeg, 10);
  });

  /* ── Vignetting direction ── */

  it("edge geometricTransmission remains finite at stopped-down Sonnar", () => {
    const L = sharedSonnar50f15();
    /* Stop down to f/8 to exaggerate vignetting asymmetry */
    const { z: zPos } = doLayout(0, 0, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, 0, 0.8);

    const samples = computeVignettingCurve(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(samples.length).toBeGreaterThan(1);
    const edgeSample = samples[samples.length - 1];
    expect(isFinite(edgeSample.geometricTransmission)).toBe(true);
    expect(edgeSample.geometricTransmission).toBeGreaterThanOrEqual(0);
  });

  it("edge relativeIllumination is less than geometricTransmission (oblique falloff)", () => {
    const L = sharedSonnar50f15();
    const { z: zPos } = doLayout(0, 0, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, 0, 0);

    const samples = computeVignettingCurve(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    const edgeSample = samples[samples.length - 1];
    /* At the field edge obliquity must reduce RI below GT */
    expect(edgeSample.relativeIllumination).toBeLessThan(edgeSample.geometricTransmission + 1e-9);
  });

  /* ── Zoom lens ── */

  it("produces samples for a zoom lens at tele position", () => {
    const L = sharedNikkorZ70200();
    if (!L.isZoom) return; // skip if not a zoom lens
    const { z: zPos } = doLayout(0, 1, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, 1, 0);

    const samples = computeVignettingCurve(L, zPos, 0, 1, currentEPSD, currentPhysStopSD);
    /* Adaptive field sampling: ~3° spacing, minimum 7 samples */
    expect(samples.length).toBeGreaterThanOrEqual(7);
    expect(samples[0].geometricTransmission).toBeCloseTo(1.0, 5);
    expect(samples[0].relativeIllumination).toBeCloseTo(1.0, 5);
  });

  /* ── 2D beam and energy figure ── */

  it("tends to cos⁴ for a thin lens with its stop at the lens and a small aperture", () => {
    const base = constructionFixtureData(buildSimplePositiveElementLens());
    const L = build({
      ...base,
      key: "test-thin-lens-stop-at-lens",
      surfaces: [
        { label: "STO", R: 1e15, nd: 1.0, sd: 3, d: 0.01, elemId: 0 },
        { label: "1", R: 100, nd: 1.5168, sd: 3, d: 0.3, elemId: 1 },
        { label: "2", R: -100, nd: 1.0, sd: 3, d: 96.7, elemId: 0 },
      ],
    });
    const samples = computeVignettingCurveBase(analysisRequestAt(L, { currentEPSD: 0.25, currentPhysStopSD: 0.25 }));
    expect(samples.at(-1)!.fieldAngleDeg).toBeGreaterThan(10);
    for (const sample of samples) {
      expect(sample.geometricTransmission).toBeCloseTo(1, 3);
      expect(sample.relativeIllumination).toBeCloseTo(Math.cos((sample.fieldAngleDeg * Math.PI) / 180) ** 4, 2);
    }
  });

  it("measures a retrofocus beam that outgrows the axis's at the field edge", () => {
    const L = build(SonyFE20Raw);
    const samples = computeVignettingCurveBase(analysisRequestAt(L, { sampling: { vignettingFieldSampleCount: 3 } }));
    // The stop's image grows off axis: at 47° the beam's area is 1.33× the axis's.
    expect(samples.at(-1)!.geometricTransmission).toBeGreaterThan(1.2);
    expect(samples[0]).toEqual({ fieldAngleDeg: 0, geometricTransmission: 1, relativeIllumination: 1 });
  });

  it("counts a vignetted beam's area below the old meridional chord", () => {
    const L = build(CanonEF135Raw);
    const request = analysisRequestAt(L, {});
    const samples = computeVignettingCurveBase(request);
    const edge = samples.at(-1)!;

    // The chord the tab traced before: 192 rays across the axis's entrance pupil at the solved chief ray.
    const { focusT, zoomT, aberrationT } = request.preparedGeometry;
    const trace = prepareRayTrace(L, {
      zPos: request.preparedGeometry.z as number[],
      focusT,
      zoomT,
      stopSD: request.aperture.stopSemiDiameterMm,
      ghost: true,
      aberrationT,
    });
    const chord = (fieldAngleDeg: number) => {
      const chief = solveChiefRayForRuntimeLens(fieldAngleDeg, focusT, zoomT, L, undefined, aberrationT);
      return evenlySpacedSigned(192).filter(
        (f) => !trace.ray(chief.yLaunch + f * request.aperture.entrancePupilSemiDiameterMm, chief.uField).clipped,
      ).length;
    };
    // A chord through a lens-shaped beam is a larger share of the diameter than the area is of the disc.
    expect(edge.geometricTransmission).toBeLessThan(chord(edge.fieldAngleDeg) / chord(0) - 0.05);
    expect(edge.geometricTransmission).toBeGreaterThan(0.2);
  });

  it("moves no field by more than 0.01 when the beam lattice doubles", () => {
    const L = build(CanonEF135Raw);
    const at = (cells: number) =>
      computeVignettingCurveBase(analysisRequestAt(L, { sampling: { vignettingPupilSampleCount: cells } }));
    const [coarse, fine] = [at(64), at(128)];
    expect(fine).toHaveLength(coarse.length);
    coarse.forEach((sample, i) => {
      expect(fine[i].fieldAngleDeg).toBe(sample.fieldAngleDeg);
      expect(Math.abs(fine[i].geometricTransmission - sample.geometricTransmission)).toBeLessThan(0.01);
      expect(Math.abs(fine[i].relativeIllumination - sample.relativeIllumination)).toBeLessThan(0.01);
    });
  });

  it("returns no curve for a state outside the beam model instead of mixing methods", () => {
    // A fisheye's fields launch on the bounding sphere, which the MTF's launch does not cover.
    const L = build(FisheyeRaw);
    expect(computeVignettingCurveBase(analysisRequestAt(L, {}))).toEqual([]);
  });
});
