# Audit Log — Canon RF 85mm f/1.2L USM

Patent: US 2020/0012073 A1, Example 1

## 2026-05-19 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L10 / 16 | `glass` | `S-LAH79 (OHARA)` | `S-LAH98 (OHARA)` | Patent table row 16 lists nd=1.95375, vd=32.3; S-LAH98 matches the Ohara-family code 954323. |
| L11 / 18 | `glass` | `S-LAH79 (OHARA)` | `S-LAH98 (OHARA)` | Patent table row 18 repeats nd=1.95375, vd=32.3; same catalog match as L10. |
| L12 / 19 | `glass` | `S-TIM22 (OHARA)` | `S-TIM2 (OHARA)` | Patent table row 19 lists nd=1.62004, vd=36.3; S-TIM2 round-trips this pair. |
| L13 / 21 | `glass` | `S-TIM27 (OHARA)` | `S-TIM28 (OHARA)` | Patent table row 21 lists nd=1.68893, vd=31.1; S-TIM28 is the Ohara-family match. |
| L14 / 23 | `glass` | `S-LAH64 (OHARA)` | `TAFD37A (HOYA)` | Patent table row 23 lists nd=1.90043, vd=37.4; TAFD37A has the matching 900374 code-family catalog entry. |

### Phase 2 — Retained-information audit

- Checked the flagged prescription rows against the patent table; stored surface values match the published rows.
- No geometry, asphere, variable-gap, or metadata edits made.

### Phase 4 — Analysis sync

- Updated the complete glass table and L13 prose to match the relabeled elements.

## 2026-05-19 - Code-only glass source recheck

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L2 / 2 | `glass` | `S-NBF1 or S-LAF2 (OHARA)` | `N-KZFS8 (Schott)` | Patent Example 1 row 2 lists nd=1.72047, vd=34.7. Schott N-KZFS8 publishes glass code 720347 and matches the row exactly. |
| L5 / 8A | `glass` | `855/248 - high-index dense flint` | `S-NBH56 (OHARA)` | Patent Example 1 row 8 lists nd=1.85478, vd=24.8. OHARA S-NBH56 round-trips the 855248 optical constants and is now code-tagged in the catalog. |
| L6 / 11 | `glass` | `855/248 - high-index dense flint` | `S-NBH56 (OHARA)` | Patent Example 1 row 11 repeats nd=1.85478, vd=24.8. Same public catalog match as L5. |
| L8 / 14 | `glass` | `541/472 - likely custom BR carrier` | `S-TIL2 (OHARA)` | Patent Example 1 row 14 lists nd=1.54072, vd=47.2. OHARA S-TIL2 publishes code 541472 and matches the row. |

### Phase 2 - Retained-information audit

- Rechecked the code-only rows and the surrounding BR triplet rows in the local patent PDF. Stored `R`, `d`, `nd`, `vd`, effective-diameter-derived `sd`, and the existing aspherical surface 8 coefficients remain consistent with Example 1.
- Confirmed the existing variable focus gaps `d3` and `d17` match the infinity table values in Example 1.

### Phase 3 - Spectral / metadata enrichment

- Added no element-level spectral fields; the relabeled rows now resolve to catalog Sellmeier data.

### Phase 4 - Analysis sync

- Updated the glass table and BR carrier prose for N-KZFS8, S-NBH56, and S-TIL2.

## 2026-06-04 - Sweep 3 patent dPgF backfill

Local patent source: `patents/US20200012073A1.pdf` (untracked local file).

### Phase 3 - Spectral / metadata enrichment

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L3 / 5 | `dPgF` | absent | `0.008` | Patent Table 1 lists anomalous partial dispersibility `ΔθgF1 = 0.008`; this is the project's `dPgF` quantity. |
| L9 / 15 | `dPgF` | absent | `0.092` | Patent Table 1 lists anomalous partial dispersibility `ΔθgF2 = 0.092` for the BR positive element. |

No `nC`, `nF`, or `ng` rows were found in the extracted local patent text.

