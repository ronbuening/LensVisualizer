# Glass Relabels by Lens (auto-generated)

Per-lens work queue combining raw catalog mismatches with candidate relabel targets.
Use this when auditing a patent lens-by-lens: review all rows for a lens together,
then update the lens data, companion analysis/audit notes, and regenerate the glass reports.

**Regenerate this file** by running `npm test -- glassRelabelByLensScan`.
Regenerate the full glass report set with `npm run generate:glass-reports`.

## Summary

- **127** mismatched surfaces across **66** lens files
- **115** surfaces have at least one candidate
- **31** surfaces have high-confidence candidate ranking
- **12** surfaces have no catalog candidate and need patent review

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

### [NIKON PC-E NIKKOR 24mm f/3.5D ED](../../src/lens-data/nikon/NikonPCENikkor24mmf35DED.data.ts) - JP 2008-151949A

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 9 | `S-TIH14 (OHARA)` | 1.58144 / 40.75 | S-TIH14 (Δnd=+0.1804) | E-FL5 (Δnd=-0.0000, Δvd=+0.14)<br>PBL25 (Δnd=-0.0000, Δvd=+0.00)<br>S-TIL25 (Δnd=-0.0000, Δvd=-0.00) | Choose by context | Yes - choose candidate |
| 13 | `S-BAL14 (OHARA)` | 1.54814 / 45.79 | S-BAL14 (Δnd=+0.0207) | S-TIL1 (Δnd=+0.0000, Δvd=-0.01) | High | Check lens notes |
| 17 | `S-BAL14 (OHARA)` | 1.54814 / 45.79 | S-BAL14 (Δnd=+0.0207) | S-TIL1 (Δnd=+0.0000, Δvd=-0.01) | High | Check lens notes |

### [PANASONIC LUMIX S 35mm F1.8](../../src/lens-data/panasonic/PanasonicS35mmf18.data.ts)

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 5 | `H-ZF13 (CDGM) — dense flint` | 1.68893 / 31.20 | H-ZF13 (Δnd=+0.0958) | E-FD8 (Δnd=-0.0000, Δvd=-0.04)<br>S-TIM28 (Δnd=+0.0000, Δvd=-0.12) | Medium | Yes - choose candidate |
| 8 | `H-LAK53A (CDGM) / S-LAL8 class (OHARA) — lanthanum crown, code 729/547` | 1.72916 / 54.70 | S-LAL8 (Δnd=-0.0162) | S-LAL18 (Δnd=-0.0000, Δvd=-0.02, codeΔ=0.4) | High | Check lens notes |
| 11 | `S-LAH55 (OHARA) / CDGM equivalent — dense lanthanum flint, code 806/333` | 1.80610 / 33.30 | S-LAH55 (Δnd=+0.0287) | NBFD15 (Δnd=-0.0000, Δvd=-0.03, codeΔ=0.4) | High | Check lens notes |

### [PENTAX-DA★ 16-50mm f/2.8 ED AL[IF] SDM](../../src/lens-data/pentax/PentaxDA1650mmf28.data.ts) - US 7,301,711 B2

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 2 | `S-BAL42 (OHARA)` | 1.71300 / 53.90 | S-BAL42 (Δnd=-0.1299) | N-LAK8 (Δnd=+0.0000, Δvd=-0.07)<br>S-LAL8 (Δnd=-0.0000, Δvd=-0.03) | Medium | Yes - choose candidate |
| 4 | `S-LAH63Q (OHARA)` | 1.77250 / 49.60 | S-LAH63Q (Δnd=+0.0319) | N-LAF34 (Δnd=+0.0000, Δvd=+0.02)<br>S-LAH66 (Δnd=-0.0000, Δvd=-0.00)<br>MC-TAF101-100 (Δnd=-0.0035, Δvd=-0.31) | Choose by context | Yes - choose candidate |
| 11 | `S-TIM27 (OHARA)` | 1.64769 / 33.80 | S-TIM27 (Δnd=-0.0079) | E-FD2 (Δnd=-0.0000, Δvd=+0.04)<br>SF2 (Δnd=-0.0000, Δvd=+0.05)<br>S-TIM22 (Δnd=-0.0000, Δvd=-0.01) | Choose by context | Yes - choose candidate |

### [SIGMA 85mm F/1.4 DG DN | Art](../../src/lens-data/sigma/SigmaDGDNA85mmf14.data.ts) - JP 2021-85935

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 8 | `Anomalous flint (S-NBH8-class, νd=25.15)` | 1.85451 / 25.15 | S-NBH8 (Δnd=-0.1340) | S-NBH56 (Δnd=+0.0003, Δvd=-0.35)<br>J-LASFH23 (Δnd=-0.0045, Δvd=+1.88) | Medium | Yes - choose candidate |
| 15 | `Anomalous flint (S-NBH8-class, νd=25.15)` | 1.85451 / 25.15 | S-NBH8 (Δnd=-0.1340) | S-NBH56 (Δnd=+0.0003, Δvd=-0.35)<br>S-NPH5 (Δnd=+0.0044, Δvd=-2.42)<br>J-LASFH23 (Δnd=-0.0045, Δvd=+1.88) | Choose by context | Yes - choose candidate |
| 18 | `Anomalous flint (S-NBH8-class, νd=25.15)` | 1.85451 / 25.15 | S-NBH8 (Δnd=-0.1340) | S-NBH56 (Δnd=+0.0003, Δvd=-0.35)<br>S-NPH5 (Δnd=+0.0044, Δvd=-2.42)<br>J-LASFH23 (Δnd=-0.0045, Δvd=+1.88) | Choose by context | Yes - choose candidate |

