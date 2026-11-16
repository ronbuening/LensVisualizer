# Scoped audit
Status: final independent scoped review PASS, qualified representative handoff. Private preservation, batch count and delivery remain with the parent.

Reproduce with prepare.py, native.mjs, validate.mjs, states.mjs, endpoint.mjs, diagnostics.mjs, parity.py, export.py and validate-export.mjs against recovered LensVisualizer 4caca439. Node loader: --import ./lens_recovery_20261112/LensVisualizer/scripts/ts-js-specifier-hook-register.mjs. FOCUS=1 selects literal near; diagnostics explicitly uses 4000mm object before first surface.

Canonical geometry errors[], actual export identicalOptics=true and hidden. (Closed 2026-11-15: the lens is now visible.) Author parity194 and independent parity218 pass. Independent reruns of all4872 rays match full JSON; exact axial endpoints pass both states. Independent entire-line sphere proof classifies all302 noBracket rays as authored surface-1 cap misses. Scripts, roots and results are in sibling Laowa200_PilotIndependent_20261113.

Edge sampled blocking remains61.57635468% infinity and53.94088670% near, not measured illumination. Inferred caps/default90% sag retained, no override. Initial failed caps remain in INITIAL_GEOMETRY.json. Literal2mm filter, image plane, both focus stations and all source optical values unchanged. Source fullPDF unavailable; verified original page images and maker connected diagram preserved separately. Full-app regression/current-main/browser QA deferred to integration. (Closed 2026-11-15: the file is on the deployment branch; see the dated sections below.)

Metadata correction only: closeFocusM now equals native computed4.199386517866485m, distinct from literal4.2000176m source object-to-image. Cover李大勇 rendered Dayong Li as explicitly qualified transliteration, not official English spelling. Final independent metadata/export rerun passed.

## 2026-11-15 — Deployment validation

An independent re-read of the patent page images (CN 120949408 A, 18 pages, no text layer) checked the data file against Example 2.

**Checked.** All 23 surfaces (radius, thickness, d-line index, Abbe number), the stop position, both variable gaps at both printed states, the image-side gap, the front-page bibliographic data, Figure 3 (element count, cemented pairs, element shapes, stop position) and Figure 4. No mismatch was found. The patent has no aspherical surfaces and the file has none. The patent states the indices are for the d line, and three glasses match catalogue values at helium d exactly (1.4586/90.19, 1.497/81.61, 1.5168/64.2), so `indexReference: "d"` stands.

**Verdict.** Valid. Example 2 is the only example of the patent that matches Laowa's published construction of 11 elements in 9 groups: an ultra-high-refraction first lens (nd 1.92286), an anomalous-dispersion second lens (1.4586/90.19), an ED lens cemented to the fourth lens, and a thin negative ED singlet ahead of the rear cemented pair. Example 1 has 10 elements in 8 groups and Example 3 has 11 in 8 without the ED singlet. Maker diagram: https://www.venuslens.net/wp-content/uploads/2025/10/%E9%95%9C%E7%89%87%E7%BB%93%E6%9E%84-scaled.png. One visible difference: the maker draws the ED singlet's curved face toward the object, while Example 2 has it toward the image (R17 = 644.0417, R18 = 103.3711).

**Changes made.**

