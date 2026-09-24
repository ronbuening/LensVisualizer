import { afterEach, describe, expect, it, vi } from "vitest";
import {
  DEFAULT_MTF_PREFERENCES,
  getMtfPreferences,
  MTF_PREFERENCES_KEY,
  parseMtfPreferences,
  resetMtfPreferencesCache,
  subscribeMtfPreferences,
  updateMtfPreferences,
} from "../../../../src/utils/state/mtfPreferences.js";

function stubStorage(initial: Record<string, string> = {}) {
  const store = new Map(Object.entries(initial));
  vi.stubGlobal("localStorage", {
    getItem: (key: string) => store.get(key) ?? null,
    setItem: (key: string, value: string) => store.set(key, value),
  });
  return store;
}

afterEach(() => {
  vi.unstubAllGlobals();
  resetMtfPreferencesCache();
});

describe("MTF preferences", () => {
  it("keeps valid stored fields and replaces corrupt ones with defaults", () => {
    expect(parseMtfPreferences(null)).toEqual(DEFAULT_MTF_PREFERENCES);
    // Auto keeps the design plane unless the lens data's plane contradicts its prescription.
    expect(DEFAULT_MTF_PREFERENCES.focus).toBe("auto");
    expect(parseMtfPreferences({ focus: "design" }).focus).toBe("design");
    expect(parseMtfPreferences({ focus: "sideways" }).focus).toBe("auto");
    expect(
      parseMtfPreferences({
        method: "diffraction",
        spectrum: "bogus",
        focus: "best-axial",
        view: "frequency",
        fieldStepPercent: 3,
        frequencies: [50, 10, 10, 35],
        maxGridSize: 512,
      }),
    ).toEqual({
      ...DEFAULT_MTF_PREFERENCES,
      method: "diffraction",
      focus: "best-axial",
      view: "frequency",
      frequencies: [10, 50],
    });
    expect(parseMtfPreferences({ frequencies: [] }).frequencies).toEqual(DEFAULT_MTF_PREFERENCES.frequencies);
  });
  it("persists updates, notifies subscribers and survives unavailable storage", () => {
    const store = stubStorage({ [MTF_PREFERENCES_KEY]: JSON.stringify({ fieldStepPercent: 2 }) });
    expect(getMtfPreferences().fieldStepPercent).toBe(2);
    const listener = vi.fn();
    const unsubscribe = subscribeMtfPreferences(listener);
    updateMtfPreferences({ view: "frequency" });
    expect(listener).toHaveBeenCalledTimes(1);
    expect(JSON.parse(store.get(MTF_PREFERENCES_KEY)!)).toMatchObject({ view: "frequency", fieldStepPercent: 2 });
    unsubscribe();
    vi.stubGlobal("localStorage", {
      getItem: () => {
        throw new Error("blocked");
      },
      setItem: () => {
        throw new Error("blocked");
      },
    });
    resetMtfPreferencesCache();
    expect(getMtfPreferences()).toEqual(DEFAULT_MTF_PREFERENCES);
    expect(() => updateMtfPreferences({ method: "geometric" })).not.toThrow();
    expect(getMtfPreferences().method).toBe("geometric");
  });
});
