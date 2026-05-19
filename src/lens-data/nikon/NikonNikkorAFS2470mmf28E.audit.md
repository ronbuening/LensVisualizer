# Audit Log - Nikon AF-S NIKKOR 24-70mm f/2.8E ED VR

Patent: US 2020/0142168 A1, Example 1 (Table 1)
Catalog version: 952b877, local working tree

## 2026-05-10 - Patent audit and glass relabel cleanup

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L11 / S1 | `glass` | `S-LAH60 (OHARA)` | `744495 - lanthanum crown (patent nd=1.74389, vd=49.50)` | Patent Table 1 row 1 lists nd=1.74389, vd=49.5. Catalog S-LAH60 resolves to nd=1.83400; no safe exact catalog match was asserted. |
| L13 / S6 | `glass` | `S-NPH2 (OHARA) — HRI` | `S-LAH99 / TAFD55 (001291, HRI)` | Patent Table 1 row 6 lists nd=2.00100, vd=29.1. S-NPH2 resolves to nd=1.92286; S-LAH99/TAFD55 matches the 001291 HRI glass region. |
| L21 / S8 | `glass` | `L-BSL7 (OHARA)` | `593670 - fluorophosphate crown (patent nd=1.59349, vd=67.00)` | Patent Table 1 row 8 lists nd=1.59349, vd=67.0. S-BSL7 resolves to nd=1.51633; no exact public catalog match was asserted. |
| L22 / S10 | `glass` | `L-BSL7 (OHARA)` | `593670 - fluorophosphate crown (patent nd=1.59349, vd=67.00)` | Patent Table 1 row 10 repeats the 593670 glass. |
| L23 / S12 | `glass` | `L-BSL7 (OHARA)` | `593670 - fluorophosphate crown (patent nd=1.59349, vd=67.00)` | Patent Table 1 row 12 repeats the 593670 glass. |
| L34 / S25 | `glass` | `L-BSL7 (OHARA)` | `593670 - fluorophosphate crown (patent nd=1.59349, vd=67.00)` | Patent Table 1 row 27 repeats the 593670 glass. |
| L41 / S29A | `glass`, `apd`, `apdNote` | `Fluorophosphate crown — ASP/ED`, `patent`, patent APD claim | `553717 - ASP/ED fluorophosphate crown (patent nd=1.55332, vd=71.70)`, `inferred`, nd/vd-only note | Patent Table 1 row 31 lists nd=1.55332, vd=71.7 but no partial-dispersion or line-index table. |
| L43 / S32 | `glass`, `apdNote` | `L-BSL7 variant (OHARA)`, BSL7 comparison | `593679 - fluorophosphate crown (patent nd=1.59319, vd=67.90)`, no exact-catalog note | Patent Table 1 row 34 lists nd=1.59319, vd=67.9. S-BSL7 is not this glass; no exact public catalog match was asserted. |
| L44 / S34 | `glass`, `apd`, `role` | `S-FPL51 (OHARA) — ED`, `patent`, `Super-ED element` | `S-FPL51 / FCD1 class (ED fluorophosphate, vd=82.6)`, `inferred`, `ED element` | Patent Table 1 row 36 lists nd=1.49782, vd=82.6, which is S-FPL51/FCD1 territory, not S-FPL53 Super-ED. The patent does not publish partial-dispersion data. |
| L45 / S35 | `role` | `Dense flint in triplet; complementary dispersion for apochromatic correction` | `Dense flint in triplet; complementary dispersion for rear-group chromatic correction` | Avoids unsupported APO language; patent Table 1 gives nd/vd only for the triplet. |
| L46 / S36 | `glass` | `S-LAM54 (OHARA)` | `694533 - lanthanum crown (patent nd=1.69350, vd=53.30)` | Patent Table 1 row 38 lists nd=1.69350, vd=53.3. S-LAM54 resolves to nd=1.75700; no safe exact catalog match was asserted. |

### Phase 2 - Retained-information audit

- Patent Table 1 prescription rows 1-18 match stored `R`, `d`, and `nd` values at wide-angle infinity.
- Patent surface 19 is FC1, not glass; its fixed 1.200 mm spacing remains folded into data surface `18` (`D18 + 1.200`). Patent surface 20 maps to data `STO`.
- Data surfaces `19`-`28` map to patent rows 21-30, and data surfaces `29A`-`37A` map to patent rows 31-39. Patent FC2 row 40 remains folded into the `37A` back-focus spacing (`D39 + D40`).
- Variable spacings match Table 1: D7, D16, D18, D20, D26, D30, D39, and D40. Stored `18` and `37A` intentionally use the folded sums described above.
- Aspherical coefficients for patent surfaces 2, 3, 31, and 39 match stored `2A`, `3A`, `29A`, and `37A`. Patent kappa/conic values map directly to the stored `K` values.
- Semi-diameters remain production-diagram/geometric estimates; the patent does not publish clear apertures.

### Phase 3 - Spectral / metadata enrichment

- Added no `dPgF`, `nC`, `nF`, or `ng` values because the patent publishes only d-line index and Abbe number.
- Relabeled L13 to a catalog-resolving 001291 HRI family string and kept S-FPL51/FCD1 for L44; variant-code glasses remain code labels so the dispersion engine falls back to the stored patent nd/vd.
- Existing metadata already included patent year, design focal lengths, design aperture, element/group counts, maker, mount, format, and focus description.

### Phase 4 - Analysis sync

- Updated `NikonNikkorAFS2470mmf28E.analysis.md` element tables and glass strategy table for L11, L13, L21-L26, L32, L34, L41-L44, and L46.
- Replaced the unsupported S-FPL53/Super-ED wording with S-FPL51/FCD1-class ED wording.
- Removed unsupported APD/proprietary-catalog implications for code-labeled glasses where the patent gives only nd/vd.

### Verification

- `npm test -- catalogMismatchScan glassRelabelCandidatesScan` - passed; NikonNikkorAFS2470mmf28E no longer appears in either generated mismatch report.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - passed (120 files, 1566 tests; expected error-boundary console errors emitted by tests).

## 2026-05-19 — Six-digit glass-code backfill review

Reviewed `patents/US20200142168A1.pdf`, Example 1 / Table 1. L11 / surface 1 remains the only reviewed missing-Sellmeier row for this pass: nd=1.74389, νd=49.50, code `744495`.

Catalog-search disposition:

- Searched public Hikari/Nikon, OHARA, HOYA, SCHOTT, and refractiveindex.info-backed catalog data for `744495` and the nd/νd pair.
- No coefficient-backed exact match was found. The label now explicitly says no exact public catalog match, and retains the unbroken code for future auto-upgrade.

Changes made:

- Reworded the L11 glass label in `NikonNikkorAFS2470mmf28E.data.ts`.
- Updated the L11 narrative in `NikonNikkorAFS2470mmf28E.analysis.md`.
