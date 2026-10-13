# Audit Log - Canon RF 24-240mm F4-6.3 IS USM

Patent: US 2020/0142167 A1, Numerical Data 1
Catalog version: 5c81522

## 2026-05-04 - Patent row audit and glass relabel

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L4 / 6 | `glass` | `S-LAH66 type (852/408)` | `S-LAH89 (OHARA)` | Patent row 6 lists nd=1.85150, vd=40.8; project catalog S-LAH89 round-trips this pair, while S-LAH66 is nd=1.77250. |
| L5 / 8 | `glass` | `S-LAH66 type (852/408)` | `S-LAH89 (OHARA)` | Patent row 8 lists the same nd=1.85150, vd=40.8 glass as L4. |
| L8 / 15 | `glass` | `S-TIH6 type (762/265)` | `S-TIH14 (OHARA)` | Patent row 15 lists nd=1.76182, vd=26.5; catalog S-TIH14 matches this pair, while S-TIH6 is nd=1.80518. |
| L9 / 17 | `glass` | `S-BAM4 type (581/408)` | `581408 - barium crown (patent nd=1.58144, vd=40.8)` | Patent row 17 lists nd=1.58144, vd=40.8; no current catalog entry round-trips code 581408. |
| L10 / 18 | `glass` | `S-NPH2 type (001/291)` | `001291 - ultra-high-index dense flint (patent nd=2.00100, vd=29.1)` | Patent row 18 lists nd=2.00100, vd=29.1; project S-NPH2 is nd=1.92286, so the old label resolved incorrectly. |
| L11 / 20 | `glass` | `S-NPH1 type (001/255)` | `001255 - ultra-high-index dense flint (patent nd=2.00069, vd=25.5)` | Patent row 20 lists nd=2.00069, vd=25.5; project S-NPH1 is nd=1.80809. |
| L13 / 23 | `glass` | `S-NPH2 type (001/291)` | `001291 - ultra-high-index dense flint (patent nd=2.00100, vd=29.1)` | Patent row 23 repeats the L10 glass; same non-resolving code annotation used. |
| L14 / 25 | `glass` | `S-BAL42 type (531/559)` | `531559 - moldable barium light crown (patent nd=1.53110, vd=55.9)` | Patent row 25 lists nd=1.53110, vd=55.9; project S-BAL42 is nd=1.58313. |
| L16 / 28 | `glass` | `S-BSM81 type (593/686)` | `Unmatched (593686 borosilicate crown; catalog S-BSM81 does not round-trip patent nd=1.59282, vd=68.6)` | Patent row 28 lists nd=1.59282, vd=68.6. The current S-BSM81 catalog entry has a conflicting nd value, so `Unmatched` prevents a wrong Sellmeier resolution pending catalog source repair. |
| L19 / 33 | `glass` | `S-BSM14 type (639/554)` | `S-BSM18 (OHARA)` | Patent row 33 lists nd=1.63854, vd=55.4; catalog S-BSM18 round-trips this pair. |
| L21 / 36 | `glass` | `S-TIH14 type (847/238)` | `S-TIH53 (OHARA)` | Patent row 36 lists nd=1.84666, vd=23.8; catalog S-TIH53 round-trips this pair, while S-TIH14 is nd=1.76182. |

### Phase 2 - Retained-information audit

- Surface rows 1-37 were checked against Numerical Data 1: `R`, `d`, `nd`, and the image-side variable-gap labels match the patent table.
- Zoom variable gaps `d5`, `d13`, `d24`, `d31`, `d34`, and `d37/BF` match the wide/intermediate/telephoto table; surface `d` values match the wide-angle column.
- Patent effective diameters were rechecked against stored semi-diameters. The stored values are effective diameter / 2 except for the existing small rendering adjustments noted in the file header.
- Aspheric surfaces 25 and 26 were rechecked against the patent aspheric table. `K`, `A4`, `A6`, `A8`, `A10`, and `A12` match; `A14` remains zero-filled because the patent table stops at `A12`.

