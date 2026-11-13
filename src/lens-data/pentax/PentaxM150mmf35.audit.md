# PENTAX SMC M 150mm f/3.5 — audit log

## 2026-11-09 — Deployment validation

Independent check of US 4,134,645 Example 3 (PDF p. 6 and Claim 3's table, p. 7): 10 R, 9 d, 5 nd/νd and the back
focus 40.40 → 60.6 agree with the file at one scale factor ×1.5; the stop splits d6 into 6.0 + 29.985 (= 23.99 × 1.5).
Engine EFL 149.998 (150), f/3.5, half-field 8.2°, total length 119.01; F123 and F1234 reproduce.

Attribution probable: the 8.2° field is a 150 mm lens on 24×36, the sibling examples fit the M 120/2.8 and M 135/3.5,
JP priority August 1976 precedes the 1977 product; marketed 5/5, 1.8 m, 49 mm filter. No maker diagram found.
Open: `focus.closeFocusM` 10 is a placeholder (production 1.8 m); the analysis says L5's high index reduces the Petzval
sum where the patent says n5 > 1.62 prevents a decrease; package wording remains for the cleanup pass. No deployment
changes. (All three closed in the cleanup pass below.)

## 2026-11-09 — Cleanup and wording pass

Data file. Subtitle "Example 3; qualified product association, inferred apertures" became "Example 3 — probable match
to the 1977 production lens". Specs now read 5 ELEMENTS / 5 GROUPS, DESIGN f = 150 mm, DESIGN F/3.5, ALL SPHERICAL,
PATENT f = 100 SCALED × 1.5 (was 5/5, ALL SPHERICAL, QUALIFIED PATENT RECONSTRUCTION). `focalLengthMm.design` 150
(the patent's F = 100 × 1.5; was the computed 149.9977). Added `catalog.closeFocusM.marketing` 1.8. Focus is static:
`closeFocusM` 1e15 replaces the 10 m placeholder, with a plain description. Aperture `fStops` gain f/32,
`maxFNumber` 32, `blades` 6; minimum focus, f/32 and six blades are from Cine Lens Wiki (Kamerastore agrees on 1.8 m
and six blades). Header comment rewritten in plain terms with the same facts; the float 60.599999999999994 is 60.6.
Group labels Front / Rear. Every element gained a role.

Glass. The five patent pairs are exact catalog codes, so the Unmatched labels became OHARA equivalents, each checked to
resolve to its row: L1 NSL7 (1.511121 / 60.49), L2 S-TIH6 (1.805181 / 25.43), L3 S-BSL7 (1.51633 / 64.14), L4 S-TIH10
(1.72825 / 28.46), L5 S-LAL7 (1.651597 / 58.55). The `indexReferenceNote` boilerplate is gone.

Analysis. Removed the evidence-file, SHA-256, MTF-run and sample-lattice material and the placeholder wording. Added
the product (1977–1986, 5/5, 1.8 m, f/3.5–32, six blades, 49 mm, 75 mm long), the four-point attribution with its
caveats, the patent's seven conditions with Example 3's values, a glass table, a semi-diameter table and a
patent-versus-model table. L5 now says what the patent says: a high Abbe number and an index above 1.62 prevent a
decrease in the Petzval sum. The off-axis transmission figures are the engine's vignetting curve (95 % at 5.4°, 88 %
at 6.8°, 80 % at 8.1°).

Engine numbers are unchanged: EFL 149.9977 mm, f/3.5, half-field 8.2°, stop radius 17.3185 mm, paraxial back focus
60.5688 mm on a 60.6 mm final gap. Only `closeFocusM` and the largest f-number moved. The surface audit reports no
validation errors, and the aperture audit reports no rim limit.

Open: no Pentax construction diagram was found, so element shapes and the iris position are unchecked against a maker
drawing. The PhotonsToPhotos Optical Bench lists the lens, but the patent example behind that listing could not be
read. The patent's printed Petzval sum (0.020) differs from the surface sum of its own table (0.018), as it also does
for Examples 1 and 2.

## 2026-11-09 — Semi-diameter pass against the patent figure

Source: `patents/US4134645.pdf`, page 4 (sheet 3), Fig. 5, the section of Example 3, read at the native 300 dpi.
The drawn axis tilts about 0.7° (row 1351 at the left of the sheet, 1341 at the right), so heights are taken from the
local axis and averaged top and bottom. Vertex crossings give 540.5 px from S1 to S10 for 38.94 at F = 100, or 9.25 px
per model mm; three spans agree (S1-S6 143 px for 142 predicted, d6 332.5 for 333, S7-S10 65 for 65.6). The S1 arc
fits a radius of 466-483 px against 469 predicted, so the vertical scale matches. The automatic figure screen read
the front group at 21.07 / 21.07-21.39 / 20.11 mm. Its rear readings (about 17.5 mm) are the r7-r10 and d8-d9 leader
lines; the profile between the leaders and a 600 dpi zoom give 11.0 mm.

| Element | sd before → after | Fig. 5 reading | f/3.5 marginal ray, real trace | Basis |
|---|---|---|---|---|
| L1 (S1, S2) | 22.5 → 21.5 | 20.9 | 21.43, 21.29 | lowered to the marginal ray, the floor above the drawing |
| L2 (S3, S4) | 22.5 → 21.2 | 21.0 | 21.13, 20.81 | lowered to the marginal ray; square-cut, one height |
| L3 (S5, S6) | 21.9 → 20.6 | 20.6 | 20.55, 20.23 | lowered to the drawing, which clears the ray |
| L4 (S7, S8) | 11.25 kept | 11.0 | 9.98, 9.66 | agrees within 2 % |
| L5 (S9, S10) | 11.25 kept | 11.0 | 8.94, 8.80 | agrees within 2 % |

The front group read 6-7 % under the earlier rims, below the 10 % bar, so the first pass kept them. The owner asked
for rims closer to the drawings, and the closest set the ray check allows costs no light, so six front faces moved
4-6 %. The drawn heights of L1 and L2 lie below the marginal ray launched at the 21.43 mm entrance pupil, so those two
stop at the ray rather than at the drawing. The model now follows Fig. 5 within 3 %, and the front-to-rear height
ratio is 0.52 against 0.52 drawn. The step order matches: L1 and L2 nearly level, L3 slightly lower, L4 and L5 level.
L2 is drawn square-cut and L5 nearly so, and both keep one height per element. Fig. 5 draws S9 flatter than its
printed radius (sag 9 px at 78 px height against 14 px from R9 = -15.87), so the drawing is schematic there; the rim
height is unaffected.

With the final rims, the surface validator reports no errors and the image-circle and aperture audits flag nothing.
Corner coverage is 100 % at 8.1°, and the ray check shows no axial clip or chief-ray block. Corner illumination is
80.0 % at 8.1° before and after (95.0 % at 5.4°, 88.0 % at 6.8°), with 0.0 points lost at any field. EFL, half-field
8.2°, f/3.5 and the 17.32 mm stop radius are unchanged. The lens is static, so infinity is the only printed state; the
page renders the same at both ends of the focus control. The data header and the analysis table carry the new values.

Open: no maker construction drawing is known, so Fig. 5 is the only shape reference.

## 2026-11-09 — Second review: diagram, labels and movement

Compared the local page (infinity, the far end of the focus control, the focus-movement overlay, and the inspector for
L1, L2 and L5) with Fig. 5 on PDF page 4 at 300 dpi, plus a model-over-figure overlay. Scale, re-derived: the drawn axis
is the line y = 1359.03 − 0.0119x (0.68° tilt); vertex crossings run 541.5 px from S1 to S10 for 58.41 mm, or 9.27 px
per model mm, and three spans agree (S1-S6 143 px for 142.1, d6 332.5 for 333.6, S7-S10 66 for 65.8). At that scale the
model's S1, S5 and S6 arcs lie on the drawn ones. Rim heights, read to the line centre and averaged top and bottom:
L1 20.9 (20.99 / 20.89), L2 20.8 (20.94 / 20.70), L3 20.8 (20.94 / 20.73), L4 and L5 10.7.

| Element | sd before → after | Fig. 5 reading | Verdict |
|---|---|---|---|
| L3 (S5, S6) | 20.6 → 21.2 | 20.8, level with L2 | step order: the figure draws L2 and L3 level (0.00-0.03 mm apart at top and bottom); the page showed L3 0.6 mm below L2 |

L1 (21.5) and L2 (21.2) stay at the f/3.5 marginal ray, 3 % and 2 % above the drawing; the rear pair stays at 11.25, 5 %
above it and the limiting rim for off-axis light. With L3 at 21.2 the front three render as drawn: L1 a little taller,
L2 and L3 level. The surface validator, the aperture, image-circle and field-coverage audits and the ray check are clean.

Cuts against the pre-pass rims (no lands): L1 22.5 → 21.5, L2 22.5 → 21.2 and L3 21.9 → 21.2 each cost 0.0 points at
every field and are kept as slight. Final `rimcost.mjs` worst loss: 0.0 points; transmission 99.8 / 95.0 / 88.0 / 80.0 %
at 4.1 / 5.4 / 6.8 / 8.1°, as before. EFL 149.998 mm, f/3.5, half-field 8.2° and the 17.32 mm stop radius are unchanged.

Labels and movement. L1-L5 are the claims' own designations; every element type agrees with its radii; there are no
cemented surfaces, aspheres or special-glass tags, and the patent names no special glass. The Front / Rear brackets
cover S1-S6 and S7-S10 (the patent names no groups); the stop sits between L3 and L4. The inspector shows L2 biconcave,
f −121.61 mm, S-TIH6, and L5 negative meniscus, f −48.14 mm, S-LAL7. The lens is static: the diagram is identical at
both ends of the focus control, which reads "Not modeled", and the movement overlay reports no modeled movement.

Colour and field against Fig. 6 (F = 100 units). The d-line spherical aberration follows the plot within 0.013 at every
zone. The g-line paraxial focus is +0.040 behind the d-line in the model, where the plot starts both lines at 0; the
plot is d-referenced (the same method reproduces Example 1's offset in Fig. 2 within 0.011). Closing it would need a
partial-dispersion shift of +0.017 on L1, +0.020 on L3 or −0.009 on L2, beyond any catalog glass of these types, so no
relabel is proposed. Distortion is +0.97 % at 8.2°, +0.96 % plotted. Astigmatism at 8.2° is ΔS −0.049 and ΔM +0.006
against −0.080 and −0.199 plotted; a stop 24-25 mm behind S6 (16.0-16.7 at F = 100) reproduces both plotted curves to
0.006 rms at five field angles, against 0.071 at the modeled 6.0 mm.

Open: Fig. 6's astigmatism places the stop about 24 mm behind S6, not 6.0 mm; moving it is a gap change outside this
review, and on a scratch copy it would make the present front cuts cost 5.1 points at 8.1°, so the front rims would need
another look.
Open: the model's g-line paraxial focus sits 0.040 (F = 100) behind the plotted one; no catalog relabel closes it.
