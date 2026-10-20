// @vitest-environment jsdom

import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import AberrationsPanel from "../../../../../src/components/display/analysis/AberrationsPanel.js";
import BokehTab from "../../../../../src/components/display/analysis/BokehTab.js";
import ChromaticTab from "../../../../../src/components/display/analysis/ChromaticTab.js";
import DistortionTab from "../../../../../src/components/display/analysis/DistortionTab.js";
import VignettingTab from "../../../../../src/components/display/analysis/VignettingTab.js";
import PupilAberrationTab from "../../../../../src/components/display/analysis/PupilAberrationTab.js";
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
  it.each([
    { Tab: VignettingTab, title: "Perspective vignetting — absolute fixed-sensor flux" },
    { Tab: PupilAberrationTab, title: "Perspective pupil analysis — lens and camera frames" },
  ])("renders $title from the deferred request", ({ Tab, title }) => {
    const html = renderToStaticMarkup(React.createElement(Tab, common));
    expect(html).toContain(title);
    const liveProps = { ...common, focusT: 1, currentEPSD: currentEPSD / 2, currentPhysStopSD: currentPhysStopSD / 2 };
    expect(renderToStaticMarkup(React.createElement(Tab, liveProps))).toBe(html);
    const changedContext = createAnalysisComputationContext({
      ...analysisContext.request,
      aperture: { entrancePupilSemiDiameterMm: currentEPSD / 2, stopSemiDiameterMm: currentPhysStopSD / 2 },
    });
    expect(renderToStaticMarkup(React.createElement(Tab, { ...common, analysisContext: changedContext }))).not.toBe(
      html,
    );
  });

  it("renders scene-locked distortion decomposition from the deferred request", () => {
    const html = renderToStaticMarkup(React.createElement(DistortionTab, { ...common, dynamicEFL: L.EFL }));
    expect(html).toContain("Perspective distortion — fixed sensor");
    expect(html).toContain("Composition");
    expect(html).toContain("Optical residual");
    expect(html).toContain("TOP RESIDUAL");
    expect(html).toContain("BOTTOM RESIDUAL");
    expect(html).not.toContain("Rectilinear distortion (F-Tan(theta))");

    // Live slider props must not replace the context's deferred focus or aperture snapshot.
    const liveProps = { ...common, focusT: 1, currentEPSD: currentEPSD / 2, currentPhysStopSD: currentPhysStopSD / 2 };
    expect(renderToStaticMarkup(React.createElement(DistortionTab, { ...liveProps, dynamicEFL: L.EFL * 2 }))).toBe(
      html,
    );
    expect(renderToStaticMarkup(React.createElement(ChromaticTab, liveProps))).toBe(
      renderToStaticMarkup(React.createElement(ChromaticTab, common)),
    );
  });

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
