// @vitest-environment jsdom

/**
 * ViewToggleBar behavior tests.
 *
 * Protects the button rendering and change callback wiring used by both the
 * mobile and desktop viewer view toggles.
 */

import { createElement } from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import ViewToggleBar from "../src/components/layout/ViewToggleBar.js";
import themes from "../src/utils/themes.js";

describe("ViewToggleBar", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders every view option and calls onChange with the selected value", () => {
    const onChange = vi.fn();

    const { container } = render(
      createElement(ViewToggleBar, {
        theme: themes.dark,
        options: [
          { label: "DIAGRAM", val: "diagram" },
          { label: "BOTH", val: "both" },
          { label: "ANALYSIS", val: "analysis" },
        ],
        activeValue: "diagram",
        onChange,
      }),
    );

    fireEvent.click(screen.getByRole("button", { name: "BOTH" }));
    fireEvent.click(screen.getByRole("button", { name: "ANALYSIS" }));

    expect(onChange).toHaveBeenNthCalledWith(1, "both");
    expect(onChange).toHaveBeenNthCalledWith(2, "analysis");
    expect(container.firstElementChild?.firstElementChild?.getAttribute("style")).toContain("width: 330px");
  });

  it("uses an explicit width override when one is provided", () => {
    const { container } = render(
      createElement(ViewToggleBar, {
        theme: themes.dark,
        options: [
          { label: "DIAGRAM", val: "diagram" },
          { label: "ANALYSIS", val: "analysis" },
        ],
        activeValue: "analysis",
        onChange: vi.fn(),
        width: 220,
      }),
    );

    expect(container.firstElementChild?.firstElementChild?.getAttribute("style")).toContain("width: 220px");
  });
});
