# Audit Log - Schneider-Kreuznach Super-Symmar XL 110mm f/5.6 Aspheric

Patent: US 5,870,234, Example 2 / Claim 3 (Ebbesmeier nee Schitthof)

## 2026-06-23 - E-line glass handling and SD sanity audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / S1 | `glass` | `KF9 (Schott)` | `Unmatched (Schott KF9; patent e-line ne=1.52583, ve=51.25 stored as nd/vd)` | US 5,870,234 Example 2 tabulates e-line values. The file intentionally stores ne/ve in `nd`/`vd`; explicit unmatched prevents future d-line catalog coefficients from being applied to e-line geometry. |
| L2 / S3 | `glass` | `N-LAK33B (Schott)` | `Unmatched (Schott N-LAK33B; patent e-line ne=1.75844, ve=52.09 stored as nd/vd)` | Same e-line convention. This remains the high-index lanthanum-crown assignment in prose, but d-line Sellmeier is suppressed. |
| L3 / S5 | `glass` | `N-LAK33B (Schott)` | `Unmatched (Schott N-LAK33B; patent e-line ne=1.75844, ve=52.09 stored as nd/vd)` | Same e-line convention and high-index lanthanum-crown assignment as L2. |
| L4a / S7 | `glass` | `N-SK5 (Schott)` | `Unmatched (Schott N-SK5; patent e-line ne=1.59142, ve=61.03 stored as nd/vd)` | Same e-line convention; prevents the d-line N-SK5 catalog row from being mixed with patent e-line data. |
| L4b / S8 | `glass` | `F2 class (Schott, Delta ne = +0.001 vs. catalog)` | `Unmatched (Schott F2-class; patent e-line ne=1.62408, ve=36.12 stored as nd/vd)` | Same e-line convention; the patent row is close to F2 but not a d-line runtime Sellmeier row. |
| L5 / S10 | `glass` | `K10 (Schott)` | `Unmatched (Schott K10; patent e-line ne=1.50349, ve=56.13 stored as nd/vd)` | Same e-line convention; K10 identity remains in prose without implying local Sellmeier coverage. |

APD status remains `false` for all elements. The patent describes low-refractivity crowns, high-refractivity crowns, and a near-index/far-dispersion cemented achromat; it does not claim anomalous partial dispersion glass. High-index status remains descriptive for L2/L3 N-LAK33B in the role text.

### Phase 2 - Retained-information audit

- R, d, ne, and ve values were checked against US 5,870,234 Example 2 / Claim 3.
- The patent marks r9 as aspherical but does not publish K or polynomial coefficients; the current zero-coefficient placeholder remains the correct non-fabricated representation.
- The patent does not publish semi-diameters. Rendered page 2 confirms the current SD proportions: largest front member, taper toward the stop, and a smaller rear group. No SD values were changed.

### Phase 3 - Spectral / metadata enrichment

- The patent does not publish nC, nF, ng, PgF, theta-gF, or dPgF tables. No line-index enrichment was added.

### Phase 4 - Analysis sync

- Updated the spectral-convention notes to explain why the data file suppresses d-line Sellmeier resolution even where Schott family assignments are known.

## 2026-07-30 - Reference-line metadata

- Added `indexReference: "e"` to all six elements because the stored `nd` / `vd` slots preserve patent
  `ne` / `νe` values.
- The runtime and generated reports now reject d-line catalog substitution structurally rather than relying on annotation wording.
- No source values or prescription geometry changed.

## 2026-08-11 — Phase 94 native e-line recovery

- Re-rendered patent PDF page 4 and confirmed Example 2's six `ne / νe` rows.
- The explicit e-line resolver now verifies N-LAK33B (L2/L3), N-SK5 (L4a), legacy F2 (L4b), and K10 (L5)
  directly at C′/e/F′. Their index residuals are at most `0.0000041` and their Abbe residuals at most `0.022`.
- Removed the obsolete unmatched guards from those five exact names, raising strict coverage from 0/6 to 5/6.
  KF9 remains on the Abbe fallback because the local catalog has no compatible curve. No prescription values or
  geometry changed.

## 2026-10-27 — Rimmer localization audit (asphere data)

