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

- **131** lenses scanned
- **1502** glass surfaces examined
- **1499** surfaces with non-empty `glass` strings
- **886** of those resolved to a catalog entry
- **250** mismatches found (28.2% of resolved surfaces)
- **72** distinct lens files affected

## Most-frequent mismatched catalog targets

Glass labels that get rejected most often. A high count here often points to a single glass
annotation pattern (e.g. an obsolete name, a `probable` guess) that's used across many lenses.

| Catalog entry | Rejected surfaces | Notes |
|---|---|---|
| S-NPH2 | 16 | |
| S-TIH14 | 15 | |
| S-LAH79 | 13 | |
| S-TIH18 | 9 | |
| S-LAH58 | 8 | |
| S-NPH4 | 7 | |
| S-TIH6 | 7 | |
| S-TIM25 | 7 | |
| S-LAL14 | 6 | |
| S-NBH56 | 6 | |
| S-LAM54 | 5 | |
| S-LAM51 | 5 | |
| S-LAH65V | 5 | |
| S-BAL14 | 5 | |
| S-NBH55 | 5 | |
| S-NBH8 | 5 | |
| S-TIM22 | 5 | |
| S-TIM35 | 5 | |
| S-FPM3 | 5 | |
| S-LAH64 | 4 | |
| S-TIM27 | 4 | |
| S-TIH53 | 4 | |
| S-LAH66 | 4 | |
| S-BAM4 | 4 | |
| S-BAL42 | 4 | |
| S-NPH53 | 4 | |
| S-TIM2 | 4 | |
| S-NSL5 | 3 | |
| S-LAM2 | 3 | |
| S-BAL35 | 3 | |
| S-TIM28 | 3 | |
| S-LAL8 | 3 | |
| S-NPH1 | 3 | |
| S-LAH51 | 3 | |
| S-LAH60 | 3 | |
| S-TIH4 | 3 | |
| SF6 | 3 | |
| S-LAH97 | 3 | |
| S-LAL9 | 2 | |
| S-BSM81 | 2 | |
| S-BSL7 | 2 | |
| S-LAH89 | 2 | |
| S-LAH65 | 2 | |
| N-SK14 | 2 | |
| SF2 | 2 | |
| S-NBH5 | 2 | |
| S-LAM66 | 2 | |
| SF4 | 2 | |
| N-SK16 | 2 | |
| S-BSM18 | 2 | |
| S-NBH51 | 2 | |
| S-NBH52 | 2 | |
| S-LAH55VS | 2 | |
| S-PHM52 | 2 | |
| S-LAH52 | 1 | |
| S-LAL18 | 1 | |
| S-LAH55V | 1 | |
| S-BSM14 | 1 | |
| S-LAH59 | 1 | |
| S-FPM2 | 1 | |
| S-LAH63 | 1 | |
| TAFD33 | 1 | |
| S-NSL3 | 1 | |
| TAFD30 | 1 | |
| S-LAH53 | 1 | |
| S-PHM53 | 1 | |
| S-LAH55 | 1 | |
| TAFD37 | 1 | |

## Mismatches by lens

### [CANON RF 24-240mm F4-6.3 IS USM](../src/lens-data/canon/CanonRF24240mmf463.data.ts) — US 2020/0142167 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `S-LAH66 type (852/408)` | S-LAH66 | 1.85150 | 1.77250 | -0.0790 |
| 8 | `S-LAH66 type (852/408)` | S-LAH66 | 1.85150 | 1.77250 | -0.0790 |
| 15 | `S-TIH6 type (762/265)` | S-TIH6 | 1.76182 | 1.80518 | +0.0434 |
| 17 | `S-BAM4 type (581/408)` | S-BAM4 | 1.58144 | 1.60562 | +0.0242 |
| 18 | `S-NPH2 type (001/291)` | S-NPH2 | 2.00100 | 1.92286 | -0.0781 |
| 20 | `S-NPH1 type (001/255)` | S-NPH1 | 2.00069 | 1.80809 | -0.1926 |
| 23 | `S-NPH2 type (001/291)` | S-NPH2 | 2.00100 | 1.92286 | -0.0781 |
| 25A | `S-BAL42 type (531/559)` | S-BAL42 | 1.53110 | 1.58313 | +0.0520 |
| 28 | `S-BSM81 type (593/686)` | S-BSM81 | 1.59282 | 1.64000 | +0.0472 |
| 33 | `S-BSM14 type (639/554)` | S-BSM14 | 1.63854 | 1.60311 | -0.0354 |
| 36 | `S-TIH14 type (847/238)` | S-TIH14 | 1.84666 | 1.76182 | -0.0848 |

### [NIKON NIKKOR Z 24-70mm f/2.8 S](../src/lens-data/nikon/NikonZ2470f28.data.ts) — WO2020/136749 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 2 | `S-LAL8 (OHARA)` | S-LAL8 | 1.75500 | 1.71299 | -0.0420 |
| 4 | `S-LAH55VS (OHARA)` | S-LAH55VS | 1.77250 | 1.83481 | +0.0623 |
| 8 | `S-LAH55VS (OHARA)` | S-LAH55VS | 1.77250 | 1.83481 | +0.0623 |
| 10 | `S-TIH6 (OHARA)` | S-TIH6 | 1.72825 | 1.80518 | +0.0769 |
| 17 | `S-PHM52 (OHARA)` | S-PHM52 | 1.59319 | 1.61800 | +0.0248 |
| 19 | `S-NBH8 (OHARA)` | S-NBH8 | 1.73800 | 1.72047 | -0.0175 |
| 22 | `S-NBH56 (OHARA)` | S-NBH56 | 1.72047 | 1.85478 | +0.1343 |
| 24 | `S-PHM53 (OHARA)` | S-PHM53 | 1.59349 | 1.60300 | +0.0095 |
| 28 | `S-NPH2 (OHARA)` | S-NPH2 | 1.94595 | 1.92286 | -0.0231 |
| 32 | `S-BAL42 (OHARA)` | S-BAL42 | 1.58913 | 1.58313 | -0.0060 |

