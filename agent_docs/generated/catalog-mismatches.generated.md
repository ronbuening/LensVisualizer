# Catalog Mismatches (auto-generated)

Surfaces where the element's `glass` string resolves to a vendor catalog entry
but its published coordinates disagree with the stored prescription beyond nd ±0.005 or νd ±3.

These are rejected by the safety net in [src/optics/dispersion.ts](../../src/optics/dispersion.ts) — the
dispersion cascade falls through to Abbe rather than trust a misidentified glass label. This
report exists so the team can decide per-case whether to relabel the glass, update the stored `nd`,
or accept the mismatch (some glass annotations in lens-data files are explicitly marked as guesses
with words like "probable" or "approx").

**Regenerate this file** by running `npm test -- catalogMismatchScan`.

## Summary

- **488** lenses scanned
- **5360** glass surfaces examined
- **5353** surfaces with non-empty `glass` strings
- **4532** of those resolved to a catalog entry
- **33** mismatches found (0.7% of resolved surfaces)
- **24** distinct lens files affected

## Most-frequent mismatched catalog targets

Glass labels that get rejected most often. A high count here often points to a single glass
annotation pattern (e.g. an obsolete name, a `probable` guess) that's used across many lenses.

| Catalog entry | Rejected surfaces | Notes |
|---|---|---|
| S-NSL3 | 5 | |
| S-LAH52 | 4 | |
| S-LAH55V | 3 | |
| S-LAH55 | 2 | |
| S-BAL2 | 2 | |
| S-BSM28 | 2 | |
| S-LAH60 | 1 | |
| BAF3 | 1 | |
| S-NSL36 | 1 | |
| S-TIH6 | 1 | |
| NBFD3 | 1 | |
| S-LAM52 | 1 | |
| S-TIM35 | 1 | |
| S-LAH63Q | 1 | |
| S-LAH63 | 1 | |
| S-BAH27 | 1 | |
| S-LAH55VS | 1 | |
| S-PHM52Q | 1 | |
| S-LAH93 | 1 | |
| BACD14 | 1 | |
| S-NBH52 | 1 | |

## Mismatches by lens

### [NIKON AF-S NIKKOR 120-300mm f/2.8 E FL ED SR VR](../../src/lens-data/nikon/NikonNikkorAFS120300mmf28.data.ts) — JP 2020-177057 A

| Surface | Glass annotation | Catalog match | Stored nd/νd | Catalog nd/νd | Δnd | Δνd |
|---|---|---|---|---|---|---|
| 6 | `OHARA S-LAM52 (≈Schott N-KZFS8)` | S-LAM52 | 1.72047 / 34.71 | 1.72000 / 43.69 | -0.0005 | +8.98 |
| 9 | `OHARA S-TIM35` | S-TIM35 | 1.69680 / 55.52 | 1.69895 / 30.13 | +0.0021 | -25.39 |
| 11 | `OHARA S-LAH52` | S-LAH52 | 1.80400 / 46.60 | 1.79952 / 42.23 | -0.0045 | -4.37 |
| 24 | `OHARA S-LAH52` | S-LAH52 | 1.80400 / 46.60 | 1.79952 / 42.23 | -0.0045 | -4.37 |
| 36 | `OHARA S-LAH63Q type` | S-LAH63Q | 1.80518 / 25.41 | 1.80440 / 39.58 | -0.0008 | +14.17 |
| 42 | `OHARA S-LAH52` | S-LAH52 | 1.80400 / 46.60 | 1.79952 / 42.23 | -0.0045 | -4.37 |

### [LEICA APO-VARIO-ELMARIT-SL 90-280mm f/2.8-4](../../src/lens-data/leica/LeicaAPOVarioElmaritSL90280mmf284.data.ts) — JP 2016-139125 A

