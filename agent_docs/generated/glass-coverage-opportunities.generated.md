# Glass Coverage Opportunities (auto-generated)

Consolidated work queue for the three planned glass-coverage sweeps.
Rows that cite `patents/` refer to ignored/untracked local PDF files used as source references only.
Do not add, stage, or commit those patent files.

**Regenerate this file** by running `npm test -- glassCoverageOpportunitiesScan`.
Regenerate the full glass report set with `npm run generate:glass-reports`.

## Summary

- **311** lenses scanned (**303** visible)
- **2840 / 3510** non-air surfaces use strict catalog Sellmeier data (80.9%)
- **2862 / 3510** non-air surfaces use trusted chromatic data (Sellmeier or measured line indices, 81.5%)
- **0** mismatch surfaces in Sweep 1 across **0** lens files
- **0** Sweep 1 surfaces have a matching untracked local patent PDF
- **156** code-only missing-Sellmeier elements in Sweep 2
- **128** unresolved named-token elements in Sweep 2B
- **0** Tier A proprietary backfill rows in Sweep 3

## Sweep 1 - Relabel Mismatches

Patent PDFs under `patents/` are untracked local references. A missing local patent status is a source blocker for the requested first sweep.

| Lens | Patent | Surface | Current label | Stored nd/vd | Best candidate(s) | localPatentPath | localPatentStatus |
|---|---|---|---|---|---|---|---|

## Near-Complete Visible Lenses

These are efficient follow-up targets after mismatch blockers because one or two surfaces can make the whole lens chromatically trusted. Strict Sellmeier coverage remains shown separately.

