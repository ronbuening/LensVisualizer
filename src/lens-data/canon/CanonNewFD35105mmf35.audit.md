# Audit Log — CANON New FD 35-105mm f/3.5

Patent: US 4,432,615 A, Numerical Example 2 (col. 6), Fig. 5.

## 2026-10-19 — Deployment validation

Source re-read: the patent has no text layer, so the table was read from 200 dpi renders. All 28 radii, 27
thicknesses/gaps, 15 nd/νd pairs, the stop position and the three variable gaps at each of the three zoom rows match the
data file. D17 is split into the printed gap less 0.87 mm plus a 0.87 mm stop gap, as the patent places the stop. No
aspheres; cemented pairs R1–R3 and R20–R22.

Patent vs model EFL: 36.2 / 70 / 102 vs 36.165 / 69.921 / 101.898 mm (about 0.1 % short). f/3.5 at every station. Group
focal lengths G1 +65.10, G2 −25.27, G3 −80.01, G4 +32.18. `audit:surface` OK, image circle OK, field coverage 41/41 at
100 %, no axial clip.

Departures from the literal example:

- Back focus 56.562 mm is the mean of the three printed rows' paraxial values; the largest defocus at a printed row is
  0.0044 mm.
- The 38 intermediate stations are a solved G2/G3 cam (EFL equal to the station label, fixed back focus).
- Infinity only. The patent's 3.3 mm G1 advance for 1.5 m is reproduced (3.29 mm) when 1.5 m is measured object to film.
- Semi-diameters and glass names are inferred.

Product: Canon Camera Museum (`global.canon/en/c-museum/product/nfd245.html`) lists April 1981, 15 elements / 13
groups, 1.5 m, 0.079×, 72 mm filter — consistent with Example 2. Example 1 (51.3–131.5 mm, 16 elements) and the later
f/3.5-4.5 (14/11, molded asphere) do not fit. Canon publishes no construction diagram for this lens.

Open: Macro mode is not in the patent. Wording items (an analysis claim that a manufacturer optical section exists, L12
type should be plano-concave since R22 is flat, a private Google Drive link in the analysis Sources, package jargon in
header/analysis/specs) were reported and not changed in this pass. (Wording items closed in the wording pass below; the
S10 corner-chief-ray item is closed in the semi-diameter pass below.)

## 2026-10-19 — Semi-diameter pass against the patent figure

Source: `patents/US4432615A.pdf`, page 7 (Sheet 6 of 7), FIG. 5. It is labelled R1–R28 and has 15 elements in 13
groups, so it is Example 2 and not Example 1 (FIG. 3, 16 elements). The narrow D7 (1.44 mm) and wide D15 show the
wide-angle position. Only native scan: 1-bit CCITT at 72 ppi on a 2320×3408 page. Measured at native resolution with
`figprofile` and 3–6× pdftoppm zooms. The axis is at page row 1908.5. The upper side is clean apart from R-label
leaders. The lower side was used to confirm each reading; its brackets and D-label leaders were left out.

Scale: from R1 (page x 692) to R28 (x 1668), 976 px stands for 91.486 mm at the wide position, so 0.0937 mm/px. The
figure is not drawn to one uniform axial scale. G1 (R1–R7) works out at 0.0910 mm/px, G2 (R8–R15) at 0.0902 and G4
(R18–R28) at 0.0953. Readings are given at the overall scale, with the group-local scale in brackets; this ±3 %
is the measurement band. As a check, the drawn stop marker reads 101 px = 9.5 mm against the engine's 9.35 mm stop
radius.

