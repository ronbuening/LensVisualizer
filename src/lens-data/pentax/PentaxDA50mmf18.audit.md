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
