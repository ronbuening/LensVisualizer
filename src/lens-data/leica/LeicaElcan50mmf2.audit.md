# Audit Log — Leica ELCAN 50mm f/2

Patent: US 3,649,104, Example 3

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/US3649104.pdf`.
- Example 3 row confirmed L3 / surface 5 nd = 1.7471, vd = 27.4.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L3 / S5 | `≈SF4 (dense flint)` | `747274 - dense flint...` | No exact public coefficient-backed match found; retained as unbroken six-digit code for future upgrade. |

### Analysis sync

- Updated the L3 glass paragraph and table row to describe the code-backed unresolved glass.

## 2026-06-24 — Folder audit recheck

- Rechecked local `patents/US3649104.pdf` OCR for Example 3.
- Retained L3 as `747274 - dense flint...`; the patent row is nd=1.7471, vd=27.4 and still has no verified coefficient-backed public match.
- Rechecked APD/high-index status: no anomalous partial-dispersion data are published, and all elements remain non-APD. L4 remains a high-index lanthanum-flint class assignment supported by the patent nd/vd row.
- No patent clear-aperture or semi-diameter table was found. Existing SDs remain renderer-safe estimates matched to the patent drawing proportions and f/2 ray geometry.
