# Glass Relabel Candidates (auto-generated)

Companion to [catalog-mismatches.generated.md](catalog-mismatches.generated.md). For each rejected
catalog mismatch, this report searches the catalog for a *better* candidate whose nd AND vd
both match the stored values within tolerance (nd ±0.005, vd ±3).

**Regenerate** with `npm test -- glassRelabelCandidatesScan`.

## How to use this report

- **One candidate, vd matches closely**: high-confidence relabel target.
  Edit the `glass:` string in the lens-data file to the candidate name.
- **Multiple candidates**: choose by family hint in the original annotation
  (e.g. an `S-LAH...` annotation with three S-LAH candidates picks the closest LAH).
  When ΔPgF is shown, prefer the candidate with the smallest |ΔPgF| — partial
  dispersion distinguishes glasses that tie on (nd, vd).
- **Embedded code in annotation** (e.g. `(903/313)`): when present, candidates are
  ranked by code distance — the code is independent ground truth.
- **No candidate**: relabel as `Unmatched (...reason)` and add a row to
  [glass-relabel-followup.md](glass-relabel-followup.md) for per-lens patent verification.

**Scope**: 236 mismatched surfaces across 182 unique groups.

## stored (nd=1.43700, vd=95.10)  — 2 surfaces, current label resolves to S-FPM2

Candidates:
- **FCD100** (nd=1.43700, vd=95.10, Δnd=+0.0000, Δvd=+0.00)
- **S-FPL55** (nd=1.43875, vd=94.66, Δnd=+0.0017, Δvd=-0.44)
- **S-FPL53** (nd=1.43875, vd=94.95, Δnd=+0.0018, Δvd=-0.15)
- **CaF2** (nd=1.43385, vd=95.10, Δnd=-0.0032, Δvd=+0.00)

Surfaces:
- [SONY FE 24-70mm f/2.8 GM II](../src/lens-data/sony/SonyFE2470mmf28GMII.data.ts) `18`: `S-FPM2 (OHARA)`
- [SONY FE 24-70mm f/2.8 GM II](../src/lens-data/sony/SonyFE2470mmf28GMII.data.ts) `25`: `S-FPM2 (OHARA)`

## stored (nd=1.51742, vd=52.40)  — 2 surfaces, current label resolves to S-NSL5

Candidates:
- **E-CF6** (nd=1.51742, vd=52.15, Δnd=-0.0000, Δvd=-0.25)
- **S-NSL36** (nd=1.51742, vd=52.43, Δnd=-0.0000, Δvd=+0.03)

Surfaces:
- [CANON EF 50mm f/1.0L USM](../src/lens-data/canon/CanonEF50mmf1L.data.ts) `5A`: `S-NSL5 (OHARA)`
- [CANON EF 50mm f/1.0L USM](../src/lens-data/canon/CanonEF50mmf1L.data.ts) `8`: `S-NSL5 (OHARA)`

## stored (nd=1.51742, vd=48.80)  — 1 surface, current label resolves to S-TIL27

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [FUJIFILM FUJINON XF 60mmF2.4 R Macro](../src/lens-data/fujifilm/FujifilmXF60mmf24R.data.ts) `9`: `S-TIL27 (OHARA) — probable (νd corrected to ≈52.2; see header note)`

## stored (nd=1.53172, vd=48.80)  — 2 surfaces, current label resolves to S-TIL27

Candidates:
- **S-TIL6** (nd=1.53172, vd=48.84, Δnd=-0.0000, Δvd=+0.04)

Surfaces:
- [CANON EF 100mm f/2.8L Macro IS USM](../src/lens-data/canon/CanonEF100mmf28LMacroIS.data.ts) `11`: `S-TIL27 (OHARA)`
- [CANON EF 40mm f/2.8 STM](../src/lens-data/canon/CanonEF40mmf28.data.ts) `2`: `S-TIL25 (OHARA)`

## stored (nd=1.53172, vd=49.10)  — 1 surface, current label resolves to S-NSL3

Candidates:
- **S-TIL6** (nd=1.53172, vd=48.84, Δnd=-0.0000, Δvd=-0.26)

Surfaces:
- [NIKON NIKKOR 28mm f/2.8 (28Ti)](../src/lens-data/nikon/Nikon28Ti28mmf28.data.ts) `1`: `S-NSL3 (OHARA)`

## stored (nd=1.53380, vd=55.60)  — 1 surface, current label resolves to S-BSL7

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [PANASONIC LEICA DG SUMMILUX 9mm F1.7 ASPH](../src/lens-data/panasonic/PanasonicLeicaDG9mmf17.data.ts) `3A`: `L-BSL7 (OHARA)`

## stored (nd=1.53775, vd=74.70)  — 1 surface, current label resolves to S-FPM2

Candidates:
- **S-FPM3** (nd=1.53775, vd=74.70, Δnd=+0.0000, Δvd=+0.00)

Surfaces:
- [HASSELBLAD XCD 2,8/65](../src/lens-data/hasselblad/HasselbladXCD65mmf28.data.ts) `11`: `S-FPM2 (OHARA)`

## stored (nd=1.54814, vd=45.79)  — 2 surfaces, current label resolves to S-BAL14

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON PC-E NIKKOR 24mm f/3.5D ED](../src/lens-data/nikon/NikonPCENikkor24mmf35DED.data.ts) `13`: `S-BAL14 (OHARA)`
- [NIKON PC-E NIKKOR 24mm f/3.5D ED](../src/lens-data/nikon/NikonPCENikkor24mmf35DED.data.ts) `17`: `S-BAL14 (OHARA)`

## stored (nd=1.54814, vd=45.80)  — 1 surface, current label resolves to S-TIL2

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [VOIGTLÄNDER NOKTON 35mm f/1.2 Aspherical](../src/lens-data/voigtlander/VoigtlanderNokton35mmf12.data.ts) `17`: `S-TIL2 (OHARA)`

## stored (nd=1.55298, vd=55.10)  — 1 surface, current label resolves to S-TIL25

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR Z 50mm f/1.2 S](../src/lens-data/nikon/NikonNikkorZ50f12.data.ts) `5`: `S-TIL25 (OHARA)`

## stored (nd=1.55332, vd=71.70)  — 1 surface, current label resolves to S-FPM3

Candidates:
- **M-FCD500** (nd=1.55332, vd=71.68, Δnd=-0.0000, Δvd=-0.02)

Surfaces:
- [LEICA APO-SUMMICRON 43mm f/2 ASPH. (Q3 43)](../src/lens-data/leica/LeicaAPO43mmf2.data.ts) `16A`: `S-FPM3 / L-FPM3 (OHARA)`

## stored (nd=1.55389, vd=38.09)  — 1 surface, current label resolves to S-TIM25

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON AF-S NIKKOR 14-24mm f/2.8G ED](../src/lens-data/nikon/NikonNikkorAFS1424mmf28.data.ts) `6`: `S-TIM25 (OHARA)`

## stored (nd=1.56732, vd=42.80)  — 2 surfaces, current label resolves to S-BAL42

Candidates:
- **S-TIL26** (nd=1.56732, vd=42.82, Δnd=+0.0000, Δvd=+0.02)

Surfaces:
- [LEICA SUMMILUX 28 mm f/1.7 ASPH. (Q, Q2, Q3)](../src/lens-data/leica/Leica28mmf17.data.ts) `1`: `S-BAL42 (OHARA)`
- [VOIGTLÄNDER NOKTON 35mm f/1.2 Aspherical](../src/lens-data/voigtlander/VoigtlanderNokton35mmf12.data.ts) `3`: `S-BAM4 (OHARA)`

## stored (nd=1.56865, vd=58.60)  — 1 surface, current label resolves to K-VC89

Candidates:
- **S-BAL14** (nd=1.56883, vd=56.36, Δnd=+0.0002, Δvd=-2.24)
- **N-SK11** (nd=1.56384, vd=60.80, Δnd=-0.0048, Δvd=+2.20)

Surfaces:
- [FUJIFILM FUJINON 23mm f/2 (X100)](../src/lens-data/fujifilm/FujifilmX10023mmf2.data.ts) `10A`: `K-VC89 (Sumita)`

## stored (nd=1.57099, vd=50.80)  — 1 surface, current label resolves to S-BAL42

Candidates:
- **S-BAL2** (nd=1.57099, vd=50.80, Δnd=-0.0000, Δvd=-0.00)

Surfaces:
- [NIKON AF-S NIKKOR 14-24mm f/2.8G ED](../src/lens-data/nikon/NikonNikkorAFS1424mmf28.data.ts) `20`: `S-BAL42 (OHARA)`

## stored (nd=1.58140, vd=40.80) [code=581/408]  — 1 surface, current label resolves to S-TIM25

Candidates:
- **PBL25** (nd=1.58144, vd=40.75, Δnd=+0.0000, Δvd=-0.05, codeΔ=0.9)
- **S-TIL25** (nd=1.58144, vd=40.75, Δnd=+0.0000, Δvd=-0.05, codeΔ=1.0)
- **E-FL5** (nd=1.58144, vd=40.89, Δnd=+0.0000, Δvd=+0.09, codeΔ=1.3)

Surfaces:
- [OLYMPUS G.ZUIKO AUTO-S 50mm f/1.4](../src/lens-data/olympus/OlympusZuikoAutoS50mmf14.data.ts) `5`: `BaF-type (581-408; OHARA S-TIM25 family — close)`

## stored (nd=1.58144, vd=40.75)  — 1 surface, current label resolves to S-TIH14

Candidates:
- **E-FL5** (nd=1.58144, vd=40.89, Δnd=-0.0000, Δvd=+0.14)
- **PBL25** (nd=1.58144, vd=40.75, Δnd=-0.0000, Δvd=+0.00)
- **S-TIL25** (nd=1.58144, vd=40.75, Δnd=-0.0000, Δvd=-0.00)

Surfaces:
- [NIKON PC-E NIKKOR 24mm f/3.5D ED](../src/lens-data/nikon/NikonPCENikkor24mmf35DED.data.ts) `9`: `S-TIH14 (OHARA)`

## stored (nd=1.58144, vd=40.89)  — 1 surface, current label resolves to S-TIM2

Candidates:
- **E-FL5** (nd=1.58144, vd=40.89, Δnd=-0.0000, Δvd=+0.00)
- **PBL25** (nd=1.58144, vd=40.75, Δnd=-0.0000, Δvd=-0.14)
- **S-TIL25** (nd=1.58144, vd=40.75, Δnd=-0.0000, Δvd=-0.14)

Surfaces:
- [SIGMA 30mm f/2.8 (DP2 Merrill)](../src/lens-data/sigma/SigmaDp2M30mmf28.data.ts) `10`: `S-TIM2 (OHARA)`

## stored (nd=1.58144, vd=40.90)  — 1 surface, current label resolves to S-TIM2

Candidates:
- **E-FL5** (nd=1.58144, vd=40.89, Δnd=-0.0000, Δvd=-0.01)
- **PBL25** (nd=1.58144, vd=40.75, Δnd=-0.0000, Δvd=-0.15)
- **S-TIL25** (nd=1.58144, vd=40.75, Δnd=-0.0000, Δvd=-0.15)

Surfaces:
- [SONY SONNAR T* FE 55mm F1.8 ZA](../src/lens-data/sony/SonyFE55mmf18ZA.data.ts) `1`: `S-TIM2 (OHARA)`

## stored (nd=1.58267, vd=46.43)  — 1 surface, current label resolves to S-TIM22

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON AF-S VR Micro-NIKKOR 105mm f/2.8G IF-ED](../src/lens-data/nikon/NikonAFS105f28G.data.ts) `9`: `S-TIM22 (OHARA)`

## stored (nd=1.58313, vd=59.38)  — 1 surface, current label resolves to S-BAL35

Candidates:
- **S-BAL42** (nd=1.58313, vd=59.37, Δnd=-0.0000, Δvd=-0.01)
- **Q-SK52S** (nd=1.58286, vd=59.51, Δnd=-0.0003, Δvd=+0.13)

Surfaces:
- [SONY FE 135mm F1.8 GM](../src/lens-data/sony/SonyFE135mmf18GM.data.ts) `9A`: `S-BAL35 (OHARA)`

## stored (nd=1.58542, vd=41.70) [code=585/417]  — 1 surface, current label resolves to S-TIM2

Candidates:
- **E-FL5** (nd=1.58144, vd=40.89, Δnd=-0.0040, Δvd=-0.81, codeΔ=11.7)
- **PBL25** (nd=1.58144, vd=40.75, Δnd=-0.0040, Δvd=-0.95, codeΔ=13.0)
- **S-TIL25** (nd=1.58144, vd=40.75, Δnd=-0.0040, Δvd=-0.95, codeΔ=13.1)

Surfaces:
- [PANASONIC LEICA DG SUMMILUX 15mm f/1.7 ASPH](../src/lens-data/panasonic/PanasonicLeicaDG15mmf17.data.ts) `3A`: `S-TIM2 class (585/417, OHARA family)`

## stored (nd=1.58900, vd=61.25)  — 1 surface, current label resolves to S-BAL2

Candidates:
- **S-BAL35** (nd=1.58913, vd=61.14, Δnd=+0.0001, Δvd=-0.11)
- **N-SK5** (nd=1.58913, vd=61.27, Δnd=+0.0001, Δvd=+0.02)

Surfaces:
- [SONY SONNAR T* E 24mm F1.8 ZA](../src/lens-data/sony/SonyFE24mmf18ZA.data.ts) `3`: `S-BAL2 (OHARA)`

## stored (nd=1.58913, vd=61.30)  — 1 surface, current label resolves to S-BAL14

Candidates:
- **S-BAL35** (nd=1.58913, vd=61.14, Δnd=-0.0000, Δvd=-0.16)
- **N-SK5** (nd=1.58913, vd=61.27, Δnd=+0.0000, Δvd=-0.03)

Surfaces:
- [VOIGTLÄNDER MACRO APO-LANTHAR 125mm f/2.5 SL](../src/lens-data/voigtlander/VoigtlanderMacroApoLanthar125mmf25.data.ts) `12`: `S-BAL14 (OHARA) / K-BAL14 (Sumita)`

