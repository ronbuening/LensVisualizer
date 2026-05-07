# Audit Log — Panasonic LUMIX S 20-60mm F3.5-5.6

Patent: JP 2021-179551 A, Numerical Example 2

## 2026-05-07 — Inferred close-focus motion

### Phase 2 — Retained-Information Audit

- Re-checked Example 2 focus prose: paragraph 0044 states that G4 moves toward the image side during infinity-to-close focusing.
- Re-checked Table 6A infinity spacings for `d17`, `d19`, and `BF`. The published `BF` term is a small zoom-only image-side correction, so surface 21 now follows the patent's wide/mid/tele back-focus totals.

### Phase 3 — Metadata / Focus Enrichment

| Gap | Before | After | Justification |
|---|---:|---:|---|
| `d17` wide close | 2.9215 | 7.4935 | Inferred by paraxial finite-conjugate solve at 0.15 m MFD, moving only G4 imageward. |
| `d19` wide close | 12.2940 | 7.7220 | Conserves `d17 + d19` while G4 moves. |
| `d17` mid close | 5.9516 | 10.8445 | Same solve using interpolated 0.213 m mid-zoom MFD. |
| `d19` mid close | 20.9631 | 16.0702 | Conserves `d17 + d19` while G4 moves. |
| `d17` tele close | 7.2409 | 10.9612 | Same solve at 0.40 m tele MFD. |
| `d19` tele close | 36.2231 | 32.5028 | Conserves `d17 + d19` while G4 moves. |
| `BF`/surface 21 mid infinity | 22.2307 | 22.2303 | Table 6A: base image-side air space 22.1972 mm + BF 0.03308 mm. |
| `BF`/surface 21 tele infinity | 22.2307 | 22.2025 | Table 6A: base image-side air space 22.1972 mm + BF 0.00531 mm. |

The solve treats the patent's published direction as authoritative and estimates only travel magnitude. It keeps G3 and G5 fixed during focus, moves L10/G4 toward the image, conserves the `d17 + d19` cavity length at each zoom position, and solves the near-axis finite-conjugate focus condition at the fixed image plane. Panasonic publishes 0.15 m MFD at the wide range and 0.40 m at tele; the middle zoom sample uses a linear interpolation because no mid-zoom MFD is published.

### Phase 4 — Analysis Sync

- Updated the focus-mechanism section to describe the inferred focus travel and the method.
- Corrected the prior statement implying `d(G4-G5)` would grow at close focus; imageward L10 motion makes `d19` contract.

### Verification

- `npm run typecheck` — passed.
- `npm run format:check` — passed.
- `npm run lint` — passed.
- `npm run test -- buildLens` — passed, 51 tests.
- `npm run test` — passed, 118 files / 1543 tests. React error-boundary tests emitted expected throw stacks while still passing.
