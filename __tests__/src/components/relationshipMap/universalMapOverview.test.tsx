// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, fireEvent, render, renderHook } from "@testing-library/react";
import UniversalMapOverview from "../../../../src/components/relationshipMap/UniversalMapOverview.js";
import type {
  UniversalLayoutNode,
  UniversalRelationshipLayout,
} from "../../../../src/components/relationshipMap/universalLayout.js";
import useSvgViewport from "../../../../src/components/hooks/useSvgViewport.js";
import { clientPointToSvg, visibleSvgBounds } from "../../../../src/utils/svgCoordinates.js";
import themes from "../../../../src/utils/theme/themes.js";
import { installResizeObserverMock } from "../../../testUtils.js";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

const node: UniversalLayoutNode = {
  id: "author:ada",
  kind: "author",
  x: 300,
  y: 200,
  r: 7,
  label: "Ada",
  fullLabel: "Ada",
  componentIndex: 0,
  clusterId: "cluster",
};
const layout: UniversalRelationshipLayout = {
  width: 1000,
  height: 500,
  nodes: [node],
  nodeById: { [node.id]: node },
  edges: [],
  components: [],
  clusters: [
    {
      id: "cluster",
      anchorId: node.id,
      anchorLabel: "Ada",
      componentIndex: 0,
      x: 100,
      y: 100,
      width: 400,
      height: 200,
      nodeCount: 1,
      edgeCount: 0,
    },
  ],
};
const view = { vbX: 100, vbY: 100, vbW: 400, vbH: 200, zoom: 2.5 };
const bounds = { x: 100, y: 100, width: 400, height: 200 };

function setMatrix(svg: SVGSVGElement, inverse = { a: 5, b: 0, c: 0, d: 5, e: -50, f: -100 }) {
  Object.defineProperty(svg, "getScreenCTM", { configurable: true, value: () => ({ inverse: () => inverse }) });
}

describe("SVG overview coordinates", () => {
  it("converts pointer positions and measures visible letterboxed bounds with the inverse transform", () => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    setMatrix(svg);
    Object.defineProperty(svg, "getBoundingClientRect", {
      value: () => ({ left: 10, top: 10, width: 200, height: 120 }),
    });
    expect(clientPointToSvg(svg, 70, 80)).toEqual({ x: 300, y: 300 });
    expect(visibleSvgBounds(svg)).toEqual({ x: 0, y: -50, width: 1000, height: 600 });
  });

  it("ignores detached and singular transforms", () => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    expect(clientPointToSvg(svg, 10, 10)).toBeNull();
    Object.defineProperty(svg, "getScreenCTM", {
      value: () => ({
        inverse() {
          throw new Error("singular");
        },
      }),
    });
    expect(clientPointToSvg(svg, 10, 10)).toBeNull();
  });

  it("remeasures on viewport changes and resize and disconnects its observer", () => {
    const observer = installResizeObserverMock();
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let width = 200;
    Object.defineProperty(svg, "getBoundingClientRect", { value: () => ({ left: 10, top: 10, width, height: 120 }) });
    setMatrix(svg);
    const ref = { current: svg };
    const { result, rerender, unmount } = renderHook(({ box }) => useSvgViewport(ref, box), {
      initialProps: { box: "0 0 1000 500" },
    });
    expect(result.current.bounds).toEqual({ x: 0, y: -50, width: 1000, height: 600 });
    setMatrix(svg, { a: 2.5, b: 0, c: 0, d: 2.5, e: 75, f: 75 });
    rerender({ box: "100 100 500 250" });
    expect(result.current.bounds?.x).toBe(100);
    width = 300;
    act(() => observer.trigger(svg));
    expect(result.current.width).toBe(300);
    expect(result.current.bounds?.width).toBe(750);
    unmount();
    expect(observer.instances[0].disconnect).toHaveBeenCalled();
  });
});

describe("UniversalMapOverview", () => {
  it("centers pointer/tap clicks in world coordinates and supports keyboard pan and fit", () => {
    const center = vi.fn();
    const pan = vi.fn();
    const fit = vi.fn();
    const { getByRole } = render(
      <UniversalMapOverview
        id="overview"
        layout={layout}
        theme={themes.dark}
        selectedNodeId={node.id}
        view={view}
        visibleBounds={bounds}
        onCenterView={center}
        onPanView={pan}
        onFitAll={fit}
      />,
    );
    const svg = getByRole("group", { name: "Map overview" }) as unknown as SVGSVGElement;
    setMatrix(svg);
    fireEvent.click(svg, { clientX: 70, clientY: 80 });
    expect(center).toHaveBeenCalledWith(300, 300);
    expect(document.activeElement).toBe(svg);
    fireEvent.doubleClick(svg, { clientX: 70, clientY: 80 });
    expect(center).toHaveBeenLastCalledWith(300, 300, view.zoom * 2);
    fireEvent.keyDown(svg, { key: "ArrowRight" });
    expect(pan).toHaveBeenLastCalledWith(40, 0);
    fireEvent.keyDown(svg, { key: "ArrowUp" });
    expect(pan).toHaveBeenLastCalledWith(0, -20);
    fireEvent.keyDown(svg, { key: "Home" });
    expect(fit).toHaveBeenCalledOnce();
    fireEvent.click(svg, { clientX: -100, clientY: 2000 });
    expect(center).toHaveBeenLastCalledWith(0, 500);
  });

  it("clips the viewport indicator and updates it without changing static node geometry", () => {
    const props = {
      id: "overview",
      layout,
      theme: themes.light,
      selectedNodeId: node.id,
      view,
      onCenterView: vi.fn(),
      onPanView: vi.fn(),
      onFitAll: vi.fn(),
    };
    const { getByRole, container, rerender } = render(
      <UniversalMapOverview {...props} visibleBounds={{ x: -100, y: -50, width: 400, height: 200 }} />,
    );
    const viewport = getByRole("img", { name: "Visible map area" });
    expect(["x", "y", "width", "height"].map((key) => viewport.getAttribute(key))).toEqual(["0", "0", "300", "150"]);
    const circle = container.querySelector("circle");
    rerender(<UniversalMapOverview {...props} visibleBounds={bounds} />);
    expect(["x", "y", "width", "height"].map((key) => viewport.getAttribute(key))).toEqual([
      "100",
      "100",
      "400",
      "200",
    ]);
    expect(container.querySelector("circle")).toBe(circle);
    expect(container.querySelectorAll("line, text")).toHaveLength(0);
  });
});
