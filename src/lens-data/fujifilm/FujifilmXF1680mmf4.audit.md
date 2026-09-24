# Audit Log - Fujifilm XF 16-80mm f/4 R OIS WR

Patent: US 2020/0166735 A1, Example 11

## 2026-05-19 - Missing-Sellmeier queue audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L21 / S6A | `glass` | `PGM lanthanum dense flint (808409)` | `808409 - PGM lanthanum dense flint (patent nd=1.80780, vd=40.89)` | Patent Example 11 / Table 31 gives nd=1.80780 and vd=40.89. Sweep 2 resolves the code through public HOYA MC-NBFD135 coefficients. |

### Phase 2 - Patent evidence

- Local patent file: `patents/US20200166735A1.pdf` is present but gitignored; rechecked it via local text extraction and cross-checked the public Google Patents HTML.
- Confirmed Example 11 Table 31 row 6A for L21: nd=1.80780, vd=40.89.
- No radius, spacing, semi-diameter, focus, stop, mount, or format edits made.

### Phase 3 - Catalog-search disposition

- Checked the current runtime catalog and public exact-code searches for 808409 / nd=1.80780 / vd=40.89. Sweep 2 later found the public HOYA MC-NBFD135 coefficient row for this code.
- Nearby lanthanum dense-flint glasses do not round-trip the patent code with coefficient-backed evidence, so no catalog entry or alias was added.

### Phase 4 - Analysis sync

- Updated the glass-identification table to mark L21 with an explicit unbroken 808409 token. That token now resolves through the Sweep 2 catalog entry.

## 2026-06-25 - Catalog backfill follow-up

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L11 / S1 | `glass` | `Dense short flint (847238; OHARA S-NBH53 family)` | `S-TIH53 (OHARA, 847/238 dense short flint)` | US 2020/0166735 A1 Table 31 lists nd=1.84666, vd=23.78, OgF=0.62054; the current catalog S-TIH53 entry has code6 `847238`, nd=1.84666, and vd=23.7779. |
| L22 / S8 | `glass` | `Light phosphate crown (618634; OHARA S-PHM52)` | `S-PHM52 (OHARA, 618/634 light phosphate crown)` | Table 31 row 8 lists nd=1.61800, vd=63.39, OgF=0.54015; the current catalog S-PHM52 entry has code6 `618634`. |
| L24 / S12 | `glass` | `Dense short flint (847238; same family as L11)` | `S-TIH53 (OHARA, 847/238 dense short flint)` | Table 31 row 12 lists the same 847/238 dense-short-flint pair as L11. |
| L32 / S17 | `glass` | `Dense short flint (847238; same as L11/L24)` | `S-TIH53 (OHARA, 847/238 dense short flint)` | Table 31 row 17 lists the same 847/238 dense-short-flint pair as L11/L24. |
| L33 / S18 | `glass` | `Light phosphate crown (618634; same as L22)` | `S-PHM52 (OHARA, 618/634 light phosphate crown)` | Table 31 row 18 repeats the 618/634 phosphate-crown pair from L22. |
| L42 / S23 | `glass` | `Lanthanum flint (804396)` | `S-LAH63 (OHARA, 804/396 lanthanum flint)` | Table 31 row 23 lists nd=1.80440, vd=39.59, OgF=0.57297; current catalog S-LAH63 has code6 `804396`, nd=1.804398, and vd=39.5862. |

### Notes

- No surface, spacing, APD, or semi-diameter edits were made. This patent example does not publish ED/clear-aperture columns.
- Updated [FujifilmXF1680mmf4.analysis.md](FujifilmXF1680mmf4.analysis.md) to promote the affected rows from family/code descriptions to catalog-backed names.

## 2026-09-23 — First-added diagram audit, lens 77

Source: local `patents/US20200166735A1.pdf` (US 2020/0166735 A1). The pages used were p. 58 (sheet 22: Tables 31–33 for
Example 11, read from the 300 dpi render), p. 57 (Table 34), p. 12 (FIG. 11 cross-section, native 300 dpi raster) and the
text pages for ¶0062–0081, ¶0105–0116 and ¶0129.

### Re-verified and retained

- Identity: the patent number, inventors (Daiki Kawamura, Taiga Noda), assignee and 2020 year match the front page.
  The subtitle names Example 11.
- Table 31 prescription: every R, d, nd and νd on S1–S29 matches. The stop is S14 with 1.100 mm to S15.
  The aspheric surfaces are S6, S7, S15, S16, S20, S21, S28 and S29. Stored labels follow the patent surface numbers.
