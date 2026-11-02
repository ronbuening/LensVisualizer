# Audit Log — NIKON AI AF-S NIKKOR ED 600mm f/4D II IF

Patent: US 5,745,306 A, Example 3 / Figure 7

## 2026-08-21 — Screenshot, patent-figure, diagram-metadata, and glass audit

### Phase 1 — Glass corrections

| Elements | Before | After | Justification |
|---|---|---|---|
| L11, L12, L14b | `J-FKH1-compatible ... proxy` | `J-FKH1 catalog equivalent` + inferred ED tag | These are the prescription's three `1.49782 / 82.52` positions and match Nikon's three-ED production specification. |
| L13, L14a | `804465 — high-index lanthanum class` | `TAF3D catalog equivalent` | `TAF3D` is the resolver's closest compatible coefficient curve; production supplier remains unspecified. |
| L21 | `788475 — lanthanum class` | `TAF4 catalog equivalent` | `TAF4` is the resolver's closest compatible coefficient curve; production supplier remains unspecified. |
| L22a, L22b | generic SF6/S-BSM81 classes | explicit `SF6` / `S-BSM81` catalog equivalents | Direct compatible catalog curves already existed and are now exposed in the element inspector. |
| L3a, L3b | generic J-PKH1/high-index-flint classes | explicit `J-PKH1` / `E-LAFH2` catalog equivalents | Both selections pass the runtime coordinate guard; neither is asserted as the production melt. |

### Phase 2 — Retained-information and semi-diameter audit

- Rendered the untracked local `patents/US5745306.pdf` at 600 dpi and compared PDF page 12 / Figure 7 with the supplied site screenshot.
- Retained all semi-diameters. The reliable front and middle element rims agree with the modeled taper inside the audit tolerance; rear automated outliers were caused by element numbers, group brackets, and leader lines crossing the measurement bands.
- `audit:surface` passes with no validation errors, and `audit:image-circle` reports zero undersized surfaces.

### Phase 3 — Diagram and movement metadata

- Corrected the display name to Nikon's period wording: `NIKON AI AF-S NIKKOR ED 600mm f/4D II IF`.
- Added patent identifiers `L11` through `L3b` as diagram labels and marked the three production-correlated ED positions as inferred rather than patent-listed material identities.
- Verified fixed-focal operation: there is no zoom travel. G2 alone moves `+10.8633 mm` imageward from infinity to the published close state; G1 and G3 remain fixed apart from a `0.0001 mm` source-rounding residual.

### Phase 4 — Analysis sync

- Synchronized the product title, explicit qualified glass labels, supplier caveats, and ED inference wording in the companion analysis.

## 2026-09-23 — Rear filter modeled as `rearPlates`

