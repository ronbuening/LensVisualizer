import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { loadPrefs, PREFS_KEY } from '../src/utils/preferences.js';

const KEYS = ['nikon_58', 'canon_50'];

/* Minimal localStorage mock */
let store = {};
const mockLocalStorage = {
  getItem: (key) => (key in store ? store[key] : null),
  setItem: (key, val) => { store[key] = String(val); },
  clear: () => { store = {}; },
  removeItem: (key) => { delete store[key]; },
};

beforeEach(() => {
  store = {};
  globalThis.localStorage = mockLocalStorage;
});

afterEach(() => {
  delete globalThis.localStorage;
});

describe('PREFS_KEY', () => {
  it('is a non-empty string', () => {
    expect(typeof PREFS_KEY).toBe('string');
    expect(PREFS_KEY.length).toBeGreaterThan(0);
  });
});

describe('loadPrefs', () => {
  it('returns empty object when nothing stored', () => {
    expect(loadPrefs(KEYS)).toEqual({});
  });

  it('returns empty object for non-JSON data', () => {
    mockLocalStorage.setItem(PREFS_KEY, 'not json');
    expect(loadPrefs(KEYS)).toEqual({});
  });

  it('returns empty object for JSON null', () => {
    mockLocalStorage.setItem(PREFS_KEY, 'null');
    expect(loadPrefs(KEYS)).toEqual({});
  });

  it('returns empty object for JSON array', () => {
    mockLocalStorage.setItem(PREFS_KEY, '[1,2,3]');
    expect(loadPrefs(KEYS)).toEqual({});
  });

  it('loads boolean preferences', () => {
    mockLocalStorage.setItem(PREFS_KEY, JSON.stringify({
      dark: true, highContrast: false, showOnAxis: true,
      showOffAxis: false, rayTracksF: true,
      showChromatic: true, chromR: false, chromG: true, chromB: true,
    }));
    const prefs = loadPrefs(KEYS);
    expect(prefs.dark).toBe(true);
    expect(prefs.highContrast).toBe(false);
    expect(prefs.showOnAxis).toBe(true);
    expect(prefs.showOffAxis).toBe(false);
    expect(prefs.rayTracksF).toBe(true);
    expect(prefs.showChromatic).toBe(true);
    expect(prefs.chromR).toBe(false);
    expect(prefs.chromG).toBe(true);
    expect(prefs.chromB).toBe(true);
  });

  it('ignores non-boolean values for boolean fields', () => {
    mockLocalStorage.setItem(PREFS_KEY, JSON.stringify({
      dark: 'yes', highContrast: 1, showOnAxis: null,
    }));
    const prefs = loadPrefs(KEYS);
    expect(prefs.dark).toBeUndefined();
    expect(prefs.highContrast).toBeUndefined();
    expect(prefs.showOnAxis).toBeUndefined();
  });

  it('validates lensKeyA against catalog keys', () => {
    mockLocalStorage.setItem(PREFS_KEY, JSON.stringify({ lensKeyA: 'nikon_58' }));
    expect(loadPrefs(KEYS).lensKeyA).toBe('nikon_58');
  });

  it('rejects lensKeyA not in catalog', () => {
    mockLocalStorage.setItem(PREFS_KEY, JSON.stringify({ lensKeyA: 'unknown_lens' }));
    expect(loadPrefs(KEYS).lensKeyA).toBeUndefined();
  });

  it('migrates v1 lensKey to lensKeyA', () => {
    mockLocalStorage.setItem(PREFS_KEY, JSON.stringify({ lensKey: 'canon_50' }));
    const prefs = loadPrefs(KEYS);
    expect(prefs.lensKeyA).toBe('canon_50');
    expect(prefs.lensKey).toBeUndefined();
  });

  it('prefers lensKeyA over v1 lensKey', () => {
    mockLocalStorage.setItem(PREFS_KEY, JSON.stringify({
      lensKey: 'canon_50', lensKeyA: 'nikon_58',
    }));
    expect(loadPrefs(KEYS).lensKeyA).toBe('nikon_58');
  });

  it('validates lensKeyB against catalog keys', () => {
    mockLocalStorage.setItem(PREFS_KEY, JSON.stringify({ lensKeyB: 'canon_50' }));
    expect(loadPrefs(KEYS).lensKeyB).toBe('canon_50');

    mockLocalStorage.setItem(PREFS_KEY, JSON.stringify({ lensKeyB: 'bad_key' }));
    expect(loadPrefs(KEYS).lensKeyB).toBeUndefined();
  });

  it('loads comparing boolean', () => {
    mockLocalStorage.setItem(PREFS_KEY, JSON.stringify({ comparing: true }));
    expect(loadPrefs(KEYS).comparing).toBe(true);
  });

  it('loads valid scaleMode values', () => {
    mockLocalStorage.setItem(PREFS_KEY, JSON.stringify({ scaleMode: 'independent' }));
    expect(loadPrefs(KEYS).scaleMode).toBe('independent');

    mockLocalStorage.setItem(PREFS_KEY, JSON.stringify({ scaleMode: 'normalized' }));
    expect(loadPrefs(KEYS).scaleMode).toBe('normalized');
  });

  it('rejects invalid scaleMode values', () => {
    mockLocalStorage.setItem(PREFS_KEY, JSON.stringify({ scaleMode: 'bogus' }));
    expect(loadPrefs(KEYS).scaleMode).toBeUndefined();
  });

  it('strips unknown properties', () => {
    mockLocalStorage.setItem(PREFS_KEY, JSON.stringify({
      dark: true, unknownProp: 'foo', hacky: 42,
    }));
    const prefs = loadPrefs(KEYS);
    expect(prefs.dark).toBe(true);
    expect(prefs.unknownProp).toBeUndefined();
    expect(prefs.hacky).toBeUndefined();
  });
});
