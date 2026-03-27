// @vitest-environment jsdom

import { beforeEach, describe, expect, it, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { PREFS_KEY } from "../src/utils/preferences.js";
import { usePageTheme } from "../src/utils/usePageTheme.js";
import themes from "../src/utils/themes.js";
import { clearBrowserState, installMatchMediaMock, seedLocalStorage } from "./testUtils.js";

describe("usePageTheme", () => {
  beforeEach(() => {
    clearBrowserState();
  });

  it("resolves the theme from stored preferences", () => {
    installMatchMediaMock(false);
    seedLocalStorage({
      [PREFS_KEY]: JSON.stringify({ dark: false, highContrast: true }),
    });

    const { result } = renderHook(() => usePageTheme());

    expect(result.current).toBe(themes.lightHC);
  });

  it("falls back to system preferences when stored prefs are absent", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: query === "(prefers-contrast: more)",
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });

    const { result } = renderHook(() => usePageTheme());

    expect(result.current).toBe(themes.lightHC);
  });
});
