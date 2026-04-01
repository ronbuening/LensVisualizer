// @vitest-environment jsdom

import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import BokehPreviewGrid from "../src/components/display/BokehPreviewGrid.js";
import type { BokehPreviewGrid as BokehPreviewGridData } from "../src/optics/aberrationAnalysis.js";
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

function makePoint(index: number, sag: number, tan: number) {
  return {
    index,
    sourceSampleIndex: index,
    sagittalImageHeight: sag,
    tangentialImageHeight: tan,
    weight: 1,
    radiusFraction: null,
  };
}

function makeField(
  fieldFraction: 0 | 0.25 | 0.5 | 0.75,
  label: string,
  usable: boolean,
  vignetteTransmission = 0.9,
): BokehPreviewGridData["fields"][number] {
  return {
    fieldFraction,
    label,
    fieldAngleDeg: fieldFraction * 20,
    sampleCount: 225,
    validSampleCount: usable ? 200 : 0,
    clippedSampleCount: usable ? 25 : 225,
    vignetteTransmission: usable ? vignetteTransmission : 0,
    chiefTangentialImageHeight: 0,
    chiefSagittalImageHeight: 0,
    minRelativeSagittalImageHeight: -0.1,
    maxRelativeSagittalImageHeight: 0.1,
    minRelativeTangentialImageHeight: -0.1,
    maxRelativeTangentialImageHeight: 0.1,
    centroidSagittalImageHeight: 0,
    centroidTangentialImageHeight: 0,
    rmsRadiusMm: 0.05,
    rmsRadiusUm: 50,
    points: usable ? [makePoint(0, 0.05, 0.05), makePoint(1, -0.05, -0.05)] : [],
    usable,
  };
}

function makeGrid(usableFlags: boolean[]): BokehPreviewGridData {
  const fractions = [0, 0.25, 0.5, 0.75] as const;
  const labels = ["Center", "25%", "50%", "75%"];
  const fields = fractions.map((f, i) => makeField(f, labels[i], usableFlags[i]));
  return {
    fieldFractions: fractions,
    fields,
    sharedSpotHalfRangeMm: 0.115, // 0.1 * 1.15
    usableFieldCount: usableFlags.filter(Boolean).length,
  };
}

describe("BokehPreviewGrid", () => {
  it("renders all 4 field tile labels", () => {
    render(<BokehPreviewGrid grid={makeGrid([true, true, true, true])} t={theme} focusLabel="Infinity" />);
    expect(screen.getAllByText("Center").length).toBeGreaterThan(0);
    expect(screen.getAllByText("25%").length).toBeGreaterThan(0);
    expect(screen.getAllByText("50%").length).toBeGreaterThan(0);
    expect(screen.getAllByText("75%").length).toBeGreaterThan(0);
  });

  it("shows field angle labels for usable tiles", () => {
    render(<BokehPreviewGrid grid={makeGrid([true, false, false, false])} t={theme} focusLabel="Infinity" />);
    expect(screen.getByText("0.0°")).toBeTruthy();
  });

  it("shows 'Unavailable' label for unusable tiles", () => {
    render(<BokehPreviewGrid grid={makeGrid([true, false, false, false])} t={theme} focusLabel="Infinity" />);
    expect(screen.getAllByText("Unavailable").length).toBe(3);
  });

  it("shows 'Insufficient data' text inside unusable tiles", () => {
    render(<BokehPreviewGrid grid={makeGrid([false, false, false, false])} t={theme} focusLabel="Infinity" />);
    expect(screen.getAllByText("Insufficient data").length).toBe(4);
  });

  it("shows vignetting T% label for usable tiles", () => {
    render(<BokehPreviewGrid grid={makeGrid([true, true, false, false])} t={theme} focusLabel="Near" />);
    // vignetteTransmission=0.9 → "90% T"
    expect(screen.getAllByText("90% T").length).toBe(2);
  });

  it("renders the footer axis label", () => {
    render(<BokehPreviewGrid grid={makeGrid([true, true, true, true])} t={theme} focusLabel="Infinity" />);
    expect(screen.getByText("Sagittal (horiz.) / tangential (vert.) relative to chief ray (mm)")).toBeTruthy();
  });

  it("renders a scale bar label in the footer", () => {
    // sharedSpotHalfRangeMm=0.115 → pxPerMm=56/0.23≈243, maxBarMm=0.115 → picks 100 µm
    render(<BokehPreviewGrid grid={makeGrid([true, true, true, true])} t={theme} focusLabel="Infinity" />);
    expect(screen.getByText("100 µm")).toBeTruthy();
  });

  it("renders data-bokeh-tile attributes for all tiles", () => {
    const { container } = render(
      <BokehPreviewGrid grid={makeGrid([true, true, true, true])} t={theme} focusLabel="Infinity" />,
    );
    expect(container.querySelector('[data-bokeh-tile="Center"]')).toBeTruthy();
    expect(container.querySelector('[data-bokeh-tile="25%"]')).toBeTruthy();
    expect(container.querySelector('[data-bokeh-tile="50%"]')).toBeTruthy();
    expect(container.querySelector('[data-bokeh-tile="75%"]')).toBeTruthy();
  });

  it("renders point-cloud circles inside usable tiles", () => {
    const { container } = render(
      <BokehPreviewGrid grid={makeGrid([true, false, false, false])} t={theme} focusLabel="Infinity" />,
    );
    const centerTile = container.querySelector('[data-bokeh-tile="Center"]');
    expect(centerTile).toBeTruthy();
    // Should have at least 2 point-cloud circles plus the aperture reference circle
    const circles = centerTile!.querySelectorAll("circle");
    expect(circles.length).toBeGreaterThanOrEqual(3);
  });

  it("renders aperture reference circle for usable tiles", () => {
    const { container } = render(
      <BokehPreviewGrid grid={makeGrid([true, false, false, false])} t={theme} focusLabel="Infinity" />,
    );
    const centerTile = container.querySelector('[data-bokeh-tile="Center"]');
    // Aperture circle has fill="none"
    const apertureCircle = Array.from(centerTile!.querySelectorAll("circle")).find(
      (c) => c.getAttribute("fill") === "none",
    );
    expect(apertureCircle).toBeTruthy();
  });
});