### [VOIGTLÄNDER APO-LANTHAR 180mm f/4 SL Close Focus](../../src/lens-data/voigtlander/VoigtlanderApoLanthar180mmf4.data.ts) - JP 2003-270529 A

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 10 | `S-LAH51 (OHARA)` | 1.80610 / 40.70 | S-LAH51 (Δnd=-0.0202) | H-ZLAF52A (Δnd=+0.0000, Δvd=+0.32)<br>S-LAH53 (Δnd=-0.0000, Δvd=+0.23)<br>NBFD13 (Δnd=+0.0000, Δvd=+0.03) | Choose by context | Yes - choose candidate |
| 11 | `S-TIH4 (OHARA)` | 1.72825 / 28.30 | S-TIH4 (Δnd=+0.0269) | H-ZF4A (Δnd=+0.0000, Δvd=+0.02)<br>S-TIH10 (Δnd=-0.0000, Δvd=+0.16)<br>SF10 (Δnd=+0.0000, Δvd=+0.11) | Choose by context | Yes - choose candidate |
| 15 | `S-LAH51 (OHARA)` | 1.80610 / 40.70 | S-LAH51 (Δnd=-0.0202) | H-ZLAF52A (Δnd=+0.0000, Δvd=+0.32)<br>S-LAH53 (Δnd=-0.0000, Δvd=+0.23)<br>NBFD13 (Δnd=+0.0000, Δvd=+0.03) | Choose by context | Yes - choose candidate |

### [VOIGTLÄNDER NOKTON 35mm f/1.2 Aspherical](../../src/lens-data/voigtlander/VoigtlanderNokton35mmf12.data.ts) - JP 2004-101880A

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 3 | `S-BAM4 (OHARA)` | 1.56732 / 42.80 | S-BAM4 (Δnd=+0.0383) | S-TIL26 (Δnd=+0.0000, Δvd=+0.02) | High | Check lens notes |
| 12 | `S-TIH14 (OHARA)` | 1.80518 / 25.50 | S-TIH14 (Δnd=-0.0434) | H-ZF7LA (Δnd=-0.0000, Δvd=-0.04)<br>S-TIH6 (Δnd=+0.0000, Δvd=-0.07)<br>SF6 (Δnd=+0.0000, Δvd=-0.07) | Choose by context | Yes - choose candidate |
| 17 | `S-TIL2 (OHARA)` | 1.54814 / 45.80 | S-TIL2 (Δnd=-0.0074) | S-TIL1 (Δnd=+0.0000, Δvd=-0.02) | High | Check lens notes |

### [CANON RF 28-70mm F2.8 IS STM](../../src/lens-data/canon/CanonRF2870mmf28.data.ts) - US 2024/0329367 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 8 | `851408 — S-LAH65V (OHARA)` | 1.85150 / 40.80 | S-LAH65V (Δnd=-0.0475) | S-LAH89 (Δnd=-0.0000, Δvd=-0.02, codeΔ=0.7)<br>L-LAH85V (Δnd=+0.0025, Δvd=-0.42, codeΔ=7.2)<br>J-LASFH22 (Δnd=-0.0030, Δvd=+2.99, codeΔ=32.4) | High | Check lens notes |
| 15 | `770297 — S-TIH18 family (OHARA)` | 1.77047 / 29.70 | S-TIH18 (Δnd=-0.0490) | No catalog candidate | Patent review | Yes - no catalog match |
| 26 | `744448 — S-LAL14 family (OHARA)` | 1.74400 / 44.80 | S-LAL14 (Δnd=-0.0472) | S-LAM2 (Δnd=-0.0000, Δvd=-0.01, codeΔ=0.1)<br>H-LAF3B (Δnd=-0.0000, Δvd=+0.10, codeΔ=1.0) | High | Check lens notes |

### [NIKON NIKKOR 28mm f/2.8 (28Ti)](../../src/lens-data/nikon/Nikon28Ti28mmf28.data.ts) - US 5,528,428

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 1 | `S-NSL3 (OHARA)` | 1.53172 / 49.10 | S-NSL3 (Δnd=-0.0135) | S-TIL6 (Δnd=-0.0000, Δvd=-0.26) | Medium | Yes - choose candidate |
| 3 | `TAFD25 (HOYA)` | 1.84042 / 43.30 | TAFD25 (Δnd=+0.0632) | No catalog candidate | Patent review | Yes - no catalog match |
| 4 | `E-FD4 (HOYA)` | 1.64831 / 33.80 | E-FD4 (Δnd=+0.1069) | E-FD2 (Δnd=-0.0006, Δvd=+0.04)<br>SF2 (Δnd=-0.0006, Δvd=+0.05)<br>S-TIM22 (Δnd=-0.0006, Δvd=-0.01) | Choose by context | Yes - choose candidate |

