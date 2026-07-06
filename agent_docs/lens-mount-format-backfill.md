# Lens Mount And Image-Format Backfill

Track progress for optional `lensMounts` and `imageFormat` metadata in `src/lens-data/**/*.data.ts`.

Canonical ids live in `src/utils/catalog/lensTaxonomy.ts`. Do not free-type labels in lens files. If a lens is ambiguous, leave
the fields unset and add a note here until a source check resolves it.

## Current Coverage

- Total lens data files: **418**
- Files with both `lensMounts` and `imageFormat`: **394**
- Files missing `lensMounts`: **18**
- Files missing `imageFormat`: **23**
- Files missing both fields: **17**
- Seeded formats currently in use: `1-inch-type`, `110`, `135-full-frame`, `44x33`, `4x5`, `5x7`, `645`,
  `6x6`, `6x7`, `6x9`, `aps-c`, `four-thirds`
- Seeded mounts currently in use: `agfa-ambi-silette`, `canon-ef`, `canon-ef-m`, `canon-ef-s`, `canon-fd`,
  `canon-rf`, `contax-rf`, `contax-yashica`, `enlarging-lens`, `exakta`, `fixed-lens-camera`, `four-thirds`,
  `fujifilm-g`, `fujifilm-x`, `hasselblad-h`, `hasselblad-xcd`, `konica-ar`, `l-mount`,
  `large-format-lens-board`, `leica-ltm`, `leica-m`, `leica-r`, `m42`, `micro-four-thirds`, `minolta-sr`,
  `nikon-1`, `nikon-f`, `nikon-s`, `nikon-z`, `olympus-om`, `pentax-110`, `pentax-645`, `pentax-67`,
  `pentax-k`, `praktina`, `sigma-sa`, `sony-a`, `sony-fe`, `zeiss-contaflex`, `zeiss-contarex`

## Source-Review Queue

### Needs Human Intervention / Source Review

Do not seed these from filename alone:

- Sigma interchangeable lenses:
  - `SigmaArt40mmf14` — DSLR-era DG HSM Art; exact catalog mount coverage varied by system.
  - `SigmaDGDNA35mmf14`, `SigmaDGDNA85mmf14`, `SigmaDGDNArt50mmf14` — likely Sony E and L-mount
    full-frame, but confirm the exact production variants represented by each file.
- Laowa:
  - `Laowa12mmf28ZeroD` has `imageFormat` but no mount. Confirm represented production mounts before seeding.
- Voigtländer:
  - `VoigtlanderUltron28f2`, `VoigtlanderUltron50f2` — verify historical or multi-mount variants before seeding.
  - `VoigtlanderHeliar` is tagged as `large-format-lens-board`; leave `imageFormat` unset until a specific production
    focal length/frame-size interpretation is chosen for the normalized patent example.
- Vivitar:
  - `VivitarSeries1200mmf3`, `VivitarSeries13585mmf28`, `VivitarSeries170210mmf284` — Series 1 lenses were
    sold in multiple mounts; need source review before choosing one or more ids.
- Hidden reference fixtures:
  - `src/lens-data/reference/*.data.ts` are synthetic mirror/folded fixtures and intentionally remain outside public
    catalog mount/format taxonomy unless a separate reference-fixture convention is added.

Useful scan commands:

```bash
rg -n "lensMounts:|imageFormat:" src/lens-data -g "*.data.ts"
rg --files-without-match "lensMounts:" src/lens-data -g "*.data.ts"
rg --files-without-match "imageFormat:" src/lens-data -g "*.data.ts"
```
