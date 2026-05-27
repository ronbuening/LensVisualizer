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
  [glass-relabel-followup.md](../glass-relabel-followup.md) for per-lens patent verification.

**Scope**: 51 mismatched surfaces across 42 unique groups.

## stored (nd=1.49782, vd=82.56) [PgF=0.5379 (dPgF=0.0330)]  — 1 surface, current label resolves to S-FPM4

Candidates:
- **J-FKH1** (nd=1.49782, vd=82.57, Δnd=+0.0000, Δvd=+0.01, ΔPgF=+0.0007)
- **J-FK01A** (nd=1.49700, vd=81.65, Δnd=-0.0008, Δvd=-0.91, ΔPgF=-0.0007)
- **H-FK61** (nd=1.49700, vd=81.61, Δnd=-0.0008, Δvd=-0.95)
- **FCD1** (nd=1.49700, vd=81.61, Δnd=-0.0008, Δvd=-0.95, ΔPgF=+0.0061)
- **S-FPL51** (nd=1.49700, vd=81.55, Δnd=-0.0008, Δvd=-1.01, ΔPgF=-0.0033)

Surfaces:
- [NIKON AF-S MICRO-NIKKOR 60mm f/2.8G ED](../../src/lens-data/nikon/NikonAFSMicroNikkor60f28G.data.ts) `13`: `S-FPM4 (OHARA) — ED glass`

## stored (nd=1.51742, vd=48.80)  — 1 surface, current label resolves to S-TIL27

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [FUJIFILM FUJINON XF 60mmF2.4 R Macro](../../src/lens-data/fujifilm/FujifilmXF60mmf24R.data.ts) `9`: `S-TIL27 (OHARA) — probable (νd corrected to ≈52.2; see header note)`

## stored (nd=1.55298, vd=55.10)  — 1 surface, current label resolves to S-TIL25

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR Z 50mm f/1.2 S](../../src/lens-data/nikon/NikonNikkorZ50f12.data.ts) `5`: `S-TIL25 (OHARA)`

## stored (nd=1.59270, vd=35.30)  — 2 surfaces, current label resolves to S-TIM2

Candidates:
- **S-FTM16** (nd=1.59270, vd=35.31, Δnd=+0.0000, Δvd=+0.01)

Surfaces:
- [Canon EF 24-70mm f/2.8L II USM](../../src/lens-data/canon/CanonEF2470mmf28LII.data.ts) `11`: `S-TIM2 (OHARA; titanium flint)`
- [NIKON NIKKOR Z 26mm f/2.8](../../src/lens-data/nikon/NikonZ26f28.data.ts) `4`: `S-TIM2 (OHARA)`

## stored (nd=1.59319, vd=67.90)  — 3 surfaces, current label resolves to S-FPM3

Candidates:
- **J-PSKH1** (nd=1.59319, vd=67.90, Δnd=+0.0000, Δvd=+0.00)
- **J-PSKH4** (nd=1.59349, vd=67.00, Δnd=+0.0003, Δvd=-0.90)
- **FCD505** (nd=1.59283, vd=68.63, Δnd=-0.0004, Δvd=+0.73)
- **FCD515** (nd=1.59282, vd=68.63, Δnd=-0.0004, Δvd=+0.73)
- **K-GFK68** (nd=1.59240, vd=68.30, Δnd=-0.0008, Δvd=+0.40)

Surfaces:
- [NIKON NIKKOR Z MC 105mm f/2.8 VR S](../../src/lens-data/nikon/NikonZ105f28.data.ts) `4`: `S-FPM3 (OHARA)`
- [NIKON NIKKOR Z MC 105mm f/2.8 VR S](../../src/lens-data/nikon/NikonZ105f28.data.ts) `6`: `S-FPM3 (OHARA)`
- [NIKON NIKKOR Z MC 105mm f/2.8 VR S](../../src/lens-data/nikon/NikonZ105f28.data.ts) `17`: `S-FPM3 (OHARA)`

