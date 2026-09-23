# Audit Log - Canon RF 50mm f/1.2 L USM

Patent: US 2019/0265441 A1, Numerical Data 2 (Katayose / Canon)
Catalog version: fd7376b

## 2026-05-04 - Glass relabel + retained-data audit

### Source Note

- The user-provided PDF was `US20190278068A1.pdf`, which is US 2019/0278068 A1 for a Canon zoom-lens family and does not contain the RF 50mm f/1.2 Numerical Data 2 prescription.
- The RF 50mm f/1.2 data file cites US 2019/0265441 A1. This audit used the USPTO PDF for US 2019/0265441 A1 and the Google Patents HTML text for the searchable Numerical Data 2 tables.

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| G2 / surface 2 | `glass` | `S-TIM25 (OHARA)` | `S-TIM28 (OHARA)` | Patent row 2 lists nd=1.68893, vd=31.07. The catalog S-TIM28 entry round-trips this pair; S-TIM25 is nd=1.67270. |
| G5 / surface 8 | `glass` | `S-TIM22 (OHARA)` | `666356 — dense flint (nd=1.66565, νd=35.64)` | Patent row 8 lists nd=1.66565, vd=35.64. No current catalog entry matches; code-based label prevents a false S-TIM22 Sellmeier match and preserves a future upgrade path. |
| G6 / surface 9 | `glass` | `S-LAH79 (OHARA)` | `954323 — ultra-high-index dense flint (nd=1.95375, νd=32.32)` | Patent row 9 lists nd=1.95375, vd=32.32. No current catalog entry matches; S-LAH79 is nd=2.00330. |
| G8 / surface 13 | `glass` | `S-NBH55 (OHARA)` | `738323 — niobium dense flint (nd=1.73800, νd=32.26)` | Patent row 13 lists nd=1.73800, vd=32.26. No current catalog entry matches; S-NBH55 is nd=1.80000. |
| G9 / surface 15 | `glass` | `S-LAL14 (OHARA)` | `764485 — lanthanum crown (nd=1.76385, νd=48.51)` | Patent row 15 lists nd=1.76385, vd=48.51. No current catalog entry matches; S-LAL14 is nd=1.69680. |
| G10 / surface 16 | `glass` | `S-TIM22 (OHARA)` | `666356 — dense flint (nd=1.66565, νd=35.64)` | Patent row 16 repeats the same nd/vd pair as G5; same code-based fallback rationale. |
| G11 / surface 18* | `glass` | `S-LAH89 (OHARA)` | `S-LAH58 / TAFD30 class (883408)` | Patent row 18 lists nd=1.88300, vd=40.80. Catalog S-LAH58/TAFD30 entries match this 883408 glass class; S-LAH89 is nd=1.85150. |
| G12 / surface 20 | `glass` | `S-LAH89 (OHARA)` | `S-LAH58 / TAFD30 class (883408)` | Patent row 20 repeats nd=1.88300, vd=40.80; same relabel as G11. |
| G14 / surface 23 | `glass` | `S-TIM35 (OHARA)` | `S-NBH52 (OHARA)` | Patent row 23 lists nd=1.67300, vd=38.15. Catalog S-NBH52 round-trips this pair; S-TIM35 is nd=1.69895. |

### Phase 2 - Retained-information audit

- Confirmed all surface `R`, `d`, `nd`, and `vd` values against US 2019/0265441 A1 Numerical Data 2 rows 1-25.
- Confirmed variable spacing `d19`: 1.95 mm at infinity and 16.11 mm at closest distance.
- Confirmed patent-stated design values: EFL 51.10 mm, F-number 1.25, half field 22.95 degrees, image height 21.64 mm, total lens length 111.01 mm, and BF 14.60 mm.
- Confirmed group focal lengths LF=198.77 mm and LR=44.87 mm, unit focal lengths L1=61.31 mm and L2=586.40 mm, and all single-lens focal lengths already stored in the data file.
- Confirmed aspherical surfaces 1, 18, and 25 use K=0 and the stored A4-A12 coefficients match the patent table.
- Semi-diameters remain project-estimated layout values; the patent table does not publish effective diameters for this application text.

