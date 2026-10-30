# Nikon AF-S NIKKOR 24-70mm f/2.8G ED Patent Audit

## 2026-06-24 Patent Recheck

Reviewed local untracked patent file `patents/US7508592.pdf`, Example 2 / Table 2 and FIG. 3.

### Prescription, Zoom, And Focus

- The data file remains aligned to Example 2: `f = 24.78 / 51.92 / 67.70 mm`, `FNO = 2.91`, and `2ω = 82.2° / 35.4°`.
- Table 2 variable gaps confirm the stored infinity zoom sequence for `d6`, `d12`, `d14`, `d20`, and `d25`.
- The patent describes focusing by moving front sub-group G2a toward the image side, but it does not publish close-focus variable gaps. The current close-focus values remain paraxial visualization estimates tied to Nikon's published close-focus behavior.

### Glass And APD

- Rechecked the two unresolved missing-Sellmeier rows:
  - L1 / S1: `nd=1.744429`, `νd=49.52`, now labeled `744495`.
  - L4 resin / S7: `nd=1.55389`, `νd=38.09`, now labeled `553381`.
- No coefficient-backed exact public catalog match was verified for L1. It remains an unmatched high-index lanthanum-crown-class row.
- The L4 resin shell is an optical replication layer, not catalog glass; it should remain an explicit resin/code annotation rather than be forced into a glass catalog name.
- The three ED rows at `nd=1.497820`, `νd=82.56` remain catalog-identified as HIKARI J-FKH1. Their `apd: "inferred"` status is still correct because the patent gives only `nd`/`νd`; any `nC`, `nF`, `ng`, or `dPgF` values come from the catalog match, not from US 7,508,592 itself.
- The patent has no `θgF`, `Pg,F`, `dPgF`, `nC`, `nF`, or `ng` tables for Example 2.

### Semi-Diameters

- US 7,508,592 does not publish per-surface clear apertures or effective diameters for Example 2.
- Current SDs remain renderer clear-aperture estimates. They make rational optical sense against FIG. 3: a large wide-angle front group, a reduced stop-adjacent G3, and a rear re-expansion through G4/G5 while keeping the hybrid-asphere and rear asphere within safe sag/slope limits.

## 2026-08-18 — Hoya M-NBF1 coefficient assignment

- Visually rechecked local `patents/US7508592.pdf`, PDF page 15, Example 2 / Table 2. Surface 1 remains `nd = 1.744429`, `νd = 49.52`.
- Relabeled L1 to coefficient-backed Hoya M-NBF1 as a catalog equivalent (`1.743300 / 49.326`), retaining patent code `744495` and the unspecified production supplier. No geometry changed.

## 2026-10-29 — F-mount surface and glass reinspection

Direct original-source review: `patents/US7508592.pdf`, Example 2 Figure 3 on PDF page 4 (600 dpi rotated crop), Table 2 on page 15; d-line definitions on page 14. Inspected all 16 media faces, including the hybrid interface and four cemented interfaces. Embedded figure raster is 300 dpi; approximately 3600 px across the wide-state 152.15 mm first-to-last vertex span gives about 11.8 native px/mm. All figure dimensions remain estimates.

Added rear-asphere S2A rim extension from the retained 29.8 mm optical cap to the existing 36 mm modeled outer height, following its clear shoulder. Other concave air faces meet their rims without a resolved cap-end stroke; no new cut is inferred. All optical SD/R/d, asphere coefficients, zoom/focus gaps and aperture remain unchanged.

All 16 nd/νd pairs agree with Table 2 at the d-line587.6nm, counting 15 physical elements plus one separately modeled replicated layer. No source partial-dispersion table or extra spectral-line indices is supplied. All three qualified ED/APD inferences remain, and no catalog-only overrides are introduced. Current catalog coverage is15/16; the 1.55389/38.09 layer remains unresolved. Qualified the bare supplier labels and removed the unsupported UV-curing specificity; material formulation/curing and production supplier remain unspecified. Public text now distinguishes the resolved coefficient curves from the absent per-lens spectral overrides.

| Medium | Source nd / νd | Current coefficient-backed proxy |
|---|---|---|
| L1 | 1.744429 / 49.52 | M-NBF1 |
| L2 | 1.618000 / 63.33 | S-PHM52 |
| L3 | 1.846660 / 23.78 | S-TIH53 |
| L4r | 1.553890 / 38.09 | Unresolved |
| L4g | 1.772499 / 49.6 | S-LAH66 |
| L5 | 1.761821 / 26.52 | S-TIH14 |
| L6 | 1.497820 / 82.56 | J-FKH1 |
| L7 | 1.882997 / 40.76 | S-LAH58 |
| L8 | 1.846660 / 23.78 | S-TIH53 |
| L9 | 1.729157 / 54.68 | S-LAL18 |
| L10 | 1.729157 / 54.68 | S-LAL18 |
| L11 | 1.805181 / 25.42 | S-TIH6 |
| L12 | 1.497820 / 82.56 | J-FKH1 |
| L13 | 1.516330 / 64.14 | S-BSL7 |
| L14 | 1.497820 / 82.56 | J-FKH1 |
| L15 | 1.805181 / 25.42 | S-TIH6 |

Selected coefficient curves remain unchanged and qualified spectral proxies; source indices and actual source partial dispersion remain authoritative. No tolerance was relaxed. Absolute-path candidate surface, image-circle and aperture audits pass; resolver/`assertCatalogConsistent()` pass. Nine actual native SVG focus/zoom states were rendered and visually inspected, with zero hidden rim trim. Shared dispersion/partial-dispersion suites passed2files/93tests for this wave. Coordinator records full gates and commit integration.
