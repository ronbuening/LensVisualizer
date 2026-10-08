# Audit Log — Sony FE 70-200mm F2.8 GM OSS II

Patent: JP 2023-039817 A, Example 2

## 2026-05-20 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L32 / S10 | `glass` | `TAFD30 (HOYA)` | `863248 — ultra-dense flint` | Patent Table 6 lists nd=1.86290, vd=24.8; no unique public coefficient-backed match found. |
| L52 / S17 | `glass` | `TAFD30 (HOYA)` | `863248 — ultra-dense flint` | Same patent row value as L32. |
| L53 / S19 | `glass` | `TAFD30 (HOYA)` | `863248 — ultra-dense flint` | Same patent row value as L32. |
| L54 / S20 | `glass` | `S-BAL41 (OHARA)` | `585594 — barium crown` | Patent Table 6 lists nd=1.58547, vd=59.4; catalog candidates were not unique. |
| L55 / S22A | `glass` | `S-BAL41 (OHARA)` | `585594 — barium crown` | Same patent row value as L54. |
| L61 / S24 | `glass` | `S-NPH53 (OHARA)` | `933209 — ultra-dense flint` | Patent Table 6 lists nd=1.93323, vd=20.9; no unique public coefficient-backed match found. |
| L62 / S25 | `glass` | `S-TIM22 (OHARA)` | `658397 — short flint` | Patent Table 6 lists nd=1.65803, vd=39.7; candidates were ambiguous. |

### Phase 2 — Retained-information audit

- Confirmed the flagged glass rows against local `patents/JP2023039817A.pdf`, Table 6. Stored nd/vd values matched the patent rows, so only labels changed.
- Non-flagged prescription fields were not fully rekeyed in this queue pass.

### Phase 4 — Analysis sync

- Updated the companion analysis file to remove unsupported exact-match claims for L32/L52/L53, L54/L55, L61, and L62.

## 2026-06-23 - Sony folder patent audit / APD + SD review

- Rechecked local `patents/JP2023039817A.pdf` and the current analysis sidecar against the data file.
- Prior Table 6 glass corrections remain valid; the current generated glass reports show no active Sony catalog-mismatch row for this lens.
- Updated L12 and L13 to `apd: "inferred"` for Super ED fluorophosphate class, and L31, L51, and L81 to `apd: "inferred"` for ED fluorophosphate class. The patent publishes nd/vd only for these rows, so no dPgF values are assigned.
- No R/d/nd/vd, spacing, high-index, or SD edits were needed in this pass.

## 2026-07-29 - Remaining unmatched-glass disposition

- Rechecked Example 2 / Table 6 in local `patents/JP2023039817A.pdf`; S7 remains 1.77621 / 49.60 and its R/d
  values are unchanged.
- S7 `S-LAH66 class (OHARA)` -> explicit unmatched 776496 lanthanum-glass coordinate. S-LAH66 matches νd
  but misses nd by about 0.0037, outside the resolver tolerance.
- Synchronized the L21 element narrative and glass table while retaining S-LAH66 only as a family comparison.

## 2026-07-29 - Incompatible named-label audit

- Rechecked JP 2023-039817 A Example 2, Table 6, surface 27: `R=53.755`, `d=6.52`,
  `nd=1.61669`, and `νd=44.3` match the stored L71 prescription.
- Replaced the incompatible `E-FEL6 class (HOYA)` annotation with unresolved code `617443`.
  HOYA E-FEL6 is 1.53172 / 48.84 (532488), so it cannot represent this patent row; no exact
  coefficient-backed public catalog match was found.
- Synchronized the element narrative, glass table, and source note. No prescription geometry changed.

## 2026-07-30 — L41 / 792257 source review

### Patent evidence

- Rendered and visually checked local `patents/JP2023039817A.pdf`, PDF page 21, Example 2 / Table 6.
- Surface 12 / L41 is explicitly listed under the table's `ndi` and `νdi` columns as `1.79191 / 25.7`.
- The patent supplies no glass name, supplier, secondary line index, or partial-dispersion value for this row.

### Catalog disposition

- Current first-party OHARA, HOYA, SUMITA, and Hikari coefficient data contain no d-line glass inside the runtime
  compatibility window.
- Hikari J-SF11 has the superficially similar e-line coordinate `ne = 1.791929`, `νe = 25.43`, but its published
  d-line coordinate is `nd = 1.784720`, `νd = 25.64`. Table 6 is explicitly d-line data, so that row is not a safe
  match.
- Replaced the uncertain family wording with
  `Unmatched 792257 dense flint (patent-listed; supplier unidentified)`. Prescription geometry and optical
  coordinates are unchanged; the element remains on its patent-coordinate Abbe fallback.

