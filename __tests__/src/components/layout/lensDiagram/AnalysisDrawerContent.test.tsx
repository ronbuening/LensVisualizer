// @vitest-environment jsdom

import { afterEach, describe, expect, it, vi, beforeEach } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import AnalysisDrawerContent from "../../../../../src/components/layout/lensDiagram/AnalysisDrawerContent.js";
import { ANALYSIS_TAB_RENDERERS } from "../../../../../src/components/layout/lensDiagram/analysisTabRenderers.js";
import { ANALYSIS_TABS } from "../../../../../src/components/layout/lensDiagram/analysisTabs.js";
import type { RuntimeLens } from "../../../../../src/types/optics.js";
import type { AnalysisTabId } from "../../../../../src/types/state.js";
import type { Theme } from "../../../../../src/types/theme.js";
import type { PerspectiveTraceContext } from "../../../../../src/optics/perspective/index.js";
import type { AnalysisComputationContext } from "../../../../../src/optics/compat.js";

const {
  mockAberrationsPanel,
  mockBokehTab,
  mockChromaticTab,
  mockComaTab,
  mockDistortionTab,
  mockFocusBreathingTab,
  mockPupilAberrationTab,
  mockPrepareRuntimeState,
  mockPreparedState,
  mockOpticalSummaryTab,
  mockVignettingTab,
} = vi.hoisted(() => ({
  mockAberrationsPanel: vi.fn(),
  mockBokehTab: vi.fn(),
  mockChromaticTab: vi.fn(),
  mockComaTab: vi.fn(),
  mockDistortionTab: vi.fn(),
  mockFocusBreathingTab: vi.fn(),
  mockPupilAberrationTab: vi.fn(),
  mockOpticalSummaryTab: vi.fn(),
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

vi.mock("../../../../../src/components/display/analysis/ChromaticTab.js", () => ({
  default: (props: Record<string, unknown>) => {
    mockChromaticTab(props);
    return <div>Chromatic</div>;
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

vi.mock("../../../../../src/components/display/analysis/OpticalSummaryTab.js", () => ({
  default: (props: Record<string, unknown>) => {
    mockOpticalSummaryTab(props);
    return <div>Summary</div>;
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

function perspectiveContext(cacheKey: string, active: boolean): PerspectiveTraceContext {
  return { cacheKey, pose: { active } } as PerspectiveTraceContext;
}

describe("AnalysisDrawerContent", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    mockAberrationsPanel.mockReset();
    mockBokehTab.mockReset();
    mockChromaticTab.mockReset();
    mockComaTab.mockReset();
    mockDistortionTab.mockReset();
    mockFocusBreathingTab.mockReset();
    mockPupilAberrationTab.mockReset();
    mockOpticalSummaryTab.mockReset();
    mockPrepareRuntimeState.mockReset();
    mockPrepareRuntimeState.mockReturnValue(mockPreparedState);
    mockVignettingTab.mockReset();
  });

  it("shows a folded-optics guard instead of invoking sequential analysis tabs", () => {
    render(
      <AnalysisDrawerContent {...baseProps} L={{ ...baseProps.L, isFoldedOptics: true }} activeTab="vignetting" />,
    );

    expect(screen.getByText(/Folded mirror optical path detected/)).toBeTruthy();
    expect(screen.getByText(/not available for folded mirror systems yet/)).toBeTruthy();
    expect(mockVignettingTab).not.toHaveBeenCalled();
  });

  it("guards the chromatic tab for folded optics until mirror validation is added", () => {
    render(<AnalysisDrawerContent {...baseProps} L={{ ...baseProps.L, isFoldedOptics: true }} activeTab="chromatic" />);

    expect(screen.getByText(/Folded mirror optical path detected/)).toBeTruthy();
    expect(screen.getByText(/not available for folded mirror systems yet/)).toBeTruthy();
    expect(mockChromaticTab).not.toHaveBeenCalled();
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

  it("suppresses centered-only analysis tabs while movement is active", () => {
    const moved = perspectiveContext("perspective:shift=3:tilt=2", true);
    render(<AnalysisDrawerContent {...baseProps} activeTab="distortion" perspectiveTraceContext={moved} />);

    expect(screen.getByText(/Tilt\/shift is active/)).toBeTruthy();
    expect(screen.getByText(/centered-lens computation is suppressed/)).toBeTruthy();
    expect(mockDistortionTab).not.toHaveBeenCalled();
  });

  it("keeps intrinsic summary available and invalidates its context on shift/tilt-only changes", async () => {
    const shifted = perspectiveContext("perspective:shift=2:tilt=0", true);
    const tilted = perspectiveContext("perspective:shift=0:tilt=2", true);
    const { rerender } = render(
      <AnalysisDrawerContent {...baseProps} activeTab="summary" perspectiveTraceContext={shifted} />,
    );
    const shiftedContext = mockOpticalSummaryTab.mock.calls.at(-1)?.[0].analysisContext as AnalysisComputationContext;

    expect(screen.getByText("Summary")).toBeTruthy();
    expect(shiftedContext.perspectiveTraceContext).toBe(shifted);
    expect(shiftedContext.perspectiveCacheKey).toBe(shifted.cacheKey);
    expect(shiftedContext.sectionAvailability("summary").mode).toBe("intrinsic");

    rerender(<AnalysisDrawerContent {...baseProps} activeTab="summary" perspectiveTraceContext={tilted} />);
    await waitFor(() => {
      const latest = mockOpticalSummaryTab.mock.calls.at(-1)?.[0].analysisContext as AnalysisComputationContext;
      expect(latest.perspectiveCacheKey).toBe(tilted.cacheKey);
    });
    const tiltedContext = mockOpticalSummaryTab.mock.calls.at(-1)?.[0].analysisContext as AnalysisComputationContext;
    expect(tiltedContext).not.toBe(shiftedContext);
    expect(tiltedContext.cacheKey).not.toBe(shiftedContext.cacheKey);
  });

  it("has exactly one renderer for every registered analysis tab and maps each tab to its component", () => {
    const expectations: Record<
      AnalysisTabId,
      { mock: ReturnType<typeof vi.fn>; text: string; props: Record<string, unknown> }
    > = {
      summary: { mock: mockOpticalSummaryTab, text: "Summary", props: { preparedState: mockPreparedState } },
      aberrations: {
        mock: mockAberrationsPanel,
        text: "Aberrations:true",
        props: {
          expanded: true,
          onExpandedChange: baseProps.onAberrationsExpandedChange,
          preparedState: mockPreparedState,
        },
      },
      chromatic: { mock: mockChromaticTab, text: "Chromatic", props: { preparedState: mockPreparedState } },
      coma: { mock: mockComaTab, text: "Coma", props: { aberrationT: 0.37, preparedState: mockPreparedState } },
      bokeh: { mock: mockBokehTab, text: "Bokeh", props: { preparedState: mockPreparedState } },
      distortion: { mock: mockDistortionTab, text: "Distortion", props: { preparedState: mockPreparedState } },
      breathing: { mock: mockFocusBreathingTab, text: "Breathing", props: {} },
      vignetting: { mock: mockVignettingTab, text: "Vignetting", props: { preparedState: mockPreparedState } },
      pupils: {
        mock: mockPupilAberrationTab,
        text: "Pupils",
        props: { aberrationT: 0.37, preparedState: mockPreparedState },
      },
    };
    const registeredTabIds = ANALYSIS_TABS.map((tab) => tab.id).sort();
    expect(Object.keys(ANALYSIS_TAB_RENDERERS).sort()).toEqual(registeredTabIds);
    expect(Object.keys(expectations).sort()).toEqual(registeredTabIds);

    for (const tab of ANALYSIS_TABS) {
      const { mock, text, props } = expectations[tab.id];
      render(<AnalysisDrawerContent {...baseProps} activeTab={tab.id} aberrationT={0.37} />);

      expect(screen.getByText(text)).toBeTruthy();
      expect(mock).toHaveBeenCalledTimes(1);
      expect(mock.mock.calls[0][0]).toMatchObject(props);
      for (const other of Object.values(expectations)) {
        if (other.mock !== mock) expect(other.mock).not.toHaveBeenCalled();
      }

      cleanup();
      Object.values(expectations).forEach((expectation) => expectation.mock.mockClear());
    }
  });
});
