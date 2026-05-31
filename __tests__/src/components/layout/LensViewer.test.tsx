// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { LensState } from "../../../../src/types/state.js";

const mocks = vi.hoisted(() => ({
  navigate: vi.fn(),
  dispatch: vi.fn(),
  updateURLWithSliders: vi.fn(),
  toggleCompare: vi.fn(),
  openAboutSite: vi.fn(),
  openAboutAuthor: vi.fn(),
  openOpticsPrimer: vi.fn(),
  openAberrationsPrimer: vi.fn(),
  closeAboutSite: vi.fn(),
  closeAboutAuthor: vi.fn(),
  closeOpticsPrimer: vi.fn(),
  closeAberrationsPrimer: vi.fn(),
  togglePrimerLevel: vi.fn(),
  toggleAberrationsLevel: vi.fn(),
  handleHeaderHeight: vi.fn(),
  handleSharedFocusChange: vi.fn(),
  handleSharedStopdownChange: vi.fn(),
  handleSharedShiftChange: vi.fn(),
  handleSharedTiltChange: vi.fn(),
  handleFocusPointerDown: vi.fn(),
  handleAperturePointerDown: vi.fn(),
  capturedCatalogKeys: [] as string[],
  isWide: true,
  state: null as LensState | null,
}));

vi.mock("react-router", () => ({
  useNavigate: () => mocks.navigate,
}));

vi.mock("../../../../src/utils/state/useLensState.js", () => ({
  default: (_catalogKeys: string[], _initialLensKey?: string, _initialLensKeyB?: string) => {
    mocks.capturedCatalogKeys = _catalogKeys;
    return [mocks.state, mocks.dispatch, mocks.isWide];
  },
}));

vi.mock("../../../../src/utils/state/usePreferences.js", () => ({
  default: vi.fn(),
}));

vi.mock("../../../../src/utils/state/useURLSync.js", () => ({
  default: vi.fn(() => ({ updateURLWithSliders: mocks.updateURLWithSliders })),
}));

vi.mock("../../../../src/utils/useMediaQuery.js", () => ({
  default: vi.fn(() => false),
}));

vi.mock("../../../../src/comparison/useComparisonOrchestration.js", () => ({
  default: vi.fn(() => ({
    comparisonLenses: { A: "lens-a", B: "lens-b" },
    scaleRatios: { A: 1, B: 1 },
    focusPair: [0, 0],
    aperturePair: [0, 0],
    zoomPair: [0, 0],
    movementPair: [
      { shiftMm: 0, tiltDeg: 0 },
      { shiftMm: 0, tiltDeg: 0 },
    ],
    handleHeaderHeight: mocks.handleHeaderHeight,
    maxHeaderHeight: 42,
    flashPanel: null,
    handleSharedFocusChange: mocks.handleSharedFocusChange,
    handleSharedStopdownChange: mocks.handleSharedStopdownChange,
    handleSharedShiftChange: mocks.handleSharedShiftChange,
    handleSharedTiltChange: mocks.handleSharedTiltChange,
    handleFocusPointerDown: mocks.handleFocusPointerDown,
    handleAperturePointerDown: mocks.handleAperturePointerDown,
    toggleCompare: mocks.toggleCompare,
  })),
}));

vi.mock("../../../../src/components/hooks/useOverlays.js", () => ({
  default: vi.fn(() => ({
    primerLevel: "simple",
    togglePrimerLevel: mocks.togglePrimerLevel,
    aberrationsLevel: "intermediate",
    toggleAberrationsLevel: mocks.toggleAberrationsLevel,
    openAboutSite: mocks.openAboutSite,
    openAboutAuthor: mocks.openAboutAuthor,
    openOpticsPrimer: mocks.openOpticsPrimer,
    openAberrationsPrimer: mocks.openAberrationsPrimer,
    closeAboutSite: mocks.closeAboutSite,
    closeAboutAuthor: mocks.closeAboutAuthor,
    closeOpticsPrimer: mocks.closeOpticsPrimer,
    closeAberrationsPrimer: mocks.closeAberrationsPrimer,
  })),
}));