| Lens | Trusted chromatic coverage | Strict Sellmeier coverage | Missing trusted surfaces | Missing quality mix |
|---|---:|---:|---:|---|
| [CANON RF24-105mm F2.8 L IS USM Z](../../src/lens-data/canon/CanonRF24105mmf28Z.data.ts) | 95.8% (23/24) | 95.8% (23/24) | 1 | abbe: 1 |
| [NIKON NIKKOR Z 70-200mm f/2.8 VR S](../../src/lens-data/nikon/NikonNikkorZ70200f28.data.ts) | 95.2% (20/21) | 95.2% (20/21) | 1 | abbe: 1 |
| [Sony FE 70-200mm F4 G OSS](../../src/lens-data/sony/SonyFE70200mmf4G.data.ts) | 95.2% (20/21) | 95.2% (20/21) | 1 | abbe: 1 |
| [FUJIFILM Fujinon GF 100-200mm F5.6 R LM OIS WR](../../src/lens-data/fujifilm/FujifilmGF100200mmf56.data.ts) | 95.0% (19/20) | 95.0% (19/20) | 1 | abbe: 1 |
| [NIKON AF-S NIKKOR 200-500mm f/5.6E ED VR](../../src/lens-data/nikon/NikonNikkorAFS200500mmf56.data.ts) | 94.7% (18/19) | 94.7% (18/19) | 1 | abbe: 1 |
| [Sigma APO Macro 180mm f/2.8 EX DG OS HSM](../../src/lens-data/sigma/SigmaAPOMacro180mmf28.data.ts) | 94.7% (18/19) | 84.2% (16/19) | 1 | abbe: 1 |
| [CANON RF 24-105mm f/4 L IS USM](../../src/lens-data/canon/CanonRF24105mmf4L.data.ts) | 94.4% (17/18) | 94.4% (17/18) | 1 | abbe: 1 |
| [NIKON AF-S NIKKOR 16-35mm f/4G ED VR](../../src/lens-data/nikon/NikonNikkorAFS1635mmf4.data.ts) | 94.4% (17/18) | 94.4% (17/18) | 1 | abbe: 1 |
| [NIKON PC NIKKOR 19mm f/4E ED](../../src/lens-data/nikon/NikonNikkorPCE19mmf4E.data.ts) | 94.4% (17/18) | 94.4% (17/18) | 1 | abbe: 1 |
| [Olympus Zuiko Digital ED 14–35mm f/2.0 SWD](../../src/lens-data/olympus/OlympusMZuiko1435mmf2ED.data.ts) | 94.4% (17/18) | 94.4% (17/18) | 1 | abbe: 1 |
| [CANON RF 135mm f/1.8 L IS USM](../../src/lens-data/canon/CanonRF135f18.data.ts) | 94.1% (16/17) | 94.1% (16/17) | 1 | abbe: 1 |
| [Nikon AF-S DX NIKKOR 55-300mm f/4.5-5.6G ED VR](../../src/lens-data/nikon/NikonAFSDX55300mmf4556G.data.ts) | 94.1% (16/17) | 94.1% (16/17) | 1 | abbe: 1 |
| [Olympus M.Zuiko Digital ED 12-100mm f/4.0 IS PRO](../../src/lens-data/olympus/OlympusMZuiko12100mmf4ISPRO.data.ts) | 94.1% (16/17) | 94.1% (16/17) | 1 | abbe: 1 |
| [Sigma 24mm F1.4 DG DN | Art](../../src/lens-data/sigma/Sigma24mmf14ArtDN.data.ts) | 94.1% (16/17) | 94.1% (16/17) | 1 | abbe: 1 |
| [CANON EF-S 55-250mm f/4-5.6 IS STM](../../src/lens-data/canon/CanonEFS55250mmf456ISSTM.data.ts) | 93.3% (14/15) | 93.3% (14/15) | 1 | abbe: 1 |
| [Olympus Zuiko Digital ED 12-60mm f/2.8-4.0 SWD](../../src/lens-data/olympus/OlympusMZuiko1260mmf284ED.data.ts) | 93.3% (14/15) | 93.3% (14/15) | 1 | abbe: 1 |
| [Sigma 20mm F1.4 DG HSM | Art](../../src/lens-data/sigma/Sigma20mmf14DGHSMArt.data.ts) | 93.3% (14/15) | 93.3% (14/15) | 1 | abbe: 1 |
| [Canon EF-M 32mm f/1.4 STM](../../src/lens-data/canon/CanonEFM32mmf14STM.data.ts) | 92.9% (13/14) | 92.9% (13/14) | 1 | abbe: 1 |
| [CANON EF-S 10-18mm f/4.5-5.6 IS STM](../../src/lens-data/canon/CanonEFS1018mmf4.data.ts) | 92.9% (13/14) | 92.9% (13/14) | 1 | abbe: 1 |
| [CANON RF 85mm f/1.2L USM](../../src/lens-data/canon/CanonRF85mmf12L.data.ts) | 92.9% (13/14) | 92.9% (13/14) | 1 | abbe: 1 |
| [ZEISS Touit Makro-Planar T* 50mm f/2.8 Macro](../../src/lens-data/carl-zeiss-oberkochen/ZeissTouit50mmf28Macro.data.ts) | 92.9% (13/14) | 92.9% (13/14) | 1 | abbe: 1 |
| [FUJIFILM FUJINON GF120mmF4 R LM OIS WR Macro](../../src/lens-data/fujifilm/FujifilmGF120mmf4RLM.data.ts) | 92.9% (13/14) | 92.9% (13/14) | 1 | abbe: 1 |
| [Nikon AF-P DX NIKKOR 70-300mm f/4.5-6.3G ED VR](../../src/lens-data/nikon/NikonAFPDX70300mmf4563G.data.ts) | 92.9% (13/14) | 92.9% (13/14) | 1 | abbe: 1 |
| [SIGMA 50mm F1.4 DG DN | Art](../../src/lens-data/sigma/SigmaDGDNArt50mmf14.data.ts) | 92.9% (13/14) | 92.9% (13/14) | 1 | abbe: 1 |
| [SONY FE 85mm F1.4 GM II](../../src/lens-data/sony/SonyFE85mmf14GMII.data.ts) | 92.9% (13/14) | 92.9% (13/14) | 1 | abbe: 1 |
| [NIKON AF-S NIKKOR 120-300mm f/2.8E FL ED SR VR](../../src/lens-data/nikon/NikonNikkorAFS120300mmf28.data.ts) | 92.0% (23/25) | 92.0% (23/25) | 2 | abbe: 2 |
| [NIKON AF-S MICRO-NIKKOR 60mm f/2.8G ED](../../src/lens-data/nikon/NikonAFSMicroNikkor60f28G.data.ts) | 91.7% (11/12) | 91.7% (11/12) | 1 | abbe: 1 |
| [NIKON NIKKOR Z 85mm f/1.8 S](../../src/lens-data/nikon/NikonZ85f18S.data.ts) | 91.7% (11/12) | 91.7% (11/12) | 1 | abbe: 1 |
| [PANASONIC LEICA DG SUMMILUX 9mm F1.7 ASPH](../../src/lens-data/panasonic/PanasonicLeicaDG9mmf17.data.ts) | 91.7% (11/12) | 91.7% (11/12) | 1 | abbe: 1 |
| [SONY PLANAR T* FE 50mm F1.4 ZA](../../src/lens-data/sony/SonyPlanarFE50mmf14ZA.data.ts) | 91.7% (11/12) | 91.7% (11/12) | 1 | abbe: 1 |
| [CANON EF 50mm f/1.0L USM](../../src/lens-data/canon/CanonEF50mmf1L.data.ts) | 90.9% (10/11) | 90.9% (10/11) | 1 | abbe: 1 |
| [FUJIFILM FUJINON XF 56mm F1.2 R](../../src/lens-data/fujifilm/FujifilmXF56mmf12.data.ts) | 90.9% (10/11) | 90.9% (10/11) | 1 | abbe: 1 |
| [FUJIFILM FUJINON XF 90mm f/2 R LM WR](../../src/lens-data/fujifilm/FujifilmXF90mmf2.data.ts) | 90.9% (10/11) | 90.9% (10/11) | 1 | abbe: 1 |
| [NIKON NIKKOR Z 35mm f/1.8 S](../../src/lens-data/nikon/NikonZ35f18S.data.ts) | 90.9% (10/11) | 90.9% (10/11) | 1 | abbe: 1 |
| [Sony E 18-55mm f/3.5-5.6 OSS](../../src/lens-data/sony/SonyE1855mmf3556.data.ts) | 90.9% (10/11) | 90.9% (10/11) | 1 | abbe: 1 |
| [CANON RF 24-240mm F4-6.3 IS USM](../../src/lens-data/canon/CanonRF24240mmf463.data.ts) | 90.5% (19/21) | 90.5% (19/21) | 2 | abbe: 2 |
| [Nikon AF-S NIKKOR 70-200mm f/2.8G ED VR II](../../src/lens-data/nikon/NikonAFS70200mmf28GVRII.data.ts) | 90.5% (19/21) | 90.5% (19/21) | 2 | abbe: 2 |
| [NIKON AF-S NIKKOR 24-70mm f/2.8E ED VR](../../src/lens-data/nikon/NikonNikkorAFS2470mmf28E.data.ts) | 90.5% (19/21) | 90.5% (19/21) | 2 | abbe: 2 |
| [NIKON NIKKOR Z DX 16-50mm f/3.5-6.3 VR](../../src/lens-data/nikon/NikonZDX1650mmf3563VR.data.ts) | 90.0% (9/10) | 90.0% (9/10) | 1 | abbe: 1 |
| [VOIGTLÄNDER MACRO APO-LANTHAR 125mm f/2.5 SL](../../src/lens-data/voigtlander/VoigtlanderMacroApoLanthar125mmf25.data.ts) | 90.0% (9/10) | 90.0% (9/10) | 1 | abbe: 1 |
| [VOIGTLÄNDER NOKTON 35mm f/1.2 Aspherical](../../src/lens-data/voigtlander/VoigtlanderNokton35mmf12.data.ts) | 90.0% (9/10) | 90.0% (9/10) | 1 | abbe: 1 |
| [SONY FE 24-70mm f/2.8 GM II](../../src/lens-data/sony/SonyFE2470mmf28GMII.data.ts) | 90.0% (18/20) | 90.0% (18/20) | 2 | abbe: 2 |
| [NIKON NIKKOR Z 24-200mm f/4-6.3 VR](../../src/lens-data/nikon/NikonNikkorZ24200mmf463VR.data.ts) | 89.5% (17/19) | 89.5% (17/19) | 2 | abbe: 2 |
| [NIKON NIKKOR Z DX 18-140mm f/3.5-6.3 VR](../../src/lens-data/nikon/NikonZDX18140mmf3563VR.data.ts) | 89.5% (17/19) | 89.5% (17/19) | 2 | abbe: 2 |
| [Nikon 1 NIKKOR 32mm f/1.2](../../src/lens-data/nikon/Nikon1Nikkor32mmf12.data.ts) | 88.9% (8/9) | 88.9% (8/9) | 1 | abbe: 1 |
| [NIKON NIKKOR-N 5cm f/1.1](../../src/lens-data/nikon/NikonN5cmf11.data.ts) | 88.9% (8/9) | 88.9% (8/9) | 1 | abbe: 1 |
| [NIKON NIKKOR-N Auto 24mm f/2.8](../../src/lens-data/nikon/NikonNikkorAuto24f28.data.ts) | 88.9% (8/9) | 88.9% (8/9) | 1 | abbe: 1 |
| [NIKON NIKKOR Z 26mm f/2.8](../../src/lens-data/nikon/NikonZ26f28.data.ts) | 88.9% (8/9) | 88.9% (8/9) | 1 | abbe: 1 |
| [Sony E 35mm F1.8 OSS](../../src/lens-data/sony/SonyE35mmf18.data.ts) | 88.9% (8/9) | 88.9% (8/9) | 1 | abbe: 1 |
| [Sony FE 28mm F2](../../src/lens-data/sony/SonyFE28mmf2.data.ts) | 88.9% (8/9) | 88.9% (8/9) | 1 | abbe: 1 |
| [VOIGTLÄNDER NOKTON 50mm f/1.2 X-Mount](../../src/lens-data/voigtlander/VoigtlanderNoktonX50mmf12.data.ts) | 88.9% (8/9) | 88.9% (8/9) | 1 | abbe: 1 |
| [FUJIFILM Fujinon GF 45-100mmF4 R LM OIS WR](../../src/lens-data/fujifilm/FujifilmGF45100mmf4.data.ts) | 88.2% (15/17) | 88.2% (15/17) | 2 | abbe: 2 |
| [NIKON NIKKOR Z 50mm f/1.2 S](../../src/lens-data/nikon/NikonNikkorZ50f12.data.ts) | 88.2% (15/17) | 88.2% (15/17) | 2 | abbe: 2 |
| [FUJIFILM FUJINON XF 35mmF1.4 R](../../src/lens-data/fujifilm/FujifilmXF35mmf14R.data.ts) | 87.5% (7/8) | 87.5% (7/8) | 1 | abbe: 1 |
| [Minolta AF 100mm f/2.8 Macro](../../src/lens-data/minolta/MinoltaAF100mmf28Macro.data.ts) | 87.5% (7/8) | 87.5% (7/8) | 1 | abbe: 1 |
| [RICOH GR LENS A12 28mm f/2.5](../../src/lens-data/ricoh/RicohGXRA1218mmf25.data.ts) | 87.5% (7/8) | 87.5% (7/8) | 1 | abbe: 1 |
| [Sigma 60mm F2.8 DN | Art](../../src/lens-data/sigma/Sigma60mmf28DN.data.ts) | 87.5% (7/8) | 87.5% (7/8) | 1 | abbe: 1 |
| [SONY SONNAR T* E 24mm F1.8 ZA](../../src/lens-data/sony/SonyFE24mmf18ZA.data.ts) | 87.5% (7/8) | 87.5% (7/8) | 1 | abbe: 1 |
| [Nikon AF-S NIKKOR 24-70mm f/2.8G ED](../../src/lens-data/nikon/NikonAFS2470mmf28G.data.ts) | 87.5% (14/16) | 87.5% (14/16) | 2 | abbe: 2 |
| [NIKON NIKKOR Z MC 105mm f/2.8 VR S](../../src/lens-data/nikon/NikonZ105f28.data.ts) | 87.5% (14/16) | 87.5% (14/16) | 2 | abbe: 2 |
| [SIGMA 40mm F1.4 DG HSM | Art](../../src/lens-data/sigma/SigmaArt40mmf14.data.ts) | 87.5% (14/16) | 87.5% (14/16) | 2 | abbe: 2 |
| [FUJIFILM FUJINON GF32-64mmF4 R LM WR](../../src/lens-data/fujifilm/FujifilmGF3264mmf4.data.ts) | 86.7% (13/15) | 86.7% (13/15) | 2 | abbe: 2 |
| [NIKON AF-S NIKKOR 28mm f/1.4E ED](../../src/lens-data/nikon/NikonAFS28f14E.data.ts) | 86.7% (13/15) | 86.7% (13/15) | 2 | abbe: 2 |
| [NIKON PC-E NIKKOR 24mm f/3.5D ED](../../src/lens-data/nikon/NikonPCENikkor24mmf35DED.data.ts) | 86.7% (13/15) | 86.7% (13/15) | 2 | abbe: 2 |
| [MINOLTA MD ROKKOR 50mm f/1.4](../../src/lens-data/minolta/MinoltaRokkor50mmf14MD.data.ts) | 85.7% (6/7) | 85.7% (6/7) | 1 | abbe: 1 |
| [OLYMPUS ZUIKO AUTO-S 50mm f/1.2](../../src/lens-data/olympus/OlympusZuikoAutoS50mmf12.data.ts) | 85.7% (6/7) | 85.7% (6/7) | 1 | abbe: 1 |
| [RICOH GR 28mm f/2.8](../../src/lens-data/ricoh/RicohGR28f28.data.ts) | 85.7% (6/7) | 85.7% (6/7) | 1 | abbe: 1 |
| [RICOH GR IIIx 26.1mm f/2.8](../../src/lens-data/ricoh/RicohGR3x.data.ts) | 85.7% (6/7) | 85.7% (6/7) | 1 | abbe: 1 |
| [RICOH GR IV 18.3mm f/2.8](../../src/lens-data/ricoh/RicohGR428f28.data.ts) | 85.7% (6/7) | 85.7% (6/7) | 1 | abbe: 1 |
| [SONY SONNAR T* FE 55mm F1.8 ZA](../../src/lens-data/sony/SonyFE55mmf18ZA.data.ts) | 85.7% (6/7) | 85.7% (6/7) | 1 | abbe: 1 |
| [CANON EF-S 10-22mm f/3.5-4.5 USM](../../src/lens-data/canon/CanonEFS1022mmf3545.data.ts) | 85.7% (12/14) | 85.7% (12/14) | 2 | abbe: 2 |
| [FUJIFILM FUJINON GF 20-35mm f/4 R WR](../../src/lens-data/fujifilm/FujifilmGF2035mmf4.data.ts) | 85.7% (12/14) | 85.7% (12/14) | 2 | abbe: 2 |
| [FUJIFILM FUJINON GF55mmF1.7 R WR](../../src/lens-data/fujifilm/FujifilmGF55mmf17.data.ts) | 85.7% (12/14) | 85.7% (12/14) | 2 | abbe: 2 |
| [NIKON AF-S VR Micro-NIKKOR 105mm f/2.8G IF-ED](../../src/lens-data/nikon/NikonAFS105f28G.data.ts) | 85.7% (12/14) | 85.7% (12/14) | 2 | abbe: 2 |
| [NIKON AF-S NIKKOR 105mm f/1.4E ED](../../src/lens-data/nikon/NikonNikkor105f14E.data.ts) | 85.7% (12/14) | 85.7% (12/14) | 2 | abbe: 2 |
| [NIKON NIKKOR Z 24-70mm f/4 S](../../src/lens-data/nikon/NikonNikkorZ2470mmf4S.data.ts) | 85.7% (12/14) | 85.7% (12/14) | 2 | abbe: 2 |
| [NIKON NIKKOR Z 50mm f/1.8 S](../../src/lens-data/nikon/NikonNikkorZ50f18S.data.ts) | 85.7% (12/14) | 85.7% (12/14) | 2 | constant: 2 |
| [Nikon AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR](../../src/lens-data/nikon/NikonAFPDX1855mmf3556G.data.ts) | 84.6% (11/13) | 84.6% (11/13) | 2 | abbe: 2 |
| [CANON EF-S 24mm f/2.8 STM](../../src/lens-data/canon/CanonEFS24mmf28STM.data.ts) | 83.3% (5/6) | 83.3% (5/6) | 1 | abbe: 1 |
| [Nikon Reflex-Nikkor 500mm f/8 (New)](../../src/lens-data/nikon/NikonReflexNikkor500mmf8New.data.ts) | 83.3% (5/6) | 83.3% (5/6) | 1 | abbe: 1 |
| [PENTAX-110 24mm f/2.8](../../src/lens-data/pentax/Pentax11024mmf28.data.ts) | 83.3% (5/6) | 83.3% (5/6) | 1 | abbe: 1 |
| [RICOH GR III  18.3mm f/2.8](../../src/lens-data/ricoh/RicohGR328f28.data.ts) | 83.3% (5/6) | 83.3% (5/6) | 1 | abbe: 1 |
| [LEICA SUMMILUX 28 mm f/1.7 ASPH. (Q, Q2, Q3)](../../src/lens-data/leica/Leica28mmf17.data.ts) | 81.8% (9/11) | 81.8% (9/11) | 2 | abbe: 2 |
| [NIKON L35AF 35mm f/2.8](../../src/lens-data/nikon/NikonL35AF35mmf28.data.ts) | 80.0% (4/5) | 80.0% (4/5) | 1 | abbe: 1 |
| [Nikon Reflex-Nikkor 1000mm f/11](../../src/lens-data/nikon/NikonReflexNikkor1000mmf11.data.ts) | 80.0% (4/5) | 80.0% (4/5) | 1 | abbe: 1 |
| [FUJIFILM FUJINON 35mm f/4 (GFX100RF)](../../src/lens-data/fujifilm/FujifilmGFX100RF35mmf4.data.ts) | 80.0% (8/10) | 80.0% (8/10) | 2 | abbe: 2 |
| [Leica Elmarit-TL 18mm f/2.8 ASPH.](../../src/lens-data/leica/LeicaElmaritTL18mmf28.data.ts) | 80.0% (8/10) | 80.0% (8/10) | 2 | abbe: 2 |
| [OLYMPUS OM Zuiko 16mm f/3.5 Fisheye](../../src/lens-data/olympus/OlympusZuiko16mmf35.data.ts) | 80.0% (8/10) | 80.0% (8/10) | 2 | abbe: 2 |
| [OLYMPUS OM J. ZUIKO AUTO-W 24mm f/2](../../src/lens-data/olympus/OlympusZuiko24mmf2J.data.ts) | 80.0% (8/10) | 80.0% (8/10) | 2 | abbe: 2 |
| [VOIGTLÄNDER ULTRON Vintage Line 28mm F2 Aspherical](../../src/lens-data/voigtlander/VoigtlanderUltron28f2.data.ts) | 80.0% (8/10) | 80.0% (8/10) | 2 | abbe: 2 |

