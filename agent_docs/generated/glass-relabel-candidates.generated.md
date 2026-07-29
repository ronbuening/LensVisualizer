# Glass Relabel Candidates (auto-generated)

Companion to [catalog-mismatches.generated.md](catalog-mismatches.generated.md). For each rejected
catalog mismatch, this report searches the catalog for a *better* candidate whose nd AND vd
both match the stored values within tolerance (nd ±0.003, vd ±2).

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

**Scope**: 69 mismatched surfaces across 58 unique groups.

## stored (nd=1.46000, vd=65.80)  — 1 surface, current label resolves to FK3

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [RODENSTOCK APO-SIRONAR-W 150mm f/5.6](../../src/lens-data/rodenstock/RodenstockApoSironarW150mmf56.data.ts) `9`: `FK3 class (Schott legacy equivalent; patent-rounded nd/vd)`

## stored (nd=1.51680, vd=64.00)  — 1 surface, current label resolves to S-NSL3

Candidates:
- **J-BK7** (nd=1.51680, vd=63.88, Δnd=+0.0000, Δvd=-0.12)
- **N-BK7** (nd=1.51680, vd=64.17, Δnd=+0.0000, Δvd=+0.17)
- **K-BK7** (nd=1.51633, vd=64.10, Δnd=-0.0005, Δvd=+0.10)
- **S-BSL7** (nd=1.51624, vd=64.14, Δnd=-0.0006, Δvd=+0.14)
- **BK7G18** (nd=1.51975, vd=63.58, Δnd=+0.0029, Δvd=-0.42)

Surfaces:
- [NIKON NIKKOR Z 50mm f/1.2 S](../../src/lens-data/nikon/NikonNikkorZ50f12.data.ts) `32A`: `S-NSL3 (OHARA)`

## stored (nd=1.51742, vd=52.43)  — 1 surface, current label resolves to S-NSL3

Candidates:
- **E-CF6** (nd=1.51742, vd=52.15, Δnd=-0.0000, Δvd=-0.28)
- **S-NSL36** (nd=1.51742, vd=52.43, Δnd=-0.0000, Δvd=+0.00)

Surfaces:
- [FUJIFILM FUJINON XF 90mm f/2 R LM WR](../../src/lens-data/fujifilm/FujifilmXF90mmf2.data.ts) `19`: `S-NSL3 (OHARA)`

## stored (nd=1.51742, vd=52.15)  — 1 surface, current label resolves to S-NSL3

Candidates:
- **E-CF6** (nd=1.51742, vd=52.15, Δnd=-0.0000, Δvd=+0.00)
- **S-NSL36** (nd=1.51742, vd=52.43, Δnd=-0.0000, Δvd=+0.28)

Surfaces:
- [LEICA APO-MACRO-ELMARIT-TL 60mm f/2.8 ASPH.](../../src/lens-data/leica/LeicaAPOMacroElmaritTL60mmf28.data.ts) `14`: `S-NSL3 (OHARA)`

## stored (nd=1.51742, vd=52.20)  — 1 surface, current label resolves to S-NSL3

Candidates:
- **E-CF6** (nd=1.51742, vd=52.15, Δnd=-0.0000, Δvd=-0.05)
- **S-NSL36** (nd=1.51742, vd=52.43, Δnd=-0.0000, Δvd=+0.23)

Surfaces:
- [NIKON NIKKOR Z DX 18-140mm f/3.5-6.3 VR](../../src/lens-data/nikon/NikonZDX18140mmf3563VR.data.ts) `16`: `S-NSL3 (OHARA, Δνd ≈ 0.23)`

## stored (nd=1.51742, vd=52.40)  — 1 surface, current label resolves to S-NSL3

Candidates:
- **E-CF6** (nd=1.51742, vd=52.15, Δnd=-0.0000, Δvd=-0.25)
- **S-NSL36** (nd=1.51742, vd=52.43, Δnd=-0.0000, Δvd=+0.03)

Surfaces:
- [PENTAX FA 31mm f/1.8 AL Limited](../../src/lens-data/pentax/PentaxFA31mmf18ALLtd.data.ts) `9`: `S-NSL3 (OHARA)`

## stored (nd=1.51823, vd=59.00)  — 1 surface, current label resolves to S-NSL36

Candidates:
- **J-K3** (nd=1.51823, vd=58.82, Δnd=+0.0000, Δvd=-0.18)
- **E-C3** (nd=1.51823, vd=58.96, Δnd=-0.0000, Δvd=-0.04)
- **S-NSL3** (nd=1.51823, vd=58.90, Δnd=-0.0000, Δvd=-0.10)

Surfaces:
- [LEICA APO-VARIO-ELMARIT-SL 90-280mm f/2.8-4](../../src/lens-data/leica/LeicaAPOVarioElmaritSL90280mmf284.data.ts) `31`: `S-NSL36 (OHARA)`