### Phase 3 - Spectral / metadata enrichment

- No line-index or partial-dispersion columns are published in Numerical Data 1, so no `nC`, `nF`, `ng`, or `dPgF` fields were added.
- Existing metadata already captures the patent reference, 2020 publication year, 21 elements / 15 groups, design focal lengths, design aperture, zoom positions, and rear inner-focus description.
- Left L16 as `Unmatched` rather than a six-digit token because the current catalog maps code 593686 to S-BSM81 with conflicting optical constants.

### Phase 4 - Analysis sync

- Updated the element-by-element narrative and glass summary table to match the corrected labels.
- Removed unsupported catalog names from L9, L10, L11, L13, L14, and L16 prose where no current entry round-trips the patent values.
- Updated L1 prose from S-LAH79 to S-LAH95; L7 from S-LAL54 to S-LAH66; L19 from S-BSM14 to S-BSM18; and L21 from S-TIH14 to S-TIH53.

## 2026-05-19 - Code-only glass source recheck

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L14 / surface 25 | `glass` | `531559 - moldable barium light crown (patent nd=1.53110, vd=55.9)` | retained | US 2020/0142167 A1 Numerical Data 1 row 25 lists nd=1.53110, vd=55.9. Searches for code 531559 and the exact nd/vd pair did not find a public manufacturer or refractiveindex.info catalog entry with usable coefficients. |

### Phase 2 - Retained-information audit

- Rechecked Numerical Data 1 row 25 and aspherical rows 25/26 in the local patent PDF; the data file remains consistent with the existing 2026-05-04 full audit.

### Phase 4 - Analysis sync

- No analysis changes were needed; the existing L14 prose already identifies 531559 as a no-current-catalog-match moldable barium light crown.

### Report status

- The 531559 row remains in `six-digit-glass-codes-missing-sellmeier.generated.md` because no coefficient-backed public catalog match was found.

## 2026-05-20 - Glass relabel follow-up

- Opened the data, analysis, and local patent PDF `patents/US20200142167A1.pdf`; local text confirms the queued rows at surfaces 10, 27, and 32.
- Updated L6 to `E-FDS1 (HOYA)`, L15 to `S-NBH56 (OHARA)`, and L18 to `S-TIH6 (OHARA)`.
- The lens remains below full Sellmeier coverage only because the previously audited code-only 531559 row and unmatched 593686 row still lack defensible coefficient-backed public matches.

## 2026-07-29 - Dispersion-coordinate follow-up

- Corrected L12 from `S-LAM3 type (720/437)` to `S-LAM52 (OHARA; 720/437)`. S-LAM52 is the exact 1.72000 / 43.69 catalog row encoded by the patent coordinate; S-LAM3 has νd = 47.93.
- Synchronized the analysis narrative and glass table.

## 2026-07-29 - Remaining catalog-mismatch audit

- Rechecked US 2020/0142167 A1 Example 1 surface 35: `R=-53.590`, `d=1.28`, `nd=1.83481`, and `νd=42.7` match the data file.
- Relabeled L20 from `S-LAH60 type (835/427)` to standard OHARA `S-LAH55`, the exact 835427 coordinate. The patent does not specify a vacuum-melt variant, so the non-V formulation is used.
- Synchronized the analysis glass table. No prescription geometry changed.

## 2026-08-07 - FCD515 coordinate recovery

- Visually rechecked US 2020/0142167 A1 Numerical Data 1 surface 28: L16 remains `nd=1.59282`, `νd=68.6`,
  code 593686.
- Existing HOYA FCD515 (`1.59282 / 68.63`) is the exact coefficient-backed equivalent; the prior S-BSM81
  comparison was the wrong catalog family. The production supplier remains unspecified.
- Strict and trusted coverage rise to `20/21`; only the separate 531559 row remains unmatched. No geometry changed.

## 2026-09-23 — First-added diagram audit, lens 74

