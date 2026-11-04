# Source and numerical audit

- Whole JP S47-8109 B Example 1; Grade B probable family, not factory-exact.
- Literal R/d/N/Abbe and fixed source planes retained; no optical tuning or front protector invention.
- Inferred caps and unprinted stops frozen before MTF; rejected geometry and raw pupil failures retained.
- Normal scalar native sampled convergence is not independent phase/factory certification.
- Infinity-only; no numerical finite table supports a retail focus law.
- Native input SHA256 `3e2f0be195fdb7d87c984b9392fd51c504f1a6b672d4187f52fac6c07114f201`; bibliographic transformation is recorded separately.
- Self-contained original sources, plan, scripts, final report-generation provenance, tests and custody verification accompany the private package.

## 2026-11-04 — Wording, glass and metadata pass

Source re-read: the Example 1 table (p. 4) against the data file. All nine radii, eight thicknesses and five n/ν pairs match the printed values ×5; the axial track 203.235 mm plus the 125.600 mm last gap gives the printed L = 65.767 ×5 = 328.835 mm. The p. 8 text assigns Figs. 8–12 to Examples 1–5, so Fig. 8 (p. 11) is this example's aberration plot.

Fields changed in the data file: header comment rewritten (states the ×5 scale, the d-line reading, the glass choices, the omitted front protective glass, the printed-L image plane and its 0.156 mm offset behind paraxial focus, and the sd and stop basis); subtitle; specs (5 ELEMENTS / 4 GROUPS (PATENT; CANON LISTS 6/5), DESIGN f = 100.0 (SCALED ×5), DESIGN F/5.6, ALL SPHERICAL, FRONT PROTECTIVE GLASS NOT MODELLED); `catalog.closeFocusM` marketing 10 m added (Canon Camera Museum fl119); roles of all five elements; `focus.description`; L1 `apd: "inferred"` with an apdNote; L3 indexReferenceNote reworded; indexReferenceNote removed from L1, L2, L4 and L5. `elementCount` / `groupCount` stay at the modelled 5 / 4, following CanonFL300mmf28SSCFluorite (Canon 6/5, model 5/4, specs line naming Canon's count) and CanonEF300mmf28LISUSM (Canon's 17/13 includes a protection glass the model omits; elementCount 16/12).

Glass relabels (Δ = catalog − stored; the patent prints no θgF, so no PgF comparison is possible):

- L1 1.43387 / 95.1 → CaF2 (fluorite crystal): Δnd −0.00002, Δνd 0.0, catalog PgF 0.5387.
- L2 1.79952 / 42.3 → S-LAH52 (Ohara): Δnd −0.000004, Δνd −0.075, PgF 0.5672. S-LAH52Q (Δνd −0.06) matches equally in νd; S-LAH52 puts C 11 µm and g 6 µm closer to the plot. J-LASF02 (Δνd −0.21) moved the F and g lines away in a full-set comparison.
- L4 1.713 / 53.9 → S-LAL8 (Ohara): Δnd −0.000005, Δνd −0.03, PgF 0.5458.
- L5 1.5927 / 35.4 → S-FTM16 (Ohara): Δnd +0.000001, Δνd −0.09, PgF 0.5933. Hoya FF5 (Δνd +0.05, PgF 0.5927) is marginally closer in νd and would put C 8 µm and F 14 µm closer but g 31 µm farther; S-FTM16 was kept because the patent's glass names follow the Ohara-style catalog of the period.
- L3 1.48749 / 70.0 stays Unmatched (fluor crown). S-FSL5 (Δνd +0.236) is inside the tolerance but was reverted after the per-line check below; J-FK5 (+0.31), N-FK5 (+0.41) and the other FK5-class rows are outside it.

Per-line paraxial focus, BFD shift from the d line in µm (C / F / g). Fig. 8 read at the axis and scaled ×5: +179 / −53 / +124, reading accuracy about ±5 µm (0.1 mm at patent scale = 354 px at 600 dpi). Before (all Unmatched): +479 / +150 / +1492. After: +226 / −85 / +277. Each relabel applied alone to the original file shifts the lines by: CaF2 −187 / −201 / −968, S-LAH52 −45 / −3 / −108, S-LAL8 −20 / −15 / −64, S-FTM16 −2 / −17 / −78 (all toward the plot); S-FSL5 +2 / +40 / +16 (all away). Adding S-FSL5 to the final set would give +228 / −45 / +292: F 24 µm closer, but g 15 µm and C 2 µm farther. Shifts add to within 2 µm.

