# Audit Log — Leica APO-Macro-Elmarit-TL 60mm f/2.8 ASPH

Patent: JP 2016-090725 A, Example 9

## 2026-05-19 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L12 / 3A | `glass` | `S-BAL35 (OHARA)` | `S-BAL42 (OHARA)` | Patent Example 9 row 3 lists nd=1.58313 and vd=59.38; S-BAL42 is the matching Ohara/refractiveindex.info catalog glass. |
| L22 / 10 | `glass` | `S-TIH14 (OHARA)` | `NBFD15 (HOYA)` | Patent Example 9 row 10 lists nd=1.80610 and vd=33.27; Hoya NBFD15 round-trips the pair, so a generic code was avoided. |
| L23 / 12A | `glass` | `S-BAL35 (OHARA)` | `S-BAL42 (OHARA)` | Patent Example 9 row 12 repeats nd=1.58313 and vd=59.38; reused S-BAL42 consistently with L12. |
| L31 / 14 | `glass` | `S-LAH79 (OHARA)` | `TAFD35 (HOYA)` | Patent Example 9 row 14 lists nd=1.91082 and vd=35.25; Hoya TAFD35 is the sourced exact catalog match. |

### Phase 2 — Retained-information audit

- Checked Example 9 rows 3, 10, 12, and 14 against the patent table; stored `nd`, `vd`, and asphere-bearing element mapping already matched.
- No curvature, thickness, asphere coefficient, focus-gap, mount, or format edits made.

### Phase 3 — Spectral / metadata enrichment

- Reviewed existing catalog entries before relabeling. S-BAL42, NBFD15, and TAFD35 already include manufacturer/refractiveindex.info-backed source data.
- No new catalog entry was required.

### Phase 4 — Analysis sync

- Updated Example-selection prose, L12/L22/L23/L31 element notes, glass summary, asphere-substrate text, and source list.

## 2026-06-24 — Folder audit recheck

- Rechecked local `patents/JP2016090725A.pdf` OCR for Example 9 against the current data file, including the surface table, asphere-bearing rows, and cover-glass exclusion already documented in the analysis.
- Retained all glass assignments. FCD100 remains the supported APD / super-ED element; NBFD15, TAFD35, S-BAL42, and the other catalog rows remain consistent with the patent nd/vd table.
- No patent clear-aperture or semi-diameter table was found. Current SDs remain inferred from ray envelopes, field coverage, and drawing-safe element proportions.

## 2026-07-29 - Remaining catalog-mismatch audit

- Rechecked JP 2016-090725 A Example 9 surfaces 14 and 16; stored `R`, `d`, and 1.51742/52.15 plus 1.56883/56.04 coordinates agree with the patent.
- Surface 14: replaced incorrect `S-NSL3` with code-first `517522` crown wording.
- Surface 16: replaced incorrect `S-BAL2` with code-first `569560` barium-crown wording.
- The patent does not identify either supplier, so the analysis now preserves coordinates without vendor claims. No geometry changed.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 9 (¶0110) on PDF page 25 (printed page 25) at 160 dpi: surface 20 d = 13.369; surfaces 21–22 are one
  unlabeled plate, 1.500 mm, nd 1.52249, νd 59.48; 22 → image is 0.800 mm. 13.369 + 1.500/1.52249 + 0.800 = 15.154,
  matching the legacy folded gap and the printed BF (¶0115).
- Data surface 19 (patent 20) now stores 13.369 mm, with `rearPlates` S-NSL5 (OHARA, exact nd; νd 59.84 is
  compatible, and OHARA is the lens's majority vendor) and gapAfter 0.800 mm. Paraxial check against the previous data:
  EFL identical at infinity and 1:1; defocus changes by 0.0002 mm (rounding in the old 15.154). Physical track grows by
  0.515 mm. `closeFocusM` 0.16 is Leica's quoted MFD and was left unchanged.
