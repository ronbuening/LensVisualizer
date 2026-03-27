import { describe, expect, it } from "vitest";
import themes from "../src/utils/themes.js";
import {
  darkPreferenceFromThemeMode,
  nextThemeMode,
  resolveDarkPreference,
  resolveHighContrastPreference,
  resolveTheme,
  resolveThemePreferences,
  themeModeFromDarkPreference,
} from "../src/utils/themePreferences.js";

describe("themePreferences", () => {
  it("resolves explicit stored preferences without system fallback", () => {
    const resolved = resolveThemePreferences({ dark: false, highContrast: true }, { dark: true, highContrast: false });

    expect(resolved.themeMode).toBe("light");
    expect(resolved.dark).toBe(false);
    expect(resolved.highContrast).toBe(true);
    expect(resolved.theme).toBe(themes.lightHC);
  });

  it("falls back to system preferences when stored values are absent", () => {
    const resolved = resolveThemePreferences({}, { dark: false, highContrast: true });

    expect(resolved.themeMode).toBe("auto");
    expect(resolved.dark).toBe(false);
    expect(resolved.highContrast).toBe(true);
    expect(resolved.theme).toBe(themes.lightHC);
  });

  it("converts theme modes to and from persisted dark preferences", () => {
    expect(themeModeFromDarkPreference(true)).toBe("dark");
    expect(themeModeFromDarkPreference(false)).toBe("light");
    expect(themeModeFromDarkPreference(null)).toBe("auto");
    expect(darkPreferenceFromThemeMode("dark")).toBe(true);
    expect(darkPreferenceFromThemeMode("light")).toBe(false);
    expect(darkPreferenceFromThemeMode("auto")).toBeNull();
  });

  it("cycles theme mode in auto -> dark -> light order", () => {
    expect(nextThemeMode("auto")).toBe("dark");
    expect(nextThemeMode("dark")).toBe("light");
    expect(nextThemeMode("light")).toBe("auto");
  });

  it("exposes direct dark, contrast, and theme helpers", () => {
    expect(resolveDarkPreference(null, true)).toBe(true);
    expect(resolveHighContrastPreference(undefined, true)).toBe(true);
    expect(resolveTheme(false, false)).toBe(themes.light);
  });
});
