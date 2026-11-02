# Audit Log — OLYMPUS M.Zuiko Digital ED 75–300mm f/4.8–6.7

Patent: JP 2011-186095 A (Sigma Corporation), Example 2 (tables pp. 11–12), Figure 8.

## 2026-10-19 — Deployment validation and G2-fixed zoom cam

Source re-read from page images: all 32 lens surfaces plus the stop and LPF (R, d, nd, νd) and the five variable gaps
plus Bf at all three printed stations match the data file. All surfaces are spherical; the stop is surface 16;
cemented pairs 1–3, 19–21, 22–24, 27–29, 30–32.

Patent vs model: EFL 76.91 / 140.00 / 290.98 vs 76.906 / 139.989 / 290.942; Bf 1.0; F4.95 / 5.57 / 6.92 per station;
conditions (1) 0.0339, (2) 0.0328, (3) 6.4662, (5) 3.2453 (printed 3.2458).

Product: Olympus lists 18 elements / 13 groups with one Super ED, two ED and three HR elements, no aspheres, 0.9 m (75 mm)
/ 1.5 m, Micro Four Thirds, on sale December 2010. Example 2 has νd 90.19 (Super ED), 81.61 and 68.62 (ED) and three
nd 1.91082 elements (HR). The II version (2013) lists the same construction and its drawing matches. No public source
states that Sigma designed or made the lens, so the attribution is circumstantial but strong. Example 3 (also 18/13,
three HR, F4.95–6.90) fits the catalog drawing equally well.

Zoom cam: the package's intermediate stations interpolated D5/D9/D15/D26 linearly and solved D32 for focus. That moved
G2 by up to +11.41 mm relative to the image (about 251 mm), against paragraph 0069 ("the second lens group does not
move during zooming"), let the overall length overshoot the tele value (186.2 vs 182.3 mm near 280 mm) and clipped
the on-axis beam at S10/S11 between about 210 and 278 mm (8.41 needed vs sd 8.1). The 78 intermediate stations were
re-derived: G2 fixed (the variable gaps behind G2 sum to 70.012 mm at every station), G1, G3 and G5 on monotone
(PCHIP) splines through the printed positions in log focal length, G4 solved paraxially for the fixed image plane;
stations geometric in focal length, 40 per printed interval; F-number linear in log focal length; G5a focus keyframes
re-solved to 1.5 m with the package's method (maximum travel 8.30 mm). The published stations, including their focus
states, are unchanged. After the change, G1, G4, G5 and the overall length move monotonically; S10/S11 need 7.15 / 7.11
mm (sd 8.1); `audit:aperture` reports 81/81 stations within 3 % of the stated f-number with no rim-limited station;
`audit:surface` OK, image circle OK, field coverage 81/81 at 100 %. Rims were not changed.

Open: the 0.9 m wide-end close focus is not modelled. Wording items reported by the validation pass and not changed
here: missing spaces between numbers and words in the analysis, the "EXAMPLE 2" / "DERIVED CONTINUOUS CAM" spec chips,
and the subtitle's "probable original Olympus production association" phrasing (wording items closed by the
wording pass below).

## 2026-10-19 — Semi-diameter pass against the patent figure

Source: local `patents/JP2011186095A.pdf`, page 17, FIG. 8 (Example 2, wide end, infinity; right-hand column of the
three panels, the one carrying the L1–L5b labels). Optical axis vertical, object at the top; the sheet is a 300 ppi
CCITT raster, measured from a 600 dpi render.

Scale: 22 vertex crossings on the centre column (S1 to S32 and the LPF front) fit the wide-infinity prescription at
8.862 px/mm (0.1128 mm/px); S1–S26 (70.68 mm) and S1–S32 (110.35 mm) agree within 0.1 %. Aspect: arc fits of S4
(R 53.3), S20 (R −26.8) and S31 (R −17.4) give a horizontal scale 0.98–1.02 × the axial one, and the drawn stop ticks
(inner half-gap 78–79 px, 8.8–8.9 mm) agree with the engine stop radius 8.75 mm, so this figure is not anamorphic and
one scale was used both ways. Rims were read as the drawn vertical edge lines (line centres) across the full diameter,
halved, so the result does not depend on locating the axis; the group brackets sit well outside the glass and were
excluded. A red-on-figure overlay of the new outlines was checked by eye.