| Surface(s) | Element | Figure px | Figure mm (local) | Before | After | Evidence / reason |
|---|---|---|---|---|---|---|
| 1 | L1 | 345 | 32.3 (31.4) | 31 | 31 | In band. The flat flange top and the rear chamfer are mechanical. |
| 2, 3 | L2 | 300 | 28.1 (27.3) | 29 | 29 | In band (−3 to −6 %). |
| 4, 5 | L3 | 299 | 28.0 (27.2) | 28 | 28 | Agrees. |
| 6, 7 | L4 | 265 | 24.8 (24.1) | 26 | 26 | Edge of the band (−5 to −7 %). Kept, so front vignetting is unchanged. |
| 8, 9 | L5 | 181 | 17.0 (16.3) | 16 | 16 | In band at the local scale. |
| 10, 11 | L6 | 147 | 13.7 (13.2) | 12.5 | 12.9 | Figure +6 to +10 %. Square-cut rim; needs a 0.97 gap-sag allowance (see below). |
| 12, 13 | L7 | 130 | 12.1 (11.7) | 11.3 | 11.3 | Capped by L6's deep R11 (validator limit about 11.4; the faces meet at about 11.9). |
| 14, 15 | L8 | 129 | 12.1 (11.6) | 12 | 12 | Agrees. |
| 16, 17 | L9 | 104.5 | 9.8 (10.0) | 11 | 9.9 | Figure −10 to −11 %. Axial marginal ray is 9.05 at most. |
| 18, 19 | L10 | 112.5 | 10.5 (10.7) | 12 | 10.6 | Figure −11 to −12 %. Axial ray is 9.73 at most. |
| 20, 21, 22 | L11/L12 | 109.5 | 10.3 (10.4) | 11.8 | 10.4 | Figure −12 %. Square-cut cemented rim, all three faces kept equal. Axial ray is 9.66 at most. |
| 23 | L13 front | 122.5 | 11.5 (11.7) | 9.9 | 11.6 | Figure +16 %. Comparative order was wrong (see below). |
| 24, 25 | L13 rear / L14 front | — | — | 9.9 | 9.9 | Cross-gap limit (see below). |
| 26 | L14 rear | 129 | 12.1 (12.3) | 9.9 | 12.2 | Figure +23 %. |
| 27, 28 | L15 | 151 | 14.1 (14.4) | 9.9 | 14.2 | Figure +43 %. Comparative order was wrong. |

What changed: 15 surfaces (13 in the first edit, then S10/S11 in the follow-up below). The old file had L9–L12 about 11 % taller than the figure. It also had the three rear
elements at 9.9 mm, smaller than L10 and L11/L12. The figure draws the opposite: G4 rims grow toward the rear, with
L15 the tallest G4 element by 35 %. The front of G4 now matches the figure. L13's front face, L14's rear face and both
faces of L15 now follow the figure.

Values kept, and why:

- **R24/R25.** L13's concave R24 and L14's concave R25 close a 2.3 mm vertex gap. They would touch at about h = 10.5 mm.
  The validator allows 9.9 mm at the default 0.90 gap-sag fraction. FIG. 5 draws these two outlines crossing, which the
  prescription cannot do. The facing faces therefore stay at 9.9 mm. L13 renders with a sloped rim from 11.6 mm (R23)
  to 9.9 mm (R24), and L14 with one from 9.9 mm (R25) to 12.2 mm (R26). Both have positive edge thickness: L14 is
  0.96 mm thick at 12.2 mm.
- **R10/R11 (L6), first edit.** FIG. 5 draws L6's front rim against L5's deep R9 (R = 23.9). R9 and R10 would touch at
  about h = 13.2 mm. At the default 0.90 fraction the validator caps R10 at 12.5 mm, so 12.5 was kept at first.

The earlier open item about S10 is closed. With L6 at 12.5 mm, the real chief ray at the wide-angle corner crossed S10
at 12.50 mm: it grazed the rim but passed (41/41 field coverage, no BLOCKS-CHIEF). A raise was supported by the figure
(13.2–13.7 mm) and by the rays, and the faces do not cross below about 13.2 mm.

