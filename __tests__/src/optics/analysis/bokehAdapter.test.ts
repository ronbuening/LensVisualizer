import { describe, expect, it } from "vitest";
import {
  computeBestFocusZ2,
  computeBestFocusZForState2,
  computeBokehPreviewPair2,
  computeBokehPreviewPairForState2,
} from "../../../../src/optics/analysis/bokeh.js";
import { prepareRuntimeState } from "../../../../src/optics/compat.js";
import { apertureAt, buildSimplePositiveElementLens } from "../testLensFixtures.js";

describe("bokeh analysis adapter", () => {
  it("matches runtime best-focus and preview-pair helpers for a prepared state", () => {
    const lens = buildSimplePositiveElementLens("test-bokeh-adapter");
    const focusT = 0.15;
    const zoomT = 0;
    const state = prepareRuntimeState(lens, focusT, zoomT);
    const { currentEPSD, currentPhysStopSD } = apertureAt(lens, zoomT);

    expect(computeBestFocusZForState2(state, currentEPSD, currentPhysStopSD)).toEqual(
      computeBestFocusZ2(lens, focusT, zoomT, currentEPSD, currentPhysStopSD),
    );
    expect(computeBokehPreviewPairForState2(state, currentEPSD, currentPhysStopSD)).toEqual(
      computeBokehPreviewPair2(lens, focusT, zoomT, currentEPSD, currentPhysStopSD),
    );
  });
});