### [CANON RF 50mm f/1.2 L USM](../src/lens-data/canon/CanonRF50mmf12L.data.ts) — US 2019/0265441 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 2 | `S-TIM25 (OHARA)` | S-TIM25 | 1.68893 | 1.67270 | -0.0162 |
| 8 | `S-TIM22 (OHARA)` | S-TIM22 | 1.66565 | 1.64769 | -0.0180 |
| 9 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |
| 13 | `S-NBH55 (OHARA)` | S-NBH55 | 1.73800 | 1.80000 | +0.0620 |
| 15 | `S-LAL14 (OHARA)` | S-LAL14 | 1.76385 | 1.69680 | -0.0671 |
| 16 | `S-TIM22 (OHARA)` | S-TIM22 | 1.66565 | 1.64769 | -0.0180 |
| 18A | `S-LAH89 (OHARA)` | S-LAH89 | 1.88300 | 1.85150 | -0.0315 |
| 20 | `S-LAH89 (OHARA)` | S-LAH89 | 1.88300 | 1.85150 | -0.0315 |
| 23 | `S-TIM35 (OHARA)` | S-TIM35 | 1.67300 | 1.69895 | +0.0259 |

### [CANON RF 70-200mm f/2.8 L IS USM](../src/lens-data/canon/CanonRF70200f28.data.ts) — JP2021-056407A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `S-BAM4 (OHARA)` | S-BAM4 | 1.61340 | 1.60562 | -0.0078 |
| 9 | `S-LAH65V (OHARA)` | S-LAH65V | 1.76385 | 1.80400 | +0.0401 |
| 10 | `S-TIH14 (OHARA)` | S-TIH14 | 1.85478 | 1.76182 | -0.0930 |
| 15 | `S-TIM2 (OHARA)` | S-TIM2 | 1.59270 | 1.62004 | +0.0273 |
| 16 | `S-TIH6 (OHARA)` | S-TIH6 | 1.72825 | 1.80518 | +0.0769 |
| 18 | `S-NPH2 (OHARA)` | S-NPH2 | 2.05090 | 1.92286 | -0.1280 |
| 22 | `S-NPH2 (OHARA)` | S-NPH2 | 2.05090 | 1.92286 | -0.1280 |
| 24 | `S-LAH58 (OHARA)` | S-LAH58 | 1.90043 | 1.88300 | -0.0174 |
| 28 | `S-TIH14 (OHARA)` | S-TIH14 | 1.85478 | 1.76182 | -0.0930 |

### [CANON RF 100mm f/2.8 L MACRO IS USM](../src/lens-data/canon/CanonRF100f28.data.ts) — JP2021-47297A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 2 | `S-TIH18 (OHARA)` | S-TIH18 | 1.76182 | 1.72151 | -0.0403 |
| 11 | `S-LAM54 (OHARA)` | S-LAM54 | 1.77250 | 1.75700 | -0.0155 |
| 13 | `S-LAL9 (OHARA)` | S-LAL9 | 1.72916 | 1.69100 | -0.0382 |
| 16 | `S-LAM51 (OHARA)` | S-LAM51 | 1.73400 | 1.70000 | -0.0340 |
| 18 | `S-LAM54 (OHARA)` | S-LAM54 | 1.77250 | 1.75700 | -0.0155 |
| 19 | `S-NPH4 (OHARA)` | S-NPH4 | 1.94595 | 1.89286 | -0.0531 |
| 23 | `S-LAL9 (OHARA)` | S-LAL9 | 1.72916 | 1.69100 | -0.0382 |
| 28 | `S-TIM28 (OHARA)` | S-TIM28 | 1.67270 | 1.68893 | +0.0162 |

### [CANON RF 24-105mm f/4 L IS USM](../src/lens-data/canon/CanonRF24105mmf4L.data.ts) — US 2019/0278068 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 2 | `S-BAL14 (OHARA)` | S-BAL14 | 1.72916 | 1.56883 | -0.1603 |
| 4 | `S-BAL14 (OHARA)` | S-BAL14 | 1.72916 | 1.56883 | -0.1603 |
| 6 | `S-NPH2 (OHARA)` | S-NPH2 | 1.95375 | 1.92286 | -0.0309 |
| 14 | `S-LAH55V (OHARA)` | S-LAH55V | 1.91082 | 1.83481 | -0.0760 |
| 16 | `S-NPH2 (OHARA)` | S-NPH2 | 1.95375 | 1.92286 | -0.0309 |
| 19 | `S-TIM27 (OHARA)` | S-TIM27 | 1.74951 | 1.63980 | -0.1097 |
| 22 | `S-TIH53 (OHARA)` | S-TIH53 | 1.78472 | 1.84666 | +0.0619 |
| 27 | `S-BAL14 (OHARA)` | S-BAL14 | 1.72916 | 1.56883 | -0.1603 |

### [NIKON NIKKOR Z 50mm f/1.8 S](../src/lens-data/nikon/NikonNikkorZ50f18S.data.ts) — WO2019/220618 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-TIH6 class (dense flint)` | S-TIH6 | 1.67270 | 1.80518 | +0.1325 |
| 2 | `S-NPH2 / E-FDS2 (ultra-high-index short flint, nd = 1.946)` | S-NPH2 | 1.94595 | 1.92286 | -0.0231 |
| 10 | `S-TIH14 class (dense flint)` | S-TIH14 | 1.64769 | 1.76182 | +0.1141 |
| 14 | `S-TIH14 class (dense flint)` | S-TIH14 | 1.64769 | 1.76182 | +0.1141 |
| 16A | `S-LAH60 class (lanthanum dense flint, nd = 1.774)` | S-LAH60 | 1.77377 | 1.83400 | +0.0602 |
| 20 | `S-NPH2 (ultra-high-index short flint, nd = 1.946)` | S-NPH2 | 1.94595 | 1.92286 | -0.0231 |
| 21 | `S-TIH14 class (dense flint)` | S-TIH14 | 1.64769 | 1.76182 | +0.1141 |
| 23 | `S-TIH14 class (dense flint)` | S-TIH14 | 1.64769 | 1.76182 | +0.1141 |

