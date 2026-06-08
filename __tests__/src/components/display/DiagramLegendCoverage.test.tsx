// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import DiagramLegend from "../../../../src/components/display/DiagramLegend.js";
import themes from "../../../../src/utils/theme/themes.js";
import type { RuntimeLens } from "../../../../src/types/optics.js";

function lens(hasAbbeData = true): RuntimeLens {
  return {
    halfField: 22,
    offAxisFieldFrac: 0.7,
    isZoom: false,
    elements: [{ id: 1, vd: hasAbbeData ? 60 : undefined }],
  } as unknown as RuntimeLens;
}

const defaultAxialSpread = {
  axialInterceptSpreadMm: 0.0012,
  imagePlaneHeightSpreadMm: 0,
  axialIntercepts: {},
  imagePlaneHeights: {},
};
const defaultOffAxisSpread = {
  axialInterceptSpreadMm: 0.0002,
  imagePlaneHeightSpreadMm: 0.0004,
  axialIntercepts: {},
  imagePlaneHeights: {},
};

function renderLegend({
  isWide = true,
  legendExpanded = true,
  showOnAxis = true,
  showOffAxis = "trueAngle",
  showChromatic = true,
  chromR = true,
  chromG = false,
  chromB = true,
  chromV = false,
  rayTracksF = true,
  chromaticRayFanSpread = defaultAxialSpread,
  chromaticRayFanSpreads = chromaticRayFanSpread
    ? {
        onAxis: chromaticRayFanSpread,
        offAxis: defaultOffAxisSpread,
      }
    : { onAxis: null, offAxis: null },
  onLegendExpandedChange = vi.fn(),
  onOpenAbbeDiagram = vi.fn(),
  L = lens(),
}: Partial<Parameters<typeof DiagramLegend>[0]> = {}) {
  return {
    ...render(
      <DiagramLegend
        L={L}
        t={themes.dark}
        isWide={isWide}
        zoomT={0}
        showOnAxis={showOnAxis}
        showOffAxis={showOffAxis}
        showChromatic={showChromatic}
        chromR={chromR}
        chromG={chromG}
        chromB={chromB}
        chromV={chromV}
        chromaticRayFanSpread={chromaticRayFanSpread}
        chromaticRayFanSpreads={chromaticRayFanSpreads}
        rayTracksF={rayTracksF}
        legendExpanded={legendExpanded}
        onLegendExpandedChange={onLegendExpandedChange}
        onOpenAbbeDiagram={onOpenAbbeDiagram}
      />,
    ),
    callbacks: { onLegendExpandedChange, onOpenAbbeDiagram },
  };
}

describe("DiagramLegend", () => {
  afterEach(() => cleanup());

  it("collapses on mobile and expands through the legend toggle", () => {
    const { callbacks } = renderLegend({ isWide: false, legendExpanded: false });

    expect(screen.getByText("Tap an element for optical details")).toBeTruthy();
    expect(screen.queryByText("Aspheric surface")).toBeNull();

    fireEvent.click(screen.getByRole("button", { name: /legend/i }));

    expect(callbacks.onLegendExpandedChange).toHaveBeenCalledWith(true);
  });

  it("renders ray mode descriptions and chromatic LoCA/fan-spread readouts", () => {
    renderLegend();

    expect(screen.getByText("Hover an element for optical details")).toBeTruthy();
    expect(screen.getByText("On-axis rays (tracks focus)")).toBeTruthy();
    expect(screen.getByText(/Off-axis rays \(15\.4°/)).toBeTruthy();
    expect(screen.getByText("Vignetted (ghost)")).toBeTruthy();
    expect(screen.getByText(/Chromatic \(R\/B\)/)).toBeTruthy();
    expect(screen.getByText("LoCA / Axial color")).toBeTruthy();
    expect(screen.getByText("Off-axis fan spread")).toBeTruthy();
    expect(screen.getAllByText("1 µm").length).toBeGreaterThan(0);
    expect(screen.getByText("0.4 µm")).toBeTruthy();
  });

  it("keeps LoCA and off-axis fan-spread readouts on their own axis spreads", () => {
    renderLegend({
      chromaticRayFanSpread: {
        axialInterceptSpreadMm: 0.099,
        imagePlaneHeightSpreadMm: 0.088,
        axialIntercepts: {},
        imagePlaneHeights: {},
      },
      chromaticRayFanSpreads: {
        onAxis: {
          axialInterceptSpreadMm: 0.0012,
          imagePlaneHeightSpreadMm: 0.077,
          axialIntercepts: {},
          imagePlaneHeights: {},
        },
        offAxis: {
          axialInterceptSpreadMm: 0.066,
          imagePlaneHeightSpreadMm: 0.0004,
          axialIntercepts: {},
          imagePlaneHeights: {},
        },
      },
    });

    expect(screen.getByText("LoCA / Axial color")).toBeTruthy();
    expect(screen.getByText("Off-axis fan spread")).toBeTruthy();
    expect(screen.getAllByText("1 µm").length).toBeGreaterThan(0);
    expect(screen.getByText("0.4 µm")).toBeTruthy();
    expect(screen.queryByText("99 µm")).toBeNull();
    expect(screen.queryByText("88 µm")).toBeNull();
  });

  it("renders the Abbe button only when data and a callback are available", () => {
    const { callbacks, rerender } = renderLegend();

    fireEvent.click(screen.getByRole("button", { name: /Abbe/i }));
    expect(callbacks.onOpenAbbeDiagram).toHaveBeenCalledTimes(1);

    rerender(
      <DiagramLegend
        L={lens(false)}
        t={themes.dark}
        isWide={true}
        zoomT={0}
        showOnAxis={false}
        showOffAxis="off"
        showChromatic={false}
        chromR={false}
        chromG={false}
        chromB={false}
        chromV={false}
        chromaticRayFanSpread={null}
        rayTracksF={false}
        legendExpanded={true}
        onOpenAbbeDiagram={vi.fn()}
      />,
    );

    expect(screen.queryByRole("button", { name: /Abbe/i })).toBeNull();
    expect(screen.queryByText("On-axis rays (tracks focus)")).toBeNull();
    expect(screen.queryByText("Vignetted (ghost)")).toBeNull();
  });
});