## stored (nd=1.59561, vd=67.00)  — 1 surface, current label resolves to S-FPM4

Candidates:
- **S-FPM2** (nd=1.59522, vd=67.74, Δnd=-0.0004, Δvd=+0.74)
- **J-PSKH4** (nd=1.59349, vd=67.00, Δnd=-0.0021, Δvd=+0.00)
- **J-PSKH1** (nd=1.59319, vd=67.90, Δnd=-0.0024, Δvd=+0.90)
- **FCD505** (nd=1.59283, vd=68.63, Δnd=-0.0028, Δvd=+1.63)
- **FCD515** (nd=1.59282, vd=68.63, Δnd=-0.0028, Δvd=+1.63)

Surfaces:
- [SONY FE 28-70mm F2 GM](../../src/lens-data/sony/SonyFE2870mmf2GM.data.ts) `4`: `S-FPM4 (OHARA)`

## stored (nd=1.63854, vd=55.48)  — 1 surface, current label resolves to H-LAK6A

Candidates:
- **S-BSM18** (nd=1.63854, vd=55.38, Δnd=-0.0000, Δvd=-0.10)
- **K-SK18** (nd=1.63854, vd=55.50, Δnd=+0.0000, Δvd=+0.02)

Surfaces:
- [NIKON AF-S MICRO-NIKKOR 60mm f/2.8G ED](../../src/lens-data/nikon/NikonAFSMicroNikkor60f28G.data.ts) `3`: `H-LAK6A (CDGM) or Nikon melt`

## stored (nd=1.64769, vd=33.84)  — 1 surface, current label resolves to E-F3

Candidates:
- **E-FD2** (nd=1.64769, vd=33.84, Δnd=-0.0000, Δvd=+0.00)
- **SF2** (nd=1.64769, vd=33.85, Δnd=-0.0000, Δvd=+0.01)
- **S-TIM22** (nd=1.64769, vd=33.79, Δnd=-0.0000, Δvd=-0.05)

Surfaces:
- [VOIGTLÄNDER ULTRON Vintage Line 28mm F2 Aspherical](../../src/lens-data/voigtlander/VoigtlanderUltron28f2.data.ts) `3`: `E-F3 (HOYA) / SF2 (Schott)`

## stored (nd=1.65412, vd=39.68) [PgF=0.5735 (dPgF=-0.0036)]  — 1 surface, current label resolves to S-TIL27

Candidates:
- **N-KZFS5** (nd=1.65412, vd=39.70, Δnd=+0.0000, Δvd=+0.02, ΔPgF=-0.0025)
- **S-NBH5** (nd=1.65412, vd=39.68, Δnd=-0.0000, Δvd=+0.00, ΔPgF=+0.0000)

Surfaces:
- [CANON RF 50mm f/1.2 L USM](../../src/lens-data/canon/CanonRF50mmf12L.data.ts) `6`: `S-TIL27 (OHARA)`

## stored (nd=1.65844, vd=50.90)  — 1 surface, current label resolves to S-LAL8

Candidates:
- **N-SSK5** (nd=1.65844, vd=50.88, Δnd=+0.0000, Δvd=-0.02)

Surfaces:
- [CANON RF 135mm f/1.8 L IS USM](../../src/lens-data/canon/CanonRF135f18.data.ts) `26`: `S-LAL8 (OHARA)`

## stored (nd=1.67003, vd=57.20) [code=670/572]  — 1 surface, current label resolves to H-LAK6A

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [HASSELBLAD HC 150mm f/3.2](../../src/lens-data/hasselblad/HasselbladHC150mmf32.data.ts) `9`: `Lanthanum crown (670/572 code, uncertain; cf. H-LAK6A, CDGM)`

## stored (nd=1.68893, vd=31.16)  — 1 surface, current label resolves to S-TIH4

