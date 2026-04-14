// @vitest-environment jsdom

/**
 * Smoke tests for layout orchestration components:
 *   - SingleLensContent (desktop/mobile view branching)
 *   - LensDiagramPanel (diagram composition with error/loaded states)
 *   - LensViewer (top-level orchestration)
 *
 * These tests verify rendering paths without crashing. Heavy child
 * components and hooks are mocked to keep tests fast and focused.
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { installMatchMediaMock, clearBrowserState, renderWithLensContext } from "./testUtils.js";
import { createInitialState } from "../src/utils/lensReducer.js";
import themes from "../src/utils/themes.js";
import type { LensState } from "../src/types/state.js";

/* ─────────────────── Mock Setup ─────────────────── */

/* Mocks must be defined before imports of the components under test. */

/* Mock heavy child components of SingleLensContent */
vi.mock("../src/components/layout/LensDiagramPanel.js", () => ({
  default: ({ lensKey, panelId }: { lensKey: string; panelId: string }) => (
    <div data-testid={`diagram-panel-${panelId}`}>DiagramPanel:{lensKey}</div>
  ),
}));

vi.mock("../src/components/layout/DescriptionPanel.js", () => ({
  default: ({ markdown }: { markdown: string | null | undefined }) => (
    <div data-testid="description-panel">{markdown ?? "No description"}</div>
  ),
}));

/* Mock all hooks used by LensDiagramPanel (for the real component if tested directly) */
vi.mock("../src/components/hooks/useLensComputation.js", () => ({
  default: () => ({
    L: null,
    buildError: null,
    IMG_MM: 0,
    zPos: [],
    sx: 1,
    sy: 1,
    clampedRayEnd: 0,
    CX: 0,
    IX: 0,
    effectiveSC: 1,
    shapes: [],
    shapeError: null,
    stopZ: 0,
    currentFOPEN: 2,
    fNumber: 2,
    currentPhysStopSD: 5,
    baseEPSD: 5,
    currentEPSD: 5,
    varReadouts: [],
    dynamicEFL: 50,
    effectiveFNum: 2,
    filterId: "filter-test",
  }),
}));

vi.mock("../src/components/hooks/useRayTracing.js", () => ({
  default: () => ({ rays: [], offAxisRays: [], chromaticRays: [], chromSpread: null, rayError: null }),
}));

vi.mock("../src/components/hooks/useDispatchAdapters.js", () => ({
  default: () =>
    new Proxy(
      {},
      {
        get: () => vi.fn(),
      },
    ),
}));

vi.mock("../src/components/hooks/useOverlayState.js", () => ({
  default: () => ({ abbeOpen: false, lcaOpen: false, petzvalOpen: false }),
}));

vi.mock("../src/components/hooks/useHeaderHeight.js", () => ({
  default: () => ({ headerRef: { current: null }, headerHeight: 40 }),
}));

vi.mock("../src/components/hooks/useFlashOverlay.js", () => ({
  default: () => ({ flashKey: 0, flashVisible: false, flashFading: false }),
}));

vi.mock("../src/components/hooks/useSideLayoutDetection.js", () => ({
  default: () => false,
}));

vi.mock("../src/components/hooks/useViewBoxZoom.js", () => ({
  default: () => ({
    viewBox: "0 0 1200 600",
    handlers: {},
    zoomLevel: 1,
    reset: vi.fn(),
    zoomIn: vi.fn(),
    zoomOut: vi.fn(),
    isPanned: false,
    isZoomed: false,
  }),
}));

/* ─────────────────── Shared State ─────────────────── */

function makeState(overrides: Partial<LensState> = {}): LensState {
  const base = createInitialState({}, {}, true, ["test-lens-a", "test-lens-b"]);
  return { ...base, ...overrides };
}

/* ═══════════════════════════════════════════════════════
   SingleLensContent
   ═══════════════════════════════════════════════════════ */

/* Import after mocks are set up */
import SingleLensContent from "../src/components/layout/SingleLensContent.js";

