import { describe, it, expect } from 'vitest';
import { parseComparisonParams, buildComparisonURL } from '../parseComparisonParams.js';

const KEYS = ['NikkorZ50f12', 'Nokton50f1', 'ApoLanthar50f2', 'Sonnar50f15'];

describe('parseComparisonParams', () => {
  it('returns comparison mode for valid ?a=&b= params', () => {
    const result = parseComparisonParams('?a=NikkorZ50f12&b=Nokton50f1', KEYS);
    expect(result).toEqual({
      comparing: true,
      lensKeyA: 'NikkorZ50f12',
      lensKeyB: 'Nokton50f1',
    });
  });

  it('returns comparing=false when a key is invalid', () => {
    const result = parseComparisonParams('?a=NikkorZ50f12&b=FakeLens', KEYS);
    expect(result.comparing).toBe(false);
  });

  it('returns comparing=false when params are missing', () => {
    expect(parseComparisonParams('', KEYS).comparing).toBe(false);
    expect(parseComparisonParams('?a=NikkorZ50f12', KEYS).comparing).toBe(false);
    expect(parseComparisonParams('?b=Nokton50f1', KEYS).comparing).toBe(false);
  });

  it('parses ?lens= for single-lens deep link', () => {
    const result = parseComparisonParams('?lens=Sonnar50f15', KEYS);
    expect(result).toEqual({
      comparing: false,
      singleLens: 'Sonnar50f15',
    });
  });

  it('ignores invalid ?lens= key', () => {
    const result = parseComparisonParams('?lens=FakeLens', KEYS);
    expect(result).toEqual({ comparing: false });
  });

  it('prefers ?a=&b= over ?lens=', () => {
    const result = parseComparisonParams('?a=NikkorZ50f12&b=Nokton50f1&lens=Sonnar50f15', KEYS);
    expect(result.comparing).toBe(true);
    expect(result.lensKeyA).toBe('NikkorZ50f12');
  });

  it('allows same key for both a and b', () => {
    const result = parseComparisonParams('?a=Nokton50f1&b=Nokton50f1', KEYS);
    expect(result.comparing).toBe(true);
    expect(result.lensKeyA).toBe('Nokton50f1');
    expect(result.lensKeyB).toBe('Nokton50f1');
  });
});

describe('buildComparisonURL', () => {
  it('builds comparison URL with ?a=&b=', () => {
    const url = buildComparisonURL(true, 'NikkorZ50f12', 'Nokton50f1');
    expect(url).toBe('?a=NikkorZ50f12&b=Nokton50f1');
  });

  it('builds single-lens URL with ?lens=', () => {
    const url = buildComparisonURL(false, 'Sonnar50f15');
    expect(url).toBe('?lens=Sonnar50f15');
  });

  it('returns empty string when no key provided', () => {
    expect(buildComparisonURL(false, '')).toBe('');
    expect(buildComparisonURL(false, null)).toBe('');
  });

  it('encodes special characters in keys', () => {
    const url = buildComparisonURL(true, 'a b', 'c&d');
    expect(url).toContain('a%20b');
    expect(url).toContain('c%26d');
  });
});
