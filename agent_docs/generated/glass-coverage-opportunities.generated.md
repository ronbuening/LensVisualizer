# Glass Coverage Opportunities (auto-generated)

Consolidated work queue for the three planned glass-coverage sweeps.
Rows that cite `patents/` refer to ignored/untracked local PDF files used as source references only.
Do not add, stage, or commit those patent files.

**Regenerate this file** by running `npm test -- glassCoverageOpportunitiesScan`.
Regenerate the full glass report set with `npm run generate:glass-reports`.

## Summary

- **377** lenses scanned (**369** visible)
- **3447 / 4207** non-air surfaces use strict catalog Sellmeier data (81.9%)
- **3477 / 4207** non-air surfaces use trusted chromatic data (Sellmeier or measured line indices, 82.6%)
- **2** mismatch surfaces in Sweep 1 across **1** lens files
- **2** Sweep 1 surfaces have a matching untracked local patent PDF
- **233** code-only missing-Sellmeier elements in Sweep 2
- **138** unresolved named-token elements in Sweep 2B
- **0** Tier A proprietary backfill rows in Sweep 3

## Sweep 1 - Relabel Mismatches

Patent PDFs under `patents/` are untracked local references. A missing local patent status is a source blocker for the requested first sweep.

| Lens | Patent | Surface | Current label | Stored nd/vd | Best candidate(s) | localPatentPath | localPatentStatus |
|---|---|---|---|---|---|---|---|
| [RODENSTOCK GRANDAGON-N 75mm f/6.8](../../src/lens-data/rodenstock/RodenstockGrandagonN75mmf68.data.ts) | DE 26 | 7 | `SF18 / S-TIH18 class (stored patent n_e)` | 1.72730 / 29.02 | S-TIH10 (Δnd=+0.0009, Δvd=-0.56)<br>E-FD10 (Δnd=+0.0009, Δvd=-0.70)<br>H-ZF4A (Δnd=+0.0010, Δvd=-0.70) | patents/20260118637.pdf | Ambiguous untracked local match; also see patents/DE_1268404_B.pdf, patents/DE_2635415_B1.pdf, patents/JP_2000292689_A.pdf |
| [RODENSTOCK GRANDAGON-N 75mm f/6.8](../../src/lens-data/rodenstock/RodenstockGrandagonN75mmf68.data.ts) | DE 26 | 3 | `SF10 class (Schott legacy; stored patent n_e)` | 1.73430 / 28.47 | No catalog candidate | patents/20260118637.pdf | Ambiguous untracked local match; also see patents/DE_1268404_B.pdf, patents/DE_2635415_B1.pdf, patents/JP_2000292689_A.pdf |

## Near-Complete Visible Lenses

These are efficient follow-up targets after mismatch blockers because one or two surfaces can make the whole lens chromatically trusted. Strict Sellmeier coverage remains shown separately.

