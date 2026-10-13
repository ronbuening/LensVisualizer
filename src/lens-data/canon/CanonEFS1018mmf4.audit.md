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

## 2026-09-24 — Semi-diameters raised to the traced format corner

Example 1 (pp. 10–11) prints a wide-end 半画角 of 52.98° with 像高 13.66 mm; the angle is the paraxial atan(Y/f), and
the traced chief ray reaches Y = 13.66 mm at 54.0° and the 14.175 mm APS-C corner at 55.15°. The estimated rims clipped
the real chief ray (solved through the stop centre) at surface 4A from 43.3°, leaving the wide station at 9.63 mm (68% of
the corner); the 13.96 mm and 17.46 mm stations already reached their corners. At the corner the chief ray crosses
surface 1 at 20.80 mm and 4A at 14.21 mm; every other rim clears it (surface 2 at 15.91 of 16.9, 3 at 15.82 of 16.7).
New values are those heights plus ~0.5 mm, sized to the corner rather than to Y because 図1 (p. 16), scaled on the
117.61 mm wide-end track, draws L1 at about 21.7 mm and the 4A rim at about 14.7 mm. Neither partner was scaled: L1 and
L2 are strong menisci, and surfaces 2 and 3 already sit near their 0.9|R| rim-slope limits. Surface 4A's K = −0.476
conic is defined out to h = 17.0 mm, so its 14.8 mm rim lies beyond |R| = 12.3 mm legitimately.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1 | 18.5 | 21.3 | corner chief ray 20.80 mm + clearance (図1 ≈ 21.7) |
| 4A | 10.9 | 14.8 | corner chief ray 14.21 mm + clearance (図1 ≈ 14.7); the asphere's slope rises monotonically to the conic's 17.0 mm domain edge (45.7° at the rim) |

The validator accepts the new values, all three zoom stations now reach the corner with every rim clear, and the
image-circle floor still reports nothing undersized. The analysis note quotes 4A departures only at fixed heights (10 and
11.5 mm), not at the semi-diameter, so it is unchanged.
