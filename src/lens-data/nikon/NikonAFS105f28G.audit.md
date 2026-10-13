# Audit Log - Nikon AF-S VR Micro-NIKKOR 105mm f/2.8G IF-ED

Patent: US 7,218,457 B2, Example 3 / Table 3

## 2026-05-20 - Catalog-mismatch queue audit

### Patent evidence

- Local patent file checked: `patents/US7218457.pdf`.
- Example 4 / Table 4 rows confirmed from the local patent text:
  - S5 / L3: nd = 1.717360, vd = 29.52.
  - S9 / L5: nd = 1.582670, vd = 46.43.
  - S19 / L10: nd = 1.620410, vd = 60.29.
  - S21 / L11: nd = 1.806100, vd = 40.94.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L3 / S5 | `S-TIH13 (OHARA)` | `S-TIH1 (OHARA)` | Exact nd/vd catalog match. |
| L5 / S9 | `S-TIM22 (OHARA)` | `BAF3` | Exact Schott nd/vd catalog match already in catalog. |
| L10 / S19 | `S-LAL59 (OHARA)` | `S-BSM16 (OHARA)` | Exact nd/vd catalog match. |
| L11 / S21 | `S-TIH53...` | `S-LAH53 (OHARA)` | Exact nd/vd catalog match; removed weaker alternate wording. |

### Catalog-search disposition

- Checked public OHARA/Schott-backed catalog data and existing coefficient-backed entries.
- No new catalog entries were required.

### Analysis sync

- Updated affected element descriptions, glass table rows, and the catalog-identification note.

## 2026-08-11 - S-TIL6 catalog recovery

- Rendered local `patents/US7218457.pdf` page 24 and visually confirmed Example 3 / Table 3 surface 11 at
  `nd = 1.531720`, `vd = 48.87`.
- The recovered OHARA S-TIL6 polynomial carries code 532489 and differs by only `-0.000003` in d-line index and
  `-0.029` in Abbe number.
- Relabeled L6 as an S-TIL6 catalog equivalent while leaving Nikon's production supplier unspecified. No prescription
  geometry, focusing data, or aperture data changed.

## 2026-09-09 — First-added diagram audit, lens 37

Original Table 3 (PDF page 24) and Figures 9A–9C (page 10, 600 dpi) supersede the May entry's erroneous Example 4/Table 4 attribution. All source radii, thicknesses, indices and Abbe numbers are retained. Restored the middle focus station, source-distance slider mapping and f/2.88 first aperture setting. Corrected the eleven-component count and calculated isolated element focal lengths; qualified catalog names and removed unsupported L8 partial dispersion/APD. No cover glass or filter is present. Existing SDs pass figure review, surface/image-circle checks and four-state render diagnostics.

Follow-up: source BF drift contradicts its fixed-group narrative; rounded source conjugates differ from exact matrix solutions. Focus-dependent iris diameter and lateral VR are not modeled. These limitations and the production-association distinction are surfaced in the data/analysis.
