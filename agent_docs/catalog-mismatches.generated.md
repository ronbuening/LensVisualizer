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

- **127** lenses scanned
- **1445** glass surfaces examined
- **1442** surfaces with non-empty `glass` strings
- **770** of those resolved to a catalog entry
- **184** mismatches found (23.9% of resolved surfaces)
- **67** distinct lens files affected

## Most-frequent mismatched catalog targets

Glass labels that get rejected most often. A high count here often points to a single glass
annotation pattern (e.g. an obsolete name, a `probable` guess) that's used across many lenses.

| Catalog entry | Rejected surfaces | Notes |
|---|---|---|
| S-NPH2 | 17 | |
| S-TIH14 | 15 | |
| S-LAH79 | 15 | |
| S-LAH58 | 10 | |
| S-TIH6 | 9 | |
| S-TIM25 | 7 | |
| S-LAM54 | 6 | |
| S-LAH65V | 6 | |
| S-TIM22 | 6 | |
| S-BAL42 | 5 | |
| S-NPH53 | 5 | |
| S-LAL14 | 5 | |
| S-TIM35 | 5 | |
| S-FPM3 | 5 | |
| S-BSL7 | 4 | |
| S-TIH53 | 4 | |
| S-LAH66 | 4 | |
| S-LAH51 | 4 | |
| S-TIM2 | 4 | |
| S-PHM52 | 4 | |
| S-BSM14 | 3 | |
| S-TIM28 | 3 | |
| S-NPH1 | 3 | |
| SF6 | 3 | |
| S-LAL18 | 2 | |
| S-BAL35 | 2 | |
| S-LAH65 | 2 | |
| SF2 | 2 | |
| S-NBH5 | 2 | |
| S-LAM66 | 2 | |
| S-LAH63 | 2 | |
| TAFD33 | 2 | |
| SF4 | 2 | |
| N-SK16 | 2 | |
| TAFD30 | 2 | |
| TAFD37 | 2 | |
| S-LAH52 | 1 | |
| S-LAH55V | 1 | |
| S-LAH59 | 1 | |
| S-FPM2 | 1 | |
| S-NSL3 | 1 | |
| S-LAH53 | 1 | |
| S-PHM53 | 1 | |
| S-LAH55 | 1 | |

## Mismatches by lens

### [CANON EF 50mm f/1.0L USM](../src/lens-data/canon/CanonEF50mmf1L.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-BSL7 (OHARA)` | S-BSL7 | 1.60311 | 1.51624 | -0.0869 |
| 3 | `S-BSM14 (OHARA)` | S-BSM14 | 1.69680 | 1.60311 | -0.0937 |

### [CANON FD 50mm f/1.2 L](../src/lens-data/canon/CanonFD50mmf12L.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `OHARA S-LAH58 (804466)` | S-LAH58 | 1.80400 | 1.88300 | +0.0790 |
| 3A | `OHARA S-LAH52 (744447)` | S-LAH52 | 1.74400 | 1.79952 | +0.0555 |
| 11 | `OHARA S-LAL18 (773496)` | S-LAL18 | 1.77250 | 1.72916 | -0.0433 |
| 13 | `OHARA S-BAL35* (623582; provisional, Δν_d=−1.12)` | S-BAL35 | 1.62299 | 1.58913 | -0.0339 |

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
| 7 | `S-NPH1 (OHARA)` | S-NPH1 | 1.85478 | 1.80809 | -0.0467 |
| 27A | `S-LAH65V (OHARA)` | S-LAH65V | 1.85400 | 1.80400 | -0.0500 |

### [CANON RF 24-105mm f/4 L IS USM](../src/lens-data/canon/CanonRF24105mmf4L.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `S-NPH2 (OHARA)` | S-NPH2 | 1.95375 | 1.92286 | -0.0309 |
| 14 | `S-LAH55V (OHARA)` | S-LAH55V | 1.91082 | 1.83481 | -0.0760 |
| 16 | `S-NPH2 (OHARA)` | S-NPH2 | 1.95375 | 1.92286 | -0.0309 |
| 22 | `S-TIH53 (OHARA)` | S-TIH53 | 1.78472 | 1.84666 | +0.0619 |

### [CANON RF 24-50mm F4.5-6.3 IS STM](../src/lens-data/canon/CanonRF2450mmf463.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-BSL7 (OHARA 639/554)` | S-BSL7 | 1.63854 | 1.51624 | -0.1223 |

