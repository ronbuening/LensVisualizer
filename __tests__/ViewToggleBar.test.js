import { describe, it, expect } from "vitest";

/**
 * ViewToggleBar is a generic view-mode toggle component used for both
 * mobile and desktop view switching. We verify its module contract.
 */

describe("ViewToggleBar", () => {
  it("exports a default function component", async () => {
    const mod = await import("../src/components/ViewToggleBar.js");
    expect(typeof mod.default).toBe("function");
    expect(mod.default.name).toBe("ViewToggleBar");
  });

  it("imports style factories from styles module", async () => {
    const styles = await import("../src/utils/styles.js");
    expect(typeof styles.headerStrip).toBe("function");
    expect(typeof styles.toggleGroup).toBe("function");
    expect(typeof styles.toggleBtn).toBe("function");
  });
});
