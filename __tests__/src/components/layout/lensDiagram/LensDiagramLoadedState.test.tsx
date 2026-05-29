// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { createRef, type ReactNode } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import LensDiagramLoadedState from "../../../../../src/components/layout/lensDiagram/LensDiagramLoadedState.js";
import themes from "../../../../../src/utils/theme/themes.js";
import { buildSimplePositiveElementLens } from "../../../optics/testLensFixtures.js";
import type { LensDiagramLoadedStateProps } from "../../../../../src/components/layout/lensDiagram/panelModel.js";

vi.mock("../../../../../src/components/layout/OverlayModal.js", () => ({
  default: ({ children, onClose }: { children: ReactNode; onClose: () => void }) => (
    <div data-testid="overlay-modal">
      <button onClick={onClose}>Close overlay</button>
      {children}
    </div>
  ),
}));

vi.mock("../../../../../src/components/layout/DiagramControlPanel.js", () => ({
  default: ({ onToggleEffectiveAperture }: { onToggleEffectiveAperture: () => void }) => (
    <button data-testid="diagram-control-panel" onClick={onToggleEffectiveAperture}>
      Toggle aperture
    </button>
  ),
}));

vi.mock("../../../../../src/components/layout/lensDiagram/DiagramViewport.js", () => ({
  default: ({
    viewBoxOverride,
    onOpenAsphericCompare,
  }: {
    viewBoxOverride?: string;
    onOpenAsphericCompare: (eid: number) => void;
  }) => (
    <div data-testid="diagram-viewport" data-view-box={viewBoxOverride ?? ""}>
      <button onClick={() => onOpenAsphericCompare(1)}>Open asphere</button>
    </div>
  ),
}));

vi.mock("../../../../../src/components/display/AbbeDiagram.js", () => ({
  default: ({ onToggleGlassType }: { onToggleGlassType: () => void }) => (
    <button data-testid="abbe-diagram" onClick={onToggleGlassType}>
      Abbe diagram
    </button>
  ),
}));

vi.mock("../../../../../src/components/display/overlays/AsphericComparisonOverlay.js", () => ({
  default: ({ info }: { info: { id: number } }) => <div data-testid="aspheric-overlay">Asphere {info.id}</div>,
}));

