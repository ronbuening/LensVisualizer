# Glass Relabels by Lens (auto-generated)

Per-lens work queue combining raw catalog mismatches with candidate relabel targets.
Use this when auditing a patent lens-by-lens: review all rows for a lens together,
then update the lens data, companion analysis/audit notes, and regenerate the glass reports.

**Regenerate this file** by running `npm test -- glassRelabelByLensScan`.
Regenerate the full glass report set with `npm run generate:glass-reports`.

## Summary

- **43** mismatched surfaces across **20** lens files
- **37** surfaces have at least one candidate
- **7** surfaces have high-confidence candidate ranking
- **6** surfaces have no catalog candidate and need patent review

## Relabels by Lens

### [NIKON NIKKOR Z 50mm f/1.2 S](../../src/lens-data/nikon/NikonNikkorZ50f12.data.ts) - WO 2021/241230 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 3 | `E-FDS1-W (HIKARI)` | 1.94595 / 18.00 | E-FDS1 (Δnd=-0.0231) | H-ZF88 (Δnd=+0.0000, Δvd=-0.06)<br>FDS18 (Δnd=-0.0000, Δvd=-0.02) | Medium | Yes - choose candidate |
| 5 | `S-TIL25 (OHARA)` | 1.55298 / 55.10 | S-TIL25 (Δnd=+0.0285) | No catalog candidate | Patent review | Yes - no catalog match |
| 16 | `S-NBH52V (OHARA)` | 1.73800 / 32.30 | S-NBH52V (Δnd=-0.0650) | J-KZFH9 (Δnd=+0.0000, Δvd=-0.04)<br>S-NBH53V (Δnd=-0.0000, Δvd=+0.03)<br>BPH50 (Δnd=+0.0020, Δvd=-0.59) | Choose by context | Yes - choose candidate |
| 25A | `S-NBH56 (OHARA)` | 1.76450 / 49.10 | S-NBH56 (Δnd=+0.0903) | S-LAH96 (Δnd=-0.0006, Δvd=-0.61)<br>Q-LASFPH2S (Δnd=+0.0009, Δvd=-2.35)<br>MC-TAF101-100 (Δnd=+0.0045, Δvd=+0.19) | Choose by context | Yes - choose candidate |
| 29 | `S-LAH79 (OHARA)` | 1.90265 / 35.80 | S-LAH79 (Δnd=+0.1007) | J-LASFH9 (Δnd=+0.0000, Δvd=-0.07)<br>TAFD37 (Δnd=-0.0022, Δvd=+1.57)<br>TAFD37A (Δnd=-0.0022, Δvd=+1.57) | Choose by context | Yes - choose candidate |

### [NIKON NIKKOR Z MC 105mm f/2.8 VR S](../../src/lens-data/nikon/NikonZ105f28.data.ts) - WO 2022/097401 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 4 | `S-FPM3 (OHARA)` | 1.59319 / 67.90 | S-FPM3 (Δnd=-0.0554) | J-PSKH1 (Δnd=+0.0000, Δvd=+0.00)<br>J-PSKH4 (Δnd=+0.0003, Δvd=-0.90)<br>FCD505 (Δnd=-0.0004, Δvd=+0.73) | Choose by context | Yes - choose candidate |
| 6 | `S-FPM3 (OHARA)` | 1.59319 / 67.90 | S-FPM3 (Δnd=-0.0554) | J-PSKH1 (Δnd=+0.0000, Δvd=+0.00)<br>J-PSKH4 (Δnd=+0.0003, Δvd=-0.90)<br>FCD505 (Δnd=-0.0004, Δvd=+0.73) | Choose by context | Yes - choose candidate |
| 17 | `S-FPM3 (OHARA)` | 1.59319 / 67.90 | S-FPM3 (Δnd=-0.0554) | J-PSKH1 (Δnd=+0.0000, Δvd=+0.00)<br>J-PSKH4 (Δnd=+0.0003, Δvd=-0.90)<br>FCD505 (Δnd=-0.0004, Δvd=+0.73) | Choose by context | Yes - choose candidate |
| 19 | `S-LAH79 (OHARA)` | 1.95375 / 32.33 | S-LAH79 (Δnd=+0.0496) | S-LAH98 (Δnd=-0.0000, Δvd=-0.01)<br>TAFD45 (Δnd=-0.0000, Δvd=-0.01)<br>J-LASFH15 (Δnd=-0.0037, Δvd=-2.96) | Choose by context | Yes - choose candidate |

