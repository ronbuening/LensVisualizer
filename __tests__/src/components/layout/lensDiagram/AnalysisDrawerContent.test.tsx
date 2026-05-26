// @vitest-environment jsdom

import { afterEach, describe, expect, it, vi, beforeEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import AnalysisDrawerContent from "../../../../../src/components/layout/lensDiagram/AnalysisDrawerContent.js";
import { ANALYSIS_TAB_RENDERERS } from "../../../../../src/components/layout/lensDiagram/analysisTabRenderers.js";
import { ANALYSIS_TABS } from "../../../../../src/components/layout/lensDiagram/analysisTabs.js";
import type { RuntimeLens } from "../../../../../src/types/optics.js";
import type { Theme } from "../../../../../src/types/theme.js";

const {
  mockAberrationsPanel,
  mockBokehTab,
  mockComaTab,
  mockDistortionTab,
  mockFocusBreathingTab,
  mockPupilAberrationTab,
  mockPrepareRuntimeState,
  mockPreparedState,
  mockVignettingTab,
} = vi.hoisted(() => ({
  mockAberrationsPanel: vi.fn(),
  mockBokehTab: vi.fn(),
  mockComaTab: vi.fn(),
  mockDistortionTab: vi.fn(),
  mockFocusBreathingTab: vi.fn(),
  mockPupilAberrationTab: vi.fn(),
  mockPreparedState: { cacheKey: "test:0:0:0" },
  mockPrepareRuntimeState: vi.fn(),
  mockVignettingTab: vi.fn(),
}));

vi.mock("../../../../../src/optics/compat.js", async () => {
  const actual = await vi.importActual("../../../../../src/optics/compat.js");
  return {
    ...actual,
    prepareRuntimeState: mockPrepareRuntimeState,
  };
});

vi.mock("../../../../../src/components/display/analysis/AberrationsPanel.js", () => ({
  default: (props: Record<string, unknown>) => {
    mockAberrationsPanel(props);
    return <div>{`Aberrations:${String(props.expanded)}`}</div>;
  },
}));

vi.mock("../../../../../src/components/display/analysis/BokehTab.js", () => ({
  default: (props: Record<string, unknown>) => {
    mockBokehTab(props);
    return <div>Bokeh</div>;
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
  L: { N: 2, isFoldedOptics: false } as RuntimeLens,
  t: { value: "#0f0", panelDivider: "#333", panelBg: "#111", desc: "#aaa" } as Theme,
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
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    mockAberrationsPanel.mockReset();
    mockBokehTab.mockReset();
    mockComaTab.mockReset();
    mockDistortionTab.mockReset();
    mockFocusBreathingTab.mockReset();
    mockPupilAberrationTab.mockReset();
    mockPrepareRuntimeState.mockReset();
    mockPrepareRuntimeState.mockReturnValue(mockPreparedState);
    mockVignettingTab.mockReset();
  });

  it("maps the aberrations tab to AberrationsPanel and passes the expanded state", () => {
    render(<AnalysisDrawerContent {...baseProps} activeTab="aberrations" />);

    expect(screen.getByText("Aberrations:true")).toBeTruthy();
    expect(mockAberrationsPanel).toHaveBeenCalledTimes(1);
    expect(mockAberrationsPanel.mock.calls[0][0].expanded).toBe(true);
    expect(mockAberrationsPanel.mock.calls[0][0].onExpandedChange).toBe(baseProps.onAberrationsExpandedChange);
    expect(mockAberrationsPanel.mock.calls[0][0].preparedState).toBe(mockPreparedState);
  });

  it("maps the distortion tab to DistortionTab", () => {
    render(<AnalysisDrawerContent {...baseProps} activeTab="distortion" />);

    expect(screen.getByText("Distortion")).toBeTruthy();
    expect(mockDistortionTab).toHaveBeenCalledTimes(1);
    expect(mockDistortionTab.mock.calls[0][0].preparedState).toBe(mockPreparedState);
    expect(mockAberrationsPanel).not.toHaveBeenCalled();
  });

  it("maps the bokeh tab to BokehTab", () => {
    render(<AnalysisDrawerContent {...baseProps} activeTab="bokeh" />);

    expect(screen.getByText("Bokeh")).toBeTruthy();
    expect(mockBokehTab).toHaveBeenCalledTimes(1);
    expect(mockBokehTab.mock.calls[0][0].preparedState).toBe(mockPreparedState);
    expect(mockAberrationsPanel).not.toHaveBeenCalled();
  });

  it("maps the coma tab to ComaTab", () => {
    render(<AnalysisDrawerContent {...baseProps} activeTab="coma" aberrationT={0.37} />);

    expect(screen.getByText("Coma")).toBeTruthy();
    expect(mockComaTab).toHaveBeenCalledTimes(1);
    expect(mockComaTab.mock.calls[0][0].aberrationT).toBe(0.37);
    expect(mockComaTab.mock.calls[0][0].preparedState).toBe(mockPreparedState);
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
    expect(mockVignettingTab.mock.calls[0][0].preparedState).toBe(mockPreparedState);
  });

  it("maps the pupils tab to PupilAberrationTab", () => {
    render(<AnalysisDrawerContent {...baseProps} activeTab="pupils" aberrationT={0.37} />);

    expect(screen.getByText("Pupils")).toBeTruthy();
    expect(mockPupilAberrationTab).toHaveBeenCalledTimes(1);
    expect(mockPupilAberrationTab.mock.calls[0][0].aberrationT).toBe(0.37);
    expect(mockPupilAberrationTab.mock.calls[0][0].preparedState).toBe(mockPreparedState);
    expect(mockVignettingTab).not.toHaveBeenCalled();
  });

  it("shows a folded-optics guard instead of invoking sequential analysis tabs", () => {
    render(
      <AnalysisDrawerContent {...baseProps} L={{ ...baseProps.L, isFoldedOptics: true }} activeTab="vignetting" />,
    );

    expect(screen.getByText(/Folded mirror optical path detected/)).toBeTruthy();
    expect(screen.getByText(/not available for folded mirror systems yet/)).toBeTruthy();
    expect(mockVignettingTab).not.toHaveBeenCalled();
  });

  it("allows folded optics to use the mirror-safe aberrations tab", () => {
    render(
      <AnalysisDrawerContent {...baseProps} L={{ ...baseProps.L, isFoldedOptics: true }} activeTab="aberrations" />,
    );

    expect(screen.getByText(/Folded mirror optical path detected/)).toBeTruthy();
    expect(screen.getByText("Aberrations:true")).toBeTruthy();
    expect(mockAberrationsPanel).toHaveBeenCalledTimes(1);
  });

  it("allows folded optics to use the metadata-only focus breathing tab", () => {
    render(<AnalysisDrawerContent {...baseProps} L={{ ...baseProps.L, isFoldedOptics: true }} activeTab="breathing" />);

    expect(screen.getByText(/Folded mirror optical path detected/)).toBeTruthy();
    expect(screen.getByText("Breathing")).toBeTruthy();
    expect(mockFocusBreathingTab).toHaveBeenCalledTimes(1);
  });

  it("allows folded optics to use the mirror-safe pupils tab", () => {
    render(<AnalysisDrawerContent {...baseProps} L={{ ...baseProps.L, isFoldedOptics: true }} activeTab="pupils" />);

    expect(screen.getByText(/Folded mirror optical path detected/)).toBeTruthy();
    expect(screen.getByText("Pupils")).toBeTruthy();
    expect(mockPupilAberrationTab).toHaveBeenCalledTimes(1);
  });

  it("has exactly one renderer for every registered analysis tab", () => {
    expect(Object.keys(ANALYSIS_TAB_RENDERERS).sort()).toEqual(ANALYSIS_TABS.map((tab) => tab.id).sort());
  });
});
