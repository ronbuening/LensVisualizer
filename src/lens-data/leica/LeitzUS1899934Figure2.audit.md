# Figure 2 audit

- US 1,899,934 pages 1–2 checked by eye. R = +93.6, +324.07, +71.315, −99.842, +445.72, −108.755, −40.828, +33.963, +62.846, +54.734, −69.71. Axial spacings = 8.91, 0.4457, 19.611, 5.348, 11.143, 10.697, 5.349, 12.034, 4.457, 12.480. nD/ν = 1.6240/58.2, 1.6240/58.2, 1.6219/36.1, 1.6242/44.8, 1.5673/42.8, 1.5407/47.2, 1.6240/58.2.
- Three cemented interfaces: R4, R7, R10. Index difference at the negative member's cement face 0.0569; dimensionless relative cement power (n′ − n)·f / r = 0.139. An independent paraxial-matrix and exact-ray check agrees with the engine's infinity D-line ray intercepts to 7.2e−14 mm across 193 traced rays (201 attempted across the full pupil).
- Model rims [39.5, 39.5, 38, 38, 33, 27.5, 27.5, 27.5, 22.5, 22.5, 22.5] are estimates. Minimum rim-to-rim glass or air separation 0.4457 mm; at most 39.34% of any air gap is taken up by surface sag. No gap or sag override. The section drawing needed no rim trimming larger than 0.25 mm. Across its full stroke the iris clears the glass by at least 1.62 mm in front and 3.634 mm behind.
- The data file loads, traces at infinity and type-checks. Figure 1 of the same patent is modelled separately. Handwritten notes on the drawing sheet cite a British patent 381,135; that family link has not been checked.
- Meridional rays passing at 0°, 5°, 10°, about 19.64° (the default half-field) and 20°: 7, 7, 5, 1 and 1 of 9. These are not coverage, MTF, glass-dispersion or production-fit claims. Colour is modelled from nD and ν alone (C and F indices estimated). (Superseded 2026-11-17: L5 and L6 now trace on catalogue curves.)

## 2026-11-16 — Deployment validation

**Checked:** an independent re-read of the patent page images, rendered at 300 and 600 dpi. The check covered the front page and drawing sheet (bibliography; Figure 2 element shapes, cemented pairs and proportions) and page 2 (the Figure 2 table). Every radius with its sign, all seven thicknesses and three air spaces, all seven nD and ν values, and the three cemented interfaces match the file. No mismatches. The patent prints no stop, diameters, back focus, focal length or field. The claim's four conditions hold at the printed values (0.0569; 0.139; a2/a3 = 0.93; total air / length = 0.26). The table computes to an EFL of 99.99 mm, the usual f = 100 normalisation. On-axis spherical aberration is small (+0.018 mm at full aperture, −0.198 mm at the 0.7 zone), consistent with no misprint.

**Verdict:** valid as a hidden patent reference (closed: the lens is now shown in the catalogue). No production lens is documented. The Leitz Xenon 5 cm f/1.5 (Taylor, Taylor & Hobson design) and Summarit 5 cm f/1.5 are seven-element, five-group double-Gauss lenses, and the Hektor 7.3 cm f/1.9 has six elements in three groups. None has Figure 2's single front meniscus followed by three cemented doublets, and no Leitz f/1.3 lens was found.

**Changes:**

- `maker`: "Leitz" → "Leica" (house maker for Leitz-era lenses; file moved to `leica/`).
- `source.assignees`: "Ernst Leitz Optische Werke GmbH" → "Ernst Leitz GmbH" (the corpus form for this company).
- `source.patentNumber`: "US 1,899,934" → "US 1,899,934 A" (house form).
- `catalog.focalLengthMm.design`: 99.99195539633102 → 99.99 (rounded).
- Added `cemented` "D1" (L2/L3), "D2" (L4/L5) and "D3" (L6/L7), and three matching `doublets` (surfaces 3–5, 6–8, 9–11), for the printed cemented pairs. (Renamed C1–C3 on 2026-11-17.)
- Added a plain-English header comment: source, example, scale, glass line, and what is inferred.
- Analysis rewritten to the house section layout.
- Process notes removed from this log.
- No prescription value, rim, stop position or image distance changed.

**After changes (`built.mjs`):** EFL 99.992 mm, f/1.3, iris radius 20.356 mm, total track 137.306 mm, default half-field 19.64°. `probe.mjs`: back focus 46.831 mm, which equals the last gap. Group focal lengths: L1 + D1 +82.1 mm, D2 −45.7 mm, D3 +55.2 mm.

**Audits:**

