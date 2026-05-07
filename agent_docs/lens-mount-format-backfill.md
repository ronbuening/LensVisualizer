# Lens Mount And Image-Format Backfill

Track progress for optional `lensMounts` and `imageFormat` metadata in `src/lens-data/**/*.data.ts`.

Canonical ids live in `src/utils/lensTaxonomy.ts`. Do not free-type labels in lens files. If a lens is ambiguous, leave
the fields unset and add a note here until a source check resolves it.

## Current Coverage

- Seeded lens files: 41
- Seeded formats: `135-full-frame`, `aps-c`
- Seeded mounts: `canon-rf`, `fujifilm-x`, `nikon-z`, `sony-fe`

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

## Still Needs Review

Prioritize obvious production systems first, then historical and fixed-lens cases:

- Canon EF and FD lenses: likely `canon-ef` / `canon-fd` with `135-full-frame`, but confirm any special cases.
- Nikon F lenses: likely `nikon-f` with `135-full-frame`; confirm fixed-lens compact cameras separately.
- Remaining Fujifilm XF lenses: likely `fujifilm-x` with `aps-c`.
- Sony E lenses: verify whether each file represents full-frame Sony E (`sony-fe`, `135-full-frame`) or APS-C Sony E
  before seeding. `SonyFE24mmf18ZA` especially needs review because the product family/name can be confusing.
- Panasonic and Sigma mirrorless lenses: likely L-mount full-frame where the file name/product line says S, DG DN, or
  Lumix S; confirm APS-C/fixed-lens Sigma DP files separately.
- Pentax 110 lenses: likely `pentax-110` with `110`; Pentax DA likely `pentax-k` with `aps-c`; Pentax FA/F likely
  `pentax-k` with `135-full-frame`.
- Ricoh GR and Sigma DP compact cameras: leave `lensMounts` unset unless a fixed-camera taxonomy is added; seed only
  `imageFormat` after confirming sensor/film format.
- Leica, Zeiss, Voigtländer, Olympus, Minolta, Vivitar, and historical Canon Serenar lenses need source checks because
  production variants and mount histories are easy to mislabel.

Useful scan commands:

```bash
rg -n "lensMounts:|imageFormat:" src/lens-data -g "*.data.ts"
rg --files-without-match "lensMounts:" src/lens-data -g "*.data.ts"
```
