import { describe, it, expect } from 'vitest';
import { sag, renderSag, sagSlope, thick, doLayout, formatDist,
         traceRay, traceRayChromatic, traceToImage, conjugateK,
         wavelengthNd,
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

describe('sagSlope', () => {
  it('returns 0 at h = 0', () => {
    const L = { S: [{ R: 50 }], asphByIdx: {} };
    expect(sagSlope(0, 0, L)).toBe(0);
  });

  it('returns 0 for flat surface', () => {
    const L = { S: [{ R: 1e15 }], asphByIdx: {} };
    expect(sagSlope(10, 0, L)).toBe(0);
  });

  it('computes correct slope for spherical surface', () => {
    const R = 50;
    const h = 10;
    const L = { S: [{ R }], asphByIdx: {} };
    const c = 1 / R;
    const expected = c * h / Math.sqrt(1 - c * c * h * h);
    expect(sagSlope(h, 0, L)).toBeCloseTo(expected, 10);
  });

  it('computes correct slope for negative R', () => {
    const R = -50;
    const h = 10;
    const L = { S: [{ R }], asphByIdx: {} };
    const c = 1 / R;
    const expected = c * h / Math.sqrt(1 - c * c * h * h);
    expect(sagSlope(h, 0, L)).toBeCloseTo(expected, 10);
  });

  it('matches finite-difference of renderSag for spherical surface', () => {
    const R = 30;
    const h = 8;
    const eps = 1e-6;
    const L = { S: [{ R }], asphByIdx: {} };
    const fd = (renderSag(h + eps, 0, L) - renderSag(h - eps, 0, L)) / (2 * eps);
    expect(sagSlope(h, 0, L)).toBeCloseTo(fd, 5);
  });

  it('matches finite-difference of renderSag for aspheric surface', () => {
    const R = 40;
    const h = 6;
    const eps = 1e-6;
    const asph = { K: -0.5, A4: 1e-5, A6: -2e-8, A8: 0, A10: 0, A12: 0, A14: 0 };
    const L = { S: [{ R }], asphByIdx: { 0: asph } };
    const fd = (renderSag(h + eps, 0, L) - renderSag(h - eps, 0, L)) / (2 * eps);
    expect(sagSlope(h, 0, L)).toBeCloseTo(fd, 4);
  });
});

describe('traceRay — exact Snell', () => {
  // Single positive element: two spherical surfaces with glass between
  const mkSingleElement = () => ({
    S: [
      { R: 50, nd: 1.5168, sd: 15, d: 5 },   // front surface
      { R: -50, nd: 1.0, sd: 15, d: 80 },     // rear surface
    ],
    N: 2,
    stopIdx: 0,
    clipMargin: 1.0,
    rayLead: 5,
    asphByIdx: {},
    varByIdx: {},
  });

  it('on-axis ray (h=0, u=0) passes through unchanged', () => {
    const L = mkSingleElement();
    const zPos = [0, 5];
    const { y, u, clipped } = traceRay(0, 0, zPos, 0, 15, false, L);
    expect(y).toBeCloseTo(0, 10);
    expect(u).toBeCloseTo(0, 10);
    expect(clipped).toBe(false);
  });

  it('small-h ray agrees closely with paraxial trace', () => {
    const L = mkSingleElement();
    const zPos = [0, 5];
    const h = 0.1;  // very small height
    const { y: yReal, u: uReal } = traceRay(h, 0, zPos, 0, 15, false, L);
    // traceRay stops at last surface; traceToImage propagates through final gap
    // Extrapolate real ray to image plane for comparison
    const imgZ = 5 + 80;  // last surface z + last d
    const lastSurfZ = zPos[1];
    const yRealAtImage = yReal + (imgZ - lastSurfZ) * uReal;
    const yParax = traceToImage(h, 0, 0, L);
    expect(yRealAtImage).toBeCloseTo(yParax, 3);
  });

  it('marginal ray shows undercorrected SA (focuses shorter than paraxial)', () => {
    const L = mkSingleElement();
    const zPos = [0, 5];
    const h = 12;  // near full aperture
    const { y: yReal, u: uReal } = traceRay(h, 0, zPos, 0, 15, false, L);
    // Extrapolate real ray to image plane
    const imgZ = 5 + 80;
    const lastSurfZ = zPos[1];
    const yRealAtImage = yReal + (imgZ - lastSurfZ) * uReal;
    // Paraxial image height
    const yParax = traceToImage(h, 0, 0, L);
    // Real ray at paraxial image plane should differ from paraxial (spherical aberration)
    expect(Math.abs(yRealAtImage - yParax)).toBeGreaterThan(0.01);
  });

  it('returns clipped=true on total internal reflection', () => {
    // Extreme case: high-index to low-index at steep angle
    const L = {
      S: [
        { R: 10, nd: 2.0, sd: 20, d: 5 },
        { R: 1e15, nd: 1.0, sd: 20, d: 10 },
      ],
      N: 2,
      stopIdx: 0,
      clipMargin: 1.0,
      rayLead: 1,
      asphByIdx: {},
      varByIdx: {},
    };
    const zPos = [0, 5];
    // Ray at steep angle entering high-index glass, then hitting flat exit surface
    const { clipped } = traceRay(9, 0.5, zPos, 0, 20, true, L);
    expect(clipped).toBe(true);
  });

  it('generates rendering points for each surface', () => {
    const L = mkSingleElement();
    const zPos = [0, 5];
    const { pts, clipped } = traceRay(5, 0, zPos, 0, 15, false, L);
    expect(clipped).toBe(false);
    // pts: lead point + 2 surface points + (no image extrapolation in traceRay itself)
    expect(pts.length).toBe(3);
  });
});

describe('wavelengthNd', () => {
  it('returns 1.0 for air regardless of channel', () => {
    expect(wavelengthNd(1.0, 64.17, 'R')).toBe(1.0);
    expect(wavelengthNd(1.0, 64.17, 'G')).toBe(1.0);
    expect(wavelengthNd(1.0, 64.17, 'B')).toBe(1.0);
  });

  it('returns nd for green channel', () => {
    expect(wavelengthNd(1.5168, 64.17, 'G')).toBe(1.5168);
  });

  it('red < nd < blue for dispersive glass', () => {
    const nd = 1.5168, vd = 64.17;
    expect(wavelengthNd(nd, vd, 'R')).toBeLessThan(nd);
    expect(wavelengthNd(nd, vd, 'B')).toBeGreaterThan(nd);
  });

  it('computes BK7 dispersion approximately', () => {
    // BK7: nd=1.5168, vd=64.17, nF-nC = (nd-1)/vd ≈ 0.00806
    const nd = 1.5168, vd = 64.17;
    const nR = wavelengthNd(nd, vd, 'R');
    const nB = wavelengthNd(nd, vd, 'B');
    expect(nB - nR).toBeCloseTo((nd - 1) / vd, 4);
  });

  it('returns nd when vd is undefined or 0', () => {
    expect(wavelengthNd(1.5, undefined, 'R')).toBe(1.5);
    expect(wavelengthNd(1.5, 0, 'B')).toBe(1.5);
  });
});

describe('traceRayChromatic', () => {
  const mkChromElement = () => ({
    S: [
      { R: 50, nd: 1.5168, sd: 15, d: 5 },
      { R: -50, nd: 1.0, sd: 15, d: 80 },
    ],
    N: 2,
    stopIdx: 0,
    clipMargin: 1.0,
    rayLead: 5,
    asphByIdx: {},
    varByIdx: {},
    vdByIdx: { 0: 64.17 },
  });

  it('green channel matches traceRay exactly', () => {
    const L = mkChromElement();
    const zPos = [0, 5];
    const ref = traceRay(5, 0, zPos, 0, 15, false, L);
    const chrom = traceRayChromatic(5, 0, zPos, 0, 15, false, L, 'G');
    expect(chrom.y).toBeCloseTo(ref.y, 10);
    expect(chrom.u).toBeCloseTo(ref.u, 10);
  });

  it('blue ray bends more than red ray', () => {
    const L = mkChromElement();
    const zPos = [0, 5];
    const red  = traceRayChromatic(5, 0, zPos, 0, 15, false, L, 'R');
    const blue = traceRayChromatic(5, 0, zPos, 0, 15, false, L, 'B');
    // Positive height, positive curvature → rays converge downward
    // Higher index (blue) bends more → more negative u (steeper convergence)
    expect(Math.abs(blue.u)).toBeGreaterThan(Math.abs(red.u));
  });

  it('all channels agree for on-axis ray', () => {
    const L = mkChromElement();
    const zPos = [0, 5];
    const red  = traceRayChromatic(0, 0, zPos, 0, 15, false, L, 'R');
    const blue = traceRayChromatic(0, 0, zPos, 0, 15, false, L, 'B');
    expect(red.y).toBeCloseTo(0, 10);
    expect(blue.y).toBeCloseTo(0, 10);
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
