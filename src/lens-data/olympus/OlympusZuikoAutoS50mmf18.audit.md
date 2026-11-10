# Audit Log — Olympus Zuiko Auto-S 50mm f/1.8

Patent: US 4,728,179, master lens (Figure 3, table in column 6)

## 2026-11-01 — Deployment validation and cleanup

### Patent re-read

Read from page images of `patents/US4728179.pdf` (table PDF page 9, Figure 3 PDF page 2): 10 radii, 9 spacings, 6 indices,
6 Abbe numbers, no mismatches. D5 = 13.0 is split 6.5 + 6.5 around the inferred stop. All surfaces are spherical and the
patent prints no variable gaps. Front page matches `source`: patent number, 1988 grant, Hayashi and Takase, Olympus Optical.

The master has no example designation beside Embodiments 1 to 4, so `source.example` stays absent under
LENS_DATA_SPEC.md § The transcribed example, with the queue row in `agent_docs/patent-example-queue.md`.

### Patent against model

| Quantity | Patent | Model |
|---|---|---|
| f | 51.84 | 51.8405 |
| F-number | 1.86 | 1.860 |
| Back focus | not printed | 37.856 (paraxial, infinity) |
| Total length | not printed | 74.026 |
| Field, conjugate, stop, clear apertures, focus travel | not printed | see below |

Master at infinity plus the printed d0 against the printed converter data:

| Embodiment | d0 | Printed β | Computed β | Printed fR | Computed fR | Printed fM | Computed fM |
|---|---|---|---|---|---|---|---|
| 1 | 3.2334 | 1.6182 | 1.6182 | -70.00 | -70.00 | 494.8 | 494.8 |
| 2 | 1.7334 | 1.6446 | 1.6446 | -71.26 | -71.26 | -753.9 | -753.9 |
| 3 | 1.2334 | 1.6075 | 1.6075 | -79.35 | -79.35 | -365.9 | -365.9 |
| 4 | 1.2334 | 1.6437 | 1.6437 | -72.62 | -72.62 | -952.4 | -952.4 |

On Embodiment 4, β moves 0.0037 per 0.1 mm of gap, so the printed four decimals fix the last gap to about ±0.002 mm.

Figures 4 to 7 are labelled F/3.0, F/3.1, F/3.0, F/3.1 and 14.4°, 14.2°, 14.5°, 14.2°. With the computed combined focal
lengths of 83.888, 85.257, 83.332 and 85.211 mm these give image heights of 21.54, 21.57, 21.55 and 21.56 mm, so 135 format.
Longitudinal spherical aberration at F/1.86 is +0.071, -0.067, -0.105 and -0.081 mm at pupil 1, 0.85, 0.7 and 0.5.

### US 4,291,952 Embodiment 2

Read from the Google Patents text of US 4,291,952 and its GB family member GB 2042209 A, not from page images; the patent
is not in `patents/`. Embodiments 1, 2, 3 and 5 recompute to EFL 100.00 and the printed fB to three decimals, Embodiment 2
at fB 73.063. Embodiment 2's d1 is garbled in the text and is taken from Σd = 69.827, giving 8.686.

Same six indices as the master. At scale 0.5184 the spacing differences are all at most 0.010 mm (D5) and the radii differ
by R1 -0.32 %, R2 -0.43 %, R7 +0.36 %, the others at most 0.07 %. The master meets conditions (1) to (7): mean νd of L1, L5,
L6 35.9; ν3 25.71 and ν4 28.46; n3 - n2 0.182; (d3 + d4)/f 0.152; f1/f6 1.124; r1/f 0.652; (d6 + d7)/f 0.140.

The master was kept as the transcribed source: it is printed at real scale with rounded spacings. Re-sourcing to Embodiment 2
would give a numbered example at f = 100.

### Public diagram comparison

The section at https://allphotolenses.com/public/files/optical/728a84e050a2dc281d617384dabf2736.jpg, labelled the MC version,
shows singlet, cemented doublet, stop gap, cemented doublet, singlet. At 8.35 px/mm:

| Surface | Model x | Drawn x |
|---|---:|---:|
| S4 | 192 | 190 |
| S5 | 203 | 204 |
| S6 | 311 | 305 |
| S7 | 325 | 322 |
| S8/S9 | 372 | ~368 |

