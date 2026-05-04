# Audit Log - Canon RF 70-200mm f/2.8 L IS USM

Patent: JP2021-056407A, Numerical Example 3 (Canon / Nakahara, Iwamoto)

## 2026-05-04 - Patent prescription audit and glass relabel

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L2 / S3 | `glass` | `S-BAM4 (OHARA)` | `N-KZFS4 / S-NBM51 class (613443)` | Patent Example 3 row 3 lists nd=1.61340, vd=44.3. Catalog S-BAM4 is nd=1.60562, while Schott N-KZFS4 round-trips the stored nd within catalog-scan tolerance. |
| L2 | `role` | Barium flint | KZFS-class short flint | Synced narrative with relabel. |
| L5 / S9 | `glass` | `S-LAH65V (OHARA)` | `764485 - M-TAFD305 / high-index lanthanum` | Patent row 9 lists nd=1.76385, vd=48.5. Catalog S-LAH65V is nd=1.80400. No current catalog entry round-trips the pair, so a non-resolving 6-digit code annotation preserves patent nd/vd. |
| L6 / S10 | `glass` | `S-TIH14 (OHARA)` | `S-NBH56 (OHARA)` | Patent row 10 lists nd=1.85478, vd=24.8. Catalog S-NBH56 matches exactly; S-TIH14 is nd=1.76182. |
| L8 / S15 | `glass` | `S-TIM2 (OHARA)` | `593353 - S-FTM16 / titanium flint` | Patent row 15 lists nd=1.59270, vd=35.3. Catalog S-TIM2 is nd=1.62004. No current catalog entry round-trips the pair, so a non-resolving 6-digit code annotation preserves patent nd/vd. |
| L9 / S16 | `glass` | `S-TIH6 (OHARA)` | `728285 - dense flint` | Patent row 16 lists nd=1.72825, vd=28.5. Catalog S-TIH6 is nd=1.80518. No current catalog entry round-trips the pair, so a non-resolving 6-digit code annotation preserves patent nd/vd. |
| L10 / S18 | `glass` | `S-NPH2 (OHARA)` | `051269 - ultra-high-index dense flint` | Patent row 18 lists nd=2.05090, vd=26.9. Catalog S-NPH2 is nd=1.92286. No current catalog entry round-trips the pair, so a non-resolving 6-digit code annotation preserves patent nd/vd. |
| L11 | `apdNote`, `role` | S-NPH2 references | 051269 references | Synced the D4 UD partner text with L10 relabel. |
| L12 | `apdNote` | S-NPH2 reference | 051269 reference | Synced the D5 UD partner text with L13 relabel. |
| L13 / S22 | `glass` | `S-NPH2 (OHARA)` | `051269 - ultra-high-index dense flint` | Same glass as L10; patent row 22 repeats nd=2.05090, vd=26.9. |
| L14 / S24 | `glass` | `S-LAH58 (OHARA)` | `TAFD37A (HOYA)` | Patent row 24 lists nd=1.90043, vd=37.4. HOYA TAFD37A round-trips this pair; catalog S-LAH58 is nd=1.88300. |
| L16 / S28 | `glass` | `S-TIH14 (OHARA)` | `S-NBH56 (OHARA)` | Same nd/vd pair as L6; patent row 28 lists nd=1.85478, vd=24.8. |

### Phase 2 - Retained-information audit

- Surface prescription rows 1-31 confirmed against JP2021-056407A Numerical Example 3: all `R`, fixed `d`, and `nd` values match the patent table.
- Variable zoom spacings `d5`, `d11`, `d14`, `d17`, `d25`, `d27`, and `d31` confirmed against the wide/mid/tele table. Data-file first values match the wide-end patent values.
- Aspherical surfaces 13 and 30 confirmed. Patent uses K=0 with coefficients A4-A8 for S13 and A4-A12 for S30; data file preserves absent higher terms as zero/omitted according to the local format.
- Example 3 summary data confirmed: f=72.13/100.00/194.06, FNO=2.89/2.89/2.91, half angle=16.70/12.21/6.36, image height=21.64, SK=15.86/20.68/31.81.
- Group focal lengths confirmed against the patent zoom lens group table: +155.12, -48.48, +67.04, -155.65, +38.75, -55.03, -224.14.
- Patent does not publish semi-diameters. Existing estimated `sd` values were retained.

### Phase 3 - Spectral / metadata enrichment

- The patent does not publish nC, nF, ng, PgF, or dPgF per element. No spectral line-index backfill was possible from this patent.
- Existing metadata fields were already present and confirmed: `subtitle`, `patentYear`, marketing/design focal length and aperture, `elementCount`, `groupCount`, and `focusDescription`.

### Phase 4 - Analysis sync

- Updated the glass table and role prose in `CanonRF70200f28.analysis.md` to remove unsupported S-BAM4, S-LAH65V, S-TIH14, S-TIM2, S-TIH6, S-NPH2, and S-LAH58 labels.
- Updated G1, G2, G4, G5, and G7 narratives to match the audited glass annotations.
- Retained the existing UD/Super UD and aspherical discussion. No APO claims were added.

### Verification

- `npm test -- catalogMismatchScan glassRelabelCandidatesScan` - passed; Canon RF 70-200 no longer appears in either generated mismatch report.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - passed (116 test files, 1507 tests).
