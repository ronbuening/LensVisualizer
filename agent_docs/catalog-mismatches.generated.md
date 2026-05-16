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

- **205** lenses scanned
- **2385** glass surfaces examined
- **2379** surfaces with non-empty `glass` strings
- **1661** of those resolved to a catalog entry
- **371** mismatches found (22.3% of resolved surfaces)
- **119** distinct lens files affected

## Most-frequent mismatched catalog targets

Glass labels that get rejected most often. A high count here often points to a single glass
annotation pattern (e.g. an obsolete name, a `probable` guess) that's used across many lenses.

| Catalog entry | Rejected surfaces | Notes |
|---|---|---|
| S-LAH79 | 15 | |
| S-TIH14 | 11 | |
| S-TIH53 | 10 | |
| S-TIH18 | 9 | |
| S-TIM2 | 9 | |
| S-TIM22 | 8 | |
| S-LAH58 | 8 | |
| TAFD25 | 8 | |
| S-LAH64 | 7 | |
| S-NPH4 | 7 | |
| S-LAL14 | 7 | |
| S-TIH4 | 7 | |
| NBFD3 | 7 | |
| S-TIM25 | 7 | |
| S-TIM27 | 6 | |
| S-BAL35 | 6 | |
| S-NPH2 | 6 | |
| S-TIM35 | 6 | |
| TAFD30 | 6 | |
| S-TIH11 | 5 | |
| S-LAH55V | 5 | |
| S-NBH56 | 5 | |
| S-TIM28 | 5 | |
| S-NPH53 | 5 | |
| S-FPM3 | 5 | |
| S-TIL25 | 4 | |
| S-BAL42 | 4 | |
| S-LAL8 | 4 | |
| E-FD15 | 4 | |
| S-NBH8 | 4 | |
| S-NBH52V | 4 | |
| S-NBH55 | 4 | |
| S-TIH6 | 4 | |
| SF6 | 4 | |
| S-LAH51 | 4 | |
| S-TIL27 | 3 | |
| S-LAM66 | 3 | |
| S-NSL5 | 3 | |
| S-TIH10 | 3 | |
| S-LAH65V | 3 | |
| S-BSL7 | 3 | |
| S-LAH66 | 3 | |
| S-LAH65 | 3 | |
| S-BAM4 | 3 | |
| S-NBM51 | 3 | |
| S-BAH27 | 3 | |
| S-BSM81 | 3 | |
| S-NBH5 | 3 | |
| E-FD5 | 3 | |
| S-NBH52 | 3 | |
| S-FPM2 | 3 | |
| TAFD5F | 3 | |
| TAF5 | 3 | |
| S-LAM55 | 3 | |
| S-TIH23 | 3 | |
| S-BAL14 | 3 | |
| S-NPH5 | 3 | |
| S-LAH55 | 3 | |
| S-LAH98 | 3 | |
| S-LAH59 | 2 | |
| S-BSM14 | 2 | |
| S-LAH52 | 2 | |
| S-NPH1 | 2 | |
| S-TIH53W | 2 | |
| S-LAM54 | 2 | |
| N-SK14 | 2 | |
| SF2 | 2 | |
| S-LAH93 | 2 | |
| S-BSM71 | 2 | |
| E-FD4 | 2 | |
| S-LAH99 | 2 | |
| S-TIH13 | 2 | |
| SF4 | 2 | |
| N-SK16 | 2 | |
| S-LAL59 | 2 | |
| S-BSM18 | 2 | |
| S-LAM2 | 2 | |
| S-BAH28 | 2 | |
| NBFD11 | 2 | |
| S-NBH51 | 2 | |
| S-LAH96 | 2 | |
| E-FDS1 | 2 | |
| S-PHM52 | 2 | |
| S-LAH63Q | 2 | |
| FCD515 | 2 | |
| TAFD37 | 2 | |
| S-PHM53 | 2 | |
| S-TIM5 | 1 | |
| S-LAL18 | 1 | |
| TAFD45 | 1 | |
| S-NPH3 | 1 | |
| S-LAH60 | 1 | |
| S-LAM51 | 1 | |
| S-LAL13 | 1 | |
| S-LAM60 | 1 | |
| E-FD2 | 1 | |
| S-FPL51 | 1 | |
| H-ZF88 | 1 | |
| S-LAH63 | 1 | |
| S-NSL3 | 1 | |
| S-LAH53 | 1 | |
| TAFD55 | 1 | |
| S-LAM3 | 1 | |
| S-NBH53V | 1 | |
| LAC12 | 1 | |
| TAFD33 | 1 | |
| K-VC89 | 1 | |
| TAFD65 | 1 | |
| S-BAL2 | 1 | |
| N-SK2 | 1 | |

## Mismatches by lens

### [SONY FE 28-70mm F2 GM](../src/lens-data/sony/SonyFE2870mmf2GM.data.ts) — WO 2025/263124 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 2 | `S-FPM3 (OHARA)` | S-FPM3 | 1.59489 | 1.53775 | -0.0571 |
| 6A | `S-LAH55 (OHARA)` | S-LAH55 | 1.77373 | 1.83481 | +0.0611 |
| 8 | `S-TIH14 (OHARA)` | S-TIH14 | 1.77660 | 1.76182 | -0.0148 |
| 9 | `S-NPH4 (OHARA)` | S-NPH4 | 1.93024 | 1.89286 | -0.0374 |
| 11 | `S-BSM14 (OHARA)` | S-BSM14 | 1.69980 | 1.60311 | -0.0967 |
| 14A | `S-LAH98 (OHARA)` | S-LAH98 | 1.85612 | 1.95375 | +0.0976 |
| 17 | `S-BAL35 (OHARA)` | S-BAL35 | 1.57125 | 1.58913 | +0.0179 |
| 23 | `S-TIH23 (OHARA)` | S-TIH23 | 1.86252 | 1.78470 | -0.0778 |
| 25A | `S-LAH98 (OHARA)` | S-LAH98 | 1.85612 | 1.95375 | +0.0976 |
| 32 | `S-TIH23 (OHARA)` | S-TIH23 | 1.86252 | 1.78470 | -0.0778 |

### [CANON EF-S 10-18mm f/4.5-5.6 IS STM](../src/lens-data/canon/CanonEFS1018mmf4.data.ts) — JP 2015-31869 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 9 | `S-TIM27 (OHARA)` | S-TIM27 | 1.72047 | 1.63980 | -0.0807 |
| 13 | `S-LAH55V (OHARA)` | S-LAH55V | 1.91082 | 1.83481 | -0.0760 |
| 14 | `S-TIM22 (OHARA)` | S-TIM22 | 1.60342 | 1.64769 | +0.0443 |
| 17 | `S-LAH59 (OHARA)` | S-LAH59 | 1.83481 | 1.81600 | -0.0188 |
| 18 | `S-TIM5 (OHARA)` | S-TIM5 | 1.64769 | 1.60342 | -0.0443 |
| 22 | `S-LAH55V (OHARA)` | S-LAH55V | 1.91082 | 1.83481 | -0.0760 |
| 24 | `S-LAH55V (OHARA)` | S-LAH55V | 1.91082 | 1.83481 | -0.0760 |
| 25 | `S-BSM14 (OHARA)` | S-BSM14 | 1.58313 | 1.60311 | +0.0200 |

### [FUJIFILM FUJINON GF 110mm f/2 R LM WR](../src/lens-data/fujifilm/FujifilmGF110mmf2RLM.data.ts) — US 2018/0100988 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |
| 5 | `S-BAM4 (OHARA)` | S-BAM4 | 1.56732 | 1.60562 | +0.0383 |
| 6 | `TAFD25 (HOYA)` | TAFD25 | 1.88300 | 1.90366 | +0.0207 |
| 8 | `S-NBM51 (OHARA)` | S-NBM51 | 1.63980 | 1.61340 | -0.0264 |
| 12 | `S-TIH53 (OHARA)` | S-TIH53 | 1.95906 | 1.84666 | -0.1124 |
| 13 | `S-LAH64 (OHARA)` | S-LAH64 | 1.85150 | 1.78800 | -0.0635 |
| 16 | `S-TIM25 (OHARA)` | S-TIM25 | 1.68893 | 1.67270 | -0.0162 |

