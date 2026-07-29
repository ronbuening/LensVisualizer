# Audit Log — Sony Sonnar T* FE 35mm F2.8 ZA

Patent: JP 2015-41012 A, Example 1

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/JP2015041012A.pdf`.
- Example 1 rows confirmed the rounded patent glasses at S1 nd = 1.80000, vd = 25.46; S10 nd = 1.63000, vd = 34.57; and S12A nd = 1.68000, vd = 31.16.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L111 / S1 | `...S-TIH6...or FD60...` | `800255 - dense flint...` | No exact public coefficient-backed match found; retained as code-backed patent glass. |
| L132 / S10 | `NBFD11 (Hoya)` | `630346 - dense flint...` | Nearby E-F1 was not exact enough to force; retained as code-backed patent glass. |
| L133 / S12A | `S-TIM28 (OHARA)` | `680312 - dense flint...` | No exact public coefficient-backed match found; retained as code-backed patent glass. |

### Analysis sync

- Updated the glass table and element prose to describe these as code-backed unresolved glasses.

## 2026-06-23 - Sony folder patent audit / APD + SD review

- Rechecked local `patents/JP2015041012A.pdf` and the current analysis sidecar against the data file.
- Existing R/d/nd/vd, high-index/code-backed labels, APD metadata, and estimated SD profile remain consistent with the patent-backed prescription and prior relabel pass.
- No APD, high-index, glass-label, spacing, or SD edits were needed in this pass.
- Current generated glass reports show no active Sony catalog-mismatch row for this lens.

## 2026-07-29 - Patent-rounded glass disposition

- Rechecked local `patents/JP2015041012A.pdf`, Example 1. Stored R, d, nd, and νd remain unchanged.
- S2 and S9 `S-LAH55V (OHARA)` -> unmatched 830427 rounded lanthanum glass at 1.83000 / 42.72.
- S7A `L-BAL42 (OHARA)` -> unmatched 580595 rounded molded crown at 1.58000 / 59.46.
- The patent's two-decimal indices and undisclosed supplier do not support unique vendor identities. Synchronized
  the analysis while retaining S-LAH55V/TAFD5F and L-BAL42 as comparisons.
