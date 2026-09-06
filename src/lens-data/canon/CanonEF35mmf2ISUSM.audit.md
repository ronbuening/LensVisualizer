# CanonEF35mmf2ISUSM patent audit

## 2026-09-06 UTC

- Source: local `patents/US20150205081A1.pdf`, Example 1, Fig. 1, PDF page 2. Original PDF retained unchanged and untracked.
- Reviewed the exact embodiment at 600 dpi, distinguishing optical rims from brackets, arrows, and mechanical outlines.

### Semi-diameters

Retained all SDs. The 600-dpi optical rims support the broad front group and narrower rear group. Automated outliers at Gis and the last asphere sample leader/bracket ink or the curved interior; manual optical-rim inspection does not support those values. Smaller rear values would replace the authored ray-envelope estimates without strong figure evidence.

### Glass and identity

Strict catalog coverage: 10/10 before, 10/10 after. All patent nd/vd coordinates are retained. Catalog matches describe spectral proxies, not production supplier identities. No new catalog entry was needed.

Normalized assignee metadata to the catalog spelling `Canon Inc.` where needed. Display names follow the data specification, including hyphenated ranges and parenthetical product-case camera names.

### Validation

`audit:image-circle` and `audit:surface` pass. The full-catalog rendering diagnostics cover hidden SD trims and cross-gap collisions. Static outlines from the production SVG path builder were visually compared with the patent. A five-zoom/three-focus render-diagnostic sweep found no material trims. Browser access was unavailable; no live UI verification is claimed. See the batch record for final repository gates.