### [CANON RF 24-70mm f/2.8L IS USM](../src/lens-data/canon/CanonRF2470f28.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 9 | `S-NPH53 (OHARA)` | S-NPH53 | 1.85478 | 1.84666 | -0.0081 |
| 13 | `S-TIM25 (OHARA)` | S-TIM25 | 1.59270 | 1.67270 | +0.0800 |
| 17 | `S-LAH59 (OHARA)` | S-LAH59 | 1.76385 | 1.81600 | +0.0521 |
| 20 | `S-NPH2 (OHARA)` | S-NPH2 | 2.00069 | 1.92286 | -0.0778 |
| 30A | `S-LAH65V (OHARA) — PGM` | S-LAH65V | 1.85400 | 1.80400 | -0.0500 |
| 32 | `S-LAH51 (OHARA)` | S-LAH51 | 1.80400 | 1.78590 | -0.0181 |

### [CANON RF 28-70mm F2 L USM](../src/lens-data/canon/CanonRF2870mmf2L.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6A | `S-LAM54 (OHARA)` | S-LAM54 | 1.76902 | 1.75700 | -0.0120 |
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
| 2 | `S-TIM25 (OHARA)` | S-TIM25 | 1.68893 | 1.67270 | -0.0162 |
| 8 | `S-TIM22 (OHARA)` | S-TIM22 | 1.66565 | 1.64769 | -0.0180 |
| 9 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |
| 15 | `S-LAL14 (OHARA)` | S-LAL14 | 1.76385 | 1.69680 | -0.0671 |
| 16 | `S-TIM22 (OHARA)` | S-TIM22 | 1.66565 | 1.64769 | -0.0180 |
| 23 | `S-TIM35 (OHARA)` | S-TIM35 | 1.67300 | 1.69895 | +0.0259 |

### [CANON RF 70-200mm f/2.8 L IS USM](../src/lens-data/canon/CanonRF70200f28.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 9 | `S-LAH65V (OHARA)` | S-LAH65V | 1.76385 | 1.80400 | +0.0401 |
| 10 | `S-TIH14 (OHARA)` | S-TIH14 | 1.85478 | 1.76182 | -0.0930 |
| 15 | `S-TIM2 (OHARA)` | S-TIM2 | 1.59270 | 1.62004 | +0.0273 |
| 16 | `S-TIH6 (OHARA)` | S-TIH6 | 1.72825 | 1.80518 | +0.0769 |
| 18 | `S-NPH2 (OHARA)` | S-NPH2 | 2.05090 | 1.92286 | -0.1280 |
| 22 | `S-NPH2 (OHARA)` | S-NPH2 | 2.05090 | 1.92286 | -0.1280 |
| 24 | `S-LAH58 (OHARA)` | S-LAH58 | 1.90043 | 1.88300 | -0.0174 |
| 28 | `S-TIH14 (OHARA)` | S-TIH14 | 1.85478 | 1.76182 | -0.0930 |

### [CANON RF 85mm f/1.2L USM](../src/lens-data/canon/CanonRF85mmf12L.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 16 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |
| 18 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |
| 19 | `S-TIM22 (OHARA)` | S-TIM22 | 1.62004 | 1.64769 | +0.0276 |

### [CANON RF 85mm f/2 Macro IS STM](../src/lens-data/canon/CanonRF85mmf2Macro.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 11 | `S-LAH58 (OHARA)` | S-LAH58 | 1.90043 | 1.88300 | -0.0174 |
| 21 | `S-LAH65 (OHARA)` | S-LAH65 | 1.83481 | 1.80400 | -0.0308 |

### [CANON RF 100mm f/2.8 L MACRO IS USM](../src/lens-data/canon/CanonRF100f28.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 11 | `S-LAM54 (OHARA)` | S-LAM54 | 1.77250 | 1.75700 | -0.0155 |
| 18 | `S-LAM54 (OHARA)` | S-LAM54 | 1.77250 | 1.75700 | -0.0155 |
| 28 | `S-TIM28 (OHARA)` | S-TIM28 | 1.67270 | 1.68893 | +0.0162 |

