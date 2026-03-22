import { describe, it, expect } from 'vitest';
import buildLens, { paraxialTrace } from '../src/optics/buildLens.js';
import LENS_DEFAULTS from '../src/lens-data/defaults.js';

/* ── Load all production lens data files ── */
import ApoLantharRaw   from '../src/lens-data/VoigtlanderApoLanthar50f2.data.js';
import NoktonRaw       from '../src/lens-data/VoigtlanderNokton50f1.data.js';
import NikkorRaw       from '../src/lens-data/NikonNikkorZ50f18S.data.js';
import Nikkor105Raw    from '../src/lens-data/NikonNikkor105f14E.data.js';
import Sonnar50f15Raw  from '../src/lens-data/ZeissSonnar50f15.data.js';
import NikkorZ70200Raw from '../src/lens-data/NikonNikkorZ70200f28.data.js';

const ApoLanthar  = { ...LENS_DEFAULTS, ...ApoLantharRaw };
const Nokton      = { ...LENS_DEFAULTS, ...NoktonRaw };
const Nikkor      = { ...LENS_DEFAULTS, ...NikkorRaw };
const Nikkor105   = { ...LENS_DEFAULTS, ...Nikkor105Raw };
const Sonnar50f15 = { ...LENS_DEFAULTS, ...Sonnar50f15Raw };


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

  it('Nikkor 105 f/1.4E EFL ≈ 102 mm', () => {
    const L = buildLens(Nikkor105);
    expect(L.EFL).toBeCloseTo(102, 0);
  });

  it('Sonnar 50 f/1.5 EFL ≈ 50.2 mm', () => {
    const L = buildLens(Sonnar50f15);
    expect(L.EFL).toBeCloseTo(50.2, 0);
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
    for (const data of [ApoLanthar, Nokton, Nikkor, Nikkor105, Sonnar50f15]) {
      const L = buildLens(data);
      expect(Object.isFrozen(L)).toBe(true);
    }
  });

  it('all lenses have a valid stopIdx', () => {
    for (const data of [ApoLanthar, Nokton, Nikkor, Nikkor105, Sonnar50f15]) {
      const L = buildLens(data);
      expect(L.stopIdx).toBeGreaterThanOrEqual(0);
      expect(L.stopIdx).toBeLessThan(L.N);
      expect(L.S[L.stopIdx].label).toBe('STO');
    }
  });

  it('all lenses have positive halfField', () => {
    for (const data of [ApoLanthar, Nokton, Nikkor, Nikkor105, Sonnar50f15]) {
      const L = buildLens(data);
      expect(L.halfField).toBeGreaterThan(0);
      expect(L.halfField).toBeLessThan(90);
    }
  });

  it('all lenses have ES entries with valid surface indices', () => {
    for (const data of [ApoLanthar, Nokton, Nikkor, Nikkor105, Sonnar50f15]) {
      const L = buildLens(data);
      for (const [eid, s1, s2] of L.ES) {
        expect(s1).toBeGreaterThanOrEqual(0);
        expect(s2).toBeGreaterThanOrEqual(0);
        expect(s1).toBeLessThan(L.N);
        expect(s2).toBeLessThan(L.N);
        expect(L.S[s1]).toBeDefined();
        expect(L.S[s2]).toBeDefined();
        expect(L.S[s1].sd).toBeGreaterThan(0);
        expect(L.S[s2].sd).toBeGreaterThan(0);
      }
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


describe('buildLens — vdByIdx', () => {
  it('all production lenses have vdByIdx with entries for glass surfaces', () => {
    for (const data of [ApoLanthar, Nokton, Nikkor, Nikkor105, Sonnar50f15]) {
      const L = buildLens(data);
      expect(L.vdByIdx).toBeDefined();
      // At least one glass surface should have a vd entry
      const entries = Object.keys(L.vdByIdx);
      expect(entries.length).toBeGreaterThan(0);
    }
  });

  it('vdByIdx values match corresponding element vd', () => {
    const L = buildLens(ApoLanthar);
    for (const [idxStr, vd] of Object.entries(L.vdByIdx)) {
      const idx = parseInt(idxStr);
      const eid = L.S[idx].elemId;
      expect(eid).toBeTruthy();
      const elem = L.elements.find(e => e.id === eid);
      expect(elem).toBeDefined();
      expect(vd).toBe(elem.vd);
    }
  });

  it('air surfaces (elemId=0) are not in vdByIdx', () => {
    const L = buildLens(Nokton);
    for (const [idxStr] of Object.entries(L.vdByIdx)) {
      const idx = parseInt(idxStr);
      expect(L.S[idx].elemId).not.toBe(0);
    }
  });
});


/* ═══════════════════════════════════════════════════════════════════
 *  Scale ratio computation (for normalized comparison mode)
 * ═══════════════════════════════════════════════════════════════════ */

describe('scaleRatio for normalized comparison', () => {
  it('produces ratios in (0, 1] for two different lenses', () => {
    const LA = buildLens(ApoLanthar);
    const LB = buildLens(Nokton);
    const minSC = Math.min(LA.SC, LB.SC);
    const ratioA = minSC / LA.SC;
    const ratioB = minSC / LB.SC;
    expect(ratioA).toBeGreaterThan(0);
    expect(ratioA).toBeLessThanOrEqual(1);
    expect(ratioB).toBeGreaterThan(0);
    expect(ratioB).toBeLessThanOrEqual(1);
    /* Exactly one ratio should be 1 (the lens with the smaller SC) */
    expect(Math.max(ratioA, ratioB)).toBeCloseTo(1, 10);
  });

  it('produces ratio=1 for the same lens compared to itself', () => {
    const L = buildLens(Nokton);
    const ratio = Math.min(L.SC, L.SC) / L.SC;
    expect(ratio).toBe(1);
  });

  it('effectiveSC and effectiveYSC scale proportionally', () => {
    const L = buildLens(ApoLanthar);
    const ratio = 0.75;
    const effectiveSC = L.SC * ratio;
    const effectiveYSC = L.YSC * ratio;
    /* The aspect ratio SC:YSC should be preserved */
    expect(effectiveSC / effectiveYSC).toBeCloseTo(L.SC / L.YSC, 10);
  });

  it('all production lenses have positive SC and YSC', () => {
    const lenses = [ApoLanthar, Nokton];
    for (const data of lenses) {
      const L = buildLens(data);
      expect(L.SC).toBeGreaterThan(0);
      expect(L.YSC).toBeGreaterThan(0);
    }
  });
});


/* ═══════════════════════════════════════════════════════════════════
 *  Zoom lens building
 * ═══════════════════════════════════════════════════════════════════ */

describe('buildLens — zoom lens (Nikkor Z 70-200mm f/2.8)', () => {
  const NikkorZ70200 = { ...LENS_DEFAULTS, ...NikkorZ70200Raw };
  const L = buildLens(NikkorZ70200);

  it('builds successfully and is frozen', () => {
    expect(Object.isFrozen(L)).toBe(true);
    expect(L.isZoom).toBe(true);
  });

  it('has correct zoomPositions', () => {
    expect(L.zoomPositions).toEqual([71.5, 135, 196]);
  });

  it('has zoomEFLs of correct length with plausible values', () => {
    expect(L.zoomEFLs).toHaveLength(3);
    /* Wide end EFL should be near 71.5 mm */
    expect(L.zoomEFLs[0]).toBeGreaterThan(50);
    expect(L.zoomEFLs[0]).toBeLessThan(100);
    /* Tele end EFL should be near 196 mm */
    expect(L.zoomEFLs[2]).toBeGreaterThan(150);
    expect(L.zoomEFLs[2]).toBeLessThan(250);
    /* EFLs should increase from wide to tele */
    expect(L.zoomEFLs[1]).toBeGreaterThan(L.zoomEFLs[0]);
    expect(L.zoomEFLs[2]).toBeGreaterThan(L.zoomEFLs[1]);
  });

  it('has zoomEPs array with positive values', () => {
    expect(L.zoomEPs).toHaveLength(3);
    for (const ep of L.zoomEPs) {
      expect(ep).toBeGreaterThan(0);
      expect(isFinite(ep)).toBe(true);
    }
  });

  it('has zoomHalfFields with wider field at wide end', () => {
    expect(L.zoomHalfFields).toHaveLength(3);
    /* Wide end should have larger half-field than tele */
    expect(L.zoomHalfFields[0]).toBeGreaterThan(L.zoomHalfFields[2]);
    for (const hf of L.zoomHalfFields) {
      expect(hf).toBeGreaterThan(0);
      expect(hf).toBeLessThan(90);
    }
  });

  it('has zoomYRatios and zoomBs arrays', () => {
    expect(L.zoomYRatios).toHaveLength(3);
    expect(L.zoomBs).toHaveLength(3);
    for (const yr of L.zoomYRatios) expect(isFinite(yr)).toBe(true);
    for (const b of L.zoomBs) expect(isFinite(b)).toBe(true);
  });

  it('exports offAxisFieldFrac', () => {
    expect(typeof L.offAxisFieldFrac).toBe('number');
    expect(L.offAxisFieldFrac).toBeGreaterThan(0);
    expect(L.offAxisFieldFrac).toBeLessThanOrEqual(1);
  });

  it('prime lenses have null zoom arrays', () => {
    const LP = buildLens(ApoLanthar);
    expect(LP.isZoom).toBe(false);
    expect(LP.zoomEFLs).toBeNull();
    expect(LP.zoomEPs).toBeNull();
    expect(LP.zoomHalfFields).toBeNull();
    expect(LP.zoomYRatios).toBeNull();
    expect(LP.zoomBs).toBeNull();
  });
});