## stored (nd=1.59270, vd=35.30)  — 1 surface, current label resolves to S-TIM2

Candidates:
- **S-FTM16** (nd=1.59270, vd=35.31, Δnd=+0.0000, Δvd=+0.01)

Surfaces:
- [NIKON NIKKOR Z 26mm f/2.8](../src/lens-data/nikon/NikonZ26f28.data.ts) `4`: `S-TIM2 (OHARA)`

## stored (nd=1.59270, vd=35.40)  — 1 surface, current label resolves to S-TIM35

Candidates:
- **S-FTM16** (nd=1.59270, vd=35.31, Δnd=+0.0000, Δvd=-0.09)

Surfaces:
- [PANASONIC LEICA DG SUMMILUX 9mm F1.7 ASPH](../src/lens-data/panasonic/PanasonicLeicaDG9mmf17.data.ts) `8`: `S-TIM35 (OHARA)`

## stored (nd=1.59270, vd=35.50) [code=593/355]  — 1 surface, current label resolves to E-FD5

Candidates:
- **S-FTM16** (nd=1.59270, vd=35.31, Δnd=-0.0000, Δvd=-0.19, codeΔ=2.2)

Surfaces:
- [SONY PLANAR T* 50mm F1.4 ZA SSM](../src/lens-data/sony/SonyPlanarT50mmf14ZA.data.ts) `3`: `E-FD5 class (HOYA/HIKARI equivalent, 593/355)`

## stored (nd=1.59319, vd=67.90)  — 3 surfaces, current label resolves to S-FPM3

Candidates:
- **J-PSKH1** (nd=1.59319, vd=67.90, Δnd=+0.0000, Δvd=+0.00)
- **J-PSKH4** (nd=1.59349, vd=67.00, Δnd=+0.0003, Δvd=-0.90)
- **FCD505** (nd=1.59283, vd=68.63, Δnd=-0.0004, Δvd=+0.73)
- **FCD515** (nd=1.59282, vd=68.63, Δnd=-0.0004, Δvd=+0.73)
- **K-GFK68** (nd=1.59240, vd=68.30, Δnd=-0.0008, Δvd=+0.40)

Surfaces:
- [NIKON NIKKOR Z MC 105mm f/2.8 VR S](../src/lens-data/nikon/NikonZ105f28.data.ts) `4`: `S-FPM3 (OHARA)`
- [NIKON NIKKOR Z MC 105mm f/2.8 VR S](../src/lens-data/nikon/NikonZ105f28.data.ts) `6`: `S-FPM3 (OHARA)`
- [NIKON NIKKOR Z MC 105mm f/2.8 VR S](../src/lens-data/nikon/NikonZ105f28.data.ts) `17`: `S-FPM3 (OHARA)`

## stored (nd=1.59349, vd=67.00)  — 1 surface, current label resolves to S-PHM52

Candidates:
- **J-PSKH4** (nd=1.59349, vd=67.00, Δnd=+0.0000, Δvd=+0.00)
- **J-PSKH1** (nd=1.59319, vd=67.90, Δnd=-0.0003, Δvd=+0.90)
- **FCD505** (nd=1.59283, vd=68.63, Δnd=-0.0007, Δvd=+1.63)
- **FCD515** (nd=1.59282, vd=68.63, Δnd=-0.0007, Δvd=+1.63)
- **K-GFK68** (nd=1.59240, vd=68.30, Δnd=-0.0011, Δvd=+1.30)

Surfaces:
- [PANASONIC LEICA DG SUMMILUX 9mm F1.7 ASPH](../src/lens-data/panasonic/PanasonicLeicaDG9mmf17.data.ts) `7`: `S-PHM52 (OHARA)`

## stored (nd=1.59551, vd=39.24)  — 1 surface, current label resolves to S-TIM3

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [HASSELBLAD XCD 2,8/65](../src/lens-data/hasselblad/HasselbladXCD65mmf28.data.ts) `8`: `S-TIM3 (OHARA)`

## stored (nd=1.60342, vd=38.00)  — 1 surface, current label resolves to S-TIM2

Candidates:
- **S-TIM5** (nd=1.60342, vd=38.03, Δnd=-0.0000, Δvd=+0.03)
- **F5** (nd=1.60342, vd=38.03, Δnd=+0.0000, Δvd=+0.03)

Surfaces:
- [HASSELBLAD HC 80mm f/2.8](../src/lens-data/hasselblad/HasselbladHC80mmf28.data.ts) `5`: `S-TIM2 (OHARA)`

## stored (nd=1.60342, vd=38.03)  — 1 surface, current label resolves to S-TIM2

Candidates:
- **S-TIM5** (nd=1.60342, vd=38.03, Δnd=-0.0000, Δvd=+0.00)
- **F5** (nd=1.60342, vd=38.03, Δnd=+0.0000, Δvd=+0.00)

Surfaces:
- [NIKON NIKKOR Z DX 18-140mm f/3.5-6.3 VR](../src/lens-data/nikon/NikonZDX18140mmf3563VR.data.ts) `18`: `S-TIM2 (OHARA)`

## stored (nd=1.61293, vd=37.00)  — 1 surface, current label resolves to S-TIM28

Candidates:
- **S-TIM3** (nd=1.61293, vd=37.01, Δnd=-0.0000, Δvd=+0.01)

Surfaces:
- [FUJIFILM FUJINON XF 23mm F1.4 R](../src/lens-data/fujifilm/FujifilmXF23mmf14.data.ts) `3`: `S-TIM28 (OHARA)`

## stored (nd=1.61800, vd=63.40)  — 2 surfaces, current label resolves to S-PHM53

Candidates:
- **S-PHM52** (nd=1.61800, vd=63.33, Δnd=-0.0000, Δvd=-0.07)

Surfaces:
- [SONY SONNAR T* E 24mm F1.8 ZA](../src/lens-data/sony/SonyFE24mmf18ZA.data.ts) `9`: `PCD4 (Hoya) / S-PHM53 (OHARA)`
- [SONY SONNAR T* E 24mm F1.8 ZA](../src/lens-data/sony/SonyFE24mmf18ZA.data.ts) `15`: `PCD4 (Hoya) / S-PHM53 (OHARA)`

## stored (nd=1.62040, vd=60.30)  — 2 surfaces, current label resolves to N-SK14

Candidates:
- **N-SK16** (nd=1.62041, vd=60.32, Δnd=+0.0000, Δvd=+0.02)
- **S-BSM16** (nd=1.62041, vd=60.29, Δnd=+0.0000, Δvd=-0.01)
- **BACD15** (nd=1.62299, vd=58.12, Δnd=+0.0026, Δvd=-2.18)

Surfaces:
- [CANON SERENAR 28mm f/3.5](../src/lens-data/canon/CanonSerenar28mmf35.data.ts) `7`: `SK14 (Schott)`
- [CANON SERENAR 28mm f/3.5](../src/lens-data/canon/CanonSerenar28mmf35.data.ts) `9`: `SK14 (Schott)`

## stored (nd=1.62041, vd=60.29)  — 1 surface, current label resolves to S-LAL59

Candidates:
- **N-SK16** (nd=1.62041, vd=60.32, Δnd=-0.0000, Δvd=+0.03)
- **S-BSM16** (nd=1.62041, vd=60.29, Δnd=+0.0000, Δvd=-0.00)
- **BACD15** (nd=1.62299, vd=58.12, Δnd=+0.0026, Δvd=-2.17)

Surfaces:
- [NIKON AF-S VR Micro-NIKKOR 105mm f/2.8G IF-ED](../src/lens-data/nikon/NikonAFS105f28G.data.ts) `19`: `S-LAL59 (OHARA)`

## stored (nd=1.62374, vd=47.04)  — 1 surface, current label resolves to S-BSM81

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON AF-S NIKKOR 14-24mm f/2.8G ED](../src/lens-data/nikon/NikonNikkorAFS1424mmf28.data.ts) `13`: `S-BSM81 (OHARA)`

## stored (nd=1.62588, vd=35.74)  — 1 surface, current label resolves to S-TIM35

Candidates:
- **E-F1** (nd=1.62588, vd=35.74, Δnd=-0.0000, Δvd=+0.00)

Surfaces:
- [SIGMA 40mm F1.4 DG HSM | Art](../src/lens-data/sigma/SigmaArt40mmf14.data.ts) `24`: `S-TIM35 (OHARA)`

## stored (nd=1.63000, vd=34.57)  — 1 surface, current label resolves to NBFD11

Candidates:
- **E-F1** (nd=1.62588, vd=35.74, Δnd=-0.0041, Δvd=+1.17)

Surfaces:
- [SONY SONNAR T* FE 35mm F2.8 ZA](../src/lens-data/sony/SonyFE35mmf28ZA.data.ts) `10`: `NBFD11 (Hoya)`

## stored (nd=1.63854, vd=55.40) [code=639/554]  — 1 surface, current label resolves to S-BSL7

Candidates:
- **S-BSM18** (nd=1.63854, vd=55.38, Δnd=-0.0000, Δvd=-0.02, codeΔ=0.7)

Surfaces:
- [CANON RF 24-50mm F4.5-6.3 IS STM](../src/lens-data/canon/CanonRF2450mmf463.data.ts) `1`: `S-BSL7 (OHARA 639/554)`

## stored (nd=1.63854, vd=55.38)  — 1 surface, current label resolves to S-BAM4

Candidates:
- **S-BSM18** (nd=1.63854, vd=55.38, Δnd=-0.0000, Δvd=+0.00)

Surfaces:
- [FUJIFILM FUJINON XF 90mm f/2 R LM WR](../src/lens-data/fujifilm/FujifilmXF90mmf2.data.ts) `10`: `S-BAM4 (OHARA)`

## stored (nd=1.63980, vd=34.50)  — 1 surface, current label resolves to S-NBH52

Candidates:
- **S-TIM27** (nd=1.63980, vd=34.47, Δnd=-0.0000, Δvd=-0.03)

Surfaces:
- [HASSELBLAD HC 3.5/50](../src/lens-data/hasselblad/HasselbladHC50mmf4.data.ts) `14`: `S-NBH52 (OHARA)`

## stored (nd=1.64000, vd=60.20)  — 1 surface, current label resolves to S-BSM71

Candidates:
- **S-BSM81** (nd=1.64000, vd=60.08, Δnd=-0.0000, Δvd=-0.12)

Surfaces:
- [VIVITAR SERIES 1 70–210mm f/2.8–4 VMC](../src/lens-data/vivitar/VivitarSeries170210mmf284.data.ts) `9`: `S-BSM71 (Ohara)`

## stored (nd=1.64769, vd=33.80)  — 2 surfaces, current label resolves to S-TIH53

Candidates:
- **E-FD2** (nd=1.64769, vd=33.84, Δnd=-0.0000, Δvd=+0.04)
- **SF2** (nd=1.64769, vd=33.85, Δnd=-0.0000, Δvd=+0.05)
- **S-TIM22** (nd=1.64769, vd=33.79, Δnd=-0.0000, Δvd=-0.01)

Surfaces:
- [NIKON AF-S NIKKOR 85mm f/1.4G](../src/lens-data/nikon/NikonNikkor85f14G.data.ts) `17`: `S-TIH53 (OHARA)`
- [PENTAX-DA★ 16-50mm f/2.8 ED AL[IF] SDM](../src/lens-data/pentax/PentaxDA1650mmf28.data.ts) `11`: `S-TIM27 (OHARA)`

## stored (nd=1.64769, vd=33.84)  — 2 surfaces, current label resolves to E-FD15

Candidates:
- **E-FD2** (nd=1.64769, vd=33.84, Δnd=-0.0000, Δvd=+0.00)
- **SF2** (nd=1.64769, vd=33.85, Δnd=-0.0000, Δvd=+0.01)
- **S-TIM22** (nd=1.64769, vd=33.79, Δnd=-0.0000, Δvd=-0.05)

Surfaces:
- [SIGMA 40mm F1.4 DG HSM | Art](../src/lens-data/sigma/SigmaArt40mmf14.data.ts) `7`: `E-FD15 (HOYA)`
- [SIGMA 40mm F1.4 DG HSM | Art](../src/lens-data/sigma/SigmaArt40mmf14.data.ts) `22`: `E-FD15 (HOYA)`

## stored (nd=1.64831, vd=33.80)  — 2 surfaces, current label resolves to E-FD4

Candidates:
- **E-FD2** (nd=1.64769, vd=33.84, Δnd=-0.0006, Δvd=+0.04)
- **SF2** (nd=1.64769, vd=33.85, Δnd=-0.0006, Δvd=+0.05)
- **S-TIM22** (nd=1.64769, vd=33.79, Δnd=-0.0006, Δvd=-0.01)

Surfaces:
- [NIKON NIKKOR 28mm f/2.8 (28Ti)](../src/lens-data/nikon/Nikon28Ti28mmf28.data.ts) `4`: `E-FD4 (HOYA)`
- [NIKON NIKKOR-S AUTO 50mm f/1.4](../src/lens-data/nikon/NikonNikkorSAuto50mmf14.data.ts) `4`: `SF4 / PBM5 (dense flint)`

## stored (nd=1.65160, vd=58.52)  — 1 surface, current label resolves to S-BSL7

Candidates:
- **N-LAK22** (nd=1.65113, vd=55.89, Δnd=-0.0005, Δvd=-2.63)

Surfaces:
- [OLYMPUS ZUIKO AUTO-MACRO 90mm f/2](../src/lens-data/olympus/OlympusZuikoAutoMacro90mmf2.data.ts) `17`: `BSC7 (HOYA)`

## stored (nd=1.65412, vd=39.68)  — 1 surface, current label resolves to S-TIL27

Candidates:
- **N-KZFS5** (nd=1.65412, vd=39.70, Δnd=+0.0000, Δvd=+0.02)
- **S-NBH5** (nd=1.65412, vd=39.68, Δnd=-0.0000, Δvd=+0.00)

