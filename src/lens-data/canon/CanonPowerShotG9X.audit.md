# CanonPowerShotG9X patent audit

## 2026-09-06 UTC

- Source: local `patents/JP2016161889A.pdf`, Example 1, Fig. 1, PDF page 20. Original PDF retained unchanged and untracked.
- Reviewed the exact embodiment at 600 dpi, distinguishing optical rims from brackets, arrows, and mechanical outlines.

### Semi-diameters

Enlarged the front and rear groups to match the optical rims. The automatic RIM detector cannot establish a full axial span on the faint scanned figure after two attempts, so its ratios were rejected. Manual 600-dpi measurements use approximately 44.9 mm per 1000 pixels across the active glass and independently about 20.6 mm per 459 pixels from S6 to S15. Optical half-heights are about 210, 190, and 200 pixels for L11, L12, L31, giving approximately 9.4, 8.5, and 9.0 mm. Labels, leaders, and the excluded cover block are outside these measurements.

| Surfaces | Before (mm) | After (mm) |
|---|---:|---:|
| 1A / 2A | 6.2 | 9.4 |
| 3 / 4 | 6.1 | 8.5 |
| 14 / 15A | 5.7 | 9.0 |

Central surfaces and STO are unchanged. Revised aspheric departures: S1A -217.0 um, S2A -770.6 um, S15A +99.8 um. Surface scans show no turnover within these apertures. These are diagram-derived modeling estimates, not published clear apertures.

### Glass and identity

Strict catalog coverage: 6/8 before, 7/8 after. All patent nd/vd coordinates are retained. Catalog matches describe spectral proxies, not production supplier identities. No new catalog entry was needed.

Corrected TAFD307 to M-TAFD307. Independently checked the existing six polynomial coefficients, nd 1.88202, vd 37.22, and code 882372 against the [HOYA July 7 catalog](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf), accessed September 6. L23 remains unmatched at 1.84660/20.6; ordinary catalog flints near that index have incompatible Abbe numbers. Romanized the local patent inventor as Akihiko Yuki, consistent with the [same inventor in JP2017037199A](https://patents.google.com/patent/JP2017037199A/ja). Added Canon to the parenthetical camera name.

Normalized assignee metadata to the catalog spelling `Canon Inc.` where needed. Display names follow the data specification, including hyphenated ranges and parenthetical product-case camera names.

### Validation

`audit:image-circle` and `audit:surface` pass. The full-catalog rendering diagnostics cover hidden SD trims and cross-gap collisions. Static outlines from the production SVG path builder were visually compared with the patent. A five-zoom/three-focus render-diagnostic sweep found no material trims. Browser access was unavailable; no live UI verification is claimed. See the batch record for final repository gates.

## 2026-09-06 UTC — screenshot follow-up

Rechecked Fig. 1 against the screenshot and retained the enlarged L11/L12/L31 rims plus the validated central apertures. The numbered 24/27 cemented assemblies are genuine patent callouts and remain visible.

Backfilled all five Example-1 θgF ratios from PDF pp. 12–13 as normal-line deviations: L11 −0.0043296; L21 −0.0069518; L22/L26 −0.0024254; L23 +0.0084492. Absolute spectral line indices remain unauthored. L23 receives a patent-backed APD tag and a dPgF-corrected Abbe model; its special SnO-rich candidate family has no defensible public Sellmeier identity. Strict catalog coverage remains 7/8.

Camera-fixed L1 reverses at mid (+2.63 then −1.61 mm relative to wide), L2 moves objectward, L3 imageward. The independently moving stop is preserved. No finite-focus table is published and no focus travel is fabricated.

Surface/image-circle audits and the source-station, dispersion, and render-clearance regressions validate this follow-up; final repository gates are recorded in the batch record.
