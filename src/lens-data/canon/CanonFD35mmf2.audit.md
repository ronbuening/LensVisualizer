# Audit Log - Canon FD 35mm f/2 S.S.C. (I)

Patent: US 3,748,022, single numerical embodiment
Catalog version: local working tree, 2026-05-19

## 2026-05-19 - Full patent audit and glass relabel

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L4 / surface 7 | `glass` | `LaK (700480, S-LAL7 family)` | `S-LAM51 (OHARA)` | Patent row R7 lists N=1.700, V=48.0. OHARA S-LAM51 publishes nd=1.70000, vd=48.08 and code 700481, while current S-LAL7 is nd=1.65160, vd=58.55. |
| L5 / surface 9 | `glass` | `LaK (774492, probable thoriated)` | retained | Patent row R9 lists N=1.7737, V=49.2. Searches for code 774492 and the exact nd/vd pair did not find a public manufacturer or refractiveindex.info catalog entry with coefficients. |
| L8 / surface 14 | `glass` | `LaK (774492, probable thoriated)` | retained | Patent row R14 repeats N=1.7737, V=49.2. The repeated pair is kept as probable thoriated dense lanthanum crown rather than forced to a modern catalog approximation. |

### Phase 2 - Retained-information audit

- Checked the patent's normalized surface rows against the data file after the documented 35x scale factor. Stored radii, thicknesses, glass nd/vd values, and back focus match to patent rounding.
- Confirmed the floating-focus variable interval D is split into `10` and `STO` around the inferred stop, consistent with the data file note; the patent itself does not publish a stop surface.
- Confirmed the patent publishes no effective diameters or aspherical coefficients; semi-diameters and `asph: {}` remain project-authored.

### Phase 3 - Spectral / metadata enrichment

- The patent publishes only N/V glass constants, not C/F/g line indices or partial-dispersion values, so no `nC`, `nF`, `ng`, or `dPgF` fields were added.
- Existing metadata already records the patent reference, 1973 publication year, Canon maker, FD mount, full-frame format, and 9 elements / 8 groups.

### Phase 4 - Analysis sync

- Updated the E4 glass-identification prose and glass summary table from S-LAL7/N-LAK22 speculation to S-LAM51.
- Retained the E5/E8 thoriated-glass discussion for the unresolved 774492 pair.

### Report status

- The S-LAM51 relabel removed the former 700480-family row, while the unresolved 774492 rows remain in `six-digit-glass-codes-missing-sellmeier.generated.md`.

## 2026-07-26 - BASF7 catalog backfill

- Reclassified L3 code `702411` as `BASF7 (Sumita coefficient-backed equivalent), 702411`.
- Sumita's official 2025-11-07 all-glass Zemax catalog publishes the exact coordinate and a formula-3 polynomial.
- Updated the analysis while retaining the historical-supplier caveat.
- This relabel reuses the BASF7 catalog entry added during the Nikon 80-200mm f/4.5 glass audit.
- L3 now resolves through BASF7 and the lens reaches 7/9 trusted and
  Sellmeier coverage, with only the two `774492` rows remaining unresolved.

## 2026-09-21 — First-added diagram audit, lens 45

Source: local `patents/US3748022.pdf` (5 pages, 300 dpi bilevel scan; the OCR text layer is unreliable and was not
used). Front page (bibliographic data and the larger FIG. 1), p. 2 (FIG. 1–4), p. 3 (cols. 1–2, conditions and the
0.2× / 5 % limits), p. 4 (cols. 3–4, prescription and claim 1). Canon Camera Museum product page for the production
specifications (8 groups / 9 elements, 0.3 m, 0.194×, f/16, March 1973).

### Retained after re-reading the source

- Front page: US 3,748,022, Akira Tajima, Canon Kabushiki Kaisha (repo convention `Canon Inc.`), granted
  24 July 1973. One numerical embodiment; claim 1 repeats the same table.
- All 17 radii, 16 thicknesses and 9 N/V pairs match the rendered table after the uniform ×35.0 scale (values
  rounded to 0.01 mm). f = 1, 1:2, 2ω = 64°. Computed EFL 34.99 mm; exact chief ray reaches Y = 21.6 mm at
  ω = 32.14°.