### [FUJIFILM FUJINON GF80mmF1.7 R WR](../src/lens-data/fujifilm/FujifilmGF80mmf17R.data.ts) — US 2021/0294073 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `S-TIM35 (OHARA)` | S-TIM35 | 1.72825 | 1.69895 | -0.0293 |
| 5 | `S-NBH56 (OHARA)` | S-NBH56 | 1.75500 | 1.85478 | +0.0998 |
| 8 | `S-BAH27 (OHARA)` | S-BAH27 | 1.57099 | 1.70154 | +0.1305 |
| 12 | `S-TIM27 (OHARA)` | S-TIM27 | 1.67270 | 1.63980 | -0.0329 |
| 16 | `S-LAH93 (OHARA)` | S-LAH93 | 1.88300 | 1.90525 | +0.0222 |
| 19 | `S-BSM71 (OHARA)` | S-BSM71 | 1.51680 | 1.64850 | +0.1317 |
| 21 | `S-BSM81 (OHARA)` | S-BSM81 | 1.64769 | 1.64000 | -0.0077 |

### [NIKON AF-S NIKKOR 200-500mm f/5.6E ED VR](../src/lens-data/nikon/NikonNikkorAFS200500mmf56.data.ts) — JP 2014-209144 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `NBFD11 (HOYA)` | NBFD11 | 1.80400 | 1.78590 | -0.0181 |
| 6 | `S-TIM27 (OHARA)` | S-TIM27 | 1.60342 | 1.63980 | +0.0364 |
| 12 | `S-NBH51 (OHARA)` | S-NBH51 | 1.74330 | 1.74950 | +0.0062 |
| 14 | `S-BAL35 (OHARA)` | S-BAL35 | 1.60738 | 1.58913 | -0.0183 |
| 15 | `S-BAH28 (OHARA)` | S-BAH28 | 1.65844 | 1.72342 | +0.0650 |
| 23 | `S-NBH51 (OHARA)` | S-NBH51 | 1.74330 | 1.74950 | +0.0062 |
| 29 | `S-TIM2 (OHARA)` | S-TIM2 | 1.58144 | 1.62004 | +0.0386 |

### [NIKON PC NIKKOR 19mm f/4E ED](../src/lens-data/nikon/NikonNikkorPCE19mmf4E.data.ts) — JP 2017-161685 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 9 | `NBFD3 (HOYA)` | NBFD3 | 1.64769 | 1.80450 | +0.1568 |
| 12 | `TAFD25 (HOYA)` | TAFD25 | 1.83481 | 1.90366 | +0.0688 |
| 15 | `NBFD3 (HOYA)` | NBFD3 | 1.64769 | 1.80450 | +0.1568 |
| 18 | `S-TIM28 (OHARA)` | S-TIM28 | 1.59270 | 1.68893 | +0.0962 |
| 21 | `S-NSL5 (OHARA)` | S-NSL5 | 1.51742 | 1.52249 | +0.0051 |
| 23 | `TAFD55 (HOYA)` | TAFD55 | 1.91082 | 2.00100 | +0.0902 |
| 27 | `TAFD25 (HOYA)` | TAFD25 | 1.83481 | 1.90366 | +0.0688 |

### [OLYMPUS M.ZUIKO DIGITAL ED 40-150mm f/2.8 PRO](../src/lens-data/olympus/OlympusMZuiko40150mmf28PRO.data.ts) — US 2015/0168697 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-TIH18 (OHARA)` | S-TIH18 | 1.78470 | 1.72151 | -0.0632 |
| 6 | `S-TIH4 (OHARA)` | S-TIH4 | 1.80810 | 1.75520 | -0.0529 |
| 8 | `S-BAH27 (OHARA)` | S-BAH27 | 1.80000 | 1.70154 | -0.0985 |
| 10 | `S-LAM66 (OHARA)` | S-LAM66 | 1.83481 | 1.80100 | -0.0338 |
| 16 | `S-BSM81 (OHARA)` | S-BSM81 | 1.59282 | 1.64000 | +0.0472 |
| 21 | `S-NBH53V (OHARA)` | S-NBH53V | 1.74320 | 1.73800 | -0.0052 |
| 23 | `S-TIM25 (OHARA)` | S-TIM25 | 1.62004 | 1.67270 | +0.0527 |

### [CANON RF 28-70mm F2 L USM](../src/lens-data/canon/CanonRF2870mmf2L.data.ts) — JP 2020-118807 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6A | `S-LAM54 (OHARA)` | S-LAM54 | 1.76902 | 1.75700 | -0.0120 |
| 12 | `S-LAH60 (OHARA)` | S-LAH60 | 1.88300 | 1.83400 | -0.0490 |
| 19 | `S-NBH8 (OHARA)` | S-NBH8 | 1.73800 | 1.72047 | -0.0175 |
| 27 | `S-NBH56 (OHARA)` | S-NBH56 | 1.80610 | 1.85478 | +0.0487 |
| 29A | `S-LAH66 (OHARA)` | S-LAH66 | 1.85400 | 1.77250 | -0.0815 |
| 32 | `S-NPH2 (OHARA)` | S-NPH2 | 2.00100 | 1.92286 | -0.0781 |

### [HASSELBLAD HC 4/210](../src/lens-data/hasselblad/HasselbladHC210mmf4.data.ts) — US 6,445,511 B1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 4 | `S-NBM51 (OHARA)` | S-NBM51 | 1.65412 | 1.61340 | -0.0407 |
| 6 | `S-TIM2 (OHARA)` | S-TIM2 | 1.58144 | 1.62004 | +0.0386 |
| 8 | `S-TIH53 (OHARA)` | S-TIH53 | 1.80518 | 1.84666 | +0.0415 |
| 12 | `S-TIH11 (OHARA)` | S-TIH11 | 1.71736 | 1.78472 | +0.0674 |
| 15 | `S-TIH53 (OHARA)` | S-TIH53 | 1.80518 | 1.84666 | +0.0415 |
| 16 | `S-TIH14 (OHARA)` | S-TIH14 | 1.74000 | 1.76182 | +0.0218 |

### [NIKON AF-S NIKKOR 120-300mm f/2.8E FL ED SR VR](../src/lens-data/nikon/NikonNikkorAFS120300mmf28.data.ts) — JP 2020-177057 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 12 | `OHARA S-NBH52V` | S-NBH52V | 1.75575 | 1.67300 | -0.0828 |
| 16 | `OHARA S-LAM55` | S-LAM55 | 1.75500 | 1.76200 | +0.0070 |
| 22 | `OHARA S-NPH4` | S-NPH4 | 1.91082 | 1.89286 | -0.0180 |
| 29 | `OHARA S-NPH2` | S-NPH2 | 2.00100 | 1.92286 | -0.0781 |
| 32 | `OHARA S-BAH28` | S-BAH28 | 1.72916 | 1.72342 | -0.0057 |
| 40 | `OHARA S-NPH2` | S-NPH2 | 2.00100 | 1.92286 | -0.0781 |

### [NIKON NIKKOR Z 35mm f/1.2 S](../src/lens-data/nikon/NikonNikkorZ35mmf12S.data.ts) — JP 2025-52870A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 5 | `Ultra-high-index dense flint (921240, HOYA TAFD5F / HIKARI E-FDS3HT)` | TAFD5F | 1.92119 | 1.83481 | -0.0864 |
| 7 | `S-NBH52 (738323, OHARA S-NBH52)` | S-NBH52 | 1.73800 | 1.67300 | -0.0650 |
| 9 | `S-LAH79 (954323, OHARA S-LAH79)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |
| 16 | `S-NBH52 (738323, OHARA S-NBH52)` | S-NBH52 | 1.73800 | 1.67300 | -0.0650 |
| 19 | `S-NBH55 (720347, OHARA S-NBH55)` | S-NBH55 | 1.72047 | 1.80000 | +0.0795 |
| 30 | `S-NBH56 (789284, OHARA S-NBH56)` | S-NBH56 | 1.78880 | 1.85478 | +0.0660 |

### [PENTAX-DA★ 50-135mm F2.8 ED [IF] SDM](../src/lens-data/pentax/PentaxDA50135mmf28.data.ts) — US 7,289,274 B1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-LAH66 (OHARA)` | S-LAH66 | 1.74400 | 1.77250 | +0.0285 |
| 6 | `S-TIH53 (OHARA)` | S-TIH53 | 1.80518 | 1.84666 | +0.0415 |
| 17 | `S-LAH64 (OHARA)` | S-LAH64 | 1.77250 | 1.78800 | +0.0155 |
| 20 | `S-TIH53 (OHARA)` | S-TIH53 | 1.80518 | 1.84666 | +0.0415 |
| 22 | `S-LAH64 (OHARA)` | S-LAH64 | 1.77250 | 1.78800 | +0.0155 |
| 29 | `S-LAH59 (OHARA)` | S-LAH59 | 1.80100 | 1.81600 | +0.0150 |