### [CANON RF 24-240mm F4-6.3 IS USM](../src/lens-data/canon/CanonRF24240mmf463.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `S-LAH66 type (852/408)` | S-LAH66 | 1.85150 | 1.77250 | -0.0790 |
| 8 | `S-LAH66 type (852/408)` | S-LAH66 | 1.85150 | 1.77250 | -0.0790 |
| 15 | `S-TIH6 type (762/265)` | S-TIH6 | 1.76182 | 1.80518 | +0.0434 |
| 18 | `S-NPH2 type (001/291)` | S-NPH2 | 2.00100 | 1.92286 | -0.0781 |
| 20 | `S-NPH1 type (001/255)` | S-NPH1 | 2.00069 | 1.80809 | -0.1926 |
| 23 | `S-NPH2 type (001/291)` | S-NPH2 | 2.00100 | 1.92286 | -0.0781 |
| 25A | `S-BAL42 type (531/559)` | S-BAL42 | 1.53110 | 1.58313 | +0.0520 |
| 33 | `S-BSM14 type (639/554)` | S-BSM14 | 1.63854 | 1.60311 | -0.0354 |
| 36 | `S-TIH14 type (847/238)` | S-TIH14 | 1.84666 | 1.76182 | -0.0848 |

### [CARL ZEISS JENA PANCOLAR 50mm f/2](../src/lens-data/carl-zeiss-jena/CarlZeissJenaPancolar50mmf2.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 4 | `SF2 equivalent (Jena in-house, 672/323)` | SF2 | 1.67246 | 1.64769 | -0.0248 |

### [LEICA ELMARIT-R 28mm f/2.8](../src/lens-data/leica/LeicaElmarit28mmf28.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `SF6 (SCHOTT)` | SF6 | 1.81265 | 1.80518 | -0.0075 |
| 11 | `SF6 (SCHOTT)` | SF6 | 1.81265 | 1.80518 | -0.0075 |

### [FUJIFILM FUJINON XF 16–80mm f/4 R OIS WR](../src/lens-data/fujifilm/FujifilmXF1680mmf4.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 10 | `High-index heavy flint (923209; OHARA S-NPH53)` | S-NPH53 | 1.92287 | 1.84666 | -0.0762 |

### [FUJIFILM FUJINON XF 200mm F2 R LM OIS WR](../src/lens-data/fujifilm/FujifilmXF200mmf2R.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 9 | `S-LAH58 family (OHARA, 911 353)` | S-LAH58 | 1.91082 | 1.88300 | -0.0278 |
| 13 | `S-NBH5 / S-LAH53 family (OHARA, 800 298)` | S-NBH5 | 1.80000 | 1.65412 | -0.1459 |
| 33 | `S-NBH5 / S-LAH53 family (OHARA, 800 298)` | S-NBH5 | 1.80000 | 1.65412 | -0.1459 |

### [FUJIFILM FUJINON XF 50mm f/1.0 R WR](../src/lens-data/fujifilm/FujifilmXF50f1.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 7 | `S-NPH53 (Ohara)` | S-NPH53 | 1.95906 | 1.84666 | -0.1124 |