## Sweep 2 - Code-Only Missing Sellmeier

Add catalog entries only when public coefficient-backed vendor data is available and `assertCatalogConsistent` passes.

| Code | Elements | Lens files | localPatentStatus | reviewedSidecarStatus | Representative rows |
|---|---:|---:|---|---|---|
| 670571 | 7 | 4 | patents/US4871239.pdf<br>patents/JP2004109559A.pdf | 4/7 representative rows reviewed | [Minolta AF APO TELE 300mm f/2.8](../../src/lens-data/minolta/MinoltaAF300mmf28.data.ts) Element 8 (1.67000 / 57.07)<br>[Minolta AF 35-105mm f/3.5-4.5 New (v2)](../../src/lens-data/minolta/MinoltaAF35105mmf3545v2.data.ts) Element 2 (1.67000 / 57.07)<br>[Minolta AF 35-105mm f/3.5-4.5 New (v2)](../../src/lens-data/minolta/MinoltaAF35105mmf3545v2.data.ts) Element 5 (1.67000 / 57.07) |
| 744495 | 4 | 4 | patents/US7508592.pdf<br>patents/US20200142168A1.pdf<br>patents/JPWO2019049372A1.pdf<br>patents/WO2020136749A1.pdf | 3/4 representative rows reviewed | [Nikon AF-S NIKKOR 24-70mm f/2.8G ED](../../src/lens-data/nikon/NikonAFS2470mmf28G.data.ts) Element 1 (1.74443 / 49.52)<br>[NIKON AF-S NIKKOR 24-70mm f/2.8E ED VR](../../src/lens-data/nikon/NikonNikkorAFS2470mmf28E.data.ts) Element 1 (1.74389 / 49.50)<br>[NIKON NIKKOR Z 24-70mm f/4 S](../../src/lens-data/nikon/NikonNikkorZ2470mmf4S.data.ts) Element 3 (1.74353 / 49.50) |
| 863252 | 4 | 2 | patents/WO2021199923A1.pdf<br>patents/WO_2025263124_A1.pdf | All representative rows reviewed | [Sony FE 14mm f/1.8 GM](../../src/lens-data/sony/SonyFE14mmf18GM.data.ts) Rear doublet flint (1.86252 / 25.20)<br>[Sony FE 14mm f/1.8 GM](../../src/lens-data/sony/SonyFE14mmf18GM.data.ts) Negative Petzval element (1.86252 / 25.20)<br>[SONY FE 28-70mm F2 GM](../../src/lens-data/sony/SonyFE2870mmf2GM.data.ts) Element 14 (1.86252 / 25.20) |
| 662561 | 4 | 1 | patents/GB_850117_A.pdf | All representative rows reviewed | [CARL ZEISS JENA PANCOLAR 50mm f/2](../../src/lens-data/carl-zeiss-jena/CarlZeissJenaPancolar50mmf2.data.ts) Element 1 (1.66200 / 56.10)<br>[CARL ZEISS JENA PANCOLAR 50mm f/2](../../src/lens-data/carl-zeiss-jena/CarlZeissJenaPancolar50mmf2.data.ts) Element 2 (1.66200 / 56.10)<br>[CARL ZEISS JENA PANCOLAR 50mm f/2](../../src/lens-data/carl-zeiss-jena/CarlZeissJenaPancolar50mmf2.data.ts) Element 5 (1.66200 / 56.10) |
| 777297 | 3 | 3 | patents/WO2021199923A1.pdf<br>patents/WO_2025263124_A1.pdf<br>patents/JP2023039817A.pdf | All representative rows reviewed | [Sony FE 14mm f/1.8 GM](../../src/lens-data/sony/SonyFE14mmf18GM.data.ts) LN rear element (1.77660 / 29.70)<br>[SONY FE 28-70mm F2 GM](../../src/lens-data/sony/SonyFE2870mmf2GM.data.ts) Element 5 (1.77660 / 29.70)<br>[SONY FE 70-200mm F2.8 GM OSS II](../../src/lens-data/sony/SonyFE70200mmf28GMII.data.ts) Element 1 (1.77660 / 29.70) |
| 516565 | 3 | 1 | patents/CN216772097U.pdf | All representative rows reviewed | [PANASONIC LUMIX S 35mm F1.8](../../src/lens-data/panasonic/PanasonicS35mmf18.data.ts) Element 8 (1.51602 / 56.50)<br>[PANASONIC LUMIX S 35mm F1.8](../../src/lens-data/panasonic/PanasonicS35mmf18.data.ts) Element 9 (1.51602 / 56.50)<br>[PANASONIC LUMIX S 35mm F1.8](../../src/lens-data/panasonic/PanasonicS35mmf18.data.ts) Element 10 (1.51602 / 56.50) |
| 585587 | 3 | 1 | patents/WO2024195273A1.pdf | All representative rows reviewed | [FUJIFILM FUJINON GF30mmF5.6 T/S](../../src/lens-data/fujifilm/FujifilmGF30mmf56TS.data.ts) Element L11 (1.58480 / 58.71)<br>[FUJIFILM FUJINON GF30mmF5.6 T/S](../../src/lens-data/fujifilm/FujifilmGF30mmf56TS.data.ts) Element L25 (1.58480 / 58.71)<br>[FUJIFILM FUJINON GF30mmF5.6 T/S](../../src/lens-data/fujifilm/FujifilmGF30mmf56TS.data.ts) Element L31 (1.58480 / 58.71) |
| 672472 | 3 | 1 | patents/US2084309.pdf | No reviewed-sidecar hit | [CARL ZEISS Jena Biogon 3.5 cm f/2.8 (pre-war)](../../src/lens-data/carl-zeiss-jena/ZeissBiogon35mmf28Prewar.data.ts) Element 1 (1.67160 / 47.20)<br>[CARL ZEISS Jena Biogon 3.5 cm f/2.8 (pre-war)](../../src/lens-data/carl-zeiss-jena/ZeissBiogon35mmf28Prewar.data.ts) Element 2 (1.67160 / 47.20)<br>[CARL ZEISS Jena Biogon 3.5 cm f/2.8 (pre-war)](../../src/lens-data/carl-zeiss-jena/ZeissBiogon35mmf28Prewar.data.ts) Element 6 (1.67160 / 47.20) |
| 863248 | 3 | 1 | patents/JP2023039817A.pdf | All representative rows reviewed | [SONY FE 70-200mm F2.8 GM OSS II](../../src/lens-data/sony/SonyFE70200mmf28GMII.data.ts) Element 6 (1.86290 / 24.80)<br>[SONY FE 70-200mm F2.8 GM OSS II](../../src/lens-data/sony/SonyFE70200mmf28GMII.data.ts) Element 9 (1.86290 / 24.80)<br>[SONY FE 70-200mm F2.8 GM OSS II](../../src/lens-data/sony/SonyFE70200mmf28GMII.data.ts) Element 10 (1.86290 / 24.80) |
| 531559 | 2 | 2 | patents/US20200142167A1.pdf<br>patents/WO2021039813A1.pdf | All representative rows reviewed | [CANON RF 24-240mm F4-6.3 IS USM](../../src/lens-data/canon/CanonRF24240mmf463.data.ts) Element 14 (1.53110 / 55.90)<br>[Nikon AF-P DX NIKKOR 10-20mm f/4.5-5.6G VR](../../src/lens-data/nikon/NikonAFPDX1020mmf4556G.data.ts) L41 (1.53110 / 55.91) |
| 561453 | 2 | 2 | patents/US20020075570A1.pdf<br>patents/US3376091.pdf | 1/2 representative rows reviewed | [HASSELBLAD HC 150mm f/3.2](../../src/lens-data/hasselblad/HasselbladHC150mmf32.data.ts) Element 7 (1.56093 / 45.30)<br>[SCHNEIDER-KREUZNACH SUPER-ANGULON 75mm f/5.6](../../src/lens-data/schneider-kreuznach/SchneiderSuperAngulon75mmf56.data.ts) Element 4 (1.56138 / 45.30) |
| 807316 | 2 | 2 | patents/US4764000.pdf<br>patents/US4871239.pdf | All representative rows reviewed | [Minolta AF 100mm f/2.8 Macro](../../src/lens-data/minolta/MinoltaAF100mmf28Macro.data.ts) Element 7 (1.80741 / 31.59)<br>[Minolta AF 35-105mm f/3.5-4.5 New (v2)](../../src/lens-data/minolta/MinoltaAF35105mmf3545v2.data.ts) Element 10 (1.80741 / 31.59) |
| 870200 | 2 | 2 | patents/WO2023181666A1.pdf<br>patents/WO_2025239028_A1.pdf | All representative rows reviewed | [SONY FE 24-70mm f/2.8 GM II](../../src/lens-data/sony/SonyFE2470mmf28GMII.data.ts) Element 1 (1.86966 / 20.00)<br>[SONY FE 85mm F1.4 GM II](../../src/lens-data/sony/SonyFE85mmf14GMII.data.ts) Element 14 (1.86966 / 20.00) |
| 933209 | 2 | 2 | patents/WO2021199923A1.pdf<br>patents/JP2023039817A.pdf | All representative rows reviewed | [Sony FE 14mm f/1.8 GM](../../src/lens-data/sony/SonyFE14mmf18GM.data.ts) High-index relay positive (1.93323 / 20.90)<br>[SONY FE 70-200mm F2.8 GM OSS II](../../src/lens-data/sony/SonyFE70200mmf28GMII.data.ts) Element 13 (1.93323 / 20.90) |
| 493836 | 2 | 1 | Missing from untracked local patents/ references (US4786152, 4786152) | No reviewed-sidecar hit | [Minolta AF APO Tele 200mm f/2.8](../../src/lens-data/minolta/MinoltaAF200mmf28.data.ts) Element 1 (1.49310 / 83.55)<br>[Minolta AF APO Tele 200mm f/2.8](../../src/lens-data/minolta/MinoltaAF200mmf28.data.ts) Element 2 (1.49310 / 83.55) |
| 514428 | 2 | 1 | patents/JP2016021011A.pdf | All representative rows reviewed | [Nikon AF-S NIKKOR 20mm f/1.8G ED](../../src/lens-data/nikon/NikonNikkorAFS20mmf18G.data.ts) LS cement layer (1.51400 / 42.80)<br>[Nikon AF-S NIKKOR 20mm f/1.8G ED](../../src/lens-data/nikon/NikonNikkorAFS20mmf18G.data.ts) Rear doublet cement layer (1.51400 / 42.80) |
| 585594 | 2 | 1 | patents/JP2023039817A.pdf | All representative rows reviewed | [SONY FE 70-200mm F2.8 GM OSS II](../../src/lens-data/sony/SonyFE70200mmf28GMII.data.ts) Element 11 (1.58547 / 59.40)<br>[SONY FE 70-200mm F2.8 GM OSS II](../../src/lens-data/sony/SonyFE70200mmf28GMII.data.ts) Element 12 (1.58547 / 59.40) |
| 586609 | 2 | 1 | patents/US7301711.pdf | No reviewed-sidecar hit | [PENTAX-DA★ 16-50mm f/2.8 ED AL[IF] SDM](../../src/lens-data/pentax/PentaxDA1650mmf28.data.ts) Element 10 (1.58636 / 60.90)<br>[PENTAX-DA★ 16-50mm f/2.8 ED AL[IF] SDM](../../src/lens-data/pentax/PentaxDA1650mmf28.data.ts) Element 15 (1.58636 / 60.90) |
| 666356 | 2 | 1 | patents/US20190265441A1.pdf | All representative rows reviewed | [CANON RF 50mm f/1.2 L USM](../../src/lens-data/canon/CanonRF50mmf12L.data.ts) Element 5 (1.66565 / 35.64)<br>[CANON RF 50mm f/1.2 L USM](../../src/lens-data/canon/CanonRF50mmf12L.data.ts) Element 10 (1.66565 / 35.64) |
| 755516 | 2 | 1 | patents/JP2004109559A.pdf | All representative rows reviewed | [Minolta AF 70-200mm f/2.8 APO G (D) SSM](../../src/lens-data/minolta/MinoltaAF70200mmf28APO.data.ts) Element 6 (1.75450 / 51.57)<br>[Minolta AF 70-200mm f/2.8 APO G (D) SSM](../../src/lens-data/minolta/MinoltaAF70200mmf28APO.data.ts) Element 10 (1.75450 / 51.57) |
| 774492 | 2 | 1 | patents/US3748022.pdf | All representative rows reviewed | [CANON FD 35mm f/2 S.S.C. (I)](../../src/lens-data/canon/CanonFD35mmf2.data.ts) Element 5 (1.77370 / 49.20)<br>[CANON FD 35mm f/2 S.S.C. (I)](../../src/lens-data/canon/CanonFD35mmf2.data.ts) Element 8 (1.77370 / 49.20) |
| 813252 | 2 | 1 | patents/US3591257.pdf | No reviewed-sidecar hit | [LEICA ELMARIT-R 28mm f/2.8](../../src/lens-data/leica/LeicaElmarit28mmf28.data.ts) Element 4 (1.81265 / 25.24)<br>[LEICA ELMARIT-R 28mm f/2.8](../../src/lens-data/leica/LeicaElmarit28mmf28.data.ts) Element 7 (1.81265 / 25.24) |
| 856401 | 2 | 1 | patents/WO_2025263124_A1.pdf | All representative rows reviewed | [SONY FE 28-70mm F2 GM](../../src/lens-data/sony/SonyFE2870mmf2GM.data.ts) Element 8 (1.85612 / 40.10)<br>[SONY FE 28-70mm F2 GM](../../src/lens-data/sony/SonyFE2870mmf2GM.data.ts) Element 15 (1.85612 / 40.10) |
| 487698 | 1 | 1 | patents/US3838911.pdf | All representative rows reviewed | [OLYMPUS E.ZUIKO AUTO-T 135mm f/3.5](../../src/lens-data/olympus/OlympusZuiko135mmf35.data.ts) Element 2 (1.48749 / 69.80) |
| 504667 | 1 | 1 | patents/US2721499.pdf | All representative rows reviewed | [CARL ZEISS BIOGON 21mm f/4.5](../../src/lens-data/carl-zeiss-oberkochen/ZeissBiogon21mmf45.data.ts) Element 1 (1.50380 / 66.70) |

