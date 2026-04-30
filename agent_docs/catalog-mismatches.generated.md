# Catalog Mismatches (auto-generated)

Surfaces where the element's `glass` string resolves to a vendor catalog entry
but the catalog Sellmeier d-line index disagrees with the stored `surface.nd` by more than 0.005.

These are rejected by the safety net in [src/optics/dispersion.ts](../src/optics/dispersion.ts) — the
dispersion cascade falls through to Abbe rather than trust a misidentified glass label. This
report exists so the team can decide per-case whether to relabel the glass, update the stored `nd`,
or accept the mismatch (some glass annotations in lens-data files are explicitly marked as guesses
with words like "probable" or "approx").

**Regenerate this file** by running `npm test -- catalogMismatchScan`.

## Summary

- **123** lenses scanned
- **1414** glass surfaces examined
- **1411** surfaces with non-empty `glass` strings
- **564** of those resolved to a catalog entry
- **147** mismatches found (26.1% of resolved surfaces)
- **57** distinct lens files affected

## Most-frequent mismatched catalog targets

Glass labels that get rejected most often. A high count here often points to a single glass
annotation pattern (e.g. an obsolete name, a `probable` guess) that's used across many lenses.

| Catalog entry | Rejected surfaces | Notes |
|---|---|---|
| S-LAH79 | 22 | |
| S-NPH2 | 16 | |
| S-LAH58 | 14 | |
| S-TIH6 | 11 | |
| S-LAH66 | 10 | |
| S-LAH55V | 9 | |
| S-LAH65V | 7 | |
| S-LAM66 | 6 | |
| S-BAL42 | 5 | |
| S-LAL14 | 5 | |
| TAFD30 | 5 | |
| S-BSL7 | 4 | |
| S-LAL18 | 4 | |
| S-TIH53 | 4 | |
| S-LAH63 | 4 | |
| S-PHM52 | 4 | |
| S-LAH53 | 3 | |
| SF6 | 3 | |
| S-LAH55 | 3 | |
| S-LAH59 | 2 | |
| S-NBH5 | 2 | |
| SF4 | 2 | |
| S-FPM2 | 1 | |
| S-PHM53 | 1 | |

## Mismatches by lens

### [CANON EF 50mm f/1.0L USM](../src/lens-data/canon/CanonEF50mmf1L.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-BSL7 (OHARA)` | S-BSL7 | 1.60311 | 1.51624 | -0.0869 |

### [CANON FD 35mm f/2 S.S.C. (I)](../src/lens-data/canon/CanonFD35mmf2.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 11 | `SF (762265, S-TIH6 family)` | S-TIH6 | 1.76182 | 1.80518 | +0.0434 |

### [CANON RF 135mm f/1.8 L IS USM](../src/lens-data/canon/CanonRF135f18.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `S-TIH6 (OHARA)` | S-TIH6 | 1.77047 | 1.80518 | +0.0347 |
| 9 | `S-TIH6 (OHARA)` | S-TIH6 | 1.77047 | 1.80518 | +0.0347 |
| 19 | `S-LAH58 (OHARA)` | S-LAH58 | 1.91082 | 1.88300 | -0.0278 |

### [CANON RF 15-35mm f/2.8 L IS USM](../src/lens-data/canon/CanonRF1535f28.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3A | `S-LAH65V (OHARA)` | S-LAH65V | 1.85400 | 1.80400 | -0.0500 |
| 27A | `S-LAH65V (OHARA)` | S-LAH65V | 1.85400 | 1.80400 | -0.0500 |

### [CANON RF 24-105mm f/4 L IS USM](../src/lens-data/canon/CanonRF24105mmf4L.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `S-NPH2 (OHARA)` | S-NPH2 | 1.95375 | 1.92286 | -0.0309 |
| 12 | `S-LAL18 (OHARA)` | S-LAL18 | 1.80400 | 1.72916 | -0.0748 |
| 14 | `S-LAH55V (OHARA)` | S-LAH55V | 1.91082 | 1.83481 | -0.0760 |
| 16 | `S-NPH2 (OHARA)` | S-NPH2 | 1.95375 | 1.92286 | -0.0309 |
| 22 | `S-TIH53 (OHARA)` | S-TIH53 | 1.78472 | 1.84666 | +0.0619 |
| 31 | `S-LAL18 (OHARA)` | S-LAL18 | 1.80400 | 1.72916 | -0.0748 |

