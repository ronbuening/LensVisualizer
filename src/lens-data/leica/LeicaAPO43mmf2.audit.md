# Audit Log - Leica APO-Summicron 43mm f/2 ASPH. (Q3 43)

Patent: US 2024/0241349 A1, Example 1

## 2026-05-19 - Missing-Sellmeier queue audit

### Patent evidence

- Local patent file checked: `patents/US20240241349A1.pdf`.
- The local PDF is image-only; Table 1A was checked via local page render and public patent text.
- Example 1 / Table 1A rows confirmed:
  - surface 5 / L3: nd = 1.59282, vd = 68.6.
  - surface 9 / L5: nd = 1.58660, vd = 59.0.
  - surface 22 / L11: nd = 1.58660, vd = 59.0.

### Catalog-search disposition

- Matched L3 to existing coefficient-backed HOYA `FCD515` (`593686`).
- Added Sumita `K-SKLD200` from the official Sumita datasheet; it is the coefficient-backed `587590` match used for L5 and L11.

### Changes made

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L3 / S5 | `593/686 (PK crown, uncertain ID)` | `FCD515 (HOYA)` | Exact catalog match. |
| L5 / S9 | `587/590 (HOYA FDS family / PGM)` | `K-SKLD200 (Sumita)` | Exact catalog match. |
| L11 / S22 | `587/590 (HOYA FDS family / PGM)` | `K-SKLD200 (Sumita)` | Same glass as L5. |

### Analysis sync

- Updated glass-selection, APD, and aspheric-manufacturing notes for FCD515 and K-SKLD200.

## 2026-05-20 - Catalog-mismatch queue audit

### Patent evidence

- Local patent file checked: `patents/US20240241349A1.pdf`.
- The local PDF is image-only; Example 1 / Table 1A was checked by rendering the local page.
- Rows confirmed:
  - S3 / L2: nd = 2.00069, vd = 25.5.
  - S6 / L4: nd = 1.76182, vd = 26.6.
  - S11 / L7: nd = 1.95375, vd = 32.3.
  - S16A / L10: nd = 1.55332, vd = 71.7.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L2 / S3 | `S-NPH4 (OHARA)` | `TAFD40 (HOYA)` | Exact nd/vd catalog match. |
| L4 / S6 | `S-TIH6 (OHARA)` | `S-TIH14 (OHARA)` | Exact nd/vd catalog match. |
| L7 / S11 | `S-LAH99 / TAFD33 (OHARA)` | `S-LAH98 (OHARA)` | Exact nd/vd catalog match. |
| L10 / S16A | `S-FPM3 / L-FPM3 (OHARA)` | `M-FCD500 (HOYA)` | Exact nd/vd catalog match. |

### Catalog-search disposition

- Checked public OHARA/HOYA catalog data and existing coefficient-backed catalog entries.
- No new catalog entries were required.

### Analysis sync

- Updated the glass-selection table, element notes, and index-range summary.

## 2026-06-24 - Folder audit recheck

- Re-rendered local image-only patent `patents/US20240241349A1.pdf` and checked Example 1 / Table 1A on the rendered page.
- Current glass assignments remain supported by the table rows and the previous May 2026 catalog audit. No code-only or unresolved Leica APO 43 glass remains in the generated missing-Sellmeier queues.
- Rechecked APD/high-index status: FCD515 and M-FCD500 remain the APD contributors; TAFD40, S-LAH98, and S-NPH53/TAFD30 remain high-index or ultra-high-index assignments supported by their patent nd/vd values.
- The patent defines numerical tables as radius, spacing, nd, vd, and aspheric coefficients only; no clear-aperture or semi-diameter table was found. Existing SDs remain ray/drawing estimates.
