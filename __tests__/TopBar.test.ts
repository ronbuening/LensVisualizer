import { describe, it, expect } from "vitest";

/**
 * TopBar is a React component for lens selectors, compare button, and about
 * buttons. We verify its module contract, style dependencies, and the action
 * constants it dispatches.
 */

describe("TopBar", () => {
  it("exports a default function component", async () => {
    const mod = await import("../src/components/layout/TopBar.js");
    expect(typeof mod.default).toBe("function");
    expect(mod.default.name).toBe("TopBar");
  });

  it("imports style factories from styles module", async () => {
    const styles = await import("../src/utils/styles.js");
    expect(typeof styles.headerStrip).toBe("function");
    expect(typeof styles.selector).toBe("function");
    expect(typeof styles.topBarBtn).toBe("function");
  });

  it("action constants dispatched by TopBar have correct string values", async () => {
    const reducer = await import("../src/utils/lensReducer.js");
    // TopBar dispatches these 5 actions — verify exact string values
    expect(reducer.SET_LENS_A).toBe("SET_LENS_A");
    expect(reducer.SET_LENS_B).toBe("SET_LENS_B");
    expect(reducer.ENTER_COMPARE).toBe("ENTER_COMPARE");
    expect(reducer.EXIT_COMPARE).toBe("EXIT_COMPARE");
    expect(reducer.SET_OVERLAY).toBe("SET_OVERLAY");
  });
});
