// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import usePreferences from "../src/utils/usePreferences.js";
import { createInitialState } from "../src/utils/lensReducer.js";
import { PREFS_KEY } from "../src/utils/preferences.js";
import type { LensState } from "../src/types/state.js";

const CATALOG_KEYS = ["nikon_58", "canon_50", "zeiss_35"];

function makeState(overrides: Partial<LensState> = {}): LensState {
  return { ...createInitialState({}, {}, true, CATALOG_KEYS), ...overrides };
}

/* ── Environment setup ── */

beforeEach(() => {
  localStorage.clear();
  vi.clearAllMocks();

  // createInitialState reads window.matchMedia for dark/contrast defaults when prefs are absent
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi
      .fn()
      .mockImplementation(() => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() })),
  });
});

/* ── Basic write-on-mount ── */

describe("usePreferences — initial write", () => {
  it("writes to localStorage on mount", () => {
    const state = makeState();
    renderHook(() => usePreferences(state));
    expect(localStorage.getItem(PREFS_KEY)).not.toBeNull();
  });

  it("persisted JSON is valid and has version field", () => {
    const state = makeState();
    renderHook(() => usePreferences(state));
    const raw = localStorage.getItem(PREFS_KEY)!;
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    expect(parsed.v).toBe(2);
  });
});

/* ── Field inclusion ── */

describe("usePreferences — persisted fields", () => {
  it("persists dark and highContrast display flags", () => {
    const state = makeState();
    renderHook(() => usePreferences(state));
    const parsed = JSON.parse(localStorage.getItem(PREFS_KEY)!) as Record<string, unknown>;
    // dark is boolean | null (null = auto mode)
    expect(parsed.dark === null || typeof parsed.dark === "boolean").toBe(true);
    expect(typeof parsed.highContrast).toBe("boolean");
  });

  it("does not persist lens selection keys", () => {
    const state = makeState();
    renderHook(() => usePreferences(state));
    const parsed = JSON.parse(localStorage.getItem(PREFS_KEY)!) as Record<string, unknown>;
    expect(parsed.lensKeyA).toBeUndefined();
    expect(parsed.lensKeyB).toBeUndefined();
    expect(parsed.comparing).toBeUndefined();
  });

  it("persists ray toggle flags", () => {
    const state = makeState();
    renderHook(() => usePreferences(state));
    const parsed = JSON.parse(localStorage.getItem(PREFS_KEY)!) as Record<string, unknown>;
    expect(typeof parsed.showOnAxis).toBe("boolean");
    expect(typeof parsed.showOffAxis).toBe("string");
    expect(typeof parsed.rayTracksF).toBe("boolean");
    expect(typeof parsed.showChromatic).toBe("boolean");
    expect(typeof parsed.chromR).toBe("boolean");
    expect(typeof parsed.chromG).toBe("boolean");
    expect(typeof parsed.chromB).toBe("boolean");
  });

  it("persists panel expand states", () => {
    const state = makeState();
    renderHook(() => usePreferences(state));
    const parsed = JSON.parse(localStorage.getItem(PREFS_KEY)!) as Record<string, unknown>;
    expect(typeof parsed.focusExpanded).toBe("boolean");
    expect(typeof parsed.apertureExpanded).toBe("boolean");
    expect(typeof parsed.headerControlsExpanded).toBe("boolean");
    expect(typeof parsed.legendExpanded).toBe("boolean");
    expect(typeof parsed.headerInfoExpanded).toBe("boolean");
    expect(typeof parsed.abbeShowGlassType).toBe("boolean");
  });

  it("does NOT persist slider positions", () => {
    const state = makeState();
    renderHook(() => usePreferences(state));
    const parsed = JSON.parse(localStorage.getItem(PREFS_KEY)!) as Record<string, unknown>;
    expect(parsed.focusT).toBeUndefined();
    expect(parsed.zoomT).toBeUndefined();
    expect(parsed.stopdownT).toBeUndefined();
    expect(parsed.sharedFocusT).toBeUndefined();
    expect(parsed.sharedStopdownT).toBeUndefined();
    expect(parsed.sharedZoomT).toBeUndefined();
  });

  it("does NOT persist overlay visibility", () => {
    const state = makeState();
    renderHook(() => usePreferences(state));
    const parsed = JSON.parse(localStorage.getItem(PREFS_KEY)!) as Record<string, unknown>;
    expect(parsed.showAbout).toBeUndefined();
    expect(parsed.showAboutSite).toBeUndefined();
    expect(parsed.showOpticsPrimer).toBeUndefined();
  });
});

