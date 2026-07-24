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

- **470** lenses scanned
- **5125** glass surfaces examined
- **5118** surfaces with non-empty `glass` strings
- **4274** of those resolved to a catalog entry
- **2** mismatches found (0.0% of resolved surfaces)
- **2** distinct lens files affected

## Most-frequent mismatched catalog targets

Glass labels that get rejected most often. A high count here often points to a single glass
annotation pattern (e.g. an obsolete name, a `probable` guess) that's used across many lenses.

| Catalog entry | Rejected surfaces | Notes |
|---|---|---|
| NBFD10 | 1 | |
| N-SF8 | 1 | |

## Mismatches by lens

### [HASSELBLAD HC Macro 120mm f/4](../../src/lens-data/hasselblad/HasselbladHC120mmf4Macro.data.ts) — JP 2004-302170 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 16 | `NBFD10 (HOYA)` | NBFD10 | 1.80440 | 1.83400 | +0.0296 |

### [NIKON ULTRA-MICRO-NIKKOR 29.5mm f/1.2](../../src/lens-data/nikon/NikonUltraMicroNikkor295mmf12.data.ts) — GB 1,050,055

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `SF8 class dense flint (patent e-line index stored)` | N-SF8 | 1.69402 | 1.68894 | -0.0051 |

