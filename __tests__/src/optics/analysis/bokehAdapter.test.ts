import { describe, expect, it } from "vitest";
import {
  buildBokehDensityGrid2,
  buildBokehRadialProfile2,
  classifyBokehBrightnessCharacter2,
  computeBestFocusZ2,
  computeBestFocusZForState2,
  computeBokehPreviewPair2,
  computeBokehPreviewPairForState2,
  describeBokehDefocusSide2,
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

  it("re-exports bokeh data-shaping helpers under v2 names", () => {
    const samples = [
      { index: 0, sagittalOffset: 0, tangentialOffset: 0, pupilRadius: 0, pupilAzimuth: 0, weight: 1 },
      { index: 1, sagittalOffset: 0.2, tangentialOffset: 0, pupilRadius: 0.5, pupilAzimuth: 0, weight: 1 },
      { index: 2, sagittalOffset: 0.4, tangentialOffset: 0, pupilRadius: 1, pupilAzimuth: 0, weight: 1 },
    ];

    const profile = buildBokehRadialProfile2(samples, 0, 0, 4);
    const densityGrid = buildBokehDensityGrid2(samples, 0.5, 5);
    const centerBright = classifyBokehBrightnessCharacter2({
      bins: [],
      centerDensity: 2,
      rimDensity: 1,
    });
    const edgeBright = classifyBokehBrightnessCharacter2({
      bins: [],
      centerDensity: 0.5,
      rimDensity: 1,
    });

    expect(profile.bins).toHaveLength(4);
    expect(profile.centerDensity).toBeGreaterThanOrEqual(0);
    expect(densityGrid.length).toBeGreaterThan(0);
    expect(centerBright.brightnessCharacter).toBe("center-bright");
    expect(edgeBright.brightnessCharacter).toBe("edge-bright");
    expect(describeBokehDefocusSide2(-0.2)).toBe("Front defocus");
  });
});
