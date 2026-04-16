// @vitest-environment jsdom

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import BokehPreviewOverlay from "../src/components/display/BokehPreviewOverlay.js";
import type {
  BokehBrightnessCharacter,
  BokehFieldResult,
  BokehPreviewResult,
} from "../src/optics/aberrationAnalysis.js";
import type { RuntimeLens } from "../src/types/optics.js";
import type { Theme } from "../src/types/theme.js";

const { mockComputeBokehPreviewPair } = vi.hoisted(() => ({
  mockComputeBokehPreviewPair: vi.fn(),
}));

vi.mock("../src/optics/aberrationAnalysis.js", async () => {
  const actual = await vi.importActual("../src/optics/aberrationAnalysis.js");
  return {
    ...actual,
    computeBokehPreviewPair: mockComputeBokehPreviewPair,
  };
});

const theme = {
  panelBg: "#111",
  panelBorder: "#222",
  muted: "#999",
  value: "#7fe0ff",
  label: "#eee",
} as Theme;

function makeField(
  fieldFraction: number,
  label: string,
  brightnessCharacter: BokehBrightnessCharacter,
  centerToRimRatio: number,
): BokehFieldResult {
  return {
    fieldFraction,
    label,
    fieldAngleDeg: fieldFraction * 10,
    totalRays: 337,
    passedRays: 280,
    points: [],
    centroidSagittal: 0,
    centroidTangential: 0,
    rmsRadiusMm: 0.04,
    maxRadiusMm: 0.12,
    transmission: 0.82,
    pupilFootprint: {
      samples: [{ index: 0, xFraction: 0.1, yFraction: -0.2, pupilRadius: 0.4, pupilAzimuth: 0, weight: 0.2 }],
      transmission: 0.82,
      centroidSagittal: 0.1,
      centroidTangential: -0.2,
      spanSagittal: 1,
      spanTangential: 0.75,
      shiftRadius: 0.22,
      catEyeAspect: 0.75,
    },
    radialProfile: {
      bins: [
        { innerRadiusFraction: 0, outerRadiusFraction: 0.33, radiusFraction: 0.165, density: 0.2, energyFraction: 0.2 },
        {
          innerRadiusFraction: 0.33,
          outerRadiusFraction: 0.66,
          radiusFraction: 0.495,
          density: 0.5,
          energyFraction: 0.3,
        },
        { innerRadiusFraction: 0.66, outerRadiusFraction: 1, radiusFraction: 0.83, density: 1, energyFraction: 0.5 },
      ],
      centerDensity: brightnessCharacter === "center-bright" ? 1 : 0.2,
      rimDensity: brightnessCharacter === "edge-bright" ? 1 : 0.2,
    },
    brightnessCharacter,
    centerToRimRatio,
    usable: true,
  };
}

function makeResult(label: string, defocusDeltaMm: number, brightnessCharacter: BokehBrightnessCharacter): BokehPreviewResult {
  return {
    label,
    defocusDeltaMm,
    sharedHalfRangeMm: 0.18,
    usableFieldCount: 4,
    fields: [
      makeField(0, "Center", brightnessCharacter, brightnessCharacter === "center-bright" ? 2.4 : 0.45),
      makeField(0.25, "25%", brightnessCharacter, brightnessCharacter === "center-bright" ? 2.2 : 0.48),
      makeField(0.5, "50%", brightnessCharacter, brightnessCharacter === "center-bright" ? 2 : 0.52),
      makeField(0.75, "75%", brightnessCharacter, brightnessCharacter === "center-bright" ? 1.8 : 0.56),
    ],
  };
}

describe("BokehPreviewOverlay", () => {
  beforeEach(() => {
    mockComputeBokehPreviewPair.mockReset();
  });

  afterEach(() => {
    cleanup();
  });

  it("renders blur character, defocus side, and mechanical-vignetting markers", () => {
    mockComputeBokehPreviewPair.mockReturnValue({
      infinity: makeResult("Infinity", 0.35, "edge-bright"),
      nearFocus: makeResult("Near Focus", -0.41, "center-bright"),
    });

    render(
      <BokehPreviewOverlay
        L={{ N: 2 } as RuntimeLens}
        focusT={0.5}
        zoomT={0}
        currentEPSD={10}
        currentPhysStopSD={5}
        t={theme}
      />,
    );

    expect(screen.getByText(/Circularized blur disks show spherical-aberration brightness character/i)).toBeTruthy();
    expect(screen.getAllByText("EDGE-BRIGHT").length).toBeGreaterThan(0);
    expect(screen.getAllByText("CENTER-BRIGHT").length).toBeGreaterThan(0);
    expect(screen.getByText(/Rear defocus/i)).toBeTruthy();
    expect(screen.getByText(/Front defocus/i)).toBeTruthy();
    expect(screen.getAllByText("MECH").length).toBeGreaterThan(0);
    expect(screen.getAllByText(/82% T/i).length).toBeGreaterThan(0);
  });

  it("shows the fallback message when neither preview is available", () => {
    mockComputeBokehPreviewPair.mockReturnValue({
      infinity: null,
      nearFocus: null,
    });

    render(
      <BokehPreviewOverlay
        L={{ N: 2 } as RuntimeLens}
        focusT={0.5}
        zoomT={0}
        currentEPSD={10}
        currentPhysStopSD={5}
        t={theme}
      />,
    );

    expect(screen.getByText(/Insufficient focus range to compute bokeh preview/i)).toBeTruthy();
  });
});