### [PANASONIC LEICA DG SUMMILUX 25mm f/1.4 ASPH](../../src/lens-data/panasonic/PanasonicLeicaDG25mmf14.data.ts) - JP 2013-3324 A

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 1 | `S-NPH2 (OHARA)` | 2.00060 / 25.46 | S-NPH2 (Δnd=-0.0777) | TAFD40 (Δnd=+0.0001, Δvd=+0.00)<br>S-LAH79 (Δnd=+0.0027, Δvd=+2.81) | Medium | Yes - choose candidate |
| 14A | `S-LAL8 (OHARA)` | 1.73077 / 40.50 | S-LAL8 (Δnd=-0.0178) | No catalog candidate | Patent review | Yes - no catalog match |
| 16A | `S-LAH51 (OHARA)` | 1.77250 / 49.62 | S-LAH51 (Δnd=+0.0134) | N-LAF34 (Δnd=+0.0000, Δvd=+0.00)<br>S-LAH66 (Δnd=-0.0000, Δvd=-0.02)<br>MC-TAF101-100 (Δnd=-0.0035, Δvd=-0.33) | Choose by context | Yes - choose candidate |

### [CANON EF 50mm f/1.0L USM](../../src/lens-data/canon/CanonEF50mmf1L.data.ts) - US 4,717,245

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 5A | `S-NSL5 (OHARA)` | 1.51742 / 52.40 | S-NSL5 (Δnd=+0.0051) | E-CF6 (Δnd=-0.0000, Δvd=-0.25)<br>S-NSL36 (Δnd=-0.0000, Δvd=+0.03) | Medium | Yes - choose candidate |
| 8 | `S-NSL5 (OHARA)` | 1.51742 / 52.40 | S-NSL5 (Δnd=+0.0051) | E-CF6 (Δnd=-0.0000, Δvd=-0.25)<br>S-NSL36 (Δnd=-0.0000, Δvd=+0.03) | Medium | Yes - choose candidate |

### [CANON SERENAR 28mm f/3.5](../../src/lens-data/canon/CanonSerenar28mmf35.data.ts) - US 2,645,974

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 7 | `SK14 (Schott)` | 1.62040 / 60.30 | N-SK14 (Δnd=-0.0173) | N-SK16 (Δnd=+0.0000, Δvd=+0.02)<br>S-BSM16 (Δnd=+0.0000, Δvd=-0.01)<br>BACD15 (Δnd=+0.0026, Δvd=-2.18) | Choose by context | Yes - choose candidate |
| 9 | `SK14 (Schott)` | 1.62040 / 60.30 | N-SK14 (Δnd=-0.0173) | N-SK16 (Δnd=+0.0000, Δvd=+0.02)<br>S-BSM16 (Δnd=+0.0000, Δvd=-0.01)<br>BACD15 (Δnd=+0.0026, Δvd=-2.18) | Choose by context | Yes - choose candidate |

### [FUJIFILM FUJINON 18.5 mm f/2.8 (X70)](../../src/lens-data/fujifilm/FujifilmX7018mmf28.data.ts) - US 2017/0075089 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 1 | `S-TIH1 (OHARA)` | 1.59270 / 35.31 | S-TIH1 (Δnd=+0.1247) | S-FTM16 (Δnd=+0.0000, Δvd=+0.00) | High | Check lens notes |
| 5 | `S-TIH53 (OHARA)` | 1.69895 / 30.13 | S-TIH53 (Δnd=+0.1477) | E-FD15 (Δnd=-0.0000, Δvd=-0.08)<br>S-TIM35 (Δnd=-0.0000, Δvd=-0.00) | Medium | Yes - choose candidate |

### [FUJIFILM FUJINON 23mm f/2 (X100)](../../src/lens-data/fujifilm/FujifilmX10023mmf2.data.ts) - US 2012/0069456 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 10A | `K-VC89 (Sumita)` | 1.56865 / 58.60 | K-VC89 (Δnd=+0.2413) | S-BAL14 (Δnd=+0.0002, Δvd=-2.24)<br>N-SK11 (Δnd=-0.0048, Δvd=+2.20)<br>S-BAL41 (Δnd=-0.0048, Δvd=+2.07) | Choose by context | Yes - choose candidate |
| 12 | `S-NBH55 (OHARA)` | 1.80809 / 22.80 | S-NBH55 (Δnd=-0.0081) | J-SFH1 (Δnd=+0.0000, Δvd=-0.06)<br>S-NPH1 (Δnd=+0.0000, Δvd=-0.04)<br>SF6 (Δnd=-0.0029, Δvd=+2.63) | Choose by context | Yes - choose candidate |

### [HASSELBLAD HC 3.5/50](../../src/lens-data/hasselblad/HasselbladHC50mmf4.data.ts) - US 2003/0011895 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 5 | `S-NPH4 (OHARA)` | 1.78470 / 26.30 | S-NPH4 (Δnd=+0.1082) | S-TIH23 (Δnd=-0.0000, Δvd=-0.01)<br>SF11 (Δnd=+0.0000, Δvd=-0.54)<br>H-ZF13 (Δnd=+0.0000, Δvd=-0.58) | Choose by context | Yes - choose candidate |
| 14 | `S-NBH52 (OHARA)` | 1.63980 / 34.50 | S-NBH52 (Δnd=+0.0332) | S-TIM27 (Δnd=-0.0000, Δvd=-0.03) | High | Check lens notes |

