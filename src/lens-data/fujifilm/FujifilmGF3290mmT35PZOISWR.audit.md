# Fujifilm GF32–90mm T3.5 — construction audit

The Japanese front page and continuation establish all three inventors; the US family front page supports their Latin spellings and matching priority. Three S21 coefficient digits misread in the first transcription were corrected from the page image. The default gap margin was refused before tracing. The printed rims need gapSagFrac 0.9134, rounded up to 1E-4, and the drawn lands raise that to 0.95; the value keeps positive real clearances and leaves zero diagram trim. No factory prescription is claimed.

## 2026-11-02 — Deployment validation and cleanup

**Patent re-read.** All 45 surface rows (R, D, Nd, νd), 12 variable-gap values, 90 Table 3 values, 44 ED halves, 26 θgF values and the plate were read from PDF pages 32–34; 238 fields were compared by machine. There were three mismatches, all thicknesses, now corrected to the printed S3 8.0700 (was 8.7), S11 2.9900 (was 2.9) and S21 6.8600 (was 6.8). They caused the former EFL residual of +0.33 to +0.54%. The PDF at 300 dpi and the US family text confirm all three. All 90 coefficients matched. The third inventor is 宮城島 峻介, and the publication runs to 106 pages with Figures 1–3 on pages 79–81.

**Patent against model.** f 32.94/59.13/87.33 against EFL 32.9422/59.1259/87.3314 mm; each rounds to the printed value. Paraxial BFD 0.9884/1.0214/1.0529 mm against the printed 0.9910 mm gap, with real axial crossings within about 0.09 mm of the plane. TL 248.034 mm by sum; the patent prints no TL. FNo 3.19/3.25/3.30 against real rays at the printed stop radius, 3.193/3.254/3.295; the engine's paraxial rule at the fixed 12.2685 mm radius reads 3.190/3.233/3.265. Half-field 41.1/23.2/16.0° against 41.14/23.26/16.05° at 27.39 mm. Of 22 Table 34 conditional values computed, 21 fall within 1.5E-4, including Bfw/fw 1.0503, DStw/TLw 0.6691 and TLw/ft 2.8277 against 2.8276; conditional expression (36) = 1.0000 sets the constant iris. A single-slip search over 9,789 candidates found no one-cell explanation of the old residual, because there were three slips.

**Maker diagram.** Fujifilm's section matches Fig. 2 element by element: 25 elements in 19 groups, aspherical L23, L33 and L41, ED L33, L51 and L54, and the flat L42/L43 joint. The association is strong by construction, but Fujifilm has not named the patent.

**Fields changed.** Thicknesses and L12, L23, L33 focal lengths; `source.errata` removed; zoom path to 10 stations with a fixed iris; `closeFocusM` 0.8. In the cleanup: header, `subtitle`, `specs`, `focus.description`, element `name`, `diagramLabel`, `role`, `apdNote` and `cemented` text (D1–D6 to C1–C6), `apd: "inferred"` on L33, L51 and L54, new `groups` and `doublets`, and the rear-plate `label` and `source` text. No optical value changed in the cleanup.

Open: conditional expression (10) computes 0.01020 against the printed 0.01022, about 0.24 µm of sag on S11. All S11 coefficients agree with the US family text, so the difference stays unexplained.

Open: L23's proxy label L-BSL7 has catalog θgF 0.5334 against the printed 0.541; L55's TAFD40 has 0.6136 against 0.617. L23 is a weak element at f = +209.7 mm.

Open: the patent prints no close-focus spacings, so focus stays static at infinity.

## 2026-11-02 — Semi-diameter pass against the patent figure

**Source.** `patents/JP_2026091132_A.pdf`, Example 1: Fig. 2 on page 80 for the whole lens at Wide, Fig. 3 on page 81 for G1 and G2, Fig. 1 on page 79 not measured. All three are native 200 dpi rasters, measured on the native pixels. Every `sd` stays half the printed ED column, so this pass changes shape only.

