import { describe, it, expect } from "vitest";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import buildLens from "../src/optics/buildLens.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import { doLayout, eflAtFocus, epAtZoom, fopenAtZoom } from "../src/optics/optics.js";
import AberrationsPanel from "../src/components/display/AberrationsPanel.js";
import BokehPreviewOverlayContent from "../src/components/display/BokehPreviewOverlayContent.js";
import ComaTab from "../src/components/display/ComaTab.js";
import DistortionChart from "../src/components/display/DistortionChart.js";
import DistortionTab from "../src/components/display/DistortionTab.js";
import FocusBreathingTab from "../src/components/display/FocusBreathingTab.js";
import { computeBokehPreview } from "../src/optics/aberrationAnalysis.js";
import themes from "../src/utils/themes.js";
import Sonnar50f15Raw from "../src/lens-data/ZeissSonnar50f15.data.js";
import type { DistortionSample } from "../src/optics/distortionAnalysis.js";
import type { LensData, RuntimeLens } from "../src/types/optics.js";

function build(raw: object): RuntimeLens {
  return buildLens({ ...LENS_DEFAULTS, ...raw } as LensData);
}

function apertureAt(L: RuntimeLens, zoomT: number, stopdownT: number) {
  const currentFOPEN = fopenAtZoom(zoomT, L);
  const rawFNumber = L.FOPEN * Math.pow(L.maxFstop / L.FOPEN, stopdownT);
  const fNumber = Math.max(rawFNumber, currentFOPEN);
  const currentPhysStopSD = (L.stopPhysSD * L.FOPEN) / fNumber;
  const currentEPSD = (epAtZoom(zoomT, L) * L.FOPEN) / fNumber;
  return { currentPhysStopSD, currentEPSD };
}

