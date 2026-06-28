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

- **385** lenses scanned
- **4304** glass surfaces examined
- **4298** surfaces with non-empty `glass` strings
- **3520** of those resolved to a catalog entry
- **2** mismatches found (0.1% of resolved surfaces)
- **1** distinct lens files affected

## Most-frequent mismatched catalog targets

Glass labels that get rejected most often. A high count here often points to a single glass
annotation pattern (e.g. an obsolete name, a `probable` guess) that's used across many lenses.

| Catalog entry | Rejected surfaces | Notes |
|---|---|---|
| SF10 | 1 | |
| S-TIH18 | 1 | |

## Mismatches by lens

### [RODENSTOCK GRANDAGON-N 75mm f/6.8](../../src/lens-data/rodenstock/RodenstockGrandagonN75mmf68.data.ts) — DE 26

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `SF10 class (Schott legacy; stored patent n_e)` | SF10 | 1.73430 | 1.72825 | -0.0060 |
| 7 | `SF18 / S-TIH18 class (stored patent n_e)` | S-TIH18 | 1.72730 | 1.72151 | -0.0058 |

