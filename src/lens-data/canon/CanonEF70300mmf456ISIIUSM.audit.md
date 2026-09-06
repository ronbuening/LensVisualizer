# CanonEF70300mmf456ISIIUSM patent audit

## 2026-09-06 UTC

- Source: local `patents/US20170003486A1.pdf`, Example 5, Fig. 9, PDF page 10. Original PDF retained unchanged and untracked.
- Reviewed the exact embodiment at 600 dpi, distinguishing optical rims from brackets, arrows, and mechanical outlines.

### Semi-diameters

Retained published effective-diameter halves and the existing S10 12.15 mm cemented-interface ray-containment refinement. Automated median figure/data 1.052; E1-E16 normalized shape ratios 0.96-1.04. E17 1.55 is the nearby FS line, not the optical rim; the 600-dpi optical edge is consistent with the retained 15.9 mm extent.

### Glass and identity

Strict catalog coverage: 17/17 before, 17/17 after. All patent nd/vd coordinates are retained. Catalog matches describe spectral proxies, not production supplier identities. No new catalog entry was needed.

Removed proxy-derived nC/nF/ng/dPgF fields from the elements: the patent publishes only nd/vd. These fields override catalog lookup and would otherwise be treated as measured evidence. All 17 elements retain qualified OHARA catalog curves.

Normalized assignee metadata to the catalog spelling `Canon Inc.` where needed. Display names follow the data specification, including hyphenated ranges and parenthetical product-case camera names.

### Validation

`audit:image-circle` and `audit:surface` pass. The full-catalog rendering diagnostics cover hidden SD trims and cross-gap collisions. Static outlines from the production SVG path builder were visually compared with the patent. A five-zoom/three-focus render-diagnostic sweep found no material trims. Browser access was unavailable; no live UI verification is claimed. See the batch record for final repository gates.
