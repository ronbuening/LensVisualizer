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
