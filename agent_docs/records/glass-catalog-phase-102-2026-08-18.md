# Glass Catalog Phase 102 — 2026-08-18

## Summary

- Audited unresolved six-digit glass rows against the retained local patent PDFs and first-party HOYA, OHARA, and
  SUMITA catalog files.
- Added six coefficient-backed catalog entries and assigned source-compatible catalog equivalents to 25 lens
  elements while retaining patent coordinates, partial-dispersion evidence, and production-supplier uncertainty.

## Changes

- Added HOYA M-NBF1, C2, and NBFD5; OHARA L-BAL43; and SUMITA K-CSK120(M) and K-VC80(M).
- Refreshed M-TAFD305 from HOYA's current polynomial and added the MC-TAFD305 catalog spelling.
- Recovered existing L-LAH85V, J-KZFH4, J-LASFH9, NBFD2, H-LaF3B, and S-LAL52 equivalents from stale unresolved
  dispositions.
- Raised strict Sellmeier coverage from 5994/6653 to 6019/6653 and trusted coverage from 6008/6653 to 6033/6653.
- Kept non-unique candidates and candidates that conflict with patent partial-dispersion data unresolved.

## Verification

- `npm run generate:glass-reports` — passed (8 files, 15 tests)
- `npm test -- --run __tests__/src/optics/dispersion.test.ts` — passed (75 tests)
- `npm run typecheck` — passed
- `npm run format:check` — passed
- `npm run lint` — passed
- `npm run test` — passed (257 files, 2499 tests)
- `npm run build` — passed (1123 routes prerendered)

## Follow-ups

- The generated missing-Sellmeier inventory still contains 243 reviewed elements. Its active unreviewed queue is
  empty; future gains require additional first-party coefficient sources or patent line-index evidence rather than
  coordinate-only guesses.