### [CANON RF 24-50mm F4.5-6.3 IS STM](../src/lens-data/canon/CanonRF2450mmf463.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-BSL7 (OHARA 639/554)` | S-BSL7 | 1.63854 | 1.51624 | -0.1223 |
| 5 | `S-TIH6 (OHARA 699/301)` | S-TIH6 | 1.69895 | 1.80518 | +0.1062 |
| 7 | `S-LAH55V (OHARA 904/313)` | S-LAH55V | 1.90366 | 1.83481 | -0.0689 |
| 11 | `S-LAH53 (OHARA 773/496)` | S-LAH53 | 1.77250 | 1.80610 | +0.0336 |

### [CANON RF 24-70mm f/2.8L IS USM](../src/lens-data/canon/CanonRF2470f28.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 17 | `S-LAH59 (OHARA)` | S-LAH59 | 1.76385 | 1.81600 | +0.0521 |
| 20 | `S-NPH2 (OHARA)` | S-NPH2 | 2.00069 | 1.92286 | -0.0778 |
| 30A | `S-LAH65V (OHARA) — PGM` | S-LAH65V | 1.85400 | 1.80400 | -0.0500 |

### [CANON RF 28-70mm F2 L USM](../src/lens-data/canon/CanonRF2870mmf2L.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 4 | `S-LAH55V (OHARA)` | S-LAH55V | 1.77250 | 1.83481 | +0.0623 |
| 29A | `S-LAH66 (OHARA)` | S-LAH66 | 1.85400 | 1.77250 | -0.0815 |
| 32 | `S-NPH2 (OHARA)` | S-NPH2 | 2.00100 | 1.92286 | -0.0781 |

### [CANON RF 28-70mm F2.8 IS STM](../src/lens-data/canon/CanonRF2870mmf28.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 5 | `603606 — S-BSL7 family (OHARA)` | S-BSL7 | 1.60311 | 1.51624 | -0.0869 |
| 8 | `851408 — S-LAH65V (OHARA)` | S-LAH65V | 1.85150 | 1.80400 | -0.0475 |
| 26 | `744448 — S-LAL14 family (OHARA)` | S-LAL14 | 1.74400 | 1.69680 | -0.0472 |

### [CANON RF 50mm f/1.2 L USM](../src/lens-data/canon/CanonRF50mmf12L.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 9 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |
| 15 | `S-LAL14 (OHARA)` | S-LAL14 | 1.76385 | 1.69680 | -0.0671 |

### [CANON RF 70-200mm f/2.8 L IS USM](../src/lens-data/canon/CanonRF70200f28.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 9 | `S-LAH65V (OHARA)` | S-LAH65V | 1.76385 | 1.80400 | +0.0401 |
| 16 | `S-TIH6 (OHARA)` | S-TIH6 | 1.72825 | 1.80518 | +0.0769 |
| 18 | `S-NPH2 (OHARA)` | S-NPH2 | 2.05090 | 1.92286 | -0.1280 |
| 22 | `S-NPH2 (OHARA)` | S-NPH2 | 2.05090 | 1.92286 | -0.1280 |
| 24 | `S-LAH58 (OHARA)` | S-LAH58 | 1.90043 | 1.88300 | -0.0174 |

### [CANON RF 85mm f/1.2L USM](../src/lens-data/canon/CanonRF85mmf12L.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 16 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |
| 18 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |

### [CANON RF 85mm f/2 Macro IS STM](../src/lens-data/canon/CanonRF85mmf2Macro.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 11 | `S-LAH58 (OHARA)` | S-LAH58 | 1.90043 | 1.88300 | -0.0174 |
| 15 | `TAFD30 (HOYA)` | TAFD30 | 1.80400 | 1.88300 | +0.0790 |