Largest difference 6 px, 0.72 mm. The earlier 6/5 drawing, https://allphotolenses.com/public/files/optical/3b1d6f5aaf67b7c8f1a16a1d07d30882.jpg,
has L2 and L3 air-spaced and does not match. The drawing comparison was done by the coordinating review, not re-measured here.

### Figure 3 rims and vignetting

Figure 3 at 600 dpi has an axial scale of 36.9 px/mm from the vertices of R1 and R10. Drawn heights read 16.22 (S1, S2),
13.70 (S3, S4), 10.43 (S5), 11.06 (S6), 12.63 (S7), 13.10 (S8), 13.64 mm (S9, S10). The model's rims are 5-6 % below these,
with ratios within about 1 %. Fitting the printed radii to the drawn arcs gives about 38.4 px/mm, and the difference drops
to about 2 %. Rims were not changed.

Stop-limited geometric transmission from the app's vignetting analysis, wide open at infinity: 82.0 % at 11.5°, 46.9 % at
20.1°, 33.0 % at 23.0°. A separate ray trace gave 80.9 % at 11.8° and 32.9 % at 23.0°, and 32.8 % and 32.5 % with the stop at
z = 17.5 and 20.5 mm. Axial marginal heights at F/1.86 clear every rim; S5 is tightest, 9.66 against 9.887 mm.

### Close focus

Unit focus, solved paraxially: principal planes at z = 30.662 and 22.186 mm, near back focus 45.60 mm, travel 7.74 mm,
object to image 449.99 mm, magnification 0.1494, field 16.07 × 24.10 cm against the published 16 × 24 cm.

### Fields changed

Since the package as received: stem, `key`, `name`, `glass` labels and removal of `indexReferenceNote`; `aperture.fStops`
to the seven stops and removal of `maxFNumber`; `focus.closeFocusM` 0.45 and `gaps` "10" with S10 `d` moved into it. In this
pass: header comment, `subtitle`, `catalog.specs`, element `role`, `cemented` D1/D2 to C1/C2, new `doublets` C1 and C2,
`focus.description`. The analysis was rewritten for public text, with the hedges closed above removed. R, d, nd, vd, sd, stop
and `source` are unchanged.

### Open items

Open: a schema designation for an unnumbered master lens, shared with `nikon/NikonNikkor15mmf56` and the other queue rows.
Open: the changeover date stays "probably" 1982. The OM-10 FC manual's table (printed p. 41, read from the page image)
lists the Zuiko MC 50mm F1.8 at 6-4, f/1.8–16, 0.45 m, 165 g, 32 mm, 49 mm filter, so the maker prints 6/4 for the MC
lens; other listings' 6/5 for it stands against that. The package's leaflet coded 0486 was not checked and is not cited.
Open: read US 4,291,952 from page images if the patent is added to `patents/`.

## 2026-11-01 — Semi-diameter pass against the patent figure

### Source and scale

`patents/US4728179.pdf`, PDF page 2 (sheet 1), a 300 dpi 1-bit raster. Figure 3 is the master alone; Figures 1 and 2 draw the
same master ahead of Embodiments 1 and 2 at the same size, so they serve as two repeat readings. All values below are native
300 dpi; the 600 dpi readings in the validation section are these doubled. The drawn axis is tilted 0.90° on the page and each
lens sits about 0.2° off its own axis line, so heights are half the top-to-bottom distance between stroke centres.

| Figure | Along the axis, vertices on prescription z | Along the axis, R1 to R10 span | Across the axis, along-axis scale held | One scale for both |
|---|---:|---:|---:|---:|
| 3 | 18.52 | 18.55 | 18.98 | 19.34 |
| 1 | 18.55 | 18.44 | 19.13 | 19.62 |
| 2 | 18.49 | 18.37 | 18.96 | 19.37 |

