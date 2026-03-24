// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useURLSync from "../src/utils/useURLSync.js";
import { createInitialState } from "../src/utils/lensReducer.js";
import { CATALOG_KEYS } from "../src/utils/lensCatalog.js";
import type { Dispatch } from "react";
import type { LensState, LensAction } from "../src/types/state.js";

function makeState(overrides: Partial<LensState> = {}): LensState {
  return { ...createInitialState({}, {}, true, CATALOG_KEYS), ...overrides };
}

/* ── Setup / teardown ── */

let replaceStateSpy: ReturnType<typeof vi.spyOn>;

beforeEach(() => {
  window.history.replaceState({}, "", "/");
  replaceStateSpy = vi.spyOn(history, "replaceState");
  vi.useFakeTimers();

  // createInitialState reads window.matchMedia for dark/contrast defaults when prefs are absent
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi
      .fn()
      .mockImplementation(() => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() })),
  });
});

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

/* ── Return value shape ── */

describe("useURLSync — return value", () => {
  it("returns an object with updateURLWithSliders function", () => {
    const dispatch = vi.fn() as unknown as Dispatch<LensAction>;
    const state = makeState();
    const { result } = renderHook(() => useURLSync(state, dispatch, null));
    expect(typeof result.current.updateURLWithSliders).toBe("function");
  });
});

/* ── Immediate URL update on lens selection change ── */

describe("useURLSync — immediate URL update on lens change", () => {
  it("calls history.replaceState on mount for single-lens mode", () => {
    const dispatch = vi.fn() as unknown as Dispatch<LensAction>;
    const state = makeState();
    renderHook(() => useURLSync(state, dispatch, null));
    // Effect fires on mount — replaceState should have been called
    expect(replaceStateSpy).toHaveBeenCalled();
  });

  it("updates URL when lensKeyA changes", () => {
    const dispatch = vi.fn() as unknown as Dispatch<LensAction>;
    const state1 = makeState();
    const { rerender } = renderHook(({ s }: { s: LensState }) => useURLSync(s, dispatch, null), {
      initialProps: { s: state1 },
    });

    const callsBefore = replaceStateSpy.mock.calls.length;

    const state2: LensState = {
      ...state1,
      lens: { ...state1.lens, lensKeyA: CATALOG_KEYS[1] },
    };
    act(() => {
      rerender({ s: state2 });
    });

    expect(replaceStateSpy.mock.calls.length).toBeGreaterThan(callsBefore);
  });

  it("updates URL when entering comparison mode", () => {
    const dispatch = vi.fn() as unknown as Dispatch<LensAction>;
    const state1 = makeState();
    const { rerender } = renderHook(({ s }: { s: LensState }) => useURLSync(s, dispatch, null), {
      initialProps: { s: state1 },
    });

    const callsBefore = replaceStateSpy.mock.calls.length;

    const state2: LensState = {
      ...state1,
      lens: { ...state1.lens, comparing: true },
    };
    act(() => {
      rerender({ s: state2 });
    });

    expect(replaceStateSpy.mock.calls.length).toBeGreaterThan(callsBefore);
  });
});

/* ── Debounced slider URL update ── */

