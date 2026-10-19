# Audit Log — SIGMA 80-400mm f/4.5-5.6 EX OS

Patent: JP 2004-061605 A, Example 1 (tables pp. 6–7), Fig. 1.

## 2026-10-19 — Deployment validation

Source re-read from 200 dpi renders: all 35 surfaces (R, d, nd, νd), the stop (row 20) and the six variable gaps plus Bf
at all three focal lengths, at infinity and at 3000 mm (42 values), match the data file. No aspheres.

Patent vs model: EFL 81.24 / 180.52 / 389.46 vs 81.237 / 180.517 / 389.461; paraxial Bf 54.14 / 65.99 / 89.18 vs
54.141 / 65.986 / 89.177; half-field 14.9 / 6.7 / 3.1° reproduced at Y 21.63. Conditions |β3B/β3A| 0.444, f12T/fT 0.537,
|β3T| 1.042, fT/Rs 3.014, |f7/fT| 0.178 as printed. The OS group G3B (S10–S14) reproduces the patent's tele
sensitivity (0.5 mm → 1.50 mm). The printed 3000 mm rows close at object-to-image distance, so 3000 mm is read from
the image plane. `audit:surface` OK, image circle OK, field coverage 41/41 at 100 %, no axial clip.

Departures from the literal example: 38 intermediate stations (G4/G6 solved cam, other gaps interpolated), F-number
linear through 4.46 / 5.3 (Fig. 3 label) / 5.83, intermediate G7 focus keyframes derived, OS centred, semi-diameters
estimated from Fig. 1, HOYA glass equivalents.