Engine numbers unchanged by this pass: EFL 499.5723 mm, F/5.6, half-field 2.5°, stop radius 24.4816 mm, BFD 125.4443 mm, last gap 125.6000 mm, both focus keyframes at infinity as before. Surface audit OK; image circle 0 undersized; field coverage 100 % (2.5° → 21.65 mm); aperture within 3 % of F/5.6; clear-aperture check at Y = 21.633 mm shows no axial clipping or chief-ray blocking.

Analysis: inventor kanji corrected to 諏訪通美 (gazette spelling); the sentence calling Example 2 a same-family alternative removed (Example 2 is an 8.2° 300 mm-class design); the Verification Summary process text replaced by a short Model Scope and Limitations section; the private-packet source item removed; run-together text fixed; element lines and the glass section rewritten for the relabels, with the Fig. 8 comparison.

Open: the model's g-line focus stays about 150 µm behind the Fig. 8 value with every catalog combination tried; the cause (1960s melt partial dispersions or the fluorite data) is not identified.

Open: LENS_DATA_SPEC calls `elementCount` the published count; Canon's 6 / 5 could replace the modelled 5 / 4 if the corpus precedent is revisited.

## 2026-11-04 — Final diagram, rim and label review

Compared: the local page (infinity, `focus=1`, the focus movement overlay, all five element inspectors) against JP S47-8109 B Fig. 3 (p. 10), the section of Example 1, read at the scan's native 347 dpi. Canon Camera Museum fl119 has no construction diagram; it lists 6 elements / 5 groups, one CaF2 element, 10 m minimum focus and a 95 mm filter. No other maker image was viewed; the brochure and dealer-catalog statements already in the analysis stand.

Figure scale. Vertex crossings on the axis (page x at 347 dpi): S1 976, S2 1054.5, S3 1133, S4 1159.5, S5 1174, S6 1233.5, S7 1872.5, S8 1914.5, S9 2000.5. First to last vertex is 1024.5 px for 203.235 mm, so 0.1984 mm/px. The front-group span (0.1988) and the d6 gap (0.1987) agree. Checks: the drawn iris opening (122 px, 24.2 mm) matches the engine stop radius of 24.48 mm, and L1's drawn flat tip (14 px, 2.78 mm) matches the 2.83 mm edge thickness the prescription gives at the drawn 44.4 mm rim. Rim readings (top / bottom px, axis to outer edge of the line): L1 223 / 224.5, 44.4 mm; L2 213 / 221, 43.05 mm; L3 215.5 / 217, 42.9 mm; doublet 86.5 / 88 (one flat top across both elements), 17.3 mm.

Visible differences before this pass: the drawing on the page stood 8–12 % taller than the figure on every element (all front faces 48.2 mm, doublet 19.3 mm). L1 and L3 came to near knife edges (0.51 mm and 0.81 mm). All three front elements had one height, where the figure draws L1 slightly tallest.

Light rule (rimcost against the package rims, which are the same as the file before this pass; wide open, infinity). Full figure set (L1 44.8 at the axial floor, L2 43.2, L3 43.0, doublet 17.3): loses 8.7 points at 2.5°. Restored one at a time from that state: L1 wins back 6.2, the doublet 2.5, L2 and L3 0.0. Swept alone, L1 at 47.5 / 47.0 / 46.5 / 46.0 loses 1.0 / 1.8 / 2.5 / 3.7 points, and the doublet at 18.5 / 18.0 / 17.5 / 17.3 loses 0.0 / 0.4 / 1.7 / 2.5. Joint sets with L2 = L3 = 43.0: (L1 46.4, D 18.3) 2.9; (46.5, 18.2) 2.5; (46.5, 18.1) 2.7; (47.0, 17.8) 2.6. Every joint set that meets the rule needs about 2.7 mm of raise in total. (46.5, 18.2) was chosen: it keeps 0.5 point of margin, puts the doublet at 0.39 of L1 as drawn, and leaves the doublet costing nothing.

