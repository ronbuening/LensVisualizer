import { describe, it, expect } from 'vitest';
import { sag, renderSag, thick, doLayout, formatDist,
         traceToImage, conjugateK,
         FLAT_R_THRESHOLD, FOCUS_INFINITY_THRESHOLD } from '../optics.js';

describe('sag', () => {
  it('returns 0 for h = 0', () => {
    expect(sag(0, 50)).toBe(0);
    expect(sag(0, -100)).toBeCloseTo(0, 10);
  });

  it('returns 0 for flat surface (R > threshold)', () => {
    expect(sag(10, 1e15)).toBe(0);
    expect(sag(10, -1e15)).toBe(0);
    expect(sag(10, Infinity)).toBe(0);
  });

  it('computes correct sag for positive R', () => {
    const result = sag(10, 50);
    // sag = (c·h²) / (1 + √(1 - c²·h²)), c = 1/50
    expect(result).toBeCloseTo(1.0102, 3);
  });

  it('computes correct sag for negative R', () => {
    const result = sag(10, -50);
    expect(result).toBeCloseTo(-1.0102, 3);
  });

  it('handles h near R (large angle)', () => {
    // h = R * sin(45°) ≈ 35.36 for R=50
    const h = 50 * Math.sin(Math.PI / 4);
    const result = sag(h, 50);
    expect(result).toBeGreaterThan(0);
    expect(isFinite(result)).toBe(true);
  });
});

describe('formatDist', () => {
  const mockL = { closeFocusM: 0.4 };

  it('returns ∞ for t near zero', () => {
    expect(formatDist(0, mockL)).toBe('∞');
    expect(formatDist(0.001, mockL)).toBe('∞');
  });

  it('formats meters for moderate distances', () => {
    // t=0.1 → d = 0.4/0.1 = 4.0 m
    expect(formatDist(0.1, mockL)).toBe('4.00 m');
  });

  it('formats cm for close distances', () => {
    // t=1.0 → d = 0.4/1 = 0.4 m = 40 cm
    expect(formatDist(1.0, mockL)).toBe('40 cm');
  });
});

describe('thick', () => {
  it('returns surface d when no variable spacing', () => {
    const L = { S: [{ d: 5.0 }], varByIdx: {} };
    expect(thick(0, 0, L)).toBe(5.0);
    expect(thick(0, 0.5, L)).toBe(5.0);
    expect(thick(0, 1.0, L)).toBe(5.0);
  });

  it('interpolates variable spacing', () => {
    const L = { S: [{ d: 5.0 }], varByIdx: { 0: [5.0, 10.0] } };
    expect(thick(0, 0, L)).toBe(5.0);
    expect(thick(0, 0.5, L)).toBe(7.5);
    expect(thick(0, 1.0, L)).toBe(10.0);
  });
});

describe('doLayout', () => {
  it('computes cumulative z positions', () => {
    const L = {
      S: [{ d: 2.0 }, { d: 3.0 }, { d: 5.0 }],
      varByIdx: {},
    };
    const { z, imgZ } = doLayout(0, L);
    expect(z).toEqual([0, 2.0, 5.0]);
    expect(imgZ).toBe(10.0);
  });
});

describe('named constants', () => {
  it('FLAT_R_THRESHOLD is 1e10', () => {
    expect(FLAT_R_THRESHOLD).toBe(1e10);
  });

  it('FOCUS_INFINITY_THRESHOLD is 0.003', () => {
    expect(FOCUS_INFINITY_THRESHOLD).toBe(0.003);
  });
});
