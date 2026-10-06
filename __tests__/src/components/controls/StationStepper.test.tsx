// @vitest-environment jsdom

import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import StationStepper, { MAX_STATION_BUTTONS } from "../../../../src/components/controls/StationStepper.js";
import type { Theme } from "../../../../src/types/theme.js";

afterEach(() => cleanup());

const mockTheme = {
  toggleBorder: "#444",
  toggleBg: "#111",
  toggleActiveBg: "#0af",
  toggleActiveText: "#fff",
  toggleInactiveText: "#999",
  focusEndpoint: "#888",
} as unknown as Theme;

const STATIONS = [
  { id: 0, label: "24 mm" },
  { id: 2, label: "50 mm" },
  { id: 4, label: "100 mm" },
];

function renderStepper(props: Partial<Parameters<typeof StationStepper>[0]> = {}) {
  const onSelect = vi.fn();
  render(
    <StationStepper
      t={mockTheme}
      ariaLabel="Zoom position"
      stations={STATIONS}
      activeId={2}
      onSelect={onSelect}
      {...props}
    />,
  );
  return onSelect;
}

describe("StationStepper", () => {
  it("renders one radio per station with the active one checked and holding the tab stop", () => {
    renderStepper();

    const group = screen.getByRole("radiogroup", { name: "Zoom position" });
    const radios = screen.getAllByRole("radio");
    expect(group.contains(radios[0])).toBe(true);
    expect(radios.map((radio) => radio.textContent)).toEqual(["24 mm", "50 mm", "100 mm"]);
    expect(radios.map((radio) => radio.getAttribute("aria-checked"))).toEqual(["false", "true", "false"]);
    expect(radios.map((radio) => radio.tabIndex)).toEqual([-1, 0, -1]);
  });

  it("reports the station id on click, but not for the station already selected", () => {
    const onSelect = renderStepper();

    fireEvent.click(screen.getByRole("radio", { name: "100 mm" }));
    expect(onSelect).toHaveBeenCalledWith(4);
    onSelect.mockClear();
    fireEvent.click(screen.getByRole("radio", { name: "50 mm" }));
    expect(onSelect).not.toHaveBeenCalled();
  });

  it("moves the selection and focus with the arrow, Home and End keys without wrapping", () => {
    const onSelect = renderStepper();
    const [first, middle, last] = screen.getAllByRole("radio");

    fireEvent.keyDown(middle, { key: "ArrowRight" });
    expect(onSelect).toHaveBeenLastCalledWith(4);
    expect(document.activeElement).toBe(last);
    fireEvent.keyDown(middle, { key: "ArrowLeft" });
    expect(onSelect).toHaveBeenLastCalledWith(0);
    fireEvent.keyDown(middle, { key: "End" });
    expect(onSelect).toHaveBeenLastCalledWith(4);
    fireEvent.keyDown(middle, { key: "Home" });
    expect(onSelect).toHaveBeenLastCalledWith(0);

    onSelect.mockClear();
    fireEvent.keyDown(last, { key: "ArrowRight" });
    fireEvent.keyDown(first, { key: "ArrowLeft" });
    expect(onSelect).not.toHaveBeenCalled();
  });

  it("ignores input while disabled and shows the note", () => {
    const onSelect = renderStepper({ disabled: true, note: "Focus travel is not modeled" });

    fireEvent.click(screen.getByRole("radio", { name: "24 mm" }));
    fireEvent.keyDown(screen.getByRole("radio", { name: "50 mm" }), { key: "ArrowRight" });
    expect(onSelect).not.toHaveBeenCalled();
    expect(screen.getByText("Focus travel is not modeled")).toBeTruthy();
  });

  it("puts the tab stop on the first station when nothing is selected", () => {
    renderStepper({ activeId: null });
    expect(screen.getAllByRole("radio").map((radio) => radio.tabIndex)).toEqual([0, -1, -1]);
  });

  it("collapses a long station list to previous and next buttons around a position readout", () => {
    const stations = Array.from({ length: MAX_STATION_BUTTONS + 1 }, (_, id) => ({ id, label: `${20 + id} mm` }));
    const onSelect = renderStepper({ stations, activeId: 0 });

    expect(screen.queryByRole("radio")).toBeNull();
    expect(screen.getByRole("group", { name: "Zoom position" }).textContent).toContain(
      `1 / ${MAX_STATION_BUTTONS + 1}`,
    );
    expect((screen.getByRole("button", { name: "Previous zoom position" }) as HTMLButtonElement).disabled).toBe(true);
    fireEvent.click(screen.getByRole("button", { name: "Next zoom position" }));
    expect(onSelect).toHaveBeenCalledWith(1);
  });
});