- Table 32 zoom gaps DD[5], DD[13], DD[21] and DD[24] match at all three stations.
  - Paraxial EFL is 16.4974 / 36.5342 / 77.7510 mm, against the patent's 16.497 / 36.533 / 77.751.
  - BFD is 17.4939 / 17.4948 / 17.4938 mm against the stored 17.494, a defocus of ≤ 0.001 mm.
  - Back-focus convention: the Table 31 S29 gap is 14.614 mm, followed by a 2.850 mm plate (nd 1.51680) and 1.000 mm of
    air. Their air-equivalent sum is 17.493 mm, so the plate is correctly folded into the last gap and is not stored as a
    physical distance.
- Conic convention: Table 33 KA = 1 on all surfaces, so K = 0 is correct (Zd with KA·C²h², ¶0110).
- Element and group count: 16 / 12. There are four cemented doublets (L11/L12, L32/L33, L41/L42, L51/L52) and 28 lens
  surfaces. `fl` values agree with thick-lens values to rounding (e.g. L34 +19.56, D3 −34.63).
- Group motion: G1, G3 and G4 move monotonically toward the object (+42.60 / +26.30 / +26.20 mm), and G5 is fixed
  (¶0106 via ¶0129, ground symbol in FIG. 11). D21 rises and then falls (2.400 → 3.974 → 2.502).
- Focus: ¶0077 says G4 alone moves toward the image for close focus. No close-focus spacings are published, so the
  focus pairs stay equal to infinity (not modelled) and no travel was invented. `closeFocusM` 0.35 m is Fujifilm's
  published figure.
- Field: exact chief rays at ω = 43.52° / 20.24° / 9.90° land at Y = 14.20 mm, matching the patent's
  2ω = 87.2° / 40.4° / 19.8° and TLw/Y = 7.338 (Y = 14.20).

### Changes

| Item | Before | After | Evidence |
|---|---|---|---|
| Asph 6A/15A/16A/29A odd orders | A5, A7, A9 dropped | Added verbatim from Table 33 | Table 33 lists non-zero A5/A7/A9 on all 8 surfaces; the old comment wrongly said they were zero |
| Asph 7A, 20A, 21A, 28A | A4 only; A6–A10 = 0 | Full A4–A10 plus A5/A7/A9 from Table 33 | e.g. 20A A6 = 9.0512974E−06 and A8 = 3.9970349E−07 were missing. Departures at the rims change by hundreds of µm |
| STO sd / aperture model | Fixed iris of 4.9 mm; no aperture model | sd 8.0; `zoomApertureModel: "from-nominal-fno"`; iris 4.90 / 6.41 / 7.97 mm | The old fixed iris gave about f/4.1 / f/5.3 / f/6.5, so the constant-f/4 zoom behaved like a variable-aperture zoom. No diameters are published, so the schedule is inferred |
| `nominalFno`, `fstopSeries`, `maxFstop` | 4; series from 4; default 16 | 4.12 (Table 32: 4.12 / 4.12 / 4.13); series from 4.12; 22 | Patent FNo; Fujifilm's published minimum aperture is f/22 |
| G3 sd 15A…21A | 5.8 / 6.1 / 6.4 / 6.2 / 6.7 / 6.9 / 7.3 | 9.8 / 9.8 / 9.6 / 9.2 / 8.9 / 9.6 / 9.7 | Old values clipped the tele axial beam (15A needs 8.65, 16A 8.42, 17 7.97, 18 7.43, 19 7.24, 20A 7.46). FIG. 11 rims measure 10.1 / 9.9 / 9.0 / 9.7 mm |
| G5 sd 25…29A | 9.8 / 10.3 / 10.5 / 10.8 / 11.8 | 12.8 / 13.2 / 13.5 / 12.4 / 13.8 | Old values blocked the tele chief ray (10.77–11.88 mm). FIG. 11 rims are 12.8 / 13.5 / 13.8 mm. S28 is capped at 12.4 by the 0.511 mm gap to flat S27 |
| L21 sd 6A / 7A, L22 front 8 | 12.5 / 12.4 / 10.2 | 13.8 / 10.6 / 9.6 | The wide chief ray needs 13.48 at 6A, so 12.5 blocked it. With the full Table 33 terms, 7A at 12.4 overlapped S8 (gap check failed). The L21/L22 air lens closes at about 10.6 mm, which matches FIG. 11 |
| G1 sd 1…5 | 31.5 / 27.0 / 23.5 / 22.0 / 20.5 | 26.0 / 26.0 / 25.0 / 24.2 / 24.2 | FIG. 11 rims are L11 25.9, L12 24.9 and L13 24.1 mm at 10.54 px/mm. S1 was 18 % over and S5 15 % under; the others were changed for a coherent group. The chief ray is ≤ 22.7 mm |
| L22 `type` | Biconcave Negative | Negative Meniscus | R = −17.12 / −108.19 |
| L42 `type` | Negative Meniscus | Biconcave Negative | R = −87.21 / +20.16 |
| L51 `type` | Plano-Convex Positive | Biconvex Positive | R = +398.57 / −46.62 |
| Glass labels | L12 "S-LAM66 family", L23 "S-NPH53", L31 "L-TIM28 family", L34 "S-FPL51", L41 "S-NBH58 family", L52 "E-LAC14 family", L53 "M-BACD12 family" | TAC8, E-FDS1, M-FD80, M-FCD1 (HOYA), S-NPH5 (OHARA), LAC13, M-BACD12 (HOYA) | The old names resolved to different catalog glasses (S-LAL18, PBH21, S-TIM28, S-NPH5, H-LaK6A) or to a 1e−4 nd offset. The new labels match the patent nd/νd exactly, except LAC13 (νd 53.34 vs 53.35) |
| `apd` L23, L34 | "patent" | "inferred" | The patent makes no APD/ED claim; it only requires 65 < νd3Rp < 105 (Cond. 7) for OIS colour stability |
| `dPgF` | absent | all 16 elements | Derived from the Table 31 θgF: θgF − (0.6438 − 0.001682·νd) |
| `varLabels` 24 | "BF" | "D24" | DD[24] is the G4–G5 gap, not the back focus |
| Header, focus text, analysis | "uniquely matching" embodiment claim, "odd orders are zero" claim, close = inf "pending measurement" | Rewritten | Examples 1 and 4 share the 16/12 layout and constant FNo 4.12–4.13. G2 reverses (−0.90 then +8.14 mm). Focus not modelled; analysis departures recomputed at the new rims |

