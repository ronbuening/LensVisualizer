# CanonEF35mmf2ISUSM patent audit

## 2026-09-06 UTC

- Source: local `patents/US20150205081A1.pdf`, Example 1, Fig. 1, PDF page 2. Original PDF retained unchanged and untracked.
- Reviewed the exact embodiment at 600 dpi, distinguishing optical rims from brackets, arrows, and mechanical outlines.

### Semi-diameters

Retained all SDs. The 600-dpi optical rims support the broad front group and narrower rear group. Automated outliers at Gis and the last asphere sample leader/bracket ink or the curved interior; manual optical-rim inspection does not support those values. Smaller rear values would replace the authored ray-envelope estimates without strong figure evidence.

### Glass and identity

Strict catalog coverage: 10/10 before, 10/10 after. All patent nd/vd coordinates are retained. Catalog matches describe spectral proxies, not production supplier identities. No new catalog entry was needed.

Normalized assignee metadata to the catalog spelling `Canon Inc.` where needed. Display names follow the data specification, including hyphenated ranges and parenthetical product-case camera names.

## 2026-09-06 UTC — screenshot follow-up

Revisited the screenshot against Fig. 1 at 600 dpi. Accepted inferred SD changes:

| Surfaces | Before (mm) | After (mm) | Evidence |
| --- | --- | --- | --- |
| S1/S2 | 25.5/21.0 | 25.2/25.2 | Level front-meniscus rim, about 625 pixels at 0.0403 mm/pixel |
| S5/S6 | 16.4/14.2 | 15.2/12.6 | Optical contour excludes the drawn mounting flange |
| S13/S14 | 11.1/11.1 | 10.5/10.5 | Gis optical half-height about 260 pixels |
| S18A/S19 | 14.5/14.5 | 11.9/11.9 | Final asphere optical half-height about 295 pixels |

Retained S3/S4 = 21 mm: a 22 mm trial violated cross-gap clearance. Rejected 11.8 mm E4, 11.2 mm Lc, and uniform 11 mm rear cemented rims because exact rays clipped at central surfaces and the internal S16 interface. The accepted prescription preserves the default infinity 0.6-field ±0.75-pupil fan. S18A departure is now approximately −302.4 µm; no turnover. Full-field vignetting remains possible.

Moved the source Gis callout above the element to separate it from the nested L2 focus label; removed the invented J2 callout. Lc remains source-backed. Focus remains L1 fixed and L2 objectward by 8.223332 mm at the reconstructed 0.24 m endpoint.

Surface/image-circle audits and the source-station, dispersion, and render-clearance regressions validate this follow-up; final repository gates are recorded in the batch record.