### [SIGMA 50mm F1.4 DG DN | Art](../src/lens-data/sigma/SigmaDGDNArt50mmf14.data.ts) — JP 2023-183894 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-NPH53 (OHARA)` | S-NPH53 | 1.92286 | 1.84666 | -0.0762 |
| 3 | `S-TIL25 (OHARA)` | S-TIL25 | 1.51742 | 1.58144 | +0.0640 |
| 9 | `K-VC89 (Sumita) / FCD515 class — SLD fluorophosphate crown` | K-VC89 | 1.59282 | 1.80998 | +0.2172 |
| 10 | `S-TIH11 (OHARA)` | S-TIH11 | 1.69895 | 1.78472 | +0.0858 |
| 20 | `TAFD65 (Hoya)` | TAFD65 | 2.00100 | 2.05090 | +0.0499 |
| 23 | `S-TIM22 (OHARA)` | S-TIM22 | 1.62004 | 1.64769 | +0.0276 |

### [SIGMA 85mm F1.4 DG HSM | Art](../src/lens-data/sigma/Sigma85mmf14Art.data.ts) — JP2018-5099A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `FCD515 (HOYA)` | FCD515 | 1.55032 | 1.59282 | +0.0425 |
| 7 | `NBFD3 (HOYA)` | NBFD3 | 1.73800 | 1.80450 | +0.0665 |
| 9 | `NBFD3 (HOYA)` | NBFD3 | 1.73800 | 1.80450 | +0.0665 |
| 13 | `FCD515 (HOYA)` | FCD515 | 1.55032 | 1.59282 | +0.0425 |
| 18 | `TAFD37 (HOYA)` | TAFD37 | 1.69895 | 1.90043 | +0.2015 |
| 21 | `NBFD3 (HOYA)` | NBFD3 | 1.73800 | 1.80450 | +0.0665 |

### [CANON FD 50mm f/1.2 L](../src/lens-data/canon/CanonFD50mmf12L.data.ts) — US 4,364,644

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `OHARA S-LAH58 (804466)` | S-LAH58 | 1.80400 | 1.88300 | +0.0790 |
| 3A | `OHARA S-LAH52 (744447)` | S-LAH52 | 1.74400 | 1.79952 | +0.0555 |
| 9 | `OHARA S-LAH64 (883408)` | S-LAH64 | 1.88300 | 1.78800 | -0.0950 |
| 11 | `OHARA S-LAL18 (773496)` | S-LAL18 | 1.77250 | 1.72916 | -0.0433 |
| 13 | `OHARA S-BAL35* (623582; provisional, Δν_d=−1.12)` | S-BAL35 | 1.62299 | 1.58913 | -0.0339 |

### [CANON RF 15-35mm f/2.8 L IS USM](../src/lens-data/canon/CanonRF1535f28.data.ts) — US 2020/0257181 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3A | `S-LAH65V (OHARA)` | S-LAH65V | 1.85400 | 1.80400 | -0.0500 |
| 7 | `S-NPH1 (OHARA)` | S-NPH1 | 1.85478 | 1.80809 | -0.0467 |
| 15 | `TAFD25 (HOYA)` | TAFD25 | 2.00069 | 1.90366 | -0.0970 |
| 25 | `TAFD45 (HOYA)` | TAFD45 | 2.05090 | 1.95375 | -0.0972 |
| 27A | `S-LAH65V (OHARA)` | S-LAH65V | 1.85400 | 1.80400 | -0.0500 |

### [CANON RF 85mm f/1.2L USM](../src/lens-data/canon/CanonRF85mmf12L.data.ts) — US 2020/0012073 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 16 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |
| 18 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |
| 19 | `S-TIM22 (OHARA)` | S-TIM22 | 1.62004 | 1.64769 | +0.0276 |
| 21 | `S-TIM27 (OHARA)` | S-TIM27 | 1.68893 | 1.63980 | -0.0491 |
| 23 | `S-LAH64 (OHARA)` | S-LAH64 | 1.90043 | 1.78800 | -0.1124 |

### [LEICA APO-VARIO-ELMARIT-SL 90–280 mm f/2.8–4](../src/lens-data/leica/LeicaAPOVarioElmaritSL90280mmf284.data.ts) — JP 2016-139125 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-LAH79 (OHARA)` | S-LAH79 | 1.90366 | 2.00330 | +0.0996 |
| 25 | `S-TIM28 (OHARA)` | S-TIM28 | 1.80610 | 1.68893 | -0.1172 |
| 34 | `S-TIH13 (OHARA)` | S-TIH13 | 1.80518 | 1.74077 | -0.0644 |
| 35 | `S-NBM51 (OHARA)` | S-NBM51 | 1.58144 | 1.61340 | +0.0320 |
| 39 | `S-NBH5 (OHARA)` | S-NBH5 | 1.72342 | 1.65412 | -0.0693 |

### [NIKON NIKKOR Z 35mm f/1.8 S](../src/lens-data/nikon/NikonZ35f18S.data.ts) — JP 2019-090947A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |
| 4 | `S-TIM2 (OHARA)` | S-TIM2 | 1.60342 | 1.62004 | +0.0166 |
| 6 | `S-TIH14 (OHARA)` | S-TIH14 | 1.68893 | 1.76182 | +0.0729 |
| 7 | `S-LAH51 (OHARA)` | S-LAH51 | 1.85150 | 1.78590 | -0.0656 |
| 14 | `S-TIM25 (OHARA)` | S-TIM25 | 1.61293 | 1.67270 | +0.0598 |

### [NIKON NIKKOR Z 50mm f/1.2 S](../src/lens-data/nikon/NikonNikkorZ50f12.data.ts) — WO 2021/241230 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `E-FDS1-W (HIKARI)` | E-FDS1 | 1.94595 | 1.92286 | -0.0231 |
| 5 | `S-TIL25 (OHARA)` | S-TIL25 | 1.55298 | 1.58144 | +0.0285 |
| 16 | `S-NBH52V (OHARA)` | S-NBH52V | 1.73800 | 1.67300 | -0.0650 |
| 25A | `S-NBH56 (OHARA)` | S-NBH56 | 1.76450 | 1.85478 | +0.0903 |
| 29 | `S-LAH79 (OHARA)` | S-LAH79 | 1.90265 | 2.00330 | +0.1007 |

### [SIGMA DP3 MERRILL 50mm f/2.8](../src/lens-data/sigma/SigmaDP3M50mmf28.data.ts) — JP 2014-126652 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-LAH55 (Ohara) / TAC8 (Hoya) — Δnd = 0, ΔVd = +0.04` | S-LAH55 | 1.88300 | 1.83481 | -0.0482 |
| 3 | `S-PHM52 (Ohara) — exact match` | S-PHM52 | 1.59282 | 1.61800 | +0.0252 |
| 7 | `S-NPH2 (Ohara) — exact match` | S-NPH2 | 1.90366 | 1.92286 | +0.0192 |
| 8 | `S-LAH58 (Ohara) / TAC4 (Hoya) — exact match` | S-LAH58 | 1.83481 | 1.88300 | +0.0482 |
| 16 | `TAFD37 (Hoya) — tentative; S-LAH65 (Ohara): Δnd = +0.0002` | TAFD37 | 1.80420 | 1.90043 | +0.0962 |

