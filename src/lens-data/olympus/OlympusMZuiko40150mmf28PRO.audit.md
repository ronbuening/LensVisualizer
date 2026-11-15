# Audit Log - OLYMPUS M.ZUIKO DIGITAL ED 40-150mm f/2.8 PRO

Patent: US 2015/0168697 A1, Example 4

## 2026-05-19 - Glass relabel audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / S1 | `glass` | `S-TIH18 (OHARA)` | `S-TIH23 (OHARA)` | Example 4 row 1 lists nd=1.78470, vd=26.29; S-TIH23 matches the stored pair. |
| L4 / S6 | `glass` | `S-TIH4 (OHARA)` | `S-NPH1 (OHARA)` | Example 4 row 6 lists nd=1.80810, vd=22.76; S-NPH1 round-trips the patent pair. |
| L6 / S8 | `glass` | `S-BAH27 (OHARA)` | `S-NBH55 (OHARA)` | Example 4 row 8 lists nd=1.80000, vd=29.84; S-NBH55 is the catalog match. |
| L7 / S10 | `glass` | `S-LAM66 (OHARA)` | `S-LAH55V (OHARA)` | Example 4 row 10 lists nd=1.83481, vd=42.73; S-LAH55V matches. |
| L10 / S16 | `glass` | `S-BSM81 (OHARA)` | `FCD515 (HOYA)` | Example 4 row 16 lists nd=1.59282, vd=68.63; FCD515 round-trips the stored pair. |
| L13 / S21 | `glass` | `S-NBH53V (OHARA)` | `S-LAM60 (OHARA)` | Example 4 row 21 lists nd=1.74320, vd=49.29; S-LAM60 is the closest catalog match. |
| L14 / S23 | `glass` | `S-TIM25 (OHARA)` | `S-TIM2 (OHARA)` | Example 4 row 23 lists nd=1.62004, vd=36.26; S-TIM2 matches. |

### Phase 2 - Retained-information audit

- Checked the flagged rows against Example 4 surface data; stored nd/vd values match the patent.
- Existing zoom/focus variable gap narrative and asphere sections remain consistent with the patent text.

### Phase 3 - Spectral / metadata enrichment

- No additional line-index or dPgF data was present in the extracted Example 4 table for these rows.
- Top-level patent metadata was already present.

### Phase 4 - Analysis sync

- Updated element narratives and glass summary rows for the corrected labels.

## 2026-11-14 — Published finite conjugates

Patent: US 2015/0168697 A1, Example 4.

| State (zoom/keyframe) | Field | Before | After | Paraxial offset (mm) | Offset (depths of focus) | Other reference (depths) | Verdict |
|---|---|---|---|---|---|---|---|
| 0/1 | `focus.conjugates` | absent | 700 mm, `image-plane` | -0.009138966 | -0.917755 | -70.787921 | consistent |
| 1/1 | `focus.conjugates` | absent | 700 mm, `image-plane` | -0.030241767 | -3.001282 | -217.178694 | consistent |
| 2/1 | `focus.conjugates` | absent | 700 mm, `image-plane` | -0.095334387 | -9.665689 | -723.714606 | consistent |

Source: US 2015/0168697 A1, Example 4, Unit separation (PDF p. 38, printed p. 15), a distance between an object and an image is 0.7 m.

Distance-reference basis: `patent-defined`. The patent states: “a distance between an object and an image is 0.7 m”

- State 0/1: D5=2.56328, D11=53.22784, D19=3.12034, BF=2.5, D22=17.25696 mm. The printed finite-spacing column matches these authored gaps.
- State 1/1: D5=30.41889, D11=25.3723, D19=6.98082, BF=2.75153, D22=13.14454 mm. The printed finite-spacing column matches these authored gaps.
- State 2/1: D5=53.87892, D11=1.91217, D19=12.71907, BF=3.64447, D22=6.51353 mm. The printed finite-spacing column matches these authored gaps.

Residuals retain the authored prescription and image plane. Every declared state already has its published-focus flag.
