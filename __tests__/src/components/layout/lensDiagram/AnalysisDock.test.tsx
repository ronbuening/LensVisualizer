// @vitest-environment jsdom

import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import AnalysisDock, { ZOOM_DOCK_DESCRIPTION } from "../../../../../src/components/layout/lensDiagram/AnalysisDock.js";
import { ANALYSIS_TABS } from "../../../../../src/components/layout/lensDiagram/analysisTabs.js";
import themes from "../../../../../src/utils/theme/themes.js";

function renderDock(overrides: { drawerOpen?: boolean; drawerId?: string } = {}) {
  const props = {
    tabs: ANALYSIS_TABS,
    activeTab: "aberrations" as const,
    drawerOpen: overrides.drawerOpen ?? false,
    drawerId: overrides.drawerId,
    onAnalysisTabChange: vi.fn(),
    onAnalysisDrawerToggle: vi.fn(),
    onZoomPanToggle: vi.fn(),
    t: themes.dark,
    variant: "inline" as const,
  };
  return { props, ...render(<AnalysisDock {...props} />) };
}

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe("AnalysisDock", () => {
  it("renders one button per analysis tab in registry order, then ZOOM", () => {
    renderDock();

    const buttons = screen.getByRole("group", { name: "Aberrations & distortions" }).querySelectorAll("button");
    const names = Array.from(buttons, (button) => button.getAttribute("aria-label") ?? button.textContent);
    expect(names).toEqual([...ANALYSIS_TABS.map((tab) => tab.label), "Enter zoom and pan mode"]);
  });

  it("opens the drawer on the clicked tab and closes it when the lit tab is clicked again", () => {
    const { props, rerender } = renderDock();

    fireEvent.click(screen.getByRole("button", { name: "MTF" }));
    expect(props.onAnalysisTabChange).toHaveBeenCalledWith("mtf");
    expect(props.onAnalysisDrawerToggle).toHaveBeenCalledWith(true);

    props.onAnalysisTabChange.mockClear();
    fireEvent.click(screen.getByRole("button", { name: "ABERRATIONS" }));
    expect(props.onAnalysisTabChange).not.toHaveBeenCalled();

    rerender(<AnalysisDock {...props} activeTab="mtf" drawerOpen />);
    expect(screen.getByRole("button", { name: "MTF" }).getAttribute("aria-pressed")).toBe("true");
    expect(screen.getByRole("button", { name: "BOKEH" }).getAttribute("aria-pressed")).toBe("false");

    props.onAnalysisDrawerToggle.mockClear();
    fireEvent.click(screen.getByRole("button", { name: "BOKEH" }));
    expect(props.onAnalysisTabChange).toHaveBeenCalledWith("bokeh");
    expect(props.onAnalysisDrawerToggle).not.toHaveBeenCalled();

    fireEvent.click(screen.getByRole("button", { name: "MTF" }));
    expect(props.onAnalysisDrawerToggle).toHaveBeenCalledWith(false);
  });

  it("closes an open drawer before entering zoom mode", () => {
    const { props } = renderDock({ drawerOpen: true });

    fireEvent.click(screen.getByRole("button", { name: "Enter zoom and pan mode" }));

    expect(props.onAnalysisDrawerToggle).toHaveBeenCalledWith(false);
    expect(props.onZoomPanToggle).toHaveBeenCalledWith(true);
  });

  it("describes each button and shows the description as a delayed hover or keyboard-focus tooltip", () => {
    vi.useFakeTimers();
    renderDock({ drawerId: "drawer-id" });

    const mtf = screen.getByRole("button", { name: "MTF" });
    const mtfDescription = ANALYSIS_TABS.find((tab) => tab.id === "mtf")?.description;
    expect(document.getElementById(mtf.getAttribute("aria-describedby") ?? "")?.textContent).toBe(mtfDescription);
    expect(mtf.getAttribute("aria-controls")).toBe("drawer-id");

    fireEvent.mouseEnter(mtf);
    expect(screen.queryByRole("tooltip")).toBeNull();
    act(() => vi.advanceTimersByTime(300));
    expect(screen.getByRole("tooltip").textContent).toBe(mtfDescription);
    fireEvent.mouseLeave(mtf);
    expect(screen.queryByRole("tooltip")).toBeNull();

    const zoom = screen.getByRole("button", { name: "Enter zoom and pan mode" });
    fireEvent.focus(zoom);
    expect(screen.getByRole("tooltip").textContent).toBe(ZOOM_DOCK_DESCRIPTION);
    fireEvent.blur(zoom);

    fireEvent.pointerDown(zoom);
    fireEvent.focus(zoom);
    expect(screen.queryByRole("tooltip")).toBeNull();
  });
});
