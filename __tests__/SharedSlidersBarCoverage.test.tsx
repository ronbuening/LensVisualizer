// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import SharedSlidersBar from "../src/comparison/SharedSlidersBar.js";
import themes from "../src/utils/themes.js";
import type { RuntimeLens } from "../src/types/optics.js";
import type {
  AperturePairResult,
  FocusPairResult,
  MovementPairResult,
  ZoomPairResult,
} from "../src/comparison/comparisonSliders.js";

function lens(overrides: Partial<RuntimeLens> & Record<string, unknown> = {}): RuntimeLens {
  return {
    name: "Mock Lens",
    EFL: 50,
    FOPEN: 2,
    maxFstop: 16,
    closeFocusM: 0.5,
    isZoom: false,
    fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],
    ...overrides,
  } as unknown as RuntimeLens;
}

const focusPair: FocusPairResult = {
  focusA: 0.25,
  focusB: 0.5,
  commonPoint: 0.5,
  minCloseFocus: 0.5,
  maxCloseFocus: 1,
};

const aperturePair: AperturePairResult = {
  stopdownA: 0.2,
  stopdownB: 0.4,
  commonPoint: 0.35,
  widerFOPEN: 1.4,
  narrowerFOPEN: 2,
  sharedMaxFstop: 16,
};

function renderSharedSliders({
  LA = lens({ name: "A", FOPEN: 1.4 }),
  LB = lens({ name: "B", FOPEN: 2, closeFocusM: 1 }),
  zoomPair = null,
  movementPair = null,
  sharedZoomT = 0.5,
  sharedShiftMm = 0,
  sharedTiltDeg = 0,
  showEffectiveAperture = false,
  effectiveFNumA = 2.1,
  effectiveFNumB = 2.2,
  onSharedFocusChange = vi.fn(),
  onSharedStopdownChange = vi.fn(),
  onSharedZoomChange = vi.fn(),
  onSharedShiftChange = vi.fn(),
  onSharedTiltChange = vi.fn(),
  onFocusPointerDown = vi.fn(),
  onAperturePointerDown = vi.fn(),
  onSliderPointerUp = vi.fn(),
  onToggleEffectiveAperture = vi.fn(),
}: {
  LA?: RuntimeLens;
  LB?: RuntimeLens;
  zoomPair?: ZoomPairResult | null;
  movementPair?: MovementPairResult | null;
  sharedZoomT?: number;
  sharedShiftMm?: number;
  sharedTiltDeg?: number;
  showEffectiveAperture?: boolean;
  effectiveFNumA?: number;
  effectiveFNumB?: number;
  onSharedFocusChange?: (value: number) => void;
  onSharedStopdownChange?: (value: number) => void;
  onSharedZoomChange?: (value: number) => void;
  onSharedShiftChange?: (value: number) => void;
  onSharedTiltChange?: (value: number) => void;
  onFocusPointerDown?: () => void;
  onAperturePointerDown?: () => void;
  onSliderPointerUp?: () => void;
  onToggleEffectiveAperture?: () => void;
} = {}) {
  return {
    ...render(
      <SharedSlidersBar
        LA={LA}
        LB={LB}
        sharedFocusT={0.25}
        sharedStopdownT={0.3}
        sharedZoomT={sharedZoomT}
        sharedShiftMm={sharedShiftMm}
        sharedTiltDeg={sharedTiltDeg}
        onSharedFocusChange={onSharedFocusChange}
        onSharedStopdownChange={onSharedStopdownChange}
        onSharedZoomChange={onSharedZoomChange}
        onSharedShiftChange={onSharedShiftChange}
        onSharedTiltChange={onSharedTiltChange}
        onFocusPointerDown={onFocusPointerDown}
        onAperturePointerDown={onAperturePointerDown}
        onSliderPointerUp={onSliderPointerUp}
        focusPair={focusPair}
        aperturePair={aperturePair}
        zoomPair={zoomPair}
        movementPair={movementPair}
        dynamicEflA={52}
        dynamicEflB={50}
        effectiveFNumA={effectiveFNumA}
        effectiveFNumB={effectiveFNumB}
        showEffectiveAperture={showEffectiveAperture}
        onToggleEffectiveAperture={onToggleEffectiveAperture}
        theme={themes.dark}
        isWide={true}
      />,
    ),
    callbacks: {
      onSharedFocusChange,
      onSharedStopdownChange,
      onSharedZoomChange,
      onSharedShiftChange,
      onSharedTiltChange,
      onFocusPointerDown,
      onAperturePointerDown,
      onSliderPointerUp,
      onToggleEffectiveAperture,
    },
  };
}

