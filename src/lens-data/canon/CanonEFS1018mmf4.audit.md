# Audit Log — Canon EF-S 10-18mm f/4.5-5.6 IS STM

Patent: JP 2015-31869 A, Numerical Example 1 (Canon Inc.; Fig. 1; ¶0057-¶0060)
Catalog version: 88dde1c

## 2026-05-19 — Patent prescription and glass-label audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L5 / S9 | `glass` | `S-TIM27 (OHARA)` | `S-NBH8 (OHARA)` | Patent ¶0059 row 9 gives nd=1.72047, νd=34.7. Catalog S-TIM27 is nd=1.63980; S-NBH8 round-trips the patent index and Abbe pair closely. |
| L7 / S13 | `glass` | `S-LAH55V (OHARA)` | `TAFD35 (HOYA)` | Patent ¶0059 row 13 gives nd=1.91082, νd=35.3. Catalog S-LAH55V is nd=1.83481; TAFD35/code 911353 matches the patent pair. |
| L8 / S14 | `glass` | `S-TIM22 (OHARA)` | `S-TIM5 (OHARA)` | Patent ¶0059 row 14 gives nd=1.60342, νd=38.0. S-TIM5 matches this pair; the prior S-TIM22 label belongs to the 648/338 glass used by L10. |
| L9 / S17 | `glass` | `S-LAH59 (OHARA)` | `S-LAH55 (OHARA)` | Patent ¶0059 row 17 gives nd=1.83481, νd=42.7. S-LAH55 round-trips this pair; S-LAH59 is nd=1.81600. |
| L10 / S18 | `glass` | `S-TIM5 (OHARA)` | `S-TIM22 (OHARA)` | Patent ¶0059 row 18 gives nd=1.64769, νd=33.8. S-TIM22 matches this pair; the previous label was swapped with L8's 603/380 glass. |
| L12 / S22 | `glass` | `S-LAH55V (OHARA)` | `TAFD35 (HOYA)` | Patent ¶0059 row 22 gives nd=1.91082, νd=35.3; same 911353 dense flint as L7. |
| L13 / S24 | `glass` | `S-LAH55V (OHARA)` | `TAFD35 (HOYA)` | Patent ¶0059 row 24 gives nd=1.91082, νd=35.3; same 911353 dense flint as L7. |
| L14 / S25 | `glass` | `S-BSM14 (OHARA)` | `S-BAL42 (OHARA)` | Patent ¶0059 row 25 gives nd=1.58313, νd=59.4. S-BAL42/code 583594 matches; S-BSM14 is nd=1.60311. |

### Phase 2 — Retained-information audit

- Surface radii, axial spacings, d-line indices, Abbe numbers, zoom gaps, F-number rows, image height, lens length, and BFD were rechecked against JP 2015-31869 A ¶0059 Numerical Example 1.
- Patent sign convention and the data-file sign convention agree for all radii.
- Surface `d` values for variable rows match the wide/infinity values in ¶0059: d10=18.12, d21=1.25, d23=3.80, and d26/BF=35.35.
- Aspherical coefficients for S4 and S26 match ¶0060 through the F/A12 term; S4 uses K=-0.475949 and S26 uses K=0.
- Patent Example 1 lists no semi-diameters. Existing estimated `sd` values were retained because this pass was limited to patent-table verification.

### Phase 3 — Spectral / metadata enrichment

- Patent ¶0059-¶0060 provides nd and νd only; no nC, nF, ng, PgF, or dPgF data were available to add.
- Relabeling L5, L7-L10, and L12-L14 upgrades those elements from false catalog matches to catalog entries whose stored nd values match the patent data.
- Existing metadata was retained: `subtitle`, `patentYear`, `focalLengthDesign`, `apertureDesign`, `elementCount`, `groupCount`, `lensMounts`, `imageFormat`, and `focusDescription`.

### Phase 4 — Analysis sync

- Updated `CanonEFS1018mmf4.analysis.md` element narratives for L5, L7-L10, and L12-L14 to match the corrected glass labels.
- Updated the glass-selection table and source list to reflect S-NBH8, TAFD35, S-TIM5, S-LAH55, S-TIM22, and S-BAL42.

### Verification

- `npm run typecheck` — passed.
- `npm run format:check` — passed.
- `npm run lint` — passed.
- `npm run test` — passed, 129 files / 1664 tests. Console output includes expected error-boundary stack traces from `errorBoundaries.test.tsx`.
- `npm test -- catalogMismatchScan glassRelabelCandidatesScan unresolvedGlassScan` — passed. Regenerated scan output no longer included `CanonEFS1018mmf4`; generated report files were restored afterward because they had unrelated pre-existing working-tree changes.
