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

**Scope**: 162 mismatched surfaces across 111 unique groups.

## stored (nd=1.53110, vd=55.90) [code=531/559]  — 1 surface, current label resolves to S-BAL42

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [CANON RF 24-240mm F4-6.3 IS USM](../src/lens-data/canon/CanonRF24240mmf463.data.ts) `25A`: `S-BAL42 type (531/559)`

## stored (nd=1.53172, vd=49.10)  — 1 surface, current label resolves to S-NSL3

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON 28Ti NIKKOR 28mm f/2.8](../src/lens-data/nikon/Nikon28Ti28mmf28.data.ts) `1`: `S-NSL3 (OHARA)`

## stored (nd=1.53775, vd=74.70)  — 1 surface, current label resolves to S-FPM2

Candidates:
- **S-FPM3** (nd=1.53775, vd=74.70, Δnd=+0.0000, Δvd=+0.00)

Surfaces:
- [FUJIFILM FUJINON XF 80mm f/2.8 R LM OIS WR Macro](../src/lens-data/fujifilm/FujifilmXF80f28.data.ts) `23`: `S-FPM2 (OHARA fluorophosphate)`

## stored (nd=1.55332, vd=71.70)  — 1 surface, current label resolves to S-FPM3

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [LEICA APO-SUMMICRON 43mm f/2 ASPH.](../src/lens-data/leica/LeicaAPO43mmf2.data.ts) `16A`: `S-FPM3 / L-FPM3 (OHARA)`

## stored (nd=1.55389, vd=38.09)  — 1 surface, current label resolves to S-TIM25

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON AF-S NIKKOR 14-24mm f/2.8G ED](../src/lens-data/nikon/NikonNikkorAFS1424mmf28.data.ts) `6`: `S-TIM25 (OHARA)`

## stored (nd=1.56732, vd=42.80)  — 1 surface, current label resolves to S-BAL42

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [LEICA SUMMILUX 28 mm f/1.7 ASPH.](../src/lens-data/leica/Leica28mmf17.data.ts) `1`: `S-BAL42 (OHARA)`

## stored (nd=1.56883, vd=56.00)  — 1 surface, current label resolves to S-BAL42

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR Z 14-30mm f/4 S](../src/lens-data/nikon/NikonNikkorZ1430mmf4S.data.ts) `12`: `S-BAL42 (OHARA)`

## stored (nd=1.57099, vd=50.80)  — 1 surface, current label resolves to S-BAL42

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON AF-S NIKKOR 14-24mm f/2.8G ED](../src/lens-data/nikon/NikonNikkorAFS1424mmf28.data.ts) `20`: `S-BAL42 (OHARA)`

## stored (nd=1.58140, vd=40.80) [code=581/408]  — 1 surface, current label resolves to S-TIM25

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [OLYMPUS G.ZUIKO AUTO-S 50mm f/1.4](../src/lens-data/olympus/OlympusZuikoAutoS50mmf14.data.ts) `5`: `BaF-type (581-408; OHARA S-TIM25 family — close)`

## stored (nd=1.58144, vd=40.89)  — 1 surface, current label resolves to S-TIM2

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON AF-S NIKKOR 200-500mm f/5.6E ED VR](../src/lens-data/nikon/NikonNikkorAFS200500mmf56.data.ts) `29`: `S-TIM2 (OHARA)`

## stored (nd=1.58144, vd=40.75)  — 1 surface, current label resolves to S-TIH14

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON PC-E NIKKOR 24mm f/3.5D ED](../src/lens-data/nikon/NikonPCENikkor24mmf35DED.data.ts) `9`: `S-TIH14 (OHARA)`

## stored (nd=1.58267, vd=46.43)  — 1 surface, current label resolves to S-TIM22

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON AF-S VR Micro-NIKKOR 105mm f/2.8G IF-ED](../src/lens-data/nikon/NikonAFS105f28G.data.ts) `9`: `S-TIM22 (OHARA)`

## stored (nd=1.58913, vd=61.22)  — 1 surface, current label resolves to S-BAL42

Candidates:
- **S-BAL35** (nd=1.58913, vd=61.14, Δnd=-0.0000, Δvd=-0.08)

Surfaces:
- [NIKON NIKKOR Z 24-70mm f/2.8 S](../src/lens-data/nikon/NikonZ2470f28.data.ts) `32`: `S-BAL42 (OHARA)`

## stored (nd=1.59270, vd=35.30)  — 3 surfaces, current label resolves to S-TIM25

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [CANON RF 24-70mm f/2.8L IS USM](../src/lens-data/canon/CanonRF2470f28.data.ts) `13`: `S-TIM25 (OHARA)`
- [CANON RF 70-200mm f/2.8 L IS USM](../src/lens-data/canon/CanonRF70200f28.data.ts) `15`: `S-TIM2 (OHARA)`
- [NIKON NIKKOR Z 26mm f/2.8](../src/lens-data/nikon/NikonZ26f28.data.ts) `4`: `S-TIM2 (OHARA)`

## stored (nd=1.59319, vd=67.90)  — 4 surfaces, current label resolves to S-FPM3

Candidates:
- **FCD505** (nd=1.59283, vd=68.63, Δnd=-0.0004, Δvd=+0.73)
- **K-GFK68** (nd=1.59240, vd=68.30, Δnd=-0.0008, Δvd=+0.40)
- **S-FPM2** (nd=1.59522, vd=67.74, Δnd=+0.0020, Δvd=-0.16)

Surfaces:
- [NIKON NIKKOR Z MC 105mm f/2.8 VR S](../src/lens-data/nikon/NikonZ105f28.data.ts) `4`: `S-FPM3 (OHARA)`
- [NIKON NIKKOR Z MC 105mm f/2.8 VR S](../src/lens-data/nikon/NikonZ105f28.data.ts) `6`: `S-FPM3 (OHARA)`
- [NIKON NIKKOR Z MC 105mm f/2.8 VR S](../src/lens-data/nikon/NikonZ105f28.data.ts) `17`: `S-FPM3 (OHARA)`
- [NIKON NIKKOR Z 24-70mm f/2.8 S](../src/lens-data/nikon/NikonZ2470f28.data.ts) `17`: `S-PHM52 (OHARA)`

