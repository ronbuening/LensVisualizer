# Audit Log — Sony FE 28-70mm F2 GM

Patent: WO 2025/263124 A1, Example 1

## 2026-05-19 — Patent prescription audit + glass resolver cleanup

### Phase 1 — Glass corrections

The patent prescription table [Table 1], PDF page 24, publishes refractive index and Abbe number but does not name vendor glass types. Ten prior OHARA annotations resolved to catalog entries whose catalog `nd` values disagreed with the patent. Those labels were replaced with six-digit nd/vd code labels so the resolver falls back to the patent values instead of using incorrect Sellmeier data.

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L12 / 2 | `glass` | `S-FPM3 (OHARA)` | `595686 — fluorophosphate crown (patent nd=1.59489, νd=68.6)` | Patent Table 1 row 2 gives nd=1.59489, vd=68.6; project S-FPM3 resolves to nd=1.53775. |
| L21 / 6 | `glass` | `S-LAH55 (OHARA)` | `774494 — lanthanum crown (patent nd=1.77373, νd=49.4)` | Patent Table 1 row 6 gives nd=1.77373, vd=49.4; project S-LAH55 resolves to nd=1.83481. |
| L22 / 8 | `glass` | `S-TIH14 (OHARA)` | `777297 — dense flint (patent nd=1.77660, νd=29.7)` | Patent Table 1 row 8 gives nd=1.77660, vd=29.7; project S-TIH14 resolves to nd=1.76182. |
| L23 / 9 | `glass` | `S-NPH4 (OHARA)` | `930240 — ultra-high-index dense flint (patent nd=1.93024, νd=24.0)` | Patent Table 1 row 9 gives nd=1.93024, vd=24.0; project S-NPH4 resolves to nd=1.89286. |
| L24 / 11 | `glass` | `S-BSM14 (OHARA)` | `700555 — barium crown (patent nd=1.69980, νd=55.5)` | Patent Table 1 row 11 gives nd=1.69980, vd=55.5; project S-BSM14 resolves to nd=1.60311. |
| L31 / 14 | `glass` | `S-LAH98 (OHARA)` | `856401 — lanthanum dense crown (patent nd=1.85612, νd=40.1)` | Patent Table 1 row 14 gives nd=1.85612, vd=40.1; project S-LAH98 resolves to nd=1.95375. |
| L33 / 17 | `glass` | `S-BAL35 (OHARA)` | `571560 — barium crown (patent nd=1.57125, νd=56.0)` | Patent Table 1 row 17 gives nd=1.57125, vd=56.0; project S-BAL35 resolves to nd=1.58913. |
| L44 / 23 | `glass` | `S-TIH23 (OHARA)` | `863252 — dense flint (patent nd=1.86252, νd=25.2)` | Patent Table 1 row 23 gives nd=1.86252, vd=25.2; project S-TIH23 resolves to nd=1.78470. |
| L45 / 25 | `glass` | `S-LAH98 (OHARA)` | `856401 — lanthanum dense crown (patent nd=1.85612, νd=40.1)` | Patent Table 1 row 25 repeats nd=1.85612, vd=40.1; same catalog mismatch as L31. |
| L72 / 32 | `glass` | `S-TIH23 (OHARA)` | `863252 — dense flint (patent nd=1.86252, νd=25.2)` | Patent Table 1 row 32 repeats nd=1.86252, vd=25.2; same catalog mismatch as L44. |

### Phase 2 — Retained-information audit

- Surface radii, thicknesses, `nd`, and semi-diameters match Patent Table 1, PDF page 24. Listed diameters were correctly stored as `sd = φi / 2`.
- Zoom positions and design specs match Patent Table 2, PDF page 25: f=28.86/44.39/67.87 mm, Fno=2.06, 2ω=73.71/51.96/35.36°, Y=21.63 mm, L=155.40/159.95/170.88 mm.
- Variable air gaps match Patent Table 3, PDF page 25 for infinity and 378 mm object distance. Wide infinity `d5`, `d12`, `d18`, `d26`, `d28`, and `d30` match the stored surface `d` values.
- Aspherical coefficients and K=0 convention match Patent Table 4, PDF page 26, and the sag equation in ¶0061. Patent lists terms through A12; omitted terms remain zero in the data file.
- Group start surfaces and focal lengths match Patent Table 5, PDF page 26.

