# Audit Log — Nikon NIKKOR Z 28mm f/2.8

Patent: WO 2022/071249 A1

## 2026-06-04 — Sweep 1 local patent relabel

- Local patent source: `patents/WO2022071249A1.pdf` (untracked local file).
- The local PDF is image-based under `pdftotext -layout`; matching rows were cross-checked against Google Patents OCR for the same WO publication.

| Element / row | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L3 / row 5 | 2.00100 / 29.12 | `S-NPH1 (OHARA)` | `S-LAH99 (OHARA, patent nd/vd match)` | OHARA S-LAH99 clears the prior S-NPH1 mismatch. |
| L4 / row 7 | 1.80518 / 25.45 | `S-TIH14 (OHARA)` | `S-TIH6 (OHARA, patent nd/vd match)` | OHARA S-TIH6 round-trips the stored patent pair. |

## 2026-05-20 — Patent unavailable disposition

- The requested local patent review could not be completed because the untracked `patents/` folder does not contain `WO 2022/071249 A1`.
- No glass labels were changed. Candidate rows remain queued until the patent file is available locally.

## 2026-05-31 - Catalog-mismatch second-batch recheck

- Re-searched the local untracked `patents/` folder for WO 2022/071249 A1 / `071249`; no matching PDF was present.
- Nearby local files `US20220236544A1.pdf` and `US20220236544A1-2.pdf` were not used as substitutes because they are Fujifilm/Nagami zoom patents, not the cited Nikon Z 28mm family.
- No glass labels were changed, and no figure/SD check was possible without the cited patent file.

## 2026-08-21 — Resolver normalization and candidate audit

- Normalized L41 from `S-TIM 22` to official OHARA `S-TIM22`; the stored `1.64769 / 33.73` coordinate remains
  compatible with the existing catalog curve at `1.64769 / 33.79`.
- Rejected the old L11 `S-TIL 2` and L23 `S-TIH 18` spellings as material mismatches, not mere spacing errors.
  J-LLF6 reproduces L11 at `1.53172 / 48.78`, while J-SFH1 reproduces L23 at `1.80809 / 22.74`; both now supply
  qualified spectral proxies without assigning Nikon's production supplier.
- Synchronized the analysis. No prescription, APD, or geometry changed.

## 2026-09-08 — Source and live-view review

Local original WO2022071249A1 Example2: equation(A) p.20, Table2 pp.26–28 and Figure3 p.47 (600dpi). All19 modeled source rows,10 medium coordinates,3 conics and16 nonzero asphere coefficients verified. Sourcekappa1→standardK0 retained. S14 A8−6.64821e−10 is correct in the scan; English OCR−6.68421e−10 rejected.

- Separate filter20–21 omitted; correct final equivalent-air gap11.223→13.137852320675106mm, consistent with sourceBfa13.138. Removed stale claims that the camera model supplied the missing plate/gap. L24 compound resin remains.
- SourceFNO2.909, f28.824, fullfield76.058 surfaced; D17 relabeled from BF. Source0.19m physical object-image label retained; equivalent-air model gives0.189450650m and beta−.203245665. Sourcegap arrays conserve13mm and give G2/G3 objectward1.681/4.792mm, outer groups/stop fixed.
- Optical rims refined from40.927mm vertex-span calibration, excluding mechanical shoulders and callouts. No runtime trimming at0/.5/1. Surface/image-circle audits pass. All isolated medium focal lengths recalculated.
- L31 source1.53113/55.73 incompatible with oldS-BAL41. Keptunmatched531557; catalog/exact-coordinate web search did not establish a compatible commercial name. BSC6 index is similar but dispersion incompatible. Resin supplier/curing method and production/process claims removed or qualified.
- Three source regressions pass. Production baseline and local infinity/near/half/f16 inspected: near19cm D5/D13/D17=3.17/1.34/8.49 EFL24.89; half38cm gaps4.01/2.89/6.10 EFL26.76; f16 stop1.87mm.

