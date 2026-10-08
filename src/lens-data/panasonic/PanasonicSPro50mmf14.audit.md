# Audit Log - Panasonic Lumix S Pro 50mm f/1.4

Patent: WO 2020/158622 A1, Example 3 / Table 3A

## 2026-05-20 - Catalog-mismatch queue audit

### Patent evidence

- Local patent file checked: `patents/JPWO2020158622A1.pdf`.
- Example 3 / Table 3A rows confirmed from local patent text:
  - S7* / L4: nd = 1.80755, vd = 40.9.
  - S19 / L10: nd = 1.94595, vd = 18.0, delta PgF = 0.0386.
  - S21 / L11: nd = 1.56732, vd = 42.8.
  - S22 / L12: nd = 1.55032, vd = 75.5, delta PgF = 0.0277.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L4 / S7* | `LAH-type... S-LAH93 region` | `808409 - PGM-moldable lanthanum crown...` | Sweep 2 resolves the code through public HOYA MC-NBFD135 coefficients. |
| L10 / S19 | `S-NPH5 (OHARA)` | `FDS18 (HOYA)` | Exact nd/vd catalog match. |
| L11 / S21 | `S-BAH11 (OHARA)` | `S-TIL26 (OHARA)` | Exact nd/vd catalog match. |
| L12 / S22 | `S-FPM4 (OHARA)` | `FCD705 (HOYA)` | Exact nd/vd catalog match. |

### Catalog-search disposition

- Checked public OHARA/HOYA catalog data and existing coefficient-backed catalog entries.
- L4 now resolves through the Sweep 2 808409 / MC-NBFD135 catalog path; the prior nearby `S-LAH93` wording remains rejected to avoid a false match.
- L9 now resolves through the existing 717295 SF1 / S-TIH1 code path after removing the `unknown vendor` blocker from the data label.

### Analysis sync

- Updated L4/L10/L11/L12 descriptions, glass table rows, chromatic strategy, and source notes.

## 2026-06-24 - Systematic patent-table audit

### Patent evidence

- Re-extracted `patents/JPWO2020158622A1.pdf` and reviewed Numerical Example 3 / Tables 3A-3C against the data file.
- The powered prescription, aspherical coefficients, variable focus spacings, and patent-published dPgF values match the current data.
- The patent does not publish semi-diameters or effective diameters.

### Updates

| Area | Disposition |
|---|---|
| Glass labels | No prescription data change. Existing data already keeps FCD515, FCD705, FDS18, and the 808409 / MC-NBFD135 code-backed L4 label. |
| APD | Patent-published dPgF remains authoritative for L1, L5, L6, L10, and L12. No inferred/patent status changes were needed. |
| High-index status | L1 and L10 remain the high-index / UHR anchors identified by the patent nd values. |
| SDs | Kept the existing ray-trace-derived SDs. With no patent clear-aperture table, those estimates remain the defensible source of record. |
| Analysis | Synced the stale L4 note so it no longer claims that 808409 lacks a coefficient-backed catalog path. |

## 2026-07-29 - Catalog-coordinate correction

- Corrected L1 from modern `S-NPH2` to historical OHARA `PBH21`, the exact 1.92286 / 20.90 row.

## 2026-08-07 - Partial-dispersion ambiguity audit

- Rechecked Example 3 / Table 3A in the ignored local `patents/JPWO2020158622A1.pdf`.
- Table 3A gives L1 as nd = 1.92286, vd = 20.9, and dPgF = +0.0282. PBH21, N-SF66, and E-FDS1 share the
  923209 coordinate, but E-FDS1 is the catalog-equivalent row whose published partial-dispersion value matches the
  patent. Relabeled L1 accordingly while leaving Panasonic's production supplier unspecified.
- The authored patent `dPgF` now remains authoritative at the runtime g-line even when the catalog-equivalent curve
  supplies C/d/F.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Numerical Example 3 in `patents/JPWO2020158622A1.pdf` (PDF page 22, native text layer): Table 3A surface 25*
  d = 13.42000; surfaces 26–27 are an unlabeled flat plate, 2.10000 mm, nd 1.51680, νd 64.2; Table 3C BF = 1.00419 /
  1.00421 / 1.00398 (infinity / intermediate / close), a 0.0002 mm spread, so one gapAfter of 1.00419 is kept and the
  close-focus difference stays in rounding.
- Surface 25A now stores the patent's 13.42 mm, with `rearPlates` (N-BK7, the 1.51680 / 64.2 class; S-BSL7 is
  1.51633) and gapAfter 1.00419 mm. Paraxial check against the previous data: EFL identical; defocus changes by at most
  0.00002 mm (rounding in the old 15.8087). Physical track grows by 0.7155 mm and now equals the printed 148.004 mm
  total length. `closeFocusM` 0.44 is the Panasonic specification and is unchanged.

## 2026-09-23 — Glass relabel for the 1.51680 / 64.2 crown

- The element with patent nd 1.51680 / νd 64.2 was labelled S-BSL7 (OHARA), which is the 1.51633 / 64.14 glass and
  only matched within tolerance. It is now labelled as the N-BK7 (SCHOTT) class, an exact coordinate match, the same
  class the rear plate uses. The production supplier remains unspecified; the analysis glass table and sources follow.