### [HASSELBLAD XCD 2,5/90V](../../src/lens-data/hasselblad/HasselbladXCD90mmf25V.data.ts) - JP 2022-99402 A

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 1 | `S-LAH55V (OHARA)` | 1.72916 / 54.70 | S-LAH55V (Δnd=+0.1056) | S-LAL18 (Δnd=-0.0000, Δvd=-0.02) | High | Check lens notes |
| 9 | `S-NPH4 (OHARA)` | 1.85896 / 22.70 | S-NPH4 (Δnd=+0.0339) | S-NPH5 (Δnd=-0.0000, Δvd=+0.03)<br>S-NBH56 (Δnd=-0.0042, Δvd=+2.10) | Medium | Yes - choose candidate |

### [LEICA ELMARIT-R 28mm f/2.8](../../src/lens-data/leica/LeicaElmarit28mmf28.data.ts) - US 3,591,257

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 6 | `SF6 (SCHOTT)` | 1.81265 / 25.24 | SF6 (Δnd=-0.0075) | S-NPH1 (Δnd=-0.0046, Δvd=-2.48)<br>J-SFH1 (Δnd=-0.0046, Δvd=-2.50) | Medium | Yes - choose candidate |
| 11 | `SF6 (SCHOTT)` | 1.81265 / 25.24 | SF6 (Δnd=-0.0075) | S-NPH1 (Δnd=-0.0046, Δvd=-2.48)<br>J-SFH1 (Δnd=-0.0046, Δvd=-2.50) | Medium | Yes - choose candidate |

### [MINOLTA MD ROKKOR 50mm f/1.4](../../src/lens-data/minolta/MinoltaRokkor50mmf14MD.data.ts) - US 4,182,550

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 3 | `E-LAF7 / TAFD5F (HOYA)` | 1.76500 / 46.30 | TAFD5F (Δnd=+0.0698) | Q-LASFPH2S (Δnd=+0.0004, Δvd=+0.45)<br>S-LAH96 (Δnd=-0.0011, Δvd=+2.19)<br>MC-TAF101-100 (Δnd=+0.0040, Δvd=+2.99) | Choose by context | Yes - choose candidate |
| 10 | `S-NBH55 class (OHARA, near match Δnd = 0.001)` | 1.78100 / 44.50 | S-NBH55 (Δnd=+0.0190) | S-LAH51 (Δnd=+0.0049, Δvd=-0.30)<br>NBFD11 (Δnd=+0.0049, Δvd=-0.57) | Medium | Yes - choose candidate |

### [NIKON AF-S MICRO-NIKKOR 60mm f/2.8G ED](../../src/lens-data/nikon/NikonAFSMicroNikkor60f28G.data.ts) - US 7,898,744 B2

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 3 | `H-LAK6A (CDGM) or Nikon melt` | 1.63854 / 55.48 | H-LAK6A (Δnd=+0.0550) | S-BSM18 (Δnd=-0.0000, Δvd=-0.10)<br>K-SK18 (Δnd=+0.0000, Δvd=+0.02) | Medium | Yes - choose candidate |
| 13 | `S-FPM4 (OHARA) — ED glass` | 1.49782 / 82.56 | S-FPM4 (Δnd=+0.0306) | J-FKH1 (Δnd=+0.0000, Δvd=+0.01)<br>J-FK01A (Δnd=-0.0008, Δvd=-0.91)<br>H-FK61 (Δnd=-0.0008, Δvd=-0.95) | Choose by context | Yes - choose candidate |

### [NIKON AF-S NIKKOR 16-35mm f/4G ED VR](../../src/lens-data/nikon/NikonNikkorAFS1635mmf4.data.ts) - US 2010/0238560 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 1A | `LAM family (cf. HOYA E-FD5)` | 1.76690 / 46.85 | E-FD5 (Δnd=-0.0942) | Q-LASFPH2S (Δnd=-0.0015, Δvd=-0.10)<br>MC-TAF101-100 (Δnd=+0.0021, Δvd=+2.44)<br>S-LAH96 (Δnd=-0.0030, Δvd=+1.64) | Choose by context | Yes - choose candidate |
| 16 | `S-LAM54 (OHARA)` | 1.70154 / 41.17 | S-LAM54 (Δnd=+0.0555) | S-BAH27 (Δnd=-0.0000, Δvd=+0.07) | High | Check lens notes |

### [NIKON L35AF 35mm f/2.8](../../src/lens-data/nikon/NikonL35AF35mmf28.data.ts) - US 4,457,596

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 3 | `TAF5 (1773/494)` | 1.77279 / 49.40 | TAF5 (Δnd=+0.0432) | N-LAF34 (Δnd=-0.0003, Δvd=+0.22)<br>S-LAH66 (Δnd=-0.0003, Δvd=+0.20)<br>MC-TAF101-100 (Δnd=-0.0038, Δvd=-0.11) | Choose by context | Yes - choose candidate |
| 7 | `TAF5 (1773/494)` | 1.77279 / 49.40 | TAF5 (Δnd=+0.0432) | N-LAF34 (Δnd=-0.0003, Δvd=+0.22)<br>S-LAH66 (Δnd=-0.0003, Δvd=+0.20)<br>MC-TAF101-100 (Δnd=-0.0038, Δvd=-0.11) | Choose by context | Yes - choose candidate |