- Read Table 3 on local `patents/US5745306.pdf` page 23 at 160 dpi: surface 20 (S1) d = 36.5000; 21 (inactive S2) d = 2.0000; 22–23 is the rear filter, 2.0000 mm, nd 1.516800, νd 64.10; Bf = 115.6862 at both infinity and the R = 6000 close state. Printed 38.5 + 2.0/1.5168 + 115.6862 reproduces the previous folded 155.504765 exactly.
- `STO` now stores the physical 38.5 mm to the filter (the S21 plane is folded out), with `rearPlates` J-BK7A (Hikari, matching the file's other Hikari-equivalent labels; resolver-compatible for 1.5168 / 64.1) and gapAfter 115.6862 mm. The front protective plate (surfaces 1–2) stays omitted.
- Paraxial check against the previous data: EFL identical and defocus unchanged (worst |Δ| 1.4e-14 mm) at infinity and close focus. Physical track grows by 0.681435 mm, to 456.277700 mm from surface 3.

## 2026-10-04 — Slip-in filter drawn as an element

- The rear slip-in filter plate F moved out of `rearPlates` into the drawn prescription: surfaces 22–23 and element 11
  (`Plane-Parallel Plate`), with the same thickness, index and gaps. The lens is computed with the filter in place and
  a teleconverter mounts behind it, so it is part of the lens rather than a camera-side plate.
- The source lists no clear aperture for the plate. Its semi-diameter, 21 mm, is a ray-trace estimate: the largest
  height on the plate of any ray that reaches the 135 format or the diagram's off-axis field at infinity, mid and
  close focus (19.83 mm), plus 5%, rounded up to 0.5 mm. Not figure-audited.
- Before/after check: EFL, entrance pupil, stop radius, image plane, half-field, analysis half-field and the traced
  axial, mid-field, corner and diagram bundles are unchanged. `npm run audit:field-coverage` still reports 100% of the
  corner.

## 2026-10-29 — Fresh F-mount source, rim, and glass reinspection

- Directly inspected original `patents/US5745306.pdf`: Example 3 Fig. 7 on PDF p. 12 at 600 dpi (complete section plus front detail), Table 3 and explicit d-line 587.6 nm definitions on p. 23. Every convex/concave face and cemented boundary was checked. No resolved air-facing cap-end land supports a new extension or concave trim; existing compound steps require a cemented-interface feature and are retained. The source diameter-condition anchor, all powered R/d, active clear apertures, focus controls, and rear filter geometry remain unchanged; source front protective plate restoration is detailed below.
- Freshly checked all **10 powered-element nd/vd pairs**, drawn rear filter F, and source front protective plate separately. All source coordinates remain, including 1.804109/46.54 at L13/L14a and 1.787971/47.47 at L21. Current compatible curves cover all 12 modeled media after the front plate is restored with explicit supplier-unspecified proxy labels. Source publishes neither θgF nor C/F/g, so none is authored; three ED assignments retain their production-correlation inference rather than asserting patent-measured APD.
- Source p. 23 states that a filter is provided object-side of G1; Table 3 S1–2 specifies a 5 mm plane plate at 1.516800/64.10 followed by 1.2 mm air. No optional/removable clause was established. Restored this source-listed front plate as drawn media P1 (id 12), surfaces 1–2, with those exact gaps/indices and a supplier-unspecified J-BK7A proxy. Active elementCount/groupCount stay 10/7; both plates are counted separately. No inactive S21 or unnumbered S3 plane is invented, and no powered geometry or source conjugate is changed.
- Actual verification: focused surface and image-circle audits pass all three candidates (zero undersized/skipped); aperture audit passes all three stated axial beams after the PF cap correction. Native SVG output was inspected at nine focus/zoom states per lens (27 total), with zero renderer trims. Current resolver/catalog consistency passes. Shared dispersion/partial-dispersion suites were already run in this candidate wave (93 passing tests); no engine changes or per-lens tests were added.
- Approved source-complete restoration: a diagnostic copy of the existing complete beam search targets planes 1/2 without adding any rim cuts. With an initially generous 90 mm clear radius, the furthest full wide-open beam reaches S1 72.9840634 mm / S2 72.7820629 mm at focus 0.05, field 3.5104478°; zero sampled fields are untraced. Adopted square sd 77 mm = the maximum plus 5%, rounded up to 0.5 mm. Source does not publish that plate diameter; it remains an envelope estimate. All powered caps are untouched.
- Comparison with the former omitted-plate variant: EFL 587.792929452 mm and infinity BFL from the rear-filter last vertex 115.686575941 mm are identical. The original 115.6862 mm rear air is retained; its 0.000375941 mm residual is source rounding, not caused by the front omission. Full physical track is now 462.477700 mm (+6.2 mm); active surface-3 track remains 456.277700 mm. The source close geometry gives Gaussian object-to-image distance 5999.936977 mm (formerly 5998.233390 mm). Printed D0 5537.4340 mm gives B +0.002723107 mm; rounded model R 6000 mm gives B −0.006816625 mm. Updated all affected public omission, track, finite-focus, and residual descriptions. Focus/aperture/format checks and the nine-state native SVG trial all pass, with zero trims and at least 99% format-corner coverage.
