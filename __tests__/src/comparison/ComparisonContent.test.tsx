// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import ComparisonContent from "../../../src/comparison/ComparisonContent.js";
import {
  computeAperturePair,
  computeFocusPair,
  computeMovementPair,
  computeZoomPair,
} from "../../../src/comparison/comparisonSliders.js";
import { SET_SHARED_ZOOM_T } from "../../../src/comparison/comparisonReducer.js";
import { SET_GROUP_MOVEMENT } from "../../../src/utils/state/lensReducer.js";
import themes from "../../../src/utils/theme/themes.js";
import { buildSimplePositiveElementLens } from "../optics/testLensFixtures.js";

vi.mock("../../../src/comparison/ComparisonLayout.js", () => ({
  default: ({ lensKeyA, lensKeyB }: { lensKeyA: string; lensKeyB: string }) => (
    <div data-testid="comparison-layout">{`${lensKeyA} vs ${lensKeyB}`}</div>
  ),
}));

vi.mock("../../../src/comparison/SharedSlidersBar.js", () => ({
  default: ({
    onSharedZoomChange,
    onToggleEffectiveAperture,
    onOpenGroupMovement,
  }: {
    onSharedZoomChange: (value: number) => void;
    onToggleEffectiveAperture: () => void;
    onOpenGroupMovement: (mode: "focus" | "zoom" | "combined") => void;
  }) => (
    <div data-testid="shared-sliders">
      <button onClick={() => onSharedZoomChange(0.4)}>Zoom</button>
      <button onClick={onToggleEffectiveAperture}>Aperture</button>
      <button onClick={() => onOpenGroupMovement("focus")}>Movement</button>
    </div>
  ),
}));

afterEach(() => cleanup());

describe("ComparisonContent", () => {
  it("renders comparison layout and shared sliders for valid comparison data", () => {
    const LA = buildSimplePositiveElementLens("comparison-a");
    const LB = buildSimplePositiveElementLens("comparison-b");
    const dispatch = vi.fn();

    render(
      <ComparisonContent
        theme={themes.dark}
        isWide={true}
        lensKeyA="lens-a"
        lensKeyB="lens-b"
        comparisonLenses={{ LA, LB }}
        focusPair={computeFocusPair(0.2, LA, LB)}
        aperturePair={computeAperturePair(0.1, LA, LB)}
        zoomPair={computeZoomPair(0, LA, LB)}
        movementPair={computeMovementPair(0, 0, LA, LB)}
        scaleRatios={null}
        maxHeaderHeight={0}
        onHeaderHeight={vi.fn()}
        flashPanel={null}
        sharedFocusT={0.2}
        sharedStopdownT={0.1}
        sharedZoomT={0}
        sharedShiftMm={0}
        sharedTiltDeg={0}
        onSharedFocusChange={vi.fn()}
        onSharedStopdownChange={vi.fn()}
        onSharedShiftChange={vi.fn()}
        onSharedTiltChange={vi.fn()}
        onFocusPointerDown={vi.fn()}
        onAperturePointerDown={vi.fn()}
        onSliderPointerUp={vi.fn()}
        dispatch={dispatch}
        showEffectiveAperture={false}
      />,
    );

    expect(screen.getByTestId("comparison-layout").textContent).toBe("lens-a vs lens-b");
    expect(screen.getByTestId("shared-sliders")).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "Zoom" }));
    expect(dispatch).toHaveBeenCalledWith({ type: SET_SHARED_ZOOM_T, value: 0.4 });
    fireEvent.click(screen.getByRole("button", { name: "Aperture" }));
    expect(dispatch).toHaveBeenCalledWith({
      type: "SET_PANEL_EXPANDED",
      panel: "showEffectiveAperture",
      expanded: true,
    });
    fireEvent.click(screen.getByRole("button", { name: "Movement" }));
    expect(dispatch).toHaveBeenCalledWith({ type: SET_GROUP_MOVEMENT, open: true, mode: "focus" });
  });

  it("renders an error display and suppresses sliders for failed comparison builds", () => {
    render(
      <ComparisonContent
        theme={themes.dark}
        isWide={true}
        lensKeyA="lens-a"
        lensKeyB="lens-b"
        comparisonLenses={{ error: "boom", failedKeys: "lens-a vs lens-b" }}
        focusPair={null}
        aperturePair={null}
        zoomPair={null}
        movementPair={null}
        scaleRatios={null}
        maxHeaderHeight={0}
        onHeaderHeight={vi.fn()}
        flashPanel={null}
        sharedFocusT={0}
        sharedStopdownT={0}
        sharedZoomT={0}
        sharedShiftMm={0}
        sharedTiltDeg={0}
        onSharedFocusChange={vi.fn()}
        onSharedStopdownChange={vi.fn()}
        onSharedShiftChange={vi.fn()}
        onSharedTiltChange={vi.fn()}
        onFocusPointerDown={vi.fn()}
        onAperturePointerDown={vi.fn()}
        onSliderPointerUp={vi.fn()}
        dispatch={vi.fn()}
        showEffectiveAperture={false}
      />,
    );

    expect(screen.getByText("Failed to build lens for comparison")).toBeTruthy();
    expect(screen.queryByTestId("shared-sliders")).toBeNull();
  });
});
