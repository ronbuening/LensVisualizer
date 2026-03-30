// @vitest-environment jsdom

import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import ComaPreviewGrid from "../src/components/display/ComaPreviewGrid.js";
import type { ComaPointCloudPreviewResult, ComaPreviewResult } from "../src/optics/aberrationAnalysis.js";
import type { Theme } from "../src/types/theme.js";

const theme = {
  panelBg: "#111",
  panelBorder: "#222",
  muted: "#999",
  axis: "#666",
  value: "#0f0",
  label: "#eee",
} as unknown as Theme;

afterEach(() => {
  cleanup();
});

function meridionalResult(): ComaPreviewResult {
  return {
    fieldFractions: [0, 0.25, 0.5, 0.75],
    usableFieldCount: 4,
    sharedRelativeHalfRangeMm: 0.2,
    fields: [
      {
        fieldFraction: 0,
        label: "Center",
        fieldAngleDeg: 0,
        sampleCount: 51,
        validSampleCount: 3,
        clippedSampleCount: 0,
        chiefIntercept: 0,
        minRelativeIntercept: -0.1,
        maxRelativeIntercept: 0.1,
        usable: true,
        samples: [
          { index: 0, pupilFraction: -1, launchHeight: -10, imageHeight: -0.1, relativeImageHeight: -0.1, clipped: false },
          { index: 25, pupilFraction: 0, launchHeight: 0, imageHeight: 0, relativeImageHeight: 0, clipped: false },
          { index: 50, pupilFraction: 1, launchHeight: 10, imageHeight: 0.1, relativeImageHeight: 0.1, clipped: false },
        ],
      },
      {
        fieldFraction: 0.25,
        label: "25%",
        fieldAngleDeg: 5,
        sampleCount: 51,
        validSampleCount: 3,
        clippedSampleCount: 0,
        chiefIntercept: 0,
        minRelativeIntercept: -0.08,
        maxRelativeIntercept: 0.08,
        usable: true,
        samples: [
          { index: 0, pupilFraction: -1, launchHeight: -10, imageHeight: -0.08, relativeImageHeight: -0.08, clipped: false },
          { index: 25, pupilFraction: 0, launchHeight: 0, imageHeight: 0, relativeImageHeight: 0, clipped: false },
          { index: 50, pupilFraction: 1, launchHeight: 10, imageHeight: 0.08, relativeImageHeight: 0.08, clipped: false },
        ],
      },
      {
        fieldFraction: 0.5,
        label: "50%",
        fieldAngleDeg: 10,
        sampleCount: 51,
        validSampleCount: 3,
        clippedSampleCount: 0,
        chiefIntercept: 0,
        minRelativeIntercept: -0.06,
        maxRelativeIntercept: 0.06,
        usable: true,
        samples: [
          { index: 0, pupilFraction: -1, launchHeight: -10, imageHeight: -0.06, relativeImageHeight: -0.06, clipped: false },
          { index: 25, pupilFraction: 0, launchHeight: 0, imageHeight: 0, relativeImageHeight: 0, clipped: false },
          { index: 50, pupilFraction: 1, launchHeight: 10, imageHeight: 0.06, relativeImageHeight: 0.06, clipped: false },
        ],
      },
      {
        fieldFraction: 0.75,
        label: "75%",
        fieldAngleDeg: 15,
        sampleCount: 51,
        validSampleCount: 3,
        clippedSampleCount: 0,
        chiefIntercept: 0,
        minRelativeIntercept: -0.04,
        maxRelativeIntercept: 0.04,
        usable: true,
        samples: [
          { index: 0, pupilFraction: -1, launchHeight: -10, imageHeight: -0.04, relativeImageHeight: -0.04, clipped: false },
          { index: 25, pupilFraction: 0, launchHeight: 0, imageHeight: 0, relativeImageHeight: 0, clipped: false },
          { index: 50, pupilFraction: 1, launchHeight: 10, imageHeight: 0.04, relativeImageHeight: 0.04, clipped: false },
        ],
      },
    ],
  };
}

