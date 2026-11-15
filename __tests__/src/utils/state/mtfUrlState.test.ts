/** MTF share URLs preserve exact settings and reject an invalid override as a whole. */
import { describe, expect, it } from "vitest";
import {
  buildLensNavigationUrl,
  buildMtfLink,
  decodeMtfSettings,
  encodeMtfSettings,
  parseSharedMtfSettings,
  preserveSharedMtfSettings,
} from "../../../../src/utils/state/mtfUrlState.js";
import {
  DEFAULT_MTF_PREFERENCES,
  resolveMtfPreferences,
  type MtfPreferences,
} from "../../../../src/utils/state/mtfPreferences.js";

const settings: Required<MtfPreferences> = {
  method: "geometric",
  spectrum: "cdf",
  regularSpectrum: "cdf",
  wavelengthNm: DEFAULT_MTF_PREFERENCES.wavelengthNm,
  focus: "design",
  maxGridSize: 128,
  view: "frequency",
  regularView: "frequency",
  fieldStepPercent: 2,
  frequencies: [20, 40, 50],
  compareF8: true,
  comparisonFNumber: 5.6,
  comparisonFocus: "hold",
  diffractionLimit: true,
  frequencyField: 1 / 3,
  pixelPitchUm: 5,
  advanced: true,
};
const payload = (raw: unknown) => `1.${btoa(JSON.stringify(raw)).replace(/=+$/, "")}`;