Product: 20 elements / 14 groups with three SLD elements (two front, one rear) per DPReview, Photozone, LensTip and
DC Watch; the model has exactly three 1.497 / 81.6 elements (L2, L3, L9). Announced at Photokina 2002, about two months
after filing. The later DG version kept 20/14, 3 SLD, 1.8 m, 1:5. Examples 2 and 3 are 19/13. No public construction
diagram was found (the lens is absent from Sigma's discontinued-models list).

Open: focus stops at the patent's 3 m state; the product focuses to 1.8 m (1:5). Front-group corner vignetting is
heavy at the wide end and was kept. The analysis quotes conjugates 3002.17 / 2999.12 / 3000.08 mm where the engine
gives 3000.57 / 3000.23 / 3000.26 mm. Wording items ("EXAMPLE 1" / "CENTERED OS" spec chips, missing spaces, a private
Google Drive link in the analysis Sources, a sentence repeated under all 20 elements) were reported and not changed.
(Closed 2026-10-19 by the wording pass below: conjugates, spec chips, spacing, Sources link and element text fixed.
The 1.8 m close-focus item stays open.)

## 2026-10-19 — Semi-diameter pass against the patent figure

Source: `patents/JP2004061605A.pdf`, Fig. 1 (Example 1 section), measured on the front-page copy (page 2; native
300 ppi raster, larger than the page-15 copy). The panel is the wide end: G1–G2 nearly touch on axis and the G3–G4 gap
reads 50 mm against D14 = 51.18 mm. Optical axis vertical, object at the bottom.

Scale: 33 vertex crossings beside the axis fit the wide-end prescription at 0.1830 mm/px (S1–S35 178.42 mm / 975.5 px
= 0.1829; S1–S15 0.1831; S1–S21 0.1837). Transverse scale from circle fits to six strongly curved faces (S9, S11, S22,
S27, S32, S33; left/right averaged) is 0.995 ± 0.03 of the axial scale, so the figure is not anamorphic. The drawing is
rotated by about 0.55° (element centres drift from +4 px at G1 to −5.5 px at G7 relative to the drawn axis line), so
every rim was read as half the full left-to-right width.

| Surfaces | Element | Stored | Figure | Ratio | Result |
|---|---|---|---|---|---|
| 1–2 | L1 | 37 | 36.8 | 0.99 | kept |
| 3–4 | L2 | 37 | 36.5 | 0.99 | kept |
| 5–6 | L3 | 35 | 34.4 | 0.98 | kept |
| 7–8 | L4/L5 edge | 18.5 | 19.0 | 1.03 | kept |
| 9 | L5 rear | 18.5 | 16.4 (chamfer start) | 0.89 | **16.4** |
| 10–11 | L6/L7 | 16 | 16.1 | 1.00 | kept |
| 12 | L7 rear | 16 | 14.9 (flat step to the edge) | 0.93 | **14.9** |
| 13–14 | L8 | 14 | 14.7 | 1.05 | kept (noise; see below) |
| 15–16 | L9 | 17.5 | 16.8 | 0.96 | kept |
| 17–19 | L10/L11 | 17.5 | 16.7 | 0.95 | kept |
| 21–23 | L12/L13 | 12 | 11.7 | 0.97 | kept |
| 24–25 | L14 | 13 | 12.3 | 0.95 | kept |
| 26–28 | L15/L16 | 13 | 12.5 | 0.96 | kept |
| 29–30 | L17 | 13 | 12.8 | 0.98 | kept |
| 31–32 | L18 | 12 | 12.7 | 1.06 | **12.7** (step order) |
| 33–35 | L19/L20 | 12 | 13.2 | 1.10 | **13.2** |

Evidence per change. S9: the figure bevels the rear of the G3A doublet; the concave S9 ends where the chamfer starts
(89.75 px), and the S9 sag at 16.4 mm puts that corner at the drawn row. S12: the S12 arc ends at 81.5 px and a short
flat runs out to the 87.75 px edge that S10/S11 reach, so the optical face is smaller than the edge. L19/L20: a clean
square box 72 px wide each side, the widest element of G7. L18: drawn at 69.25 px, the same as L17 (69.75 px); with
L19/L20 at 13.2 mm, leaving L18 at 12 would draw it a full millimetre under both neighbours, which the figure does not
show. Kept values are within 5 % of the figure, except L8 (+5 %): its rim at 14.7 mm would need `gapSagFrac` 0.98 against
S12 (combined sag 4.59 mm in the 4.72 mm gap, faces not crossing), and the rays do not need it, so it stays at 14.0. G4 is
drawn 4–5 % narrower than stored, but the telephoto axial beam already needs 16.66 mm at S16, so it was not narrowed.

Clearance after the change: no axial clip and no blocked chief ray at any of the 41 stations. Axial marginal heights
against the new rims are 14.57 / 16.4 at S9, 13.66 / 14.9 at S12, 8.43 / 12.7 at S31 and 8.16 / 13.2 at S33. The image
circle check, the surface validator and traced field coverage (41 of 41 stations at 100 %) pass. Engine half-field
14.76° and f/4.46 are unchanged. Wide-open corner transmission at infinity: wide end 42.7 % → 52.1 % at 14.9°, middle
(180.5 mm) 64.9 % → 70.2 % at 6.7°, telephoto unchanged at 53.1 % at 3.1°. The wider rear group outweighs the smaller
S9 rim.

Front-group vignetting re-check: the figure draws L1–L3 at 36.8 / 36.5 / 34.4 mm, within 2 % of the stored 37 / 37 / 35,
so the heavy wide-end corner vignetting from the front rims is what the drawing shows and stays.

Live check: the local page was rendered at 81.24 mm (infinity and 3 m), 180.52 mm and 389.46 mm; the G3A step and
the wider G7 rear doublet show, with no overlaps. A red model outline at 0.183 mm/px, tilt-corrected, over the figure crop
matches every element except G4 (drawn slightly narrower, kept as above) and L8 (drawn slightly wider, kept as above).
No aspheres, so no departure figures needed recomputing.

## 2026-10-19 — Deployment validation and wording pass

Source re-read and first-order comparison: as recorded in the Deployment validation section above (all 35 surfaces,
the stop and the 42 variable-gap / back-focus values match; EFL 81.237 / 180.517 / 389.461 mm against the printed
81.24 / 180.52 / 389.46 mm). The engine's object-to-image distances for the printed 3000 mm rows are 3000.57 /
3000.23 / 3000.26 mm, with the object 2768.0 / 2719.3 / 2675.2 mm ahead of S1. The analysis now quotes these instead
of the package's 3002.17 / 2999.12 / 3000.08 mm. Maker diagram: none public, as recorded above; the patent figure
shows 20 elements in 14 groups, matching the product.

Fields changed by the coordinator before this pass: name (APO added, after Sigma's Photokina 2002 announcement on
DPReview), subtitle, the five spec lines, and `apd: "inferred"` with notes on L2, L3 and L9. Changed in this pass:
the data-file header comment (spacing fixed, inventor and applicant named, the printed and derived quantities stated
in plain sentences) and `focus.description` (now a PUBLISHED rear-focus sentence giving the G7 travel of 1.02 / 3.91 /
12.32 mm and saying the 3 m state is not the 1.8 m minimum focus). In the analysis: the identification paragraph
rewritten around the product name and the 20/14 count, run-together numbers fixed, the zooming and stabilizing groups
described from claim 1, the boilerplate repeated under all 20 elements replaced by a one-line role for each element,
the glass paragraph aligned with the inferred SLD tags, the focus paragraph rewritten with the engine's conjugates,
the "Aperture, Clear Apertures and Validation" heading renamed and stripped of test-procedure wording, and the
private Drive link in Sources replaced by the public DPReview announcement. Engine output (EFL, f-number, half-field,
stop radius, back focus, focus keyframes) is identical before and after, and the surface validator reports no errors.

Open: focus stops at the patent's 3 m state; the product focuses to 1.8 m (1:5).

## 2026-10-19 — Second review: diagram, labels and movement

Compared: the local page at 81.24 mm (infinity and 3 m), 180.52 mm and 389.46 mm (3 m), the zoom and focus movement
overlays and the inspector for L2, L5, L6, L9 and L13, against Fig. 1 on the front page (native 300 ppi), the printed
tables on p. 6 (infinity and 3000 mm spacings, OS shift), the text of claim 1 and paragraphs 0005 and 0014, and the
aberration plots Figs. 2–4 on p. 14. No maker construction diagram exists (see the Deployment validation section);
the figure governs.

Silhouette, re-measured independently: each rim is half the full left-to-right ink width per row, at 0.1829 mm/px
(S1 to S35 vertex crossings, 975.5 px for 178.42 mm; S15 lands within 0.1 px of its predicted row). Figure / stored:
L1–L2 36.6–36.8 / 37; L3 34.5 / 35; G3A edge 19.0 / 18.5, S9 chamfer corner 16.3–16.6 / 16.4; L6/L7 16.1 / 16;
L8 14.8 / 14.0; L9 16.8 / 17.5; L10/L11 16.65 / 17.5; G5 11.7 / 12; L14 12.35, L15/L16 12.6, L17 12.8 / 13;
L18 12.7 / 12.7; L19/L20 13.3 / 13.2. Every rim is within 5.4 %, the drawn height order is kept (G3A over G4 over
G3B; G5 below G6 and G7; G7 rear doublet the widest of the rear groups), the G3A rear chamfer and the square L8 and
G7 boxes render as drawn, and no element overlaps. The first pass is right; no `sd` was changed. G4 stays 4–5 %
over the drawing because the telephoto axial marginal ray needs 16.63 / 16.66 / 16.46 mm at S15 / S16 / S17. L8 stays
at 14.0: the figure's 14.8 mm needs `checks.gapSagFrac` 0.98 (S12 + S13 sag 4.59 mm in the 4.72 mm gap at 14.7 mm,
validator limit 4.25 mm at the default 0.9), and the largest value the default admits is 14.1 mm. Its axial marginal
floor at S14 is 13.99 mm, so the rim sits on the telephoto axial beam; with 14.7 mm the near-axis telephoto transmission
at 0.5° would rise from 94.8 % to 95.8 %, and the wide end at 9.9° from 88.5 % to 92.7 %. Left for the coordinator.

