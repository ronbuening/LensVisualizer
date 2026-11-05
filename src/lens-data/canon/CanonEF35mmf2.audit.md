# Source and numerical audit

Representative probable-family prescription; source literal millimetres retained.

- Native model SHA256: `f9ce41d39b845d02cf8b0069378229f60db2f7758f1dc95478a3c56141aebeab`.
- Source archive SHA256: `75cd50f5cecad32aa64ac2446a3b19921da6cbe636a8388876615b055a6c9787`.
- Source CSV LF separator-only transport hash retained separately from original bytes.
- First-order methods agree; source/computed image-plane distinction retained.
- Geometry and all24 native format-reference fields pass at every advertised aperture; max delta0.0092475561.
- All raw clipping and64 aim-blocked engine failures remain in the evidence. No applied refocus or optical tuning.
- Type checking, corpus and compiled-viewer receipts are produced by the separate final integration run; this source writer does not assert those results. (Closed 2026-11-02: left to the batch integration run.)

## 2026-11-02 — Deployment validation and wording pass

Source re-read: page images of JP H04-015611 A, Numerical Example 1, at 500 dpi. All 13 surfaces, 12 thicknesses, 7 N/ν pairs, the stop row and both cemented joints checked; no mismatches. The patent has no aspheres or variable gaps, and no example prints a back focus or total length.

First-order, patent vs model: F 35.51 / 35.508; Fno 2 / 2; 2ω 62.7° / 62.7°; Ff/FR 0.429 / 0.429; R4/F -0.56 / -0.557. Computed back focus 37.828 mm and image plane 85.228 mm reproduced independently. Reading Figure 4 vs model: d spherical aberration at the top of the pupil -0.11 / -0.109 mm; ΔM, ΔS at full field -0.35, +0.24 / -0.39, +0.20 mm; distortion -2.0% / -1.92%.

Line test: 7 of 7 pairs reproduce a catalog nd/νd within |Δn| ≤ 6e-5 and |Δν| ≤ 0.15, and 0 of 7 reproduce a catalog ne/νe, so the table is d-line and `indexReferenceNote` is removed from all seven elements.

Maker diagram: Canon's section at about 3.2 px/mm, checked against its 67.4 × 42.5 mm barrel. Fitted surface stations give rms 0.76 px for Example 1, 1.26 px for Example 3 and 3.55 px for Example 2. L5 is drawn 1.12 mm thick; the examples print 1.10, 2.20 and 1.70 mm for Examples 1, 2 and 3. Canon draws S3 steeper (R about 26 mm) and S5 flat, which no example does. Example 3 computes F 35.498 against its printed 35.51.

Fields changed: S8 `sd` 9.0 → 9.05, the largest value inside the default S8→S9 gap limit, which clears the axial beam at the stop's 9.05 mm marginal height (`vig.mjs` 100.0% on axis; corner 36.7% unchanged). `closeFocusM` 1e15 → 0.25, static, because neither the patent nor Canon's page states a focus motion. `subtitle`, `specs`, header comment, element roles and `diagramLabel` L1–L7 reworded or added; the "tentative" inventor line is removed, leaving Tsunefumi Tanaka as the corpus form. The US 4,629,294 name-comparator reference is dropped from the analysis.

L4 label: S-TIM25 (νd 32.10) gives paraxial g−d +0.011 mm and top-of-pupil g−d +0.291 mm; E-FD5 (νd 32.17, inside the 0.25 window) gives +0.002 and +0.279 mm; Figure 4 reads about 0 and +0.266 mm. E-FD5 is closer, by less than the ±0.02 mm plot-reading error. PBM25, the exact period row, is not in the repo catalog. 2026-11-02: PBM25 (1.67270 / 32.10, PgF 0.5922) is now a catalog row and L4 uses it, giving paraxial g−d 0.000 mm and top-of-pupil g−d +0.276 mm.

Open: unit extension of +8.13 mm (last gap 45.96 mm) gives 0.229× at 250 mm, matching retail 0.25 m and 0.23×, but no source states the mechanism, so it is not authored. (Rims closed 2026-11-02: refitted to Figure 1 in the section below.)

## 2026-11-02 — Semi-diameter pass against the patent figure

Source: `patents/JPH04015611A.pdf`, PDF p. 4, Figure 1 (第1図), Numerical Example 1, 347 dpi bilevel scan, axis vertical with the object at the bottom. The axis line runs 0.31° off the raster and the glass sits about 0.7° off square to that line, so rims are half the left-to-right span, which neither tilt moves. Figure 4 prints spherical aberration, astigmatism and distortion only; the patent has no coma fans, so there is no fan reading.