### [NIKON NIKKOR Z 28mm f/2.8](../../src/lens-data/nikon/NikonZ28f28.data.ts) - WO 2022/071249 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 6 | `S-NPH1 (OHARA)` | 2.00100 / 29.12 | S-NPH1 (Δnd=-0.1929) | S-LAH99 (Δnd=+0.0000, Δvd=+0.02)<br>TAFD55 (Δnd=+0.0000, Δvd=+0.01)<br>S-LAH79 (Δnd=+0.0023, Δvd=-0.85) | Choose by context | Yes - choose candidate |
| 7 | `S-TIH14 (OHARA)` | 1.80518 / 25.45 | S-TIH14 (Δnd=-0.0434) | H-ZF7LA (Δnd=-0.0000, Δvd=+0.01)<br>S-TIH6 (Δnd=+0.0000, Δvd=-0.02)<br>SF6 (Δnd=+0.0000, Δvd=-0.02) | Choose by context | Yes - choose candidate |

### [NIKON NIKKOR Z 40mm f/2](../../src/lens-data/nikon/NikonNikkorZ40mmf2.data.ts) - JP 2021-189351A

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 2 | `S-TIH23 (OHARA)` | 1.71736 / 29.57 | S-TIH23 (Δnd=+0.0673) | SF1 (Δnd=-0.0000, Δvd=-0.06)<br>S-TIH1 (Δnd=+0.0000, Δvd=-0.05)<br>S-TIH18 (Δnd=+0.0041, Δvd=-0.34) | Choose by context | Yes - choose candidate |
| 6 | `S-LAH64 (OHARA)` | 1.80400 / 46.60 | S-LAH64 (Δnd=-0.0160) | H-ZLAF50D (Δnd=-0.0000, Δvd=-0.02)<br>S-LAH65 (Δnd=-0.0000, Δvd=-0.03)<br>S-LAH65VS (Δnd=-0.0000, Δvd=-0.07) | Choose by context | Yes - choose candidate |

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

### [OLYMPUS ZUIKO AUTO-S 50mm f/1.2](../../src/lens-data/olympus/OlympusZuikoAutoS50mmf12.data.ts) - US 4,099,843

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 3 | `S-LAH65 (OHARA) / TAFD25 (HOYA)` | 1.83400 / 37.19 | S-LAH65 (Δnd=-0.0300) | S-LAH60 (Δnd=-0.0000, Δvd=-0.03)<br>S-LAH60V (Δnd=-0.0000, Δvd=+0.02) | Medium | Yes - choose candidate |
| 8 | `E-CF6 (HOYA)` | 1.67790 / 55.33 | E-CF6 (Δnd=-0.1605) | LAC12 (Δnd=+0.0000, Δvd=+0.19) | High | Check lens notes |

### [PENTAX-110 50mm f/2.8](../../src/lens-data/pentax/Pentax11050mmf28.data.ts) - US 4,289,385

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 7 | `S-TIH11 (OHARA)` | 1.74077 / 27.80 | S-TIH11 (Δnd=+0.0440) | S-TIH13 (Δnd=-0.0000, Δvd=-0.01)<br>S-TIH3 (Δnd=-0.0008, Δvd=+0.50) | Medium | Yes - choose candidate |
| 9 | `S-TIM22 (OHARA)` | 1.66446 / 35.80 | S-TIM22 (Δnd=-0.0168) | J-BASF2 (Δnd=+0.0000, Δvd=+0.07) | High | Check lens notes |

### [SIGMA dp0 Quattro 14mm f/4](../../src/lens-data/sigma/SigmaDp0Quattro14mmf4.data.ts) - JP 2016-139087 A

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 12 | `TAFD25 (HOYA) / S-LAH55 (OHARA)` | 1.83481 / 42.72 | TAFD25 (Δnd=+0.0688) | S-LAH55VS (Δnd=-0.0000, Δvd=+0.02)<br>S-LAH55V (Δnd=-0.0000, Δvd=+0.01)<br>S-LAH55 (Δnd=-0.0000, Δvd=-0.01) | Choose by context | Yes - choose candidate |
| 18 | `E-FDS1 (HOYA) / S-TIH6 (OHARA)` | 1.80610 / 40.73 | E-FDS1 (Δnd=+0.1168) | H-ZLAF52A (Δnd=+0.0000, Δvd=+0.29)<br>S-LAH53 (Δnd=-0.0000, Δvd=+0.20)<br>NBFD13 (Δnd=+0.0000, Δvd=+0.00) | Choose by context | Yes - choose candidate |

### [SIGMA DP2X 24mm f/2.8](../../src/lens-data/sigma/SigmaDP2X24mmf28.data.ts) - JP 2010-101979 A

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 1 | `S-LAL7 / LACL5 (OHARA / HOYA)` | 1.71300 / 53.94 | S-LAL7 (Δnd=-0.0614) | N-LAK8 (Δnd=+0.0000, Δvd=-0.11)<br>S-LAL8 (Δnd=-0.0000, Δvd=-0.07) | Medium | Yes - choose candidate |
| 11 | `S-LAM55 (≈) / LACL60 (OHARA / HOYA)` | 1.74180 / 49.23 | S-LAM55 (Δnd=+0.0202) | S-LAM60 (Δnd=+0.0014, Δvd=+0.11) | High | Check lens notes |

### [SONY FE 135mm F1.8 GM](../../src/lens-data/sony/SonyFE135mmf18GM.data.ts) - WO 2019/187633

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 9A | `S-BAL35 (OHARA)` | 1.58313 / 59.38 | S-BAL35 (Δnd=+0.0060) | S-BAL42 (Δnd=-0.0000, Δvd=-0.01)<br>Q-SK52S (Δnd=-0.0003, Δvd=+0.13)<br>K-SKLD200 (Δnd=+0.0035, Δvd=-0.38) | Choose by context | Yes - choose candidate |
| 14 | `S-LAL14 (OHARA)` | 1.72916 / 54.67 | S-LAL14 (Δnd=-0.0324) | S-LAL18 (Δnd=-0.0000, Δvd=+0.01) | High | Check lens notes |

