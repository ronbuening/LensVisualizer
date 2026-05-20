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

- **235** lenses scanned
- **2678** glass surfaces examined
- **2672** surfaces with non-empty `glass` strings
- **2070** of those resolved to a catalog entry
- **82** mismatches found (4.0% of resolved surfaces)
- **48** distinct lens files affected

## Most-frequent mismatched catalog targets

Glass labels that get rejected most often. A high count here often points to a single glass
annotation pattern (e.g. an obsolete name, a `probable` guess) that's used across many lenses.

| Catalog entry | Rejected surfaces | Notes |
|---|---|---|
| S-LAH79 | 4 | |
| S-TIH18 | 3 | |
| TAFD25 | 3 | |
| S-TIH6 | 3 | |
| S-FPM3 | 3 | |
| S-TIL25 | 2 | |
| S-BSL7 | 2 | |
| S-TIL27 | 2 | |
| NBFD3 | 2 | |
| H-LAK6A | 2 | |
| S-LAL14 | 2 | |
| S-TIH11 | 2 | |
| TAFD30 | 2 | |
| S-FPM4 | 2 | |
| TAF5 | 2 | |
| E-FDS1 | 2 | |
| S-NBH52V | 2 | |
| S-LAM55 | 2 | |
| S-TIM2 | 2 | |
| S-TIH14 | 2 | |
| S-LAH65 | 2 | |
| S-LAH58 | 2 | |
| NBFD13 | 1 | |
| S-LAL8 | 1 | |
| S-NPH53 | 1 | |
| SF4 | 1 | |
| N-SK16 | 1 | |
| S-TIH4 | 1 | |
| NBFD15 | 1 | |
| S-LAM66 | 1 | |
| S-LAM3 | 1 | |
| S-LAH99 | 1 | |
| S-TIH23 | 1 | |
| S-LAH64 | 1 | |
| S-NBH56 | 1 | |
| S-NPH1 | 1 | |
| H-ZLAF68C | 1 | |
| TAFD5F | 1 | |
| LAC12 | 1 | |
| E-CF6 | 1 | |
| SF6 | 1 | |
| S-TIM22 | 1 | |
| S-TIM35 | 1 | |
| S-LAL7 | 1 | |
| H-ZF52 | 1 | |
| S-BAL35 | 1 | |
| NBFD11 | 1 | |
| S-TIM28 | 1 | |
| S-TIM27 | 1 | |
| E-FD5 | 1 | |
| S-BSM71 | 1 | |
| S-BAL14 | 1 | |
| E-F3 | 1 | |
| E-FD15 | 1 | |

## Mismatches by lens

### [NIKON NIKKOR Z 50mm f/1.2 S](../../src/lens-data/nikon/NikonNikkorZ50f12.data.ts) — WO 2021/241230 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `E-FDS1-W (HIKARI)` | E-FDS1 | 1.94595 | 1.92286 | -0.0231 |
| 5 | `S-TIL25 (OHARA)` | S-TIL25 | 1.55298 | 1.58144 | +0.0285 |
| 16 | `S-NBH52V (OHARA)` | S-NBH52V | 1.73800 | 1.67300 | -0.0650 |
| 25A | `S-NBH56 (OHARA)` | S-NBH56 | 1.76450 | 1.85478 | +0.0903 |
| 29 | `S-LAH79 (OHARA)` | S-LAH79 | 1.90265 | 2.00330 | +0.1007 |

### [NIKON NIKKOR Z MC 105mm f/2.8 VR S](../../src/lens-data/nikon/NikonZ105f28.data.ts) — WO 2022/097401 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 4 | `S-FPM3 (OHARA)` | S-FPM3 | 1.59319 | 1.53775 | -0.0554 |
| 6 | `S-FPM3 (OHARA)` | S-FPM3 | 1.59319 | 1.53775 | -0.0554 |
| 17 | `S-FPM3 (OHARA)` | S-FPM3 | 1.59319 | 1.53775 | -0.0554 |
| 19 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |

