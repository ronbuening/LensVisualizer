// @vitest-environment jsdom

import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import SharedFStopQuickSelect from "../src/comparison/SharedFStopQuickSelect.js";

afterEach(() => cleanup());

describe("SharedFStopQuickSelect", () => {
  const baseProps = {
    fstopSeriesA: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
    fstopSeriesB: [1.8, 2.8, 4, 5.6, 8, 11, 16],
    widerFopen: 1.4,
    sharedMaxFstop: 16,
    currentFNumber: 2.8,
    onSelect: vi.fn(),
  };

  it("renders a merged and sorted list of unique f-stops", () => {
    render(<SharedFStopQuickSelect {...baseProps} />);
    // Should have all unique values from both series within range
    expect(screen.getByText("f/1.4")).toBeTruthy();
    expect(screen.getByText("f/1.8")).toBeTruthy();
    expect(screen.getByText("f/2")).toBeTruthy();
    expect(screen.getByText("f/2.8")).toBeTruthy();
    expect(screen.getByText("f/16")).toBeTruthy();
  });

  it("filters out f-stops below widerFopen", () => {
    render(<SharedFStopQuickSelect {...baseProps} widerFopen={2.8} />);
    expect(screen.queryByText("f/1.4")).toBeNull();
    expect(screen.queryByText("f/1.8")).toBeNull();
    expect(screen.queryByText("f/2")).toBeNull();
    expect(screen.getByText("f/2.8")).toBeTruthy();
  });

  it("filters out f-stops above sharedMaxFstop", () => {
    render(<SharedFStopQuickSelect {...baseProps} sharedMaxFstop={8} />);
    expect(screen.queryByText("f/11")).toBeNull();
    expect(screen.queryByText("f/16")).toBeNull();
    expect(screen.getByText("f/8")).toBeTruthy();
  });

  it("calls onSelect with the f-stop value when clicked", () => {
    const onSelect = vi.fn();
    render(<SharedFStopQuickSelect {...baseProps} onSelect={onSelect} />);
    fireEvent.click(screen.getByText("f/4"));
    expect(onSelect).toHaveBeenCalledWith(4);
  });

  it("highlights the current f-number with full opacity", () => {
    render(<SharedFStopQuickSelect {...baseProps} currentFNumber={4} />);
    const active = screen.getByText("f/4");
    expect(active.style.opacity).toBe("1");
  });

  it("dims non-current f-stops", () => {
    render(<SharedFStopQuickSelect {...baseProps} currentFNumber={4} />);
    const dim = screen.getByText("f/8");
    expect(dim.style.opacity).toBe("0.55");
  });
});