### [VIVITAR SERIES 1 70–210mm f/2.8–4 VMC](../../src/lens-data/vivitar/VivitarSeries170210mmf284.data.ts) - US 4,758,073

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 7 | `S-LAH65 class (Ohara)` | 1.77300 / 49.60 | S-LAH65 (Δnd=+0.0310) | N-LAF34 (Δnd=-0.0005, Δvd=+0.02)<br>S-LAH66 (Δnd=-0.0005, Δvd=-0.00)<br>MC-TAF101-100 (Δnd=-0.0040, Δvd=-0.31) | Choose by context | Yes - choose candidate |
| 9 | `S-BSM71 (Ohara)` | 1.64000 / 60.20 | S-BSM71 (Δnd=+0.0085) | S-BSM81 (Δnd=-0.0000, Δvd=-0.12) | High | Check lens notes |

### [VOIGTLÄNDER NOKTON 50mm f/1.2 X-Mount](../../src/lens-data/voigtlander/VoigtlanderNoktonX50mmf12.data.ts) - JP 2025-58577 A

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 7 | `S-TIH14 (OHARA)` | 1.74077 / 27.74 | S-TIH14 (Δnd=+0.0211) | S-TIH13 (Δnd=-0.0000, Δvd=+0.05)<br>S-TIH3 (Δnd=-0.0008, Δvd=+0.56) | Medium | Yes - choose candidate |
| 9 | `S-TIH18 (OHARA)` | 1.76182 / 26.58 | S-TIH18 (Δnd=-0.0403) | S-TIH14 (Δnd=+0.0000, Δvd=-0.06) | High | Check lens notes |

### [CANON RF 135mm f/1.8 L IS USM](../../src/lens-data/canon/CanonRF135f18.data.ts) - US 2023/0213745 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 6 | `770297 — S-TIH18 family (OHARA)` | 1.77047 / 29.70 | S-TIH18 (Δnd=-0.0490) | No catalog candidate | Patent review | Yes - no catalog match |
| 9 | `770297 — S-TIH18 family (OHARA)` | 1.77047 / 29.70 | S-TIH18 (Δnd=-0.0490) | No catalog candidate | Patent review | Yes - no catalog match |
| 26 | `S-LAL8 (OHARA)` | 1.65844 / 50.90 | S-LAL8 (Δnd=+0.0546) | N-SSK5 (Δnd=+0.0000, Δvd=-0.02) | High | Check lens notes |

### [SONY SONNAR T* FE 35mm F2.8 ZA](../../src/lens-data/sony/SonyFE35mmf28ZA.data.ts) - JP 2015-41012 A

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 1 | `Dense flint, 800/255 class — S-TIH6 (OHARA) or FD60 (Hoya)` | 1.80000 / 25.46 | S-TIH6 (Δnd=+0.0052) | No catalog candidate | Patent review | Yes - no catalog match |
| 10 | `NBFD11 (Hoya)` | 1.63000 / 34.57 | NBFD11 (Δnd=+0.1559) | E-F1 (Δnd=-0.0041, Δvd=+1.17) | Medium | Yes - choose candidate |
| 12A | `S-TIM28 (OHARA)` | 1.68000 / 31.16 | S-TIM28 (Δnd=+0.0089) | No catalog candidate | Patent review | Yes - no catalog match |

### [NIKON NIKKOR Z 100-400mm f/4.5-5.6 VR S](../../src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts) - JP2022-92388A

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 13 | `S-LAM3 (OHARA)` | 1.74100 / 52.60 | S-LAM3 (Δnd=-0.0240) | No catalog candidate | Patent review | Yes - no catalog match |
| 32 | `S-LAH99 (OHARA)` | 1.95375 / 32.30 | S-LAH99 (Δnd=+0.0473) | S-LAH98 (Δnd=-0.0000, Δvd=+0.02)<br>TAFD45 (Δnd=-0.0000, Δvd=+0.02)<br>J-LASFH15 (Δnd=-0.0037, Δvd=-2.93) | Choose by context | Yes - choose candidate |

### [CANON EF 40mm f/2.8 STM](../../src/lens-data/canon/CanonEF40mmf28.data.ts) - US 8,970,966 B2

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 2 | `S-TIL25 (OHARA)` | 1.53172 / 48.80 | S-TIL25 (Δnd=+0.0497) | S-TIL6 (Δnd=-0.0000, Δvd=+0.04) | High | Check lens notes |

### [CANON EF-S 17-55mm f/2.8 IS USM](../../src/lens-data/canon/CanonEFS1755mmf28IS.data.ts) - JP 2007-108398 A

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 34 | `NBFD13 (HOYA)` | 1.74950 / 35.30 | NBFD13 (Δnd=+0.0566) | S-NBH51 (Δnd=+0.0000, Δvd=+0.03) | High | Check lens notes |

### [CANON RF 24-50mm F4.5-6.3 IS STM](../../src/lens-data/canon/CanonRF2450mmf463.data.ts) - US 2023/0213739 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 1 | `S-BSL7 (OHARA 639/554)` | 1.63854 / 55.40 | S-BSL7 (Δnd=-0.1223) | S-BSM18 (Δnd=-0.0000, Δvd=-0.02, codeΔ=0.7)<br>K-SK18 (Δnd=+0.0000, Δvd=+0.10, codeΔ=1.5) | High | Check lens notes |

