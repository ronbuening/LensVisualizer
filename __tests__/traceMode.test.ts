import { describe, expect, it } from "vitest";
import {
  EXACT_SURFACE_TRACE_LENS_KEYS,
  SURFACE_TRACE_ROLLOUT_MODE,
  resolveSurfaceTraceMode,
  type SurfaceTraceRolloutMode,
} from "../src/optics/traceMode.js";
import type { RuntimeLens } from "../src/types/optics.js";

function lensWithKey(key: string): RuntimeLens {
  return { data: { key } } as unknown as RuntimeLens;
}

describe("surface trace rollout mode", () => {
  it("defaults to per-lens rollout with an empty exact-trace allowlist", () => {
    expect(SURFACE_TRACE_ROLLOUT_MODE).toBe("per-lens");
    expect(EXACT_SURFACE_TRACE_LENS_KEYS).toEqual([]);
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
    const exactLensKeys = ["exact-enabled"];

    expect(
      resolveSurfaceTraceMode(lensWithKey("exact-enabled"), undefined, {
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