## 2026-10-08 - dPgF moved to the engine's normal line

### Patent evidence

- Read `patents/JPWO2020158622A1.pdf` (38 pages, native text layer; page header "JP WO2020/158622 A1 2020.8.6", and
  its Table 3A matches this file's prescription). The patent prints a deviation only and states no normal line.
  ¶0158 (PDF p. 17) defines the table column `dPgF` only as the anomalous dispersion of the g-line and F-line, with no
  formula. Condition (6), 0.015 < LG1ed_dPgf (¶0127, PDF pp. 14-15; claim 7, PDF p. 3), defines its term the same way.
  No PgF / θgF column and no line constants appear on any page.
- Table 3A (PDF pp. 21-22) prints dPgF for five elements: surface 1 (L1) 0.0282, surfaces 9 and 11 (L5, L6) 0.0194,
  surface 19 (L10) 0.0386 and surface 22 (L12) 0.0277. Table 1 (PDF p. 25) gives condition (6) for Example 3 as
  L5 0.019 and L6 0.019.
- With no stated line, the patent's deviation cannot be turned into an absolute PgF from the patent alone. The four
  figures equal, to four decimals, the HOYA catalog ΔPgF of the labelled glasses (ΔPgF field of the local
  `tmp/pdfs/HOYA20260707_include_obsolete.agf`: E-FDS1 0.0282, FCD515 0.0194, FDS18 0.0386, FCD705 0.0277). HOYA
  measures that deviation from its own line through C7 and F2; those two entries of the same AGF give
  PgF = 0.648418 − 0.0018017·νd, about 0.6483 − 0.0018·νd, not the engine's 0.6438 − 0.001682·νd.
- The stored values were those patent figures copied directly. Read on the engine's line they meant PgF 0.6368 (L1),
  0.5478 (L5, L6), 0.6521 (L10) and 0.5445 (L12), against catalog 0.6390, 0.5441, 0.6546 and 0.5400.

### Change

No element authors nC, nF or ng, so the engine rebuilds every g-line index from `dPgF`. Each value is now the PgF of
the repo's HOYA catalog curve for the labelled glass minus the engine line at the stored νd, to six decimals. This is
the catalog-derived route: the patent prints no a and b for its line, so none were assumed. No nd, νd, glass label,
`apd` tag or surface changed.

| Element | Glass | νd | Source figure | Stored before | Stored after |
| --- | --- | ---: | --- | ---: | ---: |
| L1 | E-FDS1 | 20.9 | Patent dPgF 0.0282 (line unstated); HOYA catalog curve PgF 0.638970 | +0.0282 | +0.030324 |
| L5 | FCD515 | 68.6 | Patent dPgF 0.0194 (line unstated); HOYA catalog curve PgF 0.544115 | +0.0194 | +0.015701 |
| L6 | FCD515 | 68.6 | Patent dPgF 0.0194 (line unstated); HOYA catalog curve PgF 0.544115 | +0.0194 | +0.015701 |
| L10 | FDS18 | 18.0 | Patent dPgF 0.0386 (line unstated); HOYA catalog curve PgF 0.654567 | +0.0386 | +0.041043 |
| L12 | FCD705 | 75.5 | Patent dPgF 0.0277 (line unstated); HOYA catalog curve PgF 0.539986 | +0.0277 | +0.023177 |

- The stored values are taken from the unrounded curve PgF (FCD515 is 0.5441153, which gives +0.0157005), so the
  six-decimal PgF in the table reproduces them to within 0.000001.
- Cross-check: converting the patent's figures through the conventional 0.64833 − 0.0018·νd line instead gives
  +0.030264, +0.015835, +0.041006 and +0.023321, and through the AGF's C7–F2 line above +0.030316, +0.015807,
  +0.041063 and +0.023281. Both sets are within 0.00015 of the catalog-derived values, so the routes agree. The
  catalog curve was used because no line is printed in this patent.
- Each `apdNote` now quotes the patent's dPgF as the patent's, says its line is not stated, and gives the runtime value
  as catalog-derived. The header box gained a partial-dispersion note.
- Analysis: a note under the glass table says the ΔPgF figures are the patent's and gives the stored engine-line
  values; the two sentences that test condition (6) now label the deviation as the patent's.
- This supersedes the 2026-08-07 statement that the patent `dPgF` is the runtime g-line figure. The patent's number
  stays as evidence for the glass identification; the runtime value is the catalog PgF on the engine's line.

### Left

- L2, L3, L4, L7, L8, L9, L11 and L13 carry no `dPgF`. The patent prints none for them and none was added.
- The `apd: "patent"` tags stay: the patent itself singles out these five elements by printing a dPgF for them.

## 2026-10-08 - Analysis prose: L2 glass name

- The "Chromatic correction strategy" paragraph of the analysis still called L2 "S-BSL7", a leftover from before the
  2026-09-23 relabel. It now says "N-BK7 class", matching the data file's L2 label and the analysis's own L2 section
  and glass table.
- Checked against the local `patents/JPWO2020158622A1.pdf`, Numerical Example 3 (PDF page 21, text layer): surface 3
  prints nd 1.51680, νd 64.2, the N-BK7 coordinate, not S-BSL7's 1.51633 / 64.14.
- No data-file change.
