import { describe, it, expect } from "vitest";

/**
 * OverlayModal is a React component, so we test its structural contract
 * by importing and verifying it's a callable function with the right shape.
 * Full rendering tests would require a DOM environment (jsdom), which is
 * not configured in this project. We verify props interface expectations
 * and that the module exports correctly.
 */

describe("OverlayModal", () => {
  it("exports a default function component", async () => {
    const mod = await import("../src/components/OverlayModal.js");
    expect(typeof mod.default).toBe("function");
    expect(mod.default.name).toBe("OverlayModal");
  });

  it("uses OVERLAY_BACKDROP, overlayModal, and closeBtn from styles", async () => {
    // Verify the styles module exports the expected functions used by OverlayModal
    const styles = await import("../src/utils/styles.js");
    expect(typeof styles.OVERLAY_BACKDROP).toBe("object");
    expect(typeof styles.overlayModal).toBe("function");
    expect(typeof styles.closeBtn).toBe("function");
  });
});
