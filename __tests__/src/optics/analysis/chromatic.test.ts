import { stateWithZ } from "../../../../src/optics/state/preparedGeometry.js";
import { createAnalysisRequest } from "../../../../src/optics/analysis/request.js";
import { describe, expect, it } from "vitest";
import { ingestLens } from "../../../../src/optics/lensDataConversion.js";
import { toLensDataInput } from "../../../../src/optics/prescription/v1/toLensData.js";
import { build, buildChromaticPositiveElementLens } from "../testLensFixtures.js";
import foldedFixture from "../../../../src/lens-data/reference/ReferenceCassegrainBackFocus.data.js";
import { prepareRuntimeState } from "../../../../src/optics/state/runtimeAdapters.js";
import { traceRayChromatic } from "../../../../src/optics/trace/rayAdapters.js";
import { computeChromaticRayFanAnalysis } from "../../../../src/optics/analysis/chromatic/rayFan.js";
import {
  computeChromaticAnalysis,
  computeLateralColorCurve,
  computeLongitudinalChromaticFocus,
} from "../../../../src/optics/analysis/chromatic/analysis.js";
import { doLayoutForRuntimeLens as doLayout } from "../../../../src/optics/state/runtimeAdapters.js";
import { traceChiefRelativeSkewRayChromatic } from "../../../../src/optics/trace/chiefRelative.js";
import {
  computeProjectionAwareOffAxisFieldGeometry,
  isOffAxisVectorFieldGeometry,
} from "../../../../src/optics/analysis/aberration/offAxis.js";

function chromaticFixture() {
  const L = buildChromaticPositiveElementLens();
  const { z } = doLayout(0, 0, L);
  return { L, z, currentEPSD: L.EP.epSD, currentPhysStopSD: L.stopPhysSD };
}

