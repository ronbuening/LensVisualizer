// @vitest-environment jsdom

/**
 * DiagramSVG behavior tests.
 *
 * Covers the extracted SVG render layers directly so the diagram shell has
 * behavioral protection around interactive element paths, overlay widgets, and
 * zoom-pan event wiring.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import DiagramSVG from "../src/components/diagram/DiagramSVG.js";
import themes from "../src/utils/themes.js";
import type { RuntimeLens, ElementShape } from "../src/types/optics.js";

vi.mock("../src/components/diagram/RayPolylines.js", () => ({
  default: ({ keyPrefix }: { keyPrefix: string }) => <g data-testid={`ray-${keyPrefix}`} />,
}));

vi.mock("../src/components/diagram/ApertureStop.js", () => ({
  default: () => <g data-testid="aperture-stop" />,
}));

vi.mock("../src/components/diagram/ElementAnnotations.js", () => ({
  default: () => <g data-testid="element-annotations" />,
}));

vi.mock("../src/components/diagram/LCAInsetWidget.js", () => ({
  default: ({ onClick }: { onClick?: () => void }) => (
    <g>
      <button type="button" data-testid="lca-inset" onClick={onClick}>
        LCA
      </button>
    </g>
  ),
}));

vi.mock("../src/components/diagram/PetzvalSumBadge.js", () => ({
  default: ({ onClick }: { onClick?: () => void }) => (
    <g>
      <button type="button" data-testid="petzval-badge" onClick={onClick}>
        Petzval
      </button>
    </g>
  ),
}));

const baseLens = {
  svgW: 1200,
  svgH: 600,
  gridCount: 3,
  gridPitch: 60,
  rayHeights: [-1, 1],
  offAxisHeights: [-1, 1],
  stopPhysSD: 10,
  stopHousingSD: 12,
  bladeStubFrac: 0.2,
  lyStoPad: 4,
  lyImgLine: 40,
  lyImgLabel: 55,
  stopIdx: 0,
  epZRelStop: 0,
  N: 1,
  xpZRelLastSurf: 0,
  xpSD: 5,
  EP: { epSD: 5, yRatio: 1 },
  isZoom: false,
  elements: [{ id: 1, apd: false, nd: 1.5 }],
} as unknown as RuntimeLens;

const baseShape = {
  eid: 1,
  d: "M 10 10 L 40 10 L 40 40 Z",
  asphPaths: [],
} as unknown as ElementShape;

describe("DiagramSVG", () => {
  const onHover = vi.fn();
  const onSelect = vi.fn();
  const onLcaInsetClick = vi.fn();
  const onPetzvalBadgeClick = vi.fn();

  beforeEach(() => {
    onHover.mockReset();
    onSelect.mockReset();
    onLcaInsetClick.mockReset();
    onPetzvalBadgeClick.mockReset();
  });

  afterEach(() => {
    cleanup();
  });

  it("renders rays, overlays, and interactive element paths when enabled", () => {
    const { container } = render(
      <DiagramSVG
        L={baseLens}
        t={themes.dark}
        dark={true}
        sx={(z) => z + 100}
        sy={(y) => 300 + y}
        CX={220}
        IX={950}
        effectiveSC={1}
        zPos={[120]}
        IMG_MM={43}
        shapes={[baseShape]}
        filterId="diagram-test"
        stopZ={220}
        currentPhysStopSD={8}
        rays={[
          {
            sp: [
              [0, 0],
              [20, 10],
            ],
            gp: [],
          },
        ]}
        offAxisRays={[
          {
            sp: [
              [0, 5],
              [20, 15],
            ],
            gp: [],
          },
        ]}
        chromaticRays={[
          {
            sp: [
              [0, 10],
              [20, 20],
            ],
            gp: [],
            channel: "R",
            axis: "onAxis",
          },
        ]}
        chromSpread={{
          lcaMm: 0.1,
          tcaMm: 0.2,
          intercepts: { R: 0.1, G: 0 },
          imgHeights: { R: 1, G: 0.8 },
        }}
        showOnAxis={true}
        showOffAxis="trueAngle"
        showChromatic={true}
        showPupils={false}
        zoomT={0}
        act={1}
        onHover={onHover}
        onSelect={onSelect}
        sel={null}
        maxSvgHeight="500px"
        useSideLayout={false}
        headerHeight={40}
        compact={false}
        flashVisible={true}
        flashKey={1}
        flashFading={false}
        onLcaInsetClick={onLcaInsetClick}
        onPetzvalBadgeClick={onPetzvalBadgeClick}
      />,
    );

    expect(screen.queryByTestId("ray-on")).toBeNull();
    expect(screen.queryByTestId("ray-off")).toBeNull();
    expect(screen.getByTestId("ray-chrom-on")).toBeTruthy();
    expect(screen.getByTestId("aperture-stop")).toBeTruthy();
    expect(screen.getByTestId("element-annotations")).toBeTruthy();
    expect(screen.getByTestId("lca-inset")).toBeTruthy();
    expect(screen.getByTestId("petzval-badge")).toBeTruthy();

    const elementPath = container.querySelector('path[d="M 10 10 L 40 10 L 40 40 Z"]');
    expect(elementPath).toBeTruthy();

    fireEvent.mouseEnter(elementPath!);
    fireEvent.mouseLeave(elementPath!);
    fireEvent.click(elementPath!);
    fireEvent.click(screen.getByTestId("lca-inset"));
    fireEvent.click(screen.getByTestId("petzval-badge"));

    expect(onHover).toHaveBeenNthCalledWith(1, 1);
    expect(onHover).toHaveBeenNthCalledWith(2, null);
    expect(onSelect).toHaveBeenCalledWith(1);
    expect(onLcaInsetClick).toHaveBeenCalledTimes(1);
    expect(onPetzvalBadgeClick).toHaveBeenCalledTimes(1);
  });

  it("switches into grab-mode event wiring when zoom-pan is active", () => {
    const onSvgWheel = vi.fn();
    const onSvgPointerDown = vi.fn();
    const onSvgPointerMove = vi.fn();
    const onSvgPointerUp = vi.fn();
    const onSvgTouchStart = vi.fn();
    const onSvgTouchMove = vi.fn();
    const onSvgTouchEnd = vi.fn();

    const { container } = render(
      <DiagramSVG
        L={baseLens}
        t={themes.dark}
        dark={true}
        sx={(z) => z + 100}
        sy={(y) => 300 + y}
        CX={220}
        IX={950}
        effectiveSC={1}
        zPos={[120]}
        IMG_MM={43}
        shapes={[baseShape]}
        filterId="diagram-test-zoom"
        stopZ={220}
        currentPhysStopSD={8}
        rays={[]}
        offAxisRays={[]}
        chromaticRays={[]}
        chromSpread={null}
        showOnAxis={false}
        showOffAxis="off"
        showChromatic={false}
        showPupils={false}
        zoomT={0}
        act={null}
        onHover={onHover}
        onSelect={onSelect}
        sel={null}
        maxSvgHeight="500px"
        useSideLayout={false}
        headerHeight={40}
        compact={false}
        flashVisible={false}
        flashKey={1}
        flashFading={false}
        zoomPanActive={true}
        isPanning={false}
        onSvgWheel={onSvgWheel}
        onSvgPointerDown={onSvgPointerDown}
        onSvgPointerMove={onSvgPointerMove}
        onSvgPointerUp={onSvgPointerUp}
        onSvgTouchStart={onSvgTouchStart}
        onSvgTouchMove={onSvgTouchMove}
        onSvgTouchEnd={onSvgTouchEnd}
      />,
    );

    const svg = container.querySelector("svg");
    const elementPath = container.querySelector('path[d="M 10 10 L 40 10 L 40 40 Z"]');

    expect(svg?.style.cursor).toBe("grab");
    expect(svg?.style.touchAction).toBe("none");

    fireEvent.click(elementPath!);
    fireEvent.wheel(svg!, { deltaY: -100, clientX: 100, clientY: 100 });
    fireEvent.pointerDown(svg!, { pointerId: 1, clientX: 100, clientY: 100 });
    fireEvent.pointerMove(svg!, { pointerId: 1, clientX: 120, clientY: 120 });
    fireEvent.pointerUp(svg!, { pointerId: 1, clientX: 120, clientY: 120 });
    fireEvent.touchStart(svg!, { touches: [{ clientX: 20, clientY: 20 }] });
    fireEvent.touchMove(svg!, { touches: [{ clientX: 30, clientY: 30 }] });
    fireEvent.touchEnd(svg!);

    expect(onSelect).not.toHaveBeenCalled();
    expect(onSvgWheel).toHaveBeenCalledTimes(1);
    expect(onSvgPointerDown).toHaveBeenCalledTimes(1);
    expect(onSvgPointerMove).toHaveBeenCalledTimes(1);
    expect(onSvgPointerUp).toHaveBeenCalledTimes(1);
    expect(onSvgTouchStart).toHaveBeenCalledTimes(1);
    expect(onSvgTouchMove).toHaveBeenCalledTimes(1);
    expect(onSvgTouchEnd).toHaveBeenCalledTimes(1);
  });

  it("renders EP and XP pupil markers when showPupils is true", () => {
    const { container } = render(
      <DiagramSVG
        L={baseLens}
        t={themes.dark}
        dark={true}
        sx={(z) => z + 100}
        sy={(y) => 300 + y}
        CX={220}
        IX={950}
        effectiveSC={1}
        zPos={[120]}
        IMG_MM={43}
        shapes={[]}
        filterId="diagram-pupils"
        stopZ={220}
        currentPhysStopSD={8}
        rays={[]}
        offAxisRays={[]}
        chromaticRays={[]}
        chromSpread={null}
        showOnAxis={false}
        showOffAxis="off"
        showChromatic={false}
        showPupils={true}
        zoomT={0}
        act={null}
        onHover={onHover}
        onSelect={onSelect}
        sel={null}
        maxSvgHeight="500px"
        useSideLayout={false}
        headerHeight={40}
        compact={false}
        flashVisible={false}
        flashKey={1}
        flashFading={false}
      />,
    );

    const texts = Array.from(container.querySelectorAll("text")).map((el) => el.textContent);
    expect(texts).toContain("EP");
    expect(texts).toContain("XP");
    const epText = Array.from(container.querySelectorAll("text")).find((el) => el.textContent === "EP");
    const xpText = Array.from(container.querySelectorAll("text")).find((el) => el.textContent === "XP");
    expect(epText?.getAttribute("font-size")).toBe("9.5");
    expect(xpText?.getAttribute("font-size")).toBe("9.5");
    expect(epText?.getAttribute("fill")).toBe(themes.dark.pupilEntrance);
    expect(xpText?.getAttribute("fill")).toBe(themes.dark.pupilExit);
    expect(epText?.getAttribute("fill")).not.toBe(themes.dark.stopLabel);
    expect(xpText?.getAttribute("fill")).not.toBe(themes.dark.stopLabel);
    expect(epText?.getAttribute("fill")).not.toBe(xpText?.getAttribute("fill"));
    const circles = container.querySelectorAll("circle");
    expect(circles.length).toBeGreaterThanOrEqual(2);
  });
});
