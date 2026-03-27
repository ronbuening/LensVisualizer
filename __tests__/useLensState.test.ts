// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useLensState from "../src/utils/useLensState.js";
import { PREFS_KEY } from "../src/utils/preferences.js";
import { CATALOG_KEYS } from "../src/utils/lensCatalog.js";
import { clearBrowserState, installMatchMediaMock } from "./testUtils.js";

/* ── Mock window.matchMedia (not implemented in jsdom) ── */

beforeEach(() => {
  clearBrowserState();
  installMatchMediaMock(true);
});

/* ── Default state initialization ── */

describe("useLensState — defaults", () => {
  it("returns [state, dispatch, isWide] tuple", () => {
    const { result } = renderHook(() => useLensState(CATALOG_KEYS));
    const [state, dispatch, isWide] = result.current;
    expect(typeof state).toBe("object");
    expect(typeof dispatch).toBe("function");
    expect(typeof isWide).toBe("boolean");
  });

  it("defaults lensKeyA to first catalog key when no URL or prefs", () => {
    const { result } = renderHook(() => useLensState(CATALOG_KEYS));
    expect(result.current[0].lens.lensKeyA).toBe(CATALOG_KEYS[0]);
  });

  it("defaults lensKeyB to second catalog key when no URL or prefs", () => {
    const { result } = renderHook(() => useLensState(CATALOG_KEYS));
    expect(result.current[0].lens.lensKeyB).toBe(CATALOG_KEYS[1]);
  });

  it("defaults comparing to false", () => {
    const { result } = renderHook(() => useLensState(CATALOG_KEYS));
    expect(result.current[0].lens.comparing).toBe(false);
  });

  it("defaults sliders to zero", () => {
    const { result } = renderHook(() => useLensState(CATALOG_KEYS));
    const { focusT, zoomT, stopdownT } = result.current[0].sliders;
    expect(focusT).toBe(0);
    expect(zoomT).toBe(0);
    expect(stopdownT).toBe(0);
  });
});

/* ── URL param initialization ── */

describe("useLensState — URL params override defaults", () => {
  it("uses ?lens= to set lensKeyA when key is valid", () => {
    window.history.replaceState({}, "", `?lens=${CATALOG_KEYS[1]}`);
    const { result } = renderHook(() => useLensState(CATALOG_KEYS));
    expect(result.current[0].lens.lensKeyA).toBe(CATALOG_KEYS[1]);
  });

  it("applies ?focus= slider to focusT", () => {
    window.history.replaceState({}, "", "?focus=0.6");
    const { result } = renderHook(() => useLensState(CATALOG_KEYS));
    expect(result.current[0].sliders.focusT).toBeCloseTo(0.6, 5);
  });

  it("applies ?aperture= slider to stopdownT", () => {
    window.history.replaceState({}, "", "?aperture=0.4");
    const { result } = renderHook(() => useLensState(CATALOG_KEYS));
    expect(result.current[0].sliders.stopdownT).toBeCloseTo(0.4, 5);
  });

  it("ignores ?lens= value not in catalog", () => {
    window.history.replaceState({}, "", "?lens=totally_fake_lens_xyz");
    const { result } = renderHook(() => useLensState(CATALOG_KEYS));
    // Falls back to default (first key)
    expect(result.current[0].lens.lensKeyA).toBe(CATALOG_KEYS[0]);
  });
});

/* ── Preferences initialization ── */

describe("useLensState — localStorage prefs override defaults", () => {
  it("ignores saved lensKeyA from prefs (lens selection is URL-only)", () => {
    const targetKey = CATALOG_KEYS[Math.min(2, CATALOG_KEYS.length - 1)];
    localStorage.setItem(PREFS_KEY, JSON.stringify({ v: 2, lensKeyA: targetKey }));
    const { result } = renderHook(() => useLensState(CATALOG_KEYS));
    // lensKeyA should be the catalog default, not the saved key
    expect(result.current[0].lens.lensKeyA).toBe(CATALOG_KEYS[0]);
  });

  it("applies dark=true from prefs", () => {
    localStorage.setItem(PREFS_KEY, JSON.stringify({ v: 2, dark: true }));
    const { result } = renderHook(() => useLensState(CATALOG_KEYS));
    expect(result.current[0].display.dark).toBe(true);
  });

  it("applies dark=false from prefs", () => {
    localStorage.setItem(PREFS_KEY, JSON.stringify({ v: 2, dark: false }));
    const { result } = renderHook(() => useLensState(CATALOG_KEYS));
    expect(result.current[0].display.dark).toBe(false);
  });

  it("ignores comparing from prefs (comparison is URL-only)", () => {
    localStorage.setItem(PREFS_KEY, JSON.stringify({ v: 2, comparing: true }));
    const { result } = renderHook(() => useLensState(CATALOG_KEYS));
    expect(result.current[0].lens.comparing).toBe(false);
  });

  it("ignores corrupted prefs JSON and uses defaults", () => {
    localStorage.setItem(PREFS_KEY, "not valid json {{{");
    const { result } = renderHook(() => useLensState(CATALOG_KEYS));
    expect(result.current[0].lens.lensKeyA).toBe(CATALOG_KEYS[0]);
  });
});

/* ── URL > prefs precedence ── */

describe("useLensState — URL params take precedence over prefs", () => {
  it("URL ?lens= sets lensKeyA (prefs no longer store lens selection)", () => {
    const urlKey = CATALOG_KEYS[2] ?? CATALOG_KEYS[0];
    window.history.replaceState({}, "", `?lens=${urlKey}`);
    const { result } = renderHook(() => useLensState(CATALOG_KEYS));
    expect(result.current[0].lens.lensKeyA).toBe(urlKey);
  });
});

/* ── Dispatch works ── */

describe("useLensState — dispatch", () => {
  it("dispatching SET_DARK updates display.dark", () => {
    const { result } = renderHook(() => useLensState(CATALOG_KEYS));
    const [initialState, dispatch] = result.current;
    const initialDark = initialState.display.dark;

    act(() => {
      dispatch({ type: "SET_DARK", dark: !initialDark });
    });

    expect(result.current[0].display.dark).toBe(!initialDark);
  });

  it("dispatching SET_LENS_A updates lensKeyA", () => {
    const { result } = renderHook(() => useLensState(CATALOG_KEYS));
    const newKey = CATALOG_KEYS[1];

    act(() => {
      result.current[1]({ type: "SET_LENS_A", key: newKey });
    });

    expect(result.current[0].lens.lensKeyA).toBe(newKey);
  });
});
