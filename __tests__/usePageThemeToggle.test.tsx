// @vitest-environment jsdom

import { beforeEach, describe, expect, it, vi } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { PREFS_KEY } from "../src/utils/preferences.js";
import { usePageThemeToggle } from "../src/utils/usePageThemeToggle.js";
import themes from "../src/utils/themes.js";
import { clearBrowserState, installMatchMediaMock, seedLocalStorage } from "./testUtils.js";

describe("usePageThemeToggle", () => {
  beforeEach(() => {
    clearBrowserState();
  });

  it("starts in auto mode and resolves the theme from system preference", () => {
    installMatchMediaMock(true);
    seedLocalStorage({
      [PREFS_KEY]: JSON.stringify({ highContrast: false }),
    });

    const { result } = renderHook(() => usePageThemeToggle());

    expect(result.current.themeMode).toBe("auto");
    expect(result.current.highContrast).toBe(false);
    expect(result.current.theme).toBe(themes.dark);
  });

  it("hydrates stored theme mode and contrast preference", () => {
    installMatchMediaMock(false);
    seedLocalStorage({
      [PREFS_KEY]: JSON.stringify({ dark: false, highContrast: true }),
    });

    const { result } = renderHook(() => usePageThemeToggle());

    expect(result.current.themeMode).toBe("light");
    expect(result.current.highContrast).toBe(true);
    expect(result.current.theme).toBe(themes.lightHC);
  });

  it("hydrates missing high contrast from the system preference", () => {
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

    const { result } = renderHook(() => usePageThemeToggle());

    expect(result.current.themeMode).toBe("auto");
    expect(result.current.highContrast).toBe(true);
    expect(result.current.theme).toBe(themes.lightHC);
  });

  it("cycles theme mode and persists each step", () => {
    installMatchMediaMock(false);

    const { result } = renderHook(() => usePageThemeToggle());

    act(() => result.current.toggleTheme());
    expect(result.current.themeMode).toBe("dark");
    expect(result.current.theme).toBe(themes.dark);
    expect(JSON.parse(localStorage.getItem(PREFS_KEY) || "{}")).toMatchObject({ dark: true, highContrast: false });

    act(() => result.current.toggleTheme());
    expect(result.current.themeMode).toBe("light");
    expect(result.current.theme).toBe(themes.light);
    expect(JSON.parse(localStorage.getItem(PREFS_KEY) || "{}")).toMatchObject({ dark: false, highContrast: false });

    act(() => result.current.toggleTheme());
    expect(result.current.themeMode).toBe("auto");
    expect(result.current.theme).toBe(themes.light);
    expect(JSON.parse(localStorage.getItem(PREFS_KEY) || "{}")).toMatchObject({ dark: null, highContrast: false });
  });

  it("toggles high contrast and persists it", () => {
    installMatchMediaMock(false);

    const { result } = renderHook(() => usePageThemeToggle());

    act(() => result.current.toggleHC());

    expect(result.current.highContrast).toBe(true);
    expect(result.current.theme).toBe(themes.lightHC);
    expect(JSON.parse(localStorage.getItem(PREFS_KEY) || "{}")).toMatchObject({ dark: null, highContrast: true });
  });

  it("updates the auto-resolved theme when the system color scheme changes", () => {
    const controller = installMatchMediaMock(false);

    const { result } = renderHook(() => usePageThemeToggle());
    expect(result.current.theme).toBe(themes.light);

    act(() => controller.dispatchChange(true));

    expect(result.current.themeMode).toBe("auto");
    expect(result.current.theme).toBe(themes.dark);
  });
});