### [CANON RF 24-240mm F4-6.3 IS USM](../src/lens-data/canon/CanonRF24240mmf463.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-LAH79 type (903/313)` | S-LAH79 | 1.90366 | 2.00330 | +0.0996 |
| 6 | `S-LAH66 type (852/408)` | S-LAH66 | 1.85150 | 1.77250 | -0.0790 |
| 8 | `S-LAH66 type (852/408)` | S-LAH66 | 1.85150 | 1.77250 | -0.0790 |
| 15 | `S-TIH6 type (762/265)` | S-TIH6 | 1.76182 | 1.80518 | +0.0434 |
| 18 | `S-NPH2 type (001/291)` | S-NPH2 | 2.00100 | 1.92286 | -0.0781 |
| 23 | `S-NPH2 type (001/291)` | S-NPH2 | 2.00100 | 1.92286 | -0.0781 |
| 25A | `S-BAL42 type (531/559)` | S-BAL42 | 1.53110 | 1.58313 | +0.0520 |

### [LEICA ELMARIT-R 28mm f/2.8](../src/lens-data/leica/LeicaElmarit28mmf28.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `SF6 (SCHOTT)` | SF6 | 1.81265 | 1.80518 | -0.0075 |
| 11 | `SF6 (SCHOTT)` | SF6 | 1.81265 | 1.80518 | -0.0075 |

### [FUJIFILM FUJINON XF 16-55mm f/2.8 R LM WR](../src/lens-data/fujifilm/FujifilmXF1655mmf28R.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 9 | `OHARA S-LAH58` | S-LAH58 | 1.90366 | 1.88300 | -0.0207 |

### [FUJIFILM FUJINON XF 200mm F2 R LM OIS WR](../src/lens-data/fujifilm/FujifilmXF200mmf2R.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 9 | `S-LAH58 family (OHARA, 911 353)` | S-LAH58 | 1.91082 | 1.88300 | -0.0278 |
| 13 | `S-NBH5 / S-LAH53 family (OHARA, 800 298)` | S-NBH5 | 1.80000 | 1.65412 | -0.1459 |
| 33 | `S-NBH5 / S-LAH53 family (OHARA, 800 298)` | S-NBH5 | 1.80000 | 1.65412 | -0.1459 |

### [FUJIFILM FUJINON XF 80mm f/2.8 R LM OIS WR Macro](../src/lens-data/fujifilm/FujifilmXF80f28.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 21 | `S-LAM66 (OHARA lanthanum crown)` | S-LAM66 | 1.69700 | 1.80100 | +0.1040 |
| 23 | `S-FPM2 (OHARA fluorophosphate)` | S-FPM2 | 1.53775 | 1.59522 | +0.0575 |
| 25 | `S-LAH79 (OHARA ultra-high-index lanthanum)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |

### [FUJIFILM FUJINON XF 56mm F1.2 R](../src/lens-data/fujifilm/FujifilmXF56mmf12.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 7 | `S-LAH66 (OHARA)` | S-LAH66 | 1.88300 | 1.77250 | -0.1105 |
| 15 | `S-LAH66 (OHARA)` | S-LAH66 | 1.88300 | 1.77250 | -0.1105 |
| 17 | `S-LAH66 (OHARA)` | S-LAH66 | 1.88300 | 1.77250 | -0.1105 |

### [LEICA APO-SUMMICRON 43mm f/2 ASPH.](../src/lens-data/leica/LeicaAPO43mmf2.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `S-TIH6 (OHARA)` | S-TIH6 | 1.76182 | 1.80518 | +0.0434 |
| 13 | `S-NPH53 / TAFD30 (OHARA)` | TAFD30 | 1.90366 | 1.88300 | -0.0207 |

### [LEICA APO-SUMMICRON-M 35 f/2 ASPH.](../src/lens-data/leica/LeicaAPO35mmf2.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 5 | `S-LAH79 (OHARA)` | S-LAH79 | 1.88300 | 2.00330 | +0.1203 |

### [LEICA ELCAN 50mm f/2](../src/lens-data/leica/LeicaElcan50mmf2.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 5 | `≈SF4 (dense flint)` | SF4 | 1.74710 | 1.75520 | +0.0081 |

### [LEICA SUMMILUX 28 mm f/1.7 ASPH.](../src/lens-data/leica/Leica28mmf17.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-BAL42 (OHARA)` | S-BAL42 | 1.56732 | 1.58313 | +0.0158 |
| 9 | `S-LAH79 (OHARA)` | S-LAH79 | 1.91082 | 2.00330 | +0.0925 |
| 12A | `S-LAH63 (OHARA)` | S-LAH63 | 1.87722 | 1.80440 | -0.0728 |
| 18A | `S-LAM66 (OHARA)` | S-LAM66 | 1.77271 | 1.80100 | +0.0283 |

