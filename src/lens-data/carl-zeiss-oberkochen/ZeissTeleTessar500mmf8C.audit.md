# Audit Log — CARL ZEISS Tele-Tessar 500mm f/8 C

Patent: US 3,134,841 A, sole numerical table (p. 2), figure on p. 1.

## 2026-10-19 — Deployment validation

Source re-read: the table's text layer is garbled, so it was read from a 300 dpi page render. All 8 radii, 9 spacings
(including the 159.5 + 5 split around the stop), 5 nd/νd pairs and s′ match the data file at ×500. All surfaces are
spherical; the element shapes, both cemented pairs and the stop position agree with the patent figure.

Patent vs model: EFL 500 vs 500.094 mm; front group +0.591 and rear group −0.481 (normalised), both exact; f/8.
Zeiss data sheet (Cat. No. 10 46 03, C version, printed X/73): 5 elements / 3 components, 203.2 mm first-to-last vertex
(exact), H′ 125.5 mm (model 125.53), entrance pupil 62.5 mm diameter 477 mm behind the first vertex (model 62.51 /
477.5), exit pupil 8.4 mm in front of the last vertex (model 8.42), ∞–8.5 m. The sheet's section thumbnail shows the
same singlet + doublet … doublet layout. `audit:surface` OK, image circle 100 %, field coverage 100 %, no axial clip.

Departures from the literal example:

- Back focus is the Gaussian 171.363 mm, not the printed 171.4 mm (−0.037 mm).
- Focus to 8.5 m is a derived unit extension; the patent has no finite state.
- Clear semi-diameters 43 mm front / 16 mm rear are inferred. The relative illuminance they give at f/8 (0.90 / 0.72 /
  0.52 at 20 / 30 / 40 mm) agrees with the data sheet's curve (about 0.9 / 0.71 / 0.5).
- Glass names are nd/νd surrogates.

Open: exit-pupil diameter 22.47 mm vs the sheet's 22.7 mm. Wording items (name casing against the corpus's all-caps
form, missing spaces between numbers and words in the header and analysis, the "PRINTED STOP POSITION" spec chip, the
"Sumita equivalent" label on BK1, and a hasselbladhistorical.eu link that fails its TLS check) were reported and not
changed in this pass. Wording items closed in the 2026-10-19 wording pass below; the TLS link is kept as the sheet's
only citation.

## 2026-10-19 — Semi-diameter pass against the patent figure

Source: `patents/US3134841A.pdf`, page 1, the sole section drawing (axis vertical, object at the bottom, image plane
drawn as a bar at the top). This is the drawing of the tabulated example. The page is a 300 dpi CCITT raster, measured
at that native resolution with figprofile and per-row ink runs. The scanned axis leans about 0.6° (x ≈ 1119 px at the
image bar, ≈ 1105 px at the front group), so rims were taken as half the full drawn width, not from the axis.

Scale: first vertex (r1, row 2552.5) to the image bar (row 1057) is 1495.5 px against 374.56 mm (203.2 vertex span plus
171.36 back focus), giving 0.2505 mm/px. Check spans: r1 to r8, 818.5 px against 203.2 mm (0.248), and r5 to r6,
652.5 px against 164.5 mm (0.252). Element thicknesses at the axis agree: L1 49 px (12 mm), LII 47 px (12 mm), LIII
32 px (8 mm). The drawing is to scale apart from the 0.2 mm L1–LII air gap, which is drawn about 9 px wide. Adopted
scale: 0.250 mm/px. The outlines are drawn with 5–6 px strokes. Rims are the mean of the stroke-centre and outer-ink
readings, with ±0.35 mm stroke uncertainty.

| Surface | Before | Figure reading (centre / outer) | After | Note |
|---|---|---|---|---|
| 1, 2 (L1) | 43 | 313 / 318 px full width → 39.1 / 39.75 mm | 39.4 | square-cut rim; drawn wider than the doublet |
| 3, 4, 5 (LII + LIII) | 43 | 296 / 301 px → 37.0 / 37.6 mm | 37.3 | both members drawn at one height |
| 6, 7, 8 (LIV + LV) | 16 | 93.5 / 99 px → 11.7 / 12.4 mm | 12.0 | square-cut; matches the text's 24 mm shutter passage |

All eight values changed (−8 % L1, −13 % front doublet, −25 % rear doublet). The old values were one blanket 43 mm
for the whole front group, so the figure's step between L1 and the doublet (about 2 mm larger on L1) was missing.
STO is unchanged; the engine derives it from f/8 (11.95 mm). The drawing also shows two short diaphragm strokes at
191.75 mm from r1, the printed stop position, with an opening of about 76 px (≈ 9.5 mm radius). That is smaller than
the f/8 radius and reads as schematic, so it was not used.

