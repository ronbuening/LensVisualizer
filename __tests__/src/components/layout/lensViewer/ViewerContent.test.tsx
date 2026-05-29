// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import ViewerContent from "../../../../../src/components/layout/lensViewer/ViewerContent.js";
import themes from "../../../../../src/utils/theme/themes.js";

vi.mock("../../../../../src/comparison/ComparisonContent.js", () => ({
  default: ({ lensKeyA, lensKeyB }: { lensKeyA: string; lensKeyB: string }) => (
    <div data-testid="comparison-content">{`${lensKeyA}/${lensKeyB}`}</div>
  ),
}));

vi.mock("../../../../../src/components/layout/SingleLensContent.js", () => ({
  default: ({ lensKeyA, markdown }: { lensKeyA: string; markdown?: string | null }) => (
    <div data-testid="single-lens-content">{`${lensKeyA}:${markdown ?? ""}`}</div>
  ),
}));

function baseProps() {
  return {
    theme: themes.dark,
    isWide: true,
    comparing: false,
    lensKeyA: "lens-a",
    lensKeyB: "lens-b",
    comparisonLenses: null,
    focusPair: null,
    aperturePair: null,
    zoomPair: null,
    movementPair: null,
    scaleRatios: null,
    maxHeaderHeight: 0,
    onHeaderHeight: vi.fn(),
    flashPanel: null,
    sharedFocusT: 0,
    sharedStopdownT: 0,
    sharedZoomT: 0,
    sharedShiftMm: 0,
    sharedTiltDeg: 0,
    onSharedFocusChange: vi.fn(),
    onSharedStopdownChange: vi.fn(),
    onSharedShiftChange: vi.fn(),
    onSharedTiltChange: vi.fn(),
    onFocusPointerDown: vi.fn(),
    onAperturePointerDown: vi.fn(),
    onSliderPointerUp: vi.fn(),
    dispatch: vi.fn(),
    showEffectiveAperture: false,
    effectiveDesktopView: "both" as const,
    showDesktopToggle: true,
    mobileView: "diagram" as const,
    markdown: "notes",
  };
}

afterEach(() => cleanup());

describe("ViewerContent", () => {
  it("routes non-comparison mode to the single-lens content", () => {
    render(<ViewerContent {...baseProps()} />);
    expect(screen.getByTestId("single-lens-content").textContent).toBe("lens-a:notes");
    expect(screen.queryByTestId("comparison-content")).toBeNull();
  });

  it("routes comparison mode to comparison content", () => {
    render(<ViewerContent {...baseProps()} comparing={true} />);
    expect(screen.getByTestId("comparison-content").textContent).toBe("lens-a/lens-b");
    expect(screen.queryByTestId("single-lens-content")).toBeNull();
  });
});