## stored (nd=1.59349, vd=67.00)  — 3 surfaces, current label resolves to S-PHM52

Candidates:
- **FCD505** (nd=1.59283, vd=68.63, Δnd=-0.0007, Δvd=+1.63)
- **K-GFK68** (nd=1.59240, vd=68.30, Δnd=-0.0011, Δvd=+1.30)
- **S-FPM2** (nd=1.59522, vd=67.74, Δnd=+0.0017, Δvd=+0.74)

Surfaces:
- [NIKON NIKKOR Z 14-30mm f/4 S](../src/lens-data/nikon/NikonNikkorZ1430mmf4S.data.ts) `9`: `S-PHM52 (OHARA)`
- [NIKON NIKKOR Z 14-24mm f/2.8 S](../src/lens-data/nikon/NikonZ1424f28S.data.ts) `13`: `Near S-FPM3 (OHARA) — fluorophosphate crown`
- [NIKON NIKKOR Z 24-70mm f/2.8 S](../src/lens-data/nikon/NikonZ2470f28.data.ts) `24`: `S-PHM53 (OHARA)`

## stored (nd=1.60311, vd=60.70)  — 1 surface, current label resolves to S-BSL7

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [CANON EF 50mm f/1.0L USM](../src/lens-data/canon/CanonEF50mmf1L.data.ts) `1`: `S-BSL7 (OHARA)`

## stored (nd=1.60311, vd=60.60) [code=603/606]  — 1 surface, current label resolves to S-BSL7

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [CANON RF 28-70mm F2.8 IS STM](../src/lens-data/canon/CanonRF2870mmf28.data.ts) `5`: `603606 — S-BSL7 family (OHARA)`

## stored (nd=1.60342, vd=56.40)  — 1 surface, current label resolves to S-PHM52

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR Z 100-400mm f/4.5-5.6 VR S](../src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts) `34`: `S-PHM52 (OHARA)`

## stored (nd=1.60342, vd=38.03)  — 1 surface, current label resolves to S-TIM2

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR Z 35mm f/1.8 S](../src/lens-data/nikon/NikonZ35f18S.data.ts) `4`: `S-TIM2 (OHARA)`

## stored (nd=1.60738, vd=56.82)  — 1 surface, current label resolves to S-BAL35

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON AF-S NIKKOR 200-500mm f/5.6E ED VR](../src/lens-data/nikon/NikonNikkorAFS200500mmf56.data.ts) `14`: `S-BAL35 (OHARA)`

## stored (nd=1.61293, vd=36.94)  — 1 surface, current label resolves to S-TIM25

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR Z 35mm f/1.8 S](../src/lens-data/nikon/NikonZ35f18S.data.ts) `14`: `S-TIM25 (OHARA)`

## stored (nd=1.62004, vd=36.30)  — 1 surface, current label resolves to S-TIM22

Candidates:
- **S-TIM2** (nd=1.62004, vd=36.26, Δnd=+0.0000, Δvd=-0.04)

Surfaces:
- [CANON RF 85mm f/1.2L USM](../src/lens-data/canon/CanonRF85mmf12L.data.ts) `19`: `S-TIM22 (OHARA)`

## stored (nd=1.62588, vd=35.70)  — 1 surface, current label resolves to S-TIM35

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [FUJIFILM FUJINON XF 80mm f/2.8 R LM OIS WR Macro](../src/lens-data/fujifilm/FujifilmXF80f28.data.ts) `5`: `S-TIM35 (OHARA dense flint)`

## stored (nd=1.63854, vd=55.40) [code=639/554]  — 1 surface, current label resolves to S-BSL7

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [CANON RF 24-50mm F4.5-6.3 IS STM](../src/lens-data/canon/CanonRF2450mmf463.data.ts) `1`: `S-BSL7 (OHARA 639/554)`

## stored (nd=1.64769, vd=33.80)  — 1 surface, current label resolves to S-TIH53

Candidates:
- **S-TIM22** (nd=1.64769, vd=33.79, Δnd=-0.0000, Δvd=-0.01)

Surfaces:
- [NIKON AF-S NIKKOR 85mm f/1.4G](../src/lens-data/nikon/NikonNikkor85f14G.data.ts) `17`: `S-TIH53 (OHARA)`

## stored (nd=1.64769, vd=33.70)  — 4 surfaces, current label resolves to S-TIH14

Candidates:
- **S-TIM22** (nd=1.64769, vd=33.79, Δnd=-0.0000, Δvd=+0.09)

Surfaces:
- [NIKON NIKKOR Z 50mm f/1.8 S](../src/lens-data/nikon/NikonNikkorZ50f18S.data.ts) `10`: `S-TIH14 class (dense flint)`
- [NIKON NIKKOR Z 50mm f/1.8 S](../src/lens-data/nikon/NikonNikkorZ50f18S.data.ts) `14`: `S-TIH14 class (dense flint)`
- [NIKON NIKKOR Z 50mm f/1.8 S](../src/lens-data/nikon/NikonNikkorZ50f18S.data.ts) `21`: `S-TIH14 class (dense flint)`
- [NIKON NIKKOR Z 50mm f/1.8 S](../src/lens-data/nikon/NikonNikkorZ50f18S.data.ts) `23`: `S-TIH14 class (dense flint)`

## stored (nd=1.64831, vd=33.80)  — 1 surface, current label resolves to SF4

Candidates:
- **S-TIM22** (nd=1.64769, vd=33.79, Δnd=-0.0006, Δvd=-0.01)

Surfaces:
- [NIKON NIKKOR-S AUTO 50mm f/1.4](../src/lens-data/nikon/NikonNikkorSAuto50mmf14.data.ts) `4`: `SF4 / PBM5 (dense flint)`

## stored (nd=1.65160, vd=58.52)  — 1 surface, current label resolves to S-BSL7

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [OLYMPUS ZUIKO AUTO-MACRO 90mm f/2](../src/lens-data/olympus/OlympusZuikoAutoMacro90mmf2.data.ts) `17`: `BSC7 (HOYA)`

