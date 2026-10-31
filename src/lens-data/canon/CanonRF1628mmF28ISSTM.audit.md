# Audit Log — Canon RF 16-28mm f/2.8 IS STM

Patent: JP 2024-101615 A, Numerical Example 1.

## 2026-10-01 — Optical rims, glass and display metadata

| Element / field      | Before                                 | After                                                  | Source and reason                                                                                                                                                                           |
| -------------------- | -------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Display name         | CANON RF 16-28mm f/2.8 IS STM          | CANON RF 16-28mm f/2.8 IS STM (patent-family model)    | Example 1, PDF pp. 15–16, versus Canon's product description: the selected embodiment has no resin layer and five νd ≥ 75 elements. Canon describes a replica asphere and four UD elements. |
| E7, E12, E13 `glass` | “only exact-class catalog match found” | FCD705 / FCD100 class, supplier-neutral spectral proxy | Example 1 nd/νd/θgF identifies dispersion coordinates, not production suppliers.                                                                                                            |
| All surfaces `sd`    | Existing inferred apertures            | Retained                                               | Fig. 1, PDF p. 24, inspected at 600 dpi; optical rims closely match after excluding neighboring edges.                                                                                      |

The wide drawing's axial glass span gives 104.61 µm/px. Its E2 automated envelope selected the taller neighboring E1 edge; the actual E2 rim agrees with 18.4 mm. The stepped front-group rims and all three cemented pairs were inspected. Surfaces 2A, 5 and 26 remain smaller than the drawing to preserve cross-gap clearance; enlarging them from neighboring rims would not be source-faithful optical-aperture work.

All 16 visible elements already have coefficient-backed catalog resolution. The patent's θgF column was checked against the data-file `dPgF` values using the engine baseline 0.6438 − 0.001682·νd; the authored deviations preserve the source rather than substituting catalog partial dispersion. No catalog addition is required.

The modeled wide-end field reaches approximately 19.33 mm image height before surface 2A clips, above the source's 17.55 mm evaluated image height but below the full-frame corner. The patent explicitly allows electronic distortion correction (¶0039); retain that source-field boundary instead of enlarging the optical rim to force corner coverage. Reconstructed close-focus stations remain model assumptions.

## 2026-10-01 — Live annotations, travel and spectral review

| Field                  | Before                           | After                    | Source and reason                                                                                                                                            |
| ---------------------- | -------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `focusDescription`     | Internal enum prefix             | Plain “Inner focus” text | Preserve the reconstruction disclosure while making the rendered explanation readable.                                                                       |
| `sd`, glass/APD fields | Existing source-qualified values | Retained                 | Fig. 1, PDF p. 24, and Example 1 tables, PDF pp. 15–16: all element outlines, three doublets, two aspheric elements and five inferred APD elements reviewed. |

At the published W/M/T states, L1's center lies −126.310/−115.932/−116.114 mm from the fixed image plane, retaining its small tele-end reversal. L2 and L4 move objectward together (their changes differ only by 0.001 mm rounding); L3 moves objectward through zoom and by another 3.630/4.969/5.795 mm for reconstructed near focus. L5 stays fixed. This agrees with Fig. 1's objectward focus arrow and the published variable gaps. No spacing order or sign change is justified.

All 16 elements retain coefficient-backed curves and the source-derived partial-dispersion deviations. The live inspector distinguishes inferred APD from patent-explicit APD. Structured **Canon Inc.** already shares the canonical modern assignee identity; no duplicate organizational node needs consolidation.

## 2026-10-01 — Production-diagram correlation and display name

- Removed the requested `(patent-family model)` suffix from the display name and analysis title; source qualifications remain in the subtitle and analysis.
- Compared Figs. 1/3/5/7 on local patent PDF pp. 24–25 with Canon's official 16 mm construction diagram in its January 23, 2025 [press release](https://corporate.jp.canon/newsroom/newsrelease/2025/pr-0123) and [product specifications](https://personal.canon.jp/product/camera/rf/rf16-28-f28/spec). Example 1 is the closest overall architectural match: front four-element sequence, pre-stop singlets, three cemented doublets including the IS unit, rear asphere and final positive lens. Its first/penultimate asphere positions also match Canon's markings. Example 3 has a similar silhouette but its front asphere is on E2; Examples 2/4 add a rear element, and Example 2 reverses the IS doublet interface orientation.
- This visual correlation does not establish exact production radii, glass or manufacturing process. Retained the tabulated prescription, absent replica layer, source field boundary and focus reconstruction disclosures. The five elements with νd ≥ 75 are a numerical count, not five manufacturer-confirmed Canon UD elements.

