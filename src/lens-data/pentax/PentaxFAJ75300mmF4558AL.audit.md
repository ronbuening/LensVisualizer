# Audit Log - PENTAX SMC FA J 75-300mm f/4.5-5.8 AL

Patent: US 2003/0223122 A1, Embodiment 3

## 2026-10-29 — Deployment validation and wording pass

An independent check re-read Table 3 of the local `patents/US20030223122A1.pdf` (PDF pp. 15–16, printed pp. 5–6) against the data file: all 22 surface rows of R, d, nd and νd, the S18 asphere (K = 0 and A4/A6/A8), the three printed D6, D11 and fB values, and the cemented interfaces S8 and S15. There were no mismatches. The patent's K is the standard conic (¶0073), so the coefficients carry over unchanged. The grant US 6,778,331 B2 (same application 10/431,464) prints identical Tables 3 and 4. This pass re-read the Table 3 asphere row, the variable gaps, Table 4 and Table 5 from the page images, and ¶0057 and ¶0123–0124.

Patent → model at wide/middle/tele infinity: EFL 77.25 / 200.01 / 289.96 → 77.244 / 199.952 / 289.935 mm; fB 58.97 / 73.19 / 87.56 → paraxial 58.975 / 73.173 / 87.564 mm, so the printed planes sit +0.0051 / −0.0175 / +0.0038 mm from paraxial focus and are kept as printed. The printed f/4.6 / 5.4 / 6.2 set the iris. The chief ray reaches 21.6 mm image height at 16.00 / 6.01 / 4.17°, against the printed W = 16.0 / 6.0 / 4.2°. Table 5's conditions reproduce: fw/f3 = 77.25/37.058 = 2.085, fw/f3b = 77.25/−304.402 = −0.254 and fw/fp = 77.25/666.670 = 0.116; ΔIasp was not recomputed. Across all 65 model zoom positions the paraxial focus stays within 0.0175 mm of the image plane; linear interpolation of all three gaps would have added up to 7.70 mm of defocus, which is why D6 is solved between the printed rows.

Embodiment choice. Embodiments 3 and 4 share the production layout, with 12 elements / 10 groups and a free-standing plastic L10 with aspheric S18, and differ only by exchanging the L7 and L8 glasses. Embodiments 1 and 2 have 11 elements. Embodiment 4's printed fB is 58.29 / 72.32 / 86.58 mm. Its middle and tele values repeat Table 2, while its own prescription focuses at 58.306 / 71.778 / 86.152 mm, a printing error. Embodiment 3 is therefore used.

Focus. The patent prints no near-focus data. ¶0057 moves G1 toward the object. A paraxial estimate of G1 travel to the maker's 1.3 m is 15.00 / 15.55 / 15.74 mm. The model stays infinity-only, with both focus keyframes repeating the infinity prescription.

Stop and rims. The stop sits 0.6 mm before S12, read from Fig. 9; an independent reading gave about 0.5 mm. It is taken out of D11 and moves with G3. At tele the L6 rims, S10 and S11 stored at 11.61 mm, are below the 11.87 / 12.07 mm the f/6.2 axial beam needs. A bisected axial entrance radius of 22.513 mm against the nominal 23.382 mm gives an effective f/6.44 with 92.7 % of the entrance area. The independent check quoted about f/6.39; this pass's trace reproduces the f/6.439 already stated in the package. Wide and middle pass the full f/4.6 and f/5.4 beams. The limitation stays stated in the analysis; no rim was changed.

Maker comparison. Ricoh's [product page](https://www.ricoh-imaging.co.jp/japan/products/lens/k/telephoto/smcpentax-fa-75-300/) and [construction diagram](https://www.ricoh-imaging.co.jp/japan/products/filmcamera/lens/image/construct/tz-fajz75f45-300f58.jpg) give 12 elements / 10 groups with a resin aspherical tenth element. They also give 1.3 m minimum focus, a 58 mm filter, 385 g and a 32–8.2° angle of view. The lens was developed with the film *ist (February 2003), after the May 2002 priority date. These facts match Embodiments 3 and 4, so the correlation is labelled qualified.

Fields changed in this pass. Data file: the header comment was rewritten in plain words, keeping every fact and adding the Embodiment 4 reason. The subtitle and specs were rewritten, and `focus.description` became plain sentences. Element labels changed from L1–L12 to Element 1–12, and each element gained a role. The analysis lost the H1 suffix and gained word spacing. Its per-element glass lines and glass table now carry the catalog-equivalent names, and color MTF is described as available, since S-FSL5 now resolves and only L10 is estimated. The finite-focus study was replaced by the G1 travel estimate. The zoom, stop and rim text was rewritten, the process-number section became "Model Scope and Limitations", and the source list and closing package paragraph were cleaned. Built and probe outputs are byte-identical before and after: EFL 77.2441 mm, FOPEN 4.6, half-field 21.4622°, stop radius 12.3483 mm, every station's BFD and both focus keyframes. The surface audit reports OK.

Open: exact production identity (Embodiment 3 vs 4), the production glasses and L10's polymer, the zoom cam and the focus travel remain unknown. The rims and stop position are inferred. The cemented brackets were renamed C1 and C2 so they no longer read like the patent's gap labels.

