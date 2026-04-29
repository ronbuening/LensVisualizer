// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import CardinalControls from "../src/components/controls/CardinalControls.js";
import themes from "../src/utils/themes.js";

afterEach(() => cleanup());

describe("CardinalControls", () => {
  it("toggles cardinal points and dimension overlays", () => {
    const onShowCardinalsChange = vi.fn();
    const onShowCardinalDimensionsChange = vi.fn();

    render(
      <CardinalControls
        t={themes.dark}
        showCardinals={false}
        onShowCardinalsChange={onShowCardinalsChange}
        showCardinalDimensions={false}
        onShowCardinalDimensionsChange={onShowCardinalDimensionsChange}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: "CARDINALS" }));
    fireEvent.click(screen.getByRole("button", { name: "DIMENSIONS" }));

    expect(onShowCardinalsChange).toHaveBeenCalledWith(true);
    expect(onShowCardinalDimensionsChange).toHaveBeenCalledWith(true);
  });

  it("splits active master rows into fixed-width sub-buttons", () => {
    const onShowCardinalFocalChange = vi.fn();
    const onShowCardinalEflChange = vi.fn();

    render(
      <CardinalControls
        t={themes.dark}
        showCardinals={true}
        onShowCardinalFocalChange={onShowCardinalFocalChange}
        showCardinalDimensions={true}
        onShowCardinalEflChange={onShowCardinalEflChange}
      />,
    );

    const cardinals = screen.getByRole("button", { name: "CARDINALS" });
    const dimensions = screen.getByRole("button", { name: "DIMS" });

    expect(cardinals.parentElement?.style.width).toBe("190px");
    expect(dimensions.parentElement?.style.width).toBe("190px");

    fireEvent.click(screen.getByRole("button", { name: "F" }));
    fireEvent.click(screen.getByRole("button", { name: "EFL" }));

    expect(onShowCardinalFocalChange).toHaveBeenCalledWith(false);
    expect(onShowCardinalEflChange).toHaveBeenCalledWith(false);
  });

  it("uses compact labels for mobile control paging", () => {
    render(<CardinalControls t={themes.dark} compact={true} showCardinals={true} showCardinalDimensions={false} />);

    expect(screen.getByRole("button", { name: "CARD" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "DIMS" })).toBeTruthy();
  });

  it("renders the two master toggles as separate fixed-width rows", () => {
    render(<CardinalControls t={themes.dark} showCardinals={false} showCardinalDimensions={false} />);

    const cardinals = screen.getByRole("button", { name: "CARDINALS" });
    const dimensions = screen.getByRole("button", { name: "DIMENSIONS" });

    expect(cardinals.parentElement).not.toBe(dimensions.parentElement);
    expect(cardinals.parentElement?.style.width).toBe("190px");
    expect(dimensions.parentElement?.style.width).toBe("190px");
  });
});
