# Sigma C017 100–400 DSLR — audit

## Disposition

Closed 2026-10-31: validated and cleared for release (Deployment validation section). Related patent JP 2017-223778 A Example 1, exact factory identity unproved. No source correction, shared engine change or hidden best-focus refit.

## Literal source and independent review

Original 37 rows include flat stop 25; 21 glass / 15 components. All radii, thicknesses, d-line indices/Abbe values and five native gaps including BF are literal. Independent source review has 229 normalized comparisons and Decimal50 reproduction; grant same-example table equals application and clearer grant Fig. 1 is supplemental aperture-inference evidence. Independent source manifest is `independent_source_review/FROZEN_REVIEW_MANIFEST_v001.json` SHA 53fe61650edead1042b5511b4fc34ab0698f882c24d696cf1ed78cc7f32fe824.

## Deliberate inferences

Authoring state; the Deployment validation section supersedes the station count and the glass entry, and the semi-diameter pass supersedes the rims.

- Grant Fig. 1 approximate rim measurements, 7.428136 px/mm six-vertex fit. No factory aperture claim. Original initial rounded model and failed default 90 % diagnostics retained.
- Geometry-bound L7/L12 inferred radii 11.8/12.1 mm only; all required default geometry checks retained, no override.
- 129-control G4-compensated zoom, preserving source d5/d15/BF and fixed-G2 coordinate; calculated intermediate EFL labels, three published native rows only.
- 19 finite controls to maker 1.6 m using source-supported direction/group but inferred travel, not published conjugates. Max sampled distance error 1.863 %, plane residual 0.015519 mm; raw sub-.004 focus not certified.
- Factory glasses unassigned. Existing coordinate-compatible catalog alternatives recorded but no uncertain partial dispersion injected. Reference MTF only; CDF/photopic guard retained.
- OS centered, no decenter model.

## Rejected / superseded evidence

Raw three-row zoom adds ~11.092 mm defocus; 3/9/17/33/65/129 studies retained. Forced-EFL/two-group cam trial and its large/virtual finite-label errors remain diagnostic only. The smaller-assumption one-group cam is selected. The 35-focus-key candidate remains immutable; 19 keys chosen after tiny valid-ray sensitivity and unchanged far-label error. Failed marginal-aim image numbers in the focus-density diagnostic are INVALID and excluded in its adjudication.

`geometry_and_finite_guards.json` v001 used an empty-field `.every` assertion and is superseded. The corrected v002 records actual top-level support, checking all 264 finite reasons explicitly. It does not imply optical finite MTF. Source/full-format pupil failures remain raw; noBracket requests are not counted as launched/clipped/pass. Fullscope source-only and prior failed receipts are retained.

## Additive reproducibility and title corrections (v003)

The original focus sensitivity script incorrectly left its count-35 branch reading the later live 19-key candidate; the original 65-control MTF branch installed 35-column gaps without setting 35 focus keys. Those scripts and historical outputs remain immutable. Versioned `reconstruct_density_inputs_v003.mjs`, `audit_focus_density_rays_v003.mjs` and `audit_mtf_sensitivity_v003.mjs` bind immutable prior-35 SHA 88fc025cd0cf9c6b031412dc9629bd5c5cea7347e7dfc10d906d6ca5fc30dd6b, selected-19 SHA d03aacf905cadeaa80d947a63cb6640b76af725bf5bbe6c142f81ae4c1399afe, and the frozen study. They reconstruct true variants, assert every grid dimension and save exact derived hashes.

Corrected 20-request finite replay has 18 valid image intercepts exactly equal to the historical valid-only values. The two other marginal requests are unlaunched; their earlier trial-path clipped status/image projection was not meaningful and is explicitly reported as a classification correction. Full comparison retains all optical/status differences, with no excluded failed rows. Four compared infinity MTF cases (16 fields) match complete historical results, not only curves. Final-candidate applicability is established through infinity-state equivalence; these new receipts do not retroactively prove the old scripts' missing input provenance.

The original title was incorrectly shortened to Zoom Lens. The analysis now gives the actual p. 1 (54) Japanese title 防振機能を備えた変倍結像光学系 with a labeled translation. Selected model JSON and formatted data module remain byte-identical. Prior writer/analysis/audit versions are reconstructable through `validation/corrections_v003/changed_original_recovery_map.json` and the original v002 manifest.

## Final binding and mandatory unrun gates (closed 2026-10-31)