### [SONY FE 24-70mm f/2.8 GM II](../src/lens-data/sony/SonyFE2470mmf28GMII.data.ts) — WO 2023/181666 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 8A | `S-LAH52 class (OHARA)` | S-LAH52 | 1.77002 | 1.79952 | +0.0295 |
| 18 | `S-FPM2 (OHARA)` | S-FPM2 | 1.43700 | 1.59522 | +0.1582 |
| 22 | `S-NPH5 (OHARA)` | S-NPH5 | 2.00100 | 1.85896 | -0.1420 |
| 25 | `S-FPM2 (OHARA)` | S-FPM2 | 1.43700 | 1.59522 | +0.1582 |
| 34 | `S-NPH4 (OHARA)` | S-NPH4 | 1.94595 | 1.89286 | -0.0531 |

### [SONY FE 70-200mm F2.8 GM OSS II](../src/lens-data/sony/SonyFE70200mmf28GMII.data.ts) — JP 2023-039817 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 10 | `TAFD30 (HOYA) — ultra-dense flint` | TAFD30 | 1.86290 | 1.88300 | +0.0201 |
| 17 | `TAFD30 (HOYA) — ultra-dense flint` | TAFD30 | 1.86290 | 1.88300 | +0.0201 |
| 19 | `TAFD30 (HOYA) — ultra-dense flint` | TAFD30 | 1.86290 | 1.88300 | +0.0201 |
| 24 | `S-NPH53 (OHARA) — ultra-dense flint` | S-NPH53 | 1.93323 | 1.84666 | -0.0866 |
| 25 | `S-TIM22 (OHARA) — titanium flint` | S-TIM22 | 1.65803 | 1.64769 | -0.0103 |

### [CANON RF 28-70mm F2.8 IS STM](../src/lens-data/canon/CanonRF2870mmf28.data.ts) — US 2024/0329367 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 8 | `851408 — S-LAH65V (OHARA)` | S-LAH65V | 1.85150 | 1.80400 | -0.0475 |
| 15 | `770297 — S-TIH18 family (OHARA)` | S-TIH18 | 1.77047 | 1.72151 | -0.0490 |
| 17 | `855248 — S-TIH53W family (OHARA)` | S-TIH53W | 1.85478 | 1.84666 | -0.0081 |
| 26 | `744448 — S-LAL14 family (OHARA)` | S-LAL14 | 1.74400 | 1.69680 | -0.0472 |

### [FUJIFILM FUJINON GF120mmF4 R LM OIS WR Macro](../src/lens-data/fujifilm/FujifilmGF120mmf4RLM.data.ts) — US 2018/0059384 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 4 | `S-TIH4 (OHARA)` | S-TIH4 | 1.74950 | 1.75520 | +0.0057 |
| 10 | `S-TIL25 (OHARA)` | S-TIL25 | 1.51742 | 1.58144 | +0.0640 |
| 15 | `S-LAM51 (OHARA)` | S-LAM51 | 1.72000 | 1.70000 | -0.0200 |
| 20 | `S-NBH52V (OHARA)` | S-NBH52V | 1.62588 | 1.67300 | +0.0471 |

### [HASSELBLAD HC 4.5/300](../src/lens-data/hasselblad/HasselbladHC300mmf45.data.ts) — US 2006/0209426 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 5 | `S-FPL51 (OHARA)` | S-FPL51 | 1.43875 | 1.49700 | +0.0582 |
| 9 | `S-TIH53 (OHARA)` | S-TIH53 | 1.80518 | 1.84666 | +0.0415 |
| 13 | `S-LAL14 (OHARA)` | S-LAL14 | 1.74320 | 1.69680 | -0.0464 |
| 15 | `S-TIH53 (OHARA)` | S-TIH53 | 1.80518 | 1.84666 | +0.0415 |

### [HASSELBLAD HC MACRO 4/120](../src/lens-data/hasselblad/HasselbladHC120mmf4Macro.data.ts) — JP 2004-302170 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `E-FD5 (HOYA)` | E-FD5 | 1.72342 | 1.67270 | -0.0507 |
| 8 | `E-FD4 (HOYA)` | E-FD4 | 1.67270 | 1.75520 | +0.0825 |
| 10 | `TAFD30 (HOYA)` | TAFD30 | 1.77250 | 1.88300 | +0.1105 |
| 14 | `E-FD2 (HOYA)` | E-FD2 | 1.80518 | 1.64769 | -0.1575 |

### [LEICA APO-MACRO-ELMARIT-TL 60 mm f/2.8 ASPH.](../src/lens-data/leica/LeicaAPOMacroElmaritTL60mmf28.data.ts) — JP 2016-090725A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3A | `S-BAL35 (OHARA)` | S-BAL35 | 1.58313 | 1.58913 | +0.0060 |
| 9 | `S-TIH14 (OHARA)` | S-TIH14 | 1.80610 | 1.76182 | -0.0443 |
| 11A | `S-BAL35 (OHARA)` | S-BAL35 | 1.58313 | 1.58913 | +0.0060 |
| 13 | `S-LAH79 (OHARA)` | S-LAH79 | 1.91082 | 2.00330 | +0.0925 |

### [LEICA APO-SUMMICRON 43mm f/2 ASPH.](../src/lens-data/leica/LeicaAPO43mmf2.data.ts) — US 2024/0241349 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `S-NPH4 (OHARA)` | S-NPH4 | 2.00069 | 1.89286 | -0.1078 |
| 6 | `S-TIH6 (OHARA)` | S-TIH6 | 1.76182 | 1.80518 | +0.0434 |
| 11 | `S-LAH99 / TAFD33 (OHARA)` | S-LAH99 | 1.95375 | 2.00100 | +0.0473 |
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

### [NIKON AF-S VR Micro-NIKKOR 105mm f/2.8G IF-ED](../src/lens-data/nikon/NikonAFS105f28G.data.ts) — US 7,218,457 B2

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 5 | `S-TIH13 (OHARA)` | S-TIH13 | 1.71736 | 1.74077 | +0.0234 |
| 9 | `S-TIM22 (OHARA)` | S-TIM22 | 1.58267 | 1.64769 | +0.0650 |
| 19 | `S-LAL59 (OHARA)` | S-LAL59 | 1.62041 | 1.73400 | +0.1136 |
| 21 | `S-TIH53 (OHARA), Δνd = 0.21; alt. CDGM H-LAF3B (Δνd = 0.01)` | S-TIH53 | 1.80610 | 1.84666 | +0.0406 |

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

### [PANASONIC LEICA DG SUMMILUX 15mm f/1.7 ASPH](../src/lens-data/panasonic/PanasonicLeicaDG15mmf17.data.ts) — US 2015/0268449 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3A | `S-TIM2 class (585/417, OHARA family)` | S-TIM2 | 1.58542 | 1.62004 | +0.0346 |
| 6 | `S-NPH5 class (754/260, OHARA family)` | S-NPH5 | 1.75409 | 1.85896 | +0.1049 |
| 8 | `TAFD33 (HOYA)` | TAFD33 | 1.91597 | 1.88100 | -0.0350 |
| 12 | `TAF5 (HOYA)` | TAF5 | 1.76864 | 1.81600 | +0.0474 |

### [PANASONIC LEICA DG SUMMILUX 9mm F1.7 ASPH](../src/lens-data/panasonic/PanasonicLeicaDG9mmf17.data.ts) — US 2023/0367186 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3A | `L-BSL7 (OHARA)` | S-BSL7 | 1.53380 | 1.51624 | -0.0176 |
| 7 | `S-PHM52 (OHARA)` | S-PHM52 | 1.59349 | 1.61800 | +0.0245 |
| 8 | `S-TIM35 (OHARA)` | S-TIM35 | 1.59270 | 1.69895 | +0.1062 |
| 17 | `S-NPH2 (OHARA)` | S-NPH2 | 1.94595 | 1.92286 | -0.0231 |

### [PANASONIC LUMIX S 20–60mm F3.5–5.6](../src/lens-data/panasonic/PanasonicLumixS2060mmf3556.data.ts) — JP 2021-179551 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `S-TIH14 (OHARA)` | S-TIH14 | 1.85883 | 1.76182 | -0.0970 |
| 8 | `S-TIH10 (OHARA)` | S-TIH10 | 1.85000 | 1.72825 | -0.1218 |
| 11A | `S-LAH63Q (OHARA)` | S-LAH63Q | 1.80998 | 1.80440 | -0.0056 |
| 15 | `S-TIH4 (OHARA)` | S-TIH4 | 1.80610 | 1.75520 | -0.0509 |

