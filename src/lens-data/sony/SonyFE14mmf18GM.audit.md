# Audit Log - Sony FE 14mm f/1.8 GM

Patent: WO 2021/199923 A1, Numerical Example 1

## 2026-05-31 - Catalog-mismatch review

### Phase 1 - Glass corrections

| Element / surface | Before | After | Justification |
|---|---|---|---|
| L4 / S7 | `S-TIM28-class short flint...` | `694312 - short flint...` | Patent Table 1 row 7 gives nd=1.69416, vd=31.2. Public S-TIM28 is a different d-line row and resolves to nd=1.68893. No coefficient-backed exact 694312 entry is in the catalog. |
| L5 / S9 | `S-LAH95-class dense lanthanum flint...` | `910313 - dense lanthanum flint...` | Patent Table 1 row 9 gives nd=1.91048, vd=31.3. Public S-LAH95 resolves to nd=1.90366, outside the safety-net tolerance. |
| L10 / S18 | `S-NBH56-class dense flint...` | `863252 - dense flint...` | Patent Table 1 row 18 gives nd=1.86252, vd=25.2. Public S-NBH56 resolves to nd=1.85478. |
| L12 / S22 | `S-NBH56-class dense flint...` | `863252 - dense flint...` | Same patent glass as L10; row 22 repeats nd=1.86252, vd=25.2. |

No new catalog entries were added. WO 2021/199923 A1 publishes nd/vd and effective diameters, but not Sellmeier or usable vendor dispersion coefficients for 694312, 910313, or 863252.

### Phase 2 - Retained-information audit

- Patent Table 1 confirms the flagged surface nd/vd values and lists full effective diameters. Data `sd` values are half of the patent effective diameters: S7 24.92 -> 12.46, S9 20.98 -> 10.49, S18 21.81 -> 10.905, S22 24.11 -> 12.055.
- Patent Fig. 1 was checked against the stored SD profile. The large bulbous front element, taper toward the stop, and modest rear expansion match the data-file presentation.

### Phase 4 - Analysis sync

- Updated the analysis glass table and per-element text to use code-only patent glasses for L4, L5, L10, and L12.