| Lens | Trusted chromatic coverage | Strict Sellmeier coverage | Missing trusted surfaces | Missing quality mix |
|---|---:|---:|---:|---|
| [CANON RF 24-105mm f/2.8 L IS USM Z](../../src/lens-data/canon/CanonRF24105mmf28Z.data.ts) | 95.8% (23/24) | 95.8% (23/24) | 1 | abbe: 1 |
| [NIKON AF-S NIKKOR 70-200mm f/2.8 G ED VR II](../../src/lens-data/nikon/NikonAFS70200mmf28GVRII.data.ts) | 95.2% (20/21) | 95.2% (20/21) | 1 | abbe: 1 |
| [NIKON NIKKOR Z 70-200mm f/2.8 VR S](../../src/lens-data/nikon/NikonNikkorZ70200f28.data.ts) | 95.2% (20/21) | 95.2% (20/21) | 1 | abbe: 1 |
| [SONY FE 70-200mm f/4 G OSS](../../src/lens-data/sony/SonyFE70200mmf4G.data.ts) | 95.2% (20/21) | 95.2% (20/21) | 1 | abbe: 1 |
| [FUJIFILM FUJINON GF 100-200mm f/5.6 R LM OIS WR](../../src/lens-data/fujifilm/FujifilmGF100200mmf56.data.ts) | 95.0% (19/20) | 95.0% (19/20) | 1 | abbe: 1 |
| [NIKON AF-S NIKKOR 200-500mm f/5.6 E ED VR](../../src/lens-data/nikon/NikonNikkorAFS200500mmf56.data.ts) | 94.7% (18/19) | 94.7% (18/19) | 1 | abbe: 1 |
| [SIGMA APO Macro 180mm f/2.8 EX DG OS HSM](../../src/lens-data/sigma/SigmaAPOMacro180mmf28.data.ts) | 94.7% (18/19) | 84.2% (16/19) | 1 | abbe: 1 |
| [CANON RF 24-105mm f/4 L IS USM](../../src/lens-data/canon/CanonRF24105mmf4L.data.ts) | 94.4% (17/18) | 94.4% (17/18) | 1 | abbe: 1 |
| [NIKON AF-S NIKKOR 16-35mm f/4 G ED VR](../../src/lens-data/nikon/NikonNikkorAFS1635mmf4.data.ts) | 94.4% (17/18) | 94.4% (17/18) | 1 | abbe: 1 |
| [NIKON PC NIKKOR 19mm f/4 E ED](../../src/lens-data/nikon/NikonNikkorPCE19mmf4E.data.ts) | 94.4% (17/18) | 94.4% (17/18) | 1 | abbe: 1 |
| [OLYMPUS ZUIKO DIGITAL ED 14-35mm f/2.0 SWD](../../src/lens-data/olympus/OlympusMZuiko1435mmf2ED.data.ts) | 94.4% (17/18) | 94.4% (17/18) | 1 | abbe: 1 |
| [CANON RF 135mm f/1.8 L IS USM](../../src/lens-data/canon/CanonRF135f18.data.ts) | 94.1% (16/17) | 94.1% (16/17) | 1 | abbe: 1 |
| [NIKON AF-S DX NIKKOR 55-300mm f/4.5-5.6 G ED VR](../../src/lens-data/nikon/NikonAFSDX55300mmf4556G.data.ts) | 94.1% (16/17) | 94.1% (16/17) | 1 | abbe: 1 |
| [OLYMPUS M.ZUIKO DIGITAL ED 12-100mm f/4.0 IS PRO](../../src/lens-data/olympus/OlympusMZuiko12100mmf4ISPRO.data.ts) | 94.1% (16/17) | 94.1% (16/17) | 1 | abbe: 1 |
| [SIGMA 24mm f/1.4 DG DN | Art](../../src/lens-data/sigma/Sigma24mmf14ArtDN.data.ts) | 94.1% (16/17) | 94.1% (16/17) | 1 | abbe: 1 |
| [NIKON NIKKOR Z DX 50-250mm f/4.5-6.3 VR](../../src/lens-data/nikon/NikonZDX50250mmf4564VR.data.ts) | 93.8% (15/16) | 93.8% (15/16) | 1 | abbe: 1 |
| [CANON EF-S 55-250mm f/4-5.6 IS STM](../../src/lens-data/canon/CanonEFS55250mmf456ISSTM.data.ts) | 93.3% (14/15) | 93.3% (14/15) | 1 | abbe: 1 |
| [FUJIFILM FUJINON XF 23mm f/1.4 R LM WR](../../src/lens-data/fujifilm/FujifilmXF23mmf14RLMWR.data.ts) | 93.3% (14/15) | 93.3% (14/15) | 1 | abbe: 1 |
| [FUJIFILM FUJINON XF 33mm f/1.4 R LM WR](../../src/lens-data/fujifilm/FujifilmXF33mmf14RLMWR.data.ts) | 93.3% (14/15) | 93.3% (14/15) | 1 | abbe: 1 |
| [OLYMPUS ZUIKO DIGITAL ED 12-60mm f/2.8-4.0 SWD](../../src/lens-data/olympus/OlympusMZuiko1260mmf284ED.data.ts) | 93.3% (14/15) | 93.3% (14/15) | 1 | abbe: 1 |
| [OLYMPUS ZUIKO 9-36mm f/2-2.4 (Olympus E-10 / E-20)](../../src/lens-data/olympus/OlympusZuiko936mmf224.data.ts) | 93.3% (14/15) | 93.3% (14/15) | 1 | abbe: 1 |
| [PENTAX HD D FA* 50mm f/1.4 SDM AW](../../src/lens-data/pentax/PentaxDFA50mmf14SDM.data.ts) | 93.3% (14/15) | 93.3% (14/15) | 1 | abbe: 1 |
| [SIGMA 20mm f/1.4 DG HSM | Art](../../src/lens-data/sigma/Sigma20mmf14DGHSMArt.data.ts) | 93.3% (14/15) | 93.3% (14/15) | 1 | abbe: 1 |
| [CANON EF-M 32mm f/1.4 STM](../../src/lens-data/canon/CanonEFM32mmf14STM.data.ts) | 92.9% (13/14) | 92.9% (13/14) | 1 | abbe: 1 |
| [CANON EF-S 10-18mm f/4.5-5.6 IS STM](../../src/lens-data/canon/CanonEFS1018mmf4.data.ts) | 92.9% (13/14) | 92.9% (13/14) | 1 | abbe: 1 |
| [CANON RF 85mm f/1.2 L USM](../../src/lens-data/canon/CanonRF85mmf12L.data.ts) | 92.9% (13/14) | 92.9% (13/14) | 1 | abbe: 1 |
| [CARL ZEISS TOUIT MAKRO-PLANAR T* 50mm f/2.8 Macro](../../src/lens-data/carl-zeiss-oberkochen/ZeissTouit50mmf28Macro.data.ts) | 92.9% (13/14) | 92.9% (13/14) | 1 | abbe: 1 |
| [FUJIFILM FUJINON GF 120mm f/4 R LM OIS WR Macro](../../src/lens-data/fujifilm/FujifilmGF120mmf4RLM.data.ts) | 92.9% (13/14) | 92.9% (13/14) | 1 | abbe: 1 |
| [NIKON AF-P DX NIKKOR 70-300mm f/4.5-6.3 G ED VR](../../src/lens-data/nikon/NikonAFPDX70300mmf4563G.data.ts) | 92.9% (13/14) | 92.9% (13/14) | 1 | abbe: 1 |
| [SIGMA 50mm f/1.4 DG DN | Art](../../src/lens-data/sigma/SigmaDGDNArt50mmf14.data.ts) | 92.9% (13/14) | 92.9% (13/14) | 1 | abbe: 1 |
| [SONY FE 85mm f/1.4 GM II](../../src/lens-data/sony/SonyFE85mmf14GMII.data.ts) | 92.9% (13/14) | 92.9% (13/14) | 1 | abbe: 1 |
| [FUJIFILM FUJINON XF 56mm f/1.2 R WR](../../src/lens-data/fujifilm/FujifilmXF56mmf12RWR.data.ts) | 92.3% (12/13) | 92.3% (12/13) | 1 | abbe: 1 |
| [SIGMA 23mm f/1.4 DC DN | Contemporary](../../src/lens-data/sigma/Sigma23mmf14DCDNC.data.ts) | 92.3% (12/13) | 92.3% (12/13) | 1 | abbe: 1 |
| [NIKON AF-S NIKKOR 120-300mm f/2.8 E FL ED SR VR](../../src/lens-data/nikon/NikonNikkorAFS120300mmf28.data.ts) | 92.0% (23/25) | 92.0% (23/25) | 2 | abbe: 2 |
| [Nikon AF Nikkor 20mm f/2.8D](../../src/lens-data/nikon/NikonAFNikkor20mmf28D.data.ts) | 91.7% (11/12) | 91.7% (11/12) | 1 | abbe: 1 |
| [NIKON AF-S MICRO-NIKKOR 60mm f/2.8 G ED](../../src/lens-data/nikon/NikonAFSMicroNikkor60f28G.data.ts) | 91.7% (11/12) | 91.7% (11/12) | 1 | abbe: 1 |
| [NIKON NIKKOR Z 85mm f/1.8 S](../../src/lens-data/nikon/NikonZ85f18S.data.ts) | 91.7% (11/12) | 91.7% (11/12) | 1 | abbe: 1 |
| [PANASONIC LEICA DG SUMMILUX 9mm f/1.7 ASPH](../../src/lens-data/panasonic/PanasonicLeicaDG9mmf17.data.ts) | 91.7% (11/12) | 91.7% (11/12) | 1 | abbe: 1 |
| [SONY PLANAR T* FE 50mm f/1.4 ZA](../../src/lens-data/sony/SonyPlanarFE50mmf14ZA.data.ts) | 91.7% (11/12) | 91.7% (11/12) | 1 | abbe: 1 |
| [CANON EF 50mm f/1.0 L USM](../../src/lens-data/canon/CanonEF50mmf1L.data.ts) | 90.9% (10/11) | 90.9% (10/11) | 1 | abbe: 1 |
| [CANON EF-S 18-55mm f/3.5-5.6 IS](../../src/lens-data/canon/CanonEFS1855mmf3556IS.data.ts) | 90.9% (10/11) | 90.9% (10/11) | 1 | abbe: 1 |
| [CANON TS-E 90mm f/2.8L MACRO](../../src/lens-data/canon/CanonTSE90mmf28L.data.ts) | 90.9% (10/11) | 90.9% (10/11) | 1 | abbe: 1 |
| [FUJIFILM FUJINON XF 56mm f/1.2 R](../../src/lens-data/fujifilm/FujifilmXF56mmf12.data.ts) | 90.9% (10/11) | 90.9% (10/11) | 1 | abbe: 1 |
| [FUJIFILM FUJINON XF 90mm f/2 R LM WR](../../src/lens-data/fujifilm/FujifilmXF90mmf2.data.ts) | 90.9% (10/11) | 90.9% (10/11) | 1 | abbe: 1 |
| [NIKON NIKKOR Z 35mm f/1.8 S](../../src/lens-data/nikon/NikonZ35f18S.data.ts) | 90.9% (10/11) | 90.9% (10/11) | 1 | abbe: 1 |
| [PENTAX HD D FA 21mm f/2.4 ED Limited DC WR](../../src/lens-data/pentax/PentaxHDDFA21mmf24Limited.data.ts) | 90.9% (10/11) | 90.9% (10/11) | 1 | abbe: 1 |
| [SONY E 18-55mm f/3.5-5.6 OSS](../../src/lens-data/sony/SonyE1855mmf3556.data.ts) | 90.9% (10/11) | 90.9% (10/11) | 1 | abbe: 1 |
| [CANON RF 24-240mm f/4-6.3 IS USM](../../src/lens-data/canon/CanonRF24240mmf463.data.ts) | 90.5% (19/21) | 90.5% (19/21) | 2 | abbe: 2 |
| [NIKON AF-S NIKKOR 24-70mm f/2.8 E ED VR](../../src/lens-data/nikon/NikonNikkorAFS2470mmf28E.data.ts) | 90.5% (19/21) | 90.5% (19/21) | 2 | abbe: 2 |
| [NIKON NIKKOR Z DX 16-50mm f/3.5-6.3 VR](../../src/lens-data/nikon/NikonZDX1650mmf3563VR.data.ts) | 90.0% (9/10) | 90.0% (9/10) | 1 | abbe: 1 |
| [PENTAX SMC PENTAX-A★ 200mm f/4 MACRO ED](../../src/lens-data/pentax/PentaxA200mmf4MacroED.data.ts) | 90.0% (9/10) | 90.0% (9/10) | 1 | abbe: 1 |
| [VOIGTLÄNDER ULTRON Vintage Line 28mm f/2 Aspherical](../../src/lens-data/voigtlander/VoigtlanderUltron28f2.data.ts) | 90.0% (9/10) | 90.0% (9/10) | 1 | abbe: 1 |
| [SONY FE 24-70mm f/2.8 GM II](../../src/lens-data/sony/SonyFE2470mmf28GMII.data.ts) | 90.0% (18/20) | 90.0% (18/20) | 2 | abbe: 2 |
| [NIKON NIKKOR Z 24-200mm f/4-6.3 VR](../../src/lens-data/nikon/NikonNikkorZ24200mmf463VR.data.ts) | 89.5% (17/19) | 89.5% (17/19) | 2 | abbe: 2 |
| [NIKON NIKKOR Z DX 18-140mm f/3.5-6.3 VR](../../src/lens-data/nikon/NikonZDX18140mmf3563VR.data.ts) | 89.5% (17/19) | 89.5% (17/19) | 2 | abbe: 2 |
| [NIKON FISHEYE-NIKKOR 6mm f/5.6](../../src/lens-data/nikon/NikonFisheyeNikkor6mmf56.data.ts) | 88.9% (8/9) | 88.9% (8/9) | 1 | abbe: 1 |
| [NIKON NIKKOR-N 5cm f/1.1](../../src/lens-data/nikon/NikonN5cmf11.data.ts) | 88.9% (8/9) | 88.9% (8/9) | 1 | abbe: 1 |
| [NIKON NIKKOR-N AUTO 28mm f/2](../../src/lens-data/nikon/NikonNikkorN28mmf2.data.ts) | 88.9% (8/9) | 88.9% (8/9) | 1 | abbe: 1 |
| [NIKON NIKKOR Z 26mm f/2.8](../../src/lens-data/nikon/NikonZ26f28.data.ts) | 88.9% (8/9) | 88.9% (8/9) | 1 | abbe: 1 |
| [PENTAX DA 21mm f/3.2 AL Limited](../../src/lens-data/pentax/PentaxDA21mmf32Limited.data.ts) | 88.9% (8/9) | 88.9% (8/9) | 1 | abbe: 1 |
| [PENTAX FA 31mm f/1.8 AL Limited](../../src/lens-data/pentax/PentaxFA31mmf18ALLtd.data.ts) | 88.9% (8/9) | 88.9% (8/9) | 1 | abbe: 1 |
| [SIGMA 30mm f/1.4 DC HSM | Art](../../src/lens-data/sigma/Sigma30mmf14DCHSMA.data.ts) | 88.9% (8/9) | 88.9% (8/9) | 1 | abbe: 1 |
| [SONY E 35mm f/1.8 OSS](../../src/lens-data/sony/SonyE35mmf18.data.ts) | 88.9% (8/9) | 88.9% (8/9) | 1 | abbe: 1 |
| [SONY FE 28mm f/2](../../src/lens-data/sony/SonyFE28mmf2.data.ts) | 88.9% (8/9) | 88.9% (8/9) | 1 | abbe: 1 |
| [FUJIFILM FUJINON GF 45-100mm f/4 R LM OIS WR](../../src/lens-data/fujifilm/FujifilmGF45100mmf4.data.ts) | 88.2% (15/17) | 88.2% (15/17) | 2 | abbe: 2 |
| [NIKON NIKKOR Z 50mm f/1.2 S](../../src/lens-data/nikon/NikonNikkorZ50f12.data.ts) | 88.2% (15/17) | 88.2% (15/17) | 2 | abbe: 2 |
| [FUJIFILM FUJINON XF 23mm f/2.8 R WR](../../src/lens-data/fujifilm/FujifilmXF23mmf28RWR.data.ts) | 87.5% (7/8) | 87.5% (7/8) | 1 | abbe: 1 |
| [FUJIFILM FUJINON XF 35mm f/1.4 R](../../src/lens-data/fujifilm/FujifilmXF35mmf14R.data.ts) | 87.5% (7/8) | 87.5% (7/8) | 1 | abbe: 1 |
| [MINOLTA AF 100mm f/2.8 Macro](../../src/lens-data/minolta/MinoltaAF100mmf28Macro.data.ts) | 87.5% (7/8) | 87.5% (7/8) | 1 | abbe: 1 |
| [SIGMA 60mm f/2.8 DN | Art](../../src/lens-data/sigma/Sigma60mmf28DN.data.ts) | 87.5% (7/8) | 87.5% (7/8) | 1 | abbe: 1 |
| [SONY SONNAR T* E 24mm f/1.8 ZA](../../src/lens-data/sony/SonyFE24mmf18ZA.data.ts) | 87.5% (7/8) | 87.5% (7/8) | 1 | abbe: 1 |
| [NIKON AF-S NIKKOR 24-70mm f/2.8 G ED](../../src/lens-data/nikon/NikonAFS2470mmf28G.data.ts) | 87.5% (14/16) | 87.5% (14/16) | 2 | abbe: 2 |
| [NIKON NIKKOR Z MC 105mm f/2.8 VR S](../../src/lens-data/nikon/NikonZ105f28.data.ts) | 87.5% (14/16) | 87.5% (14/16) | 2 | abbe: 2 |
| [SIGMA 40mm f/1.4 DG HSM | Art](../../src/lens-data/sigma/SigmaArt40mmf14.data.ts) | 87.5% (14/16) | 87.5% (14/16) | 2 | abbe: 2 |
| [FUJIFILM FUJINON GF 32-64mm f/4 R LM WR](../../src/lens-data/fujifilm/FujifilmGF3264mmf4.data.ts) | 86.7% (13/15) | 86.7% (13/15) | 2 | abbe: 2 |
| [NIKON AF-S NIKKOR 28mm f/1.4 E ED](../../src/lens-data/nikon/NikonAFS28f14E.data.ts) | 86.7% (13/15) | 86.7% (13/15) | 2 | abbe: 2 |
| [NIKON PC-E NIKKOR 24mm f/3.5 D ED](../../src/lens-data/nikon/NikonPCENikkor24mmf35DED.data.ts) | 86.7% (13/15) | 86.7% (13/15) | 2 | abbe: 2 |
| [MINOLTA MD ROKKOR 50mm f/1.4](../../src/lens-data/minolta/MinoltaRokkor50mmf14MD.data.ts) | 85.7% (6/7) | 85.7% (6/7) | 1 | abbe: 1 |
| [OLYMPUS G.ZUIKO AUTO-W 21mm f/3.5](../../src/lens-data/olympus/OlympusGZuikoAutoW21mmf35.data.ts) | 85.7% (6/7) | 85.7% (6/7) | 1 | abbe: 1 |
| [PENTAX SMC PENTAX-A★ 135mm f/1.8](../../src/lens-data/pentax/PentaxA135mmf18.data.ts) | 85.7% (6/7) | 85.7% (6/7) | 1 | abbe: 1 |
| [RICOH GR LENS 18.3mm f/2.8 (Ricoh GR / GR II)](../../src/lens-data/ricoh/RicohGR218mmf28.data.ts) | 85.7% (6/7) | 85.7% (6/7) | 1 | abbe: 1 |
| [RICOH GR LENS 26.1mm f/2.8 (Ricoh GR IIIx)](../../src/lens-data/ricoh/RicohGR3x.data.ts) | 85.7% (6/7) | 85.7% (6/7) | 1 | abbe: 1 |
| [SONY SONNAR T* FE 55mm f/1.8 ZA](../../src/lens-data/sony/SonyFE55mmf18ZA.data.ts) | 85.7% (6/7) | 85.7% (6/7) | 1 | abbe: 1 |
| [CANON EF-S 10-22mm f/3.5-4.5 USM](../../src/lens-data/canon/CanonEFS1022mmf3545.data.ts) | 85.7% (12/14) | 85.7% (12/14) | 2 | abbe: 2 |
| [FUJIFILM FUJINON GF 20-35mm f/4 R WR](../../src/lens-data/fujifilm/FujifilmGF2035mmf4.data.ts) | 85.7% (12/14) | 85.7% (12/14) | 2 | abbe: 2 |
| [FUJIFILM FUJINON GF 55mm f/1.7 R WR](../../src/lens-data/fujifilm/FujifilmGF55mmf17.data.ts) | 85.7% (12/14) | 85.7% (12/14) | 2 | abbe: 2 |
| [NIKON AF-S VR MICRO-NIKKOR 105mm f/2.8 G IF-ED](../../src/lens-data/nikon/NikonAFS105f28G.data.ts) | 85.7% (12/14) | 85.7% (12/14) | 2 | abbe: 2 |
| [Nikon AF-S NIKKOR 24mm f/1.8G ED](../../src/lens-data/nikon/NikonAFSNikkor24mmf18GED.data.ts) | 85.7% (12/14) | 85.7% (12/14) | 2 | abbe: 2 |
| [NIKON AF-S NIKKOR 105mm f/1.4 E ED](../../src/lens-data/nikon/NikonNikkor105f14E.data.ts) | 85.7% (12/14) | 85.7% (12/14) | 2 | abbe: 2 |
| [NIKON NIKKOR Z 24-70mm f/4 S](../../src/lens-data/nikon/NikonNikkorZ2470mmf4S.data.ts) | 85.7% (12/14) | 85.7% (12/14) | 2 | abbe: 2 |
| [NIKON NIKKOR Z 50mm f/1.8 S](../../src/lens-data/nikon/NikonNikkorZ50f18S.data.ts) | 85.7% (12/14) | 85.7% (12/14) | 2 | constant: 2 |
| [NIKON AF-P DX NIKKOR 18-55mm f/3.5-5.6 G VR](../../src/lens-data/nikon/NikonAFPDX1855mmf3556G.data.ts) | 84.6% (11/13) | 84.6% (11/13) | 2 | abbe: 2 |
| [SIGMA 35mm f/1.4 DG HSM | Art](../../src/lens-data/sigma/Sigma35mmf14DGHSMA.data.ts) | 84.6% (11/13) | 84.6% (11/13) | 2 | abbe: 2 |
| [Nikon AF Nikkor 28mm f/2.8D](../../src/lens-data/nikon/NikonAFNikkor28mmf28D.data.ts) | 83.3% (5/6) | 83.3% (5/6) | 1 | abbe: 1 |
| [NIKON REFLEX-NIKKOR 500mm f/8 (New)](../../src/lens-data/nikon/NikonReflexNikkor500mmf8New.data.ts) | 83.3% (5/6) | 83.3% (5/6) | 1 | abbe: 1 |
| [OLYMPUS F.ZUIKO AUTO-T 200mm f/5](../../src/lens-data/olympus/OlympusZuikoAutoT200mmf5.data.ts) | 83.3% (5/6) | 83.3% (5/6) | 1 | abbe: 1 |
| [RICOH GR LENS 18.3mm f/2.8 (Ricoh GR III)](../../src/lens-data/ricoh/RicohGR328f28.data.ts) | 83.3% (5/6) | 83.3% (5/6) | 1 | abbe: 1 |
| [LEICA SUMMILUX 28mm f/1.7 ASPH. (Leica Q, Q2, Q3)](../../src/lens-data/leica/Leica28mmf17.data.ts) | 81.8% (9/11) | 81.8% (9/11) | 2 | abbe: 2 |
| [CANON SERENAR 100mm f/3.5 I](../../src/lens-data/canon/CanonSerenar100mmf35.data.ts) | 80.0% (4/5) | 80.0% (4/5) | 1 | abbe: 1 |
| [NIKON 35mm f/2.8 (Nikon L35AF)](../../src/lens-data/nikon/NikonL35AF35mmf28.data.ts) | 80.0% (4/5) | 80.0% (4/5) | 1 | abbe: 1 |
| [FUJIFILM FUJINON 35mm f/4 (Fujifilm GFX100RF)](../../src/lens-data/fujifilm/FujifilmGFX100RF35mmf4.data.ts) | 80.0% (8/10) | 80.0% (8/10) | 2 | abbe: 2 |
| [FUJIFILM FUJINON XF 23mm f/2 R WR](../../src/lens-data/fujifilm/FujifilmXF23mmf2RWR.data.ts) | 80.0% (8/10) | 80.0% (8/10) | 2 | abbe: 2 |
| [LEICA ELMARIT-TL 18mm f/2.8 ASPH.](../../src/lens-data/leica/LeicaElmaritTL18mmf28.data.ts) | 80.0% (8/10) | 80.0% (8/10) | 2 | abbe: 2 |
| [MINOLTA AF APO TELE 300mm f/2.8](../../src/lens-data/minolta/MinoltaAF300mmf28.data.ts) | 80.0% (8/10) | 80.0% (8/10) | 2 | abbe: 2 |
| [OLYMPUS OM ZUIKO 16mm f/3.5 Fisheye](../../src/lens-data/olympus/OlympusZuiko16mmf35.data.ts) | 80.0% (8/10) | 80.0% (8/10) | 2 | abbe: 2 |
| [OLYMPUS OM J. ZUIKO AUTO-W 24mm f/2](../../src/lens-data/olympus/OlympusZuiko24mmf2J.data.ts) | 80.0% (8/10) | 80.0% (8/10) | 2 | abbe: 2 |