### [SONY FE 85mm F1.4 GM II](../src/lens-data/sony/SonyFE85mmf14GMII.data.ts) — WO 2025/239028 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 7 | `S-TIH53 (OHARA)` | S-TIH53 | 1.85451 | 1.84666 | -0.0079 |
| 10 | `S-NBH56 (OHARA)` | S-NBH56 | 1.65412 | 1.85478 | +0.2007 |
| 11 | `S-LAH97 (OHARA)` | S-LAH97 | 1.85108 | 1.75500 | -0.0961 |
| 13 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |
| 16 | `S-TIH18 (OHARA)` | S-TIH18 | 1.77047 | 1.72151 | -0.0490 |
| 18 | `S-LAH51 (OHARA)` | S-LAH51 | 1.80420 | 1.78590 | -0.0183 |
| 20A | `S-LAH97 (OHARA)` | S-LAH97 | 1.85108 | 1.75500 | -0.0961 |
| 25 | `S-NPH4 (OHARA)` | S-NPH4 | 1.86966 | 1.89286 | +0.0232 |

### [CANON RF 24-70mm f/2.8L IS USM](../src/lens-data/canon/CanonRF2470f28.data.ts) — US 2019/0278068 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 9 | `S-NPH53 (OHARA)` | S-NPH53 | 1.85478 | 1.84666 | -0.0081 |
| 13 | `S-TIM25 (OHARA)` | S-TIM25 | 1.59270 | 1.67270 | +0.0800 |
| 17 | `S-LAH59 (OHARA)` | S-LAH59 | 1.76385 | 1.81600 | +0.0521 |
| 20 | `S-NPH2 (OHARA)` | S-NPH2 | 2.00069 | 1.92286 | -0.0778 |
| 27 | `S-NBH55 (OHARA)` | S-NBH55 | 1.73800 | 1.80000 | +0.0620 |
| 30A | `S-LAH65V (OHARA) — PGM` | S-LAH65V | 1.85400 | 1.80400 | -0.0500 |
| 32 | `S-LAH51 (OHARA)` | S-LAH51 | 1.80400 | 1.78590 | -0.0181 |

### [NIKON NIKKOR Z 14-24mm f/2.8 S](../src/lens-data/nikon/NikonZ1424f28S.data.ts) — WO 2021/117563 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `S-LAM51 (OHARA)` | S-LAM51 | 1.74310 | 1.70000 | -0.0431 |
| 7 | `S-TIH14 (OHARA)` | S-TIH14 | 1.73800 | 1.76182 | +0.0238 |
| 9 | `S-NPH2 (OHARA) — ultra-high-index dense flint` | S-NPH2 | 2.00060 | 1.92286 | -0.0777 |
| 10 | `S-TIM27 (OHARA)` | S-TIM27 | 1.64769 | 1.63980 | -0.0079 |
| 13 | `Near S-FPM3 (OHARA) — fluorophosphate crown` | S-FPM3 | 1.59349 | 1.53775 | -0.0557 |
| 16 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |
| 27A | `Probable S-LAH97 (OHARA)` | S-LAH97 | 1.85108 | 1.75500 | -0.0961 |

### [CANON RF 28-70mm F2 L USM](../src/lens-data/canon/CanonRF2870mmf2L.data.ts) — JP 2020-118807 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6A | `S-LAM54 (OHARA)` | S-LAM54 | 1.76902 | 1.75700 | -0.0120 |
| 12 | `S-LAH60 (OHARA)` | S-LAH60 | 1.88300 | 1.83400 | -0.0490 |
| 19 | `S-NBH8 (OHARA)` | S-NBH8 | 1.73800 | 1.72047 | -0.0175 |
| 27 | `S-NBH56 (OHARA)` | S-NBH56 | 1.80610 | 1.85478 | +0.0487 |
| 29A | `S-LAH66 (OHARA)` | S-LAH66 | 1.85400 | 1.77250 | -0.0815 |
| 32 | `S-NPH2 (OHARA)` | S-NPH2 | 2.00100 | 1.92286 | -0.0781 |

