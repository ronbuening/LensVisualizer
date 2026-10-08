# Canon EF 200-400mm f/4 L IS USM Extender 1.4× Audit

## 2026-08-25 — Extender-in supplemental configuration

- Reviewed the ignored local `patents/US20130308041A1.pdf`, specifically Embodiment 1 Figure 3 and Numerical Example 1's inserted prescription. The patent states that surfaces 1–40 are shared with the extender-out state and publishes the complete surfaces 41–56 replacement segment.
- Corrected the supplemental file's maker-relative type import and canonical Canon assignee spelling. Normalized the first element's glass coordinate to the resolver-safe `487702` form.
- Linked the visible `EXT OUT` and hidden `EXT IN` prescriptions through one `opticalConfiguration` group. The hidden name includes its state so noindex comparison identities remain distinguishable, while only the extender-out member remains catalog-visible.
- Retained the patent's published effective-diameter halves as SDs. Figure 3 is a schematic rather than an axially scaled section, so its automatic photogrammetry screen is not used to override the exact per-surface table.
- Audited all eight inserted extender elements and the repeated shared glass coordinates. The complete 32-element prescription resolves at 32/32 strict Sellmeier coverage with zero catalog mismatches; no new catalog entry or tolerance change was justified.
- Added a parity regression covering the 22 shared elements, surfaces through patent surface 40, the surface-41 insertion gap, the repeated L44 pair, and identical zoom motion.

## 2026-08-25 — Six-lens diagram follow-up

- Rechecked the supplied EXT OUT and EXT IN renders against Figures 1 and 3 at 600 dpi. Both figures are schematic and axially compressed; the Numerical Example 1 effective-diameter column remains the stronger source, so every published half-diameter is retained.
- Added the source-backed unit powers and roles to both diagram configurations: positive focusing L1, negative L2, positive L3/L41/L43/L44, negative stabilizing L42, and positive EXTa/negative EXTb in the inserted state.
- Verified identical wide-to-tele motion in both configurations. L2 moves 35.00 mm imageward and L3 moves 12.53 mm imageward; L1 and the fixed fourth-unit subgroups do not zoom. The patent publishes no finite-focus spacing, so the L1 focus role remains labeled without synthesizing focus travel.
- Re-ran glass resolution after the catalog audit. EXT OUT remains 24/24 strict and EXT IN remains 32/32 strict, with zero coordinate mismatches.

## 2026-10-07 — Patent-audit queue: printed stop diameter

Read against US 2013/0308041 A1, Numerical Example 1, state where the magnification conversion unit is not inserted: surface data and "Various kinds of data" under ¶0061 (publication p. 5, PDF p. 17), on the page image and a 400 dpi crop of rows 26–35. This log also covers the shared analysis note; the EXT IN data file has its own log, `CanonEF200400mmf4LISUSMExtender14xExtenderIn.audit.md`.

| Field | Before | After | Source |
|---|---|---|---|
| `STO` `sd` | 19.365397314420 | 19.875000 | Surface data row `30 (stop)`: r ∞, d 22.15, effective diameter 39.75 (publication p. 5, PDF p. 17); one-half is 19.875 |

- The stored value was a paraxial solve, not a patent number: the paraxial stop radii for f/4.12 are 19.3656 mm at 205.00 mm and 19.3652 mm at 389.99 mm. It was the only one of the 44 rows whose `sd` was not half the printed effective diameter. The file differed from the print, so this is a transcription correction and carries no `sourceErrata` entry.
- The printed diameter gives the printed f-number. By real marginal ray f/4.12 needs a stop radius of 19.8723 mm at the wide end and 19.8749 mm at the tele end, and any radius from 19.8508 to 19.8964 mm gives 4.12 at both ends within print rounding; 19.875 mm lies inside that window. A 19.875 mm stop gives f/4.1195 / f/4.1200 by real marginal ray and f/4.0144 / f/4.0143 paraxially, so the header's former statement that 39.75 mm "is a clear-beam entry, not the mechanical iris" held only for a paraxial f-number.
- Prose brought into line: the header's stop and semi-diameter lines, the `STO` row comment, the stop sentences in the note's design-identification section, and the note's verification table. That table's "Modeled F/#" column (4.12005 / 4.11995 / 5.76501 / 5.76459) held the paraxial f-numbers of the 19.3654 mm radius; it carries the real-ray f-numbers of the 39.75 mm stop instead (4.1195 / 4.1200 / 5.7642 / 5.7646), with a paragraph on the EXT IN shortfall and on what `nominalFno` traces.
- The trace does not change. The authored `STO` `sd` does not size the wide-open iris, which is traced from `nominalFno[0]` and stays at 19.8720 mm for both stations. Stated against traced on-axis f-number: f/4.12 → f/4.12 at 205 mm (+0.0 %; the marginal ray reaches the rim of surface 22, sd 21.795, half the printed 43.59) and f/4.12 → f/4.12 at 389.99 mm (+0.0 %; the iris limits).
- The f-numbers quoted for the 19.875 mm stop are for the stop alone. The ray through its edge runs within 0.004 mm of the printed half-diameter on every surface from s19 to s29 at 205 mm and lies outside four of them: s22 by 0.0039 mm, s20 by 0.0028 mm, s24 by 0.0017 mm, and s23 by 0.0009 mm. At 389.99 mm it lies outside s15 by 0.0006 mm and s9 by 0.0004 mm. With every printed rim as a hard clip the axial beam is 24.8764 / 47.3257 mm in radius, limited at s22 and s15: f/4.1202 / f/4.1201, and f/5.7652 / f/5.7648 with the extender in. The note's verification paragraph states this beside the stop-only figures.
- Confirmed unchanged on the same page: r, d, nd, and νd on all 44 rows, from s1 `304.970 / 8.16 / 1.48749 / 70.2` through s29 `−127.044 / 4.25`, s31 `139.420 / 3.17 / 1.80610 / 33.3`, and s38 `174.462 / 3.04` to s44 `435.743 / 68.49`; the other 43 semi-diameters as halves of the printed effective diameters; focal length 205.00 / 389.99 (computed 204.9911 / 389.9736 mm); F-number 4.12 / 4.12; d8 43.02 / 78.02; d18 25.57 / 3.10; d25 38.33 / 25.80; BF 68.49; the stop gaps of 4.25 mm before and 22.15 mm after.
- `zoomApertureModel: "fixed-iris"` is kept. ¶0032 defines SP as the unit that limits the open F-number beam, ¶0037 places SP in the fourth unit, which does not move in zooming, and the surface table prints one stop diameter for both zoom ends.
- Open: `nominalFno` keeps 4.120049565275637 / 4.119950434724363, the paraxial f-numbers of the former 19.3654 mm radius. Both are within 0.0012 % of the printed 4.12. The wide value sizes the traced iris at 19.8720 mm, 0.015 % under the printed 19.875 mm, and the tele label is 0.015 % under the f/4.1206 that iris gives at 389.99 mm. Not changed in this pass.
- Open: the note cites Numerical Example 1 at "publication pages 17–18" and "patent page 17". Those are PDF page numbers; the printed page numbers are 5 and 6. It also cites Table 1 at "publication page 23", which is PDF p. 23, printed page 11.
