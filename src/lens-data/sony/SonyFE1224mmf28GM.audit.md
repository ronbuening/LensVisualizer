# Audit Log - SONY FE 12-24mm f/2.8 GM

Patent: WO 2021/200206 A1, Example 2 / FIG. 6

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/WO2021200206A1.pdf`. The source is image-only in this workspace; Example 2's lens section is FIG. 6 on PDF page 77.
- The data file stores patent effective diameters as semi-diameters, except S7 is reduced by 0.055 mm to preserve rendered clearance in the tight S6-S7 air gap. The stop stores the largest tabulated stop semi-diameter because the schema does not carry a zoom-varying physical stop diameter.
- FIG. 6 shows a very large GP1 front group, a much smaller GP2/stop region, and rear groups that grow only modestly toward the image side. Current SDs match that silhouette: 38.98 mm at the first surface, mid-lens values around 11-17 mm, an 11.815 mm stop, and rear surfaces ending around 13.965 mm.
- No SD values changed.

## 2026-07-30 - `961323` family review

- Rechecked Example 2 / Table 6 and visually confirmed the corresponding FIG. 6 layout. All three affected rows
  remain `nd = 1.96073`, `vd = 32.3`.
- No reviewed public coefficient row reproduces both coordinates within the runtime safety window. S-LAH98 and
  TAFD45 are close in Abbe number but their `nd = 1.95375` index is too far from the patent row.
- Retained the explicit unmatched `961323` annotation without a supplier claim. No prescription, zoom, focus,
  aperture, or semi-diameter values changed.

## 2026-07-30 - `678322` family review

- Rendered and visually reviewed PDF page 27 / patent page 25 from local `patents/WO2021200206A1.pdf`.
- Example 2 / Table 6 prints L22 at `nd = 1.67764`, `vd = 32.2`, confirming the stored coordinate. The table supplies no glassmaker, trade name, secondary line index, or partial-dispersion value.
- Rechecked the current and discontinued-inclusive first-party vendor catalogs. No coefficient row reproduces both coordinates inside the runtime compatibility window.
- Schott SF5/N-SF5 and their cross-vendor equivalents are centered near `nd = 1.6727`, about `0.0049` below the patent index and outside the guard.
- Removed the unsupported Schott-family attribution and retained an explicit unmatched dense-flint annotation on the patent Abbe fallback.

## 2026-10-08 - L56 dPgF moved onto the engine's normal line

- Reviewed local `patents/WO2021200206A1.pdf`. ¶0029 on PDF page 10 defines the deviation on the patent's own line, ΔθgF = θgF − 0.6483 + 0.001802·νd, with θgF = (ng − nF)/(nF − nC). Table 21 on PDF page 42 prints, for Example 2's Lc (L56), νd = 81.6, θgF = 0.5389 and ΔθgF = 0.0376; the formula reproduces the printed deviation (0.03764).
- The data file had copied the patent's 0.0376. The patent prints the absolute θgF, so the stored value is θgF − (0.6438 − 0.001682·νd) = 0.5389 − 0.50655 = +0.03235, stored to the source's four decimals as 0.0324. `dPgF` and `apdNote` changed; no prescription value changed.
- The catalog-curve screen (`npm run audit:dpgf`) had not listed the element: the repo's HOYA FCD1 curve reads PgF 0.5377 against the patent's 0.5389, which put the stored 0.0376 outside the screen's source-line window (+0.0363) as well as the engine-line one (+0.0312).
- L56 is the only element in the file that carries `dPgF`. L14 and L53 are tagged `apd: "inferred"` with no number, and no element authors nC, nF or ng.
- The analysis keeps the patent's own 0.0376 for condition (2) and now states the line it is measured from.

## 2026-10-08 - Index column re-referenced from the e line to the d line

- Reviewed local `patents/WO2021200206A1.pdf`. ¶0060 (PDF page 16) defines "ndi" as the index at the d line (587.6 nm) and "νdi" as the d-line Abbe number. Table 6 (PDF page 27) nevertheless prints, for all 17 elements, the e-line index of a catalog glass beside that glass's νd: every printed value equals a catalog ne to five decimals and none equals a catalog nd.
- Sibling examples. Table 1 (Example 1, PDF page 21) and Table 16 (Example 4, PDF page 39) print d-line values under the same heading (1.49700 / 81.6, 1.43700 / 95.1, 1.95375 / 32.3). Table 11 (Example 3, PDF page 33) prints e-line values like Table 6. Table 21 (PDF page 42) gives Nd2G at the d line for every example: 1.9212 for Example 2, where Table 6 prints 1.93024 for that element. The analysis had read 1.9212 as a carryover from Example 1; it is the same glass printed at two lines.
- Deciding check: wide-end paraxial group focal lengths against Table 7 (PDF page 28).

| Group | Table 7 | Table 6 indices as printed | d-line indices |
| --- | ---: | ---: | ---: |
| GP1 | −20.31 | −20.297 | −20.308 |
| GP2 | 58.02 | 57.761 | 58.019 |
| GP3 | 362.10 | 368.783 | 362.134 |
| GP4 | 46.40 | 46.488 | 46.408 |
| GP5 | −78.16 | −77.662 | −78.163 |

- The focal lengths follow: 12.367 / 16.936 / 23.283 mm against Table 8's 12.37 / 16.94 / 23.29 (12.361 / 16.931 / 23.280 with the printed column).
- Decision: store d-line indices rather than mark the file `indexReference: "e"`. The patent's stated reference and its group data are d-line, and the printed column pairs ne with νd, which is not the ne / νe pair the e-line mode expects.

| Elements | Table 6 | Stored nd | νd | Source of the d-line value | Label |
| --- | ---: | ---: | ---: | --- | --- |
| L11 | 1.58547 | 1.58313 | 59.5 | Table 1 surface 18; Table 16 surface 1 | M-BACD12 / L-BAL42 class |
| L12 | 1.77173 | 1.76802 | 49.2 | Table 1 surfaces 1, 3 | M-TAF101 class |
| L13, L42 | 1.55206 | 1.55032 | 75.5 | catalog: FCD705 | FCD705 class |
| L14, L53 | 1.43810 | 1.43700 | 95.1 | Table 1 surfaces 5, 27 | FCD100 class |
| L15 | 1.85649 | 1.85026 | 32.3 | catalog: S-LAH71 | S-LAH71 class |
| L21 | 1.93024 | 1.92119 | 24.0 | Table 1 surface 12; Table 21 Nd2G | FDS24 class |
| L22 | 1.67764 | 1.67270 | 32.2 | catalog: E-FD5, SF5, H-ZF2 | E-FD5 / S-TIM25 class |
| L31, L41, L52 | 1.96073 | 1.95375 | 32.3 | Table 1 surfaces 9, 20 | TAFD45 / S-LAH98 class |
| L32 | 1.59412 | 1.59201 | 67.0 | Table 16 surface 20 | M-PCD51 class |
| L51 | 1.90314 | 1.89286 | 20.4 | catalog: S-NPH4 | S-NPH4 class |
| L54 | 2.00912 | 2.00100 | 29.1 | Table 16 surfaces 7, 14, 23 | TAFD55 / S-LAH99 class |
| L55 | 1.85639 | 1.85135 | 40.1 | Table 1 surface 31 (Table 16 prints 1.85134) | M-TAFD305 class |
| L56 | 1.49845 | 1.49700 | 81.6 | Table 1 surfaces 7, 21, 33; Table 16 | FCD1 / S-FPL51 / N-PK52A class |

- The four catalog-sourced rows are glass types the patent prints only at the e line. For each, every catalog glass whose ne and νd equal the printed pair has the same nd to five decimals, so the stored value does not depend on which vendor is right.
- Labels stay class-level with the supplier unstated. Eleven of the thirteen types are HOYA catalog coordinates; L15 and L51 are OHARA's. The earlier D-ZK2, M-TAF1, S-FPL53, PCD51 and D-ZLaF85 labels were nearest-name fits to the e-line numbers.
- This supersedes the conclusions of the two 2026-07-30 entries above. 1.96073 / 32.3 is the e-line index of TAFD45 / S-LAH98, and 1.67764 / 32.2 is the e-line index of the SF5 family: the 0.0049 by which SF5 "missed" was ne − nd.
- Changed: `nd` on 17 elements and their 17 surfaces, 17 `fl` values, the glass labels, `specs`, `focalLengthDesign`, and the header comment. Unchanged: radii, thicknesses, aspheres, variable gaps, semi-diameters, and L56 `dPgF` 0.0324, which comes from the printed θgF and νd.
- The traced wide-open iris radii are now 8.112 / 9.559 / 11.799 mm against Table 9's 8.115 / 9.565 / 11.815, and the stated f/2.91 beam is still iris-limited at all three stations.
- All 17 elements now resolve to a catalog Sellmeier curve. Eight did before, five of them to a neighbouring glass inside the ±0.003 window.
- Other files that show the same e-line pattern are queued in `agent_docs/glass-relabel-followup.md`; none was changed here.

## 2026-10-08 - Index correction recorded in sourceErrata

- Pages checked in local `patents/WO2021200206A1.pdf` (no text layer; pages rendered and read): ¶0060 (PDF page 16), Table 1 (page 21), Table 6 (page 27), Tables 7, 8 and 9 (page 28), Table 16 (page 39), Table 21 (page 42).
- Table 6's printed index column was read again on the page. It equals the 17 values the file held before the d-line change.
- Added 17 `corrected` entries to `sourceErrata`, one per surface whose `nd` differs from Table 6. Each element's index sits on its front surface only, cemented elements included, so no surface is listed twice. Each of the 17 surface rows carries an inline comment with the printed figure. No `nd`, `vd`, R, d, sd, label, asphere or `dPgF` value changed.
- Every entry cites `source-summary` and `sibling-example`. The last column is the paraxial focal length of the entry's group with that one surface left at the printed index, against Table 7. With all 17 applied the groups compute −20.308 / 58.019 / 362.134 / 46.408 / −78.163 mm.

| Surface | Table 6 prints | Applied | Kind that isolates the value | Group with this entry as printed / Table 7 |
| --- | ---: | ---: | --- | --- |
| 1A (L11) | 1.58547 | 1.58313 | sibling example: Table 1 surface 18, Table 16 surface 1 | GP1 −20.25 / −20.31 |
| 3A (L12) | 1.77173 | 1.76802 | sibling example: Table 1 surfaces 1, 3 | GP1 −20.26 / −20.31 |
| 5 (L13) | 1.55206 | 1.55032 | source summary only (Table 7); value is catalog nd | GP1 −20.28 / −20.31 |
| 7 (L14) | 1.43810 | 1.43700 | sibling example: Table 1 surfaces 5, 27 | GP1 −20.29 / −20.31 |
| 9 (L15) | 1.85649 | 1.85026 | source summary only (Table 7); value is catalog nd | GP1 −20.45 / −20.31 |
| 12 (L21) | 1.93024 | 1.92119 | sibling example: Table 1 surface 12; source summary: Table 21 Nd2G 1.9212 | GP2 58.70 / 58.02 |
| 13 (L22) | 1.67764 | 1.67270 | source summary only (Table 7); value is catalog nd | GP2 57.10 / 58.02 |
| 16 (L31) | 1.96073 | 1.95375 | sibling example: Table 1 surfaces 9, 20 | GP3 378.51 / 362.10 |
| 18A (L32) | 1.59412 | 1.59201 | sibling example: Table 16 surface 20 | GP3 353.22 / 362.10 |
| 20 (L41) | 1.96073 | 1.95375 | sibling example: Table 1 surfaces 9, 20 | GP4 46.81 / 46.40 |
| 21 (L42) | 1.55206 | 1.55032 | source summary only (Table 7); value is catalog nd | GP4 46.09 / 46.40 |
| 23 (L51) | 1.90314 | 1.89286 | source summary only (Table 7); value is catalog nd | GP5 −81.44 / −78.16 |
| 24 (L52) | 1.96073 | 1.95375 | sibling example: Table 1 surfaces 9, 20 | GP5 −76.13 / −78.16 |
| 26 (L53) | 1.43810 | 1.43700 | sibling example: Table 1 surfaces 5, 27 | GP5 −78.65 / −78.16 |
| 28 (L54) | 2.00912 | 2.00100 | sibling example: Table 16 surfaces 7, 14, 23 | GP5 −76.60 / −78.16 |
| 30A (L55) | 1.85639 | 1.85135 | sibling example: Table 1 surface 31 (Table 16 prints 1.85134) | GP5 −77.60 / −78.16 |
| 32 (L56) | 1.49845 | 1.49700 | sibling example: Table 1 surfaces 7, 21, 33; Table 16 surfaces 5, 15, 18, 27 | GP5 −78.28 / −78.16 |

- Five entries (surfaces 5, 9, 13, 21, 23; four glass types) have no d-line value anywhere in the patent. Their applied value is the catalog nd of the glass whose ne and νd equal the printed pair. Table 7 shows each printed value is wrong and that the applied one reproduces the group focal length; it does not fix the fifth decimal. Tables 1 and 16 show the slip for the block, not for these values. They are corrected with the block as one unit under the ruling in `agent_docs/lens-patent-audit.md`.
- Table 21 prints fw = 12.363 for Example 2 where Table 8 prints f = 12.37. The file computes 12.367 mm (12.361 with the printed column), so this one figure does not separate the two columns and is not cited.
- Stop schedule: added `zoomStopSemiDiameters: [8.115, 9.565, 11.815]`. ¶0060 defines φi as the effective diameter of surface i, STO as the aperture stop and Fno as the open F-number. Table 6 leaves the stop's diameter as the variable φ15, and Table 9 lists φ15 = 16.23 / 19.13 / 23.63 mm at Wide / Mid / Tele (the same at infinity and at 280 mm) beside Table 8's Fno 2.91 at all three. The three columns are the file's three zoom stations.
- The STO surface row keeps sd 11.815; the engine takes each station's radius from the schedule. `zoomApertureModel` is not set.
- Traced with the schedule: f/2.909 / 2.908 / 2.906 (the radii for exactly 2.91 are 8.1122 / 9.5586 / 11.7985 mm), 0.14 % at most from 2.91. `npm run audit:aperture` lists no rim-, trace- or iris-limited station.
- Header comment and the analysis sentence on iris sizing updated to match.
