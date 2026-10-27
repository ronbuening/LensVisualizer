import { prepareRuntimeState } from "../../../../src/optics/state/runtimeAdapters.js";
import { stateWithZ } from "../../../../src/optics/state/preparedGeometry.js";
import { createAnalysisRequest } from "../../../../src/optics/analysis/request.js";
import { describe, expect, it } from "vitest";
import {
  computeChromaticAnalysis,
  computeLateralColorCurve,
  computeLongitudinalChromaticFocus,
} from "../../../../src/optics/analysis/chromatic/analysis.js";
import { doLayoutForRuntimeLens as doLayout } from "../../../../src/optics/state/runtimeAdapters.js";
import {
  computeOffAxisChannelFieldGeometry,
  computeOffAxisFieldGeometry,
  traceOffAxisChiefRay,
} from "../../../../src/optics/analysis/aberration/offAxis.js";
import type { OffAxisFieldGeometry } from "../../../../src/optics/analysis/aberration/offAxis.js";
import { CHROMATIC_CHANNEL_WAVELENGTH_NM } from "../../../../src/optics/chromatic/channels.js";
import { computeAnalysisFieldGeometryAtState } from "../../../../src/optics/state/fieldAdapters.js";
import { runtimeView } from "../../../../src/optics/prescription/runtimeView.js";
import { prepareStateSurfacesReal } from "../../../../src/optics/field/geometry.js";
import SonyFE20Raw from "../../../../src/lens-data/sony/SonyFE20mmf18G.data.js";
import CanonEF2470IIRaw from "../../../../src/lens-data/canon/CanonEF2470mmf28LII.data.js";
import type { ChromaticChannel } from "../../../../src/types/optics.js";
import { computeChromaticRayFanAnalysis } from "../../../../src/optics/analysis/chromatic/rayFan.js";
import { chromaticSpreadFromRays } from "../../../../src/optics/chromatic/zoneSelection.js";
import { formatChromaticZone } from "../../../../src/components/display/analysis/chromaticChartUtils.js";
import { constructionFixtureData } from "../constructionFixtures.js";
import {
  analysisRequestForLens,
  apertureAt,
  build,
  buildRearPlateAirEquivalentLens,
  buildRearPlateLens,
  buildSimplePositiveElementLens,
  REAR_PLATE_FIXTURE,
  sharedApoLanthar50f2,
  sharedSonnar50f15,
} from "../testLensFixtures.js";

function finiteSpan(values: number[]): number {
  return Math.max(...values) - Math.min(...values);
}

