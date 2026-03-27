// @vitest-environment jsdom

import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import AberrationsPanel from "../src/components/display/AberrationsPanel.js";
import type { RuntimeLens } from "../src/types/optics.js";
import type { Theme } from "../src/types/theme.js";

const { mockComputeSphericalAberration, mockComputeSAProfile, mockComputeMeridionalComa } = vi.hoisted(() => ({
  mockComputeSphericalAberration: vi.fn(),
  mockComputeSAProfile: vi.fn(),
  mockComputeMeridionalComa: vi.fn(),
}));

vi.mock("../src/optics/aberrationAnalysis.js", () => ({
  computeSphericalAberration: mockComputeSphericalAberration,
  computeSAProfile: mockComputeSAProfile,
  computeMeridionalComa: mockComputeMeridionalComa,
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

  it("shows fallback copy when coma computation fails", () => {
    mockComputeSphericalAberration.mockReturnValue(makeSaResult(-0.012));
    mockComputeMeridionalComa.mockReturnValue(null);

    render(<AberrationsPanel {...baseProps} />);
    expect(screen.getByText(/Unable to compute a usable 2D meridional coma view/i)).toBeTruthy();
  });
});
