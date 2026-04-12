// @vitest-environment jsdom

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import RayPolylines from "../src/components/diagram/RayPolylines.js";

/* Wrap in an SVG since RayPolylines renders SVG elements */
function renderInSvg(ui: React.ReactElement) {
  return render(<svg>{ui}</svg>);
}

describe("RayPolylines", () => {
  it("renders nothing for empty rays array", () => {
    const { container } = renderInSvg(
      <RayPolylines rays={[]} colorFn={() => "red"} solidWidth={1.2} rayWidthScale={1} keyPrefix="test" />,
    );
    expect(container.querySelectorAll("polyline").length).toBe(0);
  });

  it("renders a solid polyline for each ray with >= 2 sp points", () => {
    const rays = [
      {
        sp: [
          [0, 0],
          [100, 50],
          [200, 0],
        ],
        gp: [],
      },
      {
        sp: [
          [0, 10],
          [100, 60],
        ],
        gp: [],
      },
    ];
    const { container } = renderInSvg(
      <RayPolylines rays={rays} colorFn={() => "#ff0000"} solidWidth={1.2} rayWidthScale={1} keyPrefix="on" />,
    );
    const polylines = container.querySelectorAll("polyline");
    expect(polylines.length).toBe(2);
    expect(polylines[0].getAttribute("points")).toBe("0,0 100,50 200,0");
    expect(polylines[0].getAttribute("stroke")).toBe("#ff0000");
  });

  it("does not render a solid polyline for a ray with < 2 sp points", () => {
    const rays = [{ sp: [[50, 25]], gp: [] }];
    const { container } = renderInSvg(
      <RayPolylines rays={rays} colorFn={() => "red"} solidWidth={1} rayWidthScale={1} keyPrefix="t" />,
    );
    expect(container.querySelectorAll("polyline").length).toBe(0);
  });

  it("renders a ghost polyline when gp has >= 2 points", () => {
    const rays = [
      {
        sp: [
          [0, 0],
          [50, 10],
        ],
        gp: [
          [50, 10],
          [100, 20],
          [150, 30],
        ],
      },
    ];
    const { container } = renderInSvg(
      <RayPolylines rays={rays} colorFn={() => "blue"} solidWidth={1.2} rayWidthScale={1} keyPrefix="g" />,
    );
    const polylines = container.querySelectorAll("polyline");
    // 1 solid + 1 ghost
    expect(polylines.length).toBe(2);
    const ghost = polylines[1];
    expect(ghost.getAttribute("stroke-dasharray")).toBe("3,4");
    expect(ghost.getAttribute("opacity")).toBe("0.3");
    expect(ghost.getAttribute("points")).toBe("50,10 100,20 150,30");
  });

  it("does not render ghost polyline when gp has < 2 points", () => {
    const rays = [
      {
        sp: [
          [0, 0],
          [50, 10],
        ],
        gp: [[50, 10]],
      },
    ];
    const { container } = renderInSvg(
      <RayPolylines rays={rays} colorFn={() => "blue"} solidWidth={1} rayWidthScale={1} keyPrefix="t" />,
    );
    // Only the solid polyline
    expect(container.querySelectorAll("polyline").length).toBe(1);
  });

  it("applies colorFn per ray index", () => {
    const rays = [
      {
        sp: [
          [0, 0],
          [10, 5],
        ],
        gp: [],
      },
      {
        sp: [
          [0, 0],
          [10, -5],
        ],
        gp: [],
      },
    ];
    const colors = ["#aaa", "#bbb"];
    const { container } = renderInSvg(
      <RayPolylines rays={rays} colorFn={(i) => colors[i]} solidWidth={1} rayWidthScale={1} keyPrefix="c" />,
    );
    const polylines = container.querySelectorAll("polyline");
    expect(polylines[0].getAttribute("stroke")).toBe("#aaa");
    expect(polylines[1].getAttribute("stroke")).toBe("#bbb");
  });

  it("applies strokeWidth with rayWidthScale", () => {
    const rays = [
      {
        sp: [
          [0, 0],
          [10, 5],
        ],
        gp: [],
      },
    ];
    const { container } = renderInSvg(
      <RayPolylines rays={rays} colorFn={() => "red"} solidWidth={2} rayWidthScale={1.5} keyPrefix="w" />,
    );
    const polyline = container.querySelector("polyline")!;
    expect(polyline.getAttribute("stroke-width")).toBe("3");
  });

  it("applies solidDash to solid polylines", () => {
    const rays = [
      {
        sp: [
          [0, 0],
          [10, 5],
        ],
        gp: [],
      },
    ];
    const { container } = renderInSvg(
      <RayPolylines rays={rays} colorFn={() => "red"} solidWidth={1} rayWidthScale={1} solidDash="4,3" keyPrefix="d" />,
    );
    expect(container.querySelector("polyline")!.getAttribute("stroke-dasharray")).toBe("4,3");
  });

  it("uses 'none' stroke-dasharray by default", () => {
    const rays = [
      {
        sp: [
          [0, 0],
          [10, 5],
        ],
        gp: [],
      },
    ];
    const { container } = renderInSvg(
      <RayPolylines rays={rays} colorFn={() => "red"} solidWidth={1} rayWidthScale={1} keyPrefix="n" />,
    );
    expect(container.querySelector("polyline")!.getAttribute("stroke-dasharray")).toBe("none");
  });
});