## 2026-10-08 - dPgF checked against the patent

- Reviewed local `patents/JP2024101615A.pdf` (27 pages). ¶0054 on PDF page 9 defines only the absolute partial dispersion ratio, θgF = (Ng − NF)/(NF − NC), next to νd = (Nd − 1)/(NF − NC). The patent states no normal line and no deviation anywhere: its one partial-dispersion condition, (5) 0.57 ≤ θgF1m ≤ 0.64 (claim 4 on PDF page 2, ¶0057 on PDF page 9, narrowed in (5a)/(5b)), is on the absolute θgF of the highest-index L1 lens, and Table 1 lists that absolute value.
- Numerical Example 1's surface data on PDF page 15 prints an absolute θgF column for every glass surface, so every element falls under the absolute-PgF case: the correct stored value is θgF − (0.6438 − 0.001682·νd).
- A screen that compares stored values with catalog curves flagged this file (1 element fit a 0.64833 − 0.0018·νd reading, 7 fit the engine line, 8 undecided). That is a false alarm. The flagged cases are where the coordinate-matched catalog glass has a slightly different PgF from the patent's printed θgF (for example E10: patent 0.6191, OHARA S-TIH53 curve 0.6205); the patent's figure is the source. All 16 stored values equal the printed θgF minus the engine line to within 0.00007, so no `dPgF`, `apdNote` or comment changed in the data file, and the analysis sidecar needed no edit (it already states that ΔPgF is the patent θgF minus 0.6438 − 0.001682·νd).

| Element |    νd | Source figure (PDF p. 15) | θgF − engine line | Stored before |        Stored after |
| ------- | ----: | ------------------------- | ----------------: | ------------: | ------------------: |
| E1      | 37.22 | θgF 0.5770 (surface 1)    |         −0.004196 |       −0.0042 | −0.0042 (unchanged) |
| E2      | 46.50 | θgF 0.5572 (surface 3)    |         −0.008387 |       −0.0084 | −0.0084 (unchanged) |
| E3      | 81.61 | θgF 0.5386 (surface 5)    |         +0.032068 |        0.0321 |  0.0321 (unchanged) |
| E4      | 35.25 | θgF 0.5824 (surface 7)    |         −0.002109 |       −0.0021 | −0.0021 (unchanged) |
| E5      | 58.54 | θgF 0.5390 (surface 9)    |         −0.006336 |       −0.0063 | −0.0063 (unchanged) |
| E6      | 49.63 | θgF 0.5508 (surface 11)   |         −0.009522 |       −0.0095 | −0.0095 (unchanged) |
| E7      | 75.50 | θgF 0.5405 (surface 14)   |         +0.023691 |        0.0237 |  0.0237 (unchanged) |
| E8      | 81.61 | θgF 0.5386 (surface 16)   |         +0.032068 |        0.0321 |  0.0321 (unchanged) |
| E9      | 39.59 | θgF 0.5729 (surface 17)   |         −0.004310 |       −0.0043 | −0.0043 (unchanged) |
| E10     | 23.79 | θgF 0.6191 (surface 19)   |         +0.015315 |        0.0153 |  0.0153 (unchanged) |
| E11     | 43.70 | θgF 0.5721 (surface 20)   |         +0.001803 |        0.0018 |  0.0018 (unchanged) |
| E12     | 95.10 | θgF 0.5326 (surface 22)   |         +0.048758 |        0.0488 |  0.0488 (unchanged) |
| E13     | 95.10 | θgF 0.5326 (surface 24)   |         +0.048758 |        0.0488 |  0.0488 (unchanged) |
| E14     | 42.72 | θgF 0.5650 (surface 25)   |         −0.006945 |       −0.0069 | −0.0069 (unchanged) |
| E15     | 59.46 | θgF 0.5418 (surface 27)   |         −0.001988 |       −0.0020 | −0.0020 (unchanged) |
| E16     | 70.44 | θgF 0.5303 (surface 29)   |         +0.004980 |        0.0050 |  0.0050 (unchanged) |