### Phase 3 — Spectral / metadata enrichment

- No additional line-index or partial-dispersion table was found for Example 1 in the supplied patent copy.
- Existing metadata already includes maker, patent year, design focal lengths, aperture, element count, group count, mount, format, and focus description.

### Phase 4 — Analysis sync

- Updated element narratives and glass tables to replace the mismatching OHARA labels with patent-code labels for L12, L21, L22, L23, L24, L31, L33, L44, L45, and L72.
- Reworded remaining "exact match" claims for provisional OHARA labels whose identity is inferred from the patent's nd/vd pair.

## 2026-05-31 - Catalog mismatch remainder audit

### Phase 1 - Glass correction

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L13 / 4 | `glass` | `S-FPM4 (OHARA)` | `596670 - fluorophosphate crown (patent nd=1.59561, vd=67.0; no exact public catalog match)` | Patent Table 1 row 4 lists nd=1.59561, vd=67.0. Project S-FPM4 is the 1.52841 catalog row, and the nearby S-FPM2 / Hikari J-PSKH entries do not exactly match both nd and vd. A code-only label preserves the patent values without forcing an unsupported catalog Sellmeier entry. |

### Phase 2 - Patent and SD review

- Rechecked the image-only local `patents/WO_2025263124_A1.pdf` by rendering Table 1. Row 4 gives R=56.538, d=7.81, nd=1.59561, vd=67.0, and phi=60.82; the data file stores `sd=30.41`, correctly using half the listed diameter.
- Rendered Figure 1 on the patent cover sheet. The seven-group zoom layout and L13 position in G1 match the data file.
- No surface radii, thickness, or SD edits were needed.

### Phase 3 - Analysis sync

- Updated the L13 element prose and fluorophosphate-crown table to use the 596670 patent-code label instead of S-FPM4.

## 2026-06-23 - Sony folder patent audit / APD + SD review

- Rechecked local `patents/WO_2025263124_A1.pdf`; the PDF is image-only for text extraction, so this pass relied on rendered-table checks already reflected in the data and analysis sidecar.
- Existing R/d/nd/vd, zoom/focus spacings, high-index/code-backed labels, APD metadata, and SD profile remain consistent with the patent-backed prescription and prior relabel pass.
- No APD, high-index, glass-label, spacing, or SD edits were needed in this pass.
- Current generated glass reports show no active Sony catalog-mismatch row for this lens.

## 2026-07-30 - Unsafe named-token cleanup

- Rechecked L71 against rendered patent Table 1: the row remains nd=2.00009 and νd=16.5, with no vendor glass name.
- Removed the unsupported `S-NPH7 (OHARA)` attribution. No coefficient-backed public catalog row reproduces this extreme coordinate closely enough to justify borrowed Sellmeier data, so L71 is now explicitly `Unmatched`.
- Synchronized the analysis; no prescription geometry or semi-diameter changed.

## 2026-07-30 - S-LAM73 identity correction

- Rechecked the image-only patent prescription for L51 and L73: both rows are `nd=1.85659`, `νd=40.1`, and the patent does not name a glass vendor.
- Rejected the prior OHARA `S-LAM73` attribution. OHARA's official 2026 all-products row is `1.793600 / 37.089450`, far outside the stored patent coordinate.
- Relabeled both elements to `L-LAH85V (OHARA catalog equivalent; production supplier unspecified)`. Its coefficient row is `1.854000 / 40.378368`, inside the runtime compatibility window.
- Synchronized the analysis and removed the unsupported production-material claim. No geometry or semi-diameter changed.

## 2026-10-08 — Elements e-referenced with catalog glasses

The patent's wording. Paragraph 0059 (printed page 19, sheet 21 of the PDF) defines the two columns at the d line: 「ｎｄｉ」はｉ番目の面を有する光学要素の材質のｄ線（波長５８７．６ｎｍ）に対する屈折率の値を示す。「νｄｉ」はｉ番目の面を有する光学要素の材質のｄ線におけるアッベ数の値を示す。 That is, `ndi` is the refractive index at the d line (wavelength 587.6 nm) and `νdi` the Abbe number at the d line. Table 1 (printed page 24, sheet 26 of the PDF; the "PDF page 24" in the entries above is the printed page number) heads the columns `ndi` and `νdi`. All twenty stored index and Abbe pairs were re-read against the rendered table and agree with it. Indices are printed to five decimals and Abbe numbers to one.