## stored (nd=1.66565, vd=35.64)  — 2 surfaces, current label resolves to S-TIM22

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [CANON RF 50mm f/1.2 L USM](../src/lens-data/canon/CanonRF50mmf12L.data.ts) `8`: `S-TIM22 (OHARA)`
- [CANON RF 50mm f/1.2 L USM](../src/lens-data/canon/CanonRF50mmf12L.data.ts) `16`: `S-TIM22 (OHARA)`

## stored (nd=1.67270, vd=32.10)  — 1 surface, current label resolves to S-TIM22

Candidates:
- **S-TIM25** (nd=1.67270, vd=32.10, Δnd=-0.0000, Δvd=-0.00)

Surfaces:
- [FUJIFILM FUJINON XF 90mm f/2 R LM WR](../src/lens-data/fujifilm/FujifilmXF90mmf2.data.ts) `15`: `S-TIM22 (OHARA)`

## stored (nd=1.67270, vd=32.20)  — 1 surface, current label resolves to S-TIH6

Candidates:
- **S-TIM25** (nd=1.67270, vd=32.10, Δnd=-0.0000, Δvd=-0.10)

Surfaces:
- [NIKON NIKKOR Z 50mm f/1.8 S](../src/lens-data/nikon/NikonNikkorZ50f18S.data.ts) `1`: `S-TIH6 class (dense flint)`

## stored (nd=1.67270, vd=32.17)  — 1 surface, current label resolves to S-TIM35

Candidates:
- **S-TIM25** (nd=1.67270, vd=32.10, Δnd=-0.0000, Δvd=-0.07)

Surfaces:
- [SONY FE 90 mm F2.8 Macro G OSS](../src/lens-data/sony/SonyFE90mmf28.data.ts) `20`: `S-TIM35 (OHARA)`

## stored (nd=1.67300, vd=38.15)  — 1 surface, current label resolves to S-TIM35

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [CANON RF 50mm f/1.2 L USM](../src/lens-data/canon/CanonRF50mmf12L.data.ts) `23`: `S-TIM35 (OHARA)`

## stored (nd=1.68376, vd=37.57)  — 1 surface, current label resolves to S-TIM22

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR Z 24-200mm f/4-6.3 VR](../src/lens-data/nikon/NikonNikkorZ24200mmf463VR.data.ts) `34`: `S-TIM22 equiv. (168376/3757)`

## stored (nd=1.68893, vd=31.07)  — 1 surface, current label resolves to S-TIM25

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [CANON RF 50mm f/1.2 L USM](../src/lens-data/canon/CanonRF50mmf12L.data.ts) `2`: `S-TIM25 (OHARA)`

## stored (nd=1.68893, vd=31.10)  — 1 surface, current label resolves to S-TIM25

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [FUJIFILM FUJINON XF 23mm F1.4 R](../src/lens-data/fujifilm/FujifilmXF23mmf14.data.ts) `16`: `S-TIM25 (OHARA)`

## stored (nd=1.68893, vd=31.16)  — 1 surface, current label resolves to S-TIH14

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR Z 35mm f/1.8 S](../src/lens-data/nikon/NikonZ35f18S.data.ts) `6`: `S-TIH14 (OHARA)`

## stored (nd=1.68893, vd=31.20)  — 1 surface, current label resolves to S-TIM35

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [RICOH GR 28mm f/2.8](../src/lens-data/ricoh/RicohGR28f28.data.ts) `4`: `S-TIM35 (OHARA) / FD110 (HOYA)`

## stored (nd=1.69350, vd=53.30)  — 1 surface, current label resolves to S-LAM54

Candidates:
- **S-LAL14** (nd=1.69680, vd=55.53, Δnd=+0.0033, Δvd=+2.23)

Surfaces:
- [NIKON AF-S NIKKOR 24-70mm f/2.8E ED VR](../src/lens-data/nikon/NikonNikkorAFS2470mmf28E.data.ts) `36`: `S-LAM54 (OHARA)`

## stored (nd=1.69700, vd=48.52)  — 1 surface, current label resolves to S-LAM66

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [FUJIFILM FUJINON XF 80mm f/2.8 R LM OIS WR Macro](../src/lens-data/fujifilm/FujifilmXF80f28.data.ts) `21`: `S-LAM66 (OHARA lanthanum crown)`

## stored (nd=1.69895, vd=30.10)  — 1 surface, current label resolves to SF6

Candidates:
- **S-TIM35** (nd=1.69895, vd=30.13, Δnd=-0.0000, Δvd=+0.03)

Surfaces:
- [NIKON NIKKOR-S AUTO 50mm f/1.4](../src/lens-data/nikon/NikonNikkorSAuto50mmf14.data.ts) `6`: `SF6 / PBM6 (dense flint)`

## stored (nd=1.70154, vd=41.17)  — 1 surface, current label resolves to S-LAM54

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON AF-S NIKKOR 16-35mm f/4G ED VR](../src/lens-data/nikon/NikonNikkorAFS1635mmf4.data.ts) `16`: `S-LAM54 (OHARA)`

## stored (nd=1.72047, vd=50.20)  — 1 surface, current label resolves to S-LAL18

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR Z 100-400mm f/4.5-5.6 VR S](../src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts) `10`: `S-LAL18 (OHARA)`

## stored (nd=1.72825, vd=28.50)  — 1 surface, current label resolves to S-TIH6

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [CANON RF 70-200mm f/2.8 L IS USM](../src/lens-data/canon/CanonRF70200f28.data.ts) `16`: `S-TIH6 (OHARA)`

## stored (nd=1.72825, vd=28.38)  — 1 surface, current label resolves to S-TIH6

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR Z 24-70mm f/2.8 S](../src/lens-data/nikon/NikonZ2470f28.data.ts) `10`: `S-TIH6 (OHARA)`

## stored (nd=1.72916, vd=54.70)  — 1 surface, current label resolves to S-LAM54

Candidates:
- **S-LAL18** (nd=1.72916, vd=54.68, Δnd=-0.0000, Δvd=-0.02)

Surfaces:
- [NIKON NIKKOR Z 100-400mm f/4.5-5.6 VR S](../src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts) `37`: `S-LAM54 (OHARA)`

