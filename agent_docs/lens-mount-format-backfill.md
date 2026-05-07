# Lens Mount And Image-Format Backfill

Track progress for optional `lensMounts` and `imageFormat` metadata in `src/lens-data/**/*.data.ts`.

Canonical ids live in `src/utils/lensTaxonomy.ts`. Do not free-type labels in lens files. If a lens is ambiguous, leave
the fields unset and add a note here until a source check resolves it.

## Current Coverage

- Seeded lens files: 119
- Seeded formats: `110`, `135-full-frame`, `aps-c`
- Seeded mounts: `canon-ef`, `canon-fd`, `canon-rf`, `fixed-lens-camera`, `fujifilm-x`, `l-mount`,
  `nikon-f`, `nikon-z`, `pentax-110`, `pentax-k`, `sony-fe`

## Seeded This Session

### Initial fixture

- `src/lens-data/voigtlander/VoigtlanderApoLanthar50f2.data.ts` — `["nikon-z", "sony-fe"]`, `135-full-frame`

### Batch 1

- Nikon Z full-frame: `NikonZ26f28`, `NikonZ28f28`, `NikonZ35f18S`, `NikonNikkorZ40mmf2`,
  `NikonNikkorZ50f18S`, `NikonNikkorZ50f12`, `NikonZ58f095SNoct`, `NikonZ85f18S`, `NikonZ105f28`,
  `NikonZ135f18`
- Canon RF full-frame: `CanonRF50mmf12L`, `CanonRF85mmf12L`, `CanonRF135f18`, `CanonRF24105mmf4L`,
  `CanonRF24240mmf463`
- Fujifilm X APS-C: `FujifilmXF18mmf2`, `FujifilmXF23mmf14`, `FujifilmXF35mmf14R`, `FujifilmXF56mmf12`,
  `FujifilmXF80f28`

### Batch 2

- Nikon Z full-frame: `NikonNikkorZ100400f4556`, `NikonNikkorZ1430mmf4S`, `NikonNikkorZ24120mmf4S`,
  `NikonNikkorZ24200mmf463VR`, `NikonNikkorZ2450mmf463`, `NikonNikkorZ2470mmf4S`,
  `NikonNikkorZ35mmf12S`, `NikonNikkorZ70200f28`, `NikonZ1424f28S`, `NikonZ2470f28`
- Canon RF full-frame: `CanonRF100f28`, `CanonRF1535f28`, `CanonRF24105mmf28Z`, `CanonRF2450mmf463`,
  `CanonRF2470f28`, `CanonRF2870mmf28`, `CanonRF2870mmf2L`, `CanonRF70200f28`, `CanonRF85mmf2Macro`
- Sony E full-frame: `SonyFE90mmf28`

### Batch 3

- Canon EF full-frame: `CanonEF100mmf28LMacroIS`, `CanonEF40mmf28`, `CanonEF50mmf1L`
- Canon FD full-frame: `CanonFD35mmf2`, `CanonFD50mmf12L`, `CanonFDn50f12`
- Nikon F full-frame: `Nikon85f14AIS`, `Nikon85f14D`, `NikonAF28f14D`, `NikonAFS105f28G`,
  `NikonAFS28f14E`, `NikonAFSMicroNikkor60f28G`, `NikonAI135mmf2`, `NikonAI135mmf28`,
  `NikonMicroNikkorPCE45mmf28D`, `NikonNikkor105f14E`, `NikonNikkor85f14G`,
  `NikonNikkorAFS1424mmf28`, `NikonNikkorAFS1635mmf4`, `NikonNikkorAFS2470mmf28E`,
  `NikonNikkorAFS70200mmf28E`, `NikonNikkorAFS80400mmf4556G`, `NikonNikkorPCE19mmf4E`,
  `NikonPCENikkor24mmf35DED`
- Pentax 110: `Pentax11024mmf28`, `Pentax11050mmf28`
- Pentax K APS-C: `PentaxDA1650mmf28`, `PentaxDA50135mmf28`
- L-mount full-frame: `PanasonicS35mmf18`, `PanasonicSPro50mmf14`

### Batch 4

