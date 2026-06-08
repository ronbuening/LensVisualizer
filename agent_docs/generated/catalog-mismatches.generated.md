# Catalog Mismatches (auto-generated)

Surfaces where the element's `glass` string resolves to a vendor catalog entry
but the catalog Sellmeier d-line index disagrees with the stored `surface.nd` by more than 0.005.

These are rejected by the safety net in [src/optics/dispersion.ts](../../src/optics/dispersion.ts) — the
dispersion cascade falls through to Abbe rather than trust a misidentified glass label. This
report exists so the team can decide per-case whether to relabel the glass, update the stored `nd`,
or accept the mismatch (some glass annotations in lens-data files are explicitly marked as guesses
with words like "probable" or "approx").

**Regenerate this file** by running `npm test -- catalogMismatchScan`.

## Summary

- **311** lenses scanned
- **3510** glass surfaces examined
- **3504** surfaces with non-empty `glass` strings
- **2840** of those resolved to a catalog entry
- **0** mismatches found (0.0% of resolved surfaces)
- **0** distinct lens files affected

## No mismatches

Every catalog-resolved surface agrees with its stored `nd` within tolerance. ✓