### Analysis sync

- Updated the L41 narrative and glass table to document the source-confirmed d-line coordinate and the rejected
  reference-line coincidence.

## 2026-08-18 — Ohara L-BAL43 coefficient assignment

- Visually rechecked local `patents/JP2023039817A.pdf`, PDF page 21, Example 2 / Table 6. Surfaces 20 and 22 both use `nd = 1.58547`, `νd = 59.4`.
- Added low-softening-temperature Ohara L-BAL43 from the first-party 2026-07-01 AGF; its Sellmeier curve evaluates to `1.585729 / 59.697`.
- Relabeled L54 and XA element L55 to L-BAL43 as catalog equivalents while retaining patent code `585594` and the unspecified production supplier. The other unresolved rows are unchanged.
- Rechecked L11 / `777297` against the retained HOYA MC-TAF115 row. Although its printed nominal coordinate is
  close, the same vendor row's polynomial evaluates to `nd = 1.770473` instead of nominal `1.777047`; the
  internally inconsistent source is not accepted as coefficient evidence, so L11 remains code-only.

## 2026-10-08 — Elements e-referenced with catalog glasses

JP 2023-039817 A ¶0056 (page 13) defines `ndi` as the index of each surface's material at the d line, 「ｄ線（波長５８７．６ｎｍ）に対する屈折率」, and `νdi` as the d-line Abbe number; Table 6 (page 21) heads its columns `ndi` and `νdi`. The printed indices are nevertheless e-line values (546.07 nm) paired with d-line Abbe numbers printed to one decimal. All 17 elements (12 distinct pairs) match a HOYA or OHARA row at the e line: the index within 0.00002 and the row's νd rounding to the printed decimal. Sixteen of the 17 equal the named row to all five printed decimals. At the d line, no row of the HOYA (current and discontinued), OHARA, Sumita or HIKARI vendor files, or of the site catalog, has an index within 0.00002 of any of the 12 printed values. Table 6 was re-read from the rendered page: all 17 stored pairs equal the printed ones, and no stored number was changed.

| Element | Printed n / νd | Named row: catalog ne / νd (nd) | Other rows matching at the e line |
|---|---|---|---|
| L11 | 1.77660 / 29.7 | NBFD29 (HOYA): 1.776597 / 29.74 (1.77047) | none |
| L12, L13 | 1.43810 / 95.1 | FCD100 (HOYA): 1.438098 / 95.10 (1.43700) | none |
| L21 | 1.77621 / 49.6 | S-LAH66 (OHARA): 1.776208 / 49.60 (1.77250) | HOYA TAF1 49.63; Sumita K-LaSFn7 49.60; SCHOTT N-LAF34 49.62; HIKARI J-LASF016 49.62 |
| L31, L81 | 1.49845 / 81.6 | FCD1 (HOYA): 1.498454 / 81.61 (1.49700) | CDGM H-FK61 81.61 |
| L32, L52, L53 | 1.86290 / 24.8 | S-NBH56 (OHARA): 1.862903 / 24.80 (1.85478) | none |
| L41 | 1.79191 / 25.7 | S-TIH11 (OHARA): 1.791919 / 25.68 (1.78472) | HOYA FD110 1.791906 / 25.72; CDGM H-ZF13 1.791906 / 25.72 |
| L51 | 1.49856 / 81.6 | M-FCD1 (HOYA): 1.498557 / 81.56 (1.49710) | HOYA FCD1B (same catalog values) |
| L54, L55 | 1.58547 / 59.4 | L-BAL42 (OHARA): 1.585467 / 59.39 (1.58313) | OHARA S-BAL42 59.37; HIKARI J-SK12 59.42 |
| L61 | 1.93323 / 20.9 | E-FDS1 (HOYA): 1.933228 / 20.88 (1.92286) | HOYA E-FDS1-W and M-FDS1 20.88; SCHOTT N-SF66 20.88 |
| L62 | 1.65803 / 39.7 | S-NBH5 (OHARA): 1.658026 / 39.68 (1.65412) | SCHOTT N-KZFS5 39.70 |
| L71 | 1.61669 / 44.3 | S-NBM51 (OHARA): 1.616690 / 44.27 (1.61340) | HOYA ADF40 44.29 (discontinued) |
| L82 | 2.00912 / 29.1 | TAFD55 (HOYA): 2.009122 / 29.13 (2.00100) | OHARA S-LAH99 2.009117 / 29.14; HIKARI J-LASFH16 29.12 |

