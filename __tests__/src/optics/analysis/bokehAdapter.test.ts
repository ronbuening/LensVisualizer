import { computeBestFocusZ, createAnalysisRequest } from "../../../../src/optics/analysis.js";
import { doLayout } from "../../../../src/optics/layout.js";
import { describe, expect, it } from "vitest";
import { computeBokehPreviewPair2, computeBokehPreviewPairForState2 } from "../../../../src/optics/analysis/bokeh.js";
import { prepareRuntimeState } from "../../../../src/optics/compat.js";
import { apertureAt, buildSimplePositiveElementLens } from "../testLensFixtures.js";

describe("bokeh analysis adapter", () => {
  it("matches runtime best-focus and preview-pair helpers for a prepared state", () => {
    const lens = buildSimplePositiveElementLens("test-bokeh-adapter");
    const focusT = 0.15;
    const zoomT = 0;
    const state = prepareRuntimeState(lens, focusT, zoomT);
    const { currentEPSD, currentPhysStopSD } = apertureAt(lens, zoomT);

    const request = createAnalysisRequest({
      preparedState: state,
      dynamicEFL: lens.EFL,
      currentEPSD,
      currentPhysStopSD,
    });
    expect(Number.isFinite(computeBestFocusZ(request))).toBe(true);
    const closed = createAnalysisRequest({
      preparedState: state,
      dynamicEFL: lens.EFL,
      currentEPSD: 0,
      currentPhysStopSD: 0,
    });
    expect(computeBestFocusZ(closed)).toBe(doLayout(focusT, zoomT, lens).imgZ);
    expect(computeBokehPreviewPairForState2(state, currentEPSD, currentPhysStopSD)).toEqual(
      computeBokehPreviewPair2(lens, focusT, zoomT, currentEPSD, currentPhysStopSD),
    );
  });
});
