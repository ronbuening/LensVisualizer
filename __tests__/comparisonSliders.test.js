import { describe, it, expect } from 'vitest';
import {
  computeFocusPair,
  computeAperturePair,
  formatSharedFocusDist,
  sharedFNumber,
  snapToCommon,
} from '../comparisonSliders.js';

/* ── Mock lens objects (only the fields these functions use) ── */
const lensA = { closeFocusM: 0.45, FOPEN: 1.0, maxFstop: 16 };
const lensB = { closeFocusM: 0.90, FOPEN: 1.93, maxFstop: 16 };

describe('computeFocusPair', () => {
  it('returns 0 for both at infinity (sharedT=0)', () => {
    const r = computeFocusPair(0, lensA, lensB);
    expect(r.focusA).toBe(0);
    expect(r.focusB).toBe(0);
  });

  it('computes correct common point', () => {
    const r = computeFocusPair(0, lensA, lensB);
    expect(r.commonPoint).toBeCloseTo(0.5, 5);
    expect(r.minCloseFocus).toBe(0.45);
    expect(r.maxCloseFocus).toBe(0.90);
  });

  it('at common point, less-capable lens is at t=1', () => {
    const r = computeFocusPair(0.5, lensA, lensB);
    expect(r.focusB).toBeCloseTo(1.0, 5);
    expect(r.focusA).toBeCloseTo(0.5, 5);
  });

  it('past common point, less-capable lens is clamped at 1', () => {
    const r = computeFocusPair(0.75, lensA, lensB);
    expect(r.focusB).toBe(1.0);
    expect(r.focusA).toBeCloseTo(0.75, 5);
  });

  it('at sharedT=1, closer-focusing lens is at t=1', () => {
    const r = computeFocusPair(1, lensA, lensB);
    expect(r.focusA).toBe(1.0);
    expect(r.focusB).toBe(1.0);
  });

  it('identical lenses: commonPoint=1, both track equally', () => {
    const same = { closeFocusM: 0.45, FOPEN: 1.2, maxFstop: 16 };
    const r = computeFocusPair(0.6, same, same);
    expect(r.commonPoint).toBeCloseTo(1.0, 5);
    expect(r.focusA).toBeCloseTo(0.6, 5);
    expect(r.focusB).toBeCloseTo(0.6, 5);
  });

  it('works when B focuses closer than A', () => {
    const r = computeFocusPair(0.5, lensB, lensA);
    expect(r.focusA).toBeCloseTo(1.0, 5);
    expect(r.focusB).toBeCloseTo(0.5, 5);
  });
});

describe('computeAperturePair', () => {
  it('returns 0 for faster lens and clamped 0 for slower at sharedT=0', () => {
    const r = computeAperturePair(0, lensA, lensB);
    expect(r.stopdownA).toBe(0);
    expect(r.stopdownB).toBe(0);
  });

  it('computes correct common point', () => {
    const r = computeAperturePair(0, lensA, lensB);
    expect(r.widerFOPEN).toBe(1.0);
    expect(r.narrowerFOPEN).toBe(1.93);
    expect(r.commonPoint).toBeGreaterThan(0);
    expect(r.commonPoint).toBeLessThan(1);
    /* commonPoint = log(1.93/1.0) / log(16/1.0) */
    const expected = Math.log(1.93 / 1.0) / Math.log(16 / 1.0);
    expect(r.commonPoint).toBeCloseTo(expected, 5);
  });

  it('at common point, slower lens just reaches wide open (stopdownT=0)', () => {
    const r0 = computeAperturePair(0, lensA, lensB);
    const r = computeAperturePair(r0.commonPoint, lensA, lensB);
    expect(r.stopdownB).toBeCloseTo(0, 3);
    expect(r.stopdownA).toBeGreaterThan(0);
  });

  it('past common point toward wider, slower lens stays clamped at 0', () => {
    const r0 = computeAperturePair(0, lensA, lensB);
    const pastCommon = r0.commonPoint / 2;
    const r = computeAperturePair(pastCommon, lensA, lensB);
    expect(r.stopdownB).toBe(0);
    expect(r.stopdownA).toBeGreaterThanOrEqual(0);
  });

  it('at sharedT=1, both are at max stopdown', () => {
    const r = computeAperturePair(1, lensA, lensB);
    expect(r.stopdownA).toBeCloseTo(1.0, 3);
    expect(r.stopdownB).toBeCloseTo(1.0, 3);
  });

  it('identical lenses: commonPoint=0, both track equally', () => {
    const same = { closeFocusM: 0.45, FOPEN: 1.2, maxFstop: 16 };
    const r = computeAperturePair(0.5, same, same);
    expect(r.commonPoint).toBe(0);
    expect(r.stopdownA).toBeCloseTo(r.stopdownB, 5);
  });
});

describe('formatSharedFocusDist', () => {
  it('returns infinity symbol near 0', () => {
    expect(formatSharedFocusDist(0, 0.45)).toBe("\u221e");
    expect(formatSharedFocusDist(0.002, 0.45)).toBe("\u221e");
  });

  it('returns close focus at t=1', () => {
    expect(formatSharedFocusDist(1, 0.45)).toBe("45 cm");
  });

  it('returns meters for larger distances', () => {
    expect(formatSharedFocusDist(0.1, 0.45)).toBe("4.50 m");
  });
});

describe('sharedFNumber', () => {
  it('returns widerFOPEN at t=0', () => {
    expect(sharedFNumber(0, 1.0, 16)).toBe(1.0);
  });

  it('returns maxFstop at t=1', () => {
    expect(sharedFNumber(1, 1.0, 16)).toBeCloseTo(16, 5);
  });

  it('returns intermediate value at t=0.5', () => {
    const f = sharedFNumber(0.5, 1.0, 16);
    expect(f).toBeGreaterThan(1.0);
    expect(f).toBeLessThan(16);
    expect(f).toBeCloseTo(4.0, 1);
  });
});

describe('snapToCommon', () => {
  it('snaps when within range', () => {
    expect(snapToCommon(0.502, 0.5, 0.008)).toBe(0.5);
  });

  it('does not snap when outside range', () => {
    expect(snapToCommon(0.52, 0.5, 0.008)).toBe(0.52);
  });

  it('returns raw value when commonPoint is 0', () => {
    expect(snapToCommon(0.002, 0, 0.008)).toBe(0.002);
  });

  it('returns raw value when commonPoint is 1', () => {
    expect(snapToCommon(0.998, 1, 0.008)).toBe(0.998);
  });
});
