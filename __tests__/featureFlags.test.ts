import { describe, it, expect } from "vitest";
import * as flags from "../src/utils/featureFlags.js";

describe("featureFlags", () => {
  it("exports only boolean values", () => {
    for (const [key, value] of Object.entries(flags)) {
      expect(typeof value, `${key} should be boolean`).toBe("boolean");
    }
  });

  it("ENABLE_COLOR_TRACING is boolean", () => {
    expect(typeof flags.ENABLE_COLOR_TRACING).toBe("boolean");
  });

  it("DEFAULT_COLOR_TRACING is boolean", () => {
    expect(typeof flags.DEFAULT_COLOR_TRACING).toBe("boolean");
  });

  it("exports the expected set of flags", () => {
    const keys = Object.keys(flags);
    expect(keys).toContain("ENABLE_COLOR_TRACING");
    expect(keys).toContain("DEFAULT_COLOR_TRACING");
    expect(keys).toContain("ENABLE_ANALYSIS_VIEW");
    expect(keys).toContain("ENABLE_COMPARISON");
    expect(keys).toContain("ENABLE_SLIDER_STICKY");
    expect(keys).toContain("ENABLE_DYNAMIC_DIAGRAM_HEIGHT");
    expect(keys).toContain("ENABLE_SIDE_PANEL_LAYOUT");
    expect(keys).toContain("ENABLE_LCA_OVERLAY");
    expect(keys).toContain("ENABLE_PETZVAL_OVERLAY");
  });

  it("all keys follow ENABLE_ or DEFAULT_ naming convention", () => {
    for (const key of Object.keys(flags)) {
      expect(key).toMatch(/^(ENABLE_|DEFAULT_)/);
    }
  });
});