## 2026-07-29 - Catalog-coordinate correction

- Corrected L3 from modern `S-NPH2` to historical OHARA `PBH21`, the exact 1.92286 / 20.90 row.

## 2026-09-23 — First-added diagram audit, lens 94

Source: local `patents/US20200012073A1.pdf` (US 2020/0012073 A1, 300 dpi scan with text layer). Front page p. 1,
FIG. 1 p. 2 (sheet 1/19), ¶0030–¶0036 p. 22, ¶0068–¶0073 p. 26, First Numerical Embodiment pp. 28–29,
Tables 1–2 p. 36. Every number was read on the rendered page image.

### Retained after re-reading the source

- Example 1 remains the stored embodiment. It is 14 elements / 9 groups (counting the 1.00 mm Lp2 layer), one
  aspherical surface (8), one 497815 fluorophosphate element and the Lp2 anomalous-dispersion layer. Canon lists the
  production lens as 13 / 9 with one aspherical, one UD and BR optics. No example matches that count: Example 5 is
  14 / 10, Example 6 is 13 / 8 with two aspherical surfaces, Examples 2–4 are other focal lengths. Example 1 is the
  closest disclosed design, and the header and analysis now say so without speculating about the missing element.
- All 24 rows of R, d, Nd and νd match the table. Surface 8 asphere: K = 0 in the patent's standard
  1 − (1 + K)(h/R)² form, B −2.2875E−06, C −2.1286E−10, D 2.6709E−13, E 0. Paraxial EFL 86.526 mm (patent 86.53),
  BFD 14.901 against BF 14.91 (0.009 mm rounding), TL 134.49. No cover glass or filter is listed, so the last gap
  is the patent BF with no t/n folding. Stored element focal lengths match the patent's single-lens data and the
  thick-lens values; unit focal lengths 452.3 / 93.1 / 845.7 mm reproduce the unit data.
- Patent front page: Satoshi Maetaki (sole inventor), Canon Kabushiki Kaisha, published 9 January 2020.
- Focus: only L2 moves toward the object (¶0071, FIG. 1 arrow); L1 and L3 fixed. The patent tabulates only the
  infinity gaps d3 = 14.36 and d17 = 1.64. The stored close pair 1.61 / 14.39 puts the object 850.6 mm from the image
  (716.1 mm from S1), β = −0.126, for Canon's 0.85 m MFD and 0.12× maximum magnification. It stays as a labelled
  calculated state; there is no published intermediate state to preserve as a keyframe.
- ΔθgF1 = 0.008 (L3) and ΔθgF2 = 0.092 (L9) re-read from Table 1. `apd: "patent"` is kept on both: ¶0034–¶0035 and
  claim 1 make Lp1 and Lp2 anomalous-partial-dispersion materials. L4 stays `"inferred"`.
- Element `type` names agree with the R signs on all 14 elements.

### Changes