### [FUJIFILM FUJINON XF 80mm f/2.8 R LM OIS WR Macro](../src/lens-data/fujifilm/FujifilmXF80f28.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 5 | `S-TIM35 (OHARA dense flint)` | S-TIM35 | 1.62588 | 1.69895 | +0.0731 |
| 21 | `S-LAM66 (OHARA lanthanum crown)` | S-LAM66 | 1.69700 | 1.80100 | +0.1040 |
| 23 | `S-FPM2 (OHARA fluorophosphate)` | S-FPM2 | 1.53775 | 1.59522 | +0.0575 |
| 25 | `S-LAH79 (OHARA ultra-high-index lanthanum)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |
| 28 | `S-NPH53 (OHARA ultra-high-index dense flint, lowest νd in design)` | S-NPH53 | 1.95906 | 1.84666 | -0.1124 |

### [FUJIFILM FUJINON XF 90mm f/2 R LM WR](../src/lens-data/fujifilm/FujifilmXF90mmf2.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 15 | `S-TIM22 (OHARA)` | S-TIM22 | 1.67270 | 1.64769 | -0.0250 |

### [FUJIFILM FUJINON XF 23mm F1.4 R](../src/lens-data/fujifilm/FujifilmXF23mmf14.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `S-TIM28 (OHARA)` | S-TIM28 | 1.61293 | 1.68893 | +0.0760 |
| 16 | `S-TIM25 (OHARA)` | S-TIM25 | 1.68893 | 1.67270 | -0.0162 |

### [LEICA APO-SUMMICRON 43mm f/2 ASPH.](../src/lens-data/leica/LeicaAPO43mmf2.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `S-TIH6 (OHARA)` | S-TIH6 | 1.76182 | 1.80518 | +0.0434 |
| 11 | `S-LAH99 / TAFD33 (OHARA)` | TAFD33 | 1.95375 | 1.88100 | -0.0727 |
| 16A | `S-FPM3 / L-FPM3 (OHARA)` | S-FPM3 | 1.55332 | 1.53775 | -0.0156 |

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

### [NIKON NIKKOR-N Auto 24mm f/2.8](../src/lens-data/nikon/NikonNikkorAuto24f28.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 10 | `SF56A (Schott) / S-TIH6 (Ohara)` | S-TIH6 | 1.78470 | 1.80518 | +0.0205 |
| 12 | `SF56A (Schott) / S-TIH6 (Ohara)` | S-TIH6 | 1.78470 | 1.80518 | +0.0205 |

### [NIKON AF NIKKOR 85mm f/1.4D IF](../src/lens-data/nikon/Nikon85f14D.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 15 | `Very Dense Lanthanum Flint (TAFD30)` | TAFD30 | 1.86994 | 1.88300 | +0.0131 |
| 19 | `Lanthanum Crown (S-LAM66)` | S-LAM66 | 1.74810 | 1.80100 | +0.0529 |

### [NIKON AF-S NIKKOR 85mm f/1.4G](../src/lens-data/nikon/NikonNikkor85f14G.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
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
| 6 | `S-TIM25 (OHARA)` | S-TIM25 | 1.55389 | 1.67270 | +0.1188 |
| 20 | `S-BAL42 (OHARA)` | S-BAL42 | 1.57099 | 1.58313 | +0.0121 |

### [NIKON AF-S NIKKOR 16-35mm f/4G ED VR](../src/lens-data/nikon/NikonNikkorAFS1635mmf4.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 16 | `S-LAM54 (OHARA)` | S-LAM54 | 1.70154 | 1.75700 | +0.0555 |

### [NIKON AF-S NIKKOR 200-500mm f/5.6E ED VR](../src/lens-data/nikon/NikonNikkorAFS200500mmf56.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 14 | `S-BAL35 (OHARA)` | S-BAL35 | 1.60738 | 1.58913 | -0.0183 |
| 29 | `S-TIM2 (OHARA)` | S-TIM2 | 1.58144 | 1.62004 | +0.0386 |

### [NIKON AF-S NIKKOR 24-70mm f/2.8E ED VR](../src/lens-data/nikon/NikonNikkorAFS2470mmf28E.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `S-NPH2 (OHARA) — HRI` | S-NPH2 | 2.00100 | 1.92286 | -0.0781 |
| 36 | `S-LAM54 (OHARA)` | S-LAM54 | 1.69350 | 1.75700 | +0.0635 |

### [NIKON NIKKOR-S AUTO 50mm f/1.4](../src/lens-data/nikon/NikonNikkorSAuto50mmf14.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `SF2 / NSL36 (dense flint)` | SF2 | 1.66446 | 1.64769 | -0.0168 |
| 4 | `SF4 / PBM5 (dense flint)` | SF4 | 1.64831 | 1.75520 | +0.1069 |
| 6 | `SF6 / PBM6 (dense flint)` | SF6 | 1.69895 | 1.80518 | +0.1062 |
| 9 | `SK16 / BSL7 (barium crown)` | N-SK16 | 1.67790 | 1.62041 | -0.0575 |

### [NIKON NIKKOR Z 100-400mm f/4.5-5.6 VR S](../src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 10 | `S-LAL18 (OHARA)` | S-LAL18 | 1.72047 | 1.72916 | +0.0087 |
| 14 | `S-LAH65V (OHARA)` | S-LAH65V | 1.85451 | 1.80400 | -0.0505 |
| 27 | `S-LAH51 (OHARA)` | S-LAH51 | 1.80809 | 1.78590 | -0.0222 |
| 29 | `S-NPH2 (OHARA)` | S-NPH2 | 2.00069 | 1.92286 | -0.0778 |
| 31 | `S-BSM14 (OHARA)` | S-BSM14 | 1.55298 | 1.60311 | +0.0501 |
| 34 | `S-PHM52 (OHARA)` | S-PHM52 | 1.60342 | 1.61800 | +0.0146 |
| 36 | `S-LAH58 (OHARA) †` | S-LAH58 | 1.85026 | 1.88300 | +0.0327 |
| 37 | `S-LAM54 (OHARA)` | S-LAM54 | 1.72916 | 1.75700 | +0.0278 |
| 45 | `S-LAH63 (OHARA) †` | S-LAH63 | 1.73800 | 1.80440 | +0.0664 |

### [NIKON NIKKOR Z 14-30mm f/4 S](../src/lens-data/nikon/NikonNikkorZ1430mmf4S.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 7 | `S-TIH53 (OHARA)` | S-TIH53 | 1.90265 | 1.84666 | -0.0560 |
| 9 | `S-PHM52 (OHARA)` | S-PHM52 | 1.59349 | 1.61800 | +0.0245 |
| 12 | `S-BAL42 (OHARA)` | S-BAL42 | 1.56883 | 1.58313 | +0.0143 |
| 22 | `S-LAH51 (OHARA)` | S-LAH51 | 1.79500 | 1.78590 | -0.0091 |

### [NIKON NIKKOR Z 24-120mm f/4 S](../src/lens-data/nikon/NikonNikkorZ24120mmf4S.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `S-LAH66 (OHARA)` | S-LAH66 | 1.83400 | 1.77250 | -0.0615 |
| 8 | `S-TIM35 (OHARA) or K-VC89 (Sumita)` | S-TIM35 | 1.85451 | 1.69895 | -0.1556 |
| 19 | `S-LAH58 (OHARA)` | S-LAH58 | 1.90043 | 1.88300 | -0.0174 |
| 22 | `S-TIM25 (OHARA)` | S-TIM25 | 1.78472 | 1.67270 | -0.1120 |

### [NIKON NIKKOR Z 24-200mm f/4-6.3 VR](../src/lens-data/nikon/NikonNikkorZ24200mmf463VR.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 7 | `S-LAH79 (195375/3233)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |
| 16 | `TAFD30 equiv. (190265/3572)` | TAFD30 | 1.90265 | 1.88300 | -0.0196 |
| 18 | `S-NPH53 (200100/2912)` | S-NPH53 | 2.00100 | 1.84666 | -0.1543 |
| 21 | `S-LAH79 (195375/3233)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |
| 26 | `S-LAH79 (195375/3233)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |
| 29 | `TAFD37 equiv. (184666/2380)` | TAFD37 | 1.84666 | 1.90043 | +0.0538 |
| 30 | `TAFD33 equiv. (185135/4013)` | TAFD33 | 1.85135 | 1.88100 | +0.0297 |
| 34 | `S-TIM22 equiv. (168376/3757)` | S-TIM22 | 1.68376 | 1.64769 | -0.0361 |

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
| 6 | `S-NPH1 (OHARA)` | S-NPH1 | 2.00100 | 1.80809 | -0.1929 |
| 7 | `S-TIH14 (OHARA)` | S-TIH14 | 1.80518 | 1.76182 | -0.0434 |

