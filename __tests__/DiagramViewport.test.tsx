// @vitest-environment jsdom

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import DiagramViewport from "../src/components/layout/lensDiagram/DiagramViewport.js";
import type { RuntimeLens } from "../src/types/optics.js";
import type { Theme } from "../src/types/theme.js";

const { mockAnalysisDrawer, mockPanelOverlay } = vi.hoisted(() => ({
  mockAnalysisDrawer: vi.fn(),
  mockPanelOverlay: vi.fn(),
}));

vi.mock("../src/components/diagram/DiagramSVG.js", () => ({
  default: () => <div>Diagram SVG</div>,
}));

vi.mock("../src/components/layout/AnalysisDrawer.js", () => ({
  default: (props: Record<string, any>) => {
    mockAnalysisDrawer(props);
    return props.open ? <div data-testid="analysis-drawer">{props.children}</div> : null;
  },
}));

vi.mock("../src/components/layout/PanelOverlay.js", () => ({
  default: (props: Record<string, any>) => {
    mockPanelOverlay(props);
    return <div data-testid="panel-overlay">{props.children}</div>;
  },
}));

vi.mock("../src/components/diagram/LCAOverlayContent.js", () => ({
  default: () => <div>LCA Overlay</div>,
}));

vi.mock("../src/components/diagram/PetzvalOverlayContent.js", () => ({
  default: () => <div>Petzval Overlay</div>,
}));

const baseProps = {
  L: { N: 2 } as RuntimeLens,
  t: {
    toggleBg: "#000",
    toggleBorder: "#333",
    muted: "#999",
  } as Theme,
  dark: false,
  sx: (value: number) => value,
  sy: (value: number) => value,
  CX: 0,
  IX: 0,
  effectiveSC: 1,
  zPos: [0, 5],
  IMG_MM: 36,
  shapes: [],
  filterId: "filter",
  stopZ: 0,
  currentPhysStopSD: 5,
  rays: [],
  offAxisRays: [],
  chromaticRays: [],
  chromSpread: { lcaMm: 0.1, tcaMm: 0.2, intercepts: {}, imgHeights: {} },
  showOnAxis: true,
  showOffAxis: "full",
  showChromatic: true,
  showPupils: true,
  act: null,
  onHover: vi.fn(),
  onSelect: vi.fn(),
  sel: null,
  maxSvgHeight: "400px",
  useSideLayout: false,
  headerHeight: 0,
  compact: false,
  flashVisible: false,
  flashKey: 0,
  flashFading: false,
  showLcaOverlay: false,
  showPetzvalOverlay: false,
  onCloseLcaOverlay: vi.fn(),
  onClosePetzvalOverlay: vi.fn(),
  onOpenLcaOverlay: vi.fn(),
  onOpenPetzvalOverlay: vi.fn(),
  analysisDrawerOpen: false,
  onAnalysisDrawerToggle: vi.fn(),
  analysisDrawerTab: "aberrations",
  onAnalysisTabChange: vi.fn(),
  isWide: true,
  analysisContent: <div>Drawer Body</div>,
  zoomPanActive: false,
  onZoomPanToggle: vi.fn(),
  zoomLevel: 1,
  onZoomReset: vi.fn(),
};

