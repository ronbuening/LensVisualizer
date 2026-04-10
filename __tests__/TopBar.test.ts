// @vitest-environment jsdom

/**
 * TopBar behavior tests.
 *
 * Covers the visible comparison controls, selector callbacks, and about-button
 * callbacks so the viewer chrome is protected by interaction tests instead of
 * module-contract assertions.
 */

import { createElement } from "react";
import type { ComponentProps } from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import TopBar from "../src/components/layout/TopBar.js";
import themes from "../src/utils/themes.js";

const baseProps: ComponentProps<typeof TopBar> = {
  theme: themes.dark,
  isWide: true,
  lensKeyA: "lens-a",
  lensKeyB: "lens-b",
  comparing: true,
  showCompareBtn: true,
  onSwitchLensA: vi.fn(),
  onSwitchLensB: vi.fn(),
  onSwapLenses: vi.fn(),
  onToggleCompare: vi.fn(),
  onOpenAboutSite: vi.fn(),
  onOpenAboutAuthor: vi.fn(),
  onOpenOpticsPrimer: vi.fn(),
  onOpenAberrationsPrimer: vi.fn(),
  catalogKeys: ["lens-a", "lens-b", "lens-c"],
  catalogNames: {
    "lens-a": "Lens One",
    "lens-b": "Lens Two",
    "lens-c": "Lens Three",
  },
};

describe("TopBar", () => {
  beforeEach(() => {
    Object.values(baseProps).forEach((value) => {
      if (typeof value === "function" && "mockReset" in value) {
        value.mockReset();
      }
    });
  });

  afterEach(() => {
    cleanup();
  });

  it("wires selector, swap, compare, and about callbacks in compare mode", () => {
    render(createElement(TopBar, baseProps));

    fireEvent.click(screen.getByRole("button", { name: "Lens One" }));
    fireEvent.mouseDown(screen.getByText("Lens Three"));

    fireEvent.click(screen.getByTitle("Swap lenses"));
    fireEvent.click(screen.getByRole("button", { name: "EXIT COMPARE" }));
    fireEvent.click(screen.getByRole("button", { name: "Optics" }));
    fireEvent.click(screen.getByRole("button", { name: "Aberrations" }));
    fireEvent.click(screen.getByRole("button", { name: "Site" }));
    fireEvent.click(screen.getByRole("button", { name: "Author" }));

    expect(baseProps.onSwitchLensA).toHaveBeenCalledWith("lens-c");
    expect(baseProps.onSwapLenses).toHaveBeenCalledTimes(1);
    expect(baseProps.onToggleCompare).toHaveBeenCalledTimes(1);
    expect(baseProps.onOpenOpticsPrimer).toHaveBeenCalledTimes(1);
    expect(baseProps.onOpenAberrationsPrimer).toHaveBeenCalledTimes(1);
    expect(baseProps.onOpenAboutSite).toHaveBeenCalledTimes(1);
    expect(baseProps.onOpenAboutAuthor).toHaveBeenCalledTimes(1);
  });

  it("renders the single-lens layout without the compare-only controls on narrow screens", () => {
    render(
      createElement(TopBar, {
        ...baseProps,
        isWide: false,
        comparing: false,
      }),
    );

    expect(screen.getByText("LENS")).toBeTruthy();
    expect(screen.queryByText("LENS B")).toBeNull();
    expect(screen.queryByTitle("Swap lenses")).toBeNull();
    expect(screen.queryByRole("button", { name: "Optics" })).toBeNull();

    fireEvent.click(screen.getByRole("button", { name: "COMPARE" }));
    expect(baseProps.onToggleCompare).toHaveBeenCalledTimes(1);
  });
});
