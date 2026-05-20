import { describe, expect, it } from "vitest";
import { resolveSurfaceTraceMode } from "../../../src/optics/traceMode.js";
import type { RuntimeLens } from "../../../src/types/optics.js";

function lensWithKey(key: string): RuntimeLens {
  return { data: { key } } as unknown as RuntimeLens;
}

describe("resolveSurfaceTraceMode", () => {
  it("defaults to exact when no mode is requested", () => {
    expect(resolveSurfaceTraceMode(lensWithKey("any"))).toBe("exact");
    expect(resolveSurfaceTraceMode(null)).toBe("exact");
    expect(resolveSurfaceTraceMode(undefined)).toBe("exact");
  });

  it("honors an explicitly requested mode", () => {
    expect(resolveSurfaceTraceMode(lensWithKey("any"), "legacy")).toBe("legacy");
    expect(resolveSurfaceTraceMode(lensWithKey("any"), "exact")).toBe("exact");
  });
});
