import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { loadPrefs, PREFS_KEY } from "../src/utils/preferences.js";

/* Minimal localStorage mock */
let store: Record<string, string> = {};
const mockLocalStorage = {
  getItem: (key: string): string | null => (key in store ? store[key] : null),
  setItem: (key: string, val: string): void => {
    store[key] = String(val);
  },
  clear: (): void => {
    store = {};
  },
  removeItem: (key: string): void => {
    delete store[key];
  },
};

beforeEach(() => {
  store = {};
  (globalThis as Record<string, unknown>).localStorage = mockLocalStorage;
});

afterEach(() => {
  delete (globalThis as Record<string, unknown>).localStorage;
});

describe("PREFS_KEY", () => {
  it("is a non-empty string", () => {
    expect(typeof PREFS_KEY).toBe("string");
    expect(PREFS_KEY.length).toBeGreaterThan(0);
  });
});

describe("loadPrefs", () => {
  it("returns empty object when nothing stored", () => {
    expect(loadPrefs()).toEqual({});
  });

  it("returns empty object for non-JSON data", () => {
    mockLocalStorage.setItem(PREFS_KEY, "not json");
    expect(loadPrefs()).toEqual({});
  });

  it("returns empty object for JSON null", () => {
    mockLocalStorage.setItem(PREFS_KEY, "null");
    expect(loadPrefs()).toEqual({});
  });

  it("returns empty object for JSON array", () => {
    mockLocalStorage.setItem(PREFS_KEY, "[1,2,3]");
    expect(loadPrefs()).toEqual({});
  });

  it("loads boolean preferences", () => {
    mockLocalStorage.setItem(
      PREFS_KEY,
      JSON.stringify({
        dark: true,
        highContrast: false,
        showOnAxis: true,
        showOffAxis: false,
        rayDensity: "dense",
        rayTracksF: true,
        showChromatic: true,
        chromR: false,
        chromG: true,
        chromB: true,
        showCardinals: true,
        showCardinalDimensions: false,
      }),
    );
    const prefs = loadPrefs();
    expect(prefs.dark).toBe(true);
    expect(prefs.highContrast).toBe(false);
    expect(prefs.showOnAxis).toBe(true);
    expect(prefs.showOffAxis).toBe("off");
    expect(prefs.rayDensity).toBe("dense");
    expect(prefs.rayTracksF).toBe(true);
    expect(prefs.showChromatic).toBe(true);
    expect(prefs.chromR).toBe(false);
    expect(prefs.chromG).toBe(true);
    expect(prefs.chromB).toBe(true);
    expect(prefs.showCardinals).toBe(true);
    expect(prefs.showCardinalDimensions).toBe(false);
  });

  it("ignores non-boolean values for boolean fields", () => {
    mockLocalStorage.setItem(
      PREFS_KEY,
      JSON.stringify({
        dark: "yes",
        highContrast: 1,
        showOnAxis: null,
      }),
    );
    const prefs = loadPrefs();
    expect(prefs.dark).toBeUndefined();
    expect(prefs.highContrast).toBeUndefined();
    expect(prefs.showOnAxis).toBeUndefined();
  });

  it("ignores invalid rayDensity values", () => {
    mockLocalStorage.setItem(PREFS_KEY, JSON.stringify({ rayDensity: "extra-crispy" }));
    expect(loadPrefs().rayDensity).toBeUndefined();
  });

  it("loads collapsible panel preferences", () => {
    mockLocalStorage.setItem(
      PREFS_KEY,
      JSON.stringify({
        focusExpanded: true,
        apertureExpanded: false,
        headerControlsExpanded: true,
        legendExpanded: false,
        abbeShowGlassType: false,
      }),
    );
    const prefs = loadPrefs();
    expect(prefs.focusExpanded).toBe(true);
    expect(prefs.apertureExpanded).toBe(false);
    expect(prefs.headerControlsExpanded).toBe(true);
    expect(prefs.legendExpanded).toBe(false);
    expect(prefs.abbeShowGlassType).toBe(false);
  });

  it("ignores non-boolean values for collapsible panel fields", () => {
    mockLocalStorage.setItem(
      PREFS_KEY,
      JSON.stringify({
        focusExpanded: "yes",
        apertureExpanded: 1,
        headerControlsExpanded: null,
        legendExpanded: "true",
      }),
    );
    const prefs = loadPrefs();
    expect(prefs.focusExpanded).toBeUndefined();
    expect(prefs.apertureExpanded).toBeUndefined();
    expect(prefs.headerControlsExpanded).toBeUndefined();
    expect(prefs.legendExpanded).toBeUndefined();
  });

  it("no longer restores lens selection from localStorage", () => {
    mockLocalStorage.setItem(
      PREFS_KEY,
      JSON.stringify({ lensKeyA: "nikon_58", lensKeyB: "canon_50", comparing: true }),
    );
    const prefs = loadPrefs() as Record<string, unknown>;
    expect(prefs.lensKeyA).toBeUndefined();
    expect(prefs.lensKeyB).toBeUndefined();
    expect(prefs.comparing).toBeUndefined();
  });

  it("loads valid scaleMode values", () => {
    mockLocalStorage.setItem(PREFS_KEY, JSON.stringify({ scaleMode: "independent" }));
    expect(loadPrefs().scaleMode).toBe("independent");

    mockLocalStorage.setItem(PREFS_KEY, JSON.stringify({ scaleMode: "normalized" }));
    expect(loadPrefs().scaleMode).toBe("normalized");
  });

  it("rejects invalid scaleMode values", () => {
    mockLocalStorage.setItem(PREFS_KEY, JSON.stringify({ scaleMode: "bogus" }));
    expect(loadPrefs().scaleMode).toBeUndefined();
  });

  it("loads analysisDrawerTab preference", () => {
    mockLocalStorage.setItem(PREFS_KEY, JSON.stringify({ analysisDrawerTab: "distortion" }));
    expect(loadPrefs().analysisDrawerTab).toBe("distortion");
  });

  it("ignores non-string analysisDrawerTab", () => {
    mockLocalStorage.setItem(PREFS_KEY, JSON.stringify({ analysisDrawerTab: 42 }));
    expect(loadPrefs().analysisDrawerTab).toBeUndefined();
  });

  it("strips unknown properties", () => {
    mockLocalStorage.setItem(
      PREFS_KEY,
      JSON.stringify({
        dark: true,
        unknownProp: "foo",
        hacky: 42,
      }),
    );
    const prefs = loadPrefs() as Record<string, unknown>;
    expect(prefs.dark).toBe(true);
    expect(prefs.unknownProp).toBeUndefined();
    expect(prefs.hacky).toBeUndefined();
  });
});
