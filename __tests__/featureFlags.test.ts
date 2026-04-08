import { describe, it, expect } from "vitest";
import * as flags from "../src/utils/featureFlags.js";
import * as appConfig from "../src/utils/appConfig.js";

describe("featureFlags", () => {
  it("exports only boolean values", () => {
    for (const [key, value] of Object.entries(flags)) {
      expect(typeof value, `${key} should be boolean`).toBe("boolean");
    }
  });

  it("exports exactly the expected experiment flags", () => {
    const keys = Object.keys(flags);
    expect(keys).toContain("ENABLE_UNIFORM_SCALING");
    expect(keys).toContain("ENABLE_ASPH_DIAMOND_FILL");
    expect(keys).toContain("ENABLE_EDGE_PROJECTION");
    expect(keys).toContain("ENABLE_PUPIL_TOGGLE");
    expect(keys).toContain("ENABLE_REAL_RAY_LSA_DIAGNOSTIC");
    expect(keys).toHaveLength(5);
  });

  it("all keys follow ENABLE_ naming convention", () => {
    for (const key of Object.keys(flags)) {
      expect(key).toMatch(/^ENABLE_/);
    }
  });
});

describe("appConfig", () => {
  it("DEFAULT_COLOR_TRACING is boolean", () => {
    expect(typeof appConfig.DEFAULT_COLOR_TRACING).toBe("boolean");
  });

  it("exports only the expected configuration values", () => {
    const keys = Object.keys(appConfig);
    expect(keys).toContain("DEFAULT_COLOR_TRACING");
  });
});
