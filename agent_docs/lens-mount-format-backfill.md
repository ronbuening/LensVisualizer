# Lens Mount And Image-Format Backfill

Track progress for optional `lensMounts` and `imageFormat` metadata in `src/lens-data/**/*.data.ts`.

Canonical ids live in `src/utils/lensTaxonomy.ts`. Do not free-type labels in lens files. If a lens is ambiguous, leave
the fields unset and add a note here until a source check resolves it.

## Current Coverage

- Seeded lens files: 71
- Seeded formats: `110`, `135-full-frame`, `aps-c`
- Seeded mounts: `canon-ef`, `canon-fd`, `canon-rf`, `fujifilm-x`, `l-mount`, `nikon-f`, `nikon-z`,
  `pentax-110`, `pentax-k`, `sony-fe`

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

## Still Needs Review

Prioritize remaining obvious production systems first, then historical and fixed-lens cases:

- Remaining Fujifilm XF lenses: likely `fujifilm-x` with `aps-c`.
- Remaining Sony E lenses: verify whether each file represents full-frame Sony E (`sony-fe`, `135-full-frame`) or APS-C
  Sony E before seeding. `SonyFE24mmf18ZA` especially needs review because the product family/name can be confusing.
- Remaining Panasonic and Sigma mirrorless lenses: likely L-mount full-frame where the file name/product line says S, DG
  DN, or Lumix S; confirm APS-C/fixed-lens Sigma DP files separately.
- Remaining Pentax K lenses: Pentax FA/F likely `pentax-k` with `135-full-frame`; confirm any DA/F soft-focus edge cases.
- Ricoh GR and Sigma DP compact cameras: leave `lensMounts` unset unless a fixed-camera taxonomy is added; seed only
  `imageFormat` after confirming sensor/film format.
- Leica, Zeiss, Voigtländer, Olympus, Minolta, Vivitar, and historical Canon Serenar lenses need source checks because
  production variants and mount histories are easy to mislabel.

Useful scan commands:

```bash
rg -n "lensMounts:|imageFormat:" src/lens-data -g "*.data.ts"
rg --files-without-match "lensMounts:" src/lens-data -g "*.data.ts"
```
