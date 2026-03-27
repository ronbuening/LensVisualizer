// @vitest-environment jsdom

import { afterEach, describe, it, expect, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
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
});