### [NIKON NIKKOR Z 35mm f/1.8 S](../src/lens-data/nikon/NikonZ35f18S.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |
| 4 | `S-TIM2 (OHARA)` | S-TIM2 | 1.60342 | 1.62004 | +0.0166 |
| 6 | `S-TIH14 (OHARA)` | S-TIH14 | 1.68893 | 1.76182 | +0.0729 |
| 7 | `S-LAH51 (OHARA)` | S-LAH51 | 1.85150 | 1.78590 | -0.0656 |
| 14 | `S-TIM25 (OHARA)` | S-TIM25 | 1.61293 | 1.67270 | +0.0598 |

### [NIKON NIKKOR Z 50mm f/1.8 S](../src/lens-data/nikon/NikonNikkorZ50f18S.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-TIH6 class (dense flint)` | S-TIH6 | 1.67270 | 1.80518 | +0.1325 |
| 2 | `S-NPH2 / E-FDS2 (ultra-high-index short flint, nd = 1.946)` | S-NPH2 | 1.94595 | 1.92286 | -0.0231 |
| 10 | `S-TIH14 class (dense flint)` | S-TIH14 | 1.64769 | 1.76182 | +0.1141 |
| 14 | `S-TIH14 class (dense flint)` | S-TIH14 | 1.64769 | 1.76182 | +0.1141 |
| 20 | `S-NPH2 (ultra-high-index short flint, nd = 1.946)` | S-NPH2 | 1.94595 | 1.92286 | -0.0231 |
| 21 | `S-TIH14 class (dense flint)` | S-TIH14 | 1.64769 | 1.76182 | +0.1141 |
| 23 | `S-TIH14 class (dense flint)` | S-TIH14 | 1.64769 | 1.76182 | +0.1141 |

