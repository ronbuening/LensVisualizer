import { describe, it, expect } from "vitest";
import {
  LENS_CATALOG,
  CATALOG_KEYS,
  COMPARISON_CATALOG_KEYS,
  hasMdForKey,
  loadMdForKey,
  resolveOpticalConfigurationKey,
} from "../../../../src/utils/catalog/lensCatalog.js";
import buildLens from "../../../../src/optics/buildLens.js";
import { catalogCollator } from "../../../../src/utils/catalog/collation.js";

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

  it("every key in CATALOG_KEYS has a valid, defaults-merged, visible LENS_CATALOG entry", () => {
    for (const key of CATALOG_KEYS) {
      const entry = LENS_CATALOG[key];
      expect(entry).toBeDefined();
      expect(entry.key).toBe(key);
      expect(entry.name).toBeTruthy();
      expect(entry.surfaces).toBeDefined();
      expect(entry.elements).toBeDefined();
      expect(Array.isArray(entry.rayFractions)).toBe(true);
      expect(entry.svgW).toBeGreaterThan(0);
      expect(entry.svgH).toBeGreaterThan(0);
      expect(entry.visible, `${key}: hidden lenses must be excluded from CATALOG_KEYS`).not.toBe(false);
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
    const sorted = [...names].sort((a, b) => catalogCollator.compare(a, b));
    expect(names).toEqual(sorted);
  });

  it("accepts only configurations from the canonical lens's group", () => {
    const canonicalKey = "nikon-af-s-nikkor-180-400mm-f4e-tc14-fl-ed-vr";
    const variantKey = `${canonicalKey}-tc-in`;

    expect(resolveOpticalConfigurationKey(canonicalKey, variantKey)).toBe(variantKey);
    expect(resolveOpticalConfigurationKey(canonicalKey, "reference-newtonian-side-focus")).toBe(canonicalKey);
    expect(resolveOpticalConfigurationKey(canonicalKey, "stale-configuration-key")).toBe(canonicalKey);
    expect(resolveOpticalConfigurationKey(canonicalKey, undefined)).toBe(canonicalKey);
  });

  it("exposes configuration variants to compare without exposing debug fixtures", () => {
    const canonicalKey = "nikon-af-s-nikkor-180-400mm-f4e-tc14-fl-ed-vr";
    expect(COMPARISON_CATALOG_KEYS).toContain(canonicalKey);
    expect(COMPARISON_CATALOG_KEYS).toContain(`${canonicalKey}-tc-in`);
    expect(COMPARISON_CATALOG_KEYS).not.toContain("reference-newtonian-side-focus");
    expect(COMPARISON_CATALOG_KEYS).toEqual(expect.arrayContaining(CATALOG_KEYS));
  });
});

/* ── TypeScript migration regression: all catalog lenses build successfully ──
 * One shared build per lens: three separate sweeps used to rebuild the full
 * catalog three times over for these assertions. */
describe("lensCatalog — buildLens integration", () => {
  it("every catalog lens builds to a frozen RuntimeLens with finite EFL and a valid stopIdx", () => {
    for (const key of CATALOG_KEYS) {
      const L = buildLens(LENS_CATALOG[key]);
      expect(isFinite(L.EFL), `${key}: EFL must be finite`).toBe(true);
      expect(L.EFL, `${key}: EFL must be positive`).toBeGreaterThan(0);
      expect(Object.isFrozen(L), `${key}: RuntimeLens must be frozen`).toBe(true);
      expect(L.stopIdx, `${key}: stopIdx out of range`).toBeGreaterThanOrEqual(0);
      expect(L.stopIdx, `${key}: stopIdx out of range`).toBeLessThan(L.N);
      expect(L.S[L.stopIdx].label, `${key}: STO label mismatch`).toBe("STO");
    }
  });
});
