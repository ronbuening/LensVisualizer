// @vitest-environment jsdom

import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import AnalysisDrawer, { type AnalysisTab } from "../../../../src/components/layout/AnalysisDrawer.js";
import { installMatchMediaMock } from "../../../testUtils.js";
import type { Theme } from "../../../../src/types/theme.js";

const tabs: AnalysisTab[] = [
  { id: "aberrations", label: "ABERRATIONS", description: "Aberrations help." },
  { id: "distortion", label: "DISTORTION", description: "Distortion help." },
  { id: "breathing", label: "BREATHING", description: "Breathing help." },
  { id: "vignetting", label: "VIGNETTING", description: "Vignetting help." },
];

const theme = {
  panelBg: "#111",
  panelBorder: "#222",
  headerBgColor: "#333",
  headerBgImage: "none",
  sliderAccent: "#f00",
  toggleActiveBg: "#444",
  toggleActiveText: "#fff",
  muted: "#bbb",
} as unknown as Theme;

describe("AnalysisDrawer", () => {
  beforeEach(() => {
    installMatchMediaMock();
  });

  afterEach(() => {
    cleanup();
  });

  it("renders a docked panel without a tab strip that slides up from the bottom", () => {
    const { rerender } = render(
      <AnalysisDrawer
        open
        onClose={vi.fn()}
        activeTab="distortion"
        onTabChange={vi.fn()}
        tabs={tabs}
        t={theme}
        showTabs={false}
        id="drawer-id"
      >
        <div>content</div>
      </AnalysisDrawer>,
    );

    const region = screen.getByRole("region", { name: "DISTORTION analysis" });
    expect(region.id).toBe("drawer-id");
    expect(screen.queryByRole("button", { name: "DISTORTION" })).toBeNull();
    expect(region.style.transform).toBe("translate(0, 0)");

    rerender(
      <AnalysisDrawer
        open={false}
        onClose={vi.fn()}
        activeTab="distortion"
        onTabChange={vi.fn()}
        tabs={tabs}
        t={theme}
        showTabs={false}
        id="drawer-id"
      >
        <div>content</div>
      </AnalysisDrawer>,
    );

    const closed = document.getElementById("drawer-id");
    expect(closed?.style.transform).toBe("translateY(100%)");
    expect(closed?.hasAttribute("inert")).toBe(true);
  });

  it("keeps the tab strip horizontally scrollable", () => {
    render(
      <AnalysisDrawer
        open
        onClose={vi.fn()}
        activeTab="aberrations"
        onTabChange={vi.fn()}
        tabs={tabs}
        t={theme}
        showTabs
      >
        <div>content</div>
      </AnalysisDrawer>,
    );

    const tabButton = screen.getByRole("button", { name: "ABERRATIONS" });
    const tabBar = tabButton.parentElement;

    expect(tabBar).not.toBeNull();
    if (!tabBar) return;

    expect(tabBar.style.overflowX).toBe("auto");
    expect(tabBar.style.overflowY).toBe("hidden");
    expect(tabButton.style.flex).toBe("1 0 88px");
  });

  it("calls onClose when the close button is pressed", () => {
    const onClose = vi.fn();

    render(
      <AnalysisDrawer
        open
        onClose={onClose}
        activeTab="aberrations"
        onTabChange={vi.fn()}
        tabs={tabs}
        t={theme}
        showTabs
      >
        <div>content</div>
      </AnalysisDrawer>,
    );

    fireEvent.click(screen.getByRole("button", { name: "×" }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("changes tabs when a tab button is clicked", () => {
    const onTabChange = vi.fn();

    render(
      <AnalysisDrawer
        open
        onClose={vi.fn()}
        activeTab="aberrations"
        onTabChange={onTabChange}
        tabs={tabs}
        t={theme}
        showTabs
      >
        <div>content</div>
      </AnalysisDrawer>,
    );

    fireEvent.click(screen.getByRole("button", { name: "DISTORTION" }));
    expect(onTabChange).toHaveBeenCalledWith("distortion");
  });

  it("closes on Escape while open", () => {
    const onClose = vi.fn();

    render(
      <AnalysisDrawer
        open
        onClose={onClose}
        activeTab="aberrations"
        onTabChange={vi.fn()}
        tabs={tabs}
        t={theme}
        showTabs
      >
        <div>content</div>
      </AnalysisDrawer>,
    );

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("does not render children when closed", () => {
    render(
      <AnalysisDrawer
        open={false}
        onClose={vi.fn()}
        activeTab="aberrations"
        onTabChange={vi.fn()}
        tabs={tabs}
        t={theme}
        showTabs
      >
        <div>hidden-content</div>
      </AnalysisDrawer>,
    );

    expect(screen.queryByText("hidden-content")).toBeNull();
  });

  it("renders children when open", () => {
    render(
      <AnalysisDrawer
        open
        onClose={vi.fn()}
        activeTab="aberrations"
        onTabChange={vi.fn()}
        tabs={tabs}
        t={theme}
        showTabs
      >
        <div>visible-content</div>
      </AnalysisDrawer>,
    );

    expect(screen.getByText("visible-content")).toBeTruthy();
  });
});