## stored (nd=1.52000, vd=64.20)  — 1 surface, current label resolves to N-BK7

Candidates:
- **BK7G18** (nd=1.51975, vd=63.58, Δnd=-0.0003, Δvd=-0.62)

Surfaces:
- [RODENSTOCK APO-SIRONAR-W 150mm f/5.6](../../src/lens-data/rodenstock/RodenstockApoSironarW150mmf56.data.ts) `1`: `N-BK7 class (Schott equivalent; patent-rounded nd/vd)`

## stored (nd=1.56865, vd=58.60)  — 1 surface, current label resolves to S-BAL14

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [FUJIFILM FUJINON 23mm f/2 (Fujifilm X100)](../../src/lens-data/fujifilm/FujifilmX10023mmf2.data.ts) `10A`: `S-BAL14 (OHARA)`

## stored (nd=1.56883, vd=56.04)  — 1 surface, current label resolves to S-BAL2

Candidates:
- **S-BAL14** (nd=1.56883, vd=56.36, Δnd=+0.0000, Δvd=+0.32)
- **N-BAK4** (nd=1.56883, vd=55.98, Δnd=-0.0000, Δvd=-0.06)

Surfaces:
- [LEICA APO-MACRO-ELMARIT-TL 60mm f/2.8 ASPH.](../../src/lens-data/leica/LeicaAPOMacroElmaritTL60mmf28.data.ts) `16`: `S-BAL2 (OHARA)`

## stored (nd=1.56883, vd=56.00)  — 1 surface, current label resolves to S-BAL2

Candidates:
- **S-BAL14** (nd=1.56883, vd=56.36, Δnd=+0.0000, Δvd=+0.36)
- **N-BAK4** (nd=1.56883, vd=55.98, Δnd=-0.0000, Δvd=-0.02)

Surfaces:
- [NIKON AF-S NIKKOR 28mm f/1.4 E ED](../../src/lens-data/nikon/NikonAFS28f14E.data.ts) `8`: `S-BAL2 (OHARA)`

## stored (nd=1.57850, vd=41.70)  — 1 surface, current label resolves to BAF3

Candidates:
- **S-TIL25** (nd=1.58144, vd=40.75, Δnd=+0.0029, Δvd=-0.95)
- **PBL25** (nd=1.58144, vd=40.75, Δnd=+0.0029, Δvd=-0.95)
- **E-FL5** (nd=1.58144, vd=40.89, Δnd=+0.0029, Δvd=-0.81)

Surfaces:
- [CANON SERENAR 28mm f/3.5](../../src/lens-data/canon/CanonSerenar28mmf35.data.ts) `6`: `BaF3 (Schott)`

## stored (nd=1.58000, vd=59.46)  — 1 surface, current label resolves to S-BAL42

Candidates:
- **Q-SK52S** (nd=1.58286, vd=59.51, Δnd=+0.0029, Δvd=+0.05)

Surfaces:
- [SONY SONNAR T* FE 35mm f/2.8 ZA](../../src/lens-data/sony/SonyFE35mmf28ZA.data.ts) `7A`: `L-BAL42 (OHARA)`

## stored (nd=1.60718, vd=37.80)  — 1 surface, current label resolves to F5

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [LEICA ELMAR-M 135mm f/4](../../src/lens-data/leica/LeicaElmarM135mmf4.data.ts) `5`: `F5 class (Schott; patent e-line value stored)`

## stored (nd=1.60752, vd=38.10)  — 1 surface, current label resolves to F5

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON ULTRA-MICRO-NIKKOR 29.5mm f/1.2](../../src/lens-data/nikon/NikonUltraMicroNikkor295mmf12.data.ts) `3`: `F5 class flint (patent e-line index stored)`

## stored (nd=1.61659, vd=36.60)  — 2 surfaces, current label resolves to F2

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [OLYMPUS OM ZUIKO AUTO-W 21mm f/2](../../src/lens-data/olympus/OlympusZuikoAuto21mmf2.data.ts) `7`: `F2 / TIF1 (Schott / OHARA)`
- [OLYMPUS OM ZUIKO AUTO-W 21mm f/2](../../src/lens-data/olympus/OlympusZuikoAuto21mmf2.data.ts) `9`: `F2 / TIF1 (Schott / OHARA)`

## stored (nd=1.62041, vd=60.30)  — 2 surfaces, current label resolves to S-BSM28

Candidates:
- **N-SK16** (nd=1.62041, vd=60.32, Δnd=-0.0000, Δvd=+0.02)
- **S-BSM16** (nd=1.62041, vd=60.29, Δnd=+0.0000, Δvd=-0.01)

Surfaces:
- [LEICA APO-VARIO-ELMARIT-SL 90-280mm f/2.8-4](../../src/lens-data/leica/LeicaAPOVarioElmaritSL90280mmf284.data.ts) `32`: `S-BSM28 (OHARA)`
- [LEICA APO-VARIO-ELMARIT-SL 90-280mm f/2.8-4](../../src/lens-data/leica/LeicaAPOVarioElmaritSL90280mmf284.data.ts) `41`: `S-BSM28 (OHARA)`