Surfaces:
- [CANON RF 50mm f/1.2 L USM](../src/lens-data/canon/CanonRF50mmf12L.data.ts) `6`: `S-TIL27 (OHARA)`

## stored (nd=1.65803, vd=39.70)  — 1 surface, current label resolves to S-TIM22

Candidates:
- **N-KZFS5** (nd=1.65412, vd=39.70, Δnd=-0.0039, Δvd=+0.00)
- **S-NBH5** (nd=1.65412, vd=39.68, Δnd=-0.0039, Δvd=-0.02)

Surfaces:
- [SONY FE 70-200mm F2.8 GM OSS II](../src/lens-data/sony/SonyFE70200mmf28GMII.data.ts) `25`: `S-TIM22 (OHARA) — titanium flint`

## stored (nd=1.65840, vd=50.85)  — 1 surface, current label resolves to S-BAH27

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [SONY FE 90 mm F2.8 Macro G OSS](../src/lens-data/sony/SonyFE90mmf28.data.ts) `24`: `S-BAH27 (OHARA)`

## stored (nd=1.65844, vd=50.90)  — 1 surface, current label resolves to S-LAL8

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [CANON RF 135mm f/1.8 L IS USM](../src/lens-data/canon/CanonRF135f18.data.ts) `26`: `S-LAL8 (OHARA)`

## stored (nd=1.66446, vd=35.90)  — 1 surface, current label resolves to SF2

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR-S AUTO 50mm f/1.4](../src/lens-data/nikon/NikonNikkorSAuto50mmf14.data.ts) `1`: `SF2 / NSL36 (dense flint)`

## stored (nd=1.66446, vd=35.80)  — 1 surface, current label resolves to S-TIM22

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [PENTAX-110 50mm f/2.8](../src/lens-data/pentax/Pentax11050mmf28.data.ts) `9`: `S-TIM22 (OHARA)`

## stored (nd=1.67246, vd=32.30) [code=672/323]  — 1 surface, current label resolves to SF2

Candidates:
- **E-FD5** (nd=1.67270, vd=32.17, Δnd=+0.0002, Δvd=-0.13, codeΔ=2.0)
- **S-TIM25** (nd=1.67270, vd=32.10, Δnd=+0.0002, Δvd=-0.20, codeΔ=2.7)

Surfaces:
- [CARL ZEISS JENA PANCOLAR 50mm f/2](../src/lens-data/carl-zeiss-jena/CarlZeissJenaPancolar50mmf2.data.ts) `4`: `SF2 equivalent (Jena in-house, 672/323)`

## stored (nd=1.67270, vd=32.10)  — 1 surface, current label resolves to S-TIM22

Candidates:
- **S-TIM25** (nd=1.67270, vd=32.10, Δnd=-0.0000, Δvd=-0.00)
- **E-FD5** (nd=1.67270, vd=32.17, Δnd=-0.0000, Δvd=+0.07)

Surfaces:
- [FUJIFILM FUJINON XF 90mm f/2 R LM WR](../src/lens-data/fujifilm/FujifilmXF90mmf2.data.ts) `15`: `S-TIM22 (OHARA)`

## stored (nd=1.67270, vd=32.20)  — 1 surface, current label resolves to E-FD4

Candidates:
- **S-TIM25** (nd=1.67270, vd=32.10, Δnd=-0.0000, Δvd=-0.10)
- **E-FD5** (nd=1.67270, vd=32.17, Δnd=-0.0000, Δvd=-0.03)

Surfaces:
- [HASSELBLAD HC MACRO 4/120](../src/lens-data/hasselblad/HasselbladHC120mmf4Macro.data.ts) `8`: `E-FD4 (HOYA)`

## stored (nd=1.67270, vd=32.17)  — 1 surface, current label resolves to S-TIM35

Candidates:
- **S-TIM25** (nd=1.67270, vd=32.10, Δnd=-0.0000, Δvd=-0.07)
- **E-FD5** (nd=1.67270, vd=32.17, Δnd=-0.0000, Δvd=+0.00)

Surfaces:
- [SONY FE 90 mm F2.8 Macro G OSS](../src/lens-data/sony/SonyFE90mmf28.data.ts) `20`: `S-TIM35 (OHARA)`

## stored (nd=1.67790, vd=55.50)  — 1 surface, current label resolves to N-SK16

Candidates:
- **LAC12** (nd=1.67790, vd=55.52, Δnd=+0.0000, Δvd=+0.02)

Surfaces:
- [NIKON NIKKOR-S AUTO 50mm f/1.4](../src/lens-data/nikon/NikonNikkorSAuto50mmf14.data.ts) `9`: `SK16 / BSL7 (barium crown)`

## stored (nd=1.67790, vd=55.33)  — 1 surface, current label resolves to E-CF6

Candidates:
- **LAC12** (nd=1.67790, vd=55.52, Δnd=+0.0000, Δvd=+0.19)

Surfaces:
- [OLYMPUS ZUIKO AUTO-S 50mm f/1.2](../src/lens-data/olympus/OlympusZuikoAutoS50mmf12.data.ts) `8`: `E-CF6 (HOYA)`

## stored (nd=1.68000, vd=31.16)  — 1 surface, current label resolves to S-TIM28

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [SONY SONNAR T* FE 35mm F2.8 ZA](../src/lens-data/sony/SonyFE35mmf28ZA.data.ts) `12A`: `S-TIM28 (OHARA)`

## stored (nd=1.68893, vd=31.10)  — 1 surface, current label resolves to S-TIM25

Candidates:
- **E-FD8** (nd=1.68893, vd=31.16, Δnd=-0.0000, Δvd=+0.06)
- **S-TIM28** (nd=1.68893, vd=31.08, Δnd=+0.0000, Δvd=-0.02)

Surfaces:
- [FUJIFILM FUJINON XF 23mm F1.4 R](../src/lens-data/fujifilm/FujifilmXF23mmf14.data.ts) `16`: `S-TIM25 (OHARA)`

## stored (nd=1.68893, vd=31.16)  — 1 surface, current label resolves to S-TIH4

Candidates:
- **E-FD8** (nd=1.68893, vd=31.16, Δnd=-0.0000, Δvd=+0.00)
- **S-TIM28** (nd=1.68893, vd=31.08, Δnd=+0.0000, Δvd=-0.08)

Surfaces:
- [NIKON AF-S NIKKOR 58mm f/1.4G](../src/lens-data/nikon/Nikon58f14GDesignCandidate.data.ts) `6`: `S-TIH4 / N-SF8 (dense flint)`

## stored (nd=1.68893, vd=31.20)  — 2 surfaces, current label resolves to S-TIH18

Candidates:
- **E-FD8** (nd=1.68893, vd=31.16, Δnd=-0.0000, Δvd=-0.04)
- **S-TIM28** (nd=1.68893, vd=31.08, Δnd=+0.0000, Δvd=-0.12)

Surfaces:
- [NIKON AF-S NIKKOR 28mm f/1.4E ED](../src/lens-data/nikon/NikonAFS28f14E.data.ts) `1`: `S-TIH18 (OHARA)`
- [RICOH GR 28mm f/2.8](../src/lens-data/ricoh/RicohGR28f28.data.ts) `4`: `S-TIM35 (OHARA) / FD110 (HOYA)`

## stored (nd=1.69350, vd=53.20)  — 1 surface, current label resolves to S-LAL8

Candidates:
- **S-LAL13** (nd=1.69350, vd=53.21, Δnd=+0.0000, Δvd=+0.01)
- **LAC13** (nd=1.69350, vd=53.34, Δnd=+0.0000, Δvd=+0.14)
- **S-LAL9** (nd=1.69100, vd=54.82, Δnd=-0.0025, Δvd=+1.62)
- **S-LAL14** (nd=1.69680, vd=55.53, Δnd=+0.0033, Δvd=+2.33)
- **N-LAK14** (nd=1.69680, vd=55.41, Δnd=+0.0033, Δvd=+2.21)

Surfaces:
- [NIKON AF-S NIKKOR 28mm f/1.4E ED](../src/lens-data/nikon/NikonAFS28f14E.data.ts) `26A`: `S-LAL8 (OHARA)`

## stored (nd=1.69680, vd=55.50)  — 1 surface, current label resolves to S-BAL42

Candidates:
- **N-LAK14** (nd=1.69680, vd=55.41, Δnd=+0.0000, Δvd=-0.09)
- **S-LAL14** (nd=1.69680, vd=55.53, Δnd=-0.0000, Δvd=+0.03)
- **LAC13** (nd=1.69350, vd=53.34, Δnd=-0.0033, Δvd=-2.16)
- **S-LAL13** (nd=1.69350, vd=53.21, Δnd=-0.0033, Δvd=-2.29)

Surfaces:
- [CANON EF-S 24mm f/2.8 STM](../src/lens-data/canon/CanonEFS24mmf28STM.data.ts) `5`: `S-BAL42 (OHARA)`

## stored (nd=1.69680, vd=55.60)  — 1 surface, current label resolves to N-SK16

Candidates:
- **N-LAK14** (nd=1.69680, vd=55.41, Δnd=+0.0000, Δvd=-0.19)
- **S-LAL14** (nd=1.69680, vd=55.53, Δnd=-0.0000, Δvd=-0.07)
- **LAC13** (nd=1.69350, vd=53.34, Δnd=-0.0033, Δvd=-2.26)
- **S-LAL13** (nd=1.69350, vd=53.21, Δnd=-0.0033, Δvd=-2.39)

Surfaces:
- [NIKON NIKKOR 35mm f/2.8 (35Ti)](../src/lens-data/nikon/Nikon35Ti35mmf28.data.ts) `1`: `Hoya BACD5 (nd=1.69680 / νd=55.5; Δnd≈0, Δνd=+0.1)`

## stored (nd=1.69700, vd=55.46)  — 1 surface, current label resolves to N-SK2

Candidates:
- **N-LAK14** (nd=1.69680, vd=55.41, Δnd=-0.0002, Δvd=-0.05)
- **S-LAL14** (nd=1.69680, vd=55.53, Δnd=-0.0002, Δvd=+0.07)
- **LAC13** (nd=1.69350, vd=53.34, Δnd=-0.0035, Δvd=-2.12)
- **S-LAL13** (nd=1.69350, vd=53.21, Δnd=-0.0035, Δvd=-2.25)

Surfaces:
- [SONY SONNAR T* E 24mm F1.8 ZA](../src/lens-data/sony/SonyFE24mmf18ZA.data.ts) `13`: `TAC4 (Hoya) / N-SK2 (Schott)`

## stored (nd=1.69895, vd=30.13)  — 3 surfaces, current label resolves to S-TIH53

Candidates:
- **E-FD15** (nd=1.69895, vd=30.05, Δnd=-0.0000, Δvd=-0.08)
- **S-TIM35** (nd=1.69895, vd=30.13, Δnd=-0.0000, Δvd=-0.00)

Surfaces:
- [FUJIFILM FUJINON 18.5 mm f/2.8 (X70)](../src/lens-data/fujifilm/FujifilmX7018mmf28.data.ts) `5`: `S-TIH53 (OHARA)`
- [HASSELBLAD XCD 2,8/65](../src/lens-data/hasselblad/HasselbladXCD65mmf28.data.ts) `14`: `S-TIM22 (OHARA)`
- [NIKON NIKKOR Z 58mm f/0.95 S Noct](../src/lens-data/nikon/NikonZ58f095SNoct.data.ts) `24`: `Dense flint (near S-NBH52V)`

## stored (nd=1.69895, vd=30.10)  — 2 surfaces, current label resolves to S-TIH18

Candidates:
- **E-FD15** (nd=1.69895, vd=30.05, Δnd=-0.0000, Δvd=-0.05)
- **S-TIM35** (nd=1.69895, vd=30.13, Δnd=-0.0000, Δvd=+0.03)

Surfaces:
- [NIKON AF-S NIKKOR 85mm f/1.4G](../src/lens-data/nikon/NikonNikkor85f14G.data.ts) `10`: `S-TIH18 (OHARA)`
- [NIKON NIKKOR-S AUTO 50mm f/1.4](../src/lens-data/nikon/NikonNikkorSAuto50mmf14.data.ts) `6`: `SF6 / PBM6 (dense flint)`

## stored (nd=1.69895, vd=30.05)  — 1 surface, current label resolves to S-TIM28

Candidates:
- **E-FD15** (nd=1.69895, vd=30.05, Δnd=-0.0000, Δvd=+0.00)
- **S-TIM35** (nd=1.69895, vd=30.13, Δnd=-0.0000, Δvd=+0.08)

Surfaces:
- [SIGMA 30mm f/2.8 (DP2 Merrill)](../src/lens-data/sigma/SigmaDp2M30mmf28.data.ts) `5`: `S-TIM28 (OHARA)`

## stored (nd=1.70154, vd=41.17)  — 1 surface, current label resolves to S-LAM54

Candidates:
- **S-BAH27** (nd=1.70154, vd=41.24, Δnd=-0.0000, Δvd=+0.07)

Surfaces:
- [NIKON AF-S NIKKOR 16-35mm f/4G ED VR](../src/lens-data/nikon/NikonNikkorAFS1635mmf4.data.ts) `16`: `S-LAM54 (OHARA)`

## stored (nd=1.71300, vd=53.90)  — 2 surfaces, current label resolves to S-LAL13

Candidates:
- **N-LAK8** (nd=1.71300, vd=53.83, Δnd=+0.0000, Δvd=-0.07)
- **S-LAL8** (nd=1.71299, vd=53.87, Δnd=-0.0000, Δvd=-0.03)

Surfaces:
- [FUJIFILM FUJINON XF 23mm F1.4 R](../src/lens-data/fujifilm/FujifilmXF23mmf14.data.ts) `10`: `S-LAL13 (OHARA)`
- [PENTAX-DA★ 16-50mm f/2.8 ED AL[IF] SDM](../src/lens-data/pentax/PentaxDA1650mmf28.data.ts) `2`: `S-BAL42 (OHARA)`

## stored (nd=1.71300, vd=53.87)  — 1 surface, current label resolves to S-LAM60

