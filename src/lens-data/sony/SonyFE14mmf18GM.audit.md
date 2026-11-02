# Audit Log - Sony FE 14mm f/1.8 GM

Patent: WO 2021/199923 A1, Numerical Example 1

## 2026-05-31 - Catalog-mismatch review

### Phase 1 - Glass corrections

| Element / surface | Before | After | Justification |
|---|---|---|---|
| L4 / S7 | `S-TIM28-class short flint...` | `694312 - short flint...` | Patent Table 1 row 7 gives nd=1.69416, vd=31.2. Public S-TIM28 is a different d-line row and resolves to nd=1.68893. No coefficient-backed exact 694312 entry is in the catalog. |
| L5 / S9 | `S-LAH95-class dense lanthanum flint...` | `910313 - dense lanthanum flint...` | Patent Table 1 row 9 gives nd=1.91048, vd=31.3. Public S-LAH95 resolves to nd=1.90366, outside the safety-net tolerance. |
| L10 / S18 | `S-NBH56-class dense flint...` | `863252 - dense flint...` | Patent Table 1 row 18 gives nd=1.86252, vd=25.2. Public S-NBH56 resolves to nd=1.85478. |
| L12 / S22 | `S-NBH56-class dense flint...` | `863252 - dense flint...` | Same patent glass as L10; row 22 repeats nd=1.86252, vd=25.2. |

No new catalog entries were added. WO 2021/199923 A1 publishes nd/vd and effective diameters, but not Sellmeier or usable vendor dispersion coefficients for 694312, 910313, or 863252.

### Phase 2 - Retained-information audit

- Patent Table 1 confirms the flagged surface nd/vd values and lists full effective diameters. Data `sd` values are half of the patent effective diameters: S7 24.92 -> 12.46, S9 20.98 -> 10.49, S18 21.81 -> 10.905, S22 24.11 -> 12.055.
- Patent Fig. 1 was checked against the stored SD profile. The large bulbous front element, taper toward the stop, and modest rear expansion match the data-file presentation.

### Phase 4 - Analysis sync

- Updated the analysis glass table and per-element text to use code-only patent glasses for L4, L5, L10, and L12.

## 2026-06-23 - Sony folder patent audit / APD + SD review

- Rechecked local `patents/WO2021199923A1.pdf`; the PDF is image-only for text extraction, so this pass relies on the rendered-table checks and the prior retained-information audit above.
- Patent Table 1 had already confirmed the glass rows and full effective diameters; stored `sd` values remain half of those patent diameters where diameters are present.
- Updated L3, L8, and L9 to `apd: "inferred"` because their patent nd/vd rows and production special-glass counts map to ED/Super-ED fluorophosphate classes. No patent dPgF or theta-gF values are assigned.
- No R/d/nd/vd, spacing, high-index, or SD edits were needed in this pass.
- Current generated glass reports show no active Sony catalog-mismatch row for this lens.

## 2026-07-29 - Remaining catalog-mismatch disposition

- Rechecked Numerical Example 1 / Table 1 in local `patents/WO2021199923A1.pdf`; the stored R, d, and patent
  coordinates remain unchanged.
- S3 `S-LAL18-class` -> `Unmatched (732547 patent e-line value...)` for 1.73234 / 54.70.
- S24A `S-LAH89-class` -> `Unmatched (856401 patent e-line value...)` for 1.85639 / 40.10.
- S26 `S-PHM52-class` -> `Unmatched (622639 patent e-line value...)` for 1.62228 / 63.90.
- These family comparisons do not establish d-line catalog identities, so the analysis now preserves them only as
  comparisons and the resolver no longer borrows their Sellmeier rows.

## 2026-07-30 - Remaining 856401 line-reference audit

- Rechecked S24A against the expanded catalog. OHARA L-LAH85V is a nearby d-line coordinate, but the patent
  publishes `Ne = 1.85639` at the helium-e line and does not identify a glass or provide a d-line conversion.
- Kept S24A explicit unmatched `856401`; assigning L-LAH85V would conflate e-line and d-line coordinates.
- No prescription, asphere, focus, aperture, or semi-diameter values changed.

## 2026-07-30 - Reference-line metadata

