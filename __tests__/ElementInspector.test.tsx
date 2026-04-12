// @vitest-environment jsdom

import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import ElementInspector from "../src/components/display/ElementInspector.js";

afterEach(() => cleanup());
import type { RuntimeLens, ElementData } from "../src/types/optics.js";
import type { Theme } from "../src/types/theme.js";

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
});