- Left as stored: all sixteen values. Each is the patent's four-decimal θgF on the engine's line rounded to four decimals, which is the precision the source carries; values already right are not re-rounded to six decimals.
- No element authors nC, nF or ng and none uses `indexReference: "e"`, so the trace rebuilds every g-line index from these `dPgF` values.

## 2026-10-30 — Scoped original shoulder follow-up and runtime qualification

Reused the completed 2026-10-01 shape/glass and 2026-10-08 partial-dispersion coverage without changing those dates. Reopened the reproducible missing S2A free-end shoulder against the original `patents/JP2024101615A.pdf`, Numerical Example 1: all surface/material rows and three aspheres on PDF pp. 15–16; d/F/C/g and partial definitions ¶0054 p. 9 and ¶0094 p. 14; Fig. 1 and Fig. 2A–C p. 24. All 30 R rows, 26 fixed d rows, four source infinity-gap schedules, three aspheres, 16 source pairs and 16 absolute partials were directly rechecked. No protected optics or controls changed.

| Surface / field      | Disposition                                                    | Evidence / retained constraint                                                                                                                                                                                                      |
| -------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| S2A                  | Added outer `rimExtensionSd: 23.6`; clear `sd: 17.3` unchanged | Native Fig. 1 resolves E1's outer shoulder. Its axial wall remains cap-anchored, without pretending that the drawing proves an exact piston or restores the clipped optical aperture.                                               |
| S2A trial clear 18.4 | Rejected                                                       | Drawing-inferred optical cap gives 6.340 mm intrusion versus guard 5.948 mm in physical air 6.609 mm. Positive physical gap remains, but the unchanged guard fails. This is not a printed aperture.                                 |
| S5 trial outer 18.1  | Rejected                                                       | Combined intrusion 9.347 mm exceeds physical air 9.218 mm and guard 8.296 mm; existing clear 15.9 and taper retained.                                                                                                               |
| S26 trial outer 10.9 | Rejected                                                       | Combined intrusion 3.874 mm exceeds physical air 3.826 mm and guard 3.443 mm; existing clear 9.5 and taper retained.                                                                                                                |
| All 16 media         | Retained / qualified                                           | Explicit d reference on each; all 16 compatible curve selections and genuine rounded source-derived dPgF values unchanged. Public labels qualify supplier, melt, chemistry and process. No numeric override removed.                |
| Five APD tags        | Inferred, retained                                             | E3/E7/E8/E12/E13 are not source-labeled anomalous. Condition (5) concerns absolute θgF of E4 only; the source publishes no deviation normal line.                                                                                   |
| Iris                 | Controls retained; prose corrected                             | Current radii 7.894212 / 9.779186 / 10.462193 mm, paraxial F2.9; real collimated EFL/input-diameter 2.959146 / 3.003903 / 3.026352. Old 8.062 / 10.158 / 10.966 are nominal-input ray heights at the stop, not physical iris radii. |

Figure 1's extracted native JPEG is 1294 × 1285 at approximately 394 ppi. About 791 native pixels span the wide active 126.889 mm, giving 6.24 px/mm with practical ±0.8 mm rim uncertainty. The 600-dpi page render used earlier was upsampling, not native detail. Brackets, stop, focus arrow and image-plane ink were excluded. All element ends, three curved cemented interfaces and aspheres were inspected; no opaque interface lands, disconnected resin wings, source plate, inferred cut or unsupported equal-height block was added. The alternative resin-layer examples are not this configuration.

The printed real-ray half-fields are 54.532° / 42.075° / 38.744° at image heights 17.55 / 20.10 / 20.46 mm. These stay distinct from a generic format corner. Surface and image-circle checks pass. The 65-position geometry-identical clone passes aperture throughout, but field coverage is ≥99% at 60/65 only: five early wide positions remain S2A-limited at 89.263% / 91.461% / 93.726% / 96.111% / 98.560%. Wide reachable edge 19.325 mm remains above the source 17.55 mm and below generic 21.65 mm. Worst intermediate infinity BF displacement −0.786644 mm is an illustrative interpolation limit, not a published cam correction.