`final_changed_data_rebind.json` proves final 19-key candidate and prior 35-key diagnostic have identical 297 sampled physical states, including every sampled pupil state and all infinity geometry, and binds raw result hashes. Final candidate is rebuilt independently at each variant; no mutated cached geometry. This is not proof over every arbitrary interpolation control.

No full-project typecheck, format check, lint, main corpus, tooling or build run is claimed for this target; no actual viewer run. The earlier user provisional waiver for 145/408/262 does not apply. Runtime 77ad7af3543833602509a6ab164fbf6870e12ad2 stays pinned and unmodified. Local formatting of these three files is not a full-project format gate. Final independent authoring/model review is owed. Closed 2026-10-31: the independent review is done (Deployment validation section), the page was viewed, and the project-wide checks belong to integration.

## Source-only reproduction

Use `repro/rebuild_source_only.sh` in an isolated copy with the pinned Python/NumPy and Node 24.22.1/installed Prettier. It reconstructs literal transcription, graphic-rim and geometry adjustment, cam/focus study, candidate and three overlay files. It does not invoke whole-project tasks or install dependencies. Validation evidence is supplied to reproduce the explanatory prose, never to substitute an optical model for source rows. All source originals and raw alternatives are retained; source-coverage receipt and final manifest bind bytes.

## 2026-10-31 — Deployment validation and fix pass

Source re-read: 37 rows (185 field checks across label, R, d, nd and νd) and 15 printed gaps against the application text and the page images of pp. 13–14, with no mismatches. The grant's numeric tables equal the application's for all five examples (289 lines, no differences). The patent prints three infinity zoom columns and no finite-focus column, no asphere and no rear plate.

First-order, patent vs model: EFL 103.16 / 200.12 / 387.95 vs 103.1655 / 200.1186 / 387.9493 mm; half-field 11.68 / 6.005 / 3.105° vs 11.68 / 6.01 / 3.10°; total length 221.6588 / 259.3522 / 281.5591 mm exact; BF printed exactly, with paraxial BFD differing by 0.0009 / 0.0006 / 0.0031 mm. Group focal lengths reproduce, including G2a and G2b. Conditions compute to 0.640, 0.724, 2.554, 0.808 and -0.0067 against printed 0.64, 0.72, 2.55, 0.81 and -0.007. Maximum on-axis LSA at any station is 0.225 mm, so the table holds no misprint. The stop rule is unchanged: EPD 20.03 / 33.80 / 59.68 mm, stop radius 10.53 / 10.50 / 10.51 mm.

Maker diagram: Sigma's construction drawing, measured at 32 surface positions and fitted by scale and offset, matches Example 1 at the wide position to 0.135 mm RMS at 5.77 px/mm. Example 2 fits to 0.566 mm, Example 5 to 0.739 mm and Example 3 to 1.196 mm, and Example 4 has 20 elements. The drawing's SLD positions are L2, L3, L18 and L20. At 1.6 m the tele magnification is 1:3.81 for Example 1 and 1:3.78 to 1:3.84 across the examples, so it does not separate them. The DG DN sibling (JP 2021-92636 A, 22 elements, key `sigma-100-400-f5-63-dg-dn-os-c`) does not collide with this key, which is unchanged.

Rims changed: S1–S3 34 to 32.5 mm, S4–S5 33 to 31 mm, S33–S34 12 to 14 mm, from the drawing's 32.2, 30.8 and 14.2 mm at the fitted scale. Axial marginal height reaches 29.84 mm at S1, clear at every printed station, and clearap reports no axial clip or blocked chief ray at infinity. Corner transmission wide open at infinity goes from 56.2 / 70.5 / 62.7 % to 56.2 / 64.3 / 57.5 % at wide / middle / tele; the front rims account for the whole change and L19 for none of it. The render now matches the drawing's proportions, with L19 level with the L20/L21 doublet.

Zoom grid: thinned from 129 to 65 stations by keeping every second station, which leaves the three printed stations (now 0, 32 and 64) byte-identical; 19 focus keys are unchanged. protcmp reports only the seven rim changes. turns reports the printed d25 turn at the middle station and adds the printed G2 wiggle of 0.0006 mm at the same station, which the tool's 1e-5 rounding hid on the finer grid; neither is new. Maximum interpolated defocus over all focus keys is 0.0217 mm (44 % of ±2λN² = ±0.0495 mm, near the tele end at t = 0.004); at infinity it is 0.0187 mm. Thinning to 33 stations would reach 0.0847 mm and pass the depth of focus. The file falls from 265.6 KB to 140.0 KB, with the added roles included. Every focus node stays paraxially on its nominal object distance.