### [FUJIFILM FUJINON XF 80mm f/2.8 R LM OIS WR Macro](../src/lens-data/fujifilm/FujifilmXF80f28.data.ts) — US 2018/0246292 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 5 | `S-TIM35 (OHARA dense flint)` | S-TIM35 | 1.62588 | 1.69895 | +0.0731 |
| 18 | `S-NPH4 (OHARA high-index dense flint)` | S-NPH4 | 1.84666 | 1.89286 | +0.0462 |
| 21 | `S-LAM66 (OHARA lanthanum crown)` | S-LAM66 | 1.69700 | 1.80100 | +0.1040 |
| 23 | `S-FPM2 (OHARA fluorophosphate)` | S-FPM2 | 1.53775 | 1.59522 | +0.0575 |
| 25 | `S-LAH79 (OHARA ultra-high-index lanthanum)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |
| 28 | `S-NPH53 (OHARA ultra-high-index dense flint, lowest νd in design)` | S-NPH53 | 1.95906 | 1.84666 | -0.1124 |

### [CANON FD 50mm f/1.2 L](../src/lens-data/canon/CanonFD50mmf12L.data.ts) — US 4,364,644

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `OHARA S-LAH58 (804466)` | S-LAH58 | 1.80400 | 1.88300 | +0.0790 |
| 3A | `OHARA S-LAH52 (744447)` | S-LAH52 | 1.74400 | 1.79952 | +0.0555 |
| 9 | `OHARA S-LAH64 (883408)` | S-LAH64 | 1.88300 | 1.78800 | -0.0950 |
| 11 | `OHARA S-LAL18 (773496)` | S-LAL18 | 1.77250 | 1.72916 | -0.0433 |
| 13 | `OHARA S-BAL35* (623582; provisional, Δν_d=−1.12)` | S-BAL35 | 1.62299 | 1.58913 | -0.0339 |

### [CANON RF 85mm f/1.2L USM](../src/lens-data/canon/CanonRF85mmf12L.data.ts) — US 2020/0012073 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 16 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |
| 18 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |
| 19 | `S-TIM22 (OHARA)` | S-TIM22 | 1.62004 | 1.64769 | +0.0276 |
| 21 | `S-TIM27 (OHARA)` | S-TIM27 | 1.68893 | 1.63980 | -0.0491 |
| 23 | `S-LAH64 (OHARA)` | S-LAH64 | 1.90043 | 1.78800 | -0.1124 |

### [NIKON AF-S NIKKOR 200-500mm f/5.6E ED VR](../src/lens-data/nikon/NikonNikkorAFS200500mmf56.data.ts) — JP 2014-209144 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `S-TIM27 (OHARA)` | S-TIM27 | 1.60342 | 1.63980 | +0.0364 |
| 12 | `S-NBH51 (OHARA)` | S-NBH51 | 1.74330 | 1.74950 | +0.0062 |
| 14 | `S-BAL35 (OHARA)` | S-BAL35 | 1.60738 | 1.58913 | -0.0183 |
| 23 | `S-NBH51 (OHARA)` | S-NBH51 | 1.74330 | 1.74950 | +0.0062 |
| 29 | `S-TIM2 (OHARA)` | S-TIM2 | 1.58144 | 1.62004 | +0.0386 |

### [NIKON AF-S NIKKOR 70-200mm f/2.8E FL ED VR](../src/lens-data/nikon/NikonNikkorAFS70200mmf28E.data.ts) — WO 2019/097669 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95000 | 2.00330 | +0.0533 |
| 6 | `S-LAM51 (OHARA)` | S-LAM51 | 1.71999 | 1.70000 | -0.0200 |
| 28 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95000 | 2.00330 | +0.0533 |
| 34 | `S-LAM51 (OHARA)` | S-LAM51 | 1.71999 | 1.70000 | -0.0200 |
| 40 | `S-LAM51 (OHARA)` | S-LAM51 | 1.71999 | 1.70000 | -0.0200 |

### [NIKON NIKKOR Z 35mm f/1.2 S](../src/lens-data/nikon/NikonNikkorZ35mmf12S.data.ts) — JP 2025-52870A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 7 | `S-NBH52 (738323, OHARA S-NBH52)` | S-NBH52 | 1.73800 | 1.67300 | -0.0650 |
| 9 | `S-LAH79 (954323, OHARA S-LAH79)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |
| 16 | `S-NBH52 (738323, OHARA S-NBH52)` | S-NBH52 | 1.73800 | 1.67300 | -0.0650 |
| 19 | `S-NBH55 (720347, OHARA S-NBH55)` | S-NBH55 | 1.72047 | 1.80000 | +0.0795 |
| 30 | `S-NBH56 (789284, OHARA S-NBH56)` | S-NBH56 | 1.78880 | 1.85478 | +0.0660 |

### [NIKON NIKKOR Z 35mm f/1.8 S](../src/lens-data/nikon/NikonZ35f18S.data.ts) — JP 2019-090947A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |
| 4 | `S-TIM2 (OHARA)` | S-TIM2 | 1.60342 | 1.62004 | +0.0166 |
| 6 | `S-TIH14 (OHARA)` | S-TIH14 | 1.68893 | 1.76182 | +0.0729 |
| 7 | `S-LAH51 (OHARA)` | S-LAH51 | 1.85150 | 1.78590 | -0.0656 |
| 14 | `S-TIM25 (OHARA)` | S-TIM25 | 1.61293 | 1.67270 | +0.0598 |

### [SIGMA DP3 MERRILL 50mm f/2.8](../src/lens-data/sigma/SigmaDP3M50mmf28.data.ts) — JP 2014-126652 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-LAH55 (Ohara) / TAC8 (Hoya) — Δnd = 0, ΔVd = +0.04` | S-LAH55 | 1.88300 | 1.83481 | -0.0482 |
| 3 | `S-PHM52 (Ohara) — exact match` | S-PHM52 | 1.59282 | 1.61800 | +0.0252 |
| 7 | `S-NPH2 (Ohara) — exact match` | S-NPH2 | 1.90366 | 1.92286 | +0.0192 |
| 8 | `S-LAH58 (Ohara) / TAC4 (Hoya) — exact match` | S-LAH58 | 1.83481 | 1.88300 | +0.0482 |
| 16 | `TAFD37 (Hoya) — tentative; S-LAH65 (Ohara): Δnd = +0.0002` | TAFD37 | 1.80420 | 1.90043 | +0.0962 |

### [CANON RF 28-70mm F2.8 IS STM](../src/lens-data/canon/CanonRF2870mmf28.data.ts) — US 2024/0329367 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 8 | `851408 — S-LAH65V (OHARA)` | S-LAH65V | 1.85150 | 1.80400 | -0.0475 |
| 11 | `001291 — S-NPH4 family (OHARA)` | S-NPH4 | 2.00100 | 1.89286 | -0.1081 |
| 15 | `770297 — S-TIH18 family (OHARA)` | S-TIH18 | 1.77047 | 1.72151 | -0.0490 |
| 26 | `744448 — S-LAL14 family (OHARA)` | S-LAL14 | 1.74400 | 1.69680 | -0.0472 |