### [NIKON NIKKOR-N Auto 24mm f/2.8](../src/lens-data/nikon/NikonNikkorAuto24f28.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 10 | `SF56A (Schott) / S-TIH6 (Ohara)` | S-TIH6 | 1.78470 | 1.80518 | +0.0205 |
| 12 | `SF56A (Schott) / S-TIH6 (Ohara)` | S-TIH6 | 1.78470 | 1.80518 | +0.0205 |

### [NIKON AF NIKKOR 28mm f/1.4D](../src/lens-data/nikon/NikonAF28f14D.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `LaM type (near OHARA S-LAM66, nd=1.77250, νd=49.62)` | S-LAM66 | 1.77279 | 1.80100 | +0.0282 |
| 10 | `LaH type (near OHARA S-LAH55, nd=1.80440, νd=46.50)` | S-LAH55 | 1.80411 | 1.83481 | +0.0307 |
| 15 | `LaM type (same as L2; near OHARA S-LAM66)` | S-LAM66 | 1.77279 | 1.80100 | +0.0282 |
| 17 | `LaH type (same as L5; near OHARA S-LAH55)` | S-LAH55 | 1.80411 | 1.83481 | +0.0307 |

### [NIKON AF NIKKOR 85mm f/1.4D IF](../src/lens-data/nikon/Nikon85f14D.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 15 | `Very Dense Lanthanum Flint (TAFD30)` | TAFD30 | 1.86994 | 1.88300 | +0.0131 |
| 19 | `Lanthanum Crown (S-LAM66)` | S-LAM66 | 1.74810 | 1.80100 | +0.0529 |

### [NIKON AF-S NIKKOR 85mm f/1.4G](../src/lens-data/nikon/NikonNikkor85f14G.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 16 | `S-LAH79 (OHARA)` | S-LAH79 | 1.90366 | 2.00330 | +0.0996 |
| 17 | `S-TIH53 (OHARA)` | S-TIH53 | 1.64769 | 1.84666 | +0.1990 |

### [NIKON AF-S NIKKOR 58mm f/1.4G](../src/lens-data/nikon/Nikon58f14GDesignCandidate.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `S-LAL14 / N-LAK12 (lanthanum crown)` | S-LAL14 | 1.75500 | 1.69680 | -0.0582 |

### [NIKON AF-S NIKKOR 120-300mm f/2.8E FL ED SR VR](../src/lens-data/nikon/NikonNikkorAFS120300mmf28.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 29 | `OHARA S-NPH2` | S-NPH2 | 2.00100 | 1.92286 | -0.0781 |
| 40 | `OHARA S-NPH2` | S-NPH2 | 2.00100 | 1.92286 | -0.0781 |