### [CANON RF 50mm f/1.2 L USM](../../src/lens-data/canon/CanonRF50mmf12L.data.ts) - US 2019/0265441 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 6 | `S-TIL27 (OHARA)` | 1.65412 / 39.68 | S-TIL27 (Δnd=-0.0791) | N-KZFS5 (Δnd=+0.0000, Δvd=+0.02)<br>S-NBH5 (Δnd=-0.0000, Δvd=+0.00) | Medium | Yes - choose candidate |

### [CANON SERENAR 50mm f/1.8](../../src/lens-data/canon/CanonSerenar50mmf18.data.ts) - US 2,681,594 C

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 4 | `NBFD3 (HOYA)` | 1.74000 / 28.20 | NBFD3 (Δnd=+0.0645) | S-TIH3 (Δnd=-0.0000, Δvd=+0.10)<br>S-TIH13 (Δnd=+0.0008, Δvd=-0.41) | Medium | Yes - choose candidate |

### [FUJIFILM FUJINON 23mm f/2 (X100V)](../../src/lens-data/fujifilm/FujifilmX100V23mmf2.data.ts) - US 2020/0333569 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 1 | `TAFD25 (HOYA)` | 1.71736 / 29.51 | TAFD25 (Δnd=+0.1863) | SF1 (Δnd=-0.0000, Δvd=+0.00)<br>S-TIH1 (Δnd=+0.0000, Δvd=+0.01)<br>S-TIH18 (Δnd=+0.0041, Δvd=-0.28) | Choose by context | Yes - choose candidate |

### [FUJIFILM FUJINON XF 50mm f/1.0 R WR](../../src/lens-data/fujifilm/FujifilmXF50f1.data.ts) - US 2021/0231927 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 7 | `S-NPH53 (Ohara)` | 1.95906 / 17.47 | S-NPH53 (Δnd=-0.1124) | S-NPH3 (Δnd=-0.0000, Δvd=+0.00) | High | Check lens notes |

### [NIKON AI Nikkor 135mm f/2](../../src/lens-data/nikon/NikonAI135mmf2.data.ts) - US 4,062,630

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 1 | `HOYA NBFD3 (717/481)` | 1.71700 / 48.10 | NBFD3 (Δnd=+0.0875) | S-LAM3 (Δnd=+0.0000, Δvd=-0.17, codeΔ=1.7)<br>S-LAM61 (Δnd=+0.0030, Δvd=-2.08, codeΔ=23.8)<br>S-LAL10 (Δnd=+0.0030, Δvd=+2.13, codeΔ=24.3) | High | Check lens notes |

### [NIKON NIKKOR 35mm f/2.8 (35Ti)](../../src/lens-data/nikon/Nikon35Ti35mmf28.data.ts) - US 5,243,468

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 1 | `Hoya BACD5 (nd=1.69680 / νd=55.5; Δnd≈0, Δνd=+0.1)` | 1.69680 / 55.60 | N-SK16 (Δnd=-0.0764) | N-LAK14 (Δnd=+0.0000, Δvd=-0.19)<br>H-LAK12 (Δnd=-0.0000, Δvd=+0.58)<br>S-LAL14 (Δnd=-0.0000, Δvd=-0.07) | Choose by context | Yes - choose candidate |

### [NIKON NIKKOR Z 135mm f/1.8 S Plena](../../src/lens-data/nikon/NikonZ135f18.data.ts) - WO 2024/147268 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 26 | `Lanthanum flint (near S-LAM55)` | 1.78590 / 44.17 | S-LAM55 (Δnd=-0.0239) | NBFD11 (Δnd=-0.0000, Δvd=-0.24)<br>S-LAH51 (Δnd=-0.0000, Δvd=+0.03) | Medium | Yes - choose candidate |

### [NIKON NIKKOR Z 26mm f/2.8](../../src/lens-data/nikon/NikonZ26f28.data.ts) - WO 2023/190222 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 4 | `S-TIM2 (OHARA)` | 1.59270 / 35.30 | S-TIM2 (Δnd=+0.0273) | S-FTM16 (Δnd=+0.0000, Δvd=+0.01) | High | Check lens notes |

### [OLYMPUS OM ZUIKO AUTO-W 21mm f/2](../../src/lens-data/olympus/OlympusZuikoAuto21mmf2.data.ts) - US 4,210,388

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 5 | `LAC12 / LaK10 (OHARA / Schott)` | 1.77250 / 49.60 | LAC12 (Δnd=-0.0946) | N-LAF34 (Δnd=+0.0000, Δvd=+0.02)<br>S-LAH66 (Δnd=-0.0000, Δvd=-0.00)<br>MC-TAF101-100 (Δnd=-0.0035, Δvd=-0.31) | Choose by context | Yes - choose candidate |

### [OLYMPUS ZUIKO AUTO-MACRO 90mm f/2](../../src/lens-data/olympus/OlympusZuikoAutoMacro90mmf2.data.ts) - US 4,792,219

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 17 | `BSC7 (HOYA)` | 1.65160 / 58.52 | S-BSL7 (Δnd=-0.1354) | S-LAL7 (Δnd=-0.0000, Δvd=+0.03)<br>N-LAK22 (Δnd=-0.0005, Δvd=-2.63) | Medium | Yes - choose candidate |

