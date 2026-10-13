# Audit Log - Zeiss Distagon T* 35mm f/1.4

Patent: US 3,915,558, Example 8
Catalog version: local working tree, 2026-05-19

## 2026-05-19 - Full patent audit and glass relabel

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / 1 | `glass` | `Barium flint 583/465` | `BAF3 (HIKARI)` | Patent Example 8 lists nd=1.5827, vd=46.5. Hikari BAF3 publishes code 583465, nd=1.58267, vd=46.476929 with public coefficients. |

### Phase 2 - Retained-information audit

- Checked Example 8 normalized prescription rows against the data file after the documented 36.5x production scaling. Stored radii, thicknesses, glass constants, and the aspherical coefficient conversion for surface 11A remain consistent with the patent.
- Confirmed the patent provides infinity data only; the unit-focus approximation remains documented in the file.

### Phase 3 - Spectral / metadata enrichment

- Added Hikari BAF3 to the glass catalog from refractiveindex.info's Nikon/Hikari Zemax data, unlocking catalog dispersion for code 583465.

### Phase 4 - Analysis sync

- Updated the L1 glass card and glass-selection summary to identify BAF3 as the public coefficient-backed match while preserving the historical barium-flint interpretation.

## 2026-06-25 - APD, high-index, and semi-diameter audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| All elements | `glass`, `nd`, `vd` | 2026-05-19 audited labels and patent constants | Retained | US 3,915,558 Example 8 was rechecked against the current data file. The previous BAF3 correction remains valid; the remaining LLF1 rows are still intentionally unresolved historical labels. |

### Phase 2 - Retained-information audit

- Rechecked Example 8 radii, thicknesses, glass constants, and the surface 11A asphere coefficient conversion against the patent. No prescription or asphere edit was needed.
- Confirmed the patent does not publish clear apertures. Stored SDs remain project-inferred values constrained by the f/1.4 ray bundle, patent drawing proportions, and asphere-rendering stability.
- The patent provides infinity data only; the existing unit-focus approximation remains documented.

### Phase 3 - Spectral / metadata enrichment

- `apd: false` remains appropriate for all elements. The patent provides no partial-dispersion columns.
- High-index status for LaK8, SF6, BAF3, and related glasses remains represented in glass labels and roles.

## 2026-09-23 — First-added diagram audit, lens 98

Source: local PDF `patents/US3915558.pdf` (US 3,915,558, 17 pages). Pages used: front page (bibliographic data and
FIG. 1), sheets 1–5 (FIGS. 1–4b), p. 9 (the drawings are "not intended to be exactly to scale"), p. 10 (Example 8 uses
the FIG. 4 / 4a configuration), p. 12 (Example 8 table), p. 13 (Table I) and p. 14 (Table II and asphere coefficients).

### Re-verified and retained

- Identity: US 3,915,558, granted 1975-10-28, inventor Erhard Glatzel, assignee Carl Zeiss Stiftung. Example 8 is the
  only f/1.4 example with a split component 3 (3a/3b) and an aspherical front surface on component 5. Its 9 elements
  in 8 groups, with components 6 and 7 cemented, match the production 9/8, one-asphere formula. The subtitle names
  Example 8.
- Prescription: every R, T/S, N and V row of Example 8 was re-read at 300 dpi. All match the stored values × 36.5 to
  rounding (S3b = 0.00138F = 0.0504 mm is stored as 0.05). S4 = 0.23576F = CS = 8.605 mm (the stop split sums to that
  value). Scale: the patent is normalized to F = 1; the uniform ×36.5 factor was retained. The paraxial EFL is
  36.499 mm and the BFD is 35.975 mm; the patent gives s′ = 0.98567F = 35.977 mm, a 0.002 mm defocus.
- Asphere: P = c₁H² + c₂H⁴ with c₁ = (2R₅)⁻¹ and c₂ = −7.934 0850 × 10⁻¹, with c₃ = c₄ = c₅ = 0. The stored K = 0 and
  A4 = −1.6308 × 10⁻⁵ mm⁻³ are c₂ − 1/(8R³) divided by 36.5³. This is equivalent to the patent parabola within
  1 µm at the rim.
- Element `fl` values match the thick-lens values (−65.63, −222.62, 60.10, 111.93, 258.61, −64.34, −27.44, 27.07,
  59.73 mm). All element `type` names agree with the R signs.
- The nd/νd values of all nine elements equal the patent rows. `apd: false` is retained because the patent gives no
  partial dispersions.
- Aperture: `nominalFno` 1.4 is the patent value, and `fstopSeries` runs from f/1.4 to f/16 (`maxFstop` default 16).
- Metadata: `lensMounts` `contax-yashica`, `imageFormat` `135-full-frame`, 9/8 counts, `focalLengthDesign` 36.5 and
  the `groups`/`doublets` ranges are unchanged. The 36.5 mm production focal length and the 0.3 m MFD come from the
  earlier datasheet notes and were not independently re-sourced.
