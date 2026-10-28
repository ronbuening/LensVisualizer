# Audit Log — FUJIFILM FUJINON GF80mmF1.7 R WR

Patent: US 2021/0294073 A1, Example 1 (Tables 1-4)
Catalog version: 88dde1c

## 2026-05-19 — Patent glass relabel and asphere check

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L12 / S3 | `glass` | `S-TIM35 (OHARA)` | `S-TIH10 (OHARA)` | Patent Table 1 row 3 gives nd=1.72825, vd=28.31. Current catalog S-TIM35 is nd=1.69895; S-TIH10 round-trips nd exactly and is the closest OHARA candidate in the generated relabel report. |
| L21 / S5 | `glass` | `S-NBH56 (OHARA)` | `J-LASKH2 (Hikari)` | Patent Table 1 row 5 gives nd=1.75500, vd=52.34. Current catalog S-NBH56 is nd=1.85478; J-LASKH2 round-trips nd/vd to the patent pair. |
| L23 / S8 | `glass` | `S-BAH27 (OHARA)` | `S-BAL2 (OHARA)` | Patent Table 1 row 8 gives nd=1.57099, vd=50.80. Current catalog S-BAH27 is nd=1.70154; S-BAL2 round-trips to the patent pair. |
| L25 / S12 | `glass` | `S-TIM27 (OHARA)` | `E-FD5 (HOYA)` | Patent Table 1 row 12 gives nd=1.67270, vd=32.18. Current catalog S-TIM27 is nd=1.63980; E-FD5 round-trips nd exactly and vd within 0.01. |
| L26 / S14 | `glass` | `S-LAH7 (OHARA)` | `K-VC89 (Sumita)` | Patent Table 1 row 14 gives nd=1.81000, vd=41.00. S-LAH7 is unresolved in the current catalog; K-VC89 has code 810410 and round-trips to the patent pair. |
| L31 / S16 | `glass` | `S-LAH93 (OHARA)` | `883392 — high-index lanthanum (nd=1.88300, νd=39.22)` | Patent Table 1 row 16 gives nd=1.88300, vd=39.22. Current catalog S-LAH93 is nd=1.90525; no catalog candidate matches the patent pair closely enough, so a six-digit code label preserves the stored constants for future catalog upgrade. |
| L33 / S19 | `glass` | `S-BSM71 (OHARA)` | `N-BK7 (Schott)` | Patent Table 1 row 19 gives nd=1.51680, vd=64.21. Current catalog S-BSM71 is nd=1.64850; N-BK7 round-trips nd exactly and vd within 0.04. |
| L34 / S21 | `glass` | `S-BSM81 (OHARA)` | `E-FD2 (HOYA)` | Patent Table 1 row 21 gives nd=1.64769, vd=33.84. Current catalog S-BSM81 is nd=1.64000; E-FD2 round-trips to the patent pair. |

### Phase 2 — Retained-information audit

- Patent Table 1 rows 1-22 were checked against the data file: radii, center thicknesses, d-line indices, Abbe numbers, and fixed/variable air gaps match the Example 1 prescription.
- Patent Table 3 confirms `DD[4]` = 16.3400 / 1.9320 and `DD[15]` = 2.3200 / 16.7280; the file's `var` entries and first-position surface `d` values match.
- Patent Table 4 confirms KA = 1.0000000 for S14/S15, so the file's `K: 0` convention is correct.
- L26 / S14 `A20`: corrected `1.886046e-25` to `1.880646e-25` from Patent Table 4.
- Semi-diameters remain estimated values as noted in the file header; the patent table does not publish semi-diameters.

### Phase 3 — Spectral / metadata enrichment

- No patent line-index or partial-dispersion columns are provided beyond nd/vd, so no `nC`, `nF`, `ng`, or additional `dPgF` values were added.
- Existing metadata (`subtitle`, `patentYear`, design focal length/aperture, element/group count, mount/format, focus description) already matches the patent and production identification.

### Phase 4 — Analysis sync

