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

**Scope**: 33 mismatched surfaces across 27 unique groups.

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
- **K5** (nd=1.52249, vd=59.60, Δnd=+0.0043, Δvd=+0.60)
- **S-NSL5** (nd=1.52249, vd=59.84, Δnd=+0.0043, Δvd=+0.84)

Surfaces:
- [LEICA APO-VARIO-ELMARIT-SL 90-280mm f/2.8-4](../../src/lens-data/leica/LeicaAPOVarioElmaritSL90280mmf284.data.ts) `31`: `S-NSL36 (OHARA)`

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
- **S-TIL27** (nd=1.57501, vd=41.51, Δnd=-0.0035, Δvd=-0.19)
- **LF3** (nd=1.58215, vd=42.00, Δnd=+0.0037, Δvd=+0.30)

Surfaces:
- [CANON SERENAR 28mm f/3.5](../../src/lens-data/canon/CanonSerenar28mmf35.data.ts) `6`: `BaF3 (Schott)`

## stored (nd=1.62041, vd=60.30)  — 2 surfaces, current label resolves to S-BSM28

Candidates:
- **N-SK16** (nd=1.62041, vd=60.32, Δnd=-0.0000, Δvd=+0.02)
- **S-BSM16** (nd=1.62041, vd=60.29, Δnd=+0.0000, Δvd=-0.01)
- **S-BSM15** (nd=1.62299, vd=58.17, Δnd=+0.0026, Δvd=-2.13)
- **BACD15** (nd=1.62299, vd=58.12, Δnd=+0.0026, Δvd=-2.18)
- **S-PHM51** (nd=1.61700, vd=62.80, Δnd=-0.0034, Δvd=+2.50)

Surfaces:
- [LEICA APO-VARIO-ELMARIT-SL 90-280mm f/2.8-4](../../src/lens-data/leica/LeicaAPOVarioElmaritSL90280mmf284.data.ts) `32`: `S-BSM28 (OHARA)`
- [LEICA APO-VARIO-ELMARIT-SL 90-280mm f/2.8-4](../../src/lens-data/leica/LeicaAPOVarioElmaritSL90280mmf284.data.ts) `41`: `S-BSM28 (OHARA)`

## stored (nd=1.62299, vd=58.10)  — 1 surface, current label resolves to S-PHM52Q

Candidates:
- **S-BSM15** (nd=1.62299, vd=58.17, Δnd=+0.0000, Δvd=+0.07)
- **BACD15** (nd=1.62299, vd=58.12, Δnd=+0.0000, Δvd=+0.02)
- **S-BSM10** (nd=1.62280, vd=57.05, Δnd=-0.0002, Δvd=-1.05)
- **N-SK10** (nd=1.62278, vd=56.98, Δnd=-0.0002, Δvd=-1.12)
- **S-BSM16** (nd=1.62041, vd=60.29, Δnd=-0.0026, Δvd=+2.19)

Surfaces:
- [PANASONIC LEICA DG SUMMILUX 9mm f/1.7 ASPH](../../src/lens-data/panasonic/PanasonicLeicaDG9mmf17.data.ts) `20`: `S-PHM52Q (OHARA)`

## stored (nd=1.65844, vd=50.90) [code=658/509]  — 1 surface, current label resolves to BACD14

Candidates:
- **N-SSK5** (nd=1.65844, vd=50.88, Δnd=+0.0000, Δvd=-0.02, codeΔ=0.6)
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

## stored (nd=1.69680, vd=55.52)  — 2 surfaces, current label resolves to S-TIM35

Candidates:
- **N-LAK14** (nd=1.69680, vd=55.41, Δnd=+0.0000, Δvd=-0.11)
- **H-LAK12** (nd=1.69680, vd=56.18, Δnd=-0.0000, Δvd=+0.66)
- **K-LaK14** (nd=1.69680, vd=55.60, Δnd=+0.0000, Δvd=+0.08)
- **S-LAL14** (nd=1.69680, vd=55.53, Δnd=-0.0000, Δvd=+0.01)
- **LAC13** (nd=1.69350, vd=53.34, Δnd=-0.0033, Δvd=-2.18)

Surfaces:
- [NIKON AF-S NIKKOR 120-300mm f/2.8 E FL ED SR VR](../../src/lens-data/nikon/NikonNikkorAFS120300mmf28.data.ts) `9`: `OHARA S-TIM35`
- [NIKON NIKKOR Z 135mm f/1.8 S Plena](../../src/lens-data/nikon/NikonZ135f18.data.ts) `13`: `Barium crown (near S-BAH27)`

## stored (nd=1.72047, vd=34.71)  — 1 surface, current label resolves to S-LAM52

Candidates:
- **S-NBH8** (nd=1.72047, vd=34.71, Δnd=+0.0000, Δvd=+0.00)
- **N-KZFS8** (nd=1.72047, vd=34.70, Δnd=+0.0000, Δvd=-0.01)

Surfaces:
- [NIKON AF-S NIKKOR 120-300mm f/2.8 E FL ED SR VR](../../src/lens-data/nikon/NikonNikkorAFS120300mmf28.data.ts) `6`: `OHARA S-LAM52 (≈Schott N-KZFS8)`

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
- **SF6** (nd=1.80518, vd=25.43, Δnd=+0.0000, Δvd=+0.02)
- **J-SFH1** (nd=1.80809, vd=22.74, Δnd=+0.0029, Δvd=-2.67)
- **S-NPH1** (nd=1.80809, vd=22.76, Δnd=+0.0029, Δvd=-2.65)

Surfaces:
- [NIKON AF-S NIKKOR 120-300mm f/2.8 E FL ED SR VR](../../src/lens-data/nikon/NikonNikkorAFS120300mmf28.data.ts) `36`: `OHARA S-LAH63Q type`

## stored (nd=1.80610, vd=33.30)  — 1 surface, current label resolves to S-TIH6

Candidates:
- **NBFD15** (nd=1.80610, vd=33.27, Δnd=-0.0000, Δvd=-0.03)
- **E-LAFH2** (nd=1.80384, vd=33.89, Δnd=-0.0023, Δvd=+0.59)

Surfaces:
- [NIKON AF-S NIKKOR 28mm f/1.4 E ED](../../src/lens-data/nikon/NikonAFS28f14E.data.ts) `21`: `S-TIH6 (OHARA)`

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

## stored (nd=1.90366, vd=31.30)  — 1 surface, current label resolves to S-LAH93

Candidates:
- **N-LASF46B** (nd=1.90366, vd=31.32, Δnd=+0.0000, Δvd=+0.02)
- **S-LAH95** (nd=1.90366, vd=31.34, Δnd=-0.0000, Δvd=+0.04)
- **TAFD25** (nd=1.90366, vd=31.32, Δnd=-0.0000, Δvd=+0.02)

Surfaces:
- [PANASONIC LUMIX S 20-60mm f/3.5-5.6](../../src/lens-data/panasonic/PanasonicLumixS2060mmf3556.data.ts) `3`: `S-LAH93 (OHARA)`

---

## Summary

- **27** (nd, vd) groups have at least one candidate (33 surfaces) — actionable relabels.
- **0** (nd, vd) groups have NO candidate (0 surfaces) — needs patent verification or Unmatched relabeling.
