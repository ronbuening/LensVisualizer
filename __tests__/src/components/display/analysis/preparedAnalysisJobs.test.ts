import { beforeEach, describe, expect, it, vi } from "vitest";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ChromaticTab from "../../../../../src/components/display/analysis/ChromaticTab.js";
import DistortionTab from "../../../../../src/components/display/analysis/DistortionTab.js";
import OpticalSummaryTab from "../../../../../src/components/display/analysis/OpticalSummaryTab.js";
import PupilAberrationTab from "../../../../../src/components/display/analysis/PupilAberrationTab.js";
import VignettingTab from "../../../../../src/components/display/analysis/VignettingTab.js";
import { createAnalysisComputationContext } from "../../../../../src/optics/analysis.js";
import themes from "../../../../../src/utils/theme/themes.js";
import type { PreparedOpticalState } from "../../../../../src/optics/types.js";
import type { RuntimeLens } from "../../../../../src/types/optics.js";

const {
  mockComputeBothPupilAberrationProfiles,
  mockComputeChromaticAnalysis,
  mockComputeChromaticRayFanAnalysis,
  mockComputeDistortionCurve,
  mockComputeDistortionFieldGrid,
  mockComputeFieldCurvatureBundle,
  mockComputeOpticalSummary,
  mockComputeVignettingCurve,
  mockPreparedState,
  mockPrepareRuntimeState,
} = vi.hoisted(() => ({
  mockComputeBothPupilAberrationProfiles: vi.fn(),
  mockComputeChromaticAnalysis: vi.fn(),
  mockComputeChromaticRayFanAnalysis: vi.fn(),
  mockComputeDistortionCurve: vi.fn(),
  mockComputeDistortionFieldGrid: vi.fn(),
  mockComputeFieldCurvatureBundle: vi.fn(),
  mockComputeOpticalSummary: vi.fn(),
  mockComputeVignettingCurve: vi.fn(),
  mockPreparedState: { cacheKey: "prepared-analysis-test", lens: {} },
  mockPrepareRuntimeState: vi.fn(),
}));

vi.mock("../../../../../src/optics/compat.js", async () => {
  const actual = await vi.importActual("../../../../../src/optics/compat.js");
  return {
    ...actual,
    analysisJobsForState2: {
      ...(actual as { analysisJobsForState2: Record<string, unknown> }).analysisJobsForState2,
      computeChromaticAnalysis: mockComputeChromaticAnalysis,
      computeChromaticRayFanAnalysis: mockComputeChromaticRayFanAnalysis,
    },
    prepareRuntimeState: mockPrepareRuntimeState,
  };
});

vi.mock("../../../../../src/optics/analysis/summary/summary.js", () => ({
  computeOpticalSummary: mockComputeOpticalSummary,
}));

vi.mock("../../../../../src/optics/analysis/aberration/fieldCurvature.js", async (importOriginal) => {
  const actual =
    await importOriginal<typeof import("../../../../../src/optics/analysis/aberration/fieldCurvature.js")>();
  return { ...actual, computeFieldCurvatureBundle: mockComputeFieldCurvatureBundle };
});

vi.mock("../../../../../src/optics/analysis/distortion/distortion.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../../../../src/optics/analysis/distortion/distortion.js")>();
  return {
    ...actual,
    computeDistortionCurve: mockComputeDistortionCurve,
    computeDistortionFieldGrid: mockComputeDistortionFieldGrid,
  };
});

vi.mock("../../../../../src/optics/analysis/vignetting/vignetting.js", () => ({
  computeVignettingCurve: mockComputeVignettingCurve,
}));

vi.mock("../../../../../src/optics/analysis/pupils/pupilAberration.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../../../../src/optics/analysis/pupils/pupilAberration.js")>();
  return { ...actual, computeBothPupilAberrationProfiles: mockComputeBothPupilAberrationProfiles };
});

const preparedState = mockPreparedState as PreparedOpticalState;
const lens = { N: 2, EFL: 50, EP: { epSD: 5 }, isZoom: false, elements: [] } as unknown as RuntimeLens;
const fieldGeometry = { halfFieldDeg: 12, yRatio: 1, b: 1, epRatio: 1 };