### Phase 3 - Spectral / metadata enrichment

- This pass did not add spectral fields from the application text; a later 2026-05-19 follow-up added patent-family `dPgF` values from the corresponding granted patent.
- Existing metadata already records patent year, design focal length/aperture, element count, group count, maker, and focus description.

### Phase 4 - Analysis sync

- Updated the element-by-element glass names for G2, G5, G6, G8, G9, G10, G11, G12, and G14 to match the audited data labels.
- Updated the D4 and G11 prose so it no longer names false S-TIM22 or S-LAH89 glasses.

## 2026-05-19 - Partial-dispersion enrichment and code search

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| G5 / surface 8 | `glass` | `666356 — dense flint (nd=1.66565, νd=35.64)` | retained | Local US 2019/0265441 A1 and granted-family US 10,838,201 B2 Numerical Data 2 both list nd=1.66565, vd=35.64. Searches for code 666356 and the exact nd/vd pair did not find a public manufacturer or refractiveindex.info catalog entry with coefficients. |
| G10 / surface 16 | `glass` | `666356 — dense flint (nd=1.66565, νd=35.64)` | retained | Numerical Data 2 repeats the same nd/vd pair as G5; the code-based label preserves the future upgrade path. |

### Phase 2 - Retained-information audit

- Rechecked Numerical Data 2 rows 1-25 in the local PDF against the data file. Stored `R`, `d`, `nd`, variable gap `d19`, and aspherical coefficients remain consistent with the patent table.

### Phase 3 - Spectral / metadata enrichment

- Added patent-family `dPgF` values from the granted US 10,838,201 B2 Numerical Data 2 `ΔθgF` column to G1-G15.
- Most catalog-resolved glasses still use Sellmeier data first; the new fields chiefly improve unresolved or future fallback paths, especially G5/G10's 666356 glass.

### Phase 4 - Analysis sync

- Added ΔθgF details for G5, G7, and G10 in the element narrative.
- Added a glass-selection note explaining that patent-family ΔθgF values are now stored as `dPgF`.

### Report status

- The unresolved 666356 rows remain in `six-digit-glass-codes-missing-sellmeier.generated.md` because no coefficient-backed public catalog match was found.

## 2026-05-31 - Catalog-mismatch second-batch recheck

Reviewed the local untracked file `patents/US20190265441A1.pdf`, Numerical Data 2.

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| G4 / surface 6 | `glass` | `S-TIL27 (OHARA)` | `S-NBH5 (OHARA)` | Numerical Data 2 row 6 lists nd=1.65412 and vd=39.68. S-NBH5 round-trips this pair in the current catalog; S-TIL27 resolves to a different nd. |

Figure / SD check:

- Rendered Figure 3 from the local PDF, page 4. Figure 3 is the matching Example 2 cross-section.
- The patent text does not publish effective diameters. The stored SD profile visually matches the f/1.2 figure envelope, with the largest front elements, a narrowed stop-adjacent front group, and a broad rear group. No SD edits were made.

## 2026-07-30 - Unsafe named-token cleanup

- Replaced G3's unsupported `S-NPH7 (OHARA)` label with coefficient-backed OHARA `S-LAH99`, catalog code 001291.
- S-LAH99 reproduces the patent's 2.00100 / 29.13 coordinate, and its published PgF=0.5997 agrees with the patent-derived PgF=0.5998 from ΔθgF=+0.0050. The same-coordinate HOYA TAFD55 row has PgF=0.5986.
- The patent still does not identify the production supplier, so the data calls S-LAH99 a catalog equivalent. No prescription geometry changed.

## 2026-07-30 - H-ZBaF4 compatibility review

- Compared G5/G10 code `666356` (`1.66565 / 35.64`, patent-family `ΔθgF = -0.0018`) with the newly sourced CDGM H-ZBaF4 row, code `664355` (`1.664260 / 35.48`, `ΔPgF = +0.0042`).
- The code, d-line index, and partial dispersion all differ; the partial-dispersion sign conflict rules out H-ZBaF4 as a safe catalog equivalent.
- Retained the code-only annotations and patent `dPgF` fallback for both elements.

