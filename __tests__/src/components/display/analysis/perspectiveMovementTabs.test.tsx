// @vitest-environment jsdom

import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import AberrationsPanel from "../../../../../src/components/display/analysis/AberrationsPanel.js";
import BokehTab from "../../../../../src/components/display/analysis/BokehTab.js";
import ChromaticTab from "../../../../../src/components/display/analysis/ChromaticTab.js";
import ComaTab from "../../../../../src/components/display/analysis/ComaTab.js";
import buildLens from "../../../../../src/optics/buildLens.js";
import { createAnalysisComputationContext, prepareRuntimeState } from "../../../../../src/optics/compat.js";
import { createPerspectiveTraceContext } from "../../../../../src/optics/perspective/index.js";
import { LENS_CATALOG } from "../../../../../src/utils/catalog/lensCatalog.js";
import themes from "../../../../../src/utils/theme/themes.js";
import { apertureAt } from "../../../optics/testLensFixtures.js";

const L = buildLens(LENS_CATALOG["nikon-pc-nikkor-19mm-f4e-ed"]);
const focusT = 0;
const zoomT = 0;
const preparedState = prepareRuntimeState(L, focusT, zoomT);
const { currentEPSD, currentPhysStopSD } = apertureAt(L, zoomT, 0.25);
const perspectiveTraceContext = createPerspectiveTraceContext({
  preparedState,
  movement: { shiftMm: 3, tiltDeg: 2 },
  tiltPivot: L.perspectiveControl?.tiltPivot,
});
const analysisContext = createAnalysisComputationContext({
  preparedState,
  dynamicEFL: L.EFL,
  currentEPSD,
  currentPhysStopSD,
  sampling: {
    bokehRingSamples: [1, 4, 8],
    sphericalBlurRingSamples: [1, 4, 8],
    comaRingSamples: [1, 4, 8],
    fieldCurvatureDiagnosticSampleCount: 5,
    chromaticLongitudinalFractions: [0.5],
  },
  perspectiveTraceContext,
});

const common = {
  L,
  t: themes.dark,
  focusT,
  zoomT,
  currentEPSD,
  currentPhysStopSD,
  preparedState,
  analysisContext,
};

describe("movement-aware perspective analysis tabs", () => {
  it("renders intrinsic SA separately from signed fixed-sensor field focus", () => {
    expect(analysisContext.movementActive).toBe(true);
    const html = renderToStaticMarkup(
      React.createElement(AberrationsPanel, {
        ...common,
        zPos: [...preparedState.z],
        expanded: true,
      }),
    );

    expect(html).toContain("Intrinsic Lens-Axis Spherical Aberration (Classical)");
    expect(html).toContain("Fixed-Sensor Field Focus &amp; Astigmatism");
    expect(html).toContain("Petzval sum/reference remains intrinsic and lens-local");
    expect(html).toContain('data-perspective-field-v="-1"');
    expect(html).toContain('data-perspective-field-v="0"');
    expect(html).toContain('data-perspective-field-v="1"');
    expect(html).not.toContain("Parabasal field curves with independent scale");
  });

  it("renders signed fixed-sensor bokeh and blur footprints", () => {
    const html = renderToStaticMarkup(React.createElement(BokehTab, common));

    expect(html).toContain("Fixed-Sensor Bokeh &amp; Blur Footprints");
    expect(html).toContain("Top 100%");
    expect(html).toContain("Sensor center");
    expect(html).toContain("Bottom 100%");
    expect(html).toContain('data-perspective-bokeh-v="-1"');
    expect(html).toContain('data-perspective-bokeh-v="1"');
    expect(html).not.toContain("Bokeh / Defocused Point Image");
  });

  it("renders fixed-sensor coma point clouds and retained ray fans", () => {
    const html = renderToStaticMarkup(
      React.createElement(ComaTab, {
        ...common,
        zPos: [...preparedState.z],
      }),
    );

    expect(html).toContain("Fixed-Sensor Coma Footprints &amp; Ray Fans");
    expect(html).toContain("normalized pupil -1 to +1");
    expect(html).toContain('data-perspective-coma-v="-1"');
    expect(html).toContain('data-perspective-coma-v="0"');
    expect(html).toContain('data-perspective-coma-v="1"');
    expect(html).not.toContain("Detailed fan field");
  });

  it("keeps intrinsic LoCA while rendering moved sensor focus, TCA, and chromatic fans", () => {
    const html = renderToStaticMarkup(React.createElement(ChromaticTab, common));

    expect(html).toContain("Intrinsic Lens-Axis LoCA (Classical)");
    expect(html).toContain("Fixed-Sensor Chromatic Focus, TCA &amp; Ray Fans");
    expect(html).toContain("Fixed-Sensor Chromatic Ray Fans");
    expect(html).toContain('data-perspective-chromatic-v="-1"');
    expect(html).toContain('data-perspective-chromatic-v="0"');
    expect(html).toContain('data-perspective-chromatic-v="1"');
    expect(html).toContain('data-chromatic-channel="R"');
    expect(html).toContain('data-chromatic-channel="G"');
  });
});
