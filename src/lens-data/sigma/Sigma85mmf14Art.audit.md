# Audit Log - Sigma 85mm F1.4 DG HSM Art

Patent: JP 2018-005099 A, Example 4

## 2026-05-19 - Glass relabel

### Phase 1 - Glass corrections

| Element / surface | Field   | Before          | After              | Justification                                                                              |
| ----------------- | ------- | --------------- | ------------------ | ------------------------------------------------------------------------------------------ |
| L2 / S3           | `glass` | `FCD515 (HOYA)` | `FCD705 (HOYA)`    | Patent nd/vd is 1.55032 / 75.50; FCD705 is exact.                                          |
| L4 / S7           | `glass` | `NBFD3 (HOYA)`  | `J-KZFH9 (Hikari)` | Patent nd/vd is 1.73800 / 32.26 and PgF 0.5898; J-KZFH9 is the exact d-code catalog match. |
| L5 / S9           | `glass` | `NBFD3 (HOYA)`  | `J-KZFH9 (Hikari)` | Same patent glass as L4.                                                                   |
| L7 / S13          | `glass` | `FCD515 (HOYA)` | `FCD705 (HOYA)`    | Same patent glass as L2.                                                                   |
| L10 / S18         | `glass` | `TAFD37 (HOYA)` | `E-FD15 (HOYA)`    | Patent nd/vd is 1.69895 / 30.05; E-FD15 is exact.                                          |
| L11 / S21         | `glass` | `NBFD3 (HOYA)`  | `J-KZFH9 (Hikari)` | Same patent glass as L4/L5.                                                                |

### Phase 2 - Retained-information audit

- Spot-checked flagged rows against Example 4; stored nd/vd and patent PgF values are retained.
- No radius, spacing, or asphere edits were needed in this scoped glass pass.

### Phase 4 - Analysis sync

- Updated the companion analysis names, repeated-glass narrative, and references for FCD705, J-KZFH9, and E-FD15.

## 2026-06-23 - APD badge correction

### Phase 1 - APD status corrections

| Element / surface | Field | Before                 | After    | Justification                                                                                                                                                                                                                                |
| ----------------- | ----- | ---------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| L1, L3-L5, L8-L14 | `apd` | `inferred` or `patent` | `false`  | JP 2018-005099 A Example 4 publishes PgF for all glass rows, but these elements sit inside the patent's ordinary-material PgF/νd range and should not be highlighted as special APD glass. Their `dPgF` values remain for chromatic tracing. |
| L2, L6, L7        | `apd` | `patent`               | retained | L2/L7 are the SLD low-dispersion elements, and L6 is the high-index anomalous-dispersion element called out by the patent/production design.                                                                                                 |

### Phase 2 - Retained-information audit

- No surface, spacing, glass-name, or semi-diameter changes were made.
- Patent PgF-derived `dPgF` values were retained on every element so spectral analysis still uses the published partial-dispersion data.

### Phase 3 - Analysis sync

- Updated the companion analysis text to distinguish patent PgF data from APD viewer badges.

## 2026-07-29 - Glass classification follow-up

- Corrected L3 from the near but wrong E-ADF10 annotation to OHARA S-NBM51.
- The stored `nd=1.61340`, `vd=44.27` coordinate exactly matches S-NBM51 (`613443`); HOYA E-ADF10 is the
  adjacent but distinct `1.61310 / 44.36` row (`613444`).
- Synchronized the analysis and source list. No prescription values changed.

## 2026-07-29 - Remaining catalog-coordinate correction

- Rechecked Example 4 in local `patents/JP2018005099A.pdf`; S24 remains 1.67270 / 32.17 with its patent PgF
  data and R/d values unchanged.
- S24 `S-NBH52 (OHARA)` -> `S-TIM25 (OHARA)`, the exact same-vendor coordinate. S-NBH52 is the distinct
  1.67300 / 38.15 row.
- Synchronized the L13 element text, glass table, sourcing qualification, and references.

## 2026-07-30 - L9 catalog identity correction