Patent: US 5,870,234, all four PDF pages visually reviewed at 220 dpi; PDF page 4 table digits additionally reviewed at 350 dpi. Example 2 is in printed column 3 on PDF page 4; Claim 3 repeats it in column 4.

| Location / field | Before | After | Evidence / disposition |
|---|---|---|---|
| Data header, asphere limitation | Unpublished coefficients; spherical baseline | Full-patent scope, absence of plots, sampled 18° localization failure added | PDF pp. 1–4; model limitation, no numeric edit |
| Analysis, omission rationale | Claimed proprietary-protection motive | Reason unstated; zeros explicitly identified as modeling defaults | No rationale or numeric profile appears in the patent |
| Analysis, asphere performance | General correction / 288 mm image-circle assertions | Missing-profile limitation, measured surrogate errors, and qualification of returned RI | PDF p. 4 marks r9 only; p. 2 is schematic, no performance plots |
| Audit sidecar | No Rimmer localization finding | This dated source and model audit appended | Source review and exact-trace diagnostics |

### Retained source data

All eleven radii, all ten axial intervals, and all six ne/νe pairs match both Example 2 and Claim 3. In particular r9 = −31.197 mm, d9 = 1.360 mm, and the neighboring r8 = −17.622 mm and r10 = −30.837 mm are transcribed correctly. The printed d6 = 4.535 mm is preserved as 2.300 + 2.235 mm around the inferred stop. No coefficient convention, odd-power term, normalization, or rescaling is available to recover: the two embodiment tables and two claim tables contain only R, d, ne, νe and an aspherical-face footnote. Claim 1 and the prose identify one aspherical glass/air surface of L4 but give no equation.

The patent supplies f/5.6 and a 105° full image angle, but no numerical EFL, back focus, total length, image height, effective diameters, or aberration plots. The sole drawing is the schematic section on PDF p. 2 (identified as schematic on p. 3, printed col. 2). Its stepped front member, narrower stop region, cemented L4, and separate rear member agree with the modeled architecture; it is not a dimensioned Example 2 rim prescription. All authored semi-diameters remain estimates and are retained. No rim correction is established from this schematic.

### Finding and unresolved limitation

Verdict: model limitation. Surface 9A retains K = 0 and A4 through A14 = 0; these are placeholders, not source-published zeros. Its stored sd = 15.50 mm has zero departure from a sphere, a −29.8° rim slope, and no turnover. The on-axis f/5.6 beam clears the rims, and the chief ray reaches the modeled 144 mm image-height edge. These geometric checks do not establish localized image formation.

LSA remains −26.843 / −18.885 / −12.566 / −6.302 mm at pupil 1 / 0.85 / 0.7 / 0.5. At the sampled 17.96° field the pupil −1 meridional ray clears every surface, reaches 9A at h = 12.56 mm within sd = 15.50 mm, and has image-intercept error +6.845 mm relative to the chief ray. The pupil sweep is smooth, with no past-turnover crossing; the triage's neighboring-ray AOI differences do not isolate a digit/sign error. Rimmer maxDev is 0.0556 at the displayed 18.0° field; RI is refused there and at every larger sampled field. The displayed 15.0° sample still returns RI = 0.895 with rounded maxDev = 0.0500.

Close-ray tangential/sagittal focus shifts reach −73.563 / −25.236 mm at 53.87°, and modeled distortion is −4.990% there. No patent aberration axes exist for comparison. The modeled half-field 53.87° comes from the catalog image radius; the patent's claimed half-field is 52.5°. The localization failure starts well inside that claimed field.

No R, d, ne, νe, stop, gap, aperture, semi-diameter, or asphere term changed. Missing disclosure is not an identified contradictory printed coefficient, so no source.errata entry or single-slip correction is justified. The before/after field sweep is unchanged; complete per-field values are recorded in the coordinator report.

### Follow-ups

Retain the missing-asphere qualification and the RI localization refusal. A source defining the actual r9 profile is required for a faithful higher-order model; do not fit coefficients to the current errors or a manufacturer chart. Exact stop placement and the full-aperture clear apertures remain inferred. Any catalog/UI treatment for incomplete prescriptions is a coordinator decision outside this one-lens edit scope.