| Surfaces | Element | Before | Figure half-width | After | Evidence |
|---|---|---|---|---|---|
| 1–3 | L1/L2 doublet | 23.5 | 199 px = 22.4 mm | 23.5 | kept, −4.5 % is within noise |
| 4–5 | L3 | 23.5 | 195 px = 22.0 mm | 23.5 | kept, −6.4 % is within noise |
| 6–7 | L4 | 13 | 101 px = 11.4 mm | 11.4 | square rim, both faces |
| 8–9 | L5 | 13 | 99 px = 11.2 mm | 11.2 | square rim, both faces |
| 10–11 | L6 | 8.1 | about 72 px = 8.1 mm | 8.1 | kept, agrees (left edge line not drawn; right edge used) |
| 12–13 | L7 | 10 | 71 px = 8.0 mm | 8.0 | drawn the same width as L6 |
| 14–15 | L8 | 11 | 75 px = 8.5 mm | 8.5 | drawn slightly wider than L6/L7 |
| 17–18 | L9 | 11 | 91 px = 10.3 mm | 10.3 | first of a rearward-growing G4 step |
| 19–21 | L10/L11 doublet | 11 | 93 px = 10.5 mm | 10.5 | keeps the G4 step order |
| 22–24 | L12/L13 doublet | 11 | 97 px = 10.9 mm | 11 | kept, agrees |
| 25–26 | L14 | 11 | 99 px = 11.2 mm | 11 | kept, agrees |
| 27–29 | L15/L16 (G5a) | 9 | 63 px = 7.1 mm | 7.1 | drawn as a square box |
| 30–32 | L17/L18 (G5b) | 9.5 | 68–69 px = 7.7 mm | 7.7 | drawn wider than G5a |

The stop `sd` was not touched. The G4 changes at L9 and L10/L11 (7 % and 4.5 %) are inside the noise band; they were
made because the figure draws G4 growing steadily rearward (91, 93, 97, 99 px) while the file had four equal rims.

Clearance (exact meridional trace, all 81 stations, at infinity and at the 1.5 m focus keyframe): the largest on-axis
marginal heights against the new rims are S6 10.22 / 11.4, S8 10.02 / 11.2, S13 7.25 / 8.0, S15 7.68 / 8.5,
S18 9.43 / 10.3, S21 9.53 / 10.5, S27 5.50 / 7.1 and S30 3.46 / 7.7 mm; the corner chief ray for the 10.82 mm image
height peaks at 3.66 mm in G5a and 5.62 mm at S32. No surface clips the axial beam or the chief ray. The surface
validator passes with no errors, the image-circle floor reports nothing undersized, field coverage is 81/81 stations
at 100 %, and the aperture check keeps 81/81 stations within 3 % of the stated f-number with none rim-limited.

Before and after: f-number and stop radius unchanged (F4.95, 8.75 mm at the wide end). The engine's paraxial
half-field estimate falls from 13.20° to 10.76° at the wide end, 8.02° to 6.57° at 140 mm and 4.84° to 4.23° at the
tele end, now limited by the G5b rims; each stays above the patent half-angles (8.21°, 4.48°, 2.16°). Wide-open corner
illumination falls from 85.4 % to 79.2 % at the wide end, from 96.9 % to 82.3 % at 140 mm and from 81.3 % to 76.0 % at
the tele end. That is real mechanical vignetting from rims the figure draws smaller than the old estimates, and it
was kept.

The live page was compared with the figure at the wide end (infinity and 1.5 m), 140 mm and the tele end: the group
proportions, the G3 and G4 steps and the narrower G5a against G5b now match the drawing, with no overlaps.