Clearance after the edit, real-ray trace at f/8 with the 39.9 mm sheet half-diagonal (ω 4.45°): the axial marginal
ray reaches 31.26 / 30.86 mm on L1, 30.61 to 28.82 mm on the front doublet and 11.37 / 11.09 / 10.67 mm on the rear
doublet, so every rim clears. The corner chief ray reaches 37.56 mm on r1 and 35.94 mm on r3, and also clears. There is
no axial clip and no chief-ray block at infinity or at 8.5 m. The surface validator, the image-circle floor and field
coverage (100 %, 4.4° corner clear) all pass. f/8 is unchanged (audit:aperture within 3 %).

The engine's derived half-field fell from 5.15° to 4.62° and is now limited by r3 instead of r1. That is still past
the 4.45° the 39.9 mm corner needs. The exit pupil is unchanged (22.47 mm diameter, 8.42 mm ahead of r8), because it
is the paraxial image of the stop through the rear doublet. These rims do not affect the open item against the sheet's
22.7 mm.

Vignetting, geometric transmission wide open at infinity, before → after: 89.1 → 82.3 % at 2.2°, 79.2 → 72.4 % at
2.9°, 69.3 → 61.5 % at 3.7° and 59.4 → 50.5 % at 4.4°. The front rims account for most of the drop (the rear doublet
alone costs about 2 points at the corner). Interpolated to 20 / 30 / 40 mm image height, the same tool gives about
0.81 / 0.65 / 0.48 (before 0.88 / 0.73 / 0.57). The Zeiss sheet's curve reads about 0.9 / 0.71 / 0.5. The new rims fit
it better at the corner and less well in mid-field. The rims follow the patent figure and were not tuned to the sheet.

Live render compared at infinity and at 8.5 m: the singlet now stands slightly taller than the front doublet, and the
rear doublet is about a third of the front height, as drawn. A red model outline over the patent crop at the same scale
matched the L1, doublet and rear-group widths to within a stroke width, and the image-plane bar to within 4 px.

Limitations: the rims come from a single drawing at about 4 px per millimetre. The production lens's rims may differ.
The data sheet's section thumbnail was not measured.

## 2026-10-19 — Deployment validation and wording pass

Source re-read and patent-versus-model first-order values are as recorded in the deployment validation section
above: all 8 radii, 9 spacings, 5 nd/νd pairs and s′ match at ×500. EFL is 500.094 mm against the patent's 500 mm
(sheet 500.1 mm), at f/8, with the 203.2 mm vertex span exact. The data sheet's section thumbnail shows the same
5-element / 3-component singlet + doublet … doublet layout. The design has no special-dispersion and no aspheric
elements. The section drawing on patent p. 1 was measured for the semi-diameter pass above.

Fields changed in this pass. The coordinator set the name, subtitle, spec chips and L1 glass label. In the data file,
the header comment was rewritten in plain sentences with every fact kept: normalisation and ×500 scale, the printed
stop split, the f/8 iris, the Gaussian versus printed back focus, the derived 8.5 m focus, the rim basis and the
probable Cat. No. 10 46 03 identification. `focus.description` now says the whole lens moves as a unit from a 171.36
to a 206.21 mm back gap, and that the extension is derived, not published.

In the analysis, run-together numbers were spaced and the Cat. No. form normalised. The glass sentence names BK1 as
a legacy Schott type matched with the SUMITA curve. The 24 mm figure is described as the shutter's clear passage.
Package and checking vocabulary was removed: preserved originals, recorded checks, certification, "successful rays"
and the gap-sag note. The heading "Apertures, Field and Validation Limits" became "Apertures, Field and Model Limits",
and the catalog citation was given readable page numbers. The hasselbladhistorical.eu link stays, because it is the
only citation for the Zeiss sheet's data (pupils, cardinal points, 8.5 m, 56.5 mm format, relative illuminance).
Engine EFL, f-number, half-field, stop radius, back focus and all 17 focus keyframes are identical before and after.

Open: exit-pupil diameter 22.47 mm vs the sheet's 22.7 mm (not affected by rims). Element labels 4 and 5 stack in
two rows in the full-lens render because the rear doublet is only 6.5 mm thick at this scale; that comes from the
shared label packer, not a lens field.

## 2026-10-19 — Second review: diagram, labels and movement

