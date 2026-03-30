// @vitest-environment jsdom

import { afterEach, describe, it, expect, beforeEach, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import AberrationsPanel from "../src/components/display/AberrationsPanel.js";
import type { RuntimeLens } from "../src/types/optics.js";
import type { Theme } from "../src/types/theme.js";

const {
  mockComputeSphericalAberration,
  mockComputeSAProfile,
  mockComputeMeridionalComa,
  mockComputeSagittalComa,
  mockComputeComaPreview,
  mockComputeFieldCurvature,
} = vi.hoisted(() => ({
  mockComputeSphericalAberration: vi.fn(),
  mockComputeSAProfile: vi.fn(),
  mockComputeMeridionalComa: vi.fn(),
  mockComputeSagittalComa: vi.fn(),
  mockComputeComaPreview: vi.fn(),
  mockComputeFieldCurvature: vi.fn(),
}));

vi.mock("../src/optics/aberrationAnalysis.js", () => ({
  computeSphericalAberration: mockComputeSphericalAberration,
  computeSAProfile: mockComputeSAProfile,
  computeMeridionalComa: mockComputeMeridionalComa,
  computeSagittalComa: mockComputeSagittalComa,
  computeComaPointCloudPreview: mockComputeComaPreview,
  computeFieldCurvature: mockComputeFieldCurvature,
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

function withCurveFields<T extends { fieldFractions: readonly number[]; fields: Array<Record<string, unknown>> }>(result: T) {
  return {
    ...result,
    curveFieldFractions: [...result.fieldFractions],
    curveFields: result.fields.map((field) => ({ ...field })),
  };
}

describe("AberrationsPanel", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    mockComputeSphericalAberration.mockReset();
    mockComputeSAProfile.mockReset();
    mockComputeMeridionalComa.mockReset();
    mockComputeSagittalComa.mockReset();
    mockComputeComaPreview.mockReset();
    mockComputeFieldCurvature.mockReset();
    mockComputeSAProfile.mockReturnValue([
      { fraction: 0, transverseSaMm: -0.01 },
      { fraction: 1, transverseSaMm: 0.01 },
    ]);
    mockComputeComaPreview.mockReturnValue({
      fieldFractions: [0, 0.25, 0.5, 0.75],
      usableFieldCount: 4,
      sharedTangentialHalfRangeMm: 0.06,
      sharedSagittalHalfRangeMm: 0.03,
      sharedSpotHalfRangeMm: 0.06,
      fields: [
        {
          fieldFraction: 0,
          label: "Center",
          fieldAngleDeg: 0,
          sampleCount: 61,
          validSampleCount: 61,
          clippedSampleCount: 0,
          chiefIntercept: 0,
          minRelativeTangentialImageHeight: -0.01,
          maxRelativeTangentialImageHeight: 0.01,
          minRelativeSagittalImageHeight: -0.01,
          maxRelativeSagittalImageHeight: 0.01,
          centroidTangentialImageHeight: 0,
          centroidSagittalImageHeight: 0,
          rmsRadiusMm: 0.005,
          rmsRadiusUm: 5,
          usable: true,
          points: [
            { index: 0, sourceSampleIndex: 1, tangentialImageHeight: -0.01, sagittalImageHeight: -0.01, weight: 0.1 },
            { index: 1, sourceSampleIndex: 0, tangentialImageHeight: 0, sagittalImageHeight: 0, weight: 0.2 },
            { index: 2, sourceSampleIndex: 2, tangentialImageHeight: 0.01, sagittalImageHeight: 0.01, weight: 0.1 },
          ],
        },
        {
          fieldFraction: 0.25,
          label: "25%",
          fieldAngleDeg: 5,
          sampleCount: 61,
          validSampleCount: 57,
          clippedSampleCount: 4,
          chiefIntercept: -0.02,
          minRelativeTangentialImageHeight: -0.03,
          maxRelativeTangentialImageHeight: 0.04,
          minRelativeSagittalImageHeight: -0.015,
          maxRelativeSagittalImageHeight: 0.015,
          centroidTangentialImageHeight: 0.01,
          centroidSagittalImageHeight: 0.002,
          rmsRadiusMm: 0.012,
          rmsRadiusUm: 12,
          usable: true,
          points: [
            { index: 0, sourceSampleIndex: 6, tangentialImageHeight: 0.04, sagittalImageHeight: 0, weight: 0.2 },
          ],
        },
        {
          fieldFraction: 0.5,
          label: "50%",
          fieldAngleDeg: 10,
          sampleCount: 61,
          validSampleCount: 53,
          clippedSampleCount: 8,
          chiefIntercept: -0.05,
          minRelativeTangentialImageHeight: -0.05,
          maxRelativeTangentialImageHeight: 0.06,
          minRelativeSagittalImageHeight: -0.02,
          maxRelativeSagittalImageHeight: 0.02,
          centroidTangentialImageHeight: 0.018,
          centroidSagittalImageHeight: 0.003,
          rmsRadiusMm: 0.018,
          rmsRadiusUm: 18,
          usable: true,
          points: [
            { index: 0, sourceSampleIndex: 10, tangentialImageHeight: 0.06, sagittalImageHeight: 0, weight: 0.2 },
          ],
        },
        {
          fieldFraction: 0.75,
          label: "75%",
          fieldAngleDeg: 15,
          sampleCount: 61,
          validSampleCount: 49,
          clippedSampleCount: 12,
          chiefIntercept: -0.09,
          minRelativeTangentialImageHeight: -0.06,
          maxRelativeTangentialImageHeight: 0.05,
          minRelativeSagittalImageHeight: -0.03,
          maxRelativeSagittalImageHeight: 0.03,
          centroidTangentialImageHeight: -0.012,
          centroidSagittalImageHeight: 0.004,
          rmsRadiusMm: 0.02,
          rmsRadiusUm: 20,
          usable: true,
          points: [
            { index: 0, sourceSampleIndex: 14, tangentialImageHeight: 0.05, sagittalImageHeight: 0, weight: 0.2 },
          ],
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
    mockComputeFieldCurvature.mockReturnValue(
      withCurveFields({
        fieldFractions: [0, 0.25, 0.5, 0.75, 1],
        usableFieldCount: 5,
        imagePlaneZ: 105,
        sharedFocusShiftHalfRangeMm: 0.8,
        maxAstigmaticDifferenceMm: 0.24,
        maxAstigmaticDifferenceUm: 240,
        edgeTangentialShiftMm: -0.45,
        edgeSagittalShiftMm: -0.21,
        chromaticFocusSpreadMm: null,
        fields: [
          {
            fieldFraction: 0,
            label: "Center",
            fieldAngleDeg: 0,
            sampleCount: 51,
            validSampleCount: 51,
            clippedSampleCount: 0,
            chiefImageHeight: 0,
            tangentialBestFocusZ: 105,
            sagittalBestFocusZ: 105,
            petzvalBestFocusZ: 105,
            tangentialShiftMm: 0,
            sagittalShiftMm: 0,
            petzvalShiftMm: 0,
            astigmaticDifferenceMm: 0,
            astigmaticDifferenceUm: 0,
            chromaticFieldShifts: null,
            usable: true,
          },
          {
            fieldFraction: 0.25,
            label: "25%",
            fieldAngleDeg: 5,
            sampleCount: 51,
            validSampleCount: 49,
            clippedSampleCount: 2,
            chiefImageHeight: 5,
            tangentialBestFocusZ: 104.9,
            sagittalBestFocusZ: 104.95,
            petzvalBestFocusZ: 104.925,
            tangentialShiftMm: -0.1,
            sagittalShiftMm: -0.05,
            petzvalShiftMm: -0.075,
            astigmaticDifferenceMm: 0.05,
            astigmaticDifferenceUm: 50,
            chromaticFieldShifts: null,
            usable: true,
          },
          {
            fieldFraction: 0.5,
            label: "50%",
            fieldAngleDeg: 10,
            sampleCount: 51,
            validSampleCount: 47,
            clippedSampleCount: 4,
            chiefImageHeight: 10,
            tangentialBestFocusZ: 104.8,
            sagittalBestFocusZ: 104.9,
            petzvalBestFocusZ: 104.85,
            tangentialShiftMm: -0.2,
            sagittalShiftMm: -0.1,
            petzvalShiftMm: -0.15,
            astigmaticDifferenceMm: 0.1,
            astigmaticDifferenceUm: 100,
            chromaticFieldShifts: null,
            usable: true,
          },
          {
            fieldFraction: 0.75,
            label: "75%",
            fieldAngleDeg: 15,
            sampleCount: 51,
            validSampleCount: 45,
            clippedSampleCount: 6,
            chiefImageHeight: 15,
            tangentialBestFocusZ: 104.65,
            sagittalBestFocusZ: 104.77,
            petzvalBestFocusZ: 104.71,
            tangentialShiftMm: -0.35,
            sagittalShiftMm: -0.23,
            petzvalShiftMm: -0.29,
            astigmaticDifferenceMm: 0.12,
            astigmaticDifferenceUm: 120,
            chromaticFieldShifts: null,
            usable: true,
          },
          {
            fieldFraction: 1,
            label: "100%",
            fieldAngleDeg: 20,
            sampleCount: 51,
            validSampleCount: 43,
            clippedSampleCount: 8,
            chiefImageHeight: 20,
            tangentialBestFocusZ: 104.55,
            sagittalBestFocusZ: 104.79,
            petzvalBestFocusZ: 104.67,
            tangentialShiftMm: -0.45,
            sagittalShiftMm: -0.21,
            petzvalShiftMm: -0.33,
            astigmaticDifferenceMm: 0.24,
            astigmaticDifferenceUm: 240,
            chromaticFieldShifts: null,
            usable: true,
          },
        ],
      }),
    );
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

  it("renders the spherical aberration chart when a profile is available", () => {
    mockComputeSphericalAberration.mockReturnValue(makeSaResult(-0.012));

    render(<AberrationsPanel {...baseProps} />);

    expect(screen.getByText(/Real-ray transverse SA at best focus/i)).toBeTruthy();
  });

  it("renders spherical aberration and field curvature content", () => {
    mockComputeSphericalAberration.mockReturnValue(makeSaResult(-0.012));

    render(<AberrationsPanel {...baseProps} />);
    expect(screen.getAllByText("BEST-FOCUS SPREAD").length).toBeGreaterThan(0);
    expect(screen.getAllByText("3 µm").length).toBeGreaterThan(0);
    expect(screen.getAllByText("(peak 5 µm, shift -0.80 mm)").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Field Curves").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Astigmatism").length).toBeGreaterThan(0);
    expect(screen.getByText(/The first chart shows parabasal tangential and sagittal field curves/i)).toBeTruthy();
    expect(screen.getByText(/These charts plot the tangential-sagittal best-focus difference/i)).toBeTruthy();
    expect(
      screen.getByText(/Parabasal tangential and sagittal field curves with Petzval reference/i),
    ).toBeTruthy();
    expect(screen.getByText(/Real-ray tangential and sagittal field curves from dense bundle solves/i)).toBeTruthy();
    expect(screen.getAllByText("PARA MAX SPLIT").length).toBeGreaterThan(0);
    expect(screen.getAllByText("OUTER SPLIT").length).toBeGreaterThan(0);
    expect(screen.getAllByText("240 µm").length).toBeGreaterThan(0);
    expect(screen.getAllByText("EDGE T / S").length).toBeGreaterThan(0);
    expect(screen.getByText("T -0.45 mm / S -0.21 mm")).toBeTruthy();
    expect(screen.getAllByText("5/5").length).toBeGreaterThan(0);
  });

  it("keeps field curves uncapped while omitting out-of-circle astigmatism", () => {
    mockComputeSphericalAberration.mockReturnValue(makeSaResult(-0.012));
    mockComputeFieldCurvature.mockReturnValue(
      withCurveFields({
        fieldFractions: [0, 0.25, 0.5, 0.75, 1],
        usableFieldCount: 5,
        imagePlaneZ: 105,
        sharedFocusShiftHalfRangeMm: 40,
        maxAstigmaticDifferenceMm: 30,
        maxAstigmaticDifferenceUm: 30000,
        edgeTangentialShiftMm: -25,
        edgeSagittalShiftMm: 5,
        chromaticFocusSpreadMm: null,
        fields: [
          {
            fieldFraction: 0,
            label: "Center",
            fieldAngleDeg: 0,
            sampleCount: 51,
            validSampleCount: 51,
            clippedSampleCount: 0,
            chiefImageHeight: 0,
            tangentialBestFocusZ: 105,
            sagittalBestFocusZ: 105,
            petzvalBestFocusZ: 105,
            tangentialShiftMm: 0,
            sagittalShiftMm: 0,
            petzvalShiftMm: 0,
            astigmaticDifferenceMm: 0,
            astigmaticDifferenceUm: 0,
            chromaticFieldShifts: null,
            usable: true,
          },
          {
            fieldFraction: 0.25,
            label: "25%",
            fieldAngleDeg: 5,
            sampleCount: 51,
            validSampleCount: 49,
            clippedSampleCount: 2,
            chiefImageHeight: 5,
            tangentialBestFocusZ: 95,
            sagittalBestFocusZ: 101,
            petzvalBestFocusZ: 92,
            tangentialShiftMm: -10,
            sagittalShiftMm: -4,
            petzvalShiftMm: -13,
            astigmaticDifferenceMm: 6,
            astigmaticDifferenceUm: 6000,
            chromaticFieldShifts: null,
            usable: true,
          },
          {
            fieldFraction: 0.5,
            label: "50%",
            fieldAngleDeg: 10,
            sampleCount: 51,
            validSampleCount: 47,
            clippedSampleCount: 4,
            chiefImageHeight: 10,
            tangentialBestFocusZ: 90,
            sagittalBestFocusZ: 102,
            petzvalBestFocusZ: 86,
            tangentialShiftMm: -15,
            sagittalShiftMm: -3,
            petzvalShiftMm: -19,
            astigmaticDifferenceMm: 12,
            astigmaticDifferenceUm: 12000,
            chromaticFieldShifts: null,
            usable: true,
          },
          {
            fieldFraction: 0.75,
            label: "75%",
            fieldAngleDeg: 15,
            sampleCount: 51,
            validSampleCount: 45,
            clippedSampleCount: 6,
            chiefImageHeight: 15,
            tangentialBestFocusZ: 85,
            sagittalBestFocusZ: 103,
            petzvalBestFocusZ: 81,
            tangentialShiftMm: -20,
            sagittalShiftMm: -2,
            petzvalShiftMm: -24,
            astigmaticDifferenceMm: 18,
            astigmaticDifferenceUm: 18000,
            chromaticFieldShifts: null,
            usable: true,
          },
          {
            fieldFraction: 1,
            label: "100%",
            fieldAngleDeg: 20,
            sampleCount: 51,
            validSampleCount: 43,
            clippedSampleCount: 8,
            chiefImageHeight: 20,
            tangentialBestFocusZ: 80,
            sagittalBestFocusZ: 110,
            petzvalBestFocusZ: 75,
            tangentialShiftMm: -25,
            sagittalShiftMm: 5,
            petzvalShiftMm: -30,
            astigmaticDifferenceMm: 30,
            astigmaticDifferenceUm: 30000,
            chromaticFieldShifts: null,
            usable: true,
          },
        ],
      }),
    );

    render(<AberrationsPanel {...baseProps} />);
    expect(screen.queryByText(/Scale capped to image circle/i)).toBeNull();
    expect(screen.getAllByText("5/5").length).toBeGreaterThan(0);
    expect(screen.getAllByText("30000 µm").length).toBeGreaterThan(0);
  });

  it("shows fallback copy when field-curvature computation fails", () => {
    mockComputeSphericalAberration.mockReturnValue(makeSaResult(-0.012));
    mockComputeFieldCurvature.mockReturnValue(null);

    render(<AberrationsPanel {...baseProps} />);
    expect(screen.getByText(/Unable to compute usable field-curve diagnostics/i)).toBeTruthy();
    expect(screen.getByText(/Unable to compute usable in-circle astigmatism diagnostics/i)).toBeTruthy();
  });

  it("toggles the spherical aberration section and reports the new expanded state", () => {
    mockComputeSphericalAberration.mockReturnValue(makeSaResult(-0.012));
    mockComputeSAProfile.mockReturnValue([
      { fraction: 0, transverseSaMm: -0.01 },
      { fraction: 1, transverseSaMm: 0.01 },
    ]);
    const onExpandedChange = vi.fn();

    render(<AberrationsPanel {...baseProps} onExpandedChange={onExpandedChange} />);

    fireEvent.click(screen.getAllByText("LESS")[0].closest("button")!);

    expect(onExpandedChange).toHaveBeenCalledWith(false);
    expect(screen.getAllByText("MORE").length).toBeGreaterThan(0);
  });

  it("toggles the field-curvature section body independently", () => {
    mockComputeSphericalAberration.mockReturnValue(makeSaResult(-0.012));

    render(<AberrationsPanel {...baseProps} />);
    fireEvent.click(screen.getAllByText("LESS")[1].closest("button")!);

    expect(screen.queryByText(/The first chart shows parabasal tangential and sagittal field curves/i)).toBeNull();
    expect(screen.getByText(/These charts plot the tangential-sagittal best-focus difference/i)).toBeTruthy();
    expect(screen.getAllByText("MORE").length).toBeGreaterThan(0);
  });

  it("toggles the astigmatism section body independently", () => {
    mockComputeSphericalAberration.mockReturnValue(makeSaResult(-0.012));

    render(<AberrationsPanel {...baseProps} />);
    fireEvent.click(screen.getAllByText("LESS")[2].closest("button")!);

    expect(screen.queryByText(/These charts plot the tangential-sagittal best-focus difference/i)).toBeNull();
    expect(screen.getByText(/The first chart shows parabasal tangential and sagittal field curves/i)).toBeTruthy();
    expect(screen.getAllByText("MORE").length).toBeGreaterThan(0);
  });

  it("syncs the spherical aberration section with the expanded prop", () => {
    mockComputeSphericalAberration.mockReturnValue(makeSaResult(-0.012));
    mockComputeSAProfile.mockReturnValue([
      { fraction: 0, transverseSaMm: -0.01 },
      { fraction: 1, transverseSaMm: 0.01 },
    ]);

    const { rerender } = render(<AberrationsPanel {...baseProps} expanded={true} />);
    expect(screen.getAllByText("LESS").length).toBe(3);
    expect(screen.getByText(/Real-ray transverse SA at best focus/i)).toBeTruthy();
    expect(screen.getByText(/The first chart shows parabasal tangential and sagittal field curves/i)).toBeTruthy();
    expect(screen.getByText(/These charts plot the tangential-sagittal best-focus difference/i)).toBeTruthy();

    rerender(<AberrationsPanel {...baseProps} expanded={false} />);
    expect(screen.getAllByText("MORE").length).toBe(1);
    expect(screen.queryByText(/Real-ray transverse SA at best focus/i)).toBeNull();
    expect(screen.getByText(/The first chart shows parabasal tangential and sagittal field curves/i)).toBeTruthy();
    expect(screen.getByText(/These charts plot the tangential-sagittal best-focus difference/i)).toBeTruthy();
  });
});
