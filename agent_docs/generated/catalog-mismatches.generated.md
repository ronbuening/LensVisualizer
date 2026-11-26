# Catalog Mismatches (auto-generated)

Surfaces where the element's `glass` string resolves to a vendor catalog entry
but its published coordinates disagree with the stored prescription beyond Δn ±0.003 or Δν ±2.
D-line rows compare C/d/F coordinates; native e-line rows compare C′/e/F′ coordinates.

These are rejected by the safety net in [src/optics/chromatic/materialResolver.ts](../../src/optics/chromatic/materialResolver.ts) — the
dispersion cascade falls through to Abbe rather than trust a misidentified glass label. This
report exists so the team can decide per-case whether to relabel the glass, update the stored `nd`,
or accept the mismatch (some glass annotations in lens-data files are explicitly marked as guesses
with words like "probable" or "approx").

**Regenerate this file** by running `npm run generate:reports -- catalogMismatchScan`.

## Summary

- **1230** lenses scanned
- **13810** glass surfaces examined
- **13776** surfaces with non-empty `glass` strings
- **280 / 356** native e-line surfaces resolve by explicit name or alias
- **12699** of those resolved to a catalog entry
- **1** mismatches found (0.0% of resolved surfaces)
- **1** distinct lens files affected

## Most-frequent mismatched catalog targets

Glass labels that get rejected most often. A high count here often points to a single glass
annotation pattern (e.g. an obsolete name, a `probable` guess) that's used across many lenses.

| Catalog entry | Rejected surfaces | Notes |
|---|---|---|
| LF7 | 1 | |

## Mismatches by lens

### [OLYMPUS ZUIKO AUTO-W 21mm f/2](../../src/lens-data/olympus/OlympusZuikoAuto21mmf2.data.ts) — US 4,210,388

| Surface | Ref | Glass annotation | Catalog match | Stored n/ν | Catalog n/ν | Δn | Δν |
|---|---|---|---|---|---|---|---|
| 12 | d | `593348 — LF7-class light flint (no exact public catalog match)` | LF7 | 1.59340 / 34.80 | 1.57501 / 41.31 | -0.0184 | +6.50 |