| Surface | Glass annotation | Catalog match | Stored nd/νd | Catalog nd/νd | Δnd | Δνd |
|---|---|---|---|---|---|---|
| 31 | `S-NSL36 (OHARA)` | S-NSL36 | 1.51823 / 59.00 | 1.51742 / 52.43 | -0.0008 | -6.57 |
| 32 | `S-BSM28 (OHARA)` | S-BSM28 | 1.62041 / 60.30 | 1.61772 / 49.82 | -0.0027 | -10.48 |
| 41 | `S-BSM28 (OHARA)` | S-BSM28 | 1.62041 / 60.30 | 1.61772 / 49.82 | -0.0027 | -10.48 |

### [LEICA APO-MACRO-ELMARIT-TL 60mm f/2.8 ASPH.](../../src/lens-data/leica/LeicaAPOMacroElmaritTL60mmf28.data.ts) — JP 2016-090725A

| Surface | Glass annotation | Catalog match | Stored nd/νd | Catalog nd/νd | Δnd | Δνd |
|---|---|---|---|---|---|---|
| 14 | `S-NSL3 (OHARA)` | S-NSL3 | 1.51742 / 52.15 | 1.51823 / 58.90 | +0.0008 | +6.75 |
| 16 | `S-BAL2 (OHARA)` | S-BAL2 | 1.56883 / 56.04 | 1.57099 / 50.80 | +0.0022 | -5.24 |

### [NIKON AF-S NIKKOR 28mm f/1.4 E ED](../../src/lens-data/nikon/NikonAFS28f14E.data.ts) — JP2017-227799A

| Surface | Glass annotation | Catalog match | Stored nd/νd | Catalog nd/νd | Δnd | Δνd |
|---|---|---|---|---|---|---|
| 8 | `S-BAL2 (OHARA)` | S-BAL2 | 1.56883 / 56.00 | 1.57099 / 50.80 | +0.0022 | -5.20 |
| 21 | `S-TIH6 (OHARA)` | S-TIH6 | 1.80610 / 33.30 | 1.80518 / 25.43 | -0.0009 | -7.87 |

### [CANON RF 15-35mm f/2.8 L IS USM](../../src/lens-data/canon/CanonRF1535f28.data.ts) — US 2020/0257181 A1

| Surface | Glass annotation | Catalog match | Stored nd/νd | Catalog nd/νd | Δnd | Δνd |
|---|---|---|---|---|---|---|
| 19 | `S-LAH55V (OHARA)` | S-LAH55V | 1.83400 / 37.20 | 1.83481 / 42.73 | +0.0008 | +5.53 |

### [CANON RF 24-240mm f/4-6.3 IS USM](../../src/lens-data/canon/CanonRF24240mmf463.data.ts) — US 2020/0142167 A1

| Surface | Glass annotation | Catalog match | Stored nd/νd | Catalog nd/νd | Δnd | Δνd |
|---|---|---|---|---|---|---|
| 35 | `S-LAH60 type (835/427)` | S-LAH60 | 1.83481 / 42.70 | 1.83400 / 37.16 | -0.0008 | -5.54 |

### [CANON RF 85mm f/2 Macro IS STM](../../src/lens-data/canon/CanonRF85mmf2Macro.data.ts) — US 2021/0072505 A1

| Surface | Glass annotation | Catalog match | Stored nd/νd | Catalog nd/νd | Δnd | Δνd |
|---|---|---|---|---|---|---|
| 19 | `S-LAH55 (OHARA)` | S-LAH55 | 1.83400 / 37.20 | 1.83481 / 42.71 | +0.0008 | +5.51 |

### [CANON SERENAR 28mm f/3.5](../../src/lens-data/canon/CanonSerenar28mmf35.data.ts) — US 2,645,974

| Surface | Glass annotation | Catalog match | Stored nd/νd | Catalog nd/νd | Δnd | Δνd |
|---|---|---|---|---|---|---|
| 6 | `BaF3 (Schott)` | BAF3 | 1.57850 / 41.70 | 1.58267 / 46.48 | +0.0042 | +4.78 |

### [FUJIFILM FUJINON XF 18mm f/2 R](../../src/lens-data/fujifilm/FujifilmXF18mmf2.data.ts) — US 2014/0240851 A1

