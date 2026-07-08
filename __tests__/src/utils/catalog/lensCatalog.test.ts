import { describe, it, expect } from "vitest";
import { LENS_CATALOG, CATALOG_KEYS, hasMdForKey, loadMdForKey } from "../../../../src/utils/catalog/lensCatalog.js";
import buildLens from "../../../../src/optics/buildLens.js";

describe("lensCatalog", () => {
  it("keeps nested maker-folder lenses discoverable with matching analysis markdown", async () => {
    const key = "zeiss-hologon-15f8";
    expect(LENS_CATALOG[key]).toBeDefined();
    expect(LENS_CATALOG[key].name).toBe("CARL ZEISS HOLOGON 15mm f/8 (Contarex Hologon / Leica M)");
    expect(hasMdForKey(key)).toBe(true);
    expect(await loadMdForKey(key)).toContain("# Carl Zeiss Hologon 15 mm f/8");
  });

  it("CATALOG_KEYS is non-empty", () => {
    expect(CATALOG_KEYS.length).toBeGreaterThan(0);
  });

  it("every key in CATALOG_KEYS has a valid LENS_CATALOG entry", () => {
    for (const key of CATALOG_KEYS) {
      const entry = LENS_CATALOG[key];
      expect(entry).toBeDefined();
      expect(entry.key).toBe(key);
      expect(entry.name).toBeTruthy();
      expect(entry.surfaces).toBeDefined();
      expect(entry.elements).toBeDefined();
    }
  });

  it("all entries have merged defaults (rayFractions, svgW)", () => {
    for (const key of CATALOG_KEYS) {
      const entry = LENS_CATALOG[key];
      expect(Array.isArray(entry.rayFractions)).toBe(true);
      expect(entry.svgW).toBeGreaterThan(0);
      expect(entry.svgH).toBeGreaterThan(0);
    }
  });

  it("hidden lenses are excluded from CATALOG_KEYS", () => {
    for (const key of CATALOG_KEYS) {
      expect(LENS_CATALOG[key].visible).not.toBe(false);
    }
  });

  it("loadMdForKey returns a string for known lenses", async () => {
    /* At least one lens should have an .analysis.md file */
    const withMd = CATALOG_KEYS.find((k) => hasMdForKey(k));
    expect(withMd).toBeDefined();
    expect(typeof (await loadMdForKey(withMd!))).toBe("string");
  });

  it("hasMdForKey / loadMdForKey handle unknown keys", async () => {
    expect(hasMdForKey("nonexistent_lens_key_xyz")).toBe(false);
    expect(await loadMdForKey("nonexistent_lens_key_xyz")).toBeNull();
  });

  it("CATALOG_KEYS is sorted alphabetically by display name", () => {
    const names = CATALOG_KEYS.map((k) => LENS_CATALOG[k].name);
    const sorted = [...names].sort((a, b) => a.localeCompare(b));
    expect(names).toEqual(sorted);
  });
});

/* ── TypeScript migration regression: all catalog lenses build successfully ── */
describe("lensCatalog — buildLens integration", () => {
  it("every catalog lens builds without error and has a finite positive EFL", () => {
    for (const key of CATALOG_KEYS) {
      const L = buildLens(LENS_CATALOG[key]);
      expect(isFinite(L.EFL), `${key}: EFL must be finite`).toBe(true);
      expect(L.EFL, `${key}: EFL must be positive`).toBeGreaterThan(0);
    }
  });

  it("every catalog lens build returns a frozen RuntimeLens object", () => {
    for (const key of CATALOG_KEYS) {
      const L = buildLens(LENS_CATALOG[key]);
      expect(Object.isFrozen(L), `${key}: RuntimeLens must be frozen`).toBe(true);
    }
  });

  it("every catalog lens build has a valid stopIdx pointing to the STO surface", () => {
    for (const key of CATALOG_KEYS) {
      const L = buildLens(LENS_CATALOG[key]);
      expect(L.stopIdx, `${key}: stopIdx out of range`).toBeGreaterThanOrEqual(0);
      expect(L.stopIdx, `${key}: stopIdx out of range`).toBeLessThan(L.N);
      expect(L.S[L.stopIdx].label, `${key}: STO label mismatch`).toBe("STO");
    }
  });
});
