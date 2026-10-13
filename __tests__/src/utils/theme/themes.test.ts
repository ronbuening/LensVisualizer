import { describe, it, expect } from "vitest";
import T from "../../../../src/utils/theme/themes.js";
import type { ThemeVariant } from "../../../../src/types/theme.js";

const THEME_NAMES: ThemeVariant[] = ["dark", "light", "darkHC", "lightHC"];

/** WCAG relative luminance of `#rrggbb` or `rgb[a](r,g,b[,a])`; alpha is ignored for near-opaque panels. */
function luminance(color: string): number {
  const channels = color.startsWith("#")
    ? [1, 3, 5].map((i) => parseInt(color.slice(i, i + 2), 16))
    : color
        .match(/[\d.]+/g)!
        .slice(0, 3)
        .map(Number);
  const [r, g, b] = channels.map((v) => {
    const c = v / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

describe("theme definitions", () => {
  it("exports all four themes", () => {
    for (const name of THEME_NAMES) {
      expect(T[name]).toBeDefined();
    }
  });

  it("all themes have the same set of property keys", () => {
    const baseKeys = Object.keys(T.dark).sort();
    for (const name of THEME_NAMES) {
      expect(Object.keys(T[name]).sort()).toEqual(baseKeys);
    }
  });

  it("keeps five distinct chart-series slots with 3:1 contrast against the panel", () => {
    for (const name of THEME_NAMES) {
      const series = T[name].chartSeries;
      expect(series, name).toHaveLength(5);
      expect(new Set(series).size, name).toBe(5);
      for (const color of series)
        expect(contrast(color, T[name].panelBg), `${name} ${color}`).toBeGreaterThanOrEqual(3);
    }
  });

  it("all themes have required color tokens", () => {
    const required = [
      "bg",
      "title",
      "body",
      "rayWarm",
      "rayCool",
      "stop",
      "axis",
      "panelBg",
      "sliderAccent",
      "imgLine",
    ];
    for (const name of THEME_NAMES) {
      for (const prop of required) {
        expect((T[name] as unknown as Record<string, unknown>)[prop], `${name}.${prop}`).toBeTruthy();
      }
    }
  });

  it("no theme has undefined or null color values for string tokens", () => {
    for (const name of THEME_NAMES) {
      const theme = T[name];
      for (const [key, val] of Object.entries(theme)) {
        if (typeof val === "string") {
          expect(val, `${name}.${key}`).not.toBe("undefined");
          expect(val, `${name}.${key}`).not.toBe("null");
        }
      }
    }
  });
});

describe("createTheme closure functions", () => {
  describe("grid(i)", () => {
    it("returns different values for odd vs even indices", () => {
      for (const name of THEME_NAMES) {
        const theme = T[name];
        const even = theme.grid(0);
        const odd = theme.grid(1);
        expect(typeof even).toBe("string");
        expect(typeof odd).toBe("string");
      }
    });
  });

  describe("gridDash(i)", () => {
    it('returns "none" for even, dashed for odd', () => {
      for (const name of THEME_NAMES) {
        expect(T[name].gridDash(0)).toBe("none");
        expect(T[name].gridDash(1)).toBe("2,5");
        expect(T[name].gridDash(2)).toBe("none");
      }
    });
  });

  describe("elemNum(e)", () => {
    it("returns APD color for APD elements", () => {
      for (const name of THEME_NAMES) {
        const apd = T[name].elemNum({ apd: "patent" });
        const std = T[name].elemNum({ apd: undefined });
        expect(typeof apd).toBe("string");
        expect(typeof std).toBe("string");
        expect(apd).not.toBe(std);
      }
    });
  });

  describe("elemFill(e, on)", () => {
    it("returns active fill when on=true", () => {
      for (const name of THEME_NAMES) {
        const fill = T[name].elemFill({ nd: 1.5 }, true);
        expect(typeof fill).toBe("string");
      }
    });

    it("returns APD active fill for APD elements when on=true", () => {
      for (const name of THEME_NAMES) {
        const apdFill = T[name].elemFill({ apd: "patent", nd: 1.5 }, true);
        const stdFill = T[name].elemFill({ nd: 1.5 }, true);
        expect(apdFill).not.toBe(stdFill);
      }
    });

    it("differentiates patent vs inferred APD fills", () => {
      for (const name of THEME_NAMES) {
        const patent = T[name].elemFill({ apd: "patent", nd: 1.5 }, false);
        const inferred = T[name].elemFill({ apd: "inferred", nd: 1.5 }, false);
        expect(patent).not.toBe(inferred);
      }
    });

    it("differentiates by nd when not active and not APD", () => {
      for (const name of THEME_NAMES) {
        const high = T[name].elemFill({ nd: 1.85 }, false);
        const mid = T[name].elemFill({ nd: 1.65 }, false);
        const low = T[name].elemFill({ nd: 1.5 }, false);
        expect(high).not.toBe(low);
        expect(mid).not.toBe(high);
      }
    });
  });

  describe("elemStroke(e, on)", () => {
    it("returns active stroke when on=true", () => {
      for (const name of THEME_NAMES) {
        const stroke = T[name].elemStroke({}, true);
        expect(typeof stroke).toBe("string");
      }
    });

    it("differentiates patent vs inferred vs default strokes", () => {
      for (const name of THEME_NAMES) {
        const patent = T[name].elemStroke({ apd: "patent" }, false);
        const inferred = T[name].elemStroke({ apd: "inferred" }, false);
        const normal = T[name].elemStroke({}, false);
        expect(patent).not.toBe(inferred);
        expect(patent).not.toBe(normal);
      }
    });
  });
});