describe("chromatic analysis helpers", () => {
  it("reduces folded chromatic rays at the current focus image plane", () => {
    // Guard the shared reducer against tagging current-state heights with a build-time plane.
    const data = toLensDataInput(ingestLens(foldedFixture));
    const L = build({
      ...data,
      opticalPath: { mode: "auto", maxInteractions: 10 },
      surfaces: data.surfaces.map((surface) => (surface.label === "M1B" ? { ...surface, d: 33 } : surface)),
      var: { M1B: [33, 41.05] },
    });
    const state = prepareRuntimeState(L, 1, 0);
    const z = [...state.z];
    expect(L.isFoldedOptics).toBe(true);
    expect(state.imgZ - L.imagePlane.z).toBeCloseTo(8.05, 12);
    const result = computeChromaticRayFanAnalysis(
      createAnalysisRequest({
        preparedState: stateWithZ(prepareRuntimeState(L, 1, 0, 0), z),
        dynamicEFL: L.EFL,
        currentEPSD: L.EP.epSD,
        currentPhysStopSD: L.stopPhysSD,
      }),
    );
    const offAxis = result.spreads.offAxis!;
    const onAxis = result.spreads.onAxis!;
    expect(offAxis).not.toBeNull();
    expect(onAxis).not.toBeNull();
    const geometry = computeProjectionAwareOffAxisFieldGeometry(L, z, 1, 0, L.offAxisFieldFrac ?? 0.7)!;
    expect(isOffAxisVectorFieldGeometry(geometry)).toBe(false);
    if (isOffAxisVectorFieldGeometry(geometry)) return;
    for (const channel of result.channels) {
      const ray = traceChiefRelativeSkewRayChromatic(
        0,
        offAxis.fraction!,
        geometry.yChief,
        geometry.uField,
        L.EP.epSD,
        1,
        0,
        L.stopPhysSD,
        true,
        L,
        channel,
      );
      expect(ray.clipped).toBe(false);
      expect(offAxis.imagePlaneHeights[channel]).toBeCloseTo(ray.y, 12);
      expect(offAxis.axialIntercepts[channel]).toBeCloseTo(state.imgZ - ray.y / ray.uy, 12);
      const axialRay = traceRayChromatic(onAxis.fraction! * L.EP.epSD, 0, z, 1, 0, L.stopPhysSD, true, L, channel);
      expect(axialRay.reachedImagePlane).toBe(true);
      expect(axialRay.pts.at(-1)![0]).toBeCloseTo(state.imgZ, 12);
      expect(onAxis.imagePlaneHeights[channel]).toBeCloseTo(axialRay.y, 12);
      expect(onAxis.axialIntercepts[channel]).toBeCloseTo(state.imgZ - axialRay.y / axialRay.u, 12);
    }
  });

  it("computes axis-split ray-trace spreads for analysis callers", () => {
    const { L, z, currentEPSD, currentPhysStopSD } = chromaticFixture();

    const result = computeChromaticRayFanAnalysis(
      createAnalysisRequest({
        preparedState: stateWithZ(prepareRuntimeState(L, 0, 0, 0), z),
        dynamicEFL: L.EFL,
        currentEPSD: currentEPSD,
        currentPhysStopSD: currentPhysStopSD,
      }),
    );

    expect(result.channels).toEqual(["R", "G", "B", "V"]);
    expect(result.spreads.onAxis?.axis).toBe("onAxis");
    expect(result.spreads.offAxis?.axis).toBe("offAxis");
    expect(result.spreads.onAxis?.axialInterceptSpreadMm).toBeGreaterThan(0);
    expect(result.spreads.offAxis?.imagePlaneHeightSpreadMm).toBeGreaterThanOrEqual(0);
    expect(result.onAxisAttemptedRayCount).toBeGreaterThanOrEqual(3);
    expect(result.offAxisAttemptedRayCount).toBeGreaterThanOrEqual(3);
  });

  it("rejects the first scalar off-axis fraction and reduces all surviving channels at the next", () => {
    const { L, z } = chromaticFixture();
    const ep = 2;
    const stop = 1;
    const result = computeChromaticRayFanAnalysis(
      createAnalysisRequest({
        preparedState: stateWithZ(prepareRuntimeState(L, 0, 0, 0), z),
        dynamicEFL: L.EFL,
        currentEPSD: ep,
        currentPhysStopSD: stop,
      }),
      {
        offAxisFieldFraction: 0.01,
        offAxisFractions: [1, 0.1],
      },
    );
    expect(result.offAxisFieldAngleDeg).toBeGreaterThan(0);
    expect(result.offAxisAttemptedRayCount).toBe(8);
    expect(result.spreads.offAxis?.fraction).toBe(0.1);
    expect(result.spreads.offAxis?.channels).toEqual(["R", "G", "B", "V"]);
    const geometry = computeProjectionAwareOffAxisFieldGeometry(L, z, 0, 0, 0.01)!;
    expect(isOffAxisVectorFieldGeometry(geometry)).toBe(false);
    if (isOffAxisVectorFieldGeometry(geometry)) return;
    for (const channel of ["R", "G", "B", "V"] as const) {
      const clipped = traceChiefRelativeSkewRayChromatic(
        0,
        1,
        geometry.yChief,
        geometry.uField,
        ep,
        0,
        0,
        stop,
        true,
        L,
        channel,
      );
      const ray = traceChiefRelativeSkewRayChromatic(
        0,
        0.1,
        geometry.yChief,
        geometry.uField,
        ep,
        0,
        0,
        stop,
        true,
        L,
        channel,
      );
      expect(clipped.clipped).toBe(true);
      expect(ray.clipped).toBe(false);
      expect(result.spreads.offAxis?.imagePlaneHeights[channel]).toBeCloseTo(ray.y + ray.uy * L.S[L.N - 1].d, 12);
    }
  });

  it("normalizes channel and fraction order while ignoring request field geometry for fans", () => {
    const { L, currentEPSD, currentPhysStopSD } = chromaticFixture();
    const params = { preparedState: prepareRuntimeState(L, 0, 0), dynamicEFL: 0, currentEPSD, currentPhysStopSD };
    const options = { channels: ["V", "B", "G", "R", "G"] as const, onAxisFractions: [NaN, -0.5, 0, 0.5, 0.5] };
    const baseline = computeChromaticRayFanAnalysis(createAnalysisRequest(params), options);
    const overridden = computeChromaticRayFanAnalysis(
      createAnalysisRequest({
        ...params,
        fieldGeometry: { halfFieldDeg: 0, yRatio: 0, b: 0, epRatio: 0 },
      }),
      options,
    );
    expect(overridden).toEqual(baseline);
    expect(baseline.channels).toEqual(["R", "G", "B", "V"]);
    expect(baseline.spreads.onAxis?.fraction).toBe(0.5);
    expect(baseline.onAxisAttemptedRayCount).toBe(4);
    const noGreen = computeLongitudinalChromaticFocus(createAnalysisRequest(params), { channels: ["V", "B", "R"] });
    expect(noGreen?.channels).toEqual(["R", "B", "V"]);
    expect(noGreen?.referenceChannel).toBe("R");
    expect(noGreen?.samples[0].relativeFocusShiftMm).toBe(0);
  });

  it("combines the standalone focus and lateral summaries on one request", () => {
    const { L, z, currentEPSD, currentPhysStopSD } = chromaticFixture();
    const request = createAnalysisRequest({
      preparedState: stateWithZ(prepareRuntimeState(L, 0, 0), z),
      dynamicEFL: L.EFL,
      currentEPSD,
      currentPhysStopSD,
    });
    const options = { channels: ["R", "G", "B"] as const, fieldFractions: [0, 0.5, 1] };
    const combined = computeChromaticAnalysis(request, options);
    expect(combined.longitudinalFocus).not.toBeNull();
    expect(combined.lateralColor).not.toBeNull();
    expect(combined.longitudinalFocus).toEqual(computeLongitudinalChromaticFocus(request, options));
    expect(combined.lateralColor).toEqual(computeLateralColorCurve(request, options));
    expect(combined.lateralColor?.fieldFractions).toEqual([0, 0.5, 1]);
  });
});
