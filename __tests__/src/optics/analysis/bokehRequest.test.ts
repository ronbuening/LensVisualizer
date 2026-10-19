/** Request bokeh preserves separate source layouts, sampling and weighted best focus. */
import { describe, expect, it } from "vitest";
import {
  computeBestFocusZ,
  computeBokehPreview,
  computeBokehPreviewPair,
  computeBokehFieldFootprint,
  createAnalysisRequest,
  stateWithZ,
} from "../../../../src/optics/analysis.js";
import { doLayout } from "../../../../src/optics/layout.js";
import { prepareRuntimeState } from "../../../../src/optics/compat.js";
import { analysisRequestAt, buildSimplePositiveElementLens } from "../testLensFixtures.js";

describe("bokeh analysis requests", () => {
  it("pairs previews at their own source focus layouts and preserves sampling overrides", () => {
    const lens = buildSimplePositiveElementLens("test-bokeh-request");
    const focusT = 0.15;
    const requestAt = (focusT: number) =>
      analysisRequestAt(lens, {
        focusT,
        sampling: { bokehRingSamples: [1, 8, 16], bokehFieldFractions: [0, 0.5] },
      });
    const request = requestAt(focusT);
    const inf = requestAt(0);
    const near = requestAt(1);
    const complementary = requestAt(1 - focusT);
    const bf0 = computeBestFocusZ(inf);
    const bf1 = computeBestFocusZ(near);
    const infZ =
      bf0 + (doLayout(focusT, 0, lens).imgZ - doLayout(0, 0, lens).imgZ) + (bf0 - computeBestFocusZ(request));
    const nearZ =
      bf1 + (doLayout(1 - focusT, 0, lens).imgZ - doLayout(0, 0, lens).imgZ) + (bf0 - computeBestFocusZ(complementary));
    const pair = computeBokehPreviewPair(request);
    expect(pair).toStrictEqual({
      infinity: computeBokehPreview(inf, infZ, "Infinity"),
      nearFocus: computeBokehPreview(near, nearZ, "Near Focus"),
    });
    expect(pair.infinity!.fields.map((field) => field.fieldFraction)).toEqual([0, 0.5]);
    expect(pair.infinity!.fields[0].totalRays).toBe(25);

    // Camera anchoring and a view field override must not replace each source's layout/field solve.
    const shifted = createAnalysisRequest({
      preparedState: stateWithZ(
        request.preparedGeometry,
        request.preparedGeometry.z.map((z) => z + 123),
      ),
      dynamicEFL: 0,
      currentEPSD: request.aperture.entrancePupilSemiDiameterMm,
      currentPhysStopSD: request.aperture.stopSemiDiameterMm,
      sampling: request.sampling,
      fieldGeometry: { halfFieldDeg: 1, yRatio: 0.1, b: 0.2, epRatio: 0.3 },
    });
    expect(computeBokehPreviewPair(shifted)).toStrictEqual(pair);
    expect(computeBokehFieldFootprint(request, 0, infZ)!.totalRays).toBe(337);
  });

  it("keeps closed-aperture previews empty and best focus at the layout fallback", () => {
    const lens = buildSimplePositiveElementLens("test-bokeh-closed");
    const request = createAnalysisRequest({
      preparedState: prepareRuntimeState(lens, 0.15, 0),
      dynamicEFL: lens.EFL,
      currentEPSD: 0,
      currentPhysStopSD: 0,
    });
    expect(computeBestFocusZ(request)).toBe(doLayout(0.15, 0, lens).imgZ);
    expect(computeBokehPreviewPair(request)).toStrictEqual({ infinity: null, nearFocus: null });
  });
});
