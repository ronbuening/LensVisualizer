# Audit Log - Nikon AI AF-S NIKKOR ED 500mm f/4D IF

Patent: US 5,745,306 A, Example 2, Fig. 4 (PDF page 7)

## 2026-08-16 - Screenshot-led patent figure and metadata audit

### Semi-diameters

- Rechecked the current cross-section directly against Fig. 4. The prior integration correction reducing terminal L3c surfaces 22/23 from `20.3 / 20.5` mm to `16.5 / 17.0` mm matches the visibly smaller final element in the source.
- The G11/G12 front train, compact moving G2, stop, and remaining G3 proportions are consistent with the figure. Leader and bracket contamination makes the automated rim screen unsuitable for further changes.

### Materials, labels, identity, and movement

- Corrected the display name and suffix styling to Nikon's official ordering and added the missing `3 ED ELEMENTS` display specification.
- Marked active positions 1, 2, and 5 as inference-qualified ED elements without inventing source partial-dispersion data.
- Resolved L21's patent code `773495` to the compatible M-TAF1 catalog curve; production supplier identity remains unspecified. L13 remains unresolved because no unique defensible public match was found.
- Restored concise source labels G1, G2, G3, and L14.
- Confirmed constrained negative-G2 travel is 10.8362 mm imageward toward near focus. This prime lens has no zoom travel.

## 2026-09-24 — Rear filter modeled as `rearPlates`

- Replaced the air-equivalent surface-23 gap (160.421965401 mm) with Table 2's physical rear stack: d23 40.4 + field stop
  S2 d24 5.0 = 45.4 mm to the filter, `rearPlates` surfaces 25–26 at 2.0 mm, nd 1.516800, νd 64.10 (J-BK7A catalog
  equivalent), then the printed Bf 113.7034 mm (constant through focus). The front plane-glass filter (S1–S2) stays
  omitted.
- No manual for the 1996 lens was found; the AF-S 500mm f/4D IF-ED II manual says always to use a filter (52 mm NC filter
  supplied in the slip-in holder).
- EFL and paraxial defocus are identical at infinity and at the corrected close state. Physical track grows by 0.681435 mm
  to 422.122200 mm from surface 3 (TL/EFL 0.861543).

## 2026-10-04 — Slip-in filter drawn as an element

- The rear slip-in filter plate F moved out of `rearPlates` into the drawn prescription: surfaces 25–26 and element 12
  (`Plane-Parallel Plate`), with the same thickness, index and gaps. The lens is computed with the filter in place and
  a teleconverter mounts behind it, so it is part of the lens rather than a camera-side plate.
- The source lists no clear aperture for the plate. Its semi-diameter, 20.5 mm, is a ray-trace estimate: the largest
  height on the plate of any ray that reaches the 135 format or the diagram's off-axis field at infinity, mid and
  close focus (19.14 mm), plus 5%, rounded up to 0.5 mm. Not figure-audited.
- Before/after check: EFL, entrance pupil, stop radius, image plane, half-field, analysis half-field and the traced
  axial, mid-field, corner and diagram bundles are unchanged. `npm run audit:field-coverage` still reports 100% of the
  corner.

## 2026-10-30 — Fresh original-patent shape, source-filter and glass reinspection

- Direct source: `patents/US5745306.pdf`, Example 2 Fig.4 on PDF page 7 (600 dpi render, native 300 ppi), Table2 and d-line definition PDF page 22, columns 11–12. All13 source nd/νd pairs including both filter plates directly confirmed at 587.6 nm. Twelve compatible curves retained; L13 `1.80218/44.69` remains unresolved. Broad catalog-compatible neighbors are not forced into a source/production identification.
- Exact structural restoration: prepend S1 `R=flat,d=4.0,medium=13,sd=65.5`, S2 `R=flat,d=1.0,sd=65.5`; append FF media 13 `nd=1.5168,vd=64.10` plane filter. Source includes the plate; no optional omission clause located. Eleven powered lenses/nine groups remains the catalog count; modeled complete optical pieces13 include both filters. Rear S25/S26 and physical gaps unchanged. Full-field/focus trial reaches62.245421/62.027970 mm at the front faces (focus.9, field 4.72284°), no untraced field; ×1.05 rounded upward0.5 gives65.5 mm. No printed aperture diameter is inferred from that computational floor.
- Source height correction: Fig.4 finalL3c is only slightly shorter than L3b, rather than the much smaller former model. S22/S23 `16.5/17.0→20.1/20.2 mm` restores nominal-beam height. G2 retains square 20.0 mm caps: full nominal 20.4 trial gives3.340208 mm combined sag across3.54 mm versus existing91% bound3.2214 mm. Policy radius 20.036616 mm; contact 20.996475 mm. The existing gapSagFrac.91 is unchanged. Final f/4.146229 vsstated4.08 is within3%; S14 remains the exact-nominal bound.
- All original powered R/d, source Bf, internal focus-gap values, stop/aperture controls, old media coordinates and check tolerances remain unchanged. Every original material's C/d/F/g runtime channels are invariant. Both filters use qualified compatible J-BK7A curves; source indices remain authoritative and do not establish production suppliers/melts. No individual C/F/g or partial-dispersion datum is printed, and none is invented. All convex/concave/cemented/filter faces were inspected; apparent short straight ends cannot be separated reliably from ordinary shallow profiles/ink (and Fig. 10 ray contamination), so no inferred cut or extension is adopted. Geometry passing is not treated as source evidence.
- Source-complete comparison: infinity EFL489.960550 mm and rear-filter BFL113.703450 mm invariant; fulltrack 422.1222→427.1222 mm. Retained-motion finite object-to-image4998.622809→4999.985678 mm, magnification−.110705850 unchanged. Front-object4572.863378 mm closely matches printed4572.8815 mm. Existing source focus-spacing error treatment d16=8.4240 and G2 travel10.8363 mm remain; no aspheres.
- Verification: focused surface/image-circle/aperture pass;39-media batch source/curve/unchanged-channel/structural guards pass. All9 focus/zoom SVG states finite/hidden trimzero and viewed with both source plates. Public optical-piece count, fulltrack, finite conjugates and single-unresolved-glass coverage synchronized. Shared dispersion/resolver parity2 files/93 tests pass.
