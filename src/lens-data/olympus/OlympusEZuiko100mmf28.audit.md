# OLYMPUS E.ZUIKO AUTO-T 100mm f/2.8 — source audit

## 2026-11-02 — Deployment validation and cleanup

Patent re-read. US 3,749,478 Example 2 and its repeat in claim 3 were read from the page images: 10 R, 9 d, 5 n and 5 ν, 29 values, no mismatches at exactly ×100. The printed d8 of 25.78 mm is split around the stop as 8.76 + 17.02 mm. The patent has no aspheres, variable gaps, printed back focus, close state or stop. The front page matches `source` for number, grant year, inventors and assignee; the patent spells the assignee Olympus Optical Company Limited, and the file uses the corpus form.

Index line. The table prints plain n and ν. All five pairs reproduce a catalog nd / νd within the d-line window of `LENS_DATA_SPEC.md`, and none reproduces a catalog ne / νe, so the elements carry no `indexReferenceNote`. Fig. 3a plots d and g.

Patent against model, at f = 1 scale where the patent prints it: f 1.0 / 1.0005 (100.047 mm); f1,2,3 0.407 / 0.4052; f3 2.0 / 1.987; F2.8 / 2.800; telephoto ratio about 0.93 / 0.928; back focus not printed / 42.869 mm; image plane not printed / 92.839 mm from S1. A single-slip search over the table found seven changes that reach 0.407, and all seven worsen the fit to Fig. 3a. Example 1's printed group values are similarly loose (0.392 against 0.3913), so the table stands as printed. Fig. 3a plots about −0.073 mm at the 0.7 zone and the model gives −0.074 mm; Fig. 3c plots +1.18 % and the model gives +1.15 %. The conditions in the patent all hold.

Stop. The patent marks none. A fit to 34 points digitized from Fig. 3b gives 30.4 mm from S1, with an acceptable range of about 29 to 31.5 mm; rms 0.054 × 10⁻³ f against 0.324 × 10⁻³ f at the former midpoint of 34.53 mm, where the tangential focus at 12°10′ fell on the wrong side of the plotted curve. Fig. 2b is too flat to constrain Example 1.

Public diagrams. Olympus's *The Zuiko Interchangeable Lens Group* catalog, p. 12, lists 5 elements / 5 groups, f/2.8–22, 1 m, 230 g and 49 mm. It prints the 85mm f/2 and 100mm f/2.8 drawings under each other's text; the five-singlet section is this lens. Scaled by its axial length (10.16 px/mm) the section has Example 2's spacing: L5 2.26 mm and d8 25.55 mm, against printed 2.55 and 25.78 mm for Example 2 and 1.50 and 27.58 mm for Example 1. Its rims read L1 18.9, L2 17.9, L3 16.9, L4 14.5 and L5 13.4 mm, and the break in the axis lies about 29 % of the way from S8 to S9. Patent Fig. 1 is drawn at Example 1's spacing and reads 17.9, 17.3, 15.3, 13.2 and 9.9 mm.

Fields changed against the package. Data fixes: `closeFocusM` 1e15 → 1; S8 d 12.89 → 8.76; STO d 12.89 → 17.02, iris radius 9.45 → 9.93 mm; L5 sd 8.76 → 11.0. Corner transmission at 12.1° went from 29.4 % to 47.5 %, and no field loses light. Trial values: L1 at 18.9 mm costs 4.2 points and was declined; L2 and L3 at their drawn heights cost nothing but were left, because L1 stays and their ratios to L1 already match the drawing. Wording: header comment, `subtitle`, `catalog.specs`, `focus.description`, element `role`, removal of `indexReferenceNote`, and the analysis rewritten to the skeleton.

Closed: L5 is set at 13.4 mm and L4 at 14.5 mm, so L5 no longer passes L4. The semi-diameter pass below gives the reasons; 12.4 mm (corner 59.5 %) stays on record as the alternative.

Closed: L4 takes the drawn 14.5 mm in the semi-diameter pass below.

Open: the automatic correction mechanism for close distances named in the catalog is not modeled, and no close state exists in the patent.

## 2026-11-02 — Semi-diameter pass against the patent figure

