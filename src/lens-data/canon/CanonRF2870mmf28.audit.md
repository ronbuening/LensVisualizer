# Audit Log - Canon RF 28-70mm F2.8 IS STM

Patent: US 2024/0329367 A1

## 2026-06-04 - Sweep 2 manufacturer catalog source pass

- Added HOYA NBFD29 from HOYA's first-party optical-glass PDF (`NBFD29`, code 770-297, nd=1.77047, vd=29.74, PgF=0.5951, formula-3 A0-A5 constants) to the runtime catalog.
- Relabeled L8 / S15 from code-only `770297` to `NBFD29 (HOYA, 770297)`.

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/US20240329367A1.pdf`; local text confirms the queued rows.
- Updated surface 8 to `S-LAH89 (OHARA)` for nd=1.85150, vd=40.80.
- Updated surface 26 to `S-LAM2 (OHARA)` for nd=1.74400, vd=44.80.
- Converted surface 15 to a code-only `770297` annotation in this May pass; the 2026-06-04 source pass later resolved it as HOYA NBFD29.

## 2026-07-29 - Catalog-coordinate correction

- Corrected L15 from modern `S-NPH2` to historical OHARA `PBH21`, the exact 1.92286 / 20.90 row.

## 2026-09-23 — First-added diagram audit, lens 73

Source: local `patents/US20240329367A1.pdf` (image-only 300 dpi scan, no text layer). Front page p. 1; FIG. 1
(Example 1 section, wide end, axis vertical, object at the bottom) p. 2; FIG. 2A–2C aberration plots p. 3; description
¶0019–0082 pp. 13–18; First Numerical Example ¶0083 pp. 18–19. Examples 2–5 (pp. 19–22) were checked only to confirm
that Example 1 is the 15-element / 12-group embodiment matching the production lens.

### Retained after re-reading the source

- Patent number, inventor (Yasuaki Hagiwara), assignee (Canon), 2024, and "Example 1" subtitle.
- All 28 optical rows (R, d, nd, νd), stop at surface 10, R4 = 22.455, and the four aspheres. The printed formula
  uses (1 + K) and every K is 0, so the conic convention is moot. Coefficients A4–A12 match sign and exponent.
- Zoom gaps d2, d9, d16, d19, d23, d25 at 28.80 / 49.00 / 67.90 mm. Paraxial EFL 28.804 / 49.007 / 67.900. Thick-lens
  unit focal lengths reproduce the published B1–B7 values. Every stored element `fl` agrees with the thick-lens
  value to the stored precision.
- Focus: ¶0042 and ¶0065 put focusing in B6 (L13), which moves toward the image for close focus. No close-focus
  spacings are published, so the gaps stay zoom-only and no travel was invented. `closeFocusM` 0.27 is a production
  figure, not patent data.
- Element / group count 15 / 12: three cemented doublets and no resin layers.
- Rims within about 15 % of FIG. 1 were kept: L1 29.5 / 29.0 (figure 26.3, +12 %), L3 front 15.4, L7 12.4, L8 11.6,
  L11 14.8 (figure 13.0), L12 16.0 / 15.5 (figure 13.9), and L13 13.0 / 12.6. S4 stays at 15.3 because 15.6 fails
  the S4→S5 gap-intrusion check.

### Changes

| Field                                | Before                                                                                                                                 | After                                                                                          | Evidence                                                                                                                                                                                                                                            |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Last gap (`28`, `var["28"]`)         | 16.09 / 27.02 / 35.57 (physical CG + air)                                                                                              | 15.385 / 26.315 / 34.865                                                                       | Repo convention folds the 2.00 mm GB plate as t/n: d28 + 2.00/1.544 + 1.09. Old values left a +0.69 mm defocus at every station. Now −0.01 mm, which matches the patent bf of 15.39 / 26.31 / 34.87.                                                |
| `zoomApertureModel`                  | absent (fixed 9.04 mm iris)                                                                                                            | `"from-nominal-fno"`                                                                           | The stop rides with B3 and FNO is 2.88 / 2.88 / 2.92, with no published iris. A fixed iris gave about f/3.9 at tele. Inferred radii are 9.04 / 10.68 / 11.94 mm.                                                                                    |
| STO `sd`                             | 11.7                                                                                                                                   | 12.0                                                                                           | Records the largest inferred iris radius (11.94).                                                                                                                                                                                                   |
| `fstopSeries`, `maxFstop`            | starts 2.8; max 16                                                                                                                     | starts 2.88; max 22                                                                            | f/2.8 is not reachable at design f/2.88. The production minimum aperture is f/22.                                                                                                                                                                   |
| S9 / S8 `sd`                         | 10.8 / 11.2                                                                                                                            | 11.3 / 11.3                                                                                    | S9 clipped the tele axial beam (11.09 mm). FIG. 1 L5 rim 147 px = 11.1 mm.                                                                                                                                                                          |
| S11 / S12 `sd`                       | 11.0 / 11.4                                                                                                                            | 12.6 / 12.6                                                                                    | Both clipped the tele axial beam (12.52 / 12.46 mm). FIG. 1 L6 rim 167 px = 12.6 mm.                                                                                                                                                                |
| S17 / S18 / S19 `sd`                 | 14.6 / 14.6 / 14.3                                                                                                                     | 12.2 / 12.2 / 12.2                                                                             | FIG. 1 D2 rim 154–158 px = 11.6–11.9 mm (the old values were 23–26 % larger). The tele axial beam needs 11.93 mm.                                                                                                                                   |
| S3 `sd`                              | 17.2                                                                                                                                   | 18.0                                                                                           | FIG. 1 L2 flange 245 px = 18.5 mm. Clears the chief ray to the 21.64 mm raw corner (17.94 mm), which the old rim blocked.                                                                                                                           |
| S6 / S7 `sd`                         | 16.2 / 15.8                                                                                                                            | 15.4 / 13.6                                                                                    | FIG. 1 D1: L3 and the L4 front 196 px = 14.8 mm, L4 rear 176 px = 13.3 mm (the old S7 was 19 % larger). The junction now equals the S5 front rim.                                                                                                   |
| S26 / S27 / S28 `sd`                 | 17.2 / 18.4 / 18.4                                                                                                                     | 15.8 / 15.8 / 15.8                                                                             | FIG. 1 D3 is flat-rimmed at 205–208 px = 15.5–15.7 mm (the old S27/S28 were 18 % larger).                                                                                                                                                           |
| L6 `type`                            | Plano-Convex Positive                                                                                                                  | Biconvex Positive                                                                              | R12 = −750.000, not plane.                                                                                                                                                                                                                          |
| L2, L3, L4, L6, L9, L12, L13 `glass` | "S-LAH66 / S-BSL7 / S-LAH58 / S-NPH4 / S-TIH53W / S-BSM14 / S-BAH11 family"                                                            | S-LAH92 / S-BSM14 / S-LAH95 / S-LAH99 / S-NBH56 / S-FPM2 / S-NBM51 (OHARA catalog equivalents) | The old family names had different nd/νd; the new ones are exact-coordinate OHARA matches.                                                                                                                                                          |
| Header, `focusDescription`, analysis | "Internal zoom", "no reversing groups", physical-thickness BFD, ">10 % distortion", "S-LAH65V / S-TIH18 / S-LAL14", 13A rim "~13.5 mm" | Corrected                                                                                      | Abstract and ¶0028–0029: every unit moves, B1 and B3–B7 go toward the object, and B2 follows a convex-to-image path. The derived B2 front vertex runs 123.23 → 120.26 → 123.98 mm from the image. FIG. 2A distortion reads about −7 % at ω = 34.8°. |

Scale for FIG. 1: vertex crossings from S1 (y 2506.5) to S28 (y 977.5) span 1529 px for the 115.39 mm wide-end
track, giving 13.25 px/mm. The axis is at x 1252.5, and both sides read the same within 1 px.

### Checks on the result

- The surface validator reports no errors, and the image-circle check has no undersized rims. Paraxial defocus is
  −0.011 / −0.012 / −0.008 mm.
- Exact real-ray trace: no surface clips the axial f/2.88–2.92 beam at any station, and no rim blocks the chief ray
  to Y = 21.64 mm. At the patent's field angles (34.93 / 23.82 / 17.67°), full-bundle vignetting is 8–13 % per side
  at D3 and up to 58 % per side in B5–B6 at the wide end.
- The wide-end chief ray at 34.93° lands at 18.78 mm (about −6.6 % against f·tan ω), and Y = 21.64 mm needs about
  39.0°. The engine's paraxial half-field is 33.7° at wide, limited by S4, and rises to 25.2° and 20.0° at the
  intermediate and telephoto stations.
- All 15 glass labels resolve OK-compatible.
- Live check (headless screenshots): production wide-end baseline, then local wide and tele at infinity. BF reads
  15.38 / 34.87, and the slider runs f/2.88–f/22 (f/2.92 at tele). The zoom-movement overlay shows B1 and B3–B7
  advancing and B2 reversing near the intermediate position. Off-axis rays were not checked (needs a click).

### Open limitations

- The patent does not explain the 0.90 mm Total Lens Length offset from the tabulated sum.
- Iris radii are inferred from the nominal f-number, not published.
- Close-focus travel of B6 is not modelled; no spacings are published.
- L1, L11, and L12 rims remain 12–15 % above the FIG. 1 silhouette, and no effective diameters are published.
- The engine half-field at wide (33.7°) stays below the patent's 34.93° because S4 is capped by its sag against S5.

## 2026-09-23 — Glass block modeled as `rearPlates`

- Replaced the air-equivalent fold with the First Numerical Example's physical rear stack (p. 18 surface table, p. 19
  variable gaps): d28 = 13.00 / 23.93 / 32.48 mm, then `rearPlates` GB 2.00 mm, nd 1.54400, νd 66.3, and
  d30 = 1.09 mm. No catalog glass lies within tolerance of 1.544 / 66.3, so the plate uses the Abbe-number estimate.
- Paraxial check against the previous data: EFL identical; defocus changes by 0.0003 mm (rounding in the old 15.385 /
  26.315 / 34.865 mm). Physical track grows by 2.00 × (1 − 1/1.544) = 0.705 mm.

## 2026-10-30 — Scoped native-cap, complete-media and runtime review

Preserved actual **2026-09-23** source/shape/glass and physical rear-plate history above; unchanged conclusions are reused with that date. Current reopening addresses six native cap overestimates, one omitted resolved shoulder, two unsupported catalog-derived spectral overrides and public material claims. No extra reused-entry count.

Original `patents/US20240329367A1.pdf`, SHA-256 `0e059d8e59b9eb633695c0682ce63cf86dfca0745670c43eaa3d2561df99bd91`, independently confirmed from first page as US 2024/0329367 A1, Yasuaki Hagiwara / Canon, October 3, 2024. First Numerical Example (normalized Numerical Example 1) is paragraph 0083, PDF 18–19 / printed 6–7: all 30 source rows, sixteen media including GB, four aspheres and complete zoom/plate gaps. Figure 1 is PDF 2; Figures 2A–2C are PDF 3. Paragraph 0080 explicitly defines d/F/C wavelengths and Abbe formula while mentioning g 435.8; paragraph 0081 defines standard (1+K). Source prints no per-element line indices, θ or Δ partial values.

Native Figure 1 is 2560×3300 one-bit 300 ppi; source table page 18 is separately 2550×3300. No 600 ppi render adds resolution. S1–S28 span 1529 px over source 115.39 mm gives 13.25 px/mm; adopted uncertainty ±0.7 mm. Inspected every element/concave end, three cemented interfaces, four aspheres and physical GB. Excluded labels, stop/GB/unit brackets and motion arrows; no hybrid layer.

| Faces     | Previous clear sd | Current clear sd | New outer rim |
| --------- | ----------------: | ---------------: | ------------: |
| S1/S2     |         29.5/29.0 |        26.5/26.5 |             — |
| S4        |              15.3 |             15.3 |          18.0 |
| S20A/S21A |         14.8/14.8 |        13.0/13.0 |             — |
| S22/S23   |         16.0/15.5 |        14.0/14.0 |             — |

Six caps and one `rimExtensionSd`, zero cuts. Native caps measure about 26.3/13.0/13.9 for L1/L11/L12; S4's attached straight outer stroke extends source clear curve about 15.6 to blank about 18.5. Keep clear 15.3 and conservative outer 18.0. Trial clear 15.6 fails 6.43 mm sag against allowed 6.345 mm in 7.05 mm air, all source zooms; full 18.0 also fails. Other source-shaped unequal caps remain within uncertainty or retained constraints. No opaque bonded lands, equal-height fabricated blocks or disconnected resin wings. Every R/d, full source asphere, iris/zoom control and physical GB gap is protected.

All 16 source nd/νd pairs retained. Removed two authored `dPgF=0.028` fields at L1/L10: these were catalog S-FPL51 numbers, not original measurements. Fifteen compatible curves remain enabled, GB stays Unmatched; no curves disabled. Two existing APD tags remain explicitly inferred and qualified, without numeric source partials or historical supplier proof. L-BAL42 remains an optical curve proxy, not proof of low-Tg molding grade. Removed unsupported source-medium melt-variation, chemistry, density, cost and manufacturing assertions; production GMo/UD correlation does not identify a source material. Explicit d convention matches existing defaults, without numeric conversion.

The source Total Lens Length 132.38/144.25/158.83 versus physical row sum 131.48/143.36/157.94 leaves 0.90/0.89/0.89mm differences. A structured unresolved source note retains both evidence sets and source bf agreement; no gap/radius/plate correction is justified. No numerical source field changes.

Surface/image-circle checks pass. A 65-position clone reproduces z/sd/current iris to 1.78e−15 mm roundoff. Aperture 65/65 within 3%; exact working 65/65 trace, worst +1.963767%, and all 780 zoom/preset calls trace before/after. Source current iris 8.958912/10.510704/11.685834mm remains derived. All 65 format chiefs ≥99%; source-angle vector heights 18.771281/22.467511/22.878132mm are clear, with native distortion trends −7/+4/+5% and source image/angle labels separately retained. No field fitting.

At current iris, 260 fixed-angle fields of 193 samples retain all axial 193. Source edge 11/144/129→11/114/101; 75 counts unchanged, 185 decline at most 33 peripheral rays at native caps/shoulder. Source-correct shape does not imply increased illumination. Source image residuals after GB +0.010148/+0.011530/+0.007150mm; worst interpolated residual −0.918839mm at zoom 0.265625 (EFL 37.502899 versus displayed 39.53125). Preserve source station gaps; interpolation is illustrative, finite focus disabled and IS centered. Actual SVG/native comparison confirms the changes; all 975 paths over 65 states are finite, closed and connected, with zero hidden trim. Source fidelity, sampled runtime clearance and production correlation remain separate.

## 2026-10-31 — Scoped unresolved-medium dispersion-source follow-up

Preserve the actual September 23 and October 30 patent/shape review dates above. This is a rear-plate dispersion-source follow-up only. US 2024/0329367 A1, First Numerical Example (normalized Numerical Example 1), PDF page 18 / printed 6, paragraph 0083, surfaces 29–30, retains GB 1.54400/66.3; paragraph 0080 explicitly defines d/F/C, and paragraph 0081 calls the medium a glass block. A polymer curve is therefore not adopted. The official HOYA CM500 sheet (October 2020, page 1) prints n(500 nm) = 1.544 and n(600 nm) = 1.539, not source nd = 1.544, and provides neither a d-line Abbe pair nor dispersion coefficients. Its similar number at a different wavelength is rejected as material/dispersion evidence. The current catalog contains no compatible row for 1.54400/66.3. GB remains Unmatched with its published pair and physical 2.00 mm thickness / 1.09 mm rear gap unchanged. No filter chemistry, source partial, per-lens curve, shape or control is invented.

Source: [official HOYA CM500 optical-property sheet](https://www.hoyacandeo.co.jp/english/products/eo_pdf/CM500.pdf). Its sparse wavelength indices are not converted into an invented dispersion fit.