- Added `indexReference: "e"` to L2, L13, and L14, the three Table 1 rows already verified as native e-line values.
- Other elements remain on the default d-line reference; this mixed assignment follows the retained source audit instead
  of treating the whole prescription as one spectral convention.
- The runtime and generated reports now reject d-line catalog substitution for those three rows structurally. No source
  values or prescription geometry changed.

## 2026-10-08 — Elements e-referenced with catalog glasses

Supersedes the glass dispositions of the 2026-05-31, 2026-07-29 and 2026-07-30 entries above. All fourteen elements are now `indexReference: "e"` with the printed index and Abbe number unchanged, and each carries the HOYA catalog name its printed pair matches at the e line.

Reference line as the patent states it. Paragraph 0114 (publication page 21) defines `nd` as the refractive index at the d line (λ = 587.6 nm) of the lens that begins at surface i, and `νd` as that lens's d-line Abbe number. Table 1 (page 24) heads its columns nd and νd, and paragraph 0144 (page 25) draws the aberration plots for the d, C and g lines. The patent nowhere prints an e-line heading; the 2026-07-30 note that it publishes `Ne` for surface 24 was a reading of the catalog evidence, not of the page. Table 1 was re-read against the file: all fourteen index and Abbe pairs, the radii and the thicknesses agree.

Evidence. The printed indices are e-line values (546.07 nm) paired with d-line Abbe numbers. HOYA (7 July 2026, including obsolete glasses), OHARA (1 July 2026) and SUMITA (7 November 2025) Zemax catalogs and the SCHOTT, HIKARI and CDGM rows of the site catalog were evaluated at both lines. A match means the catalog formula's index is within 0.00002 of the printed one and the catalog νd rounds to the printed one decimal. Fourteen of fourteen elements match a HOYA row at the e line; none matches any row at the d line.

| Element | Printed n / νd | Named glass | Formula ne (difference) | Catalog νd | Catalog nd | Other rows matching at the e line |
|---|---:|---|---:|---:|---:|---|
| L1 | 1.58547 / 59.5 | HOYA M-BACD12 | 1.585470 (0.000000) | 59.46 | 1.58313 | HOYA BACD12 (obsolete), MP- and MC-BACD12 |
| L2 | 1.73234 / 54.7 | HOYA TAC8 | 1.732338 (−0.000002) | 54.67 | 1.72916 | OHARA S-LAL18 (obsolete), SUMITA K-LaK18 |
| L3 | 1.59489 / 68.6 | HOYA FCD515 | 1.594885 (−0.000005) | 68.62 | 1.59282 | HOYA FCD505 |
| L4 | 1.69416 / 31.2 | HOYA E-FD8 | 1.694154 (−0.000006) | 31.16 | 1.68893 | HOYA FD8 (obsolete, 1.694160), M-FD80; HIKARI J-SF8; SUMITA SF8 (obsolete) |
| L5 | 1.91048 / 31.3 | HOYA TAFD25 | 1.910483 (+0.000003) | 31.32 | 1.90366 | HOYA TAFD25L; OHARA S-LAH95; SCHOTT N-LASF46B; HIKARI J-LASFH13 |
| L6 | 1.77660 / 29.7 | HOYA NBFD29 | 1.776597 (−0.000003) | 29.74 | 1.77047 | none |
| L7 | 1.77173 / 49.2 | HOYA M-TAF101 | 1.771731 (+0.000001) | 49.24 | 1.76802 | none |
| L8 | 1.43810 / 95.1 | HOYA FCD100 | 1.438098 (−0.000002) | 95.10 | 1.43700 | none |
| L9 | 1.49845 / 81.6 | HOYA FCD1 | 1.498450 (0.000000) | 81.61 | 1.49700 | OHARA FPL51 (obsolete); CDGM H-FK61; HIKARI J-FK01A (νd 81.65) |
| L10, L12 | 1.86252 / 25.2 | HOYA NBFD25 | 1.862517 (−0.000003) | 25.15 | 1.85451 | none |
| L11 | 1.93323 / 20.9 | HOYA E-FDS1 | 1.933228 (−0.000002) | 20.88 | 1.92286 | HOYA E-FDS1-W, M-FDS1; SCHOTT N-SF66; OHARA PBH21 (obsolete) |
| L13 | 1.85639 / 40.1 | HOYA M-TAFD305 | 1.856391 (+0.000001) | 40.10 | 1.85135 | HOYA MP- and MC-TAFD305, M-TAFD315 (νd 40.07) |
| L14 | 1.62228 / 63.9 | HOYA PCD40 | 1.622281 (+0.000001) | 63.88 | 1.61997 | none |