| Surface | Glass annotation | Catalog match | Stored nd/νd | Catalog nd/νd | Δnd | Δνd |
|---|---|---|---|---|---|---|
| 3 | `S-LAH55V (OHARA)` | S-LAH55V | 1.83400 / 37.16 | 1.83481 / 42.73 | +0.0008 | +5.57 |

### [FUJIFILM FUJINON XF 90mm f/2 R LM WR](../../src/lens-data/fujifilm/FujifilmXF90mmf2.data.ts) — US 2016/0274335 A1

| Surface | Glass annotation | Catalog match | Stored nd/νd | Catalog nd/νd | Δnd | Δνd |
|---|---|---|---|---|---|---|
| 19 | `S-NSL3 (OHARA)` | S-NSL3 | 1.51742 / 52.43 | 1.51823 / 58.90 | +0.0008 | +6.47 |

### [NIKON AF-S MICRO-NIKKOR 60mm f/2.8 G ED](../../src/lens-data/nikon/NikonAFSMicroNikkor60f28G.data.ts) — US 7,898,744 B2

| Surface | Glass annotation | Catalog match | Stored nd/νd | Catalog nd/νd | Δnd | Δνd |
|---|---|---|---|---|---|---|
| 20 | `NBFD3 (HOYA)` | NBFD3 | 1.80100 / 34.96 | 1.80450 / 39.63 | +0.0035 | +4.67 |

### [NIKON AF-S NIKKOR 200-500mm f/5.6 E ED VR](../../src/lens-data/nikon/NikonNikkorAFS200500mmf56.data.ts) — JP 2014-209144 A

| Surface | Glass annotation | Catalog match | Stored nd/νd | Catalog nd/νd | Δnd | Δνd |
|---|---|---|---|---|---|---|
| 21 | `S-LAH55V (OHARA) / TAFD5 (HOYA)` | S-LAH55V | 1.83400 / 37.34 | 1.83481 / 42.73 | +0.0008 | +5.39 |

### [NIKON AF-S NIKKOR 80-400mm f/4.5-5.6 G ED VR](../../src/lens-data/nikon/NikonNikkorAFS80400mmf4556G.data.ts) — US 2020/0049962 A1

| Surface | Glass annotation | Catalog match | Stored nd/νd | Catalog nd/νd | Δnd | Δνd |
|---|---|---|---|---|---|---|
| 6 | `S-LAH52 (OHARA)` | S-LAH52 | 1.80100 / 34.90 | 1.79952 / 42.23 | -0.0015 | +7.33 |

### [NIKON NIKKOR Z 135mm f/1.8 S Plena](../../src/lens-data/nikon/NikonZ135f18.data.ts) — WO 2024/147268 A1

| Surface | Glass annotation | Catalog match | Stored nd/νd | Catalog nd/νd | Δnd | Δνd |
|---|---|---|---|---|---|---|
| 13 | `Barium crown (near S-BAH27)` | S-BAH27 | 1.69680 / 55.52 | 1.70154 / 41.24 | +0.0047 | -14.28 |

### [NIKON NIKKOR Z 35mm f/1.8 S](../../src/lens-data/nikon/NikonZ35f18S.data.ts) — JP 2019-090947A

| Surface | Glass annotation | Catalog match | Stored nd/νd | Catalog nd/νd | Δnd | Δνd |
|---|---|---|---|---|---|---|
| 11A | `S-LAH55VS (OHARA), probable` | S-LAH55VS | 1.83441 / 37.28 | 1.83481 / 42.74 | +0.0004 | +5.46 |

### [NIKON NIKKOR Z 50mm f/1.2 S](../../src/lens-data/nikon/NikonNikkorZ50f12.data.ts) — WO 2021/241230 A1

| Surface | Glass annotation | Catalog match | Stored nd/νd | Catalog nd/νd | Δnd | Δνd |
|---|---|---|---|---|---|---|
| 32A | `S-NSL3 (OHARA)` | S-NSL3 | 1.51680 / 64.00 | 1.51823 / 58.90 | +0.0014 | -5.10 |

### [NIKON NIKKOR Z DX 18-140mm f/3.5-6.3 VR](../../src/lens-data/nikon/NikonZDX18140mmf3563VR.data.ts) — WO 2022/264542 A1