| Field | Before | After | Evidence |
|---|---|---|---|
| `doublets` texts | D1–D6 | C1–C6 | D4 and D6 were also the slider's gap labels (d4 G1–G2, d6 G2–G3) |
| element `cemented` names (L4/L5 … L19/L20) | D1–D6 | C1–C6 | inspector badge now matches the bracket |
| `groups` G3 (S7–S14) | one bracket "G3" | "G3A" (S7–S9) and "G3B (OS)" (S10–S14) | Fig. 1 brackets G3A and G3B; the reference-sign list names G3B the anti-shake group; condition (4) uses S10 as Rs (fT/Rs 3.01) |
| analysis, movement sentence | "G1 and G3–G7 move toward the object (claim 1)" | directions and amounts from the printed spacings, with the claim discrepancy noted | spacings on p. 6 and the Fig. 1 arrows |
| analysis, architecture sentence | G3 described as one group | notes the G3A / G3B split | Fig. 1 |

Movement, from the printed spacings with the image plane fixed (wide → tele, infinity): G1 +92.51 mm, G2 +76.52,
G3 −13.21, G4 +27.24, G5 +19.25, G6 +26.43, G7 +35.04 (positive toward the object), every group monotonic over the 41
stations except G6, whose solved cam turns back by 0.096 mm between 368.6 and 389.5 mm. The Fig. 1 arrows point
toward the object for G1, G2 and G4–G7 and toward the image for G3, so the model agrees with the figure and tables.
Claim 1 and paragraph 0005 instead name G1 and G3–G7 as moving toward the object, which contradicts the patent's own
table and figure for G2 and G3 (most likely a 2/3 slip in the claim). Stations ascend 81.24 → 389.46 mm. Focus: G7
alone moves, toward the image, by 1.020 / 3.910 / 12.320 mm at the three printed focal lengths (d30 9.6020 → 10.6216,
13.4965 → 17.4055, 0.9942 → 13.3101), keyframe 0 is infinity and the last is the 3000 mm row; the other groups shift
by at most 0.004 mm, the rounding of the printed Bf. The slider's far end reads 3.00 m.

