// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useURLSync from "../src/utils/useURLSync.js";
import { createInitialState } from "../src/utils/lensReducer.js";
import { CATALOG_KEYS, LENS_CATALOG } from "../src/utils/lensCatalog.js";
import { clearBrowserState, installMatchMediaMock, mockReplaceState } from "./testUtils.js";
import { focalLengthToZoomT } from "../src/utils/zoomConversion.js";
import type { Dispatch } from "react";
import type { LensState, LensAction } from "../src/types/state.js";

function makeState(overrides: Partial<LensState> = {}): LensState {
  return { ...createInitialState({}, {}, true, CATALOG_KEYS), ...overrides };
}

const zoomLensKey = CATALOG_KEYS.find(
  (key) => Array.isArray(LENS_CATALOG[key].zoomPositions) && LENS_CATALOG[key].zoomPositions!.length >= 2,
)!;
const zoomLensPositions = LENS_CATALOG[zoomLensKey].zoomPositions!;

/* ── Setup / teardown ── */

let replaceStateSpy: ReturnType<typeof vi.spyOn>;

beforeEach(() => {
  clearBrowserState();
  replaceStateSpy = mockReplaceState();
  vi.useFakeTimers();
  installMatchMediaMock(false);
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
  it("skips immediate replaceState on lens pages in single-lens mode", () => {
    const dispatch = vi.fn() as unknown as Dispatch<LensAction>;
    const state = makeState();

    renderHook(() => useURLSync(state, dispatch, null, true, false));

    expect(replaceStateSpy).not.toHaveBeenCalled();
  });

  it("skips immediate replaceState on compare pages", () => {
    const dispatch = vi.fn() as unknown as Dispatch<LensAction>;
    const state = { ...makeState(), lens: { ...makeState().lens, comparing: true } };

    renderHook(() => useURLSync(state, dispatch, null, false, true));

    expect(replaceStateSpy).not.toHaveBeenCalled();
  });

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

describe("useURLSync — zoom initialization", () => {
  it("initializes shared zoom from the URL in comparison mode", () => {
    const dispatch = vi.fn() as unknown as Dispatch<LensAction>;
    const state: LensState = {
      ...makeState(),
      lens: { ...makeState().lens, comparing: true },
    };
    const zoomLens = { isZoom: true, zoomPositions: zoomLensPositions } as any;
    const urlZoom = zoomLensPositions[1];
    window.history.replaceState({}, "", `?zoom=${urlZoom}`);

    renderHook(() =>
      useURLSync(
        state,
        dispatch,
        { LA: zoomLens, LB: { isZoom: false, zoomPositions: null } as any },
      ),
    );

    expect(dispatch).toHaveBeenCalledWith({
      type: "SET_SHARED_ZOOM_T",
      value: focalLengthToZoomT(urlZoom, zoomLens),
    });
  });

  it("initializes single-lens zoom from catalog zoom positions without building a runtime lens", () => {
    const dispatch = vi.fn() as unknown as Dispatch<LensAction>;
    const state: LensState = {
      ...makeState(),
      lens: { ...makeState().lens, lensKeyA: zoomLensKey, comparing: false },
    };
    const urlZoom = zoomLensPositions[1];
    window.history.replaceState({}, "", `?zoom=${urlZoom}`);

    renderHook(() => useURLSync(state, dispatch, null));

    expect(dispatch).toHaveBeenCalledWith({
      type: "SET_ZOOM_T",
      value: focalLengthToZoomT(urlZoom, { isZoom: true, zoomPositions: zoomLensPositions }),
    });
  });
});

/* ── Debounced slider URL update ── */

describe("useURLSync — updateURLWithSliders (debounced)", () => {
  it("preserves the current lens-page pathname when only query params should change", () => {
    const dispatch = vi.fn() as unknown as Dispatch<LensAction>;
    const state: LensState = { ...makeState(), sliders: { focusT: 0.5, zoomT: 0, stopdownT: 0 } };
    window.history.replaceState({}, "", `/lens/${CATALOG_KEYS[0]}`);
    replaceStateSpy.mockClear();

    const { result } = renderHook(() => useURLSync(state, dispatch, null, true, false));

    act(() => {
      result.current.updateURLWithSliders();
      vi.advanceTimersByTime(300);
    });

    const lastCall = replaceStateSpy.mock.calls[replaceStateSpy.mock.calls.length - 1];
    expect(lastCall[2]).toBe(`/lens/${CATALOG_KEYS[0]}?focus=0.500`);
  });

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

  it("encodes zoom for single-lens zoom pages after debounce", () => {
    const dispatch = vi.fn() as unknown as Dispatch<LensAction>;
    const state: LensState = {
      ...makeState(),
      lens: { ...makeState().lens, lensKeyA: zoomLensKey },
      sliders: { focusT: 0, zoomT: 0.5, stopdownT: 0 },
    };
    const { result } = renderHook(() => useURLSync(state, dispatch, null));

    act(() => {
      result.current.updateURLWithSliders();
      vi.advanceTimersByTime(300);
    });

    const lastCall = replaceStateSpy.mock.calls[replaceStateSpy.mock.calls.length - 1];
    const urlArg = lastCall[2] as string;
    expect(urlArg).toContain("zoom=");
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

  it("preserves the compare-page pathname when syncing shared slider params", () => {
    const dispatch = vi.fn() as unknown as Dispatch<LensAction>;
    const [lensKeyA, lensKeyB] = CATALOG_KEYS;
    const state: LensState = {
      ...makeState(),
      lens: { ...makeState().lens, comparing: true, lensKeyA, lensKeyB },
      sharedSliders: { sharedFocusT: 0.4, sharedStopdownT: 0.2, sharedZoomT: 0 },
    };
    window.history.replaceState({}, "", `/compare/${lensKeyA}/${lensKeyB}`);
    replaceStateSpy.mockClear();

    const { result } = renderHook(() => useURLSync(state, dispatch, null, false, true));

    act(() => {
      result.current.updateURLWithSliders();
      vi.advanceTimersByTime(300);
    });

    const lastCall = replaceStateSpy.mock.calls[replaceStateSpy.mock.calls.length - 1];
    expect(lastCall[2]).toBe(`/compare/${lensKeyA}/${lensKeyB}?focus=0.400&aperture=0.200`);
  });

  it("encodes shared zoom for comparison mode after debounce", () => {
    const dispatch = vi.fn() as unknown as Dispatch<LensAction>;
    const state: LensState = {
      ...makeState(),
      lens: { ...makeState().lens, comparing: true },
      sharedSliders: { sharedFocusT: 0, sharedStopdownT: 0, sharedZoomT: 0.5 },
    };
    const zoomLens = { isZoom: true, zoomPositions: zoomLensPositions } as any;
    const { result } = renderHook(() =>
      useURLSync(state, dispatch, { LA: zoomLens, LB: { isZoom: false, zoomPositions: null } as any }),
    );

    act(() => {
      result.current.updateURLWithSliders();
      vi.advanceTimersByTime(300);
    });

    const lastCall = replaceStateSpy.mock.calls[replaceStateSpy.mock.calls.length - 1];
    const urlArg = lastCall[2] as string;
    expect(urlArg).toContain("zoom=");
  });
});