## Sweep 2 - Code-Only Missing Sellmeier

Add catalog entries only when public coefficient-backed vendor data is available and `assertCatalogConsistent` passes.

| Code | Elements | Lens files | localPatentStatus | reviewedSidecarStatus | Representative rows |
|---|---:|---:|---|---|---|
| 670571 | 10 | 5 | patents/US4871239.pdf<br>patents/JP2004109559A.pdf<br>patents/US4951078.pdf | 4/10 representative rows reviewed | [MINOLTA AF APO TELE 300mm f/2.8](../../src/lens-data/minolta/MinoltaAF300mmf28.data.ts) Element 8 (1.67000 / 57.07)<br>[MINOLTA AF 35-105mm f/3.5-4.5 New (v2)](../../src/lens-data/minolta/MinoltaAF35105mmf3545v2.data.ts) Element 2 (1.67000 / 57.07)<br>[MINOLTA AF 35-105mm f/3.5-4.5 New (v2)](../../src/lens-data/minolta/MinoltaAF35105mmf3545v2.data.ts) Element 5 (1.67000 / 57.07) |
| 493836 | 6 | 2 | patents/JP2004109559A.pdf | No reviewed-sidecar hit | [MINOLTA AF APO Tele 200mm f/2.8](../../src/lens-data/minolta/MinoltaAF200mmf28.data.ts) Element 1 (1.49310 / 83.55)<br>[MINOLTA AF APO Tele 200mm f/2.8](../../src/lens-data/minolta/MinoltaAF200mmf28.data.ts) Element 2 (1.49310 / 83.55)<br>[MINOLTA AF 70-200mm f/2.8 APO G (D) SSM](../../src/lens-data/minolta/MinoltaAF70200mmf28APO.data.ts) Element 2 (1.49310 / 83.58) |
| 486815 | 5 | 1 | patents/US3743384.pdf | All representative rows reviewed | [Nikon AI Zoom-Nikkor 360-1200mm f/11 ED](../../src/lens-data/nikon/NikonAIZoomNikkor3601200mmf11ED.data.ts) Front ED-type singlet (1.48606 / 81.50)<br>[Nikon AI Zoom-Nikkor 360-1200mm f/11 ED](../../src/lens-data/nikon/NikonAIZoomNikkor3601200mmf11ED.data.ts) Front triplet positive (1.48606 / 81.50)<br>[Nikon AI Zoom-Nikkor 360-1200mm f/11 ED](../../src/lens-data/nikon/NikonAIZoomNikkor3601200mmf11ED.data.ts) Hyperchromatic doublet negative (1.48606 / 81.50) |
| 744495 | 4 | 4 | patents/US7508592.pdf<br>patents/US20200142168A1.pdf<br>patents/JPWO2019049372A1.pdf<br>patents/WO2020136749A1.pdf | All representative rows reviewed | [NIKON AF-S NIKKOR 24-70mm f/2.8 G ED](../../src/lens-data/nikon/NikonAFS2470mmf28G.data.ts) Element 1 (1.74443 / 49.52)<br>[NIKON AF-S NIKKOR 24-70mm f/2.8 E ED VR](../../src/lens-data/nikon/NikonNikkorAFS2470mmf28E.data.ts) Element 1 (1.74389 / 49.50)<br>[NIKON NIKKOR Z 24-70mm f/4 S](../../src/lens-data/nikon/NikonNikkorZ2470mmf4S.data.ts) Element 3 (1.74353 / 49.50) |
| 501565 | 4 | 2 | patents/US4189212.pdf<br>patents/US3743384.pdf | All representative rows reviewed | [Nikon AI Zoom-Nikkor 25-50mm f/4](../../src/lens-data/nikon/NikonAIZoomNikkor2550mmf4.data.ts) Element 6 (1.50137 / 56.50)<br>[Nikon AI Zoom-Nikkor 25-50mm f/4](../../src/lens-data/nikon/NikonAIZoomNikkor2550mmf4.data.ts) Element 7 (1.50137 / 56.50)<br>[Nikon AI Zoom-Nikkor 25-50mm f/4](../../src/lens-data/nikon/NikonAIZoomNikkor2550mmf4.data.ts) Element 9b (1.50137 / 56.50) |
| 863252 | 4 | 2 | patents/WO2021199923A1.pdf<br>patents/WO_2025263124_A1.pdf | All representative rows reviewed | [SONY FE 14mm f/1.8 GM](../../src/lens-data/sony/SonyFE14mmf18GM.data.ts) Rear doublet flint (1.86252 / 25.20)<br>[SONY FE 14mm f/1.8 GM](../../src/lens-data/sony/SonyFE14mmf18GM.data.ts) Negative Petzval element (1.86252 / 25.20)<br>[SONY FE 28-70mm f/2 GM](../../src/lens-data/sony/SonyFE2870mmf2GM.data.ts) Element 14 (1.86252 / 25.20) |
| 662561 | 4 | 1 | patents/GB_850117_A.pdf | All representative rows reviewed | [CARL ZEISS JENA PANCOLAR 50mm f/2](../../src/lens-data/carl-zeiss-jena/CarlZeissJenaPancolar50mmf2.data.ts) Element 1 (1.66200 / 56.10)<br>[CARL ZEISS JENA PANCOLAR 50mm f/2](../../src/lens-data/carl-zeiss-jena/CarlZeissJenaPancolar50mmf2.data.ts) Element 2 (1.66200 / 56.10)<br>[CARL ZEISS JENA PANCOLAR 50mm f/2](../../src/lens-data/carl-zeiss-jena/CarlZeissJenaPancolar50mmf2.data.ts) Element 5 (1.66200 / 56.10) |
| 777297 | 3 | 3 | patents/WO2021199923A1.pdf<br>patents/WO_2025263124_A1.pdf<br>patents/JP2023039817A.pdf | All representative rows reviewed | [SONY FE 14mm f/1.8 GM](../../src/lens-data/sony/SonyFE14mmf18GM.data.ts) LN rear element (1.77660 / 29.70)<br>[SONY FE 28-70mm f/2 GM](../../src/lens-data/sony/SonyFE2870mmf2GM.data.ts) Element 5 (1.77660 / 29.70)<br>[SONY FE 70-200mm f/2.8 GM OSS II](../../src/lens-data/sony/SonyFE70200mmf28GMII.data.ts) Element 1 (1.77660 / 29.70) |
| 516565 | 3 | 1 | patents/CN216772097U.pdf | All representative rows reviewed | [PANASONIC LUMIX S 35mm f/1.8](../../src/lens-data/panasonic/PanasonicS35mmf18.data.ts) Element 8 (1.51602 / 56.50)<br>[PANASONIC LUMIX S 35mm f/1.8](../../src/lens-data/panasonic/PanasonicS35mmf18.data.ts) Element 9 (1.51602 / 56.50)<br>[PANASONIC LUMIX S 35mm f/1.8](../../src/lens-data/panasonic/PanasonicS35mmf18.data.ts) Element 10 (1.51602 / 56.50) |
| 585587 | 3 | 1 | patents/WO2024195273A1.pdf | All representative rows reviewed | [FUJIFILM FUJINON GF 30mm f/5.6 T/S](../../src/lens-data/fujifilm/FujifilmGF30mmf56TS.data.ts) Element L11 (1.58480 / 58.71)<br>[FUJIFILM FUJINON GF 30mm f/5.6 T/S](../../src/lens-data/fujifilm/FujifilmGF30mmf56TS.data.ts) Element L25 (1.58480 / 58.71)<br>[FUJIFILM FUJINON GF 30mm f/5.6 T/S](../../src/lens-data/fujifilm/FujifilmGF30mmf56TS.data.ts) Element L31 (1.58480 / 58.71) |
| 672472 | 3 | 1 | patents/US2084309.pdf | No reviewed-sidecar hit | [CARL ZEISS JENA BIOGON 35mm f/2.8 (pre-war)](../../src/lens-data/carl-zeiss-jena/ZeissBiogon35mmf28Prewar.data.ts) Element 1 (1.67160 / 47.20)<br>[CARL ZEISS JENA BIOGON 35mm f/2.8 (pre-war)](../../src/lens-data/carl-zeiss-jena/ZeissBiogon35mmf28Prewar.data.ts) Element 2 (1.67160 / 47.20)<br>[CARL ZEISS JENA BIOGON 35mm f/2.8 (pre-war)](../../src/lens-data/carl-zeiss-jena/ZeissBiogon35mmf28Prewar.data.ts) Element 6 (1.67160 / 47.20) |
| 863248 | 3 | 1 | patents/JP2023039817A.pdf | All representative rows reviewed | [SONY FE 70-200mm f/2.8 GM OSS II](../../src/lens-data/sony/SonyFE70200mmf28GMII.data.ts) Element 6 (1.86290 / 24.80)<br>[SONY FE 70-200mm f/2.8 GM OSS II](../../src/lens-data/sony/SonyFE70200mmf28GMII.data.ts) Element 9 (1.86290 / 24.80)<br>[SONY FE 70-200mm f/2.8 GM OSS II](../../src/lens-data/sony/SonyFE70200mmf28GMII.data.ts) Element 10 (1.86290 / 24.80) |
| 515546 | 2 | 2 | patents/US3507558.pdf<br>patents/US3743384.pdf | All representative rows reviewed | [NIKON AI NIKKOR 35mm f/2](../../src/lens-data/nikon/NikonAINikkor35mmf2.data.ts) Element 4 (1.51454 / 54.62)<br>[Nikon AI Zoom-Nikkor 360-1200mm f/11 ED](../../src/lens-data/nikon/NikonAIZoomNikkor3601200mmf11ED.data.ts) Relay front singlet (1.51454 / 54.60) |
| 518603 | 2 | 2 | patents/US4699475.pdf<br>patents/US4770511.pdf | All representative rows reviewed | [Nikon AI Zoom-Nikkor 35–105mm f/3.5–4.5S](../../src/lens-data/nikon/NikonAIZoomNikkor35105mmf3545.data.ts) Element 14 (1.51800 / 60.30)<br>[Nikon AI Zoom-Nikkor 35-200mm f/3.5-4.5S](../../src/lens-data/nikon/NikonAIZoomNikkor35200mmf3545S.data.ts) Element 14a (1.51835 / 60.34) |
| 531559 | 2 | 2 | patents/US20200142167A1.pdf<br>patents/WO2021039813A1.pdf | All representative rows reviewed | [CANON RF 24-240mm f/4-6.3 IS USM](../../src/lens-data/canon/CanonRF24240mmf463.data.ts) Element 14 (1.53110 / 55.90)<br>[NIKON AF-P DX NIKKOR 10-20mm f/4.5-5.6 G VR](../../src/lens-data/nikon/NikonAFPDX1020mmf4556G.data.ts) L41 (1.53110 / 55.91) |
| 561453 | 2 | 2 | patents/US20020075570A1.pdf<br>patents/US3376091.pdf | 1/2 representative rows reviewed | [HASSELBLAD HC 150mm f/3.2](../../src/lens-data/hasselblad/HasselbladHC150mmf32.data.ts) Element 7 (1.56093 / 45.30)<br>[SCHNEIDER-KREUZNACH SUPER-ANGULON 75mm f/5.6](../../src/lens-data/schneider-kreuznach/SchneiderSuperAngulon75mmf56.data.ts) Element 4 (1.56138 / 45.30) |
| 720521 | 2 | 2 | patents/US4124276.pdf | No reviewed-sidecar hit | [MINOLTA AF APO Tele 200mm f/2.8](../../src/lens-data/minolta/MinoltaAF200mmf28.data.ts) Element 3 (1.72000 / 52.14)<br>[MINOLTA VARISOFT ROKKOR 85mm f/2.8](../../src/lens-data/minolta/MinoltaVarisoft85mmf28.data.ts) Element 4 (1.72000 / 52.10) |
| 744494 | 2 | 2 | patents/US3507558.pdf<br>patents/US3743384.pdf | All representative rows reviewed | [NIKON AI NIKKOR 35mm f/2](../../src/lens-data/nikon/NikonAINikkor35mmf2.data.ts) Element 6 (1.74443 / 49.40)<br>[Nikon AI Zoom-Nikkor 360-1200mm f/11 ED](../../src/lens-data/nikon/NikonAIZoomNikkor3601200mmf11ED.data.ts) Telephoto rear doublet negative (1.74443 / 49.40) |
| 797454 | 2 | 2 | patents/US5528428.pdf<br>patents/US5557473.pdf | All representative rows reviewed | [NIKON NIKKOR 28mm f/2.8 (Nikon 28Ti)](../../src/lens-data/nikon/Nikon28Ti28mmf28.data.ts) Element 6 (1.79668 / 45.40)<br>[Nikon AF Nikkor 28mm f/2.8D](../../src/lens-data/nikon/NikonAFNikkor28mmf28D.data.ts) Element 3 (1.79668 / 45.40) |
| 807316 | 2 | 2 | patents/US4764000.pdf<br>patents/US4871239.pdf | All representative rows reviewed | [MINOLTA AF 100mm f/2.8 Macro](../../src/lens-data/minolta/MinoltaAF100mmf28Macro.data.ts) Element 7 (1.80741 / 31.59)<br>[MINOLTA AF 35-105mm f/3.5-4.5 New (v2)](../../src/lens-data/minolta/MinoltaAF35105mmf3545v2.data.ts) Element 10 (1.80741 / 31.59) |
| 870200 | 2 | 2 | patents/WO2023181666A1.pdf<br>patents/WO_2025239028_A1.pdf | All representative rows reviewed | [SONY FE 24-70mm f/2.8 GM II](../../src/lens-data/sony/SonyFE2470mmf28GMII.data.ts) Element 1 (1.86966 / 20.00)<br>[SONY FE 85mm f/1.4 GM II](../../src/lens-data/sony/SonyFE85mmf14GMII.data.ts) Element 14 (1.86966 / 20.00) |
| 933209 | 2 | 2 | patents/WO2021199923A1.pdf<br>patents/JP2023039817A.pdf | All representative rows reviewed | [SONY FE 14mm f/1.8 GM](../../src/lens-data/sony/SonyFE14mmf18GM.data.ts) High-index relay positive (1.93323 / 20.90)<br>[SONY FE 70-200mm f/2.8 GM OSS II](../../src/lens-data/sony/SonyFE70200mmf28GMII.data.ts) Element 13 (1.93323 / 20.90) |
| 511605 | 2 | 1 | patents/US4258985.pdf | No reviewed-sidecar hit | [MINOLTA AF 28mm f/2](../../src/lens-data/minolta/MinoltaAF28mmf2.data.ts) Element 2 (1.51110 / 60.49)<br>[MINOLTA AF 28mm f/2](../../src/lens-data/minolta/MinoltaAF28mmf2.data.ts) Element 3 (1.51110 / 60.49) |
| 514428 | 2 | 1 | patents/JP2016021011A.pdf | All representative rows reviewed | [NIKON AF-S NIKKOR 20mm f/1.8 G ED](../../src/lens-data/nikon/NikonNikkorAFS20mmf18G.data.ts) LS cement layer (1.51400 / 42.80)<br>[NIKON AF-S NIKKOR 20mm f/1.8 G ED](../../src/lens-data/nikon/NikonNikkorAFS20mmf18G.data.ts) Rear doublet cement layer (1.51400 / 42.80) |
| 569632 | 2 | 1 | Missing from untracked local patents/ references (US4025167, 4025167) | No reviewed-sidecar hit | [OLYMPUS ZUIKO AUTO-ZOOM 85-250mm f/5](../../src/lens-data/olympus/OlympusZuikoAutoZoom85250mmf5.data.ts) Element 4 (1.56873 / 63.20)<br>[OLYMPUS ZUIKO AUTO-ZOOM 85-250mm f/5](../../src/lens-data/olympus/OlympusZuikoAutoZoom85250mmf5.data.ts) Element 7 (1.56873 / 63.20) |