### [NIKON NIKKOR Z 50mm f/1.2 S](../src/lens-data/nikon/NikonNikkorZ50f12.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 29 | `S-LAH79 (OHARA)` | S-LAH79 | 1.90265 | 2.00330 | +0.1007 |

### [NIKON 28Ti NIKKOR 28mm f/2.8](../src/lens-data/nikon/Nikon28Ti28mmf28.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-NSL3 (OHARA)` | S-NSL3 | 1.53172 | 1.51823 | -0.0135 |

### [NIKON NIKKOR 35mm f/2.8 (35Ti)](../src/lens-data/nikon/Nikon35Ti35mmf28.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `Hoya BACD5 (nd=1.69680 / νd=55.5; Δnd≈0, Δνd=+0.1)` | N-SK16 | 1.69680 | 1.62041 | -0.0764 |

### [NIKON AF-S VR Micro-NIKKOR 105mm f/2.8G IF-ED](../src/lens-data/nikon/NikonAFS105f28G.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 9 | `S-TIM22 (OHARA)` | S-TIM22 | 1.58267 | 1.64769 | +0.0650 |
| 21 | `S-TIH53 (OHARA), Δνd = 0.21; alt. CDGM H-LAF3B (Δνd = 0.01)` | S-TIH53 | 1.80610 | 1.84666 | +0.0406 |

### [NIKON AF-S NIKKOR 28mm f/1.4E ED](../src/lens-data/nikon/NikonAFS28f14E.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 18 | `S-TIH14 (OHARA)` | S-TIH14 | 1.73800 | 1.76182 | +0.0238 |

### [NIKON AF-S NIKKOR 70-200mm f/2.8E FL ED VR](../src/lens-data/nikon/NikonNikkorAFS70200mmf28E.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95000 | 2.00330 | +0.0533 |
| 28 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95000 | 2.00330 | +0.0533 |

### [NIKON AI Nikkor 135mm f/2.8](../src/lens-data/nikon/NikonAI135mmf28.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 5 | `S-TIH14 (OHARA)` | S-TIH14 | 1.78470 | 1.76182 | -0.0229 |

### [NIKON NIKKOR Z 35mm f/1.2 S](../src/lens-data/nikon/NikonNikkorZ35mmf12S.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 9 | `S-LAH79 (954323, OHARA S-LAH79)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |

### [NIKON PC-E NIKKOR 24mm f/3.5D ED](../src/lens-data/nikon/NikonPCENikkor24mmf35DED.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 9 | `S-TIH14 (OHARA)` | S-TIH14 | 1.58144 | 1.76182 | +0.1804 |

### [NIKON PC NIKKOR 19mm f/4E ED](../src/lens-data/nikon/NikonNikkorPCE19mmf4E.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 18 | `S-TIM28 (OHARA)` | S-TIM28 | 1.59270 | 1.68893 | +0.0962 |

### [NIKON NIKKOR Z 14-24mm f/2.8 S](../src/lens-data/nikon/NikonZ1424f28S.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 7 | `S-TIH14 (OHARA)` | S-TIH14 | 1.73800 | 1.76182 | +0.0238 |
| 9 | `S-NPH2 (OHARA) — ultra-high-index dense flint` | S-NPH2 | 2.00060 | 1.92286 | -0.0777 |
| 13 | `Near S-FPM3 (OHARA) — fluorophosphate crown` | S-FPM3 | 1.59349 | 1.53775 | -0.0557 |
| 16 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |

### [NIKON NIKKOR Z 24-70mm f/4 S](../src/lens-data/nikon/NikonNikkorZ2470mmf4S.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 2 | `S-LAL14 (OHARA)` | S-LAL14 | 1.75500 | 1.69680 | -0.0582 |
| 6 | `S-LAL14 (OHARA)` | S-LAL14 | 1.75500 | 1.69680 | -0.0582 |

