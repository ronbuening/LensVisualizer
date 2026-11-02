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