## stored (nd=1.62228, vd=63.90) [code=622/639]  — 1 surface, current label resolves to S-PHM52

Candidates:
- **PCD40** (nd=1.61997, vd=63.88, Δnd=-0.0023, Δvd=-0.02, codeΔ=2.2)

Surfaces:
- [SONY FE 14mm f/1.8 GM](../../src/lens-data/sony/SonyFE14mmf18GM.data.ts) `26`: `S-PHM52-class phosphate crown (OHARA; soft match, 622/639)`

## stored (nd=1.62299, vd=58.10)  — 1 surface, current label resolves to S-PHM52Q

Candidates:
- **S-BSM15** (nd=1.62299, vd=58.17, Δnd=+0.0000, Δvd=+0.07)
- **BACD15** (nd=1.62299, vd=58.12, Δnd=+0.0000, Δvd=+0.02)
- **S-BSM10** (nd=1.62280, vd=57.05, Δnd=-0.0002, Δvd=-1.05)
- **N-SK10** (nd=1.62278, vd=56.98, Δnd=-0.0002, Δvd=-1.12)

Surfaces:
- [PANASONIC LEICA DG SUMMILUX 9mm f/1.7 ASPH](../../src/lens-data/panasonic/PanasonicLeicaDG9mmf17.data.ts) `20`: `S-PHM52Q (OHARA)`

## stored (nd=1.62408, vd=36.11)  — 1 surface, current label resolves to F2

Candidates:
- **H-F6** (nd=1.62495, vd=35.59, Δnd=+0.0009, Δvd=-0.52)
- **E-F1** (nd=1.62588, vd=35.74, Δnd=+0.0018, Δvd=-0.37)
- **F1** (nd=1.62588, vd=35.60, Δnd=+0.0018, Δvd=-0.51)

Surfaces:
- [LEICA ELMARIT-R 28mm f/2.8](../../src/lens-data/leica/LeicaElmarit28mmf28.data.ts) `13`: `F2 (SCHOTT)`

## stored (nd=1.62410, vd=60.10)  — 1 surface, current label resolves to N-SK16

Candidates:
- **BACD15** (nd=1.62299, vd=58.12, Δnd=-0.0011, Δvd=-1.98)
- **S-BSM15** (nd=1.62299, vd=58.17, Δnd=-0.0011, Δvd=-1.93)

Surfaces:
- [LEICA ELMARIT-R 35mm f/2.8](../../src/lens-data/leica/LeicaElmaritR35mmf28.data.ts) `6`: `SK16 / N-SK16 class (Schott legacy dense barium crown; patent n_e)`

## stored (nd=1.62606, vd=39.10) [code=626/391]  — 1 surface, current label resolves to FD60

Candidates:
- **H-BaF8** (nd=1.62604, vd=39.07, Δnd=-0.0000, Δvd=-0.03, codeΔ=0.3)

Surfaces:
- [NIKON AI NIKKOR 135mm f/2](../../src/lens-data/nikon/NikonAI135mmf2.data.ts) `3`: `HOYA FD60 (626/391)`

## stored (nd=1.65000, vd=39.60)  — 1 surface, current label resolves to N-KZFS5

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [RODENSTOCK APO-SIRONAR-W 150mm f/5.6](../../src/lens-data/rodenstock/RodenstockApoSironarW150mmf56.data.ts) `11`: `N-KZFS5 class (Schott equivalent; patent-rounded nd/vd)`

## stored (nd=1.65844, vd=50.90) [code=658/509]  — 1 surface, current label resolves to BACD14

Candidates:
- **N-SSK5** (nd=1.65844, vd=50.88, Δnd=+0.0000, Δvd=-0.02, codeΔ=0.6)
- **S-BSM25** (nd=1.65844, vd=50.88, Δnd=+0.0000, Δvd=-0.02, codeΔ=0.7)
- **BACED5** (nd=1.65844, vd=50.86, Δnd=-0.0000, Δvd=-0.04, codeΔ=0.8)
- **J-SSK5** (nd=1.65844, vd=50.84, Δnd=+0.0000, Δvd=-0.06, codeΔ=1.0)

Surfaces:
- [PENTAX F 85mm f/2.8 Soft](../../src/lens-data/pentax/PentaxF85mmf28Soft.data.ts) `1`: `BACD14 (HOYA) / N-SSK5 equivalent (658509)`

## stored (nd=1.67270, vd=32.17) [PgF=0.5955 (dPgF=0.0058)]  — 1 surface, current label resolves to S-NBH52

