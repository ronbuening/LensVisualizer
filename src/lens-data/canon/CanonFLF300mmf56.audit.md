# Source and numerical audit

- Whole JP S47-8749 B Example 2; Grade B probable family, not factory-exact.
- Literal R/d/N/Abbe and fixed source planes retained; no optical tuning or front protector invention.
- Inferred caps and unprinted stops frozen before MTF; rejected geometry and raw pupil failures retained.
- Normal scalar native sampled convergence is not independent phase/factory certification.
- Infinity-only; no numerical finite table supports a retail focus law.
- Native input SHA256 `215da6afa6e9bc8ac31e66a930379f3a45c46701402c54af3b723143afa77466`; bibliographic transformation is recorded separately.
- Self-contained original sources, plan, scripts, final report-generation provenance, tests and custody verification accompany the private package.

## 2026-11-04 — Wording, glass and metadata pass

Source re-read: the Example 2 table (PDF page 4) agrees with every R, d, N and V in the file after the uniform ×3 scale; the patent prints 諏訪道美 as inventor. The scaled prescription gives EFL 300.041 mm (printed f = 100), paraxial back focus 83.2185 mm against the L-derived last gap 83.193 mm, f1 167.068 / f2 −142.216 / e 104.040 mm (printed ×3: 167.058 / −142.221 / 104.043), and Petzval sum × f = −0.1687 (printed total −0.16852). Canon's section drawing shows a thin front protective meniscus that the patent does not list, then the two fluorite elements (patent L1, L2), the cemented pair and the two rear singlets.