Construction check (from the deployment validation above, not a newly viewed maker image): Olympus lists 18 elements
in 13 groups with one Super ED, two ED and three HR elements and no aspheres; the figure and file agree on 18/13. In
this model the Super ED element is element 3 (νd 90.19), the ED elements are 2 and 9 (νd 81.61, 68.62) and the HR
elements are 4, 11 and 12 (nd 1.91082).

Open: the front group stays 0.9–1.5 mm larger than the figure reading (within noise); the rims are drawing estimates
with roughly ±2 % scale uncertainty from the 300 ppi raster.

## 2026-10-19 — Deployment validation and wording pass

Source re-read: the Example 2 table on PDF pages 11–12 (surfaces 1–34 R, d, nd, νd; stop 16 at 7.35 mm; LPF
4.14 mm, nd 1.5168 / νd 64.20) and the variable gaps D5, D9, D15, D26, D32 and Bf at all three printed stations match
the file with no mismatches; D29 is the fixed 12.1262 mm at infinity. Patent vs model EFL 76.91 / 140.00 / 290.98 vs
76.906 / 139.989 / 290.942 mm. Front page: JP 2011-186095 A, published 2011-09-22, application 2010-49981 filed
2010-03-08, applicant Sigma Corporation, inventors Noriyuki Ogasawara and Takehisa Koyama, as in the file.

Maker diagram: no image was viewed in this pass. The comparison recorded in the deployment validation above stands:
Olympus's 18 elements in 13 groups with one Super ED, two ED and three HR elements and no aspheres, matching Example 2
(Super ED element 3, ED elements 2 and 9, HR elements 4, 11 and 12).

Fields changed: `name`, `subtitle`, `specs` and `apd` / `apdNote` on elements 2, 3 and 9 (set by the coordinator);
`focus.description` rewritten in plain sentences with the 8.30 mm G5a travel; the rear plate's `source` written as
"JP 2011-186095 A, Example 2, surfaces 33–34". Analysis: run-together numbers and words fixed throughout; the
identification paragraph reworded to the new subtitle's "probable design of the original 2010 lens" and to the
circumstantial Sigma attribution; the Example 2 vs Example 3 reasons stated as prescription details (Example 3 has
R10/R11 −40.68 / 31.37 and R12 +1000); Super ED / ED / HR positions named, with L10 (νd 70.44) noted as not ED;
"Validation Limits" heading renamed "Model Limits"; references to the validation report, audits and rendering
brackets removed. Engine output (built and probe) is identical before and after, and the surface validator passes.

Open: the 0.9 m wide-end close focus is not modelled. (Closed: the element 2 and 9 `apdNote` texts now identify the
ED positions by glass class — FCD1 fluorophosphate and FCD505 anomalous-dispersion crown — and say that L10, an
FK5-class crown at νd 70.44, stays untagged.)

## 2026-10-19 — Second review: diagram, labels and movement

Compared: the live local page (wide, 140 mm and tele, at infinity and 1.5 m; both movement overlays; the inspectors
of elements 1, 3, 9, 11 and 15) against FIG. 8 of `patents/JP2011186095A.pdf` (page 17, wide-end panel, measured
afresh from a 600 dpi render), the Example 2 table (pages 11–12), claims 1–4, paragraphs 0040–0047 and 0069, the
reference-sign list (paragraph 0076) and the aberration plots FIG. 9–11.

Scale, measured independently: 27 ink crossings on the axis column of the wide panel (29 surfaces; S3/S4 and
S24/S25 merge, S5 and S6 are not inked on the axis) fit the wide-infinity prescription; S1 to S32 is 978 px for 110.35 mm (8.863 px/mm), and every crossing lies within 1.5 px of its predicted
row. Arc sags of S1 (R 152.5) and S2 (R 66.5) at 7.8–20.4 mm from the axis agree with the same scale across the
axis, so the figure is isotropic. Rims were read as the centres of the drawn edge lines on both sides of the axis.

