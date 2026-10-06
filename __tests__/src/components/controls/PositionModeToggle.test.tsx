// @vitest-environment jsdom

import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import PositionModeToggle from "../../../../src/components/controls/PositionModeToggle.js";
import type { Theme } from "../../../../src/types/theme.js";

afterEach(() => cleanup());

const mockTheme = {
  toggleBorder: "#444",
  toggleBg: "#111",
  toggleActiveBg: "#0af",
  toggleActiveText: "#fff",
  toggleInactiveText: "#999",
} as unknown as Theme;

describe("PositionModeToggle", () => {
  it("marks the active mode and reports the other one when it is chosen", () => {
    const onChange = vi.fn();
    render(<PositionModeToggle t={mockTheme} patentPositions={false} onChange={onChange} />);

    const group = screen.getByRole("group", { name: "Zoom and focus positions" });
    const sliders = screen.getByRole("button", { name: "SLIDERS" });
    const patent = screen.getByRole("button", { name: "PATENT POSITIONS" });
    expect(group.contains(patent)).toBe(true);
    expect(sliders.getAttribute("aria-pressed")).toBe("true");
    expect(patent.getAttribute("aria-pressed")).toBe("false");

    fireEvent.click(patent);
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("collapses to a single on/off button in the compact layout", () => {
    const onChange = vi.fn();
    const { rerender } = render(<PositionModeToggle t={mockTheme} patentPositions compact onChange={onChange} />);

    expect(screen.queryByRole("button", { name: "SLIDERS" })).toBeNull();
    const patent = screen.getByRole("button", { name: "PATENT" });
    expect(patent.getAttribute("aria-pressed")).toBe("true");
    fireEvent.click(patent);
    expect(onChange).toHaveBeenLastCalledWith(false);

    rerender(<PositionModeToggle t={mockTheme} patentPositions={false} compact onChange={onChange} />);
    expect(screen.getByRole("button", { name: "PATENT" }).getAttribute("aria-pressed")).toBe("false");
    fireEvent.click(screen.getByRole("button", { name: "PATENT" }));
    expect(onChange).toHaveBeenLastCalledWith(true);
  });
});
