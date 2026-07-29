# Glass Coverage Opportunities (auto-generated)

Consolidated work queue for the three planned glass-coverage sweeps.
Rows that cite `patents/` refer to ignored/untracked local PDF files used as source references only.
Do not add, stage, or commit those patent files.

**Regenerate this file** by running `npm test -- glassCoverageOpportunitiesScan`.
Regenerate the full glass report set with `npm run generate:glass-reports`.

## Summary

- **488** lenses scanned (**480** visible)
- **4535 / 5360** non-air surfaces use strict catalog Sellmeier data (84.6%)
- **4551 / 5360** non-air surfaces use trusted chromatic data (Sellmeier or measured line indices, 84.9%)
- **69** mismatch surfaces in Sweep 1 across **42** lens files
- **69** Sweep 1 surfaces have a matching untracked local patent PDF
- **286** code-only missing-Sellmeier elements in Sweep 2
- **84** unresolved named-token elements in Sweep 2B
- **0** Tier A proprietary backfill rows in Sweep 3

## Sweep 1 - Relabel Mismatches

Patent PDFs under `patents/` are untracked local references. A missing local patent status is a source blocker for the requested first sweep.

| Lens | Patent | Surface | Current label | Stored nd/vd | Best candidate(s) | localPatentPath | localPatentStatus |
|---|---|---|---|---|---|---|---|
| [CANON RF 24-240mm f/4-6.3 IS USM](../../src/lens-data/canon/CanonRF24240mmf463.data.ts) | US 2020/0142167 A1 | 35 | `S-LAH60 type (835/427)` | 1.83481 / 42.70 | S-LAH55 (Δnd=-0.0000, Δvd=+0.01)<br>TAFD5F (Δnd=-0.0000, Δvd=+0.02)<br>S-LAH55V (Δnd=-0.0000, Δvd=+0.03) | patents/US20200142167A1.pdf | Matched untracked local patent PDF |
| [NIKON AF-S NIKKOR 120-300mm f/2.8 E FL ED SR VR](../../src/lens-data/nikon/NikonNikkorAFS120300mmf28.data.ts) | JP 2020-177057 A | 9 | `OHARA S-TIM35` | 1.69680 / 55.52 | N-LAK14 (Δnd=+0.0000, Δvd=-0.11)<br>H-LAK12 (Δnd=-0.0000, Δvd=+0.66)<br>K-LaK14 (Δnd=+0.0000, Δvd=+0.08) | patents/JP2020177057A.pdf | Matched untracked local patent PDF |
| [NIKON AF-S NIKKOR 120-300mm f/2.8 E FL ED SR VR](../../src/lens-data/nikon/NikonNikkorAFS120300mmf28.data.ts) | JP 2020-177057 A | 11 | `OHARA S-LAH52` | 1.80400 / 46.60 | H-ZLAF50D (Δnd=-0.0000, Δvd=-0.02)<br>S-LAH65 (Δnd=-0.0000, Δvd=-0.03)<br>S-LAH65VS (Δnd=-0.0000, Δvd=-0.07) | patents/JP2020177057A.pdf | Matched untracked local patent PDF |
| [NIKON AF-S NIKKOR 120-300mm f/2.8 E FL ED SR VR](../../src/lens-data/nikon/NikonNikkorAFS120300mmf28.data.ts) | JP 2020-177057 A | 24 | `OHARA S-LAH52` | 1.80400 / 46.60 | H-ZLAF50D (Δnd=-0.0000, Δvd=-0.02)<br>S-LAH65 (Δnd=-0.0000, Δvd=-0.03)<br>S-LAH65VS (Δnd=-0.0000, Δvd=-0.07) | patents/JP2020177057A.pdf | Matched untracked local patent PDF |
| [NIKON AF-S NIKKOR 120-300mm f/2.8 E FL ED SR VR](../../src/lens-data/nikon/NikonNikkorAFS120300mmf28.data.ts) | JP 2020-177057 A | 42 | `OHARA S-LAH52` | 1.80400 / 46.60 | H-ZLAF50D (Δnd=-0.0000, Δvd=-0.02)<br>S-LAH65 (Δnd=-0.0000, Δvd=-0.03)<br>S-LAH65VS (Δnd=-0.0000, Δvd=-0.07) | patents/JP2020177057A.pdf | Matched untracked local patent PDF |
| [NIKON NIKKOR Z 135mm f/1.8 S Plena](../../src/lens-data/nikon/NikonZ135f18.data.ts) | WO 2024/147268 A1 | 13 | `Barium crown (near S-BAH27)` | 1.69680 / 55.52 | N-LAK14 (Δnd=+0.0000, Δvd=-0.11)<br>H-LAK12 (Δnd=-0.0000, Δvd=+0.66)<br>K-LaK14 (Δnd=+0.0000, Δvd=+0.08) | patents/WO2024147268A1.pdf | Matched untracked local patent PDF |
| [NIKON NIKKOR Z 50mm f/1.2 S](../../src/lens-data/nikon/NikonNikkorZ50f12.data.ts) | WO 2021/241230 A1 | 32A | `S-NSL3 (OHARA)` | 1.51680 / 64.00 | J-BK7 (Δnd=+0.0000, Δvd=-0.12)<br>N-BK7 (Δnd=+0.0000, Δvd=+0.17)<br>K-BK7 (Δnd=-0.0005, Δvd=+0.10) | patents/WO2021241230A1.pdf | Matched untracked local patent PDF |
| [NIKON ULTRA-MICRO-NIKKOR 29.5mm f/1.2](../../src/lens-data/nikon/NikonUltraMicroNikkor295mmf12.data.ts) | GB 1,050,055 | 7 | `LAK9 / S-LAL9 class lanthanum crown (patent e-line index stored)` | 1.69451 / 54.80 | LAC13 (Δnd=-0.0010, Δvd=-1.46)<br>S-LAL13 (Δnd=-0.0010, Δvd=-1.59)<br>H-LAK6A (Δnd=-0.0010, Δvd=-1.42) | patents/GB_1050055_A.pdf | Matched untracked local patent PDF |
| [OLYMPUS ZUIKO AUTO-MACRO 50mm f/2](../../src/lens-data/olympus/OlympusZuikoAutoMacro50mmf2.data.ts) | US 4,708,445 | 5 | `LAC14 (773/497)` | 1.77250 / 49.66 | N-LAF34 (Δnd=+0.0000, Δvd=-0.04)<br>E-LASF016 (Δnd=-0.0000, Δvd=-0.05)<br>S-LAH66 (Δnd=-0.0000, Δvd=-0.06) | patents/US4708445.pdf | Matched untracked local patent PDF |
| [OLYMPUS ZUIKO AUTO-MACRO 50mm f/2](../../src/lens-data/olympus/OlympusZuikoAutoMacro50mmf2.data.ts) | US 4,708,445 | 12 | `LAC14 (773/497)` | 1.77250 / 49.66 | N-LAF34 (Δnd=+0.0000, Δvd=-0.04)<br>E-LASF016 (Δnd=-0.0000, Δvd=-0.05)<br>S-LAH66 (Δnd=-0.0000, Δvd=-0.06) | patents/US4708445.pdf | Matched untracked local patent PDF |
| [OLYMPUS ZUIKO AUTO-MACRO 50mm f/2](../../src/lens-data/olympus/OlympusZuikoAutoMacro50mmf2.data.ts) | US 4,708,445 | 14 | `LAC14 (773/497)` | 1.77250 / 49.66 | N-LAF34 (Δnd=+0.0000, Δvd=-0.04)<br>E-LASF016 (Δnd=-0.0000, Δvd=-0.05)<br>S-LAH66 (Δnd=-0.0000, Δvd=-0.06) | patents/US4708445.pdf | Matched untracked local patent PDF |
| [CANON RF 15-35mm f/2.8 L IS USM](../../src/lens-data/canon/CanonRF1535f28.data.ts) | US 2020/0257181 A1 | 19 | `S-LAH55V (OHARA)` | 1.83400 / 37.20 | S-LAH60 (Δnd=-0.0000, Δvd=-0.04)<br>S-LAH60V (Δnd=-0.0000, Δvd=+0.01)<br>NBFD10 (Δnd=+0.0000, Δvd=+0.14) | patents/US20200257181A1.pdf | Matched untracked local patent PDF |
| [CANON RF 85mm f/2 Macro IS STM](../../src/lens-data/canon/CanonRF85mmf2Macro.data.ts) | US 2021/0072505 A1 | 19 | `S-LAH55 (OHARA)` | 1.83400 / 37.20 | S-LAH60 (Δnd=-0.0000, Δvd=-0.04)<br>S-LAH60V (Δnd=-0.0000, Δvd=+0.01)<br>NBFD10 (Δnd=+0.0000, Δvd=+0.14) | patents/US20210072505A1.pdf | Matched untracked local patent PDF |
| [FUJIFILM FUJINON XF 18mm f/2 R](../../src/lens-data/fujifilm/FujifilmXF18mmf2.data.ts) | US 2014/0240851 A1 | 3 | `S-LAH55V (OHARA)` | 1.83400 / 37.16 | S-LAH60 (Δnd=-0.0000, Δvd=+0.00)<br>S-LAH60V (Δnd=-0.0000, Δvd=+0.05)<br>NBFD10 (Δnd=+0.0000, Δvd=+0.18) | patents/US20140240851A1.pdf | Matched untracked local patent PDF |
| [NIKON 35mm f/2.8 (Nikon L35AF)](../../src/lens-data/nikon/NikonL35AF35mmf28.data.ts) | US 4,457,596 | 5 | `FD60 / S-TIM28 (1689/311)` | 1.68893 / 31.10 | M-FD80 (Δnd=-0.0000, Δvd=+0.06)<br>E-FD8 (Δnd=-0.0000, Δvd=+0.06)<br>S-TIM28 (Δnd=+0.0000, Δvd=-0.02) | patents/US4457596.pdf | Matched untracked local patent PDF |
| [NIKON AF-S NIKKOR 120-300mm f/2.8 E FL ED SR VR](../../src/lens-data/nikon/NikonNikkorAFS120300mmf28.data.ts) | JP 2020-177057 A | 36 | `OHARA S-LAH63Q type` | 1.80518 / 25.41 | H-ZF7LA (Δnd=-0.0000, Δvd=+0.05)<br>S-TIH6 (Δnd=+0.0000, Δvd=+0.02)<br>FD60 (Δnd=+0.0000, Δvd=+0.05) | patents/JP2020177057A.pdf | Matched untracked local patent PDF |
| [NIKON AF-S NIKKOR 200-500mm f/5.6 E ED VR](../../src/lens-data/nikon/NikonNikkorAFS200500mmf56.data.ts) | JP 2014-209144 A | 7 | `TAC4 (HOYA) / S-LAL18 (OHARA)` | 1.72916 / 54.67 | TAC8 (Δnd=+0.0000, Δvd=+0.00)<br>S-LAL19 (Δnd=-0.0000, Δvd=-0.57)<br>S-LAL18 (Δnd=-0.0000, Δvd=+0.01) | patents/JP2014209144A.pdf | Matched untracked local patent PDF |
| [NIKON AF-S NIKKOR 200-500mm f/5.6 E ED VR](../../src/lens-data/nikon/NikonNikkorAFS200500mmf56.data.ts) | JP 2014-209144 A | 21 | `S-LAH55V (OHARA) / TAFD5 (HOYA)` | 1.83400 / 37.34 | S-LAH60 (Δnd=-0.0000, Δvd=-0.18)<br>S-LAH60V (Δnd=-0.0000, Δvd=-0.13)<br>NBFD10 (Δnd=+0.0000, Δvd=+0.00) | patents/JP2014209144A.pdf | Matched untracked local patent PDF |
| [NIKON AF-S NIKKOR 200-500mm f/5.6 E ED VR](../../src/lens-data/nikon/NikonNikkorAFS200500mmf56.data.ts) | JP 2014-209144 A | 27 | `TAC4 (HOYA) / S-LAL18 (OHARA)` | 1.72916 / 54.67 | TAC8 (Δnd=+0.0000, Δvd=+0.00)<br>S-LAL19 (Δnd=-0.0000, Δvd=-0.57)<br>S-LAL18 (Δnd=-0.0000, Δvd=+0.01) | patents/JP2014209144A.pdf | Matched untracked local patent PDF |
| [NIKON NIKKOR Z 35mm f/1.8 S](../../src/lens-data/nikon/NikonZ35f18S.data.ts) | JP 2019-090947A | 11A | `S-LAH55VS (OHARA), probable` | 1.83441 / 37.28 | M-NBFD10 (Δnd=+0.0000, Δvd=+0.00)<br>NBFD10 (Δnd=-0.0004, Δvd=+0.06)<br>S-LAH60 (Δnd=-0.0004, Δvd=-0.12) | patents/JP2019090947A.pdf | Matched untracked local patent PDF |
| [PANASONIC LEICA DG SUMMILUX 9mm f/1.7 ASPH](../../src/lens-data/panasonic/PanasonicLeicaDG9mmf17.data.ts) | US 2023/0367186 A1 | 20 | `S-PHM52Q (OHARA)` | 1.62299 / 58.10 | S-BSM15 (Δnd=+0.0000, Δvd=+0.07)<br>BACD15 (Δnd=+0.0000, Δvd=+0.02)<br>S-BSM10 (Δnd=-0.0002, Δvd=-1.05) | patents/US20230367186A1.pdf | Matched untracked local patent PDF |
| [PANASONIC LUMIX S 20-60mm f/3.5-5.6](../../src/lens-data/panasonic/PanasonicLumixS2060mmf3556.data.ts) | JP 2021-179551 A | 3 | `S-LAH93 (OHARA)` | 1.90366 / 31.30 | N-LASF46B (Δnd=+0.0000, Δvd=+0.02)<br>S-LAH95 (Δnd=-0.0000, Δvd=+0.04)<br>TAFD25 (Δnd=-0.0000, Δvd=+0.02) | patents/JP2021179551A.pdf | Matched untracked local patent PDF |
| [PENTAX F 85mm f/2.8 Soft](../../src/lens-data/pentax/PentaxF85mmf28Soft.data.ts) | US 5,267,086 | 1 | `BACD14 (HOYA) / N-SSK5 equivalent (658509)` | 1.65844 / 50.90 | N-SSK5 (Δnd=+0.0000, Δvd=-0.02)<br>S-BSM25 (Δnd=+0.0000, Δvd=-0.02)<br>BACED5 (Δnd=-0.0000, Δvd=-0.04) | patents/US5267086.pdf | Matched untracked local patent PDF |
| [PENTAX F 85mm f/2.8 Soft](../../src/lens-data/pentax/PentaxF85mmf28Soft.data.ts) | US 5,267,086 | 4 | `FD60 (HOYA) / S-TIH10 equivalent (728285)` | 1.72825 / 28.50 | S-TIH10 (Δnd=-0.0000, Δvd=-0.04)<br>SF10 (Δnd=+0.0000, Δvd=-0.09)<br>E-FD10 (Δnd=-0.0000, Δvd=-0.18) | patents/US5267086.pdf | Matched untracked local patent PDF |
| [SIGMA 85mm f/1.4 DG HSM | Art](../../src/lens-data/sigma/Sigma85mmf14Art.data.ts) | JP2018-5099A | 24 | `S-NBH52 (OHARA)` | 1.67270 / 32.17 | S-TIM25 (Δnd=-0.0000, Δvd=-0.07)<br>E-FD5 (Δnd=-0.0000, Δvd=+0.00)<br>SF5 (Δnd=-0.0000, Δvd=+0.04) | patents/JP2018005099A.pdf | Matched untracked local patent PDF |
| [VOIGTLÄNDER APO-LANTHAR 180mm f/4 SL Close Focus](../../src/lens-data/voigtlander/VoigtlanderApoLanthar180mmf4.data.ts) | JP 2003-270529 A | 7 | `S-LAH55 (OHARA)` | 1.83400 / 37.30 | S-LAH60 (Δnd=-0.0000, Δvd=-0.14)<br>S-LAH60V (Δnd=-0.0000, Δvd=-0.09)<br>NBFD10 (Δnd=+0.0000, Δvd=+0.04) | patents/JP_2003270529_A.pdf | Matched untracked local patent PDF |
| [CANON SERENAR 28mm f/3.5](../../src/lens-data/canon/CanonSerenar28mmf35.data.ts) | US 2,645,974 | 6 | `BaF3 (Schott)` | 1.57850 / 41.70 | S-TIL25 (Δnd=+0.0029, Δvd=-0.95)<br>PBL25 (Δnd=+0.0029, Δvd=-0.95)<br>E-FL5 (Δnd=+0.0029, Δvd=-0.81) | patents/US2645974.pdf | Matched untracked local patent PDF |
| [LEICA APO-VARIO-ELMARIT-SL 90-280mm f/2.8-4](../../src/lens-data/leica/LeicaAPOVarioElmaritSL90280mmf284.data.ts) | JP 2016-139125 A | 31 | `S-NSL36 (OHARA)` | 1.51823 / 59.00 | J-K3 (Δnd=+0.0000, Δvd=-0.18)<br>E-C3 (Δnd=-0.0000, Δvd=-0.04)<br>S-NSL3 (Δnd=-0.0000, Δvd=-0.10) | patents/JP2016139125A.pdf | Matched untracked local patent PDF |
| [LEICA ELMARIT-R 28mm f/2.8](../../src/lens-data/leica/LeicaElmarit28mmf28.data.ts) | US 3,591,257 | 5 | `LaF21 (SCHOTT)` | 1.79227 / 47.15 | TAF2 (Δnd=+0.0022, Δvd=-1.76)<br>J-LASF017 (Δnd=+0.0027, Δvd=-1.84)<br>Q-LASFPH3S (Δnd=+0.0030, Δvd=-1.90) | patents/US3591257.pdf | Matched untracked local patent PDF |
| [LEICA ELMARIT-R 28mm f/2.8](../../src/lens-data/leica/LeicaElmarit28mmf28.data.ts) | US 3,591,257 | 13 | `F2 (SCHOTT)` | 1.62408 / 36.11 | H-F6 (Δnd=+0.0009, Δvd=-0.52)<br>E-F1 (Δnd=+0.0018, Δvd=-0.37)<br>F1 (Δnd=+0.0018, Δvd=-0.51) | patents/US3591257.pdf | Matched untracked local patent PDF |
| [NIKON AF-S MICRO-NIKKOR 60mm f/2.8 G ED](../../src/lens-data/nikon/NikonAFSMicroNikkor60f28G.data.ts) | US 7,898,744 B2 | 20 | `NBFD3 (HOYA)` | 1.80100 / 34.96 | J-LAF016 (Δnd=+0.0000, Δvd=-0.04)<br>S-LAM66 (Δnd=-0.0000, Δvd=+0.01)<br>E-LAFH2 (Δnd=+0.0028, Δvd=-1.07) | patents/US7898744.pdf | Matched untracked local patent PDF |
| [NIKON AF-S NIKKOR 80-400mm f/4.5-5.6 G ED VR](../../src/lens-data/nikon/NikonNikkorAFS80400mmf4556G.data.ts) | US 2020/0049962 A1 | 6 | `S-LAH52 (OHARA)` | 1.80100 / 34.90 | J-LAF016 (Δnd=+0.0000, Δvd=+0.02)<br>S-LAM66 (Δnd=-0.0000, Δvd=+0.07)<br>E-LAFH2 (Δnd=+0.0028, Δvd=-1.01) | patents/US20200049962A1.pdf | Matched untracked local patent PDF |
| [NIKON PC-E NIKKOR 24mm f/3.5 D ED](../../src/lens-data/nikon/NikonPCENikkor24mmf35DED.data.ts) | JP 2008-151949A | 4 | `S-LAH63 (OHARA)` | 1.80100 / 34.96 | J-LAF016 (Δnd=+0.0000, Δvd=-0.04)<br>S-LAM66 (Δnd=-0.0000, Δvd=+0.01)<br>E-LAFH2 (Δnd=+0.0028, Δvd=-1.07) | patents/JP2008151949A.pdf | Matched untracked local patent PDF |
| [CANON RF 28-70mm f/2 L USM](../../src/lens-data/canon/CanonRF2870mmf2L.data.ts) | JP 2020-118807 A | 9 | `S-NPH5 (OHARA)` | 1.85478 / 24.80 | S-NBH56 (Δnd=-0.0000, Δvd=+0.00)<br>NBFD25 (Δnd=-0.0003, Δvd=+0.35) | patents/JP2020118807A.pdf | Matched untracked local patent PDF |
| [FUJIFILM FUJINON XF 90mm f/2 R LM WR](../../src/lens-data/fujifilm/FujifilmXF90mmf2.data.ts) | US 2016/0274335 A1 | 19 | `S-NSL3 (OHARA)` | 1.51742 / 52.43 | E-CF6 (Δnd=-0.0000, Δvd=-0.28)<br>S-NSL36 (Δnd=-0.0000, Δvd=+0.00) | patents/US20160274335A1.pdf | Matched untracked local patent PDF |
| [LEICA APO-MACRO-ELMARIT-TL 60mm f/2.8 ASPH.](../../src/lens-data/leica/LeicaAPOMacroElmaritTL60mmf28.data.ts) | JP 2016-090725A | 14 | `S-NSL3 (OHARA)` | 1.51742 / 52.15 | E-CF6 (Δnd=-0.0000, Δvd=+0.00)<br>S-NSL36 (Δnd=-0.0000, Δvd=+0.28) | patents/JP2016090725A.pdf | Matched untracked local patent PDF |
| [LEICA APO-MACRO-ELMARIT-TL 60mm f/2.8 ASPH.](../../src/lens-data/leica/LeicaAPOMacroElmaritTL60mmf28.data.ts) | JP 2016-090725A | 16 | `S-BAL2 (OHARA)` | 1.56883 / 56.04 | S-BAL14 (Δnd=+0.0000, Δvd=+0.32)<br>N-BAK4 (Δnd=-0.0000, Δvd=-0.06) | patents/JP2016090725A.pdf | Matched untracked local patent PDF |
| [LEICA APO-VARIO-ELMARIT-SL 90-280mm f/2.8-4](../../src/lens-data/leica/LeicaAPOVarioElmaritSL90280mmf284.data.ts) | JP 2016-139125 A | 32 | `S-BSM28 (OHARA)` | 1.62041 / 60.30 | N-SK16 (Δnd=-0.0000, Δvd=+0.02)<br>S-BSM16 (Δnd=+0.0000, Δvd=-0.01) | patents/JP2016139125A.pdf | Matched untracked local patent PDF |
| [LEICA APO-VARIO-ELMARIT-SL 90-280mm f/2.8-4](../../src/lens-data/leica/LeicaAPOVarioElmaritSL90280mmf284.data.ts) | JP 2016-139125 A | 41 | `S-BSM28 (OHARA)` | 1.62041 / 60.30 | N-SK16 (Δnd=-0.0000, Δvd=+0.02)<br>S-BSM16 (Δnd=+0.0000, Δvd=-0.01) | patents/JP2016139125A.pdf | Matched untracked local patent PDF |
| [LEICA ELMARIT-R 35mm f/2.8](../../src/lens-data/leica/LeicaElmaritR35mmf28.data.ts) | FR 1,471,493 | 6 | `SK16 / N-SK16 class (Schott legacy dense barium crown; patent n_e)` | 1.62410 / 60.10 | BACD15 (Δnd=-0.0011, Δvd=-1.98)<br>S-BSM15 (Δnd=-0.0011, Δvd=-1.93) | patents/FR_1471493_A.pdf | Matched untracked local patent PDF |
| [NIKON AF-S NIKKOR 120-300mm f/2.8 E FL ED SR VR](../../src/lens-data/nikon/NikonNikkorAFS120300mmf28.data.ts) | JP 2020-177057 A | 6 | `OHARA S-LAM52 (≈Schott N-KZFS8)` | 1.72047 / 34.71 | S-NBH8 (Δnd=+0.0000, Δvd=+0.00)<br>N-KZFS8 (Δnd=+0.0000, Δvd=-0.01) | patents/JP2020177057A.pdf | Matched untracked local patent PDF |
| [NIKON AF-S NIKKOR 28mm f/1.4 E ED](../../src/lens-data/nikon/NikonAFS28f14E.data.ts) | JP2017-227799A | 8 | `S-BAL2 (OHARA)` | 1.56883 / 56.00 | S-BAL14 (Δnd=+0.0000, Δvd=+0.36)<br>N-BAK4 (Δnd=-0.0000, Δvd=-0.02) | patents/JP2017227799A.pdf | Matched untracked local patent PDF |
| [NIKON AF-S NIKKOR 28mm f/1.4 E ED](../../src/lens-data/nikon/NikonAFS28f14E.data.ts) | JP2017-227799A | 21 | `S-TIH6 (OHARA)` | 1.80610 / 33.30 | NBFD15 (Δnd=-0.0000, Δvd=-0.03)<br>E-LAFH2 (Δnd=-0.0023, Δvd=+0.59) | patents/JP2017227799A.pdf | Matched untracked local patent PDF |
| [NIKON NIKKOR Z DX 18-140mm f/3.5-6.3 VR](../../src/lens-data/nikon/NikonZDX18140mmf3563VR.data.ts) | WO 2022/264542 A1 | 16 | `S-NSL3 (OHARA, Δνd ≈ 0.23)` | 1.51742 / 52.20 | E-CF6 (Δnd=-0.0000, Δvd=-0.05)<br>S-NSL36 (Δnd=-0.0000, Δvd=+0.23) | patents/WO2022264542A1.pdf | Matched untracked local patent PDF |
| [PENTAX FA 31mm f/1.8 AL Limited](../../src/lens-data/pentax/PentaxFA31mmf18ALLtd.data.ts) | US 6,560,042 B2 | 9 | `S-NSL3 (OHARA)` | 1.51742 / 52.40 | E-CF6 (Δnd=-0.0000, Δvd=-0.25)<br>S-NSL36 (Δnd=-0.0000, Δvd=+0.03) | patents/US6560042.pdf | Matched untracked local patent PDF |
| [NIKON AI NIKKOR 135mm f/2](../../src/lens-data/nikon/NikonAI135mmf2.data.ts) | US 4,062,630 | 3 | `HOYA FD60 (626/391)` | 1.62606 / 39.10 | H-BaF8 (Δnd=-0.0000, Δvd=-0.03) | patents/US4062630.pdf | Matched untracked local patent PDF |
| [PANASONIC LEICA DG SUMMILUX 9mm f/1.7 ASPH](../../src/lens-data/panasonic/PanasonicLeicaDG9mmf17.data.ts) | US 2023/0367186 A1 | 10 | `S-TIH4 (OHARA)` | 1.75211 / 25.00 | FF8 (Δnd=-0.0000, Δvd=+0.05) | patents/US20230367186A1.pdf | Matched untracked local patent PDF |
| [RODENSTOCK APO-SIRONAR-W 150mm f/5.6](../../src/lens-data/rodenstock/RodenstockApoSironarW150mmf56.data.ts) | DE 3907928 A1 | 1 | `N-BK7 class (Schott equivalent; patent-rounded nd/vd)` | 1.52000 / 64.20 | BK7G18 (Δnd=-0.0003, Δvd=-0.62) | patents/DE_3907928_A1.pdf | Matched untracked local patent PDF |
| [SONY FE 14mm f/1.8 GM](../../src/lens-data/sony/SonyFE14mmf18GM.data.ts) | WO 2021/199923 A1 | 24A | `S-LAH89-class lanthanum flint (OHARA; patent index aligns with catalog ne, 856/401)` | 1.85639 / 40.10 | L-LAH85V (Δnd=-0.0024, Δvd=+0.28) | patents/WO2021199923A1.pdf | Matched untracked local patent PDF |
| [SONY FE 14mm f/1.8 GM](../../src/lens-data/sony/SonyFE14mmf18GM.data.ts) | WO 2021/199923 A1 | 26 | `S-PHM52-class phosphate crown (OHARA; soft match, 622/639)` | 1.62228 / 63.90 | PCD40 (Δnd=-0.0023, Δvd=-0.02) | patents/WO2021199923A1.pdf | Matched untracked local patent PDF |
| [SONY SONNAR T* FE 35mm f/2.8 ZA](../../src/lens-data/sony/SonyFE35mmf28ZA.data.ts) | JP 2015-41012 A | 7A | `L-BAL42 (OHARA)` | 1.58000 / 59.46 | Q-SK52S (Δnd=+0.0029, Δvd=+0.05) | patents/JP2015041012A.pdf | Matched untracked local patent PDF |
| [FUJIFILM FUJINON 23mm f/2 (Fujifilm X100)](../../src/lens-data/fujifilm/FujifilmX10023mmf2.data.ts) | US 2012/0069456 A1 | 10A | `S-BAL14 (OHARA)` | 1.56865 / 58.60 | No catalog candidate | patents/US20120069456A1.pdf | Matched untracked local patent PDF |
| [FUJIFILM FUJINON XF 16-55mm f/2.8 R LM WR](../../src/lens-data/fujifilm/FujifilmXF1655mmf28R.data.ts) | US 2016/0154221 A1 | 13A | `Near OHARA L-TIM28 (685309)` | 1.68458 / 30.88 | No catalog candidate | patents/US20160154221A1.pdf | Matched untracked local patent PDF |
| [LEICA ELMAR-M 135mm f/4](../../src/lens-data/leica/LeicaElmarM135mmf4.data.ts) | DE 1 | 5 | `F5 class (Schott; patent e-line value stored)` | 1.60718 / 37.80 | No catalog candidate | patents/20260118637.pdf | Ambiguous untracked local match; also see patents/CH_314381_A.pdf, patents/CN_120386081_A.pdf, patents/CN_121454749_A.pdf |
| [LEICA ELMARIT-R 35mm f/2.8](../../src/lens-data/leica/LeicaElmaritR35mmf28.data.ts) | FR 1,471,493 | 10 | `BaF13-class (Schott legacy barium flint, inferred; patent n_e)` | 1.67340 / 46.90 | No catalog candidate | patents/FR_1471493_A.pdf | Matched untracked local patent PDF |
| [LEICA MACRO-ELMARIT-R 60mm f/2.8](../../src/lens-data/leica/LeicaMacroElmaritR60mmf28.data.ts) | US 3,552,833 | 1 | `LAF2 / S-LAM2 class (e-line catalog match; patent vendor not named)` | 1.74795 / 44.50 | No catalog candidate | patents/US3552833.pdf | Matched untracked local patent PDF |
| [LEICA MACRO-ELMARIT-R 60mm f/2.8](../../src/lens-data/leica/LeicaMacroElmaritR60mmf28.data.ts) | US 3,552,833 | 4 | `E-FD5 / S-TIM25 class (e-line catalog match; patent vendor not named)` | 1.67764 / 32.00 | No catalog candidate | patents/US3552833.pdf | Matched untracked local patent PDF |
| [MINOLTA MD ROKKOR 50mm f/1.4](../../src/lens-data/minolta/MinoltaRokkor50mmf14MD.data.ts) | US 4,182,550 | 10 | `S-LAH51 (OHARA)` | 1.78100 / 44.50 | No catalog candidate | patents/US4182550.pdf | Matched untracked local patent PDF |
| [NIKON AF NIKKOR 85mm f/1.4 D IF](../../src/lens-data/nikon/Nikon85f14D.data.ts) | US 5,640,277 | 5 | `S-LAH52 (OHARA, patent nd/vd match)` | 1.79631 / 40.90 | No catalog candidate | patents/US5640277.pdf | Matched untracked local patent PDF |
| [NIKON AF NIKKOR 85mm f/1.4 D IF](../../src/lens-data/nikon/Nikon85f14D.data.ts) | US 5,640,277 | 19 | `S-LAM60 (OHARA, patent nd/vd match)` | 1.74810 / 52.30 | No catalog candidate | patents/US5640277.pdf | Matched untracked local patent PDF |
| [NIKON ULTRA-MICRO-NIKKOR 29.5mm f/1.2](../../src/lens-data/nikon/NikonUltraMicroNikkor295mmf12.data.ts) | GB 1,050,055 | 3 | `F5 class flint (patent e-line index stored)` | 1.60752 / 38.10 | No catalog candidate | patents/GB_1050055_A.pdf | Matched untracked local patent PDF |
| [OLYMPUS OM ZUIKO AUTO-W 21mm f/2](../../src/lens-data/olympus/OlympusZuikoAuto21mmf2.data.ts) | US 4,210,388 | 7 | `F2 / TIF1 (Schott / OHARA)` | 1.61659 / 36.60 | No catalog candidate | patents/US4210388.pdf | Matched untracked local patent PDF |
| [OLYMPUS OM ZUIKO AUTO-W 21mm f/2](../../src/lens-data/olympus/OlympusZuikoAuto21mmf2.data.ts) | US 4,210,388 | 9 | `F2 / TIF1 (Schott / OHARA)` | 1.61659 / 36.60 | No catalog candidate | patents/US4210388.pdf | Matched untracked local patent PDF |
| [RODENSTOCK APO-SIRONAR-W 150mm f/5.6](../../src/lens-data/rodenstock/RodenstockApoSironarW150mmf56.data.ts) | DE 3907928 A1 | 9 | `FK3 class (Schott legacy equivalent; patent-rounded nd/vd)` | 1.46000 / 65.80 | No catalog candidate | patents/DE_3907928_A1.pdf | Matched untracked local patent PDF |
| [RODENSTOCK APO-SIRONAR-W 150mm f/5.6](../../src/lens-data/rodenstock/RodenstockApoSironarW150mmf56.data.ts) | DE 3907928 A1 | 11 | `N-KZFS5 class (Schott equivalent; patent-rounded nd/vd)` | 1.65000 / 39.60 | No catalog candidate | patents/DE_3907928_A1.pdf | Matched untracked local patent PDF |
| [SONY FE 14mm f/1.8 GM](../../src/lens-data/sony/SonyFE14mmf18GM.data.ts) | WO 2021/199923 A1 | 3 | `S-LAL18-class (OHARA; patent index aligns with catalog ne, 732/547)` | 1.73234 / 54.70 | No catalog candidate | patents/WO2021199923A1.pdf | Matched untracked local patent PDF |
| [SONY FE 70-200mm f/2.8 GM OSS II](../../src/lens-data/sony/SonyFE70200mmf28GMII.data.ts) | JP 2023-039817 A | 7 | `S-LAH66 class (OHARA) — lanthanum crown` | 1.77621 / 49.60 | No catalog candidate | patents/JP2023039817A.pdf | Matched untracked local patent PDF |
| [SONY SONNAR T* FE 35mm f/2.8 ZA](../../src/lens-data/sony/SonyFE35mmf28ZA.data.ts) | JP 2015-41012 A | 2 | `S-LAH55V (OHARA)` | 1.83000 / 42.72 | No catalog candidate | patents/JP2015041012A.pdf | Matched untracked local patent PDF |
| [SONY SONNAR T* FE 35mm f/2.8 ZA](../../src/lens-data/sony/SonyFE35mmf28ZA.data.ts) | JP 2015-41012 A | 9 | `S-LAH55V (OHARA)` | 1.83000 / 42.72 | No catalog candidate | patents/JP2015041012A.pdf | Matched untracked local patent PDF |

