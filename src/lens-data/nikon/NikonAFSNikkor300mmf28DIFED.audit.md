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
