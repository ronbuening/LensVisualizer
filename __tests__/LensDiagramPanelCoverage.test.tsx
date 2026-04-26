// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { Dispatch, ReactNode } from "react";
import LensDiagramPanel from "../src/components/layout/LensDiagramPanel.js";
import type { LensAction, LensState } from "../src/types/state.js";
import type { RuntimeLens } from "../src/types/optics.js";
import { CATALOG_KEYS } from "../src/utils/lensCatalog.js";
import {
  LensDispatchContext,
  LensStateContext,
  PanelStateContext,
  type LensCtxValue,
} from "../src/utils/LensContext.js";
import { createInitialState } from "../src/utils/lensReducer.js";
import themes from "../src/utils/themes.js";

const mocks = vi.hoisted(() => {
  const adapters = {
    onAnalysisDrawerToggle: vi.fn(),
    onAnalysisTabChange: vi.fn(),
    onGlassMapToggle: vi.fn(),
    onSelectedElementChange: vi.fn(),
    onBokehPreviewToggle: vi.fn(),
    onAberrationsExpandedChange: vi.fn(),
    onEffectiveApertureChange: vi.fn(),
    onZoomChange: vi.fn(),
    onFocusChange: vi.fn(),
    onStopdownChange: vi.fn(),
    onFocusExpandedChange: vi.fn(),
    onApertureExpandedChange: vi.fn(),
    onLegendExpandedChange: vi.fn(),
    onSliderPointerUp: vi.fn(),
    onAbbeShowGlassTypeChange: vi.fn(),
    onShowOnAxisChange: vi.fn(),
    onShowOffAxisChange: vi.fn(),
    onRayTracksFChange: vi.fn(),
    onShowChromaticChange: vi.fn(),
    onChromRChange: vi.fn(),
    onChromGChange: vi.fn(),
    onChromBChange: vi.fn(),
    onShowPupilsChange: vi.fn(),
    onHeaderInfoExpandedChange: vi.fn(),
    onZoomPanToggle: vi.fn(),
  };
  const zoomReset = vi.fn();
  const lensComputation = vi.fn();
  const rayTracing = vi.fn();
  const loadedState = vi.fn();
  const errorState = vi.fn();
  return { adapters, zoomReset, lensComputation, rayTracing, loadedState, errorState };
});

vi.mock("../src/components/hooks/useLensComputation.js", () => ({
  default: (props: unknown) => mocks.lensComputation(props),
}));

vi.mock("../src/components/hooks/useRayTracing.js", () => ({
  default: (props: unknown) => mocks.rayTracing(props),
}));

vi.mock("../src/components/hooks/useDispatchAdapters.js", () => ({
  default: () => mocks.adapters,
}));

vi.mock("../src/components/hooks/useOverlayState.js", () => ({
  default: () => ({
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
  }),
}));

vi.mock("../src/components/hooks/useHeaderHeight.js", () => ({
  default: () => ({ headerRef: { current: null }, headerHeight: 88 }),
}));

vi.mock("../src/components/hooks/useFlashOverlay.js", () => ({
  default: () => ({ flashKey: 7, flashVisible: true, flashFading: false }),
}));

vi.mock("../src/components/hooks/useSideLayoutDetection.js", () => ({
  default: () => true,
}));

vi.mock("../src/components/hooks/useViewBoxZoom.js", () => ({
  default: () => ({
    state: { zoom: 1 },
    viewBox: "0 0 1200 600",
    isPanning: false,
    reset: mocks.zoomReset,
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
  }),
}));

vi.mock("../src/utils/useMediaQuery.js", () => ({
  default: () => false,
}));

vi.mock("../src/components/controls/DiagramHeader.js", () => ({
  default: () => <div data-testid="diagram-header">Header</div>,
}));

vi.mock("../src/components/display/BokehPreviewOverlay.js", () => ({
  default: () => <div data-testid="bokeh-preview">Bokeh preview</div>,
}));

vi.mock("../src/components/layout/lensDiagram/AnalysisDrawerContent.js", () => ({
  default: ({ activeTab }: { activeTab: string }) => <div data-testid="analysis-content">{activeTab}</div>,
}));