**Scale.** The sheets are anamorphic. Vertex crossings against the Wide prescription give the axial scale: Fig. 3, 15.438 px/mm over S1 to S16 (702.0 px over 45.4705 mm); Fig. 2, 6.6433 px/mm over S1 to S45 (1410.7 px over 212.3436 mm). Every crossing lands within 0.3 px of that fit. Height comes from arcs: tracking each surface against its printed R, D and asphere gives a height scale 0.9575 times the axial scale on both sheets. S1 to S8 all fit that value on both sheets, with rms residuals under 0.2 px; nearly flat faces carry too little sag to set it. So height is 14.782 px/mm on Fig. 3 and 6.361 px/mm on Fig. 2, and the sheets are stretched 4.4% along the axis. Read at the axial scale, every rim would come out 4.25% low. The edges of L21 to L25 read on both sheets agree within 0.04 mm. Fig. 3's dashed Hn1 and Hn2 marks read 43.09 and 21.88 mm against the printed 43.424 and 22.2865 mm. They disagree with each other as a scale, so they are annotation, and the arcs govern. St reads 12.4 mm against the printed 12.3645 mm.

**Reading.** Each row is the half-span between the two sides of the sheet: Fig. 3 for G1 and G2, good to about 0.07 mm, and Fig. 2 for the rest, good to about 0.16 mm. A joint is a cemented surface that keeps its printed radius.

| Element | Faces | `sd` kept | Drawn edge | `rimExtensionSd` |
| --- | --- | ---: | ---: | ---: |
| L11 | 1 / 2 | 43.424 / 40.5825 | 43.99 | 44 / 44 |
| L12 | 3 / 4 | 40.319 / 39.7905 | 41.10 | 41.1 / 41.1 |
| L13 | 5 / 6 | 36.5485 / 36.014 | 37.50 | 37.5 / 37.5 |
| L21 | 7 / 8 | 22.2865 / 16.8455 | 23.83 | 23.8 / 23.8 |
| L22 | 9 / 10 | 16.5765 / 16.2095 | 17.52 | 17.5 / 17.5 |
| L23 | 11A / 12A | 16.0095 / 15.7935 | 16.41 | 16.4 / 16.4 |
| L24 | 13 / 14 | 15.693 / 15.505 | 16.27 | 16.3 / 16.3 |
| L25 | 15 / 16 | 15.415 / 15.229 | 15.92 | 15.9 / 15.9 |
| L31, L32 (joint 19, 13.3585) | 18 / 20 | 12.8225 / 13.5785 | 14.42 | 14.4 / 14.4 |
| L33 | 21A / 22A | 14.0285 / 14.4465 | 14.78 | 14.8 / 14.8 |
| L34, L35 (joint 24, 16.1265) | 23 / 25 | 15.967 / 16.2795 | 16.58 / 16.66 | 16.6 / 16.7 |
| L36 | 26 / 27 | 16.46 / 16.5155 | 17.69 | 17.7 / 17.7 |
| L37, L38 (joint 29, 16.5785) | 28 / 30 | 15.377 / 17.042 | 17.92 | 17.9 / 17.9 |
| L39 | 31 / 32 | 17.5365 / 17.562 | 18.32 | 18.3 / 18.3 |
| L41 | 33A / 34A | 15.8505 / 16.104 | 16.55 | 16.6 / 16.6 |
| L42, L43 (joint 36, 18.7445) | 35 / 37 | 17.182 / 19.185 | 19.81 | 19.8 / 19.8 |
| L51 | 38 / 39 | 25.142 / 25.045 | 25.58 | 25.6 / 25.6 |
| L52, L53 (joint 41, 20.6945) | 40 / 42 | 22.6015 / 20.396 | 22.83 / 21.34 | 22.8 / 21.3 |
| L54, L55 (joint 44, 20.033) | 43 / 45 | 20.232 / 21.3215 | 21.07 / 23.03 | 21.1 / 23 |

**Printed values against the figure.** No printed ED is contradicted. The figures run each curve past ED/2 to the drawn edge, and every ED/2 lies inside that edge, by 0.23 mm at S40 and up to 1.71 mm at S45 on the larger face of each element. The small S28 row, 15.377 mm between 16.5155 and 16.5785 mm, is not a misprint: the axial beam traces 15.23 mm there. The figure shows S2 and S8 ending near 41.0 and 17.2 mm before their flat lands; the file keeps them at ED/2, so those lands sit 0.25 and 0.38 mm forward of the drawn ones. S1, S3 and S5 curve on to their edges in the figure and carry short lands here. The drawn L21 land and L22 rim touch; here they stay 0.60 mm apart.

**Light.** Corner illumination on the app's full-pupil lattice, wide open at infinity, stays at 41.1%, 44.9% and 51.7% at Wide, Middle and Tele with the package rims and with the final rims, and no field at any of the ten nodes moves by 0.05 point. Restoring any one element gives nothing back. Engine half-field 34.56° and 17.16° at the ends, stop radius 12.2685 mm and F-numbers are unchanged, and the traced field reaches 27.39 mm at all ten stations. The longitudinal check and the trace found no axial clip and no blocked chief ray, so no `sd` needed to move.

