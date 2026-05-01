// @vitest-environment jsdom

import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import ChromaticControls from "../src/components/controls/ChromaticControls.js";
import type { Theme } from "../src/types/theme.js";

afterEach(() => cleanup());

const mockTheme = {
  rayChromR: "#ff0000",
  rayChromG: "#00ff00",
  rayChromB: "#0000ff",
  toggleBg: "#222",
  toggleBgActive: "#444",
  toggleText: "#999",
  toggleTextActive: "#fff",
  toggleBorder: "#555",
  chromChannelBg: "#333",
  chromChannelBorder: "#555",
} as unknown as Theme;

describe("ChromaticControls", () => {
  it("renders the COLOR master toggle", () => {
    render(
      <ChromaticControls
        t={mockTheme}
        showChromatic={false}
        chromR={true}
        chromG={true}
        chromB={true}
        chromV={false}
      />,
    );
    expect(screen.getByText("COLOR")).toBeTruthy();
  });

  it("calls onShowChromaticChange when COLOR is toggled", () => {
    const onChange = vi.fn();
    render(
      <ChromaticControls
        t={mockTheme}
        showChromatic={false}
        onShowChromaticChange={onChange}
        chromR={true}
        chromG={true}
        chromB={true}
        chromV={false}
      />,
    );
    fireEvent.click(screen.getByText("COLOR"));
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("shows R/G/B channel buttons when showChromatic is true", () => {
    render(
      <ChromaticControls
        t={mockTheme}
        showChromatic={true}
        chromR={true}
        chromG={true}
        chromB={true}
        chromV={false}
      />,
    );
    expect(screen.getByText("R")).toBeTruthy();
    expect(screen.getByText("G")).toBeTruthy();
    expect(screen.getByText("B")).toBeTruthy();
  });

  it("hides R/G/B channel buttons when showChromatic is false", () => {
    render(
      <ChromaticControls
        t={mockTheme}
        showChromatic={false}
        chromR={true}
        chromG={true}
        chromB={true}
        chromV={false}
      />,
    );
    expect(screen.queryByText("R")).toBeNull();
    expect(screen.queryByText("G")).toBeNull();
    expect(screen.queryByText("B")).toBeNull();
  });

  it("calls individual channel callbacks when clicked", () => {
    const onR = vi.fn();
    const onG = vi.fn();
    const onB = vi.fn();
    render(
      <ChromaticControls
        t={mockTheme}
        showChromatic={true}
        chromR={true}
        chromG={false}
        chromB={true}
        chromV={false}
        onChromRChange={onR}
        onChromGChange={onG}
        onChromBChange={onB}
      />,
    );
    fireEvent.click(screen.getByText("R"));
    expect(onR).toHaveBeenCalledWith(false); // toggling off

    fireEvent.click(screen.getByText("G"));
    expect(onG).toHaveBeenCalledWith(true); // toggling on

    fireEvent.click(screen.getByText("B"));
    expect(onB).toHaveBeenCalledWith(false); // toggling off
  });

  it("renders SVG icon with three colored lines", () => {
    const { container } = render(
      <ChromaticControls
        t={mockTheme}
        showChromatic={true}
        chromR={true}
        chromG={true}
        chromB={true}
        chromV={false}
      />,
    );
    const svgs = container.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThanOrEqual(1);
    // The master toggle SVG has 4 lines (R/G/B/V); the V line renders muted when chromV is off.
    const masterLines = svgs[0].querySelectorAll("line");
    expect(masterLines.length).toBe(4);
  });

  it("handles missing callbacks gracefully", () => {
    render(
      <ChromaticControls
        t={mockTheme}
        showChromatic={true}
        chromR={true}
        chromG={true}
        chromB={true}
        chromV={false}
      />,
    );
    // Should not throw
    fireEvent.click(screen.getByText("COLOR"));
    fireEvent.click(screen.getByText("R"));
    fireEvent.click(screen.getByText("G"));
    fireEvent.click(screen.getByText("B"));
  });
});