Candidates:
- **S-TIM25** (nd=1.67270, vd=32.10, Δnd=-0.0000, Δvd=-0.07, ΔPgF=+0.0036)
- **E-FD5** (nd=1.67270, vd=32.17, Δnd=-0.0000, Δvd=+0.00, ΔPgF=+0.0001)
- **SF5** (nd=1.67270, vd=32.21, Δnd=-0.0000, Δvd=+0.04, ΔPgF=-0.0054)
- **N-SF5** (nd=1.67271, vd=32.25, Δnd=+0.0000, Δvd=+0.08, ΔPgF=+0.0014)

Surfaces:
- [SIGMA 85mm f/1.4 DG HSM | Art](../../src/lens-data/sigma/Sigma85mmf14Art.data.ts) `24`: `S-NBH52 (OHARA)`

## stored (nd=1.67340, vd=46.90)  — 1 surface, current label resolves to BAF13

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [LEICA ELMARIT-R 35mm f/2.8](../../src/lens-data/leica/LeicaElmaritR35mmf28.data.ts) `10`: `BaF13-class (Schott legacy barium flint, inferred; patent n_e)`

## stored (nd=1.67764, vd=32.00)  — 1 surface, current label resolves to E-FD5

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [LEICA MACRO-ELMARIT-R 60mm f/2.8](../../src/lens-data/leica/LeicaMacroElmaritR60mmf28.data.ts) `4`: `E-FD5 / S-TIM25 class (e-line catalog match; patent vendor not named)`

## stored (nd=1.68458, vd=30.88) [code=685/309]  — 1 surface, current label resolves to S-TIM28

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [FUJIFILM FUJINON XF 16-55mm f/2.8 R LM WR](../../src/lens-data/fujifilm/FujifilmXF1655mmf28R.data.ts) `13A`: `Near OHARA L-TIM28 (685309)`

## stored (nd=1.68893, vd=31.10)  — 1 surface, current label resolves to FD60

Candidates:
- **M-FD80** (nd=1.68893, vd=31.16, Δnd=-0.0000, Δvd=+0.06)
- **E-FD8** (nd=1.68893, vd=31.16, Δnd=-0.0000, Δvd=+0.06)
- **S-TIM28** (nd=1.68893, vd=31.08, Δnd=+0.0000, Δvd=-0.02)
- **N-SF8** (nd=1.68894, vd=31.31, Δnd=+0.0000, Δvd=+0.21)

Surfaces:
- [NIKON 35mm f/2.8 (Nikon L35AF)](../../src/lens-data/nikon/NikonL35AF35mmf28.data.ts) `5`: `FD60 / S-TIM28 (1689/311)`

## stored (nd=1.69451, vd=54.80)  — 1 surface, current label resolves to S-LAL9

Candidates:
- **LAC13** (nd=1.69350, vd=53.34, Δnd=-0.0010, Δvd=-1.46)
- **S-LAL13** (nd=1.69350, vd=53.21, Δnd=-0.0010, Δvd=-1.59)
- **H-LAK6A** (nd=1.69350, vd=53.38, Δnd=-0.0010, Δvd=-1.42)
- **M-LAC130** (nd=1.69350, vd=53.20, Δnd=-0.0010, Δvd=-1.60)
- **L-LAL13** (nd=1.69350, vd=53.19, Δnd=-0.0010, Δvd=-1.61)

Surfaces:
- [NIKON ULTRA-MICRO-NIKKOR 29.5mm f/1.2](../../src/lens-data/nikon/NikonUltraMicroNikkor295mmf12.data.ts) `7`: `LAK9 / S-LAL9 class lanthanum crown (patent e-line index stored)`

## stored (nd=1.69680, vd=55.52)  — 2 surfaces, current label resolves to S-TIM35

Candidates:
- **N-LAK14** (nd=1.69680, vd=55.41, Δnd=+0.0000, Δvd=-0.11)
- **H-LAK12** (nd=1.69680, vd=56.18, Δnd=-0.0000, Δvd=+0.66)
- **K-LaK14** (nd=1.69680, vd=55.60, Δnd=+0.0000, Δvd=+0.08)
- **LAC14** (nd=1.69680, vd=55.46, Δnd=+0.0000, Δvd=-0.06)
- **S-LAL14** (nd=1.69680, vd=55.53, Δnd=-0.0000, Δvd=+0.01)

Surfaces:
- [NIKON AF-S NIKKOR 120-300mm f/2.8 E FL ED SR VR](../../src/lens-data/nikon/NikonNikkorAFS120300mmf28.data.ts) `9`: `OHARA S-TIM35`
- [NIKON NIKKOR Z 135mm f/1.8 S Plena](../../src/lens-data/nikon/NikonZ135f18.data.ts) `13`: `Barium crown (near S-BAH27)`

## stored (nd=1.72047, vd=34.71)  — 1 surface, current label resolves to S-LAM52

Candidates:
- **S-NBH8** (nd=1.72047, vd=34.71, Δnd=+0.0000, Δvd=+0.00)
- **N-KZFS8** (nd=1.72047, vd=34.70, Δnd=+0.0000, Δvd=-0.01)