Candidates:
- **E-FD8** (nd=1.68893, vd=31.16, Δnd=-0.0000, Δvd=+0.00)
- **S-TIM28** (nd=1.68893, vd=31.08, Δnd=+0.0000, Δvd=-0.08)

Surfaces:
- [NIKON AF-S NIKKOR 58mm f/1.4G](../../src/lens-data/nikon/Nikon58f14GDesignCandidate.data.ts) `6`: `S-TIH4 / N-SF8 (dense flint)`

## stored (nd=1.68893, vd=31.20)  — 1 surface, current label resolves to S-TIM35

Candidates:
- **E-FD8** (nd=1.68893, vd=31.16, Δnd=-0.0000, Δvd=-0.04)
- **S-TIM28** (nd=1.68893, vd=31.08, Δnd=+0.0000, Δvd=-0.12)

Surfaces:
- [RICOH GR 28mm f/2.8](../../src/lens-data/ricoh/RicohGR28f28.data.ts) `4`: `S-TIM35 (OHARA) / FD110 (HOYA)`

## stored (nd=1.69416, vd=31.20) [code=694/312]  — 1 surface, current label resolves to S-TIM28

Candidates:
- **S-TIM35** (nd=1.69895, vd=30.13, Δnd=+0.0048, Δvd=-1.07, codeΔ=15.7)
- **E-FD15** (nd=1.69895, vd=30.05, Δnd=+0.0048, Δvd=-1.15, codeΔ=16.4)

Surfaces:
- [Sony FE 14mm f/1.8 GM](../../src/lens-data/sony/SonyFE14mmf18GM.data.ts) `7`: `S-TIM28-class short flint (OHARA; patent index aligns with catalog ne, 694/312)`

## stored (nd=1.69895, vd=30.13)  — 1 surface, current label resolves to S-NBH52V

Candidates:
- **E-FD15** (nd=1.69895, vd=30.05, Δnd=-0.0000, Δvd=-0.08)
- **S-TIM35** (nd=1.69895, vd=30.13, Δnd=-0.0000, Δvd=-0.00)

Surfaces:
- [NIKON NIKKOR Z 58mm f/0.95 S Noct](../../src/lens-data/nikon/NikonZ58f095SNoct.data.ts) `24`: `Dense flint (near S-NBH52V)`

## stored (nd=1.72047, vd=34.70)  — 1 surface, current label resolves to S-NBH5

Candidates:
- **N-KZFS8** (nd=1.72047, vd=34.70, Δnd=-0.0000, Δvd=+0.00)
- **S-NBH8** (nd=1.72047, vd=34.71, Δnd=-0.0000, Δvd=+0.01)

Surfaces:
- [Canon EF 24-70mm f/2.8L II USM](../../src/lens-data/canon/CanonEF2470mmf28LII.data.ts) `23`: `S-NBH5 (OHARA; niobium flint / KZFS-family equivalent)`

## stored (nd=1.72825, vd=28.46)  — 1 surface, current label resolves to S-TIH11

Candidates:
- **H-ZF4A** (nd=1.72825, vd=28.32, Δnd=+0.0000, Δvd=-0.14)
- **S-TIH10** (nd=1.72825, vd=28.46, Δnd=-0.0000, Δvd=+0.00)
- **SF10** (nd=1.72825, vd=28.41, Δnd=+0.0000, Δvd=-0.05)

Surfaces:
- [NIKON AF-S NIKKOR 58mm f/1.4G](../../src/lens-data/nikon/Nikon58f14GDesignCandidate.data.ts) `9`: `S-TIH11 / N-SF10 (dense flint)`

## stored (nd=1.73430, vd=28.19)  — 1 surface, current label resolves to SF10

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [Leica Summicron-R 50mm f/2](../../src/lens-data/leica/LeicaSummicronR50mmf2.data.ts) `1`: `SF10 (Schott; patent ne/νe values stored as nd/vd)`

