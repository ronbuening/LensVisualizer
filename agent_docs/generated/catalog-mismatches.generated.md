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

- **287** lenses scanned
- **3258** glass surfaces examined
- **3252** surfaces with non-empty `glass` strings
- **2539** of those resolved to a catalog entry
- **31** mismatches found (1.2% of resolved surfaces)
- **12** distinct lens files affected

## Most-frequent mismatched catalog targets

Glass labels that get rejected most often. A high count here often points to a single glass
annotation pattern (e.g. an obsolete name, a `probable` guess) that's used across many lenses.

| Catalog entry | Rejected surfaces | Notes |
|---|---|---|
| S-FPM3 | 3 | |
| S-TIH6 | 2 | |
| S-NBH52V | 2 | |
| S-LAH79 | 2 | |
| S-LAH58 | 2 | |
| S-LAL14 | 1 | |
| S-TIH4 | 1 | |
| S-TIH11 | 1 | |
| NBFD15 | 1 | |
| TAFD30 | 1 | |
| S-LAM66 | 1 | |
| H-LAK6A | 1 | |
| S-FPM4 | 1 | |
| E-FDS1 | 1 | |
| S-TIL25 | 1 | |
| S-NBH56 | 1 | |
| S-LAM55 | 1 | |
| S-TIM2 | 1 | |
| S-NPH1 | 1 | |
| S-TIH14 | 1 | |
| H-ZLAF68C | 1 | |
| TAFD5F | 1 | |
| S-TIM35 | 1 | |
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

### [NIKON AF-S MICRO-NIKKOR 60mm f/2.8G ED](../../src/lens-data/nikon/NikonAFSMicroNikkor60f28G.data.ts) — US 7,898,744 B2

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 3 | `H-LAK6A (CDGM) or Nikon melt` | H-LAK6A | 1.63854 | 1.69350 | +0.0550 |
| 13 | `S-FPM4 (OHARA) — ED glass` | S-FPM4 | 1.49782 | 1.52841 | +0.0306 |

### [NIKON NIKKOR Z 28mm f/2.8](../../src/lens-data/nikon/NikonZ28f28.data.ts) — WO 2022/071249 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 6 | `S-NPH1 (OHARA)` | S-NPH1 | 2.00100 | 1.80809 | -0.1929 |
| 7 | `S-TIH14 (OHARA)` | S-TIH14 | 1.80518 | 1.76182 | -0.0434 |

### [NIKON NIKKOR-N Auto 24mm f/2.8](../../src/lens-data/nikon/NikonNikkorAuto24f28.data.ts) — US 3,622,227

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 10 | `SF56A (Schott) / S-TIH6 (Ohara)` | S-TIH6 | 1.78470 | 1.80518 | +0.0205 |
| 12 | `SF56A (Schott) / S-TIH6 (Ohara)` | S-TIH6 | 1.78470 | 1.80518 | +0.0205 |

### [NIKON NIKKOR Z 135mm f/1.8 S Plena](../../src/lens-data/nikon/NikonZ135f18.data.ts) — WO 2024/147268 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 26 | `Lanthanum flint (near S-LAM55)` | S-LAM55 | 1.78590 | 1.76200 | -0.0239 |

### [NIKON NIKKOR Z 26mm f/2.8](../../src/lens-data/nikon/NikonZ26f28.data.ts) — WO 2023/190222 A1

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 4 | `S-TIM2 (OHARA)` | S-TIM2 | 1.59270 | 1.62004 | +0.0273 |

### [RICOH GR 28mm f/2.8](../../src/lens-data/ricoh/RicohGR28f28.data.ts) — US 5,760,973

| Surface | Glass annotation | Catalog match | Stored nd | Catalog nd | Δnd |
|---|---|---|---|---|---|
| 4 | `S-TIM35 (OHARA) / FD110 (HOYA)` | S-TIM35 | 1.68893 | 1.69895 | +0.0100 |