describe("SharedSlidersBar", () => {
  afterEach(() => cleanup());

  it("renders focus and aperture controls without zoom for two primes", () => {
    const { callbacks } = renderSharedSliders();

    expect(screen.queryByText("ZOOM")).toBeNull();
    expect(screen.getByText("FOCUS")).toBeTruthy();
    expect(screen.getByText("APERTURE")).toBeTruthy();
    expect(screen.getAllByRole("slider")).toHaveLength(2);

    const [focusSlider, apertureSlider] = screen.getAllByRole("slider");
    fireEvent.pointerDown(focusSlider);
    fireEvent.change(focusSlider, { target: { value: "0.6" } });
    fireEvent.pointerUp(focusSlider);
    fireEvent.pointerDown(apertureSlider);
    fireEvent.change(apertureSlider, { target: { value: "0.7" } });

    expect(callbacks.onFocusPointerDown).toHaveBeenCalledTimes(1);
    expect(callbacks.onSharedFocusChange).toHaveBeenCalledWith(0.6);
    expect(callbacks.onSliderPointerUp).toHaveBeenCalledTimes(1);
    expect(callbacks.onAperturePointerDown).toHaveBeenCalledTimes(1);
    expect(callbacks.onSharedStopdownChange).toHaveBeenCalledWith(0.7);
  });

  it("renders single-zoom readouts and forwards zoom slider changes", () => {
    const LA = lens({ name: "Zoom A", isZoom: true, zoomPositions: [24, 70], zoomEFLs: [24, 70] });
    const { callbacks } = renderSharedSliders({
      LA,
      zoomPair: { zoomA: 0.5, zoomB: 0, showZoom: true },
    });

    expect(screen.getByText("ZOOM")).toBeTruthy();
    expect(screen.getByText("47 mm")).toBeTruthy();
    expect(screen.getByText("A: 47 mm")).toBeTruthy();
    expect(screen.getByText("B: —")).toBeTruthy();
    expect(screen.getAllByRole("slider")).toHaveLength(3);

    fireEvent.change(screen.getAllByRole("slider")[0], { target: { value: "0.8" } });
    expect(callbacks.onSharedZoomChange).toHaveBeenCalledWith(0.8);
  });

  it("renders movement controls for perspective-control comparisons", () => {
    const LA = lens({
      name: "PC A",
      perspectiveControl: { shiftRangeMm: [-12, 12], tiltRangeDeg: [-7.5, 7.5] },
    });
    const movementPair: MovementPairResult = {
      showMovement: true,
      shiftA: -4,
      shiftB: 0,
      tiltA: 3,
      tiltB: 0,
      shiftRangeMm: [-12, 12],
      tiltRangeDeg: [-7.5, 7.5],
      shiftStepMm: 0.1,
      tiltStepDeg: 0.1,
    };
    const { callbacks } = renderSharedSliders({
      LA,
      movementPair,
      sharedShiftMm: -4,
      sharedTiltDeg: 3,
    });

    expect(screen.getByText("SHIFT")).toBeTruthy();
    expect(screen.getByText("TILT")).toBeTruthy();
    expect(screen.getAllByRole("slider")).toHaveLength(4);

    fireEvent.change(screen.getAllByRole("slider")[0], { target: { value: "-2" } });
    fireEvent.change(screen.getAllByRole("slider")[1], { target: { value: "1" } });
    expect(callbacks.onSharedShiftChange).toHaveBeenCalledWith(-2);
    expect(callbacks.onSharedTiltChange).toHaveBeenCalledWith(1);
  });

  it("renders dual-zoom union endpoints, marker positions, and quick f-stop callbacks", () => {
    const LA = lens({ name: "Zoom A", isZoom: true, zoomPositions: [24, 70], zoomEFLs: [24, 70] });
    const LB = lens({ name: "Zoom B", isZoom: true, zoomPositions: [28, 120], zoomEFLs: [28, 120] });
    const onSharedStopdownChange = vi.fn();
    const onSliderPointerUp = vi.fn();
    const { container } = renderSharedSliders({
      LA,
      LB,
      onSharedStopdownChange,
      onSliderPointerUp,
      zoomPair: {
        zoomA: 0.1,
        zoomB: 0.8,
        showZoom: true,
        sharedFL: 50,
        minFL: 24,
        maxFL: 120,
        commonPointLow: 0.2,
        commonPointHigh: 0.8,
      },
    });

    expect(screen.getByText("24 mm")).toBeTruthy();
    expect(screen.getByText("120 mm")).toBeTruthy();
    expect(container.innerHTML).toContain("left: 20%");
    expect(container.innerHTML).toContain("left: 80%");

    fireEvent.click(screen.getByText("f/4"));

    expect(onSharedStopdownChange).toHaveBeenCalledWith(expect.any(Number));
    expect(onSliderPointerUp).toHaveBeenCalledTimes(1);
  });

  it("renders and toggles effective aperture readouts", () => {
    const onToggleEffectiveAperture = vi.fn();
    renderSharedSliders({
      showEffectiveAperture: true,
      effectiveFNumA: 3.2,
      effectiveFNumB: 3.6,
      onToggleEffectiveAperture,
    });

    expect(screen.getByText("A eff. f/3.2")).toBeTruthy();
    expect(screen.getByText("B eff. f/3.6")).toBeTruthy();

    fireEvent.click(screen.getByText(/Show effective aperture/i));
    expect(onToggleEffectiveAperture).toHaveBeenCalledTimes(1);
  });
});