### [SIGMA 30mm f/2.8 (DP2 Merrill)](../src/lens-data/sigma/SigmaDp2M30mmf28.data.ts) — JP 2013-156459 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 5 | `S-TIM28 (OHARA)` | S-TIM28 | 1.69895 | 1.68893 | -0.0100 |
| 8 | `S-LAL59 (OHARA, probable)` | S-LAL59 | 1.77250 | 1.73400 | -0.0385 |
| 10 | `S-TIM2 (OHARA)` | S-TIM2 | 1.58144 | 1.62004 | +0.0386 |
| 14 | `S-LAH79 (OHARA)` | S-LAH79 | 1.91082 | 2.00330 | +0.0925 |

### [SONY FE 20–70 mm F4 G](../src/lens-data/sony/SonyFE2070mmf4G.data.ts) — WO 2023/153076 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-NPH53 (OHARA)` | S-NPH53 | 1.94595 | 1.84666 | -0.0993 |
| 8 | `S-LAH98 (OHARA)` | S-LAH98 | 1.85478 | 1.95375 | +0.0990 |
| 15 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |
| 23 | `S-NPH53 (OHARA)` | S-NPH53 | 1.94595 | 1.84666 | -0.0993 |

### [SONY SONNAR T* E 24mm F1.8 ZA](../src/lens-data/sony/SonyFE24mmf18ZA.data.ts) — US 2013/0033768 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `S-BAL2 (OHARA)` | S-BAL2 | 1.58900 | 1.57099 | -0.0180 |
| 9 | `PCD4 (Hoya) / S-PHM53 (OHARA)` | S-PHM53 | 1.61800 | 1.60300 | -0.0150 |
| 13 | `TAC4 (Hoya) / N-SK2 (Schott)` | N-SK2 | 1.69700 | 1.60738 | -0.0896 |
| 15 | `PCD4 (Hoya) / S-PHM53 (OHARA)` | S-PHM53 | 1.61800 | 1.60300 | -0.0150 |

### [CANON EF 100mm f/2.8L Macro IS USM](../src/lens-data/canon/CanonEF100mmf28LMacroIS.data.ts) — US 7,864,451 B2

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 9 | `S-TIH11 (OHARA)` | S-TIH11 | 1.72047 | 1.78472 | +0.0643 |
| 11 | `S-TIL27 (OHARA)` | S-TIL27 | 1.53172 | 1.57501 | +0.0433 |
| 28 | `S-LAM66 (OHARA)` | S-LAM66 | 1.74320 | 1.80100 | +0.0578 |

### [CANON EF-S 24mm f/2.8 STM](../src/lens-data/canon/CanonEFS24mmf28STM.data.ts) — JP 2015-111192 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-LAH55V (OHARA)` | S-LAH55V | 1.91082 | 1.83481 | -0.0760 |
| 5 | `S-BAL42 (OHARA)` | S-BAL42 | 1.69680 | 1.58313 | -0.1137 |
| 6 | `S-TIH10 (OHARA)` | S-TIH10 | 1.80610 | 1.72825 | -0.0779 |

### [CANON RF 135mm f/1.8 L IS USM](../src/lens-data/canon/CanonRF135f18.data.ts) — US 2023/0213745 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `770297 — S-TIH18 family (OHARA)` | S-TIH18 | 1.77047 | 1.72151 | -0.0490 |
| 9 | `770297 — S-TIH18 family (OHARA)` | S-TIH18 | 1.77047 | 1.72151 | -0.0490 |
| 26 | `S-LAL8 (OHARA)` | S-LAL8 | 1.65844 | 1.71299 | +0.0546 |

### [CANON RF 24-240mm F4-6.3 IS USM](../src/lens-data/canon/CanonRF24240mmf463.data.ts) — US 2020/0142167 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 10 | `E-FD15 type (923/209)` | E-FD15 | 1.92286 | 1.69895 | -0.2239 |
| 27 | `S-TIH53W type (855/248)` | S-TIH53W | 1.85478 | 1.84666 | -0.0081 |
| 32 | `S-TIH10 type (805/254)` | S-TIH10 | 1.80518 | 1.72825 | -0.0769 |

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

### [FUJIFILM FUJINON XF 23mm F1.4 R](../src/lens-data/fujifilm/FujifilmXF23mmf14.data.ts) — US 2014/0368926 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `S-TIM28 (OHARA)` | S-TIM28 | 1.61293 | 1.68893 | +0.0760 |
| 10 | `S-LAL13 (OHARA)` | S-LAL13 | 1.71300 | 1.69350 | -0.0195 |
| 16 | `S-TIM25 (OHARA)` | S-TIM25 | 1.68893 | 1.67270 | -0.0162 |

### [FUJIFILM FUJINON XF 90mm f/2 R LM WR](../src/lens-data/fujifilm/FujifilmXF90mmf2.data.ts) — US 2016/0274335 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 10 | `S-BAM4 (OHARA)` | S-BAM4 | 1.63854 | 1.60562 | -0.0329 |
| 15 | `S-TIM22 (OHARA)` | S-TIM22 | 1.67270 | 1.64769 | -0.0250 |
| 17 | `S-LAM60 (OHARA)` | S-LAM60 | 1.71300 | 1.74320 | +0.0302 |

### [HASSELBLAD HC 80mm f/2.8](../src/lens-data/hasselblad/HasselbladHC80mmf28.data.ts) — US 2001/0050819 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 5 | `S-TIM2 (OHARA)` | S-TIM2 | 1.60342 | 1.62004 | +0.0166 |
| 7 | `S-TIH18 (OHARA)` | S-TIH18 | 1.72825 | 1.72151 | -0.0067 |
| 11 | `S-LAL14 (OHARA)` | S-LAL14 | 1.74330 | 1.69680 | -0.0465 |

### [HASSELBLAD XCD 2,8/65](../src/lens-data/hasselblad/HasselbladXCD65mmf28.data.ts) — US 2020/0319427 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 11 | `S-FPM2 (OHARA)` | S-FPM2 | 1.53775 | 1.59522 | +0.0575 |
| 13 | `S-LAH79 (OHARA)` | S-LAH79 | 1.89190 | 2.00330 | +0.1114 |
| 14 | `S-TIM22 (OHARA)` | S-TIM22 | 1.69895 | 1.64769 | -0.0513 |

### [NIKON 28Ti NIKKOR 28mm f/2.8](../src/lens-data/nikon/Nikon28Ti28mmf28.data.ts) — US 5,528,428

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-NSL3 (OHARA)` | S-NSL3 | 1.53172 | 1.51823 | -0.0135 |
| 3 | `TAFD25 (HOYA)` | TAFD25 | 1.84042 | 1.90366 | +0.0632 |
| 4 | `E-FD4 (HOYA)` | E-FD4 | 1.64831 | 1.75520 | +0.1069 |

### [NIKON AF-S NIKKOR 105mm f/1.4E ED](../src/lens-data/nikon/NikonNikkor105f14E.data.ts) — WO2019/116563 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `S-LAM2 equiv. (Ohara)` | S-LAM2 | 1.72047 | 1.74400 | +0.0235 |
| 19 | `S-LAM2 equiv. (Ohara)` | S-LAM2 | 1.72047 | 1.74400 | +0.0235 |
| 20 | `S-LAH64 equiv. (Ohara)` | S-LAH64 | 1.76684 | 1.78800 | +0.0212 |

### [NIKON AF-S NIKKOR 28mm f/1.4E ED](../src/lens-data/nikon/NikonAFS28f14E.data.ts) — JP2017-227799A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-TIH18 (OHARA)` | S-TIH18 | 1.68893 | 1.72151 | +0.0326 |
| 18 | `S-TIH14 (OHARA)` | S-TIH14 | 1.73800 | 1.76182 | +0.0238 |
| 26A | `S-LAL8 (OHARA)` | S-LAL8 | 1.69350 | 1.71299 | +0.0195 |

### [NIKON AF-S NIKKOR 58mm f/1.4G](../src/lens-data/nikon/Nikon58f14GDesignCandidate.data.ts) — JP2013-019993A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `S-LAL14 / N-LAK12 (lanthanum crown)` | S-LAL14 | 1.75500 | 1.69680 | -0.0582 |
| 6 | `S-TIH4 / N-SF8 (dense flint)` | S-TIH4 | 1.68893 | 1.75520 | +0.0663 |
| 9 | `S-TIH11 / N-SF10 (dense flint)` | S-TIH11 | 1.72825 | 1.78472 | +0.0565 |