Scale, both directions. Along the axis, S1 to S13 is 535.0 px over 47.40 mm, 11.29 px/mm; S2–S3 11.37, S3–S4 11.29, S5–S7 11.25. Across, a common fit of the printed radii to ten arcs gives 11.71 px/mm, rms 0.46 px, leave-one-out 11.68–11.78 (S10 and S12 are too flat to use). The figure is therefore stretched 3.7% across the axis; a square reading would overstate every rim by that much. Two checks: the stop ticks' inner ends span 111 px half-width, 9.48 mm against the derived iris 9.461 mm; and S2's land lies 75.7 px behind its vertex, 6.71 mm, which by the printed R alone puts the cap end at 12.9 mm, where the arc joins the land at ±151 px.

| Surface | Before | After | Figure | Evidence |
| --- | ---: | ---: | ---: | --- |
| 1 | 14.50 | 15.10 | 176.5 px, 15.07 mm | L1 edge. Edge thickness is 3.8 mm drawn, 4.0 mm at 15.1 with the land and 4.3 mm at 14.5. The land's share of the edge, 0.856, also needs the wider edge (0.861 at 15.1, 0.897 at 14.5). |
| 2 | 14.00 | 13.00 + land to 15.10 | cap end 12.9 mm | The old rim ran 8.5 mm behind the vertex; the figure stops the curve at 6.7 mm with a flat land. Canon's section ends this curve near 12.8 mm too. 12.9 costs 0.5 points at 25.7°; 13.0 equals the old 14.0 at every field. |
| 3–5 | 11.50 | retained | 139 px, 11.87 mm | 3.1%, inside the noise; S3's own arc fits 12.06 px/mm, which gives 11.5 mm. Nothing clips (real marginal 11.43 mm). |
| STO | derived | unchanged | 9.48 mm | Stop rule. |
| 7 | 9.50 | 9.90 | 115.5 px, 9.86 mm | L4 edge, square with the S8 land; holds the 0.6 mm step to HL2. |
| 8 | 9.05 | 9.50 + land to 9.90 | curves merge by ±110 px | Merged ink widths fit lines meeting at 9.5 mm. Printed R puts the meeting at 9.54 mm. |
| 9 | 9.75 | 9.50 + land to 10.50 | same, flat to 123 px | The line past the merge is flat, at the S9 cap's sag, not the continued curve (2.4 px apart). |
| 10, 11 | 9.75 | 10.50 | 123.25 px, 10.53 mm | HL2 edge, square. Also clears the 8.88 mm pupil ray (9.92, 10.14 mm). |
| 12, 13 | 11.25 | 12.00 | 140.75 px, 12.02 mm | L7 edge, square; holds the 1.5 mm step from HL2. |

S1, S7, S10–S13 are 4–8% moves, inside the general noise band, and go in because this figure's scale and edges read to about 0.15 mm and the moves keep the drawn steps. All faces of each element stay square as drawn, apart from the three lands.

Clearance. The surface audit passes at `gapSagFrac` 1, the smallest two-decimal value; 0.99 is refused, with 1.984 mm of land intrusion against 1.980 mm allowed, in the 2.00 mm S8→S9 gap. The faces do not cross: their lands sit 0.02 mm apart. Before, `clearap.mjs` flagged S8, S10 and S11 for a ray entering at the 8.877 mm paraxial pupil radius (9.49, 9.92, 10.14 mm against 9.05, 9.75, 9.75); now nothing is flagged. That ray reaches the stop at 9.88 mm, past the 9.461 mm iris, so the aperture census was and stays within 3% of f/2, limited by the iris. `lsa.mjs` shows nothing to suggest a misprint. Image-circle floor clear; corner chief ray unchanged at 21.22 mm of 21.65 mm.

Engine half-field stays 31.35° and f/2.0, stop 9.461 mm. The engine's tracing limit moves from 34.5° (S1) to 33.4° (S2 cap), past the printed field and the 31.9° corner.

Geometric illumination by the app's full-pupil lattice, wide open at infinity, starting rims against final rims:

| Field, ° | 0 | 2.9 | 5.7 | 8.5 | 11.4 | 14.3 | 17.1 | 19.9 | 22.8 | 25.7 | 28.5 | 31.4 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Starting | 100.0 | 98.5 | 95.8 | 92.1 | 87.7 | 82.9 | 78.0 | 72.4 | 67.0 | 58.7 | 48.6 | 36.7 |
| Final | 100.0 | 100.0 | 99.4 | 97.0 | 93.7 | 89.9 | 85.9 | 80.9 | 75.3 | 70.0 | 60.0 | 48.3 |

