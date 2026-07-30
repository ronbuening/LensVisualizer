# Audit Log — OLYMPUS ZUIKO AUTO-MACRO 50mm f/2

Patent: US 4,708,445, Embodiment 6

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Patent evidence

- Reviewed the actual local file `patents/US4708445.pdf`.
- Embodiment 6 confirms the relevant rows:
  - L4: nd = 1.58144, νd = 40.75
  - L5: nd = 1.68250, νd = 44.65
  - L6: nd = 1.72000, νd = 46.03

### Glass corrections

| Element | Before | After | Disposition |
|---|---|---|---|
| L4 | `581/408 (short flint family)` | `PBL25 (OHARA, 581408)` | Existing coefficient-backed catalog entry. |
| L5 | `683/447...` | `683447 — barium/lanthanum flint family...` | No exact public coefficient-backed match found; kept unresolved. |
| L6 | `720/460...` | `S-LAM61 (OHARA, 720460)` | Existing coefficient-backed catalog entry. |

### Catalog-search disposition

- Public catalog search resolved `581408` and `720460` to existing coefficient-backed entries.
- Search for `683447` found no exact coefficient-backed public match.
- Updated analysis element notes, glass summary, and the production-scale prescription table.

## 2026-07-29 — Dispersion-coordinate follow-up

- Corrected L2 from `S-LAL59 (729/547)` to `S-LAL18 (OHARA; 729/547)`. S-LAL18 exactly matches 1.72916 / 54.68 and the embedded code; S-LAL59 has νd = 51.47.
- Synchronized all L2 glass references in the analysis.

## 2026-07-29 - Remaining catalog-mismatch audit

- Rechecked US 4,708,445 Embodiment 6 surfaces 5, 12, and 14 after the documented normalization scale; all three rows retain the patent's 1.77250 / 49.66 coordinate and the stored `R`/`d` values.
- Replaced the false HOYA `LAC14` attribution on L3, L7, and L8 with code-first `773497` lanthanum-crown wording. The nearest coefficient-backed rows are 773496 and do not establish the patent supplier.
- Synchronized all three analysis sections and the prescription table. No geometry changed.

## 2026-07-30 - `773497` catalog-equivalent review

- Revisited the three `1.77250 / 49.66` rows against the full coefficient-backed catalog.
- Schott N-LAF34 (`1.77250 / 49.62`, code `773496`) retains the exact index and differs by only `-0.04` in Abbe
  number, within the runtime safety window.
- Relabeled L3, L7, and L8 as N-LAF34 catalog equivalents while leaving the production supplier unidentified.
  Synchronized the analysis and prescription table; no geometry changed.

## 2026-07-30 - Remaining 683447 source audit

- Rechecked L5 at `nd = 1.68250`, `vd = 44.65` against the expanded current and discontinued-inclusive catalogs.
- No verified first-party coefficient row is inside the runtime d-line safety window; family cross-references alone
  do not justify borrowing a dispersion curve.
- Reworded L5 as explicit unmatched `683447`; no prescription, focus, aperture, or semi-diameter values changed.