Source: local `patents/US20200142167A1.pdf` (US 2020/0142167 A1, 33 pp.). Pages used: p. 1 (bibliography), p. 2
(FIG. 1, 300 ppi native raster), p. 20 (¶0047–0054, movement loci and focus), pp. 23–25 (¶0088–0090, Numerical
Data 1 surface, aspheric, various, unit and single-lens data), pp. 25–31 (Examples 2–5 general data, used to check
which example is stored) and p. 32 (Table 1). Every Numerical Data 1 row was read on the rendered page.

### Re-verified and retained

- Example identity: Example 1 (24.72–232.80 mm, F4.12–6.41, 21 elements / 15 groups) is the only 24–240 class
  example. Examples 2 and 3 reach 294.97 mm and 280.00 mm; Examples 4 and 5 are four-unit 24.72–200 mm designs.
- All 37 rows (R, d, nd, νd, stop at surface 14) match. Aspheres 25 and 26 match, K through A12. The patent writes
  the conic as (1 + k) with k = 0 on both, so K = 0.
- All six variable gaps at W / M / T match. No filter or cover plate is listed; BF is the air-equivalent distance,
  so d37 is stored as published. Paraxial EFL is 24.716 / 84.989 / 232.718 mm, and infinity defocus is −0.006 /
  −0.011 / −0.003 mm. Unit focal lengths reproduce the lens-unit table (cemented L18+L19 −53.51 mm, L20+L21
  −138.26 mm). Every element `fl` matches the single-lens table to rounding. Native scale is kept.
- A real-ray trace puts the entrance pupil 30.56 / 98.82 / 259.35 mm behind surface 1; the patent gives 30.57 /
  98.84 / 259.37 mm.
- Field: the patent's ω (37.55 / 14.28 / 5.31°) equals arctan(Y / f) with Y = 19.00 / 21.64 / 21.64 mm. A real chief
  ray at 37.55° lands at 16.93 mm, which means strong barrel distortion at the wide end. Real rays reach 21.64 mm at
  13.57° (M) and 5.05° (T).
- Zoom motion: the FIG. 1 arrows run object-ward for all six units, and the gap table agrees. Measured from the
  image, the unit front vertices move monotonically at the three stations; for example, unit 1 goes 141.99 →
  183.81 → 213.99 mm and unit 2 goes 123.68 → 134.10 → 137.74 mm. No unit reverses. D31 and D34 are each
  non-monotonic, but D31 + D34 = 19.27 mm at every station, so L4 and L6 move as one (derived) and L5 floats
  between them.
- Focus: ¶0053 moves L5 image-ward (arrow 5c), but no close-focus spacings are published. The identical var pairs
  are kept, and the app labels focus "Not modeled". `closeFocusM` 0.5 m is Canon's wide-end MFD.
- Glass: every nd/νd equals the table, and 20 of 21 labels resolve to coordinate-compatible catalog glasses.
- Element counts, specs, mount/format, groups, doublets and varLabels are unchanged. Element types agree with the R
  signs except L10 (below). `patentAuthors` (Shohei Kikuchi, the sole inventor) is already correct.

### Changes

