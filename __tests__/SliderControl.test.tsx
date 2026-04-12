// @vitest-environment jsdom

import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import SliderControl from "../src/components/controls/SliderControl.js";
import type { Theme } from "../src/types/theme.js";

afterEach(() => cleanup());

const mockTheme = {
  label: "#ccc",
  focusDist: "#fff",
  focusEndpoint: "#888",
  panelDivider: "#333",
  sliderTrack: "#444",
  sliderAccent: "#0af",
} as unknown as Theme;

const baseProps = {
  t: mockTheme,
  compact: false,
  useSideLayout: false,
  label: "Focus",
  labelMinWidth: 60,
  displayValue: "2.5m",
  value: 0.5,
  step: 0.01,
  minLabel: "INF",
  maxLabel: "CLOSE",
};

describe("SliderControl", () => {
  it("renders label, display value, and endpoint labels", () => {
    render(<SliderControl {...baseProps} />);
    expect(screen.getByText("Focus")).toBeTruthy();
    expect(screen.getByText("2.5m")).toBeTruthy();
    expect(screen.getByText("INF")).toBeTruthy();
    expect(screen.getByText("CLOSE")).toBeTruthy();
  });

  it("renders a range input with correct attributes", () => {
    render(<SliderControl {...baseProps} />);
    const input = screen.getByRole("slider") as HTMLInputElement;
    expect(input.type).toBe("range");
    expect(input.min).toBe("0");
    expect(input.max).toBe("1");
    expect(input.step).toBe("0.01");
    expect(input.value).toBe("0.5");
  });

  it("calls onChange when slider value changes", () => {
    const onChange = vi.fn();
    render(<SliderControl {...baseProps} onChange={onChange} />);
    const input = screen.getByRole("slider");
    fireEvent.change(input, { target: { value: "0.75" } });
    expect(onChange).toHaveBeenCalledWith(0.75);
  });

  it("calls onPointerUp when pointer is released", () => {
    const onPointerUp = vi.fn();
    render(<SliderControl {...baseProps} onPointerUp={onPointerUp} />);
    const input = screen.getByRole("slider");
    fireEvent.pointerUp(input);
    expect(onPointerUp).toHaveBeenCalledOnce();
  });

  it("renders children content", () => {
    render(
      <SliderControl {...baseProps}>
        <div>Extra content</div>
      </SliderControl>,
    );
    expect(screen.getByText("Extra content")).toBeTruthy();
  });

  it("renders collapse button when collapsible", () => {
    const onExpandedChange = vi.fn();
    render(
      <SliderControl {...baseProps} collapsible expanded={false} onExpandedChange={onExpandedChange}>
        <div>Expandable</div>
      </SliderControl>,
    );
    // CollapseButton renders a button element
    const buttons = document.querySelectorAll("button");
    expect(buttons.length).toBeGreaterThan(0);
  });

  it("applies side layout styles when useSideLayout is true", () => {
    const { container } = render(<SliderControl {...baseProps} useSideLayout={true} />);
    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.style.borderBottom).toBeTruthy();
    expect(wrapper.style.borderRight).toBeFalsy();
  });

  it("applies horizontal layout styles when useSideLayout is false", () => {
    const { container } = render(<SliderControl {...baseProps} useSideLayout={false} />);
    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.style.borderRight).toBeTruthy();
    expect(wrapper.style.borderBottom).toBeFalsy();
  });
});
