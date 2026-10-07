# Audit Log - Sigma APO Macro 105mm F2.8 EX DG OS HSM

Patent: JP 2012-58682 A, Example 4

## 2026-05-31 - Catalog mismatch remainder audit

### Phase 1 - Glass correction

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| E16 / 27 | `glass` | `BACD5 (HOYA) / S-BAL35 class` | `M-BACD5N (HOYA)` | Patent Example 4 row 27 lists nd=1.58913, vd=61.25. The `BACD5` token aliases to Schott N-SK16 in the resolver, which is the wrong 1.62041-index glass for this row. The coefficient-backed Hoya M-BACD5N catalog entry round-trips the 589613 code. |

### Phase 2 - Patent and SD review

- Checked the local `patents/JP2012058682A.pdf` prescription for Example 4. Row 27 gives R=53.7454, d=4.6951, nd=1.58913, and vd=61.25, matching the stored surface and element values.
- Rendered Figure 31, the Example 4 lens-section figure. The figure matches the 16-element layout, moving-focus grouping, stop placement, and rear L3b triplet used by the data file.
- The patent does not publish clear apertures or semi-diameters for Example 4. The existing data-file SDs are renderer-safe estimates, so no SD edits were made.

### Phase 3 - Analysis sync

- Updated the E16 element note and glass-selection table from the legacy BACD5/S-BAL35 wording to M-BACD5N.
- Added a HOYA M-BACD5N source note to the analysis references.

## 2026-10-07 — Display name

Display name changed from `SIGMA APO Macro 105mm f/2.8 EX DG OS HSM` to `SIGMA MACRO 105mm f/2.8 EX DG OS HSM`. Sigma's
name for this lens is MACRO 105mm F2.8 EX DG OS HSM; the APO prefix belongs to the 150mm and 180mm macro lenses of
the same generation. The lens key and file name are unchanged.
