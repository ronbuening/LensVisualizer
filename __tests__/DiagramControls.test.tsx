// @vitest-environment jsdom

import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import DiagramControls from "../src/components/controls/DiagramControls.js";
import buildLens from "../src/optics/buildLens.js";
import themes from "../src/utils/themes.js";
import type { RuntimeLens } from "../src/types/optics.js";
import { LENS_CATALOG } from "../src/utils/lensCatalog.js";

afterEach(() => cleanup());

function renderControls(L: RuntimeLens) {
  const callbacks = {
    onShiftChange: vi.fn(),
    onTiltChange: vi.fn(),
  };
  return {
    ...render(
      <DiagramControls
        L={L}
        t={themes.dark}
        compact={false}
        useSideLayout={false}
        zoomT={0}
        onZoomChange={vi.fn()}
        focusT={0}
        onFocusChange={vi.fn()}
        shiftMm={0}
        tiltDeg={0}
        onShiftChange={callbacks.onShiftChange}
        onTiltChange={callbacks.onTiltChange}
        focusExpanded={false}
        onFocusExpandedChange={vi.fn()}
        varReadouts={[]}
        stopdownT={0}
        onStopdownChange={vi.fn()}
        fNumber={L.FOPEN}
        currentFOPEN={L.FOPEN}
        currentPhysStopSD={L.stopPhysSD}
        baseEPSD={L.EP.epSD}
        dynamicEFL={L.EFL}
        effectiveFNum={L.FOPEN}
        showEffectiveAperture={false}
        onToggleEffectiveAperture={vi.fn()}
        apertureExpanded={false}
        onApertureExpandedChange={vi.fn()}
        onSliderPointerUp={vi.fn()}
        showSliders={true}
      />,
    ),
    callbacks,
  };
}

describe("DiagramControls", () => {
  it("hides the aperture slider for fixed-stop lenses", () => {
    renderControls(buildLens(LENS_CATALOG["zeiss-hologon-15f8"]));

    expect(screen.queryByText("APERTURE")).toBeNull();
    expect(screen.getByText("FOCUS")).toBeTruthy();
  });

  it("keeps the aperture slider for adjustable-aperture lenses", () => {
    renderControls(buildLens(LENS_CATALOG["zeiss-distagon-35f14"]));

    expect(screen.getByText("APERTURE")).toBeTruthy();
  });

  it("shows shift and tilt sliders only for perspective-control lenses", () => {
    renderControls(buildLens(LENS_CATALOG["nikon-pc-nikkor-19mm-f4e-ed"]));

    expect(screen.getByText("SHIFT")).toBeTruthy();
    expect(screen.getByText("TILT")).toBeTruthy();
  });

  it("snaps shift and tilt controls to zero near the reset point", () => {
    const { callbacks } = renderControls(buildLens(LENS_CATALOG["nikon-pc-nikkor-19mm-f4e-ed"]));
    const sliders = screen.getAllByRole("slider");

    fireEvent.change(sliders[1], { target: { value: "0.1" } });
    fireEvent.change(sliders[2], { target: { value: "-0.1" } });
    expect(callbacks.onShiftChange).toHaveBeenCalledWith(0);
    expect(callbacks.onTiltChange).toHaveBeenCalledWith(0);

    fireEvent.change(sliders[1], { target: { value: "0.3" } });
    fireEvent.change(sliders[2], { target: { value: "-0.3" } });
    expect(callbacks.onShiftChange).toHaveBeenLastCalledWith(0.3);
    expect(callbacks.onTiltChange).toHaveBeenLastCalledWith(-0.3);
  });
});