| Item | Before | After | Evidence |
|---|---|---|---|
| Unit 2 sd (S6–S13) | 13.8 / 12.2 / 10.9 / 10.7 / 10.9 / 10.2 / 9.9 / 10.0 | 13.795 / 11.19 / 10.985 / 10.39 / 10.29 / 9.82 / 9.725 / 9.32 | Patent effective diameters ÷ 2. The old values were "rendering adjustments" of up to +1.01 mm with no patent source. The chief ray at 37.55° peaks at 9.42 mm on S7, inside 11.19 |
| Unit 3 sd (S15–S24) | 9.4 / 9.3 / 9.15 / 8.9 / 8.65 / 8.55 / 8.5 / 8.45 / 8.65 / 8.8 | 8.515 / 8.46 / 8.325 / 7.975 / 7.605 / 7.75 / 7.63 / 7.595 / 7.4 / 7.55 | Patent effective diameters ÷ 2 (old values 10–17 % larger, up to +1.25 mm). Each equals the tele F6.41 axial beam: 8.51 / 8.46 / 8.33 / 7.97 / 7.60 / 7.75 / 7.63 / 7.59 / 7.40 / 7.55 mm |
| `zoomApertureModel` | absent (fixed 6.63 mm iris) | `"from-nominal-fno"` | Only one stop diameter (16.32 mm) is published. The FNO schedule implies radii of 6.629 / 7.642 / 8.160 mm, and the tele radius equals the published stop diameter ÷ 2 |
| `fstopSeries` / `maxFstop` | starts 4 / default 16 | starts 4.12 / 22 | The first stop must be reachable, and the series already held f/22 |
| L10 `type` | Plano-Convex Negative | Plano-Concave Negative | S18 flat, S19 R = +20.522 (concave toward the image) |
| L14 `glass` | `531559 - moldable barium light crown (…)` | `Unmatched (531559; material not stated in patent, resin-class coordinate; …)` | The patent names no material; "barium light crown" was unsupported |
| Header | "Reversing group: D34"; SD note citing Canon's construction diagram | Monotonic object-ward motion with a derived L4/L6 link; aperture, BF and conic notes; patent-ED SD note | Findings above |
| Analysis | surface ranges off by one; d31 shown monotonic; D34 reversal attributed to "a renderer"; L10 "plano-convex"; E-FD15 / S-TIH53W / S-TIH10 names; L14 glass-molded / PMo claim; image circle 43.28 mm at every station | corrected ranges; d31/d34 reversal with sum invariant and unit positions; inferred iris schedule; wide Y = 19.00 mm and real 16.9 mm distortion note; E-FDS1 / S-NBH56 / S-TIH6; L14 material unstated; BF and pupil checks; departures at the rim | Findings above |

### Checks on the result

- The surface validator reports no errors, and the image-circle audit reports 0 undersized.
- The shared `clearap.mjs` solver locked onto spurious launch roots for this lens: it gave a wide-end ω of 38.4°
  with yImg 17.35 mm instead of 21.64, and chief heights of 50 mm at S1. A continuation-guided copy anchored on the
  real entrance pupil was used instead. At ω = 37.55 / 13.57 / 5.05° it finds no axial clipping and no chief-ray
  blocking. Full-field one-side vignetting is up to 41 % in unit 3, about 50 % in unit 4 and 78–85 % at unit 1.
  Unit 1 is unchanged from before the audit.
- The engine derives stop radii of 6.629 / 7.642 / 8.160 mm, FOPEN of 4.12 / 5.66 / 6.41 and stop Ø 13.26 /
  15.28 / 16.32 mm live. Its paraxial wide half-field estimate is now 35.4°, limited by S7, where it was 37.2°.
  Both are below the patent's 37.55°; a real ray at 37.55° clears S7 at 9.42 mm.
- L14 departures from the base sphere are −203 µm and +97 µm at h = 10 mm, as the analysis states, and −320 µm and
  +65 µm at the effective semi-diameters. S26's sag slope turns over just inside its patent 11.285 mm rim, at
  −0.010 slope.
- Prettier reports clean formatting.
- Live check with the headless local renderer: the wide, intermediate and tele infinity views render the smaller
  unit-2/3 rims. The focus slider reads "Not modeled", and f/22 is reachable. The zoom-movement overlay moves all
  six groups object-ward with a 72.00 mm maximum travel. Production was shot at the wide end as the baseline.
  Off-axis rays were not toggled.

### Open limitations

- No close-focus spacings are published, so focus travel is not modeled. Canon's 0.78 m tele MFD is not
  represented.
- The iris schedule is inferred from the FNO values.
- The L14 material is unknown (code 531559 has no catalog match); it may be an optical resin.
- The engine's paraxial wide half-field (35.4°) underestimates the patent's 37.55°.
- The wide-end real image height (16.9 mm at 37.55°) relies on digital distortion correction to fill the frame.