- Fujifilm X APS-C: `FujifilmXF1655mmf28R`, `FujifilmXF1680mmf4`, `FujifilmXF200mmf2R`,
  `FujifilmXF50140mmf28R`, `FujifilmXF50f1`, `FujifilmXF60mmf24R`, `FujifilmXF90mmf2`
- Olympus OM full-frame: `OlympusZuiko85mmf2`, `OlympusZuikoAuto21mmf2`, `OlympusZuikoAutoMacro50mmf2`,
  `OlympusZuikoAutoMacro90mmf2`, `OlympusZuikoAutoS50mmf12`, `OlympusZuikoAutoS50mmf14`,
  `OlympusZuikoAutoS55mmf12`
- Minolta SR full-frame: `MinoltaRokkor45mmf2MD`, `MinoltaRokkor50mmf14MD`, `MinoltaVarisoft85mmf28`
- Leica LTM / M39 full-frame: `CanonSerenar28mmf35`, `CanonSerenar35mmf32`, `CanonSerenar50mmf18`,
  `CanonSerenar85mmf15`
- Pentax K full-frame: `PentaxF85mmf28Soft`, `PentaxFA31mmf18ALLtd`
- L-mount full-frame: `PanasonicLumixS2060mmf3556`
- Sony E: `SonyFE135mmf18GM`, `SonyFE35mmf28ZA`, `SonyFE55mmf18ZA`, `SonyFE85mmf14GMII`,
  `SonyFE24mmf18ZA` (APS-C)
- Fujifilm X APS-C third-party: `VoigtlanderNoktonX50mmf12`

### Batch 5

- Fixed-lens Camera full-frame: `Nikon28Ti28mmf28`, `Nikon35Ti35mmf28`, `NikonL35AF35mmf28`,
  `RicohGR28f28`
- Fixed-lens Camera APS-C: `RicohGR218mmf28`, `RicohGR328f28`, `RicohGR3x`, `RicohGR428f28`,
  `RicohGXRA1218mmf25`, `SigmaDP2X24mmf28`, `SigmaDp2M30mmf28`, `SigmaDP3M50mmf28`

### Batch 6

- Nikon F full-frame: `Nikon58f14GDesignCandidate`, `NikonNikkorAFS120300mmf28`,
  `NikonNikkorAFS200500mmf56`, `NikonNikkorAuto24f28`, `NikonNikkorN28mmf2`,
  `NikonNikkorSAuto50mmf14`

## Remaining Work

### Needs Human Intervention / Source Review

Do not seed these from filename alone:

- Sigma interchangeable lenses:
  - `SigmaArt40mmf14` — DSLR-era DG HSM Art; exact catalog mount coverage varied by system.
  - `SigmaDGDNA35mmf14`, `SigmaDGDNA85mmf14`, `SigmaDGDNArt50mmf14` — likely Sony E and L-mount
    full-frame, but confirm the exact production variants represented by each file.
- Leica:
  - `Leica28mmf17` and `LeicaAPO43mmf2` — likely fixed-lens Q-family full-frame; verify before setting
    `imageFormat` and `lensMounts: ["fixed-lens-camera"]`.
  - `LeicaAPO35mmf2`, `LeicaSummicronV550mmf2`, `LeicaElmarit28mmf28`, `LeicaElmarit90mmf28`,
    `LeicaElcan50mmf2` — confirm M/R/other mount identity and coverage.
- Zeiss historical/system lenses:
  - Carl Zeiss Jena: `CarlZeissJenaPancolar50mmf2`, `CarlZeissJenaTessar50mmf28`,
    `ZeissJenaSonnar50f2`, `ZeissSonnar50f15`, `ZeissTessar144f55`
  - Carl Zeiss Oberkochen: `CarlZeissContarexPlanar55mmf14`, `CarlZeissOlympiaSonnar180mmf28`,
    `CarlZeissPlanarT50mmf14`, `CarlZeissProTessar35mmf32`, `CarlZeissTessar50mmf35`,
    `ZeissBiogon21mmf45`, `ZeissDistagon35mmf14`, `ZeissHologon15mmf8`
- Voigtländer:
  - `VoigtlanderNokton50f1` — exact production mount coverage needs source review before assigning mount ids.
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
```
