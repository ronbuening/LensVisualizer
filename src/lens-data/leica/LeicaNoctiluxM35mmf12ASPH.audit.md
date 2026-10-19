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