- Rendered Example 4 in local `patents/JP2018005099A.pdf`, PDF page 19. S17 remains nd = 1.80420, νd = 46.50, PgF = 0.5571 with its R/d row unchanged.
- The prior `TAF105` label was not a valid match: current M-TAF105 is the distinct `1.77250 / 49.50` row.
- HOYA TAF3D is the exact `1.80420 / 46.50` catalog coordinate and evaluates to PgF = 0.55724, independently reproducing the patent partial-dispersion value.
- Relabeled L9 as a TAF3D catalog equivalent while leaving the production supplier unspecified. No prescription data changed.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent 27A gap with the patent's physical rear stack (Example 4, PDF pages 19–20 of local
  `patents/JP2018005099A.pdf`, rendered): d27 = 37.0799 / 47.4637 mm (infinity / 848 mm), then `rearPlates` LPF
  (符号の説明 designation) 1.4500 mm, nd 1.52301, νd 58.59, θgF 0.5449 (dPgF −0.00035 against the project normal
  line; C12 (HOYA) coordinate-compatible spectral proxy, as in the Sigma 105 mm pilot), and BF 1.0000 mm.
- Paraxial check against the previous data: EFL identical; defocus changes by at most 0.00024 mm (rounding in the
  old 39.032 / 49.416). Physical track grows by 0.498 mm and now matches the patent's printed 166.36 mm total length.

## 2026-10-08 - dPgF moved to the engine's normal line

- Patent formula: ¶0023 (local `patents/JP2018005099A.pdf`, PDF page 6), `ΔPgF = PgF − 0.64833 + 0.00180 × νd`. The
  patent's line is therefore `0.64833 − 0.00180 × νd`, not the engine's `0.6438 − 0.001682 × νd`; the two cross near
  νd 38.4.
- Numerical Example 4 (PDF page 19) prints an absolute `PgF` column for every glass row (¶0080, PDF page 12, defines
  the column). The condition table (¶0131, PDF page 24) additionally prints the patent's own deviation for the three
  G1 negative elements only: ΔPgFLm1 = −0.0053 (L3), ΔPgFLm2 = −0.0005 (L4), ΔPgFLm3 = −0.0005 (L5).
- Every stored `dPgF` was the patent `PgF` referred to the patent's line and rounded to four decimals. Each is now
  the patent `PgF` minus the engine line, six decimals, unless it already agreed within 0.0003.

| Element |    νd | Source figure (Example 4, PDF page 19)                                    | Stored before |        Stored after |
| ------- | ----: | ------------------------------------------------------------------------- | ------------: | ------------------: |
| L1      | 54.67 | Patent `PgF = 0.5452` (surface 1); patent-line deviation −0.004724        |       −0.0047 |           −0.006645 |
| L2      | 75.50 | Patent `PgF = 0.5399` (surface 3); patent-line deviation +0.027470        |        0.0275 |            0.023091 |
| L3      | 44.27 | Patent `PgF = 0.5633` (surface 5); patent ΔPgFLm1 = −0.0053 (PDF page 24) |       −0.0053 |           −0.006038 |
| L4      | 32.26 | Patent `PgF = 0.5898` (surface 7); patent ΔPgFLm2 = −0.0005 (PDF page 24) |       −0.0005 |            0.000261 |
| L5      | 32.26 | Patent `PgF = 0.5898` (surface 9); patent ΔPgFLm3 = −0.0005 (PDF page 24) |       −0.0005 |            0.000261 |
| L6      | 20.88 | Patent `PgF = 0.6388` (surface 11); patent-line deviation +0.028054       |        0.0281 |            0.030120 |
| L7      | 75.50 | Patent `PgF = 0.5399` (surface 13); patent-line deviation +0.027470       |        0.0275 |            0.023091 |
| L8      | 40.80 | Patent `PgF = 0.5654` (surface 15); patent-line deviation −0.009490       |       −0.0095 | −0.0095 (unchanged) |
| L9      | 46.50 | Patent `PgF = 0.5571` (surface 17); patent-line deviation −0.007530       |       −0.0075 |           −0.008487 |
| L10     | 30.05 | Patent `PgF = 0.6028` (surface 18); patent-line deviation +0.008560       |        0.0086 |            0.009544 |
| L11     | 32.26 | Patent `PgF = 0.5898` (surface 21); patent-line deviation −0.000462       |       −0.0005 |            0.000261 |
| L12     | 40.80 | Patent `PgF = 0.5654` (surface 22); patent-line deviation −0.009490       |       −0.0095 | −0.0095 (unchanged) |
| L13     | 32.17 | Patent `PgF = 0.5962` (surface 24); patent-line deviation +0.005776       |        0.0058 |            0.006510 |
| L14     | 40.10 | Patent `PgF = 0.5694` (surface 26); patent-line deviation −0.006750       |       −0.0067 | −0.0067 (unchanged) |

