// @vitest-environment jsdom

import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import DiagramControls from "../src/components/controls/DiagramControls.js";
import buildLens from "../src/optics/buildLens.js";
import themes from "../src/utils/themes.js";
import type { RuntimeLens } from "../src/types/optics.js";
import { LENS_CATALOG } from "../src/utils/lensCatalog.js";

afterEach(() => cleanup());

function renderControls(L: RuntimeLens) {
  return render(
    <DiagramControls
      L={L}
      t={themes.dark}
      compact={false}
      useSideLayout={false}
      zoomT={0}
      onZoomChange={vi.fn()}
      focusT={0}
      onFocusChange={vi.fn()}
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
  );
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
});