### [NIKON NIKKOR Z 26mm f/2.8](../src/lens-data/nikon/NikonZ26f28.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 4 | `S-TIM2 (OHARA)` | S-TIM2 | 1.59270 | 1.62004 | +0.0273 |

### [NIKON NIKKOR Z MC 105mm f/2.8 VR S](../src/lens-data/nikon/NikonZ105f28.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 4 | `S-FPM3 (OHARA)` | S-FPM3 | 1.59319 | 1.53775 | -0.0554 |
| 6 | `S-FPM3 (OHARA)` | S-FPM3 | 1.59319 | 1.53775 | -0.0554 |
| 17 | `S-FPM3 (OHARA)` | S-FPM3 | 1.59319 | 1.53775 | -0.0554 |
| 19 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |

### [OLYMPUS ZUIKO AUTO-MACRO 90mm f/2](../src/lens-data/olympus/OlympusZuikoAutoMacro90mmf2.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 17 | `BSC7 (HOYA)` | S-BSL7 | 1.65160 | 1.51624 | -0.1354 |

### [OLYMPUS ZUIKO AUTO-S 50mm f/1.2](../src/lens-data/olympus/OlympusZuikoAutoS50mmf12.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `S-LAH65 (OHARA) / TAFD25 (HOYA)` | S-LAH65 | 1.83400 | 1.80400 | -0.0300 |

### [OLYMPUS G.ZUIKO AUTO-S 50mm f/1.4](../src/lens-data/olympus/OlympusZuikoAutoS50mmf14.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 5 | `BaF-type (581-408; OHARA S-TIM25 family — close)` | S-TIM25 | 1.58140 | 1.67270 | +0.0913 |

### [RICOH GR 28mm f/2.8](../src/lens-data/ricoh/RicohGR28f28.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 4 | `S-TIM35 (OHARA) / FD110 (HOYA)` | S-TIM35 | 1.68893 | 1.69895 | +0.0100 |

### [SIGMA DP3 MERRILL 50mm f/2.8](../src/lens-data/sigma/SigmaDP3M50mmf28.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-LAH55 (Ohara) / TAC8 (Hoya) — Δnd = 0, ΔVd = +0.04` | S-LAH55 | 1.88300 | 1.83481 | -0.0482 |
| 3 | `S-PHM52 (Ohara) — exact match` | S-PHM52 | 1.59282 | 1.61800 | +0.0252 |
| 7 | `S-NPH2 (Ohara) — exact match` | S-NPH2 | 1.90366 | 1.92286 | +0.0192 |
| 8 | `S-LAH58 (Ohara) / TAC4 (Hoya) — exact match` | S-LAH58 | 1.83481 | 1.88300 | +0.0482 |
| 16 | `TAFD37 (Hoya) — tentative; S-LAH65 (Ohara): Δnd = +0.0002` | TAFD37 | 1.80420 | 1.90043 | +0.0962 |

### [SONY FE 90 mm F2.8 Macro G OSS](../src/lens-data/sony/SonyFE90mmf28.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 20 | `S-TIM35 (OHARA)` | S-TIM35 | 1.67270 | 1.69895 | +0.0262 |

### [VOIGTLÄNDER ULTRON Vintage Line 28mm F2 Aspherical](../src/lens-data/voigtlander/VoigtlanderUltron28f2.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 4 | `S-LAH58 (OHARA) / N-LASF46A (Schott)` | S-LAH58 | 1.91082 | 1.88300 | -0.0278 |
| 6 | `S-LAH58 (OHARA)` | S-LAH58 | 1.91082 | 1.88300 | -0.0278 |

### [VOIGTLÄNDER NOKTON 35mm f/1.2 Aspherical](../src/lens-data/voigtlander/VoigtlanderNokton35mmf12.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 12 | `S-TIH14 (OHARA)` | S-TIH14 | 1.80518 | 1.76182 | -0.0434 |

### [VOIGTLÄNDER NOKTON 50mm f/1.2 X-Mount](../src/lens-data/voigtlander/VoigtlanderNoktonX50mmf12.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 7 | `S-TIH14 (OHARA)` | S-TIH14 | 1.74077 | 1.76182 | +0.0211 |