Candidates:
- **N-LAK8** (nd=1.71300, vd=53.83, Δnd=+0.0000, Δvd=-0.04)
- **S-LAL8** (nd=1.71299, vd=53.87, Δnd=-0.0000, Δvd=+0.00)

Surfaces:
- [FUJIFILM FUJINON XF 90mm f/2 R LM WR](../src/lens-data/fujifilm/FujifilmXF90mmf2.data.ts) `17`: `S-LAM60 (OHARA)`

## stored (nd=1.71700, vd=48.10) [code=717/481]  — 1 surface, current label resolves to NBFD3

Candidates:
- **S-LAM3** (nd=1.71700, vd=47.93, Δnd=+0.0000, Δvd=-0.17, codeΔ=1.7)
- **S-LAL10** (nd=1.72000, vd=50.23, Δnd=+0.0030, Δvd=+2.13, codeΔ=24.3)
- **J-LAK10** (nd=1.71999, vd=50.27, Δnd=+0.0030, Δvd=+2.17, codeΔ=24.7)

Surfaces:
- [NIKON AI Nikkor 135mm f/2](../src/lens-data/nikon/NikonAI135mmf2.data.ts) `1`: `HOYA NBFD3 (717/481)`

## stored (nd=1.71735, vd=29.50)  — 1 surface, current label resolves to S-TIM27

Candidates:
- **SF1** (nd=1.71736, vd=29.51, Δnd=+0.0000, Δvd=+0.01)
- **S-TIH18** (nd=1.72151, vd=29.23, Δnd=+0.0042, Δvd=-0.27)

Surfaces:
- [SONY PLANAR T* FE 50mm F1.4 ZA](../src/lens-data/sony/SonyPlanarFE50mmf14ZA.data.ts) `6`: `S-TIM27 (OHARA)`

## stored (nd=1.71736, vd=29.51)  — 1 surface, current label resolves to TAFD25

Candidates:
- **SF1** (nd=1.71736, vd=29.51, Δnd=-0.0000, Δvd=+0.00)
- **S-TIH18** (nd=1.72151, vd=29.23, Δnd=+0.0041, Δvd=-0.28)

Surfaces:
- [FUJIFILM FUJINON 23mm f/2 (X100V)](../src/lens-data/fujifilm/FujifilmX100V23mmf2.data.ts) `1`: `TAFD25 (HOYA)`

## stored (nd=1.71736, vd=29.52)  — 1 surface, current label resolves to S-TIH13

Candidates:
- **SF1** (nd=1.71736, vd=29.51, Δnd=-0.0000, Δvd=-0.01)
- **S-TIH18** (nd=1.72151, vd=29.23, Δnd=+0.0041, Δvd=-0.29)

Surfaces:
- [NIKON AF-S VR Micro-NIKKOR 105mm f/2.8G IF-ED](../src/lens-data/nikon/NikonAFS105f28G.data.ts) `5`: `S-TIH13 (OHARA)`

## stored (nd=1.71736, vd=29.57)  — 1 surface, current label resolves to S-TIH23

Candidates:
- **SF1** (nd=1.71736, vd=29.51, Δnd=-0.0000, Δvd=-0.06)
- **S-TIH18** (nd=1.72151, vd=29.23, Δnd=+0.0041, Δvd=-0.34)

Surfaces:
- [NIKON NIKKOR Z 40mm f/2](../src/lens-data/nikon/NikonNikkorZ40mmf2.data.ts) `2`: `S-TIH23 (OHARA)`

## stored (nd=1.72047, vd=34.70)  — 2 surfaces, current label resolves to S-TIH11

Candidates:
- **N-KZFS8** (nd=1.72047, vd=34.70, Δnd=-0.0000, Δvd=+0.00)
- **S-NBH8** (nd=1.72047, vd=34.71, Δnd=-0.0000, Δvd=+0.01)

Surfaces:
- [CANON EF 100mm f/2.8L Macro IS USM](../src/lens-data/canon/CanonEF100mmf28LMacroIS.data.ts) `9`: `S-TIH11 (OHARA)`
- [CANON RF 85mm f/2 Macro IS STM](../src/lens-data/canon/CanonRF85mmf2Macro.data.ts) `13`: `S-TIH4 (OHARA)`

## stored (nd=1.72342, vd=38.00)  — 1 surface, current label resolves to E-FD5

Candidates:
- **S-BAH28** (nd=1.72342, vd=37.96, Δnd=-0.0000, Δvd=-0.04)

Surfaces:
- [HASSELBLAD HC MACRO 4/120](../src/lens-data/hasselblad/HasselbladHC120mmf4Macro.data.ts) `3`: `E-FD5 (HOYA)`

## stored (nd=1.72825, vd=28.50)  — 2 surfaces, current label resolves to S-TIH18

Candidates:
- **S-TIH10** (nd=1.72825, vd=28.46, Δnd=-0.0000, Δvd=-0.04)
- **SF10** (nd=1.72825, vd=28.41, Δnd=+0.0000, Δvd=-0.09)

Surfaces:
- [HASSELBLAD HC 80mm f/2.8](../src/lens-data/hasselblad/HasselbladHC80mmf28.data.ts) `7`: `S-TIH18 (OHARA)`
- [PENTAX-110 24mm f/2.8](../src/lens-data/pentax/Pentax11024mmf28.data.ts) `1`: `SF6 (Schott) / S-TIH6 (Ohara)`

## stored (nd=1.72825, vd=28.46)  — 1 surface, current label resolves to S-TIH11

Candidates:
- **S-TIH10** (nd=1.72825, vd=28.46, Δnd=-0.0000, Δvd=+0.00)
- **SF10** (nd=1.72825, vd=28.41, Δnd=+0.0000, Δvd=-0.05)

Surfaces:
- [NIKON AF-S NIKKOR 58mm f/1.4G](../src/lens-data/nikon/Nikon58f14GDesignCandidate.data.ts) `9`: `S-TIH11 / N-SF10 (dense flint)`

## stored (nd=1.72825, vd=28.30)  — 1 surface, current label resolves to S-TIH4

Candidates:
- **S-TIH10** (nd=1.72825, vd=28.46, Δnd=-0.0000, Δvd=+0.16)
- **SF10** (nd=1.72825, vd=28.41, Δnd=+0.0000, Δvd=+0.11)

Surfaces:
- [VOIGTLÄNDER APO-LANTHAR 180mm f/4 SL Close Focus](../src/lens-data/voigtlander/VoigtlanderApoLanthar180mmf4.data.ts) `11`: `S-TIH4 (OHARA)`

## stored (nd=1.72916, vd=54.70)  — 1 surface, current label resolves to S-LAH55V

Candidates:
- **S-LAL18** (nd=1.72916, vd=54.68, Δnd=-0.0000, Δvd=-0.02)

Surfaces:
- [HASSELBLAD XCD 2,5/90V](../src/lens-data/hasselblad/HasselbladXCD90mmf25V.data.ts) `1`: `S-LAH55V (OHARA)`

## stored (nd=1.72916, vd=54.70) [code=729/547]  — 1 surface, current label resolves to S-LAL8

Candidates:
- **S-LAL18** (nd=1.72916, vd=54.68, Δnd=-0.0000, Δvd=-0.02, codeΔ=0.4)

Surfaces:
- [PANASONIC LUMIX S 35mm F1.8](../src/lens-data/panasonic/PanasonicS35mmf18.data.ts) `8`: `H-LAK53A (CDGM) / S-LAL8 class (OHARA) — lanthanum crown, code 729/547`

## stored (nd=1.72916, vd=54.67)  — 1 surface, current label resolves to S-LAL14

Candidates:
- **S-LAL18** (nd=1.72916, vd=54.68, Δnd=-0.0000, Δvd=+0.01)

Surfaces:
- [SONY FE 135mm F1.8 GM](../src/lens-data/sony/SonyFE135mmf18GM.data.ts) `14`: `S-LAL14 (OHARA)`

## stored (nd=1.73077, vd=40.50)  — 1 surface, current label resolves to S-LAL8

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [PANASONIC LEICA DG SUMMILUX 25mm f/1.4 ASPH](../src/lens-data/panasonic/PanasonicLeicaDG25mmf14.data.ts) `14A`: `S-LAL8 (OHARA)`

## stored (nd=1.73800, vd=32.30)  — 2 surfaces, current label resolves to S-TIH14

Candidates:
- **J-KZFH9** (nd=1.73800, vd=32.26, Δnd=+0.0000, Δvd=-0.04)
- **S-NBH53V** (nd=1.73800, vd=32.33, Δnd=-0.0000, Δvd=+0.03)

Surfaces:
- [NIKON AF-S NIKKOR 28mm f/1.4E ED](../src/lens-data/nikon/NikonAFS28f14E.data.ts) `18`: `S-TIH14 (OHARA)`
- [NIKON NIKKOR Z 50mm f/1.2 S](../src/lens-data/nikon/NikonNikkorZ50f12.data.ts) `16`: `S-NBH52V (OHARA)`

## stored (nd=1.74000, vd=28.20)  — 1 surface, current label resolves to NBFD3

Candidates:
- **S-TIH13** (nd=1.74077, vd=27.79, Δnd=+0.0008, Δvd=-0.41)

Surfaces:
- [CANON SERENAR 50mm f/1.8](../src/lens-data/canon/CanonSerenar50mmf18.data.ts) `4`: `NBFD3 (HOYA)`

## stored (nd=1.74077, vd=27.80)  — 2 surfaces, current label resolves to S-NBH55

Candidates:
- **S-TIH13** (nd=1.74077, vd=27.79, Δnd=-0.0000, Δvd=-0.01)

Surfaces:
- [LEICA SUMMILUX 28 mm f/1.7 ASPH. (Q, Q2, Q3)](../src/lens-data/leica/Leica28mmf17.data.ts) `15`: `S-NBH55 (OHARA)`
- [PENTAX-110 50mm f/2.8](../src/lens-data/pentax/Pentax11050mmf28.data.ts) `7`: `S-TIH11 (OHARA)`

## stored (nd=1.74077, vd=27.74)  — 1 surface, current label resolves to S-TIH14

Candidates:
- **S-TIH13** (nd=1.74077, vd=27.79, Δnd=-0.0000, Δvd=+0.05)

Surfaces:
- [VOIGTLÄNDER NOKTON 50mm f/1.2 X-Mount](../src/lens-data/voigtlander/VoigtlanderNoktonX50mmf12.data.ts) `7`: `S-TIH14 (OHARA)`

## stored (nd=1.74100, vd=52.67)  — 1 surface, current label resolves to S-LAH53

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON AF-S NIKKOR 14-24mm f/2.8G ED](../src/lens-data/nikon/NikonNikkorAFS1424mmf28.data.ts) `5`: `S-LAH53 (OHARA)`

## stored (nd=1.74100, vd=52.60)  — 1 surface, current label resolves to S-LAM3

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR Z 100-400mm f/4.5-5.6 VR S](../src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts) `13`: `S-LAM3 (OHARA)`

## stored (nd=1.74180, vd=49.23)  — 1 surface, current label resolves to S-LAM55

Candidates:
- **S-LAM60** (nd=1.74320, vd=49.34, Δnd=+0.0014, Δvd=+0.11)

Surfaces:
- [SIGMA DP2X 24mm f/2.8](../src/lens-data/sigma/SigmaDP2X24mmf28.data.ts) `11`: `S-LAM55 (≈) / LACL60 (OHARA / HOYA)`

## stored (nd=1.74320, vd=49.30)  — 1 surface, current label resolves to S-LAM66

Candidates:
- **S-LAM60** (nd=1.74320, vd=49.34, Δnd=-0.0000, Δvd=+0.04)

Surfaces:
- [CANON EF 100mm f/2.8L Macro IS USM](../src/lens-data/canon/CanonEF100mmf28LMacroIS.data.ts) `28`: `S-LAM66 (OHARA)`

## stored (nd=1.74330, vd=49.30)  — 1 surface, current label resolves to S-LAL14

Candidates:
- **S-LAM60** (nd=1.74320, vd=49.34, Δnd=-0.0001, Δvd=+0.04)

Surfaces:
- [HASSELBLAD HC 80mm f/2.8](../src/lens-data/hasselblad/HasselbladHC80mmf28.data.ts) `11`: `S-LAL14 (OHARA)`

## stored (nd=1.74400, vd=44.80) [code=744/448]  — 1 surface, current label resolves to S-LAL14

Candidates:
- **S-LAM2** (nd=1.74400, vd=44.79, Δnd=-0.0000, Δvd=-0.01, codeΔ=0.1)

Surfaces:
- [CANON RF 28-70mm F2.8 IS STM](../src/lens-data/canon/CanonRF2870mmf28.data.ts) `26`: `744448 — S-LAL14 family (OHARA)`

## stored (nd=1.74710, vd=27.40)  — 1 surface, current label resolves to SF4

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [LEICA ELCAN 50mm f/2](../src/lens-data/leica/LeicaElcan50mmf2.data.ts) `5`: `≈SF4 (dense flint)`

## stored (nd=1.74810, vd=52.30)  — 1 surface, current label resolves to S-LAM66

Candidates:
- **S-LAM60** (nd=1.74320, vd=49.34, Δnd=-0.0049, Δvd=-2.96)

Surfaces:
- [NIKON AF NIKKOR 85mm f/1.4D IF](../src/lens-data/nikon/Nikon85f14D.data.ts) `19`: `Lanthanum Crown (S-LAM66)`

## stored (nd=1.75409, vd=26.00) [code=754/260]  — 1 surface, current label resolves to S-NPH5

Candidates:
- **S-TIH4** (nd=1.75520, vd=27.51, Δnd=+0.0011, Δvd=+1.51, codeΔ=16.3)
- **E-FD4** (nd=1.75520, vd=27.53, Δnd=+0.0011, Δvd=+1.53, codeΔ=16.5)
- **SF4** (nd=1.75520, vd=27.58, Δnd=+0.0011, Δvd=+1.58, codeΔ=17.0)

Surfaces:
- [PANASONIC LEICA DG SUMMILUX 15mm f/1.7 ASPH](../src/lens-data/panasonic/PanasonicLeicaDG15mmf17.data.ts) `6`: `S-NPH5 class (754/260, OHARA family)`