UnresolvedL31 material remains follow-up. Batch21–30 fullgates/commit pending.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the equivalent-air D19 (13.137852 mm) with Table 2's physical rear stack (PDF p.27, 300 dpi): D19 = 11.223 mm,
  then `rearPlates` FL 1.600 mm, nd 1.51680, νd 63.88, and Bf = 0.860 mm to the image (fixed; G4 does not move in
  focus). Glass `J-BK7` (Hikari, exact 1.51680 / 63.88 coordinate).
- Paraxial check against the previous data: EFL identical and paraxial defocus unchanged at infinity and near focus,
  because the old fold was stored unrounded. Physical track grows by 0.545 mm to the source TL 54.610 mm.

## 2026-10-27 — Rim-cut figure review

Figure 3 (PDF p. 47, native 300 ppi 1-bit raster, rotated object-left) was read on its label-free half, element by
element, for flat lands square to the axis at the rims of concave faces, the shape `rimCutDepthMm` draws. Pixel pairs
are cap end / element edge from the axis; L11 reads the same on the other half (205 / 221.5 px). Every land starts at
the old `sd`, which an earlier audit put at the cap end, and the element edge matches the partner face's `sd`. So each
face now takes its partner's `sd` and the cut sits at the old one, to the rounded depth: the land is drawn, and the
clear radius goes from the old rim to the cut radius, 6.2 → 6.2088 mm on 2, 6.9 → 6.8993 mm on 9, 12.3 → 12.3153 mm
on 14A and 14.6 → 14.6106 mm on 18. The beams reach 6.1322, 6.7592, 12.1158 and 14.3628 mm there (rule section below).

| Surface | Figure land (px, q) | Cut depth | Cut radius | sd | Largest stated axial ray |
|---|---|---|---|---|---|
| 2 (L11 rear, R 18.072) | 204 / 220.5, 0.925 | 1.10 mm | 6.21 mm | 6.2 → 6.7 | 5.00 mm |
| 9 (L23 front, R −11.081) | 225.5 / 266.5, 0.846 | 2.41 mm | 6.90 mm | 6.9 → 8.2 | 4.31 mm |
| 14A (L31 front, asph) | 403.5 / 431.5, 0.935 | 2.35 mm | 12.32 mm | 12.3 → 13.1 | 4.44 mm |
| 18 (L41 front, R −34.466) | 480.5 / 530.5, 0.906 | 3.25 mm | 14.61 mm | 14.6 → 16.1 | 2.43 mm |

- q × the partner `sd` gives 6.20 / 6.94 / 12.25 / 14.58 mm, each within 0.05 mm of the old `sd`.
- The other concave faces run to their element edges in the figure: 1 (L11 front, 0.33 mm sag), 8 (L22 rear) and 19
  (L41 rear); no cut. The short square step on L22's front outside L21's rim is the cemented junction (7), not a land.
- No cap can reach the stop plane: STO sits between flat surface 4 and convex surface 6.
- The aperture audit is unchanged (one station within 3 % of f/2.909; no rim, trace or failed rows, no rim-cut
  limiter); the surface audit passes and the image-circle audit finds nothing undersized. Each cut clears every traced
  ray of the wide-open beams by its margin (rule section below) and clips none of them.
- The rendered section now draws L11, L23, L31 and L41 with square edges and flat lands like Figure 3, where the old
  unequal rims drew slanted edges.

## 2026-10-27 — Rim-cut beam rule

