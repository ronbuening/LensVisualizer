# Audit Log — Sony FE 85mm F1.4 GM II

Patent: WO 2025/239028 A1, Example 2 (Sony Group Corp.; Tables 6-10, Figure 6)
Catalog version: bb70259

## 2026-06-04 — Sweep 2 manufacturer catalog source pass

- Added HOYA NBFD29 from HOYA's first-party optical-glass PDF (`NBFD29`, code 770-297, nd=1.77047, vd=29.74, PgF=0.5951, formula-3 A0-A5 constants) to the runtime catalog.
- Relabeled L9 / S16 from code-only `770297` to `NBFD29 (HOYA, 770297)`.
- `npm test -- dispersion` and `npm run generate:glass-reports` passed; L9 now uses trusted Sellmeier data.

## 2026-05-10 — Patent prescription and glass-label audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L4 / S7 | `glass` | `S-TIH53 (OHARA)` | `S-NBH56 class (OHARA; patent nd=1.85451, νd=25.2)` | Patent Table 6 row 7 gives nd=1.85451, νd=25.2. Catalog S-TIH53 is nd=1.84666; S-NBH56 is the nearest current catalog class and stays within mismatch tolerance. |
| L5 / S10 | `glass` | `S-NBH56 (OHARA)` | `S-NBH5 (OHARA)` | Patent Table 6 row 10 gives nd=1.65412, νd=39.7. Catalog S-NBH5 round-trips this pair; S-NBH56 is nd=1.85478 and was a false match. |
| L6 / S11 | `glass` | `S-LAH97 (OHARA)` | `S-LAH89 class (OHARA; patent nd=1.85108, νd=40.1)` | Patent Table 6 row 11 gives nd=1.85108, νd=40.1. Catalog S-LAH97 is nd=1.75500; S-LAH89 is the nearest current catalog class. |
| L7 / S13 | `glass` | `S-LAH79 (OHARA)` | `S-LAH98 (OHARA)` | Patent Table 6 row 13 gives nd=1.95375, νd=32.3, matching code 954323 / S-LAH98. Catalog S-LAH79 is nd=2.00330. |
| L8 / S15 | `glass` | `S-FPM2 class (OHARA, inferred — patent 593/670 vs. catalog 595/677)` | `S-PHM52 (OHARA)` | Patent Table 6 row 15 gives nd=1.61800, νd=63.4, matching code 618/634 / S-PHM52. The prior 593/670 note was a transcription error. |
| L9 / S16 | `glass` | `S-TIH18 (OHARA)` | `770297 — dense titanium flint (patent nd=1.77047, νd=29.7)` | Patent Table 6 row 16 gives nd=1.77047, νd=29.7. No current catalog entry round-trips; use the patent code to avoid a false S-TIH18 Sellmeier match. |
| L10 / S18 | `glass` | `S-LAH51 (OHARA)` | `S-LAH65V (OHARA)` | Patent Table 6 row 18 gives nd=1.80420, νd=46.5. S-LAH65V is the current catalog match; S-LAH51 is nd=1.78590. |
| L11 / S20 | `glass` | `S-LAH97 (OHARA)` | `S-LAH89 class (OHARA; patent nd=1.85108, νd=40.1)` | Same patent glass as L6, Table 6 row 20. |
| L12 / S22 | `glass` | `S-NPH7 (OHARA)` | `986165 — ultra-high-index dense flint (patent nd=1.98613, νd=16.5)` | Patent Table 6 row 22 gives nd=1.98613, νd=16.5. No current catalog entry round-trips this extreme flint. |
| L13 / S23 | `glass` | `S-TIM8 (OHARA)` | `S-FTM16 (OHARA)` | Patent Table 6 row 23 gives nd=1.59270, νd=35.4. S-FTM16 round-trips the refractive index closely; S-TIM8 is unresolved in the current catalog. |
| L14 / S25 | `glass` | `S-NPH4 (OHARA)` | `870200 — dense flint (patent nd=1.86966, νd=20.0)` | Patent Table 6 row 25 gives nd=1.86966, νd=20.0. Catalog S-NPH4 is nd=1.89286; no current catalog entry round-trips. |

### Phase 2 — Retained-information audit

