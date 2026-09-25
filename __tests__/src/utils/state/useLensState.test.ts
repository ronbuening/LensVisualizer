// @vitest-environment jsdom
/* Reducer initialization semantics (defaults, URL > prefs precedence, isWide panel defaults) are covered by
   lensReducer.test.ts createInitialState tests: "uses defaults when prefs and URL are empty", "URL params
   override prefs", "prefs override defaults", and "panel expanded defaults to isWide". This file keeps only
   the hook-specific wiring (tuple shape, URL parsing/validation, prefs handling, dispatch round-trips). */
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { renderHook, act, cleanup } from "@testing-library/react";
import useLensState from "../../../../src/utils/state/useLensState.js";
import { PREFS_KEY } from "../../../../src/utils/state/preferences.js";
import useURLSync from "../../../../src/utils/state/useURLSync.js";
import type { LensSourceState } from "../../../../src/types/optics.js";
import { buildSimplePositiveElementLens } from "../../optics/testLensFixtures.js";
import { CATALOG_KEYS, COMPARISON_CATALOG_KEYS, LENS_CATALOG } from "../../../../src/utils/catalog/lensCatalog.js";
import { clearBrowserState, installMatchMediaMock } from "../../../testUtils.js";

/* ── Mock window.matchMedia (not implemented in jsdom) ── */

beforeEach(() => {
  clearBrowserState();
  installMatchMediaMock(true);
});

/* ── Default state initialization ── */

describe("useLensState — hook interface", () => {
  it("returns [state, dispatch, isWide] tuple", () => {
    const { result } = renderHook(() => useLensState(CATALOG_KEYS));
    const [state, dispatch, isWide] = result.current;
    expect(typeof state).toBe("object");
    expect(typeof dispatch).toBe("function");
    expect(typeof isWide).toBe("boolean");
  });
});

/* ── URL param initialization ── */

describe("useLensState — URL params override defaults", () => {
  const canonicalConfigurationKey = "nikon-af-s-nikkor-180-400mm-f4e-tc14-fl-ed-vr";
  const alternateConfigurationKey = `${canonicalConfigurationKey}-tc-in`;

  it("uses ?lens= to set lensKeyA when key is valid", () => {
    window.history.replaceState({}, "", `?lens=${CATALOG_KEYS[1]}`);
    const { result } = renderHook(() => useLensState(CATALOG_KEYS));
    expect(result.current[0].lens.lensKeyA).toBe(CATALOG_KEYS[1]);
  });

  it("ignores ?lens= value not in catalog", () => {
    window.history.replaceState({}, "", "?lens=totally_fake_lens_xyz");
    const { result } = renderHook(() => useLensState(CATALOG_KEYS));
    // Falls back to default (first key)
    expect(result.current[0].lens.lensKeyA).toBe(CATALOG_KEYS[0]);
  });

  /* These three route real URL strings through the lensViewUrlState parsing
   * path — the reducer's "URL params override prefs" test receives already-
   * parsed values, so per-key parse coverage lives only here. */
  it("applies ?focus= slider to focusT", () => {
    window.history.replaceState({}, "", "?focus=0.6");
    const { result } = renderHook(() => useLensState(CATALOG_KEYS));
    expect(result.current[0].sliders.focusT).toBeCloseTo(0.6, 5);
  });

  it("applies ?aberration= slider to aberrationT", () => {
    window.history.replaceState({}, "", "?aberration=0.4");
    const { result } = renderHook(() => useLensState(CATALOG_KEYS));
    expect(result.current[0].sliders.aberrationT).toBeCloseTo(0.4, 5);
  });

  it("applies ?aperture= slider to stopdownT", () => {
    window.history.replaceState({}, "", "?aperture=0.4");
    const { result } = renderHook(() => useLensState(CATALOG_KEYS));
    expect(result.current[0].sliders.stopdownT).toBeCloseTo(0.4, 5);
  });

  it("hydrates a valid optical configuration on the first render", () => {
    window.history.replaceState({}, "", `/lens/${canonicalConfigurationKey}/?v=1&cfg=${alternateConfigurationKey}`);
    const { result } = renderHook(() => useLensState(CATALOG_KEYS, canonicalConfigurationKey));

    expect(result.current[0].lens.lensKeyA).toBe(canonicalConfigurationKey);
    expect(result.current[0].lens.selectedConfigurationKey).toBe(alternateConfigurationKey);
  });

  it("falls back to the canonical key for a cross-group configuration", () => {
    window.history.replaceState({}, "", `/lens/${canonicalConfigurationKey}/?v=1&cfg=reference-newtonian-side-focus`);
    const { result } = renderHook(() => useLensState(CATALOG_KEYS, canonicalConfigurationKey));

    expect(result.current[0].lens.selectedConfigurationKey).toBe(canonicalConfigurationKey);
  });

  it("initializes a configuration variant from compare route identity and ignores cfg", () => {
    window.history.replaceState({}, "", `?v=1&cfg=${canonicalConfigurationKey}`);
    const { result } = renderHook(() =>
      useLensState(COMPARISON_CATALOG_KEYS, alternateConfigurationKey, CATALOG_KEYS[0]),
    );

    expect(result.current[0].lens.comparing).toBe(true);
    expect(result.current[0].lens.lensKeyA).toBe(alternateConfigurationKey);
    expect(result.current[0].lens.selectedConfigurationKey).toBe(alternateConfigurationKey);
  });
});

