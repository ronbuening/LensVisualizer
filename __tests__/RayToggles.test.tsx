// @vitest-environment jsdom

import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import RayToggles from "../src/components/controls/RayToggles.js";
import type { Theme } from "../src/types/theme.js";

afterEach(() => cleanup());

const mockTheme = {
  rayCool: "#0000ff",
  rayWarm: "#ff0000",
  rayOffCool: "#00ccff",
  rayOffWarm: "#ff6600",
  stopLabel: "#ffcc00",
  toggleBg: "#222",
  toggleBgActive: "#444",
  toggleText: "#999",
  toggleTextActive: "#fff",
  toggleBorder: "#555",
} as unknown as Theme;

describe("RayToggles", () => {
  it("renders ON-AXIS and OFF-AXIS buttons", () => {
    render(<RayToggles t={mockTheme} showOnAxis={true} showOffAxis="off" showPupils={false} />);
    expect(screen.getByText("ON-AXIS")).toBeTruthy();
    expect(screen.getByText("OFF-AXIS")).toBeTruthy();
  });

  it("calls onShowOnAxisChange when ON-AXIS is clicked", () => {
    const onChange = vi.fn();
    render(
      <RayToggles t={mockTheme} showOnAxis={true} onShowOnAxisChange={onChange} showOffAxis="off" showPupils={false} />,
    );
    fireEvent.click(screen.getByText("ON-AXIS"));
    expect(onChange).toHaveBeenCalledWith(false);
  });

  it("calls onShowOnAxisChange with true when currently off", () => {
    const onChange = vi.fn();
    render(
      <RayToggles
        t={mockTheme}
        showOnAxis={false}
        onShowOnAxisChange={onChange}
        showOffAxis="off"
        showPupils={false}
      />,
    );
    fireEvent.click(screen.getByText("ON-AXIS"));
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("calls onShowOffAxisChange when OFF-AXIS is clicked", () => {
    const onChange = vi.fn();
    render(
      <RayToggles
        t={mockTheme}
        showOnAxis={true}
        showOffAxis="off"
        onShowOffAxisChange={onChange}
        showPupils={false}
      />,
    );
    fireEvent.click(screen.getByText("OFF-AXIS"));
    expect(onChange).toHaveBeenCalled();
  });

  it("renders SVG icons inside buttons", () => {
    const { container } = render(<RayToggles t={mockTheme} showOnAxis={true} showOffAxis="off" showPupils={false} />);
    const svgs = container.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThanOrEqual(2);
  });

  it("handles missing callbacks gracefully", () => {
    render(<RayToggles t={mockTheme} showOnAxis={true} showOffAxis="off" showPupils={false} />);
    // Click should not throw when handlers are undefined
    fireEvent.click(screen.getByText("ON-AXIS"));
    fireEvent.click(screen.getByText("OFF-AXIS"));
  });
});
