// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import HelpTooltipButton from "../../../../src/components/controls/HelpTooltipButton.js";
import themes from "../../../../src/utils/theme/themes.js";

afterEach(() => cleanup());

describe("HelpTooltipButton", () => {
  it("opens on hover, renders tooltip content in a portal, and closes on mouse leave", () => {
    render(<HelpTooltipButton theme={themes.dark} label="Explain metric" text="Detailed metric explanation." />);

    const button = screen.getByRole("button", { name: "Explain metric" });
    expect(button.getAttribute("aria-expanded")).toBe("false");

    fireEvent.mouseEnter(button);
    expect(screen.getByRole("tooltip").textContent).toBe("Detailed metric explanation.");
    expect(screen.getByRole("tooltip").parentElement).toBe(document.body);
    expect(button.getAttribute("aria-expanded")).toBe("true");

    fireEvent.mouseLeave(button);
    expect(screen.queryByRole("tooltip")).toBeNull();
  });

  it("toggles on click and closes on outside pointer, Escape, resize, and scroll", () => {
    render(
      <>
        <HelpTooltipButton theme={themes.dark} label="Help" text="Help text." />
        <button type="button">Outside</button>
      </>,
    );

    const button = screen.getByRole("button", { name: "Help" });
    fireEvent.click(button);
    expect(screen.getByRole("tooltip")).toBeTruthy();

    fireEvent.mouseDown(screen.getByRole("button", { name: "Outside" }));
    expect(screen.queryByRole("tooltip")).toBeNull();

    fireEvent.click(button);
    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("tooltip")).toBeNull();

    fireEvent.click(button);
    fireEvent.resize(window);
    expect(screen.queryByRole("tooltip")).toBeNull();

    fireEvent.click(button);
    fireEvent.scroll(window);
    expect(screen.queryByRole("tooltip")).toBeNull();
  });
});