Scales are px/mm. The across-axis column fits each drawn arc with the printed radius, vertex free, about 1,200 points per
figure at 1.0 to 1.5 px rms. Single arcs scatter from 17.8 to 19.9 px/mm, R1 high and R3 low in all three figures. The drawings are
anamorphic, about 2.7 % taller than long, which also explains the last column: a drawn arc fixes the along-axis scale over the
square of the across-axis scale, so a one-scale fit returns about across²/along. The 19.2 px/mm of the validation section was
that one-scale figure, not the height scale. The rims are read at 18.98, 19.13 and 18.96 px/mm. Fig. 3 draws D2 at 0.53 mm
against 0.15 printed, moving R3's vertex 5.7 px; Figures 1 and 2 do not, so that is a drawing slip with no effect on the rims.

### Rims

| Surface | Before | Drawn half-height, px (Fig. 3 / 1 / 2) | Drawn, mm, mean | Drawn / before | After | Evidence |
|---|---:|---:|---:|---:|---:|---|
| S1, S2 | 15.329 | 296.8 / 302.3 / 296.0 | 15.68 | 1.023 | 15.329 | kept, noise |
| S3, S4 | 12.922 | 249.9 / 252.6 / 246.3 | 13.12 | 1.015 | 12.922 | kept, noise |
| S5 | 9.887 | 191.0 / 194.2 / 189.8 | 10.08 | 1.019 | 9.887 | kept, noise |
| S6 | 10.332 | 199.8 / 201.8 / 199.8 | 10.54 | 1.020 | 10.332 | kept, noise |
| S7 | 11.849 | R7's end 238.0 / 238.5 / 237.8; L4 flat 228.1 / 231.4 / 227.5 | 12.52; 12.04 | 1.057; 1.016 | 12.34 | square-cut L5 |
| S8 | 12.34 | 238.0 / 238.5 / 237.8 | 12.52 | 1.014 | 12.34 | kept, noise |
| S9, S10 | 12.784 | 247.4 / 248.0 / 245.5 | 12.98 | 1.015 | 12.784 | kept, noise |

The package rims equal the Figure 3 heights at 19.33 px/mm within 0.4 %, so the ratios and the step order hold, and at the
proven scale every height is 1.4 to 2.3 % under the drawing. At the along-axis scale the three-figure gap is 4.2 to 5.1 %, not
the 5-6 % recorded earlier, which read the outer edge of the stroke on one side. Figure-to-figure scatter is about 1 %. Nothing
was raised for height.

S7 is the one change. All three figures draw L5 with a flat parallel to the axis, and the R7 line runs up to that flat, while
L4's flat stops about 0.5 mm lower. S7 is one surface and cannot carry that step. At 11.849 mm it took L4's height, so L5's rim
rose 0.49 mm across its 1.6 mm edge, which the overlay shows as a clear ramp against a flat. At 12.34 mm L5 is square-cut as
drawn, and the L4 chord from the S6 tip moves nearer the drawn flat and chamfer; the corner stands 0.3 mm above L4's flat at the
proven scale. This +4.1 % stays inside the noise band and is made for the square-cut shape alone. Step order after the change
matches the drawing: S5 < S6 < S7 = S8 < S9 = S10 < S3 = S4 < S1 = S2. The drawn outlines of L1, L2 and L6 are square-cut and the file's pairs are equal.

### Clearance and light

Corner illumination is unchanged. Geometric transmission wide open at infinity is 82.0 % at 11.5°, 46.9 % at 20.1° and 33.0 % at
23.0° before and after, identical at every sampled field, because S8 stops the rays S7 releases; restoring S7 wins back 0.0
points. No face is below its package value and no land was added. The engine half-field stays 27.51°, F/1.86, stop radius
9.542 mm, and the traced field reaches 21.65 mm at 23.0°. The surface validator passes at default limits, so no `gapSagFrac` or
`maxRimAngleDeg` is needed, and the image-circle and on-axis f-number checks are unchanged.

Marginal heights at f/1.86, against the rims: at infinity S5 is the tightest, 9.66 mm at the entrance-pupil radius and 9.74 mm
at the engine's stop radius, against 9.887 mm. At 0.45 m, traced from the finite object 368.23 mm ahead of S1 at the engine's
stop radius: S5 9.58, S6 9.50, S7 11.02, S8 11.63, S9 11.65, S10 11.62 mm, all inside their rims. No axial or chief-ray clip at
either focus.

### Maker drawing

