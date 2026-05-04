# Audit Log - Nikon NIKKOR Z 24-70mm f/2.8 S

Patent: WO2020/136749 A1, Example 1 (Table 1)
Catalog version: local working tree, 2026-05-04

## 2026-05-04 - Patent audit and glass relabel cleanup

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L12 / S2 | `glass` | `S-LAL8 (OHARA)` | `S-LAH97 (OHARA)` | Patent Table 1 lists nd=1.75500, vd=52.34. Catalog S-LAH97 round-trips this pair; S-LAL8 resolves to nd=1.712995. |
| L13 / S4 | `glass` | `S-LAH55VS (OHARA)` | `S-LAH66 (OHARA)` | Patent Table 1 lists nd=1.77250, vd=49.62. Catalog S-LAH66 round-trips this pair; S-LAH55VS resolves to nd=1.834809. |
| L21 / S6 | `glass` | `L-LAH85 (OHARA)` | `744495 - moldable lanthanum crown (patent nd=1.74389, vd=49.53)` | Patent Table 1 lists nd=1.74389, vd=49.53. No safe catalog entry exists, so the six-digit code label avoids a false catalog match. |
| L22 / S8 | `glass` | `S-LAH55VS (OHARA)` | `S-LAH66 (OHARA)` | Same patent constants as L13; catalog S-LAH66 round-trips the stored pair. |
| L23 / S10 | `glass` | `S-TIH6 (OHARA)` | `728284 - high-dispersion flint (patent nd=1.72825, vd=28.38)` | Patent Table 1 lists nd=1.72825, vd=28.38. S-TIH6 resolves to nd=1.805181, so a code label preserves Abbe fallback. |
| L24 / S12 | `glass` | `S-PHM52Q (OHARA)` | `S-PHM52 (OHARA)` | Patent Table 1 lists nd=1.61800, vd=63.34, matching catalog S-PHM52 within round-trip tolerance. |
| L31 / S15 | `glass` | `S-LAL12Q (OHARA)` | `694533 - lanthanum crown (patent nd=1.69370, vd=53.32)` | Patent Table 1 lists nd=1.69370, vd=53.32. No safe catalog entry exists, so the six-digit code label avoids a false catalog match. |
| L32 / S17 | `glass` | `S-PHM52 (OHARA)` | `593679 - fluorophosphate crown (patent nd=1.59319, vd=67.90)` | Patent Table 1 lists nd=1.59319, vd=67.90. S-PHM52 resolves to nd=1.61800, so a code label preserves Abbe fallback. |
| L41 / S19 | `glass` | `S-NBH8 (OHARA)` | `738323 - niobium dense flint (patent nd=1.73800, vd=32.33)` | Patent Table 1 lists nd=1.73800, vd=32.33. S-NBH8 resolves to nd=1.720467, so a code label preserves Abbe fallback. |
| L42 / S20 | `glass` | `S-FPL51Y (OHARA)` | `498826 - fluorophosphate ED (patent nd=1.49782, vd=82.57)` | Patent Table 1 lists nd=1.49782, vd=82.57. The project catalog has S-FPL51 but not this Y/variant pair; the code label prevents an implied Sellmeier match. |
| L51 / S22 | `glass` | `S-NBH56 (OHARA)` | `S-NBH8 (OHARA)` | Patent Table 1 lists nd=1.72047, vd=34.71. Catalog S-NBH8 round-trips this pair; S-NBH56 resolves to nd=1.854779. |
| L52 / S24 | `glass` | `S-PHM53 (OHARA)` | `593670 - fluorophosphate crown (patent nd=1.59349, vd=67.00)` | Patent Table 1 lists nd=1.59349, vd=67.00. S-PHM53 resolves to nd=1.603001, so a code label preserves Abbe fallback. |
| L61 / S26 | `glass` | `S-LAH98 (OHARA)` | `792450 - dense lanthanum crown (patent nd=1.79189, vd=45.04)` | Patent Table 1 lists nd=1.79189, vd=45.04. No safe catalog entry exists, so the six-digit code label avoids a false catalog match. |
| L71 / S28 | `glass` | `S-NPH2 (OHARA)` | `946180 - ultra-high-index dense flint (patent nd=1.94595, vd=17.98)` | Patent Table 1 lists nd=1.94595, vd=17.98. S-NPH2 resolves to nd=1.92286, so a code label preserves Abbe fallback. |
| L72 / S30 | `glass` | `S-LAH93 (OHARA)` | `852402 - dense lanthanum flint (patent nd=1.85207, vd=40.15)` | Patent Table 1 lists nd=1.85207, vd=40.15. No safe catalog entry exists, so the six-digit code label avoids a false catalog match. |
| L73 / S32 | `glass` | `S-BAL42 (OHARA)` | `S-BAL35 (OHARA)` | Patent Table 1 lists nd=1.58913, vd=61.22. Catalog S-BAL35 round-trips this pair; S-BAL42 resolves to nd=1.583126. |

### Phase 2 - Retained-information audit

- Patent Table 1 lens prescription rows 1-33 match the stored `R`, `d`, `nd`, and `vd` values at the wide-angle infinity position, including stop surface S14 and image-side BF row S33.
- Patent Table 1 variable-spacing data matches all stored `var` entries for W, M, and T at infinity and close focus: D5, D13, D18, D21, D25, D27, and BF.
- Patent Table 1 aspherical data for S6, S15, S27, and S30 matches the stored coefficients. The patent uses kappa=1.0000, matching the file's existing asphere convention.
- Patent Table 1 group focal lengths match the stored group annotations: G1=119.124, G2=-22.126, G3=40.880, G4=115.687, G5=124.717, G6=100.365, G7=-47.354.
- Semi-diameters remain estimated because the patent does not publish clear apertures.

### Phase 3 - Spectral / metadata enrichment

- Relabeled L24 to catalog S-PHM52, upgrading that element to catalog Sellmeier resolution.
- Removed inferred APD flags from L32, L42, and L52 because the patent provides only nd/vd and no line-index or partial-dispersion data for those variant glasses.
- Existing metadata already included patent year, design focal lengths, design aperture, element/group counts, maker, and focus description.

### Phase 4 - Analysis sync

- Updated the element-by-element narrative and glass budget table to match the corrected labels.
- Removed catalog-specific APD claims for L32 and L52; retained ED identification only as an nd/vd-position inference.
- Updated the manufacturing/asphere notes so non-catalog labels are described by patent code and nd/vd rather than unresolved OHARA suffix names.

### Verification

- `npm test -- catalogMismatchScan glassRelabelCandidatesScan` - passed; this lens no longer appears in either generated report.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - passed (116 files, 1507 tests; expected error-boundary console errors emitted by tests).
