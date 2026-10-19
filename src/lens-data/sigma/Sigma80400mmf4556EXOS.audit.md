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
