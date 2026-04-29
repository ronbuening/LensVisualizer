// @vitest-environment jsdom

import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import CardinalElementsOverlay from "../src/components/diagram/CardinalElementsOverlay.js";
import themes from "../src/utils/themes.js";
import type { CardinalElements } from "../src/optics/cardinalElements.js";
import type { RuntimeLens } from "../src/types/optics.js";

afterEach(() => cleanup());

const lens = {
  maxSD: 20,
  svgH: 400,
  YSC: 4,
} as unknown as RuntimeLens;

const baseCardinals: CardinalElements = {
  frontVertexZ: 0,
  rearVertexZ: 60,
  imagePlaneZ: 88,
  objectIndex: 1,
  imageIndex: 1,
  nodalPrincipalCoincident: true,
  points: {
    frontFocal: { id: "F", z: -45 },
    rearFocal: { id: "F'", z: 92 },
    frontPrincipal: { id: "H", z: 5 },
    rearPrincipal: { id: "H'", z: 42 },
    frontNodal: { id: "N", z: 5 },
    rearNodal: { id: "N'", z: 42 },
  },
  distances: {
    efl: { id: "EFL", fromZ: 42, toZ: 92, valueMm: 50 },
    bfd: { id: "BFD", fromZ: 60, toZ: 92, valueMm: 32 },
    ffd: { id: "FFD", fromZ: 0, toZ: -45, valueMm: 45 },
    hiatus: { id: "Hiatus", fromZ: 42, toZ: 5, valueMm: -37 },
    totalTrack: { id: "Total track", fromZ: 0, toZ: 88, valueMm: 88 },
  },
};

function renderOverlay(cardinals = baseCardinals, showCardinals = true, showCardinalDimensions = true) {
  return render(
    <svg>
      <CardinalElementsOverlay
        lens={lens}
        theme={themes.dark}
        cardinals={cardinals}
        sx={(z) => z + 100}
        sy={(y) => 200 + y * 4}
        showCardinals={showCardinals}
        showCardinalDimensions={showCardinalDimensions}
      />
    </svg>,
  );
}

describe("CardinalElementsOverlay", () => {
  it("renders the complete coincident cardinal point labels without no-parallax language", () => {
    const { container } = renderOverlay();
    const text = container.textContent || "";

    expect(text).toContain("F");
    expect(text).toContain("F'");
    expect(text).toContain("H/N");
    expect(text).toContain("H'/N'");
    expect(text).not.toMatch(/no-parallax/i);
    expect(text).not.toMatch(/panoramic rotation/i);
  });

  it("renders independent nodal labels when nodal and principal points differ", () => {
    const cardinals = {
      ...baseCardinals,
      nodalPrincipalCoincident: false,
      points: {
        ...baseCardinals.points,
        frontNodal: { id: "N", z: 14 },
        rearNodal: { id: "N'", z: 51 },
      },
    } satisfies CardinalElements;
    const { container } = renderOverlay(cardinals);
    const labels = Array.from(container.querySelectorAll("text")).map((el) => el.textContent);

    expect(labels).toContain("H");
    expect(labels).toContain("H'");
    expect(labels).toContain("N");
    expect(labels).toContain("N'");
  });

  it("renders dimension lane labels independently of point labels", () => {
    const { container } = renderOverlay(baseCardinals, false, true);
    const text = container.textContent || "";

    expect(text).toContain("EFL 50.0 mm");
    expect(text).toContain("BFD 32.0 mm");
    expect(text).toContain("FFD 45.0 mm");
    expect(text).toContain("Hiatus -37.0 mm");
    expect(text).toContain("Total track 88.0 mm");
    expect(text).not.toContain("H/N");
  });

  it("honors cardinal and dimension sub-layer visibility", () => {
    const { container } = render(
      <svg>
        <CardinalElementsOverlay
          lens={lens}
          theme={themes.dark}
          cardinals={baseCardinals}
          sx={(z) => z + 100}
          sy={(y) => 200 + y * 4}
          showCardinals={true}
          showCardinalFocal={false}
          showCardinalPrincipal={true}
          showCardinalNodal={false}
          showCardinalDimensions={true}
          showCardinalEfl={false}
          showCardinalBfd={true}
          showCardinalFfd={false}
          showCardinalHiatus={false}
          showCardinalTotalTrack={true}
        />
      </svg>,
    );
    const labels = Array.from(container.querySelectorAll("text")).map((el) => el.textContent || "");

    expect(labels).not.toContain("F");
    expect(labels).not.toContain("F'");
    expect(labels).toContain("H/N");
    expect(labels).toContain("H'/N'");
    expect(labels.some((label) => label.startsWith("EFL "))).toBe(false);
    expect(labels.some((label) => label.startsWith("BFD "))).toBe(true);
    expect(labels.some((label) => label.startsWith("Total track "))).toBe(true);
  });
});