const distortionSamples = [
  {
    fieldAngleDeg: 0,
    normalizedImageHeight: 0,
    imageHeight: 0,
    distortionPercent: 0,
    realHeight: 0,
    idealHeight: 0,
    idealFieldAngleDeg: 0,
    referenceKind: "rectilinear",
    referenceLabel: "Rectilinear",
  },
  {
    fieldAngleDeg: 12,
    normalizedImageHeight: 1,
    imageHeight: -10,
    distortionPercent: 1.2,
    realHeight: -10,
    idealHeight: -9.88,
    idealFieldAngleDeg: 11.8,
    referenceKind: "rectilinear",
    referenceLabel: "Rectilinear",
  },
];

const distortionFieldGrid = {
  lines: [
    {
      orientation: "vertical",
      idealCoordinate: 0,
      points: [
        {
          idealX: 0,
          idealY: -1,
          tracedX: 0.02,
          tracedY: -1.01,
          radiusNormalized: 1,
          insideImageCircle: true,
          usable: true,
        },
        {
          idealX: 0,
          idealY: 1,
          tracedX: -0.02,
          tracedY: 1.01,
          radiusNormalized: 1,
          insideImageCircle: true,
          usable: true,
        },
      ],
    },
  ],
  idealFieldRadius: 1,
  referenceKind: "rectilinear",
  referenceLabel: "Rectilinear",
};

const vignettingSamples = [
  { fieldAngleDeg: 0, geometricTransmission: 1, relativeIllumination: 1 },
  { fieldAngleDeg: 12, geometricTransmission: 0.82, relativeIllumination: 0.75 },
];

const chromaticAnalysis = {
  longitudinalFocus: {
    channels: ["R", "G", "B", "V"],
    referenceChannel: "G",
    marginalFraction: 0.95,
    imagePlaneZ: 60,
    lastSurfaceZ: 20,
    longitudinalSpreadMm: 0.035,
    longitudinalSpreadUm: 35,
    transverseSpreadMm: 0.007,
    transverseSpreadUm: 7,
    spread: {
      axialInterceptSpreadMm: 0.035,
      imagePlaneHeightSpreadMm: 0.007,
      axialIntercepts: { R: 59.99, G: 60, B: 60.02, V: 60.025 },
      imagePlaneHeights: { R: -0.002, G: 0, B: 0.003, V: 0.005 },
      axis: "onAxis",
      fraction: 0.95,
      channels: ["R", "G", "B", "V"],
    },
    samples: [
      {
        channel: "R",
        focusZ: 59.99,
        focusShiftMm: -0.01,
        relativeFocusShiftMm: -0.01,
        imageHeightMm: -0.002,
        relativeImageHeightMm: -0.002,
        usable: true,
        clipped: false,
      },
      {
        channel: "G",
        focusZ: 60,
        focusShiftMm: 0,
        relativeFocusShiftMm: 0,
        imageHeightMm: 0,
        relativeImageHeightMm: 0,
        usable: true,
        clipped: false,
      },
      {
        channel: "B",
        focusZ: 60.02,
        focusShiftMm: 0.02,
        relativeFocusShiftMm: 0.02,
        imageHeightMm: 0.003,
        relativeImageHeightMm: 0.003,
        usable: true,
        clipped: false,
      },
      {
        channel: "V",
        focusZ: 60.025,
        focusShiftMm: 0.025,
        relativeFocusShiftMm: 0.025,
        imageHeightMm: 0.005,
        relativeImageHeightMm: 0.005,
        usable: true,
        clipped: false,
      },
    ],
    validChannelCount: 4,
  },
  lateralColor: {
    channels: ["R", "G", "B", "V"],
    referenceChannel: "G",
    fieldFractions: [0, 1],
    fields: [
      {
        fieldFraction: 0,
        label: "0%",
        fieldAngleDeg: 0,
        referenceChannel: "G",
        referenceImageHeightMm: 0,
        lateralSpreadMm: 0,
        lateralSpreadUm: 0,
        samples: [
          { channel: "R", imageHeightMm: 0, relativeHeightMm: 0, usable: true, clipped: false },
          { channel: "G", imageHeightMm: 0, relativeHeightMm: 0, usable: true, clipped: false },
          { channel: "B", imageHeightMm: 0, relativeHeightMm: 0, usable: true, clipped: false },
          { channel: "V", imageHeightMm: 0, relativeHeightMm: 0, usable: true, clipped: false },
        ],
        validChannelCount: 4,
        usable: true,
      },
      {
        fieldFraction: 1,
        label: "100%",
        fieldAngleDeg: 12,
        referenceChannel: "G",
        referenceImageHeightMm: 10,
        lateralSpreadMm: 0.017,
        lateralSpreadUm: 17,
        samples: [
          { channel: "R", imageHeightMm: 9.995, relativeHeightMm: -0.005, usable: true, clipped: false },
          { channel: "G", imageHeightMm: 10, relativeHeightMm: 0, usable: true, clipped: false },
          { channel: "B", imageHeightMm: 10.007, relativeHeightMm: 0.007, usable: true, clipped: false },
          { channel: "V", imageHeightMm: 10.012, relativeHeightMm: 0.012, usable: true, clipped: false },
        ],
        validChannelCount: 4,
        usable: true,
      },
    ],
    usableFieldCount: 2,
    maxLateralSpreadMm: 0.017,
    maxLateralSpreadUm: 17,
    imagePlaneZ: 60,
    halfFieldDeg: 12,
  },
};