### [LEICA APO-SUMMICRON 43mm f/2 ASPH.](../src/lens-data/leica/LeicaAPO43mmf2.data.ts) — US 2024/0241349 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `S-NPH4 (OHARA)` | S-NPH4 | 2.00069 | 1.89286 | -0.1078 |
| 6 | `S-TIH6 (OHARA)` | S-TIH6 | 1.76182 | 1.80518 | +0.0434 |
| 11 | `S-LAH99 / TAFD33 (OHARA)` | TAFD33 | 1.95375 | 1.88100 | -0.0727 |
| 16A | `S-FPM3 / L-FPM3 (OHARA)` | S-FPM3 | 1.55332 | 1.53775 | -0.0156 |

### [LEICA SUMMILUX 28 mm f/1.7 ASPH.](../src/lens-data/leica/Leica28mmf17.data.ts) — US 2016/0266350 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-BAL42 (OHARA)` | S-BAL42 | 1.56732 | 1.58313 | +0.0158 |
| 9 | `S-LAH79 (OHARA)` | S-LAH79 | 1.91082 | 2.00330 | +0.0925 |
| 12A | `S-LAH63 (OHARA)` | S-LAH63 | 1.87722 | 1.80440 | -0.0728 |
| 15 | `S-NBH55 (OHARA)` | S-NBH55 | 1.74077 | 1.80000 | +0.0592 |

### [NIKON AF-S NIKKOR 14-24mm f/2.8G ED](../src/lens-data/nikon/NikonNikkorAFS1424mmf28.data.ts) — US 7,359,125 B2

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 5 | `S-LAH53 (OHARA)` | S-LAH53 | 1.74100 | 1.80610 | +0.0651 |
| 6 | `S-TIM25 (OHARA)` | S-TIM25 | 1.55389 | 1.67270 | +0.1188 |
| 13 | `S-BSM81 (OHARA)` | S-BSM81 | 1.62374 | 1.64000 | +0.0163 |
| 20 | `S-BAL42 (OHARA)` | S-BAL42 | 1.57099 | 1.58313 | +0.0121 |

### [NIKON AI Nikkor 135mm f/2.8](../src/lens-data/nikon/NikonAI135mmf28.data.ts) — US 4,057,330

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-BSM18 (OHARA)` | S-BSM18 | 1.62041 | 1.63854 | +0.0181 |
| 3 | `S-BSM18 (OHARA)` | S-BSM18 | 1.62041 | 1.63854 | +0.0181 |
| 5 | `S-TIH14 (OHARA)` | S-TIH14 | 1.78470 | 1.76182 | -0.0229 |
| 6 | `S-TIH4 (OHARA)` | S-TIH4 | 1.74000 | 1.75520 | +0.0152 |

### [NIKON NIKKOR Z 24-120mm f/4 S](../src/lens-data/nikon/NikonNikkorZ24120mmf4S.data.ts) — WO 2022/259649 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `S-LAH66 (OHARA)` | S-LAH66 | 1.83400 | 1.77250 | -0.0615 |
| 8 | `S-TIM35 (OHARA) or K-VC89 (Sumita)` | S-TIM35 | 1.85451 | 1.69895 | -0.1556 |
| 19 | `S-LAH58 (OHARA)` | S-LAH58 | 1.90043 | 1.88300 | -0.0174 |
| 22 | `S-TIM25 (OHARA)` | S-TIM25 | 1.78472 | 1.67270 | -0.1120 |

### [NIKON NIKKOR Z MC 105mm f/2.8 VR S](../src/lens-data/nikon/NikonZ105f28.data.ts) — WO 2022/097401 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 4 | `S-FPM3 (OHARA)` | S-FPM3 | 1.59319 | 1.53775 | -0.0554 |
| 6 | `S-FPM3 (OHARA)` | S-FPM3 | 1.59319 | 1.53775 | -0.0554 |
| 17 | `S-FPM3 (OHARA)` | S-FPM3 | 1.59319 | 1.53775 | -0.0554 |
| 19 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |

### [NIKON NIKKOR-S AUTO 50mm f/1.4](../src/lens-data/nikon/NikonNikkorSAuto50mmf14.data.ts) — US 3,560,079

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `SF2 / NSL36 (dense flint)` | SF2 | 1.66446 | 1.64769 | -0.0168 |
| 4 | `SF4 / PBM5 (dense flint)` | SF4 | 1.64831 | 1.75520 | +0.1069 |
| 6 | `SF6 / PBM6 (dense flint)` | SF6 | 1.69895 | 1.80518 | +0.1062 |
| 9 | `SK16 / BSL7 (barium crown)` | N-SK16 | 1.67790 | 1.62041 | -0.0575 |

### [CANON RF 135mm f/1.8 L IS USM](../src/lens-data/canon/CanonRF135f18.data.ts) — US 2023/0213745 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `770297 — S-TIH18 family (OHARA)` | S-TIH18 | 1.77047 | 1.72151 | -0.0490 |
| 9 | `770297 — S-TIH18 family (OHARA)` | S-TIH18 | 1.77047 | 1.72151 | -0.0490 |
| 26 | `S-LAL8 (OHARA)` | S-LAL8 | 1.65844 | 1.71299 | +0.0546 |

### [CANON RF 15-35mm f/2.8 L IS USM](../src/lens-data/canon/CanonRF1535f28.data.ts) — US 2020/0257181 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3A | `S-LAH65V (OHARA)` | S-LAH65V | 1.85400 | 1.80400 | -0.0500 |
| 7 | `S-NPH1 (OHARA)` | S-NPH1 | 1.85478 | 1.80809 | -0.0467 |
| 27A | `S-LAH65V (OHARA)` | S-LAH65V | 1.85400 | 1.80400 | -0.0500 |

### [CANON RF 85mm f/2 Macro IS STM](../src/lens-data/canon/CanonRF85mmf2Macro.data.ts) — US 2021/0072505 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 11 | `S-LAH58 (OHARA)` | S-LAH58 | 1.90043 | 1.88300 | -0.0174 |
| 13 | `S-TIH4 (OHARA)` | S-TIH4 | 1.72047 | 1.75520 | +0.0347 |
| 21 | `S-LAH65 (OHARA)` | S-LAH65 | 1.83481 | 1.80400 | -0.0308 |

### [FUJIFILM FUJINON XF 200mm F2 R LM OIS WR](../src/lens-data/fujifilm/FujifilmXF200mmf2R.data.ts) — US 2019/0265504 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 9 | `S-LAH58 family (OHARA, 911 353)` | S-LAH58 | 1.91082 | 1.88300 | -0.0278 |
| 13 | `S-NBH5 / S-LAH53 family (OHARA, 800 298)` | S-NBH5 | 1.80000 | 1.65412 | -0.1459 |
| 33 | `S-NBH5 / S-LAH53 family (OHARA, 800 298)` | S-NBH5 | 1.80000 | 1.65412 | -0.1459 |

### [NIKON AF-S NIKKOR 105mm f/1.4E ED](../src/lens-data/nikon/NikonNikkor105f14E.data.ts) — WO2019/116563 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `S-LAM2 equiv. (Ohara)` | S-LAM2 | 1.72047 | 1.74400 | +0.0235 |
| 19 | `S-LAM2 equiv. (Ohara)` | S-LAM2 | 1.72047 | 1.74400 | +0.0235 |
| 20 | `S-LAH64 equiv. (Ohara)` | S-LAH64 | 1.76684 | 1.78800 | +0.0212 |

### [NIKON AF-S NIKKOR 120-300mm f/2.8E FL ED SR VR](../src/lens-data/nikon/NikonNikkorAFS120300mmf28.data.ts) — JP 2020-177057 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 22 | `OHARA S-NPH4` | S-NPH4 | 1.91082 | 1.89286 | -0.0180 |
| 29 | `OHARA S-NPH2` | S-NPH2 | 2.00100 | 1.92286 | -0.0781 |
| 40 | `OHARA S-NPH2` | S-NPH2 | 2.00100 | 1.92286 | -0.0781 |

### [NIKON AF-S NIKKOR 24-70mm f/2.8E ED VR](../src/lens-data/nikon/NikonNikkorAFS2470mmf28E.data.ts) — US 2020/0142168 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-LAH60 (OHARA)` | S-LAH60 | 1.74389 | 1.83400 | +0.0901 |
| 6 | `S-NPH2 (OHARA) — HRI` | S-NPH2 | 2.00100 | 1.92286 | -0.0781 |
| 36 | `S-LAM54 (OHARA)` | S-LAM54 | 1.69350 | 1.75700 | +0.0635 |