**Gap limit.** The printed rims alone pass at gapSagFrac 0.92. The L21 and L22 lands face each other across S8 to S9, 10.012 mm of the 10.611 mm gap, a ratio of 0.9436, so 0.94 is refused and 0.95 is the smallest two-decimal value that passes. Real clearance there is +0.599 mm, and +0.148 mm at S14 to S15. The validator reports no errors, and diagram trim is zero through the zoom range.

**Limitations.** The figure draws a straight edge across L31/L32, L34/L35, L37/L38 and L42/L43, but a cemented joint carries no land and its printed radius stays, so the model's edge dips by 1.04, 0.47, 1.32 and 1.06 mm at those joints. Stopping the front lands at the joint radius would flatten the front of each block at the joint height, but it cuts corner height by the same amounts and puts L36 above L37, which reverses the drawn order, so the front lands go to the drawn height and the dip stays. L52 and L55 are drawn as flanged blocks; here they run as straight slopes from the outer corner to their joints, 2.1 and 3.0 mm lower.

**Render and overlay.** The Wide outline overlaid on Fig. 2 and Fig. 3 at the corrected scale follows every drawn curve within a pixel, and every element edge except the doublet dips and the L52 and L55 slopes. The local page was checked at Wide, Middle and Tele, and at Wide with the focus slider at its close end, which is static here. Drawn order holds at all three: L21 to L25 descend, C1 through L39 climb, L41 drops, and L51, L52, L53, L54 and L55 run 25.6, 22.8, 21.3, 21.1 and 23.0 mm.

**Maker drawing.** Fujifilm's section agrees with the figure on element order, grouping and the rims of L11, L12, L13, L21, L31 and L51, which fall within 0.2 mm once scaled at 3.65 px/mm from L11. It differs by drawing the rear members of the first four doublets about 1.1 mm taller than the front members, stepped G2 and L41 flanges up to 1.7 mm taller than Figs. 2 and 3, and extra steps on L11 and L21. The patent figure governs, so no rim follows the maker drawing.

## 2026-11-02 — Second review: diagram, labels and movement

**Compared.** The local page at Wide, Middle, Tele and the close end of the focus slider, a 3× render of the diagram, and the engine's outlines laid over the native rasters of Fig. 2 (page 80) and Fig. 3 (page 81). Also Fig. 1's arrows (page 79), ¶0060, ¶0069 and ¶0159–0160, Tables 1A, 1B and 2 (pages 32–33), Table 34 (page 70), Fig. 6 (page 84) and Fujifilm's section, `lens-config.jpg`.

**Zoom.** Stations ascend 32.94 to 87.33 mm, and indices 0, 5 and 9 carry Table 2's values exactly. ¶0160 and Fig. 1's arrows move G2 and G4 toward the image, and the file agrees: G2 travels 34.2541 mm with DD6 2.18 to 36.4341 mm, G4 travels 14.1772 mm with DD32 5.0257 to 19.2029 mm, and the page's group chart reads 34.25 mm for the larger. DD6 + DD16 stays 38.4346 mm and DD32 + DD37 stays 31.2925 mm at all ten stations, so G3 and G5 hold; G1 has no variable gap ahead of it. The turning-point tool finds no turn in any gap or group, so the cam adds none. `fixed-iris` agrees with Table 34: (36) φSw/φSt = 1.0000, and (33) FNot/FNow = 1.0321 against 3.295/3.193 = 1.0320 from real rays. G2 computes f = -23.87 mm against -23.87 mm from (20), and G4 -60.52 mm against 60.52 mm from (27).

**Focus and stabilization.** ¶0160 reads "合焦群は第４レンズ群Ｇ４からなる。無限遠物体から最至近物体への合焦の際、合焦群は像側へ移動する。" Fig. 1's bracket and rightward arrow on G4 say the same, and `focus.description` matches. ¶0160 makes the stabilizing group the fourth to sixth lenses of G3, and ¶0069 names them L34–L36 with Fig. 1's downward arrow. Table 2 prints infinity states only, and Fig. 6 is captioned at infinity. The publication prints no close-focus spacing or decenter law for Example 1, so the static model stands and no table is invented. The Open line on close focus stays.

