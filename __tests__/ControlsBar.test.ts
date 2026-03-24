import { describe, it, expect } from "vitest";

/**
 * ControlsBar is a React component that unifies the shared controls bar
 * (comparison mode) and mobile controls strip. We verify its module contract
 * and the style/action dependencies it uses.
 */

describe("ControlsBar", () => {
  it("exports a default function component", async () => {
    const mod = await import("../src/components/layout/ControlsBar.js");
    expect(typeof mod.default).toBe("function");
    expect(mod.default.name).toBe("ControlsBar");
  });

  it("imports toggle style factories from styles module", async () => {
    const styles = await import("../src/utils/styles.js");
    expect(typeof styles.toggleGroup).toBe("function");
    expect(typeof styles.toggleBtn).toBe("function");
    expect(typeof styles.chromChannelBtn).toBe("function");
    expect(typeof styles.headerStrip).toBe("function");
  });

  it("imports required action constants from lensReducer", async () => {
    const reducer = await import("../src/utils/lensReducer.js");
    expect(reducer.SET_HIGH_CONTRAST).toBe("SET_HIGH_CONTRAST");
    expect(reducer.SET_DARK).toBe("SET_DARK");
    expect(reducer.SET_RAY_TOGGLE).toBe("SET_RAY_TOGGLE");
    expect(reducer.SET_SCALE_MODE).toBe("SET_SCALE_MODE");
  });
});