- Surfaces 1–10 reproduce the patent's own checks: φ1 −0.6575 (patent −0.6575), φ2 +1.1551 (+1.1549),
  D 0.4763 (0.4762), α 0.8593 (0.8590).
- Stop: not tabulated. FIG. 1 iris line sits 40.5 px behind R10 in a 97 px gap (42 %); the stored 45 % split is
  inside the drawing's precision. The drawn iris opening ends 154–157 px from the axis (≈ 9.6 mm), equal to the
  paraxial f/2 marginal height 9.61 mm, so the authored STO `sd` 9.6 is kept. The engine's real-ray f/2 iris is
  10.39 mm.
- `nominalFno` 2, `fstopSeries` from f/2, default `maxFstop` 16 (production minimum aperture f/16), FD mount,
  135 format, 9 / 8 counts, element `type` strings against the R signs, doublet span 13–15.
- L1 20.5/19.5, L2 19.0/14.4 and L6 11.0/9.8 `sd`: FIG. 1 reads L1 20.1, L2 flange 17.8, R4 curve end 12.0 (by
  height) to 13.1 mm (by sag), L6 10.3 mm — all within about 15 %. Surface 12 cannot grow: 10.0 mm already fails
  the 12→13 gap-intrusion check, and FIG. 1 shows L6 and L7 nearly touching at the rim.
- L3 `fl` −785.2 is the unrounded-patent value (−784.4 from the rounded mm rows); L3 BASF7 and L4 S-LAM51 labels.

### Source conflict (unresolved)

The patent prints back focus = 1.1066 (38.73 mm) in the description and in claim 1. The table gives a paraxial BFD
of 1.0844 (37.96 mm). A 20,000-sample perturbation of every R and d within its last printed digit spans only
1.0788–1.0898, and no single R, d or N change reaches 1.1066 while holding f = 1 and the published φ1/φ2/D. The
earlier "4-digit rounding" explanation in the header and analysis was wrong and has been replaced. Table followed.

### Changes

| Surface / field | Before | After | Evidence |
|---|---|---|---|
| 5, 6 `sd` (L3) | 16.5 / 16.5 | 12.5 / 12.5 | FIG. 1 rim 196 px at 16.2 px/mm = 12.1 mm (scale: 866 px between the R1 and R17 vertex crossings for 53.34 mm). Stored value was 36 % above the figure. |
| 7, 8 `sd` (L4) | 16.5 / 15.5 | 12.5 / 12.5 | FIG. 1 rim 195 px = 12.0 mm. Real f/2 marginal ray needs 12.04 / 12.01 mm, so the figure value is raised about 0.5 mm. |
| 9 `sd` (L5 front) | 15.5 | 12.5 | FIG. 1 draws L5 as a block, 191–193 px = 11.8–11.9 mm front and rear; axial ray 11.97 mm. Rear surface 10 stays 12.5. |
| 13, 14, 15 `sd` (L7–L8) | 12.8 / 12.8 / 14.5 | 10.8 / 10.8 / 10.8 | FIG. 1 doublet rim 166 px = 10.2 mm, one height for both elements; axial ray 9.60 / 9.96 / 10.27 mm (10.59 mm on 15 at closest focus). |
| 16, 17 `sd` (L9) | 14.5 / 14.5 | 11.2 / 11.2 | FIG. 1 rim 181 px = 11.2 mm; axial ray 10.09 mm (10.50 mm at closest focus), chief ray 7.5 mm. |
| STO `d`, 17 `d` | 2.97, 37.95 | 2.96, 37.96 | D10 = 0.1541 × 35 = 5.3935 → 5.39 mm (was 5.40); last gap reset to the paraxial BFD 37.957 mm. |
| `focusPositions`, `var` | two states; close state D10 4.27, BF 45.5 (focused at 276 mm, m −0.194, under a 0.3 m label) | `[0, 0.769, 1]`; D10 5.39 / 4.71 / 4.40, BF 37.96 / 42.56 / 44.61 | Middle keyframe is the patent's 0.118× row (D10 patent; BF calculated, object-to-image 390.3 mm → 0.300/0.390). Closest keyframe recalculated so the 0.3 m label is a 300 mm conjugate (m −0.171), D10 continued at ΔD10/Δshift = −0.149 from the two published states. |
| L7 `fl`, L8 `fl` | −50.7, 31.7 | −46.9, 30.2 | Thick-lens values in air (φ −0.7465, +1.1582 at f = 1). Doublet 72.7 mm unchanged. |
| L1 `glass` | `LaK (697485, S-LAM2 family)` | `S-LAM59 (OHARA catalog equivalent …)` | Patent 1.697 / 48.5; catalog S-LAM59 1.69700 / 48.52. S-LAM2 is 1.744 / 44.8. |
| L2 `glass` | `BK7 (S-BSL7, exact match)` | `S-BSL7 (OHARA catalog equivalent …)` | Patent 1.51633 / 64.0; S-BSL7 1.51633 / 64.14, Schott BK7 is 1.51680. |
| L6 `glass` | `SF (762265, S-TIH6 family)` | `S-TIH14 (OHARA catalog equivalent …)` | Patent 1.76182 / 26.5; S-TIH14 1.76182 / 26.52. The S-TIH6 / S-TIH14 names were swapped between L6 and L7. |
| L7 `glass` | `SF6 (805254, S-TIH14, exact match)` | `S-TIH6 (OHARA catalog equivalent …)` | Patent 1.80518 / 25.4; S-TIH6 1.80518 / 25.43. |
| L9 `glass` | `LaF (806408, S-LAH53 family)` | `S-LAH53 (OHARA catalog equivalent …)` | Patent 1.8061 / 40.8; S-LAH53 40.93, HOYA NBFD13 40.73 — tie, existing resolution kept. |
| L5, L8 `glass`, roles | `LaK (774492, probable thoriated)` | `774492 — dense lanthanum crown (no catalog equivalent; …)` | No repo-catalog glass within 1e-3 of 1.7737 / 49.2 (nearest 1.77250 / 49.5–49.6). The patent and Canon say nothing about thorium; the claim is now worded as collector attribution in the header and analysis. |
| `subtitle`, `focusDescription`, header | — | names the single embodiment; header documents scale, BF conflict, stop, focus keyframes, SD basis, glass | — |