### [NIKON AF-S NIKKOR 85mm f/1.4G](../src/lens-data/nikon/NikonNikkor85f14G.data.ts) — US 8,767,319 B2

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 5 | `S-NBH56 (OHARA)` | S-NBH56 | 1.80610 | 1.85478 | +0.0487 |
| 10 | `S-TIH18 (OHARA)` | S-TIH18 | 1.69895 | 1.72151 | +0.0226 |
| 17 | `S-TIH53 (OHARA)` | S-TIH53 | 1.64769 | 1.84666 | +0.1990 |

### [NIKON NIKKOR Z 24-200mm f/4-6.3 VR](../src/lens-data/nikon/NikonNikkorZ24200mmf463VR.data.ts) — JPWO2020/157904 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-LAH96 / TAFD45 (190366/3127)` | S-LAH96 | 1.90366 | 1.76385 | -0.1398 |
| 13 | `TAFD25 equiv. (181600/4659)` | TAFD25 | 1.81600 | 1.90366 | +0.0877 |
| 24 | `S-LAH96 / TAFD45 (190366/3127)` | S-LAH96 | 1.90366 | 1.76385 | -0.1398 |

### [NIKON NIKKOR Z 24-70mm f/4 S](../src/lens-data/nikon/NikonNikkorZ2470mmf4S.data.ts) — WO2019/049372

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 2 | `S-LAL14 (OHARA)` | S-LAL14 | 1.75500 | 1.69680 | -0.0582 |
| 6 | `S-LAL14 (OHARA)` | S-LAL14 | 1.75500 | 1.69680 | -0.0582 |
| 19 | `S-TIH18 (OHARA)` | S-TIH18 | 1.80100 | 1.72151 | -0.0795 |

### [NIKON NIKKOR Z DX 18-140mm f/3.5-6.3 VR](../src/lens-data/nikon/NikonZDX18140mmf3563VR.data.ts) — WO 2022/264542 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 10 | `S-TIH53 (OHARA)` | S-TIH53 | 1.80809 | 1.84666 | +0.0386 |
| 18 | `S-TIM2 (OHARA)` | S-TIM2 | 1.60342 | 1.62004 | +0.0166 |
| 30 | `S-LAH58 (OHARA)` | S-LAH58 | 1.90265 | 1.88300 | -0.0197 |

### [NIKON PC-E NIKKOR 24mm f/3.5D ED](../src/lens-data/nikon/NikonPCENikkor24mmf35DED.data.ts) — JP 2008-151949A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 9 | `S-TIH14 (OHARA)` | S-TIH14 | 1.58144 | 1.76182 | +0.1804 |
| 13 | `S-BAL14 (OHARA)` | S-BAL14 | 1.54814 | 1.56883 | +0.0207 |
| 17 | `S-BAL14 (OHARA)` | S-BAL14 | 1.54814 | 1.56883 | +0.0207 |

### [PANASONIC LEICA DG SUMMILUX 25mm f/1.4 ASPH](../src/lens-data/panasonic/PanasonicLeicaDG25mmf14.data.ts) — JP 2013-3324 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-NPH2 (OHARA)` | S-NPH2 | 2.00060 | 1.92286 | -0.0777 |
| 14A | `S-LAL8 (OHARA)` | S-LAL8 | 1.73077 | 1.71299 | -0.0178 |
| 16A | `S-LAH51 (OHARA)` | S-LAH51 | 1.77250 | 1.78590 | +0.0134 |

### [PENTAX-DA★ 16-50mm f/2.8 ED AL[IF] SDM](../src/lens-data/pentax/PentaxDA1650mmf28.data.ts) — US 7,301,711 B2

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 2 | `S-BAL42 (OHARA)` | S-BAL42 | 1.71300 | 1.58313 | -0.1299 |
| 4 | `S-LAH63Q (OHARA)` | S-LAH63Q | 1.77250 | 1.80440 | +0.0319 |
| 11 | `S-TIM27 (OHARA)` | S-TIM27 | 1.64769 | 1.63980 | -0.0079 |

### [SIGMA 40mm F1.4 DG HSM | Art](../src/lens-data/sigma/SigmaArt40mmf14.data.ts) — JP 2020-012952 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 7 | `E-FD15 (HOYA)` | E-FD15 | 1.64769 | 1.69895 | +0.0513 |
| 22 | `E-FD15 (HOYA)` | E-FD15 | 1.64769 | 1.69895 | +0.0513 |
| 24 | `S-TIM35 (OHARA)` | S-TIM35 | 1.62588 | 1.69895 | +0.0731 |

### [SIGMA 85mm F/1.4 DG DN | Art](../src/lens-data/sigma/SigmaDGDNA85mmf14.data.ts) — JP 2021-85935

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 8 | `Anomalous flint (S-NBH8-class, νd=25.15)` | S-NBH8 | 1.85451 | 1.72047 | -0.1340 |
| 15 | `Anomalous flint (S-NBH8-class, νd=25.15)` | S-NBH8 | 1.85451 | 1.72047 | -0.1340 |
| 18 | `Anomalous flint (S-NBH8-class, νd=25.15)` | S-NBH8 | 1.85451 | 1.72047 | -0.1340 |

### [SONY FE 90 mm F2.8 Macro G OSS](../src/lens-data/sony/SonyFE90mmf28.data.ts) — WO 2016/136352 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 20 | `S-TIM35 (OHARA)` | S-TIM35 | 1.67270 | 1.69895 | +0.0262 |
| 22 | `S-NBH55 (OHARA)` | S-NBH55 | 1.90370 | 1.80000 | -0.1037 |
| 24 | `S-BAH27 (OHARA)` | S-BAH27 | 1.65840 | 1.70154 | +0.0431 |

### [SONY SONNAR T* FE 35mm F2.8 ZA](../src/lens-data/sony/SonyFE35mmf28ZA.data.ts) — JP 2015-41012 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `Dense flint, 800/255 class — S-TIH6 (OHARA) or FD60 (Hoya)` | S-TIH6 | 1.80000 | 1.80518 | +0.0052 |
| 10 | `NBFD11 (Hoya)` | NBFD11 | 1.63000 | 1.78590 | +0.1559 |
| 12A | `S-TIM28 (OHARA)` | S-TIM28 | 1.68000 | 1.68893 | +0.0089 |

### [VOIGTLÄNDER APO-LANTHAR 180mm f/4 SL Close Focus](../src/lens-data/voigtlander/VoigtlanderApoLanthar180mmf4.data.ts) — JP 2003-270529 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 10 | `S-LAH51 (OHARA)` | S-LAH51 | 1.80610 | 1.78590 | -0.0202 |
| 11 | `S-TIH4 (OHARA)` | S-TIH4 | 1.72825 | 1.75520 | +0.0269 |
| 15 | `S-LAH51 (OHARA)` | S-LAH51 | 1.80610 | 1.78590 | -0.0202 |

### [VOIGTLÄNDER ULTRON Vintage Line 28mm F2 Aspherical](../src/lens-data/voigtlander/VoigtlanderUltron28f2.data.ts) — JP2022-100641A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 4 | `S-LAH58 (OHARA) / N-LASF46A (Schott)` | S-LAH58 | 1.91082 | 1.88300 | -0.0278 |
| 6 | `S-LAH58 (OHARA)` | S-LAH58 | 1.91082 | 1.88300 | -0.0278 |
| 7 | `E-FD15 (HOYA) / N-SF14 (Schott)` | E-FD15 | 1.76182 | 1.69895 | -0.0629 |

### [CANON EF 50mm f/1.0L USM](../src/lens-data/canon/CanonEF50mmf1L.data.ts) — US 4,717,245

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 5A | `S-NSL5 (OHARA)` | S-NSL5 | 1.51742 | 1.52249 | +0.0051 |
| 8 | `S-NSL5 (OHARA)` | S-NSL5 | 1.51742 | 1.52249 | +0.0051 |