| Surface | Glass annotation | Catalog match | Stored nd/νd | Catalog nd/νd | Δnd | Δνd |
|---|---|---|---|---|---|---|
| 16 | `S-NSL3 (OHARA, Δνd ≈ 0.23)` | S-NSL3 | 1.51742 / 52.20 | 1.51823 / 58.90 | +0.0008 | +6.70 |

### [NIKON PC-E NIKKOR 24mm f/3.5 D ED](../../src/lens-data/nikon/NikonPCENikkor24mmf35DED.data.ts) — JP 2008-151949A

| Surface | Glass annotation | Catalog match | Stored nd/νd | Catalog nd/νd | Δnd | Δνd |
|---|---|---|---|---|---|---|
| 4 | `S-LAH63 (OHARA)` | S-LAH63 | 1.80100 / 34.96 | 1.80440 / 39.59 | +0.0034 | +4.63 |

### [PANASONIC LEICA DG SUMMILUX 9mm f/1.7 ASPH](../../src/lens-data/panasonic/PanasonicLeicaDG9mmf17.data.ts) — US 2023/0367186 A1

| Surface | Glass annotation | Catalog match | Stored nd/νd | Catalog nd/νd | Δnd | Δνd |
|---|---|---|---|---|---|---|
| 20 | `S-PHM52Q (OHARA)` | S-PHM52Q | 1.62299 / 58.10 | 1.61800 / 63.32 | -0.0050 | +5.22 |

### [PANASONIC LUMIX S 20-60mm f/3.5-5.6](../../src/lens-data/panasonic/PanasonicLumixS2060mmf3556.data.ts) — JP 2021-179551 A

| Surface | Glass annotation | Catalog match | Stored nd/νd | Catalog nd/νd | Δnd | Δνd |
|---|---|---|---|---|---|---|
| 3 | `S-LAH93 (OHARA)` | S-LAH93 | 1.90366 / 31.30 | 1.90525 / 35.04 | +0.0016 | +3.74 |

### [PENTAX F 85mm f/2.8 Soft](../../src/lens-data/pentax/PentaxF85mmf28Soft.data.ts) — US 5,267,086

| Surface | Glass annotation | Catalog match | Stored nd/νd | Catalog nd/νd | Δnd | Δνd |
|---|---|---|---|---|---|---|
| 1 | `BACD14 (HOYA) / N-SSK5 equivalent (658509)` | BACD14 | 1.65844 / 50.90 | 1.60311 / 60.70 | -0.0553 | +9.80 |

### [PENTAX FA 31mm f/1.8 AL Limited](../../src/lens-data/pentax/PentaxFA31mmf18ALLtd.data.ts) — US 6,560,042 B2

| Surface | Glass annotation | Catalog match | Stored nd/νd | Catalog nd/νd | Δnd | Δνd |
|---|---|---|---|---|---|---|
| 9 | `S-NSL3 (OHARA)` | S-NSL3 | 1.51742 / 52.40 | 1.51823 / 58.90 | +0.0008 | +6.50 |

### [SIGMA 85mm f/1.4 DG HSM | Art](../../src/lens-data/sigma/Sigma85mmf14Art.data.ts) — JP2018-5099A

| Surface | Glass annotation | Catalog match | Stored nd/νd | Catalog nd/νd | Δnd | Δνd |
|---|---|---|---|---|---|---|
| 24 | `S-NBH52 (OHARA)` | S-NBH52 | 1.67270 / 32.17 | 1.67300 / 38.15 | +0.0003 | +5.98 |

### [VOIGTLÄNDER APO-LANTHAR 180mm f/4 SL Close Focus](../../src/lens-data/voigtlander/VoigtlanderApoLanthar180mmf4.data.ts) — JP 2003-270529 A

| Surface | Glass annotation | Catalog match | Stored nd/νd | Catalog nd/νd | Δnd | Δνd |
|---|---|---|---|---|---|---|
| 7 | `S-LAH55 (OHARA)` | S-LAH55 | 1.83400 / 37.30 | 1.83481 / 42.71 | +0.0008 | +5.41 |
