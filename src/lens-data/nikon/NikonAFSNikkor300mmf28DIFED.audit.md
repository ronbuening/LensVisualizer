# Audit Log - Nikon AI AF-S NIKKOR ED 300mm f/2.8D IF

Patent: US 5,745,306 A, Example 1, Fig. 1 (PDF page 2)

## 2026-08-16 - Screenshot-led patent figure and metadata audit

### Semi-diameters

- Rechecked the current cross-section directly against Fig. 1. The prior integration correction reducing terminal L33 surfaces 21/22 from `22.5 / 23.5` mm to `16.0 / 16.5` mm is supported by the source's visibly smaller last element.
- The remaining G11, G12, G2, and rear G3 proportions agree within the audit's visual tolerance. Figure rays and leaders contaminate automated rim readings, so no additional changes were taken from that screen.

### Materials, labels, identity, and movement

- Corrected the display name and suffix styling to Nikon's official ordering: `NIKON AI AF-S NIKKOR ED 300mm f/2.8D IF`.
- Marked active positions 1, 2, and 5 as inference-qualified ED elements, matching Nikon's published three-ED layout without inventing patent partial-dispersion values.
- Restored concise source group labels G1, G2, and G3.
- Confirmed published negative-G2 travel is 10.8239 mm imageward toward near focus. This prime lens has no zoom travel.

## 2026-09-24 — Rear filter modeled as `rearPlates`

- Replaced the air-equivalent S22-to-image gap (106.9520654 mm) with Table 1's physical rear stack: d22 14.5 + d23 7.0 =
  21.5 mm to the filter (field-stop plane S23 folded out), `rearPlates` surfaces 24–25 at 2.0 mm, nd 1.516800, νd 64.10
  (J-BK7A catalog equivalent), then d25 10.0 + Bf 74.1335 = 84.1335 mm to the image (field-stop plane S26 folded out).
- Nikon's instruction manual says always to use a filter with the lens; the 52 mm slip-in holder ships with an NC filter.
- EFL and paraxial defocus are identical at infinity and close focus. Physical track grows by 0.681435 mm to 315.074700 mm
  from S3 (TL/EFL 1.071210, still not telephoto under the project criterion).

## 2026-10-04 — Slip-in filter drawn as an element

- The rear slip-in filter plate F moved out of `rearPlates` into the drawn prescription: surfaces 24–25 and element 12
  (`Plane-Parallel Plate`), with the same thickness, index and gaps. The lens is computed with the filter in place and
  a teleconverter mounts behind it, so it is part of the lens rather than a camera-side plate.
- The source lists no clear aperture for the plate. Its semi-diameter, 19.5 mm, is a ray-trace estimate: the largest
  height on the plate of any ray that reaches the 135 format or the diagram's off-axis field at infinity, mid and
  close focus (18.37 mm), plus 5%, rounded up to 0.5 mm. Not figure-audited.
- Before/after check: EFL, entrance pupil, stop radius, image plane, half-field, analysis half-field and the traced
  axial, mid-field, corner and diagram bundles are unchanged. `npm run audit:field-coverage` still reports 100% of the
  corner.

## 2026-10-30 — Fresh original-patent shape, source-filter and glass reinspection

- Direct source: `patents/US5745306.pdf`, Example 1, Fig. 1 on PDF page 2 (600 dpi render, native 300 ppi); Table 1 and d-line definition on PDF page 21, columns 9–10. All13 media including both filter plates were directly read at d=587.6 nm; all 13 resolve to compatible curves. Source material pairs and source-only partial-dispersion scope are retained.
- Exact structural restoration: prepend S1 `R=flat,d=4.0,medium=13,sd=55.5`, S2 `R=flat,d=0.6,sd=55.5`; append media 13 FF, `nd=1.5168,vd=64.10`, drawn/traced plane filter. The original explicitly includes this plate; no optional omission clause was located. Catalog powered count 11/eight groups remains, while complete modeled optical-piece count is13 (11 lenses +2 filters). Rear filter S24/S25 and all its physical gaps remain unchanged. Full-field/focus source-complete trial with generous plate apertures reaches52.413056/52.121593 mm at its faces (focus.35, field 6.32867°), no untraced field. Maxreach×1.05 rounded upward0.5 gives55.5 mm; no printed diameter is claimed.
- Source height correction: Fig. 1 finalL33 is comparable to/slightly taller than L32, contrary to the prior audit's smaller-element reading. Restore S21/S22 `16.0/16.5→19.5/19.6 mm`. Other source-consistent modest raises: S3 `51.1→51.2`, S4 `50→50.8`, S6 `46.5→48.1`, S7 `45.6→46.1`, S10 `31.5→31.8`, S12/S13/S14/S15 `19.5→19.9` (all mm, L22 remains square). Full nominal 20.3 mm coupled S12/S13 trial gives4.206302 mm sag across4.51 mm gap, above existing90% bound4.059 mm. Policy radius 19.947869 mm; physical contact 21.005957 mm. No source gap or tolerance is changed. Final traced f/2.940733 vsstated2.88 is within3%; S12 remains the explicit exact-nominal limit.
- All original powered R/d, source Bf, internal focus-gap values, stop/aperture controls, old media coordinates and check tolerances remain unchanged. Every original material's C/d/F/g runtime channels are invariant. Both filters use qualified compatible J-BK7A curves; source indices remain authoritative and do not establish production suppliers/melts. No individual C/F/g or partial-dispersion datum is printed, and none is invented. All convex/concave/cemented/filter faces were inspected; apparent short straight ends cannot be separated reliably from ordinary shallow profiles/ink (and Fig. 10 ray contamination), so no inferred cut or extension is adopted. Geometry passing is not treated as source evidence.
- Source-complete comparison: infinity EFL294.129638 mm and rear-filter BFL84.133641 mm are invariant; full track315.0747→319.6747 mm. At retained published close gaps, object-to-image2513.944427→2515.307296 mm, unchanged magnification−.141397137. Object-to-front2195.632596 mm closely matches printed2195.6253 mm; the source R2500 label/rounded2.5 m production correlation is not forced into exact physical equality. All aspheres absent.
- Verification: surface/image-circle/aperture pass;39-media batch source/curve/structural-invariance checks pass. Nine focus/zoom SVG states finite, hidden trimzero, viewed with both plates and connected compounds. Public fulltrack/conjugate/aperture/condition12 numbers synchronized. Shared dispersion/resolver parity tests pass2 files/93 tests. PDF/temporary renders remain untracked research inputs.
