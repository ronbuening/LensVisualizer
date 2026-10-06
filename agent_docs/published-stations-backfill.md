# Published Stations Backfill

Open work for `publishedStations` in `src/lens-data/**/*.data.ts`. Field semantics and validation live in
`src/lens-data/LENS_DATA_SPEC.md` § Published Stations.

A lens without the field offers every authored zoom station at infinity focus in patent-positions mode, and nothing
else. Flag a focus row only when the lens's sources show it is a source row. A reconstructed endpoint, a production
minimum-focus distance, or a code-solved keyframe is never flagged. Delete a row here in the commit that settles it.

## Status

Every lens with modeled focus travel was reviewed on 2026-10-06 against its own notes: the data-file header,
`focusDescription`, `*.analysis.md` and `*.audit.md`. The 19 lenses those notes did not settle were then read against their patents;
each carries a dated `Patent read` comment beside `closeFocusM`. 300 files now declare the field.
A lens with focus travel and no focus flag was judged a reconstruction.
A new lens is reviewed when it is added (`agent_docs/adding_a_lens.md`).

## How To Settle A File

1. Read the patent's focus table for the cited embodiment and compare it with the authored `var` rows.
2. Add `publishedStations.focus` when a row is tabulated; use the per-zoom form when it differs by zoom station.
   Record the finding in the lens's notes either way, so the next reader does not need the patent.
3. Run `npx vitest run __tests__/src/lens-data/publishedStations.test.ts`. Validation rejects a flagged keyframe that
   moves no gap.

The free-text `Focus status:` tokens in file comments are triage hints only (`agent_docs/decisions.md`).

## Queue

### Zoom stations

| File | Question |
|---|---|
| `canon/CanonEF100300mmf56` | All four zoom stations are declared published from the header. Confirm that 69 mm and 100 mm are columns of the patent spacing table, not only named states. |
