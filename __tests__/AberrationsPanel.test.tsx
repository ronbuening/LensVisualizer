// @vitest-environment jsdom

import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import AberrationsPanel from "../src/components/display/AberrationsPanel.js";
import type { RuntimeLens } from "../src/types/optics.js";
import type { Theme } from "../src/types/theme.js";

const { mockComputeSphericalAberration, mockComputeSAProfile, mockComputeMeridionalComa, mockComputeComaPreview } =
  vi.hoisted(() => ({
  mockComputeSphericalAberration: vi.fn(),
  mockComputeSAProfile: vi.fn(),
  mockComputeMeridionalComa: vi.fn(),
  mockComputeComaPreview: vi.fn(),
}));

vi.mock("../src/optics/aberrationAnalysis.js", () => ({
  computeSphericalAberration: mockComputeSphericalAberration,
  computeSAProfile: mockComputeSAProfile,
  computeMeridionalComa: mockComputeMeridionalComa,
  computeEstimatedComaPreview: mockComputeComaPreview,
}));

const theme = {
  panelBg: "#111",
  panelBorder: "#222",
  muted: "#999",
  axis: "#666",
  value: "#0f0",
  label: "#eee",
  toggleBg: "#000",
  toggleBorder: "#333",
  toggleText: "#fff",
  toggleIcon: "#fff",
  toggleActiveBg: "#222",
  toggleActiveBorder: "#555",
  toggleActiveText: "#fff",
  toggleInactiveText: "#bbb",
} as unknown as Theme;

const baseProps = {
  L: { N: 2 } as RuntimeLens,
  t: theme,
  zPos: [0, 5],
  focusT: 0,
  zoomT: 0,
  currentEPSD: 10,
  currentPhysStopSD: 5,
  expanded: true,
};