### [NIKON AF-S NIKKOR 28mm f/1.4E ED](../src/lens-data/nikon/NikonAFS28f14E.data.ts) — JP2017-227799A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-TIH18 (OHARA)` | S-TIH18 | 1.68893 | 1.72151 | +0.0326 |
| 18 | `S-TIH14 (OHARA)` | S-TIH14 | 1.73800 | 1.76182 | +0.0238 |
| 26A | `S-LAL8 (OHARA)` | S-LAL8 | 1.69350 | 1.71299 | +0.0195 |

### [NIKON AF-S NIKKOR 85mm f/1.4G](../src/lens-data/nikon/NikonNikkor85f14G.data.ts) — US 8,767,319 B2

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 5 | `S-NBH56 (OHARA)` | S-NBH56 | 1.80610 | 1.85478 | +0.0487 |
| 10 | `S-TIH18 (OHARA)` | S-TIH18 | 1.69895 | 1.72151 | +0.0226 |
| 17 | `S-TIH53 (OHARA)` | S-TIH53 | 1.64769 | 1.84666 | +0.1990 |

### [NIKON NIKKOR Z 24-70mm f/4 S](../src/lens-data/nikon/NikonNikkorZ2470mmf4S.data.ts) — WO2019/049372

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 2 | `S-LAL14 (OHARA)` | S-LAL14 | 1.75500 | 1.69680 | -0.0582 |
| 6 | `S-LAL14 (OHARA)` | S-LAL14 | 1.75500 | 1.69680 | -0.0582 |
| 19 | `S-TIH18 (OHARA)` | S-TIH18 | 1.80100 | 1.72151 | -0.0795 |

### [NIKON PC-E NIKKOR 24mm f/3.5D ED](../src/lens-data/nikon/NikonPCENikkor24mmf35DED.data.ts) — JP 2008-151949A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 9 | `S-TIH14 (OHARA)` | S-TIH14 | 1.58144 | 1.76182 | +0.1804 |
| 13 | `S-BAL14 (OHARA)` | S-BAL14 | 1.54814 | 1.56883 | +0.0207 |
| 17 | `S-BAL14 (OHARA)` | S-BAL14 | 1.54814 | 1.56883 | +0.0207 |

### [SIGMA 85mm F/1.4 DG DN | Art](../src/lens-data/sigma/SigmaDGDNA85mmf14.data.ts) — JP 2021-85935

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 8 | `Anomalous flint (S-NBH8-class, νd=25.15)` | S-NBH8 | 1.85451 | 1.72047 | -0.1340 |
| 15 | `Anomalous flint (S-NBH8-class, νd=25.15)` | S-NBH8 | 1.85451 | 1.72047 | -0.1340 |
| 18 | `Anomalous flint (S-NBH8-class, νd=25.15)` | S-NBH8 | 1.85451 | 1.72047 | -0.1340 |

### [CANON EF 50mm f/1.0L USM](../src/lens-data/canon/CanonEF50mmf1L.data.ts) — US 4,717,245

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 5A | `S-NSL5 (OHARA)` | S-NSL5 | 1.51742 | 1.52249 | +0.0051 |
| 8 | `S-NSL5 (OHARA)` | S-NSL5 | 1.51742 | 1.52249 | +0.0051 |