### [VOIGTLÄNDER ULTRON Vintage Line 28mm F2 Aspherical](../../src/lens-data/voigtlander/VoigtlanderUltron28f2.data.ts) — JP2022-100641A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `E-F3 (HOYA) / SF2 (Schott)` | E-F3 | 1.64769 | 1.61293 | -0.0348 |
| 4 | `S-LAH58 (OHARA) / N-LASF46A (Schott)` | S-LAH58 | 1.91082 | 1.88300 | -0.0278 |
| 6 | `S-LAH58 (OHARA)` | S-LAH58 | 1.91082 | 1.88300 | -0.0278 |
| 7 | `E-FD15 (HOYA) / N-SF14 (Schott)` | E-FD15 | 1.76182 | 1.69895 | -0.0629 |

### [CANON RF 135mm f/1.8 L IS USM](../../src/lens-data/canon/CanonRF135f18.data.ts) — US 2023/0213745 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `770297 — S-TIH18 family (OHARA)` | S-TIH18 | 1.77047 | 1.72151 | -0.0490 |
| 9 | `770297 — S-TIH18 family (OHARA)` | S-TIH18 | 1.77047 | 1.72151 | -0.0490 |
| 26 | `S-LAL8 (OHARA)` | S-LAL8 | 1.65844 | 1.71299 | +0.0546 |

### [NIKON AF NIKKOR 85mm f/1.4D IF](../../src/lens-data/nikon/Nikon85f14D.data.ts) — US 5,640,277

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 5 | `Dense Lanthanum Flint (LaSF3 / NBFD15)` | NBFD15 | 1.79631 | 1.80610 | +0.0098 |
| 15 | `Very Dense Lanthanum Flint (TAFD30)` | TAFD30 | 1.86994 | 1.88300 | +0.0131 |
| 19 | `Lanthanum Crown (S-LAM66)` | S-LAM66 | 1.74810 | 1.80100 | +0.0529 |

### [NIKON AF-S NIKKOR 58mm f/1.4G](../../src/lens-data/nikon/Nikon58f14GDesignCandidate.data.ts) — JP2013-019993A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `S-LAL14 / N-LAK12 (lanthanum crown)` | S-LAL14 | 1.75500 | 1.69680 | -0.0582 |
| 6 | `S-TIH4 / N-SF8 (dense flint)` | S-TIH4 | 1.68893 | 1.75520 | +0.0663 |
| 9 | `S-TIH11 / N-SF10 (dense flint)` | S-TIH11 | 1.72825 | 1.78472 | +0.0565 |

### [NIKON NIKKOR Z 58mm f/0.95 S Noct](../../src/lens-data/nikon/NikonZ58f095SNoct.data.ts) — WO2019/229849 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 7 | `Lanthanum dense flint (near E-LASF013 / H-ZLaF68C)` | H-ZLAF68C | 1.84850 | 1.88300 | +0.0345 |
| 24 | `Dense flint (near S-NBH52V)` | S-NBH52V | 1.69895 | 1.67300 | -0.0260 |
| 27 | `Lanthanum crown (no confirmed catalog match; near TAFD5F)` | TAFD5F | 1.76554 | 1.83481 | +0.0693 |

### [SONY SONNAR T* FE 35mm F2.8 ZA](../../src/lens-data/sony/SonyFE35mmf28ZA.data.ts) — JP 2015-41012 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `Dense flint, 800/255 class — S-TIH6 (OHARA) or FD60 (Hoya)` | S-TIH6 | 1.80000 | 1.80518 | +0.0052 |
| 10 | `NBFD11 (Hoya)` | NBFD11 | 1.63000 | 1.78590 | +0.1559 |
| 12A | `S-TIM28 (OHARA)` | S-TIM28 | 1.68000 | 1.68893 | +0.0089 |

### [NIKON AF-S MICRO-NIKKOR 60mm f/2.8G ED](../../src/lens-data/nikon/NikonAFSMicroNikkor60f28G.data.ts) — US 7,898,744 B2

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `H-LAK6A (CDGM) or Nikon melt` | H-LAK6A | 1.63854 | 1.69350 | +0.0550 |
| 13 | `S-FPM4 (OHARA) — ED glass` | S-FPM4 | 1.49782 | 1.52841 | +0.0306 |

### [NIKON L35AF 35mm f/2.8](../../src/lens-data/nikon/NikonL35AF35mmf28.data.ts) — US 4,457,596

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `TAF5 (1773/494)` | TAF5 | 1.77279 | 1.81600 | +0.0432 |
| 7 | `TAF5 (1773/494)` | TAF5 | 1.77279 | 1.81600 | +0.0432 |

