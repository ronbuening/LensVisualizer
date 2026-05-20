// @vitest-environment jsdom

import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import AnalysisDrawerContent from "../../../../../src/components/layout/lensDiagram/AnalysisDrawerContent.js";
import { ANALYSIS_TAB_RENDERERS } from "../../../../../src/components/layout/lensDiagram/analysisTabRenderers.js";
import { ANALYSIS_TABS } from "../../../../../src/components/layout/lensDiagram/analysisTabs.js";
import type { RuntimeLens } from "../../../../../src/types/optics.js";
import type { Theme } from "../../../../../src/types/theme.js";

const {
  mockAberrationsPanel,
  mockComaTab,
  mockDistortionTab,
  mockFocusBreathingTab,
  mockPupilAberrationTab,
  mockVignettingTab,
} = vi.hoisted(() => ({
  mockAberrationsPanel: vi.fn(),
  mockComaTab: vi.fn(),
  mockDistortionTab: vi.fn(),
  mockFocusBreathingTab: vi.fn(),
  mockPupilAberrationTab: vi.fn(),
  mockVignettingTab: vi.fn(),
}));

vi.mock("../../../../../src/components/display/analysis/AberrationsPanel.js", () => ({
  default: (props: Record<string, unknown>) => {
    mockAberrationsPanel(props);
    return <div>{`Aberrations:${String(props.expanded)}`}</div>;
  },
}));

vi.mock("../../../../../src/components/display/analysis/DistortionTab.js", () => ({
  default: (props: Record<string, unknown>) => {
    mockDistortionTab(props);
    return <div>Distortion</div>;
  },
}));

vi.mock("../../../../../src/components/display/analysis/ComaTab.js", () => ({
  default: (props: Record<string, unknown>) => {
    mockComaTab(props);
    return <div>Coma</div>;
  },
}));

vi.mock("../../../../../src/components/display/analysis/FocusBreathingTab.js", () => ({
  default: (props: Record<string, unknown>) => {
    mockFocusBreathingTab(props);
    return <div>Breathing</div>;
  },
}));

vi.mock("../../../../../src/components/display/analysis/PupilAberrationTab.js", () => ({
  default: (props: Record<string, unknown>) => {
    mockPupilAberrationTab(props);
    return <div>Pupils</div>;
  },
}));

vi.mock("../../../../../src/components/display/analysis/VignettingTab.js", () => ({
  default: (props: Record<string, unknown>) => {
    mockVignettingTab(props);
    return <div>Vignetting</div>;
  },
}));

const baseProps = {
  activeTab: "aberrations",
  L: { N: 2 } as RuntimeLens,
  t: { value: "#0f0" } as Theme,
  zPos: [0, 5],
  focusT: 0,
  zoomT: 0,
  dynamicEFL: 50,
  currentEPSD: 10,
  currentPhysStopSD: 5,
  aberrationsExpanded: true,
  onAberrationsExpandedChange: vi.fn(),
};

describe("AnalysisDrawerContent", () => {
  beforeEach(() => {
    mockAberrationsPanel.mockReset();
    mockComaTab.mockReset();
    mockDistortionTab.mockReset();
    mockFocusBreathingTab.mockReset();
    mockPupilAberrationTab.mockReset();
    mockVignettingTab.mockReset();
  });

  it("maps the aberrations tab to AberrationsPanel and passes the expanded state", () => {
    render(<AnalysisDrawerContent {...baseProps} activeTab="aberrations" />);

    expect(screen.getByText("Aberrations:true")).toBeTruthy();
    expect(mockAberrationsPanel).toHaveBeenCalledTimes(1);
    expect(mockAberrationsPanel.mock.calls[0][0].expanded).toBe(true);
    expect(mockAberrationsPanel.mock.calls[0][0].onExpandedChange).toBe(baseProps.onAberrationsExpandedChange);
  });

  it("maps the distortion tab to DistortionTab", () => {
    render(<AnalysisDrawerContent {...baseProps} activeTab="distortion" />);

    expect(screen.getByText("Distortion")).toBeTruthy();
    expect(mockDistortionTab).toHaveBeenCalledTimes(1);
    expect(mockAberrationsPanel).not.toHaveBeenCalled();
  });

  it("maps the coma tab to ComaTab", () => {
    render(<AnalysisDrawerContent {...baseProps} activeTab="coma" aberrationT={0.37} />);

    expect(screen.getByText("Coma")).toBeTruthy();
    expect(mockComaTab).toHaveBeenCalledTimes(1);
    expect(mockComaTab.mock.calls[0][0].aberrationT).toBe(0.37);
    expect(mockAberrationsPanel).not.toHaveBeenCalled();
  });

  it("maps the breathing tab to FocusBreathingTab", () => {
    render(<AnalysisDrawerContent {...baseProps} activeTab="breathing" />);

    expect(screen.getByText("Breathing")).toBeTruthy();
    expect(mockFocusBreathingTab).toHaveBeenCalledTimes(1);
  });

  it("maps the vignetting tab to VignettingTab", () => {
    render(<AnalysisDrawerContent {...baseProps} activeTab="vignetting" />);

    expect(screen.getByText("Vignetting")).toBeTruthy();
    expect(mockVignettingTab).toHaveBeenCalledTimes(1);
  });

  it("maps the pupils tab to PupilAberrationTab", () => {
    render(<AnalysisDrawerContent {...baseProps} activeTab="pupils" aberrationT={0.37} />);

    expect(screen.getByText("Pupils")).toBeTruthy();
    expect(mockPupilAberrationTab).toHaveBeenCalledTimes(1);
    expect(mockPupilAberrationTab.mock.calls[0][0].aberrationT).toBe(0.37);
    expect(mockVignettingTab).not.toHaveBeenCalled();
  });

  it("has exactly one renderer for every registered analysis tab", () => {
    expect(Object.keys(ANALYSIS_TAB_RENDERERS).sort()).toEqual(ANALYSIS_TABS.map((tab) => tab.id).sort());
  });
});
