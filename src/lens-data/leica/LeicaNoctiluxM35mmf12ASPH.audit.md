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

## 2026-10-19 — Second review: diagram, labels and movement

Compared: the live local page at infinity (the only modeled state) and its focus-movement overlay against Fig. 2
(PDF page 3), the Example 2 tables (PDF page 8, printed page 4), ¶0039–0049 (printed page 3), ¶0016–0024
(printed pages 1–2) and the summary table and ¶0052–0063 (printed page 5). Rims were re-measured independently on
the native 72 dpi raster (axis at row 1510–1511, 19.63 px/mm), upper and lower silhouettes.

| Field | Before | After | Evidence |
|---|---|---|---|
| `groups` | none | VG (FRONT) 1–6, MG (MIDDLE) 8–11A, HG (REAR, FLOATING) 12–16A | Fig. 2 brackets VG, MG and HG; ¶0039 assigns L1–L4, L5–L7 and L8–L10; ¶0044 makes HG the floating element |
| `doublets` | none | G1 1–3, G2 4A–6, G3 8–11A, G4 12–14 | ¶0040–0042 and the table's Subgroup column name the cemented G1–G4; G5 is the singlet L10 |
| `focus.description` | "the whole objective moves toward the object while the rear group (L8–L10) floats" | names VG, the stop and MG moving together and HG (L8–L10) floating | ¶0044 wording; matches the new brackets and the analysis focus section |

No `sd` changed. Re-measured rims: L1 17.05 mm, L2 15.1, L3 14.0, L4 flat top 13.4 with the rear curve ending lower,
triplet 12.63, L8 12.02 (lower side 11.97), L9 flat top 11.69 (11.72), L10 11.82 (11.77). Stored values agree within
noise except L10, drawn about 0.45 mm (4 %) taller than its stored 11.35 mm and level with L9, where the model keeps L9
0.65 mm above L10. Raising L10 is refused by the cross-gap rule: with surface 14 at 11.7 and surfaces 15/16A at 11.8
the combined rim sag is 4.32 mm against the allowed 4.095 mm of the 4.55 mm gap (a gap-sag fraction of 0.96 would
admit it). The same trial lifts the engine half-field from 28.96° to 29.91° and the 31.9° transmission from 28.1 % to
31.8 %, so the L10 rim sets real off-axis vignetting and was not widened for a 4 % drawing difference.

The site draws L1 with a slanted edge from its 17.0 mm front rim to the 15.1 mm cement rim, and L4 with a slanted edge
from the 14.0 mm cement rim to the 12.3 mm rear rim. Fig. 2 draws a flat L1 flange and a flat 13.4 mm L4 top with a
short step down to the rear curve. Squaring either element would carry the cemented partner (L2) or the optical rear
face of L4 beyond where the figure ends the curve, so both are renderer conventions and were left.

Checked and correct: element names L1–L10 are the patent's own designations; every `type` agrees with the radius
signs (L5 plane front, L10 meniscus with both radii negative); aspheric labels sit on surfaces 4, 11 and 16 only,
the surfaces Fig. 2 stars and ¶0049 lists; the stop is surface 7 (BL) between L4 and L5. No `apd` tag is set, and none
is warranted: ¶0018 states a ΔPgF window for negative lenses but names no anomalous glass. The inspector shows L3 as
"DOUBLET G2", L5 as "TRIPLET G3" (a real triplet) and L10 as an aspheric negative meniscus with f = −656.59 mm.
Movement: the lens is infinity-only; the overlay reports three groups and no modeled movement. Fig. 2's two arrows
both point toward the object, the long one for the whole objective and the short one for HG, as ¶0044 states and the
focus description says. The patent prints no aberration plots, so astigmatism, field curvature and distortion have
no source curve to compare with.

Glass evidence: the patent prints only ne (3 decimals), νe (integer) and ΔPgF per lens; there are no nd, νd, line
indices or glass names anywhere in the text or tables. The stored `dPgF` values are the Example 2 ΔPgF column on
PDF page 8, measured from the Schott normal line 0.6438 − 0.001682·νd (¶0019–0021), the same baseline the engine uses.
The ΔPgF column is identical position by position in all three examples (L1 +0.002, L2 +0.005, L3/L7 −0.005, L4 and
L6 +0.0003, L5 −0.009, L8 +0.001, L9 +0.009, L10 +0.007) while ne/νe change, and L6 of Example 3 (1.644/34) carries
+0.0003 where L9 of Example 2 (1.644/34) carries +0.009; the column is therefore a per-position design value, not a
measured glass property. Only L3/L7 (1.743/48 in all three examples) recurs exactly; L5 is 1.886/41 in Examples 1 and
3 and 1.890/40 here; every other position varies between examples and is optimizer-floated. No catalog glass is
pinned by the source, so all ten stay Unmatched.

Clearance and engine values are unchanged: surface validator no errors, image-circle 0 undersized, field coverage
100 %, EFL 34.746 mm, f/1.24, half-field 28.96°, stop radius 12.14 mm, transmission at 31.9° 28.1 %.

Open: the L10/L9 height difference (drawing 4 %) remains while the cross-gap rule holds; the rear-asphere rim beyond
its 9.33 mm sag extremum stays unsourced.