Follow-up, L6 raised to 12.9 mm on both faces (square-cut, as FIG. 5 draws it). The coordinator added
`checks.gapSagFrac` 0.97 to admit it. At h = 12.9 mm the R9 sag is 3.780 mm and the R10 sag is 2.036 mm, so the combined
sag is 1.744 mm against the 1.81 mm vertex gap. That leaves a residual air gap of about 0.07 mm at the rim, which is
the figure's near-contact without crossing. The validator reports no errors with the allowance. The trace still shows no
CLIPS-AXIAL or BLOCKS-CHIEF. The corner chief ray now clears S10 by 0.4 mm (12.50 mm against 12.9 mm), and the
one-sided bundle vignetting at S10 falls from 100 % to 89 %. Field coverage stays at 41/41 at 100 %.

Engine values with L6 at 12.9 mm:

- Wide half-field: 30.50° → 31.30°.
- Middle and long-end half-field: unchanged at 18.62° and 14.06°.
- Wide-open transmission at the wide corner (32.2°): 42.2 % → 47.9 %; at 29.3° it is 64.6 %, and at 26.3° 79.7 %.
- The middle and long-end curves are unchanged.

Clearance after the change. The surface validator reports no errors, and the image-circle check finds nothing
undersized. The traced corner chief ray reaches 21.65 mm at all 41 zoom stations. The meridional trace shows no
CLIPS-AXIAL and no BLOCKS-CHIEF. The tightest surfaces against the axial marginal ray are:

| Surface | sd (mm) | Axial marginal ray (mm) |
|---|---|---|
| S17 | 9.9 | 9.05 |
| S19 | 10.6 | 9.73 |
| S20 | 10.4 | 9.66 |

Engine values:

- Wide: f/3.5 and halfField 30.50° are unchanged.
- Middle station: halfField 17.43° → 18.62°.
- Long end: halfField 13.25° → 14.06°.
- Geometric transmission, wide open at infinity: wide corner (32.2°) 22.9 % → 42.2 %, wide at 26.3° 66.1 % → 79.2 %,
  middle edge 30.5 % → 46.8 %, long-end edge 36.8 % → 53.2 %.

Corner illumination rises because the rear rims grow to the figure's size. The new values trim G3 and the front of G4,
which adds some vignetting there. The front-group vignetting is unchanged.

Rendered check: the local app at 36.2, 70 and 102 mm matches FIG. 5. G4 now grows toward the rear, and G3 and the front
of G4 are no longer taller than the rear elements. A same-scale overlay of the model outline on FIG. 5 agrees within
about 1 mm everywhere except G2. There the figure's own wider G2 scale makes L5 and L6 look about 1.4 mm short at the
overall scale; at the local scale they are within the band.

Maker diagram: none was viewed. The deployment-validation section above records that Canon publishes no construction
diagram for this lens. The element and group count (15/13) is from the Canon Camera Museum listing. No aspherical
surfaces.

Limitations:

- The scan is a 72 ppi bilevel image, so each edge reading is uncertain by about ±1 px (±0.1 mm).
- The figure's axial scale varies by ±3 % between groups.
- The cross-gap limits at R9/R10, R11/R12 and R24/R25 keep those faces below the figure. Those parts of the figure are
  not physically realisable as drawn.

## 2026-10-19 — Deployment validation and wording pass

Source re-read: covered by the deployment-validation section above. All 28 radii, the 27 thicknesses and gaps, the 15
nd/νd pairs, the stop position and the three variable gaps at each printed zoom row match. Patent vs model EFL is
36.2 / 70 / 102 against 36.165 / 69.921 / 101.898 mm, and the model is f/3.5 at every station. Maker diagram: Canon
publishes none. The Canon Camera Museum lists 15 elements in 13 groups, which matches FIG. 5. No ED or aspherical
elements are claimed.

Fields changed in this pass:

- The coordinator had already changed `name`, `subtitle` and `specs`.
- In this pass:
  - The header comment was reworded in plain terms with the same facts, and now records the L6 gap allowance.
  - L12 `type`: Biconcave Negative → Plano-Concave Negative, because R22 is plane.
  - `focus.description` now says that only the infinity state is modelled and quotes Canon's 1.5 m production minimum
    focus. `closeFocusM` is unchanged.