describe("DiagramViewport", () => {
  beforeEach(() => {
    mockAnalysisDrawer.mockReset();
    mockPanelOverlay.mockReset();
  });

  afterEach(() => {
    cleanup();
  });

  it("shows the launch button when the analysis drawer is closed", () => {
    render(<DiagramViewport {...baseProps} />);

    fireEvent.click(screen.getByRole("button", { name: /ABERRATIONS & DISTORTIONS/i }));

    expect(baseProps.onAnalysisDrawerToggle).toHaveBeenCalledWith(true);
    expect(screen.queryByTestId("analysis-drawer")).toBeNull();
  });

  it("renders the analysis drawer content and hides the launch button when open", () => {
    render(<DiagramViewport {...baseProps} analysisDrawerOpen />);

    expect(screen.getByTestId("analysis-drawer")).toBeTruthy();
    expect(screen.getByText("Drawer Body")).toBeTruthy();
    expect(screen.queryByRole("button", { name: /ABERRATIONS & DISTORTIONS/i })).toBeNull();
    expect(mockAnalysisDrawer.mock.calls[0][0].activeTab).toBe("aberrations");
  });

  it("gates the LCA overlay on chromatic mode and available data", () => {
    const { rerender } = render(<DiagramViewport {...baseProps} showLcaOverlay />);

    expect(screen.getByText("LCA Overlay")).toBeTruthy();

    rerender(<DiagramViewport {...baseProps} showLcaOverlay showChromatic={false} />);
    expect(screen.queryByText("LCA Overlay")).toBeNull();

    rerender(<DiagramViewport {...baseProps} showLcaOverlay chromSpread={null} />);
    expect(screen.queryByText("LCA Overlay")).toBeNull();
  });

  it("shows the Petzval overlay independently of chromatic gating", () => {
    render(<DiagramViewport {...baseProps} showPetzvalOverlay showChromatic={false} chromSpread={null} />);

    expect(screen.getByText("Petzval Overlay")).toBeTruthy();
  });

  /* ── Zoom/pan mode ── */

  it("renders zoom toggle button in the lower-right when zoom mode is off", () => {
    render(<DiagramViewport {...baseProps} />);
    const btn = screen.getByRole("button", { name: /enter zoom and pan mode/i });
    expect(btn).toBeTruthy();
  });

  it("clicking zoom button calls onZoomPanToggle(true)", () => {
    render(<DiagramViewport {...baseProps} />);
    fireEvent.click(screen.getByRole("button", { name: /enter zoom and pan mode/i }));
    expect(baseProps.onZoomPanToggle).toHaveBeenCalledWith(true);
  });

  it("hides the analysis drawer button when zoom mode is active", () => {
    render(<DiagramViewport {...baseProps} zoomPanActive />);
    expect(screen.queryByRole("button", { name: /ABERRATIONS & DISTORTIONS/i })).toBeNull();
  });

  it("hides the zoom toggle button when zoom mode is active", () => {
    render(<DiagramViewport {...baseProps} zoomPanActive />);
    expect(screen.queryByRole("button", { name: /enter zoom and pan mode/i })).toBeNull();
  });

  it("renders Reset and Cancel buttons when zoom mode is active", () => {
    render(<DiagramViewport {...baseProps} zoomPanActive />);
    expect(screen.getByRole("button", { name: /reset zoom/i })).toBeTruthy();
    expect(screen.getByRole("button", { name: /exit zoom and pan mode/i })).toBeTruthy();
  });

  it("Cancel button calls onZoomPanToggle(false)", () => {
    render(<DiagramViewport {...baseProps} zoomPanActive />);
    fireEvent.click(screen.getByRole("button", { name: /exit zoom and pan mode/i }));
    expect(baseProps.onZoomPanToggle).toHaveBeenCalledWith(false);
  });

  it("Reset button calls onZoomReset", () => {
    render(<DiagramViewport {...baseProps} zoomPanActive zoomLevel={3.5} />);
    fireEvent.click(screen.getByRole("button", { name: /reset zoom/i }));
    expect(baseProps.onZoomReset).toHaveBeenCalled();
  });

  it("shows zoom level indicator when zoomed in", () => {
    render(<DiagramViewport {...baseProps} zoomPanActive zoomLevel={3.5} />);
    expect(screen.getByText("3.5x")).toBeTruthy();
  });

  it("hides zoom level indicator at 1x", () => {
    render(<DiagramViewport {...baseProps} zoomPanActive zoomLevel={1} />);
    expect(screen.queryByText("1.0x")).toBeNull();
  });

  it("hides overlays in zoom mode", () => {
    render(<DiagramViewport {...baseProps} zoomPanActive showLcaOverlay showPetzvalOverlay />);
    expect(screen.queryByText("LCA Overlay")).toBeNull();
    expect(screen.queryByText("Petzval Overlay")).toBeNull();
  });
});