### Figures and scale

No figure of Example 2 exists. `patents/US3749478.pdf`, page 2 (sheet 1), Fig. 1 is the patent's only section, and its spacing is Example 1's. At 8.84 px/mm from S1 to S10 (438 native px over 49.56 mm), S8 to S9 reads 28.0 mm and L5 1.47 mm, against 27.58 and 1.50 mm in Example 1 and 25.78 and 2.55 mm in Example 2. Olympus's catalog drawing (800 × 600 px, object at right) has Example 2's spacing, so for this lens it is the shape reference.

| Direction | Evidence | Scale |
|---|---|---|
| Along the axis, Olympus | S1 to S10, 507.5 px over 49.97 mm; spans S1–S8 10.39, S8–S10 10.01 | 10.16 px/mm |
| Across the axis, Olympus | Arc fits to the printed radii: S9 10.43, S1 11.09, S3 11.28, S6 11.29, S8 11.79, S4 11.80, S5 12.03, S7 12.08, S10 8.16, S2 7.51; sag-weighted median 11.29 | Not a usable stretch |
| Upper limit, Olympus | L1's 193 px has to clear the 17.87 mm axial ray at f/2.8 | At most 10.80 px/mm, 6.3 % |

A scale of 11.29 px/mm would put L1, L2 and L3 at 17.09, 16.01 and 15.15 mm, under the axial ray at those surfaces (17.87, 16.59, 15.57 mm), which an f/2.8 lens cannot have, and S2 and S10 go the other way. The fits therefore show curves drawn flatter than Example 2's radii (S1 47.8 mm, S5 47.8 mm, S8 26.4 mm drawn), and they do not measure a stretch. Rims are read at 10.16 px/mm with the 6.3 % carried as uncertainty: at that limit L1 to L5 read 17.88, 16.74, 15.84, 13.66 and 12.55 mm. A vertical stretch leaves the ratios between rims unchanged.

Fig. 1 has no single factor either. Against Example 1's radii, S1, S5, S6, S8 and S9 imply 0.89 to 1.03 of the axial scale. It rules S7 as a straight line (R 96.85 mm), draws S10 at about 38 mm (R 186.72 mm), and sets L5 off centre, 82 px above the axis and 95 px below.

### Rims

| Surfaces | Package | Before | Olympus px | Olympus mm | Fig. 1 mm (Example 1) | After | Evidence |
|---|---|---|---|---|---|---|---|
| S1, S2 | 19.66 | 19.66 | 193 | 19.0 | 18.0 | 19.66 | Retained: 3.5 % is noise, and 19.0 mm costs 3.6 corner points |
| S3, S4 | 18.70 | 18.70 | 180.75 | 17.8 | 17.4 | 18.70 | Retained: 5 %, 0.951 of L1 against 0.937 drawn |
| S5, S6 | 17.38 | 17.38 | 171 | 16.8 | 15.2 | 17.38 | Retained: 3 %, 0.884 of L1 against 0.886 drawn |
| S7, S8 | 13.37 | 13.37 | 147.5 | 14.5 | 13.2 | 14.5 | Both drawings; square-cut, both faces at one height |
| S8 land | none | none | cap ends at 109 | 10.7 | 10.7 | cut radius 11.12, depth 3.46 | Both drawings end the cap short; moved out for the beams |
| S9, S10 | 8.76 | 11.0 | 135.5 | 13.3 | 10.0 | 13.4 | Olympus; square-cut, both faces at one height |

| Measure | L2/L1 | L3/L1 | L4/L1 | L5/L1 | L5/L4 | L3–L4 step, mm |
|---|---|---|---|---|---|---|
| Olympus | 0.937 | 0.886 | 0.764 | 0.702 | 0.918 | 2.3 |
| Fig. 1 | 0.965 | 0.846 | 0.733 | 0.553 | 0.755 | 2.0 |
| File before | 0.951 | 0.884 | 0.680 | 0.559 | 0.823 | 4.0 |
| File after | 0.951 | 0.884 | 0.737 | 0.682 | 0.924 | 2.9 |