## stored (nd=1.73800, vd=32.30)  — 1 surface, current label resolves to S-NBH52V

Candidates:
- **J-KZFH9** (nd=1.73800, vd=32.26, Δnd=+0.0000, Δvd=-0.04)
- **S-NBH53V** (nd=1.73800, vd=32.33, Δnd=-0.0000, Δvd=+0.03)
- **BPH50** (nd=1.74000, vd=31.71, Δnd=+0.0020, Δvd=-0.59)

Surfaces:
- [NIKON NIKKOR Z 50mm f/1.2 S](../../src/lens-data/nikon/NikonNikkorZ50f12.data.ts) `16`: `S-NBH52V (OHARA)`

## stored (nd=1.74100, vd=52.60)  — 1 surface, current label resolves to S-LAM3

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR Z 100-400mm f/4.5-5.6 VR S](../../src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts) `13`: `S-LAM3 (OHARA)`

## stored (nd=1.74810, vd=52.30)  — 1 surface, current label resolves to S-LAM66

Candidates:
- **S-LAM60** (nd=1.74320, vd=49.34, Δnd=-0.0049, Δvd=-2.96)

Surfaces:
- [NIKON AF NIKKOR 85mm f/1.4D IF](../../src/lens-data/nikon/Nikon85f14D.data.ts) `19`: `Lanthanum Crown (S-LAM66)`

## stored (nd=1.75500, vd=52.34)  — 1 surface, current label resolves to S-LAL14

Candidates:
- **J-LASKH2** (nd=1.75500, vd=52.34, Δnd=+0.0000, Δvd=+0.00)
- **N-LAK33B** (nd=1.75500, vd=52.30, Δnd=+0.0000, Δvd=-0.04)
- **S-LAH97** (nd=1.75500, vd=52.32, Δnd=+0.0000, Δvd=-0.02)

Surfaces:
- [NIKON AF-S NIKKOR 58mm f/1.4G](../../src/lens-data/nikon/Nikon58f14GDesignCandidate.data.ts) `3`: `S-LAL14 / N-LAK12 (lanthanum crown)`

## stored (nd=1.76182, vd=26.61)  — 1 surface, current label resolves to E-FD15

Candidates:
- **S-TIH14** (nd=1.76182, vd=26.52, Δnd=+0.0000, Δvd=-0.09)

Surfaces:
- [VOIGTLÄNDER ULTRON Vintage Line 28mm F2 Aspherical](../../src/lens-data/voigtlander/VoigtlanderUltron28f2.data.ts) `7`: `E-FD15 (HOYA) / N-SF14 (Schott)`

## stored (nd=1.76450, vd=49.10)  — 1 surface, current label resolves to S-NBH56

Candidates:
- **S-LAH96** (nd=1.76385, vd=48.49, Δnd=-0.0006, Δvd=-0.61)
- **Q-LASFPH2S** (nd=1.76544, vd=46.75, Δnd=+0.0009, Δvd=-2.35)
- **MC-TAF101-100** (nd=1.76902, vd=49.29, Δnd=+0.0045, Δvd=+0.19)

Surfaces:
- [NIKON NIKKOR Z 50mm f/1.2 S](../../src/lens-data/nikon/NikonNikkorZ50f12.data.ts) `25A`: `S-NBH56 (OHARA)`

## stored (nd=1.76554, vd=46.76)  — 1 surface, current label resolves to TAFD5F

Candidates:
- **Q-LASFPH2S** (nd=1.76544, vd=46.75, Δnd=-0.0001, Δvd=-0.01)
- **S-LAH96** (nd=1.76385, vd=48.49, Δnd=-0.0017, Δvd=+1.73)
- **MC-TAF101-100** (nd=1.76902, vd=49.29, Δnd=+0.0035, Δvd=+2.53)

