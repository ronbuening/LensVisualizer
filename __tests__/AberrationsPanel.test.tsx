// @vitest-environment jsdom

import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import AberrationsPanel from "../src/components/display/AberrationsPanel.js";
import type { RuntimeLens } from "../src/types/optics.js";
import type { Theme } from "../src/types/theme.js";

const { mockComputeSphericalAberration, mockComputeSAProfile } = vi.hoisted(() => ({
  mockComputeSphericalAberration: vi.fn(),
  mockComputeSAProfile: vi.fn(),
}));

vi.mock("../src/optics/aberrationAnalysis.js", () => ({
  computeSphericalAberration: mockComputeSphericalAberration,
  computeSAProfile: mockComputeSAProfile,
}));

const theme = {
  panelBg: "#111",
  panelBorder: "#222",
  muted: "#999",
  axis: "#666",
  value: "#0f0",
  label: "#eee",
  toggleBg: "#000",
  toggleBorder: "#333",
  toggleText: "#fff",
  toggleIcon: "#fff",
  toggleActiveBg: "#222",
  toggleActiveBorder: "#555",
  toggleActiveText: "#fff",
  toggleInactiveText: "#bbb",
} as unknown as Theme;

const baseProps = {
  L: { N: 2 } as RuntimeLens,
  t: theme,
  zPos: [0, 5],
  focusT: 0,
  zoomT: 0,
  currentEPSD: 10,
  currentPhysStopSD: 5,
  expanded: true,
};

describe("AberrationsPanel", () => {
  beforeEach(() => {
    mockComputeSAProfile.mockReturnValue([]);
  });

  it("shows undercorrected for negative SA", () => {
    mockComputeSphericalAberration.mockReturnValue({
      saMm: -0.012,
      saUm: -12,
      realIntercept: 98,
      paraxialIntercept: 100,
    });

    const { container } = render(<AberrationsPanel {...baseProps} />);
    expect(screen.getByText("(undercorrected)")).toBeTruthy();
    const metric = container.querySelector('[title*="Longitudinal spherical aberration"]');
    expect(metric?.getAttribute("title")).toContain("Negative = undercorrected");
  });

  it("shows overcorrected for positive SA", () => {
    mockComputeSphericalAberration.mockReturnValue({
      saMm: 0.012,
      saUm: 12,
      realIntercept: 102,
      paraxialIntercept: 100,
    });

    render(<AberrationsPanel {...baseProps} />);
    expect(screen.getByText("(overcorrected)")).toBeTruthy();
  });
});