An inferred rim cut must clear every traced ray of the wide-open beams by the larger of 0.05 mm and 0.3 % of its
radius, at every field, zoom and focus state, traced through the lens without its inferred cuts (`validateRimCutBeams`,
set in the #928 review). The beams are traced on the paraxial stop of #933 (EPD = F/N) with the rule's current search,
which follows beams that vanish between screened fields, seeds from the stop and refines near cuts on the full
measurement. All four cuts from the figure review above clear the beams by their margins, and none moved:

| Surface | Old rim → cut radius | Reach (focus, field) | Clearance | Margin | Spare |
| --- | --- | --- | --- | --- | --- |
| 2 | 6.2 → 6.2088 mm | 6.1322 mm (infinity, 26.18°) | 0.0766 mm | 0.0500 mm | 0.0266 mm |
| 9 | 6.9 → 6.8993 mm | 6.7592 mm (close focus, 39.61°) | 0.1401 mm | 0.0500 mm | 0.0901 mm |
| 14A | 12.3 → 12.3153 mm | 12.1158 mm (infinity, 37.96°) | 0.1994 mm | 0.0500 mm | 0.1494 mm |
| 18 | 14.6 → 14.6106 mm | 14.3628 mm (infinity, 37.96°) | 0.2478 mm | 0.0500 mm | 0.1978 mm |

**Figure scale and land length.** Measured on the native 300 ppi raster of Figure 3 (PDF p. 47): the vertices of
surfaces 1 and 19 lie 1346 px apart on the axis, against the 40.927 mm vertex span, so 32.89 native px per lens mm.
The review's edge pixels over the partner `sd` agree (32.9 px/mm; 32.5 on L23). Edge px is sd × 32.89, and one native
pixel at the cap end and at the edge gives q ± (1 + q) / (edge px). The cuts sit at the old rims rather than at q × sd.

| Surface | Edge px | q | q range | Cut radius ÷ sd | Land |
| --- | --- | --- | --- | --- | --- |
| 2 | 220.4 | 0.925 | 0.916–0.934 | 0.9267 | 0.4912 mm |
| 9 | 269.7 | 0.846 | 0.839–0.853 | 0.8414 | 1.3007 mm |
| 14A | 430.9 | 0.935 | 0.931–0.940 | 0.9401 | 0.7847 mm |
| 18 | 529.5 | 0.906 | 0.902–0.909 | 0.9075 | 1.4894 mm |

Each cut radius ÷ sd lies inside its q range except 14A's, 0.9401 against a top of 0.9396. Every land is longer than
the 0.1 mm minimum, and no q range reaches 1. The surface audit and the beam rule pass.

14A is the one asphere whose `sd` this review raised (12.3 to 13.1 mm). Its slope keeps its sign out to the new rim
and only levels off (−0.309 at 11.79 mm, −0.312 at 12.45 mm, −0.311 at 13.10 mm; `audit:surface --scan 14A 13.1`), so
the polynomial does not turn over inside the land, which is all it shapes past the 12.3153 mm cut radius.

## 2026-10-29 — Surface-height and concave-rim reinspection

Reopened `patents/WO2022071249A1.pdf`, Example 2, Figure 3 (PDF p. 47), and inspected every element on a 600 dpi crop. The 1346 native-pixel first-to-last-vertex span / 40.927 mm gives 32.89 native px/mm. The existing cuts on 2, 9, 14A and 18 already draw the four resolved square lands at their measured element-edge heights, with the beam margins documented above. No additional air-side land or taller outside edge is resolved. The L22 step belongs to a cemented junction; the nearly flat or continuously curved faces do not justify extensions or another cut.

No geometry changed. `audit:surface` passes, including the inferred-cut beam rule; `audit:image-circle` reports 0 undersized and 0 skipped. Existing cuts and source optical apertures were retained.

## 2026-10-29 — Glass-only reinspection

Freshly rendered and inspected `patents/WO2022071249A1.pdf`, Example 2, Table 2 on PDF pp. 26–28. All ten modeled lens media (nine physical elements) and the FL rear plate match the printed d-line nd/νd pairs. Resin L24r 1.56093/36.64, L31 1.53113/55.73 and FL 1.51680/63.88 are retained exactly.

Individually checked and retained the eight coefficient-backed lens proxies: L11 J-LLF6, L12/L24g/L32 S-LAH65V, L21 S-LAH99, L22 S-TIH6, L23 J-SFH1 and L41 S-TIM22; FL resolves to J-BK7. The resin and L31 remain unresolved. A fresh current-catalog scan finds no row within the existing broad nd/νd guard for either unresolved coordinate. No line-index or partial-dispersion measurements appear in the source table; all APD flags remain false. The analysis already qualifies supplier/chemistry and the unmatched L31 coordinate.

No change was required. `assertCatalogConsistent()` and the scoped resolver review pass; the three shared glass suites pass (94 tests). Geometry is unchanged.