- Updated element narratives and the glass-identification table to match the corrected catalog labels.
- Reframed the glass source note because the patent gives optical constants, not vendor glass names.
- Kept the existing Example 1 identification and aspherical coefficient discussion; its S14 `A20` table already matched Patent Table 4.

### Report status

- Generated reports now show no GF80 catalog-mismatch or relabel-candidate rows. One unresolved GF80 entry remains: L31 / S16 `883392`, intentionally code-labeled because no current catalog glass matches Patent Table 1 nd=1.88300, vd=39.22.

## 2026-05-19 — Six-digit Sellmeier source recheck

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L31 / S16 | `glass` | `883392 — high-index lanthanum (nd=1.88300, νd=39.22)` | `H-ZLaF68L (NHG)` | Patent Table 1 row 16 gives nd=1.88300, vd=39.22. NHG/Hubei New Huaguang publishes H-ZLaF68L with d-code 883392, nd=1.88300, vd=39.22, and formula constants, so the prior code-only status is superseded. |

- Updated [FujifilmGF80mmf17R.analysis.md](FujifilmGF80mmf17R.analysis.md) to describe L31 as a catalog-backed NHG glass.
- Added H-ZLaF68L to the runtime catalog in [glassCatalogData.ts](../../optics/glassCatalogData.ts).
- Batch verification is recorded in [six-digit-glass-codes-missing-sellmeier-reviewed.md](../../../agent_docs/generated/six-digit-glass-codes-missing-sellmeier-reviewed.md).

## 2026-07-29 — Dispersion-coordinate follow-up

- Corrected L11 from `S-NBH55 (OHARA)` to `S-LAH52Q (OHARA)`. S-LAH52Q exactly matches 1.79952 / 42.24; S-NBH55 is the distinct 1.80000 / 29.84 glass.
- Synchronized the element narrative and glass summary.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 1 Table 1 on PDF page 18 (printed page 8) at 160 dpi: surface 22 d = 20.1247; surfaces 23–24 are the
  parallel-plate optical member PP, 3.2000 mm, nd 1.51680, νd 64.20; surface 24 → Sim is 1.0500 mm. 20.1247 +
  3.20/1.51680 + 1.05 = 23.2844 reproduces the legacy folded 23.2843 and Table 2 Bf 23.28.
- Surface 22 now stores the patent's 20.1247 mm, with `rearPlates` PP (N-BK7, consistent with L33's 1.51680 glass;
  `resolveCompatibleGlass` accepts 1.51680 / 64.20) and gapAfter 1.05 mm. `closeFocusM` 0.7 is the patent's quoted
  object-to-image distance and was left unchanged.
- Paraxial check against the previous data: EFL identical; defocus changes by 0.0001 mm at infinity and at 700 mm
  (rounding in the old 23.2843). Physical track grows by 1.090 mm (3.20 × (1 − 1/1.51680)).


## 2026-10-27 — Rimmer localization audit (asphere data)

Patent: US 2021/0294073 A1, Example 1. Table 1 and Table 2 are on PDF page 18 (printed page 7);
Table 3 and Table 4 are on PDF page 19 (printed page 8). FIG. 2 is on PDF page 2; FIG. 3 is on PDF page 3.
The coefficient digits/signs/exponents were read from 400 dpi table crops, with the complete pages also inspected.

### Phase 2 — Retained-information audit

