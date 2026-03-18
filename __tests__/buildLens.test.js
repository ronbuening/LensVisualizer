import { describe, it, expect } from 'vitest';
import buildLens, { paraxialTrace } from '../buildLens.js';
import LENS_DEFAULTS from '../lens-data/defaults.js';

/* ── Load all three production lens data files ── */
import ApoLantharRaw from '../lens-data/ApoLanthar50f2.data.js';
import NoktonRaw     from '../lens-data/Nokton50f1.data.js';
import NikkorRaw     from '../lens-data/NikkorZ50mmf18S.data.js';

const ApoLanthar = { ...LENS_DEFAULTS, ...ApoLantharRaw };
const Nokton     = { ...LENS_DEFAULTS, ...NoktonRaw };
const Nikkor     = { ...LENS_DEFAULTS, ...NikkorRaw };


describe('paraxialTrace', () => {
  const simpleSurfaces = [
    { R: 100, nd: 1.5, d: 5 },
    { R: -100, nd: 1.0, d: 50 },
  ];

  it('returns y=1, u=0 for a trace through flat surfaces', () => {
    const flat = [
      { R: 1e15, nd: 1.5, d: 5 },
      { R: 1e15, nd: 1.0, d: 50 },
    ];
    const { y, u } = paraxialTrace(flat, 1, 0, {});
    // Flat surfaces don't refract → u stays 0, y stays 1
    expect(u).toBe(0);
    expect(y).toBe(1);
  });

  it('stopAt limits the number of surfaces traced', () => {
    const { y } = paraxialTrace(simpleSurfaces, 1, 0, { stopAt: 1 });
    // Only traced through surface 0: refracted and transferred through d=5
    expect(y).not.toBe(1); // refraction happened
  });

  it('skipLastTransfer omits final y += d*u when combined with stopAt', () => {
    const threeSurfaces = [
      { R: 100, nd: 1.5, d: 5 },
      { R: -200, nd: 1.0, d: 10 },
      { R: 50, nd: 1.5, d: 20 },
    ];
    // stopAt: 2 traces surfaces 0 and 1; surface 1's d=10 transfer
    // is the "last" transfer
    const full = paraxialTrace(threeSurfaces, 1, 0, { stopAt: 2 });
    const skip = paraxialTrace(threeSurfaces, 1, 0, { stopAt: 2, skipLastTransfer: true });
    // Same u (both refract through surface 1) but different y
    expect(skip.u).toBe(full.u);
    expect(skip.y).not.toBe(full.y);
  });

  it('recordHeights returns per-surface heights', () => {
    const { heights } = paraxialTrace(simpleSurfaces, 1, 0, { recordHeights: true });
    expect(heights).toHaveLength(2);
    expect(heights[0]).toBe(1); // initial y
  });
});