## stored (nd=1.75500, vd=52.34)  — 1 surface, current label resolves to S-LAL14

Candidates:
- **J-LASKH2** (nd=1.75500, vd=52.34, Δnd=+0.0000, Δvd=+0.00)
- **N-LAK33B** (nd=1.75500, vd=52.30, Δnd=+0.0000, Δvd=-0.04)
- **S-LAH97** (nd=1.75500, vd=52.32, Δnd=+0.0000, Δvd=-0.02)

Surfaces:
- [NIKON AF-S NIKKOR 58mm f/1.4G](../src/lens-data/nikon/Nikon58f14GDesignCandidate.data.ts) `3`: `S-LAL14 / N-LAK12 (lanthanum crown)`

## stored (nd=1.75500, vd=52.30)  — 2 surfaces, current label resolves to S-LAL14

Candidates:
- **J-LASKH2** (nd=1.75500, vd=52.34, Δnd=+0.0000, Δvd=+0.04)
- **N-LAK33B** (nd=1.75500, vd=52.30, Δnd=+0.0000, Δvd=+0.00)
- **S-LAH97** (nd=1.75500, vd=52.32, Δnd=+0.0000, Δvd=+0.02)

Surfaces:
- [NIKON NIKKOR Z 24-70mm f/4 S](../src/lens-data/nikon/NikonNikkorZ2470mmf4S.data.ts) `2`: `S-LAL14 (OHARA)`
- [NIKON NIKKOR Z 24-70mm f/4 S](../src/lens-data/nikon/NikonNikkorZ2470mmf4S.data.ts) `6`: `S-LAL14 (OHARA)`

## stored (nd=1.76182, vd=26.60)  — 1 surface, current label resolves to S-TIH6

Candidates:
- **S-TIH14** (nd=1.76182, vd=26.52, Δnd=+0.0000, Δvd=-0.08)

Surfaces:
- [LEICA APO-SUMMICRON 43mm f/2 ASPH. (Q3 43)](../src/lens-data/leica/LeicaAPO43mmf2.data.ts) `6`: `S-TIH6 (OHARA)`

## stored (nd=1.76182, vd=26.58)  — 1 surface, current label resolves to S-TIH18

Candidates:
- **S-TIH14** (nd=1.76182, vd=26.52, Δnd=+0.0000, Δvd=-0.06)

Surfaces:
- [VOIGTLÄNDER NOKTON 50mm f/1.2 X-Mount](../src/lens-data/voigtlander/VoigtlanderNoktonX50mmf12.data.ts) `9`: `S-TIH18 (OHARA)`

## stored (nd=1.76182, vd=26.61)  — 1 surface, current label resolves to E-FD15

Candidates:
- **S-TIH14** (nd=1.76182, vd=26.52, Δnd=+0.0000, Δvd=-0.09)

Surfaces:
- [VOIGTLÄNDER ULTRON Vintage Line 28mm F2 Aspherical](../src/lens-data/voigtlander/VoigtlanderUltron28f2.data.ts) `7`: `E-FD15 (HOYA) / N-SF14 (Schott)`

## stored (nd=1.76450, vd=49.10)  — 1 surface, current label resolves to S-NBH56

Candidates:
- **S-LAH96** (nd=1.76385, vd=48.49, Δnd=-0.0006, Δvd=-0.61)
- **MC-TAF101-100** (nd=1.76902, vd=49.29, Δnd=+0.0045, Δvd=+0.19)

Surfaces:
- [NIKON NIKKOR Z 50mm f/1.2 S](../src/lens-data/nikon/NikonNikkorZ50f12.data.ts) `25A`: `S-NBH56 (OHARA)`

## stored (nd=1.76500, vd=46.30)  — 1 surface, current label resolves to TAFD5F

Candidates:
- **S-LAH96** (nd=1.76385, vd=48.49, Δnd=-0.0011, Δvd=+2.19)
- **MC-TAF101-100** (nd=1.76902, vd=49.29, Δnd=+0.0040, Δvd=+2.99)

Surfaces:
- [MINOLTA MD ROKKOR 50mm f/1.4](../src/lens-data/minolta/MinoltaRokkor50mmf14MD.data.ts) `3`: `E-LAF7 / TAFD5F (HOYA)`

## stored (nd=1.76554, vd=46.76)  — 1 surface, current label resolves to TAFD5F

Candidates:
- **S-LAH96** (nd=1.76385, vd=48.49, Δnd=-0.0017, Δvd=+1.73)
- **MC-TAF101-100** (nd=1.76902, vd=49.29, Δnd=+0.0035, Δvd=+2.53)

Surfaces:
- [NIKON NIKKOR Z 58mm f/0.95 S Noct](../src/lens-data/nikon/NikonZ58f095SNoct.data.ts) `27`: `Lanthanum crown (no confirmed catalog match; near TAFD5F)`

## stored (nd=1.76690, vd=46.85)  — 1 surface, current label resolves to E-FD5

Candidates:
- **MC-TAF101-100** (nd=1.76902, vd=49.29, Δnd=+0.0021, Δvd=+2.44)
- **S-LAH96** (nd=1.76385, vd=48.49, Δnd=-0.0030, Δvd=+1.64)

Surfaces:
- [NIKON AF-S NIKKOR 16-35mm f/4G ED VR](../src/lens-data/nikon/NikonNikkorAFS1635mmf4.data.ts) `1A`: `LAM family (cf. HOYA E-FD5)`

## stored (nd=1.76864, vd=49.70)  — 1 surface, current label resolves to TAF5

Candidates:
- **MC-TAF101-100** (nd=1.76902, vd=49.29, Δnd=+0.0004, Δvd=-0.41)
- **S-LAH66** (nd=1.77250, vd=49.60, Δnd=+0.0039, Δvd=-0.10)
- **N-LAF34** (nd=1.77250, vd=49.62, Δnd=+0.0039, Δvd=-0.08)
- **S-LAH96** (nd=1.76385, vd=48.49, Δnd=-0.0048, Δvd=-1.21)

Surfaces:
- [PANASONIC LEICA DG SUMMILUX 15mm f/1.7 ASPH](../src/lens-data/panasonic/PanasonicLeicaDG15mmf17.data.ts) `12`: `TAF5 (HOYA)`

## stored (nd=1.77002, vd=49.40)  — 1 surface, current label resolves to S-LAH52

Candidates:
- **MC-TAF101-100** (nd=1.76902, vd=49.29, Δnd=-0.0010, Δvd=-0.11)
- **S-LAH66** (nd=1.77250, vd=49.60, Δnd=+0.0025, Δvd=+0.20)
- **N-LAF34** (nd=1.77250, vd=49.62, Δnd=+0.0025, Δvd=+0.22)

Surfaces:
- [SONY FE 24-70mm f/2.8 GM II](../src/lens-data/sony/SonyFE2470mmf28GMII.data.ts) `8A`: `S-LAH52 class (OHARA)`

## stored (nd=1.77047, vd=29.70) [code=770/297]  — 3 surfaces, current label resolves to S-TIH18

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [CANON RF 135mm f/1.8 L IS USM](../src/lens-data/canon/CanonRF135f18.data.ts) `6`: `770297 — S-TIH18 family (OHARA)`
- [CANON RF 135mm f/1.8 L IS USM](../src/lens-data/canon/CanonRF135f18.data.ts) `9`: `770297 — S-TIH18 family (OHARA)`
- [CANON RF 28-70mm F2.8 IS STM](../src/lens-data/canon/CanonRF2870mmf28.data.ts) `15`: `770297 — S-TIH18 family (OHARA)`

## stored (nd=1.77250, vd=49.60)  — 3 surfaces, current label resolves to TAFD30

Candidates:
- **N-LAF34** (nd=1.77250, vd=49.62, Δnd=+0.0000, Δvd=+0.02)
- **S-LAH66** (nd=1.77250, vd=49.60, Δnd=-0.0000, Δvd=-0.00)
- **MC-TAF101-100** (nd=1.76902, vd=49.29, Δnd=-0.0035, Δvd=-0.31)

Surfaces:
- [HASSELBLAD HC MACRO 4/120](../src/lens-data/hasselblad/HasselbladHC120mmf4Macro.data.ts) `10`: `TAFD30 (HOYA)`
- [OLYMPUS OM ZUIKO AUTO-W 21mm f/2](../src/lens-data/olympus/OlympusZuikoAuto21mmf2.data.ts) `5`: `LAC12 / LaK10 (OHARA / Schott)`
- [PENTAX-DA★ 16-50mm f/2.8 ED AL[IF] SDM](../src/lens-data/pentax/PentaxDA1650mmf28.data.ts) `4`: `S-LAH63Q (OHARA)`

## stored (nd=1.77250, vd=49.62)  — 1 surface, current label resolves to S-LAH51

Candidates:
- **N-LAF34** (nd=1.77250, vd=49.62, Δnd=+0.0000, Δvd=+0.00)
- **S-LAH66** (nd=1.77250, vd=49.60, Δnd=-0.0000, Δvd=-0.02)
- **MC-TAF101-100** (nd=1.76902, vd=49.29, Δnd=-0.0035, Δvd=-0.33)

Surfaces:
- [PANASONIC LEICA DG SUMMILUX 25mm f/1.4 ASPH](../src/lens-data/panasonic/PanasonicLeicaDG25mmf14.data.ts) `16A`: `S-LAH51 (OHARA)`

## stored (nd=1.77250, vd=49.47)  — 1 surface, current label resolves to S-LAL59

Candidates:
- **N-LAF34** (nd=1.77250, vd=49.62, Δnd=+0.0000, Δvd=+0.15)
- **S-LAH66** (nd=1.77250, vd=49.60, Δnd=-0.0000, Δvd=+0.13)
- **MC-TAF101-100** (nd=1.76902, vd=49.29, Δnd=-0.0035, Δvd=-0.18)

Surfaces:
- [SIGMA 30mm f/2.8 (DP2 Merrill)](../src/lens-data/sigma/SigmaDp2M30mmf28.data.ts) `8`: `S-LAL59 (OHARA, probable)`

## stored (nd=1.77279, vd=49.40)  — 2 surfaces, current label resolves to TAF5

Candidates:
- **N-LAF34** (nd=1.77250, vd=49.62, Δnd=-0.0003, Δvd=+0.22)
- **S-LAH66** (nd=1.77250, vd=49.60, Δnd=-0.0003, Δvd=+0.20)
- **MC-TAF101-100** (nd=1.76902, vd=49.29, Δnd=-0.0038, Δvd=-0.11)

Surfaces:
- [NIKON L35AF 35mm f/2.8](../src/lens-data/nikon/NikonL35AF35mmf28.data.ts) `3`: `TAF5 (1773/494)`
- [NIKON L35AF 35mm f/2.8](../src/lens-data/nikon/NikonL35AF35mmf28.data.ts) `7`: `TAF5 (1773/494)`

## stored (nd=1.77300, vd=49.60)  — 1 surface, current label resolves to S-LAH65

Candidates:
- **N-LAF34** (nd=1.77250, vd=49.62, Δnd=-0.0005, Δvd=+0.02)
- **S-LAH66** (nd=1.77250, vd=49.60, Δnd=-0.0005, Δvd=-0.00)
- **MC-TAF101-100** (nd=1.76902, vd=49.29, Δnd=-0.0040, Δvd=-0.31)

Surfaces:
- [VIVITAR SERIES 1 70–210mm f/2.8–4 VMC](../src/lens-data/vivitar/VivitarSeries170210mmf284.data.ts) `7`: `S-LAH65 class (Ohara)`

## stored (nd=1.78100, vd=44.50)  — 1 surface, current label resolves to S-NBH55

Candidates:
- **S-LAH51** (nd=1.78590, vd=44.20, Δnd=+0.0049, Δvd=-0.30)
- **NBFD11** (nd=1.78590, vd=43.93, Δnd=+0.0049, Δvd=-0.57)

Surfaces:
- [MINOLTA MD ROKKOR 50mm f/1.4](../src/lens-data/minolta/MinoltaRokkor50mmf14MD.data.ts) `10`: `S-NBH55 class (OHARA, near match Δnd = 0.001)`

## stored (nd=1.78470, vd=26.30)  — 1 surface, current label resolves to S-NPH4

Candidates:
- **S-TIH23** (nd=1.78470, vd=26.29, Δnd=-0.0000, Δvd=-0.01)
- **SF11** (nd=1.78472, vd=25.76, Δnd=+0.0000, Δvd=-0.54)
- **S-TIH11** (nd=1.78472, vd=25.68, Δnd=+0.0000, Δvd=-0.62)

Surfaces:
- [HASSELBLAD HC 3.5/50](../src/lens-data/hasselblad/HasselbladHC50mmf4.data.ts) `5`: `S-NPH4 (OHARA)`

## stored (nd=1.78470, vd=26.10)  — 2 surfaces, current label resolves to S-TIH6

Candidates:
- **S-TIH23** (nd=1.78470, vd=26.29, Δnd=-0.0000, Δvd=+0.19)
- **SF11** (nd=1.78472, vd=25.76, Δnd=+0.0000, Δvd=-0.34)
- **S-TIH11** (nd=1.78472, vd=25.68, Δnd=+0.0000, Δvd=-0.42)

Surfaces:
- [NIKON NIKKOR-N Auto 24mm f/2.8](../src/lens-data/nikon/NikonNikkorAuto24f28.data.ts) `10`: `SF56A (Schott) / S-TIH6 (Ohara)`
- [NIKON NIKKOR-N Auto 24mm f/2.8](../src/lens-data/nikon/NikonNikkorAuto24f28.data.ts) `12`: `SF56A (Schott) / S-TIH6 (Ohara)`

## stored (nd=1.78472, vd=25.72)  — 1 surface, current label resolves to H-ZF88

Candidates:
- **SF11** (nd=1.78472, vd=25.76, Δnd=-0.0000, Δvd=+0.04)
- **S-TIH11** (nd=1.78472, vd=25.68, Δnd=+0.0000, Δvd=-0.04)
- **S-TIH23** (nd=1.78470, vd=26.29, Δnd=-0.0000, Δvd=+0.57)

