# Published Stations Backfill

Open work for `publishedStations` in `src/lens-data/**/*.data.ts`: lens files whose source-tabulated focus rows are not
flagged yet. Field semantics and validation live in `src/lens-data/LENS_DATA_SPEC.md` § Published Stations.

A lens without the field offers every authored zoom station at infinity focus in patent-positions mode, and nothing
else. That default is safe but incomplete: a close-focus row the source really tabulates stays unreachable until it is
flagged. Flag a row only when the file's sources show it is a source row. A reconstructed endpoint, a production
minimum-focus distance, or a code-solved keyframe is never flagged. Delete a row here in the commit that settles it.

## How To Settle A File

1. Read the file header, `focusDescription`, and the `*.audit.md` / `*.analysis.md` notes for which rows are source
   rows. Go back to the patent when they do not say.
2. Add `publishedStations.focus` (and `zoom`, when some zoom stations are solved). Use the per-zoom form when the
   tabulated focus row differs by zoom station.
3. Run `npx vitest run __tests__/src/lens-data/publishedStations.test.ts`. Validation rejects a flagged keyframe that
   moves no gap.

The free-text `Focus status:` tokens in file comments are triage hints only (`agent_docs/decisions.md`).

## Queue

### Keyframed primes whose notes do not say which keyframes are source rows

Each declares `focusPositions` with three keyframes. Decide which of keyframes 1 and 2 the source tabulates.

| Maker folder | Files |
|---|---|
| `canon` | `CanonFD35mmf2` |
| `carl-zeiss-oberkochen` | `ZeissTouit50mmf28Macro` |
| `fujifilm` | `FujifilmXF60mmf24R` |
| `hasselblad` | `HasselbladXCD120mmf35Macro` |
| `leica` | `LeicaAPO43mmf2` |
| `minolta` | `MinoltaAF100mmf28Macro` |
| `nikon` | `NikonAFNikkor35mmf2D`, `NikonAFSNikkor500mmf56EPFEDVR`, `NikonNikkorAFS24mmf14G`, `NikonRUWMicroNikkor50mmf28` |
| `olympus` | `OlympusZuikoAutoMacro90mmf2`, `OlympusZuikoAutoW18mmf35` |
| `panasonic` | `PanasonicLumixG25mmf17` |
| `pentax` | `PentaxA200mmf4MacroED`, `PentaxDA35mmf28MacroLimited` |
| `samsung` | `Samsung20mmf28` |
| `sigma` | `SigmaAPOMacro105mmf28OSHSM`, `SigmaAPOMacro150mmf28OSHSM`, `SigmaAPOMacro180mmf28` |
| `sony` | `SonyE50mmf18OSS`, `SonyFE135mmf18GM`, `SonyFE90mmf28`, `SonyPlanarFE50mmf14ZA` |
| `tamron` | `TamronSPAF60mmf2Di` |

### Header says the focus state is published, but the row is not flagged

The header carries `Focus status: PUBLISHED` while `focusDescription` does not name the source row.

| Maker folder | Files |
|---|---|
| `canon` | `CanonRF35mmF18MACROISSTM` |
| `nikon` | `NikonAFZoomNikkor80200mmf28ED`, `NikonAiAFDCNikkor105mmf2D`, `NikonAiAFNikkor85mmf18S` |
| `panasonic` | `PanasonicLumixS70300mmf4556MacroOIS` |
| `samyang` | `SamyangXP35mmf12` |
| `sony` | `SonyFE50mmf12GM`, `SonyFE70200mmF4MacroGOSSII` |
| `voigtlander` | `VoigtlanderNokton50mmf15AsphericalVM`, `VoigtlanderSuperWideHeliar15mmf45AsphericalSL` |

### Single questions

| File | Question |
|---|---|
| `nikon/NikonAFSDXZoomNikkor1855mmf3556GEDII` | `focusDescription` calls Example 4 focus published, but says the closest endpoints "solve to about 0.250 m". Are the close spacings source rows at each zoom station? |
| `canon/CanonEF100300mmf56` | All four zoom stations are declared published from the header. Confirm that 69 mm and 100 mm are columns of the patent spacing table, not only named states. |
| `canon/CanonEF70300mmf4556DOISUSM` | The 1.5 m pairs are evaluated from the printed focus-cam polynomial at W/M/T; Table 2 prints rounded W/T shifts. Decide whether the W and T close rows count as tabulated. |

### Everything else

Files with no statement about focus provenance keep the default until a patent audit reads their focus tables. Two
things are known from the first pass:

- No solved or derived station was found among zooms with two or three authored stations. That was a keyword search of
  file comments, not a patent read.
- A `Focus status:` of `NO_INTERNAL_RECONSTRUCTION` means the close-focus slot repeats infinity, and
  `CONSTRAINED_RECONSTRUCTION` without `focusPositions` means the close endpoint is reconstructed. Both are already
  correct under the default.
