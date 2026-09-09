# CanonPowerShotG3X patent audit

## 2026-09-06 UTC

- Source: local `patents/JP2016148731A.pdf`, Example 6, Fig. 11, PDF page 28. Original PDF retained unchanged and untracked.
- Reviewed the exact embodiment at 600 dpi, distinguishing optical rims from brackets, arrows, and mechanical outlines.

### Semi-diameters

Retained all published effective-diameter halves. Automated median figure/data 1.016 and normalized ratios 0.99-1.02 except L5, whose reading includes the adjacent larger L4 outline. The actual optical rim matches the smaller L5. Retained the existing gapSagFrac 0.95 supported by positive S17-S18 edge clearance.

### Glass and identity

Strict catalog coverage: 13/18 before, 18/18 after. All patent nd/vd coordinates are retained. Catalog matches describe spectral proxies, not production supplier identities. No new catalog entry was needed.

Resolved generic labels to existing S-FPL51 (L2/L3), S-BAL42 (L5), S-LAL13 (L8), and S-TIH6 (L12). Other coordinate-code matches remain compatible.

Normalized assignee metadata to the catalog spelling `Canon Inc.` where needed. Display names follow the data specification, including hyphenated ranges and parenthetical product-case camera names.

## 2026-09-06 UTC — screenshot follow-up

Rechecked Fig. 11 against the screenshot; retained published effective-diameter halves. Removed invented D-series cemented-pair callouts. L2/L3 now carry inferred UD/APD tags: Canon lists two UD elements plus one Hi-UD element, while these two patent rows uniquely have νd=81.5. The production-to-patent element mapping and supplier remain unconfirmed. The third Hi-UD member is not assigned without adequate placement evidence.

Camera-fixed wide→tele: B1/B3/B4/B5/B6 move objectward; B2 moves imageward. B3/B5 travel together. The patent's late-tele B6 reversal is not numerically sampled by the three published stations and remains an acknowledged interpolation limitation. B6 is the source focus group, but finite-focus movement remains unavailable, rather than invented from production MFD.

Surface/image-circle audits and the source-station, dispersion, and render-clearance regressions validate this follow-up; final repository gates are recorded in the batch record.
