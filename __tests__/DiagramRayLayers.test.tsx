// @vitest-environment jsdom

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import DiagramRayLayers from "../src/components/diagram/DiagramRayLayers.js";
import type { RuntimeLens } from "../src/types/optics.js";
import type { Theme } from "../src/types/theme.js";

/* Minimal mock objects — only the properties actually accessed by DiagramRayLayers */
const mockLens = {
  rayHeights: [1, 2, 3, 4],
  offAxisHeights: [1, 2],
} as unknown as RuntimeLens;

const mockTheme = {
  rayCool: "#0000ff",
  rayWarm: "#ff0000",
  rayOffCool: "#00ccff",
  rayOffWarm: "#ff6600",
  rayChromR: "#ff0000",
  rayChromG: "#00ff00",
  rayChromB: "#0000ff",
  rayWidthScale: 1,
  rayOffDash: "",
} as unknown as Theme;

const twoPointSeg = {
  sp: [
    [0, 0],
    [100, 50],
  ],
  gp: [],
};

describe("DiagramRayLayers", () => {
  it("renders on-axis rays when showOnAxis is true", () => {
    const { container } = render(
      <svg>
        <DiagramRayLayers
          lens={mockLens}
          theme={mockTheme}
          rays={[twoPointSeg, twoPointSeg]}
          offAxisRays={[]}
          chromaticRays={[]}
          showOnAxis={true}
          showOffAxis="off"
          showChromatic={false}
        />
      </svg>,
    );
    expect(container.querySelectorAll("polyline").length).toBe(2);
  });

  it("does not render on-axis rays when showOnAxis is false", () => {
    const { container } = render(
      <svg>
        <DiagramRayLayers
          lens={mockLens}
          theme={mockTheme}
          rays={[twoPointSeg]}
          offAxisRays={[]}
          chromaticRays={[]}
          showOnAxis={false}
          showOffAxis="off"
          showChromatic={false}
        />
      </svg>,
    );
    expect(container.querySelectorAll("polyline").length).toBe(0);
  });

  it("renders off-axis rays when showOffAxis is not 'off'", () => {
    const { container } = render(
      <svg>
        <DiagramRayLayers
          lens={mockLens}
          theme={mockTheme}
          rays={[]}
          offAxisRays={[twoPointSeg, twoPointSeg, twoPointSeg]}
          chromaticRays={[]}
          showOnAxis={false}
          showOffAxis="trueAngle"
          showChromatic={false}
        />
      </svg>,
    );
    expect(container.querySelectorAll("polyline").length).toBe(3);
  });

  it("does not render off-axis rays when showOffAxis is 'off'", () => {
    const { container } = render(
      <svg>
        <DiagramRayLayers
          lens={mockLens}
          theme={mockTheme}
          rays={[]}
          offAxisRays={[twoPointSeg]}
          chromaticRays={[]}
          showOnAxis={false}
          showOffAxis="off"
          showChromatic={false}
        />
      </svg>,
    );
    expect(container.querySelectorAll("polyline").length).toBe(0);
  });

  it("renders chromatic rays when showChromatic is true", () => {
    const chromRays = [
      { ...twoPointSeg, channel: "R" as const, y: 0, u: 0, clipped: false },
      { ...twoPointSeg, channel: "G" as const, y: 0, u: 0, clipped: false },
      { ...twoPointSeg, channel: "B" as const, y: 0, u: 0, clipped: false },
    ];
    const { container } = render(
      <svg>
        <DiagramRayLayers
          lens={mockLens}
          theme={mockTheme}
          rays={[]}
          offAxisRays={[]}
          chromaticRays={chromRays}
          showOnAxis={false}
          showOffAxis="off"
          showChromatic={true}
        />
      </svg>,
    );
    expect(container.querySelectorAll("polyline").length).toBe(3);
  });

  it("renders all three ray types simultaneously", () => {
    const chromRays = [{ ...twoPointSeg, channel: "R" as const, y: 0, u: 0, clipped: false }];
    const { container } = render(
      <svg>
        <DiagramRayLayers
          lens={mockLens}
          theme={mockTheme}
          rays={[twoPointSeg]}
          offAxisRays={[twoPointSeg]}
          chromaticRays={chromRays}
          showOnAxis={true}
          showOffAxis="trueAngle"
          showChromatic={true}
        />
      </svg>,
    );
    // 1 on-axis + 1 off-axis + 1 chromatic
    expect(container.querySelectorAll("polyline").length).toBe(3);
  });
});
