# Audit Log — SONY 70-300mm f/4.5-5.6 G SSM

Patent: JP 2009-168934 A (Tamron), Example 3 (pp. 10–11), Fig. 3.

## 2026-10-19 — Deployment validation

Source re-read from 250 dpi renders: all 28 rows (R, d, nd, νd), the stop at row 11, the four cemented groups and all
30 variable-gap values (d5, d10, d15, d23, BF at wide / middle / tele, infinity and 1.6 m) match the data file. No
aspheres. The printed indices are nd (1.48749 / 70.44, 1.49700 / 81.61, 1.84666 / 23.78), matching the d-line reference.

Patent vs model: EFL 71.7730 / 140.0942 / 291.9632 vs 71.7730 / 140.0943 / 291.9633; BF 52.592 / 77.133 / 98.397 (defocus
under 0.0004 mm); total length 175.925 / 206.840 / 235.878 exact; ω 16.41 / 8.53 / 4.12° reproduced at Y 21.633; group
focal lengths exact; conditions (1) 3.84 and (3) 7.81 reproduced. The 1.6 m object distances 1424.07 / 1393.16 / 1364.12
come out as 1424.00 / 1393.16 / 1364.13. `audit:surface` OK, image circle OK, field coverage 41/41 at 100 %.

Departures from the literal example: 38 of 41 stations are a calculated cam (G1, G3, G5 and total length linear; G2 and
G4 solved for linear EFL and zero defocus — plain gap interpolation defocuses by up to 13.3 mm mid-to-tele); intermediate
G5 focus positions reconstructed with d23 + BF constant; F-number linear between printed stations; rims and glass
names estimated.

Product: Sony lists 16 elements / 11 groups, one ED element, 1.2 m, 0.25×, 62 mm filter, on sale 28 March 2008 (the
Tamron filing is January 2008). Sony's diagram (`sony.jp/products/picture/SAL70300G_002.jpg`) matches the patent group
by group, with the ED element third in G1 (1.497 / 81.61). Examples 1, 2, 4, 5 and 6 are 72–390 mm designs.

Open: `offAxisFieldFrac` is 0.3
instead of the default 0.6, which hides corner vignetting. The model stops at the patent's 1.6 m against the marketed
1.2 m. The SAL70300G2 (2015) is also 16/11 with one ED element and 1.2 m and probably shares the optics; not confirmed.
Wording items (missing spaces, subtitle and analysis jargon such as "correlation" and "certified"): closed by the
wording pass below.

## 2026-10-19 — Semi-diameter pass against the patent figure

Source: `patents/JP2009168934A.pdf`, PDF page 22 (sheet 21), Fig. 3 — the third-embodiment section (brief description
of drawings, sheet 19), wide-end panel (広角端), object at the bottom of the page. The embedded raster is 400 ppi; it was
measured at 400 and 800 dpi. Scale: the 25 axial crossings line up with the wide/infinity prescription. Surface 1 to 28
is 630 px for 123.333 mm, so 0.1958 mm/px at 400 dpi. Part spans give 0.191–0.197 (G1 15.38 mm, G3 8.03 mm, G4
16.71 mm, G5 7.72 mm), and the variable gaps d10 and d15 give 0.196 and 0.198. Rims are each element's vertical edge,
averaged across both sides of the axis, which cancels an axis offset of about 1 px. Two further checks support the
reading. The drawn edge thicknesses of the last G4 element (1.8 mm) and the first (1.9 mm) equal the prescription
values at 12.4 mm. A red overlay of the model outline on the figure agrees at every element.