| Surface | Field | Before | After | Evidence |
|---|---|---|---|---|
| 14A | `A3` | Omitted (zero) | `0` | Table 4, PDF p. 19, Sn 14, A3 row. |
| 15A | `A3` | Omitted (zero) | `0` | Table 4, PDF p. 19, Sn 15, A3 row. |
| 14A | `A5` | Omitted (zero) | `-2.6513493e-7` | Table 4, PDF p. 19, Sn 14, A5 row. |
| 15A | `A5` | Omitted (zero) | `-2.3150181e-7` | Table 4, PDF p. 19, Sn 15, A5 row. |
| 14A | `A7` | Omitted (zero) | `8.2564362e-10` | Table 4, PDF p. 19, Sn 14, A7 row. |
| 15A | `A7` | Omitted (zero) | `4.7477332e-10` | Table 4, PDF p. 19, Sn 15, A7 row. |
| 14A | `A9` | Omitted (zero) | `-1.7643417e-11` | Table 4, PDF p. 19, Sn 14, A9 row. |
| 15A | `A9` | Omitted (zero) | `-8.2435003e-13` | Table 4, PDF p. 19, Sn 15, A9 row. |
| 14A | `A11` | Omitted (zero) | `4.7629976e-14` | Table 4, PDF p. 19, Sn 14, A11 row. |
| 15A | `A11` | Omitted (zero) | `1.2547704e-14` | Table 4, PDF p. 19, Sn 15, A11 row. |
| 14A | `A13` | Omitted (zero) | `-1.9007385e-16` | Table 4, PDF p. 19, Sn 14, A13 row. |
| 15A | `A13` | Omitted (zero) | `-1.6440179e-17` | Table 4, PDF p. 19, Sn 15, A13 row. |
| 14A | `A15` | Omitted (zero) | `-6.3292092e-19` | Table 4, PDF p. 19, Sn 14, A15 row. |
| 15A | `A15` | Omitted (zero) | `-7.9972791e-20` | Table 4, PDF p. 19, Sn 15, A15 row. |
| 14A | `A17` | Omitted (zero) | `4.8308631e-21` | Table 4, PDF p. 19, Sn 14, A17 row. |
| 15A | `A17` | Omitted (zero) | `1.5944044e-22` | Table 4, PDF p. 19, Sn 15, A17 row. |
| 14A | `A19` | Omitted (zero) | `-3.6580337e-24` | Table 4, PDF p. 19, Sn 14, A19 row. |
| 15A | `A19` | Omitted (zero) | `5.0171611e-25` | Table 4, PDF p. 19, Sn 15, A19 row. |
| 8 | `sd` (mm) | 16.0 | 17.1 | Table 2 f/1.75 axial-beam floor; FIG. 2 stepped L23 rim permits S9 to remain 16.0. |
| 21 | `sd` (mm) | 18.0 | 19.2 | L34 square rim in FIG. 2; paired with S22. |
| 22 | `sd` (mm) | 18.0 | 19.2 | Table 2 19° / Y = 27.35 mm chief ray reaches S22 at 18.2899 mm (floor); FIG. 2 gives 19.2 mm on the lens's own scale (SD procedure Step 1 takes the figure value). |
| focus.conjugates[0] | `source` wording | PP omitted; air-equivalent model | PP traced in rearPlates at physical thickness/gaps | Table 1 rows 23/24 and existing rearPlates; numeric object distance stays 576.6736 mm. |

All printed non-zero A3–A20 terms are now encoded; the explicit A3 zeros document the source's starting order.
The former file was an even-only truncation, not a fitted even-order approximation. Every previously stored even
coefficient agrees with Table 4, including S14 A20 = 1.8806460e-25. Paragraphs 0085–0092 define the sum over powers
h^m in mm, with no normalization (scale s = 1); KA = 1.0000000 on both surfaces converts to K = 0. The Table 1
R/d/nd/vd rows 1–24 and both Table 3 focus columns agree with the retained prescription, including the traced PP.
No printed radius, spacing, glass constant, even coefficient or conic was altered.

The baseline failed field at 2.82° had a -1 pupil ray at S14 height 14.04 mm, beyond its truncated-polynomial
turnover at 12.86 mm, and image-plane error 8.9279 mm. Restoring the omitted terms moves the first S14 reversal to
about 19.61 mm, beyond sd = 18.4 mm. S15 has no reversal inside sd = 19.2 mm. No aspheric rim cap is warranted.
Base-sphere departures at the retained rims change from -2.2 to -133.3 µm at S14 and -1320.6 to -77.8 µm at S15.

### Rims and figure evidence