No field loses light. The corner gain is a result of the figure rims, not a target: 41.8% without the L7 move, 42.1% with S10 and S11 restored, unchanged with S7 restored. S2 and S9 are the only faces below their starting rims. S2 costs nothing; S9 is spacing, since a cap past about 9.58 mm crosses the S8 land and the restore is refused. Raising S3–S5 to their 11.9 mm reading would add only 0.8 points at the corner and was not done.

Canon's section, 3.2 px/mm: seven elements in five groups, same order. Half-heights L1 15.5, HL1 12.3, L4 11.7, L7 11.4 and HL2 9.8 mm, with S2's cap near 12.8 mm and S8/S9 closing near 9.4 mm. Figure 1 reads 15.1, 11.9, 9.9, 12.0 and 10.5 mm. They disagree on the rear: Canon draws L4 wider than HL2 and L7 about 0.9 mm under HL1, where Figure 1 has HL2 over L4 and L7 level with HL1. The starting L7 and HL2 rims sat close to Canon's values, so the patent figure, which governs, moves them off it.

The live page at infinity and at `focus=1` shows the same section, since the model is static, and agrees with the figure: L1's flat rear land, the air lens closing on the L4–L5 flats, HL2 stepping over L4, and L7's thin edge. An overlay at 11.71 and 11.29 px/mm lies on the drawn strokes everywhere except HL1's top, about 4 px inside the ink.

Open limitations: rims are read to about 0.15 mm, and the arc fits run from 11.4 to 12.2 px/mm surface by surface. Figure 1 draws no chamfers and the model has none. HL1 is left inside its reading. (HL1 closed 2026-11-02: set to its 11.8 mm edge reading in the section below.)

## 2026-11-02 — Second review: diagram, labels and movement

Compared the local page at infinity, `focus=1`, `mv=focus` and the inspector for L1, L3, L4, L5 and L7 with `patents/JPH04015611A.pdf`, PDF p. 4, Figure 1, re-measured at 347 dpi, with the patent text (PDF pp. 2–4), with Figure 4 (PDF p. 5), and with Canon's section. All first-pass readings were redone from the raster.

Scale. Along the axis S1 to S13 is 535 px over 47.40 mm, 11.29 px/mm. Each arc fitted alone with its own tilt gives S1 11.84, S2 11.70, S4 11.70, S7 11.68 and S8 11.66 px/mm; the flatter S3, S5 and S10 are unreliable at 11.9–12.1. Figure 1 is about 3.7% tall, as the first pass found. Half-spans between opposite edges: L1 176.5 px, HL1 138.5, L4 115.5, HL2 123.0, L7 140.25, stop ticks 111.5.

| Surface | Before | After | Figure | Evidence |
| --- | ---: | ---: | ---: | --- |
| 3, 4, 5 | 11.50 | 11.80 | 138.5 px, 11.83 mm | The other four element edges sit within 0.4 px of their reading at 11.71 px/mm; HL1 sat 3.8 px under, the one visible miss on the overlay. HL1/L1 is drawn 0.785, was 0.762 and is now 0.781; Canon's section gives 0.794. L7 stands 0.15 mm over HL1 as drawn, was 0.50 mm and is now 0.20 mm. |

The S4 junction read through the printed R gives 11.65 mm and S3 gives 11.36 mm, because S3's arc is drawn flatter than printed; the edges and the proportions set the value. The move follows the figure, not the numbers; it happens to add 0.6 points at the corner and up to 2.5 points at 22.8°.

Every cut and land against the baseline rims. Points are what the final lens loses against restoring that one rim, wide open at every field.

| Face | Kind | Verdict | Figure | Baseline | Final | Points |
| --- | --- | --- | ---: | ---: | ---: | ---: |
| S2 | cut | keep: slight | 12.9 | 14.00 | 13.00 | 0.0 |
| S2 | land | keep: redraws the outer rim, slight | 15.07 | none | 15.10 | 0.0 |
| S8 | land | keep: redraws the outer rim, slight | 9.86 | none | 9.90 | 0.0 |
| S9 | cut | keep: slight | 9.5 | 9.75 | 9.50 | 0.1 at 11.4° |
| S9 | land | keep: redraws the outer rim, slight | 10.50 | none | 10.50 | 0.0 |

S9 can rise only to about 9.54 mm, which wins that 0.1 point; at 9.58 and 9.75 mm the validator refuses it, with combined sag 2.00 and 2.04 mm in the 2.00 mm gap, so 9.75 cannot return. S2 at 12.9 mm, its sag reading, would cost 0.8 points at 25.7°, still far above baseline, but it moves 1.4 px along the axis, inside the noise, so 13.00 stays. All other faces sit above baseline.