### [VOIGTLÄNDER ULTRON Vintage Line 28mm F2 Aspherical](../../src/lens-data/voigtlander/VoigtlanderUltron28f2.data.ts) - JP2022-100641A

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 3 | `E-F3 (HOYA) / SF2 (Schott)` | 1.64769 / 33.84 | E-F3 (Δnd=-0.0348) | E-FD2 (Δnd=-0.0000, Δvd=+0.00)<br>SF2 (Δnd=-0.0000, Δvd=+0.01)<br>S-TIM22 (Δnd=-0.0000, Δvd=-0.05) | Choose by context | Yes - choose candidate |
| 4 | `S-LAH58 (OHARA) / N-LASF46A (Schott)` | 1.91082 / 35.25 | S-LAH58 (Δnd=-0.0278) | TAFD35 (Δnd=+0.0000, Δvd=+0.00) | High | Check lens notes |
| 6 | `S-LAH58 (OHARA)` | 1.91082 / 35.25 | S-LAH58 (Δnd=-0.0278) | TAFD35 (Δnd=+0.0000, Δvd=+0.00) | High | Check lens notes |
| 7 | `E-FD15 (HOYA) / N-SF14 (Schott)` | 1.76182 / 26.61 | E-FD15 (Δnd=-0.0629) | S-TIH14 (Δnd=+0.0000, Δvd=-0.09) | High | Check lens notes |

### [NIKON AF NIKKOR 85mm f/1.4D IF](../../src/lens-data/nikon/Nikon85f14D.data.ts) - US 5,640,277

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 5 | `Dense Lanthanum Flint (LaSF3 / NBFD15)` | 1.79631 / 40.90 | NBFD15 (Δnd=+0.0098) | S-LAH52 (Δnd=+0.0032, Δvd=+1.33)<br>S-LAH52Q (Δnd=+0.0032, Δvd=+1.34) | Medium | Yes - choose candidate |
| 15 | `Very Dense Lanthanum Flint (TAFD30)` | 1.86994 / 39.82 | TAFD30 (Δnd=+0.0131) | TAFD32 (Δnd=+0.0008, Δvd=+0.91) | Medium | Yes - choose candidate |
| 19 | `Lanthanum Crown (S-LAM66)` | 1.74810 / 52.30 | S-LAM66 (Δnd=+0.0529) | S-LAM60 (Δnd=-0.0049, Δvd=-2.96) | Medium | Yes - choose candidate |

### [NIKON AF-S NIKKOR 58mm f/1.4G](../../src/lens-data/nikon/Nikon58f14GDesignCandidate.data.ts) - JP2013-019993A

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 3 | `S-LAL14 / N-LAK12 (lanthanum crown)` | 1.75500 / 52.34 | S-LAL14 (Δnd=-0.0582) | J-LASKH2 (Δnd=+0.0000, Δvd=+0.00)<br>N-LAK33B (Δnd=+0.0000, Δvd=-0.04)<br>S-LAH97 (Δnd=+0.0000, Δvd=-0.02) | Choose by context | Yes - choose candidate |
| 6 | `S-TIH4 / N-SF8 (dense flint)` | 1.68893 / 31.16 | S-TIH4 (Δnd=+0.0663) | E-FD8 (Δnd=-0.0000, Δvd=+0.00)<br>S-TIM28 (Δnd=+0.0000, Δvd=-0.08) | Medium | Yes - choose candidate |
| 9 | `S-TIH11 / N-SF10 (dense flint)` | 1.72825 / 28.46 | S-TIH11 (Δnd=+0.0565) | H-ZF4A (Δnd=+0.0000, Δvd=-0.14)<br>S-TIH10 (Δnd=-0.0000, Δvd=+0.00)<br>SF10 (Δnd=+0.0000, Δvd=-0.05) | Choose by context | Yes - choose candidate |

### [NIKON NIKKOR Z 58mm f/0.95 S Noct](../../src/lens-data/nikon/NikonZ58f095SNoct.data.ts) - WO2019/229849 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 7 | `Lanthanum dense flint (near E-LASF013 / H-ZLaF68C)` | 1.84850 / 43.79 | H-ZLAF68C (Δnd=+0.0345) | J-LASFH22 (Δnd=+0.0000, Δvd=+0.00) | High | Check lens notes |
| 24 | `Dense flint (near S-NBH52V)` | 1.69895 / 30.13 | S-NBH52V (Δnd=-0.0260) | E-FD15 (Δnd=-0.0000, Δvd=-0.08)<br>S-TIM35 (Δnd=-0.0000, Δvd=-0.00) | Medium | Yes - choose candidate |
| 27 | `Lanthanum crown (no confirmed catalog match; near TAFD5F)` | 1.76554 / 46.76 | TAFD5F (Δnd=+0.0693) | Q-LASFPH2S (Δnd=-0.0001, Δvd=-0.01)<br>S-LAH96 (Δnd=-0.0017, Δvd=+1.73)<br>MC-TAF101-100 (Δnd=+0.0035, Δvd=+2.53) | Choose by context | Yes - choose candidate |