At the d line the nearest row that carries the printed Abbe number is 0.0005 away for L1 (SCHOTT P-SK57Q1, 1.58600) and 0.001 to 0.010 away for the others; in most rows it is the matched glass at its own d-line index.

Naming. HOYA is the only vendor that covers every row, and L1, L3, L6, L7, L8, L10, L12, L13 and L14 match HOYA rows alone, so the HOYA name is used throughout. Where HOYA lists two grades with the same index and Abbe number, one is named and the other is in the table: FCD515 rather than FCD505, TAFD25 rather than TAFD25L, E-FDS1 rather than E-FDS1-W. The choice is not decided by the printed values; naming FCD505 and TAFD25L instead moves the violet focus by 3 µm and the red and blue foci by under 1 µm. The moulding grades M-BACD12, M-TAF101 and M-TAFD305 are used only on L1, L7 and L13, which are the three aspherical elements. Two points are close rather than identical and are stated in the labels: the E-FD8 formula gives 1.69415 against the printed 1.69416, and NBFD25 lists νd 25.15 (formula 25.155) against the printed 25.2. All thirteen names are in the site catalog and resolve to their own row at the e line. No element stays Unmatched.

Corroboration from the patent. Table 51 (page 64) gives the specific gravity of the first lens, SL1 = 3.01, for Example 1; HOYA lists 3.01 for M-BACD12, against 3.27 for BACD12, 3.05 for OHARA L-BAL42 and 3.19 for S-BAL42. Example 2's first lens prints 1.77173 / 49.2 with SL1 = 4.56, which is HOYA's value for M-TAF101.

Superseded labels. L1, L3, L7, L8 and L9 carried OHARA class labels (S-BAL42, S-FPM2, S-LAH66, S-FPL53/S-FPL55, S-FPL51) and stayed d-referenced, so the resolver accepted the OHARA d-line curves inside its 0.003 window and traced green at the catalog nd, from 0.0023 below the printed index (L1) to 0.0008 above it (L7). L4, L5, L10 and L12 were six-digit codes built from the e-line index (694312, 910313, 863252), which no catalog row carries. L2, L13 and L14 were already e-referenced but Unmatched.

Plates and extra layers. Table 1 lists no cover glass or filter rows and the file has no `rearPlates`; there is no resin layer or cemented compound member with its own row.

Effect. Dispersion tiers moved from 5 catalog and 9 Abbe-estimate surfaces to 14 catalog surfaces. Paraxial focus against the green channel moved from red −6 µm, blue −36 µm, violet −11 µm, with the reference trace 43 µm from green, to red +25 µm, blue −3 µm, violet +5 µm, with green on the reference trace. With all fourteen e-referenced but left on the Abbe estimate the same figures are +38, +3 and +47 µm. The reference trace itself is unchanged: EFL 14.4219 mm, F/1.85, the same half-field and stop, and the engine build output is identical before and after. The `vd` slot keeps the printed d-line Abbe number; catalog νe is 0.2 to 0.4 lower, inside the resolver's ±2 window, and it sets no dispersion because every element is on a catalog curve. The three `apdNote` strings now say "printed index and Abbe number" instead of "patent nd/vd"; no numeric field, surface, asphere or spacing changed.

## 2026-10-08 — Integration: two element types and the inventor's name

- L5 `type` Negative Meniscus → Biconcave Negative and L6 Positive Meniscus → Biconvex Positive. Their radii are −27.601 / +19.770 and +19.770 / −114.412 mm, and paragraph 0126 describes the cemented LN unit as a biconcave and a biconvex lens.
- The analysis header named the second inventor "Ora Matsuoka" from the WO front page. `patentAuthors` and the Sony FE 135mm f/1.8 GM model use "Dai Matsuoka" for the same inventor (松岡 大); the header now uses that spelling and notes the front-page form.
