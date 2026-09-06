# CanonEFM1545mmf3563ISSTM patent audit

## 2026-09-06 UTC

- Source: local `patents/JP2016118658A.pdf`, Example 8, Fig. 15, PDF page 32. Original PDF retained unchanged and untracked.
- Reviewed the exact embodiment at 600 dpi, distinguishing optical rims from brackets, arrows, and mechanical outlines.

### Semi-diameters

Retained published effective-diameter halves and the calibrated iris. Automated median figure/data 1.099; most normalized shapes are within 15%. E2 samples adjacent front-element ink; rear E10 ENV/RIM disagree. Neither provides evidence to override the published apertures.

### Glass and identity

Strict catalog coverage: 7/10 before, 8/10 after. All patent nd/vd coordinates are retained. Catalog matches describe spectral proxies, not production supplier identities. No new catalog entry was needed.

Resolved E5 to existing S-LAL13. E2/E9 remain unmatched at 1.52996/55.8; no existing compatible curve was found. No polymer identity or invented spectral coefficients were assigned.

Normalized assignee metadata to the catalog spelling `Canon Inc.` where needed. Display names follow the data specification, including hyphenated ranges and parenthetical product-case camera names.

### Validation

`audit:image-circle` and `audit:surface` pass. The full-catalog rendering diagnostics cover hidden SD trims and cross-gap collisions. Static outlines from the production SVG path builder were visually compared with the patent. A five-zoom/three-focus render-diagnostic sweep found no material trims. Browser access was unavailable; no live UI verification is claimed. See the batch record for final repository gates.

## 2026-09-06 UTC — screenshot follow-up

Rechecked Fig. 15 optical rims against the screenshot; retained published effective-diameter halves, including the asymmetric outer surfaces. Removed the invented D1 callout. Group/element identifiers retain the source L2a IS and L3 focus assignment.

Wide→mid→tele L1 reverses (+5.28 then −2.17 mm relative to wide, camera fixed); L2a/L2b/L3/L4 move objectward, L5 stays fixed. L3 near-focus movement remains imageward.

The two 1.52996/55.8 coordinates remain unidentified. A candidate ZEONEX E48R polymer curve was rejected: the published Polyanskiy fit to Sultanova et al. (2009) yields nd≈1.530516, νd≈51.79195, outside the compatibility guard. No resin identity is inferred from the patent coordinate. See the batch record for sources.

Surface/image-circle audits and the source-station, dispersion, and render-clearance regressions validate this follow-up; final repository gates are recorded in the batch record.