### [NIKON AF-S NIKKOR 14-24mm f/2.8G ED](../src/lens-data/nikon/NikonNikkorAFS1424mmf28.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 5 | `S-LAH53 (OHARA)` | S-LAH53 | 1.74100 | 1.80610 | +0.0651 |
| 10 | `S-LAH66 (OHARA)` | S-LAH66 | 1.80440 | 1.77250 | -0.0319 |
| 20 | `S-BAL42 (OHARA)` | S-BAL42 | 1.57099 | 1.58313 | +0.0121 |
| 22 | `S-LAH59 (OHARA)` | S-LAH59 | 1.77279 | 1.81600 | +0.0432 |
| 25 | `S-LAH58 (OHARA)` | S-LAH58 | 1.80610 | 1.88300 | +0.0769 |

### [NIKON AF-S NIKKOR 200-500mm f/5.6E ED VR](../src/lens-data/nikon/NikonNikkorAFS200500mmf56.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 17 | `S-LAH79 (OHARA)` | S-LAH79 | 1.90366 | 2.00330 | +0.0996 |
| 31 | `S-LAH58 (OHARA)` | S-LAH58 | 1.83481 | 1.88300 | +0.0482 |

### [NIKON AF-S NIKKOR 24-70mm f/2.8E ED VR](../src/lens-data/nikon/NikonNikkorAFS2470mmf28E.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `S-NPH2 (OHARA) — HRI` | S-NPH2 | 2.00100 | 1.92286 | -0.0781 |
| 13 | `S-LAH79 (OHARA)` | S-LAH79 | 1.90366 | 2.00330 | +0.0996 |
| 17 | `S-LAH66 (OHARA)` | S-LAH66 | 1.81600 | 1.77250 | -0.0435 |
| 21 | `S-PHM52 (OHARA)` | S-PHM52 | 1.60300 | 1.61800 | +0.0150 |
| 31 | `S-LAH63 (OHARA)` | S-LAH63 | 1.83481 | 1.80440 | -0.0304 |

### [NIKON NIKKOR-S AUTO 50mm f/1.4](../src/lens-data/nikon/NikonNikkorSAuto50mmf14.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 4 | `SF4 / PBM5 (dense flint)` | SF4 | 1.64831 | 1.75520 | +0.1069 |
| 6 | `SF6 / PBM6 (dense flint)` | SF6 | 1.69895 | 1.80518 | +0.1062 |

### [NIKON NIKKOR Z 100-400mm f/4.5-5.6 VR S](../src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `S-LAH55V (OHARA)` | S-LAH55V | 1.80440 | 1.83481 | +0.0304 |
| 10 | `S-LAL18 (OHARA)` | S-LAL18 | 1.72047 | 1.72916 | +0.0087 |
| 14 | `S-LAH65V (OHARA)` | S-LAH65V | 1.85451 | 1.80400 | -0.0505 |
| 24 | `S-LAH55 (OHARA) †` | S-LAH55 | 1.80610 | 1.83481 | +0.0287 |
| 29 | `S-NPH2 (OHARA)` | S-NPH2 | 2.00069 | 1.92286 | -0.0778 |
| 34 | `S-PHM52 (OHARA)` | S-PHM52 | 1.60342 | 1.61800 | +0.0146 |
| 36 | `S-LAH58 (OHARA) †` | S-LAH58 | 1.85026 | 1.88300 | +0.0327 |
| 45 | `S-LAH63 (OHARA) †` | S-LAH63 | 1.73800 | 1.80440 | +0.0664 |

### [NIKON NIKKOR Z 14-30mm f/4 S](../src/lens-data/nikon/NikonNikkorZ1430mmf4S.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 7 | `S-TIH53 (OHARA)` | S-TIH53 | 1.90265 | 1.84666 | -0.0560 |
| 9 | `S-PHM52 (OHARA)` | S-PHM52 | 1.59349 | 1.61800 | +0.0245 |
| 11 | `S-LAH66 (OHARA)` | S-LAH66 | 1.88300 | 1.77250 | -0.1105 |
| 12 | `S-BAL42 (OHARA)` | S-BAL42 | 1.56883 | 1.58313 | +0.0143 |
| 15 | `S-LAH63 (OHARA)` | S-LAH63 | 1.81600 | 1.80440 | -0.0116 |

