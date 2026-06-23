# Audit Log — Vivitar Series 1 70-210mm f/2.8-4 VMC

Patent: US 4,758,073, Example 4

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/US4758073.pdf`.
- Example 4 rows confirmed L5 nd = 1.77300, vd = 49.6 and L6 nd = 1.64000, vd = 60.2.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L5 / S7 | `S-LAH65 class (Ohara)` | `S-LAH66 (OHARA)` | Public OHARA catalog row matches the patent nd/vd pair. |
| L6 / S9 | `S-BSM71 (Ohara)` | `S-BSM81 (OHARA)` | Public OHARA catalog row matches the patent nd/vd pair. |

### Analysis sync

- Updated the L5/L6 element descriptions and glass table.

## 2026-06-23 — Vivitar folder patent audit

### Phase 1 — Glass reconciliation

- Reviewed local patent file `patents/US4758073.pdf` against `VivitarSeries170210mmf284.data.ts`.
- Updated L1 from `Dense flint (785/261, SF11 class)` to `785261 — dense flint (SF56A / SF11 class)`, keeping the patent code first so the resolver can use the local SF56A coefficients while still recording the SF11-family comparison.
- Updated L4 and L13 from `S-LAH55 (Ohara)` to `834373 — dense flint (M-NBFD10 catalog match; S-LAH60/LaSF5 class)`. The old S-LAH55 label has a local catalog νd near 42.7, which does not match the patent's 1.834 / 37.3 row; code 834373 is the closer coefficient-backed match.
- Adjusted L4/L13 role text from lanthanum-specific language to high-index dense-flint language.

### Phase 2 — Prescription, SD, APD, and high-index review

- Rechecked Example 4 / Table IV radii, axial spacings, nd/vd rows, and zoom variable gaps. No numeric prescription changes were made.
- Retained the existing corrected wide-end D2 value used by the data file; the patent print is inconsistent with total-track continuity and the existing analysis documents the correction.
- The patent publishes no semi-diameter table. Fig. 4 supports the existing pattern: large front positive group, smaller moving negative groups, and compact rear relay/corrector elements. No SD edits were made.
- The patent publishes no abnormal partial dispersion, dPgF, theta-gF, line-index set, apodization, or gradient-filter data. All elements remain `apd: false`; no APD status was inferred.
- High-index status is supported for L4/L13 834373, L5 S-LAH66, L7/L11 SF6, L12 F5, and L14 SF14. The audit avoids treating L4/L13 as S-LAH55 because that label points at the wrong local dispersion row.

### Phase 3 — Analysis sync

- Updated the L1, L4, and L13 analysis text plus the glass table and palette summary to match the corrected labels.

### Verification

- `npm run generate:glass-reports` passed.
- `npm run typecheck` passed.
- Scoped `prettier --check` passed for the Vivitar audit files and regenerated glass reports.
- `git diff --check -- src/lens-data/vivitar agent_docs/generated` passed.

## 2026-06-23 — SD proportion refinement

- Adjusted the Group G2 SDs for L4-L7 so the two cemented doublets read closer in overall size: S6/S7/S10/S11 were reduced modestly and the S8/S9 pinch was raised from 14.4 mm to 14.45 mm.
- This is a visual/proportional refinement, not a patent-derived SD; US 4,758,073 does not publish semi-diameter data.
- S8/S9 remains intentionally smaller than the surrounding surfaces because the 6.21 mm air gap and opposing strong curvatures leave very little collision margin.
- Verification: `npm run typecheck` and focused `buildLens` / `elementRenderDiagnostics` tests passed; computed S8/S9 sag intrusion remains about 0.045 mm below the default 90%-gap collision allowance.