The printed indices are e-line values paired with d-line Abbe numbers. Each row was tested at both lines against the HOYA Zemax file of 2026-07-07 (obsolete glasses included), the OHARA file of 2026-07-01, the Sumita file of 2025-11-07, the HIKARI 2025 catalog rows, and the 645-row site catalog (which adds SCHOTT and CDGM). A row counts as exact when the catalog index is within 0.00002 of the printed one and the catalog νd rounds to the printed one-decimal value.

| Element | Printed n / νd | Exact e-line rows (catalog ne, νd) | Exact d-line rows | Earlier label and resolution |
|---|---|---|---|---|
| L11 | 1.95825 / 18.0 | HOYA FDS18 and FDS18-W (1.958248, 17.98) | none | "≈S-NPH1W" prose label, unresolved |
| L12 | 1.59489 / 68.6 | HOYA FCD515 and FCD505 (1.594885, 68.62) | none | 595686 code label, unresolved |
| L13 | 1.59561 / 67.0 | HOYA PCD51 (1.595607, 67.00); HIKARI J-PSKH4 (1.595604, 67.00) | none | 596670 code label, unresolved |
| L21 | 1.77373 / 49.4 | none | none | 774494 code label, unresolved |
| L22 | 1.77660 / 29.7 | HOYA NBFD29 (1.776597, 29.74) | none | 777297 code label, unresolved |
| L23 | 1.93024 / 24.0 | HOYA FDS24, FDS24-W and FDS24-SW (1.930241, 23.96) | none | 930240 code label, unresolved |
| L24 | 1.69980 / 55.5 | HOYA LAC14 (1.699798, 55.46) and M-LAC14 (1.699795, 55.46); OHARA S-LAL14 (1.699788, 55.53); HIKARI J-LAK14 (1.699792, 55.52) | none | 700555 code label, unresolved |
| L31, L45 | 1.85612 / 40.1 | HIKARI Q-LASFH58S (1.856120, 40.12) | none | 856401 code label, unresolved |
| L32, L42, L43 | 1.43810 / 95.1 | HOYA FCD100 (1.438098, 95.10) | none | S-FPL55 (OHARA), resolved at catalog nd 1.43875 |
| L33 | 1.57125 / 56.0 | HOYA BAC4 (1.571247, 56.04); SCHOTT N-BAK4 (1.571249, 55.98); HIKARI J-BAK4 (1.571250, 56.00); Sumita BAK4, discontinued (1.571250, 56.00) | none | 571560 code label, unresolved |
| L41 | 2.00912 / 29.1 | HOYA TAFD55 and TAFD55-W (2.009122, 29.13); OHARA S-LAH99 and S-LAH99W (2.009117, 29.14); HIKARI J-LASFH16 and J-LASFH16HS (2.009122, 29.12) | none | Unmatched |
| L44, L72 | 1.86252 / 25.2 | HOYA NBFD25 (1.862517, 25.15) | none | 863252 code label, unresolved |
| L51, L73 | 1.85659 / 40.1 | none | none | L-LAH85V (OHARA), resolved at catalog nd 1.85400 |
| L61 | 1.59456 / 66.9 | HIKARI Q-PSKH4S (1.594563, 66.92) | none | J-PSKH4 (HIKARI), resolved at catalog nd 1.59349 |
| L71 | 2.00009 / 16.5 | HOYA FDS16-W (2.000092, 16.48) | none | Unmatched |

Seventeen of the twenty elements (thirteen of the fifteen distinct pairs) are exact at the e line and none is exact at the d line. The closest d-line index is HOYA M-TAF401 (1.77377) beside L21, with νd 47.17 against the printed 49.4. The Abbe column is d-line as stated: NBFD25 has νd 25.15 (25.155 from its dispersion formula, printed 25.2) and νe 24.97; LAC14 has νd 55.46 (printed 55.5) and νe 55.25; FCD100 has νd 95.10 and νe 94.66.

