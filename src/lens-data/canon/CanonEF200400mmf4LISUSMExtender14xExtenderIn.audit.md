# Audit Log — Canon EF 200-400mm f/4 L IS USM Extender 1.4×, EXT IN

Patent: US 2013/0308041 A1, Numerical Example 1, magnification conversion unit inserted

Passes on this configuration before 2026-10-07, and every pass on the shared analysis note, are logged in `CanonEF200400mmf4LISUSMExtender14x.audit.md`.

## 2026-10-07 — Patent-audit queue: printed stop diameter

Read against US 2013/0308041 A1, Numerical Example 1. Surfaces 1–40 come from the not-inserted surface table (publication p. 5, PDF p. 17), which the inserted-state table declares shared ("surface numbers 1 to 40 are same"); surfaces 41–56 and the inserted-state "Various kinds of data" are on publication p. 6 (PDF p. 18).

| Field | Before | After | Source |
|---|---|---|---|
| `STO` `sd` | 19.365397314420 | 19.875000 | Surface data row `30 (stop)`: r ∞, d 22.15, effective diameter 39.75 (publication p. 5, PDF p. 17); one-half is 19.875 |

- The stored value was a paraxial solve from the EXT OUT f/4.12 states (paraxial radii 19.3656 / 19.3652 mm), not a patent number, and was the only shared row whose `sd` was not half the printed effective diameter. The file differed from the print, so this is a transcription correction and carries no `sourceErrata` entry. The EXT OUT member carries the same value, so the two files still agree on every shared row.
- In this state the printed f/5.77 needs, by real marginal ray, a stop radius of 19.8539 mm at 287.00 mm and 19.8555 mm at 545.98 mm; one radius from 19.8383 to 19.8711 mm gives 5.77 at both ends within print rounding. The printed 19.875 mm is 0.004 mm above that window: it gives f/5.7642 / f/5.7646, 0.1 % under 5.77, from the file's computed focal lengths of 286.8354 / 545.6471 mm, which are 0.06 % under the printed 287.00 / 545.98. The stop admits an axial beam of radius 24.8808 mm (wide) and 47.3271 mm (tele); the printed focal lengths over that beam give f/5.7675 / f/5.7682, which round to the printed 5.77. Paraxially the same stop gives f/5.6172 / f/5.6168. These are figures for the stop alone: the ray through its edge lies up to 0.0039 mm outside the printed half-diameters of s20, s22, s23, and s24 at 287.00 mm and under 0.001 mm outside those of s9 and s15 at 545.98 mm, and clears every extender rim. With every printed rim as a hard clip the axial beam is 24.8764 / 47.3257 mm in radius, limited at s22 and s15: f/5.7652 / f/5.7648 from the computed focal lengths and f/5.7685 / f/5.7683 from the printed ones.
- Prose brought into line: the header's stop and semi-diameter lines and the `STO` row comment. The shared note's edits are listed in the EXT OUT log.
- The trace does not change. The authored `STO` `sd` does not size the wide-open iris, which is traced from `nominalFno[0]` and stays at 19.8720 mm for both stations, the same opening the EXT OUT member traces. Stated against traced on-axis f-number: f/5.77 → f/5.77 at 287 mm (+0.0 %; the marginal ray reaches the rim of surface 22, sd 21.795) and f/5.76 → f/5.77 at 545.98 mm (+0.0 %; the iris limits).
- Confirmed unchanged on PDF p. 18: r, d, nd, and νd on rows 41–56, from s41 `431.470 / 1.99` and s42 `27.767 / 5.24 / 1.54072 / 47.2` through s48 `18.019 / 6.40 / 1.72047 / 34.7` to s55 `−105.478 / 2.00 / 1.88300 / 40.8`; their semi-diameters as halves of the printed effective diameters (s41 32.27, s48 18.16, s53 20.03, then 41.71 / 41.48 / 41.34 on s54–s56); focal length 287.00 / 545.98; F-number 5.77 / 5.77; d8 43.02 / 78.02; d18 25.57 / 3.10; d25 38.33 / 25.80; BF 68.49. Rows 1–40 are identical to the EXT OUT file, which was read against PDF p. 17 row by row.
- `zoomApertureModel: "fixed-iris"` is kept, on the same grounds as the EXT OUT member: SP sits in the fourth unit, which does not move in zooming (¶0037), and one stop diameter is printed.
- The inserted-state zoom table heads its second column "Intermediate". Its d8 / d18 / d25 of 78.02 / 3.10 / 25.80 are the telephoto values of the not-inserted table and ¶0028 calls FIG. 4B the telephoto end, so the file's "Tele" label stands.
- Open: `nominalFno` keeps 5.765010383668428 / 5.764593653737933, the paraxial f-numbers of the former 19.3654 mm radius, 0.09 % under the printed 5.77. The wide value sizes the traced iris at 19.8720 mm, 0.015 % under the printed 19.875 mm. The tele label is 0.015 % under the f/5.7655 that iris gives at 545.98 mm, which is why that station reads f/5.76 stated against f/5.77 traced. Not changed in this pass.
- Open: row 56 prints d = 68.46 and the file carries 68.49, as its header and row comment say. The same page prints BF 68.49 and total lens length 389.84 at both zoom positions, the inserted d41–d53 sum to the 45.38 they replace, and the not-inserted table prints 68.49 for the same surface. The file has no `sourceErrata` entry for it.


## 2026-10-30 — Shared-prefix shoulders only; full inserted-state review pending

This is a partial synchronization with the [EXT OUT review](./CanonEF200400mmf4LISUSMExtender14x.audit.md), not a
completed shape-and-glass review of EXT IN. Independently inspected the [local original](../../../patents/US20130308041A1.pdf):
the Numerical Example 1 prescription on PDF p. 17 (printed p. 5), the explicit shared-surface declaration on PDF p. 18
(printed p. 6), and inserted-state Fig. 3 on PDF p. 4 (sheet 3). The figure is a native 2560 × 3300 raster at 300 ppi;
the reading crops preserve native pixels. Only optical outlines were read, excluding unit brackets, rays and leaders.

Three resolved rear shoulders of unchanged shared lenses now use `rimExtensionSd`: surface 4, 48.875 mm with clear
sd 47.445 mm; surface 11, 23.675 mm with clear sd 21.5 mm; surface 14, 20.32 mm with clear sd 19.955 mm. The latter
two stop at existing bonded-cap heights; no new opaque interface land is added. Every clear sd, source R/d,
material and control is retained. Shared-prefix parity is restored; the complete 56-surface inserted configuration,
its additional media and its renderer/state constraints remain pending the separate complete review.