## 2026-10-29 — Semi-diameter pass against the patent figure

Source: Fig. 9 of the local `patents/US20030223122A1.pdf` (PDF page 6, Sheet 5 of 9), the Embodiment 3 section drawn at the wide position (short D6, long D11). The page is a 1-bit scan, measured at its native 2320 px width (72 dpi render). Every element rim was read as half the distance between its top and bottom rim lines, so the slight tilt of the scanned axis line cancels. Leaders, labels and group brackets were excluded by reading single columns inside each rim. The front page gives inventor Hiroyasu Ozaki, assignee PENTAX Corporation, publication US 2003/0223122 A1 of Dec. 4, 2003, application 10/431,464 and JP priority 2002-135738.

Scale. The axis crossings of all 22 surfaces fall where the wide prescription puts them. S1 to S22 is 1158.5 px for 99.84 mm, giving 0.08618 mm/px; S5 to S19 gives 0.08607 mm/px, 0.13% apart.

| Surfaces | Element | Stored sd mm | Fig. 9 mm | Figure / data | Decision |
|---|---|---:|---:|---:|---|
| 1–2 | L1 | 25.3 | 25.04 | 0.990 | kept |
| 3–4 | L2 | 24.7 | 24.35 | 0.986 | kept |
| 5–6 | L3 | 23.7 | 23.61 | 0.996 | kept |
| 7–9 | C1 (L4/L5) | 12.63 | 12.47 | 0.988 | kept; S7 is at the tele axial floor, 12.626 mm |
| 10–11 | L6 | 11.61 | 11.96 | 1.030 | kept for now; see below |
| STO | iris | engine 12.35 | 12.28 | — | not edited |
| 12–13 | L7 | 12.88 | 12.75 | 0.990 | kept; at the axial floor, 12.869 / 12.877 mm |
| 14–16 | C2 (L8/L9) | 12.8 | 12.54 | 0.980 | kept |
| 17–18A | L10 | 11.8 | 11.50 | 0.975 | kept |
| 19–20 | L11 | 9.2 | 8.98 | 0.977 | kept |
| 21–22 | L12 | 9.1 | 8.83 | 0.971 | kept |

The median figure/data ratio is 0.987, and every element except L6 lies within 1.6% of that median, which is measurement noise. No rim was repainted. The drawn stop sits about 5.7 px (0.49 mm) before S12, against the model's 0.6 mm.

L6. Fig. 9 draws L6 as a square-cut box, 0.959 of the C1 box height, 4.4% above the median shape. The stored 11.61 mm is 0.919 of C1. The tele axial beam needs 11.866 mm at S10 and 12.071 mm at S11 in the real-ray trace. The engine's vignetting analysis passes 92.7% on axis at tele as stored, 98.8% with both faces at 11.99 mm, and 100% from 12.05 mm. The repository aperture census asks only 11.79 / 11.99 mm, because it refers the beam to the paraxial iris radius. Both faces at 12.07 mm would pass the full f/6.2 beam and reproduce the drawn L6:C1 proportion (0.956). This value fails the cross-gap check at S9→S10 under the default gapSagFrac 0.90: the combined sag is 2.69 mm in the 2.77 mm gap. The faces do not cross, leaving 0.08 mm at the rim. With the stored file, 0.98 is the smallest two-decimal gapSagFrac that admits 12.07 or 12.08 mm; 0.97 allows only 2.687 mm. With 11.99 mm on both faces, 0.96 would be enough. Changing gapSagFrac is outside this pass, so L6 stays at 11.61 mm and the tele aperture remains about f/6.44 until that change is made.

Clearance as stored. The image-circle floor reports no undersized surface. Field coverage reaches 21.65 mm at all 65 zoom positions. The surface validator reports OK. The real-ray trace flags only S10/S11 (CLIPS-AXIAL at tele). The engine half-field is 21.462° and the wide-open f-number is f/4.6, both unchanged by this pass. The local page was rendered at wide, middle, tele and close focus. The silhouette matches Fig. 9 apart from the shorter L6 step against C1. The close-focus render repeats infinity, since the model is infinity-only.

Maker diagram. Ricoh's construction drawing shows the same 12 elements in 10 groups and the same G1 / G2 / G3 grouping. The tenth element, the plastic asphere, is highlighted, and no other special glass is marked. It draws L6 at the full height of the C1 box and L10 taller than C2. Fig. 9 draws both a little shorter; the patent figure governs.

Open: L6 at 12.07 mm with `checks.gapSagFrac` 0.98, which restores the printed f/6.2 at tele, is left for a change that may set gapSagFrac. If it is applied, the header and the analysis text that state f/6.44 must be updated.

Coordinator follow-up (same day): L6 (S10/S11) raised from 11.61 to 11.99 mm, square, the least value that passes
the tele f/6.2 axial beam by the repo's aperture audit and within 0.3% of the 11.96 mm Fig. 9 draws. The S9→S10
air gap then needs `checks.gapSagFrac` 0.96 (0.95 is refused: 2.66 mm combined sag against 2.631 mm allowed of
2.770 mm; the faces do not cross). Tele on-axis transmission rises from 92.7% to 98.8% (about f/6.24); all 65
stations are now within 3% of the printed f-number. Engine half-field, wide f-number and stop radius are unchanged.