## stored (nd=1.73800, vd=32.30)  — 2 surfaces, current label resolves to S-TIH14

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON AF-S NIKKOR 28mm f/1.4E ED](../src/lens-data/nikon/NikonAFS28f14E.data.ts) `18`: `S-TIH14 (OHARA)`
- [NIKON NIKKOR Z 14-24mm f/2.8 S](../src/lens-data/nikon/NikonZ1424f28S.data.ts) `7`: `S-TIH14 (OHARA)`

## stored (nd=1.73800, vd=49.30)  — 1 surface, current label resolves to S-LAH63

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR Z 100-400mm f/4.5-5.6 VR S](../src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts) `45`: `S-LAH63 (OHARA) †`

## stored (nd=1.74077, vd=27.74)  — 1 surface, current label resolves to S-TIH14

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [VOIGTLÄNDER NOKTON 50mm f/1.2 X-Mount](../src/lens-data/voigtlander/VoigtlanderNoktonX50mmf12.data.ts) `7`: `S-TIH14 (OHARA)`

## stored (nd=1.74100, vd=52.67)  — 1 surface, current label resolves to S-LAH53

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON AF-S NIKKOR 14-24mm f/2.8G ED](../src/lens-data/nikon/NikonNikkorAFS1424mmf28.data.ts) `5`: `S-LAH53 (OHARA)`

## stored (nd=1.74400, vd=44.80) [code=744/448]  — 1 surface, current label resolves to S-LAL14

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [CANON RF 28-70mm F2.8 IS STM](../src/lens-data/canon/CanonRF2870mmf28.data.ts) `26`: `744448 — S-LAL14 family (OHARA)`

## stored (nd=1.74710, vd=27.40)  — 1 surface, current label resolves to SF4

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [LEICA ELCAN 50mm f/2](../src/lens-data/leica/LeicaElcan50mmf2.data.ts) `5`: `≈SF4 (dense flint)`

## stored (nd=1.74810, vd=52.30)  — 1 surface, current label resolves to S-LAM66

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON AF NIKKOR 85mm f/1.4D IF](../src/lens-data/nikon/Nikon85f14D.data.ts) `19`: `Lanthanum Crown (S-LAM66)`

## stored (nd=1.75500, vd=52.34)  — 1 surface, current label resolves to S-LAL14

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON AF-S NIKKOR 58mm f/1.4G](../src/lens-data/nikon/Nikon58f14GDesignCandidate.data.ts) `3`: `S-LAL14 / N-LAK12 (lanthanum crown)`

## stored (nd=1.75500, vd=52.30)  — 2 surfaces, current label resolves to S-LAL14

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR Z 24-70mm f/4 S](../src/lens-data/nikon/NikonNikkorZ2470mmf4S.data.ts) `2`: `S-LAL14 (OHARA)`
- [NIKON NIKKOR Z 24-70mm f/4 S](../src/lens-data/nikon/NikonNikkorZ2470mmf4S.data.ts) `6`: `S-LAL14 (OHARA)`

## stored (nd=1.76182, vd=26.50) [code=762/265]  — 1 surface, current label resolves to S-TIH6

Candidates:
- **S-TIH14** (nd=1.76182, vd=26.52, Δnd=+0.0000, Δvd=+0.02, codeΔ=0.4)

Surfaces:
- [CANON RF 24-240mm F4-6.3 IS USM](../src/lens-data/canon/CanonRF24240mmf463.data.ts) `15`: `S-TIH6 type (762/265)`

## stored (nd=1.76182, vd=26.60)  — 1 surface, current label resolves to S-TIH6

Candidates:
- **S-TIH14** (nd=1.76182, vd=26.52, Δnd=+0.0000, Δvd=-0.08)

Surfaces:
- [LEICA APO-SUMMICRON 43mm f/2 ASPH.](../src/lens-data/leica/LeicaAPO43mmf2.data.ts) `6`: `S-TIH6 (OHARA)`

## stored (nd=1.76385, vd=48.50)  — 2 surfaces, current label resolves to S-LAH59

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [CANON RF 24-70mm f/2.8L IS USM](../src/lens-data/canon/CanonRF2470f28.data.ts) `17`: `S-LAH59 (OHARA)`
- [CANON RF 70-200mm f/2.8 L IS USM](../src/lens-data/canon/CanonRF70200f28.data.ts) `9`: `S-LAH65V (OHARA)`

## stored (nd=1.76385, vd=48.51)  — 1 surface, current label resolves to S-LAL14

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [CANON RF 50mm f/1.2 L USM](../src/lens-data/canon/CanonRF50mmf12L.data.ts) `15`: `S-LAL14 (OHARA)`

## stored (nd=1.76902, vd=49.30)  — 1 surface, current label resolves to S-LAM54

Candidates:
- **S-LAH66** (nd=1.77250, vd=49.60, Δnd=+0.0035, Δvd=+0.30)

Surfaces:
- [CANON RF 28-70mm F2 L USM](../src/lens-data/canon/CanonRF2870mmf2L.data.ts) `6A`: `S-LAM54 (OHARA)`

## stored (nd=1.77047, vd=29.70)  — 2 surfaces, current label resolves to S-TIH6

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [CANON RF 135mm f/1.8 L IS USM](../src/lens-data/canon/CanonRF135f18.data.ts) `6`: `S-TIH6 (OHARA)`
- [CANON RF 135mm f/1.8 L IS USM](../src/lens-data/canon/CanonRF135f18.data.ts) `9`: `S-TIH6 (OHARA)`

## stored (nd=1.77250, vd=49.60)  — 2 surfaces, current label resolves to S-LAM54

Candidates:
- **S-LAH66** (nd=1.77250, vd=49.60, Δnd=-0.0000, Δvd=-0.00)

Surfaces:
- [CANON RF 100mm f/2.8 L MACRO IS USM](../src/lens-data/canon/CanonRF100f28.data.ts) `11`: `S-LAM54 (OHARA)`
- [CANON RF 100mm f/2.8 L MACRO IS USM](../src/lens-data/canon/CanonRF100f28.data.ts) `18`: `S-LAM54 (OHARA)`

