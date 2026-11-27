# Catalog Mismatches (auto-generated)

Surfaces where the element's `glass` string resolves to a vendor catalog entry
but its published coordinates disagree with the stored prescription beyond Δn ±0.003 or Δν ±2.
D-line rows compare C/d/F coordinates; native e-line rows compare C′/e/F′ coordinates.

These are rejected by the safety net in [src/optics/chromatic/materialResolver.ts](../../src/optics/chromatic/materialResolver.ts) — the
dispersion cascade falls through to Abbe rather than trust a misidentified glass label. This
report exists so the team can decide per-case whether to relabel the glass, update the stored `nd`,
or accept the mismatch (some glass annotations in lens-data files are explicitly marked as guesses
with words like "probable" or "approx").

**Refreshed on `main` after every merge; do not edit or commit this file.** Preview a branch's version with `npm run generate:reports -- catalogMismatchScan`, then `npm run reports:diff`.

## Summary

- **1224** lenses scanned
- **13772** glass surfaces examined
- **13738** surfaces with non-empty `glass` strings
- **280 / 356** native e-line surfaces resolve by explicit name or alias
- **12672** of those resolved to a catalog entry
- **0** mismatches found (0.0% of resolved surfaces)
- **0** distinct lens files affected

## No mismatches

Every catalog-resolved surface agrees with its stored reference index and Abbe number. ✓
