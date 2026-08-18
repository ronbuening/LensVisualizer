# Glass Catalog Phase 103 — 2026-08-18

## Summary

- Rendered and visually reviewed sixteen local patent tables for unresolved or stale six-digit glass dispositions.
- Assigned existing source-backed catalog curves to 21 elements across sixteen lenses while preserving patent
  coordinates, authored partial dispersion, and production-supplier uncertainty.
- Converted Fujifilm GF 20-35mm Table 28 θgF values into `dPgF` for all fourteen elements.

## Changes

- Recovered S-FTM16, S-TIL6, J-K3, K5, FF5, J-PSKH8, M-TAFD51, MC-FCD1-M20, S-NBM51, L-LAH85V,
  N-SK2, S-BAH32, NBFD2, M-TAF401, J-PSKH4, K10, M-NBF1, H-ZF39, and H-ZBaF4 equivalents already
  present in the 529-entry catalog.
- Used H-ZBaF4 for Canon RF 50mm G5/G10 only as the coefficient-backed baseline; Canon's authored patent `dPgF`
  remains authoritative at the g line.
- Left weaker or source-blocked alternatives unresolved. In particular, Canon's vintage `583302` row does not match
  retained HOYA E-F3 (`1.61293 / 36.96`), and no local patent source supported the queued Mamiya candidate.

## Coverage

- Strict Sellmeier coverage: 6019/6653 → 6040/6653 (90.8%).
- Trusted chromatic coverage: 6033/6653 → 6054/6653 (91.0%).
- Visible strict-complete lenses: 340 → 353.
- Visible trusted-complete lenses: 345 → 358.
- Explicit missing-Sellmeier dispositions: 111 → 99.
- Lens files affected by missing six-digit rows: 99 → 89.
- Active unreviewed rows and catalog-coordinate mismatches remain zero.

## Patent Sources Reviewed

- `patents/US2838978.pdf`, `patents/US2084309.pdf`, `patents/DE_1228820_B.pdf`, `patents/US3632190.pdf`,
  `patents/US4266860.pdf`, `patents/JP2022100641A.pdf`, `patents/JPWO2020157904A1.pdf`, and
  `patents/US20220236544A1.pdf`.
- `patents/JPA 2026121744-000000.pdf`, `patents/US20220276464A1.pdf`, `patents/US6940655.pdf`,
  `patents/US4497547.pdf`, `patents/WO2022259649A1.pdf`, `patents/US3743384.pdf`, `patents/US2983193.pdf`,
  and `patents/US20190265441A1.pdf`.

## Verification

- `npm run generate:glass-reports` — passed (8 files, 15 tests).
- `npm run typecheck` — passed.
- `npm run format:check` — passed.
- `npm run lint` — passed.
- `npm run test` — passed (257 files, 2499 tests).
- `npm run build` — passed (1123 routes prerendered).