### [CANON SERENAR 28mm f/3.5](../src/lens-data/canon/CanonSerenar28mmf35.data.ts) — US 2,645,974

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 7 | `SK14 (Schott)` | N-SK14 | 1.62040 | 1.60311 | -0.0173 |
| 9 | `SK14 (Schott)` | N-SK14 | 1.62040 | 1.60311 | -0.0173 |

### [FUJIFILM FUJINON XF 23mm F1.4 R](../src/lens-data/fujifilm/FujifilmXF23mmf14.data.ts) — US 2014/0368926 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `S-TIM28 (OHARA)` | S-TIM28 | 1.61293 | 1.68893 | +0.0760 |
| 16 | `S-TIM25 (OHARA)` | S-TIM25 | 1.68893 | 1.67270 | -0.0162 |

### [FUJIFILM FUJINON XF 90mm f/2 R LM WR](../src/lens-data/fujifilm/FujifilmXF90mmf2.data.ts) — US 2016/0274335 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 10 | `S-BAM4 (OHARA)` | S-BAM4 | 1.63854 | 1.60562 | -0.0329 |
| 15 | `S-TIM22 (OHARA)` | S-TIM22 | 1.67270 | 1.64769 | -0.0250 |

### [LEICA ELMARIT-R 28mm f/2.8](../src/lens-data/leica/LeicaElmarit28mmf28.data.ts) — US 3,591,257

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `SF6 (SCHOTT)` | SF6 | 1.81265 | 1.80518 | -0.0075 |
| 11 | `SF6 (SCHOTT)` | SF6 | 1.81265 | 1.80518 | -0.0075 |

### [NIKON AF NIKKOR 85mm f/1.4D IF](../src/lens-data/nikon/Nikon85f14D.data.ts) — US 5,640,277

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 15 | `Very Dense Lanthanum Flint (TAFD30)` | TAFD30 | 1.86994 | 1.88300 | +0.0131 |
| 19 | `Lanthanum Crown (S-LAM66)` | S-LAM66 | 1.74810 | 1.80100 | +0.0529 |

### [NIKON AF-S NIKKOR 58mm f/1.4G](../src/lens-data/nikon/Nikon58f14GDesignCandidate.data.ts) — JP2013-019993A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `S-LAL14 / N-LAK12 (lanthanum crown)` | S-LAL14 | 1.75500 | 1.69680 | -0.0582 |
| 6 | `S-TIH4 / N-SF8 (dense flint)` | S-TIH4 | 1.68893 | 1.75520 | +0.0663 |

### [NIKON AF-S VR Micro-NIKKOR 105mm f/2.8G IF-ED](../src/lens-data/nikon/NikonAFS105f28G.data.ts) — US 7,218,457 B2

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 9 | `S-TIM22 (OHARA)` | S-TIM22 | 1.58267 | 1.64769 | +0.0650 |
| 21 | `S-TIH53 (OHARA), Δνd = 0.21; alt. CDGM H-LAF3B (Δνd = 0.01)` | S-TIH53 | 1.80610 | 1.84666 | +0.0406 |

### [NIKON NIKKOR Z 28mm f/2.8](../src/lens-data/nikon/NikonZ28f28.data.ts) — WO 2022/071249 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `S-NPH1 (OHARA)` | S-NPH1 | 2.00100 | 1.80809 | -0.1929 |
| 7 | `S-TIH14 (OHARA)` | S-TIH14 | 1.80518 | 1.76182 | -0.0434 |

### [NIKON NIKKOR Z 50mm f/1.2 S](../src/lens-data/nikon/NikonNikkorZ50f12.data.ts) — WO 2021/241230 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 25A | `S-NBH56 (OHARA)` | S-NBH56 | 1.76450 | 1.85478 | +0.0903 |
| 29 | `S-LAH79 (OHARA)` | S-LAH79 | 1.90265 | 2.00330 | +0.1007 |

### [NIKON NIKKOR-N Auto 24mm f/2.8](../src/lens-data/nikon/NikonNikkorAuto24f28.data.ts) — US 3,622,227

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 10 | `SF56A (Schott) / S-TIH6 (Ohara)` | S-TIH6 | 1.78470 | 1.80518 | +0.0205 |
| 12 | `SF56A (Schott) / S-TIH6 (Ohara)` | S-TIH6 | 1.78470 | 1.80518 | +0.0205 |

### [NIKON PC NIKKOR 19mm f/4E ED](../src/lens-data/nikon/NikonNikkorPCE19mmf4E.data.ts) — JP 2017-161685 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 18 | `S-TIM28 (OHARA)` | S-TIM28 | 1.59270 | 1.68893 | +0.0962 |
| 21 | `S-NSL5 (OHARA)` | S-NSL5 | 1.51742 | 1.52249 | +0.0051 |

### [SONY FE 135mm F1.8 GM](../src/lens-data/sony/SonyFE135mmf18GM.data.ts) — WO 2019/187633

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 9A | `S-BAL35 (OHARA)` | S-BAL35 | 1.58313 | 1.58913 | +0.0060 |
| 14 | `S-LAL14 (OHARA)` | S-LAL14 | 1.72916 | 1.69680 | -0.0324 |

### [SONY FE 90 mm F2.8 Macro G OSS](../src/lens-data/sony/SonyFE90mmf28.data.ts) — WO 2016/136352 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 20 | `S-TIM35 (OHARA)` | S-TIM35 | 1.67270 | 1.69895 | +0.0262 |
| 22 | `S-NBH55 (OHARA)` | S-NBH55 | 1.90370 | 1.80000 | -0.1037 |

### [VOIGTLÄNDER NOKTON 35mm f/1.2 Aspherical](../src/lens-data/voigtlander/VoigtlanderNokton35mmf12.data.ts) — JP 2004-101880A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `S-BAM4 (OHARA)` | S-BAM4 | 1.56732 | 1.60562 | +0.0383 |
| 12 | `S-TIH14 (OHARA)` | S-TIH14 | 1.80518 | 1.76182 | -0.0434 |