Analysis synced: production correlation worded as inference; BF conflict paragraph; α described as a normalized
slope (the f/2 marginal ray converges at about 12°, not 41°); focus keyframes and 0.3 m state; new Semi-Diameters
subsection; E1/E2/E6/E7/E9 glass names; E7/E8 powers and φ/V (−0.029, +0.024, pair −0.070); thorium section
rewritten as attribution; unsupported "non-thoriated" and redesign-reason statements removed.

### Checks on the result

- Surface validator: no errors. Image-circle floor: 0 undersized.
- Probe: EFL 34.992 mm, BFD 37.957 mm (last gap 37.96); keyframe 2 focuses at 390.3 mm, m −0.1179; keyframe 3 at
  300.2 mm, m −0.1709.
- Exact trace, Y = 21.6 mm: ω 32.14° (30.7° / 30.1° at the two finite keyframes); no axial clipping or chief-ray
  blocking at any keyframe. Full-field upper-side clipping 17 % (12), 20–29 % (14–15), 51–54 % (16–17); the
  meridional full-field bundle passes about 41 % of the f/2 stop diameter (62 % before), 70 % at 22.4°.
- Engine: EFL 34.99, f/2, stop radius 10.39 mm, paraxial half-field 37.3° (limited by surface 4), unchanged.
- Glass resolution: 7 of 9 elements resolve to a single catalog candidate within Δnd 3e-6 and Δνd ≤ 0.14 (labels
  carry no second glass name or code, so no ambiguity rows are added); L5/L8 stay on the Abbe fallback.

### Open limitations

- Back-focus conflict above. Every `sd`, the stop position and the stop's share of D10 during focus are estimates
  or assumptions; the patent publishes none of them.
- Canon's 0.194× at 0.3 m is not reproducible: this prescription gives 0.171× at 300 mm and needs 276 mm for
  0.194×. The 0.3 m state is an extrapolation of the patent's proportional rule beyond its only published point.
- Glass 774492 has no sourced catalog entry; thorium content is unverified attribution.
- Whether the same formula was used in the pre-S.S.C. concave-front FD 35mm f/2 barrels (JP priority March 1971)
  was not checked.