**Scale.** Vertex crossings on Fig. 3 give 15.44 px/mm. Fitting S1, S2, S3, S5 and S8 against their printed radii gives height/axial 0.9585–0.9595 with rms 0.2–0.3 px, so the stretch is 4.3% by this reading and 4.4% by the first pass. The two differ by 0.15%, about 0.03 mm at a 20 mm rim, which moves no value.

**Doublet edges.** Three pictures were laid over Fig. 2. Front lands at the drawn height, as the first pass left them, draw a V-shaped dip of 0.47–1.32 mm at each joint. Front lands stopped at the printed joint radii, S18/23/28/35 = 13.3585/16.1265/16.5785/18.7445, leave the front member short of the drawn top along its whole length. Raising the joint itself to the drawn height follows the drawn line within a pixel at all four doublets, and the block is flat as drawn. The validator bars a land on a cemented interface but accepts the joint `sd`, so that third picture is applied. The same step squares L53 and L54 on their joints. Fig. 2 draws L34 and L35 at one height, 105.75 and 105.79 px, so S25's land comes down 0.1 mm to meet S23's. The first pass's 16.58 / 16.66 split was noise.

| Surface | Change | Evidence | Baseline `sd` | Final | Light |
| --- | --- | --- | ---: | ---: | ---: |
| 19 | joint raised | L31, L32 top 14.39 mm | 13.3585 | 14.4 | 0.000 |
| 24 | joint raised | L34, L35 top 16.60 mm | 16.1265 | 16.6 | 0.000 |
| 25 | land 16.7 to 16.6 | one drawn height | 16.2795 | 16.2795 | 0.000 |
| 29 | joint raised | L37, L38 top 17.93 / 17.90 mm | 16.5785 | 17.9 | 0.000 |
| 36 | joint raised | L42, L43 top 19.75 / 19.72 mm | 18.7445 | 19.8 | 0.000 |
| 41 | joint raised | L53 top 21.33 mm | 20.6945 | 21.3 | 0.000 |
| 44 | joint raised | L54 top 20.93–21.07 mm | 20.033 | 21.1 | +0.062 |

These are figure-driven raises above printed ED/2 on faces that can take no land. They pass the validator, shift no engine half-field, and clear every axial and chief-ray check. S44 opens one lattice ray, +0.062 point at Wide 41.1° and at 46.79 mm 29.0°, and the other five joints open none.

**Cuts and lands.** No `sd` sits below baseline, so there are no cuts. All 38 lands stay under (b): each costs 0.0 points, and the validator refuses no restore. Heights are line-centre half-spans, on Fig. 3 for G1 and G2 and on Fig. 2 for the rest.

| Element | Faces | Figure reading | Baseline `sd` | Final `sd` | Land | Cost | Verdict |
| --- | --- | ---: | ---: | ---: | ---: | ---: | --- |
| L11 | 1 / 2 | 43.93–44.00 | 43.424 / 40.5825 | same | 44 / 44 | 0.0 | keep, slight |
| L12 | 3 / 4 | 41.04–41.11 | 40.319 / 39.7905 | same | 41.1 / 41.1 | 0.0 | keep, slight |
| L13 | 5 / 6 | 37.44–37.50 | 36.5485 / 36.014 | same | 37.5 / 37.5 | 0.0 | keep, slight |
| L21 | 7 / 8 | 23.80–23.83 | 22.2865 / 16.8455 | same | 23.8 / 23.8 | 0.0 | keep, slight |
| L22 | 9 / 10 | 17.49–17.52 | 16.5765 / 16.2095 | same | 17.5 / 17.5 | 0.0 | keep, slight |
| L23 | 11A / 12A | 16.39–16.42 | 16.0095 / 15.7935 | same | 16.4 / 16.4 | 0.0 | keep, slight |
| L24 | 13 / 14 | 16.26–16.29 | 15.693 / 15.505 | same | 16.3 / 16.3 | 0.0 | keep, slight |
| L25 | 15 / 16 | 15.90–15.93 | 15.415 / 15.229 | same | 15.9 / 15.9 | 0.0 | keep, slight |
| L31, L32 | 18 / 20 | 14.39 | 12.8225 / 13.5785 | same | 14.4 / 14.4 | 0.0 | keep, slight |
| L33 | 21A / 22A | 14.75 | 14.0285 / 14.4465 | same | 14.8 / 14.8 | 0.0 | keep, slight |
| L34, L35 | 23 / 25 | 16.60 | 15.967 / 16.2795 | same | 16.6 / 16.6 | 0.0 | keep, slight |
| L36 | 26 / 27 | 17.69 | 16.46 / 16.5155 | same | 17.7 / 17.7 | 0.0 | keep, slight |
| L37, L38 | 28 / 30 | 17.90–17.93 | 15.377 / 17.042 | same | 17.9 / 17.9 | 0.0 | keep, slight |
| L39 | 31 / 32 | 18.35 | 17.5365 / 17.562 | same | 18.3 / 18.3 | 0.0 | keep, slight |
| L41 | 33A / 34A | 16.53 | 15.8505 / 16.104 | same | 16.6 / 16.6 | 0.0 | keep, slight |
| L42, L43 | 35 / 37 | 19.72–19.75 | 17.182 / 19.185 | same | 19.8 / 19.8 | 0.0 | keep, slight |
| L51 | 38 / 39 | 25.58 | 25.142 / 25.045 | same | 25.6 / 25.6 | 0.0 | keep, slight |
| L52, L53 | 40 / 42 | 22.81 / 21.33 | 22.6015 / 20.396 | same | 22.8 / 21.3 | 0.0 | keep, slight |
| L54, L55 | 43 / 45 | 20.93 / 23.03 | 20.232 / 21.3215 | same | 21.1 / 23 | 0.0 | keep, slight |