### [PENTAX FA 31mm F1.8 AL Limited](../../src/lens-data/pentax/PentaxFA31mmf18ALLtd.data.ts) - US 6,560,042 B2

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 7 | `TAFD30 (HOYA)` | 1.80100 / 35.00 | TAFD30 (Δnd=+0.0820) | J-LAF016 (Δnd=+0.0000, Δvd=-0.08)<br>S-LAM66 (Δnd=-0.0000, Δvd=-0.03) | Medium | Yes - choose candidate |

### [PENTAX-110 24mm f/2.8](../../src/lens-data/pentax/Pentax11024mmf28.data.ts) - US 4,223,982

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 1 | `SF6 (Schott) / S-TIH6 (Ohara)` | 1.72825 / 28.50 | SF6 (Δnd=+0.0769) | H-ZF4A (Δnd=+0.0000, Δvd=-0.18)<br>S-TIH10 (Δnd=-0.0000, Δvd=-0.04)<br>SF10 (Δnd=+0.0000, Δvd=-0.09) | Choose by context | Yes - choose candidate |

### [PENTAX-F 85mm f/2.8 Soft](../../src/lens-data/pentax/PentaxF85mmf28Soft.data.ts) - US 5,267,086

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 6 | `TAFD25 (HOYA)` | 1.80440 / 39.60 | TAFD25 (Δnd=+0.0993) | S-LAH63Q (Δnd=+0.0000, Δvd=-0.02)<br>S-LAH63 (Δnd=-0.0000, Δvd=-0.01)<br>NBFD3 (Δnd=+0.0001, Δvd=+0.03) | Choose by context | Yes - choose candidate |

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

### [SONY PLANAR T* 50mm F1.4 ZA SSM](../../src/lens-data/sony/SonyPlanarT50mmf14ZA.data.ts) - US 2014/0071331 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 3 | `E-FD5 class (HOYA/HIKARI equivalent, 593/355)` | 1.59270 / 35.50 | E-FD5 (Δnd=+0.0800) | S-FTM16 (Δnd=-0.0000, Δvd=-0.19, codeΔ=2.2) | High | Check lens notes |

### [SONY PLANAR T* FE 50mm F1.4 ZA](../../src/lens-data/sony/SonyPlanarFE50mmf14ZA.data.ts) - WO 2017/138250 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 6 | `S-TIM27 (OHARA)` | 1.71735 / 29.50 | S-TIM27 (Δnd=-0.0776) | SF1 (Δnd=+0.0000, Δvd=+0.01)<br>S-TIH1 (Δnd=+0.0000, Δvd=+0.02)<br>S-TIH18 (Δnd=+0.0042, Δvd=-0.27) | Choose by context | Yes - choose candidate |

### [SONY SONNAR T* FE 55mm F1.8 ZA](../../src/lens-data/sony/SonyFE55mmf18ZA.data.ts) - US 2015/0092100 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 1 | `S-TIM2 (OHARA)` | 1.58144 / 40.90 | S-TIM2 (Δnd=+0.0386) | E-FL5 (Δnd=-0.0000, Δvd=-0.01)<br>PBL25 (Δnd=-0.0000, Δvd=-0.15)<br>S-TIL25 (Δnd=-0.0000, Δvd=-0.15) | Choose by context | Yes - choose candidate |

### [VOIGTLÄNDER MACRO APO-LANTHAR 125mm f/2.5 SL](../../src/lens-data/voigtlander/VoigtlanderMacroApoLanthar125mmf25.data.ts) - JP 2002-090622 A

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 12 | `S-BAL14 (OHARA) / K-BAL14 (Sumita)` | 1.58913 / 61.30 | S-BAL14 (Δnd=-0.0203) | S-BAL35 (Δnd=-0.0000, Δvd=-0.16)<br>N-SK5 (Δnd=+0.0000, Δvd=-0.03)<br>K-SKLD200 (Δnd=-0.0025, Δvd=-2.30) | Choose by context | Yes - choose candidate |

### [FUJIFILM FUJINON XF 60mmF2.4 R Macro](../../src/lens-data/fujifilm/FujifilmXF60mmf24R.data.ts) - US 2014/0247506 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 9 | `S-TIL27 (OHARA) — probable (νd corrected to ≈52.2; see header note)` | 1.51742 / 48.80 | S-TIL27 (Δnd=+0.0576) | No catalog candidate | Patent review | Yes - no catalog match |

### [HASSELBLAD HC 150mm f/3.2](../../src/lens-data/hasselblad/HasselbladHC150mmf32.data.ts) - US 2002/0075570 A1

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 9 | `Lanthanum crown (670/572 code, uncertain; cf. H-LAK6A, CDGM)` | 1.67003 / 57.20 | H-LAK6A (Δnd=+0.0235) | No catalog candidate | Patent review | Yes - no catalog match |

### [LEICA ELCAN 50mm f/2](../../src/lens-data/leica/LeicaElcan50mmf2.data.ts) - US 3,649,104

| Surface | Current label | Stored nd/vd | Rejected as | Best candidate(s) | Confidence | Patent review |
|---|---|---|---|---|---|---|
| 5 | `≈SF4 (dense flint)` | 1.74710 / 27.40 | SF4 (Δnd=+0.0081) | No catalog candidate | Patent review | Yes - no catalog match |