## 2026-08-18 — H-ZBaF4 coefficient assignment with patent partial dispersion

- Visually rechecked `patents/US20190265441A1.pdf`, PDF page 17, Numerical Data 2. G5 and G10 remain patent code `666356`, `nd = 1.66565`, `νd = 35.64`, `ΔθgF = -0.0018`.
- CDGM H-ZBaF4 is within the runtime coordinate window (`Δnd = -0.00139`, `Δνd = -0.16`). Its catalog PgF differs from the patent normal-line PgF by about `+0.00745`, so the patent-authored `dPgF` remains authoritative at the g line.
- Relabeled G5/G10 as H-ZBaF4 catalog equivalents for coefficient-backed interpolation at the remaining wavelengths. The production supplier remains unspecified and no prescription geometry changed.

## 2026-09-23 — First-added diagram audit, lens 93

Source: local `patents/US20190265441A1.pdf` (300 dpi image scan). Numerical Data 2 on PDF pp. 16–17, the example list
in ¶0026 and ¶0030–0031, and FIG. 3 on p. 4 (axis horizontal, object on the left).

### Retained after re-reading the source

- Example 2 is still the right example. It is the only one with β = −0.19 at the closest distance, and it has
  15 elements in 9 groups with three aspheric lenses (G1, G11, G15), matching the production lens.
- All 25 rows of `R`, `d`, `nd` and `νd` match the printed table. The stop is row 11. The three aspheres (1, 18 and 25)
  use K in the standard `(1 + K)` form with K = 0, and A4–A12 match, including signs and exponents. d19 is 1.95 mm at
  infinity and 16.11 mm at the closest distance. Paraxial EFL is 51.0998 mm, BF 14.600 mm and TL 111.010 mm, against
  the patent's 51.10, 14.60 and 111.01. Defocus is 0.0000 mm. All 15 stored element focal lengths equal the thick-lens
  values.
- The patent lists no filter or cover plate, and its BF is already air-equivalent. So 14.60 mm is stored directly as
  the last gap.
- `closeFocusM` stays at 0.4. With d19 = 16.11 mm the model focuses 274.8 mm in front of surface 1, which is
  400.0 mm from object to image, with β = −0.1925. The production MFD is 0.40 m. The patent publishes only two focus
  states, so no `focusPositions` keyframes are needed. ¶0031 and FIG. 3 move L1 (G1–G11 and the stop) toward the
  object while L2 (G12–G15) stays fixed.
- The patent, authors and assignee fields are unchanged.
- FIG. 3 scale is 0.0753 mm/px, taken from the 96.41 mm span between the S1 and S25 vertices (1280 px). Rims read from
  the figure are: G1/G2 21.5, G3 20.0, G4 18.4, G5/G6 16.6, G7/G8 16.8, G9/G10 17.2, G11 18.7, G12/G13 20.0 and
  G14/G15 19.2 mm. So the figure draws rims only about 1 mm outside the f/1.25 axial beam. The stored rims are up to
  about 23 % larger (S1 25.5, S19 23.0, S16/S17 20.5), which is under the 25 % threshold for changing a value from a
  figure, so they were kept.
- Glass pairs for G1–G5, G7 and G10–G15 are unchanged and match the catalog (glass check OK-compatible). The G7
  S-FPL51 `apd: "inferred"` flag stays, because the patent never calls it ED/UD glass.

### Changes

