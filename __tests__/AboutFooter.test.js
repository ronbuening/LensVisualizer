import { describe, it, expect } from "vitest";

/**
 * AboutFooter renders the about button row at the bottom of the page on mobile.
 * We verify its module contract and style dependencies.
 */

describe("AboutFooter", () => {
  it("exports a default function component", async () => {
    const mod = await import("../src/components/AboutFooter.js");
    expect(typeof mod.default).toBe("function");
    expect(mod.default.name).toBe("AboutFooter");
  });

  it("imports style factories from styles module", async () => {
    const styles = await import("../src/utils/styles.js");
    expect(typeof styles.headerStrip).toBe("function");
    expect(typeof styles.topBarBtn).toBe("function");
  });
});
