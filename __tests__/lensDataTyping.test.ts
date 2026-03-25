import { describe, it, expect } from "vitest";
import { LENS_CATALOG, CATALOG_KEYS } from "../src/utils/lensCatalog.js";
import type { LensData } from "../src/types/optics.js";

/**
 * Tests that verify the TypeScript migration of lens data files:
 * - All catalog lenses have complete LensData shape after defaults merge
 * - Key field types are correct at runtime (regression guard)
 */

/** Required LensData fields that must be present after defaults merge */
const REQUIRED_POST_MERGE: (keyof LensData)[] = [
  "key",
  "name",
  "closeFocusM",
  "fstopSeries",
  "elements",
  "surfaces",
  "yScFill",
  "svgW",
  "svgH",
  "scFill",
  "clipMargin",
  "maxRimAngleDeg",
  "gapSagFrac",
  "maxAspectRatio",
  "focusStep",
  "apertureStep",
  "maxFstop",
  "rayFractions",
  "rayLeadFrac",
  "offAxisFieldFrac",
  "offAxisFractions",
];

describe("lensDataTyping — post-merge completeness", () => {
  it("every catalog lens has all required LensData fields after defaults merge", () => {
    for (const key of CATALOG_KEYS) {
      const entry = LENS_CATALOG[key];
      for (const field of REQUIRED_POST_MERGE) {
        expect(entry[field], `${key}: missing required field "${field}"`).toBeDefined();
      }
    }
  });
});

describe("lensDataTyping — runtime field types", () => {
  it("elements[].id is number for all lenses", () => {
    for (const key of CATALOG_KEYS) {
      for (const el of LENS_CATALOG[key].elements) {
        expect(typeof el.id, `${key}/${el.name}: id must be number`).toBe("number");
      }
    }
  });

  it("surfaces[].R is number for all lenses", () => {
    for (const key of CATALOG_KEYS) {
      for (const s of LENS_CATALOG[key].surfaces) {
        expect(typeof s.R, `${key}/${s.label}: R must be number`).toBe("number");
      }
    }
  });

  it("surfaces[].sd is a positive number for all lenses", () => {
    for (const key of CATALOG_KEYS) {
      for (const s of LENS_CATALOG[key].surfaces) {
        expect(typeof s.sd, `${key}/${s.label}: sd must be number`).toBe("number");
        expect(s.sd, `${key}/${s.label}: sd must be positive`).toBeGreaterThan(0);
      }
    }
  });

  it("asph keys (when present) are strings matching surface labels", () => {
    for (const key of CATALOG_KEYS) {
      const entry = LENS_CATALOG[key];
      if (!entry.asph) continue;
      const surfaceLabels = new Set(entry.surfaces.map((s) => s.label));
      for (const asphKey of Object.keys(entry.asph)) {
        expect(surfaceLabels.has(asphKey), `${key}: asph key "${asphKey}" not in surface labels`).toBe(true);
      }
    }
  });

  it("fstopSeries is an array of numbers for all lenses", () => {
    for (const key of CATALOG_KEYS) {
      const series = LENS_CATALOG[key].fstopSeries;
      expect(Array.isArray(series), `${key}: fstopSeries must be array`).toBe(true);
      for (const f of series) {
        expect(typeof f, `${key}: fstopSeries values must be number`).toBe("number");
      }
    }
  });

  it("elements[].apd is 'patent', 'inferred', false, or undefined", () => {
    const valid = new Set(["patent", "inferred", false, undefined]);
    for (const key of CATALOG_KEYS) {
      for (const el of LENS_CATALOG[key].elements) {
        expect(valid.has(el.apd), `${key}/${el.name}: invalid apd value "${el.apd}"`).toBe(true);
      }
    }
  });

  it("elements[].cemented is string or undefined", () => {
    for (const key of CATALOG_KEYS) {
      for (const el of LENS_CATALOG[key].elements) {
        if (el.cemented !== undefined) {
          expect(typeof el.cemented, `${key}/${el.name}: cemented must be string`).toBe("string");
        }
      }
    }
  });
});