describe("useURLSync — updateURLWithSliders (debounced)", () => {
  it("does not call replaceState immediately when invoked", () => {
    const dispatch = vi.fn() as unknown as Dispatch<LensAction>;
    const state = makeState();
    const { result } = renderHook(() => useURLSync(state, dispatch, null));

    const callsBefore = replaceStateSpy.mock.calls.length;
    act(() => {
      result.current.updateURLWithSliders();
    });

    // No immediate call — debounce pending
    expect(replaceStateSpy.mock.calls.length).toBe(callsBefore);
  });

  it("calls replaceState after 300ms debounce", () => {
    const dispatch = vi.fn() as unknown as Dispatch<LensAction>;
    // Non-zero focusT so the debounced URL (with focus param) differs from the lens-only URL
    const state: LensState = { ...makeState(), sliders: { focusT: 0.5, zoomT: 0, stopdownT: 0 } };
    const { result } = renderHook(() => useURLSync(state, dispatch, null));

    act(() => {
      result.current.updateURLWithSliders();
    });

    const callsBefore = replaceStateSpy.mock.calls.length;

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(replaceStateSpy.mock.calls.length).toBeGreaterThan(callsBefore);
  });

  it("coalesces multiple rapid calls into a single replaceState", () => {
    const dispatch = vi.fn() as unknown as Dispatch<LensAction>;
    // Non-zero focusT so the debounced URL (with focus param) differs from the lens-only URL
    const state: LensState = { ...makeState(), sliders: { focusT: 0.5, zoomT: 0, stopdownT: 0 } };
    const { result } = renderHook(() => useURLSync(state, dispatch, null));

    act(() => {
      result.current.updateURLWithSliders();
      result.current.updateURLWithSliders();
      result.current.updateURLWithSliders();
    });

    const callsBefore = replaceStateSpy.mock.calls.length;

    act(() => {
      vi.advanceTimersByTime(300);
    });

    // Only one replaceState despite three rapid calls
    expect(replaceStateSpy.mock.calls.length).toBe(callsBefore + 1);
  });

  it("encodes non-zero focusT in the URL after debounce", () => {
    const dispatch = vi.fn() as unknown as Dispatch<LensAction>;
    const state: LensState = {
      ...makeState(),
      sliders: { focusT: 0.6, zoomT: 0, stopdownT: 0 },
    };
    const { result } = renderHook(() => useURLSync(state, dispatch, null));

    act(() => {
      result.current.updateURLWithSliders();
      vi.advanceTimersByTime(300);
    });

    // Check that the URL passed to replaceState contains focus param
    const lastCall = replaceStateSpy.mock.calls[replaceStateSpy.mock.calls.length - 1];
    const urlArg = lastCall[2] as string;
    expect(urlArg).toContain("focus=");
  });

  it("encodes non-zero stopdownT as aperture in the URL after debounce", () => {
    const dispatch = vi.fn() as unknown as Dispatch<LensAction>;
    const state: LensState = {
      ...makeState(),
      sliders: { focusT: 0, zoomT: 0, stopdownT: 0.5 },
    };
    const { result } = renderHook(() => useURLSync(state, dispatch, null));

    act(() => {
      result.current.updateURLWithSliders();
      vi.advanceTimersByTime(300);
    });

    const lastCall = replaceStateSpy.mock.calls[replaceStateSpy.mock.calls.length - 1];
    const urlArg = lastCall[2] as string;
    expect(urlArg).toContain("aperture=");
  });

  it("omits focus from URL when focusT is 0 (infinity focus)", () => {
    const dispatch = vi.fn() as unknown as Dispatch<LensAction>;
    const state: LensState = {
      ...makeState(),
      sliders: { focusT: 0, zoomT: 0, stopdownT: 0 },
    };
    const { result } = renderHook(() => useURLSync(state, dispatch, null));

    act(() => {
      result.current.updateURLWithSliders();
      vi.advanceTimersByTime(300);
    });

    const lastCall = replaceStateSpy.mock.calls[replaceStateSpy.mock.calls.length - 1];
    const urlArg = lastCall[2] as string;
    // At zero sliders the URL should be the plain lens param, no focus/aperture
    expect(urlArg).not.toContain("focus=");
    expect(urlArg).not.toContain("aperture=");
  });
});

/* ── Comparison mode slider URL update ── */

describe("useURLSync — comparison mode slider URL", () => {
  it("encodes sharedFocusT when comparing and sharedFocusT > 0", () => {
    const dispatch = vi.fn() as unknown as Dispatch<LensAction>;
    const state: LensState = {
      ...makeState(),
      lens: { ...makeState().lens, comparing: true },
      sharedSliders: { sharedFocusT: 0.4, sharedStopdownT: 0, sharedZoomT: 0 },
    };
    const { result } = renderHook(() => useURLSync(state, dispatch, null));

    act(() => {
      result.current.updateURLWithSliders();
      vi.advanceTimersByTime(300);
    });

    const lastCall = replaceStateSpy.mock.calls[replaceStateSpy.mock.calls.length - 1];
    const urlArg = lastCall[2] as string;
    expect(urlArg).toContain("focus=");
  });
});
