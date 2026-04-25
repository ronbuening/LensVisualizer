// @vitest-environment jsdom

import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import AsphericComparisonOverlay from "../src/components/display/AsphericComparisonOverlay.js";
import type { RuntimeLens, ElementData, SurfaceData, AsphericCoefficients } from "../src/types/optics.js";
import type { Theme } from "../src/types/theme.js";

afterEach(() => cleanup());

const mockTheme = {
  title: "#fff",
  muted: "#666",
  value: "#eee",
  propLabel: "#999",
  asphLabel: "#8af",
  asphStroke: "#5af",
  axis: "#444",
  panelBg: "#1a1a1a",
  panelBorder: "#333",
  toggleBg: "#222",
  toggleBorder: "#444",
  toggleText: "#aaa",
  toggleActiveBg: "#336",
  toggleActiveBorder: "#66f",
  toggleActiveText: "#fff",
  sliderAccent: "#5af",
  _strokeDefault: "#888",
} as unknown as Theme;

const asph: AsphericCoefficients = { K: -0.5, A4: 1e-7, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 };

const surf1: SurfaceData = { label: "3A", R: 50, d: 5.0, nd: 1.5, sd: 12, elemId: 1 };
const surf2: SurfaceData = { label: "4", R: -30, d: 2.0, nd: 1.0, sd: 12, elemId: 0 };
const surf3: SurfaceData = { label: "5A", R: -50, d: 2.0, nd: 1.0, sd: 10, elemId: 0 };

const elementInfo: ElementData = { id: 1, name: "Crown glass", label: "E1", type: "biconvex", nd: 1.518 };

function makeLens(surfaces: SurfaceData[], asphByIdx: Record<number, AsphericCoefficients>): RuntimeLens {
  return {
    ES: [[1, 0, surfaces.length - 1]] as unknown as RuntimeLens["ES"],
    S: surfaces,
    asphByIdx,
    elements: [elementInfo],
  } as unknown as RuntimeLens;
}

describe("AsphericComparisonOverlay — single aspheric surface", () => {
  const L = makeLens([surf1, surf2], { 0: asph });

  it("renders without crashing", () => {
    render(<AsphericComparisonOverlay L={L} info={elementInfo} theme={mockTheme} />);
  });

  it("renders the mode toggle buttons", () => {
    render(<AsphericComparisonOverlay L={L} info={elementInfo} theme={mockTheme} />);
    expect(screen.getByText("Base sphere (R)")).toBeTruthy();
    expect(screen.getByText("Best-fit sphere")).toBeTruthy();
  });

  it("renders the exaggeration slider", () => {
    render(<AsphericComparisonOverlay L={L} info={elementInfo} theme={mockTheme} />);
    expect(screen.getByText("Exaggeration")).toBeTruthy();
  });

  it("renders an SVG element", () => {
    const { container } = render(<AsphericComparisonOverlay L={L} info={elementInfo} theme={mockTheme} />);
    expect(container.querySelector("svg")).toBeTruthy();
  });

  it("renders the element label in the header", () => {
    render(<AsphericComparisonOverlay L={L} info={elementInfo} theme={mockTheme} />);
    expect(screen.getByText(/E1.*Aspheric departure/)).toBeTruthy();
  });

  it("renders per-surface stats footer with peak and rms", () => {
    render(<AsphericComparisonOverlay L={L} info={elementInfo} theme={mockTheme} />);
    expect(screen.getByText(/peak/)).toBeTruthy();
    expect(screen.getByText(/rms/)).toBeTruthy();
  });

  it("renders zoom control buttons", () => {
    render(<AsphericComparisonOverlay L={L} info={elementInfo} theme={mockTheme} />);
    expect(screen.getByLabelText("zoom in")).toBeTruthy();
    expect(screen.getByLabelText("zoom out")).toBeTruthy();
    expect(screen.getByLabelText("reset zoom")).toBeTruthy();
  });
});

describe("AsphericComparisonOverlay — both surfaces aspheric", () => {
  const asph2: AsphericCoefficients = { K: -0.3, A4: -5e-8, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 };
  const L = makeLens([surf1, surf3], { 0: asph, 1: asph2 });

  it("renders without crashing", () => {
    render(<AsphericComparisonOverlay L={L} info={elementInfo} theme={mockTheme} />);
  });

  it("renders stats for both surfaces", () => {
    render(<AsphericComparisonOverlay L={L} info={elementInfo} theme={mockTheme} />);
    const peakEls = screen.getAllByText(/peak/);
    expect(peakEls.length).toBeGreaterThanOrEqual(2);
  });
});

describe("AsphericComparisonOverlay — no aspheric surfaces", () => {
  const L = makeLens([surf1, surf2], {});

  it("renders the fallback message", () => {
    render(<AsphericComparisonOverlay L={L} info={elementInfo} theme={mockTheme} />);
    expect(screen.getByText(/no aspheric surfaces/i)).toBeTruthy();
  });

  it("does not render an SVG in the fallback state", () => {
    const { container } = render(<AsphericComparisonOverlay L={L} info={elementInfo} theme={mockTheme} />);
    expect(container.querySelector("svg")).toBeFalsy();
  });
});