const chromaticRayFanAnalysis = {
  channels: ["R", "G", "B", "V"],
  spreads: {
    onAxis: chromaticAnalysis.longitudinalFocus.spread,
    offAxis: {
      axialInterceptSpreadMm: 0.018,
      imagePlaneHeightSpreadMm: 0.009,
      axialIntercepts: { R: 59.98, G: 60, B: 60.01, V: 60.015 },
      imagePlaneHeights: { R: 9.99, G: 10, B: 10.006, V: 10.009 },
      axis: "offAxis",
      fraction: 0.75,
      channels: ["R", "G", "B", "V"],
    },
  },
  offAxisFieldAngleDeg: 12,
  onAxisAttemptedRayCount: 4,
  offAxisAttemptedRayCount: 4,
};

const pupilProfiles = {
  ep: {
    samples: [
      { fieldFrac: 0, fieldDeg: 0, chiefRayCorrection: 1, epShiftMm: 0 },
      { fieldFrac: 1, fieldDeg: 12, chiefRayCorrection: 1.05, epShiftMm: 0.2 },
    ],
    paraxialEpZRelStop: -8,
    maxAbsShiftMm: 0.2,
    halfFieldDeg: 12,
  },
  xp: {
    samples: [
      { fieldFrac: 0, fieldDeg: 0, xpZRelLastSurf: 20, xpShiftMm: 0 },
      { fieldFrac: 1, fieldDeg: 12, xpZRelLastSurf: 20.3, xpShiftMm: 0.3 },
    ],
    paraxialXpZRelLastSurf: 20,
    maxAbsShiftMm: 0.3,
    halfFieldDeg: 12,
  },
  halfFieldDeg: 12,
  maxAbsEpShiftMm: 0.2,
  maxAbsXpShiftMm: 0.3,
};

const opticalSummary = {
  currentEFLMm: 51,
  infinityEFLMm: 50,
  breathingPercent: 2,
  effectiveFNumber: 2.55,
  entrancePupilDiameterMm: 20,
  physicalStopDiameterMm: 10,
  halfFieldDeg: 12,
  fullFieldDeg: 24,
  focusDistanceM: 2.5,
  zoomT: 0.3,
  focusT: 0.2,
  aberrationT: 0.4,
  imagePlaneZMm: 60,
  totalTrackMm: 60,
  surfaceCount: 2,
  opticalPath: "sequential",
  cardinalEFLMm: 50.9,
  bfdMm: 40,
  ffdMm: 45,
  principalHiatusMm: -2,
};

