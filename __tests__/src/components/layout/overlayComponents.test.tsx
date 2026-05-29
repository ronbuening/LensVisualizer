// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import OverlayModal from "../../../../src/components/layout/OverlayModal.js";
import PanelOverlay from "../../../../src/components/layout/PanelOverlay.js";
import PrimerToggleButton from "../../../../src/components/layout/PrimerToggleButton.js";
import themes from "../../../../src/utils/theme/themes.js";

afterEach(() => cleanup());

describe("overlay utility components", () => {
  beforeEach(() => {
    Object.defineProperty(HTMLElement.prototype, "scrollTo", {
      configurable: true,
      value: vi.fn(),
    });
  });

  it("OverlayModal closes on backdrop and close button while preserving panel clicks", () => {
    const onClose = vi.fn();
    render(
      <OverlayModal onClose={onClose} theme={themes.dark}>
        <button>Inside</button>
      </OverlayModal>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Inside" }));
    expect(onClose).not.toHaveBeenCalled();
    const closeButton = screen.getAllByRole("button").find((button) => button.textContent === "\u00d7");
    fireEvent.click(closeButton as HTMLButtonElement);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("PanelOverlay closes from backdrop and close button", () => {
    const onClose = vi.fn();
    const { container } = render(
      <PanelOverlay onClose={onClose} theme={themes.dark}>
        <button>Panel child</button>
      </PanelOverlay>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Panel child" }));
    expect(onClose).not.toHaveBeenCalled();
    fireEvent.click(container.firstElementChild as Element);
    expect(onClose).toHaveBeenCalledTimes(1);
    const closeButton = screen.getAllByRole("button").find((button) => button.textContent === "\u00d7");
    fireEvent.click(closeButton as HTMLButtonElement);
    expect(onClose).toHaveBeenCalledTimes(2);
  });

  it("PrimerToggleButton switches labels by level and calls onToggle", () => {
    const onToggle = vi.fn();
    const { rerender } = render(<PrimerToggleButton level="simple" onToggle={onToggle} theme={themes.dark} />);
    fireEvent.click(screen.getByRole("button", { name: /Intermediate Primer/ }));
    expect(onToggle).toHaveBeenCalledTimes(1);

    rerender(<PrimerToggleButton level="intermediate" onToggle={onToggle} theme={themes.dark} />);
    expect(screen.getByRole("button", { name: /Back to Simple Primer/ })).toBeTruthy();
  });
});