The source has no printed effective-diameter column. The stated axial beam requires S8 = 17.1 mm at the file's
0.1 mm precision; the old 16.0 mm rim limited the lens to about f/1.84 against printed f/1.75. FIG. 2's enlarged
L23 view shows the image-side curve ending inside the front junction rim, so only S8 rises and S9 retains 16.0 mm.
The proposed S8 value is below the figure's optical extent and passes the geometric validator.

The exact 19° chief ray reaches image height 27.3495 mm, matching printed Y = 27.35 mm, but reaches S22 at
18.2899 mm against the old 18.0 mm rim, so the rim is floor-proven and Step 1 of the SD procedure takes its value
from the figure. `npm run audit:patent-figure` on FIG. 2 (PDF p. 2, crop `0.195,0.665,0.715,0.895`, 77.01 µm/px) reads
L34 at 23.18/23.33 mm (ENV/RIM, agreeing), level with L31–L33 (23.56–23.79 mm); a column scan of a 300 dpi render
confirms the flat L34 top and bottom at 302 px from the axis. The figure draws the whole lens 1.210× the data's rims
(median figure/data), so on the lens's own scale L34 is 23.26 / 1.210 = 19.2 mm. S22 takes 19.2 mm, above the floor;
S21 follows to preserve FIG. 2's square L34 rim. The chief ray then reaches the full 27.39 mm format corner, and the
vignetting tab reads RI at all eight fields, 0.058 at 19° (unvignetted fraction 0.081). The candidate rims were checked by substitution before retention. S14/S15 and all other rims are retained.
The figure-measurement screen was contaminated by leader/bracket/flange ink on some G2 elements; its automatic
L23/L25 estimates were not used. Manual inspection of the zoomed optical curves determines the stepped L23 and
square L34 relationships.

### Optical result and the source's TL summary

Full-pupil / 85% / 70% / 50% d-line LSA changes from -8.609 / -2.212 / -0.439 / -0.034 mm to
-0.010 / +0.021 / +0.014 / +0.007 mm. EFL remains 78.6822 mm. The corrected edge near 19° gives tangential/sagittal
focus shifts +0.155 / -0.010 mm and distortion +0.949%; these have FIG. 3's signs and shapes within its ±500 µm
spherical/astigmatism and ±3% distortion axes. The former edge gave -25.540 / -6.534 mm and -8.428% at 19.71°,
far outside those plots. All sampled modeled fields now have localized rays and relative illumination; the axial
beam clears the inferred rims at the stated design aperture.

Tables 1/3 give first-to-last-lens-vertex length 98.9517 mm, physical track 123.3264 mm and air-equivalent TL
122.2361 mm under paragraph 0083. Table 2 instead prints TL = 103.58 mm; subtracting DD4 + DD15 = 18.6600 mm
gives 103.5761 mm. Table 17 condition (1), PDF page 21, prints 4.985, consistent with that shorter summary TL;
the complete spacing sum gives 6.943. No change to a printed prescription value is justified by this discrepancy.
It is recorded as an `unresolved` `source.errata` entry with a header note and an `sd-audit-queue.md` Section G
row. No single-slip search is warranted: the full printed polynomial reproduces the aberration
figures, EFL, Bf and the 19° image height.

### Phase 4 — Analysis sync

Replaced the even-only/schema-limitation statements with the full-polynomial transcription and retained both
canonical coefficient tables. Added the recomputed rim departures, estimated-rim rationale and qualified
illumination behavior. Corrected the stale finiteConjugates/omitted-PP wording to focus.conjugates and the existing
rearPlates model. Replaced the blanket all-conditions-independently-verified claim with the unresolved TL finding.

### Follow-ups

The outer-field illumination remains sensitive to inferred rims and is not a production-lens measurement. The
printed 27.35 mm image height is slightly smaller than the format's 27.39 mm corner; the latter crosses S22 at about
18.32 mm, inside the 19.2 mm rim. Coordinator to review the interactive lens page/aspheric overlay:
browser access was unavailable, and a scratch-only local server was denied by the sandbox (listen EPERM).
The coordinator owns repository-wide gates and commits.