The 65 × 7 × 3 × 97 current-iris grid has 390 positive actual Gaussian finite controls, no virtual controls and collimated infinity. All axial bundles clear. Two infinity wide-format chief seeds are unbracketed and three other early infinity generic-format chiefs clip at S2A. Of 132,405 planned rays, 132,211 trace, with 19,494 ordinary pupil clips and 66 independently bounded next-surface S2A aspheric cap misses, zero unexplained interior failures and zero unaimed samples. A separate positive image-plane-distance supplement (250 / 213 / 200 mm divided by focus) retains these restrictions, with 19,047 ordinary clips and 68 bounded cap misses. These finite grids scale object height by paraxial magnification and do not force the actual distorted image edge.

Inverse finite image-edge roots at five zooms and focus 0.25 / 0.5 / 1 target the source-interpolated boundary and actual generic 21.65 mm corner. Of 30 attempts, 27 converge with clear actual-aperture chiefs; three wide generic corners are unbracketed. Maximum residual is 0.000000191 mm. Their 2,619 pupil rays include 1,089 ordinary clips and five bounded S2A aspheric cap misses. These reconstructed finite states do not establish a published finite field or full-pupil clearance. The separate source-height endpoint check has 1,746 rays, clear axial/chief rays, 236 ordinary clips and three bounded cap misses.

Bounding-sphere vector launch over 65 zooms × three focus positions gives 56,745 source-range angular rays with clear axial/chief rays, 6,322 ordinary clips and 19 bounded S2A cap misses. This is angular collimated evidence even at nonzero focus. A separate 585 extreme 80°/89°/90° attempts leaves 560 chief seeds unbracketed. No extreme-field coverage is claimed.

Actual final SVGs at all source zooms and infinity/middle/close focus were compared with native Fig. 1. All 1,365 contour states contain 16 connected, closed, finite paths with zero renderer trim. Source fidelity, these sampled runtime restrictions and family-level production correlation remain separate; replica/UD-count differences remain unresolved production limits. See the [analysis follow-up](CanonRF1628mmF28ISSTM.analysis.md#14-original-source-shoulder-follow-up-and-runtime-scope--2026-10-30).

## 2026-10-31 — Scoped source-partial/catalog followup

Preserve October 1 whole review, October 8 partial check and October 30 shoulder/runtime dates. Rechecked original JP2024101615A Numerical Example 1, table p. 15, definitions paragraph 0054 p. 9/0094 p. 14 and Fig. 1 p. 24. All sixteen source θ cells are absolute ratios; no source normal line is printed. All sixteen genuine rounded engine dPgF conversions, explicit d-reference and inferred APD tags remain unchanged. No vendor ED deviation is copied into a lens field.

| Element | Current curve → candidate | F−C error before → trial (%) | Native PgF residual before → trial | Disposition           |
| ------- | ------------------------- | ---------------------------: | ---------------------------------: | --------------------- |
| E4      | H-ZLaF4LA → TAFD35        |        -0.000959 → +0.000243 |        +0.000827679 → -0.000180148 | Adopt qualified curve |
| E9      | J-LASF013 → S-LAH63       |        -0.043728 → +0.009454 |        -0.000904729 → +0.000048640 | Adopt qualified curve |
| E10     | S-TIH53 → FDS90           |        +0.050683 → +0.022166 |        +0.001410951 → +0.000102915 | Adopt qualified curve |
| E15     | M-BACD12 → K-SKLD200-M    |        -0.001519 → +1.141769 |        -0.001267136 → -0.000103760 | Retain current curve  |
| E16     | N-FK5 → FC5               |        +0.048617 → -0.001757 |        -0.001330373 → +0.000293543 | Adopt qualified curve |

E4/E9/E10/E16 adopt TAFD35/S-LAH63/FDS90/FC5, with exact primary HOYA/OHARA coefficient parity. E15 K-SKLD200-M trial is rejected: better unused native PgF does not justify +1.141769% C/F span error versus current −.001519%. FC5, rather than S-FSL5, best preserves E16 C/F among the closer-partial leads. All choices remain qualified spectral proxies, without historical supplier/melt/process identification. Coverage 16/16 unchanged; no new catalog row or source numerical/geometry/control change. Published absolute source ratios remain authoritative at g and all prior finite/field/source constraints remain applicable.