/* ── Change detection ── */

describe("usePreferences — change detection", () => {
  it("writes again when relevant state changes", () => {
    const spy = vi.spyOn(Storage.prototype, "setItem");
    const state1 = makeState();
    const { rerender } = renderHook(({ s }: { s: LensState }) => usePreferences(s), {
      initialProps: { s: state1 },
    });

    const callsAfterMount = spy.mock.calls.length;

    // Change a persisted field (display.dark) in the lens slice
    const state2: LensState = {
      ...state1,
      display: { ...state1.display, dark: !state1.display.dark },
    };
    act(() => {
      rerender({ s: state2 });
    });

    expect(spy.mock.calls.length).toBeGreaterThan(callsAfterMount);
  });

  it("does NOT re-write when only sliders change", () => {
    const spy = vi.spyOn(Storage.prototype, "setItem");
    const state1 = makeState();
    const { rerender } = renderHook(({ s }: { s: LensState }) => usePreferences(s), {
      initialProps: { s: state1 },
    });

    const callsAfterMount = spy.mock.calls.length;

    // Change only slider positions (not persisted)
    const state2: LensState = {
      ...state1,
      sliders: { focusT: 0.5, zoomT: 0.3, stopdownT: 0.2 },
    };
    act(() => {
      rerender({ s: state2 });
    });

    // setItem count should not increase — slider changes don't trigger the effect
    expect(spy.mock.calls.length).toBe(callsAfterMount);
  });

  it("does NOT re-write when state is structurally identical", () => {
    const spy = vi.spyOn(Storage.prototype, "setItem");
    const state = makeState();
    const { rerender } = renderHook(({ s }: { s: LensState }) => usePreferences(s), {
      initialProps: { s: state },
    });

    const callsAfterMount = spy.mock.calls.length;

    // Rerender with the exact same object
    act(() => {
      rerender({ s: state });
    });

    expect(spy.mock.calls.length).toBe(callsAfterMount);
  });
});

/* ── localStorage error handling ── */

describe("usePreferences — error handling", () => {
  it("does not throw when localStorage.setItem throws (e.g. quota exceeded)", () => {
    vi.spyOn(Storage.prototype, "setItem").mockImplementationOnce(() => {
      throw new DOMException("QuotaExceededError");
    });

    const state = makeState();
    // Should not throw
    expect(() => renderHook(() => usePreferences(state))).not.toThrow();
  });
});

/* ── Value accuracy ── */

describe("usePreferences — value accuracy", () => {
  it("persists showOffAxis string value", () => {
    const state: LensState = {
      ...makeState(),
      rays: { ...makeState().rays, showOffAxis: "trueAngle" },
    };
    renderHook(() => usePreferences(state));
    const parsed = JSON.parse(localStorage.getItem(PREFS_KEY)!) as Record<string, unknown>;
    expect(parsed.showOffAxis).toBe("trueAngle");
  });

  it("persists scaleMode correctly", () => {
    const state: LensState = {
      ...makeState(),
      lens: { ...makeState().lens, scaleMode: "normalized" },
    };
    renderHook(() => usePreferences(state));
    const parsed = JSON.parse(localStorage.getItem(PREFS_KEY)!) as Record<string, unknown>;
    expect(parsed.scaleMode).toBe("normalized");
  });
});
