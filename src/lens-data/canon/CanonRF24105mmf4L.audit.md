# Audit Log — Canon RF 24-105mm f/4 L IS USM

Patent: US 2019/0278068 A1, Numerical Example 2 (Hatada / Canon), published 2019-09-12
Catalog version: bb70259

## 2026-05-10 — Patent glass relabel + analysis sync

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / 1, L6 / 10 | `glass` | `S-TIH6 (OHARA)` | `S-NPH1 (OHARA)` | Patent row [0097] lists nd=1.80810, vd=22.8; S-NPH1 round-trips code 808228, while S-TIH6 is nd=1.80518, vd=25.43. |
| L2 / 2, L3 / 4, L16 / 27 | `glass` | `S-BAL14 (OHARA)` | `S-LAL18 (OHARA)` | Patent row [0097] lists nd=1.72916, vd=54.7; S-LAL18 round-trips code 729547, while S-BAL14 is nd=1.56883. |
| L4 / 6, L9 / 16 | `glass` | `S-NPH2 (OHARA)` | `S-LAH98 (OHARA)` | Patent row [0097] lists nd=1.95375, vd=32.3; S-LAH98 round-trips code 954323, while S-NPH2 is nd=1.92286. |
| L5 / 8A, L15 / 25A | `glass` | `L-BAL35 (OHARA)` | `L-BAL42 (OHARA PGM)` | Patent row [0097] lists nd=1.58313, vd=59.4; L-BAL42 aliases to S-BAL42 and round-trips code 583594. |
| L8 / 14 | `glass` | `S-LAH55V (OHARA)` | `911353 — lanthanum (nd=1.91082, νd=35.3)` | Patent row [0097] lists nd=1.91082, vd=35.3. No current catalog entry round-trips this pair, so the six-digit code preserves a future upgrade path. |
| L10 / 17 | `glass` | `MC-7 (HOYA)` | `S-FPM2 (OHARA) / MC-7 (HOYA)` | Patent row [0097] lists nd=1.59522, vd=67.7; S-FPM2 round-trips code 595677 while retaining the existing MC-7 equivalence in the label. |
| L11 / 19 | `glass` | `S-TIM27 (OHARA)` | `S-NBH51 (OHARA)` | Patent row [0097] lists nd=1.74951, vd=35.3; S-NBH51 round-trips within patent precision, while S-TIM27 is nd=1.63980. |
| L12 / 20 | `glass` | `S-LAH79 (OHARA)` | `TAFD40 (HOYA)` | Patent row [0097] lists nd=2.00069, vd=25.5; TAFD40 round-trips code 001255, while S-LAH79 is nd=2.00330, vd=28.27. |
| L13 / 22 | `glass` | `S-TIH53 (OHARA)` | `S-TIH11 (OHARA)` | Patent row [0097] lists nd=1.78472, vd=25.7; S-TIH11 round-trips code 785257, while S-TIH53 is nd=1.84666. |
| L17 / 29A | `glass` | `L-LAM69 (OHARA)` | `764491 — L-LAM69 PGM lanthanum crown (nd=1.76450, νd=49.1)` | Patent row [0097] lists nd=1.76450, vd=49.1. No current catalog entry round-trips this pair, so the six-digit code is retained. |

### Phase 2 — Retained-information audit

- Rechecked the surface prescription against patent [0097], Numerical Example 2. All retained `R`, fixed `d`, `nd`, and element assignments match the patent table; post-stop data labels are offset by one because the data file stores `STO` as its own row.
- Rechecked variable spacings `d5`, `d13`, `d27`, `d29`, `d31`, and `d33` against the patent wide/intermediate/telephoto table. Each first pair value in `var` matches the infinity-focus patent value.
- Rechecked aspherical surfaces 8, 9, 26, 27, 30, and 31: all K and A4-A12 coefficients match the patent table. The data labels are 8A, 9A, 25A, 26A, 29A, and 30A because of the explicit stop row.
- Effective diameters were reviewed against the patent table. Existing `sd` values remain render-tuned as documented in the file header and were not changed.

### Phase 3 — Spectral / metadata enrichment

- The patent provides no line-index or dPgF table, so no per-element `nC`, `nF`, `ng`, or `dPgF` fields were added.
- Glass relabels upgrade most elements from mismatched or unresolved annotations to catalog-backed Sellmeier dispersion. L8 (`911353`) and L17 (`764491`) remain Abbe-based code fallbacks.
- Top-level metadata already included maker, patent year, design focal length/aperture, element/group count, mount, format, and focus description; no metadata additions were needed.

### Phase 4 — Analysis sync

- Updated `CanonRF24105mmf4L.analysis.md` throughout to match the audited glass labels and the code-fallback decisions.
- Corrected the close-focus note: the patent lacks close-focus spacing tables, but the data file estimates D27/D29 close-focus travel from Canon's 0.45 m MFD rather than coding all variable gaps as identical zoom-only pairs.
- Updated the glass summary table and removed the outdated claim that all 12 glass families were exact named catalog matches.

### Verification

- `npm test -- catalogMismatchScan glassRelabelCandidatesScan` — passed after edits.
- Generated mismatch reports: this lens no longer appears in `catalog-mismatches.generated.md` or `glass-relabel-candidates.generated.md`.
- `unresolved-glass.generated.md` still lists L8 (`911353`) and L17 (`764491`) as expected code-based fallbacks.
- `npm run typecheck` — passed.
- `npm run format:check` — passed.
- `npm run lint` — passed.
- `npm run test` — passed (120 files, 1566 tests; expected error-boundary stack traces printed during the run).
