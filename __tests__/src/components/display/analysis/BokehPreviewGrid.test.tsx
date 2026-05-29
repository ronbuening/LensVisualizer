// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import BokehPreviewGrid from "../../../../../src/components/display/analysis/BokehPreviewGrid.js";
import themes from "../../../../../src/utils/theme/themes.js";
import type { BokehPreviewResult } from "../../../../../src/optics/aberrationAnalysis.js";

function field(overrides: Partial<BokehPreviewResult["fields"][number]> = {}): BokehPreviewResult["fields"][number] {
  return {
    fieldFraction: 0,
    label: "Center",
    fieldAngleDeg: 0,
    totalRays: 1,
    passedRays: 1,
    usable: true,
    points: [],
    centroidSagittal: 0,
    centroidTangential: 0,
    rmsRadiusMm: 0.1,
    maxRadiusMm: 0.2,
    transmission: 0.75,
    centerToRimRatio: 1.4,
    brightnessCharacter: "center-bright",
    radialProfile: {
      centerDensity: 1,
      rimDensity: 0.7,
      bins: [
        { innerRadiusFraction: 0, outerRadiusFraction: 0.5, radiusFraction: 0.25, density: 1, energyFraction: 0.7 },
        {
          innerRadiusFraction: 0.5,
          outerRadiusFraction: 1,
          radiusFraction: 0.75,
          density: 0.35,
          energyFraction: 0.3,
        },
      ],
    },
    pupilFootprint: {
      samples: [{ index: 0, xFraction: 0.25, yFraction: -0.25, pupilRadius: 0.35, pupilAzimuth: 0, weight: 0.01 }],
      transmission: 0.75,
      centroidSagittal: 0.1,
      centroidTangential: -0.1,
      spanSagittal: 0.5,
      spanTangential: 0.45,
      shiftRadius: 0.2,
      catEyeAspect: 1.1,
    },
    ...overrides,
  };
}

afterEach(() => cleanup());

describe("BokehPreviewGrid", () => {
  it("renders usable fields with brightness labels and mechanical-vignette inset labels", () => {
    render(
      <BokehPreviewGrid
        t={themes.dark}
        result={{
          label: "Infinity source",
          defocusDeltaMm: -0.12,
          sharedHalfRangeMm: 0.2,
          usableFieldCount: 2,
          fields: [
            field({ fieldFraction: 0, label: "Center", brightnessCharacter: "center-bright" }),
            field({ fieldFraction: 0.25, label: "25%", brightnessCharacter: "edge-bright", fieldAngleDeg: 3.5 }),
          ],
        }}
      />,
    );

    expect(screen.getByText("CENTER-BRIGHT")).toBeTruthy();
    expect(screen.getByText("EDGE-BRIGHT")).toBeTruthy();
    expect(screen.getAllByText("MECH")).toHaveLength(2);
    expect(screen.getByText("Front defocus")).toBeTruthy();
  });

  it("renders insufficient-data tiles without crashing", () => {
    render(
      <BokehPreviewGrid
        t={themes.dark}
        result={{
          label: "Near focus source",
          defocusDeltaMm: 0.05,
          sharedHalfRangeMm: 0.01,
          usableFieldCount: 0,
          fields: [
            field({
              usable: false,
              radialProfile: { centerDensity: 0, rimDensity: 0, bins: [] },
              transmission: 0,
              brightnessCharacter: "neutral",
            }),
          ],
        }}
      />,
    );

    expect(screen.getByText("Insufficient data")).toBeTruthy();
    expect(screen.getByText("NEUTRAL")).toBeTruthy();
    expect(screen.getByText("Rear defocus")).toBeTruthy();
  });
});
