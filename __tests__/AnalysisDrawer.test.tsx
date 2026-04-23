// @vitest-environment jsdom

import { afterEach, describe, it, expect, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import AnalysisDrawer, { type AnalysisTab } from "../src/components/layout/AnalysisDrawer.js";
import type { Theme } from "../src/types/theme.js";

const tabs: AnalysisTab[] = [
  { id: "aberrations", label: "ABERRATIONS" },
  { id: "distortion", label: "DISTORTION" },
  { id: "breathing", label: "BREATHING" },
  { id: "vignetting", label: "VIGNETTING" },
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
  afterEach(() => {
    cleanup();
  });

  it("scrolls vertically when the wide tab rail is too tall", () => {
    render(
      <AnalysisDrawer
        open
        onClose={vi.fn()}
        activeTab="aberrations"
        onTabChange={vi.fn()}
        tabs={tabs}
        t={theme}
        isWide={true}
      >
        <div>content</div>
      </AnalysisDrawer>,
    );

    const tabButton = screen.getByRole("button", { name: "ABERRATIONS" });
    const tabBar = tabButton.parentElement;

    expect(tabBar).not.toBeNull();
    if (!tabBar) return;

    expect(tabBar.style.overflowY).toBe("auto");
    expect(tabBar.style.overflowX).toBe("hidden");
  });

  it("keeps the compact tab rail horizontally scrollable on narrow layouts", () => {
    render(
      <AnalysisDrawer
        open
        onClose={vi.fn()}
        activeTab="aberrations"
        onTabChange={vi.fn()}
        tabs={tabs}
        t={theme}
        isWide={false}
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
      <AnalysisDrawer open onClose={onClose} activeTab="aberrations" onTabChange={vi.fn()} tabs={tabs} t={theme} isWide={true}>
        <div>content</div>
      </AnalysisDrawer>,
    );

    fireEvent.click(screen.getByRole("button", { name: "×" }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("changes tabs when a tab button is clicked", () => {
    const onTabChange = vi.fn();

    render(
      <AnalysisDrawer open onClose={vi.fn()} activeTab="aberrations" onTabChange={onTabChange} tabs={tabs} t={theme} isWide={true}>
        <div>content</div>
      </AnalysisDrawer>,
    );

    fireEvent.click(screen.getByRole("button", { name: "DISTORTION" }));
    expect(onTabChange).toHaveBeenCalledWith("distortion");
  });

  it("closes on Escape while open", () => {
    const onClose = vi.fn();

    render(
      <AnalysisDrawer open onClose={onClose} activeTab="aberrations" onTabChange={vi.fn()} tabs={tabs} t={theme} isWide={true}>
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
        isWide={true}
      >
        <div>hidden-content</div>
      </AnalysisDrawer>,
    );

    expect(screen.queryByText("hidden-content")).toBeNull();
  });

  it("renders children when open", () => {
    render(
      <AnalysisDrawer open onClose={vi.fn()} activeTab="aberrations" onTabChange={vi.fn()} tabs={tabs} t={theme} isWide={true}>
        <div>visible-content</div>
      </AnalysisDrawer>,
    );

    expect(screen.getByText("visible-content")).toBeTruthy();
  });
});