describe("prepared-state analysis tabs", () => {
  beforeEach(() => {
    mockPreparedState.lens = {};
    mockComputeBothPupilAberrationProfiles.mockReset();
    mockComputeBothPupilAberrationProfiles.mockReturnValue(pupilProfiles);
    mockComputeChromaticAnalysis.mockReset();
    mockComputeChromaticAnalysis.mockReturnValue(chromaticAnalysis);
    mockComputeChromaticRayFanAnalysis.mockReset();
    mockComputeChromaticRayFanAnalysis.mockReturnValue(chromaticRayFanAnalysis);
    mockComputeDistortionCurve.mockReset();
    mockComputeDistortionCurve.mockReturnValue({
      samples: distortionSamples,
      corner: { status: "reached" },
      cornerImageHeight: 10,
    });
    mockComputeDistortionFieldGrid.mockReset();
    mockComputeDistortionFieldGrid.mockReturnValue(distortionFieldGrid);
    mockComputeFieldCurvatureBundle.mockReset();
    mockComputeFieldCurvatureBundle.mockReturnValue({ fieldCurvature: null, chromaticFieldCurvature: null });
    mockComputeOpticalSummary.mockReset();
    mockComputeOpticalSummary.mockReturnValue(opticalSummary);
    mockComputeVignettingCurve.mockReset();
    mockComputeVignettingCurve.mockReturnValue(vignettingSamples);
    mockPrepareRuntimeState.mockReset();
  });

  it("routes distortion work through one request and lazy context", () => {
    const html = renderToStaticMarkup(
      React.createElement(DistortionTab, {
        L: lens,
        t: themes.dark,
        focusT: 0.2,
        zoomT: 0.3,
        aberrationT: 0.4,
        dynamicEFL: 51,
        currentPhysStopSD: 5,
        fieldGeometry,
        preparedState,
      }),
    );

    expect(html).toContain("Rectilinear distortion");
    expect(html).toContain("Image height (% of edge)");
    expect(html).toContain("No distortion");
    expect(html).toContain("100%");
    expect(html).not.toContain("Field angle (°)");
    expect(mockPrepareRuntimeState).not.toHaveBeenCalled();
    expect(mockComputeDistortionCurve).toHaveBeenCalledWith(
      expect.objectContaining({
        preparedGeometry: preparedState,
        dynamicEFL: 51,
        aperture: { entrancePupilSemiDiameterMm: 5, stopSemiDiameterMm: 5 },
        fieldGeometry,
      }),
    );
    expect(mockComputeDistortionFieldGrid).toHaveBeenCalledWith(
      expect.objectContaining({
        preparedGeometry: preparedState,
        fieldGeometry,
        sampling: {},
      }),
    );
  });

  it("keeps an unavailable corner separate from the last traced height", () => {
    mockComputeDistortionCurve.mockReturnValue({
      samples: distortionSamples.map((sample) => ({
        ...sample,
        normalizedImageHeight: sample.normalizedImageHeight * 0.6,
      })),
      corner: { status: "unreachable", reason: "trace-failure" },
      cornerImageHeight: 16.67,
    });
    const html = renderToStaticMarkup(
      React.createElement(DistortionTab, {
        L: lens,
        t: themes.dark,
        focusT: 0,
        zoomT: 0,
        dynamicEFL: 50,
        currentPhysStopSD: 5,
        preparedState,
      }),
    );
    expect(html).toContain("CORNER");
    expect(html).toContain("Unavailable");
    expect(html).toContain("No complete chief ray reaches the corner");
    expect(html).toContain("LAST TRACED HEIGHT");
    expect(html).toContain("Last traced: +1.20%");
    expect(html).toContain("Image height (% of edge)");
  });

  it("names the distortion sign: negative is barrel, positive is pincushion", () => {
    /* distortionPercent = 100 × (real − ideal) / ideal, so the sign fixes the direction. */
    const renderEdge = (edgePercent: number, referenceKind = "rectilinear") => {
      mockComputeDistortionCurve.mockReturnValue({
        corner: { status: "reached" },
        cornerImageHeight: 10,
        samples: distortionSamples.map((sample, index) => ({
          ...sample,
          referenceKind,
          distortionPercent: index === 0 ? 0 : edgePercent,
        })),
      });
      return renderToStaticMarkup(
        React.createElement(DistortionTab, {
          L: lens,
          t: themes.dark,
          focusT: 0,
          zoomT: 0,
          dynamicEFL: 50,
          currentPhysStopSD: 5,
          fieldGeometry,
          preparedState: { ...preparedState },
        }),
      );
    };

    /* The chart label is the SVG text node; the summary note is the parenthesised one. */
    const barrel = renderEdge(-1.2);
    expect(barrel).toContain(">barrel</text>");
    expect(barrel).toContain("(barrel)");
    expect(barrel).not.toContain("pincushion");

    const pincushion = renderEdge(1.2);
    expect(pincushion).toContain(">pincushion</text>");
    expect(pincushion).toContain("(pincushion)");
    expect(pincushion).not.toContain(">barrel</text>");
    expect(pincushion).not.toContain("(barrel)");

    const outward = renderEdge(1.2, "fisheye-equidistant");
    expect(outward).toContain(">outward residual</text>");
    expect(outward).toContain("(outward residual)");

    const inward = renderEdge(-1.2, "fisheye-equidistant");
    expect(inward).toContain(">inward residual</text>");
    expect(inward).toContain("(inward residual)");
  });

  it("routes optical summary work through an analysis request", () => {
    const html = renderToStaticMarkup(
      React.createElement(OpticalSummaryTab, {
        L: lens,
        t: themes.dark,
        focusT: 0.2,
        zoomT: 0.3,
        aberrationT: 0.4,
        dynamicEFL: 51,
        currentEPSD: 10,
        currentPhysStopSD: 5,
        fieldGeometry,
        preparedState,
      }),
    );

    expect(html).toContain("Optical State");
    expect(mockPrepareRuntimeState).not.toHaveBeenCalled();
    expect(mockComputeOpticalSummary).toHaveBeenCalledWith(
      expect.objectContaining({
        preparedGeometry: preparedState,
        dynamicEFL: 51,
        aperture: { entrancePupilSemiDiameterMm: 10, stopSemiDiameterMm: 5 },
        fieldGeometry,
      }),
    );
  });

  it("routes chromatic work through the prepared-state job facade", () => {
    const html = renderToStaticMarkup(
      React.createElement(ChromaticTab, {
        L: lens,
        t: themes.dark,
        focusT: 0.2,
        zoomT: 0.3,
        aberrationT: 0.4,
        currentEPSD: 10,
        currentPhysStopSD: 5,
        fieldGeometry,
        preparedState,
      }),
    );

    expect(html).toContain("Axial Color (LoCA)");
    expect(html).toContain("V ng");
    expect(mockPrepareRuntimeState).not.toHaveBeenCalled();
    expect(mockComputeChromaticAnalysis).toHaveBeenCalledWith(preparedState, 10, 5, fieldGeometry);
    expect(mockComputeChromaticRayFanAnalysis).toHaveBeenCalledWith(preparedState, 10, 5, fieldGeometry, {
      channels: ["R", "G", "B", "V"],
    });
    expect(mockComputeFieldCurvatureBundle).toHaveBeenCalledWith(
      expect.objectContaining({
        preparedGeometry: preparedState,
        aperture: { entrancePupilSemiDiameterMm: 10, stopSemiDiameterMm: 5 },
        fieldGeometry,
      }),
    );
  });

  it("routes vignetting work through one request and lazy context", () => {
    const html = renderToStaticMarkup(
      React.createElement(VignettingTab, {
        L: lens,
        t: themes.dark,
        focusT: 0.2,
        zoomT: 0.3,
        aberrationT: 0.4,
        currentEPSD: 10,
        currentPhysStopSD: 5,
        fieldGeometry,
        preparedState,
      }),
    );

    expect(html).toContain("Vignetting / Relative Illumination");
    expect(mockPrepareRuntimeState).not.toHaveBeenCalled();
    expect(mockComputeVignettingCurve).toHaveBeenCalledWith(
      expect.objectContaining({
        preparedGeometry: preparedState,
        aperture: { entrancePupilSemiDiameterMm: 10, stopSemiDiameterMm: 5 },
        fieldGeometry,
      }),
    );
  });

  it("routes pupil work through one request and lazy context", () => {
    const html = renderToStaticMarkup(
      React.createElement(PupilAberrationTab, {
        L: lens,
        t: themes.dark,
        focusT: 0.2,
        zoomT: 0.3,
        aberrationT: 0.4,
        fieldGeometry,
        preparedState,
      }),
    );

    expect(html).toContain("Pupil aberration");
    expect(mockPrepareRuntimeState).not.toHaveBeenCalled();
    expect(mockComputeBothPupilAberrationProfiles).toHaveBeenCalledWith(
      expect.objectContaining({
        preparedGeometry: preparedState,
        dynamicEFL: 0,
        aperture: { entrancePupilSemiDiameterMm: 0, stopSemiDiameterMm: 0 },
        fieldGeometry,
        sampling: {},
      }),
    );
  });

  it("reuses the supplied pupil request and its combined cached result", () => {
    const analysisContext = createAnalysisComputationContext({
      preparedState,
      dynamicEFL: 50,
      currentEPSD: 10,
      currentPhysStopSD: 5,
      fieldGeometry: { ...fieldGeometry, halfFieldDeg: 8 },
      sampling: { pupilAberrationSampleCount: 7 },
    });
    const tab = React.createElement(PupilAberrationTab, {
      L: lens,
      t: themes.dark,
      focusT: 0.2,
      zoomT: 0.3,
      aberrationT: 0.4,
      fieldGeometry,
      preparedState,
      analysisContext,
    });
    expect(renderToStaticMarkup(tab)).toContain("Pupil aberration");
    expect(renderToStaticMarkup(tab)).toContain("Pupil aberration");
    expect(mockComputeBothPupilAberrationProfiles).toHaveBeenCalledExactlyOnceWith(analysisContext.request);
  });
});