### [VOIGTLÄNDER NOKTON 50mm f/1.2 X-Mount](../src/lens-data/voigtlander/VoigtlanderNoktonX50mmf12.data.ts) — JP 2025-58577 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 7 | `S-TIH14 (OHARA)` | S-TIH14 | 1.74077 | 1.76182 | +0.0211 |
| 9 | `S-TIH18 (OHARA)` | S-TIH18 | 1.76182 | 1.72151 | -0.0403 |

### [VOIGTLÄNDER ULTRON Vintage Line 28mm F2 Aspherical](../src/lens-data/voigtlander/VoigtlanderUltron28f2.data.ts) — JP2022-100641A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 4 | `S-LAH58 (OHARA) / N-LASF46A (Schott)` | S-LAH58 | 1.91082 | 1.88300 | -0.0278 |
| 6 | `S-LAH58 (OHARA)` | S-LAH58 | 1.91082 | 1.88300 | -0.0278 |

### [CANON FD 35mm f/2 S.S.C. (I)](../src/lens-data/canon/CanonFD35mmf2.data.ts) — US 3,748,022

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `LaK (697485, S-LAM2 family)` | S-LAM2 | 1.69700 | 1.74400 | +0.0470 |

### [CANON RF 24-50mm F4.5-6.3 IS STM](../src/lens-data/canon/CanonRF2450mmf463.data.ts) — US 2023/0213739 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-BSL7 (OHARA 639/554)` | S-BSL7 | 1.63854 | 1.51624 | -0.1223 |

### [CANON RF24-105mm F2.8 L IS USM Z](../src/lens-data/canon/CanonRF24105mmf28Z.data.ts) — US 2024/0192474 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 19 | `Extreme dense flint — OHARA S-NPH4 (001/291)` | S-NPH4 | 2.00100 | 1.89286 | -0.1081 |

### [CARL ZEISS JENA PANCOLAR 50mm f/2](../src/lens-data/carl-zeiss-jena/CarlZeissJenaPancolar50mmf2.data.ts) — GB 850,117 C

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 4 | `SF2 equivalent (Jena in-house, 672/323)` | SF2 | 1.67246 | 1.64769 | -0.0248 |

### [FUJIFILM FUJINON XF 16–80mm f/4 R OIS WR](../src/lens-data/fujifilm/FujifilmXF1680mmf4.data.ts) — US 2020/0166735 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 10 | `High-index heavy flint (923209; OHARA S-NPH53)` | S-NPH53 | 1.92287 | 1.84666 | -0.0762 |

### [FUJIFILM FUJINON XF 50mm f/1.0 R WR](../src/lens-data/fujifilm/FujifilmXF50f1.data.ts) — US 2021/0231927 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 7 | `S-NPH53 (Ohara)` | S-NPH53 | 1.95906 | 1.84666 | -0.1124 |

### [LEICA ELCAN 50mm f/2](../src/lens-data/leica/LeicaElcan50mmf2.data.ts) — US 3,649,104

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 5 | `≈SF4 (dense flint)` | SF4 | 1.74710 | 1.75520 | +0.0081 |

### [NIKON 28Ti NIKKOR 28mm f/2.8](../src/lens-data/nikon/Nikon28Ti28mmf28.data.ts) — US 5,528,428

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-NSL3 (OHARA)` | S-NSL3 | 1.53172 | 1.51823 | -0.0135 |

### [NIKON AF-S NIKKOR 16-35mm f/4G ED VR](../src/lens-data/nikon/NikonNikkorAFS1635mmf4.data.ts) — US 2010/0238560 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 16 | `S-LAM54 (OHARA)` | S-LAM54 | 1.70154 | 1.75700 | +0.0555 |

### [NIKON NIKKOR 35mm f/2.8 (35Ti)](../src/lens-data/nikon/Nikon35Ti35mmf28.data.ts) — US 5,243,468

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `Hoya BACD5 (nd=1.69680 / νd=55.5; Δnd≈0, Δνd=+0.1)` | N-SK16 | 1.69680 | 1.62041 | -0.0764 |

### [NIKON NIKKOR Z 26mm f/2.8](../src/lens-data/nikon/NikonZ26f28.data.ts) — WO 2023/190222 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 4 | `S-TIM2 (OHARA)` | S-TIM2 | 1.59270 | 1.62004 | +0.0273 |

### [NIKON NIKKOR Z 40mm f/2](../src/lens-data/nikon/NikonNikkorZ40mmf2.data.ts) — JP 2021-189351A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `S-LAH64 (OHARA)` | S-LAH64 | 1.80400 | 1.78800 | -0.0160 |

### [OLYMPUS G.ZUIKO AUTO-S 50mm f/1.4](../src/lens-data/olympus/OlympusZuikoAutoS50mmf14.data.ts) — US 4,094,588

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 5 | `BaF-type (581-408; OHARA S-TIM25 family — close)` | S-TIM25 | 1.58140 | 1.67270 | +0.0913 |

### [OLYMPUS ZUIKO AUTO-MACRO 90mm f/2](../src/lens-data/olympus/OlympusZuikoAutoMacro90mmf2.data.ts) — US 4,792,219

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 17 | `BSC7 (HOYA)` | S-BSL7 | 1.65160 | 1.51624 | -0.1354 |

### [OLYMPUS ZUIKO AUTO-S 50mm f/1.2](../src/lens-data/olympus/OlympusZuikoAutoS50mmf12.data.ts) — US 4,099,843

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `S-LAH65 (OHARA) / TAFD25 (HOYA)` | S-LAH65 | 1.83400 | 1.80400 | -0.0300 |

### [RICOH GR 28mm f/2.8](../src/lens-data/ricoh/RicohGR28f28.data.ts) — US 5,760,973

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 4 | `S-TIM35 (OHARA) / FD110 (HOYA)` | S-TIM35 | 1.68893 | 1.69895 | +0.0100 |