Final `rimcost.mjs`: worst loss 0.0 points against baseline rims; every field off axis gains, by as much as 12.9 points. Geometric transmission at 0, 11.4, 22.8, 28.5 and 31.4°: baseline 100.0, 87.7, 67.0, 48.6, 36.7; before this review 100.0, 93.7, 75.3, 60.0, 48.3; final 100.0, 95.7, 77.8, 61.2, 48.9.

`gapSagFrac` stays 1, the smallest two-decimal value for these rims: at 0.99 the validator refuses S8→S9 with 1.984 mm of land intrusion against 1.980 mm allowed. The default 0.9 allows 1.80 mm, a common rim of 9.05 mm, 0.45 mm short of the figure and a point down on axis. S8 and S9 at 9.48 mm would pass at 0.99 but moves two rims for no gain in the drawing. The faces do not cross: the lands stay 0.02 mm apart, and the printed radii close the gap at 9.54 mm.

After the edit the surface audit passes, no surface is flagged, the image-circle floor is clear and `built.mjs` runs. Engine half-field stays 31.35° with tracing limit 33.4° (S2 cap), f/2.0, stop 9.461 mm; corner chief ray 21.22 mm. The overlay at 11.71 and 11.29 px/mm now lies on the drawn strokes everywhere, HL1's top included.

Found correct, no change. Group brackets I and II are the patent's 前群 I and 後群 II (PDF p. 2, Figure 1) and span S1–S5 and S7–S13. Cemented brackets HL1 and HL2 are the patent's own letters, 第1 and 第2接合レンズ in the text and bracketed in Figure 1; page and patent both read H, not B, and no gap label exists to collide with them. Element names and `diagramLabel` are the patent's L1–L7, and the inspector shows DOUBLET HL1 and HL2 with no triplet. Every `type` follows the signs of R; every `role` matches the patent's text on L1, HL1 and the two rear negative components. The stop sits between L3 and L4 by the printed D5 and D6; the patent calls it SP and the page keeps the repo's STO. Nothing is aspheric, in the patent or on Canon's section. No `apd` tag exists: the patent names no special glass and Canon's section is plain line art with no mark. Stored focal lengths match a recomputation, and the inspector shows -63.61, -35.63, -25.3, -50.34 and +44.87 mm for L1, L3, L4, L5 and L7.

Movement. The patent gives one infinity state and mentions focusing only as fast autofocus on a light lens (PDF p. 4), so no keyframes exist and none were invented. The slider's far end reads "Not modeled", `focus.description` says the same, the `mv=focus` panel reads "This lens has no modeled focus or zoom group movement", and `focus=1` draws the same section.

Colour and field curves, read from the local axis line, which leans 0.42° in the plot. Figure 4's ticks are 308 px over 0.80 mm, 385 px/mm, so the first pass's g reading of +0.156 mm becomes +0.162 mm. The curves end at the iris-limited ray, 8.53 mm at entry, 96.1% of the 8.877 mm paraxial radius: the ghost ray at full radius gives d -0.150 and g +0.148 mm, which the plot does not reach.

| Plot height | 0.997 | 0.894 | 0.791 | 0.688 | 0.533 | 0.379 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| d, Figure 4 | -0.114 | -0.088 | -0.097 | -0.105 | -0.086 | -0.047 |
| d, model | -0.109 | -0.094 | -0.104 | -0.105 | -0.085 | -0.050 |
| g, Figure 4 | +0.162 | +0.126 | +0.061 | on the axis | -0.021 | -0.017 |
| g, model | +0.167 | +0.118 | +0.055 | +0.008 | -0.020 | -0.019 |

Paraxially g sits on d, as printed. No line disagrees beyond the reading error of about 0.008 mm. The patent prints no C or F; the model puts their paraxial foci +0.065 and -0.054 mm from d. The astigmatism plot's height is linear in tan ω.

| ω, ° | 10.6 | 15.7 | 20.6 | 25.2 | 29.5 | 31.35 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| ΔS, Figure 4 | -0.079 | -0.150 | -0.200 | -0.162 | +0.036 | +0.23 |
| ΔS, model | -0.076 | -0.145 | -0.191 | -0.159 | +0.026 | +0.20 |
| ΔM, Figure 4 | -0.045 | -0.090 | -0.142 | -0.204 | -0.296 | -0.355 |
| ΔM, model | -0.044 | -0.088 | -0.134 | -0.190 | -0.295 | -0.389 |

The curves agree within 0.015 mm below 30°. At the last degree they run steepest, and both model curves lie about 0.03 mm left of the plot. Distortion, Figure 4 and model: -0.13 / -0.14% at 7.1°, -0.81 / -0.79% at 17.4°, -1.56 / -1.49% at 25.2°, -1.99 / -1.92% at 31.35°; the plot reads to about 0.05%.

The `Open:` line on the unit-extension focus stays open: no source states the mechanism.
