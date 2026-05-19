# Audit Log — FUJIFILM FUJINON GF80mmF1.7 R WR

Patent: US 2021/0294073 A1, Example 1 (Tables 1-4)
Catalog version: 88dde1c

## 2026-05-19 — Patent glass relabel and asphere check

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L12 / S3 | `glass` | `S-TIM35 (OHARA)` | `S-TIH10 (OHARA)` | Patent Table 1 row 3 gives nd=1.72825, vd=28.31. Current catalog S-TIM35 is nd=1.69895; S-TIH10 round-trips nd exactly and is the closest OHARA candidate in the generated relabel report. |
| L21 / S5 | `glass` | `S-NBH56 (OHARA)` | `J-LASKH2 (Hikari)` | Patent Table 1 row 5 gives nd=1.75500, vd=52.34. Current catalog S-NBH56 is nd=1.85478; J-LASKH2 round-trips nd/vd to the patent pair. |
| L23 / S8 | `glass` | `S-BAH27 (OHARA)` | `S-BAL2 (OHARA)` | Patent Table 1 row 8 gives nd=1.57099, vd=50.80. Current catalog S-BAH27 is nd=1.70154; S-BAL2 round-trips to the patent pair. |
| L25 / S12 | `glass` | `S-TIM27 (OHARA)` | `E-FD5 (HOYA)` | Patent Table 1 row 12 gives nd=1.67270, vd=32.18. Current catalog S-TIM27 is nd=1.63980; E-FD5 round-trips nd exactly and vd within 0.01. |
| L26 / S14 | `glass` | `S-LAH7 (OHARA)` | `K-VC89 (Sumita)` | Patent Table 1 row 14 gives nd=1.81000, vd=41.00. S-LAH7 is unresolved in the current catalog; K-VC89 has code 810410 and round-trips to the patent pair. |
| L31 / S16 | `glass` | `S-LAH93 (OHARA)` | `883392 — high-index lanthanum (nd=1.88300, νd=39.22)` | Patent Table 1 row 16 gives nd=1.88300, vd=39.22. Current catalog S-LAH93 is nd=1.90525; no catalog candidate matches the patent pair closely enough, so a six-digit code label preserves the stored constants for future catalog upgrade. |
| L33 / S19 | `glass` | `S-BSM71 (OHARA)` | `N-BK7 (Schott)` | Patent Table 1 row 19 gives nd=1.51680, vd=64.21. Current catalog S-BSM71 is nd=1.64850; N-BK7 round-trips nd exactly and vd within 0.04. |
| L34 / S21 | `glass` | `S-BSM81 (OHARA)` | `E-FD2 (HOYA)` | Patent Table 1 row 21 gives nd=1.64769, vd=33.84. Current catalog S-BSM81 is nd=1.64000; E-FD2 round-trips to the patent pair. |

### Phase 2 — Retained-information audit

- Patent Table 1 rows 1-22 were checked against the data file: radii, center thicknesses, d-line indices, Abbe numbers, and fixed/variable air gaps match the Example 1 prescription.
- Patent Table 3 confirms `DD[4]` = 16.3400 / 1.9320 and `DD[15]` = 2.3200 / 16.7280; the file's `var` entries and first-position surface `d` values match.
- Patent Table 4 confirms KA = 1.0000000 for S14/S15, so the file's `K: 0` convention is correct.
- L26 / S14 `A20`: corrected `1.886046e-25` to `1.880646e-25` from Patent Table 4.
- Semi-diameters remain estimated values as noted in the file header; the patent table does not publish semi-diameters.

### Phase 3 — Spectral / metadata enrichment

- No patent line-index or partial-dispersion columns are provided beyond nd/vd, so no `nC`, `nF`, `ng`, or additional `dPgF` values were added.
- Existing metadata (`subtitle`, `patentYear`, design focal length/aperture, element/group count, mount/format, focus description) already matches the patent and production identification.

### Phase 4 — Analysis sync

- Updated element narratives and the glass-identification table to match the corrected catalog labels.
- Reframed the glass source note because the patent gives optical constants, not vendor glass names.
- Kept the existing Example 1 identification and aspherical coefficient discussion; its S14 `A20` table already matched Patent Table 4.

### Verification

- `npm test -- catalogMismatchScan glassRelabelCandidatesScan unresolvedGlassScan` — passed; reports regenerated.
- `npm run typecheck` — passed.
- `npm run format:check` — passed.
- `npm run lint` — passed.
- `npm run test` — passed (129 files, 1664 tests). React error-boundary tests print expected stack traces while passing.
- Generated reports now show no GF80 catalog-mismatch or relabel-candidate rows. One unresolved GF80 entry remains: L31 / S16 `883392`, intentionally code-labeled because no current catalog glass matches Patent Table 1 nd=1.88300, vd=39.22.