- Supersedes the dispositions of 2026-07-29 (L21 unmatched because S-LAH66 "misses nd by about 0.0037"), 2026-07-30 (L41 unmatched, the J-SF11 e-line coincidence rejected) and 2026-08-18 (L54 and L55 on L-BAL43), and the class labels on L12 and L13 (S-FPL55) and on L31, L51 and L81 (S-FPL51). Each rested on reading Table 6 as d-line data, as the patent states. The 0.0037 is S-LAH66's own d-to-e index difference, and the L41 coincidence was the 785/257 coordinate at the e line.
- All 17 elements are now `indexReference: "e"` with the printed index and Abbe number unchanged, and each carries an `indexReferenceNote` saying the Abbe slot holds the printed d-line value. Every element is named and resolves to its named row at the e line; none stays Unmatched.
- Rows with one candidate vendor: NBFD29, FCD100 and M-FCD1 (HOYA) and S-NBH56 (OHARA). M-FCD1 is a molding grade and L51 is a two-sided asphere.
- L31 and L81 take HOYA FCD1 over OHARA S-FPL51, whose νd of 81.55 (81.546 from its dispersion formula) prints as 81.5; FCD1 is also the polished counterpart of L51's M-FCD1.
- L54 and L55 take OHARA L-BAL42, a molding glass, since both are aspherical elements. HOYA M-BACD12 has the same index but νd 59.46, which prints as 59.5.
- L62 takes OHARA S-NBH5 (HOYA E-ADF50 has νd 39.62), L71 the current OHARA S-NBM51 over the discontinued HOYA ADF40, and L61 HOYA E-FDS1.
- L21: OHARA S-LAH66 and HOYA TAF1 match equally at the printed precision. S-LAH66 is named because the site catalog holds the coordinate under that row; TAF1 resolves to it as an alias.
- L82: HOYA TAFD55 and OHARA S-LAH99 match equally. TAFD55 is named on a narrow margin: among rows the vendor files do not mark discontinued, HOYA has a row equal to five decimals for ten of the 17 elements and OHARA for eight (nine with S-LAH66, which the current OHARA file marks discontinued). The two curves are close (PgF 0.5995 and 0.5997), so the choice has no visible effect on the trace.
- L41: HOYA FD110 equals the printed 1.79191 to five decimals but has no row in the site catalog. OHARA S-TIH11, 0.00001 higher, is inside the match criterion and is named instead. The trace anchors the curve to the printed index, and the two glasses differ in PgF by 0.0004 (0.6162 and 0.6158). If FD110 is added to the catalog, this label should move to it.
- `apdNote` on the five Super ED and ED elements now says the patent prints an e-line index and a d-line Abbe number. The `apd` flags are unchanged, and no element carries `dPgF` or line indices.
- Plates: Table 6 lists no cover glass or filter, and the file has no `rearPlates`.
- The `vd` slot keeps the printed d-line Abbe number. Catalog νe for the twelve glasses is 0.18 to 0.44 lower, inside the ±2 match window, and with every element on a catalog curve the slot is not used to estimate dispersion.
- Dispersion tiers moved from 7 surfaces on catalog curves and 10 on the Abbe estimate to 17 on catalog curves. Paraxial focus against green at the wide station moved from R +66, B −7, V +97 µm, with the reference trace 65 µm from green, to R +58, B −12, V −9 µm with the reference trace on green. The earlier 65 µm arose because the seven d-referenced, catalog-resolved elements traced green at their catalog nd, up to 0.0016 from the stored index.
- The reference trace is unchanged: focal length 72.0796, 120.8135 and 193.9374 mm at the three stations, F/2.88, and an identical engine build before and after.
- The patent's listed focal lengths (72.14, 120.82, 193.95 mm) do not separate the two readings. The printed indices give 72.08, 120.81 and 193.94 mm; the d-line indices of the matched glasses give 72.12, 120.84 and 193.89 mm.

## 2026-10-08 — Integration: L41 named FD110, inventor spelling, three prose corrections

- L41 relabelled from S-TIH11 (OHARA) to FD110 (HOYA). FD110 equals the printed 1.79191 to five decimals with νd 25.72; S-TIH11 is 0.00001 high with νd 25.68. The HOYA row was added to the site catalog with this change. All seventeen elements stay on catalog curves, and the reference trace is unchanged.
- The header comment and the analysis header spelled the first inventor "Miyakawa"; `patentAuthors` and the Sony FE 135mm f/1.8 GM model use "Naoki Miyagawa" for 宮川 直己, and both now agree.
- Analysis: the 32 mm and 33–34 mm figures quoted for L82 and the stabilization doublet are diameters (stored semi-diameters are 15.3 to 16.6 mm) and are now called that; the sentence saying L11's higher index reduces surface reflections was removed, since a higher index raises them.
