// @vitest-environment jsdom

import { describe, it, expect, afterEach, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import ElementInspector from "../../../../src/components/display/ElementInspector.js";
import buildLens from "../../../../src/optics/buildLens.js";
import { LENS_CATALOG } from "../../../../src/utils/catalog/lensCatalog.js";

afterEach(() => cleanup());
import type { ChromaticChannel, RuntimeLens, ElementData } from "../../../../src/types/optics.js";
import type { Theme } from "../../../../src/types/theme.js";

const mockTheme = {
  title: "#fff",
  muted: "#888",
  label: "#aaa",
  value: "#eee",
  propLabel: "#777",
  apdPatentBg: "#330",
  apdPatentText: "#ff0",
  apdInferBg: "#303",
  apdInferText: "#f0f",
  cementBg: "#030",
  cementText: "#0f0",
  apdNote: "#f80",
  role: "#8af",
  elemType: "#ccc",
  panelBorder: "#333",
  rayChromR: "#f00",
  rayChromG: "#0f0",
  rayChromB: "#00f",
  rayChromV: "#80f",
  chromDispHigh: "#f30",
  chromDispMid: "#cc0",
  chromDispLow: "#0c0",
} as unknown as Theme;

const basicElement: ElementData = {
  id: 1,
  name: "Crown glass",
  label: "E1",
  type: "positive meniscus",
  nd: 1.518,
  vd: 64.1,
  fl: 85.3,
  glass: "S-BSL7",
};

const mockLens = {
  ES: [[1, 0, 1] as [number, number, number]],
  asphByIdx: {} as Record<number, unknown>,
  vdByIdx: {} as Record<number, number>,
} as unknown as RuntimeLens;

describe("ElementInspector", () => {
  it("renders the element label and name", () => {
    render(<ElementInspector info={basicElement} L={mockLens} t={mockTheme} showChromatic={false} />);
    expect(screen.getByText("E1")).toBeTruthy();
    expect(screen.getByText("Crown glass")).toBeTruthy();
  });

  it("renders the element type", () => {
    render(<ElementInspector info={basicElement} L={mockLens} t={mockTheme} showChromatic={false} />);
    expect(screen.getByText("positive meniscus")).toBeTruthy();
  });

  it("renders nd (refractive index)", () => {
    render(<ElementInspector info={basicElement} L={mockLens} t={mockTheme} showChromatic={false} />);
    expect(screen.getByText("1.518")).toBeTruthy();
  });

  it("renders glass type", () => {
    render(<ElementInspector info={basicElement} L={mockLens} t={mockTheme} showChromatic={false} />);
    expect(screen.getByText("S-BSL7")).toBeTruthy();
  });

  it("renders APD patent badge", () => {
    const apdElement: ElementData = { ...basicElement, apd: "patent" };
    render(<ElementInspector info={apdElement} L={mockLens} t={mockTheme} showChromatic={false} />);
    expect(screen.getByText("APD (PATENT)")).toBeTruthy();
  });

  it("renders APD inferred badge", () => {
    const apdElement: ElementData = { ...basicElement, apd: "inferred" };
    render(<ElementInspector info={apdElement} L={mockLens} t={mockTheme} showChromatic={false} />);
    expect(screen.getByText("APD (INFERRED)")).toBeTruthy();
  });

  it("renders cemented badge when present", () => {
    const cementedElement: ElementData = { ...basicElement, cemented: "E1+E2" };
    render(<ElementInspector info={cementedElement} L={mockLens} t={mockTheme} showChromatic={false} />);
    expect(screen.getByText(/DOUBLET.*E1\+E2/)).toBeTruthy();
  });

  it("renders role when present", () => {
    const roleElement: ElementData = { ...basicElement, role: "field flattener" };
    render(<ElementInspector info={roleElement} L={mockLens} t={mockTheme} showChromatic={false} />);
    expect(screen.getByText("field flattener")).toBeTruthy();
  });

  it("renders focal length when available", () => {
    render(<ElementInspector info={basicElement} L={mockLens} t={mockTheme} showChromatic={false} />);
    expect(screen.getByText(/85\.3 mm/)).toBeTruthy();
  });

  it("renders folded surface metadata and explicit image-plane geometry", () => {
    const L = buildLens(LENS_CATALOG["reference-newtonian-side-focus"]);
    const info = L.elements.find((element) => element.id === 2)!;

    render(<ElementInspector info={info} L={L} t={mockTheme} showChromatic={false} />);

    expect(screen.getByText("SEC:")).toBeTruthy();
    expect(screen.getByText(/reflect, first-surface, active rear, inactive block, normal z=1 y=1/)).toBeTruthy();
    expect(screen.getByText("SECB:")).toBeTruthy();
    expect(screen.getByText(/refract, active both, normal z=1 y=1/)).toBeTruthy();
    expect(screen.getByText("Image plane IMG:")).toBeTruthy();
    expect(screen.getByText(/z=35 mm y=25 mm normal z=0 y=1/)).toBeTruthy();
  });

  it("shows resolved chromatic indices and quality instead of recomputing an Abbe-only fallback", () => {
    const chromaticLens = {
      ...mockLens,
      S: [{ label: "1", R: 100, d: 5, nd: 1.5, sd: 10, elemId: basicElement.id }],
      ES: [[basicElement.id, 0, 0] as [number, number, number]],
      indexByIdx: {
        0: {
          quality: "sellmeier",
          glassEntry: { name: "N-BK7" },
          fn: (channel: ChromaticChannel) => ({ R: 1.49, G: 1.5, B: 1.51, V: 1.515 })[channel],
        },
      },
    } as unknown as RuntimeLens;

    render(
      <ElementInspector
        info={{ ...basicElement, nd: 1.5, glass: "N-BK7" }}
        L={chromaticLens}
        t={mockTheme}
        showChromatic={true}
      />,
    );

    expect(screen.getByText("Sellmeier (N-BK7)")).toBeTruthy();
    expect(screen.getByText("0.02000")).toBeTruthy();
    expect(screen.getByText("1.49000").getAttribute("title")).toBe("C-line 656.3 nm");
    expect(screen.getByText("1.50000").getAttribute("title")).toBe("d-line 587.6 nm");
    expect(screen.getByText("1.51000").getAttribute("title")).toBe("F-line 486.1 nm");
    expect(screen.getByText("1.51500").getAttribute("title")).toBe("g-line 435.8 nm");
  });
});

describe("ElementInspector — aspheric comparison link", () => {
  const asphCoeffs = { K: -0.5, A4: 1e-7, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 };
  const asphMockLens = {
    ...mockLens,
    asphByIdx: { 0: asphCoeffs } as Record<number, unknown>,
  } as unknown as RuntimeLens;

  it("does not render the compare link when element is not aspheric", () => {
    render(
      <ElementInspector
        info={basicElement}
        L={mockLens}
        t={mockTheme}
        showChromatic={false}
        onOpenAsphericCompare={() => {}}
      />,
    );
    expect(screen.queryByText(/Compare to sphere/)).toBeFalsy();
  });

  it("does not render the compare link when callback is not provided", () => {
    render(<ElementInspector info={basicElement} L={asphMockLens} t={mockTheme} showChromatic={false} />);
    expect(screen.queryByText(/Compare to sphere/)).toBeFalsy();
  });

  it("renders the compare link when element is aspheric and callback is provided", () => {
    render(
      <ElementInspector
        info={basicElement}
        L={asphMockLens}
        t={mockTheme}
        showChromatic={false}
        onOpenAsphericCompare={() => {}}
      />,
    );
    expect(screen.getByText(/Compare to sphere/)).toBeTruthy();
  });

  it("calls the callback with the element id when the compare link is clicked", () => {
    const onOpen = vi.fn();
    render(
      <ElementInspector
        info={basicElement}
        L={asphMockLens}
        t={mockTheme}
        showChromatic={false}
        onOpenAsphericCompare={onOpen}
      />,
    );
    screen.getByText(/Compare to sphere/).click();
    expect(onOpen).toHaveBeenCalledOnce();
    expect(onOpen).toHaveBeenCalledWith(basicElement.id);
  });
});
