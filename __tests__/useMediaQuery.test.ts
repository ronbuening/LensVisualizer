// @vitest-environment jsdom

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useMediaQuery from "../src/utils/useMediaQuery.js";

/* ── Mock matchMedia ── */

let listeners: ((e: MediaQueryListEvent) => void)[] = [];
let currentMatches = false;

function createMockMQL(query: string) {
  return {
    matches: currentMatches,
    media: query,
    addEventListener: (_event: string, handler: (e: MediaQueryListEvent) => void) => {
      listeners.push(handler);
    },
    removeEventListener: (_event: string, handler: (e: MediaQueryListEvent) => void) => {
      listeners = listeners.filter((h) => h !== handler);
    },
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  };
}

beforeEach(() => {
  listeners = [];
  currentMatches = false;
  vi.stubGlobal("matchMedia", vi.fn((query: string) => createMockMQL(query)));
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("useMediaQuery", () => {
  it("returns initial match state", () => {
    currentMatches = true;
    // Re-stub with updated currentMatches
    vi.stubGlobal("matchMedia", vi.fn((query: string) => createMockMQL(query)));
    const { result } = renderHook(() => useMediaQuery("(min-width: 900px)"));
    expect(result.current).toBe(true);
  });

  it("returns false when media query does not match", () => {
    currentMatches = false;
    const { result } = renderHook(() => useMediaQuery("(min-width: 900px)"));
    expect(result.current).toBe(false);
  });

  it("updates when media query changes", () => {
    currentMatches = false;
    const { result } = renderHook(() => useMediaQuery("(min-width: 900px)"));
    expect(result.current).toBe(false);

    /* Simulate viewport change */
    act(() => {
      for (const listener of listeners) {
        listener({ matches: true } as MediaQueryListEvent);
      }
    });
    expect(result.current).toBe(true);
  });

  it("cleans up listener on unmount", () => {
    currentMatches = false;
    const { unmount } = renderHook(() => useMediaQuery("(min-width: 900px)"));
    expect(listeners.length).toBe(1);
    unmount();
    expect(listeners.length).toBe(0);
  });

  it("re-subscribes when query string changes", () => {
    currentMatches = false;
    const { rerender } = renderHook(({ q }: { q: string }) => useMediaQuery(q), {
      initialProps: { q: "(min-width: 900px)" },
    });
    expect(listeners.length).toBe(1);
    rerender({ q: "(min-width: 600px)" });
    /* Old listener removed, new one added */
    expect(listeners.length).toBe(1);
  });
});