## Sweep 2B - Named Tokens Missing Catalog Resolution

These unresolved catalog-style labels are often better first catalog targets than already-reviewed proprietary six-digit rows.

| Token | Elements | Lens files | localPatentStatus | Representative rows |
|---|---:|---:|---|---|
| S-NPH7 | 4 | 4 | patents/US20230213745A1.pdf<br>patents/US20190265441A1.pdf<br>patents/JP2021179551A.pdf<br>patents/WO_2025263124_A1.pdf | [CANON RF 135mm f/1.8 L IS USM](../../src/lens-data/canon/CanonRF135f18.data.ts) Element 14 (2.00069 / 25.50; abbe)<br>[CANON RF 50mm f/1.2 L USM](../../src/lens-data/canon/CanonRF50mmf12L.data.ts) Element 3 (2.00100 / 29.13; abbe)<br>[PANASONIC LUMIX S 20-60mm f/3.5-5.6](../../src/lens-data/panasonic/PanasonicLumixS2060mmf3556.data.ts) Element 11 (1.92286 / 20.90; abbe) |
| SF5 | 4 | 4 | patents/US3108152.pdf<br>patents/DE_2444954_A1.pdf | [LEICA ELMARIT-M 135mm f/2.8](../../src/lens-data/leica/LeicaElmaritM135mmf28.data.ts) Element 4 (1.67764 / 32.00; abbe)<br>[RODENSTOCK GRANDAGON-N 65mm f/4.5](../../src/lens-data/rodenstock/RodenstockGrandagonN65mmf45.data.ts) Element 2 (1.67760 / 31.97; abbe)<br>[RODENSTOCK GRANDAGON-N 75mm f/4.5](../../src/lens-data/rodenstock/RodenstockGrandagonN75mmf45.data.ts) Element 2 (1.67270 / 32.21; lineIndices) |
| N-LAK9 | 3 | 3 | patents/US3038380.pdf<br>patents/FR_1471493_A.pdf<br>patents/DE_2818435_B1.pdf | [CARL ZEISS B-DISTAGON 35mm f/4 (Contarex)](../../src/lens-data/carl-zeiss-oberkochen/ZeissDistagon35mmf4.data.ts) LVII (1.69067 / 54.90; abbe)<br>[LEICA ELMARIT-R 35mm f/2.8](../../src/lens-data/leica/LeicaElmaritR35mmf28.data.ts) Element 7 (1.69400 / 54.60; abbe)<br>[RODENSTOCK RODAGON-WA 80mm f/4](../../src/lens-data/rodenstock/RodenstockRodagonWA80mmf4.data.ts) Element 1 (1.69100 / 54.71; lineIndices) |
| H-LAF3 | 2 | 2 | patents/CN205427291U.pdf<br>patents/JPWO2020157904A1.pdf | [LAOWA 15mm f/4 Wide Angle 1:1 Macro](../../src/lens-data/laowa/Laowa15mmf4Macro.data.ts) Element 7b (1.80420 / 46.50; abbe)<br>[NIKON NIKKOR Z 24-200mm f/4-6.3 VR](../../src/lens-data/nikon/NikonNikkorZ24200mmf463VR.data.ts) Element 18 (1.82080 / 42.51; abbe) |
| N-BAF4 | 2 | 2 | patents/JPWO2020157904A1.pdf | [CARL ZEISS DISTAGON T* 28mm f/2](../../src/lens-data/carl-zeiss-oberkochen/ZeissDistagon28mmf2.data.ts) Negative doublet rear element (1.60562 / 43.92; abbe)<br>[NIKON NIKKOR Z 24-200mm f/4-6.3 VR](../../src/lens-data/nikon/NikonNikkorZ24200mmf463VR.data.ts) Element 10 (1.57957 / 53.74; abbe) |
| N-BAK4 | 2 | 2 | patents/20260118637.pdf<br>patents/US5243468.pdf | [LEICA ELMAR-M 135mm f/4](../../src/lens-data/leica/LeicaElmarM135mmf4.data.ts) Element 1 (1.57125 / 55.80; abbe)<br>[NIKON NIKKOR 35mm f/2.8 (Nikon 35Ti)](../../src/lens-data/nikon/Nikon35Ti35mmf28.data.ts) Element 6 (1.56883 / 56.00; abbe) |
| N-LASF44 | 2 | 2 | patents/WO2024195273A1.pdf<br>patents/JP2014145954A.pdf | [FUJIFILM FUJINON GF 30mm f/5.6 T/S](../../src/lens-data/fujifilm/FujifilmGF30mmf56TS.data.ts) Element L32 (1.80420 / 46.50; abbe)<br>[SIGMA 60mm f/2.8 DN | Art](../../src/lens-data/sigma/Sigma60mmf28DN.data.ts) Element 1 (1.80420 / 46.50; abbe) |
| N-PSK53A | 2 | 2 | patents/US4871239.pdf<br>patents/DE_3907928_A1.pdf | [MINOLTA AF 35-105mm f/3.5-4.5 New (v2)](../../src/lens-data/minolta/MinoltaAF35105mmf3545v2.data.ts) Element 7 (1.61800 / 63.39; abbe)<br>[RODENSTOCK APO-SIRONAR-W 150mm f/5.6](../../src/lens-data/rodenstock/RodenstockApoSironarW150mmf56.data.ts) Element 2 (1.62000 / 63.50; abbe) |
| N-SSK2 | 2 | 2 | patents/DE_2444954_A1.pdf | [RODENSTOCK GRANDAGON-N 75mm f/4.5](../../src/lens-data/rodenstock/RodenstockGrandagonN75mmf45.data.ts) Element 3 (1.62229 / 53.27; abbe)<br>[RODENSTOCK GRANDAGON-N 90mm f/4.5](../../src/lens-data/rodenstock/RodenstockGrandagonN90mmf45.data.ts) Element 3 (1.62229 / 53.27; abbe) |
| NBFD10 | 2 | 2 | patents/JP2004302170A.pdf<br>patents/JP2012063403A.pdf | [HASSELBLAD HC Macro 120mm f/4](../../src/lens-data/hasselblad/HasselbladHC120mmf4Macro.data.ts) Element 8 (1.80440 / 39.60; abbe)<br>[SIGMA APO MACRO 150mm f/2.8 EX DG OS HSM](../../src/lens-data/sigma/SigmaAPOMacro150mmf28OSHSM.data.ts) Element 19 (1.83400 / 37.35; lineIndices) |
| NBFD32 | 2 | 2 | patents/20260118637.pdf<br>patents/CN_121454749_A.pdf | [FUJIFILM FUJINON XF 23mm f/2.8 R WR](../../src/lens-data/fujifilm/FujifilmXF23mmf28RWR.data.ts) L21 negative in first rear doublet (1.73037 / 32.23; abbe)<br>[SIGMA 17-40mm f/1.8 DC | Art](../../src/lens-data/sigma/Sigma1740mmf18DCA.data.ts) Element 11 (1.73037 / 32.23; abbe) |
| S-BAH10 | 2 | 2 | patents/US3748022.pdf | [CANON FD 35mm f/2 S.S.C. (I)](../../src/lens-data/canon/CanonFD35mmf2.data.ts) Element 3 (1.70154 / 41.10; abbe)<br>[CARL ZEISS TOUIT MAKRO-PLANAR T* 50mm f/2.8 Macro](../../src/lens-data/carl-zeiss-oberkochen/ZeissTouit50mmf28Macro.data.ts) L63 (1.67003 / 47.23; abbe) |
| S-FPM5 | 2 | 2 | patents/CN_120386081_A.pdf<br>patents/WO_2025263124_A1.pdf | [SIGMA 28-45mm f/1.8 DG DN | Art](../../src/lens-data/sigma/Sigma2845mmf18DN.data.ts) Element 2 (1.55200 / 70.70; abbe)<br>[SONY FE 28-70mm f/2 GM](../../src/lens-data/sony/SonyFE2870mmf2GM.data.ts) Element 17 (1.59456 / 66.90; abbe) |
| S-LAL61 | 2 | 2 | patents/JP2017227799A.pdf | [NIKON AF-S NIKKOR 28mm f/1.4 E ED](../../src/lens-data/nikon/NikonAFS28f14E.data.ts) Element 8 (1.69680 / 55.50; abbe)<br>[NIKON AF-S DX NIKKOR 55-300mm f/4.5-5.6 G ED VR](../../src/lens-data/nikon/NikonAFSDX55300mmf4556G.data.ts) L21 (1.74100 / 52.67; abbe) |
| S-NBH53 | 2 | 2 | patents/US20160274335A1.pdf<br>patents/US20110273780A1.pdf | [FUJIFILM FUJINON XF 90mm f/2 R LM WR](../../src/lens-data/fujifilm/FujifilmXF90mmf2.data.ts) Element 4 (1.74950 / 35.33; abbe)<br>[SONY E 18-55mm f/3.5-5.6 OSS](../../src/lens-data/sony/SonyE1855mmf3556.data.ts) Element 3 (1.91082 / 35.25; abbe) |
| SK3 | 2 | 2 | patents/DE_2444954_A1.pdf | [RODENSTOCK GRANDAGON-N 75mm f/4.5](../../src/lens-data/rodenstock/RodenstockGrandagonN75mmf45.data.ts) Element 6 (1.60881 / 58.90; lineIndices)<br>[RODENSTOCK GRANDAGON-N 90mm f/4.5](../../src/lens-data/rodenstock/RodenstockGrandagonN90mmf45.data.ts) Element 6 (1.60881 / 58.86; abbe) |
| TAF1 | 2 | 2 | patents/JP2012063403A.pdf<br>patents/US10191254.pdf | [SIGMA APO MACRO 150mm f/2.8 EX DG OS HSM](../../src/lens-data/sigma/SigmaAPOMacro150mmf28OSHSM.data.ts) Element 5 (1.77250 / 49.62; lineIndices)<br>[SONY FE 28mm f/2](../../src/lens-data/sony/SonyFE28mmf2.data.ts) Element 5 (1.77250 / 49.50; abbe) |
| E-FDS3HT | 2 | 1 | patents/WO2022097401A1.pdf | [NIKON NIKKOR Z MC 105mm f/2.8 VR S](../../src/lens-data/nikon/NikonZ105f28.data.ts) Element 7 (1.94595 / 17.98; abbe)<br>[NIKON NIKKOR Z MC 105mm f/2.8 VR S](../../src/lens-data/nikon/NikonZ105f28.data.ts) Element 13 (1.94595 / 17.98; abbe) |
| H-K6 | 2 | 1 | Missing from untracked local patents/ references (US4568150, 4568150) | [OLYMPUS OM-SYSTEM ZUIKO AUTO-ZOOM 65-200mm f/4](../../src/lens-data/olympus/OlympusZuikoAutoZoom65200mmf4.data.ts) Element 8 (1.51112 / 60.48; abbe)<br>[OLYMPUS OM-SYSTEM ZUIKO AUTO-ZOOM 65-200mm f/4](../../src/lens-data/olympus/OlympusZuikoAutoZoom65200mmf4.data.ts) Element 14 (1.51112 / 60.48; abbe) |
| H-ZLAF4A | 2 | 1 | patents/CN210573001U.pdf | [LAOWA 24mm f/14 2× Macro Probe](../../src/lens-data/laowa/Laowa24mmf14Probe.data.ts) Element 1 (1.83481 / 42.72; abbe)<br>[LAOWA 24mm f/14 2× Macro Probe](../../src/lens-data/laowa/Laowa24mmf14Probe.data.ts) Element 27 (1.83481 / 42.72; abbe) |
| K-LAFK50 | 2 | 1 | patents/US20150192839A1.pdf | [PANASONIC LEICA DG NOCTICRON 42.5mm f/1.2 ASPH POWER O.I.S.](../../src/lens-data/panasonic/PanasonicDGNocticron42mmf12.data.ts) Element 8 (1.77010 / 49.70; lineIndices)<br>[PANASONIC LEICA DG NOCTICRON 42.5mm f/1.2 ASPH POWER O.I.S.](../../src/lens-data/panasonic/PanasonicDGNocticron42mmf12.data.ts) Element 11 (1.77010 / 49.70; lineIndices) |
| N-K5 | 2 | 1 | patents/20260118637.pdf | [RODENSTOCK GRANDAGON-N 75mm f/6.8](../../src/lens-data/rodenstock/RodenstockGrandagonN75mmf68.data.ts) Element 1 (1.52460 / 59.22; abbe)<br>[RODENSTOCK GRANDAGON-N 75mm f/6.8](../../src/lens-data/rodenstock/RodenstockGrandagonN75mmf68.data.ts) Element 6 (1.52460 / 59.22; abbe) |
| N-LAF2 | 2 | 1 | Missing from untracked local patents/ references (DE2359156A1, DE2359156, 2359156) | [CARL ZEISS DISTAGON T* 28mm f/2](../../src/lens-data/carl-zeiss-oberkochen/ZeissDistagon28mmf2.data.ts) Pre-stop negative meniscus (1.74400 / 44.77; abbe)<br>[CARL ZEISS DISTAGON T* 28mm f/2](../../src/lens-data/carl-zeiss-oberkochen/ZeissDistagon28mmf2.data.ts) Positive doublet front element (1.74400 / 44.77; abbe) |
| S-APL1 | 2 | 1 | patents/US3850509.pdf | [OLYMPUS OM ZUIKO 16mm f/3.5 Fisheye](../../src/lens-data/olympus/OlympusZuiko16mmf35.data.ts) Element 8 (1.51728 / 69.60; abbe)<br>[OLYMPUS OM ZUIKO 16mm f/3.5 Fisheye](../../src/lens-data/olympus/OlympusZuiko16mmf35.data.ts) Element 10 (1.51728 / 69.60; abbe) |
| S-LAM73 | 2 | 1 | patents/WO_2025263124_A1.pdf | [SONY FE 28-70mm f/2 GM](../../src/lens-data/sony/SonyFE2870mmf2GM.data.ts) Element 16 (1.85659 / 40.10; abbe)<br>[SONY FE 28-70mm f/2 GM](../../src/lens-data/sony/SonyFE2870mmf2GM.data.ts) Element 20 (1.85659 / 40.10; abbe) |

## Sweep 3 - Proprietary Line-Index Backfill

Use local untracked patents first. Populate patent-listed `nC`, `nF`, `ng`, and `dPgF` when Sellmeier data is unavailable.

| Lens | Patent reference | Elements | localPatentPath | localPatentStatus | Notes |
|---|---|---|---|---|---|