## stored (nd=1.78470, vd=26.10) [PgF=0.6139 (dPgF=0.0140)]  — 3 surfaces, current label resolves to S-TIH14

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON AI Nikkor 135mm f/2.8](../src/lens-data/nikon/NikonAI135mmf28.data.ts) `5`: `S-TIH14 (OHARA)`
- [NIKON NIKKOR-N Auto 24mm f/2.8](../src/lens-data/nikon/NikonNikkorAuto24f28.data.ts) `10`: `SF56A (Schott) / S-TIH6 (Ohara)`
- [NIKON NIKKOR-N Auto 24mm f/2.8](../src/lens-data/nikon/NikonNikkorAuto24f28.data.ts) `12`: `SF56A (Schott) / S-TIH6 (Ohara)`

## stored (nd=1.78472, vd=25.70)  — 1 surface, current label resolves to S-TIH53

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [CANON RF 24-105mm f/4 L IS USM](../src/lens-data/canon/CanonRF24105mmf4L.data.ts) `22`: `S-TIH53 (OHARA)`

## stored (nd=1.78472, vd=25.64)  — 1 surface, current label resolves to S-TIM25

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR Z 24-120mm f/4 S](../src/lens-data/nikon/NikonNikkorZ24120mmf4S.data.ts) `22`: `S-TIM25 (OHARA)`

## stored (nd=1.79500, vd=45.31)  — 1 surface, current label resolves to S-LAH51

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR Z 14-30mm f/4 S](../src/lens-data/nikon/NikonNikkorZ1430mmf4S.data.ts) `22`: `S-LAH51 (OHARA)`

## stored (nd=1.80000, vd=29.84) [code=800/298]  — 2 surfaces, current label resolves to S-NBH5

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [FUJIFILM FUJINON XF 200mm F2 R LM OIS WR](../src/lens-data/fujifilm/FujifilmXF200mmf2R.data.ts) `13`: `S-NBH5 / S-LAH53 family (OHARA, 800 298)`
- [FUJIFILM FUJINON XF 200mm F2 R LM OIS WR](../src/lens-data/fujifilm/FujifilmXF200mmf2R.data.ts) `33`: `S-NBH5 / S-LAH53 family (OHARA, 800 298)`

## stored (nd=1.80400, vd=46.60)  — 1 surface, current label resolves to S-LAH51

Candidates:
- **S-LAH65** (nd=1.80400, vd=46.57, Δnd=-0.0000, Δvd=-0.03)
- **S-LAH65V** (nd=1.80400, vd=46.58, Δnd=-0.0000, Δvd=-0.02)

Surfaces:
- [CANON RF 24-70mm f/2.8L IS USM](../src/lens-data/canon/CanonRF2470f28.data.ts) `32`: `S-LAH51 (OHARA)`

## stored (nd=1.80518, vd=25.45)  — 1 surface, current label resolves to S-TIH14

Candidates:
- **S-TIH6** (nd=1.80518, vd=25.43, Δnd=+0.0000, Δvd=-0.02)
- **SF6** (nd=1.80518, vd=25.43, Δnd=+0.0000, Δvd=-0.02)
- **S-NPH1** (nd=1.80809, vd=22.76, Δnd=+0.0029, Δvd=-2.69)

Surfaces:
- [NIKON NIKKOR Z 28mm f/2.8](../src/lens-data/nikon/NikonZ28f28.data.ts) `7`: `S-TIH14 (OHARA)`

## stored (nd=1.80518, vd=25.50)  — 1 surface, current label resolves to S-TIH14

Candidates:
- **S-TIH6** (nd=1.80518, vd=25.43, Δnd=+0.0000, Δvd=-0.07)
- **SF6** (nd=1.80518, vd=25.43, Δnd=+0.0000, Δvd=-0.07)
- **S-NPH1** (nd=1.80809, vd=22.76, Δnd=+0.0029, Δvd=-2.74)

Surfaces:
- [VOIGTLÄNDER NOKTON 35mm f/1.2 Aspherical](../src/lens-data/voigtlander/VoigtlanderNokton35mmf12.data.ts) `12`: `S-TIH14 (OHARA)`

## stored (nd=1.80610, vd=40.94)  — 1 surface, current label resolves to S-TIH53

Candidates:
- **S-LAH53** (nd=1.80610, vd=40.93, Δnd=-0.0000, Δvd=-0.01)
- **S-LAH63** (nd=1.80440, vd=39.59, Δnd=-0.0017, Δvd=-1.35)

Surfaces:
- [NIKON AF-S VR Micro-NIKKOR 105mm f/2.8G IF-ED](../src/lens-data/nikon/NikonAFS105f28G.data.ts) `21`: `S-TIH53 (OHARA), Δνd = 0.21; alt. CDGM H-LAF3B (Δνd = 0.01)`

## stored (nd=1.80809, vd=22.80)  — 1 surface, current label resolves to S-LAH51

Candidates:
- **S-NPH1** (nd=1.80809, vd=22.76, Δnd=+0.0000, Δvd=-0.04)
- **SF6** (nd=1.80518, vd=25.43, Δnd=-0.0029, Δvd=+2.63)
- **S-TIH6** (nd=1.80518, vd=25.43, Δnd=-0.0029, Δvd=+2.63)

Surfaces:
- [NIKON NIKKOR Z 100-400mm f/4.5-5.6 VR S](../src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts) `27`: `S-LAH51 (OHARA)`

## stored (nd=1.81265, vd=25.24)  — 2 surfaces, current label resolves to SF6

Candidates:
- **S-NPH1** (nd=1.80809, vd=22.76, Δnd=-0.0046, Δvd=-2.48)

Surfaces:
- [LEICA ELMARIT-R 28mm f/2.8](../src/lens-data/leica/LeicaElmarit28mmf28.data.ts) `6`: `SF6 (SCHOTT)`
- [LEICA ELMARIT-R 28mm f/2.8](../src/lens-data/leica/LeicaElmarit28mmf28.data.ts) `11`: `SF6 (SCHOTT)`