Surfaces:
- [NIKON NIKKOR Z 58mm f/0.95 S Noct](../../src/lens-data/nikon/NikonZ58f095SNoct.data.ts) `27`: `Lanthanum crown (no confirmed catalog match; near TAFD5F)`

## stored (nd=1.77047, vd=29.70) [code=770/297]  — 2 surfaces, current label resolves to S-TIH18

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [CANON RF 135mm f/1.8 L IS USM](../../src/lens-data/canon/CanonRF135f18.data.ts) `6`: `770297 — S-TIH18 family (OHARA)`
- [CANON RF 135mm f/1.8 L IS USM](../../src/lens-data/canon/CanonRF135f18.data.ts) `9`: `770297 — S-TIH18 family (OHARA)`

## stored (nd=1.78470, vd=26.10)  — 2 surfaces, current label resolves to S-TIH6

Candidates:
- **S-TIH23** (nd=1.78470, vd=26.29, Δnd=-0.0000, Δvd=+0.19)
- **SF11** (nd=1.78472, vd=25.76, Δnd=+0.0000, Δvd=-0.34)
- **H-ZF13** (nd=1.78472, vd=25.72, Δnd=+0.0000, Δvd=-0.38)
- **S-TIH11** (nd=1.78472, vd=25.68, Δnd=+0.0000, Δvd=-0.42)
- **S-NBH58** (nd=1.78880, vd=28.43, Δnd=+0.0041, Δvd=+2.33)

Surfaces:
- [NIKON NIKKOR-N Auto 24mm f/2.8](../../src/lens-data/nikon/NikonNikkorAuto24f28.data.ts) `10`: `SF56A (Schott) / S-TIH6 (Ohara)`
- [NIKON NIKKOR-N Auto 24mm f/2.8](../../src/lens-data/nikon/NikonNikkorAuto24f28.data.ts) `12`: `SF56A (Schott) / S-TIH6 (Ohara)`

## stored (nd=1.78590, vd=44.17)  — 1 surface, current label resolves to S-LAM55

Candidates:
- **NBFD11** (nd=1.78590, vd=43.93, Δnd=-0.0000, Δvd=-0.24)
- **S-LAH51** (nd=1.78590, vd=44.20, Δnd=-0.0000, Δvd=+0.03)

Surfaces:
- [NIKON NIKKOR Z 135mm f/1.8 S Plena](../../src/lens-data/nikon/NikonZ135f18.data.ts) `26`: `Lanthanum flint (near S-LAM55)`

## stored (nd=1.79190, vd=25.55)  — 1 surface, current label resolves to SF11

Candidates:
- **S-NBH58** (nd=1.78880, vd=28.43, Δnd=-0.0031, Δvd=+2.88)

Surfaces:
- [Leica Summicron-R 50mm f/2](../../src/lens-data/leica/LeicaSummicronR50mmf2.data.ts) `4`: `SF11 (Schott; patent ne/νe values stored as nd/vd)`

## stored (nd=1.79631, vd=40.90)  — 1 surface, current label resolves to NBFD15

Candidates:
- **S-LAH52** (nd=1.79952, vd=42.23, Δnd=+0.0032, Δvd=+1.33)
- **S-LAH52Q** (nd=1.79952, vd=42.24, Δnd=+0.0032, Δvd=+1.34)

Surfaces:
- [NIKON AF NIKKOR 85mm f/1.4D IF](../../src/lens-data/nikon/Nikon85f14D.data.ts) `5`: `Dense Lanthanum Flint (LaSF3 / NBFD15)`

## stored (nd=1.80518, vd=25.45)  — 1 surface, current label resolves to S-TIH14

Candidates:
- **H-ZF7LA** (nd=1.80518, vd=25.46, Δnd=-0.0000, Δvd=+0.01)
- **S-TIH6** (nd=1.80518, vd=25.43, Δnd=+0.0000, Δvd=-0.02)
- **SF6** (nd=1.80518, vd=25.43, Δnd=+0.0000, Δvd=-0.02)
- **J-SFH1** (nd=1.80809, vd=22.74, Δnd=+0.0029, Δvd=-2.71)
- **S-NPH1** (nd=1.80809, vd=22.76, Δnd=+0.0029, Δvd=-2.69)

