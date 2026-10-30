# Audit Log - Nikon AI AF-S NIKKOR ED 400mm f/2.8D II IF

Patent: US 6,239,919 B1, Example 4, Fig. 10 (PDF page 11)

## 2026-08-16 - Screenshot-led patent figure and metadata audit

### Semi-diameters

- Rechecked the current cross-section directly against Fig. 10. The prior integration correction reducing terminal L33 surfaces 22/23 from `21.0 / 21.5` mm to `15.5 / 16.0` mm matches the source's small last positive element.
- The front G1F, G1R, moving G2, and rear G3 taper remain consistent with the figure. Crossing rays and group brackets contaminate the automated screen, so no unsupported follow-up SD edit was made.

### Materials, labels, identity, and movement

- Corrected the display name and suffix styling to Nikon's official ordering: `NIKON AI AF-S NIKKOR ED 400mm f/2.8D II IF`.
- Marked active positions 1, 2, and 5 as inference-qualified ED elements, matching Nikon's published three-ED layout without inventing patent partial-dispersion values.
- Confirmed the reconstructed production endpoint moves negative G2 12.333140 mm imageward; the patent's own 3.8 m row gives 10.85845 mm in the same direction. This prime lens has no zoom travel.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent surface-23 gap with Table 4's physical rear stack (PDF p. 20, cols. 13–14): d23 22.0 +
  field stop d24 7.2 mm to the filter, then `rearPlates` surfaces 25–26 at 2.0 mm, nd 1.516800, νd 64.10 (J-BK7A
  catalog equivalent), and the printed Bf 83.53862 mm (constant through focus). No plate designation is printed.
- The file's independently solved image plane (air-equivalent 114.0572584 mm, 73.0 nm beyond the direct 114.0571854 mm
  normalization) is kept by storing the gap before the filter as 29.2000730 mm, so EFL and paraxial defocus are
  identical at infinity and at the 3.4 m keyframe (worst difference 7e-15 mm); the 3.4 m G2 solve is unaffected.
- Physical track grows by 2.0 × (1 − 1/1.5168) = 0.681 mm, to 377.768 mm from surface 3.

## 2026-10-04 — Slip-in filter drawn as an element

- The rear slip-in filter plate F moved out of `rearPlates` into the drawn prescription: surfaces 25–26 and element 12
  (`Plane-Parallel Plate`), with the same thickness, index and gaps. The lens is computed with the filter in place and
  a teleconverter mounts behind it, so it is part of the lens rather than a camera-side plate.
- The source lists no clear aperture for the plate. Its semi-diameter, 19 mm, is a ray-trace estimate: the largest
  height on the plate of any ray that reaches the 135 format or the diagram's off-axis field at infinity, mid and
  close focus (17.76 mm), plus 5%, rounded up to 0.5 mm. Not figure-audited.
- Before/after check: EFL, entrance pupil, stop radius, image plane, half-field, analysis half-field and the traced
  axial, mid-field, corner and diagram bundles are unchanged. `npm run audit:field-coverage` still reports 100% of the
  corner.

## 2026-10-30 — Fresh original-patent shape, source-filter and glass reinspection

- Direct source: `patents/US6239919.pdf`, Example 4 Fig.10 on PDF page 11 (600 dpi render; native 300 ppi), Table4 and d-line definition on PDF page 20, columns 13–14. All13 source pairs including both filters confirmed at 587.6 nm; all 13 resolve to compatible curves. L14 `1.796681/45.37` remains source-authoritative; its J-LASF017 curve is explicitly approximate (catalog index difference−.001681), not an exact identity or supplier claim.
- Exact structural restoration: prepend S1 `R=flat,d=5.0,medium=13,sd=72.5`, S2 `R=flat,d=1.0,sd=72.5`; append FF media 13 `nd=1.5168,vd=64.10` plane filter. The original includes it without a located optional omission clause. Catalog active count 11/nine groups remains; complete modeled optical-piece count 13 includes both drawn/traced filters. Existing rear S25/S26/gaps/reference-plane normalization remain. Full-field/focus trial reaches68.969992/68.736129 mm on the front faces (focus.95, field 4.06380°), no untraced field. Five-percent margin rounded upward0.5 yields72.5 mm; source diameter is not claimed.
- Source height correction: Fig.10 L33 is comparable in height to L32, despite the old audit's undersized-element reading. Restore S22/S23 `15.5/16.0→20.5/20.5 mm`. S13 `20.1→20.2 mm` only: full nominal 20.4 gives4.053729 mm combined sag across4.45 mm, above existing90% bound4.005 mm. Policy radius 20.279316 mm; contact 21.354113 mm. Final f/2.907844 vs2.88 is within3%, with S13 the exact-nominal bound. No tolerance/source spacing change.
- All original powered R/d, source Bf, internal focus-gap values, stop/aperture controls, old media coordinates and check tolerances remain unchanged. Every original material's C/d/F/g runtime channels are invariant. Both filters use qualified compatible J-BK7A curves; source indices remain authoritative and do not establish production suppliers/melts. No individual C/F/g or partial-dispersion datum is printed, and none is invented. All convex/concave/cemented/filter faces were inspected; apparent short straight ends cannot be separated reliably from ordinary shallow profiles/ink (and Fig. 10 ray contamination), so no inferred cut or extension is adopted. Geometry passing is not treated as source evidence.
- Source-complete comparison: infinity EFL391.998755 mm and rear-filter BFL83.538620 mm invariant; fulltrack 377.767563→383.767563 mm. Existing reconstructed G2 travel12.3331402826 mm is retained; full physical finite endpoint3400.681435→3402.385021 mm, magnification−.133899198 unchanged. This remains qualified reconstructed focus, not a source 3.4 m row. Source focus-label errata d13/d18 versus actualvariable d11/d16 are preserved as previously disclosed. No aspheres.
- Verification: surface/image-circle/aperture pass; independent batch checks confirm source 13 pairs, curve compatibility, exact added rows and unchanged controls. All9 focus/zoom SVG states finite/hidden trimzero and viewed. Public powered/fulltrack, plate-count, finite-conjugate and approximate-glass provenance synchronized. Shared dispersion/resolver parity2 files/93 tests pass.
