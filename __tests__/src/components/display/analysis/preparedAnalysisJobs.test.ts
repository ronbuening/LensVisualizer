import { beforeEach, describe, expect, it, vi } from "vitest";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import DistortionTab from "../../../../../src/components/display/analysis/DistortionTab.js";
import OpticalSummaryTab from "../../../../../src/components/display/analysis/OpticalSummaryTab.js";
import PupilAberrationTab from "../../../../../src/components/display/analysis/PupilAberrationTab.js";
import VignettingTab from "../../../../../src/components/display/analysis/VignettingTab.js";
import themes from "../../../../../src/utils/theme/themes.js";
import type { PreparedOpticalState } from "../../../../../src/optics/types.js";
import type { RuntimeLens } from "../../../../../src/types/optics.js";

const {
  mockComputeBothPupilAberrationProfiles,
  mockComputeDistortionCurve,
  mockComputeDistortionFieldGrid,
  mockComputeOpticalSummary,
  mockComputeVignettingCurve,
  mockPreparedState,
  mockPrepareRuntimeState,
} = vi.hoisted(() => ({
  mockComputeBothPupilAberrationProfiles: vi.fn(),
  mockComputeDistortionCurve: vi.fn(),
  mockComputeDistortionFieldGrid: vi.fn(),
  mockComputeOpticalSummary: vi.fn(),
  mockComputeVignettingCurve: vi.fn(),
  mockPreparedState: { cacheKey: "prepared-analysis-test" },
  mockPrepareRuntimeState: vi.fn(),
}));

vi.mock("../../../../../src/optics/compat.js", async () => {
  const actual = await vi.importActual("../../../../../src/optics/compat.js");
  return {
    ...actual,
    analysisJobsForState2: {
      ...(actual as { analysisJobsForState2: Record<string, unknown> }).analysisJobsForState2,
      computeBothPupilAberrationProfiles: mockComputeBothPupilAberrationProfiles,
      computeDistortionCurve: mockComputeDistortionCurve,
      computeDistortionFieldGrid: mockComputeDistortionFieldGrid,
      computeOpticalSummary: mockComputeOpticalSummary,
      computeVignettingCurve: mockComputeVignettingCurve,
    },
    prepareRuntimeState: mockPrepareRuntimeState,
  };
});

const preparedState = mockPreparedState as PreparedOpticalState;
const lens = { N: 2, EFL: 50, isZoom: false } as RuntimeLens;
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
    mockComputeBothPupilAberrationProfiles.mockReset();
    mockComputeBothPupilAberrationProfiles.mockReturnValue(pupilProfiles);
    mockComputeDistortionCurve.mockReset();
    mockComputeDistortionCurve.mockReturnValue(distortionSamples);
    mockComputeDistortionFieldGrid.mockReset();
    mockComputeDistortionFieldGrid.mockReturnValue(distortionFieldGrid);
    mockComputeOpticalSummary.mockReset();
    mockComputeOpticalSummary.mockReturnValue(opticalSummary);
    mockComputeVignettingCurve.mockReset();
    mockComputeVignettingCurve.mockReturnValue(vignettingSamples);
    mockPrepareRuntimeState.mockReset();
  });

  it("routes distortion work through the prepared-state job facade", () => {
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
    expect(mockPrepareRuntimeState).not.toHaveBeenCalled();
    expect(mockComputeDistortionCurve).toHaveBeenCalledWith(preparedState, 51, 5, fieldGeometry);
    expect(mockComputeDistortionFieldGrid).toHaveBeenCalledWith(preparedState, 5, fieldGeometry);
  });

  it("routes optical summary work through the prepared-state job facade", () => {
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
    expect(mockComputeOpticalSummary).toHaveBeenCalledWith(preparedState, 51, 10, 5, fieldGeometry);
  });

  it("routes vignetting work through the prepared-state job facade", () => {
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
    expect(mockComputeVignettingCurve).toHaveBeenCalledWith(preparedState, 10, 5, fieldGeometry);
  });

  it("routes pupil work through the prepared-state job facade", () => {
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
    expect(mockComputeBothPupilAberrationProfiles).toHaveBeenCalledWith(preparedState, undefined, fieldGeometry);
  });
});
