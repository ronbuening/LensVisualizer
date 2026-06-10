# Audit Log - Canon EF 24-70mm f/2.8L USM

Patent: JP 2014-41222 A, Numerical Example 1

## 2026-06-10 - Patent prescription and zoom-direction audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| All elements | `nd`, `vd`, line indices | Current data | No change | Patent table in paragraph 0065 matches the stored d-line indices, Abbe numbers, and published `nC` / `nF` / `ng` values. |

### Phase 2 - Retained-information audit

- Confirmed against `patents/JP2014041222A.pdf`, Numerical Example 1.
- Surface radii, thicknesses, and element refractive indices match the patent surface table for surfaces 1-31. The data uses `SSP` for patent surface 14 and `STO` for patent surface 20 by local convention.
- Aspherical coefficients for surfaces 1 and 31 match the patent table, with standard conic constant `K = 0`.
- Infinity zoom positions are correctly ordered as wide / middle / tele: 24.90 mm, 35.13 mm, and 68.14 mm.
- Infinity variable gaps match the patent table:

| Gap | Wide | Middle | Tele |
|---|---:|---:|---:|
| D6 | 55.36 | 31.61 | 3.78 |
| D13 | 2.90 | 6.51 | 20.41 |
| D20 | 19.24 | 15.64 | 1.73 |
| D25 | 1.19 | 3.58 | 10.91 |
| D29 | 3.99 | 9.73 | 13.28 |

- Zoom behavior is not reversed. The patent labels the columns `広角 / 中間 / 望遠`, and paragraph 0033 describes the same wide-to-tele motion stored here: G1 moves imageward; G2, G3, G4, and G5 move objectward; G6 remains fixed.
- The modeled close-focus state is consistent with paragraph 0058: the fifth group moves imageward from infinity to close focus. In data terms, D25 increases and D29 decreases while conserving D25 + D29 at each zoom position.

### Phase 3 - Spectral / metadata enrichment

- No data changes required. The file already includes the patent-published line indices, anomalous partial-dispersion notes for the special glass and ED element, patent year, element count, group count, mount, format, and focus description.

### Phase 4 - Analysis sync

- No analysis changes required. The companion analysis file already documents the patent reference, wide-to-tele zoom motion, and the modeled close-focus caveat consistently with the audited data.

### Verification

- Ran a local `tsx` comparison of the `.data.ts` surface table and infinity `var` rows against the patent values; all checked values passed.