Surfaces:
- [Laowa 58 mm f/2.8 2× Ultra-Macro APO](../src/lens-data/laowa/Laowa58mmf28MacroAPO.data.ts) `3`: `H-ZF88 (CDGM)`

## stored (nd=1.78472, vd=25.64)  — 1 surface, current label resolves to S-TIM25

Candidates:
- **SF11** (nd=1.78472, vd=25.76, Δnd=-0.0000, Δvd=+0.12)
- **S-TIH11** (nd=1.78472, vd=25.68, Δnd=+0.0000, Δvd=+0.04)
- **S-TIH23** (nd=1.78470, vd=26.29, Δnd=-0.0000, Δvd=+0.65)

Surfaces:
- [NIKON NIKKOR Z 24-120mm f/4 S](../src/lens-data/nikon/NikonNikkorZ24120mmf4S.data.ts) `22`: `S-TIM25 (OHARA)`

## stored (nd=1.78590, vd=44.17)  — 1 surface, current label resolves to S-LAM55

Candidates:
- **NBFD11** (nd=1.78590, vd=43.93, Δnd=-0.0000, Δvd=-0.24)
- **S-LAH51** (nd=1.78590, vd=44.20, Δnd=-0.0000, Δvd=+0.03)

Surfaces:
- [NIKON NIKKOR Z 135mm f/1.8 S Plena](../src/lens-data/nikon/NikonZ135f18.data.ts) `26`: `Lanthanum flint (near S-LAM55)`

## stored (nd=1.78630, vd=27.50) [code=786/275]  — 1 surface, current label resolves to NBFD15

Candidates:
- **S-TIH23** (nd=1.78470, vd=26.29, Δnd=-0.0016, Δvd=-1.21, codeΔ=13.4)
- **SF11** (nd=1.78472, vd=25.76, Δnd=-0.0016, Δvd=-1.74, codeΔ=18.7)
- **S-TIH11** (nd=1.78472, vd=25.68, Δnd=-0.0016, Δvd=-1.82, codeΔ=19.4)

Surfaces:
- [PANASONIC LEICA DG SUMMILUX 15mm f/1.7 ASPH](../src/lens-data/panasonic/PanasonicLeicaDG15mmf17.data.ts) `11`: `NbFD15 class (786/275, HOYA family)`

## stored (nd=1.79631, vd=40.90)  — 1 surface, current label resolves to NBFD15

Candidates:
- **S-LAH52** (nd=1.79952, vd=42.23, Δnd=+0.0032, Δvd=+1.33)

Surfaces:
- [NIKON AF NIKKOR 85mm f/1.4D IF](../src/lens-data/nikon/Nikon85f14D.data.ts) `5`: `Dense Lanthanum Flint (LaSF3 / NBFD15)`

## stored (nd=1.80000, vd=29.84) [code=800/298]  — 2 surfaces, current label resolves to S-NBH5

Candidates:
- **S-NBH55** (nd=1.80000, vd=29.84, Δnd=-0.0000, Δvd=+0.00, codeΔ=0.4)

Surfaces:
- [FUJIFILM FUJINON XF 200mm F2 R LM OIS WR](../src/lens-data/fujifilm/FujifilmXF200mmf2R.data.ts) `13`: `S-NBH5 / S-LAH53 family (OHARA, 800 298)`
- [FUJIFILM FUJINON XF 200mm F2 R LM OIS WR](../src/lens-data/fujifilm/FujifilmXF200mmf2R.data.ts) `33`: `S-NBH5 / S-LAH53 family (OHARA, 800 298)`

## stored (nd=1.80000, vd=25.46) [code=800/255]  — 1 surface, current label resolves to S-TIH6

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [SONY SONNAR T* FE 35mm F2.8 ZA](../src/lens-data/sony/SonyFE35mmf28ZA.data.ts) `1`: `Dense flint, 800/255 class — S-TIH6 (OHARA) or FD60 (Hoya)`

## stored (nd=1.80100, vd=34.90)  — 1 surface, current label resolves to S-TIH18

Candidates:
- **S-LAM66** (nd=1.80100, vd=34.97, Δnd=-0.0000, Δvd=+0.07)

Surfaces:
- [NIKON NIKKOR Z 24-70mm f/4 S](../src/lens-data/nikon/NikonNikkorZ2470mmf4S.data.ts) `19`: `S-TIH18 (OHARA)`

## stored (nd=1.80100, vd=35.00)  — 1 surface, current label resolves to TAFD30

Candidates:
- **S-LAM66** (nd=1.80100, vd=34.97, Δnd=-0.0000, Δvd=-0.03)

Surfaces:
- [PENTAX FA 31mm F1.8 AL Limited](../src/lens-data/pentax/PentaxFA31mmf18ALLtd.data.ts) `7`: `TAFD30 (HOYA)`

## stored (nd=1.80400, vd=46.60)  — 1 surface, current label resolves to S-LAH64

Candidates:
- **S-LAH65** (nd=1.80400, vd=46.57, Δnd=-0.0000, Δvd=-0.03)
- **S-LAH65VS** (nd=1.80400, vd=46.53, Δnd=-0.0000, Δvd=-0.07)
- **S-LAH65V** (nd=1.80400, vd=46.58, Δnd=-0.0000, Δvd=-0.02)

Surfaces:
- [NIKON NIKKOR Z 40mm f/2](../src/lens-data/nikon/NikonNikkorZ40mmf2.data.ts) `6`: `S-LAH64 (OHARA)`

## stored (nd=1.80440, vd=39.60)  — 1 surface, current label resolves to TAFD25

Candidates:
- **S-LAH63Q** (nd=1.80440, vd=39.58, Δnd=+0.0000, Δvd=-0.02)
- **S-LAH63** (nd=1.80440, vd=39.59, Δnd=-0.0000, Δvd=-0.01)
- **NBFD3** (nd=1.80450, vd=39.63, Δnd=+0.0001, Δvd=+0.03)
- **S-LAH53** (nd=1.80610, vd=40.93, Δnd=+0.0017, Δvd=+1.33)
- **S-LAH52** (nd=1.79952, vd=42.23, Δnd=-0.0049, Δvd=+2.63)

Surfaces:
- [PENTAX-F 85mm f/2.8 Soft](../src/lens-data/pentax/PentaxF85mmf28Soft.data.ts) `6`: `TAFD25 (HOYA)`

## stored (nd=1.80518, vd=25.40) [code=805/254]  — 1 surface, current label resolves to S-TIH10

Candidates:
- **S-TIH6** (nd=1.80518, vd=25.43, Δnd=+0.0000, Δvd=+0.03, codeΔ=0.4)
- **SF6** (nd=1.80518, vd=25.43, Δnd=+0.0000, Δvd=+0.03, codeΔ=0.5)
- **S-NPH1** (nd=1.80809, vd=22.76, Δnd=+0.0029, Δvd=-2.64, codeΔ=29.5)

Surfaces:
- [CANON RF 24-240mm F4-6.3 IS USM](../src/lens-data/canon/CanonRF24240mmf463.data.ts) `32`: `S-TIH10 type (805/254)`

## stored (nd=1.80518, vd=25.50)  — 2 surfaces, current label resolves to E-FD2

Candidates:
- **S-TIH6** (nd=1.80518, vd=25.43, Δnd=+0.0000, Δvd=-0.07)
- **SF6** (nd=1.80518, vd=25.43, Δnd=+0.0000, Δvd=-0.07)
- **S-NPH1** (nd=1.80809, vd=22.76, Δnd=+0.0029, Δvd=-2.74)

Surfaces:
- [HASSELBLAD HC MACRO 4/120](../src/lens-data/hasselblad/HasselbladHC120mmf4Macro.data.ts) `14`: `E-FD2 (HOYA)`
- [VOIGTLÄNDER NOKTON 35mm f/1.2 Aspherical](../src/lens-data/voigtlander/VoigtlanderNokton35mmf12.data.ts) `12`: `S-TIH14 (OHARA)`

## stored (nd=1.80518, vd=25.45)  — 1 surface, current label resolves to S-TIH14

Candidates:
- **S-TIH6** (nd=1.80518, vd=25.43, Δnd=+0.0000, Δvd=-0.02)
- **SF6** (nd=1.80518, vd=25.43, Δnd=+0.0000, Δvd=-0.02)
- **S-NPH1** (nd=1.80809, vd=22.76, Δnd=+0.0029, Δvd=-2.69)

Surfaces:
- [NIKON NIKKOR Z 28mm f/2.8](../src/lens-data/nikon/NikonZ28f28.data.ts) `7`: `S-TIH14 (OHARA)`

## stored (nd=1.80610, vd=33.30)  — 3 surfaces, current label resolves to S-TIH10

Candidates:
- **NBFD15** (nd=1.80610, vd=33.27, Δnd=-0.0000, Δvd=-0.03)

Surfaces:
- [CANON EF-S 24mm f/2.8 STM](../src/lens-data/canon/CanonEFS24mmf28STM.data.ts) `6`: `S-TIH10 (OHARA)`
- [NIKON AF-S NIKKOR 85mm f/1.4G](../src/lens-data/nikon/NikonNikkor85f14G.data.ts) `5`: `S-NBH56 (OHARA)`
- [PANASONIC LUMIX S 20–60mm F3.5–5.6](../src/lens-data/panasonic/PanasonicLumixS2060mmf3556.data.ts) `15`: `S-TIH4 (OHARA)`

## stored (nd=1.80610, vd=40.94)  — 1 surface, current label resolves to S-TIH53

Candidates:
- **S-LAH53** (nd=1.80610, vd=40.93, Δnd=-0.0000, Δvd=-0.01)
- **NBFD3** (nd=1.80450, vd=39.63, Δnd=-0.0016, Δvd=-1.31)
- **S-LAH63Q** (nd=1.80440, vd=39.58, Δnd=-0.0017, Δvd=-1.36)
- **S-LAH63** (nd=1.80440, vd=39.59, Δnd=-0.0017, Δvd=-1.35)
- **K-VC89** (nd=1.80998, vd=41.00, Δnd=+0.0039, Δvd=+0.06)

Surfaces:
- [NIKON AF-S VR Micro-NIKKOR 105mm f/2.8G IF-ED](../src/lens-data/nikon/NikonAFS105f28G.data.ts) `21`: `S-TIH53 (OHARA), Δνd = 0.21; alt. CDGM H-LAF3B (Δνd = 0.01)`

## stored (nd=1.80610, vd=33.30) [code=806/333]  — 1 surface, current label resolves to S-LAH55

Candidates:
- **NBFD15** (nd=1.80610, vd=33.27, Δnd=-0.0000, Δvd=-0.03, codeΔ=0.4)

Surfaces:
- [PANASONIC LUMIX S 35mm F1.8](../src/lens-data/panasonic/PanasonicS35mmf18.data.ts) `11`: `S-LAH55 (OHARA) / CDGM equivalent — dense lanthanum flint, code 806/333`

## stored (nd=1.80610, vd=40.73)  — 1 surface, current label resolves to E-FDS1

Candidates:
- **S-LAH53** (nd=1.80610, vd=40.93, Δnd=-0.0000, Δvd=+0.20)
- **NBFD3** (nd=1.80450, vd=39.63, Δnd=-0.0016, Δvd=-1.10)
- **S-LAH63Q** (nd=1.80440, vd=39.58, Δnd=-0.0017, Δvd=-1.15)
- **S-LAH63** (nd=1.80440, vd=39.59, Δnd=-0.0017, Δvd=-1.14)
- **K-VC89** (nd=1.80998, vd=41.00, Δnd=+0.0039, Δvd=+0.27)

Surfaces:
- [SIGMA dp0 Quattro 14mm f/4](../src/lens-data/sigma/SigmaDp0Quattro14mmf4.data.ts) `18`: `E-FDS1 (HOYA) / S-TIH6 (OHARA)`

## stored (nd=1.80610, vd=40.70)  — 2 surfaces, current label resolves to S-LAH51

Candidates:
- **S-LAH53** (nd=1.80610, vd=40.93, Δnd=-0.0000, Δvd=+0.23)
- **NBFD3** (nd=1.80450, vd=39.63, Δnd=-0.0016, Δvd=-1.07)
- **S-LAH63Q** (nd=1.80440, vd=39.58, Δnd=-0.0017, Δvd=-1.12)
- **S-LAH63** (nd=1.80440, vd=39.59, Δnd=-0.0017, Δvd=-1.11)
- **K-VC89** (nd=1.80998, vd=41.00, Δnd=+0.0039, Δvd=+0.30)

Surfaces:
- [VOIGTLÄNDER APO-LANTHAR 180mm f/4 SL Close Focus](../src/lens-data/voigtlander/VoigtlanderApoLanthar180mmf4.data.ts) `10`: `S-LAH51 (OHARA)`
- [VOIGTLÄNDER APO-LANTHAR 180mm f/4 SL Close Focus](../src/lens-data/voigtlander/VoigtlanderApoLanthar180mmf4.data.ts) `15`: `S-LAH51 (OHARA)`

## stored (nd=1.80755, vd=40.90) [code=808/409]  — 1 surface, current label resolves to S-LAH93

Candidates:
- **S-LAH53** (nd=1.80610, vd=40.93, Δnd=-0.0015, Δvd=+0.03, codeΔ=2.2)
- **K-VC89** (nd=1.80998, vd=41.00, Δnd=+0.0024, Δvd=+0.10, codeΔ=3.0)
- **NBFD3** (nd=1.80450, vd=39.63, Δnd=-0.0030, Δvd=-1.27, codeΔ=16.2)
- **S-LAH63** (nd=1.80440, vd=39.59, Δnd=-0.0032, Δvd=-1.31, codeΔ=16.7)
- **S-LAH63Q** (nd=1.80440, vd=39.58, Δnd=-0.0031, Δvd=-1.32, codeΔ=16.8)