## Sweep 2B - Named Tokens Missing Catalog Resolution

These unresolved catalog-style labels are often better first catalog targets than already-reviewed proprietary six-digit rows.

| Token | Elements | Lens files | localPatentStatus | Representative rows |
|---|---:|---:|---|---|
| S-NPH7 | 4 | 4 | patents/US20230213745A1.pdf<br>patents/US20190265441A1.pdf<br>patents/JP2021179551A.pdf<br>patents/WO_2025263124_A1.pdf | [CANON RF 135mm f/1.8 L IS USM](../../src/lens-data/canon/CanonRF135f18.data.ts) Element 14 (2.00069 / 25.50; abbe)<br>[CANON RF 50mm f/1.2 L USM](../../src/lens-data/canon/CanonRF50mmf12L.data.ts) Element 3 (2.00100 / 29.13; abbe)<br>[PANASONIC LUMIX S 20–60mm F3.5–5.6](../../src/lens-data/panasonic/PanasonicLumixS2060mmf3556.data.ts) Element 11 (1.92286 / 20.90; abbe) |
| S-TIF6 | 3 | 3 | patents/US20150212302A1.pdf<br>patents/US20200049962A1.pdf<br>patents/JP2012003015A.pdf | [FUJIFILM FUJINON XF 56mm F1.2 R](../../src/lens-data/fujifilm/FujifilmXF56mmf12.data.ts) Element 9 (1.66680 / 33.00; abbe)<br>[NIKON AF-S NIKKOR 80-400mm f/4.5-5.6G ED VR](../../src/lens-data/nikon/NikonNikkorAFS80400mmf4556G.data.ts) Element 18 (1.64769 / 33.70; abbe)<br>[RICOH GR LENS A12 28mm f/2.5](../../src/lens-data/ricoh/RicohGXRA1218mmf25.data.ts) Element 6 (1.67270 / 32.20; abbe) |
| BACD4 | 2 | 2 | patents/US3552833.pdf<br>patents/US3524697.pdf | [Leica Macro-Elmarit-R 60mm f/2.8](../../src/lens-data/leica/LeicaMacroElmaritR60mmf28.data.ts) Element 6 (1.61521 / 58.40; abbe)<br>[Nikon Fisheye-Nikkor 6mm f/5.6](../../src/lens-data/nikon/NikonFisheyeNikkor6mmf56.data.ts) Patent L1 (1.61272 / 58.60; abbe) |
| BSC3 | 2 | 2 | patents/JP2015111192A.pdf<br>patents/US3622227.pdf | [CANON EF-S 24mm f/2.8 STM](../../src/lens-data/canon/CanonEFS24mmf28STM.data.ts) Element 6 (1.58313 / 59.40; abbe)<br>[NIKON NIKKOR-N Auto 24mm f/2.8](../../src/lens-data/nikon/NikonNikkorAuto24f28.data.ts) Element 5 (1.51823 / 59.00; abbe) |
| E-FD13 | 2 | 2 | patents/US3507556.pdf<br>patents/JP2017167327A.pdf | [Nikon Reflex-Nikkor 1000mm f/11](../../src/lens-data/nikon/NikonReflexNikkor1000mmf11.data.ts) Rear positive flint (1.74077 / 27.70; abbe)<br>[Panasonic LEICA DG SUMMILUX 12mm F1.4 ASPH.](../../src/lens-data/panasonic/PanasonicDGSummilux12mmf14.data.ts) Element 8 (1.74077 / 27.76; lineIndices) |
| H-LAF3 | 2 | 2 | patents/CN205427291U.pdf<br>patents/JPWO2020157904A1.pdf | [LAOWA 15mm f/4 Wide Angle 1:1 Macro](../../src/lens-data/laowa/Laowa15mmf4Macro.data.ts) Element 7b (1.80420 / 46.50; abbe)<br>[NIKON NIKKOR Z 24-200mm f/4-6.3 VR](../../src/lens-data/nikon/NikonNikkorZ24200mmf463VR.data.ts) Element 18 (1.82080 / 42.51; abbe) |
| N-BAF4 | 2 | 2 | patents/JPWO2020157904A1.pdf | [CARL ZEISS Distagon T* 28mm f/2](../../src/lens-data/carl-zeiss-oberkochen/ZeissDistagon28mmf2.data.ts) Negative doublet rear element (1.60562 / 43.92; abbe)<br>[NIKON NIKKOR Z 24-200mm f/4-6.3 VR](../../src/lens-data/nikon/NikonNikkorZ24200mmf463VR.data.ts) Element 10 (1.57957 / 53.74; abbe) |
| N-BAK4 | 2 | 2 | patents/CH_314381_A.pdf<br>patents/US5243468.pdf | [Leica Elmar-M 135mm f/4](../../src/lens-data/leica/LeicaElmarM135mmf4.data.ts) Element 1 (1.57125 / 55.80; abbe)<br>[NIKON NIKKOR 35mm f/2.8 (35Ti)](../../src/lens-data/nikon/Nikon35Ti35mmf28.data.ts) Element 6 (1.56883 / 56.00; abbe) |
| N-LAK9 | 2 | 2 | patents/US3038380.pdf<br>patents/FR_1471493_A.pdf | [CARL ZEISS B-Distagon 35mm f/4 (Contarex)](../../src/lens-data/carl-zeiss-oberkochen/ZeissDistagon35mmf4.data.ts) LVII (1.69067 / 54.90; abbe)<br>[Leica Elmarit-R 35mm f/2.8](../../src/lens-data/leica/LeicaElmaritR35mmf28.data.ts) Element 7 (1.69400 / 54.60; abbe) |
| N-LASF44 | 2 | 2 | patents/WO2024195273A1.pdf<br>patents/JP2014145954A.pdf | [FUJIFILM FUJINON GF30mmF5.6 T/S](../../src/lens-data/fujifilm/FujifilmGF30mmf56TS.data.ts) Element L32 (1.80420 / 46.50; abbe)<br>[Sigma 60mm F2.8 DN | Art](../../src/lens-data/sigma/Sigma60mmf28DN.data.ts) Element 1 (1.80420 / 46.50; abbe) |
| NBFD10 | 2 | 2 | patents/JP2004302170A.pdf<br>patents/JP2012063403A.pdf | [HASSELBLAD HC MACRO 4/120](../../src/lens-data/hasselblad/HasselbladHC120mmf4Macro.data.ts) Element 8 (1.80440 / 39.60; abbe)<br>[SIGMA APO MACRO 150mm F2.8 EX DG OS HSM](../../src/lens-data/sigma/SigmaAPOMacro150mmf28OSHSM.data.ts) Element 19 (1.83400 / 37.35; lineIndices) |
| S-BAH10 | 2 | 2 | patents/US3748022.pdf | [CANON FD 35mm f/2 S.S.C. (I)](../../src/lens-data/canon/CanonFD35mmf2.data.ts) Element 3 (1.70154 / 41.10; abbe)<br>[ZEISS Touit Makro-Planar T* 50mm f/2.8 Macro](../../src/lens-data/carl-zeiss-oberkochen/ZeissTouit50mmf28Macro.data.ts) L63 (1.67003 / 47.23; abbe) |
| S-FPM5 | 2 | 2 | patents/CN_120386081_A.pdf<br>patents/WO_2025263124_A1.pdf | [SIGMA 28-45mm F1.8 DG DN | Art](../../src/lens-data/sigma/Sigma2845mmf18DN.data.ts) Element 2 (1.55200 / 70.70; abbe)<br>[SONY FE 28-70mm F2 GM](../../src/lens-data/sony/SonyFE2870mmf2GM.data.ts) Element 17 (1.59456 / 66.90; abbe) |
| S-LAL61 | 2 | 2 | patents/JP2017227799A.pdf | [NIKON AF-S NIKKOR 28mm f/1.4E ED](../../src/lens-data/nikon/NikonAFS28f14E.data.ts) Element 8 (1.69680 / 55.50; abbe)<br>[Nikon AF-S DX NIKKOR 55-300mm f/4.5-5.6G ED VR](../../src/lens-data/nikon/NikonAFSDX55300mmf4556G.data.ts) L21 (1.74100 / 52.67; abbe) |
| S-NBH53 | 2 | 2 | patents/US20160274335A1.pdf<br>patents/US20110273780A1.pdf | [FUJIFILM FUJINON XF 90mm f/2 R LM WR](../../src/lens-data/fujifilm/FujifilmXF90mmf2.data.ts) Element 4 (1.74950 / 35.33; abbe)<br>[Sony E 18-55mm f/3.5-5.6 OSS](../../src/lens-data/sony/SonyE1855mmf3556.data.ts) Element 3 (1.91082 / 35.25; abbe) |
| SF5 | 2 | 2 | patents/US3108152.pdf<br>patents/JP_2002090622_A.pdf | [Leica Elmarit-M 135mm f/2.8](../../src/lens-data/leica/LeicaElmaritM135mmf28.data.ts) Element 4 (1.67764 / 32.00; abbe)<br>[VOIGTLÄNDER MACRO APO-LANTHAR 125mm f/2.5 SL](../../src/lens-data/voigtlander/VoigtlanderMacroApoLanthar125mmf25.data.ts) Element 4 (1.67270 / 32.20; abbe) |
| SF56A | 2 | 2 | patents/US3507558.pdf<br>patents/US3736049.pdf | [Nikon AI Nikkor 35mm f/2](../../src/lens-data/nikon/NikonAINikkor35mmf2.data.ts) Element 5 (1.78470 / 26.10; abbe)<br>[NIKON NIKKOR-N AUTO 28mm f/2](../../src/lens-data/nikon/NikonNikkorN28mmf2.data.ts) Element 7 (1.78470 / 26.10; abbe) |
| TAF1 | 2 | 2 | patents/JP2012063403A.pdf<br>patents/US10191254.pdf | [SIGMA APO MACRO 150mm F2.8 EX DG OS HSM](../../src/lens-data/sigma/SigmaAPOMacro150mmf28OSHSM.data.ts) Element 5 (1.77250 / 49.62; lineIndices)<br>[Sony FE 28mm F2](../../src/lens-data/sony/SonyFE28mmf2.data.ts) Element 5 (1.77250 / 49.50; abbe) |
| E-FDS3HT | 2 | 1 | patents/WO2022097401A1.pdf | [NIKON NIKKOR Z MC 105mm f/2.8 VR S](../../src/lens-data/nikon/NikonZ105f28.data.ts) Element 7 (1.94595 / 17.98; abbe)<br>[NIKON NIKKOR Z MC 105mm f/2.8 VR S](../../src/lens-data/nikon/NikonZ105f28.data.ts) Element 13 (1.94595 / 17.98; abbe) |
| H-ZLAF4A | 2 | 1 | patents/CN210573001U.pdf | [Laowa 24mm f/14 2× Macro Probe](../../src/lens-data/laowa/Laowa24mmf14Probe.data.ts) Element 1 (1.83481 / 42.72; abbe)<br>[Laowa 24mm f/14 2× Macro Probe](../../src/lens-data/laowa/Laowa24mmf14Probe.data.ts) Element 27 (1.83481 / 42.72; abbe) |
| K-LAFK50 | 2 | 1 | patents/US20150192839A1.pdf | [Panasonic Leica DG Nocticron 42.5mm f/1.2 ASPH Power O.I.S.](../../src/lens-data/panasonic/PanasonicDGNocticron42mmf12.data.ts) Element 8 (1.77010 / 49.70; lineIndices)<br>[Panasonic Leica DG Nocticron 42.5mm f/1.2 ASPH Power O.I.S.](../../src/lens-data/panasonic/PanasonicDGNocticron42mmf12.data.ts) Element 11 (1.77010 / 49.70; lineIndices) |
| N-LAF2 | 2 | 1 | Missing from untracked local patents/ references (DE2359156A1, DE2359156, 2359156) | [CARL ZEISS Distagon T* 28mm f/2](../../src/lens-data/carl-zeiss-oberkochen/ZeissDistagon28mmf2.data.ts) Pre-stop negative meniscus (1.74400 / 44.77; abbe)<br>[CARL ZEISS Distagon T* 28mm f/2](../../src/lens-data/carl-zeiss-oberkochen/ZeissDistagon28mmf2.data.ts) Positive doublet front element (1.74400 / 44.77; abbe) |
| S-APL1 | 2 | 1 | patents/US3850509.pdf | [OLYMPUS OM Zuiko 16mm f/3.5 Fisheye](../../src/lens-data/olympus/OlympusZuiko16mmf35.data.ts) Element 8 (1.51728 / 69.60; abbe)<br>[OLYMPUS OM Zuiko 16mm f/3.5 Fisheye](../../src/lens-data/olympus/OlympusZuiko16mmf35.data.ts) Element 10 (1.51728 / 69.60; abbe) |
| S-BSM15 | 2 | 1 | Missing from untracked local patents/ references (US20070058265A1, US20070058265, 20070058265) | [CANON EF-S 18-55mm f/3.5-5.6 IS](../../src/lens-data/canon/CanonEFS1855mmf3556IS.data.ts) Element 2 (1.62299 / 58.20; abbe)<br>[CANON EF-S 18-55mm f/3.5-5.6 IS](../../src/lens-data/canon/CanonEFS1855mmf3556IS.data.ts) Element 3 (1.62299 / 58.20; abbe) |
| S-LAM73 | 2 | 1 | patents/WO_2025263124_A1.pdf | [SONY FE 28-70mm F2 GM](../../src/lens-data/sony/SonyFE2870mmf2GM.data.ts) Element 16 (1.85659 / 40.10; abbe)<br>[SONY FE 28-70mm F2 GM](../../src/lens-data/sony/SonyFE2870mmf2GM.data.ts) Element 20 (1.85659 / 40.10; abbe) |

## Sweep 3 - Proprietary Line-Index Backfill

Use local untracked patents first. Populate patent-listed `nC`, `nF`, `ng`, and `dPgF` when Sellmeier data is unavailable.

| Lens | Patent reference | Elements | localPatentPath | localPatentStatus | Notes |
|---|---|---|---|---|---|

