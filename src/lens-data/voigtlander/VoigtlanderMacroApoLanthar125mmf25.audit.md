# Audit Log — Voigtlander Macro APO-Lanthar 125mm f/2.5 SL

Patent: JP 2002-090622 A, Example 2

## 2026-06-23 — Full Voigtländer local-patent sweep

- Local patent source: `patents/JP_2002090622_A.pdf` (untracked local file).
- Re-rendered the image-only PDF and visually rechecked Example 2, Table 2. The stored prescription is the patent table scaled by 1.25 to the production 125 mm focal length.
- Confirmed the split of patent D6 into the displayed L43-to-stop gap plus the inferred stop-to-L44 gap preserves the original total spacing.
- Updated L44 from `SF5 (Schott) / K-SFS5 (Sumita)` to `E-FD5 (HOYA, patent nd/vd match) / SF5-class dense flint` so the glass resolver uses an exact catalog proxy for nd=1.67270, vd=32.2.
- The patent does not list dPgF or semidiameters. The ED dPgF values on L42/L43 remain catalog-inferred from S-FPL51, and the SDs remain ray/envelope-derived display apertures.

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/JP_2002090622_A.pdf`.
- Example 2 row confirmed L47 / surface 12 nd = 1.58913, vd = 61.3.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L47 / S12 | `S-BAL14 (OHARA) / K-BAL14 (Sumita)` | `S-BAL35 (OHARA)` | Public OHARA catalog row matches the patent nd/vd pair. |

### Analysis sync

- Updated the L47 element paragraph and glass table.