The public section labelled the MC version is low resolution and was used only as a check. It shows singlet, cemented doublet,
stop gap, cemented doublet, singlet, so 6/4, with a chamfered rim on L3, a pointed rim on L4 and L1 the tallest element. It marks no aspherical
or special-glass element, in line with the all-spherical table. The L4/L5 step is too small to resolve, and L6 reads somewhat
smaller against C1 than the patent draws it. No value was taken from it.

### Limits

The chamfers on L3 and L4 stay chords from the S4 and S7 rims to the S5 and S6 tips, which leaves about 1.4 mm and 0.9 mm of
drawn corner glass undrawn at the widest point. Figure 3 draws a slanted stroke of about 50° there, not a stroke square to the
axis, so neither `rimExtensionSd` nor `rimCutDepthMm` matches it, and a vertical land would blunt the drawn tip. The live page
shows L5 square-cut at infinity and at 0.45 m.

## 2026-11-02 — Second review: diagram, labels and movement

### What was compared

The local page at infinity and at 0.45 m against Figures 1, 2 and 3 of `patents/US4728179.pdf` (PDF page 2, 300 dpi raster) and the
public MC section. The figures were re-read from scratch in a frame fitted to each drawn axis (0.87°, 0.79°, 0.89° on the page), and
the table was re-read from the images of PDF page 9. Every entry matches the file, including R9 = +246.577 and R10 = -48.685.

### Rim readings

Half-heights in native px, Figure 3 / 1 / 2 where read: L1 flat 297.0 / 302.6, C1 flat 249.8 / 252.6, L4 flat 228.2 / 231.5, L5 flat
238.0, L6 flat 247.3, S5 tip 191.3 / 194.1 / 190.5, S6 tip 199.8 / 201.5 (the Figure 2 leader spoils that reading). A separate
across-axis scale from single printed-radius points on R1, R5, R6, R8 and R10 gives 18.8 to 19.7 px/mm, centre about 19.2, so the
earlier 19.0 holds within 1 %. At 19.0 to 19.2 px/mm the stored rims sit 1 to 2 % under the drawn heights.

Drawn edge lengths give a second check that does not depend on the height scale. At 18.5 px/mm L1's edge is 1.9 mm against 1.72 in the
model, L5's 1.4 against 1.58, L6's 1.05 against 1.20. Those edges imply rims of about 14.9, 12.6 and 13.2 mm against 15.33, 12.34 and
12.78 stored, so L1 reads under the model where its height reads over, and neither check justifies a raise. L1 and L6 therefore stay
at 15.329 and 12.784 mm: square-cut as drawn, in the drawn order (L6 at 0.990 of C1 drawn, 0.989 stored), and inside the noise band.

The MC section spans S1 to S10 in 305 px, 8.43 px/mm. It gives L1 15.4, C1 12.8, L4 10.6, L5 11.1 and L6 11.8 mm: the front agrees with
the model and the rear reads about 10 % smaller than Figure 3. The barrel's stepped bore lies along those rear edges and may mask
them. Its L4 and L5 flats differ by 5 px, about 0.6 mm, so the step the first pass could not resolve is there and agrees with the
patent's 0.5 mm. Cutting S9 and S10 to 11.9 mm alone would lose 6.4 points at 14.4°, past the 3-point budget, and the patent figure
governs, so the rear stays at the figure.

### Lands and cuts

No face sits below its package value, so there are no cuts. `rimcost.mjs` against `.lens-work/base1102/OlympusZuiko50mmf18.data.ts`
gives a worst loss of 0.0 points at every field. Transmission wide open at infinity is 100.0, 98.8, 96.2, 90.1, 82.0, 71.9, 60.1, 46.9
and 33.0 % at 0 to 23.0°, the same on baseline rims, on the first-pass file and on the final file.

| Face | Item | Figure reading | Baseline | Final | Points of light | Verdict |
|---|---|---:|---:|---:|---:|---|
| S5 | new `rimExtensionSd` | tip 10.08, chamfer to flat 13.1 | 9.887, no land | `sd` 9.887, land to 10.6 | 0.0 | keep: slight, redraws corner only |
| S6 | new `rimExtensionSd` | tip 10.54, chamfer to flat 12.0 | 10.332, no land | `sd` 10.332, land to 11 | 0.0 | keep: slight, redraws corner only |
| S7 | raised above baseline, not a cut | L5 flat 12.52, L4 flat 12.04 | 11.849 | 12.34 | 0.0 | keep: L5 square-cut as drawn |