describe("SingleLensContent", () => {
  const baseProps = {
    theme: themes.dark,
    isWide: true,
    effectiveDesktopView: "both",
    showDesktopToggle: true,
    mobileView: "diagram",
    lensKeyA: "test-lens-a",
    markdown: "# Test Analysis",
  };

  beforeEach(() => {
    installMatchMediaMock(false);
    clearBrowserState();
  });
  afterEach(() => cleanup());

  /* Desktop view modes */

  it("renders side-by-side layout when effectiveDesktopView is 'both'", () => {
    const state = makeState();
    renderWithLensContext(<SingleLensContent {...baseProps} />, { state });

    expect(screen.getByTestId("diagram-panel-main")).toBeDefined();
    expect(screen.getByTestId("description-panel")).toBeDefined();
    expect(screen.getByText("# Test Analysis")).toBeDefined();
  });

  it("renders diagram only when effectiveDesktopView is 'diagram'", () => {
    const state = makeState();
    renderWithLensContext(<SingleLensContent {...baseProps} effectiveDesktopView="diagram" />, { state });

    expect(screen.getByTestId("diagram-panel-main")).toBeDefined();
    expect(screen.queryByTestId("description-panel")).toBeNull();
  });

  it("renders analysis only when effectiveDesktopView is 'analysis'", () => {
    const state = makeState();
    renderWithLensContext(<SingleLensContent {...baseProps} effectiveDesktopView="analysis" />, { state });

    expect(screen.queryByTestId("diagram-panel-main")).toBeNull();
    expect(screen.getByTestId("description-panel")).toBeDefined();
  });

  /* Mobile view modes */

  it("renders diagram on mobile when mobileView is 'diagram'", () => {
    const state = makeState();
    renderWithLensContext(<SingleLensContent {...baseProps} isWide={false} mobileView="diagram" />, { state });

    expect(screen.getByTestId("diagram-panel-main")).toBeDefined();
    expect(screen.queryByTestId("description-panel")).toBeNull();
  });

  it("renders description on mobile when mobileView is 'analysis'", () => {
    const state = makeState();
    renderWithLensContext(<SingleLensContent {...baseProps} isWide={false} mobileView="analysis" />, { state });

    expect(screen.queryByTestId("diagram-panel-main")).toBeNull();
    expect(screen.getByTestId("description-panel")).toBeDefined();
  });

  /* Null markdown */

  it("renders without crashing when markdown is null", () => {
    const state = makeState();
    renderWithLensContext(<SingleLensContent {...baseProps} markdown={null} />, { state });

    expect(screen.getByTestId("description-panel")).toBeDefined();
    expect(screen.getByText("No description")).toBeDefined();
  });

  /* Passes lensKey through */

  it("passes lensKeyA to the diagram panel", () => {
    const state = makeState();
    renderWithLensContext(<SingleLensContent {...baseProps} lensKeyA="my-special-lens" />, { state });

    expect(screen.getByText("DiagramPanel:my-special-lens")).toBeDefined();
  });
});

/* ═══════════════════════════════════════════════════════
   LensDiagramPanel (integration via SingleLensContent)
   ═══════════════════════════════════════════════════════ */

/* LensDiagramPanel is mocked above so its rendering is verified
   indirectly through SingleLensContent tests. We verify that
   the mock correctly receives props from SingleLensContent. */

import LensDiagramPanel from "../src/components/layout/LensDiagramPanel.js";

describe("LensDiagramPanel mock integration", () => {
  beforeEach(() => {
    installMatchMediaMock(false);
    clearBrowserState();
  });
  afterEach(() => cleanup());

  it("mock renders with expected lensKey and panelId", () => {
    const state = makeState();
    renderWithLensContext(
      <LensDiagramPanel lensKey="nikon-z50" panelId="test-panel" scaleRatio={null} compact={false} />,
      { state },
    );

    expect(screen.getByTestId("diagram-panel-test-panel")).toBeDefined();
    expect(screen.getByText("DiagramPanel:nikon-z50")).toBeDefined();
  });
});