## stored (nd=1.83400, vd=37.18)  — 1 surface, current label resolves to S-LAH66

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR Z 24-120mm f/4 S](../src/lens-data/nikon/NikonNikkorZ24120mmf4S.data.ts) `6`: `S-LAH66 (OHARA)`

## stored (nd=1.83400, vd=37.19)  — 1 surface, current label resolves to S-LAH65

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [OLYMPUS ZUIKO AUTO-S 50mm f/1.2](../src/lens-data/olympus/OlympusZuikoAutoS50mmf12.data.ts) `3`: `S-LAH65 (OHARA) / TAFD25 (HOYA)`

## stored (nd=1.83481, vd=42.70)  — 1 surface, current label resolves to S-LAH65

Candidates:
- **S-LAH55V** (nd=1.83481, vd=42.73, Δnd=-0.0000, Δvd=+0.03)
- **S-LAH55** (nd=1.83481, vd=42.71, Δnd=-0.0000, Δvd=+0.01)

Surfaces:
- [CANON RF 85mm f/2 Macro IS STM](../src/lens-data/canon/CanonRF85mmf2Macro.data.ts) `21`: `S-LAH65 (OHARA)`

## stored (nd=1.84666, vd=23.80) [code=847/238]  — 1 surface, current label resolves to S-TIH14

Candidates:
- **S-TIH53** (nd=1.84666, vd=23.78, Δnd=-0.0000, Δvd=-0.02, codeΔ=0.6)
- **S-NPH53** (nd=1.84666, vd=23.88, Δnd=-0.0000, Δvd=+0.08, codeΔ=1.2)

Surfaces:
- [CANON RF 24-240mm F4-6.3 IS USM](../src/lens-data/canon/CanonRF24240mmf463.data.ts) `36`: `S-TIH14 type (847/238)`

## stored (nd=1.85026, vd=32.30)  — 1 surface, current label resolves to S-LAH58

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR Z 100-400mm f/4.5-5.6 VR S](../src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts) `36`: `S-LAH58 (OHARA) †`

## stored (nd=1.85150, vd=40.80) [code=852/408]  — 2 surfaces, current label resolves to S-LAH66

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [CANON RF 24-240mm F4-6.3 IS USM](../src/lens-data/canon/CanonRF24240mmf463.data.ts) `6`: `S-LAH66 type (852/408)`
- [CANON RF 24-240mm F4-6.3 IS USM](../src/lens-data/canon/CanonRF24240mmf463.data.ts) `8`: `S-LAH66 type (852/408)`

## stored (nd=1.85150, vd=40.80) [code=851/408]  — 1 surface, current label resolves to S-LAH65V

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [CANON RF 28-70mm F2.8 IS STM](../src/lens-data/canon/CanonRF2870mmf28.data.ts) `8`: `851408 — S-LAH65V (OHARA)`

## stored (nd=1.85150, vd=40.78)  — 1 surface, current label resolves to S-LAH51

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR Z 35mm f/1.8 S](../src/lens-data/nikon/NikonZ35f18S.data.ts) `7`: `S-LAH51 (OHARA)`

## stored (nd=1.85400, vd=40.40)  — 4 surfaces, current label resolves to S-LAH65V

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [CANON RF 15-35mm f/2.8 L IS USM](../src/lens-data/canon/CanonRF1535f28.data.ts) `3A`: `S-LAH65V (OHARA)`
- [CANON RF 15-35mm f/2.8 L IS USM](../src/lens-data/canon/CanonRF1535f28.data.ts) `27A`: `S-LAH65V (OHARA)`
- [CANON RF 24-70mm f/2.8L IS USM](../src/lens-data/canon/CanonRF2470f28.data.ts) `30A`: `S-LAH65V (OHARA) — PGM`
- [CANON RF 28-70mm F2 L USM](../src/lens-data/canon/CanonRF2870mmf2L.data.ts) `29A`: `S-LAH66 (OHARA)`

## stored (nd=1.85451, vd=39.90)  — 1 surface, current label resolves to S-LAH65V

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR Z 100-400mm f/4.5-5.6 VR S](../src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts) `14`: `S-LAH65V (OHARA)`

## stored (nd=1.85451, vd=25.15)  — 1 surface, current label resolves to S-TIM35

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR Z 24-120mm f/4 S](../src/lens-data/nikon/NikonNikkorZ24120mmf4S.data.ts) `8`: `S-TIM35 (OHARA) or K-VC89 (Sumita)`

## stored (nd=1.85478, vd=24.80)  — 4 surfaces, current label resolves to S-NPH1

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [CANON RF 15-35mm f/2.8 L IS USM](../src/lens-data/canon/CanonRF1535f28.data.ts) `7`: `S-NPH1 (OHARA)`
- [CANON RF 24-70mm f/2.8L IS USM](../src/lens-data/canon/CanonRF2470f28.data.ts) `9`: `S-NPH53 (OHARA)`
- [CANON RF 70-200mm f/2.8 L IS USM](../src/lens-data/canon/CanonRF70200f28.data.ts) `10`: `S-TIH14 (OHARA)`
- [CANON RF 70-200mm f/2.8 L IS USM](../src/lens-data/canon/CanonRF70200f28.data.ts) `28`: `S-TIH14 (OHARA)`

## stored (nd=1.86994, vd=39.82)  — 1 surface, current label resolves to TAFD30

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON AF NIKKOR 85mm f/1.4D IF](../src/lens-data/nikon/Nikon85f14D.data.ts) `15`: `Very Dense Lanthanum Flint (TAFD30)`

## stored (nd=1.87722, vd=37.00)  — 1 surface, current label resolves to S-LAH63

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [LEICA SUMMILUX 28 mm f/1.7 ASPH.](../src/lens-data/leica/Leica28mmf17.data.ts) `12A`: `S-LAH63 (OHARA)`

## stored (nd=1.90043, vd=37.40)  — 2 surfaces, current label resolves to S-LAH58

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [CANON RF 70-200mm f/2.8 L IS USM](../src/lens-data/canon/CanonRF70200f28.data.ts) `24`: `S-LAH58 (OHARA)`
- [CANON RF 85mm f/2 Macro IS STM](../src/lens-data/canon/CanonRF85mmf2Macro.data.ts) `11`: `S-LAH58 (OHARA)`

