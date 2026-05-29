// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import AboutFooter from "../../../../src/components/display/AboutFooter.js";
import themes from "../../../../src/utils/theme/themes.js";

afterEach(() => cleanup());

describe("AboutFooter", () => {
  it("does not render on wide layouts", () => {
    const { container } = render(
      <AboutFooter
        theme={themes.dark}
        isWide={true}
        onOpenOpticsPrimer={vi.fn()}
        onOpenAberrationsPrimer={vi.fn()}
        onOpenAboutSite={vi.fn()}
        onOpenAboutAuthor={vi.fn()}
      />,
    );

    expect(container.textContent).toBe("");
  });

  it("renders mobile about actions", () => {
    const onOpenOpticsPrimer = vi.fn();
    const onOpenAberrationsPrimer = vi.fn();
    const onOpenAboutSite = vi.fn();
    const onOpenAboutAuthor = vi.fn();

    render(
      <AboutFooter
        theme={themes.dark}
        isWide={false}
        onOpenOpticsPrimer={onOpenOpticsPrimer}
        onOpenAberrationsPrimer={onOpenAberrationsPrimer}
        onOpenAboutSite={onOpenAboutSite}
        onOpenAboutAuthor={onOpenAboutAuthor}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: /Optics/i }));
    fireEvent.click(screen.getByRole("button", { name: /Aberrations/i }));
    fireEvent.click(screen.getByRole("button", { name: /Site/i }));
    fireEvent.click(screen.getByRole("button", { name: /Author/i }));

    expect(onOpenOpticsPrimer).toHaveBeenCalledTimes(1);
    expect(onOpenAberrationsPrimer).toHaveBeenCalledTimes(1);
    expect(onOpenAboutSite).toHaveBeenCalledTimes(1);
    expect(onOpenAboutAuthor).toHaveBeenCalledTimes(1);
  });
});