describe("analysis display tabs", () => {
  it("DistortionChart labels the x-axis as image height percentage", async () => {
    const samples: DistortionSample[] = [
      {
        fieldAngleDeg: 0,
        normalizedImageHeight: 0,
        imageHeight: 0,
        distortionPercent: 0,
        realHeight: 0,
        idealHeight: 0,
        idealFieldAngleDeg: 0,
      },
      {
        fieldAngleDeg: 12,
        normalizedImageHeight: 1,
        imageHeight: -20,
        distortionPercent: 1.25,
        realHeight: -20,
        idealHeight: -19.75,
        idealFieldAngleDeg: 11.9,
      },
    ];

    const html = renderToStaticMarkup(React.createElement(DistortionChart, { samples, t: themes.dark }));
    expect(html).toContain("Image height (% of edge)");
    expect(html).toContain("No distortion");
    expect(html).toContain("100%");
    expect(html).not.toContain("Field angle (°)");
  });

  it("DistortionTab renders standardized rectilinear distortion copy and separate breathing metric", () => {
    const L = build(Sonnar50f15Raw);
    const focusT = 0.5;
    const zoomT = 0;
    const { z: zPos } = doLayout(focusT, zoomT, L);
    const dynamicEFL = eflAtFocus(focusT, zoomT, L);
    const { currentPhysStopSD } = apertureAt(L, zoomT, 0);

    const html = renderToStaticMarkup(
      React.createElement(DistortionTab, {
        L,
        t: themes.dark,
        zPos,
        focusT,
        zoomT,
        dynamicEFL,
        currentPhysStopSD,
      }),
    );

    expect(html).toContain("Rectilinear distortion (F-Tan(theta))");
    expect(html).toContain("near-axis rectilinear reference");
    expect(html).toContain("fixed image height");
    expect(html).toContain("Traced field grid");
    expect(html).toContain("Solid = traced chief-ray field");
    expect(html).toContain("real field trace rather than a radial approximation");
    expect(html).toContain("BREATHING");
    expect(html).toContain("HEIGHT");
    expect(html).toContain("ANGLE");
    expect(html).not.toContain(">FIELD<");
  });

  it("AberrationsPanel renders spherical aberration and field-curve content", () => {
    const L = build(Sonnar50f15Raw);
    const focusT = 0;
    const zoomT = 0;
    const { z: zPos } = doLayout(focusT, zoomT, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, zoomT, 0);

    const html = renderToStaticMarkup(
      React.createElement(AberrationsPanel, {
        L,
        t: themes.dark,
        zPos,
        focusT,
        zoomT,
        currentEPSD,
        currentPhysStopSD,
        expanded: true,
      }),
    );

    expect(html).toContain("Spherical Aberration");
    expect(html).toContain("Field Curves");
    expect(html).toContain("Astigmatism");
    expect(html).toContain("The first chart shows parabasal tangential and sagittal field curves");
    expect(html).toContain("These charts plot the tangential-sagittal best-focus difference");
    expect(html).toContain("Parabasal field curves with independent scale");
    expect(html).toContain("Real-ray field curves with independent scale and checkpoint markers");
    expect(html).toContain("keeping astigmatic split readable even when field curves shift far");
    expect(html).not.toContain("Coma Preview");
    expect(html).not.toContain("Meridional Coma");
  });

  it("ComaTab renders the spot-grid and ray-fan coma content", () => {
    const L = build(Sonnar50f15Raw);
    const focusT = 0;
    const zoomT = 0;
    const { z: zPos } = doLayout(focusT, zoomT, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, zoomT, 0);

    const html = renderToStaticMarkup(
      React.createElement(ComaTab, {
        L,
        t: themes.dark,
        zPos,
        focusT,
        zoomT,
        currentEPSD,
        currentPhysStopSD,
      }),
    );

    expect(html).toContain("Spot Diagram (Real-Ray)");
    expect(html).toContain("higher-resolution chief-ray-referenced real-ray spot grid");
    expect(html).toContain("Idealized coma comparison");
    expect(html).toContain("Crosshair = chief-ray reference");
    expect(html).toContain("Diamond = centroid");
    expect(html).toContain("Circle = RMS radius");
    expect(html).toContain("Center");
    expect(html).toContain("25%");
    expect(html).toContain("50%");
    expect(html).toContain("75%");
    expect(html).toContain("Tangential Ray Fan");
    expect(html).toContain("Tangential ray fan using a dense off-axis meridional pupil sweep");
    expect(html).toContain("Chief ray");
    expect(html).toContain("COMA SPAN");
    expect(html).not.toContain("Spherical Aberration");
    expect(html).not.toContain("Field Curves &amp; Astigmatism");
  });

  it("BokehPreviewOverlayContent renders both traced subject-distance grids during SSR", () => {
    const L = build(Sonnar50f15Raw);
    const focusT = 0.5;
    const zoomT = 0;
    const { z: zPos } = doLayout(focusT, zoomT, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, zoomT, 0.35);
    const result = computeBokehPreview(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);

    expect(result).not.toBeNull();

    const html = renderToStaticMarkup(
      React.createElement(BokehPreviewOverlayContent, {
        result,
        t: themes.dark,
      }),
    );

    expect(html).toContain("Bokeh Preview (Beta)");
    expect(html).toContain("Infinity subject");
    expect(html).toContain("Minimum-focus subject");
    expect(html).toContain("Density darkening comes from accumulated weighted ray hits");
    expect(html).toContain("Crosshair = chief-ray reference");
    expect(html).toContain("Stop model = Circular stop silhouette");
    expect(html).toContain('data-bokeh-footer="infinity-50%"');
    expect(html).toContain("RMS ");
  });

  it("FocusBreathingTab renders the breathing chart and summary metrics", () => {
    const L = build(Sonnar50f15Raw);
    const focusT = 0.5;
    const zoomT = 0;
    const dynamicEFL = eflAtFocus(focusT, zoomT, L);

    const html = renderToStaticMarkup(
      React.createElement(FocusBreathingTab, {
        L,
        t: themes.dark,
        focusT,
        zoomT,
        dynamicEFL,
      }),
    );

    expect(html).toContain("Focus breathing");
    expect(html).toContain("Effective focal length shift");
    expect(html).toContain("CURRENT");
    expect(html).toContain("EFL");
    expect(html).toContain("FOCUS");
    expect(html).toContain("CLOSE");
    expect(html).toContain("EFL change (%)");
  });
});