vi.mock("../src/components/layout/lensDiagram/LensDiagramErrorState.js", () => ({
  default: (props: Record<string, unknown>) => {
    mocks.errorState(props);
    return <div>{String(props.title)}</div>;
  },
}));

vi.mock("../src/components/layout/lensDiagram/LensDiagramLoadedState.js", () => ({
  default: (props: Record<string, unknown>) => {
    mocks.loadedState(props);
    return (
      <div>
        <div data-testid="loaded-state">{`act:${String(props.act ?? "none")} sel:${String(props.sel ?? "none")}`}</div>
        <div data-testid="analysis-slot">{props.analysisContent as ReactNode}</div>
        <div data-testid="bokeh-slot">{props.bokehPreviewContent as ReactNode}</div>
        <div data-testid="header-slot">{props.header as ReactNode}</div>
        <button type="button" onClick={() => (props.onHover as (eid: number | null) => void)(1)}>
          hover-one
        </button>
        <button type="button" onClick={() => (props.onSelect as (eid: number | null) => void)(1)}>
          select-one
        </button>
        <button type="button" onClick={() => (props.onZoomPanToggle as (active: boolean) => void)(false)}>
          zoom-off
        </button>
      </div>
    );
  },
}));

function runtimeLens(): RuntimeLens {
  return {
    key: "mock-lens",
    name: "Mock Lens",
    svgW: 1200,
    svgH: 600,
    elements: [{ id: 1, nd: 1.5 }],
  } as unknown as RuntimeLens;
}

function computation(overrides: Record<string, unknown> = {}) {
  return {
    L: runtimeLens(),
    buildError: null,
    IMG_MM: 43,
    zPos: [10],
    sx: (z: number) => z,
    sy: (y: number) => y,
    clampedRayEnd: 100,
    CX: 20,
    IX: 900,
    effectiveSC: 1,
    shapes: [],
    shapeError: null,
    stopZ: 12,
    currentFOPEN: 2,
    fNumber: 2,
    currentPhysStopSD: 5,
    baseEPSD: 8,
    currentEPSD: 8,
    varReadouts: [],
    dynamicEFL: 50,
    effectiveFNum: 2,
    filterId: "mock-filter",
    ...overrides,
  };
}

function rayResult(overrides: Record<string, unknown> = {}) {
  return {
    rays: [],
    offAxisRays: [],
    chromaticRays: [],
    chromSpread: null,
    rayError: null,
    ...overrides,
  };
}

function makeState(overrides: Partial<LensState> = {}): LensState {
  const state = createInitialState({}, {}, true, CATALOG_KEYS);
  return {
    ...state,
    ...overrides,
    lens: { ...state.lens, ...overrides.lens },
    display: { ...state.display, ...overrides.display },
    rays: { ...state.rays, ...overrides.rays },
    sliders: { ...state.sliders, ...overrides.sliders },
    sharedSliders: { ...state.sharedSliders, ...overrides.sharedSliders },
    panels: { ...state.panels, ...overrides.panels },
    overlays: { ...state.overlays, ...overrides.overlays },
  };
}

function renderPanel(state = makeState(), dispatch = vi.fn<Dispatch<LensAction>>()) {
  const value: LensCtxValue = { state, theme: themes.dark, isWide: true, updateURLWithSliders: vi.fn() };
  return render(
    <LensStateContext.Provider value={value}>
      <LensDispatchContext.Provider value={dispatch}>
        <PanelStateContext.Provider value={state.panels}>
          <LensDiagramPanel lensKey="lens-a" scaleRatio={null} panelId="a" compact={false} />
        </PanelStateContext.Provider>
      </LensDispatchContext.Provider>
    </LensStateContext.Provider>,
  );
}