describe("chromatic analysis helpers", () => {
  it("adds a modeled rear plate's own axial color, t(1 - 1/n) per channel, over the air-equivalent fold", () => {
    const plated = buildRearPlateLens();
    const folded = buildRearPlateAirEquivalentLens();
    const focusByChannel = (L: typeof plated) => {
      const { z: zPos } = doLayout(0, 0, L);
      const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0);
      const result = computeLongitudinalChromaticFocus(
        createAnalysisRequest({
          preparedState: stateWithZ(prepareRuntimeState(L, 0, 0, 0), zPos),
          dynamicEFL: L.EFL,
          currentEPSD: currentEPSD,
          currentPhysStopSD: currentPhysStopSD,
        }),
        {
          channels: ["R", "G", "B"],
          longitudinalFractions: [0.02],
        },
      )!;
      return Object.fromEntries(result.samples.map((sample) => [sample.channel, sample.focusZ!]));
    };
    const withPlate = focusByChannel(plated);
    const withoutPlate = focusByChannel(folded);
    const plateIndex = plated.indexByIdx[plated.lastLensSurfaceIdx + 1];

    /* Near-axial rays: the residual is the plate's own ~1e-5 mm spherical term at this aperture. */
    for (const channel of ["R", "G", "B"] as const) {
      const n = plateIndex.fn(channel);
      expect(withPlate[channel] - withoutPlate[channel]).toBeCloseTo(REAR_PLATE_FIXTURE.thicknessMm * (1 - 1 / n), 4);
    }
  });

  it("computes longitudinal focus shifts from the outermost usable marginal chromatic ray", () => {
    const L = sharedApoLanthar50f2();
    const focusT = 0;
    const zoomT = 0;
    const { z: zPos } = doLayout(focusT, zoomT, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, zoomT);

    const result = computeLongitudinalChromaticFocus(
      createAnalysisRequest({
        preparedState: stateWithZ(prepareRuntimeState(L, focusT, zoomT, 0), zPos),
        dynamicEFL: L.EFL,
        currentEPSD: currentEPSD,
        currentPhysStopSD: currentPhysStopSD,
      }),
      {
        channels: ["R", "G", "B", "V"],
      },
    );

    expect(result).not.toBeNull();
    expect(result!.referenceChannel).toBe("G");
    expect(result!.channels).toEqual(["R", "G", "B", "V"]);
    expect(result!.validChannelCount).toBeGreaterThanOrEqual(2);
    expect(result!.marginalFraction).toBeGreaterThan(0);
    expect(result!.spread.axis).toBe("onAxis");
    expect(result!.spread.fraction).toBe(result!.marginalFraction);
    expect(result!.longitudinalSpreadUm).toBeCloseTo(result!.longitudinalSpreadMm * 1000, 9);

    const focusValues = result!.samples
      .map((sample) => sample.focusZ)
      .filter((focusZ): focusZ is number => focusZ !== null);
    expect(result!.longitudinalSpreadMm).toBeCloseTo(finiteSpan(focusValues), 9);
    for (const sample of result!.samples.filter((sample) => sample.usable)) {
      expect(sample.focusShiftMm).toBeCloseTo(sample.focusZ! - result!.imagePlaneZ, 9);
    }
  });

  it("computes lateral color as chromatic chief-ray image-height spread across field", () => {
    const L = sharedSonnar50f15();
    const focusT = 0;
    const zoomT = 0;
    const { z: zPos } = doLayout(focusT, zoomT, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, zoomT, 0.25);

    const result = computeLateralColorCurve(
      createAnalysisRequest({
        preparedState: stateWithZ(prepareRuntimeState(L, focusT, zoomT, 0), zPos),
        dynamicEFL: L.EFL,
        currentEPSD: currentEPSD,
        currentPhysStopSD: currentPhysStopSD,
      }),
      {
        channels: ["R", "G", "B"],
        fieldFractions: [0, 0.5, 1],
      },
    );

    expect(result).not.toBeNull();
    expect(result!.channels).toEqual(["R", "G", "B"]);
    expect(result!.fields).toHaveLength(3);
    expect(result!.usableFieldCount).toBeGreaterThan(0);
    expect(result!.maxLateralSpreadUm).toBeCloseTo(result!.maxLateralSpreadMm * 1000, 9);

    const usableField = result!.fields.find((field) => field.usable);
    expect(usableField).toBeTruthy();
    const imageHeights = usableField!.samples
      .map((sample) => sample.imageHeightMm)
      .filter((height): height is number => height !== null);
    expect(usableField!.lateralSpreadMm).toBeCloseTo(finiteSpan(imageHeights), 9);
    expect(usableField!.samples.find((sample) => sample.channel === "G")?.relativeHeightMm).toBeCloseTo(0, 9);
  });

  it("traces each channel's own chief ray through the stop for lateral color", () => {
    // A wide-angle with strong pupil chromatism: at its 47° edge one shared launch misses the stop by 0.17 mm at F.
    const request = analysisRequestForLens(build(SonyFE20Raw));
    const state = request.preparedGeometry;
    const curve = computeLateralColorCurve(request, { channels: ["R", "G", "B", "V"], fieldFractions: [1] })!;
    const [field] = curve.fields;
    const fieldGeometry = computeAnalysisFieldGeometryAtState(0, 0, runtimeView(state.lens));
    const shared = computeOffAxisFieldGeometry(state, 1, fieldGeometry) as OffAxisFieldGeometry;
    const height = (channel: ChromaticChannel) => field.samples.find((sample) => sample.channel === channel)!;
    const sharedHeight = (channel: ChromaticChannel) => traceOffAxisChiefRay(request, shared, channel)!.imagePoint.y;

    for (const channel of curve.channels) {
      const own = computeOffAxisChannelFieldGeometry(state, 1, channel, fieldGeometry) as OffAxisFieldGeometry;
      expect(own.fieldAngleDeg).toBe(field.fieldAngleDeg);
      const traceStop = prepareStateSurfacesReal(state, {
        stopAt: state.lens.stop.surfaceIndex,
        indexAtSurface: (i, nd) => state.lens.dispersion[i]?.indexAt(channel) ?? nd,
        wavelengthNm: CHROMATIC_CHANNEL_WAVELENGTH_NM[channel],
      });
      expect(Math.abs(traceStop(own.yChief, own.uField).y)).toBeLessThan(1e-7);
    }

    // The reference channel's own chief ray is the shared one, to the bit.
    expect((computeOffAxisChannelFieldGeometry(state, 1, "G", fieldGeometry) as OffAxisFieldGeometry).yChief).toBe(
      shared.yChief,
    );
    expect(height("G").imageHeightMm).toBe(sharedHeight("G"));
    for (const channel of ["R", "B"] as const) {
      const single = sharedHeight(channel) - sharedHeight("G");
      expect(Math.abs(height(channel).relativeHeightMm! - single)).toBeGreaterThan(1e-4);
    }
  });

  it("keeps every lateral color channel equal through glass without dispersion", () => {
    const base = constructionFixtureData(buildSimplePositiveElementLens());
    const L = build({ ...base, elements: base.elements.map(({ vd: _vd, ...element }) => element) });
    const request = analysisRequestForLens(L);
    const curve = computeLateralColorCurve(request, { channels: ["R", "G", "B", "V"], fieldFractions: [0.5, 1] })!;
    const shared = computeOffAxisFieldGeometry(
      request.preparedGeometry,
      1,
      computeAnalysisFieldGeometryAtState(0, 0, L),
    )!;
    for (const field of curve.fields) {
      expect(field.lateralSpreadMm).toBe(0);
      for (const sample of field.samples) expect(sample.relativeHeightMm).toBe(0);
    }
    expect(curve.fields[1].referenceImageHeightMm).toBe(traceOffAxisChiefRay(request, shared, "G")!.imagePoint.y);
  });

  it("compares every requested channel in a fan at the outermost fraction that admits them all", () => {
    // Wide open, a rim behind the stop vignettes blue's and violet's aimed 0.97 R zone, so the fan passes it by.
    const request = analysisRequestForLens(sharedSonnar50f15());
    const fans = computeChromaticRayFanAnalysis(request, { channels: ["R", "G", "B", "V"] });
    expect(fans.spreads.onAxis).toMatchObject({ fraction: 0.95, channels: ["R", "G", "B", "V"], omittedChannels: [] });

    // Offered only 0.97 R, the fan falls back to the channels that pass and names the others.
    const fallback = computeChromaticRayFanAnalysis(request, {
      channels: ["R", "G", "B", "V"],
      onAxisFractions: [0.97],
    }).spreads.onAxis!;
    expect(fallback.fraction).toBe(0.97);
    expect(fallback.channels).toEqual(["R", "G"]);
    expect(fallback.omittedChannels).toEqual([
      { channel: "B", reason: "vignetted" },
      { channel: "V", reason: "vignetted" },
    ]);
    expect(formatChromaticZone(fallback)).toBe("0.97 R, R–G; B, V vignetted");
  });

  it("picks a traced fan's fraction by the same rule, and states a fallback's missing channels", () => {
    const ray = (channel: ChromaticChannel, fraction: number, clipped = false) => ({
      channel,
      fraction,
      y: fraction - 0.01 * "RGBV".indexOf(channel),
      u: -0.1,
      clipped,
    });
    const allAtInner = chromaticSpreadFromRays(
      [ray("R", 0.75), ray("G", 0.75), ray("B", 0.75, true), ray("R", -0.75), ray("G", -0.75), ray("B", -0.75)],
      ["R", "G", "B"],
      60,
      20,
    );
    expect(allAtInner).toMatchObject({ fraction: -0.75, channels: ["R", "G", "B"], omittedChannels: [] });

    // Blue is clipped at every fraction and violet was never traced: the first fraction two channels pass is used.
    const fallback = chromaticSpreadFromRays(
      [ray("R", 0.5), ray("G", 0.5), ray("B", 0.5, true), ray("R", 0.75), ray("G", 0.75), ray("B", 0.75, true)],
      ["R", "G", "B", "V"],
      60,
      20,
    )!;
    expect(fallback.fraction).toBe(0.75);
    expect(fallback.channels).toEqual(["R", "G"]);
    expect(fallback.omittedChannels).toEqual([
      { channel: "B", reason: "vignetted" },
      { channel: "V", reason: "untraced" },
    ]);
    expect(formatChromaticZone(fallback, "EP")).toBe("0.75 EP, R–G; B vignetted; V not traced");
    expect(chromaticSpreadFromRays([ray("R", 0.5), ray("G", 0.5, true)], ["R", "G"], 60, 20)).toBeNull();
  });

  it("names a lateral color field's channel whose chief ray a rim clips", () => {
    // Wide open at 24 mm, a rim clips red's full-field chief ray while green, blue and violet reach the image.
    const result = computeLateralColorCurve(analysisRequestForLens(build(CanonEF2470IIRaw)), {
      fieldFractions: [0, 1],
    })!;
    const edge = result.fields.find((field) => field.fieldFraction === 1)!;
    expect(edge.usable).toBe(true);
    expect(edge.omittedChannels).toEqual([{ channel: "R", reason: "vignetted" }]);
    expect(edge.validChannelCount).toBe(3);
    expect(edge.samples.find((sample) => sample.channel === "R")).toMatchObject({ usable: false, clipped: true });
    expect(result.fields.find((field) => field.fieldFraction === 0)!.omittedChannels).toEqual([]);
    expect(result.maxLateralFieldFraction).toBe(1);
  });

  it("returns combined chromatic analysis with nullable sections instead of throwing on insufficient channels", () => {
    const L = sharedSonnar50f15();
    const focusT = 0;
    const zoomT = 0;
    const { z: zPos } = doLayout(focusT, zoomT, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, zoomT, 0.25);

    const full = computeChromaticAnalysis(
      createAnalysisRequest({
        preparedState: stateWithZ(prepareRuntimeState(L, focusT, zoomT, 0), zPos),
        dynamicEFL: L.EFL,
        currentEPSD: currentEPSD,
        currentPhysStopSD: currentPhysStopSD,
      }),
      {
        channels: ["R", "G", "B"],
        fieldFractions: [0, 1],
      },
    );
    expect(full.longitudinalFocus).not.toBeNull();
    expect(full.lateralColor).not.toBeNull();

    const oneChannel = computeChromaticAnalysis(
      createAnalysisRequest({
        preparedState: stateWithZ(prepareRuntimeState(L, focusT, zoomT, 0), zPos),
        dynamicEFL: L.EFL,
        currentEPSD: currentEPSD,
        currentPhysStopSD: currentPhysStopSD,
      }),
      {
        channels: ["G"],
      },
    );
    expect(oneChannel.longitudinalFocus).toBeNull();
    expect(oneChannel.lateralColor).toBeNull();
  });
});