Glass: `Unmatched` count 21 to 0. All 13 printed pairs equal catalog rows (|Δνd| ≤ 0.01), with 11 HOYA and 2 OHARA labels, and recur across examples or sit beside other catalog values at the same position. No position stays proxy, and spectral MTF at infinity no longer reports missing data. The four SLD positions carry `apd: "inferred"`. No `dPgF` is stored; the catalog rows supply dispersion.

Text: `name` gains the corpus pipe; header, `subtitle`, `specs`, `focus.description`, element labels and roles, and analysis prose were rewritten in plain terms; cemented brackets D1–D20 became C1–C6 to avoid the gap labels. `audit:surface` prints OK, and `audit:aperture` finds all 65 stations within 3 % of the stated f-number.

Open: `catalog.acceptsTeleconverters` stays unset because the repository has no Sigma TC-1401 or TC-2001 entity.

## 2026-10-31 — Semi-diameter pass against the patent figure

The owner asked for the rendered section to match the patent drawing, so the figure of Example 1 now governs the rims and Sigma's drawing is the second check. This section supersedes every earlier rim statement in this file.

**Source and scale.** Grant JP 6690425 B2 p. 25, Fig. 1, native raster 2229 × 1424 px, read pixel by pixel. The application's copies (p. 25 at 840 × 532 px and the front-page drawing at 815 × 520 px) have lost almost all their glass lines, so the grant is the only usable print. It draws one panel, wide position at infinity. There is no middle or tele panel; the lower arrows are group-motion traces. A fit over 37 axial crossings (every surface except the stop, plus the image plane) gives 8.2175 px/mm with 0.36 px (0.044 mm) RMS. The spans S1–image, S1–S37 and S16–image give 8.220, 8.224 and 8.214 px/mm.

**Anamorphism: none found.** Fits of the printed radii to the drawn arcs give a vertical scale of 8.05 to 8.28 px/mm over S2, S4, S6, S14, S16, S28, S29 and S36; the two longest arcs, S2 and S4, average 8.215. The stop tick's inner end, 87 px from the axis against the stop radius of 10.53 mm, gives 8.26. The figure is therefore isotropic within 1 %, and 8.2175 px/mm is used both ways. Two checks need no vertical scale at all. Element edge widths: L2's tip is 2 to 3 px wide, and the prescription gives 2.6 px at 33.6 mm and 6.9 px at 32.5 mm; L3's flat is 5 px wide, against 5.0 px at 32.9 mm and 11.6 px at 31 mm. Land walls: all seven sit within about 1 px of the prescription's sag at the drawn cap end.

**Front group and L19: the figure agrees with the authoring values, not the values set from Sigma's drawing.** L1/L2 read 33.65 mm against 34 and 32.5 mm, L3 32.86 mm against 33 and 31 mm, and L19 11.80 mm against 12 and 14 mm. L3 and L19 are set to the figure. L1/L2 are set to 33.4 mm, 0.25 mm under the reading, so that the front element stays inside the 67 mm filter thread; the reading would stand 0.15 mm past its radius.

| Surfaces | Element | Before | Figure | Final | Evidence or reason |
| -------- | ------- | ------ | ------ | ----- | ------------------ |
| S1–S3 | L1/L2 | 32.5 | 33.65 | 33.4 | Rim rows 459 and 1012, half 276.5 px; L2 tip width. Held inside the filter thread |
| S4–S5 | L3 | 31.0 | 32.86 | 32.9 | Rim rows 465 and 1005, half 270 px; edge width |
| S6–S7 | L4 | 21.0 | 20.93 | 21.0 | Agrees |
| S8–S9 | L5/L6 | 14.5 | 14.24 | 14.5 | Within noise; S8 carries the beam edge |
| S10 | L6 | 14.5 | 14.24 | 12.7, extension 14.5 | Same edge; the cap ends on a drawn land |
| S11–S12 | L7 | 11.8 | 12.47 | 12.5 | L7 and L8/L9 are level in the figure, 1.2 mm apart before; S12 takes a land |
| S13–S15 | L8/L9 | 13.0 | 12.66 | 12.7 | Same step; S13 takes a land |
| S16–S17 | L10 | 13.5 | 13.51 | 13.5 | Agrees |
| S18–S19 | L11 | 13.5 | 13.26 | 13.3 | Step order: the figure descends L10 to L13/L14 in 0.25 mm steps |
| S20 | L12 | 12.1 | 13.02 | 12.1, extension 13.0 | Step order: its edge was below L13/L14, the figure has it above. The cap ends on a drawn land |
| S21 | L12 | 12.1 | 13.02 | 13.0 | Same edge |
| S22–S24 | L13/L14 | 13.0 | 12.78 | 12.8 | Same staircase; S24 takes a land |
| S26–S27 | L15 | 12.5 | 12.17 | 12.5 | Within noise; S27 carries the beam edge at 12.50 mm |
| S28–S30 | L16/L17 | 12.5 | 12.29 | 12.5 | Within noise; S28 carries the beam edge |
| S31–S32 | L18 | 12.5 | 12.35 | 12.5 | Within noise; S31 carries the beam edge |
| S33 | L19 | 14.0 | 11.80 | 11.8 | Rim rows 638 and 832, half 97 px |
| S34 | L19 | 14.0 | 11.80 | 11.4, extension 11.8 | Same edge; the cap ends on a drawn land |
| S35–S37 | L20/L21 | 14.0 | 13.99 | 14.0 | Agrees; S35 takes a land |