## Near-Complete Visible Lenses

These are efficient follow-up targets after mismatch blockers because one or two surfaces can make the whole lens chromatically trusted. Strict Sellmeier coverage remains shown separately.

| Lens | Trusted chromatic coverage | Strict Sellmeier coverage | Missing trusted surfaces | Missing quality mix |
|---|---:|---:|---:|---|
| [CANON RF 24-105mm f/2.8 L IS USM Z](../../src/lens-data/canon/CanonRF24105mmf28Z.data.ts) | 95.8% (23/24) | 95.8% (23/24) | 1 | abbe: 1 |
| [NIKON NIKKOR Z 70-200mm f/2.8 VR S](../../src/lens-data/nikon/NikonNikkorZ70200f28.data.ts) | 95.2% (20/21) | 95.2% (20/21) | 1 | abbe: 1 |
| [FUJIFILM FUJINON GF 100-200mm f/5.6 R LM OIS WR](../../src/lens-data/fujifilm/FujifilmGF100200mmf56.data.ts) | 95.0% (19/20) | 95.0% (19/20) | 1 | abbe: 1 |
| [NIKON 1 NIKKOR VR 10-100mm f/4-5.6](../../src/lens-data/nikon/Nikon1Nikkor10100mmf4VR.data.ts) | 95.0% (19/20) | 95.0% (19/20) | 1 | abbe: 1 |
| [NIKON AF-S NIKKOR 80-400mm f/4.5-5.6 G ED VR](../../src/lens-data/nikon/NikonNikkorAFS80400mmf4556G.data.ts) | 95.0% (19/20) | 95.0% (19/20) | 1 | abbe: 1 |
| [SONY FE 24-70mm f/2.8 GM II](../../src/lens-data/sony/SonyFE2470mmf28GMII.data.ts) | 95.0% (19/20) | 95.0% (19/20) | 1 | abbe: 1 |
| [CANON RF 28-70mm f/2 L USM](../../src/lens-data/canon/CanonRF2870mmf2L.data.ts) | 94.7% (18/19) | 94.7% (18/19) | 1 | abbe: 1 |
| [NIKON NIKKOR Z 24-200mm f/4-6.3 VR](../../src/lens-data/nikon/NikonNikkorZ24200mmf463VR.data.ts) | 94.7% (18/19) | 94.7% (18/19) | 1 | abbe: 1 |
| [CANON RF 24-105mm f/4 L IS USM](../../src/lens-data/canon/CanonRF24105mmf4L.data.ts) | 94.4% (17/18) | 94.4% (17/18) | 1 | abbe: 1 |
| [NIKON AF-S NIKKOR 16-35mm f/4 G ED VR](../../src/lens-data/nikon/NikonNikkorAFS1635mmf4.data.ts) | 94.4% (17/18) | 94.4% (17/18) | 1 | abbe: 1 |
| [NIKON PC NIKKOR 19mm f/4 E ED](../../src/lens-data/nikon/NikonNikkorPCE19mmf4E.data.ts) | 94.4% (17/18) | 94.4% (17/18) | 1 | abbe: 1 |
| [OLYMPUS ZUIKO DIGITAL ED 14-35mm f/2.0 SWD](../../src/lens-data/olympus/OlympusMZuiko1435mmf2ED.data.ts) | 94.4% (17/18) | 94.4% (17/18) | 1 | abbe: 1 |
| [CANON EF 28-200mm f/3.5-5.6 USM](../../src/lens-data/canon/CanonEF28200mmf3556USM.data.ts) | 94.1% (16/17) | 94.1% (16/17) | 1 | abbe: 1 |
| [CANON RF 135mm f/1.8 L IS USM](../../src/lens-data/canon/CanonRF135f18.data.ts) | 94.1% (16/17) | 94.1% (16/17) | 1 | abbe: 1 |
| [FUJIFILM FUJINON GF 45-100mm f/4 R LM OIS WR](../../src/lens-data/fujifilm/FujifilmGF45100mmf4.data.ts) | 94.1% (16/17) | 94.1% (16/17) | 1 | abbe: 1 |
| [FUJIFILM FUJINON XF 16-55mm f/2.8 R LM WR](../../src/lens-data/fujifilm/FujifilmXF1655mmf28R.data.ts) | 94.1% (16/17) | 94.1% (16/17) | 1 | abbe: 1 |
| [CANON RF 15-35mm f/2.8 L IS USM](../../src/lens-data/canon/CanonRF1535f28.data.ts) | 93.8% (15/16) | 93.8% (15/16) | 1 | abbe: 1 |
| [NIKON NIKKOR Z DX 50-250mm f/4.5-6.3 VR](../../src/lens-data/nikon/NikonZDX50250mmf4564VR.data.ts) | 93.8% (15/16) | 93.8% (15/16) | 1 | abbe: 1 |
| [PANASONIC LUMIX G VARIO 7-14mm f/4 ASPH.](../../src/lens-data/panasonic/PanasonicLumixGVario714mmf4.data.ts) | 93.8% (15/16) | 93.8% (15/16) | 1 | abbe: 1 |
| [PENTAX HD D FA 28-105mm f/3.5-5.6 ED DC WR](../../src/lens-data/pentax/PentaxDFA28105mmF3556EDDCWR.data.ts) | 93.8% (15/16) | 93.8% (15/16) | 1 | abbe: 1 |
| [CANON RF 50mm f/1.4 L VCM](../../src/lens-data/canon/CanonRF50mmf14LVCM.data.ts) | 93.3% (14/15) | 93.3% (14/15) | 1 | abbe: 1 |
| [FUJIFILM FUJINON GF 32-64mm f/4 R LM WR](../../src/lens-data/fujifilm/FujifilmGF3264mmf4.data.ts) | 93.3% (14/15) | 93.3% (14/15) | 1 | abbe: 1 |
| [FUJIFILM FUJINON XF 23mm f/1.4 R LM WR](../../src/lens-data/fujifilm/FujifilmXF23mmf14RLMWR.data.ts) | 93.3% (14/15) | 93.3% (14/15) | 1 | abbe: 1 |
| [FUJIFILM FUJINON XF 33mm f/1.4 R LM WR](../../src/lens-data/fujifilm/FujifilmXF33mmf14RLMWR.data.ts) | 93.3% (14/15) | 93.3% (14/15) | 1 | abbe: 1 |
| [NIKON AF ZOOM-NIKKOR 28-85mm f/3.5-4.5](../../src/lens-data/nikon/NikonAFZoomNikkor2885mmf3545.data.ts) | 93.3% (14/15) | 93.3% (14/15) | 1 | abbe: 1 |
| [NIKON ZOOM-NIKKOR AUTO 80-200mm f/4.5](../../src/lens-data/nikon/NikonAutoZoomNikkor80200mmf45.data.ts) | 93.3% (14/15) | 93.3% (14/15) | 1 | abbe: 1 |
| [OLYMPUS ZUIKO DIGITAL ED 12-60mm f/2.8-4.0 SWD](../../src/lens-data/olympus/OlympusMZuiko1260mmf284ED.data.ts) | 93.3% (14/15) | 93.3% (14/15) | 1 | abbe: 1 |
| [SIGMA 20mm f/1.4 DG HSM | Art](../../src/lens-data/sigma/Sigma20mmf14DGHSMArt.data.ts) | 93.3% (14/15) | 93.3% (14/15) | 1 | abbe: 1 |
| [SIGMA 35mm f/1.4 DG DN | Art](../../src/lens-data/sigma/SigmaDGDNA35mmf14.data.ts) | 93.3% (14/15) | 93.3% (14/15) | 1 | abbe: 1 |
| [CANON EF-M 32mm f/1.4 STM](../../src/lens-data/canon/CanonEFM32mmf14STM.data.ts) | 92.9% (13/14) | 92.9% (13/14) | 1 | abbe: 1 |
| [CANON EF-S 10-18mm f/4.5-5.6 IS STM](../../src/lens-data/canon/CanonEFS1018mmf4.data.ts) | 92.9% (13/14) | 92.9% (13/14) | 1 | abbe: 1 |
| [CANON RF 85mm f/1.2 L USM](../../src/lens-data/canon/CanonRF85mmf12L.data.ts) | 92.9% (13/14) | 92.9% (13/14) | 1 | abbe: 1 |
| [FUJIFILM FUJINON GF 120mm f/4 R LM OIS WR Macro](../../src/lens-data/fujifilm/FujifilmGF120mmf4RLM.data.ts) | 92.9% (13/14) | 92.9% (13/14) | 1 | abbe: 1 |
| [FUJIFILM FUJINON GF 55mm f/1.7 R WR](../../src/lens-data/fujifilm/FujifilmGF55mmf17.data.ts) | 92.9% (13/14) | 92.9% (13/14) | 1 | abbe: 1 |
| [NIKON AF-P DX NIKKOR 70-300mm f/4.5-6.3 G ED VR](../../src/lens-data/nikon/NikonAFPDX70300mmf4563G.data.ts) | 92.9% (13/14) | 92.9% (13/14) | 1 | abbe: 1 |
| [OLYMPUS OM-SYSTEM ZUIKO AUTO-ZOOM 65-200mm f/4](../../src/lens-data/olympus/OlympusZuikoAutoZoom65200mmf4.data.ts) | 92.9% (13/14) | 92.9% (13/14) | 1 | abbe: 1 |
| [SIGMA 50mm f/1.4 DG DN | Art](../../src/lens-data/sigma/SigmaDGDNArt50mmf14.data.ts) | 92.9% (13/14) | 92.9% (13/14) | 1 | abbe: 1 |
| [NIKON AF MICRO-NIKKOR 200mm f/4D IF-ED](../../src/lens-data/nikon/NikonAFMicroNikkor200mmf4D.data.ts) | 92.3% (12/13) | 92.3% (12/13) | 1 | abbe: 1 |
| [CANON RF 85mm f/2 Macro IS STM](../../src/lens-data/canon/CanonRF85mmf2Macro.data.ts) | 91.7% (11/12) | 91.7% (11/12) | 1 | abbe: 1 |
| [FUJIFILM TCL-X100 33mm f/2 (Fujifilm X100)](../../src/lens-data/fujifilm/FujifilmX100TCLX100.data.ts) | 91.7% (11/12) | 91.7% (11/12) | 1 | abbe: 1 |
| [NIKON 1 NIKKOR VR 10-30mm f/3.5-5.6](../../src/lens-data/nikon/Nikon1Nikkor1030mmf3556.data.ts) | 91.7% (11/12) | 91.7% (11/12) | 1 | abbe: 1 |
| [Nikon AF Nikkor 20mm f/2.8D](../../src/lens-data/nikon/NikonAFNikkor20mmf28D.data.ts) | 91.7% (11/12) | 91.7% (11/12) | 1 | abbe: 1 |
| [NIKON AF-S MICRO-NIKKOR 60mm f/2.8 G ED](../../src/lens-data/nikon/NikonAFSMicroNikkor60f28G.data.ts) | 91.7% (11/12) | 91.7% (11/12) | 1 | abbe: 1 |
| [NIKON NIKKOR Z 85mm f/1.8 S](../../src/lens-data/nikon/NikonZ85f18S.data.ts) | 91.7% (11/12) | 91.7% (11/12) | 1 | abbe: 1 |
| [SONY PLANAR T* FE 50mm f/1.4 ZA](../../src/lens-data/sony/SonyPlanarFE50mmf14ZA.data.ts) | 91.7% (11/12) | 91.7% (11/12) | 1 | abbe: 1 |
| [CANON EF 50mm f/1.0 L USM](../../src/lens-data/canon/CanonEF50mmf1L.data.ts) | 90.9% (10/11) | 90.9% (10/11) | 1 | abbe: 1 |
| [CANON EF-S 18-55mm f/3.5-5.6 IS](../../src/lens-data/canon/CanonEFS1855mmf3556IS.data.ts) | 90.9% (10/11) | 90.9% (10/11) | 1 | abbe: 1 |
| [FUJIFILM FUJINON XF 56mm f/1.2 R](../../src/lens-data/fujifilm/FujifilmXF56mmf12.data.ts) | 90.9% (10/11) | 90.9% (10/11) | 1 | abbe: 1 |
| [PENTAX HD D FA 21mm f/2.4 ED Limited DC WR](../../src/lens-data/pentax/PentaxHDDFA21mmf24Limited.data.ts) | 90.9% (10/11) | 90.9% (10/11) | 1 | abbe: 1 |
| [SONY E 18-55mm f/3.5-5.6 OSS](../../src/lens-data/sony/SonyE1855mmf3556.data.ts) | 90.9% (10/11) | 90.9% (10/11) | 1 | abbe: 1 |
| [SAMYANG AF 35-150mm f/2-2.8 FE / L](../../src/lens-data/samyang/SamyangAF35150mmf228.data.ts) | 90.9% (20/22) | 90.9% (20/22) | 2 | abbe: 2 |
| [NIKON AF-S NIKKOR 24-70mm f/2.8 E ED VR](../../src/lens-data/nikon/NikonNikkorAFS2470mmf28E.data.ts) | 90.5% (19/21) | 90.5% (19/21) | 2 | abbe: 2 |
| [CANON EF 28-90mm f/4-5.6 II USM](../../src/lens-data/canon/CanonEF2890mmf456II.data.ts) | 90.0% (9/10) | 90.0% (9/10) | 1 | abbe: 1 |
| [NIKON NIKKOR Z DX 16-50mm f/3.5-6.3 VR](../../src/lens-data/nikon/NikonZDX1650mmf3563VR.data.ts) | 90.0% (9/10) | 90.0% (9/10) | 1 | abbe: 1 |
| [OLYMPUS OM J. ZUIKO AUTO-W 24mm f/2](../../src/lens-data/olympus/OlympusZuiko24mmf2J.data.ts) | 90.0% (9/10) | 90.0% (9/10) | 1 | abbe: 1 |
| [VOIGTLÄNDER ULTRON Vintage Line 28mm f/2 Aspherical](../../src/lens-data/voigtlander/VoigtlanderUltron28f2.data.ts) | 90.0% (9/10) | 90.0% (9/10) | 1 | abbe: 1 |
| [CANON NEW FD 150-600mm f/5.6L](../../src/lens-data/canon/CanonFD150600mmf56L.data.ts) | 89.5% (17/19) | 89.5% (17/19) | 2 | abbe: 2 |
| [PENTAX SMC DA 17-70mm f/4 AL [IF] SDM](../../src/lens-data/pentax/PentaxDA1770mmf4ALSDM.data.ts) | 89.5% (17/19) | 89.5% (17/19) | 2 | abbe: 2 |
| [CANON EF 28-105mm f/4-5.6](../../src/lens-data/canon/CanonEF28105mmf456.data.ts) | 88.9% (8/9) | 88.9% (8/9) | 1 | abbe: 1 |
| [CANON ZOOM LENS 15-45mm f/2.8-5.6 (PowerShot G1 X Mark III)](../../src/lens-data/canon/CanonPowerShotG1XIII1545mmf2856.data.ts) | 88.9% (8/9) | 88.9% (8/9) | 1 | abbe: 1 |
| [CANON RF 16mm f/2.8 STM](../../src/lens-data/canon/CanonRF16mmf28STM.data.ts) | 88.9% (8/9) | 88.9% (8/9) | 1 | abbe: 1 |
| [HASSELBLAD HC Macro 120mm f/4](../../src/lens-data/hasselblad/HasselbladHC120mmf4Macro.data.ts) | 88.9% (8/9) | 88.9% (8/9) | 1 | abbe: 1 |
| [NIKON AI NIKKOR 35mm f/1.4S](../../src/lens-data/nikon/NikonAINikkor35mmf14S.data.ts) | 88.9% (8/9) | 88.9% (8/9) | 1 | abbe: 1 |
| [NIKON FISHEYE-NIKKOR 6mm f/5.6](../../src/lens-data/nikon/NikonFisheyeNikkor6mmf56.data.ts) | 88.9% (8/9) | 88.9% (8/9) | 1 | abbe: 1 |
| [NIKON NIKKOR-N 5cm f/1.1](../../src/lens-data/nikon/NikonN5cmf11.data.ts) | 88.9% (8/9) | 88.9% (8/9) | 1 | abbe: 1 |
| [NIKON NIKKOR-N AUTO 28mm f/2](../../src/lens-data/nikon/NikonNikkorN28mmf2.data.ts) | 88.9% (8/9) | 88.9% (8/9) | 1 | abbe: 1 |
| [NIKON NIKKOR Z 26mm f/2.8](../../src/lens-data/nikon/NikonZ26f28.data.ts) | 88.9% (8/9) | 88.9% (8/9) | 1 | abbe: 1 |
| [PENTAX DA 21mm f/3.2 AL Limited](../../src/lens-data/pentax/PentaxDA21mmf32Limited.data.ts) | 88.9% (8/9) | 88.9% (8/9) | 1 | abbe: 1 |
| [SONY E 35mm f/1.8 OSS](../../src/lens-data/sony/SonyE35mmf18.data.ts) | 88.9% (8/9) | 88.9% (8/9) | 1 | abbe: 1 |
| [VOIGTLÄNDER APO-LANTHAR 180mm f/4 SL Close Focus](../../src/lens-data/voigtlander/VoigtlanderApoLanthar180mmf4.data.ts) | 88.9% (8/9) | 88.9% (8/9) | 1 | abbe: 1 |
| [FUJIFILM FUJINON 23mm f/2 (Fujifilm X100)](../../src/lens-data/fujifilm/FujifilmX10023mmf2.data.ts) | 87.5% (7/8) | 87.5% (7/8) | 1 | abbe: 1 |
| [FUJIFILM FUJINON XF 18mm f/2 R](../../src/lens-data/fujifilm/FujifilmXF18mmf2.data.ts) | 87.5% (7/8) | 87.5% (7/8) | 1 | abbe: 1 |
| [FUJIFILM FUJINON XF 35mm f/1.4 R](../../src/lens-data/fujifilm/FujifilmXF35mmf14R.data.ts) | 87.5% (7/8) | 87.5% (7/8) | 1 | abbe: 1 |
| [MINOLTA AF 100mm f/2.8 Macro](../../src/lens-data/minolta/MinoltaAF100mmf28Macro.data.ts) | 87.5% (7/8) | 87.5% (7/8) | 1 | abbe: 1 |
| [OLYMPUS H.ZUIKO AUTO-W 24mm f/2.8](../../src/lens-data/olympus/OlympusZuiko24mmf28.data.ts) | 87.5% (7/8) | 87.5% (7/8) | 1 | abbe: 1 |
| [RODENSTOCK GRANDAGON-N 75mm f/4.5](../../src/lens-data/rodenstock/RodenstockGrandagonN75mmf45.data.ts) | 87.5% (7/8) | 62.5% (5/8) | 1 | abbe: 1 |
| [SCHNEIDER-KREUZNACH SUPER-SYMMAR HM 120mm f/5.6](../../src/lens-data/schneider-kreuznach/SchneiderSuperSymmarHM120mmf56.data.ts) | 87.5% (7/8) | 87.5% (7/8) | 1 | abbe: 1 |
| [SONY SONNAR T* E 24mm f/1.8 ZA](../../src/lens-data/sony/SonyFE24mmf18ZA.data.ts) | 87.5% (7/8) | 87.5% (7/8) | 1 | abbe: 1 |
| [CANON EF 11-24mm f/4 L USM](../../src/lens-data/canon/CanonEF1124mmf4L.data.ts) | 87.5% (14/16) | 87.5% (14/16) | 2 | abbe: 2 |
| [NIKON AF-S NIKKOR 24-70mm f/2.8 G ED](../../src/lens-data/nikon/NikonAFS2470mmf28G.data.ts) | 87.5% (14/16) | 87.5% (14/16) | 2 | abbe: 2 |
| [NIKON NIKKOR Z MC 105mm f/2.8 VR S](../../src/lens-data/nikon/NikonZ105f28.data.ts) | 87.5% (14/16) | 87.5% (14/16) | 2 | abbe: 2 |
| [Canon FD 28mm f/2.8 S.C.](../../src/lens-data/canon/CanonFD28mmf28.data.ts) | 85.7% (6/7) | 85.7% (6/7) | 1 | abbe: 1 |
| [CARL ZEISS B-DISTAGON 35mm f/4 (Contarex)](../../src/lens-data/carl-zeiss-oberkochen/ZeissDistagon35mmf4.data.ts) | 85.7% (6/7) | 85.7% (6/7) | 1 | abbe: 1 |
| [NIKON AF ZOOM-NIKKOR 28-80mm f/3.3-5.6 G](../../src/lens-data/nikon/NikonAFZoomNikkor2880mmf3356.data.ts) | 85.7% (6/7) | 85.7% (6/7) | 1 | abbe: 1 |
| [OLYMPUS G.ZUIKO AUTO-W 21mm f/3.5](../../src/lens-data/olympus/OlympusGZuikoAutoW21mmf35.data.ts) | 85.7% (6/7) | 85.7% (6/7) | 1 | abbe: 1 |
| [SONY E 20mm f/2.8](../../src/lens-data/sony/SonyE20mmf28.data.ts) | 85.7% (6/7) | 85.7% (6/7) | 1 | abbe: 1 |
| [CANON EF-S 10-22mm f/3.5-4.5 USM](../../src/lens-data/canon/CanonEFS1022mmf3545.data.ts) | 85.7% (12/14) | 85.7% (12/14) | 2 | abbe: 2 |
| [FUJIFILM FUJINON GF 20-35mm f/4 R WR](../../src/lens-data/fujifilm/FujifilmGF2035mmf4.data.ts) | 85.7% (12/14) | 85.7% (12/14) | 2 | abbe: 2 |
| [NIKON AF-S VR MICRO-NIKKOR 105mm f/2.8 G IF-ED](../../src/lens-data/nikon/NikonAFS105f28G.data.ts) | 85.7% (12/14) | 85.7% (12/14) | 2 | abbe: 2 |
| [Nikon AF-S NIKKOR 24mm f/1.8G ED](../../src/lens-data/nikon/NikonAFSNikkor24mmf18GED.data.ts) | 85.7% (12/14) | 85.7% (12/14) | 2 | abbe: 2 |
| [NIKON AF ZOOM-NIKKOR 28-200mm f/3.5-5.6 G IF-ED](../../src/lens-data/nikon/NikonAFZoomNikkor28200mmf3556GIFED.data.ts) | 85.7% (12/14) | 85.7% (12/14) | 2 | abbe: 2 |
| [NIKON AF-S NIKKOR 105mm f/1.4 E ED](../../src/lens-data/nikon/NikonNikkor105f14E.data.ts) | 85.7% (12/14) | 85.7% (12/14) | 2 | abbe: 2 |
| [NIKON AF-S NIKKOR 24mm f/1.4 G ED](../../src/lens-data/nikon/NikonNikkorAFS24mmf14G.data.ts) | 85.7% (12/14) | 85.7% (12/14) | 2 | abbe: 2 |
| [NIKON NIKKOR Z 24-70mm f/4 S](../../src/lens-data/nikon/NikonNikkorZ2470mmf4S.data.ts) | 85.7% (12/14) | 85.7% (12/14) | 2 | abbe: 2 |
| [NIKON NIKKOR Z 50mm f/1.8 S](../../src/lens-data/nikon/NikonNikkorZ50f18S.data.ts) | 85.7% (12/14) | 85.7% (12/14) | 2 | constant: 2 |
| [SIGMA 85mm f/1.4 DG HSM | Art](../../src/lens-data/sigma/Sigma85mmf14Art.data.ts) | 85.7% (12/14) | 85.7% (12/14) | 2 | abbe: 2 |
| [NIKON AF-P DX NIKKOR 18-55mm f/3.5-5.6 G VR](../../src/lens-data/nikon/NikonAFPDX1855mmf3556G.data.ts) | 84.6% (11/13) | 84.6% (11/13) | 2 | abbe: 2 |
| [NIKON AI ZOOM-NIKKOR 80-200mm f/4](../../src/lens-data/nikon/NikonAINikkor80200mmf4.data.ts) | 84.6% (11/13) | 84.6% (11/13) | 2 | abbe: 2 |
| [Nikon AF Nikkor 28mm f/2.8D](../../src/lens-data/nikon/NikonAFNikkor28mmf28D.data.ts) | 83.3% (5/6) | 83.3% (5/6) | 1 | abbe: 1 |
| [NIKON REFLEX-NIKKOR 500mm f/8 (New)](../../src/lens-data/nikon/NikonReflexNikkor500mmf8New.data.ts) | 83.3% (5/6) | 83.3% (5/6) | 1 | abbe: 1 |
| [NIKON REFLEX-NIKKOR·C 500mm f/8](../../src/lens-data/nikon/NikonReflexNikkorC500mmf8.data.ts) | 83.3% (5/6) | 83.3% (5/6) | 1 | abbe: 1 |
| [OLYMPUS F.ZUIKO AUTO-T 200mm f/5](../../src/lens-data/olympus/OlympusZuikoAutoT200mmf5.data.ts) | 83.3% (5/6) | 83.3% (5/6) | 1 | abbe: 1 |
| [SCHNEIDER-KREUZNACH SUPER-ANGULON 90mm f/8](../../src/lens-data/schneider-kreuznach/SchneiderSuperAngulon90mmf8.data.ts) | 83.3% (5/6) | 83.3% (5/6) | 1 | abbe: 1 |
| [SCHNEIDER-KREUZNACH TECHNIKA SUPER-ANGULON 75mm f/8](../../src/lens-data/schneider-kreuznach/SchneiderTechnikaSuperAngulon75mmf8.data.ts) | 83.3% (5/6) | 83.3% (5/6) | 1 | abbe: 1 |
| [VIVITAR SERIES 1 200mm f/3.0 VMC](../../src/lens-data/vivitar/VivitarSeries1200mmf3.data.ts) | 83.3% (5/6) | 83.3% (5/6) | 1 | abbe: 1 |
| [FUJIFILM SUPER EBC FUJINON 7.1-28.4mm f/2-2.8 (Fujifilm X10)](../../src/lens-data/fujifilm/FujifilmX1071284mmf228.data.ts) | 81.8% (9/11) | 81.8% (9/11) | 2 | abbe: 2 |
| [FUJIFILM FUJINON XF 90mm f/2 R LM WR](../../src/lens-data/fujifilm/FujifilmXF90mmf2.data.ts) | 81.8% (9/11) | 81.8% (9/11) | 2 | abbe: 2 |
| [LEICA SUMMILUX 28mm f/1.7 ASPH. (Leica Q, Q2, Q3)](../../src/lens-data/leica/Leica28mmf17.data.ts) | 81.8% (9/11) | 81.8% (9/11) | 2 | abbe: 2 |
| [NIKON AF NIKKOR 28mm f/1.4 D](../../src/lens-data/nikon/NikonAF28f14D.data.ts) | 81.8% (9/11) | 81.8% (9/11) | 2 | abbe: 2 |
| [NIKON NIKKOR Z 35mm f/1.8 S](../../src/lens-data/nikon/NikonZ35f18S.data.ts) | 81.8% (9/11) | 81.8% (9/11) | 2 | abbe: 2 |
| [PENTAX HD D FA645 35mm f/3.5 AL [IF]](../../src/lens-data/pentax/PentaxDFA64535mmf35AL.data.ts) | 81.8% (9/11) | 81.8% (9/11) | 2 | abbe: 2 |
| [AGFA COLOR-MAGNOLAR II 100mm f/4.5](../../src/lens-data/agfa/AgfaColorMagnolarII100mmf45.data.ts) | 80.0% (4/5) | 40.0% (2/5) | 1 | abbe: 1 |
| [CANON SERENAR 100mm f/3.5 I](../../src/lens-data/canon/CanonSerenar100mmf35.data.ts) | 80.0% (4/5) | 80.0% (4/5) | 1 | abbe: 1 |
| [OLYMPUS E.ZUIKO AUTO-T 135mm f/3.5](../../src/lens-data/olympus/OlympusZuiko135mmf35.data.ts) | 80.0% (4/5) | 80.0% (4/5) | 1 | abbe: 1 |
| [FUJIFILM FUJINON XF 23mm f/2 R WR](../../src/lens-data/fujifilm/FujifilmXF23mmf2RWR.data.ts) | 80.0% (8/10) | 80.0% (8/10) | 2 | abbe: 2 |
| [LEICA APO-MACRO-ELMARIT-TL 60mm f/2.8 ASPH.](../../src/lens-data/leica/LeicaAPOMacroElmaritTL60mmf28.data.ts) | 80.0% (8/10) | 80.0% (8/10) | 2 | abbe: 2 |
| [LEICA ELMARIT-TL 18mm f/2.8 ASPH.](../../src/lens-data/leica/LeicaElmaritTL18mmf28.data.ts) | 80.0% (8/10) | 80.0% (8/10) | 2 | abbe: 2 |
| [MINOLTA AF APO TELE 300mm f/2.8](../../src/lens-data/minolta/MinoltaAF300mmf28.data.ts) | 80.0% (8/10) | 80.0% (8/10) | 2 | abbe: 2 |
| [NIKON AF NIKKOR 85mm f/1.4 D IF](../../src/lens-data/nikon/Nikon85f14D.data.ts) | 80.0% (8/10) | 80.0% (8/10) | 2 | abbe: 2 |
| [Nikon AI Micro-Nikkor 105mm f/2.8S](../../src/lens-data/nikon/NikonAIMicroNikkor105mmf28S.data.ts) | 80.0% (8/10) | 80.0% (8/10) | 2 | abbe: 2 |
| [OLYMPUS ZUIKO AUTO-FISHEYE 8mm f/2.8](../../src/lens-data/olympus/OlympusZuikoAutoFisheye8mmf28.data.ts) | 80.0% (8/10) | 80.0% (8/10) | 2 | abbe: 2 |
| [SONY FE 24mm f/2.8 G](../../src/lens-data/sony/SonyFE24mmf28G.data.ts) | 80.0% (8/10) | 80.0% (8/10) | 2 | abbe: 2 |

