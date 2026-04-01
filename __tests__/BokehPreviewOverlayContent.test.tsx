// @vitest-environment jsdom

import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import buildLens from "../src/optics/buildLens.js";
import NikonAF28f14DRaw from "../src/lens-data/NikonAF28f14D.data.js";
import BokehPreviewOverlayContent from "../src/components/display/BokehPreviewOverlayContent.js";
import { computeBokehPreview, type BokehPreviewResult } from "../src/optics/aberrationAnalysis.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import { doLayout, entrancePupilAtState, fopenAtZoom } from "../src/optics/optics.js";
import type { LensData, RuntimeLens } from "../src/types/optics.js";
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

function build(raw: object): RuntimeLens {
  return buildLens({ ...LENS_DEFAULTS, ...raw } as LensData);
}

function stateApertureAt(L: RuntimeLens, focusT: number, zoomT: number, stopdownT: number) {
  const currentFOPEN = fopenAtZoom(zoomT, L);
  const rawFNumber = L.FOPEN * Math.pow(L.maxFstop / L.FOPEN, stopdownT);
  const fNumber = Math.max(rawFNumber, currentFOPEN);
  const currentPhysStopSD = (L.stopPhysSD * L.FOPEN) / fNumber;
  const baseEPSD = entrancePupilAtState(L.stopPhysSD, focusT, zoomT, L).epSD;
  return {
    currentPhysStopSD,
    currentEPSD: (baseEPSD * L.FOPEN) / fNumber,
  };
}

function mockResult(): BokehPreviewResult {
  const makeField = (
    label: string,
    fieldFraction: number,
    fieldAngleDeg: number,
    objectConjugate: "infinity" | "minimumFocus",
    centroidTangentialImageHeight: number,
    centroidSagittalImageHeight: number,
    clippedSampleCount: number,
  ) => ({
    fieldFraction,
    label,
    fieldAngleDeg,
    objectConjugate,
    sampleCount: 20,
    validSampleCount: 18,
    clippedSampleCount,
    chiefImageHeight: 0,
    minRelativeTangentialImageHeight: -0.08,
    maxRelativeTangentialImageHeight: 0.08,
    minRelativeSagittalImageHeight: -0.06,
    maxRelativeSagittalImageHeight: 0.06,
    centroidTangentialImageHeight,
    centroidSagittalImageHeight,
    rmsRadiusMm: 0.03,
    rmsRadiusUm: 30,
    points: [
      {
        index: 0,
        sourceSampleIndex: 0,
        tangentialImageHeight: centroidTangentialImageHeight - 0.02,
        sagittalImageHeight: centroidSagittalImageHeight - 0.01,
        weight: 0.2,
      },
      {
        index: 1,
        sourceSampleIndex: 1,
        tangentialImageHeight: centroidTangentialImageHeight,
        sagittalImageHeight: centroidSagittalImageHeight,
        weight: 0.5,
      },
      {
        index: 2,
        sourceSampleIndex: 2,
        tangentialImageHeight: centroidTangentialImageHeight + 0.02,
        sagittalImageHeight: centroidSagittalImageHeight + 0.01,
        weight: 0.8,
      },
    ],
    apertureSilhouette: { kind: "circular" as const },
    usable: true,
  });

  return {
    fieldFractions: [0, 0.25, 0.5, 0.75],
    sharedTangentialHalfRangeMm: 0.1,
    sharedSagittalHalfRangeMm: 0.08,
    sharedSpotHalfRangeMm: 0.1,
    displaySpotHalfRangeMm: 0.16,
    conjugates: [
      {
        objectConjugate: "infinity",
        label: "Infinity subject",
        usableFieldCount: 4,
        fields: [
          makeField("Center", 0, 0, "infinity", 0, 0, 0),
          makeField("25%", 0.25, 4, "infinity", 0.03, 0.01, 4),
          makeField("50%", 0.5, 8, "infinity", 0.04, 0.015, 0),
          makeField("75%", 0.75, 12, "infinity", 0.05, 0.02, 6),
        ],
      },
      {
        objectConjugate: "minimumFocus",
        label: "Minimum-focus subject",
        usableFieldCount: 4,
        fields: [
          makeField("Center", 0, 0, "minimumFocus", 0.01, -0.005, 0),
          makeField("25%", 0.25, 4.5, "minimumFocus", 0.02, -0.01, 0),
          makeField("50%", 0.5, 9, "minimumFocus", 0.03, -0.015, 2),
          makeField("75%", 0.75, 13.5, "minimumFocus", 0.045, -0.02, 5),
        ],
      },
    ],
  };
}

