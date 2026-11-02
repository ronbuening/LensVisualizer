# Audit Log — Nikon Gugutto Macro 120mm f/4.5

Patent: US 5,764,425, Example 4 / Table 4

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L2 / S2 | `glass` | `Unmatched (804/339 dense flint; exact public catalog match not identified)` | `804339 — dense flint (patent nd=1.80384, νd=33.89; exact public catalog match not identified)` | Local patent `patents/US5764425.pdf`, Table 4 row 2 lists nd=1.80384 and νd=33.89. The stored values match. |

### Catalog-search disposition

- Searched public catalog/refractiveindex.info-style sources for `804339` and the exact 1.80384 / 33.89 pair.
- No coefficient-backed exact match was found. Hikari E-LAFH2-class historical context remains plausible but not a current coefficient-backed assignment for this file.

### Analysis sync

- Updated the L2 narrative and glass table to use the unbroken `804339` code label.

## 2026-07-29 — Catalog coverage follow-up

- The catalog now contains coefficient-backed historical Hikari E-LAFH2 at exact code `804339`,
  `nd=1.80384`, and `vd=33.89`.
- Confirmed that the existing data label resolves to E-LAFH2 and updated the stale analysis/audit narrative that
  previously described the row as unresolved.

## 2026-10-30 — F-mount shape and glass review

The October 30, 2026 review directly inspected US 5,764,425 Fig. 7 (PDF page 8) at 600 dpi from the native 300 ppi scan, and Table 4 on PDF page 28. L3's concave front face has a distinct straight end stroke. Its existing 11.5 mm clear cap is retained, with a rim extension to the existing 14.3 mm outer height. The drawing's two halves give a cap/outer ratio of roughly 0.72–0.79; the one-native-pixel band is about ±0.008, separate from the larger drawing asymmetry. The adopted ratio 0.804 preserves the current clear cap and moves outward from the figure estimate. It changes the drawn body without removing any previously transmitted ray. The other continuous curves, shared cemented interface, fixed field stop, powered prescription and unit-focus motion remain unchanged.

All three source d-line pairs were rechecked: 1.58913/61.09 at L1/L3 and 1.80384/33.89 at L2. The current curves are S-BAL35 and E-LAFH2, qualified spectral proxies with the retained source anchors. The prior year-specific melt label is removed because the patent identifies neither a melt nor a supplier. No partial-dispersion or individual C/F/g measurement is supplied or invented; the existing curve identities and wavelength behavior are unchanged.

All three source prescriptions pass canonical surface, image-circle and nominal-aperture audits. Fuwatto/Gugutto format corners pass the traced check; Gyogyotto is checked with the independent vector probes described above. All 27 actual SVG states are finite with zero hidden trim. Powered radii, thicknesses, air spacings, source glass coordinates, stop stations, focus travel and validation tolerances are retained.
