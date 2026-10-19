# Audit Log — Leica Noctilux-M 35mm f/1.2 ASPH.

Patent: US 2025/0271647 A1, Example 2

## 2026-10-19 — Deployment validation and wording pass

Source: US 2025/0271647 A1 (10 pages, image-only scan, no text layer). Front page, FIGS. 1–3, printed page 3
(¶0040–0051, asphere equation) and printed page 4 (Example 2 surface and asphere tables) were read from 120 dpi
renders; printed page 5 supplied the summary table (f, fVG, fMG, fHG, SO', F/#).

- Front page: US 2025/0271647 A1, published 2025-08-28, applicant Leica Camera AG (Wetzlar), inventor Stefan Roth
  (Lahnau), appl. 19/050,695, priority DE 10 2024 105 587.1. Matches the data file's source fields.
- Transcription: all 16 rows of r and d_M, 10 ne / νe / ΔPgF rows, stop at surface 7 and plane surface 8 reproduce
  the file at 35× scale exactly. Asphere surfaces 4, 11 and 16 have k = 0; all 10 printed coefficients reproduce
  the stored A4…A12 through A_p = a / 35^(p−1) (the patent's a2…a6 multiply h⁴…h¹², ¶0049). No mismatches.
  Surfaces 11 and 16 are the variable gaps (¶0047); only their infinity values are printed and only those are stored.
- Scale: ¶0045 and ¶0053 state the 1 mm : 35 mm scaling for the 24 × 36 mm format; 35× is applied uniformly.
- First-order, patent (normalized) vs model: f 1.00 vs 0.99274 (EFL 34.746 mm); F/1.24 vs FOPEN 1.24; half angle
  32° vs field coverage reaching 21.65 mm at 31.9°; fVG 34.75 vs 33.66 (near-afocal, rounding-sensitive); fMG 1.69
  vs 1.682; fHG 1.86 vs 1.835; SO' 2.01 vs 2.02 with the printed 0.44 gap and 2.011 with the Gaussian back focus.
  Gaussian back focus 15.096 mm vs the printed 15.4 mm gap: 0.30 mm residual defocus, kept as printed per the
  source-rounded-prescription rule. On-axis LSA −0.10 mm at full pupil, so no sign misprint is indicated.
- Clearance: surface audit reports no validation errors; image-circle audit 0 undersized; aperture audit within 3 %
  of f/1.24; field coverage 100 % with the corner clear. The surface-16 sag extremum is at 9.330 mm and the corner
  chief ray meets that surface at about 10.3 mm, inside the 11.35 mm estimated rim (rim angle 5.88°).
- Maker comparison: Leica technical data (pm-126362-EN / pm-27392-EN data sheet, pages 1–2) gives 10 lenses / 5
  assemblies, 3 aspherical surfaces, a floating element, 0.5 m minimum focus, 1:11.6, 63.3° diagonal angle and an
  entrance pupil 24.5 mm in front of the bayonet. The lens cut shows the same element shapes, asphere positions
  (L3 front, L7 rear, L10 rear) and the plane L5 front face that distinguishes Example 2 from Examples 1 and 3
  (¶0054). The model's paraxial entrance pupil is 52.66 mm ahead of the printed image plane, 24.86 mm in front of
  the M bayonet (27.80 mm flange distance).
- Fields changed in this pass: header comment (review/package wording removed; rounding, scale, sd and rim facts
  kept), `subtitle`, `specs`, `focus.description`; `visible` set to true by the coordinator. In the analysis:
  status line, the focus section's derived floating schedule (not part of this file), the verification section
  (renamed "Model Scope and Limitations" and reduced to model properties, adding the entrance-pupil comparison),
  the source-summary rounding section and the alternative-rim paragraph (alternates not in the repo), and
  process wording in the element, glass and source notes. No optical value, `sd`, glass string or errata entry
  changed; EFL, FOPEN, half-field, stop radius, BFD and track are identical before and after.

Open: glass identities and full dispersion are unknown (e-line only); no close-focus spacings or cam are published;
the rear-asphere clear aperture beyond the sag extremum is unsourced; full-precision data would be needed to close
the 0.30 mm back-focus residual.

## 2026-10-19 — Semi-diameter pass against the patent figure

Source: US 2025/0271647 A1, sheet 2 of 3 (PDF page 3), Fig. 2, the Example 2 section (plane L5 front face, three
starred aspheres on L3, L7 and L10). The page is a 2560 × 3300 px CCITT raster; it was measured at native
resolution (72 dpi render), upper silhouette, with the lower silhouette as a symmetry check (agreement within 2 px).

Scale: vertex crossings at x = 728 px (surface 1) and 1813 px (surface 16) span the prescription's 55.30 mm, giving
19.63 px/mm (0.0509 mm/px). Surfaces 2, 5, 9, 13 and 15 fall within 3 px of their predicted positions. The drawing
is isotropic: the surface-1 sag at the 17.0 mm rim predicts 35 px against 33 px drawn, the L2 front sag at 15.05 mm
predicts 102 px against 100 px, and an overlay of the model outlines traced from the prescription on the figure
lies on every drawn curve. No anamorphic factor applies.

| Surface | Stored sd | Figure sd | Ratio | New sd | Evidence |
|---|---:|---:|---:|---:|---|
| 1 | 17.0 | 17.05 | 1.00 | 17.0 | kept; front-face rim of L1 |
| 2 (L1/L2 cement) | 17.0 | 15.05 | 0.89 | 15.1 | the cement curve ends at L2's rim; L1 continues outward as a flat rear flange to 17.05 mm |
| 3 | 15.4 | 15.05 | 0.98 | 15.1 | L2 drawn square-cut, so both faces take one value |
| 4A | 14.0 | 14.0 | 1.00 | 14.0 | kept; axial floor 13.82 mm |
| 5 (L3/L4 cement) | 14.0 | 14.0 / 13.4 | 0.96–1.00 | 14.0 | kept; the curve runs to L3's rim and L4's flat top sits at 13.4 mm, inside noise |
| 6 | 13.5 | 12.28 | 0.91 | 12.3 | the rear curve ends at 12.28 mm, where its sag lands on the drawn corner within 1 px, then a vertical step rises to L4's 13.4 mm outer rim |
| 8, 9, 10, 11A | 12.6 | 12.63 | 1.00 | 12.6 | kept; the cemented triplet is drawn square at one height; axial floor 12.29–12.39 mm |
| 12 | 12.0 | 12.0 | 1.00 | 12.0 | kept; the drawn corner matches the surface-12 sag at 12.0 mm |
| 13 (L8/L9 cement) | 12.0 | 12.0 / 11.7 | 0.97–1.00 | 12.0 | kept; the curve runs to L8's rim, L9's top is 11.7 mm |
| 14 | 12.0 | 11.2–11.7 | 0.93–0.98 | 12.0 | kept; the drawn corner sits between the surface sag (11.2 mm) and L9's top (11.7 mm), inside noise |
| 15, 16A | 11.35 | 11.8 | 1.04 | 11.35 | kept; inside noise |

Three surfaces changed (2, 3, 6); no aspheric `sd` changed, so the analysis's surface-16 sag-extremum and rim-angle
statements stand. Fig. 2 draws L10 square to about 11.8 mm, so the stored 11.35 mm rim beyond the 9.33 mm sag
extremum is consistent with the drawing. L9 and L10 are drawn at the same height (11.7 and 11.8 mm) while the
model keeps L9 0.65 mm above L10; both stay inside noise, and the order is not reversed, so neither moved.

Clearance at f/1.24, image height 21.63 mm (ω 31.85°): axial marginal heights 14.51 mm at surface 2, 14.28 mm at
surface 3 and 11.99 mm at surface 6, all below the new rims; no on-axis clip and no chief-ray block. The surface
validator reports no errors, the image-circle check 0 undersized, the aperture check within 3 % of f/1.24, and
field coverage reaches 21.65 mm at 31.9° with the corner clear. Engine EFL 34.746 mm, f/1.24, half-field 28.96° and
stop radius 12.14 mm are unchanged; the derived stop-housing radius follows surface 6 from 12.6 to 12.3 mm. Geometric
transmission at full aperture drops by at most 2.6 points in mid-field (71.9 % to 69.8 % at 17.4°, 65.1 % to 62.5 %
at 20.3°) and is unchanged at the 31.9° corner (28.1 %). The renderer joins L1's 17.0 mm front rim to its 15.1 mm
rear rim with a slanted edge where the figure draws a flat flange; that is a drawing convention, not a value
choice.

Maker diagram: the deployment pass above records Leica's lens cut as 10 lenses in 5 assemblies, with the same
element shapes, aspheres on L3 front, L7 rear and L10 rear, and the plane L5 front face. No maker image was viewed in
this pass. The live page at infinity matches the figure's silhouette; the lens is infinity-only, so there is no
close-focus state to check.