Analysis changes:

- **Identification.** The sentence claiming a manufacturer optical section was replaced: the 15/13 count is now
  attributed to the Canon Camera Museum listing, and the text states that Canon publishes no construction diagram.
- **Element entries.** The boilerplate disclaimer in every entry was replaced with that element's role.
- **Plain wording.** Process vocabulary was removed, including "literal replay", "sentinel", "certified", "package
  validation report" and "native".
- **Heading.** "Aperture, Clear Apertures and Validation" became "Aperture and Clear Apertures".
- **Stale rule.** The statement that the 0.90 gap-sag rule is retained was dropped.
- **Sources.** The private Google Drive link was removed.

Open: Macro mode is not in the patent.

## 2026-10-19 — Second review: diagram, labels and movement

Compared: the local page at 36.2, 70 and 102 mm, the zoom-movement overlay and the element inspector (L1, L12),
against FIG. 5 (page 7) at 2×, 4× and 8× renders of the 72 ppi scan. Patent text read on pages 9–12: col. 5 for the
group roles, col. 7–8 for the stop and focus and the FIG. 5 legend, and page 8 for the FIG. 6 aberration plots.

Changes:

| Field | Before | After | Evidence |
|---|---|---|---|
| `groups` text | G1, G2, G3, G4 | I, II, III, IV | Col. 8 says "In FIG. 5, I, II, III and IV denote" the four groups. FIG. 5 prints the Roman numerals under its brackets. Surface ranges were already right. |
| `doublets` text and element `cemented` (L1/L2, L11/L12) | D1, D2 | C1, C2 | The patent's D1, D2 … are axial thicknesses. FIG. 5 prints D1 and D2 on the axis, and the slider shows the patent's D7/D15/D17. The inspector now reads "DOUBLET C1". |
| S12, S13 (L7) `sd` | 11.3 | 11.7 | FIG. 5 draws L7 and L8 the same height: 131/131 px on the upper side and 128/127 px on the lower. That is 11.5–11.8 mm at the group II local scale (0.0902 mm/px) and 12.0–12.3 mm at the overall scale. The site drew L7 0.7 mm shorter than L8. The first pass limited L7 by the R11/R12 cross-gap rule at 0.90. The 0.97 fraction already set for L6 admits 11.7 (combined sag 4.39 mm of the 4.60 mm gap, so the rim gap is 0.21 mm); 11.8 fails at the long-end stations. Both faces move together, so the rim stays square. |

Header comment and analysis prose now use the I–IV and C1/C2 labels. The L7 and L13 rim statements and the group
III reversal are added.

Clearance after the change: the surface validator reports no errors, and the image-circle check finds nothing
undersized. Field coverage is 41/41 at 100 %. The meridional trace to Y = 21.63 mm shows no CLIPS-AXIAL or
BLOCKS-CHIEF. At S12/S13 the axial ray is 7.80/8.10 mm and the chief ray 10.89/10.54 mm. The `--omega 30.9` run flags
front rims only because it applies 30.9° at every station, including 102 mm, so it was disregarded. The engine values
are unchanged: f/3.5, stop radius 9.352 mm, half-field 31.30° / 18.62° / 14.06° at wide / middle / long. The
meridional transmission at wide open and infinity rises only at the wide end, through 23.4° (92.7 → 95.8 %),
26.3° (79.7 → 84.9 %), 29.3° (64.6 → 67.2 %) and 32.2° (47.9 → 48.4 %). The middle and long-end curves are unchanged.
These numbers are meridional only and are not a full vignetting statement.

R24/R25 rechecked. The 8× render shows the following:

