// @vitest-environment jsdom

import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import DiagramControls from "../../../../src/components/controls/DiagramControls.js";
import { eflAtFocus } from "../../../../src/optics/optics.js";
import buildLens from "../../../../src/optics/buildLens.js";
import themes from "../../../../src/utils/theme/themes.js";
import type { LensData, RuntimeLens } from "../../../../src/types/optics.js";
import { LENS_CATALOG } from "../../../../src/utils/catalog/lensCatalog.js";

afterEach(() => cleanup());

function renderControls(
  L: RuntimeLens,
  options: {
    focusExpanded?: boolean;
    effectiveFNum?: number;
    workingApertureNote?: string;
    showEffectiveAperture?: boolean;
    apertureExpanded?: boolean;
    zoomT?: number;
    focusT?: number;
    dynamicEFL?: number;
    showEffectiveFocalLength?: boolean;
    shiftMm?: number;
    tiltDeg?: number;
  } = {},
) {
  const callbacks = {
    onAberrationChange: vi.fn(),
    onFocusChange: vi.fn(),
    onShiftChange: vi.fn(),
    onTiltChange: vi.fn(),
    onOpenGroupMovement: vi.fn(),
    onSliderPointerUp: vi.fn(),
    onToggleEffectiveFocalLength: vi.fn(),
  };
  return {
    ...render(
      <DiagramControls
        L={L}
        t={themes.dark}
        compact={false}
        useSideLayout={false}
        zoomT={options.zoomT ?? 0}
        onZoomChange={vi.fn()}
        aberrationT={0}
        onAberrationChange={callbacks.onAberrationChange}
        focusT={options.focusT ?? 0}
        onFocusChange={callbacks.onFocusChange}
        shiftMm={options.shiftMm ?? 0}
        tiltDeg={options.tiltDeg ?? 0}
        onShiftChange={callbacks.onShiftChange}
        onTiltChange={callbacks.onTiltChange}
        focusExpanded={options.focusExpanded ?? false}
        onFocusExpandedChange={vi.fn()}
        varReadouts={[]}
        aberrationReadouts={[]}
        stopdownT={0}
        onStopdownChange={vi.fn()}
        fNumber={L.FOPEN}
        currentFOPEN={L.FOPEN}
        currentPhysStopSD={L.stopPhysSD}
        baseEPSD={L.EP.epSD}
        dynamicEFL={options.dynamicEFL ?? L.EFL}
        effectiveFNum={options.effectiveFNum ?? L.FOPEN}
        workingApertureNote={options.workingApertureNote}
        showEffectiveFocalLength={options.showEffectiveFocalLength ?? false}
        onToggleEffectiveFocalLength={callbacks.onToggleEffectiveFocalLength}
        showEffectiveAperture={options.showEffectiveAperture ?? false}
        onToggleEffectiveAperture={vi.fn()}
        apertureExpanded={options.apertureExpanded ?? false}
        onApertureExpandedChange={vi.fn()}
        onSliderPointerUp={callbacks.onSliderPointerUp}
        showSliders={true}
        onOpenGroupMovement={callbacks.onOpenGroupMovement}
      />,
    ),
    callbacks,
  };
}

