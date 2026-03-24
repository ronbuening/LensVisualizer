import { describe, it, expect } from "vitest";

/**
 * TopBar is a React component for lens selectors, compare button, and about
 * buttons. We verify its module contract and style dependencies.
 */

describe("TopBar", () => {
  it("exports a default function component", async () => {
    const mod = await import("../src/components/TopBar.js");
    expect(typeof mod.default).toBe("function");
    expect(mod.default.name).toBe("TopBar");
  });

  it("imports style factories from styles module", async () => {
    const styles = await import("../src/utils/styles.js");
    expect(typeof styles.headerStrip).toBe("function");
    expect(typeof styles.selector).toBe("function");
    expect(typeof styles.topBarBtn).toBe("function");
  });
});
