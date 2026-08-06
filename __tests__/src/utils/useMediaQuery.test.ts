// @vitest-environment jsdom

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { hydrateRoot } from "react-dom/client";
import { renderHook, act } from "@testing-library/react";
import useMediaQuery from "../../../src/utils/useMediaQuery.js";

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
  vi.stubGlobal(
    "matchMedia",
    vi.fn((query: string) => createMockMQL(query)),
  );
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("useMediaQuery", () => {
  it.each([true, false])("renders the explicit server default %s before effects run", (ssrDefault) => {
    currentMatches = !ssrDefault;
    const html = renderToString(
      createElement(() => (useMediaQuery("(min-width: 900px)", { ssrDefault }) ? "match" : "no match")),
    );

    expect(html).toBe(ssrDefault ? "match" : "no match");
  });

  it("hydrates with the server default before syncing a narrow viewport", async () => {
    currentMatches = false;
    const ResponsiveProbe = () =>
      useMediaQuery("(min-width: 720px)", { ssrDefault: true }) ? "wide layout" : "narrow layout";
    const container = document.createElement("div");
    container.innerHTML = renderToString(createElement(ResponsiveProbe));
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => undefined);

    let root: ReturnType<typeof hydrateRoot> | undefined;
    await act(async () => {
      root = hydrateRoot(container, createElement(ResponsiveProbe));
    });

    expect(container.textContent).toBe("narrow layout");
    expect(consoleError.mock.calls.flat().join(" ")).not.toMatch(/hydration|did not match/i);
    act(() => root?.unmount());
  });

  it("clientOnly reads the live match on the first render, before effects", () => {
    currentMatches = true;
    const html = renderToString(
      createElement(() =>
        useMediaQuery("(min-width: 900px)", { ssrDefault: false, clientOnly: true }) ? "match" : "no match",
      ),
    );

    expect(html).toBe("match");
  });

  it("clientOnly falls back to the server default when no window exists", () => {
    currentMatches = true;
    vi.stubGlobal("window", undefined);
    try {
      const html = renderToString(
        createElement(() =>
          useMediaQuery("(min-width: 900px)", { ssrDefault: false, clientOnly: true }) ? "match" : "no match",
        ),
      );

      expect(html).toBe("no match");
    } finally {
      vi.unstubAllGlobals();
    }
  });

  it("returns initial match state", () => {
    currentMatches = true;
    // Re-stub with updated currentMatches
    vi.stubGlobal(
      "matchMedia",
      vi.fn((query: string) => createMockMQL(query)),
    );
    const { result } = renderHook(() => useMediaQuery("(min-width: 900px)", { ssrDefault: false }));
    expect(result.current).toBe(true);
  });

  it("returns false when media query does not match", () => {
    currentMatches = false;
    const { result } = renderHook(() => useMediaQuery("(min-width: 900px)", { ssrDefault: true }));
    expect(result.current).toBe(false);
  });

  it("updates when media query changes", () => {
    currentMatches = false;
    const { result } = renderHook(() => useMediaQuery("(min-width: 900px)", { ssrDefault: false }));
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
    const { unmount } = renderHook(() => useMediaQuery("(min-width: 900px)", { ssrDefault: false }));
    expect(listeners.length).toBe(1);
    unmount();
    expect(listeners.length).toBe(0);
  });

  it("re-subscribes when query string changes", () => {
    currentMatches = false;
    const { rerender } = renderHook(({ q }: { q: string }) => useMediaQuery(q, { ssrDefault: false }), {
      initialProps: { q: "(min-width: 900px)" },
    });
    expect(listeners.length).toBe(1);
    rerender({ q: "(min-width: 600px)" });
    /* Old listener removed, new one added */
    expect(listeners.length).toBe(1);
  });

  it("re-syncs matches when the query string changes", () => {
    currentMatches = false;
    const { result, rerender } = renderHook(({ q }: { q: string }) => useMediaQuery(q, { ssrDefault: false }), {
      initialProps: { q: "(min-width: 900px)" },
    });
    expect(result.current).toBe(false);

    /* The new query matches immediately — no change event fires, so the
       effect must read mql.matches itself instead of keeping the stale value */
    currentMatches = true;
    rerender({ q: "(min-width: 600px)" });
    expect(result.current).toBe(true);
  });

  it("falls back to the legacy WebKit listener API", () => {
    const legacyListeners: ((event: MediaQueryListEvent) => void)[] = [];
    const addListener = vi.fn((handler: (event: MediaQueryListEvent) => void) => legacyListeners.push(handler));
    const removeListener = vi.fn((handler: (event: MediaQueryListEvent) => void) => {
      const index = legacyListeners.indexOf(handler);
      if (index >= 0) legacyListeners.splice(index, 1);
    });
    vi.stubGlobal(
      "matchMedia",
      vi.fn(() => ({
        matches: false,
        media: "(min-width: 900px)",
        addListener,
        removeListener,
      })),
    );

    const { result, unmount } = renderHook(() => useMediaQuery("(min-width: 900px)", { ssrDefault: false }));
    expect(addListener).toHaveBeenCalledTimes(1);
    act(() => legacyListeners[0]({ matches: true } as MediaQueryListEvent));
    expect(result.current).toBe(true);

    unmount();
    expect(removeListener).toHaveBeenCalledTimes(1);
    expect(legacyListeners).toHaveLength(0);
  });
});