| Surface / element | Field | Before | After | Justification |
|---|---|---|---|---|
| L8 / S15 | `nd`, `vd`, `fl` | 1.59349, 67.0, +104.3 mm | 1.61800, 63.4, +100.2 mm | Patent Table 6 row 15 gives nd=1.61800, νd=63.4. Paraxial element recalculation with the corrected glass gives f≈+100.2 mm. |
| S15 | `nd` | 1.59349 | 1.61800 | Same Table 6 row 15 correction. |
| S17 | `R` | 41.044 | 40.184 | Patent Table 6 row 17 gives ri=40.184. |
| L9 | `fl` | -35.0 mm | -34.5 mm | Recomputed from Table 6 rows 16-17 after correcting S17 radius. |

- Patent sign convention and data-file sign convention agree for Table 6 radii.
- All other Table 6 radii, axial thicknesses, d-line indices, and phi-derived semi-diameters were retained. The data file stores `sd = phi/2`.
- Cover glass remains excluded per project convention: Table 6 rows 27-29 are folded into the surface 26 air-equivalent BFD, `12.86 + 2.50 / 1.51680 + 1.00 = 15.508 mm`.
- Table 8 focus spacings confirmed: `STO` d9 = 18.19 / 7.02 and surface 19 d19 = 3.43 / 14.60 for infinity / 846 mm.
- Table 9 aspherical coefficients for S12, S20, and S21 were rechecked through A16; existing coefficients match and K remains 0.
- Table 10 group focal lengths confirmed: G1 +193.93 mm, G2 +70.09 mm, G3 -279.13 mm. Top-level f=82.45 mm, Fno=1.46, 2ω=29.40, Y=21.63, and L=123.83 remain correct.

### Phase 3 — Spectral / metadata enrichment

- Tables 6-10 publish nd and νd only; no patent nC, nF, ng, PgF, or dPgF values were available to add as structured spectral fields.
- Correcting L8 to S-PHM52 upgrades that element from an inferred soft match to a catalog Sellmeier-backed dispersion model.
- Header glass-label note updated to document the catalog/code-label policy and the corrected L8 identification.
- Existing metadata was retained: `subtitle`, `patentYear`, `focalLengthDesign`, `apertureDesign`, `elementCount`, `groupCount`, `focusDescription`, `lensMounts`, and `imageFormat`.

### Phase 4 — Analysis sync

- Updated `SonyFE85mmf14GMII.analysis.md` element narratives for L4-L14 to match the corrected glass labels and L8/L9 values.
- Updated the glass-identification table and chromatic-correction narrative: L8 is now S-PHM52 (618/634), and L9/L12/L14 are patent-code-only glasses.
- Removed the Hoya PCD51 / HIKARI J-PSKH4 cross-reference, which belonged to the incorrect 593/670 transcription.
- Updated the verification summary and OHARA source list.

### Verification

- `npm test -- catalogMismatchScan glassRelabelCandidatesScan` before edits — passed; this lens appeared in the generated mismatch/candidate reports.
- `npm test -- catalogMismatchScan glassRelabelCandidatesScan` after edits — passed; `SonyFE85mmf14GMII` no longer appears in `catalog-mismatches.generated.md` or `glass-relabel-candidates.generated.md`.
- `npm run typecheck` — passed.
- `npm run format:check` — passed.
- `npm run lint` — passed.
- `npm run test` — passed, 120 files / 1566 tests. Console output includes expected error-boundary stack traces from `errorBoundaries.test.tsx`.

### Outstanding follow-ups

- Patent-code glasses 986165 and 870200 intentionally remain catalog-unresolved until a public Sellmeier source is added. The 2026-06-04 source pass resolved 770297 as HOYA NBFD29.

## 2026-06-23 - Sony folder patent audit / APD + SD review

- Rechecked local `patents/WO_2025239028_A1.pdf`; the PDF is image-only for text extraction, so this pass relied on rendered-table checks already reflected in the data and analysis sidecar.
- Existing R/d/nd/vd, high-index/code-backed labels, APD metadata, and SD profile remain consistent with the patent-backed prescription and prior relabel pass.
- No APD, high-index, glass-label, spacing, or SD edits were needed in this pass.
- Current generated glass reports show no active Sony catalog-mismatch row for this lens.