## Sweep 2 - Code-Only Missing Sellmeier

Add catalog entries only when public coefficient-backed vendor data is available and `assertCatalogConsistent` passes.

| Code | Elements | Lens files | localPatentStatus | reviewedSidecarStatus | Representative rows |
|---|---:|---:|---|---|---|
| 670571 | 10 | 5 | patents/US4871239.pdf<br>patents/JP2004109559A.pdf<br>patents/US4951078.pdf | 4/10 representative rows reviewed | [MINOLTA AF APO TELE 300mm f/2.8](../../src/lens-data/minolta/MinoltaAF300mmf28.data.ts) Element 8 (1.67000 / 57.07)<br>[MINOLTA AF 35-105mm f/3.5-4.5 New (v2)](../../src/lens-data/minolta/MinoltaAF35105mmf3545v2.data.ts) Element 2 (1.67000 / 57.07)<br>[MINOLTA AF 35-105mm f/3.5-4.5 New (v2)](../../src/lens-data/minolta/MinoltaAF35105mmf3545v2.data.ts) Element 5 (1.67000 / 57.07) |
| 796409 | 6 | 5 | patents/US5751485.pdf<br>patents/US5734508.pdf<br>patents/US4699475.pdf<br>patents/US5579169.pdf | 2/6 representative rows reviewed | [NIKON AF MICRO-NIKKOR 200mm f/4D IF-ED](../../src/lens-data/nikon/NikonAFMicroNikkor200mmf4D.data.ts) Element 4 (1.79631 / 40.90)<br>[NIKON AI AF ZOOM-NIKKOR 24-120mm f/3.5-5.6 D IF](../../src/lens-data/nikon/NikonAFNikkor24120mmf3556D.data.ts) Element 11 — L3F3 (1.79631 / 40.90)<br>[Nikon AI Zoom-Nikkor 35–105mm f/3.5–4.5S](../../src/lens-data/nikon/NikonAIZoomNikkor35105mmf3545.data.ts) Element 8 (1.79600 / 40.90) |
| 797454 | 6 | 5 | patents/US5528428.pdf<br>patents/US5557473.pdf<br>patents/JPA 1999030748-000000.pdf<br>patents/US5579169.pdf | 2/6 representative rows reviewed | [NIKON NIKKOR 28mm f/2.8 (Nikon 28Ti)](../../src/lens-data/nikon/Nikon28Ti28mmf28.data.ts) Element 6 (1.79668 / 45.40)<br>[Nikon AF Nikkor 28mm f/2.8D](../../src/lens-data/nikon/NikonAFNikkor28mmf28D.data.ts) Element 3 (1.79668 / 45.40)<br>[NIKON AF ZOOM-NIKKOR 28-80mm f/3.5-5.6 D](../../src/lens-data/nikon/NikonAFZoomNikkor2880mmf3556.data.ts) Element 2 (1.79668 / 45.37) |
| 493836 | 6 | 2 | patents/JP2004109559A.pdf | No reviewed-sidecar hit | [MINOLTA AF APO Tele 200mm f/2.8](../../src/lens-data/minolta/MinoltaAF200mmf28.data.ts) Element 1 (1.49310 / 83.55)<br>[MINOLTA AF APO Tele 200mm f/2.8](../../src/lens-data/minolta/MinoltaAF200mmf28.data.ts) Element 2 (1.49310 / 83.55)<br>[MINOLTA AF 70-200mm f/2.8 APO G (D) SSM](../../src/lens-data/minolta/MinoltaAF70200mmf28APO.data.ts) Element 2 (1.49310 / 83.58) |
| 486815 | 5 | 1 | patents/US3743384.pdf | All representative rows reviewed | [Nikon AI Zoom-Nikkor 360-1200mm f/11 ED](../../src/lens-data/nikon/NikonAIZoomNikkor3601200mmf11ED.data.ts) Front ED-type singlet (1.48606 / 81.50)<br>[Nikon AI Zoom-Nikkor 360-1200mm f/11 ED](../../src/lens-data/nikon/NikonAIZoomNikkor3601200mmf11ED.data.ts) Front triplet positive (1.48606 / 81.50)<br>[Nikon AI Zoom-Nikkor 360-1200mm f/11 ED](../../src/lens-data/nikon/NikonAIZoomNikkor3601200mmf11ED.data.ts) Hyperchromatic doublet negative (1.48606 / 81.50) |
| 744495 | 4 | 4 | patents/US7508592.pdf<br>patents/US20200142168A1.pdf<br>patents/JPWO2019049372A1.pdf<br>patents/WO2020136749A1.pdf | All representative rows reviewed | [NIKON AF-S NIKKOR 24-70mm f/2.8 G ED](../../src/lens-data/nikon/NikonAFS2470mmf28G.data.ts) Element 1 (1.74443 / 49.52)<br>[NIKON AF-S NIKKOR 24-70mm f/2.8 E ED VR](../../src/lens-data/nikon/NikonNikkorAFS2470mmf28E.data.ts) Element 1 (1.74389 / 49.50)<br>[NIKON NIKKOR Z 24-70mm f/4 S](../../src/lens-data/nikon/NikonNikkorZ2470mmf4S.data.ts) Element 3 (1.74353 / 49.50) |
| 501565 | 4 | 2 | patents/US4189212.pdf<br>patents/US3743384.pdf | All representative rows reviewed | [Nikon AI Zoom-Nikkor 25-50mm f/4](../../src/lens-data/nikon/NikonAIZoomNikkor2550mmf4.data.ts) Element 6 (1.50137 / 56.50)<br>[Nikon AI Zoom-Nikkor 25-50mm f/4](../../src/lens-data/nikon/NikonAIZoomNikkor2550mmf4.data.ts) Element 7 (1.50137 / 56.50)<br>[Nikon AI Zoom-Nikkor 25-50mm f/4](../../src/lens-data/nikon/NikonAIZoomNikkor2550mmf4.data.ts) Element 9b (1.50137 / 56.50) |
| 863252 | 4 | 2 | patents/WO2021199923A1.pdf<br>patents/WO_2025263124_A1.pdf | All representative rows reviewed | [SONY FE 14mm f/1.8 GM](../../src/lens-data/sony/SonyFE14mmf18GM.data.ts) Rear doublet flint (1.86252 / 25.20)<br>[SONY FE 14mm f/1.8 GM](../../src/lens-data/sony/SonyFE14mmf18GM.data.ts) Negative Petzval element (1.86252 / 25.20)<br>[SONY FE 28-70mm f/2 GM](../../src/lens-data/sony/SonyFE2870mmf2GM.data.ts) Element 14 (1.86252 / 25.20) |
| 662561 | 4 | 1 | patents/GB_850117_A.pdf | All representative rows reviewed | [CARL ZEISS JENA PANCOLAR 50mm f/2](../../src/lens-data/carl-zeiss-jena/CarlZeissJenaPancolar50mmf2.data.ts) Element 1 (1.66200 / 56.10)<br>[CARL ZEISS JENA PANCOLAR 50mm f/2](../../src/lens-data/carl-zeiss-jena/CarlZeissJenaPancolar50mmf2.data.ts) Element 2 (1.66200 / 56.10)<br>[CARL ZEISS JENA PANCOLAR 50mm f/2](../../src/lens-data/carl-zeiss-jena/CarlZeissJenaPancolar50mmf2.data.ts) Element 5 (1.66200 / 56.10) |
| 515546 | 3 | 3 | patents/JPA 1999030748-000000.pdf<br>patents/US3507558.pdf<br>patents/US3743384.pdf | 2/3 representative rows reviewed | [NIKON AF ZOOM-NIKKOR 28-80mm f/3.5-5.6 D](../../src/lens-data/nikon/NikonAFZoomNikkor2880mmf3556.data.ts) Element 1 (1.51454 / 54.55)<br>[NIKON AI NIKKOR 35mm f/2](../../src/lens-data/nikon/NikonAINikkor35mmf2.data.ts) Element 4 (1.51454 / 54.62)<br>[Nikon AI Zoom-Nikkor 360-1200mm f/11 ED](../../src/lens-data/nikon/NikonAIZoomNikkor3601200mmf11ED.data.ts) Relay front singlet (1.51454 / 54.60) |
| 777297 | 3 | 3 | patents/WO2021199923A1.pdf<br>patents/WO_2025263124_A1.pdf<br>patents/JP2023039817A.pdf | All representative rows reviewed | [SONY FE 14mm f/1.8 GM](../../src/lens-data/sony/SonyFE14mmf18GM.data.ts) LN rear element (1.77660 / 29.70)<br>[SONY FE 28-70mm f/2 GM](../../src/lens-data/sony/SonyFE2870mmf2GM.data.ts) Element 5 (1.77660 / 29.70)<br>[SONY FE 70-200mm f/2.8 GM OSS II](../../src/lens-data/sony/SonyFE70200mmf28GMII.data.ts) Element 1 (1.77660 / 29.70) |
| 617540 | 3 | 2 | patents/US5717527.pdf<br>patents/JPA 1999030748-000000.pdf | No reviewed-sidecar hit | [NIKON AF ZOOM-MICRO NIKKOR ED 70-180mm f/4.5-5.6D](../../src/lens-data/nikon/NikonAFZoomMicro70180mmf4556D.data.ts) Element 3 (1.61720 / 54.01)<br>[NIKON AF ZOOM-NIKKOR 28-80mm f/3.5-5.6 D](../../src/lens-data/nikon/NikonAFZoomNikkor2880mmf3556.data.ts) Element 5 (1.61720 / 54.01)<br>[NIKON AF ZOOM-NIKKOR 28-80mm f/3.5-5.6 D](../../src/lens-data/nikon/NikonAFZoomNikkor2880mmf3556.data.ts) Element 6 (1.61720 / 54.01) |
| 504668 | 3 | 1 | patents/US3862794.pdf | No reviewed-sidecar hit | [OLYMPUS ZUIKO AUTO-W 28mm f/2](../../src/lens-data/olympus/OlympusZuikoAutoW28mmf2.data.ts) Element 2 (1.50378 / 66.80)<br>[OLYMPUS ZUIKO AUTO-W 28mm f/2](../../src/lens-data/olympus/OlympusZuikoAutoW28mmf2.data.ts) Element 3 (1.50378 / 66.80)<br>[OLYMPUS ZUIKO AUTO-W 28mm f/2](../../src/lens-data/olympus/OlympusZuikoAutoW28mmf2.data.ts) Element 4a (1.50378 / 66.80) |
| 516565 | 3 | 1 | patents/CN216772097U.pdf | All representative rows reviewed | [PANASONIC LUMIX S 35mm f/1.8](../../src/lens-data/panasonic/PanasonicS35mmf18.data.ts) Element 8 (1.51602 / 56.50)<br>[PANASONIC LUMIX S 35mm f/1.8](../../src/lens-data/panasonic/PanasonicS35mmf18.data.ts) Element 9 (1.51602 / 56.50)<br>[PANASONIC LUMIX S 35mm f/1.8](../../src/lens-data/panasonic/PanasonicS35mmf18.data.ts) Element 10 (1.51602 / 56.50) |
| 585587 | 3 | 1 | patents/WO2024195273A1.pdf | All representative rows reviewed | [FUJIFILM FUJINON GF 30mm f/5.6 T/S](../../src/lens-data/fujifilm/FujifilmGF30mmf56TS.data.ts) Element L11 (1.58480 / 58.71)<br>[FUJIFILM FUJINON GF 30mm f/5.6 T/S](../../src/lens-data/fujifilm/FujifilmGF30mmf56TS.data.ts) Element L25 (1.58480 / 58.71)<br>[FUJIFILM FUJINON GF 30mm f/5.6 T/S](../../src/lens-data/fujifilm/FujifilmGF30mmf56TS.data.ts) Element L31 (1.58480 / 58.71) |
| 672472 | 3 | 1 | patents/US2084309.pdf | No reviewed-sidecar hit | [CARL ZEISS JENA BIOGON 35mm f/2.8 (pre-war)](../../src/lens-data/carl-zeiss-jena/ZeissBiogon35mmf28Prewar.data.ts) Element 1 (1.67160 / 47.20)<br>[CARL ZEISS JENA BIOGON 35mm f/2.8 (pre-war)](../../src/lens-data/carl-zeiss-jena/ZeissBiogon35mmf28Prewar.data.ts) Element 2 (1.67160 / 47.20)<br>[CARL ZEISS JENA BIOGON 35mm f/2.8 (pre-war)](../../src/lens-data/carl-zeiss-jena/ZeissBiogon35mmf28Prewar.data.ts) Element 6 (1.67160 / 47.20) |
| 863248 | 3 | 1 | patents/JP2023039817A.pdf | All representative rows reviewed | [SONY FE 70-200mm f/2.8 GM OSS II](../../src/lens-data/sony/SonyFE70200mmf28GMII.data.ts) Element 6 (1.86290 / 24.80)<br>[SONY FE 70-200mm f/2.8 GM OSS II](../../src/lens-data/sony/SonyFE70200mmf28GMII.data.ts) Element 9 (1.86290 / 24.80)<br>[SONY FE 70-200mm f/2.8 GM OSS II](../../src/lens-data/sony/SonyFE70200mmf28GMII.data.ts) Element 10 (1.86290 / 24.80) |
| 961323 | 3 | 1 | patents/WO2021200206A1.pdf | No reviewed-sidecar hit | [SONY FE 12-24mm f/2.8 GM](../../src/lens-data/sony/SonyFE1224mmf28GM.data.ts) L31 stop-region negative (1.96073 / 32.30)<br>[SONY FE 12-24mm f/2.8 GM](../../src/lens-data/sony/SonyFE1224mmf28GM.data.ts) L41 focus-group negative (1.96073 / 32.30)<br>[SONY FE 12-24mm f/2.8 GM](../../src/lens-data/sony/SonyFE1224mmf28GM.data.ts) L52 GP5 negative (1.96073 / 32.30) |
| 518603 | 2 | 2 | patents/US4699475.pdf<br>patents/US4770511.pdf | All representative rows reviewed | [Nikon AI Zoom-Nikkor 35–105mm f/3.5–4.5S](../../src/lens-data/nikon/NikonAIZoomNikkor35105mmf3545.data.ts) Element 14 (1.51800 / 60.30)<br>[Nikon AI Zoom-Nikkor 35-200mm f/3.5-4.5S](../../src/lens-data/nikon/NikonAIZoomNikkor35200mmf3545S.data.ts) Element 14a (1.51835 / 60.34) |
| 531559 | 2 | 2 | patents/US20200142167A1.pdf<br>patents/WO2021039813A1.pdf | All representative rows reviewed | [CANON RF 24-240mm f/4-6.3 IS USM](../../src/lens-data/canon/CanonRF24240mmf463.data.ts) Element 14 (1.53110 / 55.90)<br>[NIKON AF-P DX NIKKOR 10-20mm f/4.5-5.6 G VR](../../src/lens-data/nikon/NikonAFPDX1020mmf4556G.data.ts) L41 (1.53110 / 55.91) |
| 561453 | 2 | 2 | patents/US20020075570A1.pdf<br>patents/US3376091.pdf | 1/2 representative rows reviewed | [HASSELBLAD HC 150mm f/3.2](../../src/lens-data/hasselblad/HasselbladHC150mmf32.data.ts) Element 7 (1.56093 / 45.30)<br>[SCHNEIDER-KREUZNACH SUPER-ANGULON 75mm f/5.6](../../src/lens-data/schneider-kreuznach/SchneiderSuperAngulon75mmf56.data.ts) Element 4 (1.56138 / 45.30) |
| 670576 | 2 | 2 | patents/US4452513.pdf<br>patents/US4497547.pdf | 1/2 representative rows reviewed | [NIKON AI ZOOM-NIKKOR 80-200mm f/4](../../src/lens-data/nikon/NikonAINikkor80200mmf4.data.ts) G4 front positive (1.67025 / 57.60)<br>[Nikon AI Zoom-Nikkor 50-135mm f/3.5S](../../src/lens-data/nikon/NikonAIZoomNikko50135mmf35S.data.ts) G3 L1 (1.67025 / 57.60) |
| 720521 | 2 | 2 | patents/US4124276.pdf | No reviewed-sidecar hit | [MINOLTA AF APO Tele 200mm f/2.8](../../src/lens-data/minolta/MinoltaAF200mmf28.data.ts) Element 3 (1.72000 / 52.14)<br>[MINOLTA VARISOFT ROKKOR 85mm f/2.8](../../src/lens-data/minolta/MinoltaVarisoft85mmf28.data.ts) Element 4 (1.72000 / 52.10) |
| 744494 | 2 | 2 | patents/US3507558.pdf<br>patents/US3743384.pdf | All representative rows reviewed | [NIKON AI NIKKOR 35mm f/2](../../src/lens-data/nikon/NikonAINikkor35mmf2.data.ts) Element 6 (1.74443 / 49.40)<br>[Nikon AI Zoom-Nikkor 360-1200mm f/11 ED](../../src/lens-data/nikon/NikonAIZoomNikkor3601200mmf11ED.data.ts) Telephoto rear doublet negative (1.74443 / 49.40) |
| 748523 | 2 | 2 | patents/US5717527.pdf<br>patents/US5490012.pdf | No reviewed-sidecar hit | [NIKON AF ZOOM-MICRO NIKKOR ED 70-180mm f/4.5-5.6D](../../src/lens-data/nikon/NikonAFZoomMicro70180mmf4556D.data.ts) Element 6 (1.74810 / 52.30)<br>[NIKON R-UW AF ZOOM-NIKKOR 20-35mm f/2.8](../../src/lens-data/nikon/NikonRUWAFZoomNikkor2035mmf28.data.ts) Element 9 (1.74810 / 52.30) |

