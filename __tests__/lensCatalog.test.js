import { describe, it, expect } from 'vitest';
import { LENS_CATALOG, CATALOG_KEYS, mdForKey } from '../src/utils/lensCatalog.js';

describe('lensCatalog', () => {
  it('CATALOG_KEYS is non-empty', () => {
    expect(CATALOG_KEYS.length).toBeGreaterThan(0);
  });

  it('every key in CATALOG_KEYS has a valid LENS_CATALOG entry', () => {
    for (const key of CATALOG_KEYS) {
      const entry = LENS_CATALOG[key];
      expect(entry).toBeDefined();
      expect(entry.key).toBe(key);
      expect(entry.name).toBeTruthy();
      expect(entry.surfaces).toBeDefined();
      expect(entry.elements).toBeDefined();
    }
  });

  it('all entries have merged defaults (rayFractions, svgW)', () => {
    for (const key of CATALOG_KEYS) {
      const entry = LENS_CATALOG[key];
      expect(Array.isArray(entry.rayFractions)).toBe(true);
      expect(entry.svgW).toBeGreaterThan(0);
      expect(entry.svgH).toBeGreaterThan(0);
    }
  });

  it('hidden lenses are excluded from CATALOG_KEYS', () => {
    for (const key of CATALOG_KEYS) {
      expect(LENS_CATALOG[key].visible).not.toBe(false);
    }
  });

  it('mdForKey returns a string for known lenses', () => {
    /* At least one lens should have an .analysis.md file */
    const found = CATALOG_KEYS.some(k => typeof mdForKey(k) === 'string');
    expect(found).toBe(true);
  });

  it('mdForKey returns null for unknown keys', () => {
    expect(mdForKey('nonexistent_lens_key_xyz')).toBeNull();
  });

  it('CATALOG_KEYS is sorted alphabetically by display name', () => {
    const names = CATALOG_KEYS.map(k => LENS_CATALOG[k].name);
    const sorted = [...names].sort((a, b) => a.localeCompare(b));
    expect(names).toEqual(sorted);
  });
});
