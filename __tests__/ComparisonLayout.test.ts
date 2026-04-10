// @vitest-environment jsdom

/**
 * ComparisonLayout behavior tests.
 *
 * Replaces the old prop-shape assertions with direct checks that the layout
 * renders two diagram panels with the correct per-panel props in desktop and
 * mobile modes.
 */

import { createElement } from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import ComparisonLayout from "../src/comparison/ComparisonLayout.js";
import themes from "../src/utils/themes.js";

const lensDiagramPanelMock = vi.fn((props: { panelId: string; lensKey: string }) =>
  createElement("div", { "data-testid": `panel-${props.panelId}` }, props.lensKey),
);

vi.mock("../src/components/layout/LensDiagramPanel.js", () => ({
  default: (props: unknown) => lensDiagramPanelMock(props as { panelId: string; lensKey: string }),
}));

describe("ComparisonLayout", () => {
  beforeEach(() => {
    lensDiagramPanelMock.mockClear();
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
      scaleRatio: 1,
      panelId: "a",
      maxSvgHeight: "calc(100vh - 260px)",
      minHeaderHeight: 120,
      flashOverlay: false,
    });
    expect(lensDiagramPanelMock.mock.calls[1]?.[0]).toMatchObject({
      lensKey: "lens-b",
      focusT: 0.75,
      zoomT: 0.9,
      stopdownT: 0.6,
      scaleRatio: 0.8,
      panelId: "b",
      maxSvgHeight: "calc(100vh - 260px)",
      minHeaderHeight: 120,
      flashOverlay: true,
    });

    expect(getByTestId("panel-a").parentElement?.style.borderRight).toContain("solid");
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
    });
    expect(getByTestId("panel-a").parentElement?.style.borderBottom).toContain("solid");
  });
});
