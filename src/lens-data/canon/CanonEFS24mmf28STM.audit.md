# Audit Log - Canon EF-S 24mm f/2.8 STM

Patent: JP 2015-111192 A, Example 1

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/JP2015111192A.pdf`; local text confirms rows 1, 7, and 8.
- Updated L1 to `TAFD35 (HOYA)`, L3 to `N-LAK14 (Schott)`, and L4 to `NBFD15 (HOYA)`.
- L6 remains a no-catalog E-C3/BSC3-class coverage gap.

## 2026-06-25 - APD metadata backfill

### Phase 2 - Retained-information audit

- Rechecked JP 2015-111192 A Example 1 surface table: patent effective diameters map to the stored SDs by halving the published full diameters, with the documented flare-cut stop omission folded into surface 4 spacing.

### Phase 3 - Spectral / metadata enrichment

| Element / surface | Field  | Before     | After    | Justification                                                                                                    |
| ----------------- | ------ | ---------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| L5 / surface 8    | `apd`  | `inferred` | `patent` | Patent condition and Table 1 identify the RG3 material partial-dispersion requirement.                           |
| L5 / surface 8    | `dPgF` | omitted    | `0.0141` | Patent Table 1 gives theta_gF=0.544; normal-line value at vd=67.7 is 0.52995, so delta is approximately +0.0141. |

## 2026-10-30 — Original-PDF shape, flare-stop and glass review

- Original `patents/JP2015111192A.pdf`, Numerical Example 1: ¶0062–67 and tables pp. 10–11, Fig. 1 p. 15, Fig. 2 p. 16, Table 1 p. 14 and Table 2 p. 15. Native front page confirms Yuichi Gyoda, Canon Inc., filing 2013-12-06 and publication 2015-06-18. Prior audit dates above remain actual historical dates.
- Fresh images: Fig. 1 native 938 × 542 JPEG at approximately 199–200 ppi; about 0.075 mm/native pixel from the literal 29.14 mm vertex span. Two-pixel contour uncertainty about 0.15 mm; larger views add no native detail. Tables 1/2 native 968 × 402 and 979 × 337, approximately 200 ppi. Prescription/asphere body rendered freshly at 200 dpi.
- Source restoration separate from rim work: reinstated dimensioned source S5 flare stop as air-only `5P`, clear radius 4.065 mm, with original D4=4.00 and D5=3.26 replacing the previously combined D4=7.26. Refracting surfaces, all optical media, total spacing, aspheres and focus controls retained; rear labels/gap/annotations now match original S7–S13. Its peripheral clipping was previously absent.
- Main stop: source ED 8.78 gives radius 4.39 mm; ordinary-prime canonical f/2.88 rule gives 4.367463094 (−0.5134%). Exact source location/D6=3.24 retained; no illegal STO.sd, fake zoom or changed rule/tolerance. This source/model iris difference remains qualified for shared follow-up.
- Shape: restored six literal clear ED/2 values S1/S3/S4/S8/S9/S10 =8.065/6.445/5.055/5.685/6.835/7.615 mm. Added only resolved S4 concave-end outer shoulder6.9 ±0.2 mm with `rimExtensionSd`, keeping its clear5.055. All six elements, every concave end, bonded S8 and source S12 asphere inspected in actual SVG and native figure. No hybrid or separate cement medium, no inferred cuts or source exemptions. Generic camera-side-plate allowance ¶0032 supplies no Example1 plate dimensions/material, so no plate is invented.
- Rejected trials: eight free-face shoulders passed geometry but seven lacked a resolved cap/shoulder break in the native continuous physical curves, so those seven lands were removed. Common S7/S8/S9 sd7.3 also passes geometry but contradicts published4.65/5.685/6.835 clear radii; no equal-height block or bonded-interface land adopted. Unequal source clear caps and unrepresented physical margin silhouettes remain explicit.
- Glass: six original pairs checked; d587.6/g435.8/F486.1/C656.3 nm definitions ¶0030 p.6 and all numerical d references ¶0062 p.10 confirmed. Six explicit `indexReference: "d"` tags added. All six catalog curves are qualified proxies; labels/analysis synchronized (TAFD35, S-FSL5, N-LAK14, NBFD15, S-FPM2, S-BAL42). Removed unsupported supplier/chemical/molding certainty from analysis. Zero per-lens C/F/g indices existed/removed/added.
- Genuine L5 APD retained: Table1 θgF.544/ν67.7; printed condition5 normal line yields deviation.0140714, retained rounded `dPgF:.0141`, consistent with Table2 .014 and about±.0006 printed precision. This source-derived constraint is distinct from a catalog full-spectrum proxy; material chemistry remains unknown.
- Current-state iris/focus census 21 states, 3,087 aimed pupils, 63 chiefs all clear, 0 unaimed. Infinity/half/close bundles49/34/22,45/34/25,45/35/27. Axial 965/1,029: four edge samples clip literal S7 at focus 0.25–1; this same axial limit existed before restoration. Off-axis prior bundles49/41/22,45/41/27,45/41/29 show the restored flare stop's effect. At f/3.2 all 1,029 axial samples pass. Finite Gaussian object-to-image distances247.461747/160.060837 mm, m−.135201/−.270677; source publishes only infinity.
- Actual six SVG paths finite/closed/connected at all 21 states,0 hidden trim. Narrow canonical surface, image-circle0 undersized, source-station aperture 0 undersized surfaces and runtime corner coverage pass; no rim cuts. Published 29.14° chief 13.298948 mm is 93.82% of generic APS-C 14.175; approximate−2.65% distortion agrees with native Fig2 roughly−2.7±.2%. Runtime 30.8° corner is outside the printed source field, separately qualified.
- Structured unresolved source totals: literal R/d sum D 29.14 / track 64.82 versus Table 1 / summary 29.15 / 64.83. Historical rounding explanation is unproved; no numerical replacement/spacing fit. EFL 24.506198 vs 24.50, BFL 35.686740 vs retained 35.68 (residual+.006740). Source fidelity, sampled runtime results and production correlation remain separate.

## 2026-10-31 — Positive d-reference annotation correction

- Scope: reference-field contract only; reuse the completed 2026-10-30 whole source/shape/glass work and the earlier 2026-05-20/2026-06-25 glass/APD work. No whole-review count or new shape measurement.
- Exact source reinspection: **JP 2015-111192 A, Numerical Example 1**. ¶0030 p. 6 defines d/g/F/C as 587.6/435.8/486.1/656.3 nm, and ¶0062 p. 10 explicitly defines numerical ndi/νdi at d; the six pairs appear on pp. 10–11; Fig. 1 is on p. 15. The original d-line definition and selected prescription are PDF text, read in fresh 200 dpi page renders. Fig. 1, p. 15, is an embedded 938 × 542 JPEG at approximately 199–200 ppi; render enlargement adds no native detail.
- Removed only the 6 repeated positive d-line citations from the uncertainty-only `indexReferenceNote` field. Their provenance is preserved in the data header and analysis. Every `indexReference: "d"` remains. The previous annotations incorrectly selected `n (source)` / `ν (source)` inspector labels despite the explicit d definition.
- No actual uncertain-reference or rounding note was removed. Source pairs, genuine partials/line indices, APD, curve identities, R/d/sd, rim fields and all controls remain identical. Four compiled channel indices and sampled state geometry are checked against the frozen baseline; compatible-curve counts are unchanged. Existing source/clearance/production limitations remain; no new historical supplier, melt or chemistry is identified.
- Genuine L5 `dPgF: 0.0141`, `apd: "patent"` and the prior published θ/Abbe rounding discussion are retained unchanged.