Surfaces:
- [NIKON AF-S NIKKOR 120-300mm f/2.8 E FL ED SR VR](../../src/lens-data/nikon/NikonNikkorAFS120300mmf28.data.ts) `6`: `OHARA S-LAM52 (≈Schott N-KZFS8)`

## stored (nd=1.72825, vd=28.50) [code=728/285]  — 1 surface, current label resolves to FD60

Candidates:
- **S-TIH10** (nd=1.72825, vd=28.46, Δnd=-0.0000, Δvd=-0.04, codeΔ=0.6)
- **SF10** (nd=1.72825, vd=28.41, Δnd=+0.0000, Δvd=-0.09, codeΔ=1.2)
- **E-FD10** (nd=1.72825, vd=28.32, Δnd=-0.0000, Δvd=-0.18, codeΔ=2.0)
- **H-ZF4A** (nd=1.72825, vd=28.32, Δnd=+0.0000, Δvd=-0.18, codeΔ=2.1)

Surfaces:
- [PENTAX F 85mm f/2.8 Soft](../../src/lens-data/pentax/PentaxF85mmf28Soft.data.ts) `4`: `FD60 (HOYA) / S-TIH10 equivalent (728285)`

## stored (nd=1.72916, vd=54.67)  — 2 surfaces, current label resolves to TAC4

Candidates:
- **TAC8** (nd=1.72916, vd=54.67, Δnd=+0.0000, Δvd=+0.00)
- **S-LAL19** (nd=1.72916, vd=54.10, Δnd=-0.0000, Δvd=-0.57)
- **S-LAL18** (nd=1.72916, vd=54.68, Δnd=-0.0000, Δvd=+0.01)
- **M-TAC80** (nd=1.72903, vd=54.04, Δnd=-0.0001, Δvd=-0.63)

Surfaces:
- [NIKON AF-S NIKKOR 200-500mm f/5.6 E ED VR](../../src/lens-data/nikon/NikonNikkorAFS200500mmf56.data.ts) `7`: `TAC4 (HOYA) / S-LAL18 (OHARA)`
- [NIKON AF-S NIKKOR 200-500mm f/5.6 E ED VR](../../src/lens-data/nikon/NikonNikkorAFS200500mmf56.data.ts) `27`: `TAC4 (HOYA) / S-LAL18 (OHARA)`

## stored (nd=1.73234, vd=54.70) [code=732/547]  — 1 surface, current label resolves to S-LAL18

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [SONY FE 14mm f/1.8 GM](../../src/lens-data/sony/SonyFE14mmf18GM.data.ts) `3`: `S-LAL18-class (OHARA; patent index aligns with catalog ne, 732/547)`

## stored (nd=1.74795, vd=44.50)  — 1 surface, current label resolves to S-LAM2

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [LEICA MACRO-ELMARIT-R 60mm f/2.8](../../src/lens-data/leica/LeicaMacroElmaritR60mmf28.data.ts) `1`: `LAF2 / S-LAM2 class (e-line catalog match; patent vendor not named)`

## stored (nd=1.74810, vd=52.30)  — 1 surface, current label resolves to S-LAM60

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON AF NIKKOR 85mm f/1.4 D IF](../../src/lens-data/nikon/Nikon85f14D.data.ts) `19`: `S-LAM60 (OHARA, patent nd/vd match)`

## stored (nd=1.75211, vd=25.00)  — 1 surface, current label resolves to S-TIH4

Candidates:
- **FF8** (nd=1.75211, vd=25.05, Δnd=-0.0000, Δvd=+0.05)

Surfaces:
- [PANASONIC LEICA DG SUMMILUX 9mm f/1.7 ASPH](../../src/lens-data/panasonic/PanasonicLeicaDG9mmf17.data.ts) `10`: `S-TIH4 (OHARA)`

## stored (nd=1.77250, vd=49.66) [code=773/497]  — 3 surfaces, current label resolves to LAC14

Candidates:
- **N-LAF34** (nd=1.77250, vd=49.62, Δnd=+0.0000, Δvd=-0.04, codeΔ=1.3)
- **E-LASF016** (nd=1.77250, vd=49.61, Δnd=-0.0000, Δvd=-0.05, codeΔ=1.4)
- **S-LAH66** (nd=1.77250, vd=49.60, Δnd=-0.0000, Δvd=-0.06, codeΔ=1.5)
- **S-LAH66N** (nd=1.77250, vd=49.55, Δnd=-0.0000, Δvd=-0.11, codeΔ=2.0)
- **M-TAF105** (nd=1.77250, vd=49.50, Δnd=+0.0000, Δvd=-0.16, codeΔ=2.5)