### [CANON RF24-105mm F2.8 L IS USM Z](../src/lens-data/canon/CanonRF24105mmf28Z.data.ts) — US 2024/0192474 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 19 | `Extreme dense flint — OHARA S-NPH4 (001/291)` | S-NPH4 | 2.00100 | 1.89286 | -0.1081 |
| 42 | `Extreme dense flint — OHARA S-NPH3 (001/255)` | S-NPH3 | 2.00069 | 1.95906 | -0.0416 |

### [CANON SERENAR 28mm f/3.5](../src/lens-data/canon/CanonSerenar28mmf35.data.ts) — US 2,645,974

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 7 | `SK14 (Schott)` | N-SK14 | 1.62040 | 1.60311 | -0.0173 |
| 9 | `SK14 (Schott)` | N-SK14 | 1.62040 | 1.60311 | -0.0173 |

### [HASSELBLAD HC 3.5/50](../src/lens-data/hasselblad/HasselbladHC50mmf4.data.ts) — US 2003/0011895 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 5 | `S-NPH4 (OHARA)` | S-NPH4 | 1.78470 | 1.89286 | +0.1082 |
| 14 | `S-NBH52 (OHARA)` | S-NBH52 | 1.63980 | 1.67300 | +0.0332 |

### [HASSELBLAD XCD 2,5/90V](../src/lens-data/hasselblad/HasselbladXCD90mmf25V.data.ts) — JP 2022-99402 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-LAH55V (OHARA)` | S-LAH55V | 1.72916 | 1.83481 | +0.1056 |
| 9 | `S-NPH4 (OHARA)` | S-NPH4 | 1.85896 | 1.89286 | +0.0339 |

### [LEICA ELMARIT-R 28mm f/2.8](../src/lens-data/leica/LeicaElmarit28mmf28.data.ts) — US 3,591,257

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `SF6 (SCHOTT)` | SF6 | 1.81265 | 1.80518 | -0.0075 |
| 11 | `SF6 (SCHOTT)` | SF6 | 1.81265 | 1.80518 | -0.0075 |

### [MINOLTA MD ROKKOR 50mm f/1.4](../src/lens-data/minolta/MinoltaRokkor50mmf14MD.data.ts) — US 4,182,550

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `E-LAF7 / TAFD5F (HOYA)` | TAFD5F | 1.76500 | 1.83481 | +0.0698 |
| 10 | `S-NBH55 class (OHARA, near match Δnd = 0.001)` | S-NBH55 | 1.78100 | 1.80000 | +0.0190 |

### [NIKON AF NIKKOR 85mm f/1.4D IF](../src/lens-data/nikon/Nikon85f14D.data.ts) — US 5,640,277

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 15 | `Very Dense Lanthanum Flint (TAFD30)` | TAFD30 | 1.86994 | 1.88300 | +0.0131 |
| 19 | `Lanthanum Crown (S-LAM66)` | S-LAM66 | 1.74810 | 1.80100 | +0.0529 |

### [NIKON AF-S NIKKOR 16-35mm f/4G ED VR](../src/lens-data/nikon/NikonNikkorAFS1635mmf4.data.ts) — US 2010/0238560 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1A | `LAM family (cf. HOYA E-FD5)` | E-FD5 | 1.76690 | 1.67270 | -0.0942 |
| 16 | `S-LAM54 (OHARA)` | S-LAM54 | 1.70154 | 1.75700 | +0.0555 |

### [NIKON L35AF 35mm f/2.8](../src/lens-data/nikon/NikonL35AF35mmf28.data.ts) — US 4,457,596

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `TAF5 (1773/494)` | TAF5 | 1.77279 | 1.81600 | +0.0432 |
| 7 | `TAF5 (1773/494)` | TAF5 | 1.77279 | 1.81600 | +0.0432 |

### [NIKON NIKKOR Z 100-400mm f/4.5-5.6 VR S](../src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts) — JP2022-92388A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 13 | `S-LAM3 (OHARA)` | S-LAM3 | 1.74100 | 1.71700 | -0.0240 |
| 32 | `S-LAH99 (OHARA)` | S-LAH99 | 1.95375 | 2.00100 | +0.0473 |

### [NIKON NIKKOR Z 28mm f/2.8](../src/lens-data/nikon/NikonZ28f28.data.ts) — WO 2022/071249 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `S-NPH1 (OHARA)` | S-NPH1 | 2.00100 | 1.80809 | -0.1929 |
| 7 | `S-TIH14 (OHARA)` | S-TIH14 | 1.80518 | 1.76182 | -0.0434 |

### [NIKON NIKKOR Z 40mm f/2](../src/lens-data/nikon/NikonNikkorZ40mmf2.data.ts) — JP 2021-189351A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 2 | `S-TIH23 (OHARA)` | S-TIH23 | 1.71736 | 1.78470 | +0.0673 |
| 6 | `S-LAH64 (OHARA)` | S-LAH64 | 1.80400 | 1.78800 | -0.0160 |

### [NIKON NIKKOR Z 58mm f/0.95 S Noct](../src/lens-data/nikon/NikonZ58f095SNoct.data.ts) — WO2019/229849 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 24 | `Dense flint (near S-NBH52V)` | S-NBH52V | 1.69895 | 1.67300 | -0.0260 |
| 27 | `Lanthanum crown (no confirmed catalog match; near TAFD5F)` | TAFD5F | 1.76554 | 1.83481 | +0.0693 |

### [NIKON NIKKOR Z DX 16-50mm f/3.5-6.3 VR](../src/lens-data/nikon/NikonZDX1650mmf3563VR.data.ts) — WO 2020/012638 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 10 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |
| 17 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |

### [NIKON NIKKOR-N Auto 24mm f/2.8](../src/lens-data/nikon/NikonNikkorAuto24f28.data.ts) — US 3,622,227

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 10 | `SF56A (Schott) / S-TIH6 (Ohara)` | S-TIH6 | 1.78470 | 1.80518 | +0.0205 |
| 12 | `SF56A (Schott) / S-TIH6 (Ohara)` | S-TIH6 | 1.78470 | 1.80518 | +0.0205 |

### [PANASONIC LUMIX S 35mm F1.8](../src/lens-data/panasonic/PanasonicS35mmf18.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 8 | `H-LAK53A (CDGM) / S-LAL8 class (OHARA) — lanthanum crown, code 729/547` | S-LAL8 | 1.72916 | 1.71299 | -0.0162 |
| 11 | `S-LAH55 (OHARA) / CDGM equivalent — dense lanthanum flint, code 806/333` | S-LAH55 | 1.80610 | 1.83481 | +0.0287 |

### [PANASONIC LUMIX S PRO 50mm f/1.4](../src/lens-data/panasonic/PanasonicSPro50mmf14.data.ts) — WO 2020/158622 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 7A | `LAH-type (808/409, PGM-moldable, uncertain — S-LAH93 region)` | S-LAH93 | 1.80755 | 1.90525 | +0.0977 |
| 19 | `S-NPH5 (OHARA)` | S-NPH5 | 1.94595 | 1.85896 | -0.0870 |

### [PENTAX-110 50mm f/2.8](../src/lens-data/pentax/Pentax11050mmf28.data.ts) — US 4,289,385

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 7 | `S-TIH11 (OHARA)` | S-TIH11 | 1.74077 | 1.78472 | +0.0440 |
| 9 | `S-TIM22 (OHARA)` | S-TIM22 | 1.66446 | 1.64769 | -0.0168 |

### [SIGMA dp0 Quattro 14mm f/4](../src/lens-data/sigma/SigmaDp0Quattro14mmf4.data.ts) — JP 2016-139087 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 12 | `TAFD25 (HOYA) / S-LAH55 (OHARA)` | TAFD25 | 1.83481 | 1.90366 | +0.0688 |
| 18 | `E-FDS1 (HOYA) / S-TIH6 (OHARA)` | E-FDS1 | 1.80610 | 1.92286 | +0.1168 |

### [SONY FE 135mm F1.8 GM](../src/lens-data/sony/SonyFE135mmf18GM.data.ts) — WO 2019/187633

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 9A | `S-BAL35 (OHARA)` | S-BAL35 | 1.58313 | 1.58913 | +0.0060 |
| 14 | `S-LAL14 (OHARA)` | S-LAL14 | 1.72916 | 1.69680 | -0.0324 |