The figure's rims stand about 2 to 3 % under the file at L15–L18, and those values stay: lowering them would trim the beam for a difference inside the noise band with no step-order fault.

**Lands.** The figure ends seven concave faces short of the element edge on a stroke square to the axis. Each is measured at 8.2175 native px per lens mm, with the q range from one pixel at cap end and edge. Four are cuts, which change no ray, and three are extensions, whose caps are real clear apertures.

| Surface | Cap px | Edge px | q | Figure cap (q × sd) | Beam reach | Cut depth | Cut radius | Land |
| ------- | ------ | ------- | - | ------------------- | ---------- | --------- | ---------- | ---- |
| S12 | 94 | 102.5 | 0.917 ± 0.019 | 11.46 | 11.66 | 0.81 | 12.23 | 0.27 |
| S13 | 95 | 104 | 0.913 ± 0.018 | 11.60 | 11.64 | 1.45 | 12.18 | 0.52 |
| S24 | 90.5 | 105 | 0.862 ± 0.018 | 11.03 | 10.76 | 2.22 | 11.03 | 1.77 |
| S35 | 94.5 | 115 | 0.822 ± 0.016 | 11.5 | 12.43 | 1.02 | 12.57 | 1.43 |

Only S24 sits at the figure's height. S35 sits further out because the wide-open beams reach past the drawn cap end. S12 and S13 were placed against a reach of 12.12 and 12.11 mm, set with L7 and L8/L9 open before S10 took its cap; S10's aperture has since lowered that reach, so they have 0.5 mm to spare and could move in to about 11.71 mm. Their walls already end within about 1 px of the drawn walls, so they stay. The beam rule passes all four, and the dense cut probe (grid 21 over 65 zoom × 19 focus states, 1.31 million rays) clips no ray and finds none inside a margin. The independent full-pupil trace puts the reach within 0.02 mm of the table.

| Surface | Cap px | Edge px | q | Drawn cap | On-axis maximum | Final `sd` | `rimExtensionSd` | Land depth |
| ------- | ------ | ------- | - | --------- | --------------- | ---------- | ---------------- | ---------- |
| S10 | 93 | 117 | 0.795 ± 0.015 | 11.32 | 12.16 | 12.7 | 14.5 | 1.03 |
| S20 | 96 | 107 | 0.897 ± 0.018 | 11.68 | 12.03 | 12.1 | 13.0 | 0.91 |
| S34 | 85.5 | 97 | 0.881 ± 0.020 | 10.40 | 7.74 | 11.4 | 11.8 | 2.47 |

An extension's `sd` clips rays, so each cap takes the lowest value, to 0.1 mm, that clears the on-axis beam at all 65 stations and keeps every printed zoom position within 1 point of corner illumination, at infinity and at closest focus. The limit is checked against both the first rim set of this pass (S1–S3 at 33.6 mm, cuts only) and the same set at 33.4 mm. S20 is held by the on-axis beam, and its drawn cap would clip that beam. S10's drawn cap would too; S10 is held by the wide position at closest focus, where 12.6 mm gives 60.4 %, 1.2 points down, and 12.7 mm gives 60.9 %. S34 is held by the tele corner, where 11.3 mm gives 60.5 %, and at its drawn 10.40 mm it would give 48.1 / 62.5 / 53.6 % at infinity. The modeled lands sit 1.5 px (S10), 0.5 px (S20) and 2.3 px (S34) from the drawn walls.

L1's rear step at S2 (258 of 276.5 px) sits on a cemented junction, where neither a cut nor an extension can go, so it is not modeled.