- L4, L5 and L11 change sign: the same `PgF = 0.5898` is 0.0005 below the patent's line and 0.0003 above the
  engine's at νd 32.26. The patent's condition (4) is still evaluated with the patent's −0.0005 in the analysis.
- L2, L6 and L7 `apdNote` strings now quote the patent `PgF`, the patent's own deviation and the runtime value; a
  header note in the data file names both lines. The analysis keeps the patent's ΔPgF in the element text, glass
  table and conditions (4) and (6), and now states the stored values separately.
- Left: L8 and L12 (engine-line value −0.009774, stored −0.0095, difference 0.000274) and L14 (engine-line value
  −0.006952, stored −0.0067, difference 0.000252) already agree with the correct value within 0.0003 and keep their
  four-decimal figures. The `rearPlates` LPF `dPgF = −0.00035` was already the patent `PgF = 0.5449` minus the
  engine line (−0.000352) and is unchanged. L13 uses the patent `PgF = 0.5962`, not the S-TIM25 catalog curve
  (0.5989); the patent decides. No element authors `nC`/`nF`/`ng`, and no `nd`, `νd`, glass label, `apd` tag or
  surface changed.

## 2026-10-30 — Fresh original-source shape and glass reinspection

- Direct original `patents/JP2018005099A.pdf`, Numerical Example 4: all 14 lens media plus LPF and absolute PgF on PDF 19; coefficients/focus on PDF 19–20; d-line 587.56 nm/column definitions on PDF 12 ¶0080, g/F/d/C wavelengths and the patent normal line on PDF 6 ¶0022–0023, actual anomalous-material conditions/prose PDF 6–7 ¶0024–0035. Fig.16/PDF 27 and its paired F1.46 infinity plot identify Example 4. Native ~399dpi extracted image and 600dpi crop viewed; all 27 powered-lens faces, both cemented interfaces and the separate LPF inspected.
- Native first/last powered vertices x≈176–695 span 126.8264 mm, ≈4.09 px/mm. Source-scaled continuous caps: S3 39.5→38; G1 S9–14 to30.5 and S15 to27.5; S17 27.5→25 and its connected S18 interface 21.4→24.9; S22/S23 16.2→17.7; S25 15→17.8; both final aspheres to 17.1. Explicit cap-preserving extensions: S4 36→38, S6 29.5→36, S21 16.3→17.7, S24 15.1→17.8. Full curved cement interfaces remain connected, without opaque interface lands or detached wings.
- S19 source q≈0.755: cap half-span≈77 native px/common edge≈102px, one-native-pixel range ±0.01721 at4.09px/mm. Common outer≈24.9 implies cap≈18.8mm. Adopt clear sd18.8 with `rimExtensionSd:24.9`, giving the connected full source outer. This is an explicit source-supported inward cap correction, not a cap-preserving addition or production measurement.
- Domain-bound trim proof: numeric cut cannot use outer24.9 because the underlying sphere's R23.792 is smaller; a full extension at the old21.4 cap also fails the iris plane (depth13.394920 >11.1146/11.3807). Use a temporary equivalent inferred cut on the OLD untrimmed21.4 cap, depth9.21, radius18.799589; its full uncut beams reach17.815319 +margin0.056399, and finite source d0=681.5 reaches17.813435. The final source cap18.8 is slightly larger than that passing bound; no inward-cap guard bypass, source exemption or tolerance change. Candidate land is6.1mm, sag≈9.21054 before both iris positions. The stock guard does not automatically inspect this extension, so the explicit full equivalent-cut proof is retained in `/tmp/ftb4/explicit-art-domain-trim-guard.json` and this note rather than claimed as an automatically guarded numeric cut.
- S7 front extension31.5 is rejected by genuine6→7 clearance:11.564mm intrusion >11.434allowed in12.7043. Weak few-pixel ends elsewhere do not independently prove flat lands and are retained; no arbitrary short land is substituted.
- Asphere coefficients unchanged; final polynomial departures at17.1 mm are −0.215402 (S26A) / +0.083056 mm (S27A), synchronized in public notes. No R/d, nd/νd, stop, focus/aperture control, plate stack or tolerance changes.
- Fresh glass: all15 source pairs and absolute PgF retained/verified. Recalculate source-backed L8/L12 dPgF −0.009774 and L14 −0.006952 under engine line0.6438−0.001682ν. Historical−0.0095/−0.0067 reconstruct θ off by0.000274/0.000252, beyond source ±0.00005; the old loose0.0003 retention is superseded. All other printed PgF values (including LPF0.5449) round-trip within source precision; no catalog-only spectral copies added. The patent's separate baseline0.64833−0.00180ν stays in condition analysis.
- All14 glass lenses plus LPF retain compatible qualified coefficient curves. S-TIM25 is a compatible proxy rather than a source-precision Abbe identity (coefficients≈32.10 versus source32.17); actual source PgF overrides it. Supplier/melt/molding-grade uncertainty remains explicit. L2/L7 are both the figure's Lp1 and L6 is Lp2; source¶0027–0033 explicitly identifies anomalous-material behavior through these conditions, so their patent APD flags stay. Others stay unflagged, without treating missing APD labels as zero anomaly. Unsupported public common-melt-lot and proven-PGM claims removed.
- Validation: canonical/surface/full-cut, image-circle0undersized, field≥99%, aperture within3% with no rim limiter; catalog/resolver consistency and three existing shared glass suites/94tests pass. Separate source finite-point guard at d0=681.5 mm also passes, without adding authored certification. Actual9state SVGs viewed: connected compounds, max automatic trim0. Identical48,135 collimated pupil samples retain33,379, lose59, gain3,876, and block10,821 inboth; the59 lost samples are source-height clips at continuous S12(2) and S13(57), not at the guarded cut; counts are not flux. Source/control invariant proof and `/tmp/ftb4/` evidence are untracked.