Compared: the live page at infinity, at 8.5 m and with the focus-movement overlay, against the sole section drawing on
patent p. 1 (300 dpi native raster) and the table and text in columns 1–2.

Silhouette. Rims were re-measured from per-row ink runs on the native raster, independently of the first pass. LI is
319 px across at the outer ink and 313 px at the stroke centres (39.9 / 39.1 mm radius). The front doublet is 302 / 296 px
(37.75 / 37.0 mm). The rear doublet is 99 / 94 px (12.4 / 11.75 mm). All three have straight cylindrical edges in the
drawing; LI's drawn edge is about 36 px (9 mm) long, against a model edge thickness of 8.2 mm. The stored 39.4 / 37.3 /
12.0 mm sit inside each reading, the singlet renders taller than the doublet and the rear doublet about a third of the
front height, as drawn. No rim was changed.

Diaphragm. The drawing has two diaphragm strokes 4.4 mm in front of r6, which is the printed 5 mm d5″ split. They run
from about 9.5 mm to 20.2 mm radius (inner ends 39 and 37 px from the axis at x = 1113, outer ends 80.5 and 81 px). The
19 mm opening is schematic. The text gives f:8 and a 24 mm shutter passage, and the engine's f/8 stop is 23.9 mm across.
On the site the stop is drawn as short ticks at that radius, level with the 12 mm rear rim. The patent draws a plate
reaching out past the rear group. That difference is in the renderer's stop marker, not in any lens field. The STO
`sd` stays derived.

| Field | Before | After | Evidence |
|---|---|---|---|
| element `name` 1–5 | L1, L2, L3, L4, L5 | LI, LII, LIII, LIV, LV | Patent table "Lenses" column and drawing labels L_I to L_V |
| element `diagramLabel` 1–5 | (none; ids 1–5 drawn) | LI, LII, LIII, LIV, LV | Same; name and diagram label now agree |
| analysis, element section | L1–L5 | LI–LV, with a note that the names are the patent's | Same |
| analysis, apertures | — | sentence on the schematic 19 mm diaphragm opening | Measured above |
| header comment | "L1 39.4" | "LI 39.4" | Same naming |

The diagram now packs the front labels in two rows (LI LII below, LIII above) and the rear labels as LIV below LV, from
the shared label packer.

Found correct. Types: LI and LII biconvex (r1 +, r2 −; r3 +, r4 −), LIII and LV biconcave (r4 −, r5 +; r7 −, r8 +), LIV
biconvex (r6 +, r7 −). The rear doublet has the positive, more dispersive member (νd 36.34 against 60.29) on the
diaphragm side, as the text requires. Group brackets FRONT (r1–r5) and REAR (r6–r8) bracket the patent's object-side
collective and image-side dispersive partial systems. The doublet brackets D1 (r3–r5) and D2 (r6–r8) match the two
cemented components. The only gap label is BF, so they cannot be mistaken for a slider label. The patent marks no
asphere and no special glass, and the file has no `asph` entry and no `apd` tag. The stop sits in the d5′/d5″ gap
between LIII and LIV. The inspector for LIII and LIV shows the right type, glass, focal length (−377.01 and +140.39 mm)
and doublet tag.

Movement. Focus key 0 is infinity (back gap 171.363 mm) and key 16 is 8.5 m object to image (206.210 mm), rising
monotonically. The overlay shows both groups moving 34.85 mm toward the object together, and nothing else moves. A
thin-lens check with the 288.0 mm principal-plane separation gives the same 34.85 mm extension. The slider's far end
reads 8.50 m.

Aberrations and glass. The patent prints no aberration curves. On-axis longitudinal spherical aberration of the
prescription is −0.153 / −0.116 / −0.082 / −0.043 mm at pupil 1 / 0.85 / 0.7 / 0.5 at f/8. That is a well-corrected
lens, in line with the text's claims, and gives no sign of a misprinted radius. With one example, no nd/νd pair recurs
in the patent. All five glass labels resolve, and the catalog νd is within 0.03 of the printed value for every one.

After the edits, the engine values are unchanged: EFL 500.094 mm, f/8, stop radius 11.95 mm and half-field 4.62°. The
surface validator, image circle (100 %) and field coverage (100 %) pass. Real-ray clearance at f/8 with ω 4.45° shows no
axial clip or chief-ray block. Vignetting is unchanged at 50.5 % at 4.4°, since no rim moved.

Open: the stop marker is drawn shorter than the patent's diaphragm plate (renderer); exit-pupil diameter 22.47 against
the sheet's 22.7 mm, as before.