- L13 is drawn square-cut. Its flat top is at 11.5 mm and R24 runs up into its rear corner.
- R25 runs up to L14's top cap at about 11.9–12.0 mm.
- The two lines cross at about h = 9 mm on both sides of the axis.
- Neither face stops short, so the figure gives no basis for raising one face to full height.
- By the prescription the faces touch at h ≈ 10.5 mm. At 0.97 the validator would admit 10.3 mm; the gain is 0.4 mm and
  within noise, so both stay at 9.9 mm.
- With R24 at 11.6 and R25 at 9.9, the validator would pass, but L13's rear corner would sit only 0.15 mm inside L14's
  straight rim edge, a wrap the drawing does not settle. It was not adopted.

Silhouette differences that remain and are accepted:

- The flange and chamfer of the L1/L2 block are mechanical.
- L4 is 5–7 % above the figure.
- L5 and L6 read 4 % under at the local scale.
- L13 and L14 have sloped rims, for the reason above.

Checked and found correct:

- Element types against the signs of R. L8 is nearly plano-convex (R15 −6974) and L15 nearly plano-convex (R28 +4212);
  their labels are acceptable.
- All surfaces are spherical, and no `asph` entries or A suffixes are present.
- No `apd` tags, which is right, since the patent names no special glass.
- The stop sits between R17 and R18, 0.87 mm ahead of R18 (col. 7).
- Element `name` (L1–L15) and `label` agree, and there is no `diagramLabel`.

Movement, from the printed table (D7 1.444 / 17.051 / 23.459, D15 16.612 / 3.009 / 2.924, D17 10.4 / 8.4 / 2.073):

- Stations ascend 36.2 → 102 mm and every gap row follows that order.
- Group I does not move (col. 5: stationary during zooming).
- Group II moves monotonically 22.02 mm toward the image, matching the straight arrow under II.
- Group III moves 0.36 mm toward the object to about 44.6 mm, then 8.69 mm toward the image. This matches the curved
  arrow under III and col. 7, which says the third group "moves at least reciprocatingly".
- Group IV is fixed to within 0.004 mm. The printed middle row's gaps sum 0.004 mm more than the end rows.
- Focus has one infinity keyframe, and the slider reads "Not modeled".

Aberrations against FIG. 6, from a scratch real-ray and Coddington trace:

- Distortion is −4.55 % at 30.9° (patent about −4.5 %), +2.00 % at 17.2° (about +1.8 %) and +3.85 % at 12°
  (about +4.1 %).
- Wide spherical aberration at the half-aperture zone is −0.19 mm (patent about −0.17).
- Sagittal field agrees within about 0.1 mm at all three stations.
- The meridional field does not agree at full field. At the field edge the model's meridional focus is 0.3–0.6 mm more
  positive than the patent's M curve: +0.35 against −0.26 at 30.9°, +0.19 against −0.02 at 17.2°, and +0.15 against
  −0.30 at 12°. The site's field-curve chart shows the same rise. With the radii re-read and the distortion matching,
  this stays an open discrepancy and is not treated as a transcription error.

Glass:

- All eight labels resolve, and the catalogue νd is within 0.06 of the printed values.
- 1.80518/25.4, 1.65844/50.9, 1.6968/55.5 and 1.60311/60.7 recur in Example 1.
- The other four (1.83481/42.7, 1.804/46.6, 1.84666/23.9 and 1.54072/47.2) are standard catalogue codes, so real
  materials.
- S-NPH53 is a later niobophosphate equivalent of the 847/239 code. A 1981 Canon melt would more likely be a dense
  titanium flint of the same code; no change is made.

Open: the meridional field mismatch at full field, and the R24/R25 drawing conflict.

Coordinator follow-up, same day: L8 and L13 relabelled "S-NPH53 (Ohara equivalent)" → "PBH53 (Ohara equivalent)".
Both rows sit on the printed 1.84666 / 23.9 (νd 23.886 vs 23.884); PBH53 is the dense flint of the 1981 period, while
S-NPH53 is a later niobophosphate glass. R24/R25 stay at 9.9 mm (a 10.3 mm rim would pass but is within reading
noise).