### [NIKON AF-S MICRO-NIKKOR 60mm f/2.8G ED](../../src/lens-data/nikon/NikonAFSMicroNikkor60f28G.data.ts) - US 7,898,744 B2

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 3 | `H-LAK6A (CDGM) or Nikon melt` | 1.63854 / 55.48 | H-LAK6A (Δnd=+0.0550) | S-BSM18 (Δnd=-0.0000, Δvd=-0.10)<br>K-SK18 (Δnd=+0.0000, Δvd=+0.02) | Medium | Yes - choose candidate |
| 13 | `S-FPM4 (OHARA) — ED glass` | 1.49782 / 82.56 | S-FPM4 (Δnd=+0.0306) | J-FKH1 (Δnd=+0.0000, Δvd=+0.01)<br>J-FK01A (Δnd=-0.0008, Δvd=-0.91)<br>H-FK61 (Δnd=-0.0008, Δvd=-0.95) | Choose by context | Yes - choose candidate |

### [NIKON NIKKOR Z 28mm f/2.8](../../src/lens-data/nikon/NikonZ28f28.data.ts) - WO 2022/071249 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 6 | `S-NPH1 (OHARA)` | 2.00100 / 29.12 | S-NPH1 (Δnd=-0.1929) | S-LAH99 (Δnd=+0.0000, Δvd=+0.02)<br>TAFD55 (Δnd=+0.0000, Δvd=+0.01)<br>S-LAH79 (Δnd=+0.0023, Δvd=-0.85) | Choose by context | Yes - choose candidate |
| 7 | `S-TIH14 (OHARA)` | 1.80518 / 25.45 | S-TIH14 (Δnd=-0.0434) | H-ZF7LA (Δnd=-0.0000, Δvd=+0.01)<br>S-TIH6 (Δnd=+0.0000, Δvd=-0.02)<br>SF6 (Δnd=+0.0000, Δvd=-0.02) | Choose by context | Yes - choose candidate |

### [NIKON NIKKOR Z DX 16-50mm f/3.5-6.3 VR](../../src/lens-data/nikon/NikonZDX1650mmf3563VR.data.ts) - WO 2020/012638 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 10 | `S-LAH79 (OHARA)` | 1.95375 / 32.33 | S-LAH79 (Δnd=+0.0496) | S-LAH98 (Δnd=-0.0000, Δvd=-0.01)<br>TAFD45 (Δnd=-0.0000, Δvd=-0.01)<br>J-LASFH15 (Δnd=-0.0037, Δvd=-2.96) | Choose by context | Yes - choose candidate |
| 17 | `S-LAH79 (OHARA)` | 1.95375 / 32.33 | S-LAH79 (Δnd=+0.0496) | S-LAH98 (Δnd=-0.0000, Δvd=-0.01)<br>TAFD45 (Δnd=-0.0000, Δvd=-0.01)<br>J-LASFH15 (Δnd=-0.0037, Δvd=-2.96) | Choose by context | Yes - choose candidate |

### [NIKON NIKKOR-N Auto 24mm f/2.8](../../src/lens-data/nikon/NikonNikkorAuto24f28.data.ts) - US 3,622,227

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 10 | `SF56A (Schott) / S-TIH6 (Ohara)` | 1.78470 / 26.10 | S-TIH6 (Δnd=+0.0205) | S-TIH23 (Δnd=-0.0000, Δvd=+0.19)<br>SF11 (Δnd=+0.0000, Δvd=-0.34)<br>H-ZF13 (Δnd=+0.0000, Δvd=-0.38) | Choose by context | Yes - choose candidate |
| 12 | `SF56A (Schott) / S-TIH6 (Ohara)` | 1.78470 / 26.10 | S-TIH6 (Δnd=+0.0205) | S-TIH23 (Δnd=-0.0000, Δvd=+0.19)<br>SF11 (Δnd=+0.0000, Δvd=-0.34)<br>H-ZF13 (Δnd=+0.0000, Δvd=-0.38) | Choose by context | Yes - choose candidate |

### [CANON RF 135mm f/1.8 L IS USM](../../src/lens-data/canon/CanonRF135f18.data.ts) - US 2023/0213745 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 6 | `770297 — S-TIH18 family (OHARA)` | 1.77047 / 29.70 | S-TIH18 (Δnd=-0.0490) | No catalog candidate | Patent review | Yes - no catalog match |
| 9 | `770297 — S-TIH18 family (OHARA)` | 1.77047 / 29.70 | S-TIH18 (Δnd=-0.0490) | No catalog candidate | Patent review | Yes - no catalog match |
| 26 | `S-LAL8 (OHARA)` | 1.65844 / 50.90 | S-LAL8 (Δnd=+0.0546) | N-SSK5 (Δnd=+0.0000, Δvd=-0.02) | High | Check lens notes |