L5. The shape supports 13.4 mm. The drawing reads 13.34 mm at stroke centres and 13.49 mm at the outer stroke edges, and one pixel is 0.10 mm. 11.0 mm is 18 % under that and leaves L5 at 0.56 of L1 against 0.70 drawn; it agrees only with Fig. 1's 0.55, which is Example 1's element in a schematic figure. 12.4 mm held the drawn L5/L4 ratio only against L4 at 13.37 mm, and that L4 was short in both drawings, with a 4.0 mm step from L3 where they draw 2.3 and 2.0 mm. With L4 at its drawn height the same ratio gives 13.3 mm, within one pixel of the 13.4 mm option, which stays because the reading brackets it. 12.4 mm would also need a 7.6 % vertical stretch, past the 6.3 % limit. The raise stops at the drawn height: the ratios to the stored L1 would ask for 15.0 and 13.8 mm, and those were not used. The two drawings decided this value, and the corner figure below follows from it.

L4. The rim stood 8 % under the drawn height and 11 % under the drawn ratio to L1, and it is the one rim both drawings support together: 0.76 and 0.73 of L1. It adds at most 0.5 points at any sampled field and nothing at the corner, so light played no part. L5 at its drawn height needs it, since 13.4 mm would otherwise pass L4 and reverse the drawn step.

S8 land. Without a land, S8 at 14.5 mm reaches 6.41 mm behind its vertex and L4's edge is 9.05 mm thick. Olympus ends the cap at 109 px of a 147.5 px edge, q = 0.739 ± 0.012 at 10.16 px/mm, which is 10.7 mm at `sd` 14.5 and close to the 10.72 mm axial ray. The wide-open beams reach 11.067 mm, at 3.21°, so the cut moves out to clear them by 0.05 mm. A depth of 3.46 mm is the smallest two-decimal value the beam rule admits, with the cut radius at 11.120 mm; 3.45 mm is refused. The land is 3.38 mm long and L4's edge is 6.10 mm, against 6.15 mm drawn (62.5 px). The cut is inferred and carries no `rimCutDepthSource`. Fig. 1 ends the same cap at q about 0.81, with a 45° chamfer in place of a land.

What Fig. 1 can and cannot show. Given another example, it can support the step order L1 > L2 > L3 > L4 > L5, L4 at about 0.73 of L1, a step of about 2 mm from L3 to L4, and an S8 cap that ends short of L4's edge. All four agree with Olympus. It cannot give any height for Example 2, and least of all L5's: its L5 is Example 1's 1.50 mm element at d8 = 27.58 mm, the outline is schematic and off centre, and the patent plots Example 1 to 9° against Example 2's 12°10′, so nothing makes the two rear rims equal.

Olympus against Fig. 1. Both draw five air-spaced singlets in the same order, with no aspheric or special-glass marking. They differ most at L5, 0.70 of L1 against 0.55, and at L3, 0.89 against 0.85. Olympus's drawn radii also differ from Example 2's, so the drawing supports the spacing and proportions of the association and does not confirm the radii.

### Clearance and light

No surface shows `CLIPS-AXIAL` or `BLOCKS-CHIEF`. At f/2.8 the axial ray stands at 12.78, 10.72, 8.03 and 7.76 mm on S7, S8, S9 and S10, and at Example 2's 21.82 mm edge the chief ray stands at 4.67, 3.44, 7.08 and 7.46 mm. The on-axis trace gives −0.002 mm at full aperture and −0.074 mm at the 0.7 zone, as Fig. 3a plots, and no rim moved for a clip. The aperture audit stays within 3 % of f/2.8, no surface is undersized against the image circle, the corner chief ray reaches 21.65 mm at 12.1° clear, the validator reports no errors, and the dense beam probe clips no ray at the land. Engine half-field goes from 16.05° to 18.27°; f-number 2.800, EFL 100.047 mm and iris radius 9.93 mm are unchanged.

Full-pupil transmission, wide open at infinity, for the exact final rims:

| Field | Package rims | Before | After |
|---|---|---|---|
| 2.0° | 99.0 | 100.0 | 100.0 |
| 4.0° | 89.5 | 98.5 | 99.0 |
| 6.0° | 76.7 | 93.8 | 94.7 |
| 8.1° | 61.2 | 81.4 | 89.4 |
| 10.1° | 44.9 | 65.3 | 82.0 |
| 12.1° | 28.9 | 47.5 | 67.0 |

No field loses light against the package rims, the gain at the corner is 38.1 points, and the curve is the same with and without the land. L5 and L1 still set the corner limit: L5 at 14.4 mm would give 73.2 % and L1 at 19.9 mm 68.3 %, while opening L2, L3 or L4 changes nothing there. The rule on lands and cuts leaves L1 at 19.66 mm, since 19.2 mm costs 2.6 points and 19.0 mm 3.6, and its reading is inside the noise band.

### Live check and limits

The local page at infinity and at focus 1 shows the same section, as the file is static. L4 now draws as the block Olympus shows, and L5 sits one step below it. L1 to L3 stand 3 to 5 % taller than the drawing, as retained. An overlay of the model on the drawing puts L4 and L5 on the drawn outlines.

Limits. The drawing's height scale has no independent proof, so L4 and L5 carry up to 6.3 % of uncertainty in absolute height, though not in ratio. The drawing's corner chamfers on L3 and L4 are not modeled; the land stands in for L4's. The patent prints no lateral-aberration plots, so there are no fan ends to give a second reading of any rim.

## 2026-11-02 — Second review: diagram, labels and movement

The local page, flipped, was compared with Olympus's drawing and with Fig. 1 on patent sheet 1. Every figure below was measured afresh from the drawing's strokes, and the earlier tables were checked against those readings.

### Re-measure of Olympus's drawing

Half-heights are half the distance between the top and bottom stroke centres, by darkness centroid.

| Element | Half-height, px | mm at 10.16 px/mm | Share of L1 | File, mm | File share of L1 |
|---|---|---|---|---|---|
| L1 | 192.53 | 18.95 | 1.000 | 19.66 | 1.000 |
| L2 | 180.68 | 17.78 | 0.938 | 18.70 | 0.951 |
| L3 | 171.11 | 16.84 | 0.889 | 17.38 | 0.884 |
| L4 | 147.15 | 14.48 | 0.764 | 14.50 | 0.737 |
| L5 | 135.31 | 13.32 | 0.703 | 13.30 | 0.677 |

The first pass's readings stand. Vertex spans give 10.18 px/mm over S1 to S10, 10.41 over S1 to S8 and 10.02 over S8 to S10, so the local rear scale would read L5 higher, at 13.5 mm, and nothing here reads it lower. The S8 cap ends at 110 px, 10.8 mm.

### The height scale

The first pass left the height scale unproved. It can now be checked directly. A 45° chamfer drawn with a set square shows the ratio of vertical to axial scale, and line fits to the four chamfers give 44.9° and 45.0° on L3 (the long, precise pair, over 15 px) and 44.6° and 45.7° on L4 (5 px). The ratio is 1.00 within about 1 %. Ruled-stroke ink is a weaker test and gives 1.08 ± 0.05. The first pass's 6.3 % limit therefore no longer applies to the reading: the drawing is not stretched, and 12.55 mm for L5 is not a candidate.

### The drawn curves against Example 2

Fitting the mean of the upper and lower halves removes the drawing's 0.2° tilt.

| Surface | Drawn R at 10.16 px/mm | Printed R | Scale that would reconcile them |
|---|---|---|---|
| S1 | 41.7 | 40.11 | 1.02 |
| S4 | 66.0 | 50.16 | 1.15 |
| S5 | 45.1 (first pass 47.8) | 34.06 | 1.15 |
| S7 | 112.5 | 84.5 | 1.15 |
| S8 | 23.9 | 19.6 | 1.10 |
| S9 | 71.5 | 64.86 | 1.05 |
| S10 | 123.7 | 179.95 | 0.83 |

A scale of 1.15 cannot be a stretch, since it would put L1 at 16.5 mm under its 17.87 mm axial ray, and the chamfers exclude it. The curves on S4, S5, S7 and S8 really are drawn flatter. L5 is the exception: at 12.8 mm the drawing's sag is 12.3 px on S9 and 6.1 px on S10, against 12.9 and 4.6 px printed, and its edge is 1.70 mm against 1.73 mm. L5 is the one element whose faces, spacing and height the drawing all ties to Example 2.