vi.mock("../../../../src/components/layout/lensViewer/ViewerChrome.js", () => ({
  default: ({
    comparing,
    lensKeyA,
    lensKeyB,
    catalogKeys,
    effectiveDesktopView,
    showDesktopToggle,
    onSwitchLensA,
    onSwitchLensB,
    onSwapLenses,
    onToggleCompare,
    onMobileViewChange,
    onDesktopViewChange,
  }: {
    comparing: boolean;
    lensKeyA: string;
    lensKeyB: string;
    catalogKeys: string[];
    effectiveDesktopView: string;
    showDesktopToggle: boolean;
    onSwitchLensA: (key: string) => void;
    onSwitchLensB: (key: string) => void;
    onSwapLenses: () => void;
    onToggleCompare: () => void;
    onMobileViewChange: (value: "diagram" | "description") => void;
    onDesktopViewChange: (value: "diagram" | "both" | "analysis") => void;
  }) => (
    <div data-testid="viewer-chrome">
      <span data-testid="chrome-mode">{comparing ? "compare" : "single"}</span>
      <span data-testid="chrome-lenses">
        {lensKeyA}/{lensKeyB}
      </span>
      <span data-testid="catalog-count">{catalogKeys.length}</span>
      <span data-testid="desktop-view">{effectiveDesktopView}</span>
      <span data-testid="desktop-toggle">{showDesktopToggle ? "shown" : "hidden"}</span>
      <button onClick={() => onSwitchLensA("sonnar-50f15")}>switch A</button>
      <button onClick={() => onSwitchLensB("apo-lanthar-50f2")}>switch B</button>
      <button onClick={onSwapLenses}>swap</button>
      <button onClick={onToggleCompare}>compare</button>
      <button onClick={() => onMobileViewChange("description")}>mobile description</button>
      <button onClick={() => onDesktopViewChange("analysis")}>desktop analysis</button>
    </div>
  ),
}));

vi.mock("../../../../src/components/layout/lensViewer/ViewerContent.js", () => ({
  default: ({
    comparing,
    effectiveDesktopView,
    mobileView,
    markdown,
    onSliderPointerUp,
  }: {
    comparing: boolean;
    effectiveDesktopView: string;
    mobileView: string;
    markdown: string | null;
    onSliderPointerUp: () => void;
  }) => (
    <div data-testid="viewer-content">
      <span data-testid="content-mode">{comparing ? "compare-content" : "single-content"}</span>
      <span data-testid="content-desktop">{effectiveDesktopView}</span>
      <span data-testid="content-mobile">{mobileView}</span>
      <span data-testid="markdown-state">{markdown ? "markdown" : "none"}</span>
      <button onClick={onSliderPointerUp}>slider up</button>
    </div>
  ),
}));

vi.mock("../../../../src/components/layout/lensViewer/ViewerOverlays.js", () => ({
  default: ({
    primerLevel,
    aberrationsLevel,
    aboutSiteMarkdown,
    aboutAuthorMarkdown,
  }: {
    primerLevel: string;
    aberrationsLevel: string;
    aboutSiteMarkdown: string;
    aboutAuthorMarkdown: string;
  }) => (
    <div data-testid="viewer-overlays">
      <span>{primerLevel}</span>
      <span>{aberrationsLevel}</span>
      <span data-testid="about-site-loaded">{aboutSiteMarkdown.length > 0 ? "site" : "missing"}</span>
      <span data-testid="about-author-loaded">{aboutAuthorMarkdown.length > 0 ? "author" : "missing"}</span>
    </div>
  ),
}));

import LensViewer from "../../../../src/components/layout/LensViewer.js";
import { ALL_CATALOG_KEYS, CATALOG_KEYS } from "../../../../src/utils/catalog/lensCatalog.js";
import { createInitialState } from "../../../../src/utils/state/lensReducer.js";

function makeState(overrides: Partial<LensState> = {}): LensState {
  const base = createInitialState({}, {}, true, ["apo-lanthar-50f2", "sonnar-50f15"]);
  return {
    ...base,
    ...overrides,
    lens: { ...base.lens, ...overrides.lens },
    display: { ...base.display, ...overrides.display },
    overlays: { ...base.overlays, ...overrides.overlays },
  };
}

beforeEach(() => {
  mocks.navigate.mockClear();
  mocks.dispatch.mockClear();
  mocks.updateURLWithSliders.mockClear();
  mocks.toggleCompare.mockClear();
  mocks.capturedCatalogKeys = [];
  mocks.isWide = true;
  mocks.state = makeState();
});

