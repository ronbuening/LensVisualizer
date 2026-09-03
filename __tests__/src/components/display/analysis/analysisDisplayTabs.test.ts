/**
 * Real-optics SSR renders of the analysis tabs. Although the copy strings
 * asserted here overlap with the mocked unit tests (AberrationsPanel.test.tsx,
 * preparedAnalysisJobs.test.ts), these renders are the only tests that drive
 * the tab components with REAL analysis output — deleting this file measurably
 * drops branch coverage across FocusBreathingTab, DistortionTab/FieldGrid,
 * ChromaticTab, PupilAberrationTab, the coma/SA plot components, and their
 * formatting helpers (verified 2026-08-10 during the test-rationalization
 * branch). Treat it as the real-data integration layer, not duplication.
 */
import { describe, it, expect } from "vitest";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import buildLens from "../../../../../src/optics/buildLens.js";
import LENS_DEFAULTS from "../../../../../src/lens-data/defaults.js";
import {
  computeAnalysisFieldGeometryAtState,
  anchorLayoutToCamera,
  doLayout,
  eflAtFocus,
  epAtZoom,
  fopenAtZoom,
} from "../../../../../src/optics/optics.js";
import AberrationsPanel from "../../../../../src/components/display/analysis/AberrationsPanel.js";
import ChromaticTab from "../../../../../src/components/display/analysis/ChromaticTab.js";
import ComaTab from "../../../../../src/components/display/analysis/ComaTab.js";
import DistortionChart from "../../../../../src/components/display/analysis/DistortionChart.js";
import DistortionTab from "../../../../../src/components/display/analysis/DistortionTab.js";
import FocusBreathingTab from "../../../../../src/components/display/analysis/FocusBreathingTab.js";
import OpticalSummaryTab from "../../../../../src/components/display/analysis/OpticalSummaryTab.js";
import PupilAberrationTab from "../../../../../src/components/display/analysis/PupilAberrationTab.js";
import VignettingTab from "../../../../../src/components/display/analysis/VignettingTab.js";
import themes from "../../../../../src/utils/theme/themes.js";
import Sonnar50f15Raw from "../../../../../src/lens-data/carl-zeiss-jena/ZeissSonnar50f15.data.js";
import NikonFisheye6mmf28Raw from "../../../../../src/lens-data/nikon/NikonFisheyeNikkor6mmf28.data.js";
import type { DistortionSample } from "../../../../../src/optics/distortionAnalysis.js";
import type { LensData, RuntimeLens } from "../../../../../src/types/optics.js";
import { createAnalysisComputationContext, prepareRuntimeState } from "../../../../../src/optics/compat.js";
import { INTERACTIVE_ANALYSIS_SAMPLING } from "../../../../../src/optics/analysis/analysisQuality.js";
import { createPerspectiveTraceContext } from "../../../../../src/optics/perspective/index.js";
import { LENS_CATALOG } from "../../../../../src/utils/catalog/lensCatalog.js";

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
  it("renders moved distortion, vignetting, pupils, and summary in the fixed camera frame", () => {
    const L = buildLens(LENS_CATALOG["nikon-pc-nikkor-19mm-f4e-ed"]);
    const focusT = 0;
    const zoomT = 0;
    const dynamicEFL = eflAtFocus(focusT, zoomT, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, zoomT, 0.35);
    const fieldGeometry = computeAnalysisFieldGeometryAtState(focusT, zoomT, L);
    const preparedState = prepareRuntimeState(L, focusT, zoomT);
    const perspectiveTraceContext = createPerspectiveTraceContext({
      preparedState,
      movement: { shiftMm: 4, tiltDeg: 3 },
      tiltPivot: L.perspectiveControl?.tiltPivot,
    });
    const analysisContext = createAnalysisComputationContext({
      preparedState,
      dynamicEFL,
      currentEPSD,
      currentPhysStopSD,
      fieldGeometry,
      analysisQuality: "interactive",
      sampling: INTERACTIVE_ANALYSIS_SAMPLING,
      perspectiveTraceContext,
    });
    const shared = {
      L,
      t: themes.dark,
      focusT,
      zoomT,
      dynamicEFL,
      currentEPSD,
      currentPhysStopSD,
      fieldGeometry,
      preparedState,
      analysisContext,
    };

    const distortion = renderToStaticMarkup(React.createElement(DistortionTab, shared));
    expect(distortion).toContain("Perspective distortion — fixed sensor");
    expect(distortion).toContain("Composition");
    expect(distortion).toContain("Optical residual");
    expect(distortion).toContain("Zero-pose ideal");
    expect(distortion).toContain("Pose ideal / composition");
    expect(distortion).toContain("Exact moved lens");
    expect(distortion).toContain("TOP RESIDUAL");
    expect(distortion).toContain("BOTTOM RESIDUAL");

    const vignetting = renderToStaticMarkup(React.createElement(VignettingTab, shared));
    expect(vignetting).toContain("absolute fixed-sensor flux");
    expect(vignetting).toContain("the active center is not normalized to one");
    expect(vignetting).toContain("Absolute geometric transmission");
    expect(vignetting).toContain("Active / zero at same point");
    expect(vignetting).toContain("TOP RI");
    expect(vignetting).toContain("BOTTOM RI");

    const pupils = renderToStaticMarkup(React.createElement(PupilAberrationTab, shared));
    expect(pupils).toContain("lens and camera frames");
    expect(pupils).toContain("Intrinsic / lens-local pupils");
    expect(pupils).toContain("Apparent EP from posed intrinsic EP");
    expect(pupils).toContain("Apparent XP from posed intrinsic XP");

    const summary = renderToStaticMarkup(React.createElement(OpticalSummaryTab, shared));
    expect(summary).toContain("Current Perspective Pose");
    expect(summary).toContain("camera frame and sensor stay fixed");
    expect(summary).toContain("Rear-vertex fallback");
    expect(summary).toContain("CENTER BEST FOCUS");
    expect(summary).toContain("First Order — Intrinsic / Lens-local");
    expect(summary).toContain("Rigid perspective movement does not change focal length");
  });

  it("reports the camera-fixed sensor coordinate for a focused perspective lens", () => {
    const L = buildLens(LENS_CATALOG["canon-tse-50f28l-macro"]);
    const focusT = 1;
    const zoomT = 0;
    const referenceLayout = doLayout(0, 0, L);
    const currentLayout = doLayout(focusT, zoomT, L);
    const cameraLayout = anchorLayoutToCamera(referenceLayout, currentLayout);
    const preparedState = prepareRuntimeState(L, focusT, zoomT);
    const dynamicEFL = eflAtFocus(focusT, zoomT, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, zoomT, 0.35);
    const fieldGeometry = computeAnalysisFieldGeometryAtState(focusT, zoomT, L);
    const perspectiveTraceContext = createPerspectiveTraceContext({
      preparedState,
      cameraZPos: cameraLayout.z,
      movement: { shiftMm: 2, tiltDeg: 2 },
      tiltPivot: L.perspectiveControl?.tiltPivot,
    });
    const analysisContext = createAnalysisComputationContext({
      preparedState,
      dynamicEFL,
      currentEPSD,
      currentPhysStopSD,
      fieldGeometry,
      analysisQuality: "interactive",
      sampling: INTERACTIVE_ANALYSIS_SAMPLING,
      perspectiveTraceContext,
    });

    expect(preparedState.imgZ).not.toBeCloseTo(perspectiveTraceContext.sensorPlane.point[2], 6);
    const html = renderToStaticMarkup(
      React.createElement(OpticalSummaryTab, {
        L,
        t: themes.dark,
        focusT,
        zoomT,
        dynamicEFL,
        currentEPSD,
        currentPhysStopSD,
        fieldGeometry,
        preparedState,
        analysisContext,
      }),
    );
    const sensorMetric = html.slice(html.indexOf("FIXED SENSOR Z"), html.indexOf("FIXED SENSOR Z") + 600);

    expect(sensorMetric).toContain(`${perspectiveTraceContext.sensorPlane.point[2].toFixed(1)} mm`);
    expect(sensorMetric).toContain("camera frame");
  });

  it("OpticalSummaryTab renders current-state first-order, aperture, and field metrics", () => {
    const L = build(Sonnar50f15Raw);
    const focusT = 0.5;
    const zoomT = 0;
    const dynamicEFL = eflAtFocus(focusT, zoomT, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, zoomT, 0);
    const fieldGeometry = computeAnalysisFieldGeometryAtState(focusT, zoomT, L);

    const html = renderToStaticMarkup(
      React.createElement(OpticalSummaryTab, {
        L,
        t: themes.dark,
        focusT,
        zoomT,
        dynamicEFL,
        currentEPSD,
        currentPhysStopSD,
        fieldGeometry,
      }),
    );

    expect(html).toContain("Optical State");
    expect(html).toContain("First Order");
    expect(html).toContain("Aperture And Field");
    expect(html).toContain("CURRENT EFL");
    expect(html).toContain("WORKING F/#");
    expect(html).toContain("HALF FIELD");
    expect(html).toContain("Image Plane");
    expect(html).toContain("CARDINAL EFL");
  });

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
    const dynamicEFL = eflAtFocus(focusT, zoomT, L);
    const { currentPhysStopSD } = apertureAt(L, zoomT, 0);

    const html = renderToStaticMarkup(
      React.createElement(DistortionTab, {
        L,
        t: themes.dark,
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

  it("DistortionTab switches to projection-residual copy for fisheye lenses", () => {
    const L = build(NikonFisheye6mmf28Raw);
    const focusT = 0;
    const zoomT = 0;
    const dynamicEFL = eflAtFocus(focusT, zoomT, L);
    const { currentPhysStopSD } = apertureAt(L, zoomT, 0);

    const html = renderToStaticMarkup(
      React.createElement(DistortionTab, {
        L,
        t: themes.dark,
        focusT,
        zoomT,
        dynamicEFL,
        currentPhysStopSD,
      }),
    );

    expect(html).toContain("Equidistant projection residual");
    expect(html).toContain("declared equidistant fisheye projection");
    expect(html).toContain("No residual");
    expect(html).toContain("Dashed = ideal equidistant grid");
    expect(html).not.toContain("Rectilinear distortion (F-Tan(theta))");
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

    expect(html).toContain("Chief-Ray Spot Footprints");
    expect(html).toContain("chief-ray-referenced real-ray spot footprints");
    expect(html).toContain("Schematic coma comparison");
    expect(html).toContain("Crosshair");
    expect(html).toContain("chief-ray ref.");
    expect(html).toContain("Diamond");
    expect(html).toContain("centroid");
    expect(html).toContain("Circle");
    expect(html).toContain("RMS radius");
    expect(html).toContain("Center");
    expect(html).toContain("25%");
    expect(html).toContain("50%");
    expect(html).toContain("75%");
    expect(html).toContain("Tangential Ray Fan");
    expect(html).toContain("Tangential ray fan using a dense off-axis meridional pupil sweep");
    expect(html).toContain("Chief ray");
    expect(html).toContain("FAN SPAN");
    expect(html).not.toContain("Spherical Aberration");
    expect(html).not.toContain("Field Curves &amp; Astigmatism");
  });

  it("ChromaticTab renders axial, lateral, and field-focus chromatic diagnostics", () => {
    const L = build(Sonnar50f15Raw);
    const focusT = 0;
    const zoomT = 0;
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, zoomT, 0.25);
    const fieldGeometry = computeAnalysisFieldGeometryAtState(focusT, zoomT, L);

    const html = renderToStaticMarkup(
      React.createElement(ChromaticTab, {
        L,
        t: themes.dark,
        focusT,
        zoomT,
        currentEPSD,
        currentPhysStopSD,
        fieldGeometry,
      }),
    );

    expect(html).toContain("Chromatic Analysis");
    expect(html).toContain("Geometric traces at C, d, F, and g spectral lines");
    expect(html).toContain("do not classify apochromatic correction");
    expect(html).toContain("LoCA");
    expect(html).toContain("LATERAL COLOR / TCA");
    expect(html).toContain("OFF-AXIS FAN SPREAD");
    expect(html).toContain("Axial Color (LoCA)");
    expect(html).toContain("Lateral Color (TCA)");
    expect(html).toContain("Chromatic Field Focus (T/S)");
    expect(html).toContain("Focus from G nd (um)");
    expect(html).toContain("Height from G nd (um)");
    expect(html).toContain("C-line 656.3 nm");
    expect(html).toContain("d-line 587.6 nm");
    expect(html).toContain("F-line 486.1 nm");
    expect(html).toContain("g-line 435.8 nm");
    expect(html).toContain("MAX FOCUS");
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

  it("PupilAberrationTab renders the chart and summary metrics", () => {
    const L = build(Sonnar50f15Raw);
    const focusT = 0;
    const zoomT = 0;

    const html = renderToStaticMarkup(
      React.createElement(PupilAberrationTab, {
        L,
        t: themes.dark,
        focusT,
        zoomT,
      }),
    );

    expect(html).toContain("Pupil aberration");
    expect(html).toContain("EP");
    expect(html).toContain("XP");
    expect(html).toContain("MAX EP SHIFT");
    expect(html).toContain("MAX XP SHIFT");
    expect(html).toContain("FIELD");
    expect(html).toContain("EP Z");
    expect(html).toContain("Shift (mm)");
    expect(html).toContain("Field angle");
    expect(html).toContain("EP shift");
    expect(html).toContain("XP shift");
    expect(html).not.toContain("BREATHING");
    expect(html).not.toContain("Distortion");
  });
});