describe("LensDiagramPanel orchestration", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mocks.lensComputation.mockReturnValue(computation());
    mocks.rayTracing.mockReturnValue(rayResult());
  });

  afterEach(() => cleanup());

  it("routes build, shape, and ray errors to the shared error state", () => {
    mocks.lensComputation.mockReturnValueOnce(computation({ buildError: new Error("build") }));
    const { rerender } = renderPanel();
    expect(screen.getByText("Failed to build lens")).toBeTruthy();
    expect(mocks.errorState.mock.calls[0][0]).toMatchObject({
      component: "LensDiagramPanel (buildLens)",
      title: "Failed to build lens",
    });

    mocks.lensComputation.mockReturnValueOnce(computation({ shapeError: new Error("shape") }));
    rerender(
      <LensStateContext.Provider value={{ state: makeState(), theme: themes.dark, isWide: true, updateURLWithSliders: vi.fn() }}>
        <LensDispatchContext.Provider value={vi.fn()}>
          <PanelStateContext.Provider value={makeState().panels}>
            <LensDiagramPanel lensKey="lens-a" scaleRatio={null} panelId="a" compact={false} />
          </PanelStateContext.Provider>
        </LensDispatchContext.Provider>
      </LensStateContext.Provider>,
    );
    expect(screen.getByText("Failed to compute lens element shapes")).toBeTruthy();

    mocks.lensComputation.mockReturnValue(computation());
    mocks.rayTracing.mockReturnValueOnce(rayResult({ rayError: new Error("ray") }));
    rerender(
      <LensStateContext.Provider value={{ state: makeState(), theme: themes.dark, isWide: true, updateURLWithSliders: vi.fn() }}>
        <LensDispatchContext.Provider value={vi.fn()}>
          <PanelStateContext.Provider value={makeState().panels}>
            <LensDiagramPanel lensKey="lens-a" scaleRatio={null} panelId="a" compact={false} />
          </PanelStateContext.Provider>
        </LensDispatchContext.Provider>
      </LensStateContext.Provider>,
    );
    expect(screen.getByText("Ray tracing failed")).toBeTruthy();
  });

  it("wires loaded state, optional analysis and bokeh content, and zoom reset", () => {
    const state = makeState({
      panels: {
        ...makeState().panels,
        analysisDrawerOpen: true,
        analysisDrawerTab: "vignetting",
        bokehPreviewOpen: true,
        zoomPanActive: true,
      },
    });
    renderPanel(state);

    expect(screen.getByTestId("analysis-content").textContent).toBe("vignetting");
    expect(screen.getByTestId("bokeh-preview")).toBeTruthy();
    expect(screen.queryByTestId("diagram-header")).toBeNull();

    fireEvent.click(screen.getByText("zoom-off"));

    expect(mocks.zoomReset).toHaveBeenCalledTimes(1);
    expect(mocks.adapters.onZoomPanToggle).toHaveBeenCalledWith(false);
    expect(mocks.loadedState.mock.calls.at(-1)?.[0]).toMatchObject({
      useSideLayout: true,
      flashVisible: true,
      focusT: 0,
      zoomT: 0,
      stopdownT: 0,
    });
  });

  it("tracks hover/selection and clears them when the lens changes", async () => {
    const { rerender } = renderPanel();

    fireEvent.click(screen.getByText("hover-one"));
    expect(screen.getByTestId("loaded-state").textContent).toBe("act:1 sel:none");

    fireEvent.click(screen.getByText("select-one"));
    expect(screen.getByTestId("loaded-state").textContent).toBe("act:1 sel:1");

    const state = makeState();
    const value: LensCtxValue = { state, theme: themes.dark, isWide: true, updateURLWithSliders: vi.fn() };
    rerender(
      <LensStateContext.Provider value={value}>
        <LensDispatchContext.Provider value={vi.fn()}>
          <PanelStateContext.Provider value={state.panels}>
            <LensDiagramPanel lensKey="lens-b" scaleRatio={null} panelId="a" compact={false} />
          </PanelStateContext.Provider>
        </LensDispatchContext.Provider>
      </LensStateContext.Provider>,
    );

    await waitFor(() => {
      expect(screen.getByTestId("loaded-state").textContent).toBe("act:none sel:none");
    });
  });
});
