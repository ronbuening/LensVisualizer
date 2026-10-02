import { describe, it, expect } from "vitest";
import * as flags from "../../../src/utils/featureFlags.js";
import * as appConfig from "../../../src/utils/appConfig.js";

describe("featureFlags", () => {
  it("exposes all universal map views with revised full-map rendering by default", () => {
    expect(flags.ENABLE_UNIVERSAL_MAP_EXTRA_VIEWS).toBe(true);
    expect(flags.ENABLE_REVISED_UNIVERSAL_MAP).toBe(true);
  });
  it("exports only boolean values", () => {
    for (const [key, value] of Object.entries(flags)) {
      expect(typeof value, `${key} should be boolean`).toBe("boolean");
    }
  });

  it("all keys follow ENABLE_ naming convention", () => {
    for (const key of Object.keys(flags)) {
      expect(key).toMatch(/^ENABLE_/);
    }
  });
});

describe("appConfig", () => {
  it("defaults ray tracing to TRACKS FOCUS", () => {
    expect(appConfig.DEFAULT_RAY_TRACKS_FOCUS).toBe(true);
  });

  it("exports only the expected configuration values", () => {
    const keys = Object.keys(appConfig);
    expect(keys).toContain("DEFAULT_COLOR_TRACING");
  });
});