describe("MTF URL state", () => {
  it.each([false, true])("copies only effective settings with Advanced %s", (advanced) => {
    const remembered = {
      ...settings,
      spectrum: "single" as const,
      wavelengthNm: 532.125,
      view: "zoom" as const,
      advanced,
    };
    const shared = parseSharedMtfSettings(new URL(buildMtfLink("https://example.com/lens/test/", remembered)).search)!;
    expect(shared).toEqual(resolveMtfPreferences(remembered));
    expect(shared).toMatchObject({
      spectrum: advanced ? "single" : "cdf",
      view: advanced ? "zoom" : "frequency",
      comparisonFNumber: advanced ? 5.6 : 8,
      wavelengthNm: advanced ? 532.125 : DEFAULT_MTF_PREFERENCES.wavelengthNm,
      advanced,
    });
    // The live visit URL retains both memories, unlike an explicit copied link.
    expect(decodeMtfSettings(encodeMtfSettings(remembered))).toEqual(remembered);
  });

  it("reads old single-line and sweep links as Advanced choices with regular defaults", () => {
    const old = decodeMtfSettings(payload({ s: "single", w: 532.125, v: "aperture", n: 5.6 }))!;
    expect(old).toMatchObject({ spectrum: "single", wavelengthNm: 532.125, view: "aperture", comparisonFNumber: 5.6 });
    expect(resolveMtfPreferences(old)).toMatchObject({ spectrum: "photopic", view: "field", comparisonFNumber: 8 });
    expect(resolveMtfPreferences({ ...old, advanced: true })).toMatchObject({
      spectrum: "single",
      view: "aperture",
      comparisonFNumber: 5.6,
    });
    expect(decodeMtfSettings(payload({ s: "cdf", v: "frequency" }))).toMatchObject({
      regularSpectrum: "cdf",
      regularView: "frequency",
    });
  });

  it.each(["aperture", "zoom"] as const)("round-trips the %s view and controls in additive v1 links", (view) => {
    for (const advanced of [true, false]) {
      const aperture = { ...settings, view, advanced };
      const link = buildMtfLink("https://example.com/lens/test/?v=1&aperture=0.12345678901234568", aperture);
      expect(parseSharedMtfSettings(new URL(link).search)).toEqual(resolveMtfPreferences(aperture));
      expect(new URL(link).searchParams.get("aperture")).toBe("0.12345678901234568");
    }
    expect(decodeMtfSettings(payload({ v: "field" }))?.view).toBe("field");
    expect(decodeMtfSettings(payload({ v: "frequency" }))?.view).toBe("frequency");
  });

  it("round-trips every setting, including an exact field fraction and non-default frequency lists", () => {
    const encoded = encodeMtfSettings(settings);
    expect(decodeMtfSettings(encoded)).toEqual(settings);
    expect(decodeMtfSettings(encoded)!.frequencyField).toBe(1 / 3);
    const params = new URLSearchParams({ v: "1", mtf: encoded });
    expect(parseSharedMtfSettings(`?${params}`)).toEqual(settings);
    for (const frequencies of [[50], [10, 20, 30, 40, 50], [20, 40]] as const) {
      expect(decodeMtfSettings(encodeMtfSettings({ ...settings, frequencies }))!.frequencies).toEqual(frequencies);
    }
  });

  it("round-trips exact single wavelengths in additive v1 links and decodes older links", () => {
    for (const wavelengthNm of [435.8, 546.074, 532.125, 656.3]) {
      const single = { ...settings, spectrum: "single" as const, wavelengthNm, advanced: false };
      expect(decodeMtfSettings(encodeMtfSettings(single))).toEqual(single);
    }
    expect(decodeMtfSettings(payload({ s: "reference", m: "geometric" }))).toEqual({
      ...DEFAULT_MTF_PREFERENCES,
      spectrum: "reference",
      regularSpectrum: "reference",
      method: "geometric",
    });
    for (const w of [null, "532", 435.7, 656.4]) expect(decodeMtfSettings(payload({ s: "single", w }))).toBeNull();
  });

  it("adds comparison apertures to v1 links while old comparison links still mean f/8", () => {
    expect(decodeMtfSettings(payload({ c: true, o: "hold" }))).toEqual({
      ...DEFAULT_MTF_PREFERENCES,
      compareF8: true,
      comparisonFocus: "hold",
      comparisonFNumber: 8,
    });
    expect(encodeMtfSettings({ ...DEFAULT_MTF_PREFERENCES, compareF8: true })).toBe(payload({ c: true }));
    for (const comparisonFNumber of [1, 1.4, 2, 2.8, 3, 4, 5.6, 8, 11, 13.5, 16, 22, 32, 45, 64, 90, 128]) {
      const preferences = { ...settings, comparisonFNumber, advanced: false };
      expect(decodeMtfSettings(encodeMtfSettings(preferences))).toEqual(preferences);
    }
    for (const n of [null, "11", 0, 0.999, 128.001, NaN, Infinity, -Infinity])
      expect(decodeMtfSettings(payload({ c: true, n }))).toBeNull();
  });

  it("omits defaults inside an explicit defaults payload and preserves all other supported choices", () => {
    expect(encodeMtfSettings(DEFAULT_MTF_PREFERENCES)).toBe("1");
    expect(decodeMtfSettings("1")).toEqual(DEFAULT_MTF_PREFERENCES);
    const encoded = encodeMtfSettings({ ...DEFAULT_MTF_PREFERENCES, advanced: true });
    expect(JSON.parse(atob(encoded.slice(2)))).toEqual({ a: true });
    for (const patch of [
      { focus: "auto", spectrum: "reference", fieldStepPercent: 1, pixelPitchUm: 3, frequencyField: 0 },
      { fieldStepPercent: 5, pixelPitchUm: 4, frequencyField: 1 },
      { pixelPitchUm: 6, frequencyField: 0.003000000001 },
      { pixelPitchUm: 8, frequencyField: "overview" },
    ] satisfies Partial<MtfPreferences>[]) {
      const preferences = { ...DEFAULT_MTF_PREFERENCES, ...patch };
      expect(decodeMtfSettings(encodeMtfSettings(preferences))).toEqual(preferences);
    }
  });

  it.each([
    null,
    "",
    "2",
    "2.e30",
    "1.",
    "1.%%%",
    "1.e30.extra",
    "1.e30=",
    `1.${"a".repeat(2048)}`,
    payload(null),
    payload([]),
    payload(3),
    payload({ unknown: true }),
    payload({ __proto__: null, constructor: true }),
    payload({ m: "geometric-dl" }),
    payload({ s: "unknown" }),
    payload({ f: "sideways" }),
    payload({ g: 512 }),
    payload({ v: "chart" }),
    payload({ h: 3 }),
    payload({ q: [] }),
    payload({ q: [50, 10] }),
    payload({ q: [10, 10] }),
    payload({ q: [10, "30"] }),
    payload({ q: [10, 35] }),
    payload({ c: 1 }),
    payload({ o: "auto" }),
    payload({ d: "true" }),
    payload({ r: -0.1 }),
    payload({ r: 1.1 }),
    payload({ r: "0.5" }),
    payload({ r: null }),
    payload({ p: 7 }),
    payload({ a: 1 }),
    payload({ b: "single" }),
    payload({ j: "aperture" }),
    payload({ m: "geometric", q: [20, 35] }),
  ])("rejects a malformed or future payload as a whole: %s", (value) => {
    expect(decodeMtfSettings(value)).toBeNull();
  });

  it("requires v1 and a single parameter, leaving absent or invalid overrides to stored preferences", () => {
    for (const query of ["", "?mtf=1", "?v=2&mtf=1", "?v=1&mtf=1&mtf=1", "?v=1&mtf=2"])
      expect(parseSharedMtfSettings(query)).toBeNull();
  });

  it("copies the current optical state, page and fragment while explicitly opening the MTF tab", () => {
    const href =
      "https://example.com/lens/test/?v=1&focus=0.6666666666666666&aperture=0.12345678901234568&cfg=test-alt#chart";
    const url = new URL(buildMtfLink(href, settings));
    expect(url.pathname).toBe("/lens/test/");
    expect(url.hash).toBe("#chart");
    expect(url.searchParams.get("focus")).toBe("0.6666666666666666");
    expect(url.searchParams.get("aperture")).toBe("0.12345678901234568");
    expect(url.searchParams.get("cfg")).toBe("test-alt");
    expect(url.searchParams.get("ad")).toBe("1");
    expect(url.searchParams.get("tab")).toBe("mtf");
    expect(parseSharedMtfSettings(url.search)).toEqual(settings);
    expect([...url.searchParams.keys()]).toEqual(["v", "focus", "aperture", "cfg", "ad", "tab", "mtf"]);
  });

  it("preserves only an existing valid override during ordinary URL synchronization", () => {
    const params = new URLSearchParams({ focus: "0.5" });
    preserveSharedMtfSettings(`?v=1&mtf=${encodeMtfSettings(settings)}`, params);
    expect(params.get("focus")).toBe("0.5");
    expect(parseSharedMtfSettings(params.toString())).toEqual(settings);
    for (const search of ["", "?mtf=1", "?v=1&mtf=2"]) {
      const ordinary = new URLSearchParams({ focus: "0.5" });
      preserveSharedMtfSettings(search, ordinary);
      expect(ordinary.toString()).toBe("focus=0.5");
    }
  });

  it("preserves a valid payload unchanged rather than re-encoding its settings", () => {
    const value = payload({ d: false, m: "geometric" });
    const params = new URLSearchParams();
    preserveSharedMtfSettings(`?v=1&mtf=${value}`, params);
    expect(params.get("mtf")).toBe(value);
  });

  it("combines the shared override with destination optical state without copying the current lens state", () => {
    const value = payload({ m: "geometric", d: false });
    const params = new URLSearchParams({ v: "1", a_tc: "tc-14" });
    const path = buildLensNavigationUrl("/compare/new-a/new-b", `?v=1&mtf=${value}&tc=old&focus=0.5`, params);
    expect(path).toBe(`/compare/new-a/new-b/?v=1&a_tc=tc-14&mtf=${value}`);
    expect(params.toString()).toBe("v=1&a_tc=tc-14");
  });

  it.each(["", "?mtf=1", "?v=2&mtf=1", "?v=1&mtf=1&mtf=1", "?v=1&mtf=invalid"])(
    "drops absent or invalid sharing from lens navigation: %s",
    (search) => {
      expect(buildLensNavigationUrl("/lens/next", search)).toBe("/lens/next/");
    },
  );
});