Surfaces:
- [PANASONIC LUMIX S PRO 50mm f/1.4](../src/lens-data/panasonic/PanasonicSPro50mmf14.data.ts) `7A`: `LAH-type (808/409, PGM-moldable, uncertain — S-LAH93 region)`

## stored (nd=1.80809, vd=22.80)  — 1 surface, current label resolves to S-NBH55

Candidates:
- **S-NPH1** (nd=1.80809, vd=22.76, Δnd=+0.0000, Δvd=-0.04)
- **SF6** (nd=1.80518, vd=25.43, Δnd=-0.0029, Δvd=+2.63)
- **S-TIH6** (nd=1.80518, vd=25.43, Δnd=-0.0029, Δvd=+2.63)

Surfaces:
- [FUJIFILM FUJINON 23mm f/2 (X100)](../src/lens-data/fujifilm/FujifilmX10023mmf2.data.ts) `12`: `S-NBH55 (OHARA)`

## stored (nd=1.80809, vd=22.74)  — 1 surface, current label resolves to S-TIH53

Candidates:
- **S-NPH1** (nd=1.80809, vd=22.76, Δnd=+0.0000, Δvd=+0.02)
- **SF6** (nd=1.80518, vd=25.43, Δnd=-0.0029, Δvd=+2.69)
- **S-TIH6** (nd=1.80518, vd=25.43, Δnd=-0.0029, Δvd=+2.69)

Surfaces:
- [NIKON NIKKOR Z DX 18-140mm f/3.5-6.3 VR](../src/lens-data/nikon/NikonZDX18140mmf3563VR.data.ts) `10`: `S-TIH53 (OHARA)`

## stored (nd=1.80998, vd=40.90)  — 1 surface, current label resolves to S-LAH63Q

Candidates:
- **K-VC89** (nd=1.80998, vd=41.00, Δnd=-0.0000, Δvd=+0.10)
- **S-LAH53** (nd=1.80610, vd=40.93, Δnd=-0.0039, Δvd=+0.03)

Surfaces:
- [PANASONIC LUMIX S 20–60mm F3.5–5.6](../src/lens-data/panasonic/PanasonicLumixS2060mmf3556.data.ts) `11A`: `S-LAH63Q (OHARA)`

## stored (nd=1.81265, vd=25.24)  — 2 surfaces, current label resolves to SF6

Candidates:
- **S-NPH1** (nd=1.80809, vd=22.76, Δnd=-0.0046, Δvd=-2.48)

Surfaces:
- [LEICA ELMARIT-R 28mm f/2.8](../src/lens-data/leica/LeicaElmarit28mmf28.data.ts) `6`: `SF6 (SCHOTT)`
- [LEICA ELMARIT-R 28mm f/2.8](../src/lens-data/leica/LeicaElmarit28mmf28.data.ts) `11`: `SF6 (SCHOTT)`

## stored (nd=1.81600, vd=46.59)  — 1 surface, current label resolves to TAFD25

Candidates:
- **S-LAH59** (nd=1.81600, vd=46.62, Δnd=-0.0000, Δvd=+0.03)
- **TAF5** (nd=1.81600, vd=46.57, Δnd=-0.0000, Δvd=-0.02)

Surfaces:
- [NIKON NIKKOR Z 24-200mm f/4-6.3 VR](../src/lens-data/nikon/NikonNikkorZ24200mmf463VR.data.ts) `13`: `TAFD25 equiv. (181600/4659)`

## stored (nd=1.83400, vd=37.18)  — 1 surface, current label resolves to S-LAH66

Candidates:
- **S-LAH60** (nd=1.83400, vd=37.16, Δnd=-0.0000, Δvd=-0.02)
- **S-LAH60V** (nd=1.83400, vd=37.21, Δnd=-0.0000, Δvd=+0.03)

Surfaces:
- [NIKON NIKKOR Z 24-120mm f/4 S](../src/lens-data/nikon/NikonNikkorZ24120mmf4S.data.ts) `6`: `S-LAH66 (OHARA)`

## stored (nd=1.83400, vd=37.19)  — 1 surface, current label resolves to S-LAH65

Candidates:
- **S-LAH60** (nd=1.83400, vd=37.16, Δnd=-0.0000, Δvd=-0.03)
- **S-LAH60V** (nd=1.83400, vd=37.21, Δnd=-0.0000, Δvd=+0.02)

Surfaces:
- [OLYMPUS ZUIKO AUTO-S 50mm f/1.2](../src/lens-data/olympus/OlympusZuikoAutoS50mmf12.data.ts) `3`: `S-LAH65 (OHARA) / TAFD25 (HOYA)`

## stored (nd=1.83481, vd=42.70)  — 1 surface, current label resolves to S-LAH65

Candidates:
- **S-LAH55VS** (nd=1.83481, vd=42.74, Δnd=-0.0000, Δvd=+0.04)
- **S-LAH55V** (nd=1.83481, vd=42.73, Δnd=-0.0000, Δvd=+0.03)
- **S-LAH55** (nd=1.83481, vd=42.71, Δnd=-0.0000, Δvd=+0.01)
- **TAFD5F** (nd=1.83481, vd=42.72, Δnd=-0.0000, Δvd=+0.02)

Surfaces:
- [CANON RF 85mm f/2 Macro IS STM](../src/lens-data/canon/CanonRF85mmf2Macro.data.ts) `21`: `S-LAH65 (OHARA)`

## stored (nd=1.83481, vd=42.72)  — 1 surface, current label resolves to TAFD25

Candidates:
- **S-LAH55VS** (nd=1.83481, vd=42.74, Δnd=-0.0000, Δvd=+0.02)
- **S-LAH55V** (nd=1.83481, vd=42.73, Δnd=-0.0000, Δvd=+0.01)
- **S-LAH55** (nd=1.83481, vd=42.71, Δnd=-0.0000, Δvd=-0.01)
- **TAFD5F** (nd=1.83481, vd=42.72, Δnd=-0.0000, Δvd=+0.00)

Surfaces:
- [SIGMA dp0 Quattro 14mm f/4](../src/lens-data/sigma/SigmaDp0Quattro14mmf4.data.ts) `12`: `TAFD25 (HOYA) / S-LAH55 (OHARA)`

## stored (nd=1.84042, vd=43.30)  — 1 surface, current label resolves to TAFD25

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR 28mm f/2.8 (28Ti)](../src/lens-data/nikon/Nikon28Ti28mmf28.data.ts) `3`: `TAFD25 (HOYA)`

## stored (nd=1.85000, vd=32.40)  — 1 surface, current label resolves to S-TIH10

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [PANASONIC LUMIX S 20–60mm F3.5–5.6](../src/lens-data/panasonic/PanasonicLumixS2060mmf3556.data.ts) `8`: `S-TIH10 (OHARA)`

## stored (nd=1.85150, vd=40.80) [code=851/408]  — 1 surface, current label resolves to S-LAH65V

Candidates:
- **S-LAH89** (nd=1.85150, vd=40.78, Δnd=-0.0000, Δvd=-0.02, codeΔ=0.7)
- **L-LAH85V** (nd=1.85400, vd=40.38, Δnd=+0.0025, Δvd=-0.42, codeΔ=7.2)

Surfaces:
- [CANON RF 28-70mm F2.8 IS STM](../src/lens-data/canon/CanonRF2870mmf28.data.ts) `8`: `851408 — S-LAH65V (OHARA)`

## stored (nd=1.85451, vd=25.15)  — 4 surfaces, current label resolves to S-TIM35

Candidates:
- **S-NBH56** (nd=1.85478, vd=24.80, Δnd=+0.0003, Δvd=-0.35)
- **S-NPH5** (nd=1.85896, vd=22.73, Δnd=+0.0044, Δvd=-2.42)

Surfaces:
- [NIKON NIKKOR Z 24-120mm f/4 S](../src/lens-data/nikon/NikonNikkorZ24120mmf4S.data.ts) `8`: `S-TIM35 (OHARA) or K-VC89 (Sumita)`
- [SIGMA 85mm F/1.4 DG DN | Art](../src/lens-data/sigma/SigmaDGDNA85mmf14.data.ts) `8`: `Anomalous flint (S-NBH8-class, νd=25.15)`
- [SIGMA 85mm F/1.4 DG DN | Art](../src/lens-data/sigma/SigmaDGDNA85mmf14.data.ts) `15`: `Anomalous flint (S-NBH8-class, νd=25.15)`
- [SIGMA 85mm F/1.4 DG DN | Art](../src/lens-data/sigma/SigmaDGDNA85mmf14.data.ts) `18`: `Anomalous flint (S-NBH8-class, νd=25.15)`

## stored (nd=1.85478, vd=24.80) [code=855/248]  — 2 surfaces, current label resolves to S-TIH53W

Candidates:
- **S-NBH56** (nd=1.85478, vd=24.80, Δnd=-0.0000, Δvd=+0.00, codeΔ=0.2)
- **S-NPH5** (nd=1.85896, vd=22.73, Δnd=+0.0042, Δvd=-2.07, codeΔ=24.7)

Surfaces:
- [CANON RF 24-240mm F4-6.3 IS USM](../src/lens-data/canon/CanonRF24240mmf463.data.ts) `27`: `S-TIH53W type (855/248)`
- [CANON RF 28-70mm F2.8 IS STM](../src/lens-data/canon/CanonRF2870mmf28.data.ts) `17`: `855248 — S-TIH53W family (OHARA)`

## stored (nd=1.85478, vd=24.80)  — 1 surface, current label resolves to S-LAH98

Candidates:
- **S-NBH56** (nd=1.85478, vd=24.80, Δnd=-0.0000, Δvd=+0.00)
- **S-NPH5** (nd=1.85896, vd=22.73, Δnd=+0.0042, Δvd=-2.07)

Surfaces:
- [SONY FE 20–70 mm F4 G](../src/lens-data/sony/SonyFE2070mmf4G.data.ts) `8`: `S-LAH98 (OHARA)`

## stored (nd=1.85883, vd=30.00)  — 1 surface, current label resolves to S-TIH14

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [PANASONIC LUMIX S 20–60mm F3.5–5.6](../src/lens-data/panasonic/PanasonicLumixS2060mmf3556.data.ts) `6`: `S-TIH14 (OHARA)`

## stored (nd=1.85896, vd=22.70)  — 1 surface, current label resolves to S-NPH4

Candidates:
- **S-NPH5** (nd=1.85896, vd=22.73, Δnd=-0.0000, Δvd=+0.03)
- **S-NBH56** (nd=1.85478, vd=24.80, Δnd=-0.0042, Δvd=+2.10)

Surfaces:
- [HASSELBLAD XCD 2,5/90V](../src/lens-data/hasselblad/HasselbladXCD90mmf25V.data.ts) `9`: `S-NPH4 (OHARA)`

## stored (nd=1.86290, vd=24.80)  — 3 surfaces, current label resolves to TAFD30

Candidates:
- **S-NPH5** (nd=1.85896, vd=22.73, Δnd=-0.0039, Δvd=-2.07)

Surfaces:
- [SONY FE 70-200mm F2.8 GM OSS II](../src/lens-data/sony/SonyFE70200mmf28GMII.data.ts) `10`: `TAFD30 (HOYA) — ultra-dense flint`
- [SONY FE 70-200mm F2.8 GM OSS II](../src/lens-data/sony/SonyFE70200mmf28GMII.data.ts) `17`: `TAFD30 (HOYA) — ultra-dense flint`
- [SONY FE 70-200mm F2.8 GM OSS II](../src/lens-data/sony/SonyFE70200mmf28GMII.data.ts) `19`: `TAFD30 (HOYA) — ultra-dense flint`

## stored (nd=1.86994, vd=39.82)  — 1 surface, current label resolves to TAFD30

Candidates:
- **TAFD32** (nd=1.87070, vd=40.73, Δnd=+0.0008, Δvd=+0.91)

Surfaces:
- [NIKON AF NIKKOR 85mm f/1.4D IF](../src/lens-data/nikon/Nikon85f14D.data.ts) `15`: `Very Dense Lanthanum Flint (TAFD30)`

## stored (nd=1.87722, vd=37.00)  — 1 surface, current label resolves to S-LAH63

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [LEICA SUMMILUX 28 mm f/1.7 ASPH. (Q, Q2, Q3)](../src/lens-data/leica/Leica28mmf17.data.ts) `12A`: `S-LAH63 (OHARA)`

## stored (nd=1.89190, vd=37.13)  — 1 surface, current label resolves to S-LAH79

Candidates:
- **S-LAH92** (nd=1.89190, vd=37.13, Δnd=-0.0000, Δvd=+0.00)

Surfaces:
- [HASSELBLAD XCD 2,8/65](../src/lens-data/hasselblad/HasselbladXCD65mmf28.data.ts) `13`: `S-LAH79 (OHARA)`

## stored (nd=1.90043, vd=37.40)  — 1 surface, current label resolves to S-LAH58

Candidates:
- **TAFD37A** (nd=1.90043, vd=37.37, Δnd=+0.0000, Δvd=-0.03)
- **TAFD37** (nd=1.90043, vd=37.37, Δnd=+0.0000, Δvd=-0.03)
- **J-LASFH9** (nd=1.90265, vd=35.73, Δnd=+0.0022, Δvd=-1.67)
- **S-LAH93** (nd=1.90525, vd=35.04, Δnd=+0.0048, Δvd=-2.36)

Surfaces:
- [CANON RF 85mm f/2 Macro IS STM](../src/lens-data/canon/CanonRF85mmf2Macro.data.ts) `11`: `S-LAH58 (OHARA)`

## stored (nd=1.90043, vd=37.38)  — 1 surface, current label resolves to S-LAH58

Candidates:
- **TAFD37A** (nd=1.90043, vd=37.37, Δnd=+0.0000, Δvd=-0.01)
- **TAFD37** (nd=1.90043, vd=37.37, Δnd=+0.0000, Δvd=-0.01)
- **J-LASFH9** (nd=1.90265, vd=35.73, Δnd=+0.0022, Δvd=-1.65)
- **S-LAH93** (nd=1.90525, vd=35.04, Δnd=+0.0048, Δvd=-2.34)