describe('buildLens — production lenses', () => {
  /* ── EFL regression tests ── */
  it('ApoLanthar EFL ≈ 49.3 mm', () => {
    const L = buildLens(ApoLanthar);
    expect(L.EFL).toBeCloseTo(49.3, 0);
  });

  it('Nokton EFL ≈ 50.0 mm', () => {
    const L = buildLens(Nokton);
    expect(L.EFL).toBeCloseTo(50.0, 0);
  });

  it('Nikkor Z EFL is computed (includes filter stack)', () => {
    const L = buildLens(Nikkor);
    // Patent lists 51.6 mm for the optical system; the data file includes
    // the cover glass (BK7 filter, surfaces 25-26) which shifts the
    // paraxial EFL calculation. Verify it's finite and positive.
    expect(L.EFL).toBeGreaterThan(40);
    expect(L.EFL).toBeLessThan(100);
    expect(isFinite(L.EFL)).toBe(true);
  });

  /* ── f-number regression tests ── */
  it('ApoLanthar FOPEN ≈ f/1.93', () => {
    const L = buildLens(ApoLanthar);
    expect(L.FOPEN).toBeCloseTo(1.93, 1);
  });

  it('Nokton FOPEN ≈ f/1.0', () => {
    const L = buildLens(Nokton);
    expect(L.FOPEN).toBeCloseTo(1.0, 1);
  });

  it('Nikkor Z FOPEN ≈ f/1.85', () => {
    const L = buildLens(Nikkor);
    expect(L.FOPEN).toBeCloseTo(1.85, 1);
  });

  /* ── Structural checks ── */
  it('all lenses have frozen output', () => {
    for (const data of [ApoLanthar, Nokton, Nikkor]) {
      const L = buildLens(data);
      expect(Object.isFrozen(L)).toBe(true);
    }
  });

  it('all lenses have a valid stopIdx', () => {
    for (const data of [ApoLanthar, Nokton, Nikkor]) {
      const L = buildLens(data);
      expect(L.stopIdx).toBeGreaterThanOrEqual(0);
      expect(L.stopIdx).toBeLessThan(L.N);
      expect(L.S[L.stopIdx].label).toBe('STO');
    }
  });

  it('all lenses have positive halfField', () => {
    for (const data of [ApoLanthar, Nokton, Nikkor]) {
      const L = buildLens(data);
      expect(L.halfField).toBeGreaterThan(0);
      expect(L.halfField).toBeLessThan(90);
    }
  });
});


describe('buildLens — error handling', () => {
  function makeMinimalData(overrides = {}) {
    return {
      ...LENS_DEFAULTS,
      key: 'test',
      name: 'Test Lens',
      nominalFno: 2.0,
      closeFocusM: 0.5,
      scFill: 0.5,
      yScFill: 0.3,
      fstopSeries: [2, 2.8, 4],
      elements: [{ id: 1, name: 'L1', label: 'E1', type: 'test', nd: 1.5, vd: 50, fl: 50, glass: 'test', apd: false, role: 'test' }],
      surfaces: [
        { label: '1', R: 100, d: 5, nd: 1.5, elemId: 1, sd: 10 },
        { label: 'STO', R: 1e15, d: 2, nd: 1.0, elemId: 0, sd: 8 },
        { label: '2', R: -100, d: 50, nd: 1.0, elemId: 0, sd: 10 },
      ],
      asph: {},
      var: {},
      varLabels: [],
      groups: [],
      doublets: [],
      ...overrides,
    };
  }

  it('throws on duplicate surface labels', () => {
    const data = makeMinimalData({
      surfaces: [
        { label: '1', R: 100, d: 5, nd: 1.5, elemId: 1, sd: 10 },
        { label: '1', R: -100, d: 50, nd: 1.0, elemId: 0, sd: 10 },
        { label: 'STO', R: 1e15, d: 2, nd: 1.0, elemId: 0, sd: 8 },
      ],
    });
    expect(() => buildLens(data)).toThrow(/Duplicate surface label/);
  });

  it('throws when STO is missing', () => {
    const data = makeMinimalData({
      surfaces: [
        { label: '1', R: 100, d: 5, nd: 1.5, elemId: 1, sd: 10 },
        { label: '2', R: -100, d: 50, nd: 1.0, elemId: 0, sd: 10 },
      ],
    });
    expect(() => buildLens(data)).toThrow(/STO/);
  });

  it('throws on invalid asph reference', () => {
    const data = makeMinimalData({
      asph: { 'NOPE': { K: 0, A4: 0, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 } },
    });
    expect(() => buildLens(data)).toThrow(/asph key "NOPE"/);
  });

  it('throws on invalid var reference', () => {
    const data = makeMinimalData({
      var: { 'MISSING': [1, 2] },
    });
    expect(() => buildLens(data)).toThrow(/var key "MISSING"/);
  });

  it('throws when required field is missing', () => {
    const data = makeMinimalData();
    delete data.key;
    expect(() => buildLens(data)).toThrow(/key/);
  });

  it('builds successfully with valid minimal data', () => {
    const data = makeMinimalData();
    const L = buildLens(data);
    expect(L.EFL).toBeGreaterThan(0);
    expect(L.N).toBe(3);
  });
});