- Header comment: replaced the one-line note with a plain statement of source, example, scale and which values are inferred.
- Element 12 `type`: `"Lens"` → `"Plane-Parallel Plate"`. The patent's 2 mm plate sits 3 mm behind the last lens and 45.2069 mm ahead of the image, which is the lens's own rear-filter position, not a camera cover glass, so it stays a drawn element.
- `catalog.closeFocusM.marketing`: added, 1.5 (maker's minimum focus distance). The patent's near state is a 4000 mm object in front of the first surface (4.20 m object to image); the model does not extrapolate to 1.5 m.
- `source.errata`: five entries → one. The remaining entry records the only contradiction inside the patent: the Example 2 table prints an Abbe number of 62.96 for the focusing lens, and the conditional-expression summary lists 62.900. The file keeps the table value. The four removed entries were not source errors; their content is under Open below.

No prescription value, gap, semi-diameter or focus state was changed.

**First-order values after the changes (patent in brackets).** EFL 194.5237 mm (194.5254); f/2.06 (2.06); half-field 6.303° (6.303°); image-side gap 45.2069 mm as printed, paraxial back focus 45.2054 mm; total length 200.0176 mm; stop radius 18.4554 mm. Near state: focus at 4000.01 mm in front of the first surface with the printed gaps (patent: 4000 mm). Conditional values reproduced: FL/F3 2.647, FL/D1-2 5.517, FL/D3-4 6.379.

**Audit results.** `audit:surface`: no validation errors. `audit:aperture`: within 3 % of the stated f-number, no rim limit. `audit:image-circle`: not undersized. `audit:field-coverage`: 100 %, 21.60 mm of 21.65 mm, corner clear (both coverage audits run on a copy with `visible: true`). Real-ray clearance at 21.6 mm image height: the axial beam and the chief ray clear every surface; the corner beam is cut by up to 66 % on one side at the rear group (semi-diameter 16 mm) and by 26–45 % at the front group. Figure 3 scales to about 16.5 mm for the rear group, 28 mm for the fifth lens and 49 mm for the front lens, against 16, 29 and 51 mm in the file, so this vignetting belongs to the design as drawn and the rims were left alone.

Analysis rewritten to the house section skeleton.

**Open.**

- Open: the inventor name 李大勇 is romanised as Dayong Li, the form the other Laowa files use; the patent prints no official English spelling.
- Open: the maker asks for rear filters under 1.5 mm thick (Sony E and Nikon Z versions only) and the patent's plate is 2 mm; the file keeps the patent's plate and makes no claim about the factory filter.
- Open: all semi-diameters are inferred, not printed; a later pass may compare them with Figure 3 in detail. (Closed 2026-11-15 by the semi-diameter pass below.)
- Open: element 12 name and label ("Source filter"), the `specs` chips, the element glass labels, `focus.description` and the wording of the analysis and of the earlier lines of this audit still need the cleanup pass.
- Open: full application and browser checks have not been run on this file.

## 2026-11-15 — Cleanup and wording pass

Public text and metadata only; no radius, thickness, index, Abbe number, gap, semi-diameter, stop or focus state was changed.

**Fields changed.**

- Header comment: added the glass-label and maker-figure statements.
- `subtitle`: added, "CN 120949408 A, Example 2 — construction-based product association".
- `catalog.specs`: "11 GLASS / 9 GROUPS PLUS SOURCE FILTER", "BOTH LITERAL FOCUS ENDPOINTS", "INFERRED CLEAR APERTURES" → "11 ELEMENTS / 9 GROUPS", "2 ED / 1 ANOMALOUS-DISPERSION / 1 UHR ELEMENT", "ALL SPHERICAL", "F/2–22", "MIN. FOCUS 1.5 m". The special-glass counts are read from Laowa's construction diagram.
- Elements 1–11: `label` "L1"… → "Element 1"…; `type` "Lens" → shape names from the signs of R; `focalLengthMm` and `role` added. Element 12: name and label "Source filter" → "Rear filter", with a role.
- `cemented`: C1 on L3 and L4, C2 on L10 and L11; `doublets` C1 (surfaces 5–7) and C2 (19–21) added.
- `groups`: G1 (+) 1–7, G2 (+) 8–13, G3 (FOCUS) 15–16, G4 (+) 17–21, as the patent names them.
- `aperture`: `fStops` [2.06] → [2.06, 2.8, 4, 5.6, 8, 11, 16, 22], `maxFNumber` 22 and `blades` 9 added (Laowa: f/2–22, 9 blades).
- `focus.description`: rewritten in plain words. Both printed states and `closeFocusM` are unchanged.
- `apd: "inferred"` with a note on L2 (Laowa's anomalous-dispersion position, 1.45860 / 90.19) and on L3 and L9 (Laowa's extra-low-dispersion positions, 1.49700 / 81.61). L1 (ultra-high-refraction) is not tagged.

**Glass labels** (all were "Published nd/Vd, unassigned catalogue glass; approximate dispersion").

| Element | New label | Δnd | Δνd |
|---|---|---:|---:|
| L1 | E-FDS1 (HOYA, coordinate equivalent) | −4.0e-7 | 0.00 |
| L2 | FCD10A (HOYA, coordinate equivalent) | −2.8e-6 | 0.00 |
| L3, L9 | FCD1 (HOYA, coordinate equivalent) | −1.6e-7 | 0.00 |
| L7 | TAC8 (HOYA, coordinate equivalent) | 6.0e-8 | 0.00 |
| Rear filter | BSC7 (HOYA, coordinate equivalent) | −1.8e-6 | 0.00 |
| L4, L5, L6, L8, L10, L11 | Unmatched, with the printed nd and νd | — | — |

N-SF66 (Schott), H-FK61 (CDGM) and H-K9L (CDGM) equal E-FDS1, FCD1 and BSC7 at the printed precision. The Hoya rows were chosen because all five matched pairs exist in that one catalogue and the sibling Laowa 180mm files use the same labels, including BSC7 for the same 1.51680 / 64.20 plate. The nearest catalogue rows to the six unmatched pairs differ by more than 0.002 in nd or 1.5 in νd.

**Engine numbers, before and after (identical).** EFL 194.5237291877607 mm; f/2.06; half-field 6.303°; stop radius 18.455422315444228 mm; paraxial back focus 45.2054 mm; near state focused at 4000.01 mm in front of the first surface. `audit:surface`: no validation errors. `audit:aperture`: within 3 % of the stated f-number, no rim limit. `audit:field-coverage`: full coverage (99 % or better).

**Analysis.** Title changed to the display name; glass identifications brought into line with the labels above; the "Verification Summary" heading renamed "Model Scope and Limitations"; wording about how the file was checked removed.

**Open.**

- Closed: the lens now carries the maker's own product name, "Laowa 200mm f/2 AF FF" (file, key and name renamed).
- Open: rims are inferred. Against Figure 3 the rear group reads about 16.5 mm (model 16), L5 about 28 mm (29), the front lens about 49 mm (51) and the rear filter about 16.5 mm (22). The corner beam is cut by up to 66 % on one side at the rear group; no rim was changed. (Closed 2026-11-15 by the semi-diameter pass below.)
- Open: the near state has no `focus.conjugates` entry. The patent's object distance is 4000 mm and the model focuses at 4000.01 mm from the first surface, so a first-surface conjugate could be recorded in a later pass.
- Open: the model stops at the patent's 4 m state; the marketed 1.5 m minimum focus is not modeled.
- Open: Laowa asks for rear filters under 1.5 mm thick (Sony E and Nikon Z versions); the patent's plate is 2 mm and is kept.
- Open: six glasses are unmatched and trace from nd and νd alone.

## 2026-11-15 — Semi-diameter pass against the patent figure

**Source.** CN 120949408 A, PDF page 15, Figure 3 (Example 2, infinity), measured at 300 dpi with the axis at row 640.

**Scale.** First vertex at column 677 and image plane at column 2044: 1367 px for 200.0176 mm, 6.834 px/mm (0.1463 mm/px). Seventeen further vertex crossings fall within 1 px of the positions the table predicts, so the drawing is to scale along the axis. Across the axis the scale was checked on the front lens: the R1 = 168.8618 mm arc reaches its rim 49 px behind the vertex, which is the sag at the 48.9 mm rim height read directly.

**Readings and changes** (semi-diameters in mm; one pixel is 0.15 mm).

| Surfaces | Before | Figure | After | Evidence |
|---|---:|---:|---:|---|
| 1, 2 (L1) | 51 | 48.9 | 51 | 4 % apart, kept |
| 3, 4 (L2) | 47 | 45.9 | 47 | 2 % apart, kept |
| 5, 6 (L3, L4 block) | 40 | 38.9 | 40 | 3 % apart, kept |
| 7 (L4 rear) | 40 | cap ends 31.6, flat land to the block edge | 40 | The figure draws a land (the face labeled Ra), but modelling it cost 2.5 points at 2.1° and gained nothing, so it is not modeled |
| 8, 9 (L5) | 29 | 28.2 | 29 | 3 % apart, kept |
| 10 (L6 front) | 27 | 25.8 | 27 | 5 % apart, kept |
| 11 (L6 rear) | 27 | cap ends 22.2, land to 25.8 | 22.2, `rimExtensionSd` 27 | Land drawn; axial ray height 22.13 |
| 12, 13 (L7) | 24 | 22.2 | 24 | 8 % apart, kept |
| 15 (L8 front) | 22 | 19.3 | 19.3 | 12 % over the figure |
| 16 (L8 rear) | 22 | cap ends 17.4, land to 19.3 | 17.4, `rimExtensionSd` 19.3 | Land drawn; axial ray height 17.05 |
| 17–21 (G4) | 16 | 15.5–15.8 | 16 | 2 % apart, kept |
| 22, 23 (rear filter) | 22 | 16.4 | 16.4 | 34 % over the figure |

The two modeled lands keep their element's outer height equal to the neighbouring face, so the block outlines stay square as drawn. The stop is not an authored radius and was not touched; no stop change is recommended.

**Clearance.** The axial beam at f/2.06 clears every surface at both printed focus states (smallest margins 0.07 mm at surface 11 and 0.35 mm at surface 16), and the chief ray to 21.6 mm clears every surface. The surface validator reports no errors; the aperture audit reports no rim limit; image-circle and field-coverage results are unchanged (21.60 of 21.65 mm, corner clear). Engine values are unchanged: EFL 194.5237 mm, f/2.06, half-field 6.303°, stop radius 18.4554 mm.

**Corner illumination** (geometric, full aperture, infinity): unchanged from the starting rims at every field, 0° 100.0; 1.1° 100.0; 2.1° 98.0; 3.2° 86.6; 4.2° 71.8; 5.3° 55.7; 6.3° 38.4. The focusing-lens and filter rims and the lands on surfaces 11 and 16 cost nothing. A trial land on surface 7 at the figure's 31.6 mm lowered the curve by up to 2.5 points (98.0 → 95.4 at 2.1°) with no gain anywhere, so surface 7 was restored to 40 mm with no land.

**Metadata and name.** Mounts (Sony E, Nikon Z, Canon EF), full-frame format, 9 blades, f/2–22, 1.5 m minimum focus, 200 mm and f/2 marketing values were checked against Laowa's product page (https://www.venuslens.net/product/laowa-200mm-f-2-af-ff/) and needed no change. The maker's product name is "Laowa 200mm f/2 AF FF", which the file's `name` now matches.

**Open.**

- Open: surface 11's land leaves 0.07 mm outside the axial ray, less than one figure pixel; the reading is good to about 0.15 mm.
- Open: the figure's land on the rear face of L4 is not drawn in the model, so that element's rear rim reaches about 5.5 mm further back than in Figure 3. (Closed 2026-11-15 by the second review below: the land is modeled with the cap ending at 33 mm.)
- Open: the engine's tracing half-field fell from 8.13° to 7.89°; it stays well beyond the 6.303° design field.

## 2026-11-15 — Second review on the local site

**Compared.** The live page (infinity, the near state and three intermediate focus positions, and the element inspector for L2, L3, L4, L8, L9 and the rear filter) against CN 120949408 A Figure 3 (PDF page 15), the Example 2 table (pages 9–10), Figure 4 (page 16) and Laowa's construction diagram.

**Change: land on the rear face of L4 (surface 7).** On the page L4 flared 13.8 mm back from its vertex at the rim, while Figure 3 and Laowa's diagram both draw a square block with a flat land outside the concave face. The earlier trial tested only the figure's cap height of 31.6 mm, which sits 0.1 mm outside the 31.50 mm axial ray and costs light off axis. Intermediate cap heights were measured against the starting rims:

| Cap ends at (mm), land to 40 | Worst loss (points) | Field |
|---:|---:|---|
| 31.6 (figure reading) | 2.5 | 2.1° |
| 32.0 | 1.5 | 2.1° |
| 32.3 | 0.6 | 2.1° |
| 32.6 | 0.2 | 2.1° |
| 33.0 | 0.0 | — |

Surface 7 is now `sd` 33 with `rimExtensionSd` 40 (before: `sd` 40, no land). The cap is 4 % above the figure reading and costs no light at any field; the block edge stays at 40 mm, level with surfaces 5 and 6. The rim now sits 9.1 mm behind the vertex instead of 13.8 mm.

**Lands and cuts.** Against the starting rims the lens loses 0.0 points at every field (100.0, 100.0, 98.0, 86.6, 71.8, 55.7, 38.4 % at 0° to 6.3°). Restoring any one of the lands on surfaces 7, 11 and 16, the focusing-lens rim or the filter rim wins back 0.0 points, so all stay as the figure draws them.

**Focus slider.** The `step: 1` entry in `focus` made the slider jump between the two printed states; it was removed, and the slider now moves continuously. Shots at 0.25, 0.5 and 0.75 of the travel show L8 moving steadily toward the image (at the midpoint D14 3.98 mm, D16 28.22 mm, 8.40 m). The patent table gives D(14) 1.7000 → 6.2603 and D(16) 30.4956 → 25.9353 for infinity → 4000 mm, a sum of 32.1956 mm in both states; the file lists both gaps in that order, and Figure 3's "Focus" arrow under G3 points to the image. `focus.description` now opens in plain wording.

**Checked and found correct.** All 23 table rows against the file. Element shapes against the signs of R; stored focal lengths against thick-lens values (all equal to two decimals). Group brackets G1 to G4 use the patent's group names and ranges; the figure's sub-brackets G1a, G1b, G2a, G2b and G2c are named in the element roles and not drawn as a second bracket row. C1 (surfaces 5–7) and C2 (19–21) bracket the two cemented pairs. The stop is drawn between L7 and L8. No aspherical surface in the patent or the file. The `apd: "inferred"` tags on L2, L3 and L9 match the coloured elements of Laowa's diagram (second: anomalous dispersion; third and ninth: extra-low dispersion). The rear filter draws as a plate 16.4 mm high, just above the 16 mm rear group, as in the figure. `source.assignees` and the inventor's romanisation match the other Laowa files.

**Glass.** The five labeled glasses equal catalogue rows at the printed precision, and each of those pairs recurs in Example 1 or Example 3. The six unmatched pairs (1.89663 / 22.56, 1.87022 / 21.86, 1.78225 / 24.07, 1.61467 / 62.96, 1.77236 / 33.40, 1.64378 / 30.70) appear in Example 2 only; Examples 1 and 3 print different one-off pairs in the same positions, so these are optimised values and not catalogue glasses. No catalogue row lies within 0.002 in nd and 1.5 in νd of any of them. The patent prints no glass names, no other line indices and no partial dispersions. Figure 4 plots g, d and C on axis (g about −0.07 mm and C about +0.06 mm near the axis at infinity); with six glasses carrying no printed partial dispersion the model cannot be expected to reproduce those two curves, and it was not tuned to them.

**Engine values, before and after (identical).** EFL 194.5237 mm, f/2.06, half-field 6.303°, tracing half-field 7.89°, stop radius 18.4554 mm. The surface validator reports no errors, the aperture audit no rim limit, and image-circle and field-coverage results are unchanged.

**Open.**

- Open: the cap on surface 7 ends at 33 mm, 1.4 mm above the Figure 3 reading, because the figure's height costs 2.5 points of off-axis light.
- Open: colour away from the d line rests on Abbe-number models for six of the eleven glasses.