Checked and found correct: element names L1–L20 sequential (the patent gives no element signs and uses G for
groups), and every `type` against the signs of R; no aspheres in the patent or the file; the stop between S19 and S21,
3.228 mm ahead of S21, where Fig. 1 marks it; the three `apd: "inferred"` tags on the three 1.497 / 81.6 elements
(the patent names no glass and no anomalous dispersion); `focus.description` and the gap labels. All 20 glass labels
resolve to HOYA catalog glasses within 0.06 of the printed νd. Glass recurrence: 1.80610 / 33.3, 1.49700 / 81.6,
1.77250 / 49.6, 1.69680 / 55.5, 1.80518 / 25.5 and 1.48749 / 70.4 recur in Examples 2 and 3, 1.75500 / 52.3 and
1.51680 / 64.2 in Example 3; 1.72342 / 38.0, 1.62299 / 58.1, 1.83400 / 37.3 and 1.64769 / 33.8 occur in Example 1
only, all exact catalog coordinates. The patent prints no glass names, no other line indices and no partial
dispersions.

Aberrations against Figs. 2–4: distortion +0.15 / +1.61 / +1.66 % at full field on the site against about +0.1, +1.6
and +1.7 % read from the patent curves; spherical aberration and astigmatism are within a few hundredths of a
millimetre in both at the three focal lengths. They agree.

Unchanged: engine half-field 14.76°, f/4.46, the `built.mjs` output (identical to the first pass), the surface
validator (no errors), image circle (0 undersized) and traced field coverage (41 of 41 stations at 100 %); no
axial clip or blocked chief ray.

Open: the 1.8 m close focus is not modelled. (The L8 rim item is closed by the follow-up below.)

Coordinator follow-up, same day: L8 (S13/S14) 14.0 → 14.7 mm with `checks.gapSagFrac` 0.98. Both figure readings
(first pass 14.7, second review 14.8) agree, and 14.0 sat on the telephoto axial-ray floor (13.99 mm at S14). With
0.98 the S12 + S13 sag (4.59 mm) fits the 4.72 mm gap. Surface validator OK, no axial clip or blocked chief ray,
half-field 14.76° and f/4.46 unchanged; meridional transmission rises from 94.8 to 95.8 % at 0.5° (tele) and from
88.5 to 92.7 % at 9.9° (wide), per the second review's trial trace.
