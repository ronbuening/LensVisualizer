# Audit Log - Carl Zeiss Hologon 15mm f/8

Patent: DE 1,241,637 B, single example  
Catalog version: local working tree, 2026-06-25

## 2026-06-25 - APD, high-index, and semi-diameter audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L_I, L_III | `glass`, `nd`, `vd` | `SF6 (Schott)` | Retained | The patent lists `nd = 1.80518`, `vd = 25.46` for both negative menisci, matching SF6. |
| L_II | `glass`, `nd`, `vd` | `LAK8 (Schott)` | Retained | The patent lists `nd = 1.71300`, `vd = 53.89` for the central positive element, matching the retained LAK8 class annotation. |

### Phase 2 - Retained-information audit

- Rechecked the sole patent example after x15 scaling. Radii, thicknesses, and the internal stop split through L_II remain consistent with the patent table and figure.
- Confirmed the patent does not list semi-diameters. Stored SDs remain figure-derived values constrained to stay inside tangent/full-radius limits for the near-hemispherical elements.
- The internal stop remains an optically neutral aperture plane inside L_II glass, matching the physical aperture placement described in the data header.

### Phase 3 - Spectral / metadata enrichment

- `apd: false` remains appropriate for all three elements. The patent gives no partial-dispersion data or APD claim.
- High-index status is already captured by the SF6 and LAK8 glass labels and analysis prose.

## 2026-08-18 - Central-element coefficient backfill

- Rendered and visually checked the image-only `patents/DE_1241637_B.pdf`. The example table on printed pages 5–6
  confirms the central L_II glass at `1.71300 / 53.89` and the two outer elements at `1.80518 / 25.46`.
- Assigned the existing N-LAK8 curve to L_II as a coefficient-backed equivalent in the historical LAK8 family;
  the production supplier remains unspecified. The outer SF6 rows were already resolved.
- No prescription or geometry value changed.

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 0.2 → 0.218 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 9.0 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: derived unit-focus travel; 0.2 m is the old (production) value.
- `catalog.closeFocusM.marketing` 0.2 m keeps the maker's figure; the focus readout names it beside the close-focus label where the two differ by more than 2 %.

## 2026-11-10 — Metadata fill

- `catalog.fNumber.design: 8` from DE 1,241,637 B col. 5, ll. 32–36, the summary block under the example table:
  "Öffnungsverhältnis … 1:8,0" (no text layer; read from a 110 dpi render). The stop's `nominalFNumber` 8 matches it.
- `catalog.focalLengthMm.design: 15` from the same block, "Brennweite f … 1,0000", times the ×15 scale in the data
  header. No optical value changed.
