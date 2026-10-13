// @vitest-environment jsdom

/**
 * ComparisonLayout behavior tests.
 *
 * Replaces the old prop-shape assertions with direct checks that the layout
 * renders two diagram panels with the correct per-panel props in desktop and
 * mobile modes.
 */

import { act, createElement, type ComponentProps } from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { installMatchMediaMock } from "../../testUtils.js";
import ComparisonLayout from "../../../src/comparison/ComparisonLayout.js";
import themes from "../../../src/utils/theme/themes.js";

type PanelProps = {
  panelId: string;
  lensKey: string;
  comparisonDetails?: { expanded: boolean; onChange: (value: boolean) => void };
};
const lensDiagramPanelMock = vi.fn((props: PanelProps) =>
  createElement(
    "div",
    { "data-testid": `panel-${props.panelId}` },
    props.lensKey,
    props.comparisonDetails
      ? createElement("button", {
          "aria-label": `${props.panelId} specs`,
          "aria-expanded": props.comparisonDetails.expanded,
          onClick: () => props.comparisonDetails?.onChange(!props.comparisonDetails.expanded),
        })
      : null,
  ),
);

vi.mock("../../../src/components/layout/LensDiagramPanel.js", () => ({
  default: (props: unknown) => lensDiagramPanelMock(props as { panelId: string; lensKey: string }),
}));

