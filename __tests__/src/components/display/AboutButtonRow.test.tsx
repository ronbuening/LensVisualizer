// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import AboutButtonRow from "../../../../src/components/display/AboutButtonRow.js";
import themes from "../../../../src/utils/theme/themes.js";

afterEach(() => cleanup());

const makeProps = () => ({
  theme: themes.dark,
  isWide: true,
  onOpenOpticsPrimer: vi.fn(),
  onOpenAberrationsPrimer: vi.fn(),
  onOpenAboutSite: vi.fn(),
  onOpenAboutAuthor: vi.fn(),
});

describe("AboutButtonRow", () => {
  it("renders the four about actions and dispatches their callbacks", () => {
    const props = makeProps();
    render(<AboutButtonRow {...props} />);

    fireEvent.click(screen.getByRole("button", { name: "Optics" }));
    fireEvent.click(screen.getByRole("button", { name: "Aberrations" }));
    fireEvent.click(screen.getByRole("button", { name: "Site" }));
    fireEvent.click(screen.getByRole("button", { name: "Author" }));

    expect(props.onOpenOpticsPrimer).toHaveBeenCalledTimes(1);
    expect(props.onOpenAberrationsPrimer).toHaveBeenCalledTimes(1);
    expect(props.onOpenAboutSite).toHaveBeenCalledTimes(1);
    expect(props.onOpenAboutAuthor).toHaveBeenCalledTimes(1);
  });

  it("shows the ABOUT label only when requested", () => {
    const props = makeProps();
    const { rerender } = render(<AboutButtonRow {...props} />);
    expect(screen.queryByText("ABOUT")).toBeNull();

    rerender(<AboutButtonRow {...props} showLabel />);
    expect(screen.getByText("ABOUT")).toBeTruthy();
  });
});
