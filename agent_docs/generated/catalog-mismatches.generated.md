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

- **354** lenses scanned
- **4001** glass surfaces examined
- **3995** surfaces with non-empty `glass` strings
- **3207** of those resolved to a catalog entry
- **2** mismatches found (0.1% of resolved surfaces)
- **1** distinct lens files affected

## Most-frequent mismatched catalog targets

Glass labels that get rejected most often. A high count here often points to a single glass
annotation pattern (e.g. an obsolete name, a `probable` guess) that's used across many lenses.

| Catalog entry | Rejected surfaces | Notes |
|---|---|---|
| TAFD25 | 2 | |

## Mismatches by lens

### [NIKON AF ZOOM-MICRO NIKKOR ED 70-180mm f/4.5-5.6D](../../src/lens-data/nikon/NikonAFZoomMicro70180mmf4556D.data.ts) — US 5,717,527

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `TAFD25 / J-LASFH13HS class (Nikon/Hikari, 861/230)` | TAFD25 | 1.86074 | 1.90366 | +0.0429 |
| 3 | `TAFD25 / J-LASFH13HS class (Nikon/Hikari, 861/230)` | TAFD25 | 1.86074 | 1.90366 | +0.0429 |

