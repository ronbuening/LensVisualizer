# Audit Log — Nikon AF-S Fisheye NIKKOR 8-15mm f/3.5-4.5E ED

Patent: JP 2017-068114 A, Example 1 / Figure 1.

## 2026-08-06 — New-lens patent-figure, glass, and identity audit

- Rendered patent page 40 and rotated Figure 1 to the project orientation. The page raster has unequal axial/cross-axis scaling, so its absolute figure/data scale is not trustworthy; the relative group silhouette supports the stored ray-envelope SDs. The nearly contacting surfaces 12/13 remain source- and validator-limited at 5.5882 mm. No SD changed.
- All stored SDs pass the image-circle floor and surface-geometry checks across the authored zoom and focus states.
- Added first-party HIKARI formula-3 catalog records for J-LAF2, J-BAF10, and J-F5, closing the named-glass Sellmeier gaps in this prescription.
- Corrected the display name to `NIKON AF-S FISHEYE NIKKOR 8-15mm f/3.5-4.5E ED`.
- Romanized the three inventor names as Tetsushi Miwa, Hiroshi Yamamoto, and Haruo Sato in both lens metadata and analysis prose.

## 2026-08-06 — Screenshot display and element-label audit

- Rechecked the supplied viewer screenshot against Example 1 / Figure 1. The 18 element forms, five cemented interfaces, single asphere on surface 3A, and stored semi-diameters remain source-consistent across the authored zoom/focus states; both focused geometry audits pass.
- Added the patent identifiers `L11` through `L213` to the diagram. Removed displayed cemented-pair shorthands `D1`–`D5` because the patent uses `D1` and `D2` for variable air gaps; inspector badges identify each cemented pair by its member identities instead.
- Reconfirmed the Nikon display designation and the romanized inventor names Tetsushi Miwa, Hiroshi Yamamoto, and Haruo Sato. The patent supplies Abbe data but no partial-dispersion evidence, so no APD flag was added.

## 2026-09-23 — Inventor romanization

- The JP 2017-068114 A front page names 三輪 哲史 at Nikon, the same Nikon inventor as the US front pages of US 2010/0220400 A1, US 2018/0031811 A1, and US 2021/0026133 A1, which all publish `Satoshi Miwa`. Normalized the inventor from Tetsushi Miwa to the corpus-canonical Satoshi Miwa in lens metadata and analysis prose, superseding the romanization recorded above.

## 2026-10-29 — Native-figure height restoration and fresh glass reinspection

- Directly viewed `patents/JP2017068114A.pdf`: Figure 1, PDF page 40 at 600 dpi plus original 300 dpi embedded raster; Table 1, pages 16–17; d-line definition, page 15. Every face, including all cemented interfaces, was inspected. Native vertex span ≈779 px / 90.98368 mm gives 8.56 px/mm; S1/S2 center thickness independently gives ≈22 px / 2.5992 mm =8.46 px/mm. Spherical curvature supports this scale, superseding the earlier anisotropy rationale. Schematic scatter is a few percent, not manufacturing precision.
- Front clear SDs change S1 18.9→30.6, S2 14.15→16.3, S3A 10.7→17.3, S4 9.55→13.8, S5 8.35→13.6, S6 7.9→12.5, S7 7.9→12.3, S8 7.15→12.3, S9 6.5→10.6, S10 6.3→11.4 mm. Exposed rear S2/S4/S6/S9 gain outer extensions 30.6/17.3/13.6/11.4 mm; S19 preserves clear 5.65 with outer 6.45 mm. Native edge radii ≈271/148/116/105/56 px give q≈0.57±0.006 /0.80±0.012 /0.90±0.017 /0.93±0.020 /0.85±0.034; adopted q=.533/.798/.919/.930/.876. No cemented land or inferred axial cut is authored.
- Source q≈.57 at S2 would require a roughly 17.4 mm cap. The unchanged sd/|R|=.9 bound allows at most16.33527 mm;16.34 fails. Adopt16.3: rim slope63.9038°, outer thickness5.72066 mm. No tolerance/source-depth bypass. S3A coefficients remain source-exact; at new17.3 mm radius its actual sag2.263033462 mm minus conic sag2.557717590 mm gives departure−294.684128 µm, synchronized publicly. All other G2 caps and preexisting gapSagFrac=1.0 remain unchanged.
- All eighteen d-line source `nd`/`νd` pairs are exact and retained; all eighteen resolve to qualified catalog spectral proxies. M-PCD51 and FC5 are current curves for previously neutral labels, not production identifications. No source line-index/partial-dispersion table or source APD designation is supplied; no spectral fields are invented and APD remains false.
- Surface/image-circle audits pass. Three aperture stations are iris-limited within3% of source design FNO. Nine actual SVG states have eighteen finite paths, zero trim, and source-like front bodies. Fresh vector-launch comparison:825 rays/model; all380 baseline passes retained,0 lost,144 gained. All75 finite-object axial samples at the published near distances pass before/after. Extreme field chief-ray bracketing and pupil clipping remain unresolved; no full-field unvignetted claim. Source-coordinate/catalog checks and shared dispersion/parity/partial tests pass (3 files,94 tests).
