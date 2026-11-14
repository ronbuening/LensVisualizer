import { afterEach, describe, expect, it, vi } from "vitest";
import {
  DEFAULT_MTF_PREFERENCES,
  getMtfPreferences,
  MTF_PREFERENCES_KEY,
  MTF_COMPARISON_F_NUMBERS,
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
  it("accepts the aperture view without changing older defaults or repairing its Advanced preference", () => {
    expect(parseMtfPreferences({ view: "aperture", advanced: false })).toMatchObject({
      view: "aperture",
      advanced: false,
    });
    expect(parseMtfPreferences({}).view).toBe("field");
    expect(parseMtfPreferences({ view: "frequency" }).view).toBe("frequency");
    expect(parseMtfPreferences({ view: "unknown" }).view).toBe("field");
  });

  it("keeps valid stored fields and replaces corrupt ones with defaults", () => {
    expect(parseMtfPreferences(null)).toEqual(DEFAULT_MTF_PREFERENCES);
    // Curves default to best axial focus, as a real lens is focused.
    expect(DEFAULT_MTF_PREFERENCES.focus).toBe("best-axial");
    expect(parseMtfPreferences({ focus: "design" }).focus).toBe("design");
    expect(parseMtfPreferences({ focus: "auto" }).focus).toBe("auto");
    expect(parseMtfPreferences({ focus: "sideways" }).focus).toBe("best-axial");
    expect(parseMtfPreferences({ compareF8: true }).comparisonFocus).toBe("refocus");
    expect(parseMtfPreferences({ comparisonFocus: "hold" }).comparisonFocus).toBe("hold");
    expect(parseMtfPreferences({ comparisonFocus: "unknown" }).comparisonFocus).toBe("refocus");
    // The diffraction-corrected product stored by earlier versions became the diffraction estimate.
    expect(DEFAULT_MTF_PREFERENCES.method).toBe("diffraction");
    expect(parseMtfPreferences({ method: "geometric-dl" }).method).toBe("diffraction");
    expect(parseMtfPreferences({ method: "geometric" }).method).toBe("geometric");
    for (const unknown of ["scalar", "constructor", "__proto__", 7])
      expect(parseMtfPreferences({ method: unknown }).method).toBe("diffraction");
    expect(
      parseMtfPreferences({
        method: "diffraction",
        spectrum: "bogus",
        focus: "design",
        view: "frequency",
        fieldStepPercent: 3,
        frequencies: [50, 10, 10, 35],
        maxGridSize: 512,
      }),
    ).toEqual({
      ...DEFAULT_MTF_PREFERENCES,
      method: "diffraction",
      focus: "design",
      view: "frequency",
      frequencies: [10, 50],
    });
    expect(parseMtfPreferences({ frequencies: [] }).frequencies).toEqual(DEFAULT_MTF_PREFERENCES.frequencies);
  });
  it("migrates and persists single-line wavelength choices without changing older spectra", () => {
    for (const spectrum of ["reference", "cdf", "photopic"] as const)
      expect(parseMtfPreferences({ spectrum })).toMatchObject({
        spectrum,
        wavelengthNm: DEFAULT_MTF_PREFERENCES.wavelengthNm,
      });
    for (const wavelengthNm of [undefined, null, "532", NaN, Infinity, 435.7, 656.4])
      expect(parseMtfPreferences({ spectrum: "single", wavelengthNm })).toMatchObject({
        spectrum: "single",
        wavelengthNm: DEFAULT_MTF_PREFERENCES.wavelengthNm,
      });
    for (const wavelengthNm of [435.8, 532.125, 656.3])
      expect(parseMtfPreferences({ spectrum: "single", wavelengthNm }).wavelengthNm).toBe(wavelengthNm);
    const store = stubStorage();
    updateMtfPreferences({ spectrum: "single", wavelengthNm: 532.125 });
    expect(JSON.parse(store.get(MTF_PREFERENCES_KEY)!)).toMatchObject({ spectrum: "single", wavelengthNm: 532.125 });
    resetMtfPreferencesCache();
    expect(getMtfPreferences()).toMatchObject({ spectrum: "single", wavelengthNm: 532.125 });
  });
  it("migrates the comparison aperture to f/8 and retains it when Advanced is hidden", () => {
    expect(parseMtfPreferences({ compareF8: true })).toMatchObject({
      compareF8: true,
      comparisonFNumber: 8,
      advanced: false,
    });
    for (const comparisonFNumber of [undefined, null, "11", 0, 0.999, 128.001, NaN, Infinity, -Infinity])
      expect(parseMtfPreferences({ comparisonFNumber }).comparisonFNumber).toBe(8);
    for (const comparisonFNumber of [...MTF_COMPARISON_F_NUMBERS, 3, 13.5, 45, 64, 90, 128])
      expect(parseMtfPreferences({ comparisonFNumber }).comparisonFNumber).toBe(comparisonFNumber);
    const store = stubStorage();
    updateMtfPreferences({ compareF8: true, comparisonFNumber: 5.6, advanced: true });
    updateMtfPreferences({ advanced: false });
    expect(JSON.parse(store.get(MTF_PREFERENCES_KEY)!)).toMatchObject({
      compareF8: true,
      comparisonFNumber: 5.6,
      advanced: false,
    });
    resetMtfPreferencesCache();
    expect(getMtfPreferences()).toMatchObject({ compareF8: true, comparisonFNumber: 5.6, advanced: false });
    for (const comparisonFNumber of [13.5, 45, 64, 90, 128]) {
      updateMtfPreferences({ comparisonFNumber });
      resetMtfPreferencesCache();
      expect(getMtfPreferences().comparisonFNumber).toBe(comparisonFNumber);
    }
  });
  it("persists updates, notifies subscribers and survives unavailable storage", () => {
    const store = stubStorage({ [MTF_PREFERENCES_KEY]: JSON.stringify({ fieldStepPercent: 2 }) });
    expect(getMtfPreferences().fieldStepPercent).toBe(2);
    const listener = vi.fn();
    const unsubscribe = subscribeMtfPreferences(listener);
    updateMtfPreferences({ view: "frequency", comparisonFocus: "hold" });
    expect(listener).toHaveBeenCalledTimes(1);
    expect(JSON.parse(store.get(MTF_PREFERENCES_KEY)!)).toMatchObject({
      view: "frequency",
      fieldStepPercent: 2,
      comparisonFocus: "hold",
    });
    resetMtfPreferencesCache();
    expect(getMtfPreferences().comparisonFocus).toBe("hold");
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

  it("migrates display references safely and persists valid choices", () => {
    expect(parseMtfPreferences({ compareF8: true })).toMatchObject({
      diffractionLimit: false,
      frequencyField: "overview",
      pixelPitchUm: null,
    });
    for (const value of ["0.5", -0.1, 1.1, NaN, Infinity, null])
      expect(parseMtfPreferences({ frequencyField: value }).frequencyField).toBe("overview");
    for (const value of ["4", 0, 7, null]) expect(parseMtfPreferences({ pixelPitchUm: value }).pixelPitchUm).toBeNull();
    expect(parseMtfPreferences({ diffractionLimit: "true" }).diffractionLimit).toBe(false);
    const store = stubStorage();
    updateMtfPreferences({ diffractionLimit: true, frequencyField: 0.4, pixelPitchUm: 6 });
    expect(JSON.parse(store.get(MTF_PREFERENCES_KEY)!)).toMatchObject({
      diffractionLimit: true,
      frequencyField: 0.4,
      pixelPitchUm: 6,
    });
    resetMtfPreferencesCache();
    expect(getMtfPreferences()).toMatchObject({ diffractionLimit: true, frequencyField: 0.4, pixelPitchUm: 6 });
    updateMtfPreferences({ frequencyField: 0, pixelPitchUm: null });
    expect(getMtfPreferences()).toMatchObject({ frequencyField: 0, pixelPitchUm: null });
  });

  it("keeps advanced details off for older or corrupt preferences and persists the boolean choice", () => {
    expect(DEFAULT_MTF_PREFERENCES.advanced).toBe(false);
    expect(parseMtfPreferences({ method: "geometric-dl", maxGridSize: 128 })).toMatchObject({
      method: "diffraction",
      maxGridSize: 256,
      advanced: false,
    });
    for (const advanced of [undefined, null, "true", "false", 0, 1, {}, []])
      expect(parseMtfPreferences({ advanced }).advanced).toBe(false);
    expect(parseMtfPreferences({ advanced: true }).advanced).toBe(true);
    expect(parseMtfPreferences({ advanced: false }).advanced).toBe(false);
    const store = stubStorage();
    updateMtfPreferences({ advanced: true });
    expect(JSON.parse(store.get(MTF_PREFERENCES_KEY)!).advanced).toBe(true);
    resetMtfPreferencesCache();
    expect(getMtfPreferences().advanced).toBe(true);
    updateMtfPreferences({ advanced: false });
    resetMtfPreferencesCache();
    expect(getMtfPreferences().advanced).toBe(false);
  });

  it("loads 128 cells saved as the old standard as the new 256-cell default, but keeps 128 chosen since", () => {
    // Before 256 became the standard, every save wrote the old standard 128 whatever the reader chose elsewhere.
    expect(parseMtfPreferences({ maxGridSize: 128, view: "frequency" }).maxGridSize).toBe(256);
    expect(parseMtfPreferences({ maxGridSize: 256 }).maxGridSize).toBe(256);
    expect(DEFAULT_MTF_PREFERENCES.maxGridSize).toBe(256);
    // A save now marks its grid cap, so 128 chosen as Faster survives a reload.
    const store = stubStorage();
    resetMtfPreferencesCache();
    updateMtfPreferences({ maxGridSize: 128 });
    resetMtfPreferencesCache();
    expect(JSON.parse(store.get(MTF_PREFERENCES_KEY)!).maxGridSize).toBe(128);
    expect(getMtfPreferences().maxGridSize).toBe(128);
  });
});

it("retains the zoom view independently of Advanced for later restoration", () => {
  expect(parseMtfPreferences({ view: "zoom", advanced: false })).toMatchObject({ view: "zoom", advanced: false });
});