| Surface / field | Before | After | Evidence |
|---|---|---|---|
| S6 / S7 `sd` | 29.0 / 27.8 | 27.5 / 26.36 | Patent effective diameters 55.00 / 52.72 ÷ 2. Old values were tuned to a Canon marketing diagram. FIG. 1 draws L4 at ≈28 mm. |
| S8A / S9 `sd` | 24.8 / 22.4 | 20.62 / 17.58 | Patent 41.24 / 35.16 ÷ 2 (old values 20–27 % oversize). FIG. 1 draws L5 at ≈20.8 mm with a flat annulus outside the concave rear. |
| S11 / S12 / S13 / S14 `sd` | 15.84 / 15.6 / 15.44 / 14.93 | 16.2 / 16.3 / 16.3 / 16.0 | Patent ÷ 2 values clear only the infinity pencil. With the fixed f/1.24 iris (16.54 mm) and the 0.85 m object, the exact axial marginal ray reaches 16.11 / 16.21 / 16.23 / 15.90 mm. |
| S20 `sd` | 17.9 | 17.9 (kept) | Patent 18.20; 18.2 puts S20+S21 sag at 5.00 mm of the 5.40 mm gap, over the 90 % drawing limit. The 1.6 % shortfall is well clear of the rays (chief 14.4 mm at close focus). |
| `nominalFno`, `fstopSeries`, `maxFstop` | 1.2; series from 1.2; default | 1.24; series from 1.24; 16 | Patent Fno 1.24. Every effective diameter equals the exact f/1.24 pencil, and f/1.2 clipped S1–S11 by up to 1.1 mm. Production minimum aperture is f/16. |
| `elementCount` | 13 (production) | 14 | Physical patent count per LENS_DATA_SPEC; production 13 / 9 is stated in header, specs and analysis. |
| `varLabels` | D3 / D17 | d3 / d17 | Patent notation. |
| `doublets`, `cemented` | D1 / DL1 / DL2 / D2 | L1–L2 / L6–L7 / L8–L10 / L11–L12 | In the patent, DL1, DL2 and D2 are axial distances drawn in FIG. 1 (Table 1, claims 2 and 10), not lens groups. |
| L1 `glass` | S-PHM52 (1.61800 / 63.33) | PCD4 (HOYA catalog equivalent) | Exact 1.61800 / 63.40 row; S-PHM52 rounds to 63.3. |
| L2 `glass` | N-KZFS8 (Schott) | S-NBH8 (OHARA catalog equivalent) | Same 720347 coordinate (1.72047 / 34.71); OHARA matches the rest of the lens. |
| L9 `glass` | "BR optics (Canon proprietary organic)" | `Unmatched (604208 — Canon BR-optics organic material, inferred; …)` | The patent gives only nd, νd and ΔθgF. BR is inferred from production marketing. |
| Other `glass` labels | bare catalog names | "… catalog equivalent; patent vendor unspecified" | The patent names no glasses; all still resolve to the same exact-coordinate entries. |
| `focusDescription`, header, specs | Unsourced MFD solve, "Groups G2–G6" naming | Close state labelled calculated; patent Gn = lens numbering noted | ¶0068 uses Gn for individual lenses. |
| Analysis | — | Synced | Removed "lanthanum flint" (L2) and "10 distinct glass types" (12). L8/L10 were "convex/concave carriers" but are biconcave/biconvex. Asphere rim departure is −421 µm at 20.62 mm (was "0.37 mm at ~20 mm"). The ¶0041 citation became ¶0036, and the flange-based length explanation, close-focus labelling and f/1.24 note were updated. Air-spaced groups were renumbered so they do not collide with the patent's Gn. The unsourced f/1.2-vs-EF performance claim was removed. |

### Checks on the result

- Exact trace at f/1.24 (iris 16.54 mm, patent stop 33.10 ÷ 2), with Y = 21.64 mm reached at ω = 13.97° (patent 14.04°).
  No surface clips the infinity or 0.85 m axial pencil and no rim blocks the full-field chief ray. Close-focus chief
  rays checked with an infinity-object proxy (ω 11.93°). Corner bundle vignetting is 9–44 % per side behind the stop.
- Surface validator and image-circle floor pass. Asphere S8A at 20.62 mm has a 2.450 mm sag, −421 µm departure and an
  11.4° slope.
- Engine build: EFL 86.53, FOPEN 1.24, stop radius 16.54 mm, Petzval sum 0.00107 mm⁻¹.
- Live (headless): production shows f/1.2 and the oversized L4/L5. Local infinity and 0.85 m states render the
  patent's L5 flange step and the finite-object f/1.24 fan without clipping. The focus-movement overlay shows L2
  moving 12.75 mm toward the object with L1/L3 fixed, matching FIG. 1. Off-axis rays were not clicked.

### Open limitations

- The production lens (13 / 9) is not exactly any patent example; Example 1 has one more element.
- The close-focus gaps are calculated, not published. Intermediate focus is linear interpolation of d3/d17.
- The BR identification of L9 and the UD identification of L4 are inferences; the patent names no materials.
- The production f/1.2 maximum aperture is not modeled.
