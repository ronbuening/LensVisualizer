# Lens Mount And Image-Format Backfill

Track progress for optional `lensMounts` and `imageFormat` metadata in `src/lens-data/**/*.data.ts`.

Canonical ids live in `src/utils/catalog/lensTaxonomy.ts`. Do not free-type labels in lens files. If a lens is ambiguous, leave
the fields unset and add a note here until a source check resolves it.

## Current Coverage

- Total lens data files: **178**
- Files with both `lensMounts` and `imageFormat`: **145**
- Files missing both fields: **33**
- Seeded formats: `110`, `135-full-frame`, `44x33`, `645`, `aps-c`, `four-thirds`
- Seeded mounts: `canon-ef`, `canon-fd`, `canon-rf`, `fixed-lens-camera`, `fujifilm-g`, `fujifilm-x`,
  `hasselblad-h`, `hasselblad-xcd`, `l-mount`, `leica-ltm`, `leica-m`, `micro-four-thirds`, `minolta-sr`,
  `nikon-f`, `nikon-z`, `olympus-om`, `pentax-110`, `pentax-k`, `sigma-sa`, `sony-a`, `sony-fe`

## Source-Review Queue

### Needs Human Intervention / Source Review

Do not seed these from filename alone:

- Sigma interchangeable lenses:
  - `SigmaArt40mmf14` — DSLR-era DG HSM Art; exact catalog mount coverage varied by system.
  - `SigmaDGDNA35mmf14`, `SigmaDGDNA85mmf14`, `SigmaDGDNArt50mmf14` — likely Sony E and L-mount
    full-frame, but confirm the exact production variants represented by each file.
- Leica:
  - `LeicaAPO35mmf2`, `LeicaSummicronV550mmf2`, `LeicaElmarit28mmf28`, `LeicaElmarit90mmf28`,
    `LeicaElcan50mmf2` — confirm M/R/other mount identity and coverage.
- Zeiss historical/system lenses:
  - Carl Zeiss Jena: `CarlZeissJenaPancolar50mmf2`, `CarlZeissJenaTessar50mmf28`,
    `ZeissJenaSonnar50f2`, `ZeissSonnar50f15`, `ZeissTessar144f55`
  - Carl Zeiss Oberkochen: `CarlZeissContarexPlanar55mmf14`, `CarlZeissOlympiaSonnar180mmf28`,
    `CarlZeissPlanarT50mmf14`, `CarlZeissProTessar35mmf32`, `CarlZeissTessar50mmf35`,
    `ZeissBiogon21mmf45`, `ZeissDistagon35mmf14`, `ZeissHologon15mmf8`
- Hasselblad:
  - `HasselbladHC50mmf4` — confirm exact HC generation, coverage, and whether this prescription represents the
    non-II/II production variant before seeding.
- Voigtländer:
  - `VoigtlanderNokton35mmf12`, `VoigtlanderUltron28f2`, `VoigtlanderApoLanthar180mmf4`,
    `VoigtlanderMacroApoLanthar125mmf25`, `VoigtlanderHeliar`, `VoigtlanderUltron50f2` — verify historical
    or multi-mount variants before seeding.
- Vivitar:
  - `VivitarSeries1200mmf3`, `VivitarSeries13585mmf28`, `VivitarSeries170210mmf284` — Series 1 lenses were
    sold in multiple mounts; need source review before choosing one or more ids.
- Nikon rangefinder:
  - `NikonN5cmf11` — likely not Nikon F; taxonomy may need a Nikon S/rangefinder id before seeding.

Useful scan commands:

```bash
rg -n "lensMounts:|imageFormat:" src/lens-data -g "*.data.ts"
rg --files-without-match "lensMounts:" src/lens-data -g "*.data.ts"
rg --files-without-match "imageFormat:" src/lens-data -g "*.data.ts"
```