function pointCloudResult(): ComaPointCloudPreviewResult {
  return {
    fieldFractions: [0, 0.25, 0.5, 0.75],
    usableFieldCount: 3,
    sharedTangentialHalfRangeMm: 0.2,
    sharedSagittalHalfRangeMm: 0.1,
    airyDiskRadiusMm: 0.002,
    fields: [
      {
        fieldFraction: 0,
        label: "Center",
        fieldAngleDeg: 0,
        sampleCount: 61,
        validSampleCount: 3,
        clippedSampleCount: 0,
        chiefIntercept: 0,
        minRelativeTangentialImageHeight: -0.1,
        maxRelativeTangentialImageHeight: 0.1,
        minRelativeSagittalImageHeight: -0.04,
        maxRelativeSagittalImageHeight: 0.04,
        usable: true,
        points: [{ index: 0, sourceSampleIndex: 0, tangentialImageHeight: 0.1, sagittalImageHeight: 0, weight: 0.2 }],
      },
      {
        fieldFraction: 0.25,
        label: "25%",
        fieldAngleDeg: 5,
        sampleCount: 61,
        validSampleCount: 3,
        clippedSampleCount: 0,
        chiefIntercept: 0,
        minRelativeTangentialImageHeight: -0.2,
        maxRelativeTangentialImageHeight: 0.2,
        minRelativeSagittalImageHeight: -0.05,
        maxRelativeSagittalImageHeight: 0.05,
        usable: true,
        points: [{ index: 0, sourceSampleIndex: 0, tangentialImageHeight: 0.2, sagittalImageHeight: 0, weight: 0.2 }],
      },
      {
        fieldFraction: 0.5,
        label: "50%",
        fieldAngleDeg: 10,
        sampleCount: 61,
        validSampleCount: 0,
        clippedSampleCount: 61,
        chiefIntercept: 0,
        minRelativeTangentialImageHeight: 0,
        maxRelativeTangentialImageHeight: 0,
        minRelativeSagittalImageHeight: 0,
        maxRelativeSagittalImageHeight: 0,
        usable: false,
        points: [],
      },
      {
        fieldFraction: 0.75,
        label: "75%",
        fieldAngleDeg: 15,
        sampleCount: 61,
        validSampleCount: 3,
        clippedSampleCount: 0,
        chiefIntercept: 0,
        minRelativeTangentialImageHeight: -0.05,
        maxRelativeTangentialImageHeight: 0.05,
        minRelativeSagittalImageHeight: -0.1,
        maxRelativeSagittalImageHeight: 0.1,
        usable: true,
        points: [{ index: 0, sourceSampleIndex: 12, tangentialImageHeight: -0.05, sagittalImageHeight: 0.05, weight: 0.1 }],
      },
    ],
  };
}

function verticalAxisX(tile: Element): number {
  const axis = Array.from(tile.querySelectorAll("line")).find((line) => line.getAttribute("x1") === line.getAttribute("x2"));
  expect(axis).toBeTruthy();
  return Number(axis!.getAttribute("x1"));
}

describe("ComaPreviewGrid", () => {
  it("renders the shared tile layout for meridional previews", () => {
    render(<ComaPreviewGrid result={meridionalResult()} t={theme} />);

    expect(screen.getAllByText("Center").length).toBeGreaterThan(0);
    expect(screen.getAllByText("25%").length).toBeGreaterThan(0);
    expect(screen.getAllByText("50%").length).toBeGreaterThan(0);
    expect(screen.getAllByText("75%").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Chief-ray-centered image height (mm)").length).toBeGreaterThan(0);
  });

  it("renders point-cloud tiles with shared axis copy", () => {
    render(<ComaPreviewGrid result={pointCloudResult()} t={theme} mode="pointCloud" />);

    expect(screen.getAllByText("Spot diagram").length).toBeGreaterThan(0);
    expect(screen.getByText("Tangential / sagittal image height relative to the chief ray (mm)")).toBeTruthy();
  });

  it("applies the shared tangential normalization across point-cloud tiles", () => {
    const { container } = render(<ComaPreviewGrid result={pointCloudResult()} t={theme} mode="pointCloud" />);

    const centerTile = container.querySelector('[data-coma-tile="Center"]');
    const quarterTile = container.querySelector('[data-coma-tile="25%"]');
    expect(centerTile).toBeTruthy();
    expect(quarterTile).toBeTruthy();

    const centerAxisX = verticalAxisX(centerTile!);
    const quarterAxisX = verticalAxisX(quarterTile!);
    const centerDataCircles = centerTile!.querySelectorAll("circle:not([stroke-dasharray])");
    const quarterDataCircles = quarterTile!.querySelectorAll("circle:not([stroke-dasharray])");
    const centerPointX = Number(centerDataCircles[0]!.getAttribute("cx"));
    const quarterPointX = Number(quarterDataCircles[0]!.getAttribute("cx"));

    const centerOffset = Math.abs(centerPointX - centerAxisX);
    const quarterOffset = Math.abs(quarterPointX - quarterAxisX);
    expect(quarterOffset).toBeGreaterThan(centerOffset * 1.8);
  });

  it("shows insufficient data inside unusable point-cloud tiles", () => {
    render(<ComaPreviewGrid result={pointCloudResult()} t={theme} mode="pointCloud" />);

    expect(screen.getByText("Insufficient data")).toBeTruthy();
  });
});
