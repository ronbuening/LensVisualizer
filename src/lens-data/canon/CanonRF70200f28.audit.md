# Audit Log - Canon RF 70-200mm f/2.8 L IS USM

Patent: JP2021-056407A, Numerical Example 3 (Canon / Nakahara, Iwamoto)

## 2026-05-04 - Patent prescription audit and glass relabel

### Phase 1 - Glass corrections

| Element / surface | Field             | Before             | After                                       | Justification                                                                                                                                                                             |
| ----------------- | ----------------- | ------------------ | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| L2 / S3           | `glass`           | `S-BAM4 (OHARA)`   | `N-KZFS4 / S-NBM51 class (613443)`          | Patent Example 3 row 3 lists nd=1.61340, vd=44.3. Catalog S-BAM4 is nd=1.60562, while Schott N-KZFS4 round-trips the stored nd within catalog-scan tolerance.                             |
| L2                | `role`            | Barium flint       | KZFS-class short flint                      | Synced narrative with relabel.                                                                                                                                                            |
| L5 / S9           | `glass`           | `S-LAH65V (OHARA)` | `764485 - M-TAFD305 / high-index lanthanum` | Patent row 9 lists nd=1.76385, vd=48.5. Catalog S-LAH65V is nd=1.80400. No current catalog entry round-trips the pair, so a non-resolving 6-digit code annotation preserves patent nd/vd. |
| L6 / S10          | `glass`           | `S-TIH14 (OHARA)`  | `S-NBH56 (OHARA)`                           | Patent row 10 lists nd=1.85478, vd=24.8. Catalog S-NBH56 matches exactly; S-TIH14 is nd=1.76182.                                                                                          |
| L8 / S15          | `glass`           | `S-TIM2 (OHARA)`   | `593353 - S-FTM16 / titanium flint`         | Patent row 15 lists nd=1.59270, vd=35.3. Catalog S-TIM2 is nd=1.62004. No current catalog entry round-trips the pair, so a non-resolving 6-digit code annotation preserves patent nd/vd.  |
| L9 / S16          | `glass`           | `S-TIH6 (OHARA)`   | `728285 - dense flint`                      | Patent row 16 lists nd=1.72825, vd=28.5. Catalog S-TIH6 is nd=1.80518. No current catalog entry round-trips the pair, so a non-resolving 6-digit code annotation preserves patent nd/vd.  |
| L10 / S18         | `glass`           | `S-NPH2 (OHARA)`   | `051269 - ultra-high-index dense flint`     | Patent row 18 lists nd=2.05090, vd=26.9. Catalog S-NPH2 is nd=1.92286. No current catalog entry round-trips the pair, so a non-resolving 6-digit code annotation preserves patent nd/vd.  |
| L11               | `apdNote`, `role` | S-NPH2 references  | 051269 references                           | Synced the D4 UD partner text with L10 relabel.                                                                                                                                           |
| L12               | `apdNote`         | S-NPH2 reference   | 051269 reference                            | Synced the D5 UD partner text with L13 relabel.                                                                                                                                           |
| L13 / S22         | `glass`           | `S-NPH2 (OHARA)`   | `051269 - ultra-high-index dense flint`     | Same glass as L10; patent row 22 repeats nd=2.05090, vd=26.9.                                                                                                                             |
| L14 / S24         | `glass`           | `S-LAH58 (OHARA)`  | `TAFD37A (HOYA)`                            | Patent row 24 lists nd=1.90043, vd=37.4. HOYA TAFD37A round-trips this pair; catalog S-LAH58 is nd=1.88300.                                                                               |
| L16 / S28         | `glass`           | `S-TIH14 (OHARA)`  | `S-NBH56 (OHARA)`                           | Same nd/vd pair as L6; patent row 28 lists nd=1.85478, vd=24.8.                                                                                                                           |

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

## 2026-09-09 — First-added diagram audit, lens 39

Original Example 3/pages 15–16 and Figure 5/page 23 (600 dpi) checked. Source prescription and aspheres retained; existing SD estimates agree with optical rims after rejecting bracket/leader contamination. No cover-glass or filter rows exist. Corrected focus attribution from G6/G7 to source G4/G6; finite-focus spacings remain unpublished and disabled. Removed unsupported motor, molding, coating and chemistry claims; qualified compatible glass names and removed two unsupported dPgF overrides plus five APD badges. Recalculated isolated element focal lengths. Restored source aperture schedule 2.89/2.89/2.91 with explicitly inferred zoom iris radii. Source rounding differences remain documented.

Live wide/middle/tele, f/16 and zoom-chart checks pass; simplified spacing/group labels to avoid panel overflow. Surface/image-circle and three focused regression tests pass.

## 2026-10-30 — Reuse clarification and runtime-only supplement

**Reused coverage:** the completed direct original shape/glass inspection is 2026-09-09 (`c905777d9`), preserving earlier 2026-05-04 history. No fresh original-source inspection is claimed. Parsed current prescription matches that commit exactly except later `source.example`; data SHA256 `e40000b2a3695e04ff5dbf3cebda07cb12ccbb60f0888d60159063168888b4d9` is unchanged. All source geometry, media/curve qualifications, controls and caps remain.

Current runtime census: 65 unique infinity zooms, three source stations and 62 illustrative intervals; 21 focus inputs per zoom are geometry-identical infinity duplicates. Actual per-state iris used. Collimated 49-pupil bundles at 0/.6/1 modeled-angle fractions: wide 49/42/21, middle 49/41/20, tele 45/36/12. Aggregate 3,165/3,185 axial samples ,195/195 chiefs ,0 failed seeds ,17 finite/closed/connected SVG bodies and 0 hidden trim. Tele axial clipping is S9; maximum aperture deficit 1.16166% ,0 states over 3%. Existing S9 cap constraint is retained without a source or guard change.

Largest illustrative interval paraxial residual +3.354042mm at zoom.796875; minimum angular-field coverage 93.383% of generic 21.65mm reference. These are current runtime limitations, not source errors or proof of production field/focus behavior. Numerical finite-focus travel and lateral IS are still absent. Analysis now describes the current dynamic iris rule, actual f/32 preset range and canonical inventor spelling; no numeric data or source dates change. This adds 0 fresh reviews.