### [NIKON NIKKOR Z 100-400mm f/4.5-5.6 VR S](../../src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts) - JP2022-92388A

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 13 | `S-LAM3 (OHARA)` | 1.74100 / 52.60 | S-LAM3 (Δnd=-0.0240) | No catalog candidate | Patent review | Yes - no catalog match |
| 32 | `S-LAH99 (OHARA)` | 1.95375 / 32.30 | S-LAH99 (Δnd=+0.0473) | S-LAH98 (Δnd=-0.0000, Δvd=+0.02)<br>TAFD45 (Δnd=-0.0000, Δvd=+0.02)<br>J-LASFH15 (Δnd=-0.0037, Δvd=-2.93) | Choose by context | Yes - choose candidate |

### [CANON RF 50mm f/1.2 L USM](../../src/lens-data/canon/CanonRF50mmf12L.data.ts) - US 2019/0265441 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 6 | `S-TIL27 (OHARA)` | 1.65412 / 39.68 | S-TIL27 (Δnd=-0.0791) | N-KZFS5 (Δnd=+0.0000, Δvd=+0.02)<br>S-NBH5 (Δnd=-0.0000, Δvd=+0.00) | Medium | Yes - choose candidate |

### [NIKON NIKKOR Z 135mm f/1.8 S Plena](../../src/lens-data/nikon/NikonZ135f18.data.ts) - WO 2024/147268 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 26 | `Lanthanum flint (near S-LAM55)` | 1.78590 / 44.17 | S-LAM55 (Δnd=-0.0239) | NBFD11 (Δnd=-0.0000, Δvd=-0.24)<br>S-LAH51 (Δnd=-0.0000, Δvd=+0.03) | Medium | Yes - choose candidate |

### [NIKON NIKKOR Z 26mm f/2.8](../../src/lens-data/nikon/NikonZ26f28.data.ts) - WO 2023/190222 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 4 | `S-TIM2 (OHARA)` | 1.59270 / 35.30 | S-TIM2 (Δnd=+0.0273) | S-FTM16 (Δnd=+0.0000, Δvd=+0.01) | High | Check lens notes |

### [RICOH GR 28mm f/2.8](../../src/lens-data/ricoh/RicohGR28f28.data.ts) - US 5,760,973

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 4 | `S-TIM35 (OHARA) / FD110 (HOYA)` | 1.68893 / 31.20 | S-TIM35 (Δnd=+0.0100) | E-FD8 (Δnd=-0.0000, Δvd=-0.04)<br>S-TIM28 (Δnd=+0.0000, Δvd=-0.12) | Medium | Yes - choose candidate |

### [SIGMA DP3 MERRILL 50mm f/2.8](../../src/lens-data/sigma/SigmaDP3M50mmf28.data.ts) - JP 2014-126652 A

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 4 | `H-ZF52 (CDGM) — exact match, unconfirmed in Ohara/Hoya/Schott` | 1.80610 / 33.27 | H-ZF52 (Δnd=+0.0406) | NBFD15 (Δnd=-0.0000, Δvd=+0.00) | High | Check lens notes |

### [SONY FE 28-70mm F2 GM](../../src/lens-data/sony/SonyFE2870mmf2GM.data.ts) - WO 2025/263124 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 4 | `S-FPM4 (OHARA)` | 1.59561 / 67.00 | S-FPM4 (Δnd=-0.0672) | S-FPM2 (Δnd=-0.0004, Δvd=+0.74)<br>J-PSKH4 (Δnd=-0.0021, Δvd=+0.00)<br>J-PSKH1 (Δnd=-0.0024, Δvd=+0.90) | Choose by context | Yes - choose candidate |

### [FUJIFILM FUJINON XF 60mmF2.4 R Macro](../../src/lens-data/fujifilm/FujifilmXF60mmf24R.data.ts) - US 2014/0247506 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 9 | `S-TIL27 (OHARA) — probable (νd corrected to ≈52.2; see header note)` | 1.51742 / 48.80 | S-TIL27 (Δnd=+0.0576) | No catalog candidate | Patent review | Yes - no catalog match |

### [HASSELBLAD HC 150mm f/3.2](../../src/lens-data/hasselblad/HasselbladHC150mmf32.data.ts) - US 2002/0075570 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 9 | `Lanthanum crown (670/572 code, uncertain; cf. H-LAK6A, CDGM)` | 1.67003 / 57.20 | H-LAK6A (Δnd=+0.0235) | No catalog candidate | Patent review | Yes - no catalog match |

