import { describe, expect, it } from "vitest";
import {
  EXACT_SURFACE_TRACE_LENS_KEYS,
  SURFACE_TRACE_ROLLOUT_MODE,
  resolveSurfaceTraceMode,
  type SurfaceTraceRolloutMode,
} from "../src/optics/traceMode.js";
import type { RuntimeLens } from "../src/types/optics.js";
import { LENS_CATALOG } from "../src/utils/lensCatalog.js";

function lensWithKey(key: string): RuntimeLens {
  return { data: { key } } as unknown as RuntimeLens;
}

describe("surface trace rollout mode", () => {
  it("exports a valid rollout mode and exact-trace allowlist", () => {
    expect(["legacy", "exact", "per-lens"]).toContain(SURFACE_TRACE_ROLLOUT_MODE);

    const uniqueKeys = new Set(EXACT_SURFACE_TRACE_LENS_KEYS);
    expect(uniqueKeys.size).toBe(EXACT_SURFACE_TRACE_LENS_KEYS.length);

    for (const key of EXACT_SURFACE_TRACE_LENS_KEYS) {
      expect(typeof key).toBe("string");
      expect(key.trim()).toBe(key);
      expect(key.length).toBeGreaterThan(0);
      expect(key in LENS_CATALOG, `${key} must be a catalog lens key`).toBe(true);
    }
  });

  it("forces legacy tracing for every lens when rollout mode is legacy", () => {
    const mode: SurfaceTraceRolloutMode = "legacy";

    expect(resolveSurfaceTraceMode(lensWithKey("exact-enabled"), undefined, { rolloutMode: mode })).toBe("legacy");
  });

  it("forces exact tracing for every lens when rollout mode is exact", () => {
    const mode: SurfaceTraceRolloutMode = "exact";

    expect(resolveSurfaceTraceMode(lensWithKey("legacy-default"), undefined, { rolloutMode: mode })).toBe("exact");
  });

  it("enables exact tracing only for allowlisted lens keys in per-lens mode", () => {
    const exactLensKeys = ["exact-enabled", "also-exact-enabled"];

    expect(
      resolveSurfaceTraceMode(lensWithKey("exact-enabled"), undefined, {
        rolloutMode: "per-lens",
        exactLensKeys,
      }),
    ).toBe("exact");
    expect(
      resolveSurfaceTraceMode(lensWithKey("also-exact-enabled"), undefined, {
        rolloutMode: "per-lens",
        exactLensKeys,
      }),
    ).toBe("exact");
    expect(
      resolveSurfaceTraceMode(lensWithKey("legacy-default"), undefined, {
        rolloutMode: "per-lens",
        exactLensKeys,
      }),
    ).toBe("legacy");
  });

  it("falls back to legacy tracing when a lens key is missing", () => {
    const L = { data: {} } as unknown as RuntimeLens;

    expect(
      resolveSurfaceTraceMode(L, undefined, {
        rolloutMode: "per-lens",
        exactLensKeys: ["exact-enabled"],
      }),
    ).toBe("legacy");
    expect(
      resolveSurfaceTraceMode(null, undefined, { rolloutMode: "per-lens", exactLensKeys: ["exact-enabled"] }),
    ).toBe("legacy");
  });

  it("lets explicit comparison requests override the rollout mode", () => {
    expect(resolveSurfaceTraceMode(lensWithKey("any"), "exact", { rolloutMode: "legacy" })).toBe("exact");
    expect(resolveSurfaceTraceMode(lensWithKey("any"), "legacy", { rolloutMode: "exact" })).toBe("legacy");
  });
});