- `audit:surface`: OK, no validation errors.
- `audit:aperture --raise`: no surface below the on-axis ray.
- `audit:image-circle` and `audit:field-coverage` skip the lens (no image format; hidden). (Still skipped on 2026-11-17 for the missing image format.)
- `clearap` at f/1.3: no axial clipping. The real marginal ray reaches the stop at 21.17 mm against the 20.36 mm paraxial iris, so about the outer 3% of the pupil radius is stopped. At an image height of 21.6 mm (12.2°), the rear doublet's estimated rims vignette 20–26% of one side of the bundle. The chief ray clears L1's estimated rim up to about 18.5°, below the engine's 19.64° default half-field. The patent states no field.

**Open:**

- Name, subtitle and specs wording: "PATENT REFERENCE", "HIDDEN QUALIFIED REFERENCE", "PATENT ONLY; NO RETAIL MATCH". (Closed 2026-11-17.)
- `focus.description` wording ("BFD", "retail identity"). (Closed 2026-11-17.)
- Optional glass labels for the five printed nD/ν pairs. (Closed 2026-11-17: two catalogue equivalents, three Unmatched.)
- Rims against the drawing (8.17 px/mm along the axis). The drawing reads about L1 39.4, L2/L3 36.7 (the model's s5 at 33 cuts the drawn full-height r5), L4/L5 29.5 and L6/L7 24.6. The model has 39.5, 38/38/33, 27.5 and 22.5. With the drawn rear rims, vignetting at 12.2° falls to 12–17%. (Closed 2026-11-17 by the semi-diameter pass below.)
- The drawing bevels L5's rear face at about 24 mm, while the model's r8 rim at 27.5 mm reaches 14.0 mm behind its vertex. That is past the stop plane, but outside the iris stroke. (Closed 2026-11-17: r8 is now 22.3, ahead of the stop plane.)

## 2026-11-17 — Cleanup and wording pass

**Data file:**

- `subtitle`: "FIGURE 2 — HIDDEN QUALIFIED REFERENCE" → "US 1,899,934 A, Figure 2 — Leitz split-front triplet".
- `specs`: ["7 ELEMENTS / 4 GROUPS", "PATENT ONLY; NO RETAIL MATCH", "ESTIMATED STOP AND RIMS", "INFINITY ONLY"] → ["7 ELEMENTS / 4 GROUPS", "DESIGN F/1.3", "ALL SPHERICAL", "3 CEMENTED DOUBLETS"].
- `focus.closeFocusM`: 1000000000000000.0 → 1e15 (same value). No `catalog.closeFocusM.marketing` is set, because no product is documented.
- `focus.description` → "Infinity focus only; the patent gives no close-focus data."
- Element `label`: "L1" … "L7" → "Element 1" … "Element 7". Each element also has a plain optical `role`.
- Element `type`: "Biconvex" → "Biconvex Positive" (L2, L7); "Biconcave" → "Biconcave Negative" (L3, L5). The meniscus types already matched the radius signs.
- Cemented ids and `doublets` text: D1/D2/D3 → C1/C2/C3 on both members of each pair.
- Header comment: one long line reflowed. Added a GLASS note on the two catalogue equivalents.

**Glass labels**, added at the D line with `indexReference "D"`; each resolves:

| Element | Label | Catalogue nD / νD | ΔnD | Δν |
|---|---|---|---|---|
| L5 | "S-TIL26 (OHARA catalog equivalent)" | 1.56721 / 42.81 | −0.00009 | +0.01 |
| L6 | "S-TIL2 (OHARA catalog equivalent)" | 1.54062 / 47.22 | −0.00008 | +0.02 |
| L1, L2, L7 | "Unmatched (nD 1.6240 / V 58.2)" | nearest S-BSM15 1.62290 / 58.16 | −0.0011 | −0.04 |
| L3 | "Unmatched (nD 1.6219 / V 36.1)" | nearest F2 1.61989 / 36.36 | −0.0020 | +0.26 |
| L4 | "Unmatched (nD 1.6242 / V 44.8)" | nearest BAM8 1.62362 / 47.09 | −0.0006 | +2.29 |

Hoya E-FL6 (ΔnD −0.00010) and E-FEL2 tie with the two Ohara rows; Ohara was used for both so one vendor is named. The paraxial numbers do not depend on the labels. They change only the colour channels of L5 and L6, by catalogue dispersion within 0.03 of the printed ν. No `apd` tags.

**Analysis:**

- H1 → the new name.
- `**Patent:**` row → "US 1,899,934 A".
- Doublet ids → C1–C3; element headings carry "Element N".
- Glass section rewritten for the two catalogue equivalents.
- Removed: "hidden patent reference", "house rule", "computed by the engine", and the transcription-check remark.
- The no-product statement now appears once, in Design Heritage and Context.

**Engine numbers, before and after (identical):**

- `built.mjs`: EFL 99.99196 mm, FOPEN 1.3, half-field 19.640°, stop radius 20.3564 mm.
- `probe.mjs`: BFD 46.8314 mm, total track 137.3061 mm.

**Audits:** `audit:surface` OK; `audit:aperture` no rim limit; `audit:image-circle` and `audit:field-coverage` skip the lens (no image format).

**Open:**

- Rims against the drawing (L2/L3 ≈ 36.7 with s5 at 33, L4/L5 ≈ 29.5, L6/L7 ≈ 24.6), and the L5 rear bevel at about 24 mm. Both are listed above, for the semi-diameter pass. (Closed 2026-11-17 by the semi-diameter pass below.)
- No `imageFormat` or field angle: the patent states none.
- The `fStops` list beyond f/1.3 is a model default, not printed by the patent.

## 2026-11-17 — Semi-diameter pass against the patent figure

**Source:** US1899934A.pdf, drawing sheet (page 1), Figure 2. It is the only drawing of this example and shows no stop.

**Scale:** rendered at 600 dpi, with 1200 dpi crops of the corners.

- The r1–r11 vertex span is 1,470–1,479 px for 90.47 mm, giving 16.34 px/mm.
- A second span, r1 to r5 (34.31 mm), gives 16.35 px/mm.
- Individual glass thicknesses are drawn about 5 % thick and the air spaces 6–8 % thin, so drawn heights carry similar drafting noise.
- Arc fits of r8 (radius 33.963 mm) and r9 (62.846 mm) through rim and axis points agree with the axial scale within 2 %, so the vertical scale matches.
- The axis was taken as the midpoint of each doublet's flat top and bottom edges. Those midpoints agree within 1.5 px at 600 dpi.

**Drawn readings:**

- L1 tips: 39.1–39.2.
- C1: flat edge 36.6, front cap r3 ending at 35.2 in a small chamfer, rear face r5 ending at 34.9 in a bevel.
- C2: flat edge 29.3–29.7 (mean 29.5), front cap r6 ending at about 27.8 in a chamfer, cemented face r7 reaching the edge. The concave rear cap r8 ends at 24.4, about 10.4 mm behind its vertex, then a bevel runs forward to the flat edge.
- C3: drawn square-cut at 24.6 on all three faces.

**Changes (before → after):**

- Surface 5: 33 → 34.9. The figure's rear-face cap end. The drawn rear step of C1 is 1.7 mm; the model's was 5 mm.
- Surface 7: 27.5 → 29.5. The cemented face reaches the drawn flat edge. This also reproduces the drawn front chamfer from r6 at 27.5.
- Surface 8: 27.5 → 22.3. The figure's cap end is 24.4. At 24.4 the cap would sit 2.0 mm behind the inferred stop plane, and the drawn iris housing (the smaller neighbouring rim) would cross L5's glass. 22.3 is the largest value whose sag (8.35 mm) stays ahead of the 8.4 mm stop distance, 8.6 % under the drawn reading. The old 27.5 put the rim 14.0 mm behind the vertex, past r9's vertex plane. (Superseded by the stop move below: surface 8 is now 24.4.)
- Surfaces 9, 10 and 11: 22.5 → 24.6. The rear doublet is drawn square-cut at this height.

**Kept:**

- Surfaces 1 and 2 at 39.5 (drawn 39.2).
- Surfaces 3 and 4 at 38. The real f/1.3 marginal ray reaches 36.33 at surface 3, above the drawn 35.2 cap, so the ray floor governs. The drawn 36.6 edge is 3.7 % under the stored value.
- Surface 6 at 27.5 (drawn cap end about 27.8).

**Clearance and light:**

- `audit:surface`: OK.
- `audit:aperture`: no rim limit.
- `clearap`: no `CLIPS-AXIAL` or `BLOCKS-CHIEF` at f/1.3. At 12.2° the rear doublet still vignettes 12–17 % of one side of the bundle, against 20–26 % before.
- Corner illumination (the engine's vignetting curve; `rimcost --loo` against the committed file):
  - 12.2°: 63.1 % → 68.3 %
  - 10.2°: 73.8 % → 77.8 %
  - 8.1°: 82.9 % → 84.8 %
  - Worst loss at any field: 0.0 points.
  - Restoring the old r8 rim wins back nothing.
- Engine values are unchanged: half-field 19.64°, f/1.3, EFL 99.992 mm, iris radius 20.356 mm.
- The drawn iris housing falls from 22.5 to 22.3, now just inside the air at the stop plane.
- The chief ray clears every surface to about 18.5°, limited by L1's rim, as before.
- (These three lines describe the state before the stop move below.)
- `audit:image-circle` and `audit:field-coverage` still skip the lens (no image format).

**Metadata:** no change. No production lens or format is documented. The table is the patent's own f = 100 normalisation, so no film format applies as built. The current name, "LEITZ 100mm f/1.3 (US 1,899,934 Figure 2 Design)", is a patent-design name; no product name exists to compare.

**Open:**

- The inferred stop sits inside the bowl of r8. The drawing's L5 cap and flange end about 10.4–10.7 mm behind r8, so an iris about 10.5 mm behind r8 (1.5 mm ahead of r9) would leave r8 free to take the drawn 24.4. Moving the stop is outside this pass. (Closed: done on the coordinator's request, below.)
- `source.sdSource` still says "heuristic". The rims are now mostly figure readings, with surfaces 3 and 4 set by the ray floor. The coordinator may switch it to "figure-measured" or leave it. (Closed 2026-11-17: now "figure-measured".)

**Stop move (same day, on the coordinator's request):** the stop position is inferred, since the patent prints none and the drawing shows none.

- **Change:** the iris moves back within a3, from 8.4 mm to 10.35 mm behind r8 (3.634 → 1.684 mm ahead of r9). This is the least move that lets r8 take the drawn cap edge, 24.4 mm, whose sag is 10.34 mm. Surface 8 goes from 22.3 to 24.4 with `rimExtensionSd` 29.5. That land draws L5's flange out to the doublet's 29.5 mm flat edge in place of the drawn bevel, and traces nothing.
- **Clearance:** r9 lies 1.684 mm behind the stop on axis and recedes outward, so the stop clears it. The iris housing (24.4) meets no glass at the stop plane: L5's cap ends 0.01 mm ahead of it, and L6 starts 1.68 mm behind it.
- **Engine values:** EFL 99.992 mm and f/1.3 are unchanged.
  - Iris radius: 20.356 → 20.320 mm.
  - Iris clearance to r8: 3.60 mm (was 1.63).
  - Real marginal ray at the stop: 21.29 mm (was 21.17). About 4 % of the pupil radius is stopped (was about 3.8 %).
  - Engine half-field: 19.64° → 18.56°. Moving the iris back raises the chief ray at L1, so the field the rims pass unblocked falls from about 18.5° to about 17.9°. L1's rim, at the drawn 39.5, still limits it; the patent states no field.
- **Audits:** `audit:surface` OK; `audit:aperture` no rim limit; `clearap` no axial clip, and no chief block below 17.9°.
- **Corner illumination** against the committed baseline, engine vignetting curve at 0–12.2°:
  - 4.1°: 96.1 → 96.0
  - 6.1°: 90.9 → 90.4
  - 8.1°: 82.9 → 84.0
  - 10.2°: 73.8 → 76.5
  - 12.2°: 63.1 → 68.6
  - Worst loss: 0.5 points at 6.1°, within the 3-point limit. `rimcost --loo` shows no rim whose restore wins light back.

## 2026-11-17 — Second review on the local site

**Compared:** the live page (1400×900, local dev server), the element inspector for all seven elements and the focus overlay, against Figure 2 on the drawing sheet, rendered at its native 300 dpi. The page-2 table was re-read against the file: every radius, thickness, air space, nD and ν match, and a3 = 12.034 = 10.35 + 1.684.

**Scale, measured afresh:** the r1 and r11 vertex edges on the axis are 740 px apart for 90.47 mm, 8.18 px/mm at 300 dpi (the earlier 16.34 px/mm at 600 dpi). The r2, r5 and r8 vertices land within 1 px of the prescription at that scale. The axis from the midpoints of the three doublets' flat top and bottom edges agrees within 0.5 px.

**Readings (line centres, mm; stored value in brackets):**

- L1 tips 39.3 (39.5).
- C1 flat edge 36.6 (38). Rear cap end at a 45° bevel, 35.0 (34.9). L2's drawn edge, about 2.1 mm thick at the top, puts the edge near 37.0.
- C2 flat edge 29.4 (29.5). The r6 cap ends at the front chamfer at 27.5 (27.5).
- r8 cap corner: 24.2 read directly, 24.6 from its drawn sag of 10.5 mm (24.4).
- C3 flat edge 24.5 (24.6).

Every stored rim is inside the reading noise, so no `sd` changes.

**Changes:**

| Field | Before | After | Evidence |
|---|---|---|---|
| Surface 5 `rimExtensionSd` | none | 38 | The figure draws C1 square-cut: one flat edge across L2 and L3, with a small bevel at r5. The page drew L3's top as a 3.1 mm slope along its whole 14 mm edge, from the 38 cement rim down to the 34.9 cap. The land squares it as drawn, as surface 8's flange already does for C2. It traces nothing (`rimcost` curves identical with and without it). `audit:surface` OK. |
| Element `focalLengthMm` | missing; every inspector read "FL = —" | L1 207.8, L2 69.7, L3 −130.7, L4 98.8, L5 −31.9, L6 −971.6, L7 51.1 | Thick-lens focal length of each element in air at its printed nD. These are the values the analysis already quotes. |
| Header semi-diameter note | said the 36.3 ray floor was above "the 36.6 flat edge" | 38 is 3.7 % above the drawn 36.6 edge; the ray needs 36.3 | 36.3 is below 36.6, so the old sentence was wrong. Added the surface 5 land. |

**Analysis:** the C1 clear-aperture bullets now give the drawn 36.6 mm edge and the new flange. The 35.2 mm "front cap" figure was dropped: on this reading r3's drawn curve follows its radius to the corner within about 0.4 mm.

**Stop move (re-checked; the gap is outside this review's edits):** the move stands.

- The drawing ends L5's cap 10.5 mm behind r8, and a3 is drawn 8 % thin.
- At the old 8.4 mm, any rim above 22.35 mm would cross the iris plane. That is why the earlier rim was cut to 22.3.
- 10.35 mm is the least position that keeps the drawn 24.4 cap.
- The chief ray now clears L1 to 17.86° (`clearap2` at 17.85°: 39.47 mm against the 39.5 rim). The engine's 18.56° default is an estimate slightly beyond that, as 19.64° was beyond 18.5° before.

**Lands and cuts:** `rimcost --loo` against `base1128sd`, 0–12.2°: worst loss 0.0 points.

- Restoring C1, C2 (the surface 8 cut and its land) or C3 wins back 0.0.
- `--noext 8` and `--ext 5=38` leave the curves unchanged. The figure draws both flanges, so both lands stay.
- Against the true baseline (old stop, package rims), the engine curve reads: 4.1° 96.1 → 96.0, 6.1° 90.9 → 90.4, 8.1° 82.9 → 84.0, 10.2° 73.8 → 76.5, 12.2° 63.1 → 68.6.

**Labels, tags, inspector:**

- Types agree with the radius signs.
- Roles are true: L7 is the strongest positive element, f 51.1 against L2's 69.7.
- The patent names no elements and no groups, so L1–L7 and the empty `groups` stand.
- C1, C2 and C3 bracket surfaces 3–5, 6–8 and 9–11, the three printed cemented pairs. Each inspector reads "DOUBLET Cn"; none reads "TRIPLET".
- No aspheres and no `apd` tags; the patent names no glass and prints no partial dispersion.
- The STO sits in a3 between C2 and C3. Brackets and the STO label do not collide.

**Movement:** none. There is no variable gap and no zoom block. The focus slider reads "Not modeled", and the movement overlay reports no modeled focus or zoom movement. `focus.description` claims nothing the patent does not say.

**Glass and colour:**

- **L5 and L6:** exact at the D line. S-TIL26 is nD 1.56721, νD 42.81 (ΔnD −0.00009, Δν +0.01). S-TIL2 is 1.54062 / 47.22 (−0.00008, +0.02). Hoya E-FL6 and E-FEL2 tie, and no Schott row in the catalogue matches.
- **Sumita rows not in the catalogue:** `sumita-2025-11-07-all.agf` has two exact rows under the period Schott names, both marked obsolete. LF6 is nD 1.56721, νD 42.80 (−0.00009, 0.00). LLF2 is 1.54062 / 47.22 (−0.00008, +0.02).
- **Unmatched pairs:** no catalogue row lies within 1e-4 at D for 1.6240/58.2 (L1, L2, L7), 1.6219/36.1 (L3) or 1.6242/44.8 (L4).
- **What the patent gives:** only nD and ν, with no glass names and no other line. None of Figure 2's pairs recurs in Figure 1.
- **Colour:** no aberration curves are printed, so there is nothing to compare colour against. Every element carries ν, so none is nD-only.

**Assignee:** "Ernst Leitz GmbH" is the corpus form for the printed "Ernst Leitz, Optische Werke, G.m.b.H."; unchanged.

**Open:**

- The engine's default half-field (18.56°) is slightly beyond the 17.86° at which L1's drawn rim first blocks the chief ray. The patent states no field.
- The figure bevels the L5 and r5 flanges; a land draws them square.
