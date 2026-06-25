# Audit Log - Hasselblad HC Macro 4/120

Patent: JP 2004-302170 A, Example 4 / Table 4

## 2026-05-20 - Catalog-mismatch queue audit

### Patent evidence

- Local patent file checked: `patents/JP2004302170A.pdf`.
- The patent table is image-based in the local PDF; Table 4 was checked by rendering the local page.
- Example 4 / Table 4 rows confirmed:
  - S3 / L2: nd = 1.72342, vd = 38.0.
  - S8 / L4: nd = 1.67270, vd = 32.2.
  - S10 / L5: nd = 1.77250, vd = 49.6.
  - S14 / L7: nd = 1.80518, vd = 25.5.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L2 / S3 | `E-FD5 (HOYA)` | `S-BAH28 (OHARA)` | Exact nd/vd catalog match. |
| L4 / S8 | `E-FD4 (HOYA)` | `E-FD5 (HOYA)` | Exact nd/vd catalog match. |
| L5 / S10 | `TAFD30 (HOYA)` | `S-LAH66 (OHARA)` | Exact nd/vd catalog match. |
| L7 / S14 | `E-FD2 (HOYA)` | `S-TIH6 (OHARA)` | Exact nd/vd catalog match. |

### Catalog-search disposition

- Checked public OHARA/HOYA catalog data and existing coefficient-backed catalog entries.
- No new catalog entries were required.

### Analysis sync

- Updated the glass-selection table and source note to match the corrected labels.

## 2026-06-24 - APD, high-index, and SD audit

- Rechecked `patents/JP2004302170A.pdf`, Example 4 / Table 4, against the current data file.
- Confirmed no ED, fluorophosphate, KZFS, or patent-published partial-dispersion elements are present. No APD metadata was added.
- Confirmed the high-index elements remain L7 `S-TIH6` and L8 `NBFD10 (HOYA)` (nd >= 1.8). `NBFD10` remains the only unresolved/Sellmeier-missing glass disposition for this lens.
- Rendered and reviewed the patent drawing. The existing SD profile matches the macro layout: broad front group ahead of the stop, smaller rear negative/positive correction elements, and a final rear element sized for the 645 field. No SD edits were made.
- Verification: `npm run generate:glass-reports`, `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm run test`, and `git diff --check` passed.