afterEach(() => cleanup());

describe("LensViewer", () => {
  it("renders the single-lens shell and wires slider URL synchronization", () => {
    render(<LensViewer initialLensKey="apo-lanthar-50f2" />);

    expect(screen.getByTestId("chrome-mode").textContent).toBe("single");
    expect(screen.getByTestId("content-mode").textContent).toBe("single-content");
    expect(screen.getByTestId("desktop-view").textContent).toBe("both");
    expect(screen.getByTestId("desktop-toggle").textContent).toBe("shown");

    fireEvent.click(screen.getByText("slider up"));
    expect(mocks.updateURLWithSliders).toHaveBeenCalledTimes(1);
  });

  it("uses a fixed-height desktop app shell with a scroll-contained content slot", () => {
    render(<LensViewer initialLensKey="apo-lanthar-50f2" />);

    const chromeSlot = screen.getByTestId("viewer-chrome").parentElement;
    const contentSlot = screen.getByTestId("viewer-content").parentElement;
    const root = chromeSlot?.parentElement;

    expect(root?.style.height).toBe("100vh");
    expect(root?.style.display).toBe("flex");
    expect(root?.style.overflow).toBe("hidden");
    expect(chromeSlot?.style.flex).toBe("0 0 auto");
    expect(contentSlot?.style.flex).toBe("1 1 auto");
    expect(contentSlot?.style.minHeight).toBe("0px");
    expect(contentSlot?.style.overflow).toBe("hidden");
  });

  it("navigates lens switches on lens routes", () => {
    render(<LensViewer initialLensKey="apo-lanthar-50f2" />);

    fireEvent.click(screen.getByText("switch A"));

    expect(mocks.dispatch).toHaveBeenCalledWith({ type: "SET_LENS_A", key: "sonnar-50f15" });
    expect(mocks.navigate).toHaveBeenCalledWith("/lens/sonnar-50f15", { replace: true });
  });

  it("navigates compare route lens switches and swaps", () => {
    mocks.state = makeState({
      lens: {
        ...makeState().lens,
        lensKeyA: "apo-lanthar-50f2",
        lensKeyB: "sonnar-50f15",
        comparing: true,
      },
    });

    render(<LensViewer initialLensKey="apo-lanthar-50f2" initialLensKeyB="sonnar-50f15" />);

    fireEvent.click(screen.getByText("switch B"));
    fireEvent.click(screen.getByText("swap"));

    expect(mocks.navigate).toHaveBeenCalledWith("/compare/apo-lanthar-50f2/apo-lanthar-50f2", { replace: true });
    expect(mocks.navigate).toHaveBeenCalledWith("/compare/sonnar-50f15/apo-lanthar-50f2", { replace: true });
  });

  it("falls back from invalid desktop views before passing props to chrome and content", () => {
    mocks.state = makeState({
      display: { ...makeState().display, desktopView: "invalid-view" as LensState["display"]["desktopView"] },
    });

    render(<LensViewer initialLensKey="apo-lanthar-50f2" />);

    expect(screen.getByTestId("desktop-view").textContent).toBe("both");
    expect(screen.getByTestId("content-desktop").textContent).toBe("both");
  });

  it("uses the hidden catalog key set when a route key is not in the visible catalog", () => {
    const hiddenKey = ALL_CATALOG_KEYS.find((key) => !CATALOG_KEYS.includes(key));
    expect(hiddenKey).toBeDefined();

    render(<LensViewer initialLensKey={hiddenKey} />);

    expect(mocks.capturedCatalogKeys).toEqual(ALL_CATALOG_KEYS);
  });

  it("hides desktop-only view controls on mobile", () => {
    mocks.isWide = false;
    mocks.state = makeState({ display: { ...makeState().display, mobileView: "diagram" } });

    render(<LensViewer initialLensKey="apo-lanthar-50f2" />);

    const root = screen.getByTestId("viewer-chrome").parentElement?.parentElement;
    expect(root?.style.height).toBe("");
    expect(root?.style.display).toBe("");
    expect(screen.getByTestId("desktop-toggle").textContent).toBe("hidden");
    fireEvent.click(screen.getByText("mobile description"));
    expect(mocks.dispatch).toHaveBeenCalledWith({ type: "SET_MOBILE_VIEW", mobileView: "description" });
  });
});