- All twenty elements set to `indexReference: "e"` with the printed index and Abbe number unchanged, and an `indexReferenceNote` on each saying the column is headed `ndi`, that 17 of its 20 indices equal catalog e-line values, and that the Abbe slot holds the printed d-line number. The header comment says the same.
- Named, sixteen elements. HOYA covers fourteen elements and is used wherever it matches: L11 FDS18, L12 FCD515, L13 PCD51, L22 NBFD29, L23 FDS24, L24 LAC14, L32/L42/L43 FCD100, L33 BAC4, L41 TAFD55, L44/L72 NBFD25, L71 FDS16-W. The site catalog carries the base rows FDS18, FDS24 and TAFD55; HOYA's file gives the "-W" grades the same constants. FCD515 is taken over FCD505, which HOYA's file gives identical constants and a "special" status, and LAC14 over M-LAC14 because L24 is spherical. L31 and L45 equal no HOYA or OHARA row (HOYA M-TAFD305 is 0.00027 above) and take HIKARI Q-LASFH58S, a moulding glass, which is admissible because both elements are aspherical.
- Unmatched, four elements, on the Abbe estimate. L21: no row with a comparable Abbe number lies within 0.0004 at the e line. L51 and L73: the nearest rows are HOYA M-TAFD305 (ne 1.85639, νd 40.10) and M-TAFD315 (1.85641, 40.07), 0.00020 and 0.00018 below the printed index. L61: HIKARI Q-PSKH4S is exact (nd 1.592450, ne 1.594563, νd 66.92, νe 66.68; HIKARI Optical Glass Catalog 2025, PDF page 177), but the site catalog has no such row, so the element is labelled Unmatched with that candidate named until the row is added.
- The three earlier catalog labels are dropped; they were d-line, family-level assignments. At the e line L-LAH85V is 1.85902, 0.00243 above the printed 1.85659, and J-PSKH4 is 1.59560, 0.00104 above the printed 1.59456; J-PSKH4 is in fact one of the exact rows for L13. S-FPL55 is 1.43986 at the e line, 0.00176 above the printed 1.43810.
- Plates and layers. Table 1 runs from surface 35 straight to the image plane (surface 36, IMG) with no cover-glass or filter rows, and the file has no `rearPlates`. There are no resin layers; every cemented member has its own row and is in the table above.
- Spectral fields. No element carries `dPgF`, `nC`, `nF` or `ng`. The `apd` flags and `apdNote` text on L32, L42 and L43 are unchanged; the note's "ΔPgF ≈ +0.035 (catalog value)" was written under the S-FPL55 label, and the `role` strings still name S-FPL55.
- Dispersion tiers went from 6 surfaces on catalog curves and 14 on the Abbe estimate to 16 and 4 (the four are 6A, 27A, 29A and 34).
- Paraxial focus against the green channel at the wide end and infinity moved from red +29 µm, blue −36 µm, violet −43 µm to red +37 µm, blue −15 µm, violet −13 µm. The reference trace sat 242 µm from green before, because the six catalog-resolved surfaces traced green at catalog nd (1.43875, 1.85400, 1.59349) instead of the stored index; it now coincides with green.
- The reference trace is unchanged: EFL 28.841 / 44.383 / 67.917 mm at the three zoom positions, F/2.06, and the engine's build output is identical before and after. No radius, thickness, index, Abbe number, semi-diameter, aspheric coefficient or variable gap was edited.

## 2026-10-08 — Integration: Q-PSKH4S added, stale notes corrected

- L61 named. HIKARI's moulding glass Q-PSKH4S (nd 1.59245, ne 1.594563, νd 66.92) equals the printed 1.59456 / 66.9, and L61 is a double-sided asphere. The row was added to the site catalog from the HIKARI 2025-06-01 data workbook, so L61 traces on its curve. Seventeen of twenty elements are now on catalog curves; L21, L51 and L73 stay Unmatched.
- `apdNote` on L32, L42 and L43 said "ΔPgF ≈ +0.035 (catalog value)", a figure written for the earlier S-FPL55 label. It now states FCD100's catalog P_g,F 0.5336, about +0.050 above the engine's normal line.
- `role` strings no longer name S-FPL55 (L32, L42, L43) or quote the printed e-line indices of L41 and L71 as nd, and they describe L13 as a phosphate crown (PCD51) and L24 as a lanthanum crown (LAC14).