describe("BokehPreviewOverlayContent", () => {
  it("renders both conjugate grids, shared scale text, and legend copy", () => {
    render(<BokehPreviewOverlayContent result={mockResult()} t={theme} />);

    expect(screen.getByText("Bokeh Preview (Beta)")).toBeTruthy();
    expect(screen.getByText("Infinity subject".toUpperCase())).toBeTruthy();
    expect(screen.getByText("Minimum-focus subject".toUpperCase())).toBeTruthy();
    expect(screen.getByText(/DISPLAY SPOT SCALE/i)).toBeTruthy();
    expect(screen.getByText("LEGEND")).toBeTruthy();
    expect(screen.getByText("Crosshair = chief-ray reference")).toBeTruthy();
    expect(screen.getByText("Density shading = weighted ray overlap at the image plane")).toBeTruthy();
    expect(screen.getByText("Stop model = Circular stop silhouette")).toBeTruthy();
  });

  it("renders all eight field tiles and displays clipping badges for vignetted fields", () => {
    const { container } = render(<BokehPreviewOverlayContent result={mockResult()} t={theme} />);

    expect(container.querySelectorAll("[data-bokeh-tile]").length).toBe(8);
    expect(screen.getByText("Clip 20%")).toBeTruthy();
    expect(screen.getByText("Clip 30%")).toBeTruthy();
    expect(screen.getAllByText("Chief-ray-centered blur footprint").length).toBe(8);
  });

  it("shows a fallback message when the preview cannot be computed", () => {
    render(<BokehPreviewOverlayContent result={null} t={theme} />);

    expect(screen.getByText("Unable to compute a usable bokeh preview for this lens state.")).toBeTruthy();
  });

  it("renders visibly different RMS blur footprints as focus changes", () => {
    const L = build(NikonAF28f14DRaw);
    const zoomT = 0;
    const infinityFocus = 0;
    const closeFocus = 0.8;
    const infinityLayout = doLayout(infinityFocus, zoomT, L);
    const closeLayout = doLayout(closeFocus, zoomT, L);
    const infinityAperture = stateApertureAt(L, infinityFocus, zoomT, 0);
    const closeAperture = stateApertureAt(L, closeFocus, zoomT, 0);

    const infinityResult = computeBokehPreview(
      L,
      infinityLayout.z,
      infinityFocus,
      zoomT,
      infinityAperture.currentEPSD,
      infinityAperture.currentPhysStopSD,
    );
    const closeResult = computeBokehPreview(
      L,
      closeLayout.z,
      closeFocus,
      zoomT,
      closeAperture.currentEPSD,
      closeAperture.currentPhysStopSD,
    );

    expect(infinityResult).not.toBeNull();
    expect(closeResult).not.toBeNull();

    const { container: infinityContainer } = render(<BokehPreviewOverlayContent result={infinityResult} t={theme} />);
    const infinityRms = infinityContainer.querySelector('[data-bokeh-rms="infinity-50%"]');
    expect(infinityRms).toBeTruthy();
    const infinityRadius = Number(infinityRms!.getAttribute("r"));

    cleanup();

    const { container: closeContainer } = render(<BokehPreviewOverlayContent result={closeResult} t={theme} />);
    const closeRms = closeContainer.querySelector('[data-bokeh-rms="infinity-50%"]');
    expect(closeRms).toBeTruthy();
    const closeRadius = Number(closeRms!.getAttribute("r"));

    expect(closeRadius).not.toBeCloseTo(infinityRadius, 4);
  });
});
