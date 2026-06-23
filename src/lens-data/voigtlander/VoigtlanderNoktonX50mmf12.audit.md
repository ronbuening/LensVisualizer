# Audit Log — Voigtlander Nokton 50mm f/1.2 X-Mount

Patent: JP 2025-58577 A, Example 1

## 2026-06-23 — Full Voigtländer local-patent sweep

- Local patent source: `patents/JP2025058577A.pdf` (untracked local file).
- Rechecked Example 1, Table 1. The stored R, d, nd, and vd values match the patent table.
- Confirmed the patent-provided ray-height anchors Hh=19.75 mm at surface 1 and Hs=10.54 mm at surface 10. Existing display SDs of 21.0 mm and 11.5 mm retain roughly 6–9% clearance, so no SD reduction was made.
- Updated L32 from `E-ADF50 (HOYA)` / APD false to `S-NBH5 (OHARA) / N-KZFS5 (Schott) / E-ADF50 class` with inferred APD. This is an exact `654397` catalog-class match; the patent lists nd/vd only, so the APD note remains catalog-inferred rather than patent-stated.
- The patent does not print dPgF or full semidiameter columns.

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/JP2025058577A.pdf`.
- Example 1 rows confirmed L14 nd = 1.74077, vd = 27.74 and L15 nd = 1.76182, vd = 26.58.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L14 / S7 | `S-TIH14 (OHARA)` | `S-TIH13 (OHARA)` | Public OHARA catalog match for the patent nd/vd pair. |
| L15 / S9 | `S-TIH18 (OHARA)` | `S-TIH14 (OHARA)` | Public OHARA catalog match for the patent nd/vd pair. |

### Analysis sync

- Updated the L14/L15 glass sections and summary text.