Against baseline rims at every field of all ten stations, the worst loss is 0.0 points and the best gain 0.062. Corners read 41.2%, 44.9% and 51.7% at Wide, Middle and Tele, against 41.1%, 44.9% and 51.7% before. 0.95 stays the smallest gap limit that passes: 0.94 refuses S8→S9 at 10.01 mm against 9.974 mm allowed. Engine half-field stays 34.56° and 17.16° at the ends, and the stop radius 12.2685 mm and F-numbers 3.19/3.25/3.30 are unchanged. The surface validator reports no errors, the image-circle check is clean, and all ten stations reach 27.39 mm.

**Labels.** L11–L55, G1, G2, GISf, GIS, GISr, G4 and G5 match Fig. 2, and each surface range brackets the right elements. G3 stays as its three subgroups. C1–C6 sit on the six cemented pairs, with no clash against the DD gap labels. Every `type` agrees with the signs of R, all 25 `focalLengthMm` recompute within 0.01 mm, and the inspector shows them with no blank. The asterisks in Tables 1A and 1B fall on S11, S12, S21, S22, S33 and S34, the six `A` faces. The stop draws between L25 and L31. Fig. 2 draws the plate PP; the file holds it in `rearPlates`, so the page hides it and traces it. L33, L51 and L54 are the three ED positions on Fujifilm's section, and L23, L33 and L41 its aspherical ones. The patent itself calls no element ED, so `apd: "inferred"` is right on all three.

**Colour.** Fig. 6 plots d, C and F, with no g line. Paraxial focus relative to d in this model reads C -9 and F +60 µm at Wide, and C +48 and F -20 µm at Tele. The plot's pupil-centre readings are C about 0 and F +65 µm at Wide, and C +46 µm with F merged into d at Tele, at 9.3 µm per pixel. Lateral colour at the full field reads C +20.3 and F -15.4 µm at Wide, C +1.5 and F +4.2 µm at Middle, and C -8.4 and F +5.7 µm at Tele, against the plot's +20.4 and -13.9 µm, +1.7 and +5.4 µm, and -7.9 and +6.7 µm. Plain nd and νd without the catalog rows miss the same plots, at C +92 and F +32 µm paraxial at Tele. The g line cannot be checked against a plot, but the engine's θgF equals the printed value on all 25 elements, because the authored `dPgF` wins at g. So the L23 and L55 row misses do not reach the g channel. L23's row does read νd 64.09 against the printed 63.849, the only gap above 0.06 in the file, and printed νd moves Tele F from -20.4 to -22.2 µm, too small to see on the plot. The Open line on those two rows stays with the glass labels.

**Limitations.** Fig. 2 draws L52 and L55 as stepped blocks with flanges 22.8 and 23.0 mm high. The renderer joins an element's two rims with one straight edge and a joint carries no land, so each edge still runs straight from the outer corner to the joint, leaving a wedge of up to 1.5 mm at L52 and 1.9 mm at L55. The S2, S8, S28 and S35 lands start at printed ED/2, inside the drawn curve ends, so they sit 0.25, 0.38, 0.54 and 0.4 mm forward of the drawn lands; raising them would mean widening air faces past the printed rows for under 2 px on the page, and S8 would also close the S8→S9 clearance, so they stay. L54's top reads 20.93–21.07 mm and stays 21.1 mm, inside the reading error.