Surfaces:
- [NIKON NIKKOR Z 24-120mm f/4 S](../src/lens-data/nikon/NikonNikkorZ24120mmf4S.data.ts) `19`: `S-LAH58 (OHARA)`

## stored (nd=1.90265, vd=35.80)  — 1 surface, current label resolves to S-LAH79

Candidates:
- **J-LASFH9** (nd=1.90265, vd=35.73, Δnd=+0.0000, Δvd=-0.07)
- **TAFD37** (nd=1.90043, vd=37.37, Δnd=-0.0022, Δvd=+1.57)
- **TAFD37A** (nd=1.90043, vd=37.37, Δnd=-0.0022, Δvd=+1.57)
- **S-LAH93** (nd=1.90525, vd=35.04, Δnd=+0.0026, Δvd=-0.76)

Surfaces:
- [NIKON NIKKOR Z 50mm f/1.2 S](../src/lens-data/nikon/NikonNikkorZ50f12.data.ts) `29`: `S-LAH79 (OHARA)`

## stored (nd=1.90265, vd=35.77)  — 1 surface, current label resolves to S-LAH58

Candidates:
- **J-LASFH9** (nd=1.90265, vd=35.73, Δnd=+0.0000, Δvd=-0.04)
- **TAFD37** (nd=1.90043, vd=37.37, Δnd=-0.0022, Δvd=+1.60)
- **TAFD37A** (nd=1.90043, vd=37.37, Δnd=-0.0022, Δvd=+1.60)
- **S-LAH93** (nd=1.90525, vd=35.04, Δnd=+0.0026, Δvd=-0.73)

Surfaces:
- [NIKON NIKKOR Z DX 18-140mm f/3.5-6.3 VR](../src/lens-data/nikon/NikonZDX18140mmf3563VR.data.ts) `30`: `S-LAH58 (OHARA)`

## stored (nd=1.90366, vd=31.27)  — 2 surfaces, current label resolves to S-LAH96

Candidates:
- **S-LAH95** (nd=1.90366, vd=31.34, Δnd=-0.0000, Δvd=+0.07)
- **TAFD25** (nd=1.90366, vd=31.32, Δnd=-0.0000, Δvd=+0.05)

Surfaces:
- [NIKON NIKKOR Z 24-200mm f/4-6.3 VR](../src/lens-data/nikon/NikonNikkorZ24200mmf463VR.data.ts) `1`: `S-LAH96 / TAFD45 (190366/3127)`
- [NIKON NIKKOR Z 24-200mm f/4-6.3 VR](../src/lens-data/nikon/NikonNikkorZ24200mmf463VR.data.ts) `24`: `S-LAH96 / TAFD45 (190366/3127)`

## stored (nd=1.90370, vd=31.32)  — 1 surface, current label resolves to S-NBH55

Candidates:
- **S-LAH95** (nd=1.90366, vd=31.34, Δnd=-0.0000, Δvd=+0.02)
- **TAFD25** (nd=1.90366, vd=31.32, Δnd=-0.0000, Δvd=+0.00)

Surfaces:
- [SONY FE 90 mm F2.8 Macro G OSS](../src/lens-data/sony/SonyFE90mmf28.data.ts) `22`: `S-NBH55 (OHARA)`

## stored (nd=1.91082, vd=35.30)  — 1 surface, current label resolves to S-LAH55V

Candidates:
- **TAFD35** (nd=1.91082, vd=35.25, Δnd=+0.0000, Δvd=-0.05)

Surfaces:
- [CANON EF-S 24mm f/2.8 STM](../src/lens-data/canon/CanonEFS24mmf28STM.data.ts) `1`: `S-LAH55V (OHARA)`

## stored (nd=1.91082, vd=35.25) [code=911/353]  — 1 surface, current label resolves to S-LAH58

Candidates:
- **TAFD35** (nd=1.91082, vd=35.25, Δnd=+0.0000, Δvd=+0.00, codeΔ=0.7)

Surfaces:
- [FUJIFILM FUJINON XF 200mm F2 R LM OIS WR](../src/lens-data/fujifilm/FujifilmXF200mmf2R.data.ts) `9`: `S-LAH58 family (OHARA, 911 353)`

## stored (nd=1.91082, vd=35.20)  — 1 surface, current label resolves to S-LAH79

Candidates:
- **TAFD35** (nd=1.91082, vd=35.25, Δnd=+0.0000, Δvd=+0.05)

Surfaces:
- [LEICA SUMMILUX 28 mm f/1.7 ASPH. (Q, Q2, Q3)](../src/lens-data/leica/Leica28mmf17.data.ts) `9`: `S-LAH79 (OHARA)`

## stored (nd=1.91082, vd=35.25)  — 3 surfaces, current label resolves to S-LAH79

Candidates:
- **TAFD35** (nd=1.91082, vd=35.25, Δnd=+0.0000, Δvd=+0.00)

Surfaces:
- [SIGMA 30mm f/2.8 (DP2 Merrill)](../src/lens-data/sigma/SigmaDp2M30mmf28.data.ts) `14`: `S-LAH79 (OHARA)`
- [VOIGTLÄNDER ULTRON Vintage Line 28mm F2 Aspherical](../src/lens-data/voigtlander/VoigtlanderUltron28f2.data.ts) `4`: `S-LAH58 (OHARA) / N-LASF46A (Schott)`
- [VOIGTLÄNDER ULTRON Vintage Line 28mm F2 Aspherical](../src/lens-data/voigtlander/VoigtlanderUltron28f2.data.ts) `6`: `S-LAH58 (OHARA)`

## stored (nd=1.91597, vd=36.40)  — 1 surface, current label resolves to TAFD33

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [PANASONIC LEICA DG SUMMILUX 15mm f/1.7 ASPH](../src/lens-data/panasonic/PanasonicLeicaDG15mmf17.data.ts) `8`: `TAFD33 (HOYA)`

## stored (nd=1.92286, vd=20.90) [code=923/209]  — 1 surface, current label resolves to E-FD15

Candidates:
- **N-SF66** (nd=1.92286, vd=20.88, Δnd=+0.0000, Δvd=-0.02, codeΔ=0.3)
- **E-FDS1** (nd=1.92286, vd=20.88, Δnd=-0.0000, Δvd=-0.02, codeΔ=0.3)
- **S-NPH2** (nd=1.92286, vd=18.90, Δnd=-0.0000, Δvd=-2.00, codeΔ=20.2)

Surfaces:
- [CANON RF 24-240mm F4-6.3 IS USM](../src/lens-data/canon/CanonRF24240mmf463.data.ts) `10`: `E-FD15 type (923/209)`

## stored (nd=1.93323, vd=20.90)  — 1 surface, current label resolves to S-NPH53

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [SONY FE 70-200mm F2.8 GM OSS II](../src/lens-data/sony/SonyFE70200mmf28GMII.data.ts) `24`: `S-NPH53 (OHARA) — ultra-dense flint`

## stored (nd=1.94595, vd=18.00)  — 6 surfaces, current label resolves to E-FDS1

Candidates:
- **H-ZF88** (nd=1.94595, vd=17.94, Δnd=+0.0000, Δvd=-0.06)
- **FDS18** (nd=1.94594, vd=17.98, Δnd=-0.0000, Δvd=-0.02)

Surfaces:
- [NIKON NIKKOR Z 50mm f/1.2 S](../src/lens-data/nikon/NikonNikkorZ50f12.data.ts) `3`: `E-FDS1-W (HIKARI)`
- [PANASONIC LEICA DG SUMMILUX 9mm F1.7 ASPH](../src/lens-data/panasonic/PanasonicLeicaDG9mmf17.data.ts) `17`: `S-NPH2 (OHARA)`
- [PANASONIC LUMIX S PRO 50mm f/1.4](../src/lens-data/panasonic/PanasonicSPro50mmf14.data.ts) `19`: `S-NPH5 (OHARA)`
- [SONY FE 20–70 mm F4 G](../src/lens-data/sony/SonyFE2070mmf4G.data.ts) `1`: `S-NPH53 (OHARA)`
- [SONY FE 20–70 mm F4 G](../src/lens-data/sony/SonyFE2070mmf4G.data.ts) `23`: `S-NPH53 (OHARA)`
- [SONY FE 24-70mm f/2.8 GM II](../src/lens-data/sony/SonyFE2470mmf28GMII.data.ts) `34`: `S-NPH4 (OHARA)`

## stored (nd=1.95375, vd=32.30)  — 3 surfaces, current label resolves to S-LAH99

Candidates:
- **S-LAH98** (nd=1.95375, vd=32.32, Δnd=-0.0000, Δvd=+0.02)
- **TAFD45** (nd=1.95375, vd=32.32, Δnd=-0.0000, Δvd=+0.02)
- **J-LASFH15** (nd=1.95000, vd=29.37, Δnd=-0.0037, Δvd=-2.93)

Surfaces:
- [LEICA APO-SUMMICRON 43mm f/2 ASPH. (Q3 43)](../src/lens-data/leica/LeicaAPO43mmf2.data.ts) `11`: `S-LAH99 / TAFD33 (OHARA)`
- [NIKON NIKKOR Z 100-400mm f/4.5-5.6 VR S](../src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts) `32`: `S-LAH99 (OHARA)`
- [SONY FE 20–70 mm F4 G](../src/lens-data/sony/SonyFE2070mmf4G.data.ts) `15`: `S-LAH79 (OHARA)`

## stored (nd=1.95375, vd=32.33)  — 3 surfaces, current label resolves to S-LAH79

Candidates:
- **S-LAH98** (nd=1.95375, vd=32.32, Δnd=-0.0000, Δvd=-0.01)
- **TAFD45** (nd=1.95375, vd=32.32, Δnd=-0.0000, Δvd=-0.01)
- **J-LASFH15** (nd=1.95000, vd=29.37, Δnd=-0.0037, Δvd=-2.96)

Surfaces:
- [NIKON NIKKOR Z MC 105mm f/2.8 VR S](../src/lens-data/nikon/NikonZ105f28.data.ts) `19`: `S-LAH79 (OHARA)`
- [NIKON NIKKOR Z DX 16-50mm f/3.5-6.3 VR](../src/lens-data/nikon/NikonZDX1650mmf3563VR.data.ts) `10`: `S-LAH79 (OHARA)`
- [NIKON NIKKOR Z DX 16-50mm f/3.5-6.3 VR](../src/lens-data/nikon/NikonZDX1650mmf3563VR.data.ts) `17`: `S-LAH79 (OHARA)`

## stored (nd=1.95906, vd=17.47) [PgF=0.6614 (dPgF=0.0470)]  — 1 surface, current label resolves to S-NPH53

Candidates:
- **S-NPH3** (nd=1.95906, vd=17.47, Δnd=-0.0000, Δvd=+0.00, ΔPgF=-0.0004)

Surfaces:
- [FUJIFILM FUJINON XF 50mm f/1.0 R WR](../src/lens-data/fujifilm/FujifilmXF50f1.data.ts) `7`: `S-NPH53 (Ohara)`

## stored (nd=2.00060, vd=25.46)  — 1 surface, current label resolves to S-NPH2

Candidates:
- **TAFD40** (nd=2.00069, vd=25.46, Δnd=+0.0001, Δvd=+0.00)
- **S-LAH79** (nd=2.00330, vd=28.27, Δnd=+0.0027, Δvd=+2.81)

Surfaces:
- [PANASONIC LEICA DG SUMMILUX 25mm f/1.4 ASPH](../src/lens-data/panasonic/PanasonicLeicaDG25mmf14.data.ts) `1`: `S-NPH2 (OHARA)`

## stored (nd=2.00069, vd=25.50)  — 2 surfaces, current label resolves to S-NPH3

Candidates:
- **TAFD40** (nd=2.00069, vd=25.46, Δnd=+0.0000, Δvd=-0.04)
- **S-LAH79** (nd=2.00330, vd=28.27, Δnd=+0.0026, Δvd=+2.77)

Surfaces:
- [CANON RF24-105mm F2.8 L IS USM Z](../src/lens-data/canon/CanonRF24105mmf28Z.data.ts) `42`: `Extreme dense flint — OHARA S-NPH3 (001/255)`
- [LEICA APO-SUMMICRON 43mm f/2 ASPH. (Q3 43)](../src/lens-data/leica/LeicaAPO43mmf2.data.ts) `3`: `S-NPH4 (OHARA)`

## stored (nd=2.00100, vd=29.10)  — 2 surfaces, current label resolves to S-NPH4

Candidates:
- **S-LAH99** (nd=2.00100, vd=29.14, Δnd=+0.0000, Δvd=+0.04)
- **TAFD55** (nd=2.00100, vd=29.13, Δnd=+0.0000, Δvd=+0.03)
- **S-LAH79** (nd=2.00330, vd=28.27, Δnd=+0.0023, Δvd=-0.83)

Surfaces:
- [CANON RF24-105mm F2.8 L IS USM Z](../src/lens-data/canon/CanonRF24105mmf28Z.data.ts) `19`: `Extreme dense flint — OHARA S-NPH4 (001/291)`
- [SONY FE 24-70mm f/2.8 GM II](../src/lens-data/sony/SonyFE2470mmf28GMII.data.ts) `22`: `S-NPH5 (OHARA)`

## stored (nd=2.00100, vd=29.12)  — 1 surface, current label resolves to S-NPH1

Candidates:
- **S-LAH99** (nd=2.00100, vd=29.14, Δnd=+0.0000, Δvd=+0.02)
- **TAFD55** (nd=2.00100, vd=29.13, Δnd=+0.0000, Δvd=+0.01)
- **S-LAH79** (nd=2.00330, vd=28.27, Δnd=+0.0023, Δvd=-0.85)

Surfaces:
- [NIKON NIKKOR Z 28mm f/2.8](../src/lens-data/nikon/NikonZ28f28.data.ts) `6`: `S-NPH1 (OHARA)`

---

## Summary

- **156** (nd, vd) groups have at least one candidate (207 surfaces) — actionable relabels.
- **26** (nd, vd) groups have NO candidate (29 surfaces) — needs patent verification or Unmatched relabeling.
