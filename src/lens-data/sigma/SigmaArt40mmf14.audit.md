# Audit Log - Sigma 40mm F1.4 DG HSM Art

Patent: JP 2020-012952 A, Example 1

## 2026-05-20 - Catalog-mismatch queue audit

### Patent evidence

- Local patent file checked: `patents/JP2020012952A.pdf`.
- Example 1 rows confirmed from local patent text:
  - S7 / L4: nd = 1.64769, vd = 33.84.
  - S11 / L7: nd = 1.60342, vd = 38.01.
  - S22 / L13: nd = 1.64769, vd = 33.84.
  - S24 / L14: nd = 1.62588, vd = 35.74.

### Glass corrections

| Element / surface | Before            | After            | Disposition                |
| ----------------- | ----------------- | ---------------- | -------------------------- |
| L4 / S7           | `E-FD15 (HOYA)`   | `E-FD2 (HOYA)`   | Exact nd/vd catalog match. |
| L7 / S11          | `E-F3 (HOYA)`     | `S-TIM5 (OHARA)` | Exact nd/vd catalog match. |
| L13 / S22         | `E-FD15 (HOYA)`   | `E-FD2 (HOYA)`   | Same glass as L4.          |
| L14 / S24         | `S-TIM35 (OHARA)` | `E-F1 (HOYA)`    | Exact nd/vd catalog match. |

### Catalog-search disposition

- Checked public OHARA/HOYA catalog data and existing coefficient-backed catalog entries.
- No new catalog entries were required.

### Analysis sync

- Updated affected element descriptions, glass table rows, and source notes.

## 2026-07-29 — Dispersion-coordinate follow-up

- Corrected L6 from `M-FCD500 (HOYA)` to `FCD705 (HOYA)`, the exact 1.55032 / 75.50 catalog match.
- Corrected L16 from `S-NBH56 (OHARA)` to `M-TAFD305 (HOYA)`, the exact 1.85135 / 40.10 catalog match.
- Synchronized the element narratives, glass table, manufacturing note, and sources.

## 2026-07-29 - Catalog-coordinate correction

- Corrected L9 from modern `S-NPH2` to historical OHARA `PBH21`, the exact 1.92286 / 20.88 row.

## 2026-10-06 - L10 / L15 glass label

- Rechecked JP 2020-012952 A Example 1 rows 17 and 26 in the local PDF text: both print nd 1.59282, νd 68.63 and
  θgF 0.54, matching the stored values.
