# Audit Log — PENTAX DA 50mm f/1.8

## 2026-11-03 — Patent transcription and inferred rims

Read: application PDF pages 10–11 (Tables 7–8) and page 14 (Fig. 10) with the aberration plots; grant PDF page 10 (Tables 7–8) repeats the same values. The maker's section GIF and catalog page 8 were viewed. Application Example 4 equals grant numerical Example 2; the grant's Example 4 is a different design.

The 12 surface rows, six material pairs, stop gaps 4.145/6.087 mm and air-equivalent BF 38.52 mm were copied without rescaling or tuning. The element track is 33.852 mm and the image lies at 72.372 mm; the printed L of 72.37 is rounded. The computed paraxial BF, 38.518477 mm, is not applied. The patent's nd/νd are d-line values; no supplier or full dispersion is printed. No finite-focus state, filter or iris diameter was invented.

Semi-diameters were set before any tracing. The first proposal, equal rims of 13.75 mm at S4/S5 and 13 mm at S6/S8, failed the cross-gap sag check; S4/S5 were set to 11.25 mm and S6/S8 to 11.5 mm. A +5 % scaling of all rims also failed that check; the nominal and −5 % sets passed with no render trimming and cleared the iris at all nine marked apertures. No tolerance or engine changes.

With those rims (before the S4/S5 change below), 188, 182 and 146 of 208 pupil samples passed at 0°, 7.75° and 15.5°; the rest were clipped by the inferred rims. The rims were not tuned to an MTF result.

The product correspondence is probable, not unique. The maker's 2012 preview and announcement precede the 2012-07-30 filing. The model is infinity-only; the retail 0.45 m minimum focus is recorded as product data, with no finite-focus motion claimed.
- 2026-11-04 deployment validation: S4/S5 semi-diameters 11.25 → 11.75 mm with `checks.gapSagFrac: 0.94`, so the f/1.8 axial beam clears the L2/L3 rims (clearap had CLIPS-AXIAL at S4/S5, effective f/1.875). Patent Fig. 10 draws both faces at about this height.

## 2026-11-04 — Wording, glass and metadata pass

Public text rewritten without changing the optics. In the data file, the header comment was restated in plain sentences and keeps every fact: Example 4 equals grant Example 2, no scaling, what is printed, the air-equivalent BF, the stop from F/N, the inferred rims and the S4/S5 change. The subtitle changed from "JP 2014-026184 A Numerical Example 4 — representative infinity reconstruction" to "JP 2014-026184 A, Example 4 — probable production correlation". The four process-wording specs lines became "6 ELEMENTS / 5 GROUPS", "DESIGN f = 51.5 mm", "DESIGN F/1.8" and "ALL SPHERICAL". focus.description was rewritten in plain sentences, and the identical boilerplate role on all six elements was replaced with a specific role for each. catalog.closeFocusM marketing 0.45 m was added. focus.closeFocusM stays at infinity.

Glass: all six elements were relabelled from Unmatched to catalog equivalents. The patent prints nd to five decimals, so the 0.0001 window applies. L1 and L5 (1.80610/40.9) became S-LAH53 (OHARA), Δnd −0.000002, Δνd +0.026. L2 (1.78590/44.2) became S-LAH51 (OHARA), Δnd −0.000004, Δνd +0.003. L3 (1.74077/27.8) became S-TIH13 (OHARA), Δnd −0.000001, Δνd −0.011. L4 (1.76182/26.6) became FD140 (HOYA), Δnd 0, Δνd +0.01. L6 (1.77250/49.6) became S-LAH66 (OHARA), Δnd −0.000001, Δνd −0.002. The patent prints no partial dispersion, so there is no PgF to compare. Rejected rows: NBFD3 (Δnd −0.0016) and NBFD11 (Δνd −0.27) fall outside the window. E-FD13 (Δνd −0.04) and S-TIH14 (Δνd −0.08) lie inside it but are farther than the chosen rows. P-LASF47 (Schott, νd 40.90) matches L1/L5 as closely as S-LAH53 at the printed precision. It is a precision-molding glass, and OHARA is the vendor most used across the Pentax files here, so S-LAH53 was kept. No element carried indexReferenceNote or catalog-copied nC/nF/ng/dPgF.