The chamfers run from each curve's pointed end at about 47° on L3 (2.95 mm along by 3.15 mm across) and 45° on L4 (1.84 by 1.63). The first pass
left them as chords and judged that a vertical land would blunt the tip. The new lands do blunt it, by 0.7 mm, so the trade was measured.
Between the element's rim and tip, comparing the rendered edge with the drawn flat and chamfer:

| Element | Edge | Mismatch area, mm² | Most glass missing, mm | Most glass added, mm |
|---|---|---:|---:|---:|
| L3 | chord | 3.11 | 1.30 | 0 |
| L3 | land to 10.6 | 2.22 | 1.00 | 0.71 |
| L3 | S5 land matched to S4, 12.922 | 4.14 | 0 | 3.03 |
| L4 | chord | 2.26 | 0.91 | 0.51 |
| L4 | land to 11 | 1.41 | 0.44 | 0.67 |
| L4 | S6 land matched to S7, 12.34 | 4.05 | 0 | 2.01 |

The area minimum is near 10.8 mm on S5 and 11.0 mm on S6. S5 takes 10.6 because it gets within 2 % of that minimum with a shorter
stub. Full-height matched rims are worse than the chords here, because the chamfers are too large to fill: they would draw L3 and L4
as square blocks. A cemented face takes no land, so S4 and S7 cannot carry the corner. A `rimCutDepthMm` at the tip would draw the same vertical
stroke with a beam margin to hold: a trial on S5 at 3.72 mm, radius 9.883 mm, was refused by 0.004 mm. An extension leaves the clear
aperture alone and passes the validator at default limits, so `checks.gapSagFrac` stays absent. The rim is still not the drawn outline: a vertical stroke plus a straight edge
stands for a flat plus a chamfer, and the L4/L5 step stays undrawn.

### Clearance after the lands

Engine half-field 27.51° and F/1.86 before and after, stop radius 9.542 mm, stop housing 9.887 mm. The surface validator, the image-circle
check and the aperture check pass; the traced corner reaches 21.65 mm at 23.0°. No axial or chief-ray clip. S5 stays the tightest
axial rim, 9.66 against 9.887 mm. The 0.45 m marginal heights in the section above do not depend on the lands.

### Labels, types and tags

Surface labels 1 to 10 are the patent's R1 to R10, and thicknesses D1 to D9 map one to one, with D5 split 6.5 + 6.5 around the stop.
The lower-case r and d of Figures 1 and 2 belong to the converters. Media follow N1 to N6 and V1 to V6. The patent names no element or
group of the master, so sequential L1 to L6 stands and there is no `groups` block. C1 brackets S3 to S5, C2 brackets S6 to S8, both
cemented in Figures 1 to 3. `BF` is the only gap label beside the slider, so nothing collides.

`type` agrees with R on all six. L5 (-490.538 / -20.316) is a meniscus convex to the image, close to plano-convex, and L6 (+246.577 /
-48.685) is biconvex. Inspectors for L3, L4 and L5 show type, indices, FL, glass, role and the DOUBLET C1 or C2 tag; all element focal
lengths are present and match the thick-lens values. No aspheric marks, as the table is all spherical. No `apd` tags: the patent
designates no special glass and the MC section marks none. The stop sits between L3 and L4, and neither the figures nor the patent's
text layer mention a stop or diaphragm.

### Movement

There is no zoom. The patent's text layer has no word on focus, so the description's "prints no focus travel" is exact. `gaps` "10"
lists 37.856 then 45.60 mm, infinity first. The focus overlay moves all four groups 7.74 mm toward the object with the image plane
fixed, with nothing moving relative to anything else. The probe gives 449.99 mm object to image and 0.1494×. The slider's far label
reads 45 cm, BF reads 37.86 and 45.60, and the aperture ticks run f/1.86, 2.8, 4, 5.6, 8, 11, 16.

## 2026-11-10 — Metadata fill

- `catalog.fNumber.marketing: 1.8` from the product name, so the wide-open readout names the marked f/1.8 beside
  the design f/1.86. No optical value changed.
