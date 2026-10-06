# Published Stations Backfill

Open work for `publishedStations` in `src/lens-data/**/*.data.ts`. Field semantics and validation live in
`src/lens-data/LENS_DATA_SPEC.md` § Published Stations.

A lens without the field offers every authored zoom station at infinity focus in patent-positions mode, and nothing
else. Flag a focus row only when the lens's sources show it is a source row. A reconstructed endpoint, a production
minimum-focus distance, or a code-solved keyframe is never flagged. Delete a row here in the commit that settles it.

## Status

Every lens with modeled focus travel was reviewed on 2026-10-06 against its own notes: the data-file header,
`focusDescription`, `*.analysis.md` and `*.audit.md`. No patent was re-read. 282 files now declare the field.
A lens with focus travel and no focus flag was judged a reconstruction from those notes, unless it is listed below.
A new lens is reviewed when it is added (`agent_docs/adding_a_lens.md`).

## How To Settle A File

1. Read the patent's focus table for the cited embodiment and compare it with the authored `var` rows.
2. Add `publishedStations.focus` when a row is tabulated; use the per-zoom form when it differs by zoom station.
   Record the finding in the lens's notes either way, so the next reader does not need the patent.
3. Run `npx vitest run __tests__/src/lens-data/publishedStations.test.ts`. Validation rejects a flagged keyframe that
   moves no gap.

The free-text `Focus status:` tokens in file comments are triage hints only (`agent_docs/decisions.md`).

## Queue

### Notes do not settle the focus rows — needs the patent

| File | What the notes leave open |
|---|---|
| `fujifilm/FujifilmGF120mmf4RLM` | A comment gives the patent close-focus distance and β = −0.5×; the gaps are not attributed and the back focus may be computed. |
| `hasselblad/HasselbladHC120mmf4Macro` | The 1:1 gap (D13 = 51.784) is listed, but no note says it is a patent row. |
| `hasselblad/HasselbladHC50mmf4` | Notes cite the patent's normalized focusing amount, not a tabulated close row. |
| `leica/LeicaAPOMacroElmaritTL60mmf28` | The 1:1 gaps are listed beside the patent's β = −1.0, but are never called a tabulated row. |
| `leica/LeicaAPOVarioElmaritSL90280mmf284` | Notes say 'patent Example 1' for the 1200 mm close state without naming the zoom stations it covers. |
| `minolta/MinoltaVarisoft85mmf28` | The close d_A7 sits in a 'patent' column of the notes table; nothing else ties it to a source row. |
| `nikon/NikonMicroNikkorPCE45mmf28D` | Notes cite the patent's d0 and β = −0.50; the close back focus is computed and the gap rows are not attributed. |
| `nikon/NikonNikkorPCE19mmf4E` | Close gaps are listed without saying whether they are patent rows or derived. |
| `nikon/NikonZDX18140mmf3563VR` | Notes cite patent close-focus magnifications but not the gap rows. |
| `olympus/OlympusMZuiko1442mmf3556II` | The patent's close state is 243.2 mm; the model uses its group motions toward a 0.25 m endpoint. |
| `panasonic/PanasonicSPro50mmf14` | Notes say the patent states −0.15× at close focus and list the gaps; they do not call them a table row. |
| `pentax/PentaxFA31mmf18ALLtd` | Notes give u = 0.30 m and m = −0.155 but do not call the d8/BF rows patent rows. |
| `pentax/PentaxSMC67100mmf4` | The close d11 is a patent row for use with the close-up attachment, shown here as the 0.443 m standalone endpoint. |
| `sigma/SigmaAPOMacro105mmf28OSHSM` | A three-state spacing table sits beside patent magnifications but is not called the patent's table. |
| `sony/SonyFE2470mmf28GMII` | Close distances are stated for wide and tele only; the middle station is inferred. |
| `sony/SonyFE24mmf14GM` | Only the patent close-focus β is cited; the gap rows are not attributed. |
| `sony/SonyFE24mmf18ZA` | Only the patent's β = −0.25 is cited; the gap rows are not attributed. |
| `sony/SonyFE85mmf14GMII` | Notes say the patent states 846 mm while the close table gives d0 = 722.07 mm; the link between them is not stated. |
| `viltrox/ViltroxAF14mmf4Air` | Patent Table 3 prints the close row; the model changes D2 by 0.09 mm to keep D1 + D2 constant and calls it a constrained reconstruction. |

### Zoom stations

| File | Question |
|---|---|
| `canon/CanonEF100300mmf56` | All four zoom stations are declared published from the header. Confirm that 69 mm and 100 mm are columns of the patent spacing table, not only named states. |