| Faces | Before sd (mm) | After sd (mm) | Figure (mm) | Evidence |
| --- | ---: | ---: | ---: | --- |
| 1, 2 (L1) | 48.2 | 46.5 | 44.4 | Figure value is below the 44.60 mm F/5.6 axial ray at S1. Smallest raise that keeps the cut at 2.5 points (restore wins back 2.5). Edge 0.51 → 1.58 mm; 93 mm clear diameter inside the 95 mm filter thread. |
| 3, 4 (L2) | 48.2 | 43.0 | 43.05 | Square block as drawn. Free cut (restore wins back 0.0). Axial floor 40.10 mm. |
| 5, 6 (L3) | 48.2 | 43.0 | 42.9 | Free cut (0.0). Axial floor 39.38 mm. Edge 0.81 → 3.11 mm; the figure draws a narrower tip than the prescription gives at its drawn height. |
| 7, 8, 9 (doublet) | 19.3 | 18.2 | 17.3 | Square-cut cemented block as drawn. 18.2 is the smallest value adding no loss beside L1 at 46.5 (17.3 alone loses 2.5). Axial 11.87 mm and chief ray 7.27 mm are both below it. |

After the edit: built.mjs EFL 499.572 mm, F/5.6, half-field 2.5°, stop radius 24.482 mm, all unchanged. probe shows the same EFL / BFD / last gap. The surface audit is OK, the image circle has 0 undersized, field coverage is 100 % (2.5° → 21.65 mm), and the aperture is within 3 % of F/5.6. clearap at Y = 21.633 mm shows no axial clipping or chief-ray blocking. Final rimcost against the package rims: worst loss 2.5 points at 2.5° (L1 restore 2.5, others 0.0). vig.mjs before: 1.6° 100.0, 2.1° 99.3, 2.5° 97.8; after: 1.2° 99.7, 1.6° 98.4, 2.1° 96.9, 2.5° 95.3. Drawn height order L1 > L2 = L3 > doublet is kept, and the doublet-to-L1 ratio is 0.39 as drawn. The step from L1 to L2/L3 is 3.5 mm against about 1.4 mm in the figure, because L1 is held up for light. No lands are drawn in the figure and none were added. No policy fields are set; the validator runs at the defaults (gapSagFrac 0.9, rim slope limit sin 0.9).

Checked and found correct: the group brackets Front (1–6) and Rear (7–9) follow the patent's 前群 / 後群, and CD1 brackets the cemented 7–9 (d7 and d8 are both glass, with no air gap at r8). The element types match the R signs: L1 biconvex, L2 biconcave (R4 +944.9 weakly concave), L3 a positive meniscus convex to the object, L4 biconcave, L5 biconvex. The roles are true (L1 has the strongest positive power in the front group, f +187.6 mm against L3's +233.8 mm). There are no aspheric markers, which is right because all surfaces are spherical. The stop sits in d6 between L3 and L4. L1 `apd: "inferred"` is correct: the claim (p. 8) and text set only f1 / f2 / e power conditions, with no partial-dispersion condition, and Canon names the fluorite element. No other element carries a tag. The inspectors show CaF2, S-LAH52, Unmatched (fluor crown…), S-LAL8 and S-FTM16, and each resolves in the catalog except L3.

Glass, L3. Examples 1, 4 and 5 all print FK5 as 1.48749 / 70.0 (pp. 4, 6), with no extra digits, no line indices and no partial dispersion. Repo catalog rows at nd 1.48749: S-FSL5 70.236, J-FK5 70.31, FK5 (Sumita) 70.40, N-FK5 70.41, H-QK3L 70.44, FC5 70.45. Only S-FSL5 falls inside Δνd 0.25, and it moves the per-line focus away from Fig. 8 (C / F / g +2 / +40 / +16 µm). The obsolete Ohara FSL5 in the local Ohara AGF (νd 70.21) is not in the repo catalog and has essentially the same dispersion. L3 stays Unmatched, and there is nothing patent-printed to transcribe. chan.mjs unchanged: C +225.8, F −85.1, g +276.8 µm against Fig. 8's +179 / −53 / +124.

Movement: infinity only. Both focus keyframes are at infinity, the movement overlay reports no modelled focus or zoom movement, and the focus slider reads "Not modeled". Nothing moves, as the patent prints.

Open: the g-line focus stays about 150 µm behind Fig. 8, and the cause (melt partial dispersions or the CaF2 curve) is not identified. The L1 → L2 step is wider than drawn because of the light rule. probe reports the t = 1 keyframe with the image plane at paraxial BFD (last gap 125.444 mm against 125.600 mm at t = 0). That is engine handling for an infinity-only lens with no visible effect, and it was not changed.
- 2026-11-04 coordinator note: doublet labels renamed from the CD series to D1… (corpus convention).
