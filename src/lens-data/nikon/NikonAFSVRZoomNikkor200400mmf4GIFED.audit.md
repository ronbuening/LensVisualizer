# Audit Log — Nikon AF-S VR Zoom-Nikkor 200-400mm f/4G IF-ED

Patent: US 2005/0157403 A1, Example 1, Figure 1

## 2026-08-14 — Screenshot, patent-figure, label, and glass review

### Semi-diameters

- Figure 1 and the supplied screenshot agree on the front collector, focusing subgroup, and tapered G2–G4 relay. No reliable height difference exceeds the audit threshold.
- No SD change was justified. The image-circle audit remains clean.

### Labels and glass

- Added L11–L49 source identifiers as `diagramLabel` values and shortened the seven cemented-pair annotations to their D11–D48 identifiers, removing the rear label collision.
- Corrected the displayed product designation from `f/4 G` to `f/4G`.
- Marked L12, L13, L14, and L47 as inferred ED/APD because their shared `498826` coordinate exactly matches Nikon's four-ED production count.
- All 24 physical glasses already resolve to coordinate-compatible Sellmeier curves; no new catalog row was justified.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent surface-43 spacing (95.48637540084388 mm) with Table 1's physical rear stack (PDF p. 28,
  Example 1): d43 = 3.00 mm, then `rearPlates` BFL (the patent's "rear-inserting filter BFL", surfaces 44–45) 2.00 mm,
  nd 1.51680, νd 64.12, J-BK7A (coordinate-compatible; Nikon's usual Hikari vendor), and Bf = 91.16781 mm, printed
  identically at all three zoom states at infinity and closest focus.
- Paraxial check against the previous data: EFL identical and paraxial defocus unchanged at every zoom station and focus
  keyframe, because 3.00 + 2.00/1.51680 + 91.16781 reproduces the legacy value exactly. Physical track grows by
  0.681 mm (2.00 × (1 − 1/1.51680)).

## 2026-10-04 — Slip-in filter drawn as an element

- The rear slip-in filter plate BFL moved out of `rearPlates` into the drawn prescription: surfaces 44–45 and element
  25 (`Plane-Parallel Plate`), with the same thickness, index and gaps. The lens is computed with the filter in place
  and a teleconverter mounts behind it, so it is part of the lens rather than a camera-side plate.
- The source lists no clear aperture for the plate. Its semi-diameter, 19.5 mm, is a ray-trace estimate: the largest
  height on the plate of any ray that reaches the 135 format or the diagram's off-axis field at wide, mid and tele,
  each at infinity, mid and close focus (18.33 mm), plus 5%, rounded up to 0.5 mm. Not figure-audited.
- Before/after check: EFL, entrance pupil, stop radius, image plane, half-field, analysis half-field and the traced
  axial, mid-field, corner and diagram bundles are unchanged. `npm run audit:field-coverage` still reports 100% of the
  corner.

## 2026-10-30 — Fresh original-patent shape and glass reinspection

- Directly viewed `patents/US20050157403A1.pdf`: Example 1 Fig. 1 on PDF page 2, rendered/cropped at 600 dpi (native 300 ppi), and all Table 1 media/focus/zoom rows on PDF pages 27–28. Paragraph 0074 on PDF page 27 defines d = 587.6 nm. All convex/concave/cemented faces and both rear BFL faces were reviewed, excluding ray/leader/bracket ink from rims.
- Shape verdict: all geometry retained. No additional cap/flat-land endpoint is reliably resolved among shallow profiles and superimposed rays, so neither `rimExtensionSd` nor `rimCutDepthMm` is invented. Published group-diameter anchors, existing field-stop treatment, rear BFL plate and all pre-existing source-error/focus/zoom qualifications are preserved. All three nominal axial stations already clear; no raise proposal.
- Fresh glass verdict: all 25 modeled source nd/νd pairs (24 powered lenses plus rear BFL) retained; 25 compatible catalog curves. The source provides no per-element C/F/g indices, θgF or ΔPgF. All spectral fields/channels remain unchanged; curve names are qualified counterparts, not supplier/melt identification. The four existing production-correlated ED/APD-inferred positions remain positional inferences rather than patent-measured anomalous dispersion. The rear filter pair 1.5168/64.12 is directly printed in row 44. No additional front plate is printed in this example.
- Validation: surface/image-circle audits pass, all three traced nominal apertures within 3% (approximately f/4.08), no new cuts to probe. Nine focus/zoom SVGs finite and viewed, hidden trim zero. Independent 62-media batch guards confirm source pairs, compatibility and invariant R/d/aspheres/controls/tolerances/chromatic channels. Shared dispersion/resolver parity tests pass (2 files / 93 tests). No data or engine changes were necessary; current public coverage/provenance notes synchronized.