## stored (nd=1.90043, vd=37.38)  — 1 surface, current label resolves to S-LAH58

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR Z 24-120mm f/4 S](../src/lens-data/nikon/NikonNikkorZ24120mmf4S.data.ts) `19`: `S-LAH58 (OHARA)`

## stored (nd=1.90265, vd=35.73)  — 1 surface, current label resolves to S-TIH53

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR Z 14-30mm f/4 S](../src/lens-data/nikon/NikonNikkorZ1430mmf4S.data.ts) `7`: `S-TIH53 (OHARA)`

## stored (nd=1.90265, vd=35.72)  — 1 surface, current label resolves to TAFD30

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR Z 24-200mm f/4-6.3 VR](../src/lens-data/nikon/NikonNikkorZ24200mmf463VR.data.ts) `16`: `TAFD30 equiv. (190265/3572)`

## stored (nd=1.90265, vd=35.80)  — 1 surface, current label resolves to S-LAH79

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR Z 50mm f/1.2 S](../src/lens-data/nikon/NikonNikkorZ50f12.data.ts) `29`: `S-LAH79 (OHARA)`

## stored (nd=1.91082, vd=35.30)  — 2 surfaces, current label resolves to S-LAH58

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [CANON RF 135mm f/1.8 L IS USM](../src/lens-data/canon/CanonRF135f18.data.ts) `19`: `S-LAH58 (OHARA)`
- [CANON RF 24-105mm f/4 L IS USM](../src/lens-data/canon/CanonRF24105mmf4L.data.ts) `14`: `S-LAH55V (OHARA)`

## stored (nd=1.91082, vd=35.25) [code=911/353]  — 1 surface, current label resolves to S-LAH58

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [FUJIFILM FUJINON XF 200mm F2 R LM OIS WR](../src/lens-data/fujifilm/FujifilmXF200mmf2R.data.ts) `9`: `S-LAH58 family (OHARA, 911 353)`

## stored (nd=1.91082, vd=35.20)  — 1 surface, current label resolves to S-LAH79

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [LEICA SUMMILUX 28 mm f/1.7 ASPH.](../src/lens-data/leica/Leica28mmf17.data.ts) `9`: `S-LAH79 (OHARA)`

## stored (nd=1.91082, vd=35.25)  — 2 surfaces, current label resolves to S-LAH58

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [VOIGTLÄNDER ULTRON Vintage Line 28mm F2 Aspherical](../src/lens-data/voigtlander/VoigtlanderUltron28f2.data.ts) `4`: `S-LAH58 (OHARA) / N-LASF46A (Schott)`
- [VOIGTLÄNDER ULTRON Vintage Line 28mm F2 Aspherical](../src/lens-data/voigtlander/VoigtlanderUltron28f2.data.ts) `6`: `S-LAH58 (OHARA)`

## stored (nd=1.92287, vd=20.88) [code=923/209]  — 1 surface, current label resolves to S-NPH53

Candidates:
- **S-NPH2** (nd=1.92286, vd=18.90, Δnd=-0.0000, Δvd=-1.98, codeΔ=20.2)

Surfaces:
- [FUJIFILM FUJINON XF 16–80mm f/4 R OIS WR](../src/lens-data/fujifilm/FujifilmXF1680mmf4.data.ts) `10`: `High-index heavy flint (923209; OHARA S-NPH53)`

## stored (nd=1.94595, vd=18.00)  — 2 surfaces, current label resolves to S-NPH2

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR Z 50mm f/1.8 S](../src/lens-data/nikon/NikonNikkorZ50f18S.data.ts) `2`: `S-NPH2 / E-FDS2 (ultra-high-index short flint, nd = 1.946)`
- [NIKON NIKKOR Z 50mm f/1.8 S](../src/lens-data/nikon/NikonNikkorZ50f18S.data.ts) `20`: `S-NPH2 (ultra-high-index short flint, nd = 1.946)`

## stored (nd=1.94595, vd=17.98)  — 1 surface, current label resolves to S-NPH2

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR Z 24-70mm f/2.8 S](../src/lens-data/nikon/NikonZ2470f28.data.ts) `28`: `S-NPH2 (OHARA)`

## stored (nd=1.95000, vd=29.37)  — 2 surfaces, current label resolves to S-LAH79

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON AF-S NIKKOR 70-200mm f/2.8E FL ED VR](../src/lens-data/nikon/NikonNikkorAFS70200mmf28E.data.ts) `1`: `S-LAH79 (OHARA)`
- [NIKON AF-S NIKKOR 70-200mm f/2.8E FL ED VR](../src/lens-data/nikon/NikonNikkorAFS70200mmf28E.data.ts) `28`: `S-LAH79 (OHARA)`

## stored (nd=1.95375, vd=32.30)  — 5 surfaces, current label resolves to S-NPH2

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [CANON RF 24-105mm f/4 L IS USM](../src/lens-data/canon/CanonRF24105mmf4L.data.ts) `6`: `S-NPH2 (OHARA)`
- [CANON RF 24-105mm f/4 L IS USM](../src/lens-data/canon/CanonRF24105mmf4L.data.ts) `16`: `S-NPH2 (OHARA)`
- [CANON RF 85mm f/1.2L USM](../src/lens-data/canon/CanonRF85mmf12L.data.ts) `16`: `S-LAH79 (OHARA)`
- [CANON RF 85mm f/1.2L USM](../src/lens-data/canon/CanonRF85mmf12L.data.ts) `18`: `S-LAH79 (OHARA)`
- [NIKON NIKKOR Z 14-24mm f/2.8 S](../src/lens-data/nikon/NikonZ1424f28S.data.ts) `16`: `S-LAH79 (OHARA)`

## stored (nd=1.95375, vd=32.32)  — 2 surfaces, current label resolves to S-LAH79

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [CANON RF 50mm f/1.2 L USM](../src/lens-data/canon/CanonRF50mmf12L.data.ts) `9`: `S-LAH79 (OHARA)`
- [FUJIFILM FUJINON XF 80mm f/2.8 R LM OIS WR Macro](../src/lens-data/fujifilm/FujifilmXF80f28.data.ts) `25`: `S-LAH79 (OHARA ultra-high-index lanthanum)`