### [NIKON NIKKOR Z 100-400mm f/4.5-5.6 VR S](../../src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts) — JP2022-92388A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 13 | `S-LAM3 (OHARA)` | S-LAM3 | 1.74100 | 1.71700 | -0.0240 |
| 32 | `S-LAH99 (OHARA)` | S-LAH99 | 1.95375 | 2.00100 | +0.0473 |

### [NIKON NIKKOR Z 28mm f/2.8](../../src/lens-data/nikon/NikonZ28f28.data.ts) — WO 2022/071249 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `S-NPH1 (OHARA)` | S-NPH1 | 2.00100 | 1.80809 | -0.1929 |
| 7 | `S-TIH14 (OHARA)` | S-TIH14 | 1.80518 | 1.76182 | -0.0434 |

### [NIKON NIKKOR Z 40mm f/2](../../src/lens-data/nikon/NikonNikkorZ40mmf2.data.ts) — JP 2021-189351A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 2 | `S-TIH23 (OHARA)` | S-TIH23 | 1.71736 | 1.78470 | +0.0673 |
| 6 | `S-LAH64 (OHARA)` | S-LAH64 | 1.80400 | 1.78800 | -0.0160 |

### [NIKON NIKKOR Z DX 16-50mm f/3.5-6.3 VR](../../src/lens-data/nikon/NikonZDX1650mmf3563VR.data.ts) — WO 2020/012638 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 10 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |
| 17 | `S-LAH79 (OHARA)` | S-LAH79 | 1.95375 | 2.00330 | +0.0496 |

### [NIKON NIKKOR-N Auto 24mm f/2.8](../../src/lens-data/nikon/NikonNikkorAuto24f28.data.ts) — US 3,622,227

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 10 | `SF56A (Schott) / S-TIH6 (Ohara)` | S-TIH6 | 1.78470 | 1.80518 | +0.0205 |
| 12 | `SF56A (Schott) / S-TIH6 (Ohara)` | S-TIH6 | 1.78470 | 1.80518 | +0.0205 |

### [OLYMPUS ZUIKO AUTO-S 50mm f/1.2](../../src/lens-data/olympus/OlympusZuikoAutoS50mmf12.data.ts) — US 4,099,843

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `S-LAH65 (OHARA) / TAFD25 (HOYA)` | S-LAH65 | 1.83400 | 1.80400 | -0.0300 |
| 8 | `E-CF6 (HOYA)` | E-CF6 | 1.67790 | 1.51742 | -0.1605 |

### [PENTAX-110 50mm f/2.8](../../src/lens-data/pentax/Pentax11050mmf28.data.ts) — US 4,289,385

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 7 | `S-TIH11 (OHARA)` | S-TIH11 | 1.74077 | 1.78472 | +0.0440 |
| 9 | `S-TIM22 (OHARA)` | S-TIM22 | 1.66446 | 1.64769 | -0.0168 |

### [SIGMA dp0 Quattro 14mm f/4](../../src/lens-data/sigma/SigmaDp0Quattro14mmf4.data.ts) — JP 2016-139087 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 12 | `TAFD25 (HOYA) / S-LAH55 (OHARA)` | TAFD25 | 1.83481 | 1.90366 | +0.0688 |
| 18 | `E-FDS1 (HOYA) / S-TIH6 (OHARA)` | E-FDS1 | 1.80610 | 1.92286 | +0.1168 |

### [SIGMA DP2X 24mm f/2.8](../../src/lens-data/sigma/SigmaDP2X24mmf28.data.ts) — JP 2010-101979 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-LAL7 / LACL5 (OHARA / HOYA)` | S-LAL7 | 1.71300 | 1.65160 | -0.0614 |
| 11 | `S-LAM55 (≈) / LACL60 (OHARA / HOYA)` | S-LAM55 | 1.74180 | 1.76200 | +0.0202 |

### [SONY FE 135mm F1.8 GM](../../src/lens-data/sony/SonyFE135mmf18GM.data.ts) — WO 2019/187633

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 9A | `S-BAL35 (OHARA)` | S-BAL35 | 1.58313 | 1.58913 | +0.0060 |
| 14 | `S-LAL14 (OHARA)` | S-LAL14 | 1.72916 | 1.69680 | -0.0324 |