## Sweep 2B - Named Tokens Missing Catalog Resolution

These unresolved catalog-style labels are often better first catalog targets than already-reviewed proprietary six-digit rows.

| Token | Elements | Lens files | localPatentStatus | Representative rows |
|---|---:|---:|---|---|
| S-NPH7 | 4 | 4 | patents/US20230213745A1.pdf<br>patents/US20190265441A1.pdf<br>patents/JP2021179551A.pdf<br>patents/WO_2025263124_A1.pdf | [CANON RF 135mm f/1.8 L IS USM](../../src/lens-data/canon/CanonRF135f18.data.ts) Element 14 (2.00069 / 25.50; abbe)<br>[CANON RF 50mm f/1.2 L USM](../../src/lens-data/canon/CanonRF50mmf12L.data.ts) Element 3 (2.00100 / 29.13; abbe)<br>[PANASONIC LUMIX S 20-60mm f/3.5-5.6](../../src/lens-data/panasonic/PanasonicLumixS2060mmf3556.data.ts) Element 11 (1.92286 / 20.90; abbe) |
| H-LAF3 | 2 | 2 | patents/CN205427291U.pdf<br>patents/JPWO2020157904A1.pdf | [LAOWA 15mm f/4 Wide Angle 1:1 Macro](../../src/lens-data/laowa/Laowa15mmf4Macro.data.ts) Element 7b (1.80420 / 46.50; abbe)<br>[NIKON NIKKOR Z 24-200mm f/4-6.3 VR](../../src/lens-data/nikon/NikonNikkorZ24200mmf463VR.data.ts) Element 18 (1.82080 / 42.51; abbe) |
| H-LAK53A | 2 | 2 | patents/US-20250389929-A1.pdf<br>patents/CN116520542A.pdf | [CANON RF 20mm f/1.4 L VCM](../../src/lens-data/canon/CanonRF20mmf14LVCM.data.ts) G4 (1.75500 / 52.30; abbe)<br>[LAOWA 58mm f/2.8 2× Ultra-Macro APO](../../src/lens-data/laowa/Laowa58mmf28MacroAPO.data.ts) Element 4 (1.72916 / 54.67; abbe) |
| S-NBH53 | 2 | 2 | patents/US20160274335A1.pdf<br>patents/US20110273780A1.pdf | [FUJIFILM FUJINON XF 90mm f/2 R LM WR](../../src/lens-data/fujifilm/FujifilmXF90mmf2.data.ts) Element 4 (1.74950 / 35.33; abbe)<br>[SONY E 18-55mm f/3.5-5.6 OSS](../../src/lens-data/sony/SonyE1855mmf3556.data.ts) Element 3 (1.91082 / 35.25; abbe) |
| SK3 | 2 | 2 | patents/DE_2444954_A1.pdf | [RODENSTOCK GRANDAGON-N 75mm f/4.5](../../src/lens-data/rodenstock/RodenstockGrandagonN75mmf45.data.ts) Element 6 (1.60881 / 58.90; lineIndices)<br>[RODENSTOCK GRANDAGON-N 90mm f/4.5](../../src/lens-data/rodenstock/RodenstockGrandagonN90mmf45.data.ts) Element 6 (1.60881 / 58.86; abbe) |
| E-FDS3HT | 2 | 1 | patents/WO2022097401A1.pdf | [NIKON NIKKOR Z MC 105mm f/2.8 VR S](../../src/lens-data/nikon/NikonZ105f28.data.ts) Element 7 (1.94595 / 17.98; abbe)<br>[NIKON NIKKOR Z MC 105mm f/2.8 VR S](../../src/lens-data/nikon/NikonZ105f28.data.ts) Element 13 (1.94595 / 17.98; abbe) |
| H-ZBAF4 | 2 | 1 | patents/US-20250389929-A1.pdf | [CANON RF 20mm f/1.4 L VCM](../../src/lens-data/canon/CanonRF20mmf14LVCM.data.ts) G10 (1.66565 / 35.60; abbe)<br>[CANON RF 20mm f/1.4 L VCM](../../src/lens-data/canon/CanonRF20mmf14LVCM.data.ts) G16 (1.66565 / 35.60; abbe) |
| H-ZLAF4A | 2 | 1 | patents/CN210573001U.pdf | [LAOWA 24mm f/14 2× Macro Probe](../../src/lens-data/laowa/Laowa24mmf14Probe.data.ts) Element 1 (1.83481 / 42.72; abbe)<br>[LAOWA 24mm f/14 2× Macro Probe](../../src/lens-data/laowa/Laowa24mmf14Probe.data.ts) Element 27 (1.83481 / 42.72; abbe) |
| K-LAFK50 | 2 | 1 | patents/US20150192839A1.pdf | [PANASONIC LEICA DG NOCTICRON 42.5mm f/1.2 ASPH POWER O.I.S.](../../src/lens-data/panasonic/PanasonicDGNocticron42mmf12.data.ts) Element 8 (1.77010 / 49.70; lineIndices)<br>[PANASONIC LEICA DG NOCTICRON 42.5mm f/1.2 ASPH POWER O.I.S.](../../src/lens-data/panasonic/PanasonicDGNocticron42mmf12.data.ts) Element 11 (1.77010 / 49.70; lineIndices) |
| S-LAM73 | 2 | 1 | patents/WO_2025263124_A1.pdf | [SONY FE 28-70mm f/2 GM](../../src/lens-data/sony/SonyFE2870mmf2GM.data.ts) Element 16 (1.85659 / 40.10; abbe)<br>[SONY FE 28-70mm f/2 GM](../../src/lens-data/sony/SonyFE2870mmf2GM.data.ts) Element 20 (1.85659 / 40.10; abbe) |
| SK18 | 2 | 1 | patents/US2681594.pdf | [CANON SERENAR 50mm f/1.8](../../src/lens-data/canon/CanonSerenar50mmf18.data.ts) Element 5 (1.63850 / 55.50; abbe)<br>[CANON SERENAR 50mm f/1.8](../../src/lens-data/canon/CanonSerenar50mmf18.data.ts) Element 6 (1.63850 / 55.50; abbe) |
| BK3 | 1 | 1 | patents/US3975089.pdf | [VIVITAR SERIES 1 35-85mm f/2.8 VMC](../../src/lens-data/vivitar/VivitarSeries13585mmf28.data.ts) Element 6 (1.49800 / 65.10; abbe) |
| E-FEL6 | 1 | 1 | patents/JP2023039817A.pdf | [SONY FE 70-200mm f/2.8 GM OSS II](../../src/lens-data/sony/SonyFE70200mmf28GMII.data.ts) Element 15 (1.61669 / 44.30; abbe) |
| E-FPL51 | 1 | 1 | patents/JPWO2019049372A1.pdf | [NIKON NIKKOR Z 24-70mm f/4 S](../../src/lens-data/nikon/NikonNikkorZ2470mmf4S.data.ts) Element 6 (1.55332 / 71.70; abbe) |
| H-BAF6 | 1 | 1 | patents/20260118637.pdf | [ENNA MÜNCHEN LITHAGON 24mm f/4](../../src/lens-data/enna-munchen/EnnaMunchenLithagon24mmf4.data.ts) Element 7 (1.60801 / 46.20; abbe) |
| H-K2 | 1 | 1 | Missing from untracked local patents/ references (US4568150, 4568150) | [OLYMPUS OM-SYSTEM ZUIKO AUTO-ZOOM 65-200mm f/4](../../src/lens-data/olympus/OlympusZuikoAutoZoom65200mmf4.data.ts) Element 10 (1.50048 / 65.99; abbe) |
| H-K8 | 1 | 1 | patents/CN110161666A.pdf | [LAOWA 65mm f/2.8 2× Ultra Macro APO](../../src/lens-data/laowa/Laowa65mmf28MacroAPO.data.ts) Element 14 (1.51823 / 58.96; abbe) |
| H-K9L | 1 | 1 | patents/CN205427291U.pdf | [LAOWA 15mm f/4 Wide Angle 1:1 Macro](../../src/lens-data/laowa/Laowa15mmf4Macro.data.ts) Element 7a (1.51680 / 64.20; abbe) |
| H-LAF51 | 1 | 1 | patents/JP2014126652A.pdf | [SIGMA 50mm f/2.8 (Sigma DP3 Merrill)](../../src/lens-data/sigma/SigmaDP3M50mmf28.data.ts) Element 6 (1.83400 / 37.34; abbe) |
| H-LAF6L | 1 | 1 | patents/US20220236544A1.pdf | [FUJIFILM FUJINON GF 20-35mm f/4 R WR](../../src/lens-data/fujifilm/FujifilmGF2035mmf4.data.ts) L32 (1.75700 / 47.71; abbe) |
| H-LAK3 | 1 | 1 | patents/JP2025052870A.pdf | [NIKON NIKKOR Z 35mm f/1.2 S](../../src/lens-data/nikon/NikonNikkorZ35mmf12S.data.ts) Element 1 (1.64000 / 60.10; abbe) |
| H-LAK52 | 1 | 1 | patents/CN110161666A.pdf | [LAOWA 65mm f/2.8 2× Ultra Macro APO](../../src/lens-data/laowa/Laowa65mmf28MacroAPO.data.ts) Element 10 (1.72916 / 57.67; abbe) |
| H-LAK5A | 1 | 1 | patents/CN205427291U.pdf | [LAOWA 15mm f/4 Wide Angle 1:1 Macro](../../src/lens-data/laowa/Laowa15mmf4Macro.data.ts) Element 4b (1.72916 / 54.67; abbe) |
| H-LAK7 | 1 | 1 | patents/CN205427291U.pdf | [LAOWA 15mm f/4 Wide Angle 1:1 Macro](../../src/lens-data/laowa/Laowa15mmf4Macro.data.ts) Element 1 (1.77250 / 49.62; abbe) |
| H-QF50 | 1 | 1 | patents/CN110161666A.pdf | [LAOWA 65mm f/2.8 2× Ultra Macro APO](../../src/lens-data/laowa/Laowa65mmf28MacroAPO.data.ts) Element 2 (1.60342 / 38.01; abbe) |

## Sweep 3 - Proprietary Line-Index Backfill

Use local untracked patents first. Populate patent-listed `nC`, `nF`, `ng`, and `dPgF` when Sellmeier data is unavailable.

| Lens | Patent reference | Elements | localPatentPath | localPatentStatus | Notes |
|---|---|---|---|---|---|