## 2026-10-31 — Scoped source-constrained E13 catalog improvement

Reuse the complete Oct30 source/shape review and preserve all older actual dates. Narrow direct original: `patents/JP2018005099A.pdf`, Numerical Example4 PDFp19 source S24/L13,1.67270/32.17/absolute PgF0.5962±0.00005. ¶0080 p12 anchors d587.56nm; ¶0022–23 p6 defines g/F/d/C and ratio(Ng−NF)/(NF−NC), with the source anomaly baseline0.64833−0.00180ν. Existing engine dPgF+0.006510 uses its distinct0.6438−0.001682ν baseline and reconstructs0.59620006; preserve it and every other genuine lens/LPF partial/APD field.

Existing E-FD5 is better constrained than former S-TIM25: evaluated nd1.672699797/ν32.17054165/rawPgF0.596299737 versus1.672699810/32.09920577/0.598882789. Rawθ residual improves+0.002682789→+0.000099737. The source-implied C–F span0.02091078645 is closer to E-FD5’s0.02091042808 than old0.02095689891; effective runtimeν32.09921481→32.17055134. Both runtime variants retain actual sourceθ0.59620006, with d exactly1.67270. The retained official HOYA20260707 AGF row1928 independently confirms the existing six polynomial coefficients; no new catalog row, copied source line index or exact historical identity is claimed.

Native Figure16 p27 bitmap973×705px at399×398ppi confirms the ordinary air-spaced L13/Sm2 and its adjacent compound/asphere/LPF context. Prescription table vector text was rendered at220dpi for reading, not called native220ppi. No geometry/interface edit is made. Only the E13 glass string changes; source numbers/spectral overrides/APD, R/d, rims, stops and controls are exact. Nine focus/zoom layout samples retain identical d surfaces and paths; only E13 C/F/g channels change, all other media/curve channels equal. Public element/table/source wording now names qualified E-FD5 without unsupported titanium chemistry. No complete source-review increment or new production-clearance claim follows.
