# FujifilmFujinonXf8mmf35RWR — patent and glass audit

## 2026-09-14 — Patent outlines, glass, and metadata

Source: `JP2023001878A.pdf, p. 38, Fig. 20; Example 7`.

600 dpi manual rim widths, excluding labels and motion brackets, imply approximately 10.5 mm at the plano L13 face and 8.0 mm at L15 (about 29 micrometers/pixel). L14 cannot reach the roughly 9.1 mm drawing rim without violating its preceding gap. The three changes improve the front-to-stop taper while preserving geometry limits.

| Surfaces | Previous SD (mm) | Revised SD (mm) | Reason |
|---|---|---|---|
| 5 / 6 | 7.4 / 6.5 | 10.5 / 9.2 | L13 optical outline; rear capped below the steep rim |
| 7 / 8 | 6.4 / 6.0 | 7.6 / 7.1 | L14 widened toward figure, limited by shared-gap clearance |
| 9A / 10A | 6.0 / 5.9 | 8.0 / 7.9 | L15 optical rims, excluding movement bracket |

At the revised heights the spherical-reference departures are -397.7 / -270.0 micrometers for 9A / 10A. The analysis values were updated. Other SDs were retained, including the steep front asphere.

Added the source-published CDGM H-TF5 curve for L17 (November 2021 catalog, printed p. 290), with code 654395 as published; the old 654396 class label was not an exact CDGM code. Removed catalog-derived nC/nF/ng from L13, L14, L21, L22, and L25. All twelve elements now use coefficient-backed curves while keeping patent-derived dPgF authoritative. Retained the patent-supported APD annotations for L22/L25; no production supplier is asserted.

Structured assignee spelling follows the current catalog canonical name `Fujifilm Corporation`; the publication capitalization remains a source spelling, not a separate entity.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent fold (11.604956 mm) with the patent's physical rear stack from Table 19 (p. 27): d22 =
  8.622 mm, then `rearPlates` PP 2.850 mm, nd 1.51680, νd 64.20, and 1.104 mm air to the image. PP carries the N-BK7
  label (catalog-compatible for 1.51680 / 64.2) and dPgF −0.00152 from the printed θgF 0.5343.
- Paraxial check against the previous data: EFL identical and defocus unchanged (0.000507 mm before and after),
  because the old stored gap was the exact fold. Physical track grows by 2.850 × (1 − 1/1.51680) = 0.971 mm, to
  68.915 mm from surface 1 to image.

## 2026-10-27 — Rimmer localization audit (asphere data)

Source: `JP2023001878A.pdf`, Example 7; p. 14 ¶0064–¶0068 (conventions and sag equation), p. 27 Tables 19–20, p. 28 Table 21, p. 29 Table 22 Example-7 column, p. 38 Figures 20–22. Numerical tables were read from rendered images rather than the OCR text layer.

| Item | Before | After | Evidence / disposition |
|---|---|---|---|
| All R/d/nd/vd, source rows 1–24 | Table-19 transcription, including PP | Unchanged | Every row matches p. 27; source 14 maps to STO, 23–24 to rearPlates. |
| 3A/4A/9A/10A/18A/19A terms | Odd and even A4–A16; K = KA − 1; A3 omitted as zero | Unchanged | All six KA and A3–A16 columns match Table 21, p. 28; p. 14 equation confirms conversion and millimeter units. |
| 10A / 19A sd (mm) | 7.9 / 7.8 | 7.9 / 7.8 | Below first turnovers near 7.93 / 7.91 mm; no turnover cap justified. |
| Other modeled rims, stop and PP chain | Existing estimates and published rear stack | Unchanged | No effective diameters published; Figure 20 supplies no smaller usable-zone boundary. On-axis f/3.60 beam and corner chief ray remain contained. |
| Data header | No Rimmer qualification | Added source check and two unresolved RI refusals | Distinguishes verified transcription from inferred usable aperture. |
| Analysis | No Rimmer qualification | Added localization/domain limitation and source-plot comparison | Explains outer-pupil tail without claiming a coefficient correction or valid edge RI. |

Table 20 prints f = 8.211 mm, Bf = 11.604 mm, FNo. = 3.60 and 2ωm = 124.4°. The tab reaches 62.17°, within the source half-field; the field setting is retained. Table 22 independently reprints ωm = 62.2° and the air-converted total-length ratio 4.363. The physical axial sum is 68.915 mm; replacing the 2.850 mm PP thickness by t/n gives 67.943956 mm.

The asphere triage reproduces turnovers of about 12.51 mm (3A), 7.93 mm (10A), 8.38 mm (18A), and 7.91 mm (19A), all beyond authored rims; no turnover is found for 4A or 9A over the scanned interval. L23's approximately 7.5 mm figure outline is consistent with its 7.5/7.8 mm authored faces. Earlier clearance-limited L13/L14 estimates remain documented by the September audit. No semi-diameter or quoted rim departure changed.

At the maximum field, an aperture-checked ray at normalized stop (−0.08,−0.92) is transmitted through 19A at about 7.64 mm and has a −3.96 mm meridional image error. At (−0.08,−0.80), 19A is crossed at 7.32 mm and the image error is −0.576 mm. The normal flattens rapidly in this zone; the final cemented pair amplifies the direction difference before PP. The unchecked helper's (0,−0.95) ray is blocked at surface 20 when rim clipping is enabled. It is excluded from the transmitted-ray conclusion.

The printed prescription broadly reproduces Figure 21's d-line LSA, close-ray astigmatism and distortion: LSA −0.012/−0.033/−0.042/−0.040 mm at pupil 1/0.85/0.7/0.5; edge T/S +0.079/−0.029 mm; edge distortion −8.860%. Figure 22's ±50 µm transverse axes do not represent the large modeled outer-pupil tails. Unknown effective apertures prevent using that mismatch alone to prove a coefficient erratum. There is no isolated printed-value contradiction to justify a single-slip replacement or a source.errata entry.

### Follow-ups

Model limitation retained: the final two vignetting samples still refuse RI, at 59.2° with cosine-map-folds (maxDev 0.0147) and 62.2° with rays-not-localized (0.0784). Earlier samples retain RI. Obtain independent clear-aperture information or investigate the outer-pupil trace/domain in the shared engine before changing coefficients, shrinking rims, or claiming edge illumination. No queue file was edited within this single-lens assignment.