describe("ComparisonLayout", () => {
  beforeEach(() => {
    lensDiagramPanelMock.mockClear();
    installMatchMediaMock(false);
  });

  afterEach(() => {
    cleanup();
  });

  it("renders side-by-side panels with synchronized desktop props", () => {
    const { getByTestId } = render(
      createElement(ComparisonLayout, {
        theme: themes.dark,
        isWide: true,
        lensKeyA: "lens-a",
        lensKeyB: "lens-b",
        focusPair: { focusA: 0.25, focusB: 0.75, commonPoint: 0.5, minCloseFocus: 0.4, maxCloseFocus: 0.8 },
        aperturePair: {
          stopdownA: 0.2,
          stopdownB: 0.6,
          fNumberA: 2,
          fNumberB: 2,
          limitingPanel: "b",
          commonPoint: 0.3,
          widerFOPEN: 1.4,
          narrowerFOPEN: 2,
          sharedMaxFstop: 16,
        },
        zoomPair: {
          zoomA: 0.1,
          zoomB: 0.9,
          showZoom: true,
          commonPointLow: 0.2,
          commonPointHigh: 0.8,
          sharedFL: 50,
          minFL: 24,
          maxFL: 70,
        },
        movementPair: {
          showMovement: true,
          shiftA: 8,
          shiftB: 0,
          tiltA: 0,
          tiltB: -5,
          shiftRangeMm: [-12, 12],
          tiltRangeDeg: [-8, 8],
          shiftStepMm: 0.1,
          tiltStepDeg: 0.1,
        },
        scaleRatios: { a: 1, b: 0.8 },
        maxHeaderHeight: 120,
        onHeaderHeight: vi.fn(),
        flashPanel: "b",
      }),
    );

    expect(screen.getByTestId("panel-a").textContent).toBe("lens-a");
    expect(screen.getByTestId("panel-b").textContent).toBe("lens-b");

    expect(lensDiagramPanelMock).toHaveBeenCalledTimes(2);
    expect(lensDiagramPanelMock.mock.calls[0]?.[0]).toMatchObject({
      lensKey: "lens-a",
      focusT: 0.25,
      zoomT: 0.1,
      stopdownT: 0.2,
      shiftMm: 8,
      tiltDeg: 0,
      scaleRatio: 1,
      panelId: "a",
      maxSvgHeight: "none",
      minDiagramHeight: 280,
      minHeaderHeight: 120,
      flashOverlay: false,
      fillAvailableHeight: true,
    });
    expect(lensDiagramPanelMock.mock.calls[1]?.[0]).toMatchObject({
      lensKey: "lens-b",
      focusT: 0.75,
      zoomT: 0.9,
      stopdownT: 0.6,
      shiftMm: 0,
      tiltDeg: -5,
      scaleRatio: 0.8,
      panelId: "b",
      maxSvgHeight: "none",
      minDiagramHeight: 280,
      minHeaderHeight: 120,
      flashOverlay: true,
      fillAvailableHeight: true,
    });

    expect(getByTestId("panel-a").parentElement?.style.borderRight).toContain("solid");
    expect(getByTestId("panel-a").parentElement?.parentElement?.style.flex).toBe("1 1 0px");
    expect(getByTestId("panel-a").parentElement?.style.display).toBe("flex");
  });

  it("keeps manual disclosure choices through sliders and resizes and resets only a replaced pane", () => {
    const media = installMatchMediaMock(true);
    const props: ComponentProps<typeof ComparisonLayout> = {
      theme: themes.dark,
      isWide: true,
      lensKeyA: "lens-a",
      lensKeyB: "lens-b",
      focusPair: { focusA: 0, focusB: 0, commonPoint: 0, minCloseFocus: 0.4, maxCloseFocus: 1.2 },
      aperturePair: {
        stopdownA: 0,
        stopdownB: 0,
        fNumberA: 2,
        fNumberB: 2.8,
        limitingPanel: "b",
        commonPoint: 0,
        widerFOPEN: 2,
        narrowerFOPEN: 2.8,
        sharedMaxFstop: 16,
      },
      zoomPair: { zoomA: 0, zoomB: 0, showZoom: false },
      scaleRatios: null,
      maxHeaderHeight: 0,
      onHeaderHeight: vi.fn(),
      flashPanel: null,
    };
    const { rerender } = render(createElement(ComparisonLayout, props));
    const expanded = () =>
      ["a", "b"].map((pane) => screen.getByRole("button", { name: `${pane} specs` }).getAttribute("aria-expanded"));
    expect(expanded()).toEqual(["false", "false"]);
    fireEvent.click(screen.getByRole("button", { name: "a specs" }));
    act(() => media.dispatchChange(false));
    expect(expanded()).toEqual(["true", "true"]);
    fireEvent.click(screen.getByRole("button", { name: "b specs" }));
    rerender(createElement(ComparisonLayout, { ...props, zoomPair: { zoomA: 0.5, zoomB: 0.5, showZoom: false } }));
    expect(expanded()).toEqual(["true", "false"]);
    act(() => media.dispatchChange(true));
    expect(expanded()).toEqual(["true", "false"]);
    act(() => media.dispatchChange(false));
    fireEvent.click(screen.getByRole("button", { name: "a specs" }));
    expect(expanded()).toEqual(["false", "false"]);
    rerender(createElement(ComparisonLayout, { ...props, lensKeyA: "lens-c" }));
    expect(expanded()).toEqual(["true", "false"]);
    rerender(createElement(ComparisonLayout, props));
    expect(expanded()).toEqual(["true", "false"]);
  });

  it("stacks the panels vertically on narrow screens", () => {
    const { getByTestId } = render(
      createElement(ComparisonLayout, {
        theme: themes.dark,
        isWide: false,
        lensKeyA: "lens-a",
        lensKeyB: "lens-b",
        focusPair: { focusA: 0.1, focusB: 0.2, commonPoint: 0.4, minCloseFocus: 0.4, maxCloseFocus: 1.2 },
        aperturePair: {
          stopdownA: 0.1,
          stopdownB: 0.3,
          fNumberA: 2.8,
          fNumberB: 2.8,
          limitingPanel: "b",
          commonPoint: 0.2,
          widerFOPEN: 2,
          narrowerFOPEN: 2.8,
          sharedMaxFstop: 16,
        },
        zoomPair: {
          zoomA: 0,
          zoomB: 0,
          showZoom: false,
        },
        scaleRatios: null,
        maxHeaderHeight: 160,
        onHeaderHeight: vi.fn(),
        flashPanel: null,
      }),
    );

    expect(lensDiagramPanelMock.mock.calls[0]?.[0]).toMatchObject({
      maxSvgHeight: "42vh",
      minHeaderHeight: undefined,
      scaleRatio: null,
      fillAvailableHeight: false,
    });
    expect(getByTestId("panel-a").parentElement?.style.borderBottom).toContain("solid");
  });
});