| Element | Stored | Figure half-width | Figure / stored |
|---|---|---|---|
| C1 doublet (E1/E2, S1–S3) | 23.5 | 199.0 px = 22.45 mm | 0.955 |
| E3 (S4–S5) | 23.5 | 194.8 px = 21.97 mm | 0.935 |
| E4 / E5 | 11.4 / 11.2 | 101 / 99 px = 11.40 / 11.17 mm | 1.00 / 1.00 |
| E6 / E7 / E8 | 8.1 / 8.0 / 8.5 | 73 (one side) / 71 / 75 px = 8.24 / 8.01 / 8.46 mm | 1.02 / 1.00 / 1.00 |
| E9 / C2 / C3 / E14 | 10.3 / 10.5 / 11 / 11 | 91 / 93 / 97 / 99 px = 10.27 / 10.49 / 10.94 / 11.17 mm | 1.00 / 1.00 / 0.99 / 1.02 |
| C4 (L5a) / C5 (L5b) | 7.1 / 7.7 | 63 / 69 px = 7.11 / 7.79 mm | 1.00 / 1.01 |

Every rim from L2 back is within 2 % of the drawing, so the first pass had those right. L1 was the one outlier: the
front doublet is drawn 4.5 % and E3 6.5 % smaller than stored, and the figure draws E3 slightly smaller than the
doublet where the file had them equal. With a scale that holds to 0.1 % over the whole lens and an edge reading good to
about 1 px (0.1 mm), these are real differences rather than measurement noise, and they were the only two elements not
at their drawn height.

| Change | Before | After | Evidence |
|---|---|---|---|
| `sd` S1, S2, S3 (C1) | 23.5 | 22.5 | FIG. 8 edge lines at 199 px; square-cut block, both faces at one height |
| `sd` S4, S5 (E3) | 23.5 | 22.0 | FIG. 8 edge lines at 195 px; square-cut, drawn just inside C1 |
| Element `name` | L1 … L18 | E1 … E18 | Paragraph 0076 and FIG. 8 use L1–L5, L5a, L5b for the groups; the patent names no element |
| Group brackets | G1, G2, G3, G4, G5a focus, G5b | L1, L2, L3, L4, L5a focus, L5b | The patent's reference signs |
| Doublet brackets and `cemented` | D1 … D5 | C1 … C5 | D5 was also the label of the first variable gap beside the slider |
| `focus.description` | G5a (L15/L16), G2 fixed | L5a (E15/E16), L2 fixed, travel 1.35 mm wide and 8.30 mm tele | Group notation and the keyframe travel |
| Element 9 `apdNote` | names L10 | names E10 | Element rename |

Clearance with the new L1 rims: the axial marginal ray at the nominal f-number peaks at 21.02 mm on S1, 20.81 on S2,
20.80 on S3, 20.57 on S4 and 20.30 on S5 (tele end; unchanged with focus), so the rims keep 1.5–1.7 mm of margin; the
corner chief ray peaks at 10.53 mm on S1. No surface clips the axial beam or blocks the chief ray at infinity or at
1.5 m. The surface validator passes with the default gap-sag, the image-circle floor reports nothing undersized,
field coverage is 81/81 stations at 100 %, and the aperture check keeps 81/81 stations within 3 % of the stated
f-number with none rim-limited. Engine half-field 10.76° at the wide end and F4.95 with an 8.75 mm stop radius,
before and after; only the drawing scale constants changed (largest rim 23.5 → 22.5 mm).

Engine vignetting curve (meridional, wide open, infinity), before → after: wide end 79.2 → 79.2 % at 8.0°; zoom
slider 0.25 84.4 → 84.4 % at 5.9°; 140 mm 82.3 → 82.3 % at 4.4°; slider 0.75 85.4 → 84.4 % at 3.0°; tele end 76.0 →
74.0 % at 2.1°, and 100 → 99 % at 0.4°. The exact trace's clipped share of the full-field meridional bundle at S1 rises
from 37 % to 42 %. This is front-group vignetting the drawing implies and was kept; neither curve covers the
sagittal bundle.