Paraxial trial prescriptions, used only to weigh the transfer, with the stop held and 12°10′ at f/2.8:

| Prescription | EFL, mm | BFD, mm | S7 axial / chief, mm | S9 axial / chief, mm |
|---|---|---|---|---|
| Example 2 | 100.05 | 42.87 | 12.15 / 4.54 | 7.96 / 6.60 |
| Example 1 | 99.94 | 43.54 | 12.33 / 4.82 | 7.95 / 7.00 |
| Example 2 with drawn S4, S5, S7, S8 | 97.83 | 43.70 | 12.10 / 4.33 | 8.11 / 6.37 |
| Example 2 with S5 = 47.8 mm alone | 214.71 | 142.29 | not a usable lens | not a usable lens |

S5 cannot change alone, and the ten drawn radii together give 221.7 mm, so the curves are not a prescription and do not prove a different design. When the flatter faces move together, the beams at L4 and L5 shift under 5 %, because the back focus and the f-number fix the marginal ray at the last element. Olympus's rear heights therefore apply to Example 2 within about 0.25 mm: rescaling 13.3 mm through those rows gives 13.05 to 13.4 mm.

### Verdict on L4, L5 and the land

Shape alone carries both rims. The corner gain follows from the drawn heights and played no part in choosing them.

L5 goes from 13.4 to 13.3 mm. The reading is 13.32 mm at stroke centres, the basis of every other rim here, and the first pass had rounded up past its own 13.3 mm. That was the only rounding that added light; taking it out lowers the corner by 0.9 points and 10.1° by 0.6. The evidence does not support a larger reduction. Fig. 1's 9.9 mm belongs to the 9° example, where it equals the chief ray plus 0.6 of the marginal ray; the same share at 12°10′ on Example 2 gives 11.4 to 11.9 mm. That transfer is arithmetic on a schematic figure, off centre and with the wrong L5 thickness, so it cannot outrank an isotropic drawing whose L5 fits Example 2's radii. It stays on record as the lowest reading the patent can support.

L4 stays at 14.5 mm. The reading is 14.48 mm. The 7.6 % gap to the package value is inside the noise on its own, so height alone would not have moved it. Three shape points do: the ratio to L1 (0.76 and 0.73 in the two drawings against 0.68 at 13.37 mm), the 2.4 and 2.0 mm step from L3 (4.0 mm at 13.37 mm), and L5, which at 13.3 mm would stand level with a 13.37 mm L4 where the drawing has a 1.16 mm step. The rim costs nothing and buys almost nothing: at 13.37 mm the lens loses 0.5 points at 4° and none at the corner.

The land stays. With L5 at 13.3 mm the beams still reach 11.067 mm on S8, at 3.2°, where L5 is not the limit, so 3.46 mm is still the smallest depth the beam rule admits and 3.45 mm is refused. A copy without the land gives the same transmission to 0.1 points. It redraws L4's block as drawn, with a 6.10 mm edge against 6.1 mm drawn.

| Face | Figure reading, mm | Package, mm | Before, mm | Final, mm | Verdict | Light against package |
|---|---|---|---|---|---|---|
| S1, S2 | 18.95 | 19.66 | 19.66 | 19.66 | No cut; 3.7 % over the drawing, inside noise | 0 |
| S3, S4 | 17.78 | 18.70 | 18.70 | 18.70 | No cut; ratio to L1 already drawn; drawn height costs 0.2 points | 0 |
| S5, S6 | 16.84 | 17.38 | 17.38 | 17.38 | No cut; as above | 0 |
| S7, S8 | 14.48 | 13.37 | 14.50 | 14.50 | Raise kept on shape | Gains at most 0.5 |
| S8 land | Cap end 10.8 | None | 3.46 deep, radius 11.12 | Unchanged | Keep: slight, costs 0.0, moved out for the beams | 0 |
| S9, S10 | 13.32 | 8.76 | 13.40 | 13.30 | Raise reduced to the reading | Gains up to 37.2, at the corner |

