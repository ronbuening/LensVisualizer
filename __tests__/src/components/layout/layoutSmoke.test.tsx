// @vitest-environment jsdom

/**
 * Smoke tests for SingleLensContent's desktop/mobile view branching. LensDiagramPanel and
 * DescriptionPanel are mocked; the real panel is rendered in LensDiagramPanelCoverage.test.tsx.
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { screen, cleanup } from "@testing-library/react";
import { installMatchMediaMock, clearBrowserState, renderWithLensContext } from "../../../testUtils.js";
import { createInitialState } from "../../../../src/utils/state/lensReducer.js";
import themes from "../../../../src/utils/theme/themes.js";
import type { LensState } from "../../../../src/types/state.js";

/* ─────────────────── Mock Setup ─────────────────── */

/* Mocks must be defined before imports of the components under test. */

vi.mock("../../../../src/utils/featureFlags.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../../../src/utils/featureFlags.js")>();
  return { ...actual, ENABLE_ANALYSIS_VIEW: true };
});

/* Mock heavy child components of SingleLensContent */
vi.mock("../../../../src/components/layout/LensDiagramPanel.js", () => ({
  default: ({
    lensKey,
    panelId,
    fillAvailableHeight,
  }: {
    lensKey: string;
    panelId: string;
    fillAvailableHeight?: boolean;
  }) => (
    <div data-testid={`diagram-panel-${panelId}`} data-fill-height={String(fillAvailableHeight ?? false)}>
      DiagramPanel:{lensKey}
    </div>
  ),
}));

vi.mock("../../../../src/components/layout/DescriptionPanel.js", () => ({
  default: ({ markdown }: { markdown: string | null | undefined }) => (
    <div data-testid="description-panel">{markdown ?? "No description"}</div>
  ),
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
import SingleLensContent from "../../../../src/components/layout/SingleLensContent.js";

describe("SingleLensContent", () => {
  const baseProps = {
    theme: themes.dark,
    isWide: true,
    effectiveDesktopView: "both" as const,
    showDesktopToggle: true,
    mobileView: "diagram" as const,
    lensKey: "test-lens-a",
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

    const diagram = screen.getByTestId("diagram-panel-main");
    expect(diagram).toBeDefined();
    expect(diagram.getAttribute("data-fill-height")).toBe("true");
    expect(diagram.parentElement?.style.minHeight).toBe("0px");
    expect(screen.getByTestId("description-panel")).toBeDefined();
    expect(screen.getByText("# Test Analysis")).toBeDefined();
  });

  it("renders diagram only when effectiveDesktopView is 'diagram'", () => {
    const state = makeState();
    renderWithLensContext(<SingleLensContent {...baseProps} effectiveDesktopView="diagram" />, { state });

    const diagram = screen.getByTestId("diagram-panel-main");
    expect(diagram).toBeDefined();
    expect(diagram.getAttribute("data-fill-height")).toBe("true");
    expect(diagram.parentElement?.style.height).toBe("100%");
    expect(diagram.parentElement?.style.overflow).toBe("hidden");
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

    const diagram = screen.getByTestId("diagram-panel-main");
    expect(diagram).toBeDefined();
    expect(diagram.getAttribute("data-fill-height")).toBe("false");
    expect(screen.queryByTestId("description-panel")).toBeNull();
  });

  it("renders description on mobile when mobileView is 'description'", () => {
    const state = makeState();
    renderWithLensContext(<SingleLensContent {...baseProps} isWide={false} mobileView="description" />, { state });

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

  it("passes lensKey to the diagram panel", () => {
    const state = makeState();
    renderWithLensContext(<SingleLensContent {...baseProps} lensKey="my-special-lens" />, { state });

    expect(screen.getByText("DiagramPanel:my-special-lens")).toBeDefined();
  });
});