Surfaces:
- [OLYMPUS ZUIKO AUTO-MACRO 50mm f/2](../../src/lens-data/olympus/OlympusZuikoAutoMacro50mmf2.data.ts) `5`: `LAC14 (773/497)`
- [OLYMPUS ZUIKO AUTO-MACRO 50mm f/2](../../src/lens-data/olympus/OlympusZuikoAutoMacro50mmf2.data.ts) `12`: `LAC14 (773/497)`
- [OLYMPUS ZUIKO AUTO-MACRO 50mm f/2](../../src/lens-data/olympus/OlympusZuikoAutoMacro50mmf2.data.ts) `14`: `LAC14 (773/497)`

## stored (nd=1.77621, vd=49.60)  — 1 surface, current label resolves to S-LAH66

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [SONY FE 70-200mm f/2.8 GM OSS II](../../src/lens-data/sony/SonyFE70200mmf28GMII.data.ts) `7`: `S-LAH66 class (OHARA) — lanthanum crown`

## stored (nd=1.78100, vd=44.50)  — 1 surface, current label resolves to S-LAH51

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [MINOLTA MD ROKKOR 50mm f/1.4](../../src/lens-data/minolta/MinoltaRokkor50mmf14MD.data.ts) `10`: `S-LAH51 (OHARA)`

## stored (nd=1.79227, vd=47.15)  — 1 surface, current label resolves to N-LAF21

Candidates:
- **TAF2** (nd=1.79450, vd=45.39, Δnd=+0.0022, Δvd=-1.76)
- **J-LASF017** (nd=1.79500, vd=45.31, Δnd=+0.0027, Δvd=-1.84)
- **Q-LASFPH3S** (nd=1.79526, vd=45.25, Δnd=+0.0030, Δvd=-1.90)

Surfaces:
- [LEICA ELMARIT-R 28mm f/2.8](../../src/lens-data/leica/LeicaElmarit28mmf28.data.ts) `5`: `LaF21 (SCHOTT)`

## stored (nd=1.79631, vd=40.90)  — 1 surface, current label resolves to S-LAH52

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [NIKON AF NIKKOR 85mm f/1.4 D IF](../../src/lens-data/nikon/Nikon85f14D.data.ts) `5`: `S-LAH52 (OHARA, patent nd/vd match)`

## stored (nd=1.80100, vd=34.96)  — 2 surfaces, current label resolves to NBFD3

Candidates:
- **J-LAF016** (nd=1.80100, vd=34.92, Δnd=+0.0000, Δvd=-0.04)
- **S-LAM66** (nd=1.80100, vd=34.97, Δnd=-0.0000, Δvd=+0.01)
- **E-LAFH2** (nd=1.80384, vd=33.89, Δnd=+0.0028, Δvd=-1.07)

Surfaces:
- [NIKON AF-S MICRO-NIKKOR 60mm f/2.8 G ED](../../src/lens-data/nikon/NikonAFSMicroNikkor60f28G.data.ts) `20`: `NBFD3 (HOYA)`
- [NIKON PC-E NIKKOR 24mm f/3.5 D ED](../../src/lens-data/nikon/NikonPCENikkor24mmf35DED.data.ts) `4`: `S-LAH63 (OHARA)`

## stored (nd=1.80100, vd=34.90)  — 1 surface, current label resolves to S-LAH52

Candidates:
- **J-LAF016** (nd=1.80100, vd=34.92, Δnd=+0.0000, Δvd=+0.02)
- **S-LAM66** (nd=1.80100, vd=34.97, Δnd=-0.0000, Δvd=+0.07)
- **E-LAFH2** (nd=1.80384, vd=33.89, Δnd=+0.0028, Δvd=-1.01)

Surfaces:
- [NIKON AF-S NIKKOR 80-400mm f/4.5-5.6 G ED VR](../../src/lens-data/nikon/NikonNikkorAFS80400mmf4556G.data.ts) `6`: `S-LAH52 (OHARA)`

## stored (nd=1.80400, vd=46.60)  — 3 surfaces, current label resolves to S-LAH52

Candidates:
- **H-ZLAF50D** (nd=1.80400, vd=46.58, Δnd=-0.0000, Δvd=-0.02)
- **S-LAH65** (nd=1.80400, vd=46.57, Δnd=-0.0000, Δvd=-0.03)
- **S-LAH65VS** (nd=1.80400, vd=46.53, Δnd=-0.0000, Δvd=-0.07)
- **S-LAH65V** (nd=1.80400, vd=46.58, Δnd=-0.0000, Δvd=-0.02)
- **TAF3D** (nd=1.80420, vd=46.50, Δnd=+0.0002, Δvd=-0.10)

Surfaces:
- [NIKON AF-S NIKKOR 120-300mm f/2.8 E FL ED SR VR](../../src/lens-data/nikon/NikonNikkorAFS120300mmf28.data.ts) `11`: `OHARA S-LAH52`
- [NIKON AF-S NIKKOR 120-300mm f/2.8 E FL ED SR VR](../../src/lens-data/nikon/NikonNikkorAFS120300mmf28.data.ts) `24`: `OHARA S-LAH52`
- [NIKON AF-S NIKKOR 120-300mm f/2.8 E FL ED SR VR](../../src/lens-data/nikon/NikonNikkorAFS120300mmf28.data.ts) `42`: `OHARA S-LAH52`