function baseProps(overrides: Partial<LensDiagramLoadedStateProps> = {}): LensDiagramLoadedStateProps {
  const lens = buildSimplePositiveElementLens("test-loaded-state");
  const adapters = {
    onAnalysisDrawerToggle: vi.fn(),
    onAnalysisTabChange: vi.fn(),
    onGroupMovementOpen: vi.fn(),
    onGroupMovementClose: vi.fn(),
    onGroupMovementModeChange: vi.fn(),
    onAberrationsExpandedChange: vi.fn(),
    onEffectiveApertureChange: vi.fn(),
    onZoomChange: vi.fn(),
    onAberrationChange: vi.fn(),
    onFocusChange: vi.fn(),
    onStopdownChange: vi.fn(),
    onShiftChange: vi.fn(),
    onTiltChange: vi.fn(),
    onFocusExpandedChange: vi.fn(),
    onApertureExpandedChange: vi.fn(),
    onLegendExpandedChange: vi.fn(),
    onSliderPointerUp: vi.fn(),
    onAbbeShowGlassTypeChange: vi.fn(),
    onGlassMapOpenChange: vi.fn(),
  };

  return {
    panelContainerRef: createRef<HTMLDivElement>(),
    computed: {
      L: lens,
      focusT: 0,
      zoomT: 0,
      aberrationT: 0,
      stopdownT: 0,
      shiftMm: 0,
      tiltDeg: 0,
      sx: (z) => z,
      sy: (y) => y,
      CX: 0,
      IX: 0,
      effectiveSC: 1,
      movementTransform: {} as never,
      lensAxis: null,
      zPos: [0, 1, 2],
      IMG_MM: 0,
      shapes: [],
      filterId: "fixture-filter",
      stopZ: 0,
      currentFOPEN: 2,
      fNumber: 2,
      currentPhysStopSD: 5,
      baseEPSD: 5,
      varReadouts: [],
      aberrationReadouts: [],
      dynamicEFL: 50,
      effectiveFNum: 2,
      info: null,
      act: null,
      sel: null,
      cardinalElements: null,
      foldedHitOrderLabels: [],
    },
    rayData: {
      chromSpread: null,
      chromaticSpreads: { onAxis: null, offAxis: null },
      rays: [],
      offAxisRays: [],
      chromaticRays: [],
    },
    displayFlags: {
      theme: themes.dark,
      dark: true,
      isWide: true,
      compact: false,
      showControls: true,
      showSliders: true,
      maxSvgHeight: "60vh",
      useSideLayout: false,
      headerHeight: 0,
      zoomPanActive: false,
      showOnAxis: true,
      showOffAxis: "edge",
      showChromatic: false,
      showPupils: false,
      showCardinals: false,
      showCardinalFocal: false,
      showCardinalPrincipal: false,
      showCardinalNodal: false,
      showCardinalDimensions: false,
      showCardinalEfl: false,
      showCardinalBfd: false,
      showCardinalFfd: false,
      showCardinalHiatus: false,
      showCardinalTotalTrack: false,
      chromR: true,
      chromG: true,
      chromB: true,
      chromV: false,
      rayTracksF: false,
      flashVisible: false,
      flashKey: 0,
      flashFading: false,
      analysisDrawerOpen: false,
      analysisDrawerTab: "aberrations",
      groupMovementOpen: false,
      groupMovementMode: "focus",
      focusExpanded: false,
      apertureExpanded: false,
      legendExpanded: false,
      showEffectiveAperture: false,
      abbeShowGlassType: false,
    },
    overlays: {
      showLcaOverlay: false,
      showPetzvalOverlay: false,
      showAbbeDiagram: false,
      closeLcaOverlay: vi.fn(),
      closePetzvalOverlay: vi.fn(),
      openLcaOverlay: vi.fn(),
      openPetzvalOverlay: vi.fn(),
      openAbbeDiagram: vi.fn(),
      closeAbbeDiagram: vi.fn(),
      asphCompareElementId: null,
      openAsphCompare: vi.fn(),
      closeAsphCompare: vi.fn(),
    },
    adapters,
    interactions: {
      onHover: vi.fn(),
      onSelect: vi.fn(),
      zoomHook: {
        state: { zoom: 1.5 },
        viewBox: "0 0 20 20",
        isPanning: false,
        reset: vi.fn(),
        zoomIn: vi.fn(),
        zoomOut: vi.fn(),
        panBy: vi.fn(),
        handleWheel: vi.fn(),
        handlePointerDown: vi.fn(),
        handlePointerMove: vi.fn(),
        handlePointerUp: vi.fn(),
        handleTouchStart: vi.fn(),
        handleTouchMove: vi.fn(),
        handleTouchEnd: vi.fn(),
      },
      onZoomPanToggle: vi.fn(),
      onSliderInteractionChange: vi.fn(),
    },
    analysisContent: <div>Analysis</div>,
    groupMovementContent: <div>Movement</div>,
    header: <div>Header</div>,
    ...overrides,
  };
}

afterEach(() => cleanup());

describe("LensDiagramLoadedState", () => {
  it("renders viewport and hides the control panel while zoom/pan is active", () => {
    render(
      <LensDiagramLoadedState
        {...baseProps({
          displayFlags: { ...baseProps().displayFlags, zoomPanActive: true },
        })}
      />,
    );

    expect(screen.getByTestId("diagram-viewport").getAttribute("data-view-box")).toBe("0 0 20 20");
    expect(screen.queryByTestId("diagram-control-panel")).toBeNull();
  });

  it("renders controls and wires effective-aperture toggling", () => {
    const props = baseProps();
    render(<LensDiagramLoadedState {...props} />);

    fireEvent.click(screen.getByTestId("diagram-control-panel"));
    expect(props.adapters.onEffectiveApertureChange).toHaveBeenCalledWith(true);
  });

  it("renders Abbe and aspheric overlays only when targets are available", () => {
    const props = baseProps({
      overlays: {
        ...baseProps().overlays,
        showAbbeDiagram: true,
        asphCompareElementId: 1,
      },
    });

    render(<LensDiagramLoadedState {...props} />);
    expect(screen.getByTestId("abbe-diagram")).toBeTruthy();
    expect(screen.getByTestId("aspheric-overlay").textContent).toBe("Asphere 1");

    fireEvent.click(screen.getByTestId("abbe-diagram"));
    expect(props.adapters.onAbbeShowGlassTypeChange).toHaveBeenCalledWith(true);
    fireEvent.click(screen.getAllByRole("button", { name: "Close overlay" })[0]);
    expect(props.adapters.onGlassMapOpenChange).toHaveBeenCalledWith(false);

    cleanup();
    render(
      <LensDiagramLoadedState
        {...baseProps({
          overlays: { ...baseProps().overlays, asphCompareElementId: 999 },
        })}
      />,
    );
    expect(screen.queryByTestId("aspheric-overlay")).toBeNull();
  });
});