Data file: header comment rewritten to state the ×3 scale, the d-line reading of N/V, the Canon 7/6 versus patent 6/5 count, the image-plane, stop and semi-diameter basis and the glass equivalents. Subtitle "JP S47-8749 B Example 2 — probable family; inferred apertures" became "JP S47-8749 B, Example 2 — probable production correlation, front protective glass omitted". Specs became 6 ELEMENTS / 5 GROUPS (PATENT; CANON LISTS 7/6), DESIGN f = 100 (SCALED ×3), DESIGN F/5.6, ALL SPHERICAL, 2 FLUORITE ELEMENTS. elementCount / groupCount stay 6 / 5, following the house precedent for a maker count that includes an unprescribed element (CanonFL300mmf28SSCFluorite counts the patent's 5/4 against Canon's 6/5; CanonEF300mmf28LISUSM counts 16/12 against Canon's 17/13 with protection glass). Added catalog.closeFocusM.marketing 3.5 and aperture.blades 8 (Canon Camera Museum). Focus description and all six element roles reworded from patent text; indexReferenceNote removed from all six elements; L1 and L2 tagged apd "inferred" with an apdNote (Canon names two fluorite elements; the patent labels them CaF2 but does not call the material anomalous, so "patent" was not used).

Glass relabels (Δ = catalog − printed): L1, L2 CaF2 (fluorite crystal), Δnd −0.00002, Δνd 0.00, catalog PgF 0.5387; L3 SF56A (Schott), Δnd +0.000001, Δνd −0.02, PgF 0.6098; L4 J-LASF013 (Hikari), Δnd 0, Δνd +0.01, PgF 0.5720 (closer than S-LAH63 at Δνd −0.014); L5 S-LAM60 (Ohara), Δnd −0.000002, Δνd +0.04, PgF 0.5531; L6 FF5 (Hoya), Δnd 0, Δνd +0.05, PgF 0.5927 (closer than S-FTM16 at Δνd −0.09). The patent prints no partial-dispersion data, so no PgF comparison is possible.

Per-line paraxial focus relative to d at ×3: the Fig. 9 spherical-aberration curves (PDF page 12) read at the axis give C about +0.039 mm and F and g about −0.054 mm, with a reading accuracy of about ±0.01 mm. The previous Abbe-based dispersion gave C +0.259, F +0.130, g +0.940 mm; the relabelled model gives C +0.048, F −0.100, g −0.149 mm. Every line moves toward the plot, so all relabels are kept. The S-LAH63 / S-FTM16 alternative gives C +0.056, F −0.094, g −0.129 mm, the same conclusion.

Engine values unchanged by this pass: EFL 300.041 mm, f/5.6, half-field 4.1°, stop radius 11.461 mm, paraxial back focus 83.2185 mm, focus keyframes unchanged. Real image-space working f-number at the stop rim is 5.6616. Analysis: process material and the verification transcript removed, run-together words fixed, the glass section and element sections rewritten to the new labels, and a Model Scope and Limitations section added.

Stop reading: on a 400 dpi render of Fig. 4 (PDF page 9) the diaphragm sits 0.697 of the way from the r7 to the r8 vertex, so the earlier "about 0.68" figure reading was replaced by "about 0.70" in the header and analysis; the model's 0.70 is unchanged.

Open: the patent's third-order coefficient table fits a stop at 0.717 of d7 (61.278 / 24.186 mm) against the model's Fig. 4-based 0.70 (59.825 / 25.639 mm); not changed in this pass. Open: with the catalog curves the F and g foci remain about 0.05 and 0.10 mm shorter than Fig. 9.

## 2026-11-04 — Final diagram, rim and label review

Compared the local page (infinity, `focus=1`, the focus-movement overlay and the six element inspectors) with Fig. 4 (PDF page 9) rendered at its native 347 dpi, and with Canon's Camera Museum construction drawing (viewed only).

Figure scale: the r1 and r11 vertex crossings sit 1555 px apart for the 123.933 mm r1–r11 track, 12.547 px/mm. Check spans: r1–r7 324 px against 323.9 px expected; r8–r11 154 px against 158.7 px (rear drawn about 3 % short, 12.17 px/mm locally). The axis tilts about 9 px across the figure, so heights are taken from the local axis centre on both sides, less half the 6 px line.

| Element | Fig. 4 px (top / bottom, line centre) | Fig. 4 mm | Model sd, mm | Axial floor, mm |
| ------- | ------------------------------------- | --------: | -----------: | --------------: |
| L1      | 332 / 335                             |      26.6 |         28.9 |   26.79 / 26.57 |
| L2      | 327 / 331                             |      26.2 |         28.9 |   25.21 / 24.65 |
| L3/L4   | 324 / 326                             |      25.9 |         28.9 |   22.76 – 21.33 |
| L5      | 143 / 150                             | 11.6–12.0 |         13.3 |     7.40 / 7.43 |
| L6      | 143 / 150                             | 11.6–12.0 |         13.3 |     7.50 / 7.52 |

Rear/front in Fig. 4 is 0.438 against L1 and 0.449 against the cemented pair; the model draws 13.3/28.9 = 0.460. Canon's drawing gives 0.45 against the fluorite L1 and 0.43 against the pair, but draws L2 about 7 % shorter than L1 and the pair about 4 % taller, where Fig. 4 draws the four front outlines within 3 % of each other; the patent figure governs. Shapes agree: L1 and L2 are knife-edged in both drawings (model edge thickness at 28.9 mm: L1 0.45 mm, L2 0.64 mm); the L3/L4 block is square-topped with a 123 px (9.8 mm) flat top against a model rim thickness of 9.78 mm; L5 and L6 are square-cut at one height (model r8 = r9 and r10 = r11). Example 2's figure draws no chamfer or flat land (the chamfered pair belongs to Fig. 3 and to Canon's drawing), so no land was added.

Ray floors from the exact meridional trace at 4.1° and f/5.6 are the axial marginal heights in the table; no surface clips the axial beam or blocks the chief ray. Fig. 4's front heights fall under the 26.79 mm floor at r1, so L1 cannot follow the figure.

Light cost of trial rims against the package baseline (baseline 100 / 100 / 96.7 / 91.9 / 86.2 / 80.6 / 71.6 % at 0 / 0.7 / 1.4 / 2.0 / 2.7 / 3.4 / 4.1°):

| Trial                                                 | Worst loss                    |
| ----------------------------------------------------- | ----------------------------- |
| All seven front faces 27.0 mm                         | 6.6 points at 2.0°, all at L1 |
| L1 28.0 mm                                            | 3.1 points at 2.0°            |
| L1 28.1 mm                                            | 2.7 points at 2.0°            |
| L2, L3/L4 at 27.0 mm                                  | 0.0                           |
| L5 11.7 mm                                            | 0.0                           |
| L6 11.7 mm                                            | 11.5 points at 4.1°           |
| L6 12.8 mm                                            | 3.2 points at 4.1°            |
| L6 12.85 mm                                           | 2.7 points at 4.1°            |
| Figure fit (front 27.0 / 26.5 / 26.2, rear 11.8 mm)   | 16.5 points at 4.1°           |

Rims: no change. The front is held by the r1 floor and by L1's light; L2 and the pair could drop at no cost, but alone they would draw a step under L1 that Fig. 4 does not show. Moving L1 to about 28.1 mm and L6 to about 12.85 mm would shift rims by 3 %, inside the reading noise (the two rear scale estimates already differ by 3 %), for 2.7 points of corner light each. L5 could fall to 11.7 mm at no cost, but both drawings put L5 and L6 at one height. No face is cut below the baseline and no land exists, so the light rule has nothing to act on; worst loss of the final file against the baseline is 0.0 points.

| Field                           | Before                                          | After                                       | Evidence                                                                                                                                  |
| ------------------------------- | ----------------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| L3, L4 `cemented`; doublet text | CD1                                             | D1                                          | Corpus convention: about 3600 `cemented` names of the D-series against 20 CD-series; the Canon FL 85–300 and FL 300 f/2.8 files use D1. The patent names no cemented component. |
| L4 role                         | "… carries the front group's negative power."   | "… carries most of the pair's negative power." | r7 gives −0.00765 of the pair's −0.00896 mm⁻¹ thin-lens surface power (85 %).                                                           |
| Header comment                  | —                                               | Records the 347 dpi re-reading and why the rims stay | This section.                                                                                                                     |

Checked and found correct:

- Groups "Front" (r1–r7) and "Rear" (r8–r11) are the patent's 前群 and 後群 (claim, PDF page 8); the D1 bracket spans r5–r7, the L3/L4 pair.
- Element names L1–L6 are sequential; the patent figure labels only r and d, and the text calls the front group's components the first to third blocks.
- Types follow the radius signs: L1 biconvex (+64.077 / −416.883), L2 positive meniscus convex to the object (+66.816 / +420.933), L3 positive meniscus concave to the object (−647.256 / −191.487, f +345.3), L4 biconcave, L5 biconcave (−32.367 / +803.346), L6 biconvex (+344.637 / −47.997). All surfaces spherical; no aspheric markers. The stop sits at 0.70 of d7 (Fig. 4 reads 0.696).
- `apd`: L1 and L2 "inferred", at Canon's two fluorite positions (coloured in Canon's drawing). The claim states only shapes and the f1, f2, e conditions, with no partial-dispersion condition, so "patent" does not apply. L3–L6 carry no tag.
- Glass: all six elements resolve to catalog rows (CaF2, CaF2, SF56A, J-LASF013, S-LAM60, FF5), and the inspectors show them; none is unmatched.
- Focus: infinity only, as the patent prints no close-focus spacing. The movement overlay reports no modelled focus or zoom movement, the slider reads ∞ / "Not modeled" at both ends, and no element moves.
- Engine values unchanged: EFL 300.041 mm, f/5.6, half-field 4.1°, stop radius 11.461 mm; the built output is identical before and after. Surface validator OK; image circle 100 % (21.65 mm); traced corner coverage at least 99 %; aperture within 3 % of f/5.6; vignetting curve unchanged.
- Policy fields: the file has no `checks` block; the engine defaults (gapSagFrac 0.9, rim sine 0.9) pass, so nothing needs applying.

Open: the rims stay about 9 % (front) and 12 % (rear) above Fig. 4's absolute heights and draw the rear at 0.460 of the front against 0.44–0.45 in the figure; closing that would cross the r1 axial floor or cost more than 3 points of corner light.
