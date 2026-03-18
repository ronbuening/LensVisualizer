import { describe, it, expect } from 'vitest';
import validateLensData from '../validateLensData.js';
import LENS_DEFAULTS from '../lens-data/defaults.js';

function makeValid(overrides = {}) {
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

describe('validateLensData', () => {
  it('returns empty array for valid data', () => {
    expect(validateLensData(makeValid())).toEqual([]);
  });

  it('catches missing required string fields', () => {
    const data = makeValid();
    delete data.key;
    const errors = validateLensData(data);
    expect(errors.some(e => e.includes('"key"'))).toBe(true);
  });

  it('catches missing required number fields', () => {
    const data = makeValid();
    delete data.nominalFno;
    const errors = validateLensData(data);
    expect(errors.some(e => e.includes('"nominalFno"'))).toBe(true);
  });

  it('catches missing required arrays', () => {
    const data = makeValid();
    delete data.fstopSeries;
    const errors = validateLensData(data);
    expect(errors.some(e => e.includes('"fstopSeries"'))).toBe(true);
  });

  it('catches duplicate surface labels', () => {
    const data = makeValid({
      surfaces: [
        { label: '1', R: 100, d: 5, nd: 1.5, elemId: 1, sd: 10 },
        { label: '1', R: -100, d: 2, nd: 1.0, elemId: 0, sd: 8 },
        { label: 'STO', R: 1e15, d: 50, nd: 1.0, elemId: 0, sd: 10 },
      ],
    });
    const errors = validateLensData(data);
    expect(errors.some(e => e.includes('Duplicate surface label'))).toBe(true);
  });

  it('catches missing STO surface', () => {
    const data = makeValid({
      surfaces: [
        { label: '1', R: 100, d: 5, nd: 1.5, elemId: 1, sd: 10 },
        { label: '2', R: -100, d: 50, nd: 1.0, elemId: 0, sd: 10 },
      ],
    });
    const errors = validateLensData(data);
    expect(errors.some(e => e.includes('STO'))).toBe(true);
  });

  it('catches duplicate element IDs', () => {
    const data = makeValid({
      elements: [
        { id: 1, name: 'L1', label: 'E1' },
        { id: 1, name: 'L2', label: 'E2' },
      ],
    });
    const errors = validateLensData(data);
    expect(errors.some(e => e.includes('Duplicate element id'))).toBe(true);
  });

  it('catches invalid asph label reference', () => {
    const data = makeValid({
      asph: { 'BOGUS': { K: 0, A4: 0 } },
    });
    const errors = validateLensData(data);
    expect(errors.some(e => e.includes('asph key "BOGUS"'))).toBe(true);
  });

  it('catches invalid var label reference', () => {
    const data = makeValid({
      var: { 'MISSING': [1, 2] },
    });
    const errors = validateLensData(data);
    expect(errors.some(e => e.includes('var key "MISSING"'))).toBe(true);
  });

  it('catches var with wrong-length array', () => {
    const data = makeValid({
      var: { '1': [5] },
    });
    const errors = validateLensData(data);
    expect(errors.some(e => e.includes('length 2'))).toBe(true);
  });

  it('catches invalid varLabels reference', () => {
    const data = makeValid({
      varLabels: [['NOPE', 'something']],
    });
    const errors = validateLensData(data);
    expect(errors.some(e => e.includes('varLabels label "NOPE"'))).toBe(true);
  });

  it('catches invalid group surface reference', () => {
    const data = makeValid({
      groups: [{ text: 'G1', fromSurface: '1', toSurface: 'MISSING' }],
    });
    const errors = validateLensData(data);
    expect(errors.some(e => e.includes('toSurface "MISSING"'))).toBe(true);
  });

  it('catches invalid doublet surface reference', () => {
    const data = makeValid({
      doublets: [{ text: 'D1', fromSurface: 'NOPE', toSurface: '1' }],
    });
    const errors = validateLensData(data);
    expect(errors.some(e => e.includes('fromSurface "NOPE"'))).toBe(true);
  });

  it('catches element with no surfaces', () => {
    const data = makeValid({
      elements: [
        { id: 1, name: 'L1' },
        { id: 99, name: 'Ghost' },
      ],
    });
    const errors = validateLensData(data);
    expect(errors.some(e => e.includes('Element 99'))).toBe(true);
  });

  it('catches elemId referencing nonexistent element', () => {
    const data = makeValid({
      surfaces: [
        { label: '1', R: 100, d: 5, nd: 1.5, elemId: 999, sd: 10 },
        { label: 'STO', R: 1e15, d: 2, nd: 1.0, elemId: 0, sd: 8 },
        { label: '2', R: -100, d: 50, nd: 1.0, elemId: 0, sd: 10 },
      ],
    });
    const errors = validateLensData(data);
    expect(errors.some(e => e.includes('elemId 999'))).toBe(true);
  });

  it('reports multiple errors at once', () => {
    const data = makeValid();
    delete data.key;
    delete data.name;
    const errors = validateLensData(data);
    expect(errors.length).toBeGreaterThanOrEqual(2);
  });
});
