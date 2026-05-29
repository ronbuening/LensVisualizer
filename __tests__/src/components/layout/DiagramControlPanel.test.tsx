// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import DiagramControlPanel from "../../../../src/components/layout/DiagramControlPanel.js";
import themes from "../../../../src/utils/theme/themes.js";
import { buildSimplePositiveElementLens } from "../../optics/testLensFixtures.js";
import type { ElementData } from "../../../../src/types/optics.js";

vi.mock("../../../../src/components/controls/DiagramControls.js", () => ({
  default: ({ onToggleEffectiveAperture }: { onToggleEffectiveAperture: () => void }) => (
    <button data-testid="diagram-controls" onClick={onToggleEffectiveAperture}>
      Controls
    </button>
  ),
}));

vi.mock("../../../../src/components/display/ElementInspector.js", () => ({
  default: ({ info }: { info: { name: string } }) => <div data-testid="element-inspector">{info.name}</div>,
}));

vi.mock("../../../../src/components/display/DiagramLegend.js", () => ({
  default: ({ onOpenAbbeDiagram }: { onOpenAbbeDiagram: () => void }) => (
    <button data-testid="diagram-legend" onClick={onOpenAbbeDiagram}>
      Legend
    </button>
  ),
}));

function props(info: object | null = null) {
  const lens = buildSimplePositiveElementLens("test-diagram-control-panel");
  return {
    L: lens,
    t: themes.dark,
    compact: false,
    isWide: true,
    useSideLayout: false,
    headerHeight: 0,
    showSliders: true,
    zoomT: 0,
    aberrationT: 0,
    focusT: 0,
    shiftMm: 0,
    tiltDeg: 0,
    stopdownT: 0,
    fNumber: 2,
    currentFOPEN: 2,
    currentPhysStopSD: 4,
    baseEPSD: 5,
    dynamicEFL: 50,
    effectiveFNum: 2,
    showEffectiveAperture: false,
    onToggleEffectiveAperture: vi.fn(),
    varReadouts: [],
    aberrationReadouts: [],
    focusExpanded: false,
    apertureExpanded: false,
    legendExpanded: false,
    onZoomChange: vi.fn(),
    onAberrationChange: vi.fn(),
    onFocusChange: vi.fn(),
    onStopdownChange: vi.fn(),
    onShiftChange: vi.fn(),
    onTiltChange: vi.fn(),
    onFocusExpandedChange: vi.fn(),
    onApertureExpandedChange: vi.fn(),
    onLegendExpandedChange: vi.fn(),
    onSliderPointerUp: vi.fn(),
    info: info as ElementData | null,
    showOnAxis: true,
    showOffAxis: "edge" as const,
    showChromatic: false,
    chromR: true,
    chromG: true,
    chromB: true,
    chromV: false,
    chromSpread: null,
    rayTracksF: false,
    onOpenAbbeDiagram: vi.fn(),
  };
}

afterEach(() => cleanup());

describe("DiagramControlPanel", () => {
  it("renders controls and legend when no element is selected", () => {
    const panelProps = props();
    render(<DiagramControlPanel {...panelProps} />);

    fireEvent.click(screen.getByTestId("diagram-controls"));
    fireEvent.click(screen.getByTestId("diagram-legend"));
    expect(panelProps.onToggleEffectiveAperture).toHaveBeenCalledTimes(1);
    expect(panelProps.onOpenAbbeDiagram).toHaveBeenCalledTimes(1);
  });

  it("renders the element inspector for selected element info", () => {
    render(<DiagramControlPanel {...props({ id: 1, name: "L1", label: "L1", type: "positive", nd: 1.5 })} />);
    expect(screen.getByTestId("element-inspector").textContent).toBe("L1");
    expect(screen.queryByTestId("diagram-legend")).toBeNull();
  });
});