| Surfaces | Element | Before | Figure | After | Evidence |
|---|---|---|---|---|---|
| 1–2 | L1 | 29 | 25.9 | 25.9 | Edge at ±264.5 px at 800 dpi; the drawn edge (2.2 mm including line width) fits the 1.6 mm edge thickness |
| 3–5 | D1 | 26 | 25.0 (s5 corner 24.4) | 25.0 | Inside the noise band; lowered so L1 stays about 0.9 mm larger, as drawn |
| 6–7 | L4 | 12 | flange 13.9; s7 curve ends at 11.1–11.5 | 12 (kept) | The drawn rectangle is a mounting flange. s7 at 13.9 would cross s8 |
| 8–10 | D2 | 12 | 12.9 | 12 (kept) | 7 %, inside the noise band; the step order (L4 flange outside D2) is not inverted |
| 12–15 | L7, L8 | 11.5 | 12.2, one shared rim | 11.6 | Axial clip fix (s12 needs 11.58). L8 follows so that the shared rim the figure draws stays square |
| 16–17 | L9 | 15 | 12.4 | 12.4 | 0.83 of the stored value; the edge thickness matches |
| 18–21 | T1 | 13 | 12.4 outer, 12.0 middle | 12.4 | Brought flush with L9 and L13 as drawn; otherwise T1 would stand 0.6 mm proud |
| 22–23 | L13 | 14 | 12.4 | 12.4 | 0.89 of the stored value; the edge thickness matches |
| 24 | L14 front | 10.5 | 11.5 | 11.5 | G5 is drawn as one flush rectangle |
| 25 | L14 rear | 10.5 | curve meets the rim (it crosses s26 at about 11.2 mm) | 10.6 | Highest value the 0.90 gap-sag limit allows against s26; the remainder is a flat flange |
| 26–28 | D3 | 10.5 | 11.5 | 11.5 | Flush with the L14 front, as drawn |

The stop is unchanged. No aspheres. No `gapSagFrac` change is needed. s25 cannot follow the rest of G5 to 11.5 mm
because the s25 and s26 curves cross near 11.2 mm (11.0 mm alone would need a fraction near 0.96), so a flange step is
the correct model.

Clearance after the edit, at infinity and at 1.6 m over all 41 stations: no axial clip, no blocked chief ray. The
smallest axial margins are s12 0.02 mm, s3 0.48 mm, s17 0.55 mm, s6 0.66 mm and s1 0.69 mm (tele). The validator,
the image-circle floor and field coverage (41/41 at 100 % to the 21.6 mm corner) all pass. The engine half-field
rose at wide (18.10° to 19.63°) and fell slightly at tele (7.04° to 6.70°, now limited by s3; the patent's ω is
4.12°). The f-number is unchanged. Wide-open geometric transmission at the patent corner field is 44.8 % at wide (was 39.6 %), 81.9 % at
8.5° mid (was 79.7 %) and 64.9 % at tele (was 64.3 %). The G1 cut adds a little mid-field vignetting at wide (95.3 %
at 5.5°, was 97.9 %).

The figure's G1 surface labels (r1–r6) and image-side numbering up to r32 do not follow the table's 28 rows. The
drawing is used for shape only.

## 2026-10-19 — Deployment validation and wording pass

The source re-read, the patent-versus-model first-order values and the comparison with the maker's diagram are in the
deployment validation section above; nothing in them changed. The maker's diagram shows 16 elements in 11 groups with
one ED element, third in G1, and that is now tagged on element 3 as an inferred APD.

Data file: the subtitle, specs and element 3 APD tag were set by the coordinator. This pass rewrote the header comment
(spacing in "1.6 m" and "1.2 m", "row 11", "13.3 mm"; the pipeline words "correlation", "certified" and
"reconstruction" replaced). It rewrote `focus.description` to say plainly that the infinity and 1.6 m states are
printed, that G5 moves 0.73 / 1.62 / 4.82 mm toward the image at wide / middle / tele, that intermediate positions
are calculated, and that Sony's marketed minimum focus is 1.2 m. The three conjugate `source` strings now read
"JP 2009-168934 A, Example 3, Table 3-1 d0". Built and probe output, before against after: identical. The surface
validator passes.

Analysis: spacing fixed ("row 11", "surface 28", "d23 + BF"). The paragraph repeated in all 16 element entries about
the in-air focal length is now one sentence under Optical Architecture. Process wording was removed or plainly
restated: "validation evidence", the gap-sag remark and "certify". The heading "Aperture, Clear Apertures and
Validation" became "Aperture and Clear Apertures". The glass section now credits L3's ED status to Sony's diagram,
which matches the new APD tag.

Interpolation defocus, closed: a paraxial trace with all printed gaps interpolated linearly between the printed
stations gives a maximum of 13.30 mm, at 59 % of the way from the middle to the tele station. The wide-to-middle
segment is smaller. The residuals at the printed stations are 0.0004 mm or less. The deployment validation section's
"about 12.8 mm" now reads 13.3 mm, matching the header and analysis. Still open from above: `offAxisFieldFrac` 0.3, the 1.2 m
marketed minimum focus that is not modeled, and the SAL70300G2 identity.
