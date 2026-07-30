# Catalog Mismatches (auto-generated)

Surfaces where the element's `glass` string resolves to a vendor catalog entry
but its published coordinates disagree with the stored prescription beyond nd ±0.003 or νd ±2.

These are rejected by the safety net in [src/optics/dispersion.ts](../../src/optics/dispersion.ts) — the
dispersion cascade falls through to Abbe rather than trust a misidentified glass label. This
report exists so the team can decide per-case whether to relabel the glass, update the stored `nd`,
or accept the mismatch (some glass annotations in lens-data files are explicitly marked as guesses
with words like "probable" or "approx").

**Regenerate this file** by running `npm test -- catalogMismatchScan`.

## Summary

- **488** lenses scanned
- **5360** glass surfaces examined
- **5353** surfaces with non-empty `glass` strings
- **4643** of those resolved to a catalog entry
- **0** mismatches found (0.0% of resolved surfaces)
- **0** distinct lens files affected

## No mismatches

Every catalog-resolved surface agrees with its stored `nd` and `νd` within tolerance. ✓