Surfaces:
- [NIKON NIKKOR Z 28mm f/2.8](../../src/lens-data/nikon/NikonZ28f28.data.ts) `7`: `S-TIH14 (OHARA)`

## stored (nd=1.80610, vd=33.27)  — 1 surface, current label resolves to H-ZF52

Candidates:
- **NBFD15** (nd=1.80610, vd=33.27, Δnd=-0.0000, Δvd=+0.00)

Surfaces:
- [SIGMA DP3 MERRILL 50mm f/2.8](../../src/lens-data/sigma/SigmaDP3M50mmf28.data.ts) `4`: `H-ZF52 (CDGM) — exact match, unconfirmed in Ohara/Hoya/Schott`

## stored (nd=1.84850, vd=43.79)  — 1 surface, current label resolves to H-ZLAF68C

Candidates:
- **J-LASFH22** (nd=1.84850, vd=43.79, Δnd=+0.0000, Δvd=+0.00)

Surfaces:
- [NIKON NIKKOR Z 58mm f/0.95 S Noct](../../src/lens-data/nikon/NikonZ58f095SNoct.data.ts) `7`: `Lanthanum dense flint (near E-LASF013 / H-ZLaF68C)`

## stored (nd=1.86252, vd=25.20) [code=862/252]  — 2 surfaces, current label resolves to S-NBH56

Candidates:
- **S-NPH5** (nd=1.85896, vd=22.73, Δnd=-0.0036, Δvd=-2.47, codeΔ=27.8)

Surfaces:
- [Sony FE 14mm f/1.8 GM](../../src/lens-data/sony/SonyFE14mmf18GM.data.ts) `18`: `S-NBH56-class dense flint (OHARA; soft match to ne, 862/252)`
- [Sony FE 14mm f/1.8 GM](../../src/lens-data/sony/SonyFE14mmf18GM.data.ts) `22`: `S-NBH56-class dense flint (OHARA; soft match to ne, 862/252)`

## stored (nd=1.86994, vd=39.82)  — 1 surface, current label resolves to TAFD30

Candidates:
- **TAFD32** (nd=1.87070, vd=40.73, Δnd=+0.0008, Δvd=+0.91)

Surfaces:
- [NIKON AF NIKKOR 85mm f/1.4D IF](../../src/lens-data/nikon/Nikon85f14D.data.ts) `15`: `Very Dense Lanthanum Flint (TAFD30)`

## stored (nd=1.90265, vd=35.80)  — 1 surface, current label resolves to S-LAH79

Candidates:
- **J-LASFH9** (nd=1.90265, vd=35.73, Δnd=+0.0000, Δvd=-0.07)
- **TAFD37** (nd=1.90043, vd=37.37, Δnd=-0.0022, Δvd=+1.57)
- **TAFD37A** (nd=1.90043, vd=37.37, Δnd=-0.0022, Δvd=+1.57)
- **S-LAH93** (nd=1.90525, vd=35.04, Δnd=+0.0026, Δvd=-0.76)

Surfaces:
- [NIKON NIKKOR Z 50mm f/1.2 S](../../src/lens-data/nikon/NikonNikkorZ50f12.data.ts) `29`: `S-LAH79 (OHARA)`

## stored (nd=1.91048, vd=31.30) [code=910/313]  — 1 surface, current label resolves to S-LAH95

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [Sony FE 14mm f/1.8 GM](../../src/lens-data/sony/SonyFE14mmf18GM.data.ts) `9`: `S-LAH95-class dense lanthanum flint (OHARA; patent index aligns with catalog ne, 910/313)`

## stored (nd=1.91082, vd=35.25)  — 2 surfaces, current label resolves to S-LAH58