- Corrected L10 and L15 from `PCD51 (HOYA)` to `FCD515 (HOYA) / FCD505 class`. HOYA PCD51 is the 593/670 phosphate
  crown (nd 1.59349, νd 67.00, ΔPgF +0.0055); the patent pair is the HOYA fluorophosphate FCD515 / FCD505 coordinate
  (1.59282, νd 68.63 before HOYA's 2019 value update, 68.62 since; ΔPgF +0.0156), which also agrees with the stored
  dPgF 0.015. The label previously resolved to M-PCD51 through an alias (Δnd −8e-4, Δνd −1.6) and now resolves to
  FCD515 (Δnd 4e-6, Δνd −0.01).
- Synchronized the two element lines, the glass table, the `apdNote` wording (fluorophosphate, not phosphate) and the
  catalog source line. No geometry, nd, νd or dPgF changed.

## 2026-10-08 - dPgF moved to the engine's normal line

- Patent formula: ¶0017 (local `patents/JP2020012952A.pdf`, PDF page 6), `ΔPgF = PgF − 0.64833 + 0.00180 × Vd`. The
  patent's line is therefore `0.64833 − 0.00180 × νd`, not the engine's `0.6438 − 0.001682 × νd`.
- Numerical Example 1 (PDF pages 11–12; ¶0059, PDF page 10, defines the column) prints an absolute `PgF` column for
  every glass row, but to two decimals only. The condition table (¶0093, PDF page 18) additionally prints condition (9)
  `VnA × ΔPgFnA = 5.36` for the G1A negative lenses (L2, L3; νd 95.10): the patent's own deviation is
  5.36 / 95.10 = +0.056362, so `PgF = 0.533512`, which rounds to the table's 0.53.
- Every stored `dPgF` was the two-decimal table `PgF` referred to the patent's line and rounded to three decimals
  (0.53 → +0.05285 at νd 95.10, 0.54 → +0.02757 at νd 75.50, 0.54 → +0.01520 at νd 68.63); the analysis glass table
  carries the same column for all eleven glasses.
- A two-decimal `PgF` has a ±0.005 rounding band (0.010 wide), wider than the gap between the two lines at these νd
  (0.0067, 0.0044, 0.0036). It settles which convention the stored numbers were in but cannot fix the value, so each value now
  comes from the most precise traceable figure and is checked against the printed two decimals: the patent's
  condition (9) for the FCD100 row, and the repo catalog curve for FCD705 and FCD515 (catalog-derived, stated in the
  `apdNote`), as in the two-decimal θgF rulings already recorded for other lenses.

| Element |    νd | Source figure                                                                                                                                       | Stored before | Stored after |
| ------- | ----: | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------: | -----------: |
| L2      | 95.10 | Patent condition (9) `VnA × ΔPgFnA = 5.36` (PDF page 18): patent deviation +0.056362, `PgF = 0.533512`; table `PgF = 0.53` (surface 3, PDF page 11) |         0.053 |     0.049670 |
| L3      | 95.10 | Same condition (9) figure; table `PgF = 0.53` (surface 5, PDF page 11)                                                                              |         0.053 |     0.049670 |
| L6      | 75.50 | Table `PgF = 0.54` (surface 10, PDF page 11; patent-line deviation +0.027570); catalog HOYA FCD705 `PgF = 0.5400`                                   |         0.028 |     0.023177 |
| L10     | 68.63 | Table `PgF = 0.54` (surface 17, PDF page 12; patent-line deviation +0.015204); catalog HOYA FCD515 `PgF = 0.5441`                                   |         0.015 |     0.015751 |
| L12     | 95.10 | Table `PgF = 0.53` (surface 21, PDF page 12), the same glass row as L2/L3; `PgF = 0.533512` from condition (9)                                      |         0.053 |     0.049670 |
| L15     | 68.63 | Table `PgF = 0.54` (surface 26, PDF page 12; patent-line deviation +0.015204); catalog HOYA FCD515 `PgF = 0.5441`                                   |         0.015 |     0.015751 |

- For review: converting the two-decimal table figures alone would give +0.046158 (0.53 at νd 95.10), +0.023191 (0.54
  at νd 75.50) and +0.011636 (0.54 at νd 68.63). The first is superseded by the patent's own condition (9) value; the
  second equals the catalog-derived value within 0.00002; the third would sit 0.0041 below the FCD515 curve from
  rounding alone, so the catalog figure is stored instead. The FCD100 catalog curve (`PgF = 0.5336`, +0.049777)
  agrees with the condition (9) value within 0.0002.
- L12: condition (9) is defined for the G1A negative lenses only. Its `PgF` is applied to L12 because the row is the
  same glass (nd 1.43700, νd 95.10, `PgF` 0.53), so one glass does not carry two g-line indices in one lens.
- The 2026-10-06 remark that the stored 0.015 "agrees" with FCD515 was a coincidence: 0.015 was 0.54 on the patent's
  line (+0.0152), and the rounding of 0.5441 to 0.54 nearly cancelled the gap between the lines.
- All six `apdNote` strings now quote the printed figure, the patent's own deviation and the runtime value; a header
  note in the data file names both lines. The analysis keeps the patent's ΔPgF in the element text, the glass table
  and condition (9), states the stored values separately, and its condition (9) footnote now gives the recovered
  `PgF` as 0.5335 (was "approximately 0.5337", which would give 5.38).
- Left: nothing. No other element carries `dPgF` and none was added; no element authors `nC`/`nF`/`ng` or uses
  `indexReference: "e"`. No `nd`, `νd`, glass label, `apd` tag or surface changed.
- Second read, same day: the formula (PDF page 6), the sixteen Example 1 glass rows (PDF pages 11–12) and
  condition (9) = 5.36 for all four examples (PDF pages 18–19) were re-read from the local PDF and the six values
  recomputed; none changed. 5.36 is itself a two-decimal print, so the FCD100 value carries ±0.00005
  (+0.049617 to +0.049723). The repo catalog also holds FCD505 (`PgF` 0.5443, +0.015973), 0.0002 from the FCD515
  figure stored for L10/L15. The L10/L15 `apdNote` and the analysis now also give the FCD515 catalog `PgF` on the
  patent's line (+0.0193), so the stored +0.015751 is not read as the table's +0.015.

## 2026-10-30 — Fresh original outline and glass reinspection

- Direct original `patents/JP2020012952A.pdf`, Example1: Figure1/PDF19 at600dpi, paired Figure2/3; media/asphere/focus tables PDF11–12; d-line/PgF definitions PDF6/10; G1Anegative anomalous-material¶0043–45/PDF9 and conditiontable5.36/PDF18. Earlier catalog-priority choices above are superseded by current source-anchor policy.
- Native image≈400dpi; vertexspan≈1090px600/131.9999mm≈5.5nativepx/mm. Every face/cemented interface inspected. Continuouscaps grow outward, includingfront38.5, negatives36.3/28.9, G2singlet28.3 and rear dualasphere18.8mm. Lands S4 23→36.3,S6 21→28.9,S7 22.5→27.5,S19 19.5→23.3,S23 15.5→17.2,S24 15.9→18mm. No previously clearcap is reduced; no new inwardnumericcut. The source S4outer exceeds its sphere domainR30.249, correctly represented by a finite clearcap plus a distinct land.
- Exact fullsource trials reject bodies29.5(L5,−1.502mm edge),28.7(L6,−4.308),26.4(L10,−3.448),18.8(L12,−1.299),18.8(L15,−.610). Adopted27.5/25.5/23.3/17.2/17.9 retain connected positive edges. Source S7endpoint≈23.4 would give12.553mm combined intrusion against11.969allowed; adopted22.5. Source S24endpoint≈16.2 gives7.243 against7.075allowed; adopted15.9. These are constrained outline approximations, not claimed complete diagram equality. S15/S16 full28.3 trial passes and is retained.
- All16 nd/νd pairs exact. All16 printed PgF ratios now represented at their actual2decimal±.005 precision via enginebaseline. Keep condition9-derived L2/L3+.049670 (source5.36±.005, patentline baseline differs); L12same-row transfer remainsqualified and APDflag becomesinferred. Recover other13 actual coarse source anchors; in particular L6+.023191 andL10/L15+.01163566 supersede catalogue-derived overrides. Source APDdesignation covers G1Anegatives only; otherSLD/FLD tags remaininferred. No nC/F/g/e-line data invented.
- All16 currentcatalogcurve resolutions remaincompatible; production identity, melt, chemistry and molding process unestablished. Source coefficients retained; rear asphere caps now18.8mm, no previously quoted numerical departure needed correction. Final sampledcounts87276retained/0lost/23745gained/33384bothblocked.

### Verification and limits

- Fresh direct original figure/table views; all source index/Abbe pairs independently compared with the original table. All 16 physical glasses resolve to qualified coefficient curves; no resin, cement layer or plate counted as extra glass. Source R/d, asphere coefficients, stops, focus/zoom/aperture controls and tolerances are unchanged.
- Focused surface/image-circle/field/aperture checks pass for all3 records; source-format field coverage ≥99%, design-aperture errors within3%. Full shared cut guards report no errors; no new inward cap or numeric inferred cut exists.
- Actual buildLens/computeElementShapes nine-state SVG for each lens was rasterized and inspected: connected compounds, no renderer trim. Exact d-line before/after collimated sampling uses144405 rays/lens across focus0/.5/1 and fields0/.25/.5/.75/1; counts are samples, not flux or source-certified finite-object performance. No old transmitted ray is lost. Published finite focus geometry is retained and checked in the nine-state layouts.
- Existing dispersion/glass-resolution/partial-line suites:3files/94tests pass. No new catalog row, tolerance waiver, hidden clipping or production-supplier assertion.

## 2026-10-31 — Scoped two-decimal PgF comparison; E-F1 retained

Reuse Oct30 complete source-shape/glass review; preserve May20/July29/Oct6/Oct8 dates. Direct exact `patents/JP2020012952A.pdf`, Example1 PDFpp11–12 S24/L14, prints1.62588/35.74/absolutePgF0.59, **two decimals±0.005**. ¶0059 p10 d587.56nm; ¶0017 p6 absolute ratio and g/F/d/C, source anomaly normal0.64833−0.00180ν. Existing dPgF+0.00631468 is the engine-normal conversion and reconstructs0.59000000. No printed or condition-derived source spectral/APD field changes.

Reject H-F6 despite its closer rawpartial0.589748136 versus E-F1’s0.587771428: both fit the coarse source bin; rawnd moves1.625879838→1.624950059 and rawν35.74058970→35.58517293. Effective runtimeν35.74059897→35.63812454 is worse relative to source35.74, while sourceθ0.59 already controls both variants. Retained official HOYA20260707 AGF row6009 confirms E-F1; CDGM’s officialSeptember2026 H-F6 is an existing distinct alternative, not a necessary addition.

Figure1 p19 native1145×693px/398×400ppi confirms the ordinary air-spaced L14 and adjacent bonded pair/rear-asphere context; vector source tables rendered220dpi, no upsampling precision claim. No extra resin/cement/plate is invented. Data is byte-identical, all16 media/partial fields and curves/channels/control geometry unchanged. Only scoped documentary evidence is appended; no new row, whole source-shape count or stronger finite/production claim is made.