Analysis: the pipeline and custody wording was removed, along with the MTF and pupil-sample tables, which were computed with the earlier 11.25 mm S4/S5 rims. Run-together words were spaced. The element sections now give the catalog equivalents and the patent's conditions (1)–(6) with Example 4's values (1.79, 0.763, 1.13, −11.86, −1.08, 1.79), each rechecked from the prescription. A glass table and a plain stop and clear-aperture section were added. In this log, the 2026-11-03 section was rewritten in plain words with its facts kept.

Engine numbers before and after are identical: EFL 51.5001 mm, F/1.800, half-field 15.5°, stop radius 10.0599 mm, BFD 38.5185 mm against a last gap of 38.52 mm, infinity-only focus keyframes. The surface audit is OK; image circle 0 undersized; field coverage 100 %; aperture within 3 % of f/1.8; clear-aperture check shows no axial clipping at f/1.8.

Open: none.

## 2026-11-04 — Final diagram, rim and label review

Compared: the local page against application page 13, Fig. 10 (native 300 dpi raster, read at 600 and 1200 dpi), and the maker's construction GIF, viewed only. Fig. 10 scale: at 600 dpi the vertex crossings sit at S1 2816 px and S12 3504 px, so 688 px over 33.852 mm gives 20.32 px per lens mm (10.16 native px). S1 to S4, S8, S9 and S10 give 20.26–20.39. The maker GIF, enlarged 4×, gives 25.2 px/mm from its S1–S12 span, with S4, S6 and S8 within 1 %.

Rim heights in mm. Fig. 10 values are line centres on the upper half, which has no leader lines. The maker values are line centres too.

| Element | Fig. 10 edge | Fig. 10 cap end | Maker edge | File before | File after |
|---|---|---|---|---|---|
| L1 | 14.4 | — | 15.5 | 15.75 / 15.75 | unchanged |
| L2 | 12.8–12.9 | S4 11.63 (lower half 11.66), land to the edge | 13.5 | 13.75 / 11.75 | 13.75 / 11.75, land to 13.75 |
| L3 | 11.54 | S6 9.93 (lower half 10.19), land to the edge | 13.5, chamfer to S6 ≈ 10.7 | 11.75 / 11.5 | 13.0 / 13.0, cut radius 11.18 |
| L4–L5 | 11.53 | S8 9.88, land to the edge | 12.7 / 12.5, chamfer from S8 ≈ 10.7 | 11.5 / 13.0 / 13.0 | 13.0 / 13.0 / 13.0, cut radius 11.14 |
| L6 | 11.48 | — | 13.0 | 13.0 / 13.0 | unchanged |

Fig. 10 draws every rim at about the f/1.8 axial beam, which the real-ray trace puts at 14.31, 13.95, 12.86, 11.71, 11.64, 10.14, 9.93, 10.94, 11.64, 11.57 and 11.46 mm on S1–S6 and S8–S12. The file follows the maker's section, which sits 7–13 % above the figure. Before this pass the page differed from the figure in four ways. L2 joined a 13.75 mm front rim to an 11.75 mm rear rim with a slanted bevel; the figure draws a flat top and a flat rear land against L3. The cap of L3's rear face ran back to 0.12 mm from the stop, with a slanted top; the figure draws L3 square, with a flat land 1.23 mm ahead of the stop. L4 had a slanted top from 11.5 to 13.0 mm; the figure draws the doublet's top flat and a flat land on L4's front face. L3 was 1.25 mm lower than the doublet and L6; the figure draws the three level, and the maker draws L3 as tall as L2.

Changes, all in the data file:

| Surface | Before | After | Evidence |
|---|---|---|---|
| 4 | sd 11.75 | sd 11.75, rimExtensionSd 13.75 | Fig. 10's S4 cap ends at 11.63–11.66 mm, just under the axial floor of 11.71 mm, and a flat land runs to L2's edge (drawn on the lower half, open on the upper). The land runs to S3's 13.75 mm, so L2 is square-cut. |
| 5 | sd 11.75 | sd 13.0 | L3 drawn level with the doublet (Fig. 10: 11.54 against 11.53 mm); the maker draws L3 as tall as L2. |
| 6 | sd 11.5 | sd 13.0, rimCutDepthMm 3.77 | Land in Fig. 10, q = 9.93 / 11.54 = 0.860, ±0.016 from one native pixel. 0.860 × 13.0 = 11.18 mm, sag 3.772 mm. The validator's wide-open beams reach 10.136 mm, so the margin is 1.04 mm. The land sits 0.375 mm ahead of the stop. |
| 8 | sd 11.5 | sd 13.0, rimCutDepthMm 4.12 | Land in Fig. 10, q = 9.88 / 11.53 = 0.857, ±0.016. 0.857 × 13.0 = 11.14 mm, sag 4.118 mm. The beams reach 10.308 mm, a margin of 0.83 mm. The land sits 1.967 mm behind the stop. |
| groups | "Front", "Rear" | "GF (+)", "GR (+)" | The patent names the positive front group GF and the positive rear group GR (¶0020; Fig. 10 brackets). |

Light: the cuts and the extension change no ray, and the S5 raise passes nothing that S4, 1.68 mm ahead, does not already clip. The rimcost transmission from 0° to 15.5° is the same before and after: 100.0, 98.9, 97.6, 94.0, 89.1, 81.8 and 73.4 %. The package baseline gives 92.7, 92.4, 91.8, 88.8, 83.9, 77.6 and 71.0 %. The worst change against the baseline is a gain of 2.4 points at 15.5°, and there is no field with a loss. Restoring S8 to its old 11.5 mm wins back 0.0 points. The vignetting curve is the same before and after. Cutting toward the figure's absolute heights fails the light rule. L1 at 14.45 mm gives 65.6 % at 15.5°, a loss of 5.4 points against the baseline. S9–S12 at 11.6 mm give 63.3 %, a loss of 7.7 points. Both stay at their current heights, which the maker's section supports. S3 at the figure's 12.9 mm would pass the light rule, but the maker draws L2 at 13.5 mm, so 13.75 mm is kept as the smaller change.

Results after the edits: the surface audit is OK, with both inferred cuts clear of the beams. EFL 51.5001 mm, F/1.800, half-field 15.5° and stop radius 10.0599 mm are unchanged. Image circle: 0 undersized (14.17 of 14.18 mm at 15.5°). Field coverage is at least 99 %. The aperture is within 3 % of f/1.8. The clear-aperture trace shows no axial clipping and no blocked chief ray. Its per-surface side vignetting at S5 drops from 15 % to 4 %; the engine transmission does not change. checks.gapSagFrac stays at 0.94. With 0.93 the validator refuses S4's land: it intrudes 1.566 mm into the 1.682 mm gap to S5, against an allowed 1.564 mm. The page was shot at infinity, at focus=1 and with the focus overlay. It shows L1, L2, L3 and the doublet square-cut, the three lands, and the GF (+) and GR (+) brackets.

Checked and found correct: L1–L6 are the patent's own element designations, so no diagramLabel is needed. Each element's type agrees with the signs of its radii. The roles match ¶0021–0028. The cemented bracket CD1 covers surfaces 8–10. The stop is at the patent's surface 7. No surface carries an aspheric marker, and the patent states that no example uses an asphere. All six glass labels resolve: S-LAH53 on L1 and L5, S-LAH51 on L2, S-TIH13 on L3, FD140 on L4 and S-LAH66 on L6. Each is within 0.000004 in nd and 0.026 in νd of the printed values, and the inspector shows each one. There is no apd tag. The patent sets no partial-dispersion condition, and the maker marks no special glass, so none is due. Movement: the patent prints the infinity state only. The focus overlay reports no modeled focus or zoom movement, the focus slider reads "Not modeled", and focus=1 draws the same layout.

Open: L3's rear land sits 0.375 mm ahead of the stop, against 1.23 mm in Fig. 10. With L3 raised to the doublet's 13.0 mm, the figure's q puts the cap end at 11.18 mm, where the deep R 18.454 face has a 3.77 mm sag. The absolute rim heights of Fig. 10 are not followed (see Light above).
- 2026-11-04 coordinator note: doublet labels renamed from the CD series to D1… (corpus convention).