Found correct, not changed:
- Element `type` strings agree with the signs of R for all 18 elements; there are no aspheres and no `A` labels; the
  stop sits between S15 and S17, 7.35 mm ahead of S17, where FIG. 8 draws SP.
- The L4 bracket starts at the stop. FIG. 8's labelled L4 bracket starts at S17, but the inner bracket on the other
  side encloses SP with L4, and the stop moves with L4 because D15 precedes it. FIG. 8's overall L5 bracket is not
  drawn; L5a and L5b carry their own.
- Tags: the patent text never mentions anomalous dispersion or a glass name, so no `apd: "patent"` tag applies. The
  `"inferred"` tags on E2, E3 and E9 match the Olympus construction recorded in the deployment validation above (one
  Super ED, two ED, three HR, no aspheres); the three nd 1.91082 HR elements E4, E11 and E12 carry no `apd` tag. The
  inspectors show "APD (INFERRED)" on elements 3 and 9 and "DOUBLET C1" / "DOUBLET C4" on elements 1 and 15.
- Glass: all 18 labels resolve and match the printed nd/νd within 0.04 in νd (E9 FCD505 νd 68.66 against 68.62).
  Every pair except E5 (1.54814 / 45.82) and E17 (1.54072 / 47.20) recurs in Examples 1, 3 or 4; those two are exact
  HOYA E-FEL1 and E-FEL2 coordinates, so they are catalog glasses, not floated values. Nothing is `Unmatched`.
- Zoom: stations ascend 76.91 → 290.98 mm and every gap table follows that order. L2 is fixed to 0.001 mm at all 81
  stations (paragraph 0069; FIG. 8 draws L2's arrows horizontal). From wide to tele L1 moves 47.97 mm and L5 22.61 mm
  toward the object, monotonically, as FIG. 8's arrows show. L3 moves 8.10 mm toward the image to the middle station
  and 0.23 mm back by the tele end; L4 moves 2.01 mm toward the image to a turning point at about 120.5 mm, then
  5.22 mm toward the object. Both reversals are forced by the printed spacings (D9 3.89 / 11.99 / 11.76;
  D9 + D15 17.62 / 18.97 / 14.41 mm), and FIG. 8's L4 arrows run slightly imageward to the middle panel and then
  objectward. The deployment section's statement that L4 (then "G4") moves monotonically is therefore not right; the
  analysis now describes the reversal.
- Focus: keyframe 0 is infinity and keyframe 16 is 1.5 m; only L5a moves, toward the image as claim 1 and FIG. 8's
  focus arrow state, by 1.35 mm at the wide end, 3.56 mm at 140 mm and 8.30 mm at the tele end. The slider's far end
  reads 1.50 m.
- Aberrations against FIG. 9–11 (read from a 300 dpi render, about ±0.02 mm and ±0.3 %): model d-line longitudinal
  spherical aberration at pupil 1.0 / 0.85 / 0.7 / 0.5 is +0.047 / −0.067 / −0.101 / −0.079 mm at the wide end,
  −0.034 / −0.047 / −0.048 / −0.034 at 140 mm and −0.032 / −0.008 / −0.003 / −0.003 at the tele end, against plots that
  show a slightly undercorrected middle zone turning positive at the margin at the wide end and near-zero curves at
  the other two stations. Tangential / sagittal field shifts at the 10.82 mm corner are +0.064 / +0.048 mm (wide)
  and −0.072 / −0.014 mm (tele), against near-zero astigmatism plots leaning slightly positive at the wide end and
  with ΔM slightly negative at the tele end. Distortion at the corner is +0.51 / +1.47 / +1.37 %, against about
  +0.3, +1.5 and +1.4 % on the plots. The model agrees with the patent's plots.
- `gapSagFrac` is not needed; the validator accepts the new rims at the default.

Open: the 0.9 m wide-end close focus is still not modelled. The earlier sections of this log use G-notation and
L1–L18 element names; they refer to the same groups and elements as L1–L5 and E1–E18 here.