/* ── Preferences initialization ── */

describe("useLensState — localStorage prefs handling", () => {
  it("ignores saved lensKeyA from prefs (lens selection is URL-only)", () => {
    const targetKey = CATALOG_KEYS[Math.min(2, CATALOG_KEYS.length - 1)];
    localStorage.setItem(PREFS_KEY, JSON.stringify({ v: 2, lensKeyA: targetKey }));
    const { result } = renderHook(() => useLensState(CATALOG_KEYS));
    // lensKeyA should be the catalog default, not the saved key
    expect(result.current[0].lens.lensKeyA).toBe(CATALOG_KEYS[0]);
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

describe("source-state URL restoration", () => {
  const key = "source-url-fixture";
  const near: LensSourceState = {
    id: "near",
    label: "Near",
    focusT: 0.7123456789,
    zoomT: 1 / 3,
    source: "Synthetic station",
    conjugate: {
      kind: "finite",
      objectDistanceMm: 1000,
      distanceReference: "first-surface",
      distanceProvenance: "published",
    },
  };
  const query = `?v=1&ss=${key}:near&focus=0.712&zoom=70&aperture=0.4&aberration=0.5`;
  beforeEach(() => {
    vi.useFakeTimers();
    LENS_CATALOG[key] = {
      ...buildSimplePositiveElementLens().data,
      key,
      focusPositions: [0, near.focusT, 1],
      zoomPositions: [35, 50, 60, 70],
      sourceStates: [near],
    };
  });
  afterEach(() => {
    cleanup();
    delete LENS_CATALOG[key];
    vi.useRealTimers();
  });
  function useViewer() {
    const [state, dispatch] = useLensState([key], key);
    useURLSync(state, dispatch, null, true, false);
    return [state, dispatch] as const;
  }
  it("restores exact authored coordinates ahead of rounded focus and conflicting focal length", () => {
    localStorage.setItem(PREFS_KEY, JSON.stringify({ rayTracksF: false }));
    window.history.replaceState({}, "", query);
    const { result, unmount } = renderHook(useViewer);
    expect(result.current[0].sliders).toMatchObject({
      focusT: near.focusT,
      zoomT: near.zoomT,
      aberrationT: 0,
      stopdownT: 0.4,
    });
    expect(result.current[0].rays.rayTracksF).toBe(true);
    act(() => vi.advanceTimersByTime(110));
    const saved = window.location.search;
    expect(new URLSearchParams(saved).get("ss")).toBe(`${key}:near`);
    expect(new URLSearchParams(saved).get("zoom")).toBe("50");
    unmount();
    const restored = renderHook(useViewer);
    expect(restored.result.current[0].sliders.focusT).toBe(near.focusT);
    expect(restored.result.current[0].sliders.zoomT).toBe(near.zoomT);
    act(() => restored.result.current[1]({ type: "SET_FOCUS_T", value: 0.713 }));
    act(() => vi.advanceTimersByTime(110));
    expect(new URLSearchParams(window.location.search).has("ss")).toBe(false);
  });
  it("hydrates both directions of popstate without rounding or resetting aperture", () => {
    window.history.replaceState({}, "", query);
    const { result } = renderHook(useViewer);
    act(() => {
      window.history.replaceState({}, "", "?focus=0&zoom=35&aperture=0.7");
      window.dispatchEvent(new PopStateEvent("popstate"));
    });
    expect(result.current[0].sliders).toMatchObject({ focusT: 0, zoomT: 0, stopdownT: 0.7 });
    act(() => {
      window.history.replaceState({}, "", query);
      window.dispatchEvent(new PopStateEvent("popstate"));
    });
    expect(result.current[0].sliders).toMatchObject({ focusT: near.focusT, zoomT: near.zoomT, stopdownT: 0.4 });
  });
  it.each([`${key}:missing`, "another-lens:near", "near", `${key}:<script>`])("falls back safely for %s", (id) => {
    window.history.replaceState({}, "", `?v=1&ss=${encodeURIComponent(id)}&focus=0.25&zoom=60`);
    const { result } = renderHook(useViewer);
    expect(result.current[0].sliders).toMatchObject({ focusT: 0.25, zoomT: 2 / 3 });
    act(() => vi.advanceTimersByTime(110));
    expect(new URLSearchParams(window.location.search).has("ss")).toBe(false);
  });
});