No face sits below its package value, and no `rimExtensionSd` is present. The final `rimcost.mjs` worst loss against package rims is 0.0 points. `gapSagFrac` and `maxRimAngleDeg` are not needed.

| Field | Package rims | Before | After |
|---|---|---|---|
| 2.0° | 99.0 | 100.0 | 100.0 |
| 4.0° | 89.5 | 99.0 | 99.0 |
| 6.0° | 76.7 | 94.7 | 94.7 |
| 8.1° | 61.2 | 89.4 | 89.4 |
| 10.1° | 44.9 | 82.0 | 81.4 |
| 12.1° | 28.9 | 67.0 | 66.1 |

Corner light, stated plainly: all five rims at their drawn heights give 62.4 %, so 3.7 points of the 66.1 % come from L1 keeping its package height above the drawing (L1 at 18.95 mm alone gives 62.3 %). That rim is not a raise and its gap is inside noise, so it stays, but the drawing supports about 62 %, not 66 %. L5 and L1 set the corner: L5 at 14.4 mm gives 73.2 %, L1 at 20.0 mm gives 68.2 %, and opening L2, L3 and L4 together changes nothing there.

No surface shows `CLIPS-AXIAL` or `BLOCKS-CHIEF`, at 21.65 mm (12.08°) or at 21.82 mm (12°10′). The aperture audit stays within 3 % of f/2.8, the image-circle audit reports nothing undersized, and the corner chief ray reaches 21.65 mm at 12.1° with no clip. The surface validator reports no errors.

### Half-field

The engine's `halfField` goes from 18.27° to 18.19° (package 15.82°, L5 at 11.0 mm 16.05°). It is the field where L5's rim stops the chief ray, not a coverage claim: the chief ray clears the rims well past the field where the bundle is already cut down, so the value sits above 12°10′ with any plausible L5. It overstates nothing on the site. The Summary tab shows half field 12.1°, and the Vignetting, Coma, Distortion, Chromatic, Field Curvature and Pupils tabs all stop at the 12.08° format corner: Coma's 60 % is 7.2° and Vignetting's edge is 12.1°. The raw value reaches the page in one place, the off-axis fan and its legend, at 60 % of it, "Off-axis rays (10.9°)", which is inside both the patent's field and the format. EFL 100.047 mm, f-number 2.800 and iris radius 9.93 mm are unchanged.

### Labels, tags and movement

L1 to L5 are the patent's own designations (column 2, lines 1 to 10). `name`, `type`, `role` and focal lengths agree with the signs of R and with thick-lens values of +81.55, +147.22, +198.65, −33.40 and +127.99 mm, and the inspector shows them. There are no `doublets`, since nothing is cemented, and no `groups`, since the patent names only five components. The patent marks no aspheres and neither does Olympus's drawing, and none are in the file. No `apd` tag is present: the patent names no special glass, and the drawing marks none. The stop draws between L4 and L5.

The patent has no focus text. Columns 1 to 6 say nothing about focusing or a focusing group, so there is no paragraph to quote. `focus.description` read "prints no close state", which understated that, and now says the patent gives no focus motion or close state. It keeps the statement that the catalog's close-distance correction mechanism is not modeled. The focus slider shows "Not modeled", the page is the same at `focus=1`, and `mv=focus` shows no movement. No zoom applies.

### Live check and limits

The local page shows L4 as the drawn block with its land and L5 one step below it, on the drawn outlines in the overlay. The Vignetting tab reads 66.1 % unvignetted, 58.4 % relative illumination and 12.1° at the edge. Visible differences from the drawing remain and were left as they are: L1 to L3 stand 3 to 5 % tall; L3's front face is much deeper at the rim than drawn because S5 is printed at 34.06 mm; and the corner chamfers on L3 and L4 are not modeled. L3's rear rim therefore runs further toward L4 than drawn, without touching it.

The patent gives no further glass identification: its table prints only n and ν, with no glass names, line indices or partial dispersions. Olympus's height scale now rests on the chamfers being 45°, which is drafting practice and not a stated value.
