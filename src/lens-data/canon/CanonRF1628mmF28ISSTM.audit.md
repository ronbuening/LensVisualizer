# Audit Log — Canon RF 16-28mm f/2.8 IS STM

Patent: JP 2024-101615 A, Numerical Example 1.

## 2026-10-01 — Optical rims, glass and display metadata

| Element / field | Before | After | Source and reason |
| --- | --- | --- | --- |
| Display name | CANON RF 16-28mm f/2.8 IS STM | CANON RF 16-28mm f/2.8 IS STM (patent-family model) | Example 1, PDF pp. 15–16, versus Canon's product description: the selected embodiment has no resin layer and five νd ≥ 75 elements. Canon describes a replica asphere and four UD elements. |
| E7, E12, E13 `glass` | “only exact-class catalog match found” | FCD705 / FCD100 class, supplier-neutral spectral proxy | Example 1 nd/νd/θgF identifies dispersion coordinates, not production suppliers. |
| All surfaces `sd` | Existing inferred apertures | Retained | Fig. 1, PDF p. 24, inspected at 600 dpi; optical rims closely match after excluding neighboring edges. |

The wide drawing's axial glass span gives 104.61 µm/px. Its E2 automated envelope selected the taller neighboring E1 edge; the actual E2 rim agrees with 18.4 mm. The stepped front-group rims and all three cemented pairs were inspected. Surfaces 2A, 5 and 26 remain smaller than the drawing to preserve cross-gap clearance; enlarging them from neighboring rims would not be source-faithful optical-aperture work.

All 16 visible elements already have coefficient-backed catalog resolution. The patent's θgF column was checked against the data-file `dPgF` values using the engine baseline 0.6438 − 0.001682·νd; the authored deviations preserve the source rather than substituting catalog partial dispersion. No catalog addition is required.

The modeled wide-end field reaches approximately 19.33 mm image height before surface 2A clips, above the source's 17.55 mm evaluated image height but below the full-frame corner. The patent explicitly allows electronic distortion correction (¶0039); retain that source-field boundary instead of enlarging the optical rim to force corner coverage. Reconstructed close-focus stations remain model assumptions.

## 2026-10-01 — Live annotations, travel and spectral review

| Field | Before | After | Source and reason |
| --- | --- | --- | --- |
| `focusDescription` | Internal enum prefix | Plain “Inner focus” text | Preserve the reconstruction disclosure while making the rendered explanation readable. |
| `sd`, glass/APD fields | Existing source-qualified values | Retained | Fig. 1, PDF p. 24, and Example 1 tables, PDF pp. 15–16: all element outlines, three doublets, two aspheric elements and five inferred APD elements reviewed. |

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

| Element | νd | Source figure (PDF p. 15) | θgF − engine line | Stored before | Stored after |
| --- | ---: | --- | ---: | ---: | ---: |
| E1 | 37.22 | θgF 0.5770 (surface 1) | −0.004196 | −0.0042 | −0.0042 (unchanged) |
| E2 | 46.50 | θgF 0.5572 (surface 3) | −0.008387 | −0.0084 | −0.0084 (unchanged) |
| E3 | 81.61 | θgF 0.5386 (surface 5) | +0.032068 | 0.0321 | 0.0321 (unchanged) |
| E4 | 35.25 | θgF 0.5824 (surface 7) | −0.002109 | −0.0021 | −0.0021 (unchanged) |
| E5 | 58.54 | θgF 0.5390 (surface 9) | −0.006336 | −0.0063 | −0.0063 (unchanged) |
| E6 | 49.63 | θgF 0.5508 (surface 11) | −0.009522 | −0.0095 | −0.0095 (unchanged) |
| E7 | 75.50 | θgF 0.5405 (surface 14) | +0.023691 | 0.0237 | 0.0237 (unchanged) |
| E8 | 81.61 | θgF 0.5386 (surface 16) | +0.032068 | 0.0321 | 0.0321 (unchanged) |
| E9 | 39.59 | θgF 0.5729 (surface 17) | −0.004310 | −0.0043 | −0.0043 (unchanged) |
| E10 | 23.79 | θgF 0.6191 (surface 19) | +0.015315 | 0.0153 | 0.0153 (unchanged) |
| E11 | 43.70 | θgF 0.5721 (surface 20) | +0.001803 | 0.0018 | 0.0018 (unchanged) |
| E12 | 95.10 | θgF 0.5326 (surface 22) | +0.048758 | 0.0488 | 0.0488 (unchanged) |
| E13 | 95.10 | θgF 0.5326 (surface 24) | +0.048758 | 0.0488 | 0.0488 (unchanged) |
| E14 | 42.72 | θgF 0.5650 (surface 25) | −0.006945 | −0.0069 | −0.0069 (unchanged) |
| E15 | 59.46 | θgF 0.5418 (surface 27) | −0.001988 | −0.0020 | −0.0020 (unchanged) |
| E16 | 70.44 | θgF 0.5303 (surface 29) | +0.004980 | 0.0050 | 0.0050 (unchanged) |

- Left as stored: all sixteen values. Each is the patent's four-decimal θgF on the engine's line rounded to four decimals, which is the precision the source carries; values already right are not re-rounded to six decimals.
- No element authors nC, nF or ng and none uses `indexReference: "e"`, so the trace rebuilds every g-line index from these `dPgF` values.
