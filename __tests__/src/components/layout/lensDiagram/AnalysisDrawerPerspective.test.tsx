// @vitest-environment jsdom

import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import AnalysisDrawerContent from "../../../../../src/components/layout/lensDiagram/AnalysisDrawerContent.js";
import { ANALYSIS_TABS } from "../../../../../src/components/layout/lensDiagram/analysisTabs.js";
import buildLens from "../../../../../src/optics/buildLens.js";
import { prepareRuntimeState } from "../../../../../src/optics/compat.js";
import {
  anchorLayoutToCamera,
  computeAnalysisFieldGeometryAtState,
  doLayout,
  eflAtFocus,
} from "../../../../../src/optics/optics.js";
import { createPerspectiveTraceContext } from "../../../../../src/optics/perspective/index.js";
import type { AnalysisTabId } from "../../../../../src/types/state.js";
import { LENS_CATALOG } from "../../../../../src/utils/catalog/lensCatalog.js";
import themes from "../../../../../src/utils/theme/themes.js";
import { apertureAt } from "../../../optics/testLensFixtures.js";

const EXPECTED_TAB_CONTENT = {
  imageQuality: ["not available while tilt or shift is active"],
  summary: ["Current Perspective Pose", "First Order — Intrinsic / Lens-local"],
  aberrations: ["Intrinsic Lens-Axis Spherical Aberration (Classical)", "Fixed-Sensor Field Focus &amp; Astigmatism"],
  chromatic: ["Intrinsic Lens-Axis LoCA (Classical)", "Fixed-Sensor Chromatic Focus, TCA &amp; Ray Fans"],
  coma: ["Fixed-Sensor Coma Footprints &amp; Ray Fans"],
  bokeh: ["Fixed-Sensor Bokeh &amp; Blur Footprints"],
  distortion: ["Perspective distortion — fixed sensor"],
  breathing: ["Focus breathing — intrinsic / lens-local"],
  vignetting: ["Perspective vignetting — absolute fixed-sensor flux"],
  pupils: ["Perspective pupil analysis — lens and camera frames"],
} as const satisfies Record<AnalysisTabId, readonly string[]>;

const EXPECTED_COMPACT_CHART_LABELS = {
  distortion: [
    "Perspective distortion residual, signed fixed-sensor field from top through center to bottom",
    "Zero-pose ideal, pose-ideal, and actual distortion grids clipped to the fixed sensor",
  ],
  vignetting: [
    "Perspective vignetting and relative illumination, signed fixed-sensor field from top through center to bottom",
  ],
  pupils: [
    "Apparent pupil displacement in the fixed camera frame, signed fixed-sensor field from top through center to bottom",
  ],
} as const;

describe("AnalysisDrawerContent with a moved perspective-control lens", () => {
  it("renders every analysis tab from the physical pose or labels it as intrinsic", () => {
    const L = buildLens(LENS_CATALOG["nikon-pc-nikkor-19mm-f4e-ed"]);
    const focusT = 0.3;
    const zoomT = 0;
    const referenceLayout = doLayout(0, zoomT, L);
    const currentLayout = doLayout(focusT, zoomT, L);
    const cameraLayout = anchorLayoutToCamera(referenceLayout, currentLayout);
    const preparedState = prepareRuntimeState(L, focusT, zoomT);
    const perspectiveTraceContext = createPerspectiveTraceContext({
      preparedState,
      cameraZPos: cameraLayout.z,
      movement: { shiftMm: 4, tiltDeg: 3 },
      tiltPivot: L.perspectiveControl?.tiltPivot,
    });
    const dynamicEFL = eflAtFocus(focusT, zoomT, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, zoomT, 0.35);
    const fieldGeometry = computeAnalysisFieldGeometryAtState(focusT, zoomT, L);
    const sharedProps = {
      L,
      t: themes.dark,
      zPos: [...cameraLayout.z],
      focusT,
      zoomT,
      dynamicEFL,
      currentEPSD,
      currentPhysStopSD,
      fieldGeometry,
      perspectiveTraceContext,
      sliderInteracting: true,
      aberrationsExpanded: true,
      onAberrationsExpandedChange: () => undefined,
    };

    expect(Object.keys(EXPECTED_TAB_CONTENT).sort()).toEqual(ANALYSIS_TABS.map((tab) => tab.id).sort());
    expect(perspectiveTraceContext.pose.active).toBe(true);

    for (const tab of ANALYSIS_TABS) {
      const html = renderToStaticMarkup(<AnalysisDrawerContent {...sharedProps} activeTab={tab.id} />);

      if (tab.id !== "imageQuality")
        expect(html, `${tab.id} should not fall back to the obsolete centered-analysis warning`).not.toContain(
          "centered-lens computation is suppressed",
        );
      for (const expected of EXPECTED_TAB_CONTENT[tab.id]) {
        expect(html, `${tab.id} should render ${expected}`).toContain(expected);
      }

      if (tab.id in EXPECTED_COMPACT_CHART_LABELS) {
        const document = new DOMParser().parseFromString(html, "text/html");
        for (const ariaLabel of EXPECTED_COMPACT_CHART_LABELS[tab.id as keyof typeof EXPECTED_COMPACT_CHART_LABELS]) {
          const chart = document.querySelector<SVGSVGElement>(`svg[aria-label="${ariaLabel}"]`);
          expect(chart, `${tab.id} should render the ${ariaLabel} chart`).not.toBeNull();
          expect(chart?.viewBox.baseVal.width, `${ariaLabel} should use the regular analysis chart width`).toBe(320);
          expect(chart?.style.maxWidth, `${ariaLabel} should not grow wider than regular analysis charts`).toBe(
            "320px",
          );
        }
      }
    }
  });
});