### [VIVITAR SERIES 1 70–210mm f/2.8–4 VMC](../../src/lens-data/vivitar/VivitarSeries170210mmf284.data.ts) — US 4,758,073

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 7 | `S-LAH65 class (Ohara)` | S-LAH65 | 1.77300 | 1.80400 | +0.0310 |
| 9 | `S-BSM71 (Ohara)` | S-BSM71 | 1.64000 | 1.64850 | +0.0085 |

### [VOIGTLÄNDER NOKTON 50mm f/1.2 X-Mount](../../src/lens-data/voigtlander/VoigtlanderNoktonX50mmf12.data.ts) — JP 2025-58577 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 7 | `S-TIH14 (OHARA)` | S-TIH14 | 1.74077 | 1.76182 | +0.0211 |
| 9 | `S-TIH18 (OHARA)` | S-TIH18 | 1.76182 | 1.72151 | -0.0403 |

### [CANON EF 40mm f/2.8 STM](../../src/lens-data/canon/CanonEF40mmf28.data.ts) — US 8,970,966 B2

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 2 | `S-TIL25 (OHARA)` | S-TIL25 | 1.53172 | 1.58144 | +0.0497 |

### [CANON EF-S 17-55mm f/2.8 IS USM](../../src/lens-data/canon/CanonEFS1755mmf28IS.data.ts) — JP 2007-108398 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 34 | `NBFD13 (HOYA)` | NBFD13 | 1.74950 | 1.80610 | +0.0566 |

### [CANON RF 24-50mm F4.5-6.3 IS STM](../../src/lens-data/canon/CanonRF2450mmf463.data.ts) — US 2023/0213739 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-BSL7 (OHARA 639/554)` | S-BSL7 | 1.63854 | 1.51624 | -0.1223 |

### [CANON RF 50mm f/1.2 L USM](../../src/lens-data/canon/CanonRF50mmf12L.data.ts) — US 2019/0265441 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `S-TIL27 (OHARA)` | S-TIL27 | 1.65412 | 1.57501 | -0.0791 |

### [CANON SERENAR 50mm f/1.8](../../src/lens-data/canon/CanonSerenar50mmf18.data.ts) — US 2,681,594 C

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 4 | `NBFD3 (HOYA)` | NBFD3 | 1.74000 | 1.80450 | +0.0645 |

### [FUJIFILM FUJINON 23mm f/2 (X100V)](../../src/lens-data/fujifilm/FujifilmX100V23mmf2.data.ts) — US 2020/0333569 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `TAFD25 (HOYA)` | TAFD25 | 1.71736 | 1.90366 | +0.1863 |

### [FUJIFILM FUJINON XF 50mm f/1.0 R WR](../../src/lens-data/fujifilm/FujifilmXF50f1.data.ts) — US 2021/0231927 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 7 | `S-NPH53 (Ohara)` | S-NPH53 | 1.95906 | 1.84666 | -0.1124 |

### [FUJIFILM FUJINON XF 60mmF2.4 R Macro](../../src/lens-data/fujifilm/FujifilmXF60mmf24R.data.ts) — US 2014/0247506 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 9 | `S-TIL27 (OHARA) — probable (νd corrected to ≈52.2; see header note)` | S-TIL27 | 1.51742 | 1.57501 | +0.0576 |

### [HASSELBLAD HC 150mm f/3.2](../../src/lens-data/hasselblad/HasselbladHC150mmf32.data.ts) — US 2002/0075570 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 9 | `Lanthanum crown (670/572 code, uncertain; cf. H-LAK6A, CDGM)` | H-LAK6A | 1.67003 | 1.69350 | +0.0235 |

### [LEICA ELCAN 50mm f/2](../../src/lens-data/leica/LeicaElcan50mmf2.data.ts) — US 3,649,104

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 5 | `≈SF4 (dense flint)` | SF4 | 1.74710 | 1.75520 | +0.0081 |

### [NIKON AI Nikkor 135mm f/2](../../src/lens-data/nikon/NikonAI135mmf2.data.ts) — US 4,062,630

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `HOYA NBFD3 (717/481)` | NBFD3 | 1.71700 | 1.80450 | +0.0875 |

### [NIKON NIKKOR 35mm f/2.8 (35Ti)](../../src/lens-data/nikon/Nikon35Ti35mmf28.data.ts) — US 5,243,468

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `Hoya BACD5 (nd=1.69680 / νd=55.5; Δnd≈0, Δνd=+0.1)` | N-SK16 | 1.69680 | 1.62041 | -0.0764 |