Candidates:
- **TAFD35** (nd=1.91082, vd=35.25, Δnd=+0.0000, Δvd=+0.00)

Surfaces:
- [VOIGTLÄNDER ULTRON Vintage Line 28mm F2 Aspherical](../../src/lens-data/voigtlander/VoigtlanderUltron28f2.data.ts) `4`: `S-LAH58 (OHARA) / N-LASF46A (Schott)`
- [VOIGTLÄNDER ULTRON Vintage Line 28mm F2 Aspherical](../../src/lens-data/voigtlander/VoigtlanderUltron28f2.data.ts) `6`: `S-LAH58 (OHARA)`

## stored (nd=1.94595, vd=18.00)  — 1 surface, current label resolves to E-FDS1

Candidates:
- **H-ZF88** (nd=1.94595, vd=17.94, Δnd=+0.0000, Δvd=-0.06)
- **FDS18** (nd=1.94594, vd=17.98, Δnd=-0.0000, Δvd=-0.02)

Surfaces:
- [NIKON NIKKOR Z 50mm f/1.2 S](../../src/lens-data/nikon/NikonNikkorZ50f12.data.ts) `3`: `E-FDS1-W (HIKARI)`

## stored (nd=1.95375, vd=32.30)  — 1 surface, current label resolves to S-LAH99

Candidates:
- **S-LAH98** (nd=1.95375, vd=32.32, Δnd=-0.0000, Δvd=+0.02)
- **TAFD45** (nd=1.95375, vd=32.32, Δnd=-0.0000, Δvd=+0.02)
- **J-LASFH15** (nd=1.95000, vd=29.37, Δnd=-0.0037, Δvd=-2.93)

Surfaces:
- [NIKON NIKKOR Z 100-400mm f/4.5-5.6 VR S](../../src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts) `32`: `S-LAH99 (OHARA)`

## stored (nd=1.95375, vd=32.33)  — 3 surfaces, current label resolves to S-LAH79

Candidates:
- **S-LAH98** (nd=1.95375, vd=32.32, Δnd=-0.0000, Δvd=-0.01)
- **TAFD45** (nd=1.95375, vd=32.32, Δnd=-0.0000, Δvd=-0.01)
- **J-LASFH15** (nd=1.95000, vd=29.37, Δnd=-0.0037, Δvd=-2.96)

Surfaces:
- [NIKON NIKKOR Z MC 105mm f/2.8 VR S](../../src/lens-data/nikon/NikonZ105f28.data.ts) `19`: `S-LAH79 (OHARA)`
- [NIKON NIKKOR Z DX 16-50mm f/3.5-6.3 VR](../../src/lens-data/nikon/NikonZDX1650mmf3563VR.data.ts) `10`: `S-LAH79 (OHARA)`
- [NIKON NIKKOR Z DX 16-50mm f/3.5-6.3 VR](../../src/lens-data/nikon/NikonZDX1650mmf3563VR.data.ts) `17`: `S-LAH79 (OHARA)`

## stored (nd=2.00100, vd=29.12)  — 1 surface, current label resolves to S-NPH1

Candidates:
- **S-LAH99** (nd=2.00100, vd=29.14, Δnd=+0.0000, Δvd=+0.02)
- **TAFD55** (nd=2.00100, vd=29.13, Δnd=+0.0000, Δvd=+0.01)
- **S-LAH79** (nd=2.00330, vd=28.27, Δnd=+0.0023, Δvd=-0.85)

Surfaces:
- [NIKON NIKKOR Z 28mm f/2.8](../../src/lens-data/nikon/NikonZ28f28.data.ts) `6`: `S-NPH1 (OHARA)`

---

## Summary

- **35** (nd, vd) groups have at least one candidate (43 surfaces) — actionable relabels.
- **7** (nd, vd) groups have NO candidate (8 surfaces) — needs patent verification or Unmatched relabeling.
