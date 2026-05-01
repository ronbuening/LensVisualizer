// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import DiagramLegend from "../src/components/display/DiagramLegend.js";
import themes from "../src/utils/themes.js";
import type { RuntimeLens } from "../src/types/optics.js";

function lens(hasAbbeData = true): RuntimeLens {
  return {
    halfField: 22,
    offAxisFieldFrac: 0.7,
    isZoom: false,
    elements: [{ id: 1, vd: hasAbbeData ? 60 : undefined }],
  } as unknown as RuntimeLens;
}

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
  chromSpread = { lcaMm: 0.0012, tcaMm: 0.0004, intercepts: {}, imgHeights: {} },
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
        chromSpread={chromSpread}
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

  it("renders ray mode descriptions and chromatic LCA/TCA readouts", () => {
    renderLegend();

    expect(screen.getByText("Hover an element for optical details")).toBeTruthy();
    expect(screen.getByText("On-axis rays (tracks focus)")).toBeTruthy();
    expect(screen.getByText(/Off-axis rays \(15\.4°/)).toBeTruthy();
    expect(screen.getByText("Vignetted (ghost)")).toBeTruthy();
    expect(screen.getByText(/Chromatic \(R\/B\)/)).toBeTruthy();
    expect(screen.getAllByText("1 µm").length).toBeGreaterThan(0);
    expect(screen.getByText("0.4 µm")).toBeTruthy();
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
        chromSpread={null}
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