| Surface / field | Before | After | Evidence |
|---|---|---|---|
| `nominalFno`, `fstopSeries[0]` | 1.2 / 1.2 | 1.25 / 1.25 | The patent's FNo is 1.25, and f/1.2 is not reachable. The engine's stop radius is now 15.44 mm. `maxFstop` stays at the default 16, which is the production minimum aperture. |
| S7 `sd` | 15.4 | 16.0 | This clipped the f/1.25 axial beam, which needs 15.61 mm. FIG. 3 (600 dpi zoom) shows G4's rear face meeting G5's front face at about 16.3 mm, and by calculation the surfaces touch at 16.23 mm. |
| `gapSagFrac` | default 0.90 | 0.97 | At S7 = 16.0 the combined sag in the 7.45 mm gap is 7.21 mm, leaving 0.24 mm of real clearance. At the default 0.90, even the 15.61 mm beam fails the check. |
| S25A `sd` | 21.5 | 17.1 | The old value was 5 mm past the asphere's sag extremum at 16.3 mm. The corner chief ray (Y = 21.64 mm) crosses this surface at 16.18 mm at infinity and 16.86 mm at closest focus, so the rim sits just past the extremum. That extremum is a gentle inflection: the sag changes by 0.004 mm and the slope is 0.6°. |
| S24 `sd` | 21.5 | 19.2 | This keeps G15 consistent with its new rear rim and matches FIG. 3's G14/G15 rim (255 px). |
| `varLabels` | `["19", "BF"]` | `["19", "D19"]` | The patent calls this gap d19. BF is the fixed 14.60 mm last gap. |
| `groups` | FRONT (LF) 1A–10, REAR (LR) 12–25A | L1 (FOCUS) 1A–19, L2 (FIXED) 20–25A | The movement overlay uses these annotations. With LF/LR it showed LR moving about 7 mm. Now it shows L1 moving 14.16 mm toward the object and L2 fixed, as FIG. 3 does. LF/LR is still described in the analysis. |
| G6 `glass` | `954323 — ultra-high-index dense flint …` | `S-LAH98 (OHARA catalog equivalent …)` | Row 9 is 1.95375 / 32.32. The catalog S-LAH98 value is 1.95375 / 32.32, so the exact OHARA match is used instead of J-LASFH21. |
| G8 `glass` | `738323 — niobium dense flint …` | `S-NBH53 (OHARA catalog equivalent …)` | Row 13 is 1.73800 / 32.26. S-NBH53 matches exactly. |
| G9 `glass` | `764485 — lanthanum crown …` | `S-LAH96 (OHARA catalog equivalent …)` | Row 15 is 1.76385 / 48.51. S-LAH96 is 1.76385 / 48.49 (Δνd 0.02). |
| G3 `apd` | `"inferred"` | `false` | ΔθgF +0.0050 is ordinary for a dense lanthanum flint. G2 (+0.0092) is already `false`. `dPgF` is unchanged. |
| Header, analysis | "OCR-corrupted" patent radii; 25* departure "+293 µm at 16.5 mm"; "Claim 8"; G1/G3/G4 SD prose; quoted ¶0062 | Rewritten | The printed table is correct; only machine-text copies misread r14–r18. 25* is +344 µm at 17.1 mm. Focus mode is cited to ¶0030–0031. S1 departure at FIG. 3's 21.5 mm rim is about −370 µm. |

### Checks on the result

- The surface validator reports no errors, and the image-circle audit finds no undersized surfaces. A real-ray trace
  at f/1.25 (Y = 21.64 mm, ω = 23.05° against the patent's 22.95°) shows no axial clipping and no chief-ray blocking,
  at infinity or at closest focus. The engine now reports FOPEN 1.25 and a half-field of 23.4° (was 25.3°); the field
  limit is S25A.
- Live check (headless local renders compared against production): the page shows F/1.25, a D19 gap readout of
  1.95/16.11 and L1/L2 labels. At closest focus L1 extends while L2 stays in place, and the movement overlay reports
  a maximum travel of 14.16 mm. G3 no longer uses the APD fill. Off-axis rays were not checked because they need an
  interactive click.

### Open limitations

- The patent publishes no effective diameters. Every rim except S7, S24 and S25A is an estimate that is fuller than
  FIG. 3 by up to about 23 %.
- S25A is set 0.8 mm past its sag extremum so that the corner chief ray is not blocked.
- G5/G10 (666356) still use H-ZBaF4 as a nearest-coordinate equivalent, with the patent `dPgF` authoritative.
