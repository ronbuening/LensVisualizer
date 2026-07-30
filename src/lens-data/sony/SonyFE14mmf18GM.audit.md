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

## 2026-06-23 - Sony folder patent audit / APD + SD review

- Rechecked local `patents/WO2021199923A1.pdf`; the PDF is image-only for text extraction, so this pass relies on the rendered-table checks and the prior retained-information audit above.
- Patent Table 1 had already confirmed the glass rows and full effective diameters; stored `sd` values remain half of those patent diameters where diameters are present.
- Updated L3, L8, and L9 to `apd: "inferred"` because their patent nd/vd rows and production special-glass counts map to ED/Super-ED fluorophosphate classes. No patent dPgF or theta-gF values are assigned.
- No R/d/nd/vd, spacing, high-index, or SD edits were needed in this pass.
- Current generated glass reports show no active Sony catalog-mismatch row for this lens.

## 2026-07-29 - Remaining catalog-mismatch disposition

- Rechecked Numerical Example 1 / Table 1 in local `patents/WO2021199923A1.pdf`; the stored R, d, and patent
  coordinates remain unchanged.
- S3 `S-LAL18-class` -> `Unmatched (732547 patent e-line value...)` for 1.73234 / 54.70.
- S24A `S-LAH89-class` -> `Unmatched (856401 patent e-line value...)` for 1.85639 / 40.10.
- S26 `S-PHM52-class` -> `Unmatched (622639 patent e-line value...)` for 1.62228 / 63.90.
- These family comparisons do not establish d-line catalog identities, so the analysis now preserves them only as
  comparisons and the resolver no longer borrows their Sellmeier rows.

## 2026-07-30 - Remaining 856401 line-reference audit

- Rechecked S24A against the expanded catalog. OHARA L-LAH85V is a nearby d-line coordinate, but the patent
  publishes `Ne = 1.85639` at the helium-e line and does not identify a glass or provide a d-line conversion.
- Kept S24A explicit unmatched `856401`; assigning L-LAH85V would conflate e-line and d-line coordinates.
- No prescription, asphere, focus, aperture, or semi-diameter values changed.

## 2026-07-30 - Reference-line metadata

- Added `indexReference: "e"` to L2, L13, and L14, the three Table 1 rows already verified as native e-line values.
- Other elements remain on the default d-line reference; this mixed assignment follows the retained source audit instead
  of treating the whole prescription as one spectral convention.
- The runtime and generated reports now reject d-line catalog substitution for those three rows structurally. No source
  values or prescription geometry changed.