## stored (nd=1.80518, vd=25.41)  — 1 surface, current label resolves to S-LAH63Q

Candidates:
- **H-ZF7LA** (nd=1.80518, vd=25.46, Δnd=-0.0000, Δvd=+0.05)
- **S-TIH6** (nd=1.80518, vd=25.43, Δnd=+0.0000, Δvd=+0.02)
- **FD60** (nd=1.80518, vd=25.46, Δnd=+0.0000, Δvd=+0.05)
- **SF6** (nd=1.80518, vd=25.43, Δnd=+0.0000, Δvd=+0.02)

Surfaces:
- [NIKON AF-S NIKKOR 120-300mm f/2.8 E FL ED SR VR](../../src/lens-data/nikon/NikonNikkorAFS120300mmf28.data.ts) `36`: `OHARA S-LAH63Q type`

## stored (nd=1.80610, vd=33.30)  — 1 surface, current label resolves to S-TIH6

Candidates:
- **NBFD15** (nd=1.80610, vd=33.27, Δnd=-0.0000, Δvd=-0.03)
- **E-LAFH2** (nd=1.80384, vd=33.89, Δnd=-0.0023, Δvd=+0.59)

Surfaces:
- [NIKON AF-S NIKKOR 28mm f/1.4 E ED](../../src/lens-data/nikon/NikonAFS28f14E.data.ts) `21`: `S-TIH6 (OHARA)`

## stored (nd=1.83000, vd=42.72)  — 2 surfaces, current label resolves to S-LAH55V

**No catalog candidate within tolerance** — needs per-lens follow-up.

Surfaces:
- [SONY SONNAR T* FE 35mm f/2.8 ZA](../../src/lens-data/sony/SonyFE35mmf28ZA.data.ts) `2`: `S-LAH55V (OHARA)`
- [SONY SONNAR T* FE 35mm f/2.8 ZA](../../src/lens-data/sony/SonyFE35mmf28ZA.data.ts) `9`: `S-LAH55V (OHARA)`

## stored (nd=1.83400, vd=37.20)  — 2 surfaces, current label resolves to S-LAH55V

Candidates:
- **S-LAH60** (nd=1.83400, vd=37.16, Δnd=-0.0000, Δvd=-0.04)
- **S-LAH60V** (nd=1.83400, vd=37.21, Δnd=-0.0000, Δvd=+0.01)
- **NBFD10** (nd=1.83400, vd=37.34, Δnd=+0.0000, Δvd=+0.14)
- **M-NBFD10** (nd=1.83441, vd=37.28, Δnd=+0.0004, Δvd=+0.08)

Surfaces:
- [CANON RF 15-35mm f/2.8 L IS USM](../../src/lens-data/canon/CanonRF1535f28.data.ts) `19`: `S-LAH55V (OHARA)`
- [CANON RF 85mm f/2 Macro IS STM](../../src/lens-data/canon/CanonRF85mmf2Macro.data.ts) `19`: `S-LAH55 (OHARA)`

## stored (nd=1.83400, vd=37.16)  — 1 surface, current label resolves to S-LAH55V

Candidates:
- **S-LAH60** (nd=1.83400, vd=37.16, Δnd=-0.0000, Δvd=+0.00)
- **S-LAH60V** (nd=1.83400, vd=37.21, Δnd=-0.0000, Δvd=+0.05)
- **NBFD10** (nd=1.83400, vd=37.34, Δnd=+0.0000, Δvd=+0.18)
- **M-NBFD10** (nd=1.83441, vd=37.28, Δnd=+0.0004, Δvd=+0.12)

Surfaces:
- [FUJIFILM FUJINON XF 18mm f/2 R](../../src/lens-data/fujifilm/FujifilmXF18mmf2.data.ts) `3`: `S-LAH55V (OHARA)`

## stored (nd=1.83400, vd=37.34)  — 1 surface, current label resolves to S-LAH55V

Candidates:
- **S-LAH60** (nd=1.83400, vd=37.16, Δnd=-0.0000, Δvd=-0.18)
- **S-LAH60V** (nd=1.83400, vd=37.21, Δnd=-0.0000, Δvd=-0.13)
- **NBFD10** (nd=1.83400, vd=37.34, Δnd=+0.0000, Δvd=+0.00)
- **M-NBFD10** (nd=1.83441, vd=37.28, Δnd=+0.0004, Δvd=-0.06)

Surfaces:
- [NIKON AF-S NIKKOR 200-500mm f/5.6 E ED VR](../../src/lens-data/nikon/NikonNikkorAFS200500mmf56.data.ts) `21`: `S-LAH55V (OHARA) / TAFD5 (HOYA)`

