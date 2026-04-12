// @vitest-environment jsdom

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import ElementAnnotations from "../src/components/diagram/ElementAnnotations.js";
import type { RuntimeLens, ElementShape } from "../src/types/optics.js";
import type { Theme } from "../src/types/theme.js";

const identity = (v: number) => v;

const mockTheme = {
  elemNumActive: "#fff",
  elemNum: () => "#888",
  chromDispHigh: "#f00",
  chromDispMid: "#ff0",
  chromDispLow: "#0f0",
  groupLabel: "#aaa",
  doubletLabel: "#bbb",
} as unknown as Theme;

const mockElements = [
  { id: 1, name: "Crown", label: "E1", type: "lens", nd: 1.5, vd: 60 },
  { id: 2, name: "Flint", label: "E2", type: "lens", nd: 1.7, vd: 30 },
  { id: 3, name: "Normal", label: "E3", type: "lens", nd: 1.6, vd: 45 },
];

const mockShapes: ElementShape[] = [
  { eid: 1, z1: 0, z2: 5 } as unknown as ElementShape,
  { eid: 2, z1: 6, z2: 11 } as unknown as ElementShape,
  { eid: 3, z1: 12, z2: 17 } as unknown as ElementShape,
];

const mockLens = {
  elements: mockElements,
  lyElemNum: -15,
  lyVdBadge: -20,
  lyGroup: -25,
  lyDoublet: -30,
  groups: [{ text: "FRONT", fromSurface: 0, toSurface: 1 }],
  doublets: [{ text: "DOUBLET", fromSurface: 0, toSurface: 1 }],
} as unknown as RuntimeLens;

describe("ElementAnnotations", () => {
  it("renders element number labels for each shape", () => {
    const { container } = render(
      <svg>
        <ElementAnnotations
          L={mockLens}
          t={mockTheme}
          shapes={mockShapes}
          sx={identity}
          sy={identity}
          zPos={[0, 5, 6, 11, 12, 17]}
          act={null}
          showChromatic={false}
        />
      </svg>,
    );
    const texts = container.querySelectorAll("text");
    // 3 element numbers + 1 group + 1 doublet = 5
    expect(texts.length).toBe(5);
    expect(texts[0].textContent).toBe("1");
    expect(texts[1].textContent).toBe("2");
    expect(texts[2].textContent).toBe("3");
  });

  it("highlights the active element", () => {
    const { container } = render(
      <svg>
        <ElementAnnotations
          L={mockLens}
          t={mockTheme}
          shapes={mockShapes}
          sx={identity}
          sy={identity}
          zPos={[0, 5, 6, 11, 12, 17]}
          act={2}
          showChromatic={false}
        />
      </svg>,
    );
    const texts = container.querySelectorAll("text");
    // Element 2 (index 1) should be highlighted
    expect(texts[1].getAttribute("fill")).toBe("#fff"); // elemNumActive
    expect(texts[1].getAttribute("font-weight")).toBe("700");
    // Others should use default
    expect(texts[0].getAttribute("fill")).toBe("#888");
    expect(texts[0].getAttribute("font-weight")).toBe("400");
  });

  it("shows Abbe badges when showChromatic is true", () => {
    const { container } = render(
      <svg>
        <ElementAnnotations
          L={mockLens}
          t={mockTheme}
          shapes={mockShapes}
          sx={identity}
          sy={identity}
          zPos={[0, 5, 6, 11, 12, 17]}
          act={null}
          showChromatic={true}
        />
      </svg>,
    );
    const texts = container.querySelectorAll("text");
    // 3 element numbers + 3 vd badges + 1 group + 1 doublet = 8
    expect(texts.length).toBe(8);
    // vd badges appear after element numbers: indices 3, 4, 5
    expect(texts[3].textContent).toContain("60"); // vd=60
    expect(texts[4].textContent).toContain("30"); // vd=30
    expect(texts[5].textContent).toContain("45"); // vd=45
  });

  it("color-codes Abbe badges by dispersion class", () => {
    const { container } = render(
      <svg>
        <ElementAnnotations
          L={mockLens}
          t={mockTheme}
          shapes={mockShapes}
          sx={identity}
          sy={identity}
          zPos={[0, 5, 6, 11, 12, 17]}
          act={null}
          showChromatic={true}
        />
      </svg>,
    );
    const texts = container.querySelectorAll("text");
    // vd=60 -> low disp (crown) -> green
    expect(texts[3].getAttribute("fill")).toBe("#0f0");
    // vd=30 -> high disp (flint) -> red
    expect(texts[4].getAttribute("fill")).toBe("#f00");
    // vd=45 -> mid disp -> yellow
    expect(texts[5].getAttribute("fill")).toBe("#ff0");
  });

  it("does not show Abbe badges when showChromatic is false", () => {
    const { container } = render(
      <svg>
        <ElementAnnotations
          L={mockLens}
          t={mockTheme}
          shapes={mockShapes}
          sx={identity}
          sy={identity}
          zPos={[0, 5, 6, 11, 12, 17]}
          act={null}
          showChromatic={false}
        />
      </svg>,
    );
    const texts = container.querySelectorAll("text");
    // 3 elem nums + 1 group + 1 doublet = 5 (no vd badges)
    expect(texts.length).toBe(5);
  });

  it("renders group labels", () => {
    const { container } = render(
      <svg>
        <ElementAnnotations
          L={mockLens}
          t={mockTheme}
          shapes={mockShapes}
          sx={identity}
          sy={identity}
          zPos={[0, 5, 6, 11, 12, 17]}
          act={null}
          showChromatic={false}
        />
      </svg>,
    );
    const texts = Array.from(container.querySelectorAll("text"));
    const groupText = texts.find((t) => t.textContent === "FRONT");
    expect(groupText).toBeTruthy();
    expect(groupText!.getAttribute("fill")).toBe("#aaa");
  });

  it("renders doublet labels", () => {
    const { container } = render(
      <svg>
        <ElementAnnotations
          L={mockLens}
          t={mockTheme}
          shapes={mockShapes}
          sx={identity}
          sy={identity}
          zPos={[0, 5, 6, 11, 12, 17]}
          act={null}
          showChromatic={false}
        />
      </svg>,
    );
    const texts = Array.from(container.querySelectorAll("text"));
    const doubletText = texts.find((t) => t.textContent === "DOUBLET");
    expect(doubletText).toBeTruthy();
    expect(doubletText!.getAttribute("fill")).toBe("#bbb");
  });
});