### [NIKON NIKKOR Z 24-120mm f/4 S](../src/lens-data/nikon/NikonNikkorZ24120mmf4S.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-LAH79 (OHARA)` | S-LAH79 | 1.90366 | 2.00330 | +0.0996 |
| 6 | `S-LAH66 (OHARA)` | S-LAH66 | 1.83400 | 1.77250 | -0.0615 |
| 19 | `S-LAH58 (OHARA)` | S-LAH58 | 1.90043 | 1.88300 | -0.0174 |
| 24 | `S-LAM66 (OHARA)` | S-LAM66 | 1.77250 | 1.80100 | +0.0285 |

### [NIKON NIKKOR Z 24-200mm f/4-6.3 VR](../src/lens-data/nikon/NikonNikkorZ24200mmf463VR.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 7 | `S-LAH79 (195375/3233)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |
| 16 | `TAFD30 equiv. (190265/3572)` | TAFD30 | 1.90265 | 1.88300 | -0.0196 |
| 21 | `S-LAH79 (195375/3233)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |
| 26 | `S-LAH79 (195375/3233)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |

### [NIKON NIKKOR Z 24-70mm f/2.8 S](../src/lens-data/nikon/NikonZ2470f28.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 10 | `S-TIH6 (OHARA)` | S-TIH6 | 1.72825 | 1.80518 | +0.0769 |
| 17 | `S-PHM52 (OHARA)` | S-PHM52 | 1.59319 | 1.61800 | +0.0248 |
| 24 | `S-PHM53 (OHARA)` | S-PHM53 | 1.59349 | 1.60300 | +0.0095 |
| 28 | `S-NPH2 (OHARA)` | S-NPH2 | 1.94595 | 1.92286 | -0.0231 |
| 32 | `S-BAL42 (OHARA)` | S-BAL42 | 1.58913 | 1.58313 | -0.0060 |

### [NIKON NIKKOR Z 28mm f/2.8](../src/lens-data/nikon/NikonZ28f28.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `S-LAH55V (OHARA)` | S-LAH55V | 1.80400 | 1.83481 | +0.0308 |
| 11 | `S-LAH55V (OHARA)` | S-LAH55V | 1.80400 | 1.83481 | +0.0308 |
| 16 | `S-LAH55V (OHARA)` | S-LAH55V | 1.80400 | 1.83481 | +0.0308 |

### [NIKON NIKKOR Z 35mm f/1.8 S](../src/lens-data/nikon/NikonZ35f18S.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |

### [NIKON NIKKOR Z 50mm f/1.8 S](../src/lens-data/nikon/NikonNikkorZ50f18S.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-TIH6 class (dense flint)` | S-TIH6 | 1.67270 | 1.80518 | +0.1325 |
| 2 | `S-NPH2 / E-FDS2 (ultra-high-index short flint, nd = 1.946)` | S-NPH2 | 1.94595 | 1.92286 | -0.0231 |
| 20 | `S-NPH2 (ultra-high-index short flint, nd = 1.946)` | S-NPH2 | 1.94595 | 1.92286 | -0.0231 |

### [NIKON NIKKOR Z 50mm f/1.2 S](../src/lens-data/nikon/NikonNikkorZ50f12.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 29 | `S-LAH79 (OHARA)` | S-LAH79 | 1.90265 | 2.00330 | +0.1007 |

### [NIKON AF-S VR Micro-NIKKOR 105mm f/2.8G IF-ED](../src/lens-data/nikon/NikonAFS105f28G.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 21 | `S-TIH53 (OHARA), Δνd = 0.21; alt. CDGM H-LAF3B (Δνd = 0.01)` | S-TIH53 | 1.80610 | 1.84666 | +0.0406 |

### [NIKON AF-S NIKKOR 28mm f/1.4E ED](../src/lens-data/nikon/NikonAFS28f14E.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 11 | `S-LAH55V (OHARA)` | S-LAH55V | 1.77250 | 1.83481 | +0.0623 |