## stored (nd=1.83400, vd=37.30)  — 1 surface, current label resolves to S-LAH55

Candidates:
- **S-LAH60** (nd=1.83400, vd=37.16, Δnd=-0.0000, Δvd=-0.14)
- **S-LAH60V** (nd=1.83400, vd=37.21, Δnd=-0.0000, Δvd=-0.09)
- **NBFD10** (nd=1.83400, vd=37.34, Δnd=+0.0000, Δvd=+0.04)
- **M-NBFD10** (nd=1.83441, vd=37.28, Δnd=+0.0004, Δvd=-0.02)

Surfaces:
- [VOIGTLÄNDER APO-LANTHAR 180mm f/4 SL Close Focus](../../src/lens-data/voigtlander/VoigtlanderApoLanthar180mmf4.data.ts) `7`: `S-LAH55 (OHARA)`

## stored (nd=1.83441, vd=37.28)  — 1 surface, current label resolves to S-LAH55VS

Candidates:
- **M-NBFD10** (nd=1.83441, vd=37.28, Δnd=+0.0000, Δvd=+0.00)
- **NBFD10** (nd=1.83400, vd=37.34, Δnd=-0.0004, Δvd=+0.06)
- **S-LAH60** (nd=1.83400, vd=37.16, Δnd=-0.0004, Δvd=-0.12)
- **S-LAH60V** (nd=1.83400, vd=37.21, Δnd=-0.0004, Δvd=-0.07)

Surfaces:
- [NIKON NIKKOR Z 35mm f/1.8 S](../../src/lens-data/nikon/NikonZ35f18S.data.ts) `11A`: `S-LAH55VS (OHARA), probable`

## stored (nd=1.83481, vd=42.70) [code=835/427]  — 1 surface, current label resolves to S-LAH60

Candidates:
- **S-LAH55** (nd=1.83481, vd=42.71, Δnd=-0.0000, Δvd=+0.01, codeΔ=0.3)
- **TAFD5F** (nd=1.83481, vd=42.72, Δnd=-0.0000, Δvd=+0.02, codeΔ=0.4)
- **S-LAH55V** (nd=1.83481, vd=42.73, Δnd=-0.0000, Δvd=+0.03, codeΔ=0.4)
- **S-LAH55VS** (nd=1.83481, vd=42.74, Δnd=-0.0000, Δvd=+0.04, codeΔ=0.6)
- **TAFD5** (nd=1.83500, vd=42.98, Δnd=+0.0002, Δvd=+0.28, codeΔ=2.8)

Surfaces:
- [CANON RF 24-240mm f/4-6.3 IS USM](../../src/lens-data/canon/CanonRF24240mmf463.data.ts) `35`: `S-LAH60 type (835/427)`

## stored (nd=1.85478, vd=24.80)  — 1 surface, current label resolves to S-NPH5

Candidates:
- **S-NBH56** (nd=1.85478, vd=24.80, Δnd=-0.0000, Δvd=+0.00)
- **NBFD25** (nd=1.85451, vd=25.15, Δnd=-0.0003, Δvd=+0.35)

Surfaces:
- [CANON RF 28-70mm f/2 L USM](../../src/lens-data/canon/CanonRF2870mmf2L.data.ts) `9`: `S-NPH5 (OHARA)`

## stored (nd=1.85639, vd=40.10) [code=856/401]  — 1 surface, current label resolves to S-LAH89

Candidates:
- **L-LAH85V** (nd=1.85400, vd=40.38, Δnd=-0.0024, Δvd=+0.28, codeΔ=4.8)

Surfaces:
- [SONY FE 14mm f/1.8 GM](../../src/lens-data/sony/SonyFE14mmf18GM.data.ts) `24A`: `S-LAH89-class lanthanum flint (OHARA; patent index aligns with catalog ne, 856/401)`

## stored (nd=1.90366, vd=31.30)  — 1 surface, current label resolves to S-LAH93

Candidates:
- **N-LASF46B** (nd=1.90366, vd=31.32, Δnd=+0.0000, Δvd=+0.02)
- **S-LAH95** (nd=1.90366, vd=31.34, Δnd=-0.0000, Δvd=+0.04)
- **TAFD25** (nd=1.90366, vd=31.32, Δnd=-0.0000, Δvd=+0.02)
- **L-LAH86** (nd=1.90270, vd=31.01, Δnd=-0.0010, Δvd=-0.29)

Surfaces:
- [PANASONIC LUMIX S 20-60mm f/3.5-5.6](../../src/lens-data/panasonic/PanasonicLumixS2060mmf3556.data.ts) `3`: `S-LAH93 (OHARA)`

---

## Summary

- **42** (nd, vd) groups have at least one candidate (51 surfaces) — actionable relabels.
- **16** (nd, vd) groups have NO candidate (18 surfaces) — needs patent verification or Unmatched relabeling.