**Cross-gap limit.** S12/S13 would cross at 12.44 mm uncut and S19/S20 at 12.84 mm. With their lands S12/S13 use 96 % of the gap, and `checks.gapSagFrac` 0.97 is the smallest two-decimal value that admits them; 0.96 is refused. S20's land leaves 0.12 mm of air at S19, and the figure draws these two rims 1 px apart.

**Beam floor at every printed position.** Axial marginal height at wide / middle / tele at infinity is 9.9 / 16.7 / 29.8 mm at S1, 9.9 / 16.7 / 29.7 mm at S4, 6.0 / 7.4 / 8.0 mm at S33 and 5.8 / 7.1 / 7.6 mm at S34; closest focus is lower everywhere on these surfaces. The maxima over all 65 stations are 29.84, 29.68, 8.02 and 7.74 mm, and the corner chief ray reaches 7.79 mm at S33 and 7.77 mm at S34, so L19 clears both. clearap reports no axial clip and no blocked chief ray at infinity or closest focus. The aperture census keeps all 65 stations within 3 % of the stated f-number, at F/5.15 / 5.92 / 6.50 with stop radius 10.53 mm at the wide position. `audit:surface` prints OK, the image-circle floor shows nothing undersized, and field coverage is 100 % at all 65 stations. The engine half-field is 14.46 / 7.87 / 5.02°, from 14.46 / 7.49 / 4.73°.

**Corner illumination, wide open.** The independent check is a full-pupil skew-ray trace written for this pass, which reproduces the printed half-fields to 0.002° and the engine's curve within 0.7 point.

| State | Authoring rims | Before | First set | Final (engine) | Final (full pupil) |
| ----- | -------------- | ------ | --------- | -------------- | ------------------ |
| Wide, infinity | 56.2 | 56.2 | 56.2 | 55.9 | 56.5 |
| Middle, infinity | 70.5 | 64.3 | 69.0 | 68.3 | 68.9 |
| Tele, infinity | 62.7 | 57.5 | 61.8 | 61.1 | 61.5 |
| Wide, closest | — | 61.5 | 61.6 | — | 60.9 |
| Middle, closest | — | 77.0 | 82.7 | — | 81.8 |
| Tele, closest | — | 78.3 | 84.1 | — | 83.6 |

The closest-focus "before" and "first set" values are the full-pupil trace. The front rims set the gain over the values taken from Sigma's drawing. S1–S3 at 33.4 mm instead of 33.6 mm cost 0.7 point at the middle corner and 0.6 at the tele corner. S10's cap costs 0.3 at the wide corner, S34's 0.1 at the tele corner and S20's nothing.

The caps cost more inside the corner than at it. The engine reads 91.9 and 76.9 % at 7.8° and 9.7° at the wide position, against 94.7 and 81.7 % without them; 87.7 % at 7.1° at f = 142 mm, against 93.1 %; and 96.9 % at 4.0° at the middle position, against 99.3 %. S10 and S20 cause this, and S34 adds nothing there. S10 at 13.5 mm, S20 at 12.6 mm and S34 at 11.7 mm restore those curves and give 56.2 / 68.3 / 61.2 % at the corner. S1–S3 at 34 mm and S4–S5 at 33 mm on top of that give 56.2 / 70.5 / 62.4 %. S33 at 12 mm adds the last 0.3 point at tele.

**Sigma's drawing as second check.** Count and grouping agree, 21 elements in 15 groups, with SLD at elements 2, 3, 18 and 20. At its fitted 5.77 px/mm the rims read 32.2 / 31.1 / 30.7 at L1 / L2 / L3, 21.7 at L4, 15.2 at L5/L6, 12.6 at L7, 12.7 at L8/L9, 13.4 at L10, 13.6 at L11, 13.7 at L12, 12.6 at L13/L14, 13.1 at L15, 12.9 at L16/L17, 12.4 at L18 and 14.1 at L19 and L20/L21. It supports the L7 and L8/L9 change directly and also draws L12 above L13/L14. It disagrees with the patent at the front group, 1.5 to 2.5 mm smaller; at L5/L6, 0.9 mm larger; at L12, 0.7 mm larger; at L15, 0.9 mm larger; and at L19, 2.3 mm larger. The prescription is a related design, so the drawing cannot overrule the figure of the example it models.

Limitation: the S10, S20 and S34 caps are inferred clear apertures, not mechanical data, and they set modeled vignetting inside the corner. The figure draws them smaller still, but S10's and S20's drawn caps would clip the on-axis beam, so those two lands cannot be taken as drawn. The figure governs a design that is not proven to be the factory lens.
