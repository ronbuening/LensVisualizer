import { describe, it, expect } from "vitest";
import { OVERLAY_BACKDROP, OVERLAY_MODAL_BASE, overlayModal, closeBtn } from "../src/utils/styles.js";

/**
 * OverlayModal is a React component, so we test its structural contract
 * by importing and verifying it's a callable function with the right shape.
 * Full rendering tests would require a DOM environment (jsdom), which is
 * not configured in this project. We verify the style constants and
 * factories OverlayModal depends on produce correct shapes.
 */

const mockTheme = {
  descBg: "#1a1a1a",
  descBorder: "#444",
  muted: "#888",
};

describe("OverlayModal", () => {
  it("exports a default function component", async () => {
    const mod = await import("../src/components/OverlayModal.js");
    expect(typeof mod.default).toBe("function");
    expect(mod.default.name).toBe("OverlayModal");
  });

  it("OVERLAY_BACKDROP has expected z-index and position for modal layering", () => {
    expect(OVERLAY_BACKDROP.zIndex).toBe(9999);
    expect(OVERLAY_BACKDROP.position).toBe("fixed");
  });

  it("overlayModal(theme) returns a style object extending OVERLAY_MODAL_BASE", () => {
    const style = overlayModal(mockTheme);
    expect(typeof style).toBe("object");
    // Must preserve the structural constants from OVERLAY_MODAL_BASE
    expect(style.borderRadius).toBe(OVERLAY_MODAL_BASE.borderRadius);
    expect(style.maxWidth).toBe(OVERLAY_MODAL_BASE.maxWidth);
    // Must inject theme-derived colors
    expect(style.background).toBe(mockTheme.descBg);
  });

  it("closeBtn(theme) returns a sticky-positioned button style", () => {
    const style = closeBtn(mockTheme);
    expect(style.position).toBe("sticky");
    expect(style.cursor).toBe("pointer");
    expect(style.color).toBe(mockTheme.muted);
  });
});