describe("DiagramControls", () => {
  it("shows a valid working value and its clipping diagnostic with aperture details collapsed", () => {
    const L = buildLens(LENS_CATALOG[Object.keys(LENS_CATALOG)[0]] as LensData);
    renderControls(L, {
      effectiveFNum: 1.83,
      showEffectiveAperture: true,
      apertureExpanded: false,
      workingApertureNote: "Marginal ray clipped by modeled surface 6.",
    });
    expect(screen.getByText(/working f\/1.83/)).toBeTruthy();
    expect(screen.getByText("Marginal ray clipped by modeled surface 6.")).toBeTruthy();
  });

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
    expect((screen.getByRole("button", { name: "Reset shift to center" }) as HTMLButtonElement).disabled).toBe(true);
    expect((screen.getByRole("button", { name: "Reset tilt to center" }) as HTMLButtonElement).disabled).toBe(true);
  });

  it("shows only shift for the shift-only PC-Nikkor 35mm", () => {
    renderControls(buildLens(LENS_CATALOG["nikon-pc-nikkor-35mm-f28"]));

    expect(screen.getByText("SHIFT")).toBeTruthy();
    expect(screen.queryByText("TILT")).toBeNull();
    expect(screen.getByRole("button", { name: "Reset shift to center" })).toBeTruthy();
    expect(screen.queryByRole("button", { name: "Reset tilt to center" })).toBeNull();
  });

  it("resets shift and tilt independently", () => {
    const { callbacks } = renderControls(buildLens(LENS_CATALOG["nikon-pc-nikkor-19mm-f4e-ed"]), {
      shiftMm: 4,
      tiltDeg: -3,
    });

    fireEvent.click(screen.getByRole("button", { name: "Reset shift to center" }));
    expect(callbacks.onShiftChange).toHaveBeenCalledWith(0);
    expect(callbacks.onTiltChange).not.toHaveBeenCalled();

    fireEvent.click(screen.getByRole("button", { name: "Reset tilt to center" }));
    expect(callbacks.onTiltChange).toHaveBeenCalledWith(0);
    expect(callbacks.onSliderPointerUp).toHaveBeenCalledTimes(2);
  });

  it("shows an aberration-control slider when declared by lens data", () => {
    const { callbacks } = renderControls(buildLens(LENS_CATALOG["varisoft-rokkor-85f28"]));

    expect(screen.getByText("SOFT")).toBeTruthy();
    expect(screen.getByText(/varies the rear meniscus air space d_B0/i)).toBeTruthy();

    const sliders = screen.getAllByRole("slider");
    fireEvent.change(sliders[1], { target: { value: "0.5" } });
    expect(callbacks.onAberrationChange).toHaveBeenCalledWith(0.5);
  });

  it("shows signed travel and a center label for centered aberration controls", () => {
    const source = LENS_CATALOG["varisoft-rokkor-85f28"];
    const L = buildLens({
      ...source,
      aberrationControl: {
        ...source.aberrationControl!,
        minLabel: "UNDER",
        centerLabel: "SHARP",
        maxLabel: "OVER",
        var: {
          "9": [1.5, 2.074, 6.962],
          "11": [65, 64.427, 53.951],
        },
      },
    } as LensData);
    const { callbacks } = renderControls(L);

    expect(screen.getByText("SHARP")).toBeTruthy();
    const slider = screen.getByRole("slider", { name: "SOFT" }) as HTMLInputElement;
    expect(slider.min).toBe("-1");
    expect(slider.max).toBe("1");
    expect(slider.value).toBe("0");

    fireEvent.change(slider, { target: { value: "-0.5" } });
    expect(callbacks.onAberrationChange).toHaveBeenCalledWith(-0.5);
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

  it("opens the focus motion overlay from a focus slider action", () => {
    const { callbacks } = renderControls(buildLens(LENS_CATALOG["sonnar-50f15"]));

    fireEvent.click(screen.getByRole("button", { name: /open focus group motion chart/i }));

    expect(callbacks.onOpenGroupMovement).toHaveBeenCalledWith("focus");
  });

  it("disables the focus slider while keeping focus details visible when focus travel data is absent", () => {
    const { callbacks } = renderControls(buildLens(LENS_CATALOG["canon-rf-28-70-f2"]), { focusExpanded: true });
    const focusSlider = screen.getByRole("slider", { name: "FOCUS" }) as HTMLInputElement;

    expect(focusSlider.disabled).toBe(true);
    expect(screen.getByText("FOCUS")).toBeTruthy();
    expect(screen.getByText(/No close-focus data in patent/i)).toBeTruthy();

    fireEvent.change(focusSlider, { target: { value: "0.75" } });
    expect(callbacks.onFocusChange).not.toHaveBeenCalled();
  });

  it("opens the zoom motion overlay from a zoom slider action", () => {
    const { callbacks } = renderControls(buildLens(LENS_CATALOG["nikon-afp-dx-70-300-f4563g"]));

    fireEvent.click(screen.getByRole("button", { name: /open zoom group motion chart/i }));

    expect(callbacks.onOpenGroupMovement).toHaveBeenCalledWith("zoom");
  });

  it("optionally appends the focused effective focal length to a zoom readout", () => {
    const L = buildLens(LENS_CATALOG["nikon-afp-dx-70-300-f4563g"]);
    const dynamicEFL = L.zoomEFLs![0] - 4.5;
    const { callbacks } = renderControls(L, {
      focusT: 0.5,
      dynamicEFL,
      showEffectiveFocalLength: true,
    });

    const zoomBox = screen.getByText("ZOOM").parentElement?.parentElement as HTMLElement;
    const focusBox = screen.getByText("FOCUS").parentElement?.parentElement as HTMLElement;
    expect(within(zoomBox).getByText(new RegExp(`eff\\. ${dynamicEFL.toFixed(1)} mm`))).toBeTruthy();
    expect(within(focusBox).queryByText(/Show effective focal length/i)).toBeNull();
    fireEvent.click(within(zoomBox).getByText(/Show effective focal length/i));
    expect(callbacks.onToggleEffectiveFocalLength).toHaveBeenCalledTimes(1);
  });
});

it("preserves design aperture precision and labels the real working cone separately", () => {
  const L = buildLens(LENS_CATALOG["nikon-z-135f18-plena"] as LensData);
  renderControls(L, { effectiveFNum: 1.83256287, showEffectiveAperture: true, apertureExpanded: true });
  expect(screen.getByText("f/1.85 (working f/1.83)")).toBeTruthy();
  expect(screen.getByRole("button", { name: "Set aperture to f/1.85" })).toBeTruthy();
  expect(screen.queryByRole("button", { name: "Set aperture to f/1.8" })).toBeNull();
  expect(screen.getByText(/Show working f-number \(real rays\)/)).toBeTruthy();
});
it("shows unavailable working aperture even when the difference cannot be calculated", () => {
  const L = buildLens(LENS_CATALOG["nikon-z-135f18-plena"] as LensData);
  renderControls(L, { effectiveFNum: NaN, showEffectiveAperture: true });
  expect(screen.getByText("f/1.85 (working unavailable)")).toBeTruthy();
});

it("does not report interpolation error as focus breathing at intermediate zoom", () => {
  const L = buildLens(LENS_CATALOG["konica-uc-zoom-hexanon-ar-80-200-f4"]);
  const zoomT = 0.428,
    infinity = eflAtFocus(0, zoomT, L);
  renderControls(L, { zoomT, focusT: 0, dynamicEFL: infinity, showEffectiveFocalLength: true });
  const box = screen.getByText("ZOOM").parentElement?.parentElement as HTMLElement;
  expect(within(box).getByText(`${infinity.toFixed(0)} mm`)).toBeTruthy();
  expect(within(box).queryByText(/eff\./)).toBeNull();
});