describe("AberrationsPanel", () => {
  beforeEach(() => {
    mockComputeSAProfile.mockReturnValue([]);
    mockComputeComaPreview.mockReturnValue({
      fieldFractions: [0, 0.25, 0.5, 0.75],
      usableFieldCount: 4,
      sharedTangentialHalfRangeMm: 0.06,
      normalizedSagittalHalfRange: 1,
      fields: [
        {
          fieldFraction: 0,
          label: "Center",
          fieldAngleDeg: 0,
          sampleCount: 51,
          validSampleCount: 51,
          clippedSampleCount: 0,
          chiefIntercept: 0,
          minRelativeIntercept: -0.01,
          maxRelativeIntercept: 0.01,
          usable: true,
          points: [
            { index: 0, sourceSampleIndex: 0, tangentialImageHeight: -0.01, sagittalNormalized: -0.5, weight: 0.1 },
            { index: 1, sourceSampleIndex: 25, tangentialImageHeight: 0, sagittalNormalized: 0, weight: 0.2 },
            { index: 2, sourceSampleIndex: 50, tangentialImageHeight: 0.01, sagittalNormalized: 0.5, weight: 0.1 },
          ],
        },
        {
          fieldFraction: 0.25,
          label: "25%",
          fieldAngleDeg: 5,
          sampleCount: 51,
          validSampleCount: 49,
          clippedSampleCount: 2,
          chiefIntercept: -0.02,
          minRelativeIntercept: -0.03,
          maxRelativeIntercept: 0.04,
          usable: true,
          points: [{ index: 0, sourceSampleIndex: 25, tangentialImageHeight: 0.04, sagittalNormalized: 0, weight: 0.2 }],
        },
        {
          fieldFraction: 0.5,
          label: "50%",
          fieldAngleDeg: 10,
          sampleCount: 51,
          validSampleCount: 47,
          clippedSampleCount: 4,
          chiefIntercept: -0.05,
          minRelativeIntercept: -0.05,
          maxRelativeIntercept: 0.06,
          usable: true,
          points: [{ index: 0, sourceSampleIndex: 25, tangentialImageHeight: 0.06, sagittalNormalized: 0, weight: 0.2 }],
        },
        {
          fieldFraction: 0.75,
          label: "75%",
          fieldAngleDeg: 15,
          sampleCount: 51,
          validSampleCount: 43,
          clippedSampleCount: 8,
          chiefIntercept: -0.09,
          minRelativeIntercept: -0.06,
          maxRelativeIntercept: 0.05,
          usable: true,
          points: [{ index: 0, sourceSampleIndex: 25, tangentialImageHeight: 0.05, sagittalNormalized: 0, weight: 0.2 }],
        },
      ],
    });
    mockComputeMeridionalComa.mockReturnValue({
      fieldAngleDeg: 12.5,
      sampleCount: 51,
      validSampleCount: 47,
      clippedSampleCount: 4,
      centerIntercept: -0.02,
      minIntercept: -0.12,
      maxIntercept: 0.18,
      spanMm: 0.3,
      spanUm: 300,
      lowerIntercept: -0.12,
      upperIntercept: 0.18,
      samples: [
        { index: 0, pupilFraction: -1, launchHeight: -10, imageHeight: null, clipped: true },
        { index: 25, pupilFraction: 0, launchHeight: 0, imageHeight: -0.02, clipped: false },
        { index: 50, pupilFraction: 1, launchHeight: 10, imageHeight: null, clipped: true },
      ],
    });
  });

  function makeSaResult(longitudinalSaMm: number) {
    return {
      nearAxisFraction: 0.1,
      marginalFraction: 0.95,
      longitudinalSaMm,
      longitudinalSaUm: longitudinalSaMm * 1000,
      currentPlaneRmsMm: 0.008,
      currentPlaneRmsUm: 8,
      currentPlanePeakMm: 0.012,
      currentPlanePeakUm: 12,
      bestFocusRmsMm: 0.003,
      bestFocusRmsUm: 3,
      bestFocusPeakMm: 0.005,
      bestFocusPeakUm: 5,
      nearAxisRealIntercept: 100,
      marginalRealIntercept: 100 + longitudinalSaMm,
      nearAxisImageHeight: 0,
      imagePlaneZ: 105,
      bestFocusZ: 104.2,
      bestFocusShiftMm: -0.8,
      validSampleCount: 10,
    };
  }

  it("shows undercorrected for negative SA", () => {
    mockComputeSphericalAberration.mockReturnValue(makeSaResult(-0.012));

    const { container } = render(<AberrationsPanel {...baseProps} />);
    expect(screen.queryByText("(undercorrected)")).toBeNull();
    expect(screen.queryByText("LSA")).toBeNull();
    const metric = container.querySelector('[title*="Best-focus spread"]');
    expect(metric?.getAttribute("title")).toContain("best-fit image plane");
  });

  it("shows overcorrected for positive SA", () => {
    mockComputeSphericalAberration.mockReturnValue(makeSaResult(0.012));

    render(<AberrationsPanel {...baseProps} />);
    expect(screen.queryByText("(overcorrected)")).toBeNull();
    expect(screen.queryByText("LSA")).toBeNull();
  });

  it("renders meridional coma copy and span metric", () => {
    mockComputeSphericalAberration.mockReturnValue(makeSaResult(-0.012));

    render(<AberrationsPanel {...baseProps} />);
    expect(screen.getAllByText("Coma Preview").length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Estimated 2D coma appearance/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText("Center").length).toBeGreaterThan(0);
    expect(screen.getAllByText("25%").length).toBeGreaterThan(0);
    expect(screen.getAllByText("50%").length).toBeGreaterThan(0);
    expect(screen.getAllByText("75%").length).toBeGreaterThan(0);
    expect(screen.getAllByText("FIELDS").length).toBeGreaterThan(0);
    expect(screen.getAllByText("4/4").length).toBeGreaterThan(0);
    expect(screen.getAllByText("BEST-FOCUS SPREAD").length).toBeGreaterThan(0);
    expect(screen.getAllByText("3 µm").length).toBeGreaterThan(0);
    expect(screen.getAllByText("(peak 5 µm, shift -0.80 mm)").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Meridional Coma").length).toBeGreaterThan(0);
    expect(screen.getAllByText(/2D meridional coma view/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText("COMA SPAN").length).toBeGreaterThan(0);
    expect(screen.getAllByText("300 µm").length).toBeGreaterThan(0);
    expect(screen.getAllByText("VALID").length).toBeGreaterThan(0);
    expect(screen.getAllByText("47/51").length).toBeGreaterThan(0);
  });

  it("shows fallback copy when preview computation fails", () => {
    mockComputeSphericalAberration.mockReturnValue(makeSaResult(-0.012));
    mockComputeComaPreview.mockReturnValue(null);

    render(<AberrationsPanel {...baseProps} />);
    expect(screen.getByText(/Unable to compute an estimated 2D coma appearance/i)).toBeTruthy();
  });

  it("shows fallback copy when coma computation fails", () => {
    mockComputeSphericalAberration.mockReturnValue(makeSaResult(-0.012));
    mockComputeMeridionalComa.mockReturnValue(null);

    render(<AberrationsPanel {...baseProps} />);
    expect(screen.getByText(/Unable to compute a usable 2D meridional coma view/i)).toBeTruthy();
  });
});