### [NIKON AF-S NIKKOR 70-200mm f/2.8E FL ED VR](../src/lens-data/nikon/NikonNikkorAFS70200mmf28E.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95000 | 2.00330 | +0.0533 |
| 28 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95000 | 2.00330 | +0.0533 |

### [NIKON AF-S NIKKOR 80-400mm f/4.5-5.6G ED VR](../src/lens-data/nikon/NikonNikkorAFS80400mmf4556G.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 16 | `S-LAH65V (OHARA)` | S-LAH65V | 1.90366 | 1.80400 | -0.0997 |

### [NIKON NIKKOR Z 35mm f/1.2 S](../src/lens-data/nikon/NikonNikkorZ35mmf12S.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 9 | `S-LAH79 (954323, OHARA S-LAH79)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |

### [NIKON PC-E NIKKOR 24mm f/3.5D ED](../src/lens-data/nikon/NikonPCENikkor24mmf35DED.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-LAH58 (OHARA)` | S-LAH58 | 1.80400 | 1.88300 | +0.0790 |
| 16 | `S-LAH58 (OHARA)` | S-LAH58 | 1.80400 | 1.88300 | +0.0790 |

### [NIKON PC NIKKOR 19mm f/4E ED](../src/lens-data/nikon/NikonNikkorPCE19mmf4E.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 10 | `S-LAH79 (OHARA)` | S-LAH79 | 1.90366 | 2.00330 | +0.0996 |
| 20 | `S-LAH55V (OHARA)` | S-LAH55V | 1.77250 | 1.83481 | +0.0623 |

### [NIKON NIKKOR Z 14-24mm f/2.8 S](../src/lens-data/nikon/NikonZ1424f28S.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 9 | `S-NPH2 (OHARA) — ultra-high-index dense flint` | S-NPH2 | 2.00060 | 1.92286 | -0.0777 |
| 16 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |

### [NIKON NIKKOR Z 24-70mm f/4 S](../src/lens-data/nikon/NikonNikkorZ2470mmf4S.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 2 | `S-LAL14 (OHARA)` | S-LAL14 | 1.75500 | 1.69680 | -0.0582 |
| 6 | `S-LAL14 (OHARA)` | S-LAL14 | 1.75500 | 1.69680 | -0.0582 |

### [NIKON NIKKOR Z 26mm f/2.8](../src/lens-data/nikon/NikonZ26f28.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 7 | `S-LAL18 (OHARA)` | S-LAL18 | 1.81600 | 1.72916 | -0.0868 |

### [NIKON NIKKOR Z MC 105mm f/2.8 VR S](../src/lens-data/nikon/NikonZ105f28.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 19 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |

### [OLYMPUS ZUIKO AUTO-MACRO 90mm f/2](../src/lens-data/olympus/OlympusZuikoAutoMacro90mmf2.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 17 | `BSC7 (HOYA)` | S-BSL7 | 1.65160 | 1.51624 | -0.1354 |

### [OLYMPUS ZUIKO AUTO-S 50mm f/1.2](../src/lens-data/olympus/OlympusZuikoAutoS50mmf12.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-LAH58 (OHARA) / TAFD5 (HOYA)` | S-LAH58 | 1.83481 | 1.88300 | +0.0482 |
| 12 | `S-LAH52 (OHARA) / TAFD30 (HOYA)` | TAFD30 | 1.79952 | 1.88300 | +0.0835 |

### [RICOH GR IV 18.3mm f/2.8](../src/lens-data/ricoh/RicohGR428f28.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 10A | `S-LAH53 (OHARA)` | S-LAH53 | 1.76802 | 1.80610 | +0.0381 |

### [VOIGTLÄNDER ULTRON Vintage Line 28mm F2 Aspherical](../src/lens-data/voigtlander/VoigtlanderUltron28f2.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 4 | `S-LAH58 (OHARA) / N-LASF46A (Schott)` | S-LAH58 | 1.91082 | 1.88300 | -0.0278 |
| 6 | `S-LAH58 (OHARA)` | S-LAH58 | 1.91082 | 1.88300 | -0.0278 |