- Front semi-diameters (surfaces 1–7, 9, 10) were retained. The patent gives no diameters and says its figures are not
  to scale. FIG. 4 proportions relative to L1 (L2 ≈ 0.82, L3a/L3b ≈ 0.80, L4 ≈ 0.72, rear member ≈ 0.60) agree with
  the stored front values within about 10 %.

### Changes

| Item | Before | After | Evidence |
|---|---|---|---|
| Stop position (d10 / dSTO) | 4.0 / 4.605 mm | 5.9 / 2.705 mm | FIGS. 4 and 4a both draw the diaphragm 0.69 of the way from the L4 rear vertex to the L5 front vertex; the old split was 0.46. The old plane was also inside the sag of L4's concave rear surface, which is 4.51 mm at the 15.9 mm iris radius and 5.54 mm at the 17.5 mm rim. |
| STO `sd` | 13.04 | 15.2 | The engine's real-ray iris for the f/1.4 entrance pupil (radius 13.035 mm) at the new stop position. The old value implied about f/1.58. |
| sd 8 / 11A / 12 / 13 / 14 / 17 | 20.5 / 14.0 / 13.0 / 13.5 / 13.5 / 14.5 | 21.0 / 15.3 / 13.8 / 13.8 / 15.0 / 15.0 | The exact f/1.4 axial trace clipped 8 (20.51), 11A (14.60), 12 (13.80), 13 (13.80) and 14 (14.67), and 17 had only 0.05 mm margin (14.45). |
| `gapSagFrac` | default 0.90 | 1 | The L5 rear / L6 front air lens (S5 = 4.659 mm) closes to 0.016 mm at the 13.80 mm f/1.4 marginal-ray height. The patent spacing is kept, and rim contact is declared instead of clipping the axial beam. |
| Close-focus `var` "17" | 35.977 → 30.921 | 35.977 → 43.06 | The old value shortened the back focus, which focused on a virtual object (about −164 mm object-to-image, beyond infinity). The new value is a calculated unit-focus extension of 7.083 mm, giving 300.0 mm object-to-image (β = −0.194) to match `closeFocusM` 0.3. No floating travel is invented. |
| `focusDescription`, header, `var` comment | "Unit focus approximation" | Labelled as a calculated unit focus with the 7.08 mm extension | Patent gives infinity data only |
| Glass labels | `BAF3 (HIKARI)`, `LLF1 (Schott)`, `N-LaK8 (Schott)`, `SF57 (Schott)`, `N-LaF21 (Schott)` | "… catalog equivalent (…; production supplier unspecified)" | The patent gives only nd/νd. All labels still resolve OK-compatible: J-BAF3, LLF1, N-LAK8, S-TIH53 (SF57 alias) and N-LAF21 (Δnd −3 × 10⁻⁴). |
| L1 / L2 / L5 / L8 roles | L1 "Concave toward front"; rule names E′/E″ | Convex toward the object; claim 1 conditions (f)/(g) | Both radii are positive, so the meniscus is convex toward the object, as drawn in FIG. 4. |
| Analysis | L1/L2 described as "concave toward front"; glasses "confirmed Schott"; stop, asphere departure and focus prose | Corrected; stop and focus sections rewritten; departure 0.89 mm at 15.3 mm | Findings above |

### Checks on the result

- The surface validator reports no errors, and the image-circle floor check passes.
- The exact trace reaches the 21.6 mm image height at ω = 31.09° (2ω ≈ 62°, matching `specs`). No surface clips the
  f/1.4 axial beam or blocks the full-field chief ray. Ordinary one-sided vignetting of the full-field bundle is 15–53 %
  in the rear member. The lower rim ray of the full-field f/1.4 bundle does not trace through, which is consistent
  with the strong mechanical vignetting at full aperture.
- Close focus: 300.02 mm object-to-image, object 176.6 mm ahead of surface 1.
- The asphere at 15.3 mm has sag −1.358 mm, departure −0.894 mm and a 16.4° slope, with no turnover.
- The glass check reports all nine elements OK-compatible. The builder derives a 15.20 mm stop radius, FOPEN 1.4 and
  `maxFstop` 16. The paraxial entrance pupil is 31.9 mm behind surface 1.
- Prettier passes on all three files.
- Live view (headless, local dev server): at infinity the stop sits just ahead of L5, the rear member draws at the
  larger rims, and the f/1.4 axial fan passes unclipped. At the 30 cm position the whole lens moves forward
  (BF 43.06). Production still shows the old stop and the inverted close-focus back focus of 30.92. Off-axis rays were
  not inspected; they need a click.

### Open limitations

- The stop position within CS is inferred from schematic figures that the patent says are not to scale.
- The production floating-element close-range correction is not modeled, because the patent gives no data.
- Front-group rims remain estimates. The 36.5 mm production focal length, 0.3 m MFD and 32.5 mm entrance-pupil figure
  come from earlier datasheet notes that this audit did not re-verify.
- The L5/L6 rims are modeled in near contact (0.016 mm) at the f/1.4 marginal height.