### [NIKON NIKKOR Z 135mm f/1.8 S Plena](../../src/lens-data/nikon/NikonZ135f18.data.ts) — WO 2024/147268 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 26 | `Lanthanum flint (near S-LAM55)` | S-LAM55 | 1.78590 | 1.76200 | -0.0239 |

### [NIKON NIKKOR Z 26mm f/2.8](../../src/lens-data/nikon/NikonZ26f28.data.ts) — WO 2023/190222 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 4 | `S-TIM2 (OHARA)` | S-TIM2 | 1.59270 | 1.62004 | +0.0273 |

### [OLYMPUS OM ZUIKO AUTO-W 21mm f/2](../../src/lens-data/olympus/OlympusZuikoAuto21mmf2.data.ts) — US 4,210,388

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 5 | `LAC12 / LaK10 (OHARA / Schott)` | LAC12 | 1.77250 | 1.67790 | -0.0946 |

### [OLYMPUS ZUIKO AUTO-MACRO 90mm f/2](../../src/lens-data/olympus/OlympusZuikoAutoMacro90mmf2.data.ts) — US 4,792,219

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 17 | `BSC7 (HOYA)` | S-BSL7 | 1.65160 | 1.51624 | -0.1354 |

### [PENTAX FA 31mm F1.8 AL Limited](../../src/lens-data/pentax/PentaxFA31mmf18ALLtd.data.ts) — US 6,560,042 B2

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 7 | `TAFD30 (HOYA)` | TAFD30 | 1.80100 | 1.88300 | +0.0820 |

### [PENTAX-110 24mm f/2.8](../../src/lens-data/pentax/Pentax11024mmf28.data.ts) — US 4,223,982

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `SF6 (Schott) / S-TIH6 (Ohara)` | SF6 | 1.72825 | 1.80518 | +0.0769 |

### [PENTAX-F 85mm f/2.8 Soft](../../src/lens-data/pentax/PentaxF85mmf28Soft.data.ts) — US 5,267,086

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `TAFD25 (HOYA)` | TAFD25 | 1.80440 | 1.90366 | +0.0993 |

### [RICOH GR 28mm f/2.8](../../src/lens-data/ricoh/RicohGR28f28.data.ts) — US 5,760,973

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 4 | `S-TIM35 (OHARA) / FD110 (HOYA)` | S-TIM35 | 1.68893 | 1.69895 | +0.0100 |

### [SIGMA DP3 MERRILL 50mm f/2.8](../../src/lens-data/sigma/SigmaDP3M50mmf28.data.ts) — JP 2014-126652 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 4 | `H-ZF52 (CDGM) — exact match, unconfirmed in Ohara/Hoya/Schott` | H-ZF52 | 1.80610 | 1.84666 | +0.0406 |

### [SONY FE 28-70mm F2 GM](../../src/lens-data/sony/SonyFE2870mmf2GM.data.ts) — WO 2025/263124 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 4 | `S-FPM4 (OHARA)` | S-FPM4 | 1.59561 | 1.52841 | -0.0672 |

### [SONY PLANAR T* 50mm F1.4 ZA SSM](../../src/lens-data/sony/SonyPlanarT50mmf14ZA.data.ts) — US 2014/0071331 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `E-FD5 class (HOYA/HIKARI equivalent, 593/355)` | E-FD5 | 1.59270 | 1.67270 | +0.0800 |

### [SONY PLANAR T* FE 50mm F1.4 ZA](../../src/lens-data/sony/SonyPlanarFE50mmf14ZA.data.ts) — WO 2017/138250 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `S-TIM27 (OHARA)` | S-TIM27 | 1.71735 | 1.63980 | -0.0776 |

### [SONY SONNAR T* FE 55mm F1.8 ZA](../../src/lens-data/sony/SonyFE55mmf18ZA.data.ts) — US 2015/0092100 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 1 | `S-TIM2 (OHARA)` | S-TIM2 | 1.58144 | 1.62004 | +0.0386 |

### [VOIGTLÄNDER MACRO APO-LANTHAR 125mm f/2.5 SL](../../src/lens-data/voigtlander/VoigtlanderMacroApoLanthar125mmf25.data.ts) — JP 2002-090622 A

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 12 | `S-BAL14 (OHARA) / K-BAL14 (Sumita)` | S-BAL14 | 1.58913 | 1.56883 | -0.0203 |