### Checks on the result

- The surface validator reports no errors, and the image-circle floor check is clean.
- Exact real-ray traces at Y = 14.2 mm find no surface that clips the axial f/4.12–4.13 beam or blocks a full-field chief
  ray at any station.
- Ordinary corner vignetting remains: G1 46–61 % on one side at tele, S28 57 %, G4 16–30 %. At wide, the lower rim ray is
  cut off at the S7A rim.
- The engine builds with FOPEN 4.12 and station iris radii 4.896 / 6.406 / 7.968 mm.
- Aspheric departures at the new rims: S6 +203, S7 −537, S15 −207, S16 +14, S20 −500, S21 +250, S28 +472 and
  S29 +735 µm.
- All 16 glass labels resolve compatibly.
- Headless live renders at wide, middle, tele and close-focus (with the movement overlay) show the enlarged G3/G5, the
  more uniform G1 and an iris that opens toward tele. The focus slider shows "Not modeled".

### Open limitations

- Which example is the production lens is not certain: Examples 1, 4 and 11 all fit Fujifilm's published specs.
- Iris radii are inferred from FNo, not published. Close-focus travel of G4 is not modelled.
- Table 34 Expression (11) prints 10.876, but the Table 32 gaps give 7.534; this source conflict remains.
- The engine's paraxial half-field at wide is 38.0°, capped by S7A; the real trace reaches 43.5°.
- The L21 glass code 808409 resolves to MC-NBFD135, whose catalog nd (1.80834) is 5.4e−4 above the patent value.
- The G2 rims (S9–S13) and G4 rims were kept (within about 10 % of FIG. 11). Off-axis ray fans were not inspected live.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the folded S29 gap (17.494 mm) with Table 31's physical rear stack (PDF p. 58, Table 31-continued, digits
  confirmed on the rendered page): S29 = 14.614 mm, then `rearPlates` PP (S30–S31) 2.850 mm, nd 1.51680, νd 64.20,
  θgF 0.53430 (dPgF −0.00152), and 1.000 mm of air to the image plane. The patent names this plate the optical member PP.
- Glass N-BK7, matching the L51 label for the same 1.51680 / 64.20 pair; it resolves as compatible.
- Paraxial check against the previous data: EFL identical at all three stations; defocus moves by 0.0010 mm at each
  station, the rounding of the old fold (17.494 stored against 14.614 + 2.850/1.51680 + 1.000 = 17.493). Physical
  track grows by 0.970 mm (t(1 − 1/n) = 0.971).
