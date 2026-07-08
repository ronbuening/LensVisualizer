// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import OverlayModal from "../../../../src/components/layout/OverlayModal.js";
import PanelOverlay from "../../../../src/components/layout/PanelOverlay.js";
import PrimerToggleButton from "../../../../src/components/layout/PrimerToggleButton.js";
import themes from "../../../../src/utils/theme/themes.js";
import { installMatchMediaMock } from "../../../testUtils.js";

afterEach(() => cleanup());

describe("overlay utility components", () => {
  beforeEach(() => {
    installMatchMediaMock();
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

  it("OverlayModal renders dialog semantics with the provided label", () => {
    render(
      <OverlayModal onClose={vi.fn()} theme={themes.dark} ariaLabel="Optics primer">
        <p>Body</p>
      </OverlayModal>,
    );

    const dialog = screen.getByRole("dialog", { name: "Optics primer" });
    expect(dialog.getAttribute("aria-modal")).toBe("true");
  });

  it("OverlayModal closes on Escape", () => {
    const onClose = vi.fn();
    render(
      <OverlayModal onClose={onClose} theme={themes.dark}>
        <p>Body</p>
      </OverlayModal>,
    );

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("OverlayModal focuses its first focusable element and restores focus on unmount", () => {
    const outside = document.createElement("button");
    outside.textContent = "outside";
    document.body.appendChild(outside);
    outside.focus();

    const { unmount } = render(
      <OverlayModal onClose={vi.fn()} theme={themes.dark}>
        <p>Body</p>
      </OverlayModal>,
    );

    const closeButton = screen.getByRole("button", { name: "Close" });
    expect(document.activeElement).toBe(closeButton);

    unmount();
    expect(document.activeElement).toBe(outside);
    outside.remove();
  });

  it("OverlayModal traps Tab focus inside the dialog", () => {
    render(
      <OverlayModal onClose={vi.fn()} theme={themes.dark}>
        <button>Inside</button>
      </OverlayModal>,
    );

    const closeButton = screen.getByRole("button", { name: "Close" });
    const inside = screen.getByRole("button", { name: "Inside" });

    /* Tab wraps forward from the last focusable back to the first */
    inside.focus();
    fireEvent.keyDown(document, { key: "Tab" });
    expect(document.activeElement).toBe(closeButton);

    /* Shift+Tab wraps backward from the first focusable to the last */
    fireEvent.keyDown(document, { key: "Tab", shiftKey: true });
    expect(document.activeElement).toBe(inside);
  });

  it("PanelOverlay renders dialog semantics and closes on Escape", () => {
    const onClose = vi.fn();
    render(
      <PanelOverlay onClose={onClose} theme={themes.dark} ariaLabel="Petzval field curvature detail">
        <p>Body</p>
      </PanelOverlay>,
    );

    const dialog = screen.getByRole("dialog", { name: "Petzval field curvature detail" });
    expect(dialog.getAttribute("aria-modal")).toBe("true");
    expect(document.activeElement).toBe(screen.getByRole("button", { name: "Close" }));

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onClose).toHaveBeenCalledTimes(1);
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
