# Audit Log - Laowa 12mm f/2.8 Zero-D

Patent: CN205720849U / WO2017177665A1, Example 2

## 2026-05-19 - Missing-Sellmeier queue audit

### Patent evidence

- Local patent file checked: `patents/CN205720849U.pdf`.
- The PDF text layer is empty; pages were rendered locally from the gitignored PDF and the Example 2 table was checked visually.
- Example 2 rows confirmed:
  - surface 1 / L1: nd = 1.74916, vd = 54.67.
  - surface 8 / L5: nd = 1.83481, vd = 44.72.
  - surface 19 / L12: nd = 1.90366, vd = 29.31.
  - surface 26 / L16: nd = 1.80781, vd = 40.97.

### Catalog-search disposition

- Added CDGM `D-ZLAF81-25` from the public CDGM 2022 Zemax / refractiveindex.info coefficient row; it is the coefficient-backed `808410` match used for L16.
- No coefficient-backed public matches were found for `749547`, `835447`, or `904293`.

### Changes made

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L1 / S1 | `Unmatched high-index crown class (749/547)` | `749547 - high-index crown class ...` | Unresolved; explicit code retained. |
| L5 / S8 | `Unmatched high-index lanthanum class (835/447)` | `835447 - high-index lanthanum class ...` | Unresolved; explicit code retained. |
| L12 / S19 | `Unmatched dense flint class (904/293)` | `904293 - dense flint class ...` | Unresolved; explicit code retained. |
| L16 / S26 | `Unmatched high-index class (808/410)` | `D-ZLAF81-25 (CDGM)` | Coefficient-backed catalog match. |

### Analysis sync

- Updated the L1, L5, L12, and L16 narratives plus the glass-selection table.

## 2026-06-24 - Full local patent audit

### Phase 1 - Glass, APD, and high-index status

- Reopened local `patents/CN205720849U.pdf`; the PDF has no usable text layer, so the Example 2 prescription pages were rendered and checked visually.
- Reconfirmed the previously audited glass rows: L1 / `749547`, L5 / `835447`, and L12 / `904293` remain unresolved code-label rows, while L16 remains the catalog-backed CDGM `D-ZLAF81-25` match for `808410`.
- No APD or high-index metadata changes were made in this pass. The 1.49700 / 81.61 ED-class rows already remain explicitly marked as inferred from the index/Abbe class, with no patent partial-dispersion support.

### Phase 2 - Prescription and SD check

- Checked Example 2 at f = 12.5 mm, Fno = 2.87, half-field = 60.1 deg. Stored radii, thicknesses, nd/vd rows, aspheres 3/4/26/27, and the published variable gaps D4, D12, and LB match the patent table.
- The patent does not publish semi-diameters or effective diameters. The existing SDs remain renderer estimates, not patent-listed clear apertures.
- The SD envelope was checked against the rendered patent drawing and prescription geometry: the large front negative group, tight stop, and reopening rear field-corrector group are consistent with the figure and avoid irrational proportions or cross-gap overlap in the viewer. No SD values were changed.

### Phase 3 - Spectral / metadata enrichment

- The patent publishes only nd and vd for the glass rows. No nC, nF, ng, PgF, theta_gF, dPgF, or Sellmeier coefficient source was found in the local patent, so no spectral constants were added.

### Phase 4 - Analysis sync

- No analysis text changes were required for this pass.

### Verification

- `npm run generate:glass-reports` - passed.
- `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm run test`, and `npm run build` - passed.