## stored (nd=1.95375, vd=32.33)  — 5 surfaces, current label resolves to S-LAH79

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR Z 24-200mm f/4-6.3 VR](../src/lens-data/nikon/NikonNikkorZ24200mmf463VR.data.ts) `7`: `S-LAH79 (195375/3233)`
- [NIKON NIKKOR Z 24-200mm f/4-6.3 VR](../src/lens-data/nikon/NikonNikkorZ24200mmf463VR.data.ts) `21`: `S-LAH79 (195375/3233)`
- [NIKON NIKKOR Z 24-200mm f/4-6.3 VR](../src/lens-data/nikon/NikonNikkorZ24200mmf463VR.data.ts) `26`: `S-LAH79 (195375/3233)`
- [NIKON NIKKOR Z MC 105mm f/2.8 VR S](../src/lens-data/nikon/NikonZ105f28.data.ts) `19`: `S-LAH79 (OHARA)`
- [NIKON NIKKOR Z 35mm f/1.8 S](../src/lens-data/nikon/NikonZ35f18S.data.ts) `3`: `S-LAH79 (OHARA)`

## stored (nd=1.95375, vd=32.30) [code=954/323]  — 1 surface, current label resolves to S-LAH79

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON NIKKOR Z 35mm f/1.2 S](../src/lens-data/nikon/NikonNikkorZ35mmf12S.data.ts) `9`: `S-LAH79 (954323, OHARA S-LAH79)`

## stored (nd=1.95906, vd=17.47) [PgF=0.6614 (dPgF=0.0470)]  — 2 surfaces, current label resolves to S-NPH53

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [FUJIFILM FUJINON XF 50mm f/1.0 R WR](../src/lens-data/fujifilm/FujifilmXF50f1.data.ts) `7`: `S-NPH53 (Ohara)`
- [FUJIFILM FUJINON XF 80mm f/2.8 R LM OIS WR Macro](../src/lens-data/fujifilm/FujifilmXF80f28.data.ts) `28`: `S-NPH53 (OHARA ultra-high-index dense flint, lowest νd in design)`

## stored (nd=2.00060, vd=25.40)  — 1 surface, current label resolves to S-NPH2

Candidates:
- **S-LAH79** (nd=2.00330, vd=28.27, Δnd=+0.0027, Δvd=+2.87)

Surfaces:
- [NIKON NIKKOR Z 14-24mm f/2.8 S](../src/lens-data/nikon/NikonZ1424f28S.data.ts) `9`: `S-NPH2 (OHARA) — ultra-high-index dense flint`

## stored (nd=2.00069, vd=25.50)  — 3 surfaces, current label resolves to S-NPH1

Candidates:
- **S-LAH79** (nd=2.00330, vd=28.27, Δnd=+0.0026, Δvd=+2.77)

Surfaces:
- [CANON RF 24-240mm F4-6.3 IS USM](../src/lens-data/canon/CanonRF24240mmf463.data.ts) `20`: `S-NPH1 type (001/255)`
- [CANON RF 24-70mm f/2.8L IS USM](../src/lens-data/canon/CanonRF2470f28.data.ts) `20`: `S-NPH2 (OHARA)`
- [NIKON NIKKOR Z 100-400mm f/4.5-5.6 VR S](../src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts) `29`: `S-NPH2 (OHARA)`

## stored (nd=2.00100, vd=29.10)  — 4 surfaces, current label resolves to S-NPH2

Candidates:
- **S-LAH79** (nd=2.00330, vd=28.27, Δnd=+0.0023, Δvd=-0.83)

Surfaces:
- [CANON RF 24-240mm F4-6.3 IS USM](../src/lens-data/canon/CanonRF24240mmf463.data.ts) `18`: `S-NPH2 type (001/291)`
- [CANON RF 24-240mm F4-6.3 IS USM](../src/lens-data/canon/CanonRF24240mmf463.data.ts) `23`: `S-NPH2 type (001/291)`
- [CANON RF 28-70mm F2 L USM](../src/lens-data/canon/CanonRF2870mmf2L.data.ts) `32`: `S-NPH2 (OHARA)`
- [NIKON AF-S NIKKOR 24-70mm f/2.8E ED VR](../src/lens-data/nikon/NikonNikkorAFS2470mmf28E.data.ts) `6`: `S-NPH2 (OHARA) — HRI`

## stored (nd=2.00100, vd=29.12)  — 4 surfaces, current label resolves to S-NPH2

Candidates:
- **S-LAH79** (nd=2.00330, vd=28.27, Δnd=+0.0023, Δvd=-0.85)

Surfaces:
- [NIKON AF-S NIKKOR 120-300mm f/2.8E FL ED SR VR](../src/lens-data/nikon/NikonNikkorAFS120300mmf28.data.ts) `29`: `OHARA S-NPH2`
- [NIKON AF-S NIKKOR 120-300mm f/2.8E FL ED SR VR](../src/lens-data/nikon/NikonNikkorAFS120300mmf28.data.ts) `40`: `OHARA S-NPH2`
- [NIKON NIKKOR Z 24-200mm f/4-6.3 VR](../src/lens-data/nikon/NikonNikkorZ24200mmf463VR.data.ts) `18`: `S-NPH53 (200100/2912)`
- [NIKON NIKKOR Z 28mm f/2.8](../src/lens-data/nikon/NikonZ28f28.data.ts) `6`: `S-NPH1 (OHARA)`

## stored (nd=2.05090, vd=26.90)  — 2 surfaces, current label resolves to S-NPH2

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [CANON RF 70-200mm f/2.8 L IS USM](../src/lens-data/canon/CanonRF70200f28.data.ts) `18`: `S-NPH2 (OHARA)`
- [CANON RF 70-200mm f/2.8 L IS USM](../src/lens-data/canon/CanonRF70200f28.data.ts) `22`: `S-NPH2 (OHARA)`

---

## Summary

- **31** (nd, vd) groups have at least one candidate (49 surfaces) — actionable relabels.
- **80** (nd, vd) groups have NO candidate (113 surfaces) — needs patent verification or Unmatched relabeling.