### [VIVITAR SERIES 1 70–210mm f/2.8–4 VMC](../src/lens-data/vivitar/VivitarSeries170210mmf284.data.ts) — US 4,758,073

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 7 | `S-LAH65 class (Ohara)` | S-LAH65 | 1.77300 | 1.80400 | +0.0310 |
| 9 | `S-BSM71 (Ohara)` | S-BSM71 | 1.64000 | 1.64850 | +0.0085 |

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

### [CANON EF 40mm f/2.8 STM](../src/lens-data/canon/CanonEF40mmf28.data.ts) — US 8,970,966 B2

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 2 | `S-TIL25 (OHARA)` | S-TIL25 | 1.53172 | 1.58144 | +0.0497 |

### [CANON RF 24-50mm F4.5-6.3 IS STM](../src/lens-data/canon/CanonRF2450mmf463.data.ts) — US 2023/0213739 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-BSL7 (OHARA 639/554)` | S-BSL7 | 1.63854 | 1.51624 | -0.1223 |

### [CANON RF 50mm f/1.2 L USM](../src/lens-data/canon/CanonRF50mmf12L.data.ts) — US 2019/0265441 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `S-TIL27 (OHARA)` | S-TIL27 | 1.65412 | 1.57501 | -0.0791 |

### [CANON SERENAR 50mm f/1.8](../src/lens-data/canon/CanonSerenar50mmf18.data.ts) — US 2,681,594 C

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 4 | `NBFD3 (HOYA)` | NBFD3 | 1.74000 | 1.80450 | +0.0645 |

### [CARL ZEISS JENA PANCOLAR 50mm f/2](../src/lens-data/carl-zeiss-jena/CarlZeissJenaPancolar50mmf2.data.ts) — GB 850,117 C

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 4 | `SF2 equivalent (Jena in-house, 672/323)` | SF2 | 1.67246 | 1.64769 | -0.0248 |

### [FUJIFILM FUJINON XF 50mm f/1.0 R WR](../src/lens-data/fujifilm/FujifilmXF50f1.data.ts) — US 2021/0231927 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 7 | `S-NPH53 (Ohara)` | S-NPH53 | 1.95906 | 1.84666 | -0.1124 |

### [FUJIFILM FUJINON XF 60mmF2.4 R Macro](../src/lens-data/fujifilm/FujifilmXF60mmf24R.data.ts) — US 2014/0247506 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 9 | `S-TIL27 (OHARA) — probable (νd corrected to ≈52.2; see header note)` | S-TIL27 | 1.51742 | 1.57501 | +0.0576 |

### [Laowa 58 mm f/2.8 2× Ultra-Macro APO](../src/lens-data/laowa/Laowa58mmf28MacroAPO.data.ts)

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `H-ZF88 (CDGM)` | H-ZF88 | 1.78472 | 1.94595 | +0.1612 |

### [LEICA ELCAN 50mm f/2](../src/lens-data/leica/LeicaElcan50mmf2.data.ts) — US 3,649,104

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 5 | `≈SF4 (dense flint)` | SF4 | 1.74710 | 1.75520 | +0.0081 |

### [NIKON AI Nikkor 135mm f/2](../src/lens-data/nikon/NikonAI135mmf2.data.ts) — US 4,062,630

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `HOYA NBFD3 (717/481)` | NBFD3 | 1.71700 | 1.80450 | +0.0875 |

### [NIKON NIKKOR 35mm f/2.8 (35Ti)](../src/lens-data/nikon/Nikon35Ti35mmf28.data.ts) — US 5,243,468

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `Hoya BACD5 (nd=1.69680 / νd=55.5; Δnd≈0, Δνd=+0.1)` | N-SK16 | 1.69680 | 1.62041 | -0.0764 |

### [NIKON NIKKOR Z 135mm f/1.8 S Plena](../src/lens-data/nikon/NikonZ135f18.data.ts) — WO 2024/147268 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 26 | `Lanthanum flint (near S-LAM55)` | S-LAM55 | 1.78590 | 1.76200 | -0.0239 |

### [NIKON NIKKOR Z 26mm f/2.8](../src/lens-data/nikon/NikonZ26f28.data.ts) — WO 2023/190222 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 4 | `S-TIM2 (OHARA)` | S-TIM2 | 1.59270 | 1.62004 | +0.0273 |

### [OLYMPUS G.ZUIKO AUTO-S 50mm f/1.4](../src/lens-data/olympus/OlympusZuikoAutoS50mmf14.data.ts) — US 4,094,588

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 5 | `BaF-type (581-408; OHARA S-TIM25 family — close)` | S-TIM25 | 1.58140 | 1.67270 | +0.0913 |

### [OLYMPUS OM ZUIKO AUTO-W 21mm f/2](../src/lens-data/olympus/OlympusZuikoAuto21mmf2.data.ts) — US 4,210,388

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 5 | `LAC12 / LaK10 (OHARA / Schott)` | LAC12 | 1.77250 | 1.67790 | -0.0946 |

### [OLYMPUS ZUIKO AUTO-MACRO 90mm f/2](../src/lens-data/olympus/OlympusZuikoAutoMacro90mmf2.data.ts) — US 4,792,219

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 17 | `BSC7 (HOYA)` | S-BSL7 | 1.65160 | 1.51624 | -0.1354 |

### [OLYMPUS ZUIKO AUTO-S 50mm f/1.2](../src/lens-data/olympus/OlympusZuikoAutoS50mmf12.data.ts) — US 4,099,843

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `S-LAH65 (OHARA) / TAFD25 (HOYA)` | S-LAH65 | 1.83400 | 1.80400 | -0.0300 |

### [PENTAX FA 31mm F1.8 AL Limited](../src/lens-data/pentax/PentaxFA31mmf18ALLtd.data.ts) — US 6,560,042 B2

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 7 | `TAFD30 (HOYA)` | TAFD30 | 1.80100 | 1.88300 | +0.0820 |

### [PENTAX-110 24mm f/2.8](../src/lens-data/pentax/Pentax11024mmf28.data.ts) — US 4,223,982

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `SF6 (Schott) / S-TIH6 (Ohara)` | SF6 | 1.72825 | 1.80518 | +0.0769 |

### [PENTAX-F 85mm f/2.8 Soft](../src/lens-data/pentax/PentaxF85mmf28Soft.data.ts) — US 5,267,086

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `TAFD25 (HOYA)` | TAFD25 | 1.80440 | 1.90366 | +0.0993 |

### [RICOH GR 28mm f/2.8](../src/lens-data/ricoh/RicohGR28f28.data.ts) — US 5,760,973

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 4 | `S-TIM35 (OHARA) / FD110 (HOYA)` | S-TIM35 | 1.68893 | 1.69895 | +0.0100 |

### [SIGMA DP2X 24mm f/2.8](../src/lens-data/sigma/SigmaDP2X24mmf28.data.ts) — JP 2010-101979 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 11 | `S-LAM55 (≈) / LACL60 (OHARA / HOYA)` | S-LAM55 | 1.74180 | 1.76200 | +0.0202 |

### [SONY PLANAR T* 50mm F1.4 ZA SSM](../src/lens-data/sony/SonyPlanarT50mmf14ZA.data.ts) — US 2014/0071331 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `E-FD5 class (HOYA/HIKARI equivalent, 593/355)` | E-FD5 | 1.59270 | 1.67270 | +0.0800 |

### [SONY PLANAR T* FE 50mm F1.4 ZA](../src/lens-data/sony/SonyPlanarFE50mmf14ZA.data.ts) — WO 2017/138250 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `S-TIM27 (OHARA)` | S-TIM27 | 1.71735 | 1.63980 | -0.0776 |

### [SONY SONNAR T* FE 55mm F1.8 ZA](../src/lens-data/sony/SonyFE55mmf18ZA.data.ts) — US 2015/0092100 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-TIM2 (OHARA)` | S-TIM2 | 1.58144 | 1.62004 | +0.0386 |

### [VOIGTLÄNDER MACRO APO-LANTHAR 125mm f/2.5 SL](../src/lens-data/voigtlander/VoigtlanderMacroApoLanthar125mmf25.data.ts) — JP 2002-090622 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 12 | `S-BAL14 (OHARA) / K-BAL14 (Sumita)` | S-BAL14 | 1.58913 | 1.56883 | -0.0203 |

