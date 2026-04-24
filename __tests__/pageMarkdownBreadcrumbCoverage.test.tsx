// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { Dispatch } from "react";
import BreadcrumbBar from "../src/components/layout/BreadcrumbBar.js";
import DescriptionPanel from "../src/components/layout/DescriptionPanel.js";
import UpdatesPage from "../src/pages/UpdatesPage.js";
import type { LensAction, LensState } from "../src/types/state.js";
import { CATALOG_KEYS, ALL_LENSES_BY_DATE, LENS_CATALOG } from "../src/utils/lensCatalog.js";
import { LensDispatchContext, LensStateContext, type LensCtxValue } from "../src/utils/LensContext.js";
import { createInitialState } from "../src/utils/lensReducer.js";
import { CHANGELOG } from "../src/utils/changelogData.js";
import themes from "../src/utils/themes.js";
import { clearBrowserState, installMatchMediaMock, renderWithRouter } from "./testUtils.js";

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

function renderBreadcrumb({
  lensKey = CATALOG_KEYS[0],
  state = makeState(),
  dispatch = vi.fn(),
  isWide = true,
}: {
  lensKey?: string;
  state?: LensState;
  dispatch?: Dispatch<LensAction>;
  isWide?: boolean;
}) {
  const value: LensCtxValue = { state, theme: themes.dark, isWide, updateURLWithSliders: vi.fn() };
  return render(
    <MemoryRouter>
      <LensStateContext.Provider value={value}>
        <LensDispatchContext.Provider value={dispatch}>
          <BreadcrumbBar theme={themes.dark} isWide={isWide} lensKey={lensKey} />
        </LensDispatchContext.Provider>
      </LensStateContext.Provider>
    </MemoryRouter>,
  );
}

describe("page, markdown, and breadcrumb coverage", () => {
  const scrollTo = vi.fn();

  beforeEach(() => {
    clearBrowserState();
    installMatchMediaMock(false);
    Object.defineProperty(window, "scrollTo", { writable: true, value: scrollTo });
    scrollTo.mockClear();
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("renders UpdatesPage changelog, lens links, footer links, and scroll reset", () => {
    const firstLensEntry = ALL_LENSES_BY_DATE.find((entry) => LENS_CATALOG[entry.key]);

    renderWithRouter(
      <HelmetProvider>
        <UpdatesPage />
      </HelmetProvider>,
      { initialEntries: ["/updates"] },
    );

    expect(screen.getByRole("heading", { name: "Updates" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Changelog" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Lenses Added" })).toBeTruthy();
    expect(screen.getByText(CHANGELOG[0].summary)).toBeTruthy();
    expect(screen.getByRole("link", { name: "Lens Library" })).toBeTruthy();
    if (firstLensEntry) {
      expect(screen.getByText(LENS_CATALOG[firstLensEntry.key].name)).toBeTruthy();
    }
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, left: 0 });
  });

  it("renders DescriptionPanel empty, markdown, table, code, links, and math content", () => {
    const markdown = [
      "# Main Heading",
      "",
      "A paragraph with **strong text**, `inline code`, and [a link](https://example.com).",
      "",
      "```ts",
      "const focal = 50;",
      "```",
      "",
      "| A | B |",
      "| - | - |",
      "| 1 | 2 |",
      "",
      "$x^2$",
    ].join("\n");

    const { rerender } = render(<DescriptionPanel markdown={null} theme={themes.dark} />);
    expect(screen.getByText("No description available for this lens.")).toBeTruthy();

    rerender(<DescriptionPanel markdown={markdown} theme={themes.dark} />);

    expect(screen.getByRole("heading", { name: "Main Heading" })).toBeTruthy();
    expect(screen.getByText("strong text")).toBeTruthy();
    expect(screen.getByText("inline code")).toBeTruthy();
    expect(screen.getByRole("link", { name: "a link" }).getAttribute("target")).toBe("_blank");
    expect(screen.getByText("const focal = 50;")).toBeTruthy();
    expect(screen.getByRole("table")).toBeTruthy();
    expect(screen.getAllByText("x").length).toBeGreaterThan(0);
  });

  it("renders single-lens breadcrumbs and dispatches settings changes", () => {
    const dispatch = vi.fn();
    const lensKey = CATALOG_KEYS[0];
    renderBreadcrumb({ lensKey, state: makeState({ lens: { lensKeyA: lensKey } as LensState["lens"] }), dispatch });

    expect(screen.getByRole("link", { name: "Home" }).getAttribute("href")).toBe("/");
    expect(screen.getByRole("link", { name: "Makers" }).getAttribute("href")).toBe("/makers");
    expect(screen.getByText(LENS_CATALOG[lensKey].name)).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: /settings/i }));
    fireEvent.click(screen.getByRole("button", { name: /HC/i }));
    fireEvent.click(screen.getByRole("button", { name: /AUTO/i }));

    expect(dispatch).toHaveBeenCalledWith({ type: "SET_HIGH_CONTRAST", highContrast: true });
    expect(dispatch).toHaveBeenCalledWith({ type: "SET_DARK", dark: true });
  });

  it("renders comparison breadcrumbs and returns null for unknown lens keys", () => {
    const [lensKeyA, lensKeyB] = CATALOG_KEYS;
    const state = makeState({
      lens: {
        lensKeyA,
        lensKeyB,
        comparing: true,
        scaleMode: "independent",
      },
    });

    const { rerender, container } = renderBreadcrumb({ lensKey: lensKeyA, state });

    expect(screen.getByRole("link", { name: "Lenses" }).getAttribute("href")).toBe("/lenses");
    expect(screen.getByText(`${LENS_CATALOG[lensKeyA].name} vs ${LENS_CATALOG[lensKeyB].name}`)).toBeTruthy();

    const value: LensCtxValue = { state, theme: themes.dark, isWide: true, updateURLWithSliders: vi.fn() };
    rerender(
      <MemoryRouter>
        <LensStateContext.Provider value={value}>
          <LensDispatchContext.Provider value={vi.fn()}>
            <BreadcrumbBar theme={themes.dark} isWide={true} lensKey="missing-lens" />
          </LensDispatchContext.Provider>
        </LensStateContext.Provider>
      </MemoryRouter>,
    );
    expect(container.textContent).toBe("");
  });
});
