# Audit Log - Sigma 40mm F1.4 DG HSM Art

Patent: JP 2020-012952 A, Example 1

## 2026-05-20 - Catalog-mismatch queue audit

### Patent evidence

- Local patent file checked: `patents/JP2020012952A.pdf`.
- Example 1 rows confirmed from local patent text:
  - S7 / L4: nd = 1.64769, vd = 33.84.
  - S11 / L7: nd = 1.60342, vd = 38.01.
  - S22 / L13: nd = 1.64769, vd = 33.84.
  - S24 / L14: nd = 1.62588, vd = 35.74.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L4 / S7 | `E-FD15 (HOYA)` | `E-FD2 (HOYA)` | Exact nd/vd catalog match. |
| L7 / S11 | `E-F3 (HOYA)` | `S-TIM5 (OHARA)` | Exact nd/vd catalog match. |
| L13 / S22 | `E-FD15 (HOYA)` | `E-FD2 (HOYA)` | Same glass as L4. |
| L14 / S24 | `S-TIM35 (OHARA)` | `E-F1 (HOYA)` | Exact nd/vd catalog match. |

### Catalog-search disposition

- Checked public OHARA/HOYA catalog data and existing coefficient-backed catalog entries.
- No new catalog entries were required.

### Analysis sync

- Updated affected element descriptions, glass table rows, and source notes.

## 2026-07-29 — Dispersion-coordinate follow-up

- Corrected L6 from `M-FCD500 (HOYA)` to `FCD705 (HOYA)`, the exact 1.55032 / 75.50 catalog match.
- Corrected L16 from `S-NBH56 (OHARA)` to `M-TAFD305 (HOYA)`, the exact 1.85135 / 40.10 catalog match.
- Synchronized the element narratives, glass table, manufacturing note, and sources.

## 2026-07-29 - Catalog-coordinate correction

- Corrected L9 from modern `S-NPH2` to historical OHARA `PBH21`, the exact 1.92286 / 20.88 row.

## 2026-10-06 - L10 / L15 glass label

- Rechecked JP 2020-012952 A Example 1 rows 17 and 26 in the local PDF text: both print nd 1.59282, νd 68.63 and
  θgF 0.54, matching the stored values.
- Corrected L10 and L15 from `PCD51 (HOYA)` to `FCD515 (HOYA) / FCD505 class`. HOYA PCD51 is the 593/670 phosphate
  crown (nd 1.59349, νd 67.00, ΔPgF +0.0055); the patent pair is the HOYA fluorophosphate FCD515 / FCD505 coordinate
  (1.59282, νd 68.63 before HOYA's 2019 value update, 68.62 since; ΔPgF +0.0156), which also agrees with the stored
  dPgF 0.015. The label previously resolved to M-PCD51 through an alias (Δnd −8e-4, Δνd −1.6) and now resolves to
  FCD515 (Δnd 4e-6, Δνd −0.01).
- Synchronized the two element lines, the glass table, the `apdNote` wording (fluorophosphate, not phosphate) and the
  catalog source line. No geometry, nd, νd or dPgF changed.
